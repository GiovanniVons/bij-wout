# Wireframes
**Phase:** 1
**Agent:** ux-architect
**Date:** 2026-03-25
**Status:** draft

---

## Content Constraints (for Phase 2 handoff)

| Element | Max Length | Notes |
|---------|-----------|-------|
| Hero headline | ~5-6 words | Must fit single line at display size |
| Section headlines | ~6-8 words | Clear, benefit-driven |
| CTA buttons | 2-3 words | "Reserveren", "Bekijk Menu", "Bel Ons" |
| Body paragraphs per section | 1-2 | Keep it scannable, brasserie not essay |
| Menu item descriptions | ~8-12 words | Ingredient list, not prose |
| About page paragraphs | 3-5 | Storytelling needs room to breathe |
| Card/highlight headlines | ~4-5 words | Quick-scan blocks |

---

## Global Elements

### Header

**Structure:**
```
+-------------------------------------------------------------------+
|  [Logo]        Menu    Over Ons    Groepen    Maandagavond    [Reserveren] |
+-------------------------------------------------------------------+
```

- **Logo:** Left-aligned. Links to Home. Text mark or logomark depending on brand direction.
- **Nav items:** Center or right-aligned. Text links, no dropdowns. 4 items + 1 CTA button.
- **CTA button:** "Reserveren" -- visually distinct (filled button, contrasting color). Links to `/reserveren`.
- **Behavior:** Sticky on scroll. Hide on scroll-down, reveal on scroll-up (saves vertical space on mobile).
- **Active state:** Current page highlighted in nav.

**Mobile (< 768px):**
```
+--------------------------------------+
|  [Logo]              [Reserveren] [hamburger] |
+--------------------------------------+
```
- Hamburger menu (right). "Reserveren" button stays visible next to hamburger -- never hidden behind the menu.
- Hamburger opens full-screen overlay with large tap targets (min 48px height).
- Overlay includes: Menu, Over Ons, Groepen, Maandagavond, Reserveren, phone number.

### Footer

**Structure:**
```
+-------------------------------------------------------------------+
|                                                                     |
|  [Logo / Brand mark]                                                |
|  Bij Wout -- Lokaal Genieten                                        |
|                                                                     |
|  +------------+  +--------------+  +----------------+              |
|  | Navigatie  |  | Contact      |  | Openingstijden |              |
|  |            |  |              |  |                |              |
|  | Menu       |  | Sint Jans-   |  | Ma: 10-23     |              |
|  | Over Ons   |  |  plein 7     |  | Di: Gesloten  |              |
|  | Groepen    |  | 5066 AR      |  | Wo-Do: 10-23  |              |
|  | Maandag-   |  |  Moergestel  |  | Vr-Za: 10-23  |              |
|  |  avond     |  | 013 850 8300 |  | Zo: 10-23     |              |
|  | Reserveren |  | info@bijwout |  |                |              |
|  +------------+  +--------------+  +----------------+              |
|                                                                     |
|  [Instagram]  [Facebook]                                            |
|                                                                     |
|  (c) Bij Wout 2026  .  Privacy  .  Cookiebeleid                    |
+-------------------------------------------------------------------+
```

- 3-column grid on desktop, stacks vertically on mobile.
- Kitchen hours note: "Keuken: 11:00-20:00 (vr-za tot 20:30)" below the hours table.
- Social icons: Instagram + Facebook.

**Mobile:** Single column stack. Navigation links, then contact, then hours. Full width.

### GuestPlan Widget

GuestPlan provides its own floating reservation button. No custom sticky bottom bar needed. The header "Reserveren" button and GuestPlan's native CTA cover all reservation entry points.

---

## Page: Home (`/`)

**Primary action:** Reserve a table
**Secondary action:** Explore the menu
**Page purpose:** First impression. Communicate warmth, quality, and personality in seconds. Funnel visitors toward menu and reservation.

### Section 1: Hero

