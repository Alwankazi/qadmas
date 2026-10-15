import { useState } from 'react';
import { ArrowUpRight, Users, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import ContactModal from '../components/ContactModal';
import ProductShowcaseCard from '../components/ui/product-showcase-card';

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('Wantik-X CRM');

  const openContact = (service: string) => {
    setDefaultService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[920px] mx-auto">
          Software engines built for <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            production velocity &amp; scale.
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[700px] mx-auto mb-10">
          Explore our production-ready CRM platforms, procurement portals, and transparent subscription packages engineered across Qatar, the UAE, and India.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-slide-pill group"
          >
            <span className="relative z-10 transition-all duration-500">
              View Pricing Packages
            </span>
            <span className="arrow-circle">
              <ArrowUpRight size={15} />
            </span>
          </a>

          <button
            onClick={() => openContact('Wantik-X CRM')}
            className="px-6 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-ink text-[14px] font-medium transition-colors cursor-pointer shadow-2xs"
          >
            Book Platform Demo
          </button>
        </div>
      </section>

      {/* Products Deep-Dive Section — Plain unboxed presentation on default bg-gallery-white with dark text */}
      <section className="w-full bg-gallery-white text-ink py-20 sm:py-28 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-6 space-y-20 sm:space-y-28">
          {/* Product 1: Wantik-X CRM */}
          <ProductShowcaseCard
            // badge="COLLABORATION"
            badgeIcon={Users}
            title="Work as one, scale operations faster"
            subtitle="One shared workspace where roles, live presence, and automated operations keep everyone aligned."
            features={[
              'Granular roles: viewer, editor, admin, and branch manager',
              'Automated WhatsApp lead qualification & instant routing',
              'Real-time inventory sync and barcode tracking',
              'AI voice triage with instant escalation',
              'GCC VAT-compliant invoicing and ledger audit',
            ]}
            statValue="4.2×"
            statLabel="Faster Review Cycles"
            ctaText="Explore Collaboration"
            ctaLink="https://wantikx.com/"
            ctaExternal={true}
            rightImageSrc="/services/crm-erp.jpg"
            rightImageAlt="Wantik-X CRM Operations"
            rightCaption="Collaboration Preview"
            rightCaptionIcon={Users}
            rightStatus="Live Operations"
          />

          <div className="border-t border-slate-200/80" />

          {/* Product 2: Sila Vendor System */}
          <ProductShowcaseCard
            // badge="PROCUREMENT & AUDIT"
            badgeIcon={Building2}
            title="Decisions grounded in real vendor data"
            subtitle="Turn commercial RFQs into audited, compliant procurement workflows in minutes, with zero manual data entry bottlenecks."
            features={[
              'Automated supplier quotation comparison & tender dispatch',
              'Custom multi-tier approval matrices for purchase orders',
              'Real-time delivery verification against warehouse receipts',
              'Automated 3-way matching: PO, delivery note, and invoice',
              'Granular vendor performance metrics & verified compliance',
            ]}
            statValue="3-Way"
            statLabel="Automated PO & Invoice Matching"
            ctaText="See Procurement in Action"
            ctaLink="/products/sila"
            ctaExternal={false}
            rightImageSrc="/products/sila-dashboard.png"
            rightImageAlt="Sila Procurement & Vendor Workspace"
            rightCaption="Vendor Workspace Preview"
            rightCaptionIcon={Building2}
            rightStatus="Verified Gateway"
            reversed={true}
          />
        </div>
      </section>

      {/* Pricing Section Moved Here */}
      <section id="pricing" className="scroll-mt-20">
        <Pricing />
      </section>

      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={defaultService}
      />
    </div>
  );
}
