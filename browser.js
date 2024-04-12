// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,h,"e"),n=l.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,b,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,i,a,u,f,s,l,p,g,d,b;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,o;for(t=[],o=0,n=x.exec(e);n;)(r=e.slice(o,x.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),o=x.lastIndex,n=x.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function k(e){var r,t;if("string"!=typeof e)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var R=P;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=Object.prototype.hasOwnProperty;function L(e,r){return null!=e&&G.call(e,r)}var Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z&&"symbol"==typeof Z("foo")&&L(Z,"iterator")&&"symbol"==typeof Z.iterator?Symbol.iterator:null,U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y="function"==typeof Z?Z.toStringTag:"",q=W()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[Y],r=L(e,Y);try{e[Y]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return X.call(e)},z=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)},D=/./;function H(e){return"boolean"==typeof e}var J=Boolean,K=Boolean.prototype.toString,Q=W();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function re(e){return H(e)||ee(e)}B(re,"isPrimitive",H),B(re,"isObject",ee);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ie=function(e){if(arguments.length){if(!H(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(oe)return oe;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=ie.document&&ie.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;function se(e){return null!==e&&"object"==typeof e}function le(e){var r,t,n,o;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return se(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(ue,"REGEXP",fe),B(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!z(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var pe="function"==typeof D||"object"==typeof ce||"function"==typeof ae?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function ge(e){return"function"===pe(e)}var de,be=Object,ye=Object.getPrototypeOf;de=ge(Object.getPrototypeOf)?ye:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var he=de,ve=Object.prototype;function we(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!z(e)}(e)&&(r=function(e){return null==e?null:(e=be(e),he(e))}(e),!r||!L(e,"constructor")&&L(r,"constructor")&&ge(r.constructor)&&"[object Function]"===q(r.constructor)&&L(r,"isPrototypeOf")&&ge(r.isPrototypeOf)&&(r===ve||function(e){var r;for(r in e)if(!L(e,r))return!1;return!0}(e)))}function me(e){return"number"==typeof e}var je=Number,_e=je.prototype.toString,Ee=W();function Oe(e){return"object"==typeof e&&(e instanceof je||(Ee?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Se(e){return me(e)||Oe(e)}B(Se,"isPrimitive",me),B(Se,"isObject",Oe);var xe=Number.POSITIVE_INFINITY,Te=je.NEGATIVE_INFINITY,Ie=Math.floor;function ke(e){return e<xe&&e>Te&&Ie(r=e)===r;var r}function Pe(e){return me(e)&&ke(e)}function Ve(e){return Oe(e)&&ke(e.valueOf())}function Ae(e){return Pe(e)||Ve(e)}function Fe(e){return Pe(e)&&e>=0}function Ne(e){return Ve(e)&&e.valueOf()>=0}function Ce(e){return Fe(e)||Ne(e)}function $e(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return B(Ae,"isPrimitive",Pe),B(Ae,"isObject",Ve),B(Ce,"isPrimitive",Fe),B(Ce,"isObject",Ne),function e(r){var t,n,o,i,a;if(t={iter:9007199254740991},arguments.length&&(i=function(e,r){return we(r)?L(r,"iter")&&(e.iter=r.iter,!Fe(r.iter))?new TypeError($e("0af2t","iter",r.iter)):null:new TypeError($e("0af2V",r))}(t,r)))throw i;return a=0,B(n={},"next",(function(){return a+=1,o||a>t.iter?{done:!0}:{value:a,done:!1}})),B(n,"return",(function(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}})),M&&B(n,M,(function(){return e(t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterPositiveIntegersSeq=r();
//# sourceMappingURL=browser.js.map
