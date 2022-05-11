"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[17709],{209465:(t,e)=>{function n(t){if(void 0===t)throw new Error("Value is undefined");return t}function r(t){if(null===t)throw new Error("Value is null");return t}Object.defineProperty(e,"__esModule",{value:!0}),e.ensureNever=e.ensure=e.ensureNotNull=e.ensureDefined=e.assert=void 0,e.assert=function(t,e){if(!t)throw new Error("Assertion failed"+(e?": "+e:""))},e.ensureDefined=n,e.ensureNotNull=r,e.ensure=function(t){return r(n(t))},e.ensureNever=function(t){}},934026:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.pointInCircle=e.pointInPolygon=e.pointInBox=e.pointInTriangle=e.pointInHalfplane=void 0;var r=n(5531);e.pointInHalfplane=function(t,e){var n=e.edge;return n.A*t.x+n.B*t.y+n.C>0===e.isPositive},e.pointInTriangle=function(t,e,n,o){var u=e.add(n).scaled(.5).add(o).scaled(.5),a=r.intersectLineSegments(e,n,u,t);return null===a&&(null===(a=r.intersectLineSegments(n,o,u,t))&&null===(a=r.intersectLineSegments(o,e,u,t)))},e.pointInBox=function(t,e){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},e.pointInPolygon=function(t,e){for(var n=e.length-1,r=!1,o=t.x,u=t.y,a=0;a<e.length;a++){var i=e[a],c=e[n];(i.y<u&&c.y>=u||c.y<u&&i.y>=u)&&i.x+(u-i.y)/(c.y-i.y)*(c.x-i.x)<o&&(r=!r),n=a}return r},e.pointInCircle=function(t,e,n){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)<=n*n}},204652:(t,e)=>{function n(t,e,n){var r=e.subtract(t),o=n.subtract(t).dotProduct(r)/r.dotProduct(r);return{coeff:o,distance:t.addScaled(r,o).subtract(n).length()}}Object.defineProperty(e,"__esModule",{value:!0}),e.distanceToSegment=e.distanceToLine=void 0,e.distanceToLine=n,e.distanceToSegment=function(t,e,r){var o=n(t,e,r);if(0<=o.coeff&&o.coeff<=1)return o;var u=t.subtract(r).length(),a=e.subtract(r).length();return u<a?{coeff:0,distance:u}:{coeff:1,distance:a}}},5531:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.intersectPolygons=e.intersectPolygonAndHalfplane=e.intersectRayAndBox=e.intersectLineAndBox=e.intersectLineSegments=e.intersectLines=e.intersectLineSegmentAndBox=void 0;var r=n(209465),o=n(86441),u=n(204652),a=n(934026);function i(t,e){var n=t.A,r=e.A,u=t.B,a=e.B,i=t.C,c=e.C,f=n*a-r*u;if(Math.abs(f)<1e-6)return null;var l=(u*c-a*i)/f,s=(r*i-n*c)/f;return new o.Point(l,s)}function c(t,e,n,r){var o=function(t,e,n,r){var o=e.subtract(t),u=r.subtract(n),a=o.x*u.y-o.y*u.x;if(Math.abs(a)<1e-6)return null;var i=t.subtract(n);return(i.y*u.x-i.x*u.y)/a}(t,e,n,r);if(null===o)return null;var a=e.subtract(t).scaled(o).add(t),i=u.distanceToSegment(n,r,a);return Math.abs(i.distance)<1e-6?o:null}function f(t,e){for(var n=0,r=t;n<r.length;n++){var u=r[n];if(o.equalPoints(u,e))return!1}return t.push(e),!0}function l(t,e){return!(t.length>0&&(o.equalPoints(t[t.length-1],e)||o.equalPoints(t[0],e)))&&(t.push(e),!0)}function s(t,e){for(var n=[],r=0;r<t.length;++r){var u=t[r],c=t[(r+1)%t.length],f=o.lineThroughPoints(u,c);if(a.pointInHalfplane(u,e)){if(l(n,u),!a.pointInHalfplane(c,e))null!==(s=i(f,e.edge))&&l(n,s)
}else if(a.pointInHalfplane(c,e)){var s;null!==(s=i(f,e.edge))&&l(n,s)}}return n.length>=3?n:null}e.intersectLineSegmentAndBox=function(t,e){var n=t[0].x,r=t[0].y,u=t[1].x,a=t[1].y,i=e.min.x,c=e.min.y,f=e.max.x,l=e.max.y;function s(t,e,n,r,o,u){var a=0;return t<n?a|=1:t>o&&(a|=2),e<r?a|=4:e>u&&(a|=8),a}for(var d=s(n,r,i,c,f,l),p=s(u,a,i,c,f,l),h=!1,v=0;;){if(v>1e3)throw new Error("Cohen - Sutherland algorithm: infinity loop");if(v++,!(d|p)){h=!0;break}if(d&p)break;var y=d||p,b=void 0,g=void 0;8&y?(b=n+(u-n)*(l-r)/(a-r),g=l):4&y?(b=n+(u-n)*(c-r)/(a-r),g=c):2&y?(g=r+(a-r)*(f-n)/(u-n),b=f):(g=r+(a-r)*(i-n)/(u-n),b=i),y===d?d=s(n=b,r=g,i,c,f,l):p=s(u=b,a=g,i,c,f,l)}return h?o.equalPoints(o.point(n,r),o.point(u,a))?o.point(n,r):o.lineSegment(o.point(n,r),o.point(u,a)):null},e.intersectLines=i,e.intersectLineSegments=c,e.intersectLineAndBox=function(t,e){var n=e.min.x,u=e.min.y,a=e.max.x,i=e.max.y;if(0===t.A){var c=-t.C/t.B;return u<=c&&c<=i?o.lineSegment(o.point(n,c),o.point(a,c)):null}if(0===t.B){var l=-t.C/t.A;return n<=l&&l<=a?o.lineSegment(o.point(l,u),o.point(l,i)):null}var s=[],d=function(e){var n=function(t,e){return-(t.C+t.A*e)/t.B}(t,e);u<=n&&n<=i&&f(s,new o.Point(e,n))},p=function(e){var r=function(t,e){return-(t.C+t.B*e)/t.A}(t,e);n<=r&&r<=a&&f(s,new o.Point(r,e))};switch(d(n),p(u),d(a),p(i),s.length){case 0:return null;case 1:return s[0];case 2:return o.equalPoints(s[0],s[1])?s[0]:o.lineSegment(s[0],s[1])}return r.assert(!1,"We should have at most two intersection points"),null},e.intersectRayAndBox=function(t,e,n){var r=c(t,e,n.min,new o.Point(n.max.x,n.min.y)),u=c(t,e,new o.Point(n.max.x,n.min.y),n.max),i=c(t,e,n.max,new o.Point(n.min.x,n.max.y)),f=c(t,e,new o.Point(n.min.x,n.max.y),n.min),l=[];if(null!==r&&r>=0&&l.push(r),null!==u&&u>=0&&l.push(u),null!==i&&i>=0&&l.push(i),null!==f&&f>=0&&l.push(f),0===l.length)return null;l.sort((function(t,e){return t-e}));var s=a.pointInBox(t,n)?l[0]:l[l.length-1];return t.addScaled(e.subtract(t),s)},e.intersectPolygonAndHalfplane=s,e.intersectPolygons=function(t,e){for(var n=t,r=0;r<e.length&&null!==n;++r){var u=e[r],a=e[(r+1)%e.length],i=e[(r+2)%e.length],c=o.lineThroughPoints(u,a);n=s(n,o.halfplaneThroughPoint(c,i))}return n}},86441:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.equalBoxes=e.box=e.halfplaneThroughPoint=e.halfplane=e.lineSegment=e.lineThroughPoints=e.line=e.equalPoints=e.point=e.Point=void 0;var n=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.addScaled=function(e,n){return new t(this.x+n*e.x,this.y+n*e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.dotProduct=function(t){return this.x*t.x+this.y*t.y},t.prototype.crossProduct=function(t){return this.x*t.y-this.y*t.x},t.prototype.signedAngle=function(t){return Math.atan2(this.crossProduct(t),this.dotProduct(t))},t.prototype.angle=function(t){return Math.acos(this.dotProduct(t)/(this.length()*t.length()))},t.prototype.length=function(){
return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.scaled=function(e){return new t(this.x*e,this.y*e)},t.prototype.normalized=function(){return this.scaled(1/this.length())},t.prototype.transposed=function(){return new t(-this.y,this.x)},t.prototype.clone=function(){return new t(this.x,this.y)},t}();function r(t,e){return new n(t,e)}function o(t,e){return t.x===e.x&&t.y===e.y}function u(t,e,n){if(0===t&&0===e)throw new Error("A and B can not be both equal to zero.");return{A:t,B:e,C:n}}function a(t,e){return{edge:t,isPositive:e}}e.Point=n,e.point=r,e.equalPoints=o,e.line=u,e.lineThroughPoints=function(t,e){if(o(t,e))throw new Error("Points should be distinct");return u(t.y-e.y,e.x-t.x,t.x*e.y-e.x*t.y)},e.lineSegment=function(t,e){if(o(t,e))throw new Error("Points of a segment should be distinct");return[t,e]},e.halfplane=a,e.halfplaneThroughPoint=function(t,e){return a(t,t.A*e.x+t.B*e.y+t.C>0)},e.box=function(t,e){return{min:r(Math.min(t.x,e.x),Math.min(t.y,e.y)),max:r(Math.max(t.x,e.x),Math.max(t.y,e.y))}},e.equalBoxes=function(t,e){return o(t.min,e.min)&&o(t.max,e.max)}},618606:(t,e,n)=>{n.d(e,{default:()=>d});const r=function(){this.__data__=[],this.size=0};var o=n(872575);const u=function(t,e){for(var n=t.length;n--;)if((0,o.default)(t[n][0],e))return n;return-1};var a=Array.prototype.splice;const i=function(t){var e=this.__data__,n=u(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=u(e,t);return n<0?void 0:e[n][1]};const f=function(t){return u(this.__data__,t)>-1};const l=function(t,e){var n=this.__data__,r=u(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=i,s.prototype.get=c,s.prototype.has=f,s.prototype.set=l;const d=s},667027:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(270830),o=n(178160);const u=(0,r.default)(o.default,"Map")},601141:(t,e,n)=>{n.d(e,{default:()=>w});const r=(0,n(270830).default)(Object,"create");const o=function(){this.__data__=r?r(null):{},this.size=0};const u=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var a=Object.prototype.hasOwnProperty;const i=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(e,t)?e[t]:void 0};var c=Object.prototype.hasOwnProperty;const f=function(t){var e=this.__data__;return r?void 0!==e[t]:c.call(e,t)};const l=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this};function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=o,s.prototype.delete=u,s.prototype.get=i,s.prototype.has=f,s.prototype.set=l;const d=s;var p=n(618606),h=n(667027);const v=function(){this.size=0,this.__data__={hash:new d,map:new(h.default||p.default),string:new d}};const y=function(t){var e=typeof t
;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const b=function(t,e){var n=t.__data__;return y(e)?n["string"==typeof e?"string":"hash"]:n.map};const g=function(t){var e=b(this,t).delete(t);return this.size-=e?1:0,e};const _=function(t){return b(this,t).get(t)};const x=function(t){return b(this,t).has(t)};const m=function(t,e){var n=b(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function j(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}j.prototype.clear=v,j.prototype.delete=g,j.prototype.get=_,j.prototype.has=x,j.prototype.set=m;const w=j},327415:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(270830),o=n(178160);const u=(0,r.default)(o.default,"Set")},396335:(t,e,n)=>{n.d(e,{default:()=>d});var r=n(618606);const o=function(){this.__data__=new r.default,this.size=0};const u=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const a=function(t){return this.__data__.get(t)};const i=function(t){return this.__data__.has(t)};var c=n(667027),f=n(601141);const l=function(t,e){var n=this.__data__;if(n instanceof r.default){var o=n.__data__;if(!c.default||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new f.default(o)}return n.set(t,e),this.size=n.size,this};function s(t){var e=this.__data__=new r.default(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=u,s.prototype.get=a,s.prototype.has=i,s.prototype.set=l;const d=s},735246:(t,e,n)=>{n.d(e,{default:()=>r});const r=n(178160).default.Uint8Array},488164:(t,e,n)=>{n.d(e,{default:()=>l});var r=n(280292),o=n(553822),u=n(854814),a=n(925247),i=n(817104),c=n(54744),f=Object.prototype.hasOwnProperty;const l=function(t,e){var n=(0,u.default)(t),l=!n&&(0,o.default)(t),s=!n&&!l&&(0,a.default)(t),d=!n&&!l&&!s&&(0,c.default)(t),p=n||l||s||d,h=p?(0,r.default)(t.length,String):[],v=h.length;for(var y in t)!e&&!f.call(t,y)||p&&("length"==y||s&&("offset"==y||"parent"==y)||d&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||(0,i.default)(y,v))||h.push(y);return h}},292893:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},920883:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},866934:(t,e,n)=>{n.d(e,{default:()=>a});var r=n(624402),o=n(872575),u=Object.prototype.hasOwnProperty;const a=function(t,e,n){var a=t[e];u.call(t,e)&&(0,o.default)(a,n)&&(void 0!==n||e in t)||(0,r.default)(t,e,n)}},624402:(t,e,n)=>{n.d(e,{default:()=>o});var r=n(776780);const o=function(t,e,n){"__proto__"==e&&r.default?(0,r.default)(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},429718:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t){return function(e,n,r){for(var o=-1,u=Object(e),a=r(e),i=a.length;i--;){var c=a[t?i:++o];if(!1===n(u[c],c,u))break}return e}}()},580838:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(383821),o=n(887844);const u=function(t,e){for(var n=0,u=(e=(0,
r.default)(e,t)).length;null!=t&&n<u;)t=t[(0,o.default)(e[n++])];return n&&n==u?t:void 0}},44631:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(920883),o=n(854814);const u=function(t,e,n){var u=e(t);return(0,o.default)(t)?u:(0,r.default)(u,n(t))}},7492:(t,e,n)=>{n.d(e,{default:()=>a});var r=n(443744);const o=(0,n(22828).default)(Object.keys,Object);var u=Object.prototype.hasOwnProperty;const a=function(t){if(!(0,r.default)(t))return o(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}},280292:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},395256:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t){return function(e){return t(e)}}},383821:(t,e,n)=>{n.d(e,{default:()=>d});var r=n(854814),o=n(973204),u=n(601141);function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],u=n.cache;if(u.has(o))return u.get(o);var a=t.apply(this,r);return n.cache=u.set(o,a)||u,a};return n.cache=new(a.Cache||u.default),n}a.Cache=u.default;const i=a;var c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/\\(\\)?/g;const l=function(t){var e=i(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(c,(function(t,n,r,o){e.push(r?o.replace(f,"$1"):n||t)})),e}));var s=n(689570);const d=function(t,e){return(0,r.default)(t)?t:(0,o.default)(t,e)?[t]:l((0,s.default)(t))}},544702:(t,e,n)=>{n.d(e,{default:()=>o});var r=n(735246);const o=function(t){var e=new t.constructor(t.byteLength);return new r.default(e).set(new r.default(t)),e}},157508:(t,e,n)=>{n.d(e,{default:()=>c});var r=n(178160);t=n.hmd(t);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=o&&t&&!t.nodeType&&t,a=u&&u.exports===o?r.default.Buffer:void 0,i=a?a.allocUnsafe:void 0;const c=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}},839895:(t,e,n)=>{n.d(e,{default:()=>o});var r=n(544702);const o=function(t,e){var n=e?(0,r.default)(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},458555:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},175969:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(866934),o=n(624402);const u=function(t,e,n,u){var a=!n;n||(n={});for(var i=-1,c=e.length;++i<c;){var f=e[i],l=u?u(n[f],t[f],f,n,t):void 0;void 0===l&&(l=t[f]),a?(0,o.default)(n,f,l):(0,r.default)(n,f,l)}return n}},776780:(t,e,n)=>{n.d(e,{default:()=>o});var r=n(270830);const o=function(){try{var t=(0,r.default)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}()},885747:(t,e,n)=>{n.d(e,{default:()=>a});var r=n(44631),o=n(112644),u=n(933358);const a=function(t){return(0,r.default)(t,u.default,o.default)}},270830:(t,e,n)=>{n.d(e,{default:()=>g});var r=n(162942);const o=n(178160).default["__core-js_shared__"]
;var u,a=(u=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";const i=function(t){return!!a&&a in t};var c=n(598279),f=n(359990),l=/^\[object .+?Constructor\]$/,s=Function.prototype,d=Object.prototype,p=s.toString,h=d.hasOwnProperty,v=RegExp("^"+p.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const y=function(t){return!(!(0,c.default)(t)||i(t))&&((0,r.default)(t)?v:l).test((0,f.default)(t))};const b=function(t,e){return null==t?void 0:t[e]};const g=function(t,e){var n=b(t,e);return y(n)?n:void 0}},156838:(t,e,n)=>{n.d(e,{default:()=>r});const r=(0,n(22828).default)(Object.getPrototypeOf,Object)},112644:(t,e,n)=>{n.d(e,{default:()=>i});const r=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,u=[];++n<r;){var a=t[n];e(a,n,t)&&(u[o++]=a)}return u};var o=n(335987),u=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;const i=a?function(t){return null==t?[]:(t=Object(t),r(a(t),(function(e){return u.call(t,e)})))}:o.default},903427:(t,e,n)=>{n.d(e,{default:()=>g});var r=n(270830),o=n(178160);const u=(0,r.default)(o.default,"DataView");var a=n(667027);const i=(0,r.default)(o.default,"Promise");var c=n(327415);const f=(0,r.default)(o.default,"WeakMap");var l=n(128177),s=n(359990),d=(0,s.default)(u),p=(0,s.default)(a.default),h=(0,s.default)(i),v=(0,s.default)(c.default),y=(0,s.default)(f),b=l.default;(u&&"[object DataView]"!=b(new u(new ArrayBuffer(1)))||a.default&&"[object Map]"!=b(new a.default)||i&&"[object Promise]"!=b(i.resolve())||c.default&&"[object Set]"!=b(new c.default)||f&&"[object WeakMap]"!=b(new f))&&(b=function(t){var e=(0,l.default)(t),n="[object Object]"==e?t.constructor:void 0,r=n?(0,s.default)(n):"";if(r)switch(r){case d:return"[object DataView]";case p:return"[object Map]";case h:return"[object Promise]";case v:return"[object Set]";case y:return"[object WeakMap]"}return e});const g=b},852222:(t,e,n)=>{n.d(e,{default:()=>c});var r=n(598279),o=Object.create;const u=function(){function t(){}return function(e){if(!(0,r.default)(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var a=n(156838),i=n(443744);const c=function(t){return"function"!=typeof t.constructor||(0,i.default)(t)?{}:u((0,a.default)(t))}},817104:(t,e,n)=>{n.d(e,{default:()=>o});var r=/^(?:0|[1-9]\d*)$/;const o=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},793532:(t,e,n)=>{n.d(e,{default:()=>i});var r=n(872575),o=n(29419),u=n(817104),a=n(598279);const i=function(t,e,n){if(!(0,a.default)(n))return!1;var i=typeof e;return!!("number"==i?(0,o.default)(n)&&(0,u.default)(e,n.length):"string"==i&&e in n)&&(0,r.default)(n[e],t)}},973204:(t,e,n)=>{n.d(e,{default:()=>i});var r=n(854814),o=n(708875),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;const i=function(t,e){if((0,r.default)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,
o.default)(t))||(a.test(t)||!u.test(t)||null!=e&&t in Object(e))}},443744:(t,e,n)=>{n.d(e,{default:()=>o});var r=Object.prototype;const o=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},159283:(t,e,n)=>{n.d(e,{default:()=>i});var r=n(489956);t=n.hmd(t);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=o&&t&&!t.nodeType&&t,a=u&&u.exports===o&&r.default.process;const i=function(){try{var t=u&&u.require&&u.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}()},22828:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){return function(n){return t(e(n))}}},893298:(t,e,n)=>{n.d(e,{default:()=>u});const r=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var o=Math.max;const u=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var u=arguments,a=-1,i=o(u.length-e,0),c=Array(i);++a<i;)c[a]=u[e+a];a=-1;for(var f=Array(e+1);++a<e;)f[a]=u[a];return f[e]=n(c),r(t,this,f)}}},826554:(t,e,n)=>{n.d(e,{default:()=>c});var r=n(63120),o=n(776780),u=n(999097);const a=o.default?function(t,e){return(0,o.default)(t,"toString",{configurable:!0,enumerable:!1,value:(0,r.default)(e),writable:!0})}:u.default;var i=Date.now;const c=function(t){var e=0,n=0;return function(){var r=i(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(a)},887844:(t,e,n)=>{n.d(e,{default:()=>o});var r=n(708875);const o=function(t){if("string"==typeof t||(0,r.default)(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},359990:(t,e,n)=>{n.d(e,{default:()=>o});var r=Function.prototype.toString;const o=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},63120:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t){return function(){return t}}},872575:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t,e){return t===e||t!=t&&e!=e}},999097:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t){return t}},553822:(t,e,n)=>{n.d(e,{default:()=>f});var r=n(128177),o=n(383527);const u=function(t){return(0,o.default)(t)&&"[object Arguments]"==(0,r.default)(t)};var a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable;const f=u(function(){return arguments}())?u:function(t){return(0,o.default)(t)&&i.call(t,"callee")&&!c.call(t,"callee")}},854814:(t,e,n)=>{n.d(e,{default:()=>r});const r=Array.isArray},29419:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(162942),o=n(667702);const u=function(t){return null!=t&&(0,o.default)(t.length)&&!(0,r.default)(t)}},925247:(t,e,n)=>{n.d(e,{default:()=>c});var r=n(178160);const o=function(){return!1};t=n.hmd(t);var u="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=u&&t&&!t.nodeType&&t,i=a&&a.exports===u?r.default.Buffer:void 0;const c=(i?i.isBuffer:void 0)||o},162942:(t,e,n)=>{n.d(e,{default:()=>u});var r=n(128177),o=n(598279);const u=function(t){if(!(0,o.default)(t))return!1;var e=(0,r.default)(t)
;return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},667702:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},56736:(t,e,n)=>{n.d(e,{default:()=>s});var r=n(128177),o=n(156838),u=n(383527),a=Function.prototype,i=Object.prototype,c=a.toString,f=i.hasOwnProperty,l=c.call(Object);const s=function(t){if(!(0,u.default)(t)||"[object Object]"!=(0,r.default)(t))return!1;var e=(0,o.default)(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==l}},54744:(t,e,n)=>{n.d(e,{default:()=>s});var r=n(128177),o=n(667702),u=n(383527),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1;const i=function(t){return(0,u.default)(t)&&(0,o.default)(t.length)&&!!a[(0,r.default)(t)]};var c=n(395256),f=n(159283),l=f.default&&f.default.isTypedArray;const s=l?(0,c.default)(l):i},933358:(t,e,n)=>{n.d(e,{default:()=>a});var r=n(488164),o=n(7492),u=n(29419);const a=function(t){return(0,u.default)(t)?(0,r.default)(t):(0,o.default)(t)}},364162:(t,e,n)=>{n.d(e,{default:()=>l});var r=n(488164),o=n(598279),u=n(443744);const a=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var i=Object.prototype.hasOwnProperty;const c=function(t){if(!(0,o.default)(t))return a(t);var e=(0,u.default)(t),n=[];for(var r in t)("constructor"!=r||!e&&i.call(t,r))&&n.push(r);return n};var f=n(29419);const l=function(t){return(0,f.default)(t)?(0,r.default)(t,!0):c(t)}},754061:(t,e,n)=>{n.d(e,{default:()=>C});var r=n(396335),o=n(624402),u=n(872575);const a=function(t,e,n){(void 0!==n&&!(0,u.default)(t[e],n)||void 0===n&&!(e in t))&&(0,o.default)(t,e,n)};var i=n(429718),c=n(157508),f=n(839895),l=n(458555),s=n(852222),d=n(553822),p=n(854814),h=n(29419),v=n(383527);const y=function(t){return(0,v.default)(t)&&(0,h.default)(t)};var b=n(925247),g=n(162942),_=n(598279),x=n(56736),m=n(54744);const j=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var w=n(175969),P=n(364162);const O=function(t){return(0,w.default)(t,(0,P.default)(t))};const A=function(t,e,n,r,o,u,i){var h=j(t,n),v=j(e,n),w=i.get(v);if(w)a(t,n,w);else{var P=u?u(h,v,n+"",t,e,i):void 0,A=void 0===P;if(A){var S=(0,p.default)(v),B=!S&&(0,b.default)(v),M=!S&&!B&&(0,m.default)(v);P=v,S||B||M?(0,p.default)(h)?P=h:y(h)?P=(0,l.default)(h):B?(A=!1,P=(0,c.default)(v,!0)):M?(A=!1,P=(0,f.default)(v,!0)):P=[]:(0,x.default)(v)||(0,d.default)(v)?(P=h,(0,
d.default)(h)?P=O(h):(0,_.default)(h)&&!(0,g.default)(h)||(P=(0,s.default)(v))):A=!1}A&&(i.set(v,P),o(P,v,r,u,i),i.delete(v)),a(t,n,P)}};const S=function t(e,n,o,u,c){e!==n&&(0,i.default)(n,(function(i,f){if(c||(c=new r.default),(0,_.default)(i))A(e,n,f,o,t,u,c);else{var l=u?u(j(e,f),i,f+"",e,n,c):void 0;void 0===l&&(l=i),a(e,f,l)}}),P.default)};var B=n(999097),M=n(893298),z=n(826554);const T=function(t,e){return(0,z.default)((0,M.default)(t,e,B.default),t+"")};var I=n(793532);const C=function(t){return T((function(e,n){var r=-1,o=n.length,u=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(u=t.length>3&&"function"==typeof u?(o--,u):void 0,a&&(0,I.default)(n[0],n[1],a)&&(u=o<3?void 0:u,o=1),e=Object(e);++r<o;){var i=n[r];i&&t(e,i,r,u)}return e}))}((function(t,e,n){S(t,e,n)}))},335987:(t,e,n)=>{n.d(e,{default:()=>r});const r=function(){return[]}},689570:(t,e,n)=>{n.d(e,{default:()=>l});var r=n(503060),o=n(292893),u=n(854814),a=n(708875),i=r.default?r.default.prototype:void 0,c=i?i.toString:void 0;const f=function t(e){if("string"==typeof e)return e;if((0,u.default)(e))return(0,o.default)(e,t)+"";if((0,a.default)(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};const l=function(t){return null==t?"":f(t)}}}]);