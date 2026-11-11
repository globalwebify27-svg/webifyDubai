"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, HeartHandshake, Award, CheckCircle2 } from "lucide-react";

// Real data sourced directly from globalwebify.com
const metrics = [
  {
    icon: TrendingUp,
    value: "350%",
    label: "Average ROI Increase",
    tag: "Performance Boost",
  },
  {
    icon: Target,
    value: "12k+",
    label: "Leads Generated",
    tag: "Quality Inquiries",
  },
  {
    icon: HeartHandshake,
    value: "98%",
    label: "Client Retention",
    tag: "5-Star Google Rated",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    tag: "Trusted Since 2015",
  },
];

const highlights = [
  "500+ Successful Projects Delivered",
  "24/7 Dedicated Support",
  "ISO 9001:2015 Certified Agency",
  "100% Customized Solutions",
];

export default function StatisticsSection() {
  return (
    <section className="bg-white border-y border-[#E5E7E5] py-10 sm:py-16 relative overflow-hidden">
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Header — Direct from globalwebify.com, short & minimal */}
        <motion.div
          className="text-center max-w-[800px] mx-auto mb-7 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#F7F7F5] border border-[#E5E7E5] text-[#080A09] text-[11px] sm:text-[13px] font-semibold px-3 py-0.5 sm:py-1 rounded-full mb-2.5 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            Milestones & Impact
          </div>
          <h2 className="text-[24px] sm:text-[36px] lg:text-[42px] font-black text-[#080A09] leading-tight tracking-[-0.03em]">
            Results That Speak <span className="text-[#00C853]">Louder Than Words</span>
          </h2>
        </motion.div>

        {/* 4 Minimal Metric Cards — Real globalwebify.com metrics (2x2 on mobile, 4 in a row on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-10">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-[#FDFDFD] rounded-xl sm:rounded-2xl border border-[#E5E7E5] p-3.5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853]/60 hover:shadow-md flex flex-col justify-between"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div>
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853] mb-2.5 sm:mb-5 group-hover:bg-[#00C853] group-hover:text-white transition-all duration-300">
                    <Icon size={16} className="sm:hidden" strokeWidth={2.2} />
                    <Icon size={20} className="hidden sm:block" strokeWidth={2} />
                  </div>

                  {/* Big Stat */}
                  <div className="text-[26px] xs:text-[30px] sm:text-[40px] font-black text-[#080A09] tracking-[-0.03em] leading-none mb-1 sm:mb-1.5">
                    {item.value}
                  </div>

                  {/* Label */}
                  <div className="text-[12px] sm:text-[15px] font-bold text-[#080A09] leading-snug mb-2 sm:mb-3">
                    {item.label}
                  </div>
                </div>

                {/* Tag */}
                <div>
                  <span className="inline-block text-[10px] sm:text-[12px] font-semibold text-[#00C853] bg-[#00C853]/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md leading-tight">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Highlights */}
        <motion.div
          className="bg-[#F7F7F5] border border-[#E5E7E5] rounded-xl py-3.5 px-5 sm:px-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-[#00C853] flex-shrink-0" strokeWidth={2.5} />
                <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#080A09] truncate">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
