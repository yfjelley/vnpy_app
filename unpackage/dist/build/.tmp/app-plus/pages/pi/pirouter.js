(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pi/pirouter"],{"0025":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLoad:function(){var n=this,t=n.getGlobalUser("globalUser");if(null!=t){var r=n.getCurrentProjectInfo();if(null!=r){var u=n.getPiConfig();if(null!=u){var i=0;1==r.IsSecondEnabled&&(i=1),1==r.IsThirdEnabled&&(i=2),u.piShit>i?e.reLaunch({url:"piconfig"}):0==u.piShit?e.reLaunch({url:"pifirst"}):1==u.piShit?e.reLaunch({url:"pisecond"}):e.reLaunch({url:"pithird"})}else e.reLaunch({url:"piconfig"})}else e.reLaunch({url:"../main/main"})}else e.reLaunch({url:"../user/login"})},methods:{}};n.default=t}).call(this,t("6e42")["default"])},1569:function(e,n,t){"use strict";t.r(n);var r=t("4b6f"),u=t("30da");for(var i in u)"default"!==i&&function(e){t.d(n,e,function(){return u[e]})}(i);var a=t("2877"),l=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=l.exports},"30da":function(e,n,t){"use strict";t.r(n);var r=t("0025"),u=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);n["default"]=u.a},"4b6f":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u})},e8cb:function(e,n,t){"use strict";(function(e){t("a13b"),t("921b");r(t("66fd"));var n=r(t("1569"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["e8cb","common/runtime","common/vendor"]]]);