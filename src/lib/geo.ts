/**
 * Best-effort reverse-IP geolocation, used only to tag lead emails with the
 * visitor's approximate location — never shown to the visitor, never asked
 * of them, and never blocks a submission if the lookup fails or is slow.
 * Uses ipapi.co's free, keyless endpoint; on any error or timeout we just
 * fall back to showing the raw IP address.
 */

export type GeoInfo = {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
};

const LOOKUP_TIMEOUT_MS = 2500;

export async function getApproxLocation(ip: string): Promise<GeoInfo> {
  if (!ip || ip === "unknown") {
    return { ip };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return { ip };
    }

    const data = (await response.json()) as {
      city?: string;
      region?: string;
      country_name?: string;
      error?: boolean;
    };

    if (data.error) {
      return { ip };
    }

    return {
      ip,
      city: data.city,
      region: data.region,
      country: data.country_name,
    };
  } catch {
    // Network hiccup, timeout, or lookup provider down — never let this
    // hold up or fail a real lead submission.
    return { ip };
  }
}

/** Formats a GeoInfo into a single readable line, e.g. "Austin, Texas, United States". */
export function formatLocation(geo: GeoInfo): string {
  const parts = [geo.city, geo.region, geo.country].filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : "Unknown";
}
