"use client";

import { motion } from "framer-motion";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function HeroSection() {
  const { open } = useQuotationModal();

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center py-20 px-6 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Video Full */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-zinc-900">
        <video
          id="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen will-change-[transform,opacity] [transform:translateZ(0)] [backface-visibility:hidden]"
          aria-hidden="true"
        >
          <source src="/lps/proteção-veicular/videos/video-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlays para leitura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/60 via-[#09090b]/40 to-[#09090b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)]" />
      </div>

      {/* Content Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8 pt-10">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-geist font-medium tracking-tighter leading-[1.05] relative z-20"
        >
          Bater o carro, ou ficar sem por alguns dias...
          <br />
          <span
            id="hero-part-3"
            className="relative inline-block mt-2 text-transparent-bg font-geist font-medium"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ef4444 0%, rgba(239,68,68,0.5) 50%, #ef4444 100%), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')",
            }}
          >
            Faz sua renda ir junto!
          </span>
        </motion.h1>

        <motion.p
          id="hero-paragraph"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl"
        >
          <strong className="text-white">A não ser que você esteja protegido hoje.</strong>
          <br />
          <br />
          Dezenas de milhares de brasileiros que dependem do carro para trabalhar já garantiram a nossa
          proteção: sem análise de crédito, sem análise de perfil.
          <br />
          <br />
          <span id="price-emphasis" className="block mt-2 text-2xl text-emerald-400 font-medium">
            Planos a partir de R$89/mês.
          </span>
        </motion.p>

        <motion.div
          id="hero-cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mt-4"
        >
          <button
            id="hero-cta"
            onClick={open}
            className="group relative inline-flex min-w-[200px] cursor-pointer overflow-hidden font-medium tracking-tight bg-[#09090b]/80 backdrop-blur-md border border-zinc-700/80 hover:border-white rounded-full px-8 py-4 items-center justify-center text-sm text-white/90 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            {/* Revex Hover BG Fill (DS10 White) */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <span className="w-8 h-8 rounded-full bg-white transition-all duration-700 ease-out scale-0 group-hover:scale-[20] opacity-0 group-hover:opacity-100" />
            </span>

            {/* Loma Text Hover Clone */}
            <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:opacity-0 text-white/90">
              Quero proteger meu carro
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 rounded-full text-[#09090b] font-bold shadow-sm">
              Quero proteger meu carro
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
