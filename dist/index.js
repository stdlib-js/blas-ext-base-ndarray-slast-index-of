"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var s=v(function(g,u){
var f=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-slast-index-of/dist').ndarray,n=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function m(i){var r,e,t,a;if(a=i[0],t=f(a,0),r=n(i[1]),e=n(i[2]),e<0){if(e+=t,e<0)return-1}else e>=t&&(e=t-1);return c(e+1,r,l(a),d(a,0),q(a))}u.exports=m
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
