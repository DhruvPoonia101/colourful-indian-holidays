import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  keralaAttractions,
  keralaQuickFacts,
  keralaGettingThere,
  keralaHighlights,
  keralaRelatedDestinations,
  keralaFaqs,
} from "@/content/destinations/kerala";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kerala | Backwaters, Tea Gardens & Fort Kochi";
const description =
  "Plan a trip to Kerala — houseboat nights on the Alleppey backwaters, Munnar's misty tea gardens, and colonial heritage in Fort Kochi.";
const pagePath = "/destinations/kerala";
const heroImage = "/images/destinations/alleppey-backwaters.webp";

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
  { name: "Destinations", path: "/destinations" },
  { name: "Kerala", path: pagePath },
];

export default function KeralaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(keralaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Kerala",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 9.9312,
              longitude: 76.2673,
              containsPlaces: keralaAttractions.map((attraction) => ({
                name: attraction.name,
                path: attraction.href,
              })),
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Houseboat on the Alleppey backwaters, Kerala"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Kerala — God's Own Country"
          subheadline="Palm-lined backwaters, misty tea gardens in the Western Ghats, and a coastline layered with centuries of trading history — a genuinely different side of India."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Kerala with Colourful Indian Holidays."
        />

        <QuickFacts facts={keralaQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="God's Own Country" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Kerala" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Kerala earns its nickname, &quot;God&apos;s Own Country&quot;, through sheer
                  landscape variety packed into a narrow strip of South India — palm-fringed
                  backwaters threading behind the coastline, misty tea plantations climbing the
                  Western Ghats, and a shoreline that&apos;s hosted traders from China, Arabia and
                  Europe for well over a thousand years. A night aboard a traditional kettuvallam
                  houseboat, drifting quietly through Alleppey&apos;s canals as village life
                  continues along the banks, is one of the more distinctive overnight experiences
                  available anywhere in India, and rarely something visitors forget. Kerala also
                  consistently ranks among India&apos;s most developed states by literacy and
                  infrastructure, which shows up in noticeably well-maintained roads, public
                  spaces and tourist facilities compared with much of the rest of the country.
                </p>
                <p>
                  Inland, Munnar&apos;s tea estates offer a genuinely different register — cool
                  mountain air and rolling green hills that feel far removed from Kerala&apos;s
                  tropical coast, best explored slowly rather than rushed through. Fort Kochi,
                  meanwhile, wears its trading history openly: Chinese fishing nets still worked
                  daily along the waterfront, Portuguese and Dutch colonial buildings standing
                  alongside spice warehouses, and an evening Kathakali performance offering a
                  window into Kerala&apos;s classical performing arts. Kerala is considered the
                  traditional home of Ayurvedic medicine as well, and many resorts across the
                  state offer genuine treatments rooted in centuries of local practice rather than
                  a diluted spa-menu version of it — worth building in as a dedicated day or two
                  for travellers with a genuine interest in wellness alongside sightseeing.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={keralaAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={keralaGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={keralaHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is the Best Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry conditions make this the most comfortable window for backwater cruises
                and hill-country visits alike. Kerala&apos;s monsoon (June to September) brings heavy
                rainfall, though it&apos;s also when the landscape is at its most vividly green.
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

        <CityGrid
          eyebrow="Pair Your Trip"
          heading="Nearby & Related Destinations"
          cities={keralaRelatedDestinations}
          topDivider
          showActions
        />

        <CityGrid
          eyebrow="Plan Your Trip"
          heading="Getting Around by Private Car"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={keralaFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Kerala with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Kerala Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Kerala with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
