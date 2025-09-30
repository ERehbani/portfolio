import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_y2aOyD12.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CVWKx3no.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/","cacheDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/node_modules/.astro/","outDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/dist/","srcDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/src/","publicDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/public/","buildClientDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/dist/client/","buildServerDir":"file:///C:/Users/lihtr/OneDrive/Desktop/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"en/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en","isIndex":false,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/en.astro",{"propagation":"none","containsHead":true}],["C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/en@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/lihtr/OneDrive/Desktop/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DFZt2ThW.mjs","\u0000@astrojs-manifest":"manifest_Dg1PLK4F.mjs","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/ui/toggle-language":"_astro/toggle-language.CMBha0uh.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/ui/toggle-mode":"_astro/toggle-mode.CogK7Lk1.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/en.astro?astro&type=script&index=0&lang.ts":"_astro/en.astro_astro_type_script_index_0_lang.CQZDPF_N.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CQZDPF_N.js","@astrojs/react/client.js":"_astro/client.DxZNQU9M.js","@/components/profile":"_astro/profile.ClTlmNlG.js","@/components/certifications":"_astro/certifications.BQgVsPPy.js","@/components/experience":"_astro/experience.5_uMXQPR.js","@/components/skills":"_astro/skills.jLEe5Aib.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/profile":"_astro/profile.xb1ndOON.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/certifications":"_astro/certifications.CXaWO21g.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/experience":"_astro/experience.BxZ0C36i.js","C:/Users/lihtr/OneDrive/Desktop/portfolio/src/components/skills":"_astro/skills.CqNsCJ9S.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/en.astro?astro&type=script&index=0&lang.ts","(function(){(localStorage.getItem(\"theme\")||\"dark\")===\"dark\"&&document.documentElement.classList.add(\"dark\")})();"],["C:/Users/lihtr/OneDrive/Desktop/portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","(function(){(localStorage.getItem(\"theme\")||\"dark\")===\"dark\"&&document.documentElement.classList.add(\"dark\")})();"]],"assets":["/_astro/en.a3TKmPPp.css","/english.png","/notion-face.png","/og.png","/Profile.jpg","/Profile1.jpg","/spanish.png","/font/SpaceGrotesk-Bold.ttf","/font/SpaceGrotesk-Light.ttf","/font/SpaceGrotesk-Medium.ttf","/font/SpaceGrotesk-Regular.ttf","/font/SpaceGrotesk-SemiBold.ttf","/pdf/CV-Elian-Rehbani-2025-(EN).pdf","/pdf/CV-Elian-Rehbani-2025.pdf","/svg/argentina.svg","/svg/astro.svg","/svg/astrofooter.svg","/svg/background.svg","/svg/bootstrap.svg","/svg/daisyui.svg","/svg/favicon.svg","/svg/firebase.svg","/svg/fiverr.svg","/svg/git.svg","/svg/github.svg","/svg/linkedin.svg","/svg/mercado-pago.svg","/svg/mongodb.svg","/svg/nestjs.svg","/svg/nextdotjs.svg","/svg/nodedotjs.svg","/svg/ooorganize.svg","/svg/openai.svg","/svg/postgresql.svg","/svg/prisma.svg","/svg/react.svg","/svg/shadcnui.svg","/svg/tailwindcss.svg","/svg/typescript.svg","/svg/upwork.svg","/svg/vercel.svg","/_astro/certifications.BQgVsPPy.js","/_astro/certifications.CXaWO21g.js","/_astro/client.DxZNQU9M.js","/_astro/Combination.Dhg4sukG.js","/_astro/constants.DsoMsrI1.js","/_astro/createLucideIcon.CSJ503DK.js","/_astro/experience.5_uMXQPR.js","/_astro/experience.BxZ0C36i.js","/_astro/index.Bz-QvCnq.js","/_astro/index.C3qsWDfm.js","/_astro/index.DatCARk7.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/profile.ClTlmNlG.js","/_astro/profile.xb1ndOON.js","/_astro/skills.CqNsCJ9S.js","/_astro/skills.jLEe5Aib.js","/_astro/toggle-language.CMBha0uh.js","/_astro/toggle-mode.CogK7Lk1.js","/_astro/useTheme.Dz7iHHbL.js","/_astro/utils.DgWKjmuI.js","/en/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"G1ZpPKgTSDoFlbZZbmEu1VXirc9MqSKVPhpYSNM1GQo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
