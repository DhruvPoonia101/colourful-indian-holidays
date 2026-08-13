"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/content/nav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div>
        <TopUtilityBar />
        <nav
          aria-label="Primary"
          className={`sticky top-0 z-50 bg-maroon transition-shadow duration-300 ${
            isScrolled ? "shadow-lg shadow-ink/20" : ""
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-wide text-ivory sm:text-2xl"
            >
              Colourful Indian Holidays
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-ivory/90 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <NavDropdown key={item.label} item={item} />
                )
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
            >
              <FiMenu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
