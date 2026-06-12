import Navbar from "@/components/lps/site-institucional/Navbar";
import HeroSection from "@/components/lps/site-institucional/HeroSection";
import BenefitsSection from "@/components/lps/site-institucional/BenefitsSection";
import CoveragesSection from "@/components/lps/site-institucional/CoveragesSection";
import AppFeaturesSection from "@/components/lps/site-institucional/AppFeaturesSection";
import SocialProofSection from "@/components/lps/site-institucional/SocialProofSection";
import EvolutionSection from "@/components/lps/site-institucional/EvolutionSection";
import FeedbacksSection from "@/components/lps/site-institucional/FeedbacksSection";
import AppLomaSection from "@/components/lps/site-institucional/AppLomaSection";
import FaqSection from "@/components/lps/site-institucional/FaqSection";
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <main className="overflow-x-clip bg-[#09090b]">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <CoveragesSection />
      <AppFeaturesSection />
      <SocialProofSection />
      <EvolutionSection />
      <FeedbacksSection />
      <AppLomaSection />
      <FaqSection />
      <div className="bg-[#0f0f13]">
        <Footer />
      </div>
    </main>
  );
}
