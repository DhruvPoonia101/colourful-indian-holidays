import Image from "next/image";
import { FiCalendar, FiCheck, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";
import type { TrustBadge } from "@/content/trust-badges";

type JourneyCTAProps = {
  /** Optional background photo. Falls back to a solid deep-maroon background if omitted. */
  backgroundImage?: string;
  backgroundImageAlt?: string;
  eyebrow: string;
  headline: string;
  /** Optional second line, rendered in italic serif beneath the headline. */
  headlineItalic?: string;
  subtext: string;
  primaryLabel: string;
  primaryHref: string;
  whatsappMessage: string;
  trustBadges: TrustBadge[];
};

export function JourneyCTA({
  backgroundImage,
  backgroundImageAlt = "",
  eyebrow,
  headline,
  headlineItalic,
  subtext,
  primaryLabel,
  primaryHref,
  whatsappMessage,
  trustBadges,
}: JourneyCTAProps) {
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-maroon-dark py-16 text-center text-ivory sm:py-24">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-maroon-dark/85" />
        </>
      )}

      {/* Corner bracket accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-gold/50 sm:left-10 sm:top-10" />
      <div className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-gold/50 sm:right-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b border-l border-gold/50 sm:bottom-10 sm:left-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-gold/50 sm:bottom-10 sm:right-10" />

      <div className="relative mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            {headline}
            {headlineItalic && (
              <>
                <br />
                <span className="italic">{headlineItalic}</span>
              </>
            )}
          </h2>

          <div className="mx-auto mt-4 h-px w-14 rounded-full bg-gold" />

          <p className="mt-5 text-sm leading-relaxed text-ivory/80 sm:text-base">{subtext}</p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-col overflow-hidden rounded-xl border border-ivory/25 sm:flex-row">
              <a
                href={primaryHref}
                className="group flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-ink transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-gold-light"
              >
                <FiCalendar
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                />
                {primaryLabel}
              </a>
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 border-t border-ivory/25 px-6 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-ivory/10 sm:border-l sm:border-t-0"
              >
                <FiMessageCircle
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                />
                WhatsApp Us
              </a>
              <a
                href={telHref}
                className="group flex items-center justify-center gap-2 border-t border-ivory/25 px-6 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-ivory/10 sm:border-l sm:border-t-0"
              >
                <FiPhone
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                />
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {trustBadges.map((badge) => {
              const pillClasses =
                "inline-flex items-center gap-1.5 rounded-full border border-ivory/25 px-3.5 py-1.5 text-xs font-medium text-ivory/85 transition-all duration-200 ease-out hover:scale-105 hover:border-gold/50 hover:bg-ivory/5 hover:text-ivory";

              if (badge.href) {
                return (
                  <a
                    key={badge.label}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pillClasses}
                  >
                    <FiCheck aria-hidden="true" className="h-3.5 w-3.5 text-gold-light" />
                    {badge.label}
                  </a>
                );
              }

              return (
                <span key={badge.label} className={pillClasses}>
                  <FiCheck aria-hidden="true" className="h-3.5 w-3.5 text-gold-light" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
