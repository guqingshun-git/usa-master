(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-stats-goods"],{"0ada":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,".page-body[data-v-3376f0c4]{background-color:#f5f7f9;min-height:calc(100vh - 110px)}.box-card[data-v-3376f0c4]{margin:5px}.box-card .header[data-v-3376f0c4]{display:-webkit-box;display:-ms-flexbox;display:flex}.box-card .header .header-title[data-v-3376f0c4]{-webkit-box-flex:1;-ms-flex:1;flex:1}.box-card .box-card-body[data-v-3376f0c4]{height:70px;line-height:70px}.box-card .num-view[data-v-3376f0c4]{font-size:28px}.box-card .num-view .unit[data-v-3376f0c4]{margin-left:5px}[data-v-3376f0c4] .el-card__header{padding:12px 20px;border-bottom:1px solid #ebeef5;-webkit-box-sizing:border-box;box-sizing:border-box}",""]),t.exports=a},"0ede":function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"getGoodsSellRank2",props:{mode:{}},data:function(){return{data:{list:[],opts:{color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,80,0,5],legend:{},xAxis:{boundaryGap:"justify",disableGrid:!1,min:0,axisLine:!1,max:50},yAxis:{},extra:{bar:{type:"stack",width:30,meterBorde:1,meterFillColor:"#FFFFFF",activeBgColor:"#000000",activeBgOpacity:.08,categoryGap:2}}}},loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;vk.callFunction({url:"admin/kh.stats.getGoodsSellRank",data:{mode:"amount"},success:function(a){t.data.list=a.list}})}},watch:{},computed:{}};a.default=i},"221f":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,".page-body[data-v-eaf9f580]{background-color:#f5f7f9;min-height:calc(100vh - 110px)}.box-card[data-v-eaf9f580]{margin:5px}.box-card .header[data-v-eaf9f580]{display:-webkit-box;display:-ms-flexbox;display:flex}.box-card .header .header-title[data-v-eaf9f580]{-webkit-box-flex:1;-ms-flex:1;flex:1}.box-card .box-card-body[data-v-eaf9f580]{height:70px;line-height:70px}.box-card .num-view[data-v-eaf9f580]{font-size:28px}.box-card .num-view .unit[data-v-eaf9f580]{margin-left:5px}[data-v-eaf9f580] .el-card__header{padding:12px 20px;border-bottom:1px solid #ebeef5;-webkit-box-sizing:border-box;box-sizing:border-box}",""]),t.exports=a},"31f0":function(t,a,e){"use strict";e.r(a);var i=e("0ede"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"321f":function(t,a,e){var i=e("0ada");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("d32ca3ce",i,!0,{sourceMap:!1,shadowMode:!1})},"5b0d":function(t,a,e){"use strict";e.r(a);var i=e("a1c8"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"5bf2":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={qiunDataCharts:e("0e8d").default},n=function(){var t=this.$createElement,a=this._self._c||t;return a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("v-uni-text",{staticClass:"header-title"},[this._v("商品销售额排行榜")])],1),a("v-uni-view",{staticClass:"box-card-body",staticStyle:{height:"500px"}},[a("qiun-data-charts",{attrs:{type:"bar",opts:this.data.opts,localdata:this.data.list}})],1)],1)},o=[]},"5fda":function(t,a,e){"use strict";e.r(a);var i=e("c8be"),n=e("ef2b");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);var d=e("828b"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"eb44e08c",null,!1,i["a"],void 0);a["default"]=s.exports},"69c4":function(t,a,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=i(e("9e75")),d=i(e("ed8b")),s=i(e("9e62")),r=i(e("7eb9")),c=uni.vk,l={components:{getGoodsCount:o.default,getGoodsSellRank1:d.default,getGoodsSellRank2:s.default,getGoodsViewCount:r.default},data:function(){return{}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n=this,c=n.vk,n.options=t,n.init(t)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(t){},pageTo:function(t){c.navigateTo(t)}},computed:{}};a.default=l},"6b45":function(t,a,e){"use strict";e.r(a);var i=e("b465"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"7eb9":function(t,a,e){"use strict";e.r(a);var i=e("a245"),n=e("c1ea");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("d396");var d=e("828b"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3376f0c4",null,!1,i["a"],void 0);a["default"]=s.exports},"8aaf":function(t,a,e){var i=e("221f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("5caa8267",i,!0,{sourceMap:!1,shadowMode:!1})},"9e62":function(t,a,e){"use strict";e.r(a);var i=e("5bf2"),n=e("31f0");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("d936");var d=e("828b"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"7b6b7406",null,!1,i["a"],void 0);a["default"]=s.exports},"9e75":function(t,a,e){"use strict";e.r(a);var i=e("b89c"),n=e("6b45");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("f6c6");var d=e("828b"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"eaf9f580",null,!1,i["a"],void 0);a["default"]=s.exports},a1c8:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"getGoodsSellRank1",props:{mode:{}},data:function(){return{data:{list:[],opts:{color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,80,0,5],legend:{},xAxis:{boundaryGap:"justify",disableGrid:!1,min:0,axisLine:!1,max:20},yAxis:{},extra:{bar:{type:"stack",width:30,meterBorde:1,meterFillColor:"#FFFFFF",activeBgColor:"#000000",activeBgOpacity:.08,categoryGap:2}}}},loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;vk.callFunction({url:"admin/kh.stats.getGoodsSellRank",data:{mode:"count"},success:function(a){t.data.list=a.list}})}},watch:{},computed:{}};a.default=i},a245:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={qiunDataCharts:e("0e8d").default},n=function(){var t=this.$createElement,a=this._self._c||t;return a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("v-uni-text",{staticClass:"header-title"},[this._v("商品浏览量排行榜")])],1),a("v-uni-view",{staticClass:"box-card-body",staticStyle:{height:"500px"}},[a("qiun-data-charts",{attrs:{type:"bar",opts:this.data.opts,localdata:this.data.list}})],1)],1)},o=[]},b0c8:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"getGoodsViewCount",props:{},data:function(){return{data:{list:[],opts:{color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,80,0,5],legend:{},xAxis:{boundaryGap:"justify",disableGrid:!1,min:0,axisLine:!1,max:50},yAxis:{},extra:{bar:{type:"stack",width:30,meterBorde:1,meterFillColor:"#FFFFFF",activeBgColor:"#000000",activeBgOpacity:.08,categoryGap:2}}}},loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;vk.callFunction({url:"admin/kh.stats.getGoodsViewCount",data:{},success:function(a){t.data.list=a.list}})}},watch:{},computed:{}};a.default=i},b1d4:function(t,a,e){var i=e("b886");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("7cba9e65",i,!0,{sourceMap:!1,shadowMode:!1})},b465:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"getGoodsCount",props:{},data:function(){return{data:{list:[]},loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;vk.callFunction({url:"admin/kh.stats.getGoodsCount",loading:{that:t,name:"loading"},data:{},success:function(a){t.data.list=a.list}})}},watch:{},computed:{colCom:function(){return uni.vk.getVuex("$app.isPC")?6:24}}};a.default=i},b886:function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,".page-body[data-v-803573f0]{background-color:#f5f7f9;min-height:calc(100vh - 110px)}.box-card[data-v-803573f0]{margin:5px}.box-card .header[data-v-803573f0]{display:-webkit-box;display:-ms-flexbox;display:flex}.box-card .header .header-title[data-v-803573f0]{-webkit-box-flex:1;-ms-flex:1;flex:1}.box-card .box-card-body[data-v-803573f0]{height:70px;line-height:70px}.box-card .num-view[data-v-803573f0]{font-size:28px}.box-card .num-view .unit[data-v-803573f0]{margin-left:5px}[data-v-803573f0] .el-card__header{padding:12px 20px;border-bottom:1px solid #ebeef5;-webkit-box-sizing:border-box;box-sizing:border-box}",""]),t.exports=a},b89c:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",[e("el-col",{attrs:{span:t.colCom}},[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card"},[e("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("v-uni-text",{staticClass:"header-title"},[t._v("总数量")]),e("el-tag",{attrs:{size:"mini"}},[t._v("总")])],1),e("v-uni-view",{staticClass:"box-card-body num-view"},[e("v-uni-text",[t._v(t._s(t.data.list[0]))]),e("v-uni-text",{staticClass:"unit"},[t._v("个")])],1)],1)],1),e("el-col",{attrs:{span:t.colCom}},[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card"},[e("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("v-uni-text",{staticClass:"header-title"},[t._v("销售中")]),e("el-tag",{attrs:{size:"mini"}},[t._v("销售")])],1),e("v-uni-view",{staticClass:"box-card-body num-view"},[e("v-uni-text",[t._v(t._s(t.data.list[1]))]),e("v-uni-text",{staticClass:"unit"},[t._v("个")])],1)],1)],1),e("el-col",{attrs:{span:t.colCom}},[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card"},[e("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("v-uni-text",{staticClass:"header-title"},[t._v("已缺货")]),e("el-tag",{attrs:{size:"mini"}},[t._v("缺货")])],1),e("v-uni-view",{staticClass:"box-card-body num-view"},[e("v-uni-text",[t._v(t._s(t.data.list[2]))]),e("v-uni-text",{staticClass:"unit"},[t._v("个")])],1)],1)],1),e("el-col",{attrs:{span:t.colCom}},[e("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card"},[e("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("v-uni-text",{staticClass:"header-title"},[t._v("回收站")]),e("el-tag",{attrs:{size:"mini"}},[t._v("回收站")])],1),e("v-uni-view",{staticClass:"box-card-body num-view"},[e("v-uni-text",[t._v(t._s(t.data.list[3]))]),e("v-uni-text",{staticClass:"unit"},[t._v("个")])],1)],1)],1)],1)},n=[]},c1ea:function(t,a,e){"use strict";e.r(a);var i=e("b0c8"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},c8be:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",{staticClass:"page-body"},[a("getGoodsCount"),a("el-row",[a("el-col",{attrs:{span:24}},[a("getGoodsSellRank1")],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("getGoodsSellRank2")],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("getGoodsViewCount")],1)],1)],1)},n=[]},cb91:function(t,a,e){var i=e("e6cc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("7839d98d",i,!0,{sourceMap:!1,shadowMode:!1})},d396:function(t,a,e){"use strict";var i=e("321f"),n=e.n(i);n.a},d936:function(t,a,e){"use strict";var i=e("cb91"),n=e.n(i);n.a},e09c:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={qiunDataCharts:e("0e8d").default},n=function(){var t=this.$createElement,a=this._self._c||t;return a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("v-uni-text",{staticClass:"header-title"},[this._v("商品销量排行榜")])],1),a("v-uni-view",{staticClass:"box-card-body",staticStyle:{height:"500px"}},[a("qiun-data-charts",{attrs:{type:"bar",opts:this.data.opts,localdata:this.data.list}})],1)],1)},o=[]},e6cc:function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,".page-body[data-v-7b6b7406]{background-color:#f5f7f9;min-height:calc(100vh - 110px)}.box-card[data-v-7b6b7406]{margin:5px}.box-card .header[data-v-7b6b7406]{display:-webkit-box;display:-ms-flexbox;display:flex}.box-card .header .header-title[data-v-7b6b7406]{-webkit-box-flex:1;-ms-flex:1;flex:1}.box-card .box-card-body[data-v-7b6b7406]{height:70px;line-height:70px}.box-card .num-view[data-v-7b6b7406]{font-size:28px}.box-card .num-view .unit[data-v-7b6b7406]{margin-left:5px}[data-v-7b6b7406] .el-card__header{padding:12px 20px;border-bottom:1px solid #ebeef5;-webkit-box-sizing:border-box;box-sizing:border-box}",""]),t.exports=a},eafa:function(t,a,e){"use strict";var i=e("b1d4"),n=e.n(i);n.a},ed8b:function(t,a,e){"use strict";e.r(a);var i=e("e09c"),n=e("5b0d");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("eafa");var d=e("828b"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"803573f0",null,!1,i["a"],void 0);a["default"]=s.exports},ef2b:function(t,a,e){"use strict";e.r(a);var i=e("69c4"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},f6c6:function(t,a,e){"use strict";var i=e("8aaf"),n=e.n(i);n.a}}]);