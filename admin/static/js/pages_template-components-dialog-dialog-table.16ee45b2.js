(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-components-dialog-dialog-table"],{"0b08":function(t,e,n){"use strict";n.r(e);var i=n("c108"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b021:function(t,e,n){"use strict";n.r(e);var i=n("d5f1"),a=n("0b08");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var u=n("828b"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"56ebc086",null,!1,i["a"],void 0);e["default"]=c.exports},c108:function(t,e,n){"use strict";var i;n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;uni.vk;var a={data:function(){return{show:!1,table1:{columns:[{key:"_id",title:"用户ID",type:"text",width:200},{key:"username",title:"用户名",type:"text",minWidth:200},{key:"nickname",title:"用户昵称",type:"text",minWidth:200},{key:"mobile",title:"手机号",type:"text",width:200}],data:[{_id:"001",username:"用户名001",nickname:"用户昵001",mobile:"尾号001"},{_id:"002",username:"用户名002",nickname:"用户昵002",mobile:"尾号002"},{_id:"003",username:"用户名003",nickname:"用户昵003",mobile:"尾号003"}]}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=this,i.vk,i.options=t,i.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){}},filters:{},computed:{}};e.default=a},d5f1:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("vk-data-page-header",{attrs:{title:"Dialog 弹窗",subTitle:"弹窗表格"}}),n("v-uni-view",{staticClass:"page-body"},[n("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[t._v("显示弹窗")])],1),n("v-uni-view",{staticClass:"page-dialog"},[n("vk-data-dialog",{attrs:{title:"标题",width:"900px",top:"14vh",center:!0,"close-on-click-modal":!0},scopedSlots:t._u([{key:"footer",fn:function(){return[n("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[t._v("确 定")])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("vk-data-table",{attrs:{data:t.table1.data,columns:t.table1.columns,"max-height":500}})],1)],1)],1)},a=[]}}]);