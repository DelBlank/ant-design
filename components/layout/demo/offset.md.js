webpackJsonp([236,359],{687:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(35),s(34)),o=t(p),e=(s(24),s(23)),c=t(e),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u5217\u504f\u79fb\u3002"],["p","\u4f7f\u7528 ",["code","offset"]," \u53ef\u4ee5\u5c06\u5217\u5411\u53f3\u4fa7\u504f\u3002\u4f8b\u5982\uff0c",["code","offset={4}"]," \u5c06\u5143\u7d20\u5411\u53f3\u4fa7\u504f\u79fb\u4e86 4 \u4e2a\u5217\uff08column\uff09\u7684\u5bbd\u5ea6\u3002"]],meta:{order:2,title:"\u5de6\u53f3\u504f\u79fb",filename:"components/layout/demo/offset.md",id:"components-layout-demo-offset"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offset</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offset</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span> <span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token operator" >-</span>offset<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offset</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-6</span> <span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token operator" >-</span>offset<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >12</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offset</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >6</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-12</span> <span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token operator" >-</span>offset<span class="token number" >-6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(o["default"],null,u["default"].createElement(c["default"],{span:8},".ant-col-8"),u["default"].createElement(c["default"],{span:8,offset:8},".ant-col-8")),u["default"].createElement(o["default"],null,u["default"].createElement(c["default"],{span:6,offset:6},".ant-col-6 .ant-col-offset-6"),u["default"].createElement(c["default"],{span:6,offset:6},".ant-col-6 .ant-col-offset-6")),u["default"].createElement(o["default"],null,u["default"].createElement(c["default"],{span:12,offset:6},".ant-col-12 .ant-col-offset-6")))}}}});