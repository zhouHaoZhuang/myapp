"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[234,851],{2851:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dv1"},[n("DiGui",{attrs:{list:t.list}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"div1"},[t._v(" "+t._s(e.title)+" ")]),e.children?n("div",{staticClass:"div2"},[n("DiGui",{attrs:{list:e.children}})],1):t._e()])})),0)},r=[],s={name:"DiGui",props:{list:{}},data(){return{}}},l=s,c=n(1001),v=(0,c.Z)(l,a,r,!1,null,"6f136eb4",null),d=v.exports,p={name:"DiGui2",props:{},components:{DiGui:d},data(){return{list:[{title:"成人",children:[{title:"成人1"},{title:"成人2",children:[{title:"成人2-1"},{title:"成人2-2"}]}]},{title:"儿童",children:[{title:"儿童1"},{title:"儿童2"}]},{title:"老人",children:[{title:"老人1"},{title:"老人2"}]}]}}},u=p,m=(0,c.Z)(u,i,o,!1,null,"7b823a1b",null),g=m.exports},1234:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"in-components"},[n("h1",[t._v("内置的组件")]),n("h3",[t._v("component")]),n("div",[n(t.componentId,{tag:"component"})],1),n("h3",[t._v("transition")]),n("div",[t._v(' Props： name - string，用于自动生成 CSS 过渡类名。例如：name: \'fade\' 将自动拓展为 .fade-enter，.fade-enter-active 等。默认类名为 "v" appear - boolean，是否在初始渲染时使用过渡。默认为 false。 css - boolean，是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。 type - string，指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。 mode - string，控制离开/进入过渡的时间序列。有效的模式有 "out-in" 和 "in-out"；默认同时进行。 duration - number | { enter: number, leave: number } 指定过渡的持续时间。默认情况下，Vue 会等待过渡所在根元素的第一个 transitionend 或 animationend 事件。 enter-class - string leave-class - string appear-class - string enter-to-class - string leave-to-class - string appear-to-class - string enter-active-class - string leave-active-class - string appear-active-class - string 用法： <transition> 元素作为单个元素/组件的过渡效果。<transition> 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。 '),n("hr"),n("div",[n("button",{on:{click:function(e){t.ok=!t.ok}}},[t._v("切换")]),n("transition",{attrs:{appear:""}},[t.ok?n("div",[t._v("toggled content")]):t._e()]),n("transition",{attrs:{type:"animation",name:"fade",mode:"out-in",appear:""},on:{animationend:t.onAnm}},[n(t.componentId,{tag:"component"})],1),n("button",{on:{click:t.changeCom}},[t._v("修改动态组件的值")]),n("div",{attrs:{id:"transition-demo"}},[n("transition",{on:{"after-enter":t.transitionComplete}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ok,expression:"ok"}]},[t._v("toggled content")])])],1)],1)]),n("br"),n("hr"),n("h3",[t._v("transition-group")]),n("div",[t._v(" Props： tag - string，默认为 span move-class - 覆盖移动过渡期间应用的 CSS 类。 除了 mode，其他 attribute 和 <transition> 相同。 事件： 事件和 <transition> 相同。 用法： <transition-group> 元素作为多个元素/组件的过渡效果。<transition-group> 渲染一个真实的 DOM 元素。默认渲染 <span>，可以通过 tag attribute 配置哪个元素应该被渲染。 注意，每个 <transition-group> 的子节点必须有独立的 key，动画才能正常工作 <transition-group> 支持通过 CSS transform 过渡移动。当一个子节点被更新，从屏幕上的位置发生变化，它会被应用一个移动中的 CSS 类 (通过 name attribute 或配置 move-class attribute 自动生成)。如果 CSS transform property 是“可过渡”property，当应用移动类时，将会使用 FLIP 技术使元素流畅地到达动画终点。 ")]),n("h3",[t._v("keep-alive")]),n("div",[t._v(" Props： include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。 max - 数字。最多可以缓存多少组件实例。 用法： keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。 当组件在 keep-alive 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 keep-alive 树内的所有嵌套组件中触发。 主要用于保留组件状态或避免重新渲染。 "),t._v(" 注意，keep-alive 是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，keep-alive 要求同时只有一个子元素被渲染。 include and exclude 2.1.0 新增 include 和 exclude prop 允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示： "),n("keep-alive",{attrs:{include:"A,B"}},[n(t.view,{tag:"component"})],1),n("keep-alive",{attrs:{include:/A|B/}},[n(t.view,{tag:"component"})],1),n("keep-alive",{attrs:{include:["A","B"]}},[n(t.view,{tag:"component"})],1),n("button",{on:{click:function(e){t.view="A"===t.view?"B":"A"}}},[t._v("切换view")]),t._v(" 匹配首先检查组件自身的 name 选项，如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。 max 2.5.0 新增 最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。 "),n("keep-alive",{attrs:{max:10}},[n(t.view,{tag:"component"})],1),t._v(" keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。 ")],1),n("hr"),n("h3",[t._v("slot")]),n("div",[t._v(" Props： name - string，用于命名插槽。 Usage： slot 元素作为组件模板之中的内容分发插槽。slot 元素自身将被替换。 详细用法，请参考下面教程的链接。 ")])])},o=[],a=n(8814),r=n(2851),s={name:"InComponents",components:{HelloWorld:a.Z,DiGui2:r["default"],A:{render:function(t){return t("div",{},[t("h1",{},"A")])}},B:{render:function(t){return t("div",{},[t("h1",{},"B")])}}},data(){return{componentId:"HelloWorld",ok:!0,view:"A"}},mounted(){console.log(this.$options.components,this.$options.components.HelloWorld),this.$on("animationend",this.onAnm)},methods:{onAnm(t){console.log(t,"---------")},changeCom(){this.componentId="HelloWorld"===this.componentId?"DiGui2":"HelloWorld"},transitionComplete(){console.log("transition complete")}}},l=s,c=n(1001),v=(0,c.Z)(l,i,o,!1,null,"e484e5f4",null),d=v.exports}}]);