(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b7297"],{"1ff2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"邀请人配置",name:"invite"}}),a("el-tab-pane",{attrs:{label:"被邀请人配置",name:"invited"}})],1),a("el-form",{staticClass:"mgt16",attrs:{model:e.ruleForm,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"奖品类型"}},[a("el-select",{staticClass:"w100",attrs:{filterable:"","allow-create":"",clearable:""},model:{value:e.ruleForm.reward_type,callback:function(t){e.$set(e.ruleForm,"reward_type",t)},expression:"ruleForm.reward_type"}},e._l(["类型1","类型2","类型3"],(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"加息权益"}},[a("el-input",{attrs:{clearable:""},model:{value:e.ruleForm.interset,callback:function(t){e.$set(e.ruleForm,"interset",e._n(t))},expression:"ruleForm.interset"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("保存")])],1)],1)],1)},r=[],n=(a("b0c0"),{data:function(){return{activeName:"invite",ruleForm:{reward_type:"",interset:0}}},mounted:function(){this.handleClick({name:this.activeName})},methods:{handleClick:function(e){console.log(e.name),"invite"==e.name?this.ruleForm={reward_type:"类型1",interset:2}:this.ruleForm={reward_type:"类型3",interset:0}}}}),i=n,s=a("2877"),o=Object(s["a"])(i,l,r,!1,null,"06e478ea",null);t["default"]=o.exports}}]);