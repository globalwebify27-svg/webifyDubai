"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { openQuoteModal } from "./QuoteModal";

const featuredHighlights = [
  {
    num: "01",
    category: "EDUCATION",
    title: "Firayalal Public School",
    subtitle: "Education Platform & SEO",
    image: "/thumb-firayalal.jpg",
    alt: "Firayalal Public School modern campus platform",
  },
  {
    num: "02",
    category: "FOOD & HOSPITALITY",
    title: "ACS Ranchi",
    subtitle: "Web Platform & Food Services",
    image: "/thumb-acs.jpg",
    alt: "ACS Ranchi dining & hospitality digital system",
  },
];

const websitePortfolio = [
  {
    id: "firayalal",
    category: "education",
    categoryLabel: "EDUCATION WEBSITE",
    title: "Firayalal Public School",
    subtitle: "Education Platform & SEO",
    image: "/portfolio-firayalal.jpg",
    alt: "Firayalal Public School - Education Website by Global Webify",
  },
  {
    id: "acs",
    category: "restaurant",
    categoryLabel: "RESTAURANT WEBSITE",
    title: "ACS Ranchi",
    subtitle: "Cafe & Store Franchise Platform",
    image: "/portfolio-acs.jpg",
    alt: "ACS Ranchi - Restaurant Website by Global Webify",
  },
  {
    id: "kaveri",
    category: "restaurant",
    categoryLabel: "RESTAURANT WEBSITE",
    title: "Kaveri Restaurant",
    subtitle: "Multi-Location Fine Dining & Booking",
    image: "/portfolio-kaveri.jpg",
    alt: "Kaveri Restaurant - Dining Experience Website by Global Webify",
  },
  {
    id: "healthpoint",
    category: "healthcare",
    categoryLabel: "HEALTHCARE WEBSITE",
    title: "Health Point Ranchi",
    subtitle: "Multi-Specialty Hospital & Doctors Portal",
    image: "/portfolio-healthpoint.jpg",
    alt: "Health Point Ranchi - Healthcare Hospital Website by Global Webify",
  },
  {
    id: "drkumar",
    category: "healthcare",
    categoryLabel: "HEALTHCARE WEBSITE",
    title: "Dr. Kumar Vishal",
    subtitle: "Orthopedic Specialist & Consultations",
    image: "/portfolio-drkumar.jpg",
    alt: "Dr. Kumar Vishal - Orthopedic Healthcare Website by Global Webify",
  },
  {
    id: "rps",
    category: "healthcare",
    categoryLabel: "HEALTHCARE WEBSITE",
    title: "RPS Hospital",
    subtitle: "Advanced Critical Care & Emergency",
    image: "/portfolio-rps.jpg",
    alt: "RPS Hospital - Hospital & Healthcare Platform by Global Webify",
  },
];

