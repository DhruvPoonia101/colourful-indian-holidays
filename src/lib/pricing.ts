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

/**
 * Per-person, per-night starting rates by trip zone. The India comfort rate is
 * the one above. The others were set by Dhruv on 25 Oct 2026 after a
 * competitor price check, because one rate cannot fit every destination:
 *
 * - luxury $250: Top Indian Holidays prices 5-star/palace trips at
 *   $250-600+/day and 7-day palace Golden Triangle at $3,170-5,130.
 * - bhutan $300: Bhutan's Sustainable Development Fee alone is $100 per
 *   person per night (confirmed through 31 Aug 2027, littlebhutan.com), and
 *   private trips run $250-450/day all-in (littlebhutan.com), $265-360 for
 *   comfortable (Druk Asia).
 * - nepal $120: private Nepal trips run about $107-200/night (Luxury Holidays
 *   Nepal private double $749 for 7 nights; OnTheGoTours private 4-star 9 days
 *   from $1,600; a 3-star private 9 days sells for about $1,400-1,500).
 * - kashmir $100 and ladakh $120: public listings are Indian domestic
 *   packages at roughly $40-55/night (e.g. 5N Ladakh 3-star with private cab
 *   INR 21,999), so these sit well above them to cover a guide, better hotels
 *   and margin. No international-operator benchmark was found for either.
 */
export type PriceZone = "india" | "luxury" | "bhutan" | "nepal" | "kashmir" | "ladakh";

export const RATE_PER_NIGHT_USD: Record<PriceZone, number> = {
  india: PRICE_PER_NIGHT_USD,
  luxury: 250,
  bhutan: 300,
  nepal: 120,
  kashmir: 100,
  ladakh: 120,
};

/** Nights spent in each zone. Anything not listed is plain India comfort. */
export type NightSplit = Partial<Record<PriceZone, number>>;

/** Packages that are not plain India comfort. Night counts come from each
 * itinerary (a night is counted where the traveller sleeps). */
const PACKAGE_SPLITS: Record<string, NightSplit> = {
  "bhutan-tours": { bhutan: 7 },
  "india-bhutan-tours": { india: 5, bhutan: 5 },
  "india-nepal-bhutan-tours": { india: 3, nepal: 3, bhutan: 5 },
  "india-nepal-tours": { india: 5, nepal: 5 },
  "nepal-bhutan-tours": { nepal: 5, bhutan: 6 },
  "nepal-tours": { nepal: 7 },
  "kashmir-ladakh-tours-classic": { kashmir: 3, ladakh: 5 },
  "kashmir-valley-tour": { kashmir: 4 },
  "ladakh-tour": { ladakh: 5 },
};

/** Experiences that are not plain India comfort: the whole trip is priced at
 * one zone's rate. */
const EXPERIENCE_ZONE: Record<string, PriceZone> = {
  "luxury-india-tours": "luxury",
  "palace-fort-tours": "luxury",
  "rajasthan-palace-honeymoon": "luxury",
  "everest-region": "nepal",
  lumbini: "nepal",
  "kashmir-honeymoon": "kashmir",
  "trekking-tours": "ladakh",
};

export const PRICE_DISCLAIMER =
  "*Indicative price in USD. Final quote provided in INR or USD based on your preference. Price varies by travel dates, group size and hotel category.";

function nightsFor(itineraryDays: number): number {
  return Math.max(itineraryDays - 1, 1);
}

function priceFromSplit(split: NightSplit): number {
  return (Object.entries(split) as [PriceZone, number][]).reduce(
    (sum, [zone, nights]) => sum + nights * RATE_PER_NIGHT_USD[zone],
    0
  );
}

/** itineraryDays is the package's total day count (its itinerary array
 * length) — nights are always one less than days for a standard trip.
 * India comfort rate only; prefer the slug-aware helpers below. */
export function getStartingPrice(itineraryDays: number): number {
  return nightsFor(itineraryDays) * PRICE_PER_NIGHT_USD;
}

/** Starting price for a /tours/ package, honouring Bhutan, Nepal, Kashmir and
 * Ladakh rates and multi-country night splits. */
export function getPackageStartingPrice(slug: string, itineraryDays: number): number {
  const split = PACKAGE_SPLITS[slug];
  return split ? priceFromSplit(split) : getStartingPrice(itineraryDays);
}

/** Starting price for an /experiences/ page. */
export function getExperienceStartingPrice(slug: string, itineraryDays: number): number {
  const zone = EXPERIENCE_ZONE[slug] ?? "india";
  return nightsFor(itineraryDays) * RATE_PER_NIGHT_USD[zone];
}

/** Pieces of "From $2,100 for 7 nights", so the amount can be swapped for a
 * converted one: prefix + amount + suffix. */
export function fromPriceParts(itineraryDays: number): { prefix: string; suffix: string } {
  const nights = nightsFor(itineraryDays);
  return { prefix: "From ", suffix: ` for ${nights} ${nights === 1 ? "night" : "nights"}` };
}

/** "From $2,100 for 7 nights" — the wording shown in the Starting From fact. */
export function formatFromPrice(price: number, itineraryDays: number): string {
  const nights = nightsFor(itineraryDays);
  return `From $${price.toLocaleString("en-US")} for ${nights} ${nights === 1 ? "night" : "nights"}`;
}

export function formatStartingPrice(itineraryDays: number): string {
  return `From $${getStartingPrice(itineraryDays).toLocaleString("en-US")}`;
}
