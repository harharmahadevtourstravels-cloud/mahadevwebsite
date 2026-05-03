"use client";

import { Award, CalendarDays, CheckCircle2, MapPin, Phone, Route, Users } from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  OFFICE_ADDRESS_INLINE,
} from "@/features/home/lib/constants";

type AboutUsContentProps = {
  whatsAppUrl: string;
};

const highlights = [
  {
    title: "Serving Since 2006",
    description: "Nearly two decades of hands-on travel operations from Nashik.",
    icon: CalendarDays,
  },
  {
    title: "Local Route Expertise",
    description:
      "Practical knowledge of Nashik, Trimbakeshwar, Shirdi, Saptashrungi, and Maharashtra routes.",
    icon: Route,
  },
  {
    title: "Family and Group Travel",
    description: "Vehicle support for families, pilgrims, weddings, corporate teams, schools, and tours.",
    icon: Users,
  },
];

const values = [
  "Clean vehicles that are checked before trips",
  "Clear pricing discussion before confirmation",
  "Drivers with practical local route experience",
  "Punctual pickup planning for time-sensitive journeys",
  "Direct call and WhatsApp support",
  "Simple booking for cabs, tempo travellers, and buses",
];

export function AboutUsContent({ whatsAppUrl }: AboutUsContentProps) {
  return (
    <>
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#FF6B2B]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#FFD4C1]">
              About Har Har Mahadev Tours & Travels
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Reliable vehicle rentals from Nashik, built around trust and punctual service.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              We help families, pilgrims, corporate groups, schools, and travellers plan comfortable local and outstation journeys with the right cab, tempo traveller, van, or bus.
            </p>
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
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-gray-200 bg-[#F7F8FB] p-4 shadow-sm">
            <div
              className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#0B1F3A] via-[#17385f] to-[#FF6B2B]"
              aria-label="Founder profile placeholder for Mr. Yogesh Nikam"
            >
              <div className="absolute inset-0 opacity-15">
                <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/70" />
                <div className="absolute bottom-12 right-10 h-40 w-40 rounded-full border border-white/50" />
              </div>
              <div className="relative text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/30 bg-white/15 text-5xl font-extrabold text-white shadow-2xl backdrop-blur">
                  YN
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[#FFD4C1]">Founder</p>
                <h2 className="mt-1 text-3xl font-extrabold text-white">Mr. Yogesh Nikam</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full bg-[#FF6B2B]/10 px-4 py-2 text-sm font-bold text-[#FF6B2B]">
              Founder Profile
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Mr. Yogesh Nikam</h2>
            <p className="mt-2 text-xl font-bold text-[#FF6B2B]">Founder</p>
            <p className="mt-6 text-lg leading-9 text-gray-700">
              Mr. Yogesh Nikam has been running Har Har Mahadev Tours & Travels since 2006. His experience comes from years of managing real journeys for families, devotees, corporate teams, wedding groups, school trips, and outstation travellers from Nashik.
            </p>
            <p className="mt-5 text-lg leading-9 text-gray-700">
              Over the years, he has built the business around practical travel values: clean vehicles, suitable vehicle selection, punctual pickup planning, clear communication, and drivers who understand local and long-distance routes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-[#FF6B2B]/10 px-4 py-2 text-sm font-bold text-[#FF6B2B]">
            Experience You Can Depend On
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Professional travel support for important journeys.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From temple darshan and family vacations to employee outings and group transport, our team focuses on the details that make travel easier.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B2B]/10 text-[#FF6B2B]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="rounded-3xl bg-[#0B1F3A] p-7 text-white sm:p-10">
            <Award className="h-10 w-10 text-[#FF6B2B]" />
            <h2 className="mt-5 text-3xl font-extrabold">What we stand for</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              We keep the service simple and accountable: the right vehicle, clear communication, timely pickup, and direct support when customers need help.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex gap-3 rounded-2xl border border-gray-200 bg-[#F7F8FB] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2B]" />
                <span className="text-sm font-semibold leading-6 text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Plan your next trip with a local Nashik team.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Share your travel date, pickup location, passenger count, and destination. We will help you choose a suitable rental vehicle and explain the trip details clearly.
              </p>
              <p className="mt-4 flex gap-2 text-sm font-semibold text-gray-600">
                <MapPin className="h-5 w-5 shrink-0 text-[#FF6B2B]" />
                {OFFICE_ADDRESS_INLINE}
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={CONTACT_PHONE_TEL}
                className="inline-flex justify-center rounded-xl bg-[#FF6B2B] px-5 py-3 font-bold text-white transition hover:bg-[#e85b20]"
              >
                Call Now
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl border border-[#0B1F3A]/15 px-5 py-3 font-bold text-[#0B1F3A] transition hover:border-[#FF6B2B] hover:text-[#FF6B2B]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
