import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { camelFestivalHighlights, camelFestivalFaqs } from "@/content/festivals/camel-festival";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Camel Festival, Bikaner | Festival Guide";
const description =
  "A desert festival in Bikaner celebrating Rajasthan&apos;s working relationship with camels, with decorated camel processions, races, and traditional desert folk performances.";
const pagePath = "/themes/festival-tours/camel-festival";
const heroImage = "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp";

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
  { name: "Experiences", path: "/themes" },
  { name: "Festival Tours", path: "/themes/festival-tours" },
  { name: "Camel Festival, Bikaner", path: pagePath },
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
          imageAlt="Traditional Rajasthani performers at a desert camel festival"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Camel Festival, Bikaner"
          subheadline="A desert festival in Bikaner celebrating Rajasthan&apos;s working relationship with camels, with decorated camel processions, races, and traditional desert folk performances."
          whatsappMessage="Hi! I'd like to plan a trip around Camel Festival, Bikaner with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Camel Festival, Bikaner" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Bikaner&apos;s Camel Festival celebrates the animal that&apos;s shaped desert life in Rajasthan for centuries — the camel remains a working animal here, not a novelty, and the festival is as much a tribute to that relationship as it is a spectacle. Camels are elaborately decorated for processions, alongside races and traditional desert games.</p>
                <p>The festival typically includes folk music and dance performances against the backdrop of Bikaner&apos;s desert landscape, along with camel-related competitions that showcase skills genuinely used in everyday desert life, not staged purely for visitors.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Bikaner, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">January (exact dates shift yearly)</p>
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

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={camelFestivalFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Camel Festival, Bikaner."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Camel Festival, Bikaner."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Camel Festival, Bikaner with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
