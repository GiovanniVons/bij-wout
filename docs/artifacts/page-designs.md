# Page Designs -- Bij Wout
**Phase:** 2
**Agent:** UI Designer
**Date:** 2026-03-25
**Status:** draft

---

## Page Index

| Page | Slug | Sections | Theme Flow |
|------|------|----------|------------|
| [Global: Navigation](#global-navigation) | -- | Desktop nav, mobile overlay | base |
| [Global: Footer](#global-footer) | -- | Three-column + colophon | brand (Eik) |
| [Home](#page-home) | `/` | Hero, Intro Strip, Menu Preview, Monday Callout, About Teaser, Social Proof, CTA Strip | base > base > base > warm > base > base > dark |
| [Menu](#page-menu) | `/menu` | Hero Banner, Sticky Jump Links, Lunch, Diner, Kinderen, Wisselbieren, Dietary Legend | brand > dark > dark > dark > dark > dark > base |
| [Over Wout](#page-over-wout) | `/over-wout` | Reversed Hero, Origin Story, Philosophy Values, Team, Sourcing Strip | base > base > dark > base > warm |
| [Groepen](#page-groepen) | `/groepen` | Image Hero, Option Cards, Pricing, Inquiry Form | base > base > warm > base |
| [Maandagavond](#page-maandagavond) | `/maandagavond` | Hero + Price Badge, Current Menu, How It Works, CTA | warm > base > base > dark |
| [Reserveren](#page-reserveren) | `/reserveren` | Widget Section, Contact Details, FAQ Accordion | base > warm > base |

---

## Design Dials Reference

From brand-guidelines.md:
- **DESIGN_VARIANCE: 5** -- One layout-breaking moment per page (asymmetry, bleeds, overlaps). Not aggressive, but not predictable.
- **MOTION_INTENSITY: 4** -- Framer Motion entrance sequences, staggered reveals. No GSAP scroll-driven parallax or pinning.
- **VISUAL_DENSITY: 4** -- Balanced density. Generous whitespace on hero sections, moderate density on content sections.

---

## Global Tokens Quick Reference

All specifications below reference token variables from `tokens.css`. No raw hex or px values are used in layout specifications.

**Spacing shorthand:**
- `--space-1` through `--space-10` (static scale)
- `--section-space-sm`, `--section-space-md`, `--section-space-lg` (vertical section rhythm)

**Font size shorthand:**
- `--font-size-caption` through `--font-size-display`

**Theme modes:**
- `base` = Kalk bg / Eik text
- `dark` = Woud bg / Kalk text
- `brand` = Eik bg / Kalk text
- `warm` = Tarwe bg / Eik text

---

## Global: Navigation

### Desktop Navigation (1024px+)

```
+-------------------------------------------------------------------+
|                                                                   |
|   [Logo]          Menu  Over Wout  Groepen  Maandagavond  [CTA]   |
|                                                                   |
+-------------------------------------------------------------------+
```

**Container:** Full viewport width. Inner content constrained to `var(--container-wide)` with `var(--container-padding-x)` horizontal padding.

**Position:** Fixed top, `z-index: var(--header-z-index)`. Starts transparent over hero, transitions to solid `var(--header-bg-scrolled)` background with `var(--header-border-bottom)` bottom border after 80px scroll.

**Height:** `var(--header-height)`.

**Background states:**
- At top: `transparent`, text uses `var(--header-text)` (Kalk -- over dark heroes). Per-page override for light heroes: swap to `var(--header-text-scrolled)` (Eik). Home hero is base theme so nav text starts as Eik.
- Scrolled: `var(--header-bg-scrolled)` with `backdrop-filter: blur(12px)`. Text switches to `var(--header-text-scrolled)`. Transition: 300ms ease.

**Logo:**
- Left-aligned. Lora italic, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--letter-spacing-tight)`.
- Color inherits from nav text state.
- Typographic "Bij Wout" wordmark (no image logo in nav).

**Nav links:**
- Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-regular)`, `var(--letter-spacing-normal)`.
- Color: inherits nav text state.
- Hover: color shifts to `var(--header-link-hover)`, transition 200ms ease.
- Active page: `var(--color-koper)` with a 2px bottom line offset `var(--space-1)` below text.
- Gap between links: `var(--space-5)`.

**CTA button (Reserveren):**
- Uses `btn-primary` token set.
- Background: `var(--btn-primary-bg)` / Text: `var(--btn-primary-text)`.
- Hover: `var(--btn-primary-hover-bg)` / `var(--btn-primary-hover-text)`.
- Padding: `var(--space-2) var(--space-4)`.
- Font: Source Serif 4, `var(--btn-font-size)`, `var(--btn-font-weight)`, `var(--btn-letter-spacing)`.
- Border-radius: `var(--btn-radius)`.
- Min-height: `var(--btn-min-height)`.

**Scroll behavior:**
- On scroll down past 400px: nav slides up and hides (`transform: translateY(-100%)`, transition 300ms ease).
- On scroll up: nav slides back down.
- 5px dead zone to prevent jitter on small scrolls.

### Mobile Navigation (< 1024px)

**Header bar:**
- Same fixed position, height `var(--header-height)`.
- Logo left, hamburger icon right.
- Hamburger: three lines, `var(--color-text)`, 24px wide, 2px stroke, 6px gap between lines.

**Mobile overlay:**
- Full viewport overlay, `var(--mobile-overlay-bg)` background (brand theme).
- Slides in from right, 400ms ease-out.
- Hamburger morphs to X (top/bottom lines rotate 45deg, middle fades).

**Overlay content:**
```
+-----------------------------------+
|                             [X]   |
|                                   |
|            Home                   |
|            Menu                   |
|            Over Wout              |
|            Groepen                |
|            Maandagavond           |
|                                   |
|         [ Reserveren ]            |
|                                   |
|    Sint Jansplein 7               |
|    info@bijwout.nl                |
|    013 850 8300                   |
+-----------------------------------+
```

- Links: Lora, `var(--mobile-overlay-link-size)` / `var(--font-weight-regular)`, `var(--mobile-overlay-link)`.
- Stagger animation: each link fades in from right with 80ms delay between items (Framer Motion staggerChildren).
- Active link: `var(--mobile-overlay-link-hover)`.
- CTA button: `btn-primary` on brand theme, full width minus `var(--space-5)` padding each side.
- Contact info: Source Serif 4, `var(--font-size-body-sm)`, `var(--color-kalk-o65)`, at bottom of overlay.
- Gap between links: `var(--space-4)`.
- Gap before CTA: `var(--space-6)`.

---

## Global: Footer

**Theme:** brand (Eik background)

```
+-------------------------------------------------------------------+
|                                                                   |
|   Bij Wout                 Pagina's           Contact             |
|                                                                   |
|   Eerlijk eten,            Home               Sint Jansplein 7    |
|   dicht bij huis.          Menu               5066 AR             |
|                            Over Wout          Moergestel          |
|                            Groepen                                |
|                            Maandagavond       013 850 8300        |
|   [IG] [FB]                Reserveren         info@bijwout.nl     |
|                                                                   |
|-------------------------------------------------------------------+
|   (c) 2026 Bij Wout  .  Privacybeleid                            |
+-------------------------------------------------------------------+
```

**Container:** `var(--container-default)` with `var(--container-padding-x)`.

**Section padding:** `var(--section-space-lg)` top, `var(--section-space-sm)` bottom.

**Layout:** CSS Grid, 3 columns on desktop: `2fr 1fr 1fr`, gap `var(--space-6)`.

**Column 1 -- Brand:**
- "Bij Wout": Lora, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--footer-heading)`.
- Tagline: Source Serif 4 italic, `var(--font-size-body)`, `var(--footer-text)`.
- Margin top after tagline: `var(--space-5)`.
- Social icons: 20px, `var(--footer-text)`, hover `var(--footer-link-hover)`, gap `var(--space-3)`.

**Column 2 -- Pages:**
- Heading "Pagina's": Source Serif 4, `var(--font-size-body-sm)`, `var(--font-weight-semibold)`, `var(--footer-accent)`, `var(--letter-spacing-wide)`, text-transform uppercase.
- Links: Source Serif 4, `var(--font-size-body)`, `var(--font-weight-regular)`, `var(--footer-link)`.
- Link hover: `var(--footer-link-hover)`, no underline (color shift only).
- Gap between links: `var(--space-2)`.
- Heading margin-bottom: `var(--space-3)`.

**Column 3 -- Contact:**
- Same heading style as Column 2. Heading: "Contact".
- Address and phone: Source Serif 4, `var(--font-size-body)`, `var(--footer-text)`.
- Email link: hover `var(--footer-link-hover)`.

**Colophon bar:**
- Border top: `var(--border-width-thin)` solid `var(--footer-divider)`.
- Padding top: `var(--space-4)`.
- Margin top: `var(--section-space-sm)`.
- Text: Source Serif 4, `var(--font-size-caption)`, `var(--footer-copyright)`.
- Layout: flex, space-between (left: copyright, right: privacy link).

**Responsive (tablet < 1024px):**
- Grid becomes `1fr 1fr`, Column 1 spans full width on first row, Columns 2-3 side by side on second row.

**Responsive (mobile < 768px):**
- Single column stack. All content center-aligned.
- Social icons centered.
- Gap between columns: `var(--space-6)`.

**Animation:** ScrollReveal on footer, opacity 0 to 1 + translateY 20px to 0, 600ms ease-out, trigger at 20% viewport.

---

## Page: Home

**URL:** `/`
**Meta:** "Bij Wout -- Eerlijk eten in Moergestel"
**Overall rhythm:** Alternating section spacing -- hero (viewport height) > tight strip > medium card section > warm callout > tall about teaser > compact proof > dense CTA.

### Section 1: Hero

**Theme:** base (Kalk background)

```
+------------------------------------------------------------------------+
|                                                                        |
|     Eerlijk eten,                       +---------------------------+  |
|     dicht bij huis.                     |                           |  |
|                                         |                           |  |
|     Buurtbrasserie in                   |   [Hero Image:            |  |
|     het hart van                        |    interior/dish]         |--+-- bleeds right
|     Moergestel                          |                           |  |
|                                         |                           |  |
|     [ Bekijk de kaart ]                 +---------------------------+  |
|                                                                        |
+------------------------------------------------------------------------+
```

**Layout:** CSS Grid, `1fr 1.2fr`, gap `var(--space-6)`. Container `var(--container-wide)` with `var(--container-padding-x)` only on left side. Right column image bleeds to viewport edge (no right padding).

**Dimensions:** `min-height: 85vh`. Content vertically centered within grid cell.

**Background:** `var(--color-bg)` (Kalk).

**Left column -- text content:**
- Vertical padding: `var(--section-space-lg)` top (to clear fixed nav + breathing room), `var(--section-space-md)` bottom.
- Headline "Eerlijk eten, dicht bij huis.": Lora, `var(--font-size-display)` / `var(--font-weight-bold)` / `var(--line-height-tight)` / `var(--letter-spacing-tight)`, `var(--color-heading)`.
- Line break after comma is intentional -- "Eerlijk eten," on line 1, "dicht bij huis." on line 2.
- Subhead "Buurtbrasserie in het hart van Moergestel": Source Serif 4, `var(--font-size-body-lg)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text-secondary)`.
- Margin between headline and subhead: `var(--space-4)`.
- CTA "Bekijk de kaart": `btn-primary` variant. Margin top `var(--space-5)`.

**Right column -- image:**
- Aspect ratio: natural (fills grid cell height). `object-fit: cover`.
- Bleeds right: the image container extends from the grid column start to the right viewport edge. Achieved with `margin-right: calc(-1 * var(--container-padding-x))` on the grid, or by allowing the image to break out of the container on the right side only.
- Border-radius: `var(--radius-md)` on left corners only (`border-radius: var(--radius-md) 0 0 var(--radius-md)`).
- A thin `var(--color-koper-o20)` border on left/top/bottom edges, `var(--border-width-thin)`.

**WOW moment:** The right-bleeding image creates an asymmetric pull that draws the eye across the page. The image corners round only on the left, creating a "window into the space" effect.

**Animation (Framer Motion):**
- Page load sequence: headline fades up (opacity 0 > 1, translateY 30px > 0, 700ms, ease-out), delay 100ms.
- Subhead: same animation, delay 300ms.
- CTA button: same animation, delay 500ms.
- Image: clip-path reveal from left to right (`inset(0 100% 0 0)` > `inset(0 0 0 0)`), 900ms, ease-in-out, delay 200ms.

**Responsive (tablet 768-1023px):**
- Grid becomes `1fr 1fr`. Image still bleeds right. Font sizes scale down naturally via fluid clamp.

**Responsive (mobile < 768px):**
- Single column stack. Image on top (full width, no bleed, rounded corners `var(--radius-md)` all sides).
- Headline below image. Min-height reduces to `auto`.
- Text center-aligned on mobile. CTA full width.
- Section padding: `var(--section-space-md)` vertical.

---

### Section 2: Intro Strip

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|    -------  Seizoensproducten van lokale boeren, een kaart        |
|             die elke week verandert, en een glas dat altijd       |
|             gevuld is.  -------                                   |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Single column, centered text. Container `var(--container-narrow)`.

**Padding:** `var(--section-space-sm)` vertical.

**Text:** Source Serif 4 italic, `var(--font-size-body-lg)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text-secondary)`, text-align center, `max-width: 38em`.

**Decorative lines:** Horizontal rules flanking the text block. 60px wide, `var(--border-width-thin)`, `var(--color-koper-o40)`. Positioned with flex layout (line -- text -- line), gap `var(--space-4)`. On mobile, lines sit above and below the text instead of flanking.

**Animation:** ScrollReveal -- fade up, 500ms, trigger at 30% viewport.

**Responsive (mobile):**
- `var(--font-size-body)` font size. Lines above/below. Padding `var(--section-space-sm)`.

---

### Section 3: Menu Preview Cards

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|     Proef de kaart                                                |
|                                                                   |
|   +--------------+  +--------------+  +--------------+            |
|   | ############ |  | ############ |  | ############ |            |
|   | ## photo ### |  | ## photo ### |  | ## photo ### |            |
|   | ############ |  | ############ |  | ############ |            |
|   |              |  |              |  |              |            |
|   |  Voorgerecht |  |  Hoofdgerecht|  |  Dessert     |            |
|   |  Dish name   |  |  Dish name   |  |  Dish name   |            |
|   +--------------+  +--------------+  +--------------+            |
|                                                                   |
|                      [ Volledige kaart ]                          |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`.

**Padding:** `var(--section-space-md)` vertical.

**Section heading "Proef de kaart":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)` / `var(--line-height-snug)`, `var(--color-heading)`.
- Margin bottom: `var(--space-6)`.
- Left-aligned (not centered -- breaks the default pattern).

**Card grid:** CSS Grid, `repeat(3, 1fr)`, gap `var(--space-5)`.

**Individual card (Polaroid style):**
- Background: `var(--color-kalk)`.
- Border: `var(--border-width-thin)` solid `var(--color-eik-o10)`.
- Box shadow: `var(--shadow-sm)`.
- Border-radius: `var(--radius-sm)` -- barely rounded, like a printed photograph.
- Padding: `var(--space-3)` on all sides, `var(--space-4)` on bottom.
- Image: aspect ratio 4:5 (portrait, like a Polaroid). `object-fit: cover`. No border-radius on image (sharp inside the card frame).
- Image margin-bottom: `var(--space-3)`.
- Card tilts: first card `rotate(-1.5deg)`, second card `rotate(0.5deg)`, third card `rotate(-0.8deg)`. Subtle, like photos scattered on a table.

**Card text:**
- Category label (Voorgerecht/Hoofdgerecht/Dessert): Caveat, `var(--font-size-accent)`, `var(--color-accent)`.
- Dish name: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)`, `var(--color-heading)`.
- Short description: Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-regular)`, `var(--color-text)`. One line, `max-width: 24ch`.
- Gap between label and name: `var(--space-1)`. Gap between name and description: `var(--space-1)`.

**CTA "Volledige kaart":**
- `btn-secondary` variant, centered below cards.
- Margin top: `var(--space-6)`.

**WOW moment:** The Polaroid tilt angles. Each card rotates slightly differently, creating an organic "photos-on-the-bar" effect. On hover, card straightens to 0deg rotation (200ms ease).

**Animation (Framer Motion):**
- StaggerReveal: cards stagger in with 150ms delay between each. Each card fades up (opacity 0 > 1, translateY 24px > 0, 600ms ease-out).
- Cards start at their tilted rotation -- the rotation is part of the default state, not the animation.

**Responsive (tablet 768-1023px):**
- Three columns maintained but tighter gap `var(--space-4)`.

**Responsive (mobile < 768px):**
- Horizontal scroll carousel. Cards at 280px width, gap `var(--space-4)`. `overflow-x: auto`, `scroll-snap-type: x mandatory`, `scroll-snap-align: center` on each card.
- No grid -- flex row with `flex-shrink: 0`.
- Scroll padding: `var(--container-padding-x)`.
- Cards keep their individual tilt angles.

---

### Section 4: Monday Callout

**Theme:** warm (Tarwe background)

```
+-------------------------------------------------------------------+
| ###########  TARWE BACKGROUND  ################################## |
|                                                                   |
|        * Maandagavond bij Wout                                    |
|                                                                   |
|        Drie verrassingsgangen van                                 |
|        chef Wout. Elke week anders,                               |
|        altijd eerlijk.                                            |
|                                                                   |
|        EUR 23,50 p.p.           [ Meer over maandagavond ]        |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`. Flex row, items vertically centered. Text content takes `2fr`, CTA area takes `1fr` (right-aligned).

**Padding:** `var(--section-space-sm)` vertical. Compact callout strip, not a full section.

**Background:** `var(--color-tarwe)`. Hard edge transition from Kalk section above.

**Decorative element:** A small asterisk mark before the heading. Caveat, `var(--font-size-body-lg)`, `var(--color-accent)`.

**Heading "Maandagavond bij Wout":**
- Lora, `var(--font-size-h3)` / `var(--font-weight-bold)` / `var(--line-height-snug)`, `var(--color-heading)`.

**Body text:**
- Source Serif 4, `var(--font-size-body)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text)`.
- Margin top: `var(--space-3)`.
- Max-width: `32em`.

**Price "EUR 23,50 p.p.":**
- Lora, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--color-koper-dark)`.
- Margin top: `var(--space-3)`.

**CTA "Meer over maandagavond":**
- `btn-secondary` variant, right-aligned.
- Arrow icon animates right 4px on hover, 200ms ease.

**Animation:** ScrollReveal -- entire strip fades in, 500ms, trigger 25%.

**Responsive (mobile < 768px):**
- Stack vertically. Text block full width, CTA below, full width.
- Center text alignment.

---

### Section 5: About Teaser

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|                    +---------------------+                        |
|   +----------------|                     |                        |
|   |                |  [Portrait of       |                        |
|   |   Geen menu    |   Wout, warm        |                        |
|   |   zonder       |   candid shot]      |                        |
|   |   verhaal      |                     |                        |
|   |                +---------------------+                        |
|   |   Body text                                                   |
|   |   about Wout's                                                |
|   |   story...                                                    |
|   |                                                               |
|   |   [ Lees het verhaal ]                                        |
|   +---------------------------------------------------------------+
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`. CSS Grid, `1.3fr 1fr`, gap `var(--space-6)`.

**Padding:** `var(--section-space-md)` vertical.

**WOW moment -- overlapping portrait:** The portrait image in the right column overlaps upward into the Monday Callout section above by `var(--space-8)` using negative margin-top. This creates a visual bridge between sections and breaks the strict horizontal banding.

**Left column -- text:**
- Heading "Geen menu zonder verhaal": Lora, `var(--font-size-h2)` / `var(--font-weight-bold)` / `var(--line-height-snug)`, `var(--color-heading)`.
- Body: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text)`. Max-width: `34em`.
- Margin between heading and body: `var(--space-4)`.
- CTA "Lees het verhaal": `btn-tertiary` (text link style). Margin top `var(--space-4)`.

**Right column -- portrait:**
- Image: aspect ratio 3:4 (portrait). `object-fit: cover`.
- Border-radius: `var(--radius-md)`.
- Negative margin-top: `calc(-1 * var(--space-8))` to overlap into section above.
- Caveat annotation below image: "Wout, oprichter", `var(--font-size-caption)`, `var(--color-text-secondary)`, italic, margin-top `var(--space-2)`.

**Animation (Framer Motion):**
- Text column: ScrollReveal, fade up, 600ms, trigger 30%.
- Image: ScrollReveal, fade up + slight scale (0.95 > 1.0), 700ms, trigger 25%, delay 200ms.

**Responsive (mobile < 768px):**
- Single column. Image on top (full width, no negative margin overlap on mobile). Text below.
- Heading center-aligned on mobile.

---

### Section 6: Social Proof

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|     "Quote from a guest about the                                 |
|      experience at Bij Wout..."                                   |
|                                                                   |
|      -- Gast naam, Google Reviews        *****                    |
|                                                                   |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
|                                                                   |
|     "Another quote..."                                            |
|                                                                   |
|      -- Gast naam, Google Reviews        *****                    |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-narrow)`. Single column, left-aligned.

**Padding:** `var(--section-space-sm)` vertical.

**Quote text:**
- Lora italic, `var(--font-size-body-lg)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-heading)`.
- Opening quotation mark: oversized decorative element. Lora, `var(--font-size-display)`, `var(--color-koper-o30)`, positioned as a pseudo-element offset `var(--space-2)` left and `var(--space-2)` above the quote text. `line-height: 0.5` to prevent it from taking vertical space.

**Attribution:**
- Source Serif 4, `var(--font-size-body-sm)`, `var(--color-text-secondary)`.
- Margin top: `var(--space-2)`.
- Stars: `var(--star-active)`, inline after attribution, gap `var(--space-2)`.

**Divider between quotes:**
- Dashed line: `var(--border-width-thin)` dashed `var(--color-eik-o10)`.
- Margin: `var(--space-5)` vertical.

**If more than 2 quotes:** Show 2 maximum on desktop. On mobile, show 1 with a "Meer reviews" text link below.

**Animation:** ScrollReveal on each quote block, stagger 200ms.

**Responsive (mobile):** Same layout, just narrower. Quote font drops to `var(--font-size-body)`.

---

### Section 7: CTA Strip

**Theme:** dark (Woud background)

```
+-------------------------------------------------------------------+
| ###########  WOUD BACKGROUND  ################################### |
|                                                                   |
|       Schuif aan bij Wout.                                        |
|                                                                   |
|       [ Reserveer een tafel ]                                     |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-narrow)`, centered text.

**Padding:** `var(--section-space-md)` vertical.

**Background:** `var(--color-woud)`.

**Heading "Schuif aan bij Wout.":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)` / `var(--line-height-snug)`, `var(--color-kalk)`.
- Center-aligned (exception to left-aligned default -- CTA strips earn center alignment).

