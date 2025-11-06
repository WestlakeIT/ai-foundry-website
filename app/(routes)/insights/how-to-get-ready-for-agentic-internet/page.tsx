import Link from 'next/link';

export default function HowToGetReadyForAgenticInternetPage() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white uppercase bg-[#7c3aed] rounded mb-4">
            RESEARCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
            How to get ready for the agentic internet
          </h1>
          <p className="text-xl text-textMuted">
            Develop capabilities needed to create robust agents
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <div className="space-y-6 text-text leading-relaxed">
            <p className="text-lg">
              The agentic internet represents a fundamental shift from passive information consumption to active, autonomous digital agents that can reason, act, and interact on behalf of users. Preparing for this transformation requires new capabilities and strategic thinking.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              What is the Agentic Internet?
            </h2>
            <p>
              The agentic internet is an ecosystem where AI agents autonomously perform complex tasks, make decisions, and interact with other agents and systems. Unlike traditional automation, these agents can adapt, learn, and operate across multiple domains.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Core Capabilities Required
            </h2>
            <p>
              To build and deploy robust agents, organizations need to develop capabilities in several key areas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Agent Architecture:</strong> Design systems that enable autonomous decision-making while maintaining oversight</li>
              <li><strong>Multi-Agent Coordination:</strong> Enable agents to collaborate, negotiate, and coordinate actions</li>
              <li><strong>Safety and Reliability:</strong> Implement safeguards that prevent harmful actions and ensure predictable behavior</li>
              <li><strong>Continuous Learning:</strong> Build agents that improve over time through experience and feedback</li>
            </ul>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Building Your Agent Strategy
            </h2>
            <p>
              Start by identifying use cases where autonomous agents can deliver significant value. Focus on domains where agents can handle complexity that exceeds human capacity, operate at scale, or provide 24/7 availability. Begin with constrained environments before expanding to more open-ended scenarios.
            </p>

            <h2 className="text-3xl font-bold text-accent mt-12 mb-4">
              Technology Stack
            </h2>
            <p>
              The agentic internet requires a new generation of tools and frameworks. Key technologies include advanced language models, reasoning engines, tool-use frameworks, and agent orchestration platforms. Organizations should invest in understanding these technologies and building internal expertise.
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

