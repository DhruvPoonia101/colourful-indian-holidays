import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { homeFaqs } from "@/content/home";

/**
 * Reuses all 6 of homepage's `homeFaqs` (booking/visa/pricing basics) rather
 * than rewriting them, so the homepage and this page never drift out of
 * sync — then adds genuinely new questions the homepage snippet doesn't
 * cover, grouped into categories. Every payment/cancellation figure below
 * is pulled from the real, live cancellation-policy-and-terms-and-
 * conditions page rather than invented for this page specifically.
 */

const title = "Frequently Asked Questions";
const description =
  "Answers to what international travellers ask most before booking with us — private tours, visas, payment schedules, cancellation policy, guides and vehicles, and trip logistics.";
const pagePath = "/faq";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: pagePath },
];

const bookingFaqs: FaqItem[] = [
  homeFaqs[0], // Do you offer private tours, or do we join a group?
  homeFaqs[1], // How far in advance should I book?
  homeFaqs[5], // How do I actually start planning a trip with you?
  homeFaqs[3], // Can you combine India with Nepal and Bhutan in one trip?
  {
    question: "Can you build a completely custom itinerary, not one of your existing packages?",
    answer:
      "Yes — every itinerary on this site is a starting point we adapt, not a fixed script. Tell us your dates, interests and pace, and we'll draft a route around them, whether that means combining two of our existing tours or building something from scratch.",
  },
  {
    question: "Can you plan a trip around a specific festival, like the Pushkar Camel Fair or Kumbh Mela?",
    answer:
      "Yes, and this is one of the trips worth booking furthest ahead, since accommodation near major festivals fills up early. See our Festival Tours page for the events we plan around most often, or tell us the date and we'll confirm what's realistic.",
  },
];

const visaFaqs: FaqItem[] = [
  homeFaqs[2], // Do I need a visa to visit India?
  {
    question: "What documents do I need for the Indian e-Visa?",
    answer:
      "Requirements are set by the Indian government and can change, so we always recommend checking the official e-Visa portal for your specific nationality before applying. In general, applicants need a passport with at least six months' validity, a digital passport-style photo, and a scanned copy of their passport's bio page.",
  },
  {
    question: "Is visa arrangement included in your tour price?",
    answer:
      "No — visa applications are your own responsibility and applied for directly through the official government portal, not through us. We're happy to point first-time visitors toward the correct process and confirm what your itinerary requires, but we don't process visas on a traveller's behalf.",
  },
];

const paymentFaqs: FaqItem[] = [
  homeFaqs[4], // What's included in your tour pricing?
  {
    question: "How does the payment schedule work?",
    answer:
      "A 30% advance secures your booking and lets us begin hotel arrangements. Once hotels are confirmed, a further 20% is due, with the remaining 50% balance payable 45 days before your trip starts. Full details are on our Cancellation Policy & Terms page.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Cancellation charges are tiered by how close to departure you cancel — 20% of the tour cost at 60+ days out, 30% at 30–60 days, and 50% at 15–30 days, plus the cost of any non-refundable bookings already made. See our full Cancellation Policy & Terms page for exact terms, including peak-season rules.",
  },
  {
    question: "Is there an extra charge for paying by card?",
    answer:
      "Yes, a 2% bank/gateway charge applies to card payments, which is added to your final invoice. This is disclosed upfront in your quote, not added as a surprise later.",
  },
];

const onTourFaqs: FaqItem[] = [
  {
    question: "Will my guide and driver speak English?",
    answer:
      "Yes — every guide and driver we assign speaks fluent English, and our office team also covers French, German and Spanish if that's more comfortable for planning conversations before you travel.",
  },
  {
    question: "Are your drivers and guides vetted, or subcontracted last-minute?",
    answer:
      "We work directly with the guides and drivers we assign — people we've used before and know personally, not a subcontractor booked the day before your trip starts.",
  },
  {
    question: "What type of vehicle will we travel in?",
    answer:
      "It depends on your group size — we run everything from sedans and SUVs for couples and small families to tempo travellers and coaches for larger groups. See our Car Rental & Fleet page for the full range.",
  },
  {
    question: "What happens if something goes wrong mid-trip, like a flight delay?",
    answer:
      "You'll have a direct WhatsApp line to our office throughout your trip, not just before you book, so a delayed flight or a hotel issue can be handled directly and quickly rather than waiting on a call centre.",
  },
];

const logisticsFaqs: FaqItem[] = [
  {
    question: "When is the best time of year to visit India?",
    answer:
      "October through March is the most comfortable window for most of North India and Rajasthan, though the right season genuinely depends on which region you're visiting — Kerala, Kashmir and the Himalayas each run on their own calendar. See our Best Time to Visit guide for a full month-by-month breakdown.",
  },
  {
    question: "Do you only operate in India, or also Nepal and Bhutan?",
    answer:
      "Both — alongside our India itineraries, we regularly build trips into Nepal and Bhutan, either as standalone journeys or combined with an India leg for travellers who want to see more of the wider region in one trip.",
  },
  {
    question: "Can you accommodate dietary restrictions or mobility needs?",
    answer:
      "Yes — let us know when you enquire and we'll factor it into hotel choices, restaurant recommendations, and the itinerary's pace, rather than assuming a one-size-fits-all trip.",
  },
];

const allFaqs = [
  ...bookingFaqs,
  ...visaFaqs,
  ...paymentFaqs,
  ...onTourFaqs,
  ...logisticsFaqs,
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqs)) }}
      />

      <main>
        <PageHero
          image="/images/destinations/agra-taj-mahal.webp"
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="FAQ"
          headline="Frequently Asked Questions"
          subheadline="Everything we're asked most before someone books — booking and planning, visas, payments, life on the road, and general trip logistics."
        />

        <FAQSection
          eyebrow="Booking & Planning"
          heading="Getting Started"
          faqs={bookingFaqs}
          whatsappMessage={`Hi! I have a question about booking a trip with ${SITE_NAME}.`}
        />

        <FAQSection
          eyebrow="Visas & Entry"
          heading="Visas & Documents"
          faqs={visaFaqs}
          whatsappMessage="Hi! I have a question about visas for my India trip."
          topDivider
        />

        <FAQSection
          eyebrow="Payments"
          heading="Pricing, Payments & Cancellation"
          faqs={paymentFaqs}
          whatsappMessage="Hi! I have a question about payments or your cancellation policy."
          topDivider
        />

        <FAQSection
          eyebrow="On Tour"
          heading="Guides, Drivers & Vehicles"
          faqs={onTourFaqs}
          whatsappMessage="Hi! I have a question about guides, drivers or vehicles on tour."
          topDivider
        />

        <FAQSection
          eyebrow="Trip Logistics"
          heading="Timing & General Logistics"
          faqs={logisticsFaqs}
          whatsappMessage="Hi! I have a general question about planning my India trip."
          topDivider
        />

        <JourneyCTA
          backgroundImage="/images/destinations/agra-taj-mahal.webp"
          eyebrow="Start Your Journey"
          headline="Still Have a Question?"
          headlineItalic="Just Ask."
          subtext="Message us directly and we'll reply within 24 hours — or tell us your dates and we'll start drafting an itinerary."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I have a question before booking my trip with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
