import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block AI training crawlers
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "meta-externalagent", disallow: "/" },
      // Allow AI search crawlers
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      // Allow search engines
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.bijwout.nl/sitemap.xml",
  };
}
