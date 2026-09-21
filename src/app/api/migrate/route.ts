import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const db = getRequestContext().env.DB;
        if (!db) {
            return NextResponse.json({ success: false, message: 'DB not found' }, { status: 500 });
        }
        
        await db.prepare('ALTER TABLE quotes ADD COLUMN phone TEXT;').run();
        
        return NextResponse.json({ success: true, message: 'Column added successfully' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: 'Failed to add column', error: error.message || String(error) }, { status: 500 });
    }
}
