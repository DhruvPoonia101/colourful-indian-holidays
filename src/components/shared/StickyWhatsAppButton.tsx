"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/whatsapp";

const DEFAULT_MESSAGE = "Hi! I'd like to plan a trip with Colourful Indian Holidays.";

export function StickyWhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      {!prefersReducedMotion && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.15], opacity: [0.55, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
          aria-hidden="true"
        />
      )}
      <FaWhatsapp aria-hidden="true" className="relative h-7 w-7" />
    </motion.a>
  );
}
