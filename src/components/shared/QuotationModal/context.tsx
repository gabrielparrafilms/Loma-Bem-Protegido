"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { QuotationModalContextType } from "./types";

const QuotationModalContext = createContext<QuotationModalContextType | null>(null);

export function QuotationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuotationModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </QuotationModalContext.Provider>
  );
}

export function useQuotationModal(): QuotationModalContextType {
  const ctx = useContext(QuotationModalContext);
  if (!ctx) {
    throw new Error("useQuotationModal deve ser usado dentro de QuotationModalProvider");
  }
  return ctx;
}
