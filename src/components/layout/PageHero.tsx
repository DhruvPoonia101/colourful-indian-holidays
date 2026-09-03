import Image from "next/image";
import { Breadcrumbs } from "@/components/destinations/Breadcrumbs";
import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { whatsappUrl } from "@/lib/whatsapp";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumb-schema";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Optional primary CTA (e.g. "View Tour Packages"). Omit to run a hero with no buttons. */
  primaryHref?: string;
  primaryLabel?: string;
  /** Optional WhatsApp CTA. Provide a message to show the button. */
  whatsappMessage?: string;
  /**
   * When set, the primary CTA opens the standard "Get a Free Quote" modal
   * instead of navigating via primaryHref — use for "Plan My Journey"-style
   * buttons so they behave the same as the navbar's Plan My Journey button.
   * The string is passed as the modal's pageName. When provided, this takes
   * priority over primaryHref for the primary button.
   */
  primaryQuoteButtonPageName?: string;
};

const primaryButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ease-out min-h-11 hover:scale-[1.04] px-7 py-3.5 text-sm bg-gold text-ink hover:bg-gold-light";

export function PageHero({
  image,
  imageAlt,
  breadcrumbs,
  eyebrow,
  headline,
  subheadline,
  primaryHref,
  primaryLabel,
  whatsappMessage,
  primaryQuoteButtonPageName,
}: PageHeroProps) {
  const hasCta =
    Boolean(primaryQuoteButtonPageName && primaryLabel) ||
    Boolean(primaryHref && primaryLabel) ||
    Boolean(whatsappMessage);

  return (
    <section className="relative flex min-h-[65svh] w-full items-end overflow-hidden bg-ink text-ivory">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-24 sm:px-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6">
          <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-ivory/85 sm:text-lg">{subheadline}</p>

        {hasCta && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryQuoteButtonPageName && primaryLabel ? (
              <GetQuoteButton
                pageName={primaryQuoteButtonPageName}
                triggerLabel={primaryLabel}
                triggerClassName={primaryButtonClassName}
              />
            ) : (
              primaryHref &&
              primaryLabel && <Button href={primaryHref}>{primaryLabel}</Button>
            )}
            {whatsappMessage && (
              <Button href={whatsappUrl(whatsappMessage)} external variant="outline">
                Chat on WhatsApp
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
