import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/seo/business";
import { formatLocation, getApproxLocation } from "@/lib/geo";
import { saveLead } from "@/lib/leads-store";
import {
  getClientIp,
  isHoneypotFilled,
  isRateLimited,
  isSubmittedTooFast,
  verifyTurnstileToken,
} from "@/lib/spam-protection";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type QuotePayload = {
  formType?: "tour" | "carRental";
  fullName?: string;
  email?: string;
  phone?: string;
  travelMonth?: string;
  travellers?: string;
  route?: string;
  date?: string;
  message?: string;
  pageName?: string;
  pageUrl?: string;
  companyWebsite?: string;
  formLoadedAt?: number;
  turnstileToken?: string;
};

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    formType,
    fullName,
    email,
    phone,
    travelMonth,
    travellers,
    route,
    date,
    message,
    pageName,
    pageUrl,
    companyWebsite,
    formLoadedAt,
    turnstileToken,
  } = body;

  // Honeypot: only a bot fills a field it cannot see, so answer as though
  // the submission worked rather than telling the bot it was caught.
  if (isHoneypotFilled(companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  // Time-trap: NEVER rejects. A real visitor must never see an error or have
  // to resend (autofill and fast typists legitimately beat any threshold), so
  // a fast submission is still processed and emailed — it is only tagged in
  // the subject so a suspected bot is easy to spot in the inbox. Turnstile
  // (required client-side and verified below) is the actual bot gate.
  const isFast = isSubmittedTooFast(formLoadedAt);
  const fastTag = isFast ? "[Check: very fast submit] " : "";

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  const humanVerified = await verifyTurnstileToken(turnstileToken, ip);
  if (!humanVerified) {
    return NextResponse.json(
      { error: "We couldn't verify you're human. Please try again." },
      { status: 400 }
    );
  }

  const baseValid = Boolean(fullName && email && EMAIL_REGEX.test(email) && phone);
  const isCarRental = formType === "carRental";
  const detailsValid = isCarRental ? Boolean(route && date) : Boolean(travelMonth && travellers);

  if (!baseValid || !detailsValid) {
    return NextResponse.json(
      {
        error: isCarRental
          ? "Please fill in your name, email, phone, route, and travel date."
          : "Please fill in your name, email, phone, preferred travel month, and number of travellers.",
      },
      { status: 400 }
    );
  }

  const geo = await getApproxLocation(ip);

  // Store first, email second: the database row is the permanent record and
  // the email is the alert. The enquiry counts as received if EITHER worked,
  // so a Resend hiccup (or a Supabase one) never makes a visitor retry.
  const saved = await saveLead({
    source: "quote",
    fullName,
    email,
    phone,
    destination: route,
    travelDate: date,
    travelMonth,
    travellers,
    message,
    pageName,
    pageUrl,
    extra: { formType: formType ?? "tour" },
    ip: geo.ip,
    approxLocation: formatLocation(geo),
    flaggedFast: isFast,
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — quote request was not emailed.");
    return saved
      ? NextResponse.json({ ok: true })
      : NextResponse.json(
          { error: "Email sending isn't configured yet. Please try WhatsApp or call us instead." },
          { status: 500 }
        );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Colourful Indian Holidays <${BUSINESS.email}>`,
      to: BUSINESS.email,
      replyTo: email,
      subject: `${fastTag}New Quote Request — ${pageName ?? "General"} (${fullName})`,
      html: `
        <h2>New "Get a Free Quote" request</h2>
        <p><strong>Page:</strong> ${pageName ?? "Not specified"}</p>
        ${pageUrl ? `<p><strong>Submitted From:</strong> <a href="${pageUrl}">${pageUrl}</a></p>` : ""}
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        ${route ? `<p><strong>Route / Destination:</strong> ${route}</p>` : ""}
        ${date ? `<p><strong>Travel Date:</strong> ${date}</p>` : ""}
        ${travelMonth ? `<p><strong>Preferred Travel Month:</strong> ${travelMonth}</p>` : ""}
        ${travellers ? `<p><strong>Number of Travellers:</strong> ${travellers}</p>` : ""}
        ${message ? `<p><strong>${isCarRental ? "Additional Notes" : "Special Requests"}:</strong> ${message}</p>` : ""}
        <p style="margin-top:16px;color:#888;font-size:12px;">IP Address: ${geo.ip} · Approx. Location: ${formatLocation(geo)}</p>
        <p style="color:#888;font-size:12px;">Submitted from the "Get a Free Quote" button.</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      if (saved) return NextResponse.json({ ok: true });
      return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote lead send failed:", err);
    if (saved) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 500 });
  }
}
