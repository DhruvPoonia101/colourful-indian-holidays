import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { kutchMahotsavHighlights, kutchMahotsavFaqs } from "@/content/festivals/kutch-mahotsav";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Kutch Mahotsav (Rann Utsav) | Festival Guide";
const description =
  "A months-long desert festival on the white salt flats of the Rann of Kutch, featuring a tented desert camp, traditional Kutchi music and crafts, and one of India&apos;s most surreal landscapes.";
const pagePath = "/themes/festival-tours/kutch-mahotsav";
const heroImage = "/images/destinations/kutch-mahotsav.webp";

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
  { name: "Kutch Mahotsav (Rann Utsav)", path: pagePath },
];

export default function KutchMahotsavPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(kutchMahotsavFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Kutch Mahotsav, Rann of Kutch — photo coming soon"
          breadcrumbs={breadcrumbs}
          eyebrow="Festival Guide"
          headline="Kutch Mahotsav (Rann Utsav)"
          subheadline="A months-long desert festival on the white salt flats of the Rann of Kutch, featuring a tented desert camp, traditional Kutchi music and crafts, and one of India&apos;s most surreal landscapes."
          whatsappMessage="Hi! I'd like to plan a trip around Kutch Mahotsav (Rann Utsav) with Colourful Indian Holidays."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Kutch Mahotsav (Rann Utsav)" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>The Rann of Kutch is one of India&apos;s most unusual landscapes — a vast white salt desert that floods seasonally and dries into a blinding, cracked-earth plain. Kutch Mahotsav, also known as Rann Utsav, turns the edge of this landscape into a months-long festival, with a purpose-built tented camp, cultural performances, and access to the salt flats themselves, especially striking under a full moon.</p>
                <p>Beyond the landscape itself, the festival showcases the Kutch region&apos;s distinct craft traditions — embroidery, leatherwork, pottery and metalwork — alongside traditional Kutchi folk music and dance, giving visitors a cultural experience specific to this part of Gujarat rather than Rajasthan or elsewhere.</p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Where</p>
                  <p className="mt-1.5 text-sm text-ink">The Rann of Kutch, Gujarat</p>
                </div>
                <div className="rounded-2xl border border-sand bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">When</p>
                  <p className="mt-1.5 text-sm text-ink">November to February (a multi-month festival season)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading="What to Expect"
          highlights={kutchMahotsavHighlights}
        />

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything international travellers ask before planning a trip around this festival."
          faqs={kutchMahotsavFaqs}
          whatsappMessage="Hi! I have a question about planning a trip around Kutch Mahotsav (Rann Utsav)."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Time Your Trip Around Kutch Mahotsav (Rann Utsav)."
          headlineItalic="When Will You Go?"
          subtext="Tell us your travel window and we'll build an itinerary around the festival, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip around Kutch Mahotsav (Rann Utsav) with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
