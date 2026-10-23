import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/seo/business";
import { formatLocation, getApproxLocation } from "@/lib/geo";
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

  // Time-trap: this one CAN fire on a real person (autofill, a familiar
  // form, a fast typist on a desktop keyboard). It must never return the
  // silent { ok: true } above — that showed the sender a success message
  // while the enquiry was discarded. A visible, retryable error costs a
  // bot nothing and costs us no leads: the retry is always slow enough.
  if (isSubmittedTooFast(formLoadedAt)) {
    return NextResponse.json(
      { error: "That came through a little too quickly for us to process. Please press send again." },
      { status: 400 }
    );
  }

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — quote request was not emailed.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const geo = await getApproxLocation(ip);

  try {
    const { error } = await resend.emails.send({
      from: `Colourful Indian Holidays <${BUSINESS.email}>`,
      to: BUSINESS.email,
      replyTo: email,
      subject: `New Quote Request — ${pageName ?? "General"} (${fullName})`,
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
      return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote lead send failed:", err);
    return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 500 });
  }
}
