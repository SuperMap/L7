(self.webpackChunk_antv_l7_site=self.webpackChunk_antv_l7_site||[]).push([[8409,9167],{61532:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=61532,e.exports=t},98686:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(44004),i=r.n(n),a=r(37488),l=r(96352),o=r(90772),c=r(61911),s=r(41398),u=r(14042),d=r(90097),f=r(22168),m=r(28156),p=r(69148),v=r(12692),h=r(56262),g=r(94187),x=r(88662),y=function(e){var t=e.title;e.relativePath,e.githubUrl;return s.createElement(h.Z,{ghost:!1,title:t,extra:s.createElement(g.Z,{split:s.createElement(x.Z,{type:"vertical"})})})},b=r(77594),j=r(54843),T=r(94077);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,l,o=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=function(e){var t=e.exampleTopics,r=e.topic,n=e.example,i=e.demo,a=e.size,o=e.replaceId,c=e.isPlayground,u=e.notFound,d=void 0===u?s.createElement(j.T,null):u,h=(0,b.X)(t,r,n,i);if(!h)return d;var g=h.title,x=h.source,S=h.relativePath,w=(0,l.WF)().themeConfig,Z=w.githubUrl,_=w.playground,C=E((0,s.useState)(),2),N=C[0],I=C[1],O=E((0,s.useState)(!1),2),P=(O[0],O[1]),k=((0,l.bU)(),s.createElement(y,{title:(0,T.ic)(g),relativePath:S,githubUrl:Z})),U="".concat(r,"_").concat(n,"_").concat(i);return s.createElement(m.Z,{split:"vertical",defaultSize:"".concat(100*(1-a),"%"),minSize:100},s.createElement(v.G,{exampleId:U,error:N,header:k,isPlayground:c}),s.createElement(p.p,{exampleId:U,source:x,relativePath:S,replaceId:o,onError:I,onFullscreen:P,onDestroy:f.Z,onReady:f.Z,playground:_}))},Z=r(33029),_="I6allS0C4_QA51HSOQak",C="ExxoBTOYR3sVlgfolgSm",N="PZYLQtwkAnQNwM3vxRR9",I="OIhvgErm4cEnTf5BqeRD",O=r(34239),P=r(46228),k=a.Z.Sider,U=a.Z.Content,A=function(){var e=(0,u.TH)().hash,t=(0,u.s0)(),r=(0,u.UO)(),n=r.topic,f=r.example,m=(0,s.useContext)(d.w),p=(0,l.bU)(),v=(0,l.WF)().themeConfig,h=m.meta.exampleTopics,g=(0,s.useMemo)((function(){var t=(0,o.Z)(h,["0","examples"]),r=(0,c.Z)(t,(function(e){return e.id===f}));return e.slice(1)||(0,o.Z)(r,["demos","0","id"])}),[e,h,f]),x=(0,s.useState)(),y=i()(x,2),j=y[0],T=y[1],E=(0,s.useState)(!1),S=i()(E,2),A=S[0],D=(S[1],(0,s.useState)({})),R=i()(D,2),F=(R[0],R[1]);return(0,s.useEffect)((function(){if(n&&f&&g){var e=(0,b.X)(h,n,f,g);T(e),console.log(e),F((0,O.getCurrentTitle)(h,n,f))}}),[n,f,e]),(0,P.jsx)("div",{className:_,children:(0,P.jsxs)(a.Z,{className:C,children:[(0,P.jsx)(k,{collapsedWidth:0,width:250,trigger:null,collapsible:!0,collapsed:A,className:I,theme:"light",children:j&&(0,P.jsx)(Z.C,{showExampleDemoTitle:!0,currentDemo:j,onDemoClicked:function(e){var r=e.id,n=e.targetExample,i=e.targetTopic,a="/".concat(p.id,"/examples/").concat(null==i?void 0:i.id,"/").concat(null==n?void 0:n.id,"/#").concat(r);console.log(a),t(a)},exampleTopics:h})}),(0,P.jsx)(U,{className:N,children:n&&f&&(0,P.jsx)(w,{exampleTopics:h,topic:n,example:f,demo:g,size:(0,o.Z)(v,"editor.size",.38)})})]})})}},34239:function(e,t,r){"use strict";function n(e,t,r){return e.find((function(e){return e.id===t})).examples.find((function(e){return e.id===r})).title}r.r(t),r.d(t,{getCurrentTitle:function(){return n}})},12692:function(e,t,r){"use strict";r.d(t,{G:function(){return d}});r(41398);var n=r(38823),i=r(96352),a="d8ttRdvsaeIwjsXPUrV3",l="YWbojl5X0YI9jR8WQ6vF",o="nHrVcWv4dgQMNfb_O3dk",c="kLT5PvcX6twH_8KM1K4Y",s="HdNrro6Kmg0q9gTP4YLJ",u=r(46228);var d=function(e){var t,r=e.isPlayground,d=e.exampleId,f=e.header,m=e.error;return(0,u.jsxs)("div",{className:a,children:[r?null:(0,u.jsx)("div",{className:l,children:f}),(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("div",{id:"playgroundScriptContainer_".concat(d),className:c}),m?(0,u.jsx)(n.ZP,{className:s,status:"error",title:(0,u.jsx)(i._H,{id:"演示代码报错，请检查"}),subTitle:(0,u.jsx)("pre",{children:(t=m,(t.reason?t.reason:t.message?t.message:t).toString())})}):null]})]})}},54843:function(e,t,r){"use strict";r.d(t,{T:function(){return n.T}});var n=r(36311)},85589:function(e,t,r){"use strict";r.d(t,{g:function(){return n.g}});var n=r(40524)}}]);