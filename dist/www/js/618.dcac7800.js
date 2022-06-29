"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[618],{3618:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"attribute-cla"},[r("h1",[e._v("特殊的attribute")]),r("h3",[e._v("key")]),r("div",[r("p",[e._v("key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。")]),r("p",[e._v("它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：")]),e._m(0),r("h5",[e._v("例如:")]),r("transition",[r("span",{key:e.text},[e._v(e._s(e.text))])]),e._v(" 当 text 发生改变时，<span> 总是会被替换而不是被修改，因此会触发过渡。 ")],1),r("h3",[e._v("ref")]),r("div",[r("p",[e._v("ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：")]),r("p",[e._v(" 当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。 关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。 ")]),r("ul",e._l(e.list,(function(t){return r("li",{key:t,ref:"test",refInFor:!0},[e._v(" "+e._s(t)+" ")])})),0),r("HelloWorld",{ref:"hw"})],1),r("h3",[e._v("is")]),r("div",[r("p",[e._v(" 用于动态组件且基于 DOM 内模板的限制来工作。")]),r(e.currentView,{tag:"component"}),r("table",[r("HelloWorld",{tag:"tr"})],1)],1)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("完整地触发组件的生命周期钩子")]),r("li",[e._v("触发过渡")])])}],s=r(8814),o={name:"AttributeDemo",components:{HelloWorld:s.Z},data(){return{text:"测试",list:[1,2,3,4,5],currentView:"HelloWorld"}},mounted(){console.log(this.$refs.test),console.log(this.$refs.hw)}},i=o,u=r(1001),a=(0,u.Z)(i,l,n,!1,null,"8cf999d6",null),f=a.exports}}]);