import { ArrowRight, Globe, Code2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const posts = [
    {
      id: 'website-development',
      category: 'YACHT FLEET AUTOMATION',
      title: 'Verkiezen Yachts UAE — Real-Time Fleet & Booking Engine',
      snippet: 'Automated luxury yacht reservations in the UAE, eliminating double-bookings and boosting direct online bookings by 60%.',
      metric: '+60% Online Bookings',
      tech: 'Next.js 15 · Node.js · Stripe',
      icon: Smartphone,
      client: 'The UAE',
    },
    {
      id: 'software-development',
      category: 'CUSTOM CRM ENGINE',
      title: 'Wantik-X Enterprise CRM & WhatsApp Lead Dispatch',
      snippet: 'Custom customer relationship management with sub-30-second automated WhatsApp lead qualification and executive pipeline tracking.',
      metric: '< 30s Lead Routing',
      tech: 'React · Python · Redis',
      icon: Code2,
      client: 'Qatar & the UAE',
    },
    {
      id: 'website-development',
      category: 'CORPORATE PLATFORM',
      title: 'Miozoti Technologies — High-Converting Infrastructure Portal',
      snippet: 'Complete technical overhaul and cloud migration delivering 0.38s load speeds and modern brand positioning for IT procurement.',
      metric: '0.38s Core Web Vitals',
      tech: 'Next.js · Tailwind · Cloudflare',
      icon: Globe,
      client: 'The UAE',
    },
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            Real software running <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">real businesses</span>
          </h2>
        </div>

        <Link
          to="/portfolio"
          className="btn-slide-ghost group self-start md:self-auto"
        >
          <span className="relative z-10 transition-all duration-500">
            View All Case Studies
          </span>
          <span className="arrow-circle">
            <ArrowRight size={14} />
          </span>
        </Link>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => {
          const Icon = post.icon;
          return (
            <Link
              key={idx}
              to={`/portfolio/${post.id}`}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 flex flex-col justify-between hover:border-apple-blue/50 hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-apple text-[17px] font-semibold text-ink leading-snug group-hover:text-apple-blue transition-colors">
                    {post.title}
                  </h3>
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate group-hover:text-apple-blue group-hover:scale-105 transition-all shrink-0 mt-0.5">
                    <Icon size={14} />
                  </div>
                </div>

                <p className="font-apple text-[13px] text-slate leading-relaxed mb-6">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-slate text-[12px] group-hover:text-apple-blue transition-colors font-medium font-apple">
                <span>{post.client}</span>
                <div className="flex items-center gap-1">
                  <span>View Case</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
