import { PRICE_DISCLAIMER } from "@/lib/pricing";

/**
 * A small "Tours from $X" strip for the 9 tour pillar hub pages (Golden
 * Triangle, Kerala, Rajasthan Tours, etc.) — pages that list several
 * individual tour variants rather than being one fixed itinerary
 * themselves, so they don't use PackagePageTemplate's own computed price.
 *
 * The price passed in isn't a separate guess for the hub — it's the real,
 * already-computed starting price of whichever linked variant on that hub
 * is actually the shortest/cheapest, using the exact same $100/night rate
 * from src/lib/pricing.ts. See each hub page's own usage for which real
 * variant that price traces back to.
 */
export function TourHubStartingPrice({ price }: { price: number }) {
  return (
    <div className="border-b border-sand/70 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center sm:px-8">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink">Tours from ${price.toLocaleString("en-US")} per person</span>
        </p>
        <p className="mt-1 text-xs italic text-ink-soft/70">{PRICE_DISCLAIMER}</p>
      </div>
    </div>
  );
}
