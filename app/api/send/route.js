import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Bien reçu, merci !</p>

          <p>
            Bonjour, Je vous remercie d&#39;avoir pris le temps de me contacter
            via mon portfolio en ligne. J&#39;ai bien reçu votre message et je
            reviendrai vers vous dans les plus brefs délais. Bonne journée et à
            très bientôt,
          </p>
          <p>Patrycja Kruczyńska</p>
          <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />
          <p style={{ fontStyle: "italic" }}>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
