import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { elephantFestivalHighlights, elephantFestivalFaqs } from "@/content/festivals/elephant-festival";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Elephant Festival, Jaipur | Festival Guide";
const description =
  "A colourful Jaipur festival held around Holi, featuring elaborately painted and decorated elephants in procession, along with traditional games and folk performances.";
const pagePath = "/themes/festival-tours/elephant-festival";
const heroImage = "/images/destinations/elephant-festival.webp";

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
  { name: "Elephant Festival, Jaipur", path: pagePath },
];

export default function ElephantFestivalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(elephantFestivalFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Elephant Festival, Jaipur — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Elephant Festival, Jaipur"
          subheadline="A colourful Jaipur festival held around Holi, featuring elaborately painted and decorated elephants in procession, along with traditional games and folk performances."
          whatsappMessage="Hi! I'd like to plan a trip around Elephant Festival, Jaipur with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Elephant Festival, Jaipur" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Jaipur&apos;s Elephant Festival is held around Holi, the spring festival of colour, and centres on elaborately painted and decorated elephants paraded through the city. It&apos;s a distinctly Rajasthani spectacle — the same painted-elephant tradition once used for royal processions, now staged as a public celebration.</p>
                <p>Beyond the elephant procession itself, the festival typically includes traditional games, folk music and dance performances, and — given its timing alongside Holi — some of the most vivid colour celebrations anywhere in Rajasthan.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Jaipur, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Around Holi (March, exact date shifts yearly)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={elephantFestivalHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={elephantFestivalFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Elephant Festival, Jaipur."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Elephant Festival, Jaipur."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Elephant Festival, Jaipur with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
