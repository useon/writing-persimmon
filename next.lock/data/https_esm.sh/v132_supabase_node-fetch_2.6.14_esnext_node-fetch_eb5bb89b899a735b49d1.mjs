/* esm.sh - esbuild bundle(@supabase/node-fetch@2.6.14) esnext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var w=Object.create;var u=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var x=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),q=(t,e)=>{for(var o in e)u(t,o,{get:e[o],enumerable:!0})},l=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of g(e))!m.call(t,d)&&d!==o&&u(t,d,{get:()=>e[d],enumerable:!(i=R(e,d))||i.enumerable});return t},f=(t,e,o)=>(l(t,e,"default"),o&&l(o,e,"default")),c=(t,e,o)=>(o=t!=null?w(h(t)):{},l(e||!t||!t.__esModule?u(o,"default",{value:t,enumerable:!0}):o,t));var a=x((s,p)=>{"use strict";var y=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof __global$<"u")return __global$;throw new Error("unable to locate global object")},n=y();p.exports=s=n.fetch;n.fetch&&(s.default=n.fetch.bind(n));s.Headers=n.Headers;s.Request=n.Request;s.Response=n.Response});var r={};q(r,{FetchError:()=>F,Headers:()=>j,Request:()=>v,Response:()=>E,__esModule:()=>H,default:()=>M});var _=c(a());f(r,c(a()));var{__esModule:H,Headers:j,Request:v,Response:E,FetchError:F}=_,{default:b,...G}=_,M=b!==void 0?b:G;export{F as FetchError,j as Headers,v as Request,E as Response,H as __esModule,M as default};
//# sourceMappingURL=node-fetch.mjs.map