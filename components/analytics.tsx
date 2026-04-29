"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";
import { SEO_CONVERSION_EVENTS } from "@/features/seo/lib/measurement";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest("a") : null;
      const href = link?.getAttribute("href") || "";

      if (!href || typeof window.gtag !== "function") {
        return;
      }

      if (href.startsWith("tel:")) {
        window.gtag("event", SEO_CONVERSION_EVENTS.callClick, {
          event_category: "SEO Lead",
          event_label: window.location.pathname,
        });
      }

      if (href.includes("wa.me")) {
        window.gtag("event", SEO_CONVERSION_EVENTS.whatsAppClick, {
          event_category: "SEO Lead",
          event_label: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useReportWebVitals((metric) => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  });

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
