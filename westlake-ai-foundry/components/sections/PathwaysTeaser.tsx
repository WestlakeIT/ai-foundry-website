import Link from 'next/link';

type PathCard = {
  icon: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  color: 'purple' | 'blue' | 'green';
};

const PATHS: PathCard[] = [
  {
    icon: '🚀',
    title: 'FOUNDERS',
    headline: 'Got an AI Idea?',
    description: 'From napkin sketch to funded startup. Technical co-founder as a service.',
    features: ['Technical co-founder expertise', '0 to MVP in 90 days', 'Fundraising-ready architecture'],
    cta: 'See Founder Journey',
    href: '/for-founders',
    color: 'purple'
  },
  {
    icon: '🏢',
    title: 'ENTERPRISES',
    headline: 'Legacy System Holding You Back?',
    description: 'Transform 20-year systems into AI powerhouses. Zero downtime. 10x performance.',
    features: ['Zero downtime migration', '10x processing speed', 'Fortune 500 trusted'],
    cta: 'See Enterprise Solutions',
    href: '/for-enterprise',
    color: 'blue'
  },
  {
    icon: '💡',
    title: 'INNOVATORS',
    headline: 'Building the Impossible?',
    description: 'Moonshot projects. Patent partnerships. Where crazy ideas become reality.',
    features: ['Moonshot projects welcome', 'Patent partnership program', 'Research to production'],
    cta: 'Explore Innovation Lab',
    href: '/for-innovators',
    color: 'green'
  }
];

const colorMap: Record<PathCard['color'], string> = {
  purple: 'from-primary to-primaryDark',
  blue: 'from-sky-400 to-blue-600',
  green: 'from-emerald-400 to-emerald-600'
};

export default function PathwaysTeaser() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.6rem,4.6vw,3.6rem)] font-extrabold tracking-tight leading-tight">Choose Your Journey</h2>
          <p className="mt-4 text-text text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed">Three paths to AI transformation. One destination: Success.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PATHS.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-primary/20 bg-darkLighter p-10 transition-all hover:-translate-y-1 hover:border-accent/60">
              <div className="text-5xl mb-3">{p.icon}</div>
              <div className="text-[0.9rem] tracking-[0.18em] text-textMuted">{p.title}</div>
              <div className="text-[1.85rem] font-semibold mt-3 leading-snug">{p.headline}</div>
              <p className="text-text mt-4 text-[1.125rem] leading-relaxed">{p.description}</p>
              <ul className="mt-6 space-y-2.5 text-[1.125rem] text-text">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-accent">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={p.href} className={`mt-8 inline-block rounded-full bg-gradient-to-br ${colorMap[p.color]} px-8 py-4 text-[1.125rem] font-semibold text-white shadow-[0_10px_30px_rgba(6,255,165,0.15)] group-hover:shadow-[0_15px_40px_rgba(6,255,165,0.25)]`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


