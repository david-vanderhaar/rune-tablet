import{S as J,i as z,s as L,k as p,a as P,q as I,l as v,m as y,c as C,r as w,h as m,n as U,p as k,R as b,b as O,D as l,I as A}from"./index.bb4c9b91.js";import{w as M}from"./index.affbd470.js";let _=Array.from(Array(6),(t,e)=>e+1);const W={1:"⚀",2:"⚁",3:"⚂",4:"⚃",5:"⚄",6:"⚅"};function T(t){return W[t]||t}function F(){return _}function G(t){_.push(t)}function K(t){_=t}function Q(t){_=[...new Set([..._,...t])]}const ct={get:F,add:G,set:K,addUnique:Q,getNumberAsDie:T};function X(t){let e,a=t[1].map(t[5]).join("")+"",s;return{c(){e=p("span"),s=I(a),this.h()},l(n){e=v(n,"SPAN",{style:!0});var r=y(e);s=w(r,a),r.forEach(m),this.h()},h(){k(e,"font-size","48px"),k(e,"line-height","1")},m(n,r){O(n,e,r),l(e,s)},p:A,d(n){n&&m(e)}}}function Y(t){let e,a,s,n,r,d,h,g,o,j=t[3].join(", ")+"",D,u=t[1].length>0&&X(t);return{c(){e=p("div"),a=p("div"),u&&u.c(),s=P(),n=p("span"),r=p("div"),d=I(t[2]),h=P(),g=p("div"),o=p("em"),D=I(j),this.h()},l(c){e=v(c,"DIV",{class:!0});var f=y(e);a=v(f,"DIV",{class:!0});var E=y(a);u&&u.l(E),s=C(E),n=v(E,"SPAN",{class:!0,style:!0});var S=y(n);r=v(S,"DIV",{});var N=y(r);d=w(N,t[2]),N.forEach(m),h=C(S),g=v(S,"DIV",{});var R=y(g);o=v(R,"EM",{});var q=y(o);D=w(q,j),q.forEach(m),R.forEach(m),S.forEach(m),E.forEach(m),f.forEach(m),this.h()},h(){U(n,"class","is-flex-grow-1"),k(n,"text-align","center"),b(n,"ml-4",!t[0]),U(a,"class","is-flex is-align-items-center is-justify-content-space-between"),b(a,"is-flex-direction-column",t[0]),U(e,"class","mb-4")},m(c,f){O(c,e,f),l(e,a),u&&u.m(a,null),l(a,s),l(a,n),l(n,r),l(r,d),l(n,h),l(n,g),l(g,o),l(o,D)},p(c,[f]){c[1].length>0&&u.p(c,f),f&1&&b(n,"ml-4",!c[0]),f&1&&b(a,"is-flex-direction-column",c[0])},i:A,o:A,d(c){c&&m(e),u&&u.d()}}}function Z(t,e,a){let{action:s=null}=e,{stacked:n=!1}=e;const{triggers:r,actionEffect:d,extraEffects:h}=s,g=o=>T(o);return t.$$set=o=>{"action"in o&&a(4,s=o.action),"stacked"in o&&a(0,n=o.stacked)},[n,r,d,h,s,g]}class lt extends J{constructor(e){super(),z(this,e,Z,Y,L,{action:4,stacked:0})}}let x;const $=new Uint8Array(16);function tt(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x($)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function et(t,e=0){return(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase()}const nt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),H={randomUUID:nt};function dt(t,e,a){if(H.randomUUID&&!e&&!t)return H.randomUUID();t=t||{};const s=t.random||(t.rng||tt)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){a=a||0;for(let n=0;n<16;++n)e[a+n]=s[n];return e}return et(s)}const V={Cleave:"Deal 1 Harm to all adjacent enemies.",Unblockable:"Ignore all enemy Block",Stun:"Target loses their next turn.",Poison:"Target takes 1 Harm at the start of their turn."};function at(){return V}function B(t){V[t]=null}function st(t){t.forEach(e=>{V[e]||B(e)})}const ut={getExtraEffects:at,addExtraEffect:B,addUniqueExtraEffects:st},mt=(t,e)=>it(t,e),it=(t,e)=>{const a=localStorage.getItem(t),{subscribe:s,set:n,update:r}=M(JSON.parse(a)||e);return s(d=>localStorage.setItem(t,JSON.stringify(d))),{subscribe:s,add:d=>r(h=>[...h,d])}};export{lt as A,mt as c,ut as e,ct as t,dt as v};
