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
 * Fifth of 6 country-of-origin pages (after USA, UK, Australia, Canada).
 * Genuinely different profile from the previous four: the flight is short
 * (~3-3.5 hours) and extremely frequent rather than a long-haul concern,
 * so this page does NOT lean on "worth the long flight" duration framing
 * the way the others do.
 *
 * The most important distinction on this page, verified via search:
 * UAE VISA-ON-ARRIVAL ONLY APPLIES TO ACTUAL EMIRATI PASSPORT HOLDERS —
 * a small fraction of who actually books a trip "from the UAE." The large
 * majority of people planning an India trip from Dubai or Abu Dhabi are
 * expatriate residents holding other passports (Indian, Pakistani,
 * Filipino, British, and dozens of others), and their visa requirement is
 * governed by THEIR OWN nationality's e-Visa rules, not by UAE residency.
 * A generic "UAE travellers" visa section that only described the Emirati
 * visa-on-arrival option would be actively misleading for most of this
 * page's actual audience — so the visa section here is deliberately
 * structured around this distinction rather than glossing over it.
 *
 * Other verified facts:
 * - Flights: Dubai-Delhi and Abu Dhabi-Mumbai are among the busiest,
 *   highest-frequency corridors in the world (dozens of flights daily),
 *   nonstop in roughly 3 to 3.5 hours — one of the most stable, reliable
 *   routes of any of the 6 country pages, unlike the USA/Canada pages.
 * - Time zone: UAE is UTC+4, India is UTC+5:30 — India is only 1.5 hours
 *   AHEAD of the UAE, the smallest gap of any country page built so far.
 * - e-Arrival Card requirement is the same as the other pages (mandatory
 *   since April 2026, applies to all foreign nationals regardless of
 *   which country they're flying from).
 */

const title = "India Tours from the UAE | Private, Tailor-Made Itineraries";
const description =
  "Private India tours for travellers flying from the UAE — short flight times from Dubai and Abu Dhabi, visa guidance by nationality, and itineraries built around your dates.";
const pagePath = "/india-tours-from-uae";

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
  { name: "India Tours from the UAE", path: pagePath },
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
    title: "Flights from the UAE",
    detail:
      "Among the shortest and busiest routes on this list — Dubai-Delhi and Abu Dhabi-Mumbai run nonstop in around 3 to 3.5 hours, with dozens of flights daily across multiple airlines. Unlike a long-haul trip, flight availability here is genuinely one of the easiest parts of planning.",
  },
  {
    icon: <FiFileText aria-hidden="true" className="h-6 w-6" />,
    title: "Visa Requirements Depend on Your Passport",
    detail:
      "This is the detail most UAE-based travellers get wrong: your visa requirement is set by your own nationality, not by living in the UAE. Emirati passport holders can use a Visa-on-Arrival (up to 60 days) if they've previously held an Indian e-Visa or regular visa. Everyone else — the large majority of people booking a trip from Dubai or Abu Dhabi — applies for the standard e-Tourist visa online, under the rules for their own passport.",
  },
  {
    icon: <FiSend aria-hidden="true" className="h-6 w-6" />,
    title: "e-Arrival Card (New Since 2026)",
    detail:
      "Separate from the visa, every foreign national must now submit a free digital e-Arrival Card within 72 hours before landing — covering flight details, purpose of visit, and your accommodation address. It replaces the paper form once handed out on the plane and takes a few minutes online.",
  },
  {
    icon: <FiCreditCard aria-hidden="true" className="h-6 w-6" />,
    title: "Best Time to Visit from the UAE",
    detail:
      "October through March is comfortably cooler than both the UAE's brutal summer and India's own hot season, making it the natural window for most trips. Time zones are barely worth worrying about — India is only 1.5 hours ahead of the UAE, so planning calls fit easily into the same working day.",
  },
];

