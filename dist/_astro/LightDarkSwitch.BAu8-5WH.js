import{S as lt,i as at,s as ft,D as ue,k as re,E as He,g as S,x as ut,F as Ct,G as de,J as Qe,e as M,b as L,d as j,K as Ge,L as Ot,H as jt,M as Pt,A as Mt,N as Ke,O as Lt,j as ve,I as xe,P as z,a as A,y as _e,Q as H,f as N,z as ke,h as I,R as O,l as x,T as Q,n as G,t as K,r as J,U as W,w as Dt}from"./translation.BVVR6Cdx.js";import{L as Y,D as Z,A as R,g as $t,s as Ft,a as At}from"./setting-utils.CiwPB7Lw.js";function dt(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}const te=/^[a-z0-9]+(-[a-z0-9]+)*$/,pe=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!ae(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!ae(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:i};return e&&!ae(t,n)?null:t}return null},ae=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(te)||!(e&&""===t.prefix||t.prefix.match(te))||!t.name.match(te)),ht=Object.freeze({left:0,top:0,width:16,height:16}),he=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ge=Object.freeze({...ht,...he}),Te=Object.freeze({...ge,body:"",hidden:!1});function Nt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}function Je(t,e){const n=Nt(t,e);for(const o in Te)o in he?o in t&&!(o in n)&&(n[o]=he[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function Bt(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function t(e){if(n[e])return r[e]=[];if(!(e in r)){r[e]=null;const n=o[e]&&o[e].parent,i=n&&t(n);i&&(r[e]=[n].concat(i))}return r[e]})),r}function Rt(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function s(t){i=Je(o[t]||r[t],i)}return s(e),n.forEach(s),Je(t,i)}function pt(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=Bt(t);for(const r in o){const i=o[r];i&&(e(r,Rt(t,r,i)),n.push(r))}return n}const Vt={provider:"",aliases:{},not_found:{},...ht};function Se(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function gt(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons||!Se(t,Vt))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(te)||"string"!=typeof e.body||!Se(e,Te))return null}const o=e.aliases||Object.create(null);for(const t in o){const e=o[t],r=e.parent;if(!t.match(te)||"string"!=typeof r||!n[r]&&!o[r]||!Se(e,Te))return null}return e}const We=Object.create(null);function Ut(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function V(t,e){const n=We[t]||(We[t]=Object.create(null));return n[e]||(n[e]=Ut(t,e))}function Le(t,e){return gt(e)?pt(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function qt(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch{}return!1}let ne=!1;function mt(t){return"boolean"==typeof t&&(ne=t),ne}function zt(t){const e="string"==typeof t?pe(t,!0,ne):t;if(e){const t=V(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function Ht(t,e){const n=pe(t,!0,ne);if(!n)return!1;return qt(V(n.provider,n.prefix),n.name,e)}function Qt(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),ne&&!e&&!t.prefix){let e=!1;return gt(t)&&(t.prefix="",pt(t,((t,n)=>{n&&Ht(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!ae({provider:e,prefix:n,name:"a"}))return!1;return!!Le(V(e,n),t)}const bt=Object.freeze({width:null,height:null}),yt=Object.freeze({...bt,...he}),Gt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Kt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Xe(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(Gt);if(null===o||!o.length)return t;const r=[];let i=o.shift(),s=Kt.test(i);for(;;){if(s){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");s=!s}}function Jt(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const r=t.indexOf(">",o),i=t.indexOf("</"+e);if(-1===r||-1===i)break;const s=t.indexOf(">",i);if(-1===s)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,o).trim()+t.slice(s+1)}return{defs:n,content:t}}function Wt(t,e){return t?"<defs>"+t+"</defs>"+e:e}function Xt(t,e,n){const o=Jt(t);return Wt(o.defs,e+o.content+n)}const Yt=t=>"unset"===t||"undefined"===t||"none"===t;function Zt(t,e){const n={...ge,...t},o={...yt,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let s,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):o&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=r.height/2+r.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:s=r.width/2+r.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(r.left!==r.top&&(s=r.left,r.left=r.top,r.top=s),r.width!==r.height&&(s=r.width,r.width=r.height,r.height=s)),e.length&&(i=Xt(i,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,c=o.height,a=r.width,l=r.height;let f,u;null===s?(u=null===c?"1em":"auto"===c?l:c,f=Xe(u,a/l)):(f="auto"===s?a:s,u=null===c?Xe(f,l/a):"auto"===c?l:c);const d={},p=(t,e)=>{Yt(e)||(d[t]=e.toString())};p("width",f),p("height",u);const h=[r.left,r.top,a,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}const en=/\sid="(\S+)"/g,tn="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let nn=0;function on(t,e=tn){const n=[];let o;for(;o=en.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(nn++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}const Ee=Object.create(null);function rn(t,e){Ee[t]=e}function Ce(t){return Ee[t]||Ee[""]}function De(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const $e=Object.create(null),ee=["https://api.simplesvg.com","https://api.unisvg.com"],fe=[];for(;ee.length>0;)1===ee.length||Math.random()>.5?fe.push(ee.shift()):fe.push(ee.pop());function sn(t,e){const n=De(e);return null!==n&&($e[t]=n,!0)}function Fe(t){return $e[t]}$e[""]=De({resources:["https://api.iconify.design"].concat(fe)});const cn=()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch{}};let Ye=cn();function ln(t,e){const n=Fe(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{t=Math.max(t,e.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}function an(t){return 404===t}const fn=(t,e,n)=>{const o=[],r=ln(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=r&&a>0&&(o.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o};function un(t){if("string"==typeof t){const e=Fe(t);if(e)return e.path}return"/"}const dn=(t,e,n)=>{if(!Ye)return void n("abort",424);let o=un(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;Ye(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(an(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))},hn={prepare:fn,send:dn};function pn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,s=t.name,c=n[r]||(n[r]=Object.create(null)),a=c[i]||(c[i]=V(r,i));let l;l=s in a.icons?e.loaded:""===i||a.missing.has(s)?e.missing:e.pending;const f={provider:r,prefix:i,name:s};l.push(f)})),e}function wt(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}function gn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,s=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const s=e.name;if(t.icons[s])i.loaded.push({provider:o,prefix:r,name:s});else{if(!t.missing.has(s))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:s})}return!1})),i.pending.length!==s&&(n||wt([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}let mn=0;function bn(t,e,n){const o=mn++,r=wt.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}function yn(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?pe(t,e,n):t;r&&o.push(r)})),o}var wn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function vn(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function x(){if("pending"!==l)return;h();const o=s.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(s.length?x():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(x,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(x),function(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function vt(t){const e={...wn,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,i){const s=vn(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function Ze(){}const Ie=Object.create(null);function xn(t){if(!Ie[t]){const e=Fe(t);if(!e)return;const n={config:e,redundancy:vt(e)};Ie[t]=n}return Ie[t]}function _n(t,e,n){let o,r;if("string"==typeof t){const e=Ce(t);if(!e)return n(void 0,424),Ze;r=e.send;const i=xn(t);i&&(o=i.redundancy)}else{const e=De(t);if(e){o=vt(e);const n=Ce(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),Ze)}const et="iconify2",oe="iconify",xt=oe+"-count",tt=oe+"-version",_t=36e5,kn=168,Sn=50;function Oe(t,e){try{return t.getItem(e)}catch{}}function Ae(t,e,n){try{return t.setItem(e,n),!0}catch{}}function nt(t,e){try{t.removeItem(e)}catch{}}function je(t,e){return Ae(t,xt,e.toString())}function Pe(t){return parseInt(Oe(t,xt))||0}const me={local:!0,session:!0},kt={local:new Set,session:new Set};let Ne=!1;function In(t){Ne=t}let le=typeof window>"u"?{}:window;function St(t){const e=t+"Storage";try{if(le&&le[e]&&"number"==typeof le[e].length)return le[e]}catch{}me[t]=!1}function It(t,e){const n=St(t);if(!n)return;const o=Oe(n,tt);if(o!==et){if(o){const t=Pe(n);for(let e=0;e<t;e++)nt(n,oe+e.toString())}return Ae(n,tt,et),void je(n,0)}const r=Math.floor(Date.now()/_t)-kn,i=t=>{const o=oe+t.toString(),i=Oe(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch{}nt(n,o)}};let s=Pe(n);for(let e=s-1;e>=0;e--)i(e)||(e===s-1?(s--,je(n,s)):kt[t].add(e))}function Tt(){if(!Ne){In(!0);for(const t in me)It(t,(t=>{const e=t.data,n=V(t.provider,e.prefix);if(!Le(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Tn(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in me)It(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}function En(t,e){function n(n){let o;if(!me[n]||!(o=St(n)))return;const r=kt[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=Pe(o),i>=Sn||!je(o,i+1))return;const s={cached:Math.floor(Date.now()/_t),provider:t.provider,data:e};return Ae(o,oe+i.toString(),JSON.stringify(s))}Ne||Tt(),e.lastModified&&!Tn(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function ot(){}function Cn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,gn(t)})))}function On(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=Ce(e))&&r.prepare(e,n,o).forEach((n=>{_n(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=Le(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),En(t,e)}catch(t){console.error(t)}Cn(t)}))}))})))}const jn=(t,e)=>{const n=pn(yn(t,!0,mt()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,ot)})),()=>{t=!1}}const o=Object.create(null),r=[];let i,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===i)return;i=e,s=n,r.push(V(e,n));const c=o[e]||(o[e]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:r}=t,i=V(e,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(r)||(s.add(r),o[e][n].push(r))})),r.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&On(t,o[e][n])})),e?bn(e,n,r):ot};function Pn(t,e){const n={...t};for(const t in e){const o=e[t],r=typeof o;t in bt?(null===o||o&&("string"===r||"number"===r))&&(n[t]=o):r===typeof n[t]&&(n[t]="rotate"===t?o%4:o)}return n}const Mn=/[\s,]+/;function Ln(t,e){e.split(Mn).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function Dn(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}function $n(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Fn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function An(t){return"data:image/svg+xml,"+Fn(t)}function Nn(t){return'url("'+An(t)+'")'}const rt={...yt,inline:!1},Bn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Rn={display:"inline-block"},Me={"background-color":"currentColor"},Et={"background-color":"transparent"},st={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},it={"-webkit-mask":Me,mask:Me,background:Et};for(const t in it){const e=it[t];for(const n in st)e[t+"-"+n]=st[n]}function Vn(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Un(t,e){const n=Pn(rt,e),o=e.mode||"svg",r="svg"===o?{...Bn}:{};-1===t.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let i="string"==typeof e.style?e.style:"";for(let t in e){const o=e[t];if(void 0!==o)switch(t){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[t]=!0===o||"true"===o||1===o;break;case"flip":"string"==typeof o&&Ln(n,o);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+o+"; ";break;case"rotate":"string"==typeof o?n[t]=Dn(o):"number"==typeof o&&(n[t]=o);break;case"ariaHidden":case"aria-hidden":!0!==o&&"true"!==o&&delete r["aria-hidden"];break;default:if("on:"===t.slice(0,3))break;void 0===rt[t]&&(r[t]=o)}}const s=Zt(t,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===o){Object.assign(r,c),""!==i&&(r.style=i);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:on(s.body,n?()=>n+"ID"+t++:"iconifySvelte")}}const{body:a,width:l,height:f}=t,u="mask"===o||"bg"!==o&&-1!==a.indexOf("currentColor"),d={"--svg":Nn($n(a,{...c,width:l+"",height:f+""}))},p=t=>{const e=c[t];e&&(d[t]=Vn(e))};p("width"),p("height"),Object.assign(d,Rn,u?Me:Et);let h="";for(const t in d)h+=t+": "+d[t]+";";return r.style=h+i,{svg:!1,attributes:r}}if(mt(!0),rn("",hn),typeof document<"u"&&typeof window<"u"){Tt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!Qt(t))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;sn(t,o)||console.error(n)}catch{console.error(n)}}}}function qn(t,e,n,o,r){function i(){e.loading&&(e.loading.abort(),e.loading=null)}if("object"==typeof t&&null!==t&&"string"==typeof t.body)return e.name="",i(),{data:{...ge,...t}};let s;if("string"!=typeof t||null===(s=pe(t,!1,!0)))return i(),null;const c=zt(s);if(!c)return n&&(!e.loading||e.loading.name!==t)&&(i(),e.name="",e.loading={name:t,abort:jn([s],o)}),null;i(),e.name!==t&&(e.name=t,r&&!e.destroyed&&r(t));const a=["iconify"];return""!==s.prefix&&a.push("iconify--"+s.prefix),""!==s.provider&&a.push("iconify--"+s.provider),{data:c,classes:a}}function zn(t,e){return t?Un({...ge,...t},e):null}function ct(t){let e;function n(t,e){return t[0].svg?Qn:Hn}let o=n(t),r=o(t);return{c(){r.c(),e=ue()},l(t){r.l(t),e=ue()},m(t,n){r.m(t,n),re(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){t&&S(e),r.d(t)}}}function Hn(t){let e,n=[t[0].attributes],o={};for(let t=0;t<n.length;t+=1)o=de(o,n[t]);return{c(){e=M("span"),this.h()},l(t){e=L(t,"SPAN",{}),j(e).forEach(S),this.h()},h(){Ge(e,o)},m(t,n){re(t,e,n)},p(t,r){Ge(e,o=dt(n,[1&r&&t[0].attributes]))},d(t){t&&S(e)}}}function Qn(t){let e,n,o=t[0].body+"",r=[t[0].attributes],i={};for(let t=0;t<r.length;t+=1)i=de(i,r[t]);return{c(){e=Ot("svg"),n=new jt(!0),this.h()},l(t){e=Pt(t,"svg",{});var o=j(e);n=Mt(o,!0),o.forEach(S),this.h()},h(){n.a=null,Ke(e,i)},m(t,r){re(t,e,r),n.m(o,e)},p(t,s){1&s&&o!==(o=t[0].body+"")&&n.p(o),Ke(e,i=dt(r,[1&s&&t[0].attributes]))},d(t){t&&S(e)}}}function Gn(t){let e,n=t[0]&&ct(t);return{c(){n&&n.c(),e=ue()},l(t){n&&n.l(t),e=ue()},m(t,o){n&&n.m(t,o),re(t,e,o)},p(t,[o]){t[0]?n?n.p(t,o):(n=ct(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:He,o:He,d(t){t&&S(e),n&&n.d(t)}}}function Kn(t,e,n){const o={name:"",loading:null,destroyed:!1};let r,i=!1,s=0;const c=t=>{"function"==typeof e.onLoad&&e.onLoad(t),Lt()("load",{icon:t})};function a(){n(3,s++,s)}return ut((()=>{n(2,i=!0)})),Ct((()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))})),t.$$set=t=>{n(6,e=de(de({},e),Qe(t)))},t.$$.update=()=>{{const t=qn(e.icon,o,i,a,c);n(0,r=t?zn(t.data,e):null),r&&t.classes&&n(0,r.attributes.class=("string"==typeof e.class?e.class+" ":"")+t.classes.join(" "),r)}},e=Qe(e),[r,o,i,s]}class X extends lt{constructor(t){super(),at(this,t,Kn,Gn,ft,{})}}function Jn(t){let e,n,o,r,i,s,c,a,l,f,u,d,p,h,g,m,b,y,v,w,k,$,E,T,F,C,D,V,P,_,U=ve(xe.lightMode)+"",B=ve(xe.darkMode)+"",q=ve(xe.systemMode)+"";return r=new X({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem]"}}),c=new X({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem]"}}),f=new X({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem]"}}),g=new X({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem] mr-3"}}),w=new X({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem] mr-3"}}),F=new X({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem] mr-3"}}),{c(){e=M("div"),n=M("button"),o=M("div"),z(r.$$.fragment),i=A(),s=M("div"),z(c.$$.fragment),a=A(),l=M("div"),z(f.$$.fragment),u=A(),d=M("div"),p=M("div"),h=M("button"),z(g.$$.fragment),m=A(),b=_e(U),y=A(),v=M("button"),z(w.$$.fragment),k=A(),$=_e(B),E=A(),T=M("button"),z(F.$$.fragment),C=A(),D=_e(q),this.h()},l(t){e=L(t,"DIV",{class:!0,role:!0,tabindex:!0});var x=j(e);n=L(x,"BUTTON",{"aria-label":!0,role:!0,class:!0,id:!0});var O=j(n);o=L(O,"DIV",{class:!0});var I=j(o);H(r.$$.fragment,I),I.forEach(S),i=N(O),s=L(O,"DIV",{class:!0});var M=j(s);H(c.$$.fragment,M),M.forEach(S),a=N(O),l=L(O,"DIV",{class:!0});var A=j(l);H(f.$$.fragment,A),A.forEach(S),O.forEach(S),u=N(x),d=L(x,"DIV",{id:!0,class:!0});var z=j(d);p=L(z,"DIV",{class:!0});var R=j(p);h=L(R,"BUTTON",{class:!0});var V=j(h);H(g.$$.fragment,V),m=N(V),b=ke(V,U),V.forEach(S),y=N(R),v=L(R,"BUTTON",{class:!0});var P=j(v);H(w.$$.fragment,P),k=N(P),$=ke(P,B),P.forEach(S),E=N(R),T=L(R,"BUTTON",{class:!0});var Q=j(T);H(F.$$.fragment,Q),C=N(Q),D=ke(Q,q),Q.forEach(S),R.forEach(S),z.forEach(S),x.forEach(S),this.h()},h(){I(o,"class","absolute"),O(o,"opacity-0",t[0]!==Y),I(s,"class","absolute"),O(s,"opacity-0",t[0]!==Z),I(l,"class","absolute"),O(l,"opacity-0",t[0]!==R),I(n,"aria-label","Light/Dark Mode"),I(n,"role","menuitem"),I(n,"class","relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"),I(n,"id","scheme-switch"),I(h,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(h,"current-theme-btn",t[0]===Y),I(v,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(v,"current-theme-btn",t[0]===Z),I(T,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"),O(T,"current-theme-btn",t[0]===R),I(p,"class","card-base float-panel p-2"),I(d,"id","light-dark-panel"),I(d,"class","hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5"),I(e,"class","relative z-50"),I(e,"role","menu"),I(e,"tabindex","-1")},m(j,O){re(j,e,O),x(e,n),x(n,o),Q(r,o,null),x(n,i),x(n,s),Q(c,s,null),x(n,a),x(n,l),Q(f,l,null),x(e,u),x(e,d),x(d,p),x(p,h),Q(g,h,null),x(h,m),x(h,b),x(p,y),x(p,v),Q(w,v,null),x(v,k),x(v,$),x(p,E),x(p,T),Q(F,T,null),x(T,C),x(T,D),V=!0,P||(_=[G(n,"click",t[2]),G(n,"mouseenter",Wn),G(h,"click",t[3]),G(v,"click",t[4]),G(T,"click",t[5]),G(e,"mouseleave",Xn)],P=!0)},p(t,[e]){(!V||1&e)&&O(o,"opacity-0",t[0]!==Y),(!V||1&e)&&O(s,"opacity-0",t[0]!==Z),(!V||1&e)&&O(l,"opacity-0",t[0]!==R),(!V||1&e)&&O(h,"current-theme-btn",t[0]===Y),(!V||1&e)&&O(v,"current-theme-btn",t[0]===Z),(!V||1&e)&&O(T,"current-theme-btn",t[0]===R)},i(t){V||(K(r.$$.fragment,t),K(c.$$.fragment,t),K(f.$$.fragment,t),K(g.$$.fragment,t),K(w.$$.fragment,t),K(F.$$.fragment,t),V=!0)},o(t){J(r.$$.fragment,t),J(c.$$.fragment,t),J(f.$$.fragment,t),J(g.$$.fragment,t),J(w.$$.fragment,t),J(F.$$.fragment,t),V=!1},d(t){t&&S(e),W(r),W(c),W(f),W(g),W(w),W(F),P=!1,Dt(_)}}}function Wn(){document.querySelector("#light-dark-panel").classList.remove("float-panel-closed")}function Xn(){document.querySelector("#light-dark-panel").classList.add("float-panel-closed")}function Yn(t,e,n){const o=[Y,Z,R];let r=R;function i(t){n(0,r=t),Ft(t)}return ut((()=>{n(0,r=$t());const t=window.matchMedia("(prefers-color-scheme: dark)"),e=t=>{At(r)};return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}})),[r,i,function(){let t=0;for(;t<o.length&&o[t]!==r;t++);i(o[(t+1)%o.length])},()=>i(Y),()=>i(Z),()=>i(R)]}class to extends lt{constructor(t){super(),at(this,t,Yn,Jn,ft,{})}}export{to as default};