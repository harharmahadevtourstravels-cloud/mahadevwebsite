"use client";

import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import { BLOG_POSTS } from "@/features/blog/lib/posts";

export function BlogsListContent() {
  return (
    <>
      <section className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-5 inline-flex rounded-full border border-[#FF6B2B]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#FFD4C1]">
            Nashik Travel Blog
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Practical travel guides for Nashik trips, rentals, pilgrimages, and group tours.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Read local, useful guides from Har Har Mahadev Tours & Travels before booking your cab, tempo traveller, bus, or sightseeing package.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-gray-600">
          <Search className="h-5 w-5 text-[#FF6B2B]" />
          <span>{BLOG_POSTS.length} guides available</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-[#FF6B2B]/10 px-3 py-1 font-bold text-[#FF6B2B]">{post.category}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-600">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold leading-tight">
                <Link href={`/blogs/${post.slug}`} className="hover:text-[#FF6B2B]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 leading-7 text-gray-600">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.targetKeywords.slice(0, 2).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-500"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/blogs/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#FF6B2B]"
              >
                Read guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
