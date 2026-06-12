"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const features = [
  {
    num: "01",
    title: "2ª Via de Boleto",
    desc: "Acesse sua fatura e resolva tudo em segundos, direto pelo app.",
    cta: "Acessar Fatura",
    image: "/lps/site-institucional/Via Boleto - Web.webp",
  },
  {
    num: "02",
    title: "Solicitação de Guincho",
    desc: "Acione o guincho com poucos toques e acompanhe a chegada em tempo real.",
    cta: "Acionar Guincho",
    image: "/lps/site-institucional/Soli Guincho - Web.webp",
  },
  {
    num: "03",
    title: "Status de Eventos",
    desc: "Veja o andamento do seu atendimento e tenha total controle do processo.",
    cta: "Acompanhar Status",
    image: "/lps/site-institucional/Eventos - Web.webp",
  },
];

const rotatingWords = ["ligação.", "espera.", "dor de cabeça."];

export default function AppFeaturesSection() {
  const { open } = useQuotationModal();
  const [activeCard, setActiveCard] = useState(0);
  const [wordIndex, setWordIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="app-features" className="w-full bg-[#FAFAFA] py-20 lg:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-6 mb-16 max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-900 uppercase">
              &bull; APP EXCLUSIVO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-medium tracking-tighter leading-[1.1] text-zinc-900">
            Sua proteção resolvida em <span className="text-[#0ABAB5]">segundos.</span>
          </h2>
          <div className="text-lg md:text-xl text-zinc-600 font-normal leading-relaxed flex flex-col items-center">
            
            <div className="flex items-center justify-center gap-2 h-[120px] overflow-hidden relative w-full max-w-sm">
              {/* Degradês para suavizar o topo e o fundo criando a ilusão de roda */}
              <div className="absolute inset-x-0 top-0 h-[35px] bg-gradient-to-b from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-[35px] bg-gradient-to-t from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

              <span className="text-zinc-900 font-semibold z-20">Sem</span>
              
              <div className="relative w-[150px] h-[40px] flex items-center">
                <AnimatePresence>
                  {[-1, 0, 1].map((offset) => {
                    const idx = wordIndex + offset;
                    if (idx < 0) return null;
                    const word = rotatingWords[idx % rotatingWords.length];
                    const isPast = offset < 0;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ y: 80, opacity: 0, rotateX: -45, scale: 0.85 }}
                        animate={{
                          y: offset * 40,
                          opacity: offset === 0 ? 1 : 0.25,
                          scale: offset === 0 ? 1 : 0.85,
                          rotateX: offset === 0 ? 0 : isPast ? 45 : -45,
                        }}
                        exit={{ y: -80, opacity: 0, rotateX: 45, scale: 0.85 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-0 h-[40px] flex items-center font-bold text-[#0ABAB5] whitespace-nowrap min-w-[140px]"
                        style={{ transformPerspective: 400, transformOrigin: isPast ? "bottom" : "top" }}
                      >
                        {word}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <p className="-mt-2 max-w-2xl text-center mx-auto">
              Acesse sua 2ª via de boleto, solicite guincho e acompanhe seus eventos direto pelo app. Mais autonomia para você, menos espera no atendimento.
            </p>
          </div>
        </div>

        {/* Interactive Accordion Container */}
        <div className="bg-zinc-100 rounded-[2rem] p-4 flex flex-col lg:flex-row lg:overflow-hidden gap-4 w-full lg:h-[500px]">
          {features.map((feat, i) => {
            const isActive = activeCard === i;
            return (
              <div
                key={feat.num}
                onMouseEnter={() => setActiveCard(i)}
                onClick={() => setActiveCard(i)}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-white border flex flex-col cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-full h-auto lg:h-full lg:shrink-1 ${
                  isActive ? "border-[#0ABAB5]/30 shadow-xl lg:w-[60%] lg:flex-none" : "border-zinc-200 hover:border-zinc-300 lg:w-[20%] lg:flex-none"
                }`}
              >
                {/* INACTIVE STATE CONTENT (Desktop Only) */}
                <div className={`hidden lg:flex absolute inset-0 p-6 flex-col items-start justify-between transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-200"}`}>
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#0ABAB5] font-medium text-lg shrink-0 z-10">
                    {feat.num}
                  </div>
                  <div className="absolute bottom-6 left-6 w-12 h-[300px] pointer-events-none">
                    <h3 className="absolute bottom-0 left-3 origin-bottom-left -rotate-90 whitespace-nowrap text-xl font-geist font-medium text-zinc-500 tracking-tight">
                      {feat.title}
                    </h3>
                  </div>
                </div>

                {/* ACTIVE STATE CONTENT (Always visible on mobile) */}
                <div className={`p-5 lg:p-8 flex flex-col lg:flex-row items-center gap-5 lg:gap-8 h-full transition-opacity duration-500 ${isActive ? "lg:opacity-100 lg:delay-200" : "lg:opacity-0 lg:pointer-events-none lg:absolute lg:inset-0"}`}>
                  {/* Text Header (Esquerda) */}
                  <div className="flex-1 flex flex-col justify-center items-center lg:items-start h-full w-full lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 w-full">
                      <div className="w-8 h-8 rounded-lg bg-[#0ABAB5]/10 flex items-center justify-center text-[#0ABAB5] font-medium text-sm shrink-0">
                        {feat.num}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-geist font-medium text-zinc-900 tracking-tight whitespace-nowrap">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-center lg:text-left text-zinc-600 leading-relaxed max-w-sm mb-6 lg:mb-8">
                      {feat.desc}
                    </p>
                    <button
                      onClick={(e) => { e.stopPropagation(); open(); }}
                      className="w-fit inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-[#0ABAB5] font-semibold text-sm transition-all hover:bg-zinc-800"
                    >
                      {feat.cta}
                    </button>
                  </div>

                  {/* Image/Mockup Area (Direita) */}
                  <div className="flex-none h-[180px] lg:flex-1 lg:h-full w-full lg:w-1/2 rounded-2xl bg-zinc-50 border border-zinc-100 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={feat.image} alt={feat.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
