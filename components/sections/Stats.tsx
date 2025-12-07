"use client";

import { useEffect, useRef, useState } from 'react';
import { IMPACT_METRICS } from '@/lib/constants';

function useCounter(target: number, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const durationMs = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setValue(Math.floor(target * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return value;
}

export default function Stats() {
  const refs = useRef<HTMLDivElement[]>([]);
  const [inView, setInView] = useState<boolean[]>(Array(IMPACT_METRICS.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setInView((s) => s.map((v, i) => (i === idx ? true : v)));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Call hooks individually - cannot use .map() for hooks
  const value0 = useCounter(IMPACT_METRICS[0].value, inView[0]);
  const value1 = useCounter(IMPACT_METRICS[1].value, inView[1]);
  const value2 = useCounter(IMPACT_METRICS[2].value, inView[2]);
  const value3 = useCounter(IMPACT_METRICS[3].value, inView[3]);
  const counterValues = [value0, value1, value2, value3];

  return (
    <section className="bg-darkLighter py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2.2rem,3.6vw,2.6rem)] font-extrabold text-text">The Impact We Deliver</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_METRICS.map((m, i) => {
            const value = counterValues[i];
            return (
              <div
                key={m.label}
                ref={(el) => {
                  if (el) refs.current[i] = el;
                }}
                data-index={i}
                className="rounded-2xl border border-primary/20 bg-primary/10 p-9 text-center transition-all hover:-translate-y-1 hover:border-accent hover:bg-primary/15"
              >
                <div className="text-6xl font-extrabold text-accent">
                  {value}
                  <span className="align-middle text-4xl text-accent">{m.suffix}</span>
                </div>
                <div className="mt-3 text-text">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

