@AGENTS.md

# CLAUDE.md — loma-lps

Documentação completa do projeto Next.js principal da LOMA Proteção Veicular.  
Leia este arquivo por inteiro antes de fazer qualquer alteração.

---

## 1. Contexto do Produto

**LOMA Proteção Veicular** é uma empresa brasileira de proteção veicular coletiva (não é seguro tradicional — é associação coletiva). Sede em Jundiaí/SP, no mercado desde 2016. O produto principal é um plano mensal de proteção para carros, motos e caminhões sem análise de crédito.

**Objetivo de todas as LPs:** converter visitantes em leads que abrem o funil de cotação (modal interno). Todo CTA deve abrir o modal — nunca redirecionar para URL externa.

---

## 2. Stack Técnica

| Item | Versão / Detalhe |
|---|---|
| Next.js | 16.2.6 — App Router, Turbopack, sem `pages/` |
| React | 19 |
| TypeScript | 5 — strict mode |
| Tailwind CSS | v4 — `@import "tailwindcss"` em `globals.css`, **sem** `tailwind.config.ts` |
| Framer Motion | Animações do QuotationModal (`motion`, `AnimatePresence`, `LazyMotion`) |
| Lucide React | Ícones (`import { NomeDoIcone } from "lucide-react"`) |
| Fontes | Poppins, Inter, Geist, Manrope — carregadas via `next/font/google` no RootLayout |

### Particularidades do Tailwind v4

- **Não existe `tailwind.config.ts`** — configuração vai dentro de `globals.css` no bloco `@theme { }`
- **Não aceita classes geradas dinamicamente.** Template literals como `` `md:${variavel}` `` não funcionam — o purger não detecta. Sempre usar strings estáticas completas.
- **Variantes arbitrárias** funcionam normalmente: `[animation:animationIn_0.8s_ease-out_0.2s_both]`, `hover:[animation-play-state:paused]`

---

## 3. Comandos

```bash
npm run dev      # servidor de desenvolvimento (porta padrão 3000)
npm run build    # build de produção — valida TypeScript + CSS + gera rotas estáticas
npm run lint     # ESLint
```

> **Obrigatório:** rodar `npm run build` após qualquer alteração estrutural. O build deve terminar sem erros.

---

## 4. Estrutura de Pastas

