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
  diwaliOverview,
  diwaliHighlights,
  diwaliFaqs,
  diwaliRelatedDestinations,
  diwaliRelatedExperiences,
} from "@/content/festivals/diwali";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Diwali, the Festival of Lights | Festival Guide";
const description =
  "India's largest festival — diyas and string lights across homes, temples and cities, with Varanasi's ghats and Amritsar's Golden Temple offering two of the most striking public displays anywhere in the country.";
const pagePath = "/experiences/diwali";
const heroImage = "/images/destinations/diwali.webp";

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
  { name: "Diwali", path: pagePath },
];

export default function DiwaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(diwaliFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Diyas and a rangoli pattern lit for Diwali"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Diwali, the Festival of Lights"
          subheadline="India's largest festival — diyas and string lights across homes, temples and cities, with Varanasi's ghats and Amritsar's Golden Temple offering two of the most striking public displays anywhere in the country."
          whatsappMessage="Hi! I'd like to plan a trip around Diwali with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Diwali, the Festival of Lights" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {diwaliOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Across India; Varanasi and Amritsar offer the most striking public displays</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">A 5-day period, typically October or November</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={diwaliHighlights}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="/images/destinations/amritsar.webp"
              alt="The Golden Temple reflected in its pool, Amritsar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={diwaliRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={diwaliRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={diwaliFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Diwali."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Diwali."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Diwali with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
