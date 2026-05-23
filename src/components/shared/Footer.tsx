export default function Footer() {
  return (
    <footer className="py-12 text-center relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_loma.webp" alt="Loma Proteção Veicular" className="h-10 object-contain" />

          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/lomabemprotegido/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/botao_instagram.svg" alt="Instagram" className="w-10 h-10 invert brightness-200" />
            </a>
            <a href="https://www.facebook.com/lomabemprotegido" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/botao_facebook.svg" alt="Facebook" className="w-10 h-10 invert brightness-200" />
            </a>
            <a href="https://www.youtube.com/@lomabemprotegido" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/botao_youtube.svg" alt="YouTube" className="w-10 h-10 invert brightness-200" />
            </a>
          </div>
        </div>

        <div className="text-center text-white/70 text-sm space-y-2">
          <p className="font-bold text-white uppercase tracking-wider">Estamos cadastrados na SUSEP</p>
          <a
            href="https://auto.lomaprotecao.com.br/recrutamento"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            Trabalhe conosco
          </a>
          <div className="h-px w-full max-w-[600px] bg-white/20 mx-auto my-4" />
          <p className="font-bold text-white uppercase tracking-wider">Horário de funcionamento</p>
          <p>Segunda a sexta: 8h às 18h</p>
          <p>Sábado: 8h às 12h</p>
          <div className="h-px w-full max-w-[600px] bg-white/20 mx-auto my-4" />
          <p>R. Prudente de Moraes, 540 - Centro, Jundiaí - SP</p>
          <p>CNPJ: 29.407.831/0001-64</p>
          <p className="opacity-50 text-[10px] mt-4">
            Copyright© {new Date().getFullYear()} Loma Proteção Veicular. Todos os direitos reservados.
          </p>
          <p className="opacity-50 text-[10px]">Proteção veicular regulamentada.</p>
        </div>
      </div>
    </footer>
  );
}
