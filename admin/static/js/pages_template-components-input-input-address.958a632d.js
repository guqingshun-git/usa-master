(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-input-input-address"],{"0941":function(t,e,a){"use strict";a.r(e);var n=a("22db"),s=a("e90f");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);var r=a("828b"),d=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"21a153cd",null,!1,n["a"],void 0);e["default"]=d.exports},"22db":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("vk-data-page-header",{attrs:{title:"Input 表单输入",subTitle:"address 省市区选择"}}),a("v-uni-view",{staticClass:"page-body"},[a("v-uni-view",{staticClass:"tips"},[t._v("同时支持下拉选择 和 输入搜索")]),a("v-uni-view",{staticClass:"mt15"},[a("vk-data-input-address",{attrs:{placeholder:"请选择省市区"},model:{value:t.form1.address1,callback:function(e){t.$set(t.form1,"address1",e)},expression:"form1.address1"}})],1),a("v-uni-view",{staticClass:"mt15"},[a("vk-data-input-address",{attrs:{placeholder:"请选择省市",level:2},model:{value:t.form1.address2,callback:function(e){t.$set(t.form1,"address2",e)},expression:"form1.address2"}})],1),a("v-uni-view",{staticClass:"mt15"},[a("vk-data-input-address",{attrs:{placeholder:"请选择省",level:1},model:{value:t.form1.address3,callback:function(e){t.$set(t.form1,"address3",e)},expression:"form1.address3"}})],1),t.form1?a("v-uni-view",{staticClass:"mt15 json-view"},[a("pre",[t._v(t._s(t.form1))])]):t._e()],1)],1)},s=[]},7521:function(t,e,a){"use strict";var n;a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;uni.vk;var s={data:function(){return{data:{},form1:{}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n=this,n.vk,n.options=t,n.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){}},filters:{},computed:{}};e.default=s},e90f:function(t,e,a){"use strict";a.r(e);var n=a("7521"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a}}]);