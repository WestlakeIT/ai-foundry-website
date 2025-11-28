"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

type TimelineItem = {
  phase: string;
  title: string;
  description: string;
  icon: string;
  dayRange: string;
  details: string[];
};

const timelineData: TimelineItem[] = [
  {
    phase: "Week 1-2",
    title: "Discovery & Architecture",
    description: "Technical feasibility & system design",
    icon: "🎯",
    dayRange: "Day 1-14",
    details: ["AI model selection", "Infrastructure planning", "Team assembly", "Cost optimization"]
  },
  {
    phase: "Week 3-4",
    title: "Foundation",
    description: "Core infrastructure & initial development",
    icon: "🏗️",
    dayRange: "Day 15-30",
    details: ["Data pipeline setup", "Initial model training", "API architecture", "Security framework"]
  },
  {
    phase: "Week 5-8",
    title: "Building",
    description: "AI training & full-stack development",
    icon: "⚡",
    dayRange: "Day 31-60",
    details: ["Model optimization", "Frontend development", "Integration testing", "Performance tuning"]
  },
  {
    phase: "Week 9-12",
    title: "Launch",
    description: "Testing, optimization & deployment",
    icon: "🚀",
    dayRange: "Day 61-90",
    details: ["Production deployment", "Monitoring setup", "Team training", "Go-live support"]
  }
];

function useCountdown(totalSeconds: number) {
  const [remaining, setRemaining] = useState(totalSeconds);
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  return { days, hours, minutes, seconds };
}

function useCountUp(target: number, enabled: boolean, durationMs = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const elapsed = Math.min(1, (t - start) / durationMs);
      setValue(Math.round(elapsed * target));
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, durationMs]);
  return value;
}

