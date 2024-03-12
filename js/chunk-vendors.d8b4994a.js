(self["webpackChunkeco_kirchner"]=self["webpackChunkeco_kirchner"]||[]).push([[504],{4046:function(t,e,n){"use strict";n.d(e,{Am:function(){return F},FA:function(){return x},Fy:function(){return w},I9:function(){return V},Im:function(){return L},Ku:function(){return K},T9:function(){return v},Tj:function(){return g},Uj:function(){return u},XA:function(){return y},ZQ:function(){return b},bD:function(){return M},cY:function(){return _},eX:function(){return R},g:function(){return N},hp:function(){return j},jZ:function(){return E},lT:function(){return C},lV:function(){return S},nr:function(){return A},sr:function(){return I},tD:function(){return $},u:function(){return c},yU:function(){return m},zW:function(){return k}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|u>>6,f=63&u;a||(f=64,s||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const u=i<t.length,c=u?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==c||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},u=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={VUE_APP_FIREBASE_PROJECT_ID:"eco-kirchner",VUE_APP_FIREBASE_APP_ID:"1:908630029969:web:d242eb70de39b39a7cf130",VUE_APP_FIREBASE_API_KEY:"AIzaSyA1X0q1F-Q0AZJKGfQ-pd9ECZPMWvXCC5Y",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"908630029969",VUE_APP_FIREBASE_STORAGE_BUCKET:"eco-kirchner.appspot.com",VUE_APP_FIREBASE_AUTH_DOMAIN:"eco-kirchner.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/EcoKirchner/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function R(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function D(t,e){return t.replace(P,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(U(n)&&U(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=z(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return v},EW:function(){return At},Gc:function(){return gt},IG:function(){return Tt},IJ:function(){return xt},KR:function(){return Nt},Kh:function(){return pt},Pr:function(){return Ut},R1:function(){return Lt},X2:function(){return c},bl:function(){return y},fE:function(){return wt},g8:function(){return yt},hZ:function(){return R},i9:function(){return Ot},ju:function(){return bt},o5:function(){return u},u4:function(){return k},ux:function(){return Et},yC:function(){return o}});n(4114);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t,e=i){e&&e.active&&e.effects.push(t)}function u(){return i}class c{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(l(e.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=p,e=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{f(this),this._runnings--,s=e,p=t}}stop(){var t;this.active&&(h(this),f(this),null==(t=this.onStop)||t.call(this),this.active=!1)}}function l(t){return t.value}function h(t){t._trackId++,t._depsLength=0}function f(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)d(t.deps[e],t);t.deps.length=t._depsLength}}function d(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let p=!0,g=0;const m=[];function v(){m.push(p),p=!1}function y(){const t=m.pop();p=void 0===t||t}function _(){g++}function w(){g--;while(!g&&E.length)E.shift()()}function b(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&d(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const E=[];function T(t,e,n){_();for(const r of t.keys()){let n;r._dirtyLevel<e&&(null!=n?n:n=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=e),r._shouldSchedule&&(null!=n?n:n=t.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&E.push(r.scheduler)))}w()}const I=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},S=new WeakMap,C=Symbol(""),A=Symbol("");function k(t,e,n){if(p&&s){let e=S.get(t);e||S.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=I((()=>e.delete(n)))),b(s,r,void 0)}}function R(t,e,n,i,s,o){const a=S.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.cy)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=t)&&u.push(e)}))}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&u.push(a.get("length")):(u.push(a.get(C)),(0,r.CE)(t)&&u.push(a.get(A)));break;case"delete":(0,r.cy)(t)||(u.push(a.get(C)),(0,r.CE)(t)&&u.push(a.get(A)));break;case"set":(0,r.CE)(t)&&u.push(a.get(C));break}_();for(const r of u)r&&T(r,4,void 0);w()}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm)),x=D();function D(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Et(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Et)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){v(),_();const n=Et(this)[e].apply(this,t);return w(),y(),n}})),t}function P(t){const e=Et(this);return k(e,"has",t),e.hasOwnProperty(t)}class L{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?ht:lt:s?ct:ut).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){if(o&&(0,r.$3)(x,e))return Reflect.get(x,e,n);if("hasOwnProperty"===e)return P}const a=Reflect.get(t,e,n);return((0,r.Bm)(e)?N.has(e):O(e))?a:(i||k(t,"get",e),s?a:Ot(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?mt(a):pt(a):a)}}class M extends L{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=_t(s);if(wt(n)||_t(n)||(s=Et(s),n=Et(n)),!(0,r.cy)(t)&&Ot(s)&&!Ot(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,i);return t===Et(i)&&(o?(0,r.$H)(n,s)&&R(t,"set",e,n,s):R(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&R(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&N.has(e)||k(t,"has",e),n}ownKeys(t){return k(t,"iterate",(0,r.cy)(t)?"length":C),Reflect.ownKeys(t)}}class U extends L{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const F=new M,V=new U,j=new M(!0),$=t=>t,B=t=>Reflect.getPrototypeOf(t);function z(t,e,n=!1,i=!1){t=t["__v_raw"];const s=Et(t),o=Et(e);n||((0,r.$H)(e,o)&&k(s,"get",e),k(s,"get",o));const{has:a}=B(s),u=i?$:n?St:It;return a.call(s,e)?u(t.get(e)):a.call(s,o)?u(t.get(o)):void(t!==s&&t.get(e))}function q(t,e=!1){const n=this["__v_raw"],i=Et(n),s=Et(t);return e||((0,r.$H)(t,s)&&k(i,"has",t),k(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function K(t,e=!1){return t=t["__v_raw"],!e&&k(Et(t),"iterate",C),Reflect.get(t,"size",t)}function W(t){t=Et(t);const e=Et(this),n=B(e),r=n.has.call(e,t);return r||(e.add(t),R(e,"add",t,t)),this}function G(t,e){e=Et(e);const n=Et(this),{has:i,get:s}=B(n);let o=i.call(n,t);o||(t=Et(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.$H)(e,a)&&R(n,"set",t,e,a):R(n,"add",t,e),this}function H(t){const e=Et(this),{has:n,get:r}=B(e);let i=n.call(e,t);i||(t=Et(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&R(e,"delete",t,void 0,s),o}function Q(){const t=Et(this),e=0!==t.size,n=void 0,r=t.clear();return e&&R(t,"clear",void 0,void 0,n),r}function X(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Et(s),a=e?$:t?St:It;return!t&&k(o,"iterate",C),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function Y(t,e,n){return function(...i){const s=this["__v_raw"],o=Et(s),a=(0,r.CE)(o),u="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,l=s[t](...i),h=n?$:e?St:It;return!e&&k(o,"iterate",c?A:C),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:u?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function J(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function Z(){const t={get(t){return z(this,t)},get size(){return K(this)},has:q,add:W,set:G,delete:H,clear:Q,forEach:X(!1,!1)},e={get(t){return z(this,t,!1,!0)},get size(){return K(this)},has:q,add:W,set:G,delete:H,clear:Q,forEach:X(!1,!0)},n={get(t){return z(this,t,!0)},get size(){return K(this,!0)},has(t){return q.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!1)},r={get(t){return z(this,t,!0,!0)},get size(){return K(this,!0)},has(t){return q.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=Y(i,!1,!1),n[i]=Y(i,!0,!1),e[i]=Y(i,!1,!0),r[i]=Y(i,!0,!0)})),[t,n,e,r]}const[tt,et,nt,rt]=Z();function it(t,e){const n=e?t?rt:nt:t?et:tt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const st={get:it(!1,!1)},ot={get:it(!1,!0)},at={get:it(!0,!1)};const ut=new WeakMap,ct=new WeakMap,lt=new WeakMap,ht=new WeakMap;function ft(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:ft((0,r.Zf)(t))}function pt(t){return _t(t)?t:vt(t,!1,F,st,ut)}function gt(t){return vt(t,!1,j,ot,ct)}function mt(t){return vt(t,!0,V,at,lt)}function vt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=dt(t);if(0===a)return t;const u=new Proxy(t,2===a?i:n);return s.set(t,u),u}function yt(t){return _t(t)?yt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function _t(t){return!(!t||!t["__v_isReadonly"])}function wt(t){return!(!t||!t["__v_isShallow"])}function bt(t){return yt(t)||_t(t)}function Et(t){const e=t&&t["__v_raw"];return e?Et(e):t}function Tt(t){return Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const It=t=>(0,r.Gv)(t)?pt(t):t,St=t=>(0,r.Gv)(t)?mt(t):t;class Ct{constructor(t,e,n,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new c((()=>t(this._value)),(()=>Rt(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Et(this);return t._cacheable&&!t.effect.dirty||!(0,r.$H)(t._value,t._value=t.effect.run())||Rt(t,4),kt(t),t.effect._dirtyLevel>=2&&Rt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function At(t,e,n=!1){let i,s;const o=(0,r.Tn)(t);o?(i=t,s=r.tE):(i=t.get,s=t.set);const a=new Ct(i,s,o||!s,n);return a}function kt(t){var e;p&&s&&(t=Et(t),b(s,null!=(e=t.dep)?e:t.dep=I((()=>t.dep=void 0),t instanceof Ct?t:void 0),void 0))}function Rt(t,e=4,n){t=Et(t);const r=t.dep;r&&T(r,e,void 0)}function Ot(t){return!(!t||!0!==t.__v_isRef)}function Nt(t){return Dt(t,!1)}function xt(t){return Dt(t,!0)}function Dt(t,e){return Ot(t)?t:new Pt(t,e)}class Pt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Et(t),this._value=e?t:It(t)}get value(){return kt(this),this._value}set value(t){const e=this.__v_isShallow||wt(t)||_t(t);t=e?t:Et(t),(0,r.$H)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:It(t),Rt(this,4,t))}}function Lt(t){return Ot(t)?t.value:t}const Mt={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ot(i)&&!Ot(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ut(t){return yt(t)?t:new Proxy(t,Mt)}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return Lt},CE:function(){return nn},Df:function(){return _t},EW:function(){return Kn},FK:function(){return Ke},Fv:function(){return mn},Gt:function(){return ge},Gy:function(){return ct},K9:function(){return Me},KC:function(){return xt},Lk:function(){return ln},MZ:function(){return yt},OW:function(){return gt},Q3:function(){return vn},QP:function(){return ht},Qi:function(){return L},RG:function(){return zt},WQ:function(){return me},Wv:function(){return rn},bF:function(){return hn},bo:function(){return st},dY:function(){return y},eW:function(){return gn},g2:function(){return K},h:function(){return Wn},jt:function(){return M},k6:function(){return U},nI:function(){return An},pI:function(){return Bt},pM:function(){return wt},pR:function(){return dt},qL:function(){return o},sV:function(){return Dt},uX:function(){return Ye},wB:function(){return tt},xo:function(){return Mt}});n(4114);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}const u=[];for(let i=0;i<t.length;i++)u.push(o(t[i],e,n,r));return u}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}u(t,n,i,r)}function u(t,e,n,r=!0){console.error(t)}let c=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(t){const e=v||m;return t?e.then(this?t.bind(this):t):e}function _(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],s=C(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,c&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(_(t.id),0,t),b())}function b(){c||l||(l=!0,v=m.then(k))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,i.cy)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),b()}function I(t,e,n=(c?f+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function S(t){if(d.length){const t=[...new Set(d)].sort(((t,e)=>C(t)-C(e)));if(d.length=0,p)return void p.push(...t);for(p=t,g=0;g<p.length;g++)p[g]();p=null,g=0}}const C=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,c=!0,h.sort(A);i.tE;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,S(t),c=!1,v=null,(h.length||d.length)&&k(t)}}function R(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),u=a&&e.slice(7);if(u&&u in r){const t=`${"modelValue"===u?"model":u}Modifiers`,{number:e,trim:o}=r[t]||i.MZ;o&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),e&&(s=n.map(i.bB))}let c;let l=r[c=(0,i.rU)(e)]||r[c=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[c=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,o(h,t,6,s)}}function O(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},u=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=O(t,e,!0);n&&(u=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||u?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function N(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}let x=null,D=null;function P(t){const e=x;return x=t,D=t&&t.type.__scopeId||null,e}function L(t){D=t}function M(){D=null}function U(t,e=x,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&tn(-1);const i=P(e);let s;try{s=t(...n)}finally{P(i),r._d&&tn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[u],slots:c,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t;let y,_;const w=P(t);try{if(4&n.shapeFlag){const t=s||r,e=t;y=yn(f.call(e,t,d,o,g,p,m)),_=l}else{const t=e;0,y=yn(t.length>1?t(o,{attrs:l,slots:c,emit:h}):t(o,null)),_=e.props?l:V(l)}}catch(E){Qe.length=0,a(E,t,1),y=hn(Ge)}let b=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(u&&t.some(i.CP)&&(_=j(_,u)),b=pn(b,_))}return n.dirs&&(b=pn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,P(w),y}const V=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},j=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function $(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,c):!!o);if(1024&u)return!0;if(16&u)return r?B(r,o,c):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!N(c,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!N(n,s))return!0}return!1}function z({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const q="components";function K(t,e){return G(q,t,!0,e)||t}const W=Symbol.for("v-ndc");function G(t,e,n=!0,r=!1){const s=x||Cn;if(s){const n=s.type;if(t===q){const t=zn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=H(s[t]||n[t],e)||H(s.appContext[t],e);return!o&&r?n:o}}function H(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}const Q=t=>t.__isSuspense;function X(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const Y=Symbol.for("v-scx"),J=()=>{{const t=me(Y);return t}};const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:u,once:c,onTrack:l,onTrigger:h}=i.MZ){if(e&&c){const t=e;e=(...e)=>{t(...e),C()}}const f=Cn,d=t=>!0===a?t:it(t,!1===a?1:void 0);let p,g,m=!1,v=!1;if((0,r.i9)(t)?(p=()=>t.value,m=(0,r.fE)(t)):(0,r.g8)(t)?(p=()=>d(t),m=!0):(0,i.cy)(t)?(v=!0,m=t.some((t=>(0,r.g8)(t)||(0,r.fE)(t))),p=()=>t.map((t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?d(t):(0,i.Tn)(t)?s(t,f,2):void 0))):p=(0,i.Tn)(t)?e?()=>s(t,f,2):()=>(g&&g(),o(t,f,3,[_])):i.tE,e&&a){const t=p;p=()=>it(t())}let y,_=t=>{g=I.onStop=()=>{s(t,f,4),g=I.onStop=void 0}};if(Ln){if(_=i.tE,e?n&&o(e,f,3,[p(),v?[]:void 0,_]):p(),"sync"!==u)return i.tE;{const t=J();y=t.__watcherHandles||(t.__watcherHandles=[])}}let b=v?new Array(t.length).fill(Z):Z;const E=()=>{if(I.active&&I.dirty)if(e){const t=I.run();(a||m||(v?t.some(((t,e)=>(0,i.$H)(t,b[e]))):(0,i.$H)(t,b)))&&(g&&g(),o(e,f,3,[t,b===Z?void 0:v&&b[0]===Z?[]:b,_]),b=t)}else I.run()};let T;E.allowRecurse=!!e,"sync"===u?T=E:"post"===u?T=()=>Le(E,f&&f.suspense):(E.pre=!0,f&&(E.id=f.uid),T=()=>w(E));const I=new r.X2(p,i.tE,T),S=(0,r.o5)(),C=()=>{I.stop(),S&&(0,i.TF)(S.effects,I)};return e?n?E():b=I.run():"post"===u?Le(I.run.bind(I),f&&f.suspense):I.run(),y&&y.push(C),C}function nt(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=On(this),u=et(s,o.bind(r),n);return a(),u}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e,n=0,s){if(!(0,i.Gv)(t)||t["__v_skip"])return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),(0,r.i9)(t))it(t.value,e,n,s);else if((0,i.cy)(t))for(let r=0;r<t.length;r++)it(t[r],e,n,s);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{it(t,e,n,s)}));else if((0,i.Qd)(t))for(const r in t)it(t[r],e,n,s);return t}function st(t,e){if(null===x)return t;const n=Bn(x)||x.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,o,a,u=i.MZ]=e[s];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&it(o),r.push({dir:t,instance:n,value:o,oldValue:void 0,arg:a,modifiers:u}))}return t}function ot(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let u=0;u<s.length;u++){const c=s[u];a&&(c.oldValue=a[u].value);let l=c.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,c,t,e]),(0,r.bl)())}}const at=Symbol("_leaveCb"),ut=Symbol("_enterCb");function ct(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dt((()=>{t.isMounted=!0})),Mt((()=>{t.isUnmounting=!0})),t}const lt=[Function,Array],ht={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},ft={name:"BaseTransition",props:ht,setup(t,{slots:e}){const n=An(),i=ct();return()=>{const s=e.default&&_t(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Ge){0,o=e,t=!0;break}}const a=(0,r.ux)(t),{mode:u}=a;if(i.isLeaving)return mt(o);const c=vt(o);if(!c)return mt(o);const l=gt(c,a,i,n);yt(c,l);const h=n.subTree,f=h&&vt(h);if(f&&f.type!==Ge&&!on(c,f)){const t=gt(f,a,i,n);if(yt(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},mt(o);"in-out"===u&&c.type!==Ge&&(t.delayLeave=(t,e,n)=>{const r=pt(i,f);r[String(f.key)]=f,t[at]=()=>{e(),t[at]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},dt=ft;function pt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function gt(t,e,n,r){const{appear:s,mode:a,persisted:u=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=e,b=String(t.key),E=pt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];T(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:u,beforeEnter(e){let r=c;if(!n.isMounted){if(!s)return;r=v||c}e[at]&&e[at](!0);const i=E[b];i&&on(t,i)&&i.el[at]&&i.el[at](),T(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=y||l,r=_||h,i=w||f}let o=!1;const a=t[ut]=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t[ut]=void 0)};e?I(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e[ut]&&e[ut](!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e[at]=n=>{s||(s=!0,r(),T(n?m:g,[e]),e[at]=void 0,E[i]===t&&delete E[i])};E[i]=t,p?I(p,[e,o]):o()},clone(t){return gt(t,e,n,r)}};return S}function mt(t){if(Et(t))return t=pn(t),t.children=null,t}function vt(t){return Et(t)?t.children?t.children[0]:void 0:t}function yt(t,e){6&t.shapeFlag&&t.component?yt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _t(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ke?(128&o.patchFlag&&i++,r=r.concat(_t(o.children,e,a))):(e||o.type!==Ge)&&r.push(null!=a?pn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function wt(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}const bt=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Et=t=>t.type.__isKeepAlive;RegExp,RegExp;function Tt(t,e){return(0,i.cy)(t)?t.some((t=>Tt(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&t.test(e)}function It(t,e){Ct(t,"a",e)}function St(t,e){Ct(t,"da",e)}function Ct(t,e,n=Cn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Ot(e,r,n),n){let t=n.parent;while(t&&t.parent)Et(t.parent.vnode)&&At(r,e,n,t),t=t.parent}}function At(t,e,n,r){const s=Ot(e,t,r,!0);Ut((()=>{(0,i.TF)(r[e],s)}),n)}function kt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Rt(t){return 128&t.shapeFlag?t.ssContent:t}function Ot(t,e,n=Cn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const s=On(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const Nt=t=>(e,n=Cn)=>(!Ln||"sp"===t)&&Ot(t,((...t)=>e(...t)),n),xt=Nt("bm"),Dt=Nt("m"),Pt=Nt("bu"),Lt=Nt("u"),Mt=Nt("bum"),Ut=Nt("um"),Ft=Nt("sp"),Vt=Nt("rtg"),jt=Nt("rtc");function $t(t,e=Cn){Ot("ec",t,e)}function Bt(t,e,n,r){let s;const o=n&&n[r];if((0,i.cy)(t)||(0,i.Kg)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function zt(t,e,n={},r,i){if(x.isCE||x.parent&&bt(x.parent)&&x.parent.isCE)return"default"!==e&&(n.name=e),hn("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ye();const o=s&&qt(s(n)),a=rn(Ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function qt(t){return t.some((t=>!sn(t)||t.type!==Ge&&!(t.type===Ke&&!qt(t.children))))?t:null}const Kt=t=>t?xn(t)?Bn(t)||t.proxy:Kt(t.parent):null,Wt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kt(t.parent),$root:t=>Kt(t.root),$emit:t=>t.emit,$options:t=>ee(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,w(t.update)}),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>nt.bind(t)}),Gt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Ht={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:l}=t;let h;if("$"!==e[0]){const r=u[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Gt(s,e))return u[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return u[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return u[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return u[e]=4,n[e];Xt&&(u[e]=0)}}const f=Wt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t,"get",e),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(u[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Gt(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||Gt(e,a)||(u=o[0])&&(0,i.$3)(u,a)||(0,i.$3)(r,a)||(0,i.$3)(Wt,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qt(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Xt=!0;function Yt(t){const e=ee(t),n=t.proxy,s=t.ctx;Xt=!1,e.beforeCreate&&Zt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:u,watch:c,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:N,filters:x}=e,D=null;if(h&&Jt(h,s,D),u)for(const r in u){const t=u[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Xt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,u=Kn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:t=>u.value=t})}if(c)for(const r in c)te(c[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{ge(e,t[e])}))}function P(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Zt(f,t,"c"),P(xt,d),P(Dt,p),P(Pt,g),P(Lt,m),P(It,v),P(St,y),P($t,C),P(jt,I),P(Vt,S),P(Mt,w),P(Ut,E),P(Ft,A),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),N&&(t.directives=N)}function Jt(t,e,n=i.tE){(0,i.cy)(t)&&(t=oe(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?me(n.from||s,n.default,!0):me(n.from||s):me(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Zt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function te(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&tt(s,n)}else if((0,i.Tn)(t))tt(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>te(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&tt(s,r,t)}else 0}function ee(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let c;return u?c=u:s.length||n||r?(c={},s.length&&s.forEach((t=>ne(c,t,a,!0))),ne(c,e,a)):c=e,(0,i.Gv)(e)&&o.set(e,c),c}function ne(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ne(t,s,n,!0),i&&i.forEach((e=>ne(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=re[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const re={data:ie,props:ce,emits:ce,methods:ue,computed:ue,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:ue,directives:ue,watch:le,provide:ie,inject:se};function ie(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function se(t,e){return ue(oe(t),oe(e))}function oe(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ae(t,e){return t?[...new Set([].concat(t,e))]:e}function ue(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function ce(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),Qt(t),Qt(null!=e?e:{})):e}function le(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=ae(t[r],e[r]);return n}function he(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fe=0;function de(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=he(),o=new WeakSet;let a=!1;const u=s.app={_uid:fe++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Gn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.Tn)(t.install)?(o.add(t),t.install(u,...e)):(0,i.Tn)(t)&&(o.add(t),t(u,...e))),u},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),u},component(t,e){return e?(s.components[t]=e,u):s.components[t]},directive(t,e){return e?(s.directives[t]=e,u):s.directives[t]},mount(i,o,c){if(!a){0;const l=hn(n,r);return l.appContext=s,!0===c?c="svg":!1===c&&(c=void 0),o&&e?e(l,i):t(l,i,c),a=!0,u._container=i,i.__vue_app__=u,Bn(l.component)||l.component.proxy}},unmount(){a&&(t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return s.provides[t]=e,u},runWithContext(t){const e=pe;pe=u;try{return t()}finally{pe=e}}};return u}}let pe=null;function ge(t,e){if(Cn){let n=Cn.provides;const r=Cn.parent&&Cn.parent.provides;r===n&&(n=Cn.provides=Object.create(r)),n[t]=e}else 0}function me(t,e,n=!1){const r=Cn||x;if(r||pe){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pe._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function ve(t,e,n,s=!1){const o={},a={};(0,i.yQ)(a,an,1),t.propsDefaults=Object.create(null),_e(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ye(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=t,c=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||u>0)||16&u){let r;_e(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=we(l,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&u){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(t.emitsOptions,s))continue;const u=e[s];if(l)if((0,i.$3)(a,s))u!==a[s]&&(a[s]=u,h=!0);else{const e=(0,i.PT)(s);o[e]=we(l,c,e,u,t,!1)}else u!==a[s]&&(a[s]=u,h=!0)}}h&&(0,r.hZ)(t,"set","$attrs")}function _e(t,e,n,s){const[o,a]=t.propsOptions;let u,c=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(u||(u={}))[h]=l:n[h]=l:N(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,c=!0)}if(a){const e=(0,r.ux)(n),s=u||i.MZ;for(let r=0;r<a.length;r++){const u=a[r];n[u]=we(o,e,u,s[u],t,!(0,i.$3)(s,u))}}return c}function we(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=On(s);r=i[n]=t.call(null,e),o()}}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function be(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let c=!1;if(!(0,i.Tn)(t)){const r=t=>{c=!0;const[n,r]=be(t,e,!0);(0,i.X$)(a,n),r&&u.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);Ee(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(Ee(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const t=Se(Boolean,r.type),n=Se(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.$3)(r,"default"))&&u.push(e)}}}}const l=[a,u];return(0,i.Gv)(t)&&r.set(t,l),l}function Ee(t){return"$"!==t[0]&&!(0,i.SU)(t)}function Te(t){if(null===t)return"null";if("function"===typeof t)return t.name||"";if("object"===typeof t){const e=t.constructor&&t.constructor.name;return e||""}return""}function Ie(t,e){return Te(t)===Te(e)}function Se(t,e){return(0,i.cy)(e)?e.findIndex((e=>Ie(e,t))):(0,i.Tn)(e)&&Ie(e,t)?0:-1}const Ce=t=>"_"===t[0]||"$stable"===t,Ae=t=>(0,i.cy)(t)?t.map(yn):[yn(t)],ke=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>Ae(e(...t))),n);return r._c=!1,r},Re=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ce(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ke(s,n,r);else if(null!=n){0;const t=Ae(n);e[s]=()=>t}}},Oe=(t,e)=>{const n=Ae(e);t.slots.default=()=>n},Ne=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.ux)(e),(0,i.yQ)(e,"_",n)):Re(e,t.slots={})}else t.slots={},e&&Oe(t,e);(0,i.yQ)(t.slots,an,1)},xe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.X$)(s,e),n||1!==t||delete s._):(o=!e.$stable,Re(e,s)),a=e}else e&&(Oe(t,e),a={default:1});if(o)for(const i in s)Ce(i)||null!=a[i]||delete s[i]};function De(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>De(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(bt(o)&&!a)return;const u=4&o.shapeFlag?Bn(o.component)||o.component.proxy:o.el,c=a?null:u,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,(0,i.$3)(p,f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,l,12,[c,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.$3)(p,h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,u):(0,i.cy)(n)?n.includes(u)||n.push(u):e?(d[h]=[u],(0,i.$3)(p,h)&&(p[h]=d[h])):(h.value=[u],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,(0,i.$3)(p,h)&&(p[h]=c)):s&&(h.value=c,t.k&&(d[t.k]=c))};c?(r.id=-1,Le(r,n)):r()}else 0}}function Pe(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Le=X;function Me(t){return Ue(t)}function Ue(t,e){Pe();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:c,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,u=!!e.dynamicChildren)=>{if(t===e)return;t&&!on(t,e)&&(r=J(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(u=!1,e.dynamicChildren=null);const{type:c,ref:l,shapeFlag:h}=e;switch(c){case We:y(t,e,n,r);break;case Ge:_(t,e,n,r);break;case He:null==t&&b(e,n,r,o);break;case Ke:P(t,e,n,r,i,s,o,a,u);break;default:1&h?A(t,e,n,r,i,s,o,a,u):6&h?L(t,e,n,r,i,s,o,a,u):(64&h||128&h)&&c.process(t,e,n,r,i,s,o,a,u,et)}null!=l&&i&&De(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},_=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,i,s,o,a,u)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?k(e,n,r,i,s,o,a,u):N(t,e,i,s,o,a,u)},k=(t,e,n,r,o,c,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(d=t.el=u(t.type,c,g&&g.is,g),8&m?f(d,t.children):16&m&&O(t.children,d,null,r,o,Fe(t,c),l,h),y&&ot(t,null,r,"created"),R(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(d,e,null,g[e],c,t.children,r,o,Y);"value"in g&&a(d,"value",null,g.value,c),(p=g.onVnodeBeforeMount)&&En(p,r,t)}y&&ot(t,null,r,"beforeMount");const _=je(o,v);_&&v.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||_||y)&&Le((()=>{p&&En(p,r,t),_&&v.enter(d),y&&ot(t,null,r,"mounted")}),o)},R=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},O=(t,e,n,r,i,s,o,a,u=0)=>{for(let c=u;c<t.length;c++){const u=t[c]=a?_n(t[c]):yn(t[c]);v(null,u,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,u)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Ve(n,!1),(m=g.onVnodeBeforeUpdate)&&En(m,n,e,t),d&&ot(e,t,n,"beforeUpdate"),n&&Ve(n,!0),h?x(t.dynamicChildren,h,c,n,r,Fe(e,s),o):u||B(t,e,c,null,n,r,Fe(e,s),o,!1),l>0){if(16&l)D(c,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(c,"class",null,g.class,s),4&l&&a(c,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],u=p[o],l=g[o];l===u&&"value"!==o||a(c,o,u,l,s,t.children,n,r,Y)}}1&l&&t.children!==e.children&&f(c,e.children)}else u||null!=h||D(c,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&Le((()=>{m&&En(m,n,e,t),d&&ot(e,t,n,"updated")}),r)},x=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const u=t[a],c=e[a],l=u.el&&(u.type===Ke||!on(u,c)||70&u.shapeFlag)?d(u.el):n;v(u,c,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s,o,u)=>{if(n!==r){if(n!==i.MZ)for(const c in n)(0,i.SU)(c)||c in r||a(t,c,n[c],null,u,e.children,s,o,Y);for(const c in r){if((0,i.SU)(c))continue;const l=r[c],h=n[c];l!==h&&"value"!==c&&a(t,c,h,l,u,e.children,s,o,Y)}"value"in r&&a(t,"value",n.value,r.value,u)}},P=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),O(e.children||[],n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&$e(t,e,!0)):B(t,e,n,f,i,o,a,u,l)},L=(t,e,n,r,i,s,o,a,u)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,u):M(e,n,r,i,s,o,u):U(t,e,u)},M=(t,e,n,r,i,s,o)=>{const a=t.component=Sn(t,r,i);if(Et(t)&&(a.ctx.renderer=et),Mn(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=hn(Ge);_(null,t,e,n)}}else V(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if($(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,E(r.update),r.effect.dirty=!0,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,u)=>{const c=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=ze(t);if(n)return e&&(e.el=l.el,j(t,e,u)),void n.asyncDep.then((()=>{t.isUnmounted||c()}))}let h,f=e;0,Ve(t,!1),e?(e.el=l.el,j(t,e,u)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&En(h,s,e,l),Ve(t,!0);const p=F(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),J(g),t,o,a),e.el=p.el,null===f&&z(t,p.el),r&&Le(r,o),(h=e.props&&e.props.onVnodeUpdated)&&Le((()=>En(h,s,e,l)),o)}else{let r;const{el:u,props:c}=e,{bm:l,m:h,parent:f}=t,d=bt(e);if(Ve(t,!1),l&&(0,i.DY)(l),!d&&(r=c&&c.onVnodeBeforeMount)&&En(r,f,e),Ve(t,!0),u&&rt){const n=()=>{t.subTree=F(t),rt(u,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=F(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&Le(h,o),!d&&(r=c&&c.onVnodeMounted)){const t=e;Le((()=>En(r,f,t)),o)}(256&e.shapeFlag||f&&bt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Le(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.X2(c,i.tE,(()=>w(h)),t.scope),h=t.update=()=>{l.dirty&&l.run()};h.id=t.uid,Ve(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ye(t,e.props,i,n),xe(t,e.children,n),(0,r.C4)(),I(t),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,u=!1)=>{const c=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void K(c,h,n,r,i,s,o,a,u);if(256&d)return void q(c,h,n,r,i,s,o,a,u)}8&p?(16&l&&Y(c,i,s),h!==c&&f(n,h)):16&l?16&p?K(c,h,n,r,i,s,o,a,u):Y(c,i,s,!0):(8&l&&f(n,""),16&p&&O(h,n,r,i,s,o,a,u))},q=(t,e,n,r,s,o,a,u,c)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=c?_n(e[d]):yn(e[d]);v(t[d],r,n,null,s,o,a,u,c)}l>h?Y(t,s,o,!0,!1,f):O(e,n,r,s,o,a,u,c,f)},K=(t,e,n,r,s,o,a,u,c)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=c?_n(e[l]):yn(e[l]);if(!on(r,i))break;v(r,i,n,null,s,o,a,u,c),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=c?_n(e[d]):yn(e[d]);if(!on(r,i))break;v(r,i,n,null,s,o,a,u,c),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=c?_n(e[l]):yn(e[l]),n,i,s,o,a,u,c),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=c?_n(e[l]):yn(e[l]);null!=t.key&&m.set(t.key,l)}let y,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&on(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,u,c),_++)}const I=b?Be(T):i.Oj;for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,u,c):b&&(y<0||l!==I[y]?W(i,n,f,2):y--)}}},W=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:u,children:c,shapeFlag:l}=t;if(6&l)return void W(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Ke){s(o,e,n);for(let t=0;t<c.length;t++)W(c[t],e,n,r);return void s(t.anchor,e,n)}if(a===He)return void T(t,e,n);const h=2!==r&&1&l&&u;if(h)if(0===r)u.beforeEnter(o),s(o,e,n),Le((()=>u.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=u,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&De(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!bt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&En(g,e,t),6&l)X(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&ot(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):c&&(s!==Ke||h>0&&64&h)?Y(c,e,n,!1,!0):(s===Ke&&384&h||!i&&16&l)&&Y(u,e,n),r&&H(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&Le((()=>{g&&En(g,e,t),d&&ot(t,null,e,"unmounted")}),n)},H=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ke)return void Q(n,r);if(e===He)return void C(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},X=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:u}=t;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),u&&Le(u,e),Le((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},J=t=>6&t.shapeFlag?J(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el);let Z=!1;const tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),Z||(Z=!0,I(),S(),Z=!1),e._vnode=t},et={p:v,um:G,m:W,r:H,mt:M,mc:O,pc:B,pbc:x,n:J,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:de(tt,nt)}}function Fe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ve({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function je(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $e(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=_n(s[i]),e.el=t.el),n||$e(t,e)),e.type===We&&(e.el=t.el)}}function Be(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const u=t[r];if(0!==u){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function ze(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ze(e)}const qe=t=>t.__isTeleport;const Ke=Symbol.for("v-fgt"),We=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),He=Symbol.for("v-stc"),Qe=[];let Xe=null;function Ye(t=!1){Qe.push(Xe=t?null:[])}function Je(){Qe.pop(),Xe=Qe[Qe.length-1]||null}let Ze=1;function tn(t){Ze+=t}function en(t){return t.dynamicChildren=Ze>0?Xe||i.Oj:null,Je(),Ze>0&&Xe&&Xe.push(t),t}function nn(t,e,n,r,i,s){return en(ln(t,e,n,r,i,s,!0))}function rn(t,e,n,r,i){return en(hn(t,e,n,r,i,!0))}function sn(t){return!!t&&!0===t.__v_isVNode}function on(t,e){return t.type===e.type&&t.key===e.key}const an="__vInternal",un=({key:t})=>null!=t?t:null,cn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:x,r:t,k:e,f:!!n}:t:null);function ln(t,e=null,n=null,r=0,s=null,o=(t===Ke?0:1),a=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&un(e),ref:e&&cn(e),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:x};return u?(wn(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,i.Kg)(n)?8:16),Ze>0&&!a&&Xe&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Xe.push(c),c}const hn=fn;function fn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==W||(t=Ge),sn(t)){const r=pn(t,e,!0);return n&&wn(r,n),Ze>0&&!a&&Xe&&(6&r.shapeFlag?Xe[Xe.indexOf(t)]=r:Xe.push(r)),r.patchFlag|=-2,r}if(qn(t)&&(t=t.__vccOpts),e){e=dn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const u=(0,i.Kg)(t)?1:Q(t)?128:qe(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return ln(t,e,n,s,o,u,a,!0)}function dn(t){return t?(0,r.ju)(t)||an in t?(0,i.X$)({},t):t:null}function pn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,u=e?bn(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&un(u),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(cn(e)):[s,cn(e)]:cn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c}function gn(t=" ",e=0){return hn(We,null,t,e)}function mn(t,e){const n=hn(He,null,t);return n.staticCount=e,n}function vn(t="",e=!1){return e?(Ye(),rn(Ge,null,t)):hn(Ge,null,t)}function yn(t){return null==t||"boolean"===typeof t?hn(Ge):(0,i.cy)(t)?hn(Ke,null,t.slice()):"object"===typeof t?_n(t):hn(We,null,String(t))}function _n(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:pn(t)}function wn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),wn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||an in e?3===r&&x&&(1===x.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=x}}else(0,i.Tn)(e)?(e={default:e,_ctx:x},n=32):(e=String(e),64&r?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function bn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function En(t,e,n,r=null){o(t,e,7,[n,r])}const Tn=he();let In=0;function Sn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Tn,a={uid:In++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:be(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=R.bind(null,a),t.ce&&t.ce(a),a}let Cn=null;const An=()=>Cn||x;let kn,Rn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};kn=e("__VUE_INSTANCE_SETTERS__",(t=>Cn=t)),Rn=e("__VUE_SSR_SETTERS__",(t=>Ln=t))}const On=t=>{const e=Cn;return kn(t),t.scope.on(),()=>{t.scope.off(),kn(e)}},Nn=()=>{Cn&&Cn.scope.off(),kn(null)};function xn(t){return 4&t.vnode.shapeFlag}let Dn,Pn,Ln=!1;function Mn(t,e=!1){e&&Rn(e);const{props:n,children:r}=t.vnode,i=xn(t);ve(t,n,i,e),Ne(t,r);const s=i?Un(t,e):void 0;return e&&Rn(!1),s}function Un(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.IG)(new Proxy(t.ctx,Ht));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?$n(t):null,u=On(t);(0,r.C4)();const c=s(o,t,0,[t.props,n]);if((0,r.bl)(),u(),(0,i.yL)(c)){if(c.then(Nn,Nn),e)return c.then((n=>{Fn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Fn(t,c,e)}else Vn(t,e)}function Fn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Vn(t,n)}function Vn(t,e,n){const s=t.type;if(!t.render){if(!e&&Dn&&!s.render){const e=s.template||ee(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Dn(e,u)}}t.render=s.render||i.tE,Pn&&Pn(t)}{const e=On(t);(0,r.C4)();try{Yt(t)}finally{(0,r.bl)(),e()}}}function jn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.u4)(t,"get","$attrs"),e[n]}}))}function $n(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return jn(t)},slots:t.slots,emit:t.emit,expose:e}}function Bn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Wt?Wt[n](t):void 0},has(t,e){return e in t||e in Wt}}))}function zn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function qn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Kn=(t,e)=>{const n=(0,r.EW)(t,e,Ln);return n};function Wn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?sn(e)?hn(t,null,[e]):hn(t,e):hn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&sn(n)&&(n=[n]),hn(t,e,n))}const Gn="3.4.21"},5130:function(t,e,n){"use strict";n.d(e,{D$:function(){return It},Ef:function(){return Ot},Jo:function(){return yt},jR:function(){return Ct},u1:function(){return _t}});n(4114);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,c=u&&u.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?u.createElementNS(o,t):"mathml"===e?u.createElementNS(a,t):u.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>u.createTextNode(t),createComment:t=>u.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>u.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML="svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t;const i=c.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",f="animation",d=Symbol("_vtc"),p=(t,{slots:e})=>(0,r.h)(r.pR,_(t),e);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),v=(t,e=[])=>{(0,i.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},y=t=>!!t&&((0,i.cy)(t)?t.some((t=>t.length>1)):t.length>1);function _(t){const e={};for(const i in t)i in g||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:u=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:l=a,appearToClass:h=u,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=w(s),_=m&&m[0],b=m&&m[1],{onBeforeEnter:S,onEnter:A,onEnterCancelled:k,onLeave:R,onLeaveCancelled:N,onBeforeAppear:x=S,onAppear:D=A,onAppearCancelled:P=k}=e,L=(t,e,n)=>{T(t,e?h:u),T(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,T(t,f),T(t,p),T(t,d),e&&e()},U=t=>(e,n)=>{const i=t?D:A,s=()=>L(e,t,n);v(i,[e,s]),I((()=>{T(e,t?c:o),E(e,t?h:u),y(i)||C(e,r,_,s)}))};return(0,i.X$)(e,{onBeforeEnter(t){v(S,[t]),E(t,o),E(t,a)},onBeforeAppear(t){v(x,[t]),E(t,c),E(t,l)},onEnter:U(!1),onAppear:U(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);E(t,f),O(),E(t,d),I((()=>{t._isLeaving&&(T(t,f),E(t,p),y(R)||C(t,r,b,n))})),v(R,[t,n])},onEnterCancelled(t){L(t,!1),v(k,[t])},onAppearCancelled(t){L(t,!0),v(P,[t])},onLeaveCancelled(t){M(t),v(N,[t])}})}function w(t){if(null==t)return null;if((0,i.Gv)(t))return[b(t.enter),b(t.leave)];{const e=b(t);return[e,e]}}function b(t){const e=(0,i.Ro)(t);return e}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[d]||(t[d]=new Set)).add(e)}function T(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[d];n&&(n.delete(e),n.size||(t[d]=void 0))}function I(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let S=0;function C(t,e,n,r){const i=t._endId=++S,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:u}=A(t,e);if(!o)return r();const c=o+"end";let l=0;const h=()=>{t.removeEventListener(c,f),s()},f=e=>{e.target===t&&++l>=u&&h()};setTimeout((()=>{l<u&&h()}),a+1),t.addEventListener(c,f)}function A(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=k(i,s),a=r(`${f}Delay`),u=r(`${f}Duration`),c=k(a,u);let l=null,d=0,p=0;e===h?o>0&&(l=h,d=o,p=s.length):e===f?c>0&&(l=f,d=c,p=u.length):(d=Math.max(o,c),l=d>0?o>c?h:f:null,p=l?l===h?s.length:u.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:d,propCount:p,hasTransform:g}}function k(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>R(e)+R(t[n]))))}function R(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function N(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const x=Symbol("_vod"),D=Symbol("_vsh");const P=Symbol("");const L=/(^|;)\s*display\s*:/;function M(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&F(r,e,"")}else for(const t in e)null==n[t]&&F(r,t,"");for(const t in n)"display"===t&&(o=!0),F(r,t,n[t])}else if(s){if(e!==n){const t=r[P];t&&(n+=";"+t),r.cssText=n,o=L.test(n)}}else e&&t.removeAttribute("style");x in t&&(t[x]=o?r.display:"",t[D]&&(r.display="none"))}const U=/\s*!important$/;function F(t,e,n){if((0,i.cy)(n))n.forEach((n=>F(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$(t,e);U.test(n)?t.setProperty((0,i.Tg)(r),n.replace(U,""),"important"):t[r]=n}}const V=["Webkit","Moz","ms"],j={};function $(t,e){const n=j[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return j[e]=r;r=(0,i.ZH)(r);for(let i=0;i<V.length;i++){const n=V[i]+r;if(n in t)return j[e]=n}return e}const B="http://www.w3.org/1999/xlink";function z(t,e,n,r,s){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(B,e.slice(6,e.length)):t.setAttributeNS(B,e,n);else{const r=(0,i.J$)(e);null==n||r&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function q(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);const u=t.tagName;if("value"===e&&"PROGRESS"!==u&&!u.includes("-")){const r="OPTION"===u?t.getAttribute("value")||"":t.value,i=null==n?"":n;return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}function K(t,e,n,r){t.addEventListener(e,n,r)}function W(t,e,n,r){t.removeEventListener(e,n,r)}const G=Symbol("_vei");function H(t,e,n,r,i=null){const s=t[G]||(t[G]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=X(e);if(r){const o=s[e]=tt(r,i);K(t,n,o,a)}else o&&(W(t,n,o,a),s[e]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(t){let e;if(Q.test(t)){let n;e={};while(n=t.match(Q))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let Y=0;const J=Promise.resolve(),Z=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function tt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(et(t,n.value),e,5,[t])};return n.value=t,n.attached=Z(),n}function et(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const nt=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rt=(t,e,n,r,s,o,a,u,c)=>{const l="svg"===s;"class"===e?N(t,r,l):"style"===e?M(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||H(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):it(t,e,r,l))?q(t,e,r,o,a,u,c):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),z(t,e,r,l))};function it(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&nt(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!nt(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const st=new WeakMap,ot=new WeakMap,at=Symbol("_moveCb"),ut=Symbol("_enterCb"),ct={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!dt(o[0].el,n.vnode.el,e))return;o.forEach(lt),o.forEach(ht);const r=o.filter(ft);O(),r.forEach((t=>{const n=t.el,r=n.style;E(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[at]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[at]=null,T(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const u=(0,s.ux)(t),c=_(u);let l=u.tag||r.FK;o=a,a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,c,i,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.MZ)(e,(0,r.OW)(e,c,i,n)),st.set(e,e.el.getBoundingClientRect())}return(0,r.bF)(l,null,a)}}};ct.props;function lt(t){const e=t.el;e[at]&&e[at](),e[ut]&&e[ut]()}function ht(t){ot.set(t,t.el.getBoundingClientRect())}function ft(t){const e=st.get(t),n=ot.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function dt(t,e,n){const r=t.cloneNode(),i=t[d];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=A(r);return s.removeChild(r),o}const pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function gt(t){t.target.composing=!0}function mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vt=Symbol("_assign"),yt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[vt]=pt(s);const o=r||s.props&&"number"===s.props.type;K(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[vt](r)})),n&&K(t,"change",(()=>{t.value=t.value.trim()})),e||(K(t,"compositionstart",gt),K(t,"compositionend",mt),K(t,"change",mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},o){if(t[vt]=pt(o),t.composing)return;const a=s||"number"===t.type?(0,i.bB)(t.value):t.value,u=null==e?"":e;if(a!==u){if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===u)return}t.value=u}}};const _t={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.vM)(e);K(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(bt(t)):bt(t)));t[vt](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[vt]=pt(s)},mounted(t,{value:e,modifiers:{number:n}}){wt(t,e,n)},beforeUpdate(t,e,n){t[vt]=pt(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||wt(t,e,n)}};function wt(t,e,n){const r=t.multiple,s=(0,i.cy)(e);if(!r||s||(0,i.vM)(e)){for(let o=0,a=t.options.length;o<a;o++){const a=t.options[o],u=bt(a);if(r)if(s){const t=typeof u;a.selected="string"===t||"number"===t?e.includes(n?(0,i.bB)(u):u):(0,i.u3)(e,u)>-1}else a.selected=e.has(u);else if((0,i.BX)(bt(a),e))return void(t.selectedIndex!==o&&(t.selectedIndex=o))}r||-1===t.selectedIndex||(t.selectedIndex=-1)}}function bt(t){return"_value"in t?t._value:t.value}const Et=["ctrl","shift","alt","meta"],Tt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Et.some((n=>t[`${n}Key`]&&!e.includes(n)))},It=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=Tt[e[t]];if(r&&r(n,e))return}return t(n,...r)})},St={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ct=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||St[t]===r))?t(n):void 0})},At=(0,i.X$)({patchProp:rt},l);let kt;function Rt(){return kt||(kt=(0,r.K9)(At))}const Ot=(...t)=>{const e=Rt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=xt(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Nt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Nt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function xt(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){"use strict";n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return K},BX:function(){return nt},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return c},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return u},NO:function(){return a},Oj:function(){return s},PT:function(){return x},Qd:function(){return A},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return W},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return it},yI:function(){return k},yL:function(){return T},yQ:function(){return V}});n(4114);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}const i={},s=[],o=()=>{},a=()=>!1,u=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),c=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),v=t=>"[object Date]"===S(t),y=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),k=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,x=O((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),D=/\B([A-Z])/g,P=O((t=>t.replace(D,"-$1").toLowerCase())),L=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=O((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),F=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},V=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(q);function W(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?X(r):W(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||E(t))return t}const G=/;(?![^(]*\))/g,H=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(G).forEach((t=>{if(t){const n=t.split(H);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>w(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!_(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[ot(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>ot(t)))}:b(e)?ot(e):!E(e)||p(e)||A(e)?e:String(e),ot=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},7874:function(t,e,n){var r=n(8606),i=r.Symbol;t.exports=i},9315:function(t,e,n){var r=n(7874),i=n(38),s=n(5677),o="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function c(t){return null==t?void 0===t?a:o:u&&u in Object(t)?i(t):s(t)}t.exports=c},4867:function(t,e,n){var r=n(5761),i=/^\s+/;function s(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=s},6903:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},38:function(t,e,n){var r=n(7874),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0;function u(t){var e=s.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var i=o.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=u},5677:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},8606:function(t,e,n){var r=n(6903),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},5761:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},896:function(t,e,n){var r=n(9692),i=n(1087),s=n(4243),o="Expected a function",a=Math.max,u=Math.min;function c(t,e,n){var c,l,h,f,d,p,g=0,m=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function _(e){var n=c,r=l;return c=l=void 0,g=e,f=t.apply(r,n),f}function w(t){return g=t,d=setTimeout(T,e),m?_(t):f}function b(t){var n=t-p,r=t-g,i=e-n;return v?u(i,h-r):i}function E(t){var n=t-p,r=t-g;return void 0===p||n>=e||n<0||v&&r>=h}function T(){var t=i();if(E(t))return I(t);d=setTimeout(T,b(t))}function I(t){return d=void 0,y&&c?_(t):(c=l=void 0,f)}function S(){void 0!==d&&clearTimeout(d),g=0,c=p=l=d=void 0}function C(){return void 0===d?f:I(i())}function A(){var t=i(),n=E(t);if(c=arguments,l=this,p=t,n){if(void 0===d)return w(p);if(v)return clearTimeout(d),d=setTimeout(T,e),_(p)}return void 0===d&&(d=setTimeout(T,e)),f}return e=s(e)||0,r(n)&&(m=!!n.leading,v="maxWait"in n,h=v?a(s(n.maxWait)||0,e):h,y="trailing"in n?!!n.trailing:y),A.cancel=S,A.flush=C,A}t.exports=c},9692:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},5091:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},9299:function(t,e,n){var r=n(9315),i=n(5091),s="[object Symbol]";function o(t){return"symbol"==typeof t||i(t)&&r(t)==s}t.exports=o},8626:function(t,e,n){var r;t=n.nmd(t),n(4114),function(){var i,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",d=1,p=2,g=4,m=1,v=2,y=1,_=2,w=4,b=8,E=16,T=32,I=64,S=128,C=256,A=512,k=30,R="...",O=800,N=16,x=1,D=2,P=3,L=1/0,M=9007199254740991,U=17976931348623157e292,F=NaN,V=4294967295,j=V-1,$=V>>>1,B=[["ary",S],["bind",y],["bindKey",_],["curry",b],["curryRight",E],["flip",A],["partial",T],["partialRight",I],["rearg",C]],z="[object Arguments]",q="[object Array]",K="[object AsyncFunction]",W="[object Boolean]",G="[object Date]",H="[object DOMException]",Q="[object Error]",X="[object Function]",Y="[object GeneratorFunction]",J="[object Map]",Z="[object Number]",tt="[object Null]",et="[object Object]",nt="[object Promise]",rt="[object Proxy]",it="[object RegExp]",st="[object Set]",ot="[object String]",at="[object Symbol]",ut="[object Undefined]",ct="[object WeakMap]",lt="[object WeakSet]",ht="[object ArrayBuffer]",ft="[object DataView]",dt="[object Float32Array]",pt="[object Float64Array]",gt="[object Int8Array]",mt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",bt="[object Uint32Array]",Et=/\b__p \+= '';/g,Tt=/\b(__p \+=) '' \+/g,It=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,At=RegExp(St.source),kt=RegExp(Ct.source),Rt=/<%-([\s\S]+?)%>/g,Ot=/<%([\s\S]+?)%>/g,Nt=/<%=([\s\S]+?)%>/g,xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/,Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Lt.source),Ut=/^\s+/,Ft=/\s/,Vt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,jt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/[()=,{}\[\]\/\s]/,qt=/\\(\\)?/g,Kt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wt=/\w*$/,Gt=/^[-+]0x[0-9a-f]+$/i,Ht=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Xt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee="\\ud800-\\udfff",ne="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ie="\\u20d0-\\u20ff",se=ne+re+ie,oe="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",he=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fe="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",pe=ue+ce+le+he,ge="['’]",me="["+ee+"]",ve="["+pe+"]",ye="["+se+"]",_e="\\d+",we="["+oe+"]",be="["+ae+"]",Ee="[^"+ee+pe+_e+oe+ae+fe+"]",Te="\\ud83c[\\udffb-\\udfff]",Ie="(?:"+ye+"|"+Te+")",Se="[^"+ee+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="["+fe+"]",Re="\\u200d",Oe="(?:"+be+"|"+Ee+")",Ne="(?:"+ke+"|"+Ee+")",xe="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",De="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ie+"?",Le="["+de+"]?",Me="(?:"+Re+"(?:"+[Se,Ce,Ae].join("|")+")"+Le+Pe+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ve=Le+Pe+Me,je="(?:"+[we,Ce,Ae].join("|")+")"+Ve,$e="(?:"+[Se+ye+"?",ye,Ce,Ae,me].join("|")+")",Be=RegExp(ge,"g"),ze=RegExp(ye,"g"),qe=RegExp(Te+"(?="+Te+")|"+$e+Ve,"g"),Ke=RegExp([ke+"?"+be+"+"+xe+"(?="+[ve,ke,"$"].join("|")+")",Ne+"+"+De+"(?="+[ve,ke+Oe,"$"].join("|")+")",ke+"?"+Oe+"+"+xe,ke+"+"+De,Fe,Ue,_e,je].join("|"),"g"),We=RegExp("["+Re+ee+se+de+"]"),Ge=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,He=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qe=-1,Xe={};Xe[dt]=Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=!0,Xe[z]=Xe[q]=Xe[ht]=Xe[W]=Xe[ft]=Xe[G]=Xe[Q]=Xe[X]=Xe[J]=Xe[Z]=Xe[et]=Xe[it]=Xe[st]=Xe[ot]=Xe[ct]=!1;var Ye={};Ye[z]=Ye[q]=Ye[ht]=Ye[ft]=Ye[W]=Ye[G]=Ye[dt]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[J]=Ye[Z]=Ye[et]=Ye[it]=Ye[st]=Ye[ot]=Ye[at]=Ye[yt]=Ye[_t]=Ye[wt]=Ye[bt]=!0,Ye[Q]=Ye[X]=Ye[ct]=!1;var Je={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},en={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,sn="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,on="object"==typeof self&&self&&self.Object===Object&&self,an=sn||on||Function("return this")(),un=e&&!e.nodeType&&e,cn=un&&t&&!t.nodeType&&t,ln=cn&&cn.exports===un,hn=ln&&sn.process,fn=function(){try{var t=cn&&cn.require&&cn.require("util").types;return t||hn&&hn.binding&&hn.binding("util")}catch(e){}}(),dn=fn&&fn.isArrayBuffer,pn=fn&&fn.isDate,gn=fn&&fn.isMap,mn=fn&&fn.isRegExp,vn=fn&&fn.isSet,yn=fn&&fn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,s=null==t?0:t.length;while(++i<s){var o=t[i];e(r,o,n(o),t)}return r}function bn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function En(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function Tn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function In(t,e){var n=-1,r=null==t?0:t.length,i=0,s=[];while(++n<r){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function Cn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function An(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function kn(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Rn(t,e,n,r){var i=-1,s=null==t?0:t.length;r&&s&&(n=t[++i]);while(++i<s)n=e(n,t[i],i,t);return n}function On(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Nn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var xn=$n("length");function Dn(t){return t.split("")}function Pn(t){return t.match(Bt)||[]}function Ln(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,s=n+(r?1:-1);while(r?s--:++s<i)if(e(t[s],s,t))return s;return-1}function Un(t,e,n){return e===e?dr(t,e,n):Mn(t,Vn,n)}function Fn(t,e,n,r){var i=n-1,s=t.length;while(++i<s)if(r(t[i],e))return i;return-1}function Vn(t){return t!==t}function jn(t,e){var n=null==t?0:t.length;return n?Kn(t,e)/n:F}function $n(t){return function(e){return null==e?i:e[t]}}function Bn(t){return function(e){return null==t?i:t[e]}}function zn(t,e,n,r,i){return i(t,(function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)})),n}function qn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Kn(t,e){var n,r=-1,s=t.length;while(++r<s){var o=e(t[r]);o!==i&&(n=n===i?o:n+o)}return n}function Wn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Gn(t,e){return An(e,(function(e){return[e,t[e]]}))}function Hn(t){return t?t.slice(0,vr(t)+1).replace(Ut,""):t}function Qn(t){return function(e){return t(e)}}function Xn(t,e){return An(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Jn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function Zn(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var er=Bn(Je),nr=Bn(Ze);function rr(t){return"\\"+en[t]}function ir(t,e){return null==t?i:t[e]}function sr(t){return We.test(t)}function or(t){return Ge.test(t)}function ar(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function cr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n];o!==e&&o!==f||(t[n]=f,s[i++]=n)}return s}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function pr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return sr(t)?_r(t):xn(t)}function mr(t){return sr(t)?wr(t):Dn(t)}function vr(t){var e=t.length;while(e--&&Ft.test(t.charAt(e)));return e}var yr=Bn(tn);function _r(t){var e=qe.lastIndex=0;while(qe.test(t))++e;return e}function wr(t){return t.match(qe)||[]}function br(t){return t.match(Ke)||[]}var Er=function t(e){e=null==e?an:Tr.defaults(an.Object(),e,Tr.pick(an,He));var n=e.Array,r=e.Date,Ft=e.Error,Bt=e.Function,ee=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,se=e.TypeError,oe=n.prototype,ae=Bt.prototype,ue=ne.prototype,ce=e["__core-js_shared__"],le=ae.toString,he=ue.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ue.toString,ge=le.call(ne),me=an._,ve=re("^"+le.call(he).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=ln?e.Buffer:i,_e=e.Symbol,we=e.Uint8Array,be=ye?ye.allocUnsafe:i,Ee=cr(ne.getPrototypeOf,ne),Te=ne.create,Ie=ue.propertyIsEnumerable,Se=oe.splice,Ce=_e?_e.isConcatSpreadable:i,Ae=_e?_e.iterator:i,ke=_e?_e.toStringTag:i,Re=function(){try{var t=Go(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Oe=e.clearTimeout!==an.clearTimeout&&e.clearTimeout,Ne=r&&r.now!==an.Date.now&&r.now,xe=e.setTimeout!==an.setTimeout&&e.setTimeout,De=ee.ceil,Pe=ee.floor,Le=ne.getOwnPropertySymbols,Me=ye?ye.isBuffer:i,Ue=e.isFinite,Fe=oe.join,Ve=cr(ne.keys,ne),je=ee.max,$e=ee.min,qe=r.now,Ke=e.parseInt,We=ee.random,Ge=oe.reverse,Je=Go(e,"DataView"),Ze=Go(e,"Map"),tn=Go(e,"Promise"),en=Go(e,"Set"),sn=Go(e,"WeakMap"),on=Go(ne,"create"),un=sn&&new sn,cn={},hn=xa(Je),fn=xa(Ze),xn=xa(tn),Dn=xa(en),Bn=xa(sn),dr=_e?_e.prototype:i,_r=dr?dr.valueOf:i,wr=dr?dr.toString:i;function Er(t){if(Sl(t)&&!ul(t)&&!(t instanceof Ar)){if(t instanceof Cr)return t;if(he.call(t,"__wrapped__"))return Pa(t)}return new Cr(t)}var Ir=function(){function t(){}return function(e){if(!Il(e))return{};if(Te)return Te(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Sr(){}function Cr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function Ar(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function kr(){var t=new Ar(this.__wrapped__);return t.__actions__=ro(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ro(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ro(this.__views__),t}function Rr(){if(this.__filtered__){var t=new Ar(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Or(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,s=Jo(0,i,this.__views__),o=s.start,a=s.end,u=a-o,c=r?a:o-1,l=this.__iteratees__,h=l.length,f=0,d=$e(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Fs(t,this.__actions__);var p=[];t:while(u--&&f<d){c+=e;var g=-1,m=t[c];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==D)m=w;else if(!w){if(_==x)continue t;break t}}p[f++]=m}return p}function Nr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function xr(){this.__data__=on?on(null):{},this.size=0}function Dr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Pr(t){var e=this.__data__;if(on){var n=e[t];return n===l?i:n}return he.call(e,t)?e[t]:i}function Lr(t){var e=this.__data__;return on?e[t]!==i:he.call(e,t)}function Mr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=on&&e===i?l:e,this}function Ur(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Fr(){this.__data__=[],this.size=0}function Vr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function jr(t){var e=this.__data__,n=li(e,t);return n<0?i:e[n][1]}function $r(t){return li(this.__data__,t)>-1}function Br(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function qr(){this.size=0,this.__data__={hash:new Nr,map:new(Ze||Ur),string:new Nr}}function Kr(t){var e=Ko(this,t)["delete"](t);return this.size-=e?1:0,e}function Wr(t){return Ko(this,t).get(t)}function Gr(t){return Ko(this,t).has(t)}function Hr(t,e){var n=Ko(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Qr(t){var e=-1,n=null==t?0:t.length;this.__data__=new zr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,l),this}function Yr(t){return this.__data__.has(t)}function Jr(t){var e=this.__data__=new Ur(t);this.size=e.size}function Zr(){this.__data__=new Ur,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Ze||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=ul(t),r=!n&&al(t),i=!n&&!r&&dl(t),s=!n&&!r&&!i&&jl(t),o=n||r||i||s,a=o?Wn(t.length,ie):[],u=a.length;for(var c in t)!e&&!he.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||oa(c,u))||a.push(c);return a}function si(t){var e=t.length;return e?t[vs(0,e-1)]:i}function oi(t,e){return Ra(ro(t),mi(e,0,t.length))}function ai(t){return Ra(ro(t))}function ui(t,e,n){(n!==i&&!il(t[e],n)||n===i&&!(e in t))&&pi(t,e,n)}function ci(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==i||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,s){e(r,t,n(t),s)})),r}function fi(t,e){return t&&io(e,Eh(e),t)}function di(t,e){return t&&io(e,Th(e),t)}function pi(t,e,n){"__proto__"==e&&Re?Re(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,s=e.length,o=n(s),a=null==t;while(++r<s)o[r]=a?i:mh(t,e[r]);return o}function mi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function vi(t,e,n,r,s,o){var a,u=e&d,c=e&p,l=e&g;if(n&&(a=s?n(t,r,s,o):n(t)),a!==i)return a;if(!Il(t))return t;var h=ul(t);if(h){if(a=ea(t),!u)return ro(t,a)}else{var f=Yo(t),m=f==X||f==Y;if(dl(t))return Gs(t,u);if(f==et||f==z||m&&!s){if(a=c||m?{}:na(t),!u)return c?oo(t,di(a,t)):so(t,fi(a,t))}else{if(!Ye[f])return s?t:{};a=ra(t,f,u)}}o||(o=new Jr);var v=o.get(t);if(v)return v;o.set(t,a),Ul(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,o))})):Cl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,o))}));var y=l?c?jo:Vo:c?Th:Eh,_=h?i:y(t);return bn(_||t,(function(r,i){_&&(i=r,r=t[i]),ci(a,i,vi(r,e,n,i,t,o))})),a}function yi(t){var e=Eh(t);return function(n){return _i(n,t,e)}}function _i(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var s=n[r],o=e[s],a=t[s];if(a===i&&!(s in t)||!o(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new se(u);return Sa((function(){t.apply(i,n)}),e)}function bi(t,e,n,r){var i=-1,s=Sn,a=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=An(e,Qn(n))),r?(s=Cn,a=!1):e.length>=o&&(s=Yn,a=!1,e=new Qr(e));t:while(++i<u){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;c.push(h)}else s(e,f,r)||c.push(h)}return c}Er.templateSettings={escape:Rt,evaluate:Ot,interpolate:Nt,variable:"",imports:{_:Er}},Er.prototype=Sr.prototype,Er.prototype.constructor=Er,Cr.prototype=Ir(Sr.prototype),Cr.prototype.constructor=Cr,Ar.prototype=Ir(Sr.prototype),Ar.prototype.constructor=Ar,Nr.prototype.clear=xr,Nr.prototype["delete"]=Dr,Nr.prototype.get=Pr,Nr.prototype.has=Lr,Nr.prototype.set=Mr,Ur.prototype.clear=Fr,Ur.prototype["delete"]=Vr,Ur.prototype.get=jr,Ur.prototype.has=$r,Ur.prototype.set=Br,zr.prototype.clear=qr,zr.prototype["delete"]=Kr,zr.prototype.get=Wr,zr.prototype.has=Gr,zr.prototype.set=Hr,Qr.prototype.add=Qr.prototype.push=Xr,Qr.prototype.has=Yr,Jr.prototype.clear=Zr,Jr.prototype["delete"]=ti,Jr.prototype.get=ei,Jr.prototype.has=ni,Jr.prototype.set=ri;var Ei=co(Ni),Ti=co(xi,!0);function Ii(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Si(t,e,n){var r=-1,s=t.length;while(++r<s){var o=t[r],a=e(o);if(null!=a&&(u===i?a===a&&!Vl(a):n(a,u)))var u=a,c=o}return c}function Ci(t,e,n,r){var s=t.length;n=Hl(n),n<0&&(n=-n>s?0:s+n),r=r===i||r>s?s:Hl(r),r<0&&(r+=s),r=n>r?0:Ql(r);while(n<r)t[n++]=e;return t}function Ai(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function ki(t,e,n,r,i){var s=-1,o=t.length;n||(n=sa),i||(i=[]);while(++s<o){var a=t[s];e>0&&n(a)?e>1?ki(a,e-1,n,r,i):kn(i,a):r||(i[i.length]=a)}return i}var Ri=lo(),Oi=lo(!0);function Ni(t,e){return t&&Ri(t,e,Eh)}function xi(t,e){return t&&Oi(t,e,Eh)}function Di(t,e){return In(e,(function(e){return bl(t[e])}))}function Pi(t,e){e=zs(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[Na(e[n++])];return n&&n==r?t:i}function Li(t,e,n){var r=e(t);return ul(t)?r:kn(r,n(t))}function Mi(t){return null==t?t===i?ut:tt:ke&&ke in ne(t)?Ho(t):_a(t)}function Ui(t,e){return t>e}function Fi(t,e){return null!=t&&he.call(t,e)}function Vi(t,e){return null!=t&&e in ne(t)}function ji(t,e,n){return t>=$e(e,n)&&t<je(e,n)}function $i(t,e,r){var s=r?Cn:Sn,o=t[0].length,a=t.length,u=a,c=n(a),l=1/0,h=[];while(u--){var f=t[u];u&&e&&(f=An(f,Qn(e))),l=$e(f.length,l),c[u]=!r&&(e||o>=120&&f.length>=120)?new Qr(u&&f):i}f=t[0];var d=-1,p=c[0];t:while(++d<o&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):s(h,m,r))){u=a;while(--u){var v=c[u];if(!(v?Yn(v,m):s(t[u],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function Bi(t,e,n,r){return Ni(t,(function(t,i,s){e(r,n(t),i,s)})),r}function zi(t,e,n){e=zs(e,t),t=ba(t,e);var r=null==t?t:t[Na(su(e))];return null==r?i:_n(r,t,n)}function qi(t){return Sl(t)&&Mi(t)==z}function Ki(t){return Sl(t)&&Mi(t)==ht}function Wi(t){return Sl(t)&&Mi(t)==G}function Gi(t,e,n,r,i){return t===e||(null==t||null==e||!Sl(t)&&!Sl(e)?t!==t&&e!==e:Hi(t,e,n,r,Gi,i))}function Hi(t,e,n,r,i,s){var o=ul(t),a=ul(e),u=o?q:Yo(t),c=a?q:Yo(e);u=u==z?et:u,c=c==z?et:c;var l=u==et,h=c==et,f=u==c;if(f&&dl(t)){if(!dl(e))return!1;o=!0,l=!1}if(f&&!l)return s||(s=new Jr),o||jl(t)?Lo(t,e,n,r,i,s):Mo(t,e,u,n,r,i,s);if(!(n&m)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,v=p?e.value():e;return s||(s=new Jr),i(g,v,n,r,s)}}return!!f&&(s||(s=new Jr),Uo(t,e,n,r,i,s))}function Qi(t){return Sl(t)&&Yo(t)==J}function Xi(t,e,n,r){var s=n.length,o=s,a=!r;if(null==t)return!o;t=ne(t);while(s--){var u=n[s];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++s<o){u=n[s];var c=u[0],l=t[c],h=u[1];if(a&&u[2]){if(l===i&&!(c in t))return!1}else{var f=new Jr;if(r)var d=r(l,h,c,t,e,f);if(!(d===i?Gi(h,l,m|v,r,f):d))return!1}}return!0}function Yi(t){if(!Il(t)||ha(t))return!1;var e=bl(t)?ve:Qt;return e.test(xa(t))}function Ji(t){return Sl(t)&&Mi(t)==it}function Zi(t){return Sl(t)&&Yo(t)==st}function ts(t){return Sl(t)&&Tl(t.length)&&!!Xe[Mi(t)]}function es(t){return"function"==typeof t?t:null==t?Nf:"object"==typeof t?ul(t)?as(t[0],t[1]):os(t):qf(t)}function ns(t){if(!da(t))return Ve(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function rs(t){if(!Il(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function is(t,e){return t<e}function ss(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,s){i[++r]=e(t,n,s)})),i}function os(t){var e=Wo(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function as(t,e){return ua(t)&&pa(e)?ga(Na(t),e):function(n){var r=mh(n,t);return r===i&&r===e?yh(n,t):Gi(e,r,m|v)}}function us(t,e,n,r,s){t!==e&&Ri(e,(function(o,a){if(s||(s=new Jr),Il(o))cs(t,e,a,n,us,r,s);else{var u=r?r(Ta(t,a),o,a+"",t,e,s):i;u===i&&(u=o),ui(t,a,u)}}),Th)}function cs(t,e,n,r,s,o,a){var u=Ta(t,n),c=Ta(e,n),l=a.get(c);if(l)ui(t,n,l);else{var h=o?o(u,c,n+"",t,e,a):i,f=h===i;if(f){var d=ul(c),p=!d&&dl(c),g=!d&&!p&&jl(c);h=c,d||p||g?ul(u)?h=u:hl(u)?h=ro(u):p?(f=!1,h=Gs(c,!0)):g?(f=!1,h=Js(c,!0)):h=[]:Pl(c)||al(c)?(h=u,al(u)?h=Yl(u):Il(u)&&!bl(u)||(h=na(c))):f=!1}f&&(a.set(c,h),s(h,c,r,o,a),a["delete"](c)),ui(t,n,h)}}function ls(t,e){var n=t.length;if(n)return e+=e<0?n:0,oa(e,n)?t[e]:i}function hs(t,e,n){e=e.length?An(e,(function(t){return ul(t)?function(e){return Pi(e,1===t.length?t[0]:t)}:t})):[Nf];var r=-1;e=An(e,Qn(qo()));var i=ss(t,(function(t,n,i){var s=An(e,(function(e){return e(t)}));return{criteria:s,index:++r,value:t}}));return qn(i,(function(t,e){return to(t,e,n)}))}function fs(t,e){return ds(t,e,(function(e,n){return yh(t,n)}))}function ds(t,e,n){var r=-1,i=e.length,s={};while(++r<i){var o=e[r],a=Pi(t,o);n(a,o)&&Ts(s,zs(o,t),a)}return s}function ps(t){return function(e){return Pi(e,t)}}function gs(t,e,n,r){var i=r?Fn:Un,s=-1,o=e.length,a=t;t===e&&(e=ro(e)),n&&(a=An(t,Qn(n)));while(++s<o){var u=0,c=e[s],l=n?n(c):c;while((u=i(a,l,u,r))>-1)a!==t&&Se.call(a,u,1),Se.call(t,u,1)}return t}function ms(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==s){var s=i;oa(i)?Se.call(t,i,1):Ls(t,i)}}return t}function vs(t,e){return t+Pe(We()*(e-t+1))}function ys(t,e,r,i){var s=-1,o=je(De((e-t)/(r||1)),0),a=n(o);while(o--)a[i?o:++s]=t,t+=r;return a}function _s(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=Pe(e/2),e&&(t+=t)}while(e);return n}function ws(t,e){return Ca(wa(t,e,Nf),t+"")}function bs(t){return si($h(t))}function Es(t,e){var n=$h(t);return Ra(n,mi(e,0,n.length))}function Ts(t,e,n,r){if(!Il(t))return t;e=zs(e,t);var s=-1,o=e.length,a=o-1,u=t;while(null!=u&&++s<o){var c=Na(e[s]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(s!=a){var h=u[c];l=r?r(h,c,u):i,l===i&&(l=Il(h)?h:oa(e[s+1])?[]:{})}ci(u,c,l),u=u[c]}return t}var Is=un?function(t,e){return un.set(t,e),t}:Nf,Ss=Re?function(t,e){return Re(t,"toString",{configurable:!0,enumerable:!1,value:Af(e),writable:!0})}:Nf;function Cs(t){return Ra($h(t))}function As(t,e,r){var i=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;var o=n(s);while(++i<s)o[i]=t[i+e];return o}function ks(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Rs(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=$){while(r<i){var s=r+i>>>1,o=t[s];null!==o&&!Vl(o)&&(n?o<=e:o<e)?r=s+1:i=s}return i}return Os(t,e,Nf,n)}function Os(t,e,n,r){var s=0,o=null==t?0:t.length;if(0===o)return 0;e=n(e);var a=e!==e,u=null===e,c=Vl(e),l=e===i;while(s<o){var h=Pe((s+o)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=Vl(f);if(a)var v=r||g;else v=l?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?s=h+1:o=h}return $e(o,j)}function Ns(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n],a=e?e(o):o;if(!n||!il(a,u)){var u=a;s[i++]=0===o?0:o}}return s}function xs(t){return"number"==typeof t?t:Vl(t)?F:+t}function Ds(t){if("string"==typeof t)return t;if(ul(t))return An(t,Ds)+"";if(Vl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ps(t,e,n){var r=-1,i=Sn,s=t.length,a=!0,u=[],c=u;if(n)a=!1,i=Cn;else if(s>=o){var l=e?null:Ro(t);if(l)return hr(l);a=!1,i=Yn,c=new Qr}else c=e?[]:u;t:while(++r<s){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=c.length;while(d--)if(c[d]===f)continue t;e&&c.push(f),u.push(h)}else i(c,f,n)||(c!==u&&c.push(f),u.push(h))}return u}function Ls(t,e){return e=zs(e,t),t=ba(t,e),null==t||delete t[Na(su(e))]}function Ms(t,e,n,r){return Ts(t,e,n(Pi(t,e)),r)}function Us(t,e,n,r){var i=t.length,s=r?i:-1;while((r?s--:++s<i)&&e(t[s],s,t));return n?As(t,r?0:s,r?s+1:i):As(t,r?s+1:0,r?i:s)}function Fs(t,e){var n=t;return n instanceof Ar&&(n=n.value()),Rn(e,(function(t,e){return e.func.apply(e.thisArg,kn([t],e.args))}),n)}function Vs(t,e,r){var i=t.length;if(i<2)return i?Ps(t[0]):[];var s=-1,o=n(i);while(++s<i){var a=t[s],u=-1;while(++u<i)u!=s&&(o[s]=bi(o[s]||a,t[u],e,r))}return Ps(ki(o,1),e,r)}function js(t,e,n){var r=-1,s=t.length,o=e.length,a={};while(++r<s){var u=r<o?e[r]:i;n(a,t[r],u)}return a}function $s(t){return hl(t)?t:[]}function Bs(t){return"function"==typeof t?t:Nf}function zs(t,e){return ul(t)?t:ua(t,e)?[t]:Oa(Zl(t))}var qs=ws;function Ks(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:As(t,e,n)}var Ws=Oe||function(t){return an.clearTimeout(t)};function Gs(t,e){if(e)return t.slice();var n=t.length,r=be?be(n):new t.constructor(n);return t.copy(r),r}function Hs(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Qs(t,e){var n=e?Hs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Xs(t){var e=new t.constructor(t.source,Wt.exec(t));return e.lastIndex=t.lastIndex,e}function Ys(t){return _r?ne(_r.call(t)):{}}function Js(t,e){var n=e?Hs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Zs(t,e){if(t!==e){var n=t!==i,r=null===t,s=t===t,o=Vl(t),a=e!==i,u=null===e,c=e===e,l=Vl(e);if(!u&&!l&&!o&&t>e||o&&a&&c&&!u&&!l||r&&a&&c||!n&&c||!s)return 1;if(!r&&!o&&!l&&t<e||l&&n&&s&&!r&&!o||u&&n&&s||!a&&s||!c)return-1}return 0}function to(t,e,n){var r=-1,i=t.criteria,s=e.criteria,o=i.length,a=n.length;while(++r<o){var u=Zs(i[r],s[r]);if(u){if(r>=a)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}function eo(t,e,r,i){var s=-1,o=t.length,a=r.length,u=-1,c=e.length,l=je(o-a,0),h=n(c+l),f=!i;while(++u<c)h[u]=e[u];while(++s<a)(f||s<o)&&(h[r[s]]=t[s]);while(l--)h[u++]=t[s++];return h}function no(t,e,r,i){var s=-1,o=t.length,a=-1,u=r.length,c=-1,l=e.length,h=je(o-u,0),f=n(h+l),d=!i;while(++s<h)f[s]=t[s];var p=s;while(++c<l)f[p+c]=e[c];while(++a<u)(d||s<o)&&(f[p+r[a]]=t[s++]);return f}function ro(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function io(t,e,n,r){var s=!n;n||(n={});var o=-1,a=e.length;while(++o<a){var u=e[o],c=r?r(n[u],t[u],u,n,t):i;c===i&&(c=t[u]),s?pi(n,u,c):ci(n,u,c)}return n}function so(t,e){return io(t,Qo(t),e)}function oo(t,e){return io(t,Xo(t),e)}function ao(t,e){return function(n,r){var i=ul(n)?wn:hi,s=e?e():{};return i(n,t,qo(r,2),s)}}function uo(t){return ws((function(e,n){var r=-1,s=n.length,o=s>1?n[s-1]:i,a=s>2?n[2]:i;o=t.length>3&&"function"==typeof o?(s--,o):i,a&&aa(n[0],n[1],a)&&(o=s<3?i:o,s=1),e=ne(e);while(++r<s){var u=n[r];u&&t(e,u,r,o)}return e}))}function co(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,s=e?i:-1,o=ne(n);while(e?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}function lo(t){return function(e,n,r){var i=-1,s=ne(e),o=r(e),a=o.length;while(a--){var u=o[t?a:++i];if(!1===n(s[u],u,s))break}return e}}function ho(t,e,n){var r=e&y,i=go(t);function s(){var e=this&&this!==an&&this instanceof s?i:t;return e.apply(r?n:this,arguments)}return s}function fo(t){return function(e){e=Zl(e);var n=sr(e)?mr(e):i,r=n?n[0]:e.charAt(0),s=n?Ks(n,1).join(""):e.slice(1);return r[t]()+s}}function po(t){return function(e){return Rn(Ef(Hh(e).replace(Be,"")),t,"")}}function go(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Ir(t.prototype),r=t.apply(n,e);return Il(r)?r:n}}function mo(t,e,r){var s=go(t);function o(){var a=arguments.length,u=n(a),c=a,l=zo(o);while(c--)u[c]=arguments[c];var h=a<3&&u[0]!==l&&u[a-1]!==l?[]:lr(u,l);if(a-=h.length,a<r)return Ao(t,e,_o,o.placeholder,i,u,h,i,i,r-a);var f=this&&this!==an&&this instanceof o?s:t;return _n(f,this,u)}return o}function vo(t){return function(e,n,r){var s=ne(e);if(!ll(e)){var o=qo(n,3);e=Eh(e),n=function(t){return o(s[t],t,s)}}var a=t(e,n,r);return a>-1?s[o?e[a]:a]:i}}function yo(t){return Fo((function(e){var n=e.length,r=n,s=Cr.prototype.thru;t&&e.reverse();while(r--){var o=e[r];if("function"!=typeof o)throw new se(u);if(s&&!a&&"wrapper"==Bo(o))var a=new Cr([],!0)}r=a?r:n;while(++r<n){o=e[r];var c=Bo(o),l="wrapper"==c?$o(o):i;a=l&&la(l[0])&&l[1]==(S|b|T|C)&&!l[4].length&&1==l[9]?a[Bo(l[0])].apply(a,l[3]):1==o.length&&la(o)?a[c]():a.thru(o)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,s=n?e[i].apply(this,t):r;while(++i<n)s=e[i].call(this,s);return s}}))}function _o(t,e,r,s,o,a,u,c,l,h){var f=e&S,d=e&y,p=e&_,g=e&(b|E),m=e&A,v=p?i:go(t);function w(){var i=arguments.length,y=n(i),_=i;while(_--)y[_]=arguments[_];if(g)var b=zo(w),E=tr(y,b);if(s&&(y=eo(y,s,o,g)),a&&(y=no(y,a,u,g)),i-=E,g&&i<h){var T=lr(y,b);return Ao(t,e,_o,w.placeholder,r,y,T,c,l,h-i)}var I=d?r:this,S=p?I[t]:t;return i=y.length,c?y=Ea(y,c):m&&i>1&&y.reverse(),f&&l<i&&(y.length=l),this&&this!==an&&this instanceof w&&(S=v||go(S)),S.apply(I,y)}return w}function wo(t,e){return function(n,r){return Bi(n,t,e(r),{})}}function bo(t,e){return function(n,r){var s;if(n===i&&r===i)return e;if(n!==i&&(s=n),r!==i){if(s===i)return r;"string"==typeof n||"string"==typeof r?(n=Ds(n),r=Ds(r)):(n=xs(n),r=xs(r)),s=t(n,r)}return s}}function Eo(t){return Fo((function(e){return e=An(e,Qn(qo())),ws((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function To(t,e){e=e===i?" ":Ds(e);var n=e.length;if(n<2)return n?_s(e,t):e;var r=_s(e,De(t/gr(e)));return sr(e)?Ks(mr(r),0,t).join(""):r.slice(0,t)}function Io(t,e,r,i){var s=e&y,o=go(t);function a(){var e=-1,u=arguments.length,c=-1,l=i.length,h=n(l+u),f=this&&this!==an&&this instanceof a?o:t;while(++c<l)h[c]=i[c];while(u--)h[c++]=arguments[++e];return _n(f,s?r:this,h)}return a}function So(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=i),e=Gl(e),n===i?(n=e,e=0):n=Gl(n),r=r===i?e<n?1:-1:Gl(r),ys(e,n,r,t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function Ao(t,e,n,r,s,o,a,u,c,l){var h=e&b,f=h?a:i,d=h?i:a,p=h?o:i,g=h?i:o;e|=h?T:I,e&=~(h?I:T),e&w||(e&=~(y|_));var m=[t,e,s,p,f,g,d,u,c,l],v=n.apply(i,m);return la(t)&&Ia(v,m),v.placeholder=r,Aa(v,t,e)}function ko(t){var e=ee[t];return function(t,n){if(t=Xl(t),n=null==n?0:$e(Hl(n),292),n&&Ue(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Ro=en&&1/hr(new en([,-0]))[1]==L?function(t){return new en(t)}:Vf;function Oo(t){return function(e){var n=Yo(e);return n==J?ur(e):n==st?fr(e):Gn(e,t(e))}}function No(t,e,n,r,s,o,a,c){var l=e&_;if(!l&&"function"!=typeof t)throw new se(u);var h=r?r.length:0;if(h||(e&=~(T|I),r=s=i),a=a===i?a:je(Hl(a),0),c=c===i?c:Hl(c),h-=s?s.length:0,e&I){var f=r,d=s;r=s=i}var p=l?i:$o(t),g=[t,e,n,r,s,f,d,o,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],s=g[4],c=g[9]=g[9]===i?l?0:t.length:je(g[9]-h,0),!c&&e&(b|E)&&(e&=~(b|E)),e&&e!=y)m=e==b||e==E?mo(t,e,c):e!=T&&e!=(y|T)||s.length?_o.apply(i,g):Io(t,e,n,r);else var m=ho(t,e,n);var v=p?Is:Ia;return Aa(v(m,g),t,e)}function xo(t,e,n,r){return t===i||il(t,ue[n])&&!he.call(r,n)?e:t}function Do(t,e,n,r,s,o){return Il(t)&&Il(e)&&(o.set(e,t),us(t,e,i,Do,o),o["delete"](e)),t}function Po(t){return Pl(t)?i:t}function Lo(t,e,n,r,s,o){var a=n&m,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=o.get(t),h=o.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&v?new Qr:i;o.set(t,e),o.set(e,t);while(++f<u){var g=t[f],y=e[f];if(r)var _=a?r(y,g,f,e,t,o):r(g,y,f,t,e,o);if(_!==i){if(_)continue;d=!1;break}if(p){if(!Nn(e,(function(t,e){if(!Yn(p,e)&&(g===t||s(g,t,n,r,o)))return p.push(e)}))){d=!1;break}}else if(g!==y&&!s(g,y,n,r,o)){d=!1;break}}return o["delete"](t),o["delete"](e),d}function Mo(t,e,n,r,i,s,o){switch(n){case ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ht:return!(t.byteLength!=e.byteLength||!s(new we(t),new we(e)));case W:case G:case Z:return il(+t,+e);case Q:return t.name==e.name&&t.message==e.message;case it:case ot:return t==e+"";case J:var a=ur;case st:var u=r&m;if(a||(a=hr),t.size!=e.size&&!u)return!1;var c=o.get(t);if(c)return c==e;r|=v,o.set(t,e);var l=Lo(a(t),a(e),r,i,s,o);return o["delete"](t),l;case at:if(_r)return _r.call(t)==_r.call(e)}return!1}function Uo(t,e,n,r,s,o){var a=n&m,u=Vo(t),c=u.length,l=Vo(e),h=l.length;if(c!=h&&!a)return!1;var f=c;while(f--){var d=u[f];if(!(a?d in e:he.call(e,d)))return!1}var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var v=!0;o.set(t,e),o.set(e,t);var y=a;while(++f<c){d=u[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,o):r(_,w,d,t,e,o);if(!(b===i?_===w||s(_,w,n,r,o):b)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var E=t.constructor,T=e.constructor;E==T||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof T&&T instanceof T||(v=!1)}return o["delete"](t),o["delete"](e),v}function Fo(t){return Ca(wa(t,i,Ha),t+"")}function Vo(t){return Li(t,Eh,Qo)}function jo(t){return Li(t,Th,Xo)}var $o=un?function(t){return un.get(t)}:Vf;function Bo(t){var e=t.name+"",n=cn[e],r=he.call(cn,e)?n.length:0;while(r--){var i=n[r],s=i.func;if(null==s||s==t)return i.name}return e}function zo(t){var e=he.call(Er,"placeholder")?Er:t;return e.placeholder}function qo(){var t=Er.iteratee||xf;return t=t===xf?es:t,arguments.length?t(arguments[0],arguments[1]):t}function Ko(t,e){var n=t.__data__;return ca(e)?n["string"==typeof e?"string":"hash"]:n.map}function Wo(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Go(t,e){var n=ir(t,e);return Yi(n)?n:i}function Ho(t){var e=he.call(t,ke),n=t[ke];try{t[ke]=i;var r=!0}catch(o){}var s=pe.call(t);return r&&(e?t[ke]=n:delete t[ke]),s}var Qo=Le?function(t){return null==t?[]:(t=ne(t),In(Le(t),(function(e){return Ie.call(t,e)})))}:Hf,Xo=Le?function(t){var e=[];while(t)kn(e,Qo(t)),t=Ee(t);return e}:Hf,Yo=Mi;function Jo(t,e,n){var r=-1,i=n.length;while(++r<i){var s=n[r],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=$e(e,t+o);break;case"takeRight":t=je(t,e-o);break}}return{start:t,end:e}}function Zo(t){var e=t.match(jt);return e?e[1].split($t):[]}function ta(t,e,n){e=zs(e,t);var r=-1,i=e.length,s=!1;while(++r<i){var o=Na(e[r]);if(!(s=null!=t&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=null==t?0:t.length,!!i&&Tl(i)&&oa(o,i)&&(ul(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Ir(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ht:return Hs(t);case W:case G:return new r(+t);case ft:return Qs(t,n);case dt:case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:return Js(t,n);case J:return new r;case Z:case ot:return new r(t);case it:return Xs(t);case st:return new r;case at:return Ys(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Vt,"{\n/* [wrapped with "+e+"] */\n")}function sa(t){return ul(t)||al(t)||!!(Ce&&t&&t[Ce])}function oa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Il(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&oa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Vl(t))||(Dt.test(t)||!xt.test(t)||null!=e&&t in ne(e))}function ca(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=Bo(t),n=Er[e];if("function"!=typeof n||!(e in Ar.prototype))return!1;if(t===n)return!0;var r=$o(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(Je&&Yo(new Je(new ArrayBuffer(1)))!=ft||Ze&&Yo(new Ze)!=J||tn&&Yo(tn.resolve())!=nt||en&&Yo(new en)!=st||sn&&Yo(new sn)!=ct)&&(Yo=function(t){var e=Mi(t),n=e==et?t.constructor:i,r=n?xa(n):"";if(r)switch(r){case hn:return ft;case fn:return J;case xn:return nt;case Dn:return st;case Bn:return ct}return e});var fa=ce?bl:Qf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function pa(t){return t===t&&!Il(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in ne(n)))}}function ma(t){var e=jc(t,(function(t){return n.size===h&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,s=i<(y|_|S),o=r==S&&n==b||r==S&&n==C&&t[7].length<=e[8]||r==(S|C)&&e[7].length<=e[8]&&n==b;if(!s&&!o)return t;r&y&&(t[2]=e[2],i|=n&y?0:w);var a=e[3];if(a){var u=t[3];t[3]=u?eo(u,a,e[4]):a,t[4]=u?lr(t[3],f):e[4]}return a=e[5],a&&(u=t[5],t[5]=u?no(u,a,e[6]):a,t[6]=u?lr(t[5],f):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:$e(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function _a(t){return pe.call(t)}function wa(t,e,r){return e=je(e===i?t.length-1:e,0),function(){var i=arguments,s=-1,o=je(i.length-e,0),a=n(o);while(++s<o)a[s]=i[e+s];s=-1;var u=n(e+1);while(++s<e)u[s]=i[s];return u[e]=r(a),_n(t,this,u)}}function ba(t,e){return e.length<2?t:Pi(t,As(e,0,-1))}function Ea(t,e){var n=t.length,r=$e(e.length,n),s=ro(t);while(r--){var o=e[r];t[r]=oa(o,n)?s[o]:i}return t}function Ta(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Ia=ka(Is),Sa=xe||function(t,e){return an.setTimeout(t,e)},Ca=ka(Ss);function Aa(t,e,n){var r=e+"";return Ca(t,ia(r,Da(Zo(r),n)))}function ka(t){var e=0,n=0;return function(){var r=qe(),s=N-(r-n);if(n=r,s>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Ra(t,e){var n=-1,r=t.length,s=r-1;e=e===i?r:e;while(++n<e){var o=vs(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}var Oa=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Pt,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));function Na(t){if("string"==typeof t||Vl(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function xa(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Da(t,e){return bn(B,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Pa(t){if(t instanceof Ar)return t.clone();var e=new Cr(t.__wrapped__,t.__chain__);return e.__actions__=ro(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function La(t,e,r){e=(r?aa(t,e,r):e===i)?1:je(Hl(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];var o=0,a=0,u=n(De(s/e));while(o<s)u[a++]=As(t,o,o+=e);return u}function Ma(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var s=t[e];s&&(i[r++]=s)}return i}function Ua(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return kn(ul(r)?ro(r):[r],ki(e,1))}var Fa=ws((function(t,e){return hl(t)?bi(t,ki(e,1,hl,!0)):[]})),Va=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),qo(n,2)):[]})),ja=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),i,n):[]}));function $a(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Hl(e),As(t,e<0?0:e,r)):[]}function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Hl(e),e=r-e,As(t,0,e<0?0:e)):[]}function za(t,e){return t&&t.length?Us(t,qo(e,3),!0,!0):[]}function qa(t,e){return t&&t.length?Us(t,qo(e,3),!0):[]}function Ka(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Ci(t,e,n,r)):[]}function Wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Hl(n);return i<0&&(i=je(r+i,0)),Mn(t,qo(e,3),i)}function Ga(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r-1;return n!==i&&(s=Hl(n),s=n<0?je(r+s,0):$e(s,r-1)),Mn(t,qo(e,3),s,!0)}function Ha(t){var e=null==t?0:t.length;return e?ki(t,1):[]}function Qa(t){var e=null==t?0:t.length;return e?ki(t,L):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Hl(e),ki(t,e)):[]}function Ya(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ja(t){return t&&t.length?t[0]:i}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Hl(n);return i<0&&(i=je(r+i,0)),Un(t,e,i)}function tu(t){var e=null==t?0:t.length;return e?As(t,0,-1):[]}var eu=ws((function(t){var e=An(t,$s);return e.length&&e[0]===t[0]?$i(e):[]})),nu=ws((function(t){var e=su(t),n=An(t,$s);return e===su(n)?e=i:n.pop(),n.length&&n[0]===t[0]?$i(n,qo(e,2)):[]})),ru=ws((function(t){var e=su(t),n=An(t,$s);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?$i(n,i,e):[]}));function iu(t,e){return null==t?"":Fe.call(t,e)}function su(t){var e=null==t?0:t.length;return e?t[e-1]:i}function ou(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r;return n!==i&&(s=Hl(n),s=s<0?je(r+s,0):$e(s,r-1)),e===e?pr(t,e,s):Mn(t,Vn,s,!0)}function au(t,e){return t&&t.length?ls(t,Hl(e)):i}var uu=ws(cu);function cu(t,e){return t&&t.length&&e&&e.length?gs(t,e):t}function lu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,qo(n,2)):t}function hu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,i,n):t}var fu=Fo((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return ms(t,An(e,(function(t){return oa(t,n)?+t:t})).sort(Zs)),r}));function du(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],s=t.length;e=qo(e,3);while(++r<s){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r))}return ms(t,i),n}function pu(t){return null==t?t:Ge.call(t)}function gu(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Hl(e),n=n===i?r:Hl(n)),As(t,e,n)):[]}function mu(t,e){return Rs(t,e)}function vu(t,e,n){return Os(t,e,qo(n,2))}function yu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e);if(r<n&&il(t[r],e))return r}return-1}function _u(t,e){return Rs(t,e,!0)}function wu(t,e,n){return Os(t,e,qo(n,2),!0)}function bu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Eu(t){return t&&t.length?Ns(t):[]}function Tu(t,e){return t&&t.length?Ns(t,qo(e,2)):[]}function Iu(t){var e=null==t?0:t.length;return e?As(t,1,e):[]}function Su(t,e,n){return t&&t.length?(e=n||e===i?1:Hl(e),As(t,0,e<0?0:e)):[]}function Cu(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Hl(e),e=r-e,As(t,e<0?0:e,r)):[]}function Au(t,e){return t&&t.length?Us(t,qo(e,3),!1,!0):[]}function ku(t,e){return t&&t.length?Us(t,qo(e,3)):[]}var Ru=ws((function(t){return Ps(ki(t,1,hl,!0))})),Ou=ws((function(t){var e=su(t);return hl(e)&&(e=i),Ps(ki(t,1,hl,!0),qo(e,2))})),Nu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Ps(ki(t,1,hl,!0),i,e)}));function xu(t){return t&&t.length?Ps(t):[]}function Du(t,e){return t&&t.length?Ps(t,qo(e,2)):[]}function Pu(t,e){return e="function"==typeof e?e:i,t&&t.length?Ps(t,i,e):[]}function Lu(t){if(!t||!t.length)return[];var e=0;return t=In(t,(function(t){if(hl(t))return e=je(t.length,e),!0})),Wn(e,(function(e){return An(t,$n(e))}))}function Mu(t,e){if(!t||!t.length)return[];var n=Lu(t);return null==e?n:An(n,(function(t){return _n(e,i,t)}))}var Uu=ws((function(t,e){return hl(t)?bi(t,e):[]})),Fu=ws((function(t){return Vs(In(t,hl))})),Vu=ws((function(t){var e=su(t);return hl(e)&&(e=i),Vs(In(t,hl),qo(e,2))})),ju=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Vs(In(t,hl),i,e)})),$u=ws(Lu);function Bu(t,e){return js(t||[],e||[],ci)}function zu(t,e){return js(t||[],e||[],Ts)}var qu=ws((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Mu(t,n)}));function Ku(t){var e=Er(t);return e.__chain__=!0,e}function Wu(t,e){return e(t),t}function Gu(t,e){return e(t)}var Hu=Fo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,s=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Ar&&oa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Gu,args:[s],thisArg:i}),new Cr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(s)}));function Qu(){return Ku(this)}function Xu(){return new Cr(this.value(),this.__chain__)}function Yu(){this.__values__===i&&(this.__values__=Wl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Ju(){return this}function Zu(t){var e,n=this;while(n instanceof Sr){var r=Pa(n);r.__index__=0,r.__values__=i,e?s.__wrapped__=r:e=r;var s=r;n=n.__wrapped__}return s.__wrapped__=t,e}function tc(){var t=this.__wrapped__;if(t instanceof Ar){var e=t;return this.__actions__.length&&(e=new Ar(this)),e=e.reverse(),e.__actions__.push({func:Gu,args:[pu],thisArg:i}),new Cr(e,this.__chain__)}return this.thru(pu)}function ec(){return Fs(this.__wrapped__,this.__actions__)}var nc=ao((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function rc(t,e,n){var r=ul(t)?Tn:Ii;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}function ic(t,e){var n=ul(t)?In:Ai;return n(t,qo(e,3))}var sc=vo(Wa),oc=vo(Ga);function ac(t,e){return ki(mc(t,e),1)}function uc(t,e){return ki(mc(t,e),L)}function cc(t,e,n){return n=n===i?1:Hl(n),ki(mc(t,e),n)}function lc(t,e){var n=ul(t)?bn:Ei;return n(t,qo(e,3))}function hc(t,e){var n=ul(t)?En:Ti;return n(t,qo(e,3))}var fc=ao((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function dc(t,e,n,r){t=ll(t)?t:$h(t),n=n&&!r?Hl(n):0;var i=t.length;return n<0&&(n=je(i+n,0)),Fl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pc=ws((function(t,e,r){var i=-1,s="function"==typeof e,o=ll(t)?n(t.length):[];return Ei(t,(function(t){o[++i]=s?_n(e,t,r):zi(t,e,r)})),o})),gc=ao((function(t,e,n){pi(t,n,e)}));function mc(t,e){var n=ul(t)?An:ss;return n(t,qo(e,3))}function vc(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),hs(t,e,n))}var yc=ao((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function _c(t,e,n){var r=ul(t)?Rn:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ei)}function wc(t,e,n){var r=ul(t)?On:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ti)}function bc(t,e){var n=ul(t)?In:Ai;return n(t,$c(qo(e,3)))}function Ec(t){var e=ul(t)?si:bs;return e(t)}function Tc(t,e,n){e=(n?aa(t,e,n):e===i)?1:Hl(e);var r=ul(t)?oi:Es;return r(t,e)}function Ic(t){var e=ul(t)?ai:Cs;return e(t)}function Sc(t){if(null==t)return 0;if(ll(t))return Fl(t)?gr(t):t.length;var e=Yo(t);return e==J||e==st?t.size:ns(t).length}function Cc(t,e,n){var r=ul(t)?Nn:ks;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}var Ac=ws((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),hs(t,ki(e,1),[])})),kc=Ne||function(){return an.Date.now()};function Rc(t,e){if("function"!=typeof e)throw new se(u);return t=Hl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Oc(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,No(t,S,i,i,i,i,e)}function Nc(t,e){var n;if("function"!=typeof e)throw new se(u);return t=Hl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var xc=ws((function(t,e,n){var r=y;if(n.length){var i=lr(n,zo(xc));r|=T}return No(t,r,e,n,i)})),Dc=ws((function(t,e,n){var r=y|_;if(n.length){var i=lr(n,zo(Dc));r|=T}return No(e,r,t,n,i)}));function Pc(t,e,n){e=n?i:e;var r=No(t,b,i,i,i,i,i,e);return r.placeholder=Pc.placeholder,r}function Lc(t,e,n){e=n?i:e;var r=No(t,E,i,i,i,i,i,e);return r.placeholder=Lc.placeholder,r}function Mc(t,e,n){var r,s,o,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new se(u);function g(e){var n=r,o=s;return r=s=i,h=e,a=t.apply(o,n),a}function m(t){return h=t,c=Sa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?$e(i,o-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=o}function _(){var t=kc();if(y(t))return w(t);c=Sa(_,v(t))}function w(t){return c=i,p&&r?g(t):(r=s=i,a)}function b(){c!==i&&Ws(c),h=0,r=l=s=c=i}function E(){return c===i?a:w(kc())}function T(){var t=kc(),n=y(t);if(r=arguments,s=this,l=t,n){if(c===i)return m(l);if(d)return Ws(c),c=Sa(_,e),g(l)}return c===i&&(c=Sa(_,e)),a}return e=Xl(e)||0,Il(n)&&(f=!!n.leading,d="maxWait"in n,o=d?je(Xl(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),T.cancel=b,T.flush=E,T}var Uc=ws((function(t,e){return wi(t,1,e)})),Fc=ws((function(t,e,n){return wi(t,Xl(e)||0,n)}));function Vc(t){return No(t,A)}function jc(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(jc.Cache||zr),n}function $c(t){if("function"!=typeof t)throw new se(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Bc(t){return Nc(2,t)}jc.Cache=zr;var zc=qs((function(t,e){e=1==e.length&&ul(e[0])?An(e[0],Qn(qo())):An(ki(e,1),Qn(qo()));var n=e.length;return ws((function(r){var i=-1,s=$e(r.length,n);while(++i<s)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),qc=ws((function(t,e){var n=lr(e,zo(qc));return No(t,T,i,e,n)})),Kc=ws((function(t,e){var n=lr(e,zo(Kc));return No(t,I,i,e,n)})),Wc=Fo((function(t,e){return No(t,C,i,i,i,e)}));function Gc(t,e){if("function"!=typeof t)throw new se(u);return e=e===i?e:Hl(e),ws(t,e)}function Hc(t,e){if("function"!=typeof t)throw new se(u);return e=null==e?0:je(Hl(e),0),ws((function(n){var r=n[e],i=Ks(n,0,e);return r&&kn(i,r),_n(t,this,i)}))}function Qc(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new se(u);return Il(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mc(t,e,{leading:r,maxWait:e,trailing:i})}function Xc(t){return Oc(t,1)}function Yc(t,e){return qc(Bs(e),t)}function Jc(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function Zc(t){return vi(t,g)}function tl(t,e){return e="function"==typeof e?e:i,vi(t,g,e)}function el(t){return vi(t,d|g)}function nl(t,e){return e="function"==typeof e?e:i,vi(t,d|g,e)}function rl(t,e){return null==e||_i(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var sl=Co(Ui),ol=Co((function(t,e){return t>=e})),al=qi(function(){return arguments}())?qi:function(t){return Sl(t)&&he.call(t,"callee")&&!Ie.call(t,"callee")},ul=n.isArray,cl=dn?Qn(dn):Ki;function ll(t){return null!=t&&Tl(t.length)&&!bl(t)}function hl(t){return Sl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Sl(t)&&Mi(t)==W}var dl=Me||Qf,pl=pn?Qn(pn):Wi;function gl(t){return Sl(t)&&1===t.nodeType&&!Pl(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||jl(t)||al(t)))return!t.length;var e=Yo(t);if(e==J||e==st)return!t.size;if(da(t))return!ns(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Gi(t,e)}function yl(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Gi(t,e,i,n):!!r}function _l(t){if(!Sl(t))return!1;var e=Mi(t);return e==Q||e==H||"string"==typeof t.message&&"string"==typeof t.name&&!Pl(t)}function wl(t){return"number"==typeof t&&Ue(t)}function bl(t){if(!Il(t))return!1;var e=Mi(t);return e==X||e==Y||e==K||e==rt}function El(t){return"number"==typeof t&&t==Hl(t)}function Tl(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Il(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sl(t){return null!=t&&"object"==typeof t}var Cl=gn?Qn(gn):Qi;function Al(t,e){return t===e||Xi(t,e,Wo(e))}function kl(t,e,n){return n="function"==typeof n?n:i,Xi(t,e,Wo(e),n)}function Rl(t){return Dl(t)&&t!=+t}function Ol(t){if(fa(t))throw new Ft(a);return Yi(t)}function Nl(t){return null===t}function xl(t){return null==t}function Dl(t){return"number"==typeof t||Sl(t)&&Mi(t)==Z}function Pl(t){if(!Sl(t)||Mi(t)!=et)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Ll=mn?Qn(mn):Ji;function Ml(t){return El(t)&&t>=-M&&t<=M}var Ul=vn?Qn(vn):Zi;function Fl(t){return"string"==typeof t||!ul(t)&&Sl(t)&&Mi(t)==ot}function Vl(t){return"symbol"==typeof t||Sl(t)&&Mi(t)==at}var jl=yn?Qn(yn):ts;function $l(t){return t===i}function Bl(t){return Sl(t)&&Yo(t)==ct}function zl(t){return Sl(t)&&Mi(t)==lt}var ql=Co(is),Kl=Co((function(t,e){return t<=e}));function Wl(t){if(!t)return[];if(ll(t))return Fl(t)?mr(t):ro(t);if(Ae&&t[Ae])return ar(t[Ae]());var e=Yo(t),n=e==J?ur:e==st?hr:$h;return n(t)}function Gl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===L||t===-L){var e=t<0?-1:1;return e*U}return t===t?t:0}function Hl(t){var e=Gl(t),n=e%1;return e===e?n?e-n:e:0}function Ql(t){return t?mi(Hl(t),0,V):0}function Xl(t){if("number"==typeof t)return t;if(Vl(t))return F;if(Il(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Il(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Hn(t);var n=Ht.test(t);return n||Xt.test(t)?rn(t.slice(2),n?2:8):Gt.test(t)?F:+t}function Yl(t){return io(t,Th(t))}function Jl(t){return t?mi(Hl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Ds(t)}var th=uo((function(t,e){if(da(e)||ll(e))io(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ci(t,n,e[n])})),eh=uo((function(t,e){io(e,Th(e),t)})),nh=uo((function(t,e,n,r){io(e,Th(e),t,r)})),rh=uo((function(t,e,n,r){io(e,Eh(e),t,r)})),ih=Fo(gi);function sh(t,e){var n=Ir(t);return null==e?n:fi(n,e)}var oh=ws((function(t,e){t=ne(t);var n=-1,r=e.length,s=r>2?e[2]:i;s&&aa(e[0],e[1],s)&&(r=1);while(++n<r){var o=e[n],a=Th(o),u=-1,c=a.length;while(++u<c){var l=a[u],h=t[l];(h===i||il(h,ue[l])&&!he.call(t,l))&&(t[l]=o[l])}}return t})),ah=ws((function(t){return t.push(i,Do),_n(Ah,i,t)}));function uh(t,e){return Ln(t,qo(e,3),Ni)}function ch(t,e){return Ln(t,qo(e,3),xi)}function lh(t,e){return null==t?t:Ri(t,qo(e,3),Th)}function hh(t,e){return null==t?t:Oi(t,qo(e,3),Th)}function fh(t,e){return t&&Ni(t,qo(e,3))}function dh(t,e){return t&&xi(t,qo(e,3))}function ph(t){return null==t?[]:Di(t,Eh(t))}function gh(t){return null==t?[]:Di(t,Th(t))}function mh(t,e,n){var r=null==t?i:Pi(t,e);return r===i?n:r}function vh(t,e){return null!=t&&ta(t,e,Fi)}function yh(t,e){return null!=t&&ta(t,e,Vi)}var _h=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),Af(Nf)),wh=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),qo),bh=ws(zi);function Eh(t){return ll(t)?ii(t):ns(t)}function Th(t){return ll(t)?ii(t,!0):rs(t)}function Ih(t,e){var n={};return e=qo(e,3),Ni(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Sh(t,e){var n={};return e=qo(e,3),Ni(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var Ch=uo((function(t,e,n){us(t,e,n)})),Ah=uo((function(t,e,n,r){us(t,e,n,r)})),kh=Fo((function(t,e){var n={};if(null==t)return n;var r=!1;e=An(e,(function(e){return e=zs(e,t),r||(r=e.length>1),e})),io(t,jo(t),n),r&&(n=vi(n,d|p|g,Po));var i=e.length;while(i--)Ls(n,e[i]);return n}));function Rh(t,e){return Nh(t,$c(qo(e)))}var Oh=Fo((function(t,e){return null==t?{}:fs(t,e)}));function Nh(t,e){if(null==t)return{};var n=An(jo(t),(function(t){return[t]}));return e=qo(e),ds(t,n,(function(t,n){return e(t,n[0])}))}function xh(t,e,n){e=zs(e,t);var r=-1,s=e.length;s||(s=1,t=i);while(++r<s){var o=null==t?i:t[Na(e[r])];o===i&&(r=s,o=n),t=bl(o)?o.call(t):o}return t}function Dh(t,e,n){return null==t?t:Ts(t,e,n)}function Ph(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ts(t,e,n,r)}var Lh=Oo(Eh),Mh=Oo(Th);function Uh(t,e,n){var r=ul(t),i=r||dl(t)||jl(t);if(e=qo(e,4),null==n){var s=t&&t.constructor;n=i?r?new s:[]:Il(t)&&bl(s)?Ir(Ee(t)):{}}return(i?bn:Ni)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Fh(t,e){return null==t||Ls(t,e)}function Vh(t,e,n){return null==t?t:Ms(t,e,Bs(n))}function jh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ms(t,e,Bs(n),r)}function $h(t){return null==t?[]:Xn(t,Eh(t))}function Bh(t){return null==t?[]:Xn(t,Th(t))}function zh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Xl(n),n=n===n?n:0),e!==i&&(e=Xl(e),e=e===e?e:0),mi(Xl(t),e,n)}function qh(t,e,n){return e=Gl(e),n===i?(n=e,e=0):n=Gl(n),t=Xl(t),ji(t,e,n)}function Kh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Gl(t),e===i?(e=t,t=0):e=Gl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var s=We();return $e(t+s*(e-t+nn("1e-"+((s+"").length-1))),e)}return vs(t,e)}var Wh=po((function(t,e,n){return e=e.toLowerCase(),t+(n?Gh(e):e)}));function Gh(t){return bf(Zl(t).toLowerCase())}function Hh(t){return t=Zl(t),t&&t.replace(Jt,er).replace(ze,"")}function Qh(t,e,n){t=Zl(t),e=Ds(e);var r=t.length;n=n===i?r:mi(Hl(n),0,r);var s=n;return n-=e.length,n>=0&&t.slice(n,s)==e}function Xh(t){return t=Zl(t),t&&kt.test(t)?t.replace(Ct,nr):t}function Yh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Lt,"\\$&"):t}var Jh=po((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=po((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=fo("toLowerCase");function ef(t,e,n){t=Zl(t),e=Hl(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return To(Pe(i),n)+t+To(De(i),n)}function nf(t,e,n){t=Zl(t),e=Hl(e);var r=e?gr(t):0;return e&&r<e?t+To(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Hl(e);var r=e?gr(t):0;return e&&r<e?To(e-r,n)+t:t}function sf(t,e,n){return n||null==e?e=0:e&&(e=+e),Ke(Zl(t).replace(Ut,""),e||0)}function of(t,e,n){return e=(n?aa(t,e,n):e===i)?1:Hl(e),_s(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=po((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function cf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=i),n=n===i?V:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Ll(e))&&(e=Ds(e),!e&&sr(t))?Ks(mr(t),0,n):t.split(e,n)):[]}var lf=po((function(t,e,n){return t+(n?" ":"")+bf(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Hl(n),0,t.length),e=Ds(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=Er.templateSettings;n&&aa(t,e,n)&&(e=i),t=Zl(t),e=nh({},e,r,xo);var s,o,a=nh({},e.imports,r.imports,xo),u=Eh(a),l=Xn(a,u),h=0,f=e.interpolate||Zt,d="__p += '",p=re((e.escape||Zt).source+"|"+f.source+"|"+(f===Nt?Kt:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),g="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qe+"]")+"\n";t.replace(p,(function(e,n,r,i,a,u){return r||(r=i),d+=t.slice(h,u).replace(te,rr),n&&(s=!0,d+="' +\n__e("+n+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),d+="';\n";var m=he.call(e,"variable")&&e.variable;if(m){if(zt.test(m))throw new Ft(c)}else d="with (obj) {\n"+d+"\n}\n";d=(o?d.replace(Et,""):d).replace(Tt,"$1").replace(It,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=Tf((function(){return Bt(u,g+"return "+d).apply(i,l)}));if(v.source=d,_l(v))throw v;return v}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===i))return Hn(t);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=mr(e),o=Jn(r,s),a=Zn(r,s)+1;return Ks(r,o,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.slice(0,vr(t)+1);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Zn(r,mr(e))+1;return Ks(r,0,s).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.replace(Ut,"");if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Jn(r,mr(e));return Ks(r,s).join("")}function yf(t,e){var n=k,r=R;if(Il(e)){var s="separator"in e?e.separator:s;n="length"in e?Hl(e.length):n,r="omission"in e?Ds(e.omission):r}t=Zl(t);var o=t.length;if(sr(t)){var a=mr(t);o=a.length}if(n>=o)return t;var u=n-gr(r);if(u<1)return r;var c=a?Ks(a,0,u).join(""):t.slice(0,u);if(s===i)return c+r;if(a&&(u+=c.length-u),Ll(s)){if(t.slice(u).search(s)){var l,h=c;s.global||(s=re(s.source,Zl(Wt.exec(s))+"g")),s.lastIndex=0;while(l=s.exec(h))var f=l.index;c=c.slice(0,f===i?u:f)}}else if(t.indexOf(Ds(s),u)!=u){var d=c.lastIndexOf(s);d>-1&&(c=c.slice(0,d))}return c+r}function _f(t){return t=Zl(t),t&&At.test(t)?t.replace(St,yr):t}var wf=po((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),bf=fo("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?i:e,e===i?or(t)?br(t):Pn(t):t.match(e)||[]}var Tf=ws((function(t,e){try{return _n(t,i,e)}catch(n){return _l(n)?n:new Ft(n)}})),If=Fo((function(t,e){return bn(e,(function(e){e=Na(e),pi(t,e,xc(t[e],t))})),t}));function Sf(t){var e=null==t?0:t.length,n=qo();return t=e?An(t,(function(t){if("function"!=typeof t[1])throw new se(u);return[n(t[0]),t[1]]})):[],ws((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function Cf(t){return yi(vi(t,d))}function Af(t){return function(){return t}}function kf(t,e){return null==t||t!==t?e:t}var Rf=yo(),Of=yo(!0);function Nf(t){return t}function xf(t){return es("function"==typeof t?t:vi(t,d))}function Df(t){return os(vi(t,d))}function Pf(t,e){return as(t,vi(e,d))}var Lf=ws((function(t,e){return function(n){return zi(n,t,e)}})),Mf=ws((function(t,e){return function(n){return zi(t,n,e)}}));function Uf(t,e,n){var r=Eh(e),i=Di(e,r);null!=n||Il(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Di(e,Eh(e)));var s=!(Il(n)&&"chain"in n)||!!n.chain,o=bl(t);return bn(i,(function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(s||e){var n=t(this.__wrapped__),i=n.__actions__=ro(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,kn([this.value()],arguments))})})),t}function Ff(){return an._===this&&(an._=me),this}function Vf(){}function jf(t){return t=Hl(t),ws((function(e){return ls(e,t)}))}var $f=Eo(An),Bf=Eo(Tn),zf=Eo(Nn);function qf(t){return ua(t)?$n(Na(t)):ps(t)}function Kf(t){return function(e){return null==t?i:Pi(t,e)}}var Wf=So(),Gf=So(!0);function Hf(){return[]}function Qf(){return!1}function Xf(){return{}}function Yf(){return""}function Jf(){return!0}function Zf(t,e){if(t=Hl(t),t<1||t>M)return[];var n=V,r=$e(t,V);e=qo(e),t-=V;var i=Wn(r,e);while(++n<t)e(n);return i}function td(t){return ul(t)?An(t,Na):Vl(t)?[t]:ro(Oa(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=bo((function(t,e){return t+e}),0),rd=ko("ceil"),id=bo((function(t,e){return t/e}),1),sd=ko("floor");function od(t){return t&&t.length?Si(t,Nf,Ui):i}function ad(t,e){return t&&t.length?Si(t,qo(e,2),Ui):i}function ud(t){return jn(t,Nf)}function cd(t,e){return jn(t,qo(e,2))}function ld(t){return t&&t.length?Si(t,Nf,is):i}function hd(t,e){return t&&t.length?Si(t,qo(e,2),is):i}var fd=bo((function(t,e){return t*e}),1),dd=ko("round"),pd=bo((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Kn(t,Nf):0}function md(t,e){return t&&t.length?Kn(t,qo(e,2)):0}return Er.after=Rc,Er.ary=Oc,Er.assign=th,Er.assignIn=eh,Er.assignInWith=nh,Er.assignWith=rh,Er.at=ih,Er.before=Nc,Er.bind=xc,Er.bindAll=If,Er.bindKey=Dc,Er.castArray=Jc,Er.chain=Ku,Er.chunk=La,Er.compact=Ma,Er.concat=Ua,Er.cond=Sf,Er.conforms=Cf,Er.constant=Af,Er.countBy=nc,Er.create=sh,Er.curry=Pc,Er.curryRight=Lc,Er.debounce=Mc,Er.defaults=oh,Er.defaultsDeep=ah,Er.defer=Uc,Er.delay=Fc,Er.difference=Fa,Er.differenceBy=Va,Er.differenceWith=ja,Er.drop=$a,Er.dropRight=Ba,Er.dropRightWhile=za,Er.dropWhile=qa,Er.fill=Ka,Er.filter=ic,Er.flatMap=ac,Er.flatMapDeep=uc,Er.flatMapDepth=cc,Er.flatten=Ha,Er.flattenDeep=Qa,Er.flattenDepth=Xa,Er.flip=Vc,Er.flow=Rf,Er.flowRight=Of,Er.fromPairs=Ya,Er.functions=ph,Er.functionsIn=gh,Er.groupBy=fc,Er.initial=tu,Er.intersection=eu,Er.intersectionBy=nu,Er.intersectionWith=ru,Er.invert=_h,Er.invertBy=wh,Er.invokeMap=pc,Er.iteratee=xf,Er.keyBy=gc,Er.keys=Eh,Er.keysIn=Th,Er.map=mc,Er.mapKeys=Ih,Er.mapValues=Sh,Er.matches=Df,Er.matchesProperty=Pf,Er.memoize=jc,Er.merge=Ch,Er.mergeWith=Ah,Er.method=Lf,Er.methodOf=Mf,Er.mixin=Uf,Er.negate=$c,Er.nthArg=jf,Er.omit=kh,Er.omitBy=Rh,Er.once=Bc,Er.orderBy=vc,Er.over=$f,Er.overArgs=zc,Er.overEvery=Bf,Er.overSome=zf,Er.partial=qc,Er.partialRight=Kc,Er.partition=yc,Er.pick=Oh,Er.pickBy=Nh,Er.property=qf,Er.propertyOf=Kf,Er.pull=uu,Er.pullAll=cu,Er.pullAllBy=lu,Er.pullAllWith=hu,Er.pullAt=fu,Er.range=Wf,Er.rangeRight=Gf,Er.rearg=Wc,Er.reject=bc,Er.remove=du,Er.rest=Gc,Er.reverse=pu,Er.sampleSize=Tc,Er.set=Dh,Er.setWith=Ph,Er.shuffle=Ic,Er.slice=gu,Er.sortBy=Ac,Er.sortedUniq=Eu,Er.sortedUniqBy=Tu,Er.split=cf,Er.spread=Hc,Er.tail=Iu,Er.take=Su,Er.takeRight=Cu,Er.takeRightWhile=Au,Er.takeWhile=ku,Er.tap=Wu,Er.throttle=Qc,Er.thru=Gu,Er.toArray=Wl,Er.toPairs=Lh,Er.toPairsIn=Mh,Er.toPath=td,Er.toPlainObject=Yl,Er.transform=Uh,Er.unary=Xc,Er.union=Ru,Er.unionBy=Ou,Er.unionWith=Nu,Er.uniq=xu,Er.uniqBy=Du,Er.uniqWith=Pu,Er.unset=Fh,Er.unzip=Lu,Er.unzipWith=Mu,Er.update=Vh,Er.updateWith=jh,Er.values=$h,Er.valuesIn=Bh,Er.without=Uu,Er.words=Ef,Er.wrap=Yc,Er.xor=Fu,Er.xorBy=Vu,Er.xorWith=ju,Er.zip=$u,Er.zipObject=Bu,Er.zipObjectDeep=zu,Er.zipWith=qu,Er.entries=Lh,Er.entriesIn=Mh,Er.extend=eh,Er.extendWith=nh,Uf(Er,Er),Er.add=nd,Er.attempt=Tf,Er.camelCase=Wh,Er.capitalize=Gh,Er.ceil=rd,Er.clamp=zh,Er.clone=Zc,Er.cloneDeep=el,Er.cloneDeepWith=nl,Er.cloneWith=tl,Er.conformsTo=rl,Er.deburr=Hh,Er.defaultTo=kf,Er.divide=id,Er.endsWith=Qh,Er.eq=il,Er.escape=Xh,Er.escapeRegExp=Yh,Er.every=rc,Er.find=sc,Er.findIndex=Wa,Er.findKey=uh,Er.findLast=oc,Er.findLastIndex=Ga,Er.findLastKey=ch,Er.floor=sd,Er.forEach=lc,Er.forEachRight=hc,Er.forIn=lh,Er.forInRight=hh,Er.forOwn=fh,Er.forOwnRight=dh,Er.get=mh,Er.gt=sl,Er.gte=ol,Er.has=vh,Er.hasIn=yh,Er.head=Ja,Er.identity=Nf,Er.includes=dc,Er.indexOf=Za,Er.inRange=qh,Er.invoke=bh,Er.isArguments=al,Er.isArray=ul,Er.isArrayBuffer=cl,Er.isArrayLike=ll,Er.isArrayLikeObject=hl,Er.isBoolean=fl,Er.isBuffer=dl,Er.isDate=pl,Er.isElement=gl,Er.isEmpty=ml,Er.isEqual=vl,Er.isEqualWith=yl,Er.isError=_l,Er.isFinite=wl,Er.isFunction=bl,Er.isInteger=El,Er.isLength=Tl,Er.isMap=Cl,Er.isMatch=Al,Er.isMatchWith=kl,Er.isNaN=Rl,Er.isNative=Ol,Er.isNil=xl,Er.isNull=Nl,Er.isNumber=Dl,Er.isObject=Il,Er.isObjectLike=Sl,Er.isPlainObject=Pl,Er.isRegExp=Ll,Er.isSafeInteger=Ml,Er.isSet=Ul,Er.isString=Fl,Er.isSymbol=Vl,Er.isTypedArray=jl,Er.isUndefined=$l,Er.isWeakMap=Bl,Er.isWeakSet=zl,Er.join=iu,Er.kebabCase=Jh,Er.last=su,Er.lastIndexOf=ou,Er.lowerCase=Zh,Er.lowerFirst=tf,Er.lt=ql,Er.lte=Kl,Er.max=od,Er.maxBy=ad,Er.mean=ud,Er.meanBy=cd,Er.min=ld,Er.minBy=hd,Er.stubArray=Hf,Er.stubFalse=Qf,Er.stubObject=Xf,Er.stubString=Yf,Er.stubTrue=Jf,Er.multiply=fd,Er.nth=au,Er.noConflict=Ff,Er.noop=Vf,Er.now=kc,Er.pad=ef,Er.padEnd=nf,Er.padStart=rf,Er.parseInt=sf,Er.random=Kh,Er.reduce=_c,Er.reduceRight=wc,Er.repeat=of,Er.replace=af,Er.result=xh,Er.round=dd,Er.runInContext=t,Er.sample=Ec,Er.size=Sc,Er.snakeCase=uf,Er.some=Cc,Er.sortedIndex=mu,Er.sortedIndexBy=vu,Er.sortedIndexOf=yu,Er.sortedLastIndex=_u,Er.sortedLastIndexBy=wu,Er.sortedLastIndexOf=bu,Er.startCase=lf,Er.startsWith=hf,Er.subtract=pd,Er.sum=gd,Er.sumBy=md,Er.template=ff,Er.times=Zf,Er.toFinite=Gl,Er.toInteger=Hl,Er.toLength=Ql,Er.toLower=df,Er.toNumber=Xl,Er.toSafeInteger=Jl,Er.toString=Zl,Er.toUpper=pf,Er.trim=gf,Er.trimEnd=mf,Er.trimStart=vf,Er.truncate=yf,Er.unescape=_f,Er.uniqueId=ed,Er.upperCase=wf,Er.upperFirst=bf,Er.each=lc,Er.eachRight=hc,Er.first=Ja,Uf(Er,function(){var t={};return Ni(Er,(function(e,n){he.call(Er.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Er.VERSION=s,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Er[t].placeholder=Er})),bn(["drop","take"],(function(t,e){Ar.prototype[t]=function(n){n=n===i?1:je(Hl(n),0);var r=this.__filtered__&&!e?new Ar(this):this.clone();return r.__filtered__?r.__takeCount__=$e(n,r.__takeCount__):r.__views__.push({size:$e(n,V),type:t+(r.__dir__<0?"Right":"")}),r},Ar.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),bn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==x||n==P;Ar.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),bn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Ar.prototype[t]=function(){return this[n](1).value()[0]}})),bn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Ar.prototype[t]=function(){return this.__filtered__?new Ar(this):this[n](1)}})),Ar.prototype.compact=function(){return this.filter(Nf)},Ar.prototype.find=function(t){return this.filter(t).head()},Ar.prototype.findLast=function(t){return this.reverse().find(t)},Ar.prototype.invokeMap=ws((function(t,e){return"function"==typeof t?new Ar(this):this.map((function(n){return zi(n,t,e)}))})),Ar.prototype.reject=function(t){return this.filter($c(qo(t)))},Ar.prototype.slice=function(t,e){t=Hl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Ar(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Hl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Ar.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ar.prototype.toArray=function(){return this.take(V)},Ni(Ar.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),s=Er[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);s&&(Er.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof Ar,c=a[0],l=u||ul(e),h=function(t){var e=s.apply(Er,kn([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=o&&!f,g=u&&!d;if(!o&&l){e=g?e:new Ar(this);var m=t.apply(e,a);return m.__actions__.push({func:Gu,args:[h],thisArg:i}),new Cr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),bn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=oe[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Er.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),Ni(Ar.prototype,(function(t,e){var n=Er[e];if(n){var r=n.name+"";he.call(cn,r)||(cn[r]=[]),cn[r].push({name:e,func:n})}})),cn[_o(i,_).name]=[{name:"wrapper",func:i}],Ar.prototype.clone=kr,Ar.prototype.reverse=Rr,Ar.prototype.value=Or,Er.prototype.at=Hu,Er.prototype.chain=Qu,Er.prototype.commit=Xu,Er.prototype.next=Yu,Er.prototype.plant=Zu,Er.prototype.reverse=tc,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=ec,Er.prototype.first=Er.prototype.head,Ae&&(Er.prototype[Ae]=Ju),Er},Tr=Er();an._=Tr,r=function(){return Tr}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},1087:function(t,e,n){var r=n(8606),i=function(){return r.Date.now()};t.exports=i},1795:function(t,e,n){var r=n(896),i=n(9692),s="Expected a function";function o(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}t.exports=o},4243:function(t,e,n){var r=n(4867),i=n(9692),s=n(9299),o=NaN,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function h(t){if("number"==typeof t)return t;if(s(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=h},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3506:function(t,e,n){"use strict";var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},679:function(t,e,n){"use strict";var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},7811:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){"use strict";var r=n(6706),i=n(4576),s=TypeError;t.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==i(t))throw new s("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){"use strict";var r=n(9504),i=n(7394),s=r(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==i(t))return!1;try{return s(t,0,0),!1}catch(e){return!0}}},5636:function(t,e,n){"use strict";var r=n(4475),i=n(9504),s=n(6706),o=n(7696),a=n(3238),u=n(7394),c=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=r.TypeError,g=Math.min,m=f.prototype,v=d.prototype,y=i(m.slice),_=s(m,"resizable","get"),w=s(m,"maxByteLength","get"),b=i(v.getInt8),E=i(v.setInt8);t.exports=(l||c)&&function(t,e,n){var r,i=u(t),s=void 0===e?i:o(e),m=!_||!_(t);if(a(t))throw new p("ArrayBuffer is detached");if(l&&(t=h(t,{transfer:[t]}),i===s&&(n||m)))return t;if(i>=s&&(!n||m))r=y(t,0,s);else{var v=n&&!m&&w?{maxByteLength:w(t)}:void 0;r=new f(s,v);for(var T=new d(t),I=new d(r),S=g(s,i),C=0;C<S;C++)E(I,C,b(T,C))}return l||c(t),r}},4644:function(t,e,n){"use strict";var r,i,s,o=n(7811),a=n(3724),u=n(4475),c=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),w=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=u.Int8Array,C=S&&S.prototype,A=u.Uint8ClampedArray,k=A&&A.prototype,R=S&&y(S),O=C&&y(C),N=Object.prototype,x=u.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(u.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(F,e)||h(V,e)},$=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(F,e)||h(V,e)},z=function(t){if(B(t))return t;throw new x("Target is not a typed array")},q=function(t){if(c(t)&&(!_||v(R,t)))return t;throw new x(d(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in F){var s=u[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(c){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},W=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=u[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in F)i=u[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=u[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=u[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!c(R)||R===Function.prototype)&&(R=function(){throw new x("Incorrect invocation")},M))for(r in F)u[r]&&_(u[r],R);if((!M||!O||O===N)&&(O=R.prototype,M))for(r in F)u[r]&&_(u[r].prototype,O);if(M&&y(k)!==O&&_(k,O),a&&!h(O,D))for(r in U=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)u[r]&&p(u[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:R,TypedArrayPrototype:O}},5370:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},9617:function(t,e,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),u=s(a);if(0===u)return!t&&-1;var c,l=i(o,u);if(t&&n!==n){while(u>l)if(c=a[l++],c!==c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},9928:function(t,e,n){"use strict";var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),u=i(n),c=u<0?a+u:u;if(c>=a||c<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===c?o:t[h];return l}},4576:function(t,e,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},6955:function(t,e,n){"use strict";var r=n(2140),i=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),u=Object,c="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),a))?n:c?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),u=o.f,c=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||u(t,h,c(e,h))}}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6699:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2106:function(t,e,n){"use strict";var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(r(n)&&s(n,c,a),a.global)u?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){"use strict";var r=n(4475),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){"use strict";var r,i,s,o,a=n(4475),u=n(9714),c=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(c)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=u("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}t.exports=d},4055:function(t,e,n){"use strict";var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(t,e,n){"use strict";var r=n(516),i=n(9088);t.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(t){"use strict";t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(t,e,n){"use strict";var r=n(4475),i=n(4576);t.exports="process"===i(r.process)},9392:function(t){"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(t,e,n){"use strict";var r,i,s=n(4475),o=n(9392),a=s.process,u=s.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(t,e,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(o);t.exports=function(t,e){if(u&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){"use strict";var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),u=n(7740),c=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=c(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){"use strict";var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},6706:function(t,e,n){"use strict";var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},9504:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},7751:function(t,e,n){"use strict";var r=n(4475),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},5966:function(t,e,n){"use strict";var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},4475:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},421:function(t){"use strict";t.exports={}},5917:function(t,e,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){"use strict";var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){"use strict";var r,i,s,o=n(8622),a=n(4475),u=n(34),c=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new g(p);return e.facade=t,c(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},4376:function(t,e,n){"use strict";var r=n(4576);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){"use strict";var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=u[a(t)];return n===l||n!==c&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){"use strict";var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){"use strict";var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){"use strict";t.exports=!1},757:function(t,e,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6198:function(t,e,n){"use strict";var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),u=n(350).CONFIGURABLE,c=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||c(this)}),"toString")},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){"use strict";var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},4913:function(t,e,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),u=n(6969),c=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=u(e),l)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i(s.f,t,e),t[e])}},8480:function(t,e,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),u=o("IE_PROTO"),c=Object,l=c.prototype;t.exports=a?c.getPrototypeOf:function(t){var e=s(t);if(r(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},1625:function(t,e,n){"use strict";var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),u=r([].push);t.exports=function(t,e){var n,r=s(t),c=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&u(l,n);while(e.length>c)i(r,n=e[c++])&&(~o(l,n)||u(l,n));return l}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){"use strict";var r=n(6706),i=n(8551),s=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},4270:function(t,e,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),u=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?u(e,n(t)):e}},7750:function(t,e,n){"use strict";var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},6119:function(t,e,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},7629:function(t,e,n){"use strict";var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.36.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){"use strict";var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){"use strict";var r=n(4475),i=n(9039),s=n(7388),o=n(7290),a=n(516),u=n(9088),c=r.structuredClone;t.exports=!!c&&!i((function(){if(a&&s>92||u&&s>94||o&&s>97)return!1;var t=new ArrayBuffer(8),e=c(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){"use strict";var r=n(7388),i=n(9039),s=n(4475),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5854:function(t,e,n){"use strict";var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){"use strict";var r=n(1291),i=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},5397:function(t,e,n){"use strict";var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){"use strict";var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){"use strict";var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){"use strict";var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),u=n(8227),c=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,u=o(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!i(n)||s(n))return n;throw new c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){"use strict";var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){"use strict";var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},9714:function(t,e,n){"use strict";var r=n(9088);t.exports=function(t){try{if(r)return Function('return require("'+t+'")')()}catch(e){}}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){"use strict";var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){"use strict";var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){"use strict";var r=n(4475),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8227:function(t,e,n){"use strict";var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),u=n(7040),c=r.Symbol,l=i("wks"),h=u?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(c,t)?c[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){"use strict";var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),u=n(9039),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return o(e,n),n}})},7467:function(t,e,n){"use strict";var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(t,e,n){"use strict";var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,u=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);c("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(u(e),e);return l(n,t)}))},9577:function(t,e,n){"use strict";var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),u=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=u(this),i=o(t),l=s(n)?a(e):+e;return r(n,c(n),i,l)}}["with"],!h)},6280:function(t,e,n){"use strict";n(6573)},7801:function(t,e,n){"use strict";n(7936)},7913:function(t,e,n){"use strict";n(8100)},4979:function(t,e,n){"use strict";var r=n(6518),i=n(4475),s=n(7751),o=n(6980),a=n(4913).f,u=n(9297),c=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),_=function(){c(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in new v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),f)if(u(f,k)){var R=f[k],O=R.s;u(C,O)||a(C,O,o(6,R.c))}},4603:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.append),l=i(u["delete"]),h=i(u.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),u=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===u||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.getAll),l=i(u.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(u,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=c(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){"use strict";var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},1114:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=i(t,"string");return"symbol"==r(e)?e:String(e)}function o(t,e,n){return e=s(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{A:function(){return o}})},3405:function(t,e,n){"use strict";n.d(e,{MF:function(){return gt},j6:function(){return ht},om:function(){return lt},Sx:function(){return vt},Wp:function(){return mt},KO:function(){return yt}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,c())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",x="0.9.28",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",K="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="10.8.1",st="[DEFAULT]",ot={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[K]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ut=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ut.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of at.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.FA("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const u=new r.h1(o);for(const r of ut.values())u.addComponent(r);const c=new pt(n,i,u);return at.set(o,c),c}function vt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.T9)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(_t,wt,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bt)}catch(n){console.warn(n)}}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function It(t){try{const e=await Tt(),n=e.transaction(bt),r=await n.objectStore(bt).get(Ct(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);await i.put(e,Ct(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Ot();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ot(),{heartbeatsToSend:n,unsentEntries:r}=Nt(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=At){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new r.uA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.uA("heartbeat",(t=>new Rt(t)),"PRIVATE")),yt(N,x,t),yt(N,x,"esm2017"),yt("fire-js","")}Pt("")},852:function(t,e,n){"use strict";n.d(e,{h1:function(){return c},uA:function(){return i}});var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return c}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6400:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="10.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},8238:function(t,e,n){"use strict";n.d(e,{HF:function(){return Ee},xI:function(){return zr},df:function(){return Dn},CI:function(){return Pe}});n(4114),n(4603),n(7566),n(8721);var r=n(4046),i=n(3405),s=n(1363);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=u,l=new r.FA("auth","Firebase",u()),h=new s.Vy("@firebase/auth");function f(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function g(t,...e){return y(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},c()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function v(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function _(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return P(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),R.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))}))}async function P(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof r.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function L(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}function U(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return void 0!==t&&void 0!==t.enterprise}class ${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return U(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return D(t,"GET","/v2/recaptchaConfig",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=H(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:K(G(s.auth_time)),issuedAtTime:K(G(s.iat)),expirationTime:K(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function H(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Q(t){const e=H(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&Y(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await X(t,q(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?rt(s.providerUserInfo):[],a=nt(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Z(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function et(t){const e=(0,r.Ku)(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function rt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e){const n=await P(t,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return D(t,"POST","/v2/accounts:revokeToken",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return _(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await it(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new ot;return n&&(_("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return et(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await X(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=e;_(y&&T,t,"internal-error");const I=ot.fromJSON(this.name,T);_("string"===typeof y,t,"internal-error"),at(l,t.name),at(h,t.name),_("boolean"===typeof w,t,"internal-error"),_("boolean"===typeof b,t,"internal-error"),at(f,t.name),at(d,t.name),at(p,t.name),at(g,t.name),at(m,t.name),at(v,t.name);const S=new ut({uid:y,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new ot;r.updateFromServerResponse(e);const i=new ut({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await tt(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Map;function lt(t){b(t instanceof Function,"Expected a class definition");let e=ct.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ct.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const ft=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=dt(this.userKey,r.apiKey,i),this.fullPersistenceKey=dt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(lt(ft),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||lt(ft);const s=dt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=ut._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(u){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(u){}}))),new pt(i,t,n)):new pt(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_t(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bt(e))return"Blackberry";if(Et(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function mt(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function vt(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=(0,r.ZQ)()){return/crios\//i.test(t)}function _t(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,r.ZQ)()){return/android/i.test(t)}function bt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function Et(t=(0,r.ZQ)()){return/webos/i.test(t)}function Tt(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function It(t=(0,r.ZQ)()){var e;return Tt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function St(){return(0,r.lT)()&&10===document.documentMode}function Ct(t=(0,r.ZQ)()){return Tt(t)||wt(t)||Et(t)||bt(t)||/windows phone/i.test(t)||_t(t)}function At(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=gt((0,r.ZQ)());break;case"Worker":n=`${gt((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t,e={}){return D(t,"GET","/v2/passwordPolicy",x(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=6;class xt{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:Nt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await tt(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ot(this),e=new xt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Pt(t){return(0,r.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function Ft(t){return Mt.loadJS(t)}function Vt(){return Mt.recaptchaEnterpriseScript}function jt(){return Mt.gapiScript}function $t(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Bt="recaptcha-enterprise",zt="NO_RECAPTCHA";class qt{constructor(t){this.type=Bt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{B(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;j(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(zt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&j(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Vt();0!==e.length&&(e+=n),Ft(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Kt(t,e,n,r=!1){const i=new qt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wt(t,e,n,r){var i;if(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kt(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Kt(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Ht(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Qt(t,e,n){const r=Pt(t);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xt(e),{host:o,port:a}=Yt(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zt()}function Xt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yt(t){const e=Xt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Jt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Jt(e)}}}function Jt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return D(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ne(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function ie(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends te{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new se(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new se(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,e,"signInWithPassword",ne);case"emailLink":return re(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,n,"signUpPassword",ee);case"emailLink":return ie(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="http://localhost";class ue extends te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ue(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ue(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return oe(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,oe(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,oe(t,e)}buildRequest(){const t={requestUri:ae,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function le(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function he(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const fe={["USER_NOT_FOUND"]:"user-not-found"};async function de(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends te{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new pe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new pe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return le(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return he(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return de(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new pe({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function me(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class ve{constructor(t){var e,n,i,s,o,a;const u=(0,r.I9)((0,r.hp)(t)),c=null!==(e=u["apiKey"])&&void 0!==e?e:null,l=null!==(n=u["oobCode"])&&void 0!==n?n:null,h=ge(null!==(i=u["mode"])&&void 0!==i?i:null);_(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=u["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=me(t);try{return new ve(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(t,e){return se._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ve.parseLink(e);return _(n,"argument-error"),se._fromEmailAndCode(t,n.code,n.tenantId)}}ye.PROVIDER_ID="password",ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends _e{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends we{constructor(){super("facebook.com")}static credential(t){return ue._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch(e){return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com",be.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends we{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ee.credentialFromTaggedObject(t)}static credentialFromError(t){return Ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ee.credential(e,n)}catch(r){return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com",Ee.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends we{constructor(){super("github.com")}static credential(t){return ue._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch(e){return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends we{constructor(){super("twitter.com")}static credential(t,e){return ue._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ie.credential(e,n)}catch(r){return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com",Ie.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ut._fromIdTokenResponse(t,n,r),s=Ce(n),o=new Se({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ce(n);return new Se({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Ce(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends r.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ae(t,e,n,r)}}function ke(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ae._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,e,n=!1){const r=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Se._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await X(t,ke(r,i,e,t),n);_(s.idToken,r,"internal-error");const o=H(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(t.uid===a,r,"user-mismatch"),Se._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){const r="signIn",i=await ke(t,r,e),s=await Se._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function xe(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function De(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}function Pe(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Me(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}function Ue(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Fe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const Ve="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){const t=(0,r.ZQ)();return vt(t)||Tt(t)}const Be=1e3,ze=10;class qe extends je{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$e()&&At(),this.fallbackToPolling=Ct(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);St()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ze):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Be)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}qe.type="LOCAL";const Ke=qe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends je{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}We.type="SESSION";const Ge=We;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Qe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await He(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.receivers=[];class Ye{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Xe("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Ze(t){Je().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return"undefined"!==typeof Je()["WorkerGlobalScope"]&&"function"===typeof Je()["importScripts"]}async function en(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function nn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function rn(){return tn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="firebaseLocalStorageDb",on=1,an="firebaseLocalStorage",un="fbase_key";class cn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ln(t,e){return t.transaction([an],e?"readwrite":"readonly").objectStore(an)}function hn(){const t=indexedDB.deleteDatabase(sn);return new cn(t).toPromise()}function fn(){const t=indexedDB.open(sn,on);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(an,{keyPath:un})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(an)?e(n):(n.close(),await hn(),e(await fn()))}))}))}async function dn(t,e,n){const r=ln(t,!0).put({[un]:e,value:n});return new cn(r).toPromise()}async function pn(t,e){const n=ln(t,!1).get(e),r=await new cn(n).toPromise();return void 0===r?null:r.value}function gn(t,e){const n=ln(t,!0).delete(e);return new cn(n).toPromise()}const mn=800,vn=3;class yn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>vn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qe._getInstance(rn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await en(),!this.activeServiceWorker)return;this.sender=new Ye(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fn();return await dn(t,Ve,"1"),await gn(t,Ve),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>pn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>gn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ln(t,!1).getAll();return new cn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}yn.type="LOCAL";const _n=yn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function bn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}function En(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$t("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn="recaptcha";async function In(t,e,n){var r;const i=await n.verify();try{let s;if(_("string"===typeof i,t,"argument-error"),_(n.type===Tn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_("enroll"===e.type,t,"internal-error");const n=await Le(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,t,"missing-multi-factor-info");const o=await wn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ce(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{constructor(t){this.providerId=Sn.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return In(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return pe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Sn.credentialFromTaggedObject(e)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?pe._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(t,e){return e?lt(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.PROVIDER_ID="phone",Sn.PHONE_SIGN_IN_METHOD="phone";class An extends te{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return oe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return oe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return oe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function kn(t){return Ne(t.auth,new An(t),t.bypassAuthState)}function Rn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Oe(n,new An(t),t.bypassAuthState)}async function On(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Re(n,new An(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kn;case"linkViaPopup":case"linkViaRedirect":return On;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new A(2e3,1e4);async function Dn(t,e,n){const r=Pt(t);v(t,e,_e);const i=Cn(r,n),s=new Pn(r,"signInViaPopup",e,i);return s.executeNotNull()}class Pn extends Nn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Xe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,xn.get())};t()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln="pendingRedirect",Mn=new Map;class Un extends Nn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Mn.get(this.auth._key());if(!t){try{const e=await Fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Mn.set(this.auth._key(),t)}return this.bypassAuthState||Mn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Fn(t,e){const n=$n(e),r=jn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Vn(t,e){Mn.set(t._key(),e)}function jn(t){return lt(t._redirectPersistence)}function $n(t){return dt(Ln,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t,e,n=!1){const r=Pt(t),i=Cn(r,e),s=new Un(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn=6e5;class qn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Wn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kn(t))}saveEventToCache(t){this.cachedEventUids.add(Kn(t)),this.lastProcessedEventTime=Date.now()}}function Kn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Wn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Yn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hn(t);for(const r of e)try{if(Jn(r))return}catch(n){}p(t,"unauthorized-domain")}function Jn(t){const e=E(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Xn.test(n))return!1;if(Qn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new A(3e4,6e4);function tr(){const t=Je().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function er(t){return new Promise(((e,n)=>{var r,i,s;function o(){tr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(g(t,"network-request-failed"))},timeout:Zn.get()})}if(null===(i=null===(r=Je().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Je().gapi)||void 0===s?void 0:s.load)){const e=$t("iframefcb");return Je()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},Ft(`${jt()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw nr=null,t}))}let nr=null;function rr(t){return nr=nr||er(t),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new A(5e3,15e3),sr="__/auth/iframe",or="emulator/auth/iframe",ar={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cr(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,or):`https://${t.config.authDomain}/${sr}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=ur.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function lr(t){const e=await rr(t),n=Je().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:cr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ar,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=Je().setTimeout((()=>{r(i)}),ir.get());function o(){Je().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,dr=600,pr="_blank",gr="http://localhost";class mr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function vr(t,e,n,i=fr,s=dr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},hr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(u=yt(l)?pr:n),mt(l)&&(e=e||gr,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(It(l)&&"_self"!==u)return yr(e||"",u),new mr(null);const f=window.open(e||"",u,h);_(f,t,"popup-blocked");try{f.focus()}catch(d){}return new mr(f)}function yr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="__/auth/handler",wr="emulator/auth/handler",br=encodeURIComponent("fac");async function Er(t,e,n,s,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof _e){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof we){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const l=await t._getAppCheckToken(),h=l?`#${br}=${encodeURIComponent(l)}`:"";return`${Tr(t)}?${(0,r.Am)(c).slice(1)}${h}`}function Tr({config:t}){return t.emulator?k(t,wr):`https://${t.authDomain}/${_r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class Sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ge,this._completeRedirectFn=Bn,this._overrideRedirectResult=Vn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Er(t,e,n,E(),r);return vr(t,s,Xe())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Er(t,e,n,E(),r);return Ze(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await lr(t),n=new qn(t);return e.register("authEvent",(e=>{_(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ir,{type:Ir},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ir];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ct()||vt()||Tt()}}const Cr=Sr;class Ar{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class kr extends Ar{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new kr(t)}_finalizeEnroll(t,e,n){return Me(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return bn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(t){return kr._fromCredential(t)}}Rr.FACTOR_ID="phone";class Or{static assertionForEnrollment(t,e){return Nr._fromSecret(t,e)}static assertionForSignIn(t,e){return Nr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;_("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Ue(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return xr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Or.FACTOR_ID="totp";class Nr extends Ar{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Nr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Nr(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),Fe(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return En(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class xr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new xr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Dr(t)||Dr(e))&&(r=!0),r&&(Dr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Dr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Dr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Pr="@firebase/auth",Lr="1.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fr(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},c=new Dt(r,i,s,u);return Ht(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Mr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Pr,Lr,Ur(t)),(0,i.KO)(Pr,Lr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=300,jr=(0,r.XA)("authIdTokenMaxAge")||Vr;let $r=null;const Br=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jr)return;const i=null===n||void 0===n?void 0:n.token;$r!==i&&($r=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zr(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gt(t,{popupRedirectResolver:Cr,persistence:[_n,Ke,Ge]}),s=(0,r.XA)("authTokenSyncURL");if(s){const t=Br(s);De(n,t,(()=>t(n.currentUser))),xe(n,(e=>t(e)))}const o=(0,r.Tj)("auth");return o&&Qt(n,`http://${o}`),n}function qr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Fr("Browser")},9675:function(t,e,n){"use strict";n.d(e,{Dc:function(){return wi},rJ:function(){return Wl},H9:function(){return Gl},x7:function(){return Wh},GG:function(){return Hh},aU:function(){return Xl},P:function(){return Nh},c4:function(){return Zh},O5:function(){return tf},_M:function(){return Dh}});n(4114),n(7467),n(4732),n(9577),n(6280),n(7913),n(7801),n(4979);var r,i=n(3405),s=n(852),o=n(1363),a=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={},l=l||{},h=u||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,_.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};h.addEventListener("test",t,e),h.removeEventListener("test",t,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return-1!=O().indexOf(t)}function x(t){return x[" "](t),t}function D(t,e){var n=wr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}x[" "]=function(){};var P,L,M=N("Opera"),U=N("Trident")||N("MSIE"),F=N("Edge"),V=F||U,j=N("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),$=-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge");function B(){var t=h.document;return t?t.documentMode:void 0}t:{var z="",q=function(){var t=O();return j?/rv:([^\);]+)(\)|;)/.exec(t):F?/Edge\/([\d\.]+)/.exec(t):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&(z=q?q[1]:""),U){var K=B();if(null!=K&&K>parseFloat(z)){P=String(K);break t}}P=z}if(h.document&&U){var W=B();L=W||(parseInt(P,10)||void 0)}else L=void 0;var G=L;function H(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(j){t:{try{x(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&H.$.h.call(this)}}b(H,A);var Q={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[X]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ut]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[X]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=wt(n),t&&t[X]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[X])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):Z(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function vt(t,e){if(t.fa)t=!0;else{e=new H(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ut],t instanceof st?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function bt(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}b(bt,E),bt.prototype[X]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var It=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ct(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new St((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Nt(t){h.setTimeout((()=>{throw t}),0)}let xt,Dt=!1,Pt=new At,Lt=()=>{const t=h.Promise.resolve(void 0);xt=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Nt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1};function Ut(t,e){bt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.qb,this),this.l=Date.now()}function Ft(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Vt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=Vt((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ut,bt),r=Ut.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ft(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ut.$.N.call(this),Ft(this),delete this.g};class $t extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){E.call(this),this.h=t,this.g={}}b(Bt,E);var zt=[];function qt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Kt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Wt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Ht(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Xt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return It(n)}catch(a){return e}}Bt.prototype.N=function(){Bt.$.N.call(this),Kt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Ea=function(){this.g=!1},Wt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new bt}function ee(t){A.call(this,Jt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){A.call(this,Jt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){A.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",b(ee,A),Jt.STAT_EVENT="statevent",b(re,A),Jt.Ua="timingevent",b(se,A);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ue={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ce(){}function le(t){return t.h||(t.h=t.i())}function he(){}ce.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){A.call(this,"d")}function ge(){A.call(this,"c")}function me(){}function ve(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Bt(this),this.P=_e,t=V?125:void 0,this.V=new Ut(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}b(pe,A),b(ge,A),b(me,ce),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var _e=45e3,we={},be={};function Ee(t,e,n){t.L=1,t.A=qe(Ve(e)),t.u=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Ae(t),t.B=Ve(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ye,t.g=cr(t.l,n?e:null,!t.u),0<t.O&&(t.M=new $t(_(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ne(),Gt(t.j,t.v,t.B,t.m,t.W,t.u)}function Ie(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.o<n.length;){if(r=Ce(t,n),r==be){4==e&&(t.s=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==we){t.s=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),xe(t,r)}Ie(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Ne(t),Oe(t))}function Ce(t,e){var n=t.o,r=e.indexOf("\n",n);return-1==r?be:(n=Number(e.substring(n,r)),isNaN(n)?we:(r+=1,r+n>e.length?be:(e=e.slice(r,r+n),t.o=r+n,e)))}function Ae(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=oe(_(t.lb,t),e)}function Re(t){t.C&&(h.clearTimeout(t.C),t.C=null)}function Oe(t){0==t.l.H||t.J||ir(t.l,t)}function Ne(t){Re(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ft(t.V),Kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function xe(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Wn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!R(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,ze(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Re(a),Ae(a)),r.g=o}else Zn(r);0<n.j.length&&Hn(n)}else"stop"!=c[0]&&"close"!=c[0]||or(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?or(n,7):Kn(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ne(4)}catch(c){}}function De(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),r=De(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ve.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Fn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Fn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Re(this);var n=this.g.da();this.ca=n;e:if(Ie(this)){var r=Vn(this.g);t="";var i=r.length,s=4==Fn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ne(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ht(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.s=3,ie(12),Ne(this),Oe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xe(this,n)}this.S?(Se(this,l,o),V&&this.i&&3==l&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),xe(this,o)),4==l&&Ne(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ae(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Ne(this),Oe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Fn(this.g),e=this.g.ja();this.o<e.length&&(Re(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.J=!0,Ne(this)},r.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Xt(this.j,this.B),2!=this.L&&(ne(),ie(17)),Ne(this),this.s=2,Oe(this)):ke(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ue(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fe(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fe){this.h=t.h,je(this,t.j),this.s=t.s,this.g=t.g,$e(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Be(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,je(this,e[1]||"",!0),this.s=Ke(e[2]||""),this.g=Ke(e[3]||"",!0),$e(this,e[4]),this.l=Ke(e[5]||"",!0),Be(this,e[6]||"",!0),this.o=Ke(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ve(t){return new Fe(t)}function je(t,e,n){t.j=n?Ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $e(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Be(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=We(e,Ye)),t.i=new Ze(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function qe(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,He,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(We(e,He,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Xe:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,Je)),t.join("")};var He=/[#\/\?@]/g,Qe=/[#\?:]/g,Xe=/[#\?]/g,Ye=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ue(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function un(t){this.l=t||cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function vn(){this.g=new mn}function yn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let i=t;d(t)&&(i=It(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(t,e){const n=new Wt;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function wn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function bn(t){this.l=t.ec||null,this.j=t.ob||!1}function En(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ce),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),b(En,bt);var Tn=0;function In(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):Cn(this),3==this.readyState&&In(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function kn(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(kn,bt);var Rn="",On=/^https?$/i,Nn=["POST","PUT"];function xn(t){return U&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Mn(t)}function Pn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Fn(t)||2!=t.da()))if(t.v&&4==Fn(t))Vt(t.La,0,t);else if(Et(t,"readystatechange"),4==Fn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Me)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Fn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Pn(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Un(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Un(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}function Vn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function jn(t){const e={};t=(t.g&&2<=Fn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=Ot(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function $n(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Bn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=$n(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ga=0,this.j=[],this.l=new Wt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,t),this.hb=zn("retryDelaySeedMs",1e4,t),this.eb=zn("forwardChannelMaxRetries",2,t),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new un(t&&t.concurrentRequestLimit),this.Ja=new vn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(t){if(Gn(t),3==t.H){var e=t.W++,n=Ve(t.I);if(ze(n,"SID",t.K),ze(n,"RID",e),ze(n,"TYPE","terminate"),Yn(t,n),e=new ve(t,t.l,e),e.L=2,e.A=qe(Ve(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.A,n=!0),n||(e.g=cr(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ae(e)}ar(t)}function Wn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Gn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Hn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;xt||Lt(),Dt||(xt(),Dt=!0),Pt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(_(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Xn(t,e){var n;n=e?e.m:t.W++;const r=Ve(t.I);ze(r,"SID",t.K),ze(r,"RID",n),ze(r,"AID",t.V),Yn(t,r),t.o&&t.s&&Bn(r,t.o,t.s),n=new ve(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){ze(e,n,t)})),t.h&&Le({},(function(t,n){ze(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const u=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{yn(u,t,"req"+n+"_")}catch(s){r&&r(u)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xt||Lt(),Dt||(xt(),Dt=!0),Pt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(_(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ve(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ve(t.wa);ze(e,"RID","rpc"),ze(e,"SID",t.K),ze(e,"AID",t.V),ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ze(e,"TO",t.qa),ze(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&Bn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qe(Ve(e)),n.u=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Hn(t)}else Zn(t);else if(i=e.s,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=_(t.pb,t);n||(n=new Fe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),qe(n)),_n(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Gn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(C(t.ma,e),C(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function ur(t,e,n){var r=n instanceof Fe?Ve(n):new Fe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),$e(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fe(null);r&&je(s,r),e&&(s.g=e),i&&$e(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ze(r,n,e),ze(r,"VER",t.ra),Yn(t,r),r}function cr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new kn(new bn({ob:n})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(U&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fr(t,e){bt.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function _r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Dn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=I(Nn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Un(this),0<this.B&&((this.L=xn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=Vt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ve(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,i,e),n=Ve(this.I),ze(n,"RID",t),ze(n,"CVER",22),this.F&&ze(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($n(s)))+"&"+e:this.o&&Bn(n,this.o,s)),dn(this.i,i),this.bb&&ze(n,"TYPE","init"),this.P?(ze(n,"$req",e),ze(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Xn(this,t):0==this.j.length||ln(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(_(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Wn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},b(fr,bt),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ur(t,null,t.Y),Hn(t)},fr.prototype.close=function(){Kn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=It(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Hn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,fr.$.N.call(this)},b(dr,pe),b(pr,ge),b(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},b(vr,mr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)yr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var wr={};function br(t){return-128<=t&&128>t?D(t,(function(t){return new _r([0|t],0>t?-1:0)})):new _r([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Or(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ir;return new _r(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Or(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Ir=4294967296,Sr=br(0),Cr=br(1),Ar=br(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function Or(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _r(n,~t.h).add(Cr)}function Nr(t,e){return t.add(Or(e))}function xr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Dr(t,e){this.g=t,this.h=e}function Pr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Dr(Sr,Sr);if(Rr(t))return e=Pr(Or(t),e),new Dr(Or(e.g),Or(e.h));if(Rr(e))return e=Pr(t,Or(e)),new Dr(Or(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=e;0>=r.X(t);)n=Lr(n),r=Lr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return e=Nr(t,i.R(e)),new Dr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);kr(s)&&(s=Cr),i=i.add(s),t=Nr(t,o)}return new Dr(i,t)}function Lr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _r(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _r(i,t.h)}r=_r.prototype,r.ea=function(){if(Rr(this))return-Or(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ir+r)*e,e*=Ir}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Rr(this))return"-"+Or(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Pr(n,e).g;n=Nr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Nr(this,t),Rr(t)?-1:kr(t)?0:1},r.abs=function(){return Rr(this)?Or(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Sr;if(Rr(this))return Rr(t)?Or(this).R(Or(t)):Or(Or(this).R(t));if(Rr(t))return Or(this.R(Or(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,u=65535&t.D(i);n[2*r+2*i]+=o*u,xr(n,2*r+2*i),n[2*r+2*i+1]+=s*u,xr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _r(n,0)},r.gb=function(t){return Pr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _r(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _r(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _r(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ue.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",bt.prototype.listen=bt.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Ur=c.createWebChannelTransport=function(){return new hr},Fr=c.getStatEventTarget=function(){return te()},Vr=c.ErrorCode=ae,jr=c.EventType=ue,$r=c.Event=Jt,Br=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zr=(c.FetchXmlHttpFactory=bn,c.WebChannel=he),qr=c.XhrIo=kn,Kr=c.Md5=vr,Wr=c.Integer=_r;const Gr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Hr.UNAUTHENTICATED=new Hr(null),Hr.GOOGLE_CREDENTIALS=new Hr("google-credentials-uid"),Hr.FIRST_PARTY=new Hr("first-party-uid"),Hr.MOCK_USER=new Hr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Vy("@firebase/firestore");function Yr(){return Xr.logLevel}function Jr(t,...e){if(Xr.logLevel<=o.$b.DEBUG){const n=e.map(ei);Xr.debug(`Firestore (${Qr}): ${t}`,...n)}}function Zr(t,...e){if(Xr.logLevel<=o.$b.ERROR){const n=e.map(ei);Xr.error(`Firestore (${Qr}): ${t}`,...n)}}function ti(t,...e){if(Xr.logLevel<=o.$b.WARN){const n=e.map(ei);Xr.warn(`Firestore (${Qr}): ${t}`,...n)}}function ei(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function ri(t,e){t||ni()}function ii(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oi extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ci{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Hr.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hi{constructor(t){this.t=t,this.currentUser=Hr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ai,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Jr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Jr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ai)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Jr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ri("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ri(null===t||"string"==typeof t),new Hr(t)}}class fi{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Hr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class di{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fi(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Hr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Jr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Jr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Jr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Jr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ri("string"==typeof t.token),this.R=t.token,new pi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function yi(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wi.fromMillis(Date.now())}static fromDate(t){return wi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?yi(this.nanoseconds,t.nanoseconds):yi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bi(t)}static min(){return new bi(new wi(0,0))}static max(){return new bi(new wi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n){void 0===e?e=0:e>t.length&&ni(),void 0===n?n=t.length-e:n>t.length-e&&ni(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ei.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ti extends Ei{construct(t,e,n){return new Ti(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new oi(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ti(e)}static emptyPath(){return new Ti([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ei{construct(t,e,n){return new Si(t,e,n)}static isValidIdentifier(t){return Ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new oi(si.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new oi(si.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new oi(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new oi(si.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Si(e)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.path=t}static fromPath(t){return new Ci(Ti.fromString(t))}static fromName(t){return new Ci(Ti.fromString(t).popFirst(5))}static empty(){return new Ci(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ti.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ci(new Ti(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function ki(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===r?new wi(n+1,0):new wi(n,r));return new Oi(i,Ci.empty(),e)}function Ri(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Oi(bi.min(),Ci.empty(),-1)}static max(){return new Oi(bi.max(),Ci.empty(),-1)}}function Ni(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ci.comparator(t.documentKey,e.documentKey),0!==n?n:yi(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const xi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==si.FAILED_PRECONDITION||t.message!==xi)throw t;Jr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ni(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Li(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Li?e:Li.resolve(e)}catch(t){return Li.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Li.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Li.reject(e)}static resolve(t){return new Li(((e,n)=>{e(t)}))}static reject(t){return new Li(((e,n)=>{n(t)}))}static waitFor(t){return new Li(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Li.resolve(!1);for(const n of t)e=e.next((t=>t?Li.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Li(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Li(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new ai,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Vi(t,e.error)):this.V.resolve()},this.transaction.onerror=e=>{const n=qi(e.target.error);this.V.reject(new Vi(t,n))}}static open(t,e,n,r){try{return new Mi(e,t.transaction(r,n))}catch(t){throw new Vi(e,t)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(Jr("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new $i(e)}}class Ui{constructor(t,e,n){this.name=t,this.version=e,this.p=n,12.2===Ui.S((0,a.ZQ)())&&Zr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Jr("SimpleDb","Removing database:",t),Bi(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!(0,a.zW)())return!1;if(Ui.C())return!0;const t=(0,a.ZQ)(),e=Ui.S(t),n=0<e&&e<10,r=Ui.v(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static C(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.__PRIVATE_env)||void 0===t?void 0:t.F)}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(t){return this.db||(Jr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Vi(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new oi(si.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new oi(si.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Vi(t,r))},r.onupgradeneeded=t=>{Jr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.p.N(e,r.transaction,t.oldVersion,this.version).next((()=>{Jr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.O(t);const e=Mi.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).next((t=>(e.g(),t))).catch((t=>(e.abort(t),Li.reject(t)))).toPromise();return s.catch((()=>{})),await e.m,s}catch(t){const e=t,n="FirebaseError"!==e.name&&s<3;if(Jr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Fi{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Bi(this.k.delete())}}class Vi extends oi{constructor(t,e){super(si.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ji(t){return"IndexedDbTransactionError"===t.name}class $i{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(Jr("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(Jr("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Bi(n)}add(t){return Jr("SimpleDb","ADD",this.store.name,t,t),Bi(this.store.add(t))}get(t){return Bi(this.store.get(t)).next((e=>(void 0===e&&(e=null),Jr("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return Jr("SimpleDb","DELETE",this.store.name,t),Bi(this.store.delete(t))}count(){return Jr("SimpleDb","COUNT",this.store.name),Bi(this.store.count())}W(t,e){const n=this.options(t,e),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const t=r.getAll(n.range);return new Li(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}{const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Li(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}H(t,e){Jr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.J=!1;const r=this.cursor(n);return this.G(r,((t,e,n)=>n.delete()))}Y(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.G(r,e)}Z(t){const e=this.cursor({});return new Li(((n,r)=>{e.onerror=t=>{const e=qi(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}G(t,e){const n=[];return new Li(((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new Fi(i),o=e(i.primaryKey,i.value,s);if(o instanceof Li){const t=o.catch((t=>(s.done(),Li.reject(t))));n.push(t)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>Li.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.J?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Bi(t){return new Li(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=qi(t.target.error);n(e)}}))}let zi=!1;function qi(t){const e=Ui.S((0,a.ZQ)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new oi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zi||(zi=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Wi(t){return null==t}function Gi(t){return 0===t&&1/t==-1/0}function Hi(t){return"number"==typeof t&&Number.isInteger(t)&&!Gi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki._e=-1;const Qi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yi=Xi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ji(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ts(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){this.comparator=t,this.root=e||rs.EMPTY}insert(t,e){return new es(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rs.BLACK,null,null))}remove(t){return new es(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ns(this.root,t,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ns(this.root,t,this.comparator,!0)}}class ns{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rs{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:rs.RED,this.left=null!=r?r:rs.EMPTY,this.right=null!=i?i:rs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new rs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return rs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const t=this.left.check();if(t!==this.right.check())throw ni();return t+(this.isRed()?0:1)}}rs.EMPTY=null,rs.RED=!0,rs.BLACK=!1,rs.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(t,e,n,r,i){return this}insert(t,e,n){return new rs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t){this.comparator=t,this.data=new es(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ss(this.data.getIterator())}getIteratorFrom(t){return new ss(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof is))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new is(this.comparator);return e.data=t,e}}class ss{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(t){this.fields=t,t.sort(Si.comparator)}static empty(){return new os([])}unionWith(t){let e=new is(Si.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new os(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _i(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new as("Invalid base64 string: "+t):t}}(t);return new us(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new us(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}us.EMPTY_BYTE_STRING=new us("");const cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(ri(!!t),"string"==typeof t){let e=0;const n=cs.exec(t);if(ri(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:hs(t.seconds),nanos:hs(t.nanos)}}function hs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function fs(t){return"string"==typeof t?us.fromBase64String(t):us.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ps(t){const e=t.mapValue.fields.__previous_value__;return ds(e)?ps(e):e}function gs(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new wi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,n,r,i,s,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class vs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ds(t)?4:Ds(t)?9007199254740991:10:ni()}function ws(t,e){if(t===e)return!0;const n=_s(t);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gs(t).isEqual(gs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ls(t.timestampValue),r=ls(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return fs(t.bytesValue).isEqual(fs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return hs(t.geoPointValue.latitude)===hs(e.geoPointValue.latitude)&&hs(t.geoPointValue.longitude)===hs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return hs(t.integerValue)===hs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=hs(t.doubleValue),r=hs(e.doubleValue);return n===r?Gi(n)===Gi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],ws);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ji(n)!==Ji(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ws(n[i],r[i])))return!1;return!0}(t,e);default:return ni()}}function bs(t,e){return void 0!==(t.values||[]).find((t=>ws(t,e)))}function Es(t,e){if(t===e)return 0;const n=_s(t),r=_s(e);if(n!==r)return yi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=hs(t.integerValue||t.doubleValue),r=hs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ts(t.timestampValue,e.timestampValue);case 4:return Ts(gs(t),gs(e));case 5:return yi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=fs(t),r=fs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=yi(n[i],r[i]);if(0!==t)return t}return yi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=yi(hs(t.latitude),hs(e.latitude));return 0!==n?n:yi(hs(t.longitude),hs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Es(n[i],r[i]);if(t)return t}return yi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ys.mapValue&&e===ys.mapValue)return 0;if(t===ys.mapValue)return 1;if(e===ys.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=yi(r[o],s[o]);if(0!==t)return t;const e=Es(n[r[o]],i[s[o]]);if(0!==e)return e}return yi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ni()}}function Ts(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return yi(t,e);const n=ls(t),r=ls(e),i=yi(n.seconds,r.seconds);return 0!==i?i:yi(n.nanos,r.nanos)}function Is(t){return Ss(t)}function Ss(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ls(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return fs(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Ci.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ss(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ss(t.fields[i])}`;return n+"}"}(t.mapValue):ni()}function Cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function As(t){return!!t&&"integerValue"in t}function ks(t){return!!t&&"arrayValue"in t}function Rs(t){return!!t&&"nullValue"in t}function Os(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ns(t){return!!t&&"mapValue"in t}function xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=xs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ds(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(t){this.value=t}static empty(){return new Ps({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ns(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xs(e)}setAll(t){let e=Si.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=xs(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ns(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ws(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Zi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ps(xs(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ls(t,0,bi.min(),bi.min(),bi.min(),Ps.empty(),0)}static newFoundDocument(t,e,n,r){return new Ls(t,1,e,bi.min(),n,r,0)}static newNoDocument(t,e){return new Ls(t,2,e,bi.min(),bi.min(),Ps.empty(),0)}static newUnknownDocument(t,e){return new Ls(t,3,e,bi.min(),bi.min(),Ps.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ps.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ps.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ls&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ls(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e){this.position=t,this.inclusive=e}}function Us(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):Es(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Fs(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ws(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e="asc"){this.field=t,this.dir=e}}function js(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{}class Bs extends $s{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Xs(t,e,n):"array-contains"===e?new to(t,n):"in"===e?new eo(t,n):"not-in"===e?new no(t,n):"array-contains-any"===e?new ro(t,n):new Bs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ys(t,n):new Js(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Es(e,this.value)):null!==e&&_s(this.value)===_s(e)&&this.matchesComparison(Es(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ni()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zs extends $s{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new zs(t,e)}matches(t){return qs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function qs(t){return"and"===t.op}function Ks(t){return Ws(t)&&qs(t)}function Ws(t){for(const e of t.filters)if(e instanceof zs)return!1;return!0}function Gs(t){if(t instanceof Bs)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(Ks(t))return t.filters.map((t=>Gs(t))).join(",");{const e=t.filters.map((t=>Gs(t))).join(",");return`${t.op}(${e})`}}function Hs(t,e){return t instanceof Bs?function(t,e){return e instanceof Bs&&t.op===e.op&&t.field.isEqual(e.field)&&ws(t.value,e.value)}(t,e):t instanceof zs?function(t,e){return e instanceof zs&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Hs(n,e.filters[r])),!0)}(t,e):void ni()}function Qs(t){return t instanceof Bs?function(t){return`${t.field.canonicalString()} ${t.op} ${Is(t.value)}`}(t):t instanceof zs?function(t){return t.op.toString()+" {"+t.getFilters().map(Qs).join(" ,")+"}"}(t):"Filter"}class Xs extends Bs{constructor(t,e,n){super(t,e,n),this.key=Ci.fromName(n.referenceValue)}matches(t){const e=Ci.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ys extends Bs{constructor(t,e){super(t,"in",e),this.keys=Zs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Js extends Bs{constructor(t,e){super(t,"not-in",e),this.keys=Zs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Zs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ci.fromName(t.referenceValue)))}class to extends Bs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ks(e)&&bs(e.arrayValue,this.value)}}class eo extends Bs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&bs(this.value.arrayValue,e)}}class no extends Bs{constructor(t,e){super(t,"not-in",e)}matches(t){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!bs(this.value.arrayValue,e)}}class ro extends Bs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ks(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>bs(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function so(t,e=null,n=[],r=[],i=null,s=null,o=null){return new io(t,e,n,r,i,s,o)}function oo(t){const e=ii(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Gs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Is(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Is(t))).join(",")),e.ce=t}return e.ce}function ao(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!js(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fs(t.startAt,e.startAt)&&Fs(t.endAt,e.endAt)}function uo(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lo(t,e,n,r,i,s,o,a){return new co(t,e,n,r,i,s,o,a)}function ho(t){return new co(t)}function fo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function po(t){return null!==t.collectionGroup}function go(t){const e=ii(t);if(null===e.le){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new is(Si.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Vs(r,n))})),t.has(Si.keyField().canonicalString())||e.le.push(new Vs(Si.keyField(),n))}return e.le}function mo(t){const e=ii(t);return e.he||(e.he=vo(e,go(t))),e.he}function vo(t,e){if("F"===t.limitType)return so(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Vs(t.field,e)}));const n=t.endAt?new Ms(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ms(t.startAt.position,t.startAt.inclusive):null;return so(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yo(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _o(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wo(t,e){return ao(mo(t),mo(e))&&t.limitType===e.limitType}function bo(t){return`${oo(mo(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Qs(t))).join(", ")}]`),Wi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Is(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Is(t))).join(",")),`Target(${e})`}(mo(t))}; limitType=${t.limitType})`}function To(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ci.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of go(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Us(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,go(t),e))&&!(t.endAt&&!function(t,e,n){const r=Us(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,go(t),e))}(t,e)}function Io(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function So(t){return(e,n)=>{let r=!1;for(const i of go(t)){const t=Co(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Co(t,e,n){const r=t.field.isKeyField()?Ci.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Es(r,i):ni()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Zi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return ts(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new es(Ci.comparator);function Ro(){return ko}const Oo=new es(Ci.comparator);function No(...t){let e=Oo;for(const n of t)e=e.insert(n.key,n);return e}function xo(t){let e=Oo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Do(){return Lo()}function Po(){return Lo()}function Lo(){return new Ao((t=>t.toString()),((t,e)=>t.isEqual(e)))}new es(Ci.comparator);const Mo=new is(Ci.comparator);function Uo(...t){let e=Mo;for(const n of t)e=e.add(n);return e}const Fo=new is(yi);function Vo(){return Fo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(e)?"-0":e}}function $o(t){return{integerValue:""+t}}function Bo(t,e){return Hi(e)?$o(e):jo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function qo(t,e,n){return t instanceof Go?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ds(e)&&(e=ps(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ho?Qo(t,e):t instanceof Xo?Yo(t,e):function(t,e){const n=Wo(t,e),r=Zo(n)+Zo(t.Ie);return As(n)&&As(t.Ie)?$o(r):jo(t.serializer,r)}(t,e)}function Ko(t,e,n){return t instanceof Ho?Qo(t,e):t instanceof Xo?Yo(t,e):n}function Wo(t,e){return t instanceof Jo?function(t){return As(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Go extends zo{}class Ho extends zo{constructor(t){super(),this.elements=t}}function Qo(t,e){const n=ta(e);for(const r of t.elements)n.some((t=>ws(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Xo extends zo{constructor(t){super(),this.elements=t}}function Yo(t,e){let n=ta(e);for(const r of t.elements)n=n.filter((t=>!ws(t,r)));return{arrayValue:{values:n}}}class Jo extends zo{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Zo(t){return hs(t.integerValue||t.doubleValue)}function ta(t){return ks(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e){this.field=t,this.transform=e}}function na(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ho&&e instanceof Ho||t instanceof Xo&&e instanceof Xo?_i(t.elements,e.elements,ws):t instanceof Jo&&e instanceof Jo?ws(t.Ie,e.Ie):t instanceof Go&&e instanceof Go}(t.transform,e.transform)}class ra{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ra}static exists(t){return new ra(void 0,t)}static updateTime(t){return new ra(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ia(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class sa{}function oa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ga(t.key,ra.none()):new la(t.key,t.data,ra.none());{const n=t.data,r=Ps.empty();let i=new is(Si.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ha(t.key,r,new os(i.toArray()),ra.none())}}function aa(t,e,n){t instanceof la?function(t,e,n){const r=t.value.clone(),i=da(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ha?function(t,e,n){if(!ia(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=da(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(fa(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof la?function(t,e,n,r){if(!ia(t.precondition,e))return n;const i=t.value.clone(),s=pa(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ha?function(t,e,n,r){if(!ia(t.precondition,e))return n;const i=pa(t.fieldTransforms,r,e),s=e.data;return s.setAll(fa(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ia(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ca(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_i(t,e,((t,e)=>na(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends sa{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ha extends sa{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function da(t,e,n){const r=new Map;ri(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ko(o,a,n[i]))}return r}function pa(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,qo(t,s,e))}return r}class ga extends sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ma extends sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&aa(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ua(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ua(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Po();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=oa(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Uo())}isEqual(t){return this.batchId===t.batchId&&_i(this.mutations,t.mutations,((t,e)=>ca(t,e)))&&_i(this.baseMutations,t.baseMutations,((t,e)=>ca(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wa,ba;function Ea(t){switch(t){default:return ni();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function Ta(t){if(void 0===t)return Zr("GRPC error has no .code"),si.UNKNOWN;switch(t){case wa.OK:return si.OK;case wa.CANCELLED:return si.CANCELLED;case wa.UNKNOWN:return si.UNKNOWN;case wa.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case wa.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case wa.INTERNAL:return si.INTERNAL;case wa.UNAVAILABLE:return si.UNAVAILABLE;case wa.UNAUTHENTICATED:return si.UNAUTHENTICATED;case wa.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case wa.NOT_FOUND:return si.NOT_FOUND;case wa.ALREADY_EXISTS:return si.ALREADY_EXISTS;case wa.PERMISSION_DENIED:return si.PERMISSION_DENIED;case wa.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case wa.ABORTED:return si.ABORTED;case wa.OUT_OF_RANGE:return si.OUT_OF_RANGE;case wa.UNIMPLEMENTED:return si.UNIMPLEMENTED;case wa.DATA_LOSS:return si.DATA_LOSS;default:return ni()}}(ba=wa||(wa={}))[ba.OK=0]="OK",ba[ba.CANCELLED=1]="CANCELLED",ba[ba.UNKNOWN=2]="UNKNOWN",ba[ba.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ba[ba.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ba[ba.NOT_FOUND=5]="NOT_FOUND",ba[ba.ALREADY_EXISTS=6]="ALREADY_EXISTS",ba[ba.PERMISSION_DENIED=7]="PERMISSION_DENIED",ba[ba.UNAUTHENTICATED=16]="UNAUTHENTICATED",ba[ba.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ba[ba.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ba[ba.ABORTED=10]="ABORTED",ba[ba.OUT_OF_RANGE=11]="OUT_OF_RANGE",ba[ba.UNIMPLEMENTED=12]="UNIMPLEMENTED",ba[ba.INTERNAL=13]="INTERNAL",ba[ba.UNAVAILABLE=14]="UNAVAILABLE",ba[ba.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ia=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Wr([4294967295,4294967295],0);function Aa(t){const e=Sa().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function ka(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Ra{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Oa(`Invalid padding: ${e}`);if(n<0)throw new Oa(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Oa(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Oa(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Wr.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply(Wr.fromNumber(n)));return 1===r.compare(Ca)&&(r=new Wr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Aa(t),[n,r]=ka(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ra(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Aa(t),[n,r]=ka(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,xa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Na(bi.min(),r,new es(yi),Ro(),Uo())}}class xa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new xa(n,e,Uo(),Uo(),Uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class Pa{constructor(t,e){this.targetId=t,this.fe=e}}class La{constructor(t,e,n=us.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ma{constructor(){this.ge=0,this.pe=Va(),this.ye=us.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Uo(),e=Uo(),n=Uo();return this.pe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new xa(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Va()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ri(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Ua{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ro(),this.Qe=Fa(),this.Ke=new es(yi)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:ni()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const i=r.target;if(uo(i))if(0===n){const t=new Ci(i.path);this.We(e,t,Ls.newNoDocument(t,bi.min()))}else ri(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Ia||Ia.tt(function(t,e,n,r,i){var s,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(u=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==f?void 0:f.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.fe,this.Le.nt(),n,i))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=fs(n).toUint8Array()}catch(t){if(t instanceof as)return ti("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ra(s,r,i)}catch(t){return ti(t instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&uo(i.target)){const e=new Ci(i.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,Ls.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=Uo();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Na(t,e,this.Ke,this.qe,n);return this.qe=Ro(),this.Qe=Fa(),this.Ke=new es(yi),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Ma,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new is(yi),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Jr("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ma),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Fa(){return new es(Ci.comparator)}function Va(){return new es(Ci.comparator)}const ja=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),$a=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ba=(()=>{const t={and:"AND",or:"OR"};return t})();class za{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qa(t,e){return t.useProto3Json||Wi(e)?e:{value:e}}function Ka(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ga(t,e){return Ka(t,e.toTimestamp())}function Ha(t){return ri(!!t),bi.fromTimestamp(function(t){const e=ls(t);return new wi(e.seconds,e.nanos)}(t))}function Qa(t,e){return Xa(t,e).canonicalString()}function Xa(t,e){const n=function(t){return new Ti(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ya(t){const e=Ti.fromString(t);return ri(wu(e)),e}function Ja(t,e){return Qa(t.databaseId,e.path)}function Za(t,e){const n=Ya(e);if(n.get(1)!==t.databaseId.projectId)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ci(ru(n))}function tu(t,e){return Qa(t.databaseId,e)}function eu(t){const e=Ya(t);return 4===e.length?Ti.emptyPath():ru(e)}function nu(t){return new Ti(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ru(t){return ri(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function iu(t,e,n){return{name:Ja(t,e),fields:n.value.mapValue.fields}}function su(t,e){return"found"in e?function(t,e){ri(!!e.found),e.found.name,e.found.updateTime;const n=Za(t,e.found.name),r=Ha(e.found.updateTime),i=e.found.createTime?Ha(e.found.createTime):bi.min(),s=new Ps({mapValue:{fields:e.found.fields}});return Ls.newFoundDocument(n,r,i,s)}(t,e):"missing"in e?function(t,e){ri(!!e.missing),ri(!!e.readTime);const n=Za(t,e.missing),r=Ha(e.readTime);return Ls.newNoDocument(n,r)}(t,e):ni()}function ou(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ni()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ri(void 0===e||"string"==typeof e),us.fromBase64String(e||"")):(ri(void 0===e||e instanceof Uint8Array),us.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?si.UNKNOWN:Ta(t.code);return new oi(e,t.message||"")}(o);n=new La(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Za(t,r.document.name),s=Ha(r.document.updateTime),o=r.document.createTime?Ha(r.document.createTime):bi.min(),a=new Ps({mapValue:{fields:r.document.fields}}),u=Ls.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Da(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Za(t,r.document),s=r.readTime?Ha(r.readTime):bi.min(),o=Ls.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Za(t,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in e))return ni();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new _a(r,i),o=t.targetId;n=new Pa(o,s)}}return n}function au(t,e){let n;if(e instanceof la)n={update:iu(t,e.key,e.value)};else if(e instanceof ga)n={delete:Ja(t,e.key)};else if(e instanceof ha)n={update:iu(t,e.key,e.data),updateMask:_u(e.fieldMask)};else{if(!(e instanceof ma))return ni();n={verify:Ja(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Go)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ho)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Jo)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw ni()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ga(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ni()}(t,e.precondition)),n}function uu(t,e){return{documents:[tu(t,e.path)]}}function cu(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tu(t,i);const s=function(t){if(0!==t.length)return yu(zs.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:mu(t.field),direction:du(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qa(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ut:n,parent:i}}function lu(t){let e=eu(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=fu(t);return e instanceof zs&&Ks(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Vs(vu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Wi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Ms(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Ms(n,e)}(n.endAt)),lo(e,i,o,s,a,"F",u,c)}function hu(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ni()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function fu(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vu(t.unaryFilter.field);return Bs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vu(t.unaryFilter.field);return Bs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vu(t.unaryFilter.field);return Bs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vu(t.unaryFilter.field);return Bs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ni()}}(t):void 0!==t.fieldFilter?function(t){return Bs.create(vu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ni()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return zs.create(t.compositeFilter.filters.map((t=>fu(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ni()}}(t.compositeFilter.op))}(t):ni()}function du(t){return ja[t]}function pu(t){return $a[t]}function gu(t){return Ba[t]}function mu(t){return{fieldPath:t.canonicalString()}}function vu(t){return Si.fromServerFormat(t.fieldPath)}function yu(t){return t instanceof Bs?function(t){if("=="===t.op){if(Os(t.value))return{unaryFilter:{field:mu(t.field),op:"IS_NAN"}};if(Rs(t.value))return{unaryFilter:{field:mu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Os(t.value))return{unaryFilter:{field:mu(t.field),op:"IS_NOT_NAN"}};if(Rs(t.value))return{unaryFilter:{field:mu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mu(t.field),op:pu(t.op),value:t.value}}}(t):t instanceof zs?function(t){const e=t.getFilters().map((t=>yu(t)));return 1===e.length?e[0]:{compositeFilter:{op:gu(t.op),filters:e}}}(t):ni()}function _u(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,n,r,i=bi.min(),s=bi.min(),o=us.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new bu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new bu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t){this.ct=t}}function Tu(t){const e=lu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_o(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(hs(t.integerValue));else if("doubleValue"in t){const n=hs(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Gi(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(fs(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?Ds(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):ni()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const r of Object.keys(n))this.Rt(r,e),this.It(n[r],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const r of n)this.It(r,e)}gt(t,e){this.Et(e,37),Ci.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Iu.bt=new Iu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(){this._n=new Cu}addToCollectionParentIndex(t,e){return this._n.add(e),Li.resolve()}getCollectionParents(t,e){return Li.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return Li.resolve()}deleteFieldIndex(t,e){return Li.resolve()}deleteAllFieldIndexes(t){return Li.resolve()}createTargetIndexes(t,e){return Li.resolve()}getDocumentsMatchingTarget(t,e){return Li.resolve(null)}getIndexType(t,e){return Li.resolve(0)}getFieldIndexes(t,e){return Li.resolve([])}getNextCollectionGroupToUpdate(t){return Li.resolve(null)}getMinOffset(t,e){return Li.resolve(Oi.min())}getMinOffsetFromCollectionGroup(t,e){return Li.resolve(Oi.min())}updateCollectionGroup(t,e,n){return Li.resolve()}updateIndexEntries(t,e){return Li.resolve()}}class Cu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new is(Ti.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new is(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Au{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Au(t,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Au.DEFAULT_COLLECTION_PERCENTILE=10,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Au.DEFAULT=new Au(41943040,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Au.DISABLED=new Au(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ku(0)}static Bn(){return new ku(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{constructor(){this.changes=new Ao((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ls.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Li.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ua(n.mutation,t,os.empty(),wi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Uo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Uo()){const r=Do();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=No();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Do();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Uo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Ro();const s=Lo(),o=function(){return Lo()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ha)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ua(o.mutation,e,o.mutation.getFieldMask(),wi.now())):s.set(e.key,os.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ou(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Lo();let r=new es(((t,e)=>t-e)),i=Uo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||os.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Uo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=Po();u.forEach((t=>{if(!i.has(t)){const r=oa(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):po(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Li.resolve(Do());let o=-1,a=i;return s.next((e=>Li.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Li.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Uo()))).next((t=>({batchId:o,changes:xo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ci(e)).next((t=>{let e=No();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=No();return this.indexManager.getCollectionParents(t,i).next((o=>Li.forEach(o,(o=>{const a=function(t,e){return new co(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ls.newInvalidDocument(r)))}));let n=No();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&ua(s.mutation,r,os.empty(),wi.now()),To(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return Li.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ha(t.createTime)}}(e)),Li.resolve()}getNamedQuery(t,e){return Li.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:Tu(t.bundledQuery),readTime:Ha(t.readTime)}}(e)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.overlays=new es(Ci.comparator),this.hr=new Map}getOverlay(t,e){return Li.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Do();return Li.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),Li.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),Li.resolve()}getOverlaysForCollection(t,e,n){const r=Do(),i=e.length+1,s=new Ci(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Li.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new es(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Do(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Do(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Li.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ya(e,n));let i=this.hr.get(e);void 0===i&&(i=Uo(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.Pr=new is(Lu.Ir),this.Tr=new is(Lu.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Lu(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Lu(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new Ci(new Ti([])),n=new Lu(e,t),r=new Lu(e,t+1),i=[];return this.Tr.forEachInRange([n,r],(t=>{this.Ar(t),i.push(t.key)})),i}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new Ci(new Ti([])),n=new Lu(e,t),r=new Lu(e,t+1);let i=Uo();return this.Tr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Lu(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Lu{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return Ci.comparator(t.key,e.key)||yi(t.pr,e.pr)}static Er(t,e){return yi(t.pr,e.pr)||Ci.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new is(Lu.Ir)}checkEmpty(t){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new va(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.wr=this.wr.add(new Lu(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(t,e){return Li.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.br(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Lu(e,0),r=new Lu(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(t=>{const e=this.Sr(t.pr);i.push(e)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new is(yi);return e.forEach((t=>{const e=new Lu(t,0),r=new Lu(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,r],(t=>{n=n.add(t.pr)}))})),Li.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new Lu(new Ci(i),0);let o=new is(yi);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.pr)),!0)}),s),Li.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ri(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Li.forEach(e.mutations,(r=>{const i=new Lu(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Lu(e,0),r=this.wr.firstAfterOrEqual(n);return Li.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Li.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.vr=t,this.docs=function(){return new es(Ci.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Li.resolve(n?n.document.mutableCopy():Ls.newInvalidDocument(e))}getEntries(t,e){let n=Ro();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ls.newInvalidDocument(t))})),Li.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Ro();const s=e.path,o=new Ci(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ni(Ri(o),n)<=0||(r.has(o.key)||To(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ni()}Fr(t,e){return Li.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Fu(this)}getSize(t){return Li.resolve(this.size)}}class Fu extends Ru{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.ar.addEntry(t,r)):this.ar.removeEntry(n)})),Li.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t){this.persistence=t,this.Mr=new Ao((t=>oo(t)),ao),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Pu,this.targetCount=0,this.Br=ku.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),Li.resolve()}getLastRemoteSnapshotVersion(t){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Li.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),Li.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ku(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,Li.resolve()}updateTargetData(t,e){return this.qn(e),Li.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,Li.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(t){return Li.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return Li.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),Li.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Li.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),Li.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return Li.resolve(n)}containsKey(t,e){return Li.resolve(this.Nr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Ki(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Vu(this),this.indexManager=new Su,this.remoteDocumentCache=function(t){return new Uu(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new Eu(e),this.$r=new xu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Du,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Mu(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Jr("MemoryPersistence","Starting transaction:",t);const r=new $u(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((t=>this.referenceDelegate.Wr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gr(t,e){return Li.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class $u extends Di{constructor(t){super(),this.currentSequenceNumber=t}}class Bu{constructor(t){this.persistence=t,this.zr=new Pu,this.jr=null}static Hr(t){return new Bu(t)}get Jr(){if(this.jr)return this.jr;throw ni()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),Li.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),Li.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Jr,(n=>{const r=Ci.fromPath(n);return this.Yr(t,r).next((t=>{t||e.removeEntry(r,bi.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return Li.or([()=>Li.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=r}static Ki(t,e){let n=Uo(),r=Uo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zu(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return(0,a.nr)()?8:Ui.v((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.ji(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Hi(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new qu;return this.Ji(t,e,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(t,e,n,r.size)}))})).next((()=>i.result))}Yi(t,e,n,r){return n.documentReadCount<this.Wi?(Yr()<=o.$b.DEBUG&&Jr("QueryEngine","SDK will not create cache indexes for query:",Eo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Li.resolve()):(Yr()<=o.$b.DEBUG&&Jr("QueryEngine","Query:",Eo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Yr()<=o.$b.DEBUG&&Jr("QueryEngine","The SDK decides to create cache indexes for query:",Eo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mo(e))):Li.resolve())}ji(t,e){if(fo(e))return Li.resolve(null);let n=mo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=_o(e,null,"F"),n=mo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Uo(...r);return this.zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,r);return this.Xi(e,s,i,n.readTime)?this.ji(t,_o(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,r){return fo(e)||r.isEqual(bi.min())?Li.resolve(null):this.zi.getDocuments(t,n).next((i=>{const s=this.Zi(e,i);return this.Xi(e,s,n,r)?Li.resolve(null):(Yr()<=o.$b.DEBUG&&Jr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Eo(e)),this.es(t,s,e,ki(r,-1)).next((t=>t)))}))}Zi(t,e){let n=new is(So(t));return e.forEach(((e,r)=>{To(t,r)&&(n=n.add(r))})),n}Xi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(t,e,n){return Yr()<=o.$b.DEBUG&&Jr("QueryEngine","Using full collection scan to execute query:",Eo(e)),this.zi.getDocumentsMatchingQuery(t,e,Oi.min(),n)}es(t,e,n,r){return this.zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,n,r){this.persistence=t,this.ts=e,this.serializer=r,this.ns=new es(yi),this.rs=new Ao((t=>oo(t)),ao),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nu(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}function Gu(t,e,n,r){return new Wu(t,e,n,r)}async function Hu(t,e){const n=ii(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Uo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Qu(t){const e=ii(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}function Xu(t,e){const n=ii(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(us.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,s)&&o.push(n.Qr.updateTargetData(t,c))}));let a=Ro(),u=Uo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Yu(t,s,e.documentUpdates).next((t=>{a=t.cs,u=t.ls}))),!r.isEqual(bi.min())){const e=n.Qr.getLastRemoteSnapshotVersion(t).next((e=>n.Qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Li.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.ns=i,t)))}function Yu(t,e,n){let r=Uo(),i=Uo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ro();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bi.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Jr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function Ju(t,e){const n=ii(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Qr.getTargetData(t,e).next((i=>i?(r=i,Li.resolve(r)):n.Qr.allocateTargetId(t).next((i=>(r=new bu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ns.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(t.targetId,t),n.rs.set(e,t.targetId)),t}))}async function Zu(t,e,n){const r=ii(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ji(t))throw t;Jr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function tc(t,e,n){const r=ii(t);let i=bi.min(),s=Uo();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ii(t),i=r.rs.get(n);return void 0!==i?Li.resolve(r.ns.get(i)):r.Qr.getTargetData(e,n)}(r,t,mo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.ts.getDocumentsMatchingQuery(t,e,n?i:bi.min(),n?s:Uo()))).next((t=>(ec(r,Io(e),t),{documents:t,hs:s})))))}function ec(t,e,n){let r=t.ss.get(e)||bi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ss.set(e,r)}class nc{constructor(){this.activeTargetIds=Vo()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rc{constructor(){this.no=new nc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new nc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{io(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Jr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Jr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc=null;function ac(){return null===oc?oc=function(){return 268435456+Math.round(2147483648*Math.random())}():oc++,"0x"+oc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const uc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="WebChannelConnection";class hc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(t,e,n,r,i){const s=ac(),o=this.bo(t,e.toUriEncodedString());Jr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(t,o,a,n).then((e=>(Jr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ti("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,r,i,s){return this.So(t,e,n,r,i)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=uc[t];return`${this.fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,r){const i=ac();return new Promise(((s,o)=>{const a=new qr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const e=a.getResponseJson();Jr(lc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Vr.TIMEOUT:Jr(lc,`RPC '${t}' ${i} timed out`),o(new oi(si.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Jr(lc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(e)>=0?e:si.UNKNOWN}(e.status);o(new oi(t,e.message))}else o(new oi(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oi(si.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Jr(lc,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);Jr(lc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}Fo(t,e,n){const r=ac(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ur(),o=Fr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Jr(lc,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let h=!1,f=!1;const d=new cc({lo:e=>{f?Jr(lc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Jr(lc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Jr(lc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},ho:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,zr.EventType.OPEN,(()=>{f||Jr(lc,`RPC '${t}' stream ${r} transport opened.`)})),p(l,zr.EventType.CLOSE,(()=>{f||(f=!0,Jr(lc,`RPC '${t}' stream ${r} transport closed`),d.Vo())})),p(l,zr.EventType.ERROR,(e=>{f||(f=!0,ti(lc,`RPC '${t}' stream ${r} transport errored:`,e),d.Vo(new oi(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,zr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ri(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Jr(lc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=wa[t];if(void 0!==e)return Ta(e)}(e),i=o.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Vo(new oi(n,i)),l.close()}else Jr(lc,`RPC '${t}' stream ${r} received:`,i),d.mo(i)}})),p(o,$r.STAT_EVENT,(e=>{e.stat===Br.PROXY?Jr(lc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Br.NOPROXY&&Jr(lc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Ro()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new za(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,e-n);r>0&&Jr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e,n,r,i,s,o,a){this.oi=t,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new pc(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===si.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new oi(si.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Jr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Jr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mc extends gc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=ou(this.serializer,t),n=function(t){if(!("targetChange"in t))return bi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bi.min():e.readTime?Ha(e.readTime):bi.min()}(t);return this.listener.u_(e,n)}c_(t){const e={};e.database=nu(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=uo(r)?{documents:uu(t,r)}:{query:cu(t,r).ut},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Wa(t,e.resumeToken);const r=qa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(bi.min())>0){n.readTime=Ka(t,e.snapshotVersion.toTimestamp());const r=qa(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=hu(this.serializer,t);n&&(e.labels=n),this.t_(e)}l_(t){const e={};e.database=nu(this.serializer),e.removeTarget=t,this.t_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,Xa(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}vo(t,e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(t,Xa(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class yc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Zr(e),this.g_=!1):Jr("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((t=>{n.enqueueAndForget((async()=>{kc(this)&&(Jr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ii(t);e.v_.add(4),await bc(e),e.x_.set("Unknown"),e.v_.delete(4),await wc(e)}(this))}))})),this.x_=new yc(n,r)}}async function wc(t){if(kc(t))for(const e of t.F_)await e(!0)}async function bc(t){for(const e of t.F_)await e(!1)}function Ec(t,e){const n=ii(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Ac(n)?Cc(n):Mc(n).Jo()&&Ic(n,e))}function Tc(t,e){const n=ii(t),r=Mc(n);n.C_.delete(e),r.Jo()&&Sc(n,e),0===n.C_.size&&(r.Jo()?r.Xo():kc(n)&&n.x_.set("Unknown"))}function Ic(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mc(t).c_(e)}function Sc(t,e){t.O_.Oe(e),Mc(t).l_(e)}function Cc(t){t.O_=new Ua({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Mc(t).start(),t.x_.p_()}function Ac(t){return kc(t)&&!Mc(t).Ho()&&t.C_.size>0}function kc(t){return 0===ii(t).v_.size}function Rc(t){t.O_=void 0}async function Oc(t){t.C_.forEach(((e,n)=>{Ic(t,e)}))}async function Nc(t,e){Rc(t),Ac(t)?(t.x_.S_(e),Cc(t)):t.x_.set("Unknown")}async function xc(t,e,n){if(t.x_.set("Online"),e instanceof La&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.C_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.C_.delete(r),t.O_.removeTarget(r))}(t,e)}catch(n){Jr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Dc(t,n)}else if(e instanceof Da?t.O_.$e(e):e instanceof Pa?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(bi.min()))try{const e=await Qu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.O_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.C_.get(r);i&&t.C_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.C_.get(e);if(!r)return;t.C_.set(e,r.withResumeToken(us.EMPTY_BYTE_STRING,r.snapshotVersion)),Sc(t,e);const i=new bu(r.target,e,n,r.sequenceNumber);Ic(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Jr("RemoteStore","Failed to raise snapshot:",e),await Dc(t,e)}}async function Dc(t,e,n){if(!ji(e))throw e;t.v_.add(1),await bc(t),t.x_.set("Offline"),n||(n=()=>Qu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Jr("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await wc(t)}))}async function Pc(t,e){const n=ii(t);n.asyncQueue.verifyOperationInProgress(),Jr("RemoteStore","RemoteStore received new credentials");const r=kc(n);n.v_.add(3),await bc(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await wc(n)}async function Lc(t,e){const n=ii(t);e?(n.v_.delete(2),await wc(n)):e||(n.v_.add(2),await bc(n),n.x_.set("Unknown"))}function Mc(t){return t.N_||(t.N_=function(t,e,n){const r=ii(t);return r.R_(),new mc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Po:Oc.bind(null,t),To:Nc.bind(null,t),u_:xc.bind(null,t)}),t.F_.push((async e=>{e?(t.N_.Zo(),Ac(t)?Cc(t):t.x_.set("Unknown")):(await t.N_.stop(),Rc(t))}))),t.N_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Uc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oi(si.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fc(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),ji(t))return new oi(si.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ci.comparator(e.key,n.key):(t,e)=>Ci.comparator(t.key,e.key),this.keyedMap=No(),this.sortedSet=new es(this.comparator)}static emptySet(t){return new Vc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.L_=new es(Ci.comparator)}track(t){const e=t.doc.key,n=this.L_.get(e);n?0!==t.type&&3===n.type?this.L_=this.L_.insert(e,t):3===t.type&&1!==n.type?this.L_=this.L_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.L_=this.L_.remove(e):1===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):ni():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class $c{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new $c(t,e,Vc.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.q_=void 0,this.Q_=[]}}class zc{constructor(){this.queries=new Ao((t=>bo(t)),wo),this.onlineState="Unknown",this.K_=new Set}}async function qc(t,e){const n=ii(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bc),i)try{s.q_=await n.onListen(r)}catch(t){const n=Fc(t,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&Hc(n)}async function Kc(t,e){const n=ii(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.Q_.indexOf(e);t>=0&&(s.Q_.splice(t,1),i=0===s.Q_.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wc(t,e){const n=ii(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Q_)t.W_(i)&&(r=!0);e.q_=i}}r&&Hc(n)}function Gc(t,e,n){const r=ii(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Hc(t){t.K_.forEach((t=>{t.next()}))}class Qc{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new $c(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=$c.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(t){this.key=t}}class Yc{constructor(t){this.key=t}}class Jc{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Uo(),this.mutatedKeys=Uo(),this.ua=So(t),this.ca=new Vc(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new jc,r=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=To(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ia(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.ua(l,a)>0||u&&this.ua(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ca:s,Pa:n,Xi:o,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const s=t.Pa.k_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ua(t.doc,e.doc))),this.Ta(n),r=null!=r&&r;const o=e&&!r?this.Ea():[],a=0===this.aa.size&&this.current&&!r?1:0,u=a!==this._a;return this._a=a,0!==s.length||u?{snapshot:new $c(this.query,t.ca,i,s,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new jc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=Uo(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new Yc(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new Xc(n))})),e}Ra(t){this.oa=t.hs,this.aa=Uo();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return $c.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class Zc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tl{constructor(t){this.key=t,this.ma=!1}}class el{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Ao((t=>bo(t)),wo),this.pa=new Map,this.ya=new Set,this.wa=new es(Ci.comparator),this.Sa=new Map,this.ba=new Pu,this.Da={},this.Ca=new Map,this.va=ku.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function nl(t,e){const n=ml(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const t=await Ju(n.localStore,mo(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await rl(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Ec(n.remoteStore,t)}return i}async function rl(t,e,n,r,i){t.Ma=(e,n,r)=>async function(t,e,n,r){let i=e.view.ha(n);i.Xi&&(i=await tc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return ll(t,e.targetId,a.da),a.snapshot}(t,e,n,r);const s=await tc(t.localStore,e,!0),o=new Jc(e,s.hs),a=o.ha(s.documents),u=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);ll(t,n,c.da);const l=new Zc(e,n,o);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function il(t,e){const n=ii(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((t=>!wo(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Tc(n.remoteStore,r.targetId),ul(n,r.targetId)})).catch(Pi)):(ul(n,r.targetId),await Zu(n.localStore,r.targetId,!0))}async function sl(t,e){const n=ii(t);try{const t=await Xu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Sa.get(e);r&&(ri(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?ri(r.ma):t.removedDocuments.size>0&&(ri(r.ma),r.ma=!1))})),await dl(n,t,e)}catch(t){await Pi(t)}}function ol(t,e,n){const r=ii(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ii(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.Q_)i.U_(e)&&(r=!0)})),r&&Hc(n)}(r.eventManager,e),t.length&&r.fa.u_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function al(t,e,n){const r=ii(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let t=new es(Ci.comparator);t=t.insert(s,Ls.newNoDocument(s,bi.min()));const n=Uo().add(s),i=new Na(bi.min(),new Map,new es(yi),t,n);await sl(r,i),r.wa=r.wa.remove(s),r.Sa.delete(e),fl(r)}else await Zu(r.localStore,e,!1).then((()=>ul(r,e,n))).catch(Pi)}function ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach((e=>{t.ba.containsKey(e)||cl(t,e)}))}function cl(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(Tc(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),fl(t))}function ll(t,e,n){for(const r of n)r instanceof Xc?(t.ba.addReference(r.key,e),hl(t,r)):r instanceof Yc?(Jr("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||cl(t,r.key)):ni()}function hl(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(Jr("SyncEngine","New document in limbo: "+n),t.ya.add(r),fl(t))}function fl(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Ci(Ti.fromString(e)),r=t.va.next();t.Sa.set(r,new tl(n)),t.wa=t.wa.insert(n,r),Ec(t.remoteStore,new bu(mo(ho(n.path)),r,"TargetPurposeLimboResolution",Ki._e))}}async function dl(t,e,n){const r=ii(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((t,a)=>{o.push(r.Ma(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=zu.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fa.u_(i),await async function(t,e){const n=ii(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Li.forEach(e,(e=>Li.forEach(e.qi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Li.forEach(e.Qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ji(t))throw t;Jr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ns.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(t,i)}}}(r.localStore,s))}async function pl(t,e){const n=ii(t);if(!n.currentUser.isEqual(e)){Jr("SyncEngine","User change. New user:",e.toKey());const t=await Hu(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach((t=>{t.forEach((t=>{t.reject(new oi(si.CANCELLED,e))}))})),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await dl(n,t.us)}}function gl(t,e){const n=ii(t),r=n.Sa.get(e);if(r&&r.ma)return Uo().add(r.key);{let t=Uo();const r=n.pa.get(e);if(!r)return t;for(const e of r){const r=n.ga.get(e);t=t.unionWith(r.view.la)}return t}}function ml(t){const e=ii(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=al.bind(null,e),e.fa.u_=Wc.bind(null,e.eventManager),e.fa.xa=Gc.bind(null,e.eventManager),e}class vl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=dc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Gu(this.persistence,new Ku,t.initialUser,this.serializer)}createPersistence(t){return new ju(Bu.Hr,this.serializer)}createSharedClientState(t){return new rc}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ol(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pl.bind(null,this.syncEngine),await Lc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zc}()}createDatastore(t){const e=dc(t.databaseInfo.databaseId),n=function(t){return new hc(t)}(t.databaseInfo);return function(t,e,n,r){return new vc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new _c(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>ol(this.syncEngine,t,0)),function(){return sc.D()?new sc:new ic}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new el(t,e,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=ii(t);Jr("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await bc(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Zr("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new oi(si.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(t,e){const n=ii(t),r={documents:e.map((t=>Ja(n.serializer,t)))},i=await n.vo("BatchGetDocuments",n.serializer.databaseId,Ti.emptyPath(),r,e.length),s=new Map;i.forEach((t=>{const e=su(n.serializer,t);s.set(e.key.toString(),e)}));const o=[];return e.forEach((t=>{const e=s.get(t.toString());ri(!!e),o.push(e)})),o}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastTransactionError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new ga(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=Ci.fromPath(e);this.mutations.push(new ma(n,this.precondition(n)))})),await async function(t,e){const n=ii(t),r={writes:e.map((t=>au(n.serializer,t)))};await n.So("Commit",n.serializer.databaseId,Ti.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw ni();e=bi.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new oi(si.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(bi.min())?ra.exists(!1):ra.updateTime(e):ra.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(bi.min()))throw new oi(si.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ra.updateTime(e)}return ra.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e,n,r,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=i,this.za=n.maxAttempts,this.jo=new pc(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo((async()=>{const t=new wl(this.datastore),e=this.Ja(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Ya(t)}))))})).catch((t=>{this.Ya(t)}))}))}Ja(t){try{const e=this.updateFunction(t);return!Wi(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ya(t){this.za>0&&this.Za(t)?(this.za-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ha(),Promise.resolve())))):this.deferred.reject(t)}Za(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Ea(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Hr.UNAUTHENTICATED,this.clientId=vi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Jr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Jr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Tl(t,e){t.asyncQueue.verifyOperationInProgress(),Jr("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Hu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cl(t);Jr("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Pc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Pc(e.remoteStore,n))),t._onlineComponents=e}function Sl(t){return"FirebaseError"===t.name?t.code===si.FAILED_PRECONDITION||t.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Cl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Jr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Sl(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Tl(t,new vl)}}else Jr("FirestoreClient","Using default OfflineComponentProvider"),await Tl(t,new vl);return t._offlineComponents}async function Al(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Jr("FirestoreClient","Using user provided OnlineComponentProvider"),await Il(t,t._uninitializedComponentsProvider._online)):(Jr("FirestoreClient","Using default OnlineComponentProvider"),await Il(t,new yl))),t._onlineComponents}function kl(t){return Al(t).then((t=>t.datastore))}async function Rl(t){const e=await Al(t),n=e.eventManager;return n.onListen=nl.bind(null,e.syncEngine),n.onUnlisten=il.bind(null,e.syncEngine),n}function Ol(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new _l({next:s=>{e.enqueueAndForget((()=>Kc(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new oi(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Qc(ho(n.path),s,{includeMetadataChanges:!0,Z_:!0});return qc(t,o)}(await Rl(t),t.asyncQueue,e,n,r))),r.promise}function Nl(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new _l({next:n=>{e.enqueueAndForget((()=>Kc(t,o))),n.fromCache&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Qc(n,s,{includeMetadataChanges:!0,Z_:!0});return qc(t,o)}(await Rl(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Dl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e,n){if(!n)throw new oi(si.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ll(t,e,n,r){if(!0===e&&!0===r)throw new oi(si.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ml(t){if(!Ci.isDocumentKey(t))throw new oi(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(Ci.isDocumentKey(t))throw new oi(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ni()}function Vl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oi(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new oi(si.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new oi(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new oi(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ll("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $l{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oi(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new oi(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ci;switch(t.type){case"firstParty":return new di(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new oi(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Dl.get(t);e&&(Jr("ComponentProvider","Removing Datastore"),Dl.delete(t),e.terminate())}(this),Promise.resolve()}}function Bl(t,e,n,r={}){var i;const s=(t=Vl(t,$l))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Hr.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new oi(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hr(s)}t._authCredentials=new li(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zl(this.firestore,t,this._query)}}class ql{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ql(this.firestore,t,this._key)}}class Kl extends zl{constructor(t,e,n){super(t,e,ho(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ql(this.firestore,null,new Ci(t))}withConverter(t){return new Kl(this.firestore,t,this._path)}}function Wl(t,e,...n){if(t=(0,a.Ku)(t),Pl("collection","path",e),t instanceof $l){const r=Ti.fromString(e,...n);return Ul(r),new Kl(t,null,r)}{if(!(t instanceof ql||t instanceof Kl))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Ul(r),new Kl(t.firestore,null,r)}}function Gl(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=vi.newId()),Pl("doc","path",e),t instanceof $l){const r=Ti.fromString(e,...n);return Ml(r),new ql(t,null,new Ci(r))}{if(!(t instanceof ql||t instanceof Kl))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Ml(r),new ql(t.firestore,t instanceof Kl?t.converter:null,new Ci(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hl{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new pc(this,"async_queue_retry"),this._u=()=>{const t=fc();t&&Jr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=fc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=fc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise((()=>{}));const e=new ai;return this.uu((()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.eu.push(t),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!ji(t))throw t;Jr("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(t){const e=this.Xa.then((()=>(this.iu=!0,t().catch((t=>{this.ru=t,this.iu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.iu=!1,t))))));return this.Xa=e,e}enqueueAfterDelay(t,e,n){this.au(),this.ou.indexOf(t)>-1&&(e=0);const r=Uc.createAndSchedule(this,t,e,n,(t=>this.lu(t)));return this.nu.push(r),r}au(){this.ru&&ni()}verifyOperationInProgress(){}async hu(){let t;do{t=this.Xa,await t}while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then((()=>{this.nu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.nu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.hu()}))}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Ql extends $l{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Hl}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jl(this),this._firestoreClient.terminate()}}function Xl(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.yU)("firestore");t&&Bl(s,...t)}return s}function Yl(t){return t._firestoreClient||Jl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jl(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new ms(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,xl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new El(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zl(us.fromBase64String(t))}catch(t){throw new oi(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Zl(us.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new oi(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new oi(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new oi(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yi(this._lat,t._lat)||yi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=/^__.*__$/;class ih{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ha(t,this.data,this.fieldMask,e,this.fieldTransforms):new la(t,this.data,e,this.fieldTransforms)}}class sh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ha(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function oh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ni()}}class ah{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new ah(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Au({path:n,Vu:!1});return r.mu(t),r}fu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Th(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(0===t.length)throw this.pu("Document fields must not be empty");if(oh(this.du)&&rh.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class uh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||dc(t)}Su(t,e,n,r=!1){return new ah({du:t,methodName:e,wu:n,path:Si.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new uh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lh(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);_h("Data must be an object, but it was:",o,r);const a=vh(r,o);let u,c;if(s.merge)u=new os(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=wh(e,r,n);if(!o.contains(i))throw new oi(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ih(t,i)||t.push(i)}u=new os(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new ih(new Ps(a),u,c)}class hh extends eh{_toFieldTransform(t){if(2!==t.du)throw 1===t.du?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof hh}}class fh extends eh{_toFieldTransform(t){return new ea(t.path,new Go)}isEqual(t){return t instanceof fh}}function dh(t,e,n,r){const i=t.Su(1,e,n);_h("Data must be an object, but it was:",i,r);const s=[],o=Ps.empty();Zi(r,((t,r)=>{const u=Eh(e,t,n);r=(0,a.Ku)(r);const c=i.fu(u);if(r instanceof hh)s.push(u);else{const t=mh(r,c);null!=t&&(s.push(u),o.set(u,t))}}));const u=new os(s);return new sh(o,u,i.fieldTransforms)}function ph(t,e,n,r,i,s){const o=t.Su(1,e,n),u=[wh(e,r,n)],c=[i];if(s.length%2!=0)throw new oi(si.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)u.push(wh(e,s[a])),c.push(s[a+1]);const l=[],h=Ps.empty();for(let d=u.length-1;d>=0;--d)if(!Ih(l,u[d])){const t=u[d];let e=c[d];e=(0,a.Ku)(e);const n=o.fu(t);if(e instanceof hh)l.push(t);else{const r=mh(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new os(l);return new sh(h,f,o.fieldTransforms)}function gh(t,e,n,r=!1){return mh(n,t.Su(r?4:3,e))}function mh(t,e){if(yh(t=(0,a.Ku)(t)))return _h("Unsupported field value:",e,t),vh(t,e);if(t instanceof eh)return function(t,e){if(!oh(e.du))throw e.pu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.pu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&4!==e.du)throw e.pu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=mh(i,e.gu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Bo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wi.fromDate(t);return{timestampValue:Ka(e.serializer,n)}}if(t instanceof wi){const n=new wi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ka(e.serializer,n)}}if(t instanceof nh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Zl)return{bytesValue:Wa(e.serializer,t._byteString)};if(t instanceof ql){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.pu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Qa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.pu(`Unsupported field value: ${Fl(t)}`)}(t,e)}function vh(t,e){const n={};return ts(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,((t,r)=>{const i=mh(r,e.Ru(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function yh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wi||t instanceof nh||t instanceof Zl||t instanceof ql||t instanceof eh)}function _h(t,e,n){if(!yh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Fl(n);throw"an object"===r?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function wh(t,e,n){if((e=(0,a.Ku)(e))instanceof th)return e._internalPath;if("string"==typeof e)return Eh(t,e);throw Th("Field path arguments must be of type string or ",t,!1,void 0,n)}const bh=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(bh)>=0)throw Th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new th(...e.split("."))._internalPath}catch(b){throw Th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Th(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new oi(si.INVALID_ARGUMENT,a+t+u)}function Ih(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ql(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ah("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ch extends Sh{data(){return super.data()}}function Ah(t,e){return"string"==typeof e?Eh(t,e):e instanceof th?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new oi(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class Oh extends Rh{}function Nh(t,e,...n){let r=[];e instanceof Rh&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Ph)).length,n=t.filter((t=>t instanceof xh)).length;if(e>1||e>0&&n>0)throw new oi(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class xh extends Oh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new xh(t,e,n)}_apply(t){const e=this._parse(t);return Uh(t._query,e),new zl(t.firestore,t.converter,yo(t._query,e))}_parse(t){const e=ch(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Mh(o,s);const e=[];for(const n of o)e.push(Lh(r,t,n));a={arrayValue:{values:e}}}else a=Lh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Mh(o,s),a=gh(n,e,o,"in"===s||"not-in"===s);return Bs.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Dh(t,e,n){const r=e,i=Ah("where",t);return xh._create(i,r,n)}class Ph extends Rh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ph(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:zs.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Uh(n,i),n=yo(n,i)}(t._query,e),new zl(t.firestore,t.converter,yo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Lh(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new oi(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!po(e)&&-1!==n.indexOf("/"))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ti.fromString(n));if(!Ci.isDocumentKey(r))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cs(t,new Ci(r))}if(n instanceof ql)return Cs(t,n._key);throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fl(n)}.`)}function Mh(t,e){if(!Array.isArray(t)||0===t.length)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uh(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Fh{convertValue(t,e="none"){switch(_s(t)){case 0:return null;case 1:return t.booleanValue;case 2:return hs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ni()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Zi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new nh(hs(t.latitude),hs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ps(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gs(t));default:return null}}convertTimestamp(t){const e=ls(t);return new wi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ti.fromString(t);ri(wu(n));const r=new vs(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(e)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jh extends Fh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ql(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $h{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bh extends Sh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ah("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class zh extends Bh{data(t={}){return super.data(t)}}class qh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new $h(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new zh(this._firestore,this._userDataWriter,n.key,n,new $h(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new oi(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new zh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $h(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new zh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $h(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Kh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Kh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wh(t){t=Vl(t,ql);const e=Vl(t.firestore,Ql);return Ol(Yl(e),t._key).then((n=>Qh(e,t,n)))}class Gh extends Fh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ql(this.firestore,null,e)}}function Hh(t){t=Vl(t,zl);const e=Vl(t.firestore,Ql),n=Yl(e),r=new Gh(e);return kh(t._query),Nl(n,t._query).then((n=>new qh(e,r,t,n)))}function Qh(t,e,n){const r=n.docs.get(e._key),i=new Gh(t);return new Bh(t,i,e._key,r,new $h(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xh={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e){if((t=(0,a.Ku)(t)).firestore!==e)throw new oi(si.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=ch(t)}get(t){const e=Yh(t,this._firestore),n=new jh(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return ni();const r=t[0];if(r.isFoundDocument())return new Sh(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Sh(this._firestore,n,e._key,null,e.converter);throw ni()}))}set(t,e,n){const r=Yh(t,this._firestore),i=Vh(r.converter,e,n),s=lh(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Yh(t,this._firestore);let s;return s="string"==typeof(e=(0,a.Ku)(e))||e instanceof th?ph(this._dataReader,"Transaction.update",i._key,e,n,r):dh(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Yh(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Yh(t,this._firestore),n=new Gh(this._firestore);return super.get(t).then((t=>new Bh(this._firestore,n,e._key,t._document,new $h(!1,!1),e.converter)))}}function Zh(t,e,n){t=Vl(t,Ql);const r=Object.assign(Object.assign({},Xh),n);return function(t){if(t.maxAttempts<1)throw new oi(si.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>{const i=await kl(t);new bl(t.asyncQueue,i,n,e,r).ja()})),r.promise}(Yl(t),(n=>e(new Jh(t,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){return new fh("serverTimestamp")}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qr=t}(i.MF),(0,i.om)(new s.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Ql(new hi(t.getProvider("auth-internal")),new gi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new oi(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Gr,"4.4.3",t),(0,i.KO)(Gr,"4.4.3","esm2017")}()},7844:function(t,e,n){"use strict";n.d(e,{qk:function(){return Ot},c7:function(){return xt},KR:function(){return Nt}});n(4114),n(7467),n(4732),n(9577),n(6280),n(7913),n(7801),n(4979);var r=n(3405),i=n(4046),s=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",u=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.g{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function y(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function C(t){return new l(h.INVALID_ARGUMENT,t)}function A(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function k(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(r){return new O(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:u,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,u())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(c)return void f();if(t)return f(),void l.call(null,t,...e);const n=u()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function L(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t,e,n,r){if(r<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class ${constructor(t,e,n,r,i,s,o,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||j(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new B(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new B(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());P(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?A():b();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new B(!1,null,!0)):this.backoffId_=x(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class B{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function K(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function G(t,e,n,r,i,s,o=!0){const a=V(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return K(c,e),z(c,n),q(c,s),W(c,r),new $(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){let e;try{e=JSON.parse(t)}catch(n){return null}return L(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function X(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function Y(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){return e}class Z{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||J}}let tt=null;function et(t){return!M(t)||t.length<2?t:Y(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Z("bucket")),t.push(new Z("generation")),t.push(new Z("metageneration")),t.push(new Z("name","fullPath",!0));const n=new Z("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Z("size");return i.xform=r,t.push(i),t.push(new Z("timeCreated")),t.push(new Z("updated")),t.push(new Z("md5Hash",null,!0)),t.push(new Z("cacheControl",null,!0)),t.push(new Z("contentDisposition",null,!0)),t.push(new Z("contentEncoding",null,!0)),t.push(new Z("contentLanguage",null,!0)),t.push(new Z("contentType",null,!0)),t.push(new Z("metadata","customMetadata",!0)),tt=t,tt}function rt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new O(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return rt(r,t),r}function st(t,e,n){const r=H(e);if(null===r)return null;const i=r;return it(t,i,n)}function ot(t,e,n,r){const i=H(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),u=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),u=F(a,n,r),c=V({alt:"media",token:e});return u+c}));return u[0]}class at{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){if(!t)throw p()}function ct(t,e){function n(n,r){const i=st(t,r,e);return ut(null!==i),ot(i,r,t.host,t._protocol)}return n}function lt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===e.getStatus()?m(t.bucket):403===e.getStatus()?_(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function ht(t){const e=lt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=g(t.path)),i.serverResponse=r.serverResponse,i}return n}function ft(t,e,n){const r=e.fullServerUrl(),i=F(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new at(i,s,ct(t,n),o);return a.errorHandler=ht(e),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let dt=null;class pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class gt extends pt{initXhr(){this.xhr_.responseType="text"}}function mt(){return dt?dt():new gt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new vt(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const t=Q(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new vt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function yt(t){t._throwIfRoot("getDownloadURL");const e=ft(t.storage,t._location,nt());return t.storage.makeRequestWithTokens(e,mt).then((t=>{if(null===t)throw S();return t}))}function _t(t,e){const n=X(t._location.path,e),r=new O(t._location.bucket,n);return new vt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return/^[A-Za-z]+:\/\//.test(t)}function bt(t,e){return new vt(t,e)}function Et(t,e){if(t instanceof Ct){const n=t;if(null==n._bucket)throw I();const r=new vt(n,n._bucket);return null!=e?Et(r,e):r}return void 0!==e?_t(t,e):t}function Tt(t,e){if(e&&wt(e)){if(t instanceof Ct)return bt(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function It(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}function St(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Fy)(s,t.app.options.projectId))}class Ct{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):It(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=It(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new vt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new N(A());{const s=G(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const At="@firebase/storage",kt="0.12.2",Rt="storage";function Ot(t){return t=(0,i.Ku)(t),yt(t)}function Nt(t,e){return t=(0,i.Ku)(t),Tt(t,e)}function xt(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,Rt),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&Dt(s,...o),s}function Dt(t,e,n,r={}){St(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(n,i,s,e,r.MF)}function Lt(){(0,r.om)(new s.uA(Rt,Pt,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(At,kt,""),(0,r.KO)(At,kt,"esm2017")}Lt()},1387:function(t,e,n){"use strict";n.d(e,{Bt:function(){return at},aE:function(){return ne},rd:function(){return ie}});n(4114);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function u(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const c=()=>{},l=Array.isArray;const h=/#/g,f=/&/g,d=/\//g,p=/=/g,g=/\?/g,m=/\+/g,v=/%5B/g,y=/%5D/g,_=/%5E/g,w=/%60/g,b=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function S(t){return encodeURI(""+t).replace(E,"|").replace(v,"[").replace(y,"]")}function C(t){return S(t).replace(b,"{").replace(T,"}").replace(_,"^")}function A(t){return S(t).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(f,"%26").replace(w,"`").replace(b,"{").replace(T,"}").replace(_,"^")}function k(t){return A(t).replace(p,"%3D")}function R(t){return S(t).replace(h,"%23").replace(g,"%3F")}function O(t){return null==t?"":R(t).replace(d,"%2F")}function N(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const x=/\/$/,D=t=>t.replace(x,"");function P(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=B(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function L(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function M(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function U(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(e.matched[r],n.matched[i])&&V(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function F(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!j(t[n],e[n]))return!1;return!0}function j(t,e){return l(t)?$(t,e):l(e)?$(e,t):t===e}function $(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function B(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}var z,q;(function(t){t["pop"]="pop",t["push"]="push"})(z||(z={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(q||(q={}));function K(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),D(t)}const W=/^[^#]+#/;function G(t,e){return t.replace(W,"#")+e}function H(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function X(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=H(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Y(t,e){const n=history.state?history.state.position-e:-1;return n+t}const J=new Map;function Z(t,e){J.set(t,e)}function tt(t){const e=J.get(t);return J.delete(t),e}let et=()=>location.protocol+"//"+location.host;function nt(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,t);return o+r+i}function rt(t,e,n,r){let i=[],s=[],o=null;const u=({state:s})=>{const a=nt(t,location),u=n.value,c=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===u)return void(o=null);l=c?s.position-c.position:0}else r(a);i.forEach((t=>{t(n.value,u,{delta:l,type:z.pop,direction:l?l>0?q.forward:q.back:q.unknown})}))};function c(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:Q()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function it(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Q():null}}function st(t){const{history:e,location:n}=window,r={value:nt(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:et()+t+r;try{e[o?"replaceState":"pushState"](s,"",u),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](u)}}function o(t,n){const o=a({},e.state,it(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function u(t,n){const o=a({},i.value,e.state,{forward:t,scroll:Q()});s(o.current,o,!0);const u=a({},it(r.value,t,null),{position:o.position+1},n);s(t,u,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:u,replace:o}}function ot(t){t=K(t);const e=st(t),n=rt(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:G.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function at(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ot(t)}function ut(t){return"string"===typeof t||t&&"object"===typeof t}function ct(t){return"string"===typeof t||"symbol"===typeof t}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ht=Symbol("");var ft;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(ft||(ft={}));function dt(t,e){return a(new Error,{type:t,[ht]:!0},e)}function pt(t,e){return t instanceof Error&&ht in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",mt={sensitive:!1,strict:!1,start:!0,end:!0},vt=/[.+*?^${}()[\]/\\]/g;function yt(t,e){const n=a({},mt,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(vt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:u,regexp:c}=r;s.push({name:t,repeatable:n,optional:u});const l=c||gt;if(l!==gt){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=u&&a.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),i+=f,o+=20,u&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function u(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,u=s in e?e[s]:"";if(l(u)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=l(u)?u.join("/"):u;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:u,stringify:c}}function _t(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function wt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=_t(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(bt(r))return 1;if(bt(i))return-1}return i.length-r.length}function bt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Et={type:0,value:""},Tt=/[a-zA-Z0-9_]/;function It(t){if(!t)return[[]];if("/"===t)return[[Et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,u=0,c="",l="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}while(u<t.length)if(a=t[u++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Tt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function St(t,e,n){const r=yt(It(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function Ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,u=kt(t);u.aliasOf=r&&r.record;const h=xt(e,t),f=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=St(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!Ot(d)&&o(t.name)),u.children){const t=u.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:c}function o(t){if(ct(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function u(){return n}function l(t){let e=0;while(e<n.length&&wt(t,n[e])>=0&&(t.record.path!==n[e].record.path||!Dt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!Ot(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,u={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw dt(1,{location:t});0,o=i.record.name,u=a(At(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&At(t.params,i.keys.map((t=>t.name)))),s=i.stringify(u)}else if(null!=t.path)s=t.path,i=n.find((t=>t.re.test(s))),i&&(u=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw dt(1,{location:t,currentLocation:e});o=i.record.name,u=a({},e.params,t.params),s=i.stringify(u)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:u,matched:c,meta:Nt(c)}}return e=xt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:u,getRecordMatcher:i}}function At(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Ot(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function xt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Dt(t,e){return e.children.some((e=>e===t||Dt(t,e)))}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(m," "),n=t.indexOf("="),s=N(n<0?t:t.slice(0,n)),o=n<0?null:N(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=k(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&A(t))):[r&&A(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ut=Symbol(""),Ft=Symbol(""),Vt=Symbol(""),jt=Symbol(""),$t=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,i,s=(t=>t())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,u)=>{const c=t=>{!1===t?u(dt(4,{from:n,to:e})):t instanceof Error?u(t):ut(t)?u(dt(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s((()=>t.call(r&&r.instances[i],e,n,c)));let h=Promise.resolve(l);t.length<3&&(h=h.then(c)),h.catch((t=>u(t)))}))}function qt(t,e,n,r,i=(t=>t())){const s=[];for(const a of t){0;for(const t in a.components){let u=a.components[t];if("beforeRouteEnter"===e||a.instances[t])if(Kt(u)){const o=u.__vccOpts||u,c=o[e];c&&s.push(zt(c,n,r,a,t,i))}else{let c=u();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${a.path}"`));const u=o(s)?s.default:s;a.components[t]=u;const c=u.__vccOpts||u,l=c[e];return l&&zt(l,n,r,a,t,i)()}))))}}}return s}function Kt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Wt(t){const e=(0,r.WQ)(Vt),n=(0,r.WQ)(jt),s=(0,r.EW)((()=>e.resolve((0,i.R1)(t.to)))),o=(0,r.EW)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(F.bind(null,r));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,t[e-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Xt(n.params,s.value.params))),u=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&V(n.params,s.value.params)));function l(n={}){return Qt(n)?e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:u,navigate:l}}const Gt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wt,setup(t,{slots:e}){const n=(0,i.Kh)(Wt(t)),{options:s}=(0,r.WQ)(Vt),o=(0,r.EW)((()=>({[Jt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ht=Gt;function Qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)($t),o=(0,r.EW)((()=>t.route||s.value)),u=(0,r.WQ)(Ft,0),c=(0,r.EW)((()=>{let t=(0,i.R1)(u);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>o.value.matched[c.value]));(0,r.Gt)(Ft,(0,r.EW)((()=>c.value+1))),(0,r.Gt)(Ut,l),(0,r.Gt)($t,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&F(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,u=l.value,c=u&&u.components[s];if(!c)return te(n.default,{Component:c,route:i});const f=u.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(u.instances[s]=null)},g=(0,r.h)(c,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:i})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=Ct(t.routes,t),n=t.parseQuery||Pt,o=t.stringifyQuery||Lt,h=t.history;const f=Bt(),d=Bt(),p=Bt(),g=(0,i.IJ)(lt);let m=lt;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=u.bind(null,(t=>""+t)),y=u.bind(null,O),_=u.bind(null,N);function w(t,n){let r,i;return ct(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function b(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function E(){return e.getRoutes().map((t=>t.record))}function T(t){return!!e.getRecordMatcher(t)}function I(t,r){if(r=a({},r||g.value),"string"===typeof t){const i=P(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:_(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=t.path)i=a({},t,{path:P(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:y(e)}),r.params=y(r.params)}const s=e.resolve(i,r),u=t.hash||"";s.params=v(_(s.params));const c=L(o,a({},t,{hash:C(u),path:s.path})),l=h.createHref(c);return a({fullPath:c,hash:u,query:o===Lt?Mt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function S(t){return"string"===typeof t?P(n,t,g.value.path):a({},t)}function A(t,e){if(m!==t)return dt(8,{from:e,to:t})}function k(t){return D(t)}function R(t){return k(a(S(t),{replace:!0}))}function x(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function D(t,e){const n=m=I(t),r=g.value,i=t.state,s=t.force,u=!0===t.replace,c=x(n);if(c)return D(a(S(c),{state:"object"===typeof c?a({},i,c.state):i,force:s,replace:u}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&U(o,r,n)&&(h=dt(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((t=>pt(t)?pt(t,2)?t:et(t):H(t,l,r))).then((t=>{if(t){if(pt(t,2))return D(a({replace:u},S(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=$(l,r,!0,u,i);return j(l,r,t),t}))}function M(t,e){const n=A(t,e);return n?Promise.reject(n):Promise.resolve()}function F(t){const e=st.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function V(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(zt(r,t,e))}));const o=M.bind(null,t,e);return n.push(o),at(n).then((()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(o),at(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(zt(r,t,e))}));return n.push(o),at(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(o),at(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e,F),n.push(o),at(n)))).then((()=>{n=[];for(const r of d.list())n.push(zt(r,t,e));return n.push(o),at(n)})).catch((t=>pt(t,8)?t:Promise.reject(t)))}function j(t,e,n){p.list().forEach((r=>F((()=>r(t,e,n)))))}function $(t,e,n,r,i){const o=A(t,e);if(o)return o;const u=e===lt,c=s?history.state:{};n&&(r||u?h.replace(t.fullPath,a({scroll:u&&c&&c.scroll},i)):h.push(t.fullPath,i)),g.value=t,nt(t,e,n,u),et()}let B;function q(){B||(B=h.listen(((t,e,n)=>{if(!ot.listening)return;const r=I(t),i=x(r);if(i)return void D(a(i,{replace:!0}),r).catch(c);m=r;const o=g.value;s&&Z(Y(o.fullPath,n.delta),Q()),V(r,o).catch((t=>pt(t,12)?t:pt(t,2)?(D(t.to,r).then((t=>{pt(t,20)&&!n.delta&&n.type===z.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),H(t,r,o)))).then((t=>{t=t||$(r,o,!1),t&&(n.delta&&!pt(t,8)?h.go(-n.delta,!1):n.type===z.pop&&pt(t,20)&&h.go(-1,!1)),j(r,o,t)})).catch(c)})))}let K,W=Bt(),G=Bt();function H(t,e,n){et(t);const r=G.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function J(){return K&&g.value!==lt?Promise.resolve():new Promise(((t,e)=>{W.add([t,e])}))}function et(t){return K||(K=!t,q(),W.list().forEach((([e,n])=>t?n(t):e())),W.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const u=!i&&tt(Y(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,u))).then((t=>t&&X(t))).catch((t=>H(t,e,n)))}const rt=t=>h.go(t);let it;const st=new Set,ot={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,hasRoute:T,getRoutes:E,resolve:I,options:t,push:k,replace:R,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:G.add,isReady:J,install(t){const e=this;t.component("RouterLink",Ht),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!it&&g.value===lt&&(it=!0,k(h.location).catch((t=>{0})));const n={};for(const i in lt)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide(Vt,e),t.provide(jt,(0,i.Gc)(n)),t.provide($t,g);const r=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=lt,B&&B(),B=null,g.value=lt,it=!1,K=!1),r()}}};function at(t){return t.reduce(((t,e)=>t.then((()=>F(e)))),Promise.resolve())}return ot}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>F(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>F(t,a)))||i.push(a))}return[n,r,i]}function ie(){return(0,r.WQ)(Vt)}}}]);
//# sourceMappingURL=chunk-vendors.d8b4994a.js.map