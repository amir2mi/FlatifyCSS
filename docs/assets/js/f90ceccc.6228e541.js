"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[324],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),b=c(n),m=i,p=b["".concat(s,".").concat(m)]||b[m]||d[m]||o;return n?l.createElement(p,r(r({ref:e},u),{},{components:n})):l.createElement(p,r({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=b;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2695:function(t,e,n){n.d(e,{Z:function(){return a}});var l=n(7462),i=n(3366),o=n(7294),r=["children"];function a(t){var e=t.children,n=(0,i.Z)(t,r);return o.createElement("iframe",(0,l.Z)({width:"100%",className:"docus-preview-box",srcDoc:e},n))}},1078:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var l=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(2695),a=["components"],s={title:"Buttons"},c=void 0,u={unversionedId:"components/buttons",id:"components/buttons",isDocsHomePage:!1,title:"Buttons",description:"Buttons play a big role in any user interface as they give users the ability",source:"@site/docs/components/buttons.mdx",sourceDirName:"components",slug:"/components/buttons",permalink:"/flatifycss/docs/components/buttons",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/components/buttons.mdx",tags:[],version:"current",frontMatter:{title:"Buttons"},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/flatifycss/docs/components/alert"},next:{title:"Alignment",permalink:"/flatifycss/docs/helpers/alignment"}},d=[{value:"A simple button",id:"a-simple-button",children:[],level:3},{value:"Colors",id:"colors",children:[],level:3},{value:"Sizes",id:"sizes",children:[],level:3},{value:"Bordered",id:"bordered",children:[],level:3},{value:"Outline",id:"outline",children:[],level:3},{value:"Customization",id:"customization",children:[],level:3}],b={toc:d};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Buttons play a big role in any user interface as they give users the ability\nto interact with the website, so we should use them carefully.\nIt is necessary to know the good and bad practices for a perfect button.\nFirst, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.buttoncheatsheet.com/"},"button cheat sheet"),"."),(0,o.kt)("h3",{id:"a-simple-button"},"A simple button"),(0,o.kt)("p",null,"A button with Flatify CSS style can be defined in several ways as mentioned in the button cheatsheet,\nfor any type of element, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},".button")," class but elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," or input with button type do not need the class."),(0,o.kt)(r.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button> Click Here </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<button>Click Here</button>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you do not want to have Flatify CSS style on elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," there is a class called\n",(0,o.kt)("inlineCode",{parentName:"p"},".default")," that do not allow the button to have Flatify CSS button style primarily."),(0,o.kt)(r.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button class="default"> Click Here </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="default">Click Here</button>\n')))),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("p",null,"There are helper classes for styling elements like button,\nfirst ",(0,o.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button which diffrent\nbackground and text color."),(0,o.kt)(r.Z,{height:"300px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 100% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap;"> <button style="width: 200px; margin: 10px" class="style-warning-lighter">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger-lighter">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark-lighter">Click Here</button> <button style="width: 200px; margin: 10px" class="style-accent">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning-light">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger-light">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark-light">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="style-accent">Click Here</button>\n<button class="style-purple">Click Here</button>\n<button class="style-yellow">Click Here</button>\n\n<button class="style-accent-light">Click Here</button>\n<button class="style-purple-light">Click Here</button>\n<button class="style-yellow-light">Click Here</button>\n\n<button class="style-warning">Click Here</button>\n<button class="style-danger">Click Here</button>\n<button class="style-dark">Click Here</button>\n\n<button class="style-warning-light">Click Here</button>\n<button class="style-danger-light">Click Here</button>\n<button class="style-dark-light">Click Here</button>\n')),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("p",null,"To change the button size use ",(0,o.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThis classes just set a ",(0,o.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,o.kt)(r.Z,{height:"340px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 100% !important; } } </style> </head> <body> <div class="flex-column-center"> <button class="size-sm">Click Here</button> <button class="size-md">Click Here</button> <button class="size-lg">Click Here</button> <button class="size-2x">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="size-sm">Click Here</button>\n<button class="size-md">Click Here</button>\n<button class="size-lg">Click Here</button>\n<button class="size-2x">Click Here</button>\n')),(0,o.kt)("h3",{id:"bordered"},"Bordered"),(0,o.kt)("p",null,"By default Flatify CSS buttons does not have border however if you add ",(0,o.kt)("inlineCode",{parentName:"p"},".bordered")," class to\nthe button it will have border."),(0,o.kt)(r.Z,{height:"300px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 100% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button style="width: 200px; margin: 10px" class="style-accent bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-accent-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark-light bordered">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="style-accent bordered">Click Here</button>\n<button class="style-purple bordered">Click Here</button>\n<button class="style-yellow bordered">Click Here</button>\n\n<button class="style-accent-light bordered">Click Here</button>\n<button class="style-purple-light bordered">Click Here</button>\n<button class="style-yellow-light bordered">Click Here</button>\n\n<button class="style-warning bordered">Click Here</button>\n<button class="style-danger bordered">Click Here</button>\n<button class="style-dark bordered">Click Here</button>\n\n<button class="style-warning-light bordered">Click Here</button>\n<button class="style-danger-light bordered">Click Here</button>\n<button class="style-dark-light bordered">Click Here</button>\n')),(0,o.kt)("h3",{id:"outline"},"Outline"),(0,o.kt)("p",null,"Buttons with outline style get more transition time because of\nbackground and text inverted color for ",(0,o.kt)("inlineCode",{parentName:"p"},":active")," & ",(0,o.kt)("inlineCode",{parentName:"p"},":focus-visible")," states. In this case text color\nis border color, so there is no need to add ",(0,o.kt)("inlineCode",{parentName:"p"},".bordered")," class for outline buttons."),(0,o.kt)(r.Z,{height:"300px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 100% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button style="width: 200px; margin: 10px" class="style-accent outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-accent-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark-light outline">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="style-accent outline">Click Here</button>\n<button class="style-purple outline">Click Here</button>\n<button class="style-yellow outline">Click Here</button>\n\n<button class="style-accent-light outline">Click Here</button>\n<button class="style-purple-light outline">Click Here</button>\n<button class="style-yellow-light outline">Click Here</button>\n\n<button class="style-warning outline">Click Here</button>\n<button class="style-danger outline">Click Here</button>\n<button class="style-dark outline">Click Here</button>\n\n<button class="style-warning-light outline">Click Here</button>\n<button class="style-danger-light outline">Click Here</button>\n<button class="style-dark-light outline">Click Here</button>\n')),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Each button has these CSS variables for customization, they can be set as ",(0,o.kt)("inlineCode",{parentName:"p"},":root")," for all buttons default style\nof just for an specific selector."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--flatify__button-bg-color")," Button background color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"--flatify__button-text-color")," Button text color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"--flatify__button-bg-color__focus")," Button background color for border and focus",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"--flatify__button-text-color__focus")," Button text color for focus"),(0,o.kt)(r.Z,{height:"310px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> .my-button-1{ margin: 0.5em !important; --flatify__button-bg-color: linear-gradient(15deg, #03001e, #7303c0, #ec38bc, #fdeff9); --flatify__button-text-color: white; --flatify__button-bg-color__focus: linear-gradient(25deg, #03001e, #7303c0, #ec38bc, #fdeff9); --flatify__button-text-color__focus: white; } .my-button-2{ margin: 0.5em !important; --flatify__button-bg-color: #48CFAD; --flatify__button-text-color: #fff; --flatify__button-bg-color__focus: #37BC9B; --flatify__button-text-color__focus: #fff; } .my-button-3{ margin: 0.5em !important; --flatify__button-bg-color: #EC87C0; --flatify__button-text-color: #F5F7FA; --flatify__button-bg-color__focus: #D770AD; --flatify__button-text-color__focus: #fff; } </style> </head> <body> <div class="flex-column-center"> <button class="my-button-1 size-lg">Custom button</button> <button class="my-button-2 size-lg">Custom button</button> <button class="my-button-3 outline size-lg">Custom button</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="my-button-1 size-lg">Custom button</button>\n<button class="my-button-2 size-lg">Custom button</button>\n<button class="my-button-3 outline size-lg">Custom button</button>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-button-1 {\n    margin: 0.5em !important;\n    --flatify__button-bg-color: linear-gradient(15deg, #03001e, #7303c0, #ec38bc, #fdeff9);\n    --flatify__button-text-color: white;\n    --flatify__button-bg-color__focus: linear-gradient(25deg, #03001e, #7303c0, #ec38bc, #fdeff9);\n    --flatify__button-text-color__focus: white;\n}\n\n.my-button-2 {\n    margin: 0.5em !important;\n    --flatify__button-bg-color: #48cfad;\n    --flatify__button-text-color: #fff;\n    --flatify__button-bg-color__focus: #37bc9b;\n    --flatify__button-text-color__focus: #fff;\n}\n\n.my-button-3 {\n    margin: 0.5em !important;\n    --flatify__button-bg-color: #ec87c0;\n    --flatify__button-text-color: #f5f7fa;\n    --flatify__button-bg-color__focus: #d770ad;\n    --flatify__button-text-color__focus: #fff;\n}\n")))}m.isMDXComponent=!0}}]);