import Card from '@/components/ui/Card';
import FAQ from '@/components/sections/FAQ';

export default function ForFoundersPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">From Napkin Sketch to Funded Startup in 90 Days</h1>
        <p className="mt-4 text-textMuted">We become your technical co-founder, building your AI vision while you focus on the business.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-accent text-xl">YOU BRING</h3>
            <ul className="list-none space-y-2">
              <li>Domain expertise</li>
              <li>Vision & strategy</li>
              <li>Customer relationships</li>
              <li>Business model</li>
            </ul>
          </Card>
          <Card>
            <h3 className="mb-4 text-accent text-xl">WE BRING</h3>
            <ul className="list-none space-y-2">
              <li>Technical architecture</li>
              <li>AI/ML expertise</li>
              <li>Full-stack development</li>
              <li>Scalable infrastructure</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 grid gap-8">
          <Card>
            <h3 className="mb-4 text-2xl text-accent">What You Get</h3>
            <ul className="list-none space-y-2">
              <li>📱 <strong>Production-Ready MVP</strong> - Not a prototype, a real product</li>
              <li>💼 <strong>Investor-Ready Tech Stack</strong> - Due diligence ready from day one</li>
              <li>📚 <strong>Technical Documentation</strong> - Complete handoff package</li>
              <li>🚀 <strong>Fundraising Support</strong> - Tech demos and architecture presentations</li>
              <li>🤝 <strong>Optional Ongoing CTO</strong> - We can stay on as technical partners</li>
            </ul>
          </Card>
        </div>

        <div className="mt-16">
          <FAQ />
        </div>

        <div className="mt-12 text-center">
          <a href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-transform hover:-translate-y-0.5">Apply for Founder Partnership</a>
        </div>
      </div>
    </section>
  );
}

