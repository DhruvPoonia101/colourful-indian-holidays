import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

/**
 * A small, contextual CTA meant to sit inline within an article's body —
 * after the section discussing a specific place or trip type — linking
 * to the one real tour page that section is actually about. Distinct
 * from ArticleTopCTA (a generic "skip ahead" banner shown once, near the
 * top of every article) — this one is placed 2-3 times per article, at
 * points the plan calls "contextual," and always points at a specific,
 * real, already-priced tour page rather than a generic /contact link.
 */
export function ArticleMidCTA({
  text,
  href,
  linkLabel,
}: {
  /** One short sentence tying the CTA to what was just discussed. */
  text: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="my-2 rounded-xl border border-gold/30 bg-cream/60 px-5 py-4">
      <p className="text-sm text-ink-soft">
        {text}{" "}
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-semibold text-maroon underline decoration-maroon/30 underline-offset-2 hover:decoration-maroon"
        >
          {linkLabel}
          <FiArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
      </p>
    </div>
  );
}