```
+-------------------------------------------------------------------+
|                                                                     |
|                    [Full-width hero image]                           |
|                    Interior / atmosphere shot                       |
|                                                                     |
|              +----------------------------+                        |
|              |                            |                        |
|              |   HEADLINE (~5 words)      |                        |
|              |   Subline (~12-15 words)   |                        |
|              |                            |                        |
|              |   [Bekijk Menu]  [Reserveren] |                     |
|              |                            |                        |
|              +----------------------------+                        |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** 85-100vh on desktop, 75-85vh on mobile.
- **Image:** Full-bleed background. Interior shot showing warmth and atmosphere. Overlay/scrim for text readability.
- **Content:** Headline (positioning statement -- warm, personal, Moergestel), subline (one sentence about what Bij Wout is), two CTA buttons.
- **Buttons:** "Bekijk Menu" (secondary/outline) + "Reserveren" (primary/filled). Side by side on desktop, stacked on mobile.
- **Layout:** Content centered or left-aligned over image, depending on brand direction.
- **Interaction:** Subtle parallax on background image (optional, brand dependent). No auto-play video.

**Mobile:** Image crops to portrait ratio. Text block at bottom third with semi-transparent background. Buttons stack vertically, full width.

**Content constraints:**
- Headline: max 5-6 words
- Subline: max 15-20 words (1 sentence)
- 2 CTA buttons, max 2-3 words each

### Section 2: Introduction Strip

```
+-------------------------------------------------------------------+
|                                                                     |
|   Short intro paragraph (2-3 sentences about Bij Wout)              |
|   Sets the tone: warm, personal, quality                            |
|                                                                     |
|   [Open vandaag: 10:00 - 23:00 . Keuken tot 20:00]                 |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven (compact).
- **Content:** 2-3 sentence elevator pitch. Below it: today's opening hours (dynamic or static with day highlighting).
- **Layout:** Centered text, narrow container (max-width ~700px). Generous vertical padding.
- **Purpose:** Bridge between hero (emotional) and content blocks (informational). Grounds the visitor.

**Content constraints:**
- 2-3 sentences, max 40 words total
- Hours line: factual, no fluff

### Section 3: Three Highlight Cards

```
+-------------------------------------------------------------------+
|                                                                     |
|   SECTION HEADLINE (~6 words)                                       |
|                                                                     |
|   +--------------+  +--------------+  +--------------+             |
|   |  [Image]     |  |  [Image]     |  |  [Image]     |             |
|   |              |  |              |  |              |             |
|   |  Lunch       |  |  Diner       |  |  Craft Bier  |             |
|   |  Tagline     |  |  Tagline     |  |  Tagline     |             |
|   |  [Link ->]   |  |  [Link ->]   |  |  [Link ->]   |             |
|   +--------------+  +--------------+  +--------------+             |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven.
- **Content:** Three cards highlighting core offerings: Lunch, Dinner, Craft Beer. Each has an image, short tagline (1 line), and a link to the relevant Menu section.
- **Layout:** 3-column grid on desktop. Cards have images (aspect ratio ~4:3 or 3:2) with text below.
- **Links:** "Bekijk lunchkaart ->" / "Bekijk dinerkaart ->" / "Onze bieren ->" -- deep links to Menu page sections.
- **Interaction:** Subtle hover effect (image scale, shadow lift). Entire card is clickable.

**Mobile:** Single column stack (cards go full width, one after another).

**Content constraints:**
- Section headline: max 6 words
- Card titles: 1-2 words each
- Card taglines: max 10 words each
- Card link text: max 3-4 words

### Section 4: Monday Special Callout

```
+-------------------------------------------------------------------+
|  [Background: warm color or texture, NOT white]                     |
|                                                                     |
|   +----------------------------------------------+                 |
|   |                                              |                 |
|   |   MAANDAGAVOND                               |                 |
|   |   3-gangen menu . EUR 23,50 p.p.            |                 |
|   |                                              |                 |
|   |   Short description (1-2 sentences)          |                 |
|   |                                              |                 |
|   |   [Meer Info]  [Reserveer Maandag]            |                 |
|   |                                              |                 |
|   +----------------------------------------------+                 |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven, generous padding.
- **Content:** Promotional banner for the Monday deal. Headline, price, 1-2 sentence description, two CTAs.
- **Layout:** Full-bleed with a contrast background (dark, textured, or brand accent color). Content centered, narrow width.
- **CTAs:** "Meer Info" links to `/maandagavond`. "Reserveer Maandag" links to `/reserveren`.
- **Visual break:** This section should feel visually different from the neutral sections around it -- a deliberate pause.

**Mobile:** Same layout, buttons stack vertically.

**Content constraints:**
- Headline: 1-2 words ("Maandagavond")
- Price: factual ("3-gangen menu . EUR 23,50 p.p.")
- Description: max 25 words
- 2 CTAs, max 3 words each

