# Design System -- Bij Wout
**Phase:** 2
**Agent:** UI Designer
**Date:** 2026-03-25
**Status:** approved (realigned 2026-03-26)

---

## 1. Design Philosophy

### Archetype: Village Hearth

The design system translates the Village Hearth archetype into reusable components. Every element should feel like it belongs in a warm neighborhood brasserie -- textured without being rustic-kitsch, warm without being sentimental, crafted without being precious.

### Design Dials

- **DESIGN_VARIANCE: 5** -- One layout-breaking moment per page. Occasional asymmetry and bleeds, not aggressive.
- **MOTION_INTENSITY: 4** -- Framer Motion entrance sequences and staggered reveals. No GSAP scroll-driven parallax.
- **VISUAL_DENSITY: 4** -- Balanced. Dense where utility demands (menu, hours), breathing room where atmosphere needs space (heroes, photography).

### Anti-Slop Checklist

Never produce:
- Uniform card grids with identical spacing
- Centered-everything hero sections
- Components that look like Bootstrap/Material UI defaults
- Evenly rounded corners on everything
- Drop shadows as the only depth technique
- Icon-heavy sections where icons carry no meaning
- Underlined links

---

## 2. Typography System

### Font Stack

| Role | Family | Fallback | Usage |
|------|--------|----------|-------|
| Display | Lora | Georgia, 'Times New Roman', serif | Page titles, section headlines, restaurant name |
| Body | Source Serif 4 | Georgia, 'Times New Roman', serif | Body text, menu descriptions, navigation labels |
| Accent | Caveat | cursive | Taglines, callouts, decorative labels, handwritten moments |

Token references: `var(--font-display)`, `var(--font-body)`, `var(--font-accent)`.

### Type Scale (Fluid)

All sizes reference Zone 2 tokens. Viewport range: 20rem (320px) to 90rem (1440px).

| Token | Min | Max | Font | Weight | Line Height | Letter Spacing |
|-------|-----|-----|------|--------|-------------|----------------|
| `--font-size-display` | 2.75rem | 3.875rem | Lora | `--font-weight-bold` | `--line-height-tight` (1.1) | `--letter-spacing-tight` (-0.02em) |
| `--font-size-h1` | 2.125rem | 3rem | Lora | `--font-weight-bold` | `--line-height-tight` | `--letter-spacing-tight` |
| `--font-size-h2` | 1.5rem | 2rem | Lora | `--font-weight-semibold` | `--line-height-snug` (1.25) | `--letter-spacing-tight` |
| `--font-size-h3` | 1.25rem | 1.5rem | Lora | `--font-weight-semibold` | `--line-height-snug` | `--letter-spacing-normal` (0) |
| `--font-size-h4` | 0.875rem | 1rem | Source Serif 4 | `--font-weight-semibold` | `--line-height-normal` (1.5) | `--letter-spacing-widest` (0.14em), uppercase |
| `--font-size-body-lg` | 1.125rem | 1.25rem | Source Serif 4 | `--font-weight-regular` | `--line-height-relaxed` (1.65) | `--letter-spacing-normal` |
| `--font-size-body` | 1rem (static) | -- | Source Serif 4 | `--font-weight-regular` | `--line-height-relaxed` | `--letter-spacing-normal` |
| `--font-size-body-sm` | 0.875rem (static) | -- | Source Serif 4 | `--font-weight-regular` | `--line-height-normal` | `--letter-spacing-normal` |
| `--font-size-caption` | 0.75rem (static) | -- | Source Serif 4 | `--font-weight-regular` | `--line-height-normal` | `--letter-spacing-wide` (0.04em) |
| `--font-size-accent` | 1.25rem | 1.5rem | Caveat | `--font-weight-regular` | `--line-height-snug` | `--letter-spacing-normal` |
| `--font-size-accent-lg` | 1.5rem | 2rem | Caveat | `--font-weight-regular` | `--line-height-snug` | `--letter-spacing-normal` |

### Text Style Classes

Opt-in classes defined in Zone 5 of tokens.css (unlayered, override @layer base):

| Class | Purpose |
|-------|---------|
| `.text-display` | Hero headlines, oversized moments |
| `.text-body-lg` | Lead paragraphs, intro text |
| `.text-body-sm` | Secondary body, meta info |
| `.text-caption` | Timestamps, legal, fine print |
| `.text-accent` | Caveat callouts (normal) |
| `.text-accent-lg` | Caveat callouts (large) |
| `.text-overline` | Section labels, category markers |

