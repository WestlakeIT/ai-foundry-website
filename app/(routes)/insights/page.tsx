import Link from 'next/link';

export default function InsightsPage() {
  const insights = [
    {
      slug: 'path-to-confident-gen-ai-adoption',
      title: 'The path to confident Gen AI adoption',
      description: 'Bridge the gap between AI leadership and business readiness',
      tag: 'HOT',
      tagColor: 'bg-[#d97706]',
    },
    {
      slug: 'how-to-get-ready-for-agentic-internet',
      title: 'How to get ready for the agentic internet',
      description: 'Develop capabilities needed to create robust agents',
      tag: 'RESEARCH',
      tagColor: 'bg-[#7c3aed]',
    },
    {
      slug: 'responsible-ai-governance-framework',
      title: 'Responsible AI governance framework',
      description: 'Best practices for ethical AI implementation',
      tag: 'NEW',
      tagColor: 'bg-[#10b981]',
    },
    {
      slug: 'extending-lifespan-legacy-systems-genai',
      title: 'Extending the Lifespan of Legacy Systems: How GenAI Transforms Modernization',
      description: 'Discover how Generative AI is revolutionizing legacy system modernization, reducing costs by 50% and timeline by 60%',
      tag: null,
      tagColor: null,
    },
  ];

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#ff6b9d] rounded flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="2" height="2" fill="white" rx="1"/>
              <rect x="10" y="4" width="2" height="2" fill="white" rx="1"/>
              <path d="M5 9H7M9 9H11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
            AI & EMERGING TECH Insights
          </h1>
        </div>
        <p className="text-textMuted text-lg mb-12">
          Explore our latest insights on AI adoption, emerging technologies, and industry best practices.
        </p>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="block p-6 rounded-lg border border-primary/20 bg-darkLighter hover:border-accent/60 hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-start gap-3">
                {insight.tag && (
                  <span className={`px-3 py-1 text-xs font-semibold text-white uppercase ${insight.tagColor} rounded`}>
                    {insight.tag}
                  </span>
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                    {insight.title}
                  </h2>
                  <p className="text-textMuted">
                    {insight.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

