import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { ReviewsStrip } from "@/components/shared/ReviewsStrip";
import { Reveal } from "@/components/ui/Reveal";
import { featuredPackages } from "@/content/packages-hub";
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tour-classic";
import { indiaHighlights } from "@/content/packages/india-highlights";
import { rajasthanHighlights } from "@/content/packages/rajasthan-highlights";
import { keralaToursClassic } from "@/content/packages/kerala-tours-classic";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";
import { guidesFor } from "@/content/related-guides";
import { reviewsBy } from "@/content/reviews";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { Price } from "@/components/shared/Price";
import { CurrencyControl } from "@/components/shared/CurrencyControl";
import { PRICE_DISCLAIMER, PRICE_PER_NIGHT_USD, getPackageStartingPrice } from "@/lib/pricing";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { packageToTripSummary, touristTripCollectionJsonLd } from "@/lib/seo/tourist-trip-schema";

/**
 * Targets "private tours of india". Job of this page: answer "what is a
 * private tour, what does it include, what does it cost, and which ones
 * can I book?" — the commercial entry point. It deliberately does NOT
 * repeat the private-vs-group-vs-DIY comparison (that lives on
 * /why-choose-us) or the "how to vet an agent" checklist (that lives on
 * /india-travel-agent); it links to both instead.
 *
 * Every fact here already appears elsewhere on the site: the inclusions
 * mirror the standard package inclusion list, the price comes from the
 * shared per-night rate in lib/pricing.ts (the same one every package page
 * uses), the 30% advance and 24-hour reply are stated on /india-travel-agent
 * and the Terms page, and the 4–8 week booking window is stated on the
 * Golden Triangle hub. No Review/AggregateRating JSON-LD — see
 * app/testimonials.
 */

const title = "Private Tours of India | Your Own Guide & Driver";
const description =
  "Private tours of India with your own guide, driver and hotels, built around your dates. From $500 per person. Jaipur-based, IATO-registered since 2007.";
const pagePath = "/private-tours-of-india";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
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
  { name: "Private Tours of India", path: pagePath },
];

const included = [
  "A private air-conditioned vehicle and driver for every transfer and all sightseeing",
  "An English-speaking guide at your stops",
  "Hotels chosen for your route, twin-sharing, with daily breakfast",
  "Monument entry fees as set out in the itinerary",
  "Hotel and transport taxes",
  "One point of contact from first enquiry to departure day",
];

const notIncluded = [
  "International and domestic flights (booked only on request)",
  "Visa fees",
  "Lunches and dinners unless the itinerary says otherwise",
  "Tips, travel insurance and personal expenses",
];

const popularHrefs = [
  "/tours/india-highlights",
  "/tours/golden-triangle-tour",
  "/tours/rajasthan-tours",
  "/tours/rajasthan-highlights",
  "/tours/north-india-tours",
  "/tours/kerala-tours",
];
const popularTours = popularHrefs
  .map((href) => featuredPackages.find((card) => card.href === href))
  .filter((card): card is NonNullable<typeof card> => Boolean(card));

/** The trips priced below — also the set declared in the page's TouristTrip schema. */
const pricedTours = [
  rajasthanHighlights,
  goldenTriangleTours,
  keralaToursClassic,
  indiaHighlights,
  grandRajasthanCircuit,
]
  .map((content) => ({
    name: content.name,
    path: `/tours/${content.slug}`,
    days: content.itinerary.length,
    from: getPackageStartingPrice(content.slug, content.itinerary.length),
    summary: packageToTripSummary(content),
  }))
  .sort((a, b) => a.days - b.days);

const suits = [
  {
    title: "First-time visitors",
    text: "A private driver and guide absorb the logistics — drive times, entry queues and closing days — so you are not working them out on arrival.",
  },
  {
    title: "Couples and honeymooners",
    text: "Your own schedule and a slower pace. See our honeymoon tours for routes built around romance rather than ticking off sights.",
    href: "/experiences/honeymoon-tours",
    linkLabel: "Honeymoon tours",
  },
  {
    title: "Families and small groups",
    text: "One vehicle sized to your party, with stops and meal breaks that suit children or older relatives rather than a coach timetable.",
  },
  {
    title: "Solo travellers",
    text: "A guide and driver on call means you are never navigating alone. Our solo travel guide covers what to expect.",
    href: "/travel-guide/solo-travel-india-guide",
    linkLabel: "Solo travel in India guide",
  },
];

const customise = [
  "The pace: fewer cities with longer stays, or a fuller route",
  "The hotel tier, from comfortable heritage hotels to luxury palaces",
  "Add-ons: a tiger safari, a Nepal or Bhutan extension, or a festival date",
  "A Palace on Wheels journey before or after your road trip",
];

