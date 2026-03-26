"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OverWoutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section data-theme="base" className="bg-[var(--color-bg)] pt-[var(--section-space-lg)] pb-[var(--section-space-md)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[var(--space-6)] md:gap-[var(--space-10)]">
          {/* Image -- bleeds left */}
          <motion.div
            className="md:-ml-[var(--container-padding-x)] overflow-hidden"
            initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="md:rounded-r-[var(--radius-md)] md:rounded-l-none rounded-[var(--radius-md)] overflow-hidden h-full"
            >
              <img
                src="/images/owners.jpg"
                alt="Wout Huijben en partner proosten op het terras van Bij Wout"
                className="w-full h-full min-h-[300px] object-cover"
                style={{ aspectRatio: "16/10" }}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Een kok, een plein, een plan.
            </motion.h1>
            <motion.p
              className="text-body-lg !text-[var(--color-text-secondary)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Eerlijk eten, lokale leveranciers, bier van echte brouwers. Dat was het idee in 2015. En dat is het nog steeds.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
