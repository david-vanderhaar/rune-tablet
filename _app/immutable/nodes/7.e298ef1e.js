import{S as $,i as k,s as E,k as c,y as b,l as m,m as f,z as v,h as d,n as y,b as D,I,A as S,N as q,g as A,Z as P,d as N,a4 as p,B as T}from"../chunks/index.4a9c39e8.js";import{a as u}from"../chunks/index.608cba37.js";import{t as C}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.8c7b9773.js";import{g as _}from"../chunks/html2canvas.esm.47ae3cbc.js";import{b as h}from"../chunks/paths.c4971532.js";import{E as w,g}from"../chunks/gear.47154ae2.js";import{C as z,D as B}from"../chunks/DeleteConfirmation.d0de6baa.js";function G(s){let e,o,r,a,t;return r=new z({props:{cardComponent:w,cardStore:g,onClickAddCard:s[0],onClickEditCard:s[1],onClickDeleteCard:s[2]}}),{c(){e=c("section"),o=c("div"),b(r.$$.fragment),this.h()},l(n){e=m(n,"SECTION",{});var i=f(e);o=m(i,"DIV",{class:!0});var l=f(o);v(r.$$.fragment,l),l.forEach(d),i.forEach(d),this.h()},h(){y(o,"class","container")},m(n,i){D(n,e,i),I(e,o),S(r,o,null),t=!0},p:q,i(n){t||(A(r.$$.fragment,n),P(()=>{t&&(a||(a=p(e,u,{},!0)),a.run(1))}),t=!0)},o(n){N(r.$$.fragment,n),a||(a=p(e,u,{},!1)),a.run(0),t=!1},d(n){n&&d(e),T(r),n&&a&&a.end()}}}function M(s){function e(){_(`${h}/equipment/add`)}function o(t){_(`${h}/equipment/edit/${t}`)}function r(t){g.delete(t),C.push("Card deleted")}function a(t){C.push({component:{src:B,props:{handleDelete:()=>r(t)},sendIdTo:"toastId"},dismissable:!1,initial:0,theme:{"--toastPadding":"0","--toastMsgPadding":"0"}})}return[e,o,a]}class J extends ${constructor(e){super(),k(this,e,M,G,E,{})}}export{J as component};