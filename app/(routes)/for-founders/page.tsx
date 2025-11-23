"use client";

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import FAQ from '@/components/sections/FAQ';

export default function ForFoundersPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <motion.h1 
          className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          From Idea Sketch to Funded AI Venture in 90 Days
        </motion.h1>
        <motion.p 
          className="mt-4 text-textMuted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          We act as your technical co-founder — building your AI product and investor story while you focus on growth.
        </motion.p>
        <motion.p 
          className="mt-2 text-sm text-textMuted italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Trusted by early-stage founders across SaaS, healthcare, and fintech.
        </motion.p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 relative">
          {/* Connecting line/glow effect between cards */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-3/4 bg-gradient-to-b from-transparent via-primary to-transparent opacity-80 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(99,102,241,0.8),0_0_20px_rgba(6,255,165,0.4)] blur-[2px] animate-pulse" />
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent/30 blur-md animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card>
              <h3 className="mb-4 text-accent text-xl">YOU BRING</h3>
              <ul className="list-none space-y-2">
                <li>Domain expertise</li>
                <li>Vision & strategy</li>
                <li>Access to users</li>
                <li>Conviction to move fast</li>
              </ul>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card>
              <h3 className="mb-4 text-accent text-xl">WE BRING</h3>
              <ul className="list-none space-y-2">
                <li>Technical architecture</li>
                <li>AI/ML expertise</li>
                <li>Full-stack development</li>
                <li>Investor credibility</li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8">
          <Card>
            <h3 className="mb-4 text-2xl text-accent">What You Get</h3>
            <ul className="list-none space-y-2">
              <li>📱 <strong>Production-Ready MVP</strong> – Launch to real users, not just demos</li>
              <li>💼 <strong>Investor-Ready Stack</strong> – Built for scalability and diligence</li>
              <li>📚 <strong>Full Technical Docs</strong> – Everything investors and engineers need</li>
              <li>🚀 <strong>Fundraising Support</strong> – Tech demos, decks, and investor intros</li>
              <li>🤝 <strong>CTO Continuity Option</strong> – Keep us as your long-term tech partner</li>
            </ul>
          </Card>
        </div>

        <div className="mt-16">
          <FAQ />
        </div>

        <div className="mt-12 text-center">
          <motion.a 
            href="/start-building" 
            className="relative rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Apply to Build With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

