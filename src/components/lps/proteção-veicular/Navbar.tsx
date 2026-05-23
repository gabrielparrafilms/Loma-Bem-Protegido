"use client";

import Image from "next/image";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function Navbar() {
  const { open } = useQuotationModal();

  return (
    <header className="fixed flex px-6 md:px-12 z-50 pointer-events-auto py-4 md:py-5 top-0 w-full items-center justify-between backdrop-blur-md bg-[#09090b]/60 border-b border-white/5 transition-all">
      <a href="#" className="flex items-center shrink-0">
        <Image
          src="/lps/proteção-veicular/logo-loma.svg"
          alt="LOMA Bem Protegido"
          width={100}
          height={28}
          priority
          className="h-5 md:h-7 w-auto object-contain"
        />
      </a>
      <button
        onClick={open}
        className="group/navbtn relative flex items-center justify-center overflow-hidden font-medium tracking-tight bg-[#0ABAB5] rounded-full px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm text-white shadow-[0_0_10px_rgba(10,186,181,0.2)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] shrink-0"
        aria-label="Abrir simulação de cotação"
      >
        {/* Revex Hover BG Fill (Yellow) */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="w-8 h-8 rounded-full bg-[#FACC15] transition-all duration-700 ease-out scale-0 group-hover/navbtn:scale-[20] opacity-0 group-hover/navbtn:opacity-100" />
        </span>

        {/* Original Text */}
        <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/navbtn:-translate-y-8 group-hover/navbtn:opacity-0 font-semibold">
          Simular Agora
        </span>
        {/* Hover Text (Black) */}
        <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-8 group-hover/navbtn:translate-y-0 group-hover/navbtn:opacity-100 opacity-0 rounded-full text-black font-bold">
          Simular Agora
        </span>
      </button>
    </header>
  );
}
