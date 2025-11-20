import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    console.log("Body recibido:", body);

    const { name, email, project, message } = body;

    // --- EMAIL PARA VOS ---
    const resp1 = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "elianrhbn@gmail.com",
      subject: `Nueva consulta: ${project}`,
      html: `
        <h2>Nueva consulta desde tu portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Proyecto:</strong> ${project}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    console.log("Respuesta Resend 1:", resp1);

    // --- EMAIL PARA EL CLIENTE ---
    const resp2 = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "¡Gracias por tu consulta!",
      html: `
        <p>Hola ${name}, gracias por escribirme.</p>
        <p>En breve me pondré en contacto con vos 🙂</p>
      `,
    });

    console.log("Respuesta Resend 2:", resp2);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });

  } catch (error) {
    console.error("ERROR EN CONTACT API:", error);
    return new Response(JSON.stringify({ error: true }), {
      status: 500,
    });
  }
}
