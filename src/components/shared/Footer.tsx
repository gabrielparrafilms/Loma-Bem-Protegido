export default function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-[#09090b] border-t border-white/5 py-16 md:py-24 z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-12 md:gap-24">
          {/* Left Column (Desktop) / Top Center (Mobile) */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            {/* Logo & Socials Row */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12">
              {/* Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_loma.webp" alt="Loma Proteção Veicular" className="h-10 md:h-12 w-auto object-contain" />
              
              {/* Divider (Desktop only) */}
              <div className="hidden md:block w-px h-10 bg-white/10" />
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/lomabemprotegido/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/5 text-white hover:text-white hover:bg-[#0ABAB5]/10 hover:border-[#0ABAB5]/30 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(10,186,181,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/lomabemprotegido" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/5 text-white hover:text-white hover:bg-[#0ABAB5]/10 hover:border-[#0ABAB5]/30 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(10,186,181,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.youtube.com/@lomabemprotegido" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/5 text-white hover:text-white hover:bg-[#0ABAB5]/10 hover:border-[#0ABAB5]/30 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(10,186,181,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

            {/* Text Blocks */}
            <div className="flex flex-col w-full max-w-md text-center md:text-left">
              
              {/* SUSEP */}
              <div className="py-5 border-t border-white/5 border-b">
                <span className="text-zinc-300 text-[15px] font-medium tracking-wide">Estamos cadastrados na SUSEP</span>
              </div>
              
              {/* Trabalhe conosco */}
              <a href="https://auto.lomaprotecao.com.br/recrutamento" target="_blank" rel="noopener noreferrer" className="py-5 border-b border-white/5 group flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                <span className="text-zinc-300 text-[15px] font-medium group-hover:text-[#0ABAB5] transition-colors tracking-wide">Trabalhe conosco</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0ABAB5] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>

              {/* Horários */}
              <div className="py-6 border-b border-white/5 flex flex-col gap-1.5">
                <span className="text-zinc-500 text-sm mb-1 tracking-wide">Horário de funcionamento</span>
                <span className="text-white font-semibold text-[15px] tracking-wide">Central de Atendimento</span>
                <span className="text-white text-sm tracking-wide">Segunda a sexta: 8h às 18h</span>
                <span className="text-white text-sm tracking-wide">Sábado: 8h às 12h</span>
              </div>

              {/* Direitos e Políticas */}
              <div className="pt-8 flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-2 md:gap-4">
                <span className="text-zinc-500 text-xs tracking-wider">Todos os direitos reservados.</span>
                <a href="#" className="text-zinc-500 text-xs tracking-wider hover:text-[#0ABAB5] transition-colors">Políticas de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