**CTA "Reserveer een tafel":**
- `btn-primary` on dark theme: bg `var(--btn-primary-bg)`, text `var(--btn-primary-text)`.
- Center-aligned. Margin top `var(--space-4)`.
- Padding: `var(--space-3) var(--space-6)` (wider for emphasis).

**Animation:** ScrollReveal, 500ms, fade up.

**Responsive:** No layout changes. Font sizes scale via fluid clamp.

---

## Page: Menu

**URL:** `/menu`
**Meta:** "Menukaart -- Bij Wout"
**Design direction:** Dark theme (Woud) for the food sections to create a "chalkboard" atmosphere. Sticky navigation for quick jumping between sections.

### Section 1: Menu Hero Banner

**Theme:** brand (Eik background)

```
+-------------------------------------------------------------------+
| ###########  EIK BACKGROUND  #################################### |
|                                                                   |
|       De kaart                                                    |
|                                                                   |
|       Seizoensgebonden, eerlijk, lokaal.                           |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`, left-aligned text.

**Padding:** `var(--section-space-lg)` top (clears fixed nav), `var(--section-space-sm)` bottom. Compact banner, not a full hero.

**Heading "De kaart":**
- Lora, `var(--font-size-h1)` / `var(--font-weight-bold)` / `var(--line-height-tight)`, `var(--color-kalk)`.

