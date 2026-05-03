"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  OFFICE_ADDRESS_INLINE,
} from "@/features/home/lib/constants";
import type { ServicePage } from "@/features/seo/lib/service-pages";

export type ServicePageContentProps = {
  page: ServicePage;
  relatedServices: ServicePage[];
  whatsAppUrl: string;
};

export function ServicePageContent({ page, relatedServices, whatsAppUrl }: ServicePageContentProps) {
  return (
    <>
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-5 inline-flex rounded-full border border-[#FF6B2B]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#FFD4C1]">
            {page.heroLabel}
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B2B] px-6 py-3 font-bold text-white shadow-lg transition hover:bg-[#e85b20]"
            >
              <Phone className="h-5 w-5" />
              Call {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-[#0B1F3A] shadow-lg transition hover:bg-white/90"
            >
              WhatsApp for Fare
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
        <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
          <h2 className="text-3xl font-extrabold tracking-tight">Service details and fare guidance</h2>
          {page.routeSummary && (
            <p className="mt-5 flex gap-2 rounded-2xl bg-[#F7F8FB] p-4 font-semibold text-gray-700">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2B]" />
              {page.routeSummary}
            </p>
          )}
          <p className="mt-5 text-lg leading-8 text-gray-700">{page.fareGuidance}</p>
          {page.rateRows && page.rateRows.length > 0 && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="px-4 py-3 font-bold">Fare factor</th>
                    <th className="px-4 py-3 font-bold">Guidance</th>
                  </tr>
                </thead>
                <tbody>
                  {page.rateRows.map((row) => (
                    <tr key={row.label} className="border-t border-gray-200">
                      <td className="px-4 py-3 font-bold text-[#0B1F3A]">{row.label}</td>
                      <td className="px-4 py-3 text-gray-700">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-xl font-extrabold">Best for</h3>
              <ul className="mt-4 space-y-3">
                {page.bestFor.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-xl font-extrabold">Why book with us</h3>
              <ul className="mt-4 space-y-3">
                {page.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <aside className="rounded-3xl bg-[#0B1F3A] p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold">Get a quick quote</h2>
          <p className="mt-4 leading-7 text-white/75">
            Share your travel date, starting location, destination, passenger count, and vehicle preference.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-5 py-3 text-center font-bold text-white"
            >
              Send Details on WhatsApp
            </a>
            <a
              href={CONTACT_PHONE_TEL}
              className="inline-flex justify-center rounded-xl bg-white px-5 py-3 font-bold text-[#0B1F3A]"
            >
              Call Now
            </a>
            <Link
              href="/#book"
              className="inline-flex justify-center rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition hover:border-[#FF6B2B] hover:text-[#FFD4C1]"
            >
              Open Booking Form
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/65">{OFFICE_ADDRESS_INLINE}</p>
        </aside>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-gray-200 bg-[#F7F8FB] p-5">
                <h3 className="text-lg font-extrabold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.relatedPosts && page.relatedPosts.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Helpful travel guides</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.relatedPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="rounded-2xl border border-gray-200 bg-[#F7F8FB] p-5 transition hover:border-[#FF6B2B] hover:shadow-lg"
                >
                  <h3 className="text-xl font-extrabold text-[#0B1F3A]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#FF6B2B]">
                    Read guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Related Nashik travel services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-[#FF6B2B] hover:shadow-lg"
              >
                <h3 className="text-xl font-extrabold group-hover:text-[#FF6B2B]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{service.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#FF6B2B]">
                  View service <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
