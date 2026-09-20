// Cloudflare D1 Database binding type declaration
// This tells TypeScript that our Cloudflare environment has a D1 database binding named "DB"

interface CloudflareEnv {
    DB: D1Database;
}
