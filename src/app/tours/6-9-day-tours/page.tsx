import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { sixToNineDayTours } from "@/content/duration-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "6–9 Day India Tours | Classic Circuits & Full Highlights, 2026";
const description =
  "6 to 9 day India tour packages — the classic Golden Triangle, Rajasthan, Kerala and South India circuits, plus Nepal, Bhutan and wildlife safaris, built privately around your dates.";
const pagePath = "/tours/6-9-day-tours";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
  { name: "6–9 Day Tours", path: pagePath },
];

const overview = [
  "A 6 to 9 day India tour is the length most first-time visitors settle on, and for good reason — it's enough time for a genuine multi-city circuit rather than a single stop, without needing two full weeks away from home or work. A 6 day tour comfortably covers the [[classic Golden Triangle|/tours/golden-triangle-tour-classic]] of Delhi, Agra and Jaipur, or a [[classic Kerala circuit|/tours/kerala-tours-classic]] through the backwaters and hill country. Push to 8 or 9 days and there's room to add a fourth city or a genuine side trip — a tiger safari at Ranthambore, a couple of nights in Udaipur, or a flight on to Varanasi for the Ganges ghats — without the trip starting to feel like a marathon.",
  "This is also the length where India's regional tours start to make sense as one connected journey rather than an isolated city visit. An 8 day [[Rajasthan tour|/tours/rajasthan-tours-classic]] can genuinely take in Jaipur, Jodhpur, Jaisalmer and Udaipur — the state's four signature cities — in one loop, while a 9 day [[Kashmir & Ladakh tour|/tours/kashmir-ladakh-tours-classic]] pairs Srinagar's Dal Lake with Leh's high-altitude monasteries, two genuinely different landscapes usually seen separately on shorter trips. If you've already done a short 3–5 day introduction and are coming back for more, this is typically the next step up rather than jumping straight to a longer multi-country circuit.",
  "A week to nine days is also the minimum realistic window for crossing into Nepal or Bhutan alongside an India stop. Our [[Nepal Tours|/tours/nepal-tours]] and [[Bhutan Tours|/tours/bhutan-tours]] both run 8 days on their own, covering temples, mountain views and — in Bhutan's case — the Tiger's Nest monastery, without needing to compress the trip into a rushed long weekend. Both work well as standalone trips at this length, or as the second leg of a longer India-plus-Himalayas journey if you decide later to extend into our [[10–14 day tours|/tours/10-14-day-tours]] instead.",
  "Wildlife and heritage-focused travellers are well served at this length too. The [[Rajasthan Wildlife Safari|/tours/rajasthan-wildlife-safari]] combines Ranthambore's tiger reserve with Jaipur and a lake city over 8 days, while the [[Rajasthan Culture & Heritage Trail|/tours/rajasthan-culture-heritage-trail]] goes deeper into forts, havelis and living craft traditions across the same time frame — genuinely different itineraries built for different interests rather than one generic Rajasthan tour repeated under two names. Every route below runs with a private vehicle, driver and guide throughout, with no fixed departure dates to work around.",
  "October through March is the most comfortable window for most of these routes, since it covers the cooler months across North India, Rajasthan and the Golden Triangle cities that dominate this length. Kashmir and Ladakh run on the opposite calendar — May through September, once the high mountain passes are clear of snow — so if your 6–9 day trip includes either, it's worth confirming your dates against that season specifically rather than the general October–March guidance.",
  `Below are all ${sixToNineDayTours.length} of our current 6 to 9 day tour packages, sorted from shortest to longest. Click through to any of them for the full day-by-day plan and inclusions, or message us if you'd like help choosing between two similar routes.`,
];

const faqs: FaqItem[] = [
  {
    question: "Is 7 days enough for India?",
    answer:
      "Seven days is enough for one well-planned circuit — the Golden Triangle plus one extra city, or a full Kerala loop, for example — but not enough to cover more than one region of India properly. Most 7 day itineraries focus on a single connected area rather than trying to span the whole country.",
  },
  {
    question: "What's included in an 8 or 9 day India tour package?",
    answer:
      "Our 8 and 9 day tours include a private vehicle with driver throughout, an English-speaking guide for sightseeing days, hotel accommodation, and all listed transfers. Meals, flights and entry tickets are typically listed separately in each itinerary's inclusions, since preferences vary by traveller.",
  },
  {
    question: "Can I add Nepal or Bhutan to a week-long India trip?",
    answer:
      "Yes, though a genuine India-plus-Nepal or India-plus-Bhutan combination usually needs closer to 11 or 12 days to do both properly rather than rushing either. For a standalone week-long trip, our Nepal Tours and Bhutan Tours each run a full 8 days on their own.",
  },
  {
    question: "What's the difference between the Golden Triangle Tour and Rajasthan Tours?",
    answer:
      "The Golden Triangle covers just Delhi, Agra and Jaipur in 6 days, while Rajasthan Tours extends further into the state itself — Jodhpur, Jaisalmer and Udaipur — over 8 days. Think of the Golden Triangle as the classic first stop and Rajasthan Tours as the fuller state-wide follow-up.",
  },
  {
    question: "When is the best time for a 6–9 day India tour?",
    answer:
      "October through March suits most routes at this length, covering the cooler months across North India and Rajasthan. Kashmir and Ladakh are the exception, running best from May through September once the high mountain passes are open — worth checking separately if your itinerary includes either.",
  },
];

export default function SixToNineDayToursPage() {
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
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="By Duration"
          headline="6–9 Day Tours"
          subheadline="Our most popular trip length — enough time for a proper circuit rather than a single city, without needing two full weeks away. This is where most of our classic itineraries live."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning Guide"
                heading="What to Expect From a 6–9 Day India Tour"
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
          eyebrow={`${sixToNineDayTours.length} Itineraries`}
          heading="Classic Circuits & Full Highlights"
          cities={sixToNineDayTours}
          showActions
        />

        <FAQSection
          eyebrow="Common Questions"
          heading="6–9 Day India Tours: FAQs"
          intro="Quick answers to what we're asked most about week-long India trips. Can't find yours here? Message us directly."
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a 6-9 day tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Every Itinerary Here Is a Starting Point."
          headlineItalic="Tell Us Your Dates."
          subtext="None of these are fixed departures — we build each one privately around your dates, pace and interests, and can shorten or extend any of them to fit the time you actually have."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a 6–9 day tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