**Subline:**
- Source Serif 4 italic, `var(--font-size-body-lg)` / `var(--font-weight-regular)`, `var(--color-kalk-o65)`.
- Margin top: `var(--space-3)`.

**Animation:** Headline fades in, 500ms. Subline follows 200ms later.

---

### Section 2: Sticky Jump Links

**Theme:** dark (Woud background)

```
+-------------------------------------------------------------------+
|   Lunch    |    Diner    |    Kinderen    |    Wisselbieren        |
+-------------------------------------------------------------------+
```

**Position:** `position: sticky`, `top: var(--header-height)`, `z-index: 40` (below nav).

**Background:** `var(--color-woud)`. Bottom border: `var(--border-width-thin)` solid `var(--color-kalk-o15)`.

**Layout:** Flex row, `justify-content: center`, gap `var(--space-5)`.

**Padding:** `var(--space-3)` vertical.

**Link style:**
- Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-semibold)`, `var(--color-kalk-o65)`.
- `var(--letter-spacing-wide)`.
- Active (in-view section): `var(--color-koper)` with bottom line `var(--border-width-thick)` solid `var(--color-koper)`, padding-bottom `var(--space-1)`.
- Hover: `var(--color-kalk)`.
- Transition: color 200ms ease.

**Separator:** Vertical bar between items, `var(--color-kalk-o15)`, via `border-right` on each link except last.

**Responsive (mobile):**
- Horizontal scroll if links overflow. `overflow-x: auto`, `white-space: nowrap`.
- Padding: `var(--space-2) var(--container-padding-x)`.

---

### Sections 3-6: Menu Content (Lunch / Diner / Kinderen / Wisselbieren)

**Theme:** dark (Woud background) for all menu sections.

Each menu section follows the same template:

```
+-------------------------------------------------------------------+
| ###########  WOUD BACKGROUND  ################################### |
|                                                                   |
|     Lunch                                                         |
|     --------                                                      |
|                                                                   |
|     Soep van de dag .......................... EUR 8,50            |
|     Seizoenssoep met brood                                        |
|     (V) (GF-optie)                                                |
|                                                                   |
|     Broodje pulled pork ..................... EUR 14,50            |
|     Met coleslaw en friet                                         |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-narrow)`.

**Padding:** `var(--section-space-md)` top, `var(--section-space-sm)` bottom. First section (Lunch) has `var(--section-space-sm)` top.

**Section heading:**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)` / `var(--line-height-snug)`, `var(--menu-chalk-name)`.
- Underline: `var(--copper-rule-width)` wide, `var(--copper-rule-height)` tall, `var(--copper-rule-color)`. Margin-top `var(--space-2)`, margin-bottom `var(--space-6)`.

