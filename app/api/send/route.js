import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const emailBody = "<p>Email body</p>";

    const data = await resend.emails.send({
      from: "Patrycja <onboarding@resend.dev>",
      to: "ptkruczynska@gmail.com",
      subject: "Test",
      html: emailBody,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
