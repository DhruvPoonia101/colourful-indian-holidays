"use client";

import { useRef } from "react";
import { FaGoogle, FaTripadvisor, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { testimonials } from "@/content/home";
import { BUSINESS } from "@/lib/seo/business";

const quickStats = [
  { value: "4.9★", label: "Google Rating", platform: "google" as const },
  { value: "140+", label: "Google Reviews", platform: "google" as const },
  { value: "4.9★", label: "Tripadvisor Rating", platform: "tripadvisor" as const },
  { value: "282+", label: "Tripadvisor Reviews", platform: "tripadvisor" as const },
  { value: "7900+", label: "Happy Travellers", platform: null },
];

const tripadvisorUrl = BUSINESS.sameAs.find((url) => url.includes("tripadvisor"));

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow="Traveller Stories" heading="What Our Guests Say" />
          <p className="mt-4 text-sm text-ink-soft/70">
            Real reviews from Google and Tripadvisor, verified by us word-for-word.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {quickStats.map((stat) => {
              const href =
                stat.platform === "google"
                  ? BUSINESS.googleRating.mapsUrl
                  : stat.platform === "tripadvisor"
                    ? tripadvisorUrl
                    : undefined;

              const content = (
                <>
                  <p className="font-display text-3xl font-bold text-gold-dark sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-soft">{stat.label}</p>
                </>
              );

              if (href) {
                return (
                  <a
                    key={stat.label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-white px-4 py-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-gold sm:px-6 sm:py-8"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white px-4 py-6 text-center shadow-sm sm:px-6 sm:py-8"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mt-12">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((testimonial, index) => (
                <figure
                  data-card
                  key={testimonial.name + index}
                  className={`relative w-[85%] shrink-0 snap-start rounded-2xl border p-6 sm:w-[46%] lg:w-[31%] ${
                    testimonial.isPlaceholder
                      ? "border-dashed border-gold-dark/50 bg-cream/40"
                      : "border-sand bg-cream/40"
                  }`}
                >
                  <span className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                    {testimonial.platform === "google" ? (
                      <FaGoogle aria-label="Google review" className="h-4 w-4 text-[#4285F4]" />
                    ) : (
                      <FaTripadvisor aria-label="Tripadvisor review" className="h-4 w-4 text-[#34E0A1]" />
                    )}
                  </span>

                  {testimonial.isPlaceholder && (
                    <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
                      Placeholder
                    </span>
                  )}

                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="h-3.5 w-3.5 text-gold-dark" />
                    ))}
                  </div>

                  <blockquote className="mt-3 font-display text-base italic leading-relaxed text-ink">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-maroon">
                    {testimonial.name}
                    {testimonial.origin && (
                      <span className="ml-1 font-normal text-ink-soft">
                        · {testimonial.origin}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous reviews"
              className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-ink shadow-md transition-transform duration-200 hover:scale-110 sm:flex"
            >
              <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next reviews"
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-2.5 text-ink shadow-md transition-transform duration-200 hover:scale-110 sm:flex"
            >
              <FiChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={BUSINESS.googleRating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:border-gold"
          >
            <FaGoogle aria-hidden="true" className="h-4 w-4 text-[#4285F4]" />
            Check Google Reviews
          </a>
          {tripadvisorUrl && (
            <a
              href={tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:border-gold"
            >
              <FaTripadvisor aria-hidden="true" className="h-4 w-4 text-[#34E0A1]" />
              Check TripAdvisor Reviews
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
