import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_at6brKBx_4sJ8VhvftqQUJpPd6gbRg6Fz");
async function POST({ request }) {
  try {
    const body = await request.json();
    console.log("Body recibido:", body);
    const { name, email, project, message } = body;
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
      `
    });
    console.log("Respuesta Resend 1:", resp1);
    const resp2 = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "¡Gracias por tu consulta!",
      html: `
        <p>Hola ${name}, gracias por escribirme.</p>
        <p>En breve me pondré en contacto con vos 🙂</p>
      `
    });
    console.log("Respuesta Resend 2:", resp2);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200
    });
  } catch (error) {
    console.error("ERROR EN CONTACT API:", error);
    return new Response(JSON.stringify({ error: true }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
