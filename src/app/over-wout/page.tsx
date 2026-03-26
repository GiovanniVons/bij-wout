import type { Metadata } from "next";
import { OverWoutHero } from "@/components/sections/over-wout/OverWoutHero";
import { OriginStory } from "@/components/sections/over-wout/OriginStory";
import { PhilosophyValues } from "@/components/sections/over-wout/PhilosophyValues";
import { SourcingStrip } from "@/components/sections/over-wout/SourcingStrip";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Over Wout -- Eerlijk Eten op het Plein",
  description:
    "Seizoenskeuken, lokale leveranciers en craft bier van om de hoek. Sinds 2015 runt Wout Huijben Bij Wout op het Sint Jansplein in Moergestel.",
  openGraph: {
    title: "Over Wout -- Eetcafe Bij Wout, Moergestel",
    description:
      "Een kort menu dat wisselt met het seizoen, bier van brouwers uit de buurt, en eerlijke prijzen. Dat is Bij Wout sinds 2015.",
  },
};

export default function OverWoutPage() {
  return (
    <>
      <OverWoutHero />
      <PhilosophyValues />
      <OriginStory />
      <SourcingStrip />
      <Section theme="dark" container="narrow" spacingTop="lg" spacingBottom="lg">
        <ScrollReveal className="text-center">
          <h2 className="!text-[var(--color-kalk)]">Zelf proeven</h2>
          <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-kalk-o65)] !mb-[var(--space-4)]">
            De kaart ligt klaar, het terras ook. Kom langs of reserveer alvast.
          </p>
          <div className="flex gap-[var(--space-3)] justify-center">
            <Button href="/reserveren" variant="primary">Reserveren</Button>
            <Button href="/menu" variant="secondary">Bekijk Menu</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
