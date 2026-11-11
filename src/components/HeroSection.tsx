"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import GlobeVisual from "./GlobeVisual";
import { TextLoop } from "@/components/core/text-loop";
import { openQuoteModal } from "./QuoteModal";

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.3 14.9C4.6 14.9 3.2 13.4 3.2 11.6C3.2 9.8 4.6 8.3 6.3 8.3C7.9 8.3 9.3 9.4 10.3 10.7L11.5 12.3L12.7 10.7C13.7 9.4 15.1 8.3 16.7 8.3C18.4 8.3 19.8 9.8 19.8 11.6C19.8 13.4 18.4 14.9 16.7 14.9C15.1 14.9 13.7 13.8 12.7 12.5L11.5 10.9L10.3 12.5C9.3 13.8 7.9 14.9 6.3 14.9Z"
        stroke="#0081FB"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IsoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#080A09" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="7" ry="14" stroke="#080A09" strokeWidth="1.2" />
      <line x1="2" y1="16" x2="30" y2="16" stroke="#080A09" strokeWidth="1.2" />
      <line x1="4.5" y1="10" x2="27.5" y2="10" stroke="#080A09" strokeWidth="1" strokeDasharray="1 1" />
      <line x1="4.5" y1="22" x2="27.5" y2="22" stroke="#080A09" strokeWidth="1" strokeDasharray="1 1" />
      <rect x="7" y="11.5" width="18" height="9" rx="2" fill="white" stroke="#080A09" strokeWidth="1.2" />
      <text x="16" y="18.5" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="900" fill="#080A09" textAnchor="middle" letterSpacing="0.5">ISO</text>
    </svg>
  );
}

function AiPoweredIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 6C12.5 6 10.5 7.5 10 9.5C8 9.8 6.5 11.5 6.5 13.5C6.5 14.2 6.7 14.8 7 15.4C5.8 16.2 5 17.5 5 19C5 21 6.4 22.7 8.3 23C8.8 24.7 10.5 26 12.5 26C13.5 26 14.4 25.6 15 25V6Z"
        fill="#FF6B6B"
        opacity="0.9"
      />
      <circle cx="11" cy="15.5" r="3.5" fill="#FFEAA7" />
      <circle cx="10" cy="15" r="0.6" fill="#080A09" />
      <circle cx="12" cy="15" r="0.6" fill="#080A09" />
      <path d="M10.2 16.5C10.6 17 11.4 17 11.8 16.5" stroke="#080A09" strokeWidth="0.6" strokeLinecap="round" />
      <text x="11" y="21" fontFamily="Arial" fontSize="4" fontWeight="bold" fill="#080A09" textAnchor="middle">AI</text>
      <path d="M15 9H20M20 9L23 7M20 9L23 11" stroke="#080A09" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="7" r="1.5" fill="#FFEAA7" stroke="#080A09" strokeWidth="1" />
      <circle cx="24" cy="11" r="1.5" fill="#00C853" stroke="#080A09" strokeWidth="1" />
      <path d="M15 15H21M21 15L25 15" stroke="#080A09" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="26" cy="15" r="1.5" fill="#FF7675" stroke="#080A09" strokeWidth="1" />
      <path d="M15 21H19M19 21L23 19M19 21L23 23" stroke="#080A09" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="19" r="1.5" fill="#74B9FF" stroke="#080A09" strokeWidth="1" />
      <circle cx="24" cy="23" r="1.5" fill="#FFEAA7" stroke="#080A09" strokeWidth="1" />
    </svg>
  );
}

const headlineTransition = {
  type: "spring" as const,
  stiffness: 900,
  damping: 80,
  mass: 10,
};

const headlineVariants = {
  initial: {
    y: 20,
    rotateX: 90,
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    y: -20,
    rotateX: -90,
    opacity: 0,
    filter: "blur(4px)",
  },
};

