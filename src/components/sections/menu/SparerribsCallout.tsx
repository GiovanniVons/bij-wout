import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function SparerribsCallout() {
  return (
    <section
      data-theme="brand"
      className="bg-[var(--color-bg)]"
      style={{
        paddingTop: "var(--section-space-md)",
        paddingBottom: "var(--section-space-md)",
      }}
    >
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] md:gap-[var(--space-8)] items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="overflow-hidden rounded-[var(--radius-md)]">
              <img
                src="/images/spareribs.webp"
                alt="Spareribs van de grill bij Bij Wout, elke donderdag"
                className="w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.15}>
            <span
              className="font-[var(--font-body)] text-[length:var(--font-size-caption)] font-semibold tracking-[var(--letter-spacing-wide)] uppercase block !mb-[var(--space-2)]"
              style={{ color: "var(--color-koper)" }}
            >
              Elke donderdag
            </span>
            <h2 className="!text-[var(--color-kalk)] !mb-[var(--space-3)]">Spareribs</h2>
            <p
              className="font-[var(--font-accent)] text-[length:var(--font-size-accent)] !mb-[var(--space-3)]"
              style={{ color: "var(--color-koper)" }}
            >
              &euro;16 per portie
            </p>
            <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-kalk-o65)] !mb-[var(--space-5)] max-w-[28em]">
              Elke donderdag staan de spareribs op het menu. Inclusief friet, mayo en salade. Op = op!
            </p>
            <Button href="/reserveren" variant="secondary">
              Reserveer donderdag
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
