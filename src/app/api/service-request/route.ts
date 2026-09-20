import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { sendEmail } from '@/lib/sendEmail';
import { config } from '@/lib/config';
import { ServiceEmailTemplate } from '@/components/email/ServiceEmailTemplate';

export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as any;
        const { name, email, serviceType, message } = body;

        if (!name || !email) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Ensure all values are proper strings (not undefined/null)
        const nameStr: string = String(name).trim();
        const emailStr: string = String(email).trim();
        const serviceTypeText: string = serviceType ? String(serviceType).trim() : 'Not specified';
        const messageStr: string = message ? String(message).trim() : '';

        // 1. Insert into D1 Database (service_requests table)
        const db = getRequestContext().env.DB;
        await db.prepare(
            `INSERT INTO service_requests (name, email, service_type, message)
             VALUES (?, ?, ?, ?)`
        ).bind(nameStr, emailStr, serviceTypeText, messageStr).run();

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
        const emailHtml = ServiceEmailTemplate({
            name: nameStr,
            email: emailStr,
            serviceType: serviceTypeText,
            message: messageStr,
            submittedAt
        });
        const adminEmailHtml = `<!DOCTYPE html>${emailHtml}`;

        // 4. Build User Auto-Responder HTML
        const year = new Date().getFullYear();
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
                                <h2 style="color: #111827; font-size: 22px; font-weight: 700; margin: 0 0 20px 0;">Service Request Received!</h2>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">Dear ${nameStr},</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">Thank you for your interest in BizoraEdge. We have received your request for our <strong>${serviceTypeText}</strong> services on ${submittedAt}.</p>
                                <p style="font-size: 16px; color: #4b5563; line-height: 1.6; margin: 0 0 30px 0;">Our specialists will review your requirements and contact you shortly to discuss the next steps.</p>
                                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0 0 30px 0;" />
                                <p style="font-size: 14px; color: #9ca3af; margin: 0 0 5px 0;">Best Regards,</p>
                                <p style="font-size: 16px; font-weight: 600; color: #111827; margin: 0;">The BizoraEdge Team</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                                <p style="margin: 0; font-size: 13px; color: #9ca3af;">&copy; ${year} BizoraEdge. All rights reserved.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        const env = getRequestContext().env as any;
        const resendApiKey = env.RESEND_API_KEY || config.email.resendApiKey;
        const notificationEmail = env.NOTIFICATION_EMAIL || config.email.notificationEmail;

        // 5. Execute email sending in parallel (non-blocking) via Resend API HTTP fallback
        Promise.all([
            sendEmail({
                apiKey:  resendApiKey,
                from:    'BizoraEdge Services <info@bizoraedge.com>',
                to:      notificationEmail,
                subject: `New Service Request: ${nameStr} - ${serviceTypeText}`,
                replyTo: emailStr,
                html:    adminEmailHtml,
            }),
            sendEmail({
                apiKey:  resendApiKey,
                from:    'BizoraEdge Team <info@bizoraedge.com>',
                to:      emailStr,
                subject: 'We received your Service Request!',
                html:    autoResponderHtml,
            })
        ]).catch(err => {
            console.error("Email sending failed in background:", err);
        });

        return NextResponse.json({ success: true, message: 'Service requested successfully' }, { status: 200 });
    } catch (error: unknown) {
        console.error('Error in service API:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
