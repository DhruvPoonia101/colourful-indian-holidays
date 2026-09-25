import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { CityGrid } from "@/components/destinations/CityGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import {
  FiTruck,
  FiUsers,
  FiEdit3,
  FiMapPin,
  FiHome,
  FiCalendar,
  FiMessageCircle,
  FiShield,
  FiClock,
  FiFileText,
  FiSend,
  FiCreditCard,
} from "react-icons/fi";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Sixth and last of 6 country-of-origin pages (after USA, UK, Australia,
 * Canada, UAE). Same structure and "why book" cards as the others; only
 * planning facts, FAQ and framing are Germany-specific.
 *
 * Facts verified rather than assumed:
 * - e-Visa: German citizens get 90 days per visit on the 1-year/5-year
 *   e-Tourist visa, NOT the 180-day allowance reserved for US/UK/Canada/
 *   Japan — consistent with what was already correctly stated for
 *   Australia. Germany is not in that special group.
 * - Flights: Lufthansa flies Frankfurt-Delhi, Frankfurt-Mumbai, Munich-
 *   Delhi and Munich-Mumbai nonstop, daily on most routes (7 flights/week
 *   confirmed on several), in around 8 to 9 hours — a genuinely stable,
 *   long-established network, closer to the UK page's reliability than
 *   the USA/Canada pages' instability. Stated with confidence accordingly.
 * - Time zone: India is 3.5 to 4.5 hours ahead of Germany depending on the
 *   season (Germany observes daylight saving, India doesn't) — one of the
 *   more workable gaps of any country page, similar to the UK.
 * - Best time to visit ties to German school winter holidays
 *   (Weihnachtsferien, around Christmas/New Year) rather than half-term,
 *   since German school holiday timing and structure differs from the UK.
 * - No German-flagged testimonial exists in the current review set (same
 *   situation as the USA page) — reuses the generic <Testimonials />
 *   component rather than inventing a nationality tag for any reviewer.
 */

const title = "India Tours from Germany | Private, Tailor-Made Itineraries";
const description =
  "Private India tours for German travellers — direct flight options from Frankfurt and Munich, e-Visa and e-Arrival Card guidance, and itineraries built around your dates.";
const pagePath = "/india-tours-from-germany";

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
  { name: "India Tours from Germany", path: pagePath },
];

const whyBookCards = [
  {
    icon: <FiTruck aria-hidden="true" className="h-6 w-6" />,
    title: "Private Vehicle & Chauffeur",
    description: "A private, air-conditioned vehicle and driver for the whole trip — no shared transport, no fixed timings, no waiting for a group.",
  },
  {
    icon: <FiUsers aria-hidden="true" className="h-6 w-6" />,
    title: "English-Speaking Guides",
    description: "A local guide meets you at each stop to explain the history and culture — not just a driver reciting facts from memory.",
  },
  {
    icon: <FiEdit3 aria-hidden="true" className="h-6 w-6" />,
    title: "Tailor-Made, Not Templated",
    description: "Every itinerary is built from your dates and interests — extend a city you love, drop one that doesn't interest you.",
  },
  {
    icon: <FiMapPin aria-hidden="true" className="h-6 w-6" />,
    title: "Airport Pickup, Every Time",
    description: "Land after your flight and your driver is already waiting, ready to take you straight to your first hotel.",
  },
  {
    icon: <FiHome aria-hidden="true" className="h-6 w-6" />,
    title: "Hotels Vetted Directly",
    description: "We book every hotel ourselves with properties we know personally, so you're not comparing listings blind from overseas.",
  },
  {
    icon: <FiCalendar aria-hidden="true" className="h-6 w-6" />,
    title: "Sightseeing Planned in Advance",
    description: "Entry tickets, timings and routes are arranged ahead of time, so you spend your trip seeing India, not queuing or researching.",
  },
  {
    icon: <FiMessageCircle aria-hidden="true" className="h-6 w-6" />,
    title: "WhatsApp Throughout Your Trip",
    description: "Plan the whole thing over WhatsApp, and keep the same line open once you've landed — no long email threads, no phone tag.",
  },
  {
    icon: <FiShield aria-hidden="true" className="h-6 w-6" />,
    title: "Transparent Pricing",
    description: "Every quote spells out exactly what's included, with any card-payment charge disclosed upfront — never added as a surprise later.",
  },
];

