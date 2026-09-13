import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { keralaTourVariants } from "@/content/kerala-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "Kerala Tour Packages | Backwaters, Munnar, Kochi & Wildlife, 6 Ways";
const description =
  "Private Kerala tour packages in six shapes — a classic circuit, Alleppey backwaters, Munnar's tea gardens, Periyar's wildlife, Fort Kochi, and Kerala's beaches.";
const pagePath = "/tours/kerala-tours";
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
  { name: "Tours & Packages", path: "/tours" },
  { name: "Kerala Tours", path: pagePath },
];

const overview = [
  "Kerala earns its official tourism tagline, 'God's Own Country', by packing genuinely more variety into one state than almost anywhere else in India — palm-lined backwaters, misty hill-country tea gardens, a tiger reserve reached by boat, a coastline layered with centuries of trading history, and beaches on the Arabian Sea, all within a few hours' drive of each other. The six routes above reflect that range rather than trying to force it into a single itinerary: the [[classic circuit|/tours/kerala-tours-classic]] covers Kochi, Alleppey and Munnar for a genuine first-time introduction, while the other five let you go deeper into whichever side of Kerala interests you most, without needing to fit everything into one trip.",
  "The backwaters are Kerala's signature image for a reason — a network of canals, lagoons and lakes running roughly parallel to the coast, traditionally used to move rice and spices and now navigated by traditional houseboats called kettuvallams. A night or two aboard one, drifting past palm groves and small villages with nothing scheduled beyond meals and sunset, is genuinely unlike anything else on a typical India trip, and the boat itself becomes your hotel for the night rather than simply a daytime excursion. Munnar sits at the opposite climatic extreme — cool, misty hill country in the Western Ghats, covered in tea plantations that were established under British colonial rule and remain a major part of the local economy today, with a temperature drop from the coast that most first-time visitors find a genuinely welcome surprise.",
  "Periyar, near the town of Thekkady, holds India's only tiger reserve explored primarily by boat rather than jeep safari, a genuinely different wildlife-viewing experience from Ranthambore or Bandhavgarh, gliding across Periyar Lake while watching for elephants and other wildlife along the shoreline rather than driving through numbered safari zones. Fort Kochi, meanwhile, is Kerala's most historically layered city — centuries of Portuguese, Dutch and British colonial rule left behind an architectural mix found nowhere else in India, alongside the iconic Chinese fishing nets still worked by local fishermen every evening, best seen at sunset when the light catches the nets against the water. Kerala's beaches, around Kovalam and Varkala, round out the range with a genuinely different pace again — cliffside coastal towns built around sunset views rather than sightseeing.",
  "Most of these routes are also easy to combine if you have more than a week — the classic circuit already covers three of the six experiences above, and any of the remaining three (backwaters, hill country, or wildlife) can be added on depending on how much time you have and which side of Kerala appeals most. Every route is built around a private vehicle and driver throughout — see our [[car rental fleet|/car-rental]] for the range. If you're planning this trip as a honeymoon rather than general sightseeing, our dedicated [[Kerala Backwaters Honeymoon|/experiences/kerala-backwaters-honeymoon]] covers similar ground with a focus built specifically around couples. Tell us your dates and which of these six interests you most, and we'll build the exact trip around it rather than asking you to fit an existing one.",
];

export default function KeralaToursHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="A traditional houseboat on Alleppey's backwaters, Kerala"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Kerala, Six Ways"
          subheadline="Backwaters, tea gardens, wildlife, colonial heritage and beaches — the difference between these routes is which side of Kerala you want to see most."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Kerala Tour Packages"
          cities={keralaTourVariants}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip to Kerala" />
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
          headline="Your Kerala Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Kerala tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
