import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiMail, FiPhone } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";

const TRUST_BADGES = [
  "Trusted Travel Partner",
  "No Hidden Fees",
  "International Payments Accepted",
  "Respond Within 2 Hours",
];

export function SkipFormCTA() {
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-maroon-dark py-16 text-center text-ivory sm:py-24">
      {/* Corner bracket accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-gold/50 sm:left-10 sm:top-10" />
      <div className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-gold/50 sm:right-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b border-l border-gold/50 sm:bottom-10 sm:left-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-gold/50 sm:bottom-10 sm:right-10" />

      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <SectionEyebrow tone="dark" align="center">
            Prefer Not to Fill Out a Form?
          </SectionEyebrow>

          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            Message Us Directly, Any Way You Like
          </h2>
          <div className="mx-auto mt-4 h-px w-14 rounded-full bg-gold" />

          <p className="mt-5 text-sm leading-relaxed text-ivory/80 sm:text-base">
            Same 2-hour response time, no form required — reach us on WhatsApp, by phone, or by
            email.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-sm transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-gold-dark"
            >
              <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-6 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-ivory/10"
            >
              <FiPhone aria-hidden="true" className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-6 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-ivory/10"
            >
              <FiMail aria-hidden="true" className="h-4 w-4" />
              Email Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-ivory/25 px-3.5 py-1.5 text-xs font-medium text-ivory/85"
              >
                <FiCheck aria-hidden="true" className="h-3.5 w-3.5 text-gold-light" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
