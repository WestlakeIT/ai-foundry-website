import Card from '@/components/ui/Card';

export default function ForInnovatorsPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">Build the Impossible</h1>
        <p className="mt-4 text-textMuted">Moonshot projects. Research to production. Patent partnerships.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <Card className="text-center"><div className="text-3xl">🧠</div><h3 className="text-accent text-xl">Computer Vision</h3><p>Beyond standard recognition</p></Card>
          <Card className="text-center"><div className="text-3xl">💬</div><h3 className="text-accent text-xl">NLP/LLM</h3><p>Custom language models</p></Card>
          <Card className="text-center"><div className="text-3xl">🔮</div><h3 className="text-accent text-xl">Predictive AI</h3><p>Future-state modeling</p></Card>
          <Card className="text-center"><div className="text-3xl">🤖</div><h3 className="text-accent text-xl">Autonomous Systems</h3><p>Self-improving algorithms</p></Card>
          <Card className="text-center"><div className="text-3xl">🔄</div><h3 className="text-accent text-xl">Cross-Industry AI</h3><p>Apply AI where it's never been</p></Card>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Card><h3 className="text-xl text-accent">Joint Ventures</h3><p>We co-own the IP</p></Card>
          <Card><h3 className="text-xl text-accent">Patent Partnership</h3><p>Split patent rights</p></Card>
          <Card><h3 className="text-xl text-accent">Research Grants</h3><p>We help secure funding</p></Card>
          <Card><h3 className="text-xl text-accent">Spin-off Potential</h3><p>Build new companies together</p></Card>
        </div>

        <Card className="mt-12">
          <h3 className="text-accent mb-2">Moonshot Criteria</h3>
          <ul className="list-none space-y-2">
            <li>✓ Never been done before</li>
            <li>✓ Massive market potential</li>
            <li>✓ Technically feasible (barely)</li>
            <li>✓ You have domain expertise</li>
          </ul>
        </Card>

        <div className="mt-12 text-center">
          <a href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white">Propose Your Moonshot</a>
        </div>
      </div>
    </section>
  );
}

