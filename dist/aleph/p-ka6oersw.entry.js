import{r as t,f as s,c as i,h as a,H as o,d as e}from"./p-109d28fd.js";import"./p-1644482e.js";import{g as r,c as n}from"./p-955ba954.js";import{e as c,f as h,h as l,i as p,j as d,s as u}from"./p-0452989e.js";import{c as b}from"./p-d551500b.js";import{s as m}from"./p-fbd2c40b.js";const f=(t,s)=>{const i=b(),a=b(),o=t.host||t,e=t.querySelector(".toast-wrapper");switch(a.addElement(e),s){case"top":a.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(o.clientHeight/2-e.clientHeight/2);e.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return i.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(a)},v=(t,s)=>{const i=b(),a=b(),o=t.host||t,e=t.querySelector(".toast-wrapper");switch(a.addElement(e),s){case"top":a.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return i.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)},x=(t,s)=>{const i=b(),a=b(),o=t.host||t,e=t.querySelector(".toast-wrapper");switch(a.addElement(e),s){case"top":e.style.top="calc(8px + var(--ion-safe-area-top, 0px))",a.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(o.clientHeight/2-e.clientHeight/2);e.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:e.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",a.fromTo("opacity",.01,1)}return i.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(a)},y=t=>{const s=b(),i=b(),a=t.host||t,o=t.querySelector(".toast-wrapper");return i.addElement(o).fromTo("opacity",.99,0),s.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},T=class{constructor(a){t(this,a),this.presented=!1,this.mode=s(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,c(this.el),this.didPresent=i(this,"ionToastDidPresent",7),this.willPresent=i(this,"ionToastWillPresent",7),this.willDismiss=i(this,"ionToastWillDismiss",7),this.didDismiss=i(this,"ionToastDidDismiss",7)}async present(){await h(this,"toastEnter",f,x,this.position),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration))}dismiss(t,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),l(this,t,s,"toastLeave",v,y,this.position)}onDidDismiss(){return p(this.el,"ionToastDidDismiss")}onWillDismiss(){return p(this.el,"ionToastWillDismiss")}getButtons(){const t=this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[];return this.showCloseButton&&t.push({text:this.closeButtonText||"Close",handler:()=>this.dismiss(void 0,"cancel")}),t}async buttonClick(t){const s=t.role;return d(s)?this.dismiss(void 0,s):await this.callButtonHandler(t)?this.dismiss(void 0,t.role):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await u(t.handler))return!1}catch(t){console.error(t)}return!0}renderButtons(t,i){if(0===t.length)return;const o=s(this);return a("div",{class:{"toast-button-group":!0,[`toast-button-group-${i}`]:!0}},t.map(t=>a("button",{type:"button",class:j(t),tabIndex:0,onClick:()=>this.buttonClick(t)},a("div",{class:"toast-button-inner"},t.icon&&a("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&a("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),i=t.filter(t=>"start"===t.side),e=t.filter(t=>"start"!==t.side),c=s(this),h={"toast-wrapper":!0,[`toast-${this.position}`]:!0};return a(o,{style:{zIndex:`${6e4+this.overlayIndex}`},class:Object.assign(Object.assign(Object.assign({[c]:!0},n(this.color)),r(this.cssClass)),{"toast-translucent":this.translucent})},a("div",{class:h},a("div",{class:"toast-container"},this.renderButtons(i,"start"),a("div",{class:"toast-content"},void 0!==this.header&&a("div",{class:"toast-header"},this.header),void 0!==this.message&&a("div",{class:"toast-message",innerHTML:m(this.message)})),this.renderButtons(e,"end"))))}get el(){return e(this)}static get style(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}\@media (any-hover:hover){.toast-button:hover{opacity:.6}}"}},j=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},r(t.cssClass));export{T as ion_toast};