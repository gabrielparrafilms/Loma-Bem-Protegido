"use client";

import { HelpCircle, Scale, Shield, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function ObjectionsSection() {
  const { open } = useQuotationModal();

  return (
    <section className="w-full relative bg-gradient-to-b from-[#f4f7f8] to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="pt-16 md:pt-32 pb-16 md:pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Objeção 1 */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] flex flex-col gap-6 bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 md:p-12 transition-shadow duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="w-14 h-14 bg-[#0ABAB5]/10 rounded-2xl flex items-center justify-center border border-[#0ABAB5]/20 shrink-0">
              <HelpCircle className="w-7 h-7 text-[#0ABAB5]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-geist font-medium text-zinc-900">&ldquo;Mas é confiável?&rdquo;</h3>
            <div className="text-lg text-zinc-600 space-y-4">
              <p><strong>Pergunta justa. Veja os fatos:</strong></p>
              <p>
                A LOMA opera desde 2016. São 9 anos no mercado, dezenas de milhares de associados
                ativos e um histórico com mais de 15 milhões em indenizações pagas.
              </p>
              <p>
                Empresas que não entregam o que prometem não sobrevivem 9 anos. A LOMA sobreviveu e
                cresceu mais de 1.200% nos últimos anos.
              </p>
              <div className="p-5 bg-[#0ABAB5]/5 border border-[#0ABAB5]/20 rounded-xl mt-6 flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#0ABAB5] shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                  Não é promessa de startup. É histórico de quase uma década protegendo quem depende
                  do carro.
                </p>
              </div>
            </div>
          </div>

          {/* Objeção 2 */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both] flex flex-col gap-6 bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 md:p-12 transition-shadow duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="w-14 h-14 bg-[#0ABAB5]/10 rounded-2xl flex items-center justify-center border border-[#0ABAB5]/20 shrink-0">
              <Scale className="w-7 h-7 text-[#0ABAB5]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-geist font-medium text-zinc-900">&ldquo;O que temos de diferente?&rdquo;</h3>
            <div className="text-lg text-zinc-600 space-y-4">
              <p>Sim. E essa diferença trabalha a seu favor.</p>
              <p>
                No seguro tradicional, tem uma seguradora no meio. A seguradora tem acionistas.
                Acionistas querem lucro.{" "}
                <strong>Lucro significa: cobrar mais, pagar menos, aceitar menos.</strong>
              </p>
              <p>
                Na proteção coletiva da LOMA, o grupo é o próprio fundo. Não tem terceiro lucrando em
                cima do seu sinistro.
              </p>
              <p>É por isso que a aprovação é mais acessível e o atendimento é mais direto.</p>
              <p className="text-zinc-900 font-medium mt-6 border-l-2 border-[#0ABAB5] pl-4">
                A LOMA não quer te negar. Quer que você fique.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] mt-16 flex justify-center w-full">
          <button
            onClick={open}
            className="group relative inline-flex min-w-[280px] cursor-pointer transition-all duration-500 overflow-hidden font-medium tracking-tight bg-[#0ABAB5] border border-[#0ABAB5] rounded-full px-8 py-4 items-center justify-center text-lg text-white animate-cta-pulse"
          >
            <span className="relative z-10 flex items-center gap-2">
              Simular meu plano agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
