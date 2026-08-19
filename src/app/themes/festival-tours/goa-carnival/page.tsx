import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { goaCarnivalHighlights, goaCarnivalFaqs } from "@/content/festivals/goa-carnival";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Goa Carnival | Festival Guide";
const description =
  "A Portuguese-heritage street carnival in Goa, with parades, live music, dance and colour — a distinctly different celebration from anywhere else in India, reflecting Goa&apos;s colonial history.";
const pagePath = "/themes/festival-tours/goa-carnival";
const heroImage = "/images/destinations/goa-carnival.webp";

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
  { name: "Goa Carnival", path: pagePath },
];

export default function GoaCarnivalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(goaCarnivalFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Goa Carnival — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Goa Carnival"
          subheadline="A Portuguese-heritage street carnival in Goa, with parades, live music, dance and colour — a distinctly different celebration from anywhere else in India, reflecting Goa&apos;s colonial history."
          whatsappMessage="Hi! I'd like to plan a trip around Goa Carnival with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Goa Carnival" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Goa Carnival is a direct legacy of nearly 450 years of Portuguese rule, held in the days before Lent in the Christian calendar. It&apos;s unlike any other festival in India — street parades with floats, live music, dance troupes and costumed performers move through Goa&apos;s towns, echoing the carnival traditions of Portugal and Brazil.</p>
                <p>The festival reflects Goa&apos;s distinct identity within India — a genuine blend of Indian and Portuguese-Catholic culture, expressed through music, food and celebration rather than the religious ritual that characterises most Indian festivals.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Goa</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">February or March, just before Lent (exact dates shift yearly)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={goaCarnivalHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={goaCarnivalFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Goa Carnival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Goa Carnival."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Goa Carnival with Colourful Indian Holidays."
          trustBadges={[
            "IATO Registered Agency",
            "No Hidden Fees",
            "International Payments Accepted",
            "Respond Within 2 Hours",
          ]}
        />
      </main>
    </>
  );
}
