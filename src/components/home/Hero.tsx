"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";
import { heroCopy, heroSlides } from "@/content/home";

const ROTATE_MS = 3000;
const CROSSFADE_EASE = [0.32, 0, 0.67, 0] as const;

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 80, opacity: 0, scale: 1.04 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir * -80, opacity: 0, scale: 0.97 }),
};

const slideVariantsReduced = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, ROTATE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion]);

  return (
    <section
      className="relative flex min-h-[calc(78svh-var(--header-height,88px))] w-full items-end overflow-hidden bg-ink text-ivory sm:min-h-[calc(96vh-var(--header-height,88px))]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} initial={false} mode="sync">
          <motion.div
            key={heroSlides[activeIndex].src}
            custom={direction}
            variants={prefersReducedMotion ? slideVariantsReduced : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: CROSSFADE_EASE }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeIndex].src}
              alt={heroSlides[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: heroSlides[activeIndex].focalPoint }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SectionEyebrow tone="dark">{heroCopy.eyebrow}</SectionEyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl"
        >
          {heroCopy.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
        >
          {heroCopy.subheadline}
        </motion.p>

        <div className="mt-8 flex items-center gap-3">
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-ivory/50 p-1"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-ivory/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
