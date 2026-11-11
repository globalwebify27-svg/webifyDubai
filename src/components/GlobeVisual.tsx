import Image from "next/image";

export default function GlobeVisual() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[620px] 2xl:max-w-[700px] flex items-center justify-center lg:justify-end ml-auto">
      {/* Camouflaged Hero Showcase — All text, badges, and devices 100% visible with zero rectangular border */}
      <Image
        src="/hero-showcase-camouflaged-v2.png"
        alt="Global Webify — Web, Software & App Development Showcase"
        width={1024}
        height={717}
        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.015] select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.06)]"
        priority
        sizes="(max-width: 640px) 320px, (max-width: 1024px) 540px, (max-width: 1536px) 620px, 700px"
      />
    </div>
  );
}
