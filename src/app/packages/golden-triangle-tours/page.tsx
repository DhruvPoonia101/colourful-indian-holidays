import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import type { CityCard } from "@/components/destinations/CityGrid";
import type { FaqItem } from "@/lib/seo/faq-schema";

const title = "Golden Triangle Tour Packages | Delhi, Agra & Jaipur";
const description =
  "Compare all our Golden Triangle tour packages — from a fast 4-day version to the classic 6-day route, or extend it with a tiger safari, Udaipur, Varanasi, or a deeper Rajasthan circuit. Every itinerary is built privately around your dates.";
const pagePath = "/packages/golden-triangle-tours";
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
  { name: "Tours & Packages", path: "/packages" },
  { name: "Golden Triangle Tours", path: pagePath },
];

const goldenTriangleVariants: CityCard[] = [
  {
    name: "Delhi – Agra – Jaipur",
    tagline: "The Classic Route · 6 Days",
    description:
      "The standard, comfortable pace for a first trip to India — a full day in each city, with the Taj Mahal at sunrise.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Delhi – Agra – Jaipur (4 Days)",
    tagline: "The Fast-Track Route · 4 Days",
    description:
      "For travellers short on time — all three cities and the Taj Mahal, on a tighter schedule.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur-4-days",
    image: "/images/destinations/agra-taj-mahal.webp",
    imageAlt: "Taj Mahal at sunrise, Agra",
  },
  {
    name: "Delhi – Agra – Jaipur – Ranthambore",
    tagline: "With a Tiger Safari · 8 Days",
    description:
      "The classic route plus two full days at Ranthambore National Park, with four safari drives.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur-ranthambore",
    image: "/images/destinations/ranthambore-tiger.webp",
    imageAlt: "A wild tiger at Ranthambore National Park",
  },
  {
    name: "Delhi – Agra – Jaipur – Udaipur",
    tagline: "Extended with Rajasthan's Lake City · 9 Days",
    description:
      "The classic route plus two extra days in Udaipur, reached via the marble Jain temples of Ranakpur.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur",
    image: "/images/destinations/udaipur-lake-palace.webp",
    imageAlt: "The Lake Palace floating on Lake Pichola, Udaipur",
  },
  {
    name: "Delhi – Agra – Jaipur – Varanasi",
    tagline: "Extended to the Ganges · 9 Days",
    description:
      "The classic route plus Varanasi's ghats and the Ganges — a spiritual, unfiltered contrast to the forts and palaces before it.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur-varanasi",
    image: "/images/destinations/varanasi-evening-ganges-aarti.webp",
    imageAlt: "Evening Ganga Aarti ceremony in Varanasi",
  },
  {
    name: "Delhi – Agra – Jaipur – Jodhpur – Udaipur",
    tagline: "Deep Into Rajasthan · 11 Days",
    description:
      "The fullest route we build — adding both the Blue City of Jodhpur and the lakes of Udaipur.",
    href: "/packages/golden-triangle-tours/delhi-agra-jaipur-jodhpur-udaipur",
    image: "/images/destinations/mehrangarh-fort-jodhpur.webp",
    imageAlt: "Mehrangarh Fort towering over Jodhpur's Blue City",
  },
] as const;

const faqs: FaqItem[] = [
  {
    question: "Which Golden Triangle package should we choose?",
    answer:
      "If you're short on time, the 4-day fast-track route covers all three cities on a tighter schedule; the classic 6-day route is the standard, comfortable pace. With more time, extending to Ranthambore adds a tiger safari, Udaipur adds a calmer lake-city close, Varanasi adds a spiritual contrast, and the Jodhpur–Udaipur route is our fullest single Rajasthan trip.",
  },
  {
    question: "Can these itineraries be customised further?",
    answer:
      "Yes — every package here is a starting point. We regularly adjust the pace, swap in extra stops like Ranthambore or Jodhpur, or shorten and lengthen the route to fit your dates.",
  },
  {
    question: "Is the Golden Triangle suitable for a first trip to India?",
    answer:
      "Yes — it's the most-travelled route in the country for exactly that reason, covering the Taj Mahal, Old and New Delhi, and Rajasthan's capital with a private guide and driver throughout.",
  },
] as const;

export default function GoldenTriangleHubPage() {
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
          eyebrow="Tours & Packages"
          headline="Golden Triangle Tour Packages"
          subheadline="India's most-travelled route, in six lengths — from a fast 4-day version to an 11-day deep dive into Rajasthan. Every itinerary is built privately around your dates."
          primaryHref="/packages/golden-triangle-tours/delhi-agra-jaipur"
          primaryLabel="View the Classic 6-Day Route"
          whatsappMessage="Hi! I'd like to know more about your Golden Triangle tour packages."
        />

        <CityGrid
          eyebrow="Choose Your Route"
          heading="Golden Triangle Packages"
          cities={goldenTriangleVariants}
          showActions
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before choosing a Golden Triangle route."
          faqs={faqs}
          whatsappMessage="Hi! I have a question about your Golden Triangle tour packages."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Which Route Will You Choose?"
          subtext="Tell us your dates and how many days you have — we'll suggest the right Golden Triangle route and reply with a tailored quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Golden Triangle trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
