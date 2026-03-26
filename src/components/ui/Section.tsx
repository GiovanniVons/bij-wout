import type { ReactNode } from "react";

type Theme = "base" | "dark" | "brand" | "warm";
type Container = "narrow" | "default" | "wide" | "full";
type Spacing = "sm" | "md" | "lg" | "xl" | "none";

interface SectionProps {
  children: ReactNode;
  theme?: Theme;
  container?: Container;
  spacingTop?: Spacing;
  spacingBottom?: Spacing;
  className?: string;
  id?: string;
}

const containerClass: Record<Container, string> = {
  narrow: "container-narrow",
  default: "container-default",
  wide: "container-wide",
  full: "",
};

const spacingTopClass: Record<Spacing, string> = {
  none: "",
  sm: "pt-[var(--section-space-sm)]",
  md: "pt-[var(--section-space-md)]",
  lg: "pt-[var(--section-space-lg)]",
  xl: "pt-[var(--section-space-xl)]",
};

const spacingBottomClass: Record<Spacing, string> = {
  none: "",
  sm: "pb-[var(--section-space-sm)]",
  md: "pb-[var(--section-space-md)]",
  lg: "pb-[var(--section-space-lg)]",
  xl: "pb-[var(--section-space-xl)]",
};

export function Section({
  children,
  theme = "base",
  container = "default",
  spacingTop = "md",
  spacingBottom = "md",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      data-theme={theme}
      id={id}
      className={`bg-[var(--color-bg)] ${spacingTopClass[spacingTop]} ${spacingBottomClass[spacingBottom]} ${className}`}
    >
      {container === "full" ? (
        children
      ) : (
        <div className={containerClass[container]}>{children}</div>
      )}
    </section>
  );
}
