"use client";

import { ShieldCheck, XOctagon, Check, X, Star, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const rows = [
  { loma: "Sem análise de crédito", tradicional: "Análise de crédito rigorosa" },
  { loma: "Condutor livre", tradicional: "Análise do condutor" },
  { loma: "Sem burocracia de CEP", tradicional: "Análise e recusa por CEP" },
  { loma: "Ativação em menos de 24h", tradicional: "Semanas para ativar" },
  { loma: "A partir de R$ 129,00", tradicional: "Mensalidades a partir de R$400+" },
  { loma: "Aceita negativados", tradicional: "Negados com CPF restrito" },
];

export default function ComparisonSection() {
  const { open } = useQuotationModal();

  return (
    <section className="w-full relative bg-gradient-to-b from-white to-[#f4f7f8] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(10,186,181,0.08)_0%,transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      <div className="pt-10 md:pt-32 pb-10 md:pb-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-geist font-medium text-zinc-900 mb-6 tracking-tight">
            Você já tentou cotar<br />seguro para o seu carro?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Se sim, sabe o que encontrou: análise de crédito, do perfil, do CEP... E no final, uma
            mensalidade que pesa ou uma negativa. Veja a diferença na prática:
          </p>
        </div>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] rounded-[2rem] max-w-4xl mx-auto relative overflow-hidden h-full z-10 p-1">
          {/* LOMA side highlight — desktop only */}
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-[#0ABAB5]/[0.05] border-r border-[#0ABAB5]/20 pointer-events-none z-0" />
          <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full border-l-[4px] border-[#0ABAB5] rounded-l-[2rem] pointer-events-none z-10 shadow-[-10px_0_30px_rgba(10,186,181,0.15)]" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#0ABAB5]/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="rounded-[1.4rem] p-6 md:p-10 relative z-10">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 mb-10 items-center text-center md:text-left border-b border-gray-200 pb-8 relative">
              <div className="flex flex-col items-center md:items-start relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0ABAB5] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-[0_4px_10px_rgba(10,186,181,0.3)] hidden md:inline-flex">
                  <Star className="w-3 h-3 fill-current" />
                  Recomendado
                </div>
                <h3 className="text-2xl md:text-[28px] font-sans font-bold text-zinc-950 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0ABAB5] flex items-center justify-center shadow-[0_0_20px_rgba(10,186,181,0.4)] shrink-0 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-[2px]" />
                    <ShieldCheck className="text-white w-6 h-6 relative z-10" />
                  </div>
                  LOMA Bem Protegido
                </h3>
              </div>
              <div className="hidden md:flex text-zinc-300 font-bold text-sm uppercase tracking-widest px-8">VS</div>
              <div className="flex flex-col items-center md:items-end justify-center h-full mt-2 md:mt-0">
                <div className="h-[24px] mb-3 hidden md:block" />
                <h3 className="text-xl md:text-2xl font-sans font-semibold text-zinc-600 flex items-center gap-3">
                  Seguro Tradicional
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shrink-0">
                    <XOctagon className="text-red-400 w-5 h-5" />
                  </div>
                </h3>
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col relative">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center py-5 md:py-4 relative group gap-3 md:gap-6 border-b border-gray-100 last:border-0"
                >
                  {/* LOMA side */}
                  <div className="flex items-center gap-3 md:gap-4 md:w-[45%] relative z-10 transition-transform duration-300 md:group-hover:translate-x-1 bg-[#0ABAB5]/[0.06] md:bg-transparent p-2.5 md:p-0 -ml-2 md:ml-0 rounded-2xl md:rounded-none border border-[#0ABAB5]/10 md:border-transparent">
                    <div className="w-7 h-7 rounded-full bg-[#0ABAB5] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(10,186,181,0.3)] group-hover:scale-110 transition-all duration-300">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <span className="text-zinc-950 font-bold font-sans text-[15px] md:text-base group-hover:text-[#0ABAB5] transition-colors">
                      {row.loma}
                    </span>
                  </div>

                  {/* VS badge */}
                  <div className="flex items-center gap-4 md:w-[10%] md:justify-center relative z-10">
                    <div className="w-7 shrink-0 md:hidden" />
                    <span className="text-[10px] text-zinc-400 font-bold uppercase bg-gray-50/80 backdrop-blur-sm px-2 py-1 rounded">vs</span>
                  </div>

                  {/* Tradicional side */}
                  <div className="flex items-center gap-4 md:w-[45%] md:justify-end relative z-10">
                    <div className="w-7 flex justify-center shrink-0 md:hidden">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-zinc-500 font-medium font-sans text-[14px] md:text-[15px] md:text-right">
                      {row.tradicional}
                    </span>
                    <X className="w-4 h-4 text-red-400 shrink-0 hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] text-center mt-12 flex justify-center w-full">
          <button
            onClick={open}
            className="group relative inline-flex min-w-[280px] cursor-pointer transition-all duration-500 overflow-hidden font-medium tracking-tight bg-[#0ABAB5] border border-[#0ABAB5] rounded-full px-8 py-4 items-center justify-center text-lg text-white animate-cta-pulse"
          >
            <span className="relative z-10 flex items-center gap-2">
              Quero me proteger agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
