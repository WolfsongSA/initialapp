var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){t.value=null==e?"":e}function h(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function g(t,e,n){t.classList[n?"add":"remove"](e)}let $;function y(t){$=t}const b=[],v=[],x=[],_=[],k=Promise.resolve();let C=!1;function I(t){x.push(t)}const S=new Set;let E=0;function w(){const t=$;do{for(;E<b.length;){const t=b[E];E++,y(t),A(t.$$)}for(y(null),b.length=0,E=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(b.length);for(;_.length;)_.pop()();C=!1,S.clear(),y(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const q=new Set;function N(t,e){t&&t.i&&(q.delete(t),t.i(e))}function O(t,n,c,l){const{fragment:u,after_update:i}=t.$$;u&&u.m(n,c),l||I((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(I)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(b.push(t),C||(C=!0,k.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,c,l,u,s,a,f=[-1]){const d=$;y(e);const p=e.$$={fragment:null,ctx:[],props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&L(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&N(e.$$.fragment),O(e,r.target,r.anchor,r.customElement),w()}y(d)}class M{$destroy(){P(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(e){let n,r,c,h,g,$,y,b;return{c(){n=s("form"),r=s("label"),c=a("Add an Item\n        "),h=s("input"),g=f(),$=s("button"),$.textContent="Click to Add",p(h,"placeholder","Please enter an item.")},m(t,o){var i;u(t,n,o),l(n,r),l(r,c),l(r,h),m(h,e[0]),l(n,g),l(n,$),y||(b=[d(h,"input",e[3]),d(n,"submit",(i=e[1],function(t){return t.preventDefault(),i.call(this,t)}))],y=!0)},p(t,[e]){1&e&&h.value!==t[0]&&m(h,t[0])},i:t,o:t,d(t){t&&i(n),y=!1,o(b)}}}function W(t,e,n){let{addItem:o}=e,r="";return t.$$set=t=>{"addItem"in t&&n(2,o=t.addItem)},[r,function(){o(r),n(0,r="")},o,function(){r=this.value,n(0,r)}]}class J extends M{constructor(t){super(),j(this,t,W,T,c,{addItem:2})}}function B(t,e,n){const o=t.slice();return o[5]=e[n],o[6]=e,o[7]=n,o}function D(e){return{c:t,m:t,d:t}}function V(t){let e,n,r,c,m,$,y,b,v,x=t[5].title+"",_=t[5].completed&&D();function k(){return t[3](t[5],t[6],t[7])}function C(){return t[4](t[7])}return{c(){e=s("li"),n=s("span"),r=a(x),c=f(),_&&_.c(),m=f(),$=s("button"),$.textContent="X",y=f(),h($,"float","right"),p($,"class","svelte-n1gq42"),h(e,"list-style-type","none"),p(e,"class","item svelte-n1gq42"),g(e,"completed",t[5].completed)},m(t,o){u(t,e,o),l(e,n),l(n,r),l(n,c),_&&_.m(n,null),l(e,m),l(e,$),l(e,y),b||(v=[d(n,"click",k),d($,"click",C)],b=!0)},p(o,c){t=o,1&c&&x!==(x=t[5].title+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,x),t[5].completed?_||(_=D(),_.c(),_.m(n,null)):_&&(_.d(1),_=null),1&c&&g(e,"completed",t[5].completed)},d(t){t&&i(e),_&&_.d(),b=!1,o(v)}}}function X(t){let e,n,o,r,c,a,d,m,h,g,$,y,b;m=new J({props:{addItem:t[1]}});let v=t[0],x=[];for(let e=0;e<v.length;e+=1)x[e]=V(B(t,v,e));return{c(){var t;e=s("main"),n=s("h1"),n.textContent="WolfSong",o=f(),r=s("p"),r.textContent="To mark the item as done, simply click on it.",c=f(),a=s("hr"),d=f(),(t=m.$$.fragment)&&t.c(),h=f(),g=s("ul");for(let t=0;t<x.length;t+=1)x[t].c();$=f(),y=s("p"),y.textContent="Copyright © 2022. WolfSong (Pty) Ltd. Version 1.0. Web App",p(n,"class","svelte-n1gq42"),p(a,"color","#a89b96"),p(y,"class","copyright svelte-n1gq42"),p(e,"class","svelte-n1gq42")},m(t,i){u(t,e,i),l(e,n),l(e,o),l(e,r),l(e,c),l(e,a),l(e,d),O(m,e,null),l(e,h),l(e,g);for(let t=0;t<x.length;t+=1)x[t].m(g,null);l(e,$),l(e,y),b=!0},p(t,[e]){if(5&e){let n;for(v=t[0],n=0;n<v.length;n+=1){const o=B(t,v,n);x[n]?x[n].p(o,e):(x[n]=V(o),x[n].c(),x[n].m(g,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=v.length}},i(t){b||(N(m.$$.fragment,t),b=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}(m.$$.fragment,t),b=!1},d(t){t&&i(e),P(m),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(x,t)}}}function z(t,e,n){let o=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];function r(t){o.splice(t,1),n(0,o)}return t.$$.update=()=>{1&t.$$.dirty&&localStorage.setItem("items",JSON.stringify(o))},[o,function(t){o.push({id:Math.floor(1e4*Math.random())+1,title:t,completed:!1}),n(0,o)},r,(t,e,r)=>n(0,e[r].completed=!t.completed,o),t=>r(t)]}return new class extends M{constructor(t){super(),j(this,t,z,X,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
