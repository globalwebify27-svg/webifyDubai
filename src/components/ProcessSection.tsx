"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket, Headphones, ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    icon: Lightbulb,
    description: "Analyze technical goals & scope breakdown.",
  },
  {
    number: "02",
    title: "Guaranteed Scope & Quote",
    icon: Code2,
    description: "Fixed-price roadmap with zero hidden fees.",
  },
  {
    number: "03",
    title: "Agile Sprints & Demos",
    icon: Rocket,
    description: "Weekly milestone demos & continuous builds.",
  },
  {
    number: "04",
    title: "Launch & 24/7 SLA",
    icon: Headphones,
    description: "Production launch backed by 24/7 reliability.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white border-t border-[#E5E7E5] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00C853]" />
              <span className="text-[12px] font-semibold text-[#00C853] uppercase tracking-widest">
                Our Proven Funnel
              </span>
            </div>
            <h2 className="text-[36px] lg:text-[44px] font-black text-[#080A09] leading-[1.05] tracking-[-0.03em] mb-5">
              From First Call to Production Scale
            </h2>
            <p className="text-[15px] text-[#626762] leading-relaxed mb-8">
              A transparent, milestone-driven development process engineered to deliver on time, within budget, and with zero surprises.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#080A09] border-b border-[#080A09] pb-0.5 hover:text-[#00C853] hover:border-[#00C853] transition-colors duration-200 group"
            >
              Book Your Discovery Call
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* RIGHT — Steps */}
          <div>
            {/* Desktop horizontal steps */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-0">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.55 }}
                      className="relative"
                    >
                      {/* Connector line */}
                      {i < steps.length - 1 && (
                        <div className="absolute top-[26px] left-[calc(50%+24px)] right-0 h-[1px] border-t border-dashed border-[#E5E7E5] z-0" />
                      )}

                      <div className="flex flex-col items-center text-center px-4 relative z-10">
                        {/* Icon box */}
                        <div className="flex items-center justify-center w-12 h-12 bg-[#080A09] rounded-xl mb-5">
                          <Icon size={20} color="white" strokeWidth={1.5} />
                        </div>
                        {/* Step number */}
                        <div className="text-[11px] font-bold text-[#626762] tracking-widest mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-[16px] font-bold text-[#080A09] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-[#626762] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden flex flex-col gap-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative flex gap-5 pb-8"
                  >
                    {/* Vertical connector */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-12 left-[23px] bottom-0 w-[1px] border-l border-dashed border-[#E5E7E5]" />
                    )}

                    {/* Icon box */}
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#080A09] rounded-xl">
                      <Icon size={20} color="white" strokeWidth={1.5} />
                    </div>

                    <div className="pt-1">
                      <div className="text-[11px] font-bold text-[#626762] tracking-widest mb-1">
                        {step.number}
                      </div>
                      <h3 className="text-[16px] font-bold text-[#080A09] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-[#626762] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