```
loma-lps/
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # RootLayout: fontes, GTM noscript, AnalyticsWrapper
│   │   ├── globals.css                  # Tailwind v4 + TODAS as animações customizadas
│   │   ├── page.tsx                     # Rota raiz — placeholder
│   │   │
│   │   ├── protecao-veicular/
│   │   │   ├── layout.tsx               # QuotationModalProvider + QuotationModal + ScrollAnimationInit
│   │   │   ├── metadata.ts              # Metadata Next.js separada (title, og, twitter, canonical)
│   │   │   └── page.tsx                 # Monta as seções em ordem
│   │   │
│   │   ├── maio-amarelo/
│   │   │   ├── layout.tsx               # QuotationModalProvider + QuotationModal + ScrollAnimationInit
│   │   │   └── page.tsx
│   │   │
│   │   ├── proposta-racional/
│   │   │   ├── layout.tsx               # QuotationModalProvider + QuotationModal + ScrollAnimationInit + FlashlightInit
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                         # Proxy routes — isolam a API do frontend
│   │       ├── quotations/route.ts      # POST — cria cotação
│   │       ├── quotations/[id]/route.ts # GET — busca cotação por ID
│   │       ├── vehicles/brands/         # GET marcas de veículos
│   │       ├── vehicles/models/         # GET modelos por marca
│   │       ├── vehicles/years/          # GET anos por modelo
│   │       ├── vehicles/groups/         # GET grupos de veículos
│   │       ├── vehicles/decode/         # GET decodificação por placa (FIPE)
│   │       └── location/decode/         # GET endereço por CEP
│   │
│   ├── components/
│   │   ├── lps/
│   │   │   ├── protecao-veicular/       # Navbar, HeroSection, IdentificationSection, PainSection,
│   │   │   │                            # TurningPointSection, CredibilitySection, SocialProofSection,
│   │   │   │                            # FinalCTA, ScrollAnimationInit
│   │   │   │
│   │   │   ├── maio-amarelo/            # Navbar, HeroSection, BenefitsSection, SpecialOfferSection,
│   │   │   │                            # InstitutionalSection, FeedbacksSection, FAQSection,
│   │   │   │                            # ScrollAnimationInit
│   │   │   │
│   │   │   └── proposta-racional/       # Navbar, HeroSection, ComparisonSection, CostSection,
│   │   │                                # ObjectionsSection, FeaturesSection, CredibilitySection,
│   │   │                                # SocialProofSection, FinalCTASection,
│   │   │                                # FlashlightInit
│   │   │
│   │   ├── quotation/
│   │   │   ├── Quotation.tsx            # Orquestrador do funil multi-step
│   │   │   └── steps/                   # VehicleTypeSelect → InitialData → PlateOrManual →
│   │   │                                # PlateAndUsage → VehicleConfirmation → VehicleSelection →
│   │   │                                # Location → Qualification → Success
│   │   │
│   │   ├── shared/
│   │   │   ├── QuotationModal/
│   │   │   │   ├── index.tsx            # Componente do modal (Framer Motion)
│   │   │   │   ├── context.tsx          # QuotationModalProvider + useQuotationModal hook
│   │   │   │   └── types.ts             # QuotationModalContextType
│   │   │   ├── Footer.tsx               # Rodapé compartilhado (tema escuro, logos sociais)
│   │   │   └── analytics/
│   │   │       ├── AnalyticsWrapper.tsx # Inicializa GTM + Pixel via URL params
│   │   │       └── FacebookPixel.tsx    # Componente de pixel
│   │   │
│   │   └── ui/
│   │       ├── Choice.tsx               # Botão de escolha estilizado (usado nos steps)
│   │       ├── Combobox.tsx             # Combobox com busca (seleção de veículo)
│   │       └── loader/
│   │           ├── Loader.tsx           # Spinner
│   │           └── PageTransition.tsx   # Transição de página
│   │
│   ├── config/
│   │   └── lps.ts                       # Registro de LPs — slug, nome, ctaType, active
│   │
│   ├── services/
│   │   ├── quotationService.ts          # Fetch para API externa (veículos, cotação, CEP)
│   │   └── pageControlService.ts        # Configuração remota de steps por ?mode=
│   │
│   ├── types/
│   │   ├── quotation.ts                 # QuotationData, QuotationOrder, VehicleType, etc.
│   │   └── page-control.ts              # PageConfigurationStep, QuotationStepName
│   │
│   └── lib/
│       ├── fpixel.ts                    # Wrapper Facebook Pixel (track, pageview)
│       └── phone.ts                     # Formatação/validação de telefone BR
│
├── public/
│   ├── logo_loma.webp                   # Logo principal usada no Footer
│   ├── botao_instagram.svg              # Ícones de redes sociais do Footer
│   ├── botao_facebook.svg
│   ├── botao_youtube.svg
│   └── lps/
│       ├── protecao-veicular/
│       │   ├── logo-loma.svg            # Logo branca usada na Navbar
│       │   ├── images/                  # img.jpg, img 2.jpg, img 3.png, nota 1.png,
│       │   │                            # nota 2.png, PLANOS.jpg, Planos.png
│       │   └── videos/                  # video-hero.mp4, polinho.mp4
│       │
│       ├── maio-amarelo/
│       │   ├── Logo Loma Branca.svg     # Logo usada na Navbar e InstitutionalSection
│       │   ├── Capa Web 2.jpg           # Hero background desktop
│       │   ├── Capa Mobile 4.jpg        # Hero background mobile
│       │   ├── dobra-4.png              # Imagem central da InstitutionalSection
│       │   ├── img-3-dobra.jpg          # Background desktop da SpecialOfferSection
│       │   ├── img-3-dobra-mobile.jpg   # Background mobile da SpecialOfferSection
│       │   ├── car_card_bg.png          # Card carro na BenefitsSection
│       │   ├── moto_card_bg.png         # Card moto na BenefitsSection
│       │   └── van_card_bg.png          # Card caminhão na BenefitsSection
│       │
│       └── proposta-racional/
│           ├── polinho.mp4              # Vídeo bg do HeroSection
│           ├── video beneficios.mp4     # Vídeo bg do FeaturesSection
│           └── img.jpg                  # Imagem parallax do FinalCTASection
│
├── next.config.ts                       # Redirects UTM, remotePatterns, optimizeCss
└── .env.local                           # Variáveis de ambiente (ver seção 5)
```

