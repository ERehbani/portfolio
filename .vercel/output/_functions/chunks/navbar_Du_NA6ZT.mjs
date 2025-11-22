import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, r as renderTemplate, e as addAttribute } from './astro/server_J9aO5duB.mjs';
import 'piccolore';
import 'clsx';
import { ArrowLeft } from 'lucide-react';

const $$Astro$6 = createAstro();
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CTASection;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="border-t border-border bg-muted/30"> <div class="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24"> <h2 class="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"> ${content.title} </h2> <p class="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground"> ${content.description} </p> <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"> <!-- <button
        data-open-dialog
        data-service="Consulta General"
        class="min-w-[200px] rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {content.cta1}
      </button> --> ${renderComponent($$result, "ContactDialog", null, { "client:only": true, "label": content.cta1, "client:component-hydration": "only", "client:component-path": "C:/portfolio/src/components/react/contactDialog", "client:component-export": "default" })} </div> <p class="mt-6 text-sm text-muted-foreground"> ${content.footer} <a href="mailto:elianrhbn@gmail.com" class="underline hover:text-foreground">
elianrhbn@gmail.com
</a> </p> </div> </section>`;
}, "C:/portfolio/src/components/services/CTASection.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProcessStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProcessStep;
  const { step, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background"> <span class="font-mono text-sm font-semibold">${step}</span> </div> <h3 class="mt-4 font-semibold text-foreground">${title}</h3> <p class="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">${description}</p> </div>`;
}, "C:/portfolio/src/components/services/ProcessStep.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProcessSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProcessSection;
  const { content } = Astro2.props;
  const process = [
    {
      step: content.steps.step1.num,
      title: content.steps.step1.title,
      description: content.steps.step1.description
    },
    {
      step: content.steps.step2.num,
      title: content.steps.step2.title,
      description: content.steps.step2.description
    },
    {
      step: content.steps.step3.num,
      title: content.steps.step3.title,
      description: content.steps.step3.description
    },
    {
      step: content.steps.step4.num,
      title: content.steps.step4.title,
      description: content.steps.step4.description
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="border-y border-border bg-muted/30"> <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="text-center"> <h2 class="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"> ${content.title} </h2> <p class="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground"> ${content.description} </p> </div> <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> ${process.map((item) => renderTemplate`${renderComponent($$result, "ProcessStep", $$ProcessStep, { "step": item.step, "title": item.title, "description": item.description })}`)} </div> </div> </section>`;
}, "C:/portfolio/src/components/services/processSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesGrid;
  const { content } = Astro2.props;
  const services = [
    {
      id: "landing",
      title: content.landingPage.title,
      description: content.landingPage.description,
      benefits: content.landingPage.benefits,
      ctaLabel: content.landingPage.cta
    },
    {
      id: "ecommerce",
      title: content.ecommerce.title,
      description: content.ecommerce.description,
      benefits: content.ecommerce.benefits,
      ctaLabel: content.ecommerce.cta
    },
    {
      id: "saas",
      title: content.saas.title,
      description: content.saas.description,
      benefits: content.saas.benefits,
      ctaLabel: content.saas.cta
    },
    {
      id: "improvement",
      title: content.upgradeMyProject.title,
      description: content.upgradeMyProject.description,
      benefits: content.upgradeMyProject.benefits,
      ctaLabel: content.upgradeMyProject.cta
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", null, { "client:only": true, "service": service, "client:component-hydration": "only", "client:component-path": "C:/portfolio/src/components/react/ServiceCard", "client:component-export": "default" })}`)} </div> </section>`;
}, "C:/portfolio/src/components/services/servicesGrid.astro", void 0);

const $$Astro$2 = createAstro();
const $$ServicesHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicesHero;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-16 pt-32 sm:px-6 lg:px-8 lg:py-24 lg:pt-40"> <div class="text-center"> <h1 class="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"> ${content.title} </h1> <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"> ${content.description} </p> </div> </section>`;
}, "C:/portfolio/src/components/services/servicesHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechStack;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"> <div class="text-center"> <h2 class="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"> ${content.title} </h2> <p class="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground"> ${content.description} </p> </div> <div class="mt-12 flex flex-wrap items-center justify-center gap-8 "> ${content.stack.map((tech) => renderTemplate`<div class="rounded-lg w-full max-w-48 h-48 flex flex-col items-center justify-between border border-border bg-card px-8 py-4 text-sm font-medium text-card-foreground hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow"> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.title, "alt")} class="w-12 h-12 aspect-square object-cover bg-[#3e3e3e] p-2 rounded-md"> <p class="text-lg">${tech.title}</p> <p class="w-full text-xs text-muted-foreground text-center">${tech.description}</p> </div>`)} </div> </section>`;
}, "C:/portfolio/src/components/services/techStack.astro", void 0);

const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 z-50 flex gap-5 justify-between items-center w-full py-6 rounded-b-2xl px-6 max-w-4xl mx-auto bg-background border glass-card border-t-0"> <div class="flex gap-5 items-center"> <a${addAttribute(content.href, "href")} class="bg-[#3e3e3e] rounded-md p-2 w-fit aspect-square object-cover [@media(max-height:700px)]:p-1.5 [@media(max-height:600px)]:p-1"> ${renderComponent($$result, "ArrowLeft", ArrowLeft, { "className": "text-white " })} </a> <a${addAttribute(content.href, "href")} class="bg-[#3e3e3e] rounded-md p-1 w-fit aspect-square object-cover [@media(max-height:700px)]:p-1.5 [@media(max-height:600px)]:p-1"> <img${addAttribute(90, "width")}${addAttribute(90, "height")} src="/Profile1.jpg" alt="Profile" class="aspect-square rounded-md w-14 h-14 object-cover [@media(max-height:700px)]:w-20 [@media(max-height:700px)]:h-20 [@media(max-height:600px)]:w-16 [@media(max-height:600px)]:h-16"> </a> <p>${content.title}</p> </div> <div class="w-fit flex justify-center"> <a href="https://www.linkedin.com/in/elianrehbani" target="_blank" rel="noopener noreferrer" class="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent [@media(max-height:600px)]:p-1.5"> <img src="/svg/linkedin.svg" alt="Elian Rehbani LinkedIn" class="w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity [@media(max-height:600px)]:w-6 [@media(max-height:600px)]:h-6"${addAttribute(100, "width")}${addAttribute(100, "height")}> </a> </div> </div>`;
}, "C:/portfolio/src/components/services/navbar.astro", void 0);

export { $$CTASection as $, $$TechStack as a, $$ProcessSection as b, $$ServicesGrid as c, $$ServicesHero as d, $$Navbar as e };
