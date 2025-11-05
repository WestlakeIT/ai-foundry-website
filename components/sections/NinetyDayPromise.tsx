export default function NinetyDayPromise() {
  const timeline = [
    { week: 'Week 1-2', title: 'Discovery & Architecture', icon: '🎯', description: 'Technical feasibility & system design' },
    { week: 'Week 3-4', title: 'Foundation', icon: '🏗️', description: 'Core infrastructure & initial development' },
    { week: 'Week 5-8', title: 'Building', icon: '⚡', description: 'AI training & full-stack development' },
    { week: 'Week 9-12', title: 'Launch', icon: '🚀', description: 'Testing, optimization & deployment' }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold tracking-tight">The 90-Day Guarantee</h2>
          <p className="mt-4 text-text">
            <span className="text-accent font-semibold pulse">If we can't get your AI to production in 90 days, we work for free until we do.</span>
          </p>
        </div>

        <div className="relative my-8">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary to-accent max-md:left-4" />
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div key={item.week} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} max-md:flex-col max-md:pl-8`}>
                <div className="relative w-full md:w-[45%] rounded-xl border border-primary/20 bg-primary/10 p-6 transition-transform hover:scale-[1.02]">
                  <div className="text-accent font-semibold mb-1 flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span> {item.week}
                  </div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <p className="text-textMuted">{item.description}</p>
                </div>
                <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_#06ffa5] max-md:left-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


