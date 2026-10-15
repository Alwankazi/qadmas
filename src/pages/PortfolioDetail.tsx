import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Terminal, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const portfolioDetails: Record<string, {
  title: string;
  categoryDesc: string;
  projects: Array<{
    id: number;
    title: string;
    desc: string;
    outcome: string;
    image: string;
    details: {
      client: string;
      category: string;
      region: string;
      stack: string;
    };
  }>;
  highlights: string[];
}> = {
  "website-development": {
    title: "Web Platforms & High-Speed Portals",
    categoryDesc: "Production web applications engineered with Next.js 15, sub-second Core Web Vitals, and conversion-optimized booking funnels.",
    projects: [
      {
        id: 1,
        title: "Verkiezen Yachts UAE — Real-Time Fleet & Booking Platform",
        desc: "The UAE's luxury yacht rental market moves fast during peak winter seasons. We replaced manual phone bookings and spreadsheet schedules with an automated booking engine featuring real-time fleet calendar holds, skipper assignment, and multi-currency Stripe checkout.",
        outcome: "+60% increase in direct online bookings and zero double-bookings in the first 90 days of operation.",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2670&auto=format&fit=crop", 
        details: {
          client: "VERKIEZEN YACHTS",
          category: "Booking Engine & Fleet System",
          region: "The UAE",
          stack: "Next.js 15 · Node.js · Stripe · PostgreSQL",
        }
      },
      {
        id: 2,
        title: "Miozoti Technologies — High-Performance Corporate Infrastructure Portal",
        desc: "Engineered a modernized web platform and IT procurement catalog for UAE-based Miozoti Technology. Cut initial page load times down to 0.38 seconds and increased client inbound RFQ inquiries.",
        outcome: "Sub-0.4s load speed, 100% Core Web Vitals score, and +40% surge in monthly qualified enterprise leads.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
        details: {
          client: "MIOZOTI TECHNOLOGIES",
          category: "Corporate Web Platform",
          region: "The UAE",
          stack: "React · TypeScript · Tailwind · Cloudflare Edge",
        }
      },
      {
        id: 3,
        title: "Redchilly Global Trading Portal & Catalog",
        desc: "Created a responsive international trade portal with real-time product catalogs, multi-currency inquiry routing, and automated PDF spec-sheet generation for buyers across the GCC and Asia.",
        outcome: "Streamlined wholesale buyer inquiries with instant automated quotation routing.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "REDCHILLY TRADING",
          category: "Global Trade Portal",
          region: "Qatar & India",
          stack: "Next.js · Node.js · Redis",
        }
      }
    ],
    highlights: [
      "Custom responsive Next.js 15 & React architecture",
      "Sub-0.5s Core Web Vitals optimization on mobile viewports",
      "Integrated regional payment gateways (Stripe, Tabby, Apple Pay)",
      "Automated WhatsApp status notifications for end customers"
    ]
  },
  "software-development": {
    title: "Custom Backend Software & APIs",
    categoryDesc: "High-concurrency microservices, automated customer relationship engines, and secure database architectures.",
    projects: [
      {
        id: 4,
        title: "Wantik-X Enterprise CRM & Automated Lead Dispatch Engine",
        desc: "A custom software platform built by Qadmas Technologies to automate high-volume sales pipelines. It listens to incoming web forms, Instagram DMs, and WhatsApp inquiries, qualifies leads through an automated bot within 30 seconds, and dispatches them directly to on-duty sales agents.",
        outcome: "Average lead response time dropped from 4 hours to under 30 seconds with 100% pipeline visibility.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "WANTIK-X ENTERPRISE",
          category: "Custom CRM & Lead Automation",
          region: "Qatar & UAE",
          stack: "React · Python · Redis · WhatsApp API",
        }
      },
      {
        id: 5,
        title: "High-Throughput Microservice API & Billing Engine",
        desc: "Designed and deployed a fault-tolerant microservices cluster with automated billing dispatches, client tracking APIs, and encrypted daily cloud backup pipelines.",
        outcome: "Zero downtime during quarterly billing spikes with sub-millisecond API response times.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
        details: {
          client: "QADMAS CORE PLATFORM",
          category: "Microservices Architecture",
          region: "Global Deployment",
          stack: "Node.js · Docker · AWS · PostgreSQL",
        }
      }
    ],
    highlights: [
      "Sub-30-second automated WhatsApp lead qualification",
      "Zero-trust API security with encrypted data storage",
      "Custom role-based dashboard for managers and field reps",
      "Full source code ownership with zero monthly seat licensing"
    ]
  }
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const data = portfolioDetails[id || ""] || portfolioDetails["website-development"];

  return (
    <div className="bg-gallery-white min-h-screen text-ink font-apple selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-slate hover:text-apple-blue transition-colors mb-6 font-apple text-[13px] px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/60"
        >
          <ArrowRight size={14} className="rotate-180" />
          <span>Back to All Case Studies</span>
        </Link>

        <h1 className="text-display font-semibold text-ink tracking-tight leading-[1.05] mb-4 max-w-[900px] mx-auto">
          {data.title}
        </h1>

        <p className="font-apple text-[16px] text-slate max-w-[640px] mx-auto leading-relaxed">
          {data.categoryDesc}
        </p>
      </section>

      {/* Projects List */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="space-y-20">
          {data.projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <h2 className="font-apple text-[26px] sm:text-[32px] font-semibold text-ink tracking-tight">
                  {project.title}
                </h2>

                <p className="font-apple text-[15px] sm:text-[16px] text-slate leading-relaxed">
                  {project.desc}
                </p>

                <p className="font-apple text-[14px] text-ink font-medium">
                  <span className="text-apple-blue font-semibold">Business Outcome:</span> {project.outcome}
                </p>

                <div className="rounded-3xl border border-slate-200/80 bg-white p-3 shadow-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto rounded-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>

              {/* Right Side: Details Card */}
              <div className="lg:col-span-4 rounded-3xl border border-slate-200/80 p-8 bg-white space-y-6 shadow-xl">
                <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3.5">
                  <Terminal size={15} className="text-apple-blue" />
                  <span className="font-apple text-[15px] font-semibold text-ink">
                    Technical Specifications
                  </span>
                </div>

                <div className="space-y-4 font-apple text-[13px]">
                  <div>
                    <div className="text-slate text-[12px]">Client</div>
                    <div className="text-ink font-medium mt-0.5">{project.details.client}</div>
                  </div>
                  <div>
                    <div className="text-slate text-[12px]">Project type</div>
                    <div className="text-ink font-medium mt-0.5">{project.details.category}</div>
                  </div>
                  <div>
                    <div className="text-slate text-[12px]">Region</div>
                    <div className="text-ink font-medium mt-0.5">{project.details.region}</div>
                  </div>
                  <div>
                    <div className="text-slate text-[12px]">Technology stack</div>
                    <div className="text-apple-blue font-medium mt-0.5">{project.details.stack}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link
                    to="/contact"
                    className="btn-slide-pill w-full justify-center group"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Discuss Similar System
                    </span>
                    <span className="arrow-circle">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <h3 className="font-apple text-heading text-ink mb-8">Architectural Benchmarks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-apple text-[14px]">
          {data.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3 border border-slate-200/80 bg-white p-4 rounded-2xl text-ink shadow-sm">
              <div className="w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0">
                <Check size={12} className="text-apple-blue" />
              </div>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