**Menu item row:**
- Flex row: dish name + dot leader + price.
- Dish name: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)`, `var(--menu-chalk-name)`.
- Price: `var(--menu-chalk-price-font)`, `var(--font-size-body)`, `var(--menu-chalk-price-color)`. Right-aligned, `white-space: nowrap`.
- Dot leader: flex-grow element between name and price. `border-bottom: var(--border-width-thin) var(--menu-chalk-separator) var(--menu-chalk-separator-color)`.
- Description: Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--menu-chalk-desc)`.
- Dietary tags (V, GF): `var(--font-size-caption)`, `var(--color-hop)`.
- Margin between items: `var(--space-4)`.

**Subcategory headings (Soepen, Broodjes, Voorgerechten, etc.):**
- Lora, `var(--font-size-h3)` / `var(--font-weight-semibold)`, `var(--color-kalk-o80)`. Margin-top `var(--space-5)`, margin-bottom `var(--space-3)`.

**Wisselbieren -- different layout (beer cards):**

```
+----------------------------------------------+
|                                              |
|   Wisselbieren                               |
|   ----------                                 |
|                                              |
|   +--------------+   +--------------+        |
|   |  Brouwerij X |   |  Brouwerij Y |        |
|   |  Bier naam   |   |  Bier naam   |        |
|   |  Stijl . ABV |   |  Stijl . ABV |        |
|   +--------------+   +--------------+        |
|                                              |
+----------------------------------------------+
```

