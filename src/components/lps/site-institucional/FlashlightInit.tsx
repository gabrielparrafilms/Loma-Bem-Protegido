"use client";
import { useEffect } from "react";

export default function FlashlightInit() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.querySelectorAll(".glass-card, .flashlight-card").forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);
  return null;
}
