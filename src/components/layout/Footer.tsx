import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { associations } from "@/content/home";
import {
  footerCompanyLinks,
  footerExploreLinks,
  footerLegalLinks,
  sisterCompanies,
  socialLinks,
} from "@/content/footer";
import { BUSINESS, SITE_NAME } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  tripadvisor: FaTripadvisor,
};

export function Footer() {
  const address = BUSINESS.address;
  const year = new Date().getFullYear();
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <footer className="bg-ink text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold text-ivory">{SITE_NAME}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold-light">
              Rajasthan &amp; India, Curated for the World
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Since {BUSINESS.foundingYear}, we&apos;ve been designing private, tailor-made
              journeys across Rajasthan and India for travellers from around the world. Every
              itinerary is built around heritage stays, trusted local experts, and the details
              that make a trip feel effortless.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Visit our ${social.label} page`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold-light"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-semibold text-ivory">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ivory/50">
              Sister Companies
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              {sisterCompanies.map((company) => (
                <li key={company.href}>
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-light"
                  >
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-ivory">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <p className="font-semibold text-ivory">Get In Touch</p>
            <address className="mt-4 text-sm not-italic leading-relaxed">
              {address.streetAddress}
              <br />
              {address.addressLocality}, {address.addressRegion} {address.postalCode}
              <br />
              {address.addressCountry === "IN" ? "India" : address.addressCountry}
            </address>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={telHref}
                  className="flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <FiPhone aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {BUSINESS.telephone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(
                    "Hi! I'd like to plan a tour with Colourful Indian Holidays."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <FaWhatsapp aria-hidden="true" className="h-4 w-4 shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold-light"
                >
                  <FiMail aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-ivory/60">
              Languages spoken: {BUSINESS.languages.join(", ")}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-center text-xs text-ivory/50 sm:text-left">
              © {year} {SITE_NAME} · Est. {BUSINESS.foundingYear} ·{" "}
              {footerLegalLinks.map((link, index) => (
                <span key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light">
                    {link.label}
                  </Link>
                  {index < footerLegalLinks.length - 1 && " · "}
                </span>
              ))}
            </p>

            <div className="flex items-center gap-1.5 text-sm text-ivory/70">
              <FaTripadvisor aria-hidden="true" className="h-4 w-4 text-[#34e0a1]" />
              <span className="font-semibold text-ivory">
                {BUSINESS.aggregateRating.ratingValue}
              </span>
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="h-3.5 w-3.5 text-gold" />
                ))}
              </div>
              <span>({BUSINESS.aggregateRating.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70 grayscale sm:justify-start">
            {associations.map((mark) => (
              <Image
                key={mark.src}
                src={mark.src}
                alt={mark.alt}
                width={90}
                height={50}
                sizes="90px"
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
