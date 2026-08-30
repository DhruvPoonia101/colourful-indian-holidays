import { PageHero } from "@/components/layout/PageHero";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { ItineraryTimeline } from "@/components/packages/ItineraryTimeline";
import { InclusionsExclusions } from "@/components/packages/InclusionsExclusions";
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
              startingPrice: content.startingPrice,
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
          primaryHref="/contact"
          primaryLabel="Plan My Journey"
          whatsappMessage={`Hi! I'd like to know more about the ${content.name}.`}
        />

        <QuickFacts facts={content.quickFacts} />

        <ItineraryTimeline
          eyebrow="Day By Day"
          heading={`${content.name} Itinerary`}
          intro={content.overview}
          days={content.itinerary}
          topDivider
          actionSlot={<GetQuoteButton pageName={content.name} />}
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

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Related Tour Packages"
          cities={content.relatedPackages}
          topDivider
          showActions
        />

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
