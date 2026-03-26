import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { GroupForm } from "@/components/sections/groepen/GroupForm";
import { GroepenHero } from "@/components/sections/groepen/GroepenHero";

export const metadata: Metadata = {
  title: "Groepsarrangementen Bij Wout -- Eten met 10+ Personen",
  description:
    "Groepsdiner of borrel bij Bij Wout in Moergestel. Vanaf 10 personen stelt Wout een menu samen. Vraag vrijblijvend aan.",
  openGraph: {
    title: "Groepsdiner Bij Wout -- Moergestel",
    description:
      "Met een groep eten op het Sint Jansplein? Vanaf 10 personen regelt Wout een menu op maat. Neem contact op.",
  },
};

const options = [
  {
    title: "Borrel & Bites",
    description: "Staand of zittend, met een tafel vol kroketten, bitterballen en kaasplankjes. Lekker voor een informele avond.",
    padTop: "var(--space-5)",
  },
  {
    title: "Groepsdiner",
    description: "Twee of drie gangen, samengesteld door Wout. Van soep tot dessert, met genoeg tijd om bij te praten.",
    padTop: "var(--space-7)",
  },
  {
    title: "BBQ op het Plein",
    description: "Bij mooi weer gaat de grill naar buiten. Vlees, vis en salades, recht van het vuur op het plein. Alleen in de zomer.",
    padTop: "var(--space-5)",
  },
];


export default function GroepenPage() {
  return (
    <>
      {/* Hero */}
      <GroepenHero />

      {/* Intro */}
      <Section theme="base" container="default" spacingTop="md" spacingBottom="sm">
        <ScrollReveal>
          <h2 className="!mb-[var(--space-4)] !text-[length:var(--font-size-h3)]">Op maat</h2>
          <p className="max-w-[38em]">
            Of het nou een verjaardag is, een teamuitje, of gewoon een smoes om met z&apos;n allen te
            eten: Bij Wout is er klaar voor. Vanaf 10 personen stellen we een menu samen dat op
            een krijtbord op tafel komt te staan. Het menu wisselt met de seizoenen.
          </p>
          <p className="max-w-[38em] mt-[var(--space-3)]">
            Weten wat de mogelijkheden zijn? Kom gerust langs voor een kop koffie om het te bespreken.
          </p>
        </ScrollReveal>
      </Section>

      {/* Option Cards */}
      <Section theme="base" container="default" spacingTop="md" spacingBottom="md">
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-5)]" stagger={0.15}>
          {options.map((option, i) => (
            <StaggerItem key={option.title}>
              <div
                className="group transition-all duration-250 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                style={{
                  background: "var(--card-group-bg)",
                  border: "var(--border-width-thin) solid var(--card-group-border)",
                  borderRadius: "var(--card-group-radius)",
                  padding: "var(--card-group-padding)",
                  paddingTop: i % 2 === 1 ? "var(--space-7)" : "var(--space-5)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h2 className="!mb-[var(--space-3)] !text-[length:var(--font-size-h3)]">{option.title}</h2>
                <p className="max-w-[30ch] !mb-0">{option.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Section>

      {/* Pricing note */}
      <Section theme="warm" container="narrow" spacingTop="md" spacingBottom="md">
        <ScrollReveal className="text-center">
          <h2 className="!mb-[var(--space-3)] !text-[length:var(--font-size-h3)]">Prijs in overleg</h2>
          <p className="max-w-[32em] mx-auto !mb-0">
            De prijs hangt af van het type arrangement, het aantal gasten en jullie wensen.
            Neem contact op voor een vrijblijvende offerte.
          </p>
        </ScrollReveal>
      </Section>

      {/* Form + Contact aside */}
      <GroupForm />
    </>
  );
}
