"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const coverages = [
  { icon: "shield-alert", title: "Roubo & Furto", desc: "Indenização de até 100% da FIPE em caso de perda total.\nSegurança de verdade quando você mais precisa.", span: 2 },
  { icon: "car-front", title: "Colisão", desc: "Assistência rápida e suporte completo em qualquer tipo de batida.", span: 1 },
  { icon: "cloud-lightning", title: "Eventos Naturais", desc: "Proteção contra enchentes, incêndios e outros imprevistos, sem dor de cabeça.", span: 1 },
  { icon: "users", title: "Danos a Terceiros", desc: "Cobertura para prejuízos causados a outros veículos ou pessoas.", span: 1 },
  { icon: "truck", title: "Guincho 24h", desc: "Atendimento em todo o Brasil, sem limite de KM.\nVocê nunca fica na mão.", span: 2 },
  { icon: "key", title: "Carro Reserva", desc: "Continue sua rotina enquanto resolvemos tudo pra você.", span: 1 },
];

const iconPaths: Record<string, React.ReactNode> = {
  "shield-alert": <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></>,
  "car-front": <><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></>,
  "cloud-lightning": <><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></>,
  "users": <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  "truck": <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></>,
  "key": <><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></>,
};

export default function CoveragesSection() {
  const [particles, setParticles] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => {
        const duration = 6 + Math.random() * 10;
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          duration: duration,
          delay: -(Math.random() * duration), // Negative delay makes them appear instantly
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.4 + 0.2,
        };
      })
    );
  }, []);

  // Autoplay Carousel Logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coverages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % coverages.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + coverages.length) % coverages.length);

  return (
    <section id="coverages" className="relative z-20 w-full border-t border-white/5 flex flex-col items-center overflow-hidden">
      {/* Luz Difusa Forte vindo de baixo com animação */}
      <div className="absolute bottom-0 left-0 w-full h-[90%] pointer-events-none z-0" aria-hidden="true">
        {/* Glow amplo e suave que sobe quase até o topo */}
        <motion.div 
          animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-full origin-bottom" 
          style={{ background: "radial-gradient(ellipse at bottom, #0ABAB5 0%, transparent 70%)" }} 
        />
        {/* Glow intermediário movendo sutilmente pros lados */}
        <motion.div 
          animate={{ opacity: [0.4, 0.6, 0.4], x: ["-50%", "-48%", "-52%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-1/2 w-[120%] h-[70%] bg-[#0ABAB5] blur-[150px]" 
        />
        {/* Núcleo brilhante na base (Flicker sutil e rápido) */}
        <motion.div 
          animate={{ opacity: [0.7, 0.9, 0.75, 0.85, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[250px] bg-[#0ABAB5] blur-[100px]" 
        />
        <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-[40%] md:w-[30%] h-[100px] bg-[#e6f8f7] blur-[50px] opacity-100" />
      </div>

      {/* Partículas flutuantes (agora com z-[5] para ficar na frente da luz mas atrás dos cards) */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{ 
              y: ["120vh", "-20vh"], 
              opacity: [0, p.opacity, p.opacity, 0],
              x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute bg-[#0ABAB5] rounded-full blur-[1px]"
            style={{
              left: p.left,
              top: 0,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 10px 2px rgba(10,186,181,0.5)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 lg:py-32 flex flex-col items-center">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-6 mb-20 max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-medium tracking-tighter leading-[1.1] text-white">
          Tudo o que seu veículo precisa para rodar tranquilo.
        </h2>
        <p className="text-lg text-white font-normal leading-relaxed">
          Proteção completa, sem burocracia e pensada para o dia a dia real, do carro da família ao veículo de trabalho.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
        {coverages.map((cov, i) => (
          <div
            key={i}
            className={`flashlight-card ${cov.span === 2 ? "lg:col-span-2" : "lg:col-span-1"} p-8 md:p-10 relative flex flex-col justify-center overflow-hidden`}
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0ABAB5]/10 blur-[40px] rounded-full pointer-events-none" aria-hidden="true" />
            <div className="w-10 h-10 rounded-lg bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 flex items-center justify-center text-[#0ABAB5] mb-6 relative z-10 shadow-[0_0_15px_rgba(10,186,181,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {iconPaths[cov.icon]}
              </svg>
            </div>
            <h3 className={`${cov.span === 2 ? "text-2xl" : "text-xl"} font-geist font-medium tracking-tight text-white mb-3 relative z-10`}>{cov.title}</h3>
            <p className="text-white text-sm md:text-base leading-relaxed relative z-10 whitespace-pre-line">{cov.desc}</p>
            <div className="flashlight-border" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
