"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Define as dimensões iniciais
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let particles: Particle[] = [];
        let animationFrameId: number;
        const tiffanyColor = "rgba(60, 192, 183,";

        class Particle {
            x: number; y: number;
            vx: number; vy: number;
            size: number;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }
            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${tiffanyColor} 0.5)`;
                ctx.fill();
            }
        }

        particles = [];
        for (let i = 0; i < 100; i++) particles.push(new Particle());

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `${tiffanyColor} ${0.2 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [dimensions]);

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="fixed inset-0 z-[9999] bg-[#151515] flex items-center justify-center overflow-hidden"
            >
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes rotate-loader {
                    to { transform: rotate(360deg); }
                }
                .animate-rotate-loader { animation: rotate-loader 1s linear infinite; }
            `}} />

            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center mb-12">

                    <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-[#3CC0B7]/10" />

                    <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-transparent border-t-[#3CC0B7] animate-rotate-loader" />

                    <div className="relative z-20 animate-pulse">
                        <Image
                            src="/logo_loma.webp"
                            alt="Loma"
                            width={160}
                            height={160}
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                </div>
            </div>
            </motion.section>
        </AnimatePresence>
    );
}