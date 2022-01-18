"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(d,".").concat(f)]||p[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},258:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(5773),o=t(808),a=(t(7378),t(5318)),i=["components"],c={},d="Entities",l={unversionedId:"entities",id:"entities",title:"Entities",description:"`randPost`",source:"@site/docs/entities.md",sourceDirName:".",slug:"/entities",permalink:"/falso/docs/entities",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/entities.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"Date",permalink:"/falso/docs/date"},next:{title:"Finance",permalink:"/falso/docs/finance"}},u=[{value:"<code>randPost</code>",id:"randpost",children:[],level:3},{value:"<code>randProduct</code>",id:"randproduct",children:[],level:3},{value:"<code>randTodo</code>",id:"randtodo",children:[],level:3},{value:"<code>randUser</code>",id:"randuser",children:[],level:3}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entities"},"Entities"),(0,a.kt)("h3",{id:"randpost"},(0,a.kt)("inlineCode",{parentName:"h3"},"randPost")),(0,a.kt)("p",null,"Generate a random post."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPost } from '@ngneat/falso';\n\nrandPost()\nrandPost({ length: 10 })\n")),(0,a.kt)("h3",{id:"randproduct"},(0,a.kt)("inlineCode",{parentName:"h3"},"randProduct")),(0,a.kt)("p",null,"Generate a random product."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProduct } from '@ngneat/falso';\n\nrandProduct()\nrandProduct({ length: 10 })\n")),(0,a.kt)("h3",{id:"randtodo"},(0,a.kt)("inlineCode",{parentName:"h3"},"randTodo")),(0,a.kt)("p",null,"Generate a random todo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randTodo } from '@ngneat/falso';\n\nrandTodo()\nrandTodo({ length: 10 })\n")),(0,a.kt)("h3",{id:"randuser"},(0,a.kt)("inlineCode",{parentName:"h3"},"randUser")),(0,a.kt)("p",null,"Generate a random user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUser } from '@ngneat/falso';\n\nrandUser()\nrandUser({ length: 10 })\n")))}p.isMDXComponent=!0}}]);