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

/**
 * RESPONSIVE SIZING — why the breakpoints are where they are.
 *
 * The bar holds three things that all refuse to shrink: the logo, eight
 * whitespace-nowrap nav items, and the CTA. Measured at the previous
 * settings (logo 205px, 8 items at 765px, 7 gaps of 32px, CTA 175px,
 * px-16 padding) the row needed 1497px of width before anything could be
 * drawn. A flex row cannot shrink below that, so on every viewport under
 * ~1500px the overflow was simply clipped by the fixed wrapper:
 *
 *   - 1024–1279px: "Travel Guide", "Contact Us" and the whole CTA sat
 *     off-screen (the desktop nav turned on at lg, which is 1024px).
 *   - 1280–1499px (1366×768 and 1440×900 laptops): the CTA was cut in
 *     half, reading "Plan My Jou…".
 *   - Under 400px (iPhone SE/12 mini/14/15, Galaxy S-series — the logo at
 *     190px plus the CTA plus the 44px button needed exactly 400px): the
 *     hamburger button itself was off-screen, so those phones had no way
 *     to open the menu at all.
 *
 * Because the wrapper is `position: fixed`, none of this produced a
 * horizontal scrollbar — the page looked fine while the controls were
 * unreachable, which is why it only showed up on some screens.
 *
 * The fix is three size tiers that each measure under their own viewport:
 *   - base → xl (under 1280px): hamburger. Fits 320px with room to spare.
 *   - xl (1280px+): compact desktop nav, measured at ~1182px.
 *   - 2xl (1536px+): full-size nav, measured at ~1393px.
 *
 * The desktop nav deliberately starts at xl rather than lg: eight
 * top-level items cannot fit 1024px without shrinking the text to an
 * unreadable size, so tablets and small laptops get the hamburger.
 */

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

  // The mobile menu only exists below xl. If the viewport grows past that
  // while the panel is open (phone rotated, desktop window resized), the
  // panel unmounts but `overflow: hidden` would otherwise stay stuck on
  // <body>, leaving the page unscrollable.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    handleChange(mql);
    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

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
              gap-2
              px-3
              min-[380px]:px-4
              sm:gap-3
              sm:px-6
              xl:gap-4
              xl:px-6
              2xl:px-10
            "
          >

            {/* =====================================================
                LOGO — FAR LEFT

                Scales down with the viewport instead of holding a
                fixed 190px on a 320px-wide phone. `shrink-0` is kept
                so it never distorts, but the widths themselves are
                now responsive, which is what frees up the room the
                hamburger needs.
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
                sizes="(min-width: 1536px) 205px, (min-width: 1280px) 175px, (min-width: 640px) 185px, 160px"
                className="
                  h-auto
                  w-[140px]
                  object-contain
                  min-[380px]:w-[160px]
                  sm:w-[185px]
                  xl:w-[175px]
                  2xl:w-[205px]
                "
              />
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION

                Starts at xl (1280px), not lg (1024px) — see the note
                at the top of this file. `min-w-0` lets the centre
                column actually give way under pressure instead of
                forcing the row wider than the screen.
            ===================================================== */}
            <div
              className="
                hidden
                min-w-0
                flex-1
                items-center
                justify-center
                xl:flex
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  2xl:gap-6
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
                        text-[13.5px]
                        font-medium
                        transition-colors
                        duration-200
                        2xl:text-[15px]

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
                CTA — FAR RIGHT. Visible at every width, including
                phones, so the site's primary conversion button is
                never hidden behind the hamburger.

                Below xl it carries the short "Get Quote" label: the
                full "Plan My Journey" wording is ~120px of
                unbreakable text, which was a third of the reason the
                hamburger fell off the edge of a 360px phone. Both
                labels open the same modal — only one is ever
                rendered visibly, so there is still a single trigger.
            ===================================================== */}
            <div className="ml-auto flex shrink-0 items-center xl:ml-0">
              <GetQuoteButton
                pageName="Plan My Journey (Navbar)"
                triggerLabel={
                  <>
                    <span className="xl:hidden">Get Quote</span>
                    <span className="hidden xl:inline">Plan My Journey</span>
                  </>
                }
                triggerClassName="
                  inline-flex items-center justify-center gap-2 whitespace-nowrap
                  rounded-full bg-[#12233F] text-ivory shadow-sm transition-all
                  duration-200 ease-out hover:scale-[1.04] hover:bg-[#1B335C]
                  font-semibold tracking-wide
                  px-3 py-2 text-[11px] min-h-9
                  min-[380px]:px-4 min-[380px]:text-xs
                  xl:px-5 xl:py-2.5 xl:text-[13px] xl:min-h-10
                  2xl:px-7 2xl:py-3 2xl:text-sm 2xl:min-h-11
                "
              />
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON

                Stays a 44×44 tap target (the accessibility minimum)
                at every size — the room it needs is found by
                shrinking the logo and the CTA instead.
            ===================================================== */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="
                -mr-1
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                text-ink
                xl:hidden
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
