(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-form-form-array-object"],{"0c9f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("vk-data-page-header",{attrs:{title:"Form 表单",subTitle:"子表单"}}),n("v-uni-view",{staticClass:"page-body",staticStyle:{"max-width":"1600px",margin:"0 auto"}},[n("vk-data-form",{attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,loading:e.form1.props.loading,"label-width":"140px"},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}}),n("v-uni-view",{staticClass:"tips mt15"},[e.form1.data?n("v-uni-view",{staticClass:"mt15 json-view"},[n("v-uni-view",{staticStyle:{"font-size":"14px"}},[e._v("表单数据")]),n("pre",[e._v(e._s(e.form1.data))])],1):e._e()],1)],1)],1)},a=[]},"34d7":function(e,t,n){"use strict";var r;n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=uni.vk,o={data:function(){return{form1:{data:{},props:{action:"template/test/sys/test",columns:[{key:"array",title:"数组<对象>类型",type:"array<object>",itemWidth:260,showAdd:!0,showClear:!0,showSort:!0,defaultValue:{switch:!0,text1:""},rightBtns:["copy","delete"],columns:[{key:"text1",title:"昵称",type:"text",isUnique:!0,rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:["change","blur"]}]},{key:"number1",title:"数字",type:"number",rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]}]},{key:"select1",title:"select类型",type:"select",data:[{value:1,label:"选项1"},{value:2,label:"选项2"}],rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]}],onChange:function(e,t,n,r){t.text1="昵称"+e}},{key:"switch",title:"switch类型",type:"switch",width:160}]},{key:"",title:"下方为纯字符串或纯数字类型数组",type:"bar-title"},{key:"array1",title:"数组<字符串>类型",type:"array<string>",placeholder:"请输入字符串",isUnique:!0,rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]}]},{key:"array2",title:"数组<数字>类型",type:"array<number>",placeholder:"请输入数字",rules:[{required:!0,message:"该项不能为空",trigger:["change","blur"]}]}],rules:{},formType:"",show:!1,loading:!1}}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r=this,a=r.vk,r.options=e,r.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){},onCancel:function(){console.log("关闭"),a.menuTabs.closeCurrent()},onFormSuccess:function(){console.log("表单提交成功")}},filters:{},computed:{}};t.default=o},"4d63":function(e,t,n){"use strict";n.r(t);var r=n("34d7"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},"9dd5":function(e,t,n){"use strict";n.r(t);var r=n("0c9f"),a=n("4d63");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var i=n("828b"),s=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"35d1dcf2",null,!1,r["a"],void 0);t["default"]=s.exports}}]);