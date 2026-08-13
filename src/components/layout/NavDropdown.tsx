"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { NavDropdown as NavDropdownItem } from "@/content/nav";

const CLOSE_DELAY_MS = 150;

export function NavDropdown({ item }: { item: NavDropdownItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  // Close on outside click/tap and on Escape, so keyboard/touch users (with no
  // hover to fall back on) have a way to dismiss the panel.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        // Always opens rather than toggles: a real mouse click fires `mouseenter`
        // just before `click`, so a toggle would immediately flip it back closed.
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 py-2 text-sm font-medium text-ivory/90 transition-colors hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
      >
        {item.label}
        <FiChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="menu"
            aria-label={item.label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
            className={`absolute left-0 top-full z-50 mt-1 rounded-xl border border-sand bg-ivory p-4 shadow-xl ${
              item.wide ? "w-[26rem]" : "w-64"
            }`}
          >
            {item.items.length > 0 ? (
              <ul className="flex flex-col gap-1">
                {item.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-maroon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-3 py-2 text-sm italic text-ink-soft/70">
                {item.comingSoonNote ?? "Coming soon."}
              </p>
            )}

            {item.viewAllHref && (
              <Link
                href={item.viewAllHref}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border-t border-sand px-3 pt-3 text-sm font-semibold text-maroon transition-colors hover:text-gold-dark"
              >
                {item.viewAllLabel ?? "View All"}
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
