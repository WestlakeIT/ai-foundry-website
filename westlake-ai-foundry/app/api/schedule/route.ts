import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder returns scheduling link for client to open in modal/redirect
  const link = process.env.CALENDLY_OR_CALCOM_LINK || 'https://cal.com';
  return NextResponse.json({ link });
}

