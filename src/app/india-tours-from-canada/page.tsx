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
 * Fourth of 6 country-of-origin pages (after USA, UK, Australia). Same
 * structure and "why book" cards as those three; only planning facts, FAQ
 * and framing are Canada-specific.
 *
 * Facts verified rather than assumed:
 * - e-Visa: Canadian citizens ARE in the 180-day-per-visit group alongside
 *   the US, UK and Japan (confirmed across multiple consistent sources) —
 *   unlike Australia, which is NOT in this group and gets 90 days. Correct
 *   to group Canada with US/UK here, and to keep Australia's page as the
 *   one exception.
 * - Flights: similar instability to the USA page, not the UK's stability.
 *   Air India cut Toronto-Delhi and Vancouver-Delhi frequencies in May
 *   2026 citing jet fuel costs, though Toronto-Delhi remains described as
 *   "the strongest direct gateway" even after cuts. A seasonal Toronto-
 *   Mumbai route also exists (Oct 2026-March 2027) but is explicitly
 *   seasonal, not year-round. Flight time is stated (~14.5-16 hours) but
 *   specific current frequency/airline is deliberately not over-promised.
 * - Time zone: Canada spans multiple zones like the US — Toronto/Eastern
 *   Canada mirrors US Eastern time, Vancouver/Pacific Canada mirrors US
 *   Pacific time, both mentioned rather than picking one.
 */

const title = "India Tours from Canada | Private, Tailor-Made Itineraries";
const description =
  "Private India tours for Canadian travellers — flight options from Toronto and Vancouver, e-Visa and e-Arrival Card guidance, and itineraries built around your dates.";
const pagePath = "/india-tours-from-canada";

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
  { name: "India Tours from Canada", path: pagePath },
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
    description: "Land after a long flight and your driver is already waiting, ready to take you straight to your first hotel.",
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
    title: "Flights from Canada",
    detail:
      "Toronto-Delhi is the strongest direct gateway between the two countries, at around 15-16 hours nonstop, with Vancouver-Delhi also running. Frequencies on both routes have been reduced over the past year due to rising fuel costs, so it's worth checking current schedules once your dates are set rather than assuming a route runs as often as it used to.",
  },
  {
    icon: <FiFileText aria-hidden="true" className="h-6 w-6" />,
    title: "e-Visa for Canadian Citizens",
    detail:
      "Canadian passport holders can apply for a 30-day, 1-year, or 5-year e-Tourist visa online. Like US and UK citizens, Canadians get up to 180 days per visit on the 1-year and 5-year options — longer than most other nationalities. Applications go through the official government portal directly; it's your own application to complete, not something we file for you.",
  },
  {
    icon: <FiSend aria-hidden="true" className="h-6 w-6" />,
    title: "e-Arrival Card (New Since 2026)",
    detail:
      "Separate from the visa, every foreign national must now submit a free digital e-Arrival Card within 72 hours before landing — covering flight details, purpose of visit, and your accommodation address. It replaces the paper form once handed out on the plane and takes a few minutes online.",
  },
  {
    icon: <FiCreditCard aria-hidden="true" className="h-6 w-6" />,
    title: "Best Time to Visit from Canada",
    detail:
      "October through March avoids both the Indian summer and the worst of the Canadian winter, and lines up well with winter-break travel if you're planning around school or work calendars. India is 9.5-10.5 hours ahead of Eastern Canada and 12.5-13.5 hours ahead of the Pacific coast, worth factoring into planning calls with us.",
  },
];