---

## 5. Variáveis de Ambiente

```env
NEXT_PUBLIC_BASE_URL=          # URL base do app (ex: https://lps.lomabemprotegido.com.br)
NEXT_PUBLIC_GTM_ID=            # ID Google Tag Manager (ex: GTM-XXXXXXX)
NEXT_PUBLIC_PIXEL_ID=          # ID Facebook Pixel
NEXT_PUBLIC_API_URL=           # URL da API NestJS (ex: https://service-hml.buildercrm.com.br)
NEXT_PUBLIC_CRM_WEBHOOK_URL=   # Webhook CRM para envio de leads
```

---

## 6. Sistema de Modal de Cotação

O modal é o **único mecanismo de CTA** em todo o projeto. Nunca usar iframes, nunca abrir URLs externas para cotação.

### Fluxo completo

```
[Usuário clica em CTA]
    ↓
useQuotationModal().open()
    ↓
QuotationModalContext: isOpen = true
    ↓
<QuotationModal /> renderiza via AnimatePresence (Framer Motion)
  ├── Backdrop: fixed, blur(6px), bg-black/72
  └── Container: max-w-[580px], rounded-[40px], bg-[#f8fafc]
          ↓
      <Quotation /> — orquestrador multi-step
```

### Como usar o modal em qualquer componente

```tsx
"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function MinhaSecao() {
  const { open } = useQuotationModal();
  
  return (
    <button onClick={open}>
      Simular agora
    </button>
  );
}
```

> O componente **obrigatoriamente** precisa ter `"use client"` para usar o hook.

### Pré-requisitos no layout.tsx da LP

```tsx
import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";

export default function Layout({ children }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />   {/* deve vir depois de children */}
    </QuotationModalProvider>
  );
}
```

### Steps do funil de cotação

```
VehicleTypeSelect → InitialData → PlateOrManual → PlateAndUsage
→ VehicleConfirmation (se placa decodificada)
→ VehicleSelection (se manual)
→ Location → Qualification → Success
```

A ordem dos steps pode ser customizada remotamente via `pageControlService` usando o parâmetro `?mode=` na URL. Cada step recebe `{ data, updateData, onNext }`.

---

## 7. Sistema de Animações

Todos os keyframes e classes utilitárias estão em `src/app/globals.css`. Não criar CSS inline para animações — adicionar em `globals.css` e usar via classe.

### animate-on-scroll (padrão para seções)

Elementos com `animate-on-scroll` ficam com `animation-play-state: paused` e `opacity: 0` até entrar na viewport. O `ScrollAnimationInit` (IntersectionObserver) adiciona a classe `.animate` que ativa a animação.

**Uso:**
```tsx
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
  Conteúdo animado
</div>
```

O número após `ease-out` é o **delay em segundos**. Elementos mais abaixo na seção devem ter delay maior para criar efeito cascata:
```tsx
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">    {/* aparece primeiro */}
<p  className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">  {/* 200ms depois */}
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]"> {/* 400ms depois */}
```

**O keyframe `animationIn`:** `opacity 0→1`, `translateY 30px→0`, `blur 8px→0`

### Animações de hero (sem scroll trigger)

Para a seção hero — que já está visível no carregamento — usar animação direta sem `animate-on-scroll`:

**Opção 1 — CSS puro (maio-amarelo, proposta-racional):**
```tsx
<h1 className="[animation:animationIn_0.8s_ease-out_0.1s_both]">
```

**Opção 2 — Framer Motion (protecao-veicular):**
```tsx
import { motion } from "framer-motion";

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
>
```

