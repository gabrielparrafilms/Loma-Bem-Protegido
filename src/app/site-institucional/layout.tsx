import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/site-institucional/ScrollAnimationInit";
import FlashlightInit from "@/components/lps/site-institucional/FlashlightInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lps.lomabemprotegido.com.br";

export const metadata: Metadata = {
  title: "LOMA Bem Protegido | Proteção Veicular Inteligente",
  description:
    "Proteção veicular simples, acessível e sem burocracia. Dirija tranquilo com cobertura contra roubo, colisão, eventos naturais e guincho 24h. Até 40% mais econômico.",
  keywords: [
    "proteção veicular",
    "loma",
    "seguro carro",
    "guincho 24h",
    "proteção veicular inteligente",
    "cotação proteção veicular",
    "loma bem protegido",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/site-institucional`,
    title: "LOMA Bem Protegido | Proteção Veicular Inteligente",
    description: "Proteção veicular inteligente, até 40% mais econômica. Sem burocracia, 100% digital.",
    siteName: "LOMA Proteção Veicular",
    images: [
      {
        url: `${baseUrl}/lps/site-institucional/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LOMA Bem Protegido — Proteção Veicular Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOMA Bem Protegido | Proteção Veicular Inteligente",
    description: "Proteção veicular inteligente, até 40% mais econômica.",
    images: [`${baseUrl}/lps/site-institucional/og-image.jpg`],
  },
  alternates: { canonical: `${baseUrl}/site-institucional` },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      {/* ATENÇÃO: QuotationModal DEVE vir após children para sobrepor a página */}
      <QuotationModal />
      <ScrollAnimationInit />
      <FlashlightInit />
    </QuotationModalProvider>
  );
}
