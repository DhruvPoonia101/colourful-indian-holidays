import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";

/**
 * "Why book direct" differentiation section for the 6 /india-tours-from-*
 * country pages (ACTION-PLAN.md #22). Every point here is a real,
 * already-verified fact used elsewhere on the site — nothing new
 * introduced. Tone: calm and factual, matching the rest of the site's
 * voice (the testimonials page's "verified by us word-for-word,
 * including any less glowing ones" register) rather than an assertive
 * sales pitch — confirmed with Dhruv (30 Sep 2026).
 *
 * Note on the rating figures: both platforms are 4.9★, not 5★ — this
 * matches the site-wide correction made earlier (the old "5 Star Rating
 * on Trip Advisor" footer badge was fixed to "4.9 Star" for the same
 * reason). Kept consistent here deliberately.
 */
const points = [
  {
    title: "Local, On-the-Ground Knowledge",
    description:
      "We're based in Jaipur, not routing your trip through a call centre abroad. Every itinerary is planned by people who actually know the roads, the seasons and the places — not a reseller working from a brochure.",
  },
  {
    title: "No Reseller Markup",
    description:
      "Booking directly with the operator means there's no added layer taking a cut on top of what we charge. The price you're quoted is ours, not a reseller's margin stacked on top of ours.",
  },
  {
    title: "A Fast, Direct Line to Us",
    description:
      "We respond to enquiries within 2 hours, and you deal with our team directly throughout your trip — not a reseller relaying messages back and forth on your behalf.",
  },
  {
    title: "Officially Recognised, Not Just Self-Described",
    description:
      "We're a registered IATO member and listed on the Ministry of Tourism, Government of India's own registered-operator directory — verifiable facts, not claims a reseller can necessarily make.",
  },
  {
    title: "A Track Record You Can Check Yourself",
    description:
      "4.9★ on both Google (140+ reviews) and Tripadvisor (282+ reviews), plus Tripadvisor's Travellers' Choice award in six separate years — 2014, 2015, 2016, 2017, 2019 and 2024.",
  },
];

export function WhyBookDirect() {
  return (
    <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Booking Direct"
            heading="Why Book Directly With Us"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-sand bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-maroon">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
