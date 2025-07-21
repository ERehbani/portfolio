import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_k9WEp1lg.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { XIcon, ChevronLeft, ChevronRight, HomeIcon, PanelsTopLeftIcon, Cake, MapPin, Mail, FileDown, ChevronDown } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ScrollArea as ScrollArea$1, Tabs as Tabs$1 } from 'radix-ui';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import useEmblaCarousel from 'embla-carousel-react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import Autoplay from 'embla-carousel-autoplay';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto h-full flex items-center"> <div class="glass-card content-center text-[#3e3e3e] dark:text-white h-fit lg:h-full rounded-2xl p-3 lg:px-8 max-h-80 overflow-hidden hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow overflow-y-auto styled-scrollbar"> <h2 class="text-2xl font-semibold flex-shrink-0">${content.title}</h2> <div class="flex-1 overflow-y-auto styled-scrollbar mt-3"> <p class="text-[#858585] text-sm"> <b>Frontend Developer</b>${content.description_1}<b>ReactJS</b>, <b>Next.js</b>,${content.description_2} </p> </div> </div> </div>`;
}, "/Users/elianrehbani/Desktop/astronautical-aperture/src/components/about.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(XIcon, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

const certificates = [
  {
    title: "Full Stack Web Developer",
    institution: "Henry (2023)",
    link: "https://res.cloudinary.com/dmnb6cfzj/image/upload/v1729287668/HenryCertificate_bg1qbo.png"
  },
  {
    title: "Backend Programmation",
    institution: "CoderHouse (2024)",
    link: "https://res.cloudinary.com/dmnb6cfzj/image/upload/v1729287693/Coderhouse%20Certificate.png"
  },
  {
    title: "English 3th Intermediate",
    institution: "CEM English (2024)",
    link: "https://res.cloudinary.com/dmnb6cfzj/image/upload/v1729288085/3rd%20Adults%20Intensive%20CEM%20English%20certificate.png"
  },
  {
    title: "Lean Six Sigma",
    institution: "Certiprof",
    link: "https://res.cloudinary.com/dmnb6cfzj/image/upload/v1729288159/Lean%20Six%20Sigma%20certificate.png"
  }
];
const technologies = [
  {
    name: "Astro",
    iconDark: "/svg/astro.svg"
  },
  {
    name: "Typescript",
    iconDark: "/svg/typescript.svg"
  },
  {
    name: "Next.js",
    iconDark: "/svg/nextdotjs.svg"
  },
  {
    name: "React",
    iconDark: "/svg/react.svg"
  },
  {
    name: "Shadcn UI",
    iconDark: "/svg/shadcnui.svg"
  },
  {
    name: "DaisyUI",
    iconDark: "/svg/daisyui.svg"
  },
  {
    name: "Git",
    iconDark: "/svg/git.svg"
  }
];

function Certifications({ content }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };
  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };
  const currentCertificate = certificates[currentIndex];
  return /* @__PURE__ */ jsxs("div", { className: "glass-card text-[#3e3e3e] dark:text-white rounded-2xl p-3 md:p-8 flex items-center md:justify-center w-full ml-auto mx-auto relative h-full max-lg:w-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow bg-black/20 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevCertificate,
        className: "px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute left-[-6px] top-auto hover:scale-110 transition-transform",
        "aria-label": "Previous certificate",
        children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-3 h-3 text-[#3e3e3e] dark:text-white" }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center w-full", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: content.title }),
      /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "p-4 w-full h-40 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-lg:text-sm", children: [
        /* @__PURE__ */ jsxs(Dialog, { children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, className: "z-50", children: /* @__PURE__ */ jsx("button", { className: "hover:underline hover:font-semibold transition-all duration-75 focus:outline-none", children: /* @__PURE__ */ jsx("h3", { className: "text-lg text-center h-14 flex items-center justify-center cursor-pointer px-2", children: currentCertificate.title }) }) }),
          /* @__PURE__ */ jsx(DialogContent, { className: "max-w-4xl max-h-[90vh] p-0", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: currentCertificate.link || "/placeholder.svg",
              alt: `${currentCertificate.title} Certificate`,
              className: "w-full h-auto object-contain",
              crossOrigin: "anonymous"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 text-center mt-5", children: currentCertificate.institution })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center space-x-2", children: certificates.map((_, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-gray-500" : "bg-gray-300"}`,
          "aria-label": `Certificate ${index + 1}`
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextCertificate,
        className: "px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute right-[-6px] top-auto hover:scale-110 transition-transform",
        "aria-label": "Next certificate",
        children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-[#3e3e3e] dark:text-white" }) })
      }
    )
  ] });
}

function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ScrollArea$1.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          ScrollArea$1.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit]",
            children
          }
        ),
        /* @__PURE__ */ jsx(ScrollBar, {}),
        /* @__PURE__ */ jsx(ScrollArea$1.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollArea$1.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollArea$1.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground/70 inline-flex w-fit items-center justify-center rounded-md p-0.5",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "hover:text-muted-foreground data-[state=active]:bg-[#3e3e3e] data-[state=active]:text-white focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-xs [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

const jobSpace = ({ experience }) => {
  return /* @__PURE__ */ jsx("div", { className: "space-y-4 pr-4", children: experience.map((exp, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "border border-[#3e3e3e] p-4 lg:p-5 rounded-lg space-y-3",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm lg:text-base leading-tight", children: exp.title }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-[#3e3e3e] dark:text-white/90 text-sm", children: exp.company })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-xs lg:text-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[#858585] italic", children: exp.location }),
            /* @__PURE__ */ jsx("p", { className: "text-[#3e3e3e] dark:text-white/80", children: exp.date })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#858585] text-xs lg:text-sm leading-relaxed", children: exp.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: exp.skills.map((skill, skillIndex) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-6 h-6 lg:w-7 lg:h-7 rounded-md bg-[#3e3e3e] dark:bg-white/5 p-1 flex items-center justify-center",
            children: /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: skill.icon || "/placeholder.svg",
                  alt: skill.title,
                  className: "w-full h-full object-contain"
                }
              ) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: skill.title }) })
            ] })
          },
          skillIndex
        )) })
      ]
    },
    index
  )) });
};

