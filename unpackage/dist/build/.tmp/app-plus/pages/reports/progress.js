(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reports/progress"],{"4c07":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"a",function(){return s}),r.d(e,"b",function(){return o})},"6ca0":function(t,e,r){"use strict";var s=r("d4da"),o=r.n(s);o.a},b62d:function(t,e,r){"use strict";r.r(e);var s=r("f599"),o=r.n(s);for(var i in s)"default"!==i&&function(t){r.d(e,t,function(){return s[t]})}(i);e["default"]=o.a},d4da:function(t,e,r){},ef05:function(t,e,r){"use strict";(function(t){r("a13b"),r("921b");s(r("66fd"));var e=s(r("ff48"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},f599:function(t,e,r){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return r.e("graceUI/components/graceCirProgress").then(r.bind(null,"21e4"))},i={data:function(){return{userIsLogin:!1,userInfo:{},projectList:[{}],projectIndex:0,currentProjectInfo:{},projectStatistic:{},projectProgress:0,firstProgress:0,secondProgress:0,thirdProgess:0,chartList:[{Name:"操作员进度",value:"OperatorUserName"},{Name:"仓库进度",value:"WarehouseCode"}],chartIndex:0,chartRenderList:[]}},components:{graceCirProgress:o},onLoad:function(){this.onShow},onShow:function(){var e=this,r=e.getGlobalUser("globalUser");if(null!=r){e.userIsLogin=!0,e.userInfo=r;var s=e.getServerUrl();t.request({url:s+"/PhysicalInventoryOrder/GetList",method:"GET",header:{appKey:e.appKey,appSecret:e.appSecret,userId:r.Id,openId:r.OpenId,userInfo:encodeURI(JSON.stringify(r))},success:function(o){if(1==o.data.Status)if(o.data.Data.length>0){e.projectList=o.data.Data;var i=e.getCurrentProjectInfo();if(null!=i)for(var a=0;a<e.projectList.length;a++)i.Id===e.projectList[a].Id&&(e.projectIndex=a,e.currentProjectInfo=e.projectList[a],t.setStorageSync("currentProjectInfo",e.projectList[a]));else e.currentProjectInfo=e.projectList[0],t.setStorageSync("currentProjectInfo",e.projectList[0]);t.request({url:s+"/PhysicalInventoryOrder/GetStatistics/"+e.currentProjectInfo.Id,method:"POST",header:{appKey:e.appKey,appSecret:e.appSecret,userId:r.Id,openId:r.OpenId,userInfo:encodeURI(JSON.stringify(r))},success:function(r){1==r.data.Status?null==r.data.Data?(t.showToast({title:"此盘点无统计数据",duration:1500}),e.projectStatistic={}):(e.projectStatistic=r.data.Data,e.projectStatistic.TotalLines>0?e.projectProgress=Math.ceil(e.projectStatistic.CountedLines/e.projectStatistic.TotalLines*100):e.projectProgress=0,e.projectStatistic.FirstTotalLines>0?e.firstProgress=Math.ceil(e.projectStatistic.FirstCountedLines/e.projectStatistic.FirstTotalLines*100):e.firstProgress=0,1==e.projectStatistic.IsSecondEnabled&&(e.projectStatistic.SecondTotalLines>0?e.secondProgress=Math.ceil(e.projectStatistic.SecondCountedLines/e.projectStatistic.SecondTotalLines*100):e.secondProgress=0),1==e.projectStatistic.IsThirdEnabled&&(e.projectStatistic.FirstTotalLines>0?e.thirdProgess=Math.ceil(e.projectStatistic.ThirdCountedLines/e.projectStatistic.FirstTotalLines*100):e.thirdProgess=0)):t.showToast({title:r.data.StatusMessage,duration:2e3})},fail:function(){t.showToast({title:"网络异常请重试",duration:2e3,icon:"none"})},complete:function(){t.hideLoading()}}),1==e.currentProjectInfo.IsCompanyEnabled&&-1==e.chartList.indexOf({Name:"公司进度",value:"Company"})&&e.chartList.push({Name:"公司进度",value:"Company"}),1==e.currentProjectInfo.IsSiteEnabled&&-1==e.chartList.indexOf({Name:"分公司进度",value:"Site"})&&e.chartList.push({Name:"分公司进度",value:"Site"}),1==e.currentProjectInfo.IsProjectEnabled&&-1==e.chartList.indexOf({Name:"产品项目进度",value:"Project"})&&e.chartList.push({Name:"产品项目进度",value:"Project"})}else t.removeStorageSync("currentProjectInfo"),t.switchTab({url:"../user/usercenter"});else t.showToast({title:o.data.StatusMessage,duration:2e3})}})}else e.userIsLogin=!1,e.userInfo={},t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",success:function(e){e.confirm,t.reLaunch({url:"../user/login"})}})},methods:{bindPickerChangeProject:function(e){var r=this;r.projectIndex=e.target.value,r.currentProjectInfo=r.projectList[r.projectIndex],t.setStorageSync("currentProjectInfo",r.projectList[r.projectIndex]),r.getStatistics(r.currentProjectInfo.Id)},bindPickerChangeChart:function(e){var r=this;r.chartIndex=e.target.value,t.request({url:serverUrl+"/PhysicalInventoryOrder/GetLineStatistics/"+r.chartList[r.chartIndex].value,method:"POST",header:{appKey:r.appKey,appSecret:r.appSecret,userId:userInfo.Id,openId:userInfo.OpenId,userInfo:encodeURI(JSON.stringify(userInfo))},success:function(e){1==e.data.Status?null==e.data.Data?t.showToast({title:"暂无统计数据",duration:1500}):(r.projectStatistic=e.data.Data,r.projectStatistic.TotalLines>0?r.projectProgress=Math.ceil(r.projectStatistic.CountedLines/r.projectStatistic.TotalLines*100):r.projectProgress=0,r.projectStatistic.FirstTotalLines>0?r.firstProgress=Math.ceil(r.projectStatistic.FirstCountedLines/r.projectStatistic.FirstTotalLines*100):r.firstProgress=0,1==r.projectStatistic.IsSecondEnabled&&(r.projectStatistic.SecondTotalLines>0?r.secondProgress=Math.ceil(r.projectStatistic.SecondCountedLines/r.projectStatistic.SecondTotalLines*100):r.secondProgress=0),1==r.projectStatistic.IsThirdEnabled&&(r.projectStatistic.FirstTotalLines>0?r.thirdProgess=Math.ceil(r.projectStatistic.ThirdCountedLines/r.projectStatistic.FirstTotalLines*100):r.thirdProgess=0)):t.showToast({title:e.data.StatusMessage,duration:2e3})},fail:function(){t.showToast({title:"网络异常请重试",duration:2e3,icon:"none"})},complete:function(){t.hideLoading()}})},getStatistics:function(e){var r=this,o=r.getServerUrl(),i=r.getGlobalUser("globalUser");t.request({url:o+"/PhysicalInventoryOrder/GetStatistics/"+e,method:"POST",header:{appKey:r.appKey,appSecret:r.appSecret,userId:i.Id,openId:i.OpenId,userInfo:encodeURI(JSON.stringify(i))},success:function(e){1==e.data.Status?null==e.data.Data?(t.showToast({title:"此盘点无统计数据",duration:1500}),r.projectStatistic={}):(r.projectStatistic=e.data.Data,r.projectStatistic.TotalLines>0?r.projectProgress=Math.ceil(r.projectStatistic.CountedLines/r.projectStatistic.TotalLines*100):r.projectProgress=0,r.projectStatistic.FirstTotalLines>0?r.firstProgress=Math.ceil(r.projectStatistic.FirstCountedLines/r.projectStatistic.FirstTotalLines*100):r.firstProgress=0,1==r.projectStatistic.IsSecondEnabled&&(r.projectStatistic.SecondTotalLines>0?r.secondProgress=Math.ceil(r.projectStatistic.SecondCountedLines/r.projectStatistic.SecondTotalLines*100):r.secondProgress=0),1==r.projectStatistic.IsThirdEnabled&&(r.projectStatistic.FirstTotalLines>0?r.thirdProgess=Math.ceil(r.projectStatistic.ThirdCountedLines/r.projectStatistic.FirstTotalLines*100):r.thirdProgess=0),console.log(s(r.projectStatistic," at pages\\reports\\progress.vue:427"))):t.showToast({title:e.data.StatusMessage,duration:2e3})},fail:function(){t.showToast({title:"网络异常请重试",duration:2e3,icon:"none"})},complete:function(){t.hideLoading()}})}}};e.default=i}).call(this,r("6e42")["default"],r("0de9")["default"])},ff48:function(t,e,r){"use strict";r.r(e);var s=r("4c07"),o=r("b62d");for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);r("6ca0");var a=r("2877"),c=Object(a["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports}},[["ef05","common/runtime","common/vendor"]]]);