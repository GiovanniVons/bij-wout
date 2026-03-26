import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MondayCallout() {
  return (
    <Section theme="warm" container="default" spacingTop="sm" spacingBottom="sm">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[var(--space-4)] text-center md:text-left">
          <div className="max-w-[32em]">
            <p className="text-accent !mb-[var(--space-1)]">*</p>
            <h3 className="!mb-[var(--space-3)]">Maandagavond bij Wout</h3>
            <p className="!mb-[var(--space-3)]">
              Elke maandag een wisselend driegangenmenu. Drie keuzes per gang.
            </p>
            <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-koper-dark)] !mb-0">
              &euro;23,50 p.p.
            </p>
          </div>
          <div className="shrink-0 mt-[var(--space-2)] md:mt-0">
            <Button href="/maandagavond" variant="secondary">
              Meer over maandagavond
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
