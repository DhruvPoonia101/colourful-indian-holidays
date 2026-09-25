import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { threeToFiveDayTours } from "@/content/duration-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "3–5 Day India Tours | Short Trips & Long Weekends, 2026";
const description =
  "3 to 5 day India tour packages for short trips and long weekends — single-city deep dives like Agra and Jaipur, plus short wildlife, beach and hill-station breaks, built privately around your dates.";
const pagePath = "/tours/3-5-day-tours";
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
  { name: "3–5 Day Tours", path: pagePath },
];

const overview = [
  "Three to five days is the shortest window in which an India trip stops feeling rushed. A 3 day tour suits one place explored properly — [[the Taj Mahal at sunrise|/tours/taj-mahal-tours]] in Agra, or the rock-cut shore temples of [[Mahabalipuram|/tours/mahabalipuram-tour]] near Chennai — without the fatigue of trying to fit in a second city on top. Stretch to 4 or 5 days and there's room to add one short transfer to a connected destination, pairing Jaipur with Udaipur or Srinagar's Dal Lake with a day in Gulmarg, while still coming home with time to spare rather than needing a week off just to recover from the trip itself.",
  "Most of our 3–5 day tours follow the same basic shape: a half-day arrival with a private airport transfer and a relaxed first evening, one or two full sightseeing days built around a single city's major sights, and a departure that doesn't feel like a scramble. There are no fixed departure dates or minimum group sizes on any of these — every 3 to 5 day tour here is a private itinerary with your own vehicle, driver and guide, built around whichever dates you already have booked. If five days genuinely isn't enough once you've looked through the options, most of these routes extend naturally into our [[6–9 day tours|/tours/6-9-day-tours]] instead of forcing you to start over with a new plan.",
  "A short India tour of this length usually suits one of three kinds of traveller: someone extending a business trip in India by a long weekend, a first-time visitor testing whether the country suits their travel style before committing to a longer circuit, or someone adding a single Indian stop onto a wider Asia itinerary — Delhi or Agra between flights, for instance. It's also the right length for repeat visitors who've already done the Golden Triangle and want to go back for one specific place they missed the first time round, whether that's [[Jaisalmer's desert fort|/tours/jaisalmer-tour]] or [[Sikkim's Himalayan monasteries|/tours/sikkim-tour]].",
  "The itineraries below cover that range. There are single-city deep dives such as the [[Jaipur City Tour|/tours/jaipur-city-tour]] and [[Udaipur Tour|/tours/udaipur-tour]], short wildlife breaks like the [[Ranthambore Tour|/tours/ranthambore-tour]], and coastal escapes such as the [[Tamil Nadu Beaches Tour|/tours/tamil-nadu-beaches-tour]]. A handful stretch to a genuine two-city 5 day itinerary — [[Rajasthan Highlights|/tours/rajasthan-highlights]] covers both Jaipur and Udaipur in one trip, and the [[Kashmir Valley Tour|/tours/kashmir-valley-tour]] combines Srinagar with Gulmarg and Pahalgam. Every one of them can be adjusted by a day in either direction once you tell us your actual travel dates.",
  "The best time for a 3–5 day tour depends more on the single region you're visiting than on one all-India season. October through March suits North Indian destinations like Agra, Jaipur, Jodhpur and Udaipur comfortably, with cool mornings and clear skies for sightseeing, while Kerala's coast and the high-altitude routes through Kashmir and Ladakh each run on their own separate windows. Because a short tour usually covers a single region rather than a long pan-India circuit, it's easier to pick the destination first and let us confirm whether your specific travel dates line up well with it.",
  `Below are all ${threeToFiveDayTours.length} of our current 3 to 5 day tour packages, sorted from shortest to longest. Click through to any of them for the full day-by-day plan and inclusions, or use the enquiry button on this page if you'd like help combining two of them into one longer trip.`,
];

const faqs: FaqItem[] = [
  {
    question: "Is 3 days enough to see India?",
    answer:
      "Three days is enough to properly explore one place — the Taj Mahal and Agra, for example, or Mahabalipuram's shore temples near Chennai — but not enough to see India as a whole, which is roughly the size of Western Europe. Most first-time visitors pair a 3 day stop with at least one more city, taking the trip to 4 or 5 days.",
  },
  {
    question: "What is the best 5 day India itinerary for first-time visitors?",
    answer:
      "For a first trip, five days is usually enough for Delhi and Agra together, or Jaipur and Udaipur as a two-city Rajasthan introduction. Both routes keep travel time low and sightseeing time high, rather than spending a day of a short trip purely in transit between distant cities.",
  },
  {
    question: "Can I combine two cities in a 4 or 5 day tour?",
    answer:
      "Yes — several of our 4 and 5 day itineraries already combine two connected destinations, such as Jaipur with Udaipur, or Srinagar with Gulmarg and Pahalgam in the Kashmir Valley. The key is choosing two places close enough by road or air that transfer time doesn't eat into your sightseeing.",
  },
  {
    question: "Are these short India tours private or shared with a group?",
    answer:
      "Every itinerary on this page is a private tour with your own vehicle, driver and guide — there are no fixed departure dates or shared group sizes. Each trip is built around whichever dates you already have, rather than asking you to fit an existing group departure.",
  },
  {
    question: "How much does a 3–5 day India tour cost?",
    answer:
      "Pricing depends on the cities covered, hotel category and travel season, so we quote each 3–5 day tour individually rather than publishing a fixed rate. Tell us your dates and preferred style of hotel and we'll reply with a detailed quote, usually within 24 hours.",
  },
];

export default function ThreeToFiveDayToursPage() {
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
          eyebrow="By Duration"
          headline="3–5 Day Tours"
          subheadline="Short on time but not on India? These are our most-requested single-city and short-circuit itineraries — long enough to see a place properly, short enough to fit a busy schedule."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning Guide"
                heading="How Many Days Do You Need for a Short India Tour?"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {overview.map((paragraph, i) => (
                  <p key={i}>{renderWithLinks(paragraph)}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow={`${threeToFiveDayTours.length} Itineraries`}
          heading="Short Trips & Long Weekends"
          cities={threeToFiveDayTours}
          showActions
        />

        <FAQSection
          eyebrow="Common Questions"
          heading="3–5 Day India Tours: FAQs"
          intro="Quick answers to what we're asked most about short India trips. Can't find yours here? Message us directly."
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a 3-5 day tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Every Itinerary Here Is a Starting Point."
          headlineItalic="Tell Us Your Dates."
          subtext="None of these are fixed departures — we build each one privately around your dates, pace and interests, and can extend or combine any of them if 3–5 days turns out to be too short."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a short 3–5 day tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
