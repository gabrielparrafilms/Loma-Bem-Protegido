"use client";
import { useEffect, useState } from "react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function Navbar() {
  const { open } = useQuotationModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] flex flex-col transition-all duration-300 ${
        scrolled
          ? "nav-scrolled bg-[#09090b]/[0.98] backdrop-blur-[24px] border-b border-emerald-400/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          : "bg-[#09090b]/60 backdrop-blur-[12px] border-b border-white/5"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden md:flex w-full py-1.5 px-6 md:px-12 justify-end gap-6 text-xs font-medium text-zinc-300 transition-all duration-300 overflow-hidden ${
          scrolled ? "h-0 py-0 opacity-0" : ""
        }`}
      >
        <a href="#faq" className="hover:text-emerald-400 transition-colors">Ajuda</a>
        <a href="#app-loma" className="hover:text-emerald-400 transition-colors">Baixe o App</a>
        <button onClick={open} className="hover:text-emerald-400 transition-colors cursor-pointer">Simular Plano</button>
      </div>

      {/* Main Bar */}
      <div className={`w-full px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/lps/site-institucional/logo.svg" alt="Loma Bem Protegido" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Benefícios</a>
          <a href="#coverages" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Coberturas</a>
          <a href="#app-features" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Serviços</a>
          <a href="#feedbacks" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Depoimentos</a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className="hidden sm:flex group relative items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <span>Fazer Simulação</span>
            <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-300 hover:text-white cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          <a href="#benefits" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Benefícios</a>
          <a href="#coverages" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Coberturas</a>
          <a href="#app-features" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Serviços</a>
          <a href="#feedbacks" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Depoimentos</a>
          <button
            onClick={() => { open(); setMobileOpen(false); }}
            className="mt-2 w-full rounded-full px-6 py-3 bg-emerald-400 text-[#09090b] font-semibold text-sm hover:bg-yellow-400 transition-all cursor-pointer"
          >
            Fazer Simulação
          </button>
        </div>
      )}
    </header>
  );
}
