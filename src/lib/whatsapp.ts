import { BUSINESS } from "@/lib/seo/business";

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string) {
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}`;
}
