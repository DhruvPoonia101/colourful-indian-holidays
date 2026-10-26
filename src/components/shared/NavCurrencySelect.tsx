"use client";

import { useId } from "react";
import { useCurrency } from "@/components/shared/CurrencyProvider";
import { CURRENCIES, isCurrencyCode } from "@/lib/currency";

/** Compact display-currency picker for the navbar and mobile menu. It shares
 * state with every other currency control, so changing it here updates every
 * price on the site. USD is the default. */
export function NavCurrencySelect({ className = "", showLabel = false }: { className?: string; showLabel?: boolean }) {
  const { currency, setCurrency } = useCurrency();
  const id = useId();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label
        htmlFor={id}
        className={showLabel ? "text-sm font-medium text-ink" : "sr-only"}
      >
        Show prices in
      </label>
      <select
        id={id}
        value={currency}
        onChange={(e) => {
          if (isCurrencyCode(e.target.value)) setCurrency(e.target.value);
        }}
        title="Show prices in your currency"
        className="h-9 cursor-pointer rounded-full border border-sand bg-white pl-2.5 pr-0.5 text-xs font-semibold text-ink hover:border-gold focus:border-gold focus:outline-none 2xl:pl-3 2xl:text-[13px]"
      >
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code}
          </option>
        ))}
      </select>
    </div>
  );
}
