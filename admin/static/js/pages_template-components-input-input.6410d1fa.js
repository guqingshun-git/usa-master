(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-input-input"],{"7e94":function(t,e,n){"use strict";n.r(e);var a=n("9b0b"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"884b3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("vk-data-page-header",{attrs:{title:"Input 表单输入",subTitle:"聚合输入框"}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"tips"},[t._v("根据type自动渲染的不同的输入框")]),n("v-uni-view",{staticClass:"mt15"},[n("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-radio",{attrs:{label:"number"}},[t._v("数字输入框")]),n("el-radio",{attrs:{label:"money"}},[t._v("金额输入框")]),n("el-radio",{attrs:{label:"percentage"}},[t._v("百分比输入框")]),n("el-radio",{attrs:{label:"discount"}},[t._v("折扣输入框")]),n("el-radio",{attrs:{label:"number-box"}},[t._v("步进器")]),n("el-radio",{attrs:{label:"textarea"}},[t._v("多行文本输入框")])],1)],1),n("v-uni-view",{staticClass:"mt15"},[n("vk-data-input",{attrs:{type:t.type,precision:0,width:"300px",placeholder:"请输入"},model:{value:t.form1.value,callback:function(e){t.$set(t.form1,"value",e)},expression:"form1.value"}})],1),t.form1?n("v-uni-view",{staticClass:"mt15 json-view"},[n("pre",[t._v(t._s(t.form1))])]):t._e()],1)],1)},i=[]},"9b0b":function(t,e,n){"use strict";var a;n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;uni.vk;var i={data:function(){return{form1:{value:""},type:"number"}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=this,a.vk,a.options=t,a.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){}},filters:{},computed:{}};e.default=i},b9bf:function(t,e,n){"use strict";n.r(e);var a=n("884b3"),i=n("7e94");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("828b"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"26cbab9e",null,!1,a["a"],void 0);e["default"]=u.exports}}]);