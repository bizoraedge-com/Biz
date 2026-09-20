export async function sendEmail({
    apiKey,
    from,
    to,
    subject,
    html,
    replyTo
}: {
    apiKey: string;
    from: string;
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}) {
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to,
            subject,
            html,
            ...(replyTo ? { reply_to: replyTo } : {})
        })
    });
    
    if (!res.ok) {
        const errText = await res.text();
        console.error("Resend API error:", errText);
        throw new Error(`Email sending failed: ${res.status} - ${errText}`);
    }
    
    return res.json();
}
