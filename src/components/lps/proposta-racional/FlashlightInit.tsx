"use client";

import { useEffect } from "react";

export default function FlashlightInit() {
  useEffect(() => {
    let ticking = false;
    const handler = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = document.querySelectorAll<HTMLElement>(".flashlight-card");
          const measurements = Array.from(cards).map((card) => {
            const rect = card.getBoundingClientRect();
            return { card, x: e.clientX - rect.left, y: e.clientY - rect.top };
          });
          measurements.forEach(({ card, x, y }) => {
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    document.addEventListener("mousemove", handler, { passive: true });
    return () => document.removeEventListener("mousemove", handler);
  }, []);
  return null;
}
