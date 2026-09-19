import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import nodemailer from 'nodemailer';
import { config } from '@/lib/config';
import { QuoteEmailTemplate } from '@/components/email/QuoteEmailTemplate';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !message || !phone) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Add phone column if not exists
        await pool.execute(`ALTER TABLE quotes ADD COLUMN IF NOT EXISTS phone VARCHAR(20) AFTER email`).catch(() => {});

        // 1. Insert into MySQL Database (quotes table)
        const query = `
            INSERT INTO quotes (name, email, phone, project_type, message)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [name, email, phone, 'Not specified', message];
        await pool.execute(query, values);

        // 2. Setup Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.email.smtpEmail,
                pass: config.email.smtpPassword,
            },
        });

        const notificationEmail = config.email.notificationEmail;

        // 3. Format Current Time (IST)
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

        // 4. Format Admin Email HTML
        const emailHtml = QuoteEmailTemplate({ 
            name, 
            email, 
            phone,
            message, 
            submittedAt 
        });
        const adminEmailHtml = `<!DOCTYPE html>${emailHtml}`;

        // 5. Send Admin Email
        const sendAdminEmail = transporter.sendMail({
            from: `"BizoraEdge Quotes" <${config.email.smtpEmail}>`,
            to: notificationEmail,
            subject: `New Quote Request: ${name}`,
            replyTo: email,
            html: adminEmailHtml,
        });

        // 6. Send User Auto-Responder
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

        const sendUserEmail = transporter.sendMail({
            from: `"BizoraEdge Team" <${config.email.smtpEmail}>`,
            to: email,
            subject: 'We received your Quote Request!',
            html: autoResponderHtml,
        });

        // Execute email sending in the background without blocking the response (prevents UI hanging)
        Promise.all([sendAdminEmail, sendUserEmail]).catch(err => {
            console.error("Email sending failed in background:", err);
        });

        return NextResponse.json({ success: true, message: 'Quote submitted successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error in quote API:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

