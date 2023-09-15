/* esm.sh - esbuild bundle(cross-fetch@3.1.8) esnext production */
var K=Object.create;var x=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var Z=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),ee=(o,s)=>{for(var n in s)x(o,n,{get:s[n],enumerable:!0})},O=(o,s,n,u)=>{if(s&&typeof s=="object"||typeof s=="function")for(let y of Q(s))!Y.call(o,y)&&y!==n&&x(o,y,{get:()=>s[y],enumerable:!(u=$(s,y))||u.enumerable});return o},b=(o,s,n)=>(O(o,s,"default"),n&&O(n,s,"default")),F=(o,s,n)=>(n=o!=null?K(W(o)):{},O(s||!o||!o.__esModule?x(n,"default",{value:o,enumerable:!0}):n,o));var R=Z((l,I)=>{var j=typeof self<"u"?self:l,E=function(){function o(){this.fetch=!1,this.DOMException=j.DOMException}return o.prototype=j,new o}();(function(o){var s=function(n){var u={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function y(e){return e&&DataView.prototype.isPrototypeOf(e)}if(u.arrayBuffer)var q=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],L=ArrayBuffer.isView||function(e){return e&&q.indexOf(Object.prototype.toString.call(e))>-1};function w(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function D(e){return typeof e!="string"&&(e=String(e)),e}function A(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return u.iterable&&(t[Symbol.iterator]=function(){return t}),t}function a(e){this.map={},e instanceof a?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}a.prototype.append=function(e,t){e=w(e),t=D(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},a.prototype.delete=function(e){delete this.map[w(e)]},a.prototype.get=function(e){return e=w(e),this.has(e)?this.map[e]:null},a.prototype.has=function(e){return this.map.hasOwnProperty(w(e))},a.prototype.set=function(e,t){this.map[w(e)]=D(t)},a.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},a.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),A(e)},a.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),A(e)},a.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),A(e)},u.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);function B(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function P(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function C(e){var t=new FileReader,r=P(t);return t.readAsArrayBuffer(e),r}function k(e){var t=new FileReader,r=P(t);return t.readAsText(e),r}function N(e){for(var t=new Uint8Array(e),r=new Array(t.length),h=0;h<t.length;h++)r[h]=String.fromCharCode(t[h]);return r.join("")}function U(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function S(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:u.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u.arrayBuffer&&u.blob&&y(e)?(this._bodyArrayBuffer=U(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||L(e))?this._bodyArrayBuffer=U(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var e=B(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?B(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(C)}),this.text=function(){var e=B(this);if(e)return e;if(this._bodyBlob)return k(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(N(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(G)}),this.json=function(){return this.text().then(JSON.parse)},this}var V=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function z(e){var t=e.toUpperCase();return V.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var r=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new a(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new a(t.headers)),this.method=z(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})};function G(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var h=r.split("="),f=h.shift().replace(/\+/g," "),i=h.join("=").replace(/\+/g," ");t.append(decodeURIComponent(f),decodeURIComponent(i))}}),t}function X(e){var t=new a,r=e.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(h){var f=h.split(":"),i=f.shift().trim();if(i){var _=f.join(":").trim();t.append(i,_)}}),t}S.call(p.prototype);function c(e,t){t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new a(t.headers),this.url=t.url||"",this._initBody(e)}S.call(c.prototype),c.prototype.clone=function(){return new c(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},c.error=function(){var e=new c(null,{status:0,statusText:""});return e.type="error",e};var J=[301,302,303,307,308];c.redirect=function(e,t){if(J.indexOf(t)===-1)throw new RangeError("Invalid status code");return new c(null,{status:t,headers:{location:e}})},n.DOMException=o.DOMException;try{new n.DOMException}catch{n.DOMException=function(t,r){this.message=t,this.name=r;var h=Error(t);this.stack=h.stack},n.DOMException.prototype=Object.create(Error.prototype),n.DOMException.prototype.constructor=n.DOMException}function g(e,t){return new Promise(function(r,h){var f=new p(e,t);if(f.signal&&f.signal.aborted)return h(new n.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function _(){i.abort()}i.onload=function(){var v={status:i.status,statusText:i.statusText,headers:X(i.getAllResponseHeaders()||"")};v.url="responseURL"in i?i.responseURL:v.headers.get("X-Request-URL");var T="response"in i?i.response:i.responseText;r(new c(T,v))},i.onerror=function(){h(new TypeError("Network request failed"))},i.ontimeout=function(){h(new TypeError("Network request failed"))},i.onabort=function(){h(new n.DOMException("Aborted","AbortError"))},i.open(f.method,f.url,!0),f.credentials==="include"?i.withCredentials=!0:f.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&u.blob&&(i.responseType="blob"),f.headers.forEach(function(v,T){i.setRequestHeader(T,v)}),f.signal&&(f.signal.addEventListener("abort",_),i.onreadystatechange=function(){i.readyState===4&&f.signal.removeEventListener("abort",_)}),i.send(typeof f._bodyInit>"u"?null:f._bodyInit)})}return g.polyfill=!0,o.fetch||(o.fetch=g,o.Headers=a,o.Request=p,o.Response=c),n.Headers=a,n.Request=p,n.Response=c,n.fetch=g,Object.defineProperty(n,"__esModule",{value:!0}),n}({})})(E);E.fetch.ponyfill=!0;delete E.fetch.polyfill;var m=E;l=m.fetch;l.default=m.fetch;l.fetch=m.fetch;l.Headers=m.Headers;l.Request=m.Request;l.Response=m.Response;I.exports=l});var d={};ee(d,{Headers:()=>re,Request:()=>oe,Response:()=>ie,default:()=>se,fetch:()=>te});var M=F(R());b(d,F(R()));var{fetch:te,Headers:re,Request:oe,Response:ie}=M,{default:H,...ne}=M,se=H!==void 0?H:ne;export{re as Headers,oe as Request,ie as Response,se as default,te as fetch};
//# sourceMappingURL=cross-fetch.mjs.map