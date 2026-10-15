import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onGetQuoteClick?: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden w-full bg-gallery-white">
      <div className="w-full relative">
        {/* Soft Ambient Radial Glow from 21st.dev hero-01 */}
        <div className="relative w-full pt-40 sm:pt-44 md:pt-48 pb-8 md:pb-12 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100/70 before:via-white before:to-sky-50/70 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-6 sm:gap-7 text-center items-center">
              
              {/* Display Headline with Serif Accent */}
              <div className="flex flex-col text-center items-center sm:gap-5 gap-3.5">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-display font-medium text-ink tracking-tight leading-[1.04] max-w-[980px]"
                >
                  Building the Digital World <br className="hidden sm:inline" />
                  <span className="text-apple-blue font-serif-accent font-normal italic">
                    for Today and Tomorrow
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="text-base sm:text-lg font-normal max-w-2xl text-slate leading-relaxed"
                >
                  We architect custom software and fast web platforms from scratch. No cookie-cutter templates, no bloated retainers — just working software backed by senior engineering teams across Qatar, the UAE, and India.
                </motion.p>
              </div>

              {/* Action Button & Avatar Proof Group from hero-01 */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center flex-col sm:flex-row justify-center gap-6 sm:gap-8 pt-1"
              >
                {/* Featured Proprietary Platforms: SILA | WANTIK-X */}
                <div className="flex items-center gap-6 sm:gap-8">
                  <Link
                    to="/products/sila"
                    className="inline-flex items-center group/sila transition-opacity hover:opacity-80"
                    title="Explore Sila Vendor System"
                  >
                    <img
                      src="/logos/sila-logo.webp"
                      alt="Sila"
                      className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover/sila:scale-105"
                    />
                  </Link>

                  <div className="h-8 sm:h-10 w-px bg-slate-300/80 select-none shrink-0" aria-hidden="true" />

                  <a
                    href="https://wantikx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group/wantik transition-opacity hover:opacity-80"
                    title="Explore Wantik-X Platform"
                  >
                    <img
                      src="/logos/wantik-x-logo.png"
                      alt="Wantik-X"
                      className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover/wantik:scale-105"
                    />
                  </a>
                </div>

                <button
                  onClick={onGetQuoteClick}
                  className="btn-slide-pill group"
                >
                  <span className="relative z-10 transition-all duration-500">
                    Start Your Project
                  </span>
                  <span className="arrow-circle">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
