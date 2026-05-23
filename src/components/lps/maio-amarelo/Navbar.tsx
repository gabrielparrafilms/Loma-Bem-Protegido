"use client";

import { useState, useEffect } from "react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function Navbar() {
  const { open } = useQuotationModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between",
        "transition-all duration-400",
        scrolled
          ? "bg-black/90 backdrop-blur-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-b border-white/5 px-6 py-3 md:px-12 md:py-3"
          : "bg-transparent border-b border-transparent px-6 py-6 md:px-12 md:py-4",
      ].join(" ")}
    >
      {/* Logo */}
      <a href="#" className="flex items-center flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lps/maio-amarelo/Logo Loma Branca.svg"
          alt="Loma Proteção Veicular"
          className="h-7 md:h-8 w-auto object-contain"
        />
      </a>

      {/* CTA */}
      <button
        onClick={open}
        className="animate-heartbeat hover:[animation:none] inline-flex items-center justify-center gap-2 font-[family-name:var(--font-inter)] font-semibold text-[0.8125rem] md:text-[0.875rem] text-white bg-black rounded-full px-6 py-2.5 md:px-7 md:py-3 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072)] transition-all duration-300 hover:bg-[#0ABAB5] hover:shadow-[0_15px_35px_rgba(10,186,181,0.4)] hover:scale-105 flex-shrink-0 whitespace-nowrap cursor-pointer"
      >
        Simular agora
      </button>
    </nav>
  );
}
