import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/maio-amarelo/ScrollAnimationInit";
import FlashlightInit from "@/components/lps/proposta-racional/FlashlightInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://proposta.lomaprotecao.com.br";

export const metadata: Metadata = {
  title: "LOMA Proposta Racional e Econômica — Proteção Veicular a partir de R$129/mês",
  description: "Enquanto o seguro tradicional cobra caro, a LOMA protege milhares de brasileiros com cobertura completa, assistência 24h e atendimento humano. No mercado desde 2016.",
  keywords: ["proteção veicular", "alternativa ao seguro", "proteção carro barato", "loma proteção", "proteção veicular econômica"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/proposta-racional`,
    title: "LOMA — Proteção Veicular Econômica",
    description: "Enquanto o seguro cobra caro, a LOMA protege com cobertura completa a partir de R$129/mês. Assistência 24h inclusa.",
    siteName: "LOMA Proteção Veicular",
    images: [{ url: `${baseUrl}/lps/proposta-racional/img.jpg`, width: 1200, height: 630, alt: "LOMA Proposta Racional" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOMA — Proteção Veicular Econômica",
    description: "Cobertura completa a partir de R$129/mês. Sem análise de crédito.",
    images: [`${baseUrl}/lps/proposta-racional/img.jpg`],
  },
  alternates: { canonical: `${baseUrl}/proposta-racional` },
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
