# Sitemap
**Phase:** 1
**Agent:** ux-architect
**Date:** 2026-03-25
**Status:** draft

---

## Page Structure

| # | Page | URL | Purpose | Justification |
|---|------|-----|---------|---------------|
| 1 | Home | `/` | First impression, conversion hub, highlights reel | Entry point for all audiences. Surfaces key content (menu preview, Monday deal, atmosphere) and funnels to reservation. |
| 2 | Menu | `/menu` | Full lunch + dinner menus, weekly specials, craft beers | Core content page. Consolidates 3 former pages (Lunch, Diner, Wisselbieren) into one scannable page with clear sections. Text-based for SEO. |
| 3 | Over Ons | `/over-ons` | Wout's story, brasserie identity, team, values | Second most-visited page on restaurant sites. Strong founder narrative is a key differentiator. Builds trust for undecided visitors. |
| 4 | Groepen | `/groepen` | Group dining info, pre-set menus, inquiry flow | Distinct audience (planners booking for 10+) with distinct content (group menus, pricing, process). Needs its own space. |
| 5 | Maandagavond | `/maandagavond` | Monday 3-course special promotion (€23.50) | Shareable landing page for recurring promotion. Social media link target. Supports "maandag menu Moergestel" SEO. Lightweight but purposeful. |
| 6 | Reserveren & Contact | `/reserveren` | GuestPlan widget, phone, address, hours, map | Merges former Reserveren + Contact pages. Both serve "I want to reach Bij Wout" intent. Widget first, contact info second. |

**Page count rationale:** Down from 9 to 6. Lunch + Diner + Wisselbieren consolidated into Menu (no content loss, better scannability). Reserveren + Contact merged (overlapping intent). Maandagavond kept as standalone for shareability. No padding pages -- every page has confirmed content.

---

## Navigation

### Primary Nav (Header)

```
[Logo: Bij Wout]   Menu   Over Ons   Groepen   Maandagavond   [CTA Button: Reserveren]
```

- **Logo** links to Home (standard pattern, no separate "Home" label needed)
- **5 nav items** plus 1 CTA button -- clean, scannable
- **Reserveren** is visually distinct as a button (not a text link) to stand out as the primary action
- Mobile: hamburger menu with full-screen overlay. Reserveren button stays visible outside the hamburger (always accessible)

### Footer Nav

```
[Logo]                    [Links]              [Contact]           [Hours]
Bij Wout                  Menu                 Sint Jansplein 7    Ma: 10-23
Lokaal Genieten           Over Ons             5066 AR Moergestel  Di: Gesloten
                          Groepen              013 850 8300        Wo-Do: 10-23
[Social icons]            Maandagavond         info@bijwout.nl     Vr-Za: 10-23
Instagram | Facebook      Reserveren           Google Maps link    Zo: 10-23
                          Privacy
```

- Full contact info repeated in footer (standard, good for SEO)
- Opening hours displayed (reduces friction -- no hunting for this info)
- Kitchen hours note: "Keuken: 11:00-20:00 (vr-za tot 20:30)"
- Social media links (Instagram + Facebook)
- Privacy/cookie policy link

### Persistent CTA Strategy

- **Desktop + Mobile:** "Reserveren" button in header nav (scrolls with sticky header). Visually distinct as a filled button.
- **GuestPlan widget** provides its own floating reservation button -- no additional sticky bar needed.
- Phone number is accessible via footer and contact page (not a persistent overlay).

---

## User Flows

### Flow 1: Local Regular -- "What's for dinner?"
**Audience:** Moergestel locals who already know Bij Wout
**Entry:** Direct URL / Google "Bij Wout"
**Goal:** Check tonight's menu, make a reservation

```
Home (scan hero, see tonight's highlight)
  -> Menu (scroll to dinner section, check wisselgerecht)
    -> Reserveren (tap sticky CTA or nav button)
      -> GuestPlan widget -> Confirmation
```

**Clicks to conversion:** 2 (Menu -> Reserveren)
**Friction points:** None significant. This is the fastest path.
**Design response:** Menu page needs clear lunch/dinner toggle so regulars can jump straight to dinner.

