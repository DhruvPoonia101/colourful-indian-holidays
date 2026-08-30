import { PageHero } from "@/components/layout/PageHero";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { VehicleCapacityDetails } from "@/components/fleet/VehicleCapacityDetails";
import { PopularRoutes } from "@/components/fleet/PopularRoutes";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import type { VehicleContent } from "@/content/fleet/types";

export function VehiclePageTemplate({ content }: { content: VehicleContent }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Car Rental", path: "/car-rental" },
    { name: content.name, path: `/car-rental/${content.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(content.faqs)) }}
      />

      <main>
        <PageHero
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
          breadcrumbs={breadcrumbs}
          eyebrow={content.tagline}
          headline={content.heroHeadline}
          subheadline={content.heroSubheadline}
          primaryHref="/contact"
          primaryLabel="Plan My Journey"
          whatsappMessage={`Hi! I'd like to book a ${content.name} for my trip with Colourful Indian Holidays.`}
        />

        <QuickFacts facts={content.quickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading={`About the ${content.name}`} />
                <div className="shrink-0">
                  <GetQuoteButton pageName={content.name} variant="carRental" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {content.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <VehicleCapacityDetails
          capacityPassengers={content.capacityPassengers}
          luggageBags={content.luggageBags}
          bestForDescription={content.bestForDescription}
          exampleModels={content.exampleModels}
          features={content.features}
        />

        <PopularRoutes />

        <HighlightsStrip
          eyebrow="Why This Vehicle"
          heading={`What to Expect With the ${content.name}`}
          highlights={content.highlights}
          topDivider
        />

        <CityGrid
          eyebrow="Other Fleet Options"
          heading="Compare Our Vehicles"
          cities={content.otherVehicles}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading={`Common Questions About the ${content.name}`}
          intro="Everything international travellers ask before booking transport with us — answered honestly."
          faqs={content.faqs}
          whatsappMessage={`Hi! I have a question about renting a ${content.name}.`}
          topDivider
        />

        <JourneyCTA
          backgroundImage={content.heroImage}
          eyebrow="Start Your Journey"
          headline="Your India, Nepal & Bhutan Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'd like to book a ${content.name} with Colourful Indian Holidays.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