const faqs: FaqItem[] = [
  {
    question: "What is a private tour of India?",
    answer:
      "A private tour of India means your own vehicle, driver and English-speaking guide, travelling on your dates with only your own party — not a shared coach on a fixed departure with strangers. The itinerary, pace and hotels are set around you, and you can change a city, a hotel tier or the number of days until it fits.",
  },
  {
    question: "How much does a private tour of India cost?",
    answer:
      "Our private tours start from about $100 per person per night, based on twin-sharing, a private vehicle with driver, an English-speaking guide and comfortable 3–4 star or heritage hotels. That puts a 6-day Golden Triangle from around $500 per person. These are indicative starting prices: the final quote depends on your travel dates, group size and hotel category, and is given in INR or USD.",
  },
  {
    question: "Is a private tour better than a group tour?",
    answer:
      "It depends on what you value. A private tour costs more per person than a large group departure but lets you set the pace, skip what does not interest you, start later or earlier, and change plans along the way. Group tours suit travellers who prefer a fixed price and fixed dates and are happy to share the schedule. Our private versus group versus do-it-yourself comparison sets out the trade-offs.",
  },
  {
    question: "How many people can travel on a private tour?",
    answer:
      "A private tour can be a couple, a family or a group of friends. We match the vehicle to your party, from sedans and SUVs for smaller parties to tempo travellers and coaches for larger groups. Tell us who is travelling and we will size the vehicle and the hotel rooms to fit.",
  },
  {
    question: "Are flights and visas included?",
    answer:
      "No. International and domestic flights are booked only on request, and visa fees are not included. Most visitors need an e-Visa applied for online before travelling, and our e-Visa guide explains the types, fees and stay limits. Lunches, dinners, tips and travel insurance are also extra unless an itinerary says otherwise.",
  },
  {
    question: "How far ahead should I book a private tour?",
    answer:
      "For most routes, 4 to 8 weeks ahead is enough for hotel availability, even in peak season from October to March. For wildlife safaris, festival dates or a Palace on Wheels journey, book earlier because permits, rooms and train berths sell out.",
  },
  {
    question: "How do I pay, and what is the deposit?",
    answer:
      "We take a 30% advance of the total tour cost to proceed with hotel bookings. The remaining payment arrangements and the refund schedule are published in our Terms & Conditions, and we flag any non-refundable deposits before you confirm.",
  },
];

export default function PrivateToursOfIndiaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristTripCollectionJsonLd({
              name: title,
              description,
              path: pagePath,
              trips: pricedTours.map((tour) => tour.summary),
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Private · Tailor-Made · Since 2007"
          headline="Private Tours of India"
          subheadline="Your own guide, driver and hotels, on your dates. Every itinerary is private and built around you — never a shared coach on a fixed departure."
          primaryLabel="Plan My Journey"
          primaryQuoteButtonPageName="Private Tours of India (Hero)"
          whatsappMessage="Hi! I'd like to plan a private tour of India."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="The Short Answer"
                heading="What a Private Tour of India Means"
                align="center"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  A private tour of India means your own car, driver and English-speaking guide,
                  travelling on your dates with only your own party. We plan and run every trip
                  from Jaipur, with prices starting from about ${PRICE_PER_NIGHT_USD} per person
                  per night.
                </p>
                <p>
                  Because nothing is fixed to a group departure, you choose the cities, the number
                  of days, the hotel tier and the pace. Below is what a private tour includes,
                  what it costs, and the routes international travellers book most.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="What You Get"
                heading="What Is Included in a Private Tour"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gold sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">Typically included</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {included.map((item) => (
                      <li key={item} className="flex gap-3">
                        <FiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">Usually extra</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {notIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-ink-soft">
                Exact inclusions are listed on each tour page. Need to see how private compares
                with a group tour? Read{" "}
                <Link href="/why-choose-us" className="font-medium text-maroon underline underline-offset-2">
                  why travellers choose a private tour
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Popular Routes"
          heading="Private Tours International Travellers Book Most"
          cities={popularTours}
          topDivider
          showActions
        />

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Pricing"
                heading="What a Private Tour of India Costs"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <p className="mt-6 text-center text-base leading-relaxed text-ink-soft">
                Our private tours start from about ${PRICE_PER_NIGHT_USD} per person per night,
                twin-sharing. The final quote depends on your dates, group size and hotel
                category.
              </p>
              <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow-sm">
                <table className="w-full border-collapse text-left text-sm sm:text-base">
                  <caption className="sr-only">Private tours with length and indicative starting price</caption>
                  <thead>
                    <tr className="border-b border-sand text-ink">
                      <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Private tour</th>
                      <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Days</th>
                      <th scope="col" className="px-3 py-3 font-semibold sm:px-5">From, per person</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-soft">
                    {pricedTours.map((tour) => (
                      <tr key={tour.path} className="border-b border-sand/60 last:border-0">
                        <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">
                          <Link href={tour.path} className="text-maroon underline underline-offset-2">
                            {tour.name}
                          </Link>
                        </th>
                        <td className="px-3 py-3 sm:px-5">{tour.days}</td>
                        <td className="px-3 py-3 sm:px-5">
                          <Price usd={tour.from} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-xs italic text-ink-soft/70">{PRICE_DISCLAIMER}</p>
              <CurrencyControl center className="mt-3" />
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Who It Suits"
                heading="Who Books a Private Tour"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {suits.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                    {item.href && (
                      <Link
                        href={item.href}
                        className="mt-3 inline-block text-sm font-medium text-maroon underline underline-offset-2"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Make It Yours"
                heading="What You Can Change on a Private Tour"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <ul className="mt-8 space-y-3 text-base leading-relaxed text-ink-soft">
                {customise.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                Not sure we are the right agency for you? See{" "}
                <Link href="/india-travel-agent" className="font-medium text-maroon underline underline-offset-2">
                  how to check an India travel agent is legitimate
                </Link>
                , or planning from abroad, start with our{" "}
                <Link href="/india-tours-from-usa" className="font-medium text-maroon underline underline-offset-2">
                  India tours from the USA
                </Link>{" "}
                and{" "}
                <Link href="/india-tours-from-uk" className="font-medium text-maroon underline underline-offset-2">
                  UK
                </Link>{" "}
                pages.
              </p>
            </Reveal>
          </div>
        </section>

        <ReviewsStrip
          reviews={reviewsBy(["David Bernat", "Pete Wellock", "Chandramouleeswaran Doraiswamy"])}
          topDivider
        />

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Private Tours of India: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about a private tour of India."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Own Guide, Driver and Pace."
          headlineItalic="Tell Us Your Dates."
          subtext="Tell us when you are travelling and what you would like to see, and we will reply within 24 hours with a first itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like a quote for a private tour of India."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
