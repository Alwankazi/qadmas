import { useState } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-gallery-white">
        <div className="py-14 sm:py-16 max-w-[1200px] mx-auto px-6 relative">
        <div className="rounded-3xl border border-hairline-silver bg-studio-mist/80 p-8 md:p-16 relative overflow-hidden text-center max-w-[1020px] mx-auto shadow-2xl before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100/70 before:via-white before:to-sky-50/70 before:rounded-full before:top-10 before:blur-3xl before:-z-10">
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            {/* Headline with Serif Accent */}
            <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04] max-w-[800px]">
              Have a software project or operational bottleneck <br className="hidden sm:inline" />
              <span className="text-apple-blue font-serif-accent font-normal italic">ready to solve?</span>
            </h2>

            {/* Subtitle */}
            <p className="font-geist text-[15px] sm:text-[17px] text-slate max-w-[620px] leading-relaxed">
              Skip the sales pitch. Speak directly with our software architects across Qatar, the UAE, and India. We’ll review your requirements, outline clear technical options, and provide a fixed quote.
            </p>

            {/* Action Row with hero-01 style buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-slide-pill group"
              >
                <span className="relative z-10 transition-all duration-500">
                  Request a Technical Proposal
                </span>
                <span className="arrow-circle">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <a
                href="https://wa.me/919022568492"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide-ghost group"
              >
                <span className="relative z-10 transition-all duration-500 flex items-center gap-2">
                  <MessageSquare size={15} className="text-apple-blue" />
                  <span>Chat on WhatsApp</span>
                </span>
                <span className="arrow-circle">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
