"use client";

import { useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useQuotationModal } from "./context";
import Quotation from "@/components/quotation/Quotation";

function QuotationModalInner() {
  const { isOpen, close } = useQuotationModal();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — idêntico ao original: opacity 0.72, blur 6px */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black/[0.72] backdrop-blur-[6px] cursor-pointer"
            onClick={close}
            aria-hidden="true"
          />

          {/* Container — desktop: centralizado com spring; mobile: bottom sheet */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none sm:p-4 max-sm:items-end max-sm:p-0">
            <motion.div
              key="modal-container"
              /* Desktop: scale + translateY com spring (cubic-bezier(0.34, 1.56, 0.64, 1)) */
              initial={{ scale: 0.94, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              /* Mobile: sobrescreve com slide de baixo via CSS */
              className={[
                "pointer-events-auto relative w-full bg-[#f8fafc]",
                "shadow-[0_25px_60px_rgba(0,0,0,0.45)] overflow-hidden",
                /* Desktop */
                "sm:max-w-[580px] sm:rounded-[40px]",
                /* Mobile: bottom sheet */
                "max-sm:rounded-t-[32px] max-sm:rounded-b-none max-sm:max-h-[90dvh] max-sm:overflow-y-auto",
              ].join(" ")}
              role="dialog"
              aria-modal="true"
              aria-label="Formulário de cotação LOMA"
            >
              {/* Botão fechar — idêntico ao original */}
              <button
                onClick={close}
                aria-label="Fechar formulário"
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/[0.08] hover:bg-black/[0.14] text-zinc-600 hover:text-[#09090b] transition-colors duration-200"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-20 min-h-[300px]">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0ABAB5] rounded-full animate-spin" />
                  </div>
                }
              >
                <Quotation />
              </Suspense>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function QuotationModal() {
  return <QuotationModalInner />;
}
