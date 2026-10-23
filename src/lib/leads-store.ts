/**
 * Long-term storage for every website enquiry (Supabase / Postgres).
 *
 * Why this exists: the email to mail@colourfulindianholidays.com is the
 * real-time alert, but an inbox is a poor system of record. Every enquiry is
 * also written to the `cih_enquiries` table so it can be searched, filtered
 * by status, exported and followed up long after the email is buried.
 *
 * Design rules:
 *  - SERVER ONLY. It uses the service-role key, which bypasses row-level
 *    security. Never import this from a client component and never prefix
 *    the env vars with NEXT_PUBLIC_.
 *  - Never throws. A storage outage must not break a form; callers get a
 *    boolean and decide what to do (the routes treat "saved OR emailed" as
 *    success, so a lead is only reported as failed if BOTH channels fail).
 *  - Plain fetch against Supabase's REST API — no extra npm dependency.
 *
 * Required env vars (Vercel → Project → Settings → Environment Variables):
 *   CIH_SUPABASE_URL           e.g. https://ksbgvwocxpxglosuwsww.supabase.co
 *   CIH_SUPABASE_SERVICE_KEY   service_role key (Supabase → Settings → API Keys)
 * If either is missing the function logs a warning and returns false, so the
 * site keeps working on email alone until they are set.
 */

export type LeadSource =
  | "contact"
  | "quote"
  | "trip_planner_step1"
  | "trip_planner_step2";

export type LeadRecord = {
  source: LeadSource;
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  destination?: string;
  travelDate?: string;
  travelMonth?: string;
  tripDays?: string;
  travellers?: string;
  message?: string;
  pageName?: string;
  pageUrl?: string;
  ip?: string;
  approxLocation?: string;
  flaggedFast?: boolean;
  /** Anything that has no dedicated column (e.g. formType, route, date). */
  extra?: Record<string, unknown>;
};

const SAVE_TIMEOUT_MS = 4000;
const MAX_FIELD_LENGTH = 5000;

function clean(value: string | undefined): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, MAX_FIELD_LENGTH) : null;
}

/** Saves one enquiry. Resolves true only if Supabase confirmed the insert. */
export async function saveLead(lead: LeadRecord): Promise<boolean> {
  const url = process.env.CIH_SUPABASE_URL;
  const key = process.env.CIH_SUPABASE_SERVICE_KEY;

  if (!url || !key) {
    console.warn(
      "CIH_SUPABASE_URL / CIH_SUPABASE_SERVICE_KEY not set — enquiry was not stored in Supabase."
    );
    return false;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SAVE_TIMEOUT_MS);

  try {
    const response = await fetch(`${url.replace(/\/+$/, "")}/rest/v1/cih_enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        source: lead.source,
        full_name: clean(lead.fullName),
        email: clean(lead.email),
        phone: clean(lead.phone),
        country: clean(lead.country),
        destination: clean(lead.destination),
        travel_date: clean(lead.travelDate),
        travel_month: clean(lead.travelMonth),
        trip_days: clean(lead.tripDays),
        travellers: clean(lead.travellers),
        message: clean(lead.message),
        page_name: clean(lead.pageName),
        page_url: clean(lead.pageUrl),
        ip: clean(lead.ip),
        approx_location: clean(lead.approxLocation),
        flagged_fast: lead.flaggedFast === true,
        extra: lead.extra ?? {},
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase lead insert failed:", response.status, await response.text());
      return false;
    }

    return true;
  } catch (err) {
    console.error("Supabase lead insert threw:", err);
    return false;
  } finally {
    clearTimeout(timer);
  }
}
