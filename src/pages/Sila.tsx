import { useState } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  Layers, 
  Lock, 
  Zap, 
  Sparkles, 
  Building2, 
  Check, 
  Activity,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Sila() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'auth' | 'dashboard'>('dashboard');

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1240px] mx-auto">
        {/* Subtle Ambient Light Gradients */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-tr from-emerald-200/40 via-sky-100/30 to-teal-100/30 blur-3xl rounded-full -z-10 pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-[13px] text-slate mb-5">
          <Link to="/products" className="hover:text-apple-blue transition-colors">Products</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-ink font-medium">Sila Vendor System</span>
        </div>

        {/* Official Sila Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logos/sila-logo.webp"
            alt="Sila Logo"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-xs"
          />
        </div>
        <div className="text-center max-w-[980px] mx-auto">
          <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6">
            Connecting enterprise procurement with{' '}
            <span className="text-emerald-700 font-serif-accent font-normal italic">
              verified commercial suppliers.
            </span>
          </h1>

          <p className="font-apple text-[17px] sm:text-[19px] text-slate leading-relaxed max-w-[760px] mx-auto mb-10">
            Sila (<span className="text-ink font-medium">صِلة</span>) is an enterprise procurement gateway engineered by Qadmas Technologies. Designed to eliminate bid friction, automate 3-way invoice matching, and maintain ironclad audit certainty across Qatar, the UAE, and India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-slide-pill group cursor-pointer"
            >
              <span className="relative z-10 transition-all duration-500">
                Request Sila Demo &amp; Pilot
              </span>
              <span className="arrow-circle">
                <ArrowUpRight size={15} />
              </span>
            </button>

            <a
              href="#screens-showcase"
              className="px-6 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-ink text-[14px] font-medium transition-colors cursor-pointer shadow-2xs inline-flex items-center gap-2"
            >
              <span>Explore Platform Screens</span>
              <ArrowRight size={14} className="text-slate-500" />
            </a>
          </div>
        </div>

        {/* Key Metrics Row - Rendered seamlessly without card block container */}
        <div className="mt-14 sm:mt-18 pt-10 sm:pt-12 border-t border-slate-200/70 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center px-3 sm:px-4 lg:border-r border-slate-200/70">
            <div className="text-[32px] sm:text-[38px] font-semibold text-ink tracking-tight leading-none">72%</div>
            <div className="text-[12px] sm:text-[13px] text-slate font-medium mt-2">Average Profile Completion Speed</div>
          </div>
          <div className="text-center px-3 sm:px-4 lg:border-r border-slate-200/70">
            <div className="text-[32px] sm:text-[38px] font-semibold text-emerald-700 tracking-tight leading-none">3-Way</div>
            <div className="text-[12px] sm:text-[13px] text-slate font-medium mt-2">Automated PO &amp; Invoice Matching</div>
          </div>
          <div className="text-center px-3 sm:px-4 lg:border-r border-slate-200/70">
            <div className="text-[32px] sm:text-[38px] font-semibold text-ink tracking-tight leading-none">0%</div>
            <div className="text-[12px] sm:text-[13px] text-slate font-medium mt-2">Ghost or Unverified Vendors</div>
          </div>
          <div className="text-center px-3 sm:px-4">
            <div className="text-[32px] sm:text-[38px] font-semibold text-ink tracking-tight leading-none">&lt; 15ms</div>
            <div className="text-[12px] sm:text-[13px] text-slate font-medium mt-2">Regional Edge Telemetry Latency</div>
          </div>
        </div>
      </section>

      {/* Screen Selector Tab Section */}
      <section id="screens-showcase" className="py-8 px-6 max-w-[1240px] mx-auto">
        <div className="flex items-center justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100/90 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-white text-ink shadow-xs'
                  : 'text-slate hover:text-ink'
              }`}
            >
              <Activity size={14} className={activeTab === 'dashboard' ? 'text-emerald-600' : 'text-slate-400'} />
              <span>Vendor Workspace Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('auth')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'auth'
                  ? 'bg-white text-ink shadow-xs'
                  : 'text-slate hover:text-ink'
              }`}
            >
              <Lock size={14} className={activeTab === 'auth' ? 'text-emerald-600' : 'text-slate-400'} />
              <span>Dual-Portal Authentication Gate</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SHOWCASE SECTION 1: VENDOR WORKSPACE & OPERATIONAL COCKPIT */}
      {/* ========================================================================= */}
      <section className={`py-12 px-6 max-w-[1240px] mx-auto transition-opacity duration-300 ${activeTab === 'dashboard' ? 'block' : 'hidden'}`}>
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-12">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase mb-3">
              <span>Showcase 01 · Vendor Operations</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink tracking-tight leading-tight">
              The Vendor Workspace &amp; Operational Cockpit
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate mt-2 leading-relaxed">
              Suppliers gain a single, transparent command center to monitor RFQs, dispatch high-value quotations, verify legal compliance, and benchmark their commercial activity against incoming market tenders.
            </p>
          </div>

          {/* Screenshot Showcase Container with Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0f17] shadow-2xl p-2 sm:p-4">
            {/* Window chrome header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-3 text-[12px] text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-medium text-slate-300 hidden sm:inline">sila.qadmas.com/vendor/workspace</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[11px] text-emerald-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Vendor Workspace
                </span>
                <span className="text-slate-500 text-[11px] hidden md:inline">Live Production View</span>
              </div>
            </div>

            {/* High-Resolution Screenshot */}
            <div className="rounded-xl overflow-hidden border border-slate-800/60 shadow-inner bg-[#0b0f17]">
              <img
                src="/products/sila-dashboard.png"
                alt="Sila Vendor Workspace Operational Dashboard"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Deep Architectural Breakdown of Screen 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* Card 1: Profile Completeness */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center font-semibold text-[14px]">
                72%
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Automated Trust &amp; Verification Meter
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                A visual compliance bar tracks company verification status. Complete profiles with uploaded commercial registrations and active tax IDs receive higher algorithmic priority in buyer search results.
              </p>
            </div>

            {/* Card 2: Real-Time RFQ Telemetry */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-apple-blue flex items-center justify-center">
                <Zap size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Live RFQ &amp; Order Telemetry
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Four instantaneous operational counters monitor Active RFQs awaiting quotes, submitted proposals, accepted client purchase orders, and total historical inquiry volume across all product lines.
              </p>
            </div>

            {/* Card 3: 8-Week Quote Trends */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                <TrendingUp size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                8-Week Supply vs. Demand Curves
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                An illustrative dual-gradient area chart visualizes incoming buyer quote requests versus supplier turnaround velocity, giving management live oversight over commercial response rates.
              </p>
            </div>

            {/* Card 4: Recent Requests & Inbound Feed */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Verified Enterprise Inquiries
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Direct procurement orders from verified enterprise clients display budget allocations (e.g. QAR 45,000 for IT Equipment) and real-time bid statuses with 1-click response.
              </p>
            </div>

            {/* Card 5: Fast-Action Command Launcher */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Layers size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Instant Catalogue &amp; License Uploads
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Dedicated quick actions allow vendors to add new SKUs to their digital catalogue, re-upload expiring regional trade licenses, and update corporate tax details without bureaucratic delay.
              </p>
            </div>

            {/* Card 6: Multi-Market Regional Compliance */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Qatar, UAE &amp; India Trade Alignment
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Native currency support (QAR, AED, INR), regional tax formats, and legal commercial registration matrices built directly into every transaction and quote workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SHOWCASE SECTION 2: DUAL-PORTAL AUTHENTICATION & ACCESS GATEWAY */}
      {/* ========================================================================= */}
      <section className={`py-12 px-6 max-w-[1240px] mx-auto transition-opacity duration-300 ${activeTab === 'auth' ? 'block' : 'hidden'}`}>
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-12">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase mb-3">
              <span>Showcase 02 · Identity &amp; Access</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink tracking-tight leading-tight">
              Dual-Portal Authentication &amp; Access Gateway
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate mt-2 leading-relaxed">
              A fortified, elegant entry gate that intelligently partitions enterprise client procurement officers from commercial vendor teams with cryptographic security and single-sign-on ease.
            </p>
          </div>

          {/* Screenshot Showcase Container with Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#05070a] shadow-2xl p-4 sm:p-8 flex items-center justify-center">
            {/* Ambient emerald backlight behind login */}
            <div className="absolute w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative max-w-[560px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
              {/* Top micro bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-[#0d1117] text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-medium text-slate-300">sila.qadmas.com/login</span>
                </div>
                <span className="text-emerald-400 font-medium">SSL 256-bit Encrypted</span>
              </div>

              {/* High-Resolution Screenshot */}
              <img
                src="/products/sila-auth.png"
                alt="Sila Dual-Portal Authentication & Access Gateway"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Deep Architectural Breakdown of Screen 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* Card 1: Dual Role Partitioning */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                <Lock size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Dual Role Segmentation (Vendor vs. Client)
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Enterprise buyers and independent suppliers are cleanly partitioned via an intuitive segmented pill switch. This guarantees zero role confusion and enforces isolated permission scopes.
              </p>
            </div>

            {/* Card 2: Company Registration Onboarding Gate */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-apple-blue flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Self-Service Corporate Onboarding
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Prospective suppliers tap into the &quot;Register your company&quot; workflow to submit legal trade certificates, corporate bank credentials, and business licenses before accessing tender documents.
              </p>
            </div>

            {/* Card 3: Modern Enterprise SSO */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Enterprise SSO (Apple ID &amp; Google)
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Supports standard corporate email credentials alongside native biometric Single Sign-On via Apple ID and Google Workspace for frictionless executive access on mobile and desktop.
              </p>
            </div>

            {/* Card 4: Session Security & Token Vaulting */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Cryptographic 30-Day Session Persistence
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Automatic sliding token refreshes prevent annoying session drops during high-stakes quotation reviews, while enforcing strict remote revoking if an unauthorized device is detected.
              </p>
            </div>

            {/* Card 5: Cultural & Brand Heritage */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-serif-accent font-semibold text-[17px]">
                صِلة
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Bespoke Arabic &amp; English Branding
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Features the distinctive Sila calligraphy emblem paired with luxury deep obsidian tones and emerald highlights, representing trust, connection, and commercial prestige.
              </p>
            </div>

            {/* Card 6: Engineered by Qadmas */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="text-[17px] font-semibold text-ink">
                Engineered by Qadmas Technologies
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                Custom-built from the database layer to the frontend components. Provides 100% code ownership, custom integrations, and direct SLA engineering support without third-party reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HOW SILA WORKS: END-TO-END PROCUREMENT LIFECYCLE */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-[1240px] mx-auto border-t border-slate-200/80">
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span>Enterprise Procurement Engine</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-ink tracking-tight leading-tight">
            How Sila accelerates corporate procurement.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate mt-2 leading-relaxed">
            Eliminate manual back-and-forth emails, lost invoice attachments, and rogue unverified purchases with our synchronized 4-stage pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'RFQ Broadcast',
              desc: 'Procurement officers publish tenders with item specifications, expected quantities, and budget parameters to verified suppliers in seconds.',
              icon: FileText,
            },
            {
              step: '02',
              title: 'Vendor Quotation',
              desc: 'Suppliers receive push notifications, review requirements directly in the Vendor Workspace, and submit itemized commercial quotes.',
              icon: Activity,
            },
            {
              step: '03',
              title: 'Automated 3-Way Match',
              desc: 'Upon warehouse delivery, Sila matches the purchase order, delivery note receipt, and commercial tax invoice with zero manual ledger entry.',
              icon: CheckCircle2,
            },
            {
              step: '04',
              title: 'Disbursement & Audit',
              desc: 'Approved payments are queued with full audit trails, ISO-ready compliance records, and direct regional tax ledger reconciliation.',
              icon: ShieldCheck,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[20px] font-bold text-slate-300 font-apple">{item.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ENTERPRISE CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-[1240px] mx-auto">
        <div className="rounded-3xl bg-[#0b0f17] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient emerald backlight */}
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">


            <h2 className="text-[30px] sm:text-[42px] font-semibold tracking-tight leading-tight">
              Ready to modernize your vendor operations with Sila?
            </h2>

            <p className="text-[16px] text-slate-300 leading-relaxed">
              Schedule a live walkthrough with our senior engineering team. We’ll demonstrate the live dual-portal system, review your integration requirements, and prepare a custom deployment blueprint.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-slide-pill group cursor-pointer"
              >
                <span className="relative z-10 transition-all duration-500">
                  Request Sila Walkthrough
                </span>
                <span className="arrow-circle">
                  <ArrowUpRight size={15} />
                </span>
              </button>

              <a
                href="https://wa.me/919022568492"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white text-[14px] font-medium transition-colors"
              >
                Direct WhatsApp Inquiries
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] text-slate-400">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-400" />
                <span>Qatar · UAE · India Regional Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-400" />
                <span>100% Code &amp; Schema Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-400" />
                <span>Custom Platform Integrations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Sila Vendor System"
      />
    </div>
  );
}
