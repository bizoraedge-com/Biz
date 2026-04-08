import { NextResponse } from 'next/server';

/* 
  Static export does not support POST API routes.
  If you are exporting a static site, you will need to handle form submissions
  via an external service (like formspree, netlify forms, etc.).
*/
/*
export async function POST(request: Request) {
    const body = await request.json();

    // Mock handling the contact form data
    console.log('Received contact request:', body);

    return NextResponse.json({ success: true, message: 'Message received successfully.' });
}
*/
