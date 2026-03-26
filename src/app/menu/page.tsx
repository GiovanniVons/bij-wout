import type { Metadata } from "next";
import { MenuHero } from "@/components/sections/menu/MenuHero";
import { StickyJumpLinks } from "@/components/sections/menu/StickyJumpLinks";
import { CategoryHeader } from "@/components/sections/menu/CategoryHeader";
import { MenuSection } from "@/components/sections/menu/MenuSection";
import { SparerribsCallout } from "@/components/sections/menu/SparerribsCallout";
import { BeerSection } from "@/components/sections/menu/BeerSection";
import { DietaryLegend } from "@/components/sections/menu/DietaryLegend";
import { favorietjes, lunchMenu, dinnerMenu, kinderMenu, wisselgerechten } from "@/content/menu-data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Menukaart Bij Wout -- Lunch, Diner & Bier",
  description:
    "Bekijk de menukaart van Bij Wout. Verse lunch, avondgerechten van de grill, donderdagspareribs en wisselende craft bieren.",
  openGraph: {
    title: "Menukaart Bij Wout -- Moergestel",
    description:
      "Lunch, diner, spareribs op donderdag en craft bier van lokale brouwers. Bekijk de volledige kaart.",
  },
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <StickyJumpLinks />

      {/* Favorietjes */}
      <MenuSection
        id="favorietjes"
        title="Wouts Favorietjes"
        categories={[{ title: "", items: favorietjes }]}
        isFirst
        theme="warm"
      />

      {/* Lunch */}
      <CategoryHeader
        id="lunch"
        title="Lunch"
        quote="Broodjes, uitsmijters en verse soep."
        imageSrc="/images/lunch-shoit.webp"
        imageAlt="Lunchgerecht bij Bij Wout"
        imagePosition="left"
      />
      <MenuSection categories={lunchMenu} showSectionHeading={false} theme="warm" />

      {/* Wisselgerechten */}
      <MenuSection
        title="Wisselgerechten"
        categories={wisselgerechten}
        theme="dark"
      />

      {/* Diner */}
      <CategoryHeader
        id="diner"
        title="Diner"
        quote="Van entrecote tot wisselgerecht."
        imageSrc="/images/clean-food-shot.webp"
        imageAlt="Diner aan tafel bij Bij Wout"
        imagePosition="right"
      />
      <MenuSection categories={dinnerMenu} showSectionHeading={false} theme="warm" />

      {/* Spareribs */}
      <SparerribsCallout />

      {/* Kinderen */}
      <MenuSection
        id="kinderen"
        title="Kinderen"
        categories={[{ title: "", items: kinderMenu }]}
        theme="warm"
      />

      {/* Craft Bier */}
      <BeerSection />

      {/* Dietary Legend */}
      <DietaryLegend />

      {/* Menu CTA Strip */}
      <Section theme="dark" container="narrow" spacingTop="md" spacingBottom="md">
        <ScrollReveal className="text-center">
          <h2 className="!text-[var(--color-kalk)]">Honger gekregen?</h2>
          <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-kalk-o65)] !mb-[var(--space-4)]">
            Dat is het idee.
          </p>
          <Button href="/reserveren" variant="primary">
            Reserveren
          </Button>
        </ScrollReveal>
      </Section>
    </>
  );
}
