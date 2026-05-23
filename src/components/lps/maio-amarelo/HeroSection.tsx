"use client";

import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function HeroSection() {
  const { open } = useQuotationModal();

  return (
    <section
      className="relative flex items-center bg-[#F5B800] overflow-hidden md:min-h-dvh md:items-center max-md:aspect-[412/915] max-md:items-start"
    >
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/lps/maio-amarelo/Capa Web 2.jpg')", backgroundPosition: "right 30%" }}
        aria-hidden="true"
      />
      {/* Mobile background */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-no-repeat bg-[position:center_bottom]"
        style={{ backgroundImage: "url('/lps/maio-amarelo/Capa Mobile 4.jpg')" }}
        aria-hidden="true"
      />

      {/* Desktop overlay — gradiente lateral suave */}
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(245,184,0,0.4) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      {/* Mobile overlay — gradiente vertical */}
      <div
        className="absolute inset-0 block md:hidden pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(245,184,0,0.6) 0%, transparent 50%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pt-[15vw] pb-0 md:pt-32 md:pb-16 flex flex-col items-start justify-start md:justify-center">
        <h1
          className="[animation:animationIn_0.8s_ease-out_0.2s_both] font-manrope font-black leading-[1.05] tracking-[-0.04em] text-black mb-8"
          style={{
            fontSize: "clamp(2.8rem, 9.7vw, 80px)",
            maxWidth: "1200px",
          }}
        >
          Proteção Veicular<br />
          com adesão de<br />
          apenas{" "}
          <span
            className="text-[#6C14DF]"
            style={{ textShadow: "0 4px 15px rgba(108,20,223,0.2)" }}
          >
            R$89,90
          </span>
        </h1>

        <p
          className="[animation:animationIn_0.8s_ease-out_0.3s_both] font-[family-name:var(--font-inter)] font-normal leading-relaxed text-[#1A1A1A] mb-12"
          style={{ fontSize: "clamp(1rem, 4.3vw, 24px)", maxWidth: "800px" }}
        >
          Nesse Maio Amarelo a <strong className="font-bold text-black">LOMA</strong> vai garantir
          sua proteção no trânsito com <strong className="font-bold text-black">condições</strong>{" "}
          <strong className="font-bold text-black">imperdíveis</strong>.
        </p>

        <button
          onClick={open}
          className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-heartbeat hover:[animation:none] inline-flex items-center justify-center gap-3 font-[family-name:var(--font-inter)] font-bold text-white bg-black rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#0ABAB5] hover:shadow-[0_15px_35px_rgba(10,186,181,0.4)] shadow-[0_10px_25px_rgba(0,0,0,0.2)] cursor-pointer"
          style={{ fontSize: "clamp(0.85rem, 3.4vw, 1.125rem)", padding: "clamp(0.875rem, 3.5vw, 1.25rem) clamp(1.25rem, 5.5vw, 2.5rem)" }}
        >
          Simular minha proteção agora
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
