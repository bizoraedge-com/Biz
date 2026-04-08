import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend SDK with the provided API key
const resend = new Resend('re_YznRQ2TG_CoLGgPLwCaXhHTky7PwaBj2X');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, projectType, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Send the email using Resend
        // Note: For testing, Resend requires 'from' to be 'onboarding@resend.dev' or a verified domain.
        // It also requires 'to' to be the email address that generated the API key.
        const data = await resend.emails.send({
            from: 'BizoraEdge Quotes <onboarding@resend.dev>',
            to: ['manikandanbca1999@gmail.com'],
            subject: 'New Quote Request from BizoraEdge',
            replyTo: email, // This allows you to just hit 'Reply' to the sender
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h2>New Quote Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
                    <hr/>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f4f4f5; padding: 15px; border-radius: 8px;">
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                </div>
            `
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending quote email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
