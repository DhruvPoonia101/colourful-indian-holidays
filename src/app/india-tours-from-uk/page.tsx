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
 * Second of 6 country-of-origin pages (after USA). Same structure as
 * india-tours-from-usa, with the "why book" cards kept identical (they're
 * not nationality-specific) and only the "what you need to know" facts,
 * FAQ, and framing rewritten for the UK.
 *
 * Facts verified rather than assumed:
 * - e-Visa: UK citizens get the same 180-day-per-visit allowance as US and
 *   Canadian citizens on the 1-year/5-year e-Tourist visa (one source
 *   initially suggested 90 days for UK specifically, but a more consistent
 *   set of sources — including one explicitly grouping "US, Canada, and
 *   UK" together — confirms 180 days, matching what's already stated on
 *   the USA page).
 * - Flights: Heathrow-Delhi is a long-established, multi-carrier route
 *   (Air India, British Airways, Virgin Atlantic all fly it), unlike the
 *   less stable 2026 US-India nonstop map — so specific airlines/times are
 *   named here with more confidence than on the USA page.
 * - e-Visa fees are deliberately NOT quoted — one source gave a 5-year fee
 *   of $484 that looks like a scraping error (wildly out of line with the
 *   $80 five-year fee confirmed for US citizens), so no fee figure is
 *   stated for either.
 * - e-Arrival Card requirement is the same as on the USA page (mandatory
 *   since April 2026, applies to all foreign nationals equally).
 */

const title = "India Tours from the UK | Private, Tailor-Made Itineraries";
const description =
  "Private India tours for British travellers — Heathrow-Delhi flight options, e-Visa and e-Arrival Card guidance for UK citizens, and itineraries built around your dates.";
const pagePath = "/india-tours-from-uk";

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
  { name: "India Tours from the UK", path: pagePath },
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
    title: "Flights from the UK",
    detail:
      "Heathrow to Delhi is a well-established, multi-carrier route — Air India (around 8.5 hours), British Airways and Virgin Atlantic (both around 9 hours) all fly it. For a longer trip, consider an open-jaw booking — fly into Delhi, out of Mumbai — to avoid backtracking across the country.",
  },
  {
    icon: <FiFileText aria-hidden="true" className="h-6 w-6" />,
    title: "e-Visa for UK Citizens",
    detail:
      "British passport holders can apply for a 30-day, 1-year, or 5-year e-Tourist visa online. Like US and Canadian citizens, UK travellers get up to 180 days per visit on the 1-year and 5-year options. Applications go through the official government portal directly — it's your own application to complete, not something we file for you.",
  },
  {
    icon: <FiSend aria-hidden="true" className="h-6 w-6" />,
    title: "e-Arrival Card (New Since 2026)",
    detail:
      "Separate from the visa, every foreign national must now submit a free digital e-Arrival Card within 72 hours before landing — covering flight details, purpose of visit, and your accommodation address. It replaces the paper form once handed out on the plane and takes a few minutes online.",
  },
  {
    icon: <FiCreditCard aria-hidden="true" className="h-6 w-6" />,
    title: "Best Time to Visit from the UK",
    detail:
      "October through March avoids both the Indian summer and the UK's coldest, greyest months, and lines up well with October or February half-term if you're planning a family trip around the school calendar. India is 4.5 to 5.5 hours ahead of the UK depending on the season — one of the more manageable time differences for planning calls with us.",
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
    description: "Our most popular length for British travellers — room to combine North India with Kerala, wildlife, or Nepal and Bhutan.",
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
    question: "How long is the flight from the UK to India?",
    answer:
      "Around 8.5 to 9 hours nonstop from London Heathrow to Delhi, flown by Air India, British Airways and Virgin Atlantic. It's one of the more comfortable long-haul routes from the UK, with multiple daily options to choose from.",
  },
  {
    question: "Do UK citizens need a visa for India?",
    answer:
      "Yes — British travellers need an e-Tourist visa (30-day, 1-year, or 5-year options), applied for online through the official Indian government portal before departure. UK citizens get a longer per-visit stay allowance (up to 180 days on the longer visas) than most other nationalities.",
  },
  {
    question: "What is the e-Arrival Card, and is it different from the visa?",
    answer:
      "Yes, it's separate — a newer requirement (mandatory since April 2026) that every foreign national must submit online within 72 hours before landing, regardless of visa type. It replaces the paper arrival form, takes a few minutes, and has no fee.",
  },
  {
    question: "Is India a good trip to plan around UK school holidays?",
    answer:
      "Yes — October and February half-term both fall within India's most comfortable travel season (October to March), making a family trip easy to plan around term dates without pulling children out of school.",
  },
  {
    question: "How many days do I need for a first trip to India from the UK?",
    answer:
      "Most of our British guests find 7 to 10 days works well for a first trip — enough for the Golden Triangle plus one more region such as Rajasthan, without needing two full weeks away.",
  },
  {
    question: "What time difference should we plan around for calls?",
    answer:
      "India is 4.5 hours ahead of the UK during British Summer Time and 5.5 hours ahead during GMT — a manageable gap that usually allows for a call within the same working day.",
  },
  {
    question: "Can I use my UK debit or credit card in India?",
    answer:
      "Yes — most hotels and larger vendors accept international cards, though it's worth carrying some Indian Rupees in cash for smaller purchases, local markets, and tips. A 2% bank/gateway charge applies if you pay your tour balance by card, disclosed upfront in your quote.",
  },
  {
    question: "Do you offer airport pickup in Delhi?",
    answer:
      "Yes, on every itinerary — your driver will be waiting at arrivals with your name, ready to take you straight to your first hotel after the flight.",
  },
  {
    question: "Can I combine India with Nepal or Bhutan on the same trip from the UK?",
    answer:
      "Yes — this is a common way to extend a longer UK trip, combining Rajasthan or North India with Nepal and Bhutan since all three connect well by air. Tell us how much time you have and we'll build the route around it.",
  },
  {
    question: "How far in advance should British travellers book?",
    answer:
      "2 to 3 months ahead gives the most flexibility on hotels and guides, especially for October to March travel, which is peak season and also popular with UK half-term and Christmas break travellers.",
  },
];

export default function IndiaToursFromUkPage() {
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
          eyebrow="India Holidays & Private Tours for British Travellers"
          headline="India Tours from the UK"
          subheadline="Private, tailor-made itineraries for UK travellers, built around your dates — with straight answers on flights, visas and what to expect before you go."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-soft">
                India is one of the most rewarding trips a British traveller can take, and the
                flight from the UK is genuinely one of the more comfortable long-hauls available —
                multiple daily options from Heathrow, and a manageable time difference once you
                land. As a Jaipur-based, IATO-registered agency, every itinerary we build is
                private and tailor-made around your own dates and interests, with a private
                air-conditioned vehicle and English-speaking guide throughout — and for many UK
                travellers, a Rajasthan or Golden Triangle trip is easily combined with Kerala, a
                wildlife safari, or a Nepal and Bhutan extension for one longer, more complete
                journey.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Why Book a Private India Tour from the UK?"
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
                eyebrow="Planning From the UK"
                heading="Everything British Travellers Need to Know"
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
                heading="How Many Days Do You Need for an India Trip From the UK?"
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
          eyebrow="Popular With British Travellers"
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
          heading="Questions British Travellers Ask Most"
          faqs={faqs}
          whatsappMessage="Hi! I'm planning a trip to India from the UK and have a question."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Ready to Plan Your Trip From the UK?"
          headlineItalic="Tell Us Your Dates."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'm planning a trip to India from the UK and would like to start planning with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
