import type { Metadata } from "next";
import { buildWhatsAppUrl } from "@/features/home/lib/booking";
import { buildLocalBusinessJsonLd, DEFAULT_OG_IMAGE, safeJsonLd, SITE_NAME, SITE_URL } from "@/features/seo/lib/site";
import { AboutUsContent } from "./about-us-content";

const canonicalUrl = `${SITE_URL}/about-us`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About Yogesh Nikam and Nashik Travel Services",
  description:
    "Meet Yogesh Nikam, owner of Har Har Mahadev Tours & Travels in Nashik. Serving families, pilgrims, corporate groups, and outstation travellers since 2006.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "About Har Har Mahadev Tours & Travels",
    description:
      "Har Har Mahadev Tours & Travels is a Nashik-based cab, tempo traveller, and bus rental service run by Yogesh Nikam since 2006.",
    url: canonicalUrl,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Har Har Mahadev Tours & Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Har Har Mahadev Tours & Travels",
    description:
      "Learn about Yogesh Nikam and the Nashik travel service trusted for local and outstation vehicle rentals since 2006.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const whatsAppUrl = buildWhatsAppUrl(
  "Hello Har Har Mahadev Tours & Travels, I visited your About Us page and want to plan a trip from Nashik."
);

export default function AboutUsPage() {
  return (
    <main className="bg-[#F7F8FB] text-[#0B1F3A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildLocalBusinessJsonLd()) }}
      />
      <AboutUsContent whatsAppUrl={whatsAppUrl} />
    </main>
  );
}
