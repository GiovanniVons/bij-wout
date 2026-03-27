"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function GroepenHero() {
  const prefersReducedMotion = useReducedMotion();
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setImgReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-theme="base"
      className="bg-[var(--color-bg)] pt-[var(--section-space-lg)] pb-[var(--section-space-sm)]"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[var(--space-6)] items-center">
          {/* Text */}
          <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Samen tafelen
            </motion.h1>
            <motion.p
              className="text-body-lg !text-[var(--color-text-secondary)] max-w-[28em] mt-[var(--space-3)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Groepsdiners, borrels en feestjes vanaf 10 personen. Wout stelt een menu samen, jullie schuiven aan.
            </motion.p>
          </div>

          {/* Image -- bleeds right */}
          <motion.div
            className="order-1 md:order-2 md:-mr-[var(--container-padding-x)] overflow-hidden"
            initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={imgReady ? { clipPath: "inset(0 0 0 0)" } : false}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="md:rounded-l-[var(--radius-md)] md:rounded-r-none rounded-[var(--radius-md)] overflow-hidden h-full">
              <img
                src="/images/groups-image.jpg"
                alt="Gedekte tafel voor groepsdiner bij Bij Wout"
                className="w-full h-full min-h-[300px] object-cover"
                style={{ aspectRatio: "4/5" }}
                loading="eager"
                decoding="async"
                onLoad={() => setImgReady(true)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
