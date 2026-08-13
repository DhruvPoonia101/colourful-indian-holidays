import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";

export function TopUtilityBar() {
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <div className="border-b border-sand bg-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-ink-soft sm:gap-5">
          <a
            href={`mailto:${BUSINESS.email}`}
            aria-label={`Email us at ${BUSINESS.email}`}
            className="hidden items-center gap-1.5 text-xs font-medium transition-colors hover:text-maroon sm:flex sm:text-sm"
          >
            <FiMail aria-hidden="true" className="h-4 w-4" />
            {BUSINESS.email}
          </a>
          <a
            href={telHref}
            aria-label={`Call us at ${BUSINESS.telephone}`}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-maroon sm:text-sm"
          >
            <FiPhone aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS.telephone}</span>
          </a>
          <a
            href={whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-maroon sm:text-sm"
          >
            <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        <Button
          href={whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays.")}
          external
          variant="maroon"
          size="sm"
        >
          Plan My Journey
        </Button>
      </div>
    </div>
  );
}
