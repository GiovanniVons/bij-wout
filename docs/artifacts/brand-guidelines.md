# Brand Guidelines -- Bij Wout
**Phase:** 1
**Agent:** brand-strategist
**Date:** 2026-03-25
**Status:** draft

---

## 1. Brand Positioning

### Identity Statement

Bij Wout is Moergestel's living room with a beer license. Since 2015, Wout Huijben has turned a corner on the village square into the place where neighbors become friends, where a morning coffee slides into an afternoon borrel, and where the seasonal menu changes because the farmer down the road brought something new. This is not a restaurant concept or a hospitality brand -- it is one person's belief that a village needs a place where you are always welcome, the food is honest, and nobody checks the clock.

### Competitive Differentiator

Every restaurant site in this region defaults to one of two modes: dark and moody (aspirational fine dining) or sterile and templated (WordPress with stock photos). Bij Wout occupies neither. The brand's irreplaceable quality is **village proprietorship** -- the credibility that comes from a real person who chose this village, knows every regular by name, rotates craft beers because he is genuinely curious, and sources from producers he has met. Online, this translates to warmth that feels authored (not designed), approachability that feels specific (not generic), and craft that feels honest (not performative).

### Positioning Territory

"The village publican's table" -- warmer than a brasserie, less precious than a bistro, more curated than a cafe. Bij Wout owns the intersection of **neighborhood belonging** and **quiet craft**. Nobody in the competitive set occupies this territory digitally.

---

## 2. Aesthetic Direction

### Aesthetic Label

**"Brabant village taproom -- chalk on warmwood, Saturday afternoon light"**

### Description

The digital experience should feel like the inside of Bij Wout on a Saturday at 4 PM: warm ambient light through square windows, worn wooden tabletops, a blackboard with today's specials, the hum of conversation. Surfaces are warm and textured -- not polished or sterile. Think raw plaster walls, oak grain, handwritten chalkboard menus. The color temperature runs warm throughout: cream-tinted backgrounds with deep Brabant greens and burnished copper accents. Typography mixes a sturdy, slightly imperfect display face (the sign above the door) with an effortlessly readable body (the menu card). White space is used like the distance between tables -- enough to be comfortable, not so much it feels empty. Photography should be documentary and golden-hour: real plates, real pour, real faces, never styled or art-directed.

This aesthetic is textured without being rustic-kitsch. It is warm without being sentimental. It has the quiet confidence of someone who does not need to explain why the beer list is good -- it just is.

### Anti-Reference

This brand is explicitly NOT:
- **Dark/moody restaurant theater** (black backgrounds, gold script, spotlit plates) -- that is the current site's default, and it creates distance instead of warmth
- **Clean white SaaS minimalism** (flat white, sans-serif everything, stock photography) -- antiseptic is the opposite of gezelligheid
- **Rustic-cosplay** (burlap textures, mason jar illustrations, "farm to table" cliches) -- Bij Wout is not a concept restaurant wearing a costume
- **Generic Horeca template** (full-bleed hero, three icon cards, testimonial slider, Google Maps footer) -- every competitor already looks like this

---

## 3. Design Dials

```
DESIGN_VARIANCE: 5
MOTION_INTENSITY: 4
VISUAL_DENSITY: 4
```

### Rationale

**DESIGN_VARIANCE: 5** -- Bij Wout is a neighborhood spot, not an art gallery. The layout should feel natural and easy to navigate, like a well-organized menu. One deliberate layout break per page (a full-bleed food moment, an asymmetric about section) prevents template feeling without becoming disorienting. The surprise should come from warmth and texture, not structural complexity.

**MOTION_INTENSITY: 4** -- Entrance animations and gentle scroll reveals create a sense of being welcomed in -- the door opening, the host looking up. No complex GSAP timelines or parallax acrobatics. Motion should feel like settling into a chair, not watching a show. Smooth page transitions, staggered content reveals, and subtle hover warmth on interactive elements.

**VISUAL_DENSITY: 4** -- Balanced. The menu, beer selection, and opening hours need to be findable fast (this is a utility site for locals deciding where to eat tonight). But the emotional quality needs breathing room. Sections should alternate between informational density (menu, hours, contact) and atmospheric pause (food photography, seasonal highlights). Not minimal-luxe, not information-overloaded.

---

## 4. Aesthetic Archetype

### Village Hearth (NEW)

