(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2e1f47a"],{"2f32":function(t,e,r){"use strict";var n=r("4682"),a=r.n(n);a.a},"31fc":function(t,e,r){},"3dfd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("TheNavbar"),r("TheContainer",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[r("TheSidebar")]},proxy:!0},{key:"main",fn:function(){return[r("TheTable")]},proxy:!0}])})],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{fixed:"top",toggleable:"md",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("font-awesome-icon",{attrs:{icon:["fab","font-awesome"]}})],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[t._l(t.navArr,(function(e,n){return["ent"!==e.routeName?r("b-nav-item",{key:n,on:{click:function(r){return t.changeTable({table:{title:e.caption,fieldLang:e.fieldLang},fetchOption:{routeName:e.routeName},activeNav:{name:e.name}})}}},[t._v("\r\n\t\t\t\t"+t._s(e.caption)+"\r\n\t\t\t")]):r("b-nav-item-dropdown",{key:n,attrs:{text:"Entity"}},[t._l(t.entArr,(function(e,n){return[r("b-dropdown-item",{key:n,on:{click:function(r){return t.changeTable({table:{title:e.caption,fieldLang:e.fieldLang},fetchOption:{routeName:e.routeName},activeNav:{name:e.name}})}}},[t._v("\r\n\t\t\t\t\t\t"+t._s(e.caption)+"\r\n\t\t\t\t\t")])]}))],2)]}))],2),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[r("font-awesome-icon",{attrs:{icon:["fas","sign-out-alt"]}}),t._v("\r\n\t\t\t\tSign Out\r\n\t\t\t")],1)],1)],1)],1)],1)],1)},s=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("85f2")),c=r.n(i);function l(t,e,r){return e in t?c()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=r("2f62");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(r,!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"TheNavbar",computed:Object(u["c"])({navArr:function(t){return t.htmlItems.nav},entArr:function(t){return t.htmlItems.ent},clr:function(t){return t.activeNav.themeClr}}),methods:p({},Object(u["b"])({changeTable:"asyChangeTable"}))},d=f;function v(t,e,r,n,a,o,s,i){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,c):[c]}return{exports:t,options:l}}var m=v(d,o,s,!1,null,null,null),h=m.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid top56px"},[r("div",{staticClass:"bg-white border-right h-100 \n\t\t\t\tsidenav sidenav-show sidenav-show-up",style:{display:t.sidenavDis}},[t._t("sidebar",[t._v("\n\t\t\tsidebar\n\t\t")])],2),r("div",{staticClass:"content",style:{marginLeft:t.contentMarginLeft}},[r("div",{staticClass:"pt-3"},[r("b-button",{class:t.btnCls,attrs:{variant:"outline-"+t.clr},on:{click:t.sidebarDis}},[r("font-awesome-icon",{attrs:{icon:["fas",t.showSidebar?"angle-double-left":"angle-double-right"]}})],1)],1),r("header",[t._t("header")],2),r("main",{staticClass:"text-center"},[t._t("main",[t._v("\n\t\t\t\tmain\n\t\t\t")])],2),r("footer",[t._t("footer",[t._v("footer")])],2)]),r("div",{class:t.showDrop?"sidenav-backdrop":"",on:{click:t.backdropHide}})])},w=[],y=r("2b0e"),_=r("7049");new y["default"]("b-button",{ButtonPlugin:_["a"]});var O={name:"TheContainer",data:function(){return{showDrop:!0,showSidebar:!0,contentMarginLeft:"200px",sidenavDis:"block",btnCls:"font24px py-0 px-2"}},computed:Object(u["c"])({clr:function(t){return t.activeNav.themeClr}}),methods:{backdropHide:function(){return this.showDrop=!this.showDrop,this.sidenavHide()},sidenavShow:function(){this.showSidebar=!0,this.contentMarginLeft="200px",this.sidenavDis="block",this.showDrop=!0},sidenavHide:function(){this.showSidebar=!1,this.contentMarginLeft="0px",this.sidenavDis="none"},sidebarDis:function(){return this.showSidebar?this.sidenavHide():this.sidenavShow()}},props:{msg:String}},C=O,x=(r("2f32"),v(C,g,w,!1,null,"5cc487b8",null)),P=x.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-auto"},[r("div",{staticClass:"text-left"},[r("b-table",{attrs:{striped:"",hover:"","caption-top":"",id:"my-talbe",busy:t.table.isBusy,items:t.table.items,"per-page":t.perPage,"current-page":t.currentPage,small:""}},[r("template",{slot:"table-caption"},[r("h4",{staticClass:"text-center",class:"text-"+t.clr},[t._v(t._s(t.table.title))])]),r("template",{slot:"table-busy"},[r("div",{staticClass:"text-center text-muted my-2"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[t._v(" 接收数据中...")])],1)])],2),r("div",{directives:[{name:"show",rawName:"v-show",value:t.rows>t.perPage,expression:"rows > perPage"}],staticClass:"offset-9 text-right"},[r("span",[t._v("Total items: "+t._s(t.rows)+",")]),t._v(" \n\t\t"),r("span",[t._v("Current Page: "+t._s(t.currentPage))]),r("br"),r("label",[t._v("每页行数:")]),r("b-form-select",{attrs:{options:t.options},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),r("br"),r("b-pagination",{directives:[{name:"show",rawName:"v-show",value:t.rows>t.perPage,expression:"rows > perPage"}],attrs:{align:"right","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},S=[];function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D={name:"TheTable",data:function(){return{perPage:10,currentPage:1,options:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:50,text:"50"}]}},computed:Object(u["c"])({table:function(t){return t.table},rows:function(t){return t.table.items.length},clr:function(t){return t.activeNav.themeClr}}),methods:k({},Object(u["b"])({getTableItemsBy:"asyChangeTable"})),components:{}},E=D,N=v(E,j,S,!1,null,null,null),$=N.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"py-3 px-1 font18px border-top-0",class:t.borderCls+" text-"+t.themeClr},[r("font-awesome-icon",{attrs:{icon:t.sidebar.faIcon}}),t._v(" "),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.sidebar.caption))])],1),r("b-nav",{attrs:{vertical:""}},t._l(t.sidebar.catArr,(function(e,n){return r("div",{key:n,class:e.name?t.borderCls+" border-top-0":"border-bottom-0"},[e.name?r("div",{staticClass:"pb-1 mt-1"},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+n,expression:"`collapse-${catId}`"}],staticClass:"font18px text-left border-0",class:""+t.bsvAlignTwoEnds,attrs:{block:"",squared:"",variant:"outline-"+t.themeClr}},[r("span",{staticClass:"font-italic"},[t._v(t._s(e.caption)+" ")]),r("span",{staticClass:"when-opened"},[r("font-awesome-icon",{attrs:{icon:["fas","minus"]}})],1),r("span",{staticClass:"when-closed"},[r("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1)])],1):t._e(),r("b-collapse",{attrs:{id:"collapse-"+n,visible:!e.name||null}},[r("b-list-group",t._l(e.sysEntArr,(function(n,a){return r("div",{key:a,staticClass:"pt-1 pb-1",class:e.name?"ml-3 border-bottom-0 "+t.borderCls:"border-top-0 "+t.borderCls,style:{width:e.name?"180px":null}},[r("b-list-group-item",{staticClass:"py-1 rounded-0 border-0",class:t.bsvAlignTwoEnds+" text-"+t.themeClr,attrs:{button:""}},[t._v("\r\n\t\t\t\t\t\t"+t._s(n.caption)+"\r\n\t\t\t\t\t\t"),a?r("b-badge",{attrs:{pill:"",variant:t.themeClr}},[t._v(t._s(a)+"\r\n\t\t\t\t\t\t")]):r("span",{staticClass:"text-muted"},[t._v("无")])],1)],1)})),0)],1)],1)})),0)],1)},L=[];r("ac4d"),r("8a81"),r("7f7f");function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var H={name:"TheSidebar",data:function(){return{bsvAlignTwoEnds:"d-flex justify-content-between align-items-center"}},computed:R({borderCls:function(){return"border border-left-0 border-right-0 border-".concat(this.themeClr)}},Object(u["c"])({sidebar:function(t){var e=t.activeNav.name,r=t.htmlItems.sidebar,n={},a=!0,o=!1,s=void 0;try{for(var i,c=r[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value;if(l.name==e){n=l;break}}}catch(u){o=!0,s=u}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return n},themeClr:function(t){return t.activeNav.themeClr}}))},M=H,U=(r("ce3b"),v(M,A,L,!1,null,"86c4686e",null)),B=U.exports,F={name:"app",components:{TheNavbar:h,TheContainer:P,TheTable:$,TheSidebar:B}},z=F,J=(r("5c0b"),v(z,n,a,!1,null,null,null));e["default"]=J.exports},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},4682:function(t,e,r){},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"5c0b":function(t,e,r){"use strict";var n=r("31fc"),a=r.n(n);a.a},7807:function(t,e,r){},"85f2":function(t,e,r){t.exports=r("454f")},"8e6e":function(t,e,r){var n=r("5ca1"),a=r("990b"),o=r("6821"),s=r("11e9"),i=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),c=s.f,l=a(n),u={},b=0;while(l.length>b)r=c(n,e=l[b++]),void 0!==r&&i(u,e,r);return u}})},"990b":function(t,e,r){var n=r("9093"),a=r("2621"),o=r("cb7c"),s=r("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=n.f(o(t)),r=a.f;return r?e.concat(r(t)):e}},ce3b:function(t,e,r){"use strict";var n=r("7807"),a=r.n(n);a.a},f1ae:function(t,e,r){"use strict";var n=r("86cc"),a=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}}}]);
//# sourceMappingURL=chunk-c2e1f47a.757c4438.js.map