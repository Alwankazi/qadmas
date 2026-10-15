import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-semibold text-ink tracking-tight leading-[1.05] mb-6 max-w-[900px] mx-auto">
          Direct engineering access. <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            No sales gatekeepers.
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[660px] mx-auto">
          Speak directly with our systems architects across Qatar, the UAE, and India. We will evaluate your technical requirements, outline delivery stages, and provide a fixed quote.
        </p>
      </section>

      {/* 3 Regional Office Cards */}
      <section className="pb-16 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-apple-blue/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="font-apple text-[20px] font-semibold text-ink">
                Qatar Hub
              </div>
              <MapPin size={16} className="text-apple-blue" />
            </div>
            <p className="text-[13px] text-slate mb-4 font-apple">
              Executive consulting, enterprise proposals &amp; GCC commercial agreements.
            </p>
            <a
              href="tel:+919022568492"
              className="inline-flex items-center gap-2 text-[14px] font-apple text-ink hover:text-apple-blue transition-colors font-medium"
            >
              <Phone size={14} />
              <span>+91 90225 68492</span>
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-apple-blue/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="font-apple text-[20px] font-semibold text-ink">
                The UAE Hub
              </div>
              <MapPin size={16} className="text-apple-blue" />
            </div>
            <p className="text-[13px] text-slate mb-4 font-apple">
              On-ground client alignment, logistics automation &amp; fleet systems.
            </p>
            <a
              href="https://wa.me/919022568492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-apple text-apple-blue hover:text-sky-700 transition-colors font-medium"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-apple-blue/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="font-apple text-[20px] font-semibold text-ink">
                India Hub
              </div>
              <MapPin size={16} className="text-apple-blue" />
            </div>
            <p className="text-[13px] text-slate mb-4 font-apple">
              Full-stack sprint execution, database telemetry &amp; 24/7 technical monitoring.
            </p>
            <a
              href="tel:+919022568492"
              className="inline-flex items-center gap-2 text-[14px] font-apple text-ink hover:text-apple-blue transition-colors font-medium"
            >
              <Phone size={14} />
              <span>+91 90225 68492</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Guarantee Grid */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Side */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <h2 className="font-apple text-[26px] sm:text-[32px] font-semibold text-ink tracking-tight">
                Submit an Engineering Scope
              </h2>
              <p className="font-apple text-[14px] text-slate mt-1">
                Tell us about your systems, desired outcomes, or launch targets. We reply within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-apple-blue/20 text-apple-blue mx-auto flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-apple text-[22px] font-semibold text-ink">
                  Requirements Received
                </h3>
                <p className="font-apple text-[15px] text-slate max-w-md mx-auto leading-relaxed">
                  Thank you. One of our lead solutions architects will review your technical specs and reach out via email or phone within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1.5">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="tariq@company.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 90225 68492"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-apple text-[13px] text-ink font-medium mb-1.5">
                      System Category
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 font-apple text-[14px] text-ink focus:border-apple-blue focus:bg-white focus:outline-none transition-colors"
                    >
                      <option>Wantik-X CRM</option>
                      <option>Digital Marketing</option>
                      <option>Website Development</option>
                      <option>Mobile Application Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-apple text-[13px] text-ink font-medium mb-1.5">
                    Project Overview &amp; Key Requirements
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe what your business needs: e.g. integrating 3 warehouses, automating customer bookings, replacing an existing slow platform, target launch timeframe..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 font-apple text-[14px] text-ink placeholder-slate/50 focus:border-apple-blue focus:bg-white focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-slide-pill w-full justify-center group"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Submit Technical Requirements
                  </span>
                  <span className="arrow-circle">
                    <Send size={15} />
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Guarantee & Direct Info Sidebar */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200/80 p-8 bg-white space-y-6 shadow-xl">
            <div className="font-apple text-[16px] font-semibold text-ink flex items-center gap-2 border-b border-slate-200/80 pb-3.5">
              <ShieldCheck size={16} className="text-apple-blue" />
              <span>The Qadmas SLA Promise</span>
            </div>

            <div className="space-y-4 font-apple text-[14px] text-slate">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-apple-blue" />
                </div>
                <div>
                  <div className="text-ink font-medium">Bilateral NDA Protection</div>
                  <div className="text-[12px] text-slate mt-0.5">We sign mutual non-disclosure agreements before discussing private workflows.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-apple-blue" />
                </div>
                <div>
                  <div className="text-ink font-medium">Fixed-Price Proposals</div>
                  <div className="text-[12px] text-slate mt-0.5">Clear scope boundaries with zero surprise hourly overages.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-apple-blue" />
                </div>
                <div>
                  <div className="text-ink font-medium">100% Code Ownership</div>
                  <div className="text-[12px] text-slate mt-0.5">All Git repositories and cloud configurations are delivered directly to your accounts.</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 space-y-2 font-apple text-[13px]">
              <div className="text-slate text-[12px]">Direct email inquiries</div>
              <a
                href="mailto:info@qadmastechnologies.com"
                className="text-ink hover:text-apple-blue transition-colors flex items-center gap-2 font-medium"
              >
                <Mail size={14} className="text-apple-blue" />
                <span>info@qadmastechnologies.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
