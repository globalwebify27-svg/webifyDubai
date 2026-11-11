"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  Sparkles,
  ChevronDown,
  RotateCw,
} from "lucide-react";
import CountryCodeSelect, { COUNTRIES, Country } from "@/components/CountryCodeSelect";

export default function LeadFormSection() {
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
    projectDetails: "",
  });

  const refreshCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1: n1, num2: n2 });
    setCaptchaInput("");
    setCaptchaError(false);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

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

  return (
    <section id="lead-form" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E5E7E5] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 lg:gap-16 items-start">
          
          {/* LEFT: Funnel Value Proposition & Guarantees */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00C853]" />
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#00C853] uppercase tracking-widest">
                Start Your Project
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-black text-[#080A09] leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] mb-4 sm:mb-5">
              Get a Free Technical Audit &amp; Fixed-Price Roadmap
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-[#626762] leading-relaxed mb-6 sm:mb-8">
              Tell us about your business goals. Our senior technical architects will review your requirements and deliver a comprehensive scope breakdown within 24 hours.
            </p>

            {/* Conversion Trust Pillars */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] border border-[#E5E7E5] flex items-center justify-center text-[#00C853] flex-shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#080A09]">Rapid 24-Hour Turnaround</h4>
                  <p className="text-[12.5px] sm:text-[13px] text-[#626762]">Receive a tailored architectural blueprint and preliminary budget estimate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] border border-[#E5E7E5] flex items-center justify-center text-[#00C853] flex-shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#080A09]">100% Strict NDA Protection</h4>
                  <p className="text-[12.5px] sm:text-[13px] text-[#626762]">Your intellectual property, concept, and proprietary data remain strictly confidential.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] border border-[#E5E7E5] flex items-center justify-center text-[#00C853] flex-shrink-0 mt-0.5">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#080A09]">No Obligation &amp; Fixed Pricing</h4>
                  <p className="text-[12.5px] sm:text-[13px] text-[#626762]">Zero hidden fees or hourly creep. Transparent milestone-based delivery contracts.</p>
                </div>
              </div>
            </div>

            {/* Direct Instant Contact */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F7F5] border border-[#E5E7E5]">
              <div className="text-[11.5px] sm:text-[12px] font-bold text-[#626762] uppercase tracking-wider mb-2">
                Need Immediate Assistance?
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a
                  href="https://wa.me/917563901100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-bold text-[#080A09] hover:text-[#00C853] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                  Chat on WhatsApp: +91 75639 01100
                </a>
                <a
                  href="tel:+971582973805"
                  className="text-[12.5px] sm:text-[13px] text-[#626762] hover:text-[#080A09]"
                >
                  UAE Direct: +971 58 297 3805
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Converting Authentic Quote Form */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.05)] relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                /* REQUEST A FREE QUOTE FORM */
                <motion.form
                  key="quote-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-4.5"
                >
                  {/* Form Header */}
                  <div className="flex items-center gap-2 pb-2">
                    <h3 className="text-[17px] sm:text-[19px] font-black tracking-wider uppercase text-gray-900">
                      Request A Free Quote
                    </h3>
                  </div>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
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
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
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
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone with Country Code Select */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Phone *
                    </label>
                    <div className="flex items-center gap-2.5 w-full">
                      <CountryCodeSelect
                        selectedCountry={selectedCountry}
                        onSelect={setSelectedCountry}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="flex-1 min-w-0 bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message (optional) */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Message <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your requirements"
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDetails: e.target.value })
                      }
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl p-4 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Row 4: Security Check */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      <span>🔒</span>
                      <span>Security Check <span className="text-red-500">*</span></span>
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-[15px] text-gray-800 tracking-wider">
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
                        className={`w-20 text-center bg-gray-50/70 border ${
                          captchaError ? "border-red-500" : "border-gray-200"
                        } rounded-xl px-3 py-2.5 font-bold text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a8b4c] focus:bg-white transition-all`}
                      />
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        title="Refresh Security Code"
                        className="w-11 h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                      >
                        <RotateCw size={17} />
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
                    className="w-full bg-[#1a8b4c] hover:bg-[#15733f] active:scale-[0.98] text-white font-black text-[15px] sm:text-[16px] py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 tracking-wider uppercase transition-all shadow-md cursor-pointer mt-2"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Get Free Quote</span>
                        <Send size={16} className="-rotate-12" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-gray-400 mt-1">
                    🔒 We respect your privacy. No spam. 100% NDA Protected.
                  </div>
                </motion.form>
              ) : (
                /* HIGH-CONVERTING THANK YOU & NEXT STEPS CONFIRMATION */
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1a8b4c]/15 text-[#1a8b4c] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={36} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-[26px] font-black text-gray-900 mb-2 tracking-tight">
                    Thank You, {formData.fullName || "Partner"}!
                  </h3>
                  <p className="text-[15px] text-[#1a8b4c] font-bold mb-6">
                    Your Quote Request Has Been Received.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-6 shadow-sm">
                    <div className="text-[12px] font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles size={16} className="text-[#1a8b4c]" />
                      What Happens Next (Within 24 Hours):
                    </div>
                    <div className="flex flex-col gap-3.5 text-[13px] text-gray-600">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1a8b4c] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                          1
                        </span>
                        <div>
                          <strong className="text-gray-900">Technical Scope Review:</strong> Our senior engineering lead analyzes your requirements.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1a8b4c] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                          2
                        </span>
                        <div>
                          <strong className="text-gray-900">Custom Roadmap &amp; Quote:</strong> We deliver a fixed-price proposal with milestone timeline to <strong className="text-gray-900">{formData.workEmail || "your email"}</strong>.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Immediate WhatsApp Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/917563901100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1a8b4c] text-white text-[14px] font-bold px-6 py-3 rounded-full hover:bg-[#15733f] transition-all shadow-sm"
                    >
                      <span>Need It Faster? Message on WhatsApp</span>
                      <Send size={15} />
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[13px] text-gray-500 hover:text-gray-900 underline py-2 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
