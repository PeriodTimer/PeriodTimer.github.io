if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a56a4b11d29b987b49815fdf083135d7"},{url:"assets/index.1f588587.js",revision:"2907a506b4570f5613ad4dcc80dd77ea"},{url:"assets/index.980d31c8.css",revision:"8c183ec69f4264236d8bc3ac31437e85"},{url:"assets/vendor.9510d0c2.js",revision:"35e171b7d477b8ea8ef4afaf2d8a12b4"},{url:"index.html",revision:"7347f8e3272a1bccc431c96ba1d2faf3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"serviceWorker.js",revision:"20c229428baabbf56a25ef083f091530"},{url:"manifest.webmanifest",revision:"8d3a468d142ba21cd39e22d74c60cab9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
