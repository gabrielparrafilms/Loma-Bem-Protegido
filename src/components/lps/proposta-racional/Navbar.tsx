"use client";

import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function Navbar() {
  const { open } = useQuotationModal();

  return (
    <header className="fixed flex px-6 md:px-12 z-50 pointer-events-auto py-5 top-0 w-full items-center justify-between backdrop-blur-md bg-zinc-900/80 border-b border-white/5 transition-all">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <a href="#" className="flex items-center">
        <img
          src="/lps/maio-amarelo/Logo Loma Branca.svg"
          alt="Loma"
          className="h-6 w-auto object-contain"
          width={96}
          height={24}
        />
      </a>
      <div className="flex items-center gap-3">
        <button
          onClick={open}
          className="md:hidden flex items-center text-[11px] font-bold uppercase tracking-wider transition-all duration-500 px-4 py-2 rounded-full text-white bg-[#0ABAB5] border border-[#0ABAB5] shadow-[0_0_15px_rgba(10,186,181,0.25)] hover:bg-[#FAB600] hover:border-[#FAB600] hover:shadow-[0_0_25px_rgba(250,182,0,0.5)] active:scale-95 cursor-pointer"
        >
          Simular Agora
        </button>
        <button
          onClick={open}
          className="hidden md:flex items-center gap-2 text-sm font-medium transition-all duration-300 px-6 py-2.5 rounded-full text-white bg-[#0ABAB5] border border-[#0ABAB5]/50 shadow-[0_0_15px_rgba(10,186,181,0.25)] hover:bg-[#08938F] hover:shadow-[0_0_25px_rgba(10,186,181,0.5)] hover:-translate-y-0.5 cursor-pointer"
        >
          Simular Agora
        </button>
      </div>
    </header>
  );
}
