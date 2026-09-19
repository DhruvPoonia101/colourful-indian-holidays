import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  kumbhMelaOverview,
  kumbhMelaHighlights,
  kumbhMelaFaqs,
  kumbhMelaRelatedDestinations,
  kumbhMelaRelatedExperiences,
} from "@/content/festivals/kumbh-mela";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kumbh Mela | Festival Guide";
const description =
  "The largest peaceful gathering of human beings anywhere on Earth — ritual bathing, Naga Sadhu processions, and a temporary tent city built to house tens of millions of pilgrims.";
const pagePath = "/experiences/kumbh-mela";
const heroImage = "/images/destinations/haridwar-2.webp";

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
  { name: "Festival Tours", path: "/experiences/festival-tours" },
  { name: "Kumbh Mela", path: pagePath },
];

export default function KumbhMelaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kumbhMelaFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Har Ki Pauri ghat and the Ganges at Haridwar"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Kumbh Mela"
          subheadline="The largest peaceful gathering of human beings anywhere on Earth — ritual bathing, Naga Sadhu processions, and a temporary tent city built to house tens of millions of pilgrims."
          whatsappMessage="Hi! I'd like to plan a trip around Kumbh Mela with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Kumbh Mela" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {kumbhMelaOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Rotates between Haridwar, Prayagraj, Ujjain and Nashik</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Set by Hindu astrology; each city hosts roughly once every 12 years</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={kumbhMelaHighlights}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="/images/destinations/haridwar.webp"
              alt="A statue of Shiva on the Ganges riverfront, Haridwar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={kumbhMelaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={kumbhMelaRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={kumbhMelaFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Kumbh Mela."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Kumbh Mela."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Kumbh Mela with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
