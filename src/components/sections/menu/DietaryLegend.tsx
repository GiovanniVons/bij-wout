import { Section } from "@/components/ui/Section";

export function DietaryLegend() {
  return (
    <Section theme="base" container="narrow" spacingTop="sm" spacingBottom="sm">
      <div className="flex flex-wrap justify-center gap-[var(--space-5)] text-center">
        {[
          { tag: "V", label: "Vegetarisch" },
          { tag: "VG", label: "Veganistisch" },
          { tag: "GF", label: "Glutenvrij" },
        ].map((item) => (
          <span key={item.tag} className="inline-flex items-center gap-[var(--space-2)]">
            <span className="font-[var(--font-accent)] text-[length:var(--font-size-body-sm)] text-[var(--color-hop)]">
              ({item.tag})
            </span>
            <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)]">
              {item.label}
            </span>
          </span>
        ))}
      </div>
      <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] italic text-[var(--color-text-secondary)] text-center mt-[var(--space-3)]">
        Allergenen of dieetwensen? Laat het ons weten bij reservering. English menu available on request.
      </p>
    </Section>
  );
}
