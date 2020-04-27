(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99a2e694"],{"5d03":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增链接")])],1):t._e(),a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"100"}}),a("el-table-column",{attrs:{label:"Url",prop:"url","min-width":"150"}}),a("el-table-column",{attrs:{label:"Logo",prop:"logo",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.logo?a("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(e.row.logo),fit:"fill"},nativeOn:{click:function(a){return t.$preview(e.row.logo)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):t._e()]}}])}),a("el-table-column",{attrs:{label:"打开方式",prop:"target"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.targetMap[e.row.target].text)+" ")]}}])}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入友情链接名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"Url",prop:"url"}},[a("el-input",{attrs:{placeholder:"请输入友情链接Url",clearable:!0},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),a("el-form-item",{attrs:{label:"Logo",prop:"logo"}},[a("el-input",{attrs:{placeholder:"可输入友情链接Logo",clearable:!0},model:{value:t.form.logo,callback:function(e){t.$set(t.form,"logo",e)},expression:"form.logo"}},[a("template",{slot:"prepend"},[t.form.logo?a("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(t.form.logo),fit:"fill"},nativeOn:{click:function(e){return t.$preview(t.form.logo)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):t._e()],1),a("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:t.handleCommand},slot:"append"},[a("el-button",{attrs:{icon:"el-icon-upload"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[t._v("资源选择")]),a("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[t._v("上传资源")])],1)],1)],2)],1),a("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[a("el-radio-group",{model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[a("el-radio",{attrs:{label:"_self"}},[t._v("当前窗口")]),a("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")])],1)],1),a("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:t._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:t._getUploadFileList}})],1)],1)},o=[],l=(a("a4d3"),a("e01a"),a("d28b"),a("4de4"),a("c975"),a("4e82"),a("a434"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("3ca3"),a("159b"),a("ddb0"),a("ade3")),n=a("b32c"),i=a("ca00");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={components:{csUpload:function(){return a.e("chunk-590f2ff2").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-1358f166").then(a.bind(null,"8704"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,enable:!1,disable:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑客服",create:"新增客服"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},targetMap:{_self:{text:"当前窗口",value:"_self"},_blank:{text:"新窗口",value:"_blank"}},form:{name:void 0,url:void 0,logo:void 0,target:void 0,sort:void 0,status:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],url:[{required:!0,message:"Url不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},filters:{getPreviewUrl:function(t){return t?i["a"].getImageCodeUrl(t,"link_image"):""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$has("/system/aided/friendlink/add"),this.auth.set=this.$has("/system/aided/friendlink/set"),this.auth.del=this.$has("/system/aided/friendlink/del"),this.auth.sort=this.$has("/system/aided/friendlink/sort"),this.auth.enable=this.$has("/system/aided/friendlink/enable"),this.auth.disable=this.$has("/system/aided/friendlink/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.friend_link_id)})):e.push(this.currentTableData[t].friend_link_id),e},handleCommand:function(t){switch(t){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&0===e.data[0].type&&(this.form.logo=e.data[0].url)}},_getStorageFileList:function(t){if(t.length){var e=!0,a=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var n=o.value;if(0===n.type){this.form.logo=n.url;break}}}catch(i){a=!0,r=i}finally{try{e||null==l.return||l.return()}finally{if(a)throw r}}}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,r=t.order,o={order_type:void 0,order_field:void 0};e&&r&&(o.order_type="ascending"===r?"asc":"desc",o.order_field=a),this.$emit("sort",o)},handleCreate:function(){var t=this;this.form={name:void 0,url:void 0,target:"_blank",logo:"",sort:50,status:"1"},this.$nextTick((function(){t.$refs.form.clearValidate()})),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(n["a"])(c({},t.form)).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this._getIdList(t);if(0!==o.length){if(!r){var l=this.currentTableData[t],i=l.status?0:1;if(l.status>1)return;if(0===i&&!this.auth.disable)return;if(1===i&&!this.auth.enable)return;return this.$set(this.currentTableData,t,c({},l,{status:2})),void s(o,i,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){s(o,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function s(t,e,a){Object(n["f"])(t,e).then((function(){a.currentTableData.forEach((function(r,o){-1!==t.indexOf(r.friend_link_id)&&a.$set(a.currentTableData,o,c({},r,{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(n["b"])(a).then((function(){for(var t=e.currentTableData.length-1;t>=0;t--)-1!==a.indexOf(e.currentTableData[t].friend_link_id)&&e.currentTableData.splice(t,1);e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleSort:function(t){Object(n["e"])(this.currentTableData[t].friend_link_id,this.currentTableData[t].sort)},handleUpdate:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.form=c({},a,{status:a.status.toString()}),this.$nextTick((function(){e.$refs.form.clearValidate()})),this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(n["d"])(c({},t.form)).then((function(e){t.$set(t.currentTableData,t.currentIndex,c({},t.currentTableData[t.currentIndex],{},e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))}}},d=u,f=(a("dbb0"),a("2877")),m=Object(f["a"])(d,r,o,!1,null,"ebc8606c",null);e["default"]=m.exports},"722b":function(t,e,a){},dbb0:function(t,e,a){"use strict";var r=a("722b"),o=a.n(r);o.a}}]);