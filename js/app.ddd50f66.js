(function(t){function e(e){for(var a,l,s=e[0],i=e[1],u=e[2],m=0,d=[];m<s.length;m++)l=s[m],r[l]&&d.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},r={app:0},n=[];function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=i;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("64a9"),r=o.n(a);r.a},1:function(t,e){},"114f":function(t,e,o){"use strict";var a=o("d3dd"),r=o.n(a);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),r=o("5c96"),n=o.n(r),l=(o("0fae"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("el-container",[o("el-header",[o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[o("el-menu-item",{attrs:{index:"1"}},[o("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1),t.flag?o("el-menu-item",{attrs:{index:"3"}},[o("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1):t._e(),t.flag?o("el-menu-item",{attrs:{index:"4"}},[o("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1):t._e(),t.flag?t._e():o("el-submenu",{attrs:{index:"2"}},[o("template",{slot:"title"},[t._v(t._s(t.name))]),o("el-menu-item",{attrs:{index:"2-1"}},[t._v("favorite")]),o("el-menu-item",{attrs:{index:"2-2"},on:{click:function(e){return t.logout()}}},[t._v("logout")])],2)],1)],1),o("el-container",[o("el-aside",{attrs:{width:"200px"}},[o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[o("el-submenu",{attrs:{index:"1"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-location"}),o("span",[t._v("Aricles")])]),o("el-menu-item-group",[o("template",{slot:"title"}),o("el-menu-item",{attrs:{index:"1-1"}},[o("router-link",{attrs:{to:"/AddArticle"}},[t._v("Add")])],1)],2)],2)],1)],1),o("el-main",[o("router-view")],1)],1)],1)],1)}),s=[],i={data:function(){return{activeIndex:"1",flag:!0,name:""}},methods:{handleSelect:function(t,e){console.log(t,e)},checkLogin:function(){""!==localStorage.getItem("token")?(this.flag=!1,this.name=localStorage.getItem("name")):this.flag=!0},logout:function(){localStorage.setItem("token",""),localStorage.setItem("userId","123456"),localStorage.setItem("name",""),this.flag=!0,this.$router.push({path:"/home"})}},mounted:function(){this.checkLogin();var t="production";document.documentElement.className=t}},u=i,c=(o("034f"),o("2877")),m=Object(c["a"])(u,l,s,!1,null,null,null),d=m.exports,f=o("5f2b"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.result.articles}},[o("el-table-column",{attrs:{prop:"title",label:"title",width:"180"}}),o("el-table-column",{attrs:{prop:"author.name",label:"author"}}),o("el-table-column",{attrs:{prop:"create_date",label:"create date"}}),o("el-table-column",{attrs:{fixed:"right",label:"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.read(e.row._id)}}},[t._v("read")])]}}])})],1)},h=[],b={data:function(){return{result:{}}},methods:{requestData:function(){var t=this;this.$http.get("http://127.0.0.1:3000/articles").then(function(e){t.result=e.data,console.log(e.data)},function(t){console.log(t)})},read:function(t){this.$router.push({path:"/detail/"+t})}},mounted:function(){this.requestData()}},g=b,y=Object(c["a"])(g,p,h,!1,null,"e0e9b2aa",null),v=y.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[o("h1",[t._v(t._s(t.result.article.title))])]),o("span",[o("span",{staticStyle:{float:"left",color:"gray"}},[t._v(t._s(t.result.article.author.name))]),o("span",{staticStyle:{float:"right",color:"gray"}},[t._v(t._s(t.result.article.create_date))])])]),o("div",{staticStyle:{float:"left",display:"flow-root"}},[o("span",[t._v(t._s(t.result.article.body)+"\n"),t.result.article.is_update?o("span",{staticStyle:{"font-size":"xx-small",color:"grey"}},[t._v("\n\n                   [edit at "+t._s(t.result.article.update_date)+"]\n\n               ")]):t._e(),t.flag?o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.editArticle()}}}):t._e()],1),o("br"),o("br"),o("div",{staticStyle:{float:"left"}},[o("span",{staticStyle:{float:"left"}},[t._v("comments")]),o("br"),o("ul",{staticStyle:{"list-style-type":"none","text-align":"left",padding:"0px"}},[t._l(t.result.article.comments,function(e,a){return o("li",{model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},[o("span",[t._v(t._s(e.author.name)+": ")]),o("span",[t._v(t._s(e.body))]),t.isAuthor(e.author._id)?o("span",[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(o){return t.editComment(e._id,e.body)}}})],1):t._e()])}),0===t.result.article.comments.length?o("li",[t._v("\n                       no comment yet\n                   ")]):t._e()],2),o("el-form",{staticClass:"demo-form-inline",staticStyle:{float:"left",display:"block"},attrs:{inline:!0,model:t.comment}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"left a comment"},model:{value:t.comment.body,callback:function(e){t.$set(t.comment,"body",e)},expression:"comment.body"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("submit")])],1)],1)],1)]),o("br")])},$=[],x=(o("6762"),o("2fdb"),{data:function(){return{result:{},flag:!0,cflag:!0,comment:{}}},methods:{requestData:function(){var t=this;this.$http.get("http://127.0.0.1:3000/articles/"+this.$route.params.articleId).then(function(e){t.result=e.data,console.log(e),console.log(localStorage.getItem("userId")),t.result.article.author._id!==localStorage.getItem("userId")&&(t.flag=!1)},function(t){console.log(t)})},editArticle:function(){this.$router.push({path:"/editArticle/"+this.result.article._id,query:{title:this.result.article.title,body:this.result.article.body,articleId:this.result.article._id}})},onSubmit:function(){var t=this,e={};e["Authorization"]="Bearer "+localStorage.getItem("token"),this.$http.post("http://127.0.0.1:3000/comments",{body:this.comment.body,articleId:this.result.article._id},{headers:e}).then(function(e){t.result=e.data,t.$message(e.data.message),t.$router.go(0)},function(t){console.log(t)})},editComment:function(t,e){this.$router.push({path:"/editComment/"+t,query:{body:e,commentId:t,articleId:this.result.article._id}})},isAuthor:function(t){return t===localStorage.getItem("userId")},isFavor:function(){return!!JSON.parse(localStorage.getItem("favList")).includes(this.result.article._id)},addFavour:function(){var t=this,e={};e["Authorization"]="Bearer "+localStorage.getItem("token"),this.$http.post("http://127.0.0.1:3000/user/"+this.result.article._id,{},{headers:e}).then(function(e){t.result=e.data,t.$message(e.data.message)},function(e){console.log(e),t.$message(e.data.message)})},removeFavour:function(){var t=this,e={};e["Authorization"]="Bearer "+localStorage.getItem("token"),this.$http.delete("http://127.0.0.1:3000/user/"+this.result.article._id,{},{headers:e}).then(function(e){t.result=e.data,t.$message(e.data.message)},function(e){console.log(e),t.$message(e.data.message)})}},mounted:function(){this.requestData()}}),S=x,k=(o("114f"),Object(c["a"])(S,_,$,!1,null,"249bd8d4",null)),w=k.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("br"),o("el-form-item",{attrs:{label:"title"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"body"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("create")])],1)],1)},O=[],j={data:function(){return{form:{title:"",body:""}}},methods:{onSubmit:function(){var t=this,e={};e["Authorization"]="Bearer "+localStorage.getItem("token"),this.$http.post("http://127.0.0.1:3000/articles/",{title:this.form.title,body:this.form.body},{headers:e}).then(function(e){t.result=e.data,console.log(e),t.$message(e.data.message),t.$router.push({path:"/home"})},function(e){console.log(e),t.$message(e.data.message)})}},mounted:function(){}},q=j,A=Object(c["a"])(q,I,O,!1,null,"5b9ec2a0",null),C=A.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("br"),o("el-form-item",{attrs:{label:"email"}},[o("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),o("el-form-item",{attrs:{label:"password"}},[o("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("login")])],1)],1)},z=[],E=(o("7f7f"),{data:function(){return{form:{email:"",password:""}}},methods:{onSubmit:function(){var t=this;this.$http.post("http://127.0.0.1:3000/user/login",{email:this.form.email,password:this.form.password}).then(function(e){t.$message(e.data.message),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.userId),localStorage.setItem("name",e.data.name),localStorage.setItem("favList",JSON.stringify(e.data.favor)),t.$router.go(0),t.$router.push({path:"/home"})},function(e){t.$message(e.data.message)})}},mounted:function(){}}),B=E,T=Object(c["a"])(B,D,z,!1,null,"4dcb3c96",null),P=T.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("br"),o("el-form-item",{attrs:{label:"email"}},[o("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),o("el-form-item",{attrs:{label:"name"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"password"}},[o("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Register")])],1)],1)},N=[],J={data:function(){return{form:{email:"",password:"",name:""}}},methods:{onSubmit:function(){var t=this;this.$http.post("http://127.0.0.1:3000/user/signup",{email:this.form.email,name:this.form.name,password:this.form.password}).then(function(e){t.$message(e.data.message),t.$router.push({path:"/home"})},function(e){t.$message(e.data.message)})}},mounted:function(){}},M=J,F=Object(c["a"])(M,L,N,!1,null,"c472e070",null),R=F.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("br"),o("el-form-item",{attrs:{label:"title"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"body"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("edit")]),o("el-button",{attrs:{type:"danger"},on:{click:t.onDelete}},[t._v("delete")])],1)],1)},H=[],G={data:function(){return{form:{title:"",body:""}}},methods:{onSubmit:function(){var t=this;this.$http.put("http://127.0.0.1:3000/articles/"+this.$route.query.articleId,{title:this.form.title,body:this.form.body}).then(function(e){t.result=e.data,console.log(e),t.$message(e.data.message),t.$router.push({path:"/detail/"+t.$route.query.articleId})},function(e){console.log(e),t.$message(e.data.message)})},onDelete:function(){var t=this;this.$confirm("Delete article?","Comfirm",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(function(){t.$http.delete("http://127.0.0.1:3000/articles/"+t.$route.query.articleId).then(function(e){t.$message(e.data.message),t.$router.push({path:"/home"})},function(e){console.log(e),t.$message(e.data.message)})}).catch(function(){t.$message({type:"info",message:"Cancel"})})}},mounted:function(){this.form.title=this.$route.query.title,this.form.body=this.$route.query.body}},K=G,Q=Object(c["a"])(K,Y,H,!1,null,"3da05225",null),U=Q.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("br"),o("el-form-item",{attrs:{label:"body"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("edit")]),o("el-button",{attrs:{type:"danger"},on:{click:t.onDelete}},[t._v("delete")])],1)],1)},W=[],X={data:function(){return{form:{body:""}}},methods:{onSubmit:function(){var t=this;this.$http.put("http://127.0.0.1:3000/comments/"+this.$route.query.commentId,{body:this.form.body}).then(function(e){t.result=e.data,console.log(e),t.$message(e.data.message),t.$router.push({path:"/detail/"+t.$route.query.articleId})},function(e){console.log(e),t.$message(e.data.message)})},onDelete:function(){var t=this;this.$confirm("Delete comment?","Comfirm",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(function(){t.$http.delete("http://127.0.0.1:3000/comments/"+t.$route.query.commentId).then(function(e){t.$message(e.data.message),t.$router.push({path:"/detail/"+t.$route.query.articleId})},function(e){console.log(e),t.$message(e.data.message)})}).catch(function(){t.$message({type:"info",message:"Cancel"})})}},mounted:function(){this.form.body=this.$route.query.body}},Z=X,tt=Object(c["a"])(Z,V,W,!1,null,"11b4563e",null),et=tt.exports;a["default"].use(f["a"]);var ot=[{path:"/home",component:v},{path:"/detail/:articleId",component:w},{path:"/AddArticle",component:C},{path:"/login",component:P},{path:"/editArticle/:articleId",component:U},{path:"/editComment/:commentId",component:et},{path:"/register",component:R}],at=new f["a"]({routes:ot}),rt=at,nt=o("28dd");a["default"].use(nt["a"]),a["default"].use(n.a),a["default"].config.productionTip=!1,new a["default"]({el:"#app",render:function(t){return t(d)},router:rt}).$mount("#app")},"64a9":function(t,e,o){},d3dd:function(t,e,o){}});
//# sourceMappingURL=app.ddd50f66.js.map