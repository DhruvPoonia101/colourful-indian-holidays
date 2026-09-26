import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CityGrid } from "@/components/destinations/CityGrid";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { festivalCards } from "@/content/festivals-hub";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Brought up to the same standard as the other hub pages after a direct
 * request to check it — it was thinner than every other hub built this
 * session (hero + grid + CTA only, no overview, no FAQ, no cross-link to
 * the Top Cultural Festivals travel-guide article that itself links here).
 *
 * Also found and fixed a real content gap while checking: The Urs
 * Festival, Ajmer was completely missing from festivalCards, despite
 * being a real, live page that both the Travel Guide pillar and the new
 * Pilgrimage Tours hub already link to. Added it — festivalCards now
 * lists all 11 of the site's real festival pages, not 10.
 */

const title = "Festival Tours | Time Your India Trip Around a Real Celebration";
const description =
  "Plan your India trip around a real festival — the Pushkar Camel Fair, Kumbh Mela, Diwali, Goa Carnival, Onam and more, with guides on what to expect and when to go.";
const pagePath = "/experiences/festival-tours";
const heroImage = "/images/packages/jaipur-bikaner-jaisalmer-jodhpur-udaipur-pushkar.webp";

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
  { name: "Experiences", path: "/experiences" },
  { name: "Festival Tours", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Which Indian festival is worth planning a whole trip around?",
    answer:
      "The Pushkar Camel Fair and Kumbh Mela are the two most commonly requested — both are genuinely unlike anything else on a standard itinerary, and both are worth building your travel dates around rather than hoping to catch by chance. Diwali is a close third, especially seen in Varanasi or Amritsar.",
  },
  {
    question: "How far in advance should I book a festival-timed trip?",
    answer:
      "Earlier than a standard sightseeing trip — accommodation near major festivals (Pushkar Fair, Kumbh Mela, Diwali in popular cities) fills up months ahead, and prices climb as dates approach. 3 to 6 months out is a safe window for the larger, more popular festivals.",
  },
  {
    question: "Do festival dates change every year?",
    answer:
      "Most do, since many follow the Hindu lunar calendar (Diwali, Teej, Onam) or the Islamic calendar (the Ajmer Urs) rather than a fixed Gregorian date, and Kumbh Mela follows its own 12-year rotation between four host cities. Check the specific festival's page for the current year's dates before booking flights.",
  },
  {
    question: "Can I combine a festival with a regular sightseeing itinerary?",
    answer:
      "Yes — this is how most of our festival-timed trips work in practice. Rather than building a trip entirely around one event, we typically time a standard Rajasthan, Golden Triangle or regional circuit so it passes through the right city on the right date, adding the festival as a highlight rather than the whole trip.",
  },
  {
    question: "Are these festivals crowded, and is that a problem for foreign visitors?",
    answer:
      "Yes, genuinely crowded — that's part of what makes them worth seeing. Foreign visitors are welcomed at every festival on this page, though we'd recommend a guide for the larger events (Kumbh Mela especially) simply to navigate the scale of the crowds comfortably rather than for any safety concern specifically.",
  },
];

export default function FestivalToursPage() {
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
          imageAlt="Traditional Rajasthani performers at the Pushkar Camel Fair"
          breadcrumbs={breadcrumbs}
          eyebrow="Experiences"
          headline="Time Your Trip Around a Real Celebration"
          subheadline="India's festival calendar runs year-round — from the Pushkar Camel Fair to Diwali, Kumbh Mela and Kerala's Onam. Here's what to expect from each, and when to go."
        />

        <CityGrid
          eyebrow="Festival Tours"
          heading="Choose a Festival"
          cities={festivalCards}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Planning a Trip Around an Indian Festival" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  India&apos;s festival calendar runs on several different systems at once — the
                  Hindu lunar calendar, the Islamic calendar, the Gregorian calendar for a few
                  fixed-date events, and Kumbh Mela&apos;s own 12-year rotation — so no single
                  yearly pattern covers all eleven festivals above. Broadly, they fall into a few
                  groups: religious pilgrimages tied to a specific date or cycle (Kumbh Mela, the
                  Ajmer Urs), regional harvest and cultural festivals (Onam, Teej), desert culture
                  and folk festivals unique to Rajasthan (the Pushkar Fair, the Camel Festival,
                  Kutch Mahotsav), and colour or light festivals celebrated nationwide but seen
                  most vividly in particular cities (Diwali, the Elephant Festival timed around
                  Holi).
                </p>
                <p>
                  Timing a trip around one of these is different from a standard sightseeing
                  itinerary in one important way: the festival date usually decides your travel
                  window, rather than the other way around. That makes earlier planning genuinely
                  worthwhile — accommodation near major festivals fills up months ahead, and
                  several of these events (the Ajmer Urs, several Rajasthan festivals) also
                  overlap naturally with our{" "}
                  <Link href="/experiences/pilgrimage-tours" className="text-maroon underline">
                    Pilgrimage Tours
                  </Link>{" "}
                  page, since religious pilgrimage and festival timing are closely linked for
                  several of these occasions.
                </p>
                <p>
                  Most festival trips work best combined with a standard regional itinerary
                  rather than built entirely around the event itself — timing a Rajasthan circuit
                  to pass through Pushkar during the Camel Fair, for instance, rather than
                  building a trip solely around four days in one town. For a deeper look at how
                  each of these festivals fits into the wider year and where they overlap with
                  other travel plans, see our{" "}
                  <Link href="/travel-guide/top-cultural-festivals-in-india" className="text-maroon underline">
                    full guide to India&apos;s cultural festivals
                  </Link>
                  . Tell us which festival interests you and roughly when, and we&apos;ll build
                  the rest of the itinerary around it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FAQSection
          eyebrow="FAQ"
          heading="Festival Tours: Frequently Asked Questions"
          faqs={faqs}
          whatsappMessage="Hi! I have a question about planning a trip around an Indian festival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Festival Trip Awaits."
          headlineItalic="Which Will You Choose?"
          subtext="Tell us which festival interests you and your travel window — we'll build an itinerary around it, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around an Indian festival with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