### Tabela completa de animações disponíveis

| Classe CSS | Descrição | LP que usa |
|---|---|---|
| `animate-on-scroll` | Base para entrada com scroll | Todas |
| `[animation:animationIn_...]` | Entrada suave (opacidade + Y + blur) | Todas |
| `animate-heartbeat` | Pulso scale 1→1.04→1 em CTAs | Maio Amarelo |
| `animate-cta-pulse` | Pulso tiffany em CTAs (scale + glow) | Proposta Racional |
| `animate-whatsapp-pulse` | Pulso verde em CTA WhatsApp | Proposta Racional |
| `animate-pulse-scale` | Scale 1→1.03, card destaque | Proposta Racional |
| `loma-glow-card` | Pulso de glow tiffany em card | Proposta Racional |
| `animate-float-1/2/3/4` | Flutuação suave em pills | Maio Amarelo |
| `animate-marquee-h-45` | Marquee horizontal esquerda 45s | Maio Amarelo |
| `animate-marquee-h-reverse-40` | Marquee horizontal direita 40s | Maio Amarelo |
| `animate-marquee-up` | Marquee vertical subindo 35s | Proposta Racional |
| `animate-marquee-down` | Marquee vertical descendo 35s | Proposta Racional |
| `animate-marquee-v` | Marquee vertical subindo 40s | Proteção Veicular |
| `animate-marquee-v-reverse` | Marquee vertical descendo 45s | Proteção Veicular |
| `pause-on-hover` | Pausa marquee no hover | Proteção Veicular |
| `glass-card` | Glassmorphism escuro (rgba + backdrop-filter) | Proposta Racional |
| `flashlight-card` | Card com holofote no cursor | Proposta Racional |
| `flashlight-border` | Borda gradiente do holofote | Proposta Racional |
| `text-tiffany-gradient` | Gradiente branco→tiffany em texto | Proposta Racional |
| `text-transparent-bg` | Texto com textura animada | Proteção Veicular |
| `text-transparent-gradient` | Gradiente animado branco→cinza | Proteção Veicular |
| `.font-geist` | `font-family: var(--font-geist)` | Proposta Racional, Proteção Veicular |
| `.font-manrope` | `font-family: var(--font-manrope)` | Maio Amarelo |

### FlashlightInit — efeito holofote

Componente `"use client"` que escuta `mousemove` globalmente e define as CSS vars `--mouse-x` / `--mouse-y` em cada `.flashlight-card` da página. O CSS usa essas vars para criar um gradiente radial que segue o cursor.

Deve estar no `layout.tsx` de qualquer LP que use `.flashlight-card`:

```tsx
import FlashlightInit from "@/components/lps/{slug}/FlashlightInit";

export default function Layout({ children }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />
      <ScrollAnimationInit />
      <FlashlightInit />   {/* ← adicionar quando usar flashlight-card */}
    </QuotationModalProvider>
  );
}
```

---

## 8. Padrões de Código

### Componente de seção — estrutura padrão

```tsx
"use client";  // ← obrigatório se usar hooks (useQuotationModal, useState, etc.)
               // ← omitir se for componente puramente estático (Server Component)

import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function NomeDaSecao() {
  const { open } = useQuotationModal();

  return (
    <section className="..." id="nome-ancora">
      {/* Decoração de fundo — sempre pointer-events-none e z-0 */}
      <div className="absolute inset-0 ... pointer-events-none" aria-hidden="true" />

      {/* Conteúdo principal — z relativo acima do fundo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 ...">
        <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
          Título
        </h2>

        <button onClick={open} className="...">
          CTA
        </button>
      </div>
    </section>
  );
}
```

### Regras de componente

- **`"use client"`** apenas quando necessário (hooks, event handlers, `useEffect`). Componentes puramente estáticos são Server Components por padrão.
- **Sem comentários explicativos** no código. Apenas comentar o WHY quando não óbvio (ex: workaround de bug específico).
- **Sem `console.log`** no código entregue.
- **Imagens estáticas** do projeto: usar `<img>` com comentário `{/* eslint-disable-next-line @next/next/no-img-element */}`. Usar `<Image>` do Next.js apenas quando necessário otimização automática.
- **Vídeos**: usar tag `<video>` com `autoPlay loop muted playsInline`.

