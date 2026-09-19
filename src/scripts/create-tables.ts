import mysql from 'mysql2/promise';

async function createTables() {
    try {
        console.log('Connecting to database...');
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'BizoraEdge',
        });

        console.log('Connected. Creating tables...');

        // 1. Contacts Table (from /contact page + ContactFooter)
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS contacts (
                id          INT AUTO_INCREMENT PRIMARY KEY,
                name        VARCHAR(255) NOT NULL,
                email       VARCHAR(255) NOT NULL,
                phone       VARCHAR(20),
                company_name VARCHAR(255),
                subject     VARCHAR(255),
                description TEXT NOT NULL,
                created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table "contacts" created or already exists.');

        // 2. Quotes Table (from /quote page)
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS quotes (
                id           INT AUTO_INCREMENT PRIMARY KEY,
                name         VARCHAR(255) NOT NULL,
                email        VARCHAR(255) NOT NULL,
                project_type VARCHAR(255),
                message      TEXT,
                created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table "quotes" created or already exists.');

        // 3. Service Requests Table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS service_requests (
                id           INT AUTO_INCREMENT PRIMARY KEY,
                name         VARCHAR(255) NOT NULL,
                email        VARCHAR(255) NOT NULL,
                service_type VARCHAR(255),
                message      TEXT,
                created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table "service_requests" created or already exists.');

        // 4. Trials Table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS trials (
                id           INT AUTO_INCREMENT PRIMARY KEY,
                name         VARCHAR(255) NOT NULL,
                email        VARCHAR(255) NOT NULL,
                service_type VARCHAR(255),
                message      TEXT,
                created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table "trials" created or already exists.');

        // 5. Newsletters Table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS newsletters (
                id            INT AUTO_INCREMENT PRIMARY KEY,
                email         VARCHAR(255) NOT NULL UNIQUE,
                subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table "newsletters" created or already exists.');

        await connection.end();
        console.log('✅ All tables created/verified successfully!');
    } catch (error) {
        console.error('❌ Error creating tables:', error);
        process.exit(1);
    }
}

createTables();
