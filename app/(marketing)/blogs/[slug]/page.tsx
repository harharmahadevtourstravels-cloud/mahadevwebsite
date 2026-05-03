import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildWhatsAppUrl } from "@/features/home/lib/booking";
import { BLOG_POSTS, getBlogPost } from "@/features/blog/lib/posts";
import { SERVICE_PAGES } from "@/features/seo/lib/service-pages";
import { DEFAULT_OG_IMAGE, safeJsonLd, SITE_NAME, SITE_URL } from "@/features/seo/lib/site";
import { BlogDetailContent } from "./blog-detail-content";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const canonical = `${SITE_URL}/blogs/${post.slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Har Har Mahadev Tours & Travels"],
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const canonical = `${SITE_URL}/blogs/${post.slug}`;
  const whatsAppUrl = buildWhatsAppUrl(
    `Hello Har Har Mahadev Tours & Travels, I read your blog "${post.title}" and want help planning a trip from Nashik.`
  );
  const relatedServices = SERVICE_PAGES.filter((service) =>
    [service.primaryKeyword, service.title, service.serviceType].some((keyword) =>
      post.tags.join(" ").toLowerCase().includes(keyword.toLowerCase())
    )
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon0.svg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        articleSection: post.category,
        inLanguage: "en-IN",
        wordCount: post.sections.reduce((total, section) => {
          const bodyWords = section.body?.join(" ").split(/\s+/).filter(Boolean).length ?? 0;
          const listWords = section.list?.join(" ").split(/\s+/).filter(Boolean).length ?? 0;
          return total + bodyWords + listWords;
        }, post.intro.join(" ").split(/\s+/).filter(Boolean).length),
        keywords: post.tags,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: `${SITE_URL}/blogs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  if (relatedServices.length === 0) {
    relatedServices.push(...SERVICE_PAGES.slice(0, 3));
  }

  const relatedPosts = BLOG_POSTS.filter((entry) => entry.slug !== post.slug)
    .filter((entry) => entry.category === post.category || entry.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F7F8FB] text-[#0B1F3A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />

      <BlogDetailContent
        post={post}
        whatsAppUrl={whatsAppUrl}
        relatedServices={relatedServices}
        relatedPosts={relatedPosts}
      />
    </main>
  );
}
