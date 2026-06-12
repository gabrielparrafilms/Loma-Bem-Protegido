export default function SocialProofSection() {
  return (
    <section id="social-proof" className="relative z-20 w-full py-16 lg:py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-transparent">
      {/* Image Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" aria-hidden="true">
        <img src="/lps/site-institucional/Img Social.webp" alt="" loading="lazy" className="w-full h-full object-cover object-[75%_center] md:object-center" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(circle at center, black 0%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 80%)" }} aria-hidden="true" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-16 md:gap-20">
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-geist font-medium tracking-tighter leading-[1.05] text-white text-center max-w-4xl">
          Mais de <span className="text-[#0ABAB5] font-bold tracking-tight whitespace-nowrap">20.000</span>{" "}
          <br className="block md:hidden" />brasileiros já{" "}
          <br className="block md:hidden" />escolheram a <span className="whitespace-nowrap">LOMA.</span>
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl">
          <div className="bg-[#131316] rounded-3xl flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden border border-white/5 group shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/5 to-transparent opacity-50" aria-hidden="true" />
            <span className="text-[4rem] md:text-[7rem] font-geist font-bold tracking-tighter text-[#0ABAB5] leading-none mb-2 md:mb-4 text-center group-hover:scale-105 transition-transform duration-500 relative z-10">98%</span>
            <span className="text-sm md:text-xl font-medium tracking-[0.15em] text-white/90 uppercase text-center relative z-10">Eventos Resolvidos</span>
          </div>

          <div className="bg-[#131316] rounded-3xl flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden border border-white/5 group shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ABAB5]/5 to-transparent opacity-50" aria-hidden="true" />
            <span className="text-[4rem] md:text-[7rem] font-geist font-bold tracking-tighter text-[#0ABAB5] leading-none mb-2 md:mb-4 text-center whitespace-nowrap group-hover:scale-105 transition-transform duration-500 relative z-10">40 Dias</span>
            <span className="text-sm md:text-xl font-medium tracking-[0.15em] text-white/90 uppercase text-center relative z-10">Ressarcimento Médio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
