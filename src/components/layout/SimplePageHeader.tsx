import { Breadcrumbs } from "@/components/destinations/Breadcrumbs";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumb-schema";

type SimplePageHeaderProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Optional "Get a Free Quote" button on the right, opening the standard quote modal. */
  quoteButtonPageName?: string;
};

/**
 * A compact, solid-colour page header — no full-bleed background photo. Used
 * for pages like Contact Us where a large hero image isn't needed and a
 * simpler, faster-loading header reads better.
 */
export function SimplePageHeader({
  breadcrumbs,
  eyebrow,
  headline,
  subheadline,
  quoteButtonPageName,
}: SimplePageHeaderProps) {
  return (
    <section className="bg-maroon-dark text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 sm:py-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <span className="mt-5 inline-block rounded-full border border-ivory/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            {headline}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-ivory/85 sm:text-base">{subheadline}</p>
        </div>

        {quoteButtonPageName && (
          <div className="shrink-0">
            <GetQuoteButton pageName={quoteButtonPageName} triggerLabel="Request a Free Quote" />
          </div>
        )}
      </div>
    </section>
  );
}