### Dados estáticos de uma seção

Extrair arrays de dados para fora do componente (no topo do arquivo, antes da função), não dentro:

```tsx
// ✅ correto — fora do componente
const features = [
  { icon: ShieldCheck, title: "Sem análise de crédito", text: "..." },
  { icon: Zap, title: "Ativação rápida", text: "..." },
];

export default function FeaturesSection() {
  // ✅ array não recriado em cada render
  return features.map(...);
}
```

### Paleta de cores por LP

| LP | Primária | Texto escuro | Fundo | Acento |
|---|---|---|---|---|
| protecao-veicular | `#0ABAB5` (tiffany) | `#09090b` | `#09090b` | `#FACC15` (amarelo hover) |
| proposta-racional | `#0ABAB5` (tiffany) | `#09090b` | `#09090b` | `#25D366` (WhatsApp) |
| maio-amarelo | `#F5B800` / `#FAB600` (amarelo) | `#18181b` | branco / `#fbf2d2` | `#6C14DF` (roxo — preço) |

### Tipografia por LP

| LP | Título | Corpo | Especial |
|---|---|---|---|
| protecao-veicular | `font-geist` | `font-[family-name:var(--font-inter)]` | — |
| proposta-racional | `font-geist` | padrão Inter | — |
| maio-amarelo | `font-manrope` | `font-[family-name:var(--font-inter)]` | — |

---

## 9. Cada LP em Detalhe

### /protecao-veicular

**Tema:** escuro total. `bg-[#09090b]`, texto branco, tiffany `#0ABAB5` como cor de ação.

**Seções em ordem:**
1. `Navbar` — fixa, tiffany bg, hover amarelo com efeito revex (bolinha expand)
2. `HeroSection` — `min-h-[100dvh]`, vídeo bg `video-hero.mp4`, `motion.h1` com Framer Motion, h1 com fundo texturizado vermelho
3. `IdentificationSection` — identifica a persona ("você usa o carro para trabalhar?")
4. `PainSection` — mostra os custos dos imprevistos
5. `TurningPointSection` — virada: LOMA como solução
6. `CredibilitySection` — stats: 2016, 15MM, Milhares (envolvida num wrapper claro)
7. `SocialProofSection` — depoimentos em marquee vertical 3 colunas (envolvida no mesmo wrapper claro)
8. `FinalCTA` — inclui `<Footer />` dentro de si; bg `PLANOS.jpg` com `bg-fixed`

**Wrapper especial no page.tsx:** `CredibilitySection` e `SocialProofSection` são envolvidas em `<div className="bg-[#f8f9fa]">` com grid sutil e luzes flutuantes para contraste com as seções escuras ao redor.

**Metadata:** separada em `metadata.ts` (title, description, og, twitter, canonical).

**Assets:** `public/lps/protecao-veicular/`

---

### /maio-amarelo

**Tema:** claro/amarelo. Fundo branco/creme, amarelo `#F5B800` como cor principal.

**Seções em ordem:**
1. `Navbar` — fixa, transparente → glassmorphism escuro após 50px de scroll, CTA amarelo
2. `HeroSection` — imagem bg com troca desktop/mobile via dois `<div>` absolutos (`hidden md:block` / `block md:hidden`), animações diretas no CSS (sem scroll trigger no hero), preço em roxo `#6C14DF`
3. `BenefitsSection` — coluna texto + 3 cards de produto (carro/moto/caminhão), card moto destacado em amarelo
4. `SpecialOfferSection` — imagem bg desktop/mobile, card branco com oferta especial, preço em roxo
5. `InstitutionalSection` — fundo creme `#fbf2d2`, imagem central `dobra-4.png`, 4 pills flutuantes com `animate-float-1/2/3/4`
6. `FeedbacksSection` — fundo claro, 2 tracks de marquee horizontal (esq/dir), cards escuros `#111111`
7. `FAQSection` — accordion com `useState<number | null>`, ícone +/× rotaciona 45°
8. `Footer` — envolto em `<div className="bg-[#0f0f13]">` no page.tsx (Footer tem texto branco, assume fundo escuro)

