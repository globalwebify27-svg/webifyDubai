import Image from "next/image";

export default function GlobeVisual() {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] mx-auto flex items-center justify-center">
      {/* Camouflaged Hero Showcase — All text, badges, and devices 100% visible with zero rectangular border */}
      <Image
        src="/hero-showcase-camouflaged-v2.png"
        alt="Global Webify — Web, Software & App Development Showcase"
        width={1024}
        height={717}
        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.015] select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.06)]"
        priority
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 520px"
      />
    </div>
  );
}
