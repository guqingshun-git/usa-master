(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-withdraw-list"],{"109d":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vk-data-dialog",{attrs:{title:t.page.title,top:t.page.top,width:t.page.width,"close-on-click-modal":!0,center:!0,mode:"form"},on:{open:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpen.apply(void 0,arguments)},closed:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}},model:{value:t.value.show,callback:function(e){t.$set(t.value,"show",e)},expression:"value.show"}},[a("v-uni-view",{staticStyle:{padding:"15px 20px"}},[t._l(t.value.list,(function(e,n){return a("v-uni-view",{key:n},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[a("v-uni-view",[0===e.status?a("vk-data-icon",{attrs:{name:"el-icon-time",size:"16",color:"#909399"}}):1===e.status?a("vk-data-icon",{attrs:{name:"el-icon-more-outline",size:"16",color:"#409EFF"}}):2===e.status?a("vk-data-icon",{attrs:{name:"el-icon-circle-check",size:"16",color:"#67C23A"}}):3===e.status?a("vk-data-icon",{attrs:{name:"el-icon-warning-outline",size:"16",color:"#E6A23C"}}):4===e.status?a("vk-data-icon",{attrs:{name:"el-icon-circle-close",size:"16",color:"#F56C6C"}}):t._e()],1),a("v-uni-view",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(n+1)+"、"+t._s(e.no)+"\n\t\t\t\t\t"+t._s(e.title)+"（"+t._s(e.withdrawal_info.name)+"）\n\t\t\t\t\t提现金额："+t._s(t.vk.pubfn.priceFilter(e.withdrawal_money))+" 元")])],1)],1)})),t.msg.title?a("v-uni-view",{staticStyle:{"margin-top":"20px"}},[t._v("当前状态："),0===t.msg.status?a("v-uni-text",{staticStyle:{color:"#909399"}},[t._v(t._s(t.msg.title))]):t._e(),1===t.msg.status?a("v-uni-text",{staticStyle:{color:"#409EFF"}},[t._v(t._s(t.msg.title))]):t._e(),2===t.msg.status?a("v-uni-text",{staticStyle:{color:"#67c23a"}},[t._v(t._s(t.msg.title))]):t._e(),3===t.msg.status?a("v-uni-text",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.msg.title))]):t._e(),4===t.msg.status?a("v-uni-text",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.msg.title))]):t._e()],1):t._e(),a("v-uni-view",{staticStyle:{"margin-top":"20px"}},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:t.progress.value,status:"success"}})],1)],2),a("vk-data-form",{ref:"form1",attrs:{"form-type":t.value.mode,rules:t.form1.props.rules,action:t.form1.props.action,columns:t.form1.props.columns,loading:t.form1.props.loading,labelWidth:t.form1.props.labelWidth,"show-cancel":t.page.showCancel,"cancel-text":t.page.cancelText,"submit-text":t.page.submitText},on:{"update:loading":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.form1.props,"loading",e)},success:function(e){arguments[0]=e=t.$handleEvent(e),t.onFormSuccess.apply(void 0,arguments)}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("el-button",{attrs:{loading:t.page.loading,type:"danger",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.examine(4)}}},[t._v("审核拒绝")]),a("el-button",{staticStyle:{"margin-left":"100px"},attrs:{loading:t.page.loading,type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.examine(2)}}},[t._v("审核通过")])]},proxy:!0}]),model:{value:t.form1.data,callback:function(e){t.$set(t.form1,"data",e)},expression:"form1.data"}})],1)},o=[]},"235d":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c223");var o,i=n(a("52c3")),l=n(a("af0a")),r=n(a("cb8a")),s=n(a("b315")),c=uni.vk,u=[{value:"___existent___",label:"全部"},{value:"0",label:"待提现"},{value:"1",label:"提现中"},{value:"2",label:"已提现"},{value:"3",label:"提现取消"},{value:"4",label:"拒绝提现"}],d={components:{examine:i.default,batchExamine:l.default,sellerRemark:r.default,notApplyUser:s.default},data:function(){return{loading:!1,data:{},statusData:u,totalTime:[],table1:{action:"admin/sys.withdrawal.getList",columns:[{key:"_add_time",title:"申请时间",type:"dateDiff",width:80},{key:"withdrawal_info",title:"提现账号信息",type:"object",width:240,columns:[{key:"mobile",title:"提现人手机号",type:"text",width:120,defaultValue:"暂无"},{key:"name",title:"提现人姓名",type:"text",width:120,defaultValue:"暂无"},{key:"type",title:"提现方式",type:"tag",width:120,formatter:function(t,e,a,n){switch(t){case 1:return{val:"支付宝",tagType:"success"};case 2:return{val:"微信",tagType:"success"};case 3:return{val:"银行卡",tagType:"success"};default:break}}},{key:"account_no",title:"提现账户号码",type:"text",width:240,defaultValue:"暂无"},{key:"bank_name",title:"银行名称",type:"text",width:240,defaultValue:"暂无"},{key:"bank_open",title:"开户行",type:"text",width:240,defaultValue:"暂无"}]},{key:"",title:"用户信息",type:"group",width:280,columns:[{key:"_id",title:"订单ID",type:"text",width:90},{key:"no",title:"订单号",type:"text",width:250},{key:"user_id",title:"用户ID",type:"text",width:90},{key:"userInfo.nickname",title:"昵称",type:"text",width:120},{key:"userInfo.comment",title:"昵称备注",type:"text",width:120},{key:"userInfo.mobile",title:"手机",type:"text",width:120}]},{key:"money",title:"申请金额",type:"money",width:120},{key:"withdrawal_money",title:"到账金额",type:"money",width:120},{key:"service_fee",title:"提现服务费",type:"money",width:100,defaultValue:"暂无"},{key:"status",title:"状态",type:"tag",width:100,formatter:function(t,e,a,n){switch(t){case 0:return{val:"待提现",tagType:"info"};case 1:return{val:"提现中",tagType:"success"};case 2:return{val:"已提现",tagType:"success"};case 3:return{val:"提现取消",tagType:"warning"};case 4:return{val:"拒绝提现",tagType:"danger"};default:break}}},{key:"mode",title:"提现类型",type:"tag",width:100,formatter:function(t,e,a,n){switch(t){case 0:return{val:"普通提现",tagType:"primary"};case 1:return{val:"急速提现",tagType:"success"};default:return{val:"暂无",tagType:"info"}}}},{key:"title",title:"标题",type:"text",width:240},{key:"comment",title:"用户备注",type:"text",width:300},{key:"seller_remark",title:"商家审核备注",type:"text",width:300},{key:"payment_no",title:"支付单号",type:"text",width:240,defaultValue:"暂无"},{key:"del_time",title:"删除时间",type:"time",width:160,show:"detail"},{key:"cancel_time",title:"取消时间",type:"time",width:160,show:"detail"},{key:"_add_time",title:"申请时间",type:"time",width:160}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"status",title:"状态",type:"select",width:140,isNumber:!0,show:["none"],data:u},{key:"user_id",title:"用户筛选",type:"remote-select",placeholder:"请输入姓名或手机号",width:180,action:"admin/select/kh/user"},{key:"mode",title:"提现类型",type:"select",width:170,data:[{value:0,label:"普通提现"},{value:1,label:"急速提现"}]},{key:"_add_time",title:"申请时间",type:"datetimerange",width:360,mode:"[]"}]},formDatas:{}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=this,c=o.vk,o.options=t,o.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){},pageTo:function(t){c.navigateTo(t)},pageBack:function(t){var e=getCurrentPages();e.length>1&&e[0].route!==o.$page.route?c.navigateBack():t&&c.navigateTo(t)},search:function(){o.$refs.table1.query()},refresh:function(){o.$refs.table1.refresh()},getCurrentRow:function(){return o.$refs.table1.getCurrentRow()},currentChange:function(t){o.table1.selectItem=t},selectionChange:function(t){o.table1.multipleSelection=t},batchBtn:function(t){switch(t){case 1:o.batchExamine();break;default:break}},customRightBtns:function(t,e){"审核"===e.title?c.pubfn.openForm("examine",{item:t}):"备注"===e.title&&c.pubfn.openForm("sellerRemark",{item:t})},batchExamine:function(){var t=o.$refs.table1.getMultipleSelection();c.pubfn.openForm("batchExamine",{list:t})},clearSelection:function(){o.$refs.table1.clearSelection()},getTotal:function(){c.callFunction({url:"admin/sys.withdrawal.getTotal",title:"统计中...",data:{totalTime:o.totalTime},success:function(t){o.$alert("未申请（在途奖励）：".concat(t.m1Str," <br/>\n\t\t\t\t\t未申请（可提现）：").concat(t.m2Str," <br/>\n\t\t\t\t\t已申请（未提现）：").concat(t.m3," 元<br/>\n\t\t\t\t\t已申请（已提现）：").concat(t.m4," 元<br/>\n\t\t\t\t\t累计奖励（累计）：").concat(t.m0," 元"),"提示",{dangerouslyUseHTMLString:!0})}})},getNotApplyUser:function(){c.pubfn.openForm("notApplyUser",{})}},watch:{},computed:{}};e.default=d},"371b":function(t,e,a){"use strict";a.r(e);var n=a("235d"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"52c3":function(t,e,a){"use strict";a.r(e);var n=a("d639"),o=a("8685");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var l=a("828b"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"2b84fa7a",null,!1,n["a"],void 0);e["default"]=r.exports},6029:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,"",""]),t.exports=e},"6fcc":function(t,e,a){"use strict";a.r(e);var n=a("dadc"),o=a("371b");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("f4a4");var l=a("828b"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"891b8d66",null,!1,n["a"],void 0);e["default"]=r.exports},"717d":function(t,e,a){var n=a("6029");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("967d").default;o("0dd2d18e",n,!0,{sourceMap:!1,shadowMode:!1})},"72cd":function(t,e,a){"use strict";a.r(e);var n=a("c8e0"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"7c71":function(t,e,a){"use strict";var n;a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c223");uni.vk;var o={props:{value:{type:Object,default:function(){return{show:!1,mode:"",item:"",options:""}}}},data:function(){return{page:{title:"用户列表",submitText:"关闭",top:"2vh",width:"1400px",loading:!1},table1:{action:"admin/sys.withdrawal.getNotApplyUserList",columns:[{key:"avatar",title:"头像",type:"avatar",imageWidth:40},{key:"nickname",title:"用户昵称",type:"html",defaultValue:"未设置",minWidth:150,align:"left",formatter:function(t,e,a,n){var o=e.nickname,i=e.gender,l=void 0===i?0:i,r=e.full_name,s=void 0===r?"":r,c=s&&s!=o?"(".concat(s,")"):"",u="\n\t\t\t\t\t\t\t<view>".concat(o||"未设置"," ").concat(c," ").concat(["",'<text class="el-icon-male" style="color:#409EFF"></text>','<text class="el-icon-female" style="color:#F56C6C"></text>'][l],"</view>\n\t\t\t\t\t\t\t");return u}},{key:"mobile",title:"手机号码",type:"text",width:120,defaultValue:"未设置"},{key:"account_reward.wait",title:"在途奖励",type:"money",width:120,defaultValue:0,sortable:!0},{key:"account_reward.allow",title:"可提现奖励",type:"money",width:120,defaultValue:0,sortable:!0},{key:"account_reward.success",title:"已提现奖励",type:"money",width:120,defaultValue:0,sortable:!0},{key:"account_reward.used",title:"已使用奖励",type:"money",width:120,defaultValue:0,sortable:!0},{key:"account_reward.total",title:"累计奖励",type:"money",width:120,defaultValue:0,sortable:!0}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"nickname",title:"昵称",type:"text",width:150,mode:"%%"},{key:"comment",title:"备注",type:"text",width:150,mode:"%%"},{key:"mobile",title:"手机号",type:"text",width:150,mode:"%%"}]}}},mounted:function(){n=this,n.init()},methods:{init:function(){var t=n,e=t.value;n._input(e)},_input:function(t){n.$emit("input",t)},onOpen:function(){n=this;var t=n,e=t.value,a=void 0===e?{}:e;a.item},onClose:function(){},open:function(){var t=n,e=t.value;e.show=!0,n._input(e)},close:function(){var t=n,e=t.value;e.show=!1,n._input(e)},search:function(){n.$refs.table1.query()},refresh:function(){n.$refs.table1.refresh()},currentChange:function(t){n.table1.selectItem=t}},watch:{},computed:{}};e.default=o},8685:function(t,e,a){"use strict";a.r(e);var n=a("fbc0"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"92b7":function(t,e,a){"use strict";a.r(e);var n=a("7c71"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"9be9":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vk-data-dialog",{attrs:{title:t.page.title,top:t.page.top,width:t.page.width,"close-on-click-modal":!0,center:!0},on:{open:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpen.apply(void 0,arguments)},closed:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("el-button",{staticStyle:{width:"80px"},attrs:{loading:t.page.loading,type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v(t._s(t.page.submitText))])]},proxy:!0}]),model:{value:t.value.show,callback:function(e){t.$set(t.value,"show",e)},expression:"value.show"}},[a("v-uni-view",[a("vk-data-table-query",{attrs:{columns:t.queryForm1.columns},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.queryForm1.formData,callback:function(e){t.$set(t.queryForm1,"formData",e)},expression:"queryForm1.formData"}}),a("vk-data-table",{ref:"table1",staticStyle:{"margin-top":"0"},attrs:{action:t.table1.action,columns:t.table1.columns,"query-form-param":t.queryForm1,"right-btns":["detail_auto"],selection:!1,"row-no":!0,pagination:!0,"page-size":5,"page-sizes":[5,10,20,50,100,1e3],"max-height":660,"default-sort":{name:"account_reward.allow",type:"desc"}},on:{"current-change":function(e){arguments[0]=e=t.$handleEvent(e),t.currentChange.apply(void 0,arguments)}}})],1)],1)},o=[]},a16e:function(t,e,a){"use strict";a.r(e);var n=a("e0f0"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},af0a:function(t,e,a){"use strict";a.r(e);var n=a("109d"),o=a("a16e");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var l=a("828b"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"99a1efca",null,!1,n["a"],void 0);e["default"]=r.exports},b315:function(t,e,a){"use strict";a.r(e);var n=a("9be9"),o=a("92b7");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var l=a("828b"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"51afcdc8",null,!1,n["a"],void 0);e["default"]=r.exports},c8e0:function(t,e,a){"use strict";var n;a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=uni.vk,i={props:{value:{type:Object,default:function(){return{show:!1,mode:"",item:{}}}}},data:function(){return{page:{title:"备注",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"500px"},form1:{data:{},props:{action:"admin/sys.withdrawal.updateSellerRemark",columns:[{key:"comment",title:"用户备注",type:"textarea",width:290,maxlength:200,showWordLimit:!0,autosize:{minRows:3,maxRows:10},disabled:!0},{key:"seller_remark",title:"商家备注",type:"textarea",width:290,maxlength:200,showWordLimit:!0,autosize:{minRows:3,maxRows:10}}],rules:{},labelWidth:"100px"}}}},mounted:function(){n=this,n.init()},methods:{init:function(){var t=n,e=t.value;n.$emit("input",e)},onOpen:function(){n=this;var t=n.value.item,e=void 0===t?{}:t;n.form1.data=o.pubfn.copyObject(e)},onClose:function(){},onFormSuccess:function(){n.value.show=!1,n.$set(n.value.item,"seller_remark",n.form1.data.seller_remark),n.$emit("success")}},watch:{},computed:{}};e.default=i},cb8a:function(t,e,a){"use strict";a.r(e);var n=a("e2a6"),o=a("72cd");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var l=a("828b"),r=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"75708c24",null,!1,n["a"],void 0);e["default"]=r.exports},d639:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vk-data-dialog",{attrs:{title:t.page.title,top:t.page.top,width:t.page.width,"close-on-click-modal":!0,mode:"form"},on:{open:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpen.apply(void 0,arguments)},closed:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}},model:{value:t.value.show,callback:function(e){t.$set(t.value,"show",e)},expression:"value.show"}},[a("vk-data-form",{ref:"form1",attrs:{"form-type":t.value.mode,rules:t.form1.props.rules,action:t.form1.props.action,columns:t.form1.props.columns,loading:t.form1.props.loading,labelWidth:t.form1.props.labelWidth,"show-cancel":t.page.showCancel,"cancel-text":t.page.cancelText,"submit-text":t.page.submitText},on:{"update:loading":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.form1.props,"loading",e)},success:function(e){arguments[0]=e=t.$handleEvent(e),t.onFormSuccess.apply(void 0,arguments)}},scopedSlots:t._u([{key:"footer",fn:function(e){var n=e.loading;return[a("v-uni-view",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{padding:"10px 40px","margin-right":"30px"},attrs:{loading:n,type:"danger",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.adopt(4)}}},[t._v("拒绝")]),a("el-button",{staticStyle:{padding:"10px 40px"},attrs:{loading:n,type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.adopt(2)}}},[t._v("通过")])],1)]}}]),model:{value:t.form1.data,callback:function(e){t.$set(t.form1,"data",e)},expression:"form1.data"}})],1)},o=[]},dadc:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page-body"},[a("vk-data-table-query",{attrs:{columns:t.queryForm1.columns},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.queryForm1.formData,callback:function(e){t.$set(t.queryForm1,"formData",e)},expression:"queryForm1.formData"}}),a("v-uni-view",{staticClass:"btns-box"},[a("el-row",[t.table1.multipleSelection?a("el-dropdown",{attrs:{"split-button":!1,trigger:"click"},on:{command:function(e){arguments[0]=e=t.$handleEvent(e),t.batchBtn.apply(void 0,arguments)}}},[a("el-button",{staticStyle:{"margin-left":"0rpx"},attrs:{type:"danger",size:"mini",disabled:0===t.table1.multipleSelection.length}},[t._v("批量操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:1}},[t._v("批量审核")])],1)],1):t._e(),a("el-button",{staticStyle:{"margin-left":"20rpx"},attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getNotApplyUser.apply(void 0,arguments)}}},[t._v("未申请的名单")]),a("el-popover",{attrs:{placement:"bottom",title:"请选择时间端，可不选。",width:"435",trigger:"click"}},[a("v-uni-view",{staticStyle:{"text-align":"center"}},[a("v-uni-view",[a("vk-data-input-date-time",{attrs:{type:"daterange",width:435},model:{value:t.totalTime,callback:function(e){t.totalTime=e},expression:"totalTime"}})],1),a("v-uni-view",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getTotal.apply(void 0,arguments)}}},[t._v("查询")])],1)],1),a("el-button",{staticStyle:{"margin-left":"20rpx"},attrs:{slot:"reference",type:"success",size:"mini"},slot:"reference"},[t._v("查看总合计")])],1)],1)],1),a("el-container",[a("el-aside",{attrs:{width:"120px"}},[a("el-tabs",{staticStyle:{"margin-top":"10px"},attrs:{"tab-position":"left"},on:{"tab-click":function(e){arguments[0]=e=t.$handleEvent(e),t.search()}},model:{value:t.queryForm1.formData.status,callback:function(e){t.$set(t.queryForm1.formData,"status",e)},expression:"queryForm1.formData.status"}},t._l(t.statusData,(function(t,e){return a("el-tab-pane",{key:t.value,attrs:{label:t.label,name:t.value}})})),1)],1),a("el-main",{staticStyle:{padding:"0"}},[a("vk-data-table",{ref:"table1",attrs:{action:t.table1.action,columns:t.table1.columns,"query-form-param":t.queryForm1,"right-btns":["detail_auto"],"custom-right-btns":[{title:"审核",type:"danger",icon:"el-icon-edit"},{title:"备注",type:"primary",icon:"el-icon-edit-outline"}],selection:!0,"row-no":!0,pagination:!0,"show-summary":!0,"total-option":[{key:"money",unit:"元",type:"money"},{key:"withdrawal_money",unit:"元",type:"money"},{key:"service_fee",unit:"元",type:"money"}]},on:{update:function(e){arguments[0]=e=t.$handleEvent(e),t.updateBtn.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteBtn.apply(void 0,arguments)},"current-change":function(e){arguments[0]=e=t.$handleEvent(e),t.currentChange.apply(void 0,arguments)},"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)},"custom-right-btns":function(e){arguments[0]=e=t.$handleEvent(e),t.customRightBtns.apply(void 0,arguments)}}})],1)],1),a("examine",{model:{value:t.formDatas.examine,callback:function(e){t.$set(t.formDatas,"examine",e)},expression:"formDatas.examine"}}),a("batchExamine",{on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSelection.apply(void 0,arguments)}},model:{value:t.formDatas.batchExamine,callback:function(e){t.$set(t.formDatas,"batchExamine",e)},expression:"formDatas.batchExamine"}}),a("sellerRemark",{model:{value:t.formDatas.sellerRemark,callback:function(e){t.$set(t.formDatas,"sellerRemark",e)},expression:"formDatas.sellerRemark"}}),a("notApplyUser",{model:{value:t.formDatas.notApplyUser,callback:function(e){t.$set(t.formDatas,"notApplyUser",e)},expression:"formDatas.notApplyUser"}})],1)},o=[]},e0f0:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("18f7"),a("de6c"),a("c223"),a("e838");var o,i=n(a("2634")),l=n(a("2fdc")),r=uni.vk,s={props:{value:{type:Object,default:function(){return{show:!1,mode:"",list:[]}}}},data:function(){return{page:{title:"批量审核",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"900px",loading:!1},form1:{data:{},props:{action:"",columns:[{key:"mode",title:"提现类型",type:"radio",data:[{value:0,label:"普通提现"},{value:1,label:"急速提现"}],tips:"普通提现：手动转账<br/>急速提现：自动转账（不支持转银行卡）"},{key:"seller_remark",title:"商家审核备注",type:"textarea",width:500,maxlength:200,showWordLimit:!0,autosize:{minRows:5,maxRows:10}}],rules:{mode:[{required:!0,message:"请选择提现类型",trigger:["blur","change"]}]},labelWidth:"100px"}},progress:{value:0,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#1989fa",percentage:60},{color:"#1989fa",percentage:80},{color:"#5cb87a",percentage:100}]},msg:{status:0,title:""}}},mounted:function(){o=this,o.init()},methods:{init:function(){var t=o,e=t.value;o.$emit("input",e)},onOpen:function(){o=this;var t=o.value.list,e=void 0===t?[]:t,a=r.pubfn.arrayObjectGetArray(e,"_id");o.progress.value=0,o.msg={status:0,title:""},o.form1.data={user_ids:a}},onClose:function(){},onFormSuccess:function(){o.value.show=!1,o.$emit("success")},examine:function(t){return(0,l.default)((0,i.default)().mark((function e(){var a,n,l,s,c,u;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=o.value.list,n=void 0===a?[]:a,o.msg={status:0,title:""},"number"===typeof o.form1.data.mode){e.next=6;break}return o.msg={status:4,title:"请选择提现类型"},r.toast("请选择提现类型"),e.abrupt("return",!1);case 6:l=0,s=1e3,o.progress.value=0,r.showLoading("执行中..."),o.page.loading=!0,c=(0,i.default)().mark((function e(a){var c,u;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=1e3,c=n[a],0!==c.status){e.next=11;break}return c.status=1,o.msg={status:1,title:"正在操作".concat(c.title,"，提现金额:").concat(r.pubfn.priceFilter(c.withdrawal_money),"元")},e.next=7,r.callFunction({url:"admin/sys.withdrawal.examine",needAlert:!0,data:{_id:c._id,mode:o.form1.data.mode,seller_remark:o.form1.data.seller_remark,status:t,duanxin:!0},fail:function(t){c.status=0,o.msg={status:3,title:t.msg},r.hideLoading(),o.page.loading=!1}});case 7:u=e.sent,0===u.code&&(c.status=t,o.msg={status:3,title:"操作成功"}),e.next=12;break;case 11:s=0;case 12:if(l++,o.progress.value=parseFloat((l/n.length*100).toFixed(2)),!s){e.next=17;break}return e.next=17,r.pubfn.sleep(1e3);case 17:case"end":return e.stop()}}),e)})),u=0;case 13:if(!(u<n.length)){e.next=18;break}return e.delegateYield(c(u),"t0",15);case 15:u++,e.next=13;break;case 18:r.hideLoading(),o.page.loading=!1,o.progress.value>=100&&o.onFormSuccess();case 21:case"end":return e.stop()}}),e)})))()}},watch:{},computed:{}};e.default=s},e2a6:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vk-data-dialog",{attrs:{title:t.page.title,top:t.page.top,width:t.page.width,"close-on-click-modal":!0,mode:"form"},on:{open:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpen.apply(void 0,arguments)},closed:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)}},model:{value:t.value.show,callback:function(e){t.$set(t.value,"show",e)},expression:"value.show"}},[a("vk-data-form",{ref:"form1",attrs:{"form-type":t.value.mode,rules:t.form1.props.rules,action:t.form1.props.action,columns:t.form1.props.columns,loading:t.form1.props.loading,labelWidth:t.form1.props.labelWidth,"show-cancel":t.page.showCancel,"cancel-text":t.page.cancelText,"submit-text":t.page.submitText},on:{"update:loading":function(e){arguments[0]=e=t.$handleEvent(e),t.$set(t.form1.props,"loading",e)},success:function(e){arguments[0]=e=t.$handleEvent(e),t.onFormSuccess.apply(void 0,arguments)}},model:{value:t.form1.data,callback:function(e){t.$set(t.form1,"data",e)},expression:"form1.data"}})],1)},o=[]},f4a4:function(t,e,a){"use strict";var n=a("717d"),o=a.n(n);o.a},fbc0:function(t,e,a){"use strict";var n;a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=uni.vk,i={props:{value:{type:Object,default:function(){return{show:!1,mode:"",item:{}}}}},data:function(){return{page:{title:"审核",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"500px"},form1:{data:{},props:{loading:!1,action:"admin/sys.withdrawal.examine",columns:[{key:"user_id",title:"用户ID",type:"remote-select",placeholder:"请输入用户ID",width:290,action:"admin/select/kh/user",disabled:!0},{key:"status",title:"状态",type:"select",width:290,data:[{value:-1,label:"已被删除"},{value:0,label:"待提现"},{value:1,label:"提现中"},{value:2,label:"已提现"},{value:3,label:"提现取消"},{value:4,label:"拒绝提现"}],disabled:!0},{key:"mode",title:"提现类型",type:"radio",width:290,data:[{value:0,label:"普通提现"},{value:1,label:"急速提现"}],tips:"普通提现：手动转账<br/>急速提现：自动转账（不支持转银行卡）"},{key:"comment",title:"用户备注",type:"textarea",width:290,maxlength:200,showWordLimit:!0,autosize:{minRows:3,maxRows:10},disabled:!0},{key:"seller_remark",title:"商家审核备注",type:"textarea",width:290,maxlength:200,showWordLimit:!0,autosize:{minRows:3,maxRows:10}}],rules:{},labelWidth:"100px"}}}},mounted:function(){n=this,n.init()},methods:{init:function(){var t=n,e=t.value;n.$emit("input",e)},onOpen:function(){n=this;var t=n.value.item,e=void 0===t?{}:t;n.form1.data=o.pubfn.copyObject(e)},onClose:function(){},onFormSuccess:function(){n.value.show=!1,n.$emit("success")},adopt:function(t){n.$refs.form1.submitForm({data:{status:t},success:function(e){n.$set(n.value.item,"status",t),n.$set(n.value.item,"seller_remark",n.form1.data.seller_remark)},fail:function(t){n.value.show=!1}})}},watch:{},computed:{}};e.default=i}}]);