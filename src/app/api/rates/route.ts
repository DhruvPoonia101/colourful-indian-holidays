import { NextResponse } from "next/server";
import { CURRENCIES, FALLBACK_RATES, type Rates } from "@/lib/currency";

// Exchange rates for the price currency switcher, from ExchangeRate-API.
// With EXCHANGE_RATE_API_KEY set (Vercel env var, server-side only) it uses the
// keyed v6 endpoint, so rates refresh as often as the plan allows. Without a
// key it falls back to their keyless open endpoint (about one update a day).
// The upstream fetch is cached for one hour, and if it fails the approximate
// fallback rates are returned flagged as not live.
export const dynamic = "force-dynamic";

const CACHE_SECONDS = 60 * 60;

export async function GET() {
  try {
    const key = process.env.EXCHANGE_RATE_API_KEY;
    const url = key
      ? `https://v6.exchangerate-api.com/v6/${encodeURIComponent(key)}/latest/USD`
      : "https://open.er-api.com/v6/latest/USD";
    const res = await fetch(url, {
      next: { revalidate: CACHE_SECONDS },
    });
    if (!res.ok) throw new Error(`rates ${res.status}`);
    const data = (await res.json()) as {
      result?: string;
      rates?: Record<string, number>;
      conversion_rates?: Record<string, number>;
    };
    // The keyed endpoint returns `conversion_rates`, the open one `rates`.
    const table = data.conversion_rates ?? data.rates;
    if (data.result !== "success" || !table) throw new Error("bad payload");

    const rates = { ...FALLBACK_RATES };
    for (const { code } of CURRENCIES) {
      const value = table[code];
      if (typeof value === "number" && value > 0 && Number.isFinite(value)) {
        rates[code] = value;
      }
    }
    rates.USD = 1;

    return NextResponse.json(
      { live: true, rates: rates satisfies Rates },
      { headers: { "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400` } }
    );
  } catch {
    return NextResponse.json(
      { live: false, rates: FALLBACK_RATES },
      { headers: { "Cache-Control": "public, s-maxage=300" } }
    );
  }
}
