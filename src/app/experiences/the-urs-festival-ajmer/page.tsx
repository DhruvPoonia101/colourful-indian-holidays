import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  ursFestivalAjmerOverview,
  ursFestivalAjmerHighlights,
  ursFestivalAjmerFaqs,
  ursFestivalAjmerRelatedDestinations,
  ursFestivalAjmerRelatedExperiences,
} from "@/content/festivals/the-urs-festival-ajmer";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "The Urs Festival, Ajmer | Festival Guide";
const description =
  "Six days of devotional Sufi music and pilgrimage at Ajmer Sharif Dargah, marking the anniversary of Khwaja Moinuddin Chishti — one of South Asia's most significant Sufi shrines, open to visitors of all faiths.";
const pagePath = "/experiences/the-urs-festival-ajmer";
const heroImage = "/images/destinations/pushkar-lake-ghats.webp";

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
  { name: "The Urs Festival, Ajmer", path: pagePath },
];

export default function UrsFestivalAjmerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ursFestivalAjmerFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Pushkar Lake and its ghats, near Ajmer, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="The Urs Festival, Ajmer"
          subheadline="Six days of devotional Sufi music and pilgrimage at Ajmer Sharif Dargah, marking the anniversary of Khwaja Moinuddin Chishti — open to visitors of all faiths."
          whatsappMessage="Hi! I'd like to plan a trip around the Urs Festival with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="The Urs Festival, Ajmer" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {ursFestivalAjmerOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Ajmer, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">6 days, dates shift yearly on the Islamic lunar calendar</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={ursFestivalAjmerHighlights}
        />

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={ursFestivalAjmerRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={ursFestivalAjmerRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={ursFestivalAjmerFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around the Urs Festival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around the Urs Festival."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around the Urs Festival with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
