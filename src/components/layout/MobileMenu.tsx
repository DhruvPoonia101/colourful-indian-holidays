"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMail, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";
import { navItems } from "@/content/nav";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/50 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
        <motion.div
          key="panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ivory lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-sand px-5 py-4">
              <span className="font-display text-lg font-semibold text-maroon">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center text-ink"
              >
                <FiX aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col divide-y divide-sand">
                {navItems.map((item) => {
                  if (item.type === "link") {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block py-3.5 text-sm font-medium text-ink"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const isAccordionOpen = openAccordion === item.label;

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        aria-expanded={isAccordionOpen}
                        onClick={() =>
                          setOpenAccordion(isAccordionOpen ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-ink"
                      >
                        {item.label}
                        <FiChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isAccordionOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isAccordionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.items.length > 0 ? (
                              <ul className="flex flex-col gap-1 pb-3 pl-3">
                                {item.items.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={onClose}
                                      className="block rounded-lg px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-cream hover:text-maroon"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="pb-3 pl-3 text-sm italic text-ink-soft/70">
                                {item.comingSoonNote ?? "Coming soon."}
                              </p>
                            )}
                            {item.viewAllHref && (
                              <Link
                                href={item.viewAllHref}
                                onClick={onClose}
                                className="mb-3 ml-3 inline-block text-sm font-semibold text-maroon"
                              >
                                {item.viewAllLabel ?? "View All"}
                              </Link>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-sand px-5 py-5">
              <div className="mb-4 flex items-center justify-center gap-6 text-ink-soft">
                <a
                  href={telHref}
                  aria-label={`Call us at ${BUSINESS.telephone}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-sand"
                >
                  <FiPhone aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href={whatsappUrl(
                    "Hi! I'd like to plan a tour with Colourful Indian Holidays."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-sand"
                >
                  <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  aria-label={`Email us at ${BUSINESS.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-sand"
                >
                  <FiMail aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
              <Button
                href={whatsappUrl(
                  "Hi! I'd like to plan a tour with Colourful Indian Holidays."
                )}
                external
                variant="maroon"
                className="w-full"
              >
                Plan My Journey
              </Button>
            </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
