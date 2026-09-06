import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { FAQSection } from "@/components/destinations/FAQSection";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { monthTable, regionGuide, regionCallouts, bestTimeFaqs } from "@/content/best-time-to-visit-india";

const title = "Best Time to Visit India | A Month-by-Month & Region-by-Region Guide";
const description =
  "When to visit Rajasthan, Delhi, wildlife parks, the Himalayas and India's coastlines — a real month-by-month, region-by-region guide to planning your trip around the right season.";
const pagePath = "/best-time-to-visit-india";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";

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
  { name: "Travel by Month", path: pagePath },
];

export default function BestTimeHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(bestTimeFaqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel by Month"
          headline="When to Go, Region by Region"
          subheadline="India is too large for one single travel season — here's how the best time to visit actually varies by destination."
        />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Overview" heading="Why There's No Single Answer" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  India runs on several climates at once, not one. The country stretches from
                  Ladakh&apos;s high-altitude desert in the north to Kerala&apos;s tropical
                  coastline in the south — roughly the same north-to-south span as the distance
                  from London to Casablanca — so &ldquo;the best time to visit India&rdquo; genuinely
                  depends on which part of it you mean. What follows is the pattern that actually
                  governs most itineraries: a long, comfortable dry season across the north
                  broken by an intense summer and an equally intense monsoon, with several
                  regions running on their own separate calendar entirely.
                </p>
                <p>
                  For Rajasthan, Delhi, Agra and the classic Golden Triangle — the core of most
                  first-time India itineraries — the season runs roughly October through March:
                  dry air, blue skies, and daytime temperatures that stay comfortable for
                  full-day sightseeing. April through June brings serious heat to these same
                  regions, often exceeding 40°C in Rajasthan and Delhi by May, before the monsoon
                  arrives around late June and brings humidity, rain, and a different kind of
                  travel altogether. Meanwhile Leh &amp; Ladakh runs in the opposite direction
                  entirely: its high mountain passes are typically snow-closed from November to
                  April, making June through September — exactly when the rest of North India is
                  at its most difficult — the only real window to visit at all.
                </p>
                <p>
                  Wildlife parks add another layer. Ranthambore, Sariska and Bandhavgarh actually
                  produce some of their best tiger sightings in the punishing heat of April to
                  June, when thinning vegetation and the search for water bring animals into the
                  open, while Kaziranga in Assam closes outright from June to September as the
                  Brahmaputra floods the park. Kerala&apos;s backwaters are arguably at their
                  lushest just after the monsoon retreats, from September onward, rather than in
                  the driest months further north. The table below breaks this down month by
                  month; the region guide beneath it does the same city by city and park by park.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Month by Month" heading="What Each Month Actually Looks Like" />
              <div className="mt-8 overflow-x-auto rounded-2xl border border-sand">
                <table className="w-full min-w-[960px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-cream/70 text-xs uppercase tracking-wide text-ink-soft">
                      <th className="px-5 py-3 font-semibold">Month</th>
                      <th className="px-5 py-3 font-semibold">Weather</th>
                      <th className="px-5 py-3 font-semibold">Crowds</th>
                      <th className="px-5 py-3 font-semibold">Festivals</th>
                      <th className="px-5 py-3 font-semibold">Best For</th>
                      <th className="px-5 py-3 font-semibold">Avoid / Watch For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthTable.map((row, i) => (
                      <tr
                        key={row.month}
                        className={`border-t border-sand ${i % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                      >
                        <td className="px-5 py-4 align-top">
                          <Link
                            href={`/best-time-to-visit-india/${row.slug}`}
                            className="font-display text-base font-semibold text-ink hover:text-maroon"
                          >
                            {row.month}
                          </Link>
                        </td>
                        <td className="px-5 py-4 align-top text-ink-soft">{row.weather}</td>
                        <td className="px-5 py-4 align-top text-ink-soft">{row.crowds}</td>
                        <td className="px-5 py-4 align-top text-ink-soft">{row.festivals}</td>
                        <td className="px-5 py-4 align-top text-ink-soft">{row.bestFor}</td>
                        <td className="px-5 py-4 align-top text-ink-soft">{row.avoid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Region Callouts"
                heading="Rajasthan vs. Kerala vs. Ladakh vs. the Himalayas"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                These four regions illustrate just how differently &ldquo;season&rdquo; plays out
                across India — two run on the same October–March calendar as the Golden Triangle,
                and two run on their own timing entirely.
              </p>
              <div className="mt-8 space-y-6">
                {regionCallouts.map((r) => (
                  <div key={r.region} className="rounded-2xl border border-sand bg-white p-6">
                    <p className="font-display text-lg font-semibold text-ink">{r.region}</p>
                    <p className="mt-1 text-sm font-semibold text-maroon">{r.summary}</p>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">{r.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Quick Reference" heading="Best Time to Visit, by Region" />
              <div className="mt-8 overflow-hidden rounded-2xl border border-sand">
                {regionGuide.map((row, i) => (
                  <div
                    key={row.region}
                    className={`grid grid-cols-1 gap-1 p-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream/50"
                    } ${i !== 0 ? "border-t border-sand" : ""}`}
                  >
                    <div>
                      <p className="font-display text-base font-semibold text-ink">{row.region}</p>
                      <p className="mt-0.5 text-sm text-ink-soft">{row.note}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm font-semibold text-maroon">{row.season}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 py-10 text-center sm:py-14">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Browse by Month" heading="Explore a Specific Month" align="center" />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {monthTable.map((row) => (
                  <Link
                    key={row.month}
                    href={`/best-time-to-visit-india/${row.slug}`}
                    className="rounded-full border border-sand bg-white px-5 py-2 text-sm font-medium text-ink transition-all duration-200 hover:scale-105 hover:border-maroon hover:text-maroon"
                  >
                    {row.month}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="What international travellers ask most often when timing an India trip."
          faqs={bestTimeFaqs}
          whatsappMessage="Hi! I have a question about the best time to plan my India trip."
          topDivider
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India, Nepal & Bhutan Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Tell us your travel window and where you'd like to go — we'll build an itinerary around the right season, usually with a reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning the right time to visit India with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
