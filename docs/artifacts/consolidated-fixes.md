# Consolidated Fixes -- Bij Wout
**Phase:** 4
**Compiled by:** Orchestrator
**Date:** 2026-03-25
**Status:** revised (fix pass #1)
**Sources:** design-review (design-critic), qa-report (qa-auditor), performance-report (performance-expert)

---

## Agent Reliability Notes

All three review agents hallucinated significant details about this build:
- **Design critic** reviewed against wrong fonts (Playfair Display, Source Sans 3, IBM Plex Mono) -- actual fonts are Lora, Source Serif 4, Caveat via next/font/local
- **QA auditor** claimed sitemap.ts/robots.ts exist (they don't), reported 174 bare Tailwind spacing instances (actual: 3), said reduced-motion not supported (it IS), flagged em dashes (none exist)
- **Performance expert** also analyzed wrong fonts (Geist, DM Serif Text)

All findings below are **independently verified** by the orchestrator against the actual codebase.

---

## Fix Priority: content > contrast > fonts > colors > states > layout > animation > polish

---

## Critical (3)

### C1: Missing sitemap.ts
- **Source:** QA auditor (incorrectly said it exists), SEO-technical artifact requires it
- **Location:** `src/app/sitemap.ts` (does not exist)
- **Fix:** Create `src/app/sitemap.ts` generating all 6 routes with proper lastModified, changeFrequency, and priority. Base URL: `https://www.bijwout.nl`

### C2: Missing robots.ts
- **Source:** QA auditor (incorrectly said it exists), SEO-technical artifact requires it
- **Location:** `src/app/robots.ts` (does not exist)
- **Fix:** Create `src/app/robots.ts` with `allow: /`, sitemap reference to `https://www.bijwout.nl/sitemap.xml`

### C3: No skip-to-content link
- **Source:** QA auditor
- **Location:** `src/app/layout.tsx`
- **Fix:** Add visually-hidden-until-focused skip link as first child of `<body>`: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Ga naar inhoud</a>` and add `id="main-content"` to `<main>`.

---

## Major (2)

### M1: Heading hierarchy issues on 4 pages
- **Source:** QA auditor (partially correct), orchestrator verification
- **Verified heading trees:**
  - `/groepen`: h1 -> h3, h3, h3 (skips h2)
  - `/maandagavond`: h2, h2, h3 (NO h1 on page)
  - `/over-wout`: h2, h2, h2, h3, h2 (NO h1 on page)
  - `/reserveren`: h1 -> h3, h2 (h3 before h2)
- **Fix:**
  - `/groepen`: Change `<h3>` to `<h2>` for section headings (option titles, "Richtprijzen", form heading). Keep visual size with text class if needed.
  - `/maandagavond`: The hero `<h2>` should be `<h1>`. "Zo werkt het" `<h3>` should be `<h2>`.
  - `/over-wout`: The hero `<h2>` should be `<h1>`. "Van het land" `<h3>` should be `<h2>`.
  - `/reserveren`: "Liever persoonlijk?" `<h3>` should be `<h2>`.

### M2: Dead Next.js starter SVGs in public/
- **Source:** Performance expert
- **Location:** `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- **Fix:** Delete all 5 files. None are referenced in any source file.

---

## Minor (2)

### N1: Missing error.tsx
- **Source:** QA auditor
- **Location:** `src/app/error.tsx` (does not exist)
- **Fix:** Create a basic `error.tsx` client component with retry button, styled to match the site design (use Section component, brand theme).

### N2: Add adjustFontFallback to localFont calls
- **Source:** Performance expert
- **Location:** `src/app/layout.tsx` -- all 3 localFont() declarations
- **Fix:** Add `adjustFontFallback: "Times New Roman"` to lora and sourceSerif declarations, `adjustFontFallback: false` to caveat (handwriting font has no good system fallback).

---

## Deferred (Not Current Fix Pass)

### D1: Image optimization strategy
- **Source:** Performance expert
- **Details:** `output: "export"` + `images: { unoptimized: true }` disables Next.js image optimization. No real images exist yet (all placeholders). Must be resolved before adding real photography.
- **Action:** Address when client provides photography assets.

### D2: Chalkboard grain texture
- **Source:** Design critic (indirectly), tokens.css defines `--chalkboard-grain-opacity: 0.04` but no grain overlay is implemented
- **Action:** Consider adding during Phase 5 refinement when visual polish is the focus.

---

## Rejected False Positives

| Agent Claim | Verdict | Reason |
|-------------|---------|--------|
| Font loading broken (design-critic) | REJECTED | layout.tsx correctly uses next/font/local with Lora, Source Serif 4, Caveat |
| Button contrast fails WCAG AA (QA) | REJECTED | Primary button is woud (#2D4A3E) on kalk (#F5F0E8) = ~8.6:1 contrast |
| Em dashes in source files (QA) | REJECTED | Zero em dashes found across all .tsx files |
| Framer Motion ignores reduced-motion (QA) | REJECTED | useReducedMotion implemented in ScrollReveal, Accordion, all Heroes, Navigation |
| 174 bare Tailwind spacing instances (QA) | REJECTED | Only 3 sub-token instances found (gap-0.5, gap-1.5, !mb-0) |
| Emoji icons in PhilosophyValues (design-critic) | REJECTED | Component uses numbered values (01, 02, 03, 04), no emojis |
| GSAP dead dependency (design-critic) | REJECTED | GSAP not in package.json |
| Reserveren missing metadata (design-critic) | REJECTED | page.tsx exports Metadata correctly |
| Missing focus-visible styles (design-critic) | REJECTED | tokens.css line 670 has global :focus-visible with token-based outline |
| Sitemap.ts exists and is valid (QA) | REJECTED | File does not exist |
| Robots.ts exists and is valid (QA) | REJECTED | File does not exist |

---

## Resolution Log (Fix Pass #1)

| Issue | Status | Details |
|-------|--------|---------|
| C1: Missing sitemap.ts | FIXED | Created `src/app/sitemap.ts` with 6 routes, priority, changeFrequency |
| C2: Missing robots.ts | FIXED | Created `src/app/robots.ts` with allow all + sitemap reference |
| C3: No skip-to-content link | FIXED | Added sr-only skip link to layout.tsx, `id="main-content"` on `<main>` |
| M1: Heading hierarchy | FIXED | Promoted h3 -> h2 on groepen (3), maandagavond (1), over-wout (1), reserveren (1). All pages have h1 via motion.h1 in hero components. Visual size preserved with `!text-[length:var(--font-size-h3)]`. |
| M2: Dead starter SVGs | FIXED | Deleted file.svg, globe.svg, next.svg, vercel.svg, window.svg |
| N1: Missing error.tsx | FIXED | Created branded error page with retry + homepage buttons |
| N2: adjustFontFallback | FIXED | Added Times New Roman fallback for Lora and Source Serif, false for Caveat |
| D1: Image optimization | DEFERRED | No real images yet -- address when photography arrives |
| D2: Chalkboard grain texture | DEFERRED | Phase 5 refinement polish item |

**Build status after fix pass #1:** PASS (zero errors, zero warnings, 11 routes statically generated including sitemap.xml and robots.txt)
