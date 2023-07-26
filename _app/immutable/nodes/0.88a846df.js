import{C as Ve,D as ue,E as ze,F as Le,G as Ne,S as pe,i as _e,s as me,k as w,a as j,l as $,m as A,h,c as O,n as u,H as X,b as D,I as v,J as U,v as he,d as M,f as ve,g as N,K as be,L as Be,o as Re,M as Ue,N as Y,O as He,e as Z,P as Fe,x as je,y as x,z as ge,A as ee,Q as Ge,R as Ke,B as te,T as Je,U as Qe,V as Oe,W as We,X as Xe,Y as Ye,Z as Ze,_ as xe,$ as et,a0 as tt,q as H,r as F,a1 as st,a2 as at,a3 as nt}from"../chunks/index.4a9c39e8.js";import{c as rt,f as it,a as lt}from"../chunks/index.608cba37.js";import{t as fe}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.8c7b9773.js";import{w as ot}from"../chunks/index.af5f2f02.js";import{b as G}from"../chunks/paths.c9ae43d6.js";const ct=!0,qt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ct},Symbol.toStringTag,{value:"Module"}));function ut(n,{from:e,to:t},r={}){const a=getComputedStyle(n),l=a.transform==="none"?"":a.transform,[c,s]=a.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*c/t.width-(t.left+c),o=e.top+e.height*s/t.height-(t.top+s),{delay:y=0,duration:b=g=>Math.sqrt(g)*120,easing:d=rt}=r;return{delay:y,duration:Ve(b)?b(Math.sqrt(i*i+o*o)):b,easing:d,css:(g,_)=>{const f=_*i,p=_*o,k=g+_*e.width/t.width,E=g+_*e.height/t.height;return`transform: ${l} translate(${f}px, ${p}px) scale(${k}, ${E});`}}}function Pe(n){return Object.prototype.toString.call(n)==="[object Date]"}function de(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const r=e.map((a,l)=>de(n[l],a));return a=>r.map(l=>l(a))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(Pe(n)&&Pe(e)){n=n.getTime(),e=e.getTime();const l=e-n;return c=>new Date(n+c*l)}const r=Object.keys(e),a={};return r.forEach(l=>{a[l]=de(n[l],e[l])}),l=>{const c={};return r.forEach(s=>{c[s]=a[s](l)}),c}}if(t==="number"){const r=e-n;return a=>n+a*r}throw new Error(`Cannot interpolate ${t} values`)}function ft(n,e={}){const t=ot(n);let r,a=n;function l(c,s){if(n==null)return t.set(n=c),Promise.resolve();a=c;let i=r,o=!1,{delay:y=0,duration:b=400,easing:d=Ne,interpolate:g=de}=ue(ue({},e),s);if(b===0)return i&&(i.abort(),i=null),t.set(n=a),Promise.resolve();const _=ze()+y;let f;return r=Le(p=>{if(p<_)return!0;o||(f=g(n,c),typeof b=="function"&&(b=b(n,c)),o=!0),i&&(i.abort(),i=null);const k=p-_;return k>b?(t.set(n=c),!1):(t.set(n=f(d(k/b))),!0)}),r.promise}return{set:l,update:(c,s)=>l(c(a,n),s),subscribe:t.subscribe}}function dt(n){let e,t=n[0].msg+"",r;return{c(){e=new He(!1),r=Z(),this.h()},l(a){e=Fe(a,!1),r=Z(),this.h()},h(){e.a=r},m(a,l){e.m(t,a,l),D(a,r,l)},p(a,l){l&1&&t!==(t=a[0].msg+"")&&e.p(t)},i:Y,o:Y,d(a){a&&h(r),a&&e.d()}}}function pt(n){let e,t,r;const a=[n[2]];var l=n[0].component.src;function c(s){let i={};for(let o=0;o<a.length;o+=1)i=ue(i,a[o]);return{props:i}}return l&&(e=je(l,c())),{c(){e&&x(e.$$.fragment),t=Z()},l(s){e&&ge(e.$$.fragment,s),t=Z()},m(s,i){e&&ee(e,s,i),D(s,t,i),r=!0},p(s,i){const o=i&4?Ge(a,[Ke(s[2])]):{};if(i&1&&l!==(l=s[0].component.src)){if(e){he();const y=e;M(y.$$.fragment,1,0,()=>{te(y,1)}),ve()}l?(e=je(l,c()),x(e.$$.fragment),N(e.$$.fragment,1),ee(e,t.parentNode,t)):e=null}else l&&e.$set(o)},i(s){r||(e&&N(e.$$.fragment,s),r=!0)},o(s){e&&M(e.$$.fragment,s),r=!1},d(s){s&&h(t),e&&te(e,s)}}}function De(n){let e,t,r;return{c(){e=w("div"),this.h()},l(a){e=$(a,"DIV",{class:!0,role:!0,tabindex:!0}),A(e).forEach(h),this.h()},h(){u(e,"class","_toastBtn pe svelte-95rq8t"),u(e,"role","button"),u(e,"tabindex","0")},m(a,l){D(a,e,l),t||(r=[U(e,"click",n[4]),U(e,"keydown",n[8])],t=!0)},p:Y,d(a){a&&h(e),t=!1,be(r)}}}function _t(n){let e,t,r,a,l,c,s,i,o,y;const b=[pt,dt],d=[];function g(f,p){return f[0].component?0:1}r=g(n),a=d[r]=b[r](n);let _=n[0].dismissable&&De(n);return{c(){e=w("div"),t=w("div"),a.c(),l=j(),_&&_.c(),c=j(),s=w("progress"),this.h()},l(f){e=$(f,"DIV",{role:!0,class:!0});var p=A(e);t=$(p,"DIV",{class:!0});var k=A(t);a.l(k),k.forEach(h),l=O(p),_&&_.l(p),c=O(p),s=$(p,"PROGRESS",{class:!0}),A(s).forEach(h),p.forEach(h),this.h()},h(){u(t,"class","_toastMsg svelte-95rq8t"),X(t,"pe",n[0].component),u(s,"class","_toastBar svelte-95rq8t"),s.value=n[1],u(e,"role","status"),u(e,"class","_toastItem svelte-95rq8t"),X(e,"pe",n[0].pausable)},m(f,p){D(f,e,p),v(e,t),d[r].m(t,null),v(e,l),_&&_.m(e,null),v(e,c),v(e,s),i=!0,o||(y=[U(e,"mouseenter",n[9]),U(e,"mouseleave",n[6])],o=!0)},p(f,[p]){let k=r;r=g(f),r===k?d[r].p(f,p):(he(),M(d[k],1,1,()=>{d[k]=null}),ve(),a=d[r],a?a.p(f,p):(a=d[r]=b[r](f),a.c()),N(a,1),a.m(t,null)),(!i||p&1)&&X(t,"pe",f[0].component),f[0].dismissable?_?_.p(f,p):(_=De(f),_.c(),_.m(e,c)):_&&(_.d(1),_=null),(!i||p&2)&&(s.value=f[1]),(!i||p&1)&&X(e,"pe",f[0].pausable)},i(f){i||(N(a),i=!0)},o(f){M(a),i=!1},d(f){f&&h(e),d[r].d(),_&&_.d(),o=!1,be(y)}}}function ce(n,e="undefined"){return typeof n===e}function mt(n,e,t){let r,{item:a}=e,l=a.initial,c=l,s=!1,i={},o;const y=ft(a.initial,{duration:a.duration,easing:Ne});Be(n,y,E=>t(1,r=E));function b(){fe.pop(a.id)}function d(){(r===1||r===0)&&b()}function g(){!s&&r!==l&&(y.set(r,{duration:0}),s=!0)}function _(){if(s){const E=a.duration,I=E-E*((r-c)/(l-c));y.set(l,{duration:I}).then(d),s=!1}}function f(E=document){if(ce(E.hidden))return;const I=()=>E.hidden?g():_(),P="visibilitychange";E.addEventListener(P,I),o=()=>E.removeEventListener(P,I),I()}Re(f),Ue(()=>{ce(a.onpop,"function")&&a.onpop(a.id),o&&o()});const p=E=>{E instanceof KeyboardEvent&&["Enter"," "].includes(E.key)&&b()},k=()=>{a.pausable&&g()};return n.$$set=E=>{"item"in E&&t(0,a=E.item)},n.$$.update=()=>{if(n.$$.dirty&1&&(ce(a.progress)||t(0,a.next=a.progress,a)),n.$$.dirty&131&&l!==a.next&&(t(7,l=a.next),c=r,s=!1,y.set(l).then(d)),n.$$.dirty&1&&a.component){const{props:E={},sendIdTo:I}=a.component;t(2,i={...E,...I&&{[I]:a.id}})}},[a,r,i,y,b,g,_,l,p,k]}class ht extends pe{constructor(e){super(),_e(this,e,mt,_t,me,{item:0})}}function Te(n,e,t){const r=n.slice();return r[4]=e[t],r}function Ce(n,e){let t,r,a,l,c,s,i,o,y=Y,b;return r=new ht({props:{item:e[4]}}),{key:n,first:null,c(){t=w("li"),x(r.$$.fragment),a=j(),this.h()},l(d){t=$(d,"LI",{class:!0,style:!0});var g=A(t);ge(r.$$.fragment,g),a=O(g),g.forEach(h),this.h()},h(){var d;u(t,"class",l=Oe((d=e[4].classes)==null?void 0:d.join(" "))+" svelte-1u812xz"),u(t,"style",c=Me(e[4].theme)),this.first=t},m(d,g){D(d,t,g),ee(r,t,null),v(t,a),b=!0},p(d,g){var f;e=d;const _={};g&1&&(_.item=e[4]),r.$set(_),(!b||g&1&&l!==(l=Oe((f=e[4].classes)==null?void 0:f.join(" "))+" svelte-1u812xz"))&&u(t,"class",l),(!b||g&1&&c!==(c=Me(e[4].theme)))&&u(t,"style",c)},r(){o=t.getBoundingClientRect()},f(){We(t),y(),Xe(t,o)},a(){y(),y=Ye(t,o,ut,{duration:200})},i(d){b||(N(r.$$.fragment,d),Ze(()=>{b&&(i&&i.end(1),s=xe(t,it,e[4].intro),s.start())}),b=!0)},o(d){M(r.$$.fragment,d),s&&s.invalidate(),i=et(t,lt,{}),b=!1},d(d){d&&h(t),te(r),d&&i&&i.end()}}}function vt(n){let e,t=[],r=new Map,a,l=n[0];const c=s=>s[4].id;for(let s=0;s<l.length;s+=1){let i=Te(n,l,s),o=c(i);r.set(o,t[s]=Ce(o,i))}return{c(){e=w("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=$(s,"UL",{class:!0});var i=A(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(h),this.h()},h(){u(e,"class","_toastContainer svelte-1u812xz")},m(s,i){D(s,e,i);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);a=!0},p(s,[i]){if(i&1){l=s[0],he();for(let o=0;o<t.length;o+=1)t[o].r();t=Je(t,i,c,1,s,l,r,e,Qe,Ce,null,Te);for(let o=0;o<t.length;o+=1)t[o].a();ve()}},i(s){if(!a){for(let i=0;i<l.length;i+=1)N(t[i]);a=!0}},o(s){for(let i=0;i<t.length;i+=1)M(t[i]);a=!1},d(s){s&&h(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Me(n){return n?Object.keys(n).reduce((e,t)=>`${e}${t}:${n[t]};`,""):void 0}function bt(n,e,t){let r;Be(n,fe,s=>t(3,r=s));let{options:a={}}=e,{target:l="default"}=e,c=[];return n.$$set=s=>{"options"in s&&t(1,a=s.options),"target"in s&&t(2,l=s.target)},n.$$.update=()=>{n.$$.dirty&6&&fe._init(l,a),n.$$.dirty&12&&t(0,c=r.filter(s=>s.target===l))},[c,a,l,r]}class gt extends pe{constructor(e){super(),_e(this,e,bt,vt,me,{options:1,target:2})}}function yt(n){let e,t,r,a,l,c,s,i,o,y,b,d,g,_,f,p,k,E,I,P,se,ae,B,ne,re,V,ie,K,J,z,Q,L,T,le,ye;const oe=n[3].default,q=tt(oe,n,n[2],null);return L=new gt({props:{options:{reversed:!0,intro:{y:96}}}}),{c(){e=w("nav"),t=w("div"),r=w("a"),a=w("p"),l=H("RUNE Tablet"),c=j(),s=w("a"),i=w("span"),o=j(),y=w("span"),b=j(),d=w("span"),_=j(),f=w("div"),p=w("div"),k=w("a"),E=H("Play"),I=j(),P=w("a"),se=H("Equipment"),ae=j(),B=w("a"),ne=H("Bestiary"),re=j(),V=w("a"),ie=H("About"),J=j(),z=w("main"),q&&q.c(),Q=j(),x(L.$$.fragment),this.h()},l(m){e=$(m,"NAV",{class:!0,role:!0,"aria-label":!0});var S=A(e);t=$(S,"DIV",{class:!0});var W=A(t);r=$(W,"A",{class:!0,href:!0});var Ee=A(r);a=$(Ee,"P",{class:!0});var ke=A(a);l=F(ke,"RUNE Tablet"),ke.forEach(h),Ee.forEach(h),c=O(W),s=$(W,"A",{id:!0,role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var R=A(s);i=$(R,"SPAN",{"aria-hidden":!0}),A(i).forEach(h),o=O(R),y=$(R,"SPAN",{"aria-hidden":!0}),A(y).forEach(h),b=O(R),d=$(R,"SPAN",{"aria-hidden":!0}),A(d).forEach(h),R.forEach(h),W.forEach(h),_=O(S),f=$(S,"DIV",{id:!0,class:!0});var we=A(f);p=$(we,"DIV",{class:!0});var C=A(p);k=$(C,"A",{class:!0,href:!0});var $e=A(k);E=F($e,"Play"),$e.forEach(h),I=O(C),P=$(C,"A",{class:!0,href:!0});var Ae=A(P);se=F(Ae,"Equipment"),Ae.forEach(h),ae=O(C),B=$(C,"A",{class:!0,href:!0});var Se=A(B);ne=F(Se,"Bestiary"),Se.forEach(h),re=O(C),V=$(C,"A",{class:!0,href:!0});var qe=A(V);ie=F(qe,"About"),qe.forEach(h),C.forEach(h),we.forEach(h),S.forEach(h),J=O(m),z=$(m,"MAIN",{class:!0});var Ie=A(z);q&&q.l(Ie),Ie.forEach(h),Q=O(m),ge(L.$$.fragment,m),this.h()},h(){u(a,"class","menu-label"),u(r,"class","navbar-item p-0 pr-2"),u(r,"href",G+"/"),u(i,"aria-hidden","true"),u(y,"aria-hidden","true"),u(d,"aria-hidden","true"),u(s,"id","navbar-menu-mobile"),u(s,"role","button"),u(s,"class",g="navbar-burger "+(n[0]?"is-active":"")),u(s,"aria-label","menu"),u(s,"aria-expanded","false"),u(s,"data-target","navbarBasicExample"),u(t,"class","navbar-brand"),u(k,"class","navbar-item"),u(k,"href",G+"/play"),u(P,"class","navbar-item"),u(P,"href",G+"/equipment"),u(B,"class","navbar-item"),u(B,"href",G+"/bestiary"),u(V,"class","navbar-item"),u(V,"href",G+"/"),u(p,"class","navbar-start"),u(f,"id","navbarBasicExample"),u(f,"class",K="navbar-menu "+(n[0]?"is-active":"")),u(e,"class","navbar section pb-2 pt-4 svelte-1nm4ziv"),u(e,"role","navigation"),u(e,"aria-label","main navigation"),u(z,"class","section pt-0 svelte-1nm4ziv")},m(m,S){D(m,e,S),v(e,t),v(t,r),v(r,a),v(a,l),v(t,c),v(t,s),v(s,i),v(s,o),v(s,y),v(s,b),v(s,d),v(e,_),v(e,f),v(f,p),v(p,k),v(k,E),v(p,I),v(p,P),v(P,se),v(p,ae),v(p,B),v(B,ne),v(p,re),v(p,V),v(V,ie),D(m,J,S),D(m,z,S),q&&q.m(z,null),D(m,Q,S),ee(L,m,S),T=!0,le||(ye=[U(window,"click",n[1]),U(s,"click",n[4])],le=!0)},p(m,[S]){(!T||S&1&&g!==(g="navbar-burger "+(m[0]?"is-active":"")))&&u(s,"class",g),(!T||S&1&&K!==(K="navbar-menu "+(m[0]?"is-active":"")))&&u(f,"class",K),q&&q.p&&(!T||S&4)&&st(q,oe,m,m[2],T?nt(oe,m[2],S,null):at(m[2]),null)},i(m){T||(N(q,m),N(L.$$.fragment,m),T=!0)},o(m){M(q,m),M(L.$$.fragment,m),T=!1},d(m){m&&h(e),m&&h(J),m&&h(z),q&&q.d(m),m&&h(Q),te(L,m),le=!1,be(ye)}}}function Et(n,e,t){let{$$slots:r={},$$scope:a}=e,l=!1;function c(i){l&&(document.querySelector("#navbar-menu-mobile").contains(i.target)||t(0,l=!1))}const s=()=>t(0,l=!l);return n.$$set=i=>{"$$scope"in i&&t(2,a=i.$$scope)},[l,c,a,r,s]}class It extends pe{constructor(e){super(),_e(this,e,Et,yt,me,{})}}export{It as component,qt as universal};