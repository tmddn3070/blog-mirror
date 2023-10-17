import{g as zo,s as No,b as qo,c as Vo}from"./setting-utils.CiwPB7Lw.js";const Ne=new MutationObserver(Gn);function Gn(){Ne.disconnect();let t=Array.from(document.querySelectorAll("pre"));for(let e of t){if("DIV"===e.parentElement?.nodeName&&e.parentElement?.classList.contains("code-block"))continue;let t=document.createElement("div");t.className="relative code-block";let n=document.createElement("button");n.className="copy-btn btn-regular-dark absolute active:scale-90 h-8 w-8 top-2 right-2 opacity-75 text-sm p-1.5 rounded-lg transition-all ease-in-out",e.setAttribute("tabindex","0"),e.parentNode&&e.parentNode.insertBefore(t,e);let o,s='<svg class="copy-btn-icon copy-icon" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M368.37-237.37q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h378.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v474.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H368.37Zm0-83h378.26v-474.26H368.37v474.26Zm-155 238q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-515.76q0-17.45 11.96-29.48 11.97-12.02 29.33-12.02t29.54 12.02q12.17 12.03 12.17 29.48v515.76h419.76q17.45 0 29.48 11.96 12.02 11.97 12.02 29.33t-12.02 29.54q-12.03 12.17-29.48 12.17H213.37Zm155-238v-474.26 474.26Z"/></svg>',r='<svg class="copy-btn-icon success-icon" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m389-377.13 294.7-294.7q12.58-12.67 29.52-12.67 16.93 0 29.61 12.67 12.67 12.68 12.67 29.53 0 16.86-12.28 29.14L419.07-288.41q-12.59 12.67-29.52 12.67-16.94 0-29.62-12.67L217.41-430.93q-12.67-12.68-12.79-29.45-.12-16.77 12.55-29.45 12.68-12.67 29.62-12.67 16.93 0 29.28 12.67L389-377.13Z"/></svg>';n.innerHTML=`<div>${s} ${r}</div>\n      `,t.appendChild(e),t.appendChild(n),n.addEventListener("click",(async()=>{o&&clearTimeout(o);let t=e?.querySelector("code")?.innerText;await navigator.clipboard.writeText(t),n.classList.add("success"),o=setTimeout((()=>{n.classList.remove("success")}),1e3)}))}Ne.observe(document.body,{childList:!0,subtree:!0})}Ne.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("DOMContentLoaded",Gn);const ht=(t,e)=>{const{o:n,i:o,u:s}=t;let r,c=n;const i=(t,e)=>{const n=c,i=t,l=e||(o?!o(n,i):n!==i);return(l||s)&&(c=i,r=n),[c,l,r]};return[e?t=>i(e(c,r),t):i,t=>[c,!!t,r]]},Un=typeof window<"u"&&typeof document<"u",ft=Un?window:{},Wn=Math.max,Fo=Math.min,qe=Math.round,ge=Math.abs,xn=Math.sign,Zn=ft.cancelAnimationFrame,sn=ft.requestAnimationFrame,ve=ft.setTimeout,Ve=ft.clearTimeout,Ce=t=>typeof ft[t]<"u"?ft[t]:void 0,jo=Ce("MutationObserver"),En=Ce("IntersectionObserver"),be=Ce("ResizeObserver"),Fe=Ce("ScrollTimeline"),Kn=Un&&Node.ELEMENT_NODE,{toString:Xs,hasOwnProperty:Re}=Object.prototype,Oe=t=>void 0===t,cn=t=>null===t,Ot=t=>"number"==typeof t,$e=t=>"string"==typeof t,Xn=t=>"boolean"==typeof t,wt=t=>"function"==typeof t,$t=t=>Array.isArray(t),ee=t=>"object"==typeof t&&!$t(t)&&!cn(t),Te=t=>{const e=!!t&&t.length,n=Ot(e)&&e>-1&&e%1==0;return!!($t(t)||!wt(t)&&n)&&(!(e>0&&ee(t))||e-1 in t)},we=t=>{if(!t||!ee(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Re.call(t,n),c=s&&Re.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return Oe(e)||Re.call(t,e)},Se=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===Kn)},Le=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===Kn)};function Z(t,e){if(Te(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&Z(Object.keys(t),(n=>e(t[n],n,t)));return t}const rn=(t,e)=>t.indexOf(e)>=0,At=(t,e)=>t.concat(e),ot=(t,e,n)=>(!$e(e)&&Te(e)?Array.prototype.push.apply(t,e):t.push(e),t),Bt=t=>Array.from(t||[]),Yn=t=>$t(t)?t:[t],je=t=>!!t&&!t.length,Cn=t=>Bt(new Set(t)),St=(t,e,n)=>{Z(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},Jn="paddingTop",Qn="paddingRight",to="paddingLeft",eo="paddingBottom",no="marginLeft",oo="marginRight",so="marginBottom",Go="overflowX",Uo="overflowY",Ut="width",Wt="height",Pt="visible",_t="hidden",Zt="scroll",Wo=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},Ae=(t,e,n,o)=>{if(t&&e){let o=!0;return Z(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},co=(t,e)=>Ae(t,e,["w","h"]),me=(t,e)=>Ae(t,e,["x","y"]),Zo=(t,e)=>Ae(t,e,["t","r","b","l"]),Dt=()=>{},D=(t,...e)=>t.bind(0,...e),zt=t=>{let e;const n=t?ve:sn,o=t?Ve:Zn;return[s=>{o(e),e=n((()=>s()),wt(t)?t():t)},()=>o(e)]},Ge=(t,e)=>{const{_:n,p:o,v:s,m:r}=e||{};let c,i,l,a,d=Dt;const u=function(e){d(),Ve(c),a=c=i=void 0,d=Dt,t.apply(this,e)},p=t=>r&&i?r(i,t):t,h=()=>{d!==Dt&&u(p(l)||l)},y=function(){const t=Bt(arguments),e=wt(n)?n():n;if(Ot(e)&&e>=0){const n=wt(o)?o():o,r=Ot(n)&&n>=0,y=e>0?ve:sn,f=e>0?Ve:Zn,m=p(t)||t,v=u.bind(0,m);let g;d(),s&&!a?(v(),a=!0,g=y((()=>a=void 0),e)):(g=y(v,e),r&&!c&&(c=ve(h,n))),d=()=>f(g),i=l=m}else u(t)};return y.S=h,y},ro=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Ht=t=>t?Object.keys(t):[],G=(t,e,n,o,s,r,c)=>{const i=[e,n,o,s,r,c];return("object"!=typeof t||cn(t))&&!wt(t)&&(t={}),Z(i,(e=>{Z(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=$t(s);if(s&&we(s)){const e=t[o];let n=e;r&&!$t(e)?n=[]:!r&&!we(e)&&(n={}),t[o]=G(n,s)}else t[o]=r?s.slice():s}))})),t},lo=(t,e)=>Z(G({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&we(t)&&(n[e]=lo(t))})),ln=t=>{for(const e in t)return!1;return!0},Ue=(t,e,n)=>Wn(t,Fo(e,n)),Nt=t=>Bt(new Set(($t(t)?t:(t||"").split(" ")).filter((t=>t)))),an=(t,e)=>t&&t.getAttribute(e),On=(t,e)=>t&&t.hasAttribute(e),Lt=(t,e,n)=>{Z(Nt(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},Et=(t,e)=>{Z(Nt(e),(e=>t&&t.removeAttribute(e)))},He=(t,e)=>{const n=Nt(an(t,e)),o=D(Lt,t,e),s=(t,e)=>{const o=new Set(n);return Z(Nt(t),(t=>{o[e](t)})),Bt(o).join(" ")};return{O:t=>o(s(t,"delete")),$:t=>o(s(t,"add")),C:t=>{const e=Nt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},io=(t,e,n)=>(He(t,e).O(n),D(un,t,e,n)),un=(t,e,n)=>(He(t,e).$(n),D(io,t,e,n)),We=(t,e,n,o)=>(o?un:io)(t,e,n),dn=(t,e,n)=>He(t,e).C(n),ao=t=>He(t,"class"),uo=(t,e)=>{ao(t).O(e)},fn=(t,e)=>(ao(t).$(e),D(uo,t,e)),fo=(t,e)=>{const n=[],o=e?Le(e)&&e:document;return o?ot(n,o.querySelectorAll(t)):n},Ko=(t,e)=>{const n=e?Le(e)&&e:document;return n?n.querySelector(t):null},xe=(t,e)=>!!Le(t)&&t.matches(e),po=t=>xe(t,"body"),Ze=t=>t?Bt(t.childNodes):[],Kt=t=>t&&t.parentElement,jt=(t,e)=>Le(t)&&t.closest(e),Ke=t=>document.activeElement,Xo=(t,e,n)=>{const o=jt(t,e),s=t&&Ko(n,o),r=jt(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&jt(jt(t,n),e)!==o)},Rt=t=>{if(Te(t))Z(Bt(t),(t=>Rt(t)));else if(t){const e=Kt(t);e&&e.removeChild(t)}},mo=(t,e,n)=>{if(n&&t){let o,s=e;return Te(n)?(o=document.createDocumentFragment(),Z(n,(t=>{t===s&&(s=t.previousSibling),o.appendChild(t)}))):o=n,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(o,s||null),()=>Rt(n)}return Dt},yt=(t,e)=>mo(t,null,e),$n=(t,e)=>mo(Kt(t),t&&t.nextSibling,e),Gt=t=>{const e=document.createElement("div");return Lt(e,"class",t),e},ho=t=>{const e=Gt();return e.innerHTML=t.trim(),Z(Ze(e),(t=>Rt(t)))},Yo=/^--/,Tn=(t,e)=>t.getPropertyValue(e)||t[e]||"",pn=t=>{const e=t||0;return isFinite(e)?e:0},fe=t=>pn(parseFloat(t||"")),Ln=t=>`${(100*pn(t)).toFixed(3)}%`,Xe=t=>`${pn(t)}px`;function ne(t,e){t&&e&&Z(e,((e,n)=>{try{const o=t.style,s=Ot(e)?Xe(e):(e||"")+"";Yo.test(n)?o.setProperty(n,s):o[n]=s}catch{}}))}function qt(t,e,n){const o=$e(e);let s=o?"":{};if(t){const r=ft.getComputedStyle(t,n)||t.style;s=o?Tn(r,e):Bt(e).reduce(((t,e)=>(t[e]=Tn(r,e),t)),s)}return s}const An=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,a=qt(t,[r,c,i,l]);return{t:fe(a[r]),r:fe(a[c]),b:fe(a[i]),l:fe(a[l])}},Be=(t,e)=>"translate"+(ee(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),Jo=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Qo={w:0,h:0},ke=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Qo,ts=t=>ke("inner",t||ft),Qt=D(ke,"offset"),yo=D(ke,"client"),Ye=D(ke,"scroll"),mn=t=>{const e=parseFloat(qt(t,Ut))||0,n=parseFloat(qt(t,Wt))||0;return{w:e-qe(e),h:n-qe(n)}},te=t=>t.getBoundingClientRect(),es=t=>!!t&&Jo(t),Je=t=>!(!t||!t[Wt]&&!t[Ut]),go=(t,e)=>{const n=Je(t);return!Je(e)&&n},Hn=(t,e,n,o)=>{Z(Nt(e),(e=>{t&&t.removeEventListener(e,n,o)}))},Q=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,i=o&&o.A||!1,l={passive:r,capture:c};return D(St,Nt(e).map((e=>{const o=i?s=>{Hn(t,e,o,c),n&&n(s)}:n;return t&&t.addEventListener(e,o,l),D(Hn,t,e,o,c)})))},vo=t=>t.stopPropagation(),Qe=t=>t.preventDefault(),bo=t=>vo(t)||Qe(t),Ct=(t,e)=>{const{x:n,y:o}=Ot(e)?{x:e,y:e}:e||{};Ot(n)&&(t.scrollLeft=n),Ot(o)&&(t.scrollTop=o)},gt=t=>({x:t.scrollLeft,y:t.scrollTop}),wo=()=>({T:{x:0,y:0},D:{x:0,y:0}}),ns=(t,e)=>{const{T:n,D:o}=t,{w:s,h:r}=e,c=(t,e,n)=>{let o=xn(t)*n,s=xn(e)*n;if(o===s){const n=ge(t),r=ge(e);s=n>r?0:s,o=n<r?0:o}return o=o===s?0:o,[o+0,s+0]},[i,l]=c(n.x,o.x,s),[a,d]=c(n.y,o.y,r);return{T:{x:i,y:a},D:{x:l,y:d}}},kn=({T:t,D:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Mn=({T:t,D:e},n)=>{const o=(t,e,n)=>Ue(0,1,(t-n)/(t-e)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},tn=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Pn=(t,e)=>{Z(Yn(e),t)},en=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Pn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if($e(t)){const o=e.get(t)||new Set;return e.set(t,o),Pn((t=>{wt(t)&&o.add(t)}),s),D(n,t,s)}Xn(s)&&s&&n();const r=Ht(t),c=[];return Z(r,(e=>{const n=t[e];n&&ot(c,o(e,n))})),D(St,c)};return o(t||{}),[o,n,(t,n)=>{Z(Bt(e.get(t)),(t=>{n&&!je(n)?t.apply(0,n):t()}))}]},Dn=t=>JSON.stringify(t,((t,e)=>{if(wt(e))throw 0;return e})),In=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&ro(t,e)?t[e]:void 0),t):void 0,os={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},So=(t,e)=>{const n={};return Z(At(Ht(e),Ht(t)),(o=>{const s=t[o],r=e[o];if(ee(s)&&ee(r))G(n[o]={},So(s,r)),ln(n[o])&&delete n[o];else if(ro(e,o)&&r!==s){let t=!0;if($t(s)||$t(r))try{Dn(s)===Dn(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},Rn=(t,e,n)=>o=>[In(t,o),n||void 0!==In(e,o)],Xt="data-overlayscrollbars",he="os-environment",pe=`${he}-scrollbar-hidden`,_e=`${Xt}-initialize`,ye="noClipping",Bn=`${Xt}-body`,It=Xt,ss="host",Mt=`${Xt}-viewport`,cs=Go,rs=Uo,ls="arrange",xo="measuring",Eo="scrollbarHidden",is="scrollbarPressed",as="noContent",nn=`${Xt}-padding`,_n=`${Xt}-content`,hn="os-size-observer",us=`${hn}-appear`,ds=`${hn}-listener`,fs="os-trinsic-observer",ps="os-theme-none",vt="os-scrollbar",ms=`${vt}-rtl`,hs=`${vt}-horizontal`,ys=`${vt}-vertical`,Co=`${vt}-track`,yn=`${vt}-handle`,gs=`${vt}-visible`,vs=`${vt}-cornerless`,zn=`${vt}-interaction`,Nn=`${vt}-unusable`,on=`${vt}-auto-hide`,qn=`${on}-hidden`,Vn=`${vt}-wheel`,bs=`${Co}-interactive`,ws=`${yn}-interactive`;let ze;const Ss=()=>{const t=(t,e,n)=>{yt(document.body,t),yt(document.body,t);const o=yo(t),s=Qt(t),r=mn(e);return n&&Rt(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=ho(`<div class="${he}"><div></div><style>${`.${he}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${he} div{width:200%;height:200%;margin:10px 0}.${pe}{scrollbar-width:none!important}.${pe}::-webkit-scrollbar,.${pe}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,[o,,s]=en(),[r,c]=ht({o:t(e,n),i:me},D(t,e,n,!0)),[i]=c(),l=(t=>{let e=!1;const n=fn(t,pe);try{e="none"===qt(t,"scrollbar-width")||"none"===qt(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),a={x:0===i.x,y:0===i.y},d={elements:{host:null,padding:!l,viewport:t=>l&&po(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=G({},os),p=D(G,{},u),h=D(G,{},d),y={k:i,M:a,R:l,V:!!Fe,L:D(o,"r"),P:h,U:t=>G(d,t)&&h(),N:p,q:t=>G(u,t)&&p(),B:G({},d),F:G({},u)};if(Et(e,"style"),Rt(e),Q(ft,"resize",(()=>{s("r",[])})),wt(ft.matchMedia)&&!l&&(!a.x||!a.y)){const t=e=>{const n=ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);Q(n,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=r();G(y.k,t),s("r",[e])}))}return y},Tt=()=>(ze||(ze=Ss()),ze),Oo=(t,e)=>wt(e)?e.apply(0,t):e,xs=(t,e,n,o)=>{const s=Oe(o)?n:o;return Oo(t,s)||e.apply(0,t)},$o=(t,e,n,o)=>{const s=Oe(o)?n:o,r=Oo(t,s);return!!r&&(Se(r)?r:e.apply(0,t))},Es=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{M:s,R:r,P:c}=Tt(),{nativeScrollbarsOverlaid:i,body:l}=c().cancel,a=n??i,d=Oe(o)?l:o,u=(s.x||s.y)&&a,p=t&&(cn(d)?!r:d);return!!u||!!p},gn=new WeakMap,Cs=(t,e)=>{gn.set(t,e)},Os=t=>{gn.delete(t)},To=t=>gn.get(t),$s=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){Z(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||fo)(n,t):[],o]})),(n=>Z(n[0],(r=>{const c=n[1],i=s.get(r)||[];if(t.contains(r)&&c){const t=Q(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,ot(i,t))}else St(i),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},Fn=(t,e,n,o)=>{let s=!1;const{j:r,X:c,Y:i,W:l,J:a,K:d}=o||{},u=Ge((()=>s&&n(!0)),{_:33,p:99}),[p,h]=$s(t,u,i),y=c||[],f=At(r||[],y),m=(s,r)=>{if(!je(r)){const c=a||Dt,i=d||Dt,u=[],p=[];let f=!1,m=!1;if(Z(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:h,removedNodes:v}=n,g="attributes"===a,b="childList"===a,w=t===r,x=g&&s,D=x&&an(r,s||""),$=$e(D)?D:null,L=x&&d!==$,S=rn(y,s)&&L;if(e&&(b||!w)){const e=g&&L,a=e&&l&&xe(r,l),p=(a?!c(r,s,d,$):!g||e)&&!i(n,!!a,t,o);Z(h,(t=>ot(u,t))),Z(v,(t=>ot(u,t))),m=m||p}!e&&w&&L&&!c(r,s,d,$)&&(ot(p,s),f=f||S)})),h((t=>Cn(u).reduce(((e,n)=>(ot(e,fo(t,n)),xe(n,t)?ot(e,n):e)),[]))),e)return!s&&m&&n(!1),[!1];if(!je(p)||f){const t=[Cn(p),f];return!s&&n.apply(0,t),t}}},v=new jo(D(m,!1));return[()=>(v.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:f,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),v.disconnect(),s=!1)}),()=>{if(s)return u.S(),m(!0,v.takeRecords())}]},Lo={},Ao={},Ts=t=>{Z(t,(t=>Z(t,((e,n)=>{Lo[n]=t[n]}))))},Ho=(t,e,n)=>Ht(t).map((o=>{const{static:s,instance:r}=t[o],[c,i,l]=n||[],a=n?r:s;if(a){const t=n?a(c,i,e):a(e);return(l||Ao)[o]=t}})),oe=t=>Ao[t],Ls="__osOptionsValidationPlugin",As="__osSizeObserverPlugin",Hs=(t,e)=>{const{M:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},Ee=t=>0===t.indexOf(Pt),ks=(t,e)=>{const n=(t,e,n,o)=>{const s=t===Pt?_t:t.replace(`${Pt}-`,""),r=Ee(t),c=Ee(n);return e||o?r&&c?Pt:r?e&&o?s:e?Pt:_t:e?s:c&&o?Pt:_t:_t},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{G:o,Z:{x:o.x===Zt,y:o.y===Zt}}},ko="__osScrollbarsHidingPlugin",Ms="__osClickScrollPlugin",Mo=(t,e,n)=>{const{dt:o}=n||{},s=oe(As),[r]=ht({o:!1,u:!0});return()=>{const n=[],c=ho(`<div class="${hn}"><div class="${ds}"></div></div>`)[0],i=c.firstChild,l=t=>{let n=!1,o=!1;if(t instanceof ResizeObserverEntry){const[e,,s]=r(t.contentRect),c=Je(e);o=go(e,s),n=!o&&!c}else o=!0===t;n||e({ft:!0,dt:o})};if(be){const t=new be((t=>l(t.pop())));t.observe(i),ot(n,(()=>{t.disconnect()}))}else{if(!s)return Dt;{const[t,e]=s(i,l,o);ot(n,At([fn(c,us),Q(c,"animationstart",t)],e))}}return D(St,ot(n,yt(t,c)))}},Ps=(t,e)=>{let n;const o=Gt(fs),[s]=ht({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(En)n=new En(D(c,!1),{root:t}),n.observe(o),ot(e,(()=>{n.disconnect()}));else{const t=()=>{const t=Qt(o);r(t)};ot(e,Mo(o,t)()),t()}return D(St,ot(e,yt(t,o)))},()=>n&&c(!0,n.takeRecords())]},Ds=(t,e,n,o)=>{let s,r,c,i,l,a;const d=`[${It}]`,u=`[${Mt}]`,p=["wrap","cols","rows"],h=["id","class","style","open"],{vt:y,ht:f,ot:m,gt:v,bt:g,wt:b,nt:w,yt:x,St:D,Ot:$}=t,L=t=>"rtl"===qt(t,"direction"),S={$t:!1,ct:L(y)},E=Tt(),O=oe(ko),[T]=ht({i:co,o:{w:0,h:0}},(()=>{const o=O&&O.tt(t,e,S,E,n).ut,s=!(x&&w)&&dn(f,It,ye),r=!w&&D(ls),c=r&&gt(v),i=$(xo,s),l=r&&o&&o()[0],a=Ye(m),d=mn(m);return l&&l(),Ct(v,c),s&&i(),{w:a.w+d.w,h:a.h+d.h}})),C=b?p:At(h,p),H=Ge(o,{_:()=>s,p:()=>r,m(t,e){const[n]=t,[o]=e;return[At(Ht(n),Ht(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),Z=t=>{const e=L(y);G(t,{Ct:a!==e}),G(S,{ct:e}),a=e},M=(t,e)=>{const[n,s]=t,r={xt:s};return G(S,{$t:n}),!e&&o(r),r},k=({ft:t,dt:e})=>{const n=t&&!e||!E.R?o:H,s={ft:t||e,dt:e};Z(s),n(s)},A=(t,e)=>{const[,n]=T(),s={Ht:n};return Z(s),n&&!e&&(t?o:H)(s),s},Q=(t,e,n)=>{const o={Et:e};return Z(o),e&&!n&&H(o),o},[R,P]=g?Ps(f,M):[],q=!w&&Mo(f,k,{dt:!0}),[I,N]=Fn(f,!1,Q,{X:h,j:At(h,[])}),B=w&&be&&new be((t=>{const e=t[t.length-1].contentRect;k({ft:!0,dt:go(e,l)}),l=e})),z=Ge((()=>{const[,t]=T();o({Ht:t})}),{_:222,v:!0});return[()=>{B&&B.observe(f);const t=q&&q(),e=R&&R(),n=I(),o=E.L((t=>{t?H({zt:t}):z()}));return()=>{B&&B.disconnect(),t&&t(),e&&e(),i&&i(),n(),o()}},({It:t,At:e,Tt:n})=>{const o={},[l]=t("update.ignoreMutation"),[a,p]=t("update.attributes"),[h,y]=t("update.elementEvents"),[f,v]=t("update.debounce"),b=e||n;if(y||p){c&&c(),i&&i();const[t,e]=Fn(g||m,!0,A,{j:At(C,a||[]),Y:h,W:d,K:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||w)&&Xo(n,d,u)||!!jt(n,`.${vt}`)||!!(t=>wt(l)&&l(t))(t)}});i=t(),c=e}if(v)if(H.S(),$t(f)){const t=f[0],e=f[1];s=Ot(t)&&t,r=Ot(e)&&e}else Ot(f)?(s=f,r=!1):(s=!1,r=!1);if(b){const t=N(),e=P&&P(),n=c&&c();t&&G(o,Q(t[0],t[1],b)),e&&G(o,M(e[0],b)),n&&G(o,A(n[0],b))}return Z(o),o},S]},Is=(t,e,n,o)=>{const{P:s}=Tt(),{scrollbars:r}=s(),{slot:c}=r,{vt:i,ht:l,ot:a,Dt:d,gt:u,yt:p,nt:h}=e,{scrollbars:y}=d?{}:t,{slot:f}=y||{},m=new Map,v=t=>Fe&&new Fe({source:u,axis:t}),g={x:v("x"),y:v("y")},b=$o([i,l,a],(()=>h&&p?i:l),c,f),w=(t,e)=>{if(e){const n=t?Ut:Wt,{kt:o,Mt:s}=e,r=te(s)[n],c=te(o)[n];return Ue(0,1,r/c||0)}const o=t?"x":"y",{Rt:s,Vt:r}=n,c=r[o],i=s[o];return Ue(0,1,c/(c+i)||0)},x=t=>G(t,{clear:["left"]}),$=t=>{m.forEach(((e,n)=>{(!t||rn(Yn(t),n))&&(Z(e||[],(t=>{t&&t.cancel()})),m.delete(n))}))},L=(t,e,n,o)=>{const s=m.get(t)||[],r=s.find((t=>t&&t.timeline===e));r?r.effect=new KeyframeEffect(t,n,{composite:o}):m.set(t,At(s,[t.animate(n,{timeline:e,composite:o})]))},S=(t,e,n)=>{const o=n?fn:uo;Z(t,(t=>{o(t.Lt,e)}))},E=(t,e)=>{Z(t,(t=>{const[n,o]=e(t);ne(n,o)}))},O=(t,e)=>{E(t,(t=>{const{Mt:n}=t;return[n,{[e?Ut:Wt]:Ln(w(e))}]}))},T=(t,e)=>{const{Pt:o}=n,s=e?"x":"y",r=g[s],c=kn(o)[s],i=(t,n)=>Be(Ln(((t,e,n)=>{const o=w(n,t);return 1/o*(1-o)*e})(t,c?n:1-n,e)),e);r?Z(t,(t=>{const{Mt:e}=t;L(e,r,x({transform:[0,1].map((e=>i(t,e)))}))})):E(t,(t=>[t.Mt,{transform:i(t,Mn(o,gt(u))[s])}]))},C=t=>h&&!p&&Kt(t)===a,H=[],M=[],k=[],A=(t,e,n)=>{const o=Xn(n),s=!o||!n;(!o||n)&&S(M,t,e),s&&S(k,t,e)},Q=t=>{const e=Gt(`${vt} ${t?hs:ys}`),n=Gt(Co),s=Gt(yn),r={Lt:e,kt:n,Mt:s};return ot(t?M:k,r),ot(H,[yt(e,n),yt(n,s),D(Rt,e),$,o(r,A,T,t)]),r},R=D(Q,!0),P=D(Q,!1);return R(),P(),[{Ut:()=>{O(M,!0),O(k)},Nt:()=>{T(M,!0),T(k)},qt:()=>{if(h){const{Rt:t,Pt:e}=n,o=kn(e),s=.5;if(g.x&&g.y)Z(At(k,M),(({Lt:e})=>{if(C(e)){const n=n=>L(e,g[n],x({transform:[0,o[n]?1:-1].map((e=>Be(Xe(e*(t[n]-s)),"x"===n)))}),"add");n("x"),n("y")}else $(e)}));else{const n=Mn(e,gt(u)),s=e=>{const{Lt:s}=e,r=C(s)&&s,c=(t,e,n)=>{const o=e*t;return Xe(n?o:-o)};return[r,r&&{transform:Be({x:c(n.x,t.x,o.x),y:c(n.y,t.y,o.y)})}]};E(M,s),E(k,s)}}},Bt:A,Ft:{V:g.x,jt:M,Xt:R,Yt:D(E,M)},Wt:{V:g.y,jt:k,Xt:P,Yt:D(E,k)}},()=>(yt(b,M[0].Lt),yt(b,k[0].Lt),D(St,H))]},Rs=(t,e,n,o)=>(s,r,c,i)=>{const{ht:l,ot:a,nt:d,gt:u,Jt:p,Ot:h}=e,{Lt:y,kt:f,Mt:m}=s,[v,g]=zt(333),[b,w]=zt(444),[x,$]=zt(),L=D(c,[s],i),S=t=>{wt(u.scrollBy)&&u.scrollBy({behavior:"smooth",left:t.x,top:t.y})},E=i?Ut:Wt;let G=!0;const O=t=>t.propertyName.indexOf(E)>-1;return D(St,[Q(m,"pointermove pointerleave",o),Q(y,"pointerenter",(()=>{r(zn,!0)})),Q(y,"pointerleave pointercancel",(()=>{r(zn,!1)})),!d&&Q(y,"mousedown",(()=>{const t=Ke();(On(t,Mt)||On(t,It)||t===document.body)&&ve(D(tn,a),25)})),Q(y,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;G&&0===o&&Kt(y)===l&&S({x:e,y:n}),G=!1,r(Vn,!0),v((()=>{G=!0,r(Vn)})),Qe(t)}),{H:!1,I:!0}),Q(m,"transitionstart",(t=>{if(O(t)){const t=()=>{L(),x(t)};t()}})),Q(m,"transitionend transitioncancel",(t=>{O(t)&&($(),L())})),Q(y,"pointerdown",D(Q,p,"click",bo,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",o="client"+(i?"X":"Y"),s=i?"left":"top",r=i?"w":"h",c=i?"x":"y";return Q(f,"pointerdown",(i=>{const l=jt(i.target,`.${yn}`)===m,a=l?m:f,d=t.scrollbars,{button:y,isPrimary:v,pointerType:g}=i,{pointers:x}=d;if(0===y&&v&&d[l?"dragScroll":"clickScroll"]&&(x||[]).includes(g)){w();const t=!l&&i.shiftKey,d=D(te,m),y=D(te,f),v=(t,e)=>(t||d())[s]-(e||y())[s],g=qe(te(u)[E])/Qt(u)[r]||1,x=((t,e)=>o=>{const{Rt:s}=n,i=Qt(f)[r]-Qt(m)[r],l=e*o/i*s[c];Ct(u,{[c]:t+l})})(gt(u)[c],1/g),$=i[o],L=d(),G=y(),O=L[E],T=v(L,G)+O/2,C=$-G[s],H=l?0:C-T,Z=t=>{St(A),a.releasePointerCapture(t.pointerId)},M=()=>h(is,!0),k=M(),A=[()=>{const t=gt(u);k();const e=gt(u),n={x:e.x-t.x,y:e.y-t.y};(ge(n.x)>3||ge(n.y)>3)&&(M(),Ct(u,t),S(n),b(k))},Q(p,e,Z),Q(p,"selectstart",(t=>Qe(t)),{H:!1}),Q(f,e,Z),Q(f,"pointermove",(e=>{const n=e[o]-$;(l||t)&&x(H+n)}))];if(a.setPointerCapture(i.pointerId),t)x(H);else if(!l){const t=oe(Ms);t&&ot(A,t(x,v,H,O,C))}}}))})(),g,w,$])},Bs=(t,e,n,o,s,r)=>{let c,i,l,a,d,u=Dt,p=0;const h=t=>"mouse"===t.pointerType,[y,f]=zt(),[m,v]=zt(100),[g,b]=zt(100),[w,x]=zt((()=>p)),[$,L]=Is(t,s,o,Rs(e,s,o,(t=>h(t)&&M()))),{ht:S,Kt:E,yt:G}=s,{Bt:O,Ut:T,Nt:C,qt:H}=$,Z=(t,e)=>{if(x(),t)O(qn);else{const t=D(O,qn,!0);p>0&&!e?w(t):t()}},M=()=>{(l?!c:!a)&&(Z(!0),m((()=>{Z(!1)})))},k=t=>{O(on,t,!0),O(on,t,!1)},A=t=>{h(t)&&(c=l,l&&Z(!0))},R=[x,v,b,f,()=>u(),Q(S,"pointerover",A,{A:!0}),Q(S,"pointerenter",A),Q(S,"pointerleave",(t=>{h(t)&&(c=!1,l&&Z(!1))})),Q(S,"pointermove",(t=>{h(t)&&i&&M()})),Q(E,"scroll",(t=>{y((()=>{C(),M()})),r(t),H()}))];return[()=>D(St,ot(R,L())),({It:t,Tt:e,Gt:s,Qt:r})=>{const{Zt:c,tn:h,nn:y,sn:f}=r||{},{Ct:m,dt:v}=s||{},{ct:b}=n,{M:w}=Tt(),{G:x,en:$}=o,[L,S]=t("showNativeOverlaidScrollbars"),[M,A]=t("scrollbars.theme"),[R,P]=t("scrollbars.visibility"),[q,I]=t("scrollbars.autoHide"),[N,B]=t("scrollbars.autoHideSuspend"),[z]=t("scrollbars.autoHideDelay"),[j,V]=t("scrollbars.dragScroll"),[_,W]=t("scrollbars.clickScroll"),[X,F]=t("overflow"),K=v&&!e,U=$.x||$.y,Y=c||h||f||m||e,J=y||P||F,tt=L&&w.x&&w.y,et=(t,e,n)=>{const o=t.includes(Zt)&&(R===Pt||"auto"===R&&e===Zt);return O(gs,o,n),o};if(p=z,K&&(N&&U?(k(!1),u(),g((()=>{u=Q(E,"scroll",D(k,!0),{A:!0})}))):k(!0)),S&&O(ps,tt),A&&(O(d),O(M,!0),d=M),B&&!N&&k(!0),I&&(i="move"===q,l="leave"===q,a="never"===q,Z(a,!0)),V&&O(ws,j),W&&O(bs,_),J){const t=et(X.x,x.x,!0),e=et(X.y,x.y,!1);O(vs,!(t&&e))}Y&&(T(),C(),H(),O(Nn,!$.x,!0),O(Nn,!$.y,!1),O(ms,b&&!G))},{},$]},_s=t=>{const e=Tt(),{P:n,R:o}=e,{elements:s}=n(),{host:r,padding:c,viewport:i,content:l}=s,a=Se(t),d=a?{}:t,{elements:u}=d,{host:p,padding:h,viewport:y,content:f}=u||{},m=a?t:d.target,v=po(m),g=xe(m,"textarea"),b=m.ownerDocument,w=b.documentElement,x=()=>b.defaultView||ft,$=D(xs,[m]),L=D($o,[m]),S=D(Gt,""),E=D($,S,i),G=D(L,S,l),O=E(y),T=O===m,C=T&&v,H=!T&&G(f),Z=!T&&O===H,M=C?w:O,k=g?$(S,r,p):m,A=C?M:k,R=!T&&L(S,c,h),P=!Z&&H,q=[P,M,R,A].map((t=>Se(t)&&!Kt(t)&&t)),I=t=>t&&rn(q,t),N=I(M)?m:M,B={vt:m,ht:A,ot:M,cn:R,bt:P,gt:C?w:M,Kt:C?b:M,rn:v?w:N,Jt:b,wt:g,yt:v,Dt:a,nt:T,ln:x,St:t=>dn(M,Mt,t),Ot:(t,e)=>We(M,Mt,t,e)},{vt:z,ht:j,cn:V,ot:_,bt:W}=B,X=[()=>{Et(j,[It,_e]),Et(z,_e),v&&Et(w,[_e,It])}],F=g&&I(j);let K=g?z:Ze([W,_,V,j,z].find((t=>t&&!I(t))));const U=C?z:W||_,Y=D(St,X);return[B,()=>{const t=x(),e=Ke(),n=t=>{yt(Kt(t),Ze(t)),Rt(t)},s=t=>Q(t,"focusin focusout focus blur",bo,{I:!0,H:!1}),r="tabindex",c=an(_,r),i=s(e);return Lt(j,It,T?"":ss),Lt(V,nn,""),Lt(_,Mt,""),Lt(W,_n,""),T||(Lt(_,r,c||"-1"),v&&Lt(w,Bn,"")),F&&($n(z,j),ot(X,(()=>{$n(j,z),Rt(j)}))),yt(U,K),yt(j,V),yt(V||j,!T&&_),yt(_,W),ot(X,[i,()=>{const t=Ke(),e=I(_),o=e&&t===_?z:t,i=s(o);Et(V,nn),Et(W,_n),Et(_,Mt),v&&Et(w,Bn),c?Lt(_,r,c):Et(_,r),I(W)&&n(W),e&&n(_),I(V)&&n(V),tn(o),i()}]),o&&!T&&(un(_,Mt,Eo),ot(X,D(Et,_,Mt))),tn(!T&&v&&e===z&&t.top===t?_:e),i(),K=0,Y},Y]},zs=({bt:t})=>({Gt:e,an:n,Tt:o})=>{const{xt:s}=e||{},{$t:r}=n;t&&(s||o)&&ne(t,{[Wt]:r&&"100%"})},Ns=({ht:t,cn:e,ot:n,nt:o},s)=>{const[r,c]=ht({i:Zo,o:An()},D(An,t,"padding",""));return({It:t,Gt:i,an:l,Tt:a})=>{let[d,u]=c(a);const{R:p}=Tt(),{ft:h,Ht:y,Ct:f}=i||{},{ct:m}=l,[v,g]=t("paddingAbsolute");(h||u||a||y)&&([d,u]=r(a));const b=!o&&(g||f||u);if(b){const t=!v||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[oo]:t&&!m?-o:0,[so]:t?-r:0,[no]:t&&m?-o:0,top:t?-d.t:0,right:t?m?-d.r:"auto":0,left:t?m?"auto":-d.l:0,[Ut]:t&&`calc(100% + ${o}px)`},i={[Jn]:t?d.t:0,[Qn]:t?d.r:0,[eo]:t?d.b:0,[to]:t?d.l:0};ne(e||n,c),ne(n,i),G(s,{cn:d,un:!t,rt:e?i:G({},c,i)})}return{_n:b}}},qs=(t,e)=>{const n=Tt(),{ht:o,cn:s,ot:r,nt:c,Kt:i,gt:l,yt:a,Ot:d,ln:u}=t,{R:p}=n,h=a&&c,y=D(Wn,0),f=["display","direction","flexDirection","writingMode"],m={i:co,o:{w:0,h:0}},v={i:me,o:{}},g=t=>{d(xo,!h&&t)},[b,w]=ht(m,D(mn,r)),[x,$]=ht(m,D(Ye,r)),[L,S]=ht(m),[E]=ht(v),[O,T]=ht(m),[C]=ht(v),[H]=ht({i:(t,e)=>Ae(t,e,f),o:{}},(()=>es(r)?qt(r,f):{})),[Z,M]=ht({i:(t,e)=>me(t.T,e.T)&&me(t.D,e.D),o:wo()},(()=>{g(!0);const t=gt(l),e=d(as,!0),n=Q(i,Zt,(e=>{const n=gt(l);e.isTrusted&&n.x===t.x&&n.y===t.y&&vo(e)}),{I:!0,A:!0});Ct(l,{x:0,y:0}),e();const o=gt(l),s=Ye(l);Ct(l,{x:s.w,y:s.h});const r=gt(l);Ct(l,{x:r.x-o.x<1&&-s.w,y:r.y-o.y<1&&-s.h});const c=gt(l);return Ct(l,t),sn((()=>n())),{T:o,D:c}})),k=oe(ko),A=(t,e)=>`${e?cs:rs}${Wo(t)}`;return({It:c,Gt:i,an:l,Tt:a},{_n:f})=>{const{ft:m,Ht:v,Ct:D,dt:Q,zt:R}=i||{},P=k&&k.tt(t,e,l,n,c),{it:q,ut:I,_t:N}=P||{},[B,z]=Hs(c,n),[j,V]=c("overflow"),_=Ee(j.x),W=Ee(j.y),X=m||f||v||D||R||z;let F=w(a),K=$(a),U=S(a),Y=T(a);if(z&&p&&d(Eo,!B),X){dn(o,It,ye)&&g(!0);const[t]=I?I():[],[e]=F=b(a),[n]=K=x(a),s=yo(r),c=h&&ts(u()),i={w:y(n.w+e.w),h:y(n.h+e.h)},l={w:y((c?c.w:s.w+y(s.w-n.w))+e.w),h:y((c?c.h:s.h+y(s.h-n.h))+e.h)};t&&t(),Y=O(l),U=L(((t,e)=>{const n=ft.devicePixelRatio%1!=0?1:0,o={w:y(t.w-e.w),h:y(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(i,l),a)}const[J,tt]=Y,[et,nt]=U,[ot,st]=K,[rt,ct]=F,[it,lt]=E({x:et.w>0,y:et.h>0}),at=_&&W&&(it.x||it.y)||_&&it.x&&!it.y||W&&it.y&&!it.x,dt=f||D||R||ct||st||tt||nt||V||z||X,ut=ks(it,j),[pt,ht]=C(ut.G),[,yt]=H(a),mt=D||Q||yt||lt||a,[vt,gt]=mt?Z(a):M();return dt&&(ht&&(t=>{const e=t=>[Pt,_t,Zt].map((e=>A(e,t))),n=e(!0).concat(e()).join(" ");d(n),d(Ht(t).map((e=>A(t[e],"x"===e))).join(" "),!0)})(ut.G),N&&q&&ne(r,N(ut,l,q(ut,ot,rt)))),g(!1),We(o,It,ye,at),We(s,nn,ye,at),G(e,{G:pt,Vt:{x:J.w,y:J.h},Rt:{x:et.w,y:et.h},en:it,Pt:ns(vt,et)}),{nn:ht,Zt:tt,tn:nt,sn:gt||nt,dn:mt}}},Vs=t=>{const[e,n,o]=_s(t),s={cn:{t:0,r:0,b:0,l:0},un:!1,rt:{[oo]:0,[so]:0,[no]:0,[Jn]:0,[Qn]:0,[eo]:0,[to]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},G:{x:_t,y:_t},en:{x:!1,y:!1},Pt:wo()},{vt:r,gt:c,nt:i}=e,{R:l,M:a}=Tt(),d=!l&&(a.x||a.y),u=[zs(e),Ns(e,s),qs(e,s)];return[n,t=>{const e={},n=d&&gt(c);return Z(u,(n=>{G(e,n(t,e)||{})})),Ct(c,n),!i&&Ct(r,0),e},s,e,o]},Fs=(t,e,n,o,s)=>{const r=Rn(e,{}),[c,i,l,a,d]=Vs(t),[u,p,h]=Ds(a,l,r,(t=>{g({},t)})),[y,f,,m]=Bs(t,e,h,l,a,s),v=t=>Ht(t).some((e=>!!t[e])),g=(t,s)=>{if(n())return!1;const{fn:r,Tt:c,At:l,pn:a}=t,d=r||{},u=!!c,y={It:Rn(e,d,u),fn:d,Tt:u};if(a)return f(y),!1;const m=s||p(G({},y,{At:l})),g=i(G({},y,{an:h,Gt:m}));f(G({},y,{Gt:m,Qt:g}));const b=v(m),w=v(g),x=b||w||!ln(d)||u;return x&&o(t,{Gt:m,Qt:g}),x};return[()=>{const{rn:t,gt:e}=a,n=gt(t),o=[u(),c(),y()];return Ct(e,n),D(St,o)},g,()=>({vn:h,hn:l}),{gn:a,bn:m},d]},Vt=(t,e,n)=>{const{N:o}=Tt(),s=Se(t),r=s?t:t.target,c=To(r);if(e&&!c){let c=!1;const i=[],l={},a=t=>{const e=lo(t),n=oe(Ls);return n?n(e,!0):e},d=G({},o(),a(e)),[u,p,h]=en(),[y,f,m]=en(n),v=(t,e)=>{m(t,e),h(t,e)},[g,b,w,x,$]=Fs(t,d,(()=>c),(({fn:t,Tt:e},{Gt:n,Qt:o})=>{const{ft:s,Ct:r,xt:c,Ht:i,Et:l,dt:a}=n,{Zt:d,tn:u,nn:p,sn:h}=o;v("updated",[S,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!h,contentMutation:!!i,hostMutation:!!l,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>v("scroll",[S,t]))),L=t=>{Os(r),St(i),c=!0,v("destroyed",[S,t]),p(),f()},S={options(t,e){if(t){const n=e?o():{},s=So(d,G(n,a(t)));ln(s)||(G(d,s),b({fn:s}))}return G({},d)},on:y,off:(t,e)=>{t&&e&&f(t,e)},state(){const{vn:t,hn:e}=w(),{ct:n}=t,{Vt:o,Rt:s,G:r,en:i,cn:l,un:a,Pt:d}=e;return G({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:i,scrollCoordinates:{start:d.T,end:d.D},padding:l,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{vt:t,ht:e,cn:n,ot:o,bt:s,gt:r,Kt:c}=x.gn,{Ft:i,Wt:l}=x.bn,a=t=>{const{Mt:e,kt:n,Lt:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{jt:e,Xt:n}=t,o=a(e[0]);return G({},o,{clone:()=>{const t=a(n());return b({pn:!0}),t}})};return G({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(i),scrollbarVertical:d(l)})},update:t=>b({Tt:t,At:!0}),destroy:D(L,!1),plugin:t=>l[Ht(t)[0]]};return ot(i,[$]),Cs(r,S),Ho(Lo,Vt,[S,u,l]),Es(x.gn.yt,!s&&t.cancel)?(L(!0),S):(ot(i,g()),v("initialized",[S]),S.update(!0),S)}return c};function vn(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}))}function js(){const t=zo();No(t)}function Gs(){qo(Vo())}function Us(){const t=document.getElementById("banner-wrapper");document.documentElement.hasAttribute("isHome")?(t.classList.remove("banner-else"),t.classList.add("banner-home")):(t.classList.remove("banner-home"),t.classList.add("banner-else"))}function Po(){Vt({target:document.querySelector("body"),cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{Vt(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})}))}function Do(){Us(),js(),Gs(),Po()}Vt.plugin=t=>{const e=$t(t),n=e?t:[t],o=n.map((t=>Ho(t,Vt)[0]));return Ts(n),e?o:o[0]},Vt.valid=t=>{const e=t&&t.elements,n=wt(e)&&e();return we(n)&&!!To(n.target)},Vt.env=()=>{const{k:t,M:e,R:n,V:o,B:s,F:r,P:c,U:i,N:l,q:a}=Tt();return G({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:i,getDefaultOptions:l,setDefaultOptions:a})},vn("display-setting",["display-setting","display-settings-switch"]),vn("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),vn("search-panel",["search-panel","search-bar","search-switch"]),Do(),document.addEventListener("astro:after-swap",Do);const jn=()=>{window.swup.hooks.on("link:click",(()=>{document.documentElement.style.setProperty("--content-delay","0ms")})),window.swup.hooks.on("content:replace",Po)};function Ws(){"dark"===localStorage.theme?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function Io(){document.getElementById("scheme-switch").addEventListener("click",(function(){Ws()})),document.getElementById("nav-menu-switch").addEventListener("click",(function(){document.getElementById("nav-menu-panel").classList.toggle("float-panel-closed")}))}window.swup.hooks?jn():document.addEventListener("swup:enable",jn),Io(),document.addEventListener("astro:after-swap",(()=>{Io()}),{once:!1});class Zs extends HTMLElement{constructor(){if(super(),void 0===this.dataset.isCollapsed||!1===this.dataset.isCollapsed)return;const t=this.dataset.id,e=this.querySelector(".expand-btn"),n=this.querySelector(`#${t}`);e.addEventListener("click",(()=>{n.classList.remove("collapsed"),e.classList.add("hidden")}))}}customElements.define("widget-layout",Zs);