Warm, textured, proprietor-driven. The visual language of a neighborhood establishment run by someone with taste but no pretense. Distinguishing tension: craft curation communicated through approachable, lived-in warmth rather than design sophistication. Think of the difference between a carefully curated wine bar and a glossy restaurant group -- Village Hearth is the former. Surfaces have material warmth (wood grain, chalk texture, warm plaster) without falling into rustic costume. Typography mixes a strong, slightly informal display face with a clean body serif or humanist sans. Color is dominated by warm neutrals (cream, oatmeal) with one deep anchor color (forest, navy, or espresso) and one warm metallic or earth accent. Photography is always real, always warm-lit, never styled. The overall feeling is: "the owner put this together themselves, and they have good taste."

- Typical dials: VARIANCE 4-6, MOTION 3-5, DENSITY 3-5
- Reference: Bij Wout (Moergestel village brasserie)

---

## 5. Visual System

### Typography

**Display: Lora (Bold, 700)**
- **Why:** Lora is a well-balanced serif with a contemporary feel and roots in calligraphy. It has enough character to feel like it belongs on a hand-painted sign above a brasserie door, but enough refinement to hold up at large display sizes. The stroke contrast gives it warmth without being ornate. It reads as "someone chose this with care" rather than "a designer picked this from a mood board."
- Usage: Page titles, section headlines, the restaurant name in hero context
- Letter-spacing: -0.02em at display sizes (tighten for intimacy)

**Body: Source Serif 4 (Regular 400 / Semibold 600)**
- **Why:** Source Serif 4 is an excellent reading serif with the openness and legibility of a text face designed for extended reading. It pairs with Lora by sharing a warm, humanist DNA while providing enough contrast in texture (Source Serif is more upright and structured, Lora more flowing). For a restaurant site where the menu, descriptions, and story sections all need to be read comfortably, Source Serif offers superior readability at body sizes. It feels like a well-printed menu card.
- Usage: Body text, menu descriptions, long-form content, navigation labels
- Weight 400 for body text, 600 for emphasis and subheadings

**Accent: Caveat (Regular 400 / Bold 700)**
- **Why:** Caveat is a handwritten font with genuine personality -- it looks like someone wrote it with a felt-tip pen on a chalkboard. For Bij Wout, it bridges the gap between the polished digital experience and the handwritten-specials-board reality of the restaurant. Used sparingly (taglines, callouts, decorative labels like "Dagschotel" or "Lokaal Genieten"), it injects humanity and the proprietor's hand without overwhelming the reading experience. This is the chalk on the board.
- Usage: Tagline, callouts, special labels, decorative text, handwritten-feeling moments
- NEVER used for body copy or navigation -- strictly for accent moments

### Type Scale

Base size: 18px (1.125rem) -- slightly large for comfortable reading on screens, appropriate for a restaurant site where visitors scan quickly.

| Level | Size | Weight | Line Height | Letter Spacing | Font |
|-------|------|--------|-------------|----------------|------|
| Display (hero) | clamp(2.75rem, 2.2rem + 2.5vw, 4.5rem) | 700 | 1.05 | -0.02em | Lora |
| H1 | clamp(2.25rem, 1.8rem + 2vw, 3.5rem) | 700 | 1.1 | -0.015em | Lora |
| H2 | clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem) | 700 | 1.15 | -0.01em | Lora |
| H3 | clamp(1.375rem, 1.15rem + 1vw, 1.75rem) | 600 | 1.2 | 0 | Source Serif 4 |
| H4 | clamp(1.125rem, 1rem + 0.5vw, 1.375rem) | 600 | 1.3 | 0.01em | Source Serif 4 |
| Body Large | 1.25rem | 400 | 1.6 | 0 | Source Serif 4 |
| Body | 1.125rem | 400 | 1.65 | 0 | Source Serif 4 |
| Body Small | 0.9375rem | 400 | 1.6 | 0.005em | Source Serif 4 |
| Caption | 0.8125rem | 400 | 1.5 | 0.02em | Source Serif 4 |
| Accent Display | clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem) | 700 | 1.2 | 0 | Caveat |
| Accent Label | 1.125rem | 400 | 1.3 | 0.01em | Caveat |

### Color System

The palette draws from the physical materials of a Brabant village brasserie: oak wood, slate tile, copper beer taps, cream-colored plaster walls, and the deep green of the surrounding countryside.

**Primitives:**

