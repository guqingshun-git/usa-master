(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-dialog-dialog-basic"],{"0433":function(t,n,o){"use strict";o.r(n);var e=o("f69f"),i=o("e338");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(a);var l=o("828b"),c=Object(l["a"])(i["default"],e["b"],e["c"],!1,null,"c1cd9650",null,!1,e["a"],void 0);n["default"]=c.exports},e338:function(t,n,o){"use strict";o.r(n);var e=o("ea8f"),i=o.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},ea8f:function(t,n,o){"use strict";var e;o("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;uni.vk;var i={data:function(){return{dialog:{}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=this,e.vk,e.options=t,e.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){}},filters:{},computed:{}};n.default=i},f69f:function(t,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"page"},[o("vk-data-page-header",{attrs:{title:"Dialog 弹窗",subTitle:"基础用法"}}),o("v-uni-view",{staticClass:"page-body"},[o("el-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.dialog.show1=!0}}},[t._v("显示弹窗1")]),o("el-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.dialog.show2=!0}}},[t._v("显示弹窗2")])],1),o("v-uni-view",{staticClass:"page-dialog"},[o("vk-data-dialog",{attrs:{title:"标题1",width:"500px",top:"14vh",center:!0,"close-on-click-modal":!0},scopedSlots:t._u([{key:"footer",fn:function(){return[o("el-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.dialog.show1=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.dialog.show1=!1}}},[t._v("确 定")])]},proxy:!0}]),model:{value:t.dialog.show1,callback:function(n){t.$set(t.dialog,"show1",n)},expression:"dialog.show1"}},[t._v("这里是自定义内容")]),o("vk-data-dialog",{attrs:{title:"标题2",width:"500px",top:"14vh","close-on-click-modal":!0},scopedSlots:t._u([{key:"footer",fn:function(n){var e=n.close;return[o("el-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),e.apply(void 0,arguments)}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),e.apply(void 0,arguments)}}},[t._v("确 定")])]}}]),model:{value:t.dialog.show2,callback:function(n){t.$set(t.dialog,"show2",n)},expression:"dialog.show2"}},[t._v("这里是自定义内容")])],1)],1)},i=[]}}]);