export type LP = {
  slug: string;
  name: string;
  description: string;
  ctaType: "modal" | "link";
  destination?: string;
  active: boolean;
  sharedComponents: string[];
};

export const lpsConfig: LP[] = [
  {
    slug: "protecao-veicular",
    name: "Proteção Veicular Inteligente",
    description: "LP principal da LOMA com vídeo hero e funil de cotação via modal",
    ctaType: "modal",
    active: true,
    sharedComponents: ["QuotationModal", "AnalyticsWrapper"],
  },
  {
    slug: "proposta-racional",
    name: "Proposta Racional e Econômica",
    description: "LP focada em argumentação racional de custo-benefício",
    ctaType: "modal",
    active: false,
    sharedComponents: ["QuotationModal", "AnalyticsWrapper"],
  },
  {
    slug: "maio-amarelo",
    name: "Campanha Maio Amarelo",
    description: "LP sazonal da campanha Maio Amarelo",
    ctaType: "modal",
    active: false,
    sharedComponents: ["QuotationModal", "AnalyticsWrapper"],
  },
];