### Section 5: About Teaser

```
+-------------------------------------------------------------------+
|                                                                     |
|   +----------------------+  +--------------------------+           |
|   |                      |  |                          |           |
|   |   [Photo of Wout     |  |  SECTION HEADLINE        |           |
|   |    or interior]      |  |                          |           |
|   |                      |  |  Short paragraph about   |           |
|   |                      |  |  Wout and the brasserie  |           |
|   |                      |  |  (3-4 sentences)         |           |
|   |                      |  |                          |           |
|   |                      |  |  [Lees Meer ->]          |           |
|   |                      |  |                          |           |
|   +----------------------+  +--------------------------+           |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven.
- **Content:** Teaser of the About page. Photo of Wout (or the kitchen/interior) alongside a brief intro to his story. Link to full story.
- **Layout:** 2-column asymmetric (image ~45%, text ~55%) on desktop. Image left, text right (or reversed -- brand direction decides).
- **Link:** "Lees meer over Bij Wout ->" links to `/over-ons`.

**Mobile:** Image stacks above text, full width. Image aspect ratio ~16:9 or 3:2.

**Content constraints:**
- Section headline: max 6 words
- Body: 3-4 sentences, max 60 words
- Link text: max 5 words

### Section 6: Social Proof

```
+-------------------------------------------------------------------+
|                                                                     |
|   star star star star star  Google Reviews                          |
|                                                                     |
|   +--------------+  +--------------+  +--------------+             |
|   |  "Quote..."  |  |  "Quote..."  |  |  "Quote..."  |             |
|   |  -- Naam     |  |  -- Naam     |  |  -- Naam     |             |
|   +--------------+  +--------------+  +--------------+             |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven.
- **Content:** 3 Google Review quotes (curated, not live feed). Star rating displayed. Reviewer first names.
- **Layout:** 3-column on desktop, horizontal scroll or stack on mobile.
- **Interaction:** Static. No carousel auto-play.
- **Fallback:** If no Google Reviews are available at launch, this section can be replaced with a simple tagline/quote from Wout or omitted entirely.

**Mobile:** Horizontal scroll with snap points (cards peek from edge to invite scrolling) or single column stack.

**Content constraints:**
- Review quotes: max 30 words each (truncate if needed)
- Reviewer names: first name only

### Section 7: Reservation CTA Strip

```
+-------------------------------------------------------------------+
|  [Background: contrasting color]                                    |
|                                                                     |
|   HEADLINE ("Kom langs" or similar, ~4 words)                       |
|   Subline (address + phone, 1 line)                                 |
|                                                                     |
|   [Reserveren]                                                      |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Compact, generous padding.
- **Content:** Final conversion nudge before footer. Headline, address/phone one-liner, single CTA button.
- **Layout:** Centered, narrow. Contrasting background color to break from content above.
- **Purpose:** Catch visitors who scrolled the whole page and are now ready to convert.

**Mobile:** Same layout. Button full width.

**Content constraints:**
- Headline: max 4 words
- Subline: address + phone only
- 1 CTA, max 2 words

---

## Page: Menu (`/menu`)

**Primary action:** Reserve a table (after browsing)
**Secondary action:** Discover the menu depth
**Page purpose:** Full menu display. Text-based for SEO. Organized so any visitor can find what they want in seconds.

### Section 1: Page Header

```
+-------------------------------------------------------------------+
|                                                                     |
|   ONZE KAART                                                        |
|   Subline (~15 words about menu philosophy)                         |
|                                                                     |
|   [Lunch]  [Diner]  [Kinderen]  [Wisselbieren]                     |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven, compact.
- **Content:** Page title, brief menu philosophy line, in-page navigation tabs/jump links.
- **Jump links:** Anchor to each menu section below. Active state shows which section is in view (scroll-spy behavior).
- **Layout:** Centered. Jump links are a horizontal row of text links or pill buttons.

**Mobile:** Jump links become a sticky horizontal scroll bar below the header (stays visible while scrolling through menu sections).

**Content constraints:**
- Page title: 2 words ("Onze Kaart" or similar)
- Subline: max 15 words
- Jump link labels: 1-2 words each

### Section 2: Lunch Menu

