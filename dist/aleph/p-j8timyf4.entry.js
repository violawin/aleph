import{r as n,h as o,d as s,H as t}from"./p-109d28fd.js";import{n as e}from"./p-7601dc1b.js";const i=class{constructor(o){n(this,o),this.push=()=>e(this.el,"forward",this.component,this.componentProps)}componentDidLoad(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')}render(){return o(t,{onClick:this.push})}get el(){return s(this)}};export{i as ion_nav_push};