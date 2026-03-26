"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-theme="base"
      className="bg-[var(--color-bg)] min-h-[85vh] md:min-h-[85vh] pt-[var(--header-height)] md:pt-0"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[var(--space-6)] min-h-[85vh] md:min-h-[85vh]">
          {/* Text column */}
          <div className="flex flex-col justify-center pt-[var(--section-space-lg)] pb-[var(--section-space-md)] order-2 md:order-1 text-center md:text-left">
            <motion.h1
              className="text-display !mb-[var(--space-4)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              Lokaal genieten.
            </motion.h1>
            <motion.p
              className="text-body-lg !text-[var(--color-text-secondary)] max-w-[28em] mx-auto md:mx-0"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Eetcafe op het plein in Moergestel
            </motion.p>
            <motion.div
              className="mt-[var(--space-5)] flex flex-col sm:flex-row gap-[var(--space-3)] md:justify-start justify-center"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <Button href="/menu" variant="primary">Bekijk de kaart</Button>
              <Button href="/reserveren" variant="secondary">Reserveren</Button>
            </motion.div>
          </div>

          {/* Image column -- bleeds right on desktop, no JS-gated animation so LCP image paints immediately */}
          <div
            className="order-1 md:order-2 md:-mr-[var(--container-padding-x)] overflow-hidden animate-[heroReveal_0.9s_0.2s_both_cubic-bezier(0.4,0,0.2,1)]"
            style={{ borderRadius: "var(--radius-md) 0 0 var(--radius-md)" }}
          >
            <div className="md:rounded-l-[var(--radius-md)] md:rounded-r-none rounded-[var(--radius-md)] overflow-hidden h-full md:min-h-[85vh]"
              style={{ border: "var(--border-width-thin) solid var(--color-koper-o20)", borderRight: "none" }}
            >
              <picture>
                <source
                  srcSet="/images/hero-wout-480.webp 480w, /images/hero-wout-768.webp 768w, /images/hero-wout-1080.webp 1080w, /images/hero-wout-1280.webp 1280w, /images/hero-wout-1920.webp 1920w"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  type="image/webp"
                />
                <img
                  src="/images/hero-wout-1920.jpg"
                  alt="Bij Wout, buurtbrasserie op het Sint Jansplein in Moergestel"
                  className="w-full h-full min-h-[300px] md:min-h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
