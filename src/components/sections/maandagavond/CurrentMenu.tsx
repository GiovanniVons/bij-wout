import { Section } from "@/components/ui/Section";
import { CopperRule } from "@/components/ui/CopperRule";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { mondayMenu } from "@/content/menu-data";

export function CurrentMenu() {
  return (
    <Section theme="base" container="narrow" spacingTop="md" spacingBottom="md">
      <h2 className="!mb-[var(--space-2)]">Deze week op tafel</h2>
      <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)] !mb-[var(--space-1)]">
        Menu van {mondayMenu.date}
      </p>
      <CopperRule className="!mb-[var(--space-6)]" />

      <StaggerReveal stagger={0.2}>
        {mondayMenu.courses.map((course, i) => (
          <StaggerItem key={course.category}>
            <div className="mb-[var(--space-4)]">
              <span className="text-accent block mb-[var(--space-2)]">{course.category}</span>
              <ul className="flex flex-col gap-[var(--space-2)] list-none pl-0">
                {course.dishes.map((dish) => (
                  <li key={dish.name} className="flex items-baseline gap-[var(--space-2)]">
                    <span className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-heading)]">
                      {dish.name}
                    </span>
                    {dish.description && (
                      <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text)]">
                        &middot; {dish.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {i < mondayMenu.courses.length - 1 && (
              <hr
                className="my-[var(--space-4)]"
                style={{ border: "none", borderTop: "var(--border-width-thin) dashed var(--color-eik-o15)" }}
              />
            )}
          </StaggerItem>
        ))}
      </StaggerReveal>

      <p
        className="font-[var(--font-accent)] text-[length:var(--font-size-accent)] mt-[var(--space-5)] !mb-[var(--space-4)]"
        style={{ color: "var(--color-koper)" }}
      >
        &euro;{mondayMenu.price} p.p. &middot; 3 gangen
      </p>

      <ul className="flex flex-col gap-[var(--space-2)] list-disc list-inside">
        {mondayMenu.terms.map((term) => (
          <li key={term} className="text-[length:var(--font-size-body-sm)] text-[var(--color-text)]">
            {term}
          </li>
        ))}
      </ul>
    </Section>
  );
}
