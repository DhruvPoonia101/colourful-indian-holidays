import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { Reveal } from "@/components/ui/Reveal";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { pilgrimageCards } from "@/content/pilgrimage-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * The booking-side counterpart to the informational Travel Guide pillar
 * at /travel-guide/pilgrimage-holiday-destinations-in-india, mirroring
 * exactly how Festival Tours (/experiences/festival-tours) is the
 * booking-side hub for the Top Cultural Festivals in India article.
 * Before this page, Spiritual India existed as one fixed itinerary but
 * nothing tied it together with the Kumbh Mela, Urs Festival, Yoga
 * Festival and Pushkar Fair experiences as a single browsable landing
 * page — this fills that gap. Cross-linked both ways with the Travel
 * Guide pillar.
 *
 * 29 Sep 2026 update: brought up to the same standard as Festival Tours,
 * which was later upgraded with an FAQ section and schema that this page
 * never got, since both were built in the same session but this one
 * came first. Added a 5-question FAQ addressing exactly the questions a
 * pilgrimage-focused enquirer would actually ask — timing around fixed
 * religious dates, respectful conduct as a non-pilgrim visitor, and
 * whether these trips can combine with general sightseeing — rather than
 * generic questions reused from another page.
 */

const title = "Pilgrimage Tours | India's Sacred Sites & Living Faith Traditions";
const description =
  "Plan a trip around India's pilgrimage sites and religious festivals — the Golden Temple, Rishikesh and Haridwar on the Ganges, Kumbh Mela, the Ajmer Urs, and Pushkar's sacred lake.";
const pagePath = "/experiences/pilgrimage-tours";
const heroImage = "/images/destinations/amritsar.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Experiences", path: "/experiences" },
  { name: "Pilgrimage Tours", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need to be religious to visit these sites?",
    answer:
      "No — all of the sites and occasions above welcome visitors regardless of faith, and most of our travellers come out of genuine curiosity and respect rather than religious observance. Dressing modestly, following any site-specific rules (such as covering your head at the Golden Temple), and behaving quietly around active worship is all that's expected.",
  },
  {
    question: "How far in advance should I book a date-specific pilgrimage trip?",
    answer:
      "Earlier than a standard sightseeing trip. Occasions tied to a fixed date on the religious or lunar calendar, like the Ajmer Urs or Kumbh Mela, draw large crowds, and accommodation near the site fills up months ahead. 3 to 6 months out is a safe window for the larger, more popular occasions.",
  },
  {
    question: "Can a pilgrimage-focused trip be combined with general sightseeing?",
    answer:
      "Yes — this is how most of our pilgrimage-themed trips actually work. Rather than building a trip entirely around one site, we typically add a pilgrimage stop or occasion onto a broader circuit, such as pairing Amritsar with a Golden Triangle itinerary, or timing a Rajasthan trip to pass through Pushkar or Ajmer on the right date.",
  },
  {
    question: "Which of these should I visit if I only have a few days?",
    answer:
      "Spiritual India is the easiest starting point, since it's a standalone 5-day itinerary covering Amritsar, Haridwar and Rishikesh year-round rather than being tied to one date. The others reward planning around a specific occasion, so they suit travellers who can build their dates around the event itself.",
  },
  {
    question: "Are these sites crowded, and is that difficult for foreign visitors?",
    answer:
      "Some genuinely are, especially the Kumbh Mela and the Ajmer Urs at their peak, and that's part of what makes them worth seeing. Foreign visitors are welcomed everywhere on this page, and for the larger, busier occasions we'd recommend a guide simply to navigate the scale of the crowds comfortably.",
  },
];

export default function PilgrimageToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="The Golden Temple reflected in its pool, Amritsar"
          breadcrumbs={breadcrumbs}
          eyebrow="Experiences"
          headline="India's Pilgrimage Sites & Living Faith Traditions"
          subheadline="From the Golden Temple to the banks of the Ganges, Sufi shrines to sacred lakes — five ways to build a trip around India's religious traditions, not just its monuments."
        />

        <CityGrid
          eyebrow="Pilgrimage Tours"
          heading="Choose a Sacred Site or Occasion"
          cities={pilgrimageCards}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Why Visit India's Pilgrimage Sites" />
              <div className="mt-6 max-w-7xl space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  India is home to living religious traditions practised continuously for
                  thousands of years, across faiths that include Hinduism, Sikhism and Islam
                  side by side — often within a single day&apos;s drive of each other. Unlike a
                  monument visited purely for its history, these are places where the tradition
                  is still actively happening: the Golden Temple&apos;s free community kitchen
                  feeds tens of thousands daily, the Ganga aarti at Haridwar and Rishikesh runs
                  every evening regardless of who&apos;s watching, and the Ajmer Urs draws pilgrims
                  of every faith to a shrine that has never stopped receiving them.
                </p>
                <p>
                  Some of the experiences above are built around a single trip you can take any
                  time of year — Spiritual India covers Amritsar, Haridwar and Rishikesh as a
                  standalone 5-day itinerary. Others are tied to a specific date on the religious
                  or lunar calendar, like the Kumbh Mela&apos;s 12-year rotation or the Ajmer Urs&apos;s
                  Islamic-calendar timing, and reward planning your trip dates around the
                  occasion itself. For a deeper, more detailed guide to individual pilgrimage
                  destinations across India — including the Char Dham Yatra in the high
                  Himalaya — see our{" "}
                  <Link
                    href="/travel-guide/pilgrimage-holiday-destinations-in-india"
                    className="font-semibold text-maroon underline decoration-maroon/30 underline-offset-4 hover:decoration-maroon"
                  >
                    full pilgrimage destinations guide
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FAQSection
          eyebrow="FAQ"
          heading="Pilgrimage Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about planning a pilgrimage-focused trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Pilgrimage Trip Awaits."
          headlineItalic="Which Site Calls You?"
          subtext="Tell us which sites or occasions interest you and your travel window — we'll build an itinerary around it, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a pilgrimage-focused trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}

