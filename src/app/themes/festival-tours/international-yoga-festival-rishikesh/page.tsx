import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { yogaFestivalRishikeshHighlights, yogaFestivalRishikeshFaqs } from "@/content/festivals/international-yoga-festival-rishikesh";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "International Yoga Festival, Rishikesh | Festival Guide";
const description =
  "A week-long gathering of yoga teachers and practitioners from around the world in Rishikesh — the town widely regarded as the birthplace of modern yoga tourism.";
const pagePath = "/themes/festival-tours/international-yoga-festival-rishikesh";
const heroImage = "/images/destinations/rishikesh-2.webp";

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
  { name: "International Yoga Festival, Rishikesh", path: pagePath },
];

export default function YogaFestivalRishikeshPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(yogaFestivalRishikeshFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Rishikesh, the Yoga Capital of the World, on the Ganges"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="International Yoga Festival, Rishikesh"
          subheadline="A week-long gathering of yoga teachers and practitioners from around the world in Rishikesh — the town widely regarded as the birthplace of modern yoga tourism."
          whatsappMessage="Hi! I'd like to plan a trip around International Yoga Festival, Rishikesh with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="International Yoga Festival, Rishikesh" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Rishikesh has long been known as the Yoga Capital of the World, and its International Yoga Festival draws practitioners and teachers from dozens of countries for a week of classes, workshops and discussions spanning multiple yoga traditions, alongside meditation and Ayurveda sessions.</p>
                <p>Set on the Ganges as it emerges from the Himalayan foothills, the festival&apos;s setting is as much a draw as the programme itself — sessions often take place along the riverbank, with the sound of the river and the surrounding hills as a backdrop.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Rishikesh, Uttarakhand</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Early March (dates fixed annually, typically around World Yoga Day)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={yogaFestivalRishikeshHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={yogaFestivalRishikeshFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around International Yoga Festival, Rishikesh."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around International Yoga Festival, Rishikesh."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around International Yoga Festival, Rishikesh with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
