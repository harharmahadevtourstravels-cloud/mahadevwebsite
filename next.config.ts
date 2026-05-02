import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const CANONICAL_ORIGIN = "https://harharmahadevtravels.in";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.harharmahadevtravels.in",
          },
        ],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/tempo-traveller-on-rent-in-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/tempo-traveller-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/bus-on-rent-in-nashik",
        destination: "/bus-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/cab-service-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/nashik-to-shirdi-cab",
        destination: "/nashik-to-shirdi-tempo-traveller",
        permanent: true,
      },
      {
        source: "/nashik-to-trimbakeshwar-taxi",
        destination: "/nashik-to-trimbakeshwar-bus-hire",
        permanent: true,
      },
      {
        source: "/trimbakeshwar-bus-hire-nashik",
        destination: "/nashik-to-trimbakeshwar-bus-hire",
        permanent: true,
      },
      {
        source: "/nashik-airport-transfer",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/12-seater-tempo-traveller-rent-nashik",
        destination: "/12-seater-tempo-traveller-nashik",
        permanent: true,
      },
      {
        source: "/tempo-traveller-12-seater-rent-per-km-nashik",
        destination: "/12-seater-tempo-traveller-nashik",
        permanent: true,
      },
      {
        source: "/17-seater-tempo-traveller-rent-nashik",
        destination: "/17-seater-tempo-traveller-nashik",
        permanent: true,
      },
      {
        source: "/20-seater-bus-on-rent-nashik",
        destination: "/20-seater-bus-rent-nashik",
        permanent: true,
      },
      {
        source: "/26-seater-tempo-traveller-rent-nashik",
        destination: "/26-seater-tempo-traveller-nashik",
        permanent: true,
      },
      {
        source: "/32-seater-mini-bus-rent-nashik",
        destination: "/32-seater-bus-rent-nashik",
        permanent: true,
      },
      {
        source: "/45-seater-bus-on-rent-nashik",
        destination: "/45-seater-bus-rent-nashik",
        permanent: true,
      },
      {
        source: "/ac-bus-hire-nashik-40-seater",
        destination: "/45-seater-bus-rent-nashik",
        permanent: true,
      },
      {
        source: "/nashik-to-mumbai-tempo-traveller-rent",
        destination: "/nashik-to-mumbai-tempo-traveller",
        permanent: true,
      },
      {
        source: "/nashik-to-pune-bus-on-rent",
        destination: "/nashik-to-pune-bus-rent",
        permanent: true,
      },
      {
        source: "/nashik-to-aurangabad-group-travel",
        destination: "/nashik-to-aurangabad-tempo-traveller",
        permanent: true,
      },
      {
        source: "/nepal-package-from-nashik",
        destination: "/nepal-tour-package-from-nashik",
        permanent: true,
      },
      {
        source: "/nepal-tour-from-nashik",
        destination: "/nepal-tour-package-from-nashik",
        permanent: true,
      },
      {
        source: "/muktinath-yatra-from-nashik",
        destination: "/muktinath-tour-package-from-nashik",
        permanent: true,
      },
      {
        source: "/wedding-bus-on-rent-nashik",
        destination: "/wedding-bus-hire-nashik",
        permanent: true,
      },
      {
        source: "/corporate-bus-rental-nashik",
        destination: "/corporate-bus-hire-nashik",
        permanent: true,
      },
      {
        source: "/school-picnic-bus-on-rent-nashik",
        destination: "/school-picnic-bus-nashik",
        permanent: true,
      },
      {
        source: "/luxury-bus-rental-nashik",
        destination: "/luxury-ac-bus-rental-nashik",
        permanent: true,
      },
      {
        source: "/nashik-to-saptashrungi-bus-hire",
        destination: "/nashik-to-saptashrungi-tempo-traveller",
        permanent: true,
      },
      {
        source: "/shirdi-trimbakeshwar-tour-from-nashik",
        destination: "/pilgrimage-tour-packages-from-nashik",
        permanent: true,
      },
      {
        source: "/pilgrimage-bus-nashik",
        destination: "/pilgrimage-tour-packages-from-nashik",
        permanent: true,
      },
      {
        source: "/family-picnic-tempo-traveller-nashik",
        destination: "/12-seater-tempo-traveller-nashik",
        permanent: true,
      },
      {
        source: "/college-trip-bus-rent-nashik",
        destination: "/school-picnic-bus-nashik",
        permanent: true,
      },
      {
        source: "/one-day-picnic-bus-hire-nashik",
        destination: "/20-seater-bus-rent-nashik",
        permanent: true,
      },
      {
        source: "/tempo-traveller-hire-panchavati-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/bus-rental-nashik-road",
        destination: "/bus-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/vehicle-rental-gangapur-road-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
      {
        source: "/nashik-darshan-tempo-traveller",
        destination: "/pilgrimage-tour-packages-from-nashik",
        permanent: true,
      },
      {
        source: "/tempo-traveller-cidco-nashik",
        destination: "/tempo-traveller-on-rent-nashik",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
