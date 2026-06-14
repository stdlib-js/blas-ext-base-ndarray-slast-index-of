"use strict";var v=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var s=v(function(g,u){
var f=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-slast-index-of/dist').ndarray,n=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function m(i){var e,r,t,a;if(a=i[0],t=f(a,0),e=n(i[1]),r=n(i[2]),r<0){if(r+=t,r<0)return-1}else r>=t&&(r=t-1);return c(r+1,e,l(a),d(a,0),q(a))}u.exports=m
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
