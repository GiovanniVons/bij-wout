import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTAStrip() {
  return (
    <Section theme="dark" container="narrow" spacingTop="lg" spacingBottom="lg">
      <ScrollReveal className="text-center">
        <h2 className="!text-[var(--color-kalk)]">Schuif aan bij Wout.</h2>
        <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-kalk-o65)] !mb-[var(--space-5)]">
          De kaart ligt klaar, het terras ook. Kom langs of reserveer alvast.
        </p>
        <div>
          <Button href="/reserveren" variant="primary" className="px-[var(--space-6)]">
            Reserveer een tafel
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
