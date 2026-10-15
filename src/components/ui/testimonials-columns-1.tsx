"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  text: React.ReactNode;
  image: string;
  name: string;
  role: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const defaultTestimonials: TestimonialItem[] = [
  {
    text: (
      <>
        Its robust features and quick support have <span className="font-semibold text-ink">transformed our workflow</span>, making us <span className="font-semibold text-ink">significantly more efficient</span>.
      </>
    ),
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    name: "Zainab Hussain",
    role: "Project Manager · Retail Systems",
  },
  {
    text: (
      <>
        They delivered a solution that <span className="font-semibold text-ink">exceeded expectations</span>, understanding our needs and <span className="font-semibold text-ink">enhancing our operations</span>.
      </>
    ),
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Sana Sheikh",
    role: "Sales Manager · Trade Operations",
  },
  {
    text: (
      <>
        The support team is <span className="font-semibold text-ink">exceptional</span>, guiding us through setup and providing ongoing assistance, <span className="font-semibold text-ink">ensuring our satisfaction</span>.
      </>
    ),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Omar Raza",
    role: "CEO · Supply Chain Group",
  },
  {
    text: (
      <>
        The smooth implementation <span className="font-semibold text-ink">exceeded expectations</span>. It streamlined processes, <span className="font-semibold text-ink">increasing overall efficiency</span> across three regional hubs.
      </>
    ),
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Mariam Al-Mansoor",
    role: "VP Operations · Gulf Trade",
  },
  {
    text: (
      <>
        Finding an engineering team that meets deadlines consistently is rare. Qadmas overhauled our cloud portal with <span className="font-semibold text-ink">zero downtime</span>.
      </>
    ),
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    name: "Mhd. Arshad",
    role: "Managing Director · Tech Services",
  },
  {
    text: (
      <>
        Off-the-shelf software was costing us thousands in monthly per-seat fees. The custom booking platform they engineered <span className="font-semibold text-ink">paid for itself in weeks</span>.
      </>
    ),
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Karim Larkamiz",
    role: "Operations Lead · Verkiezen",
  },
];

export const TestimonialsColumn = ({
  className = "",
  testimonials,
  duration = 18,
}: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((item, i) => (
              <div
                key={`${index}-${i}`}
                className="p-7 sm:p-8 rounded-3xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 max-w-sm sm:max-w-none w-full"
              >
                <div className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-apple font-normal">
                  {item.text}
                </div>
                <div className="flex items-center gap-3 mt-6 pt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover border border-slate-200/90 shadow-2xs shrink-0"
                  />
                  <div>
                    <div className="font-apple font-semibold text-[15px] text-ink leading-snug">
                      {item.name}
                    </div>
                    <div className="font-apple text-[13px] text-slate leading-snug">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export interface TestimonialsColumnsProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  testimonials?: TestimonialItem[];
  className?: string;
}

export default function TestimonialsColumns({
  badge,
  title = "What our users say",
  subtitle = "See what our customers have to say about us.",
  testimonials = defaultTestimonials,
  className = "",
}: TestimonialsColumnsProps) {
  const columnSize = Math.ceil(testimonials.length / 3);
  const firstColumn = testimonials.slice(0, columnSize);
  const secondColumn = testimonials.slice(columnSize, columnSize * 2);
  const thirdColumn = testimonials.slice(columnSize * 2);

  return (
    <section className={`py-14 sm:py-16 relative overflow-hidden w-full bg-gallery-white ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          {badge && (
            <div className="flex justify-center mb-4">
              <span className="inline-block px-4 py-1 text-[12px] font-semibold tracking-wide rounded-full border border-slate-200/90 bg-white text-ink shadow-2xs font-apple">
                {badge}
              </span>
            </div>
          )}

          {typeof title === "string" ? (
            <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
              {title}
            </h2>
          ) : (
            title
          )}

          {subtitle && (
            <p className="text-[16px] sm:text-[17px] font-apple text-slate mt-4 max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3 Column Animated Marquee */}
        <div className="relative mt-10 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialsColumn testimonials={firstColumn} duration={24} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={30}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={26}
            />
          </div>

          {/* Fallback smooth top/bottom edge fade masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
