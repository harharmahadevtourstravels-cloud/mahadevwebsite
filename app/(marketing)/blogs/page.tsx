import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/features/seo/lib/site";
import { BlogsListContent } from "./blogs-list-content";

const canonicalUrl = `${SITE_URL}/blogs`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Travel Blogs for Nashik Tours and Rentals",
  description:
    "Read Nashik travel guides for tours and travels, tempo traveller rental, bus rental, local sightseeing, pilgrimage routes, and group travel planning.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Travel Blogs for Nashik Tours and Rentals",
    description:
      "Guides for Nashik local sightseeing, tempo traveller rentals, bus hire, outstation cabs, pilgrimages, and group tours.",
    url: canonicalUrl,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} travel guides` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Blogs for Nashik Tours and Rentals",
    description: "Nashik travel guides for sightseeing, rentals, pilgrimages, and group tours.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FB] text-[#0B1F3A]">
      <BlogsListContent />
    </main>
  );
}
