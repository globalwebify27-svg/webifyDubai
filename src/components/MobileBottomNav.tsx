"use client";

import { openQuoteModal } from "./QuoteModal";

export default function MobileBottomNav() {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenQuote = () => {
    openQuoteModal("Mobile Bottom Bar");
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E5E7E5] shadow-[0_-4px_25px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-around h-[64px] px-2 max-w-md mx-auto">
        {/* Call — Handset with signal pulses */}
        <a
          href="tel:+971582973805"
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#626762] hover:text-[#00C853] active:scale-95 transition-all select-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#00C853]/10 flex items-center justify-center text-[#00C853] mb-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14 4a7 7 0 0 1 6 6" />
              <path d="M14 1a10 10 0 0 1 9 9" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#080A09]">Call</span>
        </a>

        {/* WhatsApp — Official full-detail WhatsApp brand glyph with pulse & blink */}
        <a
          href="https://wa.me/917563901100"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#626762] hover:text-[#25D366] active:scale-95 transition-all select-none"
        >
          <div className="relative w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-1 animate-wa-blink">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.96.57 3.79 1.55 5.34L2 22l4.82-1.51A9.96 9.96 0 0 0 12.004 22c5.523 0 10-4.48 10-10s-4.477-10-10-10zm5.82 14.28c-.24.68-1.4 1.25-1.92 1.33-.5.08-1.15.11-3.71-.95-3.28-1.36-5.38-4.7-5.54-4.92-.16-.22-1.33-1.78-1.33-3.39s.85-2.4 1.15-2.73c.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.48-.08.75.58.28.69.95 2.33 1.03 2.5.08.17.14.37.03.6-.11.22-.17.36-.33.56-.17.2-.35.44-.5.59-.17.17-.34.35-.15.68.2.33.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.08.2-.23.87-1.01 1.1-1.36.23-.35.46-.29.77-.18.31.11 1.99.94 2.33 1.11.34.17.57.26.65.4.08.14.08.82-.16 1.5z" />
            </svg>
            {/* Live Online Ping Badge */}
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] border border-white"></span>
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#080A09]">WhatsApp</span>
        </a>

        {/* Our Work — Modern agency portfolio Bento layout grid */}
        <button
          onClick={handleScrollToWork}
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#626762] hover:text-[#080A09] active:scale-95 transition-all select-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#F0F0EE] flex items-center justify-center text-[#080A09] mb-1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="9" rx="2" fill="currentColor" fillOpacity="0.2" />
              <rect x="14" y="3" width="7" height="5" rx="2" />
              <rect x="14" y="12" width="7" height="9" rx="2" fill="currentColor" fillOpacity="0.2" />
              <rect x="3" y="16" width="7" height="5" rx="2" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#080A09]">Our Work</span>
        </button>

        {/* Get Quote — Gradient emerald badge with paperplane proposal spark */}
        <button
          onClick={handleOpenQuote}
          className="flex-1 flex flex-col items-center justify-center py-1 text-[#080A09] active:scale-95 transition-all select-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00C853] to-[#00E676] flex items-center justify-center text-white mb-1 shadow-md shadow-[#00C853]/30">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M22 2 11 13" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-[#00C853] tracking-tight">Get Quote</span>
        </button>
      </div>
    </nav>
  );
}
