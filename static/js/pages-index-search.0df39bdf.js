(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search"],{"1aec":function(t,e,a){var i=a("8def");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("967d").default;o("15319e5c",i,!0,{sourceMap:!1,shadowMode:!1})},"4b0a":function(t,e,a){var i=a("d7b9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("967d").default;o("e2bd0238",i,!0,{sourceMap:!1,shadowMode:!1})},"53e6":function(t,e,a){"use strict";a.r(e);var i=a("cec1"),o=a("6552");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("77af");var r=a("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"8ef41fc4",null,!1,i["a"],void 0);e["default"]=s.exports},"565d":function(t,e,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("2634")),n=i(a("2fdc")),r=i(a("9b1b"));a("3efd"),a("bf0f"),a("5c47"),a("64aa"),a("fd3c"),a("c223");var s=uni.vk,c={data:function(){return{data:{category:[],goods:{"":{},a:{}}},queryForm1:{pagination:{pageIndex:1,pageSize:20},formData:{mch_id:"",category_ids:"",shop_category_ids:"",name:"",keywords:""},columns:[{key:"mch_id",mode:"="},{key:"category_ids",mode:"in"},{key:"shop_category_ids",mode:"in"},{key:"name",mode:"%%"},{key:"keywords",mode:"%%"}],sortRule:[{name:"sort",type:"asc"}]},skuPopup:{show:!1,goods:{},mode:2},loading:!1,menuHeight:0,menuItemHeight:0,scrollTop:0,scrollTop1:0,scrollTop2:0,category_id1:"",category_id2:"",showSubcategory:!1}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s=uni.vk,this.options=t,this.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},onShareAppMessage:function(t){return s.myfn.onShareAppMessage({options:t})},methods:{init:function(t){var e=t.mch_id,a=t.keywords;s.pubfn.isNotNull(e)&&(console.log(e),this.queryForm1.formData.mch_id=e),s.pubfn.isNotNull(a)&&(this.queryForm1.formData.name=a),this.getCategoryIndexShow(),this.getGoodsList()},getCategoryIndexShow:function(){var t=this;return s.callFunction({url:"client/pub.getCategoryIndexShow",loading:!0,data:{mch_id:t.queryForm1.formData.mch_id,goodsPageSize:t.queryForm1.pagination.pageSize},success:function(e){e.category.unshift({_id:"",name:"全部"}),t.data.category=e.category,t.autoShowSubcategory()}})},getGoodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this,a=t.pageIndex,i=void 0===a?1:a;return s.callFunction({url:"client/pub.getGoodsList",loading:!0,data:(0,r.default)((0,r.default)({},e.queryForm1),{},{pagination:{pageIndex:i,pageSize:e.queryForm1.pagination.pageSize}}),success:function(t){var a=e.categoryIdsCom;if(1===i)e.$set(e.data.goods,a,t);else{var o=e.data.goods[a];0==t.rows.length?(o.hasMore=!1,o.pagination.pageIndex--):o.rows=s.pubfn.arr_concat(o.rows,t.rows,"_id")}}})},nextGoodsList:function(t){var e=this.data.goods[t];e.pagination&&e.pagination.pageIndex||(e.pagination.pageIndex=1),e.pagination.pageIndex++,this.getGoodsList({pageIndex:e.pagination.pageIndex})},changeCategory1:function(t,e){var a=this;return(0,n.default)((0,o.default)().mark((function e(){var i,n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a,t._id!==i.category_id1){e.next=4;break}return i.showSubcategory?i.showSubcategory=!1:i.autoShowSubcategory(),e.abrupt("return");case 4:if(i.category_id1=t._id,i.category_id2="",i.queryForm1.formData.category_ids=t._id,0!=i.menuHeight&&0!=i.menuItemHeight){e.next=12;break}return e.next=10,i.getElRect("menu-scroll-view","menuHeight");case 10:return e.next=12,i.getElRect("u-tab-item","menuItemHeight");case 12:n=i.data.goods[t._id]||{},s.pubfn.isNull(n.rows)&&i.getGoodsList(),i.autoShowSubcategory();case 15:case"end":return e.stop()}}),e)})))()},changeCategory2:function(t,e){var a=this;if(t._id!==a.category_id2){a.category_id2=t._id,a.queryForm1.formData.category_ids=t._id;var i=a.data.goods[t._id]||{};s.pubfn.isNull(i.rows)&&a.getGoodsList(),setTimeout((function(){a.showSubcategory=!1}),100)}},getElRect:function(t,e){var a=this;new Promise((function(i,o){var n=uni.createSelectorQuery().in(a);n.select("."+t).fields({size:!0},(function(i){i?a[e]=i.height:setTimeout((function(){a.getElRect(t)}),10)})).exec()}))},search:function(t){this.queryForm1.formData.category_ids="",this.category_id1="",this.category_id2="",this.getGoodsList()},itemClick:function(t){s.myfn.goods.pageToDetail(t)},skuShow:function(t){this.skuPopup.show=!0,this.skuPopup.goods=t},priceFn:function(t){var e="";if(t.sku_list&&t.sku_list.length>0){var a=Number.MAX_VALUE,i=0;t.sku_list.map((function(t,e){t.price<a&&(a=t.price),t.price>i&&(i=t.price)})),e=a===i?"¥".concat(s.pubfn.priceFilter(a)):"¥".concat(s.pubfn.priceFilter(a)," - ").concat(s.pubfn.priceFilter(i))}return e},autoShowSubcategory:function(){var t=this.vk,e=this.subcategoryCom;this.showSubcategory=!!t.pubfn.isNotNull(e)},getSubcategory:function(t){var e=this.vk;if(!t)return[];var a=this.data.category,i=e.pubfn.getListItem(a,"_id",t);return i&&i.children?i.children:[]}},computed:{subcategoryCom:function(){var t=this.category_id1;return this.getSubcategory(t)},subcategoryItemCom:function(){var t=this.category_id2,e=this.subcategoryCom;return s.pubfn.getListItem(e,"_id",t)||{}},goodsListCom:function(){var t=this.data.goods,e=this.categoryIdsCom,a=t[e]||{};return a.rows||[]},categoryIdsCom:function(){return this.queryForm1.formData.category_ids||"全部"}}};e.default=c},6552:function(t,e,a){"use strict";a.r(e);var i=a("b81a"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},7038:function(t,e,a){"use strict";a.r(e);var i=a("565d"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"77af":function(t,e,a){"use strict";var i=a("1aec"),o=a.n(i);o.a},"7ae1":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var i={name:"u-search",emits:["update:modelValue","input","change","search","custom","clear","focus","blur"],props:{value:{type:String,default:""},modelValue:{type:String,default:""},shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("update:modelValue",t),this.$emit("change",t)},valueCom:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{valueCom:function(){return this.value},showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=i},"825b":function(t,e,a){"use strict";a.r(e);var i=a("f098"),o=a("ddc3");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("d167");var r=a("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"375217d0",null,!1,i["a"],void 0);e["default"]=s.exports},"8cf0":function(t,e,a){var i=a("8fdd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("967d").default;o("0dbe788a",i,!0,{sourceMap:!1,shadowMode:!1})},"8db7":function(t,e,a){"use strict";a.r(e);var i=a("f5cc"),o=a("7038");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("b00f");var r=a("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7d2978e8",null,!1,i["a"],void 0);e["default"]=s.exports},"8def":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,".vk-data-loading[data-v-8ef41fc4]{position:fixed;left:0;top:0;width:0;height:0;z-index:99999999;display:flex;width:100vw;height:100vh;justify-content:center}.mask[data-v-8ef41fc4]{position:fixed;left:0;top:0;right:0;bottom:0}.loading[data-v-8ef41fc4]{position:relative}.loading .image[data-v-8ef41fc4]{padding:%?20?%;width:%?140?%;height:%?140?%;display:block;margin-left:auto;margin-right:auto}.loading .text[data-v-8ef41fc4]{color:#7e7e7e;text-align:center;margin-top:%?10?%;font-size:%?28?%}",""]),t.exports=e},"8fdd":function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,'.menu-scroll-view[data-v-7d2978e8]{background-color:var(--bgcolor)}.u-wrap[data-v-7d2978e8]{height:calc(100vh - var(--window-bottom) - var(--window-top));display:flex;flex-direction:column}.u-search-box[data-v-7d2978e8]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-7d2978e8]{flex:1;display:flex;overflow:hidden}.u-search-inner[data-v-7d2978e8]{background-color:#f2f2f2;border-radius:%?100?%;padding:%?0?% %?16?%;width:100%}.u-search-text[data-v-7d2978e8]{font-size:%?26?%;color:#909399;margin-left:%?10?%}.u-tab-view[data-v-7d2978e8]{width:%?200?%;height:100%}.u-tab-item[data-v-7d2978e8]{height:%?110?%;background:var(--bgcolor);box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item .category-1[data-v-7d2978e8]{text-align:center}.u-tab-item .category-2[data-v-7d2978e8]{text-align:center;font-size:%?24?%;color:#5c5c5c;margin-top:%?6?%}.u-tab-item-active[data-v-7d2978e8]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-7d2978e8]::before{content:"";position:absolute;border-left:4px solid var(--main);height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-7d2978e8]{height:100%}.right-box[data-v-7d2978e8]{flex:1;background-color:#fff}.page-view[data-v-7d2978e8]{padding:%?0?%}.class-item[data-v-7d2978e8]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.item-container[data-v-7d2978e8]{display:flex;flex-wrap:wrap}.thumb-box[data-v-7d2978e8]{width:100%;display:flex;margin-bottom:%?40?%}.thumb-box uni-image[data-v-7d2978e8]{width:%?180?%;height:%?180?%}.item-info[data-v-7d2978e8]{flex:1;margin-left:%?10?%;font-weight:400;font-size:%?24?%;color:#303133}.item-info .name[data-v-7d2978e8]{height:%?80?%;font-size:%?28?%}.item-info .goods-desc[data-v-7d2978e8]{margin-top:%?16?%;font-size:%?24?%;color:#9a9a9a;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.item-info .num[data-v-7d2978e8]{margin-top:%?16?%;color:#9a9a9a;display:flex}.item-info .num .num-left[data-v-7d2978e8]{flex:1}.item-info .num .num-right[data-v-7d2978e8]{flex:1;text-align:right}.item-info .price[data-v-7d2978e8]{display:flex;margin-top:%?16?%;font-size:%?26?%;color:var(--main);font-weight:700}.item-info .price .price-left[data-v-7d2978e8]{flex:1}.item-info .price .price-right[data-v-7d2978e8]{position:relative;top:%?-8?%}.subcategory[data-v-7d2978e8]{position:fixed;left:%?200?%;z-index:2;background-color:#fff;border-right:%?2?% solid #e6e6e6}.subcategory .u-tab-item[data-v-7d2978e8]{background:#fff}.subcategory-mask[data-v-7d2978e8]{position:fixed;left:%?200?%;width:100vw;height:100vh;z-index:1;background-color:initial}',""]),t.exports=e},b00f:function(t,e,a){"use strict";var i=a("8cf0"),o=a.n(i);o.a},b81a:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("64aa");var i={name:"vk-data-loading",emits:["update:modelValue","input","timeout"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},title:{type:String,default:""},mask:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0,0,0,0)"},timeout:{type:Number,default:30},image:{type:String,default:"/static/loading.gif"},top:{type:String,default:"40vh"},zIndex:{type:[String,Number],default:99999999},delayTime:{type:[String,Number],default:500},showImage:{type:Boolean,default:!0},imageStyle:{type:[String,Object]},titleStyle:{type:[String,Object]},errorToast:{type:Boolean,default:!0},errorTitle:{type:String,default:"加载超时，请重试"}},data:function(){return{loadingImage:!1}},created:function(){var t=this;this.timeout>0&&(this._timer=setTimeout((function(){t.valueCom&&(t.$emit("input",!1),t.$emit("update:modelValue",!1),t.$emit("timeout"),t.errorToast&&uni.showToast({title:t.errorTitle,icon:"none"}))}),1e3*this.timeout))},destroyed:function(){this._timer&&clearTimeout(this._timer),this._loadingImageTimer&&clearTimeout(this._loadingImageTimer)},methods:{stopPrevent:function(){},showLoading:function(){var t=this;Number(this.delayTime)>0&&(this.loadingImage=!1),this._loadingImageTimer=setTimeout((function(){t.loadingImage=!0}),Number(this.delayTime))}},watch:{valueCom:{handler:function(t){t?this.showLoading():(this._timer&&clearTimeout(this._timer),this._loadingImageTimer&&clearTimeout(this._loadingImageTimer))},immediate:!0}},computed:{valueCom:function(){return this.value},styleCom:function(){var t={},e=this.zIndex;return e&&(t.zIndex=e),t},maskBackgroundColorCom:function(){var t=this.delayTime,e=this.maskBackgroundColor,a=this.loadingImage;return Number(t)?a?e:"rgba(0,0,0,0)":e}}};e.default=i},cec1:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.valueCom?a("v-uni-view",{staticClass:"vk-data-loading",style:t.styleCom},[t.mask?a("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.maskBackgroundColorCom},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}}):t._e(),t.loadingImage||0==Number(t.delayTime)?a("v-uni-view",{staticClass:"loading",style:{top:t.top}},[t.showImage?a("v-uni-image",{staticClass:"image",style:t.imageStyle,attrs:{src:t.image}}):t._e(),a("v-uni-view",{staticClass:"text",style:t.titleStyle},[t._v(t._s(t.title))])],1):t._e()],1):t._e()},o=[]},d167:function(t,e,a){"use strict";var i=a("4b0a"),o=a.n(i);o.a},d7b9:function(t,e,a){var i=a("c86c");e=i(!1),e.push([t.i,".u-search[data-v-375217d0]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-375217d0]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-375217d0]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-375217d0]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-375217d0]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-375217d0]{color:#909399}.u-action[data-v-375217d0]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-375217d0]{width:%?80?%;margin-left:%?10?%}",""]),t.exports=e},ddc3:function(t,e,a){"use strict";a.r(e);var i=a("7ae1"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},f098:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uIcon:a("6086").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),a("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.valueCom,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?a("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[a("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),a("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},n=[]},f5cc:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uSearch:a("825b").default,vkMallGoodsSkuPopup:a("6281").default,vkDataFloatBall:a("5921").default,vkDataLoading:a("53e6").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app u-wrap"},[a("v-uni-view",{staticClass:"u-search-box"},[a("v-uni-view",{staticClass:"u-search-inner"},[a("u-search",{attrs:{placeholder:"请输入搜索的内容","show-action":!1},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.queryForm1.formData.name,callback:function(e){t.$set(t.queryForm1.formData,"name",e)},expression:"queryForm1.formData.name"}})],1)],1),a("v-uni-view",{staticClass:"u-menu-wrap"},[a("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.scrollTop1}},t._l(t.data.category,(function(e,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item",class:[t.category_id1===e._id?"u-tab-item-active":""],attrs:{"data-current":i},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.changeCategory1(e,i)}}},[a("v-uni-view",{staticClass:"u-line-1"},[a("v-uni-view",{staticClass:"category-1"},[t._v(t._s(e.name))]),t.category_id1===e._id?a("v-uni-view",{staticClass:"category-2"},[t._v(t._s(t.subcategoryItemCom.name))]):t._e()],1)],1)})),1),t.showSubcategory&&t.subcategoryCom&&t.subcategoryCom.length>0?a("v-uni-view",[a("v-uni-view",{staticClass:"subcategory-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSubcategory=!1}}}),a("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view subcategory",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.scrollTop2}},t._l(t.subcategoryCom,(function(e,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item",class:[t.category_id2===e._id?"u-tab-item-active":""],attrs:{"data-current":i},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.changeCategory2(e,i)}}},[a("v-uni-text",{staticClass:"u-line-1"},[t._v(t._s(e.name))])],1)})),1)],1):t._e(),t._l(t.data.goods,(function(e,i){return[t.categoryIdsCom===i?a("v-uni-scroll-view",{key:i+"_0",staticClass:"right-box",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.nextGoodsList(i)}}},[a("v-uni-view",{staticClass:"page-view"},[a("v-uni-view",{staticClass:"class-item"},[a("v-uni-view",{staticClass:"item-container"},t._l(t.goodsListCom,(function(e,i){return a("v-uni-view",{key:i,staticClass:"thumb-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.itemClick(e)}}},[a("v-uni-image",{attrs:{src:e.goods_thumb,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"item-info"},[a("v-uni-view",{staticClass:"name u-line-2"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"goods-desc"},[t._v(t._s(e.goods_desc||""))]),a("v-uni-view",{staticClass:"price"},[a("v-uni-view",{staticClass:"price-left"},[t._v(t._s(t.priceFn(e)))]),a("v-uni-view",{staticClass:"price-right",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.skuShow(e)}}},[a("v-uni-view",{staticClass:"mall-icons gui-h3 gui-color-green"},[t._v("")])],1)],1)],1)],1)})),1)],1)],1)],1):t._e()]}))],2),a("vk-mall-goods-sku-popup",{attrs:{"goods-info":t.skuPopup.goods,mode:t.skuPopup.mode},model:{value:t.skuPopup.show,callback:function(e){t.$set(t.skuPopup,"show",e)},expression:"skuPopup.show"}}),a("vk-data-float-ball",{attrs:{"scroll-top":t.scrollTop}}),a("vk-data-loading",{attrs:{delayTime:"0"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)},n=[]}}]);