"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[371],{6371:function(s,t,e){e.r(t),e.d(t,{default:function(){return g}});var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"about"},[e("h1",[s._v("This is an about page")]),e("h1",[s._v(s._s(s.$store.state.a.user))]),e("h2",[s._v(s._s(s.$store.getters["a/jsUser"]))]),e("button",{on:{click:s.changeActions}},[s._v("actions修改")]),e("button",{on:{click:function(t){return s.add({user:"mutations修改"})}}},[s._v(" mutations修改 ")]),e("p",{directives:[{name:"my-directive",rawName:"v-my-directive",value:456,expression:"456"}]},[s._v(s._s(s.user))]),s._v(" "+s._s(s.jsuser)+" "),e("br"),s._v(" "+s._s(s.jsName)+". "),e("p",[s._v(s._s(s._f("myFilter")("过滤之后")))]),e("HelloWorld",{attrs:{user:10}}),e("p",[s._v(s._s(s.c))]),e("span",{key:s.text},[s._v(s._s(s.text))])],1)},n=[],i=e(629),l=e(8814),a={created:function(){this.hello()},methods:{hello:function(){console.log("hello from mixin!")}}},r=a,h={name:"AboutView",mixins:[r],components:{HelloWorld:l.Z},computed:{...(0,i.rn)({user:s=>s.a.user}),...(0,i.Se)("a",{jsuser:"jsUser"}),...(0,i.Se)("b",{jsName:"jsName"}),c:s=>(console.log(s),++s.a+"计算之后")},data(){return{a:1,text:"text"}},mounted(){console.log(this.$store.getters["a/jsUser"]),console.log("this.$parent",this.$parent),console.log("this.$children",this.$children),console.log("this.$root",this.$root),console.log("this.$options",this.$options),console.log("this.$props",this.$props),console.log("this.$slots",this.$slots),console.log(this.$scopedSlots),console.log("this.$refs",this.$refs),console.log("this.$el",this.$el),console.log("this.$data",this.$data),console.log("this.$isServer",this.$isServer),console.log("this.$ssrContext",this.$ssrContext),console.log("this.$vnode",this.$vnode),console.log("this.$attrs",this.$attrs),console.log("this.$listeners",this.$listeners)},methods:{...(0,i.OI)({add:"a/mutationsChange"}),...(0,i.nv)({changeActions:"a/actionsChange"}),actionsChange(){this.$store.dispatch("a/actionsChange")},mutationsChange(){this.$store.commit("a/mutationsChange",{user:"mutations修改"})}}},c=h,u=e(1001),$=(0,u.Z)(c,o,n,!1,null,null,null),g=$.exports}}]);