(function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"519f":function(t,e,r){"use strict";r("e7ba")},5472:function(t,e,r){t.exports=r.p+"img/deviceMockup.6c746c4f.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("router-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{href:"",target:"_blank",text:"","x-large":""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Clink Logo",contain:"",src:r("cf05"),transition:"scale-transition",width:"40"}}),n("h2",[t._v("Clink")])],1)])],1),n("v-spacer"),n("router-link",{attrs:{to:"/privacy"}},[n("v-btn",{attrs:{href:"",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Privacy Policy")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),n("v-main",{staticClass:"background-color"},[n("router-view")],1),n("v-footer",{attrs:{color:"gray",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"grey darken-4 py-10 white--text",attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[t._v(" Want to reach out to us? ")]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("a",{attrs:{href:"mailto:"}},[t._v("support@clinkconnect.app")])])],1)],1)],1)],1)},o=[],i={name:"Clink Connect",components:{},data:function(){return{}},computed:{},methods:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},c=i,s=(r("f16d"),r("2877")),l=r("6544"),u=r.n(l),p=r("7496"),f=r("40dc"),v=r("8336"),d=r("62ad"),h=r("553a"),g=r("132d"),y=r("adda"),m=r("f6c4"),b=r("0fd9"),w=r("2fa4"),_=Object(s["a"])(c,a,o,!1,null,"62b3883d",null),k=_.exports;u()(_,{VApp:p["a"],VAppBar:f["a"],VBtn:v["a"],VCol:d["a"],VFooter:h["a"],VIcon:g["a"],VImg:y["a"],VMain:m["a"],VRow:b["a"],VSpacer:w["a"]});var j=r("f309");n["a"].use(j["a"]);var x=new j["a"]({theme:{themes:{light:{primary:"#696698",secondary:"#365691"}}}}),C=r("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"fill-height",attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"8"}},[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?n("v-col",{attrs:{cols:"12"}},[n("v-container")],1):t._e(),n("v-row",{attrs:{justify:"start"}},[n("h1",[t._v("Clink")])]),n("v-row",{attrs:{justify:"start"}},[n("v-card",{attrs:{width:"70%",height:"10",color:"primary",elevation:"0"}})],1),n("v-row",[n("v-container")],1),n("v-row",{attrs:{justify:"center"}},[n("body",[t._v(" Using Clink is the best way to break down social barriers, meet new people, and experience being in the moment. Clink utilizes Bluetooth technology to allow you to message and connect with the people around with you. Download the app and start connecting! ")])]),n("v-row",[n("v-container")],1),n("v-row",[n("a",{attrs:{href:"https://apps.apple.com/app/id1570368363/"}},[n("v-img",{attrs:{src:r("ddc1")}})],1)])],1)],1)],1),t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?n("v-col",{attrs:{cols:"12"}},[n("v-container")],1):t._e(),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"end",justify:"end","no-gutters":""}},[n("v-img",{staticClass:"mockup",attrs:{"aspect-ratio":"1",src:r("5472")}})],1)],1)],1)],1)},V=[],P={name:"Home",data:function(){return{}}},M=P,S=(r("519f"),r("b0af")),$=r("a523"),B=Object(s["a"])(M,O,V,!1,null,"17f4e573",null),A=B.exports;u()(B,{VCard:S["a"],VCol:d["a"],VContainer:$["a"],VImg:y["a"],VRow:b["a"]});var E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" Privacy ")])},I=[],R={name:"Privacy",data:function(){return{}}},T=R,U=(r("9c73"),Object(s["a"])(T,E,I,!1,null,"f51c71c0",null)),D=U.exports;n["a"].config.productionTip=!1,n["a"].use(C["a"]);var J=[{path:"/",component:A},{path:"/privacy",component:D}],z=new C["a"]({mode:"history",routes:J});new n["a"]({vuetify:x,router:z,render:function(t){return t(k)}}).$mount("#app")},9415:function(t,e,r){},"98bc":function(t,e,r){},"9c73":function(t,e,r){"use strict";r("9415")},cf05:function(t,e,r){t.exports=r.p+"img/logo.1984915a.png"},ddc1:function(t,e,r){t.exports=r.p+"img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.2928664f.svg"},e7ba:function(t,e,r){},f16d:function(t,e,r){"use strict";r("98bc")}});
//# sourceMappingURL=app.5f0772ff.js.map