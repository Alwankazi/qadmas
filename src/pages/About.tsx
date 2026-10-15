import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Delivered production systems', value: '100+' },
  { label: 'Regional hubs in Qatar, UAE & India', value: '3' },
  { label: 'Years in continuous production', value: '4+' },
];

const principles = [
  {
    title: 'Direct Senior',
    accent: 'Engineering Access',
    desc: 'You work with the actual engineers architecting your database and writing your frontend. No non-technical account managers playing telephone with your requirements.',
  },
  {
    title: 'Milestone-Based',
    accent: 'Fixed Pricing',
    desc: 'Every project begins with a clear technical roadmap and fixed scope. You review working staging builds before milestone signoffs — zero hidden retainer traps.',
  },
  {
    title: 'Total Code & Asset',
    accent: 'Ownership',
    desc: 'From the initial Git commit, all source code, Docker configs, and database schemas belong 100% to you. We never lock you into proprietary black boxes.',
  },
  {
    title: 'Real Ground Support',
    accent: 'in the GCC',
    desc: 'Whenever you need in-person planning, requirement sessions, or critical deployment support, our leadership is physically present in Qatar and the UAE.',
  },
];

export default function About() {
  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      <main>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-40 text-center sm:pb-24 sm:pt-48">
        <h1 className="mx-auto mb-7 max-w-[1000px] text-[42px] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-[60px] lg:text-[72px] text-balance">
          Built in the Gulf. <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            Engineered for real-world reliability.
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-[680px] text-[16px] leading-[1.8] text-slate sm:text-[17px]">
          We founded Qadmas Technologies after watching too many businesses across Qatar and the UAE get burned by agencies that overpromise, outsource to invisible subcontractors, and vanish after receiving their deposit.
        </p>

        <Link to="/contact" className="btn-slide-ghost group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-apple-blue">
          <span>Get in Touch</span>
          <span className="arrow-circle"><ArrowUpRight size={16} aria-hidden="true" /></span>
        </Link>
      </section>

      {/* Team Statement Section */}
      <section aria-labelledby="team-letter-title" className="mx-auto max-w-[1152px] px-6 py-16 sm:px-12 sm:py-24 lg:px-20">
        <article className="mx-auto max-w-[720px]">
            <h2 id="team-letter-title" className="mx-auto mb-10 max-w-[680px] text-center font-serif-accent text-[42px] leading-[1.12] tracking-[-0.02em] text-sky-900 sm:mb-14 sm:text-[60px] text-balance">
              &ldquo;Software shouldn’t be a <span className="text-apple-blue italic">black box</span>&rdquo;
            </h2>

            <div className="space-y-6 text-left text-[16px] leading-[1.85] text-sky-950 sm:text-justify sm:text-[17px]">
              <p className="font-medium">
                A note from our team:
              </p>
              <p>
                When a business owner commissions custom software, they aren&apos;t buying code — they are investing in the backbone of their operations. Whether it&apos;s managing a multi-warehouse inventory across three countries or booking luxury yacht charters in the UAE, downtime or bad architecture costs real money.
              </p>
              <p>
                At Qadmas, we established two strict rules from day one: First, no junior outsourcing games. Second, total transparency on delivery dates, system architecture, and code ownership.
              </p>
              <p>
                We treat every system we build as if our own business depended on it. That is why over 90% of our clients stay on long-term support agreements with us year after year.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <img src="/full-logo-dark.png?v=2" alt="" className="h-8 w-auto" loading="lazy" />
              <div>
              <div className="text-ink text-[16px] font-semibold">Qadmas Technologies Team</div>
              <div className="mt-1 text-[14px] text-sky-800">Software Engineering &amp; Delivery</div>
              </div>
            </div>
        </article>
      </section>

      <section aria-label="Qadmas in numbers" className="mx-auto max-w-[1056px] px-6 py-20 sm:py-24">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3 px-5 text-center sm:border-r sm:border-slate-200/80 sm:last:border-r-0">
              <dt className="order-2 text-[14px] leading-relaxed text-slate text-balance">{stat.label}</dt>
              <dd className="order-1 text-[44px] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums sm:text-[52px]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Engineering Principles */}
      <section aria-labelledby="principles-title" className="mx-auto max-w-[1056px] px-6 pb-20 sm:pb-28">
        <div className="mx-auto mb-12 max-w-[660px] text-center sm:mb-16">
          <h2 id="principles-title" className="mb-5 text-[40px] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[56px] text-balance">
            How we protect <span className="font-serif-accent font-normal italic text-apple-blue">your investment?</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-[16px] leading-relaxed text-slate">
            Clear decisions, visible progress, and ownership that stays with the people who commissioned the work.
          </p>
        </div>

        <div className="grid border-t border-slate-200/80 md:grid-cols-2 md:gap-x-16">
          {principles.map((p) => (
            <article
              key={p.title}
              className="grid gap-4 border-b border-slate-200/80 py-7 md:py-9"
            >
                <h3 className="text-[19px] font-medium leading-snug text-ink sm:text-[21px]">
                  {p.title}{' '}<span className="text-apple-blue">{p.accent}</span>
                </h3>
              <p className="text-[15px] leading-[1.8] text-slate sm:text-[16px]">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
