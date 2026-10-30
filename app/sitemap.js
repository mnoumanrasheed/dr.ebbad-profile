import { PROFILE } from "@/content/profile";

export default function sitemap() {
  const baseUrl = "https://ebbadnazir.com";
  const currentDate = new Date().toISOString();

  return PROFILE.routes.map((route) => ({
    url: `${baseUrl}${route.href === "/" ? "" : route.href}`,
    lastModified: currentDate,
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1.0 : 0.8,
  }));
}
