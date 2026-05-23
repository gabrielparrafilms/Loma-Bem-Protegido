import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/maio-amarelo/ScrollAnimationInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maio Amarelo — Proteção Veicular a partir de R$89,90",
  description: "Nesse Maio Amarelo, a LOMA garante sua proteção no trânsito com condições imperdíveis. Sem análise de crédito. Simule agora.",
};

export default function MaioAmareloLayout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />
      <ScrollAnimationInit />
    </QuotationModalProvider>
  );
}
