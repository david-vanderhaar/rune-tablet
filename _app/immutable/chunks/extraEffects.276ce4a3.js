import{S as L,i as M,s as O,k as h,a as H,q as b,l as g,m as p,c as N,r as k,h as u,n as S,p as A,R as D,b as T,D as l,I as V}from"./index.bb4c9b91.js";let _=Array.from(Array(6),(e,t)=>t+1);const F={1:"⚀",2:"⚁",3:"⚂",4:"⚃",5:"⚄",6:"⚅"};function z(e){return F[e]||e}function G(){return _}function J(e){_.push(e)}function K(e){_=e}function Q(e){_=[...new Set([..._,...e])]}const se={get:G,add:J,set:K,addUnique:Q,getNumberAsDie:z};function W(e){let t,a=e[1].map(e[5]).join("")+"",i;return{c(){t=h("span"),i=b(a),this.h()},l(n){t=g(n,"SPAN",{style:!0});var r=p(t);i=k(r,a),r.forEach(u),this.h()},h(){A(t,"font-size","48px"),A(t,"line-height","1")},m(n,r){T(n,t,r),l(t,i)},p:V,d(n){n&&u(t)}}}function X(e){let t,a,i,n,r,v,y,f,o,j=e[3].join(", ")+"",I,d=e[1].length>0&&W(e);return{c(){t=h("div"),a=h("div"),d&&d.c(),i=H(),n=h("span"),r=h("div"),v=b(e[2]),y=H(),f=h("div"),o=h("em"),I=b(j),this.h()},l(c){t=g(c,"DIV",{class:!0});var m=p(t);a=g(m,"DIV",{class:!0});var E=p(a);d&&d.l(E),i=N(E),n=g(E,"SPAN",{class:!0,style:!0});var x=p(n);r=g(x,"DIV",{});var R=p(r);v=k(R,e[2]),R.forEach(u),y=N(x),f=g(x,"DIV",{});var q=p(f);o=g(q,"EM",{});var C=p(o);I=k(C,j),C.forEach(u),q.forEach(u),x.forEach(u),E.forEach(u),m.forEach(u),this.h()},h(){S(n,"class","is-flex-grow-1"),A(n,"text-align","center"),D(n,"ml-4",!e[0]),S(a,"class","is-flex is-align-items-center is-justify-content-space-between"),D(a,"is-flex-direction-column",e[0]),S(t,"class","mb-4")},m(c,m){T(c,t,m),l(t,a),d&&d.m(a,null),l(a,i),l(a,n),l(n,r),l(r,v),l(n,y),l(n,f),l(f,o),l(o,I)},p(c,[m]){c[1].length>0&&d.p(c,m),m&1&&D(n,"ml-4",!c[0]),m&1&&D(a,"is-flex-direction-column",c[0])},i:V,o:V,d(c){c&&u(t),d&&d.d()}}}function Y(e,t,a){let{action:i=null}=t,{stacked:n=!1}=t;const{triggers:r,actionEffect:v,extraEffects:y}=i,f=o=>z(o);return e.$$set=o=>{"action"in o&&a(4,i=o.action),"stacked"in o&&a(0,n=o.stacked)},[n,r,v,y,i,f]}class re extends L{constructor(t){super(),M(this,t,Y,X,O,{action:4,stacked:0})}}let U;const Z=new Uint8Array(16);function $(){if(!U&&(U=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!U))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return U(Z)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function ee(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const te=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),P={randomUUID:te};function oe(e,t,a){if(P.randomUUID&&!t&&!e)return P.randomUUID();e=e||{};const i=e.random||(e.rng||$)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){a=a||0;for(let n=0;n<16;++n)t[a+n]=i[n];return t}return ee(i)}const w={Cleave:"Deal 1 Harm to all adjacent enemies.",Unblockable:"Ignore all enemy Block",Stun:"Target loses their next turn.",Poison:"Target takes 1 Harm at the start of their turn."};function ne(){return w}function B(e){w[e]=null}function ae(e){e.forEach(t=>{w[t]||B(t)})}const ce={getExtraEffects:ne,addExtraEffect:B,addUniqueExtraEffects:ae};export{re as A,ce as e,se as t,oe as v};