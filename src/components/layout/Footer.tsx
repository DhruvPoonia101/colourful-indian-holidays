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

import {
  footerCompanyLinks,
  footerExploreLinks,
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
    <footer className="relative overflow-hidden bg-[#250C05] text-[#F5EBDD]">
      {/* Subtle premium top accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#8F1D1D] via-[#D5A93A] to-[#8F1D1D]" />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:py-12">
        {/* =========================================================
            MAIN FOOTER
        ========================================================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr] lg:gap-12">
          
          {/* =======================================================
              BRAND
          ======================================================= */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              aria-label={`${SITE_NAME} — Home`}
              className="inline-flex items-center rounded-2xl bg-[#F8F1E7] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/images/logo/logo-horizontal.webp"
                alt={SITE_NAME}
                width={900}
                height={386}
                sizes="190px"
                className="h-auto w-[185px] object-contain"
              />
            </Link>

            {/* Description */}
            <p className="mt-5 max-w-[330px] text-[13px] leading-6 text-[#E9DCCB]/75">
              Since {BUSINESS.foundingYear}, we&apos;ve been designing private,
              tailor-made journeys across India and the Indian subcontinent
              for travellers from around the world.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Visit our ${social.label} page`}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#D5A93A]/25 bg-[#3A1209]/40 text-[#E9DCCB]/75 transition-all duration-300 hover:border-[#D5A93A] hover:bg-[#D5A93A] hover:text-[#250C05]"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =======================================================
              EXPLORE
          ======================================================= */}
          <div>
            <p className="relative inline-block text-[14px] font-semibold tracking-wide text-[#F8F1E7]">
              Explore
              <span className="absolute -bottom-2 left-0 h-[1px] w-6 bg-[#D5A93A]" />
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 text-[13px]">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sister Companies */}
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5A93A]/75">
              Sister Companies
            </p>

            <ul className="mt-3 flex flex-col gap-2 text-[13px]">
              {sisterCompanies.map((company) => (
                <li key={company.href}>
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                  >
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================================================
              COMPANY
          ======================================================= */}
          <div>
            <p className="relative inline-block text-[14px] font-semibold tracking-wide text-[#F8F1E7]">
              Company
              <span className="absolute -bottom-2 left-0 h-[1px] w-6 bg-[#D5A93A]" />
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 text-[13px]">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================================================
              GET IN TOUCH
          ======================================================= */}
          <div>
            <p className="relative inline-block text-[14px] font-semibold tracking-wide text-[#F8F1E7]">
              Get In Touch
              <span className="absolute -bottom-2 left-0 h-[1px] w-6 bg-[#D5A93A]" />
            </p>

            {/* Address */}
            <address className="mt-5 text-[13px] not-italic leading-6 text-[#E9DCCB]/75">
              {address.streetAddress}
              <br />
              {address.addressLocality}, {address.addressRegion}{" "}
              {address.postalCode}
              <br />
              {address.addressCountry === "IN"
                ? "India"
                : address.addressCountry}
            </address>

            {/* Contact */}
            <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
              <li>
                <a
                  href={telHref}
                  className="group flex items-center gap-2.5 text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                >
                  <FiPhone
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#D5A93A]"
                  />
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
                  className="group flex items-center gap-2.5 text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                >
                  <FaWhatsapp
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#D5A93A]"
                  />
                  WhatsApp Us
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group flex items-center gap-2.5 break-all text-[#E9DCCB]/75 transition-colors duration-200 hover:text-[#D5A93A]"
                >
                  <FiMail
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#D5A93A]"
                  />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>

            <p className="mt-4 text-[11px] leading-5 text-[#E9DCCB]/50">
              Languages spoken: {BUSINESS.languages.join(", ")}
            </p>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="mt-10 border-t border-[#E9DCCB]/10 pt-6">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
            
            {/* Copyright */}
            <p className="text-[11px] leading-5 text-[#E9DCCB]/45">
              © {year} {SITE_NAME} · Est. {BUSINESS.foundingYear}
            </p>

            {/* Privacy Policy / Terms & Conditions — centered */}
            <p className="text-[11px] leading-5 text-[#E9DCCB]/45">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#D5A93A]"
              >
                Privacy Policy
              </Link>
              {" · "}
              <Link
                href="/cancellation-policy-and-terms-and-conditions"
                className="transition-colors hover:text-[#D5A93A]"
              >
                Terms &amp; Conditions
              </Link>
            </p>

            {/* Tripadvisor Rating */}
            <div className="flex items-center gap-2 text-[12px]">
              <FaTripadvisor
                aria-hidden="true"
                className="h-4 w-4 text-[#34E0A1]"
              />

              <span className="font-semibold text-[#F8F1E7]">
                {BUSINESS.aggregateRating.ratingValue}
              </span>

              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className="h-3 w-3 text-[#D5A93A]"
                  />
                ))}
              </div>

              <span className="text-[#E9DCCB]/50">
                ({BUSINESS.aggregateRating.reviewCount} reviews)
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