```
+-------------------------------------------------------------------+
|                                                                     |
|   LUNCH                                                             |
|   "Dagelijks van 11:00 tot 15:00"                                   |
|                                                                     |
|   -- Wouts' Favorieten -----------------------------------------   |
|   Description of the concept                                        |
|   [item]      [item]      [item]            EUR 5,50 per stuk      |
|   Plus klein kopje soep                     EUR 3,50               |
|                                                                     |
|   -- Soepen -------------------------------------------------      |
|   Tomatensoep                                         EUR 7,00     |
|   gehaktballetjes | prei | room                                     |
|                                                                     |
|   Maandsoep                                           EUR 7,00     |
|                                                                     |
|   -- Tosti's ------------------------------------------------     |
|   Tosti                                               EUR 7,50    |
|   ham | kaas                                                        |
|                                                                     |
|   Boerentosti                                         EUR 11,50   |
|   ham | kaas | bacon | champignons | rode ui | spiegelei            |
|                                                                     |
|   -- Specials ------------------------------------------------     |
|   [... items ...]                                                   |
|                                                                     |
|   -- Klassiekers ---------------------------------------------     |
|   [... items ...]                                                   |
|                                                                     |
|   -- Salades -------------------------------------------------     |
|   [... items ...]                                                   |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** Single column, generous white space. Item name left-aligned, price right-aligned (classic menu layout). Description below item name in smaller/lighter text.
- **Categories:** Wouts' Favorieten, Soepen, Tosti's, Specials, Klassiekers, Salades -- each with a clear category header and visual divider.
- **Typography:** Item names in a slightly bolder weight. Descriptions in regular/lighter weight. Prices right-aligned, tabular numbers for alignment.
- **Width:** Narrow container (max ~700px) for comfortable reading.
- **Dietary indicators:** (V) for vegetarian items, clearly marked.

**Mobile:** Same single-column layout works well. No layout change needed -- just fluid text sizing.

**Content constraints:**
- Item names: as-is from client menu
- Descriptions: max 8-12 words per item
- Prices: right-aligned, consistent format (EUR X,XX)

### Section 3: Dinner Menu

Same layout structure as Lunch. Categories:
- Brood
- Huisgemaakte Soepen
- Voorgerechten (Starters)
- Hoofdgerechten (Main courses) -- note: "geserveerd met passend garnituur, friet en mayonaise"
- Salades
- Kindergerechten
- Nagerechten (Desserts)
- Speciale Koffies

**Thursday spareribs callout within dinner section:**

```
+-------------------------------------------------------------+
|  +-------------------------------------------------------+  |
|  |  DONDERDAG = SPARERIBS                                 |  |
|  |  Spareribs met friet, mayo en salade . EUR 16          |  |
|  |  [Reserveer Donderdag]                                 |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

- Inline callout box within the dinner menu, placed near the hoofdgerechten section.
- Visually distinct (background color, border, or card treatment) but not disruptive to menu flow.

**Content constraints:**
- Same as lunch section
- Thursday callout: max 15 words + 1 CTA

### Section 4: Wisselgerechten (Weekly Specials)

```
+-------------------------------------------------------------------+
|                                                                     |
|   WISSELGERECHTEN                                                   |
|   "Wisselt wekelijks -- vraag naar het menu van deze week"          |
|                                                                     |
|   Maandsoep: [Current soup]                           EUR 7,00     |
|   Voorgerecht: [Current starter]                      EUR 13,50    |
|   Hoofdgerecht: [Current main]                        EUR 29,50    |
|   Seizoensvis: [Current fish]                         EUR 25,50    |
|   Nagerecht: [Current dessert]                        EUR 8,00     |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Content:** Slot for the current weekly specials. If client can update regularly, show actual dishes. If not, show generic "ask about this week's specials" message.
- **Layout:** Could be a highlighted card or distinct section between dinner menu and craft beers.
- **Note:** This section needs a content update strategy. Discuss with client.

**Content constraints:**
- Headline: 1 word ("Wisselgerechten")
- Description: max 12 words
- Menu courses: 5 lines, max 6 words each + price

### Section 5: Craft Beer Section (Wisselbieren)

```
+-------------------------------------------------------------------+
|  [Background: slightly different tone/texture -- chalkboard feel]   |
|                                                                     |
|   ONZE BIEREN                                                       |
|   Intro paragraph about Bij Wout's beer philosophy (2 sentences)    |
|                                                                     |
|   -- Op tap ------------------------------------------------       |
|   [Beer name]          [Brewery]          [Style]    EUR X,XX      |
|   [Beer name]          [Brewery]          [Style]    EUR X,XX      |
|   [Beer name]          [Brewery]          [Style]    EUR X,XX      |
|   [... 4-6 beers ...]                                               |
|                                                                     |
|   -- Wisseltaps -----------------------------------------          |
|   "Onze wisseltaps roteren regelmatig.                              |
|    Vraag aan de bar wat er vandaag op staat."                        |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** Table-like layout for beer list (name, brewery, style, price). Use definition list or grid for responsiveness.
- **Visual distinction:** Slightly different background or section treatment to signal "this is the beer section" for enthusiasts.
- **Update strategy:** Same as wisselgerechten -- needs client input on whether they can maintain a current list.

