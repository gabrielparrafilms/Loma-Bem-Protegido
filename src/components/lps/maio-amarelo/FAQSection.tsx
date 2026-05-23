"use client";

import { useState } from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const faqs = [
  {
    q: "O que é proteção veicular?",
    a: "É um serviço oferecido por associações de proteção veicular — entidades sem fins lucrativos, regulamentadas pelo governo federal. Funciona no modelo de rateio cooperativo: os associados dividem os custos dos sinistros entre si, tornando a proteção muito mais acessível do que um seguro tradicional.",
  },
  {
    q: "Qual a diferença entre proteção veicular e seguro?",
    a: "O seguro é oferecido por seguradoras privadas com fins lucrativos, que fazem análise de crédito, perfil e região — e frequentemente recusam quem mais precisa. A proteção veicular é cooperativa: não tem análise de crédito, não analisa perfil e aceita qualquer veículo. É uma alternativa justa e acessível.",
  },
  {
    q: "A Loma aceita qualquer veículo?",
    a: "Sim. Não fazemos análise de perfil, score de crédito ou restrição por ano do veículo. Carros, motos, caminhões e vans — novos ou usados — são bem-vindos. Seu CPF negativado também não é impedimento.",
  },
  {
    q: "Como funciona em caso de sinistro?",
    a: "Em caso de colisão, roubo, furto ou perda total, basta acionar nosso atendimento 24 horas. Um perito avalia o veículo e o pagamento é realizado com base na tabela FIPE. O processo é simples, transparente e sem burocracia desnecessária.",
  },
  {
    q: "Tem guincho e assistência 24h?",
    a: "Sim! Todos os planos incluem assistência 24 horas com guincho, socorro mecânico, troca de pneus e chaveiro. Você fica protegido a qualquer hora, em qualquer lugar.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não existe fidelidade, multa ou burocracia para cancelar. Se decidir sair, basta solicitar e pronto. Acreditamos que você fica porque quer, não porque é obrigado.",
  },
  {
    q: "Quanto tempo para começar a proteção?",
    a: "Após a adesão e realização da vistoria do veículo, sua proteção inicia em até 48 horas úteis. É rápido, simples e sem complicação.",
  },
];

export default function FAQSection() {
  const { open } = useQuotationModal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-white py-32 max-md:py-24 relative overflow-hidden"
      id="faq"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #F5B800, #D49E00, #F5B800)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-center mb-14">
          <div className="inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[#D49E00] bg-[rgba(245,184,0,0.1)] border border-[rgba(245,184,0,0.2)] px-4 py-1.5 rounded-full mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire suas dúvidas
          </div>
          <h2
            className="font-manrope font-bold leading-[1.15] tracking-[-0.02em] text-[#1A1A1A] mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Perguntas Frequentes
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-[#6B6B6B] max-w-[560px] mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)" }}
          >
            Tudo que você precisa saber sobre proteção veicular da Loma antes de garantir sua adesão.
          </p>
        </div>

        {/* Accordion */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] max-w-[780px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={[
                  "rounded-[20px] border overflow-hidden transition-all duration-300",
                  isOpen
                    ? "bg-white border-[#E5E7EB] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.02),0_6.7px_5.3px_rgba(0,0,0,0.028),0_12.5px_10px_rgba(0,0,0,0.035),0_22.3px_17.9px_rgba(0,0,0,0.042),0_41.8px_33.4px_rgba(0,0,0,0.05),0_100px_80px_rgba(0,0,0,0.07)]"
                    : "bg-[#F9FAFB] border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]",
                ].join(" ")}
              >
                <button
                  className={[
                    "flex items-center justify-between gap-4 w-full px-6 py-5 max-md:px-5 max-md:py-4",
                    "font-[family-name:var(--font-inter)] font-semibold text-[0.9375rem] max-md:text-[0.875rem]",
                    "text-left cursor-pointer transition-colors duration-200 bg-transparent border-none",
                    isOpen ? "text-[#D49E00]" : "text-[#1A1A1A] hover:text-[#D49E00]",
                  ].join(" ")}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{faq.q}</span>
                  {/* Plus/X icon */}
                  <span
                    className={[
                      "flex-shrink-0 w-7 h-7 max-md:w-6 max-md:h-6 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-[#F5B800] rotate-45" : "bg-[#E5E7EB]",
                    ].join(" ")}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3.5 h-3.5 max-md:w-3 max-md:h-3 transition-colors duration-300 ${isOpen ? "text-black" : "text-[#4A4A4A]"}`}
                    >
                      <path d="M12 5v14" /><path d="M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <p className="px-6 pb-6 max-md:px-5 max-md:pb-5 font-[family-name:var(--font-inter)] text-[0.9375rem] max-md:text-[0.875rem] text-[#6B6B6B] leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-center mt-14 pt-10 border-t border-[#E5E7EB]">
          <p
            className="font-manrope font-semibold text-[#1A1A1A] mb-5"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
          >
            Ainda tem dúvidas? Simule agora e veja como é simples.
          </p>
          <button
            onClick={open}
            className="animate-heartbeat hover:[animation:none] inline-flex items-center justify-center gap-2 font-[family-name:var(--font-inter)] font-bold text-base text-white bg-black rounded-full px-9 py-4 transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            Garantir minha proteção veicular
            <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
