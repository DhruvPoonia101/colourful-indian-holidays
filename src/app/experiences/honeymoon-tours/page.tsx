import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { honeymoonExperiences } from "@/content/honeymoon-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "Honeymoon Tours in India | Udaipur, Kerala, Kashmir & More";
const description =
  "Private honeymoon tours across India, from Udaipur's lakeside palaces and the Taj Mahal to Kerala's backwaters, Kashmir's houseboats, and the Andaman Islands.";
const pagePath = "/experiences/honeymoon-tours";
const heroImage = "/images/destinations/udaipur-lake-palace.webp";

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
  { name: "Honeymoon Tours", path: pagePath },
];

const overview = [
  "India covers enough climate and landscape that a honeymoon here doesn't have to mean picking between palaces and beaches — it can genuinely mean both, on the same trip if you have the time. The six experiences above reflect the country's real range: [[Udaipur|/experiences/udaipur-honeymoon]]'s lakes and heritage palace hotels for couples who want romance with real architecture behind it, the [[Taj Mahal|/experiences/taj-mahal-honeymoon]] for the single most recognisable monument to love anywhere in the world, [[Kerala|/destinations/kerala]]'s backwaters for a slower, tropical pace on a private houseboat, and Kashmir or the Andaman Islands for something further from the classic Rajasthan circuit entirely — mountains and Mughal gardens on one end, white sand and coral reefs on the other.",
  "Udaipur is consistently the most-requested honeymoon destination among the couples we work with, and it's easy to see why once you're there — heritage hotels built into actual palace buildings, a sunset boat ride on Lake Pichola past the floating Lake Palace, and a noticeably calmer pace than Jaipur or Jodhpur. Several of Udaipur's heritage properties occupy genuine former royal residences rather than buildings simply styled to look the part, which is part of why couples specifically request it over other Rajasthan cities. For couples who want the Taj Mahal specifically included, our dedicated Taj Mahal tour gives it real time rather than a rushed same-day stop, entering at sunrise when the crowds are thinnest and the light is softest — and it pairs naturally with Udaipur or a wider Rajasthan circuit if you have more than a few days.",
  "Kerala and Kashmir sit at opposite ends of India's climate, and both work well for a honeymoon depending on what you're after. Kerala's backwaters — a network of canals, lagoons and lakes running parallel to the coast — are best experienced from a private houseboat, moving slowly past palm trees and small villages with nothing scheduled beyond meals and sunset, the boat itself becoming your hotel for a night or two. Kashmir, sometimes called 'Paradise on Earth' by Mughal emperors who built entire gardens there for exactly that reason, offers houseboats of a completely different kind on Dal Lake, backed by snow-capped mountains rather than tropical palms — the two destinations share almost nothing except how well they both suit slowing down together. For couples drawn to open water and white sand instead, the Andaman Islands are India's only true tropical island escape, with coral reefs and beaches genuinely comparable to Southeast Asia, and a character unlike anywhere else in the country.",
  "Most of these honeymoon experiences can also be extended into more time in the same region — the [[Rajasthan Palace Honeymoon|/experiences/rajasthan-palace-honeymoon]] already combines Jaipur and Udaipur into one trip, and either it or the standalone [[Udaipur Honeymoon|/experiences/udaipur-honeymoon]] can run before or after the [[Taj Mahal Honeymoon|/experiences/taj-mahal-honeymoon]] if you'd like both in one visit to India. Kerala and Kashmir work best as standalone trips on their own, since both sit far enough from Rajasthan that combining them into one itinerary usually means more flying than most couples want on a honeymoon. Every route above is built around a private vehicle and driver throughout — see our [[car rental fleet|/car-rental]] for the range — and every itinerary here is a starting point rather than a fixed package. Tell us your dates, budget and which of these experiences appeals most, and we'll build the exact trip around it rather than asking you to fit an existing one.",
];

export default function HoneymoonToursHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="The Lake Palace floating on Lake Pichola, Udaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Experiences"
          headline="Honeymoon Tours, Six Ways"
          subheadline="From lakeside palaces and the Taj Mahal to backwater houseboats and white sand beaches — India's honeymoon experiences, in one place."
        />

        <CityGrid
          eyebrow="Choose Your Experience"
          heading="Honeymoon Tours"
          cities={honeymoonExperiences}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Honeymoon in India" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {overview.map((paragraph, i) => (
                  <p key={i}>{renderWithLinks(paragraph)}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Plan Your Trip"
          heading="Getting Around by Private Car"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Honeymoon Awaits."
          headlineItalic="Which Experience Fits?"
          subtext="Tell us your dates, budget and what you have in mind, and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a honeymoon trip to India."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
