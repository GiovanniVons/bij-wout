"use client";

import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import ScoreRing from "./ScoreRing";

/* ------------------------------------------------------------------ */
/*  THEME                                                              */
/* ------------------------------------------------------------------ */

const theme = {
  bgDark: "var(--color-woud)",
  bgLight: "var(--color-tarwe)",
  bgAccent: "var(--color-woud-dark)",
  textOnDark: "var(--color-kalk)",
  textOnLight: "var(--color-eik)",
  accent: "var(--color-koper)",
  highlight: "var(--color-koper)",
};

/* ------------------------------------------------------------------ */
/*  ICONS                                                              */
/* ------------------------------------------------------------------ */

const icons = {
  bolt: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  search: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  image: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  ),
  palette: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const problems = [
  {
    stat: "Traag",
    label: "op je telefoon",
    desc: "De site laadt langzaam op mobiel. Gasten die onderweg zoeken naar Bij Wout, haken af voordat de pagina geladen is.",
    icon: icons.bolt,
    highlight: true,
  },
  {
    stat: "Onzichtbaar",
    label: "in zoekresultaten",
    desc: "Google toont je naam en een linkje. Geen openingstijden, geen type restaurant, geen foto in de zoekresultaten. AI-zoekmachines weten niet wat Bij Wout precies is.",
    icon: icons.search,
  },
  {
    stat: "Geen",
    label: "cookiebanner",
    desc: "Er is geen cookiebanner en geen privacybeleid. Dat is wettelijk verplicht.",
    icon: icons.shield,
  },
  {
    stat: "Foto",
    label: "als menukaart",
    desc: "Het menu is een plaatje. Op je telefoon moet je inzoomen en scrollen. En Google kan er niks mee.",
    icon: icons.image,
  },
  {
    stat: "Template",
    label: "als uitstraling",
    desc: "Standaard grijstinten, geen eigen kleuren, geen eigen lettertype. De site voelt niet als Bij Wout.",
    icon: icons.palette,
  },
];

const solutions = [
  {
    stat: "Snel",
    label: "op elke telefoon",
    desc: "Gasten die onderweg zoeken laden de site in minder dan 2 seconden. Ook op een oude telefoon.",
    icon: icons.bolt,
    highlight: true,
  },
  {
    stat: "Zichtbaar",
    label: "in Google en AI",
    desc: "Google toont jullie openingstijden, adres en type restaurant direct in de zoekresultaten. ChatGPT en Siri weten precies wat Bij Wout is.",
    icon: icons.search,
  },
  {
    stat: "Cookiebanner",
    label: "geregeld",
    desc: "Cookiebanner en privacybeleid zitten erin. Wordt automatisch bijgewerkt, jullie hoeven er niks voor te doen.",
    icon: icons.shield,
  },
  {
    stat: "77",
    label: "gerechten online",
    desc: "Het hele menu staat er digitaal in. Gasten filteren op categorie, zien prijzen, en hoeven niet in te zoomen.",
    icon: icons.image,
  },
  {
    stat: "Eigen",
    label: "uitstraling",
    desc: "Koper, hout, woud. Eigen kleuren, eigen lettertypen. Dit ziet eruit als Bij Wout, niet als een bouwpakket.",
    icon: icons.palette,
  },
];

/* Lighthouse mobile scores -- bijwout.nl (old) vs bij-wout.vonzie-host.com (new) */
const scores = [
  { label: "Snelheid", before: 49, after: 92 },
  { label: "Toegankelijkheid", before: 94, after: 96 },
  { label: "Techniek", before: 69, after: 100 },
];

const features = [
  {
    title: "Website op maat",
    desc: "Geen template. Gebouwd voor Bij Wout, niemand anders.",
  },
  {
    title: "Reserveringen",
    desc: "Gasten boeken direct via de site, zonder omweg.",
  },
  {
    title: "Cookiebanner en privacy",
    desc: "Automatisch bijgewerkt, jullie hoeven er niks voor te doen.",
  },
  {
    title: "Hosting en onderhoud",
    desc: "Altijd online. Updates en beveiliging inbegrepen.",
  },
  {
    title: "Vindbaar in Google",
    desc: "Alles staat klaar zodat Google en AI-zoekmachines jullie makkelijk vinden.",
  },
  {
    title: "Craft bier database",
    desc: "33 bieren in 6 categorieën. Wisseltaps uitgelicht.",
  },
];

