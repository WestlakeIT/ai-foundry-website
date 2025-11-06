import Link from 'next/link';

export default function ExtendingLifespanLegacySystemsPage() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
            Extending the Lifespan of Legacy Systems: How GenAI Transforms the Impossible into the Inevitable
          </h1>
          <p className="text-xl text-textMuted">
            Discover how Generative AI is revolutionizing legacy system modernization—turning years-long projects into months, reducing costs by 50%, and preserving decades of business logic while enabling modern capabilities.
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <div className="space-y-6 text-text leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                The $361,000 Question
              </h2>
              <p>
                For every 100,000 lines of legacy code in your organization, you're spending approximately <strong>$361,000 annually</strong> just managing technical debt. If you're a typical enterprise, 70-80% of your IT budget disappears into maintaining systems that grow more fragile and expensive each year. Meanwhile, your competitors are launching real-time payment systems, AI-powered customer experiences, and cloud-native applications that adapt to change in days, not months.
              </p>
              
              <div className="bg-primary/10 border-l-4 border-primary p-5 my-6 rounded-r">
                <p className="mb-0"><strong>This is the legacy paradox:</strong> the systems that run your business are the same ones preventing you from transforming it.</p>
              </div>
              
              <p>
                But what if you could modernize these systems while they continue running, preserving decades of refined business logic while gaining modern capabilities? What seemed impossible just two years ago is now happening across enterprises worldwide, powered by Generative AI.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                Why Traditional Modernization Fails (And What's Changed)
              </h2>
              <p>
                Legacy systems are like archaeological sites—layers upon layers of business decisions, regulatory adaptations, and operational wisdom encoded in millions of lines of COBOL, Fortran, or aging Java. Traditional modernization approaches offered two equally problematic paths:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-primary to-primaryDark p-6 rounded-lg">
                  <div className="text-2xl font-bold mb-2">High Risk</div>
                  <div className="text-sm opacity-90 mb-1">"Rip and Replace"</div>
                  <div className="text-sm opacity-75">Massive disruption, frequent failure</div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primaryDark p-6 rounded-lg">
                  <div className="text-2xl font-bold mb-2">Cloud Spaghetti</div>
                  <div className="text-sm opacity-90 mb-1">"Lift and Shift"</div>
                  <div className="text-sm opacity-75">Same problems, higher bills</div>
                </div>
              </div>
              
              <p>
                Enter Generative AI—not as another tool, but as a revolutionary capability that understands both <em>what</em> your systems do and <em>why</em> they do it. Think of GenAI as a brilliant archaeologist who can not only excavate and catalog every artifact but also understand the civilization that created them and translate that understanding into modern terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                The Three Transformative Capabilities
              </h2>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                1. Deep System Understanding: Seeing the Invisible
              </h3>
              <p>
                GenAI agents analyze millions of lines of legacy code in days, not months. But unlike traditional static analysis tools, they create semantic maps that reveal:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Implicit business rules</strong> buried in decades-old code</li>
                <li><strong>Hidden dependencies</strong> between seemingly unrelated systems</li>
                <li><strong>Technical debt hotspots</strong> that pose the greatest risk</li>
                <li><strong>Dead code</strong> that can be eliminated (often 20-30% of the codebase)</li>
              </ul>
              
              <div className="border-l-4 border-primary pl-5 my-6 italic text-textMuted">
                A global bank discovered their 30-year-old COBOL system contained business logic for regulatory compliance that wasn't documented anywhere else. GenAI not only found it but translated it into modern microservices while preserving every nuance.
              </div>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                2. Intelligent Transformation Planning: Your Personalized Roadmap
              </h3>
              <p>
                Based on comprehensive analysis, GenAI creates modernization strategies tailored to your specific situation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Risk-weighted sequencing</strong> that tackles high-value, low-risk components first</li>
                <li><strong>Automated impact assessments</strong> showing exactly what changes affect what systems</li>
                <li><strong>Parallel-run strategies</strong> enabling modernization without downtime</li>
                <li><strong>Cost-benefit projections</strong> with accuracy previously impossible to achieve</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                3. Automated Code Evolution: Transformation at Scale
              </h3>
              <p>
                GenAI doesn't just translate code—it reimagines it for modern architectures:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Language migration</strong> (COBOL to Java, maintaining business logic perfectly)</li>
                <li><strong>Architecture refactoring</strong> (monoliths to microservices, automatically identifying service boundaries)</li>
                <li><strong>API generation</strong> (creating modern interfaces while preserving legacy functionality)</li>
                <li><strong>Test suite creation</strong> (comprehensive validation ensuring functional equivalence)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                Your Implementation Roadmap
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between items-start my-8 relative">
                <div className="relative z-10 flex-1 text-center mb-8 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    1
                  </div>
                  <h4 className="font-bold text-accent mb-2">Discovery & Assessment</h4>
                  <p className="text-sm text-textMuted">Weeks 1-4</p>
                </div>
                <div className="relative z-10 flex-1 text-center mb-8 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    2
                  </div>
                  <h4 className="font-bold text-accent mb-2">Pilot & Validation</h4>
                  <p className="text-sm text-textMuted">Weeks 5-12</p>
                </div>
                <div className="relative z-10 flex-1 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    3
                  </div>
                  <h4 className="font-bold text-accent mb-2">Scaled Transformation</h4>
                  <p className="text-sm text-textMuted">Months 3-18</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                Phase 1: Discovery and Assessment
              </h3>
              <p>
                Deploy GenAI to scan your entire codebase, generating comprehensive capability maps and identifying quick wins. One financial services firm discovered they could retire 30% of their applications immediately, as they were no longer used.
              </p>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                Phase 2: Pilot and Validation
              </h3>
              <p>
                Select a low-risk, high-value component for transformation. Validate that modernized code performs identically (or better) than legacy systems. Build confidence and refine your approach based on real results.
              </p>
              
              <h3 className="text-2xl font-bold text-accent mt-8 mb-3">
                Phase 3: Scaled Transformation
              </h3>
              <p>
                Transform components in priority sequence, maintaining parallel operations for validation. Generate APIs that enable gradual migration while preserving existing integrations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                Real-World Impact: The Proof in Production
              </h2>
              
              <div className="bg-darkLighter border border-primary/20 rounded-lg p-6 my-6">
                <h4 className="text-xl font-bold text-accent mb-3">Financial Services</h4>
                <p className="mb-2">
                  A global bank modernized core banking from COBOL to Java microservices in <strong>8 months</strong> (versus 24 months projected traditionally).
                </p>
                <p className="mb-0">
                  <strong>Results:</strong> 50% maintenance cost reduction, 3x performance improvement, enabled real-time payments.
                </p>
              </div>
              
              <div className="bg-darkLighter border border-primary/20 rounded-lg p-6 my-6">
                <h4 className="text-xl font-bold text-accent mb-3">Healthcare</h4>
                <p className="mb-2">
                  Regional hospital network transformed patient management while maintaining HIPAA compliance.
                </p>
                <p className="mb-0">
                  <strong>Results:</strong> 40% faster clinical queries, mobile access for physicians, 65% reduction in IT support tickets.
                </p>
              </div>
              
              <div className="bg-darkLighter border border-primary/20 rounded-lg p-6 my-6">
                <h4 className="text-xl font-bold text-accent mb-3">Manufacturing</h4>
                <p className="mb-2">
                  Industrial manufacturer refactored ERP for cloud deployment.
                </p>
                <p className="mb-0">
                  <strong>Results:</strong> 70% infrastructure cost savings, real-time inventory visibility across 50 locations, predictive maintenance capabilities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                Overcoming Your Specific Obstacles
              </h2>
              
              <p className="mb-4">
                <strong>"Our system is too complex"</strong><br />
                GenAI thrives on complexity. The more intricate your system, the more value GenAI provides in understanding and untangling it.
              </p>
              
              <p className="mb-4">
                <strong>"We can't afford downtime"</strong><br />
                Modern approaches enable parallel-run strategies. Your legacy system continues operating while the modernized version is validated alongside it.
              </p>
              
              <p className="mb-4">
                <strong>"We lack expertise"</strong><br />
                GenAI bridges the knowledge gap by extracting and documenting embedded business logic, reducing dependency on scarce COBOL or Fortran developers.
              </p>
              
              <p className="mb-4">
                <strong>"Previous attempts failed"</strong><br />
                Past failures often stemmed from incomplete understanding. GenAI provides deeper analysis and more accurate impact assessment than any traditional approach.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                The Cost of Waiting
              </h2>
              <div className="bg-primary/10 border-l-4 border-primary p-5 my-6 rounded-r">
                <p className="mb-3 font-bold">Every month you delay modernization:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Technical debt compounds at 15-20% annually</li>
                  <li>Security vulnerabilities multiply exponentially</li>
                  <li>Scarce legacy expertise becomes scarcer (and more expensive)</li>
                  <li>Competitors gain agility advantages that compound over time</li>
                  <li>Innovation opportunities pass to more nimble competitors</li>
                </ul>
              </div>
              
              <p>
                But here's what's different now: GenAI makes modernization faster, safer, and more predictable than ever before. The question isn't whether to modernize, but whether you'll lead the transformation or be disrupted by it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
                Your Path Forward Starts Today
              </h2>
              <p>
                Legacy modernization has transformed from a high-risk necessity to a strategic opportunity. Organizations using GenAI are modernizing in months what previously took years, at a fraction of the cost, with dramatically reduced risk.
              </p>
              
              <p className="my-4">
                <strong>We've guided hundreds of enterprises through successful legacy transformations.</strong>
              </p>
              
              <p className="mb-4">Let our experts show you exactly what's possible:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Comprehensive assessment of your legacy landscape</li>
                <li>Live demonstration of GenAI capabilities on your actual systems</li>
                <li>Risk-adjusted modernization roadmap tailored to your needs</li>
                <li>Clear ROI projections based on similar transformations</li>
                <li>Proof of concept on your highest-priority system</li>
              </ul>
              
              <p className="mt-8 italic text-textMuted">
                Your legacy systems powered your past. With GenAI, they'll accelerate your future.
              </p>
            </section>
          </div>
        </article>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <Link
            href="/insights"
            className="text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            ← Back to all insights
          </Link>
        </div>
      </div>
    </div>
  );
}

