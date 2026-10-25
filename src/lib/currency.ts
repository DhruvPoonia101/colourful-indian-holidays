/**
 * Display-currency support. All prices in the content are authored in USD
 * (src/lib/pricing.ts) and schema.org markup stays in USD; the visitor can
 * switch the displayed amount to another currency. Conversion is for
 * reference only — the final quote is confirmed in INR or USD.
 */
export type CurrencyCode = "USD" | "GBP" | "EUR" | "AUD" | "CAD" | "INR";

export type CurrencyInfo = {
  code: CurrencyCode;
  label: string;
  /** Intl locale used only to format the number and symbol. */
  locale: string;
  /** Round converted amounts to this step so "from" prices stay tidy. */
  roundTo: number;
};

export const CURRENCIES: CurrencyInfo[] = [
  { code: "USD", label: "US Dollar", locale: "en-US", roundTo: 1 },
  { code: "GBP", label: "British Pound", locale: "en-US", roundTo: 10 },
  { code: "EUR", label: "Euro", locale: "en-US", roundTo: 10 },
  { code: "AUD", label: "Australian Dollar", locale: "en-US", roundTo: 10 },
  { code: "CAD", label: "Canadian Dollar", locale: "en-US", roundTo: 10 },
  { code: "INR", label: "Indian Rupee", locale: "en-IN", roundTo: 500 },
];

export type Rates = Record<CurrencyCode, number>;

/** Approximate USD→X rates, used only until the live rates load or if the
 * rates service is unreachable. Not shown as "live". */
export const FALLBACK_RATES: Rates = {
  USD: 1,
  GBP: 0.76,
  EUR: 0.87,
  AUD: 1.53,
  CAD: 1.39,
  INR: 88,
};

export const CURRENCY_STORAGE_KEY = "cih-currency";

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return CURRENCIES.some((c) => c.code === value);
}

/** Guess a sensible default from the browser language, e.g. en-GB → GBP.
 * No IP lookup, so no third-party call and no consent question. */
export function detectCurrency(language: string | undefined): CurrencyCode {
  const lang = (language ?? "").toLowerCase();
  if (lang.endsWith("-gb") || lang.endsWith("-uk")) return "GBP";
  if (lang.endsWith("-au") || lang.endsWith("-nz")) return "AUD";
  if (lang.endsWith("-ca")) return "CAD";
  if (lang.endsWith("-in")) return "INR";
  if (/^(de|fr|it|es|nl|pt|fi|el|sv|da|pl)(-|$)/.test(lang) && !lang.endsWith("-ch")) return "EUR";
  if (/-(ie|at|be|lu|mt|cy|sk|si|ee|lv|lt)$/.test(lang)) return "EUR";
  return "USD";
}

export function formatMoney(usd: number, code: CurrencyCode, rates: Rates): string {
  const info = CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
  const rate = rates[code] ?? 1;
  const converted = usd * rate;
  const amount = info.roundTo > 1 ? Math.round(converted / info.roundTo) * info.roundTo : Math.round(converted);
  return new Intl.NumberFormat(info.locale, {
    style: "currency",
    currency: code,
    maximumFractionDigits: 0,
  }).format(amount);
}
