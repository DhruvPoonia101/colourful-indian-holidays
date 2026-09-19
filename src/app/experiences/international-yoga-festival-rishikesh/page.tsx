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
  yogaFestivalRishikeshOverview,
  yogaFestivalRishikeshHighlights,
  yogaFestivalRishikeshFaqs,
  yogaFestivalRishikeshRelatedDestinations,
  yogaFestivalRishikeshRelatedExperiences,
} from "@/content/festivals/international-yoga-festival-rishikesh";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "International Yoga Festival, Rishikesh | Festival Guide";
const description =
  "A week of yoga, meditation and Ayurveda taught by instructors from around the world on the banks of the Ganges — held each year in the city widely regarded as the birthplace of modern yoga tourism.";
const pagePath = "/experiences/international-yoga-festival-rishikesh";
const heroImage = "/images/destinations/rishikesh-2.webp";

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
  { name: "International Yoga Festival, Rishikesh", path: pagePath },
];

export default function InternationalYogaFestivalRishikeshPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(yogaFestivalRishikeshFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="The Lakshman Jhula suspension bridge over the Ganges, Rishikesh"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="International Yoga Festival, Rishikesh"
          subheadline="A week of yoga, meditation and Ayurveda taught by instructors from around the world on the banks of the Ganges."
          whatsappMessage="Hi! I'd like to plan a trip around the International Yoga Festival with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="International Yoga Festival, Rishikesh" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {yogaFestivalRishikeshOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Rishikesh, Uttarakhand</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Early March, around International Yoga Day</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={yogaFestivalRishikeshHighlights}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="/images/destinations/rishikesh-3.webp"
              alt="The evening Ganga Aarti fire ceremony, Rishikesh"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={yogaFestivalRishikeshRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={yogaFestivalRishikeshRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={yogaFestivalRishikeshFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around the International Yoga Festival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around the Yoga Festival."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around the International Yoga Festival with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
