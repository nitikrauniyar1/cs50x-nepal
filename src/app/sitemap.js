import { site } from "@/data/links";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/course",
    "/syllabus",
    "/team",
    "/stories",
    "/faqs",
    "/enroll",
    "/code-of-conduct",
  ];

  return routes.map((route, index) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
