"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/features/home/lib/constants";

export function NotFoundContent() {
  return (
    <main className="min-h-screen bg-[#F7F8FB] px-4 py-20 text-[#0B1F3A]">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B2B]">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          This travel page is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          The page may have moved, but you can still book a cab, tempo traveller, or bus from Nashik with our team.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-[#FF6B2B] px-6 py-3 font-bold text-white transition hover:bg-[#e85b20]"
          >
            Go to Home
          </Link>
          <Link
            href="/blogs"
            className="rounded-xl border border-[#0B1F3A]/15 px-6 py-3 font-bold text-[#0B1F3A] transition hover:border-[#FF6B2B] hover:text-[#FF6B2B]"
          >
            Read Travel Guides
          </Link>
          <a
            href={CONTACT_PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1F3A] px-6 py-3 font-bold text-white"
          >
            <Phone className="h-4 w-4" />
            Call {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