**Beer card:**
- Background: `var(--color-kalk-o8)`.
- Border: `var(--border-width-thin)` solid `var(--color-kalk-o15)`.
- Border-radius: `var(--radius-sm)`.
- Padding: `var(--space-3)`.
- Grid: `repeat(2, 1fr)`, gap `var(--space-3)`.
- Brewery: Source Serif 4, `var(--font-size-caption)`, `var(--font-weight-semibold)`, `var(--color-koper)`, `var(--letter-spacing-wide)`, uppercase.
- Beer name: Source Serif 4, `var(--font-size-body)`, `var(--font-weight-semibold)`, `var(--color-kalk)`.
- Style + ABV: Source Serif 4, `var(--font-size-caption)`, `var(--color-kalk-o65)`. Separated by mid-dot.

**Animation (all menu sections):** ScrollReveal on each menu item, stagger 80ms, fade up 12px, 400ms.

**Responsive (mobile):**
- Menu items: below 400px, switch to stacked layout (name + description above, price below right-aligned).
- Beer cards: single column.

---

### Section 7: Dietary Legend

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|   (V) Vegetarisch    (VG) Veganistisch    (GF) Glutenvrij        |
|                                                                   |
|   Allergenen of dieetwensen? Laat het ons weten bij reservering.  |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-narrow)`, center-aligned.

**Padding:** `var(--section-space-sm)` vertical.

**Legend items:** Inline flex, gap `var(--space-5)`.
- Tag: Caveat, `var(--font-size-body-sm)`, `var(--color-hop)`.
- Label: Source Serif 4, `var(--font-size-body-sm)`, `var(--color-text-secondary)`.

**Note:** Source Serif 4 italic, `var(--font-size-body-sm)`, `var(--color-text-secondary)`. Margin-top `var(--space-3)`.

---

## Page: Over Wout

**URL:** `/over-wout`
**Meta:** "Over Wout -- Het verhaal achter Bij Wout"
**Design direction:** Storytelling page. Left-aligned editorial layout. Warm, personal feel.

### Section 1: Reversed Hero

**Theme:** base (Kalk background)

```
+------------------------------------------------------------------------+
|                                                                        |
|--+-- bleeds left  +---------------------+                              |
|                   |                     |     Van de fabriek            |
|                   |   [Interior shot]   |     naar het fornuis          |
|                   |                     |                              |
|                   |                     |     Subtitle text            |
|                   +---------------------+                              |
|                                                                        |
+------------------------------------------------------------------------+
```

**Layout:** CSS Grid, `1.2fr 1fr`, gap `var(--space-6)`. Container `var(--container-wide)` with `var(--container-padding-x)` only on right side. Left column bleeds to viewport edge.

**Padding:** `var(--section-space-lg)` top (clears nav), `var(--section-space-md)` bottom.

**Left column -- image:**
- Bleeds left to viewport edge. `margin-left: calc(-1 * var(--container-padding-x))`.
- Border-radius: `0 var(--radius-md) var(--radius-md) 0` (rounded on right side only).
- Aspect ratio: 16:10. `object-fit: cover`.

**Right column -- text:**
- Vertically centered in grid cell.
- Heading "Van de fabriek naar het fornuis": Lora, `var(--font-size-h1)` / `var(--font-weight-bold)` / `var(--line-height-tight)`, `var(--color-heading)`.
- Subtitle: Source Serif 4, `var(--font-size-body-lg)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text-secondary)`.
- Margin between heading and subtitle: `var(--space-4)`.

**WOW moment:** Mirror composition of Home hero bleed -- image bleeds LEFT instead of right.

**Animation (Framer Motion):**
- Image: clip-path reveal from right to left (opposite direction of Home hero).
- Text: fade up, 600ms, delay 300ms.

**Responsive (mobile):**
- Single column. Image full width (no bleed), `var(--radius-md)` all corners. Text below.

---

### Section 2: Origin Story

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-narrow)`. Single column, left-aligned.

**Padding:** `var(--section-space-md)` vertical.

**Body paragraphs:**
- Source Serif 4, `var(--font-size-body)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-text)`.
- Paragraph spacing: `var(--space-4)`.
- Max-width: `38em`.

**Pull quote block:**
- Indented with `margin-left: var(--space-6)` on desktop.
- Left border: `var(--border-width-accent)` solid `var(--color-koper)`.
- Padding-left: `var(--space-4)`.
- Quote text: Lora italic, `var(--font-size-body-lg)` / `var(--font-weight-regular)` / `var(--line-height-relaxed)`, `var(--color-heading)`.
- Margin: `var(--space-6)` top and bottom.
- Attribution: Caveat, `var(--font-size-body-sm)`, `var(--color-accent)`.

**Animation:** ScrollReveal on paragraphs, pull quote gets its own reveal with slight delay.

**Responsive (mobile):**
- Pull quote loses left margin indent. Full width with left border.

---

### Section 3: Philosophy Values

**Theme:** dark (Woud background)

```
+-------------------------------------------------------------------+
| ###########  WOUD BACKGROUND  ################################### |
|                                                                   |
|     Waar wij voor staan                                           |
|                                                                   |
|     +-----------------+  +-----------------+                      |
|     |  01              |  |  02              |                      |
|     |  Seizoensgebonden|  |  Lokaal          |                      |
|     |  Description     |  |  Description     |                      |
|     +-----------------+  +-----------------+                      |
|                                                                   |
|     +-----------------+  +-----------------+                      |
|     |  03              |  |  04              |                      |
|     |  Ambachtelijk    |  |  Duurzaam        |                      |
|     |  Description     |  |  Description     |                      |
|     +-----------------+  +-----------------+                      |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`. Heading + 2x2 grid.

**Padding:** `var(--section-space-md)` vertical.

**Section heading "Waar wij voor staan":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)`, `var(--color-kalk)`.
- Margin-bottom: `var(--space-6)`.

**Value cards grid:** CSS Grid `repeat(2, 1fr)`, gap `var(--space-5)`.

**Value card:**
- Background: `var(--color-kalk-o8)`.
- Border: `var(--border-width-thin)` solid `var(--color-kalk-o15)`.
- Border-radius: `var(--radius-sm)`.
- Padding: `var(--space-5)`.
- Number: Caveat, `var(--font-size-h3)`, `var(--color-koper-o50)`. Margin-bottom `var(--space-2)`.
- Value title: Lora, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--color-kalk)`.
- Description: Source Serif 4, `var(--font-size-body-sm)` / `var(--line-height-relaxed)`, `var(--color-kalk-o80)`. Margin-top `var(--space-2)`. Max-width: `28ch`.

**Animation:** StaggerReveal on cards, 150ms stagger, fade up 16px.

**Responsive (mobile):** Single column stack.

---

### Section 4: Team

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-default)`. CSS Grid `repeat(3, 1fr)`, gap `var(--space-5)`.

**Padding:** `var(--section-space-md)` vertical.

**Section heading "Het team":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-6)`.

