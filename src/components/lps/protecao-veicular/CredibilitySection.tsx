"use client";

export default function CredibilitySection() {
  return (
    <section
      id="credibilidade"
      className="w-full py-16 md:py-32 text-center relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <h2 className="text-4xl md:text-5xl font-geist font-semibold tracking-tight text-gray-900 mb-6">
            Mas será que dá para confiar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Essa é uma pergunta justa. Então vai a resposta objetiva:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center justify-center p-10 bg-white border border-gray-100 hover:border-[#0ABAB5]/30 rounded-3xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
            {/* Glow Spots */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

            <span className="inline-block text-6xl md:text-8xl font-geist font-bold text-[#0ABAB5] mb-2 relative z-10">
              2016
            </span>
            <span className="text-xl font-semibold text-gray-900 mb-3 relative z-10">Fundação</span>
            <p className="text-sm text-gray-500 text-center relative z-10">
              9 anos protegendo veículos ininterruptamente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center justify-center p-10 bg-white border border-gray-100 hover:border-[#0ABAB5]/30 rounded-3xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
            {/* Glow Spots (Inverted for composition) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

            <span className="inline-block text-6xl md:text-8xl font-geist font-bold text-[#0ABAB5] mb-2 mt-3 relative z-10">
              15MM
            </span>
            <span className="text-xl font-semibold text-gray-900 mb-3 mt-1 relative z-10">Indenizados</span>
            <p className="text-sm text-gray-500 text-center relative z-10">
              Em histórico de sinistros pagos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center justify-center p-10 bg-white border border-gray-100 hover:border-[#0ABAB5]/30 rounded-3xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
            {/* Glow Spots */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0ABAB5]/10 blur-[50px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

            <span className="inline-block text-5xl md:text-7xl font-geist font-bold text-[#0ABAB5] mb-2 mt-3 relative z-10">
              Milhares
            </span>
            <span className="text-xl font-semibold text-gray-900 mb-3 mt-1 relative z-10">De associados</span>
            <p className="text-sm text-gray-500 text-center relative z-10">
              Base ativa e crescente em todo o país.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-lg text-gray-700 space-y-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
          <p>
            Não é empresa nova. Não é startup sem histórico. São quase uma década protegendo quem depende
            do carro para trabalhar.
          </p>
          <p className="text-xl text-[#09a09a] font-medium bg-[#0ABAB5]/5 py-4 px-6 rounded-2xl border border-[#0ABAB5]/20 inline-block mt-4">
            Empresa que não entrega não sobrevive 9 anos.<br />A LOMA sobreviveu e cresceu.
          </p>

          <div className="pt-10 flex justify-center">
            <a
              href="https://lomaprotecao.com.br/cotacao?o=SITE&subO=TRAFEGO&code=C5VCWGWW&utm_source=google&utm_medium=maxconversao&utm_campaign=%7Bcampaignname%7D&utm_term=loma&utm_content=%7Badgroupname%7D&utm_id=22925727481"
              className="group/cta4 relative inline-flex items-center justify-center overflow-hidden font-medium tracking-tight bg-[#0ABAB5] rounded-full px-8 py-4 text-base md:text-lg text-white shadow-[0_0_20px_rgba(10,186,181,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1"
            >
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="w-8 h-8 rounded-full bg-[#FACC15] transition-all duration-700 ease-out scale-0 group-hover/cta4:scale-[30] opacity-0 group-hover/cta4:opacity-100"></span>
              </span>

              <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover/cta4:-translate-y-10 group-hover/cta4:opacity-0 font-semibold">
                Simular meu plano agora
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.15,0.83,0.66,1)] translate-y-10 group-hover/cta4:translate-y-0 group-hover/cta4:opacity-100 opacity-0 rounded-full text-black font-bold">
                Simular meu plano agora
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
