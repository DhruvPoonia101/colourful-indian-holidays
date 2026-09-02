"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";

import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
import { navItems } from "@/content/nav";

export function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useLayoutEffect(() => {
    const node = headerRef.current;

    if (!node) return;

    const updateHeight = () => {
      setHeaderHeight(node.offsetHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* =========================================================
          FIXED NAVBAR
      ========================================================= */}
      <div
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          aria-label="Primary"
          className={`
            bg-ivory
            border-b border-sand/60
            transition-shadow duration-300
            ${
              isScrolled
                ? "shadow-lg shadow-ink/10"
                : "shadow-sm shadow-ink/5"
            }
          `}
        >
          <div
            className="
              mx-auto
              flex
              h-[76px]
              w-full
              items-center
              px-6
              sm:px-8
              lg:px-12
              xl:px-16
            "
          >

            {/* =====================================================
                LOGO — FAR LEFT
            ===================================================== */}
            <Link
              href="/"
              aria-label="Colourful Indian Holidays — Home"
              className="
                flex
                shrink-0
                items-center
                transition-transform
                duration-200
                hover:scale-[1.02]
              "
            >
              <Image
                src="/images/logo/logo-horizontal.webp"
                alt="Colourful Indian Holidays"
                width={900}
                height={386}
                priority
                sizes="220px"
                className="
                  h-auto
                  w-[190px]
                  object-contain
                  sm:w-[200px]
                  lg:w-[205px]
                "
              />
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION

                The nav sits in the center area while the CTA
                remains pushed completely to the right.
            ===================================================== */}
            <div
              className="
                hidden
                flex-1
                items-center
                justify-center
                lg:flex
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-7
                  xl:gap-8
                "
              >
                {navItems.map((item) => {
                  {/* ---------------------------------------------
                      DROPDOWN ITEMS
                  --------------------------------------------- */}
                  if (item.type !== "link") {
                    return (
                      <NavDropdown
                        key={item.label}
                        item={item}
                      />
                    );
                  }

                  {/* ---------------------------------------------
                      NORMAL LINKS
                  --------------------------------------------- */}
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                        flex
                        items-center
                        whitespace-nowrap
                        border-b-2
                        py-1
                        text-[15px]
                        font-medium
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? "border-gold text-gold-dark"
                            : "border-transparent text-ink hover:border-gold/70 hover:text-gold-dark"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                CTA — FAR RIGHT
            ===================================================== */}
            <div
              className="
                hidden
                shrink-0
                items-center
                lg:flex
              "
            >
              <GetQuoteButton
                pageName="Plan My Journey (Navbar)"
                triggerLabel="Plan My Journey"
                triggerClassName="
                  inline-flex items-center justify-center gap-2 whitespace-nowrap
                  rounded-full bg-[#12233F] px-7 py-3 text-sm font-semibold
                  tracking-wide text-ivory shadow-sm transition-all duration-200
                  ease-out min-h-11 hover:scale-[1.04] hover:bg-[#1B335C]
                "
              />
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="
                ml-auto
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                text-ink
                lg:hidden
              "
            >
              <FiMenu
                aria-hidden="true"
                className="h-6 w-6"
              />
            </button>
          </div>
        </nav>
      </div>

      {/* =========================================================
          SPACER FOR FIXED NAVBAR
      ========================================================= */}
      <div
        style={{ height: headerHeight }}
        aria-hidden="true"
      />

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}