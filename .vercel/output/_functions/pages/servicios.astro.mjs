import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, d as renderHead, e as addAttribute, f as renderScript } from '../chunks/astro/server_J9aO5duB.mjs';
import 'piccolore';
import { $ as $$CTASection, a as $$TechStack, b as $$ProcessSection, c as $$ServicesGrid, d as $$ServicesHero, e as $$Navbar } from '../chunks/navbar_Du_NA6ZT.mjs';
import { e as es } from '../chunks/es_BjOJsQTT.mjs';
/* empty css                              */
import { $ as $$Footer } from '../chunks/footer_By48Xjqx.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate(_a || (_a = __template(["<html> <head>", '<meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/svg/favicon.svg"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.5/keen-slider.min.css"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><link rel="canonical" href="https://www.elianrehbani.com/"><link rel="alternate" hreflang="es" href="https://www.elianrehbani.com/"><link rel="alternate" hreflang="en" href="https://www.elianrehbani.com/en"><script type="application/ld+json">\n      {JSON.stringify(structuredData)}\n    <\/script><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Elian Rehbani"><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="/og.png"><meta property="og:url" content="https://www.elianrehbani.com/"><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="/og.png"><meta name="robots" content="index, follow"><!-- Datos estructurados JSON-LD --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": "Elian Rehbani",\n        "jobTitle": "Frontend Developer",\n        "image": "/og.png",\n        "url": "https://www.elianrehbani.com",\n        "sameAs": [\n          "https://www.linkedin.com/elianrehbani",\n          "https://github.com/elianrehbani"\n        ],\n        "worksFor": {\n          "@type": "Organization",\n          "name": "Freelance / Aut\xF3nomo"\n        },\n        "description": "Elian Rehbani is a Frontend Developer from Mar del Plata, Argentina, specialized in React, Next.js, TailwindCSS and TypeScript. Creates custom and scalable web solutions for businesses and professionals, with integrated metrics and continuous support.",\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "Mar del Plata",\n          "addressRegion": "Buenos Aires",\n          "addressCountry": "Argentina"\n        },\n        "email": "elianrhbn@gmail.com",\n        "knowsAbout": [\n          "Frontend",\n          "React",\n          "Next.js",\n          "TypeScript",\n          "TailwindCSS",\n          "Frontend Development",\n          "Web Sites",\n          "Page web",\n          "P\xE1gina web",\n          "Web Development",\n          "Web Development for Businesses",\n          "Web Development for Professionals",\n          "Web Development for Companies",\n          "Web Development for Clients",\n          "Web Sites for Businesses",\n          "Web Maintenance"\n        ]\n      }\n    <\/script>', '</head> <body> <div class="max-w-4xl mx-auto"> ', " ", " ", " ", " ", " ", " ", " </div> </body></html>"])), renderScript($$result, "C:/portfolio/src/pages/servicios.astro?astro&type=script&index=0&lang.ts"), addAttribute(Astro2.generator, "content"), es.head.services.title, addAttribute(es.head.services.description, "content"), addAttribute(es.head.services.keywords, "content"), addAttribute(es.head.services.og.title, "content"), addAttribute(es.head.services.og.description, "content"), addAttribute(es.head.services.og.twitter.title, "content"), addAttribute(es.head.services.og.twitter.description, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "content": es.services.navbar }), renderComponent($$result, "ServicesHero", $$ServicesHero, { "content": es.services.content }), renderComponent($$result, "ServicesGrid", $$ServicesGrid, { "content": es.services.content.cardsGrid }), renderComponent($$result, "ProcessSection", $$ProcessSection, { "content": es.services.content.howWeWork }), renderComponent($$result, "TechStack", $$TechStack, { "content": es.services.content.techStack }), renderComponent($$result, "CTASection", $$CTASection, { "content": es.services.content.launch }), renderComponent($$result, "Footer", $$Footer, { "content": es.footer }));
}, "C:/portfolio/src/pages/servicios.astro", void 0);

const $$file = "C:/portfolio/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
