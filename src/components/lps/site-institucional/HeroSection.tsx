"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function HeroSection() {
  const { open } = useQuotationModal();

  return (
    <section className="relative w-full overflow-hidden min-h-[85dvh] lg:min-h-[100dvh] flex items-center">
      {/* 1. BACKGROUND — Video (desktop only) + Static fallback (mobile) */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Desktop: video with lazy loading */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-45 hidden md:block"
        >
          <source src="/lps/site-institucional/video-hero.mp4" type="video/mp4" />
        </video>
        {/* Mobile: static dark gradient (no video download) */}
        <div className="absolute inset-0 block md:hidden bg-gradient-to-br from-[#09090b] via-[#0a1a19] to-[#09090b]" />
        {/* Glow overlay */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-emerald-500/5 blur-[80px] rounded-full z-[1]" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-10 pb-0 md:pt-28 md:pb-20 lg:pt-36 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mt-2 lg:mt-10">

          {/* Coluna de Texto */}
          <div className="flex flex-col text-left gap-8 lg:gap-0 lg:h-[600px] lg:justify-between lg:py-10">


            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-geist font-medium tracking-tighter leading-[1.05]">
              Proteção Veicular <br />
              <span className="text-transparent-bg block mt-2">Inteligente</span>
              <span className="text-white text-4xl md:text-5xl lg:text-[3.5rem] mt-2 block font-normal tracking-tight leading-tight">Para Quem Não Pode Parar.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white font-normal leading-relaxed max-w-xl [animation:animationIn_0.8s_ease-out_0.2s_both]">
              Dirija tranquilo sabendo que você está protegido contra imprevistos, sem burocracia, 100% digital e feito para o seu ritmo.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 [animation:animationIn_0.8s_ease-out_0.3s_both]">
              {/* CTA Principal — abre modal */}
              <button
                onClick={open}
                className="group relative w-full sm:w-auto inline-flex cursor-pointer overflow-hidden font-medium tracking-tight rounded-full px-8 py-4 items-center justify-center text-sm text-[#09090b] font-semibold bg-emerald-400 transition-all duration-500 hover:bg-yellow-400 hover:text-zinc-900 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                  Fazer Simulação
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 rounded-full blur-md group-hover:blur-none text-zinc-900 font-bold">
                  Fazer Simulação
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </button>

              {/* CTA Secundário — também abre modal */}
              <button
                onClick={open}
                className="group relative w-full sm:w-auto inline-flex cursor-pointer overflow-hidden tracking-tight rounded-full px-6 py-3.5 md:px-8 md:py-4 items-center justify-center text-sm text-white font-medium border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-yellow-400 hover:border-yellow-400 hover:text-zinc-900 shadow-none hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                  Falar com um Especialista
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 rounded-full blur-md group-hover:blur-none font-bold">
                  Falar com um Especialista
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </button>
            </div>
          </div>

          {/* Coluna de Glass Cards (Desktop) */}
          <div className="relative h-[600px] w-full hidden lg:flex flex-col items-end justify-between py-10 perspective-[1000px] [animation:animationIn_0.8s_ease-out_0.4s_both]">
            {/* Card 1: Cobertura Total */}
            <div className="relative z-40">
              <div className="glass-card w-[28rem] p-8 will-change-transform animate-float-1" style={{ marginRight: 0 }}>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white">Cobertura Total</h3>
                    <p className="text-lg text-zinc-500">Ativa e monitorando</p>
                  </div>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </div>
                <div className="glass-highlight" />
                <div className="glass-card-border" />
              </div>
            </div>

            {/* Card 2: Assistência 24h */}
            <div className="relative z-30">
              <div className="glass-card w-[26rem] p-8 will-change-transform animate-float-2" style={{ marginRight: 0 }}>
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-5">
                  <span className="text-lg font-medium text-white">Assistência 24h</span>
                  <span className="text-base px-3 py-1.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Online</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-lg bg-[#131316] flex items-center justify-center border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-medium text-white">Guincho solicitado!</div>
                    <div className="text-sm md:text-base text-white mt-1 leading-snug">Utilize o app da Loma para acompanhar o trajeto até você!</div>
                  </div>
                </div>
                <div className="glass-highlight" />
                <div className="glass-card-border" />
              </div>
            </div>

            {/* Card 3: Avaliação */}
            <div className="relative z-20">
              <div className="glass-card w-[24rem] p-8 will-change-transform animate-float-3" style={{ marginRight: 0 }}>
                <div className="flex gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#34d399" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed italic">&quot;Acionei pelo WhatsApp e resolveram tudo em minutos. Excelente experiência.&quot;</p>
                <div className="glass-highlight" />
                <div className="glass-card-border" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
