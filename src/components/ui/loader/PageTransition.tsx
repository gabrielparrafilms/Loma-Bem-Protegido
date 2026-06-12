"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 0,
                    ease: "easeOut"
                }}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}