import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section theme="base" container="narrow" spacingTop="lg" spacingBottom="lg">
      <div className="text-center">
        <h1 className="!mb-[var(--space-4)]">Verkeerd plein.</h1>
        <p className="text-body-lg !text-[var(--color-text-secondary)] max-w-[28em] mx-auto">
          Deze pagina bestaat niet, maar Bij Wout wel. Ga terug naar de kaart, of kom gewoon langs.
        </p>
        <div className="mt-[var(--space-6)]">
          <Button href="/" variant="primary">Naar de homepage</Button>
        </div>
      </div>
    </Section>
  );
}