export default function HeroSection() {
  return (
    <div className="relative flex-1 min-h-0 flex items-start justify-center pt-[78px] sm:pt-[84px] lg:pt-[90px] pb-4 lg:pb-0 w-full overflow-hidden">
      {/* 3D Organic Green Tubular Fluid Ribbon Background — Minimalist aesthetic (no text, no icons, pure background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-ribbon-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-[20%_center] sm:object-center opacity-85 transition-opacity duration-700"
          loading="eager"
        />
        {/* Smooth vignette fade to blend seamlessly into surrounding #F7F7F5 page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#F7F7F5] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F5]/40 via-transparent to-[#F7F7F5]/40 pointer-events-none" />
      </div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-5 sm:px-6 lg:px-12 2xl:px-16 w-full h-full flex flex-col justify-start pt-1.5 sm:pt-2 lg:pt-1 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] xl:grid-cols-[1.18fr_1fr] gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col justify-center max-w-[760px] xl:max-w-[820px] 2xl:max-w-[880px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow with TextLoop Animation — Fully responsive on mobile, zero cut-off, zero screen shake */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 mb-3.5 sm:mb-5 lg:mb-6 max-w-full overflow-hidden"
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00C853] shrink-0 shadow-[0_0_10px_rgba(0,200,83,0.7)] animate-pulse" />
              <span className="text-[14px] xs:text-[15px] sm:text-[20px] lg:text-[22px] font-bold text-[#080A09] tracking-tight whitespace-nowrap shrink-0">
                Built for your
              </span>
              <span className="inline-flex items-center h-[24px] sm:h-[30px] lg:h-[34px] overflow-hidden shrink min-w-0">
                <TextLoop
                  className="text-[14px] xs:text-[15px] sm:text-[20px] lg:text-[22px] font-extrabold text-[#0D9488] leading-none tracking-tight overflow-hidden"
                  interval={2.8}
                  mode="wait"
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  variants={{
                    initial: {
                      y: 16,
                      opacity: 0,
                    },
                    animate: {
                      y: 0,
                      opacity: 1,
                    },
                    exit: {
                      y: -16,
                      opacity: 0,
                    },
                  }}
                >
                  <span className="inline-block leading-none py-0.5 whitespace-nowrap">next big move</span>
                  <span className="inline-block leading-none py-0.5 whitespace-nowrap">business future</span>
                  <span className="inline-block leading-none py-0.5 whitespace-nowrap">digital growth</span>
                  <span className="inline-block leading-none py-0.5 whitespace-nowrap">scalable impact</span>
                </TextLoop>
              </span>
            </motion.div>

            {/* Main Headline — Generous breathing room, comfortable line-height and word spacing */}
            <h1 className="text-[23px] xs:text-[25px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px] font-black leading-[1.28] sm:leading-[1.26] tracking-[-0.015em] text-[#080A09] mb-4 sm:mb-5 max-w-full overflow-x-clip [perspective:1000px]">
              <span className="text-[#080A09] mr-2 sm:mr-3 inline-block">
                We Develop High&#8209;Quality, Premium
              </span>
              <span className="inline-block text-[#00C853] align-baseline mt-0.5 sm:mt-1.5">
                <TextLoop
                  className="overflow-y-clip py-1 align-baseline max-w-full"
                  interval={2.8}
                  transition={headlineTransition}
                  variants={headlineVariants}
                >
                  <span className="inline-block">Software</span>
                  <span className="inline-block">Applications</span>
                  <span className="inline-block">CRM Systems</span>
                  <span className="inline-block">Websites</span>
                  <span className="inline-block">Digital Platforms</span>
                </TextLoop>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] xl:text-[17.5px] text-[#525752] font-medium leading-relaxed max-w-[560px] xl:max-w-[620px] mb-3.5 sm:mb-4"
            >
              That inspire, innovate, and drive your business forward.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center mb-3.5 sm:mb-4"
            >
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="flex items-center justify-center gap-2.5 bg-[#00C853] text-white text-[14.5px] sm:text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#00B34A] shadow-[0_6px_22px_rgba(0,200,83,0.32)] hover:shadow-[0_10px_28px_rgba(0,200,83,0.45)] transition-all duration-200 group cursor-pointer active:scale-98"
              >
                <span>Get Free Proposal</span>
                <ArrowRight
                  size={17}
                  strokeWidth={2.4}
                  className="text-white transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* Stats Row — Docked cleanly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-between sm:justify-start gap-0 pt-2.5 sm:pt-3 pb-2.5 sm:pb-3 border-t border-[#E5E7E5]"
            >
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "150+", label: "Happy Clients" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, i) => (
                <div key={i} className={`px-2.5 sm:px-5 first:pl-0 ${i > 0 ? "border-l border-[#E5E7E5]" : ""}`}>
                  <div className="text-[20px] sm:text-[24px] lg:text-[26px] xl:text-[28px] font-black text-[#080A09] leading-none tracking-[-0.03em]">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-[11px] lg:text-[11.5px] text-[#626762] mt-0.5 sm:mt-1 font-medium whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Verified Partner Badges & Toll Free Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full max-w-[660px] xl:max-w-[680px] pt-1.5 sm:pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-2.5">
                {/* 2x2 Partner Badges Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 flex-1">
                  {/* Google Ad Partner */}
                  <div className="bg-white p-2 sm:py-2 sm:px-2.5 rounded-xl border border-[#E5E7E5] flex items-center gap-2 shadow-xs hover:border-[#00C853] transition-all duration-200">
                    <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                      <GoogleIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] sm:text-[11.5px] font-bold text-[#080A09] leading-tight whitespace-nowrap">Google Ad Partner</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-[#626762] leading-tight">4.7 Rating</p>
                    </div>
                  </div>

                  {/* Meta Ad Partner */}
                  <div className="bg-white p-2 sm:py-2 sm:px-2.5 rounded-xl border border-[#E5E7E5] flex items-center gap-2 shadow-xs hover:border-[#00C853] transition-all duration-200">
                    <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                      <MetaIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] sm:text-[11.5px] font-bold text-[#080A09] leading-tight whitespace-nowrap">Meta Ad Partner</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-[#626762] leading-tight">4.5 Rating</p>
                    </div>
                  </div>

                  {/* ISO Certified */}
                  <div className="bg-white p-2 sm:py-2 sm:px-2.5 rounded-xl border border-[#E5E7E5] flex items-center gap-2 shadow-xs hover:border-[#00C853] transition-all duration-200">
                    <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                      <IsoIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] sm:text-[11.5px] font-bold text-[#080A09] leading-tight whitespace-nowrap">ISO Certified</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-[#626762] leading-tight">ISO 9001:2015</p>
                    </div>
                  </div>

                  {/* AI Powered */}
                  <div className="bg-white p-2 sm:py-2 sm:px-2.5 rounded-xl border border-[#E5E7E5] flex items-center gap-2 shadow-xs hover:border-[#00C853] transition-all duration-200">
                    <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                      <AiPoweredIcon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] sm:text-[11.5px] font-bold text-[#080A09] leading-tight whitespace-nowrap">AI Powered</p>
                      <p className="text-[9px] sm:text-[10px] font-medium text-[#626762] leading-tight">Intelligent Solutions</p>
                    </div>
                  </div>
                </div>

                {/* UAE Direct Phone Card */}
                <div className="shrink-0 sm:w-[210px] lg:w-[225px] flex">
                  <div className="bg-white p-3 sm:py-3 sm:px-3.5 rounded-xl border-2 border-[#00C853] flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-200 w-full h-full">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#E8F8EE] flex items-center justify-center text-[#00C853]">
                      <PhoneCall size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9.5px] sm:text-[10px] font-bold text-[#626762] tracking-wider uppercase leading-none mb-1 whitespace-nowrap">
                        DIRECT / UAE
                      </p>
                      <a
                        href="tel:+971582973805"
                        className="text-[13.5px] sm:text-[15px] font-black text-[#080A09] hover:text-[#00C853] transition-colors tracking-tight block whitespace-nowrap leading-tight"
                      >
                        +971 58 297 3805
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL — Showcase */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <GlobeVisual />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
