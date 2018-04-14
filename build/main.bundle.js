!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Game=t():e.Game=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([,,,function(e,t){!function(e){"use strict";if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=function(e){return e&&DataView.prototype.isPrototypeOf(e)},n=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};c.prototype.append=function(e,t){e=a(e),t=u(t);var r=this.map[e];this.map[e]=r?r+","+t:t},c.prototype.delete=function(e){delete this.map[a(e)]},c.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},c.prototype.set=function(e,t){this.map[a(e)]=u(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),l(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),l(e)},t.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var s=[301,302,303,307,308];v.redirect=function(e,t){if(-1===s.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=c,e.Request=b,e.Response=v,e.fetch=function(e,r){return new Promise(function(o,n){var i=new b(e,r),s=new XMLHttpRequest;s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new c,e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}}),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;o(new v(n,r))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&t.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function y(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function d(e){var t=new FileReader,r=y(t);return t.readAsArrayBuffer(e),r}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&o(e))this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!n(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=h(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e,t,r,o=f(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=y(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(e,t){var r,o,n=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),i.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}}),t}function v(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(3);var n="img/Symbol_",i=".png",s="img/Symbol_0.png",a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.serverValue=[],this._setImage()}return o(e,[{key:"play",value:function(){var e=this;this.serverValue=[],this._prePlayMethods(),this._requestServer().then(function(t){e.serverValue=t[0].values,e._setImage(),e._setTitle(t[2].result),t[1].bonus&&e._showBonus(),e._setPoints(t[2].result),document.querySelector("#slotSelected").style.display="block",document.querySelector("#slotRotation").style.display="none",document.querySelector("#playButton").style.opacity="1",document.querySelector("#playMsg").style.display="block"})}},{key:"_prePlayMethods",value:function(){document.querySelector("#gameInfo").className="",document.querySelector("#slotSelected").style.display="none",document.querySelector("#slotRotation").style.display="block",document.querySelector("#playButton").style.pointerEvents="none",document.querySelector("#bonusButton").style.pointerEvents="none",document.querySelector("#playButton").style.opacity="0.5",document.querySelector("#playMsg").style.display="none"}},{key:"_setTitle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Loading";document.querySelector("#gameInfo").innerHTML=e}},{key:"_setImage",value:function(){for(var e=document.querySelectorAll(".game-image"),t=0;t<e.length;t++)e[t].src=isNaN(this.serverValue[t])?s:""+n+this.serverValue[t]+i}},{key:"_showBonus",value:function(){document.querySelector("#bonusButton").style.display="block"}},{key:"_setPoints",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Win.",t=0;"Big Win!!!"===e?(t=100,document.querySelector("#gameInfo").className="blink-image"):"Small Win!"===e&&(t=10);var r=parseInt(document.querySelector("#points").innerHTML),o=r+t;this._updatePointCounter(r,o,this)}},{key:"_updatePointCounter",value:function(e,t,r){setTimeout(function(){document.querySelector("#points").innerHTML=e,e<t?(e++,r._updatePointCounter(e,t,r)):(document.querySelector("#playButton").style.pointerEvents="auto",document.querySelector("#bonusButton").style.pointerEvents="auto")},30)}},{key:"_requestServer",value:function(){var e=this;return new Promise(function(t,r){fetch("http://localhost:1337/casino",{method:"get"}).then(function(e){setTimeout(function(){t(e.json())},1e3)}).catch(function(){e._setTitle("Server Down!! Restart Server!.")})})}}]),e}(),u=new a,l=document.querySelector("#playButton");l&&l.addEventListener("click",function(){u._setTitle("Spinning.."),u.play()});var c=document.querySelector("#bonusButton");c&&c.addEventListener("click",function(){u.play(),document.querySelector("#bonusButton").style.display="none"}),t.default=a}])});