### Flow 2: Day-Tripper -- "Is this place any good?"
**Audience:** Visitors searching "restaurant Moergestel" or "lunch Moergestel"
**Entry:** Google search -> Home (or Menu via SEO)
**Goal:** Assess quality, vibe, and pricing before committing

```
Home (hero photo sets atmosphere, tagline sets tone)
  -> Menu (scan prices, assess quality of offerings)
    -> Over Ons (who is Wout? what's the story?)
      -> Reserveren (convinced, ready to book)
        -> GuestPlan widget -> Confirmation
```

**Clicks to conversion:** 3 (Menu -> Over Ons -> Reserveren)
**Friction points:**
- If photography is weak, trust drops at Home. Need strong hero imagery.
- If menu page is just a wall of text, scanability suffers. Need clear sections + visual accents.
**Design response:** Home hero must immediately communicate "warm neighborhood spot." Menu needs visual rhythm (not just a list). Over Ons needs Wout's face and story front and center.

### Flow 3: Group Planner -- "Can we book for 15 people?"
**Audience:** Someone organizing a birthday, team outing, or celebration
**Entry:** Google "groepsarrangement Moergestel" or direct referral
**Goal:** Understand group options, pricing, and how to book

```
Home (scan, see "Groepen" in nav)
  -> Groepen (read group menu options, capacity, pricing)
    -> Contact form or phone call (inquiry, not self-service booking)
```

**Clicks to conversion:** 2 (Home -> Groepen -> inquiry action on same page)
**Friction points:**
- If group pricing is vague ("price on request" for everything), planners may bounce. Need at least ballpark ranges.
- If inquiry requires email and wait, some will just call. Phone number must be prominent.
**Design response:** Groepen page has inline inquiry form AND prominent phone number. At least some pricing guidance ("starting from...").

### Flow 4: Beer Enthusiast -- "What's on tap?"
**Audience:** Craft beer lovers checking the rotation
**Entry:** Direct URL, Instagram link, or word of mouth
**Goal:** See current tap list

```
Home (may scan, but heading straight to Menu)
  -> Menu (scroll to craft beer section)
    -> (optional) Reserveren if planning a visit
```

**Clicks to conversion:** 1 (Home -> Menu beer section)
**Friction points:**
- If beer section is buried at bottom of a long menu page, they will miss it.
**Design response:** Menu page navigation (tabs or jump links) must include a clear "Wisselbieren" / "Craft Bier" section link.

### Flow 5: Monday Deal Seeker -- "That €23.50 deal"
**Audience:** Someone who heard about the Monday special via social media or word of mouth
**Entry:** Direct link to /maandagavond (from social post) or Home
**Goal:** See what the deal includes, make a reservation for Monday

```
Maandagavond (land on promo page, see menu + price + CTA)
  -> Reserveren (book for Monday)
    -> GuestPlan widget -> Confirmation
```

**Clicks to conversion:** 1 (Maandagavond -> Reserveren)
**Friction points:**
- If the current seasonal menu is not shown (just "seasonal menu, changes regularly"), it is not compelling enough.
**Design response:** Maandagavond page should show the CURRENT 3-course menu if available, with "menu wisselt per seizoen" as context.

---

## Content Requirements

### Per-Page Content Needs

| Page | Must Have | Client Must Provide | Can Create |
|------|-----------|--------------------|-----------|
| Home | Hero image(s), tagline, 3-4 highlight blocks, social proof, reservation CTA | Photography (interior, food, Wout), Google Reviews quotes | All copy, layout |
| Menu | Full lunch + dinner menus (text), weekly special slot, craft beer section, kids menu | Menu updates, current wisselgerecht, current tap list | Menu layout, section copy, SEO structure |
| Over Ons | Wout's story, team/kitchen philosophy, brasserie history | Photos of Wout + team + interior, Wout's story in his own words | Edited copy, page structure |
| Groepen | Group menu options, capacity info, pricing guidance, inquiry form | Group menu details, minimum/maximum group sizes, at least indicative pricing | Inquiry form, copy, layout |
| Maandagavond | Current 3-course menu, price (€23.50), reservation CTA, seasonal context | Current Monday menu, any restrictions/exclusions | Promotional copy, layout |
| Reserveren & Contact | GuestPlan widget, address, phone, email, map, opening hours | GuestPlan embed code | Map embed, structured data, copy |
