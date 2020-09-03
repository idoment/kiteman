(function(t){function e(e){for(var n,a,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},s={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="site/kiteman-home/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0120":function(t,e,r){"use strict";var n=r("3ed5"),s=r.n(n);s.a},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"3ed5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("main",[r("router-view")],1)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v("KiteMan")])])}],a={name:"App",components:{},mounted:function(){document.title="KiteMan"}},o=a,u=(r("034f"),r("2877")),c=Object(u["a"])(o,s,i,!1,null,null,null),l=c.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homeContainer"}},[n("div",{attrs:{id:"hero"}},[n("div",{staticClass:"imageContainer"},[n("img",{attrs:{src:r("6f9f"),alt:""}})]),n("div",{staticClass:"lecture"},[n("div",[n("a",{staticClass:"callToActionLink",attrs:{target:"_blank",href:"https://chrome.google.com/u/1/webstore/devconsole/b7258b33-d49c-432a-8930-e8c23fca9bde?hl=en"}},[t._v("Install Now")])])])]),n("div",{staticClass:"eachFeature"})])}],f={name:"Home"},h=f,m=(r("d80d"),Object(u["a"])(h,p,v,!1,null,"3fc248a4",null)),b=m.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"lossRecoveryCalculatorContainer"}},[r("h1",[t._v("Loss recovery calculator")]),r("div",{staticClass:"calculatorBody"},[r("div",{staticClass:"inputGroup"},[r("label",{attrs:{for:""}},[t._v("Buy Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyPrice,expression:"buyPrice"}],attrs:{type:"number",min:"0"},domProps:{value:t.buyPrice},on:{change:function(e){return t.dataUpdate()},keyup:function(e){return t.dataUpdate()},input:function(e){e.target.composing||(t.buyPrice=e.target.value)}}})]),r("div",{staticClass:"inputGroup"},[r("label",{attrs:{for:""}},[t._v("Units Brought")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.units,expression:"units"}],attrs:{type:"number",min:"0"},domProps:{value:t.units},on:{change:function(e){return t.dataUpdate()},keyup:function(e){return t.dataUpdate()},input:function(e){e.target.composing||(t.units=e.target.value)}}})]),r("div",{staticClass:"inputGroup"},[r("label",{attrs:{for:""}},[t._v("Current Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPrice,expression:"currentPrice"}],attrs:{type:"number",min:"0"},domProps:{value:t.currentPrice},on:{change:function(e){return t.dataUpdate()},keyup:function(e){return t.dataUpdate()},input:function(e){e.target.composing||(t.currentPrice=e.target.value)}}})]),r("div",{staticClass:"inputGroup"},[r("label",{attrs:{for:""}},[t._v("Expected to increase (%)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.increase,expression:"increase"}],ref:"expected",attrs:{type:"number",min:"0",placeholder:"Expectected to increase"},domProps:{value:t.increase},on:{change:function(e){return t.dataUpdate()},keyup:function(e){return t.dataUpdate()},input:function(e){e.target.composing||(t.increase=e.target.value)}}})]),r("div",{staticClass:"result"},[t.loss<0?r("span",[t._v("You are in profit")]):t._e(),t.result.reinvest<=0?r("span",[t._v("After "+t._s(t.increase)+"% form current price per unit cost will be "+t._s(t.result.afterIncreasePrice)+" rs, you will recover your money")]):t._e(),r("table",{style:[t.increase<=0||t.loss<0||t.result.reinvest<=0?{visibility:"hidden"}:{visibility:"unset"}]},[r("tr",[r("td",[t._v("After "+t._s(t.increase)+"% Increase")]),r("td",[t._v(t._s(t.result.afterIncreasePrice)+" rs per unit price")])]),r("tr",[r("td",[t._v("Current Loss")]),r("td",[t._v(t._s(t.loss)+"%")])]),r("tr",[r("td",[t._v("Old investment")]),r("td",[t._v(t._s(t.invested))])]),r("tr",[r("td",[t._v("Need to reinvest (new)")]),r("td",[t._v(t._s(t.result.reinvest)+" rs to buy new "+t._s(t.result.newUnits)+" units")])]),r("tr",[r("td",[t._v("After investing you will have")]),r("td",[t._v(t._s(t.result.totalUnits)+" units")])]),r("tr",[r("td",[t._v("Total Investment")]),r("td",[t._v(t._s(t.result.totalInvestemet)+" (old + new)")])]),r("tr",[r("td",[t._v("Total returns")]),r("td",[t._v(t._s(t.result.totalReturns))])])])])])])},y=[],g={name:"LossRecoveryCalculatorComponent",data:function(){return{loss:0,buyPrice:100,units:5,currentPrice:80,invested:0,increase:"",result:{}}},mounted:function(){this.params=this.$route.query,this.params.buy&&(this.buyPrice=parseFloat(this.params.buy)),this.params.units&&(this.units=parseFloat(this.params.units)),this.params.cprice&&(this.currentPrice=parseFloat(this.params.cprice)),this.$refs.expected.focus(),this.dataUpdate()},methods:{dataUpdate:function(){this.buyPrice>0&&this.currentPrice>0&&this.units>0&&(this.loss=(this.buyPrice-this.currentPrice)/this.buyPrice*100,this.loss=Math.ceil(1e3*this.loss)/1e3,this.invested=Math.ceil(this.buyPrice*this.units*1e3)/1e3,this.increase>0?(this.temp=this.lossBalance(parseFloat(this.units),parseFloat(this.invested),parseFloat(this.loss),parseFloat(this.increase),parseFloat(this.currentPrice)),this.result=this.cleanResult(this.temp,this.invested)):this.increase="")},lossBalance:function(t,e,r,n,s){var i={},a=e*(r/100),o=s,u=n/100,c=a*(1/u)-(e-a);i.reinvest=c;var l=c/o;i.newUnits=l;var d=o*u+o;return i.afterIncreasePrice=d,i.totalUnits=l+t,i.totalReturns=(l+t)*d,i},cleanResult:function(t,e){return t.afterIncreasePrice=this.roundToTwo(t.afterIncreasePrice),t.newUnits=this.roundToTwo(t.newUnits),t.reinvest=this.roundToTwo(t.reinvest),t.totalReturns=this.roundToTwo(t.totalReturns),t.totalUnits=this.roundToTwo(t.totalUnits),t.totalInvestemet=this.roundToTwo(t.reinvest+e),t},roundToTwo:function(t){return+(Math.round(t+"e+2")+"e-2")}}},P=g,w=(r("0120"),Object(u["a"])(P,_,y,!1,null,"64e89d5e",null)),T=w.exports;n["a"].use(d["a"]);var U=new d["a"]({routes:[{path:"/",name:"Home",component:b},{path:"/loss-recovery-calculator",name:"loss-recovery-calculator",component:T}]});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(l)},router:U}).$mount("#app")},"6f9f":function(t,e,r){t.exports=r.p+"img/hero.653c0ae2.png"},"85ec":function(t,e,r){},d80d:function(t,e,r){"use strict";var n=r("dcbb"),s=r.n(n);s.a},dcbb:function(t,e,r){}});
//# sourceMappingURL=app.194d2903.js.map