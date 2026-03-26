import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { GuestPlanWidget } from "@/components/sections/reserveren/GuestPlanWidget";
import { ContactForm } from "@/components/sections/reserveren/ContactForm";
import { JsonLd, faqSchema } from "@/components/layout/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reserveren bij Bij Wout -- Eetcafe Moergestel",
  description:
    "Reserveer een tafel bij Bij Wout op het Sint Jansplein in Moergestel. Online, telefonisch, of loop gewoon binnen.",
  openGraph: {
    title: "Reserveren -- Bij Wout, Moergestel",
    description:
      "Tafel boeken bij Bij Wout? Reserveer online of bel 013 850 8300. Sint Jansplein 7, Moergestel.",
  },
};

const faqItems = [
  {
    question: "Kan ik ook zonder reservering langskomen?",
    answer: "Natuurlijk. Op drukke avonden (donderdag t/m zaterdag) is reserveren wel slim, dan weet je zeker dat er plek is.",
  },
  {
    question: "Is er een dresscode?",
    answer: "Nee. Bij Wout is een eetcafe, geen sterrenrestaurant. Kom zoals je bent.",
  },
  {
    question: "Kan ik reserveren voor de maandagavond?",
    answer: "Ja, en dat is ook aan te raden. Het maandagavondmenu is populair. Reserveer hier of bel ons, en geef even aan dat het om maandagavond gaat.",
  },
  {
    question: "Zijn er vegetarische opties?",
    answer: "Ja. Op de kaart staan meerdere vegetarische gerechten. Bij het maandagavondmenu is er ook altijd een vegetarische keuze per gang. Geef het door bij je reservering.",
  },
  {
    question: "Zijn honden welkom?",
    answer: "Op het terras altijd. Binnen liever niet, tenzij het een hulphond is.",
  },
  {
    question: "Is er parkeergelegenheid?",
    answer: "Ja, gratis parkeren rondom het Sint Jansplein. Met de fiets nog makkelijker.",
  },
];

export default function ReserverenPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Widget Section */}
      <Section theme="base" container="default" spacingTop="lg" spacingBottom="md">
        <ScrollReveal>
          <h1>Reserveer een tafel</h1>
          <p className="text-body-lg !text-[var(--color-text-secondary)] mt-[var(--space-3)]">
            Online, telefonisch, of loop gewoon binnen.
          </p>
        </ScrollReveal>

        <GuestPlanWidget />

        <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)] mt-[var(--space-4)]">
          Liever bellen?{" "}
          <a href="tel:+31138508300" className="font-semibold text-[var(--color-koper-dark)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200">
            013 850 8300
          </a>
          {" "}(elke dag behalve dinsdag).
        </p>
        <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)]">
          Met meer dan 10 personen?{" "}
          <Link href="/groepen" className="font-semibold text-[var(--color-koper-dark)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200">
            Bekijk onze groepsarrangementen
          </Link>.
        </p>
      </Section>

      {/* Contact Form + Details */}
      <Section theme="warm" container="default" spacingTop="md" spacingBottom="md">
        <h2 className="!mb-[var(--space-2)] !text-[length:var(--font-size-h3)]">Vraag stellen?</h2>
        <p className="!mb-[var(--space-5)] max-w-[38em]">
          Over de kaart, allergieën, bereikbaarheid of iets anders? Stuur een bericht.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[var(--space-6)]">
          {/* Form */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          {/* Contact aside */}
          <ScrollReveal delay={0.2}>
            <div
              className="self-start p-[var(--space-5)]"
              style={{
                background: "var(--color-tarwe)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-heading)] !mb-[var(--space-3)]">
                Liever persoonlijk?
              </p>
              <div className="flex flex-col gap-[var(--space-3)]">
                <div>
                  <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-koper-dark)] tracking-[var(--letter-spacing-wide)] uppercase block mb-[var(--space-1)]">
                    Bel ons
                  </span>
                  <a
                    href="tel:+31138508300"
                    className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-text)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200"
                  >
                    013 850 8300
                  </a>
                </div>
                <div>
                  <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-koper-dark)] tracking-[var(--letter-spacing-wide)] uppercase block mb-[var(--space-1)]">
                    Mail ons
                  </span>
                  <a
                    href="mailto:info@bijwout.nl"
                    className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-text)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200"
                  >
                    info@bijwout.nl
                  </a>
                </div>
                <div>
                  <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-koper-dark)] tracking-[var(--letter-spacing-wide)] uppercase block mb-[var(--space-1)]">
                    Bezoek ons
                  </span>
                  <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-text)] !mb-0">
                    Sint Jansplein 7<br />
                    5066 AR Moergestel
                  </p>
                </div>
              </div>
              <hr
                className="my-[var(--space-4)]"
                style={{
                  border: "none",
                  borderTop: "var(--border-width-thin) solid var(--color-eik-o15)",
                  width: "calc(var(--copper-rule-width) / 2)",
                }}
              />
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] italic text-[var(--color-text-secondary)] !mb-0">
                Elke dag open behalve dinsdag.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section theme="base" container="narrow" spacingTop="md" spacingBottom="md">
        <ScrollReveal>
          <h2 className="!mb-[var(--space-5)]">Veelgestelde vragen</h2>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </Section>
    </>
  );
}
