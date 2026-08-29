import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/whatsapp";

const DEFAULT_MESSAGE = "Hi! I'd like to plan a trip with Colourful Indian Holidays.";

export function StickyWhatsAppButton() {
  return (
    <a
      href={whatsappUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
