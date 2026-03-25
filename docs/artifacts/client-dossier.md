# Client Dossier
**Phase:** 0
**Agent:** client-dossier
**Date:** 2026-03-25
**Status:** draft

---

## Business Overview

**Name:** Bij Wout -- Lokaal Genieten
**Location:** Sint Jansplein 7, 5066 AR Moergestel, North Brabant, Netherlands
**Concept:** Neighborhood brasserie -- coffee, lunch, dinner, and drinks in a warm village-square setting
**Founded:** April 2015
**Founder:** Wout Huijben (41)
**Price tier:** Mid-range (mains ~€16-23, 3-course set menu €23.50)
**Capacity:** Sits beside the church on Sint Jansplein; indoor dining + summer terrace
**Closed:** Tuesdays

## Unique Value Proposition

Bij Wout is Moergestel's living room -- a one-stop neighborhood venue that serves everything from morning coffee and homemade seasonal pastries to full dinners with rotating craft beers, all built on regional products and genuine hospitality. Where competitors in nearby Oisterwijk position themselves as destination-dining or upscale casual, Bij Wout leans into village-square intimacy: the owner knows your name, the dishes change with the season, and the beer taps rotate from neighborhood breweries. Ranked #1 of 9 restaurants in Moergestel on TripAdvisor (4.4/5) and 9/10 on Google (588 reviews).

## Founder / Team Background

**Wout Huijben** grew up in Moergestel in a four-child family. He studied traffic engineering (VWO at Odulphus Lyceum Tilburg, HBO at NHTV Breda), but from age 17 he worked at Speciaal Biercafe de Veerkes on the same village square. During university he spent more time behind bars (the hospitality kind) than behind desks.

In January 2011 he became operations manager at Grand Cafe de Zwaan in Hilvarenbeek, where he learned the full scope of running a restaurant. In 2014 he attended the Grolsch Hospitality Academy (financial management, marketing, personnel). He opened Bij Wout on April 3, 2015, right across the square from De Veerkes where he started.

His philosophy: "My ambitions and qualities didn't belong in an office." Bij Wout is his daily celebration of regional products and village warmth.

## Target Audiences

### Primary
**Moergestel locals (30-65)** -- Couples, families, and friend groups who want a reliable neighborhood spot for everything from a weekday lunch to a Saturday dinner. They value familiarity (the owner greets them by name), seasonal menus, and not having to drive to Oisterwijk or Tilburg for a quality meal. Mid-range budget, frequent visitors.

### Secondary
- **Oisterwijk/Hilvarenbeek day-trippers** -- People exploring the Brabant countryside who discover Bij Wout via Google or TripAdvisor. They come for the terrace on the village square and the local charm.
- **Craft beer enthusiasts** -- The "Wisselbieren" rotating taps from neighborhood breweries attract beer lovers (Untappd presence confirms this audience).
- **Group diners** -- Birthday parties, corporate gatherings, family celebrations. Bij Wout accommodates groups of 10+ with pre-set menus.
- **Monday deal-seekers** -- The €23.50 three-course Monday evening menu draws regulars looking for weekly value.

## Current Digital Presence

### Website (bijwout.nl)
**Platform:** Weebly (template-based builder)
**Overall impression:** Functional but dated. The site serves its purpose (menu info, reservations, contact) but feels like a 2015 template that hasn't evolved. Dark color scheme with gold accents -- creates a warm mood but the Weebly layout constraints are visible. Menus are displayed as PNG images rather than text, which kills SEO, accessibility, and mobile readability. Navigation is flat (no hamburger on mobile detected, relies on Weebly's default behavior). No structured data, no canonical tags, no privacy policy, no cookie consent. The "lokaal genieten" brand promise exists but isn't visually reinforced through photography or storytelling.

**What works:** Google Analytics is in place. OG tags are set. Sitemap exists with 18 entries. Alt text is present on all 9 images. HTTPS via Cloudflare.

**What doesn't:** No H1 on the homepage. Menus as images. Six different fonts loaded (Patua One, Montserrat, Open Sans, Lato, Proxima Nova, and a social icon font) -- typical of Weebly template bloat. Color palette is entirely grays (#333, #999, #ccc) with one red accent (#e74c3c) -- the gold accent from the visual design doesn't register in the CSS. No lazy loading, no WebP images (all PNG). No structured data for a restaurant. No Twitter card. Booking system widget (GuestPlan) is embedded but not prominently featured.

