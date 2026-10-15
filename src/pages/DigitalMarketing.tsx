import { useState } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { AnimatedMarqueeHero } from '../components/ui/hero-3';
import GalleryHoverCarousel from '../components/ui/gallery-hover-carousel';
import TimelineBlock01 from '../components/ui/timeline-01';
import LogoCloud2 from '../components/ui/logo-cloud-2';

const MARKETING_SHOWCASE_IMAGES = [
  "/digital-marketing/hero/hero-1.jpg",
  "/digital-marketing/hero/hero-2.jpg",
  "/digital-marketing/hero/hero-3.jpg",
  "/digital-marketing/hero/hero-4.jpg",
  "/digital-marketing/hero/hero-5.jpg",
  "/digital-marketing/hero/hero-6.jpg",
];

const CAROUSEL_FEATURE_ITEMS = [
  {
    id: "online-marketing",
    title: "Online Marketing",
    summary:
      "Targeted PPC advertising, multi-channel acquisition funnels, and programmatic campaign scaling tailored for commercial velocity.",
    url: "#",
    image: "/digital-marketing/online-marketing.jpg",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    summary:
      "Curated creator collaborations, regional GCC influencer activations, and branded endorsements driving authentic market resonance.",
    url: "#",
    image: "/digital-marketing/influencer-marketing.jpg",
  },
  {
    id: "branding",
    title: "Branding",
    summary:
      "Bespoke brand architecture, bilingual Arabic/Latin typography pairing, optical logos, and 60+ page corporate identity manuals.",
    url: "#",
    image: "/digital-marketing/branding.jpg",
  },
  {
    id: "social-media-posts",
    title: "Social Media Posts",
    summary:
      "Cinema-grade 4K vertical reels, high-retention motion carousels, algorithmic hooks, and synchronized editorial feed calendars.",
    url: "#",
    image: "/digital-marketing/social-media-posts.jpg",
  },
  {
    id: "company-profile",
    title: "Company Profile",
    summary:
      "Magazines, publications, newsletters, brochures, sell sheets, emailers, postcards, booklets, catalogues, and menus crafted in Figma & Adobe.",
    url: "#",
    image: "/digital-marketing/company-profile.jpg",
  },
];

const CREATIVE_TOOLS_LOGOS = [
  {
    name: "Adobe Photoshop",
    svg: (
      <div className="flex items-center gap-3 sm:gap-3.5">
        <img
          src="/logos/tools/photoshop.svg"
          alt="Adobe Photoshop"
          className="h-11 sm:h-13 w-auto object-contain"
        />
        <span className="text-[19px] sm:text-[23px] font-semibold text-ink tracking-tight font-apple">
          Photoshop
        </span>
      </div>
    ),
  },
  {
    name: "Canva",
    svg: (
      <div className="flex items-center gap-3 sm:gap-3.5">
        <img
          src="/logos/tools/canva-icon.svg"
          alt="Canva Icon"
          className="h-10 sm:h-12 w-auto object-contain"
        />
        <img
          src="/logos/tools/canva-wordmark.svg"
          alt="Canva"
          className="h-7 sm:h-9 w-auto object-contain text-ink"
        />
      </div>
    ),
  },
  {
    name: "Adobe",
    svg: (
      <div className="flex items-center gap-3 sm:gap-3.5">
        <img
          src="/logos/tools/adobe.svg"
          alt="Adobe"
          className="h-10 sm:h-12 w-auto object-contain"
        />
        <span className="text-[20px] sm:text-[24px] font-bold text-ink tracking-tight font-apple">
          Adobe
        </span>
      </div>
    ),
  },
  {
    name: "Figma",
    svg: (
      <div className="flex items-center">
        <img
          src="/logos/tools/figma.svg"
          alt="Figma"
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>
    ),
  },
];

export default function DigitalMarketing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white w-full max-w-full overflow-x-clip">
      <Navbar />

      <main className="w-full max-w-full overflow-x-clip">
        {/* Animated Marquee Hero Section */}
        <AnimatedMarqueeHero
          title={
            <>
              High-Impact Digital Marketing &amp;{' '}
              <br className="hidden sm:inline" />
              <span className="text-apple-blue font-serif-accent font-normal italic">
                Acquisition Systems.
              </span>
            </>
          }
          description="We combine engineering rigor with brand prestige: end-to-end social media management and bespoke brand identity systems structured for ambitious operations across Qatar, the UAE, and India."
          ctaText="Start Your Growth Campaign"
          onCtaClick={() => setIsModalOpen(true)}
          images={MARKETING_SHOWCASE_IMAGES}
        />

        {/* Digital Marketing & Creative Services Showcase */}
        <GalleryHoverCarousel
          heading={
            <>
              Digital Marketing &amp;{' '}
              <span className="text-apple-blue font-serif-accent font-normal italic">
                Creative Services
              </span>
            </>
          }
          subheading="At Qadmas, we understand the power of visual communication. Explore our full suite of digital marketing disciplines and dedicated graphic design studio solutions."
          items={CAROUSEL_FEATURE_ITEMS}
        />

        {/* 21st.dev logo-cloud-2: Creative Studio Design Tools Grid */}
        <LogoCloud2
          title={
            <>
              Design tools we{" "}
              <span className="text-apple-blue font-serif-accent font-normal italic">
                build with.
              </span>
            </>
          }
          logos={CREATIVE_TOOLS_LOGOS}
        />

        {/* How we execute campaigns timeline */}
        <div className="py-8 sm:py-14 border-t border-slate-200/80 w-full bg-gallery-white">
          <TimelineBlock01 />
        </div>

        {/* Enterprise CTA Section */}
        <section className="py-20 px-6 w-full bg-gallery-white overflow-hidden">
          <div className="max-w-[1240px] mx-auto">
            <div className="rounded-3xl bg-[#0b0f17] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="hidden sm:block absolute -right-20 -bottom-20 w-[420px] h-[420px] bg-apple-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-[30px] sm:text-[42px] font-semibold tracking-tight leading-tight">
                Ready to elevate your brand presence and social lead velocity?
              </h2>

              <p className="text-[16px] text-slate-300 leading-relaxed font-apple">
                Book a direct strategy consultation with our creative directors. We’ll audit your current social channels, review your brand positioning, and draft a custom growth sprint.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-slide-pill group cursor-pointer"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Schedule Strategy Sprint
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
                  Direct WhatsApp Inquiry
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-[13px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-apple-blue" />
                  <span>100% Vector &amp; Creative IP Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-apple-blue" />
                  <span>Dedicated Senior Creative Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Digital Marketing"
      />
    </div>
  );
}
