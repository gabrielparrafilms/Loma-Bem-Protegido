"use client";

import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function FinalCTA() {
  const { open } = useQuotationModal();

  return (
    <>
      <section
        id="cta-final"
        className="py-24 md:py-40 px-6 w-full text-center relative overflow-hidden border-b border-white/5"
      >
        {/* Fundo com imagem */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed opacity-70 pointer-events-none -z-20"
          style={{ backgroundImage: "url('/lps/protecao-veicular/images/PLANOS.jpg')" }}
        />
        {/* Escuro Overlay para manter leitura 100% */}
        <div className="absolute inset-0 bg-[#09090b]/50 backdrop-blur-[1px] pointer-events-none -z-10" />
        {/* Glow Radial Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,211,102,0.05)_0%,transparent_50%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-inter)] font-medium tracking-tighter leading-[1.05] text-white mb-6">
            Enquanto você lê isso,<br />seu carro está sem proteção.
          </h2>
          <p className="text-2xl text-white/90 mb-2">
            Não amanhã. <strong className="text-white">Agora.</strong>
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mt-4 leading-relaxed">
            Fazer a cotação não custa nada. Sem análise de crédito, sem compromisso.
            Leva menos de dois minutos. Um consultor responde no WhatsApp, entende o melhor plano pra você, e pronto você já pode ativar!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={open}
              className="group relative inline-flex w-full sm:w-auto min-w-[320px] cursor-pointer overflow-hidden font-medium tracking-tight bg-[#25D366] border border-[#25D366] hover:border-[#1DA851] rounded-full px-10 py-5 items-center justify-center text-lg text-white shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="w-8 h-8 rounded-full bg-[#1DA851] transition-all duration-700 ease-out scale-0 group-hover:scale-[30] opacity-0 group-hover:opacity-100" />
              </span>
              <span className="relative z-10 flex items-center gap-3 rounded-full transition-all duration-500 ease-out group-hover:-translate-y-10 group-hover:opacity-0 font-semibold">
                Quero minha cotação
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 rounded-full text-white font-semibold">
                Quero minha cotação
              </span>
            </button>
            <button
              onClick={open}
              className="text-white/90 hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              Prefiro preencher formulário
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center relative overflow-hidden border-t border-white/5">
        <h2 className="text-3xl font-[family-name:var(--font-inter)] font-medium text-transparent-bg mb-4 relative z-10">
          LOMA Bem Protegido
        </h2>
        <p className="text-xs text-zinc-600 font-mono relative z-10">
          &copy; {new Date().getFullYear()} Loma Bem Protegido. Todos os direitos reservados.
          <br />Proteção veicular regulamentada.
        </p>
      </footer>
    </>
  );
}
