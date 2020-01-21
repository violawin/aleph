var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,r){function o(t){try{u(n.next(t))}catch(t){r(t)}}function a(t){try{u(n["throw"](t))}catch(t){r(t)}}function u(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(o,a)}u((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,s&&(r=o[0]&2?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;if(s=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;s=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t];s=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-8a4c8ac0.system.js","./p-d09772b4.system.js","./p-761e97da.system.js","./p-eaeca77c.system.js","./p-26207f40.system.js","./p-41f0ce37.system.js"],function(t,e){"use strict";var i,n,s,r,o,a,u,h,c,l,d,p,f,m;return{setters:[function(t){i=t.r;n=t.f;s=t.c;r=t.i;o=t.h;a=t.H;u=t.d},function(t){h=t.i;c=t.b;l=t.c},function(t){d=t.g;p=t.P},function(t){f=t.GESTURE_CONTROLLER},function(){},function(t){m=t.m}],execute:function(){var v=t("ion_menu",function(){function t(t){i(this,t);this.lastOnEnd=0;this.blocker=f.createBlocker({disableScroll:true});this.mode=n(this);this.isAnimating=false;this._isOpen=false;this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50;this.ionWillOpen=s(this,"ionWillOpen",7);this.ionWillClose=s(this,"ionWillClose",7);this.ionDidOpen=s(this,"ionDidOpen",7);this.ionDidClose=s(this,"ionDidClose",7);this.ionMenuChange=s(this,"ionMenuChange",7)}t.prototype.typeChanged=function(t,e){var i=this.contentEl;if(i){if(e!==undefined){i.classList.remove("menu-content-"+e)}i.classList.add("menu-content-"+t);i.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=h(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,function(){var t,i,n,s;var o=this;return __generator(this,function(a){switch(a.label){case 0:if(this.type===undefined){this.type=r.get("menuType",this.mode==="ios"?"reveal":"overlay")}t=this.el;i=t.parentNode;if(this.contentId===undefined){console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n')}n=this.contentId!==undefined?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]");if(!n||!n.tagName){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}this.contentEl=n;n.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();m._register(this);s=this;return[4,e.import("./p-eaeca77c.system.js")];case 1:s.gesture=a.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return o.canStart(t)},onWillStart:function(){return o.onWillStart()},onStart:function(){return o.onStart()},onMove:function(t){return o.onMove(t)},onEnd:function(t){return o.onEnd(t)}});this.updateState();return[2]}})})};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen});this.updateState();return[2]})})};t.prototype.disconnectedCallback=function(){this.blocker.destroy();m._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return m._setOpen(this,t,e)};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:i.sent();return[4,this.startAnimation(t,e)];case 2:i.sent();this.afterAnimation(t);return[2,true]}})})};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,m._createAnimation(this.type,this)];case 1:e.animation=i.sent();if(!r.getBoolean("animated",true)){this.animation.duration(0)}this.animation.fill("both");return[2]}})})};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,function(){var i,n;return __generator(this,function(s){switch(s.label){case 0:i=!t;n=this.animation.direction(i?"reverse":"normal").easing(i?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)");if(!e)return[3,2];return[4,n.playAsync()];case 1:s.sent();return[3,3];case 2:n.playSync();s.label=3;case 3:return[2]}})})};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){if(!this.canSwipe()){return false}if(this._isOpen){return true}else if(m._getOpenSync()){return false}return y(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){c(false,"isAnimating has to be true");return}this.animation.direction(this._isOpen?"reverse":"normal").progressStart(true)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){c(false,"isAnimating has to be true");return}var e=b(t.deltaX,this._isOpen,this.isEndSide);var i=e/this.width;this.animation.progressStep(i)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){c(false,"isAnimating has to be true");return}var i=this._isOpen;var n=this.isEndSide;var s=b(t.deltaX,i,n);var r=this.width;var o=s/r;var a=t.velocityX;var u=r/2;var h=a>=0&&(a>.2||t.deltaX>u);var f=a<=0&&(a<-.2||t.deltaX<-u);var m=i?n?h:f:n?f:h;var v=!i&&m;if(i&&!m){v=true}this.lastOnEnd=t.timeStamp;var y=m?.001:-.001;var g=o<=0?.01:o;y+=d(new p(0,0),new p(.4,0),new p(.6,1),new p(1,1),l(0,g,1));this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return e.afterAnimation(v)},{oneTimeCallback:true}).progressEnd(m?1:0,y,300)};t.prototype.beforeAnimation=function(t){c(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(g);if(this.backdropEl){this.backdropEl.classList.add(_)}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){c(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(E)}this.ionDidOpen.emit()}else{this.el.classList.remove(g);if(this.contentEl){this.contentEl.classList.remove(E)}if(this.backdropEl){this.backdropEl.classList.remove(_)}if(this.animation){this.animation.stop()}this.ionDidClose.emit()}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.setDisabled(!t||!this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled){m._setActiveMenu(this)}c(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){c(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.direction("reverse");t.playSync();this.afterAnimation(false)};t.prototype.render=function(){var t;var e=this;var i=this,n=i.isEndSide,s=i.type,r=i.disabled,u=i.mode,h=i.isPaneVisible;return o(a,{role:"navigation",class:(t={},t[u]=true,t["menu-type-"+s]=true,t["menu-enabled"]=!r,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=h,t)},o("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},o("slot",null)),o("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false}))};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:true,configurable:true});return t}());var b=function(t,e,i){return Math.max(0,e!==i?-t:t)};var y=function(t,e,i,n){if(i){return e>=t.innerWidth-n}else{return e<=n}};var g="show-menu";var _="show-backdrop";var E="menu-content-open"}}});