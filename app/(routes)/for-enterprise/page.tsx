import Card from '@/components/ui/Card';
import { Lightning, ShieldCheck, Check, Users } from '@/components/icons/PhosphorIcons';
import { Database, StatsDownSquare, Package } from "iconoir-react";

// Reusable Icon Component
const InfoIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${className}`}>
    <div className="text-slate-300 opacity-90">
      {children}
    </div>
  </div>
);

export default function ForEnterprisePage() {
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
          {/* Urgent Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#ff0844] to-[#ff6b6b] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-8">
            <Lightning size={18} weight="bold" />
            <span>ENTERPRISE TRANSFORMATION ACCELERATOR</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight mb-6 bg-gradient-to-br from-white via-[#60a5fa] to-accent bg-clip-text text-transparent">
            Transform Legacy Systems into<br />
            AI-Powered Profit Centers
          </h1>

          {/* Subtitle with metric pills */}
          <div className="flex flex-wrap gap-8 items-center mb-12 text-lg text-textMuted">
            <div className="group bg-primary/10 border border-primary/30 px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5">
              <span className="text-accent font-bold">50%</span>
              <span>Cost Reduction</span>
            </div>
            <div className="group bg-primary/10 border border-primary/30 px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5">
              <span className="text-accent font-bold">10x</span>
              <span>Performance Boost</span>
            </div>
            <div className="group bg-primary/10 border border-primary/30 px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5">
              <span className="text-accent font-bold">Zero</span>
              <span>Downtime Migration</span>
            </div>
            <div className="group bg-primary/10 border border-primary/30 px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5">
              <span className="text-accent font-bold">Fortune 500</span>
              <span>Trusted</span>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mt-12 p-8 bg-[rgba(20,20,30,0.6)] rounded-[20px] border border-primary/20 backdrop-blur-[10px]">
            <h2 className="text-xl text-textMuted mb-8 flex items-center gap-3">
              <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-accent"></span>
              Real Problems We Hear From Enterprise Leaders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-[rgba(10,10,10,0.5)] rounded-[15px] p-6 border border-transparent transition-all duration-300 hover:border-[rgba(255,215,0,0.3)] hover:translate-x-2.5 overflow-hidden">
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.1)] to-transparent transition-all duration-500 group-hover:left-full"></div>
                <div className="mb-3 relative z-10">
                  <InfoIcon>
                    <Database width={28} height={28} strokeWidth={1.75} className="text-[#7AA0C4]" />
                  </InfoIcon>
                </div>
                <div className="text-[#e5e7eb] text-lg leading-relaxed relative z-10">
                  &ldquo;Our data is stuck in outdated databases and legacy file systems&rdquo;
                </div>
              </div>

              <div className="group relative bg-[rgba(10,10,10,0.5)] rounded-[15px] p-6 border border-transparent transition-all duration-300 hover:border-[rgba(255,215,0,0.3)] hover:translate-x-2.5 overflow-hidden">
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.1)] to-transparent transition-all duration-500 group-hover:left-full"></div>
                <div className="mb-3 relative z-10">
                  <InfoIcon>
                    <ShieldCheck size={28} weight="regular" className="text-[#6FB39D]" />
                  </InfoIcon>
                </div>
                <div className="text-[#e5e7eb] text-lg leading-relaxed relative z-10">
                  &ldquo;We need AI but can&apos;t risk our operations&rdquo;
                </div>
              </div>

              <div className="group relative bg-[rgba(10,10,10,0.5)] rounded-[15px] p-6 border border-transparent transition-all duration-300 hover:border-[rgba(255,215,0,0.3)] hover:translate-x-2.5 overflow-hidden">
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.1)] to-transparent transition-all duration-500 group-hover:left-full"></div>
                <div className="mb-3 relative z-10">
                  <InfoIcon>
                    <StatsDownSquare width={28} height={28} strokeWidth={1.75} className="text-[#A18AC6]" />
                  </InfoIcon>
                </div>
                <div className="text-[#e5e7eb] text-lg leading-relaxed relative z-10">
                  &ldquo;We&apos;re behind on AI adoption and need to act fast&rdquo;
                </div>
              </div>

              <div className="group relative bg-[rgba(10,10,10,0.5)] rounded-[15px] p-6 border border-transparent transition-all duration-300 hover:border-[rgba(255,215,0,0.3)] hover:translate-x-2.5 overflow-hidden">
                <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.1)] to-transparent transition-all duration-500 group-hover:left-full"></div>
                <div className="mb-3 relative z-10">
                  <InfoIcon>
                    <Users size={28} weight="regular" className="text-[#7AA0C4]" />
                  </InfoIcon>
                </div>
                <div className="text-[#e5e7eb] text-lg leading-relaxed relative z-10">
                  &ldquo;Our competition is already using AI to win&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-[1400px]">

        {/* Section Title */}
        <div className="mt-12 mb-12 text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-br from-white to-accent bg-clip-text text-transparent mb-4">
            How We Transform Your Enterprise
          </h2>
          <p className="text-textMuted text-xl">Four pillars of risk-free, rapid AI transformation</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Zero-Disruption Development */}
          <div className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#00d4aa]">
                1
              </div>
              <h3 className="text-accent text-2xl font-bold mb-4">Zero-Disruption Development</h3>
              <p className="text-[#e5e7eb] leading-relaxed mb-6">Build tomorrow&apos;s AI while today&apos;s systems run perfectly</p>
              <ul className="list-none space-y-2">
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Parallel processing approach</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>70% cost reduction guaranteed</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Current operations protected</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Phased Transformation */}
          <div className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#00d4aa]">
                2
              </div>
              <h3 className="text-accent text-2xl font-bold mb-4">Phased Transformation</h3>
              <p className="text-[#e5e7eb] leading-relaxed mb-6">De-risk your journey with incremental migration strategy</p>
              <ul className="list-none space-y-2">
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Phase-by-phase validation</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Complete control at each step</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Insurance-ready approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Intelligent Enhancement */}
          <div className="group relative bg-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border border-primary/20 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#00d4aa]">
                3
              </div>
              <h3 className="text-accent text-2xl font-bold mb-4">Intelligent Enhancement</h3>
              <p className="text-[#e5e7eb] leading-relaxed mb-6">Transform existing systems into AI powerhouses without rebuilding</p>
              <ul className="list-none space-y-2">
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>10x performance improvement</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Maximize ROI on past investments</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Weeks not years to deploy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Executive AI Mastery (Featured) */}
          <div className="group relative bg-gradient-to-br from-accent/10 to-[rgba(30,30,40,0.6)] backdrop-blur-[10px] border-2 border-accent/30 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(6,255,165,0.15)] overflow-hidden">
            {/* Animated gradient line */}
            <div className="absolute top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent" style={{
              left: '-100%',
              animation: 'scan 3s linear infinite'
            }}></div>
            
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            
            {/* Free Badge */}
            <span className="absolute -top-px -right-px bg-gradient-to-br from-accent to-[#00d4aa] text-dark px-6 py-2 rounded-bl-[18px] rounded-tr-[20px] text-xs font-bold tracking-wider z-20 animate-pulseFade">
              FREE PROGRAM
            </span>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#00d4aa]">
                4
              </div>
              <h3 className="text-accent text-2xl font-bold mb-4">Executive AI Mastery</h3>
              <p className="text-[#e5e7eb] leading-relaxed mb-6">Complimentary C-Suite education program with every enterprise engagement</p>
              <ul className="list-none space-y-2">
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Weekly executive workshops</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Board-ready AI fluency</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Direct access to our founders</span>
                </li>
                <li className="text-textMuted flex items-start gap-2">
                  <Check size={20} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Strategic guidance, not tech talk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl text-accent flex items-center gap-3">
              <InfoIcon>
                <ShieldCheck size={24} weight="regular" className="text-[#6FB39D]" />
              </InfoIcon>
              <span>Security & Compliance</span>
            </h3>
            <ul className="mt-3 list-none space-y-2">
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>SOC2 Type II certified</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>HIPAA compliant development</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>On-premise deployment options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Your data never leaves your control</span>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl text-accent flex items-center gap-3">
              <InfoIcon>
                <Package width={24} height={24} strokeWidth={1.75} className="text-[#7AA0C4]" />
              </InfoIcon>
              <span>Enterprise Package Includes</span>
            </h3>
            <ul className="mt-3 list-none space-y-2">
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Dedicated AI Project Team</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Weekly executive updates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>24/7 support during transition</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Training for your team</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={18} weight="regular" className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>1-year optimization support</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5">Schedule Enterprise Consultation</a>
        </div>
      </div>
      </section>
    </>
  );
}

