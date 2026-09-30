/**
 * A small, single-line attribution for tour, experience and destination
 * pages — deliberately lighter than the blog's ArticleByline (no photo,
 * no bio card), since these are product/listing pages, not articles.
 * Placed just above the closing JourneyCTA on every page that uses it.
 * Addresses the audit's Content Quality finding that these 118 pages
 * carry no named author or reviewer at all.
 *
 * Name and framing confirmed directly by Dhruv (30 Sep 2026): his own
 * name, "planned by" rather than "written by" since these pages aren't
 * articles, and a small line rather than a prominent byline block.
 */
export function PlannedByLine() {
  return (
    <p className="mx-auto max-w-7xl px-6 pb-2 text-center text-xs text-ink-soft/70 sm:px-8">
      Itinerary planned by{" "}
      <a
        href="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ink-soft underline decoration-ink-soft/30 underline-offset-2 hover:decoration-ink-soft"
      >
        Dhruv Poonia
      </a>
      , Digital &amp; Marketing Manager
    </p>
  );
}
