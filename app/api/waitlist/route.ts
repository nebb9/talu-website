import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ⬅️ REQUIRED

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;

    if (!apiKey) {
      console.error("BUTTONDOWN_API_KEY is missing");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        tags: ["talu-waitlist"],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Buttondown error:", text);
      return NextResponse.json(
        { error: "Buttondown rejected request" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}
