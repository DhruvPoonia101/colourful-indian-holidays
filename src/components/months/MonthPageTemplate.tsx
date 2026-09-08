import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PageHero } from "@/components/layout/PageHero";
import { QuickFacts } from "@/components/destinations/QuickFacts";
import { CityGrid } from "@/components/destinations/CityGrid";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { renderWithLinks } from "@/lib/render-with-links";
import type { MonthContent } from "@/content/months/types";

export function MonthPageTemplate({ content }: { content: MonthContent }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Travel by Month", path: "/best-time-to-visit-india" },
    { name: content.name, path: `/best-time-to-visit-india/${content.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(content.faqs)) }}
      />

      <main>
        <PageHero
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
          breadcrumbs={breadcrumbs}
          eyebrow="Travel by Month"
          headline={content.heroHeadline}
          subheadline={content.heroSubheadline}
          whatsappMessage={`Hi! I'd like help planning a trip to India in ${content.name}.`}
        />

        <QuickFacts
          facts={content.quickFacts}
          quoteButtonPageName={`Best Time to Visit — ${content.name}`}
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading={`What ${content.name} Is Like`} />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                {content.overview.map((paragraph, i) => (
                  <p key={i}>{renderWithLinks(paragraph)}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Region by Region" heading={`Where to Go in ${content.name}`} />
              <div className="mt-8 space-y-4">
                {content.regionBreakdown.map((row) => (
                  <div key={row.region} className="rounded-2xl border border-sand bg-white p-6">
                    <p className="font-display text-base font-semibold text-ink">{row.region}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {renderWithLinks(row.note)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <HighlightsStrip
          eyebrow="Why Visit"
          heading={`Why Come to India in ${content.name}`}
          highlights={content.whyVisit}
          topDivider
        />

        {content.festivals.length > 0 && (
          <section className="border-t border-sand/70 py-10 sm:py-14">
            <div className="mx-auto max-w-4xl px-6 sm:px-8">
              <Reveal>
                <SectionIntro
                  eyebrow="Festivals & Events"
                  heading={`What's Happening in ${content.name}`}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {content.festivals.map((f) => (
                    <div key={f.name} className="rounded-2xl border border-sand bg-white p-5">
                      <p className="font-display text-base font-semibold text-ink">{f.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {renderWithLinks(f.note)}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="What to Pack" heading={`Packing for ${content.name}`} />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                {renderWithLinks(content.packingIntro)}
              </p>
              <ul className="mt-6 grid list-disc gap-x-8 gap-y-2 pl-5 text-sm leading-relaxed text-ink-soft sm:grid-cols-2">
                {content.packingList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-0">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 sm:pt-14">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-soft">
                {renderWithLinks(content.destinationsIntro)}
              </p>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Where to Go"
          heading={`Best Destinations for ${content.name}`}
          cities={content.bestDestinations}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-0">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 sm:pt-14">
            <Reveal>
              <SectionIntro
                eyebrow="Suggested Itineraries"
                heading={`Tours to Book for ${content.name}`}
              />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                {renderWithLinks(content.itineraryIntro)}
              </p>
            </Reveal>
          </div>
        </section>

        <CityGrid
          eyebrow="Ready-Made Routes"
          heading="Popular Packages This Month"
          cities={content.suggestedItineraries}
          showActions
        />

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Compare Months"
                heading={`How ${content.name} Compares`}
              />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                {renderWithLinks(content.monthComparison)}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-8">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 sm:px-8">
            <Link
              href={`/best-time-to-visit-india/${content.prevMonth.slug}`}
              className="group flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-maroon"
            >
              <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              {content.prevMonth.name}
            </Link>
            <Link
              href="/best-time-to-visit-india"
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-maroon"
            >
              Full Travel Calendar
            </Link>
            <Link
              href={`/best-time-to-visit-india/${content.nextMonth.slug}`}
              className="group flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-maroon"
            >
              {content.nextMonth.name}
              <FiArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro={`Everything international travellers ask about visiting India in ${content.name}.`}
          faqs={content.faqs}
          whatsappMessage={`Hi! I have a question about visiting India in ${content.name}.`}
          topDivider
        />

        <JourneyCTA
          backgroundImage={content.heroImage}
          eyebrow="Start Your Journey"
          headline={`Your ${content.name} Trip Awaits.`}
          headlineItalic="Where Will You Go?"
          subtext="Tell us your travel dates and where you'd like to go — we'll build an itinerary around the right regions for that time of year, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'd like to plan a trip to India in ${content.name} with Colourful Indian Holidays.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
