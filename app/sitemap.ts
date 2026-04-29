import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/features/blog/lib/posts";
import { SERVICE_PAGES } from "@/features/seo/lib/service-pages";
import { SITE_UPDATED_AT, SITE_URL } from "@/features/seo/lib/site";

const staticRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
    lastModified: SITE_UPDATED_AT,
  },
  {
    path: "/about-us",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: "2026-04-29",
  },
  {
    path: "/blogs",
    priority: 0.7,
    changeFrequency: "weekly" as const,
    lastModified: SITE_UPDATED_AT,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(route.lastModified),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...SERVICE_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
