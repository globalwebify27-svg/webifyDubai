import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrands from "@/components/TrustedBrands";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 overflow-x-hidden w-full max-w-full">
        {/* ABOVE-THE-FOLD VIEWPORT (Navbar + Hero Content + Trusted Brands) */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-between bg-[#F7F7F5] overflow-x-clip"
        >
          <HeroSection />
          <TrustedBrands />
        </section>

        <PortfolioSection />
        <ServicesSection />
        <StatisticsSection />
        <ProcessSection />
        <LeadFormSection />
        <QuoteModal />
        <MobileBottomNav />
      </main>
      <Footer />
    </>
  );
}
