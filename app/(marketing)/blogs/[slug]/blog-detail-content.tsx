"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import type { BlogPost } from "@/features/blog/lib/posts";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, OFFICE_ADDRESS_INLINE } from "@/features/home/lib/constants";
import type { ServicePage } from "@/features/seo/lib/service-pages";

export type BlogDetailContentProps = {
  post: BlogPost;
  whatsAppUrl: string;
  relatedServices: ServicePage[];
  relatedPosts: BlogPost[];
};

export function BlogDetailContent({
  post,
  whatsAppUrl,
  relatedServices,
  relatedPosts,
}: BlogDetailContentProps) {
  return (
    <>
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-18">
          <Link href="/blogs" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#FFD4C1] hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to blogs
          </Link>
          <p className="mb-4 inline-flex rounded-full border border-[#FF6B2B]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#FFD4C1]">
            {post.heroLabel}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <MapPin className="h-4 w-4" />
              Nashik, Maharashtra
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">Published Apr 28, 2026</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="space-y-5 text-lg leading-9 text-gray-700">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-8 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-3xl font-extrabold tracking-tight">{section.heading}</h2>
              {section.body && (
                <div className="mt-5 space-y-5 text-lg leading-9 text-gray-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="mt-6 grid gap-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#FF6B2B]" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#0B1F3A] text-white">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} className="px-4 py-3 font-bold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")} className="border-t border-gray-200">
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-3 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-3xl bg-[#0B1F3A] p-6 text-white sm:p-8 lg:p-10">
          <h2 className="text-3xl font-extrabold">{post.ctaTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">{post.ctaText}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 text-center font-bold text-white"
            >
              WhatsApp for Booking
            </a>
            <a
              href={CONTACT_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#0B1F3A]"
            >
              <Phone className="h-4 w-4" />
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/70">
            Address: {OFFICE_ADDRESS_INLINE}. Open 24 hours.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-3xl font-extrabold">Related Nashik booking services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#FF6B2B] hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-[#0B1F3A]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{service.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="text-3xl font-extrabold">Related travel guides</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedPosts.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/blogs/${entry.slug}`}
                  className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#FF6B2B] hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-[#FF6B2B]">{entry.category}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B1F3A]">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{entry.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-600">
          <p className="font-bold text-[#0B1F3A]">Tags</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#F7F8FB] px-3 py-1 font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
}
