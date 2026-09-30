import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * A small, single-line conversion point placed right after the byline on
 * every Travel Guide article, before the (often 1,500-2,500 word) body
 * begins. Every article on this site previously had exactly one CTA — the
 * full JourneyCTA banner at the very bottom — meaning a reader had to
 * scroll through the entire piece before seeing any way to convert.
 * Deliberately lightweight (one line, one button) rather than a duplicate
 * of the closing JourneyCTA, so it doesn't compete with the article's own
 * opening paragraph for attention.
 */
export function ArticleTopCTA({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <div className="border-b border-sand/70 bg-cream/40">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row sm:px-8">
        <p className="text-sm text-ink-soft">
          Already know you want this trip?{" "}
          <span className="font-medium text-ink">Skip ahead and tell us your dates.</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-maroon px-4 py-2 text-xs font-semibold text-ivory transition-all duration-200 hover:scale-[1.03] hover:bg-maroon-dark"
          >
            Plan My Journey
          </Link>
          <a
            href={whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-maroon/30 px-4 py-2 text-xs font-semibold text-maroon transition-all duration-200 hover:scale-[1.03] hover:bg-maroon/5"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
