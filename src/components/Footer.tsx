"use client";

import { Mail, Phone, MapPin } from "lucide-react";

function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

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
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/globalwebify" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/global-webify/" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/global.webify" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/global.webify/" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://www.youtube.com/@globalwebify" },
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00C853] hover:border-[#00C853] hover:bg-[#00C853]/10 hover:shadow-[0_0_12px_rgba(0,200,83,0.3)] transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
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
