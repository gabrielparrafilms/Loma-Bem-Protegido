// Forçar scroll para o topo no reload
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // Init Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        (function () {
            const once = true;
            if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                            if (once) window.__inViewIO.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });
            }

            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                    window.__inViewIO.observe(el);
                });
            };

            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
        })();

        // Flashlight effect for cards
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.flashlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });

        // ==========================================
        // 4. Hero Content Reveal (Automático no Carregamento)
        // ==========================================
        const heroVideo = document.getElementById("hero-video-bg");

        if (heroVideo) {
            // Força o play imediato
            heroVideo.play().catch(() => {}); 
            
            // Vigia o vídeo pelos primeiros 3 segundos pra garantir que nenhum gargalo do navegador pause ele
            let watchPlay = setInterval(() => {
                if (heroVideo.paused) {
                    heroVideo.play().catch(() => {});
                }
            }, 300);
            setTimeout(() => clearInterval(watchPlay), 3000);
            
            // Fallback no scroll
            const forcePlay = () => {
                if (heroVideo.paused) heroVideo.play().catch(() => {});
            };
            window.addEventListener('scroll', forcePlay, { once: true });
            window.addEventListener('touchstart', forcePlay, { once: true });
        }

        // Esconde os elementos do hero e prepara para animar
        gsap.set(["#hero-title", "#hero-paragraph", "#hero-cta-wrapper"], { opacity: 0, y: 30 });
        
        // Revela as informações IMEDIATAMENTE após o carregamento inicial (sem depender do scroll ou tempo longo do vídeo)
        setTimeout(() => {
            const tlReveal = gsap.timeline();
            
            // 1. O texto entra suavemente de baixo para cima
            tlReveal.to(["#hero-title", "#hero-paragraph", "#hero-cta-wrapper"], {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
            
            // 2. Imediatamente após a entrada, aplica o efeito do texto vermelho
            tlReveal.to("#hero-part-3", { backgroundSize: "100% 100%", ease: "power2.out", duration: 1.0 }, "-=0.4");
            
            // 3. Destaca o preço
            tlReveal.to("#price-emphasis", { 
                scale: 1.05, 
                color: "#34d399", 
                fontWeight: "700",
                duration: 0.8,
                ease: "elastic.out(1, 0.4)" 
            }, "-=0.6");
        }, 150); // Mágica acontece quase instantaneamente (150ms)

        // ==========================================
        // BLOCO 2: Identificação (Onda e Parallax)
        // ==========================================
        
        // ==========================================
        // 1. Estados iniciais Universais
        // ==========================================
        gsap.set(".b2-text-auto", { y: 30, opacity: 0, filter: "blur(8px)" });
        gsap.set(".b2-text-scroll", { y: 30, opacity: 0, filter: "blur(8px)" });
        
        // Timeline 1: Entrada (Textos iniciais)
        const tlB2Auto = gsap.timeline({
            scrollTrigger: {
                trigger: "#identificacao",
                start: "top 80%", // Dispara bem cedo para o mobile não perder a animação
                toggleActions: "play none none reverse"
            }
        });
        tlB2Auto.to(".b2-text-auto", { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.2, ease: "power3.out" }, 0);

        // Timeline 2: Continuação (textos secundários)
        const tlB2Scroll = gsap.timeline({
            scrollTrigger: {
                trigger: "#identificacao",
                start: "top 30%", // Quando rola mais para o meio da seção
                toggleActions: "play none none reverse" // Toca automaticamente sem travar!
            }
        });
        tlB2Scroll.to(".b2-text-scroll", { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.1, ease: "power3.out" }, 0.2);

        // ---------------------------------------------------------
        // OTIMIZAÇÃO: Lazy Load do Vídeo da Quarta Dobra
        // ---------------------------------------------------------
        const viradaVideo = document.getElementById('virada-video');
        if (viradaVideo) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        // Carrega o vídeo apenas se a fonte original ainda estiver no data-src
                        const source = video.querySelector('source');
                        if (source && !source.src) {
                            source.src = source.dataset.src;
                            video.load(); // Força o carregamento real do MP4
                        }
                        video.play().catch(e => console.log("Autoplay evitado", e));
                    } else {
                        // Pausa o vídeo quando sai da tela para poupar CPU/Bateria do usuário
                        if (!video.paused) {
                            video.pause();
                        }
                    }
                });
            }, { rootMargin: "400px 0px" }); // Começa a carregar 400px antes da dobra aparecer na tela
            
            videoObserver.observe(viradaVideo);
        }

        // ==========================================
        // BLOCO 6: Prova Social Dinâmica (Feed)
        // ==========================================
        const testimonials = [
            { text: "Cara, eu nunca achei que ia precisar… fiz a proteção meio no 'vai que'… Não deu outra… bateram no meu carro 3 meses depois. Se eu não tivesse com a Loma, tava ferrado hoje.", name: "Carlos Silva", img: "men/32.jpg", car: "Ford Ka" },
            { text: "Mano, coisa boba… uma batida pequena no trânsito. Mas quando fui ver o valor… já ia pesar demais. Ainda bem que eu tava com a proteção… resolveu tudo.", name: "Tiago Souza", img: "men/44.jpg", car: "Chevrolet Celta" },
            { text: "Eu uso o carro pra trabalhar todo dia. Ficar sem ele nem pensar. Quando precisei, a Loma resolveu rápido… isso pra mim vale tudo.", name: "Marcos Paulo", img: "men/67.jpg", car: "Renault Kwid" },
            { text: "Sinceramente, eu achava que era mais uma dessas coisas… Até precisar de verdade. Aí você vê quem resolve e quem some.", name: "Rafael Lima", img: "men/22.jpg", car: "Fiat Uno" },
            { text: "Fiz mais por segurança mesmo… nem tava pensando em usar. Mas aí deu ruim… vidro quebrado, prejuízo… E foi aí que vi que vale a pena.", name: "Felipe Costa", img: "men/85.jpg", car: "Volkswagen Gol" },
            { text: "Pra quem trabalha com o carro, isso aqui não é luxo não… É necessidade. Ficar parado é perder dinheiro.", name: "Leandro Santos", img: "men/55.jpg", car: "Hyundai HB20" },
            { text: "Já fiquei dias sem trabalhar por causa de carro antes… Nunca mais passo por isso. Hoje tenho proteção e fico tranquilo.", name: "André Gomes", img: "men/75.jpg", car: "Chevrolet Onix" },
            { text: "O valor que eu pago é nada perto do prejuízo que eu teria. Sério mesmo… não compensa arriscar.", name: "Bruno Alves", img: "men/12.jpg", car: "Fiat Palio" },
            { text: "Eu tava juntando grana pra trocar de carro… Se desse algum problema, já era. A proteção me deu segurança pra seguir com meu plano.", name: "Daniel Ribeiro", img: "men/90.jpg", car: "Renault Sandero" },
            { text: "Depois que você passa por um susto, muda tudo… Hoje eu não fico sem proteção nem se for carro velho.", name: "Eduardo Martins", img: "men/3.jpg", car: "Toyota Etios" },
            { text: "Não é nem questão de 'se' vai acontecer… É 'quando'. Eu aprendi isso do jeito difícil.", name: "Fernando Oliveira", img: "men/18.jpg", car: "Nissan March" },
            { text: "Hoje eu dirijo tranquilo, sem aquele peso na cabeça. Antes qualquer barulho já me preocupava.", name: "Marcelo Pereira", img: "men/29.jpg", car: "Chevrolet Prisma" }
        ];

        const createCardHTML = (t) => `
            <div class="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)] flex flex-col gap-4 w-[85vw] max-w-[320px] md:w-auto md:min-w-[320px] shrink-0 whitespace-normal hover:-translate-y-1 transition-transform duration-300">
                <div class="text-gray-600 text-[15px] leading-relaxed">
                    "${t.text}"
                </div>
                <div class="flex items-center gap-3 mt-2">
                    <img src="https://randomuser.me/api/portraits/${t.img}" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${t.name.replace(' ', '+')}&background=0ABAB5&color=fff';" class="w-10 h-10 rounded-full object-cover filter border border-gray-100" alt="Avatar">
                    <div class="flex flex-col">
                        <span class="text-sm font-semibold text-gray-900">${t.name}</span>
                        <span class="text-[10px] font-bold text-[#0ABAB5] uppercase tracking-wide flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            Protege seu ${t.car}
                        </span>
                    </div>
                </div>
            </div>
        `;

        // Popular Colunas Desktop
        const dCol1 = document.getElementById('desktop-col-1');
        const dCol2 = document.getElementById('desktop-col-2');
        const dCol3 = document.getElementById('desktop-col-3');
        if (dCol1 && dCol2 && dCol3) {
            dCol1.innerHTML = testimonials.slice(0, 4).map(createCardHTML).join('');
            dCol2.innerHTML = testimonials.slice(4, 8).map(createCardHTML).join('');
            dCol3.innerHTML = testimonials.slice(8, 12).map(createCardHTML).join('');
            // Duplicar para loop
            dCol1.innerHTML += dCol1.innerHTML;
            dCol2.innerHTML += dCol2.innerHTML;
            dCol3.innerHTML += dCol3.innerHTML;
        }

        // Popular Linhas Mobile
        const mRow1 = document.getElementById('mobile-row-1');
        const mRow2 = document.getElementById('mobile-row-2');
        const mRow3 = document.getElementById('mobile-row-3');
        if (mRow1 && mRow2 && mRow3) {
            mRow1.innerHTML = testimonials.slice(0, 4).map(createCardHTML).join('');
            mRow2.innerHTML = testimonials.slice(4, 8).map(createCardHTML).join('');
            mRow3.innerHTML = testimonials.slice(8, 12).map(createCardHTML).join('');
            // Duplicar para loop
            mRow1.innerHTML += mRow1.innerHTML;
            mRow2.innerHTML += mRow2.innerHTML;
            mRow3.innerHTML += mRow3.innerHTML;
        }



        // ==========================================
        // INTERSECTION OBSERVER FOR ANIMATE-ON-SCROLL
        // ==========================================
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            scrollObserver.observe(el);
        });
