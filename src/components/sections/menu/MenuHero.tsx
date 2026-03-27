"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CopperRule } from "@/components/ui/CopperRule";

export function MenuHero() {
  const prefersReducedMotion = useReducedMotion();
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setImgReady(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-theme="brand"
      className="bg-[var(--color-bg)] pt-[var(--section-space-lg)] pb-[var(--section-space-sm)]"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[var(--space-6)] md:gap-[var(--space-8)] items-center">
          {/* Image -- bleeds left */}
          <motion.div
            className="md:-ml-[var(--container-padding-x)] overflow-hidden"
            initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 0 100%)" }}
            animate={imgReady ? { clipPath: "inset(0 0 0 0)" } : false}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="md:rounded-r-[var(--radius-md)] md:rounded-l-none rounded-[var(--radius-md)] overflow-hidden h-full">
              <img
                src="/images/bijwout-menu-2.jpg"
                alt="Menukaart en gerecht bij Bij Wout"
                className="w-full h-full min-h-[300px] object-cover object-bottom"
                style={{ aspectRatio: "4/5" }}
                loading="eager"
                decoding="async"
                onLoad={() => setImgReady(true)}
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.h1
              className="!text-[var(--color-kalk)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              De kaart
            </motion.h1>
            <motion.p
              className="font-[var(--font-body)] text-[length:var(--font-size-body-lg)] italic text-[var(--color-kalk-o65)] mt-[var(--space-3)] !mb-[var(--space-4)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Kort menu, lange tafels, lokale producten.
            </motion.p>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CopperRule className="mx-auto md:mx-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
