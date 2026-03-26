import { CopperRule } from "@/components/ui/CopperRule";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { beerCategories } from "@/content/menu-data";

const tapBeers = beerCategories.flatMap((cat) => cat.beers).filter((b) => b.tap);

const tapImages = ["/images/wisseltap-shot.webp", "/images/bij-wout-bier-glas.webp"];

export function BeerSection() {
  return (
    <section
      id="craft-bier"
      data-theme="dark"
      className="bg-[var(--color-bg)] pt-[var(--section-space-md)] pb-[var(--section-space-sm)]"
    >
      <div className="container-default">
        <h2 className="!text-[var(--menu-chalk-name)] !mb-[var(--space-2)]">Wisselbieren</h2>
        <CopperRule className="!mb-[var(--space-4)]" />
        <p className="font-[var(--font-body)] text-[length:var(--font-size-body)] text-[var(--color-tarwe)] leading-[var(--line-height-relaxed)] !mb-[var(--space-6)] max-w-[36em]">
          Geen Heineken-tap hier. Wij schenken bier van brouwers die je bij naam kent. Wisselende
          taps, vaste specials, en altijd iets dat je nog niet eerder hebt geproefd.
        </p>

        {/* Featured Taps */}
        {tapBeers.length > 0 && (
          <div className="mb-[var(--space-8)]">
            <span
              className="font-[var(--font-body)] text-[length:var(--font-size-caption)] font-semibold tracking-[var(--letter-spacing-wide)] uppercase block !mb-[var(--space-4)]"
              style={{ color: "var(--color-koper)" }}
            >
              Van de tap
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-5)]">
              {tapBeers.map((beer, i) => (
                <ScrollReveal key={`${beer.brewery}-${beer.name}`} delay={i * 0.12}>
                  <div
                    className="overflow-hidden grid grid-cols-1 sm:grid-cols-[1fr_1.2fr]"
                    style={{
                      background: "var(--color-kalk-o8)",
                      border: "var(--border-width-thin) solid var(--color-kalk-o15)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    {tapImages[i] && (
                      <img
                        src={tapImages[i]}
                        alt={`${beer.name} van ${beer.brewery}`}
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: "4/5" }}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div className="p-[var(--space-4)] flex flex-col justify-center">
                      <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] font-semibold text-[var(--color-koper)] tracking-[var(--letter-spacing-wide)] uppercase block">
                        {beer.brewery}
                      </span>
                      <span className="font-[var(--font-body)] text-[length:var(--font-size-body-lg)] font-semibold text-[var(--color-kalk)] block mt-[var(--space-1)]">
                        {beer.name}
                      </span>
                      <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-kalk-o65)] block mt-[var(--space-1)]">
                        {beer.style} &middot; {beer.abv}
                      </span>
                      <span
                        className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-kalk)] block mt-[var(--space-2)]"
                      >
                        &euro;{beer.price}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* All Beers by Category */}
        <div className="flex flex-col" style={{ gap: "var(--space-6)" }}>
          {beerCategories.map((category) => (
            <div key={category.title}>
              <h3
                className="font-[var(--font-accent)] text-[length:var(--font-size-body)] font-semibold tracking-[var(--letter-spacing-wide)] uppercase !mb-[var(--space-3)]"
                style={{ color: "var(--color-koper)" }}
              >
                {category.title}
              </h3>

              <StaggerReveal
                className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-3)]"
                stagger={0.08}
              >
                {category.beers.map((beer) => (
                  <StaggerItem key={`${category.title}-${beer.name}`}>
                    <div
                      className="p-[var(--space-3)] flex justify-between items-start"
                      style={{
                        background: "var(--color-kalk-o8)",
                        border: "var(--border-width-thin) solid var(--color-kalk-o15)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] font-semibold text-[var(--color-koper)] tracking-[var(--letter-spacing-wide)] uppercase block">
                          {beer.brewery}
                        </span>
                        <span className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-kalk)] block mt-[var(--space-1)]">
                          {beer.name}
                          {beer.tap && (
                            <span
                              className="inline-block ml-[var(--space-2)] font-[var(--font-accent)] text-[length:var(--font-size-caption)] font-normal tracking-[var(--letter-spacing-wide)] uppercase"
                              style={{ color: "var(--color-koper-o65)" }}
                            >
                              TAP
                            </span>
                          )}
                        </span>
                        <span className="font-[var(--font-body)] text-[length:var(--font-size-caption)] text-[var(--color-kalk-o65)] block mt-[var(--space-1)]">
                          {beer.style} &middot; {beer.abv}
                        </span>
                      </div>
                      <span className="font-[var(--font-body)] text-[length:var(--font-size-body)] font-semibold text-[var(--color-kalk)] shrink-0 ml-[var(--space-3)]">
                        &euro;{beer.price}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          ))}
        </div>

        <p className="font-[var(--font-body)] text-[length:var(--font-size-body-sm)] italic text-[var(--color-kalk-o65)] mt-[var(--space-5)]">
          De brouwerijen zitten om de hoek. Letterlijk. Dat maakt het bier verser, de lijntjes
          korter, en het verhaal eerlijker.
        </p>
      </div>
    </section>
  );
}
