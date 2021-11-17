"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[883],{3905:function(e,t,a){a.d(t,{Zo:function(){return r},kt:function(){return p}});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=l.createContext({}),m=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},r=function(e){var t=m(e.components);return l.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,r=n(e,["components","mdxType","originalType","parentName"]),u=m(a),p=o,b=u["".concat(d,".").concat(p)]||u[p]||c[p]||i;return a?l.createElement(b,s(s({ref:t},r),{},{components:a})):l.createElement(b,s({ref:t},r))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var m=2;m<i;m++)s[m]=a[m];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2695:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7462),o=a(3366),i=a(7294),s=["children","disableFullscreen"];function n(e){var t=e.children,a=e.disableFullscreen,n=(0,o.Z)(e,s),d=(0,i.useState)(!1),m=d[0],r=d[1];return i.createElement("div",{className:"preview-box-wrapper"},!a&&i.createElement("button",{"aria-label":m?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");m?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),r(!m)}},m?i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},i.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},i.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),i.createElement("iframe",(0,l.Z)({width:"100%",className:"docus-preview-box"+(m?" is-fullscreen":""),srcDoc:t},n)))}},1013:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return r},toc:function(){return c},default:function(){return p}});var l=a(7462),o=a(3366),i=(a(7294),a(3905)),s=a(2695),n=["components"],d={title:"Modals",sidebar_position:6},m=void 0,r={unversionedId:"components/modal",id:"components/modal",isDocsHomePage:!1,title:"Modals",description:"Modal, pop-up box, bottom sheet, off-canvas, anything can be related to this component, we generally call it modal. There are different types of modals with different sizes and styles that come with Flatify CSS, which we will cover with practical examples on this page.",source:"@site/docs/components/modal.mdx",sourceDirName:"components",slug:"/components/modal",permalink:"/flatifycss/docs/components/modal",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/modal.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Modals",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Close button",permalink:"/flatifycss/docs/components/close-button"},next:{title:"Pulse",permalink:"/flatifycss/docs/helpers/pulse"}},c=[{value:"A simple modal",id:"a-simple-modal",children:[{value:"Open modal button",id:"open-modal-button",children:[],level:3},{value:"Connection between modal and button",id:"connection-between-modal-and-button",children:[],level:3},{value:"Accessibility",id:"accessibility",children:[],level:3},{value:"Close button",id:"close-button",children:[],level:3},{value:"Modal parts",id:"modal-parts",children:[],level:3}],level:2},{value:"Required action",id:"required-action",children:[],level:2},{value:"Positions",id:"positions",children:[],level:2},{value:"Bordered",id:"bordered",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Modal, pop-up box, bottom sheet, off-canvas, anything can be related to this component, we generally call it ",(0,i.kt)("strong",{parentName:"p"},"modal"),". There are different types of modals with different sizes and styles that come with Flatify CSS, which we will cover with practical examples on this page."),(0,i.kt)("h2",{id:"a-simple-modal"},"A simple modal"),(0,i.kt)("p",null,"To have a simple modal you need to load Flatify CSS javascript file into your page. There must an element to call the modal and open it. Here is an example:"),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <button class="button open-modal" data-modal-target=".my-modal">Display The Modal</button> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal my-modal" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" data-modal-target=".my-modal" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-danger close-modal">Close</button> <button class="button size-sm style-info close-modal">Confirm</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("h3",{id:"open-modal-button"},"Open modal button"),(0,i.kt)("p",null,"The button that opens modal on click, must have two things to work: first ",(0,i.kt)("inlineCode",{parentName:"p"},".open-modal")," class and ",(0,i.kt)("inlineCode",{parentName:"p"},"data-modal-target")," HTML attribute which should select modal by its special address it can be a class or an ID (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},".my-modal")," is the custom class we will set to our modal)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="button open-modal" data-modal-target=".my-modal">Display The Modal</button>\n')),(0,i.kt)("h3",{id:"connection-between-modal-and-button"},"Connection between modal and button"),(0,i.kt)("p",null,"As said above we have a custom class called ",(0,i.kt)("inlineCode",{parentName:"p"},".my-modal"),", we should add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},".modal")," element, now they are connected it means by clicking the open button modal will be shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="modal my-modal" tabindex="-1" aria-labelledby="my-modal-title">...</div>\n')),(0,i.kt)("h3",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"There are some other attributes that are set and will be set dynamically for the sake of accessibility, there is an attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," you can read about ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute"},"its use-cases"),". Simply, it describes modal with the title (in this example ",(0,i.kt)("inlineCode",{parentName:"p"},"<h5>"),") because it has the ID of modal title, so they are connected like form label ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," attribute."),(0,i.kt)("h3",{id:"close-button"},"Close button"),(0,i.kt)("p",null,"To create a button that closes modal, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/close-button"},"close button component"),". There are two ways to make the connection between the modal and close button:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close button should be children of modal, in other words it should be inside ",(0,i.kt)("inlineCode",{parentName:"li"},".modal"),".",(0,i.kt)("p",{class:"size-lg"},"or")),(0,i.kt)("li",{parentName:"ul"},"Close button should have ",(0,i.kt)("inlineCode",{parentName:"li"},"data-modal-target")," HTML attribute which specifies modal by its selector, like the open modal button.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button type="button" class="close-modal close-button" data-modal-target=".my-modal" aria-label="Close"></button>\n')),(0,i.kt)("h3",{id:"modal-parts"},"Modal parts"),(0,i.kt)("p",null,"Modals can have their custom HTML, however by default there is a predefined structure with basic styles that make it look like a floating message, as shown in the example below they are wrapped by the ",(0,i.kt)("inlineCode",{parentName:"p"},".modal-content")," class. Inside it header, footer, and main contents are placed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1,8,14,15} title="index.html"',"{1,8,14,15}":!0,title:'"index.html"'},'<div class="modal my-modal" tabindex="-1" aria-labelledby="my-modal-title">\n    <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="my-modal-title">Here is an example</h5>\n            <button\n                type="button"\n                class="close-modal close-button"\n                data-modal-target=".my-modal"\n                aria-label="Close"\n            ></button>\n        </div>\n        <div class="modal-body">...</div>\n        <div class="modal-footer">\n            <button class="button size-sm style-danger close-modal">Close</button>\n            <button class="button size-sm style-info close-modal">Confirm</button>\n        </div>\n    </div>\n</div>\n')),(0,i.kt)("h2",{id:"required-action"},"Required action"),(0,i.kt)("p",null,'By default if users click outside of the modal, aka "backdrop", the modal will be closed, however, if you add ',(0,i.kt)("inlineCode",{parentName:"p"},".required")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},".modal")," element it will not treat this way anymore, in other words, the modal will be closed only when user click related ",(0,i.kt)("inlineCode",{parentName:"p"},".close-button"),"."),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <button class="button open-modal" data-modal-target=".my-modal">Display The Modal</button> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal my-modal required" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" data-modal-target=".my-modal" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-danger close-modal">Close</button> <button class="button size-sm style-info close-modal">Confirm</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="modal my-modal required" aria-labelledby="my-modal-title">...</div>\n')),(0,i.kt)("h2",{id:"positions"},"Positions"),(0,i.kt)("p",null,"A modal can be centered or stick to top, bottom, right or left. While it is stuck at sides, its animation will be diffrent as well.\nThese are classes that can be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},".modal")," element, easy-peasy."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modal-center"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"modal-top"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"modal-botton"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"modal-left"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"modal-right")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Width & height setters")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/width-and-height-setters"},"width & height setter helper classes"),", they come in handy when you need to fill the height for the left and right sides."))),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <div> <button class="button open-modal" data-modal-target=".my-modal-top">Top</button> <button class="button open-modal" data-modal-target=".my-modal-bottom">Bottom</button> <button class="button open-modal" data-modal-target=".my-modal-center">Center</button> <button class="button open-modal" data-modal-target=".my-modal-left">Left</button> <button class="button open-modal" data-modal-target=".my-modal-right">Right</button> </div> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal my-modal-center modal-center" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> </div> </div> <div class="modal my-modal-top modal-top" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> </div> </div> <div class="modal my-modal-bottom modal-bottom" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> </div> </div> <div class="modal my-modal-left modal-left" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> </div> </div> <div class="modal my-modal-right modal-right" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Click outside of the modal</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="modal modal-center">...</div>\n<div class="modal modal-top">...</div>\n<div class="modal modal-bottom">...</div>\n<div class="modal modal-left">...</div>\n<div class="modal modal-right">...</div>\n')),(0,i.kt)("h2",{id:"bordered"},"Bordered"),(0,i.kt)("p",null,"To have modal with borders add ",(0,i.kt)("inlineCode",{parentName:"p"},".bordered")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},".modal")," element."),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <button class="button open-modal" data-modal-target=".my-modal">Display The Modal</button> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal my-modal bordered" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" data-modal-target=".my-modal" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-danger close-modal">Close</button> <button class="button size-sm style-info close-modal">Confirm</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="modal bordered">...</div>\n')),(0,i.kt)("h2",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"To change the button size use ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),". Modals also support two special classes ",(0,i.kt)("inlineCode",{parentName:"p"},".modal-lg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".modal-sm"),", these classes specially modify max-width besides font size."),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <div> <button class="button open-modal" data-modal-target=".my-modal-sm">Small</button> <button class="button open-modal" data-modal-target=".my-modal-md">Normal</button> <button class="button open-modal" data-modal-target=".my-modal-lg">Large</button> <button class="button open-modal" data-modal-target=".my-modal-3x">Size 3x</button> </div> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal modal-sm modal-center my-modal-sm" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </div> <div class="modal-footer"> <button class="button size-sm style-success close-modal width-100p">Okay</button> </div> </div> </div> <div class="modal modal-center my-modal-md" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-success close-modal width-100p">Okay</button> </div> </div> </div> <div class="modal modal-lg modal-center my-modal-lg" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-success close-modal width-100p">Okay</button> </div> </div> </div> <div class="modal size-3x modal-center my-modal-3x" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-success close-modal width-100p">Okay</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="modal modal-sm"></div>\n<div class="modal"></div>\n<div class="modal modal-lg"></div>\n<div class="modal size-3x"></div>\n')),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)("p",null,"There are helper classes for styling elements like modal, first read about ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," then check examples below you can add them to ",(0,i.kt)("inlineCode",{parentName:"p"},".modal")," class."),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <div> <button class="button open-modal style-red" data-modal-target=".my-modal-red">Red modal</button> <button class="button open-modal style-red-light" data-modal-target=".my-modal-red-light">Light Red modal</button> <button class="button open-modal style-blue" data-modal-target=".my-modal-blue">Blue modal</button> <button class="button open-modal style-dark" data-modal-target=".my-modal-dark">Dark modal</button> </div> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal style-red bordered my-modal-red" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-red-light bordered close-modal">Close</button> <button class="button size-sm style-dark bordered close-modal">Confirm</button> </div> </div> </div> <div class="modal style-red-light bordered my-modal-red-light" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm close-modal">Close</button> <button class="button size-sm close-modal">Confirm</button> </div> </div> </div> <div class="modal style-blue bordered my-modal-blue" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm close-modal">Close</button> <button class="button size-sm close-modal">Confirm</button> </div> </div> </div> <div class="modal style-dark bordered my-modal-dark" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">Here is an example</h5> <button type="button" class="close-modal close-button" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-red close-modal">Close</button> <button class="button size-sm style-light close-modal">Confirm</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Buttons --\x3e\n<button class="button open-modal style-red" data-modal-target=".my-modal-red">Red modal</button>\n<button class="button open-modal style-red-light" data-modal-target=".my-modal-red-light">Light Red modal</button>\n<button class="button open-modal style-blue" data-modal-target=".my-modal-blue">Blue modal</button>\n<button class="button open-modal style-dark" data-modal-target=".my-modal-dark">Dark modal</button>\n\n\x3c!-- Modals --\x3e\n<div class="modal style-red bordered my-modal-red">...</div>\n<div class="modal style-red-light bordered my-modal-red-light">...</div>\n<div class="modal style-blue bordered my-modal-blue">...</div>\n<div class="modal style-dark bordered my-modal-dark">...</div>\n')),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Instead of using color setter classes you can customize it with predefined CSS variables, These are all of them:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__modal-bg-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__modal-txt-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__modal-border-color")),(0,i.kt)(s.Z,{height:"250px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Modals</title> <style> body{ --flatify__modal-backdrop-color: #8E8271; } .my-modal{ --flatify__modal-bg-color: #AA8E69; --flatify__modal-txt-color: #F5F7FA; --flatify__modal-border-color: #FFCE54; } </style> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body class="flex-column-center"> <button class="button open-modal" data-modal-target=".my-modal">Display The Modal</button> <p class="opacity-50">By clicking the fullscreen button examine this example with more space.</p> <div class="modal bordered my-modal" aria-labelledby="my-modal-title" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="my-modal-title">I am a grizzly bear...</h5> <button type="button" class="close-modal close-button" data-modal-target=".my-modal" aria-label="Close" ></button> </div> <div class="modal-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </div> <div class="modal-footer"> <button class="button size-sm style-orange-light close-modal">Close</button> <button class="button size-sm style-orange close-modal">Confirm</button> </div> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Modal backdrop color")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is also a CSS variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__modal-backdrop-color"),", it just changes the color of the modal backdrop. The important thing is that is not inside modal, it is a global element at the first level of body children, so you must set its custom color to the ",(0,i.kt)("inlineCode",{parentName:"p"},":root"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},"body {\n    --flatify__modal-backdrop-color: #8e8271;\n}\n\n.my-modal {\n    --flatify__modal-bg-color: #aa8e69;\n    --flatify__modal-txt-color: #f5f7fa;\n    --flatify__modal-border-color: #FFCE54;\n}\n")))}p.isMDXComponent=!0}}]);