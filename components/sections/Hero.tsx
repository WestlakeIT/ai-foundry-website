"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center pt-32 pb-20 px-6">
      <div className="mx-auto w-full max-w-[1400px] text-center">
        <motion.h1
          className="text-[clamp(3.5rem,9vw,7rem)] font-black leading-[1] tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
          }}
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 0.6 },
            scale: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.6,
            },
          }}
        >
          Your AI Vision.
          <br />
          Live in 90 Days.
        </motion.h1>
        <p className="mt-7 mx-auto max-w-[820px] text-textMuted text-[clamp(1.2rem,2.2vw,1.75rem)]">
          We don&apos;t just build AI. We forge ventures, transform enterprises, and turn breakthrough ideas into market reality—fast.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link href="/start-building" className="btn-primary inline-block rounded-full bg-gradient-to-br from-primary to-primaryDark px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5">
            Start Building
          </Link>
          <Link href="/process" className="inline-block rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-text hover:bg-primary/10">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}

