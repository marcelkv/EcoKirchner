(self["webpackChunkeco_kirchner"]=self["webpackChunkeco_kirchner"]||[]).push([[998],{9662:function(t,e,n){"use strict";var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){"use strict";var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){"use strict";var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){"use strict";var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){"use strict";t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(3013),a=n(9781),u=n(7854),c=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(7045),v=n(7976),y=n(9518),_=n(7674),w=n(5112),b=n(9711),E=n(9909),I=E.enforce,T=E.get,S=u.Int8Array,C=S&&S.prototype,k=u.Uint8ClampedArray,A=k&&k.prototype,R=S&&y(S),O=C&&y(C),N=Object.prototype,x=u.TypeError,P=w("toStringTag"),D=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(u.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(F,e)||h(j,e)},B=function(t){var e=y(t);if(l(e)){var n=T(e);return n&&h(n,L)?n[L]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(F,e)||h(j,e)},z=function(t){if($(t))return t;throw x("Target is not a typed array")},q=function(t){if(c(t)&&(!_||v(R,t)))return t;throw x(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in F){var s=u[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(c){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=u[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in F)i=u[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=u[r],s=i&&i.prototype,s?I(s)[L]=i:M=!1;for(r in j)i=u[r],s=i&&i.prototype,s&&(I(s)[L]=i);if((!M||!c(R)||R===Function.prototype)&&(R=function(){throw x("Incorrect invocation")},M))for(r in F)u[r]&&_(u[r],R);if((!M||!O||O===N)&&(O=R.prototype,M))for(r in F)u[r]&&_(u[r].prototype,O);if(M&&y(A)!==O&&_(A,O),a&&!h(O,P))for(r in U=!0,m(O,P,{configurable:!0,get:function(){return l(this)?this[D]:void 0}}),F)u[r]&&p(u[r],D,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&D,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:$,TypedArray:R,TypedArrayPrototype:O}},7745:function(t,e,n){"use strict";var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1318:function(t,e,n){"use strict";var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,u=r(e),c=s(u),l=i(o,c);if(t&&n!==n){while(c>l)if(a=u[l++],a!==a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},1843:function(t,e,n){"use strict";var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){"use strict";var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),u=i(n),c=u<0?a+u:u;if(c>=a||c<0)throw s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===c?o:t[h];return l}},4326:function(t,e,n){"use strict";var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){"use strict";var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),u=Object,c="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=u(t),a))?n:c?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){"use strict";var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),u=o.f,c=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||u(t,h,c(e,h))}}},8544:function(t,e,n){"use strict";var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){"use strict";var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){"use strict";var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){"use strict";var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(r(n)&&s(n,c,a),a.global)u?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){"use strict";var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){"use strict";var r=n(7293);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){"use strict";var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){"use strict";var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){"use strict";t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t){"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){"use strict";var r,i,s=n(7854),o=n(8113),a=s.process,u=s.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){"use strict";var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(o);t.exports=function(t,e){if(u&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){"use strict";var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),u=n(9920),c=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=c(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){"use strict";var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){"use strict";var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){"use strict";var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),u=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},5668:function(t,e,n){"use strict";var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1702:function(t,e,n){"use strict";var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){"use strict";var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){"use strict";var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){"use strict";var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){"use strict";t.exports={}},4664:function(t,e,n){"use strict";var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){"use strict";var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){"use strict";var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){"use strict";var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){"use strict";var r,i,s,o=n(4811),a=n(7854),u=n(111),c=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw g(p);return e.facade=t,c(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(t,e,n){"use strict";var r=n(4326);t.exports=Array.isArray||function(t){return"Array"===r(t)}},4067:function(t,e,n){"use strict";var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},614:function(t,e,n){"use strict";var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){"use strict";var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=u[a(t)];return n===l||n!==c&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){"use strict";var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){"use strict";t.exports=!1},2190:function(t,e,n){"use strict";var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){"use strict";var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){"use strict";var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),u=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||c(this)}),"toString")},4758:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){"use strict";var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){"use strict";var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){"use strict";var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),u=n(4948),c=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=u(e),l)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){"use strict";var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){"use strict";var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),u=o("IE_PROTO"),c=Object,l=c.prototype;t.exports=a?c.getPrototypeOf:function(t){var e=s(t);if(r(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof c?l:null}},7976:function(t,e,n){"use strict";var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){"use strict";var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),u=r([].push);t.exports=function(t,e){var n,r=s(t),c=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&u(l,n);while(e.length>c)i(r,n=e[c++])&&(~o(l,n)||u(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){"use strict";var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){"use strict";var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){"use strict";var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),u=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?u(e,n(t)):e}},4488:function(t,e,n){"use strict";var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){"use strict";var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){"use strict";var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){"use strict";var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){"use strict";var r=n(7392),i=n(7293),s=n(7854),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){"use strict";var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},4599:function(t,e,n){"use strict";var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5656:function(t,e,n){"use strict";var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){"use strict";var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){"use strict";var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){"use strict";var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){"use strict";var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),u=n(5112),c=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,u=o(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){"use strict";var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){"use strict";var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){"use strict";var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){"use strict";var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){"use strict";var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){"use strict";var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){"use strict";var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){"use strict";var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){"use strict";var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),u=n(3307),c=r.Symbol,l=i("wks"),h=u?c["for"]||c:c&&c.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(c,t)?c[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),u=n(7293),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=c||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),u=n(7207),c=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=c||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=i(this),n=s(e),r=arguments.length;if(r){u(n+r);var c=n;while(c--){var l=c+r;c in e?e[l]=e[c]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return o(e,n+r)}})},1439:function(t,e,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,u=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);c("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(u(e),e);return l(n,t)}))},5315:function(t,e,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),u=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=u(this),i=o(t),l=s(n)?a(e):+e;return r(n,c(n),i,l)}}["with"],!h)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,u=n(2597),c=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),g=n(1913),m="DOMException",v=s("Error"),y=s(m),_=function(){c(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in v(m),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!I&&!(I.writable&&I.configurable),S=b&&!T&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:y});var C=s(m),k=C.prototype;if(k.constructor!==C)for(var A in g||a(k,"constructor",o(1,C)),f)if(u(f,A)){var R=f[A],O=R.s;u(C,O)||a(C,O,o(6,R.c))}},6229:function(t,e,n){"use strict";var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,u=a.prototype,c=i(u.append),l=i(u["delete"]),h=i(u.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(u,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),u=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===u||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(t,e,n){"use strict";var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,u=a.prototype,c=i(u.getAll),l=i(u.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(u,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=c(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(t,e,n){"use strict";var r=n(9781),i=n(1702),s=n(7045),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return _},L:function(){return u},LL:function(){return O},P0:function(){return m},Pz:function(){return y},Sg:function(){return w},ZR:function(){return R},aH:function(){return v},b$:function(){return T},eu:function(){return k},hl:function(){return C},m9:function(){return z},ne:function(){return j},pd:function(){return F},q4:function(){return g},ru:function(){return I},tV:function(){return c},uI:function(){return E},vZ:function(){return D},w1:function(){return S},xO:function(){return M},xb:function(){return P},z$:function(){return b},zd:function(){return U}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){try{return"object"===typeof indexedDB}catch(t){return!1}}function k(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function N(t,e){return t.replace(x,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(L(n)&&L(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
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
function M(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=B(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function z(t){return t&&t._delegate?t._delegate:t}},4958:function(t,e,n){"use strict";n.d(e,{Bj:function(){return S},qq:function(){return j},Fl:function(){return ce},X3:function(){return Wt},PG:function(){return qt},dq:function(){return te},yT:function(){return Kt},Xl:function(){return Jt},Jd:function(){return z},WL:function(){return ae},qj:function(){return Vt},iH:function(){return ee},lk:function(){return q},Um:function(){return Bt},XI:function(){return ne},IU:function(){return Gt},j:function(){return H},X$:function(){return W},SU:function(){return se}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i=()=>{},s=Object.assign,o=Object.prototype.hasOwnProperty,a=(t,e)=>o.call(t,e),u=Array.isArray,c=t=>"[object Map]"===g(t),l=t=>"function"===typeof t,h=t=>"string"===typeof t,f=t=>"symbol"===typeof t,d=t=>null!==t&&"object"===typeof t,p=Object.prototype.toString,g=t=>p.call(t),m=t=>g(t).slice(8,-1),v=t=>h(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,y=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},_=/-(\w)/g,w=(y((t=>t.replace(_,((t,e)=>e?e.toUpperCase():"")))),/\B([A-Z])/g),b=(y((t=>t.replace(w,"-$1").toLowerCase())),y((t=>t.charAt(0).toUpperCase()+t.slice(1)))),E=(y((t=>t?`on${b(t)}`:"")),(t,e)=>!Object.is(t,e)),I=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})};let T;class S{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&T&&(this.parent=T,this.index=(T.scopes||(T.scopes=[])).push(this)-1)}run(t){if(this.active){const e=T;try{return T=this,t()}finally{T=e}}else 0}on(){T=this}off(){T=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function C(t,e=T){e&&e.active&&e.effects.push(t)}const k=t=>{const e=new Set(t);return e.w=0,e.n=0,e},A=t=>(t.w&D)>0,R=t=>(t.n&D)>0,O=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=D},N=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];A(i)&&!R(i)?i.delete(t):e[n++]=i,i.w&=~D,i.n&=~D}e.length=n}},x=new WeakMap;let P=0,D=1;const L=30;let M;const U=Symbol(""),F=Symbol("");class j{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,C(this,n)}run(){if(!this.active)return this.fn();let t=M,e=B;while(t){if(t===this)return;t=t.parent}try{return this.parent=M,M=this,B=!0,D=1<<++P,P<=L?O(this):V(this),this.fn()}finally{P<=L&&N(this),D=1<<--P,M=this.parent,B=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){M===this?this.deferStop=!0:this.active&&(V(this),this.onStop&&this.onStop(),this.active=!1)}}function V(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let B=!0;const $=[];function z(){$.push(B),B=!1}function q(){const t=$.pop();B=void 0===t||t}function H(t,e,n){if(B&&M){let e=x.get(t);e||x.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=k());const i=void 0;K(r,i)}}function K(t,e){let n=!1;P<=L?R(t)||(t.n|=D,n=!A(t)):n=!t.has(M),n&&(t.add(M),M.deps.push(t))}function W(t,e,n,r,i,s){const o=x.get(t);if(!o)return;let a=[];if("clear"===e)a=[...o.values()];else if("length"===n&&u(t))o.forEach(((t,e)=>{("length"===e||e>=r)&&a.push(t)}));else switch(void 0!==n&&a.push(o.get(n)),e){case"add":u(t)?v(n)&&a.push(o.get("length")):(a.push(o.get(U)),c(t)&&a.push(o.get(F)));break;case"delete":u(t)||(a.push(o.get(U)),c(t)&&a.push(o.get(F)));break;case"set":c(t)&&a.push(o.get(U));break}if(1===a.length)a[0]&&G(a[0]);else{const t=[];for(const e of a)e&&t.push(...e);G(k(t))}}function G(t,e){const n=u(t)?t:[...t];for(const r of n)r.computed&&J(r,e);for(const r of n)r.computed||J(r,e)}function J(t,e){(t!==M||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Q=r("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(f)),Y=rt(),Z=rt(!1,!0),tt=rt(!0),et=nt();function nt(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Gt(this);for(let e=0,i=this.length;e<i;e++)H(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Gt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){z();const n=Gt(this)[e].apply(this,t);return q(),n}})),t}function rt(t=!1,e=!1){return function(n,r,i){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_isShallow"===r)return e;if("__v_raw"===r&&i===(t?e?Ut:Mt:e?Lt:Dt).get(n))return n;const s=u(n);if(!t&&s&&a(et,r))return Reflect.get(et,r,i);const o=Reflect.get(n,r,i);return(f(r)?X.has(r):Q(r))?o:(t||H(n,"get",r),e?o:te(o)?s&&v(r)?o:o.value:d(o)?t?$t(o):Vt(o):o)}}const it=ot(),st=ot(!0);function ot(t=!1){return function(e,n,r,i){let s=e[n];if(Ht(s)&&te(s)&&!te(r))return!1;if(!t&&!Ht(r)&&(Kt(r)||(r=Gt(r),s=Gt(s)),!u(e)&&te(s)&&!te(r)))return s.value=r,!0;const o=u(e)&&v(n)?Number(n)<e.length:a(e,n),c=Reflect.set(e,n,r,i);return e===Gt(i)&&(o?E(r,s)&&W(e,"set",n,r,s):W(e,"add",n,r)),c}}function at(t,e){const n=a(t,e),r=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&W(t,"delete",e,void 0,r),i}function ut(t,e){const n=Reflect.has(t,e);return f(e)&&X.has(e)||H(t,"has",e),n}function ct(t){return H(t,"iterate",u(t)?"length":U),Reflect.ownKeys(t)}const lt={get:Y,set:it,deleteProperty:at,has:ut,ownKeys:ct},ht={get:tt,set(t,e){return!0},deleteProperty(t,e){return!0}},ft=s({},lt,{get:Z,set:st}),dt=t=>t,pt=t=>Reflect.getPrototypeOf(t);function gt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Gt(t),s=Gt(e);n||(e!==s&&H(i,"get",e),H(i,"get",s));const{has:o}=pt(i),a=r?dt:n?Xt:Qt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function mt(t,e=!1){const n=this["__v_raw"],r=Gt(n),i=Gt(t);return e||(t!==i&&H(r,"has",t),H(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vt(t,e=!1){return t=t["__v_raw"],!e&&H(Gt(t),"iterate",U),Reflect.get(t,"size",t)}function yt(t){t=Gt(t);const e=Gt(this),n=pt(e),r=n.has.call(e,t);return r||(e.add(t),W(e,"add",t,t)),this}function _t(t,e){e=Gt(e);const n=Gt(this),{has:r,get:i}=pt(n);let s=r.call(n,t);s||(t=Gt(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?E(e,o)&&W(n,"set",t,e,o):W(n,"add",t,e),this}function wt(t){const e=Gt(this),{has:n,get:r}=pt(e);let i=n.call(e,t);i||(t=Gt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&W(e,"delete",t,void 0,s),o}function bt(){const t=Gt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&W(t,"clear",void 0,void 0,n),r}function Et(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Gt(s),a=e?dt:t?Xt:Qt;return!t&&H(o,"iterate",U),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function It(t,e,n){return function(...r){const i=this["__v_raw"],s=Gt(i),o=c(s),a="entries"===t||t===Symbol.iterator&&o,u="keys"===t&&o,l=i[t](...r),h=n?dt:e?Xt:Qt;return!e&&H(s,"iterate",u?F:U),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:a?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function Tt(t){return function(...e){return"delete"!==t&&this}}function St(){const t={get(t){return gt(this,t)},get size(){return vt(this)},has:mt,add:yt,set:_t,delete:wt,clear:bt,forEach:Et(!1,!1)},e={get(t){return gt(this,t,!1,!0)},get size(){return vt(this)},has:mt,add:yt,set:_t,delete:wt,clear:bt,forEach:Et(!1,!0)},n={get(t){return gt(this,t,!0)},get size(){return vt(this,!0)},has(t){return mt.call(this,t,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Et(!0,!1)},r={get(t){return gt(this,t,!0,!0)},get size(){return vt(this,!0)},has(t){return mt.call(this,t,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Et(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=It(i,!1,!1),n[i]=It(i,!0,!1),e[i]=It(i,!1,!0),r[i]=It(i,!0,!0)})),[t,n,e,r]}const[Ct,kt,At,Rt]=St();function Ot(t,e){const n=e?t?Rt:At:t?kt:Ct;return(e,r,i)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get(a(n,r)&&r in e?n:e,r,i)}const Nt={get:Ot(!1,!1)},xt={get:Ot(!1,!0)},Pt={get:Ot(!0,!1)};const Dt=new WeakMap,Lt=new WeakMap,Mt=new WeakMap,Ut=new WeakMap;function Ft(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Ft(m(t))}function Vt(t){return Ht(t)?t:zt(t,!1,lt,Nt,Dt)}function Bt(t){return zt(t,!1,ft,xt,Lt)}function $t(t){return zt(t,!0,ht,Pt,Mt)}function zt(t,e,n,r,i){if(!d(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=i.get(t);if(s)return s;const o=jt(t);if(0===o)return t;const a=new Proxy(t,2===o?r:n);return i.set(t,a),a}function qt(t){return Ht(t)?qt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ht(t){return!(!t||!t["__v_isReadonly"])}function Kt(t){return!(!t||!t["__v_isShallow"])}function Wt(t){return qt(t)||Ht(t)}function Gt(t){const e=t&&t["__v_raw"];return e?Gt(e):t}function Jt(t){return I(t,"__v_skip",!0),t}const Qt=t=>d(t)?Vt(t):t,Xt=t=>d(t)?$t(t):t;function Yt(t){B&&M&&(t=Gt(t),K(t.dep||(t.dep=k())))}function Zt(t,e){t=Gt(t),t.dep&&G(t.dep)}function te(t){return!(!t||!0!==t.__v_isRef)}function ee(t){return re(t,!1)}function ne(t){return re(t,!0)}function re(t,e){return te(t)?t:new ie(t,e)}class ie{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Gt(t),this._value=e?t:Qt(t)}get value(){return Yt(this),this._value}set value(t){t=this.__v_isShallow?t:Gt(t),E(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Qt(t),Zt(this,t))}}function se(t){return te(t)?t.value:t}const oe={get:(t,e,n)=>se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return te(i)&&!te(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function ae(t){return qt(t)?t:new Proxy(t,oe)}class ue{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new j(t,(()=>{this._dirty||(this._dirty=!0,Zt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Gt(this);return Yt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ce(t,e,n=!1){let r,s;const o=l(t);o?(r=t,s=i):(r=t.get,s=t.set);const a=new ue(r,s,o||!s,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return B},FN:function(){return wn},Fl:function(){return Mn},HY:function(){return Fe},JJ:function(){return X},Ko:function(){return qt},P$:function(){return ut},Q6:function(){return pt},U2:function(){return lt},Uk:function(){return un},Us:function(){return xe},WI:function(){return Ht},Wm:function(){return rn},Y3:function(){return E},Y8:function(){return st},YP:function(){return tt},_:function(){return nn},aZ:function(){return gt},bv:function(){return At},dD:function(){return V},f3:function(){return Y},h:function(){return Un},iD:function(){return Je},ic:function(){return Ot},j4:function(){return Qe},kq:function(){return ln},nK:function(){return dt},uE:function(){return cn},up:function(){return Vt},w5:function(){return $},wF:function(){return kt},wg:function(){return qe},wy:function(){return Ut}});n(7658),n(541);var r=n(4958),i=n(7156);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const u=[];for(let i=0;i<t.length;i++)u.push(o(t[i],e,n,r));return u}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}u(t,n,i,r)}function u(t,e,n,r=!0){console.error(t)}let c=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=[];let v=null,y=0;const _=Promise.resolve();let w=null,b=null;function E(t){const e=w||_;return t?e.then(this?t.bind(this):t):e}function I(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=x(h[r]);i<t?e=r+1:n=r}return e}function T(t){h.length&&h.includes(t,c&&t.allowRecurse?f+1:f)||t===b||(null==t.id?h.push(t):h.splice(I(t.id),0,t),S())}function S(){c||l||(l=!0,w=_.then(P))}function C(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function k(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function A(t){k(t,p,d,g)}function R(t){k(t,v,m,y)}function O(t,e=null){if(d.length){for(b=e,p=[...new Set(d)],d.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,b=null,O(t,e)}}function N(t){if(O(),m.length){const t=[...new Set(m)];if(m.length=0,v)return void v.push(...t);for(v=t,v.sort(((t,e)=>x(t)-x(e))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const x=t=>null==t.id?1/0:t.id;function P(t){l=!1,c=!0,O(t),h.sort(((t,e)=>x(t)-x(e)));i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,N(t),c=!1,w=null,(h.length||d.length||m.length)&&P(t)}}new Set;new Map;function D(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),u=a&&e.slice(7);if(u&&u in r){const t=`${"modelValue"===u?"model":u}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>t.trim()))),e&&(s=n.map(i.He))}let c;let l=r[c=(0,i.hR)(e)]||r[c=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[c=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,o(h,t,6,s)}}function L(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},u=!1;if(!(0,i.mf)(t)){const r=t=>{const n=L(t,e,!0);n&&(u=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||u?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function M(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let U=null,F=null;function j(t){const e=U;return U=t,F=t&&t.type.__scopeId||null,e}function V(t){F=t}function B(){F=null}function $(t,e=U,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&We(-1);const i=j(e),s=t(...n);return j(i),r._d&&We(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function z(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[u],slots:c,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=t;let y,_;const w=j(t);try{if(4&n.shapeFlag){const t=s||r;y=hn(f.call(t,t,d,o,g,p,m)),_=l}else{const t=e;0,y=hn(t.length>1?t(o,{attrs:l,slots:c,emit:h}):t(o,null)),_=e.props?l:q(l)}}catch(E){$e.length=0,a(E,t,1),y=rn(Ve)}let b=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(u&&t.some(i.tR)&&(_=H(_,u)),b=an(b,_))}return n.dirs&&(b=an(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,j(w),y}const q=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},H=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function K(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||W(r,o,c):!!o);if(1024&u)return!0;if(16&u)return r?W(r,o,c):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!M(c,n))return!0}}return!1}function W(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!M(n,s))return!0}return!1}function G({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const J=t=>t.__isSuspense;function Q(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):R(t)}function X(t,e){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=_n||U;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:u,onTrack:c,onTrigger:l}=i.kT){const h=_n;let f,d,p=!1,g=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?it(t):(0,i.mf)(t)?s(t,h,2):void 0))):f=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:i.dG,e&&a){const t=f;f=()=>it(t())}let m=t=>{d=w.onStop=()=>{s(t,h,4)}};if(Cn)return m=i.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),i.dG;let v=g?[]:Z;const y=()=>{if(w.active)if(e){const t=w.run();(a||p||(g?t.some(((t,e)=>(0,i.aU)(t,v[e]))):(0,i.aU)(t,v)))&&(d&&d(),o(e,h,3,[t,v===Z?void 0:v,m]),v=t)}else w.run()};let _;y.allowRecurse=!!e,_="sync"===u?y:"post"===u?()=>Ne(y,h&&h.suspense):()=>A(y);const w=new r.qq(f,_);return e?n?y():v=w.run():"post"===u?Ne(w.run.bind(w),h&&h.suspense):w.run(),()=>{w.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,w)}}function nt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=_n;bn(this);const u=et(s,o.bind(r),n);return a?bn(a):En(),u}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))it(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)it(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{it(t,e)}));else if((0,i.PO)(t))for(const n in t)it(t[n],e);return t}function st(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return At((()=>{t.isMounted=!0})),Nt((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],at={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=wn(),i=st();let s;return()=>{const o=e.default&&pt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ve){0,a=e,t=!0;break}}const u=(0,r.IU)(t),{mode:c}=u;if(i.isLeaving)return ht(a);const l=ft(a);if(!l)return ht(a);const h=lt(l,u,i,n);dt(l,h);const f=n.subTree,d=f&&ft(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Ve&&(!Ye(l,d)||p)){const t=lt(d,u,i,n);if(dt(d,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ht(a);"in-out"===c&&l.type!==Ve&&(t.delayLeave=(t,e,n)=>{const r=ct(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ut=at;function ct(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lt(t,e,n,r){const{appear:s,mode:a,persisted:u=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=e,b=String(t.key),E=ct(n,t),I=(t,e)=>{t&&o(t,r,9,e)},T=(t,e)=>{const n=e[1];I(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:u,beforeEnter(e){let r=c;if(!n.isMounted){if(!s)return;r=v||c}e._leaveCb&&e._leaveCb(!0);const i=E[b];i&&Ye(t,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=y||l,r=_||h,i=w||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,I(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();I(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),I(n?m:g,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?T(p,[e,o]):o()},clone(t){return lt(t,e,n,r)}};return S}function ht(t){if(vt(t))return t=an(t),t.children=null,t}function ft(t){return vt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Fe?(128&o.patchFlag&&i++,r=r.concat(pt(o.children,e,a))):(e||o.type!==Ve)&&r.push(null!=a?an(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function gt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const mt=t=>!!t.type.__asyncLoader;const vt=t=>t.type.__isKeepAlive;RegExp,RegExp;function yt(t,e){return(0,i.kJ)(t)?t.some((t=>yt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function _t(t,e){bt(t,"a",e)}function wt(t,e){bt(t,"da",e)}function bt(t,e,n=_n){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(St(e,r,n),n){let t=n.parent;while(t&&t.parent)vt(t.parent.vnode)&&Et(r,e,n,t),t=t.parent}}function Et(t,e,n,r){const s=St(e,t,r,!0);xt((()=>{(0,i.Od)(r[e],s)}),n)}function It(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Tt(t){return 128&t.shapeFlag?t.ssContent:t}function St(t,e,n=_n,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),bn(n);const s=o(e,n,t,i);return En(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ct=t=>(e,n=_n)=>(!Cn||"sp"===t)&&St(t,e,n),kt=Ct("bm"),At=Ct("m"),Rt=Ct("bu"),Ot=Ct("u"),Nt=Ct("bum"),xt=Ct("um"),Pt=Ct("sp"),Dt=Ct("rtg"),Lt=Ct("rtc");function Mt(t,e=_n){St("ec",t,e)}function Ut(t,e){const n=U;if(null===n)return t;const r=Pn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,u=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&it(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:u})}return t}function Ft(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let u=0;u<s.length;u++){const c=s[u];a&&(c.oldValue=a[u].value);let l=c.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,c,t,e]),(0,r.lk)())}}const jt="components";function Vt(t,e){return $t(jt,t,!0,e)||t}const Bt=Symbol();function $t(t,e,n=!0,r=!1){const s=U||_n;if(s){const n=s.type;if(t===jt){const t=Dn(n);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=zt(s[t]||n[t],e)||zt(s.appContext[t],e);return!o&&r?n:o}}function zt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function qt(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Ht(t,e,n={},r,i){if(U.isCE||U.parent&&mt(U.parent)&&U.parent.isCE)return rn("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),qe();const o=s&&Kt(s(n)),a=Qe(Fe,{key:n.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Kt(t){return t.some((t=>!Xe(t)||t.type!==Ve&&!(t.type===Fe&&!Kt(t.children))))?t:null}const Wt=t=>t?In(t)?Pn(t)||t.proxy:Wt(t.parent):null,Gt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wt(t.parent),$root:t=>Wt(t.root),$emit:t=>t.emit,$options:t=>ee(t),$forceUpdate:t=>t.f||(t.f=()=>T(t.update)),$nextTick:t=>t.n||(t.n=E.bind(t.proxy)),$watch:t=>nt.bind(t)}),Jt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:l}=t;let h;if("$"!==e[0]){const r=u[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return u[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return u[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return u[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return u[e]=4,n[e];Qt&&(u[e]=0)}}const f=Gt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(u[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(u=o[0])&&(0,i.RI)(u,a)||(0,i.RI)(r,a)||(0,i.RI)(Gt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qt=!0;function Xt(t){const e=ee(t),n=t.proxy,s=t.ctx;Qt=!1,e.beforeCreate&&Zt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:u,watch:c,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:R,components:O,directives:N,filters:x}=e,P=null;if(h&&Yt(h,s,P,t.appContext.config.unwrapInjectedRef),u)for(const r in u){const t=u[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Qt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,u=Mn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:t=>u.value=t})}if(c)for(const r in c)te(c[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{X(e,t[e])}))}function D(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Zt(f,t,"c"),D(kt,d),D(At,p),D(Rt,g),D(Ot,m),D(_t,v),D(wt,y),D(Mt,C),D(Lt,T),D(Dt,S),D(Nt,w),D(xt,E),D(Pt,k),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===i.dG&&(t.render=I),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),N&&(t.directives=N)}function Yt(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=oe(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Zt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function te(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&tt(s,n)}else if((0,i.mf)(t))tt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>te(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&tt(s,r,t)}else 0}function ee(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let u;return a?u=a:i.length||n||r?(u={},i.length&&i.forEach((t=>ne(u,t,o,!0))),ne(u,e,o)):u=e,s.set(e,u),u}function ne(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ne(t,s,n,!0),i&&i.forEach((e=>ne(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=re[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const re={data:ie,props:ue,emits:ue,methods:ue,computed:ue,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:ue,directives:ue,watch:ce,provide:ie,inject:se};function ie(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function se(t,e){return ue(oe(t),oe(e))}function oe(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ae(t,e){return t?[...new Set([].concat(t,e))]:e}function ue(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function ce(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=ae(t[r],e[r]);return n}function le(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,Ze,1),t.propsDefaults=Object.create(null),fe(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function he(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=t,c=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||u>0)||16&u){let r;fe(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=de(l,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&u){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(t.emitsOptions,s))continue;const u=e[s];if(l)if((0,i.RI)(a,s))u!==a[s]&&(a[s]=u,h=!0);else{const e=(0,i._A)(s);o[e]=de(l,c,e,u,t,!1)}else u!==a[s]&&(a[s]=u,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function fe(t,e,n,s){const[o,a]=t.propsOptions;let u,c=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(u||(u={}))[h]=l:n[h]=l:M(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,c=!0)}if(a){const e=(0,r.IU)(n),s=u||i.kT;for(let r=0;r<a.length;r++){const u=a[r];n[u]=de(o,e,u,s[u],t,!(0,i.RI)(s,u))}}return c}function de(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(bn(s),r=i[n]=t.call(null,e),En())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function pe(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let c=!1;if(!(0,i.mf)(t)){const r=t=>{c=!0;const[n,r]=pe(t,e,!0);(0,i.l7)(a,n),r&&u.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);ge(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(ge(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=ye(Boolean,r.type),n=ye(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&u.push(e)}}}}const l=[a,u];return r.set(t,l),l}function ge(t){return"$"!==t[0]}function me(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ve(t,e){return me(t)===me(e)}function ye(t,e){return(0,i.kJ)(e)?e.findIndex((e=>ve(e,t))):(0,i.mf)(e)&&ve(e,t)?0:-1}const _e=t=>"_"===t[0]||"$stable"===t,we=t=>(0,i.kJ)(t)?t.map(hn):[hn(t)],be=(t,e,n)=>{if(e._n)return e;const r=$(((...t)=>we(e(...t))),n);return r._c=!1,r},Ee=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_e(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=be(s,n,r);else if(null!=n){0;const t=we(n);e[s]=()=>t}}},Ie=(t,e)=>{const n=we(e);t.slots.default=()=>n},Te=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):Ee(e,t.slots={})}else t.slots={},e&&Ie(t,e);(0,i.Nj)(t.slots,Ze,1)},Se=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,Ee(e,s)),a=e}else e&&(Ie(t,e),a={default:1});if(o)for(const i in s)_e(i)||i in a||delete s[i]};function Ce(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ke=0;function Ae(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Ce(),o=new Set;let a=!1;const u=s.app={_uid:ke++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(u,...e)):(0,i.mf)(t)&&(o.add(t),t(u,...e))),u},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),u},component(t,e){return e?(s.components[t]=e,u):s.components[t]},directive(t,e){return e?(s.directives[t]=e,u):s.directives[t]},mount(i,o,c){if(!a){0;const l=rn(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,c),a=!0,u._container=i,i.__vue_app__=u,Pn(l.component)||l.component.proxy}},unmount(){a&&(t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return s.provides[t]=e,u}};return u}}function Re(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Re(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(mt(o)&&!a)return;const u=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,c=a?null:u,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,l,12,[c,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const s=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,u):(0,i.kJ)(n)?n.includes(u)||n.push(u):e?(d[h]=[u],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[u],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,(0,i.RI)(p,h)&&(p[h]=c)):(0,r.dq)(h)&&(h.value=c,t.k&&(d[t.k]=c))};c?(s.id=-1,Ne(s,n)):s()}else 0}}function Oe(){}const Ne=Q;function xe(t){return Pe(t)}function Pe(t,e){Oe();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:c,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:v}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,u=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ye(t,e)&&(r=Z(t),W(t,i,s,!0),t=null),-2===e.patchFlag&&(u=!1,e.dynamicChildren=null);const{type:c,ref:l,shapeFlag:h}=e;switch(c){case je:_(t,e,n,r);break;case Ve:w(t,e,n,r);break;case Be:null==t&&b(e,n,r,o);break;case Fe:L(t,e,n,r,i,s,o,a,u);break;default:1&h?S(t,e,n,r,i,s,o,a,u):6&h?M(t,e,n,r,i,s,o,a,u):(64&h||128&h)&&c.process(t,e,n,r,i,s,o,a,u,et)}null!=l&&i&&Re(l,t&&t.ref,s,e||t,!e)},_=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,i,s,o,a,u)=>{o=o||"svg"===e.type,null==t?k(e,n,r,i,s,o,a,u):x(t,e,i,s,o,a,u)},k=(t,e,n,r,o,c,l,h)=>{let d,p;const{type:g,props:v,shapeFlag:y,transition:_,patchFlag:w,dirs:b}=t;if(t.el&&void 0!==m&&-1===w)d=t.el=m(t.el);else{if(d=t.el=u(t.type,c,v&&v.is,v),8&y?f(d,t.children):16&y&&R(t.children,d,null,r,o,c&&"foreignObject"!==g,l,h),b&&Ft(t,null,r,"created"),v){for(const e in v)"value"===e||(0,i.Gg)(e)||a(d,e,null,v[e],c,t.children,r,o,Y);"value"in v&&a(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&gn(p,r,t)}A(d,t,t.scopeId,l,r)}b&&Ft(t,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;E&&_.beforeEnter(d),s(d,e,n),((p=v&&v.onVnodeMounted)||E||b)&&Ne((()=>{p&&gn(p,r,t),E&&_.enter(d),b&&Ft(t,null,r,"mounted")}),o)},A=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,u=0)=>{for(let c=u;c<t.length;c++){const u=t[c]=a?fn(t[c]):hn(t[c]);y(null,u,e,n,r,i,s,o,a)}},x=(t,e,n,r,s,o,u)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&De(n,!1),(m=g.onVnodeBeforeUpdate)&&gn(m,n,e,t),d&&Ft(e,t,n,"beforeUpdate"),n&&De(n,!0);const v=s&&"foreignObject"!==e.type;if(h?P(t.dynamicChildren,h,c,n,r,v,o):u||B(t,e,c,null,n,r,v,o,!1),l>0){if(16&l)D(c,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(c,"class",null,g.class,s),4&l&&a(c,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],u=p[o],l=g[o];l===u&&"value"!==o||a(c,o,u,l,s,t.children,n,r,Y)}}1&l&&t.children!==e.children&&f(c,e.children)}else u||null!=h||D(c,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&Ne((()=>{m&&gn(m,n,e,t),d&&Ft(e,t,n,"updated")}),r)},P=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const u=t[a],c=e[a],l=u.el&&(u.type===Fe||!Ye(u,c)||70&u.shapeFlag)?d(u.el):n;y(u,c,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s,o,u)=>{if(n!==r){for(const c in r){if((0,i.Gg)(c))continue;const l=r[c],h=n[c];l!==h&&"value"!==c&&a(t,c,h,l,u,e.children,s,o,Y)}if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(t,c,n[c],null,u,e.children,s,o,Y);"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),R(e.children,n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(P(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&Le(t,e,!0)):B(t,e,n,f,i,o,a,u,l)},M=(t,e,n,r,i,s,o,a,u)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,u):U(e,n,r,i,s,o,u):F(t,e,u)},U=(t,e,n,r,i,s,o)=>{const a=t.component=yn(t,r,i);if(vt(t)&&(a.ctx.renderer=et),kn(a),a.asyncDep){if(i&&i.registerDep(a,j),!t.el){const t=a.subTree=rn(Ve);w(null,t,e,n)}}else j(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(K(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,C(r.update),r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,s,o,a,u)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:c,vnode:l}=t,h=n;0,De(t,!1),n?(n.el=l.el,V(t,n,u)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&gn(e,c,n,l),De(t,!0);const f=z(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&G(t,f.el),s&&Ne(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Ne((()=>gn(e,c,n,l)),o)}else{let r;const{el:u,props:c}=e,{bm:l,m:h,parent:f}=t,d=mt(e);if(De(t,!1),l&&(0,i.ir)(l),!d&&(r=c&&c.onVnodeBeforeMount)&&gn(r,f,e),De(t,!0),u&&rt){const n=()=>{t.subTree=z(t),rt(u,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=z(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Ne(h,o),!d&&(r=c&&c.onVnodeMounted)){const t=e;Ne((()=>gn(r,f,t)),o)}(256&e.shapeFlag||f&&mt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Ne(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(c,(()=>T(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,De(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,he(t,e.props,i,n),Se(t,e.children,n),(0,r.Jd)(),O(void 0,t.update),(0,r.lk)()},B=(t,e,n,r,i,s,o,a,u=!1)=>{const c=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(c,h,n,r,i,s,o,a,u);if(256&d)return void $(c,h,n,r,i,s,o,a,u)}8&p?(16&l&&Y(c,i,s),h!==c&&f(n,h)):16&l?16&p?q(c,h,n,r,i,s,o,a,u):Y(c,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,u))},$=(t,e,n,r,s,o,a,u,c)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=c?fn(e[d]):hn(e[d]);y(t[d],r,n,null,s,o,a,u,c)}l>h?Y(t,s,o,!0,!1,f):R(e,n,r,s,o,a,u,c,f)},q=(t,e,n,r,s,o,a,u,c)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=c?fn(e[l]):hn(e[l]);if(!Ye(r,i))break;y(r,i,n,null,s,o,a,u,c),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=c?fn(e[d]):hn(e[d]);if(!Ye(r,i))break;y(r,i,n,null,s,o,a,u,c),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=c?fn(e[l]):hn(e[l]),n,i,s,o,a,u,c),l++}}else if(l>d)while(l<=f)W(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=c?fn(e[l]):hn(e[l]);null!=t.key&&m.set(t.key,l)}let v,_=0;const w=d-g+1;let b=!1,E=0;const I=new Array(w);for(l=0;l<w;l++)I[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===I[v-g]&&Ye(r,e[v])){i=v;break}void 0===i?W(r,s,o,!0):(I[i-g]=l+1,i>=E?E=i:b=!0,y(r,e[i],n,null,s,o,a,u,c),_++)}const T=b?Me(I):i.Z6;for(v=T.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===I[l]?y(null,i,n,f,s,o,a,u,c):b&&(v<0||l!==T[v]?H(i,n,f,2):v--)}}},H=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:u,children:c,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Fe){s(o,e,n);for(let t=0;t<c.length;t++)H(c[t],e,n,r);return void s(t.anchor,e,n)}if(a===Be)return void E(t,e,n);const h=2!==r&&1&l&&u;if(h)if(0===r)u.beforeEnter(o),s(o,e,n),Ne((()=>u.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=u,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,e,n)},W=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Re(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!mt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&gn(g,e,t),6&l)X(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Ft(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):c&&(s!==Fe||h>0&&64&h)?Y(c,e,n,!1,!0):(s===Fe&&384&h||!i&&16&l)&&Y(u,e,n),r&&J(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&Ne((()=>{g&&gn(g,e,t),d&&Ft(t,null,e,"unmounted")}),n)},J=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fe)return void Q(n,r);if(e===Be)return void I(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},X=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:u}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,t,e,n)),u&&Ne(u,e),Ne((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)W(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),N(),e._vnode=t},et={p:y,um:W,m:H,r:J,mt:U,mc:R,pc:B,pbc:P,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ae(tt,nt)}}function De({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Le(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=fn(s[i]),e.el=t.el),n||Le(t,e))}}function Me(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const u=t[r];if(0!==u){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ue=t=>t.__isTeleport;const Fe=Symbol(void 0),je=Symbol(void 0),Ve=Symbol(void 0),Be=Symbol(void 0),$e=[];let ze=null;function qe(t=!1){$e.push(ze=t?null:[])}function He(){$e.pop(),ze=$e[$e.length-1]||null}let Ke=1;function We(t){Ke+=t}function Ge(t){return t.dynamicChildren=Ke>0?ze||i.Z6:null,He(),Ke>0&&ze&&ze.push(t),t}function Je(t,e,n,r,i,s){return Ge(nn(t,e,n,r,i,s,!0))}function Qe(t,e,n,r,i){return Ge(rn(t,e,n,r,i,!0))}function Xe(t){return!!t&&!0===t.__v_isVNode}function Ye(t,e){return t.type===e.type&&t.key===e.key}const Ze="__vInternal",tn=({key:t})=>null!=t?t:null,en=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:U,r:t,k:e,f:!!n}:t:null;function nn(t,e=null,n=null,r=0,s=null,o=(t===Fe?0:1),a=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tn(e),ref:e&&en(e),scopeId:F,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return u?(dn(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),Ke>0&&!a&&ze&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&ze.push(c),c}const rn=sn;function sn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Bt||(t=Ve),Xe(t)){const r=an(t,e,!0);return n&&dn(r,n),Ke>0&&!a&&ze&&(6&r.shapeFlag?ze[ze.indexOf(t)]=r:ze.push(r)),r.patchFlag|=-2,r}if(Ln(t)&&(t=t.__vccOpts),e){e=on(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const u=(0,i.HD)(t)?1:J(t)?128:Ue(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return nn(t,e,n,s,o,u,a,!0)}function on(t){return t?(0,r.X3)(t)||Ze in t?(0,i.l7)({},t):t:null}function an(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,u=e?pn(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&tn(u),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(en(e)):[s,en(e)]:en(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor};return c}function un(t=" ",e=0){return rn(je,null,t,e)}function cn(t,e){const n=rn(Be,null,t);return n.staticCount=e,n}function ln(t="",e=!1){return e?(qe(),Qe(Ve,null,t)):rn(Ve,null,t)}function hn(t){return null==t||"boolean"===typeof t?rn(Ve):(0,i.kJ)(t)?rn(Fe,null,t.slice()):"object"===typeof t?fn(t):rn(je,null,String(t))}function fn(t){return null===t.el||t.memo?t:an(t)}function dn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),dn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ze in e?3===r&&U&&(1===U.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=U}}else(0,i.mf)(e)?(e={default:e,_ctx:U},n=32):(e=String(e),64&r?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function pn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function gn(t,e,n,r=null){o(t,e,7,[n,r])}const mn=Ce();let vn=0;function yn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||mn,a={uid:vn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pe(s,o),emitsOptions:L(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let _n=null;const wn=()=>_n||U,bn=t=>{_n=t,t.scope.on()},En=()=>{_n&&_n.scope.off(),_n=null};function In(t){return 4&t.vnode.shapeFlag}let Tn,Sn,Cn=!1;function kn(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,i=In(t);le(t,n,i,e),Te(t,r);const s=i?An(t,e):void 0;return Cn=!1,s}function An(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Jt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?xn(t):null;bn(t),(0,r.Jd)();const u=s(o,t,0,[t.props,n]);if((0,r.lk)(),En(),(0,i.tI)(u)){if(u.then(En,En),e)return u.then((n=>{Rn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else Rn(t,u,e)}else On(t,e)}function Rn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),On(t,n)}function On(t,e,n){const s=t.type;if(!t.render){if(!e&&Tn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Tn(e,u)}}t.render=s.render||i.dG,Sn&&Sn(t)}bn(t),(0,r.Jd)(),Xt(t),(0,r.lk)(),En()}function Nn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function xn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Nn(t))},slots:t.slots,emit:t.emit,expose:e}}function Pn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Gt?Gt[n](t):void 0}}))}function Dn(t){return(0,i.mf)(t)&&t.displayName||t.name}function Ln(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Mn=(t,e)=>(0,r.Fl)(t,e,Cn);function Un(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Xe(e)?rn(t,null,[e]):rn(t,e):rn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Xe(n)&&(n=[n]),rn(t,e,n))}Symbol("");const Fn="3.2.36"},7156:function(t,e,n){"use strict";n.d(e,{C_:function(){return l},DM:function(){return C},E9:function(){return W},F7:function(){return y},Gg:function(){return D},HD:function(){return A},He:function(){return H},Kn:function(){return R},NO:function(){return m},Nj:function(){return q},Od:function(){return b},PO:function(){return P},RI:function(){return I},Z6:function(){return p},_A:function(){return U},_N:function(){return S},aU:function(){return $},dG:function(){return g},e1:function(){return s},hR:function(){return B},ir:function(){return z},j5:function(){return o},kC:function(){return V},kJ:function(){return T},kT:function(){return d},l7:function(){return w},mf:function(){return k},rs:function(){return j},tI:function(){return O},tR:function(){return _},zw:function(){return h}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(t){if(T(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=A(r)?c(r):o(r);if(i)for(const t in i)e[t]=i[t]}return e}return A(t)||R(t)?t:void 0}const a=/;(?![^(]*\))/g,u=/:(.+)/;function c(t){const e={};return t.split(a).forEach((t=>{if(t){const n=t.split(u);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function l(t){let e="";if(A(t))e=t;else if(T(t))for(let n=0;n<t.length;n++){const r=l(t[n]);r&&(e+=r+" ")}else if(R(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h=t=>A(t)?t:null==t?"":T(t)||R(t)&&(t.toString===N||!k(t.toString))?JSON.stringify(t,f,2):String(t),f=(t,e)=>e&&e.__v_isRef?f(t,e.value):S(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:C(e)?{[`Set(${e.size})`]:[...e.values()]}:!R(e)||T(e)||P(e)?e:String(e),d={},p=[],g=()=>{},m=()=>!1,v=/^on[^a-z]/,y=t=>v.test(t),_=t=>t.startsWith("onUpdate:"),w=Object.assign,b=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},E=Object.prototype.hasOwnProperty,I=(t,e)=>E.call(t,e),T=Array.isArray,S=t=>"[object Map]"===x(t),C=t=>"[object Set]"===x(t),k=t=>"function"===typeof t,A=t=>"string"===typeof t,R=t=>null!==t&&"object"===typeof t,O=t=>R(t)&&k(t.then)&&k(t.catch),N=Object.prototype.toString,x=t=>N.call(t),P=t=>"[object Object]"===x(t),D=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},M=/-(\w)/g,U=L((t=>t.replace(M,((t,e)=>e?e.toUpperCase():"")))),F=/\B([A-Z])/g,j=L((t=>t.replace(F,"-$1").toLowerCase())),V=L((t=>t.charAt(0).toUpperCase()+t.slice(1))),B=L((t=>t?`on${V(t)}`:"")),$=(t,e)=>!Object.is(t,e),z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},q=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},H=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let K;const W=()=>K||(K="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3233:function(t,e,n){"use strict";n.d(e,{ri:function(){return Ft},bM:function(){return Ot},nr:function(){return Rt},D2:function(){return Dt}});n(7658);var r=n(7156),i=n(3396);n(4958);function s(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=s(o);function u(t){return!!t||""===t}function c(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=l(t[r],e[r]);return n}function l(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=m(t),r=m(e),n||r)return!(!n||!r)&&c(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!l(t[n],e[n]))return!1}}return String(t)===String(e)}function h(t,e){return t.findIndex((t=>l(t,e)))}const f=/^on[^a-z]/,d=t=>f.test(t),p=t=>t.startsWith("onUpdate:"),g=Object.assign,m=(Object.prototype.hasOwnProperty,Array.isArray),v=t=>"[object Set]"===T(t),y=t=>"[object Date]"===T(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,I=Object.prototype.toString,T=t=>I.call(t),S=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},C=/-(\w)/g,k=(S((t=>t.replace(C,((t,e)=>e?e.toUpperCase():"")))),/\B([A-Z])/g),A=S((t=>t.replace(k,"-$1").toLowerCase())),R=S((t=>t.charAt(0).toUpperCase()+t.slice(1))),O=(S((t=>t?`on${R(t)}`:"")),(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)}),N=t=>{const e=parseFloat(t);return isNaN(e)?t:e};const x="http://www.w3.org/2000/svg",P="undefined"!==typeof document?document:null,D=P&&P.createElement("template"),L={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?P.createElementNS(x,t):P.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>P.createTextNode(t),createComment:t=>P.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>P.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{D.innerHTML=r?`<svg>${t}</svg>`:t;const i=D.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function M(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function U(t,e,n){const r=t.style,i=w(n);if(n&&!i){for(const t in n)j(r,t,n[t]);if(e&&!w(e))for(const t in e)null==n[t]&&j(r,t,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const F=/\s*!important$/;function j(t,e,n){if(m(n))n.forEach((n=>j(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$(t,e);F.test(n)?t.setProperty(A(r),n.replace(F,""),"important"):t[r]=n}}const V=["Webkit","Moz","ms"],B={};function $(t,e){const n=B[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return B[e]=i;i=R(i);for(let r=0;r<V.length;r++){const n=V[r]+i;if(n in t)return B[e]=n}return e}const z="http://www.w3.org/1999/xlink";function q(t,e,n,r,i){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(z,e.slice(6,e.length)):t.setAttributeNS(z,e,n);else{const r=a(e);null==n||r&&!u(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function H(t,e,n,r,i,s,o){if("innerHTML"===e||"textContent"===e)return r&&o(r,i,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let a=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=u(n):null==n&&"string"===r?(n="",a=!0):"number"===r&&(n=0,a=!0)}try{t[e]=n}catch(c){0}a&&t.removeAttribute(e)}const[K,W]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let G=0;const J=Promise.resolve(),Q=()=>{G=0},X=()=>G||(J.then(Q),G=K());function Y(t,e,n,r){t.addEventListener(e,n,r)}function Z(t,e,n,r){t.removeEventListener(e,n,r)}function tt(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=nt(e);if(r){const o=s[e]=rt(r,i);Y(t,n,o,a)}else o&&(Z(t,n,o,a),s[e]=void 0)}}const et=/(?:Once|Passive|Capture)$/;function nt(t){let e;if(et.test(t)){let n;e={};while(n=t.match(et))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[A(t.slice(2)),e]}function rt(t,e){const n=t=>{const r=t.timeStamp||K();(W||r>=n.attached-1)&&(0,i.$d)(it(t,n.value),e,5,[t])};return n.value=t,n.attached=X(),n}function it(t,e){if(m(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const st=/^on[a-z]/,ot=(t,e,n,r,i=!1,s,o,a,u)=>{"class"===e?M(t,r,i):"style"===e?U(t,n,r):d(e)?p(e)||tt(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):at(t,e,r,i))?H(t,e,r,s,o,a,u):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),q(t,e,r,i))};function at(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&st.test(e)&&_(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!st.test(e)||!w(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const ut="transition",ct="animation",lt=(t,{slots:e})=>(0,i.h)(i.P$,pt(t),e);lt.displayName="Transition";const ht={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ft=(lt.props=g({},i.P$.props,ht),(t,e=[])=>{m(t)?t.forEach((t=>t(...e))):t&&t(...e)}),dt=t=>!!t&&(m(t)?t.some((t=>t.length>1)):t.length>1);function pt(t){const e={};for(const g in t)g in ht||(e[g]=t[g]);if(!1===t.css)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:c=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=gt(i),m=p&&p[0],v=p&&p[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:I=y,onAppear:T=_,onAppearCancelled:S=w}=e,C=(t,e,n)=>{yt(t,e?l:a),yt(t,e?c:o),n&&n()},k=(t,e)=>{t._isLeaving=!1,yt(t,h),yt(t,d),yt(t,f),e&&e()},A=t=>(e,n)=>{const i=t?T:_,o=()=>C(e,t,n);ft(i,[e,o]),_t((()=>{yt(e,t?u:s),vt(e,t?l:a),dt(i)||bt(e,r,m,o)}))};return g(e,{onBeforeEnter(t){ft(y,[t]),vt(t,s),vt(t,o)},onBeforeAppear(t){ft(I,[t]),vt(t,u),vt(t,c)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);vt(t,h),St(),vt(t,f),_t((()=>{t._isLeaving&&(yt(t,h),vt(t,d),dt(b)||bt(t,r,v,n))})),ft(b,[t,n])},onEnterCancelled(t){C(t,!1),ft(w,[t])},onAppearCancelled(t){C(t,!0),ft(S,[t])},onLeaveCancelled(t){k(t),ft(E,[t])}})}function gt(t){if(null==t)return null;if(E(t))return[mt(t.enter),mt(t.leave)];{const e=mt(t);return[e,e]}}function mt(t){const e=N(t);return e}function vt(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function yt(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _t(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let wt=0;function bt(t,e,n,r){const i=t._endId=++wt,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:u}=Et(t,e);if(!o)return r();const c=o+"end";let l=0;const h=()=>{t.removeEventListener(c,f),s()},f=e=>{e.target===t&&++l>=u&&h()};setTimeout((()=>{l<u&&h()}),a+1),t.addEventListener(c,f)}function Et(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(ut+"Delay"),s=r(ut+"Duration"),o=It(i,s),a=r(ct+"Delay"),u=r(ct+"Duration"),c=It(a,u);let l=null,h=0,f=0;e===ut?o>0&&(l=ut,h=o,f=s.length):e===ct?c>0&&(l=ct,h=c,f=u.length):(h=Math.max(o,c),l=h>0?o>c?ut:ct:null,f=l?l===ut?s.length:u.length:0);const d=l===ut&&/\b(transform|all)(,|$)/.test(n[ut+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function It(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Tt(e)+Tt(t[n]))))}function Tt(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function St(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Ct=t=>{const e=t.props["onUpdate:modelValue"]||!1;return m(e)?t=>O(e,t):e};function kt(t){t.target.composing=!0}function At(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ct(i);const s=r||i.props&&"number"===i.props.type;Y(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),s&&(r=N(r)),t._assign(r)})),n&&Y(t,"change",(()=>{t.value=t.value.trim()})),e||(Y(t,"compositionstart",kt),Y(t,"compositionend",At),Y(t,"change",At))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ct(s),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===e)return;if((i||"number"===t.type)&&N(t.value)===e)return}const o=null==e?"":e;t.value!==o&&(t.value=o)}};const Ot={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=v(e);Y(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?N(xt(t)):xt(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=Ct(r)},mounted(t,{value:e}){Nt(t,e)},beforeUpdate(t,e,n){t._assign=Ct(n)},updated(t,{value:e}){Nt(t,e)}};function Nt(t,e){const n=t.multiple;if(!n||m(e)||v(e)){for(let r=0,i=t.options.length;r<i;r++){const i=t.options[r],s=xt(i);if(n)m(e)?i.selected=h(e,s)>-1:i.selected=e.has(s);else if(l(xt(i),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function xt(t){return"_value"in t?t._value:t.value}const Pt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dt=(t,e)=>n=>{if(!("key"in n))return;const r=A(n.key);return e.some((t=>t===r||Pt[t]===r))?t(n):void 0};const Lt=g({patchProp:ot},L);let Mt;function Ut(){return Mt||(Mt=(0,i.Us)(Lt))}const Ft=(...t)=>{const e=Ut().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=jt(t);if(!r)return;const i=e._component;_(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function jt(t){if(w(t)){const e=document.querySelector(t);return e}return t}},9016:function(t,e,n){var r=n(9159),i=r.Symbol;t.exports=i},6423:function(t,e,n){var r=n(9016),i=n(2366),s=n(2886),o="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function c(t){return null==t?void 0===t?a:o:u&&u in Object(t)?i(t):s(t)}t.exports=c},6009:function(t,e,n){var r=n(1626),i=/^\s+/;function s(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=s},791:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},2366:function(t,e,n){var r=n(9016),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0;function u(t){var e=s.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var i=o.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=u},2886:function(t){var e=Object.prototype,n=e.toString;function r(t){return n.call(t)}t.exports=r},9159:function(t,e,n){var r=n(791),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();t.exports=s},1626:function(t){var e=/\s/;function n(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=n},3738:function(t,e,n){var r=n(150),i=n(657),s=n(2012),o="Expected a function",a=Math.max,u=Math.min;function c(t,e,n){var c,l,h,f,d,p,g=0,m=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function _(e){var n=c,r=l;return c=l=void 0,g=e,f=t.apply(r,n),f}function w(t){return g=t,d=setTimeout(I,e),m?_(t):f}function b(t){var n=t-p,r=t-g,i=e-n;return v?u(i,h-r):i}function E(t){var n=t-p,r=t-g;return void 0===p||n>=e||n<0||v&&r>=h}function I(){var t=i();if(E(t))return T(t);d=setTimeout(I,b(t))}function T(t){return d=void 0,y&&c?_(t):(c=l=void 0,f)}function S(){void 0!==d&&clearTimeout(d),g=0,c=p=l=d=void 0}function C(){return void 0===d?f:T(i())}function k(){var t=i(),n=E(t);if(c=arguments,l=this,p=t,n){if(void 0===d)return w(p);if(v)return clearTimeout(d),d=setTimeout(I,e),_(p)}return void 0===d&&(d=setTimeout(I,e)),f}return e=s(e)||0,r(n)&&(m=!!n.leading,v="maxWait"in n,h=v?a(s(n.maxWait)||0,e):h,y="trailing"in n?!!n.trailing:y),k.cancel=S,k.flush=C,k}t.exports=c},150:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},4430:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},7691:function(t,e,n){var r=n(6423),i=n(4430),s="[object Symbol]";function o(t){return"symbol"==typeof t||i(t)&&r(t)==s}t.exports=o},4806:function(t,e,n){var r;t=n.nmd(t),n(7658),function(){var i,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",d=1,p=2,g=4,m=1,v=2,y=1,_=2,w=4,b=8,E=16,I=32,T=64,S=128,C=256,k=512,A=30,R="...",O=800,N=16,x=1,P=2,D=3,L=1/0,M=9007199254740991,U=17976931348623157e292,F=NaN,j=4294967295,V=j-1,B=j>>>1,$=[["ary",S],["bind",y],["bindKey",_],["curry",b],["curryRight",E],["flip",k],["partial",I],["partialRight",T],["rearg",C]],z="[object Arguments]",q="[object Array]",H="[object AsyncFunction]",K="[object Boolean]",W="[object Date]",G="[object DOMException]",J="[object Error]",Q="[object Function]",X="[object GeneratorFunction]",Y="[object Map]",Z="[object Number]",tt="[object Null]",et="[object Object]",nt="[object Promise]",rt="[object Proxy]",it="[object RegExp]",st="[object Set]",ot="[object String]",at="[object Symbol]",ut="[object Undefined]",ct="[object WeakMap]",lt="[object WeakSet]",ht="[object ArrayBuffer]",ft="[object DataView]",dt="[object Float32Array]",pt="[object Float64Array]",gt="[object Int8Array]",mt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",bt="[object Uint32Array]",Et=/\b__p \+= '';/g,It=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,kt=RegExp(St.source),At=RegExp(Ct.source),Rt=/<%-([\s\S]+?)%>/g,Ot=/<%([\s\S]+?)%>/g,Nt=/<%=([\s\S]+?)%>/g,xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pt=/^\w*$/,Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Lt.source),Ut=/^\s+/,Ft=/\s/,jt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Vt=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,$t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/[()=,{}\[\]\/\s]/,qt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kt=/\w*$/,Wt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Jt=/^\[object .+?Constructor\]$/,Qt=/^0o[0-7]+$/i,Xt=/^(?:0|[1-9]\d*)$/,Yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee="\\ud800-\\udfff",ne="\\u0300-\\u036f",re="\\ufe20-\\ufe2f",ie="\\u20d0-\\u20ff",se=ne+re+ie,oe="\\u2700-\\u27bf",ae="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",he=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fe="A-Z\\xc0-\\xd6\\xd8-\\xde",de="\\ufe0e\\ufe0f",pe=ue+ce+le+he,ge="['’]",me="["+ee+"]",ve="["+pe+"]",ye="["+se+"]",_e="\\d+",we="["+oe+"]",be="["+ae+"]",Ee="[^"+ee+pe+_e+oe+ae+fe+"]",Ie="\\ud83c[\\udffb-\\udfff]",Te="(?:"+ye+"|"+Ie+")",Se="[^"+ee+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+fe+"]",Re="\\u200d",Oe="(?:"+be+"|"+Ee+")",Ne="(?:"+Ae+"|"+Ee+")",xe="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",Pe="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",De=Te+"?",Le="["+de+"]?",Me="(?:"+Re+"(?:"+[Se,Ce,ke].join("|")+")"+Le+De+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",je=Le+De+Me,Ve="(?:"+[we,Ce,ke].join("|")+")"+je,Be="(?:"+[Se+ye+"?",ye,Ce,ke,me].join("|")+")",$e=RegExp(ge,"g"),ze=RegExp(ye,"g"),qe=RegExp(Ie+"(?="+Ie+")|"+Be+je,"g"),He=RegExp([Ae+"?"+be+"+"+xe+"(?="+[ve,Ae,"$"].join("|")+")",Ne+"+"+Pe+"(?="+[ve,Ae+Oe,"$"].join("|")+")",Ae+"?"+Oe+"+"+xe,Ae+"+"+Pe,Fe,Ue,_e,Ve].join("|"),"g"),Ke=RegExp("["+Re+ee+se+de+"]"),We=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ge=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Je=-1,Qe={};Qe[dt]=Qe[pt]=Qe[gt]=Qe[mt]=Qe[vt]=Qe[yt]=Qe[_t]=Qe[wt]=Qe[bt]=!0,Qe[z]=Qe[q]=Qe[ht]=Qe[K]=Qe[ft]=Qe[W]=Qe[J]=Qe[Q]=Qe[Y]=Qe[Z]=Qe[et]=Qe[it]=Qe[st]=Qe[ot]=Qe[ct]=!1;var Xe={};Xe[z]=Xe[q]=Xe[ht]=Xe[ft]=Xe[K]=Xe[W]=Xe[dt]=Xe[pt]=Xe[gt]=Xe[mt]=Xe[vt]=Xe[Y]=Xe[Z]=Xe[et]=Xe[it]=Xe[st]=Xe[ot]=Xe[at]=Xe[yt]=Xe[_t]=Xe[wt]=Xe[bt]=!0,Xe[J]=Xe[Q]=Xe[ct]=!1;var Ye={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},en={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nn=parseFloat,rn=parseInt,sn="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,on="object"==typeof self&&self&&self.Object===Object&&self,an=sn||on||Function("return this")(),un=e&&!e.nodeType&&e,cn=un&&t&&!t.nodeType&&t,ln=cn&&cn.exports===un,hn=ln&&sn.process,fn=function(){try{var t=cn&&cn.require&&cn.require("util").types;return t||hn&&hn.binding&&hn.binding("util")}catch(e){}}(),dn=fn&&fn.isArrayBuffer,pn=fn&&fn.isDate,gn=fn&&fn.isMap,mn=fn&&fn.isRegExp,vn=fn&&fn.isSet,yn=fn&&fn.isTypedArray;function _n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function wn(t,e,n,r){var i=-1,s=null==t?0:t.length;while(++i<s){var o=t[i];e(r,o,n(o),t)}return r}function bn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function En(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function In(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function Tn(t,e){var n=-1,r=null==t?0:t.length,i=0,s=[];while(++n<r){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function Cn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function kn(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function An(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Rn(t,e,n,r){var i=-1,s=null==t?0:t.length;r&&s&&(n=t[++i]);while(++i<s)n=e(n,t[i],i,t);return n}function On(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Nn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var xn=Bn("length");function Pn(t){return t.split("")}function Dn(t){return t.match($t)||[]}function Ln(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,s=n+(r?1:-1);while(r?s--:++s<i)if(e(t[s],s,t))return s;return-1}function Un(t,e,n){return e===e?dr(t,e,n):Mn(t,jn,n)}function Fn(t,e,n,r){var i=n-1,s=t.length;while(++i<s)if(r(t[i],e))return i;return-1}function jn(t){return t!==t}function Vn(t,e){var n=null==t?0:t.length;return n?Hn(t,e)/n:F}function Bn(t){return function(e){return null==e?i:e[t]}}function $n(t){return function(e){return null==t?i:t[e]}}function zn(t,e,n,r,i){return i(t,(function(t,i,s){n=r?(r=!1,t):e(n,t,i,s)})),n}function qn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Hn(t,e){var n,r=-1,s=t.length;while(++r<s){var o=e(t[r]);o!==i&&(n=n===i?o:n+o)}return n}function Kn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Wn(t,e){return kn(e,(function(e){return[e,t[e]]}))}function Gn(t){return t?t.slice(0,vr(t)+1).replace(Ut,""):t}function Jn(t){return function(e){return t(e)}}function Qn(t,e){return kn(e,(function(e){return t[e]}))}function Xn(t,e){return t.has(e)}function Yn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function Zn(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var er=$n(Ye),nr=$n(Ze);function rr(t){return"\\"+en[t]}function ir(t,e){return null==t?i:t[e]}function sr(t){return Ke.test(t)}function or(t){return We.test(t)}function ar(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function cr(t,e){return function(n){return t(e(n))}}function lr(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n];o!==e&&o!==f||(t[n]=f,s[i++]=n)}return s}function hr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function dr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function pr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function gr(t){return sr(t)?_r(t):xn(t)}function mr(t){return sr(t)?wr(t):Pn(t)}function vr(t){var e=t.length;while(e--&&Ft.test(t.charAt(e)));return e}var yr=$n(tn);function _r(t){var e=qe.lastIndex=0;while(qe.test(t))++e;return e}function wr(t){return t.match(qe)||[]}function br(t){return t.match(He)||[]}var Er=function t(e){e=null==e?an:Ir.defaults(an.Object(),e,Ir.pick(an,Ge));var n=e.Array,r=e.Date,Ft=e.Error,$t=e.Function,ee=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,se=e.TypeError,oe=n.prototype,ae=$t.prototype,ue=ne.prototype,ce=e["__core-js_shared__"],le=ae.toString,he=ue.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ue.toString,ge=le.call(ne),me=an._,ve=re("^"+le.call(he).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=ln?e.Buffer:i,_e=e.Symbol,we=e.Uint8Array,be=ye?ye.allocUnsafe:i,Ee=cr(ne.getPrototypeOf,ne),Ie=ne.create,Te=ue.propertyIsEnumerable,Se=oe.splice,Ce=_e?_e.isConcatSpreadable:i,ke=_e?_e.iterator:i,Ae=_e?_e.toStringTag:i,Re=function(){try{var t=Wo(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Oe=e.clearTimeout!==an.clearTimeout&&e.clearTimeout,Ne=r&&r.now!==an.Date.now&&r.now,xe=e.setTimeout!==an.setTimeout&&e.setTimeout,Pe=ee.ceil,De=ee.floor,Le=ne.getOwnPropertySymbols,Me=ye?ye.isBuffer:i,Ue=e.isFinite,Fe=oe.join,je=cr(ne.keys,ne),Ve=ee.max,Be=ee.min,qe=r.now,He=e.parseInt,Ke=ee.random,We=oe.reverse,Ye=Wo(e,"DataView"),Ze=Wo(e,"Map"),tn=Wo(e,"Promise"),en=Wo(e,"Set"),sn=Wo(e,"WeakMap"),on=Wo(ne,"create"),un=sn&&new sn,cn={},hn=xa(Ye),fn=xa(Ze),xn=xa(tn),Pn=xa(en),$n=xa(sn),dr=_e?_e.prototype:i,_r=dr?dr.valueOf:i,wr=dr?dr.toString:i;function Er(t){if(Sl(t)&&!ul(t)&&!(t instanceof kr)){if(t instanceof Cr)return t;if(he.call(t,"__wrapped__"))return Da(t)}return new Cr(t)}var Tr=function(){function t(){}return function(e){if(!Tl(e))return{};if(Ie)return Ie(e);t.prototype=e;var n=new t;return t.prototype=i,n}}();function Sr(){}function Cr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=i}function kr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=j,this.__views__=[]}function Ar(){var t=new kr(this.__wrapped__);return t.__actions__=ro(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ro(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ro(this.__views__),t}function Rr(){if(this.__filtered__){var t=new kr(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Or(){var t=this.__wrapped__.value(),e=this.__dir__,n=ul(t),r=e<0,i=n?t.length:0,s=Yo(0,i,this.__views__),o=s.start,a=s.end,u=a-o,c=r?a:o-1,l=this.__iteratees__,h=l.length,f=0,d=Be(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Fs(t,this.__actions__);var p=[];t:while(u--&&f<d){c+=e;var g=-1,m=t[c];while(++g<h){var v=l[g],y=v.iteratee,_=v.type,w=y(m);if(_==P)m=w;else if(!w){if(_==x)continue t;break t}}p[f++]=m}return p}function Nr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function xr(){this.__data__=on?on(null):{},this.size=0}function Pr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Dr(t){var e=this.__data__;if(on){var n=e[t];return n===l?i:n}return he.call(e,t)?e[t]:i}function Lr(t){var e=this.__data__;return on?e[t]!==i:he.call(e,t)}function Mr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=on&&e===i?l:e,this}function Ur(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Fr(){this.__data__=[],this.size=0}function jr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Se.call(e,n,1),--this.size,!0}function Vr(t){var e=this.__data__,n=li(e,t);return n<0?i:e[n][1]}function Br(t){return li(this.__data__,t)>-1}function $r(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function zr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function qr(){this.size=0,this.__data__={hash:new Nr,map:new(Ze||Ur),string:new Nr}}function Hr(t){var e=Ho(this,t)["delete"](t);return this.size-=e?1:0,e}function Kr(t){return Ho(this,t).get(t)}function Wr(t){return Ho(this,t).has(t)}function Gr(t,e){var n=Ho(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Jr(t){var e=-1,n=null==t?0:t.length;this.__data__=new zr;while(++e<n)this.add(t[e])}function Qr(t){return this.__data__.set(t,l),this}function Xr(t){return this.__data__.has(t)}function Yr(t){var e=this.__data__=new Ur(t);this.size=e.size}function Zr(){this.__data__=new Ur,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Ze||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=ul(t),r=!n&&al(t),i=!n&&!r&&dl(t),s=!n&&!r&&!i&&Vl(t),o=n||r||i||s,a=o?Kn(t.length,ie):[],u=a.length;for(var c in t)!e&&!he.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||oa(c,u))||a.push(c);return a}function si(t){var e=t.length;return e?t[vs(0,e-1)]:i}function oi(t,e){return Ra(ro(t),mi(e,0,t.length))}function ai(t){return Ra(ro(t))}function ui(t,e,n){(n!==i&&!il(t[e],n)||n===i&&!(e in t))&&pi(t,e,n)}function ci(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==i||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,s){e(r,t,n(t),s)})),r}function fi(t,e){return t&&io(e,Eh(e),t)}function di(t,e){return t&&io(e,Ih(e),t)}function pi(t,e,n){"__proto__"==e&&Re?Re(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,s=e.length,o=n(s),a=null==t;while(++r<s)o[r]=a?i:mh(t,e[r]);return o}function mi(t,e,n){return t===t&&(n!==i&&(t=t<=n?t:n),e!==i&&(t=t>=e?t:e)),t}function vi(t,e,n,r,s,o){var a,u=e&d,c=e&p,l=e&g;if(n&&(a=s?n(t,r,s,o):n(t)),a!==i)return a;if(!Tl(t))return t;var h=ul(t);if(h){if(a=ea(t),!u)return ro(t,a)}else{var f=Xo(t),m=f==Q||f==X;if(dl(t))return Ws(t,u);if(f==et||f==z||m&&!s){if(a=c||m?{}:na(t),!u)return c?oo(t,di(a,t)):so(t,fi(a,t))}else{if(!Xe[f])return s?t:{};a=ra(t,f,u)}}o||(o=new Yr);var v=o.get(t);if(v)return v;o.set(t,a),Ul(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,o))})):Cl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,o))}));var y=l?c?Vo:jo:c?Ih:Eh,_=h?i:y(t);return bn(_||t,(function(r,i){_&&(i=r,r=t[i]),ci(a,i,vi(r,e,n,i,t,o))})),a}function yi(t){var e=Eh(t);return function(n){return _i(n,t,e)}}function _i(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var s=n[r],o=e[s],a=t[s];if(a===i&&!(s in t)||!o(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new se(u);return Sa((function(){t.apply(i,n)}),e)}function bi(t,e,n,r){var i=-1,s=Sn,a=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=kn(e,Jn(n))),r?(s=Cn,a=!1):e.length>=o&&(s=Xn,a=!1,e=new Jr(e));t:while(++i<u){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,a&&f===f){var d=l;while(d--)if(e[d]===f)continue t;c.push(h)}else s(e,f,r)||c.push(h)}return c}Er.templateSettings={escape:Rt,evaluate:Ot,interpolate:Nt,variable:"",imports:{_:Er}},Er.prototype=Sr.prototype,Er.prototype.constructor=Er,Cr.prototype=Tr(Sr.prototype),Cr.prototype.constructor=Cr,kr.prototype=Tr(Sr.prototype),kr.prototype.constructor=kr,Nr.prototype.clear=xr,Nr.prototype["delete"]=Pr,Nr.prototype.get=Dr,Nr.prototype.has=Lr,Nr.prototype.set=Mr,Ur.prototype.clear=Fr,Ur.prototype["delete"]=jr,Ur.prototype.get=Vr,Ur.prototype.has=Br,Ur.prototype.set=$r,zr.prototype.clear=qr,zr.prototype["delete"]=Hr,zr.prototype.get=Kr,zr.prototype.has=Wr,zr.prototype.set=Gr,Jr.prototype.add=Jr.prototype.push=Qr,Jr.prototype.has=Xr,Yr.prototype.clear=Zr,Yr.prototype["delete"]=ti,Yr.prototype.get=ei,Yr.prototype.has=ni,Yr.prototype.set=ri;var Ei=co(Ni),Ii=co(xi,!0);function Ti(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Si(t,e,n){var r=-1,s=t.length;while(++r<s){var o=t[r],a=e(o);if(null!=a&&(u===i?a===a&&!jl(a):n(a,u)))var u=a,c=o}return c}function Ci(t,e,n,r){var s=t.length;n=Gl(n),n<0&&(n=-n>s?0:s+n),r=r===i||r>s?s:Gl(r),r<0&&(r+=s),r=n>r?0:Jl(r);while(n<r)t[n++]=e;return t}function ki(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function Ai(t,e,n,r,i){var s=-1,o=t.length;n||(n=sa),i||(i=[]);while(++s<o){var a=t[s];e>0&&n(a)?e>1?Ai(a,e-1,n,r,i):An(i,a):r||(i[i.length]=a)}return i}var Ri=lo(),Oi=lo(!0);function Ni(t,e){return t&&Ri(t,e,Eh)}function xi(t,e){return t&&Oi(t,e,Eh)}function Pi(t,e){return Tn(e,(function(e){return bl(t[e])}))}function Di(t,e){e=zs(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[Na(e[n++])];return n&&n==r?t:i}function Li(t,e,n){var r=e(t);return ul(t)?r:An(r,n(t))}function Mi(t){return null==t?t===i?ut:tt:Ae&&Ae in ne(t)?Go(t):_a(t)}function Ui(t,e){return t>e}function Fi(t,e){return null!=t&&he.call(t,e)}function ji(t,e){return null!=t&&e in ne(t)}function Vi(t,e,n){return t>=Be(e,n)&&t<Ve(e,n)}function Bi(t,e,r){var s=r?Cn:Sn,o=t[0].length,a=t.length,u=a,c=n(a),l=1/0,h=[];while(u--){var f=t[u];u&&e&&(f=kn(f,Jn(e))),l=Be(f.length,l),c[u]=!r&&(e||o>=120&&f.length>=120)?new Jr(u&&f):i}f=t[0];var d=-1,p=c[0];t:while(++d<o&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Xn(p,m):s(h,m,r))){u=a;while(--u){var v=c[u];if(!(v?Xn(v,m):s(t[u],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function $i(t,e,n,r){return Ni(t,(function(t,i,s){e(r,n(t),i,s)})),r}function zi(t,e,n){e=zs(e,t),t=ba(t,e);var r=null==t?t:t[Na(su(e))];return null==r?i:_n(r,t,n)}function qi(t){return Sl(t)&&Mi(t)==z}function Hi(t){return Sl(t)&&Mi(t)==ht}function Ki(t){return Sl(t)&&Mi(t)==W}function Wi(t,e,n,r,i){return t===e||(null==t||null==e||!Sl(t)&&!Sl(e)?t!==t&&e!==e:Gi(t,e,n,r,Wi,i))}function Gi(t,e,n,r,i,s){var o=ul(t),a=ul(e),u=o?q:Xo(t),c=a?q:Xo(e);u=u==z?et:u,c=c==z?et:c;var l=u==et,h=c==et,f=u==c;if(f&&dl(t)){if(!dl(e))return!1;o=!0,l=!1}if(f&&!l)return s||(s=new Yr),o||Vl(t)?Lo(t,e,n,r,i,s):Mo(t,e,u,n,r,i,s);if(!(n&m)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,v=p?e.value():e;return s||(s=new Yr),i(g,v,n,r,s)}}return!!f&&(s||(s=new Yr),Uo(t,e,n,r,i,s))}function Ji(t){return Sl(t)&&Xo(t)==Y}function Qi(t,e,n,r){var s=n.length,o=s,a=!r;if(null==t)return!o;t=ne(t);while(s--){var u=n[s];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++s<o){u=n[s];var c=u[0],l=t[c],h=u[1];if(a&&u[2]){if(l===i&&!(c in t))return!1}else{var f=new Yr;if(r)var d=r(l,h,c,t,e,f);if(!(d===i?Wi(h,l,m|v,r,f):d))return!1}}return!0}function Xi(t){if(!Tl(t)||ha(t))return!1;var e=bl(t)?ve:Jt;return e.test(xa(t))}function Yi(t){return Sl(t)&&Mi(t)==it}function Zi(t){return Sl(t)&&Xo(t)==st}function ts(t){return Sl(t)&&Il(t.length)&&!!Qe[Mi(t)]}function es(t){return"function"==typeof t?t:null==t?Nf:"object"==typeof t?ul(t)?as(t[0],t[1]):os(t):qf(t)}function ns(t){if(!da(t))return je(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function rs(t){if(!Tl(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function is(t,e){return t<e}function ss(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,s){i[++r]=e(t,n,s)})),i}function os(t){var e=Ko(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Qi(n,t,e)}}function as(t,e){return ua(t)&&pa(e)?ga(Na(t),e):function(n){var r=mh(n,t);return r===i&&r===e?yh(n,t):Wi(e,r,m|v)}}function us(t,e,n,r,s){t!==e&&Ri(e,(function(o,a){if(s||(s=new Yr),Tl(o))cs(t,e,a,n,us,r,s);else{var u=r?r(Ia(t,a),o,a+"",t,e,s):i;u===i&&(u=o),ui(t,a,u)}}),Ih)}function cs(t,e,n,r,s,o,a){var u=Ia(t,n),c=Ia(e,n),l=a.get(c);if(l)ui(t,n,l);else{var h=o?o(u,c,n+"",t,e,a):i,f=h===i;if(f){var d=ul(c),p=!d&&dl(c),g=!d&&!p&&Vl(c);h=c,d||p||g?ul(u)?h=u:hl(u)?h=ro(u):p?(f=!1,h=Ws(c,!0)):g?(f=!1,h=Ys(c,!0)):h=[]:Dl(c)||al(c)?(h=u,al(u)?h=Xl(u):Tl(u)&&!bl(u)||(h=na(c))):f=!1}f&&(a.set(c,h),s(h,c,r,o,a),a["delete"](c)),ui(t,n,h)}}function ls(t,e){var n=t.length;if(n)return e+=e<0?n:0,oa(e,n)?t[e]:i}function hs(t,e,n){e=e.length?kn(e,(function(t){return ul(t)?function(e){return Di(e,1===t.length?t[0]:t)}:t})):[Nf];var r=-1;e=kn(e,Jn(qo()));var i=ss(t,(function(t,n,i){var s=kn(e,(function(e){return e(t)}));return{criteria:s,index:++r,value:t}}));return qn(i,(function(t,e){return to(t,e,n)}))}function fs(t,e){return ds(t,e,(function(e,n){return yh(t,n)}))}function ds(t,e,n){var r=-1,i=e.length,s={};while(++r<i){var o=e[r],a=Di(t,o);n(a,o)&&Is(s,zs(o,t),a)}return s}function ps(t){return function(e){return Di(e,t)}}function gs(t,e,n,r){var i=r?Fn:Un,s=-1,o=e.length,a=t;t===e&&(e=ro(e)),n&&(a=kn(t,Jn(n)));while(++s<o){var u=0,c=e[s],l=n?n(c):c;while((u=i(a,l,u,r))>-1)a!==t&&Se.call(a,u,1),Se.call(t,u,1)}return t}function ms(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==s){var s=i;oa(i)?Se.call(t,i,1):Ls(t,i)}}return t}function vs(t,e){return t+De(Ke()*(e-t+1))}function ys(t,e,r,i){var s=-1,o=Ve(Pe((e-t)/(r||1)),0),a=n(o);while(o--)a[i?o:++s]=t,t+=r;return a}function _s(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=De(e/2),e&&(t+=t)}while(e);return n}function ws(t,e){return Ca(wa(t,e,Nf),t+"")}function bs(t){return si(Bh(t))}function Es(t,e){var n=Bh(t);return Ra(n,mi(e,0,n.length))}function Is(t,e,n,r){if(!Tl(t))return t;e=zs(e,t);var s=-1,o=e.length,a=o-1,u=t;while(null!=u&&++s<o){var c=Na(e[s]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(s!=a){var h=u[c];l=r?r(h,c,u):i,l===i&&(l=Tl(h)?h:oa(e[s+1])?[]:{})}ci(u,c,l),u=u[c]}return t}var Ts=un?function(t,e){return un.set(t,e),t}:Nf,Ss=Re?function(t,e){return Re(t,"toString",{configurable:!0,enumerable:!1,value:kf(e),writable:!0})}:Nf;function Cs(t){return Ra(Bh(t))}function ks(t,e,r){var i=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;var o=n(s);while(++i<s)o[i]=t[i+e];return o}function As(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Rs(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=B){while(r<i){var s=r+i>>>1,o=t[s];null!==o&&!jl(o)&&(n?o<=e:o<e)?r=s+1:i=s}return i}return Os(t,e,Nf,n)}function Os(t,e,n,r){var s=0,o=null==t?0:t.length;if(0===o)return 0;e=n(e);var a=e!==e,u=null===e,c=jl(e),l=e===i;while(s<o){var h=De((s+o)/2),f=n(t[h]),d=f!==i,p=null===f,g=f===f,m=jl(f);if(a)var v=r||g;else v=l?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?s=h+1:o=h}return Be(o,V)}function Ns(t,e){var n=-1,r=t.length,i=0,s=[];while(++n<r){var o=t[n],a=e?e(o):o;if(!n||!il(a,u)){var u=a;s[i++]=0===o?0:o}}return s}function xs(t){return"number"==typeof t?t:jl(t)?F:+t}function Ps(t){if("string"==typeof t)return t;if(ul(t))return kn(t,Ps)+"";if(jl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ds(t,e,n){var r=-1,i=Sn,s=t.length,a=!0,u=[],c=u;if(n)a=!1,i=Cn;else if(s>=o){var l=e?null:Ro(t);if(l)return hr(l);a=!1,i=Xn,c=new Jr}else c=e?[]:u;t:while(++r<s){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,a&&f===f){var d=c.length;while(d--)if(c[d]===f)continue t;e&&c.push(f),u.push(h)}else i(c,f,n)||(c!==u&&c.push(f),u.push(h))}return u}function Ls(t,e){return e=zs(e,t),t=ba(t,e),null==t||delete t[Na(su(e))]}function Ms(t,e,n,r){return Is(t,e,n(Di(t,e)),r)}function Us(t,e,n,r){var i=t.length,s=r?i:-1;while((r?s--:++s<i)&&e(t[s],s,t));return n?ks(t,r?0:s,r?s+1:i):ks(t,r?s+1:0,r?i:s)}function Fs(t,e){var n=t;return n instanceof kr&&(n=n.value()),Rn(e,(function(t,e){return e.func.apply(e.thisArg,An([t],e.args))}),n)}function js(t,e,r){var i=t.length;if(i<2)return i?Ds(t[0]):[];var s=-1,o=n(i);while(++s<i){var a=t[s],u=-1;while(++u<i)u!=s&&(o[s]=bi(o[s]||a,t[u],e,r))}return Ds(Ai(o,1),e,r)}function Vs(t,e,n){var r=-1,s=t.length,o=e.length,a={};while(++r<s){var u=r<o?e[r]:i;n(a,t[r],u)}return a}function Bs(t){return hl(t)?t:[]}function $s(t){return"function"==typeof t?t:Nf}function zs(t,e){return ul(t)?t:ua(t,e)?[t]:Oa(Zl(t))}var qs=ws;function Hs(t,e,n){var r=t.length;return n=n===i?r:n,!e&&n>=r?t:ks(t,e,n)}var Ks=Oe||function(t){return an.clearTimeout(t)};function Ws(t,e){if(e)return t.slice();var n=t.length,r=be?be(n):new t.constructor(n);return t.copy(r),r}function Gs(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Js(t,e){var n=e?Gs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Qs(t){var e=new t.constructor(t.source,Kt.exec(t));return e.lastIndex=t.lastIndex,e}function Xs(t){return _r?ne(_r.call(t)):{}}function Ys(t,e){var n=e?Gs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Zs(t,e){if(t!==e){var n=t!==i,r=null===t,s=t===t,o=jl(t),a=e!==i,u=null===e,c=e===e,l=jl(e);if(!u&&!l&&!o&&t>e||o&&a&&c&&!u&&!l||r&&a&&c||!n&&c||!s)return 1;if(!r&&!o&&!l&&t<e||l&&n&&s&&!r&&!o||u&&n&&s||!a&&s||!c)return-1}return 0}function to(t,e,n){var r=-1,i=t.criteria,s=e.criteria,o=i.length,a=n.length;while(++r<o){var u=Zs(i[r],s[r]);if(u){if(r>=a)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}function eo(t,e,r,i){var s=-1,o=t.length,a=r.length,u=-1,c=e.length,l=Ve(o-a,0),h=n(c+l),f=!i;while(++u<c)h[u]=e[u];while(++s<a)(f||s<o)&&(h[r[s]]=t[s]);while(l--)h[u++]=t[s++];return h}function no(t,e,r,i){var s=-1,o=t.length,a=-1,u=r.length,c=-1,l=e.length,h=Ve(o-u,0),f=n(h+l),d=!i;while(++s<h)f[s]=t[s];var p=s;while(++c<l)f[p+c]=e[c];while(++a<u)(d||s<o)&&(f[p+r[a]]=t[s++]);return f}function ro(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function io(t,e,n,r){var s=!n;n||(n={});var o=-1,a=e.length;while(++o<a){var u=e[o],c=r?r(n[u],t[u],u,n,t):i;c===i&&(c=t[u]),s?pi(n,u,c):ci(n,u,c)}return n}function so(t,e){return io(t,Jo(t),e)}function oo(t,e){return io(t,Qo(t),e)}function ao(t,e){return function(n,r){var i=ul(n)?wn:hi,s=e?e():{};return i(n,t,qo(r,2),s)}}function uo(t){return ws((function(e,n){var r=-1,s=n.length,o=s>1?n[s-1]:i,a=s>2?n[2]:i;o=t.length>3&&"function"==typeof o?(s--,o):i,a&&aa(n[0],n[1],a)&&(o=s<3?i:o,s=1),e=ne(e);while(++r<s){var u=n[r];u&&t(e,u,r,o)}return e}))}function co(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,s=e?i:-1,o=ne(n);while(e?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}function lo(t){return function(e,n,r){var i=-1,s=ne(e),o=r(e),a=o.length;while(a--){var u=o[t?a:++i];if(!1===n(s[u],u,s))break}return e}}function ho(t,e,n){var r=e&y,i=go(t);function s(){var e=this&&this!==an&&this instanceof s?i:t;return e.apply(r?n:this,arguments)}return s}function fo(t){return function(e){e=Zl(e);var n=sr(e)?mr(e):i,r=n?n[0]:e.charAt(0),s=n?Hs(n,1).join(""):e.slice(1);return r[t]()+s}}function po(t){return function(e){return Rn(Ef(Gh(e).replace($e,"")),t,"")}}function go(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Tr(t.prototype),r=t.apply(n,e);return Tl(r)?r:n}}function mo(t,e,r){var s=go(t);function o(){var a=arguments.length,u=n(a),c=a,l=zo(o);while(c--)u[c]=arguments[c];var h=a<3&&u[0]!==l&&u[a-1]!==l?[]:lr(u,l);if(a-=h.length,a<r)return ko(t,e,_o,o.placeholder,i,u,h,i,i,r-a);var f=this&&this!==an&&this instanceof o?s:t;return _n(f,this,u)}return o}function vo(t){return function(e,n,r){var s=ne(e);if(!ll(e)){var o=qo(n,3);e=Eh(e),n=function(t){return o(s[t],t,s)}}var a=t(e,n,r);return a>-1?s[o?e[a]:a]:i}}function yo(t){return Fo((function(e){var n=e.length,r=n,s=Cr.prototype.thru;t&&e.reverse();while(r--){var o=e[r];if("function"!=typeof o)throw new se(u);if(s&&!a&&"wrapper"==$o(o))var a=new Cr([],!0)}r=a?r:n;while(++r<n){o=e[r];var c=$o(o),l="wrapper"==c?Bo(o):i;a=l&&la(l[0])&&l[1]==(S|b|I|C)&&!l[4].length&&1==l[9]?a[$o(l[0])].apply(a,l[3]):1==o.length&&la(o)?a[c]():a.thru(o)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&ul(r))return a.plant(r).value();var i=0,s=n?e[i].apply(this,t):r;while(++i<n)s=e[i].call(this,s);return s}}))}function _o(t,e,r,s,o,a,u,c,l,h){var f=e&S,d=e&y,p=e&_,g=e&(b|E),m=e&k,v=p?i:go(t);function w(){var i=arguments.length,y=n(i),_=i;while(_--)y[_]=arguments[_];if(g)var b=zo(w),E=tr(y,b);if(s&&(y=eo(y,s,o,g)),a&&(y=no(y,a,u,g)),i-=E,g&&i<h){var I=lr(y,b);return ko(t,e,_o,w.placeholder,r,y,I,c,l,h-i)}var T=d?r:this,S=p?T[t]:t;return i=y.length,c?y=Ea(y,c):m&&i>1&&y.reverse(),f&&l<i&&(y.length=l),this&&this!==an&&this instanceof w&&(S=v||go(S)),S.apply(T,y)}return w}function wo(t,e){return function(n,r){return $i(n,t,e(r),{})}}function bo(t,e){return function(n,r){var s;if(n===i&&r===i)return e;if(n!==i&&(s=n),r!==i){if(s===i)return r;"string"==typeof n||"string"==typeof r?(n=Ps(n),r=Ps(r)):(n=xs(n),r=xs(r)),s=t(n,r)}return s}}function Eo(t){return Fo((function(e){return e=kn(e,Jn(qo())),ws((function(n){var r=this;return t(e,(function(t){return _n(t,r,n)}))}))}))}function Io(t,e){e=e===i?" ":Ps(e);var n=e.length;if(n<2)return n?_s(e,t):e;var r=_s(e,Pe(t/gr(e)));return sr(e)?Hs(mr(r),0,t).join(""):r.slice(0,t)}function To(t,e,r,i){var s=e&y,o=go(t);function a(){var e=-1,u=arguments.length,c=-1,l=i.length,h=n(l+u),f=this&&this!==an&&this instanceof a?o:t;while(++c<l)h[c]=i[c];while(u--)h[c++]=arguments[++e];return _n(f,s?r:this,h)}return a}function So(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=i),e=Wl(e),n===i?(n=e,e=0):n=Wl(n),r=r===i?e<n?1:-1:Wl(r),ys(e,n,r,t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Ql(e),n=Ql(n)),t(e,n)}}function ko(t,e,n,r,s,o,a,u,c,l){var h=e&b,f=h?a:i,d=h?i:a,p=h?o:i,g=h?i:o;e|=h?I:T,e&=~(h?T:I),e&w||(e&=~(y|_));var m=[t,e,s,p,f,g,d,u,c,l],v=n.apply(i,m);return la(t)&&Ta(v,m),v.placeholder=r,ka(v,t,e)}function Ao(t){var e=ee[t];return function(t,n){if(t=Ql(t),n=null==n?0:Be(Gl(n),292),n&&Ue(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var Ro=en&&1/hr(new en([,-0]))[1]==L?function(t){return new en(t)}:jf;function Oo(t){return function(e){var n=Xo(e);return n==Y?ur(e):n==st?fr(e):Wn(e,t(e))}}function No(t,e,n,r,s,o,a,c){var l=e&_;if(!l&&"function"!=typeof t)throw new se(u);var h=r?r.length:0;if(h||(e&=~(I|T),r=s=i),a=a===i?a:Ve(Gl(a),0),c=c===i?c:Gl(c),h-=s?s.length:0,e&T){var f=r,d=s;r=s=i}var p=l?i:Bo(t),g=[t,e,n,r,s,f,d,o,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],s=g[4],c=g[9]=g[9]===i?l?0:t.length:Ve(g[9]-h,0),!c&&e&(b|E)&&(e&=~(b|E)),e&&e!=y)m=e==b||e==E?mo(t,e,c):e!=I&&e!=(y|I)||s.length?_o.apply(i,g):To(t,e,n,r);else var m=ho(t,e,n);var v=p?Ts:Ta;return ka(v(m,g),t,e)}function xo(t,e,n,r){return t===i||il(t,ue[n])&&!he.call(r,n)?e:t}function Po(t,e,n,r,s,o){return Tl(t)&&Tl(e)&&(o.set(e,t),us(t,e,i,Po,o),o["delete"](e)),t}function Do(t){return Dl(t)?i:t}function Lo(t,e,n,r,s,o){var a=n&m,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=o.get(t),h=o.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&v?new Jr:i;o.set(t,e),o.set(e,t);while(++f<u){var g=t[f],y=e[f];if(r)var _=a?r(y,g,f,e,t,o):r(g,y,f,t,e,o);if(_!==i){if(_)continue;d=!1;break}if(p){if(!Nn(e,(function(t,e){if(!Xn(p,e)&&(g===t||s(g,t,n,r,o)))return p.push(e)}))){d=!1;break}}else if(g!==y&&!s(g,y,n,r,o)){d=!1;break}}return o["delete"](t),o["delete"](e),d}function Mo(t,e,n,r,i,s,o){switch(n){case ft:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ht:return!(t.byteLength!=e.byteLength||!s(new we(t),new we(e)));case K:case W:case Z:return il(+t,+e);case J:return t.name==e.name&&t.message==e.message;case it:case ot:return t==e+"";case Y:var a=ur;case st:var u=r&m;if(a||(a=hr),t.size!=e.size&&!u)return!1;var c=o.get(t);if(c)return c==e;r|=v,o.set(t,e);var l=Lo(a(t),a(e),r,i,s,o);return o["delete"](t),l;case at:if(_r)return _r.call(t)==_r.call(e)}return!1}function Uo(t,e,n,r,s,o){var a=n&m,u=jo(t),c=u.length,l=jo(e),h=l.length;if(c!=h&&!a)return!1;var f=c;while(f--){var d=u[f];if(!(a?d in e:he.call(e,d)))return!1}var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var v=!0;o.set(t,e),o.set(e,t);var y=a;while(++f<c){d=u[f];var _=t[d],w=e[d];if(r)var b=a?r(w,_,d,e,t,o):r(_,w,d,t,e,o);if(!(b===i?_===w||s(_,w,n,r,o):b)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var E=t.constructor,I=e.constructor;E==I||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof I&&I instanceof I||(v=!1)}return o["delete"](t),o["delete"](e),v}function Fo(t){return Ca(wa(t,i,Ga),t+"")}function jo(t){return Li(t,Eh,Jo)}function Vo(t){return Li(t,Ih,Qo)}var Bo=un?function(t){return un.get(t)}:jf;function $o(t){var e=t.name+"",n=cn[e],r=he.call(cn,e)?n.length:0;while(r--){var i=n[r],s=i.func;if(null==s||s==t)return i.name}return e}function zo(t){var e=he.call(Er,"placeholder")?Er:t;return e.placeholder}function qo(){var t=Er.iteratee||xf;return t=t===xf?es:t,arguments.length?t(arguments[0],arguments[1]):t}function Ho(t,e){var n=t.__data__;return ca(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ko(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Wo(t,e){var n=ir(t,e);return Xi(n)?n:i}function Go(t){var e=he.call(t,Ae),n=t[Ae];try{t[Ae]=i;var r=!0}catch(o){}var s=pe.call(t);return r&&(e?t[Ae]=n:delete t[Ae]),s}var Jo=Le?function(t){return null==t?[]:(t=ne(t),Tn(Le(t),(function(e){return Te.call(t,e)})))}:Gf,Qo=Le?function(t){var e=[];while(t)An(e,Jo(t)),t=Ee(t);return e}:Gf,Xo=Mi;function Yo(t,e,n){var r=-1,i=n.length;while(++r<i){var s=n[r],o=s.size;switch(s.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Be(e,t+o);break;case"takeRight":t=Ve(t,e-o);break}}return{start:t,end:e}}function Zo(t){var e=t.match(Vt);return e?e[1].split(Bt):[]}function ta(t,e,n){e=zs(e,t);var r=-1,i=e.length,s=!1;while(++r<i){var o=Na(e[r]);if(!(s=null!=t&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=null==t?0:t.length,!!i&&Il(i)&&oa(o,i)&&(ul(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Tr(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ht:return Gs(t);case K:case W:return new r(+t);case ft:return Js(t,n);case dt:case pt:case gt:case mt:case vt:case yt:case _t:case wt:case bt:return Ys(t,n);case Y:return new r;case Z:case ot:return new r(t);case it:return Qs(t);case st:return new r;case at:return Xs(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(jt,"{\n/* [wrapped with "+e+"] */\n")}function sa(t){return ul(t)||al(t)||!!(Ce&&t&&t[Ce])}function oa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Xt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Tl(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&oa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ua(t,e){if(ul(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!jl(t))||(Pt.test(t)||!xt.test(t)||null!=e&&t in ne(e))}function ca(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=$o(t),n=Er[e];if("function"!=typeof n||!(e in kr.prototype))return!1;if(t===n)return!0;var r=Bo(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(Ye&&Xo(new Ye(new ArrayBuffer(1)))!=ft||Ze&&Xo(new Ze)!=Y||tn&&Xo(tn.resolve())!=nt||en&&Xo(new en)!=st||sn&&Xo(new sn)!=ct)&&(Xo=function(t){var e=Mi(t),n=e==et?t.constructor:i,r=n?xa(n):"";if(r)switch(r){case hn:return ft;case fn:return Y;case xn:return nt;case Pn:return st;case $n:return ct}return e});var fa=ce?bl:Jf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ue;return t===n}function pa(t){return t===t&&!Tl(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==i||t in ne(n)))}}function ma(t){var e=Vc(t,(function(t){return n.size===h&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,s=i<(y|_|S),o=r==S&&n==b||r==S&&n==C&&t[7].length<=e[8]||r==(S|C)&&e[7].length<=e[8]&&n==b;if(!s&&!o)return t;r&y&&(t[2]=e[2],i|=n&y?0:w);var a=e[3];if(a){var u=t[3];t[3]=u?eo(u,a,e[4]):a,t[4]=u?lr(t[3],f):e[4]}return a=e[5],a&&(u=t[5],t[5]=u?no(u,a,e[6]):a,t[6]=u?lr(t[5],f):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:Be(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function _a(t){return pe.call(t)}function wa(t,e,r){return e=Ve(e===i?t.length-1:e,0),function(){var i=arguments,s=-1,o=Ve(i.length-e,0),a=n(o);while(++s<o)a[s]=i[e+s];s=-1;var u=n(e+1);while(++s<e)u[s]=i[s];return u[e]=r(a),_n(t,this,u)}}function ba(t,e){return e.length<2?t:Di(t,ks(e,0,-1))}function Ea(t,e){var n=t.length,r=Be(e.length,n),s=ro(t);while(r--){var o=e[r];t[r]=oa(o,n)?s[o]:i}return t}function Ia(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Ta=Aa(Ts),Sa=xe||function(t,e){return an.setTimeout(t,e)},Ca=Aa(Ss);function ka(t,e,n){var r=e+"";return Ca(t,ia(r,Pa(Zo(r),n)))}function Aa(t){var e=0,n=0;return function(){var r=qe(),s=N-(r-n);if(n=r,s>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(i,arguments)}}function Ra(t,e){var n=-1,r=t.length,s=r-1;e=e===i?r:e;while(++n<e){var o=vs(n,s),a=t[o];t[o]=t[n],t[n]=a}return t.length=e,t}var Oa=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dt,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));function Na(t){if("string"==typeof t||jl(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function xa(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Pa(t,e){return bn($,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Da(t){if(t instanceof kr)return t.clone();var e=new Cr(t.__wrapped__,t.__chain__);return e.__actions__=ro(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function La(t,e,r){e=(r?aa(t,e,r):e===i)?1:Ve(Gl(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];var o=0,a=0,u=n(Pe(s/e));while(o<s)u[a++]=ks(t,o,o+=e);return u}function Ma(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var s=t[e];s&&(i[r++]=s)}return i}function Ua(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return An(ul(r)?ro(r):[r],Ai(e,1))}var Fa=ws((function(t,e){return hl(t)?bi(t,Ai(e,1,hl,!0)):[]})),ja=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,Ai(e,1,hl,!0),qo(n,2)):[]})),Va=ws((function(t,e){var n=su(e);return hl(n)&&(n=i),hl(t)?bi(t,Ai(e,1,hl,!0),i,n):[]}));function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),ks(t,e<0?0:e,r)):[]}function $a(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),e=r-e,ks(t,0,e<0?0:e)):[]}function za(t,e){return t&&t.length?Us(t,qo(e,3),!0,!0):[]}function qa(t,e){return t&&t.length?Us(t,qo(e,3),!0):[]}function Ha(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Ci(t,e,n,r)):[]}function Ka(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Gl(n);return i<0&&(i=Ve(r+i,0)),Mn(t,qo(e,3),i)}function Wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r-1;return n!==i&&(s=Gl(n),s=n<0?Ve(r+s,0):Be(s,r-1)),Mn(t,qo(e,3),s,!0)}function Ga(t){var e=null==t?0:t.length;return e?Ai(t,1):[]}function Ja(t){var e=null==t?0:t.length;return e?Ai(t,L):[]}function Qa(t,e){var n=null==t?0:t.length;return n?(e=e===i?1:Gl(e),Ai(t,e)):[]}function Xa(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ya(t){return t&&t.length?t[0]:i}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Gl(n);return i<0&&(i=Ve(r+i,0)),Un(t,e,i)}function tu(t){var e=null==t?0:t.length;return e?ks(t,0,-1):[]}var eu=ws((function(t){var e=kn(t,Bs);return e.length&&e[0]===t[0]?Bi(e):[]})),nu=ws((function(t){var e=su(t),n=kn(t,Bs);return e===su(n)?e=i:n.pop(),n.length&&n[0]===t[0]?Bi(n,qo(e,2)):[]})),ru=ws((function(t){var e=su(t),n=kn(t,Bs);return e="function"==typeof e?e:i,e&&n.pop(),n.length&&n[0]===t[0]?Bi(n,i,e):[]}));function iu(t,e){return null==t?"":Fe.call(t,e)}function su(t){var e=null==t?0:t.length;return e?t[e-1]:i}function ou(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=r;return n!==i&&(s=Gl(n),s=s<0?Ve(r+s,0):Be(s,r-1)),e===e?pr(t,e,s):Mn(t,jn,s,!0)}function au(t,e){return t&&t.length?ls(t,Gl(e)):i}var uu=ws(cu);function cu(t,e){return t&&t.length&&e&&e.length?gs(t,e):t}function lu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,qo(n,2)):t}function hu(t,e,n){return t&&t.length&&e&&e.length?gs(t,e,i,n):t}var fu=Fo((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return ms(t,kn(e,(function(t){return oa(t,n)?+t:t})).sort(Zs)),r}));function du(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],s=t.length;e=qo(e,3);while(++r<s){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r))}return ms(t,i),n}function pu(t){return null==t?t:We.call(t)}function gu(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Gl(e),n=n===i?r:Gl(n)),ks(t,e,n)):[]}function mu(t,e){return Rs(t,e)}function vu(t,e,n){return Os(t,e,qo(n,2))}function yu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e);if(r<n&&il(t[r],e))return r}return-1}function _u(t,e){return Rs(t,e,!0)}function wu(t,e,n){return Os(t,e,qo(n,2),!0)}function bu(t,e){var n=null==t?0:t.length;if(n){var r=Rs(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Eu(t){return t&&t.length?Ns(t):[]}function Iu(t,e){return t&&t.length?Ns(t,qo(e,2)):[]}function Tu(t){var e=null==t?0:t.length;return e?ks(t,1,e):[]}function Su(t,e,n){return t&&t.length?(e=n||e===i?1:Gl(e),ks(t,0,e<0?0:e)):[]}function Cu(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===i?1:Gl(e),e=r-e,ks(t,e<0?0:e,r)):[]}function ku(t,e){return t&&t.length?Us(t,qo(e,3),!1,!0):[]}function Au(t,e){return t&&t.length?Us(t,qo(e,3)):[]}var Ru=ws((function(t){return Ds(Ai(t,1,hl,!0))})),Ou=ws((function(t){var e=su(t);return hl(e)&&(e=i),Ds(Ai(t,1,hl,!0),qo(e,2))})),Nu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,Ds(Ai(t,1,hl,!0),i,e)}));function xu(t){return t&&t.length?Ds(t):[]}function Pu(t,e){return t&&t.length?Ds(t,qo(e,2)):[]}function Du(t,e){return e="function"==typeof e?e:i,t&&t.length?Ds(t,i,e):[]}function Lu(t){if(!t||!t.length)return[];var e=0;return t=Tn(t,(function(t){if(hl(t))return e=Ve(t.length,e),!0})),Kn(e,(function(e){return kn(t,Bn(e))}))}function Mu(t,e){if(!t||!t.length)return[];var n=Lu(t);return null==e?n:kn(n,(function(t){return _n(e,i,t)}))}var Uu=ws((function(t,e){return hl(t)?bi(t,e):[]})),Fu=ws((function(t){return js(Tn(t,hl))})),ju=ws((function(t){var e=su(t);return hl(e)&&(e=i),js(Tn(t,hl),qo(e,2))})),Vu=ws((function(t){var e=su(t);return e="function"==typeof e?e:i,js(Tn(t,hl),i,e)})),Bu=ws(Lu);function $u(t,e){return Vs(t||[],e||[],ci)}function zu(t,e){return Vs(t||[],e||[],Is)}var qu=ws((function(t){var e=t.length,n=e>1?t[e-1]:i;return n="function"==typeof n?(t.pop(),n):i,Mu(t,n)}));function Hu(t){var e=Er(t);return e.__chain__=!0,e}function Ku(t,e){return e(t),t}function Wu(t,e){return e(t)}var Gu=Fo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,s=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof kr&&oa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Wu,args:[s],thisArg:i}),new Cr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(i),t}))):this.thru(s)}));function Ju(){return Hu(this)}function Qu(){return new Cr(this.value(),this.__chain__)}function Xu(){this.__values__===i&&(this.__values__=Kl(this.value()));var t=this.__index__>=this.__values__.length,e=t?i:this.__values__[this.__index__++];return{done:t,value:e}}function Yu(){return this}function Zu(t){var e,n=this;while(n instanceof Sr){var r=Da(n);r.__index__=0,r.__values__=i,e?s.__wrapped__=r:e=r;var s=r;n=n.__wrapped__}return s.__wrapped__=t,e}function tc(){var t=this.__wrapped__;if(t instanceof kr){var e=t;return this.__actions__.length&&(e=new kr(this)),e=e.reverse(),e.__actions__.push({func:Wu,args:[pu],thisArg:i}),new Cr(e,this.__chain__)}return this.thru(pu)}function ec(){return Fs(this.__wrapped__,this.__actions__)}var nc=ao((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function rc(t,e,n){var r=ul(t)?In:Ti;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}function ic(t,e){var n=ul(t)?Tn:ki;return n(t,qo(e,3))}var sc=vo(Ka),oc=vo(Wa);function ac(t,e){return Ai(mc(t,e),1)}function uc(t,e){return Ai(mc(t,e),L)}function cc(t,e,n){return n=n===i?1:Gl(n),Ai(mc(t,e),n)}function lc(t,e){var n=ul(t)?bn:Ei;return n(t,qo(e,3))}function hc(t,e){var n=ul(t)?En:Ii;return n(t,qo(e,3))}var fc=ao((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function dc(t,e,n,r){t=ll(t)?t:Bh(t),n=n&&!r?Gl(n):0;var i=t.length;return n<0&&(n=Ve(i+n,0)),Fl(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pc=ws((function(t,e,r){var i=-1,s="function"==typeof e,o=ll(t)?n(t.length):[];return Ei(t,(function(t){o[++i]=s?_n(e,t,r):zi(t,e,r)})),o})),gc=ao((function(t,e,n){pi(t,n,e)}));function mc(t,e){var n=ul(t)?kn:ss;return n(t,qo(e,3))}function vc(t,e,n,r){return null==t?[]:(ul(e)||(e=null==e?[]:[e]),n=r?i:n,ul(n)||(n=null==n?[]:[n]),hs(t,e,n))}var yc=ao((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function _c(t,e,n){var r=ul(t)?Rn:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ei)}function wc(t,e,n){var r=ul(t)?On:zn,i=arguments.length<3;return r(t,qo(e,4),n,i,Ii)}function bc(t,e){var n=ul(t)?Tn:ki;return n(t,Bc(qo(e,3)))}function Ec(t){var e=ul(t)?si:bs;return e(t)}function Ic(t,e,n){e=(n?aa(t,e,n):e===i)?1:Gl(e);var r=ul(t)?oi:Es;return r(t,e)}function Tc(t){var e=ul(t)?ai:Cs;return e(t)}function Sc(t){if(null==t)return 0;if(ll(t))return Fl(t)?gr(t):t.length;var e=Xo(t);return e==Y||e==st?t.size:ns(t).length}function Cc(t,e,n){var r=ul(t)?Nn:As;return n&&aa(t,e,n)&&(e=i),r(t,qo(e,3))}var kc=ws((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),hs(t,Ai(e,1),[])})),Ac=Ne||function(){return an.Date.now()};function Rc(t,e){if("function"!=typeof e)throw new se(u);return t=Gl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Oc(t,e,n){return e=n?i:e,e=t&&null==e?t.length:e,No(t,S,i,i,i,i,e)}function Nc(t,e){var n;if("function"!=typeof e)throw new se(u);return t=Gl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=i),n}}var xc=ws((function(t,e,n){var r=y;if(n.length){var i=lr(n,zo(xc));r|=I}return No(t,r,e,n,i)})),Pc=ws((function(t,e,n){var r=y|_;if(n.length){var i=lr(n,zo(Pc));r|=I}return No(e,r,t,n,i)}));function Dc(t,e,n){e=n?i:e;var r=No(t,b,i,i,i,i,i,e);return r.placeholder=Dc.placeholder,r}function Lc(t,e,n){e=n?i:e;var r=No(t,E,i,i,i,i,i,e);return r.placeholder=Lc.placeholder,r}function Mc(t,e,n){var r,s,o,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new se(u);function g(e){var n=r,o=s;return r=s=i,h=e,a=t.apply(o,n),a}function m(t){return h=t,c=Sa(_,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?Be(i,o-r):i}function y(t){var n=t-l,r=t-h;return l===i||n>=e||n<0||d&&r>=o}function _(){var t=Ac();if(y(t))return w(t);c=Sa(_,v(t))}function w(t){return c=i,p&&r?g(t):(r=s=i,a)}function b(){c!==i&&Ks(c),h=0,r=l=s=c=i}function E(){return c===i?a:w(Ac())}function I(){var t=Ac(),n=y(t);if(r=arguments,s=this,l=t,n){if(c===i)return m(l);if(d)return Ks(c),c=Sa(_,e),g(l)}return c===i&&(c=Sa(_,e)),a}return e=Ql(e)||0,Tl(n)&&(f=!!n.leading,d="maxWait"in n,o=d?Ve(Ql(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),I.cancel=b,I.flush=E,I}var Uc=ws((function(t,e){return wi(t,1,e)})),Fc=ws((function(t,e,n){return wi(t,Ql(e)||0,n)}));function jc(t){return No(t,k)}function Vc(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Vc.Cache||zr),n}function Bc(t){if("function"!=typeof t)throw new se(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function $c(t){return Nc(2,t)}Vc.Cache=zr;var zc=qs((function(t,e){e=1==e.length&&ul(e[0])?kn(e[0],Jn(qo())):kn(Ai(e,1),Jn(qo()));var n=e.length;return ws((function(r){var i=-1,s=Be(r.length,n);while(++i<s)r[i]=e[i].call(this,r[i]);return _n(t,this,r)}))})),qc=ws((function(t,e){var n=lr(e,zo(qc));return No(t,I,i,e,n)})),Hc=ws((function(t,e){var n=lr(e,zo(Hc));return No(t,T,i,e,n)})),Kc=Fo((function(t,e){return No(t,C,i,i,i,e)}));function Wc(t,e){if("function"!=typeof t)throw new se(u);return e=e===i?e:Gl(e),ws(t,e)}function Gc(t,e){if("function"!=typeof t)throw new se(u);return e=null==e?0:Ve(Gl(e),0),ws((function(n){var r=n[e],i=Hs(n,0,e);return r&&An(i,r),_n(t,this,i)}))}function Jc(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new se(u);return Tl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mc(t,e,{leading:r,maxWait:e,trailing:i})}function Qc(t){return Oc(t,1)}function Xc(t,e){return qc($s(e),t)}function Yc(){if(!arguments.length)return[];var t=arguments[0];return ul(t)?t:[t]}function Zc(t){return vi(t,g)}function tl(t,e){return e="function"==typeof e?e:i,vi(t,g,e)}function el(t){return vi(t,d|g)}function nl(t,e){return e="function"==typeof e?e:i,vi(t,d|g,e)}function rl(t,e){return null==e||_i(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var sl=Co(Ui),ol=Co((function(t,e){return t>=e})),al=qi(function(){return arguments}())?qi:function(t){return Sl(t)&&he.call(t,"callee")&&!Te.call(t,"callee")},ul=n.isArray,cl=dn?Jn(dn):Hi;function ll(t){return null!=t&&Il(t.length)&&!bl(t)}function hl(t){return Sl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Sl(t)&&Mi(t)==K}var dl=Me||Jf,pl=pn?Jn(pn):Ki;function gl(t){return Sl(t)&&1===t.nodeType&&!Dl(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(ul(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||Vl(t)||al(t)))return!t.length;var e=Xo(t);if(e==Y||e==st)return!t.size;if(da(t))return!ns(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Wi(t,e)}function yl(t,e,n){n="function"==typeof n?n:i;var r=n?n(t,e):i;return r===i?Wi(t,e,i,n):!!r}function _l(t){if(!Sl(t))return!1;var e=Mi(t);return e==J||e==G||"string"==typeof t.message&&"string"==typeof t.name&&!Dl(t)}function wl(t){return"number"==typeof t&&Ue(t)}function bl(t){if(!Tl(t))return!1;var e=Mi(t);return e==Q||e==X||e==H||e==rt}function El(t){return"number"==typeof t&&t==Gl(t)}function Il(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Tl(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Sl(t){return null!=t&&"object"==typeof t}var Cl=gn?Jn(gn):Ji;function kl(t,e){return t===e||Qi(t,e,Ko(e))}function Al(t,e,n){return n="function"==typeof n?n:i,Qi(t,e,Ko(e),n)}function Rl(t){return Pl(t)&&t!=+t}function Ol(t){if(fa(t))throw new Ft(a);return Xi(t)}function Nl(t){return null===t}function xl(t){return null==t}function Pl(t){return"number"==typeof t||Sl(t)&&Mi(t)==Z}function Dl(t){if(!Sl(t)||Mi(t)!=et)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Ll=mn?Jn(mn):Yi;function Ml(t){return El(t)&&t>=-M&&t<=M}var Ul=vn?Jn(vn):Zi;function Fl(t){return"string"==typeof t||!ul(t)&&Sl(t)&&Mi(t)==ot}function jl(t){return"symbol"==typeof t||Sl(t)&&Mi(t)==at}var Vl=yn?Jn(yn):ts;function Bl(t){return t===i}function $l(t){return Sl(t)&&Xo(t)==ct}function zl(t){return Sl(t)&&Mi(t)==lt}var ql=Co(is),Hl=Co((function(t,e){return t<=e}));function Kl(t){if(!t)return[];if(ll(t))return Fl(t)?mr(t):ro(t);if(ke&&t[ke])return ar(t[ke]());var e=Xo(t),n=e==Y?ur:e==st?hr:Bh;return n(t)}function Wl(t){if(!t)return 0===t?t:0;if(t=Ql(t),t===L||t===-L){var e=t<0?-1:1;return e*U}return t===t?t:0}function Gl(t){var e=Wl(t),n=e%1;return e===e?n?e-n:e:0}function Jl(t){return t?mi(Gl(t),0,j):0}function Ql(t){if("number"==typeof t)return t;if(jl(t))return F;if(Tl(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Tl(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Gn(t);var n=Gt.test(t);return n||Qt.test(t)?rn(t.slice(2),n?2:8):Wt.test(t)?F:+t}function Xl(t){return io(t,Ih(t))}function Yl(t){return t?mi(Gl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Ps(t)}var th=uo((function(t,e){if(da(e)||ll(e))io(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ci(t,n,e[n])})),eh=uo((function(t,e){io(e,Ih(e),t)})),nh=uo((function(t,e,n,r){io(e,Ih(e),t,r)})),rh=uo((function(t,e,n,r){io(e,Eh(e),t,r)})),ih=Fo(gi);function sh(t,e){var n=Tr(t);return null==e?n:fi(n,e)}var oh=ws((function(t,e){t=ne(t);var n=-1,r=e.length,s=r>2?e[2]:i;s&&aa(e[0],e[1],s)&&(r=1);while(++n<r){var o=e[n],a=Ih(o),u=-1,c=a.length;while(++u<c){var l=a[u],h=t[l];(h===i||il(h,ue[l])&&!he.call(t,l))&&(t[l]=o[l])}}return t})),ah=ws((function(t){return t.push(i,Po),_n(kh,i,t)}));function uh(t,e){return Ln(t,qo(e,3),Ni)}function ch(t,e){return Ln(t,qo(e,3),xi)}function lh(t,e){return null==t?t:Ri(t,qo(e,3),Ih)}function hh(t,e){return null==t?t:Oi(t,qo(e,3),Ih)}function fh(t,e){return t&&Ni(t,qo(e,3))}function dh(t,e){return t&&xi(t,qo(e,3))}function ph(t){return null==t?[]:Pi(t,Eh(t))}function gh(t){return null==t?[]:Pi(t,Ih(t))}function mh(t,e,n){var r=null==t?i:Di(t,e);return r===i?n:r}function vh(t,e){return null!=t&&ta(t,e,Fi)}function yh(t,e){return null!=t&&ta(t,e,ji)}var _h=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),kf(Nf)),wh=wo((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),qo),bh=ws(zi);function Eh(t){return ll(t)?ii(t):ns(t)}function Ih(t){return ll(t)?ii(t,!0):rs(t)}function Th(t,e){var n={};return e=qo(e,3),Ni(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Sh(t,e){var n={};return e=qo(e,3),Ni(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var Ch=uo((function(t,e,n){us(t,e,n)})),kh=uo((function(t,e,n,r){us(t,e,n,r)})),Ah=Fo((function(t,e){var n={};if(null==t)return n;var r=!1;e=kn(e,(function(e){return e=zs(e,t),r||(r=e.length>1),e})),io(t,Vo(t),n),r&&(n=vi(n,d|p|g,Do));var i=e.length;while(i--)Ls(n,e[i]);return n}));function Rh(t,e){return Nh(t,Bc(qo(e)))}var Oh=Fo((function(t,e){return null==t?{}:fs(t,e)}));function Nh(t,e){if(null==t)return{};var n=kn(Vo(t),(function(t){return[t]}));return e=qo(e),ds(t,n,(function(t,n){return e(t,n[0])}))}function xh(t,e,n){e=zs(e,t);var r=-1,s=e.length;s||(s=1,t=i);while(++r<s){var o=null==t?i:t[Na(e[r])];o===i&&(r=s,o=n),t=bl(o)?o.call(t):o}return t}function Ph(t,e,n){return null==t?t:Is(t,e,n)}function Dh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Is(t,e,n,r)}var Lh=Oo(Eh),Mh=Oo(Ih);function Uh(t,e,n){var r=ul(t),i=r||dl(t)||Vl(t);if(e=qo(e,4),null==n){var s=t&&t.constructor;n=i?r?new s:[]:Tl(t)&&bl(s)?Tr(Ee(t)):{}}return(i?bn:Ni)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Fh(t,e){return null==t||Ls(t,e)}function jh(t,e,n){return null==t?t:Ms(t,e,$s(n))}function Vh(t,e,n,r){return r="function"==typeof r?r:i,null==t?t:Ms(t,e,$s(n),r)}function Bh(t){return null==t?[]:Qn(t,Eh(t))}function $h(t){return null==t?[]:Qn(t,Ih(t))}function zh(t,e,n){return n===i&&(n=e,e=i),n!==i&&(n=Ql(n),n=n===n?n:0),e!==i&&(e=Ql(e),e=e===e?e:0),mi(Ql(t),e,n)}function qh(t,e,n){return e=Wl(e),n===i?(n=e,e=0):n=Wl(n),t=Ql(t),Vi(t,e,n)}function Hh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=i),n===i&&("boolean"==typeof e?(n=e,e=i):"boolean"==typeof t&&(n=t,t=i)),t===i&&e===i?(t=0,e=1):(t=Wl(t),e===i?(e=t,t=0):e=Wl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var s=Ke();return Be(t+s*(e-t+nn("1e-"+((s+"").length-1))),e)}return vs(t,e)}var Kh=po((function(t,e,n){return e=e.toLowerCase(),t+(n?Wh(e):e)}));function Wh(t){return bf(Zl(t).toLowerCase())}function Gh(t){return t=Zl(t),t&&t.replace(Yt,er).replace(ze,"")}function Jh(t,e,n){t=Zl(t),e=Ps(e);var r=t.length;n=n===i?r:mi(Gl(n),0,r);var s=n;return n-=e.length,n>=0&&t.slice(n,s)==e}function Qh(t){return t=Zl(t),t&&At.test(t)?t.replace(Ct,nr):t}function Xh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Lt,"\\$&"):t}var Yh=po((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=po((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=fo("toLowerCase");function ef(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Io(De(i),n)+t+Io(Pe(i),n)}function nf(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;return e&&r<e?t+Io(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Gl(e);var r=e?gr(t):0;return e&&r<e?Io(e-r,n)+t:t}function sf(t,e,n){return n||null==e?e=0:e&&(e=+e),He(Zl(t).replace(Ut,""),e||0)}function of(t,e,n){return e=(n?aa(t,e,n):e===i)?1:Gl(e),_s(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var uf=po((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function cf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=i),n=n===i?j:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Ll(e))&&(e=Ps(e),!e&&sr(t))?Hs(mr(t),0,n):t.split(e,n)):[]}var lf=po((function(t,e,n){return t+(n?" ":"")+bf(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Gl(n),0,t.length),e=Ps(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=Er.templateSettings;n&&aa(t,e,n)&&(e=i),t=Zl(t),e=nh({},e,r,xo);var s,o,a=nh({},e.imports,r.imports,xo),u=Eh(a),l=Qn(a,u),h=0,f=e.interpolate||Zt,d="__p += '",p=re((e.escape||Zt).source+"|"+f.source+"|"+(f===Nt?Ht:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),g="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Je+"]")+"\n";t.replace(p,(function(e,n,r,i,a,u){return r||(r=i),d+=t.slice(h,u).replace(te,rr),n&&(s=!0,d+="' +\n__e("+n+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=u+e.length,e})),d+="';\n";var m=he.call(e,"variable")&&e.variable;if(m){if(zt.test(m))throw new Ft(c)}else d="with (obj) {\n"+d+"\n}\n";d=(o?d.replace(Et,""):d).replace(It,"$1").replace(Tt,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var v=If((function(){return $t(u,g+"return "+d).apply(i,l)}));if(v.source=d,_l(v))throw v;return v}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===i))return Gn(t);if(!t||!(e=Ps(e)))return t;var r=mr(t),s=mr(e),o=Yn(r,s),a=Zn(r,s)+1;return Hs(r,o,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.slice(0,vr(t)+1);if(!t||!(e=Ps(e)))return t;var r=mr(t),s=Zn(r,mr(e))+1;return Hs(r,0,s).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===i))return t.replace(Ut,"");if(!t||!(e=Ps(e)))return t;var r=mr(t),s=Yn(r,mr(e));return Hs(r,s).join("")}function yf(t,e){var n=A,r=R;if(Tl(e)){var s="separator"in e?e.separator:s;n="length"in e?Gl(e.length):n,r="omission"in e?Ps(e.omission):r}t=Zl(t);var o=t.length;if(sr(t)){var a=mr(t);o=a.length}if(n>=o)return t;var u=n-gr(r);if(u<1)return r;var c=a?Hs(a,0,u).join(""):t.slice(0,u);if(s===i)return c+r;if(a&&(u+=c.length-u),Ll(s)){if(t.slice(u).search(s)){var l,h=c;s.global||(s=re(s.source,Zl(Kt.exec(s))+"g")),s.lastIndex=0;while(l=s.exec(h))var f=l.index;c=c.slice(0,f===i?u:f)}}else if(t.indexOf(Ps(s),u)!=u){var d=c.lastIndexOf(s);d>-1&&(c=c.slice(0,d))}return c+r}function _f(t){return t=Zl(t),t&&kt.test(t)?t.replace(St,yr):t}var wf=po((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),bf=fo("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?i:e,e===i?or(t)?br(t):Dn(t):t.match(e)||[]}var If=ws((function(t,e){try{return _n(t,i,e)}catch(n){return _l(n)?n:new Ft(n)}})),Tf=Fo((function(t,e){return bn(e,(function(e){e=Na(e),pi(t,e,xc(t[e],t))})),t}));function Sf(t){var e=null==t?0:t.length,n=qo();return t=e?kn(t,(function(t){if("function"!=typeof t[1])throw new se(u);return[n(t[0]),t[1]]})):[],ws((function(n){var r=-1;while(++r<e){var i=t[r];if(_n(i[0],this,n))return _n(i[1],this,n)}}))}function Cf(t){return yi(vi(t,d))}function kf(t){return function(){return t}}function Af(t,e){return null==t||t!==t?e:t}var Rf=yo(),Of=yo(!0);function Nf(t){return t}function xf(t){return es("function"==typeof t?t:vi(t,d))}function Pf(t){return os(vi(t,d))}function Df(t,e){return as(t,vi(e,d))}var Lf=ws((function(t,e){return function(n){return zi(n,t,e)}})),Mf=ws((function(t,e){return function(n){return zi(t,n,e)}}));function Uf(t,e,n){var r=Eh(e),i=Pi(e,r);null!=n||Tl(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Pi(e,Eh(e)));var s=!(Tl(n)&&"chain"in n)||!!n.chain,o=bl(t);return bn(i,(function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(s||e){var n=t(this.__wrapped__),i=n.__actions__=ro(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,An([this.value()],arguments))})})),t}function Ff(){return an._===this&&(an._=me),this}function jf(){}function Vf(t){return t=Gl(t),ws((function(e){return ls(e,t)}))}var Bf=Eo(kn),$f=Eo(In),zf=Eo(Nn);function qf(t){return ua(t)?Bn(Na(t)):ps(t)}function Hf(t){return function(e){return null==t?i:Di(t,e)}}var Kf=So(),Wf=So(!0);function Gf(){return[]}function Jf(){return!1}function Qf(){return{}}function Xf(){return""}function Yf(){return!0}function Zf(t,e){if(t=Gl(t),t<1||t>M)return[];var n=j,r=Be(t,j);e=qo(e),t-=j;var i=Kn(r,e);while(++n<t)e(n);return i}function td(t){return ul(t)?kn(t,Na):jl(t)?[t]:ro(Oa(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=bo((function(t,e){return t+e}),0),rd=Ao("ceil"),id=bo((function(t,e){return t/e}),1),sd=Ao("floor");function od(t){return t&&t.length?Si(t,Nf,Ui):i}function ad(t,e){return t&&t.length?Si(t,qo(e,2),Ui):i}function ud(t){return Vn(t,Nf)}function cd(t,e){return Vn(t,qo(e,2))}function ld(t){return t&&t.length?Si(t,Nf,is):i}function hd(t,e){return t&&t.length?Si(t,qo(e,2),is):i}var fd=bo((function(t,e){return t*e}),1),dd=Ao("round"),pd=bo((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Hn(t,Nf):0}function md(t,e){return t&&t.length?Hn(t,qo(e,2)):0}return Er.after=Rc,Er.ary=Oc,Er.assign=th,Er.assignIn=eh,Er.assignInWith=nh,Er.assignWith=rh,Er.at=ih,Er.before=Nc,Er.bind=xc,Er.bindAll=Tf,Er.bindKey=Pc,Er.castArray=Yc,Er.chain=Hu,Er.chunk=La,Er.compact=Ma,Er.concat=Ua,Er.cond=Sf,Er.conforms=Cf,Er.constant=kf,Er.countBy=nc,Er.create=sh,Er.curry=Dc,Er.curryRight=Lc,Er.debounce=Mc,Er.defaults=oh,Er.defaultsDeep=ah,Er.defer=Uc,Er.delay=Fc,Er.difference=Fa,Er.differenceBy=ja,Er.differenceWith=Va,Er.drop=Ba,Er.dropRight=$a,Er.dropRightWhile=za,Er.dropWhile=qa,Er.fill=Ha,Er.filter=ic,Er.flatMap=ac,Er.flatMapDeep=uc,Er.flatMapDepth=cc,Er.flatten=Ga,Er.flattenDeep=Ja,Er.flattenDepth=Qa,Er.flip=jc,Er.flow=Rf,Er.flowRight=Of,Er.fromPairs=Xa,Er.functions=ph,Er.functionsIn=gh,Er.groupBy=fc,Er.initial=tu,Er.intersection=eu,Er.intersectionBy=nu,Er.intersectionWith=ru,Er.invert=_h,Er.invertBy=wh,Er.invokeMap=pc,Er.iteratee=xf,Er.keyBy=gc,Er.keys=Eh,Er.keysIn=Ih,Er.map=mc,Er.mapKeys=Th,Er.mapValues=Sh,Er.matches=Pf,Er.matchesProperty=Df,Er.memoize=Vc,Er.merge=Ch,Er.mergeWith=kh,Er.method=Lf,Er.methodOf=Mf,Er.mixin=Uf,Er.negate=Bc,Er.nthArg=Vf,Er.omit=Ah,Er.omitBy=Rh,Er.once=$c,Er.orderBy=vc,Er.over=Bf,Er.overArgs=zc,Er.overEvery=$f,Er.overSome=zf,Er.partial=qc,Er.partialRight=Hc,Er.partition=yc,Er.pick=Oh,Er.pickBy=Nh,Er.property=qf,Er.propertyOf=Hf,Er.pull=uu,Er.pullAll=cu,Er.pullAllBy=lu,Er.pullAllWith=hu,Er.pullAt=fu,Er.range=Kf,Er.rangeRight=Wf,Er.rearg=Kc,Er.reject=bc,Er.remove=du,Er.rest=Wc,Er.reverse=pu,Er.sampleSize=Ic,Er.set=Ph,Er.setWith=Dh,Er.shuffle=Tc,Er.slice=gu,Er.sortBy=kc,Er.sortedUniq=Eu,Er.sortedUniqBy=Iu,Er.split=cf,Er.spread=Gc,Er.tail=Tu,Er.take=Su,Er.takeRight=Cu,Er.takeRightWhile=ku,Er.takeWhile=Au,Er.tap=Ku,Er.throttle=Jc,Er.thru=Wu,Er.toArray=Kl,Er.toPairs=Lh,Er.toPairsIn=Mh,Er.toPath=td,Er.toPlainObject=Xl,Er.transform=Uh,Er.unary=Qc,Er.union=Ru,Er.unionBy=Ou,Er.unionWith=Nu,Er.uniq=xu,Er.uniqBy=Pu,Er.uniqWith=Du,Er.unset=Fh,Er.unzip=Lu,Er.unzipWith=Mu,Er.update=jh,Er.updateWith=Vh,Er.values=Bh,Er.valuesIn=$h,Er.without=Uu,Er.words=Ef,Er.wrap=Xc,Er.xor=Fu,Er.xorBy=ju,Er.xorWith=Vu,Er.zip=Bu,Er.zipObject=$u,Er.zipObjectDeep=zu,Er.zipWith=qu,Er.entries=Lh,Er.entriesIn=Mh,Er.extend=eh,Er.extendWith=nh,Uf(Er,Er),Er.add=nd,Er.attempt=If,Er.camelCase=Kh,Er.capitalize=Wh,Er.ceil=rd,Er.clamp=zh,Er.clone=Zc,Er.cloneDeep=el,Er.cloneDeepWith=nl,Er.cloneWith=tl,Er.conformsTo=rl,Er.deburr=Gh,Er.defaultTo=Af,Er.divide=id,Er.endsWith=Jh,Er.eq=il,Er.escape=Qh,Er.escapeRegExp=Xh,Er.every=rc,Er.find=sc,Er.findIndex=Ka,Er.findKey=uh,Er.findLast=oc,Er.findLastIndex=Wa,Er.findLastKey=ch,Er.floor=sd,Er.forEach=lc,Er.forEachRight=hc,Er.forIn=lh,Er.forInRight=hh,Er.forOwn=fh,Er.forOwnRight=dh,Er.get=mh,Er.gt=sl,Er.gte=ol,Er.has=vh,Er.hasIn=yh,Er.head=Ya,Er.identity=Nf,Er.includes=dc,Er.indexOf=Za,Er.inRange=qh,Er.invoke=bh,Er.isArguments=al,Er.isArray=ul,Er.isArrayBuffer=cl,Er.isArrayLike=ll,Er.isArrayLikeObject=hl,Er.isBoolean=fl,Er.isBuffer=dl,Er.isDate=pl,Er.isElement=gl,Er.isEmpty=ml,Er.isEqual=vl,Er.isEqualWith=yl,Er.isError=_l,Er.isFinite=wl,Er.isFunction=bl,Er.isInteger=El,Er.isLength=Il,Er.isMap=Cl,Er.isMatch=kl,Er.isMatchWith=Al,Er.isNaN=Rl,Er.isNative=Ol,Er.isNil=xl,Er.isNull=Nl,Er.isNumber=Pl,Er.isObject=Tl,Er.isObjectLike=Sl,Er.isPlainObject=Dl,Er.isRegExp=Ll,Er.isSafeInteger=Ml,Er.isSet=Ul,Er.isString=Fl,Er.isSymbol=jl,Er.isTypedArray=Vl,Er.isUndefined=Bl,Er.isWeakMap=$l,Er.isWeakSet=zl,Er.join=iu,Er.kebabCase=Yh,Er.last=su,Er.lastIndexOf=ou,Er.lowerCase=Zh,Er.lowerFirst=tf,Er.lt=ql,Er.lte=Hl,Er.max=od,Er.maxBy=ad,Er.mean=ud,Er.meanBy=cd,Er.min=ld,Er.minBy=hd,Er.stubArray=Gf,Er.stubFalse=Jf,Er.stubObject=Qf,Er.stubString=Xf,Er.stubTrue=Yf,Er.multiply=fd,Er.nth=au,Er.noConflict=Ff,Er.noop=jf,Er.now=Ac,Er.pad=ef,Er.padEnd=nf,Er.padStart=rf,Er.parseInt=sf,Er.random=Hh,Er.reduce=_c,Er.reduceRight=wc,Er.repeat=of,Er.replace=af,Er.result=xh,Er.round=dd,Er.runInContext=t,Er.sample=Ec,Er.size=Sc,Er.snakeCase=uf,Er.some=Cc,Er.sortedIndex=mu,Er.sortedIndexBy=vu,Er.sortedIndexOf=yu,Er.sortedLastIndex=_u,Er.sortedLastIndexBy=wu,Er.sortedLastIndexOf=bu,Er.startCase=lf,Er.startsWith=hf,Er.subtract=pd,Er.sum=gd,Er.sumBy=md,Er.template=ff,Er.times=Zf,Er.toFinite=Wl,Er.toInteger=Gl,Er.toLength=Jl,Er.toLower=df,Er.toNumber=Ql,Er.toSafeInteger=Yl,Er.toString=Zl,Er.toUpper=pf,Er.trim=gf,Er.trimEnd=mf,Er.trimStart=vf,Er.truncate=yf,Er.unescape=_f,Er.uniqueId=ed,Er.upperCase=wf,Er.upperFirst=bf,Er.each=lc,Er.eachRight=hc,Er.first=Ya,Uf(Er,function(){var t={};return Ni(Er,(function(e,n){he.call(Er.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Er.VERSION=s,bn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){Er[t].placeholder=Er})),bn(["drop","take"],(function(t,e){kr.prototype[t]=function(n){n=n===i?1:Ve(Gl(n),0);var r=this.__filtered__&&!e?new kr(this):this.clone();return r.__filtered__?r.__takeCount__=Be(n,r.__takeCount__):r.__views__.push({size:Be(n,j),type:t+(r.__dir__<0?"Right":"")}),r},kr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),bn(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==x||n==D;kr.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),bn(["head","last"],(function(t,e){var n="take"+(e?"Right":"");kr.prototype[t]=function(){return this[n](1).value()[0]}})),bn(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");kr.prototype[t]=function(){return this.__filtered__?new kr(this):this[n](1)}})),kr.prototype.compact=function(){return this.filter(Nf)},kr.prototype.find=function(t){return this.filter(t).head()},kr.prototype.findLast=function(t){return this.reverse().find(t)},kr.prototype.invokeMap=ws((function(t,e){return"function"==typeof t?new kr(this):this.map((function(n){return zi(n,t,e)}))})),kr.prototype.reject=function(t){return this.filter(Bc(qo(t)))},kr.prototype.slice=function(t,e){t=Gl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new kr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==i&&(e=Gl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},kr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},kr.prototype.toArray=function(){return this.take(j)},Ni(kr.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),s=Er[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);s&&(Er.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,u=e instanceof kr,c=a[0],l=u||ul(e),h=function(t){var e=s.apply(Er,An([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=o&&!f,g=u&&!d;if(!o&&l){e=g?e:new kr(this);var m=t.apply(e,a);return m.__actions__.push({func:Wu,args:[h],thisArg:i}),new Cr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),bn(["pop","push","shift","sort","splice","unshift"],(function(t){var e=oe[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);Er.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ul(i)?i:[],t)}return this[n]((function(n){return e.apply(ul(n)?n:[],t)}))}})),Ni(kr.prototype,(function(t,e){var n=Er[e];if(n){var r=n.name+"";he.call(cn,r)||(cn[r]=[]),cn[r].push({name:e,func:n})}})),cn[_o(i,_).name]=[{name:"wrapper",func:i}],kr.prototype.clone=Ar,kr.prototype.reverse=Rr,kr.prototype.value=Or,Er.prototype.at=Gu,Er.prototype.chain=Ju,Er.prototype.commit=Qu,Er.prototype.next=Xu,Er.prototype.plant=Zu,Er.prototype.reverse=tc,Er.prototype.toJSON=Er.prototype.valueOf=Er.prototype.value=ec,Er.prototype.first=Er.prototype.head,ke&&(Er.prototype[ke]=Yu),Er},Ir=Er();an._=Ir,r=function(){return Ir}.call(e,n,e,t),r===i||(t.exports=r)}.call(this)},657:function(t,e,n){var r=n(9159),i=function(){return r.Date.now()};t.exports=i},9289:function(t,e,n){var r=n(3738),i=n(150),s="Expected a function";function o(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}t.exports=o},2012:function(t,e,n){var r=n(6009),i=n(150),s=n(7691),o=NaN,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function h(t){if("number"==typeof t)return t;if(s(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=h},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},7327:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)}function o(t,e,n){return e=s(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return o}})},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return mt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,c())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}_((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
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
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",x="0.9.19",P=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="10.4.0",st="[DEFAULT]",ot={[N]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ut=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){P.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ut.has(e))return P.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of at.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
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
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const u=new r.H0(o);for(const r of ut.values())u.addComponent(r);const c=new pt(n,i,u);return at.set(o,c),c}function vt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void P.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const _t="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function It(){return Et||(Et=T(_t,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t){try{const e=await It(),n=await e.transaction(bt).objectStore(bt).get(Ct(t));return n}catch(e){if(e instanceof s.ZR)P.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});P.warn(t.message)}}}async function St(t,e){try{const n=await It(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);await i.put(e,Ct(t)),await r.done}catch(n){if(n instanceof s.ZR)P.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
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
 */const kt=1024,At=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Dt(t){lt(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),yt(N,x,t),yt(N,x,"esm2017"),yt("fire-js","")}Dt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return c},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return c},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="10.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},4233:function(t,e,n){"use strict";n.d(e,{hJ:function(){return ve},v0:function(){return Fr},rh:function(){return An},w7:function(){return Re}});n(7658),n(6229),n(7330),n(2062);var r=n(223),i=n(7077),s=n(5168);n(541);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(7142);function u(t){return void 0!==t&&void 0!==t.enterprise}class c{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=l,f=new r.LL("auth","Firebase",l()),d=new s.Yd("@firebase/auth");function p(t,...e){d.logLevel<=s["in"].WARN&&d.warn(`Auth (${i.Jn}): ${t}`,...e)}function g(t,...e){d.logLevel<=s["in"].ERROR&&d.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,...e){throw w(t,...e)}function v(t,...e){return w(t,...e)}function y(t,e,n){const i=Object.assign(Object.assign({},h()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function _(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&m(t,"argument-error"),y(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f.create(t,...e)}function b(t,e,...n){if(!t)throw w(e,...n)}function E(t){const e="INTERNAL ASSERTION FAILED: "+t;throw g(e),new Error(e)}function I(t,e){t||E(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.shortDelay=t,this.longDelay=e,I(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){I(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),e);try{const e=new j(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(t,a,o);m(t,a)}}catch(s){if(s instanceof r.ZR)throw s;m(t,"network-request-failed",{message:String(s)})}}async function U(t,e,n,r,i={}){const s=await L(t,e,n,r,i);return"mfaPendingCredential"in s&&m(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(v(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return L(t,"GET","/v2/recaptchaConfig",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e){return L(t,"POST","/v1/accounts:delete",e)}async function z(t,e){return L(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=W(i);b(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(K(s.auth_time)),issuedAtTime:q(K(s.iat)),expirationTime:q(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(t){return 1e3*Number(t)}function W(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function G(t){const e=W(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&Q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Z(t){var e;const n=t.auth,r=await t.getIdToken(),i=await J(t,z(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?nt(s.providerUserInfo):[],a=et(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function tt(t){const e=(0,r.m9)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return b(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await rt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new it;return n&&(b("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await J(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await J(this,$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,u,c;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=e.createdAt)&&void 0!==u?u:void 0,v=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:I}=e;b(y&&I,t,"internal-error");const T=it.fromJSON(this.name,I);b("string"===typeof y,t,"internal-error"),st(l,t.name),st(h,t.name),b("boolean"===typeof _,t,"internal-error"),b("boolean"===typeof w,t,"internal-error"),st(f,t.name),st(d,t.name),st(p,t.name),st(g,t.name),st(m,t.name),st(v,t.name);const S=new ot({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new it;r.updateFromServerResponse(e);const i=new ot({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Map;function ut(t){I(t instanceof Function,"Expected a class definition");let e=at.get(t);return e?(I(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,at.set(t,e),e)}
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
 */class ct{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ct.type="NONE";const lt=ct;
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
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class ft{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ht(this.userKey,r.apiKey,i),this.fullPersistenceKey=ht("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ft(ut(lt),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ut(lt);const s=ht(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(s);if(e){const n=ot._fromJSON(t,e);c!==i&&(o=n),i=c;break}}catch(u){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(u){}}))),new ft(i,t,n)):new ft(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(wt(e))return"Webos";if(gt(e))return"Safari";if((e.includes("chrome/")||mt(e))&&!e.includes("edge/"))return"Chrome";if(yt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function pt(t=(0,r.z$)()){return/firefox\//i.test(t)}function gt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mt(t=(0,r.z$)()){return/crios\//i.test(t)}function vt(t=(0,r.z$)()){return/iemobile/i.test(t)}function yt(t=(0,r.z$)()){return/android/i.test(t)}function _t(t=(0,r.z$)()){return/blackberry/i.test(t)}function wt(t=(0,r.z$)()){return/webos/i.test(t)}function bt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Et(t=(0,r.z$)()){var e;return bt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function It(){return(0,r.w1)()&&10===document.documentMode}function Tt(t=(0,r.z$)()){return bt(t)||yt(t)||wt(t)||_t(t)||/windows phone/i.test(t)||vt(t)}function St(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=dt((0,r.z$)());break;case"Worker":n=`${dt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
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
 */class kt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */async function At(t,e={}){return L(t,"GET","/v2/passwordPolicy",D(t,e))}
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
 */const Rt=6;class Ot{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:Rt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.beforeStateQueue=new kt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ut(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ft.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Z(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ut(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await At(this),e=new Ot(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ut(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[ut(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&p(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function xt(t){return(0,r.m9)(t)}class Pt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Lt(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=v("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Dt().appendChild(r)}))}function Mt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Ut="https://www.google.com/recaptcha/enterprise.js?render=",Ft="recaptcha-enterprise",jt="NO_RECAPTCHA";class Vt{constructor(t){this.type=Ft,this.auth=xt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{B(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new c(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;u(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(jt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&u(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Lt(Ut+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Bt(t,e,n,r=!1){const i=new Vt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;m(t,"already-initialized")}const s=n.initialize({options:e});return s}function zt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function qt(t,e,n){const r=xt(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ht(e),{host:o,port:a}=Kt(e),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Gt()}function Ht(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kt(t){const e=Ht(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Wt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Wt(e)}}}function Wt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return E("not implemented")}_getIdTokenResponse(t){return E("not implemented")}_linkToIdToken(t,e){return E("not implemented")}_getReauthenticationResolver(t){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function Zt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Jt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new te(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new te(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Bt(t,n,"signInWithPassword");return Xt(t,e)}return Xt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Bt(t,n,"signInWithPassword");return Xt(t,e)}return Promise.reject(e)}));case"emailLink":return Yt(t,{email:this._email,oobCode:this._password});default:m(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Qt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zt(t,{idToken:e,email:this._email,oobCode:this._password});default:m(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="http://localhost";class re extends Jt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new re(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):m("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new re(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ee(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ee(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ee(t,e)}buildRequest(){const t={requestUri:ne,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function se(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function oe(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const ae={["USER_NOT_FOUND"]:"user-not-found"};async function ue(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),ae)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Jt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ce({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ce({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return se(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return oe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ue(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ce({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function he(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class fe{constructor(t){var e,n,i,s,o,a;const u=(0,r.zd)((0,r.pd)(t)),c=null!==(e=u["apiKey"])&&void 0!==e?e:null,l=null!==(n=u["oobCode"])&&void 0!==n?n:null,h=le(null!==(i=u["mode"])&&void 0!==i?i:null);b(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=u["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=he(t);try{return new fe(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(){this.providerId=de.PROVIDER_ID}static credential(t,e){return te._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=fe.parseLink(e);return b(n,"argument-error"),te._fromEmailAndCode(t,n.code,n.tenantId)}}de.PROVIDER_ID="password",de.EMAIL_PASSWORD_SIGN_IN_METHOD="password",de.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class ge extends pe{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends ge{constructor(){super("facebook.com")}static credential(t){return re._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.FACEBOOK_SIGN_IN_METHOD="facebook.com",me.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve extends ge{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return re._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ve.credential(e,n)}catch(r){return null}}}ve.GOOGLE_SIGN_IN_METHOD="google.com",ve.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends ge{constructor(){super("github.com")}static credential(t){return re._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ye.credential(t.oauthAccessToken)}catch(e){return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com",ye.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends ge{constructor(){super("twitter.com")}static credential(t,e){return re._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return _e.credential(e,n)}catch(r){return null}}}_e.TWITTER_SIGN_IN_METHOD="twitter.com",_e.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ot._fromIdTokenResponse(t,n,r),s=be(n),o=new we({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=be(n);return new we({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function be(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Ee extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ee.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ee(t,e,n,r)}}function Ie(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ee._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){const r=await J(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return we._forOperation(t,"link",r)}
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
async function Se(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await J(t,Ie(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=W(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),we._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&m(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){const r="signIn",i=await Ie(t,r,e),s=await we._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ke(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function Ae(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function Re(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Ne(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function xe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Pe(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const De="__sak";
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
 */class Le{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(De,"1"),this.storage.removeItem(De),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){const t=(0,r.z$)();return gt(t)||bt(t)}const Ue=1e3,Fe=10;class je extends Le{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Me()&&St(),this.fallbackToPolling=Tt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);It()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Fe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}je.type="LOCAL";const Ve=je;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Le{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Be.type="SESSION";const $e=Be;
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
 */function ze(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class qe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new qe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await ze(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */qe.receivers=[];class Ke{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=He("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===u)switch(e.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function Ge(t){We().location.href=t}
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
 */function Je(){return"undefined"!==typeof We()["WorkerGlobalScope"]&&"function"===typeof We()["importScripts"]}async function Qe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Xe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ye(){return Je()?self:null}
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
 */const Ze="firebaseLocalStorageDb",tn=1,en="firebaseLocalStorage",nn="fbase_key";class rn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function sn(t,e){return t.transaction([en],e?"readwrite":"readonly").objectStore(en)}function on(){const t=indexedDB.deleteDatabase(Ze);return new rn(t).toPromise()}function an(){const t=indexedDB.open(Ze,tn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(en,{keyPath:nn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(en)?e(n):(n.close(),await on(),e(await an()))}))}))}async function un(t,e,n){const r=sn(t,!0).put({[nn]:e,value:n});return new rn(r).toPromise()}async function cn(t,e){const n=sn(t,!1).get(e),r=await new rn(n).toPromise();return void 0===r?null:r.value}function ln(t,e){const n=sn(t,!0).delete(e);return new rn(n).toPromise()}const hn=800,fn=3;class dn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await an()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>fn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Je()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qe._getInstance(Ye()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Qe(),!this.activeServiceWorker)return;this.sender=new Ke(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Xe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await an();return await un(t,De,"1"),await ln(t,De),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>un(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>cn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ln(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=sn(t,!1).getAll();return new rn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),hn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}dn.type="LOCAL";const pn=dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function mn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function vn(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
Mt("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn="recaptcha";async function _n(t,e,n){var r;const i=await n.verify();try{let s;if(b("string"===typeof i,t,"argument-error"),b(n.type===yn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){b("enroll"===e.type,t,"internal-error");const n=await Oe(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;b(n,t,"missing-multi-factor-info");const o=await gn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ie(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(t){this.providerId=wn.PROVIDER_ID,this.auth=xt(t)}verifyPhoneNumber(t,e){return _n(this.auth,t,(0,r.m9)(e))}static credential(t,e){return ce._fromVerification(t,e)}static credentialFromResult(t){const e=t;return wn.credentialFromTaggedObject(e)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ce._fromTokenResponse(e,n):null}}
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
function bn(t,e){return e?ut(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */wn.PROVIDER_ID="phone",wn.PHONE_SIGN_IN_METHOD="phone";class En extends Jt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ee(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ee(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ee(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function In(t){return Ce(t.auth,new En(t),t.bypassAuthState)}function Tn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Se(n,new En(t),t.bypassAuthState)}async function Sn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Te(n,new En(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return In;case"linkViaPopup":case"linkViaRedirect":return Sn;case"reauthViaPopup":case"reauthViaRedirect":return Tn;default:m(this.auth,"internal-error")}}resolve(t){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new R(2e3,1e4);async function An(t,e,n){const r=xt(t);_(t,e,pe);const i=bn(r,n),s=new Rn(r,"signInViaPopup",e,i);return s.executeNotNull()}class Rn extends Cn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const t=He();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,kn.get())};t()}}Rn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On="pendingRedirect",Nn=new Map;class xn extends Cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Nn.get(this.auth._key());if(!t){try{const e=await Pn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Nn.set(this.auth._key(),t)}return this.bypassAuthState||Nn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Pn(t,e){const n=Mn(e),r=Ln(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Dn(t,e){Nn.set(t._key(),e)}function Ln(t){return ut(t._redirectPersistence)}function Mn(t){return ht(On,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,e,n=!1){const r=xt(t),i=bn(r,e),s=new xn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn=6e5;class jn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!$n(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Bn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(v(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vn(t))}saveEventToCache(t){this.cachedEventUids.add(Vn(t)),this.lastProcessedEventTime=Date.now()}}function Vn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Bn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function $n(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e={}){return L(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;async function Kn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zn(t);for(const r of e)try{if(Wn(r))return}catch(n){}m(t,"unauthorized-domain")}function Wn(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Hn.test(n))return!1;if(qn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const Gn=new R(3e4,6e4);function Jn(){const t=We().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Qn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Jn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jn(),n(v(t,"network-request-failed"))},timeout:Gn.get()})}if(null===(i=null===(r=We().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=We().gapi)||void 0===s?void 0:s.load)){const e=Mt("iframefcb");return We()[e]=()=>{gapi.load?o():n(v(t,"network-request-failed"))},Lt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Xn=null,t}))}let Xn=null;function Yn(t){return Xn=Xn||Qn(t),Xn}
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
 */const Zn=new R(5e3,15e3),tr="__/auth/iframe",er="emulator/auth/iframe",nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ir(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,er):`https://${t.config.authDomain}/${tr}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=rr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function sr(t){const e=await Yn(t),n=We().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ir(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=v(t,"network-request-failed"),s=We().setTimeout((()=>{r(i)}),Zn.get());function o(){We().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ar=500,ur=600,cr="_blank",lr="http://localhost";class hr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function fr(t,e,n,i=ar,s=ur){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},or),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(u=mt(l)?cr:n),pt(l)&&(e=e||lr,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(Et(l)&&"_self"!==u)return dr(e||"",u),new hr(null);const f=window.open(e||"",u,h);b(f,t,"popup-blocked");try{f.focus()}catch(d){}return new hr(f)}function dr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const pr="__/auth/handler",gr="emulator/auth/handler",mr=encodeURIComponent("fac");async function vr(t,e,n,s,o,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof pe){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))u[t]=e}if(e instanceof ge){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(u.scopes=t.join(","))}t.tenantId&&(u.tid=t.tenantId);const c=u;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const l=await t._getAppCheckToken(),h=l?`#${mr}=${encodeURIComponent(l)}`:"";return`${yr(t)}?${(0,r.xO)(c).slice(1)}${h}`}function yr({config:t}){return t.emulator?O(t,gr):`https://${t.authDomain}/${pr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="webStorageSupport";class wr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$e,this._completeRedirectFn=Un,this._overrideRedirectResult=Dn}async _openPopup(t,e,n,r){var i;I(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await vr(t,e,n,T(),r);return fr(t,s,He())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await vr(t,e,n,T(),r);return Ge(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await sr(t),n=new jn(t);return e.register("authEvent",(e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(_r,{type:_r},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[_r];void 0!==i&&e(!!i),m(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Kn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Tt()||gt()||bt()}}const br=wr;class Er{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return E("unexpected MultiFactorSessionType")}}}class Ir extends Er{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ir(t)}_finalizeEnroll(t,e,n){return Ne(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return mn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Tr{constructor(){}static assertion(t){return Ir._fromCredential(t)}}Tr.FACTOR_ID="phone";class Sr{static assertionForEnrollment(t,e){return Cr._fromSecret(t,e)}static assertionForSignIn(t,e){return Cr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;b("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await xe(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return kr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Sr.FACTOR_ID="totp";class Cr extends Er{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Cr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Cr(e,t)}async _finalizeEnroll(t,e,n){return b("undefined"!==typeof this.secret,t,"argument-error"),Pe(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){b(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return vn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class kr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new kr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ar(t)||Ar(e))&&(r=!0),r&&(Ar(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ar(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ar(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Rr="@firebase/auth",Or="1.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},c=new Nt(r,i,s,u);return zt(c,n),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=xt(t.getProvider("auth").getImmediate());return(t=>new Nr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Rr,Or,xr(t)),(0,i.KN)(Rr,Or,"esm2017")}
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
 */const Dr=300,Lr=(0,r.Pz)("authIdTokenMaxAge")||Dr;let Mr=null;const Ur=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Lr)return;const i=null===n||void 0===n?void 0:n.token;Mr!==i&&(Mr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$t(t,{popupRedirectResolver:br,persistence:[pn,Ve,$e]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const t=Ur(s);Ae(n,t,(()=>t(n.currentUser))),ke(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&qt(n,`http://${o}`),n}Pr("Browser")},4287:function(t,e,n){"use strict";n.d(e,{hJ:function(){return bl},PL:function(){return ql},ad:function(){return Tl}});n(1439),n(7585),n(5315),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),c={},l=l||{},h=u||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,_.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var I=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==I)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function N(t){return-1!=O().indexOf(t)}function x(t){return x[" "](t),t}function P(t,e){var n=wr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}x[" "]=function(){};var D,L,M=N("Opera"),U=N("Trident")||N("MSIE"),F=N("Edge"),j=F||U,V=N("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),B=-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge");function $(){var t=h.document;return t?t.documentMode:void 0}t:{var z="",q=function(){var t=O();return V?/rv:([^\);]+)(\)|;)/.exec(t):F?/Edge\/([\d\.]+)/.exec(t):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&(z=q?q[1]:""),U){var H=$();if(null!=H&&H>parseFloat(z)){D=String(H);break t}}D=z}if(h.document&&U){var K=$();L=K||(parseInt(D,10)||void 0)}else L=void 0;var W=L;function G(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(V){t:{try{x(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:J[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&G.$.h.call(this)}}b(G,k);var J={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=T(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Y(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[Q]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ut]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)A||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[Q]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=wt(n),t&&t[Q]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Q])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):Z(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function vt(t,e){if(t.fa)t=!0;else{e=new G(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ut],t instanceof st?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function bt(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var i=e;e=new k(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=It(o,r,!0,e)&&i}if(o=e.g=t,i=It(o,r,!0,e)&&i,i=It(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=It(o,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}b(bt,E),bt.prototype[Q]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ct(){var t=Dt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=At.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var At=new St((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Nt(t){h.setTimeout((()=>{throw t}),0)}let xt,Pt=!1,Dt=new kt,Lt=()=>{const t=h.Promise.resolve(void 0);xt=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Nt(n)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1};function Ut(t,e){bt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.qb,this),this.l=Date.now()}function Ft(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function jt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Vt(t){t.g=jt((()=>{t.g=null,t.i&&(t.i=!1,Vt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ut,bt),r=Ut.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ft(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ut.$.N.call(this),Ft(this),delete this.g};class Bt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){E.call(this),this.h=t,this.g={}}b($t,E);var zt=[];function qt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Kt(){this.g=!0}function Wt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Gt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Tt(n)}catch(a){return e}}$t.prototype.N=function(){$t.$.N.call(this),Ht(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Ea=function(){this.g=!1},Kt.prototype.info=function(){};var Yt={},Zt=null;function te(){return Zt=Zt||new bt}function ee(t){k.call(this,Yt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){k.call(this,Yt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){k.call(this,Yt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Yt.Ta="serverreachability",b(ee,k),Yt.STAT_EVENT="statevent",b(re,k),Yt.Ua="timingevent",b(se,k);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ue={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ce(){}function le(t){return t.h||(t.h=t.i())}function he(){}ce.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){k.call(this,"d")}function ge(){k.call(this,"c")}function me(){}function ve(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $t(this),this.P=_e,t=j?125:void 0,this.V=new Ut(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}b(pe,k),b(ge,k),b(me,ce),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var _e=45e3,we={},be={};function Ee(t,e,n){t.L=1,t.v=qe(je(e)),t.s=n,t.S=!0,Ie(t,null)}function Ie(t,e){t.G=Date.now(),ke(t),t.A=je(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ye,t.g=cr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Bt(_(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Wt(t.j,t.u,t.A,t.m,t.W,t.s)}function Te(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ce(t,n),r==be){4==e&&(t.o=4,ie(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==we){t.o=4,ie(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),xe(t,r)}Te(t)&&r!=be&&r!=we&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Ne(t),Oe(t))}function Ce(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?be:(n=Number(e.substring(n,r)),isNaN(n)?we:(r+=1,r+n>e.length?be:(e=e.slice(r,r+n),t.C=r+n,e)))}function ke(t){t.Y=Date.now()+t.P,Ae(t,t.P)}function Ae(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(_(t.lb,t),e)}function Re(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.H||t.J||ir(t.l,t)}function Ne(t){Re(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ft(t.V),Ht(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function xe(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Kn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!R(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,ze(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Re(a),ke(a)),r.g=o}else Zn(r);0<n.j.length&&Gn(n)}else"stop"!=c[0]&&"close"!=c[0]||or(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?or(n,7):Hn(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ne(4)}catch(c){}}function Pe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function De(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=De(t),r=Pe(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ve.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Fn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Fn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Re(this);var n=this.g.da();this.ca=n;e:if(Te(this)){var r=jn(this.g);t="";var i=r.length,s=4==Fn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ne(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Gt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ie(12),Ne(this),Oe(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xe(this,n)}this.S?(Se(this,l,o),j&&this.i&&3==l&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),xe(this,o)),4==l&&Ne(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,ke(this)))}else Vn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),Ne(this),Oe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Fn(this.g),e=this.g.ja();this.C<e.length&&(Re(this),Se(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.J=!0,Ne(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qt(this.j,this.A),2!=this.L&&(ne(),ie(17)),Ne(this),this.o=2,Oe(this)):Ae(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ue(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fe(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fe){this.h=t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,Ve(this,e[1]||"",!0),this.s=He(e[2]||""),this.g=He(e[3]||"",!0),Be(this,e[4]),this.l=He(e[5]||"",!0),$e(this,e[6]||"",!0),this.o=He(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function je(t){return new Fe(t)}function Ve(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ke(e,Xe)),t.i=new Ze(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function qe(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,We),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function We(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,Ge,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Qe:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Ye)),t.join("")};var Ge=/[#\/\?@]/g,Je=/[#\?:]/g,Qe=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ue(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function un(t){this.l=t||cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function vn(){this.g=new mn}function yn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let i=t;d(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(t,e){const n=new Kt;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function wn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function bn(t){this.l=t.ec||null,this.j=t.ob||!1}function En(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ce),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),b(En,bt);var In=0;function Tn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=In},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):Cn(this),3==this.readyState&&Tn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=h.JSON.parse;function An(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(An,bt);var Rn="",On=/^https?$/i,Nn=["POST","PUT"];function xn(t){return U&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dn(t),Mn(t)}function Dn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Fn(t)||2!=t.da()))if(t.v&&4==Fn(t))jt(t.La,0,t);else if(Et(t,"readystatechange"),4==Fn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Me)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Fn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Dn(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Un(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Un(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}function jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function Vn(t){const e={};t=(t.g&&2<=Fn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=Ot(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ga=0,this.j=[],this.l=new Kt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,t),this.hb=zn("retryDelaySeedMs",1e4,t),this.eb=zn("forwardChannelMaxRetries",2,t),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new un(t&&t.concurrentRequestLimit),this.Ja=new vn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(t){if(Wn(t),3==t.H){var e=t.W++,n=je(t.I);if(ze(n,"SID",t.K),ze(n,"RID",e),ze(n,"TYPE","terminate"),Xn(t,n),e=new ve(t,t.l,e),e.L=2,e.v=qe(je(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=cr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ke(e)}ar(t)}function Kn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Wn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Gn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;xt||Lt(),Pt||(xt(),Pt=!0),Dt.add(e,t),t.C=0}}function Jn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(_(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Qn(t,e){var n;n=e?e.m:t.W++;const r=je(t.I);ze(r,"SID",t.K),ze(r,"RID",n),ze(r,"AID",t.V),Xn(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new ve(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Yn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){ze(e,n,t)})),t.h&&Le({},(function(t,n){ze(e,n,t)}))}function Yn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const u=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{yn(u,t,"req"+n+"_")}catch(s){r&&r(u)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xt||Lt(),Pt||(xt(),Pt=!0),Dt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(_(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ve(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=je(t.wa);ze(e,"RID","rpc"),ze(e,"SID",t.K),ze(e,"AID",t.V),ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ze(e,"TO",t.qa),ze(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qe(je(e)),n.s=null,n.S=!0,Ie(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Gn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Jn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=_(t.pb,t);n||(n=new Fe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ve(n,"https"),qe(n)),_n(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Wn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(C(t.ma,e),C(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function ur(t,e,n){var r=n instanceof Fe?je(n):new Fe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Be(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fe(null);r&&Ve(s,r),e&&(s.g=e),i&&Be(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ze(r,n,e),ze(r,"VER",t.ra),Xn(t,r),r}function cr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new An(new bn({ob:!0})):new An(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(U&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function fr(t,e){bt.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function _r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Pn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=T(Nn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Un(this),0<this.B&&((this.L=xn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=jt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ve(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Yn(this,i,e),n=je(this.I),ze(n,"RID",t),ze(n,"CVER",22),this.F&&ze(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&$n(n,this.o,s)),dn(this.i,i),this.bb&&ze(n,"TYPE","init"),this.P?(ze(n,"$req",e),ze(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Qn(this,t):0==this.j.length||ln(this.i)||Qn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(_(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},b(fr,bt),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ur(t,null,t.Y),Gn(t)},fr.prototype.close=function(){Hn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Gn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,fr.$.N.call(this)},b(dr,pe),b(pr,ge),b(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},b(vr,mr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)yr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var wr={};function br(t){return-128<=t&&128>t?P(t,(function(t){return new _r([0|t],0>t?-1:0)})):new _r([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Or(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tr;return new _r(e,0)}function Ir(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Or(Ir(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Tr=4294967296,Sr=br(0),Cr=br(1),kr=br(16777216);function Ar(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function Or(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _r(n,~t.h).add(Cr)}function Nr(t,e){return t.add(Or(e))}function xr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Pr(t,e){this.g=t,this.h=e}function Dr(t,e){if(Ar(e))throw Error("division by zero");if(Ar(t))return new Pr(Sr,Sr);if(Rr(t))return e=Dr(Or(t),e),new Pr(Or(e.g),Or(e.h));if(Rr(e))return e=Dr(t,Or(e)),new Pr(Or(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=e;0>=r.X(t);)n=Lr(n),r=Lr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!Ar(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return e=Nr(t,i.R(e)),new Pr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);Ar(s)&&(s=Cr),i=i.add(s),t=Nr(t,o)}return new Pr(i,t)}function Lr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _r(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _r(i,t.h)}r=_r.prototype,r.ea=function(){if(Rr(this))return-Or(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tr+r)*e,e*=Tr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ar(this))return"0";if(Rr(this))return"-"+Or(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Dr(n,e).g;n=Nr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Nr(this,t),Rr(t)?-1:Ar(t)?0:1},r.abs=function(){return Rr(this)?Or(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Ar(this)||Ar(t))return Sr;if(Rr(this))return Rr(t)?Or(this).R(Or(t)):Or(Or(this).R(t));if(Rr(t))return Or(this.R(Or(t)));if(0>this.X(kr)&&0>t.X(kr))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,u=65535&t.D(i);n[2*r+2*i]+=o*u,xr(n,2*r+2*i),n[2*r+2*i+1]+=s*u,xr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _r(n,0)},r.gb=function(t){return Dr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _r(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _r(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _r(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ue.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",bt.prototype.listen=bt.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Ir;var Ur=c.createWebChannelTransport=function(){return new hr},Fr=c.getStatEventTarget=function(){return te()},jr=c.ErrorCode=ae,Vr=c.EventType=ue,Br=c.Event=Yt,$r=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zr=(c.FetchXmlHttpFactory=bn,c.WebChannel=he),qr=c.XhrIo=An,Hr=c.Md5=vr,Kr=c.Integer=_r;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Gr.UNAUTHENTICATED=new Gr(null),Gr.GOOGLE_CREDENTIALS=new Gr("google-credentials-uid"),Gr.FIRST_PARTY=new Gr("first-party-uid"),Gr.MOCK_USER=new Gr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jr="10.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new o.Yd("@firebase/firestore");function Xr(){return Qr.logLevel}function Yr(t,...e){if(Qr.logLevel<=o["in"].DEBUG){const n=e.map(ei);Qr.debug(`Firestore (${Jr}): ${t}`,...n)}}function Zr(t,...e){if(Qr.logLevel<=o["in"].ERROR){const n=e.map(ei);Qr.error(`Firestore (${Jr}): ${t}`,...n)}}function ti(t,...e){if(Qr.logLevel<=o["in"].WARN){const n=e.map(ei);Qr.warn(`Firestore (${Jr}): ${t}`,...n)}}function ei(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ni(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function ri(t,e){t||ni()}function ii(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ci{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Gr.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hi{constructor(t){this.t=t,this.currentUser=Gr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ai,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Yr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Yr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ai)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Yr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ri("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ri(null===t||"string"==typeof t),new Gr(t)}}class fi{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Gr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class di{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fi(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Gr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Yr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Yr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Yr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Yr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ri("string"==typeof t.token),this.R=t.token,new pi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */class vi{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function yi(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */class Ei{constructor(t,e,n){void 0===e?e=0:e>t.length&&ni(),void 0===n?n=t.length-e:n>t.length-e&&ni(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ei.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ii extends Ei{construct(t,e,n){return new Ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new oi(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ii(e)}static emptyPath(){return new Ii([])}}const Ti=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ei{construct(t,e,n){return new Si(t,e,n)}static isValidIdentifier(t){return Ti.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new oi(si.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new oi(si.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new oi(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new oi(si.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Si(e)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.path=t}static fromPath(t){return new Ci(Ii.fromString(t))}static fromName(t){return new Ci(Ii.fromString(t).popFirst(5))}static empty(){return new Ci(Ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ci(new Ii(t.slice()))}}
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
 */class ki{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ki.UNKNOWN_ID=-1;function Ai(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===r?new wi(n+1,0):new wi(n,r));return new Oi(i,Ci.empty(),e)}function Ri(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Oi(bi.min(),Ci.empty(),-1)}static max(){return new Oi(bi.max(),Ci.empty(),-1)}}function Ni(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ci.comparator(t.documentKey,e.documentKey),0!==n?n:yi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t){if(t.code!==si.FAILED_PRECONDITION||t.message!==xi)throw t;Yr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Mi(t){return"IndexedDbTransactionError"===t.name}
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
class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Fi(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}Ui.ae=-1;const Vi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$i=Bi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function zi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e){this.comparator=t,this.root=e||Gi.EMPTY}insert(t,e){return new Ki(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Gi.BLACK,null,null))}remove(t){return new Ki(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Gi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wi(this.root,t,this.comparator,!0)}}class Wi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Gi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Gi.RED,this.left=null!=r?r:Gi.EMPTY,this.right=null!=i?i:Gi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Gi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Gi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Gi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Gi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Gi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const t=this.left.check();if(t!==this.right.check())throw ni();return t+(this.isRed()?0:1)}}Gi.EMPTY=null,Gi.RED=!0,Gi.BLACK=!1,Gi.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Gi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.comparator=t,this.data=new Ki(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qi(this.data.getIterator())}getIteratorFrom(t){return new Qi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ji))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ji(this.comparator);return e.data=t,e}}class Qi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t){this.fields=t,t.sort(Si.comparator)}static empty(){return new Xi([])}unionWith(t){let e=new Ji(Si.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Xi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _i(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Yi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Zi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Yi("Invalid base64 string: "+t):t}}(t);return new Zi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Zi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zi.EMPTY_BYTE_STRING=new Zi("");const ts=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(ri(!!t),"string"==typeof t){let e=0;const n=ts.exec(t);if(ri(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ns(t.seconds),nanos:ns(t.nanos)}}function ns(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rs(t){return"string"==typeof t?Zi.fromBase64String(t):Zi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ss(t){const e=t.mapValue.fields.__previous_value__;return is(e)?ss(e):e}function os(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new wi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,r,i,s,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class us{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof us&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?is(t)?4:Is(t)?9007199254740991:10:ni()}function hs(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return os(t).isEqual(os(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=es(t.timestampValue),r=es(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return rs(t.bytesValue).isEqual(rs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ns(t.geoPointValue.latitude)===ns(e.geoPointValue.latitude)&&ns(t.geoPointValue.longitude)===ns(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ns(t.integerValue)===ns(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ns(t.doubleValue),r=ns(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],hs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!hs(n[i],r[i])))return!1;return!0}(t,e);default:return ni()}}function fs(t,e){return void 0!==(t.values||[]).find((t=>hs(t,e)))}function ds(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return yi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ns(t.integerValue||t.doubleValue),r=ns(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ps(t.timestampValue,e.timestampValue);case 4:return ps(os(t),os(e));case 5:return yi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=rs(t),r=rs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=yi(n[i],r[i]);if(0!==t)return t}return yi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=yi(ns(t.latitude),ns(e.latitude));return 0!==n?n:yi(ns(t.longitude),ns(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ds(n[i],r[i]);if(t)return t}return yi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===cs.mapValue&&e===cs.mapValue)return 0;if(t===cs.mapValue)return 1;if(e===cs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=yi(r[o],s[o]);if(0!==t)return t;const e=ds(n[r[o]],i[s[o]]);if(0!==e)return e}return yi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ni()}}function ps(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return yi(t,e);const n=es(t),r=es(e),i=yi(n.seconds,r.seconds);return 0!==i?i:yi(n.nanos,r.nanos)}function gs(t){return ms(t)}function ms(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=es(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return rs(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Ci.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ms(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ms(t.fields[i])}`;return n+"}"}(t.mapValue):ni()}function vs(t){return!!t&&"integerValue"in t}function ys(t){return!!t&&"arrayValue"in t}function _s(t){return!!t&&"nullValue"in t}function ws(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bs(t){return!!t&&"mapValue"in t}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Es(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Is(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(t){this.value=t}static empty(){return new Ts({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(e)}setAll(t){let e=Si.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Es(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());bs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];bs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ts(Es(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ss(t,0,bi.min(),bi.min(),bi.min(),Ts.empty(),0)}static newFoundDocument(t,e,n,r){return new Ss(t,1,e,bi.min(),n,r,0)}static newNoDocument(t,e){return new Ss(t,2,e,bi.min(),bi.min(),Ts.empty(),0)}static newUnknownDocument(t,e){return new Ss(t,3,e,bi.min(),bi.min(),Ts.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ts.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ts.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ss&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ss(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Cs{constructor(t,e){this.position=t,this.inclusive=e}}function ks(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):ds(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function As(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hs(t.position[n],e.position[n]))return!1;return!0}
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
 */class Rs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Os(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Ns{}class xs extends Ns{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Vs(t,e,n):"array-contains"===e?new qs(t,n):"in"===e?new Hs(t,n):"not-in"===e?new Ks(t,n):"array-contains-any"===e?new Ws(t,n):new xs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Bs(t,n):new $s(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ds(e,this.value)):null!==e&&ls(this.value)===ls(e)&&this.matchesComparison(ds(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ni()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ps extends Ns{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ps(t,e)}matches(t){return Ds(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ds(t){return"and"===t.op}function Ls(t){return Ms(t)&&Ds(t)}function Ms(t){for(const e of t.filters)if(e instanceof Ps)return!1;return!0}function Us(t){if(t instanceof xs)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Ls(t))return t.filters.map((t=>Us(t))).join(",");{const e=t.filters.map((t=>Us(t))).join(",");return`${t.op}(${e})`}}function Fs(t,e){return t instanceof xs?function(t,e){return e instanceof xs&&t.op===e.op&&t.field.isEqual(e.field)&&hs(t.value,e.value)}(t,e):t instanceof Ps?function(t,e){return e instanceof Ps&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Fs(n,e.filters[r])),!0)}(t,e):void ni()}function js(t){return t instanceof xs?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(t):t instanceof Ps?function(t){return t.op.toString()+" {"+t.getFilters().map(js).join(" ,")+"}"}(t):"Filter"}class Vs extends xs{constructor(t,e,n){super(t,e,n),this.key=Ci.fromName(n.referenceValue)}matches(t){const e=Ci.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bs extends xs{constructor(t,e){super(t,"in",e),this.keys=zs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $s extends xs{constructor(t,e){super(t,"not-in",e),this.keys=zs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function zs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ci.fromName(t.referenceValue)))}class qs extends xs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&fs(e.arrayValue,this.value)}}class Hs extends xs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&fs(this.value.arrayValue,e)}}class Ks extends xs{constructor(t,e){super(t,"not-in",e)}matches(t){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!fs(this.value.arrayValue,e)}}class Ws extends xs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>fs(this.value.arrayValue,t)))}}
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
 */class Gs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Js(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Gs(t,e,n,r,i,s,o)}function Qs(t){const e=ii(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Us(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>gs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>gs(t))).join(",")),e.he=t}return e.he}function Xs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Os(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!As(t.startAt,e.startAt)&&As(t.endAt,e.endAt)}function Ys(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function to(t,e,n,r,i,s,o,a){return new Zs(t,e,n,r,i,s,o,a)}function eo(t){return new Zs(t)}function no(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ro(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function io(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function so(t){return null!==t.collectionGroup}function oo(t){const e=ii(t);if(null===e.Pe){e.Pe=[];const t=io(e),n=ro(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Rs(t)),e.Pe.push(new Rs(Si.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Rs(Si.keyField(),t))}}}return e.Pe}function ao(t){const e=ii(t);return e.Ie||(e.Ie=uo(e,oo(t))),e.Ie}function uo(t,e){if("F"===t.limitType)return Js(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Rs(t.field,e)}));const n=t.endAt?new Cs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cs(t.startAt.position,t.startAt.inclusive):null;return Js(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function co(t,e,n){return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lo(t,e){return Xs(ao(t),ao(e))&&t.limitType===e.limitType}function ho(t){return`${Qs(ao(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>js(t))).join(", ")}]`),Fi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>gs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>gs(t))).join(",")),`Target(${e})`}(ao(t))}; limitType=${t.limitType})`}function po(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ci.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of oo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ks(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,oo(t),e))&&!(t.endAt&&!function(t,e,n){const r=ks(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,oo(t),e))}(t,e)}function go(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mo(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const t=vo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function vo(t,e,n){const r=t.field.isKeyField()?Ci.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ds(r,i):ni()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Hi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Ki(Ci.comparator);function wo(){return _o}const bo=new Ki(Ci.comparator);function Eo(...t){let e=bo;for(const n of t)e=e.insert(n.key,n);return e}function Io(t){let e=bo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function To(){return Co()}function So(){return Co()}function Co(){return new yo((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Ki(Ci.comparator);const ko=new Ji(Ci.comparator);function Ao(...t){let e=ko;for(const n of t)e=e.add(n);return e}const Ro=new Ji(yi);function Oo(){return Ro}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function xo(t){return{integerValue:""+t}}
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
 */class Po{constructor(){this._=void 0}}function Do(t,e,n){return t instanceof Uo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&is(e)&&(e=ss(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Fo?jo(t,e):t instanceof Vo?Bo(t,e):function(t,e){const n=Mo(t,e),r=zo(n)+zo(t.Te);return vs(n)&&vs(t.Te)?xo(r):No(t.serializer,r)}(t,e)}function Lo(t,e,n){return t instanceof Fo?jo(t,e):t instanceof Vo?Bo(t,e):n}function Mo(t,e){return t instanceof $o?function(t){return vs(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Uo extends Po{}class Fo extends Po{constructor(t){super(),this.elements=t}}function jo(t,e){const n=qo(e);for(const r of t.elements)n.some((t=>hs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Vo extends Po{constructor(t){super(),this.elements=t}}function Bo(t,e){let n=qo(e);for(const r of t.elements)n=n.filter((t=>!hs(t,r)));return{arrayValue:{values:n}}}class $o extends Po{constructor(t,e){super(),this.serializer=t,this.Te=e}}function zo(t){return ns(t.integerValue||t.doubleValue)}function qo(t){return ys(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Fo&&e instanceof Fo||t instanceof Vo&&e instanceof Vo?_i(t.elements,e.elements,hs):t instanceof $o&&e instanceof $o?hs(t.Te,e.Te):t instanceof Uo&&e instanceof Uo}(t.transform,e.transform)}class Ko{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ko}static exists(t){return new Ko(void 0,t)}static updateTime(t){return new Ko(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Go{}function Jo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ia(t.key,Ko.none()):new Zo(t.key,t.data,Ko.none());{const n=t.data,r=Ts.empty();let i=new Ji(Si.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ta(t.key,r,new Xi(i.toArray()),Ko.none())}}function Qo(t,e,n){t instanceof Zo?function(t,e,n){const r=t.value.clone(),i=na(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ta?function(t,e,n){if(!Wo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=na(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ea(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof Zo?function(t,e,n,r){if(!Wo(t.precondition,e))return n;const i=t.value.clone(),s=ra(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ta?function(t,e,n,r){if(!Wo(t.precondition,e))return n;const i=ra(t.fieldTransforms,r,e),s=e.data;return s.setAll(ea(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Wo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Yo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_i(t,e,((t,e)=>Ho(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends Go{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ta extends Go{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ea(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function na(t,e,n){const r=new Map;ri(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Lo(o,a,n[i]))}return r}function ra(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Do(t,s,e))}return r}class ia extends Go{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Qo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=So();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Jo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ao())}isEqual(t){return this.batchId===t.batchId&&_i(this.mutations,t.mutations,((t,e)=>Yo(t,e)))&&_i(this.baseMutations,t.baseMutations,((t,e)=>Yo(t,e)))}}
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
class oa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class aa{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua,ca;function la(t){if(void 0===t)return Zr("GRPC error has no .code"),si.UNKNOWN;switch(t){case ua.OK:return si.OK;case ua.CANCELLED:return si.CANCELLED;case ua.UNKNOWN:return si.UNKNOWN;case ua.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case ua.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case ua.INTERNAL:return si.INTERNAL;case ua.UNAVAILABLE:return si.UNAVAILABLE;case ua.UNAUTHENTICATED:return si.UNAUTHENTICATED;case ua.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case ua.NOT_FOUND:return si.NOT_FOUND;case ua.ALREADY_EXISTS:return si.ALREADY_EXISTS;case ua.PERMISSION_DENIED:return si.PERMISSION_DENIED;case ua.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case ua.ABORTED:return si.ABORTED;case ua.OUT_OF_RANGE:return si.OUT_OF_RANGE;case ua.UNIMPLEMENTED:return si.UNIMPLEMENTED;case ua.DATA_LOSS:return si.DATA_LOSS;default:return ni()}}(ca=ua||(ua={}))[ca.OK=0]="OK",ca[ca.CANCELLED=1]="CANCELLED",ca[ca.UNKNOWN=2]="UNKNOWN",ca[ca.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ca[ca.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ca[ca.NOT_FOUND=5]="NOT_FOUND",ca[ca.ALREADY_EXISTS=6]="ALREADY_EXISTS",ca[ca.PERMISSION_DENIED=7]="PERMISSION_DENIED",ca[ca.UNAUTHENTICATED=16]="UNAUTHENTICATED",ca[ca.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ca[ca.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ca[ca.ABORTED=10]="ABORTED",ca[ca.OUT_OF_RANGE=11]="OUT_OF_RANGE",ca[ca.UNIMPLEMENTED=12]="UNIMPLEMENTED",ca[ca.INTERNAL=13]="INTERNAL",ca[ca.UNAVAILABLE=14]="UNAVAILABLE",ca[ca.DATA_LOSS=15]="DATA_LOSS";
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
let ha=null;
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
 */function fa(){return new TextEncoder}
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
 */const da=new Kr([4294967295,4294967295],0);function pa(t){const e=fa().encode(t),n=new Hr;return n.update(e),new Uint8Array(n.digest())}function ga(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class ma{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new va(`Invalid padding: ${e}`);if(n<0)throw new va(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new va(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new va(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=Kr.fromNumber(this.Ae)}Ve(t,e,n){let r=t.add(e.multiply(Kr.fromNumber(n)));return 1===r.compare(da)&&(r=new Kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ae)return!1;const e=pa(t),[n,r]=ga(e);for(let i=0;i<this.hashCount;i++){const t=this.Ve(n,r,i);if(!this.me(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ma(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ae)return;const e=pa(t),[n,r]=ga(e);for(let i=0;i<this.hashCount;i++){const t=this.Ve(n,r,i);this.fe(t)}}fe(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,_a.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ya(bi.min(),r,new Ki(yi),wo(),Ao())}}class _a{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new _a(n,e,Ao(),Ao(),Ao())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e,n,r){this.ge=t,this.removedTargetIds=e,this.key=n,this.pe=r}}class ba{constructor(t,e){this.targetId=t,this.ye=e}}class Ea{constructor(t,e,n=Zi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ia{constructor(){this.we=0,this.Se=Ca(),this.be=Zi.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=Ao(),e=Ao(),n=Ao();return this.Se.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new _a(this.be,this.De,t,e,n)}Oe(){this.Ce=!1,this.Se=Ca()}Ne(t,e){this.Ce=!0,this.Se=this.Se.insert(t,e)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Ta{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=wo(),this.Ue=Sa(),this.We=new Ki(yi)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,(e=>{const n=this.Je(e);switch(t.state){case 0:this.Ye(e)&&n.Me(t.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(t.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(e);break;case 3:this.Ye(e)&&(n.qe(),n.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),n.Me(t.resumeToken));break;default:ni()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach(((t,n)=>{this.Ye(n)&&e(n)}))}Xe(t){const e=t.targetId,n=t.ye.count,r=this.et(e);if(r){const i=r.target;if(Ys(i))if(0===n){const t=new Ci(i.path);this.je(e,t,Ss.newNoDocument(t,bi.min()))}else ri(1===n);else{const r=this.tt(e);if(r!==n){const n=this.nt(t),i=n?this.rt(n,t,r):1;if(0!==i){this.Ze(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,t)}null==ha||ha.it(function(t,e,n,r,i){var s,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(u=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==f?void 0:f.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.ye,this.Qe.st(),n,i))}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=rs(n).toUint8Array()}catch(t){if(t instanceof Yi)return ti("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ma(s,r,i)}catch(t){return ti(t instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ae?null:o}rt(t,e,n){return e.ye.count===n-this.ot(t,e.targetId)?0:2}ot(t,e){const n=this.Qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.je(e,n,null),r++)})),r}_t(t){const e=new Map;this.Ke.forEach(((n,r)=>{const i=this.et(r);if(i){if(n.current&&Ys(i.target)){const e=new Ci(i.target.path);null!==this.$e.get(e)||this.ut(r,e)||this.je(r,e,Ss.newNoDocument(e,t))}n.Fe&&(e.set(r,n.xe()),n.Oe())}}));let n=Ao();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.et(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$e.forEach(((e,n)=>n.setReadTime(t)));const r=new ya(t,e,this.We,this.$e,n);return this.$e=wo(),this.Ue=Sa(),this.We=new Ki(yi),r}ze(t,e){if(!this.Ye(t))return;const n=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,n),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,n){if(!this.Ye(t))return;const r=this.Je(t);this.ut(t,e)?r.Ne(e,1):r.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),n&&(this.$e=this.$e.insert(e,n))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new Ia,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Ji(yi),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=null!==this.et(t);return e||Yr("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new Ia),this.Qe.getRemoteKeysForTarget(t).forEach((e=>{this.je(t,e,null)}))}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function Sa(){return new Ki(Ci.comparator)}function Ca(){return new Ki(Ci.comparator)}const ka=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Aa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ra=(()=>{const t={and:"AND",or:"OR"};return t})();class Oa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Na(t,e){return t.useProto3Json||Fi(e)?e:{value:e}}function xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Da(t){return ri(!!t),bi.fromTimestamp(function(t){const e=es(t);return new wi(e.seconds,e.nanos)}(t))}function La(t,e){return function(t){return new Ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ma(t){const e=Ii.fromString(t);return ri(tu(e)),e}function Ua(t,e){const n=Ma(e);if(n.get(1)!==t.databaseId.projectId)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ci(Ba(n))}function Fa(t,e){return La(t.databaseId,e)}function ja(t){const e=Ma(t);return 4===e.length?Ii.emptyPath():Ba(e)}function Va(t){return new Ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ba(t){return ri(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $a(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ni()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ri(void 0===e||"string"==typeof e),Zi.fromBase64String(e||"")):(ri(void 0===e||e instanceof Uint8Array),Zi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?si.UNKNOWN:la(t.code);return new oi(e,t.message||"")}(o);n=new Ea(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ua(t,r.document.name),s=Da(r.document.updateTime),o=r.document.createTime?Da(r.document.createTime):bi.min(),a=new Ts({mapValue:{fields:r.document.fields}}),u=Ss.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new wa(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ua(t,r.document),s=r.readTime?Da(r.readTime):bi.min(),o=Ss.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ua(t,r.document),s=r.removedTargetIds||[];n=new wa([],s,i,null)}else{if(!("filter"in e))return ni();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new aa(r,i),o=t.targetId;n=new ba(o,s)}}return n}function za(t,e){return{documents:[Fa(t,e.path)]}}function qa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Fa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return Za(Ps.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Xa(t.field),direction:Ga(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Na(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ha(t){let e=ja(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Wa(t);return e instanceof Ps&&Ls(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Rs(Ya(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Fi(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Cs(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Cs(n,e)}(n.endAt)),to(e,i,o,s,a,"F",u,c)}function Ka(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ni()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Wa(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ya(t.unaryFilter.field);return xs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ya(t.unaryFilter.field);return xs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ya(t.unaryFilter.field);return xs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ya(t.unaryFilter.field);return xs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ni()}}(t):void 0!==t.fieldFilter?function(t){return xs.create(Ya(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ni()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ps.create(t.compositeFilter.filters.map((t=>Wa(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ni()}}(t.compositeFilter.op))}(t):ni()}function Ga(t){return ka[t]}function Ja(t){return Aa[t]}function Qa(t){return Ra[t]}function Xa(t){return{fieldPath:t.canonicalString()}}function Ya(t){return Si.fromServerFormat(t.fieldPath)}function Za(t){return t instanceof xs?function(t){if("=="===t.op){if(ws(t.value))return{unaryFilter:{field:Xa(t.field),op:"IS_NAN"}};if(_s(t.value))return{unaryFilter:{field:Xa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ws(t.value))return{unaryFilter:{field:Xa(t.field),op:"IS_NOT_NAN"}};if(_s(t.value))return{unaryFilter:{field:Xa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xa(t.field),op:Ja(t.op),value:t.value}}}(t):t instanceof Ps?function(t){const e=t.getFilters().map((t=>Za(t)));return 1===e.length?e[0]:{compositeFilter:{op:Qa(t.op),filters:e}}}(t):ni()}function tu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e,n,r,i=bi.min(),s=bi.min(),o=Zi.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new eu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new eu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.ht=t}}function ru(t){const e=Ha({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?co(e,e.limit,"L"):e}
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
 */class iu{constructor(){}dt(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(ns(t.integerValue));else if("doubleValue"in t){const n=ns(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),ji(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(`${n.seconds||""}`),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(rs(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?Is(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):ni()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const n=t.fields||{};this.At(e,55);for(const r of Object.keys(n))this.ft(r,e),this.Tt(n[r],e)}bt(t,e){const n=t.values||[];this.At(e,50);for(const r of n)this.Tt(r,e)}wt(t,e){this.At(e,37),Ci.fromName(t).path.forEach((t=>{this.At(e,60),this.Dt(t,e)}))}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}iu.Ct=new iu;
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
class su{constructor(){this.an=new ou}addToCollectionParentIndex(t,e){return this.an.add(e),Li.resolve()}getCollectionParents(t,e){return Li.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return Li.resolve()}deleteFieldIndex(t,e){return Li.resolve()}deleteAllFieldIndexes(t){return Li.resolve()}createTargetIndexes(t,e){return Li.resolve()}getDocumentsMatchingTarget(t,e){return Li.resolve(null)}getIndexType(t,e){return Li.resolve(0)}getFieldIndexes(t,e){return Li.resolve([])}getNextCollectionGroupToUpdate(t){return Li.resolve(null)}getMinOffset(t,e){return Li.resolve(Oi.min())}getMinOffsetFromCollectionGroup(t,e){return Li.resolve(Oi.min())}updateCollectionGroup(t,e,n){return Li.resolve()}updateIndexEntries(t,e){return Li.resolve()}}class ou{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ji(Ii.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ji(Ii.comparator)).toArray()}}
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
 */new Uint8Array(0);class au{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new au(t,au.DEFAULT_COLLECTION_PERCENTILE,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */au.DEFAULT_COLLECTION_PERCENTILE=10,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,au.DEFAULT=new au(41943040,au.DEFAULT_COLLECTION_PERCENTILE,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),au.DISABLED=new au(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new uu(0)}static Ln(){return new uu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class cu{constructor(){this.changes=new yo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ss.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Li.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class lu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Xo(n.mutation,t,Xi.empty(),wi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ao()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ao()){const r=To();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Eo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=To();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ao())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=wo();const s=Co(),o=function(){return Co()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ta)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Xo(o.mutation,e,o.mutation.getFieldMask(),wi.now())):s.set(e.key,Xi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new lu(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Co();let r=new Ki(((t,e)=>t-e)),i=Ao();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Xi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ao()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=So();u.forEach((t=>{if(!i.has(t)){const r=Jo(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):so(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Li.resolve(To());let o=-1,a=i;return s.next((e=>Li.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Li.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ao()))).next((t=>({batchId:o,changes:Io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ci(e)).next((t=>{let e=Eo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Eo();return this.indexManager.getCollectionParents(t,i).next((o=>Li.forEach(o,(o=>{const a=function(t,e){return new Zs(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ss.newInvalidDocument(r)))}));let n=Eo();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Xo(s.mutation,r,Xi.empty(),wi.now()),po(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return Li.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Da(t.createTime)}}(e)),Li.resolve()}getNamedQuery(t,e){return Li.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(t){return{name:t.name,query:ru(t.bundledQuery),readTime:Da(t.readTime)}}(e)),Li.resolve()}}
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
 */class du{constructor(){this.overlays=new Ki(Ci.comparator),this.Pr=new Map}getOverlay(t,e){return Li.resolve(this.overlays.get(e))}getOverlays(t,e){const n=To();return Li.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.It(t,e,r)})),Li.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Pr.delete(n)),Li.resolve()}getOverlaysForCollection(t,e,n){const r=To(),i=e.length+1,s=new Ci(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Li.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ki(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=To(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=To(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Li.resolve(o)}It(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new oa(e,n));let i=this.Pr.get(e);void 0===i&&(i=Ao(),this.Pr.set(e,i)),this.Pr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.Ir=new Ji(gu.dr),this.Tr=new Ji(gu.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new gu(t,e);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Rr(new gu(t,e))}Vr(t,e){t.forEach((t=>this.removeReference(t,e)))}mr(t){const e=new Ci(new Ii([])),n=new gu(e,t),r=new gu(e,t+1),i=[];return this.Tr.forEachInRange([n,r],(t=>{this.Rr(t),i.push(t.key)})),i}gr(){this.Ir.forEach((t=>this.Rr(t)))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const e=new Ci(new Ii([])),n=new gu(e,t),r=new gu(e,t+1);let i=Ao();return this.Tr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new gu(t,0),n=this.Ir.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class gu{constructor(t,e){this.key=t,this.yr=e}static dr(t,e){return Ci.comparator(t.key,e.key)||yi(t.yr,e.yr)}static Er(t,e){return yi(t.yr,e.yr)||Ci.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Ji(gu.dr)}checkEmpty(t){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new sa(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Sr=this.Sr.add(new gu(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(t,e){return Li.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(t){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gu(e,0),r=new gu(e,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],(t=>{const e=this.br(t.yr);i.push(e)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ji(yi);return e.forEach((t=>{const e=new gu(t,0),r=new gu(t,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([e,r],(t=>{n=n.add(t.yr)}))})),Li.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new gu(new Ci(i),0);let o=new Ji(yi);return this.Sr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.yr)),!0)}),s),Li.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.br(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ri(0===this.vr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return Li.forEach(e.mutations,(r=>{const i=new gu(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Sr=n}))}xn(t){}containsKey(t,e){const n=new gu(e,0),r=this.Sr.firstAfterOrEqual(n);return Li.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Li.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.Fr=t,this.docs=function(){return new Ki(Ci.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Li.resolve(n?n.document.mutableCopy():Ss.newInvalidDocument(e))}getEntries(t,e){let n=wo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ss.newInvalidDocument(t))})),Li.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=wo();const s=e.path,o=new Ci(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ni(Ri(o),n)<=0||(r.has(o.key)||po(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ni()}Mr(t,e){return Li.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new yu(this)}getSize(t){return Li.resolve(this.size)}}class yu extends cu{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)})),Li.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.persistence=t,this.Or=new yo((t=>Qs(t)),Xs),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Nr=0,this.Br=new pu,this.targetCount=0,this.Lr=uu.Bn()}forEachTarget(t,e){return this.Or.forEach(((t,n)=>e(n))),Li.resolve()}getLastRemoteSnapshotVersion(t){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Li.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),Li.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new uu(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,Li.resolve()}updateTargetData(t,e){return this.Qn(e),Li.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,Li.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Or.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(t){return Li.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return Li.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Ar(e,n),Li.resolve()}removeMatchingKeys(t,e,n){this.Br.Vr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Li.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),Li.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.pr(e);return Li.resolve(n)}containsKey(t,e){return Li.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.kr={},this.overlays={},this.qr=new Ui(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new _u(this),this.indexManager=new su,this.remoteDocumentCache=function(t){return new vu(t)}((t=>this.referenceDelegate.$r(t))),this.serializer=new nu(e),this.Ur=new fu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new du,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new mu(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,n){Yr("MemoryPersistence","Starting transaction:",t);const r=new bu(this.qr.next());return this.referenceDelegate.Wr(),n(r).next((t=>this.referenceDelegate.Gr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}zr(t,e){return Li.or(Object.values(this.kr).map((n=>()=>n.containsKey(t,e))))}}class bu extends Pi{constructor(t){super(),this.currentSequenceNumber=t}}class Eu{constructor(t){this.persistence=t,this.jr=new pu,this.Hr=null}static Jr(t){return new Eu(t)}get Yr(){if(this.Hr)return this.Hr;throw ni()}addReference(t,e,n){return this.jr.addReference(n,e),this.Yr.delete(n.toString()),Li.resolve()}removeReference(t,e,n){return this.jr.removeReference(n,e),this.Yr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),Li.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach((t=>this.Yr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Yr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Wr(){this.Hr=new Set}Gr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Yr,(n=>{const r=Ci.fromPath(n);return this.Zr(t,r).next((t=>{t||e.removeEntry(r,bi.min())}))})).next((()=>(this.Hr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zr(t,e).next((t=>{t?this.Yr.delete(e.toString()):this.Yr.add(e.toString())}))}$r(t){return 0}Zr(t,e){return Li.or([()=>Li.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Qi=n,this.Ki=r}static $i(t,e){let n=Ao(),r=Ao();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Iu(t,e.fromCache,n,r)}}
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
 */class Tu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class Su{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Hi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Ji(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Tu;return this.Yi(t,e,n).next((r=>{if(i.result=r,this.Wi)return this.Zi(t,e,n,r.size)}))})).next((()=>i.result))}Zi(t,e,n,r){return n.documentReadCount<this.Gi?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","SDK will not create cache indexes for query:",fo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),Li.resolve()):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Query:",fo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","The SDK decides to create cache indexes for query:",fo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ao(e))):Li.resolve())}Hi(t,e){if(no(e))return Li.resolve(null);let n=ao(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=co(e,null,"F"),n=ao(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ao(...r);return this.ji.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Xi(e,r);return this.es(e,s,i,n.readTime)?this.Hi(t,co(e,null,"F")):this.ts(t,s,e,n)}))))})))))}Ji(t,e,n,r){return no(e)||r.isEqual(bi.min())?Li.resolve(null):this.ji.getDocuments(t,n).next((i=>{const s=this.Xi(e,i);return this.es(e,s,n,r)?Li.resolve(null):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fo(e)),this.ts(t,s,e,Ai(r,-1)).next((t=>t)))}))}Xi(t,e){let n=new Ji(mo(t));return e.forEach(((e,r)=>{po(t,r)&&(n=n.add(r))})),n}es(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(t,e,n){return Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Using full collection scan to execute query:",fo(e)),this.ji.getDocumentsMatchingQuery(t,e,Oi.min(),n)}ts(t,e,n,r){return this.ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e,n,r){this.persistence=t,this.ns=e,this.serializer=r,this.rs=new Ki(yi),this.ss=new yo((t=>Qs(t)),Xs),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(n)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hu(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.rs)))}}function ku(t,e,n,r){return new Cu(t,e,n,r)}async function Au(t,e){const n=ii(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.us(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ao();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({cs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ru(t){const e=ii(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Kr.getLastRemoteSnapshotVersion(t)))}function Ou(t,e){const n=ii(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Kr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Kr.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(Zi.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,s)&&o.push(n.Kr.updateTargetData(t,c))}));let a=wo(),u=Ao();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Nu(t,s,e.documentUpdates).next((t=>{a=t.ls,u=t.hs}))),!r.isEqual(bi.min())){const e=n.Kr.getLastRemoteSnapshotVersion(t).next((e=>n.Kr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Li.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.rs=i,t)))}function Nu(t,e,n){let r=Ao(),i=Ao();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=wo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bi.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Yr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ls:r,hs:i}}))}function xu(t,e){const n=ii(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Kr.getTargetData(t,e).next((i=>i?(r=i,Li.resolve(r)):n.Kr.allocateTargetId(t).next((i=>(r=new eu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Kr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.rs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(t.targetId,t),n.ss.set(e,t.targetId)),t}))}async function Pu(t,e,n){const r=ii(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Mi(t))throw t;Yr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Du(t,e,n){const r=ii(t);let i=bi.min(),s=Ao();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ii(t),i=r.ss.get(n);return void 0!==i?Li.resolve(r.rs.get(i)):r.Kr.getTargetData(e,n)}(r,t,ao(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.ns.getDocumentsMatchingQuery(t,e,n?i:bi.min(),n?s:Ao()))).next((t=>(Lu(r,go(e),t),{documents:t,Ps:s})))))}function Lu(t,e,n){let r=t.os.get(e)||bi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.os.set(e,r)}class Mu{constructor(){this.activeTargetIds=Oo()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Uu{constructor(){this.ro=new Mu,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,n){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new Mu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Fu{so(t){}shutdown(){}}
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
 */class ju{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){Yr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){Yr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Vu=null;function Bu(){return null===Vu?Vu=function(){return 268435456+Math.round(2147483648*Math.random())}():Vu++,"0x"+Vu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $u={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="WebChannelConnection";class Hu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(t,e,n,r,i){const s=Bu(),o=this.Do(t,e);Yr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,i),this.vo(t,o,a,n).then((e=>(Yr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ti("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Fo(t,e,n,r,i,s){return this.bo(t,e,n,r,i)}Co(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Do(t,e){const n=$u[t];return`${this.po}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const i=Bu();return new Promise(((s,o)=>{const a=new qr;a.setWithCredentials(!0),a.listenOnce(Vr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const e=a.getResponseJson();Yr(qu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case jr.TIMEOUT:Yr(qu,`RPC '${t}' ${i} timed out`),o(new oi(si.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(Yr(qu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(e)>=0?e:si.UNKNOWN}(e.status);o(new oi(t,e.message))}else o(new oi(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oi(si.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Yr(qu,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);Yr(qu,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}Mo(t,e,n){const r=Bu(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ur(),o=Fr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Co(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Yr(qu,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let h=!1,f=!1;const d=new zu({ho:e=>{f?Yr(qu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Yr(qu,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Yr(qu,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Po:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,zr.EventType.OPEN,(()=>{f||Yr(qu,`RPC '${t}' stream ${r} transport opened.`)})),p(l,zr.EventType.CLOSE,(()=>{f||(f=!0,Yr(qu,`RPC '${t}' stream ${r} transport closed`),d.mo())})),p(l,zr.EventType.ERROR,(e=>{f||(f=!0,ti(qu,`RPC '${t}' stream ${r} transport errored:`,e),d.mo(new oi(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,zr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ri(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Yr(qu,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ua[t];if(void 0!==e)return la(e)}(e),i=o.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.mo(new oi(n,i)),l.close()}else Yr(qu,`RPC '${t}' stream ${r} received:`,i),d.fo(i)}})),p(o,Br.STAT_EVENT,(e=>{e.stat===$r.PROXY?Yr(qu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===$r.NOPROXY&&Yr(qu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Vo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function Ku(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return new Oa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e,n=1e3,r=1.5,i=6e4){this._i=t,this.timerId=e,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,e-n);r>0&&Yr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,(()=>(this.ko=Date.now(),t()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e,n,r,i,s,o,a){this._i=t,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Gu(t,e)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(()=>this.t_())))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,e){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==t?this.Ho.reset():e&&e.code===si.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),e=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Go===e&&this.__(t,n)}),(e=>{t((()=>{const t=new oi(si.UNKNOWN,"Fetching auth token failed: "+e.message);return this.a_(t)}))}))}__(t,e){const n=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io((()=>{n((()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,(()=>(this.Yo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((t=>{n((()=>this.a_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Zo(){this.state=5,this.Ho.Qo((async()=>{this.state=0,this.start()}))}a_(t){return Yr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return e=>{this._i.enqueueAndForget((()=>this.Go===t?e():(Yr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qu extends Ju{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}u_(t,e){return this.connection.Mo("Listen",t,e)}onMessage(t){this.Ho.reset();const e=$a(this.serializer,t),n=function(t){if(!("targetChange"in t))return bi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bi.min():e.readTime?Da(e.readTime):bi.min()}(t);return this.listener.c_(e,n)}l_(t){const e={};e.database=Va(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Ys(r)?{documents:za(t,r)}:{query:qa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Pa(t,e.resumeToken);const r=Na(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(bi.min())>0){n.readTime=xa(t,e.snapshotVersion.toTimestamp());const r=Na(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Ka(this.serializer,t);n&&(e.labels=n),this.n_(e)}h_(t){const e={};e.database=Va(this.serializer),e.removeTarget=t,this.n_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.bo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}Fo(t,e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Fo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}terminate(){this.R_=!0}}class Yu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve()))))}b_(t){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,"Online"===t&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Zr(e),this.p_=!1):Yr("OnlineStateTracker",e)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so((t=>{n.enqueueAndForget((async()=>{uc(this)&&(Yr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ii(t);e.F_.add(4),await ec(e),e.O_.set("Unknown"),e.F_.delete(4),await tc(e)}(this))}))})),this.O_=new Yu(n,r)}}async function tc(t){if(uc(t))for(const e of t.M_)await e(!0)}async function ec(t){for(const e of t.M_)await e(!1)}function nc(t,e){const n=ii(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),ac(n)?oc(n):mc(n).Yo()&&ic(n,e))}function rc(t,e){const n=ii(t),r=mc(n);n.v_.delete(e),r.Yo()&&sc(n,e),0===n.v_.size&&(r.Yo()?r.e_():uc(n)&&n.O_.set("Unknown"))}function ic(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mc(t).l_(e)}function sc(t,e){t.N_.Le(e),mc(t).h_(e)}function oc(t){t.N_=new Ta({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),mc(t).start(),t.O_.y_()}function ac(t){return uc(t)&&!mc(t).Jo()&&t.v_.size>0}function uc(t){return 0===ii(t).F_.size}function cc(t){t.N_=void 0}async function lc(t){t.v_.forEach(((e,n)=>{ic(t,e)}))}async function hc(t,e){cc(t),ac(t)?(t.O_.b_(e),oc(t)):t.O_.set("Unknown")}async function fc(t,e,n){if(t.O_.set("Online"),e instanceof Ea&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.v_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.v_.delete(r),t.N_.removeTarget(r))}(t,e)}catch(n){Yr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await dc(t,n)}else if(e instanceof wa?t.N_.Ge(e):e instanceof ba?t.N_.Xe(e):t.N_.He(e),!n.isEqual(bi.min()))try{const e=await Ru(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.N_._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.v_.get(r);i&&t.v_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.v_.get(e);if(!r)return;t.v_.set(e,r.withResumeToken(Zi.EMPTY_BYTE_STRING,r.snapshotVersion)),sc(t,e);const i=new eu(r.target,e,n,r.sequenceNumber);ic(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Yr("RemoteStore","Failed to raise snapshot:",e),await dc(t,e)}}async function dc(t,e,n){if(!Mi(e))throw e;t.F_.add(1),await ec(t),t.O_.set("Offline"),n||(n=()=>Ru(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Yr("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await tc(t)}))}async function pc(t,e){const n=ii(t);n.asyncQueue.verifyOperationInProgress(),Yr("RemoteStore","RemoteStore received new credentials");const r=uc(n);n.F_.add(3),await ec(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await tc(n)}async function gc(t,e){const n=ii(t);e?(n.F_.delete(2),await tc(n)):e||(n.F_.add(2),await ec(n),n.O_.set("Unknown"))}function mc(t){return t.B_||(t.B_=function(t,e,n){const r=ii(t);return r.V_(),new Qu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Io:lc.bind(null,t),Eo:hc.bind(null,t),c_:fc.bind(null,t)}),t.M_.push((async e=>{e?(t.B_.Xo(),ac(t)?oc(t):t.O_.set("Unknown")):(await t.B_.stop(),cc(t))}))),t.B_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new vc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oi(si.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yc(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),Mi(t))return new oi(si.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ci.comparator(e.key,n.key):(t,e)=>Ci.comparator(t.key,e.key),this.keyedMap=Eo(),this.sortedSet=new Ki(this.comparator)}static emptySet(t){return new _c(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _c))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _c;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.k_=new Ki(Ci.comparator)}track(t){const e=t.doc.key,n=this.k_.get(e);n?0!==t.type&&3===n.type?this.k_=this.k_.insert(e,t):3===t.type&&1!==n.type?this.k_=this.k_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.k_=this.k_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.k_=this.k_.remove(e):1===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):ni():this.k_=this.k_.insert(e,t)}q_(){const t=[];return this.k_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bc{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new bc(t,e,_c.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.Q_=void 0,this.listeners=[]}}class Ic{constructor(){this.queries=new yo((t=>ho(t)),lo),this.onlineState="Unknown",this.K_=new Set}}async function Tc(t,e){const n=ii(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ec),i)try{s.Q_=await n.onListen(r)}catch(t){const n=yc(t,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&Ac(n)}async function Sc(t,e){const n=ii(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Cc(t,e){const n=ii(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.W_(i)&&(r=!0);e.Q_=i}}r&&Ac(n)}function kc(t,e,n){const r=ii(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ac(t){t.K_.forEach((t=>{t.next()}))}class Rc{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=bc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Oc{constructor(t){this.key=t}}class Nc{constructor(t){this.key=t}}class xc{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Ao(),this.mutatedKeys=Ao(),this.ua=mo(t),this.ca=new _c(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new wc,r=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=po(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ia(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.ua(l,a)>0||u&&this.ua(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ca:s,Pa:n,es:o,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const i=t.Pa.q_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ua(t.doc,e.doc))),this.da(n);const s=e?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return this._a=o,0!==i.length||a?{snapshot:new bc(this.query,t.ca,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new wc,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=Ao(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new Nc(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new Oc(n))})),e}Ra(t){this.oa=t.Ps,this.aa=Ao();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return bc.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class Pc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Dc{constructor(t){this.key=t,this.ma=!1}}class Lc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new yo((t=>ho(t)),lo),this.pa=new Map,this.ya=new Set,this.wa=new Ki(Ci.comparator),this.Sa=new Map,this.ba=new pu,this.Da={},this.Ca=new Map,this.va=uu.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function Mc(t,e){const n=Qc(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const t=await xu(n.localStore,ao(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Uc(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&nc(n.remoteStore,t)}return i}async function Uc(t,e,n,r,i){t.Ma=(e,n,r)=>async function(t,e,n,r){let i=e.view.ha(n);i.es&&(i=await Du(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return qc(t,e.targetId,o.Ea),o.snapshot}(t,e,n,r);const s=await Du(t.localStore,e,!0),o=new xc(e,s.Ps),a=o.ha(s.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);qc(t,n,c.Ea);const l=new Pc(e,n,o);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function Fc(t,e){const n=ii(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((t=>!lo(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),rc(n.remoteStore,r.targetId),$c(n,r.targetId)})).catch(Di)):($c(n,r.targetId),await Pu(n.localStore,r.targetId,!0))}async function jc(t,e){const n=ii(t);try{const t=await Ou(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Sa.get(e);r&&(ri(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?ri(r.ma):t.removedDocuments.size>0&&(ri(r.ma),r.ma=!1))})),await Wc(n,t,e)}catch(t){await Di(t)}}function Vc(t,e,n){const r=ii(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ii(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.U_(e)&&(r=!0)})),r&&Ac(n)}(r.eventManager,e),t.length&&r.fa.c_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bc(t,e,n){const r=ii(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let t=new Ki(Ci.comparator);t=t.insert(s,Ss.newNoDocument(s,bi.min()));const n=Ao().add(s),i=new ya(bi.min(),new Map,new Ki(yi),t,n);await jc(r,i),r.wa=r.wa.remove(s),r.Sa.delete(e),Kc(r)}else await Pu(r.localStore,e,!1).then((()=>$c(r,e,n))).catch(Di)}function $c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach((e=>{t.ba.containsKey(e)||zc(t,e)}))}function zc(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(rc(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Kc(t))}function qc(t,e,n){for(const r of n)r instanceof Oc?(t.ba.addReference(r.key,e),Hc(t,r)):r instanceof Nc?(Yr("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||zc(t,r.key)):ni()}function Hc(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(Yr("SyncEngine","New document in limbo: "+n),t.ya.add(r),Kc(t))}function Kc(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Ci(Ii.fromString(e)),r=t.va.next();t.Sa.set(r,new Dc(n)),t.wa=t.wa.insert(n,r),nc(t.remoteStore,new eu(ao(eo(n.path)),r,"TargetPurposeLimboResolution",Ui.ae))}}async function Wc(t,e,n){const r=ii(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((t,a)=>{o.push(r.Ma(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Iu.$i(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fa.c_(i),await async function(t,e){const n=ii(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Li.forEach(e,(e=>Li.forEach(e.Qi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Li.forEach(e.Ki,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Mi(t))throw t;Yr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.rs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(t,i)}}}(r.localStore,s))}async function Gc(t,e){const n=ii(t);if(!n.currentUser.isEqual(e)){Yr("SyncEngine","User change. New user:",e.toKey());const t=await Au(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach((t=>{t.forEach((t=>{t.reject(new oi(si.CANCELLED,e))}))})),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Wc(n,t.cs)}}function Jc(t,e){const n=ii(t),r=n.Sa.get(e);if(r&&r.ma)return Ao().add(r.key);{let t=Ao();const r=n.pa.get(e);if(!r)return t;for(const e of r){const r=n.ga.get(e);t=t.unionWith(r.view.la)}return t}}function Qc(t){const e=ii(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bc.bind(null,e),e.fa.c_=Cc.bind(null,e.eventManager),e.fa.xa=kc.bind(null,e.eventManager),e}class Xc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Wu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ku(this.persistence,new Su,t.initialUser,this.serializer)}createPersistence(t){return new wu(Eu.Jr,this.serializer)}createSharedClientState(t){return new Uu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gc.bind(null,this.syncEngine),await gc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ic}()}createDatastore(t){const e=Wu(t.databaseInfo.databaseId),n=function(t){return new Hu(t)}(t.databaseInfo);return function(t,e,n,r){return new Xu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Zu(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Vc(this.syncEngine,t,0)),function(){return ju.C()?new ju:new Fu}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Lc(t,e,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ii(t);Yr("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await ec(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Zc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Zr("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class tl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Gr.UNAUTHENTICATED,this.clientId=vi.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Yr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Yr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=yc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function el(t,e){t.asyncQueue.verifyOperationInProgress(),Yr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Au(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function nl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await il(t);Yr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>pc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>pc(e.remoteStore,n))),t._onlineComponents=e}function rl(t){return"FirebaseError"===t.name?t.code===si.FAILED_PRECONDITION||t.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function il(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Yr("FirestoreClient","Using user provided OfflineComponentProvider");try{await el(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rl(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await el(t,new Xc)}}else Yr("FirestoreClient","Using default OfflineComponentProvider"),await el(t,new Xc);return t._offlineComponents}async function sl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Yr("FirestoreClient","Using user provided OnlineComponentProvider"),await nl(t,t._uninitializedComponentsProvider._online)):(Yr("FirestoreClient","Using default OnlineComponentProvider"),await nl(t,new Yc))),t._onlineComponents}async function ol(t){const e=await sl(t),n=e.eventManager;return n.onListen=Mc.bind(null,e.syncEngine),n.onUnlisten=Fc.bind(null,e.syncEngine),n}function al(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Zc({next:n=>{e.enqueueAndForget((()=>Sc(t,o))),n.fromCache&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Rc(n,s,{includeMetadataChanges:!0,Z_:!0});return Tc(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}
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
function ul(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const cl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new oi(si.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hl(t,e,n,r){if(!0===e&&!0===r)throw new oi(si.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fl(t){if(Ci.isDocumentKey(t))throw new oi(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ni()}function pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oi(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new oi(si.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new oi(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new oi(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ul(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ml{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oi(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new oi(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ci;switch(t.type){case"firstParty":return new di(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new oi(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cl.get(t);e&&(Yr("ComponentProvider","Removing Datastore"),cl.delete(t),e.terminate())}(this),Promise.resolve()}}function vl(t,e,n,r={}){var i;const s=(t=pl(t,ml))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Gr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new oi(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gr(s)}t._authCredentials=new li(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yl(this.firestore,t,this._query)}}class _l{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _l(this.firestore,t,this._key)}}class wl extends yl{constructor(t,e,n){super(t,e,eo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _l(this.firestore,null,new Ci(t))}withConverter(t){return new wl(this.firestore,t,this._path)}}function bl(t,e,...n){if(t=(0,a.m9)(t),ll("collection","path",e),t instanceof ml){const r=Ii.fromString(e,...n);return fl(r),new wl(t,null,r)}{if(!(t instanceof _l||t instanceof wl))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ii.fromString(e,...n));return fl(r),new wl(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Gu(this,"async_queue_retry"),this.ou=()=>{const t=Ku();t&&Yr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const t=Ku();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=Ku();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise((()=>{}));const e=new ai;return this.au((()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xa.push(t),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Mi(t))throw t;Yr("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(t){const e=this.Za.then((()=>(this.ru=!0,t().catch((t=>{this.nu=t,this.ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.ru=!1,t))))));return this.Za=e,e}enqueueAfterDelay(t,e,n){this._u(),this.su.indexOf(t)>-1&&(e=0);const r=vc.createAndSchedule(this,t,e,n,(t=>this.cu(t)));return this.tu.push(r),r}_u(){this.nu&&ni()}verifyOperationInProgress(){}async lu(){let t;do{t=this.Za,await t}while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then((()=>{this.tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lu()}))}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class Il extends ml{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new El}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Tl(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&vl(s,...t)}return s}function Sl(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new as(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ul(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kl(Zi.fromBase64String(t))}catch(t){throw new oi(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new kl(Zi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new oi(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new oi(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new oi(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yi(this._lat,t._lat)||yi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new RegExp("[~\\*/\\[\\]]");function Nl(t,e,n){if(e.search(Ol)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Al(...e.split("."))._internalPath}catch(b){throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new oi(si.INVALID_ARGUMENT,a+t+u)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _l(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Dl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ll("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Dl extends Pl{data(){return super.data()}}function Ll(t,e){return"string"==typeof e?Nl(t,e):e instanceof Al?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new oi(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ul{convertValue(t,e="none"){switch(ls(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ns(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ni()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return qi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Rl(ns(t.latitude),ns(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ss(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(os(t));default:return null}}convertTimestamp(t){const e=es(t);return new wi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ii.fromString(t);ri(tu(n));const r=new us(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(e)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Fl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jl extends Pl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ll("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Vl extends jl{data(t={}){return super.data(t)}}class Bl{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Fl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Vl(this._firestore,this._userDataWriter,n.key,n,new Fl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new oi(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Vl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Fl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Vl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Fl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:$l(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function $l(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}class zl extends Ul{constructor(t){super(),this.firestore=t}convertBytes(t){return new kl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _l(this.firestore,null,e)}}function ql(t){t=pl(t,yl);const e=pl(t.firestore,Il),n=Sl(e),r=new zl(e);return Ml(t._query),al(n,t._query).then((n=>new Bl(e,r,t,n)))}new WeakMap;
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
 */!function(t,e=!0){!function(t){Jr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Il(new hi(t.getProvider("auth-internal")),new gi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new oi(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"4.2.0",t),(0,i.KN)(Wr,"4.2.0","esm2017")}()},1294:function(t,e,n){"use strict";n.d(e,{Jt:function(){return Ot},cF:function(){return xt},iH:function(){return Nt}});n(2801),n(7658),n(1439),n(7585),n(5315);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class l extends i.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function y(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function I(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function C(t){return new l(h.INVALID_ARGUMENT,t)}function k(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function A(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(r){return new O(t,"")}if(""===n.path)return n;throw I(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),u={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:u,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return 2===a}let c=!1;function l(...t){c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,u())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(c)return void f();if(t)return f(),void l.call(null,t,...e);const n=u()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),c||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function P(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return void 0!==t}function L(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t,e,n,r){if(r<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function V(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class B{constructor(t,e,n,r,i,s,o,a,u,c,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new $(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||V(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new $(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new $(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());D(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():b();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new $(!1,null,!0)):this.backoffId_=x(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ${constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function H(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function W(t,e,n,r,i,s,o=!0){const a=j(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return H(c,e),z(c,n),q(c,s),K(c,r),new B(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function J(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function Q(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function X(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e){return e}class Z{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||Y}}let tt=null;function et(t){return!M(t)||t.length<2?t:X(t)}function nt(){if(tt)return tt;const t=[];function e(t,e){return et(e)}t.push(new Z("bucket")),t.push(new Z("generation")),t.push(new Z("metageneration")),t.push(new Z("name","fullPath",!0));const n=new Z("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Z("size");return i.xform=r,t.push(i),t.push(new Z("timeCreated")),t.push(new Z("updated")),t.push(new Z("md5Hash",null,!0)),t.push(new Z("cacheControl",null,!0)),t.push(new Z("contentDisposition",null,!0)),t.push(new Z("contentEncoding",null,!0)),t.push(new Z("contentLanguage",null,!0)),t.push(new Z("contentType",null,!0)),t.push(new Z("metadata","customMetadata",!0)),tt=t,tt}function rt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new O(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return rt(r,t),r}function st(t,e,n){const r=G(e);if(null===r)return null;const i=r;return it(t,i,n)}function ot(t,e,n,r){const i=G(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),u=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),u=F(a,n,r),c=j({alt:"media",token:e});return u+c}));return u[0]}class at{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class vt{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new vt(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X(this._location.path)}get storage(){return this._service}get parent(){const t=J(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new vt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function yt(t){t._throwIfRoot("getDownloadURL");const e=ft(t.storage,t._location,nt());return t.storage.makeRequestWithTokens(e,mt).then((t=>{if(null===t)throw S();return t}))}function _t(t,e){const n=Q(t._location.path,e),r=new O(t._location.bucket,n);return new vt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return/^[A-Za-z]+:\/\//.test(t)}function bt(t,e){return new vt(t,e)}function Et(t,e){if(t instanceof Ct){const n=t;if(null==n._bucket)throw T();const r=new vt(n,n._bucket);return null!=e?Et(r,e):r}return void 0!==e?_t(t,e):t}function It(t,e){if(e&&wt(e)){if(t instanceof Ct)return bt(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return Et(t,e)}function Tt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}function St(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class Ct{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):Tt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Tt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new vt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new N(k());{const s=W(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const kt="@firebase/storage",At="0.11.2",Rt="storage";function Ot(t){return t=(0,i.m9)(t),yt(t)}function Nt(t,e){return t=(0,i.m9)(t),It(t,e)}function xt(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,Rt),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&Pt(s,...o),s}function Pt(t,e,n,r={}){St(t,e,n,r)}
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
 */function Dt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ct(n,i,s,e,r.Jn)}function Lt(){(0,r.Xd)(new s.wA(Rt,Dt,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(kt,At,""),(0,r.KN)(kt,At,"esm2017")}Lt()},2483:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return V},tv:function(){return ie}});n(7658),n(541);var r=n(3396),i=n(4958);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function u(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const c=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(e.matched[r],n.matched[i])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_(t[n],e[n]))return!1;return!0}function _(t,e){return l(t)?w(t,e):l(e)?w(e,t):t===e}function w(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,I;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function T(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function C(t,e){return t.replace(S,"#")+e}function k(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const N=new Map;function x(t,e){N.set(t,e)}function P(t){const e=N.get(t);return N.delete(t),e}let D=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const u=({state:s})=>{const a=L(t,location),u=n.value,c=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===u)return void(o=null);l=c?s.position-c.position:0}else r(a);i.forEach((t=>{t(n.value,u,{delta:l,type:E.pop,direction:l?l>0?I.forward:I.back:I.unknown})}))};function c(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function U(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function F(t){const{history:e,location:n}=window,r={value:L(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:D()+t+r;try{e[o?"replaceState":"pushState"](s,"",u),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](u)}}function o(t,n){const o=a({},e.state,U(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function u(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const u=a({},U(r.value,t,null),{position:o.position+1},n);s(t,u,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:u,replace:o}}function j(t){t=T(t);const e=F(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),j(t)}function B(t){return"string"===typeof t||t&&"object"===typeof t}function $(t){return"string"===typeof t||"symbol"===typeof t}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function K(t,e){return a(new Error,{type:t,[q]:!0},e)}function W(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const G="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},J,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:u,regexp:c}=r;s.push({name:t,repeatable:n,optional:u});const l=c||G;if(l!==G){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=u&&a.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),i+=f,o+=20,u&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function u(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,u=s in e?e[s]:"";if(l(u)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=l(u)?u.join("/"):u;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:u,stringify:c}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(tt(r))return 1;if(tt(i))return-1}return i.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,u=0,c="",l="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}while(u<t.length)if(a=t[u++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:nt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function it(t,e,n){const r=X(rt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function st(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,u=at(t);u.aliasOf=r&&r.record;const h=ht(e,t),f=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=it(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ct(d)&&o(t.name)),u.children){const t=u.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:c}function o(t){if($(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function u(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,u={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw K(1,{location:t});0,o=i.record.name,u=a(ot(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,i.keys.map((t=>t.name)))),s=i.stringify(u)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(u=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw K(1,{location:t,currentLocation:e});o=i.record.name,u=a({},e.params,t.params),s=i.stringify(u)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:u,matched:c,meta:lt(c)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:u,getRecordMatcher:i}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ut(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ut(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const dt=/#/g,pt=/&/g,gt=/\//g,mt=/=/g,vt=/\?/g,yt=/\+/g,_t=/%5B/g,wt=/%5D/g,bt=/%5E/g,Et=/%60/g,It=/%7B/g,Tt=/%7C/g,St=/%7D/g,Ct=/%20/g;function kt(t){return encodeURI(""+t).replace(Tt,"|").replace(_t,"[").replace(wt,"]")}function At(t){return kt(t).replace(It,"{").replace(St,"}").replace(bt,"^")}function Rt(t){return kt(t).replace(yt,"%2B").replace(Ct,"+").replace(dt,"%23").replace(pt,"%26").replace(Et,"`").replace(It,"{").replace(St,"}").replace(bt,"^")}function Ot(t){return Rt(t).replace(mt,"%3D")}function Nt(t){return kt(t).replace(dt,"%23").replace(vt,"%3F")}function xt(t){return null==t?"":Nt(t).replace(gt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Pt(n<0?t:t.slice(0,n)),o=n<0?null:Pt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=Ot(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&Rt(t))):[r&&Rt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ut=Symbol(""),Ft=Symbol(""),jt=Symbol(""),Vt=Symbol(""),Bt=Symbol("");function $t(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const u=t=>{!1===t?a(K(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(K(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},c=t.call(r&&r.instances[i],e,n,u);let l=Promise.resolve(c);t.length<3&&(l=l.then(u)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,u=o[e];u&&i.push(zt(u,n,r,s,t))}else{let u=a();0,i.push((()=>u.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const u=a.__vccOpts||a,c=u[e];return c&&zt(c,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Kt(t){const e=(0,r.f3)(jt),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),u=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Jt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:u,navigate:l}}const Wt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,i.qj)(Kt(t)),{options:s}=(0,r.f3)(jt),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=Wt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||s.value)),u=(0,r.f3)(Ft,0),c=(0,r.Fl)((()=>{let t=(0,i.SU)(u);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(Ut,l),(0,r.JJ)(Bt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&v(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,u=l.value,c=u&&u.components[s];if(!c)return te(n.default,{Component:c,route:i});const f=u.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(u.instances[s]=null)},g=(0,r.h)(c,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:i})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=st(t.routes,t),n=t.parseQuery||Dt,o=t.stringifyQuery||Lt,h=t.history;const f=$t(),g=$t(),v=$t(),y=(0,i.XI)(z);let _=z;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=u.bind(null,(t=>""+t)),b=u.bind(null,xt),I=u.bind(null,Pt);function T(t,n){let r,i;return $(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function k(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=a({},r||y.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:I(s.params),hash:Pt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:b(e)}),r.params=b(r.params)}const s=e.resolve(i,r),u=t.hash||"";s.params=w(I(s.params));const c=p(o,a({},t,{hash:At(u),path:s.path})),l=h.createHref(c);return a({fullPath:c,hash:u,query:o===Lt?Mt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function D(t){return"string"===typeof t?d(n,t,y.value.path):a({},t)}function L(t,e){if(_!==t)return K(8,{from:e,to:t})}function M(t){return j(t)}function U(t){return M(a(D(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function j(t,e){const n=_=N(t),r=y.value,i=t.state,s=t.force,u=!0===t.replace,c=F(n);if(c)return j(a(D(c),{state:"object"===typeof c?a({},i,c.state):i,force:s,replace:u}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&m(o,r,n)&&(h=K(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((t=>W(t)?W(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(W(t,2))return j(a({replace:u},D(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=G(l,r,!0,u,i);return H(l,r,t),t}))}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(zt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ct(n).then((()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(o),ct(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(zt(r,t,e))}));return n.push(o),ct(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(o),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ct(n)))).then((()=>{n=[];for(const r of g.list())n.push(zt(r,t,e));return n.push(o),ct(n)})).catch((t=>W(t,8)?t:Promise.reject(t)))}function H(t,e,n){v.list().forEach((r=>B((()=>r(t,e,n)))))}function G(t,e,n,r,i){const o=L(t,e);if(o)return o;const u=e===z,c=s?history.state:{};n&&(r||u?h.replace(t.fullPath,a({scroll:u&&c&&c.scroll},i)):h.push(t.fullPath,i)),y.value=t,rt(t,e,n,u),nt()}let J;function Q(){J||(J=h.listen(((t,e,n)=>{if(!ut.listening)return;const r=N(t),i=F(r);if(i)return void j(a(i,{replace:!0}),r).catch(c);_=r;const o=y.value;s&&x(O(o.fullPath,n.delta),A()),q(r,o).catch((t=>W(t,12)?t:W(t,2)?(j(t.to,r).then((t=>{W(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||G(r,o,!1),t&&(n.delta&&!W(t,8)?h.go(-n.delta,!1):n.type===E.pop&&W(t,20)&&h.go(-1,!1)),H(r,o,t)})).catch(c)})))}let X,Y=$t(),Z=$t();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return X&&y.value!==z?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function nt(t){return X||(X=!t,Q(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const u=!i&&P(O(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,u))).then((t=>t&&R(t))).catch((t=>tt(t,e,n)))}const it=t=>h.go(t);let ot;const at=new Set,ut={currentRoute:y,listening:!0,addRoute:T,removeRoute:S,hasRoute:k,getRoutes:C,resolve:N,options:t,push:M,replace:U,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:g.add,afterEach:v.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ot&&y.value===z&&(ot=!0,M(h.location).catch((t=>{0})));const n={};for(const i in z)Object.defineProperty(n,i,{get:()=>y.value[i],enumerable:!0});t.provide(jt,e),t.provide(Vt,(0,i.Um)(n)),t.provide(Bt,y);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(_=z,J&&J(),J=null,y.value=z,ot=!1,X=!1),r()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>B(e)))),Promise.resolve())}return ut}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>v(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>v(t,a)))||i.push(a))}return[n,r,i]}function ie(){return(0,r.f3)(jt)}}}]);
//# sourceMappingURL=chunk-vendors.17a3773b.js.map