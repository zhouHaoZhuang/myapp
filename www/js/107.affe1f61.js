"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[107],{107:function(e,o,t){t.r(o),t.d(o,{default:function(){return i}});var n=function(){var e=this,o=e._self._c;return o("div",[o("a",{attrs:{href:e.url,download:""}},[e._v(" 下载 ")]),o("hr"),o("a",{attrs:{href:"https://img2.baidu.com/it/u=3032299185,3338143701&fm=253&fmt=auto&app=138&f=PNG?w=445&h=298",download:""}},[e._v(" 下载失败 ")]),o("hr"),o("a",{on:{click:e.downloadFile}},[e._v(" 外部下载 ")]),o("hr"),o("a",{attrs:{id:"copy"},on:{click:function(o){return e.copy("copy")}}},[e._v(" 你好，点我复制内容 ")])])},a=[],c={data(){return{url:t(6949),msg:"Welcome to Your Vue.js App",data:{downloadUri:"https://img2.baidu.com/it/u=3032299185,3338143701&fm=253&fmt=auto&app=138&f=PNG?w=445&h=298",title:"你好"}}},methods:{downloadFile(){let e=this.data.downloadUri,o=this.data.title;if(!(e.length<=0)){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="blob",t.onload=function(){console.log(t.response);var e=window.URL.createObjectURL(t.response);console.log(e);var n=document.createElement("a");n.href=e,n.download=o,n.click(),window.URL.revokeObjectURL(e)},t.send()}},async copy(e){const o=document.getElementById(e),t=navigator.clipboard;t?await t.writeText(o.innerText.trim()):(o.select(),document.execCommand("Copy")),console.log("复制成功"),alert("复制成功")},copyto(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("复制成功")}),(function(){this.copy2(e)})):this.copy2(e)},copy2(e){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){const e=document.createRange();e.selectNode(document.querySelector(".copyTxt"));const o=window.getSelection();o.rangeCount>0&&o.removeAllRanges(),o.addRange(e),document.execCommand("Copy"),console.log("复制成功"),o.removeAllRanges()}else{const o=document.createElement("INPUT");o.value=e,o.className="",document.body.appendChild(o),o.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(o)}}}},l=c,d=t(1001),r=(0,d.Z)(l,n,a,!1,null,null,null),i=r.exports}}]);