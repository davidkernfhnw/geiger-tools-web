(function(){var t={7422:function(t,o,e){"use strict";e(6981),e(537);var a=e(144),s=e(5069);e(44);a["default"].use(s.ZPm);var n=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-brand",[a("img",{attrs:{src:e(7672),alt:"GEIGER Logo",height:"50px"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"Tools",right:""}},[a("b-dropdown-item",{attrs:{to:"/android/toolbox"}},[t._v("GEIGER Toolbox for Android")]),a("b-dropdown-item",{attrs:{to:"/android/chatbot"}},[t._v("Chatbot for Android")]),a("b-dropdown-item",{attrs:{to:"/android/ksp-security"}},[t._v("KSP Security for Android")]),a("b-dropdown-item",{attrs:{to:"/android/cyberrange"}},[t._v("Cyberrange for Android")]),a("b-dropdown-item",{attrs:{to:"/web/csmg"}},[t._v("CSMG Online Web App")])],1),a("b-nav-item",{attrs:{to:"/instructions"}},[t._v("How to use")]),a("b-nav-item",{attrs:{to:"/help"}},[t._v("Get Help")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Language",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("DE")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("NL")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RO")])],1)],1)],1)],1),a("router-view"),a("BottomFooter")],1)},r=[],i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("footer",{staticStyle:{"background-color":"white"},attrs:{id:"footer"}},[a("b-container",{staticClass:"py-4",attrs:{fluid:""}},[a("b-row",{staticClass:"d-flex mx-auto"},[a("b-col",{attrs:{sm:"12",md:"2"}},[a("img",{staticClass:"align-right",staticStyle:{"max-height":"50px","padding-right":"25px","margin-top":"5px","margin-bottom":"10px"},attrs:{src:e(8456)}})]),a("b-col",{attrs:{sm:"12",md:"10"}},[a("h6",{staticClass:"align-left"},[a("small",[t._v(" This project has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No. 883588 (GEIGER). The opinions expressed and arguments employed herein do not necessarily reflect the official views of the funding body.")])])])],1),a("b-row",[a("b-col",{staticClass:"text-center"},[a("small",{staticClass:"credit",staticStyle:{"font-weight":"200"}},[t._v(" © 2022 GEIGER")])])],1)],1)],1)},l=[],c={name:"TheFooter"},d=c,m=e(1001),u=(0,m.Z)(d,i,l,!1,null,"f221c1b8",null),g=u.exports,b={components:{BottomFooter:g}},p=b,v=(0,m.Z)(p,n,r,!1,null,null,null),f=v.exports,h=e(8345),A=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"home"},[a("b-container",{attrs:{fluid:"sm"}},[a("b-img",{staticClass:"mt-3 mb-5",attrs:{alt:"Geiger-logo",src:e(7672),fluid:"",width:"300rem"}}),a("b-row",{staticClass:"m-4"},t._l(t.tools,(function(o){return a("b-card",{key:o,staticClass:"m-3 p-3 shadow",staticStyle:{width:"300px",height:"340px"},attrs:{"border-variant":"light"}},[a("img",{attrs:{src:e(3709)("./"+o.logo),alt:o.logo,width:"150px"}}),a("b-card-title",{staticClass:"mt-2"},[t._v(" "+t._s(o.name)+" ")]),a("b-button",{staticStyle:{position:"absolute",bottom:"20px",left:"20px",right:"20px"},attrs:{to:o.url,variant:"primary"}},[a("b",[t._v("Get Tool")])])],1)})),1)],1)],1)},w=[],y={name:"HomeView",components:{},data:()=>({tools:[{name:"GEIGER Toolbox for Android",url:"/android/toolbox",logo:"toolbox-logo.png"},{name:"Chatbot for Android",url:"/android/chatbot",logo:"default-logo.png"},{name:"KSP Security for Android",url:"/android/ksp-security",logo:"montimage-logo-rect.png"},{name:"Cyberrange for Android",url:"/android/cyberrange",logo:"montimage-logo-rect.png"},{name:"CSMG Online Web App",url:"/web/csmg",logo:"default-logo.png"}]}),methods:{}},x=y,C=(0,m.Z)(x,A,w,!1,null,"021f983f",null),k=C.exports,E=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{staticClass:"gethelp"},[e("h1",[t._v("Help page")]),e("b-button",{staticClass:"back-btn",attrs:{pill:""},on:{click:function(o){return t.$router.go(-1)}}},[e("mdicon",{attrs:{name:"arrow-left"}}),t._v(" Go Back")],1)],1)},G=[],I={},O=I,B=(0,m.Z)(O,E,G,!1,null,"88119010",null),W=B.exports,N=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("b-container",{attrs:{fluid:"sm"}},[a("h3",{staticClass:"align-left"},[t._v(" Demo "),a("b",[t._v("GEIGER Toolbox")]),t._v(" and "),a("b",[t._v("MI Cyberrange")]),t._v(" (Android"),a("span",[a("mdicon",{staticClass:"mx-1 color_android",attrs:{name:"android"}})],1),t._v(")")]),a("hr"),a("b-embed",{attrs:{type:"video",aspect:"16by9",controls:"",allowfullscreen:""}},[a("source",{attrs:{src:e(4446),type:"video/mp4"}})]),a("div",{staticStyle:{"margin-top":"80px"}}),a("h3",{staticClass:"align-left"},[t._v(" Demo "),a("b",[t._v("GEIGER Toolbox")]),t._v(" and "),a("b",[t._v("Chatbot")]),t._v(" (Android"),a("span",[a("mdicon",{staticClass:"mx-1 color_android",attrs:{name:"android"}})],1),t._v(")")]),a("hr"),a("b-embed",{attrs:{type:"video",aspect:"16by9",controls:"",allowfullscreen:""}},[a("source",{attrs:{src:e(3137),type:"video/mp4"}})]),a("div",{staticStyle:{"margin-top":"80px"}}),a("b-button",{staticClass:"back-btn",attrs:{pill:""},on:{click:function(o){return t.$router.go(-1)}}},[a("mdicon",{attrs:{name:"arrow-left"}}),t._v(" Go Back")],1)],1)},Z=[],D={name:"HomeView",components:{},data:()=>({}),methods:{}},M=D,S=(0,m.Z)(M,N,Z,!1,null,"e6825f1e",null),T=S.exports,Y=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"web-app"},[a("b-row",{attrs:{"align-v":"center","align-h":"center"}},[a("img",{staticClass:"pr-3",attrs:{src:e(3709)("./"+t.logo),alt:"logo",height:"40px"}}),a("h1",[t._v(t._s(t.name))])]),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("1")]),a("body",{staticClass:"mx-auto my-3 py-4 text-center bg-body"},[t._v(" Click the button below to open the Web App. "),a("br"),a("b-button",{staticClass:"mx-auto mt-3 web-btn",attrs:{href:t.url_web,target:"_blank",size:"lg"}},[a("mdicon",{staticClass:"mx-1",attrs:{name:"web"}}),t._v(" "),a("b",[t._v(t._s(t.name))])],1),a("br"),a("b-row",{staticClass:"mt-4",attrs:{"align-v":"center","align-h":"center"}},[a("small",{staticClass:"pr-2"},[t._v(" Best experience with ")]),a("b-button",{attrs:{variant:"outline-dark",href:"https://www.google.com/chrome/",target:"_blank",size:"sm"}},[a("mdicon",{attrs:{name:"google-chrome"}}),t._v(" Chrome")],1)],1)],1)],1)},P=[],J={name:"InstructionStepsWebApp",components:{},data:()=>({name:"CSMG Online",desc:"",logo:"default-logo.png",url_web:"https://eu-online.csmg.awartex.com/admin"})},j=J,R=(0,m.Z)(j,Y,P,!1,null,"20648fa5",null),z=R.exports,Q=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"web-app"},[a("b-row",{attrs:{"align-v":"center","align-h":"center"}},[a("img",{staticClass:"pr-3",attrs:{src:e(3709)("./"+t.logo),alt:"logo",height:"40px"}}),a("h1",[t._v(t._s(t.name))])]),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("1")]),a("body",{staticClass:"mx-auto my-3 py-4 text-center bg-body"},[t._v(" Download "+t._s(t.name)+" from the Google Play Store "),a("br"),a("b-button",{staticClass:"p-0 mt-3",attrs:{href:t.playstore_url,target:"_blank"}},[a("img",{attrs:{src:e(1712),height:"50px"}})])],1)],1)},K=[],_={name:"InstructionStepsWebApp",components:{},data:()=>({name:"GEIGER Toolbox",desc:"",logo:"toolbox-logo.png",playstore_url:"https://play.google.com/store/apps/details?id=cybergeigertoolbox.geiger_toolbox"})},V=_,L=(0,m.Z)(V,Q,K,!1,null,"6a561b88",null),H=L.exports,X=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"android-ksp-security"},[a("b-row",{attrs:{"align-v":"center","align-h":"center"}},[a("img",{staticClass:"pr-3",attrs:{src:e(3709)("./"+t.logo),alt:"logo",height:"40px"}}),a("h1",[t._v(t._s(t.name))])]),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("1")]),a("body",{staticClass:"mx-auto my-3 py-4 text-center bg-body"},[t._v(" Click the download button below. "),a("br"),a("b-button",{staticClass:"mx-auto mt-3 android-btn",attrs:{href:t.download_url,target:"_blank"}},[a("mdicon",{staticClass:"mx-1",attrs:{name:"android"}}),t._v(" "),a("b",[t._v(t._s(t.name))])],1)],1),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" Click on "),a("b",[t._v('"Download anyway"')]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(4075),fluid:""}})],1),t._m(0),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("2")]),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" After download has finished click "),a("b",[t._v('"Open"')]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(8269),fluid:""}})],1),a("body",{staticClass:"mx-auto mt-5 py-4 text-center bg-body"},[t._v(' If "...not allowed to install unknown apps.." is shown, click on '),a("b",[t._v('"Settings"')]),t._v(". Otherwise got to section "),a("div",{staticClass:"circle-small ml-1"},[t._v("3")]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(8237),fluid:""}})],1),a("body",{staticClass:"mx-auto mt-5 py-4 text-center bg-body"},[t._v(" Toggle "),a("b",[t._v(' "Allow apps from this source"')]),t._v(" and return to the previous screen. "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(4051),fluid:""}})],1),a("hr"),a("div",{staticClass:"circle mx-auto my-3"},[t._v("3")]),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" Click "),a("b",[t._v('"Install"')]),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(2853),fluid:""}})],1),a("b-img",{staticClass:"mt-3",attrs:{src:e(766),width:"100px"}}),a("h5",{staticClass:"text-center mt-3"},[t._v("Successfully installed!")])],1)},F=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"ml-3 mr-3 mt-3 text-warning"},[e("small",[t._v(" A warning may appear in your browser that this file could be harmful. This message appears because you download the app file directly from this website instead from the Google Play Store. "),e("br"),e("b",{staticClass:"text-secondary"},[t._v("Don't worry, we won't install any malicious files on your device!")])])])}],U={name:"AndroidKSPSecurity",components:{},data:()=>({name:"MI KSP Security",desc:"",logo:"montimage-logo.png",download_url:"https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/mi-ksp-security.apk"})},q=U,$=(0,m.Z)(q,X,F,!1,null,"e5b329f2",null),tt=$.exports,ot=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"android-chatbot"},[a("b-row",{attrs:{"align-v":"center","align-h":"center"}},[a("img",{staticClass:"pr-3",attrs:{src:e(3709)("./"+t.logo),alt:"logo",height:"40px"}}),a("h1",[t._v(t._s(t.name))])]),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("1")]),a("body",{staticClass:"mx-auto my-3 py-4 text-center bg-body"},[t._v(" Click the download button below. "),a("br"),a("b-button",{staticClass:"mx-auto mt-3 android-btn",attrs:{href:t.download_url,target:"_blank"}},[a("mdicon",{staticClass:"mx-1",attrs:{name:"android"}}),t._v(" "),a("b",[t._v(t._s(t.name))])],1)],1),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" Click on "),a("b",[t._v('"Download anyway"')]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(4075),fluid:""}})],1),t._m(0),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("2")]),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" After download has finished click "),a("b",[t._v('"Open"')]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(8269),fluid:""}})],1),a("body",{staticClass:"mx-auto mt-5 py-4 text-center bg-body"},[t._v(' If "...not allowed to install unknown apps.." is shown, click on '),a("b",[t._v('"Settings"')]),t._v(". Otherwise got to section "),a("div",{staticClass:"circle-small ml-1"},[t._v("3")]),t._v(" "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(8237),fluid:""}})],1),a("body",{staticClass:"mx-auto mt-5 py-4 text-center bg-body"},[t._v(" Toggle "),a("b",[t._v(' "Allow apps from this source"')]),t._v(" and return to the previous screen. "),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(4051),fluid:""}})],1),a("hr"),a("div",{staticClass:"circle mx-auto my-3"},[t._v("3")]),a("body",{staticClass:"mx-auto mt-3 py-4 text-center bg-body"},[t._v(" Click "),a("b",[t._v('"Install"')]),a("br"),a("b-img",{staticClass:"img-size mx-auto shadow",attrs:{src:e(2853),fluid:""}})],1),a("b-img",{staticClass:"mt-3",attrs:{src:e(766),width:"100px"}}),a("h5",{staticClass:"text-center mt-3"},[t._v("Successfully installed!")])],1)},et=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"ml-3 mr-3 mt-3 text-warning"},[e("small",[t._v(" A warning may appear in your browser that this file could be harmful. This message appears because you download the app file directly from this website instead from the Google Play Store. "),e("br"),e("b",{staticClass:"text-secondary"},[t._v("Don't worry, we won't install any malicious files on your device!")])])])}],at={name:"AndroidChatbot",components:{},data:()=>({name:"Chatbot",desc:"",logo:"default-logo.png",download_url:"https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/chatbot-0.7.2.apk"})},st=at,nt=(0,m.Z)(st,ot,et,!1,null,"05a9b2fd",null),rt=nt.exports,it=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"web-app"},[a("b-row",{attrs:{"align-v":"center","align-h":"center"}},[a("img",{staticClass:"pr-3",attrs:{src:e(3709)("./"+t.logo),alt:"logo",height:"40px"}}),a("h1",[t._v(t._s(t.name))])]),a("hr"),a("div",{staticClass:"circle mx-auto my-4"},[t._v("1")]),a("body",{staticClass:"mx-auto my-3 py-4 text-center bg-body"},[t._v(" Download "+t._s(t.name)+" from the Google Play Store "),a("br"),a("b-button",{staticClass:"p-0 mt-3",attrs:{href:t.playstore_url,target:"_blank"}},[a("img",{attrs:{src:e(1712),height:"50px"}})])],1)],1)},lt=[],ct={name:"InstructionStepsWebApp",components:{},data:()=>({name:"Cyberrange",desc:"",logo:"montimage-logo.png",playstore_url:"https://play.google.com/store/apps/details?id=com.montimage.cyberrange"})},dt=ct,mt=(0,m.Z)(dt,it,lt,!1,null,"7a007028",null),ut=mt.exports;a["default"].use(h.Z);const gt=[{path:"/",name:"home",component:k},{path:"/help",name:"gethelp",component:W},{path:"/instructions",name:"instructions",component:T},{path:"/web/csmg",name:"CSMG Online",component:z},{path:"/android/toolbox",name:"GEIGER Toolbox",component:H},{path:"/android/ksp-security",name:"KSP Security",component:tt},{path:"/android/chatbot",name:"Chatbot",component:rt},{path:"/android/cyberrange",name:"Cyberrange",component:ut}],bt=new h.Z({base:"geiger-tools-web",mode:"history",routes:gt});var pt=bt,vt=e(3017),ft=e(7666),ht=e(5317);a["default"].use(ft.Z,{icons:ht}),a["default"].config.productionTip=!1,a["default"].use(s.XG7),a["default"].use(vt.A7),new a["default"]({router:pt,render:t=>t(f)}).$mount("#app")},3709:function(t,o,e){var a={"./default-logo.png":1232,"./montimage-logo-rect.png":7992,"./montimage-logo.png":8758,"./toolbox-logo.png":8815};function s(t){var o=n(t);return e(o)}function n(t){if(!e.o(a,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id=3709},4051:function(t,o,e){"use strict";t.exports=e.p+"img/allow-unknown-source.jpg"},2853:function(t,o,e){"use strict";t.exports=e.p+"img/install-snackbar.jpg"},8237:function(t,o,e){"use strict";t.exports=e.p+"img/not-allowed-snackbar.jpg"},8269:function(t,o,e){"use strict";t.exports=e.p+"img/open-snackbar.jpg"},4075:function(t,o,e){"use strict";t.exports=e.p+"img/warning-harmfull.jpg"},766:function(t,o,e){"use strict";t.exports=e.p+"img/applause.png"},8456:function(t,o,e){"use strict";t.exports=e.p+"img/eu-logo.png"},1712:function(t,o,e){"use strict";t.exports=e.p+"img/google-play-btn.png"},7672:function(t,o,e){"use strict";t.exports=e.p+"img/logo-custom.png"},1232:function(t,o,e){"use strict";t.exports=e.p+"img/default-logo.png"},7992:function(t,o,e){"use strict";t.exports=e.p+"img/montimage-logo-rect.png"},8758:function(t){"use strict";t.exports="data:image/png;base64,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"},8815:function(t,o,e){"use strict";t.exports=e.p+"img/toolbox-logo.png"},3137:function(t,o,e){"use strict";t.exports=e.p+"media/toolbox-and-chatbot.mp4"},4446:function(t,o,e){"use strict";t.exports=e.p+"media/toolbox-and-cyberrange.mp4"}},o={};function e(a){var s=o[a];if(void 0!==s)return s.exports;var n=o[a]={exports:{}};return t[a](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,a,s,n){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],n=t[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(i=!1,n<r&&(r=n));if(i){t.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,s,n]}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/geiger-tools-web/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var s,n,r=a[0],i=a[1],l=a[2],c=0;if(r.some((function(o){return 0!==t[o]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(l)var d=l(e)}for(o&&o(a);c<r.length;c++)n=r[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(d)},a=self["webpackChunkgeiger_tools_installation_webpage"]=self["webpackChunkgeiger_tools_installation_webpage"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(7422)}));a=e.O(a)})();
//# sourceMappingURL=app.js.map