(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48d363af"],{"16dd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("GmapMap",{ref:"mapRef",staticStyle:{width:"100vmin",height:"50vmin"},attrs:{center:e.center,zoom:18,"map-style-id":"roadmap",options:e.mapOptions},on:{click:e.handleMapClick}},[n("GmapMarker",{attrs:{position:e.marker.position,clickable:!0,draggable:!0},on:{drag:e.handleMarkerDrag,click:e.panToMarker}})],1),n("button",{on:{click:e.geolocate}},[e._v("Detect Location")])],1)],1)},a=[],o=(n("5112"),{name:"Weather",data:function(){return{SearchformCollapsed:!0,loading:!1,searchKeyword:"",showCityName:"",isSearch:!1,SearchResult:{},isLoading:!1,marker:{position:{lat:10,lng:10}},center:{lat:10,lng:10},mapOptions:{disableDefaultUI:!0}}},created:function(){},mounted:function(){this.geolocate()},methods:{geolocate:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.marker.position={lat:t.coords.latitude,lng:t.coords.longitude},e.panToMarker()}))},handleMarkerDrag:function(e){this.marker.position={lat:e.latLng.lat(),lng:e.latLng.lng()}},panToMarker:function(){this.$refs.mapRef.panTo(this.marker.position)},handleMapClick:function(e){this.marker.position={lat:e.latLng.lat(),lng:e.latLng.lng()},console.log(e)}}}),i=o,c=n("ebbf"),u=Object(c["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports},5112:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o=n("e336");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}var h="/api/weather/",d=function(){function e(){f(this,e)}return g(e,null,[{key:"getLocation",value:function(){var e=s(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length<3)){e.next=2;break}return e.abrupt("return");case 2:return n={params:{k:t}},r=c(c({},o["a"].getHeader()),n),e.abrupt("return",a.a.get(h,r));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCurrentWeather",value:function(){var e=s(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=h+"details",r=c(c({},o["a"].getHeader()),{params:t}),e.abrupt("return",a.a.get(n,r));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=d},e336:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var i=function(){function e(t,n){r(this,e)}return o(e,null,[{key:"getToken",value:function(){var e=localStorage.getItem("token");return e||""}},{key:"getHeader",value:function(){return{headers:{"auth-token":this.getToken()}}}},{key:"setToken",value:function(e){console.log(e),localStorage.setItem("token",e)}}]),e}();t["a"]=i}}]);
//# sourceMappingURL=chunk-48d363af.58a22813.js.map