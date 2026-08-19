import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";
import { socialLinks } from "@/content/footer";
import { associations } from "@/content/home";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  tripadvisor: FaTripadvisor,
};

export function ContactInfoCard() {
  const address = BUSINESS.address;
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <div className="rounded-3xl border border-sand bg-white p-6 shadow-sm sm:p-8">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Get in Touch</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Prefer to talk it through directly? Reach us any of these ways — our team responds
        within 2 hours on WhatsApp and within 12 hours by email.
      </p>

      <ul className="mt-7 flex flex-col gap-5">
        <li className="flex gap-3.5">
          <FiMapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
          <address className="text-sm not-italic leading-relaxed text-ink">
            {address.streetAddress}
            <br />
            {address.addressLocality}, {address.addressRegion} {address.postalCode}
            <br />
            India
          </address>
        </li>

        <li>
          <a
            href={telHref}
            className="flex origin-left items-center gap-3.5 transition-transform duration-200 ease-out hover:scale-105"
          >
            <FiPhone aria-hidden="true" className="h-5 w-5 shrink-0 text-maroon" />
            <span className="text-sm text-ink transition-colors hover:text-maroon">
              {BUSINESS.telephone}
            </span>
          </a>
        </li>

        <li>
          <a
            href={whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex origin-left items-center gap-3.5 transition-transform duration-200 ease-out hover:scale-105"
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 shrink-0 text-maroon" />
            <span className="text-sm text-ink transition-colors hover:text-maroon">
              Chat with us on WhatsApp
            </span>
          </a>
        </li>

        <li>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex origin-left items-center gap-3.5 transition-transform duration-200 ease-out hover:scale-105"
          >
            <FiMail aria-hidden="true" className="h-5 w-5 shrink-0 text-maroon" />
            <span className="text-sm text-ink transition-colors hover:text-maroon">
              {BUSINESS.email}
            </span>
          </a>
        </li>

        <li className="flex items-start gap-3.5">
          <FiClock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
          <p className="text-sm leading-relaxed text-ink">
            WhatsApp: replies within 2 hours
            <br />
            Email: replies within 12 hours
          </p>
        </li>
      </ul>

      <div className="mt-7 border-t border-sand pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
          Languages Spoken
        </p>
        <p className="mt-1.5 text-sm text-ink">{BUSINESS.languages.join(", ")}</p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.icon as keyof typeof socialIcons];
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={`Visit our ${social.label} page`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-ink-soft transition-colors hover:border-maroon hover:text-maroon"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          );
        })}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-sand pt-6 opacity-80 grayscale">
        {associations.map((mark) => (
          <Image
            key={mark.src}
            src={mark.src}
            alt={mark.alt}
            width={80}
            height={44}
            sizes="80px"
            className="h-7 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
