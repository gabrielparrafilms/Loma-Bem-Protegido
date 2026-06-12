"use client";

import { Lock } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function FinalCTASection() {
  const { open } = useQuotationModal();

  return (
    <section className="py-20 md:py-40 px-6 w-full text-center relative overflow-hidden bg-[#09090b]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('/lps/proposta-racional/img.jpg')",
          filter: "contrast(1.1) saturate(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/30 backdrop-blur-[1px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,186,181,0.2)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-geist font-medium tracking-tighter leading-[1.05] text-white mb-6">
          Simule agora.<br />Leva menos de 2 minutos.
        </h2>

        <p className="text-lg text-white/90 mb-12 max-w-2xl mt-4 leading-relaxed font-medium">
          Informe o modelo do seu carro. Um consultor da LOMA envia sua cotação diretamente no
          WhatsApp sem análise de crédito, sem compromisso de contratação.
        </p>

        <button
          onClick={open}
          className="group relative inline-flex w-full sm:w-auto min-w-[320px] cursor-pointer overflow-hidden font-semibold bg-[#25D366] rounded-full px-10 py-5 items-center justify-center text-lg text-white transition-all duration-300 animate-whatsapp-pulse"
        >
          <span className="relative z-10 flex items-center gap-3">
            Quero simular minha proteção
          </span>
        </button>

        <p className="text-sm text-white/70 mt-6 flex items-center gap-2 font-medium">
          <Lock className="w-4 h-4" /> Sem spam. Só a cotação do seu carro.
        </p>
      </div>
    </section>
  );
}
