(function(t){function s(s){for(var i,c,l=s[0],r=s[1],o=s[2],p=0,_=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(e,c)&&e[c]&&_.push(e[c][0]),e[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(s);while(_.length)_.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],i=!0,l=1;l<a.length;l++){var r=a[l];0!==e[r]&&(i=!1)}i&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var i={},e={app:0},n=[];function c(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)c.d(a,i,function(s){return t[s]}.bind(null,i));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("534e"),a("f89d");var i=a("2b0e"),e=a("b29a"),n=a.n(e),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-tabbar",{attrs:{id:"main-content",position:"auto",visible:!0,tabs:t.tabs,index:t.tabIndex},on:{"push-page":function(s){return t.push(s)},"back-page":function(s){return t.back()},"update:index":function(s){t.tabIndex=s}}})},l=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack,"swipe-target-width":t.swipe_width,"swipe-threshold":"0.1"},on:{"push-page":function(s){return t.push(s)},"back-page":function(s){return t.back()}}})],1)},o=[],u=(a("a434"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("div",{staticClass:"mv"},[a("img",{staticClass:"mv__img",attrs:{src:"/img/home/mv.jpg"}}),a("div",{staticClass:"mv__profile"},[a("div",{staticClass:"mv__profile-wrap"},[a("div",{staticClass:"mv__profile-inner"},[a("h1",{staticClass:"mv__profile-title"},[t._v(" Shinsuke Saito ")]),a("p",[a("b",[t._v("Age28 / Tokyo")])]),a("br"),a("p",[t._v(" 初めまして、齋藤です。"),a("br"),t._v(" 野球が大好きボーイです。"),a("br"),a("br"),t._v(" 株式会社あまたすでアプリや管理画面のUI/UXデザイン＆マークアップをしています。 ")])])])])]),a("div",{staticClass:"career"},[a("div",{staticClass:"career__wrap"},[a("div",{staticClass:"career__inner"},[a("h3",{staticClass:"career__title"},[t._v("Career")]),a("ul",t._l(t.careers,(function(s){return a("li",{key:s.message,staticClass:"career__list"},[a("img",{staticClass:"career__img",attrs:{src:s.img}}),a("div",[a("p",{staticClass:"career__term"},[t._v(" "+t._s(s.term)+" ")]),a("p",[a("b",[t._v(t._s(s.company))]),a("span",{staticClass:"career__position"},[t._v(t._s(s.position))])])])])})),0)])])])])}),p=[],_={data:function(){return{careers:[{img:"/img/home/ico_company.svg",term:"2019 -",company:"株式会社あまたす",position:"UI/UXデザイナー"},{img:"/img/home/ico_company.svg",term:"2018 - 2019",company:"株式会社エイムプレイス",position:"Webデザイナー"},{img:"/img/home/ico_company.svg",term:"2016 - 2018",company:"株式会社GypsophilA",position:"Webデザイナー"},{img:"/img/home/ico_company.svg",term:"2013 - 2016",company:"株式会社エストール",position:"グラフィックデザイナー"},{img:"/img/home/ico_school.svg",term:"2011 - 2013",company:"東京ビジュアルアーツ",position:"マスコミ編集学科"}]}}},m=_,h=a("2877"),g=Object(h["a"])(m,u,p,!1,null,null,null),v=g.exports,d={data:function(){return{swipe_width:null,pageStack:[v]}},methods:{push:function(t){this.pageStack.push(t)},back:function(){this.pageStack.splice(this.pageStack.length-1,1)}}},f=d,k=Object(h["a"])(f,r,o,!1,null,null,null),w=k.exports,b=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack,"swipe-target-width":t.swipe_width,"swipe-threshold":"0.1"},on:{"push-page":function(s){return t.push(s)},"back-page":function(s){return t.back()}}})],1)},C=[],S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("div",{staticClass:"works"},[a("h2",[t._v("Works")]),a("ul",[a("li",{staticClass:"works__list",on:{click:function(s){return t.pushSuutaApp()}}},[a("img",{staticClass:"works__img",attrs:{src:"/img/works/suuta_app@2x.png"}}),a("h3",{staticClass:"works__product"},[t._v(" SUUTA App ")]),a("p",[t._v(" CtoCレンタルプラットフォーム「SUUTA（スータ）」 ")])]),a("li",{staticClass:"works__list",on:{click:function(s){return t.pushSuutaLp()}}},[a("img",{staticClass:"works__img",attrs:{src:"/img/works/suuta_lp@2x.png"}}),a("h3",{staticClass:"works__product"},[t._v(" SUUTA LP ")]),a("p",[t._v(" CtoCレンタルプラットフォーム「SUUTA（スータ）」のLP ")])]),a("li",{staticClass:"works__list",on:{click:function(s){return t.pushSuutaLife()}}},[a("img",{staticClass:"works__img",attrs:{src:"/img/works/suuta_life@2x.png"}}),a("h3",{staticClass:"works__product"},[t._v(" SUUTA LIFE ")]),a("p",[t._v(" CtoCレンタルプラットフォーム「SUUTA（スータ）」のメディアサイト ")])])])])])},x=[],j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-toolbar",[a("div",{staticClass:"left"},[a("v-ons-back-button",{on:{click:function(s){return s.preventDefault(),t.back(s)}}},[t._v("Works")])],1),a("div",{staticClass:"center"},[t._t("default",[t._v("SUUTA App")])],2)]),a("div",{staticClass:"works-child"},[a("div",{staticClass:"works-child__text-wrap"},[a("h3",{staticClass:"works-child__title"},[t._v(" SUUTA App ")]),a("p",{staticClass:"works-child__year"},[t._v(" 2021 ")]),a("p",[t._v(" UIUX Design / HTML,CSS / Vue.js ")])]),a("div",{staticClass:"works-child__2column"},[a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_01@2x.jpg"}}),a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_02@2x.jpg"}})]),a("div",{staticClass:"works-child__2column"},[a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_03@2x.jpg"}}),a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_04@2x.jpg"}})]),a("div",{staticClass:"works-child__2column"},[a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_05@2x.jpg"}}),a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_06@2x.jpg"}})]),a("div",{staticClass:"works-child__2column"},[a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_07@2x.jpg"}}),a("img",{staticClass:"works-child__2column-img",attrs:{src:"/img/works/suuta_app/suuta_app_08@2x.jpg"}})])])],1)},y=[],U={methods:{back:function(){this.$emit("back-page")}}},O=U,$=Object(h["a"])(O,j,y,!1,null,null,null),T=$.exports,A=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-toolbar",[a("div",{staticClass:"left"},[a("v-ons-back-button",{on:{click:function(s){return s.preventDefault(),t.back(s)}}},[t._v("Page 1")])],1),a("div",{staticClass:"center"},[t._t("default")],2)]),a("div",{staticClass:"works-child"},[a("div",{staticClass:"works-child__text-wrap"},[a("h3",{staticClass:"works-child__title"},[t._v(" SUUTA BUSINESS ")]),a("p",{staticClass:"works-child__year"},[t._v(" 2021 ")]),a("p",[t._v(" UIUX Design / HTML,CSS / Vue.js ")]),a("p",[a("a",{attrs:{href:"#",target:"blank"}},[t._v(" https://### ")])])]),a("div",{staticClass:"works-child__1column"},[a("img",{staticClass:"works-child__1column-img",attrs:{src:"/img/works/suuta_web/suuta_web_01@2x.jpg"}})]),a("div",{staticClass:"works-child__1column"},[a("img",{staticClass:"works-child__1column-img",attrs:{src:"/img/works/suuta_web/suuta_web_02@2x.jpg"}})])])],1)},E=[],L={methods:{back:function(){this.$emit("back-page")}}},I=L,P=Object(h["a"])(I,A,E,!1,null,null,null),W=P.exports,D=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-toolbar",[a("div",{staticClass:"left"},[a("v-ons-back-button",{on:{click:function(s){return s.preventDefault(),t.back(s)}}},[t._v("Works")])],1),a("div",{staticClass:"center"},[t._t("default")],2)]),a("div",{staticClass:"works-child"},[a("div",{staticClass:"works-child__text-wrap"},[a("h3",{staticClass:"works-child__title"},[t._v(" SUUTA LP ")]),a("p",{staticClass:"works-child__year"},[t._v(" 2020 ")]),a("p",[t._v(" UIUX Design / HTML,CSS / jQuery ")]),a("p",[a("a",{attrs:{href:"https://about.suuta.com/am_lp_01/",target:"blank"}},[t._v(" https://about.suuta.com/am_lp_01/ ")])])]),a("div",{staticClass:"works-child__1column"},[a("img",{staticClass:"works-child__1column-img",attrs:{src:"/img/works/suuta_lp/suuta_lp_01@2x.jpg"}})])])],1)},M=[],H={methods:{back:function(){this.$emit("back-page")}}},X=H,F=Object(h["a"])(X,D,M,!1,null,null,null),G=F.exports,J=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-toolbar",[a("div",{staticClass:"left"},[a("v-ons-back-button",{on:{click:function(s){return s.preventDefault(),t.back(s)}}},[t._v("Works")])],1),a("div",{staticClass:"center"},[t._t("default")],2)]),a("div",{staticClass:"works-child"},[a("div",{staticClass:"works-child__text-wrap"},[a("h3",{staticClass:"works-child__title"},[t._v(" SUUTA LIFE ")]),a("p",{staticClass:"works-child__year"},[t._v(" 2020 ")]),a("p",[t._v(" WordPress / UIUX Design / HTML,CSS / jQuery ")]),a("p",[a("a",{attrs:{href:"https://suuta-life.com/",target:"blank"}},[t._v(" https://suuta-life.com/ ")])])]),a("div",{staticClass:"works-child__1column"},[a("img",{staticClass:"works-child__1column-img",attrs:{src:"/img/works/suuta_life/suuta-life@2x.jpg"}})])])],1)},Q=[],V={methods:{back:function(){this.$emit("back-page")}}},B=V,N=Object(h["a"])(B,J,Q,!1,null,null,null),q=N.exports,z={methods:{pushSuutaApp:function(){this.$emit("push-page",T)},pushSuutaWeb:function(){this.$emit("push-page",W)},pushSuutaLp:function(){this.$emit("push-page",G)},pushSuutaLife:function(){this.$emit("push-page",q)}}},K=z,R=Object(h["a"])(K,S,x,!1,null,null,null),Y=R.exports,Z={data:function(){return{swipe_width:null,pageStack:[Y]}},methods:{push:function(t){this.pageStack.push(t)},back:function(){this.pageStack.splice(this.pageStack.length-1,1)}}},tt=Z,st=Object(h["a"])(tt,b,C,!1,null,null,null),at=st.exports,it=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack,"swipe-target-width":t.swipe_width,"swipe-threshold":"0.1"},on:{"push-page":function(s){return t.push(s)},"back-page":function(s){return t.back()}}})],1)},et=[],nt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-ons-page",[a("div",{staticClass:"bg-gray"},[a("div",{staticClass:"title-wrap"},[a("h2",[t._v("Other")])]),a("v-ons-list",{staticClass:"mb32"},[a("v-ons-list-item",[a("div",{staticClass:"left"},[a("img",{staticClass:"list-item__thumbnail",attrs:{src:"/img/other/profile.jpg"}})]),a("div",{staticClass:"center"},[a("span",{staticClass:"list-item__title"},[t._v("Shinsuke Saito")]),a("span",{staticClass:"list-item__subtitle"},[t._v("Age28 / Tokyo")])])])],1),a("v-ons-list",[a("v-ons-list-item",{attrs:{tappable:"",onClick:"window.open('https://github.com/s-saito-git')"}},[a("div",{staticClass:"left"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-github"}})],1),a("div",{staticClass:"center"},[t._v(" GitHub ")]),a("div",{staticClass:"right"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-external-link-alt"}})],1)]),a("v-ons-list-item",{attrs:{tappable:"",onClick:"window.open('https://twitter.com/s_s_saito')"}},[a("div",{staticClass:"left"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-twitter"}})],1),a("div",{staticClass:"center"},[t._v(" Twitter ")]),a("div",{staticClass:"right"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-external-link-alt"}})],1)]),a("v-ons-list-item",{attrs:{tappable:"",onClick:"window.open('mailto:s.s.saito108@gmail.com')"}},[a("div",{staticClass:"left"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-envelope"}})],1),a("div",{staticClass:"center"},[t._v(" Contact ")]),a("div",{staticClass:"right"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:"fa-external-link-alt"}})],1)])],1)],1)])},ct=[],lt={},rt=Object(h["a"])(lt,nt,ct,!1,null,null,null),ot=rt.exports,ut={data:function(){return{swipe_width:null,pageStack:[ot]}},methods:{push:function(t){this.pageStack.push(t)},back:function(){this.pageStack.splice(this.pageStack.length-1,1)}}},pt=ut,_t=Object(h["a"])(pt,it,et,!1,null,null,null),mt=_t.exports,ht={name:"index",data:function(){return{tabIndex:0,tabs:[{icon:"fa-home",label:"Home",page:w},{icon:"fa-folder",label:"Works",page:at},{icon:"fa-ellipsis-h",label:"Other",page:mt}]}},methods:{push:function(t){this.$emit("push-page",t)},back:function(){this.$emit("back-page")}}},gt=ht,vt=Object(h["a"])(gt,c,l,!1,null,null,null),dt=vt.exports;a("aef7"),i["a"].config.productionTip=!1,i["a"].use(n.a),new i["a"]({render:function(t){return t(dt)}}).$mount("#app")},aef7:function(t,s,a){}});
//# sourceMappingURL=app.f8565401.js.map