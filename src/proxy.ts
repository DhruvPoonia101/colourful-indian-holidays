import { NextResponse, type NextRequest } from "next/server";

/**
 * Permanently redirects legacy AMP URLs (`?amp=1`, left over from the old
 * WordPress site) to the same path without the `amp` parameter.
 *
 * This can't be a next.config redirect: those pass the query string through
 * to the destination, so `/x?amp=1 -> /x` would loop. The matcher's `has`
 * condition means this only runs for requests that actually carry `amp=1` —
 * every other request skips the proxy entirely.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.searchParams.delete("amp");
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "query", key: "amp", value: "1" }],
    },
  ],
};
