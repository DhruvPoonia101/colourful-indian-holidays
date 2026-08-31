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
  himachalAttractions,
  himachalQuickFacts,
  himachalGettingThere,
  himachalHighlights,
  himachalRelatedDestinations,
  himachalFaqs,
} from "@/content/destinations/himachal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { touristDestinationJsonLd } from "@/lib/seo/place-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Himachal Pradesh | Manali & Shimla Tours";
const description =
  "Plan a trip to Himachal Pradesh — Manali's mountains and adventure activities, Shimla's colonial-era hill station charm, and the road toward Rohtang Pass.";
const pagePath = "/destinations/himachal";
const heroImage = "/images/destinations/urs-festival-ajmer.webp";

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
  { name: "Himachal (Manali & Shimla)", path: pagePath },
];

export default function HimachalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(himachalFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristDestinationJsonLd({
              name: "Himachal Pradesh (Manali & Shimla)",
              description,
              path: pagePath,
              image: heroImage,
              latitude: 32.2432,
              longitude: 77.1892,
              containsPlaces: himachalAttractions.map((attraction) => ({
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
          imageAlt="Photo coming soon — Himachal Pradesh"
          breadcrumbs={breadcrumbs}
          eyebrow="Destination Guide"
          headline="Himachal Pradesh — Manali & Shimla"
          subheadline="Pine-forested mountains, colonial-era hill station charm, and some of North India's best adventure activities — a cool-season escape from the plains."
          primaryHref="/packages"
          primaryLabel="View Tour Packages"
          whatsappMessage="Hi! I'd like to plan a trip to Himachal (Manali & Shimla) with Colourful Indian Holidays."
        />

        <QuickFacts facts={himachalQuickFacts} />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <SectionIntro eyebrow="Overview" heading="Manali & Shimla" />
                <div className="shrink-0">
                  <GetQuoteButton pageName="Himachal (Manali & Shimla)" />
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Himachal Pradesh sits in the western Himalayan foothills, and its two best-known
                  towns offer genuinely different experiences under a single destination. Manali,
                  on the Beas river, is North India&apos;s most popular base for adventure
                  activities — paragliding over the Solang Valley, river rafting on the Beas, and
                  treks that range from a gentle half-day walk to multi-day routes into the Kullu
                  Valley&apos;s higher reaches. The town itself sits at around 2,050 metres, cool
                  enough in summer to draw travellers escaping the heat of the plains and
                  Rajasthan, and surrounded by cedar and pine forest that give it a genuinely
                  alpine feel unusual for this part of India.
                </p>
                <p>
                  Shimla, Himachal&apos;s capital, carries a very different character. As the
                  former summer capital of British India, it retains a distinctly colonial
                  streetscape — timber-framed buildings, Christ Church, and the pedestrian Mall
                  Road that still functions as the town&apos;s social centre much as it did under
                  British administration. Reaching Shimla by the Kalka–Shimla toy train, a
                  UNESCO-recognised narrow-gauge railway completed in 1903, is as much a part of
                  the experience as the town itself — the line climbs through more than a hundred
                  tunnels and several hundred bridges on its way up into the hills, a genuinely
                  scenic journey rather than simply a means of transport.
                </p>
                <p>
                  Together, Manali and Shimla make a natural pairing for a single Himachal
                  itinerary, connected by a scenic road journey through the Kullu and Sutlej
                  valleys. For travellers with more time, Manali also serves as the starting point
                  for routes further into Lahaul-Spiti and, seasonally, onward to Ladakh via the
                  Manali–Leh highway — making Himachal either a satisfying destination in its own
                  right or the first leg of a longer Himalayan circuit. Local Himachali food and
                  handicrafts add their own texture to a visit — Kullu shawls and caps are woven
                  in distinctive local patterns, and dishes like siddu and dham reflect a mountain
                  cuisine quite different from what most first-time visitors encounter elsewhere
                  in North India. It works particularly well as a cool-season counterpoint to a
                  Rajasthan or Golden Triangle itinerary, giving travellers a genuinely different
                  landscape, pace and climate within the same overall trip rather than more of the
                  heat, forts and desert scenery further south.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Top Attractions"
          heading="What to See"
          cities={himachalAttractions}
          topDivider
        />

        <GettingThere
          eyebrow="Practical Info"
          heading="Getting There"
          items={himachalGettingThere}
        />

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What Makes This Different"
          highlights={himachalHighlights}
        />

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-2xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Best Time to Visit"
                heading="March–June and October–December"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Spring through early summer brings mild, comfortable weather for both Manali and
                Shimla, while autumn offers clear skies after the monsoon. Winter transforms both
                towns under snow — beautiful, but with some higher routes and passes closed.
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
          cities={himachalRelatedDestinations}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before booking — answered honestly."
          faqs={himachalFaqs}
          whatsappMessage="Hi! I have a question before booking my trip to Himachal (Manali & Shimla) with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Journey to Himachal Awaits."
          headlineItalic="When Will You Go?"
          subtext="Tell us how many days you have and what you'd like to see — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip to Himachal (Manali & Shimla) with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