const Experience = ({ content }) => {
  return /* @__PURE__ */ jsx("div", { className: "glass-card flex flex-col text-[#3e3e3e] dark:text-white h-96 lg:h-full rounded-2xl overflow-hidden hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "tab-1", className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-5 lg:px-8 pb-0", children: /* @__PURE__ */ jsxs(TabsList, { className: "w-fit bg-transparent justify-start", children: [
      /* @__PURE__ */ jsxs(TabsTrigger, { value: "tab-1", className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(HomeIcon, { className: "opacity-60", size: 16, "aria-hidden": "true" }),
        content.title
      ] }),
      /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: "tab-2",
          className: "group flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsx(
              PanelsTopLeftIcon,
              {
                className: "opacity-60",
                size: 16,
                "aria-hidden": "true"
              }
            ),
            content.second_title
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 px-5 lg:px-8 pb-5", children: [
      /* @__PURE__ */ jsx(
        TabsContent,
        {
          value: "tab-1",
          className: "h-full mt-4 overflow-y-auto styled-scrollbar",
          children: /* @__PURE__ */ jsx("div", { className: "h-full flex flex-col", children: /* @__PURE__ */ jsx(ScrollArea, { className: "flex-1", children: /* @__PURE__ */ jsx(jobSpace, { experience: content.jobs }) }) })
        }
      ),
      /* @__PURE__ */ jsx(
        TabsContent,
        {
          value: "tab-2",
          className: "h-full mt-4 overflow-y-auto styled-scrollbar",
          children: /* @__PURE__ */ jsx(jobSpace, { experience: content.projects })
        }
      )
    ] })
  ] }) });
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

