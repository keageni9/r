(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},1543:function(e,t,n){"use strict";n.d(t,{y:function(){return g}});var l=n(5893),s=n(7294),r=n(4874),i=n(682),o=n(5005),a=n(5697),c=n.n(a),u=["color","size","title"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var p=(0,s.forwardRef)(function(e,t){var n=e.color,l=e.size,r=e.title,i=function(e,t){if(null==e)return{};var n,l,s=function(e,t){if(null==e)return{};var n,l,s={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,u);return s.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:n},i),r?s.createElement("title",null,r):null,s.createElement("path",{fillRule:"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}))});p.propTypes={color:c().string,size:c().oneOfType([c().string,c().number]),title:c().string},p.defaultProps={color:"currentColor",size:"1em",title:null};var m=n(2133),h=n(7544),v=n(1419),f=n(2178),x=n(2242);let b=e=>{let{show:t,setShowing:n,title:s,placement:i,children:o}=e;return(0,l.jsxs)(r.Z,{show:t,responsive:h.wN,onHide:()=>n(!1),scroll:!0,className:"main-panel w-auto btd6-panel blue",restoreFocus:!1,placement:i,children:[(0,l.jsx)(r.Z.Header,{className:"pt-2 pb-0 px-3",closeButton:!0,closeVariant:"white",children:(0,l.jsx)(r.Z.Title,{children:s})}),(0,l.jsx)(r.Z.Body,{className:"py-2 px-3 d-block btd6-panel blue-insert-round",children:o})]})},g=e=>{var t,n;let{data:r,sidebar:a,noToc:c,noTitle:u,description:d,children:g}=e,j=!c&&(null==r?void 0:null===(t=r.tableOfContentsHtml)||void 0===t?void 0:t.includes("li")),[w,N]=(0,s.useState)(!1),[y,Z]=(0,s.useState)(!1),O=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==r?void 0:r.contentHtml).result,[null==r?void 0:r.contentHtml]),_=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==a?void 0:a.contentHtml).result,[null==a?void 0:a.contentHtml]),H=(0,s.useMemo)(()=>(0,f.vn)().processSync(null==r?void 0:r.tableOfContentsHtml).result,[null==r?void 0:r.tableOfContentsHtml]);return(0,l.jsxs)(h.ZP,{children:[(0,l.jsx)(x.Z,{title:null==r?void 0:r.title,description:null!==(n=null==r?void 0:r.subtitle)&&void 0!==n?n:d}),(0,l.jsxs)("div",{className:"d-flex flex-grow-1",children:[(0,l.jsx)("div",{className:"d-flex flex-1 justify-content-end align-items-start pe-".concat(h.wN,"-4 ps-").concat(h.wN,"-4"),children:j&&(0,l.jsx)(b,{title:"Table of Contents",show:w,setShowing:N,placement:"start",children:H})}),(0,l.jsx)("div",{className:"d-flex flex-1 justify-content-start align-items-start ps-".concat(h.wN,"-4 pe-").concat(h.wN,"-4 order-1"),children:a&&(0,l.jsx)(b,{show:y,setShowing:Z,title:"Wiki",placement:"end",children:_})}),(0,l.jsx)(v.w,{}),(0,l.jsxs)(i.Z,{fluid:h.wN,className:"main-panel py-2 px-3 d-flex flex-column btd6-panel blue",children:[!(u&&!j&&!a)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"my-1 btd6-panel blue-insert-round",children:[(0,l.jsxs)("h1",{className:"d-flex",children:[(0,l.jsx)("div",{className:"flex-1 d-".concat(h.wN,"-none text-start"),children:j&&(0,l.jsx)(o.Z,{className:"d-".concat(h.wN,"-none me-2 btd6-button blue p-2"),variant:"outline-light",onClick:()=>N(!0),children:(0,l.jsx)(p,{size:"2rem"})})}),(0,l.jsx)("div",{className:"text-center text-".concat(h.wN,"-start mt-1 mt-").concat(h.wN,"-start"),children:null==r?void 0:r.title}),(0,l.jsx)("div",{className:"flex-1 d-".concat(h.wN,"-none text-end"),children:a&&(0,l.jsx)(o.Z,{className:"d-".concat(h.wN,"-none ms-auto btd6-button blue p-2"),variant:"outline-light",onClick:()=>Z(!0),children:(0,l.jsx)(m.Z,{size:"2rem"})})})]}),(null==r?void 0:r.subtitle)&&(0,l.jsx)("div",{children:r.subtitle})]}),(0,l.jsx)("hr",{})]}),g||(0,l.jsx)("div",{className:"d-block btd6-panel blue-insert-round",children:O})]})]})]})}},2178:function(e,t,n){"use strict";n.d(t,{c8:function(){return N},vn:function(){return y}});var l=n(5893),s=n(5402),r=n(3301),i=n(2398),o=n(3398),a=n(4912),c=n(983),u=n(2935),d=n(1810),p=n(3570),m=n(6100),h=n(6861),v=n(7685),f=n(7294),x=n(1664),b=n.n(x),g=n(9523);n(6362);let j=(e,t)=>(e.startsWith("https://github.com/gurrenm3/BTD-Mod-Helper/wiki")&&(e=(e=e.replace("https://github.com/gurrenm3/BTD-Mod-Helper","")).replace(encodeURIComponent("[3.0]-"),"").replace(encodeURIComponent("-(ModHelperComponents)"),"")),!t||e.startsWith("http")||(e.startsWith("/")||(e="/"+e),t.endsWith("/")&&(t=t.substring(0,t.length-1)),e.startsWith(t)||(e=t+e)),e.startsWith("http")||(e=e.replace(/\.md/,"")),e),w=(e,t)=>({rewrite:n=>{var l,s,r,i;if("element"===n.type&&n.properties){if("code"===n.tagName&&(n.properties.className=[...new Set([...null!==(i=n.properties.className)&&void 0!==i?i:[],"hljs"])]),"a"===n.tagName&&(null===(l=n.properties)||void 0===l?void 0:l.href)){let t=n.properties.href;n.properties.href=j(t,e)}if("img"===n.tagName&&(null===(s=n.properties)||void 0===s?void 0:s.src)){let e=n.properties.src;n.properties.src=j(e,t)}"img"===n.tagName&&(null===(r=n.properties)||void 0===r?void 0:r.src)==="https://raw.githubusercontent.com/gurrenm3/BTD-Mod-Helper/master/banner.png"&&(n.tagName="div")}}}),N=(e,t)=>(0,s.j)().use(r.Z).use(i.Z,{allowDangerousHtml:!0}).use(o.Z).use(a.Z,{detect:!0,ignoreMissing:!0,aliases:{json:"json5"}}).use(c.Z).use(u.Z,{properties:{"aria-hidden":"true",tabIndex:-1,className:[""]}}).use(d.Z,w(e,t)).use(p.Z),y=e=>(0,m.a)().use(h.Z,{fragment:!0}).use(e?g.Z:()=>{}).use(v.Z,{createElement:f.createElement,Fragment:f.Fragment,components:{a:e=>e.href?(0,l.jsx)(b(),{...e}):(0,l.jsx)("a",{...e})}})},85:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var l=n(5893);n(7294);var s=n(1543);let r=e=>{var t;let{data:n}=e;return(0,l.jsx)(s.y,{data:n,noToc:!0,noTitle:!0,children:(0,l.jsx)("div",{className:"p-2 btd6-panel blue-insert-round mt-1",dangerouslySetInnerHTML:{__html:null!==(t=null==n?void 0:n.contentHtml)&&void 0!==t?t:""}})})};var i=!0;t.default=r}},function(e){e.O(0,[350,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);