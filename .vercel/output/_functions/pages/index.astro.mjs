import { c as createComponent, a as createAstro, b as renderComponent, f as renderScript, r as renderTemplate, d as renderHead, e as addAttribute } from '../chunks/astro/server_k9WEp1lg.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_Dnlo1aIn.mjs';
import { I as InfiniteTextCarousel, E as Experience, C as Certifications, $ as $$About, P as ProfileCard } from '../chunks/skills_BKItcwv4.mjs';
import { e as en } from '../chunks/en_B_7wA8NS.mjs';
/* empty css                              */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/elianrehbani/Desktop/astronautical-aperture/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/elianrehbani/Desktop/astronautical-aperture/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/elianrehbani/Desktop/astronautical-aperture/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/elianrehbani/Desktop/astronautical-aperture/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLang = Astro2.request.headers.get("accept-language") || "";
  const preferred = acceptLang.split(",")[0]?.split("-")[0] || "no-detectado";
  const lang = ["es", "en"].includes(preferred) ? preferred : "en";
  Astro2.redirect(`/${lang}`);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/svg/favicon.svg"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.5/keen-slider.min.css"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Elian Rehbani | Desarrollador Frontend Next.js</title><link rel="canonical" href="https://www.elianrehbani.com/"><!-- <link rel="alternate" hreflang="en" href="/en" />\n    <link rel="alternate" hreflang="es" href="/es" /> --><meta name="description" content="Portfolio de Elian Rehbani, Desarrollador Frontend con experiencia en React, Next.js, TypeScript y TailwindCSS."><meta name="keywords" content="Elian Rehbani, frontend, frontend developer freelance, freelancer, front end it, front-end, upwork, freelancing, freelance job, desarrollador frontend, ReactJS, Next.js, TypeScript, TailwindCSS, desarrollo web, sitios para negocios, dise\xF1o web, desarrollador fullstack junior, m\xE9tricas web, portfolio de desarrollador"><meta name="author" content="Elian Rehbani"><!-- Open Graph --><meta property="og:title" content="Elian Rehbani | Desarrollador Frontend Next.js"><meta property="og:description" content="Dise\xF1o y desarrollo sitios web modernos y escalables para negocios. Explor\xE1 mis proyectos desarrollados con React, Next.js y herramientas actuales."><meta property="og:image" content="/og.png"><meta property="og:url" content="https://www.elianrehbani.com/"><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Elian Rehbani | Desarrollador Frontend Next.js"><meta name="twitter:description" content="Sitios personalizados para negocios, con hosting, mantenimiento y m\xE9tricas mensuales. Mir\xE1 mi portfolio."><meta name="twitter:image" content="/og.png"><meta name="robots" content="index, follow"><!-- Datos estructurados JSON-LD --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": "Elian Rehbani",\n        "jobTitle": "Desarrollador Frontend",\n        "image": "/og.png",\n        "url": "https://www.elianrehbani.com",\n        "sameAs": [\n          "https://www.linkedin.com/elianrehbani",\n          "https://github.com/elianrehbani"\n        ],\n        "worksFor": {\n          "@type": "Organization",\n          "name": "Freelance / Aut\xF3nomo"\n        },\n        "description": "Elian Rehbani es un Desarrollador Frontend de Mar del Plata, Argentina, especializado en React, Next.js, TailwindCSS y TypeScript. Crea soluciones web personalizadas y escalables para negocios y profesionales, con m\xE9tricas integradas y soporte continuo.",\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "Mar del Plata",\n          "addressRegion": "Buenos Aires",\n          "addressCountry": "Argentina"\n        },\n        "email": "elianrhbn@gmail.com",\n        "knowsAbout": [\n          "Frontend",\n          "React",\n          "Next.js",\n          "TypeScript",\n          "TailwindCSS",\n          "Desarrollo Frontend",\n          "Sitios web",\n          "Pagina web",\n          "P\xE1gina web",\n          "Desarrollo web",\n          "Desarrollo web para negocios",\n          "Desarrollo web para profesionales",\n          "Desarrollo web para empresas",\n          "Desarrollo web para clientes",\n          "Desarrollo web para clientes",\n          "Sitios web para negocios",\n          "Mantenimiento web"\n        ]\n      }\n    <\/script>', "", "", '</head> <body> <div class="relative h-screen transition-all"> <div class="absolute inset-0"> ', ' <div class="h-[100vh] fixed w-full dark:bg-black bg-[#EDEEEB] [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[-20%] [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[1800px] overflow-hidden [&>div]:w-[2400px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(210,210,210,1),rgba(0,0,0,0))] dark:[&>div]:bg-[radial-gradient(circle_farthest-side,rgba(210,210,210,.15),rgba(0,0,0,0))]"> <div></div> </div> <div class="absolute top-1/2 w-[90%] lg:w-[70%] h-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2"> <div class="flex flex-col pb-10 gap-2 h-fit lg:grid lg:grid-cols-8 lg:grid-rows-6 lg:gap-2 w-full lg:h-full"> <div class="lg:col-start-1 lg:col-end-3 row-start-1 row-end-7 h-full"> ', ' </div> <div class="lg:col-start-3 lg:col-end-7 row-start-1 row-end-3 h-full"> ', ' </div> <div class="lg:col-start-7 lg:col-end-9 row-start-1 row-end-3 h-full"> ', ' </div> <div class="lg:col-start-3 lg:col-end-9 row-start-3 row-end-6 h-full"> ', ' </div> <div class="lg:col-start-3 lg:col-end-9 row-start-6 row-end-7 h-full"> ', ' </div> </div> <footer class="text-xl -mt-5 text-[#5b5b5b] flex items-center text-center w-ful justify-center gap-2 text"> <h4>Made with</h4> ', " <h4>Astro</h4> </footer> </div> </div> </div> </body></html>"])), renderScript($$result, "/Users/elianrehbani/Desktop/astronautical-aperture/src/pages/index.astro?astro&type=script&index=0&lang.ts"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Analytics", $$Index$2, {}), renderComponent($$result, "SpeedInsights", $$Index$1, {}), renderHead(), renderComponent($$result, "Image", $$Image, { "src": "/svg/ooorganize.svg", "alt": "Background", "width": 100, "height": 100, "class": "w-full h-full object-cover repeat-infinite pointer-events-none" }), renderComponent($$result, "Profile", ProfileCard, { "client:idle": true, "content": en.profile, "client:component-hydration": "idle", "client:component-path": "/Users/elianrehbani/Desktop/astronautical-aperture/src/components/profile", "client:component-export": "default" }), renderComponent($$result, "About", $$About, { "content": en.about }), renderComponent($$result, "Certifications", Certifications, { "client:idle": true, "content": en.certifications, "client:component-hydration": "idle", "client:component-path": "/Users/elianrehbani/Desktop/astronautical-aperture/src/components/certifications", "client:component-export": "default" }), renderComponent($$result, "Experience", Experience, { "client:idle": true, "content": en.experience, "client:component-hydration": "idle", "client:component-path": "/Users/elianrehbani/Desktop/astronautical-aperture/src/components/experience", "client:component-export": "default" }), renderComponent($$result, "Skills", InfiniteTextCarousel, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/elianrehbani/Desktop/astronautical-aperture/src/components/skills", "client:component-export": "default" }), renderComponent($$result, "Image", $$Image, { "src": "/svg/astrofooter.svg", "alt": "Astro", "width": 100, "height": 100, "class": "w-10 h-10" }));
}, "/Users/elianrehbani/Desktop/astronautical-aperture/src/pages/index.astro", void 0);

const $$file = "/Users/elianrehbani/Desktop/astronautical-aperture/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
