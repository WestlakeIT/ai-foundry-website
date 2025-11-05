export default function Differentiator() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold tracking-tight mb-16">We Don&apos;t Consult. We Build.</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-darkLighter p-9">
            <div className="mb-4 text-3xl">❌</div>
            <div className="text-[1.65rem] font-semibold mb-4">Traditional Consultancy</div>
            <ul className="space-y-3 text-text text-[1.05rem]">
              <li>6-month discovery phase</li>
              <li>200-page strategy document</li>
              <li>&ldquo;Further research needed&rdquo;</li>
              <li>You implement alone</li>
              <li>$500K spent, nothing built</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-primary/10 p-9 shadow-[0_0_40px_rgba(6,255,165,0.15)]">
            <div className="mb-4 text-3xl">✅</div>
            <div className="text-[1.65rem] font-semibold mb-4 text-accent">The Foundry Way</div>
            <ul className="space-y-3 text-[1.05rem]">
              <li>Week 1: Building starts</li>
              <li>Week 4: Working prototype</li>
              <li>Week 12: Market launch</li>
              <li>We stay until it scales</li>
              <li>Equity aligned success</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


