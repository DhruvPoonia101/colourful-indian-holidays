import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { ursFestivalAjmerHighlights, ursFestivalAjmerFaqs } from "@/content/festivals/the-urs-festival-ajmer";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Urs Festival, Ajmer | Festival Guide";
const description =
  "A six-day Sufi festival at the Ajmer Sharif Dargah, marking the death anniversary of a 12th-century Sufi saint, and one of India&apos;s most significant Islamic pilgrimage gatherings.";
const pagePath = "/themes/festival-tours/the-urs-festival-ajmer";
const heroImage = "/images/destinations/urs-festival-ajmer.webp";

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
  { name: "Urs Festival, Ajmer", path: pagePath },
];

export default function UrsFestivalAjmerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ursFestivalAjmerFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Urs Festival, Ajmer — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Urs Festival, Ajmer"
          subheadline="A six-day Sufi festival at the Ajmer Sharif Dargah, marking the death anniversary of a 12th-century Sufi saint, and one of India&apos;s most significant Islamic pilgrimage gatherings."
          whatsappMessage="Hi! I'd like to plan a trip around Urs Festival, Ajmer with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Urs Festival, Ajmer" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>The Urs Festival marks the death anniversary of Khwaja Moinuddin Chishti, the 12th-century Sufi saint whose shrine at Ajmer Sharif Dargah is one of the most visited Islamic pilgrimage sites in South Asia. In Sufi tradition, a saint&apos;s death is understood as union with the divine, which is why the anniversary is marked with celebration rather than mourning.</p>
                <p>Over six days, the shrine and surrounding streets fill with pilgrims from across India and beyond, alongside qawwali (devotional Sufi music) performances that run through the night. Ajmer sits close to Pushkar, and the two are often combined on a Rajasthan itinerary regardless of festival timing.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">Ajmer, Rajasthan</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">Six days in the Islamic month of Rajab (dates shift yearly on the lunar calendar)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={ursFestivalAjmerHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={ursFestivalAjmerFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Urs Festival, Ajmer."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Urs Festival, Ajmer."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Urs Festival, Ajmer with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
