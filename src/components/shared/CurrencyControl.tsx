"use client";

import { useId } from "react";
import { useCurrency } from "@/components/shared/CurrencyProvider";
import { CURRENCIES, isCurrencyCode } from "@/lib/currency";

/** "Show prices in [USD ▾]" plus, once another currency is chosen, a short
 * note that the figure is an approximate conversion. */
export function CurrencyControl({ className = "", center = false }: { className?: string; center?: boolean }) {
  const { currency, setCurrency, live } = useCurrency();
  const id = useId();

  return (
    <div className={`flex flex-col items-center gap-1.5 ${center ? "" : "sm:items-start"} ${className}`}>
      <div className="flex items-center gap-2 text-xs text-ink-soft">
        <label htmlFor={id} className="font-medium">
          Show prices in
        </label>
        <select
          id={id}
          value={currency}
          onChange={(e) => {
            if (isCurrencyCode(e.target.value)) setCurrency(e.target.value);
          }}
          className="rounded-full border border-sand bg-white px-3 py-1.5 text-xs font-semibold text-ink focus:border-gold focus:outline-none"
        >
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} — {c.label}
            </option>
          ))}
        </select>
      </div>
      {currency !== "USD" && (
        <p className={`text-xs italic text-ink-soft/70 ${center ? "text-center" : "text-center sm:text-left"}`}>
          Approximate conversion from USD{live ? " at today's rate" : ""}; your final quote is confirmed in INR or USD.{" "}
          <a
            href="https://www.exchangerate-api.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Rates by Exchange Rate API
          </a>
        </p>
      )}
    </div>
  );
}
