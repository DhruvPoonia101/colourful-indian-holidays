import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { tenToFourteenDayTours } from "@/content/duration-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";

const title = "10–14 Day Tours | Multi-Country India, Nepal & Bhutan Circuits, 2026";
const description =
  "10 to 14 day tour packages combining India with Nepal and Bhutan, or covering the whole of Rajasthan across six cities — grand circuits for travellers with two weeks to give it.";
const pagePath = "/tours/10-14-day-tours";
const heroImage = "/images/destinations/paro-taktsang-tigers-nest.webp";

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
  { name: "10–14 Day Tours", path: pagePath },
];

const overview = [
  "Ten to fourteen days is where an India trip stops being about one region and starts being about a genuine multi-country journey. This is the length needed to properly combine India with a second Himalayan kingdom — [[India & Nepal Tours|/tours/india-nepal-tours]] and [[India & Bhutan Tours|/tours/india-bhutan-tours]] both run 11 days, pairing the Golden Triangle's Mughal monuments with either Kathmandu's temples or Bhutan's dzongs and the Tiger's Nest monastery. Neither trip feels rushed at this length, because there's enough time in each country to actually settle in rather than treating the second half as a brief add-on to the first.",
  "For travellers who'd rather stay within India but go deeper into one state, the [[Grand Rajasthan Circuit|/tours/grand-rajasthan-circuit]] runs 12 days and covers six cities — enough to move beyond the usual Jaipur–Jodhpur–Udaipur triangle into places most shorter Rajasthan tours skip entirely. It's the natural next step up from our [[8 day Rajasthan Tours|/tours/rajasthan-tours-classic]] itinerary for anyone who found a week too short to do the state justice, or who's building a longer trip specifically around Rajasthan's forts and palaces rather than India as a whole.",
  "At the top of this range sit our three-country routes. [[India, Nepal & Bhutan Tours|/tours/india-nepal-bhutan-tours]] and [[Nepal & Bhutan Tours|/tours/nepal-bhutan-tours]] both run 12 days, threading together the Taj Mahal, Kathmandu's temple squares and Bhutan's mountain monasteries — or, in the Nepal-and-Bhutan version, focusing purely on the two Himalayan kingdoms without an India leg at all. These are genuinely the most ambitious itineraries we run as fixed routes, and the ones most worth booking well ahead given the number of internal flights and border crossings involved.",
  "A trip in the 10 to 14 day range also tends to suit a different kind of traveller than a shorter tour — someone taking a proper holiday rather than a long weekend, often visiting from further afield (Australia, the US or Europe) where the flight itself already takes the better part of a day each way, making a shorter trip feel disproportionate to the travel involved. If that describes your trip and two weeks still feels short once you see everything on offer, our [[15+ day tours|/tours/15-plus-day-tours]] page covers what a fully custom, longer itinerary can look like.",
  "Because these routes cross international borders, visa and flight timing matter more here than on a single-country trip — Bhutan in particular requires advance arrangement through a licensed local operator, which we handle as part of the booking rather than leaving it to you to sort out separately. October through March remains the most comfortable window for the India legs of these trips, while Nepal and Bhutan both run best in either the pre-monsoon spring (March–May) or the post-monsoon autumn (September–November) — worth flagging early if your dates are flexible.",
  `Below are all ${tenToFourteenDayTours.length} of our current 10 to 14 day tour packages, sorted from shortest to longest. Click through to any of them for the full day-by-day plan and inclusions, or message us if you'd like a country or city added to any of these routes.`,
];

const faqs: FaqItem[] = [
  {
    question: "How many days do I need for India, Nepal and Bhutan together?",
    answer:
      "A genuine three-country trip covering India, Nepal and Bhutan properly needs at least 12 days, which is what our India, Nepal & Bhutan Tours itinerary runs. Anything shorter usually means cutting one country down to a single rushed day, which we'd rather avoid than sell as a full itinerary.",
  },
  {
    question: "Is the Grand Rajasthan Circuit worth 12 days versus a shorter Rajasthan tour?",
    answer:
      "It depends on whether you've already seen the state's main triangle of Jaipur, Jodhpur and Udaipur. The 12 day Grand Rajasthan Circuit adds cities most shorter tours skip, so it suits travellers going deeper into Rajasthan specifically rather than those wanting a first general introduction to the state.",
  },
  {
    question: "Do I need a separate visa for Bhutan?",
    answer:
      "Yes — Bhutan requires a visa arranged in advance through a licensed local operator, which we handle as part of your booking rather than leaving it for you to organise separately. This is one reason multi-country India–Bhutan trips are worth booking a few weeks ahead of a shorter India-only itinerary.",
  },
  {
    question: "What's the best time of year for a 10–14 day multi-country trip?",
    answer:
      "October through March suits the India portions of these routes best, while Nepal and Bhutan both run better in spring (March–May) or autumn (September–November) than in the summer monsoon. If your itinerary spans more than one country, it's worth checking the season against each leg rather than just the India dates.",
  },
  {
    question: "Can a 10–14 day tour be extended further if I have more time?",
    answer:
      "Yes — most of these routes can be extended with an extra city, region or even a fourth country if your schedule allows. If you're already looking at more than two weeks, our 15+ day tours page covers what a fully custom, longer itinerary typically looks like.",
  },
];

export default function TenToFourteenDayToursPage() {
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
          imageAlt="Paro Taktsang, the Tiger's Nest Monastery, Bhutan"
          breadcrumbs={breadcrumbs}
          eyebrow="By Duration"
          headline="10–14 Day Tours"
          subheadline="For travellers with two weeks to give it — grand circuits that combine India with Nepal and Bhutan, or take in the whole of Rajasthan across six cities, rather than a single region."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning Guide"
                heading="Planning a 10–14 Day Multi-Country Journey"
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
          eyebrow={`${tenToFourteenDayTours.length} Itineraries`}
          heading="Multi-Country Circuits & the Grand Rajasthan Route"
          cities={tenToFourteenDayTours}
          showActions
        />

        <FAQSection
          eyebrow="Common Questions"
          heading="10–14 Day Tours: FAQs"
          intro="Quick answers to what we're asked most about longer, multi-country trips. Can't find yours here? Message us directly."
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a 10-14 day tour with Colourful Indian Holidays."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Every Itinerary Here Is a Starting Point."
          headlineItalic="Tell Us Your Dates."
          subtext="None of these are fixed departures — we build each one privately around your dates, pace and interests, and can add extra countries or destinations if you want to go even longer."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a 10–14 day tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
