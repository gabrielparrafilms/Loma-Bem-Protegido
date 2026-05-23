"use client";

import { CarFront, Wrench, Truck, Users, Headset, Zap, CreditCard, UserCheck, ArrowRight } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const features = [
  {
    icon: CarFront,
    title: "Colisão, Furto e Roubo",
    text: "Cobertura total contra os principais riscos do dia a dia.",
  },
  {
    icon: Wrench,
    title: "Assistência 24h",
    text: "Atendimento a qualquer hora, inclusive domingos e feriados.",
  },
  {
    icon: Truck,
    title: "Guincho Incluso",
    text: "Serviço de reboque acionado rapidamente sem custo extra.",
  },
  {
    icon: Users,
    title: "Condutor Livre",
    text: "A proteção é para o carro. Não importa quem estava dirigindo.",
  },
  {
    icon: Headset,
    title: "Atendimento Humano",
    text: "Sem robôs intermináveis quando você mais precisa.",
  },
  {
    icon: Zap,
    title: "Ativação Rápida",
    text: "Processo ágil em menos de 24h. Você não precisa esperar semanas.",
  },
  {
    icon: CreditCard,
    title: "Sem Juros",
    text: "Pague via Pix, boleto ou cartão de crédito com facilidade.",
  },
  {
    icon: UserCheck,
    title: "Sem Consulta",
    text: "CPF restrito não é impedimento para proteger seu veículo aqui.",
  },
];

export default function FeaturesSection() {
  const { open } = useQuotationModal();

  return (
    <section className="w-full relative border-b border-white/5 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-[#09090b]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.6]"
          style={{ filter: "brightness(1.25) contrast(1.2) saturate(0.85)" }}
        >
          <source src="/lps/proposta-racional/video beneficios.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />
        <div
          className="absolute inset-0 z-10"
          style={{ background: "radial-gradient(circle at center, rgba(9, 9, 11, 0.4) 20%, rgba(9, 9, 11, 0.95) 100%)" }}
        />
      </div>

      <div className="relative z-10 py-16 md:py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-geist font-medium text-white mb-6 tracking-tight drop-shadow-lg">
            O que você recebe no seu plano
          </h2>
          <p className="text-lg text-zinc-200 drop-shadow-md">Proteção completa sem as letras miúdas. Monte o seu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] transition-transform duration-400 hover:scale-[1.03] hover:-translate-y-1"
              >
                <div className="p-8 glass-card flex flex-col gap-4 group feature-card-hover h-full">
                  <div className="w-12 h-12 rounded-full bg-[#0ABAB5]/10 flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-[#0ABAB5]" />
                  </div>
                  <h4 className="text-lg font-medium text-white group-hover:text-[#0ABAB5] transition-colors duration-400">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-white/80">{feat.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-center mt-16 flex justify-center">
          <button
            onClick={open}
            className="group relative inline-flex min-w-[320px] cursor-pointer overflow-hidden font-medium bg-[#0ABAB5] border border-[#0ABAB5] rounded-full px-10 py-4 items-center justify-center text-white transition-all duration-500 animate-cta-pulse"
          >
            <span className="relative z-10 flex items-center gap-3 text-xl font-geist font-medium">
              Tudo a partir de R$129/mês
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
