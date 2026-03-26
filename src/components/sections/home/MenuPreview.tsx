"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

const cards = [
  {
    label: "Lunch",
    name: "Soep, broodjes en uitsmijters",
    description: "Clubsandwich, pulled pork, knoflookgamba's",
    src: "/images/lunch-shoit.webp",
    alt: "Lunchgerecht bij Bij Wout",
    href: "/menu#lunch",
  },
  {
    label: "Diner",
    name: "Avondkaart zonder poespas",
    description: "Van de grill, uit de pan, vers van de markt",
    src: "/images/clean-food-shot.webp",
    alt: "Diner aan tafel bij Bij Wout",
    href: "/menu#diner",
  },
  {
    label: "Craft Bier",
    name: "Van brouwers, niet van merken",
    description: "Wisseltaps van om de hoek",
    src: "/images/bij-wout-bier-glas.webp",
    alt: "Craft bier van de tap bij Bij Wout",
    href: "/menu#craft-bier",
  },
];

export function MenuPreview() {
  return (
    <Section theme="base" container="default" spacingTop="md" spacingBottom="md">
      <h2 className="!text-left !mb-[var(--space-6)]">Proef de kaart</h2>

      <StaggerReveal
        className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)]"
        stagger={0.15}
      >
        {cards.map((card) => (
          <StaggerItem key={card.label} y={24}>
            <a
              href={card.href}
              className="group block no-underline relative overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]"
              style={{
                borderRadius: "var(--radius-md)",
                border: "var(--border-width-thin) solid var(--color-kalk-o15)",
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, var(--color-eik-o75) 0%, var(--color-eik-o25) 40%, transparent 70%)",
                  }}
                />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-[var(--space-4)]">
                  <span className="block font-[var(--font-accent)] text-[length:var(--font-size-accent)] text-[var(--color-koper)]">
                    {card.label}
                  </span>
                  <span className="block font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-kalk)] mt-[var(--space-1)]">
                    {card.name}
                  </span>
                  <span className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-kalk-o80)] mt-[var(--space-1)] max-w-[24ch]">
                    {card.description}
                  </span>
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <div className="flex justify-center mt-[var(--space-6)]">
        <Button href="/menu" variant="secondary">Volledige kaart</Button>
      </div>
    </Section>
  );
}
