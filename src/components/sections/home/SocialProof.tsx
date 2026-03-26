"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const reviews = [
  {
    quote: "Vandaag met 5 zitten lunchen. Alles was super. Klein voorgerechtjes heerlijk.",
    name: "Erik Visser",
    rating: 5,
  },
  {
    quote: "Als je in Moergestel lekker wilt eten is 'Bij Wout' een no-brainer!",
    name: "Bart van Spaandonk",
    rating: 5,
  },
  {
    quote: "Ik krijg daar steeds een goed gevoel. Ik ervaar een extra attentie voor service.",
    name: "Ton Vans",
    rating: 5,
  },
  {
    quote: "Mooi pand met ruim terras. Plekje in de zon was heerlijk.",
    name: "W B",
    rating: 4,
  },
  {
    quote: "Bij Wout is een veilige keuze. Je kunt er heerlijk eten!",
    name: "Eugene Pallandt",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="var(--star-active)">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.44.91-5.33L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </span>
  );
}

export function SocialProof() {
  return (
    <Section theme="base" container="default" spacingTop="md" spacingBottom="md">
      <ScrollReveal>
        <h2 className="!mb-[var(--space-5)]">Wat de gasten zeggen</h2>
      </ScrollReveal>

      {/* Desktop: horizontal scroll */}
      <div className="hidden md:flex gap-[var(--space-6)] overflow-x-auto pb-[var(--space-3)] snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
        {reviews.map((review) => (
          <div
            key={review.name}
            className="snap-center shrink-0 w-[320px]"
            style={{
              border: "var(--border-width-thin) solid var(--color-eik-o10)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-5)",
            }}
          >
            <Stars count={review.rating} />
            <p className="font-[var(--font-display)] text-[length:var(--font-size-body)] italic text-[var(--color-heading)] leading-[var(--line-height-relaxed)] mt-[var(--space-3)] !mb-[var(--space-3)]">
              &ldquo;{review.quote}&rdquo;
            </p>
            <span className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)]">
              {review.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col gap-[var(--space-6)]">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.15}>
            <blockquote className="relative pl-[var(--space-4)]">
              <span
                className="absolute font-[var(--font-display)] text-[length:var(--font-size-display)] text-[var(--color-koper-o30)]"
                style={{ left: "var(--space-2)", top: "calc(-1 * var(--space-2))", lineHeight: "0.5" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-[var(--font-display)] text-[length:var(--font-size-body-lg)] italic text-[var(--color-heading)] leading-[var(--line-height-relaxed)] !mb-[var(--space-2)]">
                {review.quote}
              </p>
              <footer className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)] flex items-center gap-[var(--space-2)]">
                <span>-- {review.name}</span>
                <Stars count={review.rating} />
              </footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>

      <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] text-[var(--color-text-secondary)] mt-[var(--space-5)]">
        4.5/5 op Google (588+ reviews) &middot; #1 in Moergestel op TripAdvisor
      </p>
    </Section>
  );
}
