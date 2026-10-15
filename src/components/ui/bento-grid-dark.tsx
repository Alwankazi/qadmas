"use client";
import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface BentoCardProps {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
  onCardClick?: () => void;
}

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  href,
  isExternal = false,
  onCardClick,
}: BentoCardProps) {
  const sharedClassName = clsx(
    className,
    "group relative flex flex-col justify-end overflow-hidden rounded-2xl sm:rounded-3xl",
    "bg-black transform-gpu shadow-sm ring-1 ring-white/10 transition-all duration-300 hover:ring-white/25",
    "min-h-[440px] sm:min-h-[480px] w-full",
    (href || onCardClick) && "cursor-pointer"
  );

  const innerContent = (
    <>
      {/* Background Graphic */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {graphic}
      </div>

      {/* Clean text section with bottom gradient scrim */}
      <div className="relative px-6 sm:px-8 pb-7 sm:pb-9 pt-24 z-20 bg-gradient-to-t from-black via-black/85 to-transparent text-white w-full">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[12px] font-medium uppercase tracking-wider text-slate-400 font-apple">
            {eyebrow}
          </span>
          {(href || onCardClick) && (
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-apple-blue group-hover:text-white flex items-center justify-center text-white/70 transition-all duration-300 shrink-0">
              {isExternal ? <ArrowUpRight size={15} /> : <ArrowRight size={15} />}
            </div>
          )}
        </div>

        <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-white font-apple">
          {title}
        </h3>

        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-[540px] font-apple leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial="idle"
          whileHover="active"
          variants={{ idle: {}, active: {} }}
          className={sharedClassName}
        >
          {innerContent}
        </motion.a>
      );
    }
    return (
      <motion.div
        initial="idle"
        whileHover="active"
        variants={{ idle: {}, active: {} }}
        className={sharedClassName}
      >
        <Link to={href} className="absolute inset-0 z-30" aria-label={typeof title === 'string' ? title : 'View service'} />
        {innerContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      onClick={onCardClick}
      className={sharedClassName}
    >
      {innerContent}
    </motion.div>
  );
}

export default function FUIBentoGridDark({
  onSelectService,
}: {
  onSelectService?: (service: string) => void;
}) {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
        {/* 1. Wantik-X CRM */}
        <BentoCard
          eyebrow="Autonomous Operations"
          title="Wantik-X CRM"
          description="Automated billing, inventory & WhatsApp Al agents"
          href="https://wantikx.com/"
          isExternal={true}
          graphic={
            <img
              src="/services/crm-erp.jpg"
              alt="Wantik-X CRM"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          }
          className="lg:rounded-tl-4xl"
        />

        {/* 2. Digital Marketing */}
        <BentoCard
          eyebrow="Prestige Growth Systems"
          title="Digital Marketing"
          description="Targeted campaigns, SEO, paid ads & growth analytics"
          href="/services/digital-marketing"
          graphic={
            <img
              src="/services/digital-marketing.jpg"
              alt="Digital Marketing"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          }
          className="lg:rounded-tr-4xl"
        />

        {/* 3. Website Development */}
        <BentoCard
          eyebrow="High-Conversion Engineering"
          title="Website Development"
          description="React, Next.js & sub-second corporate web platforms"
          onCardClick={() => onSelectService?.("Website Development")}
          graphic={
            <img
              src="/services/website-dev.jpg"
              alt="Website Development"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          }
          className="lg:rounded-bl-4xl"
        />

        {/* 4. Mobile Application Development */}
        <BentoCard
          eyebrow="Native Cross-Platform"
          title="Mobile Application Development"
          description="Native-feel iOS & Android apps with offline sync"
          onCardClick={() => onSelectService?.("Mobile Application Development")}
          graphic={
            <img
              src="/services/mobile-app.jpg"
              alt="Mobile Application Development"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "center 26%" }}
              loading="lazy"
            />
          }
          className="lg:rounded-br-4xl"
        />
      </div>
    </div>
  );
}
