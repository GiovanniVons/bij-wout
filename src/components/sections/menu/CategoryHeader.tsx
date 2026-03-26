import { CopperRule } from "@/components/ui/CopperRule";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CategoryHeaderProps {
  id: string;
  title: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function CategoryHeader({
  id,
  title,
  quote,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: CategoryHeaderProps) {
  const imageBlock = (
    <ScrollReveal>
      <div className="overflow-hidden rounded-[var(--radius-md)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover"
          style={{ aspectRatio: "16/10" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </ScrollReveal>
  );

  const textBlock = (
    <ScrollReveal delay={0.15} className="flex flex-col justify-center">
      <h2 className="!mb-[var(--space-2)]">{title}</h2>
      <CopperRule className="!mb-[var(--space-4)]" />
      <p className="font-[var(--font-accent)] text-[length:var(--font-size-accent)] text-[var(--color-accent)] !mb-0">
        {quote}
      </p>
    </ScrollReveal>
  );

  return (
    <section
      id={id}
      data-theme="warm"
      className="bg-[var(--color-bg)]"
      style={{
        paddingTop: "var(--section-space-sm)",
        paddingBottom: "var(--section-space-sm)",
      }}
    >
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[var(--space-6)] md:gap-[var(--space-8)] items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