const filterTabs = [
  { label: "All Projects", value: "all" },
  { label: "Education", value: "education" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Healthcare", value: "healthcare" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? websitePortfolio
      : websitePortfolio.filter((p) => p.category === activeFilter);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("website-portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="relative bg-[#FAFAF8] pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
      {/* Decorative ambient curves */}
      <svg
        className="absolute top-0 left-0 w-[420px] h-[420px] pointer-events-none opacity-40 -translate-x-12 -translate-y-12"
        fill="none"
        viewBox="0 0 420 420"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 280 C 80 140, 200 40, 390 10"
          stroke="#00C853"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <circle cx="200" cy="140" r="140" stroke="#00C853" strokeWidth="0.8" opacity="0.3" />
      </svg>

      <svg
        className="absolute bottom-1/2 right-0 w-[460px] h-[460px] pointer-events-none opacity-30 translate-x-16"
        fill="none"
        viewBox="0 0 460 460"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M40 420 C 180 340, 320 220, 440 60"
          stroke="#00C853"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-6 lg:px-12 2xl:px-16">
        
        {/* ===================================================================
            PART 1: EDITORIAL SHOWCASE (DIGITAL TO REALITY + OUR WORK / THEIR SUCCESS)
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 lg:mb-32">
          
          {/* LEFT — Visual Hero Card (DIGITAL TO REALITY) */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              onClick={() => openQuoteModal()}
              className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-neutral-200/70 group cursor-pointer bg-neutral-900"
            >
              {/* Main Visual Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/digital-to-reality.jpg"
                alt="Digital to Reality — Global Webify engineering team"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Soft overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT — Content & Project Cards */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Tag Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00C853] shadow-[0_0_8px_rgba(0,200,83,0.6)]" />
              <span className="text-[12px] font-bold text-[#00C853] tracking-[0.18em] uppercase">
                Our Work
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#080A09] tracking-[-0.03em] leading-[1.08] mb-4">
              Our Work.
              <br />
              Their <span className="text-[#00C853]">Success.</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[15px] sm:text-[16px] text-[#555B55] leading-relaxed mb-6 max-w-[520px]">
              Explore how we turn complex business challenges into powerful digital solutions that deliver real results.
            </p>

            {/* Link with signature green underline bar -> scrolls to Website Portfolio */}
            <div className="mb-8">
              <a
                href="#website-portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#080A09] border-b-2 border-[#00C853] pb-1 hover:text-[#00C853] transition-colors group cursor-pointer"
              >
                <span>Explore Our Projects</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#080A09] group-hover:text-[#00C853]"
                />
              </a>
            </div>

            {/* Quick Highlight Cards */}
            <div className="flex flex-col gap-4">
              {featuredHighlights.map((project, i) => (
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
                  onClick={() => openQuoteModal()}
                  className="bg-white rounded-[20px] sm:rounded-[22px] p-3.5 sm:p-4.5 border border-[#ECEEEC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#00C853]/40 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  {/* Left Thumbnail */}
                  <div className="w-[88px] sm:w-[104px] h-[64px] sm:h-[70px] rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100 border border-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Middle Project Details */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#828882] tracking-[0.14em] uppercase mb-0.5">
                      {project.num} · {project.category}
                    </div>
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#080A09] group-hover:text-[#00C853] transition-colors leading-snug truncate">
                      {project.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-[#6E736E] truncate mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Right Circle Arrow Button */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F4F5F4] group-hover:bg-[#00C853] flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-sm">
                    <ArrowRight
                      size={16}
                      className="text-[#080A09] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* ===================================================================
            PART 2: OUR WEBSITE PORTFOLIO (6 AUTHENTIC CLIENT WEBSITES)
            =================================================================== */}
        <div id="website-portfolio" className="pt-6">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00C853] shadow-[0_0_8px_rgba(0,200,83,0.6)]" />
                <span className="text-[12px] font-bold text-[#00C853] tracking-[0.2em] uppercase">
                  Our Website Portfolio
                </span>
              </div>
              <h3 className="text-[28px] sm:text-[38px] font-black text-[#080A09] tracking-tight leading-tight">
                Live Platforms Built to <span className="text-[#00C853]">Scale &amp; Convert</span>
              </h3>
              <p className="text-[15px] text-[#626762] mt-2 max-w-xl">
                Real digital solutions deployed for leading educational institutions, multi-location restaurants, and major healthcare providers.
              </p>
            </div>

            {/* Filter Tabs — Smooth sliding pill indicator, zero layout shake */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-neutral-200/80 shadow-xs">
              {filterTabs.map((tab) => {
                const isSelected = activeFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActiveFilter(tab.value)}
                    className={`relative px-4 py-2 rounded-xl text-[13px] font-bold transition-colors duration-200 select-none cursor-pointer ${
                      isSelected ? "text-white" : "text-[#626762] hover:text-[#080A09]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-portfolio-tab"
                        className="absolute inset-0 bg-[#080A09] rounded-xl shadow-xs"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* 6-Card Portfolio Grid with Stable Minimum Height to Prevent Screen Shaking */}
          <div className="min-h-[520px] sm:min-h-[580px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openQuoteModal()}
                    className="group relative rounded-[22px] overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,200,83,0.14)] hover:border-[#00C853] transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    {/* Card Image Display */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Interactive Hover CTA Pill */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <span className="inline-flex items-center gap-2 bg-[#00C853] text-[#080A09] px-5 py-2.5 rounded-full text-[13px] font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span>Visit Project &amp; Get Quote</span>
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>

                    {/* Card Bottom Meta Bar */}
                    <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-[#00C853] tracking-wider uppercase">
                          {project.categoryLabel}
                        </div>
                        <div className="text-[15px] font-bold text-[#080A09] mt-0.5">
                          {project.title}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F4F5F4] group-hover:bg-[#00C853] flex items-center justify-center text-[#080A09] group-hover:text-white transition-colors duration-200">
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
