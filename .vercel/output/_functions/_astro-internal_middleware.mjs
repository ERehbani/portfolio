import 'es-module-lexer';
import './chunks/astro-designed-error-pages_d5HWENJr.mjs';
import 'piccolore';
import './chunks/astro/server_J9aO5duB.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_C2Zhmq0R.mjs';

const onRequest$1 = async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    const header = request.headers.get("accept-language") || "";
    const firstLang = header.split(",")[0].trim().toLowerCase();
    console.log(firstLang);
    const isSpanish = firstLang.startsWith("es");
    if (!isSpanish) {
      return redirect("/en", 307);
    }
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