### Social Media
- **Instagram:** @bijwout -- 1,641 followers. Active posting.
- **Facebook:** facebook.com/bijwout -- 3,482 likes, 3,700+ check-ins. Active.
- **TripAdvisor:** Ranked #1 in Moergestel, 4.4/5 rating
- **Untappd:** Present (beer-focused platform -- confirms craft beer curation)
- **Google Business:** 9/10 rating, 588 reviews

### Review Themes (aggregated)
**Praise:** Friendly staff and warm atmosphere (mentioned repeatedly). Plenty of menu choice. Smooth service. "Cozy atmosphere, extremely friendly and nice staff, delicious food." Small plates are well-cared-for. Good variety.
**Criticism:** Can get very busy (especially weekends and summer terrace). Limited detail -- very few negative patterns in aggregated reviews.

## Current Site Audit

**Audited:** 2026-03-25 | **URL:** https://www.bijwout.nl | **Method:** Automated (site_audit.py)

### Performance Baseline
PageSpeed data unavailable (API rate-limited during audit). Manual testing recommended for baseline.

### SEO & Meta
- **Title:** "BIJ WOUT - LOKAAL GENIETEN - Home" (33 chars -- OK)
- **Description:** "Bij Wout is een laagdrempelige horecagelegenheid aan het Sint-Jansplein in Moergestel. Een plek waar gastvrijheid en warmte een belangrijke basis zijn." (151 chars -- OK)
- **Canonical:** missing
- **Open Graph:** 5 tags present (og:site_name, og:title, og:description, og:image, og:url)
- **Twitter Card:** missing
- **Structured Data:** None detected
- **robots.txt:** present
- **sitemap.xml:** present (18 entries)
- **hreflang:** none

### Heading Structure
**Counts:** h2: 4
```
  H2: WELKOM!
  H2: Donderdag = spareribs
  H2: Maandagavond actie
  H2: Bij Wout Impressie
```

### Technical Stack
| Category | Detected |
|----------|----------|
| CMS | Weebly |
| Framework | jQuery, Bootstrap |
| Analytics | Google Analytics (GA4) |
| Booking | GuestPlan (widget) |
| CDN | Cloudflare |
| Cookie Consent | None detected |

- **HTTPS:** Yes
- **Privacy Policy:** Not found
- **Modern Images:** 0 of 9 use WebP/AVIF
- **Lazy Loading:** 0 of 9 images have loading="lazy"

### Visual Identity (Extracted)
**Fonts detected:** Lato, Montserrat, Open Sans, Patua One, ProximaNova, ProximaNova-Semibold, wsocial
**Colors detected:** `#333333` `#cccccc` `#eeeeee` `#aaaaaa` `#999999` `#f4f4f4` `#dddddd` `#ced0d2` `#363b3e` `#9ba0a3` `#666666` `#e74c3c` `#50575b` `#e3e5e7` `#a9a9a9`
**Favicon:** Present

### Accessibility Snapshot
- Images without alt text: 0 of 9
- Form inputs without labels: 0 of 0
- Language attribute: present -- "nl"
- Skip navigation: missing

### Content Inventory
**Navigation:** No `<nav>` element detected
**Links:** 23 internal, 5 external
**Images:** 9 total (png: 9)

### Benchmarks to Beat
New build must beat: PageSpeed needs baseline measurement. Current site has zero modern image formats, zero lazy loading, no structured data, no H1 -- the bar is low but we should target 90+ across the board.

## Competitive Landscape

### Direct Competitors

**1. Brasserie Ome Jan (Oisterwijk)**
brasserieomejan.nl -- Modern Elementor site with warm cream/beige tones and League Spartan headings. Forest-setting photography. "Where it always feels like coming home" positioning. Strong: downloadable menus (Dutch + English), reservation CTA, family-story narrative. Weak: some placeholder "Lorem ipsum" content still visible, heavy image load. Direct competitor in the "warm brasserie" space but positioned more upscale with a nature/forest theme.

**2. Seasons Oisterwijk**
seasons-oisterwijk.nl -- Professional but conventional restaurant site. Carousel galleries, bold typography (font-weight: 900), event versatility (weddings, corporate). Positions as upscale-casual with seasonal ingredients. Strong: clear event categorization, reservation CTA. Weak: heavy JS dependencies, limited accessibility. More upscale than Bij Wout -- different price segment.

