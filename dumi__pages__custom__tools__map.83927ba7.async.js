"use strict";(self.webpackChunk_antv_l7_site=self.webpackChunk_antv_l7_site||[]).push([[90],{10874:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(7337),a=n(30372),i=n(41398),c=n(49797),s=n(15723),l=n.n(s),o=n(38084),u=n.n(o),d=n(11440),p=n.n(d),h=n(54931),f=n.n(h),v=n(51655),x=n.n(v),y=n(44004),m=n.n(y),j=n(17748),b=n(23637),g=n(6523),w=n(49392),Z=n(77261),k=n(87490),C=n(46748),N=n(13721),A=n(3306),S=n(3086),L=n(51747),O=n(88662),D=n(10068),T=n(49783),J=n(57273),z=n(24832),B=n(13026),V=n(16118),_=n(92322),G=n(58863),P=(n(55618),n(53156)),E=n(46228),M={width:20,display:"none",rotate:0},q={width:370,rotate:180,display:"block"},F=function(){var e,t,n,r,a=(0,i.useState)({data:{type:"FeatureCollection",features:[]},parser:{type:"geojson"}}),c=m()(a,2),s=c[0],o=c[1],d=(0,i.useState)(q),h=m()(d,2),v=h[0],y=h[1],F=(0,i.useState)(!1),I=m()(F,2),K=I[0],R=I[1],U="middle",W=(0,i.useState)(P.Ay),Q=m()(W,2),H=Q[0],X=Q[1],Y=(0,i.useState)([{currentLevel:"country",currentName:"中国",currentCode:1e5}]),$=m()(Y,2),ee=$[0],te=$[1],ne=(0,i.useMemo)((function(){return(0,P.Ho)(H.currentLevel)}),[H.currentLevel]),re=function(e,t){X(x()(x()({},H),{},f()({},e,t)))};(0,i.useEffect)((function(){document.body.clientWidth<768&&y(M)}),[]);var ae=(0,i.useState)(),ie=m()(ae,2),ce=ie[0],se=ie[1],le=function(){var e=p()(u()().mark((function e(){var t,n,r,a,i;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=H.currentLevel,n=H.hasSubChildren,r=H.childrenLevel,a=H.currentCode,n){e.next=7;break}return e.next=4,null==ce?void 0:ce.getChildrenData({parentLevel:t,parentAdcode:a,childrenLevel:t});case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,null==ce?void 0:ce.getChildrenData({parentLevel:t,parentAdcode:a,childrenLevel:r});case 9:i=e.sent;case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=p()(u()().mark((function e(){var t,n,r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.datatype,n=H.currentName,e.next=3,le();case 3:r=e.sent,(0,G.O6)(n,r,t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=p()(u()().mark((function e(){var t,n;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.currentName,e.next=3,le();case 3:return n=e.sent,e.abrupt("return",(0,G.O6)(t,n,"SVG"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=p()(u()().mark((function e(){var t,n,r;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.dataLevel,n=H.datatype,R(!0),e.next=4,(0,P.B4)(t);case 4:r=e.sent,R(!1),(0,G.O6)("全量数据".concat(t),r,n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=p()(u()().mark((function e(){var t,n;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.datatype,e.next=3,fetch("https://mdn.alipayobjects.com/afts/file/A*zMVuS7mKBI4AAAAAAAAAAAAADrd2AQ/%E5%85%A8%E5%9B%BD%E8%BE%B9%E7%95%8C.json");case 3:return e.next=5,e.sent.json();case 5:n=e.sent,(0,G.O6)("中国边界",n,t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,navigator.clipboard.writeText(JSON.stringify(t)),C.ZP.success("复制成功");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=p()(u()().mark((function e(){var t,n;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:return t=e.sent,e.next=5,(0,G.Y2)(t);case 5:n=e.sent,navigator.clipboard.writeText(n),C.ZP.success("复制成功");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){var e=H.sourceType,t=H.sourceVersion,n=new V.DataSourceMap[e]({version:t});R(!0),se(n),n.getChildrenData({childrenLevel:"province",parentAdcode:1e5,parentLevel:"country",precision:"low"}).then((function(e){o((function(t){return x()(x()({},t),{},{data:e})})),setTimeout((function(){n.getData({level:"city"})}),4e3),setTimeout((function(){n.getData({level:"county"})}),6e3),R(!1)}))}),[H.sourceType,H.sourceVersion]);var ve=(0,_.Z)(function(){var e=p()(u()().mark((function e(t){var n,r,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("county"!==(n=(0,P.q4)(H.currentLevel))){e.next=4;break}return C.ZP.info("已下钻到最底层"),e.abrupt("return");case 4:return R(!0),r={currentLevel:n,currentName:t.feature.properties.name,currentCode:t.feature.properties.adcode},te([].concat(l()(ee),[r])),X(x()(x()(x()({},H),r),{},{childrenLevel:(0,P.q4)(n)})),e.next=10,null==ce?void 0:ce.getChildrenData({parentLevel:r.currentLevel,parentAdcode:r.currentCode,childrenLevel:(0,P.q4)(n),precision:"low"});case 10:a=e.sent,o((function(e){return x()(x()({},e),{},{data:a})})),R(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),600),xe=(0,_.Z)(p()(u()().mark((function e(){var t,n,r,a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=ee.slice(0,ee.length-1),n=t[t.length-1],"country"!==(r=H.currentLevel)){e.next=6;break}return C.ZP.info("已上卷到最上层"),e.abrupt("return");case 6:return R(!0),X(x()(x()(x()({},H),n),{},{childrenLevel:r})),te(t),e.next=11,null==ce?void 0:ce.getChildrenData({parentLevel:n.currentLevel,parentAdcode:n.currentCode,childrenLevel:r,precision:"low"});case 11:a=e.sent,o((function(e){return x()(x()({},e),{},{data:a})})),R(!1);case 14:case"end":return e.stop()}}),e)}))),600),ye=(0,i.useMemo)((function(){return(0,P.wc)()}),[H.sourceType,H.currentLevel]);return(0,E.jsx)(N.Z,{spinning:K,tip:"数据加载中……",children:(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsxs)(k.$2,x()(x()({},P.vc),{},{style:{height:"calc(100vh - 240px)",width:"calc(100% - ".concat(v.width,"px)")},children:[(0,E.jsx)(k.Co,x()(x()({},P.qX),{},{source:s,onDblClick:ve,onUndblclick:xe,id:"myChoroplethLayer"})),(0,E.jsx)(k.Kh,{closeButton:!1,closeOnClick:!1,anchor:"bottom-left",trigger:"hover",items:ye}),(0,E.jsx)(k.w3,{position:"bottomright"}),(0,E.jsxs)(k.br,{position:"bottomleft",className:"custom-control-class",style:{background:"#fff",borderRadius:4,overflow:"hidden",padding:16},children:[(0,E.jsx)("div",{children:"下钻: 双击要下钻的区域"}),(0,E.jsx)("div",{children:"上卷: 双击非行政区划区域"})]})]})),(0,E.jsxs)("div",{className:"panel",style:{width:v.width},children:[(0,E.jsx)("div",{className:"toggle",children:(0,E.jsx)(j.Z,{title:"展开收起",rotate:v.rotate,className:"icon",onClick:function(){y(20===v.width?q:M)}})}),(0,E.jsxs)("div",{style:{paddingLeft:"10px",display:v.display},children:[(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsx)(S.Z,{span:8,className:"label",children:"版本："}),(0,E.jsx)(S.Z,{span:16,style:{textAlign:"right"},children:(0,E.jsx)(L.Z,{value:H.sourceVersion,size:"small",onChange:re.bind(null,"sourceVersion"),options:P.Fk[H.sourceType]})})]}),(0,E.jsx)(O.Z,{style:{margin:"8px 0"}}),(0,E.jsxs)(D.Z,{title:"当前地区",children:[(0,E.jsx)(D.Z.Item,{style:{width:"180px"},label:"名称",children:H.currentName}),(0,E.jsx)(D.Z.Item,{label:"adcode",children:H.currentCode})]}),(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsx)(S.Z,{span:12,className:"label",children:"包含子区域:"}),(0,E.jsx)(S.Z,{span:12,style:{textAlign:"right"},children:(0,E.jsx)(T.Z,{style:{width:"32px"},checked:H.hasSubChildren,onChange:re.bind(null,"hasSubChildren")})})]}),H.hasSubChildren&&(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsx)(S.Z,{span:10,className:"label",children:"子区域级别:"}),(0,E.jsx)(S.Z,{span:14,style:{textAlign:"right"},children:(0,E.jsxs)(J.ZP.Group,{defaultValue:ne[0]||"province",size:U,value:H.childrenLevel,onChange:function(e){re("childrenLevel",e.target.value)},children:[-1!==ne.indexOf("province")&&(0,E.jsx)(J.ZP.Button,{value:"province",children:"省"}),-1!==ne.indexOf("city")&&(0,E.jsx)(J.ZP.Button,{value:"city",children:"市"}),(0,E.jsx)(J.ZP.Button,{value:"county",children:"县"})]})})]}),(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsx)(S.Z,{span:6,className:"label",children:"数据下载:"}),(0,E.jsxs)(S.Z,{span:18,style:{textAlign:"right"},children:[(0,E.jsx)(L.Z,{value:H.datatype,style:{width:120},size:U,options:P.y2,onChange:re.bind(null,"datatype")}),(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(b.Z,{}),size:U,onClick:oe}),(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(g.Z,{}),onClick:he,size:U})]})]}),(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsx)(S.Z,{span:6,className:"label",children:"SVG下载:"}),(0,E.jsxs)(S.Z,{span:18,style:{textAlign:"right"},children:[(0,E.jsxs)(z.Z,{style:{pointerEvents:"none",width:120},children:[" ",(0,E.jsx)(w.Z,{})," SVG"," "]}),(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(b.Z,{}),size:U,onClick:ue}),(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(g.Z,{}),onClick:fe,size:U})]})]}),(0,E.jsx)("h3",{children:"其他下载"}),(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsxs)(S.Z,{span:12,className:"label",children:["中国边界下载"," ",(0,E.jsxs)(B.Z,{placement:"top",overlayInnerStyle:{color:"#111"},color:"#fff",title:"全国边界下载：包含国界线、海岸线、香港界、海上省界、未定国界等线要素.",children:[" ",(0,E.jsx)(Z.Z,{})]})]}),(0,E.jsx)(S.Z,{span:12,style:{textAlign:"right"},children:(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(b.Z,{}),onClick:pe,size:U})})]}),(0,E.jsxs)(A.Z,{className:"row",children:[(0,E.jsxs)(S.Z,{span:12,className:"label",children:["高精度数据下载"," ",(0,E.jsxs)(B.Z,{placement:"top",overlayInnerStyle:{color:"#111"},color:"#fff",title:"省市县原始精度下载，数据量比较大，适合线下数据分析场景",children:[" ",(0,E.jsx)(Z.Z,{})]})]}),(0,E.jsxs)(S.Z,{span:12,style:{textAlign:"right"},children:[(0,E.jsx)(L.Z,{value:H.dataLevel,style:{width:100},size:U,options:P.B8,onChange:re.bind(null,"dataLevel")}),(0,E.jsx)(z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,E.jsx)(b.Z,{}),onClick:de,size:U})]})]}),(0,E.jsx)("div",{className:"originData",style:{},children:(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{children:"数据来源："}),(0,E.jsx)("a",{href:"".concat(null==ce||null===(e=ce.info)||void 0===e||null===(t=e.desc)||void 0===t?void 0:t.href),children:"".concat(null==ce||null===(n=ce.info)||void 0===n||null===(r=n.desc)||void 0===r?void 0:r.text)})]})})]})]})]})})},I=function(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(a.h,{}),(0,E.jsx)(c.Z,{}),(0,E.jsx)(F,{}),(0,E.jsx)(r.$,{})]})}},49797:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(51655),a=n.n(r),i=n(96352),c=(n(41490),n(41398),n(46228)),s=function(e){var t=e.url,n=e.title,r=e.to;return(0,c.jsxs)(i.rU,{className:"dumi-default-logo",to:r,children:[(0,c.jsx)("img",{src:t,alt:n}),n]})},l=(n(28776),function(e){var t=(0,i.TH)().pathname,n=e.nav;return(0,c.jsx)("ul",{className:"dumi-default-navbar",children:n.map((function(e){return(0,c.jsx)("li",{children:/^(\w+:)\/\/|^(mailto|tel):/.test(e.link)?(0,c.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.title}):(0,c.jsx)(i.rU,a()(a()({to:e.link},t.startsWith(e.activePath||e.link)?{className:"active"}:{}),{},{children:e.title}))},e.link)}))})}),o=(n(64522),{nav:[{title:"中国地图",order:1,link:"../custom/tools/map",activePath:"/custom/tools/map"},{title:"世界地图",order:1,link:"../custom/tools/worldmap",activePath:"/custom/tools/worldmap"},{title:"数据 SDK",order:2,link:"../custom/tools/sdk",activePath:"/custom/tools/sdk"},{title:"数据服务",order:3,link:"../custom/tools/service",activePath:"/custom/tools/service"}],url:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uQbXRLw_Q2UAAAAAAAAAAAAADmJ7AQ/original",to:"/custom/tools",title:"GISDATA"}),u=function(){return(0,c.jsx)("div",{className:"dumi-default-header",children:(0,c.jsxs)("div",{className:"dumi-default-header-content",style:{height:"60px"},children:[(0,c.jsx)("section",{className:"dumi-default-header-left",children:(0,c.jsx)(s,a()({},o))}),(0,c.jsx)("section",{className:"dumi-default-header-right",children:(0,c.jsx)(l,{nav:o.nav})})]})})}},53156:function(e,t,n){n.d(t,{Ay:function(){return y},B4:function(){return b},B8:function(){return v},Fk:function(){return x},Ho:function(){return j},Tt:function(){return p},_1:function(){return u},q4:function(){return m},qX:function(){return l},vc:function(){return d},wc:function(){return h},y2:function(){return f},zD:function(){return o}});var r=n(38084),a=n.n(r),i=n(11440),c=n.n(i),s=n(16118),l={autoFit:!0,fillColor:"#377eb8",opacity:.3,strokeColor:"blue",lineWidth:.5,lineOpacity:1,state:{active:{strokeColor:"green",lineWidth:1.5,lineOpacity:.8},select:{strokeColor:"red",lineWidth:1.5,lineOpacity:.8}}},o={shape:"line",size:.8,color:{scale:{type:"cat",domain:["0","2","7","9"]},field:"type",value:["#084081","#09f","#377eb8","#e41a1c"]},style:{opacity:.8,lineType:"solid"}},u={shape:"line",size:.8,color:{scale:{type:"cat",domain:["1","8","10","11"]},field:"type",value:["#084081","#e41a1c","#377eb8","#09f"]},style:{opacity:1,lineType:"dash",dashArray:[1,1]}},d={mapType:"Gaode",mapOptions:{style:"light",center:[120.210792,30.246026],zoom:3,maxZoom:10,doubleClickZoom:!1}},p={mapType:"Gaode",mapOptions:{style:"light",center:[120.210792,30.246026],zoom:3,maxZoom:5,doubleClickZoom:!1}},h=function(){return[{layer:"myChoroplethLayer",fields:[{field:"name",formatField:function(){return"名称"}},{field:"adcode",formatField:"行政编号"}]}]},f=[{key:"GeoJSON",value:"GeoJSON",label:"GeoJSON"},{key:"TopoJSON",value:"TopoJSON",label:"TopoJSON"},{key:"JSON",value:"JSON",label:"JSON"},{key:"CSV",value:"CSV",label:"CSV"},{key:"KML",value:"KML",label:"KML"}],v=[{value:"country",label:"国家"},{value:"province",label:"省"},{value:"city",label:"市"},{value:"county",label:"县"}],x={DataVSource:[{value:"areas_v3",label:"areas_v3"},{value:"areas_v2",label:"areas_v2"}],RDBSource:[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"}]},y={sourceType:"RDBSource",sourceVersion:"2023.0.8",currentLevel:"country",currentName:"中国",currentCode:1e5,hasSubChildren:!0,childrenLevel:"province",datatype:"GeoJSON",dataLevel:"country"},m=function(e){switch(e){case"country":return"province";case"province":return"city";case"city":case"county":return"county";default:return}},j=function(e){switch(e){case"country":return["province","city","county"];case"province":return["city","county"];case"city":return["county"];default:return[]}},b=function(){var e=c()(a()().mark((function e(t){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new s.RDBSource({version:"1"}),e.abrupt("return",n.getData({level:t}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},58863:function(e,t,n){n.d(t,{O6:function(){return u},Y2:function(){return o}});var r=n(54427),a=n(53757),i=n.n(a),c=(n(51441),n(76257)),s=n.n(c),l=n(36329);function o(e){var t=(0,r.Z)(e).bbox||[-180,-90,180,90],n=i()({mapExtent:{left:t[0],bottom:t[1],right:t[2],top:t[3]},precision:8,attributes:["properties.adcode","properties.name",{property:"stroke",value:"blue",type:"static"},{property:"fill",value:"#aaa",type:"static"}],viewportSize:{width:1e3,height:800},fitToViewBox:!0,outputFormat:"svg"}).convert(e).join();return'<svg width="'.concat(1e3,'" height="').concat(800,'" xmlns="http://www.w3.org/2000/svg"> ').concat(n,"</svg>")}function u(e,t,n){var r="SVG"===n?o(t):"TopoJSON"===n?function(e){return JSON.stringify(l.MM({data:e}))}(t):"GeoJSON"===n?function(e){return JSON.stringify(e)}(t):"CSV"===n?function(e){var t=e.features.map((function(e){return e.properties}));if(0!==t.length){var n=Object.keys(t[0]||{}),r=[n.join(",")];return t.forEach((function(e){var t=n.map((function(t){return e[t]}));r.push(t.join(","))})),r.join("\n")}}(t):"JSON"===n?function(e){var t=e.features.map((function(e){return e.properties}));return JSON.stringify(t)}(t):"KML"===n?function(e){return s()(e)}(t):"",a=document.createElement("a");a.download="".concat(e,".").concat(n.toLowerCase()),a.href="data:text/json;charset=utf-8,".concat(encodeURIComponent(r)),a.target="_blank",a.rel="noreferrer",a.click()}},55618:function(){}}]);