"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const arrangementOptions = [
  { value: "borrel", label: "Borrel & Bites", description: "Staand of zittend, informeel" },
  { value: "diner", label: "Groepsdiner", description: "Twee of drie gangen aan tafel" },
  { value: "bbq", label: "BBQ op het Plein", description: "Buiten van de grill, zomermaanden" },
  { value: "anders", label: "Anders", description: "Vertel ons wat je in gedachten hebt" },
];

export function GroupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [arrangement, setArrangement] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    background: "var(--input-bg)",
    border: "var(--border-width-thin) solid var(--input-border)",
    borderRadius: "var(--input-radius)",
    padding: "var(--input-padding)",
  };

  return (
    <Section theme="base" container="default" spacingTop="md" spacingBottom="md" id="groepsaanvraag">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[var(--space-6)]">
        {/* Form */}
        <ScrollReveal>
          <h2 className="!mb-[var(--space-5)] !text-[length:var(--font-size-h3)]">Vertel ons over jullie plannen</h2>

          {submitted ? (
            <div
              className="p-[var(--space-6)]"
              style={{
                background: "var(--color-hop-o15)",
                borderRadius: "var(--radius-sm)",
                border: "var(--border-width-thin) solid var(--color-hop)",
              }}
            >
              <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-heading)] !mb-[var(--space-2)]">
                Bedankt voor je aanvraag!
              </p>
              <p className="!mb-0">
                We nemen binnen twee werkdagen contact op om alles door te spreken.
              </p>
            </div>
          ) : (
            <form
              name="groepsaanvraag"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-[var(--space-4)]"
            >
              <input type="hidden" name="form-name" value="groepsaanvraag" />
              <div>
                <label htmlFor="group-name" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                  Naam
                </label>
                <input
                  id="group-name"
                  name="name"
                  type="text"
                  required
                  className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
                  style={inputStyle}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-3)]">
                <div>
                  <label htmlFor="group-email" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                    E-mailadres
                  </label>
                  <input
                    id="group-email"
                    name="email"
                    type="email"
                    required
                    className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="group-phone" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                    Telefoonnummer
                  </label>
                  <input
                    id="group-phone"
                    name="phone"
                    type="tel"
                    className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-3)]">
                <div>
                  <label htmlFor="group-date" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                    Gewenste datum
                  </label>
                  <input
                    id="group-date"
                    name="date"
                    type="date"
                    className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="group-guests" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                    Aantal personen
                  </label>
                  <input
                    id="group-guests"
                    name="guests"
                    type="number"
                    min="10"
                    max="60"
                    placeholder="10 - 60"
                    className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
                    style={inputStyle}
                  />
                  <span className="block font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-text-secondary)] mt-[var(--space-1)]">
                    Minimaal 10, maximaal 60 personen
                  </span>
                </div>
              </div>

              {/* Arrangement type -- radio cards */}
              <div>
                <span className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-2)]">
                  Type arrangement
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-2)]" role="radiogroup" aria-label="Type arrangement">
                  {arrangementOptions.map((option) => (
                    <label
                      key={option.value}
                      className="cursor-pointer block"
                    >
                      <input
                        type="radio"
                        name="arrangement"
                        value={option.value}
                        checked={arrangement === option.value}
                        onChange={(e) => setArrangement(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className="p-[var(--space-3)] transition-all duration-200"
                        style={{
                          background: arrangement === option.value ? "var(--color-koper-o8)" : "var(--input-bg)",
                          border: `var(--border-width-thin) solid ${arrangement === option.value ? "var(--color-koper)" : "var(--input-border)"}`,
                          borderRadius: "var(--input-radius)",
                        }}
                      >
                        <span
                          className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold block"
                          style={{ color: arrangement === option.value ? "var(--color-koper-dark)" : "var(--color-heading)" }}
                        >
                          {option.label}
                        </span>
                        <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-text-secondary)] block mt-[var(--space-1)]">
                          {option.description}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="group-notes" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
                  Bijzonderheden
                </label>
                <textarea
                  id="group-notes"
                  name="notes"
                  rows={4}
                  placeholder="Dieetwensen, allergieen, speciale verzoeken..."
                  className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)] resize-y"
                  style={{
                    ...inputStyle,
                    minHeight: "120px",
                  }}
                />
              </div>

              <Button type="submit" variant="primary" fullWidth className="mt-[var(--space-4)]">
                Verstuur aanvraag
              </Button>
            </form>
          )}
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
              Liever bellen?
            </p>
            <a
              href="tel:+31138508300"
              className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-koper-dark)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200 block"
            >
              013 850 8300
            </a>
            <a
              href="mailto:info@bijwout.nl"
              className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-koper-dark)] no-underline hover:text-[var(--color-koper)] transition-colors duration-200 block mt-[var(--space-2)]"
            >
              info@bijwout.nl
            </a>
            <hr
              className="my-[var(--space-4)]"
              style={{
                border: "none",
                borderTop: "var(--border-width-thin) solid var(--color-eik-o15)",
                width: "calc(var(--copper-rule-width) / 2)",
              }}
            />
            <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] italic text-[var(--color-text-secondary)] !mb-0">
              We reageren binnen twee werkdagen.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
