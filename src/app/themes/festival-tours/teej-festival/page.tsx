import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { teejFestivalHighlights, teejFestivalFaqs } from "@/content/festivals/teej-festival";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Teej Festival | Festival Guide";
const description =
  "A monsoon festival celebrating the arrival of the rains, marked in Jaipur with a major procession of women in traditional dress, swings decorated with flowers, and folk songs.";
const pagePath = "/themes/festival-tours/teej-festival";
const heroImage = "/images/destinations/teej-festival.webp";

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
  { name: "Teej Festival", path: pagePath },
];

export default function TeejFestivalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(teejFestivalFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Teej Festival, Rajasthan — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Teej Festival"
          subheadline="A monsoon festival celebrating the arrival of the rains, marked in Jaipur with a major procession of women in traditional dress, swings decorated with flowers, and folk songs."
          whatsappMessage="Hi! I'd like to plan a trip around Teej Festival with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Teej Festival" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Teej marks the arrival of the monsoon and is celebrated across North India, but Jaipur&apos;s Teej procession is among the most elaborate — a formal parade through the old city featuring an idol of the goddess Parvati carried in a decorated palanquin, accompanied by elephants, camels, and traditional musicians.</p>
                <p>The festival is especially associated with women, who dress in bright traditional clothing (often green, the colour of the monsoon) and sing traditional folk songs, with flower-decorated swings a common sight in courtyards and public spaces during the celebration.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Jaipur, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Monsoon season (July–August, exact date shifts yearly)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={teejFestivalHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={teejFestivalFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Teej Festival."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Teej Festival."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Teej Festival with Colourful Indian Holidays."
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
