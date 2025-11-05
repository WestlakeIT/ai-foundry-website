export default function SocialProof() {
  const stats = [
    { value: '2.3M', label: 'Lines of AI code in production', icon: '💻' },
    { value: '473', label: 'Models deployed', icon: '🤖' },
    { value: 'Petabyte', label: 'Scale experience', icon: '📡' },
    { value: '18 months', label: 'Fastest: Idea to IPO', icon: '🚀' }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="text-center text-[1.9rem] font-extrabold mb-12">The DNA</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-primary/20 bg-darkLighter p-6 text-center transition-all hover:-translate-y-1 hover:border-accent">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-3xl font-extrabold text-accent">{s.value}</div>
              <div className="text-text text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


