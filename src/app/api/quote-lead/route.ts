import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/seo/business";

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
  } = body;

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

  try {
    const { error } = await resend.emails.send({
      from: "Colourful Indian Holidays <enquiries@colourfulindianholidays.com>",
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
        <p style="margin-top:16px;color:#888;font-size:12px;">Submitted from the "Get a Free Quote" button.</p>
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
