(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"43qG":function(e,a,t){"use strict";var i=t("0Owb"),n=(t("eNCU"),t("pjJH")),o=t("PpiC"),r=t("fWQN"),c=t("mtLc"),s=t("yKVA"),p=t("879j"),l=t("q1tI"),d=t.n(l),m=t("TSYQ"),g=t.n(m),u={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}},v=u,b=t("VbCV"),f=t.n(b),h=function(e){Object(s["a"])(t,e);var a=Object(p["a"])(t);function t(e){var i;return Object(r["a"])(this,t),i=a.call(this,e),i.state={},i}return Object(c["a"])(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.backText,r=e.linkElement,c=void 0===r?"a":r,s=e.type,p=e.title,m=e.desc,u=e.img,b=e.actions,h=e.redirect,w=Object(o["a"])(e,["className","backText","linkElement","type","title","desc","img","actions","redirect"]),E=s in v?s:"404",k=g()(f.a.exception,a);return d.a.createElement("div",Object(i["a"])({className:k},w),d.a.createElement("div",{className:f.a.imgBlock},d.a.createElement("div",{className:f.a.imgEle,style:{backgroundImage:"url(".concat(u||v[E].img,")")}})),d.a.createElement("div",{className:f.a.content},d.a.createElement("h1",null,p||v[E].title),d.a.createElement("div",{className:f.a.desc},m||v[E].desc),d.a.createElement("div",{className:f.a.actions},b||Object(l["createElement"])(c,{to:h,href:h},d.a.createElement(n["a"],{type:"primary"},t)))))}}]),t}(d.a.PureComponent);h.defaultProps={backText:"back to home",redirect:"/"};a["a"]=h},IAhd:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var i={"app.exception.back":"\u8fd4\u56de\u9996\u9875","app.exception.description.403":"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u6b64\u9875\u9762","app.exception.description.404":"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728","app.login.userName":"\u7528\u6237\u540d","app.login.email":"\u90ae\u7bb1","app.login.password":"\u5bc6\u7801","app.login.message-invalid-credentials":"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef","app.login.sign-in-with":"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f","app.login.login":"\u767b\u5f55","app.login.verification-code-warning":"\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001","app.login.verification-code-err":"\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5","app.login.err":"\u9047\u5230\u9519\u8bef","app.login.confirm.password":"\u786e\u8ba4\u5bc6\u7801","app.register-result.msg":"\u6ce8\u518c\u6210\u529f","app.register.register":"\u6ce8\u518c","app.register.get-verification-code":"\u83b7\u53d6\u9a8c\u8bc1\u7801","app.register.sign-in":"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55","validation.userName.required":"\u8bf7\u8f93\u5165\u7528\u6237\u540d!","validation.email.required":"\u8bf7\u8f93\u5165\u90ae\u7bb1\u540d!","validation.emailType.required":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u540d!","validation.password.required":"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01","validation.password.strength.strong":"\u5f3a\u5ea6\uff1a\u9ad8","validation.password.strength.medium":"\u5f3a\u5ea6\uff1a\u4e2d","validation.password.strength.short":"\u5f3a\u5ea6\uff1a\u592a\u77ed","validation.password.twice":"\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d!","validation.password.strength.msg":"\u8bf7\u81f3\u5c11\u8f93\u5165 6 \u4e2a\u5b57\u7b26\u3002\u8bf7\u4e0d\u8981\u4f7f\u7528\u5bb9\u6613\u88ab\u731c\u5230\u7684\u5bc6\u7801\u3002","validation.phone-number.required":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01","validation.phone-number.wrong-format":"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01","validation.confirm-password.required":"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01","validation.verification-code.required":"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01","menu.account.webSettings":"\u7cfb\u7edf\u8bbe\u7f6e","menu.account.logout":"\u9000\u51fa\u767b\u5f55","menu.about":"\u5173\u4e8e","form.password.placeholder":"\u81f3\u5c116\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199","form.confirm-password.placeholder":"\u786e\u8ba4\u5bc6\u7801","form.phone-number.placeholder":"\u624b\u673a\u53f7","form.verification-code.placeholder":"\u9a8c\u8bc1\u7801","form.get-captcha":"\u83b7\u53d6\u9a8c\u8bc1\u7801","form.captcha.second":"\u79d2"},n=i,o=function(e){var a,t=e.id,i=e.defaultMessage;return null!==(a=n[t])&&void 0!==a?a:i}},VbCV:function(e,a,t){e.exports={exception:"exception___2GeG8",imgBlock:"imgBlock___1I7QM",imgEle:"imgEle___24cxR",content:"content___kGx-7",desc:"desc___3GiZp",actions:"actions___3GpZH"}},pGWQ:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),n=t.n(i),o=t("55Ip"),r=t("IAhd"),c=t("43qG");a["default"]=function(){return n.a.createElement(c["a"],{type:"404",linkElement:o["a"],desc:Object(r["a"])({id:"app.exception.description.404"}),backText:Object(r["a"])({id:"app.exception.back"})})}}}]);