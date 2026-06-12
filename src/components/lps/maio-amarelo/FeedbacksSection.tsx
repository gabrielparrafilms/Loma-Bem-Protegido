const track1 = [
  {
    text: "Cara, eu nunca achei que ia precisar... fiz a proteção meio no 'vai que'... Não deu outra... bateram no meu carro 3 meses depois. Se eu não tivesse com a Loma, tava ferrado hoje.",
    author: "Marcos L.",
    car: "Protege seu Chevrolet Prisma",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    text: "Mano, coisa boba... uma batida pequena no trânsito. Mas quando fui ver o valor... já ia pesar demais. Ainda bem que eu tava com a proteção... resolveu tudo.",
    author: "Leandro S.",
    car: "Protege seu Chevrolet Celta",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    text: "Eu uso o carro pra trabalhar todo dia. Ficar sem ele nem pensar. Quando precisei, a Loma resolveu rápido... isso pra mim vale tudo.",
    author: "Paulo C.",
    car: "Protege seu Fiat Uno",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    text: "Sinceramente, eu achava que era mais uma dessas coisas... Até precisar de verdade. Aí você vê quem resolve e quem some.",
    author: "Rodrigo M.",
    car: "Protege seu Volkswagen Gol",
    avatar: "https://i.pravatar.cc/150?img=54",
  },
  {
    text: "Fiz mais por segurança mesmo... nem tava pensando em usar. Mas aí deu ruim... vidro quebrado, prejuízo... E foi aí que vi que vale a pena.",
    author: "Camila R.",
    car: "Protege seu Ford Ka",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
];

const track2 = [
  {
    text: "Pra quem trabalha com o carro, isso aqui não é luxo não... É necessidade. Ficar parado é perder dinheiro.",
    author: "Felipe A.",
    car: "Protege seu Renault Sandero",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    text: "Já fiquei dias sem trabalhar por causa de carro antes... Nunca mais passo por isso. Hoje tenho proteção e fico tranquilo.",
    author: "Diego R.",
    car: "Protege seu Nissan March",
    avatar: "https://i.pravatar.cc/150?img=61",
  },
  {
    text: "O valor que eu pago é nada perto do prejuízo que eu teria. Sério mesmo... não compensa arriscar.",
    author: "Juliana T.",
    car: "Protege seu Renault Kwid",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    text: "Eu tava juntando grana pra trocar de carro... Se desse algum problema, já era. A proteção me deu segurança pra seguir com meu plano.",
    author: "Bruna M.",
    car: "Protege seu Toyota Etios",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    text: "Depois que você passa por um susto, muda tudo... Hoje eu não fico sem proteção nem se for carro velho.",
    author: "Renata V.",
    car: "Protege seu Hyundai HB20",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
];

function FeedbackCard({ text, author, car, avatar }: { text: string; author: string; car: string; avatar: string }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-[1.25rem] p-10 w-[420px] max-md:w-[280px] max-md:p-5 flex-shrink-0 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(250,182,0,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2),0_0_20px_rgba(250,182,0,0.1)] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]">
      <p className="text-[#e4e4e7] text-[1.05rem] max-md:text-[0.9rem] leading-relaxed italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={author}
          width={44}
          height={44}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover border border-white/10"
        />
        <div className="flex flex-col gap-1">
          <h5 className="font-semibold text-white text-base leading-none">{author}</h5>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.05em] bg-[rgba(250,182,0,0.15)] text-[#FAB600] px-1.5 py-0.5 rounded inline-block w-fit">
            {car}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeedbacksSection() {
  const doubled1 = [...track1, ...track1];
  const doubled2 = [...track2, ...track2];

  return (
    <section
      className="bg-[#f8fafc] py-40 max-md:py-24 overflow-hidden relative"
      id="feedbacks"
      style={{ backgroundImage: "linear-gradient(to bottom, #f4f7f8, #ffffff)" }}
    >
      {/* Yellow glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] rounded-[50%] pointer-events-none"
        style={{ background: "rgba(250,182,0,0.05)", filter: "blur(100px)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-center max-w-[1200px] mx-auto px-6 mb-16 relative z-10">
        <h2 className="font-manrope font-bold text-[3rem] max-md:text-[2.25rem] text-[#18181b] leading-[1.1] mb-4">
          O que dizem sobre nós
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[1.25rem] max-md:text-[1.1rem] text-[#52525b]">
          Pessoas reais protegendo o que importa.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative z-10 flex flex-col gap-8">
        {/* Edge fades */}
        <div
          className="absolute top-0 bottom-0 left-0 w-[15vw] z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-[15vw] z-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }}
          aria-hidden="true"
        />

        {/* Track 1 — left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-8 w-max flex-shrink-0 pr-8 animate-marquee-h-45 hover:[animation-play-state:paused]">
            {doubled1.map((f, i) => (
              <FeedbackCard key={i} {...f} />
            ))}
          </div>
        </div>

        {/* Track 2 — right (starts offset) */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-8 w-max flex-shrink-0 pr-8 animate-marquee-h-reverse-40 hover:[animation-play-state:paused]"
            style={{ transform: "translateX(-50%)" }}
          >
            {doubled2.map((f, i) => (
              <FeedbackCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
