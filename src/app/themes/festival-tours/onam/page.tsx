import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { onamHighlights, onamFaqs } from "@/content/festivals/onam";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Onam | Festival Guide";
const description =
  "Kerala&apos;s biggest festival — a 10-day harvest celebration featuring elaborate flower carpets, the Vallam Kali snake boat races, and traditional Onam feasts.";
const pagePath = "/themes/festival-tours/onam";
const heroImage = "/images/destinations/onam.webp";

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
  { name: "Onam", path: pagePath },
];

export default function OnamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(onamFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Onam celebrations, Kerala — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Onam"
          subheadline="Kerala&apos;s biggest festival — a 10-day harvest celebration featuring elaborate flower carpets, the Vallam Kali snake boat races, and traditional Onam feasts."
          whatsappMessage="Hi! I'd like to plan a trip around Onam with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Onam" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Onam is Kerala&apos;s most significant festival, a 10-day harvest celebration marking the mythical return of King Mahabali. Homes are decorated with elaborate flower carpets (pookalam), renewed and expanded daily through the festival, and the celebration culminates in a grand traditional feast served on banana leaves.</p>
                <p>For visitors, the Vallam Kali snake boat races are the festival&apos;s most spectacular public event — long, narrow boats crewed by dozens of rowers race along Kerala&apos;s backwaters, accompanied by drumming and singing crowds along the banks.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Kerala</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">August or September (10-day festival, exact dates shift yearly)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={onamHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={onamFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Onam."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Onam."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Onam with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