**Team member card:**
- No background, no border (minimal -- photos carry it).
- Photo: aspect ratio 1:1 (square). `object-fit: cover`. Border-radius: `var(--radius-md)`.
- Name: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)`, `var(--color-heading)`. Margin-top `var(--space-3)`.
- Role: Caveat, `var(--font-size-body-sm)`, `var(--color-accent)`.
- Margin-top role: `var(--space-1)`.

**Hover effect:** Photo scales to 1.03 with `overflow: hidden` on the container, 300ms ease.

**Animation:** StaggerReveal, 120ms stagger.

**Responsive (mobile):** `repeat(2, 1fr)`, gap `var(--space-4)`.

---

### Section 5: Sourcing Strip

**Theme:** warm (Tarwe background)

**Layout:** Container `var(--container-default)`.

**Padding:** `var(--section-space-sm)` vertical.

**Heading "Van het land":**
- Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-4)`.

**Description:**
- Source Serif 4, `var(--font-size-body)` / `var(--line-height-relaxed)`, `var(--color-text)`. Max-width: `36em`.
- Margin-bottom: `var(--space-4)`.

**Supplier list:**
- Inline, separated by mid-dot in `var(--color-koper-o40)`.
- Supplier name: Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-semibold)`, `var(--color-eik)`.
- Gap: `var(--space-3)` between items.

**Animation:** ScrollReveal, fade up.

---

## Page: Groepen

**URL:** `/groepen`
**Meta:** "Groepen & Feesten -- Bij Wout"
**Design direction:** Information-rich page for event planning. Asymmetric card layout for options, warm pricing strip, practical inquiry form.

### Section 1: Image Hero

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-default)`.

**Padding:** `var(--section-space-lg)` top (clears nav), `var(--section-space-sm)` bottom.

**Image:**
- Full container width. Aspect ratio 21:9 (cinematic wide). `object-fit: cover`.
- Border-radius: `var(--radius-md)`.
- Margin-bottom: `var(--space-6)`.

**Heading "Samen tafelen":**
- Lora, `var(--font-size-h1)` / `var(--font-weight-bold)` / `var(--line-height-tight)`, `var(--color-heading)`.

**Body:**
- Source Serif 4, `var(--font-size-body-lg)` / `var(--line-height-relaxed)`, `var(--color-text-secondary)`.
- Margin-top: `var(--space-3)`. Max-width: `34em`.

**Animation:** Image fades in 600ms. Text fades up 500ms, delay 200ms.

---

### Section 2: Option Cards (Asymmetric)

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-default)`. CSS Grid `repeat(2, 1fr)`, gap `var(--space-5)`.

**Padding:** `var(--section-space-md)` vertical.

**WOW moment -- asymmetric card heights:** Cards in a row have different padding-top values, creating a staggered organic feel. First row: left card has `var(--space-5)` padding-top, right card has `var(--space-7)` padding-top. Second row: reversed.

**Option card:**
- Background: `var(--card-group-bg)`.
- Border: `var(--border-width-thin)` solid `var(--card-group-border)`.
- Border-radius: `var(--card-group-radius)`.
- Padding: `var(--card-group-padding)`.
- Box-shadow: `var(--shadow-sm)`.

**Card content:**
- Title: Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`. Margin-bottom `var(--space-2)`.
- Group size: Source Serif 4, `var(--font-size-body-sm)`, `var(--color-accent)`, `var(--font-weight-semibold)`. Margin-bottom `var(--space-3)`.
- Description: Source Serif 4, `var(--font-size-body)` / `var(--line-height-relaxed)`, `var(--color-text)`. Max-width: `30ch`.
- CTA: `btn-tertiary` (text link), margin-top `var(--space-4)`. Arrow animates right 4px on hover.

**Hover:** Card lifts: `transform: translateY(-2px)`, shadow to `var(--shadow-md)`, border to `var(--card-group-hover-border)`, transition 250ms ease.

**Animation:** StaggerReveal, 150ms stagger.

**Responsive (mobile):** Single column stack. Uniform padding (no stagger effect).

---

### Section 3: Pricing

**Theme:** warm (Tarwe background)

**Layout:** Container `var(--container-narrow)`.

**Padding:** `var(--section-space-sm)` vertical.

**Heading "Richtprijzen":**
- Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-5)`.

**Price line:** Same dot-leader pattern as menu items.
- Label: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-regular)`, `var(--color-text)`.
- Price: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)`, `var(--color-koper-dark)`.
- Dot leader: `border-bottom: var(--border-width-thin) dotted var(--color-eik-o15)`.
- Line spacing: `var(--space-3)`.

**Footnote:** Source Serif 4 italic, `var(--font-size-body-sm)`, `var(--color-text-secondary)`. Margin-top `var(--space-4)`.

**Animation:** ScrollReveal, fade up.

---

### Section 4: Inquiry Form + Contact Aside

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-default)`. CSS Grid `1.5fr 1fr`, gap `var(--space-6)`.

**Padding:** `var(--section-space-md)` vertical.

**Left column -- form:**
- Heading "Vertel ons over jullie plannen": Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`. Margin-bottom `var(--space-5)`.

**Form fields (Zone 3b input tokens):**
- Background: `var(--input-bg)`.
- Border: `var(--border-width-thin)` solid `var(--input-border)`. Focus: `var(--input-focus-border)`.
- Border-radius: `var(--input-radius)`.
- Padding: `var(--input-padding)`.
- Font: Source Serif 4, `var(--font-size-body)`, `var(--input-text)`.
- Label: Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-semibold)`, `var(--color-heading)`. Margin-bottom `var(--space-1)`.
- Field gap: `var(--space-4)`.
- Datum + Personen: inline flex, `1fr 1fr`, gap `var(--space-3)`.
- Textarea: min-height 120px, resize vertical.
- Submit: `btn-primary` variant, full width. Margin-top `var(--space-4)`.

**Validation states:**
- Error: `var(--input-error-border)` border + error text `var(--color-error)`, `var(--font-size-caption)`.
- Success: `var(--color-success)` border.

**Right column -- contact aside:**
- Background: `var(--color-tarwe)`.
- Border-radius: `var(--radius-sm)`.
- Padding: `var(--space-5)`.
- `align-self: start`.

**Aside content:**
- "Liever bellen?": Lora, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--color-heading)`. Margin-bottom `var(--space-3)`.
- Phone: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)`, `var(--color-koper-dark)`. Clickable `tel:` link.
- Email: Source Serif 4, `var(--font-size-body)`, `var(--color-koper-dark)`. Clickable `mailto:` link.
- Divider: `var(--copper-rule-width)` / 2 wide line, `var(--border-width-thin)` solid `var(--color-eik-o15)`. Margin `var(--space-4)` vertical.
- Response time: Source Serif 4 italic, `var(--font-size-body-sm)`, `var(--color-text-secondary)`.

**Animation:** ScrollReveal on form + aside, fade up.

**Responsive (mobile):** Single column. Aside moves below form. Full width.

---

## Page: Maandagavond

**URL:** `/maandagavond`
**Meta:** "Maandagavond bij Wout -- Drie verrassingsgangen voor EUR 23,50"
**Design direction:** Warm atmosphere, the price badge is the hero, the how-it-works flow makes it feel effortless.

### Section 1: Hero with Price Badge

