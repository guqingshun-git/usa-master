(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setting-account-security"],{"04a4":function(e,t,i){"use strict";i.r(t);var n=i("4caa"),l=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=l.a},"4caa":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=uni.vk,l={data:function(){return{labelStyle:{color:"#C0C0C0",fontSize:"24rpx"},data:{},form1:{},scrollTop:0}},onPageScroll:function(e){this.scrollTop=e.scrollTop},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n=uni.vk,this.options=e,this.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){console.log("init: ",e),uni.setNavigationBarTitle({title:this.$t("page.account-security")})},pageTo:function(e){n.navigateTo(e)}},watch:{},computed:{isBindMobileCom:function(){var e=n.getVuex("$user.userInfo");return!(!e||!e.mobile)},isBindEmailCom:function(){var e=n.getVuex("$user.userInfo");return!(!e||!e.email)},bindMobileCom:function(){var e=n.getVuex("$user.userInfo.mobile");return n.pubfn.hidden(e,3,4)},bindEmailCom:function(){var e=n.getVuex("$user.userInfo.email");return n.pubfn.hidden(e,2,9)}}};t.default=l},defd:function(e,t,i){"use strict";i.r(t);var n=i("ed04"),l=i("04a4");for(var a in l)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return l[e]}))}(a);var o=i("828b"),u=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"02340b9c",null,!1,n["a"],void 0);t["default"]=u.exports},ed04:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uCellGroup:i("a70b").default,uCellItem:i("9379").default},l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"app app-bg"},[i("u-cell-group",[i("u-cell-item",{attrs:{title:e.$t("setting.third-party-account-association"),label:e.$t("setting.third-party-account-association-tips"),"label-style":e.labelStyle},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/account-associated")}}}),e.isBindMobileCom?i("u-cell-item",{attrs:{title:e.$t("setting.modify-mobile"),label:e.$t("setting.modify-mobile-tips"),"label-style":e.labelStyle,value:e.bindMobileCom},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/update-mobile?pageIndex=0")}}}):i("u-cell-item",{attrs:{title:e.$t("setting.bind-mobile"),label:e.$t("setting.bind-mobile-tips"),"label-style":e.labelStyle,value:e.$t("setting.click-bind")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/update-mobile?pageIndex=1")}}}),e.isBindEmailCom?i("u-cell-item",{attrs:{title:e.$t("setting.modify-email"),label:e.$t("setting.modify-email-tips"),"label-style":e.labelStyle,value:e.bindEmailCom},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/update-mailbox?pageIndex=0")}}}):i("u-cell-item",{attrs:{title:e.$t("setting.bind-email"),label:e.$t("setting.bind-email-tips"),"label-style":e.labelStyle,value:e.$t("setting.click-bind")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/update-mailbox?pageIndex=1")}}}),e.isBindMobileCom?i("u-cell-item",{attrs:{title:e.$t("setting.modify-login-password"),label:e.$t("setting.modify-login-password-tips"),"label-style":e.labelStyle},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pageTo("/pages/user/setting/update-password")}}}):e._e()],1)],1)},a=[]}}]);