import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  kutchMahotsavOverview,
  kutchMahotsavHighlights,
  kutchMahotsavFaqs,
  kutchMahotsavRelatedDestinations,
  kutchMahotsavRelatedExperiences,
} from "@/content/festivals/kutch-mahotsav";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kutch Mahotsav (Rann Utsav) | Festival Guide";
const description =
  "A multi-month desert festival on the edge of the Great Rann of Kutch's white salt desert — a purpose-built tented camp, Kutchi craft traditions, and unforgettable full-moon nights on the salt flats.";
const pagePath = "/experiences/kutch-mahotsav";
const heroImage = "/images/destinations/kutch-mahotsav.webp";

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
  { name: "Kutch Mahotsav", path: pagePath },
];

export default function KutchMahotsavPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kutchMahotsavFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="The tented camp at Rann Utsav, on the edge of the Great Rann of Kutch"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Kutch Mahotsav (Rann Utsav)"
          subheadline="A multi-month desert festival on the edge of the Great Rann of Kutch's white salt desert — a purpose-built tented camp, Kutchi craft traditions, and unforgettable full-moon nights on the salt flats."
          whatsappMessage="Hi! I'd like to plan a trip around Kutch Mahotsav with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Kutch Mahotsav" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {kutchMahotsavOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">The Great Rann of Kutch, Gujarat</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">November through February</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={kutchMahotsavHighlights}
        />

        <CityGrid
          eyebrow="Nearby"
          heading="Related Destinations"
          cities={kutchMahotsavRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Explore More"
          heading="Other Experiences"
          cities={kutchMahotsavRelatedExperiences}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={kutchMahotsavFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Kutch Mahotsav."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Kutch Mahotsav."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Kutch Mahotsav with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
