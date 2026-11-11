"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Users,
  Target,
  Share2,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { openQuoteModal } from "./QuoteModal";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Global Webify is a leading Web Development Company in Ranchi, Jharkhand, delivering fast, secure, and SEO-friendly websites that help businesses grow online with modern design, better performance, and strong digital presence.",
    color: "#1a8b4c",
    borderColor: "border-green-300",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Boost your online visibility and attract more customers with result-driven SEO Services in Ranchi, Jharkhand. Improve search rankings, increase organic traffic, and grow your business with proven digital strategies.",
    color: "#0ea5e9",
    borderColor: "border-blue-300",
  },
  {
    icon: Users,
    title: "CRM Software Development",
    description:
      "As a leading CRM Software Development Company in Ranchi, Jharkhand, we create scalable and customized CRM solutions that help businesses manage leads, automate processes, enhance customer engagement, and drive growth.",
    color: "#f97316",
    borderColor: "border-orange-300",
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description:
      "Boost your business growth with result-driven Google Ads Management Services in Ranchi, Jharkhand. We create, manage, and optimize high-performing campaigns to bring targeted traffic, quality leads, and maximum ROI for your brand.",
    color: "#f59e0b",
    borderColor: "border-amber-300",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Boost your brand’s online presence with Ranchi’s trusted social media marketing experts. We create engaging campaigns, increase audience reach, drive quality leads, and help your business grow across all major social platforms.",
    color: "#06b6d4",
    borderColor: "border-cyan-300",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Web Designing",
    description:
      "Global Webify is a leading Ecommerce Web Design Agency in Ranchi, Jharkhand, creating secure, responsive, and conversion-focused online stores. We build user-friendly eCommerce websites that help businesses attract customers, increase sales, and grow online.",
    color: "#10b981",
    borderColor: "border-emerald-300",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ServicesSection() {
  const handleQuoteClick = (serviceTitle: string) => {
    openQuoteModal(serviceTitle);
  };

  return (
    <section
      id="services"
      className="relative bg-[#FAFAF8] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-t border-gray-100 overflow-hidden"
    >
      {/* 3D Organic Green Tubular Fluid Ribbon Background — Matching Hero Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-ribbon-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-[30%_center] sm:object-center opacity-85 transition-opacity duration-700"
          loading="lazy"
        />
        {/* Smooth vignette fade to blend seamlessly into surrounding #FAFAF8 page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/80 via-transparent to-[#FAFAF8]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/40 via-transparent to-[#FAFAF8]/40 pointer-events-none" />
      </div>

      {/* Relatable Tech Matrix Dot-Grid with Radial Falloff */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.22) 1.2px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 35%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 35%, transparent 95%)",
        }}
      />

      <div className="relative max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 z-10">
        {/* Header Section — Centered & Balanced */}
        <motion.div
          className="text-center max-w-[1100px] mx-auto mb-8 sm:mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1a8b4c] text-[11px] sm:text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#00C853]" />
            Our Services
          </div>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-black text-gray-900 leading-[1.15] tracking-tight mb-4 sm:whitespace-nowrap">
            Engineering Solutions That Drive Revenue
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-gray-500 font-medium leading-relaxed max-w-[700px] mx-auto">
            From Web Development and SEO Services to CRM Software and Google Ads, we engineer customized digital solutions that help businesses grow, attract customers, and build a strong online presence.
          </p>
        </motion.div>

        {/* 6 Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1360px] mx-auto">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex flex-col w-full h-full"
              >
                <div
                  className={`relative flex-1 flex flex-col w-full bg-white rounded-[32px] border-2 ${svc.borderColor} shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_2px_2px_8px_rgba(255,255,255,0.9),inset_-2px_-2px_8px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_2px_2px_8px_rgba(255,255,255,0.9),inset_-2px_-2px_8px_rgba(0,0,0,0.03)] hover:border-[#1a8b4c] overflow-hidden group/card`}
                >
                  <div className="relative flex-1 p-6 sm:p-8 flex flex-col items-center text-center z-10">
                    {/* Glowing Icon Container */}
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-0 opacity-20 group-hover/card:opacity-40 transition-opacity duration-500 rounded-full"
                        style={{ boxShadow: `0 0 30px ${svc.color}` }}
                      />
                      <div
                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1 shadow-[0_8px_16px_rgba(0,0,0,0.08)] text-white"
                        style={{ backgroundColor: svc.color, borderColor: svc.color }}
                      >
                        <Icon size={26} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-snug tracking-tight text-[#064e3b] group-hover/card:text-[#1a8b4c] transition-colors">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-3 overflow-hidden text-ellipsis px-1 sm:px-2">
                      {svc.description}
                    </p>

                    {/* Footer Actions */}
                    <div className="w-full mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                      {/* Explore Link */}
                      <a
                        href="#lead-form"
                        onClick={() => handleQuoteClick(svc.title)}
                        className="flex items-center gap-1.5 text-[13px] font-bold tracking-wide group-hover/card:gap-2.5 transition-all duration-300 text-[#1a8b4c]"
                      >
                        <span>Explore</span>
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </a>

                      {/* Get Quote Pill Button */}
                      <button
                        type="button"
                        onClick={() => handleQuoteClick(svc.title)}
                        className="h-9 px-4 rounded-xl text-[#115e33] text-[12px] font-bold flex items-center justify-center gap-1.5 transition-all duration-300 bg-[#1a8b4c]/10 border border-[#1a8b4c]/20 hover:bg-[#1a8b4c]/20 hover:border-[#1a8b4c]/40 active:scale-[0.97] cursor-pointer shadow-sm"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
