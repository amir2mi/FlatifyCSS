"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6424],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return n?i.createElement(u,s(s({ref:t},o),{},{components:n})):i.createElement(u,s({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2695:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7462),a=n(3366),r=n(7294),s=["isBad","isGood","children","disableFullscreen","limitWidth"];function l(e){var t=e.isBad,n=e.isGood,l=e.children,p=e.disableFullscreen,d=e.limitWidth,o=(0,a.Z)(e,s),c=(0,r.useState)(!1),m=c[0],h=c[1];return r.createElement("div",{className:"preview-box-wrapper",style:d?{width:d,display:"table",margin:"0 auto"}:{}},!p&&r.createElement("button",{"aria-label":m?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");m?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),h(!m)}},m?r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},r.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},r.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),t&&r.createElement("div",{className:"is-bad-example style-red"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},r.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),n&&r.createElement("div",{className:"is-good-example style-green"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},r.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),r.createElement("iframe",(0,i.Z)({width:"100%",className:"docus-preview-box"+(m?" is-fullscreen":""),srcDoc:l},o)))}},1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return c},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),s=n(2695),l=["components"],p={title:"Width & height setters",sidebar_position:6},d=void 0,o={unversionedId:"helpers/width-and-height-setters",id:"helpers/width-and-height-setters",isDocsHomePage:!1,title:"Width & height setters",description:"These setter classes help you set width and height for elements, they are defined in _config.scss file, so you can add more setter classes with custom values.",source:"@site/docs/helpers/width-and-height-setters.mdx",sourceDirName:"helpers",slug:"/helpers/width-and-height-setters",permalink:"/flatifycss/docs/helpers/width-and-height-setters",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/helpers/width-and-height-setters.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Width & height setters",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Size setters",permalink:"/flatifycss/docs/helpers/size-setters"},next:{title:"Roundness setters",permalink:"/flatifycss/docs/helpers/roundness-setters"}},c=[{value:"Width",id:"width",children:[],level:3}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These setter classes help you set width and height for elements, they are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"_config.scss")," file, so you can add more setter classes with custom values."),(0,r.kt)("h3",{id:"width"},"Width"),(0,r.kt)(s.Z,{height:"320px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Width setters</title> <style> .my-box{ height: 30px; padding: 5px 10px; margin: 20px 0; border-radius: 12px; } </style> </head> <body> <div class="my-box style-blue width-100p">100%</div> <div class="my-box style-green width-75p">75%</div> <div class="my-box style-purple width-50p">50%</div> <div class="my-box style-orange width-25p">25%</div> <div class="my-box style-red width-10p">10%</div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="my-box style-blue width-100p">100%</div>\n<div class="my-box style-green width-75p">75%</div>\n<div class="my-box style-purple width-50p">50%</div>\n<div class="my-box style-orange width-25p">25%</div>\n<div class="my-box style-red width-10p">10%</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-box {\n    height: 30px;\n    padding: 5px 10px;\n    margin: 20px 0;\n    border-radius: 12px;\n}\n")),(0,r.kt)(s.Z,{height:"420px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Height setters</title> <style> .my-box{ width: 30px; padding: 5px 10px; margin: 0 10px; border-radius: 12px; writing-mode: sideways-rl; } </style> </head> <body style="height: 100vh; display: flex"> <div class="my-box style-blue height-100p">100%</div> <div class="my-box style-green height-75p">75%</div> <div class="my-box style-purple height-50p">50%</div> <div class="my-box style-orange height-25p">25%</div> <div class="my-box style-red height-10p">10%</div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="my-box style-blue width-100p">100%</div>\n<div class="my-box style-green width-75p">75%</div>\n<div class="my-box style-purple width-50p">50%</div>\n<div class="my-box style-orange width-25p">25%</div>\n<div class="my-box style-red width-10p">10%</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-box {\n    width: 30px;\n    padding: 5px 10px;\n    margin: 0 10px;\n    border-radius: 12px;\n    writing-mode: sideways-rl;\n}\n")),(0,r.kt)("p",null,"Width predefined classes:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-0p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-10p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-15p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-25p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-30p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-50p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-60p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-75p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-90p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-95p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"width-100p")),(0,r.kt)("p",null,"Height predefined classes:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-0p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-10p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-15p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-25p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-30p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-50p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-60p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-75p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-90p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-95p"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"height-100p")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Custom helper classes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that these classes can be customized in ",(0,r.kt)("inlineCode",{parentName:"p"},"_config.scss")," file, there are two variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"$WIDTH_LIST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$HEIGHT_LIST"),", all classes are generated from this list.\nSo it is possible to create customized helper classes for width and height simply!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'{15,16,33,34} title="_config.scss"',"{15,16,33,34}":!0,title:'"_config.scss"'},"// This list will be converted to helper classes.\n// .width-[]\n$WIDTH_LIST: (\n    0p: 0,\n    10p: 10%,\n    15p: 15%,\n    25p: 25%,\n    30p: 30%,\n    50p: 50%,\n    60p: 60%,\n    75p: 75%,\n    90p: 90%,\n    95p: 95%,\n    100p: 100%,\n    50-pixels: 50px,\n    5-em: 5em,\n);\n\n// This list will be converted to helper classes.\n// .height-[]\n$HEIGHT_LIST: (\n    0p: 0,\n    10p: 10%,\n    15p: 15%,\n    25p: 25%,\n    30p: 30%,\n    50p: 50%,\n    60p: 60%,\n    75p: 75%,\n    90p: 90%,\n    95p: 95%,\n    100p: 100%,\n    50-pixels: 50px,\n    5-em: 5em,\n);\n")))}h.isMDXComponent=!0}}]);