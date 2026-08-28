import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { diwaliHighlights, diwaliFaqs } from "@/content/festivals/diwali";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Diwali | Festival Guide";
const description =
  "India&apos;s biggest festival — the Festival of Lights, celebrated nationwide with oil lamps, fireworks, and family gatherings, marking the triumph of light over darkness.";
const pagePath = "/themes/festival-tours/diwali";
const heroImage = "/images/destinations/diwali.webp";

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
  { name: "Diwali", path: pagePath },
];

export default function DiwaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(diwaliFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Diwali celebrations — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Diwali"
          subheadline="India&apos;s biggest festival — the Festival of Lights, celebrated nationwide with oil lamps, fireworks, and family gatherings, marking the triumph of light over darkness."
          whatsappMessage="Hi! I'd like to plan a trip around Diwali with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Diwali" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>Diwali is India&apos;s largest and most widely celebrated festival, marking the symbolic victory of light over darkness and good over evil. Homes, streets and temples are lit with oil lamps (diyas) and string lights, and the festival is marked with fireworks, sweets, and family gatherings across the entire country.</p>
                <p>While Diwali is celebrated nationwide, some cities offer especially memorable settings — the ghats of Varanasi lit with thousands of lamps, the Golden Temple in Amritsar illuminated and reflected in its pool, and Jaipur&apos;s markets strung with lights are all particularly striking ways to experience it.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Nationwide, most vividly in Jaipur, Varanasi, Amritsar and Delhi</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">October or November (exact date shifts yearly on the lunar calendar)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={diwaliHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={diwaliFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Diwali."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Diwali."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Diwali with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
