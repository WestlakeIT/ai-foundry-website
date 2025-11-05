import Link from 'next/link';

const CHALLENGES = [
  { text: 'My competitor just raised $50M for AI. I need to move NOW.', icon: '⚡' },
  { text: "We have the data but can't turn it into AI advantage", icon: '📊' },
  { text: 'I need a technical co-founder who can actually deliver', icon: '🤝' },
  { text: 'Our legacy system is holding back our AI ambitions', icon: '🔒' }
];

export default function ChallengeSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="text-center text-[clamp(2.2rem,3.6vw,2.8rem)] font-extrabold mb-12">Is This You?</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CHALLENGES.map((c) => (
            <div key={c.text} className="group flex items-start gap-3 rounded-xl border border-primary/20 bg-darkLighter p-5 transition-colors hover:border-accent">
              <span className="text-2xl">{c.icon}</span>
              <p className="flex-1 text-text text-lg">
                {c.text}
                <span className="ml-2 hidden text-accent group-hover:inline">✓</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="text-text mb-4 text-lg">Then let&apos;s talk. Today.</div>
          <Link href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5">
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}


