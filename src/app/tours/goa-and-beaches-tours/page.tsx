import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * A new pillar, last of the original plan's Regional Pillar list. Ties
 * together 3 real beach tour packages (Maharashtra, Tamil Nadu, Kerala
 * beaches) and 2 destination pages (Goa, Andaman Islands) that had no
 * shared hub before.
 *
 * One real, flagged gap: there is no dedicated Goa tour package anywhere
 * on the site — only the /destinations/goa page — despite Goa being the
 * single most-searched Indian beach destination by a wide margin. Not
 * fabricated here; the Goa city card links to the destination page only,
 * and the gap is called out honestly rather than invented around.
 *
 * Kerala's beaches (Kovalam, Varkala) are also covered as their own
 * dedicated route in the Kerala pillar (/tours/kerala-tours) — this page
 * cross-links there rather than duplicating that content.
 *
 * All 5 images (Goa.webp, alibaug-beach.webp, kanyakumari-beach.webp,
 * alleppey-2.webp, andaman-islands.webp) visually verified before reuse.
 */

const title = "Goa & Beach Tours | Goa, Maharashtra, Tamil Nadu, Kerala & Andaman";
const description =
  "Private beach tours across India's coastline — Goa's Portuguese-era beaches, Maharashtra's Konkan coast, Tamil Nadu's southern tip, Kerala's coast, and the Andaman Islands.";
const pagePath = "/tours/goa-and-beaches-tours";
const heroImage = "/images/destinations/Goa.webp";

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
  { name: "Goa & Beach Tours", path: pagePath },
];

const beachTours = [
  {
    name: "Maharashtra Beaches Tour",
    tagline: "Alibaug's Forts & the Konkan Coast",
    description: "A sea fort, Mumbai's colonial landmarks, and a natural coastal run down toward Goa.",
    href: "/tours/maharashtra-beaches-tour",
    image: "/images/destinations/alibaug-beach.webp",
    imageAlt: "Alibaug beach on Maharashtra's Konkan coast",
  },
  {
    name: "Tamil Nadu Beaches Tour",
    tagline: "Rameswaram & Kanyakumari · 5 Days",
    description: "India's southern tip, where the Arabian Sea, Bay of Bengal and Indian Ocean meet.",
    href: "/tours/tamil-nadu-beaches-tour",
    image: "/images/destinations/kanyakumari-beach.webp",
    imageAlt: "Kanyakumari beach at India's southern tip, Tamil Nadu",
  },
  {
    name: "Kerala Beaches Tour",
    tagline: "Kovalam & Varkala",
    description: "Cliffside coastal towns built around sunset views, a genuinely different pace from Kerala's backwaters.",
    href: "/tours/kerala-beaches-tour",
    image: "/images/destinations/alleppey-2.webp",
    imageAlt: "Kerala's coastline near Alleppey",
  },
];

const beachDestinations = [
  {
    name: "Goa",
    tagline: "India's Beach Capital",
    description: "Portuguese-era churches, beach shacks, and India's most famous coastline by a wide margin.",
    href: "/destinations/goa",
    image: "/images/destinations/Goa.webp",
    imageAlt: "Goa's coastline with paragliders overhead",
  },
  {
    name: "Andaman Islands",
    tagline: "Remote Coral Reefs",
    description: "A genuinely different kind of Indian beach trip — flight-only access and some of the clearest water in the country.",
    href: "/destinations/andaman-islands",
    image: "/images/destinations/andaman-islands.webp",
    imageAlt: "A quiet white-sand beach in the Andaman Islands",
  },
];

