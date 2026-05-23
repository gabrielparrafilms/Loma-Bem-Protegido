"use client";

import { ArrowUpRight, Car, Bike, Truck } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const products = [
  {
    title: "Carros",
    desc: "Proteção completa para carros novos, seminovos ou usados. Cobertura nacional total.",
    image: "/lps/maio-amarelo/car_card_bg.png",
    icon: Car,
    highlighted: false,
  },
  {
    title: "Motos",
    desc: "Segurança para você rodar tranquilo na cidade ou na estrada, todos os dias.",
    image: "/lps/maio-amarelo/moto_card_bg.png",
    icon: Bike,
    highlighted: true,
  },
  {
    title: "Utilitários e Vans",
    desc: "Cobertura sob medida para proteger o seu instrumento de trabalho contra imprevistos.",
    image: "/lps/maio-amarelo/van_card_bg.png",
    icon: Truck,
    highlighted: false,
  },
];

export default function BenefitsSection() {
  const { open } = useQuotationModal();

  return (
    <section className="bg-[#fffdf0] text-black px-8 py-32 relative overflow-hidden" id="beneficios">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-stretch gap-12">

        {/* Coluna Esquerda — Texto */}
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] flex-none lg:w-[26%] flex flex-col gap-5">
          <h2 className="font-manrope font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111827]"
            style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)" }}>
            O que você precisa<br />
            <span className="text-[#D49E00]">proteger hoje?</span>
          </h2>
          <h3 className="font-[family-name:var(--font-inter)] text-[1.05rem] font-semibold text-[#374151] leading-relaxed">
            Escolha a categoria do seu veículo e simule em menos de 2 minutos.
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[0.95rem] leading-relaxed text-[#4b5563]">
            Com a LOMA, você tem cobertura completa contra roubo, furto, colisão e terceiros. Sem análise de perfil, sem consulta ao SPC/Serasa e com guincho 24h em todo o Brasil.
          </p>
          <button
            onClick={open}
            className="mt-auto animate-heartbeat hover:[animation:none] lg:mt-0 lg:mt-auto px-10 py-4 bg-[#F5B800] rounded-full text-[#111827] font-[family-name:var(--font-inter)] font-extrabold text-base uppercase tracking-[0.05em] shadow-[0_10px_25px_rgba(245,184,0,0.4)] transition-all duration-300 hover:bg-[#111827] hover:text-[#F5B800] hover:scale-105 hover:shadow-[0_15px_35px_rgba(17,24,39,0.3)] cursor-pointer"
          >
            SIMULAR AGORA
          </button>
        </div>

        {/* Coluna Direita — Cards */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col lg:flex-row gap-6">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  onClick={open}
                  className={[
                    "animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]",
                    "flex-1 min-w-0 rounded-[20px] p-6 flex flex-col gap-6 cursor-pointer",
                    "transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]",
                    p.highlighted
                      ? "bg-[#F5B800] border border-[#F5B800] shadow-[0_15px_35px_rgba(245,184,0,0.2)]"
                      : "bg-white border border-[#E5E7EB]",
                  ].join(" ")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && open()}
                >
                  {/* Top row */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className={`font-manrope font-extrabold text-xl mb-2 ${p.highlighted ? "text-[#111827]" : "text-[#111827]"}`}>
                        {p.title}
                      </h4>
                      <p className={`font-[family-name:var(--font-inter)] text-[0.875rem] leading-relaxed ${p.highlighted ? "text-[#111827]" : "text-[#6b7280]"}`}>
                        {p.desc}
                      </p>
                    </div>
                    {/* Arrow icon */}
                    <div className={[
                      "w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      p.highlighted
                        ? "bg-[#111827] border-[#111827] text-[#F5B800]"
                        : "bg-white border-[#E5E7EB] text-[#111827]",
                    ].join(" ")}>
                      <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* Bottom image */}
                  <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/5] max-lg:aspect-[2/1]">
                    <div
                      className="w-full h-full bg-[#e5e7eb] bg-cover bg-[position:center_80%] bg-no-repeat transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url('${p.image}')` }}
                    />
                    {/* Vehicle icon badge */}
                    <div className={[
                      "absolute bottom-3 left-3 w-11 h-11 rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
                      p.highlighted ? "bg-[#111827] text-[#F5B800]" : "bg-[#F5B800] text-[#111827]",
                    ].join(" ")}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
