import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactQuickActions() {
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  const actions = [
    {
      label: "Call Us",
      value: BUSINESS.telephone,
      href: telHref,
      icon: FiPhone,
    },
    {
      label: "WhatsApp",
      value: "Chat now, replies in 2 hours",
      href: whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays."),
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: "Email",
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      icon: FiMail,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 rounded-2xl border border-sand bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-ivory transition-transform duration-300 group-hover:scale-110">
            <action.icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wide text-gold-dark">
              {action.label}
            </span>
            <span className="block text-sm font-medium text-ink">{action.value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
