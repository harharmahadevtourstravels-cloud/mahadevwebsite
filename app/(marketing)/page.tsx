import type { Metadata } from "next";
import HomePage from "./_components/home-page";
import {
  buildLocalBusinessJsonLd,
  DEFAULT_OG_IMAGE,
  safeJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/features/seo/lib/site";

export const metadata: Metadata = {
  title: "Tours and Travels in Nashik | Tempo Traveller, Bus & Cab",
  description:
    "Book trusted tours and travels in Nashik for tempo travellers, buses, cabs, Shirdi-Trimbakeshwar trips, weddings, and outstation travel since 2006.",
  keywords: [
    "tours and travels in Nashik",
    "tours and travels Nashik",
    "best tours and travels in Nashik",
    "travel agency Nashik",
    "tempo traveller in Nashik",
    "tempo traveller on rent in Nashik",
    "bus on rent in Nashik",
    "cab service in Nashik",
    "vehicle rental Nashik",
    "group travel Nashik",
    "wedding bus hire Nashik",
    "Nashik to Shirdi tempo traveller",
    "tempo traveller in Nasik",
    "tours and travels Nasik",
    "tour and travel in Nashik",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Tours and Travels in Nashik | Tempo Traveller, Bus and Cab Booking",
    description:
      "Book Nashik tours and travels for cabs, tempo travellers, buses, Shirdi-Trimbakeshwar trips, weddings, corporate travel, and outstation journeys.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Nashik travel booking`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tours and Travels in Nashik | Tempo Traveller Booking",
    description:
      "Book cabs, tempo travellers, buses, pilgrimage routes, weddings, corporate trips, and outstation travel from Nashik.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildLocalBusinessJsonLd()) }}
      />
      <HomePage />
    </>
  );
}
