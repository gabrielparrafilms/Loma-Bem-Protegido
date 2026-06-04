# 🚀 GUIA DEFINITIVO: CRIANDO UMA NOVA LP (REGRA DE OURO)

Este documento é a **régua** e o padrão obrigatório para criar uma nova Landing Page (LP) no projeto **loma-lps**. O não cumprimento destas etapas gerará bugs no funil de cotação, SEO quebrado e animações com falha. Siga **exatamente** o passo a passo abaixo.

---

## 📌 PRÉ-REQUISITOS IMPORTANTES ANTES DE COMEÇAR

1. **CTA sempre abre o Modal:** Nunca redirecione para URLs externas. O objetivo de toda LP é abrir o modal de cotação. Para isso, você **deve** usar o hook `useQuotationModal().open()`.
2. **Tailwind v4:** Não usamos `tailwind.config.ts`. As customizações estão no `globals.css`. Não crie classes geradas dinamicamente via template literals (ex: \`md:\${var}\`). Use sempre strings estáticas completas.
3. **Imagens:** Utilize a tag nativa `<img>` seguida do comentário ` {/* eslint-disable-next-line @next/next/no-img-element */}` para imagens estáticas do projeto. Use o `<Image>` do Next.js apenas quando a otimização automática for estritamente necessária.
4. **Vídeos:** Use a tag nativa `<video>` com as propriedades `autoPlay loop muted playsInline`.

---

## 📂 ETAPA 1: CRIAÇÃO DA PASTA DE ASSETS (PUBLIC)

Antes de escrever qualquer código, crie os diretórios para os recursos visuais da nova LP.

**Ação:**
1. Crie a pasta da LP dentro de public: `public/lps/{slug_da_lp}/`
2. Adicione os arquivos obrigatórios (mínimo exigido):
   - Logo a ser utilizada na Navbar (ex: `logo.svg` ou `logo.webp`).
   - Imagem de Open Graph para SEO: `og-image.jpg` (dimensões obrigatórias: **1200x630px**).
   - Imagens de fundo, vídeos (sempre `.mp4` se for fundo) e ícones específicos da LP.

---

## 🏗️ ETAPA 2: CONFIGURAÇÃO DAS ROTAS E METADADOS (APP ROUTER)

A estrutura de rotas fica na pasta `src/app/`. Cada LP tem sua própria pasta baseada no seu `slug`.

### 2.1. Criar a pasta da Rota
Crie o diretório: `src/app/{slug_da_lp}/`

### 2.2. Criar o `layout.tsx` (Obrigatório)
Crie o arquivo `src/app/{slug_da_lp}/layout.tsx`. Este arquivo é vital para o SEO e para envolver a página no Provider do Modal e Inicializador de Animações.

```tsx
import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/{slug_da_lp}/ScrollAnimationInit";
// import FlashlightInit from "@/components/lps/{slug_da_lp}/FlashlightInit"; // DESCOMENTE SE USAR O EFEITO FLASHLIGHT (luz do mouse)
import { ReactNode } from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lps.lomabemprotegido.com.br";

export const metadata: Metadata = {
  title: "Título Chamativo da LP | LOMA Proteção Veicular",
  description: "Descrição estratégica para SEO e redes sociais (máximo 160 caracteres).",
  keywords: ["proteção veicular", "loma", "cotação", /* adicione termos específicos */],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/{slug_da_lp}`,
    title: "Título Chamativo da LP",
    description: "Descrição estratégica para SEO (até 120 caracteres).",
    siteName: "LOMA Proteção Veicular",
    images: [{ url: `${baseUrl}/lps/{slug_da_lp}/og-image.jpg`, width: 1200, height: 630, alt: "LOMA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Título Chamativo da LP",
    description: "Descrição curta.",
    images: [`${baseUrl}/lps/{slug_da_lp}/og-image.jpg`],
  },
  alternates: { canonical: `${baseUrl}/{slug_da_lp}` },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      {/* ATENÇÃO: QuotationModal DEVE vir após children para sobrepor a página */}
      <QuotationModal />
      <ScrollAnimationInit />
      {/* <FlashlightInit /> */}
    </QuotationModalProvider>
  );
}
```
*(Dica: Se a config de metadata ficar muito extensa, extraia para um arquivo `metadata.ts` na mesma pasta).*

---

## 🧩 ETAPA 3: CRIAÇÃO DOS COMPONENTES DA LP (COMPONENTS)

Todos os componentes visuais e lógicos específicos desta página (Hero, Seções, Navbar) devem ficar isolados.

**Ação:** Crie o diretório: `src/components/lps/{slug_da_lp}/`

### 3.1. Inicializador de Animação (`ScrollAnimationInit.tsx`)
Copie e crie exatamente o arquivo abaixo em `src/components/lps/{slug_da_lp}/ScrollAnimationInit.tsx`. Ele escuta as classes `animate-on-scroll` e dispara as animações quando o elemento entra na tela do usuário.

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Não altere essas margens sem motivo forte
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
```

### 3.2. Padrão OBRIGATÓRIO para criar as Seções
Sempre que for criar um arquivo como `HeroSection.tsx`, `BenefitsSection.tsx` ou `Navbar.tsx`, atente-se às regras a seguir:
1. O arquivo precisa começar com `"use client";` se você for usar o modal ou estado local (`useState`, `useEffect`). Se a seção for apenas visual, omita o `"use client"` para tirar proveito do Server Components.
2. Elementos de background decorativo devem usar `pointer-events-none` e possuir `aria-hidden="true"`.
3. Extraia **listas/arrays de dados estáticos** (como um array de cards, features, depoimentos) para fora do componente para otimização do render.
4. Animações por scroll utilizam a classe: `animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]`. Ajuste o delay (`0.2s`, `0.4s`) para criar efeito cascata.

**Exemplo de Arquitetura de Seção (`HeroSection.tsx`):**
```tsx
"use client"; // Necessário por conta do Modal
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

// Dados visuais extraídos para fora do componente
const beneficios = [
  { id: 1, titulo: "Sem análise de crédito" },
  { id: 2, titulo: "Ativação Rápida" }
];

export default function HeroSection() {
  const { open } = useQuotationModal();

  return (
    <section className="relative w-full overflow-hidden min-h-[100dvh] flex items-center">
      {/* 1. BACKGROUND (sempre pointer-events-none e z-0) */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Troca de fundo baseada no dispositivo via Tailwind */}
        <div className="absolute inset-0 hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('/lps/{slug_da_lp}/bg-desktop.jpg')" }} />
        <div className="absolute inset-0 block md:hidden bg-cover bg-center" style={{ backgroundImage: "url('/lps/{slug_da_lp}/bg-mobile.jpg')" }} />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Animação direta sem trigger de scroll para o Hero (pois já abre visível) */}
        <h1 className="text-4xl font-bold [animation:animationIn_0.8s_ease-out_0s_both]">
          Título Principal
        </h1>
        
        {/* 3. CTA ABRINDO O MODAL (Nunca href externo) */}
        <button 
          onClick={open} 
          className="mt-6 rounded-full px-8 py-3 bg-[#0ABAB5] text-white font-bold [animation:animationIn_0.8s_ease-out_0.2s_both] hover:scale-105 transition-transform"
        >
          Simular Agora
        </button>
      </div>
    </section>
  );
}
```

---

## 📄 ETAPA 4: MONTAGEM DA PÁGINA (PAGE.TSX)

Agora você precisa conectar todas as seções. Volte para `src/app/{slug_da_lp}/` e crie o arquivo `page.tsx`.

```tsx
import Navbar from "@/components/lps/{slug_da_lp}/Navbar";
import HeroSection from "@/components/lps/{slug_da_lp}/HeroSection";
// ... Importe as outras seções
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#09090b]"> {/* Substituir a cor base dependendo se o tema for claro ou escuro */}
      <Navbar />
      <HeroSection />
      {/* ... Inclua todas as seções criadas aqui ... */}
      
      {/* Se a seção anterior for de fundo claro, envolva o footer numa div escura, pois o Footer espera fundo escuro */}
      <div className="bg-[#0f0f13]">
        <Footer />
      </div>
    </main>
  );
}
```

---

## ⚙️ ETAPA 5: REGISTRO DA LP E INJEÇÃO NO SITEMAP (CRÍTICO)

A LP existe no código, mas o sistema precisa saber dela e o Google também.

### 5.1. Registrar no `config`
Abra o arquivo `src/config/lps.ts` e adicione o objeto representando sua LP:
```tsx
{
  slug: "{slug_da_lp}",
  name: "Nome da Nova LP",
  description: "Descrição sobre o objetivo desta LP.",
  ctaType: "modal",
  active: true,
  sharedComponents: ["QuotationModal", "AnalyticsWrapper"],
},
```

### 5.2. Adicionar ao Sitemap (SEO)
Abra o arquivo `src/app/sitemap.ts` e adicione no array retornado a nova URL:
```tsx
{
  url: `${baseUrl}/{slug_da_lp}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8, // 1.0 = Home, 0.9 = LPs fixas, 0.7 = LPs temporárias
},
```

---

## 🧪 ETAPA 6: CHECKLIST FINAL E VALIDAÇÃO DE BUILD

Antes de comitar o código, revise estes pontos obrigatórios de acessibilidade e performance:

- [ ] **Elementos Interativos:** Todos os botões usam a tag `<button>`. **NENHUM** `<div role="button">` foi utilizado.
- [ ] **Acessibilidade de Imagem:** Todas as imagens/conteúdos puramente visuais e decorativos possuem `aria-hidden="true"`.
- [ ] **Foco Visual:** Não inclua `outline-none` que destrua a borda padrão de teclado para acessibilidade (`focus-visible`).
- [ ] **Contraste de Cores:** Garantido que textos escuros ou pretos estão sobre fundos claros, e textos brancos sobre fundos escuros (O tiffany `#0ABAB5` em fundo branco **falha** na validação de contraste WCAG, use-o com cautela em textos).
- [ ] **Build Check:** Rode o comando `npm run build` localmente e garanta que ele acabe sem erros e que a rota `/{slug_da_lp}` apareça gerada como `○` (estática).

Se todos os passos estiverem com um "check", a sua nova LP está robusta, performática e pronta para o projeto Loma! 🚀
