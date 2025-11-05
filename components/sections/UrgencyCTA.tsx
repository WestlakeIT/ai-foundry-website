import Link from 'next/link';

export default function UrgencyCTA() {
  return (
    <section className="relative py-28">
      <div className="animated-bg" />
      <div className="relative mx-auto max-w-[1000px] px-6 text-center">
        <h3 className="text-[clamp(2.2rem,3.6vw,3rem)] font-extrabold mb-4 animate-pulseFade">
          Every Day You Wait, Competitors Build
        </h3>
        <p className="text-text mb-9 text-lg">Join the AI revolution or be left behind.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/start-building" className="rounded-full bg-gradient-to-br from-primary to-primaryDark px-9 py-5 text-xl font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)]">
            Start in 24 Hours
          </Link>
          <Link href="/start-building#assessment" className="rounded-full border-2 border-primary px-9 py-5 text-xl font-semibold text-text hover:bg-primary/10">
            See If We're a Fit
          </Link>
        </div>
      </div>
    </section>
  );
}


