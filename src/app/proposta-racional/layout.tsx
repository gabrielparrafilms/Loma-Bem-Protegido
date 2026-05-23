import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/maio-amarelo/ScrollAnimationInit";
import FlashlightInit from "@/components/lps/proposta-racional/FlashlightInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOMA Proposta Racional e Econômica — Proteção Veicular a partir de R$129/mês",
  description: "Enquanto o seguro tradicional cobra caro, a LOMA protege milhares de brasileiros com cobertura completa, assistência 24h e atendimento humano. No mercado desde 2016.",
};

export default function PropostaRacionalLayout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />
      <ScrollAnimationInit />
      <FlashlightInit />
    </QuotationModalProvider>
  );
}
