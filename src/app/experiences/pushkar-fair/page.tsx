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
  pushkarFairOverview,
  pushkarFairHighlights,
  pushkarFairFaqs,
  pushkarFairRelatedDestinations,
  pushkarFairRelatedExperiences,
} from "@/content/festivals/pushkar-fair";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pushkar Fair | Festival Guide";
const description =
  "One of the world's largest camel and livestock fairs, held at Pushkar's sacred lake — thousands of camels and traders alongside folk music, competitions, and a genuinely vast temporary desert encampment.";
const pagePath = "/experiences/pushkar-fair";
const heroImage = "/images/destinations/pushkar.webp";

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
  { name: "Pushkar Fair", path: pagePath },
];

export default function PushkarFairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pushkarFairFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Traditional Rajasthani performers at the Pushkar Fair"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Pushkar Fair"
          subheadline="One of the world's largest camel and livestock fairs, held at Pushkar's sacred lake — thousands of camels and traders alongside folk music, competitions, and a genuinely vast temporary desert encampment."
          whatsappMessage="Hi! I'd like to plan a trip around Pushkar Fair with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Pushkar Fair" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {pushkarFairOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Pushkar, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">October or November (exact dates shift yearly on the lunar calendar)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={pushkarFairHighlights}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 overflow-hidden rounded-3xl sm:grid-cols-2">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="/images/destinations/pushkar-brahma-temple.webp"
                alt="The Brahma Temple, Pushkar"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="/images/destinations/pushkar-lake-ghats.webp"
                alt="Pushkar Lake and its ghats, Rajasthan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={pushkarFairRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={pushkarFairRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={pushkarFairFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Pushkar Fair."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Pushkar Fair."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Pushkar Fair with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
