"use client";
import { useState } from "react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const faqItems = [
  { question: "O que é proteção veicular?", answer: "A proteção veicular é um modelo de serviço baseado em cooperativismo ou associativismo, onde os associados dividem os custos de sinistros entre si. Diferente do seguro tradicional, a proteção veicular oferece planos mais acessíveis e sem análise de perfil de risco." },
  { question: "Como funciona a cobertura em caso de sinistro?", answer: "Ao sofrer um sinistro, você aciona a LOMA pelo app ou WhatsApp. Nossa equipe avalia o caso e encaminha para a rede credenciada. O processo é rápido e sem burocracia, com acompanhamento em tempo real." },
  { question: "Existe carência para utilizar os serviços?", answer: "Sim, existe um período de carência que varia de acordo com o tipo de cobertura contratada. Consulte as condições específicas do seu plano com nossos consultores para mais detalhes." },
];

export default function FaqSection() {
  const { open } = useQuotationModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-16 lg:py-32 flex flex-col items-center border-t border-zinc-200 z-20 bg-[#FAFAFA] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Luzes Animadas de Fundo */}
      <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-1" aria-hidden="true" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-2" aria-hidden="true" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-6 font-geist">
            Perguntas frequentes
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl text-center font-medium">
            Entenda como a proteção veicular da LOMA garante a sua tranquilidade. Transparência total para você tomar a melhor decisão agora.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4 mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`group bg-white border ${activeIndex === i ? "border-[#0ABAB5]/40 shadow-md" : "border-zinc-200 hover:border-[#0ABAB5]/30 hover:shadow-sm"} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                onClick={() => toggleFaq(i)}
              >
                <span className={`text-lg md:text-xl font-medium pr-8 transition-colors ${activeIndex === i ? "text-[#0ABAB5]" : "text-zinc-800 group-hover:text-[#0ABAB5]"}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === i ? "rotate-45 bg-[#0ABAB5]/20" : "bg-[#0ABAB5]/10"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ABAB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: activeIndex === i ? "200px" : "0px", opacity: activeIndex === i ? 1 : 0, paddingBottom: activeIndex === i ? "32px" : "0px" }}
              >
                <div className="p-6 md:p-8 pt-0 text-zinc-600 leading-relaxed text-base">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col items-center p-8 md:p-12 bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-3xl text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-geist tracking-tight">Ficou com mais alguma dúvida?</h3>
          <p className="text-zinc-400 mb-8 text-lg">Nossos consultores estão prontos para te ajudar e montar o plano ideal para você.</p>
          <button
            onClick={open}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#0ABAB5] hover:bg-yellow-400 text-zinc-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(10,186,181,0.3)] cursor-pointer tracking-wide uppercase text-sm w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Falar com um Consultor
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
