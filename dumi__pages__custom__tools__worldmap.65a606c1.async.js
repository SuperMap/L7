"use strict";(self.webpackChunk_antv_l7_site=self.webpackChunk_antv_l7_site||[]).push([[8118],{72304:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(19280),i=r(25344),a=r(41398),o=r(86125),l=r(38084),s=r.n(l),u=r(11440),c=r.n(u),f=r(54931),d=r.n(f),p=r(51655),y=r.n(p),h=r(44004),v=r.n(h),g=r(17748),m=r(23637),x=r(6523),w=r(49392),j=r(75363),b=r(46748),S=r(13721),k=r(88662),C=r(10068),N=r(3306),M=r(3086),V=r(51747),Z=r(24832),P=r(19202),F=r(76642),L=r.n(F),O=r(85743),A=(r(66016),r(91012)),J=r(46228),_={width:20,display:"none",rotate:0},z={width:370,rotate:180,display:"block"},G=function(){var e=(0,a.useState)({data:{type:"FeatureCollection",features:[]},parser:{type:"geojson"}}),t=v()(e,2),r=t[0],n=t[1],i=(0,a.useState)(),o=v()(i,2),l=o[0],u=o[1],f=(0,a.useState)({data:{type:"FeatureCollection",features:[]},parser:{type:"geojson"}}),p=v()(f,2),h=p[0],F=p[1],G=(0,a.useState)({data:{type:"FeatureCollection",features:[]},parser:{type:"geojson"}}),T=v()(G,2),D=T[0],B=T[1],q=(0,a.useState)(z),E=v()(q,2),I=E[0],K=E[1],R=(0,a.useState)(!1),W=v()(R,2),U=W[0],H=W[1],Q="middle",X=(0,a.useState)(A.Ay),Y=v()(X,2),$=Y[0],ee=Y[1],te=function(e,t){ee(y()(y()({},$),{},d()({},e,t)))};(0,a.useEffect)((function(){document.body.clientWidth<768&&K(_)}),[]);var re=function(){var e=c()(s()().mark((function e(){var t,n=arguments;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"fill",e.abrupt("return","line"===t?l:r.data);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=c()(s()().mark((function e(t){var r,n,i;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=$.datatype,n=$.currentName,e.next=3,re(t);case 3:i=e.sent,(0,O.O6)(n,i,r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=c()(s()().mark((function e(){var t,r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=$.currentName,e.next=3,re();case 3:return r=e.sent,e.abrupt("return",(0,O.O6)(t,r,"SVG"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=c()(s()().mark((function e(t){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:r=e.sent,navigator.clipboard.writeText(JSON.stringify(r)),b.ZP.success("复制成功");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=c()(s()().mark((function e(){var t,r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:return t=e.sent,e.next=5,(0,O.Y2)(t);case 5:r=e.sent,navigator.clipboard.writeText(r),b.ZP.success("复制成功");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){H(!0),fetch("https://npm.elemecdn.com/xingzhengqu@2.0.8/data/world_polygon.pbf").then((function(e){return e.arrayBuffer()})).then((function(e){var t=P.decode(new(L())(e));n({data:t,parser:{type:"geojson"}}),H(!1)})),fetch("https://npm.elemecdn.com/xingzhengqu@2.0.8/data/world_line.pbf").then((function(e){return e.arrayBuffer()})).then((function(e){var t=P.decode(new(L())(e));u(t);var r={type:"FeatureCollection",features:t.features.filter((function(e){var t;return-1!==["0","2","7","9"].indexOf(null===(t=e.properties)||void 0===t?void 0:t.type.replace("\0",""))}))},n={type:"FeatureCollection",features:t.features.filter((function(e){var t;return-1!==["1","8","10","11"].indexOf(null===(t=e.properties)||void 0===t?void 0:t.type.replace("\0",""))}))};F({data:r,parser:{type:"geojson"}}),B({data:n,parser:{type:"geojson"}})}))}),[]),(0,J.jsx)(S.Z,{spinning:U,tip:"数据加载中……",children:(0,J.jsxs)("div",{style:{display:"flex"},children:[(0,J.jsxs)(j.$2,y()(y()({},A.Tt),{},{style:{height:"calc(100vh - 240px)",width:"calc(100% - ".concat(I.width,"px)")},children:[(0,J.jsx)(j.Co,y()(y()({},A.qX),{},{source:r,id:"myChoroplethLayer"})),(0,J.jsx)(j.Ie,y()(y()({},A.zD),{},{source:h,id:"lineLayer"})),(0,J.jsx)(j.Ie,y()(y()({},A._1),{},{source:D,id:"lineLayer"})),(0,J.jsx)(j.Kh,{closeButton:!1,closeOnClick:!1,anchor:"bottom-left",trigger:"hover",items:[{layer:"myChoroplethLayer",fields:[{field:"NAME_CHN",formatField:function(){return"名称"}},{field:"SOC",formatField:"行政编号"}]}]}),(0,J.jsx)(j.w3,{position:"bottomright"})]})),(0,J.jsxs)("div",{className:"panel",style:{width:I.width},children:[(0,J.jsx)("div",{className:"toggle",children:(0,J.jsx)(g.Z,{title:"展开收起",rotate:I.rotate,className:"icon",onClick:function(){K(20===I.width?z:_)}})}),(0,J.jsxs)("div",{style:{paddingLeft:"10px",display:I.display},children:[(0,J.jsx)(k.Z,{style:{margin:"8px 0"}}),(0,J.jsxs)(C.Z,{title:"当前地区",children:[(0,J.jsx)(C.Z.Item,{style:{width:"180px"},label:"名称",children:$.currentName}),(0,J.jsx)(C.Z.Item,{label:"adcode",children:$.currentCode})]}),(0,J.jsxs)(N.Z,{className:"row",children:[(0,J.jsx)(M.Z,{span:6,className:"label",children:"面数据:"}),(0,J.jsxs)(M.Z,{span:18,style:{textAlign:"right"},children:[(0,J.jsx)(V.Z,{value:$.datatype,style:{width:120},size:Q,options:A.y2,onChange:te.bind(null,"datatype")}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(m.Z,{}),size:Q,onClick:ne.bind(null,"fill")}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(x.Z,{}),onClick:ae.bind(null,"fill"),size:Q})]})]}),(0,J.jsxs)(N.Z,{className:"row",children:[(0,J.jsx)(M.Z,{span:6,className:"label",children:"国界数据:"}),(0,J.jsxs)(M.Z,{span:18,style:{textAlign:"right"},children:[(0,J.jsx)(V.Z,{value:$.datatype,style:{width:120},size:Q,options:A.y2,onChange:te.bind(null,"datatype","line")}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(m.Z,{}),size:Q,onClick:ne.bind(null,"line")}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(x.Z,{}),onClick:ae.bind(null,"fill"),size:Q})]})]}),(0,J.jsxs)(N.Z,{className:"row",children:[(0,J.jsx)(M.Z,{span:6,className:"label",children:"SVG下载:"}),(0,J.jsxs)(M.Z,{span:18,style:{textAlign:"right"},children:[(0,J.jsxs)(Z.Z,{style:{pointerEvents:"none",width:120},children:[" ",(0,J.jsx)(w.Z,{})," SVG"," "]}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(m.Z,{}),size:Q,onClick:ie}),(0,J.jsx)(Z.Z,{type:"primary",style:{marginLeft:"8px"},icon:(0,J.jsx)(x.Z,{}),onClick:oe,size:Q})]})]}),(0,J.jsx)("div",{className:"originData",style:{},children:(0,J.jsxs)("div",{children:[(0,J.jsx)("div",{children:"数据来源："}),(0,J.jsx)("a",{href:"https://lbs.amap.com/api/jsapi-v2/guide/layers/districtlayer",children:"高德地图"})]})})]})]})]})})},T=function(){return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i.h,{}),(0,J.jsx)(o.Z,{}),(0,J.jsx)(G,{}),(0,J.jsx)(n.$,{})]})}},86125:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(51655),i=r.n(n),a=r(85570),o=(r(65943),r(41398),r(46228)),l=function(e){var t=e.url,r=e.title,n=e.to;return(0,o.jsxs)(a.rU,{className:"dumi-default-logo",to:n,children:[(0,o.jsx)("img",{src:t,alt:r}),r]})},s=(r(72578),function(e){var t=(0,a.TH)().pathname,r=e.nav;return(0,o.jsx)("ul",{className:"dumi-default-navbar",children:r.map((function(e){return(0,o.jsx)("li",{children:/^(\w+:)\/\/|^(mailto|tel):/.test(e.link)?(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.title}):(0,o.jsx)(a.rU,i()(i()({to:e.link},t.startsWith(e.activePath||e.link)?{className:"active"}:{}),{},{children:e.title}))},e.link)}))})}),u=(r(11387),{nav:[{title:"中国地图",order:1,link:"../custom/tools/map",activePath:"/custom/tools/map"},{title:"世界地图",order:1,link:"../custom/tools/worldmap",activePath:"/custom/tools/worldmap"},{title:"数据 SDK",order:2,link:"../custom/tools/sdk",activePath:"/custom/tools/sdk"},{title:"数据服务",order:3,link:"../custom/tools/service",activePath:"/custom/tools/service"}],url:"https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uQbXRLw_Q2UAAAAAAAAAAAAADmJ7AQ/original",to:"/custom/tools",title:"GISDATA"}),c=function(){return(0,o.jsx)("div",{className:"dumi-default-header",children:(0,o.jsxs)("div",{className:"dumi-default-header-content",style:{height:"60px"},children:[(0,o.jsx)("section",{className:"dumi-default-header-left",children:(0,o.jsx)(l,i()({},u))}),(0,o.jsx)("section",{className:"dumi-default-header-right",children:(0,o.jsx)(s,{nav:u.nav})})]})})}},91012:function(e,t,r){r.d(t,{Ay:function(){return g},B4:function(){return w},B8:function(){return h},Fk:function(){return v},Ho:function(){return x},Tt:function(){return d},_1:function(){return c},q4:function(){return m},qX:function(){return s},vc:function(){return f},wc:function(){return p},y2:function(){return y},zD:function(){return u}});var n=r(38084),i=r.n(n),a=r(11440),o=r.n(a),l=r(16118),s={autoFit:!0,fillColor:"#377eb8",opacity:.3,strokeColor:"blue",lineWidth:.5,lineOpacity:1,state:{active:{strokeColor:"green",lineWidth:1.5,lineOpacity:.8},select:{strokeColor:"red",lineWidth:1.5,lineOpacity:.8}}},u={shape:"line",size:.8,color:{scale:{type:"cat",domain:["0","2","7","9"]},field:"type",value:["#084081","#09f","#377eb8","#e41a1c"]},style:{opacity:.8,lineType:"solid"}},c={shape:"line",size:.8,color:{scale:{type:"cat",domain:["1","8","10","11"]},field:"type",value:["#084081","#e41a1c","#377eb8","#09f"]},style:{opacity:1,lineType:"dash",dashArray:[1,1]}},f={mapType:"Gaode",mapOptions:{style:"light",center:[120.210792,30.246026],zoom:3,maxZoom:10,doubleClickZoom:!1}},d={mapType:"Gaode",mapOptions:{style:"light",center:[120.210792,30.246026],zoom:3,maxZoom:5,doubleClickZoom:!1}},p=function(){return[{layer:"myChoroplethLayer",fields:[{field:"name",formatField:function(){return"名称"}},{field:"adcode",formatField:"行政编号"}]}]},y=[{key:"GeoJSON",value:"GeoJSON",label:"GeoJSON"},{key:"TopoJSON",value:"TopoJSON",label:"TopoJSON"},{key:"JSON",value:"JSON",label:"JSON"},{key:"CSV",value:"CSV",label:"CSV"},{key:"KML",value:"KML",label:"KML"}],h=[{value:"country",label:"国家"},{value:"province",label:"省"},{value:"city",label:"市"},{value:"county",label:"县"}],v={DataVSource:[{value:"areas_v3",label:"areas_v3"},{value:"areas_v2",label:"areas_v2"}],RDBSource:[{value:"2023",label:"2023"},{value:"2022",label:"2022"},{value:"2021",label:"2021"},{value:"2020",label:"2020"},{value:"2019",label:"2019"},{value:"2018",label:"2018"},{value:"2017",label:"2017"},{value:"2016",label:"2016"},{value:"2015",label:"2015"}]},g={sourceType:"RDBSource",sourceVersion:"2023.0.8",currentLevel:"country",currentName:"中国",currentCode:1e5,hasSubChildren:!0,childrenLevel:"province",datatype:"GeoJSON",dataLevel:"country"},m=function(e){switch(e){case"country":return"province";case"province":return"city";case"city":case"county":return"county";default:return}},x=function(e){switch(e){case"country":return["province","city","county"];case"province":return["city","county"];case"city":return["county"];default:return[]}},w=function(){var e=o()(i()().mark((function e(t){var r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new l.RDBSource({version:"1"}),e.abrupt("return",r.getData({level:t}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},85743:function(e,t,r){r.d(t,{O6:function(){return c},Y2:function(){return u}});var n=r(54427),i=r(53757),a=r.n(i),o=(r(51441),r(76257)),l=r.n(o),s=r(36329);function u(e){var t=(0,n.Z)(e).bbox||[-180,-90,180,90],r=a()({mapExtent:{left:t[0],bottom:t[1],right:t[2],top:t[3]},precision:8,attributes:["properties.adcode","properties.name",{property:"stroke",value:"blue",type:"static"},{property:"fill",value:"#aaa",type:"static"}],viewportSize:{width:1e3,height:800},fitToViewBox:!0,outputFormat:"svg"}).convert(e).join();return'<svg width="'.concat(1e3,'" height="').concat(800,'" xmlns="http://www.w3.org/2000/svg"> ').concat(r,"</svg>")}function c(e,t,r){var n="SVG"===r?u(t):"TopoJSON"===r?function(e){return JSON.stringify(s.MM({data:e}))}(t):"GeoJSON"===r?function(e){return JSON.stringify(e)}(t):"CSV"===r?function(e){var t=e.features.map((function(e){return e.properties}));if(0!==t.length){var r=Object.keys(t[0]||{}),n=[r.join(",")];return t.forEach((function(e){var t=r.map((function(t){return e[t]}));n.push(t.join(","))})),n.join("\n")}}(t):"JSON"===r?function(e){var t=e.features.map((function(e){return e.properties}));return JSON.stringify(t)}(t):"KML"===r?function(e){return l()(e)}(t):"",i=document.createElement("a");i.download="".concat(e,".").concat(r.toLowerCase()),i.href="data:text/json;charset=utf-8,".concat(encodeURIComponent(n)),i.target="_blank",i.rel="noreferrer",i.click()}},66016:function(){},42260:function(e){var t,r,n,i,a;e.exports=function(e){i=2,a=Math.pow(10,6),n=null,t=[],r=[];var o=e.readFields(l,{});return t=null,o};var o=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"];function l(e,r,n){1===e?t.push(n.readString()):2===e?i=n.readVarint():3===e?a=Math.pow(10,n.readVarint()):4===e?function(e,t){t.type="FeatureCollection",t.features=[],e.readMessage(c,t)}(n,r):5===e?s(n,r):6===e&&u(n,r)}function s(e,t){t.type="Feature";var r=e.readMessage(f,t);return"geometry"in r||(r.geometry=null),r}function u(e,t){return t.type="Point",e.readMessage(d,t)}function c(e,t,n){1===e?t.features.push(s(n,{})):13===e?r.push(p(n)):15===e&&y(n,t)}function f(e,t,n){1===e?t.geometry=u(n,{}):11===e?t.id=n.readString():12===e?t.id=n.readSVarint():13===e?r.push(p(n)):14===e?t.properties=y(n,{}):15===e&&y(n,t)}function d(e,t,i){1===e?t.type=o[i.readVarint()]:2===e?n=i.readPackedVarint():3===e?function(e,t,r){"Point"===r?e.coordinates=function(e){var t=e.readVarint()+e.pos,r=[];for(;e.pos<t;)r.push(e.readSVarint()/a);return r}(t):"MultiPoint"===r||"LineString"===r?e.coordinates=v(t):"MultiLineString"===r?e.coordinates=g(t):"Polygon"===r?e.coordinates=g(t,!0):"MultiPolygon"===r&&(e.coordinates=function(e){var t=e.readVarint()+e.pos;if(!n)return[[h(e,t,null,!0)]];for(var r=[],i=1,a=0;a<n[0];a++){for(var o=[],l=0;l<n[i];l++)o.push(h(e,t,n[i+1+l],!0));i+=n[i]+1,r.push(o)}return n=null,r}(t))}(t,i,t.type):4===e?(t.geometries=t.geometries||[],t.geometries.push(u(i,{}))):13===e?r.push(p(i)):15===e&&y(i,t)}function p(e){for(var t=e.readVarint()+e.pos,r=null;e.pos<t;){var n=e.readVarint()>>3;1===n?r=e.readString():2===n?r=e.readDouble():3===n?r=e.readVarint():4===n?r=-e.readVarint():5===n?r=e.readBoolean():6===n&&(r=JSON.parse(e.readString()))}return r}function y(e,n){for(var i=e.readVarint()+e.pos;e.pos<i;)n[t[e.readVarint()]]=r[e.readVarint()];return r=[],n}function h(e,t,r,n){var o,l,s=0,u=[],c=[];for(l=0;l<i;l++)c[l]=0;for(;r?s<r:e.pos<t;){for(o=[],l=0;l<i;l++)c[l]+=e.readSVarint(),o[l]=c[l]/a;u.push(o),s++}return n&&u.push(u[0]),u}function v(e){return h(e,e.readVarint()+e.pos)}function g(e,t){var r=e.readVarint()+e.pos;if(!n)return[h(e,r,null,t)];for(var i=[],a=0;a<n.length;a++)i.push(h(e,r,n[a],t));return n=null,i}},94763:function(e){e.exports=function(e,l){t={},n=[],r=0,i=0,a=1,s(e),a=Math.min(a,o);for(var u=Math.ceil(Math.log(a)/Math.LN10),c=0;c<n.length;c++)l.writeStringField(1,n[c]);2!==i&&l.writeVarintField(2,i);6!==u&&l.writeVarintField(3,u);"FeatureCollection"===e.type?l.writeMessage(4,p,e):"Feature"===e.type?l.writeMessage(5,y,e):l.writeMessage(6,h,e);return t=null,l.finish()};var t,r,n,i,a,o=1e6,l={Point:0,MultiPoint:1,LineString:2,MultiLineString:3,Polygon:4,MultiPolygon:5,GeometryCollection:6};function s(e){var t,r;if("FeatureCollection"===e.type)for(t=0;t<e.features.length;t++)s(e.features[t]);else if("Feature"===e.type)for(r in null!==e.geometry&&s(e.geometry),e.properties)d(r);else if("Point"===e.type)f(e.coordinates);else if("MultiPoint"===e.type)c(e.coordinates);else if("GeometryCollection"===e.type)for(t=0;t<e.geometries.length;t++)s(e.geometries[t]);else if("LineString"===e.type)c(e.coordinates);else if("Polygon"===e.type||"MultiLineString"===e.type)u(e.coordinates);else if("MultiPolygon"===e.type)for(t=0;t<e.coordinates.length;t++)u(e.coordinates[t]);for(r in e)j(r,e.type)||d(r)}function u(e){for(var t=0;t<e.length;t++)c(e[t])}function c(e){for(var t=0;t<e.length;t++)f(e[t])}function f(e){i=Math.max(i,e.length);for(var t=0;t<e.length;t++)for(;Math.round(e[t]*a)/a!==e[t]&&a<o;)a*=10}function d(e){void 0===t[e]&&(n.push(e),t[e]=r++)}function p(e,t){for(var r=0;r<e.features.length;r++)t.writeMessage(1,y,e.features[r]);v(e,t,!0)}function y(e,t){null!==e.geometry&&t.writeMessage(1,h,e.geometry),void 0!==e.id&&("number"==typeof e.id&&e.id%1==0?t.writeSVarintField(12,e.id):t.writeStringField(11,e.id)),e.properties&&v(e.properties,t),v(e,t,!0)}function h(e,t){t.writeVarintField(1,l[e.type]);var r=e.coordinates;if("Point"===e.type)!function(e,t){for(var r=[],n=0;n<i;n++)r.push(Math.round(e[n]*a));t.writePackedSVarint(3,r)}(r,t);else if("MultiPoint"===e.type)m(r,t);else if("LineString"===e.type)m(r,t);else if("MultiLineString"===e.type)x(r,t);else if("Polygon"===e.type)x(r,t,!0);else if("MultiPolygon"===e.type)!function(e,t){var r,n,i=e.length;if(1!==i||1!==e[0].length){var a=[i];for(r=0;r<i;r++)for(a.push(e[r].length),n=0;n<e[r].length;n++)a.push(e[r][n].length-1);t.writePackedVarint(2,a)}var o=[];for(r=0;r<i;r++)for(n=0;n<e[r].length;n++)w(o,e[r][n],!0);t.writePackedSVarint(3,o)}(r,t);else if("GeometryCollection"===e.type)for(var n=0;n<e.geometries.length;n++)t.writeMessage(4,h,e.geometries[n]);v(e,t,!0)}function v(e,r,n){var i=[],a=0;for(var o in e)n&&j(o,e.type)||(r.writeMessage(13,g,e[o]),i.push(t[o]),i.push(a++));r.writePackedVarint(n?15:14,i)}function g(e,t){if(null!==e){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(5,e):"object"===r?t.writeStringField(6,JSON.stringify(e)):"number"===r&&(e%1!=0?t.writeDoubleField(2,e):e>=0?t.writeVarintField(3,e):t.writeVarintField(4,-e))}}function m(e,t){var r=[];w(r,e),t.writePackedSVarint(3,r)}function x(e,t,r){var n,i=e.length;if(1!==i){var a=[];for(n=0;n<i;n++)a.push(e[n].length-(r?1:0));t.writePackedVarint(2,a)}var o=[];for(n=0;n<i;n++)w(o,e[n],r);t.writePackedSVarint(3,o)}function w(e,t,r){var n,o,l=t.length-(r?1:0),s=new Array(i);for(o=0;o<i;o++)s[o]=0;for(n=0;n<l;n++)for(o=0;o<i;o++){var u=Math.round(t[n][o]*a)-s[o];e.push(u),s[o]+=u}}function j(e,t){if("type"===e)return!0;if("FeatureCollection"===t){if("features"===e)return!0}else if("Feature"===t){if("id"===e||"properties"===e||"geometry"===e)return!0}else if("GeometryCollection"===t){if("geometries"===e)return!0}else if("coordinates"===e)return!0;return!1}},19202:function(e,t,r){t.encode=r(94763),t.decode=r(42260)}}]);