"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[275],{7275:function(s,t,e){e.r(t),e.d(t,{default:function(){return d}});var o=function(){var s=this,t=s._self._c;return t("div",{staticClass:"about"},[t("h1",[s._v("This is an about page")]),t("h1",[s._v(s._s(s.$store.state.a.user))]),t("h2",[s._v(s._s(s.$store.getters["a/jsUser"]))]),t("button",{on:{click:s.changeActions}},[s._v("actions修改")]),t("button",{on:{click:function(t){return s.add({user:"mutations修改"})}}},[s._v(" mutations修改 ")]),t("p",{directives:[{name:"my-directive",rawName:"v-my-directive",value:456,expression:"456"}]},[s._v(s._s(s.user))]),s._v(" "+s._s(s.jsuser)+" "),t("br"),s._v(" "+s._s(s.jsName)+". "),t("p",[s._v(s._s(s._f("myFilter")("过滤之后")))]),t("HelloWorld",{attrs:{user:10}}),t("p",[s._v(s._s(s.c))]),t("span",{key:s.text},[s._v(s._s(s.text))])],1)},n=[],i=e(629),l=e(8938),a={created:function(){this.hello()},methods:{hello:function(){console.log("我是mixin hello from mixin!")}}},r=a,c={name:"AboutView",mixins:[r],components:{HelloWorld:l.Z},created(){console.log("我是about created")},computed:{...(0,i.rn)({user:s=>s.a.user}),...(0,i.Se)("a",{jsuser:"jsUser"}),...(0,i.Se)("b",{jsName:"jsName"}),c:s=>(console.log(s),++s.a+"计算之后")},data(){return{a:1,text:"text"}},mounted(){this.$store.dispatch("b/bact"),console.log(this.$store.getters["a/jsUser"]),console.log("this.$parent",this.$parent),console.log("this.$children",this.$children),console.log("this.$root",this.$root),console.log("this.$options",this.$options),console.log("this.$props",this.$props),console.log("this.$slots",this.$slots),console.log(this.$scopedSlots),console.log("this.$refs",this.$refs),console.log("this.$el",this.$el),console.log("this.$data",this.$data),console.log("this.$isServer",this.$isServer),console.log("this.$ssrContext",this.$ssrContext),console.log("this.$vnode",this.$vnode),console.log("this.$attrs",this.$attrs),console.log("this.$listeners",this.$listeners)},methods:{...(0,i.OI)({add:"a/mutationsChange"}),...(0,i.nv)({changeActions:"a/actionsChange"}),actionsChange(){this.$store.dispatch("a/actionsChange")},mutationsChange(){this.$store.commit("a/mutationsChange",{user:"mutations修改"})}}},h=c,u=e(1001),$=(0,u.Z)(h,o,n,!1,null,null,null),d=$.exports}}]);