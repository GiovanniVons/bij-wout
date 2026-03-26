# Project State
**Project:** Bij Wout
**Location:** website-projects/bij-wout/
**Phase:** refinement (Phase 4 passed 2026-03-25)
**Dev Server:** localhost:5063

---

## Design Quick Reference
- **Archetype:** Village Hearth (DESIGN_VARIANCE 5, MOTION_INTENSITY 4, VISUAL_DENSITY 4)
- **Fonts:** Lora (display, h2 now bold 700), Source Serif 4 (body), Caveat (accent) -- all via next/font/local
- **Primary colors:** Eik #080A0B, Kalk #FFFFFF, Woud #24323E (dark blue), Koper #C8AE79, Tarwe #F5F0E8, Leisteen #566878 (blue-gray)
- **Accessible text:** Koper-dark = #24323E (same as woud -- dark blue replaces muddy brown, 13:1 on white)
- **Animation approach:** Framer Motion for ScrollReveal, hero staggers, accordion, mobile nav. No GSAP. CSS transitions for hover states.
- **Theme modes:** base (Kalk/white), dark (Woud/dark-blue), brand (Woud-darker #121A21), warm (Tarwe/off-white)
- **Key tokens:** Section spacing via --section-space-*, containers narrow/default/wide, radius-sm/md/lg, CopperRule divider motif
- **Typography bump:** display 2.75-3.875rem (+10%), h1 2.125-3rem, h1/.text-display letter-spacing -0.03em

## File Manifest

### Pages (7)
- src/app/page.tsx (Home -- 8 sections incl. VideoSection)
- src/app/menu/page.tsx (Menu -- category headers, sticky jump links, spareribs callout, featured taps)
- src/app/over-wout/page.tsx (Over Wout -- origin, philosophy, sourcing)
- src/app/groepen/page.tsx (Groepen -- options, form)
- src/app/maandagavond/page.tsx (Maandagavond -- hero, current menu, how it works)
- src/app/reserveren/page.tsx (Reserveren -- GuestPlan placeholder, contact, FAQ)
- src/app/not-found.tsx (404)
- src/app/error.tsx (Error boundary)

### Infrastructure
- src/app/layout.tsx (Root layout, fonts, metadata, skip-to-content, JsonLd)
- src/app/globals.css (Tailwind 4 + token imports + @theme inline)
- src/app/sitemap.ts (6 routes)
- src/app/robots.ts (allow all + sitemap ref)
- src/styles/tokens.css (8-zone token system)
- next.config.ts (static export, turbopack root)

### Layout Components
- src/components/layout/Navigation.tsx (scroll-aware, mobile overlay)
- src/components/layout/Footer.tsx (3-column, brand theme)
- src/components/layout/JsonLd.tsx (Restaurant + FAQ schemas)

### UI Components
- src/components/ui/Button.tsx (primary/secondary/tertiary, link or button)
- src/components/ui/Section.tsx (theme + container + spacing wrapper)
- src/components/ui/ScrollReveal.tsx (ScrollReveal + StaggerReveal + StaggerItem)
- src/components/ui/Accordion.tsx (serialized, Framer Motion)
- src/components/ui/CopperRule.tsx (decorative copper divider)
- src/components/ui/PlaceholderImage.tsx (dead code -- no longer imported anywhere)

### Section Components (27)
- Home: HeroSection, IntroStrip, VideoSection, MenuPreview, MondayCallout, AboutTeaser, SocialProof, CTAStrip
- Menu: MenuHero, StickyJumpLinks, CategoryHeader, MenuSection, SparerribsCallout, BeerSection, DietaryLegend
- Over Wout: OverWoutHero, OriginStory, PhilosophyValues, SourcingStrip
- Groepen: GroepenHero, GroupForm
- Maandagavond: MaandagHero, CurrentMenu, HowItWorks

### Content Data
- src/content/menu-data.ts (favorietjes, lunch, wisselgerechten, dinner, kids, 33 craft beers in 6 categories, monday menu)

### Fonts
- public/fonts/lora/ (4 woff2: Regular, Bold, Italic, BoldItalic)
- public/fonts/source-serif-4/ (3 woff2: Regular, SemiBold, Italic)
- public/fonts/caveat/ (1 woff2: Regular)

### Images (user-provided + optimized)
- public/images/hero-wout-{768,1280,1920}.webp (responsive hero, 84-512KB)
- public/images/hero-wout-1920.jpg (fallback, 604KB)
- public/images/bijwout-reserveren-bh.jpg (venue/bar, 348KB -- available)
- public/images/owners.jpg (Wout + partner on terrace -- OverWoutHero + Team)
- public/images/outside-front-view-night.webp (building at night, 257KB -- AboutTeaser)
- public/images/lunch-shoit.webp (lunch photo, 152KB -- MenuPreview)
- public/images/table-food-shot.webp (dinner photo, 178KB -- MenuPreview)
- public/images/bij-wout-bier-glas.webp (craft beer, 124KB -- MenuPreview)
- public/images/outside-plaza.webp (terrace/plaza, 257KB -- Groepen hero)
- public/images/bijwout-logo-strak.png + bijwout-logo.png (logos, 5KB each)
- public/images/ also contains: interior.webp, food-shot.webp, food-shot-2.webp, clean-food-shot.webp, review-photo.webp, review-photo-2.webp, small-bites-review-shot.webp, tapas-beer-shot.webp, terrace.webp, empty-terrace-at-night.webp, wisseltap-shot.webp, menu-bg.jpg, bijwout-menu-2.jpg (available for future placement)
- public/images/source/ (10 originals from bijwout.nl + Vimeo)

## Active Issues
- [ ] Unused images: review-photo, review-photo-2, small-bites-review-shot, terrace, empty-terrace-at-night, food-shot-2
- [ ] Chalkboard grain texture defined in tokens but not implemented (D2 from Phase 4)
- [ ] Vonzie Nexus CMP integration needed post-launch on localhost
- [ ] PlaceholderImage.tsx is dead code (can delete)
- [ ] bijwout-reserveren-bh.jpg no longer used in any component (freed by owners.jpg swap)
- [ ] Team.tsx is dead code (removed from page, can delete file)

## Change Log

### 2026-03-26 (Full walkthrough refinements -- 8 workstreams)

**WS1 -- Global tokens:**
- Container widths: --container-default 1024→1280px, --container-narrow 640→768px (match hero width as baseline)
- Navigation.tsx: Added --nav-offset CSS variable sync (0px when hidden, var(--header-height) when visible)
- StickyJumpLinks: top uses var(--nav-offset) with 300ms transition -- docks smoothly when navbar hides
- Spacing bumps: IntroStrip sm→md, CTAStrip md→lg, HowItWorks sm→md, Maandagavond CTA md→lg, Over Wout CTA md→lg

**WS2 -- Home page:**
- VideoSection: Replaced broken Vimeo iframe with atmospheric image (interior.webp, 21/9 aspect)
- AboutTeaser: Converted to clipPath RIGHT bleed animation (Framer Motion, container→wide, image bleeds right)
- SocialProof: Replaced 2 fabricated reviews with 5 verified real Google reviews (Erik Visser, Bart van Spaandonk, Ton Vans, W B, Eugene Pallandt). Desktop: horizontal scroll with snap. Container narrow→default, spacing sm→md.
- MenuPreview: Grid gap space-5→space-6
- CTAStrip: Added sub-description "De kaart ligt klaar, het terras ook."

**WS3 -- Menu page:**
- BeerSection featured taps: Changed from stacked to side-by-side layout (image 1fr left, info 1.2fr right, 4/5 aspect)
- MenuSection: V tag moved inline with item name (was cascading to separate line)

**WS4 -- About page:**
- OverWoutHero: Column gap doubled (space-6→space-10 on desktop)
- OriginStory: Full rewrite -- 2-col layout with image RIGHT clipPath bleed. Merged Team content into closing paragraphs.
- PhilosophyValues: Added h-full for equal-height cards, removed max-w constraint on description
- Team section: REMOVED (content merged into OriginStory)
- SourcingStrip: Centered layout, spacing sm→md, supplier names as pill-shaped bordered labels

**WS5 -- Groepen page:**
- Added h2 "Op maat" heading to intro section
- Removed redundant "Aanvragen →" Button from option cards (form is right below)
- Removed fabricated pricing section (real site has no prices) -- replaced with centered "Prijs in overleg" note
- GroupForm: Added max={60} to guest count + helper text "Minimaal 10, maximaal 60 personen"
- GroupForm: Replaced select dropdown with visual radio cards for arrangement type (copper border on active)

**WS6 -- Maandagavond:**
- MaandagHero: Added food image (clean-food-shot.webp, 4/3 aspect) with price badge overlaid on bottom-left
- HowItWorks: Fixed step 3 copy "Laat je verrassen" → "Kies en geniet" (menu is choice-based, not surprise)

**WS7 -- Reserveren:**
- Enhanced "Liever persoonlijk?" section: spacing sm→md, added general inquiry line about menu/allergies/access questions

**WS8 -- Verification:**
- Fixed Untappd link: was /12414656 (wrong venue), now /2683005 (correct Bij Wout Moergestel)
- Fixed TripAdvisor link: was g652386-d6904554 (wrong IDs), now g2553743-d8490650 (correct)
- Instagram + Facebook links verified (200 OK)

### 2026-03-26 (Artifact alignment pass -- docs only)
- **All 5 stale artifacts updated** to match built site reality. No code changes.
- **tokens.css (artifact):** Replaced entirely with current src/styles/tokens.css (801 lines, 8-zone system)
- **brand-guidelines.md:** Rewrote S2 aesthetic direction (zero-brown, dark navy-blue + muted gold + white), S5 color system (all 6 primitives + 4 derived), type scale clamp values, S9 texture ref, S10 summary table
- **design-system.md:** Recomputed all contrast tables (new hex values), updated button variants across 4 themes, rewrote Menu Highlight Card (Polaroid → image-overlay), added 5 new component specs (StickyJumpLinks, BeerTapCard, CategoryHeader, SparerribsCallout, VideoEmbed), updated theme-to-section mapping (menu page 13 sections), footer social 2→4
- **page-designs.md:** Added VideoSection to home (Section 3), rewrote MenuPreview cards, full menu page rewrite (7→13 sections with theme alternation), updated Over Wout hero + team, footer social wireframe
- **page-copy.md:** 11 edits -- Over Wout hero subtitle + team rewrite, menu hero headline, favorietjes section, category header quotes, spareribs callout, monday menu, video section, footer social links, intro strip copy
- **project-state.md:** Flipped all 5 STALE entries to CURRENT, added brand theme bg note (Woud-darker not Eik)

### 2026-03-26 (Hero animation consistency -- clipPath bleed)
- **MenuHero:** Upgraded from simple fade+slide to clipPath LEFT bleed animation. Changed container-default → container-wide. Image now bleeds left with `-ml-[var(--container-padding-x)]`, rounded right only on desktop. clipPath `inset(0 0 0 100%)` → `inset(0 0 0 0)` at 0.9s. Matches About hero pattern.
- **GroepenHero (NEW):** Extracted inline hero from groepen/page.tsx into dedicated client component. Restructured from full-width panoramic (21/9) with ScrollReveal to 2-col layout with clipPath RIGHT bleed. Image bleeds right, 4/5 aspect ratio. Text left, image right (order swapped on mobile). Matches Home hero pattern.
- New file: src/components/sections/groepen/GroepenHero.tsx

### 2026-03-25 (Copy overhaul -- real story + deduplication)
- **Footer:** Tagline "Eerlijk eten, dicht bij huis" → "Lokaal genieten" (real brand tagline from bijwout.nl)
- **HeroSection:** Tagline → "Lokaal genieten"
- **IntroStrip:** Rewrote from generic anti-marketing to plein-focused copy
- **MondayCallout:** Fixed framing from "verrassingsgangen" to "drie gangen, drie keuzes"
- **AboutTeaser:** Rewrote with real story (verkeerskunde, zeventiende achter de bar, 2015)
- **OverWoutHero:** Subheading rewritten with real bio details
- **OriginStory:** Full rewrite with real career arc (NHTV, de Veerkes, de Zwaan, Grolsch Academy)
- **PhilosophyValues:** Grounded in real suppliers (Ketelaars, Bourgondiër, Ijsboerinneke) and real prices
- **Team:** Deduplicated, removed all repeated phrases
- **SourcingStrip:** Replaced fabricated suppliers with real ones + local breweries
- **MenuHero:** Tagline deduplicated ("Kort menu, lange tafels, lokale producten")
- **Groepen:** Added chalkboard (krijtbord) detail and coffee invite from real site
- **Maandagavond metadata:** Fixed OG description from "Geen kaart, geen keuze" to accurate choice format
- **menu-data.ts:** Updated mondayMenu.terms with real terms (dates, excluded holidays, vol is vol)
- Deduplication: no phrase now appears on more than one page

### 2026-03-25 (Real menu data integration)
- **menu-data.ts:** Replaced all placeholder food items with real restaurant menu from client CSV (77 items). New exports: `favorietjes` (11 bar snacks), `wisselgerechten` (5 rotating specials). Restructured `lunchMenu` (5 subcats), `dinnerMenu` (8 subcats including Speciale Koffies), `kinderMenu` (6 items), `mondayMenu` (3 courses with 3 choices each + terms).
- **Menu page:** Added Wouts Favorietjes section (warm theme, before Lunch) and Wisselgerechten section (dark theme, between Lunch and Diner).
- **StickyJumpLinks:** Added Favorietjes nav link.
- **SparerribsCallout:** Updated copy to real promotional text ("Nog de hele maand maart...").
- **CurrentMenu.tsx:** Restructured from 1 dish per course to 3 choices per course. Displays real dishes from CSV (March 23 menu). Shows terms from client copy.
- **MaandagHero:** Updated subtitle to real promotional copy.
- **HowItWorks:** Fixed opening time from 18:00 to 17:00.
- **(V) tags:** Jackfruit, Kofte, Krokante kaas, Krokante pompoen, Steak van knolselderij tagged as vegetarian.

### 2026-03-25 (Menu page redesign -- Brasserie Showcase)
- **CategoryHeader** (NEW): Warm-theme (tarwe) 2-col section with food photo + h2/copper rule/quote. Used for Lunch (image left) and Diner (image right, mirrored).
- **MenuSection refactor:** Added `theme` prop (dark/warm) and `showSectionHeading` prop. Kinderen now renders in warm theme with `--menu-light-*` tokens. Lunch/Diner headings handled by CategoryHeader.
- **SparerribsCallout** (NEW): Brand-theme (eik) 2-col section with food-shot.webp + pricing + CTA. Replaces inline box that blended into dark flow.
- **MenuHero redesign:** From full-bleed background overlay to 2-col editorial layout (contained image left, text right with copper rule). Brand theme.
- **StickyJumpLinks:** Replaced underline active state with pill background (koper-o20 bg, radius-pill). Removed vertical bar separators.
- **BeerSection upgrade:** Container narrow→default, added "Van de tap" featured taps row with wisseltap-shot.webp and bij-wout-bier-glas.webp (3/2 aspect image cards above existing grid).
- **Theme rhythm:** brand > dark > warm > dark > warm > dark > brand > warm > dark > base > dark (5 theme switches, was 0)
- **Images now used on menu page:** lunch-shoit.webp, table-food-shot.webp, food-shot.webp, wisseltap-shot.webp, bij-wout-bier-glas.webp (5 photos, was 1)
- New files: CategoryHeader.tsx, SparerribsCallout.tsx

### 2026-03-25 (Heading cascade fix + menu hero image + video embed + GuestPlan widget)
- **Heading fix:** Swapped import order in globals.css -- `@import "tailwindcss"` now before `@import "../styles/tokens.css"` so our @layer base heading styles override Tailwind preflight
- **MenuHero:** Added bijwout-menu-2.jpg as background image with dark overlay (75% eik), text overlaid
- **VideoSection:** Updated Vimeo iframe -- removed background=1 param, added correct referrerPolicy and allow attributes
- **GuestPlan widget:** Created GuestPlanWidget client component (iframe-based, access key b93c169197217075e43ec090d2f839f0cbdb3e73), replaced placeholder on /reserveren
- New file: src/components/sections/reserveren/GuestPlanWidget.tsx

### 2026-03-25 (Aesthetic pivot -- dark blue + bold typography + card redesign + owners)
- **Color pivot:** Woud #1A1710 → #24323E (dark blue from client's exterior branding)
- Leisteen #68675E → #566878 (blue-gray), Koper-dark #7D6B42 → #24323E (eliminates all brown)
- Woud-dark #121110 → #1A242D, Woud-darker #0C0B0A → #121A21, Leisteen-dark #4A493F → #3E505C
- Updated globals.css @theme inline to match new Zone 1 values
- **Typography:** Display +10% (2.75-3.875rem), H1 +10% (2.125-3rem), H2 weight 600→700, letter-spacing tightened to -0.03em for h1/.text-display
- **MenuPreview cards:** Removed tilted Polaroid style, now image-overlay panels with dark gradient + text overlay (gold label, white title, 80% white description). Hover: image scale + shadow lift.
- **OverWoutHero:** Swapped bijwout-reserveren-bh.jpg → owners.jpg, updated subtitle to "honest food" messaging
- **Team section:** Restructured from 3-col placeholder grid to 2-col owners section with owners.jpg + philosophy text. PlaceholderImage no longer imported anywhere.
- Zero-brown palette: all warm brown tones eliminated, replaced with dark blue + blue-gray

### 2026-03-25 (Logo + OverWoutHero fix)
- Navigation: replaced text "Bij Wout" with bijwout-logo-strak.png (h-8, auto width)
- Footer: replaced text "Bij Wout" with logo (inverted for dark brand theme)
- OverWoutHero: removed broken <source> srcSet (venue-768/1280.webp deleted earlier), now direct <img> with bijwout-reserveren-bh.jpg

### 2026-03-25 (Full image integration -- user-provided photos)
- User provided 20+ photos: food shots, interior, terrace, beer, night views, logos, reviews
- Optimized home-hero-bij-wout.png (5.4MB) → responsive hero-wout-{768,1280,1920}.webp + jpg fallback
- HeroSection: hero-wout-* (proper hero from user)
- OverWoutHero: bijwout-reserveren-bh.jpg via venue-* optimized webp
- AboutTeaser: outside-front-view-night.webp (building at night, 3/4 crop)
- MenuPreview: lunch-shoit.webp (lunch), table-food-shot.webp (diner), bij-wout-bier-glas.webp (craft bier)
- Groepen hero: outside-plaza.webp (terrace/plaza, 21/9 wide crop)
- Cleaned up all old optimized files (hero-interior-*, vimeo-*, interior-600/800, etc.)
- Only Team.tsx still uses PlaceholderImage (no team portraits available)
- 12+ additional photos available for secondary page placement

### 2026-03-25 (Palette realignment to client branding)
- Client's established branding uses #080A0B (near-black), #FFFFFF (white), #C8AE79 (gold), #68675E (warm gray)
- Replaced all Zone 1 primitives: eik → #080A0B, kalk → #FFFFFF, koper → #C8AE79, leisteen → #68675E
- Woud (was forest green #2D4A3E) → #1A1710 (warm dark with golden undertone) -- green removed entirely
- Tarwe (was rich wheat #E8D5A3) → #F5F0E8 (warm off-white, the old cream value)
- Koper-dark → #7D6B42 (accessible gold on white, 5:1 contrast)
- Updated Zone 3: links on base/warm from green to dark+gold-hover, input focus border green → gold
- Updated globals.css @theme inline registrations
- Zero component changes needed -- all use token var() references
- Hop (#6B8F71) and Roest (#A63D2F) kept as semantic-only colors (success/dietary, error)

### 2026-03-25 (Image integration)
- Downloaded 6 images from bijwout.nl to public/images/source/
- Optimized interior photo with Sharp: responsive webp (768/1280/1920) + jpg fallback
- Replaced PlaceholderImage in HeroSection and OverWoutHero with real interior photo using responsive <picture> elements
- Spareribs promo optimized but too small (245x306) for hero/card use -- available in public/images/

### 2026-03-25 (Phase 4 fix pass #1)
- Created sitemap.ts and robots.ts (SEO infrastructure)
- Added skip-to-content link in layout.tsx
- Fixed heading hierarchy on groepen, maandagavond, over-wout, reserveren (h3 -> h2)
- Deleted 5 unused Next.js starter SVGs from public/
- Created error.tsx error boundary page
- Added adjustFontFallback to all localFont declarations

## Artifact Authority
- client-dossier.md: CURRENT
- brand-guidelines.md: CURRENT (realigned 2026-03-26)
- sitemap.md: CURRENT
- wireframes.md: CURRENT
- design-system.md: STALE (containers widened, Team removed, SocialProof/GroupForm redesigned 2026-03-26)
- page-designs.md: STALE (multiple layout changes across all pages 2026-03-26)
- page-copy.md: STALE (HowItWorks, CTAStrip, Groepen pricing, reviews replaced 2026-03-26)
- seo-content-brief.md: CURRENT
- seo-technical.md: CURRENT
- tokens.css (artifact): CURRENT (copied from src/styles/tokens.css 2026-03-26)
- consolidated-fixes.md: CURRENT (fix pass #1 applied)
