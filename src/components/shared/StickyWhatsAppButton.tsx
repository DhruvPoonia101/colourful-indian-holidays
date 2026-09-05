"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/whatsapp";

const DEFAULT_MESSAGE = "Hi! I'd like to plan a trip with Colourful Indian Holidays.";

export function StickyWhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-14 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <FaWhatsapp aria-hidden="true" className="h-6 w-6 shrink-0" />
      <span className="whitespace-nowrap text-sm font-bold tracking-wide">Chat on WhatsApp</span>
    </motion.a>
  );
}
