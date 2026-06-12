"use client";

import { useEffect, useRef } from "react";

export default function AppLomaVideoSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resolução intrínseca do Canvas (720p)
    canvas.width = 1280;
    canvas.height = 720;

    const startFrame = 106;
    const endFrame = 141;
    const images: HTMLImageElement[] = [];
    
    const baseFps = 20;

    // Pré-carrega os frames
    for (let i = startFrame; i <= endFrame; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `/lps/site-institucional/video-frames-v2/frame_${paddedIndex}.webp`;
      img.onload = () => {
        // Desenha o primeiro frame assim que carregar para evitar tela vazia
        if (i === startFrame) drawFrame(startFrame);
      };
      images[i] = img;
    }

    let currentFrame = startFrame;
    let isReversing = false;
    let lastTime = 0;
    let animationFrameId: number;

    const drawFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      // Suavização (Easing) nas bordas do loop para não ficar truncado
      // Calcula a distância para o extremo mais próximo (início ou fim)
      const distToStart = currentFrame - startFrame;
      const distToEnd = endFrame - currentFrame;
      const minDist = Math.min(distToStart, distToEnd);
      
      let currentFps = baseFps;
      // Reduz o fps suavemente quando está a 8 frames dos limites
      const easeFrames = 8;
      if (minDist < easeFrames) {
        // Interpolação: cai de 20fps para até 6fps na virada
        const dropRatio = (easeFrames - minDist) / easeFrames; 
        currentFps = baseFps - (dropRatio * 14); 
      }
      const currentFrameDuration = 1000 / currentFps;

      // Atualiza o frame de acordo com o framerate dinâmico
      if (deltaTime >= currentFrameDuration) {
        drawFrame(currentFrame);

        if (isReversing) {
          currentFrame--;
          if (currentFrame <= startFrame) {
            currentFrame = startFrame;
            isReversing = false;
          }
        } else {
          currentFrame++;
          if (currentFrame >= endFrame) {
            currentFrame = endFrame;
            isReversing = true;
          }
        }
        // Compensa o excesso de tempo
        lastTime = time - (deltaTime % currentFrameDuration);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-20 pointer-events-none"
    />
  );
}