**Troca de imagem hero (padrão a replicar):**
```tsx
{/* Desktop */}
<div
  className="absolute inset-0 hidden md:block bg-cover bg-right"
  style={{ backgroundImage: "url('/lps/maio-amarelo/Capa Web 2.jpg')" }}
/>
{/* Mobile */}
<div
  className="absolute inset-0 block md:hidden bg-cover bg-center bg-bottom"
  style={{ backgroundImage: "url('/lps/maio-amarelo/Capa Mobile 4.jpg')" }}
/>
```

**Assets:** `public/lps/maio-amarelo/`

---

### /proposta-racional

**Tema:** escuro total igual protecao-veicular, mas com tiffany mais presente e CTA final em WhatsApp verde.

**Seções em ordem:**
1. `Navbar` — sempre glassmorphism (sem transição de scroll), CTA tiffany
2. `HeroSection` — vídeo bg `polinho.mp4`, `opacity-40 mix-blend-screen`, h1 com `.text-tiffany-gradient`, `animate-cta-pulse` no CTA
3. `ComparisonSection` — fundo claro, tabela LOMA vs Seguro Tradicional, 6 linhas, destaque tiffany no lado LOMA
4. `CostSection` — fundo escuro, grid 4 cards (3 vermelhos + 1 tiffany destacado), `animate-pulse-scale` no card LOMA
5. `ObjectionsSection` — fundo claro, 2 cards brancos respondendo objeções
6. `FeaturesSection` — vídeo bg `video beneficios.mp4`, 8 `glass-card` features em grid 4 colunas
7. `CredibilitySection` — fundo claro `#f8fafc`, 3 cards de stats com glow tiffany no hover
8. `SocialProofSection` — escuro, 3 colunas marquee vertical (up/down/up), 35s cada, `.marquee-col:hover` pausa
9. `FinalCTASection` — `img.jpg` com `bg-fixed`, radial tiffany, CTA `#25D366` com `animate-whatsapp-pulse`
10. `Footer` — direto no page.tsx (sem wrapper de cor pois já está em contexto escuro)

**FlashlightInit:** obrigatório no `layout.tsx` desta LP. Sem ele, as `.flashlight-card` não reagem ao cursor.

**Assets:** `public/lps/proposta-racional/`

---

## 10. Guia: Como Criar uma Nova LP

Siga exatamente estes passos. Nenhum pode ser pulado.

### Passo 1 — Criar a pasta de assets

```bash
mkdir -p public/lps/{slug}/
# Copiar imagens, vídeos, logos para esta pasta
```

### Passo 2 — Criar o layout.tsx

Caminho: `src/app/{slug}/layout.tsx`

```tsx
import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/{slug}/ScrollAnimationInit";
import { ReactNode } from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://loma.com.br";

export const metadata: Metadata = {
  title: "Título da LP | LOMA Proteção Veicular",
  description: "Descrição para SEO e redes sociais (até 160 caracteres).",
  keywords: ["proteção veicular", "loma proteção", /* termos específicos da LP */],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/{slug}`,
    title: "Título da LP",
    description: "Descrição curta para compartilhamento (até 120 caracteres).",
    siteName: "LOMA Proteção Veicular",
    images: [{ url: `${baseUrl}/lps/{slug}/og-image.jpg`, width: 1200, height: 630, alt: "LOMA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Título da LP",
    description: "Descrição curta.",
    images: [`${baseUrl}/lps/{slug}/og-image.jpg`],
  },
  alternates: { canonical: `${baseUrl}/{slug}` },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />
      <ScrollAnimationInit />
      {/* Adicionar <FlashlightInit /> aqui se a LP usar .flashlight-card */}
    </QuotationModalProvider>
  );
}
```

> Se a metadata for muito extensa, extrair para `metadata.ts` separado e reexportar no `layout.tsx` ou `page.tsx`.
>
> A imagem og-image.jpg deve ter **1200×630px** e estar em `public/lps/{slug}/`.

### Passo 3 — Criar o ScrollAnimationInit

Caminho: `src/components/lps/{slug}/ScrollAnimationInit.tsx`

```tsx
"use client";
import { useEffect } from "react";

