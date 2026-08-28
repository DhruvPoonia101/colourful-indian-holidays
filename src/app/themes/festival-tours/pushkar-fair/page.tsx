import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { pushkarFairHighlights, pushkarFairFaqs } from "@/content/festivals/pushkar-fair";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pushkar Fair | Festival Guide";
const description =
  "One of the world&apos;s largest camel and livestock fairs, held at Pushkar&apos;s sacred lake — thousands of camels and traders alongside folk music, competitions, and a genuinely vast temporary desert encampment.";
const pagePath = "/themes/festival-tours/pushkar-fair";
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
  { name: "Experiences", path: "/themes" },
  { name: "Festival Tours", path: "/themes/festival-tours" },
  { name: "Pushkar Fair", path: pagePath },
];

export default function PushkarFairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pushkarFairFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Traditional Rajasthani performers at the Pushkar Camel Fair"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Pushkar Fair"
          subheadline="One of the world&apos;s largest camel and livestock fairs, held at Pushkar&apos;s sacred lake — thousands of camels and traders alongside folk music, competitions, and a genuinely vast temporary desert encampment."
          whatsappMessage="Hi! I'd like to plan a trip around Pushkar Fair with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Pushkar Fair" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>The Pushkar Fair is one of the largest camel and livestock fairs in the world, drawing tens of thousands of traders, herders and their animals to the desert outside Pushkar for several days each year. What began as a practical livestock trading event has grown into a major cultural festival, with camel races, traditional competitions, and folk music performances alongside the trading itself.</p>
                <p>The fair coincides with a significant Hindu pilgrimage period at Pushkar&apos;s sacred lake, meaning visitors experience two distinct events at once — the working, dusty spectacle of the livestock fair, and the devotional atmosphere of pilgrims bathing in the lake at the same time.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Pushkar, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">October or November (exact dates shift yearly on the lunar calendar)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={pushkarFairHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={pushkarFairFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Pushkar Fair."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Pushkar Fair."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Pushkar Fair with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
