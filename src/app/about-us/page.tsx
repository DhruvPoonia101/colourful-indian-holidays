import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "About Us | Colourful Indian Holidays";
const description =
  "Founded in 2008 and based in Jaipur, Colourful Indian Holidays designs private, tailor-made journeys across India, Nepal and Bhutan for travellers from around the world.";
const pagePath = "/about-us";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: pagePath },
];

const whyUs = [
  {
    title: `${new Date().getFullYear() - BUSINESS.foundingYear}+ Years of Local Expertise`,
    description: `Founded in ${BUSINESS.foundingYear} and based in Jaipur — every itinerary is built by people who live where you're travelling.`,
  },
  {
    title: "Personalised, Not Fixed Packages",
    description:
      "Every trip is built around your dates, interests and budget, not slotted into a pre-set group tour.",
  },
  {
    title: "English-Speaking Expert Guides",
    description:
      "Local guides who know the history and can navigate cultural questions naturally, in fluent English.",
  },
  {
    title: "Support Throughout Your Trip",
    description:
      "A direct WhatsApp line to our team for the full length of your journey, not just before you book.",
  },
  {
    title: "Handpicked Heritage Hotels",
    description:
      "We personally vet every property we recommend — real palaces and forts, not generic hotel chains.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Your quote shows exactly what's included, with no hidden fees added after you've committed.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image="/images/about/about-hero.webp"
          imageAlt="Colourful Indian Holidays"
          breadcrumbs={breadcrumbs}
          eyebrow="About Us"
          headline={`${SITE_NAME}, Since ${BUSINESS.foundingYear}`}
          subheadline="A Jaipur-based team designing private journeys across India, Nepal and Bhutan for travellers from around the world."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Our Story" heading="Built From Rajasthan, For the World" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Colourful Indian Holidays was founded in {BUSINESS.foundingYear} in Jaipur,
                  built on a simple idea: the best way to show someone India is to
                  plan their trip the way we&apos;d plan it for a friend — privately, around
                  their own dates and interests, not squeezed into someone else&apos;s fixed
                  itinerary. For an international traveller researching India for the first
                  time, that distinction matters more than it might seem — most of the
                  frustration people report from group tours comes down to a schedule they
                  never agreed to and a pace they can&apos;t control. We built this company to
                  remove both of those problems from the start.
                </p>
                <p>
                  Since then, we&apos;ve grown into a full-service travel company covering
                  the Golden Triangle, wider India, Nepal and Bhutan — but the
                  approach hasn&apos;t changed. Every itinerary is still built by people based
                  here, who know the roads, the hotels, and the guides personally, rather than
                  assembled from a template or resold from a wholesaler. When you ask us about
                  the drive time between two cities, the best season for a particular festival,
                  or which hotel actually has the view it advertises, you&apos;re getting an
                  answer from someone who has been there, not a generic travel database.
                </p>
                <p>
                  Today we work with travellers from the USA, UK, Australia, Canada, across
                  Europe and beyond, speaking English, French, German and Spanish, and we&apos;re
                  proud to be an IATO-registered agency recognised by Rajasthan Tourism and the
                  Ministry of Tourism, Government of India. That registration isn&apos;t just a
                  badge on a website — it means the agency you&apos;re booking with is an
                  accountable, verifiable business, which is exactly the kind of reassurance
                  international travellers tell us they look for before wiring money to a
                  company on the other side of the world.
                </p>
                <p>
                  Most of our guests are planning their first trip to India, often after years of
                  wanting to visit but hesitating over the logistics — where to start, how to
                  avoid tourist traps, whether a private guide is worth the cost, and how to know
                  a booking is legitimate before paying a deposit. Those are exactly the questions
                  we built this company to answer directly, in plain English, from a real Jaipur
                  office rather than a call centre reading from a script.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning From Abroad"
                heading="What International Travellers Ask Us Before Booking"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  <strong className="text-ink">Communication and language.</strong> Every guide
                  and driver we assign speaks fluent English, and our office team also covers
                  French, German and Spanish, so questions about the itinerary, a hotel change,
                  or a delayed flight can be handled directly, without a translation gap at the
                  moment it matters most.
                </p>
                <p>
                  <strong className="text-ink">Safety and legitimacy.</strong> As an
                  IATO-registered agency recognised by the Ministry of Tourism, we&apos;re
                  accountable to real industry standards, not an anonymous website. Every driver
                  and guide is someone we&apos;ve worked with directly, not a subcontractor booked
                  the day before your trip.
                </p>
                <p>
                  <strong className="text-ink">Visas and entry requirements.</strong> While visa
                  applications are ultimately your own responsibility, we&apos;re happy to point
                  first-time visitors toward the correct e-Visa process for India and confirm
                  what documentation each stop on your itinerary typically requires.
                </p>
                <p>
                  <strong className="text-ink">Payment and pricing transparency.</strong> Every
                  quote shows exactly what&apos;s included — hotels, transport, guide fees, and
                  entry tickets — so there are no surprise charges added once you&apos;ve already
                  committed to the trip.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Travel With Us"
          heading="What Sets Us Apart"
          highlights={whyUs}
        />

        <JourneyCTA
          backgroundImage="/images/about/about-hero.webp"
          eyebrow="Start Your Journey"
          headline="Your India, Nepal & Bhutan Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}