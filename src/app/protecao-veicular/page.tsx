import { metadata as lpMetadata } from "./metadata";
import Navbar from "@/components/lps/protecao-veicular/Navbar";
import HeroSection from "@/components/lps/protecao-veicular/HeroSection";
import IdentificationSection from "@/components/lps/protecao-veicular/IdentificationSection";
import PainSection from "@/components/lps/protecao-veicular/PainSection";
import TurningPointSection from "@/components/lps/protecao-veicular/TurningPointSection";
import CredibilitySection from "@/components/lps/protecao-veicular/CredibilitySection";
import SocialProofSection from "@/components/lps/protecao-veicular/SocialProofSection";
import FinalCTA from "@/components/lps/protecao-veicular/FinalCTA";

export const metadata = lpMetadata;

export default function ProtecaoVeicularPage() {
  return (
    <main className="relative bg-[#09090b] overflow-hidden">
      <Navbar />
      <HeroSection />
      <IdentificationSection />
      <PainSection />
      <TurningPointSection />
      <CredibilitySection />
      <SocialProofSection />
      <FinalCTA />
    </main>
  );
}
