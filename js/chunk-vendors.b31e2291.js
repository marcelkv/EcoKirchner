(self["webpackChunkeco_kirchner"]=self["webpackChunkeco_kirchner"]||[]).push([[504],{34:function(t,e,n){"use strict";var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},38:function(t,e,n){var r=n(7874),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0;function c(t){var e=s.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(c){}var i=o.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=c},81:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},116:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return I},EW:function(){return Vt},Gc:function(){return yt},IG:function(){return At},IJ:function(){return xt},KR:function(){return Ot},Kh:function(){return vt},Pr:function(){return Mt},R1:function(){return Pt},Tm:function(){return Et},X2:function(){return u},a1:function(){return kt},bl:function(){return S},fE:function(){return Tt},g8:function(){return bt},hV:function(){return qt},hZ:function(){return M},i9:function(){return Rt},ju:function(){return It},lJ:function(){return Ct},qA:function(){return V},u4:function(){return L},ux:function(){return St},wB:function(){return zt},yC:function(){return o}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){if(this._on>0&&0===--this._on){if(i===this)i=this.prevScope;else{let t=i;while(t){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),m(this);const t=s,e=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)w(t);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function v(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),w(r),b(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function y(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===C)return;if(t.globalVersion=C,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!y(t)))return;t.flags|=2;const e=t.dep,n=s,i=E;s=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,E=i,v(t),t.flags&=-3}}function w(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)w(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function b(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function I(){T.push(E),E=!1}function S(){const t=T.pop();E=void 0===t||t}function A(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let C=0;class k{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!s||!E||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new k(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,O(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,C++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function O(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)O(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const x=new WeakMap,N=Symbol(""),D=Symbol(""),P=Symbol("");function L(t,e,n){if(E&&s){let e=x.get(t);e||x.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new R),r.map=e,r.key=n),r.track()}}function M(t,e,n,i,s,o){const a=x.get(t);if(!a)return void C++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===P||!(0,r.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(P)),e){case"add":s?o&&c(a.get("length")):(c(a.get(N)),(0,r.CE)(t)&&c(a.get(D)));break;case"delete":s||(c(a.get(N)),(0,r.CE)(t)&&c(a.get(D)));break;case"set":(0,r.CE)(t)&&c(a.get(N));break}}g()}function U(t){const e=St(t);return e===t?e:(L(e,"iterate",P),Tt(t)?e:e.map(Ct))}function V(t){return L(t=St(t),"iterate",P),t}function F(t,e){return Et(t)?bt(t)?kt(Ct(e)):kt(e):Ct(e)}const j={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,(t=>F(this,t)))},concat(...t){return U(this).concat(...t.map((t=>(0,r.cy)(t)?U(t):t)))},entries(){return $(this,"entries",(t=>(t[1]=F(this,t[1]),t)))},every(t,e){return z(this,"every",t,e,void 0,arguments)},filter(t,e){return z(this,"filter",t,e,(t=>t.map((t=>F(this,t)))),arguments)},find(t,e){return z(this,"find",t,e,(t=>F(this,t)),arguments)},findIndex(t,e){return z(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return z(this,"findLast",t,e,(t=>F(this,t)),arguments)},findLastIndex(t,e){return z(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return z(this,"forEach",t,e,void 0,arguments)},includes(...t){return G(this,"includes",t)},indexOf(...t){return G(this,"indexOf",t)},join(t){return U(this).join(t)},lastIndexOf(...t){return G(this,"lastIndexOf",t)},map(t,e){return z(this,"map",t,e,void 0,arguments)},pop(){return W(this,"pop")},push(...t){return W(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return W(this,"shift")},some(t,e){return z(this,"some",t,e,void 0,arguments)},splice(...t){return W(this,"splice",t)},toReversed(){return U(this).toReversed()},toSorted(t){return U(this).toSorted(t)},toSpliced(...t){return U(this).toSpliced(...t)},unshift(...t){return W(this,"unshift",t)},values(){return $(this,"values",(t=>F(this,t)))}};function $(t,e,n){const r=V(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.done||(t.value=n(t.value)),t}),i}const B=Array.prototype;function z(t,e,n,r,i,s){const o=V(t),a=o!==t&&!Tt(t),c=o[e];if(c!==B[e]){const e=c.apply(t,s);return a?Ct(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,F(t,e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&i?i(l):l}function q(t,e,n,r){const i=V(t),s=i!==t&&!Tt(t);let o=n,a=!1;i!==t&&(s?(a=0===r.length,o=function(e,r,i){return a&&(a=!1,e=F(t,e)),n.call(this,e,F(t,r),i,t)}):n.length>3&&(o=function(e,r,i){return n.call(this,e,r,i,t)}));const c=i[e](o,...r);return a?F(t,c):c}function G(t,e,n){const r=St(t);L(r,"iterate",P);const i=r[e](...n);return-1!==i&&!1!==i||!It(n[0])?i:(n[0]=St(n[0]),r[e](...n))}function W(t,e,n=[]){I(),p();const r=St(t)[e].apply(t,n);return g(),S(),r}const H=(0,r.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=St(this);return L(e,"has",t),e.hasOwnProperty(t)}class J{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?pt:dt:s?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=j[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,Rt(t)?t:n);if((0,r.Bm)(e)?K.has(e):H(e))return a;if(i||L(t,"get",e),s)return a;if(Rt(a)){const t=o&&(0,r.yI)(e)?a:a.value;return i&&(0,r.Gv)(t)?_t(t):t}return(0,r.Gv)(a)?i?_t(a):vt(a):a}}class X extends J{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];const o=(0,r.cy)(t)&&(0,r.yI)(e);if(!this._isShallow){const t=Et(s);if(Tt(n)||Et(n)||(s=St(s),n=St(n)),!o&&Rt(s)&&!Rt(n))return t||(s.value=n),!0}const a=o?Number(e)<t.length:(0,r.$3)(t,e),c=Reflect.set(t,e,n,Rt(t)?t:i);return t===St(i)&&(a?(0,r.$H)(n,s)&&M(t,"set",e,n,s):M(t,"add",e,n)),c}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&M(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&K.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,r.cy)(t)?"length":N),Reflect.ownKeys(t)}}class Y extends J{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new X,tt=new Y,et=new X(!0),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...i){const s=this["__v_raw"],o=St(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?nt:e?kt:Ct;return!e&&L(o,"iterate",u?D:N),(0,r.X$)(Object.create(l),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}}})}}function st(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const i=this["__v_raw"],s=St(i),o=St(n);t||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=rt(s),c=e?nt:t?kt:Ct;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&L(St(e),"iterate",N),e.size},has(e){const n=this["__v_raw"],i=St(n),s=St(e);return t||((0,r.$H)(e,s)&&L(i,"has",e),L(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=St(s),a=e?nt:t?kt:Ct;return!t&&L(o,"iterate",N),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear")}:{add(t){const n=St(this),i=rt(n),s=St(t),o=e||Tt(t)||Et(t)?t:s,a=i.has.call(n,o)||(0,r.$H)(t,o)&&i.has.call(n,t)||(0,r.$H)(s,o)&&i.has.call(n,s);return a||(n.add(o),M(n,"add",o,o)),this},set(t,n){e||Tt(n)||Et(n)||(n=St(n));const i=St(this),{has:s,get:o}=rt(i);let a=s.call(i,t);a||(t=St(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&M(i,"set",t,n,c):M(i,"add",t,n),this},delete(t){const e=St(this),{has:n,get:r}=rt(e);let i=n.call(e,t);i||(t=St(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&M(e,"delete",t,void 0,s),o},clear(){const t=St(this),e=0!==t.size,n=void 0,r=t.clear();return e&&M(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=it(r,t,e)})),n}function at(t,e){const n=ot(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function vt(t){return Et(t)?t:wt(t,!1,Z,ct,ht)}function yt(t){return wt(t,!1,et,ut,ft)}function _t(t){return wt(t,!0,tt,lt,dt)}function wt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=mt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function bt(t){return Et(t)?bt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function It(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function At(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Ct=t=>(0,r.Gv)(t)?vt(t):t,kt=t=>(0,r.Gv)(t)?_t(t):t;function Rt(t){return!!t&&!0===t["__v_isRef"]}function Ot(t){return Nt(t,!1)}function xt(t){return Nt(t,!0)}function Nt(t,e){return Rt(t)?t:new Dt(t,e)}class Dt{constructor(t,e){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:St(t),this._value=e?t:Ct(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||Et(t);t=n?t:St(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:Ct(t),this.dep.trigger())}}function Pt(t){return Rt(t)?t.value:t}const Lt={get:(t,e,n)=>"__v_raw"===e?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Rt(i)&&!Rt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Mt(t){return bt(t)?t:new Proxy(t,Lt)}class Ut{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=C-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return d(this,!0),!0}get value(){const t=this.dep.track();return _(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vt(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new Ut(i,s,n);return o}const Ft={},jt=new WeakMap;let $t;function Bt(t,e=!1,n=$t){if(n){let e=jt.get(n);e||jt.set(n,e=[]),e.push(t)}else 0}function zt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:l,call:h}=n,f=t=>s?t:Tt(t)||!1===s||0===s?qt(t,1):qt(t);let d,p,g,m,v=!1,y=!1;if(Rt(t)?(p=()=>t.value,v=Tt(t)):bt(t)?(p=()=>f(t),v=!0):(0,r.cy)(t)?(y=!0,v=t.some((t=>bt(t)||Tt(t))),p=()=>t.map((t=>Rt(t)?t.value:bt(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0))):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){I();try{g()}finally{S()}}const e=$t;$t=d;try{return h?h(t,3,[m]):t(m)}finally{$t=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>qt(t(),e)}const _=a(),w=()=>{d.stop(),_&&_.active&&(0,r.TF)(_.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let b=y?new Array(t.length).fill(Ft):Ft;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||v||(y?t.some(((t,e)=>(0,r.$H)(t,b[e]))):(0,r.$H)(t,b))){g&&g();const n=$t;$t=d;try{const n=[t,b===Ft?void 0:y&&b[0]===Ft?[]:b,m];b=t,h?h(e,3,n):e(...n)}finally{$t=n}}}else d.run()};return l&&l(E),d=new u(p),d.scheduler=c?()=>c(E,!1):E,m=t=>Bt(t,!1,d),g=d.onStop=()=>{const t=jt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();jt.delete(d)}},e?i?E(!0):b=d.run():c?c(E.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function qt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,Rt(t))qt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)qt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{qt(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)qt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qt(t[r],e,n)}return t}},262:function(t,e,n){"use strict";n.d(e,{MF:function(){return _t},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return bt},Wp:function(){return wt},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579),n(5367),n(2731);var r=n(798),i=n(6189),s=n(2455);n(4423),n(8454),n(9452),n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return C.set(e,s),s}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
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
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===e?.type}const x="@firebase/app",N="0.14.11",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",V="@firebase/app-check",F="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",z="@firebase/database-compat",q="@firebase/functions",G="@firebase/functions-compat",W="@firebase/installations",H="@firebase/installations-compat",K="@firebase/messaging",Q="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",it="@firebase/firestore-compat",st="firebase",ot="12.12.0",at="[DEFAULT]",ct={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[z]:"fire-rtdb-compat",[q]:"fire-fn",[G]:"fire-fn-compat",[W]:"fire-iid",[H]:"fire-iid-compat",[K]:"fire-fcm",[Q]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
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
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},vt=new s.FA("app","Firebase",mt);
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
class yt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
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
const _t=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i={name:at,automaticDataCollectionEnabled:!0,...e},o=i.name;if("string"!==typeof o||!o)throw vt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw vt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw vt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new yt(n,i,c);return ut.set(o,u),u}function bt(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw vt.create("no-app",{appName:t});return e}function Et(t,e,n){let i=ct[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}dt(new r.uA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let At=null;function Ct(){return At||(At=I(Tt,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),At}async function kt(t){try{const e=await Ct(),n=e.transaction(St),r=await n.objectStore(St).get(Ot(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e?.message});D.warn(t.message)}}}async function Rt(t,e){try{const n=await Ct(),r=n.transaction(St,"readwrite"),i=r.objectStore(St);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:n?.message});D.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
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
 */const xt=1024,Nt=30;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Pt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Nt){const t=Vt(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){D.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pt(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return D.warn(t),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=xt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Rt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Rt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Vt(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
 */function Ft(t){dt(new r.uA("platform-logger",(t=>new R(t)),"PRIVATE")),dt(new r.uA("heartbeat",(t=>new Dt(t)),"PRIVATE")),Et(x,N,t),Et(x,N,"esm2020"),Et("fire-js","")}Ft("")},283:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||u(this)}),"toString")},350:function(t,e,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},397:function(t,e,n){"use strict";var r=n(7751);t.exports=r("document","documentElement")},421:function(t){"use strict";t.exports={}},456:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(9504),o=n(4154),a=n(5169),c=s(1.1.toString),u=s([].join),l=Array,h=i.Uint8Array,f=!h||!h.prototype.toHex||!function(){try{var t=new h([255,255,255,255,255,255,255,255]);return"ffffffffffffffff"===t.toHex()}catch(e){return!1}}();h&&r({target:"Uint8Array",proto:!0,forced:f},{toHex:function(){o(this),a(this.buffer);for(var t=l(this.length),e=0,n=this.length;e<n;e++){var r=c(this[e],16);t[e]=1===r.length?"0"+r:r}return u(t,"")}})},507:function(t,e,n){"use strict";var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},511:function(t,e,n){"use strict";var r=n(9167),i=n(9297),s=n(1951),o=n(4913).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},531:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(8646),u=n(9462),l=n(9539),h=n(6395),f=n(684),d=n(4549);function p(){try{var t=Iterator.prototype.flatMap.call(new Map([[4,5]]).entries(),(function(t){return t}));t.next(),t["return"]()}catch(e){return!0}}var g=!h&&!f("flatMap",(function(){})),m=!h&&!g&&d("flatMap",TypeError),v=h||g||m||p(),y=u((function(){var t,e,n=this.iterator,r=this.mapper;while(1){if(e=this.inner)try{if(t=o(i(e.next,e.iterator)),!t.done)return t.value;this.inner=null}catch(s){l(n,"throw",s)}if(t=o(i(this.next,n)),this.done=!!t.done)return;try{this.inner=c(r(t.value,this.counter++),!1)}catch(s){l(n,"throw",s)}}}));r({target:"Iterator",proto:!0,real:!0,forced:v},{flatMap:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return m?i(m,this,t):new y(a(this),{mapper:t,inner:null})}})},616:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},655:function(t,e,n){"use strict";var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:function(t,e,n){"use strict";var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},684:function(t){"use strict";t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},757:function(t,e,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},798:function(t,e,n){"use strict";n.d(e,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(2455);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},851:function(t,e,n){"use strict";var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},896:function(t,e,n){var r=n(9692),i=n(1087),s=n(4243),o="Expected a function",a=Math.max,c=Math.min;function u(t,e,n){var u,l,h,f,d,p,g=0,m=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function _(e){var n=u,r=l;return u=l=void 0,g=e,f=t.apply(r,n),f}function w(t){return g=t,d=setTimeout(T,e),m?_(t):f}function b(t){var n=t-p,r=t-g,i=e-n;return v?c(i,h-r):i}function E(t){var n=t-p,r=t-g;return void 0===p||n>=e||n<0||v&&r>=h}function T(){var t=i();if(E(t))return I(t);d=setTimeout(T,b(t))}function I(t){return d=void 0,y&&u?_(t):(u=l=void 0,f)}function S(){void 0!==d&&clearTimeout(d),g=0,u=p=l=d=void 0}function A(){return void 0===d?f:I(i())}function C(){var t=i(),n=E(t);if(u=arguments,l=this,p=t,n){if(void 0===d)return w(p);if(v)return clearTimeout(d),d=setTimeout(T,e),_(p)}return void 0===d&&(d=setTimeout(T,e)),f}return e=s(e)||0,r(n)&&(m=!!n.leading,v="maxWait"in n,h=v?a(s(n.maxWait)||0,e):h,y="trailing"in n?!!n.trailing:y),C.cancel=S,C.flush=A,C}t.exports=u},944:function(t){"use strict";var e=TypeError;t.exports=function(t){var n=t&&t.alphabet;if(void 0===n||"base64"===n||"base64url"===n)return n||"base64";throw new e("Incorrect `alphabet` option")}},1072:function(t,e,n){"use strict";var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1087:function(t,e,n){var r=n(8606),i=function(){return r.Date.now()};t.exports=i},1108:function(t,e,n){"use strict";var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},1114:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=i(t,"string");return"symbol"==r(e)?e:e+""}function o(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{A:function(){return o}})},1148:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return!s(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(t,e,n){"use strict";var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new g(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1291:function(t,e,n){"use strict";var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1385:function(t,e,n){"use strict";var r=n(9539);t.exports=function(t,e,n){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{n=r(t[i].iterator,e,n)}catch(s){e="throw",n=s}if("throw"===e)throw n;return n}},1625:function(t,e,n){"use strict";var r=n(9504);t.exports=r({}.isPrototypeOf)},1698:function(t,e,n){"use strict";var r=n(6518),i=n(4204),s=n(9835),o=n(4916),a=!o("union")||!s("union");r({target:"Set",proto:!0,real:!0,forced:a},{union:i})},1701:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",(function(){})),g=!d&&!p&&f("map",TypeError),m=d||p||g,v=c((function(){var t=this.iterator,e=o(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)}));r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return g?i(g,this,t):new v(a(this),{mapper:t})}})},1767:function(t){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1795:function(t,e,n){var r=n(896),i=n(9692),s="Expected a function";function o(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}t.exports=o},1806:function(t,e,n){"use strict";var r=n(6518),i=n(8551),s=n(4659),o=n(2652),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return o(a(i(this)),(function(n){s(t,e++,n)}),{IS_RECORD:!0}),t}})},1828:function(t,e,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1924:function(t,e,n){"use strict";n.d(e,{qk:function(){return Ot},c7:function(){return Nt},KR:function(){return xt}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979);var r=n(262),i=n(2455),s=n(798);
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
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class l extends i.g{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function y(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function A(t){return new l(h.INVALID_ARGUMENT,t)}function C(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function k(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(r){return new O(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class x{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function N(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function D(t){t(!1)}
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
 */function P(t){return void 0!==t}function L(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function V(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class ${constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0,f=!1){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||j(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new B(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new B(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());P(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?C():b();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new B(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class B{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function G(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function H(t,e,n,r,i,s,o=!0,a=!1){const c=F(t.urlParams),u=t.url+c,l=Object.assign({},t.headers);return G(l,e),z(l,n),q(l,s),W(l,r),new $(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}
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
function K(t){let e;try{e=JSON.parse(t)}catch(n){return null}return L(e)?e:null}
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
 */function Q(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function J(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function X(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function Y(t,e){return e}class Z{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||Y}}let tt=null;function et(t){return!M(t)||t.length<2?t:X(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Z("bucket")),t.push(new Z("generation")),t.push(new Z("metageneration")),t.push(new Z("name","fullPath",!0));const n=new Z("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Z("size");return i.xform=r,t.push(i),t.push(new Z("timeCreated")),t.push(new Z("updated")),t.push(new Z("md5Hash",null,!0)),t.push(new Z("cacheControl",null,!0)),t.push(new Z("contentDisposition",null,!0)),t.push(new Z("contentEncoding",null,!0)),t.push(new Z("contentLanguage",null,!0)),t.push(new Z("contentType",null,!0)),t.push(new Z("metadata","customMetadata",!0)),tt=t,tt}function rt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new O(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return rt(r,t),r}function st(t,e,n){const r=K(e);if(null===r)return null;const i=r;return it(t,i,n)}function ot(t,e,n,r){const i=K(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=V(a,n,r),u=F({alt:"media",token:e});return c+u}));return c[0]}class at{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function ct(t){if(!t)throw p()}function ut(t,e){function n(n,r){const i=st(t,r,e);return ct(null!==i),ot(i,r,t.host,t._protocol)}return n}function lt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===e.getStatus()?m(t.bucket):403===e.getStatus()?_(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function ht(t){const e=lt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=g(t.path)),i.serverResponse=r.serverResponse,i}return n}function ft(t,e,n){const r=e.fullServerUrl(),i=V(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new at(i,s,ut(t,n),o);return a.errorHandler=ht(e),a}
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
let dt=null;class pt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r,s){if(this.sent_)throw R("cannot .send() more than once");if((0,i.zJ)(t)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class gt extends pt{initXhr(){this.xhr_.responseType="text"}}function mt(){return dt?dt():new gt}
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
class vt{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new vt(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X(this._location.path)}get storage(){return this._service}get parent(){const t=Q(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new vt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function yt(t){t._throwIfRoot("getDownloadURL");const e=ft(t.storage,t._location,nt());return t.storage.makeRequestWithTokens(e,mt).then((t=>{if(null===t)throw S();return t}))}function _t(t,e){const n=J(t._location.path,e),r=new O(t._location.bucket,n);return new vt(t.storage,r)}
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
 */function wt(t){return/^[A-Za-z]+:\/\//.test(t)}function bt(t,e){return new vt(t,e)}function Et(t,e){if(t instanceof At){const n=t;if(null==n._bucket)throw I();const r=new vt(n,n._bucket);return null!=e?Et(r,e):r}return void 0!==e?_t(t,e):t}function Tt(t,e){if(e&&wt(e)){if(t instanceof At)return bt(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function It(t,e){const n=e?.[a];return null==n?null:O.makeFromBucketSpec(n,t)}function St(t,e,n,r={}){t.host=`${e}:${n}`;const s=(0,i.zJ)(e);s&&(0,i.gE)(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Fy)(o,t.app.options.projectId))}class At{constructor(t,e,n,r,i,s=!1){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):It(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=It(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new vt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new x(C());{const s=H(t,this._appId,n,r,e,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Ct="@firebase/storage",kt="0.14.2",Rt="storage";function Ot(t){return t=(0,i.Ku)(t),yt(t)}function xt(t,e){return t=(0,i.Ku)(t),Tt(t,e)}function Nt(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,Rt),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&Dt(s,...o),s}function Dt(t,e,n,r={}){St(t,e,n,r)}
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
 */function Pt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new At(n,i,s,e,r.MF)}function Lt(){(0,r.om)(new s.uA(Rt,Pt,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(Ct,kt,""),(0,r.KO)(Ct,kt,"esm2020")}Lt()},1951:function(t,e,n){"use strict";var r=n(8227);e.f=r},2106:function(t,e,n){"use strict";var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:function(t,e,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},2195:function(t,e,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2248:function(t,e,n){"use strict";var r=n(9504),i=Map.prototype;t.exports={Map:Map,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"]),proto:i}},2303:function(t,e,n){"use strict";var r=n(4576),i=n(9504),s=r.Uint8Array,o=r.SyntaxError,a=Math.min,c=i("".match);t.exports=function(t,e){var n=t.length;if(n%2!==0)throw new o("String should be an even number of characters");for(var r=e?a(e.length,n/2):n/2,i=e||new s(r),u=c(t,/.{2}/g),l=0;l<r;l++){var h=+("0x"+u[l]+"0");if(h!==h)throw new o("String should only contain hex characters");i[l]=h>>4}return{bytes:i,read:l<<1}}},2360:function(t,e,n){"use strict";var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=o.length;while(t--)delete w[d][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:s.f(n,e)}},2455:function(t,e,n){"use strict";n.d(e,{cY:function(){return w},FA:function(){return L},g:function(){return P},u:function(){return l},Uj:function(){return u},Fy:function(){return b},tD:function(){return q},bD:function(){return F},hp:function(){return z},T9:function(){return y},Tj:function(){return m},yU:function(){return v},XA:function(){return _},mS:function(){return h},Ku:function(){return K},ZQ:function(){return E},sr:function(){return A},zJ:function(){return Q},c1:function(){return S},Im:function(){return V},lT:function(){return k},zW:function(){return x},jZ:function(){return T},lV:function(){return C},nr:function(){return R},Ov:function(){return O},gE:function(){return J},Am:function(){return $},I9:function(){return B},eX:function(){return N}});n(4423),n(4114),n(8111),n(7588),n(1701),n(9577),n(6632),n(4226),n(9486),n(456),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={VUE_APP_FIREBASE_PROJECT_ID:"eco-kirchner",VUE_APP_FIREBASE_APP_ID:"1:908630029969:web:d242eb70de39b39a7cf130",VUE_APP_FIREBASE_API_KEY:"AIzaSyA1X0q1F-Q0AZJKGfQ-pd9ECZPMWvXCC5Y",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"908630029969",VUE_APP_FIREBASE_STORAGE_BUCKET:"eco-kirchner.appspot.com",VUE_APP_FIREBASE_AUTH_DOMAIN:"eco-kirchner.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/EcoKirchner/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],v=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>g()?.config,_=t=>g()?.[`_${t}`]
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
 */;class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
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
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function A(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=E();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R(){return!I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){return!I()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(t){return!1}}function N(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}}))}
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
const D="FirebaseError";class P extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function M(t,e){return t.replace(U,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const U=/\{\$([^}]+)}/g;
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
 */function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(j(n)&&j(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
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
function $(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function B(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function q(t,e){const n=new G(t,e);return n.subscribe.bind(n)}class G{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=W(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function H(){}
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
function K(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function J(t){const e=await fetch(t,{credentials:"include"});return e.ok}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},2475:function(t,e,n){"use strict";var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},2489:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",(function(){})),g=!l&&!p&&d("filter",TypeError),m=l||p||g,v=c((function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(t){o(this);try{s(t)}catch(e){h(this,"throw",e)}return g?i(g,this,t):new v(a(this),{predicate:t})}})},2529:function(t){"use strict";t.exports=function(t,e){return{value:t,done:e}}},2603:function(t,e,n){"use strict";var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:function(t,e,n){"use strict";var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,v,y,_,w,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),A=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),k=r(e,T),R=function(t){var e=m;return m=void 0,e&&f(e,"normal"),new p(!0,t)},O=function(t){return I?(s(t),C?k(t[0],t[1],R):k(t[0],t[1])):C?k(t,R):k(t)};if(S)m=t.iterator;else if(A)m=t;else{if(v=h(t),!v)throw new d(o(t)+" is not iterable");if(a(v)){for(y=0,_=c(t);_>y;y++)if(w=O(t[y]),w&&u(g,w))return w;return new p(!1)}m=l(t,v)}b=S?t.next:m.next;while(!(E=i(b,m)).done){var x=E.value;try{w=O(x)}catch(N){if(!m)throw N;f(m,"throw",N)}if("object"==typeof w&&w&&u(g,w))return w}return new p(!1)}},2731:function(t,e,n){"use strict";var r=n(6518),i=n(9306),s=n(2248),o=n(6395),a=s.get,c=s.has,u=s.set;r({target:"Map",proto:!0,real:!0,forced:o},{getOrInsertComputed:function(t,e){var n=c(this,t);if(i(e),n)return a(this,t);0===t&&1/t===-1/0&&(t=0);var r=e(t);return u(this,t,r),r}})},2777:function(t,e,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:function(t,e,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},2796:function(t,e,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},2804:function(t){"use strict";var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e+"+/",r=e+"-_",i=function(t){for(var e={},n=0;n<64;n++)e[t.charAt(n)]=n;return e};t.exports={i2c:n,c2i:i(n),i2cUrl:r,c2iUrl:i(r)}},2839:function(t,e,n){"use strict";var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},2967:function(t,e,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},3009:function(t,e,n){"use strict";n.d(e,{HF:function(){return Se},xI:function(){return Jr},df:function(){return jn},CI:function(){return Ue}});n(4423),n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(262),i=n(2455),s=n(6189),o=n(798);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=a,u=new i.FA("auth","Firebase",a()),l=new s.Vy("@firebase/auth");function h(t,...e){l.logLevel<=s.$b.WARN&&l.warn(`Auth (${r.MF}): ${t}`,...e)}function f(t,...e){l.logLevel<=s.$b.ERROR&&l.error(`Auth (${r.MF}): ${t}`,...e)}
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
 */function d(t,...e){throw y(t,...e)}function p(t,...e){return y(t,...e)}function g(t,e,n){const r={...c(),[e]:n},s=new i.FA("auth","Firebase",r);return s.create(e,{appName:t.name})}function m(t){return g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&d(t,"argument-error"),g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u.create(t,...e)}function _(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||w(e)}
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
 */function E(){return"undefined"!==typeof self&&self.location?.href||""}function T(){return"http:"===I()||"https:"===I()}function I(){return"undefined"!==typeof self&&self.location?.protocol||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N=new C(3e4,6e4);
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
 */function D(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function P(t,e,n,r,s={}){return L(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return(0,i.c1)()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&(0,i.zJ)(t.emulatorConfig.host)&&(u.credentials="include"),R.fetch()(await U(t,t.config.apiHost,n,a),u)}))}async function L(t,e,n){t._canInitEmulator=!1;const r={...O,...e};try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);d(t,a)}}catch(s){if(s instanceof i.g)throw s;d(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&d(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function U(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`;if(x.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){const t=s._getPersistence();return t._getFinalTarget(o).toString()}return o}function V(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),N.get())}))}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
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
 */function $(t){return void 0!==t&&void 0!==t.enterprise}class B{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return V(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
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
 */async function z(t,e){return P(t,"GET","/v2/recaptchaConfig",D(t,e))}
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
 */async function q(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function G(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
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
 */function W(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function H(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),s=Q(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=o?.["sign_in_provider"];return{claims:s,token:r,authTime:W(K(s.auth_time)),issuedAtTime:W(K(s.iat)),expirationTime:W(K(s.exp)),signInProvider:a||null,signInSecondFactor:o?.["sign_in_second_factor"]||null}}function K(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s?.toString()),null}}function J(t){const e=Q(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&Y(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=this.user.stsTokenManager.expirationTime??0,e=t-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t?.code&&this.schedule(!0))}this.schedule()}}
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
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function et(t){const e=t.auth,n=await t.getIdToken(),r=await X(t,G(e,{idToken:n}));_(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=i.providerUserInfo?.length?it(i.providerUserInfo):[],o=rt(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=!!a&&c,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new tt(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null})))}
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
 */async function st(t,e){const n=await L(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await U(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return t.emulatorConfig&&(0,i.zJ)(t.emulatorConfig.host)&&(c.credentials="include"),R.fetch()(o,c)}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return P(t,"POST","/v2/accounts:revokeToken",D(t,e))}
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
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):J(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){_(0!==t.length,"internal-error");const e=J(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(_(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await st(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new at;return n&&(_("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function ct(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor({uid:t,auth:e,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>({...t}))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ut({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(m(this.auth));const t=await this.getIdToken();return await X(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>({...t}))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const n=e.displayName??void 0,r=e.email??void 0,i=e.phoneNumber??void 0,s=e.photoURL??void 0,o=e.tenantId??void 0,a=e._redirectEventId??void 0,c=e.createdAt??void 0,u=e.lastLoginAt??void 0,{uid:l,emailVerified:h,isAnonymous:f,providerData:d,stsTokenManager:p}=e;_(l&&p,t,"internal-error");const g=at.fromJSON(this.name,p);_("string"===typeof l,t,"internal-error"),ct(n,t.name),ct(r,t.name),_("boolean"===typeof h,t,"internal-error"),_("boolean"===typeof f,t,"internal-error"),ct(i,t.name),ct(s,t.name),ct(o,t.name),ct(a,t.name),ct(c,t.name),ct(u,t.name);const m=new ut({uid:l,auth:t,email:r,emailVerified:h,displayName:n,isAnonymous:f,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:g,createdAt:c,lastLoginAt:u});return d&&Array.isArray(d)&&(m.providerData=d.map((t=>({...t})))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ut({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!i?.length,o=new at;o.updateFromIdToken(n);const a=new ut({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(a,c),a}}
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
 */const lt=new Map;function ht(t){b(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
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
 */class ft{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ft.type="NONE";const dt=ft;
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
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if("string"===typeof t){const e=await G(this.auth,{idToken:t}).catch((()=>{}));return e?ut._fromGetAccountInfoResponse(this.auth,e,t):null}return ut._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(dt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(dt);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){let n;if("string"===typeof e){const r=await G(t,{idToken:e}).catch((()=>{}));if(!r)break;n=await ut._fromGetAccountInfoResponse(t,r,e)}else n=ut._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch{}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch{}}))),new gt(i,t,n)):new gt(i,t,n)}}
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
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||_t(e))&&!e.includes("edge/"))return"Chrome";if(bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===n?.length)return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _t(t=(0,i.ZQ)()){return/crios\//i.test(t)}function wt(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function bt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,i.ZQ)()){return/webos/i.test(t)}function It(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,i.ZQ)()){return It(t)&&!!window.navigator?.standalone}function At(){return(0,i.lT)()&&10===document.documentMode}function Ct(t=(0,i.ZQ)()){return It(t)||bt(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||wt(t)}
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
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=mt((0,i.ZQ)());break;case"Worker":n=`${mt((0,i.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
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
 */class Rt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}
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
 */async function Ot(t,e={}){return P(t,"GET","/v2/passwordPolicy",D(t,e))}
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
 */const xt=6;class Nt{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??xt,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),void 0!==e.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),void 0!==e.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),void 0!==e.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),void 0!==e.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
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
 */class Dt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((t=>this._resolvePersistenceManagerAvailable=t))}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await G(this,{idToken:t}),n=await ut._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let n=e,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const e=this.redirectUser?._redirectEventId,r=n?._redirectEventId,s=await this.tryRedirectSignIn(t);e&&e!==r||!s?.user||(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=e,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(m(this));const e=t?(0,i.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(m(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ot(this),e=new Nt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue((async()=>{})),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return t?.error&&h(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Pt(t){return(0,i.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function Vt(t){return Mt.loadJS(t)}function Ft(){return Mt.recaptchaEnterpriseScript}function jt(){return Mt.gapiScript}function $t(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
 */class Bt{constructor(){this.enterprise=new zt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class zt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const qt="recaptcha-enterprise",Gt="NO_RECAPTCHA";class Wt{constructor(t){this.type=qt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{z(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Gt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new Bt;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&$(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Ft();0!==e.length&&(e+=n),Vt(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Ht(t,e,n,r=!1,i=!1){const s=new Wt(t);let o;if(i)o=Gt;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a={...e};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kt(t,e,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ht(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Ht(t,e,n);return r(t,i).catch((async i=>{if("AUDIT"===t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Ht(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await Ht(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}async function Qt(t){const e=Pt(t),n=await z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new B(n);if(null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()){const t=new Wt(e);t.verify()}}
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
 */function Jt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,e??{}))return t;d(t,"already-initialized")}const s=n.initialize({options:e});return s}function Xt(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ht);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Yt(t,e,n){const r=Pt(t);_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,o=Zt(e),{host:a,port:c}=te(e),u=null===c?"":`:${c}`,l={url:`${o}//${a}${u}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return _(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void _((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,i.zJ)(a)?(0,i.gE)(`${o}//${a}${u}`):s||ne()}function Zt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function te(t){const e=Zt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ee(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ee(e)}}}function ee(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ne(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */class re{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
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
 */async function ie(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
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
async function se(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
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
async function oe(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function ae(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
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
 */class ce extends re{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ce(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ce(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if(e?.email&&e?.password){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,e,"signInWithPassword",se,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,n,"signUpPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ae(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function ue(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
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
 */const le="http://localhost";class he extends re{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new he(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r,...i}=e;if(!n||!r)return null;const s=new he(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ue(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ue(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ue(t,e)}buildRequest(){const t={requestUri:le,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
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
 */async function fe(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function de(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function pe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const ge={["USER_NOT_FOUND"]:"user-not-found"};async function me(t,e){const n={...e,operation:"REAUTH"};return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),ge)}
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
 */class ve extends re{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ve({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ve({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return de(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return pe(t,{idToken:e,...this._makeVerificationRequest()})}_getReauthenticationResolver(t){return me(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ve({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ye(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _e(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||e||t}class we{constructor(t){const e=(0,i.I9)((0,i.hp)(t)),n=e["apiKey"]??null,r=e["oobCode"]??null,s=ye(e["mode"]??null);_(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=e["continueUrl"]??null,this.languageCode=e["lang"]??null,this.tenantId=e["tenantId"]??null}static parseLink(t){const e=_e(t);try{return new we(e)}catch{return null}}}
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
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(t,e){return ce._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=we.parseLink(e);return _(n,"argument-error"),ce._fromEmailAndCode(t,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ee{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Te extends Ee{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Ie extends Te{constructor(){super("facebook.com")}static credential(t){return he._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
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
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return he._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Se.credential(e,n)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
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
class Ae extends Te{constructor(){super("github.com")}static credential(t){return he._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ae.credential(t.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com",Ae.PROVIDER_ID="github.com";
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
class Ce extends Te{constructor(){super("twitter.com")}static credential(t,e){return he._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ce.credential(e,n)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";
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
class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ut._fromIdTokenResponse(t,n,r),s=Re(n),o=new ke({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Re(n);return new ke({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Re(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Oe extends i.g{constructor(t,e,n,r){super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Oe.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Oe(t,e,n,r)}}function xe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Oe._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Ne(t,e,n=!1){const r=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",r)}
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
async function De(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(m(i));const s="reauthenticate";try{const r=await X(t,xe(i,s,e,t),n);_(r.idToken,i,"internal-error");const o=Q(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),ke._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===o?.code&&d(i,"user-mismatch"),o}}
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
 */async function Pe(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(m(t));const i="signIn",s=await xe(t,i,e),o=await ke._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Le(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Me(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Ue(t){return(0,i.Ku)(t).signOut()}
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
function Ve(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function $e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const Be="__sak";
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
 */class ze{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Be,"1"),this.storage.removeItem(Be),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */const qe=1e3,Ge=10;class We extends ze{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ct(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);At()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ge):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}We.type="LOCAL";const He=We,Ke=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){const e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Je(t){const e="http:"===window.location.protocol;return`${e?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}class Xe{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(t){if(void 0===typeof window)return t;const e=new URL(`${window.location.origin}/__cookies__`);return e.searchParams.set("finalTarget",t),e}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(t,e){}async _get(t){if(!this._isAvailable())return null;const e=Je(t);if(window.cookieStore){const t=await window.cookieStore.get(e);return t?.value}return Qe(e)}async _remove(t){if(!this._isAvailable())return;const e=await this._get(t);if(!e)return;const n=Je(t);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch((()=>{}))}_addListener(t,e){if(!this._isAvailable())return;const n=Je(t);if(window.cookieStore){const t=t=>{const r=t.changed.find((t=>t.name===n));r&&e(r.value);const i=t.deleted.find((t=>t.name===n));i&&e(null)},r=()=>window.cookieStore.removeEventListener("change",t);return this.listenerUnsubscribes.set(e,r),window.cookieStore.addEventListener("change",t)}let r=Qe(n);const i=setInterval((()=>{const t=Qe(n);t!==r&&(e(t),r=t)}),Ke),s=()=>clearInterval(i);this.listenerUnsubscribes.set(e,s)}_removeListener(t,e){const n=this.listenerUnsubscribes.get(e);n&&(n(),this.listenerUnsubscribes.delete(e))}}Xe.type="COOKIE";
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
class Ye extends ze{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ye.type="SESSION";const Ze=Ye;
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
 */function tn(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class en{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new en(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!s?.size)return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await tn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function nn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */en.receivers=[];class rn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function sn(){return window}function on(t){sn().location.href=t}
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
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function cn(){if(!navigator?.serviceWorker)return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch{return null}}function un(){return navigator?.serviceWorker?.controller||null}function ln(){return an()?self:null}
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
 */const hn="firebaseLocalStorageDb",fn=1,dn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function mn(t,e){return t.transaction([dn],e?"readwrite":"readonly").objectStore(dn)}function vn(){const t=indexedDB.deleteDatabase(hn);return new gn(t).toPromise()}function yn(){const t=indexedDB.open(hn,fn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(dn,{keyPath:pn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(dn)?e(n):(n.close(),await vn(),e(await yn()))}))}))}async function _n(t,e,n){const r=mn(t,!0).put({[pn]:e,value:n});return new gn(r).toPromise()}async function wn(t,e){const n=mn(t,!1).get(e),r=await new gn(n).toPromise();return void 0===r?null:r.value}function bn(t,e){const n=mn(t,!0).delete(e);return new gn(n).toPromise()}const En=800,Tn=3;class In{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=en._getInstance(ln()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yn();return await _n(t,Be,"1"),await bn(t,Be),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>_n(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>wn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>bn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=mn(t,!1).getAll();return new gn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}In.type="LOCAL";const Sn=In;
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
 */function An(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function Cn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function kn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
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
 */$t("rcb"),new C(3e4,6e4);
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
const Rn="recaptcha";async function On(t,e,n){if(!t._getRecaptchaConfig())try{await Qt(t)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){_("enroll"===e.type,t,"internal-error");const i={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===Gt){_(n?.type===Rn,t,"argument-error");const r=await xn(t,e,n);return Ve(t,r)}return Ve(t,e)},o=Kt(t,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;_(i,t,"missing-multi-factor-info");const s={mfaPendingCredential:e.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===Gt){_(n?.type===Rn,t,"argument-error");const r=await xn(t,e,n);return An(t,r)}return An(t,e)},a=Kt(t,s,"mfaSmsSignIn",o,"PHONE_PROVIDER"),c=await a.catch((t=>Promise.reject(t)));return c.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(t,e)=>{if(e.captchaResponse===Gt){_(n?.type===Rn,t,"argument-error");const r=await xn(t,e,n);return fe(t,r)}return fe(t,e)},s=Kt(t,e,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{n?._reset()}}async function xn(t,e,n){_(n.type===Rn,t,"argument-error");const r=await n.verify();_("string"===typeof r,t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const t=i.phoneEnrollmentInfo.phoneNumber,e=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:r,captchaResponse:e,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const t=i.phoneSignInInfo.captchaResponse,e=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:t,clientType:e,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
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
 */class Nn{constructor(t){this.providerId=Nn.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return On(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return ve._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Nn.credentialFromTaggedObject(e)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ve._fromTokenResponse(e,n):null}}
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
function Dn(t,e){return e?ht(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Nn.PROVIDER_ID="phone",Nn.PHONE_SIGN_IN_METHOD="phone";class Pn extends re{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ue(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ue(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ue(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ln(t){return Pe(t.auth,new Pn(t),t.bypassAuthState)}function Mn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),De(n,new Pn(t),t.bypassAuthState)}async function Un(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Ne(n,new Pn(t),t.bypassAuthState)}
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
 */class Vn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Un;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:d(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Fn=new C(2e3,1e4);async function jn(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(p(t,"operation-not-supported-in-this-environment"));const i=Pt(t);v(t,e,Ee);const s=Dn(i,n),o=new $n(i,"signInViaPopup",e,s);return o.executeNotNull()}class $n extends Vn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const t=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Fn.get())};t()}}$n.currentPopupAction=null;
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
const Bn="pendingRedirect",zn=new Map;class qn extends Vn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=zn.get(this.auth._key());if(!t){try{const e=await Gn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}zn.set(this.auth._key(),t)}return this.bypassAuthState||zn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gn(t,e){const n=Kn(e),r=Hn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Wn(t,e){zn.set(t._key(),e)}function Hn(t){return ht(t._redirectPersistence)}function Kn(t){return pt(Bn,t.config.apiKey,t.name)}
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
 */async function Qn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(m(t));const i=Pt(t),s=Dn(i,e),o=new qn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
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
const Jn=6e5;class Xn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!tr(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Zn(t)){const n=t.error.code?.split("auth/")[1]||"internal-error";e.onError(p(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yn(t))}saveEventToCache(t){this.cachedEventUids.add(Yn(t)),this.lastProcessedEventTime=Date.now()}}function Yn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Zn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===e?.code}function tr(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zn(t);default:return!1}}
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
 */async function er(t,e={}){return P(t,"GET","/v1/projects",e)}
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
 */const nr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rr=/^https?/;async function ir(t){if(t.config.emulator)return;const{authorizedDomains:e}=await er(t);for(const n of e)try{if(sr(n))return}catch{}d(t,"unauthorized-domain")}function sr(t){const e=E(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!rr.test(n))return!1;if(nr.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const or=new C(3e4,6e4);function ar(){const t=sn().___jsl;if(t?.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function cr(t){return new Promise(((e,n)=>{function r(){ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ar(),n(p(t,"network-request-failed"))},timeout:or.get()})}if(sn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else{if(!sn().gapi?.load){const e=$t("iframefcb");return sn()[e]=()=>{gapi.load?r():n(p(t,"network-request-failed"))},Vt(`${jt()}?onload=${e}`).catch((t=>n(t)))}r()}})).catch((t=>{throw ur=null,t}))}let ur=null;function lr(t){return ur=ur||cr(t),ur}
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
 */const hr=new C(5e3,15e3),fr="__/auth/iframe",dr="emulator/auth/iframe",pr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mr(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,dr):`https://${t.config.authDomain}/${fr}`,s={apiKey:e.apiKey,appName:t.name,v:r.MF},o=gr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function vr(t){const e=await lr(t),n=sn().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:mr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=sn().setTimeout((()=>{r(i)}),hr.get());function o(){sn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_r=500,wr=600,br="_blank",Er="http://localhost";class Tr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ir(t,e,n,r=_r,s=wr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...yr,width:r.toString(),height:s.toString(),top:o,left:a},l=(0,i.ZQ)().toLowerCase();n&&(c=_t(l)?br:n),vt(l)&&(e=e||Er,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==c)return Sr(e||"",c),new Tr(null);const f=window.open(e||"",c,h);_(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Tr(f)}function Sr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Ar="__/auth/handler",Cr="emulator/auth/handler",kr=encodeURIComponent("fac");async function Rr(t,e,n,s,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(e instanceof Ee){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${kr}=${encodeURIComponent(l)}`:"";return`${Or(t)}?${(0,i.Am)(u).slice(1)}${h}`}function Or({config:t}){return t.emulator?k(t,Cr):`https://${t.authDomain}/${Ar}`}
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
 */const xr="webStorageSupport";class Nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ze,this._completeRedirectFn=Qn,this._overrideRedirectResult=Wn}async _openPopup(t,e,n,r){b(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Rr(t,e,n,E(),r);return Ir(t,i,nn())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Rr(t,e,n,E(),r);return on(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await vr(t),n=new Xn(t);return e.register("authEvent",(e=>{_(e?.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(xr,{type:xr},(n=>{const r=n?.[0]?.[xr];void 0!==r&&e(!!r),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=ir(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ct()||yt()||It()}}const Dr=Nr;class Pr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Lr extends Pr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Lr(t)}_finalizeEnroll(t,e,n){return Fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Cn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Mr{constructor(){}static assertion(t){return Lr._fromCredential(t)}}Mr.FACTOR_ID="phone";class Ur{static assertionForEnrollment(t,e){return Vr._fromSecret(t,e)}static assertionForSignIn(t,e){return Vr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;_("undefined"!==typeof e.user?.auth,"internal-error");const n=await je(e.user.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Fr._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}Ur.FACTOR_ID="totp";class Vr extends Pr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Vr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Vr(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),$e(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return kn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Fr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Fr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){let n=!1;return(jr(t)||jr(e))&&(n=!0),n&&(jr(t)&&(t=this.auth.currentUser?.email||"unknownuser"),jr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function jr(t){return"undefined"===typeof t||0===t?.length}var $r="@firebase/auth",Br="1.13.0";
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
class zr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t(e?.stsTokenManager.accessToken||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function qr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gr(t){(0,r.om)(new o.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},u=new Dt(r,i,s,c);return Xt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new o.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new zr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)($r,Br,qr(t)),(0,r.KO)($r,Br,"esm2020")}
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
 */const Wr=300,Hr=(0,i.XA)("authIdTokenMaxAge")||Wr;let Kr=null;const Qr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hr)return;const i=n?.token;Kr!==i&&(Kr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jt(t,{popupRedirectResolver:Dr,persistence:[Sn,He,Ze]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Qr(t.toString());Me(n,e,(()=>e(n.currentUser))),Le(n,(t=>e(t)))}}const o=(0,i.Tj)("auth");return o&&Yt(n,`http://${o}`),n}function Xr(){return document.getElementsByTagName("head")?.[0]??document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Gr("Browser")},3167:function(t,e,n){"use strict";var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3238:function(t,e,n){"use strict";var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(e){return!0}}},3392:function(t,e,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3440:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(i)<=n.size?c(i,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(i,t)&&h(i,t)})),i}},3463:function(t){"use strict";var e=TypeError;t.exports=function(t){if("string"==typeof t)return t;throw new e("Argument is not a string")}},3506:function(t,e,n){"use strict";var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},3579:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3650:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},3706:function(t,e,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},3724:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3789:function(t,e,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new f(t,n)}},3838:function(t,e,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},3853:function(t,e,n){"use strict";var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},3925:function(t,e,n){"use strict";var r=n(34);t.exports=function(t){return r(t)||null===t}},3972:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(void 0===t||r(t))return t;throw new s(i(t)+" is not an object or undefined")}},4008:function(t,e,n){"use strict";n.d(e,{aE:function(){return Kt},Bt:function(){return ft}});n(4423),n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(8456);n(1148);const i=/#/g,s=/&/g,o=/\//g,a=/=/g,c=/\?/g,u=/\+/g,l=/%5B/g,h=/%5D/g,f=/%5E/g,d=/%60/g,p=/%7B/g,g=/%7C/g,m=/%7D/g,v=/%20/g;function y(t){return null==t?"":encodeURI(""+t).replace(g,"|").replace(l,"[").replace(h,"]")}function _(t){return y(t).replace(p,"{").replace(m,"}").replace(f,"^")}function w(t){return y(t).replace(u,"%2B").replace(v,"+").replace(i,"%23").replace(s,"%26").replace(d,"`").replace(p,"{").replace(m,"}").replace(f,"^")}function b(t){return w(t).replace(a,"%3D")}function E(t){return y(t).replace(i,"%23").replace(c,"%3F")}function T(t){return E(t).replace(o,"%2F")}function I(t){if(null==t)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const S=/\/$/,A=t=>t.replace(S,"");function C(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),s=e.slice(c,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=L(null!=r?r:e,n),{fullPath:r+s+o,path:r,query:i,hash:I(o)}}function k(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function R(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function O(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&x(e.matched[r],n.matched[i])&&N(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function x(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function N(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!D(t[n],e[n]))return!1;return!0}function D(t,e){return(0,r.h)(t)?P(t,e):(0,r.h)(e)?P(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function P(t,e){return(0,r.h)(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function L(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const M={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let U=function(t){return t["pop"]="pop",t["push"]="push",t}({}),V=function(t){return t["back"]="back",t["forward"]="forward",t["unknown"]="",t}({});function F(t){if(!t)if(r.b){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),A(t)}const j=/^[^#]+#/;function $(t,e){return t.replace(j,"#")+e}function B(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const z=()=>({left:window.scrollX,top:window.scrollY});function q(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=B(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function G(t,e){return(history.state?history.state.position-e:-1)+t}const W=new Map;function H(t,e){W.set(t,e)}function K(t){const e=W.get(t);return W.delete(t),e}function Q(t){return"string"===typeof t||t&&"object"===typeof t}function J(t){return"string"===typeof t||"symbol"===typeof t}function X(t){const e={};if(""===t||"?"===t)return e;const n=("?"===t[0]?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const t=n[i].replace(u," "),s=t.indexOf("="),o=I(s<0?t:t.slice(0,s)),a=s<0?null:I(t.slice(s+1));if(o in e){let t=e[o];(0,r.h)(t)||(t=e[o]=[t]),t.push(a)}else e[o]=a}return e}function Y(t){let e="";for(let n in t){const i=t[n];n=b(n),null!=i?((0,r.h)(i)?i.map((t=>t&&w(t))):[i&&w(i)]).forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})):void 0!==i&&(e+=(e.length?"&":"")+n)}return e}function Z(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=(0,r.h)(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}function tt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function et(t,e,n,i,s,o=t=>t()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise(((c,u)=>{const l=t=>{!1===t?u((0,r.u)(r.c.NAVIGATION_ABORTED,{from:n,to:e})):t instanceof Error?u(t):Q(t)?u((0,r.u)(r.c.NAVIGATION_GUARD_REDIRECT,{from:e,to:t})):(a&&i.enterCallbacks[s]===a&&"function"===typeof t&&a.push(t),c())},h=o((()=>t.call(i&&i.instances[s],e,n,l)));let f=Promise.resolve(h);t.length<3&&(f=f.then(l)),f.catch((t=>u(t)))}))}function nt(t,e,n,i,s=t=>t()){const o=[];for(const a of t){0;for(const t in a.components){let c=a.components[t];if("beforeRouteEnter"===e||a.instances[t])if((0,r._)(c)){const r=(c.__vccOpts||c)[e];r&&o.push(et(r,n,i,a,t,s))}else{let u=c();0,o.push((()=>u.then((o=>{if(!o)throw new Error(`Couldn't resolve component "${t}" at "${a.path}"`);const c=(0,r.g)(o)?o.default:o;a.mods[t]=o,a.components[t]=c;const u=(c.__vccOpts||c)[e];return u&&et(u,n,i,a,t,s)()}))))}}}return o}function rt(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>x(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>x(t,a)))||i.push(a))}return[n,r,i]}var it=n(6768),st=n(144);
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
let ot=()=>location.protocol+"//"+location.host;function at(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),R(n,"")}return R(n,t)+r+i}function ct(t,e,n,i){let s=[],o=[],a=null;const c=({state:r})=>{const o=at(t,location),c=n.value,u=e.value;let l=0;if(r){if(n.value=o,e.value=r,a&&a===c)return void(a=null);l=u?r.position-u.position:0}else i(o);s.forEach((t=>{t(n.value,c,{delta:l,type:U.pop,direction:l?l>0?V.forward:V.back:V.unknown})}))};function u(){a=n.value}function l(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return o.push(e),e}function h(){if("hidden"===document.visibilityState){const{history:t}=window;if(!t.state)return;t.replaceState((0,r.p)({},t.state,{scroll:z()}),"")}}function f(){for(const t of o)t();o=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:u,listen:l,destroy:f}}function ut(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?z():null}}function lt(t){const{history:e,location:n}=window,i={value:at(t,n)},s={value:e.state};function o(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:ot()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function a(t,n){o(t,(0,r.p)({},e.state,ut(s.value.back,t,s.value.forward,!0),n,{position:s.value.position}),!0),i.value=t}function c(t,n){const a=(0,r.p)({},s.value,e.state,{forward:t,scroll:z()});o(a.current,a,!0),o(t,(0,r.p)({},ut(i.value,t,null),{position:a.position+1},n),!1),i.value=t}return s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:s,push:c,replace:a}}function ht(t){t=F(t);const e=lt(t),n=ct(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=(0,r.p)({location:"",base:t,go:i,createHref:$.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ft(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ht(t)}let dt=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["Group"]=2]="Group",t}({});var pt=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["ParamRegExp"]=2]="ParamRegExp",t[t["ParamRegExpEnd"]=3]="ParamRegExpEnd",t[t["EscapeNext"]=4]="EscapeNext",t}(pt||{});const gt={type:dt.Static,value:""},mt=/[a-zA-Z0-9_]/;function vt(t){if(!t)return[[]];if("/"===t)return[[gt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=pt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(n===pt.Static?s.push({type:dt.Static,value:u}):n===pt.Param||n===pt.ParamRegExp||n===pt.ParamRegExpEnd?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:dt.Param,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||n===pt.ParamRegExp)switch(n){case pt.Static:"/"===a?(u&&h(),o()):":"===a?(h(),n=pt.Param):f();break;case pt.EscapeNext:f(),n=r;break;case pt.Param:"("===a?n=pt.ParamRegExp:mt.test(a)?f():(h(),n=pt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case pt.ParamRegExp:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=pt.ParamRegExpEnd:l+=a;break;case pt.ParamRegExpEnd:h(),n=pt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=pt.EscapeNext;return n===pt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}const yt="[^/]+?",_t={sensitive:!1,strict:!1,start:!0,end:!0};var wt=function(t){return t[t["_multiplier"]=10]="_multiplier",t[t["Root"]=90]="Root",t[t["Segment"]=40]="Segment",t[t["SubSegment"]=30]="SubSegment",t[t["Static"]=40]="Static",t[t["Dynamic"]=20]="Dynamic",t[t["BonusCustomRegExp"]=10]="BonusCustomRegExp",t[t["BonusWildcard"]=-50]="BonusWildcard",t[t["BonusRepeatable"]=-20]="BonusRepeatable",t[t["BonusOptional"]=-8]="BonusOptional",t[t["BonusStrict"]=.7000000000000001]="BonusStrict",t[t["BonusCaseSensitive"]=.25]="BonusCaseSensitive",t}(wt||{});const bt=/[.+*?^${}()[\]/\\]/g;function Et(t,e){const n=(0,r.p)({},_t,e),i=[];let s=n.start?"^":"";const o=[];for(const r of t){const t=r.length?[]:[wt.Root];n.strict&&!r.length&&(s+="/");for(let e=0;e<r.length;e++){const i=r[e];let a=wt.Segment+(n.sensitive?wt.BonusCaseSensitive:0);if(i.type===dt.Static)e||(s+="/"),s+=i.value.replace(bt,"\\$&"),a+=wt.Static;else if(i.type===dt.Param){const{value:t,repeatable:n,optional:c,regexp:u}=i;o.push({name:t,repeatable:n,optional:c});const h=u||yt;if(h!==yt){a+=wt.BonusCustomRegExp;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=c&&r.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,a+=wt.Dynamic,c&&(a+=wt.BonusOptional),n&&(a+=wt.BonusRepeatable),".*"===h&&(a+=wt.BonusWildcard)}t.push(a)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=wt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(a),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",i=!1;for(const s of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const t of s)if(t.type===dt.Static)n+=t.value;else if(t.type===dt.Param){const{value:o,repeatable:a,optional:c}=t,u=o in e?e[o]:"";if((0,r.h)(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=(0,r.h)(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n||"/"}return{re:a,score:i,keys:o,parse:c,stringify:u}}function Tt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&t[0]===wt.Static+wt.Segment?-1:1:t.length>e.length?1===e.length&&e[0]===wt.Static+wt.Segment?1:-1:0}function It(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Tt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(St(r))return 1;if(St(i))return-1}return i.length-r.length}function St(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const At={strict:!1,end:!0,sensitive:!1};function Ct(t,e,n){const i=Et(vt(t.path),n);const s=(0,r.p)(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function kt(t,e){const n=[],i=new Map;function s(t){return i.get(t)}function o(t,n,i){const s=!i,c=Ot(t);c.aliasOf=i&&i.record;const l=(0,r.v)(e,t),h=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)h.push(Ot((0,r.p)({},c,{components:i?i.record.components:c.components,path:t,aliasOf:i?i.record:c})))}let f,d;for(const e of h){const{path:r}=e;if(n&&"/"!==r[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(r&&i+r)}if(f=Ct(e,n,l),i?i.alias.push(f):(d=d||f,d!==f&&d.alias.push(f),s&&t.name&&!Nt(f)&&a(t.name)),Mt(f)&&u(f),c.children){const t=c.children;for(let e=0;e<t.length;e++)o(t[e],f,i&&i.children[e])}i=i||f}return d?()=>{a(d)}:r.y}function a(t){if(J(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(a),e.alias.forEach(a))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(a),t.alias.forEach(a))}}function c(){return n}function u(t){const e=Pt(t,n);n.splice(e,0,t),t.record.name&&!Nt(t)&&i.set(t.record.name,t)}function l(t,e){let s,o,a,c={};if("name"in t&&t.name){if(s=i.get(t.name),!s)throw(0,r.u)(r.c.MATCHER_NOT_FOUND,{location:t});0,a=s.record.name,c=(0,r.p)(Rt(e.params,s.keys.filter((t=>!t.optional)).concat(s.parent?s.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&Rt(t.params,s.keys.map((t=>t.name)))),o=s.stringify(c)}else if(null!=t.path)o=t.path,s=n.find((t=>t.re.test(o))),s&&(c=s.parse(o),a=s.record.name);else{if(s=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw(0,r.u)(r.c.MATCHER_NOT_FOUND,{location:t,currentLocation:e});a=s.record.name,c=(0,r.p)({},e.params,t.params),o=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:a,path:o,params:c,matched:u,meta:Dt(u)}}function h(){n.length=0,i.clear()}return e=(0,r.v)(At,e),t.forEach((t=>o(t))),{addRoute:o,resolve:l,removeRoute:a,clearRoutes:h,getRoutes:c,getRecordMatcher:s}}function Rt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ot(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Nt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dt(t){return t.reduce(((t,e)=>(0,r.p)(t,e.meta)),{})}function Pt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1;It(t,e[i])<0?r=i:n=i+1}const i=Lt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Lt(t){let e=t;while(e=e.parent)if(Mt(e)&&0===It(t,e))return e}function Mt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ut(t){const e=(0,it.WQ)(r.a),n=(0,it.WQ)(r.i);const i=(0,it.EW)((()=>{const n=(0,st.R1)(t.to);return e.resolve(n)})),s=(0,it.EW)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(x.bind(null,r));if(o>-1)return o;const a=zt(t[e-2]);return e>1&&zt(r)===a&&s[s.length-1].path!==a?s.findIndex(x.bind(null,t[e-2])):o})),o=(0,it.EW)((()=>s.value>-1&&Bt(n.params,i.value.params))),a=(0,it.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&N(n.params,i.value.params)));function c(n={}){if($t(n)){const n=e[(0,st.R1)(t.replace)?"replace":"push"]((0,st.R1)(t.to)).catch(r.y);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:i,href:(0,it.EW)((()=>i.value.href)),isActive:o,isExactActive:a,navigate:c}}function Vt(t){return 1===t.length?t[0]:t}const Ft=(0,it.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ut,setup(t,{slots:e}){const n=(0,st.Kh)(Ut(t)),{options:i}=(0,it.WQ)(r.a),s=(0,it.EW)((()=>({[qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&Vt(e.default(n));return t.custom?r:(0,it.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),jt=Ft;function $t(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bt(t,e){for(const n in e){const i=e[n],s=t[n];if("string"===typeof i){if(i!==s)return!1}else if(!(0,r.h)(s)||s.length!==i.length||i.some(((t,e)=>t.valueOf()!==s[e].valueOf())))return!1}return!0}function zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qt=(t,e,n)=>null!=t?t:null!=e?e:n,Gt=(0,it.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,it.WQ)(r.o),s=(0,it.EW)((()=>t.route||i.value)),o=(0,it.WQ)(r.s,0),a=(0,it.EW)((()=>{let t=(0,st.R1)(o);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),c=(0,it.EW)((()=>s.value.matched[a.value]));(0,it.Gt)(r.s,(0,it.EW)((()=>a.value+1))),(0,it.Gt)(r.r,c),(0,it.Gt)(r.o,s);const u=(0,st.KR)();return(0,it.wB)((()=>[u.value,c.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&x(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=s.value,o=t.name,a=c.value,l=a&&a.components[o];if(!l)return Wt(n.default,{Component:l,route:i});const h=a.props[o],f=h?!0===h?i.params:"function"===typeof h?h(i):h:null,d=t=>{t.component.isUnmounted&&(a.instances[o]=null)},p=(0,it.h)(l,(0,r.p)({},f,e,{onVnodeUnmounted:d,ref:u}));return Wt(n.default,{Component:p,route:i})||p}}});function Wt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Ht=Gt;function Kt(t){const e=kt(t.routes,t),n=t.parseQuery||X,i=t.stringifyQuery||Y,s=t.history;const o=tt(),a=tt(),c=tt(),u=(0,st.IJ)(M);let l=M;r.b&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=r.f.bind(null,(t=>""+t)),f=r.f.bind(null,T),d=r.f.bind(null,I);function p(t,n){let r,i;return J(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function g(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function m(){return e.getRoutes().map((t=>t.record))}function v(t){return!!e.getRecordMatcher(t)}function y(t,o){if(o=(0,r.p)({},o||u.value),"string"===typeof t){const i=C(n,t,o.path),a=e.resolve({path:i.path},o),c=s.createHref(i.fullPath);return(0,r.p)(i,a,{params:d(a.params),redirectedFrom:void 0,href:c})}let a;if(null!=t.path)a=(0,r.p)({},t,{path:C(n,t.path,o.path).path});else{const e=(0,r.p)({},t.params);for(const t in e)null==e[t]&&delete e[t];a=(0,r.p)({},t,{params:f(e)}),o.params=f(o.params)}const c=e.resolve(a,o),l=t.hash||"";c.params=h(d(c.params));const p=k(i,(0,r.p)({},t,{hash:_(l),path:c.path})),g=s.createHref(p);return(0,r.p)({fullPath:p,hash:l,query:i===Y?Z(t.query):t.query||{}},c,{redirectedFrom:void 0,href:g})}function w(t){return"string"===typeof t?C(n,t,u.value.path):(0,r.p)({},t)}function b(t,e){if(l!==t)return(0,r.u)(r.c.NAVIGATION_CANCELLED,{from:e,to:t})}function E(t){return R(t)}function S(t){return E((0,r.p)(w(t),{replace:!0}))}function A(t,e){const n=t.matched[t.matched.length-1];if(n&&n.redirect){const{redirect:i}=n;let s="function"===typeof i?i(t,e):i;return"string"===typeof s&&(s=s.includes("?")||s.includes("#")?s=w(s):{path:s},s.params={}),(0,r.p)({query:t.query,hash:t.hash,params:null!=s.path?{}:t.params},s)}}function R(t,e){const n=l=y(t),s=u.value,o=t.state,a=t.force,c=!0===t.replace,h=A(n,s);if(h)return R((0,r.p)(w(h),{state:"object"===typeof h?(0,r.p)({},o,h.state):o,force:a,replace:c}),e||n);const f=n;let d;return f.redirectedFrom=e,!a&&O(i,s,n)&&(d=(0,r.u)(r.c.NAVIGATION_DUPLICATED,{to:f,from:s}),at(s,s,!0,!1)),(d?Promise.resolve(d):D(f,s)).catch((t=>(0,r.d)(t)?(0,r.d)(t,r.c.NAVIGATION_GUARD_REDIRECT)?t:ot(t):W(t,f,s))).then((t=>{if(t){if((0,r.d)(t,r.c.NAVIGATION_GUARD_REDIRECT))return R((0,r.p)({replace:c},w(t.to),{state:"object"===typeof t.to?(0,r.p)({},o,t.to.state):o,force:a}),e||f)}else t=L(f,s,!0,c,o);return P(f,s,t),t}))}function x(t,e){const n=b(t,e);return n?Promise.reject(n):Promise.resolve()}function N(t){const e=lt.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function D(t,e){let n;const[i,s,c]=rt(t,e);n=nt(i.reverse(),"beforeRouteLeave",t,e);for(const r of i)r.leaveGuards.forEach((r=>{n.push(et(r,t,e))}));const u=x.bind(null,t,e);return n.push(u),ft(n).then((()=>{n=[];for(const r of o.list())n.push(et(r,t,e));return n.push(u),ft(n)})).then((()=>{n=nt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push(et(r,t,e))}));return n.push(u),ft(n)})).then((()=>{n=[];for(const i of c)if(i.beforeEnter)if((0,r.h)(i.beforeEnter))for(const r of i.beforeEnter)n.push(et(r,t,e));else n.push(et(i.beforeEnter,t,e));return n.push(u),ft(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=nt(c,"beforeRouteEnter",t,e,N),n.push(u),ft(n)))).then((()=>{n=[];for(const r of a.list())n.push(et(r,t,e));return n.push(u),ft(n)})).catch((t=>(0,r.d)(t,r.c.NAVIGATION_CANCELLED)?t:Promise.reject(t)))}function P(t,e,n){c.list().forEach((r=>N((()=>r(t,e,n)))))}function L(t,e,n,i,o){const a=b(t,e);if(a)return a;const c=e===M,l=r.b?history.state:{};n&&(i||c?s.replace(t.fullPath,(0,r.p)({scroll:c&&l&&l.scroll},o)):s.push(t.fullPath,o)),u.value=t,at(t,e,n,c),ot()}let V;function F(){V||(V=s.listen(((t,e,n)=>{if(!ht.listening)return;const i=y(t),o=A(i,ht.currentRoute.value);if(o)return void R((0,r.p)(o,{replace:!0,force:!0}),i).catch(r.y);l=i;const a=u.value;r.b&&H(G(a.fullPath,n.delta),z()),D(i,a).catch((t=>(0,r.d)(t,r.c.NAVIGATION_ABORTED|r.c.NAVIGATION_CANCELLED)?t:(0,r.d)(t,r.c.NAVIGATION_GUARD_REDIRECT)?(R((0,r.p)(w(t.to),{force:!0}),i).then((t=>{(0,r.d)(t,r.c.NAVIGATION_ABORTED|r.c.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===U.pop&&s.go(-1,!1)})).catch(r.y),Promise.reject()):(n.delta&&s.go(-n.delta,!1),W(t,i,a)))).then((t=>{t=t||L(i,a,!1),t&&(n.delta&&!(0,r.d)(t,r.c.NAVIGATION_CANCELLED)?s.go(-n.delta,!1):n.type===U.pop&&(0,r.d)(t,r.c.NAVIGATION_ABORTED|r.c.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),P(i,a,t)})).catch(r.y)})))}let j,$=tt(),B=tt();function W(t,e,n){ot(t);const r=B.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function Q(){return j&&u.value!==M?Promise.resolve():new Promise(((t,e)=>{$.add([t,e])}))}function ot(t){return j||(j=!t,F(),$.list().forEach((([e,n])=>t?n(t):e())),$.reset()),t}function at(e,n,i,s){const{scrollBehavior:o}=t;if(!r.b||!o)return Promise.resolve();const a=!i&&K(G(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,it.dY)().then((()=>o(e,n,a))).then((t=>t&&q(t))).catch((t=>W(t,e,n)))}const ct=t=>s.go(t);let ut;const lt=new Set,ht={currentRoute:u,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:v,getRoutes:m,resolve:y,options:t,push:E,replace:S,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:B.add,isReady:Q,install(t){t.component("RouterLink",jt),t.component("RouterView",Ht),t.config.globalProperties.$router=ht,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,st.R1)(u)}),r.b&&!ut&&u.value===M&&(ut=!0,E(s.location).catch((t=>{0})));const e={};for(const r in M)Object.defineProperty(e,r,{get:()=>u.value[r],enumerable:!0});t.provide(r.a,ht),t.provide(r.i,(0,st.Gc)(e)),t.provide(r.o,u);const n=t.unmount;lt.add(t),t.unmount=function(){lt.delete(t),lt.size<1&&(l=M,V&&V(),V=null,u.value=M,ut=!1,j=!1),n()}}};function ft(t){return t.reduce(((t,e)=>t.then((()=>N(e)))),Promise.resolve())}return ht}},4055:function(t,e,n){"use strict";var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4114:function(t,e,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},4149:function(t){"use strict";var e=RangeError;t.exports=function(t){if(t===t)return t;throw new e("NaN is not allowed")}},4154:function(t,e,n){"use strict";var r=n(6955),i=TypeError;t.exports=function(t){if("Uint8Array"===r(t))return t;throw new i("Argument is not an Uint8Array")}},4204:function(t,e,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,(function(t){i(c,t)})),c}},4209:function(t,e,n){"use strict";var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4226:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(3463),o=n(4154),a=n(5169),c=n(2303);function u(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(e){return!0}}i.Uint8Array&&r({target:"Uint8Array",proto:!0,forced:u()},{setFromHex:function(t){o(this),s(t),a(this.buffer);var e=c(t,this).read;return{read:e,written:e/2}}})},4232:function(t,e,n){"use strict";n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return G},BX:function(){return nt},Bm:function(){return b},C4:function(){return X},CE:function(){return g},CP:function(){return u},DY:function(){return V},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return C},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return W},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return A},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return k},yL:function(){return T},yQ:function(){return F}});n(4114),n(8111),n(2489),n(7588);
/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),v=t=>"[object Date]"===S(t),y=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),I=Object.prototype.toString,S=t=>I.call(t),A=t=>S(t).slice(8,-1),C=t=>"[object Object]"===S(t),k=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},x=/-\w/g,N=O((t=>t.replace(x,(t=>t.slice(1).toUpperCase())))),D=/\B([A-Z])/g,P=O((t=>t.replace(D,"-$1").toLowerCase())),L=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=O((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),V=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},F=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",G=r(q);function W(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?J(r):W(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||E(t))return t}const H=/;(?![^(]*\))/g,K=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function J(t){const e={};return t.replace(Q,"").split(H).forEach((t=>{if(t){const n=t.split(K);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Y);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!_(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!E(e)||p(e)||C(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4243:function(t,e,n){var r=n(4867),i=n(9692),s=n(9299),o=NaN,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function h(t){if("number"==typeof t)return t;if(s(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=h},4270:function(t,e,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},4289:function(t,e,n){"use strict";n.d(e,{Dc:function(){return mt},rJ:function(){return Ha},H9:function(){return Ka},GG:function(){return iu},aU:function(){return Za},P:function(){return Fc},c4:function(){return ru},O5:function(){return xc},_M:function(){return $c}});n(4114),n(8111),n(2489),n(7588),n(1701),n(5367),n(2731),n(8454),n(9452);var r,i,s=n(262),o=n(798),a=(n(4423),n(1148),n(116),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979),n(2455)),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var l={};function h(t){return-128<=t&&t<128?a(t,(function(t){return new c([0|t],t<0?-1:0)})):new c([0|t],t<0?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return _(f(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return _(d(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(e,8));let r=p;for(let s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s);const o=parseInt(t.substring(s,s+i),e);i<8?(i=f(Math.pow(e,i)),r=r.j(i).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function _(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function w(t,e){return t.add(_(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(v(e))throw Error("division by zero");if(v(t))return new E(p,p);if(y(t))return e=T(_(t),e),new E(_(e.g),_(e.h));if(y(e))return e=T(t,_(e)),new E(_(e.g),e.h);if(t.g.length>30){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var o=s.add(r);o.l(t)<=0&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return e=w(t,i.j(e)),new E(i,e)}for(i=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=f(n),o=s.j(e);y(o)||o.l(t)>0;)n-=r,s=f(n),o=s.j(e);v(s)&&(s=g),i=i.add(s),t=w(t,o)}return new E(i,t)}function I(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function S(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(y(this))return-_(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+_(this).toString(t);const e=f(Math.pow(t,6));var n=this;let r="";for(;;){const i=T(n,e).g;n=w(n,i.j(e));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?_(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?_(this).j(_(t)):_(_(this).j(t));if(y(t))return _(this.j(_(t)));if(this.l(m)<0&&t.l(m)<0)return f(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,b(n,2*r+2*e),n[2*r+2*e+1]+=i*a,b(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,b(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,b(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,v,y=n(6189),_=(n(7324),n(6382),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),w={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",(function(t){return t||Symbol("Symbol.dispose")})),i("Array.prototype.values",(function(t){return t||function(){return this[Symbol.iterator]()}})),i("Object.entries",(function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function I(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class A{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function C(t){o.setTimeout((()=>{throw t}),0)}function k(){var t=P;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class R{constructor(){this.h=this.g=null}add(t,e){const n=O.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var O=new A((()=>new x),(t=>t.reset()));class x{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let N,D=!1,P=new R,L=()=>{const t=Promise.resolve(void 0);N=()=>{t.then(M)}};function M(){for(var t;t=k();){try{t.h.call(t.g)}catch(n){C(n)}var e=O;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}D=!1}function U(){this.u=this.u,this.C=this.C}function V(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}U.prototype.u=!1,U.prototype.dispose=function(){this.u||(this.u=!0,this.N())},U.prototype[Symbol.dispose]=function(){this.dispose()},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var F=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function j(t){return/^[\s\xa0]*$/.test(t)}function $(t,e){V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}b($,V),$.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),z=0;function q(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++z,this.da=this.fa=!1}function G(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function W(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function H(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function K(t){const e={};for(const n in t)e[n]=t[n];return e}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Q.length;e++)n=Q[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function X(t){this.src=t,this.g={},this.h=0}function Y(t,e){const n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(G(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(let i=0;i<t.length;++i){const s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}X.prototype.add=function(t,e,n,r,i){const s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);const o=Z(t,e,r,i);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new q(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function rt(t,e,n,r,i){if(r&&r.once)return ot(t,e,n,r,i);if(Array.isArray(e)){for(let s=0;s<e.length;s++)rt(t,e[s],n,r,i);return null}return n=dt(n),t&&t[B]?t.J(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!1,r,i)}function it(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=ht(t);if(c||(t[tt]=c=new X(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=st(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)F||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function st(){function t(n){return e.call(t.src,t.listener,n)}const e=lt;return t}function ot(t,e,n,r,i){if(Array.isArray(e)){for(let s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=dt(n),t&&t[B]?t.K(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!0,r,i)}function at(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=dt(n),t&&t[B]?(t=t.i,s=String(e).toString(),s in t.g&&(e=t.g[s],n=Z(e,n,r,i),n>-1&&(G(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--)))):t&&(t=ht(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,i)),(n=t>-1?e[t]:null)&&ct(n))}function ct(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[B])Y(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ht(e))?(Y(n,t),0==n.h&&(n.src=null,e[tt]=null)):G(t)}}}function ut(t){return t in et?et[t]:et[t]="on"+t}function lt(t,e){if(t.da)t=!0;else{e=new $(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&ct(t),t=n.call(r,e)}return t}function ht(t){return t=t[tt],t instanceof X?t:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function dt(t){return"function"===typeof t?t:(t[ft]||(t[ft]=function(e){return t.handleEvent(e)}),t[ft])}function pt(){U.call(this),this.i=new X(this),this.M=this,this.G=null}function gt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new V(e,t);else if(e instanceof V)e.target=e.target||t;else{var i=e;e=new V(r,t),J(e,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],i=mt(s,r,!0,e)&&i;if(s=e.g=t,i=mt(s,r,!0,e)&&i,i=mt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=mt(s,r,!1,e)&&i}function mt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let i=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&Y(t.i,o),i=!1!==e.call(n,r)&&i}}return i&&!r.defaultPrevented}function vt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function yt(t){t.g=vt((()=>{t.g=null,t.i&&(t.i=!1,yt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}b(pt,U),pt.prototype[B]=!0,pt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)G(n[t]);delete t.g[e],t.h--}}this.G=null},pt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class _t extends U{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(t){U.call(this),this.h=t,this.g={}}b(wt,U);var bt=[];function Et(t){W(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ct(t)}),t),t.g={}}wt.prototype.N=function(){wt.Z.N.call(this),Et(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=o.JSON.stringify,It=o.JSON.parse,St=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function At(){}function Ct(){}var kt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rt(){V.call(this,"d")}function Ot(){V.call(this,"c")}b(Rt,V),b(Ot,V);var xt={},Nt=null;function Dt(){return Nt=Nt||new pt}function Pt(t){V.call(this,xt.Ia,t)}function Lt(t){const e=Dt();gt(e,new Pt(e))}function Mt(t,e){V.call(this,xt.STAT_EVENT,t),this.stat=e}function Ut(t){const e=Dt();gt(e,new Mt(e,t))}function Vt(t,e){V.call(this,xt.Ja,t),this.size=e}function Ft(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout((function(){t()}),e)}function jt(){this.g=!0}function $t(t,e,n,r,i,s){t.info((function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Bt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Gt(t,n)+(r?" "+r:"")}))}function qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Gt(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let t=1;t<r.length;t++)r[t]=""}}}return Tt(s)}catch(s){return e}}xt.Ia="serverreachability",b(Pt,V),xt.STAT_EVENT="statevent",b(Mt,V),xt.Ja="timingevent",b(Vt,V),jt.prototype.ua=function(){this.g=!1},jt.prototype.info=function(){};var Wt,Ht={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qt(){}function Jt(t){return encodeURIComponent(String(t))}function Xt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Yt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new wt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zt}function Zt(){this.i=null,this.g="",this.h=!1}b(Qt,At),Qt.prototype.g=function(){return new XMLHttpRequest},Wt=new Qt;var te={},ee={};function ne(t,e,n){t.M=1,t.A=Re(Ie(e)),t.u=n,t.R=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.B=Ie(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),ze(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Zt,t.g=Ln(t.j,n?e:null,!t.u),t.P>0&&(t.O=new _t(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var i="readystatechange";Array.isArray(i)||(i&&(bt[0]=i.toString()),i=bt);for(let s=0;s<i.length;s++){const t=rt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?K(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Lt(),$t(t.i,t.v,t.B,t.l,t.S,t.u)}function ie(t){if(!se(t))return t.g.la();const e=dn(t.g);if(""===e)return"";let n="";const r=e.length,i=4==fn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return he(t),le(t),"";t.h.i=new o.TextDecoder}for(let s=0;s<r;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(i&&s==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function se(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ee:(n=Number(e.substring(n,r)),isNaN(n)?te:(r+=1,r+n>e.length?ee:(e=e.slice(r,r+n),t.C=r+n,e)))}function ae(t){t.T=Date.now()+t.H,ce(t,t.H)}function ce(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Ft(u(t.aa,t),e)}function ue(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function le(t){0==t.j.I||t.K||On(t.j,t)}function he(t){ue(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,Et(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function fe(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ve(n.h,t)))if(!t.L&&ve(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Rn(n),yn(n)}An(n),Ut(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ft(u(n.Va,n),6e3));me(n.h)<=1&&n.ta&&(n.ta=void 0)}else Nn(n,11)}else if((t.L||n.g==t)&&Rn(n),!j(e))for(i=n.Ba.g.parse(e),e=0;e<i.length;e++){let u=i[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ye(s,s.h),s.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,ke(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Pn(r,r.L?r.ba:null,r.W),o.L){_e(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ue(a),ae(a)),r.g=o}else Sn(r);n.i.length>0&&wn(n)}else"stop"!=u[0]&&"close"!=u[0]||Nn(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Nn(n,7):vn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Lt(4)}catch(l){}}Yt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==fn(t)?e.j():this.Y(t)},Yt.prototype.Y=function(t){try{if(t==this.g)t:{const a=fn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||dn(this.g)))){this.K||4!=a||7==c||Lt(8==c||u<=0?3:2),ue(this);var e=this.g.ca();this.X=e;var n=ie(this);if(this.o=200==e,Bt(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var s=r;break e}}s=null}if(!(t=s)){this.o=!1,this.m=3,Ut(12),he(this),le(this);break t}zt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fe(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=oe(this,n),e==ee){4==a&&(this.m=4,Ut(14),t=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}if(e==te){this.m=4,Ut(15),zt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}zt(this.i,this.l,e,null),fe(this,e)}if(se(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Ut(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cn(o),o.P=!0,Ut(11))}}else zt(this.i,this.l,n,"[Invalid Chunked Response]"),he(this),le(this)}else zt(this.i,this.l,n,null),fe(this,n);4==a&&he(this),this.o&&!this.K&&(4==a?On(this.j,this):(this.o=!1,ae(this)))}else pn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Ut(12)):(this.m=0,Ut(13)),he(this),le(this)}}}catch(a){}},Yt.prototype.cancel=function(){this.K=!0,he(this)},Yt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(qt(this.i,this.B),2!=this.M&&(Lt(),Ut(17)),he(this),this.m=2,le(this)):ce(this,this.T-t)};var de=class{constructor(t,e){this.g=t,this.map=e}};function pe(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function me(t){return t.h?1:t.g?t.g.size:0}function ve(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ye(t,e){t.g?t.g.add(e):t.h=e}function _e(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function we(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return I(t.i)}pe.prototype.cancel=function(){if(this.i=we(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let i,s=null;r>=0?(i=t[n].substring(0,r),s=t[n].substring(r+1)):i=t[n],e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Te(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Te?(this.l=t.l,Se(this,t.j),this.o=t.o,this.g=t.g,Ae(this,t.u),this.h=t.h,Ce(this,qe(t.i)),this.m=t.m):t&&(e=String(t).match(be))?(this.l=!1,Se(this,e[1]||"",!0),this.o=Oe(e[2]||""),this.g=Oe(e[3]||"",!0),Ae(this,e[4]),this.h=Oe(e[5]||"",!0),Ce(this,e[6]||"",!0),this.m=Oe(e[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}function Ie(t){return new Te(t)}function Se(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ae(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ce(t,e,n){e instanceof Ve?(t.i=e,We(t.i,t.l)):(n||(e=xe(e,Me)),t.i=new Ve(e,t.l))}function ke(t,e,n){t.i.set(e,n)}function Re(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ne),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ne(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(xe(e,De,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(xe(e,De,!0),"@"),t.push(Jt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(xe(n,"/"==n.charAt(0)?Le:Pe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",xe(n,Ue)),t.join("")},Te.prototype.resolve=function(t){const e=Ie(this);let n=!!t.j;n?Se(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ae(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=e.h.lastIndexOf("/");-1!=i&&(r=e.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const t=[];for(let e=0;e<i.length;){const n=i[e++];"."==n?r&&e==i.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==i.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=i}return n?e.h=r:n=""!==t.i.toString(),n?Ce(e,qe(t.i)):n=!!t.m,n&&(e.m=t.m),e};var De=/[#\/\?@]/g,Pe=/[#\?:]/g,Le=/[#\?]/g,Me=/[#\?@]/g,Ue=/#/g;function Ve(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fe(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function je(t,e){Fe(t),e=Ge(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $e(t,e){return Fe(t),e=Ge(t,e),t.g.has(e)}function Be(t,e){Fe(t);let n=[];if("string"===typeof e)$e(t,e)&&(n=n.concat(t.g.get(Ge(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function ze(t,e,n){je(t,e),n.length>0&&(t.i=null,t.g.set(Ge(t,e),I(n)),t.h+=n.length)}function qe(t){const e=new Ve;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ge(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function We(t,e){e&&!t.j&&(Fe(t),t.i=null,t.g.forEach((function(t,e){const n=e.toLowerCase();e!=n&&(je(this,e),ze(this,n,t))}),t)),t.j=e}function He(t,e){const n=new jt;if(o.Image){const r=new Image;r.onload=y(Qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=y(Qe,n,"TestLoadImage: error",!1,e,r),r.onabort=y(Qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=y(Qe,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ke(t,e){const n=new jt,r=new AbortController,i=setTimeout((()=>{r.abort(),Qe(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),Qe(n,"TestPingServer: error",!1,e)}))}function Qe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Je(){this.g=new St}function Xe(t){this.i=t.Sb||null,this.h=t.ab||!1}function Ye(t,e){pt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.B=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function nn(t){let e="";return W(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function rn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nn(n),"string"===typeof t?null!=n&&Jt(n):ke(t,e,n))}function sn(t){pt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Ve.prototype,t.add=function(t,e){Fe(this),this.i=null,t=Ge(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Fe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.set=function(t,e){return Fe(this),this.i=null,t=Ge(this,t),$e(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=Be(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const i=Jt(n);n=Be(this,n);for(let e=0;e<n.length;e++){let r=i;""!==n[e]&&(r+="="+Jt(n[e])),t.push(r)}}return this.i=t.join("&")},b(Xe,At),Xe.prototype.g=function(){return new Ye(this.i,this.h)},b(Ye,pt),t=Ye.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,en(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,tn(this))},t.Na=function(t){this.g&&(this.response=t,tn(this))},t.ga=function(){this.g&&tn(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ye.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),b(sn,pt);var on=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,un(t),hn(t)}function un(t){t.A||(t.A=!0,gt(t,"complete"),gt(t,"error"))}function ln(t){if(t.h&&"undefined"!=typeof s)if(t.v&&4==fn(t))setTimeout(t.Ca.bind(t),0);else if(gt(t,"readystatechange"),4==fn(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(be)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!on.test(e?e.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.o=6;try{var i=fn(t)>2?t.g.statusText:""}catch(a){i=""}t.l=i+" ["+t.ca()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||gt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function fn(t){return t.g?t.g.readyState:0}function dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function pn(t){const e={};t=(t.g&&fn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(j(t[r]))continue;var n=Xt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}H(e,(function(t){return t.join(", ")}))}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mn(t){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new pe(t&&t.concurrentRequestLimit),this.Ba=new Je,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function vn(t){if(_n(t),3==t.I){var e=t.V++,n=Ie(t.J);if(ke(n,"SID",t.M),ke(n,"RID",e),ke(n,"TYPE","terminate"),Tn(t,n),e=new Yt(t,t.j,e),e.M=2,e.A=Re(Ie(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Ln(e.j,null),e.g.ea(e.A)),e.F=Date.now(),ae(e)}Dn(t)}function yn(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function _n(t){yn(t),t.v&&(o.clearTimeout(t.v),t.v=null),Rn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function wn(t){if(!ge(t.h)&&!t.m){t.m=!0;var e=t.Ea;N||L(),D||(N(),D=!0),P.add(e,t),t.D=0}}function bn(t,e){return!(me(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Ft(u(t.Ea,t,e),xn(t,t.D)),t.D++,!0))}function En(t,e){var n;n=e?e.l:t.V++;const r=Ie(t.J);ke(r,"SID",t.M),ke(r,"RID",n),ke(r,"AID",t.K),Tn(t,r),t.u&&t.o&&rn(r,t.u,t.o),n=new Yt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=In(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ye(t.h,n),ne(n,r,e)}function Tn(t,e){t.H&&W(t.H,(function(t,n){ke(e,n,t)})),t.l&&W({},(function(t,n){ke(e,n,t)}))}function In(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=e,s<0)e=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Tt(n)),t.push(s+e+"="+encodeURIComponent(r))}}catch(nt){throw t.push(s+"type="+encodeURIComponent("_badmap")),nt}}catch(nt){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function Sn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;N||L(),D||(N(),D=!0),P.add(e,t),t.A=0}}function An(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Ft(u(t.Da,t),xn(t,t.A)),t.A++,!0)}function Cn(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function kn(t){t.g=new Yt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Ie(t.na);ke(e,"RID","rpc"),ke(e,"SID",t.M),ke(e,"AID",t.K),ke(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&ke(e,"TO",t.ia),ke(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&rn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=Re(Ie(e)),n.u=null,n.R=!0,re(n,t)}function Rn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function On(t,e){var n=null;if(t.g==e){Rn(t),Cn(t),t.g=null;var r=2}else{if(!ve(t.h,e))return;n=e.G,_e(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var i=t.D;r=Dt(),gt(r,new Vt(r,n)),wn(t)}else Sn(t);else if(i=e.m,3==i||0==i&&e.X>0||!(1==r&&bn(t,e)||2==r&&An(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}function xn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function Nn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Te(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Se(r,"https"),Re(r),e?He(r.toString(),n):Ke(r.toString(),n)}else Ut(2);t.I=0,t.l&&t.l.pa(e),Dn(t),_n(t)}function Dn(t){if(t.I=0,t.ja=[],t.l){const e=we(t.h);0==e.length&&0==t.i.length||(S(t.ja,e),S(t.ja,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.oa()}}function Pn(t,e,n){var r=n instanceof Te?Ie(n):new Te(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ae(r,r.u);else{var i=o.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;const t=new Te(null);r&&Se(t,r),e&&(t.g=e),i&&Ae(t,i),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&ke(r,n,e),ke(r,"VER",t.ka),Tn(t,r),r}function Ln(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new sn(new Xe({ab:n})):new sn(t.ma),e.Fa(t.L),e}function Mn(){}function Un(){}function Vn(t,e){pt.call(this),this.g=new mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!j(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!j(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}function Fn(t){Rt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jn(){Ot.call(this),this.status=1}function $n(t){this.g=t}t=sn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wt.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void cn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(an,e,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(s){cn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,gt(this,"complete"),gt(this,"abort"),hn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},t.Xa=function(){ln(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),It(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=mn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Ut(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Pn(this,null,this.W),wn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Yt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=K(s),J(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=In(this,i,e),n=Ie(this.J),ke(n,"RID",t),ke(n,"CVER",22),this.G&&ke(n,"X-HTTP-Session-Id",this.G),Tn(this,n),s&&(this.R?e="headers="+Jt(nn(s))+"&"+e:this.u&&rn(n,this.u,s)),ye(this.h,i),this.Ra&&ke(n,"TYPE","init"),this.S?(ke(n,"$req",e),ke(n,"SID","null"),i.U=!0,ne(i,n,null)):ne(i,n,e),this.I=2}}else 3==this.I&&(t?En(this,t):0==this.i.length||ge(this.h)||En(this))},t.Da=function(){if(this.v=null,kn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Ft(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ut(10),yn(this),kn(this))},t.Va=function(){null!=this.C&&(this.C=null,yn(this),An(this),Ut(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Mn.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Un.prototype.g=function(t,e){return new Vn(t,e)},b(Vn,pt),Vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vn.prototype.close=function(){vn(this.g)},Vn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new de(e.Ya++,t)),3==e.I&&wn(e)},Vn.prototype.N=function(){this.g.l=null,delete this.j,vn(this.g),delete this.g,Vn.Z.N.call(this)},b(Fn,Rt),b(jn,Ot),b($n,Mn),$n.prototype.ra=function(){gt(this.g,"a")},$n.prototype.qa=function(t){gt(this.g,new Fn(t))},$n.prototype.pa=function(t){gt(this.g,new jn)},$n.prototype.oa=function(){gt(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,Vn.prototype.send=Vn.prototype.o,Vn.prototype.open=Vn.prototype.m,Vn.prototype.close=Vn.prototype.close,v=w.createWebChannelTransport=function(){return new Un},m=w.getStatEventTarget=function(){return Dt()},g=w.Event=xt,p=w.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ht.NO_ERROR=0,Ht.TIMEOUT=8,Ht.HTTP_ERROR=6,d=w.ErrorCode=Ht,Kt.COMPLETE="complete",f=w.EventType=Kt,Ct.EventType=kt,kt.OPEN="a",kt.CLOSE="b",kt.ERROR="c",kt.MESSAGE="d",pt.prototype.listen=pt.prototype.J,h=w.WebChannel=Ct,w.FetchXmlHttpFactory=Xe,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,l=w.XhrIo=sn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
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
class b{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");
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
let E="12.12.0";function T(t){E=t}
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
 */const I=new y.Vy("@firebase/firestore");function S(){return I.logLevel}function A(t,...e){if(I.logLevel<=y.$b.DEBUG){const n=e.map(R);I.debug(`Firestore (${E}): ${t}`,...n)}}function C(t,...e){if(I.logLevel<=y.$b.ERROR){const n=e.map(R);I.error(`Firestore (${E}): ${t}`,...n)}}function k(t,...e){if(I.logLevel<=y.$b.WARN){const n=e.map(R);I.warn(`Firestore (${E}): ${t}`,...n)}}function R(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function O(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,x(t,r,n)}function x(t,e,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw C(r),new Error(r)}function N(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||x(e,i,r)}function D(t,e){return t}
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class U{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(b.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=b.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){N(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(N("string"==typeof e.accessToken,31837,{l:e}),new U(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return N(null===t||"string"==typeof t,2055,{h:t}),new b(t)}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=b.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class B{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new $(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(b.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){N(void 0===this.o,3512);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new z(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(N("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new z(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function G(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class W{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=G(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function H(t,e){return t<e?-1:t>e?1:0}function K(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return X(n)===X(i)?H(n,i):X(n)?1:-1}return H(t.length,e.length)}const Q=55296,J=57343;function X(t){const e=t.charCodeAt(0);return e>=Q&&e<=J}function Y(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
const Z="__name__";class tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tt?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=tt.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return H(t.length,e.length)}static compareSegments(t,e){const n=tt.isNumericId(t),r=tt.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?tt.extractNumericId(t).compare(tt.extractNumericId(e)):K(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class et extends tt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new et(e)}static emptyPath(){return new et([])}}const nt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends tt{construct(t,e,n){return new rt(t,e,n)}static isValidIdentifier(t){return nt.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new rt([Z])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}
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
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(et.fromString(t))}static fromName(t){return new it(et.fromString(t).popFirst(5))}static empty(){return new it(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new et(t.slice()))}}
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
 */function st(t,e,n){if(!n)throw new L(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ot(t,e,n,r){if(!0===e&&!0===r)throw new L(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function at(t){if(!it.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ct(t){if(it.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ut(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function lt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O(12329,{type:typeof t})}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lt(t);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function dt(t,e){if(!ut(t))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new L(P.INVALID_ARGUMENT,n);return!0}
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
 */const pt=-62135596800,gt=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*gt);return new mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pt)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gt}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dt(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:ft("string",mt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};
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
class vt{static fromTimestamp(t){return new vt(t)}static min(){return new vt(new mt(0,0))}static max(){return new vt(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */const yt=-1;class _t{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}_t.UNKNOWN_ID=-1;function wt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=vt.fromTimestamp(1e9===r?new mt(n+1,0):new mt(n,r));return new Et(i,it.empty(),e)}function bt(t){return new Et(t.readTime,t.key,yt)}class Et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Et(vt.min(),it.empty(),yt)}static max(){return new Et(vt.max(),it.empty(),yt)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:H(t.largestBatchId,e.largestBatchId)
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
 */)}const It="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class St{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function At(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==It)throw t;A("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ct(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ct?e:Ct.resolve(e)}catch(t){return Ct.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ct.reject(e)}static resolve(t){return new Ct(((e,n)=>{e(t)}))}static reject(t){return new Ct(((e,n)=>{n(t)}))}static waitFor(t){return new Ct(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ct.resolve(!1);for(const n of t)e=e.next((t=>t?Ct.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ct(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ct(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function kt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rt(t){return"IndexedDbTransactionError"===t.name}
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
class Ot{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ot.ce=-1;
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
 */const xt=-1;function Nt(t){return null==t}function Dt(t){return 0===t&&1/t==-1/0}function Pt(t){return"number"==typeof t&&Number.isInteger(t)&&!Dt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
const Lt="";function Mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vt(e)),e=Ut(t.get(n),e);return Vt(e)}function Ut(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Lt:n+="";break;default:n+=e}}return n}function Vt(t){return t+Lt+""}
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
const Ft="remoteDocuments",jt="owner",$t="mutationQueues",Bt="mutations";
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
 */const zt="documentMutations",qt="remoteDocumentsV14",Gt="remoteDocumentGlobal",Wt="targets",Ht="targetDocuments",Kt="targetGlobal",Qt="collectionParents",Jt="clientMetadata",Xt="bundles",Yt="namedQueries",Zt="indexConfiguration",te="indexState",ee="indexEntries",ne="documentOverlays",re="globals",ie=[$t,Bt,zt,Ft,Wt,jt,Kt,Ht,Jt,Gt,Qt,Xt,Yt],se=[$t,Bt,zt,qt,Wt,jt,Kt,Ht,Jt,Gt,Qt,Xt,Yt,ne],oe=se,ae=[...oe,Zt,te,ee];
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
function ce(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ue(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function le(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class he{constructor(t,e){this.comparator=t,this.root=e||de.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,de.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,de.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class de{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:de.RED,this.left=null!=r?r:de.EMPTY,this.right=null!=i?i:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new de(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return de.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1,de.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class pe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ge(this.data.getIterator())}getIteratorFrom(t){return new ge(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new pe(this.comparator);return e.data=t,e}}class ge{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class me{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new me([])}unionWith(t){let e=new pe(rt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Y(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class ve extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class ye{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ve("Invalid base64 string: "+t):t}}(t);return new ye(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ye(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const _e=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function we(t){if(N(!!t,39018),"string"==typeof t){let e=0;const n=_e.exec(t);if(N(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ee(t){return"string"==typeof t?ye.fromBase64String(t):ye.fromUint8Array(t)}
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
 */const Te="server_timestamp",Ie="__type__",Se="__previous_value__",Ae="__local_write_time__";function Ce(t){const e=(t?.mapValue?.fields||{})[Ie]?.stringValue;return e===Te}function ke(t){const e=t.mapValue.fields[Se];return Ce(e)?ke(e):e}function Re(t){const e=we(t.mapValue.fields[Ae].timestampValue);return new mt(e.seconds,e.nanos)}
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
 */class Oe{constructor(t,e,n,r,i,s,o,a,c,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const xe="(default)";class Ne{constructor(t,e){this.projectId=t,this.database=e||xe}static empty(){return new Ne("","")}get isDefaultDatabase(){return this.database===xe}isEqual(t){return t instanceof Ne&&t.projectId===this.projectId&&t.database===this.database}}function De(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ne(t.options.projectId,e)}
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
 */const Pe="__type__",Le="__max__",Me={mapValue:{fields:{__type__:{stringValue:Le}}}},Ue="__vector__",Ve="value";function Fe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ce(t)?4:nn(t)?9007199254740991:tn(t)?10:11:O(28295,{value:t})}function je(t,e){if(t===e)return!0;const n=Fe(t);if(n!==Fe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Re(t).isEqual(Re(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=we(t.timestampValue),r=we(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ee(t.bytesValue).isEqual(Ee(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return be(t.geoPointValue.latitude)===be(e.geoPointValue.latitude)&&be(t.geoPointValue.longitude)===be(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return be(t.integerValue)===be(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=be(t.doubleValue),r=be(e.doubleValue);return n===r?Dt(n)===Dt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Y(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!je(n[i],r[i])))return!1;return!0}(t,e);default:return O(52216,{left:t})}}function $e(t,e){return void 0!==(t.values||[]).find((t=>je(t,e)))}function Be(t,e){if(t===e)return 0;const n=Fe(t),r=Fe(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=be(t.integerValue||t.doubleValue),r=be(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ze(t.timestampValue,e.timestampValue);case 4:return ze(Re(t),Re(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ee(t),r=Ee(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=H(n[i],r[i]);if(0!==t)return t}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=H(be(t.latitude),be(e.latitude));return 0!==n?n:H(be(t.longitude),be(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qe(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Ve]?.arrayValue,s=r[Ve]?.arrayValue,o=H(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:qe(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Me.mapValue&&e===Me.mapValue)return 0;if(t===Me.mapValue)return 1;if(e===Me.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=K(r[o],s[o]);if(0!==t)return t;const e=Be(n[r[o]],i[s[o]]);if(0!==e)return e}return H(r.length,s.length)}(t.mapValue,e.mapValue);default:throw O(23264,{he:n})}}function ze(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);const n=we(t),r=we(e),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function qe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Be(n[i],r[i]);if(t)return t}return H(n.length,r.length)}function Ge(t){return We(t)}function We(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=we(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ee(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return it.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=We(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${We(t.fields[i])}`;return n+"}"}(t.mapValue):O(61005,{value:t})}function He(t){switch(Fe(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ke(t);return e?16+He(e):16;case 5:return 2*t.stringValue.length;case 6:return Ee(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+He(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ue(t.fields,((t,n)=>{e+=t.length+He(n)})),e}(t.mapValue);default:throw O(13486,{value:t})}}function Ke(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qe(t){return!!t&&"integerValue"in t}function Je(t){return!!t&&"arrayValue"in t}function Xe(t){return!!t&&"nullValue"in t}function Ye(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ze(t){return!!t&&"mapValue"in t}function tn(t){const e=(t?.mapValue?.fields||{})[Pe]?.stringValue;return e===Ue}function en(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ue(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=en(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=en(t.arrayValue.values[n]);return e}return{...t}}function nn(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Le}
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
class rn{constructor(t){this.value=t}static empty(){return new rn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ze(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=rt.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=en(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ze(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ue(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new rn(en(this.value))}}
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
class sn{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new sn(t,0,vt.min(),vt.min(),vt.min(),rn.empty(),0)}static newFoundDocument(t,e,n,r){return new sn(t,1,e,vt.min(),n,r,0)}static newNoDocument(t,e){return new sn(t,2,e,vt.min(),vt.min(),rn.empty(),0)}static newUnknownDocument(t,e){return new sn(t,3,e,vt.min(),vt.min(),rn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(vt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class on{constructor(t,e){this.position=t,this.inclusive=e}}function an(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):Be(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function cn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}
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
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function ln(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class hn{}class fn extends hn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new wn(t,e,n):"array-contains"===e?new In(t,n):"in"===e?new Sn(t,n):"not-in"===e?new An(t,n):"array-contains-any"===e?new Cn(t,n):new fn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new bn(t,n):new En(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Be(e,this.value)):null!==e&&Fe(this.value)===Fe(e)&&this.matchesComparison(Be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends hn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new dn(t,e)}matches(t){return pn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pn(t){return"and"===t.op}function gn(t){return mn(t)&&pn(t)}function mn(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function vn(t){if(t instanceof fn)return t.field.canonicalString()+t.op.toString()+Ge(t.value);if(gn(t))return t.filters.map((t=>vn(t))).join(",");{const e=t.filters.map((t=>vn(t))).join(",");return`${t.op}(${e})`}}function yn(t,e){return t instanceof fn?function(t,e){return e instanceof fn&&t.op===e.op&&t.field.isEqual(e.field)&&je(t.value,e.value)}(t,e):t instanceof dn?function(t,e){return e instanceof dn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&yn(n,e.filters[r])),!0)}(t,e):void O(19439)}function _n(t){return t instanceof fn?function(t){return`${t.field.canonicalString()} ${t.op} ${Ge(t.value)}`}(t):t instanceof dn?function(t){return t.op.toString()+" {"+t.getFilters().map(_n).join(" ,")+"}"}(t):"Filter"}class wn extends fn{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.matchesComparison(e)}}class bn extends fn{constructor(t,e){super(t,"in",e),this.keys=Tn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class En extends fn{constructor(t,e){super(t,"not-in",e),this.keys=Tn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tn(t,e){return(e.arrayValue?.values||[]).map((t=>it.fromName(t.referenceValue)))}class In extends fn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Je(e)&&$e(e.arrayValue,this.value)}}class Sn extends fn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$e(this.value.arrayValue,e)}}class An extends fn{constructor(t,e){super(t,"not-in",e)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!$e(this.value.arrayValue,e)}}class Cn extends fn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Je(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$e(this.value.arrayValue,t)))}}
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
 */class kn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function Rn(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kn(t,e,n,r,i,s,o)}function On(t){const e=D(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>vn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Nt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ge(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ge(t))).join(",")),e.Te=t}return e.Te}function xn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ln(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cn(t.startAt,e.startAt)&&cn(t.endAt,e.endAt)}function Nn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Dn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Pn(t,e,n,r,i,s,o,a){return new Dn(t,e,n,r,i,s,o,a)}function Ln(t){return new Dn(t)}function Mn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Un(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Vn(t){return null!==t.collectionGroup}function Fn(t){const e=D(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new pe(rt.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new un(r,n))})),t.has(rt.keyField().canonicalString())||e.Ee.push(new un(rt.keyField(),n))}return e.Ee}function jn(t){const e=D(t);return e.Ie||(e.Ie=$n(e,Fn(t))),e.Ie}function $n(t,e){if("F"===t.limitType)return Rn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new un(t.field,e)}));const n=t.endAt?new on(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new on(t.startAt.position,t.startAt.inclusive):null;return Rn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bn(t,e){const n=t.filters.concat([e]);return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zn(t,e,n){return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qn(t,e){return xn(jn(t),jn(e))&&t.limitType===e.limitType}function Gn(t){return`${On(jn(t))}|lt:${t.limitType}`}function Wn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_n(t))).join(", ")}]`),Nt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ge(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ge(t))).join(",")),`Target(${e})`}(jn(t))}; limitType=${t.limitType})`}function Hn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Fn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Fn(t),e))&&!(t.endAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Fn(t),e))}(t,e)}function Kn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qn(t){return(e,n)=>{let r=!1;for(const i of Fn(t)){const t=Jn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Jn(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Be(r,i):O(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:t.dir})}}
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
 */class Xn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
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
 */const Yn=new he(it.comparator);function Zn(){return Yn}const tr=new he(it.comparator);function er(...t){let e=tr;for(const n of t)e=e.insert(n.key,n);return e}function nr(t){let e=tr;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function rr(){return sr()}function ir(){return sr()}function sr(){return new Xn((t=>t.toString()),((t,e)=>t.isEqual(e)))}new he(it.comparator);const or=new pe(it.comparator);function ar(...t){let e=or;for(const n of t)e=e.add(n);return e}const cr=new pe(H);function ur(){return cr}
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
 */function lr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dt(e)?"-0":e}}function hr(t){return{integerValue:""+t}}function fr(t,e){return Pt(e)?hr(e):lr(t,e)}
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
 */class dr{constructor(){this._=void 0}}function pr(t,e,n){return t instanceof vr?function(t,e){const n={fields:{[Ie]:{stringValue:Te},[Ae]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ce(e)&&(e=ke(e)),e&&(n.fields[Se]=e),{mapValue:n}}(n,e):t instanceof yr?_r(t,e):t instanceof wr?br(t,e):function(t,e){const n=mr(t,e),r=Tr(n)+Tr(t.Ae);return Qe(n)&&Qe(t.Ae)?hr(r):lr(t.serializer,r)}(t,e)}function gr(t,e,n){return t instanceof yr?_r(t,e):t instanceof wr?br(t,e):n}function mr(t,e){return t instanceof Er?function(t){return Qe(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class vr extends dr{}class yr extends dr{constructor(t){super(),this.elements=t}}function _r(t,e){const n=Ir(e);for(const r of t.elements)n.some((t=>je(t,r)))||n.push(r);return{arrayValue:{values:n}}}class wr extends dr{constructor(t){super(),this.elements=t}}function br(t,e){let n=Ir(e);for(const r of t.elements)n=n.filter((t=>!je(t,r)));return{arrayValue:{values:n}}}class Er extends dr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Tr(t){return be(t.integerValue||t.doubleValue)}function Ir(t){return Je(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Sr{constructor(t,e){this.field=t,this.transform=e}}function Ar(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof yr&&e instanceof yr||t instanceof wr&&e instanceof wr?Y(t.elements,e.elements,je):t instanceof Er&&e instanceof Er?je(t.Ae,e.Ae):t instanceof vr&&e instanceof vr}(t.transform,e.transform)}class Cr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Cr}static exists(t){return new Cr(void 0,t)}static updateTime(t){return new Cr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Rr{}function Or(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Fr(t.key,Cr.none()):new Pr(t.key,t.data,Cr.none());{const n=t.data,r=rn.empty();let i=new pe(rt.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Lr(t.key,r,new me(i.toArray()),Cr.none())}}function xr(t,e,n){t instanceof Pr?function(t,e,n){const r=t.value.clone(),i=Ur(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(t,e,n){if(!kr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ur(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Mr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Nr(t,e,n,r){return t instanceof Pr?function(t,e,n,r){if(!kr(t.precondition,e))return n;const i=t.value.clone(),s=Vr(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(t,e,n,r){if(!kr(t.precondition,e))return n;const i=Vr(t.fieldTransforms,r,e),s=e.data;return s.setAll(Mr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return kr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Dr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Y(t,e,((t,e)=>Ar(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pr extends Rr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lr extends Rr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ur(t,e,n){const r=new Map;N(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gr(o,a,n[i]))}return r}function Vr(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,pr(t,s,e))}return r}class Fr extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jr extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class $r{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&xr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Nr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Nr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ir();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Or(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(vt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ar())}isEqual(t){return this.batchId===t.batchId&&Y(this.mutations,t.mutations,((t,e)=>Dr(t,e)))&&Y(this.baseMutations,t.baseMutations,((t,e)=>Dr(t,e)))}}
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
class Br{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class zr{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var qr,Gr;function Wr(t){switch(t){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:t})}}function Hr(t){if(void 0===t)return C("GRPC error has no .code"),P.UNKNOWN;switch(t){case qr.OK:return P.OK;case qr.CANCELLED:return P.CANCELLED;case qr.UNKNOWN:return P.UNKNOWN;case qr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case qr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case qr.INTERNAL:return P.INTERNAL;case qr.UNAVAILABLE:return P.UNAVAILABLE;case qr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case qr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case qr.NOT_FOUND:return P.NOT_FOUND;case qr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case qr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case qr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case qr.ABORTED:return P.ABORTED;case qr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case qr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case qr.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:t})}}(Gr=qr||(qr={}))[Gr.OK=0]="OK",Gr[Gr.CANCELLED=1]="CANCELLED",Gr[Gr.UNKNOWN=2]="UNKNOWN",Gr[Gr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gr[Gr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gr[Gr.NOT_FOUND=5]="NOT_FOUND",Gr[Gr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gr[Gr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gr[Gr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gr[Gr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gr[Gr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gr[Gr.ABORTED=10]="ABORTED",Gr[Gr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gr[Gr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gr[Gr.INTERNAL=13]="INTERNAL",Gr[Gr.UNAVAILABLE=14]="UNAVAILABLE",Gr[Gr.DATA_LOSS=15]="DATA_LOSS";
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
let Kr=null;
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
function Qr(){return new TextEncoder}
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
 */const Jr=new r([4294967295,4294967295],0);function Xr(t){const e=Qr().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function Yr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class Zr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ti(`Invalid padding: ${e}`);if(n<0)throw new ti(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ti(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ti(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(Jr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=Xr(t),[n,r]=Yr(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Zr(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.ge)return;const e=Xr(t),[n,r]=Yr(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class ei{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ni.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ei(vt.min(),r,new he(H),Zn(),ar())}}class ni{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ni(n,e,ar(),ar(),ar())}}
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
 */class ri{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class ii{constructor(t,e){this.targetId=t,this.Ce=e}}class si{constructor(t,e,n=ye.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class oi{constructor(){this.ve=0,this.Fe=ui(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ar(),e=ar(),n=ar();return this.Fe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O(38017,{changeType:i})}})),new ni(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ui()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,N(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ai{constructor(t){this.Ge=t,this.ze=new Map,this.je=Zn(),this.Je=ci(),this.He=ci(),this.Ze=new he(H)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((t,n)=>{this.rt(n)&&e(n)}))}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(Nn(i))if(0===n){const t=new it(i.path);this.et(e,t,sn.newNoDocument(t,vt.min()))}else N(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),i=n?this.ct(n,t,r):1;if(0!==i){this.it(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Kr?.o(function(t,e,n,r,i){const s={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),s}
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
 */(r,t.Ce,this.Ge.ht(),n,i))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ee(n).toUint8Array()}catch(t){if(t instanceof ve)return k("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Zr(s,r,i)}catch(t){return k(t instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.et(e,n,null),r++)})),r}Tt(t){const e=new Map;this.ze.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Nn(i.target)){const e=new it(i.target.path);this.Et(e).has(r)||this.It(r,e)||this.et(r,e,sn.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}}));let n=ar();this.He.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.je.forEach(((e,n)=>n.setReadTime(t)));const r=new ei(t,e,this.Ze,this.je,n);return this.je=Zn(),this.Je=ci(),this.He=ci(),this.Ze=new he(H),r}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.It(t,e)?r.Ke(e,1):r.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new oi,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new pe(H),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new pe(H),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new oi),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ci(){return new he(it.comparator)}function ui(){return new he(it.comparator)}const li=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),hi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),fi=(()=>{const t={and:"AND",or:"OR"};return t})();class di{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function pi(t,e){return t.useProto3Json||Nt(e)?e:{value:e}}function gi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vi(t,e){return gi(t,e.toTimestamp())}function yi(t){return N(!!t,49232),vt.fromTimestamp(function(t){const e=we(t);return new mt(e.seconds,e.nanos)}(t))}function _i(t,e){return wi(t,e).canonicalString()}function wi(t,e){const n=function(t){return new et(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function bi(t){const e=et.fromString(t);return N(qi(e),10190,{key:e.toString()}),e}function Ei(t,e){return _i(t.databaseId,e.path)}function Ti(t,e){const n=bi(e);if(n.get(1)!==t.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Ci(n))}function Ii(t,e){return _i(t.databaseId,e)}function Si(t){const e=bi(t);return 4===e.length?et.emptyPath():Ci(e)}function Ai(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ci(t){return N(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function ki(t,e,n){return{name:Ei(t,e),fields:n.value.mapValue.fields}}function Ri(t,e){return"found"in e?function(t,e){N(!!e.found,43571),e.found.name,e.found.updateTime;const n=Ti(t,e.found.name),r=yi(e.found.updateTime),i=e.found.createTime?yi(e.found.createTime):vt.min(),s=new rn({mapValue:{fields:e.found.fields}});return sn.newFoundDocument(n,r,i,s)}(t,e):"missing"in e?function(t,e){N(!!e.missing,3894),N(!!e.readTime,22933);const n=Ti(t,e.missing),r=yi(e.readTime);return sn.newNoDocument(n,r)}(t,e):O(7234,{result:e})}function Oi(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(N(void 0===e||"string"==typeof e,58123),ye.fromBase64String(e||"")):(N(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ye.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?P.UNKNOWN:Hr(t.code);return new L(e,t.message||"")}(o);n=new si(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ti(t,r.document.name),s=yi(r.document.updateTime),o=r.document.createTime?yi(r.document.createTime):vt.min(),a=new rn({mapValue:{fields:r.document.fields}}),c=sn.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ri(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ti(t,r.document),s=r.readTime?yi(r.readTime):vt.min(),o=sn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ri([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ti(t,r.document),s=r.removedTargetIds||[];n=new ri([],s,i,null)}else{if(!("filter"in e))return O(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new zr(r,i),o=t.targetId;n=new ii(o,s)}}return n}function xi(t,e){let n;if(e instanceof Pr)n={update:ki(t,e.key,e.value)};else if(e instanceof Fr)n={delete:Ei(t,e.key)};else if(e instanceof Lr)n={update:ki(t,e.key,e.data),updateMask:zi(e.fieldMask)};else{if(!(e instanceof jr))return O(16599,{dt:e.type});n={verify:Ei(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof vr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Er)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw O(20930,{transform:e.transform})}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:vi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O(27497)}(t,e.precondition)),n}function Ni(t,e){return{documents:[Ii(t,e.path)]}}function Di(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ii(t,i);const s=function(t){if(0!==t.length)return Bi(dn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ji(t.field),direction:Ui(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:i}}function Pi(t){let e=Si(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Mi(t);return e instanceof dn&&gn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new un($i(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Nt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new on(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new on(n,e)}(n.endAt)),Pn(e,i,o,s,a,"F",c,u)}function Li(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Mi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$i(t.unaryFilter.field);return fn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$i(t.unaryFilter.field);return fn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$i(t.unaryFilter.field);return fn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$i(t.unaryFilter.field);return fn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(t):void 0!==t.fieldFilter?function(t){return fn.create($i(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return dn.create(t.compositeFilter.filters.map((t=>Mi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(t):O(30097,{filter:t})}function Ui(t){return li[t]}function Vi(t){return hi[t]}function Fi(t){return fi[t]}function ji(t){return{fieldPath:t.canonicalString()}}function $i(t){return rt.fromServerFormat(t.fieldPath)}function Bi(t){return t instanceof fn?function(t){if("=="===t.op){if(Ye(t.value))return{unaryFilter:{field:ji(t.field),op:"IS_NAN"}};if(Xe(t.value))return{unaryFilter:{field:ji(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ye(t.value))return{unaryFilter:{field:ji(t.field),op:"IS_NOT_NAN"}};if(Xe(t.value))return{unaryFilter:{field:ji(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(t.field),op:Vi(t.op),value:t.value}}}(t):t instanceof dn?function(t){const e=t.getFilters().map((t=>Bi(t)));return 1===e.length?e[0]:{compositeFilter:{op:Fi(t.op),filters:e}}}(t):O(54877,{filter:t})}function zi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Gi(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
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
class Wi{constructor(t,e,n,r,i=vt.min(),s=vt.min(),o=ye.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Wi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Hi{constructor(t){this.yt=t}}function Ki(t){const e=Pi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zn(e,e.limit,"L"):e}
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
 */class Qi{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(be(t.integerValue));else if("doubleValue"in t){const n=be(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Dt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=we(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ee(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?nn(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):tn(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):O(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Ve,i=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(be(i)),this.Ot(r,e),this.Ct(n[r],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),it.fromName(t).path.forEach((t=>{this.Ft(e,60),this.$t(t,e)}))}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Qi.Wt=new Qi;
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
class Ji{constructor(){this.bn=new Xi}addToCollectionParentIndex(t,e){return this.bn.add(e),Ct.resolve()}getCollectionParents(t,e){return Ct.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return Ct.resolve()}deleteFieldIndex(t,e){return Ct.resolve()}deleteAllFieldIndexes(t){return Ct.resolve()}createTargetIndexes(t,e){return Ct.resolve()}getDocumentsMatchingTarget(t,e){return Ct.resolve(null)}getIndexType(t,e){return Ct.resolve(0)}getFieldIndexes(t,e){return Ct.resolve([])}getNextCollectionGroupToUpdate(t){return Ct.resolve(null)}getMinOffset(t,e){return Ct.resolve(Et.min())}getMinOffsetFromCollectionGroup(t,e){return Ct.resolve(Et.min())}updateCollectionGroup(t,e,n){return Ct.resolve()}updateIndexEntries(t,e){return Ct.resolve()}}class Xi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pe(et.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pe(et.comparator)).toArray()}}
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
 */new Uint8Array(0);
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
const Yi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zi=41943040;class ts{static withCacheSize(t){return new ts(t,ts.DEFAULT_COLLECTION_PERCENTILE,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */ts.DEFAULT_COLLECTION_PERCENTILE=10,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ts.DEFAULT=new ts(Zi,ts.DEFAULT_COLLECTION_PERCENTILE,ts.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ts.DISABLED=new ts(-1,0,0);
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
class es{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new es(0)}static ar(){return new es(-1)}}
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
const ns="LruGarbageCollector",rs=1048576;function is([t,e],[n,r]){const i=H(t,n);return 0===i?H(e,r):i}class ss{constructor(t){this.Pr=t,this.buffer=new pe(is),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();is(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class os{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){A(ns,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rt(t)?A(ns,"Ignoring IndexedDB error during garbage collection: ",t):await At(t)}await this.Ar(3e5)}))}}class as{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Ct.resolve(Ot.ce);const n=new ss(e);return this.Vr.forEachTarget(t,(t=>n.Ir(t.sequenceNumber))).next((()=>this.Vr.mr(t,(t=>n.Ir(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),Ct.resolve(Yi)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yi):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),S()<=y.$b.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Ct.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}function cs(t,e){return new as(t,e)}
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
class us{constructor(){this.changes=new Xn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class ls{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class hs{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Nr(n.mutation,t,me.empty(),mt.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ar()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ar()){const r=rr();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=er();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=rr();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ar())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Zn();const s=sr(),o=function(){return sr()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Lr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Nr(o.mutation,e,o.mutation.getFieldMask(),mt.now())):s.set(e.key,me.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>o.set(t,new ls(e,s.get(t)??null)))),o)))}recalculateAndSaveOverlays(t,e){const n=sr();let r=new he(((t,e)=>t-e)),i=ar();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||me.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ar()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ir();c.forEach((t=>{if(!i.has(t)){const r=Or(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ct.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return Un(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Ct.resolve(rr());let o=yt,a=i;return s.next((e=>Ct.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ct.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ar()))).next((t=>({batchId:o,changes:nr(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new it(e)).next((t=>{let e=er();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=er();return this.indexManager.getCollectionParents(t,i).next((o=>Ct.forEach(o,(o=>{const a=function(t,e){return new Dn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,sn.newInvalidDocument(r)))}));let n=er();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Nr(s.mutation,r,me.empty(),mt.now()),Hn(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class fs{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return Ct.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:yi(t.createTime)}}(e)),Ct.resolve()}getNamedQuery(t,e){return Ct.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Ki(t.bundledQuery),readTime:yi(t.readTime)}}(e)),Ct.resolve()}}
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
 */class ds{constructor(){this.overlays=new he(it.comparator),this.Lr=new Map}getOverlay(t,e){return Ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=rr();return Ct.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.St(t,e,r)})),Ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Lr.delete(n)),Ct.resolve()}getOverlaysForCollection(t,e,n){const r=rr(),i=e.length+1,s=new it(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new he(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=rr(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=rr(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ct.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Br(e,n));let i=this.Lr.get(e);void 0===i&&(i=ar(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(t){return Ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ct.resolve()}}
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
 */class gs{constructor(){this.kr=new pe(ms.qr),this.Kr=new pe(ms.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new ms(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Wr(new ms(t,e))}Qr(t,e){t.forEach((t=>this.removeReference(t,e)))}Gr(t){const e=new it(new et([])),n=new ms(e,t),r=new ms(e,t+1),i=[];return this.Kr.forEachInRange([n,r],(t=>{this.Wr(t),i.push(t.key)})),i}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new it(new et([])),n=new ms(e,t),r=new ms(e,t+1);let i=ar();return this.Kr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ms(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ms{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return it.comparator(t.key,e.key)||H(t.Jr,e.Jr)}static Ur(t,e){return H(t.Jr,e.Jr)||it.comparator(t.key,e.key)}}
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
 */class vs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new pe(ms.qr)}checkEmpty(t){return Ct.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $r(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Hr=this.Hr.add(new ms(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ct.resolve(s)}lookupMutationBatch(t,e){return Ct.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),i=r<0?0:r;return Ct.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ct.resolve(0===this.mutationQueue.length?xt:this.Yn-1)}getAllMutationBatches(t){return Ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ms(e,0),r=new ms(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],(t=>{const e=this.Zr(t.Jr);i.push(e)})),Ct.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pe(H);return e.forEach((t=>{const e=new ms(t,0),r=new ms(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,r],(t=>{n=n.add(t.Jr)}))})),Ct.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new ms(new it(i),0);let o=new pe(H);return this.Hr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Jr)),!0)}),s),Ct.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach((t=>{const n=this.Zr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){N(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Ct.forEach(e.mutations,(r=>{const i=new ms(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Hr=n}))}nr(t){}containsKey(t,e){const n=new ms(e,0),r=this.Hr.firstAfterOrEqual(n);return Ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ct.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class ys{constructor(t){this.ti=t,this.docs=function(){return new he(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ct.resolve(n?n.document.mutableCopy():sn.newInvalidDocument(e))}getEntries(t,e){let n=Zn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sn.newInvalidDocument(t))})),Ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Zn();const s=e.path,o=new it(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Tt(bt(o),n)<=0||(r.has(o.key)||Hn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ct.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O(9500)}ni(t,e){return Ct.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new _s(this)}getSize(t){return Ct.resolve(this.size)}}class _s extends us{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)})),Ct.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
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
 */class ws{constructor(t){this.persistence=t,this.ri=new Xn((t=>On(t)),xn),this.lastRemoteSnapshotVersion=vt.min(),this.highestTargetId=0,this.ii=0,this.si=new gs,this.targetCount=0,this.oi=es._r()}forEachTarget(t,e){return this.ri.forEach(((t,n)=>e(n))),Ct.resolve()}getLastRemoteSnapshotVersion(t){return Ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ct.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),Ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),Ct.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new es(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,Ct.resolve()}updateTargetData(t,e){return this.lr(e),Ct.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,Ct.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ri.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ct.waitFor(i).next((()=>r))}getTargetCount(t){return Ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return Ct.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),Ct.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ct.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),Ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return Ct.resolve(n)}containsKey(t,e){return Ct.resolve(this.si.containsKey(e))}}
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
 */class bs{constructor(t,e){this._i={},this.overlays={},this.ai=new Ot(0),this.ui=!1,this.ui=!0,this.ci=new ps,this.referenceDelegate=t(this),this.li=new ws(this),this.indexManager=new Ji,this.remoteDocumentCache=function(t){return new ys(t)}((t=>this.referenceDelegate.hi(t))),this.serializer=new Hi(e),this.Pi=new fs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ds,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new vs(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new Es(this.ai.next());return this.referenceDelegate.Ti(),n(r).next((t=>this.referenceDelegate.Ei(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ii(t,e){return Ct.or(Object.values(this._i).map((n=>()=>n.containsKey(t,e))))}}class Es extends St{constructor(t){super(),this.currentSequenceNumber=t}}class Ts{constructor(t){this.persistence=t,this.Ri=new gs,this.Ai=null}static Vi(t){return new Ts(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),Ct.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),Ct.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),Ct.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((t=>this.di.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.di.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ct.forEach(this.di,(n=>{const r=it.fromPath(n);return this.mi(t,r).next((t=>{t||e.removeEntry(r,vt.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return Ct.or([()=>Ct.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Is{constructor(t,e){this.persistence=t,this.fi=new Xn((t=>Mt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=cs(this,e)}static Vi(t,e){return new Is(t,e)}Ti(){}Ei(t){return Ct.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}pr(t){let e=0;return this.mr(t,(t=>{e++})).next((()=>e))}mr(t,e){return Ct.forEach(this.fi,((n,r)=>this.wr(t,n,r).next((t=>t?Ct.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(t,(r=>this.wr(t,r,e).next((t=>{t||(n++,i.removeEntry(r,vt.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),Ct.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),Ct.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),Ct.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),Ct.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=He(t.data.value)),e}wr(t,e,n){return Ct.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return Ct.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
class Ss{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=r}static Is(t,e){let n=ar(),r=ar();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ss(t,e.fromCache,n,r)}}
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
 */class As{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class Cs{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:kt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.gs(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ps(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new As;return this.ys(t,e,n).next((r=>{if(i.result=r,this.As)return this.ws(t,e,n,r.size)}))})).next((()=>i.result))}ws(t,e,n,r){return n.documentReadCount<this.Vs?(S()<=y.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Wn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ct.resolve()):(S()<=y.$b.DEBUG&&A("QueryEngine","Query:",Wn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(S()<=y.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Wn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jn(e))):Ct.resolve())}gs(t,e){if(Mn(e))return Ct.resolve(null);let n=jn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=zn(e,null,"F"),n=jn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ar(...r);return this.fs.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Ss(e,r);return this.bs(e,s,i,n.readTime)?this.gs(t,zn(e,null,"F")):this.Ds(t,s,e,n)}))))})))))}ps(t,e,n,r){return Mn(e)||r.isEqual(vt.min())?Ct.resolve(null):this.fs.getDocuments(t,n).next((i=>{const s=this.Ss(e,i);return this.bs(e,s,n,r)?Ct.resolve(null):(S()<=y.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wn(e)),this.Ds(t,s,e,wt(r,yt)).next((t=>t)))}))}Ss(t,e){let n=new pe(Qn(t));return e.forEach(((e,r)=>{Hn(t,r)&&(n=n.add(r))})),n}bs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(t,e,n){return S()<=y.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Wn(e)),this.fs.getDocumentsMatchingQuery(t,e,Et.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */const ks="LocalStore",Rs=3e8;class Os{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new he(H),this.Fs=new Xn((t=>On(t)),xn),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hs(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function xs(t,e,n,r){return new Os(t,e,n,r)}async function Ns(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=ar();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ns:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ds(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Ps(t,e){const n=D(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.li.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ye.EMPTY_BYTE_STRING,vt.min()).withLastLimboFreeSnapshotVersion(vt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Rs)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.li.updateTargetData(t,u))}));let a=Zn(),c=ar();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Ls(t,s,e.documentUpdates).next((t=>{a=t.Bs,c=t.Ls}))),!r.isEqual(vt.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next((e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ct.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.vs=i,t)))}function Ls(t,e,n){let r=ar(),i=ar();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Zn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(vt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):A(ks,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Bs:r,Ls:i}}))}function Ms(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.li.getTargetData(t,e).next((i=>i?(r=i,Ct.resolve(r)):n.li.allocateTargetId(t).next((i=>(r=new Wi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t}))}async function Us(t,e,n){const r=D(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Rt(t))throw t;A(ks,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Vs(t,e,n){const r=D(t);let i=vt.min(),s=ar();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=D(t),i=r.Fs.get(n);return void 0!==i?Ct.resolve(r.vs.get(i)):r.li.getTargetData(e,n)}(r,t,jn(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Cs.getDocumentsMatchingQuery(t,e,n?i:vt.min(),n?s:ar()))).next((t=>(Fs(r,Kn(e),t),{documents:t,ks:s})))))}function Fs(t,e,n){let r=t.Ms.get(e)||vt.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ms.set(e,r)}class js{constructor(){this.activeTargetIds=ur()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $s{constructor(){this.vo=new js,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new js,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Bs{Mo(t){}shutdown(){}}
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
 */const zs="ConnectivityMonitor";class qs{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){A(zs,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){A(zs,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Gs=null;function Ws(){return null===Gs?Gs=function(){return 268435456+Math.round(2147483648*Math.random())}():Gs++,"0x"+Gs.toString(16)
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
 */}const Hs="RestConnection",Ks={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Qs{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===xe?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,i){const s=Ws(),o=this.Qo(t,e.toUriEncodedString());A(Hs,`Sending RPC '${t}' ${s}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(t,o,c,n,l).then((e=>(A(Hs,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw k(Hs,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}jo(t,e,n,r,i,s){return this.Wo(t,e,n,r,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Qo(t,e){const n=Ks[t];let r=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
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
 */class Js{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
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
 */const Xs="WebChannelConnection",Ys=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};class Zs extends Qs{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Zs.c_){const t=m();Ys(t,g.STAT_EVENT,(t=>{t.stat===p.PROXY?A(Xs,"STAT_EVENT: detected buffering proxy"):t.stat===p.NOPROXY&&A(Xs,"STAT_EVENT: detected no buffering proxy")})),Zs.c_=!0}}zo(t,e,n,r,i){const s=Ws();return new Promise(((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();A(Xs,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case d.TIMEOUT:A(Xs,`RPC '${t}' ${s} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(A(Xs,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(e)>=0?e:P.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{A(Xs,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);A(Xs,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}T_(t,e,n){const r=Ws(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=i.join("");A(Xs,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=s.createWebChannel(c,o);this.E_(u);let l=!1,f=!1;const d=new Js({Jo:e=>{f?A(Xs,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(A(Xs,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),A(Xs,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Ho:()=>u.close()});return Ys(u,h.EventType.OPEN,(()=>{f||(A(Xs,`RPC '${t}' stream ${r} transport opened.`),d.i_())})),Ys(u,h.EventType.CLOSE,(()=>{f||(f=!0,A(Xs,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.I_(u))})),Ys(u,h.EventType.ERROR,(e=>{f||(f=!0,k(Xs,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new L(P.UNAVAILABLE,"The operation could not be completed")))})),Ys(u,h.EventType.MESSAGE,(e=>{if(!f){const n=e.data[0];N(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){A(Xs,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=qr[t];if(void 0!==e)return Hr(e)}(e),i=s.message;"NOT_FOUND"===e&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&k(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.o_(new L(n,i)),u.close()}else A(Xs,`RPC '${t}' stream ${r} received:`,n),d.__(n)}})),Zs.u_(),setTimeout((()=>{d.s_()}),0),d}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return v()}}
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
 */function to(t){return new Zs(t)}
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
 */function eo(){return"undefined"!=typeof document?document:null}
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
 */function no(t){return new di(t,!0)}
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
 */Zs.c_=!1;class ro{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
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
 */const io="PersistentStream";class so{constructor(t,e,n,r,i,s,o,a){this.Ci=t,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ro(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(C(e.toString()),C("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.D_===e&&this.G_(t,n)}),(e=>{t((()=>{const t=new L(P.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)}))}))}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((t=>{n((()=>this.z_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.F_?this.J_(t):this.onNext(t)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return A(io,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(A(io,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oo extends so{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Oi(this.serializer,t),n=function(t){if(!("targetChange"in t))return vt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vt.min():e.readTime?yi(e.readTime):vt.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=Ai(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Nn(r)?{documents:Ni(t,r)}:{query:Di(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=mi(t,e.resumeToken);const r=pi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(vt.min())>0){n.readTime=gi(t,e.snapshotVersion.toTimestamp());const r=pi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Li(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=Ai(this.serializer),e.removeTarget=t,this.q_(e)}}
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
class ao{}class co extends ao{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Wo(t,wi(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}jo(t,e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.jo(t,wi(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function uo(t,e,n,r){return new co(t,e,n,r)}class lo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(C(e),this.aa=!1):A("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const ho="RemoteStore";class fo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((t=>{n.enqueueAndForget((async()=>{Eo(this)&&(A(ho,"Restarting streams for network reachability change."),await async function(t){const e=D(t);e.Ia.add(4),await go(e),e.Va.set("Unknown"),e.Ia.delete(4),await po(e)}(this))}))})),this.Va=new lo(n,r)}}async function po(t){if(Eo(t))for(const e of t.Ra)await e(!0)}async function go(t){for(const e of t.Ra)await e(!1)}function mo(t,e){const n=D(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),bo(n)?wo(n):xo(n).O_()&&yo(n,e))}function vo(t,e){const n=D(t),r=xo(n);n.Ea.delete(e),r.O_()&&_o(n,e),0===n.Ea.size&&(r.O_()?r.L_():Eo(n)&&n.Va.set("Unknown"))}function yo(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(vt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).Z_(e)}function _o(t,e){t.da.$e(e),xo(t).X_(e)}function wo(t){t.da=new ai({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.Va.ua()}function bo(t){return Eo(t)&&!xo(t).x_()&&t.Ea.size>0}function Eo(t){return 0===D(t).Ia.size}function To(t){t.da=void 0}async function Io(t){t.Va.set("Online")}async function So(t){t.Ea.forEach(((e,n)=>{yo(t,e)}))}async function Ao(t,e){To(t),bo(t)?(t.Va.ha(e),wo(t)):t.Va.set("Unknown")}async function Co(t,e,n){if(t.Va.set("Online"),e instanceof si&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ea.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ea.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){A(ho,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ko(t,n)}else if(e instanceof ri?t.da.Xe(e):e instanceof ii?t.da.st(e):t.da.tt(e),!n.isEqual(vt.min()))try{const e=await Ds(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ea.get(r);i&&t.Ea.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Ea.get(e);if(!r)return;t.Ea.set(e,r.withResumeToken(ye.EMPTY_BYTE_STRING,r.snapshotVersion)),_o(t,e);const i=new Wi(r.target,e,n,r.sequenceNumber);yo(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){A(ho,"Failed to raise snapshot:",e),await ko(t,e)}}async function ko(t,e,n){if(!Rt(e))throw e;t.Ia.add(1),await go(t),t.Va.set("Offline"),n||(n=()=>Ds(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{A(ho,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await po(t)}))}async function Ro(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),A(ho,"RemoteStore received new credentials");const r=Eo(n);n.Ia.add(3),await go(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await po(n)}async function Oo(t,e){const n=D(t);e?(n.Ia.delete(2),await po(n)):e||(n.Ia.add(2),await go(n),n.Va.set("Unknown"))}function xo(t){return t.ma||(t.ma=function(t,e,n){const r=D(t);return r.sa(),new oo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Zo:Io.bind(null,t),Yo:So.bind(null,t),t_:Ao.bind(null,t),H_:Co.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),bo(t)?wo(t):t.Va.set("Unknown")):(await t.ma.stop(),To(t))}))),t.ma}
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
class No{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new No(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Do(t,e){if(C("AsyncQueue",`${e}: ${t}`),Rt(t))return new L(P.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Po{static emptySet(t){return new Po(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=er(),this.sortedSet=new he(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Po))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Po;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Lo{constructor(){this.ga=new he(it.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Mo{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Mo(t,e,Po.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Uo{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Vo{constructor(){this.queries=Fo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=Fo(),r.forEach(((t,n)=>{for(const r of n.Sa)r.onError(e)}))}(this,new L(P.ABORTED,"Firestore shutting down"))}}function Fo(){return new Xn((t=>Gn(t)),qn)}async function jo(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Uo,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Do(t,`Initialization of query '${Wn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&qo(n)}async function $o(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.Sa.indexOf(e);t>=0&&(s.Sa.splice(t,1),0===s.Sa.length?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Bo(t,e){const n=D(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(i)&&(r=!0);e.wa=i}}r&&qo(n)}function zo(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function qo(t){t.Ca.forEach((t=>{t.next()}))}var Go,Wo;(Wo=Go||(Go={})).Ma="default",Wo.Cache="cache";class Ho{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Mo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Mo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Go.Cache}}
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
class Ko{constructor(t){this.key=t}}class Qo{constructor(t){this.key=t}}class Jo{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ar(),this.mutatedKeys=ar(),this.eu=Qn(t),this.tu=new Po(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Lo,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Hn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tu:s,iu:n,bs:o,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const s=t.iu.ya();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:t})}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.eu(t.doc,e.doc))),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==s.length||c?{snapshot:new Mo(this.query,t.tu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lo,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ar(),this.tu.forEach((t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))}));const e=[];return t.forEach((t=>{this.Ya.has(t)||e.push(new Qo(t))})),this.Ya.forEach((n=>{t.has(n)||e.push(new Ko(n))})),e}cu(t){this.Za=t.ks,this.Ya=ar();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const Xo="SyncEngine";class Yo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zo{constructor(t){this.key=t,this.hu=!1}}class ta{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Xn((t=>Gn(t)),qn),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(it.comparator),this.Au=new Map,this.Vu=new gs,this.du={},this.mu=new Map,this.fu=es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ea(t,e,n=!0){const r=ya(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await ra(r,e,n,!0),i}async function na(t,e){const n=ya(t);await ra(n,e,!0,!1)}async function ra(t,e,n,r){const i=await Ms(t.localStore,jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ia(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&mo(t.remoteStore,i),a}async function ia(t,e,n,r,i){t.pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.ru(n);i.bs&&(i=await Vs(t.localStore,e.query,!1).then((({documents:t})=>e.view.ru(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return fa(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const s=await Vs(t.localStore,e,!0),o=new Jo(e,s.ks),a=o.ru(s.documents),c=ni.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);fa(t,n,u.au);const l=new Yo(e,n,o);return t.Tu.set(e,l),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function sa(t,e,n){const r=D(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter((t=>!qn(t,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Us(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&vo(r.remoteStore,i.targetId),la(r,i.targetId)})).catch(At)):(la(r,i.targetId),await Us(r.localStore,i.targetId,!0))}async function oa(t,e){const n=D(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vo(n.remoteStore,r.targetId))}async function aa(t,e){const n=D(t);try{const t=await Ps(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Au.get(e);r&&(N(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?N(r.hu,14607):t.removedDocuments.size>0&&(N(r.hu,42227),r.hu=!1))})),await ga(n,t,e)}catch(t){await At(t)}}function ca(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach(((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.Sa)i.va(e)&&(r=!0)})),r&&qo(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ua(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let t=new he(it.comparator);t=t.insert(s,sn.newNoDocument(s,vt.min()));const n=ar().add(s),i=new ei(vt.min(),new Map,new he(H),t,n);await aa(r,i),r.Ru=r.Ru.remove(s),r.Au.delete(e),pa(r)}else await Us(r.localStore,e,!1).then((()=>la(r,e,n))).catch(At)}function la(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((e=>{t.Vu.containsKey(e)||ha(t,e)}))}function ha(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(vo(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),pa(t))}function fa(t,e,n){for(const r of n)r instanceof Ko?(t.Vu.addReference(r.key,e),da(t,r)):r instanceof Qo?(A(Xo,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ha(t,r.key)):O(19791,{wu:r})}function da(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(A(Xo,"New document in limbo: "+n),t.Iu.add(r),pa(t))}function pa(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new it(et.fromString(e)),r=t.fu.next();t.Au.set(r,new Zo(n)),t.Ru=t.Ru.insert(n,r),mo(t.remoteStore,new Wi(jn(Ln(n.path)),r,"TargetPurposeLimboResolution",Ot.ce))}}async function ga(t,e,n){const r=D(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((t,a)=>{o.push(r.pu(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=Ss.Is(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Pu.H_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ct.forEach(e,(e=>Ct.forEach(e.Ts,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ct.forEach(e.Es,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Rt(t))throw t;A(ks,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,s))}async function ma(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){A(Xo,"User change. New user:",e.toKey());const t=await Ns(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach((t=>{t.forEach((t=>{t.reject(new L(P.CANCELLED,e))}))})),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ga(n,t.Ns)}}function va(t,e){const n=D(t),r=n.Au.get(e);if(r&&r.hu)return ar().add(r.key);{let t=ar();const r=n.Eu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function ya(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=va.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ua.bind(null,e),e.Pu.H_=Bo.bind(null,e.eventManager),e.Pu.yu=zo.bind(null,e.eventManager),e}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=no(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return xs(this.persistence,new Cs,t.initialUser,this.serializer)}Cu(t){return new bs(Ts.Vi,this.serializer)}Du(t){return new $s}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class wa extends _a{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){N(this.persistence.referenceDelegate instanceof Is,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new os(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?ts.withCacheSize(this.cacheSizeBytes):ts.DEFAULT;return new bs((t=>Is.Vi(t,e)),this.serializer)}}class ba{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ca(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ma.bind(null,this.syncEngine),await Oo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Vo}()}createDatastore(t){const e=no(t.databaseInfo.databaseId),n=to(t.databaseInfo);return uo(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new fo(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>ca(this.syncEngine,t,0)),function(){return qs.v()?new qs:new Bs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ta(t,e,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=D(t);A(ho,"RemoteStore shutting down."),e.Ia.add(5),await go(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ba.provider={build:()=>new ba};
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
class Ea{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):C("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Ta{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new L(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(t,e){const n=D(t),r={documents:e.map((t=>Ei(n.serializer,t)))},i=await n.jo("BatchGetDocuments",n.serializer.databaseId,et.emptyPath(),r,e.length),s=new Map;i.forEach((t=>{const e=Ri(n.serializer,t);s.set(e.key.toString(),e)}));const o=[];return e.forEach((t=>{const e=s.get(t.toString());N(!!e,55234,{key:t}),o.push(e)})),o}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastTransactionError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=it.fromPath(e);this.mutations.push(new jr(n,this.precondition(n)))})),await async function(t,e){const n=D(t),r={writes:e.map((t=>xi(n.serializer,t)))};await n.Wo("Commit",n.serializer.databaseId,et.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O(50498,{Gu:t.constructor.name});e=vt.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new L(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(vt.min())?Cr.exists(!1):Cr.updateTime(e):Cr.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(vt.min()))throw new L(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Cr.updateTime(e)}return Cr.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
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
 */class Ia{constructor(t,e,n,r,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=i,this.zu=n.maxAttempts,this.M_=new ro(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const t=new Ta(this.datastore),e=this.Hu(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Zu(t)}))))})).catch((t=>{this.Zu(t)}))}))}Hu(t){try{const e=this.updateFunction(t);return!Nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(t){this.zu>0&&this.Xu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(t)}Xu(t){if("FirebaseError"===t?.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Wr(e)}return!1}}
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
 */const Sa="FirestoreClient";class Aa{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=b.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{A(Sa,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(A(Sa,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Do(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ca(t,e){t.asyncQueue.verifyOperationInProgress(),A(Sa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ns(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ka(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ra(t);A(Sa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Ro(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ro(e.remoteStore,n))),t._onlineComponents=e}async function Ra(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A(Sa,"Using user provided OfflineComponentProvider");try{await Ca(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Ca(t,new _a)}}else A(Sa,"Using default OfflineComponentProvider"),await Ca(t,new wa(void 0));return t._offlineComponents}async function Oa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A(Sa,"Using user provided OnlineComponentProvider"),await ka(t,t._uninitializedComponentsProvider._online)):(A(Sa,"Using default OnlineComponentProvider"),await ka(t,new ba))),t._onlineComponents}function xa(t){return Oa(t).then((t=>t.datastore))}async function Na(t){const e=await Oa(t),n=e.eventManager;return n.onListen=ea.bind(null,e.syncEngine),n.onUnlisten=sa.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=na.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oa.bind(null,e.syncEngine),n}function Da(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Ea({next:n=>{s.Nu(),e.enqueueAndForget((()=>$o(t,o))),n.fromCache&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ho(n,s,{includeMetadataChanges:!0,qa:!0});return jo(t,o)}(await Na(t),t.asyncQueue,e,n,r))),r.promise}function Pa(t,e,n){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>{const i=await xa(t);new Ia(t.asyncQueue,i,n,e,r).ju()})),r.promise}
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
function La(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const Ma="ComponentProvider",Ua=new Map;function Va(t,e,n,r,i){return new Oe(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,La(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
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
 */const Fa="firestore.googleapis.com",ja=!0;class $a{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fa,this.ssl=ja}else this.host=t.host,this.ssl=t.ssl??ja;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Zi;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<rs)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ot("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=La(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ba{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new V;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ua.get(t);e&&(A(Ma,"Removing Datastore"),Ua.delete(t),e.terminate())}(this),Promise.resolve()}}function za(t,e,n,r={}){t=ht(t,Ba);const i=(0,a.zJ)(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&(0,a.gE)(`https://${c}`),s.host!==Fa&&s.host!==c&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=b.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new b(i)}t._authCredentials=new F(new U(e,n))}}
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
 */class qa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qa(this.firestore,t,this._query)}}class Ga{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ga(this.firestore,t,this._key)}toJSON(){return{type:Ga._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dt(e,Ga._jsonSchema))return new Ga(t,n||null,new it(et.fromString(e.referencePath)))}}Ga._jsonSchemaVersion="firestore/documentReference/1.0",Ga._jsonSchema={type:ft("string",Ga._jsonSchemaVersion),referencePath:ft("string")};class Wa extends qa{constructor(t,e,n){super(t,e,Ln(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ga(this.firestore,null,new it(t))}withConverter(t){return new Wa(this.firestore,t,this._path)}}function Ha(t,e,...n){if(t=(0,a.Ku)(t),st("collection","path",e),t instanceof Ba){const r=et.fromString(e,...n);return ct(r),new Wa(t,null,r)}{if(!(t instanceof Ga||t instanceof Wa))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return ct(r),new Wa(t.firestore,null,r)}}function Ka(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=W.newId()),st("doc","path",e),t instanceof Ba){const r=et.fromString(e,...n);return at(r),new Ga(t,null,new it(r))}{if(!(t instanceof Ga||t instanceof Wa))throw new L(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return at(r),new Ga(t.firestore,t instanceof Wa?t.converter:null,new it(r))}}
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
const Qa="AsyncQueue";class Ja{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ro(this,"async_queue_retry"),this._c=()=>{const t=eo();t&&A(Qa,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=eo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=eo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new M;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Rt(t))throw t;A(Qa,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((t=>{throw this.nc=t,this.rc=!1,C("INTERNAL UNHANDLED ERROR: ",Xa(t)),t})).then((t=>(this.rc=!1,t))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=No.createAndSchedule(this,t,e,n,(t=>this.hc(t)));return this.tc.push(r),r}uc(){this.nc&&O(47125,{Pc:Xa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then((()=>{this.tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Xa(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
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
 */}class Ya extends Ba{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ja,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ja(t),this._firestoreClient=void 0,await t}}}function Za(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||xe,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.yU)("firestore");t&&za(i,...t)}return i}function tc(t){if(t._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ec(t),t._firestoreClient}function ec(t){const e=t._freezeSettings(),n=Va(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Aa(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
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
class nc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nc(ye.fromBase64String(t))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new nc(ye.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:nc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dt(t,nc._jsonSchema))return nc.fromBase64String(t.bytes)}}nc._jsonSchemaVersion="firestore/bytes/1.0",nc._jsonSchema={type:ft("string",nc._jsonSchemaVersion),bytes:ft("string")};
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
class rc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class ic{constructor(t){this._methodName=t}}
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
 */class sc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sc._jsonSchemaVersion}}static fromJSON(t){if(dt(t,sc._jsonSchema))return new sc(t.latitude,t.longitude)}}sc._jsonSchemaVersion="firestore/geoPoint/1.0",sc._jsonSchema={type:ft("string",sc._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class oc{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:oc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dt(t,oc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((t=>"number"==typeof t)))return new oc(t.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}oc._jsonSchemaVersion="firestore/vectorValue/1.0",oc._jsonSchema={type:ft("string",oc._jsonSchemaVersion),vectorValues:ft("object")};
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
const ac=/^__.*__$/;class cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Lr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pr(t,this.data,e,this.fieldTransforms)}}class uc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Lr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:t})}}class hc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new hc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return Cc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(0===t.length)throw this.yc("Document fields must not be empty");if(lc(this.dataSource)&&ac.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class fc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||no(t)}I(t,e,n,r=!1){return new hc({dataSource:t,methodName:e,targetDoc:n,path:rt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dc(t){const e=t._freezeSettings(),n=no(t._databaseId);return new fc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pc(t,e,n,r,i,s={}){const o=t.I(s.merge||s.mergeFields?2:0,e,n,i);Tc("Data must be an object, but it was:",o,r);const a=bc(r,o);let c,u;if(s.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Ic(e,r,n);if(!o.contains(i))throw new L(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);kc(t,i)||t.push(i)}c=new me(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new cc(new rn(a),c,u)}class gc extends ic{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gc}}class mc extends ic{_toFieldTransform(t){return new Sr(t.path,new vr)}isEqual(t){return t instanceof mc}}function vc(t,e,n,r){const i=t.I(1,e,n);Tc("Data must be an object, but it was:",i,r);const s=[],o=rn.empty();ue(r,((t,r)=>{const c=Ac(e,t,n);r=(0,a.Ku)(r);const u=i.fc(c);if(r instanceof gc)s.push(c);else{const t=wc(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new me(s);return new uc(o,c,i.fieldTransforms)}function yc(t,e,n,r,i,s){const o=t.I(1,e,n),c=[Ic(e,r,n)],u=[i];if(s.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Ic(e,s[a])),u.push(s[a+1]);const l=[],h=rn.empty();for(let d=c.length-1;d>=0;--d)if(!kc(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=o.fc(t);if(e instanceof gc)l.push(t);else{const r=wc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new me(l);return new uc(h,f,o.fieldTransforms)}function _c(t,e,n,r=!1){return wc(n,t.I(r?4:3,e))}function wc(t,e){if(Ec(t=(0,a.Ku)(t)))return Tc("Unsupported field value:",e,t),bc(t,e);if(t instanceof ic)return function(t,e){if(!lc(e.dataSource))throw e.yc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.yc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.yc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=wc(i,e.gc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:gi(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gi(e.serializer,n)}}if(t instanceof sc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof nc)return{bytesValue:mi(e.serializer,t._byteString)};if(t instanceof Ga){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_i(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof oc)return function(t,e){const n=t instanceof oc?t.toArray():t,r={fields:{[Pe]:{stringValue:Ue},[Ve]:{arrayValue:{values:n.map((t=>{if("number"!=typeof t)throw e.yc("VectorValues must only contain numeric values.");return lr(e.serializer,t)}))}}}};return{mapValue:r}}(t,e);if(Gi(t))return t._toProto(e.serializer);throw e.yc(`Unsupported field value: ${lt(t)}`)}(t,e)}function bc(t,e){const n={};return le(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ue(t,((t,r)=>{const i=wc(r,e.dc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ec(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof sc||t instanceof nc||t instanceof Ga||t instanceof ic||t instanceof oc||Gi(t))}function Tc(t,e,n){if(!Ec(n)||!ut(n)){const r=lt(n);throw"an object"===r?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Ic(t,e,n){if((e=(0,a.Ku)(e))instanceof rc)return e._internalPath;if("string"==typeof e)return Ac(t,e);throw Cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sc=new RegExp("[~\\*/\\[\\]]");function Ac(t,e,n){if(e.search(Sc)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rc(...e.split("."))._internalPath}catch(r){throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(P.INVALID_ARGUMENT,a+t+c)}function kc(t,e){return t.some((t=>t.isEqual(e)))}
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
class Rc{convertValue(t,e="none"){switch(Fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return be(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){const e=t.fields?.[Ve].arrayValue?.values?.map((t=>be(t.doubleValue)));return new oc(e)}convertGeoPoint(t){return new sc(be(t.latitude),be(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ke(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Re(t));default:return null}}convertTimestamp(t){const e=we(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);N(qi(n),9688,{name:t});const r=new Ne(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||C(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Rc{constructor(t){super(),this.firestore=t}convertBytes(t){return new nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ga(this.firestore,null,e)}}
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
 */function xc(){return new mc("serverTimestamp")}const Nc="@firebase/firestore",Dc="4.14.0";
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
class Pc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ga(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(Ic("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lc extends Pc{data(){return super.data()}}
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
 */function Mc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uc{}class Vc extends Uc{}function Fc(t,e,...n){let r=[];e instanceof Uc&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Bc)).length,n=t.filter((t=>t instanceof jc)).length;if(e>1||e>0&&n>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
  */(r);for(const i of r)t=i._apply(t);return t}class jc extends Vc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new jc(t,e,n)}_apply(t){const e=this._parse(t);return Gc(t._query,e),new qa(t.firestore,t.converter,Bn(t._query,e))}_parse(t){const e=dc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){qc(o,s);const e=[];for(const n of o)e.push(zc(r,t,n));a={arrayValue:{values:e}}}else a=zc(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||qc(o,s),a=_c(n,e,o,"in"===s||"not-in"===s);const c=fn.create(i,s,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function $c(t,e,n){const r=e,i=Ic("where",t);return jc._create(i,r,n)}class Bc extends Uc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Bc(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:dn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Gc(n,i),n=Bn(n,i)}(t._query,e),new qa(t.firestore,t.converter,Bn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function zc(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vn(e)&&-1!==n.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!it.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ke(t,new it(r))}if(n instanceof Ga)return Ke(t,n._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lt(n)}.`)}function qc(t,e){if(!Array.isArray(t)||0===t.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gc(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Wc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Hc extends Rc{constructor(t){super(),this.firestore=t}convertBytes(t){return new nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ga(this.firestore,null,e)}}
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
 */class Kc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qc extends Pc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Qc._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}Qc._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qc._jsonSchema={type:ft("string",Qc._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Jc extends Qc{data(t={}){return super.data(t)}}class Xc{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Kc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Jc(this._firestore,this._userDataWriter,n.key,n,new Kc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Jc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Kc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Jc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Kc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Yc(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xc._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=W.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach((t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Yc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:t})}}
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
Xc._jsonSchemaVersion="firestore/querySnapshot/1.0",Xc._jsonSchema={type:ft("string",Xc._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};const Zc={maxAttempts:5};
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
 */function tu(t,e){if((t=(0,a.Ku)(t)).firestore!==e)throw new L(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */class eu{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=dc(t)}get(t){const e=tu(t,this._firestore),n=new Hc(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return O(24041);const r=t[0];if(r.isFoundDocument())return new Pc(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Pc(this._firestore,n,e._key,null,e.converter);throw O(18433,{doc:r})}))}set(t,e,n){const r=tu(t,this._firestore),i=Wc(r.converter,e,n),s=pc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=tu(t,this._firestore);let s;return s="string"==typeof(e=(0,a.Ku)(e))||e instanceof rc?yc(this._dataReader,"Transaction.update",i._key,e,n,r):vc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=tu(t,this._firestore);return this._transaction.delete(e._key),this}}
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
 */class nu extends eu{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=tu(t,this._firestore),n=new Oc(this._firestore);return super.get(t).then((t=>new Qc(this._firestore,n,e._key,t._document,new Kc(!1,!1),e.converter)))}}function ru(t,e,n){t=ht(t,Ya);const r={...Zc,...n};!function(t){if(t.maxAttempts<1)throw new L(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r);const i=tc(t);return Pa(i,(n=>e(new nu(t,n))),r)}
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
 */function iu(t){t=ht(t,qa);const e=ht(t.firestore,Ya),n=tc(e),r=new Oc(e);return Mc(t._query),Da(n,t._query).then((n=>new Xc(e,r,t,n)))}new WeakMap;
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
 */!function(t,e=!0){T(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Ya(new j(t.getProvider("auth-internal")),new q(i,t.getProvider("app-check-internal")),De(i,n),i);return r={useFetchStreams:e,...r},s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(Nc,Dc,t),(0,s.KO)(Nc,Dc,"esm2020")}()},4328:function(t,e,n){"use strict";var r=n(4995),i=new r.WeakMap,s=r.set,o=r.remove;t.exports=function(t){return s(i,t,1),o(i,t),t}},4376:function(t,e,n){"use strict";var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4402:function(t,e,n){"use strict";var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},4423:function(t,e,n){"use strict";var r=n(6518),i=n(9617).includes,s=n(9039),o=n(6469),a=s((function(){return!Array(1).includes()})),c=s((function(){return[,1].includes(void 0,1)}));r({target:"Array",proto:!0,forced:a||c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},4449:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l.iterator,"normal",!1)}))}},4495:function(t,e,n){"use strict";var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4527:function(t,e,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4549:function(t,e,n){"use strict";var r=n(4576);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return s}},4576:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4644:function(t,e,n){"use strict";var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),w=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,R=S&&y(S),O=A&&y(A),x=Object.prototype,N=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(c.opera),U=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(V,e)||h(F,e)},$=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(V,e)||h(F,e)},z=function(t){if(B(t))return t;throw new N("Target is not a typed array")},q=function(t){if(u(t)&&(!_||v(R,t)))return t;throw new N(d(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:M&&A[t]||e,r)}},W=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in V)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in F)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw new N("Incorrect invocation")},M))for(r in V)c[r]&&_(c[r],R);if((!M||!O||O===x)&&(O=R.prototype,M))for(r in V)c[r]&&_(c[r].prototype,O);if(M&&y(k)!==O&&_(k,O),a&&!h(O,D))for(r in U=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r].prototype,P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:R,TypedArrayPrototype:O}},4659:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},4867:function(t,e,n){var r=n(5761),i=/^\s+/;function s(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=s},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:function(t,e,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},4916:function(t,e,n){"use strict";var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(c){var o=new n([1,2]);return e(o[t](s(1/0)))}}}catch(c){return!1}}},4972:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),c=n(9590),u=n(9462),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("take",1),g=!d&&!p&&f("take",RangeError),m=d||p||g,v=u((function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,l(t,"normal",void 0);var e=s(i(this.next,t)),n=this.done=!!e.done;return n?void 0:e.value}));r({target:"Iterator",proto:!0,real:!0,forced:m},{take:function(t){var e;s(this);try{e=c(a(+t))}catch(n){l(this,"throw",n)}return g?i(g,this,e):new v(o(this),{remaining:e})}})},4979:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),_=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in new v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var k in g||a(C,"constructor",o(1,A)),f)if(c(f,k)){var R=f[k],O=R.s;c(A,O)||a(A,O,o(6,R.c))}},4995:function(t,e,n){"use strict";var r=n(9504),i=WeakMap.prototype;t.exports={WeakMap:WeakMap,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"])}},5002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5024:function(t,e,n){"use strict";var r=n(6518),i=n(3650),s=n(9835),o=n(4916),a=!o("symmetricDifference")||!s("symmetricDifference");r({target:"Set",proto:!0,real:!0,forced:a},{symmetricDifference:i})},5031:function(t,e,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},5091:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},5130:function(t,e,n){"use strict";n.d(e,{D$:function(){return nt},Ef:function(){return ct},Jo:function(){return J},jR:function(){return it},u1:function(){return X}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(ht){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const _=/(?:^|;)\s*display\s*:/;function w(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const s in n){"display"===s&&(o=!0);const a=n[s];null!=a?A(t,s,!(0,i.Kg)(e)&&e?e[s]:void 0,a)||E(r,s,a):E(r,s,"")}}else if(s){if(e!==n){const t=r[y];t&&(n+=";"+t),r.cssText=n,o=_.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[v]&&(r.display="none"))}const b=/\s*!important$/;function E(t,e,n){if((0,i.cy)(n))n.forEach((n=>E(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S(t,e);b.test(n)?t.setProperty((0,i.Tg)(r),n.replace(b,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],I={};function S(t,e){const n=I[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return I[e]=r;r=(0,i.ZH)(r);for(let i=0;i<T.length;i++){const n=T[i]+r;if(n in t)return I[e]=n}return e}function A(t,e,n,r){return"TEXTAREA"===t.tagName&&("width"===e||"height"===e)&&(0,i.Kg)(r)&&n===r}const C="http://www.w3.org/1999/xlink";function k(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(C,e.slice(6,e.length)):t.setAttributeNS(C,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function R(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(ht){0}c&&t.removeAttribute(s||e)}function O(t,e,n,r){t.addEventListener(e,n,r)}function x(t,e,n,r){t.removeEventListener(e,n,r)}const N=Symbol("_vei");function D(t,e,n,r,i=null){const s=t[N]||(t[N]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=L(e);if(r){const o=s[e]=F(r,i);O(t,n,o,a)}else o&&(x(t,n,o,a),s[e]=void 0)}}const P=/(?:Once|Passive|Capture)$/;function L(t){let e;if(P.test(t)){let n;e={};while(n=t.match(P))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let M=0;const U=Promise.resolve(),V=()=>M||(U.then((()=>M=0)),M=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(j(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function j(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const $=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?w(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||D(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):z(t,e,r,a))?(R(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||k(t,e,r,a,o,"value"!==e)):t._isVueCE&&(q(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!(0,i.Kg)(r)))?R(t,(0,i.PT)(e),r,o,e):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),k(t,e,r,a))};function z(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&$(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!$(e)||!(0,i.Kg)(n))&&e in t}function q(t,e){const n=t._def.props;if(!n)return!1;const r=(0,i.PT)(e);return Array.isArray(n)?n.some((t=>(0,i.PT)(t)===r)):Object.keys(n).some((t=>(0,i.PT)(t)===r))}"undefined"!==typeof HTMLElement&&HTMLElement;const G=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function W(t){t.target.composing=!0}function H(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const K=Symbol("_assign");function Q(t,e,n){return e&&(t=t.trim()),n&&(t=(0,i.bB)(t)),t}const J={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[K]=G(i);const s=r||i.props&&"number"===i.props.type;O(t,e?"change":"input",(e=>{e.target.composing||t[K](Q(t.value,n,s))})),(n||s)&&O(t,"change",(()=>{t.value=Q(t.value,n,s)})),e||(O(t,"compositionstart",W),O(t,"compositionend",H),O(t,"change",H))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[K]=G(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c===u)return;const l=t.getRootNode();if((l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}};const X={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.vM)(e);O(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(Z(t)):Z(t)));t[K](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[K]=G(s)},mounted(t,{value:e}){Y(t,e)},beforeUpdate(t,e,n){t[K]=G(n)},updated(t,{value:e}){t._assigning||Y(t,e)}};function Y(t,e){const n=t.multiple,r=(0,i.cy)(e);if(!n||r||(0,i.vM)(e)){for(let s=0,o=t.options.length;s<o;s++){const o=t.options[s],a=Z(o);if(n)if(r){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.u3)(e,a)>-1}else o.selected=e.has(a);else if((0,i.BX)(Z(o),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Z(t){return"_value"in t?t._value:t.value}const tt=["ctrl","shift","alt","meta"],et={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>tt.some((n=>t[`${n}Key`]&&!e.includes(n)))},nt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=et[e[t]];if(r&&r(n,e))return}return t(n,...r)})},rt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},it=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||rt[t]===r))?t(n):void 0})},st=(0,i.X$)({patchProp:B},f);let ot;function at(){return ot||(ot=(0,r.K9)(st))}const ct=(...t)=>{const e=at().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=lt(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,ut(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ut(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function lt(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},5169:function(t,e,n){"use strict";var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5170:function(t,e,n){"use strict";var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},5367:function(t,e,n){"use strict";var r=n(6518),i=n(2248),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"Map",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},5397:function(t,e,n){"use strict";var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5610:function(t,e,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5677:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},5745:function(t,e,n){"use strict";var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5761:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},5854:function(t,e,n){"use strict";var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5876:function(t,e,n){"use strict";var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",(function(t){return t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},5917:function(t,e,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5966:function(t,e,n){"use strict";var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6080:function(t,e,n){"use strict";var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6119:function(t,e,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6189:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6193:function(t,e,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6198:function(t,e,n){"use strict";var r=n(8014);t.exports=function(t){return r(t.length)}},6269:function(t){"use strict";t.exports={}},6279:function(t,e,n){"use strict";var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6319:function(t,e,n){"use strict";var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},6382:function(t,e,n){"use strict";var r=n(9565),i=n(6840),s=n(5966),o=n(9297),a=n(8227),c=n(7657).IteratorPrototype,u=a("dispose");o(c,u)||i(c,u,(function(){var t=s(this,"return");t&&r(t,this)}))},6395:function(t){"use strict";t.exports=!1},6400:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.12.1";
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
(0,r.KO)(i,s,"app")},6469:function(t,e,n){"use strict";var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},6518:function(t,e,n){"use strict";var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},6557:function(t,e,n){"use strict";var r=n(4995).has;t.exports=function(t){return r(t),t}},6632:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(9143),o=n(4154),a=i.Uint8Array,c=!a||!a.prototype.setFromBase64||!function(){var t=new a([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(e){}try{return void t.setFromBase64("a")}catch(e){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();a&&r({target:"Uint8Array",proto:!0,forced:c},{setFromBase64:function(t){o(this);var e=s(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}})},6699:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6706:function(t,e,n){"use strict";var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return vt},CE:function(){return rn},Df:function(){return J},EW:function(){return Gn},FK:function(){return We},Fv:function(){return mn},Gt:function(){return N},Gy:function(){return q},K9:function(){return Pe},KC:function(){return pt},Lk:function(){return ln},MZ:function(){return Q},OW:function(){return K},Q3:function(){return vn},QP:function(){return W},RG:function(){return Ot},WQ:function(){return D},Wv:function(){return sn},bF:function(){return hn},bo:function(){return O},dY:function(){return m},eW:function(){return gn},g2:function(){return St},h:function(){return Wn},k6:function(){return R},nI:function(){return Cn},pI:function(){return Rt},pM:function(){return X},qL:function(){return o},sV:function(){return gt},uX:function(){return Ye},wB:function(){return M},xo:function(){return yt}});n(4423),n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function v(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function y(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(v(e),0,t),t.flags|=1,_()}}function _(){g||(g=p.then(I))}function w(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),_()}function b(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function I(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&I(t)}}let S=!1;let A=null,C=null;function k(t){const e=A;return A=t,C=t&&t.type.__scopeId||null,e}function R(t,e=A,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&en(-1);const i=k(e);let s;try{s=t(...n)}finally{k(i),r._d&&en(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function O(t,e){if(null===A)return t;const n=Bn(A),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,u=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function x(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function N(t,e){if(An){let n=An.provides;const r=An.parent&&An.parent.provides;r===n&&(n=An.provides=Object.create(r)),n[t]=e}}function D(t,e,n=!1){const r=Cn();if(r||ee){let s=ee?ee._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const P=Symbol.for("v-scx"),L=()=>{{const t=D(P);return t}};function M(t,e,n){return U(t,e,n)}function U(t,e,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==c;let f;if(Ln)if("sync"===c){const t=L();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=An;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{De(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():y(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Ln&&(f?f.push(g):h&&g()),g}function V(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?F(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=On(this),c=U(s,o.bind(r),n);return a(),c}function F(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const j=Symbol("_vte"),$=t=>t.__isTeleport;const B=Symbol("_leaveCb"),z=Symbol("_enterCb");function q(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gt((()=>{t.isMounted=!0})),yt((()=>{t.isUnmounting=!0})),t}const G=[Function,Array],W={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:G,onEnter:G,onAfterEnter:G,onEnterCancelled:G,onBeforeLeave:G,onLeave:G,onAfterLeave:G,onLeaveCancelled:G,onBeforeAppear:G,onAppear:G,onAfterAppear:G,onAppearCancelled:G};function H(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function K(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),T=H(n,t),I=(t,e)=>{t&&o(t,r,9,e)},A=(t,e)=>{const n=e[1];I(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=y||l}e[B]&&e[B](!0);const i=T[E];i&&an(t,i)&&i.el[B]&&i.el[B](),I(r,[e])},enter(e){if(!S&&T[E]===t)return;let r=h,i=f,s=d;if(!n.isMounted){if(!a)return;r=_||h,i=w||f,s=b||d}let o=!1;e[z]=t=>{o||(o=!0,I(t?s:i,[e]),C.delayedLeave&&C.delayedLeave(),e[z]=void 0)};const c=e[z].bind(null,!1);r?A(r,[e,c]):c()},leave(e,r){const i=String(t.key);if(e[z]&&e[z](!0),n.isUnmounting)return r();I(p,[e]);let s=!1;e[B]=n=>{s||(s=!0,r(),I(n?v:m,[e]),e[B]=void 0,T[i]===t&&delete T[i])};const o=e[B].bind(null,!1);T[i]=t,g?A(g,[e,o]):o()},clone(t){const i=K(t,e,n,r,s);return s&&s(i),i}};return C}function Q(t,e){6&t.shapeFlag&&t.component?(t.transition=e,Q(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function J(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===We?(128&o.patchFlag&&i++,r=r.concat(J(o.children,e,a))):(e||o.type!==Ke)&&r.push(null!=a?pn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function X(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function Y(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Z(t,e){let n;return!(!(n=Object.getOwnPropertyDescriptor(t,e))||n.configurable)}const tt=new WeakMap;function et(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>et(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(rt(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&et(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Bn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:t=>!Z(d,t)&&(0,i.$3)(g,t),v=(t,e)=>!e||!Z(d,e);if(null!=f&&f!==h)if(nt(e),(0,i.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){const t=e;v(f,t.k)&&(f.value=null),t.k&&(d[t.k]=null)}if((0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:v(h)||!t.k?h.value:d[t.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(e)d[h]=[c],m(h)&&(p[h]=d[h]);else{const e=[c];v(h,t.k)&&(h.value=e),t.k&&(d[t.k]=e)}}else e?(d[h]=u,m(h)&&(p[h]=u)):s&&(v(h,t.k)&&(h.value=u),t.k&&(d[t.k]=u))};if(u){const e=()=>{r(),tt.delete(t)};e.id=-1,tt.set(t,e),De(e,n)}else nt(t),r()}else 0}}function nt(t){const e=tt.get(t);e&&(e.flags|=8,tt.delete(t))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const rt=t=>!!t.type.__asyncLoader;const it=t=>t.type.__isKeepAlive;RegExp,RegExp;function st(t,e){return(0,i.cy)(t)?t.some((t=>st(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function ot(t,e){ct(t,"a",e)}function at(t,e){ct(t,"da",e)}function ct(t,e,n=An){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(ft(e,r,n),n){let t=n.parent;while(t&&t.parent)it(t.parent.vnode)&&ut(r,e,n,t),t=t.parent}}function ut(t,e,n,r){const s=ft(e,t,r,!0);_t((()=>{(0,i.TF)(r[e],s)}),n)}function lt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ht(t){return 128&t.shapeFlag?t.ssContent:t}function ft(t,e,n=An,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=On(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const dt=t=>(e,n=An)=>{Ln&&"sp"!==t||ft(t,((...t)=>e(...t)),n)},pt=dt("bm"),gt=dt("m"),mt=dt("bu"),vt=dt("u"),yt=dt("bum"),_t=dt("um"),wt=dt("sp"),bt=dt("rtg"),Et=dt("rtc");function Tt(t,e=An){ft("ec",t,e)}const It="components";function St(t,e){return Ct(It,t,!0,e)||t}const At=Symbol.for("v-ndc");function Ct(t,e,n=!0,r=!1){const s=A||An;if(s){const n=s.type;if(t===It){const t=zn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=kt(s[t]||n[t],e)||kt(s.appContext[t],e);return!o&&r?n:o}}function kt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function Rt(t,e,n,s){let o;const a=n&&n[s],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1,s=!1;n&&(i=!(0,r.fE)(t),s=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(i?s?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}function Ot(t,e,n={},r,s){if(A.ce||A.parent&&rt(A.parent)&&A.parent.ce){const t=Object.keys(n).length>0;return"default"!==e&&(n.name=e),Ye(),sn(We,null,[hn("slot",n,r&&r())],t?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),Ye();const a=o&&xt(o(n)),c=n.key||a&&a.key,u=sn(We,{key:(c&&!(0,i.Bm)(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===t._?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),o&&o._c&&(o._d=!0),u}function xt(t){return t.some((t=>!on(t)||t.type!==Ke&&!(t.type===We&&!xt(t.children))))?t:null}const Nt=t=>t?Nn(t)?Bn(t):Nt(t.parent):null,Dt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nt(t.parent),$root:t=>Nt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bt(t),$forceUpdate:t=>t.f||(t.f=()=>{y(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>V.bind(t)}),Pt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Lt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;if("$"!==e[0]){const t=c[e];if(void 0!==t)switch(t){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Pt(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((0,i.$3)(a,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Ut&&(c[e]=0)}}const h=Dt[e];let f,d;return h?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),h(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(d=l.config.globalProperties,(0,i.$3)(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Pt(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:o,type:a}},c){let u;return!!(n[c]||t!==i.MZ&&"$"!==c[0]&&(0,i.$3)(t,c)||Pt(e,c)||(0,i.$3)(o,c)||(0,i.$3)(r,c)||(0,i.$3)(Dt,c)||(0,i.$3)(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mt(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Ut=!0;function Vt(t){const e=Bt(t),n=t.proxy,s=t.ctx;Ut=!1,e.beforeCreate&&jt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:k,inheritAttrs:R,components:O,directives:x,filters:D}=e,P=null;if(h&&Ft(h,s,P),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Ut=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Gn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)$t(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{N(e,t[e])}))}function L(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&jt(f,t,"c"),L(pt,d),L(gt,p),L(mt,g),L(vt,m),L(ot,v),L(at,y),L(Tt,A),L(Et,I),L(bt,S),L(yt,w),L(_t,E),L(wt,C),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),x&&(t.directives=x),C&&Y(t)}function Ft(t,e,n=i.tE){(0,i.cy)(t)&&(t=Ht(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?D(n.from||s,n.default,!0):D(n.from||s):D(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function jt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function $t(t,e,n,r){let s=r.includes(".")?F(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&M(s,n)}else if((0,i.Tn)(t))M(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>$t(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&M(s,r,t)}else 0}function Bt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>zt(u,t,a,!0))),zt(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function zt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&zt(t,s,n,!0),i&&i.forEach((e=>zt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=qt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const qt={data:Gt,props:Jt,emits:Jt,methods:Qt,computed:Qt,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Qt,directives:Qt,watch:Xt,provide:Gt,inject:Wt};function Gt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Wt(t,e){return Qt(Ht(t),Ht(e))}function Ht(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Jt(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),Mt(t),Mt(null!=e?e:{})):e}function Xt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Kt(t[r],e[r]);return n}function Yt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zt=0;function te(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Yt(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Zt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Hn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!u){0;const c=l._ceVNode||hn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Bn(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=ee;ee=l;try{return t()}finally{ee=e}}};return l}}let ee=null;const ne=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function re(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&ne(r,e.slice(7));let u;c&&(c.trim&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}const ie=new WeakMap;function se(t,e,n=!1){const r=n?ie:e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=se(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function oe(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function ae(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t,y=k(t);let _,w;try{if(4&n.shapeFlag){const t=s||r,e=t;_=yn(h.call(e,t,f,d,g,p,m)),w=u}else{const t=e;0,_=yn(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),w=e.props?u:ce(u)}}catch(E){Je.length=0,a(E,t,1),_=hn(Ke)}let b=_;if(w&&!1!==v){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.CP)&&(w=ue(w,o)),b=pn(b,w,!1,!0))}return n.dirs&&(b=pn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Q(b,n.transition),_=b,k(y),_}const ce=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},ue=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function le(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||he(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?he(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(fe(o,r,n)&&!oe(u,n))return!0}}return!1}function he(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(fe(e,t,s)&&!oe(n,s))return!0}return!1}function fe(t,e,n){const r=t[n],s=e[n];return"style"===n&&(0,i.Gv)(r)&&(0,i.Gv)(s)?!(0,i.BX)(r,s):r!==s}function de({vnode:t,parent:e,suspense:n},r){while(e){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=r,t=n),n!==t)break;(t=e.vnode).el=r,e=e.parent}n&&n.activeBranch===t&&(n.vnode.el=r)}const pe={},ge=()=>Object.create(pe),me=t=>Object.getPrototypeOf(t)===pe;function ve(t,e,n,i=!1){const s={},o=ge();t.propsDefaults=Object.create(null),_e(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function ye(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;_e(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=we(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(oe(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=we(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function _e(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:oe(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=we(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function we(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=On(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const be=new WeakMap;function Ee(t,e,n=!1){const r=n?be:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=Ee(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);Te(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(Te(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function Te(t){return"$"!==t[0]&&!(0,i.SU)(t)}const Ie=t=>"_"===t||"_ctx"===t||"$stable"===t,Se=t=>(0,i.cy)(t)?t.map(yn):[yn(t)],Ae=(t,e,n)=>{if(e._n)return e;const r=R(((...t)=>Se(e(...t))),n);return r._c=!1,r},Ce=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ie(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=Ae(s,n,r);else if(null!=n){0;const t=Se(n);e[s]=()=>t}}},ke=(t,e)=>{const n=Se(e);t.slots.default=()=>n},Re=(t,e,n)=>{for(const r in e)!n&&Ie(r)||(t[r]=e[r])},Oe=(t,e,n)=>{const r=t.slots=ge();if(32&t.vnode.shapeFlag){const t=e._;t?(Re(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):Ce(e,r)}else e&&ke(t,e)},xe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:Re(s,e,n):(o=!e.$stable,Ce(e,s)),a=e}else e&&(ke(t,e),a={default:1});if(o)for(const i in s)Ie(i)||null!=a[i]||delete s[i]};function Ne(){}const De=Ge;function Pe(t){return Le(t)}function Le(t,e){Ne();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!an(t,e)&&(r=X(t),W(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case He:_(t,e,n,r);break;case Ke:w(t,e,n,r);break;case Qe:null==t&&T(e,n,r,o);break;case We:P(t,e,n,r,i,s,o,a,c);break;default:1&h?A(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i?et(l,t&&t.ref,s,e||t,!e):null==l&&t&&null!=t.ref&&et(t.ref,null,s,t,!0)},_=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,i,s,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)C(e,n,r,i,s,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),O(t,e,i,s,o,a,c)}finally{n&&n._endPatch()}}},C=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,o,Me(t,u),l,h),y&&x(t,null,r,"created"),k(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&En(p,r,t)}y&&x(t,null,r,"beforeMount");const _=Ve(o,v);if(_&&v.beforeEnter(d),s(d,e,n),(p=g&&g.onVnodeMounted)||_||y){De((()=>{try{p&&En(p,r,t),_&&v.enter(d),y&&x(t,null,r,"mounted")}finally{0}}),o)}},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||qe(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?_n(t[u]):yn(t[u]);v(null,c,e,n,r,i,s,o,a)}},O=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Ue(n,!1),(m=g.onVnodeBeforeUpdate)&&En(m,n,e,t),d&&x(e,t,n,"beforeUpdate"),n&&Ue(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?N(t.dynamicChildren,h,u,n,r,Me(e,s),o):c||$(t,e,u,null,n,r,Me(e,s),o,!1),l>0){if(16&l)D(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||D(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&De((()=>{m&&En(m,n,e,t),d&&x(e,t,n,"updated")}),r)},N=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===We||!an(c,u)||198&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren&&t.dynamicChildren.length===p.length?(N(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Fe(t,e,!0)):$(t,e,n,f,i,o,a,c,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=Sn(t,r,i);if(it(t)&&(a.ctx.renderer=tt),Mn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!t.el){const r=a.subTree=hn(Ke);w(null,r,e,n),t.placeholder=r.el}}else V(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(le(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:u}=t;{const n=$e(t);if(n)return e&&(e.el=u.el,F(t,e,c)),void n.asyncDep.then((()=>{De((()=>{t.isUnmounted||h()}),o)}))}let l,f=e;0,Ue(t,!1),e?(e.el=u.el,F(t,e,c)):e=u,n&&(0,i.DY)(n),(l=e.props&&e.props.onVnodeBeforeUpdate)&&En(l,s,e,u),Ue(t,!0);const p=ae(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),X(g),t,o,a),e.el=p.el,null===f&&de(t,p.el),r&&De(r,o),(l=e.props&&e.props.onVnodeUpdated)&&De((()=>En(l,s,e,u)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=rt(e);if(Ue(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&En(r,f,e),Ue(t,!0),c&&st){const e=()=>{t.subTree=ae(t),st(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(p,t.parent?t.parent.type:void 0);const r=t.subTree=ae(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&De(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;De((()=>En(r,f,t)),o)}(256&e.shapeFlag||f&&rt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&De(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>y(f),Ue(t,!0),h()},F=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ye(t,e.props,i,n),xe(t,e.children,n),(0,r.C4)(),b(t),(0,r.bl)()},$=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(u,h,n,r,i,s,o,a,c);if(256&d)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&f(n,h)):16&l?16&p?q(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},z=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?_n(e[d]):yn(e[d]);v(t[d],r,n,null,s,o,a,c,u)}l>h?J(t,s,o,!0,!1,f):R(e,n,r,s,o,a,c,u,f)},q=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?_n(e[l]):yn(e[l]);if(!an(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?_n(e[d]):yn(e[d]);if(!an(r,i))break;v(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?_n(e[l]):yn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)W(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?_n(e[l]):yn(e[l]);null!=t.key&&m.set(t.key,l)}let y,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&an(r,e[y])){i=y;break}void 0===i?W(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,c,u),_++)}const I=b?je(T):i.Oj;for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=e[t+1],d=t+1<h?f.el||ze(f):r;0===T[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==I[y]?G(i,n,d,2):y--)}}},G=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void G(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,tt);if(c===We){s(a,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void s(t.anchor,e,n)}if(c===Qe)return void I(t,e,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),s(a,e,n),De((()=>u.enter(a)),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{a._isLeaving&&a[B](!0),r(a,(()=>{l(),c&&c()}))};i?i(a,l,h):h()}else s(a,e,n)},W=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p,memo:g}=t;if(-2===f&&(s=!1),null!=c&&((0,r.C4)(),et(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const m=1&h&&d,v=!rt(t);let y;if(v&&(y=a&&a.onVnodeBeforeUnmount)&&En(y,e,t),6&h)Q(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);m&&x(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,tt,i):l&&!l.hasOnce&&(o!==We||f>0&&64&f)?J(l,e,n,!1,!0):(o===We&&384&f||!s&&16&h)&&J(u,e,n),i&&H(t)}const _=null!=g&&null==p;(v&&(y=a&&a.onVnodeUnmounted)||m||_)&&De((()=>{y&&En(y,e,t),m&&x(t,null,e,"unmounted"),_&&(t.el=null)}),n)},H=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===We)return void K(n,r);if(e===Qe)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},K=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=t;Be(u),Be(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,W(a,t,e,n)),c&&De(c,e),De((()=>{t.isUnmounted=!0}),e)},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)W(t[o],e,n,r,i)},X=t=>{if(6&t.shapeFlag)return X(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[j];return n?p(n):e};let Y=!1;const Z=(t,e,n)=>{let r;null==t?e._vnode&&(W(e._vnode,null,null,!0),r=e._vnode.component):v(e._vnode||null,t,e,null,null,null,n),e._vnode=t,Y||(Y=!0,b(r),E(),Y=!1)},tt={p:v,um:W,m:G,r:H,mt:M,mc:R,pc:$,pbc:N,n:X,o:t};let nt,st;return e&&([nt,st]=e(tt)),{render:Z,hydrate:nt,createApp:te(Z,nt)}}function Me({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ue({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ve(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fe(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=_n(s[i]),e.el=t.el),n||-2===e.patchFlag||Fe(t,e)),e.type===He&&(-1===e.patchFlag&&(e=s[i]=_n(e)),e.el=t.el),e.type!==Ke||e.el||(e.el=t.el)}}function je(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function $e(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$e(e)}function Be(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ze(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ze(e.subTree):null}const qe=t=>t.__isSuspense;function Ge(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const We=Symbol.for("v-fgt"),He=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),Qe=Symbol.for("v-stc"),Je=[];let Xe=null;function Ye(t=!1){Je.push(Xe=t?null:[])}function Ze(){Je.pop(),Xe=Je[Je.length-1]||null}let tn=1;function en(t,e=!1){tn+=t,t<0&&Xe&&e&&(Xe.hasOnce=!0)}function nn(t){return t.dynamicChildren=tn>0?Xe||i.Oj:null,Ze(),tn>0&&Xe&&Xe.push(t),t}function rn(t,e,n,r,i,s){return nn(ln(t,e,n,r,i,s,!0))}function sn(t,e,n,r,i){return nn(hn(t,e,n,r,i,!0))}function on(t){return!!t&&!0===t.__v_isVNode}function an(t,e){return t.type===e.type&&t.key===e.key}const cn=({key:t})=>null!=t?t:null,un=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:A,r:t,k:e,f:!!n}:t:null);function ln(t,e=null,n=null,r=0,s=null,o=(t===We?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cn(e),ref:e&&un(e),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:A};return c?(wn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),tn>0&&!a&&Xe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Xe.push(u),u}const hn=fn;function fn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==At||(t=Ke),on(t)){const r=pn(t,e,!0);return n&&wn(r,n),tn>0&&!a&&Xe&&(6&r.shapeFlag?Xe[Xe.indexOf(t)]=r:Xe.push(r)),r.patchFlag=-2,r}if(qn(t)&&(t=t.__vccOpts),e){e=dn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:qe(t)?128:$(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return ln(t,e,n,s,o,c,a,!0)}function dn(t){return t?(0,r.ju)(t)||me(t)?(0,i.X$)({},t):t:null}function pn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?bn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&cn(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(un(e)):[o,un(e)]:un(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Q(h,u.clone(h)),h}function gn(t=" ",e=0){return hn(He,null,t,e)}function mn(t,e){const n=hn(Qe,null,t);return n.staticCount=e,n}function vn(t="",e=!1){return e?(Ye(),sn(Ke,null,t)):hn(Ke,null,t)}function yn(t){return null==t||"boolean"===typeof t?hn(Ke):(0,i.cy)(t)?hn(We,null,t.slice()):on(t)?_n(t):hn(He,null,String(t))}function _n(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:pn(t)}function wn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),wn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||me(e)?3===r&&A&&(1===A.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=A}}else(0,i.Tn)(e)?(e={default:e,_ctx:A},n=32):(e=String(e),64&r?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function bn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)?null!=s||null!=n||(0,i.CP)(t)||(e[t]=s):e[t]=n?[].concat(n,s):s}else""!==t&&(e[t]=r[t])}return e}function En(t,e,n,r=null){o(t,e,7,[n,r])}const Tn=Yt();let In=0;function Sn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Tn,a={uid:In++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ee(s,o),emitsOptions:se(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=re.bind(null,a),t.ce&&t.ce(a),a}let An=null;const Cn=()=>An||A;let kn,Rn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};kn=e("__VUE_INSTANCE_SETTERS__",(t=>An=t)),Rn=e("__VUE_SSR_SETTERS__",(t=>Ln=t))}const On=t=>{const e=An;return kn(t),t.scope.on(),()=>{t.scope.off(),kn(e)}},xn=()=>{An&&An.scope.off(),kn(null)};function Nn(t){return 4&t.vnode.shapeFlag}let Dn,Pn,Ln=!1;function Mn(t,e=!1,n=!1){e&&Rn(e);const{props:r,children:i}=t.vnode,s=Nn(t);ve(t,r,s,e),Oe(t,i,n||e);const o=s?Un(t,e):void 0;return e&&Rn(!1),o}function Un(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?$n(t):null,c=On(t),u=s(o,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||rt(t)||Y(t),l){if(u.then(xn,xn),e)return u.then((n=>{Vn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else Vn(t,u,e)}else Fn(t,e)}function Vn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Fn(t,n)}function Fn(t,e,n){const s=t.type;if(!t.render){if(!e&&Dn&&!s.render){const e=s.template||Bt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Dn(e,c)}}t.render=s.render||i.tE,Pn&&Pn(t)}{const e=On(t);(0,r.C4)();try{Vt(t)}finally{(0,r.bl)(),e()}}}const jn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function $n(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,jn),slots:t.slots,emit:t.emit,expose:e}}function Bn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Dt?Dt[n](t):void 0},has(t,e){return e in t||e in Dt}})):t.proxy}function zn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function qn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Gn=(t,e)=>{const n=(0,r.EW)(t,e,Ln);return n};function Wn(t,e,n){try{en(-1);const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?on(e)?hn(t,null,[e]):hn(t,e):hn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&on(n)&&(n=[n]),hn(t,e,n))}finally{en(1)}}const Hn="3.5.33"},6801:function(t,e,n){"use strict";var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw new e("Maximum allowed index exceeded");return t}},6840:function(t,e,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6903:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},6955:function(t,e,n){"use strict";var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},6969:function(t,e,n){"use strict";var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},7080:function(t,e,n){"use strict";var r=n(4402).has;t.exports=function(t){return r(t),t}},7324:function(t,e,n){"use strict";var r=n(4576),i=n(511),s=n(4913).f,o=n(7347).f,a=r.Symbol;if(i("dispose"),a){var c=o(a,"dispose");c.enumerable&&c.configurable&&c.writable&&s(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},7347:function(t,e,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},7394:function(t,e,n){"use strict";var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},7476:function(t,e,n){"use strict";var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7588:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;s(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},7629:function(t,e,n){"use strict";var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.49.0",mode:r?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7642:function(t,e,n){"use strict";var r=n(6518),i=n(3440),s=n(9039),o=n(4916),a=!o("difference",(function(t){return 0===t.size})),c=a||s((function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var n=t++>1;return e.has(1)&&e.clear(),{done:n,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size}));r({target:"Set",proto:!0,real:!0,forced:c},{difference:i})},7657:function(t,e,n){"use strict";var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o((function(){var t={};return r[p].call(t)!==t}));m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7740:function(t,e,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},7750:function(t,e,n){"use strict";var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},7811:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7874:function(t,e,n){var r=n(8606),i=r.Symbol;t.exports=i},8004:function(t,e,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",(function(t){return 2===t.size&&t.has(1)&&t.has(2)}))||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},8014:function(t,e,n){"use strict";var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8111:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),v="constructor",y="Iterator",_=d("toStringTag"),w=TypeError,b=i[y],E=m||!a(b)||b.prototype!==p||!h((function(){b({})})),T=function(){if(s(this,p),c(this)===p)throw new w("Abstract class Iterator not directly constructable")},I=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new w("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,_)||I(_,y),!E&&f(p,v)&&p[v]!==Object||I(v,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},8227:function(t,e,n){"use strict";var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},8237:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),f=TypeError,d=h((function(){[].keys().reduce((function(){}),void 0)})),p=!d&&u("reduce",f);r({target:"Iterator",proto:!0,real:!0,forced:d||p},{reduce:function(t){o(this);try{s(t)}catch(h){c(this,"throw",h)}var e=arguments.length<2,n=e?void 0:arguments[1];if(p)return l(p,this,e?[t]:[t,n]);var r=a(this),u=0;if(i(r,(function(r){e?(e=!1,n=r):n=t(n,r,u),u++}),{IS_RECORD:!0}),e)throw new f("Reduce of empty iterator with no initial value");return n}})},8454:function(t,e,n){"use strict";var r=n(6518),i=n(4995),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"WeakMap",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},8456:function(t,e,n){"use strict";n.d(e,{_:function(){return s},a:function(){return w},b:function(){return i},c:function(){return f},d:function(){return g},f:function(){return c},g:function(){return o},h:function(){return l},i:function(){return b},n:function(){return T},o:function(){return E},p:function(){return a},r:function(){return y},s:function(){return _},u:function(){return p},v:function(){return h},y:function(){return u}});n(8111),n(1701);var r=n(6768);
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
const i="undefined"!==typeof document;function s(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&s(t.default)}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;function h(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let f=function(t){return t[t["MATCHER_NOT_FOUND"]=1]="MATCHER_NOT_FOUND",t[t["NAVIGATION_GUARD_REDIRECT"]=2]="NAVIGATION_GUARD_REDIRECT",t[t["NAVIGATION_ABORTED"]=4]="NAVIGATION_ABORTED",t[t["NAVIGATION_CANCELLED"]=8]="NAVIGATION_CANCELLED",t[t["NAVIGATION_DUPLICATED"]=16]="NAVIGATION_DUPLICATED",t}({});const d=Symbol("");f.MATCHER_NOT_FOUND,f.NAVIGATION_GUARD_REDIRECT,f.NAVIGATION_ABORTED,f.NAVIGATION_CANCELLED,f.NAVIGATION_DUPLICATED;function p(t,e){return a(new Error,{type:t,[d]:!0},e)}function g(t,e){return t instanceof Error&&d in t&&(null==e||!!(t.type&e))}const m=["params","query","hash"];function v(t){if("string"===typeof t)return t;if(null!=t.path)return t.path;const e={};for(const n of m)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const y=Symbol(""),_=Symbol(""),w=Symbol(""),b=Symbol(""),E=Symbol("");function T(){return(0,r.WQ)(w)}},8469:function(t,e,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},8480:function(t,e,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8527:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u.iterator,"normal",!1)}))}},8551:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},8606:function(t,e,n){var r=n(6903),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},8622:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8626:function(t,e,n){var r;t=n.nmd(t),n(4423),n(4114),n(8111),n(9314),n(1148),n(2489),n(116),n(531),n(7588),n(1701),n(8237),n(3579),n(4972),n(1806),function(){var i,s="4.18.1",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",l="Invalid `imports` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,g=2,m=4,v=1,y=2,_=1,w=2,b=4,E=8,T=16,I=32,S=64,A=128,C=256,k=512,R=30,O="...",x=800,N=16,D=1,P=2,L=3,M=1/0,U=9007199254740991,V=17976931348623157e292,F=NaN,j=4294967295,$=j-1,B=j>>>1,z=[["ary",A],["bind",_],["bindKey",w],["curry",E],["curryRight",T],["flip",k],["partial",I],["partialRight",S],["rearg",C]],q="[object Arguments]",G="[object Array]",W="[object AsyncFunction]",H="[object Boolean]",K="[object Date]",Q="[object DOMException]",J="[object Error]",X="[object Function]",Y="[object GeneratorFunction]",Z="[object Map]",tt="[object Number]",et="[object Null]",nt="[object Object]",rt="[object Promise]",it="[object Proxy]",st="[object RegExp]",ot="[object Set]",at="[object String]",ct="[object Symbol]",ut="[object Undefined]",lt="[object WeakMap]",ht="[object WeakSet]",ft="[object ArrayBuffer]",dt="[object DataView]",pt="[object Float32Array]",gt="[object Float64Array]",mt="[object Int8Array]",vt="[object Int16Array]",yt="[object Int32Array]",_t="[object Uint8Array]",wt="[object Uint8ClampedArray]",bt="[object Uint16Array]",Et="[object Uint32Array]",Tt=/\b__p \+= '';/g,It=/\b(__p \+=) '' \+/g,St=/(__e\(.*?\)|\b__t\)) \+\n'';/g,At=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,kt=RegExp(At.source),Rt=RegExp(Ct.source),Ot=/<%-([\s\S]+?)%>/g,xt=/<%([\s\S]+?)%>/g,Nt=/<%=([\s\S]+?)%>/g,Dt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pt=/^\w*$/,Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/[\\^$.*+?()[\]{}|]/g,Ut=RegExp(Mt.source),Vt=/^\s+/,Ft=/\s/,jt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$t=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qt=/[()=,{}\[\]\/\s]/,Gt=/\\(\\)?/g,Wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ht=/\w*$/,Kt=/^[-+]0x[0-9a-f]+$/i,Qt=/^0b[01]+$/i,Jt=/^\[object .+?Constructor\]$/,Xt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,te=/($^)/,ee=/['\n\r\u2028\u2029\\]/g,ne="\\ud800-\\udfff",re="\\u0300-\\u036f",ie="\\ufe20-\\ufe2f",se="\\u20d0-\\u20ff",oe=re+ie+se,ae="\\u2700-\\u27bf",ce="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",le="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",he="\\u2000-\\u206f",fe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",de="A-Z\\xc0-\\xd6\\xd8-\\xde",pe="\\ufe0e\\ufe0f",ge=ue+le+he+fe,me="['’]",ve="["+ne+"]",ye="["+ge+"]",_e="["+oe+"]",we="\\d+",be="["+ae+"]",Ee="["+ce+"]",Te="[^"+ne+ge+we+ae+ce+de+"]",Ie="\\ud83c[\\udffb-\\udfff]",Se="(?:"+_e+"|"+Ie+")",Ae="[^"+ne+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",Re="["+de+"]",Oe="\\u200d",xe="(?:"+Ee+"|"+Te+")",Ne="(?:"+Re+"|"+Te+")",De="(?:"+me+"(?:d|ll|m|re|s|t|ve))?",Pe="(?:"+me+"(?:D|LL|M|RE|S|T|VE))?",Le=Se+"?",Me="["+pe+"]?",Ue="(?:"+Oe+"(?:"+[Ae,Ce,ke].join("|")+")"+Me+Le+")*",Ve="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",je=Me+Le+Ue,$e="(?:"+[be,Ce,ke].join("|")+")"+je,Be="(?:"+[Ae+_e+"?",_e,Ce,ke,ve].join("|")+")",ze=RegExp(me,"g"),qe=RegExp(_e,"g"),Ge=RegExp(Ie+"(?="+Ie+")|"+Be+je,"g"),We=RegExp([Re+"?"+Ee+"+"+De+"(?="+[ye,Re,"$"].join("|")+")",Ne+"+"+Pe+"(?="+[ye,Re+xe,"$"].join("|")+")",Re+"?"+xe+"+"+De,Re+"+"+Pe,Fe,Ve,we,$e].join("|"),"g"),He=RegExp("["+Oe+ne+oe+pe+"]"),Ke=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Qe=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Je=-1,Xe={};Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=Xe[Et]=!0,Xe[q]=Xe[G]=Xe[ft]=Xe[H]=Xe[dt]=Xe[K]=Xe[J]=Xe[X]=Xe[Z]=Xe[tt]=Xe[nt]=Xe[st]=Xe[ot]=Xe[at]=Xe[lt]=!1;var Ye={};Ye[q]=Ye[G]=Ye[ft]=Ye[dt]=Ye[H]=Ye[K]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[yt]=Ye[Z]=Ye[tt]=Ye[nt]=Ye[st]=Ye[ot]=Ye[at]=Ye[ct]=Ye[_t]=Ye[wt]=Ye[bt]=Ye[Et]=!0,Ye[J]=Ye[X]=Ye[lt]=!1;var Ze={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rn=parseFloat,sn=parseInt,on="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,an="object"==typeof self&&self&&self.Object===Object&&self,cn=on||an||Function("return this")(),un=e&&!e.nodeType&&e,ln=un&&t&&!t.nodeType&&t,hn=ln&&ln.exports===un,fn=hn&&on.process,dn=function(){try{var t=ln&&ln.require&&ln.require("util").types;return t||fn&&fn.binding&&fn.binding("util")}catch(e){}}(),pn=dn&&dn.isArrayBuffer,gn=dn&&dn.isDate,mn=dn&&dn.isMap,vn=dn&&dn.isRegExp,yn=dn&&dn.isSet,_n=dn&&dn.isTypedArray;function wn(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function bn(t,e,n,r){var i=-1,s=null==t?0:t.length;while(++i<s){var o=t[i];e(r,o,n(o),t)}return r}function En(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function Tn(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function In(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function Sn(t,e){var n=-1,r=null==t?0:t.length,i=0,s=[];while(++n<r){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function An(t,e){var n=null==t?0:t.length;return!!n&&Vn(t,e,0)>-1}function Cn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function kn(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function Rn(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function On(t,e,n,r){var i=-1,s=null==t?0:t.length;r&&s&&(n=t[++i]);while(++i<s)n=e(n,t[i],i,t);return n}function xn(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Nn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Dn=Bn("length");function Pn(t){return t.split("")}function Ln(t){return t.match(zt)||[]}function Mn(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Un(t,e,n,r){var i=t.length,s=n+(r?1:-1);while(r?s--:++s<i)if(e(t[s],s,t))return s;return-1}function Vn(t,e,n){return e===e?pr(t,e,n):Un(t,jn,n)}function Fn(t,e,n,r){var i=n-1,s=t.length;while(++i<s)if(r(t[i],e))return i;return-1}function jn(t){return t!==t}function $n(t,e){var n=null==t?0:t.length;return n?Wn(t,e)/n:F}function Bn(t){return function(e){return null==e?i:e[t]}}function zn(t){return function(e){return null==t?i:t[e]}}function qn(t,e,n,r,i){return i(t,(function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)})),n}function Gn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Wn(t,e){var n,r=-1,s=t.length;while(++r<s){var o=e(t[r]);o!==i&&(n=n===i?o:n+o)}return n}function Hn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Kn(t,e){return kn(e,(function(e){return[e,t[e]]}))}function Qn(t){return t?t.slice(0,yr(t)+1).replace(Vt,""):t}function Jn(t){return function(e){return t(e)}}function Xn(t,e){return kn(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Zn(t,e){var n=-1,r=t.length;while(++n<r&&Vn(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length;while(n--&&Vn(e,t[n],0)>-1);return n}function er(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var nr=zn(Ze),rr=zn(tn);function ir(t){return"\\"+nn[t]}function sr(t,e){return null==t?i:t[e]}function or(t){return He.test(t)}function ar(t){return Ke.test(t)}function cr(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function lr(t,e){return function(n){return t(e(n))}}function hr(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n];o!==e&&o!==d||(t[n]=d,s[i++]=n)}return s}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function dr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function pr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function gr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function mr(t){return or(t)?wr(t):Dn(t)}function vr(t){return or(t)?br(t):Pn(t)}function yr(t){var e=t.length;while(e--&&Ft.test(t.charAt(e)));return e}var _r=zn(en);function wr(t){var e=Ge.lastIndex=0;while(Ge.test(t))++e;return e}function br(t){return t.match(Ge)||[]}function Er(t){return t.match(We)||[]}var Tr=function t(e){e=null==e?cn:Ir.defaults(cn.Object(),e,Ir.pick(cn,Qe));var n=e.Array,r=e.Date,Ft=e.Error,zt=e.Function,ne=e.Math,re=e.Object,ie=e.RegExp,se=e.String,oe=e.TypeError,ae=n.prototype,ce=zt.prototype,ue=re.prototype,le=e["__core-js_shared__"],he=ce.toString,fe=ue.hasOwnProperty,de=0,pe=function(){var t=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ge=ue.toString,me=he.call(re),ve=cn._,ye=ie("^"+he.call(fe).replace(Mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=hn?e.Buffer:i,we=e.Symbol,be=e.Uint8Array,Ee=_e?_e.allocUnsafe:i,Te=lr(re.getPrototypeOf,re),Ie=re.create,Se=ue.propertyIsEnumerable,Ae=ae.splice,Ce=we?we.isConcatSpreadable:i,ke=we?we.iterator:i,Re=we?we.toStringTag:i,Oe=function(){try{var t=Ko(re,"defineProperty");return t({},"",{}),t}catch(e){}}(),xe=e.clearTimeout!==cn.clearTimeout&&e.clearTimeout,Ne=r&&r.now!==cn.Date.now&&r.now,De=e.setTimeout!==cn.setTimeout&&e.setTimeout,Pe=ne.ceil,Le=ne.floor,Me=re.getOwnPropertySymbols,Ue=_e?_e.isBuffer:i,Ve=e.isFinite,Fe=ae.join,je=lr(re.keys,re),$e=ne.max,Be=ne.min,Ge=r.now,We=e.parseInt,He=ne.random,Ke=ae.reverse,Ze=Ko(e,"DataView"),tn=Ko(e,"Map"),en=Ko(e,"Promise"),nn=Ko(e,"Set"),on=Ko(e,"WeakMap"),an=Ko(re,"create"),un=on&&new on,ln={},fn=Da(Ze),dn=Da(tn),Dn=Da(en),Pn=Da(nn),zn=Da(on),pr=we?we.prototype:i,wr=pr?pr.valueOf:i,br=pr?pr.toString:i;function Tr(t){if(Al(t)&&!ul(t)&&!(t instanceof kr)){if(t instanceof Cr)return t;if(fe.call(t,"__wrapped__"))return La(t)}return new Cr(t)}var Sr=function(){function t(){}return function(e){if(!Sl(e))return{};if(Ie)return Ie(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Ar(){}function Cr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function kr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=j,this.__views__=[]}function Rr(){var t=new kr(this.__wrapped__);return t.__actions__=io(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=io(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=io(this.__views__),t}function Or(){if(this.__filtered__){var t=new kr(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function xr(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,s=Zo(0,i,this.__views__),o=s.start,a=s.end,c=a-o,u=r?a:o-1,l=this.__iteratees__,h=l.length,f=0,d=Be(c,this.__takeCount__);if(!n||!r&&i==c&&d==c)return Fs(t,this.__actions__);var p=[];t:while(c--&&f<d){u+=e;var g=-1,m=t[u];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==P)m=w;else if(!w){if(_==D)continue t;break t}}p[f++]=m}return p}function Nr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Dr(){this.__data__=an?an(null):{},this.size=0}function Pr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Lr(t){var e=this.__data__;if(an){var n=e[t];return n===h?i:n}return fe.call(e,t)?e[t]:i}function Mr(t){var e=this.__data__;return an?e[t]!==i:fe.call(e,t)}function Ur(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=an&&e===i?h:e,this}function Vr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Fr(){this.__data__=[],this.size=0}function jr(t){var e=this.__data__,n=hi(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ae.call(e,n,1),--this.size,!0}function $r(t){var e=this.__data__,n=hi(e,t);return n<0?i:e[n][1]}function Br(t){return hi(this.__data__,t)>-1}function zr(t,e){var n=this.__data__,r=hi(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function qr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Gr(){this.size=0,this.__data__={hash:new Nr,map:new(tn||Vr),string:new Nr}}function Wr(t){var e=Wo(this,t)["delete"](t);return this.size-=e?1:0,e}function Hr(t){return Wo(this,t).get(t)}function Kr(t){return Wo(this,t).has(t)}function Qr(t,e){var n=Wo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Jr(t){var e=-1,n=null==t?0:t.length;this.__data__=new qr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,h),this}function Yr(t){return this.__data__.has(t)}function Zr(t){var e=this.__data__=new Vr(t);this.size=e.size}function ti(){this.__data__=new Vr,this.size=0}function ei(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ni(t){return this.__data__.get(t)}function ri(t){return this.__data__.has(t)}function ii(t,e){var n=this.__data__;if(n instanceof Vr){var r=n.__data__;if(!tn||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qr(r)}return n.set(t,e),this.size=n.size,this}function si(t,e){var n=ul(t),r=!n&&cl(t),i=!n&&!r&&pl(t),s=!n&&!r&&!i&&$l(t),o=n||r||i||s,a=o?Hn(t.length,se):[],c=a.length;for(var u in t)!e&&!fe.call(t,u)||o&&("length"==u||i&&("offset"==u||"parent"==u)||s&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||aa(u,c))||a.push(u);return a}function oi(t){var e=t.length;return e?t[ys(0,e-1)]:i}function ai(t,e){return Oa(io(t),vi(e,0,t.length))}function ci(t){return Oa(io(t))}function ui(t,e,n){(n!==i&&!sl(t[e],n)||n===i&&!(e in t))&&gi(t,e,n)}function li(t,e,n){var r=t[e];fe.call(t,e)&&sl(r,n)&&(n!==i||e in t)||gi(t,e,n)}function hi(t,e){var n=t.length;while(n--)if(sl(t[n][0],e))return n;return-1}function fi(t,e,n,r){return Ti(t,(function(t,i,s){e(r,t,n(t),s)})),r}function di(t,e){return t&&so(e,Th(e),t)}function pi(t,e){return t&&so(e,Ih(e),t)}function gi(t,e,n){"__proto__"==e&&Oe?Oe(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function mi(t,e){var r=-1,s=e.length,o=n(s),a=null==t;while(++r<s)o[r]=a?i:vh(t,e[r]);return o}function vi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function yi(t,e,n,r,s,o){var a,c=e&p,u=e&g,l=e&m;if(n&&(a=s?n(t,r,s,o):n(t)),a!==i)return a;if(!Sl(t))return t;var h=ul(t);if(h){if(a=na(t),!c)return io(t,a)}else{var f=Yo(t),d=f==X||f==Y;if(pl(t))return Ks(t,c);if(f==nt||f==q||d&&!s){if(a=u||d?{}:ra(t),!c)return u?ao(t,pi(a,t)):oo(t,di(a,t))}else{if(!Ye[f])return s?t:{};a=ia(t,f,c)}}o||(o=new Zr);var v=o.get(t);if(v)return v;o.set(t,a),Vl(t)?t.forEach((function(r){a.add(yi(r,e,n,r,t,o))})):Cl(t)&&t.forEach((function(r,i){a.set(i,yi(r,e,n,i,t,o))}));var y=l?u?$o:jo:u?Ih:Th,_=h?i:y(t);return En(_||t,(function(r,i){_&&(i=r,r=t[i]),li(a,i,yi(r,e,n,i,t,o))})),a}function _i(t){var e=Th(t);return function(n){return wi(n,t,e)}}function wi(t,e,n){var r=n.length;if(null==t)return!r;t=re(t);while(r--){var s=n[r],o=e[s],a=t[s];if(a===i&&!(s in t)||!o(a))return!1}return!0}function bi(t,e,n){if("function"!=typeof t)throw new oe(c);return Aa((function(){t.apply(i,n)}),e)}function Ei(t,e,n,r){var i=-1,s=An,a=!0,c=t.length,u=[],l=e.length;if(!c)return u;n&&(e=kn(e,Jn(n))),r?(s=Cn,a=!1):e.length>=o&&(s=Yn,a=!1,e=new Jr(e));t:while(++i<c){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;u.push(h)}else s(e,f,r)||u.push(h)}return u}Tr.templateSettings={escape:Ot,evaluate:xt,interpolate:Nt,variable:"",imports:{_:Tr}},Tr.prototype=Ar.prototype,Tr.prototype.constructor=Tr,Cr.prototype=Sr(Ar.prototype),Cr.prototype.constructor=Cr,kr.prototype=Sr(Ar.prototype),kr.prototype.constructor=kr,Nr.prototype.clear=Dr,Nr.prototype["delete"]=Pr,Nr.prototype.get=Lr,Nr.prototype.has=Mr,Nr.prototype.set=Ur,Vr.prototype.clear=Fr,Vr.prototype["delete"]=jr,Vr.prototype.get=$r,Vr.prototype.has=Br,Vr.prototype.set=zr,qr.prototype.clear=Gr,qr.prototype["delete"]=Wr,qr.prototype.get=Hr,qr.prototype.has=Kr,qr.prototype.set=Qr,Jr.prototype.add=Jr.prototype.push=Xr,Jr.prototype.has=Yr,Zr.prototype.clear=ti,Zr.prototype["delete"]=ei,Zr.prototype.get=ni,Zr.prototype.has=ri,Zr.prototype.set=ii;var Ti=lo(Ni),Ii=lo(Di,!0);function Si(t,e){var n=!0;return Ti(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Ai(t,e,n){var r=-1,s=t.length;while(++r<s){var o=t[r],a=e(o);if(null!=a&&(c===i?a===a&&!jl(a):n(a,c)))var c=a,u=o}return u}function Ci(t,e,n,r){var s=t.length;n=Ql(n),n<0&&(n=-n>s?0:s+n),r=r===i||r>s?s:Ql(r),r<0&&(r+=s),r=n>r?0:Jl(r);while(n<r)t[n++]=e;return t}function ki(t,e){var n=[];return Ti(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function Ri(t,e,n,r,i){var s=-1,o=t.length;n||(n=oa),i||(i=[]);while(++s<o){var a=t[s];e>0&&n(a)?e>1?Ri(a,e-1,n,r,i):Rn(i,a):r||(i[i.length]=a)}return i}var Oi=ho(),xi=ho(!0);function Ni(t,e){return t&&Oi(t,e,Th)}function Di(t,e){return t&&xi(t,e,Th)}function Pi(t,e){return Sn(e,(function(e){return El(t[e])}))}function Li(t,e){e=qs(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[Na(e[n++])];return n&&n==r?t:i}function Mi(t,e,n){var r=e(t);return ul(t)?r:Rn(r,n(t))}function Ui(t){return null==t?t===i?ut:et:Re&&Re in re(t)?Qo(t):wa(t)}function Vi(t,e){return t>e}function Fi(t,e){return null!=t&&fe.call(t,e)}function ji(t,e){return null!=t&&e in re(t)}function $i(t,e,n){return t>=Be(e,n)&&t<$e(e,n)}function Bi(t,e,r){var s=r?Cn:An,o=t[0].length,a=t.length,c=a,u=n(a),l=1/0,h=[];while(c--){var f=t[c];c&&e&&(f=kn(f,Jn(e))),l=Be(f.length,l),u[c]=!r&&(e||o>=120&&f.length>=120)?new Jr(c&&f):i}f=t[0];var d=-1,p=u[0];t:while(++d<o&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):s(h,m,r))){c=a;while(--c){var v=u[c];if(!(v?Yn(v,m):s(t[c],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function zi(t,e,n,r){return Ni(t,(function(t,i,s){e(r,n(t),i,s)})),r}function qi(t,e,n){e=qs(e,t),t=Ea(t,e);var r=null==t?t:t[Na(oc(e))];return null==r?i:wn(r,t,n)}function Gi(t){return Al(t)&&Ui(t)==q}function Wi(t){return Al(t)&&Ui(t)==ft}function Hi(t){return Al(t)&&Ui(t)==K}function Ki(t,e,n,r,i){return t===e||(null==t||null==e||!Al(t)&&!Al(e)?t!==t&&e!==e:Qi(t,e,n,r,Ki,i))}function Qi(t,e,n,r,i,s){var o=ul(t),a=ul(e),c=o?G:Yo(t),u=a?G:Yo(e);c=c==q?nt:c,u=u==q?nt:u;var l=c==nt,h=u==nt,f=c==u;if(f&&pl(t)){if(!pl(e))return!1;o=!0,l=!1}if(f&&!l)return s||(s=new Zr),o||$l(t)?Mo(t,e,n,r,i,s):Uo(t,e,c,n,r,i,s);if(!(n&v)){var d=l&&fe.call(t,"__wrapped__"),p=h&&fe.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,m=p?e.value():e;return s||(s=new Zr),i(g,m,n,r,s)}}return!!f&&(s||(s=new Zr),Vo(t,e,n,r,i,s))}function Ji(t){return Al(t)&&Yo(t)==Z}function Xi(t,e,n,r){var s=n.length,o=s,a=!r;if(null==t)return!o;t=re(t);while(s--){var c=n[s];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}while(++s<o){c=n[s];var u=c[0],l=t[u],h=c[1];if(a&&c[2]){if(l===i&&!(u in t))return!1}else{var f=new Zr;if(r)var d=r(l,h,u,t,e,f);if(!(d===i?Ki(h,l,v|y,r,f):d))return!1}}return!0}function Yi(t){if(!Sl(t)||fa(t))return!1;var e=El(t)?ye:Jt;return e.test(Da(t))}function Zi(t){return Al(t)&&Ui(t)==st}function ts(t){return Al(t)&&Yo(t)==ot}function es(t){return Al(t)&&Il(t.length)&&!!Xe[Ui(t)]}function ns(t){return"function"==typeof t?t:null==t?Nf:"object"==typeof t?ul(t)?cs(t[0],t[1]):as(t):Gf(t)}function rs(t){if(!pa(t))return je(t);var e=[];for(var n in re(t))fe.call(t,n)&&"constructor"!=n&&e.push(n);return e}function is(t){if(!Sl(t))return _a(t);var e=pa(t),n=[];for(var r in t)("constructor"!=r||!e&&fe.call(t,r))&&n.push(r);return n}function ss(t,e){return t<e}function os(t,e){var r=-1,i=hl(t)?n(t.length):[];return Ti(t,(function(t,n,s){i[++r]=e(t,n,s)})),i}function as(t){var e=Ho(t);return 1==e.length&&e[0][2]?ma(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function cs(t,e){return ua(t)&&ga(e)?ma(Na(t),e):function(n){var r=vh(n,t);return r===i&&r===e?_h(n,t):Ki(e,r,v|y)}}function us(t,e,n,r,s){t!==e&&Oi(e,(function(o,a){if(s||(s=new Zr),Sl(o))ls(t,e,a,n,us,r,s);else{var c=r?r(Ia(t,a),o,a+"",t,e,s):i;c===i&&(c=o),ui(t,a,c)}}),Ih)}function ls(t,e,n,r,s,o,a){var c=Ia(t,n),u=Ia(e,n),l=a.get(u);if(l)ui(t,n,l);else{var h=o?o(c,u,n+"",t,e,a):i,f=h===i;if(f){var d=ul(u),p=!d&&pl(u),g=!d&&!p&&$l(u);h=u,d||p||g?ul(c)?h=c:fl(c)?h=io(c):p?(f=!1,h=Ks(u,!0)):g?(f=!1,h=Zs(u,!0)):h=[]:Ll(u)||cl(u)?(h=c,cl(c)?h=Yl(c):Sl(c)&&!El(c)||(h=ra(u))):f=!1}f&&(a.set(u,h),s(h,u,r,o,a),a["delete"](u)),ui(t,n,h)}}function hs(t,e){var n=t.length;if(n)return e+=e<0?n:0,aa(e,n)?t[e]:i}function fs(t,e,n){e=e.length?kn(e,(function(t){return ul(t)?function(e){return Li(e,1===t.length?t[0]:t)}:t})):[Nf];var r=-1;e=kn(e,Jn(Go()));var i=os(t,(function(t,n,i){var s=kn(e,(function(e){return e(t)}));return{criteria:s,index:++r,value:t}}));return Gn(i,(function(t,e){return eo(t,e,n)}))}function ds(t,e){return ps(t,e,(function(e,n){return _h(t,n)}))}function ps(t,e,n){var r=-1,i=e.length,s={};while(++r<i){var o=e[r],a=Li(t,o);n(a,o)&&Is(s,qs(o,t),a)}return s}function gs(t){return function(e){return Li(e,t)}}function ms(t,e,n,r){var i=r?Fn:Vn,s=-1,o=e.length,a=t;t===e&&(e=io(e)),n&&(a=kn(t,Jn(n)));while(++s<o){var c=0,u=e[s],l=n?n(u):u;while((c=i(a,l,c,r))>-1)a!==t&&Ae.call(a,c,1),Ae.call(t,c,1)}return t}function vs(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==s){var s=i;aa(i)?Ae.call(t,i,1):Ms(t,i)}}return t}function ys(t,e){return t+Le(He()*(e-t+1))}function _s(t,e,r,i){var s=-1,o=$e(Pe((e-t)/(r||1)),0),a=n(o);while(o--)a[i?o:++s]=t,t+=r;return a}function ws(t,e){var n="";if(!t||e<1||e>U)return n;do{e%2&&(n+=t),e=Le(e/2),e&&(t+=t)}while(e);return n}function bs(t,e){return Ca(ba(t,e,Nf),t+"")}function Es(t){return oi(Bh(t))}function Ts(t,e){var n=Bh(t);return Oa(n,vi(e,0,n.length))}function Is(t,e,n,r){if(!Sl(t))return t;e=qs(e,t);var s=-1,o=e.length,a=o-1,c=t;while(null!=c&&++s<o){var u=Na(e[s]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return t;if(s!=a){var h=c[u];l=r?r(h,u,c):i,l===i&&(l=Sl(h)?h:aa(e[s+1])?[]:{})}li(c,u,l),c=c[u]}return t}var Ss=un?function(t,e){return un.set(t,e),t}:Nf,As=Oe?function(t,e){return Oe(t,"toString",{configurable:!0,enumerable:!1,value:kf(e),writable:!0})}:Nf;function Cs(t){return Oa(Bh(t))}function ks(t,e,r){var i=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;var o=n(s);while(++i<s)o[i]=t[i+e];return o}function Rs(t,e){var n;return Ti(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Os(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=B){while(r<i){var s=r+i>>>1,o=t[s];null!==o&&!jl(o)&&(n?o<=e:o<e)?r=s+1:i=s}return i}return xs(t,e,Nf,n)}function xs(t,e,n,r){var s=0,o=null==t?0:t.length;if(0===o)return 0;e=n(e);var a=e!==e,c=null===e,u=jl(e),l=e===i;while(s<o){var h=Le((s+o)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=jl(f);if(a)var v=r||g;else v=l?g&&(r||d):c?g&&d&&(r||!p):u?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?s=h+1:o=h}return Be(o,$)}function Ns(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n],a=e?e(o):o;if(!n||!sl(a,c)){var c=a;s[i++]=0===o?0:o}}return s}function Ds(t){return"number"==typeof t?t:jl(t)?F:+t}function Ps(t){if("string"==typeof t)return t;if(ul(t))return kn(t,Ps)+"";if(jl(t))return br?br.call(t):"";var e=t+"";return"0"==e&&1/t==-M?"-0":e}function Ls(t,e,n){var r=-1,i=An,s=t.length,a=!0,c=[],u=c;if(n)a=!1,i=Cn;else if(s>=o){var l=e?null:Oo(t);if(l)return fr(l);a=!1,i=Yn,u=new Jr}else u=e?[]:c;t:while(++r<s){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=u.length;while(d--)if(u[d]===f)continue t;e&&u.push(f),c.push(h)}else i(u,f,n)||(u!==c&&u.push(f),c.push(h))}return c}function Ms(t,e){e=qs(e,t);var n=-1,r=e.length;if(!r)return!0;while(++n<r){var i=Na(e[n]);if("__proto__"===i&&!fe.call(t,"__proto__"))return!1;if(("constructor"===i||"prototype"===i)&&n<r-1)return!1}var s=Ea(t,e);return null==s||delete s[Na(oc(e))]}function Us(t,e,n,r){return Is(t,e,n(Li(t,e)),r)}function Vs(t,e,n,r){var i=t.length,s=r?i:-1;while((r?s--:++s<i)&&e(t[s],s,t));return n?ks(t,r?0:s,r?s+1:i):ks(t,r?s+1:0,r?i:s)}function Fs(t,e){var n=t;return n instanceof kr&&(n=n.value()),On(e,(function(t,e){return e.func.apply(e.thisArg,Rn([t],e.args))}),n)}function js(t,e,r){var i=t.length;if(i<2)return i?Ls(t[0]):[];var s=-1,o=n(i);while(++s<i){var a=t[s],c=-1;while(++c<i)c!=s&&(o[s]=Ei(o[s]||a,t[c],e,r))}return Ls(Ri(o,1),e,r)}function $s(t,e,n){var r=-1,s=t.length,o=e.length,a={};while(++r<s){var c=r<o?e[r]:i;n(a,t[r],c)}return a}function Bs(t){return fl(t)?t:[]}function zs(t){return"function"==typeof t?t:Nf}function qs(t,e){return ul(t)?t:ua(t,e)?[t]:xa(th(t))}var Gs=bs;function Ws(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:ks(t,e,n)}var Hs=xe||function(t){return cn.clearTimeout(t)};function Ks(t,e){if(e)return t.slice();var n=t.length,r=Ee?Ee(n):new t.constructor(n);return t.copy(r),r}function Qs(t){var e=new t.constructor(t.byteLength);return new be(e).set(new be(t)),e}function Js(t,e){var n=e?Qs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Xs(t){var e=new t.constructor(t.source,Ht.exec(t));return e.lastIndex=t.lastIndex,e}function Ys(t){return wr?re(wr.call(t)):{}}function Zs(t,e){var n=e?Qs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function to(t,e){if(t!==e){var n=t!==i,r=null===t,s=t===t,o=jl(t),a=e!==i,c=null===e,u=e===e,l=jl(e);if(!c&&!l&&!o&&t>e||o&&a&&u&&!c&&!l||r&&a&&u||!n&&u||!s)return 1;if(!r&&!o&&!l&&t<e||l&&n&&s&&!r&&!o||c&&n&&s||!a&&s||!u)return-1}return 0}function eo(t,e,n){var r=-1,i=t.criteria,s=e.criteria,o=i.length,a=n.length;while(++r<o){var c=to(i[r],s[r]);if(c){if(r>=a)return c;var u=n[r];return c*("desc"==u?-1:1)}}return t.index-e.index}function no(t,e,r,i){var s=-1,o=t.length,a=r.length,c=-1,u=e.length,l=$e(o-a,0),h=n(u+l),f=!i;while(++c<u)h[c]=e[c];while(++s<a)(f||s<o)&&(h[r[s]]=t[s]);while(l--)h[c++]=t[s++];return h}function ro(t,e,r,i){var s=-1,o=t.length,a=-1,c=r.length,u=-1,l=e.length,h=$e(o-c,0),f=n(h+l),d=!i;while(++s<h)f[s]=t[s];var p=s;while(++u<l)f[p+u]=e[u];while(++a<c)(d||s<o)&&(f[p+r[a]]=t[s++]);return f}function io(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function so(t,e,n,r){var s=!n;n||(n={});var o=-1,a=e.length;while(++o<a){var c=e[o],u=r?r(n[c],t[c],c,n,t):i;u===i&&(u=t[c]),s?gi(n,c,u):li(n,c,u)}return n}function oo(t,e){return so(t,Jo(t),e)}function ao(t,e){return so(t,Xo(t),e)}function co(t,e){return function(n,r){var i=ul(n)?bn:fi,s=e?e():{};return i(n,t,Go(r,2),s)}}function uo(t){return bs((function(e,n){var r=-1,s=n.length,o=s>1?n[s-1]:i,a=s>2?n[2]:i;o=t.length>3&&"function"==typeof o?(s--,o):i,a&&ca(n[0],n[1],a)&&(o=s<3?i:o,s=1),e=re(e);while(++r<s){var c=n[r];c&&t(e,c,r,o)}return e}))}function lo(t,e){return function(n,r){if(null==n)return n;if(!hl(n))return t(n,r);var i=n.length,s=e?i:-1,o=re(n);while(e?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}function ho(t){return function(e,n,r){var i=-1,s=re(e),o=r(e),a=o.length;while(a--){var c=o[t?a:++i];if(!1===n(s[c],c,s))break}return e}}function fo(t,e,n){var r=e&_,i=mo(t);function s(){var e=this&&this!==cn&&this instanceof s?i:t;return e.apply(r?n:this,arguments)}return s}function po(t){return function(e){e=th(e);var n=or(e)?vr(e):i,r=n?n[0]:e.charAt(0),s=n?Ws(n,1).join(""):e.slice(1);return r[t]()+s}}function go(t){return function(e){return On(Tf(Qh(e).replace(ze,"")),t,"")}}function mo(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Sr(t.prototype),r=t.apply(n,e);return Sl(r)?r:n}}function vo(t,e,r){var s=mo(t);function o(){var a=arguments.length,c=n(a),u=a,l=qo(o);while(u--)c[u]=arguments[u];var h=a<3&&c[0]!==l&&c[a-1]!==l?[]:hr(c,l);if(a-=h.length,a<r)return ko(t,e,wo,o.placeholder,i,c,h,i,i,r-a);var f=this&&this!==cn&&this instanceof o?s:t;return wn(f,this,c)}return o}function yo(t){return function(e,n,r){var s=re(e);if(!hl(e)){var o=Go(n,3);e=Th(e),n=function(t){return o(s[t],t,s)}}var a=t(e,n,r);return a>-1?s[o?e[a]:a]:i}}function _o(t){return Fo((function(e){var n=e.length,r=n,s=Cr.prototype.thru;t&&e.reverse();while(r--){var o=e[r];if("function"!=typeof o)throw new oe(c);if(s&&!a&&"wrapper"==zo(o))var a=new Cr([],!0)}r=a?r:n;while(++r<n){o=e[r];var u=zo(o),l="wrapper"==u?Bo(o):i;a=l&&ha(l[0])&&l[1]==(A|E|I|C)&&!l[4].length&&1==l[9]?a[zo(l[0])].apply(a,l[3]):1==o.length&&ha(o)?a[u]():a.thru(o)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,s=n?e[i].apply(this,t):r;while(++i<n)s=e[i].call(this,s);return s}}))}function wo(t,e,r,s,o,a,c,u,l,h){var f=e&A,d=e&_,p=e&w,g=e&(E|T),m=e&k,v=p?i:mo(t);function y(){var i=arguments.length,_=n(i),w=i;while(w--)_[w]=arguments[w];if(g)var b=qo(y),E=er(_,b);if(s&&(_=no(_,s,o,g)),a&&(_=ro(_,a,c,g)),i-=E,g&&i<h){var T=hr(_,b);return ko(t,e,wo,y.placeholder,r,_,T,u,l,h-i)}var I=d?r:this,S=p?I[t]:t;return i=_.length,u?_=Ta(_,u):m&&i>1&&_.reverse(),f&&l<i&&(_.length=l),this&&this!==cn&&this instanceof y&&(S=v||mo(S)),S.apply(I,_)}return y}function bo(t,e){return function(n,r){return zi(n,t,e(r),{})}}function Eo(t,e){return function(n,r){var s;if(n===i&&r===i)return e;if(n!==i&&(s=n),r!==i){if(s===i)return r;"string"==typeof n||"string"==typeof r?(n=Ps(n),r=Ps(r)):(n=Ds(n),r=Ds(r)),s=t(n,r)}return s}}function To(t){return Fo((function(e){return e=kn(e,Jn(Go())),bs((function(n){var r=this;return t(e,(function(t){return wn(t,r,n)}))}))}))}function Io(t,e){e=e===i?" ":Ps(e);var n=e.length;if(n<2)return n?ws(e,t):e;var r=ws(e,Pe(t/mr(e)));return or(e)?Ws(vr(r),0,t).join(""):r.slice(0,t)}function So(t,e,r,i){var s=e&_,o=mo(t);function a(){var e=-1,c=arguments.length,u=-1,l=i.length,h=n(l+c),f=this&&this!==cn&&this instanceof a?o:t;while(++u<l)h[u]=i[u];while(c--)h[u++]=arguments[++e];return wn(f,s?r:this,h)}return a}function Ao(t){return function(e,n,r){return r&&"number"!=typeof r&&ca(e,n,r)&&(n=r=i),e=Kl(e),n===i?(n=e,e=0):n=Kl(n),r=r===i?e<n?1:-1:Kl(r),_s(e,n,r,t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function ko(t,e,n,r,s,o,a,c,u,l){var h=e&E,f=h?a:i,d=h?i:a,p=h?o:i,g=h?i:o;e|=h?I:S,e&=~(h?S:I),e&b||(e&=~(_|w));var m=[t,e,s,p,f,g,d,c,u,l],v=n.apply(i,m);return ha(t)&&Sa(v,m),v.placeholder=r,ka(v,t,e)}function Ro(t){var e=ne[t];return function(t,n){if(t=Xl(t),n=null==n?0:Be(Ql(n),292),n&&Ve(t)){var r=(th(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(th(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Oo=nn&&1/fr(new nn([,-0]))[1]==M?function(t){return new nn(t)}:jf;function xo(t){return function(e){var n=Yo(e);return n==Z?ur(e):n==ot?dr(e):Kn(e,t(e))}}function No(t,e,n,r,s,o,a,u){var l=e&w;if(!l&&"function"!=typeof t)throw new oe(c);var h=r?r.length:0;if(h||(e&=~(I|S),r=s=i),a=a===i?a:$e(Ql(a),0),u=u===i?u:Ql(u),h-=s?s.length:0,e&S){var f=r,d=s;r=s=i}var p=l?i:Bo(t),g=[t,e,n,r,s,f,d,o,a,u];if(p&&ya(g,p),t=g[0],e=g[1],n=g[2],r=g[3],s=g[4],u=g[9]=g[9]===i?l?0:t.length:$e(g[9]-h,0),!u&&e&(E|T)&&(e&=~(E|T)),e&&e!=_)m=e==E||e==T?vo(t,e,u):e!=I&&e!=(_|I)||s.length?wo.apply(i,g):So(t,e,n,r);else var m=fo(t,e,n);var v=p?Ss:Sa;return ka(v(m,g),t,e)}function Do(t,e,n,r){return t===i||sl(t,ue[n])&&!fe.call(r,n)?e:t}function Po(t,e,n,r,s,o){return Sl(t)&&Sl(e)&&(o.set(e,t),us(t,e,i,Po,o),o["delete"](e)),t}function Lo(t){return Ll(t)?i:t}function Mo(t,e,n,r,s,o){var a=n&v,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var l=o.get(t),h=o.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&y?new Jr:i;o.set(t,e),o.set(e,t);while(++f<c){var g=t[f],m=e[f];if(r)var _=a?r(m,g,f,e,t,o):r(g,m,f,t,e,o);if(_!==i){if(_)continue;d=!1;break}if(p){if(!Nn(e,(function(t,e){if(!Yn(p,e)&&(g===t||s(g,t,n,r,o)))return p.push(e)}))){d=!1;break}}else if(g!==m&&!s(g,m,n,r,o)){d=!1;break}}return o["delete"](t),o["delete"](e),d}function Uo(t,e,n,r,i,s,o){switch(n){case dt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ft:return!(t.byteLength!=e.byteLength||!s(new be(t),new be(e)));case H:case K:case tt:return sl(+t,+e);case J:return t.name==e.name&&t.message==e.message;case st:case at:return t==e+"";case Z:var a=ur;case ot:var c=r&v;if(a||(a=fr),t.size!=e.size&&!c)return!1;var u=o.get(t);if(u)return u==e;r|=y,o.set(t,e);var l=Mo(a(t),a(e),r,i,s,o);return o["delete"](t),l;case ct:if(wr)return wr.call(t)==wr.call(e)}return!1}function Vo(t,e,n,r,s,o){var a=n&v,c=jo(t),u=c.length,l=jo(e),h=l.length;if(u!=h&&!a)return!1;var f=u;while(f--){var d=c[f];if(!(a?d in e:fe.call(e,d)))return!1}var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var m=!0;o.set(t,e),o.set(e,t);var y=a;while(++f<u){d=c[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,o):r(_,w,d,t,e,o);if(!(b===i?_===w||s(_,w,n,r,o):b)){m=!1;break}y||(y="constructor"==d)}if(m&&!y){var E=t.constructor,T=e.constructor;E==T||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof T&&T instanceof T||(m=!1)}return o["delete"](t),o["delete"](e),m}function Fo(t){return Ca(ba(t,i,Qa),t+"")}function jo(t){return Mi(t,Th,Jo)}function $o(t){return Mi(t,Ih,Xo)}var Bo=un?function(t){return un.get(t)}:jf;function zo(t){var e=t.name+"",n=ln[e],r=fe.call(ln,e)?n.length:0;while(r--){var i=n[r],s=i.func;if(null==s||s==t)return i.name}return e}function qo(t){var e=fe.call(Tr,"placeholder")?Tr:t;return e.placeholder}function Go(){var t=Tr.iteratee||Df;return t=t===Df?ns:t,arguments.length?t(arguments[0],arguments[1]):t}function Wo(t,e){var n=t.__data__;return la(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ho(t){var e=Th(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,ga(i)]}return e}function Ko(t,e){var n=sr(t,e);return Yi(n)?n:i}function Qo(t){var e=fe.call(t,Re),n=t[Re];try{t[Re]=i;var r=!0}catch(o){}var s=ge.call(t);return r&&(e?t[Re]=n:delete t[Re]),s}var Jo=Me?function(t){return null==t?[]:(t=re(t),Sn(Me(t),(function(e){return Se.call(t,e)})))}:Qf,Xo=Me?function(t){var e=[];while(t)Rn(e,Jo(t)),t=Te(t);return e}:Qf,Yo=Ui;function Zo(t,e,n){var r=-1,i=n.length;while(++r<i){var s=n[r],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Be(e,t+o);break;case"takeRight":t=$e(t,e-o);break}}return{start:t,end:e}}function ta(t){var e=t.match($t);return e?e[1].split(Bt):[]}function ea(t,e,n){e=qs(e,t);var r=-1,i=e.length,s=!1;while(++r<i){var o=Na(e[r]);if(!(s=null!=t&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=null==t?0:t.length,!!i&&Il(i)&&aa(o,i)&&(ul(t)||cl(t)))}function na(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&fe.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function ra(t){return"function"!=typeof t.constructor||pa(t)?{}:Sr(Te(t))}function ia(t,e,n){var r=t.constructor;switch(e){case ft:return Qs(t);case H:case K:return new r(+t);case dt:return Js(t,n);case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:case Et:return Zs(t,n);case Z:return new r;case tt:case at:return new r(t);case st:return Xs(t);case ot:return new r;case ct:return Ys(t)}}function sa(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(jt,"{\n/* [wrapped with "+e+"] */\n")}function oa(t){return ul(t)||cl(t)||!!(Ce&&t&&t[Ce])}function aa(t,e){var n=typeof t;return e=null==e?U:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function ca(t,e,n){if(!Sl(n))return!1;var r=typeof e;return!!("number"==r?hl(n)&&aa(e,n.length):"string"==r&&e in n)&&sl(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!jl(t))||(Pt.test(t)||!Dt.test(t)||null!=e&&t in re(e))}function la(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function ha(t){var e=zo(t),n=Tr[e];if("function"!=typeof n||!(e in kr.prototype))return!1;if(t===n)return!0;var r=Bo(n);return!!r&&t===r[0]}function fa(t){return!!pe&&pe in t}(Ze&&Yo(new Ze(new ArrayBuffer(1)))!=dt||tn&&Yo(new tn)!=Z||en&&Yo(en.resolve())!=rt||nn&&Yo(new nn)!=ot||on&&Yo(new on)!=lt)&&(Yo=function(t){var e=Ui(t),n=e==nt?t.constructor:i,r=n?Da(n):"";if(r)switch(r){case fn:return dt;case dn:return Z;case Dn:return rt;case Pn:return ot;case zn:return lt}return e});var da=le?El:Jf;function pa(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function ga(t){return t===t&&!Sl(t)}function ma(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in re(n)))}}function va(t){var e=$u(t,(function(t){return n.size===f&&n.clear(),t})),n=e.cache;return e}function ya(t,e){var n=t[1],r=e[1],i=n|r,s=i<(_|w|A),o=r==A&&n==E||r==A&&n==C&&t[7].length<=e[8]||r==(A|C)&&e[7].length<=e[8]&&n==E;if(!s&&!o)return t;r&_&&(t[2]=e[2],i|=n&_?0:b);var a=e[3];if(a){var c=t[3];t[3]=c?no(c,a,e[4]):a,t[4]=c?hr(t[3],d):e[4]}return a=e[5],a&&(c=t[5],t[5]=c?ro(c,a,e[6]):a,t[6]=c?hr(t[5],d):e[6]),a=e[7],a&&(t[7]=a),r&A&&(t[8]=null==t[8]?e[8]:Be(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function _a(t){var e=[];if(null!=t)for(var n in re(t))e.push(n);return e}function wa(t){return ge.call(t)}function ba(t,e,r){return e=$e(e===i?t.length-1:e,0),function(){var i=arguments,s=-1,o=$e(i.length-e,0),a=n(o);while(++s<o)a[s]=i[e+s];s=-1;var c=n(e+1);while(++s<e)c[s]=i[s];return c[e]=r(a),wn(t,this,c)}}function Ea(t,e){return e.length<2?t:Li(t,ks(e,0,-1))}function Ta(t,e){var n=t.length,r=Be(e.length,n),s=io(t);while(r--){var o=e[r];t[r]=aa(o,n)?s[o]:i}return t}function Ia(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Sa=Ra(Ss),Aa=De||function(t,e){return cn.setTimeout(t,e)},Ca=Ra(As);function ka(t,e,n){var r=e+"";return Ca(t,sa(r,Pa(ta(r),n)))}function Ra(t){var e=0,n=0;return function(){var r=Ge(),s=N-(r-n);if(n=r,s>0){if(++e>=x)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Oa(t,e){var n=-1,r=t.length,s=r-1;e=e===i?r:e;while(++n<e){var o=ys(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}var xa=va((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Lt,(function(t,n,r,i){e.push(r?i.replace(Gt,"$1"):n||t)})),e}));function Na(t){if("string"==typeof t||jl(t))return t;var e=t+"";return"0"==e&&1/t==-M?"-0":e}function Da(t){if(null!=t){try{return he.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Pa(t,e){return En(z,(function(n){var r="_."+n[0];e&n[1]&&!An(t,r)&&t.push(r)})),t.sort()}function La(t){if(t instanceof kr)return t.clone();var e=new Cr(t.__wrapped__,t.__chain__);return e.__actions__=io(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Ma(t,e,r){e=(r?ca(t,e,r):e===i)?1:$e(Ql(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];var o=0,a=0,c=n(Pe(s/e));while(o<s)c[a++]=ks(t,o,o+=e);return c}function Ua(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var s=t[e];s&&(i[r++]=s)}return i}function Va(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return Rn(ul(r)?io(r):[r],Ri(e,1))}var Fa=bs((function(t,e){return fl(t)?Ei(t,Ri(e,1,fl,!0)):[]})),ja=bs((function(t,e){var n=oc(e);return fl(n)&&(n=i),fl(t)?Ei(t,Ri(e,1,fl,!0),Go(n,2)):[]})),$a=bs((function(t,e){var n=oc(e);return fl(n)&&(n=i),fl(t)?Ei(t,Ri(e,1,fl,!0),i,n):[]}));function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Ql(e),ks(t,e<0?0:e,r)):[]}function za(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Ql(e),e=r-e,ks(t,0,e<0?0:e)):[]}function qa(t,e){return t&&t.length?Vs(t,Go(e,3),!0,!0):[]}function Ga(t,e){return t&&t.length?Vs(t,Go(e,3),!0):[]}function Wa(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&ca(t,e,n)&&(n=0,r=i),Ci(t,e,n,r)):[]}function Ha(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Ql(n);return i<0&&(i=$e(r+i,0)),Un(t,Go(e,3),i)}function Ka(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r-1;return n!==i&&(s=Ql(n),s=n<0?$e(r+s,0):Be(s,r-1)),Un(t,Go(e,3),s,!0)}function Qa(t){var e=null==t?0:t.length;return e?Ri(t,1):[]}function Ja(t){var e=null==t?0:t.length;return e?Ri(t,M):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Ql(e),Ri(t,e)):[]}function Ya(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];gi(r,i[0],i[1])}return r}function Za(t){return t&&t.length?t[0]:i}function tc(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Ql(n);return i<0&&(i=$e(r+i,0)),Vn(t,e,i)}function ec(t){var e=null==t?0:t.length;return e?ks(t,0,-1):[]}var nc=bs((function(t){var e=kn(t,Bs);return e.length&&e[0]===t[0]?Bi(e):[]})),rc=bs((function(t){var e=oc(t),n=kn(t,Bs);return e===oc(n)?e=i:n.pop(),n.length&&n[0]===t[0]?Bi(n,Go(e,2)):[]})),ic=bs((function(t){var e=oc(t),n=kn(t,Bs);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?Bi(n,i,e):[]}));function sc(t,e){return null==t?"":Fe.call(t,e)}function oc(t){var e=null==t?0:t.length;return e?t[e-1]:i}function ac(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r;return n!==i&&(s=Ql(n),s=s<0?$e(r+s,0):Be(s,r-1)),e===e?gr(t,e,s):Un(t,jn,s,!0)}function cc(t,e){return t&&t.length?hs(t,Ql(e)):i}var uc=bs(lc);function lc(t,e){return t&&t.length&&e&&e.length?ms(t,e):t}function hc(t,e,n){return t&&t.length&&e&&e.length?ms(t,e,Go(n,2)):t}function fc(t,e,n){return t&&t.length&&e&&e.length?ms(t,e,i,n):t}var dc=Fo((function(t,e){var n=null==t?0:t.length,r=mi(t,e);return vs(t,kn(e,(function(t){return aa(t,n)?+t:t})).sort(to)),r}));function pc(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],s=t.length;e=Go(e,3);while(++r<s){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r))}return vs(t,i),n}function gc(t){return null==t?t:Ke.call(t)}function mc(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&ca(t,e,n)?(e=0,n=r):(e=null==e?0:Ql(e),n=n===i?r:Ql(n)),ks(t,e,n)):[]}function vc(t,e){return Os(t,e)}function yc(t,e,n){return xs(t,e,Go(n,2))}function _c(t,e){var n=null==t?0:t.length;if(n){var r=Os(t,e);if(r<n&&sl(t[r],e))return r}return-1}function wc(t,e){return Os(t,e,!0)}function bc(t,e,n){return xs(t,e,Go(n,2),!0)}function Ec(t,e){var n=null==t?0:t.length;if(n){var r=Os(t,e,!0)-1;if(sl(t[r],e))return r}return-1}function Tc(t){return t&&t.length?Ns(t):[]}function Ic(t,e){return t&&t.length?Ns(t,Go(e,2)):[]}function Sc(t){var e=null==t?0:t.length;return e?ks(t,1,e):[]}function Ac(t,e,n){return t&&t.length?(e=n||e===i?1:Ql(e),ks(t,0,e<0?0:e)):[]}function Cc(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Ql(e),e=r-e,ks(t,e<0?0:e,r)):[]}function kc(t,e){return t&&t.length?Vs(t,Go(e,3),!1,!0):[]}function Rc(t,e){return t&&t.length?Vs(t,Go(e,3)):[]}var Oc=bs((function(t){return Ls(Ri(t,1,fl,!0))})),xc=bs((function(t){var e=oc(t);return fl(e)&&(e=i),Ls(Ri(t,1,fl,!0),Go(e,2))})),Nc=bs((function(t){var e=oc(t);return e="function"==typeof e?e:i,Ls(Ri(t,1,fl,!0),i,e)}));function Dc(t){return t&&t.length?Ls(t):[]}function Pc(t,e){return t&&t.length?Ls(t,Go(e,2)):[]}function Lc(t,e){return e="function"==typeof e?e:i,t&&t.length?Ls(t,i,e):[]}function Mc(t){if(!t||!t.length)return[];var e=0;return t=Sn(t,(function(t){if(fl(t))return e=$e(t.length,e),!0})),Hn(e,(function(e){return kn(t,Bn(e))}))}function Uc(t,e){if(!t||!t.length)return[];var n=Mc(t);return null==e?n:kn(n,(function(t){return wn(e,i,t)}))}var Vc=bs((function(t,e){return fl(t)?Ei(t,e):[]})),Fc=bs((function(t){return js(Sn(t,fl))})),jc=bs((function(t){var e=oc(t);return fl(e)&&(e=i),js(Sn(t,fl),Go(e,2))})),$c=bs((function(t){var e=oc(t);return e="function"==typeof e?e:i,js(Sn(t,fl),i,e)})),Bc=bs(Mc);function zc(t,e){return $s(t||[],e||[],li)}function qc(t,e){return $s(t||[],e||[],Is)}var Gc=bs((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Uc(t,n)}));function Wc(t){var e=Tr(t);return e.__chain__=!0,e}function Hc(t,e){return e(t),t}function Kc(t,e){return e(t)}var Qc=Fo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,s=function(e){return mi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof kr&&aa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Kc,args:[s],thisArg:i}),new Cr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(s)}));function Jc(){return Wc(this)}function Xc(){return new Cr(this.value(),this.__chain__)}function Yc(){this.__values__===i&&(this.__values__=Hl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Zc(){return this}function tu(t){var e,n=this;while(n instanceof Ar){var r=La(n);r.__index__=0,r.__values__=i,e?s.__wrapped__=r:e=r;var s=r;n=n.__wrapped__}return s.__wrapped__=t,e}function eu(){var t=this.__wrapped__;if(t instanceof kr){var e=t;return this.__actions__.length&&(e=new kr(this)),e=e.reverse(),e.__actions__.push({func:Kc,args:[gc],thisArg:i}),new Cr(e,this.__chain__)}return this.thru(gc)}function nu(){return Fs(this.__wrapped__,this.__actions__)}var ru=co((function(t,e,n){fe.call(t,n)?++t[n]:gi(t,n,1)}));function iu(t,e,n){var r=ul(t)?In:Si;return n&&ca(t,e,n)&&(e=i),r(t,Go(e,3))}function su(t,e){var n=ul(t)?Sn:ki;return n(t,Go(e,3))}var ou=yo(Ha),au=yo(Ka);function cu(t,e){return Ri(vu(t,e),1)}function uu(t,e){return Ri(vu(t,e),M)}function lu(t,e,n){return n=n===i?1:Ql(n),Ri(vu(t,e),n)}function hu(t,e){var n=ul(t)?En:Ti;return n(t,Go(e,3))}function fu(t,e){var n=ul(t)?Tn:Ii;return n(t,Go(e,3))}var du=co((function(t,e,n){fe.call(t,n)?t[n].push(e):gi(t,n,[e])}));function pu(t,e,n,r){t=hl(t)?t:Bh(t),n=n&&!r?Ql(n):0;var i=t.length;return n<0&&(n=$e(i+n,0)),Fl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Vn(t,e,n)>-1}var gu=bs((function(t,e,r){var i=-1,s="function"==typeof e,o=hl(t)?n(t.length):[];return Ti(t,(function(t){o[++i]=s?wn(e,t,r):qi(t,e,r)})),o})),mu=co((function(t,e,n){gi(t,n,e)}));function vu(t,e){var n=ul(t)?kn:os;return n(t,Go(e,3))}function yu(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),fs(t,e,n))}var _u=co((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function wu(t,e,n){var r=ul(t)?On:qn,i=arguments.length<3;return r(t,Go(e,4),n,i,Ti)}function bu(t,e,n){var r=ul(t)?xn:qn,i=arguments.length<3;return r(t,Go(e,4),n,i,Ii)}function Eu(t,e){var n=ul(t)?Sn:ki;return n(t,Bu(Go(e,3)))}function Tu(t){var e=ul(t)?oi:Es;return e(t)}function Iu(t,e,n){e=(n?ca(t,e,n):e===i)?1:Ql(e);var r=ul(t)?ai:Ts;return r(t,e)}function Su(t){var e=ul(t)?ci:Cs;return e(t)}function Au(t){if(null==t)return 0;if(hl(t))return Fl(t)?mr(t):t.length;var e=Yo(t);return e==Z||e==ot?t.size:rs(t).length}function Cu(t,e,n){var r=ul(t)?Nn:Rs;return n&&ca(t,e,n)&&(e=i),r(t,Go(e,3))}var ku=bs((function(t,e){if(null==t)return[];var n=e.length;return n>1&&ca(t,e[0],e[1])?e=[]:n>2&&ca(e[0],e[1],e[2])&&(e=[e[0]]),fs(t,Ri(e,1),[])})),Ru=Ne||function(){return cn.Date.now()};function Ou(t,e){if("function"!=typeof e)throw new oe(c);return t=Ql(t),function(){if(--t<1)return e.apply(this,arguments)}}function xu(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,No(t,A,i,i,i,i,e)}function Nu(t,e){var n;if("function"!=typeof e)throw new oe(c);return t=Ql(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var Du=bs((function(t,e,n){var r=_;if(n.length){var i=hr(n,qo(Du));r|=I}return No(t,r,e,n,i)})),Pu=bs((function(t,e,n){var r=_|w;if(n.length){var i=hr(n,qo(Pu));r|=I}return No(e,r,t,n,i)}));function Lu(t,e,n){e=n?i:e;var r=No(t,E,i,i,i,i,i,e);return r.placeholder=Lu.placeholder,r}function Mu(t,e,n){e=n?i:e;var r=No(t,T,i,i,i,i,i,e);return r.placeholder=Mu.placeholder,r}function Uu(t,e,n){var r,s,o,a,u,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new oe(c);function g(e){var n=r,o=s;return r=s=i,h=e,a=t.apply(o,n),a}function m(t){return h=t,u=Aa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?Be(i,o-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=o}function _(){var t=Ru();if(y(t))return w(t);u=Aa(_,v(t))}function w(t){return u=i,p&&r?g(t):(r=s=i,a)}function b(){u!==i&&Hs(u),h=0,r=l=s=u=i}function E(){return u===i?a:w(Ru())}function T(){var t=Ru(),n=y(t);if(r=arguments,s=this,l=t,n){if(u===i)return m(l);if(d)return Hs(u),u=Aa(_,e),g(l)}return u===i&&(u=Aa(_,e)),a}return e=Xl(e)||0,Sl(n)&&(f=!!n.leading,d="maxWait"in n,o=d?$e(Xl(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),T.cancel=b,T.flush=E,T}var Vu=bs((function(t,e){return bi(t,1,e)})),Fu=bs((function(t,e,n){return bi(t,Xl(e)||0,n)}));function ju(t){return No(t,k)}function $u(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new oe(c);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new($u.Cache||qr),n}function Bu(t){if("function"!=typeof t)throw new oe(c);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function zu(t){return Nu(2,t)}$u.Cache=qr;var qu=Gs((function(t,e){e=1==e.length&&ul(e[0])?kn(e[0],Jn(Go())):kn(Ri(e,1),Jn(Go()));var n=e.length;return bs((function(r){var i=-1,s=Be(r.length,n);while(++i<s)r[i]=e[i].call(this,r[i]);return wn(t,this,r)}))})),Gu=bs((function(t,e){var n=hr(e,qo(Gu));return No(t,I,i,e,n)})),Wu=bs((function(t,e){var n=hr(e,qo(Wu));return No(t,S,i,e,n)})),Hu=Fo((function(t,e){return No(t,C,i,i,i,e)}));function Ku(t,e){if("function"!=typeof t)throw new oe(c);return e=e===i?e:Ql(e),bs(t,e)}function Qu(t,e){if("function"!=typeof t)throw new oe(c);return e=null==e?0:$e(Ql(e),0),bs((function(n){var r=n[e],i=Ws(n,0,e);return r&&Rn(i,r),wn(t,this,i)}))}function Ju(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new oe(c);return Sl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Uu(t,e,{leading:r,maxWait:e,trailing:i})}function Xu(t){return xu(t,1)}function Yu(t,e){return Gu(zs(e),t)}function Zu(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function tl(t){return yi(t,m)}function el(t,e){return e="function"==typeof e?e:i,yi(t,m,e)}function nl(t){return yi(t,p|m)}function rl(t,e){return e="function"==typeof e?e:i,yi(t,p|m,e)}function il(t,e){return null==e||wi(t,e,Th(e))}function sl(t,e){return t===e||t!==t&&e!==e}var ol=Co(Vi),al=Co((function(t,e){return t>=e})),cl=Gi(function(){return arguments}())?Gi:function(t){return Al(t)&&fe.call(t,"callee")&&!Se.call(t,"callee")},ul=n.isArray,ll=pn?Jn(pn):Wi;function hl(t){return null!=t&&Il(t.length)&&!El(t)}function fl(t){return Al(t)&&hl(t)}function dl(t){return!0===t||!1===t||Al(t)&&Ui(t)==H}var pl=Ue||Jf,gl=gn?Jn(gn):Hi;function ml(t){return Al(t)&&1===t.nodeType&&!Ll(t)}function vl(t){if(null==t)return!0;if(hl(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||pl(t)||$l(t)||cl(t)))return!t.length;var e=Yo(t);if(e==Z||e==ot)return!t.size;if(pa(t))return!rs(t).length;for(var n in t)if(fe.call(t,n))return!1;return!0}function yl(t,e){return Ki(t,e)}function _l(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Ki(t,e,i,n):!!r}function wl(t){if(!Al(t))return!1;var e=Ui(t);return e==J||e==Q||"string"==typeof t.message&&"string"==typeof t.name&&!Ll(t)}function bl(t){return"number"==typeof t&&Ve(t)}function El(t){if(!Sl(t))return!1;var e=Ui(t);return e==X||e==Y||e==W||e==it}function Tl(t){return"number"==typeof t&&t==Ql(t)}function Il(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=U}function Sl(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Al(t){return null!=t&&"object"==typeof t}var Cl=mn?Jn(mn):Ji;function kl(t,e){return t===e||Xi(t,e,Ho(e))}function Rl(t,e,n){return n="function"==typeof n?n:i,Xi(t,e,Ho(e),n)}function Ol(t){return Pl(t)&&t!=+t}function xl(t){if(da(t))throw new Ft(a);return Yi(t)}function Nl(t){return null===t}function Dl(t){return null==t}function Pl(t){return"number"==typeof t||Al(t)&&Ui(t)==tt}function Ll(t){if(!Al(t)||Ui(t)!=nt)return!1;var e=Te(t);if(null===e)return!0;var n=fe.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&he.call(n)==me}var Ml=vn?Jn(vn):Zi;function Ul(t){return Tl(t)&&t>=-U&&t<=U}var Vl=yn?Jn(yn):ts;function Fl(t){return"string"==typeof t||!ul(t)&&Al(t)&&Ui(t)==at}function jl(t){return"symbol"==typeof t||Al(t)&&Ui(t)==ct}var $l=_n?Jn(_n):es;function Bl(t){return t===i}function zl(t){return Al(t)&&Yo(t)==lt}function ql(t){return Al(t)&&Ui(t)==ht}var Gl=Co(ss),Wl=Co((function(t,e){return t<=e}));function Hl(t){if(!t)return[];if(hl(t))return Fl(t)?vr(t):io(t);if(ke&&t[ke])return cr(t[ke]());var e=Yo(t),n=e==Z?ur:e==ot?fr:Bh;return n(t)}function Kl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===M||t===-M){var e=t<0?-1:1;return e*V}return t===t?t:0}function Ql(t){var e=Kl(t),n=e%1;return e===e?n?e-n:e:0}function Jl(t){return t?vi(Ql(t),0,j):0}function Xl(t){if("number"==typeof t)return t;if(jl(t))return F;if(Sl(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Sl(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Qn(t);var n=Qt.test(t);return n||Xt.test(t)?sn(t.slice(2),n?2:8):Kt.test(t)?F:+t}function Yl(t){return so(t,Ih(t))}function Zl(t){return t?vi(Ql(t),-U,U):0===t?t:0}function th(t){return null==t?"":Ps(t)}var eh=uo((function(t,e){if(pa(e)||hl(e))so(e,Th(e),t);else for(var n in e)fe.call(e,n)&&li(t,n,e[n])})),nh=uo((function(t,e){so(e,Ih(e),t)})),rh=uo((function(t,e,n,r){so(e,Ih(e),t,r)})),ih=uo((function(t,e,n,r){so(e,Th(e),t,r)})),sh=Fo(mi);function oh(t,e){var n=Sr(t);return null==e?n:di(n,e)}var ah=bs((function(t,e){t=re(t);var n=-1,r=e.length,s=r>2?e[2]:i;s&&ca(e[0],e[1],s)&&(r=1);while(++n<r){var o=e[n],a=Ih(o),c=-1,u=a.length;while(++c<u){var l=a[c],h=t[l];(h===i||sl(h,ue[l])&&!fe.call(t,l))&&(t[l]=o[l])}}return t})),ch=bs((function(t){return t.push(i,Po),wn(kh,i,t)}));function uh(t,e){return Mn(t,Go(e,3),Ni)}function lh(t,e){return Mn(t,Go(e,3),Di)}function hh(t,e){return null==t?t:Oi(t,Go(e,3),Ih)}function fh(t,e){return null==t?t:xi(t,Go(e,3),Ih)}function dh(t,e){return t&&Ni(t,Go(e,3))}function ph(t,e){return t&&Di(t,Go(e,3))}function gh(t){return null==t?[]:Pi(t,Th(t))}function mh(t){return null==t?[]:Pi(t,Ih(t))}function vh(t,e,n){var r=null==t?i:Li(t,e);return r===i?n:r}function yh(t,e){return null!=t&&ea(t,e,Fi)}function _h(t,e){return null!=t&&ea(t,e,ji)}var wh=bo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=ge.call(e)),t[e]=n}),kf(Nf)),bh=bo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=ge.call(e)),fe.call(t,e)?t[e].push(n):t[e]=[n]}),Go),Eh=bs(qi);function Th(t){return hl(t)?si(t):rs(t)}function Ih(t){return hl(t)?si(t,!0):is(t)}function Sh(t,e){var n={};return e=Go(e,3),Ni(t,(function(t,r,i){gi(n,e(t,r,i),t)})),n}function Ah(t,e){var n={};return e=Go(e,3),Ni(t,(function(t,r,i){gi(n,r,e(t,r,i))})),n}var Ch=uo((function(t,e,n){us(t,e,n)})),kh=uo((function(t,e,n,r){us(t,e,n,r)})),Rh=Fo((function(t,e){var n={};if(null==t)return n;var r=!1;e=kn(e,(function(e){return e=qs(e,t),r||(r=e.length>1),e})),so(t,$o(t),n),r&&(n=yi(n,p|g|m,Lo));var i=e.length;while(i--)Ms(n,e[i]);return n}));function Oh(t,e){return Nh(t,Bu(Go(e)))}var xh=Fo((function(t,e){return null==t?{}:ds(t,e)}));function Nh(t,e){if(null==t)return{};var n=kn($o(t),(function(t){return[t]}));return e=Go(e),ps(t,n,(function(t,n){return e(t,n[0])}))}function Dh(t,e,n){e=qs(e,t);var r=-1,s=e.length;s||(s=1,t=i);while(++r<s){var o=null==t?i:t[Na(e[r])];o===i&&(r=s,o=n),t=El(o)?o.call(t):o}return t}function Ph(t,e,n){return null==t?t:Is(t,e,n)}function Lh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Is(t,e,n,r)}var Mh=xo(Th),Uh=xo(Ih);function Vh(t,e,n){var r=ul(t),i=r||pl(t)||$l(t);if(e=Go(e,4),null==n){var s=t&&t.constructor;n=i?r?new s:[]:Sl(t)&&El(s)?Sr(Te(t)):{}}return(i?En:Ni)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Fh(t,e){return null==t||Ms(t,e)}function jh(t,e,n){return null==t?t:Us(t,e,zs(n))}function $h(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Us(t,e,zs(n),r)}function Bh(t){return null==t?[]:Xn(t,Th(t))}function zh(t){return null==t?[]:Xn(t,Ih(t))}function qh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Xl(n),n=n===n?n:0),e!==i&&(e=Xl(e),e=e===e?e:0),vi(Xl(t),e,n)}function Gh(t,e,n){return e=Kl(e),n===i?(n=e,e=0):n=Kl(n),t=Xl(t),$i(t,e,n)}function Wh(t,e,n){if(n&&"boolean"!=typeof n&&ca(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Kl(t),e===i?(e=t,t=0):e=Kl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var s=He();return Be(t+s*(e-t+rn("1e-"+((s+"").length-1))),e)}return ys(t,e)}var Hh=go((function(t,e,n){return e=e.toLowerCase(),t+(n?Kh(e):e)}));function Kh(t){return Ef(th(t).toLowerCase())}function Qh(t){return t=th(t),t&&t.replace(Zt,nr).replace(qe,"")}function Jh(t,e,n){t=th(t),e=Ps(e);var r=t.length;n=n===i?r:vi(Ql(n),0,r);var s=n;return n-=e.length,n>=0&&t.slice(n,s)==e}function Xh(t){return t=th(t),t&&Rt.test(t)?t.replace(Ct,rr):t}function Yh(t){return t=th(t),t&&Ut.test(t)?t.replace(Mt,"\\$&"):t}var Zh=go((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),tf=go((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),ef=po("toLowerCase");function nf(t,e,n){t=th(t),e=Ql(e);var r=e?mr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Io(Le(i),n)+t+Io(Pe(i),n)}function rf(t,e,n){t=th(t),e=Ql(e);var r=e?mr(t):0;return e&&r<e?t+Io(e-r,n):t}function sf(t,e,n){t=th(t),e=Ql(e);var r=e?mr(t):0;return e&&r<e?Io(e-r,n)+t:t}function of(t,e,n){return n||null==e?e=0:e&&(e=+e),We(th(t).replace(Vt,""),e||0)}function af(t,e,n){return e=(n?ca(t,e,n):e===i)?1:Ql(e),ws(th(t),e)}function cf(){var t=arguments,e=th(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=go((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function lf(t,e,n){return n&&"number"!=typeof n&&ca(t,e,n)&&(e=n=i),n=n===i?j:n>>>0,n?(t=th(t),t&&("string"==typeof e||null!=e&&!Ml(e))&&(e=Ps(e),!e&&or(t))?Ws(vr(t),0,n):t.split(e,n)):[]}var hf=go((function(t,e,n){return t+(n?" ":"")+Ef(e)}));function ff(t,e,n){return t=th(t),n=null==n?0:vi(Ql(n),0,t.length),e=Ps(e),t.slice(n,n+e.length)==e}function df(t,e,n){var r=Tr.templateSettings;n&&ca(t,e,n)&&(e=i),t=th(t),e=ih({},e,r,Do);var s=ih({},e.imports,r.imports,Do),o=Th(s),a=Xn(s,o);En(o,(function(t){if(qt.test(t))throw new Ft(l)}));var c,h,f=0,d=e.interpolate||te,p="__p += '",g=ie((e.escape||te).source+"|"+d.source+"|"+(d===Nt?Wt:te).source+"|"+(e.evaluate||te).source+"|$","g"),m="//# sourceURL="+(fe.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Je+"]")+"\n";t.replace(g,(function(e,n,r,i,s,o){return r||(r=i),p+=t.slice(f,o).replace(ee,ir),n&&(c=!0,p+="' +\n__e("+n+") +\n'"),s&&(h=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=o+e.length,e})),p+="';\n";var v=fe.call(e,"variable")&&e.variable;if(v){if(qt.test(v))throw new Ft(u)}else p="with (obj) {\n"+p+"\n}\n";p=(h?p.replace(Tt,""):p).replace(It,"$1").replace(St,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(c?", __e = _.escape":"")+(h?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var y=If((function(){return zt(o,m+"return "+p).apply(i,a)}));if(y.source=p,wl(y))throw y;return y}function pf(t){return th(t).toLowerCase()}function gf(t){return th(t).toUpperCase()}function mf(t,e,n){if(t=th(t),t&&(n||e===i))return Qn(t);if(!t||!(e=Ps(e)))return t;var r=vr(t),s=vr(e),o=Zn(r,s),a=tr(r,s)+1;return Ws(r,o,a).join("")}function vf(t,e,n){if(t=th(t),t&&(n||e===i))return t.slice(0,yr(t)+1);if(!t||!(e=Ps(e)))return t;var r=vr(t),s=tr(r,vr(e))+1;return Ws(r,0,s).join("")}function yf(t,e,n){if(t=th(t),t&&(n||e===i))return t.replace(Vt,"");if(!t||!(e=Ps(e)))return t;var r=vr(t),s=Zn(r,vr(e));return Ws(r,s).join("")}function _f(t,e){var n=R,r=O;if(Sl(e)){var s="separator"in e?e.separator:s;n="length"in e?Ql(e.length):n,r="omission"in e?Ps(e.omission):r}t=th(t);var o=t.length;if(or(t)){var a=vr(t);o=a.length}if(n>=o)return t;var c=n-mr(r);if(c<1)return r;var u=a?Ws(a,0,c).join(""):t.slice(0,c);if(s===i)return u+r;if(a&&(c+=u.length-c),Ml(s)){if(t.slice(c).search(s)){var l,h=u;s.global||(s=ie(s.source,th(Ht.exec(s))+"g")),s.lastIndex=0;while(l=s.exec(h))var f=l.index;u=u.slice(0,f===i?c:f)}}else if(t.indexOf(Ps(s),c)!=c){var d=u.lastIndexOf(s);d>-1&&(u=u.slice(0,d))}return u+r}function wf(t){return t=th(t),t&&kt.test(t)?t.replace(At,_r):t}var bf=go((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),Ef=po("toUpperCase");function Tf(t,e,n){return t=th(t),e=n?i:e,e===i?ar(t)?Er(t):Ln(t):t.match(e)||[]}var If=bs((function(t,e){try{return wn(t,i,e)}catch(n){return wl(n)?n:new Ft(n)}})),Sf=Fo((function(t,e){return En(e,(function(e){e=Na(e),gi(t,e,Du(t[e],t))})),t}));function Af(t){var e=null==t?0:t.length,n=Go();return t=e?kn(t,(function(t){if("function"!=typeof t[1])throw new oe(c);return[n(t[0]),t[1]]})):[],bs((function(n){var r=-1;while(++r<e){var i=t[r];if(wn(i[0],this,n))return wn(i[1],this,n)}}))}function Cf(t){return _i(yi(t,p))}function kf(t){return function(){return t}}function Rf(t,e){return null==t||t!==t?e:t}var Of=_o(),xf=_o(!0);function Nf(t){return t}function Df(t){return ns("function"==typeof t?t:yi(t,p))}function Pf(t){return as(yi(t,p))}function Lf(t,e){return cs(t,yi(e,p))}var Mf=bs((function(t,e){return function(n){return qi(n,t,e)}})),Uf=bs((function(t,e){return function(n){return qi(t,n,e)}}));function Vf(t,e,n){var r=Th(e),i=Pi(e,r);null!=n||Sl(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Pi(e,Th(e)));var s=!(Sl(n)&&"chain"in n)||!!n.chain,o=El(t);return En(i,(function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(s||e){var n=t(this.__wrapped__),i=n.__actions__=io(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,Rn([this.value()],arguments))})})),t}function Ff(){return cn._===this&&(cn._=ve),this}function jf(){}function $f(t){return t=Ql(t),bs((function(e){return hs(e,t)}))}var Bf=To(kn),zf=To(In),qf=To(Nn);function Gf(t){return ua(t)?Bn(Na(t)):gs(t)}function Wf(t){return function(e){return null==t?i:Li(t,e)}}var Hf=Ao(),Kf=Ao(!0);function Qf(){return[]}function Jf(){return!1}function Xf(){return{}}function Yf(){return""}function Zf(){return!0}function td(t,e){if(t=Ql(t),t<1||t>U)return[];var n=j,r=Be(t,j);e=Go(e),t-=j;var i=Hn(r,e);while(++n<t)e(n);return i}function ed(t){return ul(t)?kn(t,Na):jl(t)?[t]:io(xa(th(t)))}function nd(t){var e=++de;return th(t)+e}var rd=Eo((function(t,e){return t+e}),0),id=Ro("ceil"),sd=Eo((function(t,e){return t/e}),1),od=Ro("floor");function ad(t){return t&&t.length?Ai(t,Nf,Vi):i}function cd(t,e){return t&&t.length?Ai(t,Go(e,2),Vi):i}function ud(t){return $n(t,Nf)}function ld(t,e){return $n(t,Go(e,2))}function hd(t){return t&&t.length?Ai(t,Nf,ss):i}function fd(t,e){return t&&t.length?Ai(t,Go(e,2),ss):i}var dd=Eo((function(t,e){return t*e}),1),pd=Ro("round"),gd=Eo((function(t,e){return t-e}),0);function md(t){return t&&t.length?Wn(t,Nf):0}function vd(t,e){return t&&t.length?Wn(t,Go(e,2)):0}return Tr.after=Ou,Tr.ary=xu,Tr.assign=eh,Tr.assignIn=nh,Tr.assignInWith=rh,Tr.assignWith=ih,Tr.at=sh,Tr.before=Nu,Tr.bind=Du,Tr.bindAll=Sf,Tr.bindKey=Pu,Tr.castArray=Zu,Tr.chain=Wc,Tr.chunk=Ma,Tr.compact=Ua,Tr.concat=Va,Tr.cond=Af,Tr.conforms=Cf,Tr.constant=kf,Tr.countBy=ru,Tr.create=oh,Tr.curry=Lu,Tr.curryRight=Mu,Tr.debounce=Uu,Tr.defaults=ah,Tr.defaultsDeep=ch,Tr.defer=Vu,Tr.delay=Fu,Tr.difference=Fa,Tr.differenceBy=ja,Tr.differenceWith=$a,Tr.drop=Ba,Tr.dropRight=za,Tr.dropRightWhile=qa,Tr.dropWhile=Ga,Tr.fill=Wa,Tr.filter=su,Tr.flatMap=cu,Tr.flatMapDeep=uu,Tr.flatMapDepth=lu,Tr.flatten=Qa,Tr.flattenDeep=Ja,Tr.flattenDepth=Xa,Tr.flip=ju,Tr.flow=Of,Tr.flowRight=xf,Tr.fromPairs=Ya,Tr.functions=gh,Tr.functionsIn=mh,Tr.groupBy=du,Tr.initial=ec,Tr.intersection=nc,Tr.intersectionBy=rc,Tr.intersectionWith=ic,Tr.invert=wh,Tr.invertBy=bh,Tr.invokeMap=gu,Tr.iteratee=Df,Tr.keyBy=mu,Tr.keys=Th,Tr.keysIn=Ih,Tr.map=vu,Tr.mapKeys=Sh,Tr.mapValues=Ah,Tr.matches=Pf,Tr.matchesProperty=Lf,Tr.memoize=$u,Tr.merge=Ch,Tr.mergeWith=kh,Tr.method=Mf,Tr.methodOf=Uf,Tr.mixin=Vf,Tr.negate=Bu,Tr.nthArg=$f,Tr.omit=Rh,Tr.omitBy=Oh,Tr.once=zu,Tr.orderBy=yu,Tr.over=Bf,Tr.overArgs=qu,Tr.overEvery=zf,Tr.overSome=qf,Tr.partial=Gu,Tr.partialRight=Wu,Tr.partition=_u,Tr.pick=xh,Tr.pickBy=Nh,Tr.property=Gf,Tr.propertyOf=Wf,Tr.pull=uc,Tr.pullAll=lc,Tr.pullAllBy=hc,Tr.pullAllWith=fc,Tr.pullAt=dc,Tr.range=Hf,Tr.rangeRight=Kf,Tr.rearg=Hu,Tr.reject=Eu,Tr.remove=pc,Tr.rest=Ku,Tr.reverse=gc,Tr.sampleSize=Iu,Tr.set=Ph,Tr.setWith=Lh,Tr.shuffle=Su,Tr.slice=mc,Tr.sortBy=ku,Tr.sortedUniq=Tc,Tr.sortedUniqBy=Ic,Tr.split=lf,Tr.spread=Qu,Tr.tail=Sc,Tr.take=Ac,Tr.takeRight=Cc,Tr.takeRightWhile=kc,Tr.takeWhile=Rc,Tr.tap=Hc,Tr.throttle=Ju,Tr.thru=Kc,Tr.toArray=Hl,Tr.toPairs=Mh,Tr.toPairsIn=Uh,Tr.toPath=ed,Tr.toPlainObject=Yl,Tr.transform=Vh,Tr.unary=Xu,Tr.union=Oc,Tr.unionBy=xc,Tr.unionWith=Nc,Tr.uniq=Dc,Tr.uniqBy=Pc,Tr.uniqWith=Lc,Tr.unset=Fh,Tr.unzip=Mc,Tr.unzipWith=Uc,Tr.update=jh,Tr.updateWith=$h,Tr.values=Bh,Tr.valuesIn=zh,Tr.without=Vc,Tr.words=Tf,Tr.wrap=Yu,Tr.xor=Fc,Tr.xorBy=jc,Tr.xorWith=$c,Tr.zip=Bc,Tr.zipObject=zc,Tr.zipObjectDeep=qc,Tr.zipWith=Gc,Tr.entries=Mh,Tr.entriesIn=Uh,Tr.extend=nh,Tr.extendWith=rh,Vf(Tr,Tr),Tr.add=rd,Tr.attempt=If,Tr.camelCase=Hh,Tr.capitalize=Kh,Tr.ceil=id,Tr.clamp=qh,Tr.clone=tl,Tr.cloneDeep=nl,Tr.cloneDeepWith=rl,Tr.cloneWith=el,Tr.conformsTo=il,Tr.deburr=Qh,Tr.defaultTo=Rf,Tr.divide=sd,Tr.endsWith=Jh,Tr.eq=sl,Tr.escape=Xh,Tr.escapeRegExp=Yh,Tr.every=iu,Tr.find=ou,Tr.findIndex=Ha,Tr.findKey=uh,Tr.findLast=au,Tr.findLastIndex=Ka,Tr.findLastKey=lh,Tr.floor=od,Tr.forEach=hu,Tr.forEachRight=fu,Tr.forIn=hh,Tr.forInRight=fh,Tr.forOwn=dh,Tr.forOwnRight=ph,Tr.get=vh,Tr.gt=ol,Tr.gte=al,Tr.has=yh,Tr.hasIn=_h,Tr.head=Za,Tr.identity=Nf,Tr.includes=pu,Tr.indexOf=tc,Tr.inRange=Gh,Tr.invoke=Eh,Tr.isArguments=cl,Tr.isArray=ul,Tr.isArrayBuffer=ll,Tr.isArrayLike=hl,Tr.isArrayLikeObject=fl,Tr.isBoolean=dl,Tr.isBuffer=pl,Tr.isDate=gl,Tr.isElement=ml,Tr.isEmpty=vl,Tr.isEqual=yl,Tr.isEqualWith=_l,Tr.isError=wl,Tr.isFinite=bl,Tr.isFunction=El,Tr.isInteger=Tl,Tr.isLength=Il,Tr.isMap=Cl,Tr.isMatch=kl,Tr.isMatchWith=Rl,Tr.isNaN=Ol,Tr.isNative=xl,Tr.isNil=Dl,Tr.isNull=Nl,Tr.isNumber=Pl,Tr.isObject=Sl,Tr.isObjectLike=Al,Tr.isPlainObject=Ll,Tr.isRegExp=Ml,Tr.isSafeInteger=Ul,Tr.isSet=Vl,Tr.isString=Fl,Tr.isSymbol=jl,Tr.isTypedArray=$l,Tr.isUndefined=Bl,Tr.isWeakMap=zl,Tr.isWeakSet=ql,Tr.join=sc,Tr.kebabCase=Zh,Tr.last=oc,Tr.lastIndexOf=ac,Tr.lowerCase=tf,Tr.lowerFirst=ef,Tr.lt=Gl,Tr.lte=Wl,Tr.max=ad,Tr.maxBy=cd,Tr.mean=ud,Tr.meanBy=ld,Tr.min=hd,Tr.minBy=fd,Tr.stubArray=Qf,Tr.stubFalse=Jf,Tr.stubObject=Xf,Tr.stubString=Yf,Tr.stubTrue=Zf,Tr.multiply=dd,Tr.nth=cc,Tr.noConflict=Ff,Tr.noop=jf,Tr.now=Ru,Tr.pad=nf,Tr.padEnd=rf,Tr.padStart=sf,Tr.parseInt=of,Tr.random=Wh,Tr.reduce=wu,Tr.reduceRight=bu,Tr.repeat=af,Tr.replace=cf,Tr.result=Dh,Tr.round=pd,Tr.runInContext=t,Tr.sample=Tu,Tr.size=Au,Tr.snakeCase=uf,Tr.some=Cu,Tr.sortedIndex=vc,Tr.sortedIndexBy=yc,Tr.sortedIndexOf=_c,Tr.sortedLastIndex=wc,Tr.sortedLastIndexBy=bc,Tr.sortedLastIndexOf=Ec,Tr.startCase=hf,Tr.startsWith=ff,Tr.subtract=gd,Tr.sum=md,Tr.sumBy=vd,Tr.template=df,Tr.times=td,Tr.toFinite=Kl,Tr.toInteger=Ql,Tr.toLength=Jl,Tr.toLower=pf,Tr.toNumber=Xl,Tr.toSafeInteger=Zl,Tr.toString=th,Tr.toUpper=gf,Tr.trim=mf,Tr.trimEnd=vf,Tr.trimStart=yf,Tr.truncate=_f,Tr.unescape=wf,Tr.uniqueId=nd,Tr.upperCase=bf,Tr.upperFirst=Ef,Tr.each=hu,Tr.eachRight=fu,Tr.first=Za,Vf(Tr,function(){var t={};return Ni(Tr,(function(e,n){fe.call(Tr.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Tr.VERSION=s,En(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Tr[t].placeholder=Tr})),En(["drop","take"],(function(t,e){kr.prototype[t]=function(n){n=n===i?1:$e(Ql(n),0);var r=this.__filtered__&&!e?new kr(this):this.clone();return r.__filtered__?r.__takeCount__=Be(n,r.__takeCount__):r.__views__.push({size:Be(n,j),type:t+(r.__dir__<0?"Right":"")}),r},kr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),En(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==D||n==L;kr.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Go(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),En(["head","last"],(function(t,e){var n="take"+(e?"Right":"");kr.prototype[t]=function(){return this[n](1).value()[0]}})),En(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");kr.prototype[t]=function(){return this.__filtered__?new kr(this):this[n](1)}})),kr.prototype.compact=function(){return this.filter(Nf)},kr.prototype.find=function(t){return this.filter(t).head()},kr.prototype.findLast=function(t){return this.reverse().find(t)},kr.prototype.invokeMap=bs((function(t,e){return"function"==typeof t?new kr(this):this.map((function(n){return qi(n,t,e)}))})),kr.prototype.reject=function(t){return this.filter(Bu(Go(t)))},kr.prototype.slice=function(t,e){t=Ql(t);var n=this;return n.__filtered__&&(t>0||e<0)?new kr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Ql(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},kr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},kr.prototype.toArray=function(){return this.take(j)},Ni(kr.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),s=Tr[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);s&&(Tr.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,c=e instanceof kr,u=a[0],l=c||ul(e),h=function(t){var e=s.apply(Tr,Rn([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof u&&1!=u.length&&(c=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=o&&!f,g=c&&!d;if(!o&&l){e=g?e:new kr(this);var m=t.apply(e,a);return m.__actions__.push({func:Kc,args:[h],thisArg:i}),new Cr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),En(["pop","push","shift","sort","splice","unshift"],(function(t){var e=ae[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Tr.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),Ni(kr.prototype,(function(t,e){var n=Tr[e];if(n){var r=n.name+"";fe.call(ln,r)||(ln[r]=[]),ln[r].push({name:e,func:n})}})),ln[wo(i,w).name]=[{name:"wrapper",func:i}],kr.prototype.clone=Rr,kr.prototype.reverse=Or,kr.prototype.value=xr,Tr.prototype.at=Qc,Tr.prototype.chain=Jc,Tr.prototype.commit=Xc,Tr.prototype.next=Yc,Tr.prototype.plant=tu,Tr.prototype.reverse=eu,Tr.prototype.toJSON=Tr.prototype.valueOf=Tr.prototype.value=nu,Tr.prototype.first=Tr.prototype.head,ke&&(Tr.prototype[ke]=Zc),Tr},Ir=Tr();cn._=Ir,r=function(){return Ir}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},8646:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(1767),o=n(851);t.exports=function(t,e){e&&"string"===typeof t||i(t);var n=o(t);return s(i(void 0!==n?r(n,t):t))}},8686:function(t,e,n){"use strict";var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},8750:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8981:function(t,e,n){"use strict";var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},9143:function(t,e,n){"use strict";var r=n(4576),i=n(9504),s=n(3972),o=n(3463),a=n(9297),c=n(2804),u=n(944),l=n(5169),h=c.c2i,f=c.c2iUrl,d=r.SyntaxError,p=r.TypeError,g=i("".charAt),m=function(t,e){for(var n=t.length;e<n;e++){var r=g(t,e);if(" "!==r&&"\t"!==r&&"\n"!==r&&"\f"!==r&&"\r"!==r)break}return e},v=function(t,e,n){var r=t.length;r<4&&(t+=2===r?"AA":"A");var i=(e[g(t,0)]<<18)+(e[g(t,1)]<<12)+(e[g(t,2)]<<6)+e[g(t,3)],s=[i>>16&255,i>>8&255,255&i];if(2===r){if(n&&0!==s[1])throw new d("Extra bits");return[s[0]]}if(3===r){if(n&&0!==s[2])throw new d("Extra bits");return[s[0],s[1]]}return s},y=function(t,e,n){for(var r=e.length,i=0;i<r;i++)t[n+i]=e[i];return n+r};t.exports=function(t,e,n,r){o(t),s(e);var i="base64"===u(e)?h:f,c=e?e.lastChunkHandling:void 0;if(void 0===c&&(c="loose"),"loose"!==c&&"strict"!==c&&"stop-before-partial"!==c)throw new p("Incorrect `lastChunkHandling` option");n&&l(n.buffer);var _=t.length,w=n||[],b=0,E=0,T="",I=0;if(r)while(1){if(I=m(t,I),I===_){if(T.length>0){if("stop-before-partial"===c)break;if("loose"!==c)throw new d("Missing padding");if(1===T.length)throw new d("Malformed padding: exactly one additional character");b=y(w,v(T,i,!1),b)}E=_;break}var S=g(t,I);if(++I,"="===S){if(T.length<2)throw new d("Padding is too early");if(I=m(t,I),2===T.length){if(I===_){if("stop-before-partial"===c)break;throw new d("Malformed padding: only one =")}"="===g(t,I)&&(++I,I=m(t,I))}if(I<_)throw new d("Unexpected character after padding");b=y(w,v(T,i,"strict"===c),b),E=_;break}if(!a(i,S))throw new d("Unexpected character");var A=r-b;if(1===A&&2===T.length||2===A&&3===T.length)break;if(T+=S,4===T.length&&(b=y(w,v(T,i,!1),b),T="",E=I,b===r))break}return{bytes:w,read:E,written:b}}},9167:function(t,e,n){"use strict";var r=n(4576);t.exports=r},9286:function(t,e,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},9297:function(t,e,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},9299:function(t,e,n){var r=n(9315),i=n(5091),s="[object Symbol]";function o(t){return"symbol"==typeof t||i(t)&&r(t)==s}t.exports=o},9306:function(t,e,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},9314:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),c=n(9590),u=n(9539),l=n(9462),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("drop",0),g=!d&&!p&&f("drop",RangeError),m=d||p||g,v=l((function(){var t,e,n=this.iterator,r=this.next;while(this.remaining)if(this.remaining--,t=s(i(r,n)),e=this.done=!!t.done,e)return;if(t=s(i(r,n)),e=this.done=!!t.done,!e)return t.value}));r({target:"Iterator",proto:!0,real:!0,forced:m},{drop:function(t){var e;s(this);try{e=c(a(+t))}catch(n){u(this,"throw",n)}return g?i(g,this,e):new v(o(this),{remaining:e})}})},9315:function(t,e,n){var r=n(7874),i=n(38),s=n(5677),o="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?a:o:c&&c in Object(t)?i(t):s(t)}t.exports=u},9433:function(t,e,n){"use strict";var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9452:function(t,e,n){"use strict";var r=n(6518),i=n(9306),s=n(6557),o=n(4328),a=n(4995),c=n(6395),u=a.get,l=a.has,h=a.set,f=c||!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,(function(){throw 1}))}catch(t){return t instanceof TypeError}}();r({target:"WeakMap",proto:!0,real:!0,forced:f},{getOrInsertComputed:function(t,e){if(c||s(this),o(t),i(e),l(this,t))return u(this,t);var n=e(t);return h(this,t,n),n}})},9462:function(t,e,n){"use strict";var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",v="normal",y="throw",_=c.set,w=function(t){var e=c.getterFor(t?m:g);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator,s=n.done;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(s)return h(void 0,!0);if(n.inner)try{f(n.inner.iterator,v)}catch(a){return f(i,y,a)}if(n.openIters)try{d(n.openIters,v)}catch(a){if(i)return f(i,y,a);throw a}return i&&f(i,v),h(void 0,!0)}})},b=w(!0),E=w(!1);s(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?m:g,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,_(this,i)};return r.prototype=e?b:E,r}},9486:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(9504),o=n(3972),a=n(4154),c=n(5169),u=n(2804),l=n(944),h=u.i2c,f=u.i2cUrl,d=s("".charAt),p=i.Uint8Array,g=!p||!p.prototype.toBase64||!function(){try{var t=new p;t.toBase64(null)}catch(e){return!0}}();p&&r({target:"Uint8Array",proto:!0,forced:g},{toBase64:function(){var t=a(this),e=arguments.length?o(arguments[0]):void 0,n="base64"===l(e)?h:f,r=!!e&&!!e.omitPadding;c(this.buffer);for(var i,s="",u=0,p=t.length,g=function(t){return d(n,i>>6*t&63)};u+2<p;u+=3)i=(t[u]<<16)+(t[u+1]<<8)+t[u+2],s+=g(3)+g(2)+g(1)+g(0);return u+2===p?(i=(t[u]<<16)+(t[u+1]<<8),s+=g(3)+g(2)+g(1)+(r?"":"=")):u+1===p&&(i=t[u]<<16,s+=g(3)+g(2)+(r?"":"==")),s}})},9504:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9519:function(t,e,n){"use strict";var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9565:function(t,e,n){"use strict";var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9577:function(t,e,n){"use strict";var r=n(4644),i=n(1108),s=n(6198),o=n(1291),a=n(5854),c=r.aTypedArray,u=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,h=RangeError,f=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),d=f&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(t){return!0}}();l("with",{with:function(t,e){var n=c(this),r=s(n),l=o(t),f=l<0?r+l:l,d=i(n)?a(e):+e;if(f>=r||f<0)throw new h("Incorrect index");for(var p=new(u(n))(r),g=0;g<r;g++)p[g]=g===f?d:n[g];return p}}["with"],!f||d)},9590:function(t,e,n){"use strict";var r=n(1291),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw new i("The argument can't be less than 0");return e}},9617:function(t,e,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9692:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},9835:function(t){"use strict";t.exports=function(t){try{var e=new Set,n={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},r=e[t](n);return 1===r.size&&4===r.values().next().value}catch(i){return!1}}}}]);
//# sourceMappingURL=chunk-vendors.b31e2291.js.map