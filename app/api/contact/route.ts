import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://beener.app.n8n.cloud/webhook/contact-form";

export async function POST(req: NextRequest) {
  try {
    const { name, email, inquiry, message } = await req.json();

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, inquiry, message }),
    });

    if (!webhookRes.ok) {
      console.error("Webhook error:", webhookRes.status, await webhookRes.text());
      return NextResponse.json({ success: false, error: "Webhook failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
