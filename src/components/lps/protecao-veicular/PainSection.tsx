"use client";

import { TrendingDown, MapPin, CalendarX2 } from "lucide-react";
import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function PainSection() {
  const { open } = useQuotationModal();

  return (
    <section
      id="a-ferida"
      className="w-full bg-[#f8f9fa] relative z-20 py-16 md:py-32 overflow-hidden border-b border-gray-200"
    >
      {/* Fundo: Grid & Luzes Flutuantes (Adaptado para modo claro) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Grid Suave */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        {/* Luzes Tiffany (Teal) */}
        <div
          className="absolute w-[40rem] h-[40rem] bg-[#0ABAB5]/10 blur-[120px] rounded-full animate-pulse mix-blend-multiply opacity-70"
          style={{ transform: "translate(-30%, -20%)", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute w-[50rem] h-[50rem] bg-gray-200/50 blur-[150px] rounded-full animate-pulse mix-blend-multiply opacity-80"
          style={{
            transform: "translate(30%, 20%)",
            animationDuration: "12s",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-24">

        {/* Estação 1: Intro */}
        <div className="max-w-3xl mx-auto text-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="text-xs text-red-600 tracking-[0.2em] uppercase font-bold mb-6 block">
            O Problema
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
            Você já tentou proteger seu veículo,
            <br />
            Talvez mais de uma vez.
          </h2>
          <p className="text-xl text-gray-600">
            Cotou seguro. Respondeu tudo certo. E no final:{" "}
            <span className="text-red-500 font-semibold border-b border-red-500/30 pb-1">
              negado
            </span>
            .
          </p>
        </div>

        {/* Estação 2: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="ferida-card h-[22rem] flex flex-col relative group bg-white border-gray-100 border rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">

            {/* Top Visual Area */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-gray-50/80 to-white flex items-end justify-center overflow-hidden border-b border-gray-50/50 pointer-events-none pt-6">
              <div className="w-[80%] h-full bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border border-gray-100 border-b-0 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Graph Line */}
                <svg
                  className="absolute inset-x-0 bottom-4 w-full h-16 text-red-400 group-hover:text-[#0ABAB5] transition-colors duration-500"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  {/* Shaded area */}
                  <path
                    d="M0,10 C50,10 80,40 120,30 C160,20 180,50 200,50 L200,60 L0,60 Z"
                    fill="currentColor"
                    opacity="0.05"
                  />
                  {/* Line */}
                  <path
                    d="M0,10 C50,10 80,40 120,30 C160,20 180,50 200,50"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="200"
                    cy="50"
                    r="4"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                {/* UI Elements */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
                  <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-red-50 text-red-600 text-[9px] font-bold tracking-wider rounded border border-red-100 flex items-center gap-1 group-hover:bg-[#0ABAB5]/10 group-hover:text-[#0ABAB5] group-hover:border-[#0ABAB5]/20 transition-colors duration-500">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  RECUSADO
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 mt-auto p-8 pt-0 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#0ABAB5]/10 group-hover:scale-110 transition-all duration-500 border border-red-100 group-hover:border-[#0ABAB5]/20 shadow-sm">
                <TrendingDown className="w-6 h-6 text-red-500 group-hover:text-[#0ABAB5] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-geist font-semibold text-gray-900 mb-2 group-hover:text-[#0ABAB5] transition-colors duration-500">
                Score Baixo
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Motivo principal de recusa nas seguradoras tradicionais.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ferida-card h-[22rem] flex flex-col relative group bg-white border-gray-100 border rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">

            {/* Top Visual Area */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-gray-50/80 to-white flex items-end justify-center overflow-hidden border-b border-gray-50/50 pointer-events-none pt-6">
              <div className="w-[80%] h-full bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border border-gray-100 border-b-0 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 relative overflow-hidden">

                {/* Map abstract lines */}
                <svg
                  className="absolute inset-0 w-full h-full text-gray-100"
                  viewBox="0 0 200 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={4}
                >
                  <path d="M-20,30 Q50,50 90,10 T220,40" />
                  <path d="M30,-20 Q50,40 20,120" />
                  <path d="M130,-20 Q110,50 150,120" />
                  <path
                    d="M-20,80 Q50,70 90,100"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Radar / Zone */}
                <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-400/10 group-hover:bg-[#0ABAB5]/10 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] transition-colors duration-500"></div>
                <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-400/20 group-hover:bg-[#0ABAB5]/20 rounded-full transition-colors duration-500"></div>

                {/* Pin */}
                <svg
                  className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-[85%] w-7 h-7 text-red-500 group-hover:text-[#0ABAB5] drop-shadow-md transition-colors duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>

                {/* UI Elements */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-500 text-[9px] font-bold tracking-wider rounded border border-gray-100 flex items-center gap-1 shadow-sm">
                  ZONA DE RISCO
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 mt-auto p-8 pt-0 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#0ABAB5]/10 group-hover:scale-110 transition-all duration-500 border border-red-100 group-hover:border-[#0ABAB5]/20 shadow-sm">
                <MapPin className="w-6 h-6 text-red-500 group-hover:text-[#0ABAB5] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-geist font-semibold text-gray-900 mb-2 group-hover:text-[#0ABAB5] transition-colors duration-500">
                CEP de Risco
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Você penalizado pelo lugar onde mora ou trabalha.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ferida-card h-[22rem] flex flex-col relative group bg-white border-gray-100 border rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">

            {/* Top Visual Area */}
            <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-gray-50/80 to-white flex items-end justify-center overflow-hidden border-b border-gray-50/50 pointer-events-none pt-6">
              <div className="w-[80%] h-full bg-white rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border border-gray-100 border-b-0 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 relative flex flex-col items-center justify-start pt-5 gap-3 overflow-hidden">

                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                {/* Speedometer */}
                <div className="relative z-10 flex flex-col items-center">
                  <svg
                    className="w-20 h-10 text-gray-200"
                    viewBox="0 0 100 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={8}
                    strokeLinecap="round"
                  >
                    {/* Base arc */}
                    <path d="M10,40 A40,40 0 0,1 90,40" stroke="#F3F4F6" />
                    {/* High Mileage / Danger arc */}
                    <path
                      d="M50,11 A40,40 0 0,1 90,40"
                      stroke="currentColor"
                      className="text-red-400 group-hover:text-[#0ABAB5] transition-colors duration-500"
                    />
                    {/* Needle */}
                    <line
                      x1="50"
                      y1="40"
                      x2="70"
                      y2="18"
                      stroke="currentColor"
                      className="text-gray-700"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="40"
                      r="4"
                      fill="currentColor"
                      className="text-gray-700"
                      stroke="none"
                    />
                  </svg>
                  <span className="text-[10px] font-semibold text-gray-400 mt-1 uppercase tracking-widest">
                    Uso severo
                  </span>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-amber-50 text-amber-600 text-[9px] font-bold tracking-wider rounded border border-amber-100 flex items-center gap-1 group-hover:bg-[#0ABAB5]/10 group-hover:text-[#0ABAB5] group-hover:border-[#0ABAB5]/20 transition-colors duration-500 shadow-sm">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  +10 ANOS
                </div>

                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                  <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 mt-auto p-8 pt-0 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#0ABAB5]/10 group-hover:scale-110 transition-all duration-500 border border-red-100 group-hover:border-[#0ABAB5]/20 shadow-sm">
                <CalendarX2 className="w-6 h-6 text-red-500 group-hover:text-[#0ABAB5] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-geist font-semibold text-gray-900 mb-2 group-hover:text-[#0ABAB5] transition-colors duration-500">
                Carro Antigo / Uso
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Veículos com mais de 10 anos ou usados para trabalho.
              </p>
            </div>
          </div>
        </div>

        {/* Estação 3: Conclusão */}
        <div className="max-w-3xl mx-auto text-center space-y-8 text-xl text-gray-700 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
          <p>
            As seguradoras tradicionais têm uma lista enorme de motivos para
            dizer não. E quem mais precisa de proteção é exatamente quem elas
            mais rejeitam.
          </p>
          <p>
            Aí você faz o quê? Fica torcendo para não acontecer nada. Todo dia.
            Toda viagem.
          </p>
          <div className="inline-block px-8 py-6 rounded-2xl bg-red-50/80 border border-red-200 text-gray-800 font-medium mt-4 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 block">
              Isso não é descuido. É uma armadilha que o sistema criou.
              <br />E você ficou preso nela sem culpa nenhuma.
            </span>
          </div>

          <div className="pt-10 flex justify-center">
            <button
              onClick={open}
              className="group/cta3 relative inline-flex items-center justify-center overflow-hidden font-medium tracking-tight bg-[#0ABAB5] rounded-full px-8 py-4 text-base md:text-lg text-white shadow-[0_0_20px_rgba(10,186,181,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Revex Hover BG Fill (Yellow) */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="w-8 h-8 rounded-full bg-[#FACC15] transition-all duration-700 ease-out scale-0 group-hover/cta3:scale-[30] opacity-0 group-hover/cta3:opacity-100"></span>
              </span>

              {/* Original Text */}
              <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/cta3:-translate-y-10 group-hover/cta3:opacity-0 font-semibold">
                Simular meu plano agora
              </span>
              {/* Hover Text (Black) */}
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-10 group-hover/cta3:translate-y-0 group-hover/cta3:opacity-100 opacity-0 rounded-full text-black font-bold">
                Simular meu plano agora
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
