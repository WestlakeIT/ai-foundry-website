"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

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
        <Link href="/" className="logo text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_7px_rgba(255,255,255,0.21)]">
          WESTLAKE AI FOUNDRY
        </Link>

        <nav className="hidden items-center gap-10 md:flex text-[1.15rem]">
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
                  className="absolute left-0 mt-2 w-56 rounded-lg border border-primary/20 bg-darkLighter/95 p-2 shadow-xl text-[1.05rem]"
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
          <div
            className="relative"
            onMouseEnter={() => setInsightsOpen(true)}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <Link href="/insights" className="flex items-center gap-1 text-text hover:text-accent">
              Insights
              <span className={`text-sm transition-transform ${insightsOpen ? 'rotate-180' : ''}`}>▼</span>
            </Link>
            <AnimatePresence>
              {insightsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-0 mt-2 w-[500px] rounded-lg border border-primary/20 bg-darkLighter/95 p-6 shadow-xl text-[1.05rem]"
                >
                  {/* AI & EMERGING TECH Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-[#ff6b9d] rounded flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="2" height="2" fill="white" rx="1"/>
                        <rect x="10" y="4" width="2" height="2" fill="white" rx="1"/>
                        <path d="M5 9H7M9 9H11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-textMuted uppercase tracking-wider text-sm">AI & EMERGING TECH</span>
                  </div>

                  {/* Insight Articles */}
                  <div className="space-y-4 mb-4">
                    {/* Article 1: HOT */}
                    <Link 
                      href="/insights/path-to-confident-gen-ai-adoption"
                      className="block p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-1 text-xs font-semibold text-white uppercase bg-[#d97706] rounded">HOT</span>
                        <div className="flex-1">
                          <h3 className="font-bold text-text group-hover:text-accent transition-colors mb-1">
                            The path to confident Gen AI adoption
                          </h3>
                          <p className="text-textMuted text-sm">
                            Bridge the gap between AI leadership and business readiness
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Article 2: RESEARCH */}
                    <Link 
                      href="/insights/how-to-get-ready-for-agentic-internet"
                      className="block p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-1 text-xs font-semibold text-white uppercase bg-[#7c3aed] rounded">RESEARCH</span>
                        <div className="flex-1">
                          <h3 className="font-bold text-text group-hover:text-accent transition-colors mb-1">
                            How to get ready for the agentic internet
                          </h3>
                          <p className="text-textMuted text-sm">
                            Develop capabilities needed to create robust agents
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Article 3: NEW (Highlighted) */}
                    <Link 
                      href="/insights/responsible-ai-governance-framework"
                      className="block p-4 rounded-lg border border-gray-600 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-1 text-xs font-semibold text-white uppercase bg-[#10b981] rounded">NEW</span>
                        <div className="flex-1">
                          <h3 className="font-bold text-text group-hover:text-accent transition-colors mb-1">
                            Responsible AI governance framework
                          </h3>
                          <p className="text-textMuted text-sm">
                            Best practices for ethical AI implementation
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Article 4: No tag */}
                    <Link 
                      href="/insights/extending-lifespan-legacy-systems-genai"
                      className="block p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-text group-hover:text-accent transition-colors mb-1">
                            Extending the Lifespan of Legacy Systems: How GenAI Transforms Modernization
                          </h3>
                          <p className="text-textMuted text-sm">
                            Discover how Generative AI is revolutionizing legacy system modernization, reducing costs by 50% and timeline by 60%
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* View all insights link */}
                  <div className="pt-4 border-t border-primary/20">
                    <Link 
                      href="/insights"
                      className="text-primary hover:text-accent transition-colors flex items-center gap-1 text-sm"
                    >
                      View all insights →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/start-building"
            className="rounded-full bg-gradient-to-r from-[#a8e6cf] to-[#7fc8a9] px-7 py-3 text-base font-semibold text-[#06101b] shadow-[0_10px_26px_rgba(127,200,169,0.2)] transition-transform hover:-translate-y-0.5"
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
              <details className="group">
                <summary className="list-none cursor-pointer text-textMuted">Insights</summary>
                <div className="ml-3 mt-2 space-y-2">
                  <Link href="/insights/path-to-confident-gen-ai-adoption" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">The path to confident Gen AI adoption</Link>
                  <Link href="/insights/how-to-get-ready-for-agentic-internet" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">How to get ready for the agentic internet</Link>
                  <Link href="/insights/responsible-ai-governance-framework" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">Responsible AI governance framework</Link>
                  <Link href="/insights/extending-lifespan-legacy-systems-genai" onClick={() => setMobileOpen(false)} className="block text-textMuted hover:text-accent">Extending the Lifespan of Legacy Systems: How GenAI Transforms Modernization</Link>
                  <Link href="/insights" onClick={() => setMobileOpen(false)} className="block text-primary hover:text-accent">View all insights</Link>
                </div>
              </details>
              <Link
                href="/start-building"
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full rounded-full bg-gradient-to-r from-[#a8e6cf] to-[#7fc8a9] px-5 py-2 text-center font-semibold text-[#06101b]"
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

