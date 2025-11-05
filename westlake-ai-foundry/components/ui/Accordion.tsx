"use client";

import { useState } from 'react';
import clsx from 'clsx';

type Item = { id: string; title: string; content: React.ReactNode };

export default function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div
          key={it.id}
          className={clsx(
            'rounded-xl border border-primary/20 bg-primary/5 p-4 transition-colors',
            openId === it.id ? 'border-accent bg-primary/10' : 'hover:border-accent hover:bg-primary/10'
          )}
        >
          <button className="flex w-full items-center justify-between text-left" onClick={() => setOpenId((v) => (v === it.id ? null : it.id))}>
            <span className="font-semibold text-text">{it.title}</span>
            <span className="text-xl select-none">{openId === it.id ? '−' : '+'}</span>
          </button>
          <div className="text-textMuted overflow-hidden transition-[max-height,margin-top] duration-300" style={{ maxHeight: openId === it.id ? 200 : 0, marginTop: openId === it.id ? '0.5rem' : 0 }}>
            {it.content}
          </div>
        </div>
      ))}
    </div>
  );
}