**Theme:** warm (Tarwe background)

```
+-------------------------------------------------------------------+
| ###########  TARWE BACKGROUND  ################################## |
|                                                                   |
|     Maandagavond                                +----------+      |
|     bij Wout                                    |          |      |
|                                                 |  EUR     |      |
|     Drie verrassingsgangen van                  |  23,50   |      |
|     chef Wout. Elke week anders,                |  p.p.    |      |
|     altijd eerlijk.                             |          |      |
|                                                 +----------+      |
|     [ Reserveer je plek ]                                         |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`. CSS Grid `1.5fr 1fr`, gap `var(--space-6)`.

**Padding:** `var(--section-space-lg)` top, `var(--section-space-md)` bottom.

**Left column:**
- Heading "Maandagavond bij Wout": Lora, `var(--font-size-h1)` / `var(--font-weight-bold)` / `var(--line-height-tight)`, `var(--color-heading)`.
- Subtext: Source Serif 4, `var(--font-size-body-lg)` / `var(--line-height-relaxed)`, `var(--color-text)`. Margin-top `var(--space-4)`.
- CTA "Reserveer je plek": `btn-primary` variant. Margin-top `var(--space-5)`.

**Right column -- price badge (WOW moment):**
- Circular badge, 160px diameter on desktop.
- Background: `var(--color-koper)`.
- Border: `var(--border-width-accent)` solid `var(--color-eik)`.
- Border-radius: `var(--radius-full)`.
- Display: flex column, centered.
- "EUR": Source Serif 4, `var(--font-size-caption)`, `var(--color-kalk)`, `var(--letter-spacing-wide)`, uppercase.
- "23,50": Lora, `var(--font-size-h1)` / `var(--font-weight-bold)`, `var(--color-kalk)`.
- "p.p.": Caveat, `var(--font-size-body-sm)`, `var(--color-kalk-o80)`.
- Badge rotated `rotate(-3deg)` for organic feel.
- Box shadow: `var(--shadow-lg)`.
- **Contrast:** Kalk on Koper = 3.17:1 (PASS AA-large). The badge text is display-sized, qualifying as large text.

**Animation (Framer Motion):**
- Text column: fade up sequence (heading 0ms, body 200ms, CTA 400ms), 600ms each.
- Price badge: pops in with spring physics (`scale: 0.6 > 1.0`, `rotate: -8deg > -3deg`), stiffness 120, damping 18. Delay 400ms.

**Responsive (mobile):**
- Single column. Price badge moves above heading. Centered. Size reduces to 120px.
- Text below, center-aligned.

---

### Section 2: Current Menu Display

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-narrow)`.

**Padding:** `var(--section-space-md)` vertical.

**Section heading "Deze week op tafel":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Copper rule underline: margin-top `var(--space-2)`, margin-bottom `var(--space-6)`.

**Course entries:**
- Course label (Voorgerecht, etc.): Caveat, `var(--font-size-accent)`, `var(--color-accent)`. Margin-bottom `var(--space-1)`.
- Dish: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-semibold)` / `var(--line-height-relaxed)`, `var(--color-heading)`.
- Description: Source Serif 4, `var(--font-size-body-sm)`, `var(--color-text)`. Margin-top `var(--space-1)`.
- Divider between courses: dashed line, `var(--border-width-thin)` dashed `var(--color-eik-o15)`. Margin `var(--space-4)` vertical.

**Footnote:** Source Serif 4 italic, `var(--font-size-body-sm)`, `var(--color-text-secondary)`. Margin-top `var(--space-4)`.

**Animation:** StaggerReveal on course blocks, 200ms stagger.

---

### Section 3: How It Works

**Theme:** base (Kalk background)

```
+-------------------------------------------------------------------+
|                                                                   |
|     Zo werkt het                                                  |
|                                                                   |
|     1                    2                    3                   |
|     Reserveer            Schuif aan           Laat je              |
|                                               verrassen           |
|     Boek via de          Elke maandag         Chef Wout kookt     |
|     website of bel.      vanaf 18:00.         drie gangen.        |
|                                                                   |
+-------------------------------------------------------------------+
```

**Layout:** Container `var(--container-default)`. CSS Grid `repeat(3, 1fr)`, gap `var(--space-5)`.

**Padding:** `var(--section-space-sm)` vertical.

**Section heading "Zo werkt het":**
- Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-6)`.

**Step item:**
- Number: Lora, `var(--font-size-h2)`, `var(--color-koper-o30)`. Large, decorative. Margin-bottom `var(--space-2)`.
- Step title: Lora, `var(--font-size-body-lg)` / `var(--font-weight-bold)`, `var(--color-heading)`. Margin-bottom `var(--space-2)`.
- Step description: Source Serif 4, `var(--font-size-body-sm)` / `var(--line-height-relaxed)`, `var(--color-text)`. Max-width: `22ch`.

**Connecting line:** Thin horizontal line at number level, `var(--border-width-thin)` solid `var(--color-eik-o10)`. Pseudo-element on grid container.

**Animation:** StaggerReveal, 200ms stagger. Numbers scale (0.8 > 1.0).

**Responsive (mobile):** Single column, vertical layout. Line becomes vertical along left edge.

---

### Section 4: CTA

**Theme:** dark (Woud background)

**Layout:** Container `var(--container-narrow)`, center-aligned.

**Padding:** `var(--section-space-md)` vertical.

**Heading "Elke maandag een nieuw menu.":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)`, `var(--color-kalk)`.

**Subline "Reserveer en laat je verrassen.":**
- Source Serif 4, `var(--font-size-body)`, `var(--color-kalk-o65)`. Margin-top `var(--space-2)`.

**CTA "Reserveer voor maandag":**
- `btn-primary` on dark theme. Margin-top `var(--space-5)`.

**Animation:** ScrollReveal, fade up.

---

## Page: Reserveren

**URL:** `/reserveren`
**Meta:** "Reserveren -- Bij Wout"
**Design direction:** Functional page. GuestPlan widget is the star. Supporting content is secondary but warm.

