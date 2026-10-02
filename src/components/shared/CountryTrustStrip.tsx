import { BUSINESS } from "@/lib/seo/business";

/**
 * A small, above-the-fold trust strip for the 6 /india-tours-from-*
 * country pages, placed right after PageHero. Addresses ACTION-PLAN.md
 * #7 — these pages already had real, visible testimonials (they reuse
 * the homepage's <Testimonials /> component further down), but nothing
 * establishing credibility in the first screenful, before a reader
 * scrolls to find them.
 *
 * Both figures reused from where they're already established elsewhere
 * on the site (BUSINESS.foundingYear; the "7900+" traveller count used
 * on the homepage stats strip and /testimonials), not new numbers.
 */
export function CountryTrustStrip() {
  const yearsOperating = new Date().getFullYear() - BUSINESS.foundingYear;

  return (
    <div className="border-b border-sand/70 bg-cream/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 text-center text-sm text-ink-soft sm:px-8">
        <span>
          <span className="font-semibold text-ink">Since {BUSINESS.foundingYear}</span> — {yearsOperating}+ years operating
        </span>
        <span className="hidden text-sand sm:inline">·</span>
        <span>
          <span className="font-semibold text-ink">7900+</span> travellers hosted
        </span>
        <span className="hidden text-sand sm:inline">·</span>
        <span>
          <span className="font-semibold text-ink">IATO-registered</span> agency
        </span>
      </div>
    </div>
  );
}
