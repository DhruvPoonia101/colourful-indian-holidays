import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { tenToFourteenDayTours } from "@/content/duration-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "15+ Day Custom India, Nepal & Bhutan Itineraries, 2026";
const description =
  "Planning a trip of 15 days or more? We don't run a fixed 15+ day package, but build extended, fully custom itineraries across India, Nepal and Bhutan around your own dates.";
const pagePath = "/tours/15-plus-day-tours";
const heroImage = "/images/destinations/jaisalmer-desert.webp";

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
  { name: "15+ Day Tours", path: pagePath },
];

const overview = [
  "We don't run a fixed 15+ day tour package, and that's a deliberate choice rather than a gap in our lineup. Our longest standing itineraries — the [[India, Nepal & Bhutan Tours|/tours/india-nepal-bhutan-tours]] circuit and the [[Grand Rajasthan Circuit|/tours/grand-rajasthan-circuit]] — run up to 12 days, which covers the vast majority of trips travellers actually book. Past that length, almost every traveller wants a different combination from anyone else: more time in one specific region, a country added on that isn't in our standard three-country route, or two of our existing circuits joined into a single longer journey. Rather than force a three-week trip into one generic template, we build it as a genuine custom itinerary once we know your dates, pace and interests.",
  "A trip of three weeks or more usually falls into one of a few shapes. Some travellers want a slow, unhurried version of an existing route — the same cities as our [[Grand Rajasthan Circuit|/tours/grand-rajasthan-circuit]], for example, but spread across 16 or 17 days instead of 12, with extra rest days and fewer early starts. Others want genuine range — starting in Rajasthan, moving through the Golden Triangle, then flying on to Kerala's backwaters or Kashmir's mountains for a completely different second half of the trip. And some are combining India with Nepal and Bhutan the way our 12 day circuit does, but adding a proper trek in the Everest or Annapurna region rather than the shorter cultural stops a standard itinerary includes.",
  "Multi-country trips of this length also need more lead time than a shorter tour. Bhutan requires a visa arranged through a licensed local operator well in advance, Nepal's trekking permits depend on which region and how high you're going, and internal flights across three countries are worth booking early rather than a few weeks out. None of this is a reason to avoid a longer trip — it's simply why we ask for more planning time upfront, usually starting the conversation 2 to 3 months ahead of travel rather than the few weeks that's often enough for a single-country tour.",
  "If you're not sure yet how long you actually want, the fastest way to get a sense of scale is to look at what a 10 to 14 day circuit already covers and decide what you'd add. Our [[10–14 day tours|/tours/10-14-day-tours]] page lists five multi-country and grand-circuit routes, each of which extends naturally — an extra Kerala or Kashmir leg, a longer Bhutan trek, or simply more time in each city rather than new places entirely. Below are those same five routes as a starting point; every one of them can become the first half of a longer custom itinerary once you tell us how much further you'd like to go.",
  "There's no fixed pricing for a 15+ day custom trip, since cost depends entirely on which countries, cities and hotel categories you combine. What stays constant is how we build it: a private vehicle and driver throughout each country, an English-speaking guide for sightseeing days, and an itinerary drafted around your actual dates rather than adapted from someone else's template.",
];

const faqs: FaqItem[] = [
  {
    question: "Do you offer fixed 15+ day tour packages?",
    answer:
      "No — our longest fixed itineraries run up to 12 days. Trips of 15 days or more are built as fully custom itineraries instead, since travellers at this length almost always want a different combination of regions and countries than any single fixed package would cover.",
  },
  {
    question: "How far in advance should I plan a 3-week India trip?",
    answer:
      "We'd suggest starting the conversation 2 to 3 months before travel for a trip of this length, especially if it crosses into Nepal or Bhutan. That gives enough time for Bhutan's visa arrangement, Nepal's trekking permits if relevant, and internal flights to be booked properly rather than at the last minute.",
  },
  {
    question: "Can I combine India, Nepal and Bhutan with a trek for a longer trip?",
    answer:
      "Yes — this is one of the more common requests for trips over two weeks. We can extend our standard India, Nepal & Bhutan Tours circuit with a proper trek in the Everest or Annapurna region, replacing the shorter cultural stops our 12 day version includes with several days on trail.",
  },
  {
    question: "How much does a 15+ day custom itinerary cost?",
    answer:
      "There's no fixed rate, since pricing depends entirely on which countries and cities you combine, your hotel category, and how many internal flights the route needs. Tell us your rough plan and dates and we'll put together a detailed quote, usually within 24 to 48 hours for a trip this size.",
  },
  {
    question: "What's the best starting point for planning a longer custom trip?",
    answer:
      "Start with one of our 10 to 14 day multi-country or Grand Rajasthan circuits and tell us what you'd add — more time in a region already on the route, a new country, or a trek. It's easier for us to extend a route you like than to design entirely from a blank page.",
  },
];

export default function FifteenPlusDayToursPage() {
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
          imageAlt="Camel caravan crossing the Thar Desert dunes near Jaisalmer"
          breadcrumbs={breadcrumbs}
          eyebrow="By Duration"
          headline="15+ Day Tours"
          subheadline="We don't run a fixed 15+ day package — trips this long are almost always personal, combining regions and countries in a way no template really fits. Tell us what you have in mind and we'll build it from scratch."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Built Around You"
                heading="Planning a 15+ Day India, Nepal & Bhutan Itinerary"
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
          eyebrow="Closest Available, Ready to Extend"
          heading="Start From One of Our Longer Circuits"
          cities={tenToFourteenDayTours}
          showActions
        />

        <FAQSection
          eyebrow="Common Questions"
          heading="15+ Day Custom Itineraries: FAQs"
          intro="Quick answers to what we're asked most about extended, multi-country trips. Can't find yours here? Message us directly."
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a custom 15+ day itinerary with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Have More Than Two Weeks?"
          headlineItalic="Let's Build It Together."
          subtext="Send us your rough dates and what you'd like to cover — we'll put together a custom 15+ day itinerary across India, Nepal and Bhutan and reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'm planning a trip of 15+ days and would like a custom itinerary from Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