### Section 1: GuestPlan Widget

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-default)`.

**Padding:** `var(--section-space-lg)` top (clears nav), `var(--section-space-md)` bottom.

**Heading "Reserveer een tafel":**
- Lora, `var(--font-size-h1)` / `var(--font-weight-bold)`, `var(--color-heading)`.

**Subline "Een avond vol smaak begint hier.":**
- Source Serif 4, `var(--font-size-body-lg)`, `var(--color-text-secondary)`. Margin-top `var(--space-3)`.

**Widget container:**
- Margin-top: `var(--space-6)`.
- Min-height: 400px.
- Background: `var(--guestplan-bg)`.
- Border: `var(--border-width-thin)` solid `var(--guestplan-border)`.
- Border-radius: `var(--guestplan-radius)`.
- Padding: `var(--guestplan-padding)`.
- Box-shadow: `var(--guestplan-shadow)`.
- GuestPlan script injects its own UI. We do NOT style widget internals.

**Note:** GuestPlan provides its own floating reservation CTA. No custom sticky bar.

**Animation:** Heading + subline: fade up 500ms. Widget: fade in 400ms, delay 300ms.

---

### Section 2: Contact Details

**Theme:** warm (Tarwe background)

**Layout:** Container `var(--container-default)`. CSS Grid `repeat(3, 1fr)`, gap `var(--space-5)`.

**Padding:** `var(--section-space-sm)` vertical.

**Heading "Liever persoonlijk?":**
- Lora, `var(--font-size-h3)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-5)`.

**Contact blocks:**
- No border, no shadow (on warm bg, these read as content blocks).
- Label (Bel ons, Mail ons, Bezoek ons): Source Serif 4, `var(--font-size-body-sm)` / `var(--font-weight-semibold)`, `var(--color-koper-dark)`, `var(--letter-spacing-wide)`, uppercase.
- Value: Source Serif 4, `var(--font-size-body)` / `var(--font-weight-regular)`, `var(--color-text)`. Margin-top `var(--space-2)`.
- Phone/email clickable links. Hover: `var(--color-koper)`.

**Responsive (mobile):** Single column stack.

---

### Section 3: FAQ Accordion

**Theme:** base (Kalk background)

**Layout:** Container `var(--container-narrow)`.

**Padding:** `var(--section-space-md)` vertical.

**Section heading "Veelgestelde vragen":**
- Lora, `var(--font-size-h2)` / `var(--font-weight-bold)`, `var(--color-heading)`.
- Margin-bottom: `var(--space-5)`.

**Accordion item:**
- Border-top: `var(--border-width-thin)` solid `var(--accordion-border)`. Last item also gets border-bottom.
- Padding: `var(--accordion-padding)`.

**Question row (trigger):**
- Flex row, `justify-content: space-between`, `align-items: center`.
- Question text: `var(--accordion-question-font)`, `var(--accordion-question-size)` / `var(--accordion-question-weight)`, `var(--accordion-question-color)`.
- Toggle icon: `+` / `-` in Lora, `var(--font-size-body-lg)`, `var(--accordion-icon-color)`. Rotates 45deg on open. Transition 250ms ease.
- Cursor: pointer. Full row clickable.
- Hover: bg `var(--accordion-hover-bg)`, 200ms ease.

**Answer (collapsed/expanded):**
- `overflow: hidden`, animated height 0 to auto.
- Framer Motion AnimatePresence: `animate={{ height: "auto", opacity: 1 }}`, `exit={{ height: 0, opacity: 0 }}`, 300ms, ease-out.
- Serialized: collapse current first, wait 150ms, then expand new. Prevents multiple open.
- Content: `var(--accordion-answer-font)`, `var(--accordion-answer-size)` / `var(--accordion-answer-line-height)`, `var(--accordion-answer-color)`. Padding-top `var(--space-2)`, padding-bottom `var(--space-2)`. Max-width: `36em`.

**Animation:** ScrollReveal on accordion container, fade up.

---

## Animation System Summary

### Page Load Sequence (All Pages, Framer Motion)

1. Nav fades in (opacity 0 > 1, 300ms).
2. Hero headline: fade up (translateY 30px > 0, opacity 0 > 1), 700ms, ease-out.
3. Hero subtext: same, 200ms delay after headline.
4. Hero CTA: 200ms after subtext.
5. Hero image (if present): clip-path or scale reveal, 800-900ms, overlaps with text.

Total hero entrance: ~1.2s.

### Scroll-Triggered Animations (Framer Motion, IntersectionObserver)

**ScrollReveal (default):**
- Initial: `opacity: 0`, `translateY: 16px` (matches `.scroll-reveal` class in tokens.css).
- Animated: `opacity: 1`, `translateY: 0`.
- Duration: 600ms. Easing: `[0.25, 0.1, 0.25, 1]`.
- Trigger: 25% viewport visibility.
- Once: true.

**StaggerReveal (for groups):**
- Parent: `staggerChildren: 0.12` (120ms default).
- Each child: same as ScrollReveal.
- Trigger: parent at 20% visibility.

### Hover/Focus States (CSS Transitions)

- Buttons: `var(--btn-transition)`.
- Cards: 250ms ease (transform, shadow).
- Links: 200ms ease (color only).
- Images with hover zoom: 300ms ease (scale within overflow:hidden).
- Focus ring: `var(--focus-ring-width)` solid `var(--focus-ring-color)`, offset `var(--focus-ring-offset)`. On `:focus-visible` only.

### Page Transitions (Framer Motion AnimatePresence)

- Exit: fade out (opacity 1 > 0, 200ms).
- Enter: fade in from below (opacity 0 > 1, translateY 12px > 0, 400ms, ease-out).
- Scroll resets to top.

### Motion Reduction

All animations respect `prefers-reduced-motion: reduce`:
- Elements appear instantly (no transition).
- Hover: color changes only (no transforms).
- Page transitions: instant swap.

---

## Responsive Breakpoint Summary

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | < 768px | Single column stacks. Hamburger nav. Hero images lose bleed. Cards carousel or stack. Font sizes at fluid minimum. |
| Tablet | 768-1023px | Two-column grids. Hamburger nav. Reduced gaps. |
| Desktop | 1024-1279px | Full nav visible. Bleeds active. Full grids. |
| Wide | 1280px+ | Container max-widths engage. |

**Container widths:**
- `--container-narrow`: 640px (menu, FAQ, story).
- `--container-default`: 1024px (cards, forms, grids).
- `--container-wide`: 1280px (heroes, full-width).
- `--container-padding-x`: fluid clamp(1rem, 5vw, 2.5rem).

---

## Theme Mode Application Map

| Page | Section | Theme |
|------|---------|-------|
| **Home** | Hero | base |
| | Intro Strip | base |
| | Menu Preview Cards | base |
| | Monday Callout | **warm** |
| | About Teaser | base |
| | Social Proof | base |
| | CTA Strip | **dark** |
| **Menu** | Hero Banner | **brand** |
| | Sticky Jump Links | **dark** |
| | Lunch-Wisselbieren | **dark** |
| | Dietary Legend | base |
| **Over Wout** | Reversed Hero | base |
| | Origin Story | base |
| | Philosophy Values | **dark** |
| | Team | base |
| | Sourcing Strip | **warm** |
| **Groepen** | Image Hero | base |
| | Option Cards | base |
| | Pricing | **warm** |
| | Inquiry Form | base |
| **Maandagavond** | Hero + Price Badge | **warm** |
| | Current Menu | base |
| | How It Works | base |
| | CTA | **dark** |
| **Reserveren** | Widget Section | base |
| | Contact Details | **warm** |
| | FAQ Accordion | base |

---

## Per-Page WOW Moments

| Page | WOW Moment | Section |
|------|-----------|---------|
| Home | Right-bleeding hero image with one-sided radius | Hero |
| Home | Polaroid tilt angles on menu preview cards | Menu Preview |
| Home | Portrait overlapping into section above via negative margin | About Teaser |
| Menu | Chalkboard-style dark theme with dot-leader pricing | Lunch/Diner |
| Over Wout | Left-bleeding image (mirror of Home hero) | Reversed Hero |
| Groepen | Asymmetric card heights via staggered padding | Option Cards |
| Maandagavond | Rotating copper price badge with spring entrance | Hero |
| Reserveren | Serialized accordion with toggle rotation | FAQ |
