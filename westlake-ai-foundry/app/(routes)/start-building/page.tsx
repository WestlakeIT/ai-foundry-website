import ContactForm from '@/components/forms/ContactForm';

export default function StartBuildingPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">Three Ways to Engage</h1>
        <p className="mt-4 text-textMuted">Choose the partnership model that fits your needs.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-6 text-center">
            <h3 className="text-2xl text-accent">Strategy Call</h3>
            <div className="text-2xl text-primary my-2">Free</div>
            <ul className="list-none text-textMuted space-y-1 mt-3">
              <li>30-minute assessment</li>
              <li>Feasibility discussion</li>
              <li>Rough timeline estimate</li>
              <li>No commitment</li>
            </ul>
            <a href="#contact-form" className="mt-4 inline-block rounded-full border-2 border-primary px-5 py-2 font-semibold">Book Call</a>
          </div>
          <div className="rounded-2xl border border-accent bg-gradient-to-br from-primary/10 to-accent/5 p-6 text-center scale-[1.02]">
            <h3 className="text-2xl text-accent">Discovery Sprint</h3>
            <div className="text-2xl text-primary my-2">$10K</div>
            <ul className="list-none text-textMuted space-y-1 mt-3">
              <li>2-week deep dive</li>
              <li>Technical architecture</li>
              <li>Detailed roadmap</li>
              <li>Go/no-go decision</li>
            </ul>
            <a href="#contact-form" className="mt-4 inline-block rounded-full bg-gradient-to-br from-primary to-primaryDark px-5 py-2 font-semibold text-white">Start Sprint</a>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-6 text-center">
            <h3 className="text-2xl text-accent">Full Partnership</h3>
            <div className="text-2xl text-primary my-2">Custom</div>
            <ul className="list-none text-textMuted space-y-1 mt-3">
              <li>90-day build</li>
              <li>Complete team</li>
              <li>Equity or fee-based</li>
              <li>Ongoing support option</li>
            </ul>
            <a href="#contact-form" className="mt-4 inline-block rounded-full border-2 border-primary px-5 py-2 font-semibold">Apply Now</a>
          </div>
        </div>

        <div className="mt-10">
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl text-accent animate-pulseFade">Every Day You Wait, Competitors Build</h2>
          <p className="mt-2 text-textMuted">Join the AI revolution or be left behind.</p>
        </div>
      </div>
    </section>
  );
}

