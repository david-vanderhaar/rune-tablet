import{S as X,i as Y,s as j,C as ce,k as E,l as S,m as C,h as m,p as R,n as _,b as v,E as q,F as me,G as ge,H as de,g as p,d as h,O as $e,o as _e,V as he,D as V,I as F,N as pe,a as y,c as D,q as ee,r as te,y as b,z as w,A as I,B as k,W as ne,v as ve,f as be,K as we,L as re}from"../chunks/index.725d4529.js";import{f as le}from"../chunks/index.5bfaf33b.js";import{v as Ie}from"../chunks/v4.a960c1f4.js";const{window:se}=he;function ke(o){let e,l,i,a;const r=o[9].default,s=ce(r,o,o[8],null);return{c(){e=E("section"),s&&s.c(),this.h()},l(t){e=S(t,"SECTION",{style:!0,draggable:!0,class:!0,id:!0});var f=C(e);s&&s.l(f),f.forEach(m),this.h()},h(){R(e,"left",o[0]+"px"),R(e,"top",o[1]+"px"),R(e,"visibility",o[2]),R(e,"position",o[3]),_(e,"draggable","false"),_(e,"class","draggable svelte-1rjau0t"),_(e,"id",o[4])},m(t,f){v(t,e,f),s&&s.m(e,null),l=!0,i||(a=[q(se,"pointerup",o[7]),q(se,"pointermove",o[6]),q(e,"pointerdown",o[5])],i=!0)},p(t,[f]){s&&s.p&&(!l||f&256)&&me(s,r,t,t[8],l?de(r,t[8],f,null):ge(t[8]),null),(!l||f&1)&&R(e,"left",t[0]+"px"),(!l||f&2)&&R(e,"top",t[1]+"px"),(!l||f&4)&&R(e,"visibility",t[2]),(!l||f&8)&&R(e,"position",t[3])},i(t){l||(p(s,t),l=!0)},o(t){h(s,t),l=!1},d(t){t&&m(e),s&&s.d(t),i=!1,$e(a)}}}function ye(){return window.innerWidth<768}function De(o,e,l){let{$$slots:i={},$$scope:a}=e,{left:r=0}=e,{top:s=0}=e,t=Ie(),f="hidden",c=!1,u="initial";function $(g){const W=document.getElementById(t);l(0,r=g.clientX-W.getBoundingClientRect().width/4),l(1,s=g.clientY-W.getBoundingClientRect().height/4)}function L(g){g.preventDefault(),c=!0,!ye()&&$(g)}function P(g){g.preventDefault(),c&&(l(0,r+=g.movementX),l(1,s+=g.movementY),u==="initial"&&l(3,u="absolute"))}function N(g){g.preventDefault(),c=!1}return _e(()=>{const g=document.getElementById(t),A=g.parentElement.getBoundingClientRect(),M=A.left,U=A.top;g.style.left=`${M}px`,g.style.top=`${U}px`,l(0,r=M),l(1,s=U),l(2,f="visible")}),o.$$set=g=>{"left"in g&&l(0,r=g.left),"top"in g&&l(1,s=g.top),"$$scope"in g&&l(8,a=g.$$scope)},[r,s,f,u,t,L,P,N,a,i]}class Ee extends X{constructor(e){super(),Y(this,e,De,ke,j,{left:0,top:1})}}function ie(o,e,l){const i=o.slice();return i[3]=e[l],i[5]=l,i}function ae(o,e,l){const i=o.slice();return i[3]=e[l],i[7]=l,i}function fe(o){let e,l=o[2][o[7]]+"",i,a=o[5]+1+"",r;return{c(){e=E("div"),i=ee(l),r=ee(a),this.h()},l(s){e=S(s,"DIV",{class:!0});var t=C(e);i=te(t,l),r=te(t,a),t.forEach(m),this.h()},h(){_(e,"class","grid-space svelte-soa20t")},m(s,t){v(s,e,t),V(e,i),V(e,r)},p:F,d(s){s&&m(e)}}}function oe(o){let e,l,i=Array(o[1]).fill(null),a=[];for(let r=0;r<i.length;r+=1)a[r]=fe(ae(o,i,r));return{c(){e=E("div");for(let r=0;r<a.length;r+=1)a[r].c();l=y(),this.h()},l(r){e=S(r,"DIV",{class:!0});var s=C(e);for(let t=0;t<a.length;t+=1)a[t].l(s);l=D(s),s.forEach(m),this.h()},h(){_(e,"class","grid-row svelte-soa20t")},m(r,s){v(r,e,s);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,null);V(e,l)},p(r,s){if(s&6){i=Array(r[1]).fill(null);let t;for(t=0;t<i.length;t+=1){const f=ae(r,i,t);a[t]?a[t].p(f,s):(a[t]=fe(f),a[t].c(),a[t].m(e,l))}for(;t<a.length;t+=1)a[t].d(1);a.length=i.length}},d(r){r&&m(e),pe(a,r)}}}function Se(o){let e,l,i=Array(o[0]).fill(null),a=[];for(let r=0;r<i.length;r+=1)a[r]=oe(ie(o,i,r));return{c(){e=E("div"),l=E("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=S(r,"DIV",{class:!0});var s=C(e);l=S(s,"DIV",{class:!0});var t=C(l);for(let f=0;f<a.length;f+=1)a[f].l(t);t.forEach(m),s.forEach(m),this.h()},h(){_(l,"class","tile-grid svelte-soa20t"),_(e,"class","grid-container svelte-soa20t")},m(r,s){v(r,e,s),V(e,l);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(l,null)},p(r,[s]){if(s&7){i=Array(r[0]).fill(null);let t;for(t=0;t<i.length;t+=1){const f=ie(r,i,t);a[t]?a[t].p(f,s):(a[t]=oe(f),a[t].c(),a[t].m(l,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=i.length}},i:F,o:F,d(r){r&&m(e),pe(a,r)}}}function Ce(o,e,l){let{height:i=4}=e,{width:a=4}=e;const r=["A","B","C","D"];return o.$$set=s=>{"height"in s&&l(0,i=s.height),"width"in s&&l(1,a=s.width)},[i,a,r]}class Ve extends X{constructor(e){super(),Y(this,e,Ce,Se,j,{height:0,width:1})}}function Be(o){let e,l,i;const a=o[1].default,r=ce(a,o,o[0],null);return{c(){e=E("div"),l=E("div"),r&&r.c(),this.h()},l(s){e=S(s,"DIV",{id:!0,class:!0});var t=C(e);l=S(t,"DIV",{class:!0});var f=C(l);r&&r.l(f),f.forEach(m),t.forEach(m),this.h()},h(){_(l,"class","box is-flex is-flex-wrap-wrap"),_(e,"id","draggable-bank"),_(e,"class","svelte-13uh0wi")},m(s,t){v(s,e,t),V(e,l),r&&r.m(l,null),i=!0},p(s,[t]){r&&r.p&&(!i||t&1)&&me(r,a,s,s[0],i?de(a,s[0],t,null):ge(s[0]),null)},i(s){i||(p(r,s),i=!0)},o(s){h(r,s),i=!1},d(s){s&&m(e),r&&r.d(s)}}}function Re(o,e,l){let{$$slots:i={},$$scope:a}=e;return o.$$set=r=>{"$$scope"in r&&l(0,a=r.$$scope)},[a,i]}class Le extends X{constructor(e){super(),Y(this,e,Re,Be,j,{})}}const T=""+new URL("../assets/cultist.5ff79271.svg",import.meta.url).href,Pe=""+new URL("../assets/elf-helmet.d6f898b5.svg",import.meta.url).href,Z=""+new URL("../assets/orc-head.4742e1e3.svg",import.meta.url).href,x=""+new URL("../assets/wooden-crate.cb120161.svg",import.meta.url).href,Ae=""+new URL("../assets/crowned-skull.f6b0bebe.svg",import.meta.url).href,Ue=""+new URL("../assets/overlord-helm.a8ff2fca.svg",import.meta.url).href;function ue(o){let e,l,i,a,r,s,t,f,c;return{c(){e=E("div"),l=E("span"),i=ee("Dark"),a=y(),r=E("span"),this.h()},l(u){e=S(u,"DIV",{class:!0});var $=C(e);l=S($,"SPAN",{class:!0});var L=C(l);i=te(L,"Dark"),L.forEach(m),a=D($),r=S($,"SPAN",{class:!0}),C(r).forEach(m),$.forEach(m),this.h()},h(){_(l,"class","tag is-dark"),_(r,"class","tag is-delete"),_(e,"class","tags has-addons")},m(u,$){v(u,e,$),V(e,l),V(l,i),V(e,a),V(e,r),t=!0,f||(c=q(r,"click",o[3]),f=!0)},p:F,i(u){t||(we(()=>{t&&(s||(s=re(e,le,{},!0)),s.run(1))}),t=!0)},o(u){s||(s=re(e,le,{},!1)),s.run(0),t=!1},d(u){u&&m(e),u&&s&&s.end(),f=!1,c()}}}function We(o){let e,l,i,a,r,s,t,f=o[2]&&ue(o);return{c(){e=E("div"),l=E("img"),a=y(),f&&f.c(),this.h()},l(c){e=S(c,"DIV",{});var u=C(e);l=S(u,"IMG",{src:!0,alt:!0,style:!0}),a=D(u),f&&f.l(u),u.forEach(m),this.h()},h(){ne(l.src,i=o[0])||_(l,"src",i),_(l,"alt","unit icon, hoverable to show stats"),R(l,"min-width","50px"),R(l,"min-height","50px"),R(l,"background-color",o[1]),R(l,"border-radius","2px")},m(c,u){v(c,e,u),V(e,l),V(e,a),f&&f.m(e,null),r=!0,s||(t=[q(e,"pointerenter",o[4]),q(e,"pointerleave",o[5])],s=!0)},p(c,u){(!r||u&1&&!ne(l.src,i=c[0]))&&_(l,"src",i),(!r||u&2)&&R(l,"background-color",c[1]),c[2]?f?(f.p(c,u),u&4&&p(f,1)):(f=ue(c),f.c(),p(f,1),f.m(e,null)):f&&(ve(),h(f,1,1,()=>{f=null}),be())},i(c){r||(p(f),r=!0)},o(c){h(f),r=!1},d(c){c&&m(e),f&&f.d(),s=!1,$e(t)}}}function Me(o){let e,l;return e=new Ee({props:{$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(i){w(e.$$.fragment,i)},m(i,a){I(e,i,a),l=!0},p(i,[a]){const r={};a&135&&(r.$$scope={dirty:a,ctx:i}),e.$set(r)},i(i){l||(p(e.$$.fragment,i),l=!0)},o(i){h(e.$$.fragment,i),l=!1},d(i){k(e,i)}}}function Oe(){return window.innerWidth<768}function Ge(o,e,l){let{iconImageSrc:i=T}=e,{backgroundColor:a="none"}=e,r=!1;function s(){l(2,r=!0)}function t(){l(2,r=!1)}function f(u){u.preventDefault(),s()}function c(u){u.preventDefault(),Oe()||t()}return o.$$set=u=>{"iconImageSrc"in u&&l(0,i=u.iconImageSrc),"backgroundColor"in u&&l(1,a=u.backgroundColor)},[i,a,r,t,f,c]}class B extends X{constructor(e){super(),Y(this,e,Ge,Me,j,{iconImageSrc:0,backgroundColor:1})}}function He(o){let e,l,i,a,r,s,t,f,c,u,$,L,P,N,g,W,A,M,U,z,O,K,G,J,H,Q;return e=new B({props:{iconImageSrc:Pe,backgroundColor:"#77b7ec"}}),i=new B({props:{iconImageSrc:T,backgroundColor:"green"}}),r=new B({props:{iconImageSrc:T}}),t=new B({props:{iconImageSrc:T}}),c=new B({props:{iconImageSrc:T}}),$=new B({props:{iconImageSrc:Z}}),P=new B({props:{iconImageSrc:Z}}),g=new B({props:{iconImageSrc:Z}}),A=new B({props:{iconImageSrc:Ae}}),U=new B({props:{iconImageSrc:Ue}}),O=new B({props:{iconImageSrc:x}}),G=new B({props:{iconImageSrc:x}}),H=new B({props:{iconImageSrc:x}}),{c(){b(e.$$.fragment),l=y(),b(i.$$.fragment),a=y(),b(r.$$.fragment),s=y(),b(t.$$.fragment),f=y(),b(c.$$.fragment),u=y(),b($.$$.fragment),L=y(),b(P.$$.fragment),N=y(),b(g.$$.fragment),W=y(),b(A.$$.fragment),M=y(),b(U.$$.fragment),z=y(),b(O.$$.fragment),K=y(),b(G.$$.fragment),J=y(),b(H.$$.fragment)},l(n){w(e.$$.fragment,n),l=D(n),w(i.$$.fragment,n),a=D(n),w(r.$$.fragment,n),s=D(n),w(t.$$.fragment,n),f=D(n),w(c.$$.fragment,n),u=D(n),w($.$$.fragment,n),L=D(n),w(P.$$.fragment,n),N=D(n),w(g.$$.fragment,n),W=D(n),w(A.$$.fragment,n),M=D(n),w(U.$$.fragment,n),z=D(n),w(O.$$.fragment,n),K=D(n),w(G.$$.fragment,n),J=D(n),w(H.$$.fragment,n)},m(n,d){I(e,n,d),v(n,l,d),I(i,n,d),v(n,a,d),I(r,n,d),v(n,s,d),I(t,n,d),v(n,f,d),I(c,n,d),v(n,u,d),I($,n,d),v(n,L,d),I(P,n,d),v(n,N,d),I(g,n,d),v(n,W,d),I(A,n,d),v(n,M,d),I(U,n,d),v(n,z,d),I(O,n,d),v(n,K,d),I(G,n,d),v(n,J,d),I(H,n,d),Q=!0},p:F,i(n){Q||(p(e.$$.fragment,n),p(i.$$.fragment,n),p(r.$$.fragment,n),p(t.$$.fragment,n),p(c.$$.fragment,n),p($.$$.fragment,n),p(P.$$.fragment,n),p(g.$$.fragment,n),p(A.$$.fragment,n),p(U.$$.fragment,n),p(O.$$.fragment,n),p(G.$$.fragment,n),p(H.$$.fragment,n),Q=!0)},o(n){h(e.$$.fragment,n),h(i.$$.fragment,n),h(r.$$.fragment,n),h(t.$$.fragment,n),h(c.$$.fragment,n),h($.$$.fragment,n),h(P.$$.fragment,n),h(g.$$.fragment,n),h(A.$$.fragment,n),h(U.$$.fragment,n),h(O.$$.fragment,n),h(G.$$.fragment,n),h(H.$$.fragment,n),Q=!1},d(n){k(e,n),n&&m(l),k(i,n),n&&m(a),k(r,n),n&&m(s),k(t,n),n&&m(f),k(c,n),n&&m(u),k($,n),n&&m(L),k(P,n),n&&m(N),k(g,n),n&&m(W),k(A,n),n&&m(M),k(U,n),n&&m(z),k(O,n),n&&m(K),k(G,n),n&&m(J),k(H,n)}}}function Ne(o){let e,l,i,a,r,s,t,f;return a=new Ve({}),t=new Le({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){e=E("div"),l=E("div"),i=E("div"),b(a.$$.fragment),r=y(),s=E("div"),b(t.$$.fragment),this.h()},l(c){e=S(c,"DIV",{id:!0});var u=C(e);l=S(u,"DIV",{class:!0});var $=C(l);i=S($,"DIV",{class:!0,id:!0});var L=C(i);w(a.$$.fragment,L),L.forEach(m),r=D($),s=S($,"DIV",{class:!0});var P=C(s);w(t.$$.fragment,P),P.forEach(m),$.forEach(m),u.forEach(m),this.h()},h(){_(i,"class","column"),_(i,"id","grid-container"),_(s,"class","column"),_(l,"class","columns"),_(e,"id","play-page")},m(c,u){v(c,e,u),V(e,l),V(l,i),I(a,i,null),V(l,r),V(l,s),I(t,s,null),f=!0},p(c,[u]){const $={};u&1&&($.$$scope={dirty:u,ctx:c}),t.$set($)},i(c){f||(p(a.$$.fragment,c),p(t.$$.fragment,c),f=!0)},o(c){h(a.$$.fragment,c),h(t.$$.fragment,c),f=!1},d(c){c&&m(e),k(a),k(t)}}}class Xe extends X{constructor(e){super(),Y(this,e,null,Ne,j,{})}}export{Xe as component};