function ProfileCard({ content }) {
  const handleDownloadCV = (language) => {
    const cvUrls = {
      es: "/pdf/CV-Elian-Rehbani-2025.pdf",
      en: "/pdf/CV-Elian-Rehbani-2025-(EN).pdf"
    };
    const link = document.createElement("a");
    link.href = cvUrls[language];
    link.download = `CV-Elian-Rehbani-2025.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsx("div", { className: "glass-card  text-white lg:w-full h-fit lg:h-full rounded-2xl bg-black/20 backdrop-blur-sm hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-5 py-5 h-full", children: [
    /* @__PURE__ */ jsxs("section", { className: "flex lg:flex-col gap-5 px-2 md:px-5 lg:px-0", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#3e3e3e] p-2 rounded-2xl w-fit mx-auto aspect-square object-cover", children: /* @__PURE__ */ jsx(
        "img",
        {
          width: 270,
          height: 270,
          src: "/notion-face.png",
          alt: "Profile",
          className: "aspect-square rounded-2xl w-40 h-40 object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-auto justify-center gap-5 items-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold dark:text-white text-[#3e3e3e]", children: "Elián Rehbani" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs md:text-sm bg-[#3e3e3e] py-2 px-4 rounded-full flex justify-around items-center text-center w-full  lg:w-fit", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-600 shadow-md shadow-green-700 animate-ping mr-2" }),
          content.openToWork
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-2 lg:flex lg:flex-col gap-2 items-center px-2 lg:px-5", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center", children: [
        /* @__PURE__ */ jsx(Cake, { className: "w-5 text-[#818181]" }),
        content.birthday
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-5 text-[#818181]" }),
        "Mar del Plata",
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/svg/argentina.svg",
            alt: "Argentina",
            className: "w-6 h-6 aspect-square rounded-full object-cover",
            width: 100,
            height: 100
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 col-span-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:elianrhbn@gmail.com",
            className: "text-sm flex items-center gap-2 justify-center py-3 w-full lg:w-fit lg:px-3 rounded-md bg-[#3e3e3e] dark:bg-white text-black hover:[&_svg]:text-white dark:hover:[&_svg]:text-black hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-5 text-white dark:text-[#3e3e3e] transition-all" }),
              /* @__PURE__ */ jsx("span", { className: "lg:hidden text-white dark:text-[#3e3e3e]", children: content.sendEmail })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block text-sm text-[#3e3e3e] dark:text-white", children: "elianrhbn@gmail.com" })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { className: "text-sm text-white lg:mt-10 flex items-center border-2 border-[#383838] gap-2 justify-center py-6 w-full rounded-md bg-[#3e3e3e] hover:bg-[#2A2A2A] transition-colors col-span-2", children: [
          /* @__PURE__ */ jsx(FileDown, { className: "w-5 text-white" }),
          content.downloadCV,
          /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 ml-1" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56 bg-[#3e3e3e] border-gray-600", children: [
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: () => handleDownloadCV("es"),
              className: "text-white hover:bg-[#2A2A2A] cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/spanish.png",
                    alt: "Spanish",
                    className: "aspect-square rounded-full object-cover w-6 h-6 mr-2",
                    width: 16,
                    height: 16
                  }
                ),
                "Descargar CV (Español)"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: () => handleDownloadCV("en"),
              className: "text-white hover:bg-[#2A2A2A] cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/english.png",
                    alt: "English",
                    className: "aspect-square rounded-full object-cover w-6 h-6 mr-2",
                    width: 16,
                    height: 16
                  }
                ),
                "Download CV (English)"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-[90%] mx-auto h-[1px] bg-[#393939]" }),
    /* @__PURE__ */ jsxs("section", { className: "w-[80%] mx-auto flex justify-around items-center h-fit", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/ERehbani",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/svg/github.svg",
              alt: "Elian Rehbani GitHub",
              className: "w-8 h-8 aspect-square rounded-full object-cover hover:opacity-80 transition-opacity",
              width: 100,
              height: 100
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/elian-rehbani",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/svg/linkedin.svg",
              alt: "Elian Rehbani LinkedIn",
              className: "w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity",
              width: 100,
              height: 100
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.upwork.com/freelancers/~01cb5ee7641e3347f8?mp_source=share",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/svg/upwork.svg",
              alt: "Elian Rehbani Upwork",
              className: "w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity",
              width: 100,
              height: 100
            }
          )
        }
      )
    ] })
  ] }) });
}

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}

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

const InfiniteTextCarousel = () => {
  useTheme();
  const plugin = useRef(
    Autoplay({
      delay: 1700,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false
    })
  );
  return /* @__PURE__ */ jsx("div", { className: "glass-card rounded-2xl w-full overflow-hidden flex items-center py-8 lg:py-0 h-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow", children: /* @__PURE__ */ jsx(
    Carousel,
    {
      opts: {
        loop: true,
        align: "start",
        dragFree: true,
        containScroll: false
      },
      plugins: [plugin.current],
      className: "w-full ",
      children: /* @__PURE__ */ jsx(CarouselContent, { className: "text-white flex items-center ", children: [...technologies, ...technologies].map((tech, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "basis-auto flex-shrink-0 mx-auto flex justify-center ",
          children: /* @__PURE__ */ jsx("div", { className: "px-8 h-full fill-blue-600", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue fill-blue-600", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: tech.iconDark,
              alt: tech.name,
              width: 60,
              height: 60,
              className: "p-2 rounded-md dark:bg-transparent w-12 h-12 lg:w-14 lg:h-14 \n                  brightness-[24.3%] dark:brightness-100"
            }
          ) }) })
        },
        index
      )) })
    }
  ) });
};

export { $$About as $, Certifications as C, Experience as E, InfiniteTextCarousel as I, ProfileCard as P, useTheme as u };
