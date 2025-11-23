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
          Live in 30 Days.
        </motion.h1>
        <p className="mt-7 mx-auto max-w-[820px] text-textMuted text-[clamp(1.2rem,2.2vw,1.75rem)]">
          We don’t just build AI. We forge ventures, transform enterprises, and turn bold ideas into market reality—fast.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link href="/start-building" className="inline-block rounded-full bg-gradient-to-r from-[#6b5bff] to-[#6bffd9] px-8 py-4 text-lg font-semibold text-[#06101b] shadow-[0_10px_26px_rgba(107,91,255,0.14)] transition-transform hover:-translate-y-0.5 animate-[gentlePulse_4.5s_ease-in-out_infinite]">
            Start Building
          </Link>
          <Link href="/process" className="inline-block rounded-full border-2 border-[rgba(255,255,255,0.07)] backdrop-blur-[4px] px-8 py-4 text-lg font-semibold text-[#e9eef2]">
            See How It Works
          </Link>
        </div>
        <div className="mt-20 md:mt-24 flex justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center">
              <span className="scroll-arrow" />
              <span className="scroll-arrow" style={{ animationDelay: '.2s' }} />
              <span className="scroll-arrow" style={{ animationDelay: '.4s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

