"use client";

import { useEffect, useState } from 'react';

export default function StatsCounter({ value, suffix = '', inView }: { value: number; suffix?: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const durationMs = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      setDisplay(Math.floor(value * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span>
      {display}
      <span className="align-middle">{suffix}</span>
    </span>
  );
}

