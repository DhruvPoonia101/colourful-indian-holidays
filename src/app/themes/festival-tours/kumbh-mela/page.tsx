import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { kumbhMelaHighlights, kumbhMelaFaqs } from "@/content/festivals/kumbh-mela";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";

const title = "Kumbh Mela | Festival Guide";
const description =
  "The largest peaceful religious gathering on Earth — tens of millions of pilgrims bathing at a sacred river confluence, rotating between four cities on a fixed astrological cycle.";
const pagePath = "/themes/festival-tours/kumbh-mela";
const heroImage = "/images/destinations/haridwar.webp";

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
  { name: "Kumbh Mela", path: pagePath },
];

export default function KumbhMelaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kumbhMelaFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Haridwar on the Ganges, one of the four Kumbh Mela host cities"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Kumbh Mela"
          subheadline="The largest peaceful religious gathering on Earth — tens of millions of pilgrims bathing at a sacred river confluence, rotating between four cities on a fixed astrological cycle."
          whatsappMessage="Hi! I'd like to plan a trip around Kumbh Mela with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Kumbh Mela" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Kumbh Mela is held at four locations in rotation — Haridwar, Prayagraj, Ujjain and Nashik — with the exact site and timing determined by planetary positions considered auspicious in Hindu astrology. The scale is genuinely hard to grasp until you&apos;re there: tens of millions of pilgrims gather over the course of the festival, making it the largest peaceful human gathering anywhere in the world.</p>
                <p>For international travellers, visiting Kumbh Mela is less about a single event and more about witnessing an entire temporary city built for the occasion, alongside processions of Naga Sadhus (ash-covered ascetic holy men) and the ritual bathing itself. It&apos;s an intense, crowded, unforgettable experience — and one that needs careful planning given the scale involved.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Haridwar, Prayagraj, Ujjain & Nashik (rotating)</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Rotates between four sites; the next major Haridwar gathering follows a 12-year cycle</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={kumbhMelaHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={kumbhMelaFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Kumbh Mela."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Kumbh Mela."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Kumbh Mela with Colourful Indian Holidays."
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
