(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"17a0":function(e,t,n){"use strict";var o=n("5124"),r=n.n(o);r.a},5124:function(e,t,n){},"7de0":function(e,t,n){"use strict";n.r(t);var o=n("7fd3"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"7fd3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},b6a3:function(e,t,n){"use strict";n.r(t);var o=n("7de0");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("17a0");var u,a,l=n("2877"),c=Object(l["a"])(o["default"],u,a,!1,null,null,null);t["default"]=c.exports},dd6e:function(e,t,n){"use strict";(function(e,t){n("a13b"),n("921b");var o=u(n("66fd")),r=u(n("b6a3"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("8127"),o.default.config.productionTip=!1,o.default.prototype.getAppEnvironment=function(t){try{var n=e.getStorageSync("appEnvironment");return null!=n&&""!=n&&void 0!=typeof n?n:"demo"}catch(o){return"demo"}},o.default.prototype.getServerUrl=function(t){var n=this.getAppEnvironment(),o=e.getStorageSync("serverList");return"production"===n?o.production:"test"===n?o.test:"https://api.pandianapp.com/api"},o.default.prototype.appKey="Troy",o.default.prototype.appSecret="Troy",o.default.prototype.getCurrentProjectInfo=function(t){var n=e.getStorageSync("currentProjectInfo");return null!=n&&""!=n&&void 0!=typeof n?n:null},o.default.prototype.getPiConfig=function(t){var n=e.getStorageSync("piConfig");return null!=n&&""!=n&&void 0!=typeof n?n:null},o.default.prototype.getCookieHours=function(t){var n=e.getStorageSync("cookieType");return"1"===n?24:"30"===n?720:168},o.default.prototype.getGlobalUser=function(t){var n=e.getStorageSync("globalUser");return null!=n&&""!=n&&void 0!=typeof n?n.expiredDate>new Date?n:(e.removeStorageSync("globalUser"),null):null},r.default.mpType="app";var c=new o.default(a({},r.default));t(c).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])}},[["dd6e","common/runtime","common/vendor"]]]);