**Mobile:** Beer list becomes card-style or stacked rows.

**Content constraints:**
- Section headline: 2 words
- Beer philosophy: max 25 words (2 sentences)
- Beer list items: name + brewery + style + price
- Fallback copy: max 20 words

### Section 6: Menu CTA Strip

```
+-------------------------------------------------------------------+
|                                                                     |
|   "Zin gekregen?" (~3 words)                                        |
|   [Reserveren]                                                      |
|                                                                     |
+-------------------------------------------------------------------+
```

- After browsing the full menu, a simple conversion CTA. Centered, compact, friendly tone.
- **This is critical.** A visitor who just read the entire menu is primed to book.

**Content constraints:**
- Headline: max 3 words
- 1 CTA, max 2 words

---

## Page: Over Ons (`/over-ons`)

**Primary action:** Build trust, then reserve
**Secondary action:** Feel the personality of Bij Wout
**Page purpose:** The trust-building page. Wout's story is the differentiator. This page turns "might go" into "want to go."

### Section 1: Hero / Page Header

```
+-------------------------------------------------------------------+
|                                                                     |
|   +----------------------+  +--------------------------+           |
|   |                      |  |                          |           |
|   |   [Portrait of Wout  |  |  HEADLINE (~5 words)     |           |
|   |    in the kitchen    |  |                          |           |
|   |    or at the bar]    |  |  Opening paragraph       |           |
|   |                      |  |  about how Bij Wout      |           |
|   |                      |  |  came to be (3-4         |           |
|   |                      |  |  sentences)              |           |
|   |                      |  |                          |           |
|   +----------------------+  +--------------------------+           |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 2-column asymmetric. Large portrait photo (left) with text (right).
- **Content:** Wout's origin story. Why he started. What drives him. Personal, authentic.
- **Photo:** Portrait of Wout is essential here. Not a food photo -- the person.

**Mobile:** Image stacks above text, full width. Portrait crops to a taller ratio.

**Content constraints:**
- Headline: max 5 words
- Opening paragraph: 3-4 sentences, ~60 words

### Section 2: The Story (continued)

```
+-------------------------------------------------------------------+
|                                                                     |
|   +--------------------------+  +----------------------+           |
|   |                          |  |                      |           |
|   |  Second part of the      |  |  [Photo: interior    |           |
|   |  story. The philosophy.  |  |   or kitchen scene]  |           |
|   |  The ingredients.        |  |                      |           |
|   |  The neighborhood.       |  |                      |           |
|   |  (3-4 sentences)         |  |                      |           |
|   |                          |  |                      |           |
|   +--------------------------+  +----------------------+           |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** Reversed 2-column (text left, image right) to create visual rhythm with Section 1.
- **Content:** Deeper into the philosophy. What makes Bij Wout different. The neighborhood connection. Ingredient sourcing.
- **Photo:** Kitchen scene, interior detail, or food preparation.

**Mobile:** Text stacks above image.

**Content constraints:**
- Body: 3-4 sentences, ~60 words

### Section 3: Values / Pillars

