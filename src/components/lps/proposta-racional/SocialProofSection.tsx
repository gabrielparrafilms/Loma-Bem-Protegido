const col1 = [
  { text: 'Cara, eu nunca achei que ia precisar... fiz a proteção meio no "vai que"... Não deu outra... bateram no meu carro 3 meses depois. Se eu não tivesse com a Loma, tava ferrado hoje.', author: "Marcos L.", car: "Protege seu Chevrolet Prisma", avatar: "https://i.pravatar.cc/150?img=11" },
  { text: "Mano, coisa boba... uma batida pequena no trânsito. Mas quando fui ver o valor... já ia pesar demais. Ainda bem que eu tava com a proteção... resolveu tudo.", author: "Leandro S.", car: "Protege seu Chevrolet Celta", avatar: "https://i.pravatar.cc/150?img=12" },
  { text: "Eu uso o carro pra trabalhar todo dia. Ficar sem ele nem pensar. Quando precisei, a Loma resolveu rápido... isso pra mim vale tudo.", author: "Paulo C.", car: "Protege seu Fiat Uno", avatar: "https://i.pravatar.cc/150?img=33" },
  { text: "Sinceramente, eu achava que era mais uma dessas coisas... Até precisar de verdade. Aí você vê quem resolve e quem some.", author: "Rodrigo M.", car: "Protege seu Volkswagen Gol", avatar: "https://i.pravatar.cc/150?img=54" },
];

const col2 = [
  { text: "Fiz mais por segurança mesmo... nem tava pensando em usar. Mas aí deu ruim... vidro quebrado, prejuízo... E foi aí que vi que vale a pena.", author: "Camila R.", car: "Protege seu Ford Ka", avatar: "https://i.pravatar.cc/150?img=59" },
  { text: "Pra quem trabalha com o carro, isso aqui não é luxo não... É necessidade. Ficar parado é perder dinheiro.", author: "Felipe A.", car: "Protege seu Renault Sandero", avatar: "https://i.pravatar.cc/150?img=60" },
  { text: "Já fiquei dias sem trabalhar por causa de carro antes... Nunca mais passo por isso. Hoje tenho proteção e fico tranquilo.", author: "Diego R.", car: "Protege seu Nissan March", avatar: "https://i.pravatar.cc/150?img=61" },
  { text: "O valor que eu pago é nada perto do prejuízo que eu teria. Sério mesmo... não compensa arriscar.", author: "Juliana T.", car: "Protege seu Renault Kwid", avatar: "https://i.pravatar.cc/150?img=68" },
];

const col3 = [
  { text: "Eu tava juntando grana pra trocar de carro... Se desse algum problema, já era. A proteção me deu segurança pra seguir com meu plano.", author: "Bruna M.", car: "Protege seu Toyota Etios", avatar: "https://i.pravatar.cc/150?img=15" },
  { text: "Depois que você passa por um susto, muda tudo... Hoje eu não fico sem proteção nem se for carro velho.", author: "Renata V.", car: "Protege seu Hyundai HB20", avatar: "https://i.pravatar.cc/150?img=31" },
  { text: 'Não é nem questão de "se" vai acontecer... É "quando". Eu aprendi isso do jeito difícil.', author: "Eduardo H.", car: "Protege seu Chevrolet Onix", avatar: "https://i.pravatar.cc/150?img=35" },
  { text: "Hoje eu dirijo tranquilo, sem aquele peso na cabeça. Antes qualquer barulho já me preocupava.", author: "Letícia B.", car: "Protege seu Fiat Palio", avatar: "https://i.pravatar.cc/150?img=40" },
];

type Testimonial = { text: string; author: string; car: string; avatar: string };

function TestimonialCard({ text, author, car, avatar }: Testimonial) {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 w-full group hover:border-[#0ABAB5]/30 transition-colors">
      <p className="text-[15px] text-zinc-200 leading-relaxed font-geist">{text}</p>
      <div className="flex items-center gap-3 pt-2 mt-auto border-t border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          width={40}
          height={40}
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
          style={{ filter: "contrast(1.2) saturate(0.85) sepia(0.1) brightness(0.9)" }}
        />
        <div className="flex flex-col">
          <h5 className="text-white text-sm font-medium">{author}</h5>
          <span className="text-[10px] uppercase tracking-wider bg-[#0ABAB5]/10 text-[#0ABAB5] px-1.5 py-0.5 rounded w-fit mt-0.5">
            {car}
          </span>
        </div>
      </div>
    </div>
  );
}

function MarqueeCol({ items, direction }: { items: Testimonial[]; direction: "up" | "down" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-col w-full h-full relative overflow-visible">
      <div
        className={`flex flex-col gap-6 will-change-transform ${direction === "up" ? "animate-marquee-up pt-10" : "animate-marquee-down"}`}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-32 px-6 w-full relative bg-[#09090b] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] max-w-7xl mx-auto text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-geist font-medium text-white mb-6 tracking-tight">
          O que dizem sobre nós
        </h2>
        <p className="text-lg text-zinc-300">Pessoas reais protegendo o que importa.</p>
      </div>

      <div
        className="max-w-[1400px] mx-auto relative h-[650px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full relative z-10 w-full px-4">
          <MarqueeCol items={col1} direction="up" />
          <MarqueeCol items={col2} direction="down" />
          <div className="hidden md:block">
            <MarqueeCol items={col3} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
}
