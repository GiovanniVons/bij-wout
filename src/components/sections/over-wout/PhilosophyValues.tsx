import { Section } from "@/components/ui/Section";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

const values = [
  { number: "01", title: "Seizoenskeuken", description: "De kaart wisselt mee met wat er binnenkomt. Elke week andere wisselgerechten, elke maand een nieuwe soep. Niks uit de vriezer." },
  { number: "02", title: "Namen op de kaart", description: "Je vlees komt van Slagerij Ketelaars, je kroket van de Bourgondiër, je ijs van 't Ijsboerinneke. Je weet wat je eet." },
  { number: "03", title: "Bier van brouwers", description: "Wisselende taps van Frontaal, Stadsbrouwerij 013 en het Moergestels Brouwcollectief. Geen merkbier, wel verhaal." },
  { number: "04", title: "Eerlijke prijzen", description: "Borrelplankje voor 5,35, spareribs voor 16 euro, maandagavond drie gangen voor 23,50. Ruime porties, geen verrassingen op de rekening." },
];

export function PhilosophyValues() {
  return (
    <Section theme="dark" container="default" spacingTop="md" spacingBottom="md">
      <h2 className="!text-[var(--color-kalk)] !mb-[var(--space-6)]">Wat je kan verwachten</h2>
      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)]" stagger={0.15}>
        {values.map((value) => (
          <StaggerItem key={value.number}>
            <div
              className="h-full p-[var(--space-5)]"
              style={{
                background: "var(--color-kalk-o8)",
                border: "var(--border-width-thin) solid var(--color-kalk-o15)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <span className="font-[var(--font-accent)] text-[length:var(--font-size-h3)] text-[var(--color-koper-o50)] block mb-[var(--space-2)]">
                {value.number}
              </span>
              <span className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] font-bold text-[var(--color-kalk)] block">
                {value.title}
              </span>
              <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-kalk-o80)] leading-[var(--line-height-relaxed)] mt-[var(--space-2)] !mb-0">
                {value.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  );
}
