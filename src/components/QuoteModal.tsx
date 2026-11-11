"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronDown,
  RotateCw,
  Send,
  CheckCircle2,
} from "lucide-react";
import CountryCodeSelect, { COUNTRIES, Country } from "@/components/CountryCodeSelect";

export function openQuoteModal(serviceName?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-quote-modal", {
        detail: { service: serviceName || "" },
      })
    );
  }
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);

  const [captcha, setCaptcha] = useState({ num1: 7, num2: 9 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    message: "",
  });

  const refreshCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1: n1, num2: n2 });
    setCaptchaInput("");
    setCaptchaError(false);
  };

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      const service = customEvent.detail?.service;
      if (service) {
        setFormData((prev) => ({
          ...prev,
          message: `Hi, I am interested in ${service}. Please share a quote and roadmap.`,
        }));
      }
      refreshCaptcha();
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-quote-modal", handleOpen);

    // Auto-open modal after 6 seconds (between 5 and 7 seconds)
    const autoOpenTimer = setTimeout(() => {
      setIsOpen((prev) => {
        if (!prev) {
          refreshCaptcha();
          setSubmitted(false);
          return true;
        }
        return prev;
      });
    }, 6000);

    return () => {
      window.removeEventListener("open-quote-modal", handleOpen);
      clearTimeout(autoOpenTimer);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput.trim(), 10) !== captcha.num1 + captcha.num2) {
      setCaptchaError(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", workEmail: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-[500px] bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-gray-100 my-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Top-Right Circle matching image) */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center gap-2 pr-10">
                  <h3 className="text-[17px] sm:text-[18px] font-black tracking-wider uppercase text-gray-900">
                    Request A Free Quote
                  </h3>
                </div>

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-1">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email"
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone with Country Code Select */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Phone *
                  </label>
                  <div className="flex items-center gap-2 sm:gap-2.5 w-full">
                    <CountryCodeSelect
                      selectedCountry={selectedCountry}
                      onSelect={setSelectedCountry}
                      size="compact"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1 min-w-0 bg-gray-50/80 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message (optional) */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Message <span className="text-gray-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your requirements"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-xl p-3.5 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Row 4: Security Check */}
                <div>
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    <span>🔒</span>
                    <span>Security Check <span className="text-red-500">*</span></span>
                  </label>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-gray-100 border border-gray-200 rounded-xl px-3.5 py-2 font-bold text-[15px] text-gray-800 tracking-wider">
                      <span>{captcha.num1}</span>
                      <span className="text-[#1a8b4c] font-black mx-1.5">+</span>
                      <span>{captcha.num2}</span>
                      <span className="ml-1.5">=</span>
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="?"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setCaptchaError(false);
                      }}
                      className={`w-18 text-center bg-gray-50/80 border ${
                        captchaError ? "border-red-500" : "border-gray-200"
                      } rounded-xl px-3 py-2 font-bold text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all`}
                    />
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      title="Refresh Security Code"
                      className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      <RotateCw size={16} />
                    </button>
                  </div>
                  {captchaError && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">
                      Incorrect security check answer. Please calculate {captcha.num1} + {captcha.num2}.
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a8b4c] hover:bg-[#15733f] active:scale-[0.98] text-white font-black text-[15px] py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 tracking-wider uppercase transition-all shadow-md cursor-pointer mt-1"
                >
                  {loading ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <span>Get Free Quote</span>
                      <Send size={15} className="-rotate-12" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success / Thank You State */
              <div className="py-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a8b4c]/15 text-[#1a8b4c] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} strokeWidth={2.2} />
                </div>
                <h4 className="text-[22px] font-black text-gray-900 mb-1 tracking-tight">
                  Quote Request Sent!
                </h4>
                <p className="text-[14px] text-gray-600 mb-6">
                  Thank you, <strong>{formData.fullName || "Partner"}</strong>. Our senior technical team will review your requirements and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-[#1a8b4c] text-white font-bold text-[14px] px-6 py-2.5 rounded-full hover:bg-[#15733f] transition-all cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
