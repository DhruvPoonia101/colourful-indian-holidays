import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  camelFestivalOverview,
  camelFestivalHighlights,
  camelFestivalFaqs,
  camelFestivalRelatedDestinations,
  camelFestivalRelatedExperiences,
} from "@/content/festivals/camel-festival";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Bikaner Camel Festival | Festival Guide";
const description =
  "A dedicated two-day cultural celebration of the camel in desert Rajasthan — decorated camel processions, races and competitions, and desert folk performances in Bikaner each January.";
const pagePath = "/experiences/camel-festival";
const heroImage = "/images/destinations/jaisalmer-desert.webp";

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
  { name: "Camel Festival", path: pagePath },
];

export default function CamelFestivalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(camelFestivalFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Camels in the Thar Desert, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Bikaner Camel Festival"
          subheadline="A dedicated two-day cultural celebration of the camel in desert Rajasthan — decorated camel processions, races and competitions, and desert folk performances each January."
          whatsappMessage="Hi! I'd like to plan a trip around the Bikaner Camel Festival with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Bikaner Camel Festival" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {camelFestivalOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Bikaner, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">January (dates shift slightly each year on the Hindu calendar)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={camelFestivalHighlights}
        />

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={camelFestivalRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={camelFestivalRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={camelFestivalFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around the Bikaner Camel Festival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around the Camel Festival."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around the Bikaner Camel Festival with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
