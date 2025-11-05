import Card from '@/components/ui/Card';

export default function ForEnterprisePage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">Transform Legacy Systems into AI Powerhouses</h1>
        <p className="mt-4 text-textMuted">Zero downtime migration. 10x performance. Fortune 500 trusted.</p>

        <div className="mt-10 max-w-[800px]">
          <h3 className="mb-4 text-primary">Enterprise Challenges We Solve</h3>
          <div className="space-y-3">
            <div className="rounded-lg bg-primary/10 p-4">⚡ &ldquo;Our data is trapped in 20-year-old systems&rdquo;</div>
            <div className="rounded-lg bg-primary/10 p-4">⚡ &ldquo;We need AI but can&apos;t risk our operations&rdquo;</div>
            <div className="rounded-lg bg-primary/10 p-4">⚡ &ldquo;Consultants gave us strategies, not solutions&rdquo;</div>
            <div className="rounded-lg bg-primary/10 p-4">⚡ &ldquo;Our competition is moving faster&rdquo;</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">1</div>
            <h4 className="text-accent">Parallel Development</h4>
            <p>Build new while old runs</p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">2</div>
            <h4 className="text-accent">Incremental Migration</h4>
            <p>Phase by phase, no big bang</p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">3</div>
            <h4 className="text-accent">AI Layer Integration</h4>
            <p>Add intelligence without rebuilding</p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">4</div>
            <h4 className="text-accent">Performance Optimization</h4>
            <p>10x improvements typical</p>
          </Card>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl text-accent">🔒 Security & Compliance</h3>
            <ul className="mt-3 list-none space-y-2">
              <li>✓ SOC2 Type II certified</li>
              <li>✓ HIPAA compliant development</li>
              <li>✓ On-premise deployment options</li>
              <li>✓ Your data never leaves your control</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl text-accent">📦 Enterprise Package Includes</h3>
            <ul className="mt-3 list-none space-y-2">
              <li>✓ Dedicated team of 5-8 AI engineers</li>
              <li>✓ Weekly executive updates</li>
              <li>✓ 24/7 support during transition</li>
              <li>✓ Training for your team</li>
              <li>✓ 1-year optimization support</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5">Schedule Enterprise Consultation</a>
        </div>
      </div>
    </section>
  );
}

