import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/email/ContactEmailTemplate';
import { z } from 'zod';
import { config } from '@/lib/config';

export const runtime = 'edge';

// ── Validation schema ────────────────────────────────────────────────────────
const contactSchema = z.object({
    name:        z.string().min(1, 'Name is required').max(100),
    email:       z.string().email('Invalid email address'),
    phone:       z.string().min(10, 'Phone number must be at least 10 digits').max(20),
    companyName: z.string().max(200).optional().default(''),
    subject:     z.string().max(255).optional().default(''),
    description: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Validate input
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            const errorMessage = result.error.issues[0]?.message || 'Invalid input.';
            return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
        }

        const { name, email, phone, companyName, subject, description } = result.data;

        // 2. Insert all fields into D1 DB
        const db = getRequestContext().env.DB;
        await db.prepare(
            `INSERT INTO contacts (name, email, phone, company_name, subject, description)
             VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(name, email, phone, companyName || null, subject || null, description).run();

        // 3. Format submission time (IST)
        const submittedAt = new Date().toLocaleString('en-IN', {
            timeZone:  'Asia/Kolkata',
            year:      'numeric',
            month:     'long',
            day:       'numeric',
            hour:      'numeric',
            minute:    '2-digit',
            second:    '2-digit',
            hour12:    true,
        }) + ' IST';

        // 4. Build admin email HTML
        const emailHtml = ContactEmailTemplate({ name, email, phone, companyName, subject, description, submittedAt });

        const autoResponderHtml = `
            <div style="font-family: 'Inter', 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 40px 20px; width: 100%;">
                <table align="center" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); margin: 0 auto;">
                    <tbody>
                        <tr>
                            <td style="background-color: #ffffff; padding: 40px 40px 30px; text-align: center; border-top: 6px solid #0052cc;">
                                <img src="https://bizoraedge.com/images/logo-dark.png" alt="BizoraEdge Logo" width="180" style="display: block; margin: 0 auto; outline: none; border: none; text-decoration: none;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 40px 40px;">
                                <h2 style="color: #111827; font-size: 22px; font-weight: 700; margin: 0 0 20px 0;">Thank You for Contacting BizoraEdge!</h2>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">Dear ${name},</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">We have received your message and our team will get back to you <strong>within 24 hours</strong>.</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 30px 0;">If you have any urgent queries, simply reply to this email.</p>
                                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0 0 30px 0;" />
                                <p style="font-size: 14px; color: #9ca3af; margin: 0 0 5px 0;">Best Regards,</p>
                                <p style="font-size: 16px; font-weight: 600; color: #111827; margin: 0;">The BizoraEdge Team</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                                <p style="margin: 0; font-size: 13px; color: #9ca3af;">&copy; ${new Date().getFullYear()} BizoraEdge. All rights reserved.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        // 5. Send both emails in parallel via Resend API
        const resend = new Resend(config.email.resendApiKey);
        
        await Promise.all([
            resend.emails.send({
                from:    'BizoraEdge Contact <info@bizoraedge.com>',
                to:      config.email.notificationEmail,
                subject: `New Lead: ${name}${companyName ? ` (${companyName})` : ''}`,
                html:    `<!DOCTYPE html>${emailHtml}`,
            }),
            resend.emails.send({
                from:    'BizoraEdge Team <info@bizoraedge.com>',
                to:      email,
                subject: 'Thank You for Contacting BizoraEdge',
                html:    autoResponderHtml,
            })
        ]).catch(err => {
            console.error("Email sending failed:", err);
        });

        return NextResponse.json({ success: true, message: 'Message received and emails sent successfully.' });

    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
    }
}
