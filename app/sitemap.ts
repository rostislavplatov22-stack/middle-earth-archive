import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://palantir-archive.netlify.app";

const routes = [
  "",
  "/catalog",
  "/catalog?type=characters",
  "/catalog?type=realms",
  "/catalog?type=artifacts",
  "/catalog?type=chronicles",
  "/catalog?type=maps",
  "/catalog?type=ages",
  "/characters/galadriel",
  "/characters/gandalf",
  "/characters/aragorn",
  "/characters/frodo-baggins",
  "/characters/sauron",
  "/characters/luthien",
  "/characters/samwise-gamgee",
  "/artifacts/the-one-ring",
  "/artifacts/anduril",
  "/artifacts/phial-of-galadriel",
  "/realms/gondor",
  "/locations/lorien",
  "/ages/third-age",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/catalog") ? 0.9 : 0.75,
  }));
}
