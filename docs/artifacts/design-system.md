# Design System -- Bij Wout
**Phase:** 2
**Agent:** UI Designer
**Date:** 2026-03-25
**Status:** draft

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
| `--font-size-display` | 2.5rem | 3.5rem | Lora | `--font-weight-bold` | `--line-height-tight` (1.1) | `--letter-spacing-tight` (-0.02em) |
| `--font-size-h1` | 2rem | 2.75rem | Lora | `--font-weight-bold` | `--line-height-tight` | `--letter-spacing-tight` |
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

**On Kalk (#F5F0E8) -- base theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Eik (#2C2416) | 11.78:1 | PASS | PASS | PASS |
| Woud (#2D4A3E) | 7.59:1 | PASS | PASS | PASS |
| Koper-dark (#8B5A27) | 4.80:1 | PASS | PASS | FAIL |
| Roest (#A63D2F) | 5.01:1 | PASS | PASS | FAIL |
| Leisteen (#5C5C52) | 4.34:1 | FAIL | PASS | FAIL |
| Koper (#B87333) | 3.17:1 | FAIL | PASS | FAIL |
| Hop (#6B8F71) | 3.10:1 | FAIL | PASS | FAIL |
| Tarwe (#E8D5A3) | 1.29:1 | FAIL | FAIL | FAIL |

**On Woud (#2D4A3E) -- dark theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Kalk (#F5F0E8) | 7.59:1 | PASS | PASS | PASS |
| Tarwe (#E8D5A3) | 5.88:1 | PASS | PASS | FAIL |
| Hop (#6B8F71) | 2.45:1 | FAIL | FAIL | FAIL |
| Koper (#B87333) | 2.40:1 | FAIL | FAIL | FAIL |

**On Eik (#2C2416) -- brand theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Kalk (#F5F0E8) | 11.78:1 | PASS | PASS | PASS |
| Tarwe (#E8D5A3) | 9.14:1 | PASS | PASS | PASS |
| Hop (#6B8F71) | 3.80:1 | FAIL | PASS | FAIL |
| Koper (#B87333) | 3.72:1 | FAIL | PASS | FAIL |

**On Tarwe (#E8D5A3) -- warm theme background:**

| Text Color | Ratio | AA Normal | AA Large | AAA |
|-----------|-------|-----------|----------|-----|
| Eik (#2C2416) | 9.14:1 | PASS | PASS | PASS |
| Woud (#2D4A3E) | 5.88:1 | PASS | PASS | FAIL |
| Roest (#A63D2F) | 3.89:1 | FAIL | PASS | FAIL |
| Koper-dark (#8B5A27) | 3.72:1 | FAIL | PASS | FAIL |
| Leisteen (#5C5C52) | 3.36:1 | FAIL | PASS | FAIL |
| Koper (#B87333) | 2.46:1 | FAIL | FAIL | FAIL |

### Color Usage Rules

| Color | Safe for text on... | Decorative only on... |
|-------|--------------------|-----------------------|
| Eik | Kalk, Tarwe (all sizes) | -- |
| Kalk | Woud, Eik (all sizes) | Tarwe |
| Woud | Kalk, Tarwe (all sizes) | Eik |
| Koper | -- (fails AA normal everywhere) | All backgrounds (borders, icons, decorative) |
| Koper-dark | Kalk (all sizes), Tarwe (large only) | Woud, Eik |
| Leisteen | Kalk (large text only, 4.34:1) | Woud, Eik, Tarwe |
| Tarwe | Woud, Eik (all sizes) | Kalk |
| Hop | -- (fails AA normal everywhere) | All backgrounds (badges, icons) |
| Roest | Kalk (all sizes) | Tarwe (large only) |

**Key accessibility notes:**
- **Leisteen on Kalk (4.34:1):** Fails AA Normal by 0.16. Use Leisteen only for large text (18px+ regular or 14px+ bold) on light backgrounds. For body-sm and caption text, use Eik instead.
- **Koper on any background:** Never use raw Koper for text. Use `--color-koper-dark` (#8B5A27) which passes AA Normal on Kalk (4.80:1).
- **Koper as button background:** Kalk text on Koper = 3.17:1 (passes AA Large only). Acceptable for buttons since button text is always bold and min 14px, but document this exception.

### Opacity-Blended Contrast Verification

| Blend | Effective Color | On Background | Ratio | AA Normal |
|-------|-----------------|---------------|-------|-----------|
| Kalk o80 on Woud | #c9c4b9 | Woud | 5.64:1 | PASS |
| Kalk o65 on Woud | ~#b0ab9f | Woud | ~4.7:1 | PASS (borderline) |
| Kalk o50 on Woud | ~#919391 | Woud | ~3.4:1 | FAIL |
| Eik o80 on Kalk | #584e3d | Kalk | 7.62:1 | PASS |
| Eik o60 on Kalk | #84785f | Kalk | 4.60:1 | PASS |
| Eik o40 on Kalk | #b0a381 | Kalk | 2.67:1 | FAIL |

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

The Village Hearth aesthetic uses barely-rounded corners. Nothing pill-shaped, nothing sharp-modern.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Menu cards (Polaroid style), chalkboard sections |
| `--radius-sm` | 2px | Buttons, form inputs, beer cards, value cards |
| `--radius-md` | 4px | Hero images, portrait photos, group option cards |
| `--radius-lg` | 6px | GuestPlan container, large image treatments |
| `--radius-pill` | 9999px | Price badge only |
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
| **Default bg** | Woud (#2D4A3E) | transparent | transparent |
| **Default text** | Kalk (#F5F0E8) | Woud (#2D4A3E) | Koper-dark (#8B5A27) |
| **Default border** | Woud | Woud | transparent |
| **Contrast** | **7.59:1 PASS** | n/a (text on Kalk) **7.59:1 PASS** | **4.80:1 PASS** |
| **Hover bg** | Woud-dark (#1E332A) | Woud (#2D4A3E) | Koper-o8 |
| **Hover text** | Kalk | Kalk | Koper (#B87333) |
| **Hover contrast** | **8.9:1 PASS** | **7.59:1 PASS** | 3.17:1 (decorative, large text) |
| **Active bg** | Woud-darker (#152420) | Woud-dark | Koper-o8 |
| **Disabled** | Woud-o35 bg / Kalk-o50 text | transparent / Woud-o35 text+border | transparent / Eik-o25 text |

#### Dark Theme (Woud background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Kalk (#F5F0E8) | transparent | transparent |
| **Default text** | Woud (#2D4A3E) | Kalk (#F5F0E8) | Tarwe (#E8D5A3) |
| **Default border** | Kalk | Kalk | transparent |
| **Contrast** | **7.59:1 PASS** | n/a (text on Woud) **7.59:1 PASS** | **5.88:1 PASS** |
| **Hover bg** | White | Kalk (#F5F0E8) | Kalk-o10 |
| **Hover text** | Woud-dark | Woud | Kalk |
| **Active bg** | Tarwe | Tarwe | Kalk-o10 |

#### Brand Theme (Eik background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Kalk | transparent | transparent |
| **Default text** | Eik | Kalk | Tarwe |
| **Default border** | Kalk | Kalk | transparent |
| **Contrast** | **11.78:1 PASS** | n/a **11.78:1 PASS** | **9.14:1 PASS** |
| **Hover bg** | White | Kalk | Kalk-o10 |
| **Hover text** | Eik | Eik | Kalk |

#### Warm Theme (Tarwe background)

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| **Default bg** | Woud | transparent | transparent |
| **Default text** | Kalk | Woud | Koper-dark |
| **Default border** | Woud | Woud | transparent |
| **Contrast** | **7.59:1 PASS** | n/a **5.88:1 PASS** | **3.72:1 AA-large** |
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

### Menu Highlight Card (Polaroid)

Used on Home for menu preview. Three cards with individual tilt angles.

| Property | Token |
|----------|-------|
| Background | `var(--card-menu-highlight-bg)` (transparent) |
| Border | `var(--border-width-thin)` solid `var(--card-menu-highlight-border)` |
| Radius | `var(--card-menu-highlight-radius)` (none -- sharp Polaroid) |
| Padding | `var(--card-menu-highlight-padding)` |
| Shadow | `var(--shadow-sm)` |
| Label font | `var(--card-menu-highlight-label-font)` (Caveat) |
| Label color | `var(--card-menu-highlight-label-color)` (Koper) |

- Image: 4:5 portrait, sharp corners inside card frame.
- Hover: card straightens to 0deg rotation, 200ms ease.
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

---

## 9. Section Containers

### Theme-to-Section Mapping

| Theme | Background | Text | Heading | Accent | Typical Sections |
|-------|------------|------|---------|--------|-----------------|
| base | Kalk | Eik | Eik | Koper | Heroes, general content, forms |
| dark | Woud | Kalk | Kalk | Koper | Menu chalkboard, CTA strips, philosophy values |
| brand | Eik | Kalk | Kalk | Koper | Menu hero banner, footer |
| warm | Tarwe | Eik | Eik | Koper | Monday callout, pricing strips, sourcing, contact |

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

**Base theme sections:** Heroes (Home, Over Wout, Groepen, Reserveren), general content, forms, FAQ.

**Dark theme sections:** Menu chalkboard (Lunch, Diner, Kinderen, Wisselbieren), CTA strips, philosophy values.

**Brand theme sections:** Menu hero banner, footer.

**Warm theme sections:** Monday callout, pricing strips, sourcing strip, contact details.

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

These tokens enable theme-independent component styling. A card component references `var(--card-group-bg)` regardless of which theme mode it sits in.