const planningFacts = [
  {
    icon: <FiClock aria-hidden="true" className="h-6 w-6" />,
    title: "Flights from Germany",
    detail:
      "Lufthansa flies nonstop from both Frankfurt and Munich to Delhi and Mumbai, most routes running close to daily, in around 8 to 9 hours — one of the more comfortable and stable long-haul connections on this list, well short of the 11-13 hour flights needed to reach East Asia or North America directly.",
  },
  {
    icon: <FiFileText aria-hidden="true" className="h-6 w-6" />,
    title: "e-Visa for German Citizens",
    detail:
      "German passport holders can apply for a 30-day, 1-year, or 5-year e-Tourist visa online. Germany isn't in the small group of nationalities (US, UK, Canada, Japan) that get an extended 180-day stay — German citizens get up to 90 days per visit on the 1-year and 5-year options, still generous for most trip lengths. Applications go through the official government portal directly.",
  },
  {
    icon: <FiSend aria-hidden="true" className="h-6 w-6" />,
    title: "e-Arrival Card (New Since 2026)",
    detail:
      "Separate from the visa, every foreign national must now submit a free digital e-Arrival Card within 72 hours before landing — covering flight details, purpose of visit, and your accommodation address. It replaces the paper form once handed out on the plane and takes a few minutes online.",
  },
  {
    icon: <FiCreditCard aria-hidden="true" className="h-6 w-6" />,
    title: "Best Time to Visit from Germany",
    detail:
      "October through March covers India's most comfortable season and overlaps with the German winter, including the Christmas and New Year school holidays (Weihnachtsferien) if you're planning a family trip. India is 3.5 to 4.5 hours ahead of Germany depending on daylight saving — a manageable gap for planning calls.",
  },
];

const durationBands = [
  {
    label: "6-9 Days",
    description: "The classic Golden Triangle or a full Rajasthan circuit — enough for a real trip without needing two weeks off work.",
    href: "/tours/6-9-day-tours",
  },
  {
    label: "10-14 Days",
    description: "Our most popular length for European travellers — room to combine North India with Kerala, wildlife, or Nepal and Bhutan.",
    href: "/tours/10-14-day-tours",
  },
  {
    label: "15+ Days",
    description: "For a genuine once-in-a-while trip — a fully custom, extended multi-region itinerary.",
    href: "/tours/15-plus-day-tours",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How long is the flight from Germany to India?",
    answer:
      "Around 8 to 9 hours nonstop from Frankfurt or Munich to Delhi or Mumbai, flown by Lufthansa on near-daily schedules. It's one of the more comfortable long-haul routes from Europe, well under the 11-13 hours needed to reach East Asia or North America.",
  },
  {
    question: "Do German citizens need a visa for India?",
    answer:
      "Yes — German travellers need an e-Tourist visa (30-day, 1-year, or 5-year options), applied for online through the official Indian government portal before departure. German citizens get up to 90 days per visit on the longer visas — not the extended 180-day allowance reserved for US, UK, Canadian and Japanese citizens.",
  },
  {
    question: "What is the e-Arrival Card, and is it different from the visa?",
    answer:
      "Yes, it's separate — a newer requirement (mandatory since April 2026) that every foreign national must submit online within 72 hours before landing, regardless of visa type. It replaces the paper arrival form, takes a few minutes, and has no fee.",
  },
  {
    question: "Is India a good trip to plan around German winter school holidays?",
    answer:
      "Yes — the Christmas and New Year school break (Weihnachtsferien) falls within India's most comfortable travel season (October to March), making it a popular window for German families to visit without conflicting with term time.",
  },
  {
    question: "How many days do I need for a first trip to India from Germany?",
    answer:
      "Most of our German guests find 8 to 12 days works well for a first trip — enough for the Golden Triangle plus one more region such as Rajasthan or Kerala, without needing an especially long time away.",
  },
  {
    question: "What time difference should we plan around for calls?",
    answer:
      "India is 3.5 hours ahead of Germany during Central European Summer Time and 4.5 hours ahead during Central European Time in winter — a manageable gap that usually allows for a call within the same working day.",
  },
  {
    question: "Can I use my German debit or credit card in India?",
    answer:
      "Yes — most hotels and larger vendors accept international cards, though it's worth carrying some Indian Rupees in cash for smaller purchases, local markets, and tips. A 2% bank/gateway charge applies if you pay your tour balance by card, disclosed upfront in your quote.",
  },
  {
    question: "Do you offer airport pickup in Delhi or Mumbai?",
    answer:
      "Yes, on every itinerary — your driver will be waiting at arrivals with your name, ready to take you straight to your first hotel after the flight, whichever city you land in.",
  },
  {
    question: "Can I combine India with Nepal or Bhutan on the same trip from Germany?",
    answer:
      "Yes — many German guests extend a longer trip into Nepal and/or Bhutan rather than making a separate journey later, since all three connect well by air within the region. Tell us how much time you have and we'll build the route around it.",
  },
  {
    question: "How far in advance should German travellers book?",
    answer:
      "2 to 3 months ahead gives the most flexibility on hotels and guides, especially for October to March travel, which is peak season and also popular with German families travelling over the Christmas break.",
  },
];

