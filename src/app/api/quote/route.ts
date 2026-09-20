import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { Resend } from 'resend';
import { config } from '@/lib/config';
import { QuoteEmailTemplate } from '@/components/email/QuoteEmailTemplate';

export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as any;
        const { name, email, phone, message } = body;

        if (!name || !email || !message || !phone) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // 1. Insert into D1 Database (quotes table)
        const db = getRequestContext().env.DB;
        if (!db) {
            console.error("Database binding 'DB' is missing in Cloudflare environment.");
            return NextResponse.json({ success: false, message: 'Configuration error: DB binding missing on server.' }, { status: 500 });
        }
        await db.prepare(
            `INSERT INTO quotes (name, email, phone, project_type, message)
             VALUES (?, ?, ?, ?, ?)`
        ).bind(name, email, phone, 'Not specified', message).run();

        // 2. Format Current Time (IST)
        const submittedAt = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }) + ' IST';

        // 3. Format Admin Email HTML
        const emailHtml = QuoteEmailTemplate({ 
            name, 
            email, 
            phone,
            message, 
            submittedAt 
        });
        const adminEmailHtml = `<!DOCTYPE html>${emailHtml}`;

        // 4. Send User Auto-Responder
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
                                <h2 style="color: #111827; font-size: 22px; font-weight: 700; margin: 0 0 20px 0;">Quote Request Received!</h2>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">Dear ${name},</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">Thank you for requesting a quote from BizoraEdge. We have received your requirements on ${submittedAt}.</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 30px 0;">Our team will review the details and get back to you shortly with a personalized estimate.</p>
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

        const env = getRequestContext().env as any;
        const resendApiKey = env.RESEND_API_KEY || config.email.resendApiKey;
        const notificationEmail = env.NOTIFICATION_EMAIL || config.email.notificationEmail;
        const resend = new Resend(resendApiKey);

        // 5. Execute email sending in parallel via Resend
        await Promise.all([
            resend.emails.send({
                from:    'BizoraEdge Quotes <info@bizoraedge.com>',
                to:      notificationEmail,
                subject: `New Quote Request: ${name}`,
                replyTo: email,
                html:    adminEmailHtml,
            }),
            resend.emails.send({
                from:    'BizoraEdge Team <info@bizoraedge.com>',
                to:      email,
                subject: 'We received your Quote Request!',
                html:    autoResponderHtml,
            })
        ]).catch(err => {
            console.error("Email sending failed in background:", err);
        });

        return NextResponse.json({ success: true, message: 'Quote submitted successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error in quote API:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error', error: error.message || String(error) }, { status: 500 });
    }
}
