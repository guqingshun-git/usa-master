(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-salesman-setting"],{"04c4":function(e,t,a){"use strict";var r;a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7a76"),a("c9b5"),a("fd3c"),a("aa9c"),a("64aa"),a("5ef2"),a("dd2b");var l=uni.vk,o=[{validator:function(e,t,a,l){var o=r.form1.data;if(o.share_reward_1+o.share_reward_2>1)return a(new Error("一级+二级返佣比例之和不能大于100%"));a()},trigger:["change","blur"]}],n={data:function(){var e=this;return{data:{},page:{title:"规则设置",submitText:"设置",cancelText:"返回",showBack:!1,backPage:""},form1:{data:{mode:"none",apply_image:"",plan_exec_time:0,reward_lock_day:8,no_pay_allow_change_bind:0,examine_mode:0,is_help_superiors_sales:0,balance_recharge_reward_mode:0,balance_recharge_mode:0,share_reward_1:"",share_reward_2:"",examine_total_recharge_amount:"",examine_total_order_amount:"",examine_min_vip_lv:"",examine_goods_ids:[]},props:{action:"admin/sys.salesman.updateFxRule",columns:[{key:"",title:"分销模式选择",type:"bar-title"},{key:"mode",title:"模式",type:"radio",data:[{value:"none",label:"关闭"},{value:"fx2",label:"二级分销模式"}]},{key:"",title:"二级分销默认返佣比例",type:"bar-title",showRule:"mode==fx2"},{key:"share_reward_1",title:"一级比例",type:"percentage",width:200,showRule:"mode==fx2"},{key:"share_reward_2",title:"二级比例",type:"percentage",width:200,showRule:"mode==fx2"},{key:"",title:"审核设置",type:"bar-title"},{key:"apply_intro",title:"申请介绍",type:"custom",component:"custom-editor-tinymce",width:750},{key:"examine_mode",title:"申请分销员是否需要审核",type:"radio",data:[{value:0,label:"无需审核"},{value:1,label:"人工审核"},{value:2,label:"自动审核"}]},{key:"",title:"自动审核条件",type:"bar-title",showRule:"examine_mode==2"},{key:"examine_total_recharge_amount",title:"累计充值余额",type:"money",width:160,rightText:"元",clearable:!1,placeholder:"输入金额",showRule:"examine_mode==2"},{key:"examine_total_order_amount",title:"累计订单金额",type:"money",width:160,rightText:"元",clearable:!1,placeholder:"输入金额",showRule:"examine_mode==2"},{key:"examine_min_vip_lv",title:"最低会员等级",placeholder:"会员等级",type:"select",width:140,showRule:"examine_mode==2",data:function(){return e.vk.getVuex("$user.mchInfo.vip_level_rule")||[]},props:{value:"lv",label:"name",children:"children"}},{key:"examine_goods_ids",title:"购买指定任意商品",type:"table-select",placeholder:"选择商品",showRule:"examine_mode==2",tips:"以上条件满足任意一项即可",action:"admin/sys.goods.getList",multiple:!0,formData:{status:0},columns:[{key:"sort",title:"排序",type:"number",width:80,defaultValue:"0",sortable:"custom"},{key:"goods_thumb",title:"商品图",type:"avatar",imageWidth:40},{key:"name",title:"商品名称",type:"text",nameKey:!0},{key:"categoryList",title:"所属分类",type:"text",width:140,defaultValue:"暂无",formatter:function(e,t,a,r){var l="";return e.map((function(e,t){t>0&&(l+="、"),l+=e.name})),l}},{key:"sku_list",title:"价格区间",type:"text",width:200,defaultValue:"暂无",formatter:function(e,t,a,r){var o=[];e.map((function(e,t){o.push(Number(e.price))}));var n=Math.max.apply(Math,o),i=Math.min.apply(Math,o);return n!=i?l.pubfn.priceFilter(i)+" - "+l.pubfn.priceFilter(n):l.pubfn.priceFilter(i)}},{key:"stock",title:"商品库存",type:"number",width:110,show:["row"]},{key:"view_count",title:"累计浏览量",type:"number",width:140,defaultValue:0,sortable:"custom"},{key:"real_sell_count",title:"实际总销量",type:"number",width:140,defaultValue:0,sortable:"custom"},{key:"_id",title:"商品ID",type:"text",idKey:!0,show:["none"]}],queryColumns:[{key:"name",type:"text",title:"",placeholder:"请输入商品名称",width:180,mode:"%%"},{key:"category_ids",title:"商品分类",type:"cascader",width:180,mode:"in",action:"admin/sys.category.kh_getList",props:{list:"rows",value:"_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1}}]},{key:"",title:"订单结算设置",type:"bar-title"},{key:"plan_exec_time",title:"订单延迟多少天结算",type:"number",labelWidth:220,width:160,rightText:"天",clearable:!1,placeholder:"输入天数",tips:"默认0天，如果填0，则实时结算，如果填1，则当天晚上24点结算 如果填2，则次日晚上24点结算，以此类推。（延迟结算的作用是方便上级补单升级拿奖励）"},{key:"reward_lock_day",title:"结算后，资金冻结多少天可提现",type:"number",labelWidth:220,width:160,rightText:"天",clearable:!1,placeholder:"输入天数",tips:"默认8天，如果填0，则结算后马上可提现，如果填1，则结算后的当天晚上24点可提现 如果填2，则结算后的次日晚上24点结算，以此类推。（冻结的作用是用户可能会退款，导致奖励已被提现从而损失资金。）"},{key:"",title:"提现设置",type:"bar-title"},{key:"max_withdrawal_num",title:"每月可提现次数",type:"number",width:160,rightText:"次/月",clearable:!1,placeholder:"输入次数"},{key:"min_withdrawal_amount",title:"最少提现金额",type:"money",width:160,rightText:"元",clearable:!1,placeholder:"输入金额"},{key:"withdrawal_service_amount",title:"提现手续费",type:"percentage",width:160,clearable:!1,placeholder:"请输入比例",tips:"默认1%，您可以自己设置向用户收取的比例，如果设置为0，则由您来承担手续费，建议设置1%-3%之间"},{key:"",title:"抢客设置",type:"bar-title"},{key:"no_pay_allow_change_bind",title:"未下单",type:"radio",tips:"禁止抢客：用户一旦被绑定，则不能再被其他分销员绑定。</br>用户未下单前允许抢客：在该用户被最近一个分销员绑定后的时间算起，该用户没有下单并付款，则可以被其他分销员绑定。",data:[{value:0,label:"禁止抢客"},{value:1,label:"用户未下单前允许抢客"},{value:2,label:"始终允许抢客"}]}],rules:{share_reward_1:o,share_reward_2:o},labelWidth:"180px",loading:!1,successMsg:"设置成功",beforeAction:function(e){return{fx:e}}}}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r=this,l=r.vk,r.options=e,r.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){r.$nextTick((function(){l.pubfn.objectAssign(r.form1.data,l.getVuex("$user.mchInfo.fx")),l.callFunction({url:"client/pub.getMchInfo",loading:{that:r,name:"form1.props.loading"},data:{},success:function(e){l.setVuex("$user.mchInfo",e.mchInfo);var t=l.pubfn.getData(e.mchInfo,"fx");t&&l.pubfn.objectAssign(r.form1.data,t)}})}))},pageTo:function(e){l.navigateTo(e)},pageBack:function(){var e=getCurrentPages();e.length>1&&e[0].route!==r.$page.route?l.navigateBack():r.page.backPage&&l.navigateTo(r.page.backPage)},resetForm:function(){r.$refs.form1.resetForm()},submitForm:function(){r.$refs.form1.submitForm()},formSuccess:function(e){l.setVuex("$user.mchInfo",e.data.mchInfo)}},watch:{"form1.data.balance_transfer_rule":{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.indexOf("all")>-1&&-1==t.indexOf("all")?r.form1.data.balance_transfer_rule=["all","upper","lower","lower-lower","upper-upper","other"]:-1==e.indexOf("all")&&t.indexOf("all")>-1?r.form1.data.balance_transfer_rule=[]:5==e.length&&-1==e.indexOf("all")?r.form1.data.balance_transfer_rule=["all","upper","lower","lower-lower","upper-upper","other"]:e.length<6&&e.indexOf("all")>-1&&r.form1.data.balance_transfer_rule.splice(e.indexOf("all"),1)}},"form1.data.balance_recharge_reward_mode":{handler:function(e,t){1===e&&(this.form1.data.balance_recharge_mode=0,this.form1.data.balance_recharge_mode=0)}}},computed:{}};t.default=n},8447:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("vk-data-page-header",{attrs:{title:e.page.title,"show-back":e.page.showBack},on:{back:function(t){arguments[0]=t=e.$handleEvent(t),e.pageBack.apply(void 0,arguments)}}}),a("v-uni-view",{directives:[{name:"loading",rawName:"v-loading",value:e.form1.props.loading,expression:"form1.props.loading"}],staticClass:"page-body",staticStyle:{"padding-bottom":"40px"}},[a("vk-data-form",{ref:"form1",attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,loading:e.form1.props.loading,labelWidth:e.form1.props.labelWidth,"before-action":e.form1.props.beforeAction,"footer-show":!1,"success-msg":e.form1.props.successMsg},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.formSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1),a("v-uni-view",{staticClass:"page-footer"},[e.page.showBack?a("el-button",{staticStyle:{"margin-right":"20px",width:"80px"},attrs:{plain:!0,loading:e.form1.props.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageBack.apply(void 0,arguments)}}},[e._v(e._s(e.page.cancelText))]):e._e(),a("el-button",{staticStyle:{width:"80px"},attrs:{type:"primary",loading:e.form1.props.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm.apply(void 0,arguments)}}},[e._v(e._s(e.page.submitText))])],1),a("v-uni-view",{staticClass:"page-dialog"})],1)},l=[]},a00a:function(e,t,a){"use strict";a.r(t);var r=a("04c4"),l=a.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);t["default"]=l.a},a2b0:function(e,t,a){"use strict";a.r(t);var r=a("8447"),l=a("a00a");for(var o in l)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(o);var n=a("828b"),i=Object(n["a"])(l["default"],r["b"],r["c"],!1,null,"b3b11b56",null,!1,r["a"],void 0);t["default"]=i.exports}}]);