**3. De Veerkes (Moergestel)**
Sint Jansplein 3 -- literally across the square from Bij Wout. Speciaal biercafe with 80+ craft beers. TripAdvisor #8 in Moergestel. More bar than restaurant -- drinks and small bites. Not a direct dining competitor but overlaps on the craft beer and village-square terrace crowd. Wout himself worked here before opening Bij Wout. No significant web presence detected.

**4. Vuur & Vlam (Oisterwijk)**
vuurenvlam-oisterwijk.nl -- Grill-focused restaurant on De Lind (Oisterwijk's main strip). Grilled meats, fish, pasta, fajitas. More of a "fun night out" vibe vs. Bij Wout's warmth. Site was unreachable during audit.

### Aspirational References

**1. Well-designed village brasseries** -- Sites like Brasserie Ome Jan show the direction: warm photography, seasonal storytelling, easy reservation flow. Bij Wout needs to surpass this with personality rather than matching their polish.

**2. Craft beer/local-produce restaurants** -- Venues that celebrate their supplier relationships and rotating taps (a la gastropub culture) are the natural aesthetic peer group. The Untappd presence suggests Wout already thinks this way.

### White Space

Every competitor in the Moergestel/Oisterwijk area either looks like a Weebly/Wix template (De Veerkes, smaller cafes) or an overproduced Elementor site (Brasserie Ome Jan, Seasons). Nobody occupies the **honest village warmth + craft curation** lane online. Bij Wout's story -- a traffic engineer who became a village publican, rotating neighborhood brewery taps, seasonal menus on the church square -- is genuinely distinctive, but the current Weebly site communicates none of it. The opportunity is a site that feels as warm and personal as the restaurant itself: no stock photography, no template feel, just Wout's place.

## Client Preferences

### Desired Feeling
TODO: confirm with client. Based on the brand promise "lokaal genieten" and review themes, the target feeling is: **walking into your favorite neighborhood spot where the owner waves you in.** Warm, unpretentious, inviting. You want to sit down immediately.

### Inspirations
TODO: confirm with client. Ask for 2-3 websites or brands they admire.

### Anti-Preferences
TODO: confirm with client. Likely anti-preferences based on current positioning:
- Nothing too fancy or formal -- this isn't fine dining
- No stock photography -- the current site uses real photos
- No overly corporate or chain-restaurant feel

## Website Goals

### Primary Goal
**Reservations** -- Get visitors to book a table. The current GuestPlan widget works but is buried. The new site should make reservation the primary CTA on every page.

### Secondary Goals
- **Menu discovery** -- Lunch and dinner menus must be text-based (not images) for SEO and accessibility
- **Monday special promotion** -- The €23.50 three-course Monday deal is a key traffic driver
- **Group bookings** -- Dedicated flow for parties of 10+
- **Brand storytelling** -- Communicate the "lokaal genieten" promise, Wout's story, the craft beer curation
- **Local SEO dominance** -- Structured data (Restaurant schema), Google Business optimization, "restaurant Moergestel" keyword ownership

## Assets Available

- **Logo:** Current logo visible on site -- needs to be obtained from client (likely available as SVG/PNG)
- **Photography:** Current site uses real photos (interior, food, terrace) -- all PNG format. Client likely has more photos from social media
- **Menu:** Currently image-based. Client needs to provide text-based menu content or we extract from photos
- **Social channels:** Instagram @bijwout, Facebook /bijwout, TripAdvisor, Untappd
- **Booking system:** GuestPlan (confirm if they want to keep this or switch)
- **Brand colors:** Current site uses dark (#080a0c) with gold (#c4ae80) accents -- discuss if they want to keep or evolve

## Constraints

- **Menu content:** Currently only available as PNG images. Client must provide text-based menu items with prices, or we photograph and transcribe them.
- **Photography:** The current 9 PNGs are the only known digital assets. A photography session may be needed for the new site -- discuss budget.
- **Language:** Dutch only (no hreflang needed, but the dinner page mentions English menus are available for tourists)
- **Booking integration:** GuestPlan widget needs to carry over or be replaced. Confirm with client.
- **Cookie consent:** Currently missing. Will need GDPR-compliant cookie consent (Vonzie Nexus CMP post-launch).
- **Privacy policy:** Currently missing. Client needs to provide or we draft one.

## Developer Quick Reference

- Business name (legal): TODO: confirm with client
- Business name (display): Bij Wout
- Tagline: Lokaal Genieten
- Phone: +31 13 850 8300
- Email: info@bijwout.nl
- Address: Sint Jansplein 7, 5066 AR Moergestel, Netherlands
- Google Maps embed URL: TODO: generate from coordinates (51.xxxx, 5.xxxx)
- Social links:
  - Instagram: https://www.instagram.com/bijwout/
  - Facebook: https://www.facebook.com/bijwout/
  - TripAdvisor: https://www.tripadvisor.com/Restaurant_Review-g2553743-d8490650-Reviews-Bij_Wout-Moergestel_North_Brabant_Province.html
  - Untappd: TODO: confirm exact URL
- Hours:
  - Monday: 10:00 -- 23:00 (kitchen 11:00 -- 20:00)
  - Tuesday: Closed
  - Wednesday: 10:00 -- 23:00 (kitchen 11:00 -- 20:00)
  - Thursday: 10:00 -- 23:00 (kitchen 11:00 -- 20:00)
  - Friday: 10:00 -- 23:00 (kitchen 11:00 -- 20:30)
  - Saturday: 10:00 -- 23:00 (kitchen 11:00 -- 20:30)
  - Sunday: 10:00 -- 23:00 (kitchen 11:00 -- 20:00)
- Booking system: GuestPlan (widget embed)
- Reservation phone: 013 850 8300
- Group minimum: 10 persons (phone only for groups)
- Logo files: public/images/bijwout-logo.png (dark text on transparent, horizontal lockup)
- Brand colors (current): Dark (#080a0c), Gold (#c4ae80)
- Cuisine type: Dutch brasserie, seasonal, regional products
- Price range: €€ (mains ~€16-23)
- Serves cuisine: Dutch, European, seasonal
- Geo coordinates: TODO: confirm exact lat/long
- Founded: April 3, 2015
- Owner: Wout Huijben

### Full Menu (transcribed from menu images -- March 2026)

**Source images:** docs/references/menu-images/ (8 PNG files)

#### DINNER MENU

**Brood**
- Focaccia -- pinsa romana | olijfolie | zeezout | aioli -- €7.00

**Huisgemaakte Soepen**
- Tomatensoep -- gehaktballetjes | prei | room -- €7.00
- Maandsoep -- €7.00

**Voorgerechten**
- Rundercarpaccio -- zongedroogde tomaat | Parmezaanse kaas | rode ui | pijnboompitten | kappertjes | truffelmayonaise -- €13.25
- Knoflook gamba's (7 stuks) -- licht pikante roomsaus | bosui | stokbrood -- €13.25
- Gerookte paling -- paling mousse | huisgemaakt mierikswortel-mayonaise -- €13.75
- Vitello tonnato -- kapperappeltjes | rucola | zongedroogde tomaat | tonijnmayonaise -- €11.75
- Uientaartje -- rookvlees | bierstroop -- €9.75
- Krokante pompoen (V) -- creme van oude kaas | piccalilly -- €8.75

**Hoofdgerechten** (alle hoofdgerechten geserveerd met passend garnituur, friet en mayonaise)
- Tournedos -- stroganoffsaus -- €31.00
- Sate van kippendijen -- satesaus | atjar | kroepoek | gefrituurde ui -- €19.50
- Zalmfilet -- orzo | doperwten-creme | tomatentapenade -- €25.50
- Runderbavette -- tex-mex boter -- €25.50
- Knoflook gamba's (12 stuks) -- licht pikante roomsaus | bosui | stokbrood -- €19.50
- Lamsschenkel -- aardappelpuree | jus van lam -- €27.50
- Steak van knolselderij (V) -- jus van miso -- €17.50
- Seizoensvis -- wisselend | seizoen -- dagprijs

**Salades** (geserveerd met stokbrood en zeezoutboter)
- Vis -- gerookte zalm | krabsalade | gamba's | paprika | bosui | cocktailsaus -- €23.00
- Carpaccio -- truffelmayonaise | zongedroogde tomaat | pijnboompitten | kappertjes | rode ui | Parmezaanse kaas -- €19.00
- Kofte (V) -- krokante kikkererwten | rode ui | crispy chili yoghurt -- €17.50

**Kindergerechten**
- Klein kopje soep naar keuze -- €4.00
- Friet met snack -- kroket, frikandel of kipnuggets | friet | appelmoes -- €9.50
- Pizza (half/heel) -- opties: kaas, salami, ham, champignons en/of rode ui -- €8.50 | €13.50
- Raketje -- €2.00
- Schatkistje -- €2.50

**Nagerechten**
- Dame Blanche -- boerenroomijs | chocoladesaus | slagroom | crumble -- €8.00
- Bastogne parfait -- Licor 43 | Bastogne | dulce de leche -- €8.50
- Mousse van popcorn en witte chocolade -- chocolade crumble -- €8.50
- Cinnamon roll -- roomijs met bruine suiker -- €8.50
- Koffieplankje 'Bij Wout' -- koffie of thee | ijslolly van 't Ijsboerinneke | likeurtje | zoete lekkernijen -- €8.00

**Speciale Koffies**
- Irish Coffee | Jameson Whiskey -- €7.50
- Spanish Coffee | Tia Maria of Licor 43 -- €7.50
- Italian Coffee | Disaronno -- €7.50
- French Coffee | Grand Marnier -- €8.00
- Brabantse Koffie | Schrobbeler -- €7.50

**Wisselgerechten** (rotating weekly)
- Maandsoep: Spinazie-knoflooksoep | ei -- €7.00
- Voorgerecht: Sushi sandwich -- ceviche van makreel | sojagel | grapefruit -- €13.50
- Hoofdgerecht: Kalfs rib-eye -- zwarte knoflookroomsaus -- €29.50
- Seizoensvis: Doradefilet -- kerrie-roomsaus -- €25.50
- Nagerecht: Slofje -- rode vodka-mascarpone creme | rood fruit -- €8.00

#### LUNCH MENU

**Wouts' Favorieten** (small plates -- mix and match)
- Price per favoriet: €5.50 | Plus klein kopje soep: €3.50
- Various small plates including pinsa, smoked eel, gerookte paling, seasonal options
- (Detailed items partially visible -- confirm full list with client)

**Huisgemaakte Soepen**
- Tomatensoep -- gehaktballetjes | prei | room -- €7.00
- Maandsoep -- €7.00

**Tosti's**
- Tosti -- ham | kaas -- €7.50
- Boerentosti -- ham | kaas | bacon | champignons | rode ui | spiegelei -- €11.50

**Specials**
- Pinsa warme beenham -- gebakken uien | mosterdsaus | little gem -- €14.50
- Quiche Lorraine -- kaas | prei | spekjes | creme fraiche -- €14.50

**Klassiekers**
- Knoflookgamba's (10 stuks) -- licht pikante roomsaus | bosui | stokbrood -- €16.00
- Gesselse uitsmijter met 3 eieren -- opties: ham | kaas | spek (prijs per beleg €1.50) -- €9.00
- Club gerookte kip -- van 'Slagerij Ketelaars' | bacon | kaas | eiersalade | tomaat | komkommer -- €14.50
- Boterham voor de kleintjes -- vraag wat voor lekkers we in huis hebben -- €3.00

**Salades** (geserveerd met stokbrood en zeezoutboter)
- Kofte (V) -- krokante kikkererwten | rode ui | crispy chili yoghurt -- €17.50
- Vis -- gerookte zalm | krabsalade | gamba's | paprika | bosui | cocktailsaus -- €23.00
- Carpaccio -- truffelmayonaise | zongedroogde tomaat | pijnboompitten | kappertjes | rode ui | Parmezaanse kaas -- €19.00

### Promotions (active)
- **Thursday special:** Spareribs with fries, mayo, and salad -- €16
- **Monday special:** 3-course choice menu -- €23.50/person (Oct 6 2025 -- Mar 30 2026, reservation required) -- confirm if renewed
- **Rotating craft beers** from neighborhood breweries ("Wisselbieren")
- **Dietary accommodations:** Gluten-free menu, lactose-free options, English menu available
- **Group dining:** Pre-set menus for 10+, seasonal/rotating

### Downloaded Assets
- **Logo:** public/images/bijwout-logo.png (dark horizontal lockup, "Bij WOUT -- Lokaal Genieten")
- **Photos:** docs/references/photos/ (5 files -- hero background, diner card, lunch card, reservation card, spareribs promo)
- **Menu images:** docs/references/menu-images/ (8 PNG files -- full dinner and lunch menus)
