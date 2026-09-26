import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { southIndiaTourVariants } from "@/content/south-india-tours-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * Same treatment as the Kerala pillar pass: the overview already existed
 * and was solid, so it's kept largely as-is with links added rather than
 * rewritten. New: a Chennai/Mahabalipuram/Madurai/Pondicherry city grid
 * (all four already have their own destination pages, previously
 * unlinked from here), a UNESCO Heritage Sites cross-link (Mahabalipuram
 * is one of that itinerary's stops and was already described as UNESCO
 * in the existing prose, just never linked), the e-Visa/Getting Around
 * India links, and an FAQ section with schema.
 */

const title = "South India Tour Packages | Chennai, Mahabalipuram, Madurai & Pondicherry";
const description =
  "Private South India tour packages in six shapes — a classic Tamil Nadu circuit, Chennai, Mahabalipuram's rock-cut monuments, Madurai's temples, Pondicherry, and the coast.";
const pagePath = "/tours/south-india-tours";
const heroImage = "/images/destinations/chennai.webp";

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
  { name: "South India Tours", path: pagePath },
];

const southIndiaCities = [
  {
    name: "Chennai",
    tagline: "The Gateway to South India",
    description: "Marina Beach, colonial-era landmarks, and South India's main international gateway.",
    href: "/destinations/chennai",
    image: "/images/destinations/marina-beach-chennai.webp",
    imageAlt: "Marina Beach at sunrise, Chennai",
  },
  {
    name: "Mahabalipuram",
    tagline: "UNESCO Rock-Cut Monuments",
    description: "7th-century granite temples and shore monuments carved directly from solid rock.",
    href: "/destinations/mahabalipuram",
    image: "/images/destinations/chennai.webp",
    imageAlt: "The Shore Temple, Mahabalipuram",
  },
  {
    name: "Madurai",
    tagline: "The Meenakshi Amman Temple",
    description: "A 2,500-year-old temple city still centred entirely around daily worship.",
    href: "/destinations/madurai",
    image: "/images/destinations/madurai.webp",
    imageAlt: "The towering gopuram of Meenakshi Amman Temple, Madurai",
  },
  {
    name: "Pondicherry",
    tagline: "French Colonial Heritage",
    description: "Mustard-yellow villas and a boulevard laid out in a French grid, unlike anywhere else on India's coast.",
    href: "/destinations/pondicherry",
    image: "/images/destinations/pondicherry-french-quarter.webp",
    imageAlt: "A colonial-era street in Pondicherry's French Quarter",
  },
];

const overview = [
  "Tamil Nadu holds a different character from the parts of India most first-time visitors see first — Dravidian temple architecture rather than Mughal forts, a coastline shaped by centuries of European trading powers rather than a single dynasty, and a cultural continuity old enough that Madurai has been continuously inhabited for over 2,500 years. The six routes above reflect that range: the [[classic circuit|/tours/south-india-tours-classic]] covers Chennai, Mahabalipuram and Pondicherry for a genuine first-time introduction, while the other five let you go deeper into whichever city or theme interests you most, without needing to fit everything into a single trip.",
  "Chennai is the natural starting point for most visitors, both practically — it's South India's main international gateway — and thematically, with Marina Beach running along nearly the entire eastern edge of the city, one of the longest urban beaches anywhere in the world. Mahabalipuram, a short drive south, holds a genuinely different kind of monument: 7th-century granite temples and sculptures carved directly from solid rock by Pallava dynasty sculptors, a [[UNESCO World Heritage Site|/experiences/unesco-heritage-sites]] unlike the brick-and-mortar architecture found further north in India. Madurai, further inland, centres entirely around the Meenakshi Amman Temple, its towering, intricately sculpted gopurams visible from across the city and still an active site of daily worship rather than a preserved monument alone, with thousands of pilgrims passing through its corridors every day.",
  "Pondicherry offers a genuinely different register again — a former French colonial territory whose White Town still holds mustard-yellow villas, wrought-iron balconies and a boulevard laid out in a French grid, a character found nowhere else on India's mainland coast, closer in feel to a small Mediterranean town than anywhere else in Tamil Nadu. Along the wider Coromandel Coast, Tamil Nadu's beaches pair genuine history with the water, from Mahabalipuram's shore temples to Pondicherry's boulder-lined promenade, offering a slower, more scenic route between the region's cultural stops rather than treating the coastline as an afterthought squeezed between temple visits, and a natural way to break up longer drives between the inland and coastal stops.",
  "Most of these routes are also easy to combine if you have more than a week — the classic circuit already covers three of the six destinations above, and Madurai or a longer beach-focused leg can both be added depending on how much time you have and which parts of Tamil Nadu appeal most. Every route is built around a private vehicle and driver throughout — see our [[car rental fleet|/car-rental]] for the range — and every itinerary here is a starting point rather than a fixed package, adjustable to whatever combination of temples, monuments and coastline you have in mind. If this is your first trip to India, our guides to [[India's e-Visa process|/travel-guide/india-e-visa-guide]] and [[getting around the country|/travel-guide/getting-around-india]] cover the practical groundwork worth sorting out before you book. Tell us your dates and which of these six interests you most, and we'll build the exact trip around it rather than asking you to fit an existing one.",
];

const faqs: FaqItem[] = [
  {
    question: "How many days do I need for a South India trip?",
    answer:
      "The classic circuit (Chennai, Mahabalipuram and Pondicherry) runs comfortably in 6 to 7 days. Adding Madurai or a longer beach-focused leg typically extends that to 8 to 10 days.",
  },
  {
    question: "Is Mahabalipuram worth a dedicated visit, or just a day trip from Chennai?",
    answer:
      "Either works — Mahabalipuram is close enough to Chennai for a day trip, but its UNESCO-listed rock-cut monuments genuinely reward an overnight stay, letting you see the Shore Temple at both sunrise and sunset rather than fitting it into a single rushed afternoon.",
  },
  {
    question: "How is South India different from a typical first-timer trip to India?",
    answer:
      "It trades Mughal forts and Rajasthani palaces for Dravidian temple architecture, rock-cut monuments, and a coastline shaped by French and other European colonial history rather than a single dynasty — a genuinely different register from the Golden Triangle or Rajasthan for travellers who've already done a first trip, or want a less commonly seen side of the country.",
  },
  {
    question: "Can I combine South India with Kerala in one trip?",
    answer:
      "Yes — this is one of the most natural combinations we build, since Tamil Nadu and Kerala sit next to each other and pairing them gives you both Dravidian temple culture and Kerala's backwaters and hill country in a single, connected itinerary.",
  },
  {
    question: "What's the best time of year to visit South India?",
    answer:
      "October through March is the most comfortable window, avoiding the region's hottest months. Tamil Nadu's northeast monsoon runs October to December specifically, which is worth checking against your exact dates if you're travelling then.",
  },
];

export default function SouthIndiaToursHubPage() {
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
          imageAlt="The Shore Temple, Mahabalipuram, near Chennai"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="South India, Six Ways"
          subheadline="Dravidian temples, rock-cut monuments, French colonial heritage and the Coromandel Coast — the difference between these routes is which side of Tamil Nadu you want to see most."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="South India Tour Packages"
          cities={southIndiaTourVariants}
          showActions
        />

        <CityGrid
          eyebrow="The Four Cities"
          heading="Where South India Tours Actually Go"
          cities={southIndiaCities}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip to South India" />
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

        <FAQSection
          eyebrow="FAQ"
          heading="South India Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a South India tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your South India Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a South India tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}

