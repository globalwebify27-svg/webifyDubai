"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { openQuoteModal } from "./QuoteModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-[#E5E7E5] shadow-sm"
            : "bg-white border-b border-[#E5E7E5]"
        }`}
      >
        <nav className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-6 lg:px-12 2xl:px-16 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={() => setActive("Home")}
          >
            {/* Original Global Webify Logo */}
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/global_webify_original_logo.webp"
                alt="Global Webify Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#080A09] leading-none tracking-tight">
                Global Webify
              </div>
              <div className="text-[9px] font-medium text-[#626762] tracking-[0.2em] mt-0.5">
                BUILD · SCALE · INNOVATE
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                  active === link.label
                    ? "text-[#00C853]"
                    : "text-[#080A09] hover:text-[#00C853]"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00C853] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="flex items-center gap-2 bg-[#080A09] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#1a1c1b] transition-colors duration-200 group cursor-pointer"
            >
              Get Free Quote
              <ArrowUpRight
                size={16}
                className="text-[#00C853] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#080A09]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white border-b border-[#E5E7E5] shadow-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`text-left px-4 py-3 text-[15px] font-medium rounded-lg transition-colors duration-200 ${
                    active === link.label
                      ? "text-[#00C853] bg-[#F7F7F5]"
                      : "text-[#080A09] hover:bg-[#F7F7F5]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-[#E5E7E5]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#080A09] text-white text-[15px] font-semibold px-5 py-3 rounded-full hover:bg-[#1a1c1b] transition-colors duration-200 cursor-pointer"
                >
                  Get Free Quote
                  <ArrowUpRight size={16} className="text-[#00C853]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
