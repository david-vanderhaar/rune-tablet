import{S as $,i as S,s as I,k as y,l as h,m as k,h as f,b as v,d,f as B,g as m,Z as j,a4 as b,o as x,v as D,D as E,y as M,z as N,A as O,Q as q,R as w,B as z,q as C,r as L,I as P,N as _}from"../chunks/index.4a9c39e8.js";import{a as g}from"../chunks/index.608cba37.js";import{g as T}from"../chunks/html2canvas.esm.47ae3cbc.js";import{b as A}from"../chunks/paths.c4971532.js";import{t as F}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.8c7b9773.js";import{b as Q}from"../chunks/beastiary.a9068db3.js";import{B as R}from"../chunks/BestiaryForm.6f0fc97e.js";const V=!1,Z=({params:s})=>({uuid:s.slug}),ae=Object.freeze(Object.defineProperty({__proto__:null,load:Z,prerender:V},Symbol.toStringTag,{value:"Module"}));function G(s){let e,r;const t=[s[0],{editMode:!0}];let o={};for(let a=0;a<t.length;a+=1)o=E(o,t[a]);return e=new R({props:o}),{c(){M(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,c){O(e,a,c),r=!0},p(a,c){const i=c&1?q(t,[w(a[0]),t[1]]):{};e.$set(i)},i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){d(e.$$.fragment,a),r=!1},d(a){z(e,a)}}}function H(s){let e,r;return{c(){e=y("div"),r=C("Loading...")},l(t){e=h(t,"DIV",{});var o=k(e);r=L(o,"Loading..."),o.forEach(f)},m(t,o){v(t,e,o),P(e,r)},p:_,i:_,o:_,d(t){t&&f(e)}}}function J(s){let e,r,t,o,a;const c=[H,G],i=[];function p(n,l){return n[0]?1:0}return r=p(s),t=i[r]=c[r](s),{c(){e=y("section"),t.c()},l(n){e=h(n,"SECTION",{});var l=k(e);t.l(l),l.forEach(f)},m(n,l){v(n,e,l),i[r].m(e,null),a=!0},p(n,[l]){let u=r;r=p(n),r===u?i[r].p(n,l):(D(),d(i[u],1,1,()=>{i[u]=null}),B(),t=i[r],t?t.p(n,l):(t=i[r]=c[r](n),t.c()),m(t,1),t.m(e,null))},i(n){a||(m(t),j(()=>{a&&(o||(o=b(e,g,{},!0)),o.run(1))}),a=!0)},o(n){d(t),o||(o=b(e,g,{},!1)),o.run(0),a=!1},d(n){n&&f(e),i[r].d(),n&&o&&o.end()}}}function K(s,e,r){let{data:t}=e,o;return x(()=>{r(0,o=Q.getById(t.uuid)),o||(T(`${A}/bestiary`),F.push("No card found with that ID"))}),s.$$set=a=>{"data"in a&&r(1,t=a.data)},[o,t]}class oe extends ${constructor(e){super(),S(this,e,K,J,I,{data:1})}}export{oe as component,ae as universal};