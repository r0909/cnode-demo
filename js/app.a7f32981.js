(function(t){function n(n){for(var e,r,o=n[0],c=n[1],u=n[2],p=0,f=[];p<o.length;p++)r=o[p],s[r]&&f.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,n=0;n<i.length;n++){for(var a=i[n],e=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(e=!1)}e&&(i.splice(n--,1),t=r(r.s=a[0]))}return t}var e={},s={app:0},i=[];function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(a,e,function(n){return t[n]}.bind(null,e));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/cnode-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"034f":function(t,n,a){"use strict";var e=a("64a9"),s=a.n(e);s.a},"0930":function(t,n,a){},"1b3c":function(t,n,a){},"2d09":function(t,n,a){"use strict";var e=a("e2ff"),s=a.n(e);s.a},"3ba8":function(t,n,a){},"3e52":function(t,n,a){"use strict";var e=a("3ba8"),s=a.n(e);s.a},"4ce8":function(t,n,a){"use strict";var e=a("1b3c"),s=a.n(e);s.a},"56d7":function(t,n,a){"use strict";a.r(n);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"main"},[a("router-view",{attrs:{name:"slidebar"}}),a("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:{name:"root"}}},[e("img",{attrs:{src:a("d686"),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("首页")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("新手入门")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("API")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("关于")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("注册")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("登录")])])])}],c={name:"Header"},u=c,l=(a("4ce8"),a("2877")),p=Object(l["a"])(u,r,o,!1,null,"5de0e19b",null),f=p.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"postList"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("cf1c"),alt:""}})]):e("div",{staticClass:"posts"},[e("ul",[t._m(0),t._l(t.posts,function(n){return e("li",{key:n.id},[e("img",{attrs:{src:n.author.avatar_url,alt:""}}),e("span",[e("span",{staticClass:"reply_count"},[t._v("\n                        "+t._s(n.reply_count)+"/"+t._s(n.visit_count)+"\n                    ")])]),e("span",{class:[{put_good:1==n.good,put_top:1==n.top,"topiclist-tab":1!=n.good&&1!=n.top}]},[e("span",[t._v("\n                        "+t._s(t._f("tabFormatter")(n))+"\n                    ")])]),e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[e("span",{staticClass:"titleFont"},[t._v("\n                      "+t._s(n.title)+"\n                  ")])]),e("span",{staticClass:"last_reply"},[t._v("\n                    "+t._s(t._f("formatDate")(n.last_reply_at))+"\n                ")])],1)}),e("li",[e("pagination",{on:{handleList:t.renderList}})],1)],2)])])},_=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("li",[a("div",{staticClass:"toobar"},[a("span",[t._v("全部")]),a("span",[t._v("精华")]),a("span",[t._v("分享")]),a("span",[t._v("问答")]),a("span",[t._v("招聘")]),a("span",[t._v("客户端测试")])])])}],v=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"pagination"},[a("button",{on:{click:t.changeBtn}},[t._v("首页")]),a("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.judge?a("button",{staticClass:"pagebtn"},[t._v("...")]):t._e(),t._l(t.pagebtns,function(n){return a("button",{key:n.id,class:[{currentPage:n==t.currentPage},"pagebtn"],on:{click:function(a){return t.changeBtn(n)}}},[t._v("\n        "+t._s(n)+"\n    ")])}),a("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},m=[],g=a("debc"),h=a.n(g),b={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"..."],currentPage:1,judge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)this.currentPage=t,this.judge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":h()("button.currentPage").prev().click();break;case"下一页":h()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"..."],this.changeBtn(1);break;default:break}}}},C=b,y=(a("669c"),Object(l["a"])(C,v,m,!1,null,"1a1295ad",null)),k=y.exports,L={name:"PostList",data:function(){return{isLoading:!1,posts:[],postpage:1}},components:{pagination:k},methods:{getData:function(){var t=this;this.axios.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then(function(n){t.isLoading=!1,t.posts=n.data.data}).catch(function(t){console.log(t)})},renderList:function(t){this.postpage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},j=L,x=(a("3e52"),Object(l["a"])(j,d,_,!1,null,"44f0e35a",null)),D=x.exports,P={name:"App",components:{Header:f,PostList:D}},w=P,O=(a("034f"),Object(l["a"])(w,s,i,!1,null,null,null)),$=O.exports,I=a("8c4f"),M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"article"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("cf1c"),alt:""}})]):e("div",[e("div",{staticClass:"topic_header"},[e("div",{staticClass:"topic_title"},[t._v("\n                "+t._s(t.post.title)+"\n                "),e("ul",[e("li",[t._v("\n                        发布于 "+t._s(t._f("formatDate")(t.post.create_at))+"\n                    ")]),e("li",[t._v("\n                        作者 "+t._s(t.post.author.loginname)+"\n                    ")]),e("li",[t._v("\n                        "+t._s(t.post.visit_count)+" 次浏览\n                    ")]),e("li",[t._v("\n                        来自 "+t._s(t._f("tabFormatter")(t.post))+"\n                    ")])]),e("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})])]),e("div",{attrs:{id:"reply"}},[e("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,function(n,a){return e("div",{key:n.id},[e("div",{staticClass:"singleReply"},[e("div",{staticClass:"replyUp"},[e("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[e("img",{attrs:{src:n.author.avatar_url,alt:""}})]),e("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[e("span",[t._v(t._s(n.author.loginname))])]),e("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[e("span",{staticClass:"spanColor"},[t._v(t._s(a+1)+"楼")]),e("span",{staticClass:"spanColor addSpot"},[t._v(t._s(t._f("formatDate")(t.post.last_reply_at)))])])],1),e("p",{domProps:{innerHTML:t._s(n.content)}})])])})],2)])])},E=[],S={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.axios.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id).then(function(n){1==n.data.success&&(t.isLoading=!1,t.post=n.data.data)}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(t,n){this.getArticleData()}}},T=S,B=(a("7703"),Object(l["a"])(T,M,E,!1,null,null,null)),A=B.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"UserInfo"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("cf1c"),alt:""}})]):e("div",{staticClass:"userInformation"},[e("div",{staticClass:"userHeader"},[e("p",[e("router-link",{attrs:{to:{name:"root"}}},[t._v("\n                    主页 /\n                ")])],1)]),e("section",[e("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),e("span",[t._v(t._s(t.userinfo.loginname))]),e("p",[t._v(t._s(t.userinfo.score)+" 积分")]),e("p",{staticClass:"time"},[t._v("注册时间"+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),e("div",{staticClass:"topics"},[e("p",[t._v("最近创建的话题")]),e("ul",t._l(t.userinfo.recent_topics,function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[e("img",{attrs:{src:n.author.avatar_url,alt:""}}),t._v("\n\n                            "+t._s(n.title)+"\n\n                                "),e("span",{staticClass:"lastReply"},[t._v(t._s(t._f("formatDate")(n.last_reply_at)))])])],1)}),0)]),e("div",{staticClass:"replies"},[e("p",[t._v("最近参与的话题")]),e("ul",t._l(t.userinfo.recent_replies,function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[e("img",{attrs:{src:n.author.avatar_url,alt:""}}),t._v("\n\n                            "+t._s(n.title)+"\n\n                            "),e("span",{staticClass:"lastReply"},[t._v(t._s(t._f("formatDate")(n.last_reply_at)))])])],1)}),0)])])])},F=[],R=(a("7f7f"),{name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.axios.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).then(function(n){t.isLoading=!1,t.userinfo=n.data.data}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getData()}}),U=R,J=(a("2d09"),Object(l["a"])(U,H,F,!1,null,"f93c5332",null)),q=J.exports,z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"authorinfo"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("cf1c")}})]):e("div",[e("div",{staticClass:"authorsummary"},[e("div",{staticClass:"topbar"},[t._v("个人信息")]),e("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[e("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})]),e("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[t._v("\n                                "+t._s(t.userinfo.loginname)+"\n                            ")]),e("div",{staticClass:"score"},[t._v("积分: "+t._s(t.userinfo.score))])],1),e("div",{staticClass:"recent_topics"},[e("div",{staticClass:"topbar"},[t._v("作者其它话题")]),e("ul",t._l(t.topiclimit,function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[t._v("\n                    "+t._s(n.title)+"\n                ")])],1)}),0)])])])},G=[],K={name:"SlideBar",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.axios.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).then(function(n){t.isLoading=!1,t.userinfo=n.data.data}).catch(function(t){console.log(t)})}},computed:{topiclimit:function(){if(this.userinfo.recent_topics)return this.userinfo.recent_topics.slice(0,5)}},beforeMount:function(){this.isLoading=!0,this.getData()}},N=K,Q=(a("9440"),Object(l["a"])(N,z,G,!1,null,"71381cb6",null)),V=Q.exports;e["a"].use(I["a"]);var W=new I["a"]({routes:[{name:"root",path:"/",components:{main:D}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:A,slidebar:V}},{name:"user_info",path:"/userinfo/:name",components:{main:q}}]}),X=a("2f62");e["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{}}),Z=a("2427"),tt=a.n(Z);e["a"].prototype.axios=tt.a,e["a"].config.productionTip=!1,new e["a"]({router:W,store:Y,render:function(t){return t($)}}).$mount("#app"),e["a"].filter("formatDate",function(t){if(!t)return"";var n=new Date(t),a=(new Date).getTime()-n.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),e["a"].filter("tabFormatter",function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"})},5780:function(t,n,a){},"64a9":function(t,n,a){},"669c":function(t,n,a){"use strict";var e=a("a880"),s=a.n(e);s.a},7703:function(t,n,a){"use strict";var e=a("5780"),s=a.n(e);s.a},9440:function(t,n,a){"use strict";var e=a("0930"),s=a.n(e);s.a},a880:function(t,n,a){},cf1c:function(t,n,a){t.exports=a.p+"img/loading.078fcd09.gif"},d686:function(t,n,a){t.exports=a.p+"img/cnodejs_light.86f6a7c2.svg"},e2ff:function(t,n,a){}});
//# sourceMappingURL=app.a7f32981.js.map