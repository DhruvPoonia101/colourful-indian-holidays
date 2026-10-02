import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TourHubStartingPrice } from "@/components/shared/TourHubStartingPrice";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

/**
 * Last pillar from the original plan, built as a deliberate reframing of
 * "North India & Nepal Tours" — dropping the ambiguous North India half
 * (already covered in depth by Golden Triangle, Rajasthan and Pilgrimage)
 * in favour of a cleaner, non-overlapping Nepal & Bhutan pillar. Ties
 * together 5 real packages and 5 destination pages that had no shared hub.
 *
 * Unlike the India-only pillars, this one deliberately does NOT include a
 * "getting around by private car" fleet section — road transfers matter
 * far less here than flights and cross-border logistics, so a copy-pasted
 * fleet CityGrid would have been filler rather than genuinely useful
 * content.
 *
 * All images (pokhara-valley-machapuchare-view.webp confirmed directly;
 * paro-taktsang-tigers-nest.webp already reused safely elsewhere in this
 * project without issue) are pre-existing, already-live package images.
 */

const title = "Nepal & Bhutan Tours | Kathmandu, Pokhara, Chitwan, Paro & Thimphu";
const description =
  "Private tours to Nepal and Bhutan, standalone or combined with India — Kathmandu's temples, Pokhara's Himalayan views, Chitwan's jungle safari, and Bhutan's Tiger's Nest monastery.";
const pagePath = "/tours/nepal-and-bhutan-tours";
const heroImage = "/images/destinations/pokhara-valley-machapuchare-view.webp";

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
  { name: "Nepal & Bhutan Tours", path: pagePath },
];

const nepalBhutanTours = [
  {
    name: "Nepal Tours",
    tagline: "Temples, Mountains & the Jungle · 8 Days",
    description: "Kathmandu's temple squares, Pokhara's Annapurna views, and a Chitwan jungle safari.",
    href: "/tours/nepal-tours",
    image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
    imageAlt: "Machapuchare and the Annapurna range above Pokhara valley, Nepal",
  },
  {
    name: "Bhutan Tours",
    tagline: "Dzongs, Valleys & the Tiger's Nest · 8 Days",
    description: "Thimphu, Punakha's dzong, and the cliffside Tiger's Nest monastery above Paro.",
    href: "/tours/bhutan-tours",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  },
  {
    name: "Nepal & Bhutan Tours",
    tagline: "Two Himalayan Kingdoms in One Trip",
    description: "Both countries combined, without an India leg — for travellers focused purely on the Himalayan kingdoms.",
    href: "/tours/nepal-bhutan-tours",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  },
  {
    name: "India & Nepal Tours",
    tagline: "The Golden Triangle & the Himalayas",
    description: "Delhi, Agra and Jaipur combined with Kathmandu and Pokhara in one connected itinerary.",
    href: "/tours/india-nepal-tours",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "India, Nepal & Bhutan Tours",
    tagline: "Three Countries, One Itinerary",
    description: "The most ambitious of our fixed routes — the Taj Mahal, Kathmandu's temples and Bhutan's monasteries together.",
    href: "/tours/india-nepal-bhutan-tours",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  },
];

const nepalBhutanDestinations = [
  {
    name: "Kathmandu",
    tagline: "Nepal's Temple-Filled Capital",
    description: "UNESCO-listed Durbar Squares and temple complexes packed into one dense valley city.",
    href: "/destinations/kathmandu",
    image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
    imageAlt: "The Kathmandu Valley, Nepal",
  },
  {
    name: "Pokhara",
    tagline: "Lakes Beneath the Annapurnas",
    description: "A lakeside town with some of the most accessible high-Himalayan views anywhere in Nepal.",
    href: "/destinations/pokhara",
    image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
    imageAlt: "Machapuchare and the Annapurna range above Pokhara valley, Nepal",
  },
  {
    name: "Chitwan",
    tagline: "Jungle Safari",
    description: "One-horned rhinos and Bengal tigers in Nepal's lowland Terai jungle, explored by jeep and canoe.",
    href: "/destinations/chitwan",
    image: "/images/destinations/pokhara-valley-machapuchare-view.webp",
    imageAlt: "The Nepal Terai lowlands near Chitwan National Park",
  },
  {
    name: "Paro",
    tagline: "Home of the Tiger's Nest",
    description: "Bhutan's main airport town, and the base for the hike up to Paro Taktsang.",
    href: "/destinations/paro",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  },
  {
    name: "Thimphu",
    tagline: "Bhutan's Capital",
    description: "The world's only capital city without a single traffic light, built around Buddhist tradition and strict architectural codes.",
    href: "/destinations/thimphu",
    image: "/images/destinations/paro-taktsang-tigers-nest.webp",
    imageAlt: "Paro Taktsang, the Tiger's Nest Monastery, Bhutan",
  },
];

