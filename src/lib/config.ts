const getEnv = (key: string) => {
    if (typeof process !== 'undefined' && process.env) {
        return process.env[key];
    }
    return undefined;
};

export const config = {
    db: {
        host: getEnv('MYSQL_HOST') || 'localhost',
        user: getEnv('MYSQL_USER') || 'root',
        password: getEnv('MYSQL_PASSWORD') || '',
        database: getEnv('MYSQL_DATABASE') || 'BizoraEdge',
        port: parseInt(getEnv('MYSQL_PORT') || '3306'),
    },
    email: {
        smtpEmail: getEnv('SMTP_EMAIL') || 'business@bizoraedge.com',
        smtpPassword: getEnv('SMTP_PASSWORD') || 'wbrn ongq ewvw zjli',
        notificationEmail: getEnv('NOTIFICATION_EMAIL') || 'business@bizoraedge.com',
        resendApiKey: getEnv('RESEND_API_KEY') || '',
    }
};