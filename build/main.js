webpackJsonp([16],{137:function(t,e,a){"use strict";a.d(e,"a",function(){return o});a(3);var n=a(106),o=function(){function t(t){this.http=t,this.url="https://example.com/api/v1"}return t.prototype.get=function(t,e,a){if(a||(a={params:new n.g}),e){a.params=new n.g;for(var o in e)a.params=a.params.set(o,e[o])}return this.http.get(this.url+"/"+t,a)},t.prototype.post=function(t,e,a){return this.http.post(this.url+"/"+t,e,a)},t.prototype.put=function(t,e,a){return this.http.put(this.url+"/"+t,e,a)},t.prototype.delete=function(t,e){return this.http.delete(this.url+"/"+t,e)},t.prototype.patch=function(t,e,a){return this.http.patch(this.url+"/"+t,e,a)},t}()},143:function(t,e,a){"use strict";a(137);var n=a(96);a.d(e,"a",function(){return n.a});a(156)},156:function(t,e,a){"use strict";a.d(e,"a",function(){return o});a(3);var n=a(287),o=(a.n(n),a(137),function(){function t(t){this.api=t}return t.prototype.login=function(t){var e=this,a=this.api.post("login",t).share();return a.subscribe(function(t){"success"==t.status&&e._loggedIn(t)},function(t){console.error("ERROR",t)}),a},t.prototype.signup=function(t){var e=this,a=this.api.post("signup",t).share();return a.subscribe(function(t){"success"==t.status&&e._loggedIn(t)},function(t){console.error("ERROR",t)}),a},t.prototype.logout=function(){this._user=null},t.prototype._loggedIn=function(t){this._user=t.user},t}())},175:function(t,e){function a(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id=175},200:function(t,e,a){function n(t){var e=o[t];return e?a.e(e[1]).then(function(){return a(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/cards/cards.module.ngfactory":[289,12],"../pages/chat/chat.module.ngfactory":[290,5],"../pages/content/content.module.ngfactory":[291,11],"../pages/fibo/fibo.module.ngfactory":[292,4],"../pages/group-by/group-by.module.ngfactory":[293,10],"../pages/item-create/item-create.module.ngfactory":[294,3],"../pages/item-detail/item-detail.module.ngfactory":[295,9],"../pages/list-master/list-master.module.ngfactory":[296,8],"../pages/login/login.module.ngfactory":[297,2],"../pages/menu/menu.module.ngfactory":[298,15],"../pages/search/search.module.ngfactory":[299,7],"../pages/settings/settings.module.ngfactory":[300,1],"../pages/signup/signup.module.ngfactory":[301,0],"../pages/tabs/tabs.module.ngfactory":[302,14],"../pages/tutorial/tutorial.module.ngfactory":[303,6],"../pages/welcome/welcome.module.ngfactory":[304,13]};n.keys=function(){return Object.keys(o)},n.id=200,t.exports=n},228:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o}),a.d(e,"c",function(){return l}),a.d(e,"d",function(){return r}),a.d(e,"e",function(){return i});var n="FiboPage",o="TabsPage",l="ListMasterPage",r="SearchPage",i="SettingsPage"},231:function(t,e,a){"use strict";function n(t){return new h.a(t,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function o(t){return i._21(0,[(t()(),i.Z(0,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,e,a){var n=!0,o=t.component;if("click"===e){n=!1!==i._11(t,6).close()&&n}if("click"===e){n=!1!==o.openPage(t.context.$implicit)&&n}return n},S.b,S.a)),i.Y(1,1097728,null,3,B.a,[H.a,Y.a,i.j,i.z,[2,I.a]],null,null),i._17(335544320,4,{contentLabel:0}),i._17(603979776,5,{_buttons:1}),i._17(603979776,6,{_icons:1}),i.Y(5,16384,null,0,O.a,[],null,null),i.Y(6,16384,null,0,L.a,[z.a],{menuClose:[0,"menuClose"]},null),(t()(),i._19(7,2,["\n          ","\n        "]))],function(t,e){t(e,6,0,"")},function(t,e){t(e,7,0,e.context.$implicit.title)})}function l(t){return i._21(0,[i._17(402653184,1,{nav:0}),(t()(),i.Z(1,0,null,null,28,"ion-menu",[["role","navigation"]],null,null,null,D.b,D.a)),i._15(6144,null,G.a,null,[R.a]),i.Y(3,245760,null,2,R.a,[z.a,i.j,Y.a,K.a,i.z,Z.a,x.l,A.a,X.a],{content:[0,"content"]},null),i._17(335544320,2,{menuContent:0}),i._17(335544320,3,{menuNav:0}),(t()(),i._19(-1,0,["\n    "])),(t()(),i.Z(7,0,null,0,10,"ion-header",[],null,null,null,null,null)),i.Y(8,16384,null,0,q.a,[Y.a,i.j,i.z,[2,W.a]],null,null),(t()(),i._19(-1,null,["\n      "])),(t()(),i.Z(10,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,U.b,U.a)),i.Y(11,49152,null,0,V.a,[Y.a,i.j,i.z],null,null),(t()(),i._19(-1,3,["\n        "])),(t()(),i.Z(13,0,null,3,2,"ion-title",[],null,null,null,J.b,J.a)),i.Y(14,49152,null,0,$.a,[Y.a,i.j,i.z,[2,V.a],[2,Q.a]],null,null),(t()(),i._19(-1,0,["Pages"])),(t()(),i._19(-1,3,["\n      "])),(t()(),i._19(-1,null,["\n    "])),(t()(),i._19(-1,0,["\n\n    "])),(t()(),i.Z(19,0,null,0,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,tt.b,tt.a)),i.Y(20,4374528,[[2,4]],0,et.a,[Y.a,K.a,A.a,i.j,i.z,X.a,Z.a,i.u,[2,W.a],[2,at.a]],null,null),(t()(),i._19(-1,1,["\n      "])),(t()(),i.Z(22,0,null,1,5,"ion-list",[],null,null,null,null,null)),i.Y(23,16384,null,0,nt.a,[Y.a,i.j,i.z,K.a,x.l,A.a],null,null),(t()(),i._19(-1,null,["\n        "])),(t()(),i.U(16777216,null,null,1,null,o)),i.Y(26,802816,null,0,ot.h,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(t()(),i._19(-1,null,["\n      "])),(t()(),i._19(-1,1,["\n    "])),(t()(),i._19(-1,0,["\n\n  "])),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(31,0,null,null,2,"ion-nav",[],null,null,null,lt.b,lt.a)),i._15(6144,null,G.a,null,[rt.a]),i.Y(33,4374528,[[1,4],["content",4]],0,rt.a,[[2,W.a],[2,at.a],X.a,Y.a,K.a,i.j,i.u,i.z,i.i,x.l,it.a,[2,ut.a],A.a,i.k],{root:[0,"root"]},null)],function(t,e){var a=e.component;t(e,3,0,i._11(e,33));t(e,26,0,a.pages);t(e,33,0,a.rootPage)},function(t,e){t(e,10,0,i._11(e,11)._sbPadding);t(e,19,0,i._11(e,20).statusbarPadding,i._11(e,20)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var r=a(36),i=a(0),u=(a(3),a(106)),s=a(147),c=a(66),g=a(67),p=a(110),f=a(83),d=a(281),m=(a(138),a(88)),h=a(143),_=a(228),y=function(){function t(t,e,a,n,o,l){var r=this;this.translate=t,this.config=n,this.statusBar=o,this.splashScreen=l,this.rootPage=_.a,this.pages=[{title:"Fibonacci",component:"FiboPage"},{title:"Group By",component:"GroupByPage"},{title:"Chat Client",component:"ChatPage"}],e.ready().then(function(){r.statusBar.styleDefault(),r.splashScreen.hide()}),this.initTranslate()}return t.prototype.initTranslate=function(){var t=this;this.translate.setDefaultLang("en");var e=this.translate.getBrowserLang();if(e)if("zh"===e){var a=this.translate.getBrowserCultureLang();a.match(/-CN|CHS|Hans/i)?this.translate.use("zh-cmn-Hans"):a.match(/-TW|CHT|Hant/i)&&this.translate.use("zh-cmn-Hant")}else this.translate.use(this.translate.getBrowserLang());else this.translate.use("en");this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(e){t.config.set("ios","backButtonText",e.BACK_BUTTON_TEXT)})},t.prototype.openPage=function(t){this.nav.setRoot(t.component)},t}(),b=function(t){return new d.a(t,"./assets/i18n/",".json")},P=function(){return function(){}}(),C=a(50),v=a(217),w=a(218),T=a(219),k=a(220),F=a(221),M=a(222),j=a(223),N=a(224),E=a(225),S=a(141),B=a(16),H=a(14),Y=a(1),I=a(40),O=a(60),L=a(91),z=a(23),D=a(229),G=a(29),R=a(62),K=a(4),Z=a(25),x=a(6),A=a(10),X=a(9),q=a(85),W=a(5),U=a(288),V=a(35),J=a(227),$=a(59),Q=a(34),tt=a(226),et=a(22),at=a(21),nt=a(45),ot=a(12),lt=a(230),rt=a(47),it=a(28),ut=a(15),st=a(27),ct=a(96),gt=i.X({encapsulation:2,styles:[],data:{}}),pt=i.V("ng-component",y,function(t){return i._21(0,[(t()(),i.Z(0,0,null,null,1,"ng-component",[],null,null,null,l,gt)),i.Y(1,49152,null,0,y,[st.a,K.a,ct.a,Y.a,g.a,c.a],null,null)],null,null)},{},{},[]),ft=a(124),dt=a(18),mt=a(55),ht=a(56),_t=a(58),yt=a(57),bt=a(84),Pt=a(115),Ct=a(117),vt=a(123),wt=a(30),Tt=a(121),kt=a(139),Ft=a(52),Mt=a(39),jt=a(92),Nt=a(73),Et=a(129),St=a(126),Bt=a(89),Ht=a(137),Yt=a(156),It=a(216),Ot=a(125),Lt=a(122),zt=a(127),Dt=i.W(P,[C.b],function(t){return i._7([i._8(512,i.i,i.S,[[8,[v.a,w.a,T.a,k.a,F.a,M.a,j.a,N.a,E.a,pt]],[3,i.i],i.s]),i._8(5120,i.r,i._16,[[3,i.r]]),i._8(4608,ot.k,ot.j,[i.r,[2,ot.s]]),i._8(5120,i.b,i._1,[]),i._8(5120,i.p,i._9,[]),i._8(5120,i.q,i._12,[]),i._8(4608,r.c,r.q,[ot.c]),i._8(6144,i.D,null,[r.c]),i._8(4608,r.f,ft.a,[]),i._8(5120,r.d,function(t,e,a,n,o){return[new r.k(t,e),new r.o(a),new r.n(n,o)]},[ot.c,i.u,ot.c,ot.c,r.f]),i._8(4608,r.e,r.e,[r.d,i.u]),i._8(135680,r.m,r.m,[ot.c]),i._8(4608,r.l,r.l,[r.e,r.m]),i._8(6144,i.B,null,[r.l]),i._8(6144,r.p,null,[r.m]),i._8(4608,i.G,i.G,[i.u]),i._8(4608,r.h,r.h,[ot.c]),i._8(4608,r.i,r.i,[ot.c]),i._8(4608,u.i,u.o,[ot.c,i.w,u.m]),i._8(4608,u.p,u.p,[u.i,u.n]),i._8(5120,u.a,function(t){return[t]},[u.p]),i._8(4608,u.l,u.l,[]),i._8(6144,u.j,null,[u.l]),i._8(4608,u.h,u.h,[u.j]),i._8(6144,u.b,null,[u.h]),i._8(4608,u.f,u.k,[u.b,i.o]),i._8(4608,u.c,u.c,[u.f]),i._8(4608,dt.r,dt.r,[]),i._8(4608,dt.d,dt.d,[]),i._8(5120,mt.b,b,[u.c]),i._8(4608,ht.a,ht.b,[]),i._8(4608,_t.b,_t.a,[]),i._8(4608,yt.b,yt.a,[]),i._8(4608,bt.a,bt.a,[]),i._8(4608,st.a,st.a,[bt.a,mt.b,ht.a,_t.b,yt.b,st.b,st.c]),i._8(4608,Pt.a,Pt.a,[X.a,Y.a]),i._8(4608,Ct.a,Ct.a,[X.a,Y.a]),i._8(4608,vt.a,vt.a,[]),i._8(4608,H.a,H.a,[]),i._8(4608,wt.a,wt.a,[K.a]),i._8(4608,Z.a,Z.a,[Y.a,K.a,i.u,A.a]),i._8(4608,Tt.a,Tt.a,[X.a,Y.a]),i._8(5120,ot.f,kt.c,[ot.q,[2,ot.a],Y.a]),i._8(4608,ot.e,ot.e,[ot.f]),i._8(5120,Ft.b,Ft.d,[X.a,Ft.a]),i._8(5120,ut.a,ut.b,[X.a,Ft.b,ot.e,Mt.b,i.i]),i._8(4608,jt.a,jt.a,[X.a,Y.a,ut.a]),i._8(4608,Nt.a,Nt.a,[X.a,Y.a]),i._8(4608,Et.a,Et.a,[X.a,Y.a,ut.a]),i._8(4608,St.a,St.a,[Y.a,K.a,A.a,X.a,x.l]),i._8(4608,Bt.a,Bt.a,[X.a,Y.a]),i._8(4608,it.a,it.a,[K.a,Y.a]),i._8(5120,p.b,p.d,[p.c]),i._8(4608,Ht.a,Ht.a,[u.c]),i._8(4608,m.a,m.a,[]),i._8(4608,Yt.a,Yt.a,[Ht.a]),i._8(4608,s.a,s.a,[]),i._8(4608,c.a,c.a,[]),i._8(4608,g.a,g.a,[]),i._8(5120,ct.a,n,[p.b]),i._8(512,ot.b,ot.b,[]),i._8(512,i.k,It.a,[]),i._8(256,Y.b,{locationStrategy:"path"},[]),i._8(1024,Ot.a,Ot.b,[]),i._8(1024,K.a,K.b,[r.b,Ot.a,i.u]),i._8(1024,Y.a,Y.c,[Y.b,K.a]),i._8(512,A.a,A.a,[K.a]),i._8(512,z.a,z.a,[]),i._8(512,X.a,X.a,[Y.a,K.a,[2,z.a]]),i._8(512,x.l,x.l,[X.a]),i._8(256,Ft.a,{links:[{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/chat/chat.module.ngfactory#ChatPageModuleNgFactory",name:"ChatPage",segment:"chat",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/fibo/fibo.module.ngfactory#FiboPageModuleNgFactory",name:"FiboPage",segment:"fibo",priority:"low",defaultHistory:[]},{loadChildren:"../pages/group-by/group-by.module.ngfactory#GroupByPageModuleNgFactory",name:"GroupByPage",segment:"group-by",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-create/item-create.module.ngfactory#ItemCreatePageModuleNgFactory",name:"ItemCreatePage",segment:"item-create",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-detail/item-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"ItemDetailPage",segment:"item-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-master/list-master.module.ngfactory#ListMasterPageModuleNgFactory",name:"ListMasterPage",segment:"list-master",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),i._8(512,i.h,i.h,[]),i._8(512,Lt.a,Lt.a,[i.h]),i._8(1024,Mt.b,Mt.c,[Lt.a,i.o]),i._8(1024,i.c,function(t,e,a,n,o,l,i,u,s,c,g,p,f){return[r.s(t),zt.a(e),vt.b(a,n),St.b(o,l,i,u,s),Mt.d(c,g,p,f)]},[[2,i.t],Y.a,K.a,A.a,Y.a,K.a,A.a,X.a,x.l,Y.a,Ft.a,Mt.b,i.u]),i._8(512,i.d,i.d,[[2,i.c]]),i._8(131584,i.f,i.f,[i.u,i.T,i.o,i.k,i.i,i.d]),i._8(512,i.e,i.e,[i.f]),i._8(512,r.a,r.a,[[3,r.a]]),i._8(512,u.e,u.e,[]),i._8(512,u.d,u.d,[]),i._8(512,f.a,f.a,[]),i._8(512,dt.p,dt.p,[]),i._8(512,dt.g,dt.g,[]),i._8(512,dt.n,dt.n,[]),i._8(512,kt.a,kt.a,[]),i._8(512,p.a,p.a,[]),i._8(512,P,P,[]),i._8(256,u.m,"XSRF-TOKEN",[]),i._8(256,u.n,"X-XSRF-TOKEN",[]),i._8(256,st.c,void 0,[]),i._8(256,st.b,void 0,[]),i._8(256,C.a,y,[]),i._8(256,ot.a,"/",[]),i._8(256,p.c,null,[])])});Object(i.M)(),Object(r.j)().bootstrapModuleFactory(Dt)},88:function(t,e,a){"use strict";a(3),a(0);var n=function(){return function(t){for(var e in t)this[e]=t[e]}}();a.d(e,"a",function(){return o});var o=function(){function t(){this.items=[],this.defaultItem={name:"Burt Bear",profilePic:"assets/img/speakers/bear.jpg",about:"Burt is a Bear."};for(var t=0,e=[{name:"Burt Bear",profilePic:"assets/img/speakers/bear.jpg",about:"Burt is a Bear."},{name:"Charlie Cheetah",profilePic:"assets/img/speakers/cheetah.jpg",about:"Charlie is a Cheetah."},{name:"Donald Duck",profilePic:"assets/img/speakers/duck.jpg",about:"Donald is a Duck."},{name:"Eva Eagle",profilePic:"assets/img/speakers/eagle.jpg",about:"Eva is an Eagle."},{name:"Ellie Elephant",profilePic:"assets/img/speakers/elephant.jpg",about:"Ellie is an Elephant."},{name:"Molly Mouse",profilePic:"assets/img/speakers/mouse.jpg",about:"Molly is a Mouse."},{name:"Paul Puppy",profilePic:"assets/img/speakers/puppy.jpg",about:"Paul is a Puppy."}];t<e.length;t++){this.items.push(new n(e[t]))}}return t.prototype.query=function(t){return t?this.items.filter(function(e){for(var a in t){var n=e[a];if("string"==typeof n&&n.toLowerCase().indexOf(t[a].toLowerCase())>=0)return e;if(n==t[a])return e}return null}):this.items},t.prototype.add=function(t){this.items.push(t)},t.prototype.delete=function(t){this.items.splice(this.items.indexOf(t),1)},t}()},96:function(t,e,a){"use strict";a.d(e,"a",function(){return n});a(3);var n=function(){function t(t,e){this.storage=t,this.SETTINGS_KEY="_settings",this._defaults=e}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(t.settings=e,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(e){t.settings=e})})},t.prototype._mergeDefaults=function(t){for(var e in t)e in this.settings||(this.settings[e]=t[e]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var e in t)this.settings[e]=t[e];return this.save()},t.prototype.setValue=function(t,e){return this.settings[t]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()}},[231]);