"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutTeaser() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-theme="base"
      className="bg-[var(--color-bg)] pt-[var(--section-space-md)] pb-[var(--section-space-md)]"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[var(--space-6)] items-center">
          {/* Text column */}
          <ScrollReveal>
            <h2>Een kok op het plein</h2>
            <p className="max-w-[34em]">
              Wout stond al vanaf zijn zeventiende achter de bar. In 2015 opende
              hij zijn eigen zaak op het Sint Jansplein. Tien jaar later
              draait het nog steeds.
            </p>
            <Button href="/over-wout" variant="tertiary" className="mt-[var(--space-4)]">
              Lees het verhaal &rarr;
            </Button>
          </ScrollReveal>

          {/* Image -- bleeds right */}
          <motion.div
            className="md:-mr-[var(--container-padding-x)] overflow-hidden"
            initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="md:rounded-l-[var(--radius-md)] md:rounded-r-none rounded-[var(--radius-md)] overflow-hidden h-full">
              <img
                src="/images/outside-front-view-night.webp"
                alt="Bij Wout op het Sint Jansplein bij avond"
                className="w-full h-full min-h-[300px] object-cover"
                style={{ aspectRatio: "3/4" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
