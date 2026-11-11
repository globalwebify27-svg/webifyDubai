"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Pre-computed dot positions to avoid floating-point hydration mismatches
const OUTER_DOTS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  return {
    cx: parseFloat((140 + 130 * Math.cos(angle)).toFixed(4)),
    cy: parseFloat((140 + 130 * Math.sin(angle)).toFixed(4)),
  };
});

const INNER_DOTS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2;
  return {
    cx: parseFloat((140 + 100 * Math.cos(angle)).toFixed(4)),
    cy: parseFloat((140 + 100 * Math.sin(angle)).toFixed(4)),
  };
});

function CTAGlobe() {
  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="140" cy="140" r="130" fill="none" stroke="white" strokeWidth="0.8" />
      <circle cx="140" cy="140" r="100" fill="none" stroke="white" strokeWidth="0.6" />
      <circle cx="140" cy="140" r="70"  fill="none" stroke="white" strokeWidth="0.5" />
      <circle cx="140" cy="140" r="40"  fill="none" stroke="white" strokeWidth="0.5" />
      <ellipse cx="140" cy="140" rx="130" ry="50"  fill="none" stroke="white" strokeWidth="0.6" />
      <ellipse cx="140" cy="140" rx="130" ry="90"  fill="none" stroke="white" strokeWidth="0.5" />
      <ellipse cx="140" cy="140" rx="130" ry="118" fill="none" stroke="white" strokeWidth="0.5" />
      <ellipse cx="140" cy="140" rx="50"  ry="130" fill="none" stroke="white" strokeWidth="0.6" />
      <ellipse cx="140" cy="140" rx="90"  ry="130" fill="none" stroke="white" strokeWidth="0.5" />
      <ellipse cx="140" cy="140" rx="115" ry="130" fill="none" stroke="white" strokeWidth="0.5" />
      {/* Outer dots — pre-computed to prevent SSR/client float mismatch */}
      {OUTER_DOTS.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r="1.5" fill="white" opacity="0.6" />
      ))}
      {/* Inner dots */}
      {INNER_DOTS.map((dot, i) => (
        <circle key={`b${i}`} cx={dot.cx} cy={dot.cy} r="1.2" fill="white" opacity="0.4" />
      ))}
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="bg-[#080A09] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl bg-[#080A09] border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_auto] gap-8 items-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

            {/* LEFT — Globe visual */}
            <div className="hidden lg:flex items-center justify-center w-[260px] h-[260px] relative">
              <CTAGlobe />
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#00C853] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00C853]" />
              </div>
            </div>

            {/* CENTER — Headline + description */}
            <div className="text-center lg:text-left">
              <h2 className="text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[52px] font-black text-white leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] mb-4 sm:mb-5">
                Ready to Scale Your{" "}
                <span className="text-[#00C853]">Digital Revenue?</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/60 max-w-[460px] mx-auto lg:mx-0 leading-relaxed">
                Partner with Global Webify. Get a tailored architectural blueprint, timeline, and fixed-price quote within 24 hours.
              </p>
            </div>

            {/* RIGHT — CTA Button */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="#lead-form"
                className="w-full sm:w-auto justify-center group flex items-center gap-3 bg-white text-[#080A09] text-[14.5px] sm:text-[15px] font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-[#F7F7F5] transition-colors duration-200 whitespace-nowrap shadow-sm text-center"
              >
                Claim Your Free Proposal
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Dotted pattern background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <CTAGlobe />
            </div>
            <div className="absolute bottom-0 left-64 w-48 h-48 opacity-5">
              <CTAGlobe />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

