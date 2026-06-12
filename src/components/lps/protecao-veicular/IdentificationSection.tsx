"use client";

import { useQuotationModal } from "@/components/shared/QuotationModal/context";

export default function IdentificationSection() {
  const { open } = useQuotationModal();

  return (
    <section
      id="identificacao"
      className="relative bg-[#f8f9fa] overflow-hidden"
    >
      {/* Fundo Atmosférico */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Grid Suave */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        {/* Luz Tiffany e Cinza Flutuantes */}
        <div
          className="absolute w-[40rem] h-[40rem] bg-[#0ABAB5]/10 blur-[150px] rounded-full animate-pulse mix-blend-multiply opacity-70 top-1/4 left-1/4"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute w-[50rem] h-[50rem] bg-gray-200/50 blur-[150px] rounded-full animate-pulse mix-blend-multiply opacity-80 bottom-1/4 right-1/4"
          style={{ animationDuration: "15s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-6 max-w-4xl mx-auto flex flex-col items-center text-center min-h-[70dvh] py-16 md:py-32 justify-center">
        <div id="b2-texts">
          <h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-4xl md:text-5xl lg:text-6xl font-geist font-medium tracking-tight text-gray-900 mb-6">
            Você não usa o carro <br className="md:hidden" />só para passear.
          </h2>
          <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.15s_both] w-20 h-1 bg-gradient-to-r from-[#0ABAB5] to-transparent mb-10 rounded-full mx-auto"></div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] text-xl md:text-2xl text-gray-800">
              Você usa para trabalhar. Para garantir o mês.
            </p>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] flex flex-wrap justify-center gap-3 my-10">
              <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm md:text-base text-gray-700 shadow-sm hover:border-[#0ABAB5]/40 transition-colors cursor-default">
                Motorista de app
              </span>
              <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm md:text-base text-gray-700 shadow-sm hover:border-[#0ABAB5]/40 transition-colors cursor-default">
                Vendedor externo
              </span>
              <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm md:text-base text-gray-700 shadow-sm hover:border-[#0ABAB5]/40 transition-colors cursor-default">
                Autônomo
              </span>
              <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm md:text-base text-gray-700 shadow-sm hover:border-[#0ABAB5]/40 transition-colors cursor-default">
                Prestador de serviço
              </span>
              <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm md:text-base text-gray-700 shadow-sm hover:border-[#0ABAB5]/40 transition-colors cursor-default">
                Entregador
              </span>
            </div>

            <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
              Para você, o carro não é luxo.{" "}
              <strong className="text-gray-900">É ferramenta</strong>. É o que
              coloca comida na mesa.
            </p>
            <p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
              E você sabe o que acontece se esse carro parar hoje. Não precisa
              nem ser roubo. Uma batida pequena. Um vidro quebrado. Um susto.
            </p>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] inline-block px-8 py-6 md:py-8 rounded-2xl bg-red-50 border border-red-100 mt-8 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="relative z-10 text-2xl md:text-3xl text-gray-900 font-geist font-medium">
                Dias parado. <span className="text-red-600">Sem renda.</span>
              </p>
            </div>

            <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] pt-8 flex justify-center">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); open(); }}
                className="group/cta2 relative inline-flex items-center justify-center overflow-hidden font-medium tracking-tight bg-[#0ABAB5] rounded-full px-8 py-4 text-base md:text-lg text-white shadow-[0_0_20px_rgba(10,186,181,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <span className="w-8 h-8 rounded-full bg-[#FACC15] transition-all duration-700 ease-out scale-0 group-hover/cta2:scale-[30] opacity-0 group-hover/cta2:opacity-100"></span>
                </span>
                <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/cta2:-translate-y-10 group-hover/cta2:opacity-0 font-semibold">
                  Quero me proteger agora
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-10 group-hover/cta2:translate-y-0 group-hover/cta2:opacity-100 opacity-0 rounded-full text-black font-bold">
                  Quero me proteger agora
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
