"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  company: z.string().min(2, 'Company/Project name is required'),
  role: z.string().min(2, 'Your role is required'),
  vision: z.string().min(10, 'Please describe your AI vision'),
  urgency: z.enum(['immediate', '30days', 'quarter', 'exploring'], { required_error: 'Select a timeline' }),
  budget: z.enum(['10-50k', '50-200k', '200k+', 'equity'], { required_error: 'Select a budget range' }),
  model: z.enum(['cash', 'equity', 'hybrid'], { required_error: 'Select a preferred model' }),
  email: z.string().email('Valid email required')
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      setStatus('loading');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2500);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[600px] rounded-2xl border border-primary/20 bg-primary/10 p-8">
      <h3 className="mb-6 text-center text-xl font-semibold text-accent">Start Your AI Journey</h3>

      <div className="space-y-4">
        <Field label="Company/Project Name" error={errors.company?.message}>
          <input {...register('company')} className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent" />
        </Field>
        <Field label="Your Role" error={errors.role?.message}>
          <input {...register('role')} className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register('email')} type="email" className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent" />
        </Field>
        <Field label="AI Vision" error={errors.vision?.message}>
          <textarea {...register('vision')} className="min-h-[120px] w-full resize-y rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent" />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Timeline Urgency" error={errors.urgency?.message}>
            <select {...register('urgency')} className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent">
              <option value="">Select...</option>
              <option value="immediate">Need to start immediately</option>
              <option value="30days">Within 30 days</option>
              <option value="quarter">This quarter</option>
              <option value="exploring">Just exploring</option>
            </select>
          </Field>
          <Field label="Budget Range" error={errors.budget?.message}>
            <select {...register('budget')} className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent">
              <option value="">Select...</option>
              <option value="10-50k">$10K - $50K</option>
              <option value="50-200k">$50K - $200K</option>
              <option value="200k+">$200K+</option>
              <option value="equity">Equity-based</option>
            </select>
          </Field>
        </div>

        <Field label="Preferred Model" error={errors.model?.message}>
          <select {...register('model')} className="w-full rounded-md border border-primary/30 bg-[rgba(26,26,26,0.8)] p-3 outline-none focus:border-accent">
            <option value="">Select...</option>
            <option value="cash">Cash</option>
            <option value="equity">Equity</option>
            <option value="hybrid">Hybrid (Cash + Equity)</option>
          </select>
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white disabled:opacity-70"
      >
        {status === 'loading' ? 'Submitting…' : 'Submit Application'}
      </button>

      {status === 'success' && (
        <p className="mt-3 text-center text-accent">Thank you! We will contact you within 24 hours.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-center text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-medium text-text">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-400">{error}</span>}
    </label>
  );
}

