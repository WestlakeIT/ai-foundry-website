import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().min(2, 'Company name is required'),
  challenge: z.string().min(10, 'Please describe your AI challenge'),
  preferredTime: z.string().min(1, 'Please select a preferred call time'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formData = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format preferred time
    const timeMap: Record<string, string> = {
      morning: 'Morning (9am - 12pm EST)',
      afternoon: 'Afternoon (12pm - 5pm EST)',
      evening: 'Evening (5pm - 7pm EST)',
      flexible: 'Flexible',
    };
    const formattedTime = timeMap[formData.preferredTime] || formData.preferredTime;

    // Email to the person who submitted the form
    const acknowledgmentEmail = {
      from: 'Nathan Duraisamy <nathand@westlakeitsolutions.com>',
      to: formData.email,
      subject: `Strategy Call Request Confirmed - ${formData.company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${formData.name},</p>
          
          <p>Thank you for requesting a Strategy Call with WESTLAKE AI Foundry. I've received your request and I'm excited to learn more about your AI challenge.</p>
          
          <p><strong>Your Request Details:</strong></p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Preferred Call Time:</strong> ${formattedTime}</p>
          </div>
          
          <p><strong>Your AI Challenge:</strong></p>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.challenge}</p>
          </div>
          
          <p>I'll personally review your challenge and reach out within 24 hours to confirm a time slot that works for both of us.</p>
          
          <p>In the meantime, if you have any urgent questions, feel free to reply directly to this email.</p>
          
          <p>Looking forward to our conversation,</p>
          
          <p><strong>Nathan Duraisamy</strong><br>
          CEO, WESTLAKE AI Foundry<br>
          <a href="mailto:nathand@westlakeitsolutions.com" style="color: #6366f1;">nathand@westlakeitsolutions.com</a></p>
        </div>
      `,
      text: `Hi ${formData.name},

Thank you for requesting a Strategy Call with WESTLAKE AI Foundry. I've received your request and I'm excited to learn more about your AI challenge.

Your Request Details:
Company: ${formData.company}
Preferred Call Time: ${formattedTime}

Your AI Challenge:
${formData.challenge}

I'll personally review your challenge and reach out within 24 hours to confirm a time slot that works for both of us.

In the meantime, if you have any urgent questions, feel free to reply directly to this email.

Looking forward to our conversation,

Nathan Duraisamy
CEO, WESTLAKE AI Foundry
nathand@westlakeitsolutions.com`,
    };

    // Internal notification email
    const internalNotification = {
      from: 'WESTLAKE AI System <notifications@westlakeitsolutions.com>',
      to: 'nathand@westlakeitsolutions.com',
      subject: `New Strategy Call Request: ${formData.company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Strategy Call Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Preferred Call Time:</strong> ${formattedTime}</p>
          </div>
          
          <h3>Their AI Challenge:</h3>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.challenge}</p>
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="margin: 0;"><strong>Action Required:</strong> Schedule a 30-minute strategy call within 24 hours.</p>
          </div>
          
          <p style="margin-top: 24px;">
            <a href="mailto:${formData.email}?subject=Re: Strategy Call Request from ${formData.company}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${formData.name}</a>
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    const [ackResult, internalResult] = await Promise.allSettled([
      resend.emails.send(acknowledgmentEmail),
      resend.emails.send(internalNotification),
    ]);

    if (ackResult.status === 'rejected') {
      console.error('Failed to send acknowledgment email:', ackResult.reason);
    }
    if (internalResult.status === 'rejected') {
      console.error('Failed to send internal notification:', internalResult.reason);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error processing strategy call form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

