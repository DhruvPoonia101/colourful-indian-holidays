import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { PlannedByLine } from "@/components/shared/PlannedByLine";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { ReviewsStrip } from "@/components/shared/ReviewsStrip";
import { Reveal } from "@/components/ui/Reveal";
import { guidesFor } from "@/content/related-guides";
import { reviewsBy } from "@/content/reviews";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";

/**
 * Targets "travel agent for india" / "india travel agent". Deliberately
 * different in job from /why-choose-us (private vs group vs DIY comparison)
 * and /about-us (company story): this page answers "how do I choose and
 * verify an India travel agent, and what do I get if I book with you?".
 * Every claim here already appears elsewhere on the site (IATO / Ministry
 * of Tourism recognition, 30% advance, Jaipur address, languages, review
 * counts). No Review/AggregateRating JSON-LD — see app/testimonials.
 */

const title = "Travel Agent for India | IATO-Registered Since 2007";
const description =
  "Jaipur-based, IATO-registered travel agent for India since 2007. Private tours for international travellers, rated 4.9★ on Google and Tripadvisor.";
const pagePath = "/india-travel-agent";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Travel Agent for India", path: pagePath },
];

const iatoBadge = DEFAULT_TRUST_BADGES.find((b) => b.label.startsWith("IATO"));
const ministryBadge = DEFAULT_TRUST_BADGES.find((b) => b.label.startsWith("Recognised by Ministry"));

const options = [
  {
    title: "Online booking sites",
    points: [
      "Fast to compare, but the hotel, driver and guide are usually separate bookings with no one owning the whole trip.",
      "Support is often a ticket queue in a different time zone.",
    ],
  },
  {
    title: "Overseas travel agents",
    points: [
      "Familiar and convenient, but they typically subcontract the on-the-ground work to a local company you never meet.",
      "Useful if you want one agent for flights and everything else back home.",
    ],
  },
  {
    title: "A local India agent (us)",
    points: [
      "We are based in Jaipur and plan, book and run the trip ourselves, so the person who built your itinerary is reachable while you travel.",
      "Best for private, tailor-made trips built around your own dates.",
    ],
    highlight: true,
  },
] as const;

const checks: { label: string; detail: React.ReactNode }[] = [
  {
    label: "Industry registration you can verify",
    detail: (
      <>
        We are an{" "}
        {iatoBadge?.href ? (
          <a href={iatoBadge.href} target="_blank" rel="noopener noreferrer" className="font-medium text-maroon underline underline-offset-2">
            IATO-registered agency
          </a>
        ) : (
          "IATO-registered agency"
        )}{" "}
        (Indian Association of Tour Operators), recognised by Rajasthan Tourism and listed in the{" "}
        {ministryBadge?.href ? (
          <a href={ministryBadge.href} target="_blank" rel="noopener noreferrer" className="font-medium text-maroon underline underline-offset-2">
            Ministry of Tourism directory
          </a>
        ) : (
          "Ministry of Tourism directory"
        )}
        . Ask any agent for the same links.
      </>
    ),
  },
  {
    label: "A real office and a real phone number",
    detail: (
      <>
        {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality},{" "}
        {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}. WhatsApp or call {BUSINESS.telephone}.
      </>
    ),
  },
  {
    label: "Independent reviews, not just testimonials on their own site",
    detail: (
      <>
        4.9 out of 5 on Google ({BUSINESS.googleRating.reviewCount}+ reviews) and 4.9 out of 5 on Tripadvisor (
        {BUSINESS.aggregateRating.reviewCount}+ reviews). Read them on the platforms themselves.
      </>
    ),
  },
  {
    label: "Payment and cancellation terms in writing",
    detail: (
      <>
        A 30% advance secures hotel bookings, and the full refund schedule is published in our{" "}
        <Link
          href="/cancellation-policy-and-terms-and-conditions"
          className="font-medium text-maroon underline underline-offset-2"
        >
          Terms &amp; Conditions
        </Link>
        .
      </>
    ),
  },
  {
    label: "Years in business",
    detail: <>Planning private journeys for international travellers since {BUSINESS.foundingYear}.</>,
  },
];

const steps = [
  {
    title: "Send us your dates and interests",
    description:
      "Message us on WhatsApp, email or the contact form with rough dates, who is travelling and what you want to see. We reply within 24 hours.",
  },
  {
    title: "Receive a day-by-day itinerary and quote",
    description:
      "A real itinerary built around your dates, with hotels and routes we know first-hand. Change a city, a hotel tier or the pace until it fits.",
  },
  {
    title: "Confirm with a 30% advance",
    description:
      "The advance secures your hotel bookings. We confirm each piece and keep you updated until you fly.",
  },
  {
    title: "Travel with us on call",
    description:
      "Your English-speaking guide and driver know your itinerary in advance, and our office is a WhatsApp message away if plans change.",
  },
];

const countryLinks = [
  { label: "India tours from the USA", href: "/india-tours-from-usa" },
  { label: "India tours from the UK", href: "/india-tours-from-uk" },
  { label: "India tours from Australia", href: "/india-tours-from-australia" },
  { label: "India tours from Canada", href: "/india-tours-from-canada" },
  { label: "India tours from Germany", href: "/india-tours-from-germany" },
  { label: "India tours from the UAE", href: "/india-tours-from-uae" },
];

