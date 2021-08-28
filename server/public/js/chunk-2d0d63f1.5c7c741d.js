(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CRow",[e("CCol",{attrs:{md:"12"}},[e("CCard",[e("CCardHeader",[t._v(" Australia covid alert status ")]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12",lg:"6"}},[e("CRow",[e("CCol",{attrs:{sm:"6"}},[e("CCallout",{attrs:{color:"info"}},[e("small",{staticClass:"text-muted"},[t._v("Total Alerts")]),e("br"),e("strong",{staticClass:"h4"},[t._v(t._s(this.data_list.total_alert))])])],1),e("CCol",{attrs:{sm:"6"}},[e("CCallout",{attrs:{color:"danger"}},[e("small",{staticClass:"text-muted"},[t._v("Last Update")]),e("br"),e("strong",{staticClass:"h4"},[t._v(t._s(this.data_list.date))])])],1)],1),e("hr",{staticClass:"mt-0"}),t._l(this.data_list.daylist,(function(a,s){return e("div",{key:s,staticClass:"progress-group mb-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"string"===typeof a.day,expression:"typeof v.day === 'string'"}],staticClass:"progress-group-prepend"},[e("span",{staticClass:"progress-group-text"},[t._v(" "+t._s(a.day)+" ("+t._s(a.count)+") ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"string"===typeof a.day,expression:"typeof v.day === 'string'"}],staticClass:"progress-group-bars"},[e("CProgress",{staticClass:"progress-xs",attrs:{color:"info",value:a.count/t.data_list.daylist[Object.keys(t.data_list.daylist).length-1].sum*100}})],1)])}))],2),e("CCol",{attrs:{sm:"12",lg:"6"}},[e("CRow",[e("CCol",{attrs:{sm:"6"}},[e("CCallout",{attrs:{color:"warning"}},[e("small",{staticClass:"text-muted"},[t._v("Alert Suburbss")]),e("br"),e("strong",{staticClass:"h4"},[t._v(t._s(this.data_list["list"][t.data_list["list"].length-1]))])])],1)],1),e("hr",{staticClass:"mt-0"}),e("ul",{staticClass:"horizontal-bars type-2"},t._l(this.data_list["list"],(function(a,s){return e("div",{key:s,staticClass:"progress-group"},[s<t.data_list["list"].length-1?e("div",{staticClass:"progress-group-header"},[e("fa",{attrs:{icon:["fas","location-arrow"]}}),e("span",{staticClass:"title"},[t._v(" "+t._s(a[0]["Suburb"])+" ("+t._s(a.length)+")")]),e("span",{staticClass:"ml-auto font-weight-bold"},[t._v(t._s(Math.floor(a.length/t.data_list.total_alert*100))+"%")])],1):t._e(),s<t.data_list["list"].length-1?e("div",{staticClass:"progress-group-bars"},[e("CProgress",{staticClass:"progress-xs",attrs:{value:a.length/t.data_list.total_alert*100,color:"warning"}})],1):t._e()])})),0)],1)],1),e("br"),e("CTabs",{attrs:{"add-tab-classes":"mt-1"}},t._l(this.data_list["list"],(function(a,s){return e("CTab",{key:s,attrs:{active:0==s}},[s<t.data_list["list"].length-1?e("template",{slot:"title"},[e("CIcon",{attrs:{name:"cil-globe-alt"}}),t._v(" "+t._s(a[0]["Suburb"])+" ("+t._s(a.length)+") ")],1):t._e(),s<t.data_list["list"].length-1?e("CDataTable",{staticClass:"mb-0 table-outline",attrs:{hover:"",items:a,fields:t.tableFields,"head-color":"light",striped:"",pagination:""}}):t._e()],2)})),1)],1)],1)],1)],1)],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CChartLine",{attrs:{datasets:t.defaultDatasets,options:t.defaultOptions,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}})},n=[],l=e("f485"),i=e("52d7"),c=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if("undefined"===typeof t)throw new TypeError("Hex color is not defined");var e,s,r,o=t.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(e=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16)):(e=parseInt(t.slice(1,2),16),s=parseInt(t.slice(2,3),16),r=parseInt(t.slice(3,5),16)),"rgba(".concat(e,", ").concat(s,", ").concat(r,", ").concat(a/100,")")},d=c;function u(t,a){return Math.floor(Math.random()*(a-t+1)+t)}var h={name:"MainChartExample",components:{CChartLine:l["CChartLine"]},computed:{defaultDatasets:function(){for(var t=Object(i["a"])("success2")||"#4dbd74",a=Object(i["a"])("info")||"#20a8d8",e=Object(i["a"])("danger")||"#f86c6b",s=27,r=[],o=[],n=[],l=0;l<=s;l++)r.push(u(50,200)),o.push(u(80,100)),n.push(65);return[{label:"My First dataset",backgroundColor:d(a,10),borderColor:a,pointHoverBackgroundColor:a,borderWidth:2,data:r},{label:"My Second dataset",backgroundColor:"transparent",borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:o},{label:"My Third dataset",backgroundColor:"transparent",borderColor:e,pointHoverBackgroundColor:e,borderWidth:1,borderDash:[8,5],data:n}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}}},p=h,b=e("ebbf"),f=Object(b["a"])(p,o,n,!1,null,null,null),C=f.exports;function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function v(t,a,e,s,r,o,n){try{var l=t[o](n),i=l.value}catch(c){return void e(c)}l.done?a(i):Promise.resolve(i).then(s,r)}function _(t){return function(){var a=this,e=arguments;return new Promise((function(s,r){var o=t.apply(a,e);function n(t){v(o,s,r,n,l,"next",t)}function l(t){v(o,s,r,n,l,"throw",t)}n(void 0)}))}}var m={name:"Dashboard",components:{MainChartExample:C},data:function(){return{data_list:{total_alert:0,date:"2000-01-01",list:{},daylist:{}},sorting_list:{},selected:"Month",tableFields:[{key:"Date"},{key:"Time"},{key:"Address",label:"",_classes:"text-center"},{key:"Venue",_classes:"text-center"},{key:"Alert",label:"Advice"}]}},created:function(){this.getCurrentLocation()},methods:{getCurrentLocation:function(){var t=this;return _(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e="https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/covid-case-locations-20210812-1911.json",axios.get(e).then((function(a){t.data_list["total_alert"]=a.data.data.monitor.length,t.data_list["date"]=a.data.date,t.sortAlert(a.data.data.monitor)}));case 2:case"end":return a.stop()}}),a)})))()},sortAlert:function(t){this.sortBySuburb(t),this.sortByDate(t)},sortBySuburb:function(t){for(var a={},e=0,s=0;s<t.length;s++){var r=t[s]["Suburb"];void 0===a[r]&&(a[r]=[]),a[r].push(t[s])}e=Object.keys(a).length,a=Object.values(a),a.sort((function(t,a){return a.length-t.length})),a=a.slice(0,5),this.data_list["list"]=a,this.data_list["list"].push(e)},sortByDate:function(t){for(var a={},e=0;e<t.length;e++){var s=new Date(t[e]["Date"]),r=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();void 0===a[r]?a[r]={day:r,count:1}:a[r]["count"]+=1}var o=0,n=Object.values(a);n.sort((function(t,a){var e=new Date(t.day),s=new Date(a.day);return s-e})),n=n.slice(0,7),o=n.reduce((function(t,a){return"object"===g(t)?t.count+a.count:t+a.count})),n.push({sum:o}),this.data_list.daylist=n}}},y=m,w=Object(b["a"])(y,s,r,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.5c7c741d.js.map