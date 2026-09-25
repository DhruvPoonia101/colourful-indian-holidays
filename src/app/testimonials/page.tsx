import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Testimonials } from "@/components/home/Testimonials";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Reuses the existing <Testimonials /> component (and its underlying
 * `testimonials` array in content/home.ts) rather than duplicating the
 * review text into a second, separate data file — this page and the
 * homepage now share one source of truth. Adding a new review to
 * content/home.ts updates both places automatically.
 *
 * Deliberately does NOT add Review/AggregateRating JSON-LD here. This page
 * shows two separate, equally-prominent rating sources (Google 4.9/140+ and
 * Tripadvisor 4.9/282+) side by side — the exact situation
 * organization-schema.ts already documents a reason to avoid: Google's
 * guidelines expect one canonical aggregateRating clearly substantiated by
 * the page, and picking one of the two here would risk the same manual-
 * action exposure that schema file already flags. Follow that precedent
 * rather than reintroducing the risk on a new page.
 */

const title = "Traveller Reviews & Testimonials";
const description = `Real reviews from Google and Tripadvisor — ${BUSINESS.aggregateRating.ratingValue}★ from ${BUSINESS.aggregateRating.reviewCount}+ Tripadvisor reviews and ${BUSINESS.googleRating.ratingValue}★ from ${BUSINESS.googleRating.reviewCount}+ Google reviews.`;
const pagePath = "/testimonials";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Testimonials", path: pagePath },
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image="/images/destinations/udaipur-lake-palace.webp"
          imageAlt="Lake Palace floating on Lake Pichola, Udaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Traveller Reviews"
          headline="What Our Guests Say"
          subheadline="Real reviews from Google and Tripadvisor, shown here word-for-word rather than edited or summarised."
        />

        <Testimonials />

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Verify It Yourself"
                heading="Read Every Review, Not Just Our Selection"
                align="center"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                We&apos;ve featured a handful of reviews above, but the full picture is on the review
                platforms themselves — including any less glowing ones, which we think is worth
                seeing too rather than only curating the best lines.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={BUSINESS.sameAs.find((url) => url.includes("tripadvisor"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.03] hover:bg-maroon-dark"
                >
                  Read All Tripadvisor Reviews
                </a>
                <a
                  href={BUSINESS.googleRating.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-maroon/40 px-6 py-3 text-sm font-semibold text-maroon transition-all duration-200 hover:scale-[1.03] hover:bg-maroon/5"
                >
                  Read All Google Reviews
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <JourneyCTA
          backgroundImage="/images/destinations/udaipur-lake-palace.webp"
          eyebrow="Start Your Journey"
          headline="Ready to Write Your Own Review One Day?"
          headlineItalic="Let's Plan the Trip First."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'd like to know more about planning a trip with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
