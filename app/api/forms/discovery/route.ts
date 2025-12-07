import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Schema matching the start-building form
const schema = z.object({
  persona: z.enum(['founder', 'enterprise', 'innovator']),
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional().transform(val => val === '' ? undefined : val),
  email: z.string().email('Valid email required'),
  title: z.string().min(1, 'Title is required'),
  aiVision: z.string().min(10, 'Please describe your AI vision (minimum 10 characters required)'),
  engagementType: z.string().optional().transform(val => val === '' ? undefined : val),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log received data for debugging
    console.log('Received form data:', JSON.stringify(body, null, 2));
    
    // Validate form data
    const formData = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Get email configuration with fallbacks
    const fromAcknowledgment = process.env.RESEND_FROM_ACKNOWLEDGMENT || 'Nathan Duraisamy <nathand@westlakeitsolutions.com>';
    const fromInternal = process.env.RESEND_FROM_INTERNAL || 'WESTLAKE AI System <notifications@westlakeitsolutions.com>';
    const toInternal = process.env.RESEND_TO_EMAIL || 'nathand@westlakeitsolutions.com';
    // For testing: if RESEND_TO_ACKNOWLEDGMENT is set, send acknowledgment there instead of to the form submitter
    const toAcknowledgment = process.env.RESEND_TO_ACKNOWLEDGMENT || formData.email;

    const companyName = formData.company || 'Not provided';
    const personaLabel = formData.persona.charAt(0).toUpperCase() + formData.persona.slice(1);

    // Build form details HTML
    const formDetailsHtml = `
      <p><strong>Persona:</strong> ${personaLabel}</p>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Title:</strong> ${formData.title}</p>
      <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
      ${formData.engagementType ? `<p><strong>Engagement Type:</strong> ${formData.engagementType}</p>` : ''}
      <p><strong>AI Vision:</strong></p>
      <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin-top: 8px;">
        <p style="white-space: pre-wrap; margin: 0;">${formData.aiVision}</p>
      </div>
    `;

    const formDetailsText = `
Persona: ${personaLabel}
Name: ${formData.name}
Company: ${companyName}
Title: ${formData.title}
Email: ${formData.email}
${formData.engagementType ? `Engagement Type: ${formData.engagementType}\n` : ''}
AI Vision:
${formData.aiVision}
    `;

    // Email to the person who submitted the form (or test email if configured)
    const acknowledgmentEmail = {
      from: fromAcknowledgment,
      to: toAcknowledgment,
      subject: `Discovery Sprint Application Received - ${companyName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${formData.name},</p>
          
          <p>Thank you for your interest in our Discovery Sprint program. I've received your application and I'm genuinely excited about the potential collaboration.</p>
          
          <p><strong>Your Application Details:</strong></p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${formDetailsHtml}
          </div>
          
          <p>Our team will carefully review your application and send you a detailed sprint proposal within 48 hours. This will include:</p>
          <ul>
            <li>Customized technical architecture recommendations</li>
            <li>Detailed project roadmap</li>
            <li>Timeline and resource allocation</li>
            <li>Investment breakdown</li>
          </ul>
          
          <p>If you have any questions in the meantime, feel free to reply directly to this email.</p>
          
          <p>Looking forward to working together,</p>
          
          <p><strong>Nathan Duraisamy</strong><br>
          CEO, WESTLAKE AI Foundry<br>
          <a href="mailto:nathand@westlakeitsolutions.com" style="color: #6366f1;">nathand@westlakeitsolutions.com</a></p>
        </div>
      `,
      text: `Hi ${formData.name},

Thank you for your interest in our Discovery Sprint program. I've received your application and I'm genuinely excited about the potential collaboration.

Your Application Details:
${formDetailsText}

Our team will carefully review your application and send you a detailed sprint proposal within 48 hours. This will include:
- Customized technical architecture recommendations
- Detailed project roadmap
- Timeline and resource allocation
- Investment breakdown

If you have any questions in the meantime, feel free to reply directly to this email.

Looking forward to working together,

Nathan Duraisamy
CEO, WESTLAKE AI Foundry
nathand@westlakeitsolutions.com`,
    };

    // Internal notification email
    const internalNotification = {
      from: fromInternal,
      to: toInternal,
      subject: `New Discovery Sprint Application: ${companyName} (${personaLabel})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Discovery Sprint Application</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${formDetailsHtml}
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0;"><strong>Action Required:</strong> Review application and send detailed sprint proposal within 48 hours.</p>
          </div>
          
          <p style="margin-top: 24px;">
            <a href="mailto:${formData.email}?subject=Re: Discovery Sprint Application from ${companyName}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${formData.name}</a>
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
      console.error('Validation error:', error.errors);
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }
    console.error('Error processing discovery sprint form:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
