(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"17a0":function(t,e,n){"use strict";var o=n("d1ad"),r=n.n(o);r.a},"7de0":function(t,e,n){"use strict";n.r(e);var o=n("9053"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},9053:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},b6a3:function(t,e,n){"use strict";n.r(e);var o=n("7de0");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("17a0");var u,a,l,c,i=n("f0c5"),p=Object(i["a"])(o["default"],u,a,!1,null,null,null,!1,l,c);e["default"]=p.exports},d1ad:function(t,e,n){},dd6e:function(t,e,n){"use strict";(function(t,e){n("a13b"),n("921b");var o=u(n("66fd")),r=u(n("b6a3"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("8127"),o.default.config.productionTip=!1,o.default.prototype.getAppEnvironment=function(e){try{var n=t.getStorageSync("appEnvironment");return null!=n&&""!=n&&void 0!=typeof n?n:"demo"}catch(o){return"demo"}},o.default.prototype.getServerUrl=function(e){var n=this.getAppEnvironment(),o=t.getStorageSync("serverList");return"production"===n?o.production:"test"===n?o.test:"https://api.pandianapp.com/api"},o.default.prototype.appKey="Troy",o.default.prototype.appSecret="Troy",o.default.prototype.getCurrentProjectInfo=function(e){var n=t.getStorageSync("currentProjectInfo");return null!=n&&""!=n&&void 0!=typeof n?n:null},o.default.prototype.getPiConfig=function(e){var n=t.getStorageSync("piConfig");return null!=n&&""!=n&&void 0!=typeof n?n:null},o.default.prototype.getCookieHours=function(e){var n=t.getStorageSync("cookieType");return"1"===n?24:"30"===n?720:168},o.default.prototype.getGlobalUser=function(e){var n=t.getStorageSync("globalUser");return null!=n&&""!=n&&void 0!=typeof n?n.expiredDate>new Date?n:(t.removeStorageSync("globalUser"),null):null},r.default.mpType="app";var c=new o.default(a({},r.default));e(c).$mount()}).call(this,n("543d")["default"],n("543d")["createApp"])}},[["dd6e","common/runtime","common/vendor"]]]);