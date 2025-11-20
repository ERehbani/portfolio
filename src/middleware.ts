import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    const header = request.headers.get("accept-language") || "";

    // Tomamos el primer idioma antes de coma
    const firstLang = header.split(",")[0].trim().toLowerCase();
console.log(firstLang)
    // Verifica español incluso variantes: es, es-ar, es-419, es-us, etc
    const isSpanish = firstLang.startsWith("es");

    if (!isSpanish) {
      return redirect("/en", 307);
    }
  }

  return next();
};
