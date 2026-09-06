import { PageHero } from "@/components/layout/PageHero";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ItineraryTimeline } from "@/components/packages/ItineraryTimeline";
import { InclusionsExclusions } from "@/components/packages/InclusionsExclusions";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristTripJsonLd } from "@/lib/seo/tourist-trip-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import type { PackageContent } from "@/content/packages/types";

export function PackagePageTemplate({ content }: { content: PackageContent }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Tours & Packages", path: "/packages" },
    { name: content.name, path: `/packages/${content.slug}` },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristTripJsonLd({
              slug: content.slug,
              name: content.name,
              description: content.metaDescription,
              image: content.heroImage,
              durationDays: content.itinerary.length,
              priceCurrency: content.priceCurrency,
              itinerary: content.itinerary,
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
          breadcrumbs={breadcrumbs}
          eyebrow={content.tagline}
          headline={content.heroHeadline}
          subheadline={content.heroSubheadline}
          primaryLabel="Plan My Journey"
          primaryQuoteButtonPageName={`${content.name} (Hero)`}
          whatsappMessage={`Hi! I'd like to know more about the ${content.name}.`}
          heightClassName={content.heroHeightClassName}
        />

        <QuickFacts facts={content.quickFacts} quoteButtonPageName={`${content.name} (Quick Facts)`} />

        <ItineraryTimeline
          eyebrow="Day By Day"
          heading={`${content.name} Itinerary`}
          intro={content.overview}
          days={content.itinerary}
          topDivider
        />

        <InclusionsExclusions
          eyebrow="What's Covered"
          heading="Inclusions & Exclusions"
          inclusions={content.inclusions}
          exclusions={content.exclusions}
          topDivider
        />

        <HighlightsStrip
          eyebrow="Why This Tour"
          heading={`Why Travel ${content.name} With Us`}
          highlights={content.highlights}
          topDivider
        />

        {content.bestTimeToVisit && (
          <section className="border-t border-sand/70 py-10 text-center sm:py-14">
            <div className="mx-auto max-w-2xl px-6 sm:px-8">
              <Reveal>
                <SectionIntro
                  eyebrow="Best Time to Visit"
                  heading={content.bestTimeToVisit.heading}
                  align="center"
                  headingSizeClassName="text-2xl sm:text-3xl"
                />
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {content.bestTimeToVisit.note}
                </p>
                <div className="mt-7 flex justify-center">
                  <Button href="/best-time-to-visit" variant="gold">
                    View the Full Travel Calendar
                    <FiArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {content.relatedDestinations && content.relatedDestinations.length > 0 && (
          <CityGrid
            eyebrow="On This Route"
            heading="Related Destinations"
            cities={content.relatedDestinations}
            topDivider
            showActions
          />
        )}

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Related Tour Packages"
          cities={content.relatedPackages}
          topDivider
          showActions
        />

        {content.showCarFleet && (
          <CityGrid
            eyebrow="Plan Your Trip"
            heading="Getting Around by Private Car"
            cities={fleetCards.slice(0, 3)}
            topDivider
            showActions
          />
        )}

        <FAQSection
          eyebrow="FAQ"
          heading={`Common Questions About the ${content.name}`}
          faqs={content.faqs}
          whatsappMessage={`Hi! I have a question about the ${content.name}.`}
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
          whatsappMessage={`Hi! I'd like to book the ${content.name}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
