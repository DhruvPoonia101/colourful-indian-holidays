"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiShield, FiUsers, FiMessageCircle, FiHome } from "react-icons/fi";
import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";
import { heroCopy, heroFeatureBadges, heroSlides } from "@/content/home";

const BADGE_ICONS = {
  shield: FiShield,
  users: FiUsers,
  chat: FiMessageCircle,
  home: FiHome,
} as const;

const ROTATE_MS = 3000;
/** Wait this long after the page has loaded before the first slide change. */
const START_DELAY_MS = 4000;

/**
 * Performance notes (Lighthouse baseline, Nov 2026):
 * - The slideshow used to animate with framer-motion (x, scale and opacity
 *   on the main thread) and the headline, intro and badges started at
 *   opacity 0 until hydration. That gave the homepage ~4.5 s of total
 *   blocking time and delayed LCP in the lab test.
 * - Slides now cross-fade with a CSS opacity transition (runs on the
 *   compositor), text renders visible in the server HTML, only the first
 *   slide is preloaded, each later slide is mounted just before it is
 *   shown, and rotation starts a few seconds after load and pauses while
 *   the hero is off-screen or the tab is hidden.
 */
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0]));
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [canRotate, setCanRotate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Respect the user's reduced-motion setting.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Start rotating only once the page has finished loading, plus a delay.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const start = () => {
      timer = setTimeout(() => setCanRotate(true), START_DELAY_MS);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      clearTimeout(timer);
    };
  }, []);

  // Pause while the hero is scrolled out of view or the tab is hidden.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(node);
    const onVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Mount the next slide's image ahead of time so it is decoded before it fades in.
  useEffect(() => {
    const next = (activeIndex + 1) % heroSlides.length;
    setMounted((prev) => {
      if (prev.has(activeIndex) && prev.has(next)) return prev;
      const updated = new Set(prev);
      updated.add(activeIndex);
      if (canRotate) updated.add(next);
      return updated;
    });
  }, [activeIndex, canRotate]);

  useEffect(() => {
    if (!canRotate || isPaused || !isVisible || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [canRotate, isPaused, isVisible, reducedMotion]);

  const goTo = (index: number) => {
    setMounted((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(78svh-var(--header-height,88px))] w-full items-end overflow-hidden bg-ink text-ivory sm:min-h-[calc(95svh-var(--header-height,88px))]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) =>
          mounted.has(index) ? (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index === activeIndex ? undefined : true}
            >
              <Image
                src={slide.src}
                alt={index === activeIndex ? slide.alt : ""}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.focalPoint }}
              />
            </div>
          ) : null
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-20">
        <SectionEyebrow tone="dark">{heroCopy.eyebrow}</SectionEyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
          {heroCopy.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          {heroCopy.subheadline}
        </p>

        <div className="mt-5 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4">
          {heroFeatureBadges.map((badge) => {
            const Icon = BADGE_ICONS[badge.icon];
            return (
              <div
                key={badge.label}
                className="rounded-2xl border border-ivory/15 bg-ivory/10 p-3 backdrop-blur-md"
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-gold-light" />
                <p className="mt-2 text-sm font-medium leading-snug text-ivory">{badge.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}: ${slide.alt}`}
              aria-current={index === activeIndex}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-gold" : "w-4 bg-ivory/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center" aria-hidden="true">
        <div className="h-9 w-5 rounded-full border border-ivory/50 p-1 motion-safe:animate-bounce">
          <span className="block h-1.5 w-1.5 rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  );
}
