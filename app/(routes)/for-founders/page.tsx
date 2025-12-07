"use client";

import { motion } from 'framer-motion';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';
import { ChartLineUp, SquaresFour, FileText, Handshake, DeviceMobile } from '@/components/icons/PhosphorIcons';

// Reusable Icon Component
const InfoIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${className}`}>
    <div className="text-slate-300 opacity-90">
      {children}
    </div>
  </div>
);

export default function ForFoundersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden" style={{
        background: `
          radial-gradient(circle at 30% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 70% 100%, rgba(6, 255, 165, 0.1) 0%, transparent 40%),
          #0a0a0a
        `
      }}>
        {/* Animated particles */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {[0, 2, 4, 6, 8, 10, 12, 14, 16].map((delay, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-primary/50 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                animation: `particleFloat 15s infinite linear`,
                animationDelay: `${delay}s`
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] relative z-10">
          <header className="mb-12">
            <motion.h1 
              className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight mb-6 bg-gradient-to-br from-white via-[#60a5fa] to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Turn your AI idea into a funded venture in accelerated days
            </motion.h1>
            <motion.p 
              className="text-textMuted text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              We act as your technical partner: build a production-ready AI product, validate with real users, and get investor-ready — while you focus on customers and growth.
            </motion.p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Dot pattern background */}
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="relative z-10">
                <h3 className="text-accent text-2xl font-bold mb-6">YOU BRING</h3>
                <ul className="list-none space-y-4">
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Domain expertise</strong>
                    <div className="text-textMuted leading-relaxed">You know the problem and the users — we build the solution.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Vision & strategy</strong>
                    <div className="text-textMuted leading-relaxed">High-level direction and go-to-market focus.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Access to users</strong>
                    <div className="text-textMuted leading-relaxed">Beta testers, early adopters, or pilot partners.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Conviction to move fast</strong>
                    <div className="text-textMuted leading-relaxed">Decisive founders launch and iterate quickly.</div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Dot pattern background */}
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="relative z-10">
                <h3 className="text-accent text-2xl font-bold mb-6">WE BRING</h3>
                <ul className="list-none space-y-4">
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">AI & Full‑stack engineering</strong>
                    <div className="text-textMuted leading-relaxed">From model design to scalable APIs and product UI.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Investor‑ready architecture</strong>
                    <div className="text-textMuted leading-relaxed">Secure, auditable, and due‑diligence friendly tech stack.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Rapid prototyping</strong>
                    <div className="text-textMuted leading-relaxed">Validated MVPs in weeks — not months.</div>
                  </li>
                  <li className="group/item">
                    <strong className="block text-white text-lg mb-1">Fundraising credibility</strong>
                    <div className="text-textMuted leading-relaxed">Tech demos, decks, and warm investor intros.</div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-[1200px]">

          {/* Section Title */}
          <div className="mt-12 mb-12">
            <h2 className="text-4xl font-extrabold bg-gradient-to-br from-white to-accent bg-clip-text text-transparent mb-4">
              What You Get
            </h2>
            <p className="text-textMuted text-xl">Everything you need to launch and fundraise</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* Production-ready MVP */}
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative z-10">
                <InfoIcon className="mb-4">
                  <DeviceMobile size={28} weight="regular" className="text-[#6ce6ff]" />
                </InfoIcon>
                <strong className="block text-white text-lg mb-2">Production‑ready MVP</strong>
                <div className="text-textMuted leading-relaxed">Launch to real users and measure product‑market fit quickly.</div>
              </div>
            </motion.div>

            {/* Investor-ready stack */}
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative z-10">
                <InfoIcon className="mb-4">
                  <SquaresFour size={28} weight="regular" className="text-[#9df3bd]" />
                </InfoIcon>
                <strong className="block text-white text-lg mb-2">Investor‑ready stack</strong>
                <div className="text-textMuted leading-relaxed">Architecture and docs designed for scalability and diligence.</div>
              </div>
            </motion.div>

            {/* Complete technical docs */}
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative z-10">
                <InfoIcon className="mb-4">
                  <FileText size={28} weight="regular" className="text-[#7AA0C4]" />
                </InfoIcon>
                <strong className="block text-white text-lg mb-2">Complete technical docs</strong>
                <div className="text-textMuted leading-relaxed">Designs, API specs, infra diagram and runbooks for engineers and investors.</div>
              </div>
            </motion.div>

            {/* Fundraising support */}
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative z-10">
                <InfoIcon className="mb-4">
                  <ChartLineUp size={28} weight="regular" className="text-[#A18AC6]" />
                </InfoIcon>
                <strong className="block text-white text-lg mb-2">Fundraising support</strong>
                <div className="text-textMuted leading-relaxed">Demo scripts, technical slides, and intro strategies to accelerate leads.</div>
              </div>
            </motion.div>

            {/* CTO continuity option */}
            <motion.div
              className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative z-10">
                <InfoIcon className="mb-4">
                  <Handshake size={28} weight="regular" className="text-[#6FB39D]" />
                </InfoIcon>
                <strong className="block text-white text-lg mb-2">CTO continuity option</strong>
                <div className="text-textMuted leading-relaxed">Short- or long-term CTO-as-a-service as you hire your in-house team.</div>
              </div>
            </motion.div>
          </div>

          {/* Roadmap Timeline */}
          <div className="mt-12 mb-12 p-8 bg-[rgba(20,20,30,0.6)] rounded-[20px] border border-primary/20 backdrop-blur-[10px]">
            <h3 className="text-2xl font-bold text-accent mb-8 text-center">accelerated-delivery roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: 1, text: "Discover & align — user interviews, scope, success metrics" },
                { num: 2, text: "Prototype & validate — model experiments, UI flows" },
                { num: 3, text: "MVP build — infra, API, product polish" },
                { num: 4, text: "Launch & fundraise — demos, investor pack, intros" }
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full inline-flex items-center justify-center mb-4 font-bold text-xl bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-accent hover:to-[#00d4aa]">
                    {step.num}
                  </div>
                  <p className="text-textMuted leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/start-building"
                className="inline-block rounded-full bg-gradient-to-br from-primary to-primaryDark px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply to Launch — Start accelerated Days
              </Link>
            </motion.div>
          </div>

          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}

