import Card from '@/components/ui/Card';

export default function ProcessPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">The 90-Day Foundry Process</h1>
        <p className="mt-4 text-textMuted">Transparent. Predictable. Revolutionary.</p>

        <div className="mt-10 space-y-6">
          <TimelineBlock title="Weeks 1-2: Discovery Sprint" items={[
            'Technical feasibility assessment','Architecture design','Stack selection','Team assembly'
          ]} />
          <TimelineBlock title="Weeks 3-4: Foundation" items={[
            'Core infrastructure setup','Data pipeline creation','Initial model development','CI/CD establishment'
          ]} />
          <TimelineBlock title="Weeks 5-8: Building" items={[
            'AI model training','API development','Frontend creation','Integration work'
          ]} />
          <TimelineBlock title="Weeks 9-10: Refinement" items={[
            'User testing','Performance optimization','Security hardening','Documentation'
          ]} />
          <TimelineBlock title="Weeks 11-12: Launch" items={[
            'Production deployment','Monitoring setup','Team training','Handoff preparation'
          ]} />
        </div>

        <h3 className="mt-14 text-center text-2xl text-primary">Our Principles</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">1</div><h4 className="text-accent">Build in Production</h4><p>No toy prototypes</p></Card>
          <Card className="text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">2</div><h4 className="text-accent">Daily Commits</h4><p>See progress every day</p></Card>
          <Card className="text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">3</div><h4 className="text-accent">Weekly Demos</h4><p>Never wonder what&apos;s happening</p></Card>
          <Card className="text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">4</div><h4 className="text-accent">Your Code, Your IP</h4><p>You own everything</p></Card>
        </div>

        <div className="mt-14 overflow-x-auto">
          <h3 className="text-center text-2xl text-primary mb-4">Compare Our Process</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10 text-accent">
                <th className="p-4 text-left">Approach</th>
                <th className="p-4 text-left">Timeline</th>
                <th className="p-4 text-left">Cost</th>
                <th className="p-4 text-left">Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-primary/20"><td className="p-4 font-semibold">Traditional Consultancy</td><td className="p-4">6 months planning</td><td className="p-4">$500K+</td><td className="p-4">Strategy document</td></tr>
              <tr className="border-b border-primary/20"><td className="p-4 font-semibold">Offshore Dev</td><td className="p-4">4-6 months</td><td className="p-4">$100-200K</td><td className="p-4">Needs constant management</td></tr>
              <tr className="border-b border-primary/20"><td className="p-4 font-semibold">In-house Team</td><td className="p-4">6 months to hire</td><td className="p-4">$500K+ annually</td><td className="p-4">Then they start building</td></tr>
              <tr className="bg-accent/10"><td className="p-4 font-semibold">The Foundry</td><td className="p-4">✓ 90 days</td><td className="p-4">Flexible/Equity</td><td className="p-4">✓ Live product</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TimelineBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="relative">
      <div className="relative rounded-xl border border-primary/20 bg-primary/10 p-6">
        <div className="font-bold text-accent mb-2">{title}</div>
        <ul className="list-none space-y-1">
          {items.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