```
+-------------------------------------------------------------------+
|                                                                     |
|   +-------------+  +-------------+  +-------------+               |
|   |  [Icon]     |  |  [Icon]     |  |  [Icon]     |               |
|   |  Eerlijk    |  |  Persoonlijk|  |  Lokaal      |               |
|   |  2 sentences|  |  2 sentences|  |  2 sentences |               |
|   +-------------+  +-------------+  +-------------+               |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 3-column grid. Each column has an icon/illustration, a one-word value, and 2 sentences of explanation.
- **Content:** Core values that define Bij Wout. Examples: Eerlijk (honest ingredients), Persoonlijk (Wout's hands-on approach), Lokaal (community anchor).
- **Note:** Icons should feel hand-drawn or artisanal, not corporate. Or skip icons and use just typography if brand direction is minimal.

**Mobile:** Stack vertically or use a 2+1 grid.

**Content constraints:**
- Value labels: 1 word each
- Value descriptions: max 20 words each (2 short sentences)

### Section 4: Reservation CTA

Same CTA strip pattern as Home Section 7. Headline, subline, single button.

**Content constraints:**
- Headline: max 4 words
- 1 CTA, max 2 words

---

## Page: Groepen (`/groepen`)

**Primary action:** Submit a group inquiry or call
**Secondary action:** Understand group dining options
**Page purpose:** Convert group planners. Clear info on what's possible, how much it costs (ballpark), and how to book.

### Section 1: Page Header

```
+-------------------------------------------------------------------+
|                                                                     |
|   [Hero image: group dining scene or long table setup]              |
|                                                                     |
|   HEADLINE (~5 words)                                               |
|   Subline: voor groepen vanaf 10 personen                           |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Smaller hero (40-50vh). Image of a group dining setup or a beautifully set long table.
- **Content:** Page title + qualifier ("voor groepen vanaf 10 personen").

**Mobile:** Image at ~30vh. Text overlaid or below image.

**Content constraints:**
- Headline: max 5 words
- Subline: max 8 words

### Section 2: Group Options

```
+-------------------------------------------------------------------+
|                                                                     |
|   Intro paragraph (what Bij Wout offers for groups)                 |
|                                                                     |
|   +--------------+  +--------------+  +--------------+             |
|   |              |  |              |  |              |             |
|   |  3-Gangen    |  |  Walking     |  |  BBQ         |             |
|   |  Menu        |  |  Dinner      |  |  (zomer)     |             |
|   |              |  |              |  |              |             |
|   |  Kort omschr.|  |  Kort omschr.|  |  Kort omschr.|             |
|   |              |  |              |  |              |             |
|   |  Vanaf EUR XX|  |  Vanaf EUR XX|  |  Vanaf EUR XX|             |
|   |  p.p.        |  |  p.p.        |  |  p.p.        |             |
|   |              |  |              |  |              |             |
|   +--------------+  +--------------+  +--------------+             |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 3-column card grid. Each card = group option with name, brief description, starting price.
- **Content:** Three group dining formats (3-course, walking dinner, BBQ summer). Description should set expectations.
- **Note:** If client cannot provide ballpark pricing, cards should say "Prijs op aanvraag" but push for at least indicative ranges.

**Mobile:** Stack vertically.

**Content constraints:**
- Intro paragraph: max 30 words
- Card titles: 2-3 words each
- Card descriptions: max 20 words each
- Pricing: "Vanaf EUR XX p.p." or "Prijs op aanvraag"

### Section 3: How It Works

```
+-------------------------------------------------------------------+
|                                                                     |
|   HOE WERKT HET?                                                    |
|                                                                     |
|   1. Neem contact op          ->  We bespreken jullie wensen       |
|   2. Kies een arrangement     ->  We stellen een menu samen        |
|   3. Geniet met je groep      ->  Wij regelen de rest              |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 3-step horizontal flow on desktop, vertical stack on mobile.
- **Content:** Simple 3-step process to reduce "how do I even start?" friction.
- **Tone:** Reassuring. "We make it easy."

**Content constraints:**
- Section headline: 3 words
- Each step: label (max 4 words) + description (max 6 words)

### Section 4: Inquiry Form