| Name | Hex | Role | Rationale |
|------|-----|------|-----------|
| **Eik** (Oak) | `#2C2416` | Neutral dark | Deep brown-black, extracted from aged oak. Never pure black -- this dark has warmth and wood-grain depth. Used for primary text and structural elements. |
| **Kalk** (Lime plaster) | `#F5F0E8` | Neutral light / dominant background | The color of aged lime plaster on a Brabant farmhouse wall. Warm cream, not white. This is the 60% dominant surface color. |
| **Woud** (Forest) | `#2D4A3E` | Primary structural color | Deep Brabant forest green. The anchor color that creates authority and depth. Used for headers, navigation backgrounds, footer, and key structural blocks. Provides the essential contrast against Kalk. |
| **Koper** (Copper) | `#B87333` | Primary accent | The burnished copper of a well-used beer tap. Warmer and more orange than the existing gold (#c4ae80), with more saturation and life. Used for CTAs, links, highlights, and active states. This replaces the flat gold with something that catches light. |
| **Leisteen** (Slate) | `#5C5C52` | Secondary neutral | Warm grey with an olive undertone, like the slate tiles on a village square. Used for secondary text, borders, dividers, and muted interface elements. |
| **Tarwe** (Wheat) | `#E8D5A3` | Secondary warm | Unfiltered wheat beer. A warm straw-gold for subtle backgrounds, card surfaces, hover states, and the warm midtone between Kalk and Koper. Creates depth in layered surfaces. |
| **Hop** (Hop leaf) | `#6B8F71` | Secondary accent (green) | A lighter, livelier green than Woud. Used for success states, fresh/seasonal indicators, and decorative green moments. The green of a hop vine in summer. |

**Semantic Colors:**

| State | Color | Hex |
|-------|-------|-----|
| Success | Hop | `#6B8F71` |
| Warning | Koper (lightened) | `#D4944D` |
| Error | Roest (Rust) | `#A63D2F` |
| Info | Woud (lightened) | `#3D6B5A` |

**60/30/10 Distribution:**
- **60% -- Kalk** (#F5F0E8): dominant background surface. The walls of the room.
- **30% -- Woud** (#2D4A3E) + **Eik** (#2C2416): structural dark. Navigation, footer, text, section backgrounds that anchor the page.
- **10% -- Koper** (#B87333) + **Tarwe** (#E8D5A3): accent warmth. CTAs, links, hover states, decorative highlights, the moments that catch your eye.

**On the existing gold (#c4ae80):** The current site's gold reads flat and desaturated on screen, especially against dark backgrounds. Koper (#B87333) is a more saturated, warmer evolution -- it has the same "burnished metal" feeling but with more depth and energy. Tarwe (#E8D5A3) captures the lighter straw-gold for softer applications. Together, they provide more range than a single gold value.

### Spacing Philosophy

Spacing should create rhythm, not uniformity. Alternate between tight, information-dense sections (menu listings, opening hours, contact details) and generous breathing sections (atmospheric photography, seasonal highlights, the story). The mental model is a well-set table: plates and glasses close together where needed, but plenty of room to lean back.

- Section spacing: generous but not luxurious. Enough to feel distinct, not so much it feels empty.
- Within-section spacing: tighter grouping for related elements (menu items, card clusters), wider gaps between conceptual shifts.
- Asymmetric vertical rhythm: not every section needs the same padding. A photo interlude can have less vertical space than a text-heavy about section.

---

## 6. Voice and Tone

### Voice Attributes

**Direct, not decorated**
"We're open tonight from five" -- not "We cordially invite you to join us for an evening of culinary delight." Bij Wout speaks in short, clear sentences. The owner is talking to you across the bar, not reading from a script.

**Warm, not effusive**
"Come eat with us" -- not "We CAN'T WAIT to see you!!! Your table is ready!!!" Warmth comes from ease and familiarity, not exclamation marks or forced enthusiasm. The tone assumes you are already welcome; it does not need to prove it.

**Specific, not vague**
"Today's soup is celeriac with roasted hazelnuts" -- not "We serve seasonal dishes made with love." Name the thing. Name the ingredient. Name the farmer if you can. Specificity is what separates genuine local sourcing from marketing copy.

**Casual-confident, not sloppy**
"We pick our beers the way you pick your favorites -- by trying everything" -- not "Our sommelier curates an evolving selection of artisanal craft brews." The vocabulary is everyday Dutch, the sentence structure is relaxed, but the content shows someone who knows what they are talking about.

**Locally rooted, not parochial**
References to Moergestel, Brabant, and the region should feel natural and specific, not like place-name-dropping for SEO. "The asparagus comes from Loon op Zand" works. "We proudly serve the finest Brabant regional produce" does not.

### Banned Phrases

These are category cliches that make every restaurant sound identical. Never use them:

- "Met passie bereid" (prepared with passion)
- "Culinaire beleving" (culinary experience)
- "Onze chef" (our chef) -- Wout is not a "chef," he is the owner who cooks
- "Unieke combinatie van..." (unique combination of...)
- "Welkom bij..." as a page header (welcome to...) -- you are already here
- "Laat u verrassen" (let yourself be surprised)
- "Van het land naar uw bord" (from farm to your plate)
- "Gezellig tafelen" -- the word "gezellig" is too loaded and too easy; show gezelligheid, do not name it
- Any English buzzwords ("farm-to-table," "slow food," "craft") when Dutch alternatives exist
- Superlatives without substance ("het beste," "de lekkerste")

---

## 7. Photography and Imagery Direction

### Style

**Documentary-warm.** Every photo should feel like it was taken by a friend with a good camera, not a food stylist with a light kit. Golden-hour warmth is the default light temperature. Natural light, shallow depth of field, real moments.

### Subjects (prioritized)

1. **The pour and the plate** -- actual dishes and drinks as they leave the kitchen or tap, not styled compositions. A biertje with condensation. A bord stamppot with the spoon already in it. The edge of a cutting board with prep scraps.
2. **The room** -- the bar, the terrace on the square, a table set for dinner, the blackboard menu. These establish the spatial feeling of Bij Wout.
3. **The hands** -- Wout pulling a tap, writing on the chalkboard, plating a dish. Hands are more intimate than portraits and sidestep the "stock photo smile" problem.
4. **The village** -- Moergestel's square, the church tower, the bike rack outside. Place-setting shots that ground Bij Wout in its location.

### What to avoid

- Food photography on dark/black backgrounds (that is the old site's aesthetic and reads as fine dining)
- Overhead flat-lay compositions (Instagram cliche)
- Empty restaurants (they look closed)
- Anything that looks styled, propped, or art-directed
- Portraits where the subject is looking at the camera and smiling (too posed -- candid is better)

### Color Treatment

Photos should be warm-graded to match the Kalk/Koper palette: slightly lifted shadows (never crushing to black), warm highlights, overall golden warmth. Not heavily filtered -- just consistently warm. The photos should feel like they belong on the same cream-colored surface.

---

## 8. Logo Usage

The existing "Bij WOUT" wordmark is a clean, dark logotype with "Lokaal Genieten" as a tagline. On the website:

- Use the logo as-is on light (Kalk) backgrounds
- Prepare a light/reversed version for use on Woud backgrounds
- The logo should never compete with the content -- it functions as a signature, not a billboard
- Minimum clear space: the height of the "W" on all sides
- The "Lokaal Genieten" tagline may appear separately from the logo in accent typography (Caveat) where appropriate

---

## 9. Texture and Material References

To achieve the "Village Hearth" aesthetic digitally:

- **Warm surfaces:** Background sections should occasionally use a subtle warm noise texture (2-4% opacity) over Kalk to prevent flat digital sterility. Think plaster wall, not smooth drywall.
- **Chalkboard moments:** The Woud (dark green) can serve as a chalkboard surface for specials, seasonal highlights, or callout sections. Pair with Caveat typography in Kalk or Tarwe for the handwritten-on-slate feeling.
- **Wood grain:** Consider subtle wood-grain texture for card backgrounds or section dividers -- not a full photographic texture, but a hint of organic grain.
- **Border treatments:** Prefer slightly irregular or hand-drawn-feeling borders over perfectly geometric ones. A 1px solid line in Leisteen with slight opacity variation reads more naturally than a razor-sharp rule.

---

## 10. Summary for Downstream Agents

| Decision | Value |
|----------|-------|
| Aesthetic Archetype | Village Hearth |
| DESIGN_VARIANCE | 5 |
| MOTION_INTENSITY | 4 |
| VISUAL_DENSITY | 4 |
| Display Font | Lora (Bold 700) |
| Body Font | Source Serif 4 (Regular 400, Semibold 600) |
| Accent Font | Caveat (Regular 400, Bold 700) |
| Dominant BG | Kalk #F5F0E8 |
| Primary Dark | Eik #2C2416 |
| Primary Structural | Woud #2D4A3E |
| Primary Accent | Koper #B87333 |
| Secondary Neutral | Leisteen #5C5C52 |
| Secondary Warm | Tarwe #E8D5A3 |
| Secondary Green | Hop #6B8F71 |
| Error | Roest #A63D2F |
| Voice | Direct, warm, specific, casual-confident, locally rooted |
| Photography | Documentary-warm, golden hour, real moments, never styled |
| Anti-reference | Dark/moody fine dining, white SaaS minimalism, rustic cosplay, Horeca templates |
