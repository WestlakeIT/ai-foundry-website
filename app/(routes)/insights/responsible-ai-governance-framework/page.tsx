/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function ResponsibleAIGovernanceFrameworkPage() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white uppercase bg-[#10b981] rounded mb-4">
            NEW
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
            Responsible AI governance framework
          </h1>
          <p className="text-xl text-textMuted">
            Best practices for ethical AI implementation
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <div className="space-y-6 text-text leading-relaxed">
            <p className="text-lg">
              As AI systems become more powerful and pervasive, establishing robust governance frameworks is essential. Responsible AI governance ensures that AI systems are developed and deployed in ways that are ethical, fair, transparent, and aligned with organizational values.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              The Pillars of Responsible AI Governance
            </h2>
            <p>
              A comprehensive governance framework rests on four foundational pillars:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ethics and Fairness:</strong> Ensure AI systems treat all users fairly and avoid perpetuating bias</li>
              <li><strong>Transparency and Explainability:</strong> Make AI decision-making processes understandable to stakeholders</li>
              <li><strong>Privacy and Security:</strong> Protect user data and ensure AI systems are secure against misuse</li>
              <li><strong>Accountability:</strong> Establish clear lines of responsibility for AI decisions and outcomes</li>
            </ul>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Implementation Framework
            </h2>
            <p>
              Effective governance starts with establishing clear policies and procedures. Organizations should create AI ethics committees, develop guidelines for AI development and deployment, implement regular audits, and establish feedback mechanisms for continuous improvement.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Risk Management
            </h2>
            <p>
              Identify and mitigate risks at every stage of the AI lifecycle. This includes assessing potential harms during development, monitoring for bias and drift in production, and having clear escalation paths when issues are detected. Regular risk assessments should be part of standard operating procedures.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Building Organizational Capability
            </h2>
            <p>
              Governance isn't just about policies—it requires building organizational capability. Train teams on ethical AI principles, establish clear workflows for ethical review, and create incentives that reward responsible AI practices. Make responsible AI part of your organizational culture.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Continuous Improvement
            </h2>
            <p>
              AI governance is not a one-time effort. As AI capabilities evolve and new challenges emerge, governance frameworks must adapt. Regular reviews, stakeholder feedback, and staying current with industry best practices ensure your governance remains effective over time.
            </p>
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

