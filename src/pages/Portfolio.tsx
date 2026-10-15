import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    id: "website-development",
    title: "Web Platforms & High-Speed Portals",
    desc: "Custom React and Next.js platforms built for sub-second load times and high direct booking conversion.",
    clientCount: "40+ Deployments",
    metrics: "+60% Online Booking Growth · 0.38s Core Web Vitals",
    techStack: ["Next.js 15", "React", "Tailwind", "Cloudflare"],
    icon: Globe,
    featuredClient: "Verkiezen Yachts UAE & Miozoti Tech",
  },
  {
    id: "software-development",
    title: "Custom Backend Software & APIs",
    desc: "High-concurrency microservices, customer dispatch APIs, and mission-critical business automation.",
    clientCount: "25+ Production Systems",
    metrics: "< 30s Lead Routing · 99.99% Server Uptime",
    techStack: ["Node.js", "Python", "PostgreSQL", "Docker"],
    icon: Code2,
    featuredClient: "Wantik-X Enterprise CRM Engine",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[900px] mx-auto">
          Production case studies &amp; <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            measurable business outcomes
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[660px] mx-auto">
          Explore custom software and fast web platforms we have built and currently support for operating companies across Qatar, the UAE, and India.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <Link
                key={i}
                to={`/portfolio/${cat.id}`}
                className="rounded-3xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between hover:border-apple-blue/50 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-apple-blue group-hover:scale-105 transition-all">
                      <Icon size={22} />
                    </div>
                    <span className="font-apple text-[13px] text-slate font-medium px-3 py-1 rounded-full bg-slate-100">
                      {cat.clientCount}
                    </span>
                  </div>

                  <h2 className="font-apple text-[22px] font-semibold text-ink mb-3 group-hover:text-apple-blue transition-colors">
                    {cat.title}
                  </h2>

                  <p className="font-apple text-[14px] text-slate leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80 space-y-2 text-[13px] font-apple">
                    <div className="text-slate">
                      <span className="text-ink font-medium">Recent Work:</span> {cat.featuredClient}
                    </div>
                    <div className="text-slate/80 text-[12px]">
                      {cat.techStack.join(' · ')}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-200/80 flex items-center justify-between text-slate text-[13px] font-medium group-hover:text-apple-blue transition-colors font-apple">
                  <span>Inspect Technical Case Study</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
