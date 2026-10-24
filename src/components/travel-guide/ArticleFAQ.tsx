import { ArticleH2 } from "@/components/travel-guide/ArticleBody";
import type { FaqItem } from "@/lib/seo/faq-schema";

/**
 * Always-visible FAQ block for travel guides.
 *
 * Every guide already emits FAQPage JSON-LD built from its `faqs` array.
 * Google requires FAQ markup to describe content that is actually visible on
 * the page, and the guides were printing the schema without printing the
 * Q&A — so the markup described text no reader could see. This renders the
 * very same array as plain, fully expanded text (no accordion, no sr-only),
 * so the page and the schema can never drift apart and the answers are
 * readable by visitors, search crawlers and AI answer engines alike.
 *
 * Server component on purpose: no client JS, content is in the initial HTML.
 */
export function ArticleFAQ({
  faqs,
  heading = "Frequently Asked Questions",
}: {
  faqs: FaqItem[];
  heading?: string;
}) {
  return (
    <section aria-label={heading}>
      <ArticleH2>{heading}</ArticleH2>
      <div className="mt-6 divide-y divide-sand/70 border-y border-sand/70">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-5">
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              {faq.question}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
