(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/changeuserinfo"],{4657:function(e,a,t){},8942:function(e,a,t){"use strict";(function(e){function t(e){var a=new Date,t=(a.getFullYear(),a.getMonth()+1),n=a.getDate();return"start"===e?5:"end"===e&&1,t=t>9?t:"0"+t,n=n>9?n:"0"+n,"${year}-${month}-${day}"}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{userInfo:{},userContact:{},realName:"",code:"",genderValue:"",startDate:t("start"),endDate:t("end"),birthday:" ",mobile:"",telephone:"",email:"",qq:"",wechat:""}},onLoad:function(){var a=this,t=a.getServerUrl(),n=a.getGlobalUser("globalUser");null!=n?(a.userInfo=n,console.log(n),e.request({url:t+"/User/GetUserContact",method:"POST",header:{appKey:a.appKey,appSecret:a.appSecret,userId:JSON.stringify(n.Id),openId:JSON.stringify(n.OpenId),userInfo:encodeURI(JSON.stringify(n))},success:function(t){console.log(t.data.Data),1==t.data.Status?(a.userContact=t.data.Data,a.realName=null!=n.RealName?n.RealName:"",a.code=null!=t.data.Data.Code?t.data.Data.Code:"",a.genderValue=t.data.Data.Gender,a.birthday=t.data.Data.Birthday,a.mobile=null!=t.data.Data.Mobile?t.data.Data.Mobile:"",a.telephone=null!=t.data.Data.Telephone?t.data.Data.Telephone:"",a.email=null!=t.data.Data.Email?t.data.Data.Email:"",a.qq=null!=t.data.Data.Qq?t.data.Data.Qq:"",a.wechat=null!=t.data.Data.WeChat?t.data.Data.WeChat:""):e.showToast({title:t.data.StatusMessage,duration:2e3})},fail:function(){e.showToast({title:"网络异常请重试",duration:2e3,icon:"none"})},complete:function(){e.hideLoading()}})):(a.userInfo={},e.reLaunch({url:"login"}))},methods:{clearRealName:function(){this.realName=""},clearCode:function(){this.code=""},clearMobile:function(){this.mobile=""},clearTelephone:function(){this.telephone=""},clearEmail:function(){this.email=""},clearQq:function(){this.qq=""},clearWechat:function(){this.wechat=""},genderChange:function(e){this.genderValue=e.target.value},sbindDateChange:function(e){this.birthday=e.target.value},changeUserInfor:function(){var a=this,t=a.getServerUrl(),n=a.getGlobalUser("globalUser");""!=a.realName?e.request({url:t+"/User/ChangeUserInfo?realName="+a.realName+"&code="+a.code+"&gender="+a.genderValue+"&birthday="+a.birthday+"&mobile="+a.mobile+"&telephone="+a.telephone+"&email="+a.email+"&qq="+a.qq+"&weChat="+a.wechat,method:"POST",header:{appKey:a.appKey,appSecret:a.appSecret,userId:JSON.stringify(n.Id),openId:JSON.stringify(n.OpenId),userInfo:encodeURI(JSON.stringify(n))},success:function(t){console.log(t.data),1==t.data.Status?(e.showToast({title:"更新成功",duration:2e3}),n.RealName=a.realName,n.Code=a.code,e.setStorageSync("globalUser",n)):e.showToast({title:t.data.StatusMessage,duration:2e3})},fail:function(){e.showToast({title:"网络异常请重试",duration:2e3,icon:"none"})},complete:function(){e.hideLoading()}}):e.showToast({title:"请输入姓名",duration:1500})},onNavigationBarButtonTap:function(a){"back"==a.type&&e.reLaunch({url:"usercenter"})}}};a.default=n}).call(this,t("543d")["default"])},"8c07":function(e,a,t){"use strict";(function(e){t("a13b"),t("921b");n(t("66fd"));var a=n(t("921b4"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"921b4":function(e,a,t){"use strict";t.r(a);var n=t("ad36"),o=t("9227");for(var r in o)"default"!==r&&function(e){t.d(a,e,function(){return o[e]})}(r);t("dd80");var l,i=t("f0c5"),u=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);a["default"]=u.exports},9227:function(e,a,t){"use strict";t.r(a);var n=t("8942"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=o.a},ad36:function(e,a,t){"use strict";var n,o=function(){var e=this,a=e.$createElement;e._self._c},r=[];t.d(a,"b",function(){return o}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return n})},dd80:function(e,a,t){"use strict";var n=t("4657"),o=t.n(n);o.a}},[["8c07","common/runtime","common/vendor"]]]);