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
      {/* WRAPPER DAS DUAS DOBRAS CLARAS (Credibilidade + Prova Social) */}
      <div className="w-full bg-[#f8f9fa] relative z-20 overflow-hidden border-b border-gray-200">
        {/* Fundo: Grid & Luzes Flutuantes compartilhado */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
          <div className="absolute w-[40rem] h-[40rem] bg-[#0ABAB5]/10 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-70 top-1/4 left-1/4" style={{ animationDuration: "8s" }}></div>
          <div className="absolute w-[50rem] h-[50rem] bg-gray-200/50 blur-[150px] rounded-full animate-pulse mix-blend-multiply opacity-80 bottom-1/4 right-1/4" style={{ animationDuration: "12s", animationDelay: "2s" }}></div>
        </div>
        <CredibilitySection />
        <SocialProofSection />
      </div>
      <FinalCTA />
    </main>
  );
}
