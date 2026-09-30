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
      // The mobile offset now adds env(safe-area-inset-bottom) on top of
      // the original 1.25rem (bottom-5) spacing — without it, this button
      // sat only 20px above the very edge of the viewport on mobile, not
      // enough clearance from the home indicator / gesture bar on any
      // phone with one (iPhone X+, most Android phones since ~2019), and
      // could visually collide with it or with page content scrolled to
      // the bottom. The sm: breakpoint keeps its original fixed offset
      // unchanged, since safe-area-inset-bottom is effectively 0 on
      // larger screens anyway.
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-14 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <FaWhatsapp aria-hidden="true" className="h-6 w-6 shrink-0" />
      <span className="whitespace-nowrap text-sm font-bold tracking-wide">Chat on WhatsApp</span>
    </motion.a>
  );
}
