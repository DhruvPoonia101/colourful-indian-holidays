import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { GettingThere } from "@/components/destinations/GettingThere";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  varanasiAttractions,
  varanasiQuickFacts,
  varanasiGettingThere,
  varanasiHighlights,
  varanasiRelatedDestinations,
  varanasiFaqs,
} from "@/content/destinations/varanasi";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Varanasi Tour Packages for International Travellers | The Ganges & Ganga Aarti";
const description =
  "Plan a private Varanasi trip — the evening Ganga Aarti, a sunrise boat ride, Kashi Vishwanath Temple and Sarnath, with an English-speaking guide. India's most significant pilgrimage city.";
const pagePath = "/destinations/varanasi";
const heroImage = "/images/destinations/varanasi-2.webp";
const ctaImage = "/images/destinations/varanasi.webp";

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
    images: [
      {
        url: `${SITE_URL}${heroImage}`,
        width: 1200,
        height: 630,
        alt: "Ganga aarti ceremony at the ghats of Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [`${SITE_URL}${heroImage}`],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Varanasi", path: pagePath },
];

export default function VaranasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(varanasiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Varanasi",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 25.3176,
              longitude: 82.9739,
              containsPlaces: [
                { name: "Dashashwamedh Ghat", path: pagePath },
                { name: "Kashi Vishwanath Temple", path: pagePath },
                { name: "Sarnath", path: pagePath },
              ],
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Ganga aarti ceremony at the ghats of Varanasi"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Varanasi — India's Most Sacred City"
          subheadline="One of the oldest continuously inhabited cities in the world, and the single most significant pilgrimage destination in India — still lived and practised daily along the Ganges."
          primaryHref="/themes/varanasi-ganges"
          primaryLabel="View Varanasi & Ganges Tours"
          whatsappMessage="Hi! I'd like to plan a Varanasi trip with Colourful Indian Holidays."
        />

        <QuickFacts facts={varanasiQuickFacts} quoteButtonPageName="Varanasi" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Overview"
                heading="A Living Tradition, Not a Preserved One"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Varanasi isn&apos;t a monument you visit — it&apos;s a ritual you watch happen
                  in real time. The evening Ganga Aarti at Dashashwamedh Ghat is the same
                  ceremony that has taken place at that spot for generations, and it happens
                  again tonight regardless of who&apos;s watching. That&apos;s what sets
                  Varanasi apart from almost everywhere else on a typical India itinerary — the
                  city&apos;s significance isn&apos;t historical, it&apos;s current. Among the
                  oldest continuously inhabited cities in the world, built along the western bank
                  of the Ganges, Varanasi has drawn Hindu pilgrims for millennia on the belief
                  that dying here, or having one&apos;s ashes scattered in the river, brings
                  moksha — release from the cycle of rebirth.
                </p>
                <p>
                  The ghats — riverside stone steps stretching for several kilometres along the
                  Ganges — are where that belief plays out daily, in bathing, prayer, laundry and
                  cremation rites, all visible from a single boat ride. A sunrise trip along the
                  water shows a completely different mood from the evening aarti&apos;s fire and
                  drums: quieter, full of ordinary daily ritual rather than ceremony, with the
                  city&apos;s skyline of temples and old buildings silhouetted behind the crowds
                  gathering to bathe. The Kashi Vishwanath Temple, one of the twelve Jyotirlinga
                  shrines dedicated to Shiva and among the most significant Hindu temples
                  anywhere, sits a short walk from the main ghats, now connected to the
                  riverfront by a wide pedestrian corridor that has made the walk considerably
                  more atmospheric in recent years.
                </p>
                <p>
                  Most travellers build Varanasi in as a 2 to 3 day extension to a wider North
                  India trip, flying in from Delhi or Agra. It rewards a slower pace than a
                  rushed day trip would allow — the sunrise boat ride and the evening aarti show
                  genuinely different sides of the same place, and both are worth building real
                  time around. A short trip outside the city to Sarnath, where the Buddha
                  delivered his first sermon after attaining enlightenment, adds a Buddhist
                  counterpoint to Varanasi&apos;s intensely Hindu character, and is a common
                  half-day add-on for travellers with an extra day to spare before continuing
                  their itinerary.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See and Experience"
          cities={varanasiAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting to Varanasi"
          items={varanasiGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Varanasi"
          heading="More to Know Before You Go"
          highlights={varanasiHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="October to March is Varanasi's Most Comfortable Season"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Cool, dry mornings make the sunrise boat ride genuinely pleasant, and evenings
                along the ghats are comfortable for the Ganga Aarti. April to June runs very
                hot and humid, while the July to September monsoon can affect river levels and
                ghat access.
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
          cities={varanasiRelatedDestinations}
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
          heading="Common Questions About Varanasi"
          intro="Everything international travellers ask before booking a Varanasi trip — answered honestly."
          faqs={varanasiFaqs}
          whatsappMessage="Hi! I have a question before booking my Varanasi trip with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={ctaImage}
          eyebrow="Start Your Journey"
          headline="Your Varanasi Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored Varanasi itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Varanasi trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
