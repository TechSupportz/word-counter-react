import{u as m,a as f,c as b,j as s,F as d,b as r,r as i,d as x,R as w,e as v,P as y}from"./vendor.6df5efe8.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};C();const c=m,g=()=>f(),h=b({name:"counter",initialState:{wordCount:0,charCount:0,ignoreCitation:!1,autoSave:localStorage.getItem("autoSave")?localStorage.getItem("autoSave")==="true":!1},reducers:{updateWordCount:(o,e)=>{o.ignoreCitation&&(e.payload=e.payload.replace(/ *\([^)]*\) */g,""));const n=e.payload.replace(/\n/g," ").split(" ").filter(l=>l!=="");o.wordCount=n.length},updateCharCount:(o,e)=>{o.ignoreCitation&&(e.payload=e.payload.replace(/ *\([^)]*\) */g,""));const n=e.payload.replace(/\n/g,"").split("").filter(l=>l!=="");o.charCount=n.length},toggleIgnoreCitation:o=>{o.ignoreCitation=!o.ignoreCitation},toggleAutoSave:o=>{o.autoSave=!o.autoSave,localStorage.setItem("autoSave",o.autoSave?"true":"false")}}}),{updateWordCount:S,updateCharCount:N,toggleIgnoreCitation:k,toggleAutoSave:I}=h.actions;var W=h.reducer;const p=()=>{const o=g(),e=c(l=>l.counter.ignoreCitation),n=c(l=>l.counter.autoSave);return s(d,{children:[r("p",{className:"justify-self-start font-bold text-xl underline my-3.5 lg:mb-6",children:"Options"}),s("div",{className:"flex lg:flex-col gap-2.5 sm:gap-5 col-span-2 justify-self-start",children:[s("label",{htmlFor:"citation",className:"text-[0.85em] sm:text-sm lg:text-base",children:[r("input",{id:"citation",type:"checkbox",className:"rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1 sm:mr-2.5",checked:e,onChange:l=>o(k())}),"Ignore in-text citation"]}),s("label",{htmlFor:"autosave",className:"text-[0.85em] sm:text-sm lg:text-base",children:[r("input",{id:"autosave",type:"checkbox",className:"rounded border-none bg-white/90 dark:bg-gray-600/70 text-blue-400 focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-500/20 h-4 w-4 sm:h-6 sm:w-6 mr-1 sm:mr-2.5",checked:n,onChange:l=>o(I())}),"Enable autosave"]})]})]})},j=()=>{const o=c(t=>t.counter.wordCount),e=c(t=>t.counter.charCount),[n,l]=i.exports.useState(window.innerWidth);return i.exports.useEffect(()=>(window.addEventListener("resize",()=>l(window.innerWidth)),()=>{window.removeEventListener("resize",()=>l(window.innerWidth))})),s("div",{className:"grid grid-cols-2 lg:grid-cols-none lg:grid-row-2 gap-x-2 lg:gap-y-none justify-items-center lg:justify-items-start lg:items-center bg-blue-light dark:bg-blue-dark rounded-lg shadow-lg shadow-blue-light/60 dark:shadow-blue-dark/50 h-full py-5 px-3 lg:px-5 lg:py-0 mx-6",children:[s("div",{className:"text-center lg:text-left",children:[r("p",{className:"font-bold text-5xl lg:text-6xl lg:mb-2",children:o}),r("p",{className:"font-semibold text-2xl lg:text-4xl",children:"Words"})]}),s("div",{className:"text-center lg:text-left",children:[r("p",{className:"font-bold text-5xl lg:text-6xl lg:mb-2",children:e}),r("p",{className:"font-semibold text-2xl lg:text-4xl",children:n>=1024?"Characters":"Chars"})]}),r("div",{className:"justify-self-start col-span-2 lg:hidden",children:r(p,{})})]})},E=()=>{const o=g(),[e,n]=i.exports.useState(""),l=c(a=>a.counter.ignoreCitation),t=c(a=>a.counter.autoSave);return i.exports.useEffect(()=>{n(localStorage.getItem("input")||""),localStorage.setItem("input",e)},[]),i.exports.useEffect(()=>{o(S(e)),o(N(e))},[e,l,t]),i.exports.useEffect(()=>{t?localStorage.setItem("input",e):localStorage.removeItem("input")},[e,t]),r(d,{children:r("textarea",{placeholder:"Start typing to start counting :D",className:"w-full h-full rounded-lg bg-transparent border-blue-300 dark:border-slate-800 border-2 font-arial text-sm resize-none",value:e,onChange:a=>n(a.target.value)})})},A=()=>r(d,{children:r("header",{className:"flex justify-center rounded-lg bg-blue-light dark:bg-blue-dark shadow-lg shadow-blue-light/70 dark:shadow-blue-dark/50 font-bold text-3xl p-4 m-3.5 lg:text-4xl lg:p-5 lg:m-4",children:"Word Counter"})}),L=()=>s(d,{children:[r(A,{}),s("div",{className:"grid h-[70vh] lg:grid-cols-6 lg:grid-rows-5 lg:gap-y-8 mt-10 lg:mt-16",children:[r("div",{className:"lg:col-span-2 lg:row-span-3 h-full",children:r(j,{})}),r("div",{className:"hidden lg:block col-span-2 row-span-2 bg-blue-light dark:bg-blue-dark rounded-lg shadow-lg shadow-blue-light/60 dark:shadow-blue-dark/50 h-full px-5 mx-6",children:r(p,{})}),r("div",{className:"h-[50vh] lg:h-full mx-4 mt-7 lg:mt-0 lg:col-span-4 lg:row-span-full lg:order-first",children:r(E,{})})]})]}),O=x({reducer:{counter:W}});w.render(r(v.StrictMode,{children:r(y,{store:O,children:r(L,{})})}),document.getElementById("root"));
