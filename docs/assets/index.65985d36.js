import{c as y,a as g,r as w,b as l,o as b,d as E,e as s,f as i,w as _,t as d,u,F as O,p as k,g as x,h as p,i as L}from"./vendor.70e6ea50.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};I();const A="modulepreload",f={},P="./",h=function(n,a){return!a||a.length===0?n():Promise.all(a.map(o=>{if(o=`${P}${o}`,o in f)return;f[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":A,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((m,v)=>{r.addEventListener("load",m),r.addEventListener("error",v)})})).then(()=>n())},S=[{path:"/",name:"Explore",component:()=>h(()=>import("./explore.d5086ac2.js"),["assets/explore.d5086ac2.js","assets/explore.63b0ded6.css","assets/vendor.70e6ea50.js","assets/preference.fa5b500b.js"])},{path:"/view/:project",name:"View",component:()=>h(()=>import("./view.344fc398.js"),["assets/view.344fc398.js","assets/view.1d28b641.css","assets/vendor.70e6ea50.js","assets/preference.fa5b500b.js"])}],C=y({history:g(),routes:S});var N=(c,n)=>{const a=c.__vccOpts||c;for(const[o,e]of n)a[o]=e;return a};const R=c=>(k("data-v-80afb5fe"),c=c(),x(),c),V={class:"layout-header"},T={class:"layout-header__wrap"},j={class:"layout-header__body"},D={class:"layout-header__title"},F=p(" Components "),H={class:"layout-header__navigation"},$=p("Explore"),B=R(()=>s("a",{href:"https://github.com/redgoose-dev/components",target:"_blank"},"GitHub",-1)),q={class:"container"},U={class:"container__wrap"},W={class:"layout-footer"},Y={class:"layout-footer__wrap"},G={class:"layout-footer__copyright"},K={setup(c){w({copyright:window.AUTHOR});const n=window.AUTHOR,a=new Date().getFullYear();return(o,e)=>{const t=l("router-link"),r=l("router-view");return b(),E(O,null,[s("header",V,[s("div",T,[s("div",j,[s("h1",D,[i(t,{to:"/"},{default:_(()=>[F]),_:1})]),s("nav",H,[i(t,{to:"/"},{default:_(()=>[$]),_:1}),B])])])]),s("div",q,[s("div",U,[i(r)])]),s("footer",W,[s("div",Y,[s("p",G," Copyright \xA9 "+d(u(a))+" "+d(u(n))+" Inc. ",1)])])],64)}}};var z=N(K,[["__scopeId","data-v-80afb5fe"]]);L(z).use(C).mount("#app");export{N as _};
