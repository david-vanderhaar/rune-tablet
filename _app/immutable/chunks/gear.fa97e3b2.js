import{S as pe,i as ye,s as ke,k as E,q as S,a as P,l as T,m as k,r as H,h as d,c as I,n as w,p as L,b as N,I as n,u as R,v as xe,T as be,a7 as we,f as Se,g as Ee,d as Te,a8 as He,e as ee,y as Ae,z as De,A as Pe,B as Ie}from"./index.4a9c39e8.js";import{A as je,e as qe,c as Re}from"./PersistentStore.e28901fb.js";function ue(i,t,e){const a=i.slice();return a[11]=t[e],a}function he(i,t,e){const a=i.slice();return a[14]=t[e],a}function de(i){let t,e,a=i[4].join(", ")+"",o;return{c(){t=E("p"),e=S("Range: "),o=S(a)},l(r){t=T(r,"P",{});var c=k(t);e=H(c,"Range: "),o=H(c,a),c.forEach(d)},m(r,c){N(r,t,c),n(t,e),n(t,o)},p(r,c){c&16&&a!==(a=r[4].join(", ")+"")&&R(o,a)},d(r){r&&d(t)}}}function me(i,t){let e,a,o;return a=new je({props:{action:t[14]}}),{key:i,first:null,c(){e=ee(),Ae(a.$$.fragment),this.h()},l(r){e=ee(),De(a.$$.fragment,r),this.h()},h(){this.first=e},m(r,c){N(r,e,c),Pe(a,r,c),o=!0},p(r,c){t=r;const h={};c&128&&(h.action=t[14]),a.$set(h)},i(r){o||(Ee(a.$$.fragment,r),o=!0)},o(r){Te(a.$$.fragment,r),o=!1},d(r){r&&d(e),Ie(a,r)}}}function ge(i){let t,e,a=i[11]+"",o,r,c=i[9][i[11]]+"",h;return{c(){t=E("p"),e=E("em"),o=S(a),r=S(": "),h=S(c)},l(m){t=T(m,"P",{});var g=k(t);e=T(g,"EM",{});var x=k(e);o=H(x,a),x.forEach(d),r=H(g,": "),h=H(g,c),g.forEach(d)},m(m,g){N(m,t,g),n(t,e),n(e,o),n(t,r),n(t,h)},p(m,g){g&256&&a!==(a=m[11]+"")&&R(o,a),g&256&&c!==(c=m[9][m[11]]+"")&&R(h,c)},d(m){m&&d(t)}}}function _e(i){let t,e=i[9][i[11]]&&ge(i);return{c(){e&&e.c(),t=ee()},l(a){e&&e.l(a),t=ee()},m(a,o){e&&e.m(a,o),N(a,t,o)},p(a,o){a[9][a[11]]?e?e.p(a,o):(e=ge(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(a){e&&e.d(a),a&&d(t)}}}function Ve(i){let t,e,a,o,r,c,h,m,g=ve(i[1],i[2])+"",x,z,j,V=(i[3]&&i[3].join(", "))+"",u,G,U,O,te,A,p=[],ie=new Map,J,y,K,ae,Q,M,X,le,B,Z,D,v=i[4]&&i[4]&&i[4].length>0&&de(i),Y=i[7];const re=l=>l[14];for(let l=0;l<Y.length;l+=1){let s=he(i,Y,l),f=re(s);ie.set(f,p[l]=me(f,s))}let C=i[8],_=[];for(let l=0;l<C.length;l+=1)_[l]=_e(ue(i,C,l));return{c(){t=E("div"),e=E("div"),a=E("div"),o=E("p"),r=S(i[0]),c=P(),h=E("div"),m=E("p"),x=S(g),z=P(),j=E("p"),u=S(V),G=P(),v&&v.c(),U=P(),O=E("hr"),te=P(),A=E("div");for(let l=0;l<p.length;l+=1)p[l].c();J=P(),y=E("div"),K=E("hr"),ae=P();for(let l=0;l<_.length;l+=1)_[l].c();Q=P(),M=E("p"),X=S(i[6]),le=P(),B=E("p"),Z=S(i[5]),this.h()},l(l){t=T(l,"DIV",{style:!0});var s=k(t);e=T(s,"DIV",{class:!0});var f=k(e);a=T(f,"DIV",{class:!0,style:!0});var b=k(a);o=T(b,"P",{class:!0});var ne=k(o);r=H(ne,i[0]),ne.forEach(d),c=I(b),h=T(b,"DIV",{class:!0});var W=k(h);m=T(W,"P",{});var se=k(m);x=H(se,g),se.forEach(d),z=I(W),j=T(W,"P",{});var oe=k(j);u=H(oe,V),oe.forEach(d),G=I(W),v&&v.l(W),W.forEach(d),U=I(b),O=T(b,"HR",{class:!0}),te=I(b),A=T(b,"DIV",{class:!0});var $=k(A);for(let F=0;F<p.length;F+=1)p[F].l($);J=I($),y=T($,"DIV",{class:!0,style:!0});var q=k(y);K=T(q,"HR",{class:!0}),ae=I(q);for(let F=0;F<_.length;F+=1)_[F].l(q);Q=I(q),M=T(q,"P",{class:!0});var fe=k(M);X=H(fe,i[6]),fe.forEach(d),le=I(q),B=T(q,"P",{class:!0});var ce=k(B);Z=H(ce,i[5]),ce.forEach(d),q.forEach(d),$.forEach(d),b.forEach(d),f.forEach(d),s.forEach(d),this.h()},h(){w(o,"class","title"),w(h,"class","is-size-6 subtitle"),w(O,"class","my-1"),w(K,"class","my-1"),w(M,"class","has-text-centered"),w(B,"class","has-text-grey is-italic has-text-centered"),w(y,"class","bottom-content svelte-gmcenr"),L(y,"background-color","white"),w(A,"class","content"),w(a,"class","card-content has-text-centered pb-0 svelte-gmcenr"),L(a,"background-color","white"),w(e,"class","card equipment-card svelte-gmcenr"),L(t,"width","320px"),L(t,"height","480px"),L(t,"max-width","100%")},m(l,s){N(l,t,s),n(t,e),n(e,a),n(a,o),n(o,r),n(a,c),n(a,h),n(h,m),n(m,x),n(h,z),n(h,j),n(j,u),n(h,G),v&&v.m(h,null),n(a,U),n(a,O),n(a,te),n(a,A);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(A,null);n(A,J),n(A,y),n(y,K),n(y,ae);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(y,null);n(y,Q),n(y,M),n(M,X),n(y,le),n(y,B),n(B,Z),D=!0},p(l,[s]){if((!D||s&1)&&R(r,l[0]),(!D||s&6)&&g!==(g=ve(l[1],l[2])+"")&&R(x,g),(!D||s&8)&&V!==(V=(l[3]&&l[3].join(", "))+"")&&R(u,V),l[4]&&l[4]&&l[4].length>0?v?v.p(l,s):(v=de(l),v.c(),v.m(h,null)):v&&(v.d(1),v=null),s&128&&(Y=l[7],xe(),p=be(p,s,re,1,l,Y,ie,A,we,me,J,he),Se()),s&768){C=l[8];let f;for(f=0;f<C.length;f+=1){const b=ue(l,C,f);_[f]?_[f].p(b,s):(_[f]=_e(b),_[f].c(),_[f].m(y,Q))}for(;f<_.length;f+=1)_[f].d(1);_.length=C.length}(!D||s&64)&&R(X,l[6]),(!D||s&32)&&R(Z,l[5])},i(l){if(!D){for(let s=0;s<Y.length;s+=1)Ee(p[s]);D=!0}},o(l){for(let s=0;s<p.length;s+=1)Te(p[s]);D=!1},d(l){l&&d(t),v&&v.d();for(let s=0;s<p.length;s+=1)p[s].d();He(_,l)}}}function ve(i,t){const e=[];return i&&i.length>0&&e.push(`Health: ${i}`),t&&t.length>0&&e.push(`Stamina: ${t}`),e.join(", ")}function Fe(i,t,e){let{title:a=""}=t,{health:o=""}=t,{stamina:r=""}=t,{itemTags:c=[]}=t,{range:h=[]}=t,{flavorText:m=""}=t,{extraText:g=""}=t,{actions:x=[]}=t;const z=qe.getExtraEffects();let j=[];function V(){let u=x.reduce((G,U)=>[...G,...U.extraEffects],[]);e(8,j=[...new Set(u)])}return i.$$set=u=>{"title"in u&&e(0,a=u.title),"health"in u&&e(1,o=u.health),"stamina"in u&&e(2,r=u.stamina),"itemTags"in u&&e(3,c=u.itemTags),"range"in u&&e(4,h=u.range),"flavorText"in u&&e(5,m=u.flavorText),"extraText"in u&&e(6,g=u.extraText),"actions"in u&&e(7,x=u.actions)},i.$$.update=()=>{i.$$.dirty&128&&V()},[a,o,r,c,h,m,g,x,j,z]}class We extends pe{constructor(t){super(),ye(this,t,Fe,Ve,ke,{title:0,health:1,stamina:2,itemTags:3,range:4,flavorText:5,extraText:6,actions:7})}}const Me=[{uuid:"1",title:"Long Sword",itemTags:["Weapon","Sword"],range:["Same"],flavorText:"A balanced obsidian blade. Said to hold the power to cut Fate itself",extraText:"",actions:[{id:1,triggers:[2],actionEffect:"Harm 1",extraEffects:[]},{id:2,triggers:[3,4,5],actionEffect:"Move 1, Harm 2",extraEffects:[]},{id:3,triggers:[6],actionEffect:"Move 1, Harm 3",extraEffects:[]}]},{uuid:"2",title:"Boarded Shield",itemTags:["Weapon","Shield"],flavorText:"An instrument to ward off death, even if for a moment.",extraText:"",actions:[{id:1,triggers:[3,4],actionEffect:"Block 1",extraEffects:[]},{id:2,triggers:[5,6],actionEffect:"Move 1, Block 1",extraEffects:[]}]},{uuid:"3",title:"Erupting Flame",itemTags:["Weapon","Spell"],flavorText:"The fires that burned Osel Alora to the ground sit warmly in your palm.",extraText:"",actions:[{id:1,triggers:[4],actionEffect:"Deal 2 Harm to all same and adjacent.",extraEffects:[]},{id:2,triggers:[5],actionEffect:"Deal 2 Harm to all in your row or column",extraEffects:[]},{id:3,triggers:[6],actionEffect:"Deal 5 Harm to same or adjacent enemy. Take 2 Harm",extraEffects:[]}]},{uuid:"4",title:"Amulet of Dawn",itemTags:["Gear"],flavorText:"A fire that can warm even those whose fate has been taken from them.",extraText:"",actions:[{id:1,triggers:[],actionEffect:"Criteria: Pair of dice values.",extraEffects:[]},{id:2,triggers:[],actionEffect:"Effect: Heal 2 Harm at the end of this round.",extraEffects:[]}]},{uuid:"5",title:"Fate's Fury",itemTags:["Rune"],flavorText:"Their ruthlessness was passed down to you, a god's fury.",extraText:"",actions:[{id:1,triggers:[],actionEffect:"You may reroll any 1's in a fight. If you do, lose 2 Health.",extraEffects:[]}]},{uuid:"6",title:"Time Warp",itemTags:["Rune"],flavorText:"Time is forever, death comes only once.",extraText:"",actions:[{id:1,triggers:[],actionEffect:"You may reroll any one die in a fight.",extraEffects:[]}]}],ze=Re("gear",Me);export{We as E,ze as g};