```
+-------------------------------------------------------------------+
|                                                                     |
|   +--------------------------+  +--------------------------+       |
|   |                          |  |                          |       |
|   |  NEEM CONTACT OP         |  |  Of bel direct:          |       |
|   |                          |  |  013 850 8300            |       |
|   |  Naam          [_______] |  |                          |       |
|   |  Email         [_______] |  |  [Photo: group setting   |       |
|   |  Telefoon      [_______] |  |   or happy diners]       |       |
|   |  Datum         [_______] |  |                          |       |
|   |  Aantal personen [_____] |  |                          |       |
|   |  Opmerkingen   [_______] |  |                          |       |
|   |               [_______]  |  |                          |       |
|   |                          |  |                          |       |
|   |  [Verstuur Aanvraag]     |  |                          |       |
|   |                          |  |                          |       |
|   +--------------------------+  +--------------------------+       |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 2-column. Left: inquiry form. Right: phone number (prominent) + supporting image.
- **Form fields:** Naam, Email, Telefoon, Datum, Aantal personen, Opmerkingen. All fields simple, no complex logic.
- **Phone:** Displayed large and prominently. Many group planners prefer to call. `tel:` link on mobile.
- **Submit button:** "Verstuur Aanvraag" -- clear action label.
- **Form behavior:** On submit, show confirmation message ("Bedankt! We nemen binnen 24 uur contact op."). No redirect.

**Mobile:** Phone number and call CTA above the form (faster for mobile callers). Form goes full width below.

**Content constraints:**
- Form headline: max 3 words
- Form labels: 1-2 words each
- Submit button: max 2 words
- Confirmation message: max 15 words

---

## Page: Maandagavond (`/maandagavond`)

**Primary action:** Reserve for Monday
**Secondary action:** Understand the deal
**Page purpose:** Lightweight promotional landing page. Social media link target. Convince and convert in one scroll.

### Section 1: Hero / Promotion Header

```
+-------------------------------------------------------------------+
|  [Background: warm, inviting -- food photo or atmospheric]          |
|                                                                     |
|   MAANDAGAVOND BIJ WOUT                                             |
|   3-gangen menu . EUR 23,50 per persoon                             |
|                                                                     |
|   [Reserveer Maandag]                                               |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** 50-60vh. Atmospheric background image.
- **Content:** Deal name, price, single CTA. No clutter.
- **CTA:** Links to `/reserveren`.

**Mobile:** Image at ~40vh. Content centered below.

**Content constraints:**
- Headline: max 4 words
- Price line: factual, max 8 words
- 1 CTA, max 2-3 words

### Section 2: What You Get

```
+-------------------------------------------------------------------+
|                                                                     |
|   WAT KRIJG JE?                                                     |
|                                                                     |
|   Een 3-gangen menu met seizoensgebonden gerechten,                 |
|   samengesteld door Wout. Het menu wisselt regelmatig               |
|   zodat er altijd iets nieuws te ontdekken valt.                    |
|                                                                     |
|   +---------------------------------------------+                  |
|   |  Voorgerecht: [Current starter or generic]   |                  |
|   |  Hoofdgerecht: [Current main or generic]     |                  |
|   |  Nagerecht: [Current dessert or generic]     |                  |
|   +---------------------------------------------+                  |
|                                                                     |
|   "Menu wisselt per seizoen"                                        |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Content:** Explain the deal. If current menu is available, show it. If not, describe the format.
- **Layout:** Centered text, narrow container. Menu courses in a simple card or list.

**Content constraints:**
- Section headline: max 3 words
- Description: 2-3 sentences, max 40 words
- Menu courses: 3 lines (one per course), max 6 words each

### Section 3: Practical Info

```
+-------------------------------------------------------------------+
|                                                                     |
|   PRAKTISCHE INFO                                                   |
|                                                                     |
|   check  Elke maandag (behalve feestdagen)                         |
|   check  Reserveren verplicht                                       |
|   check  EUR 23,50 per persoon                                     |
|   check  Drankjes niet inbegrepen                                   |
|   check  Vegetarische optie beschikbaar                             |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** Simple checklist/bullet list. Clear, scannable.
- **Content:** Key terms of the deal. No ambiguity.

**Content constraints:**
- Section headline: 2 words
- Each bullet: max 6 words
- 4-5 bullets total

### Section 4: Reservation CTA

