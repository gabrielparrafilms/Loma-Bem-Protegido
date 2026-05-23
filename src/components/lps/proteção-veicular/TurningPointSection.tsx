"use client";

import { CheckCircle2, Truck } from "lucide-react";

export default function TurningPointSection() {
  return (
    <section
      id="a-virada"
      className="relative py-20 md:py-32 px-6 border-b border-white/5 overflow-hidden bg-[#09090b]"
    >
      {/* Background Video Otimizado */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          id="virada-video"
          preload="none"
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_80%] opacity-80"
        >
          {/* O src será injetado via JS apenas quando o usuário chegar perto da seção */}
          <source data-src="/lps/proteção-veicular/videos/polinho.mp4" type="video/mp4" />
        </video>
        {/* Overlays de gradiente para legibilidade do texto e transição suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] from-0% via-transparent via-20% to-[#09090b] to-100%"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <h2 className="text-4xl md:text-5xl font-geist font-medium tracking-tight text-white">
            A LOMA Bem Protegido funciona de um jeito{" "}
            <span className="text-transparent-bg">completamente diferente.</span>
          </h2>

          <div className="text-lg text-white/90 space-y-4">
            <p>Não é seguro. <strong className="text-white">É proteção completa.</strong></p>
            <p>Com regras claras. Com fiscalização do governo federal.</p>
            <p>
              Aqui, não tem quem analisa seu CPF para te aceitar. Não tem quem olha quem estava dirigindo
              na hora. Não tem fila de semanas para ser aprovado.
            </p>
            <p className="text-2xl text-white font-geist font-medium pt-4">Você entra. Fica protegido. Ponto.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          <div className="bg-[#131316] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.05)_0%,transparent_60%)]"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium text-white">Sem análise de crédito</span>
                <span className="ml-auto text-xs font-mono text-white/80 bg-white/5 px-2 py-1 rounded">
                  CPF negativo não impede
                </span>
              </div>
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium text-white">Sem análise de perfil</span>
                <span className="ml-auto text-xs font-mono text-white/80 bg-white/5 px-2 py-1 rounded">
                  Qualquer condutor
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium text-white">Sem fila de espera</span>
                <span className="ml-auto text-xs font-mono text-white/80 bg-white/5 px-2 py-1 rounded">
                  Proteção imediata
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-[#131316] rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden shadow-[0_0_40px_rgba(52,211,153,0.1)] group h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.1)_0%,transparent_60%)] pointer-events-none z-0"></div>

            {/* SVG Snake Strokes (Inner Border) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow Layer */}
              <rect
                x="1"
                y="1"
                rx="23"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                fill="none"
                stroke="#34d399"
                strokeWidth="4"
                strokeDasharray="25 75"
                pathLength="100"
                className="animate-snake blur-[6px] opacity-80"
              />
              {/* Sharp Layer */}
              <rect
                x="1"
                y="1"
                rx="23"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
                strokeDasharray="25 75"
                pathLength="100"
                className="animate-snake"
              />
            </svg>

            {/* Inner Content */}
            <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
              <div className="relative z-10">
                <div className="text-sm text-white/90 mb-1 flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Assistência 24h &amp; Guincho inclusos
                </div>
                <div className="text-3xl font-geist font-medium text-emerald-400">
                  A partir de R$89<span className="text-lg text-emerald-400/60 font-normal">/mês</span>
                </div>
              </div>
              <a
                href="https://lomaprotecao.com.br/cotacao?o=SITE&subO=TRAFEGO&code=C5VCWGWW&utm_source=google&utm_medium=maxconversao&utm_campaign=%7Bcampaignname%7D&utm_term=loma&utm_content=%7Badgroupname%7D&utm_id=22925727481"
                className="group/btn relative shrink-0 inline-flex min-w-[160px] cursor-pointer overflow-hidden font-medium tracking-tight bg-[#09090b]/80 backdrop-blur-md border border-zinc-700/80 hover:border-white rounded-full px-8 py-4 items-center justify-center text-sm text-white/90 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3)] transition-colors duration-300 z-10"
              >
                {/* Revex Hover BG Fill */}
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <span className="w-8 h-8 rounded-full bg-white transition-all duration-700 ease-out scale-0 group-hover/btn:scale-[20] opacity-0 group-hover/btn:opacity-100"></span>
                </span>

                {/* Loma Text Hover Clone */}
                <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/btn:-translate-y-8 group-hover/btn:opacity-0 text-white/90">
                  Simular Agora
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-8 group-hover/btn:translate-y-0 group-hover/btn:opacity-100 opacity-0 rounded-full text-[#09090b] font-bold shadow-sm">
                  Simular Agora
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
