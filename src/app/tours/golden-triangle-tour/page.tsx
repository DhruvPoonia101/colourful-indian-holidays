import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { goldenTriangleVariants } from "@/content/golden-triangle-hub";
import { fleetCards } from "@/content/car-rental-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * Expanded from a thin 76-line listing page (hero + variant grid + CTA,
 * no overview, no FAQ, no cross-links) into a genuine regional pillar,
 * matching the depth already present on its sibling hub pages (Kerala
 * Tours, South India Tours) and then going further, since this is the
 * single most-searched India itinerary for first-time international
 * visitors and deserves the fullest hub treatment of any tour page on
 * the site. Adds: a 5-paragraph overview, a Delhi/Agra/Jaipur city grid,
 * cross-links to UNESCO Heritage Sites and Palace & Fort Tours
 * (genuinely overlapping content, framed differently), a Taj Mahal
 * Honeymoon cross-link, links to the e-Visa and Getting Around India
 * guides, and an FAQ section with schema (none of it existed before).
 */

const title = "Golden Triangle Tour Packages | Delhi, Agra & Jaipur, 5 Ways";
const description =
  "India's classic Delhi–Agra–Jaipur circuit, in five lengths — from the standard 6-day route to versions extended with Udaipur, Varanasi, a Ranthambore tiger safari, or Ajmer and Pushkar.";
const pagePath = "/tours/golden-triangle-tour";
const heroImage = "/images/destinations/agra-taj-mahal.webp";

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
  { name: "Golden Triangle Tour", path: pagePath },
];

const goldenTriangleCities = [
  {
    name: "Delhi",
    tagline: "India's Capital",
    description: "Mughal forts, colonial avenues, and the arrival point for nearly every Golden Triangle trip.",
    href: "/destinations/delhi",
    image: "/images/destinations/delhi-india-gate.webp",
    imageAlt: "India Gate at dusk, Delhi",
  },
  {
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    description: "The Taj Mahal, Agra Fort, and the reason most people plan this trip in the first place.",
    href: "/destinations/agra",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Amber Fort, City Palace, Hawa Mahal and the bazaars of Rajasthan's capital.",
    href: "/destinations/jaipur",
    image: "/images/destinations/amber-fort-jaipur.webp",
    imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
  },
];

const overview = [
  "The Golden Triangle — Delhi, Agra and Jaipur — is the single most-booked circuit in Indian tourism, and for a genuinely good reason: it fits an enormous amount of what draws people to India into a trip most travellers can realistically fit into a week. Each city plays a different, complementary role. Delhi is where nearly every international flight lands and where Mughal and colonial history sit side by side — Humayun's Tomb, the Red Fort and Qutub Minar within the same city as British-built New Delhi. Agra exists almost entirely because of one building, though [[Agra Fort|/destinations/agra]] earns its own visit alongside it. And Jaipur, the anchor of [[Rajasthan|/destinations/rajasthan]], introduces the fort-and-palace architecture that most visitors associate with India generally, well before they've seen the rest of the state.",
  "The 6-day [[classic route|/tours/golden-triangle-tour-classic]] is built for exactly this — a genuine first-time introduction without needing two weeks off, or a longer trip you're not sure you're ready to commit to before you've actually visited India once. It's also, not coincidentally, the itinerary named most often on our country-specific guides for [[American|/india-tours-from-usa]], [[British|/india-tours-from-uk]] and [[Australian|/india-tours-from-australia]] travellers as the natural starting point, since it answers the question most first-time visitors are actually asking: what should I see if I only have one trip to India?",
  "Once the classic route stops being enough, the other four options here each extend it in a different direction rather than simply adding more days to the same three cities. Adding [[Udaipur|/tours/golden-triangle-tour-udaipur]] softens the pace with lake views and a noticeably more romantic register, which is why it's also a popular honeymoon extension — see our dedicated [[Taj Mahal Honeymoon|/experiences/taj-mahal-honeymoon]] itinerary if that's specifically what you're planning. Adding [[Varanasi|/tours/golden-triangle-tour-varanasi]] takes the trip toward India's spiritual and religious landscape instead, at the ghats where cremation rituals and the nightly Ganga aarti have run continuously for centuries. Adding [[Ranthambore|/tours/golden-triangle-tour-ranthambore]] brings in wildlife — a real chance at a wild tiger sighting — without needing a separate wildlife-focused trip. And adding [[Ajmer & Pushkar|/tours/golden-triangle-tour-ajmer-pushkar]] goes deeper into Rajasthan's religious diversity, pairing a Sufi shrine with a Hindu pilgrimage lake barely fifteen kilometres apart.",
  "Three of the sites on the classic route alone — the Taj Mahal, Agra Fort, and Jaipur's Jantar Mantar and walled Pink City — carry UNESCO World Heritage status, which is one reason this circuit anchors our dedicated [[UNESCO Heritage Sites|/experiences/unesco-heritage-sites]] itinerary too, alongside sites further afield in Delhi, Maharashtra and Odisha. If forts and palaces specifically are what draws you to Jaipur, our [[Palace & Fort Tours|/experiences/palace-fort-tours]] experience goes considerably deeper into that architectural tradition across four Rajasthan cities, of which Jaipur's Amber Fort is only the first.",
  "Every version of this trip runs on a private vehicle and driver throughout — see our [[car rental fleet|/car-rental]] for the range — with an English-speaking guide at each stop rather than a fixed group tour schedule. If this is genuinely your first trip to India, our guides to [[India's e-Visa process|/travel-guide/india-e-visa-guide]] and [[getting around the country|/travel-guide/getting-around-india]] cover the practical groundwork most first-time visitors ask about before their trip even starts. Tell us your dates and which of the five routes above interests you, and we'll build the exact itinerary around it.",
];

