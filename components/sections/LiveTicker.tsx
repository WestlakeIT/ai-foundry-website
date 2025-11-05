"use client";

import { useEffect, useState } from 'react';

type Project = { type: string; day: number; status: string; progress: number };

const PROJECTS: Project[] = [
  { type: 'FinTech AI', day: 34, status: 'Processing 10K transactions in testing', progress: 38 },
  { type: 'Healthcare Vision', day: 67, status: 'FDA submission prepared', progress: 74 },
  { type: 'Logistics AI', day: 89, status: 'Launch tomorrow', progress: 99 },
  { type: 'Retail Personalization', day: 12, status: 'Architecture finalized', progress: 13 }
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % PROJECTS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-10">
          <h3 className="text-[1.9rem] font-extrabold">Currently Forging</h3>
          <p className="text-text text-lg">Real projects. Real progress. Real time.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-darkLighter">
          <div className="relative h-32">
            {PROJECTS.map((p, i) => (
              <div
                key={p.type}
                className="absolute inset-0 grid grid-cols-12 items-center px-6 transition-transform duration-500"
                style={{ transform: `translateY(${(i - index) * 100}%)` }}
              >
                <div className="col-span-3 font-semibold text-lg">{p.type}</div>
                <div className="col-span-2 text-text">Day {p.day}</div>
                <div className="col-span-5 text-text text-lg">{p.status}</div>
                <div className="col-span-2">
                  <div className="h-2 w-full rounded bg-dark">
                    <div className="h-2 rounded bg-gradient-to-r from-primary to-accent" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


