"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MONTH_NAMES,
  MONTH_SLUGS,
  PLANNERS,
  RATING_LABEL,
  bestRanges,
  type Rating,
} from "@/content/when-to-go";

const CELL: Record<Rating, string> = {
  3: "border-maroon bg-maroon text-white",
  2: "border-gold bg-gold/30 text-ink",
  1: "border-sand bg-sand/50 text-ink-soft",
  0: "border-sand bg-white text-ink-soft/70",
};

/** Pick a destination, see which months are best, tap a month for the detail.
 * Server HTML shows the first destination with its best month selected. */
export function WhenToGoPlanner() {
  const [id, setId] = useState(PLANNERS[0].id);
  const planner = PLANNERS.find((p) => p.id === id) ?? PLANNERS[0];
  const firstBest = planner.ratings.findIndex((r) => r === 3);
  const [month, setMonth] = useState<number | null>(null);
  const selected = month ?? (firstBest >= 0 ? firstBest : 0);
  const rating = planner.ratings[selected];

  return (
    <div className="rounded-2xl border border-sand bg-white p-4 sm:p-6">
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-ink">Where are you going?</legend>
        <div className="flex flex-wrap gap-2">
          {PLANNERS.map((p) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={p.id === id}
              onClick={() => {
                setId(p.id);
                setMonth(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                p.id === id
                  ? "border-maroon bg-maroon text-white"
                  : "border-sand bg-cream/50 text-ink hover:border-gold"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="mt-4 text-sm text-ink-soft">{planner.intro}</p>
      <p className="mt-2 text-base font-semibold text-ink">
        Best months: {bestRanges(planner.ratings, 3)}.
      </p>

      <div role="group" aria-label="Months" className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-12">
        {MONTH_NAMES.map((name, i) => (
          <button
            key={name}
            type="button"
            aria-pressed={i === selected}
            onClick={() => setMonth(i)}
            className={`flex flex-col items-center rounded-xl border px-2 py-2 text-center transition-shadow ${CELL[planner.ratings[i]]} ${
              i === selected ? "ring-2 ring-ink ring-offset-2" : ""
            }`}
          >
            <span className="text-sm font-semibold">{name.slice(0, 3)}</span>
            <span className="text-[11px] uppercase tracking-wide">{RATING_LABEL[planner.ratings[i]]}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-gold/30 bg-cream/60 p-4" aria-live="polite">
        <p className="text-sm font-semibold text-ink">
          {MONTH_NAMES[selected]}: {RATING_LABEL[rating]}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{planner.notes[selected]}</p>
        <p className="mt-3 text-sm">
          <Link href={`/best-time-to-visit-india/${MONTH_SLUGS[selected]}`} className="font-semibold text-maroon underline">
            India in {MONTH_NAMES[selected]}, region by region
          </Link>
          {" · "}
          <Link href={planner.tourHref} className="font-semibold text-maroon underline">
            {planner.tourLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
