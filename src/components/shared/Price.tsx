"use client";

import { useCurrency } from "@/components/shared/CurrencyProvider";

/** A USD price shown in the visitor's chosen currency. Renders as ONE text
 * string (prefix + amount + suffix) so the server HTML reads, for example,
 * "From $2,100 for 7 nights" with no markup in the middle. */
export function Price({
  usd,
  prefix = "",
  suffix = "",
}: {
  usd: number;
  prefix?: string;
  suffix?: string;
}) {
  const { format } = useCurrency();
  return <>{`${prefix}${format(usd)}${suffix}`}</>;
}
