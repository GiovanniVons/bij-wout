import type { Metadata } from "next";
import { MaandagHero } from "@/components/sections/maandagavond/MaandagHero";
import { CurrentMenu } from "@/components/sections/maandagavond/CurrentMenu";
import { HowItWorks } from "@/components/sections/maandagavond/HowItWorks";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Maandagavondmenu Bij Wout -- 3 Gangen voor EUR 23,50",
  description:
    "Elke maandag een 3-gangenmenu bij Bij Wout in Moergestel. Kies uit 3 voorgerechten, 3 hoofdgerechten en 3 nagerechten. EUR 23,50 per persoon.",
  openGraph: {
    title: "Maandagavond bij Wout -- 3 Gangen, EUR 23,50",
    description:
      "Elke maandag drie gangen voor EUR 23,50 per persoon. Kies uit drie voorgerechten, drie hoofdgerechten en drie nagerechten.",
  },
};

export default function MaandagavondPage() {
  return (
    <>
      <MaandagHero />
      <CurrentMenu />
      <HowItWorks />
      <Section theme="dark" container="narrow" spacingTop="lg" spacingBottom="lg">
        <ScrollReveal className="text-center">
          <h2 className="!text-[var(--color-kalk)]">Elke maandag een nieuw menu.</h2>
          <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-kalk-o65)] mt-[var(--space-2)] !mb-[var(--space-5)]">
            Reserveer en kies aan tafel uit drie gangen.
          </p>
          <Button href="/reserveren" variant="primary">Reserveer voor maandag</Button>
        </ScrollReveal>
      </Section>
    </>
  );
}
