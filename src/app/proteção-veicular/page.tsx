import { metadata as lpMetadata } from "./metadata";
import Navbar from "@/components/lps/proteção-veicular/Navbar";
import HeroSection from "@/components/lps/proteção-veicular/HeroSection";
import IdentificationSection from "@/components/lps/proteção-veicular/IdentificationSection";
import PainSection from "@/components/lps/proteção-veicular/PainSection";
import TurningPointSection from "@/components/lps/proteção-veicular/TurningPointSection";
import CredibilitySection from "@/components/lps/proteção-veicular/CredibilitySection";
import SocialProofSection from "@/components/lps/proteção-veicular/SocialProofSection";
import FinalCTA from "@/components/lps/proteção-veicular/FinalCTA";

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
