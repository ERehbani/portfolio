import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.DatCARk7.js";import{l as w,g as B,c as q,e as j,u as N,P as g,f as p,h as b,i as H,a as V,D as K,m as U}from"./createLucideIcon.CSJ503DK.js";import{h as X,R as Y,u as Z,F as J}from"./Combination.Dhg4sukG.js";import{a as R}from"./utils.DgWKjmuI.js";import{c as h}from"./constants.DsoMsrI1.js";import"./index.Bz-QvCnq.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ee=w("chevron-left",Q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ae=w("chevron-right",te);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oe=w("x",ie);var f="Dialog",[E,Te]=q(f),[ne,c]=E(f),P=e=>{const{__scopeDialog:a,children:o,open:n,defaultOpen:r,onOpenChange:i,modal:l=!0}=e,d=s.useRef(null),m=s.useRef(null),[v,D]=B({prop:n,defaultProp:r??!1,onChange:i,caller:f});return t.jsx(ne,{scope:a,triggerRef:d,contentRef:m,contentId:j(),titleId:j(),descriptionId:j(),open:v,onOpenChange:D,onOpenToggle:s.useCallback(()=>D(z=>!z),[D]),modal:l,children:o})};P.displayName=f;var I="DialogTrigger",O=s.forwardRef((e,a)=>{const{__scopeDialog:o,...n}=e,r=c(I,o),i=N(a,r.triggerRef);return t.jsx(g.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":_(r.open),...n,ref:i,onClick:p(e.onClick,r.onOpenToggle)})});O.displayName=I;var C="DialogPortal",[re,k]=E(C,{forceMount:void 0}),A=e=>{const{__scopeDialog:a,forceMount:o,children:n,container:r}=e,i=c(C,a);return t.jsx(re,{scope:a,forceMount:o,children:s.Children.map(n,l=>t.jsx(b,{present:o||i.open,children:t.jsx(H,{asChild:!0,container:r,children:l})}))})};A.displayName=C;var u="DialogOverlay",T=s.forwardRef((e,a)=>{const o=k(u,e.__scopeDialog),{forceMount:n=o.forceMount,...r}=e,i=c(u,e.__scopeDialog);return i.modal?t.jsx(b,{present:n||i.open,children:t.jsx(le,{...r,ref:a})}):null});T.displayName=u;var se=V("DialogOverlay.RemoveScroll"),le=s.forwardRef((e,a)=>{const{__scopeDialog:o,...n}=e,r=c(u,o);return t.jsx(Y,{as:se,allowPinchZoom:!0,shards:[r.contentRef],children:t.jsx(g.div,{"data-state":_(r.open),...n,ref:a,style:{pointerEvents:"auto",...n.style}})})}),x="DialogContent",M=s.forwardRef((e,a)=>{const o=k(x,e.__scopeDialog),{forceMount:n=o.forceMount,...r}=e,i=c(x,e.__scopeDialog);return t.jsx(b,{present:n||i.open,children:i.modal?t.jsx(de,{...r,ref:a}):t.jsx(ce,{...r,ref:a})})});M.displayName=x;var de=s.forwardRef((e,a)=>{const o=c(x,e.__scopeDialog),n=s.useRef(null),r=N(a,o.contentRef,n);return s.useEffect(()=>{const i=n.current;if(i)return X(i)},[]),t.jsx(F,{...e,ref:r,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,i=>{i.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,d=l.button===0&&l.ctrlKey===!0;(l.button===2||d)&&i.preventDefault()}),onFocusOutside:p(e.onFocusOutside,i=>i.preventDefault())})}),ce=s.forwardRef((e,a)=>{const o=c(x,e.__scopeDialog),n=s.useRef(!1),r=s.useRef(!1);return t.jsx(F,{...e,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{e.onCloseAutoFocus?.(i),i.defaultPrevented||(n.current||o.triggerRef.current?.focus(),i.preventDefault()),n.current=!1,r.current=!1},onInteractOutside:i=>{e.onInteractOutside?.(i),i.defaultPrevented||(n.current=!0,i.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=i.target;o.triggerRef.current?.contains(l)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&r.current&&i.preventDefault()}})}),F=s.forwardRef((e,a)=>{const{__scopeDialog:o,trapFocus:n,onOpenAutoFocus:r,onCloseAutoFocus:i,...l}=e,d=c(x,o),m=s.useRef(null),v=N(a,m);return Z(),t.jsxs(t.Fragment,{children:[t.jsx(J,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:r,onUnmountAutoFocus:i,children:t.jsx(K,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":_(d.open),...l,ref:v,onDismiss:()=>d.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(he,{titleId:d.titleId}),t.jsx(ge,{contentRef:m,descriptionId:d.descriptionId})]})]})}),y="DialogTitle",xe=s.forwardRef((e,a)=>{const{__scopeDialog:o,...n}=e,r=c(y,o);return t.jsx(g.h2,{id:r.titleId,...n,ref:a})});xe.displayName=y;var S="DialogDescription",me=s.forwardRef((e,a)=>{const{__scopeDialog:o,...n}=e,r=c(S,o);return t.jsx(g.p,{id:r.descriptionId,...n,ref:a})});me.displayName=S;var $="DialogClose",W=s.forwardRef((e,a)=>{const{__scopeDialog:o,...n}=e,r=c($,o);return t.jsx(g.button,{type:"button",...n,ref:a,onClick:p(e.onClick,()=>r.onOpenChange(!1))})});W.displayName=$;function _(e){return e?"open":"closed"}var L="DialogTitleWarning",[Me,G]=U(L,{contentName:x,titleName:y,docsSlug:"dialog"}),he=({titleId:e})=>{const a=G(L),o=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},pe="DialogDescriptionWarning",ge=({contentRef:e,descriptionId:a})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(pe).contentName}}.`;return s.useEffect(()=>{const r=e.current?.getAttribute("aria-describedby");a&&r&&(document.getElementById(a)||console.warn(n))},[n,e,a]),null},ue=P,fe=O,ve=A,De=T,je=M,we=W;function Ne({...e}){return t.jsx(ue,{"data-slot":"dialog",...e})}function be({...e}){return t.jsx(fe,{"data-slot":"dialog-trigger",...e})}function Ce({...e}){return t.jsx(ve,{"data-slot":"dialog-portal",...e})}function ye({className:e,...a}){return t.jsx(De,{"data-slot":"dialog-overlay",className:R("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function _e({className:e,children:a,showCloseButton:o=!0,...n}){return t.jsxs(Ce,{"data-slot":"dialog-portal",children:[t.jsx(ye,{}),t.jsxs(je,{"data-slot":"dialog-content",className:R("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...n,children:[a,o&&t.jsxs(we,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[t.jsx(oe,{}),t.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function Fe({content:e}){const[a,o]=s.useState(0),n=()=>{o(l=>(l+1)%h.length)},r=()=>{o(l=>(l-1+h.length)%h.length)},i=h[a];return t.jsxs("div",{className:`glass-card text-[#3e3e3e] dark:text-white rounded-2xl p-3 md:p-8 flex items-center md:justify-center w-full ml-auto mx-auto relative h-full max-lg:w-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow bg-black/20 backdrop-blur-sm 
    [@media(max-height:800px)]:p-2 [@media(max-height:800px)]:md:p-6
    [@media(max-height:700px)]:p-2 [@media(max-height:700px)]:md:p-4
    [@media(max-height:600px)]:p-1.5 [@media(max-height:600px)]:md:p-3
    [@media(max-height:500px)]:p-1 [@media(max-height:500px)]:md:p-2 [@media(max-height:565px)]:overflow-y-auto [@media(max-height:565px)]:overflow-x-hidden`,children:[t.jsx("button",{onClick:r,className:`px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute left-[-6px] top-auto hover:scale-110 transition-transform 
        [@media(max-height:700px)]:px-2 [@media(max-height:700px)]:md:px-6
        [@media(max-height:600px)]:px-1.5 [@media(max-height:600px)]:md:px-4
        [@media(max-height:500px)]:px-1 [@media(max-height:500px)]:md:px-3`,"aria-label":"Previous certificate",children:t.jsx("div",{className:`w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors 
        [@media(max-height:700px)]:w-5 [@media(max-height:700px)]:h-5
        [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4
        [@media(max-height:500px)]:w-3.5 [@media(max-height:500px)]:h-3.5`,children:t.jsx(ee,{className:`w-3 h-3 text-[#3e3e3e] dark:text-white 
          [@media(max-height:700px)]:w-2.5 [@media(max-height:700px)]:h-2.5
          [@media(max-height:600px)]:w-2 [@media(max-height:600px)]:h-2
          [@media(max-height:500px)]:w-1.5 [@media(max-height:500px)]:h-1.5`})})}),t.jsxs("div",{className:`flex flex-col justify-center w-full gap-4 
      [@media(max-height:800px)]:gap-3
      [@media(max-height:700px)]:gap-2
      [@media(max-height:600px)]:gap-1.5
      [@media(max-height:500px)]:gap-1`,children:[t.jsx("h2",{className:`text-2xl font-semibold text-center
        [@media(max-height:800px)]:text-xl
        [@media(max-height:700px)]:text-lg
        [@media(max-height:600px)]:text-base
        [@media(max-height:500px)]:text-sm`,children:e.title}),t.jsx("div",{className:"w-full overflow-hidden flex justify-center items-center",children:t.jsx("div",{className:`p-4 w-full h-40 flex items-center justify-center mx-auto 
          [@media(max-height:800px)]:p-3 [@media(max-height:800px)]:h-32
          [@media(max-height:700px)]:p-2 [@media(max-height:700px)]:h-28
          [@media(max-height:600px)]:p-2 [@media(max-height:600px)]:h-20
          [@media(max-height:500px)]:p-1 [@media(max-height:500px)]:h-16
          [@media(max-height:713px)]:max-h-20 [@media(max-height:713px)]:p-2
          `,children:t.jsxs("div",{className:"text-center max-lg:text-sm",children:[t.jsxs(Ne,{children:[t.jsx(be,{asChild:!0,className:"z-50",children:t.jsx("button",{className:"hover:underline hover:font-semibold transition-all duration-75 focus:outline-none",children:t.jsx("h3",{className:`text-lg text-center h-14 flex items-center justify-center cursor-pointer px-2 
                    [@media(max-height:800px)]:text-base [@media(max-height:800px)]:h-12
                    [@media(max-height:700px)]:text-sm [@media(max-height:700px)]:h-10
                    [@media(max-height:600px)]:text-xs [@media(max-height:600px)]:h-8 [@media(max-height:600px)]:px-1
                    [@media(max-height:500px)]:text-xs [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:px-0.5`,children:i.title})})}),t.jsx(_e,{className:"max-w-4xl max-h-[90vh] p-0",children:t.jsx("div",{className:"relative",children:t.jsx("img",{src:i.link||"/placeholder.svg",alt:`${i.title} Certificate`,className:"w-full h-auto object-contain",crossOrigin:"anonymous"})})})]}),t.jsx("p",{className:`text-sm text-gray-400 text-center mt-3
              [@media(max-height:800px)]:mt-2 [@media(max-height:800px)]:text-xs
              [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-xs
              [@media(max-height:600px)]:mt-1 [@media(max-height:600px)]:text-xs
              [@media(max-height:500px)]:mt-1 [@media(max-height:500px)]:text-xs`,children:i.institution})]})})}),t.jsx("div",{className:`flex justify-center space-x-2 
        [@media(max-height:600px)]:space-x-1
        [@media(max-height:500px)]:space-x-0.5`,children:h.map((l,d)=>t.jsx("div",{className:`w-2 h-2 rounded-full transition-colors 
              [@media(max-height:700px)]:w-1.5 [@media(max-height:700px)]:h-1.5
              [@media(max-height:600px)]:w-1 [@media(max-height:600px)]:h-1
              [@media(max-height:500px)]:w-0.5 [@media(max-height:500px)]:h-0.5 ${d===a?"bg-gray-500":"bg-gray-300"}`,"aria-label":`Certificate ${d+1}`},d))})]}),t.jsx("button",{onClick:n,className:`px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute right-[-6px] top-auto hover:scale-110 transition-transform 
        [@media(max-height:700px)]:px-2 [@media(max-height:700px)]:md:px-6
        [@media(max-height:600px)]:px-1.5 [@media(max-height:600px)]:md:px-4
        [@media(max-height:500px)]:px-1 [@media(max-height:500px)]:md:px-3`,"aria-label":"Next certificate",children:t.jsx("div",{className:`w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors 
        [@media(max-height:700px)]:w-5 [@media(max-height:700px)]:h-5
        [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4
        [@media(max-height:500px)]:w-3.5 [@media(max-height:500px)]:h-3.5`,children:t.jsx(ae,{className:`w-3 h-3 text-[#3e3e3e] dark:text-white 
          [@media(max-height:700px)]:w-2.5 [@media(max-height:700px)]:h-2.5
          [@media(max-height:600px)]:w-2 [@media(max-height:600px)]:h-2
          [@media(max-height:500px)]:w-1.5 [@media(max-height:500px)]:h-1.5`})})})]})}export{Fe as default};
