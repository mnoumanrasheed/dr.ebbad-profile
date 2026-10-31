import { PROFILE } from "@/content/profile";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dr-ebbad-profile.vercel.app";
  const currentDate = new Date().toISOString();

  return PROFILE.routes.map((route) => ({
    url: `${baseUrl}${route.href === "/" ? "" : route.href}`,
    lastModified: currentDate,
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1.0 : 0.8,
  }));
}
