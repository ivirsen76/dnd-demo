(this["webpackJsonpdnd-demo"]=this["webpackJsonpdnd-demo"]||[]).push([[0],{23:function(e,t,o){},42:function(e,t,o){"use strict";o.r(t);var s=o(3),i=o(1),n=o.n(i),r=o(12),d=o.n(r),j=(o(23),o(10)),c=o(15),f=o(44),a=o(45),l="card",u={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},g=n.a.forwardRef((function(e,t){var o=e.text,s=(e.isDragging,e.connectDragSource),r=e.connectDropTarget,d=Object(i.useRef)(null),f=Object(i.useState)(!1),a=Object(c.a)(f,2),l=a[0],g=a[1];s(d),r(d);return Object(i.useImperativeHandle)(t,(function(){return{getNode:function(){return d.current}}})),Object(i.useEffect)((function(){var e,t=d.current,o=function(){g(!1),e=setTimeout((function(){g(!0)}),120)},s=function(){clearTimeout(e),l&&g(!1)},i=function(){clearTimeout(e),l&&g(!1)};return t.addEventListener("touchstart",o,!1),t.addEventListener("touchmove",s,!1),t.addEventListener("touchend",i,!1),t.addEventListener("touchcancel",i,!1),function(){t.removeEventListener("touchstart",o),t.removeEventListener("touchmove",s),t.removeEventListener("touchend",i),t.removeEventListener("touchcancel",i)}}),[]),n.a.createElement("div",{ref:d,style:Object.assign(Object.assign({},u),Object(j.a)({opacity:1},l?{backgroundColor:"#ccc"}:{}))},o)})),m=Object(f.a)(l,{hover:function(e,t,o){if(!o)return null;var s=o.getNode();if(!s)return null;var i=t.getItem().index,n=e.index;if(i!==n){var r=s.getBoundingClientRect(),d=(r.bottom-r.top)/2,j=t.getClientOffset().y-r.top;i<n&&j<d||i>n&&j>d||(e.moveCard(i,n),t.getItem().index=n)}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(a.a)(l,{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(g)),b=o(27),k=o(18),v=o.n(k),x=o(26),h=o.n(x),O={width:200},p=function(){var e=Object(i.useState)([{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it (note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"},{id:8,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"},{id:9,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"},{id:10,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"},{id:11,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"},{id:12,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"},{id:13,text:"Lorerm sjglsj klsjdfkl jsklf skljfl ksjd fl jioweiuoi sjfgoiuwoi sjmoddiosoj fjsodf osjdof osjof sojfo sdojo"}]),t=Object(c.a)(e,2),o=t[0],n=t[1],r=function(e,t){var s=o[e];n(h()(o,{$splice:[[e,1],[t,0,s]]}))};return v.a.backends[1].options=Object(j.a)(Object(j.a)({},v.a.backends[1].options),{},{delayTouchStart:120,ignoreContextMenu:!0}),Object(s.jsx)(b.a,{options:v.a,children:Object(s.jsx)("div",{style:O,children:o.map((function(e,t){return Object(s.jsx)(m,{index:t,id:e.id,text:e.text,moveCard:r},e.id)}))})})};var w=function(){return Object(i.useEffect)((function(){document.body.classList.add("disable-select")}),[]),Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"description",children:"With old DnD"}),Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(p,{})})]})})},L=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,46)).then((function(t){var o=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),s(e),i(e),n(e),r(e)}))};d.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),L()}},[[42,1,2]]]);
//# sourceMappingURL=main.f997439c.chunk.js.map