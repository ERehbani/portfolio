import { defineMiddleware } from "astro:middleware"

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, redirect } = context

  // Solo aplicar en la ruta raíz
  if (url.pathname === "/") {
    const acceptLang = context.request.headers.get("accept-language") || ""
    const preferred = acceptLang.split(",")[0]?.split("-")[0] || "es"
    const lang = ["es", "en", "fr", "kr"].includes(preferred) ? preferred : "es"

    return redirect(`/${lang}`, 302)
  }

  return next()
})
