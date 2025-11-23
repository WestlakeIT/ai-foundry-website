import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  title: z.string().min(2, 'Title is required'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(5, 'Phone number is required'),
  companySize: z.string().min(1, 'Please select company size'),
  annualRevenue: z.string().min(1, 'Please select annual revenue'),
  aiMaturity: z.string().min(1, 'Please select AI maturity level'),
  projectDescription: z.string().min(10, 'Please describe your project'),
  expectedOutcomes: z.string().min(10, 'Please describe expected outcomes'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
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

    // Format values for display
    const formatCompanySize = (size: string) => {
      const sizeMap: Record<string, string> = {
        '1-10': '1-10 employees',
        '11-50': '11-50 employees',
        '51-200': '51-200 employees',
        '201-500': '201-500 employees',
        '501-1000': '501-1000 employees',
        '1000+': '1000+ employees',
      };
      return sizeMap[size] || size;
    };

    const formatRevenue = (revenue: string) => {
      const revenueMap: Record<string, string> = {
        '<1M': 'Less than $1M',
        '1-5M': '$1M - $5M',
        '5-10M': '$5M - $10M',
        '10-50M': '$10M - $50M',
        '50-100M': '$50M - $100M',
        '100M+': '$100M+',
        'prefer-not': 'Prefer not to say',
      };
      return revenueMap[revenue] || revenue;
    };

    const formatAIMaturity = (maturity: string) => {
      const maturityMap: Record<string, string> = {
        none: 'No AI implementation',
        exploring: 'Exploring possibilities',
        pilot: 'Running pilot programs',
        partial: 'Partial implementation',
        advanced: 'Advanced implementation',
      };
      return maturityMap[maturity] || maturity;
    };

    const formatBudget = (budget: string) => {
      const budgetMap: Record<string, string> = {
        '100-250k': '$100k - $250k',
        '250-500k': '$250k - $500k',
        '500k-1M': '$500k - $1M',
        '1M+': '$1M+',
        custom: 'Custom/Flexible',
      };
      return budgetMap[budget] || budget;
    };

    const formatTimeline = (timeline: string) => {
      const timelineMap: Record<string, string> = {
        immediate: 'Immediate (ASAP)',
        '30days': 'Within 30 days',
        quarter: 'This quarter',
        '6months': 'Next 6 months',
        planning: 'Planning phase',
      };
      return timelineMap[timeline] || timeline;
    };

    // Email to the person who submitted the form
    const acknowledgmentEmail = {
      from: 'Nathan Duraisamy <nathand@westlakeitsolutions.com>',
      to: formData.email,
      subject: `Partnership Application Received - ${formData.company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${formData.name},</p>
          
          <p>Thank you for your interest in a Full Partnership with WESTLAKE AI Foundry. I've received your comprehensive application and I'm impressed by the scope and vision of your project.</p>
          
          <p><strong>Your Application Summary:</strong></p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Your Title:</strong> ${formData.title}</p>
            <p><strong>Company Size:</strong> ${formatCompanySize(formData.companySize)}</p>
            <p><strong>Annual Revenue:</strong> ${formatRevenue(formData.annualRevenue)}</p>
            <p><strong>AI Maturity:</strong> ${formatAIMaturity(formData.aiMaturity)}</p>
            <p><strong>Budget Range:</strong> ${formatBudget(formData.budgetRange)}</p>
            <p><strong>Timeline:</strong> ${formatTimeline(formData.timeline)}</p>
          </div>
          
          <p><strong>Project Description:</strong></p>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.projectDescription}</p>
          </div>
          
          <p><strong>Expected Outcomes:</strong></p>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.expectedOutcomes}</p>
          </div>
          
          <p>Our executive team will carefully review your application and contact you within 24 hours to discuss next steps and how we can best support your AI transformation journey.</p>
          
          <p>This is an exciting opportunity, and I'm looking forward to exploring how we can work together to bring your vision to life.</p>
          
          <p>Best regards,</p>
          
          <p><strong>Nathan Duraisamy</strong><br>
          CEO, WESTLAKE AI Foundry<br>
          <a href="mailto:nathand@westlakeitsolutions.com" style="color: #6366f1;">nathand@westlakeitsolutions.com</a></p>
        </div>
      `,
      text: `Hi ${formData.name},

Thank you for your interest in a Full Partnership with WESTLAKE AI Foundry. I've received your comprehensive application and I'm impressed by the scope and vision of your project.

Your Application Summary:
Company: ${formData.company}
Your Title: ${formData.title}
Company Size: ${formatCompanySize(formData.companySize)}
Annual Revenue: ${formatRevenue(formData.annualRevenue)}
AI Maturity: ${formatAIMaturity(formData.aiMaturity)}
Budget Range: ${formatBudget(formData.budgetRange)}
Timeline: ${formatTimeline(formData.timeline)}

Project Description:
${formData.projectDescription}

Expected Outcomes:
${formData.expectedOutcomes}

Our executive team will carefully review your application and contact you within 24 hours to discuss next steps and how we can best support your AI transformation journey.

This is an exciting opportunity, and I'm looking forward to exploring how we can work together to bring your vision to life.

Best regards,

Nathan Duraisamy
CEO, WESTLAKE AI Foundry
nathand@westlakeitsolutions.com`,
    };

    // Internal notification email
    const internalNotification = {
      from: 'WESTLAKE AI System <notifications@westlakeitsolutions.com>',
      to: 'nathand@westlakeitsolutions.com',
      subject: `New Full Partnership Application: ${formData.company} - ${formatBudget(formData.budgetRange)}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Full Partnership Application</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Title:</strong> ${formData.title}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Company Size:</strong> ${formatCompanySize(formData.companySize)}</p>
            <p><strong>Annual Revenue:</strong> ${formatRevenue(formData.annualRevenue)}</p>
            <p><strong>AI Maturity:</strong> ${formatAIMaturity(formData.aiMaturity)}</p>
            <p><strong>Budget Range:</strong> <span style="color: #22c55e; font-weight: bold;">${formatBudget(formData.budgetRange)}</span></p>
            <p><strong>Timeline:</strong> ${formatTimeline(formData.timeline)}</p>
          </div>
          
          <h3>Project Description:</h3>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.projectDescription}</p>
          </div>
          
          <h3>Expected Outcomes:</h3>
          <div style="background: #fff; border: 1px solid #e0e0e0; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${formData.expectedOutcomes}</p>
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
            <p style="margin: 0;"><strong>Priority Action:</strong> Executive review required. Contact within 24 hours to discuss partnership terms.</p>
          </div>
          
          <p style="margin-top: 24px;">
            <a href="mailto:${formData.email}?subject=Re: Full Partnership Application from ${formData.company}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${formData.name}</a>
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
    console.error('Error processing partnership form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

