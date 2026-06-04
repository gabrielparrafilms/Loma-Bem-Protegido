"use client";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const testimonials = [
  { text: "Cara, eu nunca achei que ia precisar… fiz a proteção meio no 'vai que'… Não deu outra… bateram no meu carro 3 meses depois. Se eu não tivesse com a Loma, tava ferrado hoje.", name: "Carlos Silva", car: "Ford Ka", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { text: "Mano, coisa boba… uma batida pequena no trânsito. Mas quando fui ver o valor… já ia pesar demais. Ainda bem que eu tava com a proteção… resolveu tudo.", name: "Tiago Souza", car: "Chevrolet Celta", avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
  { text: "Eu uso o carro pra trabalhar todo dia. Ficar sem ele nem pensar. Quando precisei, a Loma resolveu rápido… isso pra mim vale tudo.", name: "Marcos Paulo", car: "Renault Kwid", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
  { text: "Sinceramente, eu achava que era mais uma dessas coisas… Até precisar de verdade. Aí você vê quem resolve e quem some.", name: "Rafael Lima", car: "Fiat Uno", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { text: "Fiz mais por segurança mesmo… nem tava pensando em usar. Mas aí deu ruim… vidro quebrado, prejuízo… E foi aí que vi que vale a pena.", name: "Felipe Costa", car: "Volkswagen Gol", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
  { text: "Pra quem trabalha com o carro, isso aqui não é luxo não… É necessidade. Ficar parado é perder dinheiro.", name: "Leandro Santos", car: "Hyundai HB20", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
  { text: "Já fiquei dias sem trabalhar por causa de carro antes… Nunca mais passo por isso. Hoje tenho proteção e fico tranquilo.", name: "André Gomes", car: "Chevrolet Onix", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
  { text: "O valor que eu pago é nada perto do prejuízo que eu teria. Sério mesmo… não compensa arriscar.", name: "Bruno Alves", car: "Fiat Palio", avatar: "https://randomuser.me/api/portraits/men/91.jpg" },
  { text: "Eu tava juntando grana pra trocar de carro… Se desse algum problema, já era. A proteção me deu segurança pra seguir com meu plano.", name: "Daniel Ribeiro", car: "Renault Sandero", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
  { text: "Depois que você passa por um susto, muda tudo… Hoje eu não fico sem proteção nem se for carro velho.", name: "Eduardo Martins", car: "Toyota Etios", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
  { text: "Não é nem questão de 'se' vai acontecer… É 'quando'. Eu aprendi isso do jeito difícil.", name: "Fernando Oliveira", car: "Nissan March", avatar: "https://randomuser.me/api/portraits/men/38.jpg" },
  { text: "Hoje eu dirijo tranquilo, sem aquele peso na cabeça. Antes qualquer barulho já me preocupava.", name: "Marcelo Pereira", car: "Chevrolet Prisma", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="bg-white p-5 md:p-8 flex flex-col gap-3 md:gap-4 w-[75vw] max-w-[300px] md:max-w-none md:w-auto md:min-w-[380px] shrink-0 whitespace-normal hover:-translate-y-1 transition-transform duration-300 relative border border-zinc-200 group shadow-sm rounded-[1.25rem] md:rounded-3xl overflow-hidden hover:border-[#0ABAB5]/40 hover:shadow-lg">
      <div className="text-zinc-700 text-[13px] md:text-[15px] leading-relaxed relative z-10 italic font-medium">&quot;{t.text}&quot;</div>
      <div className="flex items-center gap-3 mt-1 md:mt-2 relative z-10">
        <img src={t.avatar} alt={t.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow-sm" />
        <div className="flex flex-col">
          <span className="text-[13px] md:text-sm font-semibold text-zinc-900">{t.name}</span>
          <span className="text-[9px] md:text-[10px] font-bold text-[#0ABAB5] uppercase tracking-wide flex items-center gap-1 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
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
    <section id="feedbacks" className="pb-12 pt-10 lg:pb-24 lg:pt-20 relative z-10 border-t border-zinc-200 overflow-hidden bg-[#FAFAFA]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Luzes Animadas de Fundo */}
      <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-1" aria-hidden="true" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0ABAB5]/15 blur-[100px] rounded-full pointer-events-none animate-float-2" aria-hidden="true" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16 relative z-30 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-semibold text-zinc-900 mb-4 tracking-tighter leading-[1.1]">
            A proteção que funciona na prática.<br /><span className="text-[#0ABAB5]">Ouça quem já testou e aprovou.</span>
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl font-medium mt-4 max-w-2xl">
            Junte-se a milhares de motoristas que hoje rodam tranquilos sabendo que têm com quem contar na hora do imprevisto.
          </p>
        </div>

        {/* Desktop Marquee Columns */}
        <div className="relative overflow-hidden w-full rounded-2xl [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="hidden md:flex justify-center gap-6 h-[750px] relative z-10">
            <div className="flex-1 max-w-[420px] flex flex-col gap-6 animate-marquee-v pause-on-hover">
              {[...col1, ...col1].map((t, i) => <TestimonialCard key={`d1-${i}`} t={t} />)}
            </div>
            <div className="flex-1 max-w-[420px] flex flex-col gap-6 animate-marquee-v-reverse pause-on-hover mt-[-150px]">
              {[...col2, ...col2].map((t, i) => <TestimonialCard key={`d2-${i}`} t={t} />)}
            </div>
            <div className="flex-1 max-w-[420px] flex flex-col gap-6 animate-marquee-v pause-on-hover pt-12">
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

        <div className="w-full flex justify-center mt-12 z-30 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          <button
            onClick={open}
            className="group relative inline-flex min-w-[200px] cursor-pointer overflow-hidden font-bold tracking-widest rounded-full px-8 py-4 items-center justify-center text-sm text-[#0ABAB5] bg-zinc-900 transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02] shadow-xl shadow-zinc-900/10 uppercase"
          >
            <span className="relative z-10 flex items-center gap-2 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
              Quero me proteger agora
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none font-bold">
              Quero me proteger agora
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
