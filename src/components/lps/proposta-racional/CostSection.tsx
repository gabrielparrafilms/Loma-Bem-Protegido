"use client";

import { ShieldCheck, Check } from "lucide-react";

const badCards = [
  { label: "Batida pequena", value: "R$2.800", sub: "funilaria média" },
  { label: "Furto parcial", value: "R$4.500", sub: "retrovisores, rodas" },
  { label: "Colisão séria", value: "R$12k+", sub: "custo médio" },
];

export default function CostSection() {
  return (
    <section className="w-full relative bg-[#09090b] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#0ABAB5]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />

      <div className="pt-10 md:pt-16 pb-16 md:pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-geist font-medium text-white mb-6 tracking-tight">
            Quanto custa{" "}
            <span className="text-red-500">não ter proteção?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            Esses não são números de catástrofe. São situações comuns, que acontecem toda semana. Sem
            proteção, você paga tudo no bolso de uma vez, quando menos espera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {badCards.map((card, i) => (
            <div
              key={i}
              className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] bg-[#131316] border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[1.5rem] p-6 md:p-8 flex flex-col h-full min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,186,181,0.05)] hover:border-white/10 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">{card.label}</div>
              <div className="flex-grow flex items-center mt-2">
                <div className="text-4xl md:text-[2.75rem] font-geist font-bold text-red-500 leading-none tracking-tighter">
                  {card.value}
                </div>
              </div>
              <div className="text-sm text-zinc-400 font-medium mt-4 pt-4 border-t border-white/5">{card.sub}</div>
            </div>
          ))}

          {/* LOMA featured card */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate-pulse-scale h-full relative z-30 lg:scale-[1.08] lg:-translate-y-2 origin-bottom">
            {/* Radiant glow behind card */}
            <div className="absolute -inset-1 bg-[#0ABAB5]/30 blur-2xl rounded-[2rem] z-0 pointer-events-none hidden lg:block" />
            <div className="bg-gradient-to-b from-[#09090b] to-[#121618] border-2 border-[#0ABAB5] shadow-[0_30px_60px_rgba(10,186,181,0.25)] rounded-[1.5rem] p-6 md:p-8 flex flex-col h-full min-h-[220px] relative overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ABAB5]/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0ABAB5]/15 rounded-full blur-[50px] pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start gap-2">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0ABAB5] flex items-center gap-2 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 shrink-0" /> Proteção LOMA
                </div>
                <span className="bg-[#0ABAB5] text-[#09090b] text-[9px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(10,186,181,0.5)] whitespace-nowrap shrink-0">
                  A Solução
                </span>
              </div>

              <div className="relative z-10 flex-grow flex items-center mt-2">
                <div className="text-5xl md:text-[3.5rem] font-geist font-bold text-white leading-none tracking-tighter drop-shadow-md">
                  R$129<span className="text-xl font-medium text-[#0ABAB5] tracking-normal ml-1">/mês</span>
                </div>
              </div>

              <div className="relative z-10 text-sm font-medium mt-4 pt-4 border-t border-[#0ABAB5]/20 flex items-center justify-between">
                <span className="text-white drop-shadow-sm text-[13px]">Resolve tudo isso e mais.</span>
                <div className="w-6 h-6 rounded-full bg-[#0ABAB5] flex items-center justify-center shadow-[0_0_10px_rgba(10,186,181,0.5)]">
                  <Check className="w-4 h-4 text-[#09090b]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] text-center mt-16">
          <p className="text-xl text-white font-medium">A matemática é simples. A decisão também.</p>
        </div>
      </div>
    </section>
  );
}
