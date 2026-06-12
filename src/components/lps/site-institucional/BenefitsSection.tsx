"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function BenefitsSection() {
  const { open } = useQuotationModal();

  return (
    <section id="benefits" className="relative overflow-hidden w-full bg-[#FAFAFA] py-20 lg:py-32 border-t border-zinc-200">
      {/* Luzes Animadas de Fundo */}
      <div className="absolute -top-[10%] -left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-1" aria-hidden="true" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-2" aria-hidden="true" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-geist font-medium tracking-tighter leading-[1.05] text-zinc-900">
              Você não precisa de seguradora.<br />
              <span className="text-[#0ABAB5]">Precisa de proteção de verdade.</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-sm mb-2">
            Proteção veicular simples, acessível e sem burocracia, feita para quem quer dirigir tranquilo todos os dias.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card 1: O que é a LOMA? */}
            <div className="bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 hover:border-[#0ABAB5]/40 transition-colors rounded-3xl flex-1 p-8 md:p-12 relative overflow-hidden min-h-[300px] group">
              <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/lps/site-institucional/img_bloco_2.jpg')" }} aria-hidden="true" />
              
              <div className="relative z-10 max-w-sm flex flex-col h-full justify-center">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#0ABAB5] shadow-lg mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-geist font-medium tracking-tight text-zinc-900 mb-4">O que é a LOMA?</h3>
                <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                  Proteção veicular baseada em um fundo coletivo. Os associados compartilham os custos de forma justa, sem lucro abusivo de seguradoras.
                </p>
              </div>
            </div>

            {/* Grid Inferior */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 2: Como funciona? */}
              <div className="bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 hover:border-[#0ABAB5]/40 transition-colors rounded-3xl p-8 relative">
                <h3 className="text-xl font-geist font-medium tracking-tight text-zinc-900 mb-4">Como funciona?</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Você paga uma mensalidade fixa. Se acontecer algum imprevisto, o fundo cobre o prejuízo.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                    Sem análise de perfil.
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                    Sem SPC/Serasa.
                  </div>
                </div>
              </div>

              {/* Destaque Extra */}
              <div className="bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 hover:border-[#0ABAB5]/40 transition-colors rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="text-5xl md:text-6xl font-geist font-medium text-[#0ABAB5] tracking-tighter mb-2">-40%</div>
                <p className="text-zinc-600 text-sm leading-relaxed relative z-10 font-medium">Até 40% mais econômico que seguro tradicional</p>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0ABAB5]/20 blur-[50px] rounded-full pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Coluna Direita: Por que escolher a LOMA? */}
          <div className="lg:col-span-5">
            <div className="bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 hover:border-[#0ABAB5]/40 transition-colors rounded-3xl h-full p-8 md:p-12 relative flex flex-col">
              <h3 className="text-3xl md:text-4xl font-geist font-medium tracking-tight text-zinc-900 mb-6">Por que escolher a LOMA?</h3>
              <p className="text-zinc-600 leading-relaxed mb-10 text-lg">Mais proteção, menos custo e sem burocracia.</p>

              <div className="flex flex-col gap-5 flex-1">
                {[
                  { icon: <path d="M18 6 6 18"/>, iconPath2: <path d="m6 6 12 12"/>, label: "Sem bancos ou intermediários" },
                  { icon: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>, iconPath2: <line x1="4" y1="4" x2="20" y2="20"/>, label: "Sem taxas escondidas" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}{item.iconPath2}</svg>
                    </div>
                    <span className="text-zinc-700 text-base font-medium">{item.label}</span>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#0ABAB5] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <span className="text-zinc-700 text-base font-medium">Proteção focada no veículo</span>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={open}
                  className="group relative inline-flex w-full sm:w-auto cursor-pointer overflow-hidden font-bold tracking-widest rounded-full px-8 py-4 items-center justify-center text-xs text-[#0ABAB5] bg-zinc-900 transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02] shadow-xl shadow-zinc-900/10 uppercase"
                >
                  <span className="relative z-10 flex items-center gap-2 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                    Fazer simulação
                  </span>
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none font-bold">
                    Fazer simulação
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
