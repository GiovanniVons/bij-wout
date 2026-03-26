"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OriginStory() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      data-theme="base"
      className="bg-[var(--color-bg)] pt-[var(--section-space-md)] pb-[var(--section-space-md)]"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[var(--space-6)] md:gap-[var(--space-10)] items-center">
          {/* Text column */}
          <ScrollReveal>
            <h2>Van de Veerkes naar het plein</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <p>
                Wout Huijben studeerde verkeerskunde aan de NHTV in Breda, maar stond al vanaf
                zijn zeventiende achter de bar bij de Veerkes. Studie en horeca liepen jaren
                parallel, tot duidelijk werd welke kant het op ging.
              </p>
              <p>
                In 2011 werd hij bedrijfsleider van Grand Café de Zwaan in Hilvarenbeek. Drie
                jaar later schreef hij bij de Grolsch Horeca Academy zijn afstudeerscriptie
                over een eigen zaak in Moergestel: een laagdrempelig grand café met eerlijk
                eten, lokale producten en goede gastvrijheid.
              </p>
            </div>
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
                src="/images/interior.webp"
                alt="Het interieur van Bij Wout"
                className="w-full h-full min-h-[300px] object-cover"
                style={{ aspectRatio: "4/5" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Pull quote -- spans full width */}
        <ScrollReveal delay={0.2}>
          <blockquote
            className="my-[var(--space-8)] md:ml-[var(--space-6)] pl-[var(--space-4)] max-w-[40em]"
            style={{ borderLeft: "var(--border-width-accent) solid var(--color-koper)" }}
          >
            <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] italic text-[var(--color-heading)] leading-[var(--line-height-relaxed)] !mb-[var(--space-2)]">
              De scriptie werd het plan, het plan werd de zaak. Op 3 april 2015 ging de deur open.
            </p>
            <cite className="font-[var(--font-accent)] text-[length:var(--font-size-body-sm)] text-[var(--color-accent)] not-italic">
              Wout Huijben
            </cite>
          </blockquote>
        </ScrollReveal>

        {/* Closing paragraphs with merged Team content */}
        <ScrollReveal>
          <div className="max-w-[38em]" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <p>
              Het Sint Jansplein is de woonkamer van Moergestel. In de zomer vol terrassen,
              in de winter warm verlicht. Bij Wout is daar onderdeel van geworden.
              Twee mensen die een zaak runnen, van de inkoop tot de afwas.
            </p>
            <p>
              Elke dag open behalve dinsdag, vanaf tien uur &apos;s ochtends. Lunch, diner,
              borrel, of gewoon een kop koffie op het terras.
              Die scriptie bleek een goed plan.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
