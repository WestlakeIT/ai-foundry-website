"use client";

import { useState } from 'react';
import { FOUNDER_FAQ } from '@/lib/constants';

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[800px] px-6">
        <h3 className="mb-8 text-center text-2xl text-primary">Founder FAQs</h3>
        <div className="space-y-3">
          {FOUNDER_FAQ.map((f, idx) => (
            <FaqItem key={idx} question={f.q} answer={f.a} />)
          )}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors hover:border-accent hover:bg-primary/10"
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between text-text">
        <span className="font-semibold">{question}</span>
        <span className="text-xl select-none">{open ? '−' : '+'}</span>
      </div>
      <div
        className="text-textMuted overflow-hidden transition-[max-height,margin-top] duration-300"
        style={{ maxHeight: open ? 200 : 0, marginTop: open ? '0.5rem' : 0 }}
      >
        {answer}
      </div>
    </div>
  );
}

