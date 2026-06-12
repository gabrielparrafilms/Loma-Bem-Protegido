"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import FacebookPixel from "./FacebookPixel";

export default function AnalyticsWrapper() {
  const [loadScripts, setLoadScripts] = useState(false);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    const activate = () => setLoadScripts(true);

    window.addEventListener("scroll", activate, { once: true });
    window.addEventListener("mousemove", activate, { once: true });
    window.addEventListener("touchstart", activate, { once: true });
    window.addEventListener("click", activate, { once: true });
    window.addEventListener("keydown", activate, { once: true });

    const timer = setTimeout(activate, 4000);

    return () => {
      window.removeEventListener("scroll", activate);
      window.removeEventListener("mousemove", activate);
      window.removeEventListener("touchstart", activate);
      window.removeEventListener("click", activate);
      window.removeEventListener("keydown", activate);
      clearTimeout(timer);
    };
  }, []);

  if (!loadScripts) return null;

  return (
    <>
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
      <FacebookPixel />
    </>
  );
}
