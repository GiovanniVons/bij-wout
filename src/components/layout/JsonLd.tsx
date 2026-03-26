interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bij Wout",
  alternateName: "Eetcafe Bij Wout",
  url: "https://www.bijwout.nl",
  telephone: "+31138508300",
  email: "info@bijwout.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sint Jansplein 7",
    addressLocality: "Moergestel",
    postalCode: "5066 AR",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5185,
    longitude: 5.1812,
  },
  servesCuisine: ["Dutch", "European", "Brasserie"],
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "23:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "588",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/bijwout/",
    "https://www.facebook.com/bijwout/",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kan ik ook zonder reservering langskomen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Natuurlijk. Op drukke avonden (donderdag t/m zaterdag) is reserveren wel slim, dan weet je zeker dat er plek is.",
      },
    },
    {
      "@type": "Question",
      name: "Is er parkeergelegenheid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, gratis parkeren rondom het Sint Jansplein. Met de fiets nog makkelijker.",
      },
    },
    {
      "@type": "Question",
      name: "Zijn er vegetarische opties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Op de kaart staan meerdere vegetarische gerechten. Bij het maandagavondmenu is er ook altijd een vegetarische keuze per gang.",
      },
    },
  ],
};
