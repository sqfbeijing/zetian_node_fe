webpackJsonp([0],[,,function(t,n,e){e(78);var i=e(0)(e(50),e(104),"data-v-3b4a85eb",null);t.exports=i.exports},function(t,n,e){e(80);var i=e(0)(e(49),e(107),"data-v-7e481448",null);t.exports=i.exports},,,,,,,function(t,n,e){e(77);var i=e(0)(e(47),e(103),"data-v-2ccbc51e",null);t.exports=i.exports},,,,,,,,,,,function(t,n){!function(){function t(){clearTimeout(i),setTimeout(n,300)}function n(){r.style.fontSize=20*e()/320+"px"}function e(){return r.getBoundingClientRect().width}var i,a="addEventListener",s=document,o=window,r=s.documentElement,c="pageshow";s[a]("DOMContentLoaded",n),"on"+c in o?o[a](c,function(n){n.persisted&&t()}):o[a]("load",t),o[a]("resize",t)}()},function(t,n,e){"use strict";var i=e(7),a=e(112),s=e(2),o=(e.n(s),e(95)),r=e.n(o),c=e(94),u=e.n(c),l=e(98),v=e.n(l),d=e(97),_=e.n(d),p=e(93),f=e.n(p),m=e(96),h=e.n(m);i.a.use(a.a),n.a=new a.a({routes:[{path:"/index",name:"index",component:r.a},{path:"/category",name:"category",component:u.a},{path:"/project",name:"project",component:v.a},{path:"/map",name:"map",component:_.a},{path:"/about_us",name:"about_us",component:f.a},{path:"/item/:id",name:"item",component:h.a},{path:"*",redirect:"/index"}],linkActiveClass:"active"})},function(t,n,e){"use strict";var i=e(7),a=e(114),s=e(58),o=e(60),r=e(59);i.a.use(a.a),n.a=new a.a.Store({state:{userInfo:{username:""},editGoodsInfo:{},isShowNavMenu:!1},getters:r.a,mutations:o.a,actions:s.a})},function(t,n){},function(t,n){},function(t,n,e){e(82);var i=e(0)(e(46),e(109),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=e(20)),n.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,n=function(){if(!t.swiper&&i){delete t.options.notNextTick;var n=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(n=!0,t.defaultSwiperClasses[e]=t.options[e]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};n?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?n():this.$nextTick(n)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{},computed:{},created:function(){}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(92),a=e.n(i);n.default={data:function(){return{show_contact_flag:!1}},computed:{isShowNavMenu:function(){return this.$store.getters.navMenuDisplay}},components:{contact_us:a.a},created:function(){},methods:{show_contact:function(){this.$store.dispatch("updateNavMenuDisplay",!1)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{toggleNavMenu:function(){var t=!this.$store.getters.navMenuDisplay;this.$store.dispatch("updateNavMenuDisplay",t)}},computed:{isShowNavMenu:function(){return this.$store.getters.navMenuDisplay}},created:function(){}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(10),o=e.n(s),r=e(3),c=e.n(r),u=e(4),l=(e.n(u),e(6));e.n(l);n.default={data:function(){return{}},components:{top_head:a.a,bottom_footer:o.a,nav_menu:c.a},created:function(){}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(3),o=e.n(s);n.default={data:function(){return{}},components:{top_head:a.a,nav_menu:o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(10),o=e.n(s),r=e(3),c=e.n(r),u=e(4),l=e.n(u),v=e(6);e.n(v);n.default={data:function(){return{swiperOption:{notNextTick:!0,autoplay:3e3,setWrapperSize:!0,paginationType:"bullets",pagination:".swiper-pagination",paginationClickable:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next"},imgSrcArray:[e(87),e(88),e(89)],rexiao_items:[],zuixin_items:[]}},components:{top_head:a.a,bottom_footer:o.a,nav_menu:c.a,swiper:v.swiper,swiperSlide:v.swiperSlide},created:function(){var t=this;l.a.get("http://47.93.227.194:8000/api/v1/goods",{params:{name:"",limit:1e5,page:1}}).then(function(n){for(var e=n.data.data,i=0;i<e.length;i++)e[i].tags.includes("新品")&&t.zuixin_items.push(e[i]);t.zuixin_items.length>4&&(t.zuixin_items=t.zuixin_items.slice(0,4));for(var a=0;a<e.length;a++)e[a].tags.includes("热销商品")&&t.rexiao_items.push(e[a]);t.rexiao_items.length>4&&(t.rexiao_items=t.rexiao_items.slice(0,4))})}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(10),o=e.n(s),r=e(3),c=e.n(r),u=e(4),l=e.n(u);n.default={data:function(){return{goods_info:null,isShowDetail:!1,tuwen_detail:""}},components:{top_head:a.a,bottom_footer:o.a,nav_menu:c.a},created:function(){var t=this,n=this.$route.params.id;l.a.get("http://47.93.227.194:8000/api/v1/goods/"+n+"/info").then(function(n){if(1==n.data.status){var e=n.data.data;t.goods_info=e}}),l.a.get("http://47.93.227.194:8000/api/v1/goods/"+n+"/detail/info").then(function(n){if(1==n.data.status){var e=n.data.data.content;t.tuwen_detail=e}})}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(3),o=e.n(s);n.default={data:function(){return{}},components:{top_head:a.a,nav_menu:o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),a=e.n(i),s=e(3),o=e.n(s);n.default={data:function(){return{}},components:{top_head:a.a,nav_menu:o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7),a=e(26),s=e.n(a),o=e(22),r=e(23),c=e(4),u=e.n(c),l=e(6),v=e.n(l),d=e(25),_=(e.n(d),e(24)),p=(e.n(_),e(21));e.n(p);i.a.use(v.a),u.a.defaults.withCredentials=!0,i.a.config.productionTip=!1,o.a.beforeEach(function(t,n,e){document.querySelector(".nav-menu-wrap")&&r.a.commit("UPDATE_NAV_MENU_DISPLAY",!1),e()}),new i.a({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:s.a}})},function(t,n,e){"use strict";n.a={setUserInfo:function(t,n){(0,t.commit)("SET_USERINFO",n)},removeUserInfo:function(t){(0,t.commit)("REMOVE_USERINFO")},updateAvatar:function(t,n){(0,t.commit)("UPDATE_AVATAR",{avatar_url:n})},updateNavMenuDisplay:function(t,n){(0,t.commit)("UPDATE_NAV_MENU_DISPLAY",n)}}},function(t,n,e){"use strict";n.a={userInfo:function(t){return t.userInfo},navMenuDisplay:function(t){return t.isShowNavMenu}}},function(t,n,e){"use strict";var i,a=e(62),s=e.n(a);n.a=(i={},s()(i,"SET_USERINFO",function(t,n){t.userInfo=n}),s()(i,"REMOVE_USERINFO",function(t){t.userInfo={}}),s()(i,"UPDATE_AVATAR",function(t,n){var e=n.avatar_url;t.userInfo.avatar_url=e}),s()(i,"UPDATE_NAV_MENU_DISPLAY",function(t,n){t.isShowNavMenu=n}),i)},,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,function(t,n,e){t.exports=e.p+"public/img/banner001.452a469.jpg"},function(t,n,e){t.exports=e.p+"public/img/banner002.6280eb4.jpg"},function(t,n,e){t.exports=e.p+"public/img/banner003.f9cd996.jpg"},function(t,n,e){var i=e(0)(e(44),e(106),null,null);t.exports=i.exports},function(t,n,e){var i=e(0)(e(45),e(101),null,null);t.exports=i.exports},function(t,n,e){e(74);var i=e(0)(e(48),e(99),"data-v-09efbebe",null);t.exports=i.exports},function(t,n,e){e(83);var i=e(0)(e(51),e(110),"data-v-e14a0e54",null);t.exports=i.exports},function(t,n,e){e(81);var i=e(0)(e(52),e(108),"data-v-8ddf96d4",null);t.exports=i.exports},function(t,n,e){e(76);var i=e(0)(e(53),e(102),"data-v-2ae80988",null);t.exports=i.exports},function(t,n,e){e(79);var i=e(0)(e(54),e(105),"data-v-4cfeed94",null);t.exports=i.exports},function(t,n,e){e(75);var i=e(0)(e(55),e(100),"data-v-0a46cce0",null);t.exports=i.exports},function(t,n,e){e(84);var i=e(0)(e(56),e(111),"data-v-f23b44ec",null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"contact-us-box"},[t._v("\n  sss\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),e("div",{staticClass:"g-page-is-doing"},[t._v("\n    这是暂未开发完成的页面，shaoqianfei正在开发中...\n  ")])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.imgSrcArray,function(t){return e("swiper-slide",[e("img",{attrs:{src:t,alt:""}})])}),t._v(" "),e("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"goods-list clearfix g-container"},[e("div",{staticClass:"list-head "},[t._v("\n      热销产品\n    ")]),t._v(" "),t.rexiao_items.length>0?e("div",{staticClass:"list-content"},t._l(t.rexiao_items,function(n){return e("div",{staticClass:"item"},[e("router-link",{attrs:{to:{name:"item",params:{id:n.id}}}},[e("img",{attrs:{src:n.image_url,alt:""}}),t._v(" "),e("div",{staticClass:"item-name g-ellipsis"},[t._v("\n            "+t._s(n.name)+"\n          ")])])],1)})):e("div",{staticClass:"no-data"},[t._v("\n      暂无数据\n    ")])]),t._v(" "),e("div",{staticClass:"goods-list clearfix g-container"},[e("div",{staticClass:"list-head "},[t._v("\n      最新产品\n    ")]),t._v(" "),t.zuixin_items.length>0?e("div",{staticClass:"list-content"},t._l(t.zuixin_items,function(n){return e("div",{staticClass:"item"},[e("router-link",{attrs:{to:{name:"item",params:{id:n.id}}}},[e("img",{attrs:{src:n.image_url,alt:""}}),t._v(" "),e("div",{staticClass:"item-name g-ellipsis"},[t._v("\n           "+t._s(n.name)+"\n         ")])])],1)})):e("div",{staticClass:"no-data"},[t._v("\n    暂无数据\n  ")])]),t._v(" "),e("bottom_footer")],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"index-category g-container"},[e("li",[e("div",{staticClass:"item item001"},[e("i",{staticClass:"iconfont icon-guangai"})]),t._v(" "),e("span",[t._v("\n        滴灌设备\n      ")])]),t._v(" "),e("li",[e("div",{staticClass:"item item002"},[e("i",{staticClass:"iconfont icon-diguan"})]),t._v(" "),e("span",[t._v("\n        微喷设备\n      ")])]),t._v(" "),e("li",[e("div",{staticClass:"item item003"},[e("i",{staticClass:"iconfont icon-shuipenlin"})]),t._v(" "),e("span",[t._v("\n        喷灌设备\n      ")])]),t._v(" "),e("li",[e("div",{staticClass:"item item004"},[e("i",{staticClass:"iconfont icon-shuiliupenshamoshi"})]),t._v(" "),e("span",[t._v("\n        过滤设备\n      ")])])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer g-container"},[e("ul",{staticClass:"clearfix"},[e("router-link",{attrs:{to:{name:"about_us"},tag:"li"}},[t._v("\n       关于我们\n     ")]),t._v(" "),t._m(0),t._v(" "),e("router-link",{attrs:{to:{name:"map"},tag:"li"}},[t._v("\n     关于我们\n   ")])],1),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"tac "},[t._v("\nPowered by zetian\n")])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",{attrs:{href:"tel:028-38104255"}},[t._v("\n        联系我们 \n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tac"},[e("a",{attrs:{href:"tel:028-38104255"}},[t._v("\n    座机：028-38104255 \n  ")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("div",{staticClass:"occupy-wrap"}),t._v(" "),e("div",{staticClass:"wrap  df"},[e("div",{staticClass:"zetian"},[e("router-link",{attrs:{to:{name:"index"}}},[e("span",{staticClass:"words"},[t._v("\n          泽田灌溉\n        ")])])],1),t._v(" "),e("div",{staticClass:"iconfont icon-menu",on:{touchstart:t.toggleNavMenu}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNavMenu,expression:"isShowNavMenu"}],staticClass:"g-page-mask",on:{touchstart:t.toggleNavMenu}})])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item-wrap ",class:{"no-data":!t.goods_info,"have-data":t.goods_info}},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),t.goods_info?e("div",{staticClass:"  bw item-container clearfix"},[e("div",{staticClass:"unique-img pr"},[e("img",{attrs:{src:t.goods_info.image_url,alt:""}}),t._v(" "),e("div",{staticClass:"unique-img-name g-ellipsis "},[t._v("\n          "+t._s(t.goods_info.name)+"\n        ")])]),t._v(" "),e("div",{staticClass:"unique-price g-container"},[t._v("\n        ￥"),e("span",{staticClass:"fwb"},[t._v(t._s(t.goods_info.price.toFixed(2)))])]),t._v(" "),e("div",{staticClass:"tab-head df g-container"},[e("div",{class:{active:t.isShowDetail},on:{click:function(n){t.isShowDetail=!0}}},[t._v("\n          产品详情\n        ")]),t._v(" "),e("div",{class:{active:!t.isShowDetail},on:{click:function(n){t.isShowDetail=!1}}},[t._v("\n          产品参数\n        ")])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowDetail,expression:"isShowDetail"}],staticClass:"tab-content-item g-container tab-content-item-tuwen"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.tuwen_detail,expression:"tuwen_detail"}],domProps:{innerHTML:t._s(t.tuwen_detail)}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.tuwen_detail,expression:"!tuwen_detail"}],staticClass:"no-tuwen"},[t._v("\n            暂无图文详情\n          ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowDetail,expression:"!isShowDetail"}],staticClass:"tab-content-item  tab-content-item-param"},[e("ul",[e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              编号：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.serial_number)+"\n            ")])]),t._v(" "),e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              名称：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.name)+"\n            ")])]),t._v(" "),e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              分类：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.category_name)+"\n            ")])]),t._v(" "),e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              单价(元)：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.price.toFixed(2))+"\n            ")])]),t._v(" "),e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              已售：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.sold_count)+t._s(t.goods_info.unit)+"\n            ")])]),t._v(" "),e("li",{},[e("div",{staticClass:"param-title"},[t._v("\n              商品描述：\n            ")]),t._v(" "),e("div",{staticClass:"param-content"},[t._v("\n              "+t._s(t.goods_info.description)+"\n            ")])])])])])]):e("div",{staticClass:"   bw item-container clearfix"},[t._v("\n    暂无此商品信息\n  ")]),t._v(" "),e("bottom_footer")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-menu-wrap",class:{"show-class":t.isShowNavMenu}},[e("ul",[e("router-link",{attrs:{to:{name:"index"},tag:"li"}},[e("div",{staticClass:"iconfont icon-home"}),t._v(" "),e("div",[t._v("\n        首页  \n      ")])]),t._v(" "),e("router-link",{attrs:{to:{name:"category"},tag:"li"}},[e("div",{staticClass:"iconfont icon-leimupinleifenleileibie1"}),t._v(" "),e("div",[t._v("\n        商品\n      ")])]),t._v(" "),e("router-link",{attrs:{to:{name:"project"},tag:"li"}},[e("div",{staticClass:"iconfont icon-gongchengxinxi"}),t._v(" "),e("div",[t._v("\n        工程案例\n      ")])]),t._v(" "),t._m(0),t._v(" "),e("router-link",{attrs:{to:{name:"map"},tag:"li"}},[e("div",{staticClass:"iconfont icon-zbbicon03101"}),t._v(" "),e("div",[t._v("\n        网站地图\n      ")])]),t._v(" "),e("router-link",{attrs:{to:{name:"about_us"},tag:"li"}},[e("div",{staticClass:"iconfont icon-guanyu "}),t._v(" "),e("div",[t._v("\n        关于我们\n      ")])])],1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",{attrs:{href:"tel:028-38104255"}},[e("div",{staticClass:"iconfont icon-lianxiwomen"}),t._v(" "),e("div",[t._v("\n          联系我们\n        ")])])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),e("div",{staticClass:"g-page-is-doing"},[t._v("\n    这是暂未开发完成的页面，shaoqianfei正在开发中... 请为他提供素材。\n  ")])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),t._m(0),t._v(" "),e("bottom_footer")],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:" about-us clearfix"},[e("a",{attrs:{href:"tel:028-38104255"}},[e("div",{staticClass:"phone g-container"},[e("span",{staticClass:"icon"},[t._v("☎️")]),t._v(" 客服热线: \n          028-38104255 \n          ")])]),t._v(" "),e("ul",[e("li",{staticClass:"g-container"},[e("h1",[t._v("关于我们")]),t._v(" "),e("p",{staticClass:"ti2em"},[t._v("\n            眉山市东坡区泷汇橡塑制品经营部位于中国四川省眉山市一环路西段421-425号，眉山市东坡区泷汇橡塑制品经营部成立于1999年，其前身为龙江橡塑制品经营部，后于2007年更名为泷汇橡塑制品经营部，眉山泷汇橡塑是眉山市唯一一家专业经营橡胶管和塑料管的个体经营部，经过十多年来我们的专注，在本地橡胶塑料管这行我们始终处于领导地位。我们拥有良好的市场网络和丰富的销售经验。\n          ")])]),t._v(" "),e("li",{staticClass:"g-container"},[e("h1",[t._v("\n            经营范围：\n          ")]),t._v(" "),e("p",[t._v("\n            塑料管 橡胶管 潍坊现代增强管 泷汇增强管 泷汇水带\n          ")])]),t._v(" "),e("li",{staticClass:"g-container"},[e("h1",[t._v("\n           销售的产品：\n         ")]),t._v(" "),e("p",[t._v("\n          塑料管 橡胶管 潍坊现代增强管 泷汇增强管 泷汇水带\n        ")])]),t._v(" "),e("li",{staticClass:"g-container"},[e("h1",[t._v("\n          主营行业：\n        ")]),t._v(" "),e("p",[t._v("\n          塑料制品 / 橡塑管材\n        ")])]),t._v(" "),e("li",{staticClass:"g-container"},[e("h1",[t._v("\n\n          公司地址:\n        ")]),t._v(" "),e("p",[t._v("\n         中国四川眉山市眉山市东坡区一环路西段421-423号\n       ")])])])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("top_head"),t._v(" "),e("nav_menu"),t._v(" "),e("div",{staticClass:"g-page-is-doing"},[t._v("\n    这是暂未开发完成的页面，shaoqianfei正在开发中... 请为他提供素材。\n  ")])],1)},staticRenderFns:[]}}],[57]);