export default function ScrollAnimationInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
```

> Copiar este arquivo exatamente — não alterar o threshold sem motivo claro.

### Passo 4 — Criar o FlashlightInit (opcional)

Somente se a LP usar `.flashlight-card`. Caminho: `src/components/lps/{slug}/FlashlightInit.tsx`

```tsx
"use client";
import { useEffect } from "react";

export default function FlashlightInit() {
  useEffect(() => {
    let ticking = false;
    const handler = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.querySelectorAll<HTMLElement>(".flashlight-card").forEach((card) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    document.addEventListener("mousemove", handler, { passive: true });
    return () => document.removeEventListener("mousemove", handler);
  }, []);
  return null;
}
```

### Passo 5 — Criar o Navbar

Caminho: `src/components/lps/{slug}/Navbar.tsx`

```tsx
"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function Navbar() {
  const { open } = useQuotationModal();

  return (
    <header className="fixed flex px-6 md:px-12 z-50 py-5 top-0 w-full items-center justify-between backdrop-blur-md bg-zinc-900/80 border-b border-white/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <a href="#">
        <img src="/lps/{slug}/logo.svg" alt="LOMA" className="h-6 w-auto" />
      </a>
      <button onClick={open} className="... rounded-full px-6 py-2.5 ...">
        Simular Agora
      </button>
    </header>
  );
}
```

### Passo 6 — Criar as seções

Uma seção por arquivo em `src/components/lps/{slug}/`. Padrão mínimo:

```tsx
"use client";  // remover se não usar hooks
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function NomeDaSecao() {
  const { open } = useQuotationModal();

  return (
    <section className="w-full relative overflow-hidden" id="ancora">
      {/* fundo decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
          <h2>Título da seção</h2>
        </div>

        {/* CTA — sempre abre modal */}
        <button onClick={open} className="... rounded-full ...">
          Texto do CTA
        </button>
      </div>
    </section>
  );
}
```

### Passo 7 — Criar o page.tsx

Caminho: `src/app/{slug}/page.tsx`

```tsx
import Navbar from "@/components/lps/{slug}/Navbar";
import HeroSection from "@/components/lps/{slug}/HeroSection";
// ... demais seções
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#09090b]">  {/* ou branco, dependendo do tema */}
      <Navbar />
      <HeroSection />
      {/* ... demais seções */}
      <div className="bg-[#0f0f13]">  {/* wrapper necessário se o Footer vier após seção clara */}
        <Footer />
      </div>
    </main>
  );
}
```

> Se houver seções de tema claro seguidas de seções de tema escuro, pode ser necessário um `<div>` wrapper com `bg` explícito para evitar sangramento de cores.

### Passo 8 — Registrar no config

Arquivo: `src/config/lps.ts`

```tsx
{
  slug: "{slug}",
  name: "Nome da LP",
  description: "Descrição do objetivo da LP",
  ctaType: "modal",
  active: true,
  sharedComponents: ["QuotationModal", "AnalyticsWrapper"],
},
```

### Passo 9 — Adicionar ao sitemap

Arquivo: `src/app/sitemap.ts` — adicionar a nova LP ao array:

```ts
{
  url: `${baseUrl}/{slug}`,
  lastModified: new Date(),
  changeFrequency: "weekly",   // ou "monthly" para LPs sazonais
  priority: 0.8,               // 1.0 = LP principal, 0.9 = variantes perenes, 0.7 = sazonais
},
```

### Passo 10 — Testar

```bash
npm run build   # deve listar a nova rota em Route (app)
```

Verificar no output do build que `/{slug}` aparece como rota estática `○`, e que `/sitemap.xml` e `/robots.txt` continuam listados.

---

## 11. Redirects UTM

Configurados em `next.config.ts`. Funcionam sem alterar código das LPs.

```
/{lp}/{fonte}  →  /{lp}?utm_source={fonte}
/{fonte}        →  /protecao-veicular?utm_source={fonte}   (fallback)
```

Fontes válidas: `whatsapp`, `youtube`, `facebook`, `tik-tok`, `instagram`, `google`.

Para adicionar uma nova fonte: editar a string `sources` em `next.config.ts`:

```ts
const sources = 'whatsapp|youtube|facebook|tik-tok|instagram|google|novafonte'
```

---

## 12. Padrões de SEO e Acessibilidade

### SEO

**Infraestrutura (não alterar sem motivo):**
- `src/app/robots.ts` — gera `/robots.txt` automaticamente. Bloqueia `/api/` e `/_next/`. Aponta para o sitemap.
- `src/app/sitemap.ts` — gera `/sitemap.xml` com todas as LPs. **Obrigatório adicionar cada nova LP aqui.**

**Por LP:**
- Toda LP deve ter `title`, `description`, `keywords`, `openGraph` completo (locale, url, siteName, image 1200×630), `twitter card` e `alternates.canonical`.
- O campo `title` deve ser o título da página, não o template. O template `"%s | LOMA Proteção Veicular"` é aplicado automaticamente pelo RootLayout.
- `NEXT_PUBLIC_BASE_URL` é a fonte da URL canônica — nunca hardcodar `https://loma.com.br` diretamente nos layouts.

