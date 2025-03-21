(self["webpackChunkeco_kirchner"]=self["webpackChunkeco_kirchner"]||[]).push([[504],{34:function(t,e,n){"use strict";var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},38:function(t,e,n){var r=n(7874),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0;function u(t){var e=s.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var i=o.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=u},81:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),u=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new u(o(t)+" is not iterable")}},116:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},144:function(t,e,n){"use strict";n.d(e,{C4:function(){return I},EW:function(){return Ut},Gc:function(){return vt},IG:function(){return St},IJ:function(){return Ot},KR:function(){return Rt},Kh:function(){return mt},Pr:function(){return Lt},R1:function(){return Dt},X2:function(){return c},bl:function(){return S},fE:function(){return Et},g8:function(){return wt},hV:function(){return zt},hZ:function(){return M},i9:function(){return kt},ju:function(){return Tt},lJ:function(){return Ct},qA:function(){return F},u4:function(){return L},ux:function(){return It},wB:function(){return Bt},yC:function(){return o}});n(4114),n(9678),n(7145),n(1658),n(8111),n(2489),n(7588),n(1701),n(3579),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const u=new WeakSet;class c{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,u.has(this)&&(u.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,C(this),m(this);const t=s,e=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)w(t);this.deps=this.depsTail=void 0,C(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function v(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),w(r),b(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function y(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===A)return;t.globalVersion=A;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!y(t))return void(t.flags&=-3);const n=s,i=E;s=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,E=i,v(t),t.flags&=-3}}function w(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)w(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function b(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function I(){T.push(E),E=!1}function S(){const t=T.pop();E=void 0===t||t}function C(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let A=0;class k{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!s||!E||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new k(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,O(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,A++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function O(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)O(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const x=new WeakMap,N=Symbol(""),D=Symbol(""),P=Symbol("");function L(t,e,n){if(E&&s){let e=x.get(t);e||x.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new R),r.map=e,r.key=n),r.track()}}function M(t,e,n,i,s,o){const a=x.get(t);if(!a)return void A++;const u=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(u);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===P||!(0,r.Bm)(n)&&n>=t)&&u(e)}))}else switch((void 0!==n||a.has(void 0))&&u(a.get(n)),o&&u(a.get(P)),e){case"add":s?o&&u(a.get("length")):(u(a.get(N)),(0,r.CE)(t)&&u(a.get(D)));break;case"delete":s||(u(a.get(N)),(0,r.CE)(t)&&u(a.get(D)));break;case"set":(0,r.CE)(t)&&u(a.get(N));break}}g()}function U(t){const e=It(t);return e===t?e:(L(e,"iterate",P),Et(t)?e:e.map(Ct))}function F(t){return L(t=It(t),"iterate",P),t}const V={__proto__:null,[Symbol.iterator](){return j(this,Symbol.iterator,Ct)},concat(...t){return U(this).concat(...t.map((t=>(0,r.cy)(t)?U(t):t)))},entries(){return j(this,"entries",(t=>(t[1]=Ct(t[1]),t)))},every(t,e){return B(this,"every",t,e,void 0,arguments)},filter(t,e){return B(this,"filter",t,e,(t=>t.map(Ct)),arguments)},find(t,e){return B(this,"find",t,e,Ct,arguments)},findIndex(t,e){return B(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return B(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return B(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return B(this,"forEach",t,e,void 0,arguments)},includes(...t){return q(this,"includes",t)},indexOf(...t){return q(this,"indexOf",t)},join(t){return U(this).join(t)},lastIndexOf(...t){return q(this,"lastIndexOf",t)},map(t,e){return B(this,"map",t,e,void 0,arguments)},pop(){return H(this,"pop")},push(...t){return H(this,"push",t)},reduce(t,...e){return z(this,"reduce",t,e)},reduceRight(t,...e){return z(this,"reduceRight",t,e)},shift(){return H(this,"shift")},some(t,e){return B(this,"some",t,e,void 0,arguments)},splice(...t){return H(this,"splice",t)},toReversed(){return U(this).toReversed()},toSorted(t){return U(this).toSorted(t)},toSpliced(...t){return U(this).toSpliced(...t)},unshift(...t){return H(this,"unshift",t)},values(){return j(this,"values",Ct)}};function j(t,e,n){const r=F(t),i=r[e]();return r===t||Et(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.value&&(t.value=n(t.value)),t}),i}const $=Array.prototype;function B(t,e,n,r,i,s){const o=F(t),a=o!==t&&!Et(t),u=o[e];if(u!==$[e]){const e=u.apply(t,s);return a?Ct(e):e}let c=n;o!==t&&(a?c=function(e,r){return n.call(this,Ct(e),r,t)}:n.length>2&&(c=function(e,r){return n.call(this,e,r,t)}));const l=u.call(o,c,r);return a&&i?i(l):l}function z(t,e,n,r){const i=F(t);let s=n;return i!==t&&(Et(t)?n.length>3&&(s=function(e,r,i){return n.call(this,e,r,i,t)}):s=function(e,r,i){return n.call(this,e,Ct(r),i,t)}),i[e](s,...r)}function q(t,e,n){const r=It(t);L(r,"iterate",P);const i=r[e](...n);return-1!==i&&!1!==i||!Tt(n[0])?i:(n[0]=It(n[0]),r[e](...n))}function H(t,e,n=[]){I(),p();const r=It(t)[e].apply(t,n);return g(),S(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function G(t){(0,r.Bm)(t)||(t=String(t));const e=It(this);return L(e,"has",t),e.hasOwnProperty(t)}class Q{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?dt:ft:s?ht:lt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=V[e]))return t;if("hasOwnProperty"===e)return G}const a=Reflect.get(t,e,kt(t)?t:n);return((0,r.Bm)(e)?W.has(e):K(e))?a:(i||L(t,"get",e),s?a:kt(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?yt(a):mt(a):a)}}class X extends Q{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=bt(s);if(Et(n)||bt(n)||(s=It(s),n=It(n)),!(0,r.cy)(t)&&kt(s)&&!kt(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,kt(t)?t:i);return t===It(i)&&(o?(0,r.$H)(n,s)&&M(t,"set",e,n,s):M(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&M(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&W.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,r.cy)(t)?"length":N),Reflect.ownKeys(t)}}class Y extends Q{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const J=new X,Z=new Y,tt=new X(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=It(s),a=(0,r.CE)(o),u="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,l=s[t](...i),h=n?et:e?At:Ct;return!e&&L(o,"iterate",c?D:N),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:u?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function st(t,e){const n={get(n){const i=this["__v_raw"],s=It(i),o=It(n);t||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=nt(s),u=e?et:t?At:Ct;return a.call(s,n)?u(i.get(n)):a.call(s,o)?u(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&L(It(e),"iterate",N),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],i=It(n),s=It(e);return t||((0,r.$H)(e,s)&&L(i,"has",e),L(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=It(s),a=e?et:t?At:Ct;return!t&&L(o,"iterate",N),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear")}:{add(t){e||Et(t)||bt(t)||(t=It(t));const n=It(this),r=nt(n),i=r.has.call(n,t);return i||(n.add(t),M(n,"add",t,t)),this},set(t,n){e||Et(n)||bt(n)||(n=It(n));const i=It(this),{has:s,get:o}=nt(i);let a=s.call(i,t);a||(t=It(t),a=s.call(i,t));const u=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,u)&&M(i,"set",t,n,u):M(i,"add",t,n),this},delete(t){const e=It(this),{has:n,get:r}=nt(e);let i=n.call(e,t);i||(t=It(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&M(e,"delete",t,void 0,s),o},clear(){const t=It(this),e=0!==t.size,n=void 0,r=t.clear();return e&&M(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=rt(r,t,e)})),n}function ot(t,e){const n=st(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const at={get:ot(!1,!1)},ut={get:ot(!1,!0)},ct={get:ot(!0,!1)};const lt=new WeakMap,ht=new WeakMap,ft=new WeakMap,dt=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,r.Zf)(t))}function mt(t){return bt(t)?t:_t(t,!1,J,at,lt)}function vt(t){return _t(t,!1,tt,ut,ht)}function yt(t){return _t(t,!0,Z,ct,ft)}function _t(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=gt(t);if(0===a)return t;const u=new Proxy(t,2===a?i:n);return s.set(t,u),u}function wt(t){return bt(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function Et(t){return!(!t||!t["__v_isShallow"])}function Tt(t){return!!t&&!!t["__v_raw"]}function It(t){const e=t&&t["__v_raw"];return e?It(e):t}function St(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Ct=t=>(0,r.Gv)(t)?mt(t):t,At=t=>(0,r.Gv)(t)?yt(t):t;function kt(t){return!!t&&!0===t["__v_isRef"]}function Rt(t){return xt(t,!1)}function Ot(t){return xt(t,!0)}function xt(t,e){return kt(t)?t:new Nt(t,e)}class Nt{constructor(t,e){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:It(t),this._value=e?t:Ct(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Et(t)||bt(t);t=n?t:It(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:Ct(t),this.dep.trigger())}}function Dt(t){return kt(t)?t.value:t}const Pt={get:(t,e,n)=>"__v_raw"===e?t:Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Lt(t){return wt(t)?t:new Proxy(t,Pt)}class Mt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return d(this,!0),!0}get value(){const t=this.dep.track();return _(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ut(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new Mt(i,s,n);return o}const Ft={},Vt=new WeakMap;let jt;function $t(t,e=!1,n=jt){if(n){let e=Vt.get(n);e||Vt.set(n,e=[]),e.push(t)}else 0}function Bt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:u,augmentJob:l,call:h}=n,f=t=>s?t:Et(t)||!1===s||0===s?zt(t,1):zt(t);let d,p,g,m,v=!1,y=!1;if(kt(t)?(p=()=>t.value,v=Et(t)):wt(t)?(p=()=>f(t),v=!0):(0,r.cy)(t)?(y=!0,v=t.some((t=>wt(t)||Et(t))),p=()=>t.map((t=>kt(t)?t.value:wt(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0))):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){I();try{g()}finally{S()}}const e=jt;jt=d;try{return h?h(t,3,[m]):t(m)}finally{jt=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>zt(t(),e)}const _=a(),w=()=>{d.stop(),_&&_.active&&(0,r.TF)(_.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let b=y?new Array(t.length).fill(Ft):Ft;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||v||(y?t.some(((t,e)=>(0,r.$H)(t,b[e]))):(0,r.$H)(t,b))){g&&g();const n=jt;jt=d;try{const n=[t,b===Ft?void 0:y&&b[0]===Ft?[]:b,m];h?h(e,3,n):e(...n),b=t}finally{jt=n}}}else d.run()};return l&&l(E),d=new c(p),d.scheduler=u?()=>u(E,!1):E,m=t=>$t(t,!1,d),g=d.onStop=()=>{const t=Vt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Vt.delete(d)}},e?i?E(!0):b=d.run():u?u(E.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function zt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,kt(t))zt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)zt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{zt(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zt(t[r],e,n)}return t}},283:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),u=n(350).CONFIGURABLE,c=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||c(this)}),"toString")},350:function(t,e,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},397:function(t,e,n){"use strict";var r=n(7751);t.exports=r("document","documentElement")},421:function(t){"use strict";t.exports={}},507:function(t,e,n){"use strict";var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},531:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),u=n(8646),c=n(9462),l=n(9539),h=n(6395),f=c((function(){var t,e,n=this.iterator,r=this.mapper;while(1){if(e=this.inner)try{if(t=o(i(e.next,e.iterator)),!t.done)return t.value;this.inner=null}catch(s){l(n,"throw",s)}if(t=o(i(this.next,n)),this.done=!!t.done)return;try{this.inner=u(r(t.value,this.counter++),!1)}catch(s){l(n,"throw",s)}}}));r({target:"Iterator",proto:!0,real:!0,forced:h},{flatMap:function(t){return o(this),s(t),new f(a(this),{mapper:t,inner:null})}})},616:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},655:function(t,e,n){"use strict";var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},679:function(t,e,n){"use strict";var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},713:function(t,e,n){"use strict";var r=n(9565),i=n(9306),s=n(8551),o=n(1767),a=n(9462),u=n(6319),c=a((function(){var t=this.iterator,e=s(r(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return s(this),i(t),new c(o(this),{mapper:t})}},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},757:function(t,e,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},774:function(t,e,n){"use strict";n.d(e,{cY:function(){return w},FA:function(){return P},g:function(){return D},u:function(){return l},Uj:function(){return c},Fy:function(){return b},tD:function(){return z},bD:function(){return F},hp:function(){return B},T9:function(){return y},Tj:function(){return m},yU:function(){return v},XA:function(){return _},Ku:function(){return W},ZQ:function(){return E},sr:function(){return C},c1:function(){return S},Im:function(){return U},lT:function(){return k},zW:function(){return O},jZ:function(){return T},lV:function(){return A},nr:function(){return R},Am:function(){return j},I9:function(){return $},eX:function(){return x}});n(4114),n(8111),n(7588),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|u>>6,f=63&u;a||(f=64,s||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const u=i<t.length,c=u?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(t){const e=i(t);return o.encodeByteArray(e,!0)},c=function(t){return u(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={VUE_APP_FIREBASE_PROJECT_ID:"eco-kirchner",VUE_APP_FIREBASE_APP_ID:"1:908630029969:web:d242eb70de39b39a7cf130",VUE_APP_FIREBASE_API_KEY:"AIzaSyA1X0q1F-Q0AZJKGfQ-pd9ECZPMWvXCC5Y",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"908630029969",VUE_APP_FIREBASE_STORAGE_BUCKET:"eco-kirchner.appspot.com",VUE_APP_FIREBASE_AUTH_DOMAIN:"eco-kirchner.firebaseapp.com",NODE_ENV:"production",BASE_URL:"/EcoKirchner/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config},_=t=>{var e;return null===(e=g())||void 0===e?void 0:e[`_${t}`]};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
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
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){var t;const e=null===(t=g())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function C(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=E();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R(){return!I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function x(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const N="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function L(t,e){return t.replace(M,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
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
 */function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(V(n)&&V(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(t){return null!==t&&"object"===typeof t}
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
function j(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function B(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function z(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=H(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function K(){}
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
function W(t){return t&&t._delegate?t._delegate:t}},851:function(t,e,n){"use strict";var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),u=a("iterator");t.exports=function(t){if(!s(t))return i(t,u)||i(t,"@@iterator")||o[r(t)]}},852:function(t,e,n){"use strict";n.d(e,{h1:function(){return c},uA:function(){return i}});n(8111),n(2489),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(774);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},896:function(t,e,n){var r=n(9692),i=n(1087),s=n(4243),o="Expected a function",a=Math.max,u=Math.min;function c(t,e,n){var c,l,h,f,d,p,g=0,m=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function _(e){var n=c,r=l;return c=l=void 0,g=e,f=t.apply(r,n),f}function w(t){return g=t,d=setTimeout(T,e),m?_(t):f}function b(t){var n=t-p,r=t-g,i=e-n;return v?u(i,h-r):i}function E(t){var n=t-p,r=t-g;return void 0===p||n>=e||n<0||v&&r>=h}function T(){var t=i();if(E(t))return I(t);d=setTimeout(T,b(t))}function I(t){return d=void 0,y&&c?_(t):(c=l=void 0,f)}function S(){void 0!==d&&clearTimeout(d),g=0,c=p=l=d=void 0}function C(){return void 0===d?f:I(i())}function A(){var t=i(),n=E(t);if(c=arguments,l=this,p=t,n){if(void 0===d)return w(p);if(v)return clearTimeout(d),d=setTimeout(T,e),_(p)}return void 0===d&&(d=setTimeout(T,e)),f}return e=s(e)||0,r(n)&&(m=!!n.leading,v="maxWait"in n,h=v?a(s(n.maxWait)||0,e):h,y="trailing"in n?!!n.trailing:y),A.cancel=S,A.flush=C,A}t.exports=c},1072:function(t,e,n){"use strict";var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},1087:function(t,e,n){var r=n(8606),i=function(){return r.Date.now()};t.exports=i},1108:function(t,e,n){"use strict";var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},1114:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=i(t,"string");return"symbol"==r(e)?e:e+""}function o(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{A:function(){return o}})},1148:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(t){o(this),s(t);var e=a(this),n=0;return!i(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(t,e,n){"use strict";var r,i,s,o=n(8622),a=n(4576),u=n(34),c=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new g(p);return e.facade=t,c(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},1241:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1291:function(t,e,n){"use strict";var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},1363:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return c}});n(4114),n(8111),n(2489),n(1701);
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},1387:function(t,e,n){"use strict";n.d(e,{Bt:function(){return ct},aE:function(){return se},rd:function(){return ae}});n(4114),n(8111),n(1148),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(144);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&o(t.default)}const u=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=h(i)?i.map(t):t(i)}return n}const l=()=>{},h=Array.isArray;const f=/#/g,d=/&/g,p=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,_=/%5D/g,w=/%5E/g,b=/%60/g,E=/%7B/g,T=/%7C/g,I=/%7D/g,S=/%20/g;function C(t){return encodeURI(""+t).replace(T,"|").replace(y,"[").replace(_,"]")}function A(t){return C(t).replace(E,"{").replace(I,"}").replace(w,"^")}function k(t){return C(t).replace(v,"%2B").replace(S,"+").replace(f,"%23").replace(d,"%26").replace(b,"`").replace(E,"{").replace(I,"}").replace(w,"^")}function R(t){return k(t).replace(g,"%3D")}function O(t){return C(t).replace(f,"%23").replace(m,"%3F")}function x(t){return null==t?"":O(t).replace(p,"%2F")}function N(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const D=/\/$/,P=t=>t.replace(D,"");function L(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=z(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function M(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function U(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function F(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(e.matched[r],n.matched[i])&&j(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function V(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$(t[n],e[n]))return!1;return!0}function $(t,e){return h(t)?B(t,e):h(e)?B(e,t):t===e}function B(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function z(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var H,K;(function(t){t["pop"]="pop",t["push"]="push"})(H||(H={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(K||(K={}));function W(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),P(t)}const G=/^[^#]+#/;function Q(t,e){return t.replace(G,"#")+e}function X(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=X(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Z(t,e){const n=history.state?history.state.position-e:-1;return n+t}const tt=new Map;function et(t,e){tt.set(t,e)}function nt(t){const e=tt.get(t);return tt.delete(t),e}let rt=()=>location.protocol+"//"+location.host;function it(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),U(n,"")}const o=U(n,t);return o+r+i}function st(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=it(t,location),u=n.value,c=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===u)return void(o=null);l=c?s.position-c.position:0}else r(a);i.forEach((t=>{t(n.value,u,{delta:l,type:H.pop,direction:l?l>0?K.forward:K.back:K.unknown})}))};function c(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(u({},t.state,{scroll:Y()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ot(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function at(t){const{history:e,location:n}=window,r={value:it(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:rt()+t+r;try{e[o?"replaceState":"pushState"](s,"",u),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](u)}}function o(t,n){const o=u({},e.state,ot(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=u({},i.value,e.state,{forward:t,scroll:Y()});s(o.current,o,!0);const a=u({},ot(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ut(t){t=W(t);const e=at(t),n=st(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=u({location:"",base:t,go:r,createHref:Q.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ct(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ut(t)}function lt(t){return"string"===typeof t||t&&"object"===typeof t}function ht(t){return"string"===typeof t||"symbol"===typeof t}const ft=Symbol("");var dt;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(dt||(dt={}));function pt(t,e){return u(new Error,{type:t,[ft]:!0},e)}function gt(t,e){return t instanceof Error&&ft in t&&(null==e||!!(t.type&e))}const mt="[^/]+?",vt={sensitive:!1,strict:!1,start:!0,end:!0},yt=/[.+*?^${}()[\]/\\]/g;function _t(t,e){const n=u({},vt,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const t=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let e=0;e<u.length;e++){const r=u[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(yt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||mt;if(h!==mt){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&u.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,u=s in e?e[s]:"";if(h(u)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=h(u)?u.join("/"):u;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function wt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function bt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=wt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Et(r))return 1;if(Et(i))return-1}return i.length-r.length}function Et(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Tt={type:0,value:""},It=/[a-zA-Z0-9_]/;function St(t){if(!t)return[[]];if("/"===t)return[[Tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,u=0,c="",l="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}while(u<t.length)if(a=t[u++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:It.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Ct(t,e,n){const r=_t(St(t.path),n);const i=u(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function At(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=Rt(t);a.aliasOf=r&&r.record;const h=Dt(e,t),f=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(Rt(u({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a})))}let d,p;for(const e of f){const{path:u}=e;if(n&&"/"!==u[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(u&&r+u)}if(d=Ct(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!xt(d)&&o(t.name)),Mt(d)&&c(d),a.children){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d}return p?()=>{o(p)}:l}function o(t){if(ht(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){const e=Pt(t,n);n.splice(e,0,t),t.record.name&&!xt(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw pt(1,{location:t});0,o=i.record.name,a=u(kt(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&kt(t.params,i.keys.map((t=>t.name)))),s=i.stringify(a)}else if(null!=t.path)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw pt(1,{location:t,currentLocation:e});o=i.record.name,a=u({},e.params,t.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:Nt(c)}}function f(){n.length=0,r.clear()}return e=Dt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function kt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rt(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ot(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ot(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function xt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nt(t){return t.reduce(((t,e)=>u(t,e.meta)),{})}function Dt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1,s=bt(t,e[i]);s<0?r=i:n=i+1}const i=Lt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Lt(t){let e=t;while(e=e.parent)if(Mt(e)&&0===bt(t,e))return e}function Mt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ut(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(v," "),n=t.indexOf("="),s=N(n<0?t:t.slice(0,n)),o=n<0?null:N(t.slice(n+1));if(s in e){let t=e[s];h(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=R(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=h(r)?r.map((t=>t&&k(t))):[r&&k(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Vt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=h(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const jt=Symbol(""),$t=Symbol(""),Bt=Symbol(""),zt=Symbol(""),qt=Symbol("");function Ht(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kt(t,e,n,r,i,s=t=>t()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,u)=>{const c=t=>{!1===t?u(pt(4,{from:n,to:e})):t instanceof Error?u(t):lt(t)?u(pt(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s((()=>t.call(r&&r.instances[i],e,n,c)));let h=Promise.resolve(l);t.length<3&&(h=h.then(c)),h.catch((t=>u(t)))}))}function Wt(t,e,n,r,i=t=>t()){const s=[];for(const u of t){0;for(const t in u.components){let c=u.components[t];if("beforeRouteEnter"===e||u.instances[t])if(o(c)){const o=c.__vccOpts||c,a=o[e];a&&s.push(Kt(a,n,r,u,t,i))}else{let o=c();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${t}" at "${u.path}"`);const o=a(s)?s.default:s;u.mods[t]=s,u.components[t]=o;const c=o.__vccOpts||o,l=c[e];return l&&Kt(l,n,r,u,t,i)()}))))}}}return s}function Gt(t){const e=(0,r.WQ)(Bt),n=(0,r.WQ)(zt);const s=(0,r.EW)((()=>{const n=(0,i.R1)(t.to);return e.resolve(n)})),o=(0,r.EW)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(V.bind(null,r));if(o>-1)return o;const a=te(t[e-2]);return e>1&&te(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,t[e-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Zt(n.params,s.value.params))),u=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&j(n.params,s.value.params)));function c(n={}){if(Jt(n)){const n=e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(l);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:u,navigate:c}}function Qt(t){return 1===t.length?t[0]:t}const Xt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,i.Kh)(Gt(t)),{options:s}=(0,r.WQ)(Bt),o=(0,r.EW)((()=>({[ee(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ee(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&Qt(e.default(n));return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Yt=Xt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function te(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ee=(t,e,n)=>null!=t?t:null!=e?e:n,ne=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)(qt),o=(0,r.EW)((()=>t.route||s.value)),a=(0,r.WQ)($t,0),c=(0,r.EW)((()=>{let t=(0,i.R1)(a);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>o.value.matched[c.value]));(0,r.Gt)($t,(0,r.EW)((()=>c.value+1))),(0,r.Gt)(jt,l),(0,r.Gt)(qt,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&V(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,a=l.value,c=a&&a.components[s];if(!c)return re(n.default,{Component:c,route:i});const f=a.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(a.instances[s]=null)},g=(0,r.h)(c,u({},d,e,{onVnodeUnmounted:p,ref:h}));return re(n.default,{Component:g,route:i})||g}}});function re(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ie=ne;function se(t){const e=At(t.routes,t),n=t.parseQuery||Ut,o=t.stringifyQuery||Ft,a=t.history;const f=Ht(),d=Ht(),p=Ht(),g=(0,i.IJ)(q);let m=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(t=>""+t)),y=c.bind(null,x),_=c.bind(null,N);function w(t,n){let r,i;return ht(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function b(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function E(){return e.getRoutes().map((t=>t.record))}function T(t){return!!e.getRecordMatcher(t)}function I(t,r){if(r=u({},r||g.value),"string"===typeof t){const i=L(n,t,r.path),s=e.resolve({path:i.path},r),o=a.createHref(i.fullPath);return u(i,s,{params:_(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=t.path)i=u({},t,{path:L(n,t.path,r.path).path});else{const e=u({},t.params);for(const t in e)null==e[t]&&delete e[t];i=u({},t,{params:y(e)}),r.params=y(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=v(_(s.params));const l=M(o,u({},t,{hash:A(c),path:s.path})),h=a.createHref(l);return u({fullPath:l,hash:c,query:o===Ft?Vt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:h})}function S(t){return"string"===typeof t?L(n,t,g.value.path):u({},t)}function C(t,e){if(m!==t)return pt(8,{from:e,to:t})}function k(t){return D(t)}function R(t){return k(u(S(t),{replace:!0}))}function O(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),u({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function D(t,e){const n=m=I(t),r=g.value,i=t.state,s=t.force,a=!0===t.replace,c=O(n);if(c)return D(u(S(c),{state:"object"===typeof c?u({},i,c.state):i,force:s,replace:a}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&F(o,r,n)&&(h=pt(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((t=>gt(t)?gt(t,2)?t:tt(t):Q(t,l,r))).then((t=>{if(t){if(gt(t,2))return D(u({replace:a},S(t.to),{state:"object"===typeof t.to?u({},i,t.to.state):i,force:s}),e||l)}else t=$(l,r,!0,a,i);return j(l,r,t),t}))}function P(t,e){const n=C(t,e);return n?Promise.reject(n):Promise.resolve()}function U(t){const e=ot.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function V(t,e){let n;const[r,i,s]=oe(t,e);n=Wt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Kt(r,t,e))}));const o=P.bind(null,t,e);return n.push(o),ut(n).then((()=>{n=[];for(const r of f.list())n.push(Kt(r,t,e));return n.push(o),ut(n)})).then((()=>{n=Wt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Kt(r,t,e))}));return n.push(o),ut(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(Kt(i,t,e));else n.push(Kt(r.beforeEnter,t,e));return n.push(o),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Wt(s,"beforeRouteEnter",t,e,U),n.push(o),ut(n)))).then((()=>{n=[];for(const r of d.list())n.push(Kt(r,t,e));return n.push(o),ut(n)})).catch((t=>gt(t,8)?t:Promise.reject(t)))}function j(t,e,n){p.list().forEach((r=>U((()=>r(t,e,n)))))}function $(t,e,n,r,i){const o=C(t,e);if(o)return o;const c=e===q,l=s?history.state:{};n&&(r||c?a.replace(t.fullPath,u({scroll:c&&l&&l.scroll},i)):a.push(t.fullPath,i)),g.value=t,rt(t,e,n,c),tt()}let B;function z(){B||(B=a.listen(((t,e,n)=>{if(!at.listening)return;const r=I(t),i=O(r);if(i)return void D(u(i,{replace:!0,force:!0}),r).catch(l);m=r;const o=g.value;s&&et(Z(o.fullPath,n.delta),Y()),V(r,o).catch((t=>gt(t,12)?t:gt(t,2)?(D(u(S(t.to),{force:!0}),r).then((t=>{gt(t,20)&&!n.delta&&n.type===H.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(t,r,o)))).then((t=>{t=t||$(r,o,!1),t&&(n.delta&&!gt(t,8)?a.go(-n.delta,!1):n.type===H.pop&&gt(t,20)&&a.go(-1,!1)),j(r,o,t)})).catch(l)})))}let K,W=Ht(),G=Ht();function Q(t,e,n){tt(t);const r=G.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function X(){return K&&g.value!==q?Promise.resolve():new Promise(((t,e)=>{W.add([t,e])}))}function tt(t){return K||(K=!t,z(),W.list().forEach((([e,n])=>t?n(t):e())),W.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const u=!i&&nt(Z(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,u))).then((t=>t&&J(t))).catch((t=>Q(t,e,n)))}const it=t=>a.go(t);let st;const ot=new Set,at={currentRoute:g,listening:!0,addRoute:w,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:E,resolve:I,options:t,push:k,replace:R,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:G.add,isReady:X,install(t){const e=this;t.component("RouterLink",Yt),t.component("RouterView",ie),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!st&&g.value===q&&(st=!0,k(a.location).catch((t=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide(Bt,e),t.provide(zt,(0,i.Gc)(n)),t.provide(qt,g);const r=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(m=q,B&&B(),B=null,g.value=q,st=!1,K=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>U(e)))),Promise.resolve())}return at}function oe(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>V(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>V(t,a)))||i.push(a))}return[n,r,i]}function ae(){return(0,r.WQ)(Bt)}},1548:function(t,e,n){"use strict";var r=n(4576),i=n(9039),s=n(9519),o=n(4215),a=r.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},1625:function(t,e,n){"use strict";var r=n(9504);t.exports=r({}.isPrototypeOf)},1658:function(t,e,n){"use strict";var r=n(6518),i=n(6469),s=n(6837),o=n(6198),a=n(5610),u=n(5397),c=n(1291),l=Array,h=Math.max,f=Math.min;r({target:"Array",proto:!0},{toSpliced:function(t,e){var n,r,i,d,p=u(this),g=o(p),m=a(t,g),v=arguments.length,y=0;for(0===v?n=r=0:1===v?(n=0,r=g-m):(n=v-2,r=f(h(c(e),0),g-m)),i=s(g+n-r),d=l(i);y<m;y++)d[y]=p[y];for(;y<m+n;y++)d[y]=arguments[y-m+2];for(;y<i;y++)d[y]=p[y+r-n];return d}}),i("toSpliced")},1698:function(t,e,n){"use strict";var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},1701:function(t,e,n){"use strict";var r=n(6518),i=n(713),s=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:s},{map:i})},1767:function(t){"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1795:function(t,e,n){var r=n(896),i=n(9692),s="Expected a function";function o(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}t.exports=o},1806:function(t,e,n){"use strict";var r=n(6518),i=n(8551),s=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},1828:function(t,e,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),u=r([].push);t.exports=function(t,e){var n,r=s(t),c=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&u(l,n);while(e.length>c)i(r,n=e[c++])&&(~o(l,n)||u(l,n));return l}},2106:function(t,e,n){"use strict";var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},2140:function(t,e,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},2195:function(t,e,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},2211:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2360:function(t,e,n){"use strict";var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),u=n(397),c=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=c("iframe"),n="java"+p+":";return e.style.display="none",u.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=o.length;while(t--)delete w[d][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:s.f(n,e)}},2475:function(t,e,n){"use strict";var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},2489:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),u=n(9462),c=n(6319),l=n(6395),h=u((function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,c(r,s,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return o(this),s(t),new h(a(this),{predicate:t})}})},2529:function(t){"use strict";t.exports=function(t,e){return{value:t,done:e}}},2603:function(t,e,n){"use strict";var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2652:function(t,e,n){"use strict";var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),u=n(6198),c=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,v,y,_,w,b,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),k=r(e,T),R=function(t){return m&&f(m,"normal",t),new p(!0,t)},O=function(t){return I?(s(t),A?k(t[0],t[1],R):k(t[0],t[1])):A?k(t,R):k(t)};if(S)m=t.iterator;else if(C)m=t;else{if(v=h(t),!v)throw new d(o(t)+" is not iterable");if(a(v)){for(y=0,_=u(t);_>y;y++)if(w=O(t[y]),w&&c(g,w))return w;return new p(!1)}m=l(t,v)}b=S?t.next:m.next;while(!(E=i(b,m)).done){try{w=O(E.value)}catch(x){f(m,"throw",x)}if("object"==typeof w&&w&&c(g,w))return w}return new p(!1)}},2777:function(t,e,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),u=n(8227),c=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,u=o(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!i(n)||s(n))return n;throw new c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},2787:function(t,e,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),u=o("IE_PROTO"),c=Object,l=c.prototype;t.exports=a?c.getPrototypeOf:function(t){var e=s(t);if(r(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},2796:function(t,e,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=u[a(t)];return n===l||n!==c&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},2812:function(t){"use strict";var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},2839:function(t,e,n){"use strict";var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},2967:function(t,e,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},2992:function(t,e,n){"use strict";n.d(e,{HF:function(){return Se},xI:function(){return Kr},df:function(){return Mn},CI:function(){return Ue}});n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(3405),i=n(774),s=n(1363);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=u,l=new i.FA("auth","Firebase",u()),h=new s.Vy("@firebase/auth");function f(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${t}`,...e)}function d(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${t}`,...e)}
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
 */function p(t,...e){throw _(t,...e)}function g(t,...e){return _(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},c()),{[e]:n}),s=new i.FA("auth","Firebase",r);return s.create(e,{appName:t.name})}function v(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function w(t,e,...n){if(!t)throw _(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function E(t,e){t||b(e)}
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
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function R(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new k(3e4,6e4);
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
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,s={}){return L(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return(0,i.c1)()||(c.referrerPolicy="no-referrer"),O.fetch()(U(t,t.config.apiHost,n,a),c)}))}async function L(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},x),e);try{const e=new V(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof i.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?R(t.config,i):`${t.config.apiScheme}://${i}`}function F(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),N.get())}))}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
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
 */function $(t){return void 0!==t&&void 0!==t.enterprise}class B{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return F(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
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
 */async function q(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function H(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
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
 */async function W(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),s=Q(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:K(G(s.auth_time)),issuedAtTime:K(G(s.iat)),expirationTime:K(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(t){const e=Q(t);return w(e,"internal-error"),w("undefined"!==typeof e.exp,"internal-error"),w("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function Y(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&J(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function et(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Y(t,H(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?it(s.providerUserInfo):[],a=rt(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function st(t,e){const n=await L(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=U(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return P(t,"POST","/v2/accounts:revokeToken",D(t,e))}
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
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w("undefined"!==typeof t.idToken,"internal-error"),w("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):X(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){w(0!==t.length,"internal-error");const e=X(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(w(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await st(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new at;return n&&(w("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function ut(t,e){w("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Y(this,this.stsTokenManager.getToken(this.auth,t));return w(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await Y(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=e;w(y&&T,t,"internal-error");const I=at.fromJSON(this.name,T);w("string"===typeof y,t,"internal-error"),ut(l,t.name),ut(h,t.name),w("boolean"===typeof _,t,"internal-error"),w("boolean"===typeof b,t,"internal-error"),ut(f,t.name),ut(d,t.name),ut(p,t.name),ut(g,t.name),ut(m,t.name),ut(v,t.name);const S=new ct({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ct({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new at;o.updateFromIdToken(n);const a=new ct({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,u),a}}
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
 */const lt=new Map;function ht(t){E(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
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
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(dt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(dt);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=ct._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(u){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(u){}}))),new gt(i,t,n)):new gt(i,t,n)}}
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
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||_t(e))&&!e.includes("edge/"))return"Chrome";if(bt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _t(t=(0,i.ZQ)()){return/crios\//i.test(t)}function wt(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function bt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,i.ZQ)()){return/webos/i.test(t)}function It(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,i.ZQ)()){var e;return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ct(){return(0,i.lT)()&&10===document.documentMode}function At(t=(0,i.ZQ)()){return It(t)||bt(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||wt(t)}
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
 */const xt=6;class Nt{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:xt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
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
 */class Dt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await H(this,{idToken:t}),n=await ct._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,i.Ku)(t):null;return e&&w(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ot(this),e=new Nt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;w(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Pt(t){return(0,i.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function Ft(t){return Mt.loadJS(t)}function Vt(){return Mt.recaptchaEnterpriseScript}function jt(){return Mt.gapiScript}function $t(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
 */class Bt{constructor(){this.enterprise=new zt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class zt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const qt="recaptcha-enterprise",Ht="NO_RECAPTCHA";class Kt{constructor(t){this.type=qt,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{z(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ht)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new Bt;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&$(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Vt();0!==e.length&&(e+=n),Ft(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Wt(t,e,n,r=!1,i=!1){const s=new Kt(t);let o;if(i)o=Ht;else try{o=await s.verify(n)}catch(u){o=await s.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Gt(t,e,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wt(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Wt(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await Wt(t,e,n);return r(t,i).catch((async i=>{var s;if("AUDIT"===(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Wt(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await Wt(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}async function Qt(t){const e=Pt(t),n=await z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new B(n);if(null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()){const t=new Kt(e);t.verify()}}
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
 */function Xt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Yt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Jt(t,e,n){const r=Pt(t);w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Zt(e),{host:a,port:u}=te(e),c=null===u?"":`:${u}`,l={url:`${o}//${a}${c}/`},h=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return w(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void w((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,s||ne()}function Zt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function te(t){const e=Zt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ee(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ee(e)}}}function ee(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ne(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */class re{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
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
 */class ue extends re{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ue(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ue(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,e,"signInWithPassword",se,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oe(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gt(t,n,"signUpPassword",ie,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ae(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function ce(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
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
 */const le="http://localhost";class he extends re{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new he(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new he(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ce(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ce(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ce(t,e)}buildRequest(){const t={requestUri:le,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
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
 */async function fe(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function de(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function pe(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const ge={["USER_NOT_FOUND"]:"user-not-found"};async function me(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),ge)}
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
 */class ve extends re{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ve({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ve({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return de(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return pe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return me(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ve({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ye(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _e(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||e||t}class we{constructor(t){var e,n,r,s,o,a;const u=(0,i.I9)((0,i.hp)(t)),c=null!==(e=u["apiKey"])&&void 0!==e?e:null,l=null!==(n=u["oobCode"])&&void 0!==n?n:null,h=ye(null!==(r=u["mode"])&&void 0!==r?r:null);w(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=u["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=_e(t);try{return new we(e)}catch(n){return null}}}
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
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(t,e){return ue._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=we.parseLink(e);return w(n,"argument-error"),ue._fromEmailAndCode(t,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ie extends Te{constructor(){super("facebook.com")}static credential(t){return he._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ie.credentialFromTaggedObject(t)}static credentialFromError(t){return Ie.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ie.credential(t.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
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
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return he._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Se.credential(e,n)}catch(r){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
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
class Ce extends Te{constructor(){super("github.com")}static credential(t){return he._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ce.credential(t.oauthAccessToken)}catch(e){return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com",Ce.PROVIDER_ID="github.com";
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
class Ae extends Te{constructor(){super("twitter.com")}static credential(t,e){return he._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ae.credentialFromTaggedObject(t)}static credentialFromError(t){return Ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ae.credential(e,n)}catch(r){return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";
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
class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ct._fromIdTokenResponse(t,n,r),s=Re(n),o=new ke({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Re(n);return new ke({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Re(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Oe extends i.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Oe.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Oe(t,e,n,r)}}function xe(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Oe._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Ne(t,e,n=!1){const r=await Y(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",r)}
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
async function De(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await Y(t,xe(i,s,e,t),n);w(r.idToken,i,"internal-error");const o=Q(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(t.uid===a,i,"user-mismatch"),ke._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
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
 */async function Pe(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i="signIn",s=await xe(t,i,e),o=await ke._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Le(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Me(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Ue(t){return(0,i.Ku)(t).signOut()}
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
function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Ve(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function $e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const Be="__sak";
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
 */class ze{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Be,"1"),this.storage.removeItem(Be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */const qe=1e3,He=10;class Ke extends ze{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=At(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Ct()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,He):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ke.type="LOCAL";const We=Ke;
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
 */class Ge extends ze{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ge.type="SESSION";const Qe=Ge;
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
 */function Xe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class Ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ye(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Xe(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Je(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ye.receivers=[];class Ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Je("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function tn(){return window}function en(t){tn().location.href=t}
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
 */function nn(){return"undefined"!==typeof tn()["WorkerGlobalScope"]&&"function"===typeof tn()["importScripts"]}async function rn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function sn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function on(){return nn()?self:null}
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
 */const an="firebaseLocalStorageDb",un=1,cn="firebaseLocalStorage",ln="fbase_key";class hn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function fn(t,e){return t.transaction([cn],e?"readwrite":"readonly").objectStore(cn)}function dn(){const t=indexedDB.deleteDatabase(an);return new hn(t).toPromise()}function pn(){const t=indexedDB.open(an,un);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(cn,{keyPath:ln})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(cn)?e(n):(n.close(),await dn(),e(await pn()))}))}))}async function gn(t,e,n){const r=fn(t,!0).put({[ln]:e,value:n});return new hn(r).toPromise()}async function mn(t,e){const n=fn(t,!1).get(e),r=await new hn(n).toPromise();return void 0===r?null:r.value}function vn(t,e){const n=fn(t,!0).delete(e);return new hn(n).toPromise()}const yn=800,_n=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>_n)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(on()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await rn(),!this.activeServiceWorker)return;this.sender=new Ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&sn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pn();return await gn(t,Be,"1"),await vn(t,Be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>gn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>mn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>vn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=fn(t,!1).getAll();return new hn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const bn=wn;
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
 */function En(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function Tn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function In(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
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
 */$t("rcb"),new k(3e4,6e4);
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
const Sn="recaptcha";async function Cn(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Qt(t)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){w("enroll"===e.type,t,"internal-error");const r={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===Ht){w((null===n||void 0===n?void 0:n.type)===Sn,t,"argument-error");const r=await An(t,e,n);return Fe(t,r)}return Fe(t,e)},o=Gt(t,r,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{w("signin"===e.type,t,"internal-error");const s=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;w(s,t,"missing-multi-factor-info");const o={mfaPendingCredential:e.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===Ht){w((null===n||void 0===n?void 0:n.type)===Sn,t,"argument-error");const r=await An(t,e,n);return En(t,r)}return En(t,e)},u=Gt(t,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),c=await u.catch((t=>Promise.reject(t)));return c.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(t,e)=>{if(e.captchaResponse===Ht){w((null===n||void 0===n?void 0:n.type)===Sn,t,"argument-error");const r=await An(t,e,n);return fe(t,r)}return fe(t,e)},s=Gt(t,e,"sendVerificationCode",r,"PHONE_PROVIDER"),o=await s.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function An(t,e,n){w(n.type===Sn,t,"argument-error");const r=await n.verify();w("string"===typeof r,t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const t=i.phoneEnrollmentInfo.phoneNumber,e=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:r,captchaResponse:e,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const t=i.phoneSignInInfo.captchaResponse,e=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:t,clientType:e,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
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
 */class kn{constructor(t){this.providerId=kn.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return Cn(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return ve._fromVerification(t,e)}static credentialFromResult(t){const e=t;return kn.credentialFromTaggedObject(e)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ve._fromTokenResponse(e,n):null}}
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
function Rn(t,e){return e?ht(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */kn.PROVIDER_ID="phone",kn.PHONE_SIGN_IN_METHOD="phone";class On extends re{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ce(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ce(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ce(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xn(t){return Pe(t.auth,new On(t),t.bypassAuthState)}function Nn(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),De(n,new On(t),t.bypassAuthState)}async function Dn(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Ne(n,new On(t),t.bypassAuthState)}
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
 */class Pn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xn;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return Nn;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ln=new k(2e3,1e4);async function Mn(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(g(t,"operation-not-supported-in-this-environment"));const i=Pt(t);y(t,e,Ee);const s=Rn(i,n),o=new Un(i,"signInViaPopup",e,s);return o.executeNotNull()}class Un extends Pn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Ln.get())};t()}}Un.currentPopupAction=null;
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
const Fn="pendingRedirect",Vn=new Map;class jn extends Pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vn.get(this.auth._key());if(!t){try{const e=await $n(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Vn.set(this.auth._key(),t)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function $n(t,e){const n=qn(e),r=zn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Bn(t,e){Vn.set(t._key(),e)}function zn(t){return ht(t._redirectPersistence)}function qn(t){return pt(Fn,t.config.apiKey,t.name)}
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
 */async function Hn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i=Pt(t),s=Rn(i,e),o=new jn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
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
const Kn=6e5;class Wn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Qn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gn(t))}saveEventToCache(t){this.cachedEventUids.add(Gn(t)),this.lastProcessedEventTime=Date.now()}}function Gn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Qn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(t);default:return!1}}
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
 */async function Yn(t,e={}){return P(t,"GET","/v1/projects",e)}
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
 */const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zn=/^https?/;async function tr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yn(t);for(const r of e)try{if(er(r))return}catch(n){}p(t,"unauthorized-domain")}function er(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Zn.test(n))return!1;if(Jn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const nr=new k(3e4,6e4);function rr(){const t=tn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ir(t){return new Promise(((e,n)=>{var r,i,s;function o(){rr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rr(),n(g(t,"network-request-failed"))},timeout:nr.get()})}if(null===(i=null===(r=tn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=tn().gapi)||void 0===s?void 0:s.load)){const e=$t("iframefcb");return tn()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},Ft(`${jt()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw sr=null,t}))}let sr=null;function or(t){return sr=sr||ir(t),sr}
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
 */const ar=new k(5e3,15e3),ur="__/auth/iframe",cr="emulator/auth/iframe",lr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fr(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?R(e,cr):`https://${t.config.authDomain}/${ur}`,s={apiKey:e.apiKey,appName:t.name,v:r.MF},o=hr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function dr(t){const e=await or(t),n=tn().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:fr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),s=tn().setTimeout((()=>{r(i)}),ar.get());function o(){tn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const pr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gr=500,mr=600,vr="_blank",yr="http://localhost";class _r{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function wr(t,e,n,r=gr,s=mr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},pr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(u=_t(l)?vr:n),vt(l)&&(e=e||yr,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(l)&&"_self"!==u)return br(e||"",u),new _r(null);const f=window.open(e||"",u,h);w(f,t,"popup-blocked");try{f.focus()}catch(d){}return new _r(f)}function br(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Er="__/auth/handler",Tr="emulator/auth/handler",Ir=encodeURIComponent("fac");async function Sr(t,e,n,s,o,a){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(e instanceof Ee){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof Te){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const l=await t._getAppCheckToken(),h=l?`#${Ir}=${encodeURIComponent(l)}`:"";return`${Cr(t)}?${(0,i.Am)(c).slice(1)}${h}`}function Cr({config:t}){return t.emulator?R(t,Tr):`https://${t.authDomain}/${Er}`}
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
 */const Ar="webStorageSupport";class kr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=Hn,this._overrideRedirectResult=Bn}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Sr(t,e,n,T(),r);return wr(t,s,Je())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Sr(t,e,n,T(),r);return en(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await dr(t),n=new Wn(t);return e.register("authEvent",(e=>{w(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ar,{type:Ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ar];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=tr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return At()||yt()||It()}}const Rr=kr;class Or{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class xr extends Or{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new xr(t)}_finalizeEnroll(t,e,n){return Ve(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Tn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Nr{constructor(){}static assertion(t){return xr._fromCredential(t)}}Nr.FACTOR_ID="phone";class Dr{static assertionForEnrollment(t,e){return Pr._fromSecret(t,e)}static assertionForSignIn(t,e){return Pr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;w("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await je(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Lr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Dr.FACTOR_ID="totp";class Pr extends Or{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Pr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Pr(e,t)}async _finalizeEnroll(t,e,n){return w("undefined"!==typeof this.secret,t,"argument-error"),$e(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){w(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return In(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Lr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Lr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Mr(t)||Mr(e))&&(r=!0),r&&(Mr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Mr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Mr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Ur="@firebase/auth",Fr="1.9.1";
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
class Vr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function jr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $r(t){(0,r.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},c=new Dt(r,i,s,u);return Yt(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Vr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Ur,Fr,jr(t)),(0,r.KO)(Ur,Fr,"esm2017")}
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
 */const Br=300,zr=(0,i.XA)("authIdTokenMaxAge")||Br;let qr=null;const Hr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zr)return;const i=null===n||void 0===n?void 0:n.token;qr!==i&&(qr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xt(t,{popupRedirectResolver:Rr,persistence:[bn,We,Qe]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Hr(t.toString());Me(n,e,(()=>e(n.currentUser))),Le(n,(t=>e(t)))}}const o=(0,i.Tj)("auth");return o&&Jt(n,`http://${o}`),n}function Wr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Wr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),$r("Browser")},3167:function(t,e,n){"use strict";var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3238:function(t,e,n){"use strict";var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(e){return!0}}},3392:function(t,e,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3405:function(t,e,n){"use strict";n.d(e,{MF:function(){return _t},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return bt},Wp:function(){return wt},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579);var r=n(852),i=n(1363),s=n(774);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,c())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
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
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.11.3",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",z="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",K="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai",it="@firebase/firestore-compat",st="firebase",ot="11.5.0",at="[DEFAULT]",ut={[x]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[z]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[K]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ct=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ct.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
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
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
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
const _t=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw vt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw vt.create("no-options");const a=ct.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw vt.create("duplicate-app",{appName:o})}const u=new r.h1(o);for(const r of ht.values())u.addComponent(r);const c=new yt(n,i,u);return ct.set(o,c),c}function bt(t=at){const e=ct.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw vt.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let s=null!==(i=ut[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}dt(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const Tt="firebase-heartbeat-database",It=1,St="firebase-heartbeat-store";let Ct=null;function At(){return Ct||(Ct=I(Tt,It,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function kt(t){try{const e=await At(),n=e.transaction(St),r=await n.objectStore(St).get(Ot(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function Rt(t,e){try{const n=await At(),r=n.transaction(St,"readwrite"),i=r.objectStore(St);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
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
 */const xt=1024,Nt=30;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Nt){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return D.warn(e),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=xt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
 */function Vt(t){dt(new r.uA("platform-logger",(t=>new R(t)),"PRIVATE")),dt(new r.uA("heartbeat",(t=>new Dt(t)),"PRIVATE")),Et(x,N,t),Et(x,N,"esm2017"),Et("fire-js","")}Vt("")},3440:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),u=n(8469),c=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?u(e,(function(t){n.includes(t)&&h(i,t)})):c(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},3506:function(t,e,n){"use strict";var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},3579:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),s(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3650:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),u=i.add,c=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,(function(t){c(e,t)?l(i,t):u(i,t)})),i}},3706:function(t,e,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},3724:function(t,e,n){"use strict";var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3789:function(t,e,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),u="Invalid size",c=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(u);var n=o(e);if(n<0)throw new c(u);return new f(t,n)}},3838:function(t,e,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},3853:function(t,e,n){"use strict";var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",(function(t){return!t}));r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},3925:function(t,e,n){"use strict";var r=n(34);t.exports=function(t){return r(t)||null===t}},4055:function(t,e,n){"use strict";var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4114:function(t,e,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),u=n(9039),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return o(e,n),n}})},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},4124:function(t,e,n){"use strict";var r=n(4576);t.exports=function(t,e){var n=r[t],i=n&&n.prototype;return i&&i[e]}},4149:function(t){"use strict";var e=RangeError;t.exports=function(t){if(t===t)return t;throw new e("NaN is not allowed")}},4204:function(t,e,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),u=s(e);return a(n,(function(t){i(u,t)})),u}},4209:function(t,e,n){"use strict";var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4215:function(t,e,n){"use strict";var r=n(4576),i=n(2839),s=n(2195),o=function(t){return i.slice(0,t.length)===t};t.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},4232:function(t,e,n){"use strict";n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return H},BX:function(){return nt},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return c},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return w},MZ:function(){return i},Mp:function(){return u},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return A},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return _},Tr:function(){return K},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return k},yL:function(){return T},yQ:function(){return V}});n(4114),n(8111),n(2489),n(7588);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,u=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),c=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),v=t=>"[object Date]"===S(t),y=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),k=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},x=/-(\w)/g,N=O((t=>t.replace(x,((t,e)=>e?e.toUpperCase():"")))),D=/\B([A-Z])/g,P=O((t=>t.replace(D,"-$1").toLowerCase())),L=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=O((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=r(q);function K(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?X(r):K(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||E(t))return t}const W=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(W).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!_(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4243:function(t,e,n){var r=n(4867),i=n(9692),s=n(9299),o=NaN,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function h(t){if("number"==typeof t)return t;if(s(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=h},4270:function(t,e,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},4376:function(t,e,n){"use strict";var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4402:function(t,e,n){"use strict";var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},4449:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),u=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==u(l,(function(t){if(i(e,t))return c(l,"normal",!1)}))}},4483:function(t,e,n){"use strict";var r,i,s,o,a=n(4576),u=n(9429),c=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(c)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=u("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}t.exports=d},4495:function(t,e,n){"use strict";var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4527:function(t,e,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4576:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4603:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.append),l=i(u["delete"]),h=i(u.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),u=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===u||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},4644:function(t,e,n){"use strict";var r,i,s,o=n(7811),a=n(3724),u=n(4576),c=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),_=n(2967),w=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=u.Int8Array,C=S&&S.prototype,A=u.Uint8ClampedArray,k=A&&A.prototype,R=S&&y(S),O=C&&y(C),x=Object.prototype,N=u.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(u.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(F,e)||h(V,e)},$=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(F,e)||h(V,e)},z=function(t){if(B(t))return t;throw new N("Target is not a typed array")},q=function(t){if(c(t)&&(!_||v(R,t)))return t;throw new N(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in F){var s=u[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(c){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=u[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in F)i=u[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=u[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=u[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!c(R)||R===Function.prototype)&&(R=function(){throw new N("Incorrect invocation")},M))for(r in F)u[r]&&_(u[r],R);if((!M||!O||O===x)&&(O=R.prototype,M))for(r in F)u[r]&&_(u[r].prototype,O);if(M&&y(k)!==O&&_(k,O),a&&!h(O,D))for(r in U=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)u[r]&&p(u[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:R,TypedArrayPrototype:O}},4659:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},4732:function(t,e,n){"use strict";var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,u=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);c("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(u(e),e);return l(n,t)}))},4867:function(t,e,n){var r=n(5761),i=/^\s+/;function s(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=s},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},4913:function(t,e,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},4916:function(t,e,n){"use strict";var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(u){var o=new n;return o.add(1),o.add(2),e(o[t](s(1/0)))}}}catch(u){return!1}}},4972:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),u=n(9590),c=n(9462),l=n(9539),h=n(6395),f=c((function(){var t=this.iterator;if(!this.remaining--)return this.done=!0,l(t,"normal",void 0);var e=s(i(this.next,t)),n=this.done=!!e.done;return n?void 0:e.value}));r({target:"Iterator",proto:!0,real:!0,forced:h},{take:function(t){s(this);var e=u(a(+t));return new f(o(this),{remaining:e})}})},4979:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,u=n(9297),c=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(8574),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),_=function(){c(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=new v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in new v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),f)if(u(f,k)){var R=f[k],O=R.s;u(C,O)||a(C,O,o(6,R.c))}},5002:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5024:function(t,e,n){"use strict";var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},5031:function(t,e,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),u=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?u(e,n(t)):e}},5091:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},5130:function(t,e,n){"use strict";n.d(e,{D$:function(){return Z},Ef:function(){return st},Jo:function(){return W},jR:function(){return et},u1:function(){return G}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(ut){}const a=s?t=>s.createHTML(t):t=>t,u="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(u,t):"mathml"===e?l.createElementNS(c,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const _=/(^|;)\s*display\s*:/;function w(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const t in n)"display"===t&&(o=!0),E(r,t,n[t])}else if(s){if(e!==n){const t=r[y];t&&(n+=";"+t),r.cssText=n,o=_.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[v]&&(r.display="none"))}const b=/\s*!important$/;function E(t,e,n){if((0,i.cy)(n))n.forEach((n=>E(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S(t,e);b.test(n)?t.setProperty((0,i.Tg)(r),n.replace(b,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],I={};function S(t,e){const n=I[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return I[e]=r;r=(0,i.ZH)(r);for(let i=0;i<T.length;i++){const n=T[i]+r;if(n in t)return I[e]=n}return e}const C="http://www.w3.org/1999/xlink";function A(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(C,e.slice(6,e.length)):t.setAttributeNS(C,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function k(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(ut){0}u&&t.removeAttribute(s||e)}function R(t,e,n,r){t.addEventListener(e,n,r)}function O(t,e,n,r){t.removeEventListener(e,n,r)}const x=Symbol("_vei");function N(t,e,n,r,i=null){const s=t[x]||(t[x]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=P(e);if(r){const o=s[e]=F(r,i);R(t,n,o,a)}else o&&(O(t,n,o,a),s[e]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function P(t){let e;if(D.test(t)){let n;e={};while(n=t.match(D))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let L=0;const M=Promise.resolve(),U=()=>L||(M.then((()=>L=0)),L=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(V(t,n.value),e,5,[t])};return n.value=t,n.attached=U(),n}function V(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const j=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?w(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||N(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):B(t,e,r,a))?(k(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||A(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),A(t,e,r,a)):k(t,(0,i.PT)(e),r,o,e)};function B(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&j(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!j(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function q(t){t.target.composing=!0}function H(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const K=Symbol("_assign"),W={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[K]=z(s);const o=r||s.props&&"number"===s.props.type;R(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[K](r)})),n&&R(t,"change",(()=>{t.value=t.value.trim()})),e||(R(t,"compositionstart",q),R(t,"compositionend",H),R(t,"change",H))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[K]=z(a),t.composing)return;const u=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),c=null==e?"":e;if(u!==c){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===c)return}t.value=c}}};const G={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.vM)(e);R(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(X(t)):X(t)));t[K](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[K]=z(s)},mounted(t,{value:e}){Q(t,e)},beforeUpdate(t,e,n){t[K]=z(n)},updated(t,{value:e}){t._assigning||Q(t,e)}};function Q(t,e){const n=t.multiple,r=(0,i.cy)(e);if(!n||r||(0,i.vM)(e)){for(let s=0,o=t.options.length;s<o;s++){const o=t.options[s],a=X(o);if(n)if(r){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.u3)(e,a)>-1}else o.selected=e.has(a);else if((0,i.BX)(X(o),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function X(t){return"_value"in t?t._value:t.value}const Y=["ctrl","shift","alt","meta"],J={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Y.some((n=>t[`${n}Key`]&&!e.includes(n)))},Z=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=J[e[t]];if(r&&r(n,e))return}return t(n,...r)})},tt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},et=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||tt[t]===r))?t(n):void 0})},nt=(0,i.X$)({patchProp:$},f);let rt;function it(){return rt||(rt=(0,r.K9)(nt))}const st=(...t)=>{const e=it().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=at(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,ot(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ot(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function at(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},5169:function(t,e,n){"use strict";var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5170:function(t,e,n){"use strict";var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},5370:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},5397:function(t,e,n){"use strict";var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},5610:function(t,e,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5636:function(t,e,n){"use strict";var r=n(4576),i=n(9504),s=n(6706),o=n(7696),a=n(5169),u=n(7394),c=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,m=d.prototype,v=i(g.slice),y=s(g,"resizable","get"),_=s(g,"maxByteLength","get"),w=i(m.getInt8),b=i(m.setInt8);t.exports=(l||c)&&function(t,e,n){var r,i=u(t),s=void 0===e?i:o(e),g=!y||!y(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===s&&(n||g)))return t;if(i>=s&&(!n||g))r=v(t,0,s);else{var m=n&&!g&&_?{maxByteLength:_(t)}:void 0;r=new f(s,m);for(var E=new d(t),T=new d(r),I=p(s,i),S=0;S<I;S++)b(T,S,w(E,S))}return l||c(t),r}},5677:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},5745:function(t,e,n){"use strict";var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},5761:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},5854:function(t,e,n){"use strict";var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5876:function(t,e,n){"use strict";var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",(function(t){return t}));r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},5917:function(t,e,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5966:function(t,e,n){"use strict";var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6080:function(t,e,n){"use strict";var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6119:function(t,e,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6193:function(t,e,n){"use strict";var r=n(4215);t.exports="NODE"===r},6198:function(t,e,n){"use strict";var r=n(8014);t.exports=function(t){return r(t.length)}},6269:function(t){"use strict";t.exports={}},6279:function(t,e,n){"use strict";var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},6319:function(t,e,n){"use strict";var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},6395:function(t){"use strict";t.exports=!1},6400:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="11.5.0";
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
(0,r.KO)(i,s,"app")},6469:function(t,e,n){"use strict";var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},6518:function(t,e,n){"use strict";var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),u=n(7740),c=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=c(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},6573:function(t,e,n){"use strict";var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},6699:function(t,e,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6706:function(t,e,n){"use strict";var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},6768:function(t,e,n){"use strict";n.d(e,{$u:function(){return st},CE:function(){return Xe},Df:function(){return $},EW:function(){return Fn},FK:function(){return Ve},Fv:function(){return cn},Gt:function(){return qt},Gy:function(){return L},K9:function(){return fe},KC:function(){return nt},Lk:function(){return nn},MZ:function(){return j},OW:function(){return V},Q3:function(){return ln},QP:function(){return U},RG:function(){return yt},WQ:function(){return Ht},Wv:function(){return Ye},bF:function(){return rn},bo:function(){return R},dY:function(){return m},eW:function(){return un},g2:function(){return dt},h:function(){return Vn},k6:function(){return k},nI:function(){return wn},pI:function(){return vt},pM:function(){return B},qL:function(){return o},sV:function(){return rt},uX:function(){return He},wB:function(){return Te},xo:function(){return ot}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(c)return(0,r.C4)(),s(c,null,10,[t,o,a]),void(0,r.bl)()}u(t,n,a,o,l)}function u(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const c=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function v(t){let e=l+1,n=c.length;while(e<n){const r=e+n>>>1,i=c[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function y(t){if(!(1&t.flags)){const e=T(t),n=c[c.length-1];!n||!(2&t.flags)&&e>=T(n)?c.push(t):c.splice(v(e),0,t),t.flags|=1,_()}}function _(){g||(g=p.then(I))}function w(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),_()}function b(t,e,n=l+1){for(0;n<c.length;n++){const e=c[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,c.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>T(t)-T(e)));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function I(t){i.tE;try{for(l=0;l<c.length;l++){const t=c[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<c.length;l++){const t=c[l];t&&(t.flags&=-2)}l=-1,c.length=0,E(t),g=null,(c.length||h.length)&&I(t)}}let S=null,C=null;function A(t){const e=S;return S=t,C=t&&t.type.__scopeId||null,e}function k(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ge(-1);const i=A(e);let s;try{s=t(...n)}finally{A(i),r._d&&Ge(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function R(t,e){if(null===S)return t;const n=Ln(S),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,u,c=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:u,modifiers:c}))}return t}function O(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let u=0;u<s.length;u++){const c=s[u];a&&(c.oldValue=a[u].value);let l=c.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,c,t,e]),(0,r.bl)())}}const x=Symbol("_vte"),N=t=>t.__isTeleport;const D=Symbol("_leaveCb"),P=Symbol("_enterCb");function L(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rt((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const M=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function F(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function V(t,e,n,r,s){const{appear:a,mode:u,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),T=F(n,t),I=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];I(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:u,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=y||l}e[D]&&e[D](!0);const i=T[E];i&&Ze(t,i)&&i.el[D]&&i.el[D](),I(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=_||h,r=w||f,i=b||d}let s=!1;const o=t[P]=e=>{s||(s=!0,I(e?i:r,[t]),C.delayedLeave&&C.delayedLeave(),t[P]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[P]&&e[P](!0),n.isUnmounting)return r();I(p,[e]);let s=!1;const o=e[D]=n=>{s||(s=!0,r(),I(n?v:m,[e]),e[D]=void 0,T[i]===t&&delete T[i])};T[i]=t,g?S(g,[e,o]):o()},clone(t){const i=V(t,e,n,r,s);return s&&s(i),i}};return C}function j(t,e){6&t.shapeFlag&&t.component?(t.transition=e,j(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ve?(128&o.patchFlag&&i++,r=r.concat($(o.children,e,a))):(e||o.type!==$e)&&r.push(null!=a?an(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function B(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function z(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function q(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>q(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(H(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&q(t,e,n,o.component.subTree));const u=4&o.shapeFlag?Ln(o.component):o.el,c=a?null:u,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:t=>(0,i.$3)(g,t);if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,m(f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,l,12,[c,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,u):(0,i.cy)(n)?n.includes(u)||n.push(u):e?(d[h]=[u],m(h)&&(p[h]=d[h])):(h.value=[u],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,m(h)&&(p[h]=c)):s&&(h.value=c,t.k&&(d[t.k]=c))};c?(r.id=-1,he(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const H=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const K=t=>t.type.__isKeepAlive;RegExp,RegExp;function W(t,e){return(0,i.cy)(t)?t.some((t=>W(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function G(t,e){X(t,"a",e)}function Q(t,e){X(t,"da",e)}function X(t,e,n=_n){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(tt(e,r,n),n){let t=n.parent;while(t&&t.parent)K(t.parent.vnode)&&Y(r,e,n,t),t=t.parent}}function Y(t,e,n,r){const s=tt(e,t,r,!0);at((()=>{(0,i.TF)(r[e],s)}),n)}function J(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Z(t){return 128&t.shapeFlag?t.ssContent:t}function tt(t,e,n=_n,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=Tn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const et=t=>(e,n=_n)=>{kn&&"sp"!==t||tt(t,((...t)=>e(...t)),n)},nt=et("bm"),rt=et("m"),it=et("bu"),st=et("u"),ot=et("bum"),at=et("um"),ut=et("sp"),ct=et("rtg"),lt=et("rtc");function ht(t,e=_n){tt("ec",t,e)}const ft="components";function dt(t,e){return gt(ft,t,!0,e)||t}const pt=Symbol.for("v-ndc");function gt(t,e,n=!0,r=!1){const s=S||_n;if(s){const n=s.type;if(t===ft){const t=Mn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=mt(s[t]||n[t],e)||mt(s.appContext[t],e);return!o&&r?n:o}}function mt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function vt(t,e,n,s){let o;const a=n&&n[s],u=(0,i.cy)(t);if(u||(0,i.Kg)(t)){const n=u&&(0,r.g8)(t);let i=!1;n&&(i=!(0,r.fE)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let s=0,u=t.length;s<u;s++)o[s]=e(i?(0,r.lJ)(t[s]):t[s],s,void 0,a&&a[s])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}function yt(t,e,n={},r,s){if(S.ce||S.parent&&H(S.parent)&&S.parent.ce)return"default"!==e&&(n.name=e),He(),Ye(Ve,null,[rn("slot",n,r&&r())],64);let o=t[e];o&&o._c&&(o._d=!1),He();const a=o&&_t(o(n)),u=n.key||a&&a.key,c=Ye(Ve,{key:(u&&!(0,i.Bm)(u)?u:`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===t._?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function _t(t){return t.some((t=>!Je(t)||t.type!==$e&&!(t.type===Ve&&!_t(t.children))))?t:null}const wt=t=>t?Sn(t)?Ln(t):wt(t.parent):null,bt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wt(t.parent),$root:t=>wt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ot(t),$forceUpdate:t=>t.f||(t.f=()=>{y(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>Se.bind(t)}),Et=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Tt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:l}=t;let h;if("$"!==e[0]){const r=u[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Et(s,e))return u[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return u[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return u[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return u[e]=4,n[e];St&&(u[e]=0)}}const f=bt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(u[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Et(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||Et(e,a)||(u=o[0])&&(0,i.$3)(u,a)||(0,i.$3)(r,a)||(0,i.$3)(bt,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function It(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let St=!0;function Ct(t){const e=Ot(t),n=t.proxy,s=t.ctx;St=!1,e.beforeCreate&&kt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:u,watch:c,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:x,filters:N}=e,D=null;if(h&&At(h,s,D),u)for(const r in u){const t=u[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(St=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,u=Fn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:t=>u.value=t})}if(c)for(const r in c)Rt(c[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{qt(e,t[e])}))}function P(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&kt(f,t,"c"),P(nt,d),P(rt,p),P(it,g),P(st,m),P(G,v),P(Q,y),P(ht,C),P(lt,I),P(ct,S),P(ot,w),P(at,E),P(ut,A),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),x&&(t.directives=x),A&&z(t)}function At(t,e,n=i.tE){(0,i.cy)(t)&&(t=Lt(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?Ht(n.from||s,n.default,!0):Ht(n.from||s):Ht(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function kt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Rt(t,e,n,r){let s=r.includes(".")?Ce(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&Te(s,n)}else if((0,i.Tn)(t))Te(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>Rt(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&Te(s,r,t)}else 0}function Ot(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let c;return u?c=u:s.length||n||r?(c={},s.length&&s.forEach((t=>xt(c,t,a,!0))),xt(c,e,a)):c=e,(0,i.Gv)(e)&&o.set(e,c),c}function xt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&xt(t,s,n,!0),i&&i.forEach((e=>xt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Nt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Nt={data:Dt,props:Ft,emits:Ft,methods:Ut,computed:Ut,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ut,directives:Ut,watch:Vt,provide:Dt,inject:Pt};function Dt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Pt(t,e){return Ut(Lt(t),Lt(e))}function Lt(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Ft(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),It(t),It(null!=e?e:{})):e}function Vt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Mt(t[r],e[r]);return n}function jt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $t=0;function Bt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=jt(),a=new WeakSet,u=[];let c=!1;const l=s.app={_uid:$t++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!c){0;const u=l._ceVNode||rn(n,r);return u.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(u,i):t(u,i,a),c=!0,l._container=i,i.__vue_app__=l,Ln(u.component)}},onUnmount(t){u.push(t)},unmount(){c&&(o(u,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=zt;zt=l;try{return t()}finally{zt=e}}};return l}}let zt=null;function qt(t,e){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[t]=e}else 0}function Ht(t,e,n=!1){const r=_n||S;if(r||zt){const s=zt?zt._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const Kt={},Wt=()=>Object.create(Kt),Gt=t=>Object.getPrototypeOf(t)===Kt;function Qt(t,e,n,i=!1){const s={},o=Wt();t.propsDefaults=Object.create(null),Yt(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Xt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=t,c=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||u>0)||16&u){let r;Yt(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Jt(l,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&u){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Oe(t.emitsOptions,s))continue;const u=e[s];if(l)if((0,i.$3)(a,s))u!==a[s]&&(a[s]=u,h=!0);else{const e=(0,i.PT)(s);o[e]=Jt(l,c,e,u,t,!1)}else u!==a[s]&&(a[s]=u,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Yt(t,e,n,s){const[o,a]=t.propsOptions;let u,c=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(u||(u={}))[h]=l:n[h]=l:Oe(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,c=!0)}if(a){const e=(0,r.ux)(n),s=u||i.MZ;for(let r=0;r<a.length;r++){const u=a[r];n[u]=Jt(o,e,u,s[u],t,!(0,i.$3)(s,u))}}return c}function Jt(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Tn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Zt=new WeakMap;function te(t,e,n=!1){const r=n?Zt:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let c=!1;if(!(0,i.Tn)(t)){const r=t=>{c=!0;const[n,r]=te(t,e,!0);(0,i.X$)(a,n),r&&u.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);ee(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(ee(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let c=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){c=!0;break}"String"===n&&(l=!1)}else c=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=c,r[1]=l,(c||(0,i.$3)(r,"default"))&&u.push(e)}}}const l=[a,u];return(0,i.Gv)(t)&&r.set(t,l),l}function ee(t){return"$"!==t[0]&&!(0,i.SU)(t)}const ne=t=>"_"===t[0]||"$stable"===t,re=t=>(0,i.cy)(t)?t.map(hn):[hn(t)],ie=(t,e,n)=>{if(e._n)return e;const r=k(((...t)=>re(e(...t))),n);return r._c=!1,r},se=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ne(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ie(s,n,r);else if(null!=n){0;const t=re(n);e[s]=()=>t}}},oe=(t,e)=>{const n=re(e);t.slots.default=()=>n},ae=(t,e,n)=>{for(const r in e)(n||"_"!==r)&&(t[r]=e[r])},ue=(t,e,n)=>{const r=t.slots=Wt();if(32&t.vnode.shapeFlag){const t=e._;t?(ae(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):se(e,r)}else e&&oe(t,e)},ce=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:ae(s,e,n):(o=!e.$stable,se(e,s)),a=e}else e&&(oe(t,e),a={default:1});if(o)for(const i in s)ne(i)||null!=a[i]||delete s[i]};function le(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const he=Fe;function fe(t){return de(t)}function de(t,e){le();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:c,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,u=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ze(t,e)&&(r=Z(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(u=!1,e.dynamicChildren=null);const{type:c,ref:l,shapeFlag:h}=e;switch(c){case je:_(t,e,n,r);break;case $e:w(t,e,n,r);break;case Be:null==t&&T(e,n,r,o);break;case Ve:L(t,e,n,r,i,s,o,a,u);break;default:1&h?C(t,e,n,r,i,s,o,a,u):6&h?M(t,e,n,r,i,s,o,a,u):(64&h||128&h)&&c.process(t,e,n,r,i,s,o,a,u,nt)}null!=l&&i&&q(l,t&&t.ref,s,e||t,!e)},_=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,u)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?A(e,n,r,i,s,o,a,u):N(t,e,i,s,o,a,u)},A=(t,e,n,r,o,c,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(d=t.el=u(t.type,c,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,o,pe(t,c),l,h),y&&O(t,null,r,"created"),k(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],c,r);"value"in g&&a(d,"value",null,g.value,c),(p=g.onVnodeBeforeMount)&&gn(p,r,t)}y&&O(t,null,r,"beforeMount");const _=me(o,v);_&&v.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||_||y)&&he((()=>{p&&gn(p,r,t),_&&v.enter(d),y&&O(t,null,r,"mounted")}),o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||Ue(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,u=0)=>{for(let c=u;c<t.length;c++){const u=t[c]=a?fn(t[c]):hn(t[c]);v(null,u,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,u)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&ge(n,!1),(m=g.onVnodeBeforeUpdate)&&gn(m,n,e,t),d&&O(e,t,n,"beforeUpdate"),n&&ge(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(c,""),h?D(t.dynamicChildren,h,c,n,r,pe(e,s),o):u||$(t,e,c,null,n,r,pe(e,s),o,!1),l>0){if(16&l)P(c,p,g,n,s);else if(2&l&&p.class!==g.class&&a(c,"class",null,g.class,s),4&l&&a(c,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(c,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(c,e.children)}else u||null!=h||P(c,p,g,n,s);((m=g.onVnodeUpdated)||d)&&he((()=>{m&&gn(m,n,e,t),d&&O(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const u=t[a],c=e[a],l=u.el&&(u.type===Ve||!Ze(u,c)||70&u.shapeFlag)?d(u.el):n;v(u,c,l,null,r,i,s,o,!0)}},P=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const u=n[o],c=e[o];u!==c&&"value"!==o&&a(t,o,c,u,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},L=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children||[],n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&ve(t,e,!0)):$(t,e,n,f,i,o,a,u,l)},M=(t,e,n,r,i,s,o,a,u)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,u):U(e,n,r,i,s,o,u):F(t,e,u)},U=(t,e,n,r,i,s,o)=>{const a=t.component=yn(t,r,i);if(K(t)&&(a.ctx.renderer=nt),Rn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!t.el){const t=a.subTree=rn($e);w(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(Pe(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,u)=>{const c=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=_e(t);if(n)return e&&(e.el=l.el,j(t,e,u)),void n.asyncDep.then((()=>{t.isUnmounted||c()}))}let h,f=e;0,ge(t,!1),e?(e.el=l.el,j(t,e,u)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&gn(h,s,e,l),ge(t,!0);const p=xe(t);0;const g=t.subTree;t.subTree=p,v(g,p,d(g.el),Z(g),t,o,a),e.el=p.el,null===f&&Me(t,p.el),r&&he(r,o),(h=e.props&&e.props.onVnodeUpdated)&&he((()=>gn(h,s,e,l)),o)}else{let r;const{el:u,props:c}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=H(e);if(ge(t,!1),l&&(0,i.DY)(l),!g&&(r=c&&c.onVnodeBeforeMount)&&gn(r,f,e),ge(t,!0),u&&it){const e=()=>{t.subTree=xe(t),it(u,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(u,t,e):e()}else{d.ce&&d.ce._injectChildStyle(p);const r=t.subTree=xe(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&he(h,o),!g&&(r=c&&c.onVnodeMounted)){const t=e;he((()=>gn(r,f,t)),o)}(256&e.shapeFlag||f&&H(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&he(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(c);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>y(f),ge(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Xt(t,e.props,i,n),ce(t,e.children,n),(0,r.C4)(),b(t),(0,r.bl)()},$=(t,e,n,r,i,s,o,a,u=!1)=>{const c=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(c,h,n,r,i,s,o,a,u);if(256&d)return void B(c,h,n,r,i,s,o,a,u)}8&p?(16&l&&J(c,i,s),h!==c&&f(n,h)):16&l?16&p?z(c,h,n,r,i,s,o,a,u):J(c,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,u))},B=(t,e,n,r,s,o,a,u,c)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=c?fn(e[d]):hn(e[d]);v(t[d],r,n,null,s,o,a,u,c)}l>h?J(t,s,o,!0,!1,f):R(e,n,r,s,o,a,u,c,f)},z=(t,e,n,r,s,o,a,u,c)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=c?fn(e[l]):hn(e[l]);if(!Ze(r,i))break;v(r,i,n,null,s,o,a,u,c),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=c?fn(e[d]):hn(e[d]);if(!Ze(r,i))break;v(r,i,n,null,s,o,a,u,c),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=c?fn(e[l]):hn(e[l]),n,i,s,o,a,u,c),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=c?fn(e[l]):hn(e[l]);null!=t.key&&m.set(t.key,l)}let y,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&Ze(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,u,c),_++)}const I=b?ye(T):i.Oj;for(y=I.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,u,c):b&&(y<0||l!==I[y]?W(i,n,f,2):y--)}}},W=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:u,children:c,shapeFlag:l}=t;if(6&l)return void W(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,nt);if(a===Ve){s(o,e,n);for(let t=0;t<c.length;t++)W(c[t],e,n,r);return void s(t.anchor,e,n)}if(a===Be)return void I(t,e,n);const h=2!==r&&1&l&&u;if(h)if(0===r)u.beforeEnter(o),s(o,e,n),he((()=>u.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=u,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:l,patchFlag:h,dirs:f,cacheIndex:d}=t;if(-2===h&&(i=!1),null!=a&&q(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&f,g=!H(t);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&gn(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&O(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,nt,r):c&&!c.hasOnce&&(s!==Ve||h>0&&64&h)?J(c,e,n,!1,!0):(s===Ve&&384&h||!i&&16&l)&&J(u,e,n),r&&Q(t)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&he((()=>{m&&gn(m,e,t),p&&O(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ve)return void X(n,r);if(e===Be)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:u,m:c,a:l}=t;we(c),we(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,G(a,t,e,n)),u&&he(u,e),he((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Z=t=>{if(6&t.shapeFlag)return Z(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[x];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,b(),E(),tt=!1)},nt={p:v,um:G,m:W,r:Q,mt:U,mc:R,pc:$,pbc:D,n:Z,o:t};let rt,it;return e&&([rt,it]=e(nt)),{render:et,hydrate:rt,createApp:Bt(et,rt)}}function pe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ge({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function me(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ve(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=fn(s[i]),e.el=t.el),n||-2===e.patchFlag||ve(t,e)),e.type===je&&(e.el=t.el)}}function ye(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const u=t[r];if(0!==u){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function _e(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_e(e)}function we(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const be=Symbol.for("v-scx"),Ee=()=>{{const t=Ht(be);return t}};function Te(t,e,n){return Ie(t,e,n)}function Ie(t,e,n=i.MZ){const{immediate:s,deep:a,flush:u,once:c}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==u;let f;if(kn)if("sync"===u){const t=Ee();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=_n;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===u?l.scheduler=t=>{he(t,d&&d.suspense)}:"sync"!==u&&(p=!0,l.scheduler=(t,e)=>{e?t():y(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return kn&&(f?f.push(g):h&&g()),g}function Se(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?Ce(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=Tn(this),u=Ie(s,o.bind(r),n);return a(),u}function Ce(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Ae=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function ke(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),u=a&&Ae(r,e.slice(7));let c;u&&(u.trim&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),u.number&&(s=n.map(i.bB)));let l=r[c=(0,i.rU)(e)]||r[c=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[c=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,o(h,t,6,s)}}function Re(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},u=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Re(t,e,!0);n&&(u=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||u?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Oe(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function xe(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:u,attrs:c,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t,y=A(t);let _,w;try{if(4&n.shapeFlag){const t=s||r,e=t;_=hn(h.call(e,t,f,d,g,p,m)),w=c}else{const t=e;0,_=hn(t.length>1?t(d,{attrs:c,slots:u,emit:l}):t(d,null)),w=e.props?c:Ne(c)}}catch(E){ze.length=0,a(E,t,1),_=rn($e)}let b=_;if(w&&!1!==v){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.CP)&&(w=De(w,o)),b=an(b,w,!1,!0))}return n.dirs&&(b=an(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&j(b,n.transition),_=b,A(y),_}const Ne=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},De=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Pe(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Le(r,o,c):!!o);if(1024&u)return!0;if(16&u)return r?Le(r,o,c):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Oe(c,n))return!0}}return!1}function Le(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Oe(n,s))return!0}return!1}function Me({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Ue=t=>t.__isSuspense;function Fe(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const Ve=Symbol.for("v-fgt"),je=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Be=Symbol.for("v-stc"),ze=[];let qe=null;function He(t=!1){ze.push(qe=t?null:[])}function Ke(){ze.pop(),qe=ze[ze.length-1]||null}let We=1;function Ge(t,e=!1){We+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function Qe(t){return t.dynamicChildren=We>0?qe||i.Oj:null,Ke(),We>0&&qe&&qe.push(t),t}function Xe(t,e,n,r,i,s){return Qe(nn(t,e,n,r,i,s,!0))}function Ye(t,e,n,r,i){return Qe(rn(t,e,n,r,i,!0))}function Je(t){return!!t&&!0===t.__v_isVNode}function Ze(t,e){return t.type===e.type&&t.key===e.key}const tn=({key:t})=>null!=t?t:null,en=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function nn(t,e=null,n=null,r=0,s=null,o=(t===Ve?0:1),a=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tn(e),ref:e&&en(e),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return u?(dn(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,i.Kg)(n)?8:16),We>0&&!a&&qe&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&qe.push(c),c}const rn=sn;function sn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==pt||(t=$e),Je(t)){const r=an(t,e,!0);return n&&dn(r,n),We>0&&!a&&qe&&(6&r.shapeFlag?qe[qe.indexOf(t)]=r:qe.push(r)),r.patchFlag=-2,r}if(Un(t)&&(t=t.__vccOpts),e){e=on(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const u=(0,i.Kg)(t)?1:Ue(t)?128:N(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return nn(t,e,n,s,o,u,a,!0)}function on(t){return t?(0,r.ju)(t)||Gt(t)?(0,i.X$)({},t):t:null}function an(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:u,transition:c}=t,l=e?pn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tn(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(en(e)):[o,en(e)]:en(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&j(h,c.clone(h)),h}function un(t=" ",e=0){return rn(je,null,t,e)}function cn(t,e){const n=rn(Be,null,t);return n.staticCount=e,n}function ln(t="",e=!1){return e?(He(),Ye($e,null,t)):rn($e,null,t)}function hn(t){return null==t||"boolean"===typeof t?rn($e):(0,i.cy)(t)?rn(Ve,null,t.slice()):Je(t)?fn(t):rn(je,null,String(t))}function fn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:an(t)}function dn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),dn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Gt(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,i.Tn)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function pn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function gn(t,e,n,r=null){o(t,e,7,[n,r])}const mn=jt();let vn=0;function yn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||mn,a={uid:vn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:te(s,o),emitsOptions:Re(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ke.bind(null,a),t.ce&&t.ce(a),a}let _n=null;const wn=()=>_n||S;let bn,En;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};bn=e("__VUE_INSTANCE_SETTERS__",(t=>_n=t)),En=e("__VUE_SSR_SETTERS__",(t=>kn=t))}const Tn=t=>{const e=_n;return bn(t),t.scope.on(),()=>{t.scope.off(),bn(e)}},In=()=>{_n&&_n.scope.off(),bn(null)};function Sn(t){return 4&t.vnode.shapeFlag}let Cn,An,kn=!1;function Rn(t,e=!1,n=!1){e&&En(e);const{props:r,children:i}=t.vnode,s=Sn(t);Qt(t,r,s,e),ue(t,i,n);const o=s?On(t,e):void 0;return e&&En(!1),o}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?Pn(t):null,u=Tn(t),c=s(o,t,0,[t.props,n]),l=(0,i.yL)(c);if((0,r.bl)(),u(),!l&&!t.sp||H(t)||z(t),l){if(c.then(In,In),e)return c.then((n=>{xn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else xn(t,c,e)}else Nn(t,e)}function xn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Nn(t,n)}function Nn(t,e,n){const s=t.type;if(!t.render){if(!e&&Cn&&!s.render){const e=s.template||Ot(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Cn(e,u)}}t.render=s.render||i.tE,An&&An(t)}{const e=Tn(t);(0,r.C4)();try{Ct(t)}finally{(0,r.bl)(),e()}}}const Dn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Pn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Dn),slots:t.slots,emit:t.emit,expose:e}}function Ln(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in bt?bt[n](t):void 0},has(t,e){return e in t||e in bt}})):t.proxy}function Mn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Un(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Fn=(t,e)=>{const n=(0,r.EW)(t,e,kn);return n};function Vn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Je(e)?rn(t,null,[e]):rn(t,e):rn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Je(n)&&(n=[n]),rn(t,e,n))}const jn="3.5.13"},6801:function(t,e,n){"use strict";var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),u=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=u(e),c=i.length,l=0;while(c>l)s.f(t,n=i[l++],r[n]);return t}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},6840:function(t,e,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(r(n)&&s(n,c,a),a.global)u?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6903:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},6955:function(t,e,n){"use strict";var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),u=Object,c="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),a))?n:c?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},6969:function(t,e,n){"use strict";var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,e,n){"use strict";var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},7080:function(t,e,n){"use strict";var r=n(4402).has;t.exports=function(t){return r(t),t}},7145:function(t,e,n){"use strict";var r=n(6518),i=n(9504),s=n(9306),o=n(5397),a=n(5370),u=n(4124),c=n(6469),l=Array,h=i(u("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&s(t);var e=o(this),n=a(l,e);return h(n,t)}}),c("toSorted")},7347:function(t,e,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),u=n(6969),c=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=u(e),l)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i(s.f,t,e),t[e])}},7394:function(t,e,n){"use strict";var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},7467:function(t,e,n){"use strict";var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7476:function(t,e,n){"use strict";var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},7566:function(t,e,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,u=a.prototype,c=i(u.getAll),l=i(u.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(u,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=c(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},7588:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),n=0;i(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},7617:function(t,e,n){"use strict";n.d(e,{Dc:function(){return et},rJ:function(){return Pa},H9:function(){return La},GG:function(){return Uu},aU:function(){return Va},P:function(){return bu},c4:function(){return Bu},O5:function(){return zu},_M:function(){return Tu}});n(4114),n(6573),n(8100),n(7936),n(8111),n(1148),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r,i,s=n(3405),o=n(852),a=n(1363),u=n(774),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function u(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new u([0|t],0>t?-1:0)})):new u([0|t],0>t?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return _(f(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new u(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return _(d(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=f(Math.pow(e,8)),r=p,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=f(Math.pow(e,s)),r=r.j(s).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function _(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new u(n,~t.h).add(g)}function w(t,e){return t.add(_(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(v(e))throw Error("division by zero");if(v(t))return new E(p,p);if(y(t))return e=T(_(t),e),new E(_(e.g),_(e.h));if(y(e))return e=T(t,_(e)),new E(_(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;0>=r.l(t);)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var o=s.add(r);0>=o.l(t)&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return e=w(t,i.j(e)),new E(i,e)}for(i=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=f(n),o=s.j(e);y(o)||0<o.l(t);)n-=r,s=f(n),o=s.j(e);v(s)&&(s=g),i=i.add(s),t=w(t,o)}return new E(i,t)}function I(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new u(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new u(i,t.h)}t=u.prototype,t.m=function(){if(y(this))return-_(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+_(this).toString(t);for(var e=f(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=w(n,i.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?_(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.i(i))+(65535&t.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new u(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?_(this).j(_(t)):_(_(this).j(t));if(y(t))return _(this.j(_(t)));if(0>this.l(m)&&0>t.l(m))return f(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=t.i(i)>>>16,c=65535&t.i(i);n[2*r+2*i]+=o*c,b(n,2*r+2*i),n[2*r+2*i+1]+=s*c,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new u(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new u(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new u(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new u(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=d,r=l.Integer=u}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,f,d,p,g,m,v,y,_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:b,T.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function S(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class k{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function R(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return x[" "](t),t}x[" "]=function(){};var N=-1!=O().indexOf("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&-1==O().indexOf("Edge"))&&!(-1!=O().indexOf("Trident")||-1!=O().indexOf("MSIE"))&&-1==O().indexOf("Edge");function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V(t){a.setTimeout((()=>{throw t}),0)}function j(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ${constructor(){this.h=this.g=null}add(t,e){const n=B.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var B=new k((()=>new z),(t=>t.reset()));class z{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let q,H=!1,K=new $,W=()=>{const t=a.Promise.resolve(void 0);q=()=>{t.then(G)}};var G=()=>{for(var t;t=j();){try{t.h.call(t.g)}catch(n){V(n)}var e=B;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}H=!1};function Q(){this.s=this.s,this.C=this.C}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var Y=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function J(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{x(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&J.aa.h.call(this)}}S(J,X);var Z={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),et=0;function nt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++et,this.da=this.fa=!1}function rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ut={};function ct(t,e,n,r,i){if(r&&r.once)return ft(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ct(t,e[s],n,r,i);return null}return n=_t(n),t&&t[tt]?t.K(e,n,c(r)?!!r.capture:!!r,i):lt(t,e,n,!1,r,i)}function lt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=c(i)?!!i.capture:!!i,a=vt(t);if(a||(t[at]=a=new it(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ht(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Y||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ht(){function t(n){return e.call(t.src,t.listener,n)}const e=mt;return t}function ft(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,r,i);return null}return n=_t(n),t&&t[tt]?t.L(e,n,c(r)?!!r.capture:!!r,i):lt(t,e,n,!0,r,i)}function dt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);else r=c(r)?!!r.capture:!!r,n=_t(n),t&&t[tt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ot(s,n,r,i),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,r,i)),(n=-1<t?e[t]:null)&&pt(n))}function pt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[tt])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):rt(t)}}}function gt(t){return t in ut?ut[t]:ut[t]="on"+t}function mt(t,e){if(t.da)t=!0;else{e=new J(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&pt(t),t=n.call(r,e)}return t}function vt(t){return t=t[at],t instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){Q.call(this),this.i=new it(this),this.M=this,this.F=null}function bt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var i=e;e=new X(r,t),U(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Et(o,r,!0,e)&&i}if(o=e.g=t,i=Et(o,r,!0,e)&&i,i=Et(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Et(o,r,!1,e)&&i}function Et(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&st(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}function Tt(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function It(t){t.g=Tt((()=>{t.g=null,t.i&&(t.i=!1,It(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}S(wt,Q),wt.prototype[tt]=!0,wt.prototype.removeEventListener=function(t,e,n,r){dt(this,t,e,n,r)},wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)rt(n[r]);delete e.g[t],e.h--}}this.F=null},wt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class St extends Q{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(t){Q.call(this),this.h=t,this.g={}}S(Ct,Q);var At=[];function kt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&pt(t)}),t),t.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),kt(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rt=a.JSON.stringify,Ot=a.JSON.parse,xt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Dt(t){return t.h||(t.h=t.i())}function Pt(){}Nt.prototype.h=null;var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mt(){X.call(this,"d")}function Ut(){X.call(this,"c")}S(Mt,X),S(Ut,X);var Ft={},Vt=null;function jt(){return Vt=Vt||new wt}function $t(t){X.call(this,Ft.La,t)}function Bt(t){const e=jt();bt(e,new $t(e))}function zt(t,e){X.call(this,Ft.STAT_EVENT,t),this.stat=e}function qt(t){const e=jt();bt(e,new zt(e,t))}function Ht(t,e){X.call(this,Ft.Ma,t),this.size=e}function Kt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Wt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Xt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Jt(t,n)+(r?" "+r:"")}))}function Yt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Jt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Rt(n)}catch(a){return e}}Ft.La="serverreachability",S($t,X),Ft.STAT_EVENT="statevent",S(zt,X),Ft.Ma="timingevent",S(Ht,X),Wt.prototype.xa=function(){this.g=!1},Wt.prototype.info=function(){};var Zt,te={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ee={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ne(){}function re(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ie}function ie(){this.i=null,this.g="",this.h=!1}S(ne,Nt),ne.prototype.g=function(){return new XMLHttpRequest},ne.prototype.i=function(){return{}},Zt=new ne;var se={},oe={};function ae(t,e,n){t.L=1,t.v=Me(xe(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),he(t),t.A=xe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Qe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new ie,t.g=Bn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new St(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(At[0]=i.toString()),i=At);for(var s=0;s<i.length;s++){var o=ct(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?L(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Bt(),Gt(t.i,t.u,t.A,t.l,t.R,t.m)}function ce(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?oe:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?oe:(e=e.slice(r,r+n),t.C=r+n,e)))}function he(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(T(t.ba,t),e)}function de(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function pe(t){0==t.j.G||t.J||Un(t.j,t)}function ge(t){de(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function me(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||be(n.h,t)))if(!t.K&&be(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Mn(n),Sn(n)}Dn(n),qt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(T(n.Za,n),6e3));if(1>=we(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else Vn(n,11)}else if((t.K||n.g==t)&&Mn(n),!R(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ee(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Le(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),o.K){Te(r.h,o);var a=o,u=r.L;u&&(a.I=u),a.B&&(de(a),he(a)),r.g=o}else Nn(r);0<n.i.length&&An(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):In(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Bt(4)}catch(c){}}re.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==_n(t)?e.j():this.Y(t)},re.prototype.Y=function(t){try{if(t==this.g)t:{const f=_n(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||wn(this.g)))){this.J||4!=f||7==e||Bt(8==e||0>=d?3:2),de(this);var n=this.g.Z();this.X=n;e:if(ce(this)){var r=wn(this.g);t="";var i=r.length,s=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ge(this),pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(s&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Qt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(u)){var l=u;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,qt(12),ge(this),pe(this);break t}Xt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,me(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=le(this,o),t==oe){4==f&&(this.s=4,qt(14),n=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,qt(15),Xt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Xt(this.i,this.l,t,null),me(this,t)}if(ce(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,qt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Pn(h),h.M=!0,qt(11))}}else Xt(this.i,this.l,o,"[Invalid Chunked Response]"),ge(this),pe(this)}else Xt(this.i,this.l,o,null),me(this,o);4==f&&ge(this),this.o&&!this.J&&(4==f?Un(this.j,this):(this.o=!1,he(this)))}else bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),ge(this),pe(this)}}}catch(f){}},re.prototype.cancel=function(){this.J=!0,ge(this)},re.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Yt(this.i,this.A),2!=this.L&&(Bt(),qt(17)),ge(this),this.s=2,pe(this)):fe(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function ye(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _e(t){return!!t.h||!!t.g&&t.g.size>=t.j}function we(t){return t.h?1:t.g?t.g.size:0}function be(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ee(t,e){t.g?t.g.add(e):t.h=e}function Te(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ie(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function Se(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ce(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ae(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ce(t),r=Se(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}ye.prototype.cancel=function(){if(this.i=Ie(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ke=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Re(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,De(this,t.s),this.l=t.l;var e=t.i,n=new He;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pe(this,n),this.m=t.m}else t&&(e=String(t).match(ke))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Ue(e[2]||""),this.g=Ue(e[3]||"",!0),De(this,e[4]),this.l=Ue(e[5]||"",!0),Pe(this,e[6]||"",!0),this.m=Ue(e[7]||"")):(this.h=!1,this.i=new He(null,this.h))}function xe(t){return new Oe(t)}function Ne(t,e,n){t.j=n?Ue(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Pe(t,e,n){e instanceof He?(t.i=e,Ye(t.i,t.h)):(n||(e=Fe(e,ze)),t.i=new He(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Me(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ue(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ve),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ve(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Oe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Fe(e,je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?Be:$e,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Fe(n,qe)),t.join("")};var je=/[#\/\?@]/g,$e=/[#\?:]/g,Be=/[#\?]/g,ze=/[#\?@]/g,qe=/#/g;function He(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&Re(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){Ke(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ge(t,e){return Ke(t),e=Xe(t,e),t.g.has(e)}function Qe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),C(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ye(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Qe(this,n,t))}),t)),t.j=e}function Je(t,e){const n=new Wt;if(a.Image){const r=new Image;r.onload=I(tn,n,"TestLoadImage: loaded",!0,e,r),r.onerror=I(tn,n,"TestLoadImage: error",!1,e,r),r.onabort=I(tn,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=I(tn,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ze(t,e){const n=new Wt,r=new AbortController,i=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?tn(n,"TestPingServer: ok",!0,e):tn(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),tn(n,"TestPingServer: error",!1,e)}))}function tn(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function en(){this.g=new xt}function nn(t,e,n){const r=n||"";try{Ae(t,(function(t,n){let i=t;c(t)&&(i=Rt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rn(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){wt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function on(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function an(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function cn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ln(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=cn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Le(t,e,n))}function hn(t){wt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=He.prototype,t.add=function(t,e){Ke(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ke(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){Ke(this);let e=[];if("string"===typeof t)Ge(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ke(this),this.i=null,t=Xe(this,t),Ge(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},S(rn,Nt),rn.prototype.g=function(){return new sn(this.l,this.j)},rn.prototype.i=function(t){return function(){return t}}({}),S(sn,wt),t=sn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,an(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;on(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?an(this):un(this),3==this.readyState&&on(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,an(this))},t.Qa=function(t){this.g&&(this.response=t,an(this))},t.ga=function(){this.g&&an(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),S(hn,wt);var fn=/^https?$/i,dn=["POST","PUT"];function pn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,gn(t),vn(t)}function gn(t){t.A||(t.A=!0,bt(t,"complete"),bt(t,"error"))}function mn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=_n(t)||2!=t.Z()))if(t.u&&4==_n(t))Tt(t.Ea,0,t);else if(bt(t,"readystatechange"),4==_n(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.D).match(ke)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var s=2<_n(t)?t.g.statusText:""}catch(u){s=""}t.l=s+" ["+t.Z()+"]",gn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){yn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||bt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function yn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function _n(t){return t.g?t.g.readyState:0}function wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function bn(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=F(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}P(e,(function(t){return t.join(", ")}))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tn(t){this.Aa=0,this.i=[],this.j=new Wt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,t),this.cb=En("retryDelaySeedMs",1e4,t),this.Wa=En("forwardChannelMaxRetries",2,t),this.wa=En("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(t&&t.concurrentRequestLimit),this.Da=new en,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function In(t){if(Cn(t),3==t.G){var e=t.U++,n=xe(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),On(t,n),e=new re(t,t.j,e),e.L=2,e.v=Me(xe(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),he(e)}jn(t)}function Sn(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function Cn(t){Sn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Mn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function An(t){if(!_e(t.h)&&!t.s){t.s=!0;var e=t.Ga;q||W(),H||(q(),H=!0),K.add(e,t),t.B=0}}function kn(t,e){return!(we(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(T(t.Ga,t,e),Fn(t,t.B)),t.B++,!0))}function Rn(t,e){var n;n=e?e.l:t.U++;const r=xe(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.T),On(t,r),t.m&&t.o&&ln(r,t.m,t.o),n=new re(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=xn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ee(t.h,n),ae(n,r,e)}function On(t,e){t.H&&D(t.H,(function(t,n){Le(e,n,t)})),t.l&&Ae({},(function(t,n){Le(e,n,t)}))}function xn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const u=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{nn(u,t,"req"+n+"_")}catch(s){r&&r(u)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;q||W(),H||(q(),H=!0),K.add(e,t),t.v=0}}function Dn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(T(t.Fa,t),Fn(t,t.v)),t.v++,!0)}function Pn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Ln(t){t.g=new re(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=xe(t.qa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.T),Le(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Le(e,"TO",t.ja),Le(e,"TYPE","xmlhttp"),On(t,e),t.m&&t.o&&ln(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Me(xe(e)),n.m=null,n.P=!0,ue(n,t)}function Mn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Un(t,e){var n=null;if(t.g==e){Mn(t),Pn(t),t.g=null;var r=2}else{if(!be(t.h,e))return;n=e.D,Te(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=jt(),bt(r,new Ht(r,n)),An(t)}else Nn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&kn(t,e)||2==r&&Dn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}function Fn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new Oe(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),Me(r),e?Je(r.toString(),n):Ze(r.toString(),n)}else qt(2);t.G=0,t.l&&t.l.sa(e),jn(t),Cn(t)}function jn(t){if(t.G=0,t.ka=[],t.l){const e=Ie(t.h);0==e.length&&0==t.i.length||(A(t.ka,e),A(t.ka,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof Oe?xe(n):new Oe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),De(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Oe(null);r&&Ne(s,r),e&&(s.g=e),i&&De(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.ya,n&&e&&Le(r,n,e),Le(r,"VER",t.la),On(t,r),r}function Bn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new hn(new rn({eb:n})):new hn(t.pa),e.Ha(t.J),e}function zn(){}function qn(){}function Hn(t,e){wt.call(this),this.g=new Tn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!R(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}function Kn(t){Mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){Ut.call(this),this.status=1}function Gn(t){this.g=t}t=hn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zt.g(),this.v=this.o?Dt(this.o):Dt(Zt),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void pn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){pn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),hn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?mn(this):this.bb())},t.bb=function(){mn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ot(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Tn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){qt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),An(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new re(this,this.j,t);let s=this.o;if(this.S&&(s?(s=L(s),U(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xn(this,i,e),n=xe(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(cn(s)))+"&"+e:this.m&&ln(n,this.m,s)),Ee(this.h,i),this.Ua&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),i.T=!0,ae(i,n,null)):ae(i,n,e),this.G=2}}else 3==this.G&&(t?Rn(this,t):0==this.i.length||_e(this.h)||Rn(this))},t.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Sn(this),Ln(this))},t.Za=function(){null!=this.C&&(this.C=null,Sn(this),Dn(this),qt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=zn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},qn.prototype.g=function(t,e){return new Hn(t,e)},S(Hn,wt),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){In(this.g)},Hn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Rt(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&An(e)},Hn.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,Hn.aa.N.call(this)},S(Kn,Mt),S(Wn,Ut),S(Gn,zn),Gn.prototype.ua=function(){bt(this.g,"a")},Gn.prototype.ta=function(t){bt(this.g,new Kn(t))},Gn.prototype.sa=function(t){bt(this.g,new Wn)},Gn.prototype.ra=function(){bt(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,y=w.createWebChannelTransport=function(){return new qn},v=w.getStatEventTarget=function(){return jt()},m=w.Event=Ft,g=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},te.NO_ERROR=0,te.TIMEOUT=8,te.HTTP_ERROR=6,p=w.ErrorCode=te,ee.COMPLETE="complete",d=w.EventType=ee,Pt.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",wt.prototype.listen=wt.prototype.K,f=w.WebChannel=Pt,w.FetchXmlHttpFactory=rn,hn.prototype.listenOnce=hn.prototype.L,hn.prototype.getLastError=hn.prototype.Ka,hn.prototype.getLastErrorCode=hn.prototype.Ba,hn.prototype.getStatus=hn.prototype.Z,hn.prototype.getResponseJson=hn.prototype.Oa,hn.prototype.getResponseText=hn.prototype.oa,hn.prototype.send=hn.prototype.ea,hn.prototype.setWithCredentials=hn.prototype.Ha,h=w.XhrIo=hn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore",E="4.7.10";
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
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
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
let I="11.5.0";
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
 */const S=new a.Vy("@firebase/firestore");function C(){return S.logLevel}function A(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(O);S.debug(`Firestore (${I}): ${t}`,...n)}}function k(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(O);S.error(`Firestore (${I}): ${t}`,...n)}}function R(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(O);S.warn(`Firestore (${I}): ${t}`,...n)}}function O(t){if("string"==typeof t)return t;try{
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
 */function x(t="Unexpected state"){const e=`FIRESTORE (${I}) INTERNAL ASSERTION FAILED: `+t;throw k(e),new Error(e)}function N(t,e){t||x()}function D(t,e){return t}
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends u.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class U{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class V{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){N(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(N("string"==typeof e.accessToken),new U(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return N(null===t||"string"==typeof t),new T(t)}}class ${constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new $(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){N(void 0===this.o);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new z(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(N("string"==typeof t.token),this.R=t.token,new z(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function H(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */function K(){return new TextEncoder}
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
 */class W{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=H(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function Q(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return G(r,i);{const s=K(),o=Y(s.encode(X(t,n)),s.encode(X(e,n)));return 0!==o?o:G(r,i)}}n+=r>65535?2:1}return G(t.length,e.length)}function X(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Y(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return G(t[n],e[n]);return G(t.length,e.length)}function J(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
const Z=-62135596800,tt=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*tt);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Z)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tt}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Z;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class nt{static fromTimestamp(t){return new nt(t)}static min(){return new nt(new et(0,0))}static max(){return new nt(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */const rt="__name__";class it{constructor(t,e,n){void 0===e?e=0:e>t.length&&x(),void 0===n?n=t.length-e:n>t.length-e&&x(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===it.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof it?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=it.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return G(t.length,e.length)}static compareSegments(t,e){const n=it.isNumericId(t),r=it.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?it.extractNumericId(t).compare(it.extractNumericId(e)):Q(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class st extends it{construct(t,e,n){return new st(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new st(e)}static emptyPath(){return new st([])}}const ot=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends it{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return ot.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===rt}static keyField(){return new at([rt])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}
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
 */class ut{constructor(t){this.path=t}static fromPath(t){return new ut(st.fromString(t))}static fromName(t){return new ut(st.fromString(t).popFirst(5))}static empty(){return new ut(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===st.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ut(new st(t.slice()))}}
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
 */const ct=-1;class lt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}lt.UNKNOWN_ID=-1;function ht(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=nt.fromTimestamp(1e9===r?new et(n+1,0):new et(n,r));return new dt(i,ut.empty(),e)}function ft(t){return new dt(t.readTime,t.key,ct)}class dt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new dt(nt.min(),ut.empty(),ct)}static max(){return new dt(nt.max(),ut.empty(),ct)}}function pt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ut.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
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
 */)}const gt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function vt(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==gt)throw t;A("LocalStore","Unexpectedly lost primary lease")}
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
 */class yt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new yt(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof yt?e:yt.resolve(e)}catch(t){return yt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):yt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):yt.reject(e)}static resolve(t){return new yt(((e,n)=>{e(t)}))}static reject(t){return new yt(((e,n)=>{n(t)}))}static waitFor(t){return new yt(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=yt.resolve(!1);for(const n of t)e=e.next((t=>t?yt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new yt(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new yt(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function _t(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wt(t){return"IndexedDbTransactionError"===t.name}
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
class bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}bt.ae=-1;
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
 */const Et=-1;function Tt(t){return null==t}function It(t){return 0===t&&1/t==-1/0}function St(t){return"number"==typeof t&&Number.isInteger(t)&&!It(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Ct="";function At(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Rt(e)),e=kt(t.get(n),e);return Rt(e)}function kt(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Ct:n+="";break;default:n+=e}}return n}function Rt(t){return t+Ct+""}
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
const Ot="remoteDocuments",xt="owner",Nt="mutationQueues",Dt="mutations";
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
 */const Pt="documentMutations",Lt="remoteDocumentsV14",Mt="remoteDocumentGlobal",Ut="targets",Ft="targetDocuments",Vt="targetGlobal",jt="collectionParents",$t="clientMetadata",Bt="bundles",zt="namedQueries",qt="indexConfiguration",Ht="indexState",Kt="indexEntries",Wt="documentOverlays",Gt="globals",Qt=[Nt,Dt,Pt,Ot,Ut,xt,Vt,Ft,$t,Mt,jt,Bt,zt],Xt=[Nt,Dt,Pt,Lt,Ut,xt,Vt,Ft,$t,Mt,jt,Bt,zt,Wt],Yt=Xt,Jt=[...Yt,qt,Ht,Kt];
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
function Zt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function te(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ee(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class ne{constructor(t,e){this.comparator=t,this.root=e||ie.EMPTY}insert(t,e){return new ne(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new re(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new re(this.root,t,this.comparator,!1)}getReverseIterator(){return new re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new re(this.root,t,this.comparator,!0)}}class re{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:ie.RED,this.left=null!=r?r:ie.EMPTY,this.right=null!=i?i:ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new ie(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return ie.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x();if(this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1,ie.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class se{constructor(t){this.comparator=t,this.data=new ne(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oe(this.data.getIterator())}getIteratorFrom(t){return new oe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof se))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new se(this.comparator);return e.data=t,e}}class oe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ae{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new ae([])}unionWith(t){let e=new se(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ae(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return J(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class ue extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class ce{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ue("Invalid base64 string: "+t):t}}(t);return new ce(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ce(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const le=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(t){if(N(!!t),"string"==typeof t){let e=0;const n=le.exec(t);if(N(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function de(t){return"string"==typeof t?ce.fromBase64String(t):ce.fromUint8Array(t)}
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
 */const pe="server_timestamp",ge="__type__",me="__previous_value__",ve="__local_write_time__";function ye(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[ge])||void 0===n?void 0:n.stringValue)===pe}function _e(t){const e=t.mapValue.fields[me];return ye(e)?_e(e):e}function we(t){const e=he(t.mapValue.fields[ve].timestampValue);return new et(e.seconds,e.nanos)}
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
 */class be{constructor(t,e,n,r,i,s,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}const Ee="(default)";class Te{constructor(t,e){this.projectId=t,this.database=e||Ee}static empty(){return new Te("","")}get isDefaultDatabase(){return this.database===Ee}isEqual(t){return t instanceof Te&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Ie="__type__",Se="__max__",Ce={mapValue:{fields:{__type__:{stringValue:Se}}}},Ae="__vector__",ke="value";function Re(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ye(t)?4:Ke(t)?9007199254740991:qe(t)?10:11:x()}function Oe(t,e){if(t===e)return!0;const n=Re(t);if(n!==Re(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return we(t).isEqual(we(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=he(t.timestampValue),r=he(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return de(t.bytesValue).isEqual(de(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return fe(t.geoPointValue.latitude)===fe(e.geoPointValue.latitude)&&fe(t.geoPointValue.longitude)===fe(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return fe(t.integerValue)===fe(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=fe(t.doubleValue),r=fe(e.doubleValue);return n===r?It(n)===It(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],Oe);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Zt(n)!==Zt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Oe(n[i],r[i])))return!1;return!0}(t,e);default:return x()}}function xe(t,e){return void 0!==(t.values||[]).find((t=>Oe(t,e)))}function Ne(t,e){if(t===e)return 0;const n=Re(t),r=Re(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=fe(t.integerValue||t.doubleValue),r=fe(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return De(t.timestampValue,e.timestampValue);case 4:return De(we(t),we(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=de(t),r=de(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=G(n[i],r[i]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(fe(t.latitude),fe(e.latitude));return 0!==n?n:G(fe(t.longitude),fe(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pe(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},u=null===(n=o[ke])||void 0===n?void 0:n.arrayValue,c=null===(r=a[ke])||void 0===r?void 0:r.arrayValue,l=G((null===(i=null==u?void 0:u.values)||void 0===i?void 0:i.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Pe(u,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Ce.mapValue&&e===Ce.mapValue)return 0;if(t===Ce.mapValue)return 1;if(e===Ce.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Q(r[o],s[o]);if(0!==t)return t;const e=Ne(n[r[o]],i[s[o]]);if(0!==e)return e}return G(r.length,s.length)}(t.mapValue,e.mapValue);default:throw x()}}function De(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=he(t),r=he(e),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Pe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ne(n[i],r[i]);if(t)return t}return G(n.length,r.length)}function Le(t){return Me(t)}function Me(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=he(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return de(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ut.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Me(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Me(t.fields[i])}`;return n+"}"}(t.mapValue):x()}function Ue(t){switch(Re(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_e(t);return e?16+Ue(e):16;case 5:return 2*t.stringValue.length;case 6:return de(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Ue(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return te(t.fields,((t,n)=>{e+=t.length+Ue(n)})),e}(t.mapValue);default:throw x()}}function Fe(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ve(t){return!!t&&"integerValue"in t}function je(t){return!!t&&"arrayValue"in t}function $e(t){return!!t&&"nullValue"in t}function Be(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ze(t){return!!t&&"mapValue"in t}function qe(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[Ie])||void 0===n?void 0:n.stringValue)===Ae}function He(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return te(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=He(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=He(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ke(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Se}
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
class We{constructor(t){this.value=t}static empty(){return new We({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ze(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(e)}setAll(t){let e=at.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=He(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ze(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Oe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){te(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new We(He(this.value))}}
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
class Ge{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ge(t,0,nt.min(),nt.min(),nt.min(),We.empty(),0)}static newFoundDocument(t,e,n,r){return new Ge(t,1,e,nt.min(),n,r,0)}static newNoDocument(t,e){return new Ge(t,2,e,nt.min(),nt.min(),We.empty(),0)}static newUnknownDocument(t,e){return new Ge(t,3,e,nt.min(),nt.min(),We.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(nt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ge&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Qe{constructor(t,e){this.position=t,this.inclusive=e}}function Xe(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ut.comparator(ut.fromName(o.referenceValue),n.key):Ne(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ye(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Oe(t.position[n],e.position[n]))return!1;return!0}
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
 */class Je{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ze(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class tn{}class en extends tn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ln(t,e,n):"array-contains"===e?new pn(t,n):"in"===e?new gn(t,n):"not-in"===e?new mn(t,n):"array-contains-any"===e?new vn(t,n):new en(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new hn(t,n):new fn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ne(e,this.value)):null!==e&&Re(this.value)===Re(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends tn{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new nn(t,e)}matches(t){return rn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rn(t){return"and"===t.op}function sn(t){return on(t)&&rn(t)}function on(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function an(t){if(t instanceof en)return t.field.canonicalString()+t.op.toString()+Le(t.value);if(sn(t))return t.filters.map((t=>an(t))).join(",");{const e=t.filters.map((t=>an(t))).join(",");return`${t.op}(${e})`}}function un(t,e){return t instanceof en?function(t,e){return e instanceof en&&t.op===e.op&&t.field.isEqual(e.field)&&Oe(t.value,e.value)}(t,e):t instanceof nn?function(t,e){return e instanceof nn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&un(n,e.filters[r])),!0)}(t,e):void x()}function cn(t){return t instanceof en?function(t){return`${t.field.canonicalString()} ${t.op} ${Le(t.value)}`}(t):t instanceof nn?function(t){return t.op.toString()+" {"+t.getFilters().map(cn).join(" ,")+"}"}(t):"Filter"}class ln extends en{constructor(t,e,n){super(t,e,n),this.key=ut.fromName(n.referenceValue)}matches(t){const e=ut.comparator(t.key,this.key);return this.matchesComparison(e)}}class hn extends en{constructor(t,e){super(t,"in",e),this.keys=dn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fn extends en{constructor(t,e){super(t,"not-in",e),this.keys=dn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ut.fromName(t.referenceValue)))}class pn extends en{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return je(e)&&xe(e.arrayValue,this.value)}}class gn extends en{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xe(this.value.arrayValue,e)}}class mn extends en{constructor(t,e){super(t,"not-in",e)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xe(this.value.arrayValue,e)}}class vn extends en{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!je(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xe(this.value.arrayValue,t)))}}
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
 */class yn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function _n(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yn(t,e,n,r,i,s,o)}function wn(t){const e=D(t);if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>an(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Tt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Le(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Le(t))).join(",")),e.le=t}return e.le}function bn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ze(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!un(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ye(t.startAt,e.startAt)&&Ye(t.endAt,e.endAt)}function En(t){return ut.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Tn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function In(t,e,n,r,i,s,o,a){return new Tn(t,e,n,r,i,s,o,a)}function Sn(t){return new Tn(t)}function Cn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function An(t){return null!==t.collectionGroup}function kn(t){const e=D(t);if(null===e.he){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new se(at.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.he.push(new Je(r,n))})),t.has(at.keyField().canonicalString())||e.he.push(new Je(at.keyField(),n))}return e.he}function Rn(t){const e=D(t);return e.Pe||(e.Pe=On(e,kn(t))),e.Pe}function On(t,e){if("F"===t.limitType)return _n(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Je(t.field,e)}));const n=t.endAt?new Qe(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qe(t.startAt.position,t.startAt.inclusive):null;return _n(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xn(t,e){const n=t.filters.concat([e]);return new Tn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nn(t,e,n){return new Tn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dn(t,e){return bn(Rn(t),Rn(e))&&t.limitType===e.limitType}function Pn(t){return`${wn(Rn(t))}|lt:${t.limitType}`}function Ln(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>cn(t))).join(", ")}]`),Tt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Le(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Le(t))).join(",")),`Target(${e})`}(Rn(t))}; limitType=${t.limitType})`}function Mn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ut.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of kn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Xe(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,kn(t),e))&&!(t.endAt&&!function(t,e,n){const r=Xe(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,kn(t),e))}(t,e)}function Un(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fn(t){return(e,n)=>{let r=!1;for(const i of kn(t)){const t=Vn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Vn(t,e,n){const r=t.field.isKeyField()?ut.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ne(r,i):x()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}
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
 */class jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return ee(this.inner)}size(){return this.innerSize}}
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
 */const $n=new ne(ut.comparator);function Bn(){return $n}const zn=new ne(ut.comparator);function qn(...t){let e=zn;for(const n of t)e=e.insert(n.key,n);return e}function Hn(t){let e=zn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Kn(){return Gn()}function Wn(){return Gn()}function Gn(){return new jn((t=>t.toString()),((t,e)=>t.isEqual(e)))}new ne(ut.comparator);const Qn=new se(ut.comparator);function Xn(...t){let e=Qn;for(const n of t)e=e.add(n);return e}const Yn=new se(G);function Jn(){return Yn}
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
 */function Zn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:It(e)?"-0":e}}function tr(t){return{integerValue:""+t}}function er(t,e){return St(e)?tr(e):Zn(t,e)}
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
 */class nr{constructor(){this._=void 0}}function rr(t,e,n){return t instanceof or?function(t,e){const n={fields:{[ge]:{stringValue:pe},[ve]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ye(e)&&(e=_e(e)),e&&(n.fields[me]=e),{mapValue:n}}(n,e):t instanceof ar?ur(t,e):t instanceof cr?lr(t,e):function(t,e){const n=sr(t,e),r=fr(n)+fr(t.Ie);return Ve(n)&&Ve(t.Ie)?tr(r):Zn(t.serializer,r)}(t,e)}function ir(t,e,n){return t instanceof ar?ur(t,e):t instanceof cr?lr(t,e):n}function sr(t,e){return t instanceof hr?function(t){return Ve(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class or extends nr{}class ar extends nr{constructor(t){super(),this.elements=t}}function ur(t,e){const n=dr(e);for(const r of t.elements)n.some((t=>Oe(t,r)))||n.push(r);return{arrayValue:{values:n}}}class cr extends nr{constructor(t){super(),this.elements=t}}function lr(t,e){let n=dr(e);for(const r of t.elements)n=n.filter((t=>!Oe(t,r)));return{arrayValue:{values:n}}}class hr extends nr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function fr(t){return fe(t.integerValue||t.doubleValue)}function dr(t){return je(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class pr{constructor(t,e){this.field=t,this.transform=e}}function gr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ar&&e instanceof ar||t instanceof cr&&e instanceof cr?J(t.elements,e.elements,Oe):t instanceof hr&&e instanceof hr?Oe(t.Ie,e.Ie):t instanceof or&&e instanceof or}(t.transform,e.transform)}class mr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mr}static exists(t){return new mr(void 0,t)}static updateTime(t){return new mr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class yr{}function _r(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new kr(t.key,mr.none()):new Tr(t.key,t.data,mr.none());{const n=t.data,r=We.empty();let i=new se(at.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ir(t.key,r,new ae(i.toArray()),mr.none())}}function wr(t,e,n){t instanceof Tr?function(t,e,n){const r=t.value.clone(),i=Cr(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(t,e,n){if(!vr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Cr(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Sr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function br(t,e,n,r){return t instanceof Tr?function(t,e,n,r){if(!vr(t.precondition,e))return n;const i=t.value.clone(),s=Ar(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(t,e,n,r){if(!vr(t.precondition,e))return n;const i=Ar(t.fieldTransforms,r,e),s=e.data;return s.setAll(Sr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return vr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Er(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,((t,e)=>gr(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tr extends yr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ir extends yr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cr(t,e,n){const r=new Map;N(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ir(o,a,n[i]))}return r}function Ar(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,rr(t,s,e))}return r}class kr extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rr extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Or{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&wr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=br(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=br(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wn();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=_r(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(nt.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Xn())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,((t,e)=>Er(t,e)))&&J(this.baseMutations,t.baseMutations,((t,e)=>Er(t,e)))}}
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
class xr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Nr{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Dr,Pr;function Lr(t){switch(t){case P.OK:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return x()}}function Mr(t){if(void 0===t)return k("GRPC error has no .code"),P.UNKNOWN;switch(t){case Dr.OK:return P.OK;case Dr.CANCELLED:return P.CANCELLED;case Dr.UNKNOWN:return P.UNKNOWN;case Dr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Dr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Dr.INTERNAL:return P.INTERNAL;case Dr.UNAVAILABLE:return P.UNAVAILABLE;case Dr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Dr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Dr.NOT_FOUND:return P.NOT_FOUND;case Dr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Dr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Dr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Dr.ABORTED:return P.ABORTED;case Dr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Dr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Dr.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(Pr=Dr||(Dr={}))[Pr.OK=0]="OK",Pr[Pr.CANCELLED=1]="CANCELLED",Pr[Pr.UNKNOWN=2]="UNKNOWN",Pr[Pr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pr[Pr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pr[Pr.NOT_FOUND=5]="NOT_FOUND",Pr[Pr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pr[Pr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pr[Pr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pr[Pr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pr[Pr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pr[Pr.ABORTED=10]="ABORTED",Pr[Pr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pr[Pr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pr[Pr.INTERNAL=13]="INTERNAL",Pr[Pr.UNAVAILABLE=14]="UNAVAILABLE",Pr[Pr.DATA_LOSS=15]="DATA_LOSS";
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
let Ur=null;
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
 */const Fr=new r([4294967295,4294967295],0);function Vr(t){const e=K().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function jr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class $r{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Br(`Invalid padding: ${e}`);if(n<0)throw new Br(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Br(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Br(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=r.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(Fr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ee)return!1;const e=Vr(t),[n,r]=jr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);if(!this.Re(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new $r(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ee)return;const e=Vr(t),[n,r]=jr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ae(n,r,i);this.Ve(t)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class zr{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,qr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new zr(nt.min(),r,new ne(G),Bn(),Xn())}}class qr{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new qr(n,e,Xn(),Xn(),Xn())}}
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
 */class Hr{constructor(t,e,n,r){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=r}}class Kr{constructor(t,e){this.targetId=t,this.ge=e}}class Wr{constructor(t,e,n=ce.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Gr{constructor(){this.pe=0,this.ye=Yr(),this.we=ce.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Xn(),e=Xn(),n=Xn();return this.ye.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:x()}})),new qr(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=Yr()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,N(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Qr{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Bn(),this.$e=Xr(),this.Ue=Xr(),this.Ke=new ne(G)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:x()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){const e=t.targetId,n=t.ge.count,r=this.Xe(e);if(r){const i=r.target;if(En(i))if(0===n){const t=new ut(i.path);this.ze(e,t,Ge.newNoDocument(t,nt.min()))}else N(1===n);else{const r=this.et(e);if(r!==n){const n=this.tt(t),i=n?this.nt(n,t,r):1;if(0!==i){this.Ye(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Ur||Ur.rt(function(t,e,n,r,i){var s,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(u=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==f?void 0:f.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
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
 */(r,t.ge,this.ke.it(),n,i))}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=de(n).toUint8Array()}catch(t){if(t instanceof ue)return R("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new $r(s,r,i)}catch(t){return R(t instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ee?null:o}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.ze(e,n,null),r++)})),r}ot(t){const e=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&En(i.target)){const e=new ut(i.target.path);this._t(e).has(r)||this.ut(r,e)||this.ze(r,e,Ge.newNoDocument(e,t))}n.ve&&(e.set(r,n.Fe()),n.Me())}}));let n=Xn();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qe.forEach(((e,n)=>n.setReadTime(t)));const r=new zr(t,e,this.Ke,this.Qe,n);return this.Qe=Bn(),this.$e=Xr(),this.Ue=Xr(),this.Ke=new ne(G),r}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const r=this.He(t);this.ut(t,e)?r.xe(e,1):r.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Gr,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new se(G),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new se(G),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||A("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Gr),this.ke.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Xr(){return new ne(ut.comparator)}function Yr(){return new ne(ut.comparator)}const Jr=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Zr=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ti=(()=>{const t={and:"AND",or:"OR"};return t})();class ei{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ni(t,e){return t.useProto3Json||Tt(e)?e:{value:e}}function ri(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ii(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function si(t,e){return ri(t,e.toTimestamp())}function oi(t){return N(!!t),nt.fromTimestamp(function(t){const e=he(t);return new et(e.seconds,e.nanos)}(t))}function ai(t,e){return ui(t,e).canonicalString()}function ui(t,e){const n=function(t){return new st(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function ci(t){const e=st.fromString(t);return N(Ni(e)),e}function li(t,e){return ai(t.databaseId,e.path)}function hi(t,e){const n=ci(e);if(n.get(1)!==t.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ut(gi(n))}function fi(t,e){return ai(t.databaseId,e)}function di(t){const e=ci(t);return 4===e.length?st.emptyPath():gi(e)}function pi(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gi(t){return N(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mi(t,e,n){return{name:li(t,e),fields:n.value.mapValue.fields}}function vi(t,e){return"found"in e?function(t,e){N(!!e.found),e.found.name,e.found.updateTime;const n=hi(t,e.found.name),r=oi(e.found.updateTime),i=e.found.createTime?oi(e.found.createTime):nt.min(),s=new We({mapValue:{fields:e.found.fields}});return Ge.newFoundDocument(n,r,i,s)}(t,e):"missing"in e?function(t,e){N(!!e.missing),N(!!e.readTime);const n=hi(t,e.missing),r=oi(e.readTime);return Ge.newNoDocument(n,r)}(t,e):x()}function yi(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(N(void 0===e||"string"==typeof e),ce.fromBase64String(e||"")):(N(void 0===e||e instanceof Buffer||e instanceof Uint8Array),ce.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?P.UNKNOWN:Mr(t.code);return new L(e,t.message||"")}(o);n=new Wr(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hi(t,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):nt.min(),a=new We({mapValue:{fields:r.document.fields}}),u=Ge.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Hr(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hi(t,r.document),s=r.readTime?oi(r.readTime):nt.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hi(t,r.document),s=r.removedTargetIds||[];n=new Hr([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Nr(r,i),o=t.targetId;n=new Kr(o,s)}}return n}function _i(t,e){let n;if(e instanceof Tr)n={update:mi(t,e.key,e.value)};else if(e instanceof kr)n={delete:li(t,e.key)};else if(e instanceof Ir)n={update:mi(t,e.key,e.data),updateMask:xi(e.fieldMask)};else{if(!(e instanceof Rr))return x();n={verify:li(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof or)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ar)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hr)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw x()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:si(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:x()}(t,e.precondition)),n}function wi(t,e){return{documents:[fi(t,e.path)]}}function bi(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fi(t,i);const s=function(t){if(0!==t.length)return Oi(nn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ki(t.field),direction:Si(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ni(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ht:n,parent:i}}function Ei(t){let e=di(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ii(t);return e instanceof nn&&sn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Je(Ri(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Tt(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Qe(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Qe(n,e)}(n.endAt)),In(e,i,o,s,a,"F",u,c)}function Ti(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ii(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return en.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return en.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(t.unaryFilter.field);return en.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(t.unaryFilter.field);return en.create(i,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):void 0!==t.fieldFilter?function(t){return en.create(Ri(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return nn.create(t.compositeFilter.filters.map((t=>Ii(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(t):x()}function Si(t){return Jr[t]}function Ci(t){return Zr[t]}function Ai(t){return ti[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Ri(t){return at.fromServerFormat(t.fieldPath)}function Oi(t){return t instanceof en?function(t){if("=="===t.op){if(Be(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NAN"}};if($e(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Be(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NOT_NAN"}};if($e(t.value))return{unaryFilter:{field:ki(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(t.field),op:Ci(t.op),value:t.value}}}(t):t instanceof nn?function(t){const e=t.getFilters().map((t=>Oi(t)));return 1===e.length?e[0]:{compositeFilter:{op:Ai(t.op),filters:e}}}(t):x()}function xi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ni(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Di{constructor(t,e,n,r,i=nt.min(),s=nt.min(),o=ce.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Di(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Pi{constructor(t){this.Tt=t}}function Li(t){const e=Ei({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Nn(e,e.limit,"L"):e}
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
 */class Mi{constructor(){}At(t,e){this.Rt(t,e),e.Vt()}Rt(t,e){if("nullValue"in t)this.ft(e,5);else if("booleanValue"in t)this.ft(e,10),e.gt(t.booleanValue?1:0);else if("integerValue"in t)this.ft(e,15),e.gt(fe(t.integerValue));else if("doubleValue"in t){const n=fe(t.doubleValue);isNaN(n)?this.ft(e,13):(this.ft(e,15),It(n)?e.gt(0):e.gt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ft(e,20),"string"==typeof n&&(n=he(n)),e.yt(`${n.seconds||""}`),e.gt(n.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,e),this.St(e);else if("bytesValue"in t)this.ft(e,30),e.bt(de(t.bytesValue)),this.St(e);else if("referenceValue"in t)this.Dt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ft(e,45),e.gt(n.latitude||0),e.gt(n.longitude||0)}else"mapValue"in t?Ke(t)?this.ft(e,Number.MAX_SAFE_INTEGER):qe(t)?this.vt(t.mapValue,e):(this.Ct(t.mapValue,e),this.St(e)):"arrayValue"in t?(this.Ft(t.arrayValue,e),this.St(e)):x()}wt(t,e){this.ft(e,25),this.Mt(t,e)}Mt(t,e){e.yt(t)}Ct(t,e){const n=t.fields||{};this.ft(e,55);for(const r of Object.keys(n))this.wt(r,e),this.Rt(n[r],e)}vt(t,e){var n,r;const i=t.fields||{};this.ft(e,53);const s=ke,o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(e,15),e.gt(fe(o)),this.wt(s,e),this.Rt(i[s],e)}Ft(t,e){const n=t.values||[];this.ft(e,50);for(const r of n)this.Rt(r,e)}Dt(t,e){this.ft(e,37),ut.fromName(t).path.forEach((t=>{this.ft(e,60),this.Mt(t,e)}))}ft(t,e){t.gt(e)}St(t){t.gt(2)}}Mi.xt=new Mi;
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
class Ui{constructor(){this.Tn=new Fi}addToCollectionParentIndex(t,e){return this.Tn.add(e),yt.resolve()}getCollectionParents(t,e){return yt.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return yt.resolve()}deleteFieldIndex(t,e){return yt.resolve()}deleteAllFieldIndexes(t){return yt.resolve()}createTargetIndexes(t,e){return yt.resolve()}getDocumentsMatchingTarget(t,e){return yt.resolve(null)}getIndexType(t,e){return yt.resolve(0)}getFieldIndexes(t,e){return yt.resolve([])}getNextCollectionGroupToUpdate(t){return yt.resolve(null)}getMinOffset(t,e){return yt.resolve(dt.min())}getMinOffsetFromCollectionGroup(t,e){return yt.resolve(dt.min())}updateCollectionGroup(t,e,n){return yt.resolve()}updateIndexEntries(t,e){return yt.resolve()}}class Fi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new se(st.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new se(st.comparator)).toArray()}}
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
const Vi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ji=41943040;class $i{static withCacheSize(t){return new $i(t,$i.DEFAULT_COLLECTION_PERCENTILE,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */$i.DEFAULT_COLLECTION_PERCENTILE=10,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$i.DEFAULT=new $i(ji,$i.DEFAULT_COLLECTION_PERCENTILE,$i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$i.DISABLED=new $i(-1,0,0);
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
class Bi{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Bi(0)}static Kn(){return new Bi(-1)}}
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
const zi="LruGarbageCollector",qi=1048576;function Hi([t,e],[n,r]){const i=G(t,n);return 0===i?G(e,r):i}class Ki{constructor(t){this.Hn=t,this.buffer=new se(Hi),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Hi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Wi{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(t){A(zi,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wt(t)?A(zi,"Ignoring IndexedDB error during garbage collection: ",t):await vt(t)}await this.er(3e5)}))}}class Gi{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return yt.resolve(bt.ae);const n=new Ki(e);return this.tr.forEachTarget(t,(t=>n.Zn(t.sequenceNumber))).next((()=>this.tr.rr(t,(t=>n.Zn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector","Garbage collection skipped; disabled"),yt.resolve(Vi)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vi):this.ir(t,e)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,r,i,s,o,u,c;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,u=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),C()<=a.$b.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(u-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-u)+"ms\n"+`Total Duration: ${c-l}ms`),yt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}function Qi(t,e){return new Gi(t,e)}
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
class Xi{constructor(){this.changes=new jn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ge.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?yt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Yi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Ji{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&br(n.mutation,t,ae.empty(),et.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Xn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Xn()){const r=Kn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=qn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Kn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Xn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Bn();const s=Gn(),o=function(){return Gn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ir)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),br(o.mutation,e,o.mutation.getFieldMask(),et.now())):s.set(e.key,ae.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Yi(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Gn();let r=new ne(((t,e)=>t-e)),i=Xn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ae.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Xn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=Wn();u.forEach((t=>{if(!i.has(t)){const r=_r(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return yt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return ut.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):An(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):yt.resolve(Kn());let o=ct,a=i;return s.next((e=>yt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?yt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Xn()))).next((t=>({batchId:o,changes:Hn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ut(e)).next((t=>{let e=qn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=qn();return this.indexManager.getCollectionParents(t,i).next((o=>yt.forEach(o,(o=>{const a=function(t,e){return new Tn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ge.newInvalidDocument(r)))}));let n=qn();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&br(s.mutation,r,ae.empty(),et.now()),Mn(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class Zi{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return yt.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:oi(t.createTime)}}(e)),yt.resolve()}getNamedQuery(t,e){return yt.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(t){return{name:t.name,query:Li(t.bundledQuery),readTime:oi(t.readTime)}}(e)),yt.resolve()}}
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
 */class ts{constructor(){this.overlays=new ne(ut.comparator),this.Rr=new Map}getOverlay(t,e){return yt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Kn();return yt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Et(t,e,r)})),yt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Rr.delete(n)),yt.resolve()}getOverlaysForCollection(t,e,n){const r=Kn(),i=e.length+1,s=new ut(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return yt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ne(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Kn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Kn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return yt.resolve(o)}Et(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new xr(e,n));let i=this.Rr.get(e);void 0===i&&(i=Xn(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}
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
 */class es{constructor(){this.sessionToken=ce.EMPTY_BYTE_STRING}getSessionToken(t){return yt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,yt.resolve()}}
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
 */class ns{constructor(){this.Vr=new se(rs.mr),this.gr=new se(rs.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new rs(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.wr(new rs(t,e))}Sr(t,e){t.forEach((t=>this.removeReference(t,e)))}br(t){const e=new ut(new st([])),n=new rs(e,t),r=new rs(e,t+1),i=[];return this.gr.forEachInRange([n,r],(t=>{this.wr(t),i.push(t.key)})),i}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new ut(new st([])),n=new rs(e,t),r=new rs(e,t+1);let i=Xn();return this.gr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new rs(t,0),n=this.Vr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rs{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return ut.comparator(t.key,e.key)||G(t.Cr,e.Cr)}static pr(t,e){return G(t.Cr,e.Cr)||ut.comparator(t.key,e.key)}}
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
 */class is{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new se(rs.mr)}checkEmpty(t){return yt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Or(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new rs(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return yt.resolve(s)}lookupMutationBatch(t,e){return yt.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Nr(n),i=r<0?0:r;return yt.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return yt.resolve(0===this.mutationQueue.length?Et:this.Fr-1)}getAllMutationBatches(t){return yt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rs(e,0),r=new rs(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(t=>{const e=this.Or(t.Cr);i.push(e)})),yt.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new se(G);return e.forEach((t=>{const e=new rs(t,0),r=new rs(t,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([e,r],(t=>{n=n.add(t.Cr)}))})),yt.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ut.isDocumentKey(i)||(i=i.child(""));const s=new rs(new ut(i),0);let o=new se(G);return this.Mr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Cr)),!0)}),s),yt.resolve(this.Br(o))}Br(t){const e=[];return t.forEach((t=>{const n=this.Or(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){N(0===this.Lr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return yt.forEach(e.mutations,(r=>{const i=new rs(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Mr=n}))}qn(t){}containsKey(t,e){const n=new rs(e,0),r=this.Mr.firstAfterOrEqual(n);return yt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,yt.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class ss{constructor(t){this.kr=t,this.docs=function(){return new ne(ut.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return yt.resolve(n?n.document.mutableCopy():Ge.newInvalidDocument(e))}getEntries(t,e){let n=Bn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ge.newInvalidDocument(t))})),yt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Bn();const s=e.path,o=new ut(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||pt(ft(o),n)<=0||(r.has(o.key)||Mn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return yt.resolve(i)}getAllFromCollectionGroup(t,e,n,r){x()}qr(t,e){return yt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new os(this)}getSize(t){return yt.resolve(this.size)}}class os extends Xi{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Ir.addEntry(t,r)):this.Ir.removeEntry(n)})),yt.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}
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
 */class as{constructor(t){this.persistence=t,this.Qr=new jn((t=>wn(t)),bn),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ns,this.targetCount=0,this.Kr=Bi.Un()}forEachTarget(t,e){return this.Qr.forEach(((t,n)=>e(n))),yt.resolve()}getLastRemoteSnapshotVersion(t){return yt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return yt.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),yt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),yt.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Bi(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,yt.resolve()}updateTargetData(t,e){return this.zn(e),yt.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,yt.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),yt.waitFor(i).next((()=>r))}getTargetCount(t){return yt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return yt.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),yt.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),yt.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),yt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return yt.resolve(n)}containsKey(t,e){return yt.resolve(this.Ur.containsKey(e))}}
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
 */class us{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new bt(0),this.zr=!1,this.zr=!0,this.jr=new es,this.referenceDelegate=t(this),this.Hr=new as(this),this.indexManager=new Ui,this.remoteDocumentCache=function(t){return new ss(t)}((t=>this.referenceDelegate.Jr(t))),this.serializer=new Pi(e),this.Yr=new Zi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ts,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new is(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new cs(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((t=>this.referenceDelegate.Xr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}ei(t,e){return yt.or(Object.values(this.Wr).map((n=>()=>n.containsKey(t,e))))}}class cs extends mt{constructor(t){super(),this.currentSequenceNumber=t}}class ls{constructor(t){this.persistence=t,this.ti=new ns,this.ni=null}static ri(t){return new ls(t)}get ii(){if(this.ni)return this.ni;throw x()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),yt.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),yt.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),yt.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach((t=>this.ii.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ii.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yt.forEach(this.ii,(n=>{const r=ut.fromPath(n);return this.si(t,r).next((t=>{t||e.removeEntry(r,nt.min())}))})).next((()=>(this.ni=null,e.apply(t))))}updateLimboDocument(t,e){return this.si(t,e).next((t=>{t?this.ii.delete(e.toString()):this.ii.add(e.toString())}))}Jr(t){return 0}si(t,e){return yt.or([()=>yt.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class hs{constructor(t,e){this.persistence=t,this.oi=new jn((t=>At(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=Qi(this,e)}static ri(t,e){return new hs(t,e)}Zr(){}Xr(t){return yt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}sr(t){let e=0;return this.rr(t,(t=>{e++})).next((()=>e))}rr(t,e){return yt.forEach(this.oi,((n,r)=>this.ar(t,n,r).next((t=>t?yt.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(t,(r=>this.ar(t,r,e).next((t=>{t||(n++,i.removeEntry(r,nt.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),yt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),yt.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),yt.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),yt.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ue(t.data.value)),e}ar(t,e,n){return yt.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.oi.get(e);return yt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
class fs{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=r}static Yi(t,e){let n=Xn(),r=Xn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fs(t,e.fromCache,n,r)}}
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
 */class ds{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class ps{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return(0,u.nr)()?8:_t((0,u.ZQ)())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.rs(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ss(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new ds;return this._s(t,e,n).next((r=>{if(i.result=r,this.Xi)return this.us(t,e,n,r.size)}))})).next((()=>i.result))}us(t,e,n,r){return n.documentReadCount<this.es?(C()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Ln(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),yt.resolve()):(C()<=a.$b.DEBUG&&A("QueryEngine","Query:",Ln(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(C()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Ln(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rn(e))):yt.resolve())}rs(t,e){if(Cn(e))return yt.resolve(null);let n=Rn(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Nn(e,null,"F"),n=Rn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Xn(...r);return this.ns.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.cs(e,r);return this.ls(e,s,i,n.readTime)?this.rs(t,Nn(e,null,"F")):this.hs(t,s,e,n)}))))})))))}ss(t,e,n,r){return Cn(e)||r.isEqual(nt.min())?yt.resolve(null):this.ns.getDocuments(t,n).next((i=>{const s=this.cs(e,i);return this.ls(e,s,n,r)?yt.resolve(null):(C()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ln(e)),this.hs(t,s,e,ht(r,ct)).next((t=>t)))}))}cs(t,e){let n=new se(Fn(t));return e.forEach(((e,r)=>{Mn(t,r)&&(n=n.add(r))})),n}ls(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(t,e,n){return C()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Ln(e)),this.ns.getDocumentsMatchingQuery(t,e,dt.min(),n)}hs(t,e,n,r){return this.ns.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */const gs="LocalStore",ms=3e8;class vs{constructor(t,e,n,r){this.persistence=t,this.Ps=e,this.serializer=r,this.Ts=new ne(G),this.Is=new jn((t=>wn(t)),bn),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ji(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ts)))}}function ys(t,e,n,r){return new vs(t,e,n,r)}async function _s(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.As(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Xn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Rs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function ws(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Hr.getLastRemoteSnapshotVersion(t)))}function bs(t,e){const n=D(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Hr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(ce.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=ms)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(u,c,s)&&o.push(n.Hr.updateTargetData(t,c))}));let a=Bn(),u=Xn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Es(t,s,e.documentUpdates).next((t=>{a=t.Vs,u=t.fs}))),!r.isEqual(nt.min())){const e=n.Hr.getLastRemoteSnapshotVersion(t).next((e=>n.Hr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return yt.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.Ts=i,t)))}function Es(t,e,n){let r=Xn(),i=Xn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Bn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(nt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):A(gs,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}function Ts(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Hr.getTargetData(t,e).next((i=>i?(r=i,yt.resolve(r)):n.Hr.allocateTargetId(t).next((i=>(r=new Di(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Hr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(t.targetId,t),n.Is.set(e,t.targetId)),t}))}async function Is(t,e,n){const r=D(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!wt(t))throw t;A(gs,`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Ss(t,e,n){const r=D(t);let i=nt.min(),s=Xn();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=D(t),i=r.Is.get(n);return void 0!==i?yt.resolve(r.Ts.get(i)):r.Hr.getTargetData(e,n)}(r,t,Rn(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Ps.getDocumentsMatchingQuery(t,e,n?i:nt.min(),n?s:Xn()))).next((t=>(Cs(r,Un(e),t),{documents:t,gs:s})))))}function Cs(t,e,n){let r=t.Es.get(e)||nt.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Es.set(e,r)}class As{constructor(){this.activeTargetIds=Jn()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ks{constructor(){this.ho=new As,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new As,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Rs{To(t){}shutdown(){}}
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
 */const Os="ConnectivityMonitor";class xs{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){A(Os,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){A(Os,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Ns=null;function Ds(){return null===Ns?Ns=function(){return 268435456+Math.round(2147483648*Math.random())}():Ns++,"0x"+Ns.toString(16)
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
 */}const Ps="RestConnection",Ls={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ms{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===Ee?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(t,e,n,r,i){const s=Ds(),o=this.bo(t,e.toUriEncodedString());A(Ps,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(t,o,a,n).then((e=>(A(Ps,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw R(Ps,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.So(t,e,n,r,i)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+I}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Ls[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}
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
 */class Us{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}
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
 */const Fs="WebChannelConnection";class Vs extends Ms{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const i=Ds();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(d.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();A(Fs,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:A(Fs,`RPC '${t}' ${i} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(A(Fs,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(e)>=0?e:P.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{A(Fs,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);A(Fs,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}Wo(t,e,n){const r=Ds(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=y(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");A(Fs,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let h=!1,d=!1;const p=new Us({Fo:e=>{d?A(Fs,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(A(Fs,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),A(Fs,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Mo:()=>l.close()}),_=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return _(l,f.EventType.OPEN,(()=>{d||(A(Fs,`RPC '${t}' stream ${r} transport opened.`),p.Qo())})),_(l,f.EventType.CLOSE,(()=>{d||(d=!0,A(Fs,`RPC '${t}' stream ${r} transport closed`),p.Uo())})),_(l,f.EventType.ERROR,(e=>{d||(d=!0,R(Fs,`RPC '${t}' stream ${r} transport errored:`,e),p.Uo(new L(P.UNAVAILABLE,"The operation could not be completed")))})),_(l,f.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];N(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A(Fs,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Dr[t];if(void 0!==e)return Mr(e)}(e),i=o.message;void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,p.Uo(new L(n,i)),l.close()}else A(Fs,`RPC '${t}' stream ${r} received:`,i),p.Ko(i)}})),_(o,m.STAT_EVENT,(e=>{e.stat===g.PROXY?A(Fs,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===g.NOPROXY&&A(Fs,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.$o()}),0),p}}
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
 */function js(){return"undefined"!=typeof document?document:null}
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
 */function $s(t){return new ei(t,!0)}
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
 */class Bs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
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
 */const zs="PersistentStream";class qs{constructor(t,e,n,r,i,s,o,a){this.Ti=t,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Bs(t,e)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==t?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(k(e.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.i_===e&&this.V_(t,n)}),(e=>{t((()=>{const t=new L(P.UNKNOWN,"Fetching auth token failed: "+e.message);return this.m_(t)}))}))}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((t=>{n((()=>this.m_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.__?this.g_(t):this.onNext(t)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return A(zs,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget((()=>this.i_===t?e():(A(zs,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hs extends qs{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=yi(this.serializer,t),n=function(t){if(!("targetChange"in t))return nt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?nt.min():e.readTime?oi(e.readTime):nt.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=pi(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=En(r)?{documents:wi(t,r)}:{query:bi(t,r).ht},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ii(t,e.resumeToken);const r=ni(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(nt.min())>0){n.readTime=ri(t,e.snapshotVersion.toTimestamp());const r=ni(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Ti(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=pi(this.serializer),e.removeTarget=t,this.I_(e)}}
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
class Ks{}class Ws extends Ks{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,ui(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}Co(t,e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(t,ui(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Gs{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,"Online"===t&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(k(e),this.N_=!1):A("OnlineStateTracker",e)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
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
 */const Qs="RemoteStore";class Xs{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((t=>{n.enqueueAndForget((async()=>{so(this)&&(A(Qs,"Restarting streams for network reachability change."),await async function(t){const e=D(t);e.W_.add(4),await Js(e),e.j_.set("Unknown"),e.W_.delete(4),await Ys(e)}(this))}))})),this.j_=new Gs(n,r)}}async function Ys(t){if(so(t))for(const e of t.G_)await e(!0)}async function Js(t){for(const e of t.G_)await e(!1)}function Zs(t,e){const n=D(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),io(n)?ro(n):go(n).c_()&&eo(n,e))}function to(t,e){const n=D(t),r=go(n);n.K_.delete(e),r.c_()&&no(n,e),0===n.K_.size&&(r.c_()?r.P_():so(n)&&n.j_.set("Unknown"))}function eo(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(nt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).y_(e)}function no(t,e){t.H_.Ne(e),go(t).w_(e)}function ro(t){t.H_=new Qr({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),go(t).start(),t.j_.B_()}function io(t){return so(t)&&!go(t).u_()&&t.K_.size>0}function so(t){return 0===D(t).W_.size}function oo(t){t.H_=void 0}async function ao(t){t.j_.set("Online")}async function uo(t){t.K_.forEach(((e,n)=>{eo(t,e)}))}async function co(t,e){oo(t),io(t)?(t.j_.q_(e),ro(t)):t.j_.set("Unknown")}async function lo(t,e,n){if(t.j_.set("Online"),e instanceof Wr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.K_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.K_.delete(r),t.H_.removeTarget(r))}(t,e)}catch(n){A(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ho(t,n)}else if(e instanceof Hr?t.H_.We(e):e instanceof Kr?t.H_.Ze(e):t.H_.je(e),!n.isEqual(nt.min()))try{const e=await ws(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.H_.ot(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.K_.get(r);i&&t.K_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.K_.get(e);if(!r)return;t.K_.set(e,r.withResumeToken(ce.EMPTY_BYTE_STRING,r.snapshotVersion)),no(t,e);const i=new Di(r.target,e,n,r.sequenceNumber);eo(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){A(Qs,"Failed to raise snapshot:",e),await ho(t,e)}}async function ho(t,e,n){if(!wt(e))throw e;t.W_.add(1),await Js(t),t.j_.set("Offline"),n||(n=()=>ws(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{A(Qs,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ys(t)}))}async function fo(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),A(Qs,"RemoteStore received new credentials");const r=so(n);n.W_.add(3),await Js(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ys(n)}async function po(t,e){const n=D(t);e?(n.W_.delete(2),await Ys(n)):e||(n.W_.add(2),await Js(n),n.j_.set("Unknown"))}function go(t){return t.J_||(t.J_=function(t,e,n){const r=D(t);return r.M_(),new Hs(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{xo:ao.bind(null,t),No:uo.bind(null,t),Lo:co.bind(null,t),p_:lo.bind(null,t)}),t.G_.push((async e=>{e?(t.J_.h_(),io(t)?ro(t):t.j_.set("Unknown")):(await t.J_.stop(),oo(t))}))),t.J_}
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
class mo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new mo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vo(t,e){if(k("AsyncQueue",`${e}: ${t}`),wt(t))return new L(P.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class yo{static emptySet(t){return new yo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||ut.comparator(e.key,n.key):(t,e)=>ut.comparator(t.key,e.key),this.keyedMap=qn(),this.sortedSet=new ne(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class _o{constructor(){this.Z_=new ne(ut.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?0!==t.type&&3===n.type?this.Z_=this.Z_.insert(e,t):3===t.type&&1!==n.type?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Z_=this.Z_.remove(e):1===t.type&&2===n.type?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):x():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class wo{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new wo(t,e,yo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class bo{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class Eo{constructor(){this.queries=To(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=To(),r.forEach(((t,n)=>{for(const r of n.ta)r.onError(e)}))}(this,new L(P.ABORTED,"Firestore shutting down"))}}function To(){return new jn((t=>Pn(t)),Dn)}async function Io(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new bo,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=vo(t,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&ko(n)}async function So(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.ta.indexOf(e);t>=0&&(s.ta.splice(t,1),0===s.ta.length?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Co(t,e){const n=D(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.ta)t.oa(i)&&(r=!0);e.ea=i}}r&&ko(n)}function Ao(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function ko(t){t.ia.forEach((t=>{t.next()}))}var Ro,Oo;(Oo=Ro||(Ro={}))._a="default",Oo.Cache="cache";class xo{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new wo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==e;return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Pa(t){t=wo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ro.Cache}}
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
class No{constructor(t){this.key=t}}class Do{constructor(t){this.key=t}}class Po{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Xn(),this.mutatedKeys=Xn(),this.ya=Fn(t),this.wa=new yo(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new _o,r=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=Mn(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.va(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.ya(l,a)>0||u&&this.ya(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const s=t.Da.X_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.ya(t.doc,e.doc))),this.Ca(n),r=null!=r&&r;const o=e&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,u=a!==this.ga;return this.ga=a,0!==s.length||u?{snapshot:new wo(this.query,t.wa,i,s,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _o,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((t=>this.fa=this.fa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.fa=this.fa.delete(t))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Xn(),this.wa.forEach((t=>{this.xa(t.key)&&(this.pa=this.pa.add(t.key))}));const e=[];return t.forEach((t=>{this.pa.has(t)||e.push(new Do(t))})),this.pa.forEach((n=>{t.has(n)||e.push(new No(n))})),e}Oa(t){this.fa=t.gs,this.pa=Xn();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return wo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const Lo="SyncEngine";class Mo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Uo{constructor(t){this.key=t,this.Ba=!1}}class Fo{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new jn((t=>Pn(t)),Dn),this.qa=new Map,this.Qa=new Set,this.$a=new ne(ut.comparator),this.Ua=new Map,this.Ka=new ns,this.Wa={},this.Ga=new Map,this.za=Bi.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function Vo(t,e,n=!0){const r=na(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await $o(r,e,n,!0),i}async function jo(t,e){const n=na(t);await $o(n,e,!0,!1)}async function $o(t,e,n,r){const i=await Ts(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Bo(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&Zs(t.remoteStore,i),a}async function Bo(t,e,n,r,i){t.Ha=(e,n,r)=>async function(t,e,n,r){let i=e.view.ba(n);i.ls&&(i=await Ss(t.localStore,e.query,!1).then((({documents:t})=>e.view.ba(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return Xo(t,e.targetId,a.Ma),a.snapshot}(t,e,n,r);const s=await Ss(t.localStore,e,!0),o=new Po(e,s.gs),a=o.ba(s.documents),u=qr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);Xo(t,n,c.Ma);const l=new Mo(e,n,o);return t.ka.set(e,l),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),c.snapshot}async function zo(t,e,n){const r=D(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((t=>!Dn(t,e)))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Is(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&to(r.remoteStore,i.targetId),Go(r,i.targetId)})).catch(vt)):(Go(r,i.targetId),await Is(r.localStore,i.targetId,!0))}async function qo(t,e){const n=D(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),to(n.remoteStore,r.targetId))}async function Ho(t,e){const n=D(t);try{const t=await bs(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Ua.get(e);r&&(N(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?N(r.Ba):t.removedDocuments.size>0&&(N(r.Ba),r.Ba=!1))})),await Zo(n,t,e)}catch(t){await vt(t)}}function Ko(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.ta)i.sa(e)&&(r=!0)})),r&&ko(n)}(r.eventManager,e),t.length&&r.La.p_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wo(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let t=new ne(ut.comparator);t=t.insert(s,Ge.newNoDocument(s,nt.min()));const n=Xn().add(s),i=new zr(nt.min(),new Map,new ne(G),t,n);await Ho(r,i),r.$a=r.$a.remove(s),r.Ua.delete(e),Jo(r)}else await Is(r.localStore,e,!1).then((()=>Go(r,e,n))).catch(vt)}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach((e=>{t.Ka.containsKey(e)||Qo(t,e)}))}function Qo(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);null!==n&&(to(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Jo(t))}function Xo(t,e,n){for(const r of n)r instanceof No?(t.Ka.addReference(r.key,e),Yo(t,r)):r instanceof Do?(A(Lo,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||Qo(t,r.key)):x()}function Yo(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(A(Lo,"New document in limbo: "+n),t.Qa.add(r),Jo(t))}function Jo(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ut(st.fromString(e)),r=t.za.next();t.Ua.set(r,new Uo(n)),t.$a=t.$a.insert(n,r),Zs(t.remoteStore,new Di(Rn(Sn(n.path)),r,"TargetPurposeLimboResolution",bt.ae))}}async function Zo(t,e,n){const r=D(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((t,a)=>{o.push(r.Ha(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=fs.Yi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.La.p_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>yt.forEach(e,(e=>yt.forEach(e.Hi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>yt.forEach(e.Ji,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!wt(t))throw t;A(gs,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ts.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(t,i)}}}(r.localStore,s))}async function ta(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){A(Lo,"User change. New user:",e.toKey());const t=await _s(n.localStore,e);n.currentUser=e,function(t,e){t.Ga.forEach((t=>{t.forEach((t=>{t.reject(new L(P.CANCELLED,e))}))})),t.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Zo(n,t.Rs)}}function ea(t,e){const n=D(t),r=n.Ua.get(e);if(r&&r.Ba)return Xn().add(r.key);{let t=Xn();const r=n.qa.get(e);if(!r)return t;for(const e of r){const r=n.ka.get(e);t=t.unionWith(r.view.Sa)}return t}}function na(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ho.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ea.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wo.bind(null,e),e.La.p_=Co.bind(null,e.eventManager),e.La.Ja=Ao.bind(null,e.eventManager),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$s(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return ys(this.persistence,new ps,t.initialUser,this.serializer)}Xa(t){return new us(ls.ri,this.serializer)}Za(t){return new ks}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class ia extends ra{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){N(this.persistence.referenceDelegate instanceof hs);const n=this.persistence.referenceDelegate.garbageCollector;return new Wi(n,t.asyncQueue,e)}Xa(t){const e=void 0!==this.cacheSizeBytes?$i.withCacheSize(this.cacheSizeBytes):$i.DEFAULT;return new us((t=>hs.ri(t,e)),this.serializer)}}class sa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ko(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ta.bind(null,this.syncEngine),await po(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Eo}()}createDatastore(t){const e=$s(t.databaseInfo.databaseId),n=function(t){return new Vs(t)}(t.databaseInfo);return function(t,e,n,r){return new Ws(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Xs(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ko(this.syncEngine,t,0)),function(){return xs.D()?new xs:new Rs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Fo(t,e,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=D(t);A(Qs,"RemoteStore shutting down."),e.W_.add(5),await Js(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}sa.provider={build:()=>new sa};
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
class oa{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):k("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
class aa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new L(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(t,e){const n=D(t),r={documents:e.map((t=>li(n.serializer,t)))},i=await n.Co("BatchGetDocuments",n.serializer.databaseId,st.emptyPath(),r,e.length),s=new Map;i.forEach((t=>{const e=vi(n.serializer,t);s.set(e.key.toString(),e)}));const o=[];return e.forEach((t=>{const e=s.get(t.toString());N(!!e),o.push(e)})),o}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastTransactionError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new kr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=ut.fromPath(e);this.mutations.push(new Rr(n,this.precondition(n)))})),await async function(t,e){const n=D(t),r={writes:e.map((t=>_i(n.serializer,t)))};await n.So("Commit",n.serializer.databaseId,st.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw x();e=nt.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new L(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(nt.min())?mr.exists(!1):mr.updateTime(e):mr.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(nt.min()))throw new L(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mr.updateTime(e)}return mr.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
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
 */class ua{constructor(t,e,n,r,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=i,this.Tu=n.maxAttempts,this.a_=new Bs(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo((async()=>{const t=new aa(this.datastore),e=this.du(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Au(t)}))))})).catch((t=>{this.Au(t)}))}))}du(t){try{const e=this.updateFunction(t);return!Tt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(t){this.Tu>0&&this.Ru(t)?(this.Tu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Eu(),Promise.resolve())))):this.deferred.reject(t)}Ru(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Lr(e)}return!1}}
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
 */const ca="FirestoreClient";class la{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=W.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{A(ca,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(A(ca,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ha(t,e){t.asyncQueue.verifyOperationInProgress(),A(ca,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await _s(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function fa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await da(t);A(ca,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>fo(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>fo(e.remoteStore,n))),t._onlineComponents=e}async function da(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A(ca,"Using user provided OfflineComponentProvider");try{await ha(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;R("Error using user provided cache. Falling back to memory cache: "+n),await ha(t,new ra)}}else A(ca,"Using default OfflineComponentProvider"),await ha(t,new ia(void 0));return t._offlineComponents}async function pa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A(ca,"Using user provided OnlineComponentProvider"),await fa(t,t._uninitializedComponentsProvider._online)):(A(ca,"Using default OnlineComponentProvider"),await fa(t,new sa))),t._onlineComponents}function ga(t){return pa(t).then((t=>t.datastore))}async function ma(t){const e=await pa(t),n=e.eventManager;return n.onListen=Vo.bind(null,e.syncEngine),n.onUnlisten=zo.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jo.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qo.bind(null,e.syncEngine),n}function va(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new oa({next:n=>{s.su(),e.enqueueAndForget((()=>So(t,o))),n.fromCache&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new xo(n,s,{includeMetadataChanges:!0,Ta:!0});return Io(t,o)}(await ma(t),t.asyncQueue,e,n,r))),r.promise}
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
function ya(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const _a=new Map;
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
 */function wa(t,e,n){if(!n)throw new L(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ba(t,e,n,r){if(!0===e&&!0===r)throw new L(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ea(t){if(!ut.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(ut.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":x()}function Sa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Ca="firestore.googleapis.com",Aa=!0;class ka{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ca,this.ssl=Aa}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Aa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=ji;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<qi)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ba("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ya(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ra{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ka({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ka(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=_a.get(t);e&&(A("ComponentProvider","Removing Datastore"),_a.delete(t),e.terminate())}(this),Promise.resolve()}}function Oa(t,e,n,r={}){var i;const s=(t=Sa(t,Ra))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==Ca&&s.host!==a&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!(0,u.bD)(c,o)&&(t._setSettings(c),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=T.MOCK_USER;else{e=(0,u.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}t._authCredentials=new V(new U(e,n))}}
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
 */class xa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new xa(this.firestore,t,this._query)}}class Na{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Da(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Na(this.firestore,t,this._key)}}class Da extends xa{constructor(t,e,n){super(t,e,Sn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Na(this.firestore,null,new ut(t))}withConverter(t){return new Da(this.firestore,t,this._path)}}function Pa(t,e,...n){if(t=(0,u.Ku)(t),wa("collection","path",e),t instanceof Ra){const r=st.fromString(e,...n);return Ta(r),new Da(t,null,r)}{if(!(t instanceof Na||t instanceof Da))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Ta(r),new Da(t.firestore,null,r)}}function La(t,e,...n){if(t=(0,u.Ku)(t),1===arguments.length&&(e=W.newId()),wa("doc","path",e),t instanceof Ra){const r=st.fromString(e,...n);return Ea(r),new Na(t,null,new ut(r))}{if(!(t instanceof Na||t instanceof Da))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Ea(r),new Na(t.firestore,t instanceof Da?t.converter:null,new ut(r))}}
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
const Ma="AsyncQueue";class Ua{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Bs(this,"async_queue_retry"),this.Su=()=>{const t=js();t&&A(Ma,"Visibility state changed to "+t.visibilityState),this.a_.t_()},this.bu=t;const e=js();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=js();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const e=new M;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!wt(t))throw t;A(Ma,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const e=this.bu.then((()=>(this.pu=!0,t().catch((t=>{this.gu=t,this.pu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw k("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.pu=!1,t))))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const r=mo.createAndSchedule(this,t,e,n,(t=>this.Fu(t)));return this.fu.push(r),r}Du(){this.gu&&x()}verifyOperationInProgress(){}async Mu(){let t;do{t=this.bu,await t}while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.fu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Fa extends Ra{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ua,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ua(t),this._firestoreClient=void 0,await t}}}function Va(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Ee,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,u.yU)("firestore");t&&Oa(i,...t)}return i}function ja(t){if(t._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$a(t),t._firestoreClient}function $a(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new be(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ya(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new la(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
class Ba{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ba(ce.fromBase64String(t))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ba(ce.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class za{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class qa{constructor(t){this._methodName=t}}
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
 */class Ha{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}
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
 */class Ka{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
 */const Wa=/^__.*__$/;class Ga{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ir(t,this.data,this.fieldMask,e,this.fieldTransforms):new Tr(t,this.data,e,this.fieldTransforms)}}class Qa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ir(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Xa(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Ya{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ya(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.$u(t),r}Uu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return du(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(0===t.length)throw this.Wu("Document fields must not be empty");if(Xa(this.Lu)&&Wa.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ja{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$s(t)}ju(t,e,n,r=!1){return new Ya({Lu:t,methodName:e,zu:n,path:at.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Za(t){const e=t._freezeSettings(),n=$s(t._databaseId);return new Ja(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tu(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);cu("Data must be an object, but it was:",o,r);const a=au(r,o);let u,c;if(s.merge)u=new ae(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=lu(e,r,n);if(!o.contains(i))throw new L(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);pu(t,i)||t.push(i)}u=new ae(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new Ga(new We(a),u,c)}class eu extends qa{_toFieldTransform(t){if(2!==t.Lu)throw 1===t.Lu?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof eu}}class nu extends qa{_toFieldTransform(t){return new pr(t.path,new or)}isEqual(t){return t instanceof nu}}function ru(t,e,n,r){const i=t.ju(1,e,n);cu("Data must be an object, but it was:",i,r);const s=[],o=We.empty();te(r,((t,r)=>{const a=fu(e,t,n);r=(0,u.Ku)(r);const c=i.Uu(a);if(r instanceof eu)s.push(a);else{const t=ou(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new ae(s);return new Qa(o,a,i.fieldTransforms)}function iu(t,e,n,r,i,s){const o=t.ju(1,e,n),a=[lu(e,r,n)],c=[i];if(s.length%2!=0)throw new L(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)a.push(lu(e,s[u])),c.push(s[u+1]);const l=[],h=We.empty();for(let d=a.length-1;d>=0;--d)if(!pu(l,a[d])){const t=a[d];let e=c[d];e=(0,u.Ku)(e);const n=o.Uu(t);if(e instanceof eu)l.push(t);else{const r=ou(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new ae(l);return new Qa(h,f,o.fieldTransforms)}function su(t,e,n,r=!1){return ou(n,t.ju(r?4:3,e))}function ou(t,e){if(uu(t=(0,u.Ku)(t)))return cu("Unsupported field value:",e,t),au(t,e);if(t instanceof qa)return function(t,e){if(!Xa(e.Lu))throw e.Wu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Wu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&4!==e.Lu)throw e.Wu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=ou(i,e.Ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,u.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return er(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=et.fromDate(t);return{timestampValue:ri(e.serializer,n)}}if(t instanceof et){const n=new et(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ri(e.serializer,n)}}if(t instanceof Ha)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ba)return{bytesValue:ii(e.serializer,t._byteString)};if(t instanceof Na){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ai(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Ka)return function(t,e){const n={fields:{[Ie]:{stringValue:Ae},[ke]:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Wu("VectorValues must only contain numeric values.");return Zn(e.serializer,t)}))}}}};return{mapValue:n}}(t,e);throw e.Wu(`Unsupported field value: ${Ia(t)}`)}(t,e)}function au(t,e){const n={};return ee(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):te(t,((t,r)=>{const i=ou(r,e.qu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function uu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Ha||t instanceof Ba||t instanceof Na||t instanceof qa||t instanceof Ka)}function cu(t,e,n){if(!uu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ia(n);throw"an object"===r?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function lu(t,e,n){if((e=(0,u.Ku)(e))instanceof za)return e._internalPath;if("string"==typeof e)return fu(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const hu=new RegExp("[~\\*/\\[\\]]");function fu(t,e,n){if(e.search(hu)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new za(...e.split("."))._internalPath}catch(r){throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(P.INVALID_ARGUMENT,a+t+u)}function pu(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class gu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Na(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new mu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class mu extends gu{data(){return super.data()}}function vu(t,e){return"string"==typeof e?fu(t,e):e instanceof za?e._internalPath:e._delegate._internalPath}
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
 */function yu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _u{}class wu extends _u{}function bu(t,e,...n){let r=[];e instanceof _u&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Iu)).length,n=t.filter((t=>t instanceof Eu)).length;if(e>1||e>0&&n>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const i of r)t=i._apply(t);return t}class Eu extends wu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Eu(t,e,n)}_apply(t){const e=this._parse(t);return Au(t._query,e),new xa(t.firestore,t.converter,xn(t._query,e))}_parse(t){const e=Za(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Cu(o,s);const e=[];for(const n of o)e.push(Su(r,t,n));a={arrayValue:{values:e}}}else a=Su(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Cu(o,s),a=su(n,e,o,"in"===s||"not-in"===s);const u=en.create(i,s,a);return u}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Tu(t,e,n){const r=e,i=vu("where",t);return Eu._create(i,r,n)}class Iu extends _u{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Iu(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:nn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Au(n,i),n=xn(n,i)}(t._query,e),new xa(t.firestore,t.converter,xn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Su(t,e,n){if("string"==typeof(n=(0,u.Ku)(n))){if(""===n)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!An(e)&&-1!==n.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!ut.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fe(t,new ut(r))}if(n instanceof Na)return Fe(t,n._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||0===t.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Au(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ku{convertValue(t,e="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(de(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return te(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[ke].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>fe(t.doubleValue)));return new Ka(i)}convertGeoPoint(t){return new Ha(fe(t.latitude),fe(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_e(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(we(t));default:return null}}convertTimestamp(t){const e=he(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=st.fromString(t);N(Ni(n));const r=new Te(n.get(1),n.get(3)),i=new ut(n.popFirst(5));return r.isEqual(e)||k(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function Ru(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ou extends ku{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ba(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Na(this.firestore,null,e)}}
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
class xu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nu extends gu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Du extends Nu{data(t={}){return super.data(t)}}class Pu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new xu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Du(this._firestore,this._userDataWriter,n.key,n,new xu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Du(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Du(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Lu(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Lu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class Mu extends ku{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ba(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Na(this.firestore,null,e)}}function Uu(t){t=Sa(t,xa);const e=Sa(t.firestore,Fa),n=ja(e),r=new Mu(e);return yu(t._query),va(n,t._query).then((n=>new Pu(e,r,t,n)))}
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
const Fu={maxAttempts:5};
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
 */function Vu(t,e){if((t=(0,u.Ku)(t)).firestore!==e)throw new L(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */class ju{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Za(t)}get(t){const e=Vu(t,this._firestore),n=new Ou(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return x();const r=t[0];if(r.isFoundDocument())return new gu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new gu(this._firestore,n,e._key,null,e.converter);throw x()}))}set(t,e,n){const r=Vu(t,this._firestore),i=Ru(r.converter,e,n),s=tu(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Vu(t,this._firestore);let s;return s="string"==typeof(e=(0,u.Ku)(e))||e instanceof za?iu(this._dataReader,"Transaction.update",i._key,e,n,r):ru(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Vu(t,this._firestore);return this._transaction.delete(e._key),this}}
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
 */class $u extends ju{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Vu(t,this._firestore),n=new Mu(this._firestore);return super.get(t).then((t=>new Nu(this._firestore,n,e._key,t._document,new xu(!1,!1),e.converter)))}}function Bu(t,e,n){t=Sa(t,Fa);const r=Object.assign(Object.assign({},Fu),n);return function(t){if(t.maxAttempts<1)throw new L(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>{const i=await ga(t);new ua(t.asyncQueue,i,n,e,r).Iu()})),r.promise}(ja(t),(n=>e(new $u(t,n))),r)}
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
 */function zu(){return new nu("serverTimestamp")}new WeakMap;
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
 */!function(t,e=!0){!function(t){I=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Fa(new j(t.getProvider("auth-internal")),new q(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Te(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,E,t),(0,s.KO)(b,E,"esm2017")}()},7628:function(t,e,n){"use strict";var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},7629:function(t,e,n){"use strict";var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.41.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7642:function(t,e,n){"use strict";var r=n(6518),i=n(3440),s=n(4916),o=!s("difference",(function(t){return 0===t.size}));r({target:"Set",proto:!0,real:!0,forced:o},{difference:i})},7657:function(t,e,n){"use strict";var r,i,s,o=n(9039),a=n(4901),u=n(34),c=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!u(r)||o((function(){var t={};return r[p].call(t)!==t}));m?r={}:d&&(r=c(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},7696:function(t,e,n){"use strict";var r=n(1291),i=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},7740:function(t,e,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),u=o.f,c=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||u(t,h,c(e,h))}}},7750:function(t,e,n){"use strict";var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},7751:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},7811:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7844:function(t,e,n){"use strict";n.d(e,{qk:function(){return Ot},c7:function(){return Nt},KR:function(){return xt}});n(4114),n(6573),n(8100),n(7936),n(8111),n(2489),n(7588),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r=n(3405),i=n(774),s=n(852);
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(r){return new O(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:u,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class x{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function N(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,u())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(c)return void f();if(t)return f(),void l.call(null,t,...e);const n=u()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function D(t){t(!1)}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class ${constructor(t,e,n,r,i,s,o,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||j(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new B(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new B(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());P(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?A():b();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new B(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class B{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function H(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function W(t,e,n,r,i,s,o=!0){const a=V(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return H(c,e),z(c,n),q(c,s),K(c,r),new $(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
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
function G(t){let e;try{e=JSON.parse(t)}catch(n){return null}return L(e)?e:null}
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
 */function J(t,e){return e}class Z{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||J}}let tt=null;function et(t){return!M(t)||t.length<2?t:Y(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Z("bucket")),t.push(new Z("generation")),t.push(new Z("metageneration")),t.push(new Z("name","fullPath",!0));const n=new Z("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Z("size");return i.xform=r,t.push(i),t.push(new Z("timeCreated")),t.push(new Z("updated")),t.push(new Z("md5Hash",null,!0)),t.push(new Z("cacheControl",null,!0)),t.push(new Z("contentDisposition",null,!0)),t.push(new Z("contentEncoding",null,!0)),t.push(new Z("contentLanguage",null,!0)),t.push(new Z("contentType",null,!0)),t.push(new Z("metadata","customMetadata",!0)),tt=t,tt}function rt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new O(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return rt(r,t),r}function st(t,e,n){const r=G(e);if(null===r)return null;const i=r;return it(t,i,n)}function ot(t,e,n,r){const i=G(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),u=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),u=F(a,n,r),c=V({alt:"media",token:e});return u+c}));return u[0]}class at{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function wt(t){return/^[A-Za-z]+:\/\//.test(t)}function bt(t,e){return new vt(t,e)}function Et(t,e){if(t instanceof Ct){const n=t;if(null==n._bucket)throw I();const r=new vt(n,n._bucket);return null!=e?Et(r,e):r}return void 0!==e?_t(t,e):t}function Tt(t,e){if(e&&wt(e)){if(t instanceof Ct)return bt(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function It(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}function St(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Fy)(s,t.app.options.projectId))}class Ct{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):It(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=It(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new vt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new x(A());{const s=W(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const At="@firebase/storage",kt="0.13.7",Rt="storage";function Ot(t){return t=(0,i.Ku)(t),yt(t)}function xt(t,e){return t=(0,i.Ku)(t),Tt(t,e)}function Nt(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,Rt),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&Dt(s,...o),s}function Dt(t,e,n,r={}){St(t,e,n,r)}
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
 */function Pt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(n,i,s,e,r.MF)}function Lt(){(0,r.om)(new s.uA(Rt,Pt,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(At,kt,""),(0,r.KO)(At,kt,"esm2017")}Lt()},7874:function(t,e,n){var r=n(8606),i=r.Symbol;t.exports=i},7936:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},7979:function(t,e,n){"use strict";var r=n(8551);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},8004:function(t,e,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",(function(t){return 2===t.size&&t.has(1)&&t.has(2)}))||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},8014:function(t,e,n){"use strict";var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8100:function(t,e,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},8111:function(t,e,n){"use strict";var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),u=n(2787),c=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),v="constructor",y="Iterator",_=d("toStringTag"),w=TypeError,b=i[y],E=m||!a(b)||b.prototype!==p||!h((function(){b({})})),T=function(){if(s(this,p),u(this)===p)throw new w("Abstract class Iterator not directly constructable")},I=function(t,e){g?c(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new w("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,_)||I(_,y),!E&&f(p,v)&&p[v]!==Object||I(v,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},8227:function(t,e,n){"use strict";var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),u=n(7040),c=r.Symbol,l=i("wks"),h=u?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(c,t)?c[t]:h("Symbol."+t)),l[t]}},8237:function(t,e,n){"use strict";var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),u=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],c=0;if(i(e,(function(e){n?(n=!1,r=e):r=t(r,e,c),c++}),{IS_RECORD:!0}),n)throw new u("Reduce of empty iterator with no initial value");return r}})},8469:function(t,e,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,u=r(a.forEach),c=r(a.keys),l=c(new o).next;t.exports=function(t,e,n){return n?i({iterator:c(t),next:l},e):u(t,e)}},8480:function(t,e,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},8527:function(t,e,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var c=n.getIterator();return!1!==a(c,(function(t){if(!i(e,t))return u(c,"normal",!1)}))}},8551:function(t,e,n){"use strict";var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},8574:function(t,e,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(o);t.exports=function(t,e){if(u&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},8606:function(t,e,n){var r=n(6903),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},8622:function(t,e,n){"use strict";var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8626:function(t,e,n){var r;t=n.nmd(t),n(4114),n(6573),n(8100),n(7936),n(8111),n(9314),n(1148),n(2489),n(116),n(531),n(7588),n(1701),n(8237),n(3579),n(4972),n(1806),function(){var i,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",d=1,p=2,g=4,m=1,v=2,y=1,_=2,w=4,b=8,E=16,T=32,I=64,S=128,C=256,A=512,k=30,R="...",O=800,x=16,N=1,D=2,P=3,L=1/0,M=9007199254740991,U=17976931348623157e292,F=NaN,V=4294967295,j=V-1,$=V>>>1,B=[["ary",S],["bind",y],["bindKey",_],["curry",b],["curryRight",E],["flip",A],["partial",T],["partialRight",I],["rearg",C]],z="[object Arguments]",q="[object Array]",H="[object AsyncFunction]",K="[object Boolean]",W="[object Date]",G="[object DOMException]",Q="[object Error]",X="[object Function]",Y="[object GeneratorFunction]",J="[object Map]",Z="[object Number]",tt="[object Null]",et="[object Object]",nt="[object Promise]",rt="[object Proxy]",it="[object RegExp]",st="[object Set]",ot="[object String]",at="[object Symbol]",ut="[object Undefined]",ct="[object WeakMap]",lt="[object WeakSet]",ht="[object ArrayBuffer]",ft="[object DataView]",dt="[object Float32Array]",pt="[object Float64Array]",gt="[object Int8Array]",mt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",bt="[object Uint32Array]",Et=/\b__p \+= '';/g,Tt=/\b(__p \+=) '' \+/g,It=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,At=RegExp(St.source),kt=RegExp(Ct.source),Rt=/<%-([\s\S]+?)%>/g,Ot=/<%([\s\S]+?)%>/g,xt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dt=/^\w*$/,Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Lt.source),Ut=/^\s+/,Ft=/\s/,Vt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,jt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/[()=,{}\[\]\/\s]/,qt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kt=/\w*$/,Wt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Xt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee="\\ud800-\\udfff",ne="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ie="\\u20d0-\\u20ff",se=ne+re+ie,oe="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",he=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fe="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",pe=ue+ce+le+he,ge="['’]",me="["+ee+"]",ve="["+pe+"]",ye="["+se+"]",_e="\\d+",we="["+oe+"]",be="["+ae+"]",Ee="[^"+ee+pe+_e+oe+ae+fe+"]",Te="\\ud83c[\\udffb-\\udfff]",Ie="(?:"+ye+"|"+Te+")",Se="[^"+ee+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="["+fe+"]",Re="\\u200d",Oe="(?:"+be+"|"+Ee+")",xe="(?:"+ke+"|"+Ee+")",Ne="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",De="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Pe=Ie+"?",Le="["+de+"]?",Me="(?:"+Re+"(?:"+[Se,Ce,Ae].join("|")+")"+Le+Pe+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ve=Le+Pe+Me,je="(?:"+[we,Ce,Ae].join("|")+")"+Ve,$e="(?:"+[Se+ye+"?",ye,Ce,Ae,me].join("|")+")",Be=RegExp(ge,"g"),ze=RegExp(ye,"g"),qe=RegExp(Te+"(?="+Te+")|"+$e+Ve,"g"),He=RegExp([ke+"?"+be+"+"+Ne+"(?="+[ve,ke,"$"].join("|")+")",xe+"+"+De+"(?="+[ve,ke+Oe,"$"].join("|")+")",ke+"?"+Oe+"+"+Ne,ke+"+"+De,Fe,Ue,_e,je].join("|"),"g"),Ke=RegExp("["+Re+ee+se+de+"]"),We=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ge=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qe=-1,Xe={};Xe[dt]=Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=!0,Xe[z]=Xe[q]=Xe[ht]=Xe[K]=Xe[ft]=Xe[W]=Xe[Q]=Xe[X]=Xe[J]=Xe[Z]=Xe[et]=Xe[it]=Xe[st]=Xe[ot]=Xe[ct]=!1;var Ye={};Ye[z]=Ye[q]=Ye[ht]=Ye[ft]=Ye[K]=Ye[W]=Ye[dt]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[J]=Ye[Z]=Ye[et]=Ye[it]=Ye[st]=Ye[ot]=Ye[at]=Ye[yt]=Ye[_t]=Ye[wt]=Ye[bt]=!0,Ye[Q]=Ye[X]=Ye[ct]=!1;var Je={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},en={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,sn="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,on="object"==typeof self&&self&&self.Object===Object&&self,an=sn||on||Function("return this")(),un=e&&!e.nodeType&&e,cn=un&&t&&!t.nodeType&&t,ln=cn&&cn.exports===un,hn=ln&&sn.process,fn=function(){try{var t=cn&&cn.require&&cn.require("util").types;return t||hn&&hn.binding&&hn.binding("util")}catch(e){}}(),dn=fn&&fn.isArrayBuffer,pn=fn&&fn.isDate,gn=fn&&fn.isMap,mn=fn&&fn.isRegExp,vn=fn&&fn.isSet,yn=fn&&fn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,s=null==t?0:t.length;while(++i<s){var o=t[i];e(r,o,n(o),t)}return r}function bn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function En(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function Tn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function In(t,e){var n=-1,r=null==t?0:t.length,i=0,s=[];while(++n<r){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function Cn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function An(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function kn(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Rn(t,e,n,r){var i=-1,s=null==t?0:t.length;r&&s&&(n=t[++i]);while(++i<s)n=e(n,t[i],i,t);return n}function On(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function xn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Nn=$n("length");function Dn(t){return t.split("")}function Pn(t){return t.match(Bt)||[]}function Ln(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,s=n+(r?1:-1);while(r?s--:++s<i)if(e(t[s],s,t))return s;return-1}function Un(t,e,n){return e===e?dr(t,e,n):Mn(t,Vn,n)}function Fn(t,e,n,r){var i=n-1,s=t.length;while(++i<s)if(r(t[i],e))return i;return-1}function Vn(t){return t!==t}function jn(t,e){var n=null==t?0:t.length;return n?Hn(t,e)/n:F}function $n(t){return function(e){return null==e?i:e[t]}}function Bn(t){return function(e){return null==t?i:t[e]}}function zn(t,e,n,r,i){return i(t,(function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)})),n}function qn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Hn(t,e){var n,r=-1,s=t.length;while(++r<s){var o=e(t[r]);o!==i&&(n=n===i?o:n+o)}return n}function Kn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Wn(t,e){return An(e,(function(e){return[e,t[e]]}))}function Gn(t){return t?t.slice(0,vr(t)+1).replace(Ut,""):t}function Qn(t){return function(e){return t(e)}}function Xn(t,e){return An(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Jn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function Zn(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var er=Bn(Je),nr=Bn(Ze);function rr(t){return"\\"+en[t]}function ir(t,e){return null==t?i:t[e]}function sr(t){return Ke.test(t)}function or(t){return We.test(t)}function ar(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function cr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n];o!==e&&o!==f||(t[n]=f,s[i++]=n)}return s}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function pr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return sr(t)?_r(t):Nn(t)}function mr(t){return sr(t)?wr(t):Dn(t)}function vr(t){var e=t.length;while(e--&&Ft.test(t.charAt(e)));return e}var yr=Bn(tn);function _r(t){var e=qe.lastIndex=0;while(qe.test(t))++e;return e}function wr(t){return t.match(qe)||[]}function br(t){return t.match(He)||[]}var Er=function t(e){e=null==e?an:Tr.defaults(an.Object(),e,Tr.pick(an,Ge));var n=e.Array,r=e.Date,Ft=e.Error,Bt=e.Function,ee=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,se=e.TypeError,oe=n.prototype,ae=Bt.prototype,ue=ne.prototype,ce=e["__core-js_shared__"],le=ae.toString,he=ue.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ue.toString,ge=le.call(ne),me=an._,ve=re("^"+le.call(he).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=ln?e.Buffer:i,_e=e.Symbol,we=e.Uint8Array,be=ye?ye.allocUnsafe:i,Ee=cr(ne.getPrototypeOf,ne),Te=ne.create,Ie=ue.propertyIsEnumerable,Se=oe.splice,Ce=_e?_e.isConcatSpreadable:i,Ae=_e?_e.iterator:i,ke=_e?_e.toStringTag:i,Re=function(){try{var t=Wo(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Oe=e.clearTimeout!==an.clearTimeout&&e.clearTimeout,xe=r&&r.now!==an.Date.now&&r.now,Ne=e.setTimeout!==an.setTimeout&&e.setTimeout,De=ee.ceil,Pe=ee.floor,Le=ne.getOwnPropertySymbols,Me=ye?ye.isBuffer:i,Ue=e.isFinite,Fe=oe.join,Ve=cr(ne.keys,ne),je=ee.max,$e=ee.min,qe=r.now,He=e.parseInt,Ke=ee.random,We=oe.reverse,Je=Wo(e,"DataView"),Ze=Wo(e,"Map"),tn=Wo(e,"Promise"),en=Wo(e,"Set"),sn=Wo(e,"WeakMap"),on=Wo(ne,"create"),un=sn&&new sn,cn={},hn=Na(Je),fn=Na(Ze),Nn=Na(tn),Dn=Na(en),Bn=Na(sn),dr=_e?_e.prototype:i,_r=dr?dr.valueOf:i,wr=dr?dr.toString:i;function Er(t){if(Sl(t)&&!ul(t)&&!(t instanceof Ar)){if(t instanceof Cr)return t;if(he.call(t,"__wrapped__"))return Pa(t)}return new Cr(t)}var Ir=function(){function t(){}return function(e){if(!Il(e))return{};if(Te)return Te(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Sr(){}function Cr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function Ar(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function kr(){var t=new Ar(this.__wrapped__);return t.__actions__=ro(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ro(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ro(this.__views__),t}function Rr(){if(this.__filtered__){var t=new Ar(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Or(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,s=Jo(0,i,this.__views__),o=s.start,a=s.end,u=a-o,c=r?a:o-1,l=this.__iteratees__,h=l.length,f=0,d=$e(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Fs(t,this.__actions__);var p=[];t:while(u--&&f<d){c+=e;var g=-1,m=t[c];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==D)m=w;else if(!w){if(_==N)continue t;break t}}p[f++]=m}return p}function xr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Nr(){this.__data__=on?on(null):{},this.size=0}function Dr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Pr(t){var e=this.__data__;if(on){var n=e[t];return n===l?i:n}return he.call(e,t)?e[t]:i}function Lr(t){var e=this.__data__;return on?e[t]!==i:he.call(e,t)}function Mr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=on&&e===i?l:e,this}function Ur(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Fr(){this.__data__=[],this.size=0}function Vr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function jr(t){var e=this.__data__,n=li(e,t);return n<0?i:e[n][1]}function $r(t){return li(this.__data__,t)>-1}function Br(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function qr(){this.size=0,this.__data__={hash:new xr,map:new(Ze||Ur),string:new xr}}function Hr(t){var e=Ho(this,t)["delete"](t);return this.size-=e?1:0,e}function Kr(t){return Ho(this,t).get(t)}function Wr(t){return Ho(this,t).has(t)}function Gr(t,e){var n=Ho(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Qr(t){var e=-1,n=null==t?0:t.length;this.__data__=new zr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,l),this}function Yr(t){return this.__data__.has(t)}function Jr(t){var e=this.__data__=new Ur(t);this.size=e.size}function Zr(){this.__data__=new Ur,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Ze||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=ul(t),r=!n&&al(t),i=!n&&!r&&dl(t),s=!n&&!r&&!i&&jl(t),o=n||r||i||s,a=o?Kn(t.length,ie):[],u=a.length;for(var c in t)!e&&!he.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||oa(c,u))||a.push(c);return a}function si(t){var e=t.length;return e?t[vs(0,e-1)]:i}function oi(t,e){return Ra(ro(t),mi(e,0,t.length))}function ai(t){return Ra(ro(t))}function ui(t,e,n){(n!==i&&!il(t[e],n)||n===i&&!(e in t))&&pi(t,e,n)}function ci(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==i||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,s){e(r,t,n(t),s)})),r}function fi(t,e){return t&&io(e,Eh(e),t)}function di(t,e){return t&&io(e,Th(e),t)}function pi(t,e,n){"__proto__"==e&&Re?Re(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,s=e.length,o=n(s),a=null==t;while(++r<s)o[r]=a?i:mh(t,e[r]);return o}function mi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function vi(t,e,n,r,s,o){var a,u=e&d,c=e&p,l=e&g;if(n&&(a=s?n(t,r,s,o):n(t)),a!==i)return a;if(!Il(t))return t;var h=ul(t);if(h){if(a=ea(t),!u)return ro(t,a)}else{var f=Yo(t),m=f==X||f==Y;if(dl(t))return Ws(t,u);if(f==et||f==z||m&&!s){if(a=c||m?{}:na(t),!u)return c?oo(t,di(a,t)):so(t,fi(a,t))}else{if(!Ye[f])return s?t:{};a=ra(t,f,u)}}o||(o=new Jr);var v=o.get(t);if(v)return v;o.set(t,a),Ul(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,o))})):Cl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,o))}));var y=l?c?jo:Vo:c?Th:Eh,_=h?i:y(t);return bn(_||t,(function(r,i){_&&(i=r,r=t[i]),ci(a,i,vi(r,e,n,i,t,o))})),a}function yi(t){var e=Eh(t);return function(n){return _i(n,t,e)}}function _i(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var s=n[r],o=e[s],a=t[s];if(a===i&&!(s in t)||!o(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new se(u);return Sa((function(){t.apply(i,n)}),e)}function bi(t,e,n,r){var i=-1,s=Sn,a=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=An(e,Qn(n))),r?(s=Cn,a=!1):e.length>=o&&(s=Yn,a=!1,e=new Qr(e));t:while(++i<u){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;c.push(h)}else s(e,f,r)||c.push(h)}return c}Er.templateSettings={escape:Rt,evaluate:Ot,interpolate:xt,variable:"",imports:{_:Er}},Er.prototype=Sr.prototype,Er.prototype.constructor=Er,Cr.prototype=Ir(Sr.prototype),Cr.prototype.constructor=Cr,Ar.prototype=Ir(Sr.prototype),Ar.prototype.constructor=Ar,xr.prototype.clear=Nr,xr.prototype["delete"]=Dr,xr.prototype.get=Pr,xr.prototype.has=Lr,xr.prototype.set=Mr,Ur.prototype.clear=Fr,Ur.prototype["delete"]=Vr,Ur.prototype.get=jr,Ur.prototype.has=$r,Ur.prototype.set=Br,zr.prototype.clear=qr,zr.prototype["delete"]=Hr,zr.prototype.get=Kr,zr.prototype.has=Wr,zr.prototype.set=Gr,Qr.prototype.add=Qr.prototype.push=Xr,Qr.prototype.has=Yr,Jr.prototype.clear=Zr,Jr.prototype["delete"]=ti,Jr.prototype.get=ei,Jr.prototype.has=ni,Jr.prototype.set=ri;var Ei=co(xi),Ti=co(Ni,!0);function Ii(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Si(t,e,n){var r=-1,s=t.length;while(++r<s){var o=t[r],a=e(o);if(null!=a&&(u===i?a===a&&!Vl(a):n(a,u)))var u=a,c=o}return c}function Ci(t,e,n,r){var s=t.length;n=Gl(n),n<0&&(n=-n>s?0:s+n),r=r===i||r>s?s:Gl(r),r<0&&(r+=s),r=n>r?0:Ql(r);while(n<r)t[n++]=e;return t}function Ai(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function ki(t,e,n,r,i){var s=-1,o=t.length;n||(n=sa),i||(i=[]);while(++s<o){var a=t[s];e>0&&n(a)?e>1?ki(a,e-1,n,r,i):kn(i,a):r||(i[i.length]=a)}return i}var Ri=lo(),Oi=lo(!0);function xi(t,e){return t&&Ri(t,e,Eh)}function Ni(t,e){return t&&Oi(t,e,Eh)}function Di(t,e){return In(e,(function(e){return bl(t[e])}))}function Pi(t,e){e=zs(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[xa(e[n++])];return n&&n==r?t:i}function Li(t,e,n){var r=e(t);return ul(t)?r:kn(r,n(t))}function Mi(t){return null==t?t===i?ut:tt:ke&&ke in ne(t)?Go(t):_a(t)}function Ui(t,e){return t>e}function Fi(t,e){return null!=t&&he.call(t,e)}function Vi(t,e){return null!=t&&e in ne(t)}function ji(t,e,n){return t>=$e(e,n)&&t<je(e,n)}function $i(t,e,r){var s=r?Cn:Sn,o=t[0].length,a=t.length,u=a,c=n(a),l=1/0,h=[];while(u--){var f=t[u];u&&e&&(f=An(f,Qn(e))),l=$e(f.length,l),c[u]=!r&&(e||o>=120&&f.length>=120)?new Qr(u&&f):i}f=t[0];var d=-1,p=c[0];t:while(++d<o&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):s(h,m,r))){u=a;while(--u){var v=c[u];if(!(v?Yn(v,m):s(t[u],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function Bi(t,e,n,r){return xi(t,(function(t,i,s){e(r,n(t),i,s)})),r}function zi(t,e,n){e=zs(e,t),t=ba(t,e);var r=null==t?t:t[xa(su(e))];return null==r?i:_n(r,t,n)}function qi(t){return Sl(t)&&Mi(t)==z}function Hi(t){return Sl(t)&&Mi(t)==ht}function Ki(t){return Sl(t)&&Mi(t)==W}function Wi(t,e,n,r,i){return t===e||(null==t||null==e||!Sl(t)&&!Sl(e)?t!==t&&e!==e:Gi(t,e,n,r,Wi,i))}function Gi(t,e,n,r,i,s){var o=ul(t),a=ul(e),u=o?q:Yo(t),c=a?q:Yo(e);u=u==z?et:u,c=c==z?et:c;var l=u==et,h=c==et,f=u==c;if(f&&dl(t)){if(!dl(e))return!1;o=!0,l=!1}if(f&&!l)return s||(s=new Jr),o||jl(t)?Lo(t,e,n,r,i,s):Mo(t,e,u,n,r,i,s);if(!(n&m)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,v=p?e.value():e;return s||(s=new Jr),i(g,v,n,r,s)}}return!!f&&(s||(s=new Jr),Uo(t,e,n,r,i,s))}function Qi(t){return Sl(t)&&Yo(t)==J}function Xi(t,e,n,r){var s=n.length,o=s,a=!r;if(null==t)return!o;t=ne(t);while(s--){var u=n[s];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++s<o){u=n[s];var c=u[0],l=t[c],h=u[1];if(a&&u[2]){if(l===i&&!(c in t))return!1}else{var f=new Jr;if(r)var d=r(l,h,c,t,e,f);if(!(d===i?Wi(h,l,m|v,r,f):d))return!1}}return!0}function Yi(t){if(!Il(t)||ha(t))return!1;var e=bl(t)?ve:Qt;return e.test(Na(t))}function Ji(t){return Sl(t)&&Mi(t)==it}function Zi(t){return Sl(t)&&Yo(t)==st}function ts(t){return Sl(t)&&Tl(t.length)&&!!Xe[Mi(t)]}function es(t){return"function"==typeof t?t:null==t?xf:"object"==typeof t?ul(t)?as(t[0],t[1]):os(t):qf(t)}function ns(t){if(!da(t))return Ve(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function rs(t){if(!Il(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function is(t,e){return t<e}function ss(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,s){i[++r]=e(t,n,s)})),i}function os(t){var e=Ko(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function as(t,e){return ua(t)&&pa(e)?ga(xa(t),e):function(n){var r=mh(n,t);return r===i&&r===e?yh(n,t):Wi(e,r,m|v)}}function us(t,e,n,r,s){t!==e&&Ri(e,(function(o,a){if(s||(s=new Jr),Il(o))cs(t,e,a,n,us,r,s);else{var u=r?r(Ta(t,a),o,a+"",t,e,s):i;u===i&&(u=o),ui(t,a,u)}}),Th)}function cs(t,e,n,r,s,o,a){var u=Ta(t,n),c=Ta(e,n),l=a.get(c);if(l)ui(t,n,l);else{var h=o?o(u,c,n+"",t,e,a):i,f=h===i;if(f){var d=ul(c),p=!d&&dl(c),g=!d&&!p&&jl(c);h=c,d||p||g?ul(u)?h=u:hl(u)?h=ro(u):p?(f=!1,h=Ws(c,!0)):g?(f=!1,h=Js(c,!0)):h=[]:Pl(c)||al(c)?(h=u,al(u)?h=Yl(u):Il(u)&&!bl(u)||(h=na(c))):f=!1}f&&(a.set(c,h),s(h,c,r,o,a),a["delete"](c)),ui(t,n,h)}}function ls(t,e){var n=t.length;if(n)return e+=e<0?n:0,oa(e,n)?t[e]:i}function hs(t,e,n){e=e.length?An(e,(function(t){return ul(t)?function(e){return Pi(e,1===t.length?t[0]:t)}:t})):[xf];var r=-1;e=An(e,Qn(qo()));var i=ss(t,(function(t,n,i){var s=An(e,(function(e){return e(t)}));return{criteria:s,index:++r,value:t}}));return qn(i,(function(t,e){return to(t,e,n)}))}function fs(t,e){return ds(t,e,(function(e,n){return yh(t,n)}))}function ds(t,e,n){var r=-1,i=e.length,s={};while(++r<i){var o=e[r],a=Pi(t,o);n(a,o)&&Ts(s,zs(o,t),a)}return s}function ps(t){return function(e){return Pi(e,t)}}function gs(t,e,n,r){var i=r?Fn:Un,s=-1,o=e.length,a=t;t===e&&(e=ro(e)),n&&(a=An(t,Qn(n)));while(++s<o){var u=0,c=e[s],l=n?n(c):c;while((u=i(a,l,u,r))>-1)a!==t&&Se.call(a,u,1),Se.call(t,u,1)}return t}function ms(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==s){var s=i;oa(i)?Se.call(t,i,1):Ls(t,i)}}return t}function vs(t,e){return t+Pe(Ke()*(e-t+1))}function ys(t,e,r,i){var s=-1,o=je(De((e-t)/(r||1)),0),a=n(o);while(o--)a[i?o:++s]=t,t+=r;return a}function _s(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=Pe(e/2),e&&(t+=t)}while(e);return n}function ws(t,e){return Ca(wa(t,e,xf),t+"")}function bs(t){return si($h(t))}function Es(t,e){var n=$h(t);return Ra(n,mi(e,0,n.length))}function Ts(t,e,n,r){if(!Il(t))return t;e=zs(e,t);var s=-1,o=e.length,a=o-1,u=t;while(null!=u&&++s<o){var c=xa(e[s]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(s!=a){var h=u[c];l=r?r(h,c,u):i,l===i&&(l=Il(h)?h:oa(e[s+1])?[]:{})}ci(u,c,l),u=u[c]}return t}var Is=un?function(t,e){return un.set(t,e),t}:xf,Ss=Re?function(t,e){return Re(t,"toString",{configurable:!0,enumerable:!1,value:Af(e),writable:!0})}:xf;function Cs(t){return Ra($h(t))}function As(t,e,r){var i=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;var o=n(s);while(++i<s)o[i]=t[i+e];return o}function ks(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Rs(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=$){while(r<i){var s=r+i>>>1,o=t[s];null!==o&&!Vl(o)&&(n?o<=e:o<e)?r=s+1:i=s}return i}return Os(t,e,xf,n)}function Os(t,e,n,r){var s=0,o=null==t?0:t.length;if(0===o)return 0;e=n(e);var a=e!==e,u=null===e,c=Vl(e),l=e===i;while(s<o){var h=Pe((s+o)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=Vl(f);if(a)var v=r||g;else v=l?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?s=h+1:o=h}return $e(o,j)}function xs(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n],a=e?e(o):o;if(!n||!il(a,u)){var u=a;s[i++]=0===o?0:o}}return s}function Ns(t){return"number"==typeof t?t:Vl(t)?F:+t}function Ds(t){if("string"==typeof t)return t;if(ul(t))return An(t,Ds)+"";if(Vl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ps(t,e,n){var r=-1,i=Sn,s=t.length,a=!0,u=[],c=u;if(n)a=!1,i=Cn;else if(s>=o){var l=e?null:Ro(t);if(l)return hr(l);a=!1,i=Yn,c=new Qr}else c=e?[]:u;t:while(++r<s){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=c.length;while(d--)if(c[d]===f)continue t;e&&c.push(f),u.push(h)}else i(c,f,n)||(c!==u&&c.push(f),u.push(h))}return u}function Ls(t,e){return e=zs(e,t),t=ba(t,e),null==t||delete t[xa(su(e))]}function Ms(t,e,n,r){return Ts(t,e,n(Pi(t,e)),r)}function Us(t,e,n,r){var i=t.length,s=r?i:-1;while((r?s--:++s<i)&&e(t[s],s,t));return n?As(t,r?0:s,r?s+1:i):As(t,r?s+1:0,r?i:s)}function Fs(t,e){var n=t;return n instanceof Ar&&(n=n.value()),Rn(e,(function(t,e){return e.func.apply(e.thisArg,kn([t],e.args))}),n)}function Vs(t,e,r){var i=t.length;if(i<2)return i?Ps(t[0]):[];var s=-1,o=n(i);while(++s<i){var a=t[s],u=-1;while(++u<i)u!=s&&(o[s]=bi(o[s]||a,t[u],e,r))}return Ps(ki(o,1),e,r)}function js(t,e,n){var r=-1,s=t.length,o=e.length,a={};while(++r<s){var u=r<o?e[r]:i;n(a,t[r],u)}return a}function $s(t){return hl(t)?t:[]}function Bs(t){return"function"==typeof t?t:xf}function zs(t,e){return ul(t)?t:ua(t,e)?[t]:Oa(Zl(t))}var qs=ws;function Hs(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:As(t,e,n)}var Ks=Oe||function(t){return an.clearTimeout(t)};function Ws(t,e){if(e)return t.slice();var n=t.length,r=be?be(n):new t.constructor(n);return t.copy(r),r}function Gs(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Qs(t,e){var n=e?Gs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Xs(t){var e=new t.constructor(t.source,Kt.exec(t));return e.lastIndex=t.lastIndex,e}function Ys(t){return _r?ne(_r.call(t)):{}}function Js(t,e){var n=e?Gs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Zs(t,e){if(t!==e){var n=t!==i,r=null===t,s=t===t,o=Vl(t),a=e!==i,u=null===e,c=e===e,l=Vl(e);if(!u&&!l&&!o&&t>e||o&&a&&c&&!u&&!l||r&&a&&c||!n&&c||!s)return 1;if(!r&&!o&&!l&&t<e||l&&n&&s&&!r&&!o||u&&n&&s||!a&&s||!c)return-1}return 0}function to(t,e,n){var r=-1,i=t.criteria,s=e.criteria,o=i.length,a=n.length;while(++r<o){var u=Zs(i[r],s[r]);if(u){if(r>=a)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}function eo(t,e,r,i){var s=-1,o=t.length,a=r.length,u=-1,c=e.length,l=je(o-a,0),h=n(c+l),f=!i;while(++u<c)h[u]=e[u];while(++s<a)(f||s<o)&&(h[r[s]]=t[s]);while(l--)h[u++]=t[s++];return h}function no(t,e,r,i){var s=-1,o=t.length,a=-1,u=r.length,c=-1,l=e.length,h=je(o-u,0),f=n(h+l),d=!i;while(++s<h)f[s]=t[s];var p=s;while(++c<l)f[p+c]=e[c];while(++a<u)(d||s<o)&&(f[p+r[a]]=t[s++]);return f}function ro(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function io(t,e,n,r){var s=!n;n||(n={});var o=-1,a=e.length;while(++o<a){var u=e[o],c=r?r(n[u],t[u],u,n,t):i;c===i&&(c=t[u]),s?pi(n,u,c):ci(n,u,c)}return n}function so(t,e){return io(t,Qo(t),e)}function oo(t,e){return io(t,Xo(t),e)}function ao(t,e){return function(n,r){var i=ul(n)?wn:hi,s=e?e():{};return i(n,t,qo(r,2),s)}}function uo(t){return ws((function(e,n){var r=-1,s=n.length,o=s>1?n[s-1]:i,a=s>2?n[2]:i;o=t.length>3&&"function"==typeof o?(s--,o):i,a&&aa(n[0],n[1],a)&&(o=s<3?i:o,s=1),e=ne(e);while(++r<s){var u=n[r];u&&t(e,u,r,o)}return e}))}function co(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,s=e?i:-1,o=ne(n);while(e?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}function lo(t){return function(e,n,r){var i=-1,s=ne(e),o=r(e),a=o.length;while(a--){var u=o[t?a:++i];if(!1===n(s[u],u,s))break}return e}}function ho(t,e,n){var r=e&y,i=go(t);function s(){var e=this&&this!==an&&this instanceof s?i:t;return e.apply(r?n:this,arguments)}return s}function fo(t){return function(e){e=Zl(e);var n=sr(e)?mr(e):i,r=n?n[0]:e.charAt(0),s=n?Hs(n,1).join(""):e.slice(1);return r[t]()+s}}function po(t){return function(e){return Rn(Ef(Gh(e).replace(Be,"")),t,"")}}function go(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Ir(t.prototype),r=t.apply(n,e);return Il(r)?r:n}}function mo(t,e,r){var s=go(t);function o(){var a=arguments.length,u=n(a),c=a,l=zo(o);while(c--)u[c]=arguments[c];var h=a<3&&u[0]!==l&&u[a-1]!==l?[]:lr(u,l);if(a-=h.length,a<r)return Ao(t,e,_o,o.placeholder,i,u,h,i,i,r-a);var f=this&&this!==an&&this instanceof o?s:t;return _n(f,this,u)}return o}function vo(t){return function(e,n,r){var s=ne(e);if(!ll(e)){var o=qo(n,3);e=Eh(e),n=function(t){return o(s[t],t,s)}}var a=t(e,n,r);return a>-1?s[o?e[a]:a]:i}}function yo(t){return Fo((function(e){var n=e.length,r=n,s=Cr.prototype.thru;t&&e.reverse();while(r--){var o=e[r];if("function"!=typeof o)throw new se(u);if(s&&!a&&"wrapper"==Bo(o))var a=new Cr([],!0)}r=a?r:n;while(++r<n){o=e[r];var c=Bo(o),l="wrapper"==c?$o(o):i;a=l&&la(l[0])&&l[1]==(S|b|T|C)&&!l[4].length&&1==l[9]?a[Bo(l[0])].apply(a,l[3]):1==o.length&&la(o)?a[c]():a.thru(o)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,s=n?e[i].apply(this,t):r;while(++i<n)s=e[i].call(this,s);return s}}))}function _o(t,e,r,s,o,a,u,c,l,h){var f=e&S,d=e&y,p=e&_,g=e&(b|E),m=e&A,v=p?i:go(t);function w(){var i=arguments.length,y=n(i),_=i;while(_--)y[_]=arguments[_];if(g)var b=zo(w),E=tr(y,b);if(s&&(y=eo(y,s,o,g)),a&&(y=no(y,a,u,g)),i-=E,g&&i<h){var T=lr(y,b);return Ao(t,e,_o,w.placeholder,r,y,T,c,l,h-i)}var I=d?r:this,S=p?I[t]:t;return i=y.length,c?y=Ea(y,c):m&&i>1&&y.reverse(),f&&l<i&&(y.length=l),this&&this!==an&&this instanceof w&&(S=v||go(S)),S.apply(I,y)}return w}function wo(t,e){return function(n,r){return Bi(n,t,e(r),{})}}function bo(t,e){return function(n,r){var s;if(n===i&&r===i)return e;if(n!==i&&(s=n),r!==i){if(s===i)return r;"string"==typeof n||"string"==typeof r?(n=Ds(n),r=Ds(r)):(n=Ns(n),r=Ns(r)),s=t(n,r)}return s}}function Eo(t){return Fo((function(e){return e=An(e,Qn(qo())),ws((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function To(t,e){e=e===i?" ":Ds(e);var n=e.length;if(n<2)return n?_s(e,t):e;var r=_s(e,De(t/gr(e)));return sr(e)?Hs(mr(r),0,t).join(""):r.slice(0,t)}function Io(t,e,r,i){var s=e&y,o=go(t);function a(){var e=-1,u=arguments.length,c=-1,l=i.length,h=n(l+u),f=this&&this!==an&&this instanceof a?o:t;while(++c<l)h[c]=i[c];while(u--)h[c++]=arguments[++e];return _n(f,s?r:this,h)}return a}function So(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=i),e=Wl(e),n===i?(n=e,e=0):n=Wl(n),r=r===i?e<n?1:-1:Wl(r),ys(e,n,r,t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function Ao(t,e,n,r,s,o,a,u,c,l){var h=e&b,f=h?a:i,d=h?i:a,p=h?o:i,g=h?i:o;e|=h?T:I,e&=~(h?I:T),e&w||(e&=~(y|_));var m=[t,e,s,p,f,g,d,u,c,l],v=n.apply(i,m);return la(t)&&Ia(v,m),v.placeholder=r,Aa(v,t,e)}function ko(t){var e=ee[t];return function(t,n){if(t=Xl(t),n=null==n?0:$e(Gl(n),292),n&&Ue(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Ro=en&&1/hr(new en([,-0]))[1]==L?function(t){return new en(t)}:Vf;function Oo(t){return function(e){var n=Yo(e);return n==J?ur(e):n==st?fr(e):Wn(e,t(e))}}function xo(t,e,n,r,s,o,a,c){var l=e&_;if(!l&&"function"!=typeof t)throw new se(u);var h=r?r.length:0;if(h||(e&=~(T|I),r=s=i),a=a===i?a:je(Gl(a),0),c=c===i?c:Gl(c),h-=s?s.length:0,e&I){var f=r,d=s;r=s=i}var p=l?i:$o(t),g=[t,e,n,r,s,f,d,o,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],s=g[4],c=g[9]=g[9]===i?l?0:t.length:je(g[9]-h,0),!c&&e&(b|E)&&(e&=~(b|E)),e&&e!=y)m=e==b||e==E?mo(t,e,c):e!=T&&e!=(y|T)||s.length?_o.apply(i,g):Io(t,e,n,r);else var m=ho(t,e,n);var v=p?Is:Ia;return Aa(v(m,g),t,e)}function No(t,e,n,r){return t===i||il(t,ue[n])&&!he.call(r,n)?e:t}function Do(t,e,n,r,s,o){return Il(t)&&Il(e)&&(o.set(e,t),us(t,e,i,Do,o),o["delete"](e)),t}function Po(t){return Pl(t)?i:t}function Lo(t,e,n,r,s,o){var a=n&m,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=o.get(t),h=o.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&v?new Qr:i;o.set(t,e),o.set(e,t);while(++f<u){var g=t[f],y=e[f];if(r)var _=a?r(y,g,f,e,t,o):r(g,y,f,t,e,o);if(_!==i){if(_)continue;d=!1;break}if(p){if(!xn(e,(function(t,e){if(!Yn(p,e)&&(g===t||s(g,t,n,r,o)))return p.push(e)}))){d=!1;break}}else if(g!==y&&!s(g,y,n,r,o)){d=!1;break}}return o["delete"](t),o["delete"](e),d}function Mo(t,e,n,r,i,s,o){switch(n){case ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ht:return!(t.byteLength!=e.byteLength||!s(new we(t),new we(e)));case K:case W:case Z:return il(+t,+e);case Q:return t.name==e.name&&t.message==e.message;case it:case ot:return t==e+"";case J:var a=ur;case st:var u=r&m;if(a||(a=hr),t.size!=e.size&&!u)return!1;var c=o.get(t);if(c)return c==e;r|=v,o.set(t,e);var l=Lo(a(t),a(e),r,i,s,o);return o["delete"](t),l;case at:if(_r)return _r.call(t)==_r.call(e)}return!1}function Uo(t,e,n,r,s,o){var a=n&m,u=Vo(t),c=u.length,l=Vo(e),h=l.length;if(c!=h&&!a)return!1;var f=c;while(f--){var d=u[f];if(!(a?d in e:he.call(e,d)))return!1}var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var v=!0;o.set(t,e),o.set(e,t);var y=a;while(++f<c){d=u[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,o):r(_,w,d,t,e,o);if(!(b===i?_===w||s(_,w,n,r,o):b)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var E=t.constructor,T=e.constructor;E==T||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof T&&T instanceof T||(v=!1)}return o["delete"](t),o["delete"](e),v}function Fo(t){return Ca(wa(t,i,Ga),t+"")}function Vo(t){return Li(t,Eh,Qo)}function jo(t){return Li(t,Th,Xo)}var $o=un?function(t){return un.get(t)}:Vf;function Bo(t){var e=t.name+"",n=cn[e],r=he.call(cn,e)?n.length:0;while(r--){var i=n[r],s=i.func;if(null==s||s==t)return i.name}return e}function zo(t){var e=he.call(Er,"placeholder")?Er:t;return e.placeholder}function qo(){var t=Er.iteratee||Nf;return t=t===Nf?es:t,arguments.length?t(arguments[0],arguments[1]):t}function Ho(t,e){var n=t.__data__;return ca(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ko(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Wo(t,e){var n=ir(t,e);return Yi(n)?n:i}function Go(t){var e=he.call(t,ke),n=t[ke];try{t[ke]=i;var r=!0}catch(o){}var s=pe.call(t);return r&&(e?t[ke]=n:delete t[ke]),s}var Qo=Le?function(t){return null==t?[]:(t=ne(t),In(Le(t),(function(e){return Ie.call(t,e)})))}:Gf,Xo=Le?function(t){var e=[];while(t)kn(e,Qo(t)),t=Ee(t);return e}:Gf,Yo=Mi;function Jo(t,e,n){var r=-1,i=n.length;while(++r<i){var s=n[r],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=$e(e,t+o);break;case"takeRight":t=je(t,e-o);break}}return{start:t,end:e}}function Zo(t){var e=t.match(jt);return e?e[1].split($t):[]}function ta(t,e,n){e=zs(e,t);var r=-1,i=e.length,s=!1;while(++r<i){var o=xa(e[r]);if(!(s=null!=t&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=null==t?0:t.length,!!i&&Tl(i)&&oa(o,i)&&(ul(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Ir(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ht:return Gs(t);case K:case W:return new r(+t);case ft:return Qs(t,n);case dt:case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:return Js(t,n);case J:return new r;case Z:case ot:return new r(t);case it:return Xs(t);case st:return new r;case at:return Ys(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Vt,"{\n/* [wrapped with "+e+"] */\n")}function sa(t){return ul(t)||al(t)||!!(Ce&&t&&t[Ce])}function oa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Il(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&oa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Vl(t))||(Dt.test(t)||!Nt.test(t)||null!=e&&t in ne(e))}function ca(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=Bo(t),n=Er[e];if("function"!=typeof n||!(e in Ar.prototype))return!1;if(t===n)return!0;var r=$o(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(Je&&Yo(new Je(new ArrayBuffer(1)))!=ft||Ze&&Yo(new Ze)!=J||tn&&Yo(tn.resolve())!=nt||en&&Yo(new en)!=st||sn&&Yo(new sn)!=ct)&&(Yo=function(t){var e=Mi(t),n=e==et?t.constructor:i,r=n?Na(n):"";if(r)switch(r){case hn:return ft;case fn:return J;case Nn:return nt;case Dn:return st;case Bn:return ct}return e});var fa=ce?bl:Qf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function pa(t){return t===t&&!Il(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in ne(n)))}}function ma(t){var e=jc(t,(function(t){return n.size===h&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,s=i<(y|_|S),o=r==S&&n==b||r==S&&n==C&&t[7].length<=e[8]||r==(S|C)&&e[7].length<=e[8]&&n==b;if(!s&&!o)return t;r&y&&(t[2]=e[2],i|=n&y?0:w);var a=e[3];if(a){var u=t[3];t[3]=u?eo(u,a,e[4]):a,t[4]=u?lr(t[3],f):e[4]}return a=e[5],a&&(u=t[5],t[5]=u?no(u,a,e[6]):a,t[6]=u?lr(t[5],f):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:$e(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function _a(t){return pe.call(t)}function wa(t,e,r){return e=je(e===i?t.length-1:e,0),function(){var i=arguments,s=-1,o=je(i.length-e,0),a=n(o);while(++s<o)a[s]=i[e+s];s=-1;var u=n(e+1);while(++s<e)u[s]=i[s];return u[e]=r(a),_n(t,this,u)}}function ba(t,e){return e.length<2?t:Pi(t,As(e,0,-1))}function Ea(t,e){var n=t.length,r=$e(e.length,n),s=ro(t);while(r--){var o=e[r];t[r]=oa(o,n)?s[o]:i}return t}function Ta(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Ia=ka(Is),Sa=Ne||function(t,e){return an.setTimeout(t,e)},Ca=ka(Ss);function Aa(t,e,n){var r=e+"";return Ca(t,ia(r,Da(Zo(r),n)))}function ka(t){var e=0,n=0;return function(){var r=qe(),s=x-(r-n);if(n=r,s>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Ra(t,e){var n=-1,r=t.length,s=r-1;e=e===i?r:e;while(++n<e){var o=vs(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}var Oa=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Pt,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));function xa(t){if("string"==typeof t||Vl(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Na(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Da(t,e){return bn(B,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Pa(t){if(t instanceof Ar)return t.clone();var e=new Cr(t.__wrapped__,t.__chain__);return e.__actions__=ro(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function La(t,e,r){e=(r?aa(t,e,r):e===i)?1:je(Gl(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];var o=0,a=0,u=n(De(s/e));while(o<s)u[a++]=As(t,o,o+=e);return u}function Ma(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var s=t[e];s&&(i[r++]=s)}return i}function Ua(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return kn(ul(r)?ro(r):[r],ki(e,1))}var Fa=ws((function(t,e){return hl(t)?bi(t,ki(e,1,hl,!0)):[]})),Va=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),qo(n,2)):[]})),ja=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,ki(e,1,hl,!0),i,n):[]}));function $a(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),As(t,e<0?0:e,r)):[]}function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),e=r-e,As(t,0,e<0?0:e)):[]}function za(t,e){return t&&t.length?Us(t,qo(e,3),!0,!0):[]}function qa(t,e){return t&&t.length?Us(t,qo(e,3),!0):[]}function Ha(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Ci(t,e,n,r)):[]}function Ka(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Gl(n);return i<0&&(i=je(r+i,0)),Mn(t,qo(e,3),i)}function Wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r-1;return n!==i&&(s=Gl(n),s=n<0?je(r+s,0):$e(s,r-1)),Mn(t,qo(e,3),s,!0)}function Ga(t){var e=null==t?0:t.length;return e?ki(t,1):[]}function Qa(t){var e=null==t?0:t.length;return e?ki(t,L):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Gl(e),ki(t,e)):[]}function Ya(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ja(t){return t&&t.length?t[0]:i}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Gl(n);return i<0&&(i=je(r+i,0)),Un(t,e,i)}function tu(t){var e=null==t?0:t.length;return e?As(t,0,-1):[]}var eu=ws((function(t){var e=An(t,$s);return e.length&&e[0]===t[0]?$i(e):[]})),nu=ws((function(t){var e=su(t),n=An(t,$s);return e===su(n)?e=i:n.pop(),n.length&&n[0]===t[0]?$i(n,qo(e,2)):[]})),ru=ws((function(t){var e=su(t),n=An(t,$s);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?$i(n,i,e):[]}));function iu(t,e){return null==t?"":Fe.call(t,e)}function su(t){var e=null==t?0:t.length;return e?t[e-1]:i}function ou(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r;return n!==i&&(s=Gl(n),s=s<0?je(r+s,0):$e(s,r-1)),e===e?pr(t,e,s):Mn(t,Vn,s,!0)}function au(t,e){return t&&t.length?ls(t,Gl(e)):i}var uu=ws(cu);function cu(t,e){return t&&t.length&&e&&e.length?gs(t,e):t}function lu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,qo(n,2)):t}function hu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,i,n):t}var fu=Fo((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return ms(t,An(e,(function(t){return oa(t,n)?+t:t})).sort(Zs)),r}));function du(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],s=t.length;e=qo(e,3);while(++r<s){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r))}return ms(t,i),n}function pu(t){return null==t?t:We.call(t)}function gu(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Gl(e),n=n===i?r:Gl(n)),As(t,e,n)):[]}function mu(t,e){return Rs(t,e)}function vu(t,e,n){return Os(t,e,qo(n,2))}function yu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e);if(r<n&&il(t[r],e))return r}return-1}function _u(t,e){return Rs(t,e,!0)}function wu(t,e,n){return Os(t,e,qo(n,2),!0)}function bu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Eu(t){return t&&t.length?xs(t):[]}function Tu(t,e){return t&&t.length?xs(t,qo(e,2)):[]}function Iu(t){var e=null==t?0:t.length;return e?As(t,1,e):[]}function Su(t,e,n){return t&&t.length?(e=n||e===i?1:Gl(e),As(t,0,e<0?0:e)):[]}function Cu(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),e=r-e,As(t,e<0?0:e,r)):[]}function Au(t,e){return t&&t.length?Us(t,qo(e,3),!1,!0):[]}function ku(t,e){return t&&t.length?Us(t,qo(e,3)):[]}var Ru=ws((function(t){return Ps(ki(t,1,hl,!0))})),Ou=ws((function(t){var e=su(t);return hl(e)&&(e=i),Ps(ki(t,1,hl,!0),qo(e,2))})),xu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Ps(ki(t,1,hl,!0),i,e)}));function Nu(t){return t&&t.length?Ps(t):[]}function Du(t,e){return t&&t.length?Ps(t,qo(e,2)):[]}function Pu(t,e){return e="function"==typeof e?e:i,t&&t.length?Ps(t,i,e):[]}function Lu(t){if(!t||!t.length)return[];var e=0;return t=In(t,(function(t){if(hl(t))return e=je(t.length,e),!0})),Kn(e,(function(e){return An(t,$n(e))}))}function Mu(t,e){if(!t||!t.length)return[];var n=Lu(t);return null==e?n:An(n,(function(t){return _n(e,i,t)}))}var Uu=ws((function(t,e){return hl(t)?bi(t,e):[]})),Fu=ws((function(t){return Vs(In(t,hl))})),Vu=ws((function(t){var e=su(t);return hl(e)&&(e=i),Vs(In(t,hl),qo(e,2))})),ju=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Vs(In(t,hl),i,e)})),$u=ws(Lu);function Bu(t,e){return js(t||[],e||[],ci)}function zu(t,e){return js(t||[],e||[],Ts)}var qu=ws((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Mu(t,n)}));function Hu(t){var e=Er(t);return e.__chain__=!0,e}function Ku(t,e){return e(t),t}function Wu(t,e){return e(t)}var Gu=Fo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,s=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Ar&&oa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Wu,args:[s],thisArg:i}),new Cr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(s)}));function Qu(){return Hu(this)}function Xu(){return new Cr(this.value(),this.__chain__)}function Yu(){this.__values__===i&&(this.__values__=Kl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Ju(){return this}function Zu(t){var e,n=this;while(n instanceof Sr){var r=Pa(n);r.__index__=0,r.__values__=i,e?s.__wrapped__=r:e=r;var s=r;n=n.__wrapped__}return s.__wrapped__=t,e}function tc(){var t=this.__wrapped__;if(t instanceof Ar){var e=t;return this.__actions__.length&&(e=new Ar(this)),e=e.reverse(),e.__actions__.push({func:Wu,args:[pu],thisArg:i}),new Cr(e,this.__chain__)}return this.thru(pu)}function ec(){return Fs(this.__wrapped__,this.__actions__)}var nc=ao((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function rc(t,e,n){var r=ul(t)?Tn:Ii;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}function ic(t,e){var n=ul(t)?In:Ai;return n(t,qo(e,3))}var sc=vo(Ka),oc=vo(Wa);function ac(t,e){return ki(mc(t,e),1)}function uc(t,e){return ki(mc(t,e),L)}function cc(t,e,n){return n=n===i?1:Gl(n),ki(mc(t,e),n)}function lc(t,e){var n=ul(t)?bn:Ei;return n(t,qo(e,3))}function hc(t,e){var n=ul(t)?En:Ti;return n(t,qo(e,3))}var fc=ao((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function dc(t,e,n,r){t=ll(t)?t:$h(t),n=n&&!r?Gl(n):0;var i=t.length;return n<0&&(n=je(i+n,0)),Fl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pc=ws((function(t,e,r){var i=-1,s="function"==typeof e,o=ll(t)?n(t.length):[];return Ei(t,(function(t){o[++i]=s?_n(e,t,r):zi(t,e,r)})),o})),gc=ao((function(t,e,n){pi(t,n,e)}));function mc(t,e){var n=ul(t)?An:ss;return n(t,qo(e,3))}function vc(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),hs(t,e,n))}var yc=ao((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function _c(t,e,n){var r=ul(t)?Rn:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ei)}function wc(t,e,n){var r=ul(t)?On:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ti)}function bc(t,e){var n=ul(t)?In:Ai;return n(t,$c(qo(e,3)))}function Ec(t){var e=ul(t)?si:bs;return e(t)}function Tc(t,e,n){e=(n?aa(t,e,n):e===i)?1:Gl(e);var r=ul(t)?oi:Es;return r(t,e)}function Ic(t){var e=ul(t)?ai:Cs;return e(t)}function Sc(t){if(null==t)return 0;if(ll(t))return Fl(t)?gr(t):t.length;var e=Yo(t);return e==J||e==st?t.size:ns(t).length}function Cc(t,e,n){var r=ul(t)?xn:ks;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}var Ac=ws((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),hs(t,ki(e,1),[])})),kc=xe||function(){return an.Date.now()};function Rc(t,e){if("function"!=typeof e)throw new se(u);return t=Gl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Oc(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,xo(t,S,i,i,i,i,e)}function xc(t,e){var n;if("function"!=typeof e)throw new se(u);return t=Gl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var Nc=ws((function(t,e,n){var r=y;if(n.length){var i=lr(n,zo(Nc));r|=T}return xo(t,r,e,n,i)})),Dc=ws((function(t,e,n){var r=y|_;if(n.length){var i=lr(n,zo(Dc));r|=T}return xo(e,r,t,n,i)}));function Pc(t,e,n){e=n?i:e;var r=xo(t,b,i,i,i,i,i,e);return r.placeholder=Pc.placeholder,r}function Lc(t,e,n){e=n?i:e;var r=xo(t,E,i,i,i,i,i,e);return r.placeholder=Lc.placeholder,r}function Mc(t,e,n){var r,s,o,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new se(u);function g(e){var n=r,o=s;return r=s=i,h=e,a=t.apply(o,n),a}function m(t){return h=t,c=Sa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?$e(i,o-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=o}function _(){var t=kc();if(y(t))return w(t);c=Sa(_,v(t))}function w(t){return c=i,p&&r?g(t):(r=s=i,a)}function b(){c!==i&&Ks(c),h=0,r=l=s=c=i}function E(){return c===i?a:w(kc())}function T(){var t=kc(),n=y(t);if(r=arguments,s=this,l=t,n){if(c===i)return m(l);if(d)return Ks(c),c=Sa(_,e),g(l)}return c===i&&(c=Sa(_,e)),a}return e=Xl(e)||0,Il(n)&&(f=!!n.leading,d="maxWait"in n,o=d?je(Xl(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),T.cancel=b,T.flush=E,T}var Uc=ws((function(t,e){return wi(t,1,e)})),Fc=ws((function(t,e,n){return wi(t,Xl(e)||0,n)}));function Vc(t){return xo(t,A)}function jc(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(jc.Cache||zr),n}function $c(t){if("function"!=typeof t)throw new se(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Bc(t){return xc(2,t)}jc.Cache=zr;var zc=qs((function(t,e){e=1==e.length&&ul(e[0])?An(e[0],Qn(qo())):An(ki(e,1),Qn(qo()));var n=e.length;return ws((function(r){var i=-1,s=$e(r.length,n);while(++i<s)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),qc=ws((function(t,e){var n=lr(e,zo(qc));return xo(t,T,i,e,n)})),Hc=ws((function(t,e){var n=lr(e,zo(Hc));return xo(t,I,i,e,n)})),Kc=Fo((function(t,e){return xo(t,C,i,i,i,e)}));function Wc(t,e){if("function"!=typeof t)throw new se(u);return e=e===i?e:Gl(e),ws(t,e)}function Gc(t,e){if("function"!=typeof t)throw new se(u);return e=null==e?0:je(Gl(e),0),ws((function(n){var r=n[e],i=Hs(n,0,e);return r&&kn(i,r),_n(t,this,i)}))}function Qc(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new se(u);return Il(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mc(t,e,{leading:r,maxWait:e,trailing:i})}function Xc(t){return Oc(t,1)}function Yc(t,e){return qc(Bs(e),t)}function Jc(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function Zc(t){return vi(t,g)}function tl(t,e){return e="function"==typeof e?e:i,vi(t,g,e)}function el(t){return vi(t,d|g)}function nl(t,e){return e="function"==typeof e?e:i,vi(t,d|g,e)}function rl(t,e){return null==e||_i(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var sl=Co(Ui),ol=Co((function(t,e){return t>=e})),al=qi(function(){return arguments}())?qi:function(t){return Sl(t)&&he.call(t,"callee")&&!Ie.call(t,"callee")},ul=n.isArray,cl=dn?Qn(dn):Hi;function ll(t){return null!=t&&Tl(t.length)&&!bl(t)}function hl(t){return Sl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Sl(t)&&Mi(t)==K}var dl=Me||Qf,pl=pn?Qn(pn):Ki;function gl(t){return Sl(t)&&1===t.nodeType&&!Pl(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||jl(t)||al(t)))return!t.length;var e=Yo(t);if(e==J||e==st)return!t.size;if(da(t))return!ns(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Wi(t,e)}function yl(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Wi(t,e,i,n):!!r}function _l(t){if(!Sl(t))return!1;var e=Mi(t);return e==Q||e==G||"string"==typeof t.message&&"string"==typeof t.name&&!Pl(t)}function wl(t){return"number"==typeof t&&Ue(t)}function bl(t){if(!Il(t))return!1;var e=Mi(t);return e==X||e==Y||e==H||e==rt}function El(t){return"number"==typeof t&&t==Gl(t)}function Tl(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Il(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sl(t){return null!=t&&"object"==typeof t}var Cl=gn?Qn(gn):Qi;function Al(t,e){return t===e||Xi(t,e,Ko(e))}function kl(t,e,n){return n="function"==typeof n?n:i,Xi(t,e,Ko(e),n)}function Rl(t){return Dl(t)&&t!=+t}function Ol(t){if(fa(t))throw new Ft(a);return Yi(t)}function xl(t){return null===t}function Nl(t){return null==t}function Dl(t){return"number"==typeof t||Sl(t)&&Mi(t)==Z}function Pl(t){if(!Sl(t)||Mi(t)!=et)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Ll=mn?Qn(mn):Ji;function Ml(t){return El(t)&&t>=-M&&t<=M}var Ul=vn?Qn(vn):Zi;function Fl(t){return"string"==typeof t||!ul(t)&&Sl(t)&&Mi(t)==ot}function Vl(t){return"symbol"==typeof t||Sl(t)&&Mi(t)==at}var jl=yn?Qn(yn):ts;function $l(t){return t===i}function Bl(t){return Sl(t)&&Yo(t)==ct}function zl(t){return Sl(t)&&Mi(t)==lt}var ql=Co(is),Hl=Co((function(t,e){return t<=e}));function Kl(t){if(!t)return[];if(ll(t))return Fl(t)?mr(t):ro(t);if(Ae&&t[Ae])return ar(t[Ae]());var e=Yo(t),n=e==J?ur:e==st?hr:$h;return n(t)}function Wl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===L||t===-L){var e=t<0?-1:1;return e*U}return t===t?t:0}function Gl(t){var e=Wl(t),n=e%1;return e===e?n?e-n:e:0}function Ql(t){return t?mi(Gl(t),0,V):0}function Xl(t){if("number"==typeof t)return t;if(Vl(t))return F;if(Il(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Il(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Gn(t);var n=Gt.test(t);return n||Xt.test(t)?rn(t.slice(2),n?2:8):Wt.test(t)?F:+t}function Yl(t){return io(t,Th(t))}function Jl(t){return t?mi(Gl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Ds(t)}var th=uo((function(t,e){if(da(e)||ll(e))io(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ci(t,n,e[n])})),eh=uo((function(t,e){io(e,Th(e),t)})),nh=uo((function(t,e,n,r){io(e,Th(e),t,r)})),rh=uo((function(t,e,n,r){io(e,Eh(e),t,r)})),ih=Fo(gi);function sh(t,e){var n=Ir(t);return null==e?n:fi(n,e)}var oh=ws((function(t,e){t=ne(t);var n=-1,r=e.length,s=r>2?e[2]:i;s&&aa(e[0],e[1],s)&&(r=1);while(++n<r){var o=e[n],a=Th(o),u=-1,c=a.length;while(++u<c){var l=a[u],h=t[l];(h===i||il(h,ue[l])&&!he.call(t,l))&&(t[l]=o[l])}}return t})),ah=ws((function(t){return t.push(i,Do),_n(Ah,i,t)}));function uh(t,e){return Ln(t,qo(e,3),xi)}function ch(t,e){return Ln(t,qo(e,3),Ni)}function lh(t,e){return null==t?t:Ri(t,qo(e,3),Th)}function hh(t,e){return null==t?t:Oi(t,qo(e,3),Th)}function fh(t,e){return t&&xi(t,qo(e,3))}function dh(t,e){return t&&Ni(t,qo(e,3))}function ph(t){return null==t?[]:Di(t,Eh(t))}function gh(t){return null==t?[]:Di(t,Th(t))}function mh(t,e,n){var r=null==t?i:Pi(t,e);return r===i?n:r}function vh(t,e){return null!=t&&ta(t,e,Fi)}function yh(t,e){return null!=t&&ta(t,e,Vi)}var _h=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),Af(xf)),wh=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),qo),bh=ws(zi);function Eh(t){return ll(t)?ii(t):ns(t)}function Th(t){return ll(t)?ii(t,!0):rs(t)}function Ih(t,e){var n={};return e=qo(e,3),xi(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Sh(t,e){var n={};return e=qo(e,3),xi(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var Ch=uo((function(t,e,n){us(t,e,n)})),Ah=uo((function(t,e,n,r){us(t,e,n,r)})),kh=Fo((function(t,e){var n={};if(null==t)return n;var r=!1;e=An(e,(function(e){return e=zs(e,t),r||(r=e.length>1),e})),io(t,jo(t),n),r&&(n=vi(n,d|p|g,Po));var i=e.length;while(i--)Ls(n,e[i]);return n}));function Rh(t,e){return xh(t,$c(qo(e)))}var Oh=Fo((function(t,e){return null==t?{}:fs(t,e)}));function xh(t,e){if(null==t)return{};var n=An(jo(t),(function(t){return[t]}));return e=qo(e),ds(t,n,(function(t,n){return e(t,n[0])}))}function Nh(t,e,n){e=zs(e,t);var r=-1,s=e.length;s||(s=1,t=i);while(++r<s){var o=null==t?i:t[xa(e[r])];o===i&&(r=s,o=n),t=bl(o)?o.call(t):o}return t}function Dh(t,e,n){return null==t?t:Ts(t,e,n)}function Ph(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ts(t,e,n,r)}var Lh=Oo(Eh),Mh=Oo(Th);function Uh(t,e,n){var r=ul(t),i=r||dl(t)||jl(t);if(e=qo(e,4),null==n){var s=t&&t.constructor;n=i?r?new s:[]:Il(t)&&bl(s)?Ir(Ee(t)):{}}return(i?bn:xi)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Fh(t,e){return null==t||Ls(t,e)}function Vh(t,e,n){return null==t?t:Ms(t,e,Bs(n))}function jh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ms(t,e,Bs(n),r)}function $h(t){return null==t?[]:Xn(t,Eh(t))}function Bh(t){return null==t?[]:Xn(t,Th(t))}function zh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Xl(n),n=n===n?n:0),e!==i&&(e=Xl(e),e=e===e?e:0),mi(Xl(t),e,n)}function qh(t,e,n){return e=Wl(e),n===i?(n=e,e=0):n=Wl(n),t=Xl(t),ji(t,e,n)}function Hh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Wl(t),e===i?(e=t,t=0):e=Wl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var s=Ke();return $e(t+s*(e-t+nn("1e-"+((s+"").length-1))),e)}return vs(t,e)}var Kh=po((function(t,e,n){return e=e.toLowerCase(),t+(n?Wh(e):e)}));function Wh(t){return bf(Zl(t).toLowerCase())}function Gh(t){return t=Zl(t),t&&t.replace(Jt,er).replace(ze,"")}function Qh(t,e,n){t=Zl(t),e=Ds(e);var r=t.length;n=n===i?r:mi(Gl(n),0,r);var s=n;return n-=e.length,n>=0&&t.slice(n,s)==e}function Xh(t){return t=Zl(t),t&&kt.test(t)?t.replace(Ct,nr):t}function Yh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Lt,"\\$&"):t}var Jh=po((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=po((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=fo("toLowerCase");function ef(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return To(Pe(i),n)+t+To(De(i),n)}function nf(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;return e&&r<e?t+To(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;return e&&r<e?To(e-r,n)+t:t}function sf(t,e,n){return n||null==e?e=0:e&&(e=+e),He(Zl(t).replace(Ut,""),e||0)}function of(t,e,n){return e=(n?aa(t,e,n):e===i)?1:Gl(e),_s(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=po((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function cf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=i),n=n===i?V:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Ll(e))&&(e=Ds(e),!e&&sr(t))?Hs(mr(t),0,n):t.split(e,n)):[]}var lf=po((function(t,e,n){return t+(n?" ":"")+bf(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Gl(n),0,t.length),e=Ds(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=Er.templateSettings;n&&aa(t,e,n)&&(e=i),t=Zl(t),e=nh({},e,r,No);var s,o,a=nh({},e.imports,r.imports,No),u=Eh(a),l=Xn(a,u),h=0,f=e.interpolate||Zt,d="__p += '",p=re((e.escape||Zt).source+"|"+f.source+"|"+(f===xt?Ht:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),g="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qe+"]")+"\n";t.replace(p,(function(e,n,r,i,a,u){return r||(r=i),d+=t.slice(h,u).replace(te,rr),n&&(s=!0,d+="' +\n__e("+n+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),d+="';\n";var m=he.call(e,"variable")&&e.variable;if(m){if(zt.test(m))throw new Ft(c)}else d="with (obj) {\n"+d+"\n}\n";d=(o?d.replace(Et,""):d).replace(Tt,"$1").replace(It,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=Tf((function(){return Bt(u,g+"return "+d).apply(i,l)}));if(v.source=d,_l(v))throw v;return v}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===i))return Gn(t);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=mr(e),o=Jn(r,s),a=Zn(r,s)+1;return Hs(r,o,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.slice(0,vr(t)+1);if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Zn(r,mr(e))+1;return Hs(r,0,s).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.replace(Ut,"");if(!t||!(e=Ds(e)))return t;var r=mr(t),s=Jn(r,mr(e));return Hs(r,s).join("")}function yf(t,e){var n=k,r=R;if(Il(e)){var s="separator"in e?e.separator:s;n="length"in e?Gl(e.length):n,r="omission"in e?Ds(e.omission):r}t=Zl(t);var o=t.length;if(sr(t)){var a=mr(t);o=a.length}if(n>=o)return t;var u=n-gr(r);if(u<1)return r;var c=a?Hs(a,0,u).join(""):t.slice(0,u);if(s===i)return c+r;if(a&&(u+=c.length-u),Ll(s)){if(t.slice(u).search(s)){var l,h=c;s.global||(s=re(s.source,Zl(Kt.exec(s))+"g")),s.lastIndex=0;while(l=s.exec(h))var f=l.index;c=c.slice(0,f===i?u:f)}}else if(t.indexOf(Ds(s),u)!=u){var d=c.lastIndexOf(s);d>-1&&(c=c.slice(0,d))}return c+r}function _f(t){return t=Zl(t),t&&At.test(t)?t.replace(St,yr):t}var wf=po((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),bf=fo("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?i:e,e===i?or(t)?br(t):Pn(t):t.match(e)||[]}var Tf=ws((function(t,e){try{return _n(t,i,e)}catch(n){return _l(n)?n:new Ft(n)}})),If=Fo((function(t,e){return bn(e,(function(e){e=xa(e),pi(t,e,Nc(t[e],t))})),t}));function Sf(t){var e=null==t?0:t.length,n=qo();return t=e?An(t,(function(t){if("function"!=typeof t[1])throw new se(u);return[n(t[0]),t[1]]})):[],ws((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function Cf(t){return yi(vi(t,d))}function Af(t){return function(){return t}}function kf(t,e){return null==t||t!==t?e:t}var Rf=yo(),Of=yo(!0);function xf(t){return t}function Nf(t){return es("function"==typeof t?t:vi(t,d))}function Df(t){return os(vi(t,d))}function Pf(t,e){return as(t,vi(e,d))}var Lf=ws((function(t,e){return function(n){return zi(n,t,e)}})),Mf=ws((function(t,e){return function(n){return zi(t,n,e)}}));function Uf(t,e,n){var r=Eh(e),i=Di(e,r);null!=n||Il(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Di(e,Eh(e)));var s=!(Il(n)&&"chain"in n)||!!n.chain,o=bl(t);return bn(i,(function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(s||e){var n=t(this.__wrapped__),i=n.__actions__=ro(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,kn([this.value()],arguments))})})),t}function Ff(){return an._===this&&(an._=me),this}function Vf(){}function jf(t){return t=Gl(t),ws((function(e){return ls(e,t)}))}var $f=Eo(An),Bf=Eo(Tn),zf=Eo(xn);function qf(t){return ua(t)?$n(xa(t)):ps(t)}function Hf(t){return function(e){return null==t?i:Pi(t,e)}}var Kf=So(),Wf=So(!0);function Gf(){return[]}function Qf(){return!1}function Xf(){return{}}function Yf(){return""}function Jf(){return!0}function Zf(t,e){if(t=Gl(t),t<1||t>M)return[];var n=V,r=$e(t,V);e=qo(e),t-=V;var i=Kn(r,e);while(++n<t)e(n);return i}function td(t){return ul(t)?An(t,xa):Vl(t)?[t]:ro(Oa(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=bo((function(t,e){return t+e}),0),rd=ko("ceil"),id=bo((function(t,e){return t/e}),1),sd=ko("floor");function od(t){return t&&t.length?Si(t,xf,Ui):i}function ad(t,e){return t&&t.length?Si(t,qo(e,2),Ui):i}function ud(t){return jn(t,xf)}function cd(t,e){return jn(t,qo(e,2))}function ld(t){return t&&t.length?Si(t,xf,is):i}function hd(t,e){return t&&t.length?Si(t,qo(e,2),is):i}var fd=bo((function(t,e){return t*e}),1),dd=ko("round"),pd=bo((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Hn(t,xf):0}function md(t,e){return t&&t.length?Hn(t,qo(e,2)):0}return Er.after=Rc,Er.ary=Oc,Er.assign=th,Er.assignIn=eh,Er.assignInWith=nh,Er.assignWith=rh,Er.at=ih,Er.before=xc,Er.bind=Nc,Er.bindAll=If,Er.bindKey=Dc,Er.castArray=Jc,Er.chain=Hu,Er.chunk=La,Er.compact=Ma,Er.concat=Ua,Er.cond=Sf,Er.conforms=Cf,Er.constant=Af,Er.countBy=nc,Er.create=sh,Er.curry=Pc,Er.curryRight=Lc,Er.debounce=Mc,Er.defaults=oh,Er.defaultsDeep=ah,Er.defer=Uc,Er.delay=Fc,Er.difference=Fa,Er.differenceBy=Va,Er.differenceWith=ja,Er.drop=$a,Er.dropRight=Ba,Er.dropRightWhile=za,Er.dropWhile=qa,Er.fill=Ha,Er.filter=ic,Er.flatMap=ac,Er.flatMapDeep=uc,Er.flatMapDepth=cc,Er.flatten=Ga,Er.flattenDeep=Qa,Er.flattenDepth=Xa,Er.flip=Vc,Er.flow=Rf,Er.flowRight=Of,Er.fromPairs=Ya,Er.functions=ph,Er.functionsIn=gh,Er.groupBy=fc,Er.initial=tu,Er.intersection=eu,Er.intersectionBy=nu,Er.intersectionWith=ru,Er.invert=_h,Er.invertBy=wh,Er.invokeMap=pc,Er.iteratee=Nf,Er.keyBy=gc,Er.keys=Eh,Er.keysIn=Th,Er.map=mc,Er.mapKeys=Ih,Er.mapValues=Sh,Er.matches=Df,Er.matchesProperty=Pf,Er.memoize=jc,Er.merge=Ch,Er.mergeWith=Ah,Er.method=Lf,Er.methodOf=Mf,Er.mixin=Uf,Er.negate=$c,Er.nthArg=jf,Er.omit=kh,Er.omitBy=Rh,Er.once=Bc,Er.orderBy=vc,Er.over=$f,Er.overArgs=zc,Er.overEvery=Bf,Er.overSome=zf,Er.partial=qc,Er.partialRight=Hc,Er.partition=yc,Er.pick=Oh,Er.pickBy=xh,Er.property=qf,Er.propertyOf=Hf,Er.pull=uu,Er.pullAll=cu,Er.pullAllBy=lu,Er.pullAllWith=hu,Er.pullAt=fu,Er.range=Kf,Er.rangeRight=Wf,Er.rearg=Kc,Er.reject=bc,Er.remove=du,Er.rest=Wc,Er.reverse=pu,Er.sampleSize=Tc,Er.set=Dh,Er.setWith=Ph,Er.shuffle=Ic,Er.slice=gu,Er.sortBy=Ac,Er.sortedUniq=Eu,Er.sortedUniqBy=Tu,Er.split=cf,Er.spread=Gc,Er.tail=Iu,Er.take=Su,Er.takeRight=Cu,Er.takeRightWhile=Au,Er.takeWhile=ku,Er.tap=Ku,Er.throttle=Qc,Er.thru=Wu,Er.toArray=Kl,Er.toPairs=Lh,Er.toPairsIn=Mh,Er.toPath=td,Er.toPlainObject=Yl,Er.transform=Uh,Er.unary=Xc,Er.union=Ru,Er.unionBy=Ou,Er.unionWith=xu,Er.uniq=Nu,Er.uniqBy=Du,Er.uniqWith=Pu,Er.unset=Fh,Er.unzip=Lu,Er.unzipWith=Mu,Er.update=Vh,Er.updateWith=jh,Er.values=$h,Er.valuesIn=Bh,Er.without=Uu,Er.words=Ef,Er.wrap=Yc,Er.xor=Fu,Er.xorBy=Vu,Er.xorWith=ju,Er.zip=$u,Er.zipObject=Bu,Er.zipObjectDeep=zu,Er.zipWith=qu,Er.entries=Lh,Er.entriesIn=Mh,Er.extend=eh,Er.extendWith=nh,Uf(Er,Er),Er.add=nd,Er.attempt=Tf,Er.camelCase=Kh,Er.capitalize=Wh,Er.ceil=rd,Er.clamp=zh,Er.clone=Zc,Er.cloneDeep=el,Er.cloneDeepWith=nl,Er.cloneWith=tl,Er.conformsTo=rl,Er.deburr=Gh,Er.defaultTo=kf,Er.divide=id,Er.endsWith=Qh,Er.eq=il,Er.escape=Xh,Er.escapeRegExp=Yh,Er.every=rc,Er.find=sc,Er.findIndex=Ka,Er.findKey=uh,Er.findLast=oc,Er.findLastIndex=Wa,Er.findLastKey=ch,Er.floor=sd,Er.forEach=lc,Er.forEachRight=hc,Er.forIn=lh,Er.forInRight=hh,Er.forOwn=fh,Er.forOwnRight=dh,Er.get=mh,Er.gt=sl,Er.gte=ol,Er.has=vh,Er.hasIn=yh,Er.head=Ja,Er.identity=xf,Er.includes=dc,Er.indexOf=Za,Er.inRange=qh,Er.invoke=bh,Er.isArguments=al,Er.isArray=ul,Er.isArrayBuffer=cl,Er.isArrayLike=ll,Er.isArrayLikeObject=hl,Er.isBoolean=fl,Er.isBuffer=dl,Er.isDate=pl,Er.isElement=gl,Er.isEmpty=ml,Er.isEqual=vl,Er.isEqualWith=yl,Er.isError=_l,Er.isFinite=wl,Er.isFunction=bl,Er.isInteger=El,Er.isLength=Tl,Er.isMap=Cl,Er.isMatch=Al,Er.isMatchWith=kl,Er.isNaN=Rl,Er.isNative=Ol,Er.isNil=Nl,Er.isNull=xl,Er.isNumber=Dl,Er.isObject=Il,Er.isObjectLike=Sl,Er.isPlainObject=Pl,Er.isRegExp=Ll,Er.isSafeInteger=Ml,Er.isSet=Ul,Er.isString=Fl,Er.isSymbol=Vl,Er.isTypedArray=jl,Er.isUndefined=$l,Er.isWeakMap=Bl,Er.isWeakSet=zl,Er.join=iu,Er.kebabCase=Jh,Er.last=su,Er.lastIndexOf=ou,Er.lowerCase=Zh,Er.lowerFirst=tf,Er.lt=ql,Er.lte=Hl,Er.max=od,Er.maxBy=ad,Er.mean=ud,Er.meanBy=cd,Er.min=ld,Er.minBy=hd,Er.stubArray=Gf,Er.stubFalse=Qf,Er.stubObject=Xf,Er.stubString=Yf,Er.stubTrue=Jf,Er.multiply=fd,Er.nth=au,Er.noConflict=Ff,Er.noop=Vf,Er.now=kc,Er.pad=ef,Er.padEnd=nf,Er.padStart=rf,Er.parseInt=sf,Er.random=Hh,Er.reduce=_c,Er.reduceRight=wc,Er.repeat=of,Er.replace=af,Er.result=Nh,Er.round=dd,Er.runInContext=t,Er.sample=Ec,Er.size=Sc,Er.snakeCase=uf,Er.some=Cc,Er.sortedIndex=mu,Er.sortedIndexBy=vu,Er.sortedIndexOf=yu,Er.sortedLastIndex=_u,Er.sortedLastIndexBy=wu,Er.sortedLastIndexOf=bu,Er.startCase=lf,Er.startsWith=hf,Er.subtract=pd,Er.sum=gd,Er.sumBy=md,Er.template=ff,Er.times=Zf,Er.toFinite=Wl,Er.toInteger=Gl,Er.toLength=Ql,Er.toLower=df,Er.toNumber=Xl,Er.toSafeInteger=Jl,Er.toString=Zl,Er.toUpper=pf,Er.trim=gf,Er.trimEnd=mf,Er.trimStart=vf,Er.truncate=yf,Er.unescape=_f,Er.uniqueId=ed,Er.upperCase=wf,Er.upperFirst=bf,Er.each=lc,Er.eachRight=hc,Er.first=Ja,Uf(Er,function(){var t={};return xi(Er,(function(e,n){he.call(Er.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Er.VERSION=s,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Er[t].placeholder=Er})),bn(["drop","take"],(function(t,e){Ar.prototype[t]=function(n){n=n===i?1:je(Gl(n),0);var r=this.__filtered__&&!e?new Ar(this):this.clone();return r.__filtered__?r.__takeCount__=$e(n,r.__takeCount__):r.__views__.push({size:$e(n,V),type:t+(r.__dir__<0?"Right":"")}),r},Ar.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),bn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==N||n==P;Ar.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),bn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Ar.prototype[t]=function(){return this[n](1).value()[0]}})),bn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Ar.prototype[t]=function(){return this.__filtered__?new Ar(this):this[n](1)}})),Ar.prototype.compact=function(){return this.filter(xf)},Ar.prototype.find=function(t){return this.filter(t).head()},Ar.prototype.findLast=function(t){return this.reverse().find(t)},Ar.prototype.invokeMap=ws((function(t,e){return"function"==typeof t?new Ar(this):this.map((function(n){return zi(n,t,e)}))})),Ar.prototype.reject=function(t){return this.filter($c(qo(t)))},Ar.prototype.slice=function(t,e){t=Gl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Ar(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Gl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},Ar.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ar.prototype.toArray=function(){return this.take(V)},xi(Ar.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),s=Er[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);s&&(Er.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof Ar,c=a[0],l=u||ul(e),h=function(t){var e=s.apply(Er,kn([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=o&&!f,g=u&&!d;if(!o&&l){e=g?e:new Ar(this);var m=t.apply(e,a);return m.__actions__.push({func:Wu,args:[h],thisArg:i}),new Cr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),bn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=oe[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Er.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),xi(Ar.prototype,(function(t,e){var n=Er[e];if(n){var r=n.name+"";he.call(cn,r)||(cn[r]=[]),cn[r].push({name:e,func:n})}})),cn[_o(i,_).name]=[{name:"wrapper",func:i}],Ar.prototype.clone=kr,Ar.prototype.reverse=Rr,Ar.prototype.value=Or,Er.prototype.at=Gu,Er.prototype.chain=Qu,Er.prototype.commit=Xu,Er.prototype.next=Yu,Er.prototype.plant=Zu,Er.prototype.reverse=tc,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=ec,Er.prototype.first=Er.prototype.head,Ae&&(Er.prototype[Ae]=Ju),Er},Tr=Er();an._=Tr,r=function(){return Tr}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},8646:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(1767),o=n(851);t.exports=function(t,e){e&&"string"===typeof t||i(t);var n=o(t);return s(i(void 0!==n?r(n,t):t))}},8686:function(t,e,n){"use strict";var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8721:function(t,e,n){"use strict";var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8750:function(t,e,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),u=n(507),c=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new c;return s(e)>n.size?u(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},8981:function(t,e,n){"use strict";var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},9286:function(t,e,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,(function(t){o(e,t)})),e}},9297:function(t,e,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},9299:function(t,e,n){var r=n(9315),i=n(5091),s="[object Symbol]";function o(t){return"symbol"==typeof t||i(t)&&r(t)==s}t.exports=o},9306:function(t,e,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},9314:function(t,e,n){"use strict";var r=n(6518),i=n(9565),s=n(8551),o=n(1767),a=n(4149),u=n(9590),c=n(9462),l=n(6395),h=c((function(){var t,e,n=this.iterator,r=this.next;while(this.remaining)if(this.remaining--,t=s(i(r,n)),e=this.done=!!t.done,e)return;if(t=s(i(r,n)),e=this.done=!!t.done,!e)return t.value}));r({target:"Iterator",proto:!0,real:!0,forced:l},{drop:function(t){s(this);var e=u(a(+t));return new h(o(this),{remaining:e})}})},9315:function(t,e,n){var r=n(7874),i=n(38),s=n(5677),o="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function c(t){return null==t?void 0===t?a:o:u&&u in Object(t)?i(t):s(t)}t.exports=c},9429:function(t,e,n){"use strict";var r=n(4576),i=n(6193);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},9433:function(t,e,n){"use strict";var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9462:function(t,e,n){"use strict";var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),u=n(1181),c=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=u.set,v=function(t){var e=u.getterFor(t?g:p);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=c(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,"normal")}catch(o){return f(i,"throw",o)}return i&&f(i,"normal"),h(void 0,!0)}})},y=v(!0),_=v(!1);s(_,d,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?g:p,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,m(this,i)};return r.prototype=e?y:_,r}},9479:function(t,e,n){"use strict";var r=n(4576),i=n(3724),s=n(2106),o=n(7979),a=n(9039),u=r.RegExp,c=u.prototype,l=i&&a((function(){var t=!0;try{u(".","d")}catch(l){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(c,"flags").get.call(e);return a!==r||n!==r}));l&&s(c,"flags",{configurable:!0,get:o})},9504:function(t,e,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},9519:function(t,e,n){"use strict";var r,i,s=n(4576),o=n(2839),a=s.process,u=s.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},9539:function(t,e,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(u){a=!0,o=u}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9565:function(t,e,n){"use strict";var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9577:function(t,e,n){"use strict";var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),u=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=u(this),i=o(t),l=s(n)?a(e):+e;return r(n,c(n),i,l)}}["with"],!h)},9590:function(t,e,n){"use strict";var r=n(1291),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw new i("The argument can't be less than 0");return e}},9617:function(t,e,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),u=s(a);if(0===u)return!t&&-1;var c,l=i(o,u);if(t&&n!==n){while(u>l)if(c=a[l++],c!==c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9678:function(t,e,n){"use strict";var r=n(6518),i=n(7628),s=n(5397),o=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(s(this),a)}}),o("toReversed")},9692:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},9928:function(t,e,n){"use strict";var r=n(6198),i=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),u=i(n),c=u<0?a+u:u;if(c>=a||c<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===c?o:t[h];return l}}}]);
//# sourceMappingURL=chunk-vendors.06954b85.js.map