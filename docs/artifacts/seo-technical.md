# SEO Technical Requirements
**Phase:** 2
**Agent:** findability-expert
**Date:** 2026-03-25
**Status:** draft

---

## Entity Statement

Use this factual paragraph in the Restaurant schema `description` field and as the basis for the meta description on the home page. It is written to be parseable by LLMs and knowledge graph systems -- plain, unambiguous, complete.

> Bij Wout is een brasserie aan het Sint Jansplein 7 in Moergestel, Nederland. Eigenaar en gastheer Wout Huijben serveert seizoensgebonden, eerlijke gerechten voor lunch en diner, aangevuld met borrelhapjes, wisselbieren en een doordachte wijnkaart. De brasserie is dagelijks geopend van 10:00 tot 23:00 uur, behalve op dinsdag. De keuken is open van 11:00 tot 20:00 uur (vrijdag en zaterdag tot 20:30 uur). Elke maandagavond serveert Bij Wout een verrassend 3-gangendiner voor EUR 23,50.

---

## Structured Data Plan

All structured data is implemented as JSON-LD in the `<head>` of each page. Use a single `<script type="application/ld+json">` block per schema type per page. The developer should implement these as reusable components that pull values from a central config or the page data.

### 1. Restaurant (sitewide, injected on every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://bijwout.nl/#restaurant",
  "name": "Bij Wout",
  "alternateName": "Brasserie Bij Wout",
  "description": "Bij Wout is een brasserie aan het Sint Jansplein 7 in Moergestel, Nederland. Eigenaar en gastheer Wout Huijben serveert seizoensgebonden, eerlijke gerechten voor lunch en diner, aangevuld met borrelhapjes, wisselbieren en een doordachte wijnkaart.",
  "url": "https://bijwout.nl",
  "telephone": "+31138508300",
  "email": "info@bijwout.nl",
  "image": "https://bijwout.nl/images/bij-wout-exterior.jpg",
  "logo": "https://bijwout.nl/images/bijwout-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sint Jansplein 7",
    "addressLocality": "Moergestel",
    "postalCode": "5066 AR",
    "addressRegion": "Noord-Brabant",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5224,
    "longitude": 5.1855
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday"],
      "opens": "10:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Thursday"],
      "opens": "10:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "10:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "23:00"
    }
  ],
  "servesCuisine": ["Frans-Hollandse brasserie", "Seizoensgebonden", "Brasserie"],
  "priceRange": "$$",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "menu": "https://bijwout.nl/menu",
  "acceptsReservations": "True",
  "hasMenu": {
    "@type": "Menu",
    "@id": "https://bijwout.nl/menu#menu",
    "url": "https://bijwout.nl/menu",
    "name": "Menukaart Bij Wout",
    "description": "Seizoensgebonden lunch, diner en borrelhapjes",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Lunch",
        "description": "Lunchgerechten geserveerd van 11:00 tot 16:00"
      },
      {
        "@type": "MenuSection",
        "name": "Hoofdgerechten",
        "description": "Seizoensgebonden dinergerechten"
      },
      {
        "@type": "MenuSection",
        "name": "Borrelhapjes",
        "description": "Hapjes bij de borrel"
      },
      {
        "@type": "MenuSection",
        "name": "Wisselbieren",
        "description": "Wisselende selectie speciaalbieren"
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/bijwout/",
    "https://www.facebook.com/bijwout"
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://bijwout.nl/reserveren",
      "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
    },
    "result": {
      "@type": "FoodEstablishmentReservation",
      "name": "Tafel reserveren bij Bij Wout"
    }
  }
}
```

**Developer notes:**
- Replace image/logo URLs with actual asset paths after Phase 3
- Verify geo coordinates against Google Maps (approximate: 51.5224, 5.1855 -- confirm exact)
- The `hasMenu.hasMenuSection` items should be expanded with actual `MenuItem` entries if the menu is rendered as HTML on /menu. At minimum, keep the section-level structure.
- Tuesday is intentionally omitted from openingHoursSpecification (closed day)

### 2. Menu (on /menu page)

The Restaurant schema above includes a `hasMenu` reference. On the /menu page, expand this with individual `MenuItem` entries if the menu is rendered as crawlable HTML. Structure:

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://bijwout.nl/menu#menu",
  "name": "Menukaart Bij Wout",
  "url": "https://bijwout.nl/menu",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "MenuItem",
        "name": "Dagschotel",
        "description": "Wisselend seizoensgerecht",
        "offers": {
          "@type": "Offer",
          "price": "15.50",
          "priceCurrency": "EUR"
        }
      }
    ]
  }
}
```

