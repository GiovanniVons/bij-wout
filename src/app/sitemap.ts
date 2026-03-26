import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bijwout.nl";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/menu`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/reserveren`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/maandagavond`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/over-wout`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/groepen`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
