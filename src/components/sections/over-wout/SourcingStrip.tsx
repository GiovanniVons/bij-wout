import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const suppliers = [
  "Slagerij Ketelaars",
  "de Bourgondiër",
  "'t Ijsboerinneke",
  "Stadsbrouwerij 013",
  "Brouwerij Frontaal",
  "Moergestels Brouwcollectief",
];

export function SourcingStrip() {
  return (
    <Section theme="warm" container="default" spacingTop="md" spacingBottom="md">
      <ScrollReveal className="text-center">
        <h2 className="!mb-[var(--space-4)] !text-[length:var(--font-size-h3)]">Van het land</h2>
        <p className="max-w-[36em] mx-auto !mb-[var(--space-6)]">
          Je vindt de namen terug op de kaart. Het vlees, de kroketten, het ijs, het bier --
          alles heeft een herkomst die je kunt aanwijzen.
        </p>
        <div className="flex flex-wrap justify-center gap-[var(--space-3)] gap-y-[var(--space-4)]">
          {suppliers.map((supplier) => (
            <span
              key={supplier}
              className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-eik)]"
              style={{
                padding: "var(--space-2) var(--space-4)",
                border: "var(--border-width-thin) solid var(--color-koper-o30)",
                borderRadius: "var(--radius-pill)",
              }}
            >
              {supplier}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
