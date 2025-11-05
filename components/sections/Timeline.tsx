import { FOUNDER_TIMELINE } from '@/lib/constants';

export default function Timeline() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[1200px] px-6">
        <h3 className="text-center text-primary mb-12 text-2xl">Our Founder Journey</h3>
        <div className="relative my-6 py-4">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary to-accent max-md:left-4" />

          <div className="space-y-6">
            {FOUNDER_TIMELINE.map((item, idx) => (
              <div
                key={item.time}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} max-md:flex-col max-md:pl-8`}
              >
                <div className="relative w-full md:w-[45%] rounded-xl border border-primary/20 bg-primary/10 p-6 transition-transform hover:scale-[1.03] hover:border-accent">
                  <div className="font-bold text-accent mb-2">{item.time}</div>
                  <p className="text-text">{item.text}</p>
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

