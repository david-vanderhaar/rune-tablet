import{S as Et,i as mt,s as pt,k as i,q,a as V,l as r,m as u,r as z,h as c,c as A,n as h,p as ye,b as Se,D as e,u as me,v as bt,M as Tt,N as Dt,f as It,g as be,d as Te,O as kt,e as Fe,y as we,z as Pe,A as Le,B as Re,P as fe,E as Ae,K as Vt,L as at,Q as At,w as wt}from"../chunks/index.bb4c9b91.js";import{T as Pt,a as Lt,A as Rt,C as St,h as Nt}from"../chunks/CardTemplateSelector.9aa196cd.js";import{f as st}from"../chunks/index.9d76f19c.js";import{A as Bt,e as jt}from"../chunks/extraEffects.276ce4a3.js";import{b as yt}from"../chunks/beastiary.4235d3ad.js";function nt(l,a,t){const s=l.slice();return s[11]=a[t],s}function it(l,a,t){const s=l.slice();return s[14]=a[t],s}function rt(l){let a,t,s=l[4].join(", ")+"",d;return{c(){a=i("p"),t=q("Range: "),d=q(s)},l(n){a=r(n,"P",{});var v=u(a);t=z(v,"Range: "),d=z(v,s),v.forEach(c)},m(n,v){Se(n,a,v),e(a,t),e(a,d)},p(n,v){v&16&&s!==(s=n[4].join(", ")+"")&&me(d,s)},d(n){n&&c(a)}}}function ot(l,a){let t,s,d;return s=new Bt({props:{action:a[14],stacked:!0}}),{key:l,first:null,c(){t=Fe(),we(s.$$.fragment),this.h()},l(n){t=Fe(),Pe(s.$$.fragment,n),this.h()},h(){this.first=t},m(n,v){Se(n,t,v),Le(s,n,v),d=!0},p(n,v){a=n;const E={};v&128&&(E.action=a[14]),s.$set(E)},i(n){d||(be(s.$$.fragment,n),d=!0)},o(n){Te(s.$$.fragment,n),d=!1},d(n){n&&c(t),Re(s,n)}}}function ct(l){let a,t,s=l[11]+"",d,n,v=l[9][l[11]]+"",E;return{c(){a=i("p"),t=i("em"),d=q(s),n=q(": "),E=q(v)},l(T){a=r(T,"P",{});var I=u(a);t=r(I,"EM",{});var P=u(t);d=z(P,s),P.forEach(c),n=z(I,": "),E=z(I,v),I.forEach(c)},m(T,I){Se(T,a,I),e(a,t),e(t,d),e(a,n),e(a,E)},p(T,I){I&256&&s!==(s=T[11]+"")&&me(d,s),I&256&&v!==(v=T[9][T[11]]+"")&&me(E,v)},d(T){T&&c(a)}}}function ft(l){let a,t=l[9][l[11]]&&ct(l);return{c(){t&&t.c(),a=Fe()},l(s){t&&t.l(s),a=Fe()},m(s,d){t&&t.m(s,d),Se(s,a,d)},p(s,d){s[9][s[11]]?t?t.p(s,d):(t=ct(s),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&c(a)}}}function Ut(l){let a,t,s,d,n,v,E,T,I=ut(l[1],l[2])+"",P,S,U,w=(l[3]&&l[3].join(", "))+"",p,te,le,Z,M,O,j,D=[],ve=new Map,ue,y,F,he,N,x,X,f,L,_e,pe,de,G,ae,Q,B=l[4]&&l[4].length>0&&rt(l),C=l[7];const $=o=>o[14];for(let o=0;o<C.length;o+=1){let m=it(l,C,o),g=$(m);ve.set(g,D[o]=ot(g,m))}let ne=l[8],k=[];for(let o=0;o<ne.length;o+=1)k[o]=ft(nt(l,ne,o));return{c(){a=i("div"),t=i("div"),s=i("div"),d=i("p"),n=q(l[0]),v=V(),E=i("div"),T=i("p"),P=q(I),S=V(),U=i("p"),p=q(w),te=V(),B&&B.c(),le=V(),Z=i("hr"),M=V(),O=i("div"),j=i("div");for(let o=0;o<D.length;o+=1)D[o].c();ue=V(),y=i("div"),F=i("hr"),he=V(),N=i("div"),x=i("div");for(let o=0;o<k.length;o+=1)k[o].c();X=V(),f=i("div"),L=i("p"),_e=q(l[6]),pe=V(),de=i("div"),G=i("p"),ae=q(l[5]),this.h()},l(o){a=r(o,"DIV",{class:!0});var m=u(a);t=r(m,"DIV",{class:!0,style:!0});var g=u(t);s=r(g,"DIV",{class:!0});var K=u(s);d=r(K,"P",{class:!0});var ee=u(d);n=z(ee,l[0]),ee.forEach(c),v=A(K),E=r(K,"DIV",{class:!0});var ie=u(E);T=r(ie,"P",{});var J=u(T);P=z(J,I),J.forEach(c),S=A(ie),U=r(ie,"P",{});var W=u(U);p=z(W,w),W.forEach(c),te=A(ie),B&&B.l(ie),ie.forEach(c),K.forEach(c),le=A(g),Z=r(g,"HR",{}),M=A(g),O=r(g,"DIV",{class:!0});var Y=u(O);j=r(Y,"DIV",{class:!0});var De=u(j);for(let H=0;H<D.length;H+=1)D[H].l(De);De.forEach(c),ue=A(Y),y=r(Y,"DIV",{class:!0,style:!0});var ge=u(y);F=r(ge,"HR",{}),he=A(ge),N=r(ge,"DIV",{class:!0});var re=u(N);x=r(re,"DIV",{});var se=u(x);for(let H=0;H<k.length;H+=1)k[H].l(se);se.forEach(c),X=A(re),f=r(re,"DIV",{});var oe=u(f);L=r(oe,"P",{class:!0});var Ie=u(L);_e=z(Ie,l[6]),Ie.forEach(c),oe.forEach(c),pe=A(re),de=r(re,"DIV",{});var ce=u(de);G=r(ce,"P",{class:!0});var ke=u(G);ae=z(ke,l[5]),ke.forEach(c),ce.forEach(c),re.forEach(c),ge.forEach(c),Y.forEach(c),g.forEach(c),m.forEach(c),this.h()},h(){h(d,"class","title"),h(E,"class","is-size-6 has-text-left"),h(s,"class","is-flex is-justify-content-space-between"),h(j,"class","is-flex is-justify-content-space-around"),h(L,"class","has-text-centered"),h(G,"class","has-text-grey is-italic has-text-centered"),h(N,"class","is-flex is-justify-content-space-around"),h(y,"class","bottom-content svelte-1d4zbmt"),ye(y,"background-color","white"),h(O,"class","content"),h(t,"class","card-content pb-0"),ye(t,"background-color","white"),h(a,"class","card display-card svelte-1d4zbmt")},m(o,m){Se(o,a,m),e(a,t),e(t,s),e(s,d),e(d,n),e(s,v),e(s,E),e(E,T),e(T,P),e(E,S),e(E,U),e(U,p),e(E,te),B&&B.m(E,null),e(t,le),e(t,Z),e(t,M),e(t,O),e(O,j);for(let g=0;g<D.length;g+=1)D[g]&&D[g].m(j,null);e(O,ue),e(O,y),e(y,F),e(y,he),e(y,N),e(N,x);for(let g=0;g<k.length;g+=1)k[g]&&k[g].m(x,null);e(N,X),e(N,f),e(f,L),e(L,_e),e(N,pe),e(N,de),e(de,G),e(G,ae),Q=!0},p(o,[m]){if((!Q||m&1)&&me(n,o[0]),(!Q||m&6)&&I!==(I=ut(o[1],o[2])+"")&&me(P,I),(!Q||m&8)&&w!==(w=(o[3]&&o[3].join(", "))+"")&&me(p,w),o[4]&&o[4].length>0?B?B.p(o,m):(B=rt(o),B.c(),B.m(E,null)):B&&(B.d(1),B=null),m&128&&(C=o[7],bt(),D=Tt(D,m,$,1,o,C,ve,j,Dt,ot,null,it),It()),m&768){ne=o[8];let g;for(g=0;g<ne.length;g+=1){const K=nt(o,ne,g);k[g]?k[g].p(K,m):(k[g]=ft(K),k[g].c(),k[g].m(x,null))}for(;g<k.length;g+=1)k[g].d(1);k.length=ne.length}(!Q||m&64)&&me(_e,o[6]),(!Q||m&32)&&me(ae,o[5])},i(o){if(!Q){for(let m=0;m<C.length;m+=1)be(D[m]);Q=!0}},o(o){for(let m=0;m<D.length;m+=1)Te(D[m]);Q=!1},d(o){o&&c(a),B&&B.d();for(let m=0;m<D.length;m+=1)D[m].d();kt(k,o)}}}function ut(l,a){const t=[];return l&&l.length>0&&t.push(`Health: ${l}`),a&&a.length>0&&t.push(`Stamina: ${a}`),t.join(", ")}function Ht(l,a,t){let{title:s=""}=a,{health:d=""}=a,{stamina:n=""}=a,{itemTags:v=[]}=a,{range:E=[]}=a,{flavorText:T=""}=a,{extraText:I=""}=a,{actions:P=[]}=a;const S=jt.getExtraEffects();let U=[];function w(){let p=P.reduce((te,le)=>[...te,...le.extraEffects],[]);t(8,U=[...new Set(p)])}return l.$$set=p=>{"title"in p&&t(0,s=p.title),"health"in p&&t(1,d=p.health),"stamina"in p&&t(2,n=p.stamina),"itemTags"in p&&t(3,v=p.itemTags),"range"in p&&t(4,E=p.range),"flavorText"in p&&t(5,T=p.flavorText),"extraText"in p&&t(6,I=p.extraText),"actions"in p&&t(7,P=p.actions)},l.$$.update=()=>{l.$$.dirty&128&&w()},[s,d,n,v,E,T,I,P,U,S]}class qt extends Et{constructor(a){super(),mt(this,a,Ht,Ut,pt,{title:0,health:1,stamina:2,itemTags:3,range:4,flavorText:5,extraText:6,actions:7})}}function zt(l){let a,t,s,d,n,v,E,T,I,P,S,U,w,p,te,le,Z,M,O,j,D,ve,ue,y,F,he,N,x,X,f,L,_e,pe,de,G,ae,Q,B,C,$,ne,k,o,m,g,K,ee,ie,J,W,Y,De,ge,re,se,oe,Ie,ce,ke,H,Ne,Ge,Xe;return N=new Pt({props:{placeholder:"Undead",tags:l[4],onTagsChange:l[13]}}),X=new Lt({props:{label:"Range",availableTags:Object.values(l[14]),selectedTags:l[5],onTagsChange:l[19]}}),L=new Rt({props:{actions:l[0],onAddAction:l[10],onRemoveAction:l[12],onEditAction:l[11]}}),Y=new qt({props:{title:l[1],itemTags:l[4],range:l[5],flavorText:l[6],extraText:l[7],actions:l[0],health:l[2],stamina:l[3]}}),oe=new St({props:{onSelect:l[9],templateCards:yt}}),{c(){a=i("section"),t=i("div"),s=i("div"),d=i("div"),n=i("div"),v=i("div"),E=i("label"),T=q("Name"),I=V(),P=i("div"),S=i("input"),U=V(),w=i("div"),p=i("label"),te=q("Health"),le=V(),Z=i("div"),M=i("input"),O=V(),j=i("div"),D=i("label"),ve=q("Stamina"),ue=V(),y=i("div"),F=i("input"),he=V(),we(N.$$.fragment),x=V(),we(X.$$.fragment),f=V(),we(L.$$.fragment),_e=V(),pe=i("br"),de=V(),G=i("div"),ae=i("label"),Q=q("Extra Text"),B=V(),C=i("div"),$=i("textarea"),ne=V(),k=i("div"),o=i("label"),m=q("Flavor Text"),g=V(),K=i("div"),ee=i("textarea"),ie=V(),J=i("div"),W=i("div"),we(Y.$$.fragment),De=V(),ge=i("br"),re=V(),se=i("div"),we(oe.$$.fragment),Ie=V(),ce=i("button"),ke=q("Export as PNG"),this.h()},l(_){a=r(_,"SECTION",{});var R=u(a);t=r(R,"DIV",{class:!0});var Be=u(t);s=r(Be,"DIV",{class:!0});var Ee=u(s);d=r(Ee,"DIV",{class:!0});var je=u(d);n=r(je,"DIV",{});var b=u(n);v=r(b,"DIV",{class:!0});var Ue=u(v);E=r(Ue,"LABEL",{class:!0});var Ke=u(E);T=z(Ke,"Name"),Ke.forEach(c),I=A(Ue),P=r(Ue,"DIV",{class:!0});var Qe=u(P);S=r(Qe,"INPUT",{class:!0,type:!0,placeholder:!0}),Qe.forEach(c),Ue.forEach(c),U=A(b),w=r(b,"DIV",{class:!0});var He=u(w);p=r(He,"LABEL",{class:!0});var Je=u(p);te=z(Je,"Health"),Je.forEach(c),le=A(He),Z=r(He,"DIV",{class:!0});var We=u(Z);M=r(We,"INPUT",{class:!0,placeholder:!0}),We.forEach(c),He.forEach(c),O=A(b),j=r(b,"DIV",{class:!0});var qe=u(j);D=r(qe,"LABEL",{class:!0});var Ye=u(D);ve=z(Ye,"Stamina"),Ye.forEach(c),ue=A(qe),y=r(qe,"DIV",{class:!0});var Ze=u(y);F=r(Ze,"INPUT",{class:!0,placeholder:!0}),Ze.forEach(c),qe.forEach(c),he=A(b),Pe(N.$$.fragment,b),x=A(b),Pe(X.$$.fragment,b),f=A(b),Pe(L.$$.fragment,b),_e=A(b),pe=r(b,"BR",{}),de=A(b),G=r(b,"DIV",{class:!0});var ze=u(G);ae=r(ze,"LABEL",{class:!0});var xe=u(ae);Q=z(xe,"Extra Text"),xe.forEach(c),B=A(ze),C=r(ze,"DIV",{class:!0});var Ce=u(C);$=r(Ce,"TEXTAREA",{class:!0,placeholder:!0}),u($).forEach(c),Ce.forEach(c),ze.forEach(c),ne=A(b),k=r(b,"DIV",{class:!0});var Me=u(k);o=r(Me,"LABEL",{class:!0});var $e=u(o);m=z($e,"Flavor Text"),$e.forEach(c),g=A(Me),K=r(Me,"DIV",{class:!0});var et=u(K);ee=r(et,"TEXTAREA",{class:!0,placeholder:!0}),u(ee).forEach(c),et.forEach(c),Me.forEach(c),b.forEach(c),je.forEach(c),ie=A(Ee),J=r(Ee,"DIV",{class:!0});var Ve=u(J);W=r(Ve,"DIV",{style:!0,id:!0});var tt=u(W);Pe(Y.$$.fragment,tt),tt.forEach(c),De=A(Ve),ge=r(Ve,"BR",{}),re=A(Ve),se=r(Ve,"DIV",{class:!0});var Oe=u(se);Pe(oe.$$.fragment,Oe),Ie=A(Oe),ce=r(Oe,"BUTTON",{class:!0});var lt=u(ce);ke=z(lt,"Export as PNG"),lt.forEach(c),Oe.forEach(c),Ve.forEach(c),Ee.forEach(c),Be.forEach(c),R.forEach(c),this.h()},h(){h(E,"class","label"),h(S,"class","input"),h(S,"type","text"),h(S,"placeholder","Name"),h(P,"class","control"),h(v,"class","field"),h(p,"class","label"),h(M,"class","input"),h(M,"placeholder","3"),h(Z,"class","control"),h(w,"class","field"),h(D,"class","label"),h(F,"class","input"),h(F,"placeholder","1"),h(y,"class","control"),h(j,"class","field"),h(ae,"class","label"),h($,"class","textarea"),h($,"placeholder","Enter any extra text"),h(C,"class","control"),h(G,"class","field"),h(o,"class","label"),h(ee,"class","textarea"),h(ee,"placeholder","Enter flavor text"),h(K,"class","control"),h(k,"class","field"),h(d,"class","column is-half"),ye(W,"width","600px"),ye(W,"height","400px"),ye(W,"max-height","100%"),h(W,"id","export-card"),h(ce,"class","button is-dark ml-2"),h(se,"class","field is-grouped"),h(J,"class","column"),h(s,"class","columns is-flex-wrap-wrap-reverse"),h(t,"class","container")},m(_,R){Se(_,a,R),e(a,t),e(t,s),e(s,d),e(d,n),e(n,v),e(v,E),e(E,T),e(v,I),e(v,P),e(P,S),fe(S,l[1]),e(n,U),e(n,w),e(w,p),e(p,te),e(w,le),e(w,Z),e(Z,M),fe(M,l[2]),e(n,O),e(n,j),e(j,D),e(D,ve),e(j,ue),e(j,y),e(y,F),fe(F,l[3]),e(n,he),Le(N,n,null),e(n,x),Le(X,n,null),e(n,f),Le(L,n,null),e(n,_e),e(n,pe),e(n,de),e(n,G),e(G,ae),e(ae,Q),e(G,B),e(G,C),e(C,$),fe($,l[7]),e(n,ne),e(n,k),e(k,o),e(o,m),e(k,g),e(k,K),e(K,ee),fe(ee,l[6]),e(s,ie),e(s,J),e(J,W),Le(Y,W,null),l[22](W),e(J,De),e(J,ge),e(J,re),e(J,se),Le(oe,se,null),e(se,Ie),e(se,ce),e(ce,ke),Ne=!0,Ge||(Xe=[Ae(S,"input",l[16]),Ae(M,"input",l[17]),Ae(F,"input",l[18]),Ae($,"input",l[20]),Ae(ee,"input",l[21]),Ae(ce,"click",l[15])],Ge=!0)},p(_,[R]){R&2&&S.value!==_[1]&&fe(S,_[1]),R&4&&M.value!==_[2]&&fe(M,_[2]),R&8&&F.value!==_[3]&&fe(F,_[3]);const Be={};R&16&&(Be.tags=_[4]),N.$set(Be);const Ee={};R&32&&(Ee.selectedTags=_[5]),R&32&&(Ee.onTagsChange=_[19]),X.$set(Ee);const je={};R&1&&(je.actions=_[0]),L.$set(je),R&128&&fe($,_[7]),R&64&&fe(ee,_[6]);const b={};R&2&&(b.title=_[1]),R&16&&(b.itemTags=_[4]),R&32&&(b.range=_[5]),R&64&&(b.flavorText=_[6]),R&128&&(b.extraText=_[7]),R&1&&(b.actions=_[0]),R&4&&(b.health=_[2]),R&8&&(b.stamina=_[3]),Y.$set(b)},i(_){Ne||(be(N.$$.fragment,_),be(X.$$.fragment,_),be(L.$$.fragment,_),be(Y.$$.fragment,_),be(oe.$$.fragment,_),Vt(()=>{Ne&&(H||(H=at(a,st,{},!0)),H.run(1))}),Ne=!0)},o(_){Te(N.$$.fragment,_),Te(X.$$.fragment,_),Te(L.$$.fragment,_),Te(Y.$$.fragment,_),Te(oe.$$.fragment,_),H||(H=at(a,st,{},!1)),H.run(0),Ne=!1},d(_){_&&c(a),Re(N),Re(X),Re(L),Re(Y),l[22](null),Re(oe),_&&H&&H.end(),Ge=!1,At(Xe)}}}const ht="",dt="",vt="",_t="",gt="";function Mt(l){const a=document.createElement("a");a.href=l,a.download="rune_card.png",a.click()}function Ot(l,a,t){const s=[],d=[],n=[];let v=ht,E=dt,T=vt,I=s,P=d,S=_t,U=gt,w=n;function p(f){t(1,v=(f==null?void 0:f.title)||ht),t(2,E=(f==null?void 0:f.health)||dt),t(3,T=(f==null?void 0:f.stamina)||vt),t(4,I=(f==null?void 0:f.itemTags)||s),t(5,P=(f==null?void 0:f.range)||d),t(6,S=(f==null?void 0:f.flavorText)||_t),t(7,U=(f==null?void 0:f.extraText)||gt),t(0,w=(f==null?void 0:f.actions)||n)}function te(f){t(0,w=[...w,f])}function le(f){t(0,w=w.map(L=>L.id===f.id?f:L))}function Z(f){t(0,w=w.filter(L=>L.id!==f.id))}function M(f){t(4,I=f)}const O={0:"Same",1:"Adjacent",2:"2",3:"3"};function j(){O[P]}let D;function ve(){Nt(D).then(f=>{const L=f.toDataURL("image/png");Mt(L)})}function ue(){v=this.value,t(1,v)}function y(){E=this.value,t(2,E)}function F(){T=this.value,t(3,T)}const he=f=>t(5,P=f);function N(){U=this.value,t(7,U)}function x(){S=this.value,t(6,S)}function X(f){wt[f?"unshift":"push"](()=>{D=f,t(8,D)})}return l.$$.update=()=>{l.$$.dirty&1&&j()},[w,v,E,T,I,P,S,U,D,p,te,le,Z,M,O,ve,ue,y,F,he,N,x,X]}class Jt extends Et{constructor(a){super(),mt(this,a,Ot,zt,pt,{})}}export{Jt as component};