**Developer notes:**
- Populate MenuItem entries from the same data source that renders the visible menu
- Include at least the 5-8 most representative dishes. Full menu coverage is ideal but not required for launch.
- Prices must match what is displayed on the page

### 3. Event -- Monday Special (on /maandagavond page)

```json
{
  "@context": "https://schema.org",
  "@type": "FoodEvent",
  "name": "Maandagavondmenu Bij Wout",
  "description": "Elke maandag een verrassend 3-gangendiner voor EUR 23,50 bij Bij Wout in Moergestel. Seizoensgebonden, wisselend menu.",
  "url": "https://bijwout.nl/maandagavond",
  "location": {
    "@type": "Restaurant",
    "@id": "https://bijwout.nl/#restaurant"
  },
  "organizer": {
    "@type": "Restaurant",
    "@id": "https://bijwout.nl/#restaurant"
  },
  "eventSchedule": {
    "@type": "Schedule",
    "repeatFrequency": "P1W",
    "byDay": "https://schema.org/Monday",
    "startTime": "17:30",
    "endTime": "21:00"
  },
  "offers": {
    "@type": "Offer",
    "price": "23.50",
    "priceCurrency": "EUR",
    "url": "https://bijwout.nl/reserveren",
    "availability": "https://schema.org/InStock"
  },
  "isAccessibleForFree": false
}
```

**Developer notes:**
- `eventSchedule` with `repeatFrequency` marks this as a recurring event. Google supports this for rich results.
- Verify start/end times with client (estimated 17:30-21:00 based on kitchen hours)
- Reference the main Restaurant entity via `@id` to connect the graph

### 4. FAQPage (on Home page or as a dedicated section)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wanneer is Bij Wout open?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij Wout is elke dag open behalve dinsdag, van 10:00 tot 23:00 uur. De keuken is open van 11:00 tot 20:00 uur, op vrijdag en zaterdag tot 20:30 uur."
      }
    },
    {
      "@type": "Question",
      "name": "Moet ik reserveren bij Bij Wout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reserveren is niet verplicht, maar wel aan te raden op vrijdag- en zaterdagavond. Reserveer online via bijwout.nl/reserveren of bel 013 850 8300."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost eten bij Bij Wout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoofdgerechten liggen tussen EUR 15 en EUR 25. Op maandagavond serveren we een 3-gangendiner voor EUR 23,50."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bij Wout geschikt voor groepen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Bij Wout ontvangt groepen voor diners, feesten en bedrijfsuitjes. Neem contact op voor een arrangement op maat."
      }
    },
    {
      "@type": "Question",
      "name": "Heeft Bij Wout een terras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ons terras ligt aan het Sint Jansplein in het centrum van Moergestel."
      }
    },
    {
      "@type": "Question",
      "name": "Waar kan ik parkeren bij Bij Wout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Er is gratis parkeren rondom het Sint Jansplein in het centrum van Moergestel."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zijn wisselbieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij Wout heeft naast vaste bieren een wisselende selectie speciaalbieren op tap en fles. De selectie verandert regelmatig."
      }
    },
    {
      "@type": "Question",
      "name": "Waar zit Bij Wout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij Wout zit aan het Sint Jansplein 7, 5066 AR Moergestel, in het centrum van het dorp."
      }
    }
  ]
}
```

**Developer notes:**
- FAQ answers in schema must match visible FAQ content on the page exactly (or very closely). Google penalizes hidden FAQ schema.
- Place FAQ schema on the page where FAQ content is visible. If FAQ is split across pages, use separate FAQPage schemas per page.
- FAQ answers in schema should be plain text (no HTML in the `text` field for maximum compatibility)

### 5. BreadcrumbList (on all pages except Home)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bijwout.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Current Page Name]",
      "item": "https://bijwout.nl/[current-slug]"
    }
  ]
}
```

