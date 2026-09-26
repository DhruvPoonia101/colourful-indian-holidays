import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { pilgrimageCards } from "@/content/pilgrimage-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
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

export default function PilgrimageToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
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
