"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

export interface Country {
  name: string;
  code: string;
  dial: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { name: "United Arab Emirates (Dubai)", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Sweden", code: "SE", dial: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "NO", dial: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "DK", dial: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "Hong Kong", code: "HK", dial: "+852", flag: "🇭🇰" },
  { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "PH", dial: "+63", flag: "🇵🇭" },
  { name: "Thailand", code: "TH", dial: "+66", flag: "🇹🇭" },
  { name: "Vietnam", code: "VN", dial: "+84", flag: "🇻🇳" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "Israel", code: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Austria", code: "AT", dial: "+43", flag: "🇦🇹" },
  { name: "Poland", code: "PL", dial: "+48", flag: "🇵🇱" },
  { name: "Czech Republic", code: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Romania", code: "RO", dial: "+40", flag: "🇷🇴" },
  { name: "Hungary", code: "HU", dial: "+36", flag: "🇭🇺" },
  { name: "Greece", code: "GR", dial: "+30", flag: "🇬🇷" },
  { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Sri Lanka", code: "LK", dial: "+94", flag: "🇱🇰" },
  { name: "Nepal", code: "NP", dial: "+977", flag: "🇳🇵" },
];

interface CountryCodeSelectProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
  size?: "default" | "compact";
}

export default function CountryCodeSelect({
  selectedCountry,
  onSelect,
  size = "default",
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dial.includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`shrink-0 flex items-center gap-1.5 bg-gray-50/80 hover:bg-gray-100/90 border border-gray-200 rounded-xl ${
          size === "compact" ? "px-2.5 sm:px-3 py-2.5 text-[13.5px]" : "px-3.5 py-3 text-[14px]"
        } font-bold text-gray-800 transition-all cursor-pointer focus:outline-none focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]/15`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{selectedCountry.flag}</span>
        <span className="tracking-tight">{selectedCountry.dial}</span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-gray-700" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-[270px] sm:w-[320px] max-w-[calc(100vw-3rem)] bg-white border border-gray-200 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] z-[120] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Search Input */}
          <div className="p-2.5 border-b border-gray-100 bg-gray-50/50">
            <div className="relative flex items-center">
              <Search
                size={14}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search country or code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8.5 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#00C853]"
              />
            </div>
          </div>

          {/* List of Countries */}
          <div className="max-h-60 overflow-y-auto divide-y divide-gray-50 p-1">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code;
                return (
                  <button
                    key={`${c.code}-${c.dial}`}
                    type="button"
                    onClick={() => {
                      onSelect(c);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[13px] transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#00C853]/10 text-gray-900 font-semibold"
                        : "hover:bg-gray-100/70 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg leading-none shrink-0">{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="font-mono text-[12px] font-bold text-gray-500">
                        {c.dial}
                      </span>
                      {isSelected && (
                        <Check size={14} className="text-[#00C853] shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="py-6 text-center text-[12.5px] text-gray-400">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

