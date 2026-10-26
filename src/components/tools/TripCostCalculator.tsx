"use client";

import { useState } from "react";
import Link from "next/link";
import { Price } from "@/components/shared/Price";
import { CurrencyControl } from "@/components/shared/CurrencyControl";
import { PRICE_DISCLAIMER, RATE_PER_NIGHT_USD, type PriceZone } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/whatsapp";

type ZoneRow = { zone: PriceZone; label: string; note: string };

const ROWS: ZoneRow[] = [
  { zone: "india", label: "India, 3-4 star", note: "Comfortable hotels, private car and guide" },
  { zone: "luxury", label: "India, 5-star & palace", note: "Heritage palaces and luxury hotels" },
  { zone: "nepal", label: "Nepal", note: "Kathmandu, Pokhara, Chitwan" },
  { zone: "bhutan", label: "Bhutan", note: "Includes the government fee and visa" },
  { zone: "kashmir", label: "Kashmir", note: "Srinagar and the valley" },
  { zone: "ladakh", label: "Ladakh", note: "Leh and the high plateau" },
];

type Nights = Record<PriceZone, number>;
const ZERO: Nights = { india: 0, luxury: 0, nepal: 0, bhutan: 0, kashmir: 0, ladakh: 0 };

/** Presets use the night counts of our real trips (see PACKAGE_SPLITS). */
const PRESETS: { label: string; nights: Nights }[] = [
  { label: "Golden Triangle · 5 nights", nights: { ...ZERO, india: 5 } },
  { label: "Rajasthan circuit · 11 nights", nights: { ...ZERO, india: 11 } },
  { label: "India + Nepal · 5 + 5", nights: { ...ZERO, india: 5, nepal: 5 } },
  { label: "India + Bhutan · 5 + 5", nights: { ...ZERO, india: 5, bhutan: 5 } },
  { label: "Bhutan · 7 nights", nights: { ...ZERO, bhutan: 7 } },
];

const MAX_NIGHTS = 30;

export function TripCostCalculator() {
  const [nights, setNights] = useState<Nights>({ ...ZERO, india: 6 });
  const [travellers, setTravellers] = useState(2);

  const totalNights = ROWS.reduce((sum, r) => sum + nights[r.zone], 0);
  const perPerson = ROWS.reduce((sum, r) => sum + nights[r.zone] * RATE_PER_NIGHT_USD[r.zone], 0);
  const groupTotal = perPerson * travellers;

  function step(zone: PriceZone, delta: number) {
    setNights((n) => ({ ...n, [zone]: Math.min(MAX_NIGHTS, Math.max(0, n[zone] + delta)) }));
  }

  const summary = ROWS.filter((r) => nights[r.zone] > 0)
    .map((r) => `${nights[r.zone]} nights ${r.label}`)
    .join(", ");
  const message = `Hi! I used your trip cost calculator: ${summary || "no nights selected"}, ${travellers} traveller${
    travellers === 1 ? "" : "s"
  }. Could you send me a quote?`;

  return (
    <div className="rounded-2xl border border-sand bg-white p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-sand/70 pb-4">
        <label htmlFor="travellers" className="text-sm font-semibold text-ink">
          Travellers
        </label>
        <select
          id="travellers"
          value={travellers}
          onChange={(e) => setTravellers(Number(e.target.value))}
          className="rounded-full border border-sand bg-white px-4 py-2 text-sm font-semibold text-ink focus:border-gold focus:outline-none"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-semibold text-ink">Start from a trip, or build your own</legend>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setNights(p.nights)}
              className="rounded-full border border-sand bg-cream/50 px-3 py-1.5 text-xs font-semibold text-ink hover:border-gold sm:text-sm"
            >
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 flex items-center justify-between gap-3 px-3 text-xs font-semibold uppercase tracking-wide text-ink-soft sm:px-4">
        <span className="pl-px">Where you stay</span>
        <span className="w-[7.25rem] text-center leading-tight">Number of nights</span>
      </div>
      <div className="mt-2 divide-y divide-sand/70 rounded-xl border border-sand">
        {ROWS.map((r) => (
          <div key={r.zone} className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{r.label}</p>
              <p className="text-xs text-ink-soft">
                {r.note} · from <Price usd={RATE_PER_NIGHT_USD[r.zone]} /> a night
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label={`Remove a night in ${r.label}`}
                onClick={() => step(r.zone, -1)}
                className="h-9 w-9 rounded-full border border-sand text-lg font-semibold text-ink hover:border-gold"
              >
                −
              </button>
              <span className="w-7 text-center text-sm font-semibold tabular-nums text-ink" aria-label={`${nights[r.zone]} nights in ${r.label}`}>
                {nights[r.zone]}
              </span>
              <button
                type="button"
                aria-label={`Add a night in ${r.label}`}
                onClick={() => step(r.zone, 1)}
                className="h-9 w-9 rounded-full border border-sand text-lg font-semibold text-ink hover:border-gold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-gold/30 bg-cream/60 p-4 text-center" aria-live="polite">
        {totalNights === 0 ? (
          <p className="text-sm text-ink-soft">Add at least one night to see a price.</p>
        ) : (
          <>
            <p className="text-sm text-ink-soft">
              {totalNights} {totalNights === 1 ? "night" : "nights"} · {totalNights + 1} days
            </p>
            <p className="mt-1 font-display text-3xl text-ink">
              From <Price usd={perPerson} /> <span className="text-base font-sans text-ink-soft">per person</span>
            </p>
            {travellers > 1 && (
              <p className="mt-1 text-sm text-ink-soft">
                About <Price usd={groupTotal} /> for {travellers} travellers
              </p>
            )}
          </>
        )}
      </div>

      <CurrencyControl className="mt-4" center />

      <p className="mt-4 text-xs italic text-ink-soft/80">
        Per person, two sharing, flights excluded. {PRICE_DISCLAIMER.replace(/^\*/, "")} Solo travellers usually pay a single supplement, so
        ask us for a quote.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Get an exact quote on WhatsApp
        </a>
        <Link href="/contact" className="rounded-full border border-maroon px-5 py-3 text-sm font-semibold text-maroon hover:bg-maroon/5">
          Or send an enquiry
        </Link>
      </div>
    </div>
  );
}
