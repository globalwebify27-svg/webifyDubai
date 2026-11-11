"use client";

import { Share2, Link, Code, AtSign, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Custom Software",
    "UI/UX Design",
    "Digital Consulting",
  ],
  company: [
    "About Us",
    "Our Work",
    "Blog",
    "Careers",
    "Press",
    "Partners",
  ],
};

const socialLinks = [
  { icon: Share2, label: "Twitter / X", href: "https://x.com/globalwebify" },
  { icon: Link, label: "LinkedIn", href: "https://www.linkedin.com/company/global-webify/" },
  { icon: Code, label: "Facebook", href: "https://www.facebook.com/global.webify" },
  { icon: AtSign, label: "Instagram", href: "https://www.instagram.com/global.webify/" },
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/global_webify_original_logo.webp"
          alt="Global Webify Logo"
          className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(0,200,83,0.25)]"
        />
      </div>
      <div>
        <div className="text-[15px] font-bold text-white leading-none tracking-tight">
          Global Webify
        </div>
        <div className="text-[9px] font-medium text-white/50 tracking-[0.2em] mt-0.5">
          BUILD · SCALE · INNOVATE
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#080A09] border-t border-white/10">
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1740px] mx-auto px-6 lg:px-12 2xl:px-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="text-[13px] text-white/50 mt-5 leading-relaxed max-w-[260px]">
              Building the digital future — one powerful software solution at a
              time. Trusted by innovative companies worldwide.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:connect@globalwebify.com"
                className="flex items-start gap-3 group"
              >
                <Mail
                  size={15}
                  className="text-[#00C853] flex-shrink-0 mt-0.5"
                />
                <span className="text-[13px] text-white/50 group-hover:text-white transition-colors duration-200">
                  connect@globalwebify.com
                </span>
              </a>
              <a href="tel:+971582973805" className="flex items-start gap-3 group">
                <Phone
                  size={15}
                  className="text-[#00C853] flex-shrink-0 mt-0.5"
                />
                <span className="text-[13px] text-white/50 group-hover:text-white transition-colors duration-200">
                  +971 58 297 3805 <span className="text-[11px] text-white/30">(UAE Direct)</span>
                </span>
              </a>
              <a href="tel:+917563901100" className="flex items-start gap-3 group">
                <Phone
                  size={15}
                  className="text-[#00C853] flex-shrink-0 mt-0.5"
                />
                <span className="text-[13px] text-white/50 group-hover:text-white transition-colors duration-200">
                  +91 75639 01100 <span className="text-[11px] text-white/30">(Direct Support)</span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[#00C853] flex-shrink-0 mt-0.5"
                />
                <span className="text-[13px] text-white/50 leading-relaxed">
                  <strong className="text-white/70 font-semibold">Headquarters:</strong> Alam Complex, Kadru, Ranchi, Jharkhand
                  <br />
                  <span className="text-[11px] text-white/40">Offices in Kolkata, Dubai (UAE) &amp; USA</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7">
          <p className="text-[12px] text-white/40">
            © 2026 Global Webify. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[12px] text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12px] text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-[12px] text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
