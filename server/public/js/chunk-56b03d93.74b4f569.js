(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56b03d93"],{4704:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("CRow",[r("CCol",{attrs:{col:"12",xl:"12"}},[r("transition",{attrs:{name:"fade"}},[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-location-pin"}}),e.showCityName?r("span",[e._v("Search Location - "+e._s(e.showCityName))]):r("span",[e._v("Search Location")]),r("div",{staticClass:"card-header-actions"},[r("CLink",{staticClass:"card-header-action btn-minimize",on:{click:function(t){e.SearchformCollapsed=!e.SearchformCollapsed}}},[r("CIcon",{attrs:{name:"cil-chevron-"+(e.SearchformCollapsed?"bottom":"top")}})],1)],1)],1),r("CCollapse",{attrs:{show:e.SearchformCollapsed}},[r("CCardBody",[r("CRow",[r("CCol",{attrs:{sm:"4"}},[r("CInput",{attrs:{horizontal:"",placeholder:"City",id:"searchInput",readonly:e.isLoading},on:{change:e.searchLocation},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}})],1)],1),r("CRow",{attrs:{alignHorizontal:"end"}},[r("CCol",{attrs:{sm:"12"}},[r("CSpinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{color:"secondary"}}),r("CRow",{directives:[{name:"show",rawName:"v-show",value:e.isSearch,expression:"isSearch"}]},[e._l(e.SearchResult,(function(t){return r("CCol",{key:t.id,staticClass:"p-1",attrs:{col:"6",sm:"3",md:"2"}},[r("CButton",{attrs:{block:"",color:"primary",disabled:e.isLoading},on:{click:function(r){return e.showWeather(t.city_id,t.city_name,t.lat,t.lon)}}},[e._v("["+e._s(t.country_code)+"] "+e._s(t.city_name))])],1)})),r("CCol",{directives:[{name:"show",rawName:"v-show",value:Object.keys(e.SearchResult).length<1,expression:"Object.keys(SearchResult).length < 1"}],staticClass:"p-1",attrs:{col:"6",sm:"3",md:"2"}},[e._v(" No record(s) ")])],2)],1)],1)],1)],1)],1)],1),r("CCard",{directives:[{name:"show",rawName:"v-show",value:e.weatherResultShow,expression:"weatherResultShow"}]},[r("CCardHeader",[e._v(" "+e._s(this.showCityName)+" Weather "),r("div",{staticClass:"card-header-actions"},[r("CLink",{staticClass:"card-header-action btn-close",attrs:{href:"#"},on:{click:e.resetSearch}},[r("CIcon",{attrs:{name:"cil-x-circle"}})],1)],1)]),r("CCardBody",[Object.keys(e.WeatherResult.current).length>0?r("CRow",{attrs:{alignHorizontal:"end"}},[r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{text:this.WeatherResult.current.data[0].sunrise,header:"Sunrise",color:"gradient-info"}},[r("fa",{attrs:{icon:["fas","sun"]}})],1)],1),r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{text:this.WeatherResult.current.data[0].sunset,header:"Sunset",color:"gradient-info"}},[r("fa",{attrs:{icon:["fas","moon"]}})],1)],1),r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{text:this.WeatherResult.current.data[0].app_temp!==this.WeatherResult.current.data[0].temp?"Feel like "+this.WeatherResult.current.data[0].app_temp+"°":"",header:"Temperature "+this.WeatherResult.current.data[0].temp+"°",color:"gradient-info"}},[r("fa",{attrs:{icon:["fas","temperature-low"]}})],1)],1)],1):e._e(),Object.keys(e.WeatherResult.forecast).length>0?r("CRow",e._l(e.WeatherResult.forecast.data,(function(t,a){return r("CCol",{directives:[{name:"show",rawName:"v-show",value:a>0&&a<8,expression:"i> 0 && i < 8"}],key:t.id,attrs:{sm:"6",md:"3"}},[r("CCard",{staticClass:"text-center",attrs:{"body-wrapper":""}},[r("blockquote",{staticClass:"card-blockquote"},[r("p",[r("strong",[e._v(e._s(t.datetime))])]),r("img",{attrs:{src:"https://www.weatherbit.io/static/img/icons/"+t.weather.icon+".png"}}),r("p",[e._v(e._s(t.weather.description))]),r("p",[r("fa",{staticClass:"text-success",attrs:{icon:["fas","caret-down"]}}),e._v(" "+e._s(t.low_temp)+"° "),r("fa",{staticClass:"text-danger",attrs:{icon:["fas","caret-up"]}}),e._v(" "+e._s(t.high_temp)+"°")],1)])])],1)})),1):e._e()],1)],1)],1)],1)},n=[],o=r("bc3a"),s=r.n(o),c=(r("a18c"),r("e336"));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t,r,a,n,o,s){try{var c=e[o](s),i=c.value}catch(u){return void r(u)}c.done?t(i):Promise.resolve(i).then(a,n)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){h(o,a,n,s,c,"next",e)}function c(e){h(o,a,n,s,c,"throw",e)}s(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}var m="/api/weather/",v=function(){function e(){f(this,e)}return w(e,null,[{key:"getLocation",value:function(){var e=d(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length<3)){e.next=2;break}return e.abrupt("return");case 2:return r={params:{k:t}},a=u(u({},c["a"].getHeader()),r),e.abrupt("return",s.a.get(m,a));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCurrentWeather",value:function(){var e=d(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=m+"details",a=u(u({},c["a"].getHeader()),{params:t}),e.abrupt("return",s.a.get(r,a));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteUser",value:function(e){var t=u({},c["a"].getHeader());return s.a.delete("".concat(m).concat(e),t)}},{key:"updateUser",value:function(e,t){var r=t;r["_id"]=e;var a=u({},c["a"].getHeader());return s.a.put(m,r,a)}},{key:"getUser",value:function(){var e=d(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u(u({},c["a"].getHeader()),{},{validateStatus:function(e){return e<500}}),e.abrupt("return",s.a.get("".concat(m).concat(t),r));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),C=v;function g(e,t,r,a,n,o,s){try{var c=e[o](s),i=c.value}catch(u){return void r(u)}c.done?t(i):Promise.resolve(i).then(a,n)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){g(o,a,n,s,c,"next",e)}function c(e){g(o,a,n,s,c,"throw",e)}s(void 0)}))}}var b={name:"Weather",data:function(){return{SearchformCollapsed:!0,loading:!1,searchKeyword:"",showCityName:"",isSearch:!1,SearchResult:{},isLoading:!1,WeatherResult:{current:{},forecast:{}},weatherResultShow:!1}},created:function(){},methods:{searchLocation:function(){var e=this;return y(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.SearchResult={},t.prev=1,!(e.searchKeyword.length<3)){t.next=4;break}return t.abrupt("return");case 4:e.isLoading=!0,r=C.getLocation(e.searchKeyword),r.then((function(t){e.isSearch=!0,e.SearchResult=t.data,e.showCityName="",e.WeatherResult={current:{},forecast:{}},e.weatherResultShow=!1,e.isLoading=!1})).catch((function(t){e.isLoading=!1})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},showWeather:function(e,t,r,a){var n=this;return y(regeneratorRuntime.mark((function e(){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.isLoading=!0,o={lat:r,lon:a},s=C.getCurrentWeather(o),s.then((function(e){n.isSearch=!1,n.SearchResult={},n.weatherResultShow=!0,n.showCityName=t,n.SearchformCollapsed=!1,n.WeatherResult=e.data,n.isLoading=!1}));case 4:case"end":return e.stop()}}),e)})))()},resetSearch:function(){this.SearchformCollapsed=!0,this.weatherResultShow=!1,this.isSearch=!1,this.searchKeyword="",this.showCityName=""}}},k=b,R=r("ebbf"),S=Object(R["a"])(k,a,n,!1,null,null,null);t["default"]=S.exports},e336:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var s=function(){function e(t,r){a(this,e)}return o(e,null,[{key:"getToken",value:function(){var e=localStorage.getItem("token");return e||""}},{key:"getHeader",value:function(){return{headers:{"auth-token":this.getToken()}}}},{key:"setToken",value:function(e){console.log(e),localStorage.setItem("token",e)}}]),e}();t["a"]=s}}]);
//# sourceMappingURL=chunk-56b03d93.74b4f569.js.map