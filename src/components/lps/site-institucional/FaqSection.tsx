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
    <section id="faq" className="relative w-full py-16 lg:py-32 flex flex-col items-center border-t border-white/5 z-20 bg-transparent">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[30vh] bg-gradient-to-b from-emerald-500/20 to-transparent" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-geist">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-white leading-relaxed max-w-2xl text-center">
            Tire suas dúvidas sobre a proteção veicular da LOMA antes de simular seu plano.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4 mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`group bg-[#131316] border ${activeIndex === i ? "border-emerald-400/30" : "border-white/5 hover:border-white/10"} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                onClick={() => toggleFaq(i)}
              >
                <span className={`text-lg font-medium pr-8 transition-colors ${activeIndex === i ? "text-emerald-400" : "text-white group-hover:text-emerald-400"}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === i ? "rotate-45 bg-emerald-400/10" : "bg-white/5"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeIndex === i ? "#34d399" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: activeIndex === i ? "200px" : "0px", opacity: activeIndex === i ? 1 : 0, paddingBottom: activeIndex === i ? "24px" : "0px" }}
              >
                <div className="p-6 pt-0 text-white leading-relaxed text-base">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col items-center p-8 bg-[#131316]/50 border border-white/5 rounded-3xl w-full max-w-2xl text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          <h3 className="text-xl font-semibold text-white mb-2 font-geist">Ainda ficou com dúvida?</h3>
          <p className="text-white mb-6">Fale com um consultor agora e resolva tudo.</p>
          <button
            onClick={open}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Simular meu plano agora
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