**Page name mappings:**
| Slug | Breadcrumb Name |
|------|----------------|
| /menu | Menukaart |
| /over-wout | Over Wout |
| /groepen | Groepen |
| /maandagavond | Maandagavond |
| /reserveren | Reserveren |

**Developer notes:**
- Build this as a reusable component that reads page title and slug from route metadata
- Home page does NOT get BreadcrumbList schema (it's the root)

---

## XML Sitemap Configuration

File: `/public/sitemap.xml` (or generated dynamically via Next.js metadata API)

| Page | URL | Priority | Change Frequency |
|------|-----|----------|-----------------|
| Home | https://bijwout.nl/ | 1.0 | weekly |
| Menu | https://bijwout.nl/menu | 0.9 | weekly |
| Reserveren | https://bijwout.nl/reserveren | 0.8 | monthly |
| Maandagavond | https://bijwout.nl/maandagavond | 0.7 | weekly |
| Groepen | https://bijwout.nl/groepen | 0.6 | monthly |
| Over Wout | https://bijwout.nl/over-wout | 0.5 | monthly |

**Developer implementation:**
```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bijwout.nl'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/menu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reserveren`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/maandagavond`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/groepen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/over-wout`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
```

---

## robots.txt

File: `/public/robots.txt` (or via Next.js `app/robots.ts`)

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://bijwout.nl/sitemap.xml
```

**Developer notes:**
- Keep it simple. No pages need to be blocked from crawling.
- `/_next/` disallow prevents crawling of Next.js internal routes and chunks
- `/api/` disallow prevents crawling of any API routes (GuestPlan integration, etc.)

---

## Canonical URL Strategy

Every page must have a self-referencing canonical tag in `<head>`:

```html
<link rel="canonical" href="https://bijwout.nl/[current-path]" />
```

**Rules:**
- Home page canonical: `https://bijwout.nl` (without trailing slash)
- All other pages: `https://bijwout.nl/[slug]` (without trailing slash)
- Always use `https://` (never `http://`)
- Always use `bijwout.nl` (without `www.`) -- configure DNS to redirect `www` to bare domain
- Implement via Next.js metadata API in each page's `metadata` export or in a shared layout

**Developer implementation:**
```typescript
// In app/layout.tsx or per-page metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://bijwout.nl'),
  alternates: {
    canonical: '/',  // per page: '/menu', '/over-wout', etc.
  },
}
```

---

## 301 Redirect Plan

Map old URLs from the existing site to new structure:

| Old URL Pattern | New URL | Notes |
|----------------|---------|-------|
| /menukaart | /menu | Common old slug |
| /contact | /reserveren | Consolidated page |
| /over-ons | /over-wout | Renamed slug |
| /acties | /maandagavond | If promotions had a page |
| /aanbiedingen | /maandagavond | Alternate promotions URL |

**Developer implementation:**
```typescript
const nextConfig = {
  async redirects() {
    return [
      { source: '/menukaart', destination: '/menu', permanent: true },
      { source: '/contact', destination: '/reserveren', permanent: true },
      { source: '/over-ons', destination: '/over-wout', permanent: true },
      { source: '/acties', destination: '/maandagavond', permanent: true },
      { source: '/aanbiedingen', destination: '/maandagavond', permanent: true },
    ]
  },
}
```

---

## Image Alt Text Strategy

| Image Type | Alt Text Pattern | Example |
|-----------|-----------------|---------|
| Food/dish photo | "[Dish name] bij Bij Wout" | "Seizoensgebonden dagschotel bij Bij Wout" |
| Interior photo | "Interieur van brasserie Bij Wout in Moergestel" | -- |
| Exterior/terras | "Terras van Bij Wout aan het Sint Jansplein in Moergestel" | -- |
| Wout (portrait) | "Wout Huijben, eigenaar van Bij Wout" | -- |
| Beer/drinks | "[Beer/drink name] bij Bij Wout" | "Wisselend speciaalbier op tap bij Bij Wout" |
| Ambiance/detail | Descriptive, location-anchored | "Sfeervolle verlichting in brasserie Bij Wout" |
| Decorative/purely visual | `alt=""` (empty) | Texture images, divider graphics |

**Rules:**
- Every meaningful image has a unique, descriptive alt attribute
- Include "Bij Wout" in approximately 50% of alt texts (not every single one -- that's stuffing)
- Include "Moergestel" in 2-3 alt texts per page max
- Decorative images (backgrounds, textures, dividers) get `alt=""`
- Never use "Afbeelding van..." or "Foto van..." as a prefix -- screen readers already announce it's an image

---

## Open Graph & Social Meta

Implement on every page for optimal sharing on Facebook, Instagram link-in-bio, WhatsApp previews, and iMessage link previews.

```html
<meta property="og:site_name" content="Bij Wout" />
<meta property="og:type" content="restaurant" />
<meta property="og:locale" content="nl_NL" />
<meta property="og:title" content="[Same as meta title]" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:url" content="https://bijwout.nl/[current-path]" />
<meta property="og:image" content="https://bijwout.nl/images/og-bij-wout.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

**Developer notes:**
- Create one high-quality OG image (1200x630px) showing the brasserie's best angle -- food, interior, or terras
- Per-page OG images are a nice-to-have but not required for launch. A single strong default suffices.
- Implement via Next.js metadata API:
```typescript
export const metadata: Metadata = {
  openGraph: {
    siteName: 'Bij Wout',
    type: 'website',
    locale: 'nl_NL',
    images: [{ url: '/images/og-bij-wout.jpg', width: 1200, height: 630 }],
  },
}
```

---

## LLM Search Optimization

### Knowledge Graph Signals

| Signal | Status | Action |
|--------|--------|--------|
| NAP consistency | Required | Exact same name/address/phone everywhere: "Bij Wout", "Sint Jansplein 7", "5066 AR Moergestel", "+31 13 850 8300" |
| Google Business Profile | Required | Claim and fully optimize (see Local SEO section below) |
| Social profiles linked | Required | Instagram (@bijwout) and Facebook (/bijwout) linked in schema `sameAs` and in site footer |
| Wikipedia/Wikidata | Not applicable | Too small for a Wikipedia entry -- skip |
| Consistent entity naming | Required | Always "Bij Wout" (capital B, capital W, space). Never "bij wout", "BijWout", "Bij wout" |

### Content Structure for AI Extraction

LLMs like ChatGPT, Perplexity, and Gemini extract answers from clear, factual content. Structure the site so these answers are easy to find:

1. **Entity paragraph on /over-wout:** The first paragraph must read like a clean factual summary. See Entity Statement above. This paragraph does double duty: it reads well for humans AND is the exact text LLMs will extract. Must include: "brasserie", "Moergestel", "Sint Jansplein", "Wout Huijben".

2. **Hours, address, and phone in crawlable text:** Not just in a Google Maps embed or image. The footer must contain this as HTML text on every page. LLMs cannot read map embeds.

3. **Menu as HTML:** The full menu must render as crawlable HTML text on /menu. PDF menus are invisible to LLMs. Even if you also offer a PDF download, the HTML version is the primary format.

4. **Price anchors:** Include at least 2-3 specific prices in crawlable text (e.g., "Maandagavondmenu: EUR 23,50", "Hoofdgerechten: EUR 15 -- EUR 25"). LLMs use these to answer "How much does it cost to eat at Bij Wout?"

5. **FAQ as visible content:** The FAQ questions and answers must appear as visible HTML on the site (not hidden in accordions that are collapsed by default, unless they are accessible to crawlers via proper `<details>/<summary>` elements or server-rendered content).

6. **Explicit claims with evidence:** Instead of "We use fresh ingredients" (vague, every restaurant says this), write "Wout koopt zijn groenten bij [leverancier] en zijn vlees bij [slager] uit de regio" (specific, verifiable, quotable by LLMs).

---

## Local SEO

### Google Business Profile Recommendations

**Primary category:** Restaurant
**Secondary categories:** Brasserie, Lunch Restaurant, Dinner Restaurant

**Attributes to enable:**
- Dine-in: Yes
- Outdoor seating: Yes
- Reservations: Yes
- Serves lunch: Yes
- Serves dinner: Yes
- Serves beer: Yes
- Serves wine: Yes
- Cash accepted: Yes
- Family-friendly: Yes (verify with client)
- Groups welcome: Yes

**Photo strategy (upload to GBP):**
- Exterior (front door, sign, Sint Jansplein context): 3-5 photos
- Interior (atmosphere, seating, bar, details): 5-8 photos
- Food (hero dishes, dagschotel, dessert, borrelhapjes): 8-10 photos
- Drinks (wisselbier on tap, wine glass, coffee): 3-5 photos
- Team (Wout in action, service staff): 2-3 photos
- Terras (summer and evening): 3-5 photos
- Total target: 25-35 high-quality photos

**Review response strategy:**
- Respond to EVERY Google review within 48 hours
- Positive reviews: Thank personally, mention a specific detail from their visit if possible
- Negative reviews: Acknowledge, apologize if warranted, offer to discuss offline. Never argue publicly.
- Encourage reviews: Add a subtle prompt on the receipt. Never incentivize (violates Google guidelines).

### Citation Targets

Ensure consistent NAP (Name, Address, Phone) on all these platforms:

| Platform | Priority | Status |
|----------|----------|--------|
| Google Business Profile | Critical | Claim + optimize |
| Facebook Business Page | Critical | Active |
| Instagram Business | Critical | Active |
| TripAdvisor | High | Claim listing |
| Yelp | High | Claim listing |
| Iens (TheFork) | High | Claim listing -- major Dutch restaurant platform |
| Couverts | High | Claim listing -- Dutch reservation platform |
| Foursquare / Swarm | Medium | Claim listing (feeds Apple Maps data) |
| Apple Maps Connect | Medium | Claim listing |
| Bing Places | Medium | Claim listing (feeds Bing Copilot) |
| KHN (Koninklijke Horeca Nederland) | Medium | Verify membership/listing |
| VVV Midden-Brabant | Low | Submit listing |
| Uit in Oisterwijk | Low | Submit listing |

**Consistency rules:**
- Business name: Always "Bij Wout" (not "Restaurant Bij Wout" or "Brasserie Bij Wout" -- unless the platform requires a descriptor, then use "Brasserie Bij Wout")
- Address: "Sint Jansplein 7, 5066 AR Moergestel" (always the same format)
- Phone: "+31 13 850 8300" (international format) or "013 850 8300" (local format) -- be consistent per platform
- Website: "https://bijwout.nl" (always with https, without www)

---

## Core Web Vitals Targets

| Metric | Target | Notes |
|--------|--------|-------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image is likely the LCP element -- optimize with next/image, priority loading, appropriate sizing |
| FID (First Input Delay) | < 100ms | Minimal JS on initial load. GuestPlan widget should lazy-load. |
| CLS (Cumulative Layout Shift) | < 0.1 | Reserve space for images (explicit width/height), fonts (font-display: swap + size-adjust), and the GuestPlan embed |
| INP (Interaction to Next Paint) | < 200ms | Keep event handlers lightweight |
| TTFB (Time to First Byte) | < 800ms | Next.js static generation handles this. Verify Netlify edge response times. |

**Key implementation notes:**
- Use `next/image` with explicit `width` and `height` for ALL images to prevent CLS
- Preload the hero image: `<link rel="preload" as="image" href="..." />`
- Font loading: use `next/font/local` with `display: swap` and `size-adjust` fallback
- GuestPlan booking widget: load via dynamic import or intersection observer (only when /reserveren is visible)
- Lazy load all below-fold images
- Keep JavaScript bundle minimal -- this is a mostly-static marketing site

---

## Implementation Checklist

The developer should work through this checklist during Phase 3 build:

### Head / Meta (every page)
- [ ] Meta title (unique per page, per formulas above)
- [ ] Meta description (unique per page, per formulas above)
- [ ] Canonical URL (self-referencing, per strategy above)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url, og:locale, og:site_name)
- [ ] `<html lang="nl">` attribute
- [ ] Viewport meta tag (standard responsive)
- [ ] Favicon and apple-touch-icon

### Structured Data
- [ ] Restaurant schema (sitewide, in layout or shared component)
- [ ] FAQPage schema (on page where FAQ is visible)
- [ ] BreadcrumbList schema (all pages except Home)
- [ ] FoodEvent schema (on /maandagavond)
- [ ] Menu schema (on /menu, with MenuItem entries)
- [ ] Validate all schemas via https://validator.schema.org/ and Google Rich Results Test

### Technical
- [ ] XML sitemap (app/sitemap.ts)
- [ ] robots.txt (app/robots.ts or public/robots.txt)
- [ ] 301 redirects in next.config.ts (verify old URLs exist first)
- [ ] Canonical URL consistency (no www, no trailing slash, always https)
- [ ] All images have descriptive alt text
- [ ] Menu rendered as HTML (not PDF-only)
- [ ] NAP (name, address, phone) in footer as crawlable text on every page
- [ ] Opening hours in footer as crawlable text on every page
- [ ] Google Maps embed on /reserveren
- [ ] Social links (Instagram, Facebook) in footer

### Performance
- [ ] next/image for all images with explicit dimensions
- [ ] Hero image preloaded
- [ ] Fonts via next/font/local with swap + size-adjust
- [ ] GuestPlan widget lazy-loaded (not in initial bundle)
- [ ] Run Lighthouse audit -- target 90+ on all four categories
- [ ] Test Core Web Vitals with PageSpeed Insights after deployment

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile is claimed and linked to website
- [ ] Verify NAP consistency across all citation platforms
- [ ] Test the site in ChatGPT, Perplexity, and Gemini ("Tell me about Bij Wout in Moergestel") -- baseline measurement
- [ ] Set up Google Search Console monitoring
- [ ] Schedule monthly GBP posts (maandagavond menu, seasonal updates)

---

## Monitoring Plan

### Weekly (first 3 months)
- Check Google Search Console for indexing status, crawl errors, and search queries
- Verify all 6 pages are indexed
- Monitor click-through rates per page

### Monthly
- Ask ChatGPT and Perplexity "Where should I eat in Moergestel?" and "Tell me about Bij Wout" -- track if and how the business appears
- Review Google Business Profile insights (views, clicks, direction requests, calls)
- Publish at least 2 GBP posts (maandagavond menu + one other)
- Check Google Reviews and respond to new reviews

### Quarterly
- Audit NAP consistency across all citation platforms
- Review and update FAQ content if new common questions emerge
- Update menu schema if seasonal menu changes significantly
- Check "People Also Ask" results for "restaurant Moergestel" -- add any new questions to the FAQ
- Run PageSpeed Insights to verify Core Web Vitals haven't degraded
