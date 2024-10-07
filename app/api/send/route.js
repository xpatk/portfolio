import { EmailTemplate } from "../../../components/EmailTemplate.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Patrycja <ptkruczynska@gmail.com>",
      to: ["ptkruczynska@gmail.com"],
      subject: "Merci pour votre prise de contact",
      react: EmailTemplate({ firstName: "Jean" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
