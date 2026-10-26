import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { TOUR_LINKS } from "@/content/tour-links";

/** A clear link from an informational page to the tour that covers it.
 * `bare` drops the page-width wrapper, for use inside article bodies. */
export function TourLinkCallout({ page, bare = false }: { page: string; bare?: boolean }) {
  const link = TOUR_LINKS[page];
  if (!link) return null;

  const box = (
    <aside
      aria-label={link.title}
      className="flex flex-col gap-4 rounded-2xl border border-gold/40 bg-cream/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold text-ink sm:text-xl">{link.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">{link.text}</p>
        {link.secondary && (
          <p className="mt-2 text-sm">
            <Link href={link.secondary.href} className="font-semibold text-maroon underline underline-offset-2">
              {link.secondary.label}
            </Link>
          </p>
        )}
      </div>
      <Link
        href={link.href}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-maroon-dark"
      >
        View {link.label}
        <FiArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </aside>
  );

  if (bare) return <div className="my-8">{box}</div>;

  return (
    <section className="pb-2 pt-8 sm:pt-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">{box}</div>
    </section>
  );
}
