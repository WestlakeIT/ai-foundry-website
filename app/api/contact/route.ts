import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import {
  getTimelineMessage,
  getUrgencyColor,
  getRecommendedAction,
  formatUrgency,
  formatBudget,
  formatModel,
} from '@/lib/email-helpers';

const schema = z.object({
  company: z.string().min(2, 'Company/Project name is required'),
  role: z.string().min(2, 'Your role is required'),
  vision: z.string().min(10, 'Please describe your AI vision'),
  urgency: z.enum(['immediate', '30days', 'quarter', 'exploring'], {
    required_error: 'Select a timeline',
  }),
  budget: z.enum(['10-50k', '50-200k', '200k+', 'equity'], {
    required_error: 'Select a budget range',
  }),
  model: z.enum(['cash', 'equity', 'hybrid'], {
    required_error: 'Select a preferred model',
  }),
  email: z.string().email('Valid email required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with Zod on server
    const formData = schema.parse(body);

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Validate email configuration
    const fromAcknowledgment = process.env.RESEND_FROM_ACKNOWLEDGMENT || 'Nathan Duraisamy <nathand@westlakeitsolutions.com>';
    const fromInternal = process.env.RESEND_FROM_INTERNAL || 'WESTLAKE AI System <notifications@westlakeitsolutions.com>';
    const toInternal = process.env.RESEND_TO_EMAIL || 'nathand@westlakeitsolutions.com';

    // Prepare formatted values for emails
    const formattedUrgency = formatUrgency(formData.urgency);
    const formattedBudget = formatBudget(formData.budget);
    const formattedModel = formatModel(formData.model);
    const visionPreview = formData.vision.substring(0, 200);
    const visionTruncated = formData.vision.length > 200;

    // Email to the person who submitted the form
    const acknowledgmentEmail = {
      from: fromAcknowledgment,
      to: formData.email,
      subject: `Re: Your AI Vision for ${formData.company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${formData.role},</p>
          
          <p>Thanks for sharing your AI vision with us. I just read through what you're looking to accomplish${formData.company ? ` at ${formData.company}` : ''}, and I'm genuinely excited about the possibilities.</p>
          
          <p>Your vision particularly caught my attention:</p>
          
          <blockquote style="border-left: 3px solid #6366f1; padding-left: 16px; margin: 16px 0; color: #555;">
            <em>"${visionPreview}${visionTruncated ? '...' : ''}"</em>
          </blockquote>
          
          <p>${getTimelineMessage(formData.urgency)}</p>
          
          <p>I'll personally review your submission and get back to you within the next 24-48 hours with some initial thoughts and how WESTLAKE AI Foundry might help bring this vision to life.</p>
          
          <p>In the meantime, if any urgent questions come up, feel free to reply directly to this email.</p>
          
          <p>Looking forward to our conversation,</p>
          
          <p><strong>Nathan Duraisamy</strong><br>
          CEO, WESTLAKE AI Foundry<br>
          <a href="mailto:nathand@westlakeitsolutions.com" style="color: #6366f1;">nathand@westlakeitsolutions.com</a></p>
        </div>
      `,
      text: `Hi ${formData.role},

Thanks for sharing your AI vision with us. I just read through what you're looking to accomplish${formData.company ? ` at ${formData.company}` : ''}, and I'm genuinely excited about the possibilities.

Your vision particularly caught my attention:
"${visionPreview}${visionTruncated ? '...' : ''}"

${getTimelineMessage(formData.urgency)}

I'll personally review your submission and get back to you within the next 24-48 hours with some initial thoughts and how WESTLAKE AI Foundry might help bring this vision to life.

In the meantime, if any urgent questions come up, feel free to reply directly to this email.

Looking forward to our conversation,

Nathan Duraisamy
CEO, WESTLAKE AI Foundry
nathand@westlakeitsolutions.com`,
    };

    // Internal notification email for your team
    const internalNotification = {
      from: fromInternal,
      to: toInternal,
      subject: `New AI Project Inquiry: ${formData.company} - ${formattedUrgency} Priority`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Submission Received</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company/Project:</strong> ${formData.company}</p>
            <p><strong>Contact Role:</strong> ${formData.role}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Timeline:</strong> <span style="color: ${getUrgencyColor(formData.urgency)};">${formattedUrgency}</span></p>
            <p><strong>Budget Range:</strong> ${formattedBudget}</p>
            <p><strong>Preferred Model:</strong> ${formattedModel}</p>
          </div>
          
          <h3>Their AI Vision:</h3>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px;">
            <p style="white-space: pre-wrap;">${formData.vision}</p>
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
            <p style="margin: 0;"><strong>Recommended Action:</strong> ${getRecommendedAction(formData.urgency, formData.budget)}</p>
          </div>
          
          <p style="margin-top: 24px;">
            <a href="mailto:${formData.email}?subject=Re: Your AI Vision for ${formData.company}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${formData.role}</a>
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    const [ackResult, internalResult] = await Promise.allSettled([
      resend.emails.send(acknowledgmentEmail),
      resend.emails.send(internalNotification),
    ]);

    // Check if either email failed
    if (ackResult.status === 'rejected') {
      console.error('Failed to send acknowledgment email:', ackResult.reason);
    }
    if (internalResult.status === 'rejected') {
      console.error('Failed to send internal notification:', internalResult.reason);
    }

    // Return success even if one email fails (we log the error)
    // You might want to adjust this based on your requirements
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

