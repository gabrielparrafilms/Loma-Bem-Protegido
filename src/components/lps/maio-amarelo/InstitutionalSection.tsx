"use client";

import { ShieldCheck, PiggyBank, Heart, Shield, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const floatingCards = [
  {
    icon: ShieldCheck,
    title: "Mais segurança",
    text: "Conte com suporte quando mais precisar.",
    float: "animate-float-1",
    posClass: "top-[10%] left-[10%] max-md:top-[-5%] max-md:left-[2%]",
  },
  {
    icon: PiggyBank,
    title: "Mais economia",
    text: "Evite arcar sozinho com prejuízos inesperados.",
    float: "animate-float-3",
    posClass: "bottom-[12%] left-[5%] max-md:bottom-[8%] max-md:left-[2%]",
  },
  {
    icon: Heart,
    title: "Mais tranquilidade",
    text: "Rode sabendo que seu veículo está protegido.",
    float: "animate-float-4",
    posClass: "bottom-[8%] right-[5%] max-md:bottom-[-5%] max-md:right-[2%]",
  },
  {
    icon: Shield,
    title: "Sua aliada",
    text: "Preserve sua rotina e da sua família.",
    float: "animate-float-2",
    posClass: "top-[15%] right-[10%] max-md:top-[8%] max-md:right-[2%]",
  },
];

export default function InstitutionalSection() {
  const { open } = useQuotationModal();

  return (
    <section
      className="bg-[#fbf2d2] py-20 px-8 relative overflow-hidden border-t border-black/5"
      id="institucional"
    >
      {/* Background glow */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,184,0,0.08) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 relative z-10">

        {/* Header — split */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex-1 max-w-[550px]">
            <h2
              className="font-manrope font-black leading-[1.1] tracking-[-0.03em] text-[#111827]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Maio Amarelo é sobre<br />
              <span className="text-[#D49E00]">atenção, cuidado<br />e prevenção.</span>
            </h2>
          </div>
          <div className="flex-1 max-w-[450px] pb-2">
            <p className="font-[family-name:var(--font-inter)] text-[1.1rem] font-medium leading-relaxed text-[#4b5563]">
              No trânsito, ninguém está livre de imprevistos. Por isso, além de dirigir com responsabilidade, também é importante estar preparado caso algo aconteça.
            </p>
          </div>
        </div>

        {/* Core — image + floating cards */}
        <div className="relative w-full min-h-[500px] md:min-h-[650px] flex justify-center items-center mt-4">
          {/* Central image */}
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] relative z-10 w-full max-w-[850px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lps/maio-amarelo/dobra-4.png"
              alt="Motorista sorrindo e usando os serviços LOMA"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Floating cards — each with explicit position classes */}
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={[
                  "absolute z-20",
                  card.posClass,
                  "animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]",
                  card.float,
                  "bg-white rounded-full py-3 px-6 pl-3 flex items-center gap-4",
                  "shadow-[0_15px_35px_rgba(245,184,0,0.15),0_5px_15px_rgba(0,0,0,0.05)]",
                  "border border-[rgba(245,184,0,0.2)]",
                  "max-w-[320px] max-md:max-w-[240px]",
                  "transition-transform duration-400 hover:-translate-y-[5px] hover:scale-[1.02]",
                  "hover:shadow-[0_20px_40px_rgba(245,184,0,0.2),0_10px_20px_rgba(0,0,0,0.08)]",
                ].join(" ")}
              >
                <div className="w-14 h-14 max-md:w-10 max-md:h-10 rounded-full bg-[#F5B800] flex items-center justify-center flex-shrink-0 shadow-[0_4px_10px_rgba(245,184,0,0.3)]">
                  <Icon className="w-6 h-6 max-md:w-4 max-md:h-4 text-[#111827]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-manrope font-extrabold text-[1.05rem] max-md:text-[0.8rem] text-[#111827] leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[0.85rem] max-md:text-[0.7rem] text-[#4b5563] leading-snug mt-0.5">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.8s_both] flex justify-center mt-4">
          <button
            onClick={open}
            className="animate-heartbeat hover:[animation:none] inline-flex items-center justify-center gap-3 bg-[#111827] text-white font-[family-name:var(--font-inter)] font-extrabold text-[1.125rem] max-md:text-[0.85rem] px-12 py-5 max-md:px-5 max-md:py-3 rounded-full transition-all duration-300 hover:bg-[#F5B800] hover:text-[#111827] hover:scale-105 hover:shadow-[0_20px_40px_rgba(245,184,0,0.3)] shadow-[0_15px_30px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            Garantir minha proteção agora
            <ArrowRight className="w-5 h-5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
