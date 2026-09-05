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

type DetailsPayload = {
  // Step 1 context, carried over so this email is self-contained.
  destination?: string;
  travelDate?: string;
  days?: string;
  travellers?: string;
  email?: string;
  // Step 2 fields.
  fullName?: string;
  phone?: string;
  country?: string;
  specialRequest?: string;
  companyWebsite?: string;
  formLoadedAt?: number;
  turnstileToken?: string;
};

export async function POST(request: Request) {
  let body: DetailsPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    destination,
    travelDate,
    days,
    travellers,
    email,
    fullName,
    phone,
    country,
    specialRequest,
    companyWebsite,
    formLoadedAt,
    turnstileToken,
  } = body;

  if (isHoneypotFilled(companyWebsite) || isSubmittedTooFast(formLoadedAt)) {
    return NextResponse.json({ ok: true });
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

  if (!fullName || !phone || !country) {
    return NextResponse.json(
      { error: "Please fill in your name, phone number, and country." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — trip planner details were not emailed.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const geo = await getApproxLocation(ip);

  try {
    const { error } = await resend.emails.send({
      from: "Colourful Indian Holidays <enquiries@colourfulindianholidays.com>",
      to: BUSINESS.email,
      replyTo: email || undefined,
      subject: `Trip Planner — Contact Details Received (${fullName})`,
      html: `
        <h2>Trip planner — step 2 details</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        ${specialRequest ? `<p><strong>Special Request:</strong> ${specialRequest}</p>` : ""}
        <p style="margin-top:16px;color:#888;font-size:12px;">IP Address: ${geo.ip} · Approx. Location: ${formatLocation(geo)}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee;" />
        <p style="color:#888;font-size:12px;">Matches the itinerary request submitted just before this:</p>
        ${destination ? `<p><strong>Destination:</strong> ${destination}</p>` : ""}
        ${travelDate ? `<p><strong>Travel Date:</strong> ${travelDate}</p>` : ""}
        ${days ? `<p><strong>Trip Length:</strong> ${days}</p>` : ""}
        ${travellers ? `<p><strong>No of Persons:</strong> ${travellers}</p>` : ""}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        <p style="margin-top:16px;color:#888;font-size:12px;">Submitted from the homepage hero trip planner (step 2 of 2).</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Trip planner details send failed:", err);
    return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 500 });
  }
}
