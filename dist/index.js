"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var d=q(function(I,f){
var l=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),x=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-slast-index-of/dist').ndarray,u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function g(i){var e,r,v,n,s,a,t;if(t=i[0],a=l(t,0),e=u(i[1]),r=u(i[2]),r<0)r+=a,r<0&&(r=0);else if(r>=a)return-1;return a-=r,v=o(t,0),n=x(t)+v*r,s=m(a,e,c(t),v,n),s>=0&&(s+=r),s}f.exports=g
});var p=d();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
