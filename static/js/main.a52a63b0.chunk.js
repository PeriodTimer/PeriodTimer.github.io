(this.webpackJsonpclasstimers=this.webpackJsonpclasstimers||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(7),r=n.n(i),s=(n(13),n(2)),l=n(3),u=function(e){return e-18e3<0?e-18e3+86400:e-18e3};var d=function(e){var t=Object(o.useState)(0),n=Object(s.a)(t,2),a=n[0],i=n[1],r=e.times;return Object(o.useEffect)((function(){var e=u(Math.round(Date.now()/1e3%86400)),t=(new Date).getDay().toString();"6"!==t&&"7"!==t?r&&[].concat(Object(l.a)(r.any),Object(l.a)(r[t])).forEach((function(t){if(t.start<=e&&t.end>=e){var n=t.end-e,c="";n/3600>1&&(c+="".concat(Math.floor(n/3600),"h")),n/60>1&&(c+=" ".concat(Math.floor(Math.floor(n%3600)/60),"m")),c+=" ".concat(n%60,"s"),i(c.trim())}})):i("Imagine Having School on the Weekends")})),Object(c.jsx)("h1",{children:a})},f=function(e){var t=Object(o.useState)("Loading..."),n=Object(s.a)(t,2),a=n[0],i=n[1],r=e.times;return Object(o.useEffect)((function(){var e=u(Math.round(Date.now()/1e3%86400)),t=(new Date).getDay().toString();if("6"!==t&&"7"!==t){if(r){var n=[].concat(Object(l.a)(r.any),Object(l.a)(r[t])),c=!1;n.forEach((function(t){if(t.start<=e&&t.end>=e){var n="";if(void 0!==t.richContext){var o=localStorage.getItem("VRA_"+t.richContext);null!==o&&(n=" | ".concat(o))}i("".concat(t.event).concat(n)),c=!0}})),c||console.log("Error: No Section Found, Please report this to Vlad: "+btoa(JSON.stringify(r)))}}else i("Imagine Having School on the Weekends")})),Object(c.jsx)("p",{children:a})},h=n.p+"static/media/times.8ada58e8.svg";var j=function(e){var t=Object(o.useState)(null),n=Object(s.a)(t,2),i=n[0],r=n[1],u=Object(o.useState)(null),d=Object(s.a)(u,2),f=d[0],j=d[1];return Object(o.useEffect)((function(){var t=e.times;if(t){var n={};Object.keys(t).forEach((function(e){n[e]=[],t[e].forEach((function(t){if(void 0!==t.richContext){var o=localStorage.getItem("VRA_"+t.richContext),i="";null!==o&&(i=o),n[e].push(Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsxs)("p",{children:[t.event," | ID: ",t.richContext]}),Object(c.jsx)("div",{className:"richContextContainer",children:Object(c.jsx)("input",{className:"richContextEditor",type:"text",defaultValue:i,onInput:function(e){return n=t.richContext,c=e.target.value,void localStorage.setItem("VRA_"+n,c);var n,c}})})]},t.richContext))}}))}));var o=[];Object.keys(n).forEach((function(e){var t=function(e){switch(e){case"1":return"Monday";case"2":return"Tuesday";case"3":return"Wednesday";case"4":return"Thrusday";case"5":return"Friday";case"any":return"Every Day";default:return"idk -> "+e}}(e.toString());o.push(Object(c.jsx)("h2",{children:t},t)),o=[].concat(Object(l.a)(o),Object(l.a)(n[e]))})),r(o)}}),[]),Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("img",{src:h,alt:"Close!",className:"modal-close",onClick:function(){return e.handleCloseSettings()}}),Object(c.jsxs)("div",{className:"richContextEditors",children:[i," ",Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{onClick:function(){return function(){var e={};Object.keys(localStorage).forEach((function(t){t.match(/VRA_[0-9]*/)&&(e[t]=localStorage.getItem(t))}));var t=document.createElement("a"),n=new Blob([JSON.stringify(e)],{type:"application/json"});t.href=URL.createObjectURL(n),t.download="VRA_Export.json",document.body.appendChild(t),t.click()}()},children:"Export!"}),Object(c.jsx)("input",{type:"file",accept:".json, .txt",onChange:function(e){j(e.target.files[0])},onClick:function(e){e.target.value=null}}),Object(c.jsx)("button",{onClick:function(){return function(){var e=new FileReader;e.onload=function(e){return function(){var t=e.result,n=JSON.parse(t);Object.keys(n).forEach((function(e){localStorage.setItem(e,n[e])})),window.location.reload()}}(e),e.readAsText(f)}()},children:"Submit"})]})]})]})},b=n.p+"static/media/fa-cog.349ce3a7.svg";var g=function(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)(c.Fragment,{children:[!1===a?Object(c.jsx)("img",{src:b,className:"settings-icon",alt:"Settings Icon",onClick:function(){return i(!0),void e.changeAppVisibility(!1)}}):null,a?Object(c.jsx)(j,{handleCloseSettings:function(){i(!1),e.changeAppVisibility(!0)},times:e.times}):null]})};n(14);var v=function(){var e=Object(o.useState)(new Date),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!0),r=Object(s.a)(i,2),l=r[0],u=r[1],h=Object(o.useState)(null),j=Object(s.a)(h,2),b=j[0],v=j[1];return Object(o.useEffect)((function(){fetch("https://api.jsonbin.io/b/5fca3293516f9d1270280016").then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),Object(o.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(g,{times:b,changeAppVisibility:u}),l?Object(c.jsxs)("p",{className:"corner-clock",children:[n.toLocaleTimeString()," ",n.toLocaleDateString()]}):null]}),l?Object(c.jsxs)("header",{className:"App-body",children:[Object(c.jsx)(d,{times:b}),Object(c.jsx)(f,{times:b})]}):null]})},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("Localhost Message: This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(t,e)}))}}({onSuccess:function(){return console.log("good")},onUpdate:function(e){e&&e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}}),m(console.log)}},[[15,1,2]]]);
//# sourceMappingURL=main.a52a63b0.chunk.js.map