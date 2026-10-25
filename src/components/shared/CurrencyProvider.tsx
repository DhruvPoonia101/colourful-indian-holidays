"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  CURRENCY_STORAGE_KEY,
  FALLBACK_RATES,
  detectCurrency,
  formatMoney,
  isCurrencyCode,
  type CurrencyCode,
  type Rates,
} from "@/lib/currency";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  live: boolean;
  format: (usd: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
  live: false,
  format: (usd) => formatMoney(usd, "USD", FALLBACK_RATES),
});

export function useCurrency() {
  return useContext(CurrencyContext);
}

/**
 * Holds the visitor's display currency. The server always renders USD (so
 * crawlers and no-JS visitors see the real authored price); after hydration
 * the saved choice, or a guess from the browser language, takes over.
 */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [rates, setRates] = useState<Rates>(FALLBACK_RATES);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
    } catch {
      /* storage blocked — fall through to detection */
    }
    setCurrencyState(isCurrencyCode(saved) ? saved : detectCurrency(navigator.language));
  }, []);

  useEffect(() => {
    if (currency === "USD") return; // nothing to convert yet
    let cancelled = false;
    fetch("/api/rates")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { live?: boolean; rates?: Rates } | null) => {
        if (cancelled || !data?.rates) return;
        setRates({ ...FALLBACK_RATES, ...data.rates });
        setLive(Boolean(data.live));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [currency]);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<CurrencyContextValue>(
    () => ({ currency, setCurrency, live, format: (usd) => formatMoney(usd, currency, rates) }),
    [currency, setCurrency, live, rates]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}