const overview = [
  "India's roughly 7,500 kilometres of coastline covers a genuinely wide range of beach experiences, and the routes above reflect that rather than treating them as interchangeable. [[Goa|/destinations/goa]] is the obvious starting point for most first-time beach travellers to India — Portuguese colonial churches, a well-developed strip of beach shacks and resorts, and the country's most established beach tourism infrastructure by a wide margin. One honest note: we don't currently run a dedicated Goa-only tour package — most of our Goa time is built into the [[Maharashtra Beaches Tour|/tours/maharashtra-beaches-tour]] below, or added as an extension to another itinerary, so tell us if you'd like a Goa-focused trip specifically and we'll build one directly.",
  "The Maharashtra Beaches Tour runs the Konkan coast south from Mumbai, taking in Alibaug's 17th-century sea fort — reachable partly by boat — alongside Mumbai's own colonial landmarks, before continuing toward Goa. It's a genuinely different register from Goa itself: quieter, less developed, and built around small fishing villages and forts rather than a established resort strip. The Tamil Nadu Beaches Tour goes further still, down to Kanyakumari at India's literal southern tip, where the Arabian Sea, Bay of Bengal and Indian Ocean are all said to meet — a place of genuine geographic and pilgrimage significance rather than a beach holiday destination in the conventional sense, paired with the temple town of Rameswaram along the way.",
  "Kerala's own beaches — Kovalam and Varkala, both covered by our [[Kerala Beaches Tour|/tours/kerala-beaches-tour]] — sit at the southwestern end of the same coastline, with a genuinely different character again: cliffside towns built around sunset views, closer in feel to a laid-back backpacker destination than Goa's resort culture. If you're already planning a wider Kerala trip, see our [[Kerala Tours|/tours/kerala-tours]] pillar, since these beaches combine naturally with the backwaters and hill country covered there.",
  "The Andaman Islands are a genuinely different proposition from every mainland option above — a remote archipelago in the Bay of Bengal, reachable only by flight (or a considerably longer ferry crossing), with some of the clearest water and best-preserved coral reefs anywhere in India. It works best as its own dedicated trip rather than an extension to a mainland itinerary, given the distance and flight time involved, but rewards travellers who make the trip with a genuinely different, quieter kind of beach experience than anywhere on the mainland coast.",
  "Every route here runs with a private vehicle and driver for the mainland sections — see our [[car rental fleet|/car-rental]] for the range. Tell us which coastline or combination interests you, whether that's a dedicated Goa trip, a longer Konkan-to-Goa drive, Tamil Nadu's southern tip, or a standalone Andaman Islands trip, and we'll build the itinerary around it.",
];

const faqs: FaqItem[] = [
  {
    question: "Do you offer a dedicated Goa-only tour?",
    answer:
      "Not as a fixed package currently — Goa is usually built in as part of the Maharashtra Beaches Tour or as an extension to another itinerary. Tell us if you'd like a Goa-focused trip specifically and we'll put one together directly around your dates.",
  },
  {
    question: "What's the best time of year for a beach trip to India?",
    answer:
      "November through February is the most comfortable window for most of the mainland coast, avoiding both the monsoon (June-September) and the hottest pre-monsoon months. The Andaman Islands run on a slightly different calendar, with October to May generally considered the better window there.",
  },
  {
    question: "How do I get to the Andaman Islands?",
    answer:
      "By flight to Port Blair from major Indian cities — Chennai, Kolkata and Delhi all have direct connections. A ferry option exists from Chennai and Kolkata but takes considerably longer (2-3 days), so nearly all visitors fly.",
  },
  {
    question: "How is Goa different from Kerala's beaches?",
    answer:
      "Goa has a more developed resort and nightlife scene shaped by its Portuguese colonial history, while Kerala's beaches (Kovalam, Varkala) are quieter, cliffside towns with a more laid-back, backpacker-friendly character. Both are worth visiting for different reasons rather than one simply being a smaller version of the other.",
  },
  {
    question: "Can I combine a beach trip with Mumbai or Chennai sightseeing?",
    answer:
      "Yes — both the Maharashtra Beaches Tour and Tamil Nadu Beaches Tour are built to combine naturally with their respective gateway cities, so you're not treating the beach leg as entirely separate from the rest of your trip.",
  },
];

export default function GoaAndBeachesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Goa's coastline with paragliders overhead"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Goa & India's Beaches, By Coast"
          subheadline="7,500 kilometres of coastline, genuinely different from region to region — the difference between these routes is which stretch of it you want to see."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Beach Tour Packages"
          cities={beachTours}
          showActions
        />

        <CityGrid
          eyebrow="The Coastlines"
          heading="Where Beach Tours Actually Go"
          cities={beachDestinations}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Beach Trip to India" />
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
          heading="Getting Around by Private Vehicle"
          cities={fleetCards.slice(0, 3)}
          topDivider
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Goa & Beach Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Goa or beach tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Beach Trip Awaits."
          headlineItalic="Which Coast Fits?"
          subtext="Not sure which coastline suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Goa or beach tour."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