const faqs: FaqItem[] = [
  {
    question: "What does a travel agent for India do?",
    answer:
      "A travel agent for India plans and books the practical parts of your trip — hotels, a private driver, guides, internal transport and entry arrangements — and is your point of contact if anything changes. A local agent like us also advises on things that are hard to judge from abroad, such as realistic drive times, which season suits which region, and which hotels are worth the price.",
  },
  {
    question: "Do I need a travel agent to visit India?",
    answer:
      "No, you can book everything yourself. An agent is most useful on a first trip or a multi-city route, where drive times between cities are long, popular monuments have fixed closing days (the Taj Mahal is closed on Fridays, for example), and good hotels and drivers sell out in peak season from October to March. If you only need one hotel in one city, booking directly is usually fine.",
  },
  {
    question: "How do I know an India travel agent is legitimate?",
    answer:
      "Check four things: a verifiable industry registration (IATO membership and the Ministry of Tourism directory), a physical office address and working phone number, reviews on independent platforms such as Google and Tripadvisor, and payment and cancellation terms published in writing. We are IATO-registered, recognised by the Ministry of Tourism, based in Jaipur, and rated 4.9 out of 5 on Google and Tripadvisor.",
  },
  {
    question: "How much deposit do you take, and when do I pay?",
    answer:
      "We take a 30% advance of the total tour cost to proceed with hotel bookings. Our Terms & Conditions page sets out the remaining payment arrangements and the refund schedule, and we flag any non-refundable deposits (for example at some luxury hotels, wildlife safaris and flights) before you confirm.",
  },
  {
    question: "Can you book Palace on Wheels and other luxury trains?",
    answer:
      "Yes. Palace on Wheels is our sister company's luxury train, and we are an authorised booking agent for it. We can book it on its own or combine it with a private hotel-and-driver itinerary before or after the train journey.",
  },
  {
    question: "Where are you based, and which languages do you speak?",
    answer:
      "Our office is in Vaishali Nagar, Jaipur, Rajasthan. We work in English, French, German and Spanish, and every trip includes an English-speaking private guide and driver.",
  },
  {
    question: "How quickly will I get a reply?",
    answer:
      "We reply to every enquiry within 24 hours, usually with a few questions about your dates and interests so the first itinerary we send is close to what you want.",
  },
];

export default function IndiaTravelAgentPage() {
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
          imageAlt="The Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Jaipur-Based · IATO-Registered"
          headline="Your Travel Agent for India"
          subheadline="A local, registered agency that plans, books and runs your trip — private tours across India, Nepal and Bhutan for international travellers since 2007."
          primaryLabel="Plan My Journey"
          primaryQuoteButtonPageName="Travel Agent for India (Hero)"
          whatsappMessage="Hi! I'm looking for a travel agent for my India trip."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="What We Do"
                heading="A Local Agent Who Owns the Whole Trip"
                align="center"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  A travel agent for India plans and books your hotels, private driver, guides and
                  internal transport, and stays on call while you travel. We do that from Jaipur
                  for travellers from the USA, UK, Australia, Canada and Europe, building each
                  itinerary around your own dates rather than a fixed group departure.
                </p>
                <p>
                  Choosing who to book with is the hardest part, so below is how the main options
                  differ and how to verify any India agent, including us, before you pay a deposit.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Your Options"
                heading="Booking Site, Overseas Agent or Local India Agent?"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {options.map((option) => (
                  <div
                    key={option.title}
                    className={`rounded-2xl p-6 sm:p-8 ${
                      "highlight" in option && option.highlight
                        ? "bg-white shadow-md ring-1 ring-gold"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    <h3 className="font-display text-xl font-semibold text-ink">{option.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                      {option.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-ink-soft">
                Comparing private, group and do-it-yourself travel instead? See{" "}
                <Link href="/why-choose-us" className="font-medium text-maroon underline underline-offset-2">
                  why travellers choose a private tour
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Before You Pay a Deposit"
                heading="How to Check an India Travel Agent Is Legitimate"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <ul className="mt-10 space-y-5">
                {checks.map((check) => (
                  <li key={check.label} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                    <FiCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{check.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{check.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="How It Works"
                heading="Booking With Us, Step by Step"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                {steps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                    <p className="font-display text-sm font-semibold text-gold-dark">Step {i + 1}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <ReviewsStrip
          reviews={reviewsBy(["David Bernat", "Sanjiv Shah", "Pete Wellock"])}
          topDivider
        />

        <section className="border-t border-sand/70 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Planning From Abroad"
                heading="India Trip Planning by Country"
                align="center"
                headingSizeClassName="text-2xl sm:text-3xl"
              />
              <ul className="mt-8 flex flex-wrap justify-center gap-3">
                {countryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block rounded-full border border-sand bg-white px-5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-gold hover:text-maroon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <RelatedGuides guides={guidesFor(pagePath)} />

        <FAQSection
          eyebrow="FAQ"
          heading="Questions About Using a Travel Agent for India"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about booking my India trip with you."
          topDivider
        />

        <PlannedByLine />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Talk to a Local Agent."
          headlineItalic="Get a Plan Within 24 Hours."
          subtext="Tell us your dates and what you'd like to see, and we'll reply within 24 hours with a first itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning my India trip."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
