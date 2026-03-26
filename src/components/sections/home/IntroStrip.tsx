import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IntroStrip() {
  return (
    <Section theme="base" container="narrow" spacingTop="md" spacingBottom="sm">
      <ScrollReveal>
        <div className="flex items-center gap-[var(--space-4)] justify-center">
          <span
            className="hidden sm:block shrink-0"
            style={{
              width: "60px",
              height: "var(--border-width-thin)",
              backgroundColor: "var(--color-koper-o40)",
            }}
          />
          <p
            className="font-[var(--font-body)] text-[length:var(--font-size-body-lg)] italic text-[var(--color-text-secondary)] text-center max-w-[38em] leading-[var(--line-height-relaxed)] !mb-0"
          >
            Een terras op het Sint Jansplein, een kort menu dat wisselt met het seizoen,
            en een bierkaart van brouwers die je bij naam kent.
            Meer hoeft het niet te zijn.
          </p>
          <span
            className="hidden sm:block shrink-0"
            style={{
              width: "60px",
              height: "var(--border-width-thin)",
              backgroundColor: "var(--color-koper-o40)",
            }}
          />
        </div>
      </ScrollReveal>
    </Section>
  );
}