```
+-------------------------------------------------------------------+
|  [Background: contrasting]                                          |
|                                                                     |
|   HEADLINE (~4 words)                                               |
|   [Reserveer Maandag]    [Bel: 013 850 8300]                       |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Content:** Final CTA with both booking link and phone number.
- **Two actions:** "Reserveer Maandag" (link) + phone number (tel: link).

**Mobile:** Buttons stack vertically.

**Content constraints:**
- Headline: max 4 words
- 2 CTAs, max 3 words each

---

## Page: Reserveren & Contact (`/reserveren`)

**Primary action:** Complete a reservation
**Secondary action:** Contact Bij Wout (phone, email, directions)
**Page purpose:** Conversion page. The GuestPlan widget does the heavy lifting. Supporting content reduces friction.

### Section 1: Reservation Widget

```
+-------------------------------------------------------------------+
|                                                                     |
|   RESERVEREN                                                        |
|   Subline: "Boek direct een tafel"                                  |
|                                                                     |
|   +---------------------------------------------+                  |
|   |                                             |                  |
|   |         [GuestPlan Widget Embed]             |                  |
|   |                                             |                  |
|   |                                             |                  |
|   +---------------------------------------------+                  |
|                                                                     |
|   Liever bellen? 013 850 8300                                       |
|   Groep van 10+? Bekijk onze groepsarrangementen.                   |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Height:** Content-driven (widget height varies).
- **Content:** Page title, widget, phone fallback, group redirect.
- **Layout:** Centered, narrow container. Widget should feel native (match brand colors if GuestPlan allows).
- **Fallback links:** Phone number for people who prefer calling. Link to `/groepen` for large groups.

**Mobile:** Widget should be responsive. Phone number as a tappable `tel:` link.

**Content constraints:**
- Page title: 1 word ("Reserveren")
- Subline: max 5 words
- Phone fallback: max 6 words + number
- Group redirect: max 8 words + link

### Section 2: Contact Information

```
+-------------------------------------------------------------------+
|                                                                     |
|   CONTACT & ROUTE                                                   |
|                                                                     |
|   +----------------------+  +--------------------------+           |
|   |                      |  |                          |           |
|   |  [Google Maps embed] |  |  Bij Wout                |           |
|   |                      |  |  Sint Jansplein 7        |           |
|   |                      |  |  5066 AR Moergestel      |           |
|   |                      |  |                          |           |
|   |                      |  |  T: 013 850 8300         |           |
|   |                      |  |  E: info@bijwout.nl      |           |
|   |                      |  |                          |           |
|   |                      |  |  Openingstijden:         |           |
|   |                      |  |  Ma: 10:00-23:00         |           |
|   |                      |  |  Di: Gesloten            |           |
|   |                      |  |  Wo-Do: 10:00-23:00      |           |
|   |                      |  |  Vr-Za: 10:00-23:00      |           |
|   |                      |  |  Zo: 10:00-23:00         |           |
|   |                      |  |                          |           |
|   |                      |  |  Keuken:                 |           |
|   |                      |  |  11:00-20:00             |           |
|   |                      |  |  (vr-za tot 20:30)       |           |
|   |                      |  |                          |           |
|   +----------------------+  +--------------------------+           |
|                                                                     |
+-------------------------------------------------------------------+
```

- **Layout:** 2-column. Left: Google Maps embed (interactive). Right: full contact details + opening hours.
- **Content:** Address, phone (tel: link), email (mailto: link), opening hours with kitchen hours note.
- **Map:** Interactive Google Maps embed with marker on Bij Wout. "Open in Google Maps" link below map for mobile navigation.

**Mobile:** Map stacks above contact info, full width. Map height ~250px.

**Content constraints:**
- Section headline: 2-3 words
- Contact details: factual, no prose
- Hours: table format, compact

---

## Responsive Behavior Summary

| Breakpoint | Behavior |
|-----------|----------|
| < 480px (small mobile) | Single column everywhere. Sticky bottom bar visible. Hero text stacks with image. Font sizes reduced but readable (min 16px body). |
| 480-768px (large mobile) | Same as small mobile but with more breathing room. Some cards may go 2-column. |
| 768-1024px (tablet) | 2-column layouts active. Header shows full nav (no hamburger). Sticky bottom bar hidden. |
| 1024px+ (desktop) | Full layouts. 3-column grids. Asymmetric sections. Max content width ~1200px with centered container. |

### Key Mobile-First Decisions

1. **Sticky bottom bar replaces header CTA on mobile.** Two buttons (call + reserve) always visible.
2. **Menu page in-page nav becomes sticky horizontal scroll.** Stays visible while scrolling through long menu content.
3. **Cards stack vertically on mobile.** No complex grid layouts that create awkward narrow cards.
4. **Hero images crop to portrait on mobile.** Ensure key content (text, faces) is visible in center crop.
5. **Forms go full width on mobile.** No side-by-side fields. One field per row.
6. **Phone numbers are always `tel:` links.** One tap to call.
7. **Maps are interactive but compact (250px height).** "Open in Maps" link for navigation.
