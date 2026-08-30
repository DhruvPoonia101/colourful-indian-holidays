"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import type { NavDropdown as NavDropdownItem } from "@/content/nav";

const CLOSE_DELAY_MS = 150;
const VIEWPORT_MARGIN_PX = 16;

export function NavDropdown({ item }: { item: NavDropdownItem }) {
  const pathname = usePathname();
  const isActive = !!item.activeMatch && pathname.startsWith(item.activeMatch);
  const [open, setOpen] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();
  const hasColumns = !!item.columns && item.columns.length > 0;

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

  // Wide mega-menu panels are anchored to their trigger button's left edge,
  // which overflows the viewport when the button sits far right in the nav
  // (e.g. Themed Packages). On open, measure the panel and pull it back
  // on-screen if it runs past the right edge (or past the left edge for
  // panels that end up needing to shift the other way).
  useLayoutEffect(() => {
    if (!open) return;
    const node = panelRef.current;
    if (!node) return;

    // Measure with no shift applied first, so the calculation reflects the
    // panel's natural (unshifted) position.
    node.style.transform = "translateX(0px)";
    const rect = node.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let nextShift = 0;
    const rightOverflow = rect.right - (viewportWidth - VIEWPORT_MARGIN_PX);
    if (rightOverflow > 0) {
      nextShift = -rightOverflow;
    } else if (rect.left < VIEWPORT_MARGIN_PX) {
      nextShift = VIEWPORT_MARGIN_PX - rect.left;
    }

    setShiftX(nextShift);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
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
        className={`flex items-center gap-1 whitespace-nowrap border-b-2 text-sm font-medium transition-colors focus-visible:outline-none ${
          isActive
            ? "border-gold text-gold-dark"
            : "border-transparent text-ink/80 hover:text-maroon focus-visible:text-maroon"
        }`}
      >
        {item.label}
        <FiChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/*
        Always mounted (never conditionally rendered) so every link exists in the
        server-rendered HTML and is crawlable without any interaction. Only
        visibility/interactivity toggle with `open` — via opacity, pointer-events,
        aria-hidden and tabIndex — not presence in the DOM. Plain CSS transition
        (not Framer Motion) drives the open/close animation here: Framer's
        `animate` prop was not picking up `open` changes on this always-mounted
        element in this project's framer-motion version, leaving the panel stuck
        invisible after the first render. Horizontal position is corrected via
        inline transform (see the useLayoutEffect above) since wide mega-menu
        panels can overflow the viewport when their trigger sits far right in
        the nav — CSS alone can't do that collision check.
      */}
      <div
        ref={panelRef}
        id={panelId}
        role="menu"
        aria-label={item.label}
        aria-hidden={!open}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleClose}
        style={{
          transform: `translateX(${shiftX}px) translateY(${open ? 0 : -8}px)`,
        }}
        // No margin-top here (unlike a typical gap): a gap between the button and
        // this panel isn't covered by either element's hover area, so fast mouse
        // movement crossing it can register a `mouseleave` and start the close
        // timer before the cursor actually reaches the panel to cancel it. The
        // panel sits flush against the button (`top-full`, no margin) and the
        // same visual spacing is recreated with `pt-5` (padding, which IS part
        // of the hoverable area) instead.
        className={`absolute left-0 top-full z-50 rounded-xl border border-sand bg-ivory p-4 pt-5 shadow-xl transition-[opacity,transform] duration-200 ease-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } ${
          hasColumns
            ? item.wide
              ? "w-[58rem]"
              : "w-[46rem]"
            : item.wide
              ? "w-[26rem]"
              : "w-64"
        }`}
      >
        {hasColumns ? (
          <>
            <div
              className={`grid gap-x-6 gap-y-5 ${item.columnsPerRow ? "" : "grid-cols-3"}`}
              style={
                item.columnsPerRow
                  ? { gridTemplateColumns: `repeat(${item.columnsPerRow}, minmax(0, 1fr))` }
                  : undefined
              }
            >
              {item.columns!.map((column) => (
                <div key={column.heading}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {column.heading}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {column.items.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          role="menuitem"
                          tabIndex={open ? 0 : -1}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-maroon"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {item.durationRow && (
              <div className="mt-5 border-t border-sand pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {item.durationRow.heading}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.durationRow.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        role="menuitem"
                        tabIndex={open ? 0 : -1}
                        onClick={() => setOpen(false)}
                        className="block rounded-full border border-sand px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-maroon hover:text-maroon"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : item.items.length > 0 ? (
          item.gridLayout ? (
            <div className="grid grid-cols-3 gap-2">
              {item.items.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-maroon"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : (
            <ul className="flex flex-col gap-1">
              {item.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    role="menuitem"
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-maroon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : (
          <p className="px-3 py-2 text-sm italic text-ink-soft/70">
            {item.comingSoonNote ?? "Coming soon."}
          </p>
        )}

        {item.viewAllHref && hasColumns && (
          <Link
            href={item.viewAllHref}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="group mt-4 flex items-center justify-center gap-1.5 rounded-lg border-t border-sand pt-4 text-sm font-semibold text-maroon transition-colors hover:text-gold-dark"
          >
            {item.viewAllLabel ?? "View All"}
            <FiArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        )}

        {item.viewAllHref && !hasColumns && (
          <Link
            href={item.viewAllHref}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg border-t border-sand px-3 pt-3 text-sm font-semibold text-maroon transition-colors hover:text-gold-dark"
          >
            {item.viewAllLabel ?? "View All"}
          </Link>
        )}
      </div>
    </div>
  );
}
