import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildWhatsAppUrl } from "@/features/home/lib/booking";
import {
  buildRelatedServices,
  buildServiceJsonLd,
  getServicePage,
  SERVICE_PAGES,
} from "@/features/seo/lib/service-pages";
import { DEFAULT_OG_IMAGE, safeJsonLd, SITE_NAME, SITE_URL } from "@/features/seo/lib/site";
import { ServicePageContent } from "./service-page-content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {};
  }

  const canonical = `${SITE_URL}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [
      page.primaryKeyword,
      ...page.secondaryKeywords,
      page.serviceType,
      "Nashik tours and travels",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function LocalServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  const relatedServices = buildRelatedServices(page);
  const whatsAppUrl = buildWhatsAppUrl(
    `Hello Har Har Mahadev Tours & Travels, I want to enquire about ${page.title}. Starting location: Nashik. Please share fare and availability.`
  );

  return (
    <main className="bg-[#F7F8FB] text-[#0B1F3A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildServiceJsonLd(page)) }}
      />

      <ServicePageContent page={page} relatedServices={relatedServices} whatsAppUrl={whatsAppUrl} />
    </main>
  );
}
