"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const testimonials = [
  { text: "Cara, eu nunca achei que ia precisar… fiz a proteção meio no 'vai que'… Não deu outra… bateram no meu carro 3 meses depois. Se eu não tivesse com a Loma, tava ferrado hoje.", name: "Carlos Silva", car: "Ford Ka" },
  { text: "Mano, coisa boba… uma batida pequena no trânsito. Mas quando fui ver o valor… já ia pesar demais. Ainda bem que eu tava com a proteção… resolveu tudo.", name: "Tiago Souza", car: "Chevrolet Celta" },
  { text: "Eu uso o carro pra trabalhar todo dia. Ficar sem ele nem pensar. Quando precisei, a Loma resolveu rápido… isso pra mim vale tudo.", name: "Marcos Paulo", car: "Renault Kwid" },
  { text: "Sinceramente, eu achava que era mais uma dessas coisas… Até precisar de verdade. Aí você vê quem resolve e quem some.", name: "Rafael Lima", car: "Fiat Uno" },
  { text: "Fiz mais por segurança mesmo… nem tava pensando em usar. Mas aí deu ruim… vidro quebrado, prejuízo… E foi aí que vi que vale a pena.", name: "Felipe Costa", car: "Volkswagen Gol" },
  { text: "Pra quem trabalha com o carro, isso aqui não é luxo não… É necessidade. Ficar parado é perder dinheiro.", name: "Leandro Santos", car: "Hyundai HB20" },
  { text: "Já fiquei dias sem trabalhar por causa de carro antes… Nunca mais passo por isso. Hoje tenho proteção e fico tranquilo.", name: "André Gomes", car: "Chevrolet Onix" },
  { text: "O valor que eu pago é nada perto do prejuízo que eu teria. Sério mesmo… não compensa arriscar.", name: "Bruno Alves", car: "Fiat Palio" },
  { text: "Eu tava juntando grana pra trocar de carro… Se desse algum problema, já era. A proteção me deu segurança pra seguir com meu plano.", name: "Daniel Ribeiro", car: "Renault Sandero" },
  { text: "Depois que você passa por um susto, muda tudo… Hoje eu não fico sem proteção nem se for carro velho.", name: "Eduardo Martins", car: "Toyota Etios" },
  { text: "Não é nem questão de 'se' vai acontecer… É 'quando'. Eu aprendi isso do jeito difícil.", name: "Fernando Oliveira", car: "Nissan March" },
  { text: "Hoje eu dirijo tranquilo, sem aquele peso na cabeça. Antes qualquer barulho já me preocupava.", name: "Marcelo Pereira", car: "Chevrolet Prisma" },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="bg-[#131316] p-6 flex flex-col gap-4 w-[85vw] max-w-[320px] md:w-auto md:min-w-[320px] shrink-0 whitespace-normal hover:-translate-y-1 transition-transform duration-300 relative border border-white/5 group shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_60%)]" aria-hidden="true" />
      <div className="text-zinc-300 text-[15px] leading-relaxed relative z-10 italic">&quot;{t.text}&quot;</div>
      <div className="flex items-center gap-3 mt-2 relative z-10">
        <div className="w-10 h-10 rounded-full bg-emerald-400/20 border border-zinc-700/50 flex items-center justify-center text-emerald-400 text-sm font-bold">
          {t.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">{t.name}</span>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            Protege seu {t.car}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeedbacksSection() {
  const { open } = useQuotationModal();
  const col1 = testimonials.slice(0, 4);
  const col2 = testimonials.slice(4, 8);
  const col3 = testimonials.slice(8, 12);

  return (
    <section id="feedbacks" className="pb-12 pt-10 lg:pb-24 lg:pt-20 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 relative z-30 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-semibold text-white mb-4 tracking-tighter">
            Eles não arriscaram.<br /><span className="text-emerald-400">E você?</span>
          </h2>
        </div>

        {/* Desktop Marquee Columns */}
        <div className="relative overflow-hidden w-full rounded-2xl [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="hidden md:flex justify-center gap-6 h-[750px] relative z-10">
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v pause-on-hover">
              {[...col1, ...col1].map((t, i) => <TestimonialCard key={`d1-${i}`} t={t} />)}
            </div>
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v-reverse pause-on-hover mt-[-150px]">
              {[...col2, ...col2].map((t, i) => <TestimonialCard key={`d2-${i}`} t={t} />)}
            </div>
            <div className="flex-1 max-w-[380px] flex flex-col gap-6 animate-marquee-v pause-on-hover pt-12">
              {[...col3, ...col3].map((t, i) => <TestimonialCard key={`d3-${i}`} t={t} />)}
            </div>
          </div>
        </div>

        {/* Mobile Marquee Rows */}
        <div className="flex flex-col md:hidden gap-4 relative mt-4 z-10 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex flex-nowrap w-max gap-4 animate-marquee-h-reverse pause-on-hover">
            {[...col1, ...col1].map((t, i) => <TestimonialCard key={`m1-${i}`} t={t} />)}
          </div>
          <div className="flex flex-nowrap w-max gap-4 animate-marquee-h pause-on-hover">
            {[...col2, ...col2].map((t, i) => <TestimonialCard key={`m2-${i}`} t={t} />)}
          </div>
          <div className="flex flex-nowrap w-max gap-4 animate-marquee-h-reverse pause-on-hover">
            {[...col3, ...col3].map((t, i) => <TestimonialCard key={`m3-${i}`} t={t} />)}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center mt-12 z-30 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          <button
            onClick={open}
            className="group relative inline-flex min-w-[200px] cursor-pointer overflow-hidden font-medium tracking-tight rounded-full px-8 py-4 items-center justify-center text-sm text-[#09090b] font-semibold bg-emerald-400 transition-all duration-500 hover:bg-yellow-400 hover:text-zinc-900 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:opacity-0 group-hover:blur-md">
              Quero me proteger agora
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none text-zinc-900 font-bold">
              Quero me proteger agora
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
