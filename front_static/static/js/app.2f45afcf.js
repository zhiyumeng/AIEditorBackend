(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)i=o[d],n[i]&&h.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0407":function(t,e,a){},"0c4d":function(t,e,a){"use strict";var s=a("4327"),n=a.n(s);n.a},"0ed2":function(t,e,a){"use strict";var s=a("d20a"),n=a.n(s);n.a},2388:function(t,e,a){"use strict";var s=a("b6e9"),n=a.n(s);n.a},4327:function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=a("f23d"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"referans"},[a("a-drawer",{attrs:{title:"参考答案",placement:"bottom",closable:!0,visible:t.referVis,mask:!0,maskStyle:"opacity:0",getContainer:".container"},on:{close:t.referClose}},t._l(t.goodans,function(e,s){return a("li",{key:s},[a("span",{staticClass:"goodans"},[t._v(t._s(e[1]))]),a("span",{staticClass:"goodansscore"},[t._v("\n          "+t._s(e[0])+"分\n        ")])])}),0)],1),a("div",{staticClass:"container"},[a("router-view",{directives:[{name:"transition",rawName:"v-transition"}]})],1),t.showSwitcher?a("div",{staticClass:"switcher"},[a("a-row",[a("button",{staticClass:"switch",attrs:{type:"button"},on:{click:t.switcher}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"29px"}},[a("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(255, 255, 255)",d:"M23.472,28.473 C23.122,28.826 22.697,29.002 22.198,29.002 L1.803,29.002 C1.303,29.002 0.878,28.826 0.528,28.473 C0.178,28.121 0.003,27.693 0.003,27.189 L0.003,1.811 C0.003,1.307 0.178,0.879 0.528,0.527 C0.878,0.174 1.303,-0.002 1.803,-0.002 L13.800,-0.002 C14.300,-0.002 14.850,0.124 15.450,0.376 C16.049,0.628 16.524,0.930 16.874,1.282 L22.722,7.174 C23.072,7.526 23.372,8.004 23.622,8.609 C23.872,9.213 23.997,9.767 23.997,10.270 L23.997,27.189 C23.997,27.693 23.822,28.121 23.472,28.473 ZM21.035,8.892 L15.168,2.981 C15.018,2.830 14.762,2.692 14.400,2.566 L14.400,9.666 L21.448,9.666 C21.323,9.301 21.185,9.043 21.035,8.892 ZM21.598,12.083 L13.800,12.083 C13.300,12.083 12.875,11.907 12.525,11.555 C12.175,11.202 12.000,10.774 12.000,10.271 L12.000,2.415 L2.402,2.415 L2.402,26.585 L21.598,26.585 L21.598,12.083 ZM5.402,14.500 L18.599,14.500 C18.773,14.500 18.917,14.557 19.029,14.670 C19.142,14.783 19.198,14.928 19.198,15.104 L19.198,16.313 C19.198,16.489 19.142,16.634 19.029,16.747 C18.917,16.860 18.773,16.917 18.599,16.917 L5.402,16.917 C5.227,16.917 5.083,16.860 4.971,16.747 C4.858,16.634 4.802,16.489 4.802,16.313 L4.802,15.104 C4.802,14.928 4.858,14.783 4.971,14.670 C5.083,14.557 5.227,14.500 5.402,14.500 ZM5.402,19.334 L18.599,19.334 C18.773,19.334 18.917,19.391 19.029,19.504 C19.142,19.617 19.198,19.762 19.198,19.938 L19.198,21.147 C19.198,21.323 19.142,21.468 19.029,21.581 C18.917,21.694 18.773,21.751 18.599,21.751 L5.402,21.751 C5.227,21.751 5.083,21.694 4.971,21.581 C4.858,21.468 4.802,21.323 4.802,21.147 L4.802,19.938 C4.802,19.762 4.858,19.617 4.971,19.504 C5.083,19.391 5.227,19.334 5.402,19.334 Z"}})])])]),a("a-row",[t.showReferanw?a("button",{staticClass:"referanw",attrs:{type:"button"},on:{click:t.referAnwser}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"28px",height:"27px"}},[a("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(255, 255, 255)",d:"M27.522,16.761 L19.514,26.280 C19.165,26.697 18.662,26.956 18.126,26.998 C18.070,27.002 18.020,27.004 17.965,27.004 C17.480,27.004 17.013,26.827 16.640,26.506 L11.753,22.249 C10.901,21.508 10.802,20.207 11.534,19.342 C12.265,18.477 13.548,18.379 14.402,19.120 L17.743,22.029 L24.424,14.085 C25.153,13.217 26.438,13.112 27.291,13.853 C28.148,14.594 28.248,15.895 27.522,16.761 ZM9.231,19.309 L5.329,19.309 C4.687,19.309 4.168,18.809 4.168,18.158 C4.168,17.509 4.687,17.007 5.330,17.006 L11.235,17.006 C10.773,17.249 10.348,17.560 9.988,17.984 C9.645,18.392 9.394,18.885 9.231,19.309 ZM15.787,7.745 L5.330,7.745 C4.688,7.745 4.169,7.215 4.169,6.565 C4.169,5.914 4.687,5.384 5.330,5.384 L15.788,5.384 C16.429,5.384 16.948,5.914 16.946,6.565 C16.946,7.215 16.430,7.745 15.787,7.745 ZM15.787,11.680 L5.330,11.680 C4.688,11.680 4.169,11.147 4.169,10.499 C4.169,9.847 4.687,9.318 5.330,9.318 L15.788,9.318 C16.429,9.318 16.948,9.848 16.946,10.499 C16.946,11.147 16.430,11.680 15.787,11.680 ZM16.950,18.170 C16.950,18.310 16.927,18.441 16.883,18.562 L15.724,17.556 C15.474,17.335 15.202,17.129 14.915,17.007 L15.788,17.007 C16.429,17.007 16.948,17.522 16.950,18.170 ZM4.169,14.405 C4.169,13.754 4.687,13.254 5.330,13.254 L15.788,13.254 C16.429,13.254 16.948,13.754 16.946,14.405 C16.946,15.054 16.430,15.555 15.787,15.555 L5.330,15.555 C4.688,15.555 4.169,15.055 4.169,14.405 ZM18.565,4.154 C18.565,3.144 17.753,2.357 16.758,2.357 L4.148,2.357 C3.153,2.357 2.329,3.144 2.329,4.154 L2.329,20.533 C2.329,21.543 3.153,22.335 4.148,22.335 L9.358,22.335 C9.596,22.880 9.952,23.391 10.425,23.805 L11.506,24.757 L2.358,24.757 C1.047,24.757 0.000,23.678 0.000,22.351 L0.000,2.302 C0.000,1.028 1.004,-0.005 2.261,-0.005 L18.552,-0.005 C19.860,-0.005 20.894,1.072 20.894,2.400 L20.894,15.071 L18.565,17.878 L18.565,4.154 Z"}})])]):t._e()]),a("a-row",[a("a-back-top")],1)],1):t._e(),a("div",{staticClass:"footer"})])},i=[],o={name:"app",created:function(){document.title="Ai Phrase","signed"!==window.localStorage.getItem("loginState")&&this.$router.push({path:"/Login"})},mounted:function(){var t=this.$route.path;0===t.indexOf("/Practice")?(this.showSwitcher=!0,this.showReferanw=!0):0===t.indexOf("/Review")?(this.showSwitcher=!0,this.showReferanw=!1):(this.showSwitcher=!1,this.showReferanw=!1)},data:function(){return{showSwitcher:!0,showReferanw:!0,referVis:!1,goodans:null}},watch:{$route:function(t,e){var a=this.$route.path;0===a.indexOf("/Practice")?(this.showSwitcher=!0,this.showReferanw=!0):0===a.indexOf("/Review")?(this.showSwitcher=!0,this.showReferanw=!1):(this.showSwitcher=!1,this.showReferanw=!1)}},methods:{switcher:function(){var t=this.$route.path;0===t.indexOf("/Practice")?this.$router.push({path:"/Review/1"}):this.$router.push({path:"/Practice/"+localStorage.getItem("questionType")+"/"+Math.ceil(10*Math.random())})},referAnwser:function(){var t=this;"true"===localStorage.getItem("nowExp")?(t.$message.success("已获取优秀答案"),t.$http.get("/backend/good_answers/"+localStorage.getItem("nowQuestion")).then(function(e){t.goodans=e.data.excAns_scores,t.referVis=!0}).catch(function(e){t.$message.error("获取优秀答案失败，请检查网络")})):t.$message.error("尚未提交答案，不能查询优秀答案")},referClose:function(){this.referVis=!1}}},c=o,l=(a("034f"),a("2877")),u=Object(l["a"])(c,r,i,!1,null,null,null),d=u.exports,h=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Practice"},[a("practiceNav"),a("testBox",{attrs:{questionIndex:t.$route.params.questionIndex,question:t.question}}),a("div",{staticClass:"practiceMain"},t._l(t.renderList,function(t){return a("a-row",{key:t.record_id},[a("practiceScoreCard",{attrs:{gradeInfomation:t}})],1)}),1)],1)},f=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"practiceScoreRecp"},[a("div",{staticClass:"practiceScoreOfAnwser"},[a("div",{staticClass:"anwserBox"},[a("inputBox",{attrs:{sentence:t.gradeInfomation.customer_answer}})],1)]),a("div",{staticClass:"practiceScoreCard"},[a("a-row",{staticClass:"rateItem"},[a("a-col",{staticClass:"rateScore",attrs:{span:6}},[a("div",{staticClass:"rate"},[a("circle-counter",{attrs:{width:"160px",height:"160px",dashCount:100,activeCount:t.gradeInfomation.rate,text:t.gradeInfomation.rate}})],1)]),a("a-col",{attrs:{span:8}},t._l(t.gradeInfomation.detail.slice(0,3),function(t){return a("a-row",{key:t.id},[a("scoreItem",{attrs:{rate:t}})],1)}),1),a("a-col",{attrs:{span:8}},t._l(t.gradeInfomation.detail.slice(-2),function(t){return a("a-row",{key:t.id},[a("scoreItem",{attrs:{rate:t}})],1)}),1)],1)],1)])},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scoreItem"},[a("a-row",[a("a-col",{staticClass:"scoreItemName",attrs:{span:6}},[a("h3",[t._v(t._s(t.rate.name))])]),a("a-col",{staticClass:"scoreItemValue",attrs:{span:18}},[a("a-row",[a("a-rate",{attrs:{value:t.rate.value,disabled:""}})],1)],1)],1),a("a-row",[a("b",{staticClass:"judgeText"},[t._v("评语文字评语文字评语文字评语文字评语文字评语文字评语文字")])])],1)},b=[],w={name:"scoreItem",props:{rate:{type:Object,required:!0}}},C=w,j=(a("0ed2"),Object(l["a"])(C,v,b,!1,null,null,null)),y=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{viewBox:"0 0 "+t.UNITS+" "+t.UNITS,height:t.size||"100%",width:t.size||"100%"}},[a("g",{attrs:{transform:"rotate("+t.rotate+","+t.UNITS/2+","+t.UNITS/2+") "+(t.reverse?"scale(1,-1) translate(0, -"+t.UNITS+")":"")}},[a("circle",{attrs:{cx:t.UNITS/2,cy:t.UNITS/2,r:t.getRadius(),stroke:t.stroke,"stroke-width":t.getStrokeWidth(t.strokeWidth),fill:"none","stroke-dasharray":t.getLengths()}}),a("path",{attrs:{d:t.describeArc(t.UNITS/2,t.UNITS/2,t.getRadius(),0,t.activeEnd()),fill:"none",stroke:t.activeStroke,"stroke-width":t.getStrokeWidth(t.activeWidth),"stroke-dasharray":t.getLengths()}})]),a("text",{attrs:{fill:"currentColor",x:"50%",y:"50%","text-anchor":"middle","dominant-baseline":"middle"}},[t._v(t._s(t.text))])])},S=[],I=(a("c5f6"),{beforeCreate:function(){this.UNITS=50},props:{size:{type:String,default:""},text:{type:String,default:""},dashCount:{type:Number,default:60},activeCount:{type:Number,default:10},strokeWidth:{type:Number,default:20},activeWidth:{type:Number,default:20},stroke:{type:String,default:"#ecf3f9"},activeStroke:{type:String,default:"#1d4e7d"},dashSpacing:{type:Number,default:.001},rotate:{type:Number,default:-90},reverse:{type:Boolean,default:!1}},methods:{getStrokeWidth:function(t){return t*this.UNITS/200},activeEnd:function(){return 0==this.activeCount?0:360*(this.activeCount*this.dashPerc()+(this.activeCount-1)*this.spacePerc())},getLengths:function(){return[2*Math.PI*this.getRadius()*this.dashPerc(),2*Math.PI*this.getRadius()*this.spacePerc()]},spacePerc:function(){return this.dashSpacing/this.dashCount},dashPerc:function(){return(1-this.dashSpacing)/this.dashCount},getRadius:function(){return(this.UNITS-Math.max(this.getStrokeWidth(this.strokeWidth),this.getStrokeWidth(this.activeWidth)))/2},polarToCartesian:function(t,e,a,s){var n=s*Math.PI/180;return{x:t+a*Math.cos(n),y:e+a*Math.sin(n)}},describeArc:function(t,e,a,s,n){var r=this.polarToCartesian(t,e,a,s),i=this.polarToCartesian(t,e,a,n),o=Math.abs(n-s)<180?0:1,c=n<s?0:1;return"M".concat(r.x," ").concat(r.y," A").concat(a," ").concat(a," 0 ").concat(o," ").concat(c," ").concat(i.x," ").concat(i.y)}}}),_=I,L=Object(l["a"])(_,x,S,!1,null,null,null),k=L.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inputBox"},t._l(t.sentence.split(" "),function(e,s){return a("span",{key:s},[a("a-popover",{attrs:{placement:"bottom",title:"同义词",trigger:"click"}},[a("template",{slot:"content"},[t.simLoading?a("center",[a("a-spin")],1):t._e(),t.queryWordNull?a("a-alert",{attrs:{showIcon:!1,message:"暂未查询到同义词",banner:""}}):t._e(),a("div",{staticClass:"syns"},t._l(t.simRender,function(e,s){return a("span",{key:s,staticClass:"synWord"},[t._v(t._s(e))])}),0)],1),a("span",{staticClass:"similarword",on:{click:function(a){return t.querySim(e)}}},[t._v(t._s(e))])],2)],1)}),0)},q=[],P={name:"inputBox",props:{sentence:{type:String}},data:function(){return{simLoading:!0,simRender:[],queryWord:null,queryWordNull:!1}},methods:{querySim:function(t){-1===t.indexOf("?")&&-1===t.indexOf(".")&&-1===t.indexOf("!")||(t=t.slice(0,-1));var e=this;e.simRender=null,e.queryWordNull=!1,e.$http.get("/backend/syn/"+t).then(function(t){var a=t.data.syn;0===a.length?(e.queryWordNull=!0,e.simLoading=!1):(e.simLoading=!1,e.queryWordNull=!1,e.simRender=t.data.syn)})}}},N=P,R=(a("7846"),Object(l["a"])(N,$,q,!1,null,null,null)),D=R.exports,A={name:"practiceScoreCard",props:{gradeInfomation:{type:Object,required:!0}},data:function(t){return{selectSmiword:null,simRender:["xxx","abc"],simLoading:!1}},components:{scoreItem:y,CircleCounter:k,inputBox:D}},O=A,E=(a("d4fc"),Object(l["a"])(O,g,m,!1,null,null,null)),M=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"testBox testBoxPin",attrs:{id:"testBox"}},[a("a-row",{staticClass:"question"},[a("a-col",{attrs:{span:24}},[a("fixed-header",{attrs:{threshold:200}},[a("div",{staticClass:"questionSentence"},[a("a-row",{staticClass:"questionInfo"},[a("a-col",{attrs:{span:1}},[a("a-button",{staticClass:"queButton",attrs:{shape:"circle",icon:"left"},on:{click:function(e){return t.$router.go(-1)}}})],1),a("a-col",{attrs:{span:22}},[a("div",{staticClass:"questionContext"},[a("inputBox",{attrs:{sentence:t.question}})],1)]),a("a-col",{attrs:{span:1}},[a("a-button",{staticClass:"queButton",attrs:{shape:"circle",icon:"right"},on:{click:t.next}})],1)],1)],1)])],1)],1),a("a-row",{staticClass:"anwser"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.anwser,expression:"anwser"}],staticClass:"anwserInput",attrs:{placeholder:"Type your anwser",type:"text"},domProps:{value:t.anwser},on:{input:function(e){e.target.composing||(t.anwser=e.target.value)}}})]),a("a-row",{staticClass:"submitAnwser"},[a("button",{class:{gradeLoading:t.gradeLoadingActive},attrs:{id:"submitAnwser",type:"button"},on:{click:t.submitAnwser}},[t.gradeLoadingActive?a("span",[a("a-icon",{staticStyle:{"margin-right":"10px"},attrs:{type:"loading"}}),t._v("提交中")],1):t._e(),t.gradeLoadingActive?t._e():a("span",[t._v("提交")])])])],1)},V=[],z=a("6c9c"),W=a.n(z),B={props:{question:{type:String,required:!0},questinIndex:{type:String}},components:{FixedHeader:W.a,inputBox:D},data:function(){return{anwser:null,gradeLoadingActive:!1}},methods:{next:function(){void 0===window.history.go(1)&&this.refreshQue()},refreshQue:function(){this.$router.push({path:"/Practice/"+localStorage.getItem("questionType")+"/"+Math.ceil(10*Math.random())})},submitAnwser:function(){var t=this;if(t.gradeLoadingActive=!0,null===t.anwser||""===t.anwser)t.$message.error("不能提交空答案，请重新作答"),t.gradeLoadingActive=!1;else{var e={queID:t.$parent.questionID,user_id:localStorage.getItem("userID"),ans:t.anwser};t.$http({url:"/backend/evaluation/",method:"POST",data:JSON.stringify(e)}).then(function(e){t.$parent.renderList=t.$parent.renderList||[],t.$parent.renderList.unshift(e.data),"true"===e.data.isExc&&t.$message.success("你的答案很棒，已经被选入参考答案！"),t.$message.success("答案提交成功"),t.gradeLoadingActive=!1,localStorage.setItem("nowExp","true")}).catch(function(e){console.log(e),t.$message.error("提交失败，请检查网络"),t.gradeLoadingActive=!1})}}}},U=B,Z=(a("7ad8"),Object(l["a"])(U,T,V,!1,null,null,null)),Q=Z.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("a-row",[s("a-col",{attrs:{span:18}},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("cf05")}})])]),s("a-col",{staticClass:"nav",attrs:{span:6}},[s("a-select",{staticClass:"questionTypeSele",attrs:{defaultValue:t.questionType},on:{change:t.handleChange}},[s("a-select-option",{attrs:{value:"l"}},[t._v("长句")]),s("a-select-option",{attrs:{value:"m"}},[t._v("中句")]),s("a-select-option",{attrs:{value:"s"}},[t._v("短句")])],1),s("a",{staticClass:"judgeA",on:{click:t.showModal}},[t._v("评分标准")]),s("a-modal",{attrs:{title:"评分标准"},on:{ok:t.handleOk},model:{value:t.judgeVisible,callback:function(e){t.judgeVisible=e},expression:"judgeVisible"}},[s("p",[t._v("Some contents...")]),s("p",[t._v("Some contents...")]),s("p",[t._v("Some contents...")])])],1)],1)],1)},J=[],F={name:"practiceNav",data:function(){return{judgeVisible:!1,questionType:localStorage.getItem("questionType")||"m"}},methods:{showModal:function(){this.judgeVisible=!0},handleOk:function(t){this.judgeVisible=!1},handleChange:function(t){localStorage.setItem("questionType",t),this.$router.push({path:"/Practice/"})}}},G=F,K=(a("2388"),Object(l["a"])(G,H,J,!1,null,null,null)),X=K.exports,Y={name:"Practice",components:{practiceScoreCard:M,testBox:Q,practiceNav:X},data:function(){return{question:"加载中...",questionID:null,renderList:null,excAns:null,excVisible:!1}},mounted:function(){var t=this,e=t.$route.params;t.renderList=[],t.excAns=[],e.questionIndex&&e.questionType?t.$http.get("/backend/problems/"+e.questionType+"/"+e.questionIndex+"/user/"+localStorage.getItem("userID")).then(function(e){var a=e.data;t.question=a.sentence,t.questionID=a.problem_id,localStorage.setItem("nowQuestion",a.problem_id),a.experienced?(localStorage.setItem("nowExp","true"),t.$http.get("/backend/history_answers/"+localStorage.getItem("userID")+"/problem/"+t.questionID).then(function(e){t.renderList=e.data.rs})):(localStorage.setItem("nowExp","false"),t.renderList=null)}):t.$router.push({path:"/Practice/"+localStorage.getItem("questionType")+"/"+Math.ceil(10*Math.random())})},watch:{$route:function(t,e){var a=this,s=a.$route.params;a.renderList=[],a.excAns=[],s.questionIndex&&s.questionType?a.$http.get("/backend/problems/"+s.questionType+"/"+s.questionIndex+"/user/"+localStorage.getItem("userID")).then(function(t){var e=t.data;a.question=e.sentence,a.questionID=e.problem_id,localStorage.setItem("nowQuestion",e.problem_id),e.experienced?(localStorage.setItem("nowExp","true"),a.$http.get("/backend/history_answers/"+localStorage.getItem("userID")+"/problem/"+a.questionID).then(function(t){a.renderList=t.data.rs})):(localStorage.setItem("nowExp","false"),a.renderList=null)}):a.$router.push({path:"/Practice/"+localStorage.getItem("questionType")+"/"+Math.ceil(10*Math.random())})}}},tt=Y,et=Object(l["a"])(tt,p,f,!1,null,null,null),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Review"},[a("div",{staticClass:"dashboard"},[a("div",{staticClass:"dashboardMain"},[a("a-row",[a("a-col",{attrs:{span:11}},[a("div",{staticClass:"dashradar"},[a("div",{attrs:{id:"dashrad"}},[a("ve-radar-chart",{attrs:{height:260,data:t.chartData,legend:t.legend,settings:t.settings}})],1)])]),a("a-col",{staticClass:"leftOfDash",attrs:{span:13}},[a("a-row",t._l(t.rssliced,function(e,s){return a("a-col",{key:s,attrs:{span:8}},[a("a-row",[a("a-progress",{staticClass:"reviewCircle",attrs:{gapPosition:"right",type:"circle",percent:e[0],format:function(e){return""+e+t.rsd[s][0]}}})],1),a("a-row",{staticClass:"historyInfos"},[a("h4",{staticClass:"historyInfo"},[a("span",{staticClass:"historyName"},[t._v(t._s(t.rsd[s][1]))]),a("span",{staticClass:"historyDet"},[t._v(t._s(e[1]))])]),a("h4",{staticClass:"historyInfo"},[a("span",{staticClass:"historyName"},[t._v(t._s(t.rsd[s][2]))]),a("span",{staticClass:"historyDet"},[t._v(t._s(e[2]))])]),a("h4",{staticClass:"historyInfo"},[a("span",{staticClass:"historyName"},[t._v(t._s(t.rsd[s][3]))]),a("span",{staticClass:"historyDet"},[t._v(t._s(e[3]))])])])],1)}),1)],1)],1)],1)]),a("div",{staticClass:"reviewCards"},t._l(t.historyRenderList,function(t){return a("a-row",{key:t.queID},[a("reviewScoreCard",{attrs:{data:t.history,question:t.problem}})],1)}),1),a("div",{staticClass:"reviewPage"},[a("a-button-group",[a("a-button",{attrs:{type:"primary"},on:{click:t.prevPage}},[a("a-icon",{attrs:{type:"left"}}),t._v("上一页\n    ")],1),a("a-button",{attrs:{type:"primary"},on:{click:t.nextPage}},[t._v("\n      下一页"),a("a-icon",{attrs:{type:"right"}})],1)],1)],1)])},nt=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reviewScoreCard"},[a("div",{staticClass:"reviewScoreCardHeader"},[a("inputBox",{attrs:{sentence:t.question}})],1),a("div",{staticClass:"reviewScoreCardAns"},[a("span",[t._v("我的答案")]),t._l(t.data,function(t,e){return a("a-row",{key:e},[a("inputBox",{attrs:{sentence:t[0]}})],1)})],2)])},it=[],ot={name:"reviewScoreCard",components:{inputBox:D},props:{data:{type:Array,required:!0},question:{type:String,required:!0}}},ct=ot,lt=(a("588f"),Object(l["a"])(ct,rt,it,!1,null,null,null)),ut=lt.exports,dt={name:"Review",components:{reviewScoreCard:ut},data:function(){return{historyRenderList:null,chartData:null,rs:null,rssliced:null,rsd:[["分","≥85","70~85","≤70"],["次","今天","本周","本月"],["题","今天","本周","本月"]],page:this.$route.params.pageID,totalPage:this.$route.params.pageID}},methods:{prevPage:function(){this.page<=1?this.$message.warning("没有前一页了"):(this.page=parseInt(this.page)-1,this.$router.push({path:"/Review/"+this.page}))},nextPage:function(){this.page>=this.totalPage?this.$message.warning("没有后一页了"):(this.page=parseInt(this.page)+1,this.$router.push({path:"/Review/"+this.page}))},loadingRadarData:function(){var t=this;this.$http.get("/backend/statics/user/"+localStorage.getItem("userID")).then(function(e){var a=e.data.rs;t.rs=a,t.rssliced=a.slice(1),t.chartData={dimensions:[{name:"语义",max:5},{name:"词汇",max:5},{name:"语法",max:5},{name:"句法",max:5},{name:"可读性",max:5}],measures:[{name:"用户id:"+localStorage.getItem("userID"),data:a[0]}]}})}},created:function(){this.legend={show:!1},this.tooltip={show:!1},this.settings={splitNumber:5,itemStyle:{normal:{areaStyle:{color:["#3c84ae"],shadowColor:"#1e4e7a"}}}},this.loadingRadarData()},mounted:function(){if(this.$route.params.pageID){localStorage.setItem("nowQuestion",-1),this.page=this.$route.params.pageID;var t=this;this.$http.get("/backend/history_answers/"+localStorage.getItem("userID")+"/page/"+this.$route.params.pageID).then(function(e){t.historyRenderList=e.data.rs}),t.historyRenderList!==[]&&void 0!==t.historyRenderList&&void 0!==t.historyRenderList||(t.historyNull=!0)}else this.$router.push({path:"/Review/1"})},watch:{$route:function(t,e){if(this.$route.params.pageID){localStorage.setItem("nowQuestion",-1),this.page=this.$route.params.pageID;var a=this;this.$http.get("/backend/history_answers/"+localStorage.getItem("userID")+"/page/"+this.$route.params.pageID).then(function(t){a.historyRenderList=t.data.rs}),a.historyRenderList!==[]&&void 0!==a.historyRenderList&&void 0!==a.historyRenderList||(a.historyNull=!0)}else this.$router.push({path:"/Review/1"})}}},ht=dt,pt=(a("0c4d"),Object(l["a"])(ht,st,nt,!1,null,null,null)),ft=pt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"signed"===t.loginState?a("div",{staticClass:"flex-columns Login",attrs:{id:"login"}},[t._m(0),a("div",{staticClass:"loginMain"},[a("h1",[t._v("验证码登录")]),a("span",{staticClass:"inputCompact"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneArea,expression:"phoneArea"}],staticClass:"phoneArea",staticStyle:{width:"30%"},attrs:{type:"text",placeholder:"国家区号",value:"+86"},domProps:{value:t.phoneArea},on:{input:function(e){e.target.composing||(t.phoneArea=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"phoneNumber",staticStyle:{width:"70%"},attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.phoneNumber},on:{click:function(e){return t.removeErrorLint("phone")},input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t.phoneError?a("a",{staticClass:"signRightHint codeError",attrs:{id:"phoneLint",href:"#/Login"}},[t._v("请输入正确的手机号码")]):t._e()]),a("span",{staticClass:"inputCompact"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.VerifiCode,expression:"VerifiCode"}],staticClass:"VerifiCode",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:t.VerifiCode},on:{click:function(e){return t.removeErrorLint("Verifi")},input:function(e){e.target.composing||(t.VerifiCode=e.target.value)}}}),t.VerifiError?t._e():a("a",{staticClass:"signRightHint",attrs:{id:"getVerifiCode"},on:{click:t.getVerifiCode}},[t._v(t._s(t.countDown?t.countDown+"s 后获取":"获取验证码"))]),t.VerifiError?a("a",{staticClass:"signRightHint codeError",attrs:{id:"VerifiCodeLint"},on:{click:t.getVerifiCode}},[t._v("请输入正确的验证码")]):t._e()]),a("button",{class:{loginLoadding:t.loginLoaddingActive},attrs:{id:"loginButton",type:"button"},on:{click:t.login}},[t.loginLoaddingActive?a("span",[a("a-icon",{staticStyle:{"margin-right":"10px"},attrs:{type:"loading"}}),t._v("登陆中")],1):t._e(),t.loginLoaddingActive?t._e():a("span",[t._v("登陆")])])])]):t._e()},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loginLogo"},[s("img",{attrs:{src:a("cf05")}})])}],vt=a("5118"),bt={name:"login",mounted:function(){"signed"===localStorage.getItem("signed")&&this.router.push({path:"/"})},data:function(){return{phoneNumber:localStorage.getItem("phoneNumber")||null,phoneArea:"+86",VerifiCode:null,loginState:localStorage.getItem("loginState")||"notSigned",countDown:null,VerifiError:!1,phoneError:!1,loginLoaddingActive:!1}},methods:{login:function(t){var e=this,a=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(this.phoneNumber),s=this.phoneArea.length>2,n="3773"===this.VerifiCode;a&&s?n?(e.loginLoaddingActive=!0,e.$http.get("/backend/user/"+e.phoneNumber).then(function(t){var a=t.data;console.log(a),!0===a.signed&&(localStorage.setItem("signed","signed"),localStorage.setItem("phoneNumber",a.phoneNumber),localStorage.setItem("userID",a.userID),localStorage.setItem("questionType","m"),e.$message.success("登录成功，请开始你的表演",10),e.loginLoaddingActive=!1,Object(vt["setTimeout"])(function(){e.$router.push({path:"/Practice/"})},1e3))}).catch(function(t){e.$$message.error("登录失败",10)})):this.VerifiError=!0:this.phoneError=!0},getVerifiCode:function(){var t=this;if(!t.countDown){this.countDown=60;var e=Object(vt["setInterval"])(function(){t.countDown=t.countDown-1,t.countDown<=0&&(Object(vt["clearInterval"])(e),t.countDown=null)},1e3)}},removeErrorLint:function(t){"Verifi"===t&&(this.VerifiError=!1),"phone"===t&&(this.phoneError=!1)}}},wt=bt,Ct=(a("d6db"),Object(l["a"])(wt,gt,mt,!1,null,null,null)),jt=Ct.exports,yt=a("48d8"),xt=a.n(yt);s["default"].use(h["a"]),s["default"].use(xt.a,new h["a"]);var St=new h["a"]({mode:"history",routes:[{path:"/",redirect:"/Practice/"},{path:"/Practice",name:"Practice",component:at,meta:{auth:!0,title:"Practice | AiPhrase"}},{path:"/Practice/:questionType/:questionIndex/",name:"PracticeWithIndex",component:at,meta:{auth:!0,title:"Practice | AiPhrase"}},{path:"/Review/",name:"ReviewWith",component:ft,meta:{auth:!0,title:"Review | AiPhrase"}},{path:"/Review/:pageID/",name:"ReviewWithPageID",component:ft,meta:{auth:!0,title:"Review | AiPhrase"}},{path:"/Login",name:"Login",component:jt,meta:{transition:"fade-in-up",title:"Login | AiPhrase"}}]}),It=(a("202f"),a("bc3a")),_t=a.n(It),Lt=(a("e5b3"),a("29e9")),kt=a.n(Lt);a("a21b");s["default"].prototype.$http=_t.a,s["default"].config.productionTip=!1,s["default"].use(n["a"]),s["default"].component("VeRadarChart",kt.a),new s["default"]({router:St,render:function(t){return t(d)}}).$mount("#app"),St.beforeEach(function(t,e,a){console.log(t,e),t.meta.title&&(document.title=t.meta.title);var s=t.meta.auth,n=window.localStorage.getItem("loginState");!0===s?"signed"===n?a():a("/Login"):a()})},"588f":function(t,e,a){"use strict";var s=a("9ab3"),n=a.n(s);n.a},"64a9":function(t,e,a){},7846:function(t,e,a){"use strict";var s=a("bfc1"),n=a.n(s);n.a},"7ad8":function(t,e,a){"use strict";var s=a("0407"),n=a.n(s);n.a},"7d93":function(t,e,a){},"9ab3":function(t,e,a){},a9e7:function(t,e,a){},b6e9:function(t,e,a){},bfc1:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"static/img/logo.ce5b73cb.png"},d20a:function(t,e,a){},d4fc:function(t,e,a){"use strict";var s=a("7d93"),n=a.n(s);n.a},d6db:function(t,e,a){"use strict";var s=a("a9e7"),n=a.n(s);n.a}});
//# sourceMappingURL=app.2f45afcf.js.map