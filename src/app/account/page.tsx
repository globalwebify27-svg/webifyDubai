"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, ShieldCheck, Search, Phone, MessageSquare, CheckCircle2, Clock } from "lucide-react";

export default function AccountPage() {
  const [tab, setTab] = useState<"login" | "track">("login");
  const [projectId, setProjectId] = useState("");
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectId.trim()) {
      setTracked(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col justify-between">
      {/* Top Navigation */}
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
                CLIENT PORTAL
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#080A09] hover:text-[#00C853] px-3.5 py-1.5 rounded-full border border-[#E5E7E5] bg-white hover:border-[#00C853]/40 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Website
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl border border-[#E5E7E5] shadow-sm p-6 sm:p-8">
            {/* Header info */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#00C853]/10 text-[#00C853] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h1 className="text-[22px] font-extrabold text-[#080A09] tracking-tight">
                Client Account Portal
              </h1>
              <p className="text-[13px] text-[#626762] mt-1">
                Access your deliverables, milestones, and active development status.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex rounded-xl bg-[#F0F0EE] p-1 mb-6">
              <button
                type="button"
                onClick={() => setTab("login")}
                className={`flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all ${
                  tab === "login"
                    ? "bg-white text-[#080A09] shadow-xs"
                    : "text-[#626762] hover:text-[#080A09]"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setTab("track")}
                className={`flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all ${
                  tab === "track"
                    ? "bg-white text-[#080A09] shadow-xs"
                    : "text-[#626762] hover:text-[#080A09]"
                }`}
              >
                Track Project
              </button>
            </div>

            {tab === "login" ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#080A09] mb-1.5">
                    Client Email or Account ID
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#626762]" />
                    <input
                      type="email"
                      required
                      placeholder="client@company.com"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-[#E5E7E5] text-[14px] text-[#080A09] focus:outline-none focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[12px] font-semibold text-[#080A09]">
                      Password
                    </label>
                    <a
                      href="https://wa.me/917563901100?text=Hello%2C%20I%20need%20help%20with%20my%20Global%20Webify%20Client%20Portal%20password."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-[#00C853] hover:underline"
                    >
                      Reset via WhatsApp
                    </a>
                  </div>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#626762]" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-[#E5E7E5] text-[14px] text-[#080A09] focus:outline-none focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/15 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-[#080A09] text-white rounded-xl text-[14px] font-semibold hover:bg-[#1a1c1b] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Sign In to Dashboard
                </button>
              </form>
            ) : (
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#080A09] mb-1.5">
                    Project Reference Code or Ticket #
                  </label>
                  <div className="relative">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#626762]" />
                    <input
                      type="text"
                      required
                      value={projectId}
                      onChange={(e) => setProjectId(e.target.value)}
                      placeholder="e.g. GW-2026-8941"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-[#E5E7E5] text-[14px] text-[#080A09] focus:outline-none focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/15 transition-all uppercase"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-[#00C853] text-[#080A09] rounded-xl text-[14px] font-bold hover:bg-[#00E676] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Track Project Status
                </button>

                {tracked && (
                  <div className="mt-4 p-4 rounded-xl bg-[#F0FDF4] border border-[#00C853]/20">
                    <div className="flex items-center gap-2 text-[#00C853] text-[13px] font-bold mb-2">
                      <CheckCircle2 size={16} />
                      Project #{projectId} Active
                    </div>
                    <div className="space-y-2 text-[12px] text-[#080A09]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#626762]">Current Milestone:</span>
                        <span className="font-semibold">Sprint 3: UI &amp; Core Architecture</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#626762]">Next Review:</span>
                        <span className="font-semibold flex items-center gap-1">
                          <Clock size={12} className="text-[#00C853]" /> Tomorrow, 3:00 PM GST
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}

            {/* Assistance block */}
            <div className="mt-6 pt-5 border-t border-[#E5E7E5] text-center">
              <p className="text-[12px] text-[#626762] mb-3">
                Need account credentials or instant support?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <a
                  href="tel:+971582973805"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#080A09] bg-[#F0F0EE] hover:bg-[#E5E7E5] rounded-lg transition-colors"
                >
                  <Phone size={12} className="text-[#00C853]" />
                  +971 58 297 3805 (UAE)
                </a>
                <a
                  href="https://wa.me/917563901100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#080A09] bg-[#F0F0EE] hover:bg-[#E5E7E5] rounded-lg transition-colors"
                >
                  <MessageSquare size={12} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E7E5] bg-white py-4 text-center text-[12px] text-[#626762]">
        © 2026 Global Webify · Enterprise Client Portal
      </footer>
    </div>
  );
}

