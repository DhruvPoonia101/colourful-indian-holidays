import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/seo/business";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  destination?: string;
  travelDate?: string;
  days?: string;
  email?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { destination, travelDate, days, email } = body;

  if (!destination || !travelDate || !days || !email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please fill in every field with a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — trip planner lead was not emailed.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      // Swap this for an address on your own verified domain once you set one
      // up in Resend (e.g. "Colourful Indian Holidays <enquiries@colourfulindianholidays.com>").
      // Until then, Resend's shared sandbox address works for delivery to BUSINESS.email.
      from: "Colourful Indian Holidays <onboarding@resend.dev>",
      to: BUSINESS.email,
      replyTo: email,
      subject: `New Itinerary Request — ${destination}`,
      html: `
        <h2>New trip planner enquiry</h2>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Travel Date:</strong> ${travelDate}</p>
        <p><strong>Trip Length:</strong> ${days}</p>
        <p><strong>Traveller Email:</strong> ${email}</p>
        <p style="margin-top:16px;color:#888;font-size:12px;">Submitted from the homepage hero trip planner.</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Trip planner lead send failed:", err);
    return NextResponse.json({ error: "Couldn't send that just now — please try again." }, { status: 500 });
  }
}
