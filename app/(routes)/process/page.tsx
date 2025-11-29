"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Clock, CurrencyDollar, Target, X, RocketLaunch, Sparkle, Lightning, ShieldCheck, Check, SquaresFour, Wrench } from '@/components/icons/PhosphorIcons';

export default function ProcessPage() {
  const painPointsRef = useRef<(HTMLElement | null)[]>([]);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Observe all pain points and cards
    [...painPointsRef.current, ...cardsRef.current].forEach(el => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #0d1b2a 0%, #0a0a0f 100%)' }}>
        <div 
          className="absolute w-[200%] h-[200%] opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f5ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'drift 20s linear infinite'
          }}
        />
        <div className="text-center z-10 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 bg-gradient-to-br from-[#00f5ff] via-[#00ff88] to-[#0099ff] bg-clip-text text-transparent">
            The Story of Your AI Journey
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-10">
            From impossible deadline to delivered excellence
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="30" height="40" viewBox="0 0 30 40" className="text-cyan-400">
            <rect x="8" y="8" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="15" cy="15" r="2" fill="currentColor">
              <animate attributeName="cy" from="15" to="21" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="min-h-screen flex items-center py-20 px-5 bg-gradient-to-br from-[#0a1a2a] via-[#0d2b3a] to-[#0d1b2a]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#0099ff] font-bold">
                The Industry Problem
              </h2>
              <ul className="space-y-5">
                <li 
                  ref={(el) => { if (el) painPointsRef.current[0] = el; }}
                  className="flex items-center p-5 bg-[rgba(0,245,255,0.15)] border-l-4 border-[#00f5ff] rounded-lg backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-5">
                    <Clock size={28} weight="regular" className="text-[#00f5ff]" />
                  </div>
                  <div>
                    <strong className="block mb-1 text-cyan-200">180+ Days of Uncertainty</strong>
                    <span className="text-cyan-100/80">Traditional consultancies drag projects for months with unclear milestones</span>
                  </div>
                </li>
                <li 
                  ref={(el) => { if (el) painPointsRef.current[1] = el; }}
                  className="flex items-center p-5 bg-[rgba(0,245,255,0.15)] border-l-4 border-[#00f5ff] rounded-lg backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-5">
                    <CurrencyDollar size={28} weight="regular" className="text-[#00f5ff]" />
                  </div>
                  <div>
                    <strong className="block mb-1 text-cyan-200">Budget Black Holes</strong>
                    <span className="text-cyan-100/80">Costs spiral out of control with no predictable outcomes</span>
                  </div>
                </li>
                <li 
                  ref={(el) => { if (el) painPointsRef.current[2] = el; }}
                  className="flex items-center p-5 bg-[rgba(0,245,255,0.15)] border-l-4 border-[#00f5ff] rounded-lg backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-5">
                    <Target size={28} weight="regular" className="text-[#00f5ff]" />
                  </div>
                  <div>
                    <strong className="block mb-1 text-cyan-200">Moving Targets</strong>
                    <span className="text-cyan-100/80">Scope creep and changing requirements derail progress</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="absolute top-[10%] left-[10%] p-4 bg-[rgba(0,245,255,0.25)] border-2 border-[#00f5ff] rounded-lg animate-float text-cyan-200 font-semibold shadow-[0_0_20px_rgba(0,245,255,0.5)]">
                6 Months?
              </div>
              <div className="absolute top-[20%] right-[20%] p-4 bg-[rgba(0,153,255,0.25)] border-2 border-[#0099ff] rounded-lg animate-float text-cyan-200 font-semibold shadow-[0_0_20px_rgba(0,153,255,0.5)]" style={{ animationDelay: '0.5s' }}>
                $500K Budget
              </div>
              <div className="absolute bottom-[30%] left-[15%] p-4 bg-[rgba(0,204,255,0.25)] border-2 border-[#00ccff] rounded-lg animate-float text-cyan-200 font-semibold shadow-[0_0_20px_rgba(0,204,255,0.5)]" style={{ animationDelay: '1s' }}>
                Maybe Q3?
              </div>
              <div className="absolute bottom-[10%] right-[10%] p-4 bg-[rgba(0,245,255,0.25)] border-2 border-[#00f5ff] rounded-lg animate-float text-cyan-200 font-semibold shadow-[0_0_20px_rgba(0,245,255,0.5)]" style={{ animationDelay: '1.5s' }}>
                Scope TBD
              </div>
              <div className="absolute top-[50%] left-[40%] p-4 bg-[rgba(0,153,255,0.25)] border-2 border-[#0099ff] rounded-lg animate-float text-cyan-200 font-semibold shadow-[0_0_20px_rgba(0,153,255,0.5)]" style={{ animationDelay: '2s' }}>
                Team Unknown
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="min-h-screen flex items-center py-20 px-5 bg-gradient-to-b from-[#0d1b2a] to-[#0a1a2a]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-5 bg-gradient-to-br from-[#00f5ff] via-[#00ff88] to-[#0099ff] bg-clip-text text-transparent font-bold">
              Enter: The Foundry Process
            </h2>
            <p className="text-xl text-cyan-300">
              We engineered a revolution in AI development
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-20">
            <div className="flex-1 p-10 rounded-3xl bg-[rgba(0,245,255,0.15)] border-2 border-dashed border-[rgba(0,245,255,0.4)] text-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                <X size={40} weight="regular" className="text-[#00f5ff]" />
              </div>
              <div className="text-2xl mb-4 font-semibold text-cyan-200">Before</div>
              <div className="text-cyan-100/80">
                Chaos, uncertainty, endless meetings,<br />
                unclear roadmap, budget overruns
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="text-5xl bg-gradient-to-r from-[#00f5ff] to-[#00ff88] bg-clip-text text-transparent animate-pulse font-bold">→</div>
            </div>
            <div className="flex-1 p-10 rounded-3xl bg-gradient-to-br from-[rgba(0,245,255,0.2)] via-[rgba(0,255,136,0.15)] to-[rgba(0,153,255,0.2)] border-2 border-[rgba(0,245,255,0.5)] text-center backdrop-blur-sm shadow-[0_0_30px_rgba(0,245,255,0.3)]">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                <RocketLaunch size={40} weight="regular" className="text-[#00f5ff]" />
              </div>
              <div className="text-2xl mb-4 font-semibold text-cyan-200">After Delivery</div>
              <div className="text-cyan-100/80">
                Production-ready AI system,<br />
                documented, tested, deployed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-5" style={{ background: 'radial-gradient(ellipse at top, #0d1b2a 0%, #0a0a0f 100%)' }}>
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-5 font-bold bg-gradient-to-r from-[#00f5ff] to-[#0099ff] bg-clip-text text-transparent">Your Delivery Journey</h2>
            <p className="text-cyan-300 text-xl">Phase-Based. Whether 30, 60, or 120 days — every phase drives results.</p>
          </div>

          <div className="relative py-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00f5ff] via-[#00ff88] via-[#0099ff] to-transparent opacity-50" />
            <div className="flex flex-col lg:flex-row justify-between relative">
              {journeyStages.map((stage, index) => {
                const auroraColors = [
                  'from-[#00a8cc] to-[#007a99]',
                  'from-[#00b894] to-[#008f6e]',
                  'from-[#0099cc] to-[#006699]',
                  'from-[#00a8cc] to-[#0088aa]',
                  'from-[#0066aa] to-[#004488]'
                ];
                return (
                  <div key={index} className="flex-1 text-center relative mb-16 lg:mb-0">
                    <div 
                      ref={(el) => { if (el) cardsRef.current[index] = el; }}
                      className="bg-[rgba(0,245,255,0.08)] rounded-3xl p-8 mx-2 backdrop-blur-lg border border-[rgba(0,245,255,0.3)] transition-all hover:-translate-y-2 hover:bg-[rgba(0,245,255,0.15)] hover:border-[rgba(0,245,255,0.6)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] cursor-pointer"
                    >
                      <div className={`absolute -top-[30px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${auroraColors[index]} rounded-full flex items-center justify-center text-xl font-bold text-white shadow-[0_0_15px_rgba(0,168,204,0.4)]`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                        {stage.icon}
                      </div>
                      <div className="text-xl mb-4 text-cyan-200 font-semibold">{stage.title}</div>
                      <div className="text-cyan-100/70 text-sm">{stage.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-5 bg-gradient-to-br from-[#0a1a2a] via-[#0d1b2a] to-[#0d2b3a]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-5 font-bold bg-gradient-to-r from-[#00f5ff] to-[#0099ff] bg-clip-text text-transparent">Why This Changes Everything</h2>
            <p className="text-cyan-300 text-xl">The process isn&apos;t just a timeline—it&apos;s a promise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {benefits.map((benefit, index) => {
              const benefitGradients = [
                'from-[#00f5ff] to-[#00d9ff]',
                'from-[#00ff88] to-[#39ff14]',
                'from-[#00ccff] to-[#0099ff]',
                'from-[#00f5ff] to-[#00ccff]',
                'from-[#0099ff] to-[#0066cc]',
                'from-[#00f5ff] to-[#0099ff]'
              ];
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) cardsRef.current[journeyStages.length + index] = el; }}
                  className="bg-[rgba(0,245,255,0.08)] rounded-3xl p-10 text-center backdrop-blur-lg border border-[rgba(0,245,255,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,245,255,0.4)] relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefitGradients[index]}`} />
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                    {benefit.icon}
                  </div>
                  <div className="text-xl mb-4 font-semibold text-cyan-200">{benefit.title}</div>
                  <div className="text-cyan-100/70">{benefit.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[60vh] flex items-center justify-center text-center py-20 px-5" style={{ background: 'radial-gradient(circle at center, #0d1b2a 0%, #0a0a0f 100%)' }}>
        <div>
          <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-br from-[#00f5ff] via-[#00ff88] to-[#0099ff] bg-clip-text text-transparent font-bold">
            Ready to Transform Your Timeline?
          </h2>
          <p className="text-xl text-cyan-300 mb-10">
            Join companies that measure progress in days, not quarters
          </p>
          <Link 
            href="/start-building"
            className="inline-block px-12 py-5 bg-gradient-to-br from-[#00a8cc] via-[#0088aa] to-[#006699] text-white rounded-full text-xl font-semibold transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,168,204,0.3)] hover:shadow-[0_15px_40px_rgba(0,168,204,0.5)] hover:scale-105"
          >
            Start Your AI Journey
          </Link>
        </div>
      </section>

    </div>
  );
}

const journeyStages = [
  {
    icon: <Target size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Discovery',
    description: 'We dive deep into your vision, validate technical feasibility, and assemble your dream team. No guesswork—just data-driven decisions.'
  },
  {
    icon: <SquaresFour size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Foundation',
    description: 'Infrastructure comes online, data pipelines flow, and your AI begins to take shape. Everything is version-controlled and documented.'
  },
  {
    icon: <Wrench size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Build Sprint',
    description: 'AI models are trained, APIs are developed, and frontends take shape. Daily standups keep everyone aligned and progress visible.'
  },
  {
    icon: <Sparkle size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Refinement',
    description: 'Real users test the product, performance is optimized, and security is hardened. Your product transforms from good to exceptional.'
  },
  {
    icon: <RocketLaunch size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Launch Ready',
    description: 'Production deployment, monitoring is set up, and team training is completed. You\'re not just getting software—you\'re getting a complete solution.'
  }
];

const benefits = [
  {
    icon: <Clock size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Time Certainty',
    description: 'Know exactly when you\'ll have your solution. Plan launches, coordinate teams, and hit market windows with confidence.'
  },
  {
    icon: <CurrencyDollar size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Budget Locked',
    description: 'One price, no surprises. Your CFO will love the predictability. No scope creep, no additional charges, no negotiation.'
  },
  {
    icon: <Check size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Quality Guaranteed',
    description: 'Production-ready means tested, documented, and deployable. We don\'t just build; we deliver excellence.'
  },
  {
    icon: <Lightning size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Full Transparency',
    description: 'Daily updates, weekly demos, clear milestones. You\'re never in the dark about progress.'
  },
  {
    icon: <RocketLaunch size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Speed to Market',
    description: 'While competitors are still planning, you\'re already in production. First-mover advantage is real.'
  },
  {
    icon: <ShieldCheck size={28} weight="regular" className="text-[#00f5ff]" />,
    title: 'Risk Eliminated',
    description: 'Fixed timeline, fixed cost, guaranteed delivery. The only risk is not starting soon enough.'
  }
];
