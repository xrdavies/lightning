(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{EFWY:function(e,t,n){e.exports={mapMarkers:"mapMarkers___5IVbR",map:"map___EBtlj"}},Ho1b:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));n("GJOS");var r=n("b+i2"),a=(n("eE3J"),n("GSZB")),o=n("oBTY"),i=n("fWQN"),l=n("mtLc"),c=n("yKVA"),u=n("879j"),s=n("q1tI"),p=n.n(s),f=n("17x9"),d=n.n(f),m=n("AAgL"),y=n("4l6Y"),v=n("jfUH"),b=n("EFWY"),h=n.n(b),g=function(t){Object(c["a"])(s,t);var n=Object(u["a"])(s);function s(){var e;Object(i["a"])(this,s);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),e.state={showModal:!1,tempValue:void 0,mapMaker:[]},e.myProps=[],e.handleSelect=function(t){var n=t.poi,r=n.district,a=n.address,o=n.name,i=n.adcode,l=n.location,c=l.lng,u=l.lat;window.AMap.plugin("AMap.PlaceSearch",(function(){var t=new window.AMap.PlaceSearch;t.search(r+a+o,(function(t,n){var l=[];n.poiList.pois.map((function(e){return l.push({position:{longitude:e.location.lng,latitude:e.location.lat},title:e.name,data:[{name:"\u4e3b\u8425\u4e1a\u52a1",value:e.type},{name:"\u5730\u5740",value:"".concat(e.address,"-").concat(e.name)}],classType:"mapMaker"}),null})),e.setState({mapMaker:l,tempValue:{adcode:i,address:r+a+o,latitude:u,longitude:c}})}))}))},e}return Object(l["a"])(s,[{key:"render",value:function(){var t=this,n=this.state,i=n.tempValue,l=n.mapMaker,c=this.props,u=c.data,s=c.display,f=c.latField,d=c.lngField,m=c.model,b=c.amapkey,g=[];u.forEach((function(t){var n,r=[];s.forEach((function(n){var a;r.push({name:null===(a=Object(v["t"])(m,n))||void 0===a?void 0:a.displayName,value:e.get(t,n)})})),e.get(t,d)&&e.get(t,f)&&g.push({position:{longitude:e.get(t,d),latitude:e.get(t,f)},title:e.get(t,null===(n=Object(v["s"])(m))||void 0===n?void 0:n.titleField),data:r,classType:"map"})}));var O={mapMaker:h.a.mapMarkers,map:h.a.map};return p.a.createElement(y["a"],{useAMapUI:!0,options:{},zoom:i&&20,amapkey:b,center:i},(function(e){var n=e.Markers,i=e.Autocomplete;return p.a.createElement(p.a.Fragment,null,p.a.createElement(n,{markers:[].concat(Object(o["a"])(l),g),render:function(e){return p.a.createElement("div",null,p.a.createElement(r["a"],{title:e.title,content:e.data.map((function(e){return e.value&&p.a.createElement("p",null,e.name,":",e.value)}))},p.a.createElement(a["a"],{className:O[e.classType],style:{fontSize:28},type:"environment",theme:"filled"})))}}),p.a.createElement(i,{options:{},onSelect:t.handleSelect,placeholder:"\u641c\u7d22",style:{transform:"translateY(-200%)",marginLeft:8}}))}))}}]),s}(m["a"]);g.propTypes={value:d.a.array},g.defaultProps={value:[]}}).call(this,n("LvDl"))},Iw0d:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return s}));var r=n("tJVT"),a=n("q1tI"),o=n.n(a),i=n("Ho1b"),l=n("mmaM"),c=n("VM7V"),u=n("jfUH");function s(t){var n=Object(u["X"])("amap_key"),s=t.match.params.model,p=Object(a["useState"])([]),f=Object(r["a"])(p,2),d=f[0],m=f[1];return Object(a["useEffect"])((function(){Object(l["queryContent"])({model:s,expandFields:e.uniq(c["b"])}).then((function(e){var t=e.list;m(t)}));var t=document.querySelector(".antd-pro-layouts-basic-layout-content");return t&&(t.style.position="relative"),function(){t.style.position=null}}),[]),o.a.createElement("div",{style:{margin:-24,position:"absolute",left:0,right:0,top:0,bottom:0,boxShadow:"0 1px 4px rgba(0, 21, 41, 0.08)"}},o.a.createElement(i["a"],{data:d,amapkey:n,latField:c["c"],lngField:c["d"],display:c["a"],model:s}))}}.call(this,n("LvDl"))},VM7V:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l}));var r=["address.address","type","name"],a="address.latitude",o="address.longitude",i=[];a.split(".").length>1&&i.push(a.split(".")[0]),o.split(".").length>1&&i.push(o.split(".")[0]),r.forEach((function(e){var t=e.split(".");t.length>1&&i.push(t[0])}));var l=e.uniq(i)}).call(this,n("LvDl"))},"b+i2":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("q1tI"),a=n("djfd"),o=n("qupT"),i=n("nW6I");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e){var t=b();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=function(e){f(n,e);var t=m(n);function n(){var e;return u(this,n),e=t.apply(this,arguments),e.saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,o=e.props,i=o.prefixCls,l=g(o,["prefixCls"]);delete l.title;var u=n("popover",i);return r["createElement"](a["a"],c({},l,{prefixCls:u,ref:e.saveTooltip,overlay:e.getOverlay(u)}))},e}return p(n,[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,a=t.content;return Object(i["a"])(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),r["createElement"]("div",null,n&&r["createElement"]("div",{className:"".concat(e,"-title")},n),r["createElement"]("div",{className:"".concat(e,"-inner-content")},a))}},{key:"render",value:function(){return r["createElement"](o["a"],null,this.renderPopover)}}]),n}(r["Component"]);O.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}}}]);