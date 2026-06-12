/* eslint-disable @next/next/no-img-element */

import AppLomaVideoSequence from "./AppLomaVideoSequence";

const appScreens = [
  { src: "/lps/site-institucional/Iphone 1.jpg", alt: "Tela do App 1" },
  { src: "/lps/site-institucional/Iphone 2.jpg", alt: "Tela do App 2" },
  { src: "/lps/site-institucional/Iphone 3.jpg", alt: "Tela do App Principal" },
  { src: "/lps/site-institucional/Iphone 9.jpg", alt: "Tela do App 3" },
  { src: "/lps/site-institucional/Iphone 4.jpg", alt: "Tela do App 4" },
];

export default function AppLomaSection() {
  return (
    <section id="app-loma" className="relative w-full min-h-screen py-16 lg:py-32 flex items-center justify-center border-t border-white/5 z-10">
      {/* Background Sequence & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Sequência de frames animada em Canvas ping-pong */}
        <AppLomaVideoSequence />
        
        {/* Glows Azul Tiffany */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ABAB5]/10 blur-[120px] rounded-full z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0ABAB5]/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 z-10" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center relative z-30">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-tight font-bold text-white tracking-tight mb-6 font-geist">
            Conheça nosso <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-[#08938F]">aplicativo Loma</span>
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            <strong className="text-white font-semibold">Tenha sua proteção sempre à mão.</strong> Pelo app, você acessa boletos, acompanha seus serviços, atualiza dados e fala direto com a gente de forma rápida e simples.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-10">
            Baixe agora e aproveite mais praticidade no seu dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://apps.apple.com/au/app/loma-prote%C3%A7%C3%A3o-veicular/id1456159026" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 duration-300">
              <img src="https://pages.greatpages.com.br/four-comercial.pages.net.br-testetestestesteteste/1759952664/imagens/desktop/3336933_1_70434.png" alt="Baixar na App Store" className="h-[56px] w-auto object-contain drop-shadow-lg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=br.com.hinovamobile.lomaprotecao&hl=en" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 duration-300">
              <img src="https://pages.greatpages.com.br/four-comercial.pages.net.br-testetestestesteteste/1759952664/imagens/desktop/3336933_1_47695.png" alt="Disponível no Google Play" className="h-[56px] w-auto object-contain drop-shadow-lg" />
            </a>
          </div>

          {/* App Screenshots */}
          <div className="w-full mt-8 md:mt-12">
            {/* Desktop Fan Effect */}
            <div className="hidden md:flex relative justify-center items-center h-[550px] w-full max-w-[1000px] mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none z-0" aria-hidden="true" />
              <img src={appScreens[0].src} alt={appScreens[0].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[360px] w-[220px] rounded-[32px] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-[calc(50%+20px)] z-10 opacity-60 hover:opacity-100 hover:z-40 -rotate-12 scale-75 hover:scale-90 hover:-rotate-6 cursor-pointer" />
              <img src={appScreens[1].src} alt={appScreens[1].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[180px] w-[240px] rounded-[32px] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-[calc(50%+20px)] z-20 opacity-80 hover:opacity-100 hover:z-40 -rotate-6 scale-90 hover:scale-100 hover:-rotate-3 cursor-pointer" />
              <img src={appScreens[3].src} alt={appScreens[3].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[180px] w-[240px] rounded-[32px] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-[calc(50%+20px)] z-20 opacity-80 hover:opacity-100 hover:z-40 rotate-6 scale-90 hover:scale-100 hover:rotate-3 cursor-pointer" />
              <img src={appScreens[4].src} alt={appScreens[4].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[360px] w-[220px] rounded-[32px] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-[calc(50%+20px)] z-10 opacity-60 hover:opacity-100 hover:z-40 rotate-12 scale-75 hover:scale-90 hover:rotate-6 cursor-pointer" />
              <img src={appScreens[2].src} alt={appScreens[2].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] rounded-[32px] border border-emerald-500/30 shadow-[0_20px_60px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-[calc(50%+20px)] z-30 hover:scale-105 cursor-pointer" />
            </div>

            {/* Mobile Marquee */}
            <div className="flex md:hidden w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-12 mt-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
              <div className="flex w-max animate-marquee-h gap-6 px-4 pause-on-hover items-center">
                {[...appScreens, ...appScreens].map((s, i) => (
                  <img key={i} src={s.src} alt={s.alt} className="w-[200px] h-auto rounded-[32px] border border-white/10 shadow-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
