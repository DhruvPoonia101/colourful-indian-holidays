#!/usr/bin/env node
/**
 * IndexNow submission script.
 *
 * IndexNow is a protocol supported by Bing and Yandex (Google does not
 * participate as of this writing) that lets a site proactively push
 * "this URL changed" notifications instead of waiting for a crawler to
 * rediscover it on its own schedule. Two pieces make this work:
 *
 *   1. A key file at https://colourfulindianholidays.com/<key>.txt
 *      containing exactly the key — this proves domain ownership.
 *      Already created: public/dfe69b4e74cd1b0b48ae4364b0b3ba34.txt
 *
 *   2. Actually submitting URLs, which is what this script does. It
 *      does NOT duplicate the site's URL list — it fetches the site's
 *      own live sitemap.xml and parses the <loc> entries out of it, so
 *      it always reflects whatever the real sitemap says, with nothing
 *      to keep in sync by hand.
 *
 * USAGE
 *   node scripts/submit-indexnow.mjs
 *   (or: npm run indexnow)
 *
 * This is deliberately a manual, run-it-yourself script rather than
 * something wired into an automatic deploy hook — setting up a Vercel
 * deploy hook or GitHub Action to run this automatically after every
 * push is a real, reasonable next step, but it touches your deployment
 * pipeline directly, which needs your own setup and sign-off rather
 * than a change I can safely make from here.
 *
 * Google does not consume IndexNow submissions; this only reaches
 * Bing and Yandex. Google still discovers new/changed pages via the
 * sitemap and normal crawling, which are already correctly set up.
 */

const SITE_URL = "https://colourfulindianholidays.com";
const INDEXNOW_KEY = "dfe69b4e74cd1b0b48ae4364b0b3ba34";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap.xml: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

async function submitToIndexNow(urls) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // IndexNow returns 200 or 202 on success; other 2xx/4xx codes are
  // documented at https://www.indexnow.org/documentation
  console.log(`IndexNow responded: ${res.status} ${res.statusText}`);
  if (!res.ok && res.status !== 202) {
    const text = await res.text().catch(() => "");
    console.error("Response body:", text);
    process.exitCode = 1;
  }
}

async function main() {
  console.log("Fetching URLs from live sitemap.xml...");
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs.`);

  if (urls.length === 0) {
    console.error("No URLs found in sitemap.xml — aborting without submitting anything.");
    process.exitCode = 1;
    return;
  }

  // IndexNow accepts up to 10,000 URLs per request; this site has far
  // fewer, so one request covers everything.
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  await submitToIndexNow(urls);
  console.log("Done.");
}

main().catch((err) => {
  console.error("IndexNow submission failed:", err);
  process.exitCode = 1;
});
