"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Section theme="base" container="narrow" spacingTop="lg" spacingBottom="lg">
      <div className="text-center">
        <h1 className="!mb-[var(--space-4)]">Er ging iets mis.</h1>
        <p className="text-body-lg !text-[var(--color-text-secondary)] max-w-[28em] mx-auto">
          Geen zorgen. Probeer het opnieuw, of ga terug naar de homepage.
        </p>
        <div className="mt-[var(--space-6)] flex flex-col sm:flex-row items-center justify-center gap-[var(--space-3)]">
          <Button variant="primary" onClick={() => reset()}>Opnieuw proberen</Button>
          <Button href="/" variant="secondary">Naar de homepage</Button>
        </div>
      </div>
    </Section>
  );
}