const stats = [
  { value: "< 2s", label: "Laadtijd op mobiel" },
  { value: "92", label: "Lighthouse score (was 49)" },
  { value: "77", label: "Gerechten op de kaart" },
  { value: "0", label: "Externe partijen met je data" },
];

const possibilities = [
  {
    stat: "Reserveren",
    label: "via de site zelf",
    desc: "Nu opent er een apart GuestPlan-venster. Met Remesa zit de reserveerwidget in de pagina zelf, in jullie eigen huisstijl.",
    icon: icons.calendar,
  },
  {
    stat: "Zelfde",
    label: "gastenbeheer",
    desc: "Zelfde functionaliteit als GuestPlan. Maar dan bij ons in de prijs inbegrepen, geen extra upgrade nodig.",
    icon: icons.users,
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export function PitchContent() {
  return (
    <div>
      {/* ============================================================ */}
      {/* S1: HERO                                                      */}
      {/* ============================================================ */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "100vh",
          backgroundColor: theme.bgDark,
          color: theme.textOnDark,
        }}
      >
        <ScrollReveal>
          <p
            className="uppercase mb-[var(--space-2)]"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--font-size-caption)",
              letterSpacing: "var(--letter-spacing-widest)",
              color: theme.accent,
            }}
          >
            Hey Wout en Elise
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--font-size-display)",
              fontWeight: 500,
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "var(--letter-spacing-tight)",
              color: theme.textOnDark,
              marginBottom: "var(--space-4)",
            }}
          >
            Jullie nieuwe website{"\n"}is klaar.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-body-lg)",
              lineHeight: "var(--line-height-relaxed)",
              color: theme.textOnDark,
              opacity: 0.7,
              maxWidth: "520px",
            }}
          >
            Van Weebly-template naar een website die Bij Wout eer aandoet.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <div className="mt-12" style={{ opacity: 0.4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </ScrollReveal>
      </section>


      {/* ============================================================ */}
      {/* S2: PROBLEMS                                                  */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgLight,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                color: theme.textOnLight,
                marginBottom: "var(--space-8)",
              }}
            >
              Wat we tegenkwamen
            </h2>
          </ScrollReveal>

          <StaggerReveal stagger={0.1}>
            {/* Highlighted lead card -- full width */}
            {problems.filter((item) => item.highlight).map((item) => (
              <StaggerItem key={item.label}>
                <div
                  className="p-[var(--space-5)] mb-[var(--space-4)]"
                  style={{
                    backgroundColor: "var(--color-kalk)",
                    borderLeft: "3px solid var(--color-koper)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div className="flex items-start gap-[var(--space-4)]">
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 48, height: 48, color: theme.highlight }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-[var(--space-2)] mb-[var(--space-2)]">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--font-size-h2)",
                            fontWeight: 600,
                            color: theme.highlight,
                          }}
                        >
                          {item.stat}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--font-size-body)",
                            color: theme.textOnLight,
                            opacity: 0.6,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--font-size-body)",
                          lineHeight: "var(--line-height-relaxed)",
                          color: theme.textOnLight,
                          opacity: 0.75,
                          margin: 0,
                          maxWidth: "36em",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
            {/* Remaining cards -- 2-column grid */}
            <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
              {problems.filter((item) => !item.highlight).map((item) => (
                <StaggerItem key={item.label}>
                  <div className="p-[var(--space-4)] h-full">
                    <div className="flex items-start gap-[var(--space-3)]">
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{ width: 40, height: 40, color: theme.highlight }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-[var(--space-2)] mb-[var(--space-1)]">
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--font-size-h3)",
                              fontWeight: 600,
                              color: theme.highlight,
                            }}
                          >
                            {item.stat}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--font-size-body)",
                              color: theme.textOnLight,
                              opacity: 0.6,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--font-size-body)",
                            lineHeight: "var(--line-height-relaxed)",
                            color: theme.textOnLight,
                            opacity: 0.75,
                            margin: 0,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>


      {/* ============================================================ */}
      {/* S3: SOLUTIONS                                                 */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgAccent,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                color: theme.textOnDark,
                marginBottom: "var(--space-8)",
              }}
            >
              Meer gasten, minder gedoe
            </h2>
          </ScrollReveal>

          <StaggerReveal stagger={0.1}>
            {/* Highlighted lead card -- full width */}
            {solutions.filter((item) => item.highlight).map((item) => (
              <StaggerItem key={item.label}>
                <div
                  className="p-[var(--space-5)] mb-[var(--space-4)]"
                  style={{
                    backgroundColor: "var(--color-kalk-o8)",
                    borderLeft: "3px solid var(--color-koper)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div className="flex items-start gap-[var(--space-4)]">
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 48, height: 48, color: theme.accent }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-[var(--space-2)] mb-[var(--space-2)]">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--font-size-h2)",
                            fontWeight: 600,
                            color: theme.textOnDark,
                          }}
                        >
                          {item.stat}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--font-size-body)",
                            color: theme.textOnDark,
                            opacity: 0.5,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--font-size-body)",
                          lineHeight: "var(--line-height-relaxed)",
                          color: theme.textOnDark,
                          opacity: 0.7,
                          margin: 0,
                          maxWidth: "36em",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
            {/* Remaining cards -- 2-column grid */}
            <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
              {solutions.filter((item) => !item.highlight).map((item) => (
                <StaggerItem key={item.label}>
                  <div className="p-[var(--space-4)] h-full">
                    <div className="flex items-start gap-[var(--space-3)]">
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{ width: 40, height: 40, color: theme.accent }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-[var(--space-2)] mb-[var(--space-1)]">
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--font-size-h3)",
                              fontWeight: 600,
                              color: theme.textOnDark,
                            }}
                          >
                            {item.stat}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--font-size-body)",
                              color: theme.textOnDark,
                              opacity: 0.5,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--font-size-body)",
                            lineHeight: "var(--line-height-relaxed)",
                            color: theme.textOnDark,
                            opacity: 0.7,
                            margin: 0,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>


      {/* ============================================================ */}
      {/* S4: SCORES                                                    */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgLight,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <p
              className="text-center uppercase mb-[var(--space-2)]"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--font-size-caption)",
                letterSpacing: "var(--letter-spacing-widest)",
                color: theme.highlight,
              }}
            >
              Het verschil
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                color: theme.textOnLight,
                marginBottom: "var(--space-8)",
              }}
            >
              Oud vs. nieuw
            </h2>
          </ScrollReveal>

          <StaggerReveal stagger={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-6)]">
              {scores.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="flex sm:flex-col items-center sm:text-center gap-[var(--space-4)] sm:gap-0">
                    <p
                      className="w-28 sm:w-auto text-right sm:text-center shrink-0"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--font-size-caption)",
                        letterSpacing: "var(--letter-spacing-wide)",
                        textTransform: "uppercase",
                        color: theme.textOnLight,
                        opacity: 0.5,
                        marginBottom: "0",
                      }}
                    >
                      {s.label}
                    </p>
                    <div className="flex items-center gap-[var(--space-2)] sm:mt-[var(--space-3)]">
                      <div style={{ opacity: 0.4 }}>
                        <ScoreRing value={s.before} size={72} color={theme.textOnLight} />
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.textOnLight}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: 0.25 }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      <ScoreRing value={s.after} size={72} color={theme.accent} />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>

          <ScrollReveal delay={0.3}>
            <p
              className="text-center mt-[var(--space-6)]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-sm)",
                color: theme.textOnLight,
                opacity: 0.45,
              }}
            >
              Scores via Google Lighthouse (0-100). Hoe hoger, hoe beter.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ============================================================ */}
      {/* S5: PACKAGE                                                   */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgDark,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <p
              className="text-center uppercase mb-[var(--space-2)]"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--font-size-caption)",
                letterSpacing: "var(--letter-spacing-widest)",
                color: theme.accent,
              }}
            >
              Eén pakket
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                color: theme.textOnDark,
                marginBottom: "var(--space-8)",
              }}
            >
              Alles inbegrepen
            </h2>
          </ScrollReveal>

          <StaggerReveal stagger={0.08}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-4)]">
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="flex items-start gap-[var(--space-3)] p-[var(--space-4)] h-full">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={theme.accent}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--font-size-body)",
                          fontWeight: 600,
                          color: theme.textOnDark,
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        {f.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--font-size-body-sm)",
                          lineHeight: "var(--line-height-relaxed)",
                          color: theme.textOnDark,
                          opacity: 0.6,
                          margin: 0,
                        }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>


      {/* ============================================================ */}
      {/* S6: STATS                                                     */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgLight,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h3)",
                fontWeight: 700,
                color: theme.textOnLight,
                marginBottom: "var(--space-8)",
              }}
            >
              In cijfers
            </h2>
          </ScrollReveal>

          <StaggerReveal stagger={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-6)]">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--font-size-h1)",
                        fontWeight: 600,
                        color: theme.accent,
                        lineHeight: 1,
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--font-size-body-sm)",
                        letterSpacing: "var(--letter-spacing-wide)",
                        color: theme.textOnLight,
                        opacity: 0.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>


      {/* ============================================================ */}
      {/* S7: POSSIBILITIES (Vonzie Reserveringen)                      */}
      {/* ============================================================ */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgLight,
        }}
      >
        <div className="container-narrow px-6">
          <ScrollReveal>
            <p
              className="text-center uppercase mb-[var(--space-2)]"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--font-size-caption)",
                letterSpacing: "var(--letter-spacing-widest)",
                color: theme.highlight,
              }}
            >
              Klaar wanneer jullie willen
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                color: theme.textOnLight,
                marginBottom: "var(--space-3)",
              }}
            >
              Reserveren zonder omweg
            </h2>
            <p
              className="text-center mx-auto"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-body-lg)",
                lineHeight: "var(--line-height-relaxed)",
                color: theme.textOnLight,
                opacity: 0.75,
                maxWidth: "520px",
                marginBottom: "var(--space-8)",
              }}
            >
              De reserveerpagina draait nu op GuestPlan. Wij kunnen die vervangen door een widget die direct in de site zit, in jullie eigen huisstijl.
            </p>
          </ScrollReveal>

          <StaggerReveal stagger={0.1}>
            <div className="grid md:grid-cols-2 gap-[var(--space-4)]">
              {possibilities.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="p-[var(--space-4)] h-full">
                    <div className="flex items-start gap-[var(--space-3)]">
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{ width: 40, height: 40, color: theme.accent }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-[var(--space-2)] mb-[var(--space-1)]">
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--font-size-h3)",
                              fontWeight: 600,
                              color: theme.accent,
                            }}
                          >
                            {item.stat}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--font-size-body)",
                              color: theme.textOnLight,
                              opacity: 0.6,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--font-size-body)",
                            lineHeight: "var(--line-height-relaxed)",
                            color: theme.textOnLight,
                            opacity: 0.75,
                            margin: 0,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* S8: CTA                                                       */}
      {/* ============================================================ */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: theme.bgDark,
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--font-size-h2)",
              fontWeight: 700,
              color: theme.textOnDark,
              marginBottom: "var(--space-5)",
            }}
          >
            Klaar om te zien?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <a
            href="/"
            onClick={() => sessionStorage.setItem("bijwout-reveal", "1")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-body-lg)",
              color: theme.accent,
              textDecoration: "none",
              borderBottom: `1px solid`,
              paddingBottom: "var(--space-1)",
            }}
          >
            Bekijk de website
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p
            className="mt-[var(--space-6)]"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--font-size-caption)",
              letterSpacing: "var(--letter-spacing-wide)",
              color: theme.textOnDark,
              opacity: 0.3,
              textTransform: "uppercase",
            }}
          >
            Gebouwd door Vonzie
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