function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dots = useMemo(() => Array.from({ length: 30 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 3 + Math.random() * 4,
    delay: Math.random() * 4
  })), []);

  if (!mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent/30 blur-[1px]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `floatY 6s ease-in-out ${d.delay}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-12px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

export default function NinetyDayGuarantee() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const guaranteeRef = useRef<HTMLDivElement | null>(null);
  useInView(guaranteeRef, { once: true, margin: "-20%" });

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-20%" });

  const total30DaysSeconds = 30 * 24 * 60 * 60;
  const { days, hours, minutes, seconds } = useCountdown(total30DaysSeconds);

  const countdownText = "Your AI could be live in";

  const projectsDelivered = useCountUp(12, statsInView);
  const avgDays = useCountUp(73, statsInView);
  const onTime = useCountUp(100, statsInView);

  return (
    <section
      ref={sectionRef}
      className="relative py-28"
      style={{
        background: `radial-gradient(ellipse at center top, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at center bottom, rgba(6, 255, 165, 0.1) 0%, transparent 50%)`
      }}
    >
      <div className="absolute inset-0 -z-10">
        <Suspense>
          <BackgroundParticles />
        </Suspense>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="font-extrabold tracking-tight leading-[0.95] text-center">
            <span className="block text-[clamp(2.8rem,6vw,5rem)] sm:text-[clamp(4rem,6vw,6rem)] md:text-[clamp(5rem,6vw,7rem)] bg-gradient-to-r from-[#a8e6cf] to-white bg-clip-text text-transparent">
              Warp Speed Development
            </span>
          </h2>
          <p className="mt-4 text-text text-[clamp(1.05rem,1.6vw,1.25rem)] max-w-3xl mx-auto">
            From zero to production in record time. 30 days for MVPs. 90 days for enterprise.
          </p>
        </div>

        {/* Guarantee Box with pulsing border and glow */}
        <motion.div
          ref={guaranteeRef}
          className="relative border-2 border-accent rounded-2xl bg-accent/10 shadow-[0_0_50px_rgba(6,255,165,0.3)] p-8 md:p-12 mb-16 overflow-visible"
        >
          {/* Animated dot traveling around the border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-visible">
            <motion.div
              className="absolute w-3 h-3 bg-accent rounded-full shadow-[0_0_12px_rgba(6,255,165,0.8)] -translate-x-1/2 -translate-y-1/2"
              style={{
                x: 0,
                y: '50%',
              }}
              animate={{
                x: [
                  '0px',                    // Left-middle (start)
                  'calc(100% - 12px)',      // Top-right
                  'calc(100% - 12px)',      // Right-bottom
                  '0px',                    // Left-bottom
                  '0px',                    // Left-top
                  'calc(100% - 12px)',      // Right-top
                  'calc(100% - 12px)',      // Top-right (loop back)
                ],
                y: [
                  'calc(50% - 6px)',        // Left-middle (start)
                  '0px',                    // Top-right
                  'calc(100% - 12px)',      // Right-bottom
                  'calc(100% - 12px)',      // Left-bottom
                  '0px',                    // Left-top
                  '0px',                    // Right-top
                  '0px',                    // Top-right (loop back)
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 1/6, 2/6, 3/6, 4/6, 5/6, 1],
              }}
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[2rem] md:text-[2.6rem] font-black leading-tight">
                We ship 10x faster than industry standard — guaranteed.
              </div>
              <div className="mt-6 flex flex-col gap-3 text-sm text-text">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-darkLighter px-4 py-2">
                  <span className="text-accent">-</span> Simple AI: 30 days
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-darkLighter px-4 py-2">
                  <span className="text-accent">-</span> Complex Systems: 60 days
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-darkLighter px-4 py-2">
                  <span className="text-accent">-</span> Enterprise Scale: 90 days
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-darkLighter px-4 py-2">
                  <span className="text-accent">-</span> Consultants: Still planning
                </div>
              </div>
            </div>
            {/* Countdown Timer */}
            <div className="md:justify-self-end">
              <div className="text-center">
                <div className="text-textMuted mb-2">{countdownText}</div>
                <div className="grid grid-cols-4 gap-3">
                  {[{label:'DAYS',value:days},{label:'HRS',value:hours},{label:'MIN',value:minutes},{label:'SEC',value:seconds}].map((t) => (
                    <div key={t.label} className="rounded-xl bg-darkLighter border border-primary/30 p-4">
                      <div className="text-[2rem] md:text-[2.6rem] font-black tabular-nums">{String(t.value).padStart(2, '0')}</div>
                      <div className="text-xs text-textMuted mt-1 tracking-[0.2em]">{t.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/start-building"
                  className="mt-6 inline-block bg-accent text-dark font-black rounded-full px-8 py-4 text-lg shadow-[0_10px_40px_rgba(6,255,165,0.4)] hover:shadow-[0_14px_50px_rgba(6,255,165,0.6)] transition-transform"
                >
                  <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                    Start Your AI Sprint
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>

          {/* subtle animated border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-accent/30" style={{ boxShadow: "0 0 80px rgba(6,255,165,0.25) inset" }} />
        </motion.div>

        {/* Comparison Bar */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "6-18 months", sub: "Industry Standard", tone: "text-text" },
            { label: "30-90 days", sub: "Westlake Speed", detail: "(Scope-based)", tone: "text-accent" },
            { label: "Never", sub: "Traditional Consulting", tone: "text-textMuted" }
          ].map((c) => (
            <div key={c.sub} className="rounded-2xl border border-primary/30 bg-darkLighter p-6 text-center hover:border-accent transition-colors">
              <div className={`text-[2rem] md:text-[2.6rem] font-extrabold ${c.tone}`}>{c.label}</div>
              <div className="text-textMuted tracking-[0.18em] text-xs mt-1">{c.sub}</div>
              {c.detail && <div className="text-textMuted text-xs mt-1">{c.detail}</div>}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative md:pl-8">
          <div className="relative">
            {/* line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-[3px] bg-primary/20 -translate-x-1/2" />
            <motion.div
              style={{ scaleY: lineProgress, originY: 0 }}
              className="absolute left-4 md:left-1/2 top-0 h-full w-[3px] bg-accent -translate-x-1/2"
            />

            <div className="space-y-10 md:space-y-20">
              {timelineData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <TimelineCard key={item.phase} item={item} index={idx} alignLeft={isLeft} />
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div ref={statsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Projects Delivered" value={projectsDelivered} suffix="" />
          <StatCard label="Avg Days" value={avgDays} suffix="" />
          <StatCard label="On-Time" value={onTime} suffix="%" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-darkLighter p-6 text-center">
      <div className="text-[2rem] md:text-[2.6rem] font-extrabold">
        {value}
        {suffix}
      </div>
      <div className="text-textMuted tracking-[0.18em] text-xs mt-1">{label}</div>
    </div>
  );
}

function TimelineCard({ item, index, alignLeft }: { item: TimelineItem; index: number; alignLeft: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: alignLeft ? -50 : 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (alignLeft ? -50 : 50) }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch`}
    >
      {/* marker */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-accent shadow-[0_0_20px_rgba(6,255,165,0.8)]"
        animate={{ boxShadow: ["0 0 10px rgba(6,255,165,0.4)", "0 0 24px rgba(6,255,165,0.95)", "0 0 10px rgba(6,255,165,0.4)"] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      />

      {/* spacer for line column on desktop */}
      <div className={`hidden md:block ${alignLeft ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`} />

      <div className={`${alignLeft ? 'md:order-1 md:pr-10' : 'md:order-2 md:pl-10'}`}>
        <div className="rounded-2xl border border-primary/30 bg-darkLighter p-6 hover:border-accent transition-colors">
          <div className="flex items-center justify-between">
            <div className="text-textMuted tracking-[0.18em] text-xs">{item.phase}</div>
            <div className="text-2xl">{item.icon}</div>
          </div>
          <div className="text-[1.6rem] font-bold mt-2">{item.title}</div>
          <div className="text-text mt-1">{item.description}</div>
          <div className="text-textMuted text-xs mt-2">{item.dayRange}</div>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-text">
            {item.details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}