const overview = [
  "Nepal and Bhutan sit side by side in the Himalaya, and both are commonly combined with an India trip — but they're genuinely different countries with different characters, and the five routes above reflect every reasonable way to see one, the other, or all three destinations together. [[Nepal|/tours/nepal-tours]] runs 8 days through Kathmandu, Pokhara and Chitwan; [[Bhutan|/tours/bhutan-tours]] runs a similar 8 days through Thimphu, Punakha and Paro; [[Nepal & Bhutan combined|/tours/nepal-bhutan-tours]] covers both without an India leg; and [[India & Nepal|/tours/india-nepal-tours]] and [[India, Nepal & Bhutan|/tours/india-nepal-bhutan-tours]] add one or both onto a Golden Triangle-style India itinerary.",
  "Nepal's [[Kathmandu|/destinations/kathmandu]] packs an extraordinary density of UNESCO-listed temple squares and Buddhist and Hindu religious sites into one compact valley — a genuinely walkable old city rather than sprawling modern capital. [[Pokhara|/destinations/pokhara]], a few hours west, trades temples for mountains: a lakeside town with arguably the most accessible close-up Himalayan views in the country, the Annapurna range rising directly behind it. [[Chitwan|/destinations/chitwan]], in Nepal's lowland Terai region, is different again — a jungle safari by jeep and canoe, with a real chance of spotting one-horned rhinos and, more rarely, a Bengal tiger, a genuinely different landscape from the mountain scenery most people associate with Nepal.",
  "Bhutan operates on a different model entirely from the rest of this list — the country requires all foreign visitors to book through a licensed local tour operator as part of its sustainable tourism policy, which we handle as a standard part of any Bhutan itinerary rather than something you need to arrange separately. [[Paro|/destinations/paro]] is most visitors' first stop, home to the country's only international airport and the trailhead for the hike up to Paro Taktsang, the cliffside Tiger's Nest monastery that anchors nearly every Bhutan itinerary. [[Thimphu|/destinations/thimphu]], the capital, is a genuine curiosity in its own right — the world's only national capital with no traffic lights, built under strict architectural codes that require even modern buildings to follow traditional Bhutanese design.",
  "Combining countries is common enough that we treat it as a standard option rather than an unusual request. India and Nepal connect well by air from Delhi, making the Golden Triangle a natural pairing with Kathmandu and Pokhara. Bringing in Bhutan as well extends the trip further but follows the same logic — each country adds roughly a week, and the three-country route is genuinely the most ambitious fixed itinerary we run, worth booking further ahead than a single-country trip given the number of flights and, for Bhutan specifically, the licensed-operator arrangements involved.",
  "Tell us which of these countries interests you, whether you'd rather see them standalone or combined with India, and how much time you have, and we'll build the exact itinerary around it rather than asking you to fit an existing one.",
];

const faqs: FaqItem[] = [
  {
    question: "Should I visit Nepal, Bhutan, or both?",
    answer:
      "Nepal suits travellers wanting temples, trekking-adjacent mountain views, and a jungle safari in one trip. Bhutan suits those wanting a more controlled, culturally distinct experience shaped by its sustainable tourism policy. With 12 days or more, our combined Nepal & Bhutan route lets you compare both directly.",
  },
  {
    question: "Do I need a special visa or permit for Bhutan?",
    answer:
      "Yes — Bhutan requires all foreign visitors to book through a licensed local tour operator as part of its sustainable tourism policy, which includes visa arrangement. We handle this as a standard part of any Bhutan itinerary, so it's not something you need to arrange separately, but it does mean booking further ahead than a typical India-only trip.",
  },
  {
    question: "Can I combine Nepal and Bhutan with a Golden Triangle trip to India?",
    answer:
      "Yes — our India & Nepal and India, Nepal & Bhutan routes are both built around exactly this, pairing Delhi, Agra and Jaipur with Kathmandu, Pokhara and, in the three-country version, Bhutan as well.",
  },
  {
    question: "How many days do I need for Nepal or Bhutan?",
    answer:
      "8 days works well for either country on its own. Combining both without India takes closer to 12 days, and adding India on top of that pushes toward 16 to 18 days for the full three-country route.",
  },
  {
    question: "Is a jungle safari in Chitwan worth adding to a Nepal trip?",
    answer:
      "Yes, if you want a genuinely different landscape from Kathmandu and Pokhara's mountain and temple scenery — Chitwan's lowland jungle, explored by jeep and canoe, offers a real chance at spotting one-horned rhinos and is a completely different experience from the rest of a typical Nepal itinerary.",
  },
];

export default function NepalBhutanToursHubPage() {
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
          imageAlt="Machapuchare and the Annapurna range above Pokhara valley, Nepal"
          breadcrumbs={breadcrumbs}
          eyebrow="Tours & Packages"
          headline="Nepal & Bhutan, Five Ways"
          subheadline="Two Himalayan kingdoms, standalone or combined with India — the difference between these routes is which countries you want, and how they fit with the rest of your trip."
        />

        {/* $700 is this hub's real cheapest linked variant (nepal-tours, 8 days / 7 nights), computed via the
            shared $100/night rate in src/lib/pricing.ts — not a separate
            number invented for this hub page. */}
        <TourHubStartingPrice price={700} />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Nepal & Bhutan Tour Packages"
          cities={nepalBhutanTours}
          showActions
        />

        <CityGrid
          eyebrow="The Five Destinations"
          heading="Where Nepal & Bhutan Tours Actually Go"
          cities={nepalBhutanDestinations}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip to Nepal & Bhutan" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {overview.map((paragraph, i) => (
                  <p key={i}>{renderWithLinks(paragraph)}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <FAQSection
          eyebrow="FAQ"
          heading="Nepal & Bhutan Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a Nepal or Bhutan tour with Colourful Indian Holidays."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Himalayan Trip Awaits."
          headlineItalic="Which Route Fits?"
          subtext="Not sure which countries or combination suits your dates and interests? Tell us what you have in mind and we'll help you pick — or build something in between."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help choosing a Nepal or Bhutan tour."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
