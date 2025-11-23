import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Base schema that all personas share
const baseSchema = z.object({
  persona: z.enum(['founder', 'enterprise', 'innovator']),
});

// Founder-specific schema
const founderSchema = baseSchema.extend({
  founderName: z.string().min(2, 'Name is required'),
  startupName: z.string().min(2, 'Startup name is required'),
  founderRole: z.string().min(1, 'Role is required'),
  founderEmail: z.string().email('Valid email required'),
  founderChallenge: z.string().min(10, 'Please describe your AI challenge'),
  founderStage: z.string().min(1, 'Please select your stage'),
  founderBudget: z.string().min(1, 'Please select a budget range'),
});

// Enterprise-specific schema
const enterpriseSchema = baseSchema.extend({
  enterpriseName: z.string().min(2, 'Name is required'),
  orgName: z.string().min(2, 'Organization name is required'),
  enterpriseTitle: z.string().min(1, 'Title is required'),
  enterpriseEmail: z.string().email('Valid email required'),
  enterpriseInitiative: z.string().min(10, 'Please describe your strategic AI initiative'),
  enterpriseDepartment: z.string().min(1, 'Please select a department'),
  enterpriseBudget: z.string().min(1, 'Please select an investment range'),
});

// Innovator-specific schema
const innovatorSchema = baseSchema.extend({
  innovatorName: z.string().min(2, 'Name is required'),
  labName: z.string().min(2, 'Organization/Lab name is required'),
  innovatorFocus: z.string().min(1, 'Please select your focus area'),
  innovatorEmail: z.string().email('Valid email required'),
  innovatorVision: z.string().min(10, 'Please describe your innovation vision'),
  innovatorApproach: z.string().min(1, 'Please select a technical approach'),
  innovatorFunding: z.string().min(1, 'Please select a funding source'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Determine which schema to use based on persona
    let formData: z.infer<typeof founderSchema | typeof enterpriseSchema | typeof innovatorSchema>;
    
    if (body.persona === 'founder') {
      formData = founderSchema.parse(body);
    } else if (body.persona === 'enterprise') {
      formData = enterpriseSchema.parse(body);
    } else if (body.persona === 'innovator') {
      formData = innovatorSchema.parse(body);
    } else {
      return NextResponse.json(
        { error: 'Invalid persona selected' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Extract email and name based on persona
    let email: string;
    let name: string;
    let companyName: string;

    if (formData.persona === 'founder') {
      const data = formData as z.infer<typeof founderSchema>;
      email = data.founderEmail;
      name = data.founderName;
      companyName = data.startupName;
    } else if (formData.persona === 'enterprise') {
      const data = formData as z.infer<typeof enterpriseSchema>;
      email = data.enterpriseEmail;
      name = data.enterpriseName;
      companyName = data.orgName;
    } else {
      const data = formData as z.infer<typeof innovatorSchema>;
      email = data.innovatorEmail;
      name = data.innovatorName;
      companyName = data.labName;
    }

    // Build form details HTML based on persona
    let formDetailsHtml = '';
    let formDetailsText = '';

    if (formData.persona === 'founder') {
      const data = formData as z.infer<typeof founderSchema>;
      formDetailsHtml = `
        <p><strong>Startup Name:</strong> ${data.startupName}</p>
        <p><strong>Role:</strong> ${data.founderRole}</p>
        <p><strong>Current Stage:</strong> ${data.founderStage}</p>
        <p><strong>Sprint Budget:</strong> ${data.founderBudget}</p>
        <p><strong>AI Challenge:</strong></p>
        <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin-top: 8px;">
          <p style="white-space: pre-wrap; margin: 0;">${data.founderChallenge}</p>
        </div>
      `;
      formDetailsText = `
Startup Name: ${data.startupName}
Role: ${data.founderRole}
Current Stage: ${data.founderStage}
Sprint Budget: ${data.founderBudget}

AI Challenge:
${data.founderChallenge}
      `;
    } else if (formData.persona === 'enterprise') {
      const data = formData as z.infer<typeof enterpriseSchema>;
      formDetailsHtml = `
        <p><strong>Organization:</strong> ${data.orgName}</p>
        <p><strong>Title:</strong> ${data.enterpriseTitle}</p>
        <p><strong>Department Focus:</strong> ${data.enterpriseDepartment}</p>
        <p><strong>Investment Range:</strong> ${data.enterpriseBudget}</p>
        <p><strong>Strategic AI Initiative:</strong></p>
        <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin-top: 8px;">
          <p style="white-space: pre-wrap; margin: 0;">${data.enterpriseInitiative}</p>
        </div>
      `;
      formDetailsText = `
Organization: ${data.orgName}
Title: ${data.enterpriseTitle}
Department Focus: ${data.enterpriseDepartment}
Investment Range: ${data.enterpriseBudget}

Strategic AI Initiative:
${data.enterpriseInitiative}
      `;
    } else {
      const data = formData as z.infer<typeof innovatorSchema>;
      formDetailsHtml = `
        <p><strong>Organization/Lab:</strong> ${data.labName}</p>
        <p><strong>Focus Area:</strong> ${data.innovatorFocus}</p>
        <p><strong>Technical Approach:</strong> ${data.innovatorApproach}</p>
        <p><strong>Funding Source:</strong> ${data.innovatorFunding}</p>
        <p><strong>Innovation Vision:</strong></p>
        <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin-top: 8px;">
          <p style="white-space: pre-wrap; margin: 0;">${data.innovatorVision}</p>
        </div>
      `;
      formDetailsText = `
Organization/Lab: ${data.labName}
Focus Area: ${data.innovatorFocus}
Technical Approach: ${data.innovatorApproach}
Funding Source: ${data.innovatorFunding}

Innovation Vision:
${data.innovatorVision}
      `;
    }

    // Email to the person who submitted the form
    const acknowledgmentEmail = {
      from: 'Nathan Duraisamy <nathand@westlakeitsolutions.com>',
      to: email,
      subject: `Discovery Sprint Application Received - ${companyName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${name},</p>
          
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
      text: `Hi ${name},

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
      from: 'WESTLAKE AI System <notifications@westlakeitsolutions.com>',
      to: 'nathand@westlakeitsolutions.com',
      subject: `New Discovery Sprint Application: ${companyName} (${formData.persona})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Discovery Sprint Application</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Persona:</strong> <span style="text-transform: capitalize;">${formData.persona}</span></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company/Organization:</strong> ${companyName}</p>
            ${formDetailsHtml}
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0;"><strong>Action Required:</strong> Review application and send detailed sprint proposal within 48 hours.</p>
          </div>
          
          <p style="margin-top: 24px;">
            <a href="mailto:${email}?subject=Re: Discovery Sprint Application from ${companyName}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${name}</a>
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
    console.error('Error processing discovery sprint form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

