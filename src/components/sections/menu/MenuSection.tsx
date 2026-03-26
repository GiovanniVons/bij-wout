import { CopperRule } from "@/components/ui/CopperRule";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import type { MenuCategory } from "@/content/menu-data";

interface MenuSectionProps {
  id?: string;
  title?: string;
  categories: MenuCategory[];
  isFirst?: boolean;
  theme?: "dark" | "warm";
  showSectionHeading?: boolean;
}

export function MenuSection({
  id,
  title,
  categories,
  isFirst,
  theme = "dark",
  showSectionHeading = true,
}: MenuSectionProps) {
  const isDark = theme === "dark";

  // Token prefixes based on theme
  const nameColor = isDark ? "var(--menu-chalk-name)" : "var(--menu-light-name)";
  const descColor = isDark ? "var(--menu-chalk-desc)" : "var(--menu-light-desc)";
  const priceFont = isDark ? "var(--menu-chalk-price-font)" : "var(--menu-light-price-font)";
  const priceColor = isDark ? "var(--menu-chalk-price-color)" : "var(--menu-light-price-color)";
  const separatorStyle = isDark ? "var(--menu-chalk-separator)" : "var(--menu-light-separator)";
  const separatorColor = isDark ? "var(--menu-chalk-separator-color)" : "var(--menu-light-separator-color)";
  const subcategoryColor = isDark ? "var(--color-kalk-o80)" : "var(--color-leisteen)";

  return (
    <section
      {...(id ? { id } : {})}
      data-theme={theme}
      className="bg-[var(--color-bg)]"
      style={{
        paddingTop: isFirst ? "var(--section-space-sm)" : "var(--section-space-md)",
        paddingBottom: "var(--section-space-sm)",
      }}
    >
      <div className="container-narrow">
        {showSectionHeading && title ? (
          <>
            <h2 style={{ color: nameColor }} className="!mb-[var(--space-2)]">{title}</h2>
            <CopperRule className="!mb-[var(--space-6)]" />
          </>
        ) : (
          <CopperRule className="!mb-[var(--space-5)]" />
        )}

        {categories.map((category) => (
          <div key={category.title || "default"} className="mb-[var(--space-5)]">
            {category.title && (
              <h3
                className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] font-semibold tracking-[var(--letter-spacing-wide)] uppercase mt-[var(--space-6)] !mb-[var(--space-3)]"
                style={{ color: isDark ? "var(--color-koper)" : "var(--color-koper-dark)" }}
              >
                {category.title}
              </h3>
            )}
            <StaggerReveal stagger={0.06} threshold={0.15}>
              {category.items.map((item) => (
                <StaggerItem key={item.name} y={12} duration={0.4}>
                  <div className="mb-[var(--space-4)]">
                    <div className="flex items-baseline gap-[var(--space-2)]">
                      <span
                        className="font-[var(--font-body)] text-[length:var(--font-size-body)] whitespace-nowrap"
                        style={{ color: nameColor }}
                      >
                        {item.name}
                      </span>
                      {item.tags && item.tags.length > 0 && (
                        <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-hop)] whitespace-nowrap ml-[var(--space-1)]">
                          ({item.tags.join(") (")})
                        </span>
                      )}
                      <span
                        className="flex-1 min-w-[2rem]"
                        style={{ borderBottom: `var(--border-width-thin) ${separatorStyle} ${separatorColor}` }}
                      />
                      <span
                        className="text-[length:var(--font-size-body)] whitespace-nowrap"
                        style={{ fontFamily: priceFont, color: priceColor }}
                      >
                        &euro;{item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p
                        className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] leading-[var(--line-height-relaxed)] !mb-0 mt-[var(--space-1)]"
                        style={{ color: descColor }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
