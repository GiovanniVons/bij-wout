import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lora = localFont({
  src: [
    { path: "../../public/fonts/lora/Lora-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/lora/Lora-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/lora/Lora-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/lora/Lora-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-display-loaded",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

const sourceSerif = localFont({
  src: [
    { path: "../../public/fonts/source-serif-4/SourceSerif4-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/source-serif-4/SourceSerif4-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/source-serif-4/SourceSerif4-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-body-loaded",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

const caveat = localFont({
  src: [
    { path: "../../public/fonts/caveat/Caveat-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-accent-loaded",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Bij Wout -- Lunch, Diner & Craft Bier in Moergestel",
    template: "%s | Bij Wout",
  },
  description:
    "Eetcafe op het Sint Jansplein in Moergestel. Eerlijke lunch, diner met dagverse ingredienten en wisselende craft bieren. Reserveer direct.",
  metadataBase: new URL("https://www.bijwout.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Bij Wout",
    title: "Bij Wout -- Lokaal Genieten in Moergestel",
    description:
      "Eetcafe op 't plein. Lunch, diner, craft bier en een maandagavondmenu voor EUR 23,50. Sint Jansplein 7, Moergestel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bij Wout -- Eetcafe op het Sint Jansplein in Moergestel",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bijwout.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${lora.variable} ${sourceSerif.variable} ${caveat.variable}`}
    >
      <head>
        {/* Preload only critical fonts (Lora Regular for headings, Source Serif Regular for body) */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/lora/Lora-Regular.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/source-serif-4/SourceSerif4-Regular.woff2" crossOrigin="anonymous" />
        {/* Preload LCP hero image */}
        <link rel="preload" as="image" type="image/webp" href="/images/hero-wout-1080.webp" />
      </head>
      <body className="min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  );
}
