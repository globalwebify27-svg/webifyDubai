import Link from "next/link";
import { ArrowLeft, Home, MessageSquare, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-[#E5E7E5] bg-white sticky top-0 z-30">
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#080A09] hover:text-[#00C853] px-3.5 py-1.5 rounded-full border border-[#E5E7E5] bg-white hover:border-[#00C853]/40 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main 404 block */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00C853]/10 text-[#00C853] text-[36px] font-black mb-6">
            404
          </div>
          <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#080A09] tracking-tight leading-tight">
            Page Not Found
          </h1>
          <p className="text-[14px] text-[#626762] mt-3 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#080A09] text-white text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-[#1a1c1b] transition-all shadow-sm"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <a
              href="https://wa.me/917563901100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C853] text-[#080A09] text-[14px] font-bold px-6 py-3 rounded-full hover:bg-[#00E676] transition-all shadow-sm"
            >
              <MessageSquare size={16} />
              Chat Support
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E7E5] flex items-center justify-center gap-4 text-[12px] text-[#626762]">
            <a href="tel:+971582973805" className="hover:text-[#00C853] inline-flex items-center gap-1">
              <Phone size={12} className="text-[#00C853]" /> +971 58 297 3805 (UAE)
            </a>
            <span>•</span>
            <a href="tel:+917563901100" className="hover:text-[#00C853]">
              +91 75639 01100
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E7E5] bg-white py-4 text-center text-[12px] text-[#626762]">
        © 2026 Global Webify · All rights reserved
      </footer>
    </div>
  );
}

