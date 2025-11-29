# Environment Template

Create a `.env.local` in the project root using the keys below.

```bash
# Email
RESEND_API_KEY=
RESEND_FROM_ACKNOWLEDGMENT=Nathan Duraisamy <nathand@westlakeitsolutions.com>
RESEND_FROM_INTERNAL=WESTLAKE AI System <notifications@westlakeitsolutions.com>
RESEND_TO_EMAIL=nathand@westlakeitsolutions.com
RESEND_TO_ACKNOWLEDGMENT=
SENDGRID_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=

# Database (choose one)
SUPABASE_URL=
SUPABASE_ANON_KEY=
MONGODB_URI=

# Scheduling
CALENDLY_OR_CALCOM_LINK=

# Analytics & Tools
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_HOTJAR_ID=
NEXT_PUBLIC_INTERCOM_APP_ID=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=
```

Restart the dev server after adding or changing environment values.

