"use client";

import { ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function HeroSection() {
  const { open } = useQuotationModal();

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center w-full relative border-b border-white/5 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 mix-blend-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/lps/proposta-racional/polinho.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-transparent to-[#09090b] z-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8 pt-32 pb-10 md:pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-geist font-medium tracking-tighter leading-[1.05] text-white animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]"
        >
          Proteção para o seu carro{" "}
          <br className="hidden md:block" />
          <span className="text-tiffany-gradient">a partir de R$129/mês.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mt-2 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          Enquanto o seguro tradicional cobra caro, quando aceita, a LOMA protege milhares de
          brasileiros com cobertura completa, assistência 24h e atendimento humano.{" "}
          <strong className="text-white">No mercado desde 2016.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
          <button
            onClick={open}
            className="group relative inline-flex cursor-pointer overflow-hidden font-medium bg-[#0ABAB5] rounded-full px-8 py-4 items-center justify-center text-white transition-all duration-300 animate-cta-pulse"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Simular meu plano
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="text-xs text-zinc-500 mt-2 sm:mt-0 sm:ml-4">
            Sem análise de crédito.<br />Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
