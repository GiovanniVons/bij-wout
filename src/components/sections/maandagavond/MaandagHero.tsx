"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function MaandagHero() {
  const prefersReducedMotion = useReducedMotion();
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setImgReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section data-theme="warm" className="bg-[var(--color-bg)] pt-[var(--section-space-lg)] pb-[var(--section-space-md)]">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] md:gap-[var(--space-8)] items-center">
          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Maandagavond bij Wout
            </motion.h1>
            <motion.p
              className="text-body-lg mt-[var(--space-4)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Elke maandag een wisselend driegangenmenu voor &euro;23,50. Per gang drie keuzes, je stelt je eigen menu samen.
            </motion.p>
            <motion.div
              className="mt-[var(--space-5)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button href="/reserveren" variant="primary">Reserveer je plek</Button>
            </motion.div>
          </div>

          {/* Image + Price badge */}
          <div className="relative order-1 md:order-2">
            <motion.div
              className="overflow-hidden"
              style={{ borderRadius: "var(--radius-md)" }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={imgReady ? { opacity: 1, scale: 1 } : false}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <img
                src="/images/clean-food-shot.webp"
                alt="Drie-gangenmenu bij Wout"
                className="w-full object-cover object-bottom"
                style={{ aspectRatio: "4/3" }}
                onLoad={() => setImgReady(true)}
              />
            </motion.div>
            {/* Price badge overlaid on image */}
            <motion.div
              className="absolute -bottom-[var(--space-3)] left-[var(--space-2)] md:-bottom-[var(--space-4)] md:-left-[var(--space-4)] flex flex-col items-center justify-center w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
              style={{
                background: "var(--color-koper)",
                borderRadius: "var(--radius-full)",
                border: "var(--border-width-accent) solid var(--color-eik)",
                boxShadow: "var(--shadow-lg)",
                transform: "rotate(-3deg)",
              }}
              initial={prefersReducedMotion ? false : { scale: 0.6, rotate: -8 }}
              animate={{ scale: 1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.5 }}
            >
              <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-kalk)] tracking-[var(--letter-spacing-wide)] uppercase">
                EUR
              </span>
              <span className="font-[var(--font-display)] text-[length:var(--font-size-h2)] font-bold text-[var(--color-kalk)] leading-none">
                23,50
              </span>
              <span className="font-[var(--font-accent)] text-[length:var(--font-size-body-sm)] text-[var(--color-kalk-o80)]">
                p.p.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
