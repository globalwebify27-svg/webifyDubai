"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";

const brandLogos = [
  {
    name: "Firayalal Public School",
    src: "/brands/firayalal.png",
    className: "h-10 sm:h-11 md:h-12 max-w-[170px]",
  },
  {
    name: "Unity Motorsports",
    src: "/brands/unity-motorsports.png",
    className: "h-9 sm:h-10 md:h-11 max-w-[150px]",
  },
  {
    name: "Bioserum Labs",
    src: "/brands/bioserum-labs.png",
    className: "h-9 sm:h-10 md:h-11 max-w-[160px]",
  },
  {
    name: "IIQ Solutions",
    src: "/brands/iiq-solutions.png",
    className: "h-11 sm:h-12 md:h-13 max-w-[140px]",
  },
  {
    name: "Hotel June",
    src: "/brands/hotel-june.png",
    className: "h-11 sm:h-12 md:h-13 max-w-[90px]",
  },
  {
    name: "Suvidha Caterers & Banquet",
    src: "/brands/suvidha-caterers.png",
    className: "h-9 sm:h-10 md:h-11 max-w-[170px]",
  },
  {
    name: "Kidzee",
    src: "/brands/client-1.png",
    className: "h-11 sm:h-12 md:h-13 max-w-[120px]",
  },
  {
    name: "Skin City",
    src: "/brands/client-2.png",
    className: "h-11 sm:h-12 md:h-13 max-w-[120px]",
  },
  {
    name: "Partner Brand",
    src: "/brands/client-3.png",
    className: "h-9 sm:h-10 md:h-11 max-w-[180px]",
  },
];

// Duplicate for continuous seamless marquee loop
const allLogos = [...brandLogos, ...brandLogos];

export default function TrustedBrands() {
  return (
    <div className="border-t border-[#E5E7E5] bg-white h-[68px] sm:h-[76px] md:h-[82px] w-full flex-shrink-0 relative z-20 flex items-center overflow-hidden shadow-xs">
      <div className="w-full h-full flex items-center overflow-hidden">
        <InfiniteSlider gap={0} speed={28} className="w-full flex items-center h-full">
          {allLogos.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center px-7 sm:px-11 md:px-14 border-r border-[#E5E7E5] flex-shrink-0 h-full hover:bg-gray-50/70 transition-colors select-none group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.name}
                className={`${brand.className} w-auto object-contain mix-blend-multiply opacity-100 group-hover:scale-105 transition-transform duration-200`}
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
