"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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

  if (submitted) {
    return (
      <div
        className="p-[var(--space-6)]"
        style={{
          background: "var(--color-hop-o15)",
          borderRadius: "var(--radius-sm)",
          border: "var(--border-width-thin) solid var(--color-hop)",
        }}
      >
        <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-heading)] !mb-[var(--space-2)]">
          Bericht verstuurd!
        </p>
        <p className="!mb-0">
          We reageren zo snel mogelijk, meestal binnen twee werkdagen.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-[var(--space-4)]"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-3)]">
        <div>
          <label htmlFor="contact-name" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
            Naam
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
            E-mailadres
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)]"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold text-[var(--color-heading)] mb-[var(--space-1)]">
          Je vraag of opmerking
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Vraag over de kaart, allergieën, bereikbaarheid, of iets anders..."
          className="w-full font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--input-text)] resize-y"
          style={{
            ...inputStyle,
            minHeight: "120px",
          }}
        />
      </div>

      <Button type="submit" variant="primary">
        Verstuur bericht
      </Button>
    </form>
  );
}
