/**
 * Single source of truth for the researched tour-pricing rate, shared by
 * PackagePageTemplate (individual tour packages) and the tour pillar hub
 * pages (Golden Triangle, Kerala, etc.), so both compute from the exact
 * same number rather than two independently-maintained copies drifting
 * apart over time.
 *
 * $100/person/night — benchmarked against multiple real competitor
 * operators offering the same tier of trip (private car + driver,
 * English-speaking guide, 3-4 star / comfortable heritage hotels — the
 * tier this business actually operates in, not budget or ultra-luxury).
 * Independent sources converge on roughly $90-130/person/day for that
 * tier (driverindiatour.com's "Comfort" tier: $90/day; tajmahaldaytour.net's
 * mid-range Rajasthan tier: $110-195/day; Crystal India Holidays' real
 * per-day Golden Triangle prices worked out to $89-121/day across their
 * 4-7 day packages). $100/night sits centrally in that real range.
 *
 * Explicitly authorized by Dhruv (30 Sep 2026) to replace the prior
 * "Price on Request" default. This is a researched, competitively-
 * benchmarked starting price, not an internally-confirmed exact rate —
 * shown to customers with a disclaimer qualifying it as indicative
 * (see PRICE_DISCLAIMER below), matching what this comment says
 * internally.
 */
export const PRICE_PER_NIGHT_USD = 100;

export const PRICE_DISCLAIMER =
  "*Indicative price in USD. Final quote provided in INR or USD based on your preference. Price varies by travel dates, group size and hotel category.";

/** itineraryDays is the package's total day count (its itinerary array
 * length) — nights are always one less than days for a standard trip. */
export function getStartingPrice(itineraryDays: number): number {
  const nights = Math.max(itineraryDays - 1, 1);
  return nights * PRICE_PER_NIGHT_USD;
}

export function formatStartingPrice(itineraryDays: number): string {
  return `From $${getStartingPrice(itineraryDays).toLocaleString("en-US")}`;
}
