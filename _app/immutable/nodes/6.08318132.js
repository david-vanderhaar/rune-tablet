import{S as Y,i as X,s as z,C as ge,k as y,l as I,m as k,h as d,p as q,n as v,b as V,E as G,F as he,G as _e,H as pe,g as S,d as C,Q as ve,o as Ie,V as ke,D as b,I as H,O as le,a as B,c as R,q as J,r as K,y as U,z as A,A as L,B as N,W as ne,v as $e,f as be,K as we,L as Z,U as Ee,u as ye,M as De,J as Se,X as Ce,Y as Ve,Z as Be,N as Re}from"../chunks/index.bb4c9b91.js";import{f as x}from"../chunks/index.9d76f19c.js";import{v as Te}from"../chunks/extraEffects.276ce4a3.js";import{b as Pe}from"../chunks/beastiary.4235d3ad.js";import{E as Ue,g as Ae}from"../chunks/gear.da7b8347.js";const{window:re}=ke;function Le(o){let e,t,r,a;const n=o[9].default,s=ge(n,o,o[8],null);return{c(){e=y("section"),s&&s.c(),this.h()},l(l){e=I(l,"SECTION",{style:!0,draggable:!0,class:!0,id:!0});var f=k(e);s&&s.l(f),f.forEach(d),this.h()},h(){q(e,"left",o[0]+"px"),q(e,"top",o[1]+"px"),q(e,"visibility",o[2]),q(e,"position",o[3]),v(e,"draggable","false"),v(e,"class","draggable svelte-1rjau0t"),v(e,"id",o[4])},m(l,f){V(l,e,f),s&&s.m(e,null),t=!0,r||(a=[G(re,"pointerup",o[7]),G(re,"pointermove",o[6]),G(e,"pointerdown",o[5])],r=!0)},p(l,[f]){s&&s.p&&(!t||f&256)&&he(s,n,l,l[8],t?pe(n,l[8],f,null):_e(l[8]),null),(!t||f&1)&&q(e,"left",l[0]+"px"),(!t||f&2)&&q(e,"top",l[1]+"px"),(!t||f&4)&&q(e,"visibility",l[2]),(!t||f&8)&&q(e,"position",l[3])},i(l){t||(S(s,l),t=!0)},o(l){C(s,l),t=!1},d(l){l&&d(e),s&&s.d(l),r=!1,ve(a)}}}function Ne(o,e,t){let{$$slots:r={},$$scope:a}=e,{left:n=0}=e,{top:s=0}=e,l=Te(),f="hidden",c=!1,u="initial";function h(m){const T=document.getElementById(l);t(0,n=m.clientX-T.getBoundingClientRect().width/4),t(1,s=m.clientY-T.getBoundingClientRect().height/4)}function w(m){m.preventDefault(),c=!0,u==="initial"&&h(m)}function _(m){m.preventDefault(),c&&(t(0,n+=m.movementX),t(1,s+=m.movementY),u==="initial"&&t(3,u="absolute"))}function $(m){m.preventDefault(),c=!1}return Ie(()=>{const m=document.getElementById(l),P=m.parentElement.getBoundingClientRect(),W=P.left,g=P.top;m.style.left=`${W}px`,m.style.top=`${g}px`,t(0,n=W),t(1,s=g),t(2,f="visible")}),o.$$set=m=>{"left"in m&&t(0,n=m.left),"top"in m&&t(1,s=m.top),"$$scope"in m&&t(8,a=m.$$scope)},[n,s,f,u,l,w,_,$,a,r]}class Oe extends Y{constructor(e){super(),X(this,e,Ne,Le,z,{left:0,top:1})}}function se(o,e,t){const r=o.slice();return r[3]=e[t],r[5]=t,r}function ae(o,e,t){const r=o.slice();return r[3]=e[t],r[7]=t,r}function ie(o){let e,t=o[2][o[7]]+"",r,a=o[5]+1+"",n;return{c(){e=y("div"),r=J(t),n=J(a),this.h()},l(s){e=I(s,"DIV",{class:!0});var l=k(e);r=K(l,t),n=K(l,a),l.forEach(d),this.h()},h(){v(e,"class","grid-space svelte-soa20t")},m(s,l){V(s,e,l),b(e,r),b(e,n)},p:H,d(s){s&&d(e)}}}function oe(o){let e,t,r=Array(o[1]).fill(null),a=[];for(let n=0;n<r.length;n+=1)a[n]=ie(ae(o,r,n));return{c(){e=y("div");for(let n=0;n<a.length;n+=1)a[n].c();t=B(),this.h()},l(n){e=I(n,"DIV",{class:!0});var s=k(e);for(let l=0;l<a.length;l+=1)a[l].l(s);t=R(s),s.forEach(d),this.h()},h(){v(e,"class","grid-row svelte-soa20t")},m(n,s){V(n,e,s);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);b(e,t)},p(n,s){if(s&6){r=Array(n[1]).fill(null);let l;for(l=0;l<r.length;l+=1){const f=ae(n,r,l);a[l]?a[l].p(f,s):(a[l]=ie(f),a[l].c(),a[l].m(e,t))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(n){n&&d(e),le(a,n)}}}function qe(o){let e,t,r=Array(o[0]).fill(null),a=[];for(let n=0;n<r.length;n+=1)a[n]=oe(se(o,r,n));return{c(){e=y("div"),t=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=I(n,"DIV",{class:!0});var s=k(e);t=I(s,"DIV",{class:!0});var l=k(t);for(let f=0;f<a.length;f+=1)a[f].l(l);l.forEach(d),s.forEach(d),this.h()},h(){v(t,"class","tile-grid svelte-soa20t"),v(e,"class","grid-container svelte-soa20t")},m(n,s){V(n,e,s),b(e,t);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(t,null)},p(n,[s]){if(s&7){r=Array(n[0]).fill(null);let l;for(l=0;l<r.length;l+=1){const f=se(n,r,l);a[l]?a[l].p(f,s):(a[l]=oe(f),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},i:H,o:H,d(n){n&&d(e),le(a,n)}}}function We(o,e,t){let{height:r=4}=e,{width:a=4}=e;const n=["A","B","C","D"];return o.$$set=s=>{"height"in s&&t(0,r=s.height),"width"in s&&t(1,a=s.width)},[r,a,n]}class Me extends Y{constructor(e){super(),X(this,e,We,qe,z,{height:0,width:1})}}function Fe(o){let e,t,r;const a=o[1].default,n=ge(a,o,o[0],null);return{c(){e=y("div"),t=y("div"),n&&n.c(),this.h()},l(s){e=I(s,"DIV",{id:!0,class:!0});var l=k(e);t=I(l,"DIV",{class:!0});var f=k(t);n&&n.l(f),f.forEach(d),l.forEach(d),this.h()},h(){v(t,"class","box is-flex is-flex-wrap-wrap"),v(e,"id","draggable-bank"),v(e,"class","svelte-13uh0wi")},m(s,l){V(s,e,l),b(e,t),n&&n.m(t,null),r=!0},p(s,[l]){n&&n.p&&(!r||l&1)&&he(n,a,s,s[0],r?pe(a,s[0],l,null):_e(s[0]),null)},i(s){r||(S(n,s),r=!0)},o(s){C(n,s),r=!1},d(s){s&&d(e),n&&n.d(s)}}}function je(o,e,t){let{$$slots:r={},$$scope:a}=e;return o.$$set=n=>{"$$scope"in n&&t(0,a=n.$$scope)},[a,r]}class Ge extends Y{constructor(e){super(),X(this,e,je,Fe,z,{})}}const Q=""+new URL("../assets/cultist.5ff79271.svg",import.meta.url).href,He=""+new URL("../assets/elf-helmet.d6f898b5.svg",import.meta.url).href,ee=""+new URL("../assets/orc-head.4742e1e3.svg",import.meta.url).href,te=""+new URL("../assets/wooden-crate.cb120161.svg",import.meta.url).href,Ye=""+new URL("../assets/crowned-skull.f6b0bebe.svg",import.meta.url).href,Xe=""+new URL("../assets/overlord-helm.a8ff2fca.svg",import.meta.url).href;function fe(o){let e,t,r,a,n,s,l,f,c;return{c(){e=y("div"),t=y("span"),r=J("Dark"),a=B(),n=y("span"),this.h()},l(u){e=I(u,"DIV",{class:!0});var h=k(e);t=I(h,"SPAN",{class:!0});var w=k(t);r=K(w,"Dark"),w.forEach(d),a=R(h),n=I(h,"SPAN",{class:!0}),k(n).forEach(d),h.forEach(d),this.h()},h(){v(t,"class","tag is-dark"),v(n,"class","tag is-delete"),v(e,"class","tags has-addons")},m(u,h){V(u,e,h),b(e,t),b(t,r),b(e,a),b(e,n),l=!0,f||(c=G(n,"click",o[3]),f=!0)},p:H,i(u){l||(we(()=>{l&&(s||(s=Z(e,x,{},!0)),s.run(1))}),l=!0)},o(u){s||(s=Z(e,x,{},!1)),s.run(0),l=!1},d(u){u&&d(e),u&&s&&s.end(),f=!1,c()}}}function ze(o){let e,t,r,a,n,s,l,f=o[2]&&fe(o);return{c(){e=y("div"),t=y("img"),a=B(),f&&f.c(),this.h()},l(c){e=I(c,"DIV",{});var u=k(e);t=I(u,"IMG",{src:!0,alt:!0,style:!0}),a=R(u),f&&f.l(u),u.forEach(d),this.h()},h(){ne(t.src,r=o[0])||v(t,"src",r),v(t,"alt","unit icon, hoverable to show stats"),q(t,"min-width","50px"),q(t,"min-height","50px"),q(t,"background-color",o[1]),q(t,"border-radius","2px")},m(c,u){V(c,e,u),b(e,t),b(e,a),f&&f.m(e,null),n=!0,s||(l=[G(e,"pointerenter",o[4]),G(e,"pointerleave",o[5])],s=!0)},p(c,u){(!n||u&1&&!ne(t.src,r=c[0]))&&v(t,"src",r),(!n||u&2)&&q(t,"background-color",c[1]),c[2]?f?(f.p(c,u),u&4&&S(f,1)):(f=fe(c),f.c(),S(f,1),f.m(e,null)):f&&($e(),C(f,1,1,()=>{f=null}),be())},i(c){n||(S(f),n=!0)},o(c){C(f),n=!1},d(c){c&&d(e),f&&f.d(),s=!1,ve(l)}}}function Je(o){let e,t;return e=new Oe({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){U(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,a){L(e,r,a),t=!0},p(r,[a]){const n={};a&135&&(n.$$scope={dirty:a,ctx:r}),e.$set(n)},i(r){t||(S(e.$$.fragment,r),t=!0)},o(r){C(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function Ke(){return window.innerWidth<768}function Qe(o,e,t){let{iconImageSrc:r=Q}=e,{backgroundColor:a="none"}=e,n=!1;function s(){t(2,n=!0)}function l(){t(2,n=!1)}function f(u){u.preventDefault(),s()}function c(u){u.preventDefault(),Ke()||l()}return o.$$set=u=>{"iconImageSrc"in u&&t(0,r=u.iconImageSrc),"backgroundColor"in u&&t(1,a=u.backgroundColor)},[r,a,n,l,f,c]}class M extends Y{constructor(e){super(),X(this,e,Qe,Je,z,{iconImageSrc:0,backgroundColor:1})}}function ce(o,e,t){const r=o.slice();return r[4]=e[t],r}function ue(o){let e,t,r=o[4].title+"",a,n,s,l;function f(){return o[3](o[4])}return{c(){e=y("div"),t=y("button"),a=J(r),n=B(),this.h()},l(c){e=I(c,"DIV",{class:!0});var u=k(e);t=I(u,"BUTTON",{class:!0});var h=k(t);a=K(h,r),h.forEach(d),n=R(u),u.forEach(d),this.h()},h(){v(t,"class","is-flex is-justify-content-space-between button is-fullwidth is-dark svelte-1phe84y"),v(e,"class","dropdown-item svelte-1phe84y")},m(c,u){V(c,e,u),b(e,t),b(t,a),b(e,n),s||(l=G(t,"click",f),s=!0)},p(c,u){o=c,u&1&&r!==(r=o[4].title+"")&&ye(a,r)},d(c){c&&d(e),s=!1,l()}}}function Ze(o){let e,t,r,a,n,s,l,f,c,u,h=o[0],w=[];for(let _=0;_<h.length;_+=1)w[_]=ue(ce(o,h,_));return{c(){e=y("div"),t=y("div"),r=y("button"),a=y("span"),n=J(o[2]),s=B(),l=y("iconify-icon"),f=B(),c=y("div"),u=y("div");for(let _=0;_<w.length;_+=1)w[_].c();this.h()},l(_){e=I(_,"DIV",{class:!0});var $=k(e);t=I($,"DIV",{class:!0});var m=k(t);r=I(m,"BUTTON",{class:!0,"aria-haspopup":!0,"aria-controls":!0});var T=k(r);a=I(T,"SPAN",{class:!0});var P=k(a);n=K(P,o[2]),P.forEach(d),s=R(T),l=I(T,"ICONIFY-ICON",{icon:!0}),k(l).forEach(d),T.forEach(d),m.forEach(d),f=R($),c=I($,"DIV",{class:!0,id:!0,role:!0});var W=k(c);u=I(W,"DIV",{class:!0});var g=k(u);for(let p=0;p<w.length;p+=1)w[p].l(g);g.forEach(d),W.forEach(d),$.forEach(d),this.h()},h(){v(a,"class","mr-1"),Ee(l,"icon","mi:chevron-down"),v(r,"class","button svelte-1phe84y"),v(r,"aria-haspopup","true"),v(r,"aria-controls","dropdown-menu"),v(t,"class","dropdown-trigger svelte-1phe84y"),v(u,"class","dropdown-content svelte-1phe84y"),v(c,"class","dropdown-menu svelte-1phe84y"),v(c,"id","dropdown-menu"),v(c,"role","menu"),v(e,"class","dropdown is-down is-hoverable mb-2 svelte-1phe84y")},m(_,$){V(_,e,$),b(e,t),b(t,r),b(r,a),b(a,n),b(r,s),b(r,l),b(e,f),b(e,c),b(c,u);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(u,null)},p(_,[$]){if($&4&&ye(n,_[2]),$&3){h=_[0];let m;for(m=0;m<h.length;m+=1){const T=ce(_,h,m);w[m]?w[m].p(T,$):(w[m]=ue(T),w[m].c(),w[m].m(u,null))}for(;m<w.length;m+=1)w[m].d(1);w.length=h.length}},i:H,o:H,d(_){_&&d(e),le(w,_)}}}function xe(o,e,t){let{templateCards:r=[]}=e,{onSelect:a}=e,{label:n="Templates"}=e;const s=l=>a(l);return o.$$set=l=>{"templateCards"in l&&t(0,r=l.templateCards),"onSelect"in l&&t(1,a=l.onSelect),"label"in l&&t(2,n=l.label)},[r,a,n,s]}class et extends Y{constructor(e){super(),X(this,e,xe,Ze,z,{templateCards:0,onSelect:1,label:2})}}function me(o,e,t){const r=o.slice();return r[4]=e[t],r}function tt(o){let e,t,r,a,n,s,l,f,c,u,h,w,_,$,m,T,P,W,g,p,E,F,O,j;return e=new M({props:{iconImageSrc:He,backgroundColor:"#77b7ec"}}),r=new M({props:{iconImageSrc:Q}}),n=new M({props:{iconImageSrc:Q}}),l=new M({props:{iconImageSrc:Q}}),c=new M({props:{iconImageSrc:ee}}),h=new M({props:{iconImageSrc:ee}}),_=new M({props:{iconImageSrc:ee}}),m=new M({props:{iconImageSrc:Ye}}),P=new M({props:{iconImageSrc:Xe}}),g=new M({props:{iconImageSrc:te}}),E=new M({props:{iconImageSrc:te}}),O=new M({props:{iconImageSrc:te}}),{c(){U(e.$$.fragment),t=B(),U(r.$$.fragment),a=B(),U(n.$$.fragment),s=B(),U(l.$$.fragment),f=B(),U(c.$$.fragment),u=B(),U(h.$$.fragment),w=B(),U(_.$$.fragment),$=B(),U(m.$$.fragment),T=B(),U(P.$$.fragment),W=B(),U(g.$$.fragment),p=B(),U(E.$$.fragment),F=B(),U(O.$$.fragment)},l(i){A(e.$$.fragment,i),t=R(i),A(r.$$.fragment,i),a=R(i),A(n.$$.fragment,i),s=R(i),A(l.$$.fragment,i),f=R(i),A(c.$$.fragment,i),u=R(i),A(h.$$.fragment,i),w=R(i),A(_.$$.fragment,i),$=R(i),A(m.$$.fragment,i),T=R(i),A(P.$$.fragment,i),W=R(i),A(g.$$.fragment,i),p=R(i),A(E.$$.fragment,i),F=R(i),A(O.$$.fragment,i)},m(i,D){L(e,i,D),V(i,t,D),L(r,i,D),V(i,a,D),L(n,i,D),V(i,s,D),L(l,i,D),V(i,f,D),L(c,i,D),V(i,u,D),L(h,i,D),V(i,w,D),L(_,i,D),V(i,$,D),L(m,i,D),V(i,T,D),L(P,i,D),V(i,W,D),L(g,i,D),V(i,p,D),L(E,i,D),V(i,F,D),L(O,i,D),j=!0},p:H,i(i){j||(S(e.$$.fragment,i),S(r.$$.fragment,i),S(n.$$.fragment,i),S(l.$$.fragment,i),S(c.$$.fragment,i),S(h.$$.fragment,i),S(_.$$.fragment,i),S(m.$$.fragment,i),S(P.$$.fragment,i),S(g.$$.fragment,i),S(E.$$.fragment,i),S(O.$$.fragment,i),j=!0)},o(i){C(e.$$.fragment,i),C(r.$$.fragment,i),C(n.$$.fragment,i),C(l.$$.fragment,i),C(c.$$.fragment,i),C(h.$$.fragment,i),C(_.$$.fragment,i),C(m.$$.fragment,i),C(P.$$.fragment,i),C(g.$$.fragment,i),C(E.$$.fragment,i),C(O.$$.fragment,i),j=!1},d(i){N(e,i),i&&d(t),N(r,i),i&&d(a),N(n,i),i&&d(s),N(l,i),i&&d(f),N(c,i),i&&d(u),N(h,i),i&&d(w),N(_,i),i&&d($),N(m,i),i&&d(T),N(P,i),i&&d(W),N(g,i),i&&d(p),N(E,i),i&&d(F),N(O,i)}}}function de(o,e){let t,r,a,n,s;const l=[e[4]];let f={};for(let c=0;c<l.length;c+=1)f=Ce(f,l[c]);return r=new Ue({props:f}),{key:o,first:null,c(){t=y("div"),U(r.$$.fragment),a=B(),this.h()},l(c){t=I(c,"DIV",{style:!0});var u=k(t);A(r.$$.fragment,u),a=R(u),u.forEach(d),this.h()},h(){q(t,"width","400px"),q(t,"height","600px"),q(t,"max-width","100%"),this.first=t},m(c,u){V(c,t,u),L(r,t,null),b(t,a),s=!0},p(c,u){e=c;const h=u&1?Ve(l,[Be(e[4])]):{};r.$set(h)},i(c){s||(S(r.$$.fragment,c),we(()=>{s&&(n||(n=Z(t,x,{},!0)),n.run(1))}),s=!0)},o(c){C(r.$$.fragment,c),n||(n=Z(t,x,{},!1)),n.run(0),s=!1},d(c){c&&d(t),N(r),c&&n&&n.end()}}}function lt(o){let e,t,r,a,n,s,l,f,c,u,h,w,_,$=[],m=new Map,T;a=new Me({}),l=new Ge({props:{$$slots:{default:[tt]},$$scope:{ctx:o}}}),h=new et({props:{label:"pin template cards",templateCards:o[1],onSelect:o[2]}});let P=o[0];const W=g=>g[4].title;for(let g=0;g<P.length;g+=1){let p=me(o,P,g),E=W(p);m.set(E,$[g]=de(E,p))}return{c(){e=y("div"),t=y("div"),r=y("div"),U(a.$$.fragment),n=B(),s=y("div"),U(l.$$.fragment),f=B(),c=y("br"),u=B(),U(h.$$.fragment),w=B(),_=y("div");for(let g=0;g<$.length;g+=1)$[g].c();this.h()},l(g){e=I(g,"DIV",{id:!0});var p=k(e);t=I(p,"DIV",{class:!0});var E=k(t);r=I(E,"DIV",{class:!0,id:!0});var F=k(r);A(a.$$.fragment,F),F.forEach(d),n=R(E),s=I(E,"DIV",{class:!0});var O=k(s);A(l.$$.fragment,O),f=R(O),c=I(O,"BR",{}),u=R(O),A(h.$$.fragment,O),w=R(O),_=I(O,"DIV",{class:!0});var j=k(_);for(let i=0;i<$.length;i+=1)$[i].l(j);j.forEach(d),O.forEach(d),E.forEach(d),p.forEach(d),this.h()},h(){v(r,"class","column"),v(r,"id","grid-container"),v(_,"class","is-flex is-flex-direction-column is-align-items-center is-justify-content-start"),v(s,"class","column"),v(t,"class","columns"),v(e,"id","play-page")},m(g,p){V(g,e,p),b(e,t),b(t,r),L(a,r,null),b(t,n),b(t,s),L(l,s,null),b(s,f),b(s,c),b(s,u),L(h,s,null),b(s,w),b(s,_);for(let E=0;E<$.length;E+=1)$[E]&&$[E].m(_,null);T=!0},p(g,[p]){const E={};p&128&&(E.$$scope={dirty:p,ctx:g}),l.$set(E);const F={};p&2&&(F.templateCards=g[1]),h.$set(F),p&1&&(P=g[0],$e(),$=De($,p,W,1,g,P,m,_,Re,de,null,me),be())},i(g){if(!T){S(a.$$.fragment,g),S(l.$$.fragment,g),S(h.$$.fragment,g);for(let p=0;p<P.length;p+=1)S($[p]);T=!0}},o(g){C(a.$$.fragment,g),C(l.$$.fragment,g),C(h.$$.fragment,g);for(let p=0;p<$.length;p+=1)C($[p]);T=!1},d(g){g&&d(e),N(a),N(l),N(h);for(let p=0;p<$.length;p+=1)$[p].d()}}}function nt(o,e,t){let r,a;Se(o,Ae,l=>t(3,a=l));let n=[];function s(l){t(0,n=[l,...n].slice(0,2))}return o.$$.update=()=>{o.$$.dirty&8&&t(1,r=[...Pe,...a])},[n,r,s,a]}class ft extends Y{constructor(e){super(),X(this,e,nt,lt,z,{})}}export{ft as component};
