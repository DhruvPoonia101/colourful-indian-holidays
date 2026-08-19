import Image from "next/image";
import { Breadcrumbs } from "@/components/destinations/Breadcrumbs";
import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";
import { Button } from "@/components/ui/Button";
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
};

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
}: PageHeroProps) {
  const hasCta = Boolean(primaryHref && primaryLabel) || Boolean(whatsappMessage);

  return (
    <section className="relative flex min-h-[92svh] w-full items-end overflow-hidden bg-ink text-ivory">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 sm:pb-28">
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
            {primaryHref && primaryLabel && <Button href={primaryHref}>{primaryLabel}</Button>}
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
