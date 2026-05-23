import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://loma.com.br";

export const metadata: Metadata = {
  title: "LOMA — Proteção Veicular Inteligente",
  description:
    "Proteção completa para seu veículo a partir de R$ 89/mês. Sem análise de crédito, sem burocracia. Cotação online em segundos.",
  keywords: [
    "proteção veicular",
    "seguro auto",
    "cotação online",
    "loma proteção",
    "proteção carro",
    "proteção moto",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/protecao-veicular`,
    title: "LOMA — Proteção Veicular Inteligente",
    description: "Proteção completa para seu veículo a partir de R$ 89/mês. Sem análise de crédito.",
    siteName: "LOMA Proteção Veicular",
    images: [
      {
        url: `${baseUrl}/lps/protecao-veicular/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LOMA Proteção Veicular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOMA — Proteção Veicular Inteligente",
    description: "Proteção completa para seu veículo a partir de R$ 89/mês.",
    images: [`${baseUrl}/lps/protecao-veicular/og-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/protecao-veicular`,
  },
};
