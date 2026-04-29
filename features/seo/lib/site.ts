import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  OFFICE_ADDRESS_INLINE,
  OFFICE_ADDRESS_SHORT,
} from "@/features/home/lib/constants";

export const SITE_URL =
  "https://harharmahadevtravels.in";
export const CANONICAL_HOST = "harharmahadevtravels.in";

export const SITE_UPDATED_AT = "2026-04-29";

export const SITE_NAME = "Har Har Mahadev Tours & Travels";
export const SITE_DESCRIPTION =
  "Book tempo travellers, buses, cabs, Nepal packages, and outstation travel from Nashik with Har Har Mahadev Tours & Travels.";
export const DEFAULT_OG_IMAGE = "/opengraph-image";

export const BUSINESS_NAME = SITE_NAME;
export const BUSINESS_PHONE_DISPLAY = CONTACT_PHONE_DISPLAY;
export const BUSINESS_EMAIL = CONTACT_EMAIL;
export const BUSINESS_ADDRESS = OFFICE_ADDRESS_INLINE;
export const BUSINESS_SHORT_ADDRESS = OFFICE_ADDRESS_SHORT;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon0.svg"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Gat No 283, Shop No 2 & 3, Behind K K Wagh Engineering College, Mumbai Agra Road, Panchavati",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422003",
      addressCountry: "IN",
    },
    areaServed: [
      "Nashik",
      "Panchavati",
      "Shirdi",
      "Trimbakeshwar",
      "Maharashtra",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE_DISPLAY,
      contactType: "booking support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
