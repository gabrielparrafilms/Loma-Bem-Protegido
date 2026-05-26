"use client";

import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function SpecialOfferSection() {
  const { open } = useQuotationModal();

  return (
    <section
      className="relative flex justify-center items-center py-24 px-8 md:py-40 overflow-hidden"
      id="condicao-especial"
    >
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/lps/maio-amarelo/img-3-dobra.jpg')" }}
        aria-hidden="true"
      />
      {/* Mobile background */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/lps/maio-amarelo/img-3-dobra-mobile.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden="true" />
      {/* Yellow radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,184,0,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Promo card */}
      <div
        className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] relative z-10 w-full max-w-[1200px] rounded-[2rem] flex flex-col md:flex-row gap-0 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3),0_0_100px_rgba(0,0,0,0.1)] border border-black/5 border-b-4 border-b-black/10"
        style={{ background: "radial-gradient(circle at top left, rgba(245,184,0,0.15) 0%, transparent 60%), #ffffff" }}
      >
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center gap-6 p-10 md:p-12 text-[#111827]">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[rgba(245,184,0,0.15)] text-[#D49E00] border border-[rgba(245,184,0,0.3)] font-[family-name:var(--font-inter)] font-extrabold text-[0.875rem] uppercase tracking-[0.05em] px-4 py-2 rounded-full w-max">
            <ShieldCheck className="w-4 h-4" />
            Campanha Maio Amarelo
          </div>

          <h2
            className="font-manrope font-black leading-[1.1] tracking-[-0.03em] text-[#111827]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Condição especial para você proteger seu veículo neste{" "}
            <span className="text-[#D49E00]">Maio Amarelo</span>.
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[1.05rem] md:text-[1.25rem] font-semibold text-black/60 leading-relaxed max-w-[480px]">
            Durante a campanha Maio Amarelo, você pode aderir à proteção veicular da LOMA com uma condição imperdível.
          </p>
        </div>

        {/* Right offer box */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] relative flex-none md:w-[400px] bg-[#F5B800] rounded-[1.5rem] m-3 md:m-4 p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center shadow-[0_20px_40px_rgba(245,184,0,0.2)] overflow-hidden">
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none"
            style={{ background: "radial-gradient(circle at top left, rgba(255,255,255,0.4), transparent 60%)" }}
            aria-hidden="true"
          />

          <p className="relative z-10 font-[family-name:var(--font-inter)] font-extrabold text-[0.85rem] uppercase tracking-[0.2em] text-black/60 -mb-4">
            A partir de
          </p>

          {/* Price */}
          <div className="relative z-10 flex items-start justify-center text-[#6C14DF] leading-none">
            <span className="font-[family-name:var(--font-inter)] font-extrabold mt-6 mr-1"
              style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
              R$
            </span>
            <span className="font-manrope font-black tracking-[-0.06em]"
              style={{ fontSize: "clamp(6.5rem, 12vw, 9.5rem)" }}>
              89
            </span>
            <span className="font-[family-name:var(--font-inter)] font-extrabold mt-7 ml-0.5"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
              ,90
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-2 font-[family-name:var(--font-inter)] font-semibold text-[0.95rem] text-[#111827] opacity-80 -mt-2">
            <CheckCircle2 className="w-[18px] h-[18px] text-[#111827]" />
            Sem burocracia e ativação imediata
          </div>

          <button
            onClick={open}
            className="relative z-10 animate-heartbeat hover:[animation:none] w-[85%] inline-flex items-center justify-center gap-2 bg-[#111827] text-white font-[family-name:var(--font-inter)] font-extrabold text-[0.95rem] px-6 py-4 rounded-full transition-all duration-300 hover:bg-[#6C14DF] hover:shadow-[0_15px_30px_rgba(108,20,223,0.3)] hover:-translate-y-[3px] hover:scale-[1.02] shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            Quero aproveitar essa condição
            <ArrowRight className="w-5 h-5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
