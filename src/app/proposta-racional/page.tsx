import Navbar from "@/components/lps/proposta-racional/Navbar";
import HeroSection from "@/components/lps/proposta-racional/HeroSection";
import ComparisonSection from "@/components/lps/proposta-racional/ComparisonSection";
import CostSection from "@/components/lps/proposta-racional/CostSection";
import ObjectionsSection from "@/components/lps/proposta-racional/ObjectionsSection";
import FeaturesSection from "@/components/lps/proposta-racional/FeaturesSection";
import CredibilitySection from "@/components/lps/proposta-racional/CredibilitySection";
import SocialProofSection from "@/components/lps/proposta-racional/SocialProofSection";
import FinalCTASection from "@/components/lps/proposta-racional/FinalCTASection";
import Footer from "@/components/shared/Footer";

export default function PropostaRacionalPage() {
  return (
    <main className="overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-[#0ABAB5]/30 selection:text-white">
      {/* Fixed dark ambient glow */}
      <div className="fixed top-0 w-full h-screen -z-10 pointer-events-none brightness-[0.85]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-96 h-96 blur-[120px] rounded-full z-10 bg-[#0ABAB5]/10" />
        <div className="absolute -top-[50vh] w-[150vw] h-[100vh] rounded-[100%] border border-white/5 shadow-[0_0_100px_rgba(10,186,181,0.03)]" />
      </div>

      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <CostSection />
      <ObjectionsSection />
      <FeaturesSection />
      <CredibilitySection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
