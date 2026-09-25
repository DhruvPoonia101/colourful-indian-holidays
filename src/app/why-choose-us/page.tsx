import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { FiCheck, FiX, FiMinus } from "react-icons/fi";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Deliberately NOT a rehash of About Us's "whyUs" HighlightsStrip cards
 * (founder story, company history). This page answers a different
 * question — private tour operator vs. fixed group tour vs. DIY planning —
 * aimed at someone actively comparing options, not someone asking who we
 * are. No card titles or copy are duplicated from about-us/page.tsx.
 */

const title = "Why Choose Us";
const description =
  "Private, tailor-made India tours vs. a fixed group departure vs. planning it yourself — a direct comparison, plus how our booking, pricing and support actually work.";
const pagePath = "/why-choose-us";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Why Choose Us", path: pagePath },
];

type ComparisonCell = "yes" | "no" | "partial";

const comparisonRows: { label: string; us: ComparisonCell; group: ComparisonCell; diy: ComparisonCell }[] = [
  { label: "Your own schedule, not a fixed departure date", us: "yes", group: "no", diy: "yes" },
  { label: "Private vehicle and guide, not shared with strangers", us: "yes", group: "no", diy: "partial" },
  { label: "Change the itinerary once you've seen the options", us: "yes", group: "no", diy: "yes" },
  { label: "Vetted hotels and drivers, not the cheapest bidder", us: "yes", group: "partial", diy: "no" },
  { label: "One point of contact throughout planning and travel", us: "yes", group: "partial", diy: "no" },
  { label: "Local knowledge of drive times, seasons and real prices", us: "yes", group: "partial", diy: "no" },
  { label: "No time spent researching and booking each piece yourself", us: "yes", group: "yes", diy: "no" },
  { label: "Support if something goes wrong mid-trip", us: "yes", group: "partial", diy: "no" },
];

const cellIcon = {
  yes: <FiCheck aria-label="Yes" className="h-4 w-4 text-green-700" />,
  no: <FiX aria-label="No" className="h-4 w-4 text-red-700/70" />,
  partial: <FiMinus aria-label="Sometimes" className="h-4 w-4 text-gold-dark" />,
} as const;

const processSteps = [
  {
    title: "1. Tell Us Your Dates & Interests",
    description:
      "A message on WhatsApp, email, or our contact form with your rough dates, budget range and what you'd like to see. We reply within 24 hours, usually with questions to sharpen the plan rather than a generic quote.",
  },
  {
    title: "2. We Draft a Real Itinerary",
    description:
      "Not a template with your name at the top — an actual day-by-day plan built around your dates, using hotels and routes we know directly. You can ask us to swap a city, extend a stop, or adjust the pace before anything is booked.",
  },
  {
    title: "3. You Approve, We Confirm",
    description:
      "Once you're happy, a 30% advance secures your hotel bookings. We handle the confirmations and keep you updated as each piece locks in, rather than going quiet until departure.",
  },
  {
    title: "4. We're Reachable the Whole Trip",
    description:
      "Your guide and driver are briefed on your specific itinerary, not reading it for the first time that morning, and our office is a WhatsApp message away if plans need to change once you're already travelling.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image="/images/destinations/amber-fort-jaipur.webp"
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Why Choose Us"
          headline="Private Tour, Group Tour, or Plan It Yourself?"
          subheadline="Three genuinely different ways to see India — here's how they actually compare, and how our side of it works in practice."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="The Real Comparison"
                heading="What You're Actually Choosing Between"
                align="center"
              />
              <p className="mx-auto mt-4 max-w-5xl text-center text-base leading-relaxed text-ink-soft">
                Every traveller researching an India trip is really weighing three options,
                whether they&apos;ve framed it that way or not. Here&apos;s an honest look at where each
                one genuinely wins.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 overflow-x-auto rounded-2xl border border-sand">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-cream/60 text-left">
                      <th className="px-4 py-3 font-display text-sm font-semibold text-ink sm:px-6">
                        &nbsp;
                      </th>
                      <th className="px-4 py-3 text-center font-display text-sm font-semibold text-maroon sm:px-6">
                        Us — Private, Tailor-Made
                      </th>
                      <th className="px-4 py-3 text-center font-display text-sm font-semibold text-ink sm:px-6">
                        Fixed Group Tour
                      </th>
                      <th className="px-4 py-3 text-center font-display text-sm font-semibold text-ink sm:px-6">
                        Planning It Yourself
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-cream/20"}>
                        <td className="px-4 py-3 text-ink-soft sm:px-6">{row.label}</td>
                        <td className="px-4 py-3 text-center sm:px-6">
                          <span className="inline-flex">{cellIcon[row.us]}</span>
                        </td>
                        <td className="px-4 py-3 text-center sm:px-6">
                          <span className="inline-flex">{cellIcon[row.group]}</span>
                        </td>
                        <td className="px-4 py-3 text-center sm:px-6">
                          <span className="inline-flex">{cellIcon[row.diy]}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft/80">
                To be fair to the alternatives: a fixed group tour is usually the cheapest option
                per day if your dates are flexible enough to fit an existing departure, and
                planning it yourself gives you full control if you genuinely enjoy the research —
                neither is a bad choice for the right traveller. Where a private, tailor-made trip
                earns its cost is in the parts that are hardest to DIY from abroad: knowing which
                hotel photo is misleading, how long a drive actually takes once you account for
                traffic, and who to call if a flight gets cancelled two days into a two-week trip.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="How It Actually Works"
                heading="From First Message to Departure"
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-sand bg-white p-6 shadow-sm">
                    <h3 className="font-display text-lg font-semibold text-maroon">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 text-center sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Don't Just Take Our Word For It"
                heading="See the Reviews & Recognition"
                align="center"
              />
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {BUSINESS.aggregateRating.ratingValue}★ on Tripadvisor from{" "}
                {BUSINESS.aggregateRating.reviewCount}+ reviews, {BUSINESS.googleRating.ratingValue}
                ★ on Google from {BUSINESS.googleRating.reviewCount}+ reviews, and an
                IATO-registered agency recognised by the Ministry of Tourism and Rajasthan
                Tourism.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="/testimonials"
                  className="inline-flex items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.03] hover:bg-maroon-dark"
                >
                  Read Traveller Reviews
                </a>
                <a
                  href="/awards-recognition"
                  className="inline-flex items-center justify-center rounded-full border border-maroon/40 px-6 py-3 text-sm font-semibold text-maroon transition-all duration-200 hover:scale-[1.03] hover:bg-maroon/5"
                >
                  See Our Awards & Recognition
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <JourneyCTA
          backgroundImage="/images/destinations/amber-fort-jaipur.webp"
          eyebrow="Start Your Journey"
          headline="Ready to See What a Private Itinerary Looks Like?"
          headlineItalic="Tell Us Your Dates."
          subtext="No obligation, no generic quote — send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'd like to know more about planning a trip with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
