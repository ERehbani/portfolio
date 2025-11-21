import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from './astro/server_J9aO5duB.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_povMuJSF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState("dark");
  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(newTheme);
  };
  const getInitialTheme = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark";
  };
  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme || "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return { theme, toggleTheme };
}

const ToggleLanguage = () => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const isSpanish = pathname == "/" || pathname == "/servicios";
  const map = {
    "/": "/en",
    "/en": "/",
    "/servicios": "/services",
    "/services": "/servicios"
  };
  const redirect = () => map[pathname] || "/";
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: redirect(),
      className: "p-2 w-fit rounded-lg border border-[#3e3e3e] dark:bg-[#3e3e3e] text-[#3e3e3e] dark:text-gray-200 dark:hover:bg-[#1e1e1e] hover:bg-[#1e1e1e] hover:[&_svg]:text-white transition-colors duration-200 h-fit text-sm",
      children: isSpanish ? /* @__PURE__ */ jsx("img", { src: "/spanish.png", alt: "Spanish", width: 100, height: 100, className: "size-5 object-cover rounded-full" }) : /* @__PURE__ */ jsx("img", { src: "/english.png", alt: "English", width: 100, height: 100, className: "size-5 object-cover rounded-full" })
    }
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleTheme,
      className: "p-2 w-fit rounded-lg border border-[#3e3e3e] dark:bg-[#3e3e3e] text-[#3e3e3e] dark:text-gray-200 dark:hover:bg-[#1e1e1e] hover:bg-[#1e1e1e] hover:[&_svg]:text-white transition-colors duration-200 h-fit text-sm",
      "aria-label": "Toggle theme",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: `h-5 ${theme === "dark" ? "hidden" : "block"}`,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: `h-5 ${theme === "light" ? "hidden" : "block"}`,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
              }
            )
          }
        )
      ]
    }
  );
};

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="text-base text-[#5b5b5b] flex items-center justify-between w-full gap-1 -mt-10"> <div class="flex w-full"> <h4>${content.title}</h4> ${renderComponent($$result, "Image", $$Image, { "src": "/svg/astrofooter.svg", "alt": "Astro", "width": 100, "height": 100, "class": "w-6 h-6" })} <h4>${content.second_title}</h4> </div> <div class="flex justify-end w-full py-2 gap-2"> ${renderComponent($$result, "ToggleLanguage", ToggleLanguage, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/portfolio/src/components/react/toggle-language", "client:component-export": "default" })} ${renderComponent($$result, "ToggleMode", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/portfolio/src/components/react/toggle-mode", "client:component-export": "default" })} </div> </footer>`;
}, "C:/portfolio/src/components/footer.astro", void 0);

export { $$Footer as $, useTheme as u };
