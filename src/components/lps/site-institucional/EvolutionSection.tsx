"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

const blocks = [
  { num: "01", title: "Origem com propósito", desc: "A empresa nasce com um objetivo claro: oferecer proteção real para pessoas que não tinham acesso a soluções confiáveis. Desde o início, o foco foi construir algo sólido, baseado em responsabilidade e entrega verdadeira." },
  { num: "02", title: "Estrutura e superação", desc: "Com o crescimento, surgem desafios que exigem organização, adaptação e evolução. A operação se fortalece ao estruturar processos, desenvolver gestão e superar momentos críticos com consistência." },
  { num: "03", title: "Crescimento e solidez", desc: "A empresa se consolida como uma operação estruturada, com crescimento acelerado, base sólida de clientes e capacidade de expansão. O foco continua sendo evolução constante e segurança para quem confia no serviço." },
];

export default function EvolutionSection() {
  const { open } = useQuotationModal();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mobile Carousel State
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    // Calculate which image is most visible
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveCarouselIndex(index);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Progress logic
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Block opacity & scale
  const block1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], [1, 1, 0.2, 0.2]);
  const block1Scale = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], [1, 1, 0.95, 0.95]);

  const block2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.63, 0.66, 1], [0.2, 0.2, 1, 1, 0.2, 0.2]);
  const block2Scale = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.63, 0.66, 1], [0.95, 0.95, 1, 1, 0.95, 0.95]);

  const block3Opacity = useTransform(scrollYProgress, [0, 0.63, 0.66, 1], [0.2, 0.2, 1, 1]);
  const block3Scale = useTransform(scrollYProgress, [0, 0.63, 0.66, 1], [0.95, 0.95, 1, 1]);

  // Dot colors
  const dot1Bg = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], ["#27272a", "#27272a", "#0ABAB5", "#0ABAB5"]);
  const dot2Bg = useTransform(scrollYProgress, [0, 0.63, 0.66, 1], ["#27272a", "#27272a", "#0ABAB5", "#0ABAB5"]);
  const dot3Bg = useTransform(scrollYProgress, [0, 0.95, 1], ["#27272a", "#27272a", "#0ABAB5"]);

  // Images Opacity
  const images1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 1], [1, 1, 0, 0]);
  const images2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.33, 0.63, 0.66, 1], [0, 0, 1, 1, 0, 0]);

  // Content positioning
  const contentY = useTransform(scrollYProgress, [0.63, 0.8], ["0vh", "15vh"]);

  // Background Parallax
  const bgMasterOpacity = useTransform(scrollYProgress, [0.33, 0.66, 1], [0, 0.6, 1]);
  const baseOriginalScale = useTransform(scrollYProgress, [0.33, 0.66, 1], [2.5, 1.6, 1]);
  const baseOriginalY = useTransform(scrollYProgress, [0.33, 0.66, 1], ["100%", "40%", "15%"]);
  const ceuScale = useTransform(scrollYProgress, [0.33, 0.66, 1], [4, 2, 1.1]);
  const ceuY = useTransform(scrollYProgress, [0.33, 0.66, 1], ["200%", "40%", "-60%"]);

  // CTA
  const ctaY = useTransform(scrollYProgress, [0.8, 1], [20, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <>
      {/* DESKTOP: Scrollytelling Timeline */}
      <section ref={containerRef} id="evolution-timeline-desktop" className="relative hidden md:block w-full h-[300vh] bg-[#09090b] text-white border-t border-white/5 z-30">
        
        {/* Sticky Container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-10">
          
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-md -z-20 pointer-events-none" />

          {/* Parallax Background (Phase 3) */}
          <motion.div style={{ opacity: bgMasterOpacity }} className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
            <motion.img 
              src="/lps/site-institucional/Ceu.jpg" 
              alt="Céu Loma" 
              style={{ scale: ceuScale, y: ceuY }}
              className="absolute top-0 left-0 w-full h-[300%] object-cover grayscale-[20%]"
            />
            <motion.img 
              src="/lps/site-institucional/Base Original.png" 
              alt="Prédio Loma" 
              style={{ scale: baseOriginalScale, y: baseOriginalY }}
              className="absolute bottom-0 left-0 w-full h-[120%] object-cover object-bottom grayscale-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/95 via-[#09090b]/75 to-[#09090b]/95" />
          </motion.div>

          {/* Main Content */}
          <motion.div style={{ y: contentY }} className="w-full max-w-6xl px-6 flex flex-col items-center relative z-10">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-geist font-bold tracking-tighter mb-4">Origem e Consolidação</h2>
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">Uma trajetória de solidez e crescimento contínuo</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto flex flex-col">
              
              {/* Text Blocks */}
              <div className="grid grid-cols-3 gap-8 w-full mb-8 relative z-10">
                <motion.div style={{ opacity: block1Opacity, scale: block1Scale }} className="flex flex-col origin-bottom">
                  <span className="text-[#0ABAB5] font-bold font-geist text-xl mb-2">{blocks[0].num}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{blocks[0].title}</h3>
                  <p className="text-white leading-relaxed text-sm">{blocks[0].desc}</p>
                </motion.div>
                
                <motion.div style={{ opacity: block2Opacity, scale: block2Scale }} className="flex flex-col origin-bottom">
                  <span className="text-[#0ABAB5] font-bold font-geist text-xl mb-2">{blocks[1].num}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{blocks[1].title}</h3>
                  <p className="text-white leading-relaxed text-sm">{blocks[1].desc}</p>
                </motion.div>

                <motion.div style={{ opacity: block3Opacity, scale: block3Scale }} className="flex flex-col origin-bottom">
                  <span className="text-[#0ABAB5] font-bold font-geist text-xl mb-2">{blocks[2].num}</span>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{blocks[2].title}</h3>
                  <p className="text-white leading-relaxed text-sm">{blocks[2].desc}</p>
                </motion.div>
              </div>

              {/* Timeline Line & Dots */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full mt-4">
                <motion.div style={{ width: progressWidth }} className="absolute top-0 left-0 h-full bg-[#0ABAB5] rounded-full shadow-[0_0_15px_rgba(10,186,181,0.6)] origin-left" />
                
                <motion.div style={{ left: carLeft }} className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center bg-zinc-900 rounded-full border border-[#0ABAB5] p-1.5 shadow-[0_0_15px_rgba(10,186,181,0.8)] text-[#0ABAB5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                </motion.div>

                <div className="absolute inset-0 pointer-events-none transform -translate-y-1/2">
                  <div className="absolute left-[0%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0ABAB5] border-2 border-[#0ABAB5] shadow-[0_0_15px_rgba(10,186,181,0.8)] z-10" />
                  <motion.div style={{ backgroundColor: dot1Bg, borderColor: dot1Bg }} className="absolute left-[33.33%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10" />
                  <motion.div style={{ backgroundColor: dot2Bg, borderColor: dot2Bg }} className="absolute left-[66.66%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10" />
                  <motion.div style={{ backgroundColor: dot3Bg, borderColor: dot3Bg }} className="absolute left-[100%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full flex justify-center mt-8 z-30">
                <motion.button 
                  onClick={open}
                  style={{ opacity: ctaOpacity, y: ctaY }}
                  className="group inline-flex cursor-pointer overflow-hidden font-medium tracking-tight rounded-full px-8 py-3 items-center justify-center text-sm text-[#09090b] font-semibold bg-[#0ABAB5] transition-all duration-500 hover:bg-yellow-400 hover:text-zinc-900 shadow-[0_0_20px_rgba(10,186,181,0.4)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                    Falar com um Especialista
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 blur-md group-hover:blur-none text-zinc-900 font-bold">
                    Falar com um Especialista
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </motion.button>
              </div>

              {/* Images Grid Container */}
              <div className="w-full max-w-6xl mx-auto mt-8 grid grid-cols-1 grid-rows-1 z-20 place-items-center">
                
                {/* Phase 1 Images */}
                <motion.div style={{ opacity: images1Opacity }} className="col-start-1 row-start-1 grid grid-cols-2 gap-8 w-full max-w-2xl pointer-events-none">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
                    <img src="/lps/site-institucional/Loma 2017 2.jpg" alt="Loma 2017" className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
                    <img src="/lps/site-institucional/Loma 2017 3.jpg" alt="Loma 2017" className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Phase 2 Images */}
                <motion.div style={{ opacity: images2Opacity }} className="col-start-1 row-start-1 grid grid-cols-3 gap-6 w-full pointer-events-none">
                  {["Loma Campinas.png", "Loma Osasco.jpg", "Predio Loma.png"].map((img, idx) => (
                    <div key={idx} className="relative w-full h-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                      <img src={`/lps/site-institucional/${img}`} alt="Unidade Loma" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[#09090b]/10 pointer-events-none" />
                    </div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE: Static Fallback Layout */}
      <section id="evolution-timeline-mobile" className="md:hidden relative w-full bg-[#09090b] text-white py-16 overflow-hidden border-t border-white/5 z-30">
        <div className="w-full max-w-xl mx-auto px-6 flex flex-col gap-12">
          
          <div className="text-center mb-4">
            <h2 className="text-3xl font-geist font-bold tracking-tighter mb-4">Origem e Consolidação</h2>
            <p className="text-white/80 text-lg font-medium tracking-wide">Uma trajetória de solidez e crescimento contínuo</p>
          </div>

          {/* Block 1 */}
          <div className="flex flex-col gap-4">
            <span className="text-[#0ABAB5] font-bold font-geist text-xl">{blocks[0].num}</span>
            <h3 className="text-2xl font-bold tracking-tight">{blocks[0].title}</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-2">{blocks[0].desc}</p>
            <div className="grid grid-cols-2 gap-3">
              <img src="/lps/site-institucional/Loma 2017 2.jpg" alt="Loma 2017" className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl grayscale-[50%]" />
              <img src="/lps/site-institucional/Loma 2017 3.jpg" alt="Loma 2017" className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl grayscale-[50%]" />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col gap-4">
            <span className="text-[#0ABAB5] font-bold font-geist text-xl">{blocks[1].num}</span>
            <h3 className="text-2xl font-bold tracking-tight">{blocks[1].title}</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-2">{blocks[1].desc}</p>
            <div className="relative w-full">
              <div 
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 w-full hide-scrollbar relative"
              >
                <img src="/lps/site-institucional/Loma Campinas.png" alt="Loma Campinas" className="w-[85%] flex-shrink-0 snap-center aspect-[4/3] object-cover rounded-xl shadow-xl" />
                <img src="/lps/site-institucional/Loma Osasco.jpg" alt="Loma Osasco" className="w-[85%] flex-shrink-0 snap-center aspect-[4/3] object-cover rounded-xl shadow-xl" />
                <img src="/lps/site-institucional/Predio Loma.png" alt="Prédio Loma" className="w-[85%] flex-shrink-0 snap-center aspect-[4/3] object-cover rounded-xl shadow-xl" />
              </div>
              
              {/* Swipe Arrow Hint */}
              {activeCarouselIndex === 0 && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/80 animate-pulse bg-black/30 rounded-full p-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              )}

              {/* Dot Indicators */}
              <div className="flex justify-center items-center gap-2 mt-2">
                {[0, 1, 2].map((idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 rounded-full transition-all duration-300 ${activeCarouselIndex === idx ? 'w-6 bg-[#0ABAB5]' : 'w-2 bg-white/20'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col gap-4">
            <span className="text-[#0ABAB5] font-bold font-geist text-xl">{blocks[2].num}</span>
            <h3 className="text-2xl font-bold tracking-tight">{blocks[2].title}</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-2">{blocks[2].desc}</p>
            <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/lps/site-institucional/Ceu.jpg" alt="Céu" className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" />
              <img src="/lps/site-institucional/Base Original.png" alt="Loma Evolução" className="absolute bottom-0 w-full h-[120%] object-cover object-bottom relative z-10" />
            </div>
          </div>

          <div className="w-full flex justify-center mt-4">
            <button 
              onClick={open}
              className="w-full max-w-sm group inline-flex font-medium tracking-tight rounded-full px-8 py-4 items-center justify-center text-[15px] text-[#09090b] font-bold bg-[#0ABAB5] transition-all duration-500 hover:bg-yellow-400 shadow-[0_0_20px_rgba(10,186,181,0.4)]"
            >
              Falar com um Especialista
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
