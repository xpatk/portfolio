import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message, token } = await req.json();
    console.log(email, subject, message);

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const captchaResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });
    const captchaData = await captchaResponse.json();
    console.log("Captcha data:", captchaData);

    if (!captchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            Bonjour, Je vous remercie d&apos;avoir pris le temps de me contacter
            via mon portfolio. J&apos;ai bien reçu votre message et je
            reviendrai vers vous dans les plus brefs délais. Bonne journée et à
            très bientôt,
          </p>
          <p>Patrycja Kruczyńska</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