export default function IndiaToursFromGermanyPage() {
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
          image="/images/destinations/agra-taj-mahal.webp"
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="India Holidays & Private Tours for German Travellers"
          headline="India Tours from Germany"
          subheadline="Private, tailor-made itineraries for German travellers, built around your dates — with straight answers on flights, visas and what to expect before you go."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-soft">
                India is one of the most rewarding trips a German traveller can take, and the
                flight from Germany is genuinely one of the more comfortable long-hauls available
                — near-daily nonstop options from both Frankfurt and Munich, and a manageable time
                difference once you land. As a Jaipur-based, IATO-registered agency, every
                itinerary we build is private and tailor-made around your own dates and interests,
                with a private air-conditioned vehicle and English-speaking guide throughout — and
                for many German travellers, a Rajasthan or Golden Triangle trip is easily combined
                with Kerala, a wildlife safari, or a Nepal and Bhutan extension for one longer,
                more complete journey.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Why Book a Private India Tour from Germany?"
                heading="Every Detail Handled, End to End"
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyBookCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-sand bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-maroon">
                      {card.icon}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning From Germany"
                heading="Everything German Travellers Need to Know"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {planningFacts.map((fact, index) => (
                <Reveal key={fact.title} delay={index * 0.08}>
                  <div className="flex h-full gap-4 rounded-2xl border border-sand bg-white p-6 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-maroon">
                      {fact.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {fact.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {fact.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="How Long Should Your Trip Be?"
                heading="How Many Days Do You Need for an India Trip From Germany?"
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {durationBands.map((band, index) => (
                <Reveal key={band.label} delay={index * 0.08}>
                  <a
                    href={band.href}
                    className="group flex h-full flex-col rounded-2xl border border-sand bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="font-display text-2xl font-bold text-gold-dark">
                      {band.label}
                    </span>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {band.description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-maroon">
                      See {band.label} Tours →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CityGrid
          eyebrow="Popular With German Travellers"
          heading="Where to Start"
          cities={[
            {
              name: "Golden Triangle Tour",
              tagline: "Best for First-Time Visitors",
              description: "Delhi, Agra & Jaipur — the Taj Mahal, Amber Fort, and Old and New Delhi in 6 days.",
              href: "/tours/golden-triangle-tour-classic",
              image: "/images/destinations/agra-taj-mahal.webp",
              imageAlt: "Taj Mahal at sunrise, Agra",
            },
            {
              name: "India Highlights",
              tagline: "Best for a Complete Trip",
              description: "North India's monuments and Kerala's backwaters in one 7-day journey, ideal for a longer holiday.",
              href: "/tours/india-highlights",
              image: "/images/destinations/thekkady.webp",
              imageAlt: "Kerala backwaters houseboat cruising a palm-lined canal",
            },
            {
              name: "Rajasthan Wildlife Safari",
              tagline: "Best for Palaces & Wildlife Together",
              description: "Rajasthan's forts and palaces combined with a Ranthambore tiger safari in one 8-day route.",
              href: "/tours/rajasthan-wildlife-safari",
              image: "/images/destinations/amber-fort-jaipur.webp",
              imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
            },
          ]}
          showActions
        />

        <div className="border-t border-sand/70">
          <Testimonials />
        </div>

        <FAQSection
          eyebrow="FAQ"
          heading="Questions German Travellers Ask Most"
          faqs={faqs}
          whatsappMessage="Hi! I'm planning a trip to India from Germany and have a question."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Ready to Plan Your Trip From Germany?"
          headlineItalic="Tell Us Your Dates."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'm planning a trip to India from Germany and would like to start planning with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
