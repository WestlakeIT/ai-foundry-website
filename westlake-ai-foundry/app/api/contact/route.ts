import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: validate with Zod on server, send email via Resend/SendGrid, persist to DB (Supabase/Mongo)
    // Placeholder: echo back success
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

