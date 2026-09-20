export const config = {
    db: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'BizoraEdge',
        port: parseInt(process.env.MYSQL_PORT || '3306'),
    },
    email: {
        smtpEmail: process.env.SMTP_EMAIL || 'venkateshwarink@gmail.com',
        smtpPassword: process.env.SMTP_PASSWORD || 'wbrn ongq ewvw zjli',
        notificationEmail: process.env.NOTIFICATION_EMAIL || 'venkateshwarink@gmail.com',
        resendApiKey: process.env.RESEND_API_KEY || '',
    }
};