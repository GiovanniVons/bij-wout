import { Section } from "@/components/ui/Section";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

const steps = [
  { number: "1", title: "Reserveer", description: "Online of bel even naar 013 850 8300." },
  { number: "2", title: "Schuif aan", description: "Elke maandag vanaf 17:00 uur." },
  { number: "3", title: "Stel samen", description: "Per gang drie keuzes. Jij bepaalt." },
];

export function HowItWorks() {
  return (
    <Section theme="base" container="default" spacingTop="md" spacingBottom="md">
      <h2 className="!mb-[var(--space-6)] !text-[length:var(--font-size-h3)]">Zo werkt het</h2>
      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-5)]" stagger={0.2}>
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <span className="font-[var(--font-display)] text-[length:var(--font-size-h2)] text-[var(--color-koper-o30)] block mb-[var(--space-2)]">
              {step.number}
            </span>
            <span className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-heading)] block mb-[var(--space-2)]">
              {step.title}
            </span>
            <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text)] leading-[var(--line-height-relaxed)] max-w-[22ch] !mb-0">
              {step.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  );
}
