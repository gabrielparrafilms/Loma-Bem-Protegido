import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/maio-amarelo/ScrollAnimationInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://proposta.lomaprotecao.com.br";

export const metadata: Metadata = {
  title: "Maio Amarelo — Proteção Veicular a partir de R$89,90",
  description: "Nesse Maio Amarelo, a LOMA garante sua proteção no trânsito com condições imperdíveis. Sem análise de crédito. Simule agora.",
  keywords: ["maio amarelo", "proteção veicular", "segurança no trânsito", "loma proteção", "cotação online"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/maio-amarelo`,
    title: "Maio Amarelo — Proteção Veicular LOMA",
    description: "Nesse Maio Amarelo, proteja seu veículo a partir de R$89,90/mês. Sem análise de crédito. Simule agora.",
    siteName: "LOMA Proteção Veicular",
    images: [{ url: `${baseUrl}/lps/maio-amarelo/Capa Web 2.jpg`, width: 1200, height: 630, alt: "LOMA Maio Amarelo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maio Amarelo — Proteção Veicular LOMA",
    description: "Proteção completa a partir de R$89,90/mês. Sem análise de crédito.",
    images: [`${baseUrl}/lps/maio-amarelo/Capa Web 2.jpg`],
  },
  alternates: { canonical: `${baseUrl}/maio-amarelo` },
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
