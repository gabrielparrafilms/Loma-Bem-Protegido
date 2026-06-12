import Navbar from "@/components/lps/maio-amarelo/Navbar";
import HeroSection from "@/components/lps/maio-amarelo/HeroSection";
import BenefitsSection from "@/components/lps/maio-amarelo/BenefitsSection";
import SpecialOfferSection from "@/components/lps/maio-amarelo/SpecialOfferSection";
import InstitutionalSection from "@/components/lps/maio-amarelo/InstitutionalSection";
import FeedbacksSection from "@/components/lps/maio-amarelo/FeedbacksSection";
import FAQSection from "@/components/lps/maio-amarelo/FAQSection";
import Footer from "@/components/shared/Footer";

export default function MaioAmareloPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <SpecialOfferSection />
      <InstitutionalSection />
      <FeedbacksSection />
      <FAQSection />
      <div className="bg-[#0f0f13]">
        <Footer />
      </div>
    </main>
  );
}
