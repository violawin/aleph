let e,t,n,o=0,s=!1,i=!1,r=!1,l=!1,c=!1;const a=window,f=document,u={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},d=(()=>!!f.documentElement.attachShadow)(),p=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h={},m=new WeakMap,$=e=>m.get(e),w=(e,t)=>m.set(t.s=e,t),b=(e,t)=>t in e,g=e=>console.error(e),y=new Map,v=new Map,j=[],O=[],_=[],k=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&u.t?R(M):u.raf(M))},S=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){g(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},M=()=>{o++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){g(e)}e.length=0})(j);const e=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;S(O,e),S(_,e),O.length>0&&(_.push(...O),O.length=0),(s=j.length+O.length+_.length>0)?u.raf(M):o=0},R=e=>Promise.resolve().then(e),U=k(j,!1),C=k(O,!0),P={},N=e=>null!=e,L=e=>e.toLowerCase(),x=e=>"object"==(e=typeof e)||"function"===e,T=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_aleph("./p-8178315f.js"),E=async()=>{const e=new RegExp("/aleph(\\.esm)?\\.js($|\\?|#)"),t=Array.from(f.querySelectorAll("script")).find(t=>e.test(t.src)||"aleph"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href));return D(e.href),window.customElements||await __sc_import_aleph("./p-59290340.js"),Object.assign({},n,{resourcesUrl:e.href})}},D=e=>{const t=(()=>`__sc_import_${"aleph".replace(/\s|-/g,"_")}`)();try{a[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;a[t]=n=>{const s=new URL(n,e).href;let i=o.get(s);if(!i){const e=f.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${t}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{e.onload=()=>{n(a[t].m),e.remove()}}),o.set(s,i),f.head.appendChild(e)}return i}}},F="http://www.w3.org/1999/xlink",I=new WeakMap,W=(e,t)=>"sc-"+(t?e+"-"+t:e),A=(e,t,...n)=>{let o,s,i=null,r=!1,l=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)i=t[n],Array.isArray(i)?a(i):null!=i&&"boolean"!=typeof i&&((r="function"!=typeof e&&!x(i))&&(i=String(i)),r&&l?c[c.length-1].i+=i:c.push(r?{t:0,i}:i),l=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,B);const f={t:0,l:e,u:c.length>0?c:null,p:void 0,h:t};return f.$=o,f.g=s,f},q={},B={forEach:(e,t)=>e.map(H).forEach(t),map:(e,t)=>e.map(H).map(t).map(J)},H=e=>({vattrs:e.h,vchildren:e.u,vkey:e.$,vname:e.g,vtag:e.l,vtext:e.i}),J=e=>({t:0,h:e.vattrs,u:e.vchildren,$:e.vkey,g:e.vname,l:e.vtag,i:e.vtext}),V=(e,t,n,o,s,i)=>{if(n!==o)if("class"===t){const t=e.classList;z(n).forEach(e=>t.remove(e)),z(o).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(t.startsWith("on")&&!b(e,t))t=b(e,L(t))?L(t.substring(2)):L(t[2])+t.substring(3),n&&u.rel(e,t,n,!1),o&&u.ael(e,t,o,!1);else{const n=b(e,t),r=x(o);if((n||r&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{const n=null==o?"":o;e[t]!==n&&(e[t]=n)}}catch(e){}const l=!(!s||t===(t=t.replace(/^xlink\:?/,"")));null==o||!1===o?l?e.removeAttributeNS(F,L(t)):e.removeAttribute(t):(!n||4&i||s)&&!r&&(o=!0===o?"":o.toString(),l?e.setAttributeNS(F,L(t),o):e.setAttribute(t,o))}},z=e=>e?e.split(/\s+/).filter(e=>e):[],G=(e,t,n,o)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,i=e&&e.h||P,r=t.h||P;for(o in i)o in r||V(s,o,i[o],void 0,n,t.t);for(o in r)V(s,o,i[o],r[o],n,t.t)},K=(o,s,r,a)=>{let u,d,p,h=s.u[r],m=0;if(i||(l=!0,"slot"===h.l&&(e&&a.classList.add(e+"-s"),h.t|=h.u?2:1)),N(h.i))h.p=f.createTextNode(h.i);else if(1&h.t)h.p=f.createTextNode("");else{if(u=h.p=c||"svg"===h.l?f.createElementNS("http://www.w3.org/2000/svg",h.l):f.createElement(2&h.t?"slot-fb":h.l),G(null,h,c="svg"===h.l||"foreignObject"!==h.l&&c),N(e)&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),h.u)for(m=0;m<h.u.length;++m)(d=K(o,h,m,u))&&u.appendChild(d);"svg"===h.l?c=!1:"foreignObject"===h.p.tagName&&(c=!0)}return h.p["s-hn"]=n,3&h.t&&(h.p["s-sr"]=!0,h.p["s-cr"]=t,h.p["s-sn"]=h.g||"",(p=o&&o.u&&o.u[r])&&p.l===h.l&&o.p&&Q(o.p,!1)),h.p},Q=(e,t)=>{u.t|=1;const o=e.childNodes;for(let e=o.length-1;e>=0;e--){const s=o[e];s["s-hn"]!==n&&s["s-ol"]&&(te(s).insertBefore(s,ee(s)),s["s-ol"].remove(),s["s-ol"]=void 0,l=!0),t&&Q(s,t)}u.t&=-2},X=(e,t,o,s,i,r)=>{let l,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&L(c.tagName)===n&&(c=c.shadowRoot);i<=r;++i)s[i]&&(l=K(null,o,i,e))&&(s[i].p=l,c.insertBefore(l,ee(t)))},Y=(e,t,n,o)=>{for(;t<=n;++t)N(e[t])&&(o=e[t].p,re(e[t],!0),r=!0,o["s-ol"]?o["s-ol"].remove():Q(o,!0),o.remove())},Z=(e,t)=>e.l===t.l&&("slot"===e.l?e.g===t.g:e.$===t.$),ee=e=>e&&e["s-ol"]||e,te=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ne=(e,t)=>{const n=t.p=e.p,o=e.u,s=t.u;let i;c=n&&N(n.parentNode)&&void 0!==n.ownerSVGElement,c="svg"===t.l||"foreignObject"!==t.l&&c,N(t.i)?(i=n["s-cr"])?i.parentNode.textContent=t.i:e.i!==t.i&&(n.textContent=t.i):("slot"===t.l||G(e,t,c),N(o)&&N(s)?((e,t,n,o)=>{let s,i,r=0,l=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],p=o.length-1,h=o[0],m=o[p];for(;r<=f&&l<=p;)if(null==u)u=t[++r];else if(null==d)d=t[--f];else if(null==h)h=o[++l];else if(null==m)m=o[--p];else if(Z(u,h))ne(u,h),u=t[++r],h=o[++l];else if(Z(d,m))ne(d,m),d=t[--f],m=o[--p];else if(Z(u,m))"slot"!==u.l&&"slot"!==m.l||Q(u.p.parentNode,!1),ne(u,m),e.insertBefore(u.p,d.p.nextSibling),u=t[++r],m=o[--p];else if(Z(d,h))"slot"!==u.l&&"slot"!==m.l||Q(d.p.parentNode,!1),ne(d,h),e.insertBefore(d.p,u.p),d=t[--f],h=o[++l];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&N(t[a].$)&&t[a].$===h.$){c=a;break}c>=0?((i=t[c]).l!==h.l?s=K(t&&t[l],n,c,e):(ne(i,h),t[c]=void 0,s=i.p),h=o[++l]):(s=K(t&&t[l],n,l,e),h=o[++l]),s&&te(u.p).insertBefore(s,ee(u.p))}r>f?X(e,null==o[p+1]?null:o[p+1].p,n,o,l,p):l>p&&Y(t,r,f)})(n,o,t,s):N(s)?(N(e.i)&&(n.textContent=""),X(n,null,t,s,0,s.length-1)):N(o)&&Y(o,0,o.length-1)),c&&"svg"===t.l&&(c=!1)},oe=(e,t,n,o,s,i,r,l)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,i=0;i<s;i++)if(n[i]["s-hn"]!==t["s-hn"])if(l=n[i].nodeType,""!==r){if(1===l&&r===n[i].getAttribute("slot")){t.hidden=!0;break}}else if(1===l||3===l&&""!==n[i].textContent.trim()){t.hidden=!0;break}oe(t)}},se=[],ie=e=>{let t,n,o,s,i=e.childNodes,l=i.length,c=0,a=0,f=0;for(l=i.length;c<l;c++){if((t=i[c])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(se.some(e=>e.v===n)||(r=!0,n["s-sn"]=s,se.push({j:t,v:n})));1===t.nodeType&&ie(t)}},re=(e,t)=>{e&&(e.h&&e.h.ref&&e.h.ref(t?null:e.p),e.u&&e.u.forEach(e=>{re(e,t)}))},le=(e,t,n,o)=>{t.t|=16;const s=t.s,i=()=>ce(e,t,n,s,o);let r;return o&&(t.t|=256,t.O&&(t.O.forEach(([e,t])=>ue(s,e,t)),t.O=null),r=ue(s,"componentWillLoad")),r=de(r,()=>ue(s,"componentWillRender")),de(r,()=>C(i))},ce=(o,s,c,a,p)=>{s.t&=-17,o["s-lr"]=!1,p&&((e,t,n)=>{const o=((e,t,n)=>{let o=W(t._,n),s=v.get(o);if(e=11===e.nodeType?e:f,s||(o=W(t._),s=v.get(o)),s)if("string"==typeof s){let t,n=I.get(e=e.head||e);n||I.set(e,n=new Set),n.has(o)||((t=f.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(o))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return o})(d&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,n);10&t.t&&(e["s-sc"]=o,e.classList.add(o+"-h"),2&t.t&&e.classList.add(o+"-s"))})(o,c,s.k),s.t|=4;try{((o,s,c,a)=>{n=L(o.tagName);const p=s.S||{t:0},h=(e=>e&&e.l===q)(a)?a:A(null,null,a);if(c.M&&(h.h=h.h||{},c.M.forEach(([e,t])=>h.h[t]=o[e])),h.l=null,h.t|=4,s.S=h,h.p=p.p=o.shadowRoot||o,e=o["s-sc"],t=o["s-cr"],i=d&&0!=(1&c.t),l=r=!1,ne(p,h),l){ie(h.p);for(let e=0;e<se.length;e++){const t=se[e];if(!t.v["s-ol"]){const e=f.createTextNode("");e["s-nr"]=t.v,t.v.parentNode.insertBefore(t.v["s-ol"]=e,t.v)}}u.t|=1;for(let e=0;e<se.length;e++){const t=se[e],n=t.j.parentNode;let o=t.j.nextSibling,s=t.v["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.v["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.v.parentNode||t.v.nextSibling!==o)&&t.v!==o&&n.insertBefore(t.v,o)}u.t&=-2}r&&oe(h.p),se.length=0})(o,s,c,a.render&&a.render())}catch(e){g(e)}s.t&=-5,o["s-lr"]=!0,s.t|=2,o["s-rc"].length>0&&(o["s-rc"].forEach(e=>e()),o["s-rc"].length=0),ae(o,s)},ae=(e,t,n)=>{if(!e["s-al"]){const o=t.s,s=t.R;64&t.t?ue(o,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),ue(o,"componentDidLoad"),t.U(e),s||fe()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.R=void 0)}},fe=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},ue=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){g(e)}},de=(e,t)=>e&&e.then?e.then(t):t(),pe=(e,t,n)=>{if(t.C){e.watchers&&(t.P=e.watchers);const o=Object.entries(t.C),s=e.prototype;if(o.forEach(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,e,{get(){return((e,t)=>$(e).N.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=$(this),i=s.L,r=s.N.get(t),l=s.t;if(!((n=((e,t)=>null==e||x(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.C[t][0]))===r||8&l&&void 0!==r)&&(s.N.set(t,n),s.s)){if(o.P&&128&l){const e=o.P[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,r,t)}catch(e){g(e)}})}2==(22&l)&&le(i,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,e,{value(...t){const n=$(this);return n.T.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,o){u.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.M.push([e,s]),s})}}return e},he=[],me=e=>he.push(e),$e=e=>$(e).k,we=e=>{ue(e,"connectedCallback")},be=(e,t)=>{(t=e["s-cr"]=f.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ge=(e,t={})=>{const n=[],o=t.exclude||[],s=f.head,i=a.customElements,r=s.querySelector("meta[charset]"),l=f.createElement("style");let c;Object.assign(u,t),u.o=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(u.t|=4),e.forEach(e=>e[1].forEach(t=>{const s={t:t[0],_:t[1],C:t[2],D:t[3],M:[],P:{}};!d&&1&s.t&&(s.t|=8);const r=s._;s.F=e[0],o.includes(r)||i.get(r)||(n.push(r),i.define(r,pe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,L:e,N:new Map};t.T=new Promise(e=>t.U=e),m.set(e,t)}})(e),1&s.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){c&&(clearTimeout(c),c=null),u.jmp(()=>((e,t)=>{if(0==(1&u.t)){const n=$(e);if(t.D&&(n.I=((e,t,n)=>{t.O=t.O||[];const o=n.map(([n,o,s])=>{const i=((e,t)=>4&t?f:8&t?a:32&t?f.body:16&t?e.parentElement:e)(e,n),r=((e,t)=>n=>{256&e.t?e.s[t](n):e.O.push([t,n])})(t,s),l=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return u.ael(i,o,r,l),()=>u.rel(i,o,r,l)});return()=>o.forEach(e=>e())})(e,n,t.D)),!(1&n.t)){let o;n.t|=1,o||(4&t.t||8&t.t)&&be(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.R=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.C&&Object.entries(t.C).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),R(()=>(async(e,t,n,o,s)=>{if(0==(32&t.t)){t.t|=32,null==t.k&&(t.k="string"!=typeof n.F?(e=>he.map(t=>t(e)).find(e=>!!e))(e):""),(s=((e,t)=>{const n=e._.replace(/-/g,"_"),o="string"!=typeof e.F?e.F[t.k]:e.F,s=y.get(o);return s?s[n]:__sc_import_aleph(`./${o}.entry.js`).then(e=>(y.set(o,e),e[n]),g)})(n,t)).then&&(s=await s),s.isProxied||(n.P=s.watchers,pe(s,n,2),s.isProxied=!0),t.t|=8;try{new s(t)}catch(e){g(e)}t.t&=-9,t.t|=128,we(t.s);const o=W(n._,t.k);if(!v.has(o)&&s.style){let e=s.style;"string"!=typeof e&&(e=e[t.k]),8&n.t&&(e=await __sc_import_aleph("./p-c68d0961.js").then(t=>t.scopeCss(e,o,!1))),((e,t,n)=>{let o=v.get(e);p&&n?(o=o||new CSSStyleSheet).replace(t):o=t,v.set(e,o)})(o,e,!!(1&n.t))}}const i=t.R,r=()=>le(e,t,n,!0);i&&!1===i["s-lr"]&&i["s-rc"]?i["s-rc"].push(r):r()})(e,n,t))}we(n.s)}})(this,s))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=$(this),t=e.s;e.I&&(e.I(),e.I=void 0),ue(t,"disconnectedCallback"),ue(t,"componentDidUnload")}})())}"s-init"(){const e=$(this);e.s&&ae(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=$(e);2&n.t&&le(e,n,t,!1)}})(this,s)}componentOnReady(){return $(this).T}},s,1)))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),s.insertBefore(l,r?r.nextSibling:s.firstChild),u.jmp(()=>c=setTimeout(fe,30))},ye=(e,t,n)=>{const o=Oe(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ve=e=>{const t=new URL(e,u.o);return t.origin!==a.location.origin?t.href:t.pathname},je=(e,t)=>t in h?h[t]:"window"===t?a:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?ve("."):"queue"===t?{write:C,read:U,tick:{then:e=>R(e)}}:void 0)),Oe=e=>$(e).L,_e=(e,t)=>("string"==typeof e&&(t=e,e=void 0),(e=>ke(e))(e).includes(t)),ke=(e=window)=>{e.Ionic=e.Ionic||{};let t=e.Ionic.platforms;return null==t&&(t=e.Ionic.platforms=Se(e)).forEach(t=>e.document.documentElement.classList.add(`plt-${t}`)),t},Se=e=>Object.keys(Te).filter(t=>Te[t](e)),Me=e=>!!Le(e,/iPad/i)||!(!Le(e,/Macintosh/i)||!Ue(e)),Re=e=>Le(e,/android|sink/i),Ue=e=>xe(e,"(any-pointer:coarse)"),Ce=e=>Pe(e)||Ne(e),Pe=e=>!!(e.cordova||e.phonegap||e.PhoneGap),Ne=e=>{const t=e.Capacitor;return!(!t||!t.isNative)},Le=(e,t)=>t.test(e.navigator.userAgent),xe=(e,t)=>e.matchMedia(t).matches,Te={ipad:Me,iphone:e=>Le(e,/iPhone/i),ios:e=>Le(e,/iPhone|iPod/i)||Me(e),android:Re,phablet:e=>{const t=e.innerWidth,n=e.innerHeight,o=Math.min(t,n),s=Math.max(t,n);return o>390&&o<520&&s>620&&s<800},tablet:e=>{const t=e.innerWidth,n=e.innerHeight,o=Math.min(t,n),s=Math.max(t,n);return Me(e)||(e=>Re(e)&&!Le(e,/mobile/i))(e)||o>460&&o<820&&s>780&&s<1400},cordova:Pe,capacitor:Ne,electron:e=>Le(e,/electron/i),pwa:e=>!(!e.matchMedia("(display-mode: standalone)").matches&&!e.navigator.standalone),mobile:Ue,mobileweb:e=>Ue(e)&&!Ce(e),desktop:e=>!Ue(e),hybrid:Ce};class Ee{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,t){const n=this.m.get(e);return void 0!==n?n:t}getBoolean(e,t=!1){const n=this.m.get(e);return void 0===n?t:"string"==typeof n?"true"===n:!!n}getNumber(e,t){const n=parseFloat(this.m.get(e));return isNaN(n)?void 0!==t?t:NaN:n}set(e,t){this.m.set(e,t)}}const De=new Ee;let Fe;const Ie=e=>e&&$e(e)||Fe,We=()=>{(()=>{const e=document,t=window;h.config=De;const n=t.Ionic=t.Ionic||{};ke(t);const o=Object.assign(Object.assign(Object.assign(Object.assign({},(e=>{try{const t=e.sessionStorage.getItem("ionic-persist-config");return null!==t?JSON.parse(t):{}}catch(e){return{}}})(t)),{persistConfig:!1}),n.config),(e=>{const t={};return e.location.search.slice(1).split("&").map(e=>e.split("=")).map(([e,t])=>[decodeURIComponent(e),decodeURIComponent(t)]).filter(([e])=>(e=>"ionic:"===e.substr(0,"ionic:".length))(e)).map(([e,t])=>[e.slice("ionic:".length),t]).forEach(([e,n])=>{t[e]=n}),t})(t));De.reset(o),De.getBoolean("persistConfig")&&((e,t)=>{try{e.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(e){return}})(t,o),n.config=De,n.mode=Fe=De.get("mode",e.documentElement.getAttribute("mode")||(_e(t,"ios")?"ios":"md")),De.set("mode",Fe),e.documentElement.setAttribute("mode",Fe),e.documentElement.classList.add(Fe),De.getBoolean("_testing")&&De.set("animated",!1),me(e=>e.mode=e.mode||e.getAttribute("mode")||Fe)})(),me(e=>"ION-ICON"===e.tagName?e.mode||e.getAttribute("mode"):null),h.store=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,n)=>{Object.keys(n).forEach(o=>{const s=n[o];Object.defineProperty(t,o,{get:()=>(...t)=>e.dispatch(s(...t)),configurable:!0,enumerable:!0})})},mapStateToProps:(t,n)=>{const o=()=>{const o=n(e.getState());Object.keys(o).forEach(e=>{t[e]=o[e]})},s=e.subscribe(()=>o());return o(),s}}})()};export{q as H,T as a,ge as b,ye as c,Oe as d,je as e,Ie as f,We as g,A as h,De as i,_e as j,ve as k,$e as l,U as m,E as p,w as r,C as w};