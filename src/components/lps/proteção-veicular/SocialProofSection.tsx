"use client";

import { testimonials, Testimonial } from "./data/testimonials";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,0,0,0.02),_0_100px_80px_rgba(0,0,0,0.07)] flex flex-col gap-4 w-[85vw] max-w-[320px] md:w-auto md:min-w-[320px] shrink-0 whitespace-normal hover:-translate-y-1 transition-transform duration-300">
      <p className="text-gray-600 text-[15px] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://randomuser.me/api/portraits/${t.img}`}
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0ABAB5&color=fff`;
          }}
          className="w-10 h-10 rounded-full object-cover border border-gray-100"
          alt={`Avatar de ${t.name}`}
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{t.name}</span>
          <span className="text-[10px] font-bold text-[#0ABAB5] uppercase tracking-wide flex items-center gap-1">
            ✓ Protege seu {t.car}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  const { open } = useQuotationModal();

  // Duplica o array para o loop infinito da animação
  const doubled = [...testimonials, ...testimonials];
  const col1 = doubled.filter((_, i) => i % 3 === 0);
  const col2 = doubled.filter((_, i) => i % 3 === 1);
  const col3 = doubled.filter((_, i) => i % 3 === 2);
  const row1 = doubled.filter((_, i) => i % 3 === 0);
  const row2 = doubled.filter((_, i) => i % 3 === 1);
  const row3 = doubled.filter((_, i) => i % 3 === 2);

  return (
    <section id="prova-social" className="pb-24 pt-8 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative z-30">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-inter)] font-semibold text-gray-900 mb-4 tracking-tight">
            Eles não arriscaram.<br />
            <span className="text-[#0ABAB5]">E você?</span>
          </h2>
        </div>

        {/* Feed animado com máscara de fade nas bordas */}
        <div className="relative overflow-hidden w-full rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] md:[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          {/* Desktop: 3 colunas verticais */}
          <div className="hidden md:flex justify-center gap-6 h-[750px] relative z-10">
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v pause-on-hover">
              {col1.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v-reverse pause-on-hover mt-[-150px]">
              {col2.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v pause-on-hover pt-12">
              {col3.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>

          {/* Mobile: 3 fileiras horizontais */}
          <div className="flex flex-col md:hidden gap-4 relative mt-4 z-10 py-4">
            <div className="flex flex-nowrap w-max gap-4 animate-marquee-h-reverse pause-on-hover">
              {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            <div className="flex flex-nowrap w-max gap-4 animate-marquee-h pause-on-hover">
              {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            <div className="flex flex-nowrap w-max gap-4 animate-marquee-h-reverse pause-on-hover">
              {row3.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 flex justify-center relative z-20">
          <button
            onClick={open}
            className="group/cta5 relative inline-flex items-center justify-center overflow-hidden font-medium tracking-tight bg-[#0ABAB5] rounded-full px-8 py-4 text-base md:text-lg text-white shadow-[0_0_20px_rgba(10,186,181,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1"
          >
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <span className="w-8 h-8 rounded-full bg-[#FACC15] transition-all duration-700 ease-out scale-0 group-hover/cta5:scale-[30] opacity-0 group-hover/cta5:opacity-100" />
            </span>
            <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/cta5:-translate-y-10 group-hover/cta5:opacity-0 font-semibold">
              Quero me proteger agora
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-10 group-hover/cta5:translate-y-0 group-hover/cta5:opacity-100 opacity-0 rounded-full text-black font-bold">
              Quero me proteger agora
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