const durationBands = [
  {
    label: "6-9 Days",
    description: "The classic Golden Triangle or a full Rajasthan circuit — enough for a real trip without needing two weeks off.",
    href: "/tours/6-9-day-tours",
  },
  {
    label: "10-14 Days",
    description: "Our most popular length for Canadian travellers — room to combine North India with Kerala, wildlife, or Nepal and Bhutan.",
    href: "/tours/10-14-day-tours",
  },
  {
    label: "15+ Days",
    description: "For a genuinely once-in-a-while trip that justifies the flight — a fully custom, extended multi-region itinerary.",
    href: "/tours/15-plus-day-tours",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How long is the flight from Canada to India?",
    answer:
      "Around 15 to 16 hours nonstop on the Toronto-Delhi route, the strongest direct connection between the two countries, or a similar duration via Vancouver-Delhi. Frequencies have been reduced on both routes over the past year, so it's worth confirming current schedules once you have travel dates in mind.",
  },
  {
    question: "Do Canadian citizens need a visa for India?",
    answer:
      "Yes — Canadian travellers need an e-Tourist visa (30-day, 1-year, or 5-year options), applied for online through the official Indian government portal before departure. Canadian citizens get a longer per-visit stay allowance (up to 180 days on the longer visas) than most other nationalities.",
  },
  {
    question: "What is the e-Arrival Card, and is it different from the visa?",
    answer:
      "Yes, it's separate — a newer requirement (mandatory since April 2026) that every foreign national must submit online within 72 hours before landing, regardless of visa type. It replaces the paper arrival form, takes a few minutes, and has no fee.",
  },
  {
    question: "How many days do I need for a first trip to India from Canada?",
    answer:
      "Given the flight length, most of our Canadian guests find 10 to 14 days worth it — enough for the Golden Triangle plus one more region (Rajasthan, Kerala, or a wildlife safari) rather than feeling like the travel time outweighs the time on the ground.",
  },
  {
    question: "Is it cheaper to book directly with a Jaipur-based operator than a Canadian travel agency?",
    answer:
      "Often, yes — a Canada-based agency reselling India tours typically adds its own margin on top of ours. Booking directly means you're working with the people who actually know the hotels, drivers and routes personally, without an extra layer of markup.",
  },
  {
    question: "What time zone difference should we plan around for calls?",
    answer:
      "India is 9.5 hours ahead of Eastern Canada (Toronto, Ottawa, Montreal) and 12.5 hours ahead of the Pacific coast (Vancouver), adjusting slightly with daylight saving since India doesn't observe it. We're happy to schedule calls around whichever fits your day better.",
  },
  {
    question: "Can I use my Canadian credit or debit card in India?",
    answer:
      "Yes — most hotels and larger vendors accept international cards, though it's worth carrying some Indian Rupees in cash for smaller purchases, local markets, and tips. A 2% bank/gateway charge applies if you pay your tour balance by card, disclosed upfront in your quote.",
  },
  {
    question: "Do you offer airport pickup in Delhi?",
    answer:
      "Yes, on every itinerary — your driver will be waiting at arrivals with your name, ready to take you straight to your first hotel after the flight.",
  },
  {
    question: "Can I combine India with Nepal or Bhutan on the same trip from Canada?",
    answer:
      "Yes — given how far you're already travelling, many Canadian guests extend their trip into Nepal and/or Bhutan rather than making a separate journey later. Tell us how much time you have and we'll build the route around it.",
  },
  {
    question: "How far in advance should Canadian travellers book?",
    answer:
      "2 to 3 months ahead gives the most flexibility on hotels and guides, especially for October to March travel, which is peak season. Given the flight length involved, most of our Canadian guests prefer to lock in dates well ahead rather than book last-minute.",
  },
];

export default function IndiaToursFromCanadaPage() {
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
          eyebrow="India Holidays & Private Tours for Canadian Travellers"
          headline="India Tours from Canada"
          subheadline="Private, tailor-made itineraries for Canadian travellers, built around your dates — with straight answers on flights, visas and what to expect before you go."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-soft">
                India is one of the most rewarding trips a Canadian traveller can take, and one of
                the least straightforward to plan alone from overseas — a 15+ hour flight, a visa
                process with its own rules for Canadian passports, and a country large enough that
                choosing where to go is half the challenge. As a Jaipur-based, IATO-registered
                agency, every itinerary we build is private and tailor-made around your own dates
                and interests, with a private air-conditioned vehicle and English-speaking guide
                throughout — and for many Canadian travellers, a Rajasthan or Golden Triangle trip
                is easily combined with Kerala, a wildlife safari, or a Nepal and Bhutan extension
                for one longer, more complete journey.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Why Book a Private India Tour from Canada?"
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
                eyebrow="Planning From Canada"
                heading="Everything Canadian Travellers Need to Know"
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
                heading="How Many Days Do You Need for an India Trip From Canada?"
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
          eyebrow="Popular With Canadian Travellers"
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
          heading="Questions Canadian Travellers Ask Most"
          faqs={faqs}
          whatsappMessage="Hi! I'm planning a trip to India from Canada and have a question."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Ready to Plan Your Trip From Canada?"
          headlineItalic="Tell Us Your Dates."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'm planning a trip to India from Canada and would like to start planning with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
