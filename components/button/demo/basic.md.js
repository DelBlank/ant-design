webpackJsonp([332,359],{589:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var p=(t(7),t(6)),e=s(p),o=t(1),c=s(o),u=t(2);s(u);n.exports={content:{"zh-CN":[["p","\u6309\u94ae\u6709\u56db\u79cd\u7c7b\u578b\uff1a\u4e3b\u6309\u94ae\u3001\u6b21\u6309\u94ae\u3001\u5e7d\u7075\u6309\u94ae\u3001\u865a\u7ebf\u6309\u94ae\u3002"],["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","type"]," \u4e3a ",["code","primary"]," ",["code","ghost"]," ",["code","dashed"]," \u53ef\u5206\u522b\u521b\u5efa\u4e3b\u6309\u94ae\u3001\u5e7d\u7075\u6309\u94ae\u3001\u865a\u7ebf\u6309\u94ae\uff0c\u82e5\u4e0d\u8bbe\u7f6e ",["code","type"]," \u503c\u5219\u4e3a\u6b21\u6309\u94ae\u3002\u4e0d\u540c\u7684\u6837\u5f0f\u53ef\u4ee5\u7528\u6765\u533a\u522b\u5176\u91cd\u8981\u7a0b\u5ea6\u3002"],["p","\u4e3b\u6309\u94ae\u548c\u6b21\u6309\u94ae\u53ef\u72ec\u7acb\u4f7f\u7528\uff0c\u5e7d\u7075\u6309\u94ae\u7528\u4e8e\u548c\u4e3b\u6309\u94ae\u7ec4\u5408\u3002\u9700\u8981\u5f3a\u5f15\u5bfc\u7528\u4e3b\u6309\u94ae\uff0c\u5207\u8bb0\u4e3b\u6309\u94ae\u5728\u540c\u4e00\u4e2a\u64cd\u4f5c\u533a\u57df\u6700\u591a\u51fa\u73b0\u4e00\u6b21\u3002"]],"en-US":[["p","There are primary button, default button, ghost button and dashed button in antd."],["p",["code","type"]," can be set as ",["code","primary"]," or ",["code","ghost"]," or ",["code","dashed"],", in order to create primary button or ghost button or dashed button. If nothing is provided to ",["code","type"],", we will get default button. Users can tell the significance of button from it's appearance."],["p","Primary button and default button can be used without other button, but ghost button must be used with primary button."]]},meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Type"},filename:"components/button/demo/basic.md",id:"components-button-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Primary<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>Default<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Ghost<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dashed<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Dashed<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{type:"primary"},"Primary"),c["default"].createElement(e["default"],null,"Default"),c["default"].createElement(e["default"],{type:"ghost"},"Ghost"),c["default"].createElement(e["default"],{type:"dashed"},"Dashed"))}}}});