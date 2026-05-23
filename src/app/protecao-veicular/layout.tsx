import { QuotationModalProvider } from "@/components/shared/QuotationModal/context";
import QuotationModal from "@/components/shared/QuotationModal";
import ScrollAnimationInit from "@/components/lps/protecao-veicular/ScrollAnimationInit";
import { ReactNode } from "react";

export default function ProtecaoVeicularLayout({ children }: { children: ReactNode }) {
  return (
    <QuotationModalProvider>
      {children}
      <QuotationModal />
      <ScrollAnimationInit />
    </QuotationModalProvider>
  );
}
