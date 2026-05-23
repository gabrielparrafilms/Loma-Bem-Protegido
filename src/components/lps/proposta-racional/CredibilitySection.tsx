export default function CredibilitySection() {
  const stats = [
    { value: "2016", label: "Fundação", desc: "9 anos protegendo veículos ininterruptamente." },
    { value: "15MM", label: "Indenizados", desc: "Em histórico de sinistros pagos." },
    { value: "Milhares", label: "De associados", desc: "Base ativa e crescente em todo o país." },
  ];

  return (
    <section className="w-full relative bg-[#f8fafc] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#0ABAB5]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-10" />

      <div className="py-16 md:py-32 px-6 max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
          <h2 className="text-4xl md:text-5xl font-geist font-medium text-zinc-900 mb-6 tracking-tight">
            Por que escolher a Loma?
          </h2>
          <p className="text-lg text-zinc-500 mb-16">Os números provam a solidez.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] relative flex flex-col items-center justify-center p-10 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_8px_30px_rgba(10,186,181,0.08)] hover:border-[#0ABAB5]/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[40px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />
              <span className="text-6xl md:text-7xl font-geist font-bold text-[#0ABAB5] mb-2 drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-xl font-medium text-zinc-900 mb-2">{stat.label}</span>
              <p className="text-sm text-zinc-500 text-center">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
