webpackJsonp([1,359],{93:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},p=t(163),o=s(p),c=t(186),l=s(c),u=t(100),r=s(u),i=e({},o["default"]);i.lang=e({placeholder:"Select date",rangePlaceholder:["Start date","End date"]},l["default"]),i.timePickerLocale=e({},r["default"]),a["default"]=i,n.exports=a["default"]},100:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},p=t(189),o=s(p),c=e({placeholder:"Select a time"},o["default"]);a["default"]=c,n.exports=a["default"]},171:function(n,a,t){"use strict";n.exports=t(93)},238:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(300),p=s(e),o=t(93),c=s(o),l=t(100),u=s(l),r=t(171),i=s(r);a["default"]={Pagination:p["default"],DatePicker:c["default"],TimePicker:u["default"],Calendar:i["default"],Table:{filterTitle:"Filter Menu",filterConfirm:"OK",filterReset:"Reset",emptyText:"No Data"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{notFoundContent:"Not Found",searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items"},Select:{notFoundContent:"Not Found"}},n.exports=a["default"]},300:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={items_per_page:"/page",jump_to:"Goto",page:"",first_page:"First Page",last_page:"Last Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages"},n.exports=a["default"]},693:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(240),t(239)),p=s(e),o=(t(61),t(60)),c=s(o),l=t(1),u=s(l),r=t(2),i=(s(r),t(238)),d=s(i);n.exports={content:[["p","\u7528 ",["code","LocaleProvider"]," \u5305\u88f9\u4f60\u7684\u5e94\u7528\uff0c\u5e76\u5f15\u7528\u5bf9\u5e94\u7684\u8bed\u8a00\u5305\u3002"]],meta:{order:1,title:"\u56fd\u9645\u5316",filename:"components/locale-provider/demo/basic.md",id:"components-locale-provider-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> LocaleProvider <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> enUS <span class="token keyword" >from</span> <span class="token string" >\'antd/lib/locale-provider/en_US\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >App</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showSizeChanger</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>LocaleProvider</span> <span class="token attr-name" >locale</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>enUS<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>LocaleProvider</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{defaultCurrent:1,total:50,showSizeChanger:!0}))}return u["default"].createElement(p["default"],{locale:d["default"]},u["default"].createElement(n,null))}}}});