const durationBands = [
  {
    label: "3-5 Days",
    description: "A genuine long weekend is realistic here, given the short flight — a single-city deep dive like Jaipur or Agra.",
    href: "/tours/3-5-day-tours",
  },
  {
    label: "6-9 Days",
    description: "The classic Golden Triangle or a full Rajasthan circuit — our most popular length for UAE-based travellers.",
    href: "/tours/6-9-day-tours",
  },
  {
    label: "10-14 Days",
    description: "Room to combine North India with Kerala, wildlife, or Nepal and Bhutan for a more complete trip.",
    href: "/tours/10-14-day-tours",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How long is the flight from the UAE to India?",
    answer:
      "Around 3 to 3.5 hours nonstop from Dubai or Abu Dhabi to Delhi or Mumbai — one of the busiest, most frequent air corridors in the world, with dozens of flights daily across several airlines.",
  },
  {
    question: "I live in the UAE but I'm not an Emirati citizen — what visa do I need?",
    answer:
      "Your visa requirement is set by your own passport's nationality, not by your UAE residency. Living in Dubai or Abu Dhabi doesn't change India's visa rules for you — you'd apply for the standard e-Tourist visa online under whatever terms apply to your actual citizenship, the same as if you were applying from anywhere else.",
  },
  {
    question: "Do Emirati citizens need a visa for India?",
    answer:
      "Yes, though Emirati passport holders have an additional option — a Visa-on-Arrival allowing up to 60 days, available if you've previously held an Indian e-Visa or regular visa. This option is specific to UAE nationals and doesn't extend to UAE residents holding other passports.",
  },
  {
    question: "What is the e-Arrival Card, and is it different from the visa?",
    answer:
      "Yes, it's separate — a newer requirement (mandatory since April 2026) that every foreign national must submit online within 72 hours before landing, regardless of visa type or which country they're flying from. It replaces the paper arrival form, takes a few minutes, and has no fee.",
  },
  {
    question: "How many days do I need for a trip to India from the UAE?",
    answer:
      "Given how short the flight is, even a long weekend (3-5 days) works well for a single-city trip like Jaipur or Agra — you don't need the 10+ days we'd typically suggest for a long-haul traveller. Most of our UAE-based guests go for 6 to 9 days for a fuller circuit.",
  },
  {
    question: "What time difference should we plan around for calls?",
    answer:
      "Barely any — India is only 1.5 hours ahead of the UAE, so planning calls fit easily within the same working day without needing to coordinate across a big gap.",
  },
  {
    question: "Can I use my UAE bank card in India?",
    answer:
      "Yes — most hotels and larger vendors accept international cards, though it's worth carrying some Indian Rupees in cash for smaller purchases, local markets, and tips. A 2% bank/gateway charge applies if you pay your tour balance by card, disclosed upfront in your quote.",
  },
  {
    question: "Do you offer airport pickup in Delhi or Mumbai?",
    answer:
      "Yes, on every itinerary — your driver will be waiting at arrivals with your name, ready to take you straight to your first hotel after the flight, whichever city you land in.",
  },
  {
    question: "Can I combine a short India trip with a stopover or extension elsewhere?",
    answer:
      "Yes — given how easy the UAE-India hop is, some of our guests treat India as one leg of a longer regional trip, or come back for a second short trip to a different region rather than trying to see everything at once. Tell us what you have in mind and we'll build around it.",
  },
  {
    question: "How far in advance should I book from the UAE?",
    answer:
      "Given how short and frequent the flight is, you have more flexibility than a long-haul traveller — even a few weeks' notice can work. That said, 6 to 8 weeks ahead gives the best choice of hotels and guides, especially during October to March peak season.",
  },
];

export default function IndiaToursFromUaePage() {
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
          eyebrow="India Holidays & Private Tours from the UAE"
          headline="India Tours from the UAE"
          subheadline="Private, tailor-made itineraries for travellers flying from Dubai and Abu Dhabi, built around your dates — with straight answers on flights, visas and what to expect."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-soft">
                India is one of the easiest international trips to plan from the UAE — a flight
                of just 3 to 3.5 hours, dozens of daily departures, and barely any time difference
                to work around. The one detail worth getting right first is that your visa
                requirement depends on your own nationality, not your UAE residency — something
                that catches out many of the UAE&apos;s large expatriate population when they start
                planning. As a Jaipur-based, IATO-registered agency, every itinerary we build is
                private and tailor-made around your own dates and interests, with a private
                air-conditioned vehicle and English-speaking guide throughout, whether you&apos;re
                after a quick long weekend in Rajasthan or a fuller multi-region journey.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Why Book a Private India Tour from the UAE?"
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
                eyebrow="Planning From the UAE"
                heading="Everything Travellers From the UAE Need to Know"
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
                heading="How Many Days Do You Need for an India Trip From the UAE?"
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
          eyebrow="Popular With Travellers From the UAE"
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
              name: "Rajasthan Highlights",
              tagline: "Best for a Long Weekend",
              description: "Jaipur and Udaipur only, in 5 focused days — ideal given how short and easy the flight from the UAE is.",
              href: "/tours/rajasthan-highlights",
              image: "/images/destinations/amber-fort-jaipur.webp",
              imageAlt: "Amber Fort at sunset, Jaipur, Rajasthan",
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
          heading="Questions Travellers From the UAE Ask Most"
          faqs={faqs}
          whatsappMessage="Hi! I'm planning a trip to India from the UAE and have a question."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Ready to Plan Your Trip From the UAE?"
          headlineItalic="Tell Us Your Dates."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'm planning a trip to India from the UAE and would like to start planning with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