const faqs: FaqItem[] = [
  {
    question: "How many days do I need for the Golden Triangle?",
    answer:
      "The classic Delhi-Agra-Jaipur circuit runs 6 days, which is enough to see each city's main sights without rushing. If you'd like to add Udaipur, Varanasi, Ranthambore, or Ajmer and Pushkar, the extended versions run 8 to 9 days instead.",
  },
  {
    question: "What's the best order to visit Delhi, Agra and Jaipur?",
    answer:
      "Delhi first (since it's where nearly every international flight lands), then Agra, then Jaipur, finishing with a flight or drive back to Delhi for departure — or continuing on to whichever extension you've added. This order also roughly follows the historical sequence of Mughal power moving from Delhi to Agra and, later, Rajput Jaipur's rise alongside it.",
  },
  {
    question: "Is the Golden Triangle suitable for a first trip to India?",
    answer:
      "Yes — it's specifically why this is the most-booked circuit in Indian tourism. It covers an enormous amount of what draws people to India (Mughal history, the Taj Mahal, Rajput forts and palaces) in a timeframe most first-time visitors can realistically commit to, without requiring the longer trip a full Rajasthan or multi-region circuit would need.",
  },
  {
    question: "Can I add Ranthambore or another wildlife stop to the Golden Triangle?",
    answer:
      "Yes — our Golden Triangle with Ranthambore route adds two days at Ranthambore National Park between Jaipur and the rest of the trip, giving you a real chance at a wild tiger sighting without needing a separate wildlife-focused itinerary.",
  },
  {
    question: "Do I need a lot of advance planning for a Golden Triangle trip?",
    answer:
      "Less than you might expect — this is our most-booked circuit, and 4 to 8 weeks ahead is generally enough for hotel availability, even in peak season (October to March). It's a good option if you're planning a trip on a shorter timeline than a longer, multi-region itinerary would need.",
  },
];

export default function GoldenTriangleHubPage() {
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
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="The Golden Triangle, Five Ways"
          subheadline="Delhi, Agra and Jaipur form the core of every version below — the difference is what you add on, and how many days you have."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Golden Triangle Tour Packages"
          cities={goldenTriangleVariants}
          showActions
        />

        <CityGrid
          eyebrow="The Three Cities"
          heading="Where the Golden Triangle Actually Goes"
          cities={goldenTriangleCities}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Golden Triangle Trip" />
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
          heading="Golden Triangle Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Golden Triangle tour with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Golden Triangle Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which version suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Golden Triangle tour package."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