### Acessibilidade

**Foco por teclado:**
- `:focus-visible` já está definido globalmente em `globals.css` com outline tiffany. Não remover nem sobrescrever com `outline-none` em elementos interativos — usar `focus:outline-none` apenas em inputs onde o foco é visualmente indicado por `focus:border-*`.

**Botões e elementos interativos:**
- Usar `<button>` para ações, `<a href>` para navegação. **Nunca usar `<div role="button">`** — isso exige suporte manual a Enter, Space e focus, que é difícil de manter correto.
- Todo `<button>` deve ter texto visível ou `aria-label` descritivo.
- Elementos decorativos (divs de fundo, SVGs de ornamento, vídeos bg) devem ter `aria-hidden="true"`.

**Formulários:**
- Todo `<input>` deve ter um `<label>` associado via `htmlFor` + `id`. Usar `className="sr-only"` quando o label visual seria redundante com o placeholder.
- Adicionar `autoComplete` nos inputs de dados pessoais (`name`, `tel-national`, `postal-code`).

**Contraste:**
- Tiffany `#0ABAB5` em fundo branco tem contraste 3.65:1 — **abaixo do mínimo WCAG AA (4.5:1) para texto normal**. Evitar usar tiffany como cor de texto em fundos claros. Para texto em fundo claro, preferir `#087F7B` (tiffany escuro) ou texto preto/cinza escuro.
- Tiffany em fundo escuro (`#09090b`) e branco em fundo tiffany são seguros.

---

## 13. Regras Que Não Podem Ser Quebradas

1. **Nunca usar iframe para cotação.** O modal usa `<Quotation />` interno.
2. **Nunca criar arquivos de config com URLs externas** de cotação. O endpoint fica em `quotationService.ts`.
3. **Tailwind v4 — nunca gerar classes dinamicamente** via template literal. Sempre strings estáticas completas.
4. **Todo CTA abre o modal** — `onClick={open}`. Nunca `href` para URL de cotação externa.
5. **`npm run build` deve passar sem erros** antes de qualquer commit ou entrega.
6. **Fidelidade ao original** ao migrar LP legada — mesmas cores, fontes, espaçamentos, copy e animações. Sem "melhorias" não solicitadas.
7. **Sem comentários que explicam o que o código faz.** Comentar apenas o porquê quando não for óbvio.
8. **Sem features extras** além do que foi pedido. YAGNI (You Aren't Gonna Need It).
9. **Toda nova LP deve ter OpenGraph completo e ser adicionada ao `sitemap.ts`.** Ver seção 12.
10. **Nunca usar `<div role="button">`** — usar `<button>` nativo.
