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
  title: "Tours and Travels Nashik | Tempo Traveller on Rent in Nashik",
  description:
    "Book tours and travels Nashik services for tempo traveller in Nashik, bus on rent in Nashik, vehicle rental Nashik, and group travel Nashik.",
  keywords: [
    "tours and travels Nashik",
    "tempo traveller in Nashik",
    "tempo traveller on rent in Nashik",
    "bus on rent in Nashik",
    "vehicle rental Nashik",
    "group travel Nashik",
    "wedding bus hire Nashik",
    "Nashik to Shirdi tempo traveller",
    "tempo traveller in Nasik",
    "tours and travels Nasik",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Tours and Travels Nashik | Tempo Traveller and Bus Booking",
    description:
      "Book tempo traveller on rent in Nashik, bus on rent in Nashik, and group vehicle rentals for local and outstation travel.",
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
    title: "Tours and Travels Nashik | Tempo Traveller Booking",
    description:
      "Tempo traveller in Nashik, bus on rent in Nashik, vehicle rental Nashik, and group travel booking.",
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