---

## 3. Color System

### Contrast Ratio Table

Computed for every text-on-background combination. AA Normal requires 4.5:1, AA Large requires 3.0:1, AAA requires 7.0:1.

**On Kalk (#FFFFFF) -- base theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Eik (#080A0B) | 20.9:1 | PASS | PASS | PASS |
| Woud (#24323E) | 12.5:1 | PASS | PASS | PASS |
| Leisteen (#566878) | 5.6:1 | PASS | PASS | FAIL |
| Koper (#C8AE79) | 3.0:1 | FAIL | PASS | FAIL |
| Tarwe (#F5F0E8) | 1.13:1 | FAIL | FAIL | FAIL |

**On Woud (#24323E) -- dark theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Kalk (#FFFFFF) | 12.5:1 | PASS | PASS | PASS |
| Tarwe (#F5F0E8) | 10.8:1 | PASS | PASS | PASS |
| Koper (#C8AE79) | 5.1:1 | PASS | PASS | FAIL |

**On Eik (#080A0B) -- brand theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Kalk (#FFFFFF) | 20.9:1 | PASS | PASS | PASS |
| Tarwe (#F5F0E8) | 18.0:1 | PASS | PASS | PASS |
| Koper (#C8AE79) | 8.5:1 | PASS | PASS | PASS |

**On Tarwe (#F5F0E8) -- warm theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Eik (#080A0B) | 18.0:1 | PASS | PASS | PASS |
| Woud (#24323E) | 10.8:1 | PASS | PASS | PASS |
| Leisteen (#566878) | 4.8:1 | PASS | PASS | FAIL |
| Koper (#C8AE79) | 2.6:1 | FAIL | FAIL | FAIL |

### Color Usage Rules

| Color | Safe for text on... | Decorative only on... |
|-------|--------------------|-----------------------|
| Eik | Kalk, Tarwe, Woud (all sizes) | -- |
| Kalk | Woud, Eik (all sizes) | -- |
| Woud | Kalk, Tarwe (all sizes) | Eik |
| Koper | Eik (all sizes, 8.5:1), Woud (all sizes, 5.1:1) | Kalk (3.0:1, large text only), Tarwe |
| Leisteen | Kalk (all sizes, 5.6:1), Tarwe (all sizes, 4.8:1) | Woud, Eik |
| Tarwe | Woud, Eik (all sizes) | Kalk |

**Key accessibility notes:**
- **Koper on dark backgrounds:** Koper (#C8AE79) passes AA Normal on both Eik (8.5:1) and Woud (5.1:1). Safe for body text on dark themes.
- **Koper on Kalk (3.0:1):** Fails AA Normal. Use only for large text (18px+ regular or 14px+ bold) or decorative elements on light backgrounds.
- **Leisteen on Kalk (5.6:1):** Passes AA Normal. Safe for secondary body text and captions on light backgrounds.

### Opacity-Blended Contrast Verification

| Blend | Effective Color | On Background | Ratio | AA Normal |
|-------|-----------------|---------------|-------|-----------|
| Kalk o80 on Woud | ~#cdd1d8 | Woud (#24323E) | ~7.5:1 | PASS |
| Kalk o65 on Woud | ~#b0b5bd | Woud (#24323E) | ~5.6:1 | PASS |
| Kalk o50 on Woud | ~#92999f | Woud (#24323E) | ~4.0:1 | FAIL |
| Eik o80 on Kalk | ~#353537 | Kalk (#FFFFFF) | ~12.5:1 | PASS |
| Eik o60 on Kalk | ~#696a6b | Kalk (#FFFFFF) | ~6.2:1 | PASS |
| Eik o40 on Kalk | ~#9c9d9e | Kalk (#FFFFFF) | ~3.5:1 | FAIL |

**Opacity safety thresholds:**
- Kalk text on dark backgrounds: minimum o65 for body, o80 for captions
- Eik text on Kalk: minimum o60 for body, o80 for captions
- Below these thresholds, text is decorative only

---

## 4. Spacing System

### Static Scale

Token references map to a 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem (4px) | Tight gaps, icon-text spacing |
| `--space-2` | 0.5rem (8px) | Inline element gaps |
| `--space-3` | 0.75rem (12px) | Form field padding, small component gaps |
| `--space-4` | 1rem (16px) | Paragraph spacing, within-component gaps |
| `--space-5` | 1.25rem (20px) | Card padding, grid gaps |
| `--space-6` | 1.5rem (24px) | Grid gaps, heading margins |
| `--space-7` | 2rem (32px) | Large component padding |
| `--space-8` | 3rem (48px) | Section-to-section transitions |
| `--space-9` | 4rem (64px) | Large section separation |
| `--space-10` | 6rem (96px) | Maximum separation |

### Section Spacing (Fluid)

| Token | Min | Max | Usage |
|-------|-----|-----|-------|
| `--section-space-sm` | 2rem | 3rem | Compact strips, callout bands |
| `--section-space-md` | 3rem | 5rem | Standard content sections |
| `--section-space-lg` | 4rem | 7rem | Hero sections, major section breaks |
| `--section-space-xl` | 5.5rem | 9.5rem | Reserved for dramatic vertical gaps |

### Container Widths

| Token | Width | Usage |
|-------|-------|-------|
| `--container-narrow` | 640px | Reading-focused: menu items, FAQ, origin story |
| `--container-default` | 1024px | Standard content: cards, forms, grids |
| `--container-wide` | 1280px | Heroes, full-width compositions |
| `--container-padding-x` | clamp(1rem, 5vw, 2.5rem) | Horizontal gutters, all containers |

---

## 5. Border, Radius, and Shadow System

### Border Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--border-width-thin` | 1px | Subtle dividers, card borders, input borders |
| `--border-width-medium` | 2px | Copper rule dividers, active nav indicators |
| `--border-width-thick` | 3px | Accent borders, pull quote left border |
| `--border-width-accent` | 4px | Heavy decorative borders, pull quote emphasis |

### Radius Philosophy: Subtle (2-6px)

The Village Hearth aesthetic uses barely-rounded corners. Pill shapes reserved for small interactive indicators (badges, nav pills). Nothing sharp-modern.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Chalkboard sections, sharp-edge elements |
| `--radius-sm` | 2px | Buttons, form inputs, beer cards, value cards |
| `--radius-md` | 4px | Hero images, portrait photos, group option cards |
| `--radius-lg` | 6px | GuestPlan container, large image treatments |
| `--radius-pill` | 9999px | Price badge, StickyJumpLinks active state |
| `--radius-full` | 50% | Price badge circle |

### Shadow Scale

All shadows use `color-mix()` based eik opacity tokens. No `rgba()`.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px var(--color-eik-o8)` | Cards, subtle lift |
| `--shadow-md` | `0 2px 8px var(--color-eik-o12), 0 1px 2px var(--color-eik-o8)` | Card hover, dropdown |
| `--shadow-lg` | `0 4px 16px var(--color-eik-o20), 0 2px 4px var(--color-eik-o8)` | Price badge, overlay |
| `--shadow-xl` | `0 8px 32px var(--color-eik-o25), 0 4px 8px var(--color-eik-o12)` | Modal, elevated panels |

---

## 6. Buttons

### Shared Dimensions

| Property | Token | Value |
|----------|-------|-------|
| Font | `--btn-font` | Source Serif 4 |
| Size | `--btn-font-size` | `var(--font-size-body-sm)` |
| Weight | `--btn-font-weight` | `var(--font-weight-semibold)` |
| Letter spacing | `--btn-letter-spacing` | `var(--letter-spacing-wide)` |
| Transform | `--btn-text-transform` | uppercase |
| Radius | `--btn-radius` | `var(--radius-sm)` |
| Min height | `--btn-min-height` | 48px |
| Padding x | `--btn-padding-x` | `var(--space-7)` (2rem) |
| Padding y | `--btn-padding-y` | `var(--space-3)` (0.75rem) |
| Transition | `--btn-transition` | `all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Hover lift | `--btn-hover-lift` | `translateY(-1px)` |
| Active press | `--btn-active-press` | `translateY(0px)` |
| Focus ring | -- | `var(--focus-ring-width)` solid `var(--focus-ring-color)`, offset `var(--focus-ring-offset)` |
| Adjacent gap | -- | `var(--space-3)` |

### Variant Specifications per Theme

#### Base Theme (Kalk background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Woud (#24323E) | transparent | transparent |
| **Default text** | Kalk (#FFFFFF) | Woud (#24323E) | Leisteen (#566878) |
| **Default border** | Woud | Woud | transparent |
| **Contrast** | **12.5:1 PASS** | n/a (text on Kalk) **12.5:1 PASS** | **5.6:1 PASS** |
| **Hover bg** | Woud-dark | Woud (#24323E) | Koper-o8 |
| **Hover text** | Kalk | Kalk | Koper (#C8AE79) |
| **Hover contrast** | **13.5:1 PASS** | **12.5:1 PASS** | 3.0:1 (decorative, large text) |
| **Active bg** | Woud-darker | Woud-dark | Koper-o8 |
| **Disabled** | Woud-o35 bg / Kalk-o50 text | transparent / Woud-o35 text+border | transparent / Eik-o25 text |

#### Dark Theme (Woud background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Kalk (#FFFFFF) | transparent | transparent |
| **Default text** | Woud (#24323E) | Kalk (#FFFFFF) | Tarwe (#F5F0E8) |
| **Default border** | Kalk | Kalk | transparent |
| **Contrast** | **12.5:1 PASS** | n/a (text on Woud) **12.5:1 PASS** | **10.8:1 PASS** |
| **Hover bg** | White | Kalk (#FFFFFF) | Kalk-o10 |
| **Hover text** | Woud-dark | Woud | Kalk |
| **Active bg** | Tarwe | Tarwe | Kalk-o10 |

#### Brand Theme (Eik background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Kalk | transparent | transparent |
| **Default text** | Eik | Kalk | Tarwe |
| **Default border** | Kalk | Kalk | transparent |
| **Contrast** | **20.9:1 PASS** | n/a **20.9:1 PASS** | **18.0:1 PASS** |
| **Hover bg** | White | Kalk | Kalk-o10 |
| **Hover text** | Eik | Eik | Kalk |

#### Warm Theme (Tarwe background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Woud | transparent | transparent |
| **Default text** | Kalk | Woud | Leisteen |
| **Default border** | Woud | Woud | transparent |
| **Contrast** | **10.8:1 PASS** | n/a **10.8:1 PASS** | **4.8:1 PASS** |
| **Hover bg** | Woud-dark | Woud | Koper-o8 |
| **Hover text** | Kalk | Kalk | Koper |

---

## 7. Navigation

### Desktop (1024px+)

- Fixed top, `z-index: var(--header-z-index)` (100).
- Height: `var(--header-height)` (4.5rem / 72px).
- Transparent at top, solid `var(--header-bg-scrolled)` after 80px scroll with `backdrop-filter: blur(12px)`.
- Logo: Lora italic, `var(--font-size-body-lg)`, `var(--font-weight-bold)`.
- Nav links: Source Serif 4, `var(--font-size-body-sm)`, `var(--font-weight-regular)`.
- Active: `var(--color-koper)` with 2px bottom line.
- CTA: btn-primary variant.

**Scroll hide/show:**
- Scroll down past 400px: slides up (`translateY(-100%)`), 300ms ease.
- Scroll up: slides back down.
- 5px dead zone to prevent jitter. Track lastScrollY with useRef.

### Mobile (< 1024px)

- Hamburger + logo header bar (same height).
- Full-viewport overlay on `var(--mobile-overlay-bg)` (Eik).
- Slide in from right, 400ms ease-out.
- Links: Lora, `var(--mobile-overlay-link-size)`, stagger 80ms (Framer Motion).
- Contact info at bottom: `var(--font-size-body-sm)`, `var(--color-kalk-o65)`.

---

## 8. Cards

### Menu Highlight Card (Image Overlay)

Used on Home for menu preview. Food photography with gradient text overlay.

| Property | Token |
|----------|-------|
| Radius | `var(--card-menu-highlight-radius)` (md) |
| Shadow | `var(--shadow-sm)` |
| Label font | `var(--card-menu-highlight-label-font)` (Caveat) |
| Label color | `var(--card-menu-highlight-label-color)` (Koper) |
| Title color | Kalk, `var(--font-weight-semibold)` |
| Description color | Kalk o80 |

- Image: food photo fills card, gradient overlay from bottom (eik-o75 to transparent).
- Text overlay at bottom: Caveat label (koper), title (kalk, semibold), description (kalk-o80).
- Hover: image scales 1.04, shadow-lg appears, 250ms ease.
- No tilt rotation, no Polaroid styling.
- Mobile: horizontal scroll carousel, 280px card width.

### Group Option Card

Used on Groepen page for event types.

| Property | Token |
|----------|-------|
| Background | `var(--card-group-bg)` |
| Border | `var(--border-width-thin)` solid `var(--card-group-border)` |
| Radius | `var(--card-group-radius)` (md) |
| Padding | `var(--card-group-padding)` |
| Shadow | `var(--shadow-sm)` |

- Hover: `translateY(-2px)`, shadow to `var(--shadow-md)`, border to `var(--card-group-hover-border)`, 250ms ease.
- Asymmetric padding-top on alternating cards creates staggered grid.

### StickyJumpLinks

Sticky navigation bar for the menu page. Warm theme (Tarwe background).

| Property | Value |
|----------|-------|
| Theme | warm (Tarwe background) |
| Position | `position: sticky`, `top: var(--header-height)`, `z-index: 40` |
| Link font | Source Serif 4, `var(--font-size-body-sm)`, `var(--font-weight-semibold)` |
| Link color | `var(--color-text-secondary)` |
| Active state | Pill background: Koper o20, `var(--radius-pill)`, `var(--color-koper)` text |
| Hover | `var(--color-heading)` |
| Separators | None (removed) |
| Transition | color 200ms ease, background 200ms ease |

- Scroll-spy highlights the link matching the currently visible menu section.
- Mobile: horizontal scroll, `overflow-x: auto`, `white-space: nowrap`.

### BeerTapCard

Dark-theme card variant for featured tap beers on the menu page.

| Property | Value |
|----------|-------|
| Background | Kalk o8 |
| Border | `var(--border-width-thin)` solid Kalk o15 |
| Radius | `var(--radius-md)` |
| Image | 3:2 aspect ratio on top |
| Brewery | `var(--font-size-caption)`, Koper, uppercase |
| Name | `var(--font-size-body-lg)`, Kalk, `var(--font-weight-semibold)` |
| Style + ABV | `var(--font-size-caption)`, Kalk o65 |
| Price | `var(--font-size-body)`, Kalk, `var(--font-weight-semibold)` |

- Padding below image for text content.
- Used inside BeerSection (dark theme).

### CategoryHeader

Warm-theme 2-column section used for Lunch and Diner introductions on the menu page.

| Property | Value |
|----------|-------|
| Theme | warm (Tarwe background) |
| Layout | 2-column: image left, text right |
| Image | 3:2 aspect ratio, `var(--radius-md)` |
| Heading | h2, preceded by CopperRule |
| Quote | Caveat italic, `var(--color-text-secondary)` |
| Container | `var(--container-default)` |

### SparerribsCallout

Brand-theme 2-column promotional section for the Thursday spareribs special.

| Property | Value |
|----------|-------|
| Theme | brand (Eik background), full-width |
| Layout | 2-column: text left, promo image right |
| Overline | `var(--font-size-caption)`, Koper, uppercase |
| Heading | h2, Kalk |
| Body | Tarwe |
| CTA | Primary button |
| Image | `var(--radius-md)` |

### VideoEmbed

Utility pattern for responsive video embedding (used on home page between IntroStrip and MenuPreview).

| Property | Value |
|----------|-------|
| Aspect ratio | 16:9 (`aspect-ratio: 16/9`) |
| Max width | 56rem |
| Centering | `margin-inline: auto` |
| Radius | `var(--radius-md)` |
| Iframe | Vimeo, fills container via absolute positioning |
| Animation | Wrapped in ScrollReveal |

---

## 9. Section Containers

### Theme-to-Section Mapping

| Theme | Background | Text | Heading | Accent | Typical Sections |
|-------|------------|------|---------|--------|-----------------|
| base | Kalk (#FFFFFF) | Eik (#080A0B) | Eik | Koper (#C8AE79) | Heroes, general content, forms, DietaryLegend |
| dark | Woud (#24323E) | Kalk (#FFFFFF) | Kalk | Koper | Wisselgerechten, BeerSection, CTA strips, philosophy values |
| brand | Eik (#080A0B) | Kalk (#FFFFFF) | Kalk | Koper | MenuHero, SparerribsCallout, footer |
| warm | Tarwe (#F5F0E8) | Eik (#080A0B) | Eik | Koper | StickyJumpLinks, Favorietjes, CategoryHeaders, MenuSections, Kinderen, Monday callout, pricing, sourcing, contact |

All theme switching via `data-theme` attribute on section containers. Semantic color tokens (`--color-bg`, `--color-text`, `--color-heading`, etc.) cascade automatically.

---

## 10. Form Inputs

| Property | Token |
|----------|-------|
| Background | `var(--input-bg)` (white) |
| Border | `var(--border-width-thin)` solid `var(--input-border)` |
| Focus border | `var(--input-focus-border)` (Woud) |
| Error border | `var(--input-error-border)` (Roest) |
| Radius | `var(--input-radius)` (sm) |
| Padding | `var(--input-padding)` |
| Text color | `var(--input-text)` (Eik) |
| Placeholder | `var(--input-placeholder)` (Leisteen o60) |
| Label | Source Serif 4, `var(--font-size-body-sm)`, `var(--font-weight-semibold)`, `var(--color-heading)` |

**States:**
- Default: `var(--input-border)` border.
- Focus: `var(--input-focus-border)` border + focus ring.
- Error: `var(--input-error-border)` border + error message in `var(--color-error)`, `var(--font-size-caption)`.
- Success: `var(--color-success)` border.
- Disabled: `var(--input-disabled-bg)` bg, `var(--input-disabled-text)` text, `var(--input-disabled-border)` border.

---

## 11. Accordion

Used for FAQ on Reserveren page.

| Property | Token |
|----------|-------|
| Border | `var(--border-width-thin)` solid `var(--accordion-border)` |
| Padding | `var(--accordion-padding)` |
| Icon color | `var(--accordion-icon-color)` (Koper) |
| Hover bg | `var(--accordion-hover-bg)` |
| Question font | `var(--accordion-question-font)` (Lora) |
| Question size | `var(--accordion-question-size)` (h3) |
| Question weight | `var(--accordion-question-weight)` (semibold) |
| Question color | `var(--accordion-question-color)` (heading) |
| Answer font | `var(--accordion-answer-font)` (Source Serif 4) |
| Answer size | `var(--accordion-answer-size)` (body) |
| Answer color | `var(--accordion-answer-color)` (text-secondary) |
| Answer line-height | `var(--accordion-answer-line-height)` (relaxed) |

**Behavior:**
- Serialized: collapse current item first, wait 150ms, then expand new item.
- Toggle icon: `+` rotates 45deg to `x` on open, 250ms ease.
- Height animation: Framer Motion AnimatePresence, 300ms ease-out.

---

## 12. Dividers and Decorative Elements

### Copper Rule

A decorative horizontal line used under section headings (menu, Monday menu).

| Property | Token |
|----------|-------|
| Width | `var(--copper-rule-width)` (80px) |
| Height | `var(--copper-rule-height)` (2px) |
| Color | `var(--copper-rule-color)` (Koper) |
| Class | `.copper-rule` |

### Section Dividers

- Between sections: hard color change (no gradients). Theme switch via `data-theme` creates natural visual breaks.
- Within sections (e.g., between quotes): dashed line, `var(--border-width-thin)` dashed `var(--color-border-subtle)`.
- Pull quote left border: `var(--border-width-accent)` solid `var(--color-koper)`.

### Flanking Lines (Intro Strip)

- Horizontal rules flanking centered text: 60px wide, `var(--border-width-thin)`, `var(--color-koper-o40)`.
- Desktop: flex row with line -- text -- line. Mobile: lines above/below.

---

## 13. Footer

**Theme:** brand (Eik background).

| Property | Token |
|----------|-------|
| Background | `var(--footer-bg)` (Eik) |
| Text | `var(--footer-text)` (Tarwe) |
| Heading | `var(--footer-heading)` (Kalk) |
| Link | `var(--footer-link)` (Tarwe) |
| Link hover | `var(--footer-link-hover)` (Koper) |
| Accent | `var(--footer-accent)` (Koper) |
| Divider | `var(--footer-divider)` (Kalk o15) |
| Copyright | `var(--footer-copyright)` (Kalk o40) |

Layout: CSS Grid `2fr 1fr 1fr` on desktop. Single column center-aligned on mobile. Colophon bar with top border divider.

**Social icons:** 4 platforms -- Instagram, Facebook, TripAdvisor, Untappd. Icon color: `var(--footer-text)` (Tarwe), hover: `var(--footer-link-hover)` (Koper).

---

## 14. Animation System

### Library Assignment

| Animation Type | Library | Rationale |
|---------------|---------|-----------|
| Page load sequence | Framer Motion | staggerChildren, delayChildren |
| Scroll-triggered reveals | Framer Motion + IntersectionObserver | ScrollReveal/StaggerReveal components |
| Hover/focus states | CSS transitions | No JS needed |
| Page transitions | Framer Motion AnimatePresence | Route change animations |
| Accordion expand/collapse | Framer Motion AnimatePresence | Height animation |
| Spring physics (price badge) | Framer Motion | stiffness: 120, damping: 18 |

**No GSAP** -- MOTION_INTENSITY 4 does not warrant scroll-driven animations or SplitText.

### ScrollReveal Component

- Initial state: `opacity: 0`, `translateY: 16px` (defined in `.scroll-reveal` class in tokens.css).
- Animated: `opacity: 1`, `translateY: 0`.
- Duration: 600ms.
- Easing: `[0.25, 0.1, 0.25, 1]`.
- Trigger: IntersectionObserver at 25% threshold.
- Once: true.

### StaggerReveal Component

- Parent wrapper with `staggerChildren: 0.12` (120ms default).
- Each child uses ScrollReveal animation.
- Trigger: parent at 20% threshold.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` in tokens.css:
- `.scroll-reveal` immediately visible (opacity: 1, transform: none).
- All animation/transition durations set to 0.01ms.
- Scroll-behavior: auto.

---

## 15. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 768px | Single columns, hamburger nav, no bleeds, horizontal card carousels |
| Tablet | 768-1023px | Two-column grids where possible, hamburger nav, reduced gaps |
| Desktop | 1024-1279px | Full nav, image bleeds, full grid layouts |
| Wide | 1280px+ | Container max-widths engage, content stops stretching |

---

## 16. Semantic Theme Mapping (Section-Level)

Each section gets a `data-theme` attribute. Semantic tokens cascade automatically.

**Base theme sections:** Heroes (Home, Over Wout, Groepen, Reserveren), general content, forms, FAQ, DietaryLegend.

**Dark theme sections:** Wisselgerechten, BeerSection, CTA strips, philosophy values.

**Brand theme sections:** MenuHero, SparerribsCallout, footer.

**Warm theme sections:** StickyJumpLinks, Favorietjes, Lunch CategoryHeader, Lunch MenuSection, Diner CategoryHeader, Diner MenuSection, Kinderen, Monday callout, pricing strips, sourcing strip, contact details.

**Menu page theme flow:** MenuHero (brand) > StickyJumpLinks (warm) > Favorietjes (warm) > Lunch CategoryHeader (warm) > Lunch MenuSection (warm) > Wisselgerechten (dark) > Diner CategoryHeader (warm) > Diner MenuSection (warm) > SparerribsCallout (brand) > Kinderen (warm) > BeerSection (dark) > DietaryLegend (base) > CTA Strip (dark).

**Rule:** Never stack more than 3 consecutive sections of the same theme without a visual break (different theme section or decorative element).

---

## 17. Component Bridge Tokens (Zone 3b)

All component-level tokens are defined in Zone 3b of tokens.css. These bridge the gap between semantic theme tokens and individual component styling.

| Group | Prefix | Count |
|-------|--------|-------|
| Header | `--header-*` | 9 tokens |
| Mobile overlay | `--mobile-overlay-*` | 5 tokens |
| Menu highlight card | `--card-menu-highlight-*` | 7 tokens |
| Group option card | `--card-group-*` | 6 tokens |
| Beer tap card | `--card-beer-tap-*` | 5 tokens |
| Form inputs | `--input-*` | 11 tokens |
| Accordion | `--accordion-*` | 12 tokens |
| Footer | `--footer-*` | 8 tokens |
| Menu items (chalk) | `--menu-chalk-*` | 6 tokens |
| Menu items (light) | `--menu-light-*` | 6 tokens |
| Dietary badges | `--badge-dietary-*` | 3 tokens |
| Copper rule | `--copper-rule-*` | 3 tokens |
| Hero overlay | `--hero-overlay-*` | 2 tokens |
| GuestPlan widget | `--guestplan-*` | 5 tokens |
| Star rating | `--star-*` | 3 tokens |
| Sticky jump links | `--jump-links-*` | 4 tokens |

These tokens enable theme-independent component styling. A card component references `var(--card-group-bg)` regardless of which theme mode it sits in.
