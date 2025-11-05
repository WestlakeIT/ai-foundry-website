"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? 'py-2 bg-[rgba(10,10,10,0.95)]' : 'py-4 bg-[rgba(10,10,10,0.8)]'
      } fixed top-0 z-50 w-full backdrop-blur-md transition-all`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          WESTLAKE AI FOUNDRY
        </Link>

        <nav className="hidden items-center gap-10 md:flex text-[1.05rem]">
          <div
            className="relative"
            onMouseEnter={() => setBuildOpen(true)}
            onMouseLeave={() => setBuildOpen(false)}
          >
            <Link href="#build" className="flex items-center gap-1 text-text hover:text-accent">
              Build
              <span className={`text-sm transition-transform ${buildOpen ? 'rotate-180' : ''}`}>▼</span>
            </Link>
            <AnimatePresence>
              {buildOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-0 mt-2 w-56 rounded-lg border border-primary/20 bg-darkLighter/95 p-2 shadow-xl"
                >
                  <Link href="/for-founders" className="block rounded-md px-4 py-2 text-text hover:bg-primary/10 hover:text-accent">
                    For Founders
                  </Link>
                  <Link href="/for-enterprise" className="block rounded-md px-4 py-2 text-text hover:bg-primary/10 hover:text-accent">
                    For Enterprise
                  </Link>
                  <Link href="/for-innovators" className="block rounded-md px-4 py-2 text-text hover:bg-primary/10 hover:text-accent">
                    For Innovators
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions" className="text-text hover:text-accent">Solutions</Link>
          <Link href="/process" className="text-text hover:text-accent">Process</Link>
          <Link
            href="/start-building"
            className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-7 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.45)] transition-transform hover:-translate-y-0.5"
          >
            Start Building
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-primary/20 bg-darkLighter"
          >
            <div className="px-6 py-4 space-y-3">
              <details className="group">
                <summary className="list-none cursor-pointer text-textMuted">Build</summary>
                <div className="ml-3 mt-2 space-y-2">
                  <Link href="/for-founders" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">For Founders</Link>
                  <Link href="/for-enterprise" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">For Enterprise</Link>
                  <Link href="/for-innovators" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">For Innovators</Link>
                </div>
              </details>
              <Link href="/solutions" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">Solutions</Link>
              <Link href="/process" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">Process</Link>
              <Link
                href="/start-building"
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full rounded-full bg-gradient-to-br from-primary to-primaryDark px-5 py-2 text-center font-semibold text-white"
              >
                Start Building
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

