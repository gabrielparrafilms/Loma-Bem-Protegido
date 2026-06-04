# 🏗️ ARQUITETURA PADRÃO: CRIAÇÃO DE PROJETOS E LPs (TEMPLATE UNIVERSAL)

Este documento é um **template universal de instruções**. Ele serve como base arquitetural para **qualquer novo projeto** de Landing Pages (Next.js). Quando você iniciar um projeto do zero em outra conversa ou repositório, basta fornecer este arquivo para a IA, e ela saberá exatamente como estruturar as pastas, os componentes e as regras do seu padrão de trabalho.

---

## 📁 1. ESTRUTURA DE PASTAS (O PADRÃO ABSOLUTO)

Toda vez que o projeto for inicializado ou uma nova LP for criada, a seguinte estrutura de pastas deve ser respeitada rigorosamente:

```text
meu-projeto/
├── public/
│   └── lps/
│       └── {slug-da-lp}/         <-- Salvar TODAS as imagens, vídeos e assets específicos desta LP aqui.
│
├── src/
│   ├── app/
│   │   └── {slug-da-lp}/         <-- Roteamento (App Router). Salvar aqui o `page.tsx` e o `layout.tsx` (com Metadados de SEO).
│   │
│   ├── components/
│   │   ├── lps/
│   │   │   └── {slug-da-lp}/     <-- Salvar aqui TODAS as seções da página (HeroSection, Navbar, Footer, etc.).
│   │   │
│   │   ├── shared/               <-- Salvar componentes reutilizáveis entre várias LPs (Modais, Botões customizados).
│   │   └── ui/                   <-- Componentes base de interface (Inputs, Spinners, etc).
│   │
│   ├── config/                   <-- Salvar arquivos de configuração (ex: lista de LPs ativas, URLs base).
│   │
│   ├── lib/                      <-- Salvar funções utilitárias (ex: máscara de telefone, inicializadores de Pixel/GTM).
│   │
│   ├── services/                 <-- Salvar as integrações com APIs (Fetch, chamadas de formulário, webhooks).
│   │
│   └── types/                    <-- Salvar as tipagens TypeScript (interfaces globais).
```

---

## 🚀 2. PASSO A PASSO PARA CRIAR UMA NOVA LP NESTA ARQUITETURA

Ao solicitar a criação de uma LP, a IA ou o desenvolvedor **deve executar o seguinte fluxo de trabalho na ordem exata**:

### Etapa 1: Preparar os Assets
- Criar a pasta `public/lps/{slug-da-lp}/`.
- Garantir que exista uma imagem base para SEO (ex: `og-image.jpg` com 1200x630px).

### Etapa 2: Criar as Rotas e Metadados
- Criar `src/app/{slug-da-lp}/layout.tsx`: 
  - Este arquivo deve conter os **Metadados Completos** de SEO (Title, Description, OpenGraph, Canonical).
  - É aqui que devem ser injetados os Providers globais (ex: Contexto do Modal) e os wrappers que envolvem a página.
- Criar `src/app/{slug-da-lp}/page.tsx`:
  - O arquivo `page.tsx` serve APENAS para empilhar os componentes. Não deve conter lógica complexa de UI.

### Etapa 3: Criar os Componentes (Seções)
- Criar a pasta `src/components/lps/{slug-da-lp}/`.
- Criar um arquivo para cada bloco da tela (ex: `HeroSection.tsx`, `BenefitsSection.tsx`, `FAQSection.tsx`).
- **Regra de Composição:** Elementos decorativos (fundo, texturas) devem ficar absolutos com `z-0` e `pointer-events-none`. O conteúdo fica relativo com `z-10`.

### Etapa 4: Configuração e Deploy
- Se houver uma pasta `src/config/`, registrar a nova rota nos arquivos de configuração do projeto.
- Atualizar o arquivo `sitemap.ts` (se existir) para garantir a indexação da nova LP no Google.

---

## 🧠 3. REGRAS DE CÓDIGO E BOAS PRÁTICAS GERAIS

Sempre que gerar código para este projeto, aplique as seguintes premissas:

1. **Responsividade Integrada:** Desenvolva com abordagem "Mobile-First". Crie o layout pensando primeiro no celular e adicione breakpoints (`md:`, `lg:`) para telas maiores.
2. **Server Components vs Client Components:**
   - Componentes visuais puramente estáticos **NÃO** devem ter `"use client"`.
   - Adicione `"use client"` apenas nos componentes que usam hooks (`useState`, `useEffect`) ou interações do usuário (ex: um botão que abre um modal, um formulário de clique).
3. **Imagens e Vídeos:**
   - Para imagens estáticas do projeto, use a tag nativa `<img>` acompanhada de comentário eslint para não acusar erro no Next.js (`{/* eslint-disable-next-line @next/next/no-img-element */}`).
   - Para vídeos de fundo automáticos, use `<video autoPlay loop muted playsInline>`.
4. **Extração de Dados:** Arrays estáticos de informações (ex: lista de perguntas frequentes, lista de cards) devem ser declarados **fora** da função principal do componente React para evitar recriação desnecessária a cada renderização.
5. **Acessibilidade Base:**
   - Botões de ação devem ser tags `<button>`. Jamais utilize `<div role="button">`.
   - Elementos decorativos puramente visuais devem possuir o atributo `aria-hidden="true"`.
