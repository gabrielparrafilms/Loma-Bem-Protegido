import dynamic from "next/dynamic";
import Navbar from "@/components/lps/site-institucional/Navbar";
import HeroSection from "@/components/lps/site-institucional/HeroSection";
import BenefitsSection from "@/components/lps/site-institucional/BenefitsSection";
import CoveragesSection from "@/components/lps/site-institucional/CoveragesSection";
import SocialProofSection from "@/components/lps/site-institucional/SocialProofSection";
import FeedbacksSection from "@/components/lps/site-institucional/FeedbacksSection";
import FaqSection from "@/components/lps/site-institucional/FaqSection";
import Footer from "@/components/shared/Footer";

// Lazy-load seções pesadas (usam Framer Motion com scroll/parallax)
const AppFeaturesSection = dynamic(
  () => import("@/components/lps/site-institucional/AppFeaturesSection"),
  { ssr: true }
);
const EvolutionSection = dynamic(
  () => import("@/components/lps/site-institucional/EvolutionSection"),
  { ssr: true }
);
const AppLomaSection = dynamic(
  () => import("@/components/lps/site-institucional/AppLomaSection"),
  { ssr: true }
);

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
