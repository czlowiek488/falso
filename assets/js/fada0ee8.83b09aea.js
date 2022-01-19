"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[625],{5318:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),c=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(r),m=t,h=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?a.createElement(h,l(l({ref:n},p),{},{components:r})):a.createElement(h,l({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=s;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:t,l[1]=d;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3092:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=r(5773),t=r(808),o=(r(7378),r(5318)),l=["components"],d={},i="Text",c={unversionedId:"text",id:"text",title:"Text",description:"`randAbbreviation`",source:"@site/docs/text.md",sourceDirName:".",slug:"/text",permalink:"/falso/docs/text",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/text.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"System",permalink:"/falso/docs/system"},next:{title:"User",permalink:"/falso/docs/user"}},p=[{value:"<code>randAbbreviation</code>",id:"randabbreviation",children:[],level:3},{value:"<code>randAlphaNumeric</code>",id:"randalphanumeric",children:[],level:3},{value:"<code>randAlpha</code>",id:"randalpha",children:[],level:3},{value:"<code>randCatchPhrase</code>",id:"randcatchphrase",children:[],level:3},{value:"<code>randLine</code>",id:"randline",children:[],level:3},{value:"<code>randLines</code>",id:"randlines",children:[],level:3},{value:"<code>randParagraph</code>",id:"randparagraph",children:[],level:3},{value:"<code>randPhrase</code>",id:"randphrase",children:[],level:3},{value:"<code>randPronoun</code>",id:"randpronoun",children:[],level:3},{value:"<code>randQuote</code>",id:"randquote",children:[],level:3},{value:"<code>randSentence</code>",id:"randsentence",children:[],level:3},{value:"<code>randText</code>",id:"randtext",children:[],level:3},{value:"<code>randVerb</code>",id:"randverb",children:[],level:3},{value:"<code>randWord</code>",id:"randword",children:[],level:3}],u={toc:p};function s(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text"},"Text"),(0,o.kt)("h3",{id:"randabbreviation"},(0,o.kt)("inlineCode",{parentName:"h3"},"randAbbreviation")),(0,o.kt)("p",null,"Generate a random abbreviation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAbbreviation } from '@ngneat/falso';\n\nrandAbbreviation()\nrandAbbreviation({ length: 10 })\n")),(0,o.kt)("h3",{id:"randalphanumeric"},(0,o.kt)("inlineCode",{parentName:"h3"},"randAlphaNumeric")),(0,o.kt)("p",null,"Get a random alpha or numeric."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAlphaNumeric } from '@ngneat/falso';\n\nrandAlphaNumeric()\nrandAlphaNumeric({ length: 3 })\n")),(0,o.kt)("h3",{id:"randalpha"},(0,o.kt)("inlineCode",{parentName:"h3"},"randAlpha")),(0,o.kt)("p",null,"Get a random alpha."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAlpha } from '@ngneat/falso';\n\nrandAlpha()\nrandAlpha({ length: 3 })\n")),(0,o.kt)("h3",{id:"randcatchphrase"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCatchPhrase")),(0,o.kt)("p",null,"Generate a random catch phrase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCatchPhrase } from '@ngneat/falso';\n\nrandCatchPhrase()\nrandCatchPhrase({ length: 10 })\n")),(0,o.kt)("h3",{id:"randline"},(0,o.kt)("inlineCode",{parentName:"h3"},"randLine")),(0,o.kt)("p",null,"Generate random lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLine } from '@ngneat/falso';\n\nrandLine()\nrandLine({ lineCount: 10 })\n")),(0,o.kt)("h3",{id:"randlines"},(0,o.kt)("inlineCode",{parentName:"h3"},"randLines")),(0,o.kt)("p",null,"Generate a random lines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLines } from '@ngneat/falso';\n\nrandLines()\nrandLines({ length: 10 })\n")),(0,o.kt)("h3",{id:"randparagraph"},(0,o.kt)("inlineCode",{parentName:"h3"},"randParagraph")),(0,o.kt)("p",null,"Generate a random paragraph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randParagraph } from '@ngneat/falso';\n\nrandJobTitle()\nrandJobTitle({ length: 10 })\n")),(0,o.kt)("h3",{id:"randphrase"},(0,o.kt)("inlineCode",{parentName:"h3"},"randPhrase")),(0,o.kt)("p",null,"Generate a random phrase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPhrase } from '@ngneat/falso';\n\nrandPhrase()\nrandPhrase({ length: 10 })\n")),(0,o.kt)("h3",{id:"randpronoun"},(0,o.kt)("inlineCode",{parentName:"h3"},"randPronoun")),(0,o.kt)("p",null,"Generate a random pronoun."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPronoun } from '@ngneat/falso';\n\nrandPronoun()\n")),(0,o.kt)("h3",{id:"randquote"},(0,o.kt)("inlineCode",{parentName:"h3"},"randQuote")),(0,o.kt)("p",null,"Generate a random quote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randQuote } from '@ngneat/falso';\n\nrandQuote()\nrandQuote({ length: 10 })\n")),(0,o.kt)("h3",{id:"randsentence"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSentence")),(0,o.kt)("p",null,"Generate a random sentence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSentence } from '@ngneat/falso';\n\nrandSentence()\nrandSentence({ length: 10 })\n")),(0,o.kt)("h3",{id:"randtext"},(0,o.kt)("inlineCode",{parentName:"h3"},"randText")),(0,o.kt)("p",null,"Generate a random text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randText } from '@ngneat/falso';\n\ntext()\ntext({ length: 10 })\ntext({ charCount: 10 })\n")),(0,o.kt)("h3",{id:"randverb"},(0,o.kt)("inlineCode",{parentName:"h3"},"randVerb")),(0,o.kt)("p",null,"Generate a random verb."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVerb } from '@ngneat/falso';\n\nrandVerb()\nrandVerb({ length: 10 })\n")),(0,o.kt)("h3",{id:"randword"},(0,o.kt)("inlineCode",{parentName:"h3"},"randWord")),(0,o.kt)("p",null,"Generate a random word."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randWord } from '@ngneat/falso';\n\nrandWord()\nrandWord({ capitalize: true })\nrandWord({ length: 10 })\n")))}s.isMDXComponent=!0}}]);