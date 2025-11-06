import Link from 'next/link';

export default function PathToConfidentGenAIAdoptionPage() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primaryDark/10 to-accent/5 border-b border-primary/20 pt-32 pb-20 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulseFade" />
        <div className="mx-auto max-w-[900px] relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider bg-primary/20 rounded-full mb-6 animate-pulseFade">
              Essential Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              The Path to Confident Gen AI Adoption
            </h1>
            <p className="text-xl text-textMuted mb-12 max-w-2xl mx-auto">
              Bridge the gap between AI leadership and business readiness
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">79%</div>
                <div className="text-xs uppercase tracking-wider text-textMuted">See AI as Critical</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">23%</div>
                <div className="text-xs uppercase tracking-wider text-textMuted">Actually Integrate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">30%</div>
                <div className="text-xs uppercase tracking-wider text-textMuted">Performance Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="mx-auto max-w-[900px]">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-textMuted leading-relaxed p-6 bg-white/5 border-l-4 border-primary rounded-lg">
              <strong className="text-text">Generative AI is not just the future—it's the present necessity.</strong> Behind the headlines and executive optimism, most businesses grapple with a sobering challenge: the vision for AI is clear, but the path to value is foggy.
            </p>
          </div>

          {/* Problems Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primaryDark rounded-full" />
              Bridging the AI Leadership-Business Gap
            </h2>
            <p className="text-textMuted mb-8 text-lg">
              Executives recognize Gen AI as a transformation catalyst, but excitement often fails to create real impact. The disconnect stems from three critical challenges:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Problem Card 1 */}
              <div className="group bg-darkLighter border border-white/10 rounded-xl p-6 hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primaryDark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold text-text">Undefined Value Pathways</h3>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Visionaries promote AI's promise but lack concrete frameworks for execution. Without clear roadmaps, teams struggle to translate potential into performance.
                </p>
              </div>

              {/* Problem Card 2 */}
              <div className="group bg-darkLighter border border-white/10 rounded-xl p-6 hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primaryDark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <h3 className="text-lg font-semibold text-text">Decision Paralysis</h3>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Teams hesitate without measurable goals or clarity, stalling innovation. The fear of making wrong choices prevents any meaningful progress.
                </p>
              </div>

              {/* Problem Card 3 */}
              <div className="group bg-darkLighter border border-white/10 rounded-xl p-6 hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primaryDark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <h3 className="text-lg font-semibold text-text">Cultural Resistance</h3>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Employees wary of change slow adoption, especially when benefits aren't tangible. Fear of job displacement creates hidden friction.
                </p>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primaryDark rounded-full" />
              Building a Foundation for Success
            </h2>
            
            <div className="bg-gradient-to-br from-accent/10 via-primary/10 to-primaryDark/10 border border-accent/30 rounded-xl p-8 text-center my-10">
              <div className="text-xs uppercase tracking-wider font-bold text-accent mb-4">Proven Impact</div>
              <div className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-br from-accent via-primary to-primaryDark bg-clip-text text-transparent">
                20-30%
              </div>
              <p className="text-textMuted text-base">
                Organizations with robust Gen AI foundations outperform peers on innovation metrics
                <br />
                <span className="text-xs opacity-70">(Source: Deloitte & BCG Studies)</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="group bg-darkLighter border border-white/10 rounded-xl p-6 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    🔗
                  </div>
                  <h3 className="text-lg font-semibold text-text">Integrated Capabilities</h3>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Synchronize AI technical talent with business strategists, ensuring initiatives target urgent, high-impact needs.
                </p>
              </div>

              <div className="group bg-darkLighter border border-white/10 rounded-xl p-6 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <h3 className="text-lg font-semibold text-text">Organizational Readiness</h3>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Invest in education, onboarding workshops, and transparent communication to smooth transitions across all departments.
                </p>
              </div>
            </div>
          </section>

          {/* Strategy Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primaryDark rounded-full" />
              Key Strategies for Implementation
            </h2>
            <p className="text-textMuted mb-8 text-lg">
              Proven tactics from recent enterprise successes to shift Gen AI from theory to thriving:
            </p>
            
            <div className="space-y-4 mt-8">
              {/* Strategy 1 */}
              <div className="group relative bg-darkLighter border border-white/10 rounded-xl p-6 pl-16 hover:bg-primary/5 hover:border-primary/30 hover:translate-x-2 transition-all duration-300">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text">Set Measurable Use Cases</h3>
                  <span className="px-2 py-0.5 text-xs font-bold text-primary uppercase bg-primary/20 rounded">
                    Quick Win
                  </span>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Identify projects where Gen AI solves real problems—fraud detection, customer service automation, or rapid prototyping. Start with clear ROI metrics.
                </p>
              </div>

              {/* Strategy 2 */}
              <div className="group relative bg-darkLighter border border-white/10 rounded-xl p-6 pl-16 hover:bg-primary/5 hover:border-primary/30 hover:translate-x-2 transition-all duration-300">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text">Build and Buy AI Talent</h3>
                  <span className="px-2 py-0.5 text-xs font-bold text-primary uppercase bg-primary/20 rounded">
                    Scale
                  </span>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Cultivate internal skills while bringing on external experts for fast scaling. Create hybrid teams that accelerate progress and innovation.
                </p>
              </div>

              {/* Strategy 3 */}
              <div className="group relative bg-darkLighter border border-white/10 rounded-xl p-6 pl-16 hover:bg-primary/5 hover:border-primary/30 hover:translate-x-2 transition-all duration-300">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text">Governance that Works</h3>
                  <span className="px-2 py-0.5 text-xs font-bold text-primary uppercase bg-primary/20 rounded">
                    Control
                  </span>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Develop oversight frameworks balancing agility with risk controls. Use best practices from finance and healthcare where compliance is non-negotiable.
                </p>
              </div>

              {/* Strategy 4 */}
              <div className="group relative bg-darkLighter border border-white/10 rounded-xl p-6 pl-16 hover:bg-primary/5 hover:border-primary/30 hover:translate-x-2 transition-all duration-300">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text">Change Management as Mission</h3>
                  <span className="px-2 py-0.5 text-xs font-bold text-primary uppercase bg-primary/20 rounded">
                    Culture
                  </span>
                </div>
                <p className="text-textMuted text-sm leading-relaxed">
                  Drive open conversations, reward experimentation, and tackle fears of job displacement head-on with comprehensive retraining initiatives.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primaryDark rounded-full" />
              Your Roadmap to AI Success
            </h2>
            <p className="text-textMuted mb-8 text-lg">
              Forward-thinking organizations don't wait for perfect conditions—they act:
            </p>
            
            <div className="space-y-8 mt-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-darkLighter border-2 border-primary rounded-full flex items-center justify-center text-2xl">
                  📊
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-text mb-2">Comprehensive Readiness Assessment</h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    Audit organizational skills, data infrastructure, and cultural openness to identify strengths and areas needing improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-darkLighter border-2 border-primary rounded-full flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-text mb-2">Launch Quick Win Projects</h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    Deploy AI-powered chatbots or predictive analytics that show immediate business improvement and build cross-team excitement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-darkLighter border-2 border-primary rounded-full flex items-center justify-center text-2xl">
                  🗺️
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text mb-2">Develop Strategic Roadmap</h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    Map AI investments to core business outcomes, ensuring every initiative advances competitiveness and resilience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Warning Box */}
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-6 mb-16 flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#f59e0b]/20 rounded-full flex items-center justify-center text-lg">
              ⏰
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#f59e0b] mb-2">Why Gen AI Adoption Is Urgent Now</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                The window to capitalize on Gen AI is rapidly closing. Industries from retail to manufacturing are already reaping rewards from AI-driven pricing, personalized marketing, and supply chain optimization. Those who hesitate risk falling irreversibly behind.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 via-primaryDark/10 to-accent/5 border border-primary/20 rounded-2xl p-10 text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Bridge the Gap?</h3>
            <p className="text-textMuted mb-8 text-lg max-w-2xl mx-auto">
              Transform your organization with confident Gen AI adoption. Bold leaders won't just adapt—they'll define tomorrow's business standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-building"
                className="px-8 py-3 bg-gradient-to-br from-primary to-primaryDark text-white font-semibold rounded-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Assessment
              </Link>
              <Link
                href="/insights"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Explore More Insights
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="pt-8 border-t border-primary/20">
            <Link
              href="/insights"
              className="text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              ← Back to all insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
