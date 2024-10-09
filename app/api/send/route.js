import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const emailBody = `
<div style="font-family: 'Georgia', serif; color: #333; padding: 20px; font-size: 18px;">
  <h2 style="color: #333;">Merci de m'avoir contactée</h2>

  <p style="line-height: 1.5;">
    Je vous remercie d'avoir pris le temps de me contacter via mon portfolio.
    J'ai bien reçu votre message et je reviendrai vers vous dans les plus brefs délais.
  </p>

  <hr style="border: none; border-top: 2px solid #ccc; margin: 40px 0 20px 0;"/>

  <p style="margin-top: 20px;">Bonne journée et à très bientôt,</p>
  <p style="font-weight: bold;">Patrycja Kruczyńska</p>

  <div style="text-align: center; margin-top: 20px;">
    <img src="logo_url" alt="Logo" style="width: 100px; height: auto;"/>
  </div>
</div>
  `;

    const data = await resend.emails.send({
      from: "Patrycja <onboarding@resend.dev>",
      to: "ptkruczynska@gmail.com",
      subject: "Bien reçu, merci !",
      html: emailBody,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
