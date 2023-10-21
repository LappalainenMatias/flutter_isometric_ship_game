(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.ft(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.fu(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cE(b)
return new t(c,this)}:function(){if(t===null)t=A.cE(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cE(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={ct:function ct(){},
V(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d5(a,b,c){return A.cw(A.V(A.V(c,a),b))},
dy(a){var t,s
for(t=$.O.length,s=0;s<t;++s)if(a===$.O[s])return!0
return!1},
ej(a,b,c){A.bm(a,0,J.co(a)-1,b,c)},
bm(a,b,c,d,e){if(c-b<=32)A.ei(a,b,c,d,e)
else A.eh(a,b,c,d,e)},
ei(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.by(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
eh(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.b.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.b.H(a3+a4,2),g=h-k,f=h+k,e=J.by(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}e.j(a2,j,d)
e.j(a2,h,b)
e.j(a2,i,a0)
e.j(a2,g,e.h(a2,a3))
e.j(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.ac(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.j(a2,q,e.h(a2,s))
e.j(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.h(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.j(a2,q,e.h(a2,s))
m=s+1
e.j(a2,s,e.h(a2,r))
e.j(a2,r,p)
r=n
s=m
break}else{e.j(a2,q,e.h(a2,r))
e.j(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.j(a2,q,e.h(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.h(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.j(a2,q,e.h(a2,s))
m=s+1
e.j(a2,s,e.h(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.h(a2,r))
e.j(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.j(a2,a3,e.h(a2,a1))
e.j(a2,a1,c)
a1=r+1
e.j(a2,a4,e.h(a2,a1))
e.j(a2,a1,a)
A.bm(a2,a3,s-2,a5,a6)
A.bm(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.ac(a5.$2(e.h(a2,s),c),0);)++s
for(;J.ac(a5.$2(e.h(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.j(a2,q,e.h(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.h(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.j(a2,q,e.h(a2,s))
m=s+1
e.j(a2,s,e.h(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.h(a2,r))
e.j(a2,r,p)}r=n
break}}A.bm(a2,s,r,a5,a6)}else A.bm(a2,s,r,a5,a6)},
aj:function aj(a){this.a=a},
bZ:function bZ(){},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
R:function R(){},
ao:function ao(a){this.a=a},
dC(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fP(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b1(a)
return t},
bj(a){var t,s=$.d1
if(s==null)s=$.d1=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bV(a){return A.ec(a)},
ec(a){var t,s,r,q
if(a instanceof A.j)return A.w(A.b_(a),null)
t=J.M(a)
if(t===B.ds||t===B.dA||u.C.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.w(A.b_(a),null)},
d2(a){if(a==null||typeof a=="number"||A.cC(a))return J.b1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Q)return a.i(0)
if(a instanceof A.Y)return a.ae(!0)
return"Instance of '"+A.bV(a)+"'"},
U(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.I(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bU(r,s,t))
return J.dO(a,new A.ba(B.dZ,0,t,s,0))},
ed(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.eb(a,b,c)},
eb(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cu(b,!0,u.z),g=h.length,f=a.$R
if(g<f)return A.U(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.M(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.U(a,h,c)
if(g===f)return p.apply(a,h)
return A.U(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.U(a,h,c)
o=f+r.length
if(g>o)return A.U(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cu(h,!0,u.z)
B.a.I(h,n)}return p.apply(a,h)}else{if(g>f)return A.U(a,h,c)
if(h===b)h=A.cu(h,!0,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.aa)(m),++l){k=r[A.aY(m[l])]
if(B.p===k)return A.U(a,h,c)
B.a.m(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.aa)(m),++l){i=A.aY(m[l])
if(c.X(i)){++j
B.a.m(h,c.h(0,i))}else{k=r[i]
if(B.p===k)return A.U(a,h,c)
B.a.m(h,k)}}if(j!==c.a)return A.U(a,h,c)}return p.apply(a,h)}},
e(a,b){if(a==null)J.co(a)
throw A.b(A.bx(a,b))},
bx(a,b){var t,s="index"
if(!A.ce(b))return new A.ad(!0,b,s,null)
t=J.co(a)
if(b<0||b>=t)return A.e0(b,t,a,s)
return A.ee(b,s)},
b(a){return A.dx(new Error(),a)},
dx(a,b){var t
if(b==null)b=new A.c_()
a.dartException=b
t=A.fx
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fx(){return J.b1(this.dartException)},
ab(a){throw A.b(a)},
cm(a,b){throw A.dx(b,a)},
aa(a){throw A.b(A.ax(a))},
dz(a){if(a==null)return J.P(a)
if(typeof a=="object")return A.bj(a)
return J.P(a)},
fc(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
dZ(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bn().constructor.prototype):Object.create(new A.ae(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cP(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dV(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cP(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dV(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dT)}throw A.b("Error in functionType of tearoff")},
dW(a,b,c,d){var t=A.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cP(a,b,c,d){var t,s
if(c)return A.dY(a,b,d)
t=b.length
s=A.dW(t,d,a,b)
return s},
dX(a,b,c,d){var t=A.cO,s=A.dU
switch(b?-1:a){case 0:throw A.b(new A.bY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dY(a,b,c){var t,s
if($.cM==null)$.cM=A.cL("interceptor")
if($.cN==null)$.cN=A.cL("receiver")
t=b.length
s=A.dX(t,c,a,b)
return s},
cE(a){return A.dZ(a)},
dT(a,b){return A.aV(v.typeUniverse,A.b_(a.a),b)},
cO(a){return a.a},
dU(a){return a.b},
cL(a){var t,s,r,q=new A.ae("receiver","interceptor"),p=J.cs(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dP("Field name "+a+" not found."))},
f8(a){if(a==null)A.f7("boolean expression must not be null")
return a},
f7(a){throw A.b(new A.c2(a))},
ft(a){throw A.b(new A.c3(a))},
fh(a){return v.getIsolateTag(a)},
fq(a){var t,s,r,q,p,o=A.aY($.dw.$1(a)),n=$.cf[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cj[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eH($.dt.$2(a,o))
if(r!=null){n=$.cf[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cj[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cl(t)
$.cf[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cj[o]=t
return t}if(q==="-"){p=A.cl(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dA(a,t)
if(q==="*")throw A.b(A.d7(o))
if(v.leafTags[o]===true){p=A.cl(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dA(a,t)},
dA(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cH(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cl(a){return J.cH(a,!1,null,!!a.$iai)},
fs(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cl(t)
else return J.cH(t,c,null,null)},
fm(){if(!0===$.cG)return
$.cG=!0
A.fn()},
fn(){var t,s,r,q,p,o,n,m
$.cf=Object.create(null)
$.cj=Object.create(null)
A.fl()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dB.$1(p)
if(o!=null){n=A.fs(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fl(){var t,s,r,q,p,o,n=B.A()
n=A.av(B.B,A.av(B.C,A.av(B.o,A.av(B.o,A.av(B.D,A.av(B.E,A.av(B.F(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dw=new A.cg(q)
$.dt=new A.ch(p)
$.dB=new A.ci(o)},
av(a,b){return a(b)||b},
f9(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aQ:function aQ(a,b){this.a=a
this.b=b},
at:function at(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.$ti=b},
ay:function ay(){},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function Q(){},
b6:function b6(){},
bp:function bp(){},
bn:function bn(){},
ae:function ae(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a},
bY:function bY(a){this.a=a},
c2:function c2(a){this.a=a},
ca:function ca(){},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a,b){this.a=a
this.b=b
this.c=null},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
Y:function Y(){},
a7:function a7(){},
eL(a){return a},
aF(a){return new Float32Array(A.eL(a))},
cd(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bx(b,a))},
bg:function bg(){},
al:function al(){},
aG:function aG(){},
aH:function aH(){},
be:function be(){},
bf:function bf(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
d3(a,b){var t=b.c
return t==null?b.c=A.cz(a,b.y,!0):t},
cv(a,b){var t=b.c
return t==null?b.c=A.aT(a,"cR",[b.y]):t},
d4(a){var t=a.x
if(t===6||t===7||t===8)return A.d4(a.y)
return t===12||t===13},
eg(a){return a.at},
a9(a){return A.bv(v.typeUniverse,a,!1)},
a_(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.a_(a,t,c,a0)
if(s===t)return b
return A.di(a,s,!0)
case 7:t=b.y
s=A.a_(a,t,c,a0)
if(s===t)return b
return A.cz(a,s,!0)
case 8:t=b.y
s=A.a_(a,t,c,a0)
if(s===t)return b
return A.dh(a,s,!0)
case 9:r=b.z
q=A.aZ(a,r,c,a0)
if(q===r)return b
return A.aT(a,b.y,q)
case 10:p=b.y
o=A.a_(a,p,c,a0)
n=b.z
m=A.aZ(a,n,c,a0)
if(o===p&&m===n)return b
return A.cx(a,o,m)
case 12:l=b.y
k=A.a_(a,l,c,a0)
j=b.z
i=A.f3(a,j,c,a0)
if(k===l&&i===j)return b
return A.dg(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aZ(a,h,c,a0)
p=b.y
o=A.a_(a,p,c,a0)
if(g===h&&o===p)return b
return A.cy(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.b5("Attempted to substitute unexpected RTI kind "+d))}},
aZ(a,b,c,d){var t,s,r,q,p=b.length,o=A.cc(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.a_(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
f4(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cc(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.a_(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
f3(a,b,c,d){var t,s=b.a,r=A.aZ(a,s,c,d),q=b.b,p=A.aZ(a,q,c,d),o=b.c,n=A.f4(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bq()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
du(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fk(s)
t=a.$S()
return t}return null},
fo(a,b){var t
if(A.d4(b))if(a instanceof A.Q){t=A.du(a)
if(t!=null)return t}return A.b_(a)},
b_(a){if(a instanceof A.j)return A.L(a)
if(Array.isArray(a))return A.Z(a)
return A.cB(J.M(a))},
Z(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
L(a){var t=a.$ti
return t!=null?t:A.cB(a)},
cB(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eS(a,t)},
eS(a,b){var t=a instanceof A.Q?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.eC(v.typeUniverse,t.name)
b.$ccache=s
return s},
fk(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bv(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fi(a){return A.a8(A.L(a))},
cD(a){var t
if(a instanceof A.Y)return A.fb(a.$r,a.ac())
t=a instanceof A.Q?A.du(a):null
if(t!=null)return t
if(u.R.b(a))return J.dN(a).a
if(Array.isArray(a))return A.Z(a)
return A.b_(a)},
a8(a){var t=a.w
return t==null?a.w=A.dm(a):t},
dm(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.cb(a)
t=A.bv(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dm(t):s},
fb(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.e(r,0)
t=A.aV(v.typeUniverse,A.cD(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.e(r,s)
t=A.dj(v.typeUniverse,t,A.cD(r[s]))}return A.aV(v.typeUniverse,t,a)},
cI(a){return A.a8(A.bv(v.typeUniverse,a,!1))},
eR(a){var t,s,r,q,p,o=this
if(o===u.K)return A.K(o,a,A.eY)
if(!A.N(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.K(o,a,A.f1)
t=o.x
if(t===7)return A.K(o,a,A.eP)
if(t===1)return A.K(o,a,A.dr)
s=t===6?o.y:o
t=s.x
if(t===8)return A.K(o,a,A.eU)
if(s===u.S)r=A.ce
else if(s===u.i||s===u.H)r=A.eX
else if(s===u.N)r=A.f_
else r=s===u.y?A.cC:null
if(r!=null)return A.K(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.fp)){o.r="$i"+q
if(q==="i")return A.K(o,a,A.eW)
return A.K(o,a,A.f0)}}else if(t===11){p=A.f9(s.y,s.z)
return A.K(o,a,p==null?A.dr:p)}return A.K(o,a,A.eN)},
K(a,b,c){a.b=c
return a.b(b)},
eQ(a){var t,s=this,r=A.eM
if(!A.N(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eI
else if(s===u.K)r=A.eG
else{t=A.b0(s)
if(t)r=A.eO}s.a=r
return s.a(a)},
bw(a){var t,s=a.x
if(!A.N(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bw(a.y)))t=s===8&&A.bw(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eN(a){var t=this
if(a==null)return A.bw(t)
return A.l(v.typeUniverse,A.fo(a,t),null,t,null)},
eP(a){if(a==null)return!0
return this.y.b(a)},
f0(a){var t,s=this
if(a==null)return A.bw(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eW(a){var t,s=this
if(a==null)return A.bw(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.M(a)[t]},
eM(a){var t,s=this
if(a==null){t=A.b0(s)
if(t)return a}else if(s.b(a))return a
A.dn(a,s)},
eO(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dn(a,t)},
dn(a,b){throw A.b(A.es(A.d8(a,A.w(b,null))))},
d8(a,b){return A.a0(a)+": type '"+A.w(A.cD(a),null)+"' is not a subtype of type '"+b+"'"},
es(a){return new A.bu("TypeError: "+a)},
u(a,b){return new A.bu("TypeError: "+A.d8(a,b))},
eU(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cv(v.typeUniverse,s).b(a)},
eY(a){return a!=null},
eG(a){if(a!=null)return a
throw A.b(A.u(a,"Object"))},
f1(a){return!0},
eI(a){return a},
dr(a){return!1},
cC(a){return!0===a||!1===a},
fC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.u(a,"bool"))},
fE(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool"))},
fD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool?"))},
cA(a){if(typeof a=="number")return a
throw A.b(A.u(a,"double"))},
fG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double"))},
fF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double?"))},
ce(a){return typeof a=="number"&&Math.floor(a)===a},
aX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.u(a,"int"))},
fI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int"))},
fH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int?"))},
eX(a){return typeof a=="number"},
eE(a){if(typeof a=="number")return a
throw A.b(A.u(a,"num"))},
fJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num"))},
eF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num?"))},
f_(a){return typeof a=="string"},
aY(a){if(typeof a=="string")return a
throw A.b(A.u(a,"String"))},
fK(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String"))},
eH(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String?"))},
ds(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.w(a[r],b)
return t},
f2(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.ds(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.w(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dp(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.c)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.m(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.e(a4,k)
n=B.d.p(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.w(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.w(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.w(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.w(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.w(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
w(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.w(a.y,b)
return t}if(m===7){s=a.y
t=A.w(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.w(a.y,b)+">"
if(m===9){q=A.f5(a.y)
p=a.z
return p.length>0?q+("<"+A.ds(p,b)+">"):q}if(m===11)return A.f2(a,b)
if(m===12)return A.dp(a,b,null)
if(m===13)return A.dp(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.e(b,o)
return b[o]}return"?"},
f5(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eD(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eC(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bv(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aU(a,5,"#")
r=A.cc(t)
for(q=0;q<t;++q)r[q]=s
p=A.aT(a,b,r)
o[b]=p
return p}else return n},
eB(a,b){return A.dk(a.tR,b)},
eA(a,b){return A.dk(a.eT,b)},
bv(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.de(A.dc(a,null,b,c))
s.set(b,t)
return t},
aV(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.de(A.dc(a,b,c,!0))
r.set(c,s)
return s},
dj(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cx(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
J(a,b){b.a=A.eQ
b.b=A.eR
return b},
aU(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.B(null,null)
t.x=b
t.at=c
s=A.J(a,t)
a.eC.set(c,s)
return s},
di(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.ex(a,b,s,c)
a.eC.set(s,t)
return t},
ex(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.N(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.B(null,null)
r.x=6
r.y=b
r.at=c
return A.J(a,r)},
cz(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ew(a,b,s,c)
a.eC.set(s,t)
return t},
ew(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.N(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.b0(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.b0(r.y))return r
else return A.d3(a,b)}}q=new A.B(null,null)
q.x=7
q.y=b
q.at=c
return A.J(a,q)},
dh(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eu(a,b,s,c)
a.eC.set(s,t)
return t},
eu(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.N(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aT(a,"cR",[b])
else if(b===u.P||b===u.T)return u.x}r=new A.B(null,null)
r.x=8
r.y=b
r.at=c
return A.J(a,r)},
ey(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=14
t.y=b
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
aS(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
et(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aT(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aS(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.B(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.J(a,s)
a.eC.set(q,r)
return r},
cx(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aS(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.B(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.J(a,p)
a.eC.set(r,o)
return o},
ez(a,b,c){var t,s,r="+"+(b+"("+A.aS(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
dg(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aS(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aS(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.et(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.B(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.J(a,q)
a.eC.set(s,p)
return p},
cy(a,b,c,d){var t,s=b.at+("<"+A.aS(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ev(a,b,c,s,d)
a.eC.set(s,t)
return t},
ev(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cc(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.a_(a,b,s,0)
n=A.aZ(a,c,s,0)
return A.cy(a,o,n,c!==n)}}m=new A.B(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.J(a,m)},
dc(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
de(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.en(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dd(a,s,m,l,!1)
else if(r===46)s=A.dd(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.X(a.u,a.e,l.pop()))
break
case 94:l.push(A.ey(a.u,l.pop()))
break
case 35:l.push(A.aU(a.u,5,"#"))
break
case 64:l.push(A.aU(a.u,2,"@"))
break
case 126:l.push(A.aU(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.ep(a,l)
break
case 38:A.eo(a,l)
break
case 42:q=a.u
l.push(A.di(q,A.X(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cz(q,A.X(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dh(q,A.X(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.em(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.df(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.er(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.X(a.u,a.e,n)},
en(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dd(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eD(t,p.y)[q]
if(o==null)A.ab('No "'+q+'" in "'+A.eg(p)+'"')
d.push(A.aV(t,p,o))}else d.push(q)
return n},
ep(a,b){var t,s=a.u,r=A.db(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aT(s,q,r))
else{t=A.X(s,a.e,q)
switch(t.x){case 12:b.push(A.cy(s,t,r,a.n))
break
default:b.push(A.cx(s,t,r))
break}}},
em(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.db(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.X(n,a.e,m)
p=new A.bq()
p.a=r
p.b=t
p.c=s
b.push(A.dg(n,q,p))
return
case-4:b.push(A.ez(n,b.pop(),r))
return
default:throw A.b(A.b5("Unexpected state under `()`: "+A.n(m)))}},
eo(a,b){var t=b.pop()
if(0===t){b.push(A.aU(a.u,1,"0&"))
return}if(1===t){b.push(A.aU(a.u,4,"1&"))
return}throw A.b(A.b5("Unexpected extended operation "+A.n(t)))},
db(a,b){var t=b.splice(a.p)
A.df(a.u,a.e,t)
a.p=b.pop()
return t},
X(a,b,c){if(typeof c=="string")return A.aT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eq(a,b,c)}else return c},
df(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.X(a,b,c[t])},
er(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.X(a,b,c[t])},
eq(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.b5("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.b5("Bad index "+c+" for "+b.i(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.N(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.N(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.l(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.l(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.l(a,b.y,c,d,e)
if(s===6)return A.l(a,b.y,c,d,e)
return s!==7}if(s===6)return A.l(a,b.y,c,d,e)
if(q===6){t=A.d3(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cv(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cv(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
return t||A.l(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.dq(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dq(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eV(a,b,c,d,e)}if(p&&q===11)return A.eZ(a,b,c,d,e)
return!1},
dq(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.l(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.l(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.l(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.l(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.l(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eV(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aV(a,b,s[p])
return A.dl(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dl(a,o,null,c,n,e)},
dl(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eZ(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
b0(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.N(a))if(s!==7)if(!(s===6&&A.b0(a.y)))t=s===8&&A.b0(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fp(a){var t
if(!A.N(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
N(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dk(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cc(a){return a>0?new Array(a):v.typeUniverse.sEA},
B:function B(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bq:function bq(){this.c=this.b=this.a=null},
cb:function cb(a){this.a=a},
c5:function c5(){},
bu:function bu(a){this.a=a},
e6(a,b,c){return b.l("@<0>").a6(c).l("cX<1,2>").a(A.fc(a,new A.a2(b.l("@<0>").a6(c).l("a2<1,2>"))))},
e_(a){return new A.aL(a.l("aL<0>"))},
d9(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bK(a){var t,s={}
if(A.dy(a))return"{...}"
t=new A.aJ("")
try{B.a.m($.O,a)
t.a+="{"
s.a=!0
a.E(0,new A.bL(s,t))
t.a+="}"}finally{if(0>=$.O.length)return A.e($.O,-1)
$.O.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aL:function aL(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
E:function E(){},
aE:function aE(){},
bL:function bL(a,b){this.a=a
this.b=b},
aW:function aW(){},
ak:function ak(){},
aK:function aK(){},
an:function an(){},
aR:function aR(){},
au:function au(){},
aD(a,b,c,d){var t,s=J.e4(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
cY(a,b,c){var t,s,r=A.d([],c.l("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aa)(a),++s)B.a.m(r,c.a(a[s]))
if(b)return r
return J.cs(r,c)},
cu(a,b,c){var t=A.e7(a,c)
return t},
e7(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.l("h<0>"))
t=A.d([],b.l("h<0>"))
for(s=J.cK(a);s.F();)B.a.m(t,s.gD())
return t},
ek(a,b,c){var t=J.cK(b)
if(!t.F())return a
if(c.length===0){do a+=A.n(t.gD())
while(t.F())}else{a+=A.n(t.gD())
for(;t.F();)a=a+c+A.n(t.gD())}return a},
cZ(a,b){return new A.bM(a,b.gaL(),b.gaO(),b.gaM())},
a0(a){if(typeof a=="number"||A.cC(a)||a==null)return J.b1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.d2(a)},
b5(a){return new A.b4(a)},
dP(a){return new A.ad(!1,null,null,a)},
dQ(a,b,c){return new A.ad(!0,a,b,c)},
ee(a,b){return new A.bk(null,null,!0,a,b,"Value not in range")},
bl(a,b,c,d,e){return new A.bk(b,c,!0,a,d,"Invalid value")},
ef(a,b,c){if(0>a||a>c)throw A.b(A.bl(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bl(b,a,c,"end",null))
return b}return c},
e0(a,b,c,d){return new A.bF(b,!0,a,d,"Index out of range")},
H(a){return new A.c1(a)},
d7(a){return new A.c0(a)},
ax(a){return new A.bz(a)},
cQ(a,b,c){return new A.bE(a,b,c)},
cr(a,b,c){var t,s
if(A.dy(a))return b+"..."+c
t=new A.aJ(b)
B.a.m($.O,a)
try{s=t
s.a=A.ek(s.a,a,", ")}finally{if(0>=$.O.length)return A.e($.O,-1)
$.O.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
e9(a,b,c,d){var t
if(B.k===c)return A.d5(B.b.gk(a),J.P(b),$.cn())
if(B.k===d){t=B.b.gk(a)
b=J.P(b)
c=J.P(c)
return A.cw(A.V(A.V(A.V($.cn(),t),b),c))}t=B.b.gk(a)
b=J.P(b)
c=J.P(c)
d=J.P(d)
d=A.cw(A.V(A.V(A.V(A.V($.cn(),t),b),c),d))
return d},
bN:function bN(a,b){this.a=a
this.b=b},
c4:function c4(){},
bC:function bC(){},
b4:function b4(a){this.a=a},
c_:function c_(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bF:function bF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a){this.a=a},
c0:function c0(a){this.a=a},
bz:function bz(a){this.a=a},
bT:function bT(){},
c6:function c6(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(){},
j:function j(){},
aJ:function aJ(a){this.a=a},
bB:function bB(){},
c7:function c7(){},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
k:function k(a,b,c){this.c=a
this.d=b
this.b=c},
b7:function b7(){},
bH(a,b){return new A.A(a*2-2*b,a+b)},
A:function A(a,b){this.a=a
this.b=b},
as:function as(a,b){this.a=a
this.b=b},
v:function v(){},
b2:function b2(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=!0},
I:function I(a){this.b=a},
F(a,b,c){var t=new A.a4(a,b,c)
t.e=u.D.a(a.c.$1(t))
t.d!==$&&A.fw()
t.d=new A.b7()
return t},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=!0},
bh:function bh(a,b){this.c=a
this.b=b},
bd:function bd(){},
bo:function bo(){},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a){this.b=a},
fr(){self.jsregionworker=A.f6(new A.ck(),u.e)},
ck:function ck(){},
bW:function bW(a){this.a=a
this.b=$},
bX:function bX(){},
bO:function bO(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
cS(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.an(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cQ("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.fa(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.b.u(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cQ("Not radix digit",a,t))}if(s)return A.ag(0,0,0,q,p,o)
return new A.x(q&4194303,p&4194303,o&1048575)},
cq(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.b.H(a,17592186044416)
a-=s*17592186044416
r=B.b.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.ag(0,0,0,q,p,o):new A.x(q,p,o)},
bG(a){if(a instanceof A.x)return a
else if(A.ce(a))return A.cq(a)
throw A.b(A.dQ(a,"other","not an int, Int32 or Int64"))},
e3(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.e(B.u,a)
r=B.u[a]
q=""
p=""
o=""
while(!0){if(!!(t===0&&s===0))break
n=B.b.C(t,r)
s+=t-n*r<<10>>>0
m=B.b.C(s,r)
d+=s-m*r<<10>>>0
l=B.b.C(d,r)
c+=d-l*r<<10>>>0
k=B.b.C(c,r)
b+=c-k*r<<10>>>0
j=B.b.C(b,r)
i=B.d.ao(B.b.am(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.b.am(h,a))+q+p+o},
ag(a,b,c,d,e,f){var t=a-d,s=b-e-(B.b.u(t,22)&1)
return new A.x(t&4194303,s&4194303,c-f-(B.b.u(s,22)&1)&1048575)},
e1(a,b,c){var t,s,r,q,p=A.bG(b)
if(p.gaj())throw A.b(A.H("Division by zero"))
if(a.gaj())return B.q
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.ag(0,0,0,a.a,a.b,t)
if(q)p=A.ag(0,0,0,p.a,p.b,r)
return A.e2(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
e2(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.b.C(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.b.C(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.b.C(q,a4)
o=q-p*a4
n=0
m=0}else{l=Math.floor((a0+4194304*a1+17592186044416*a2)/(a4+4194304*a5+17592186044416*a6))
k=Math.floor(l/17592186044416)
l-=17592186044416*k
j=Math.floor(l/4194304)
i=l-4194304*j
t=B.c.n(k)
r=B.c.n(j)
p=B.c.n(i)
h=i*a4
g=Math.floor(h/4194304)
f=j*a4+i*a5+g
e=Math.floor(f/4194304)
d=a0-B.c.n(h-g*4194304)
c=a1-B.c.n(f-e*4194304)-(B.b.u(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.n(k*a4+j*a5+i*a6+e)-(B.b.u(c,22)&1)&1048575
while(!0){if(m<524288)if(m<=a6)if(m===a6)if(n<=a5)b=n===a5&&o>=a4
else b=!0
else b=!1
else b=!0
else b=!0
if(!b)break
a=(m&524288)===0?1:-1
q=o-a*a4
s=n-a*(a5+(B.b.u(q,22)&1))
o=q&4194303
n=s&4194303
m=m-a*(a6+(B.b.u(s,22)&1))&1048575
q=p+a
s=r+a*(B.b.u(q,22)&1)
p=q&4194303
r=s&4194303
t=t+a*(B.b.u(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.ag(0,0,0,p,r,t)
return new A.x(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.x(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.q
else return A.ag(a4,a5,a6,o,n,m)
else return A.ag(0,0,0,o,n,m)},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(a,b){this.a=a
this.b=b},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G(a){var t=new A.bP(new Int16Array(2048),A.aD(2048,B.I,!1,u.q),A.aD(2048,B.a7,!1,u.h),A.aD(2048,B.aW,!1,u.U))
t.aq(a)
return t},
ea(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.W(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.W(l,k,j,1)
A.W(p,r,q,0)
A.W(s,o,q,0)
A.W(s,r,n,0)
A.W(s+(p^1),k,j,1)
A.W(l,r+(o^1),j,1)
A.W(l,k,q+(n^1),1)
B.a.j($.dE(),t,m)}for(t=0;t<16;++t)B.a.j($.dF(),t,A.da(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.d([],u.f)
for(i=0;i<24;++i){h=B.dV[i]
l.push(new A.f(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.b.O(t,24)
if(!(k<l.length))return A.e(l,k)
B.a.m($.bQ,l[k])}l=A.d([],u.Y)
for(i=0;i<48;++i){h=B.dX[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.b.O(t,48)
if(!(k<l.length))return A.e(l,k)
B.a.m($.bR,l[k])}l=A.d([],u.J)
for(i=0;i<160;++i){h=B.dW[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.b.O(t,160)
if(!(k<l.length))return A.e(l,k)
B.a.m($.bS,l[k])}},
W(a,b,c,d){return new A.bs()},
da(a,b,c,d){var t=new A.bt(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(){},
bt:function bt(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
fu(a){A.cm(new A.aj("Field '"+a+"' has been assigned during initialization."),new Error())},
D(){A.cm(new A.aj("Field '' has not been initialized."),new Error())},
fw(){A.cm(new A.aj("Field '' has already been initialized."),new Error())},
fv(){A.cm(new A.aj("Field '' has been assigned during initialization."),new Error())},
eK(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eJ,a)
t[$.cJ()]=a
a.$dart_jsFunction=t
return t},
eJ(a,b){u.j.a(b)
u.Z.a(a)
return A.ed(a,b,null)},
f6(a,b){if(typeof a=="function")return a
else return b.a(A.eK(a))},
d6(a,b,c,d,e){var t,s,r,q,p,o
for(t=0;t<12;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.G(a/e)*e
r=s.a
p=c.a
o=c.b
o=new A.A(p*2-2*o,p+o)
p=new A.aq(r,o,q,e)
p.f=new A.b7()
r=A.bA(r,o,q,e,!0,e)
p.d=r
return p}}throw A.b(new A.c6("No tile type found for elevation: "+A.n(a)+", moisture: "+A.n(b)+". Fix the rules!"))},
e8(a,b,c,d){var t,s,r,q=d.h(0,a)
if(q!=null)for(t=0;t<1;++t){s=q[t]
if(B.H.aN()<s.b){r=c+1
A.dv(b,r)
return A.dv(b,r)}}return A.d([],u.r)},
dR(a){return A.bA(B.l,a.b,a.c,1,a.f,1)},
dS(a){return A.bA(B.y,a.b,a.c,1,a.f,1)},
el(a){var t=a.e
return A.bA(a.a,a.b,a.c,t,a.r,t)},
bA(a,b,c,d,e,f){var t=b.p(0,A.bH(c,c)).p(0,A.bH(d,d)).p(0,A.bH(0,f)),s=t.p(0,A.bH(f,0)),r=new Float32Array(4)
r[0]=-0.025
r[1]=0
r[2]=t.a
r[3]=s.b
return new A.as(r,A.fj(a))},
dv(a,b){var t=b+3,s=b+4,r=b+5
return A.d([A.F(B.h,a,b+1),A.F(B.h,a,b+2),A.F(B.h,a,t),A.F(B.h,a,s),A.F(B.h,a,r),A.F(B.e,a.p(0,B.dv),t),A.F(B.e,a.p(0,B.dw),t),A.F(B.e,a.p(0,B.du),s),A.F(B.e,a.p(0,B.dt),s),A.F(B.e,a.p(0,B.dx),r),A.F(B.e,a.p(0,B.dy),r)],u.r)},
dD(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=A.e_(u.N)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.aa)(a),++s){q=a[s]
p=q.N().L()
o=B.c.n(q.M())
i.m(0,""+B.c.n(p.a)+","+B.c.n(p.b)+","+o)}for(s=0;s<a.length;a.length===r||(0,A.aa)(a),++s){q=a[s]
p=q.N().L()
n=B.c.n(p.a)
m=B.c.n(p.b)
l=B.c.n(q.M())
t=""+n+","
k=""+l
j=""+m
q.a3(!(i.W(0,""+(n-b)+","+j+","+k)&&i.W(0,t+j+","+(l+b))&&i.W(0,t+(m-b)+","+k)))}},
fj(a){switch(a){case B.y:return $.dI()
case B.j:return $.dH()
case B.f:return $.dG()
case B.i:return $.dJ()
case B.l:return $.dL()
case B.z:return $.dK()}},
fa(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cH(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cG==null){A.fm()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.d7("Return interceptor for "+A.n(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c8
if(p==null)p=$.c8=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fq(a)
if(q!=null)return q
if(typeof a=="function")return B.dz
t=Object.getPrototypeOf(a)
if(t==null)return B.x
if(t===Object.prototype)return B.x
if(typeof r=="function"){p=$.c8
if(p==null)p=$.c8=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
e4(a,b){if(a<0||a>4294967295)throw A.b(A.bl(a,0,4294967295,"length",null))
return J.cV(new Array(a),b)},
cU(a,b){if(a<0||a>4294967295)throw A.b(A.bl(a,0,4294967295,"length",null))
return J.cV(new Array(a),b)},
cV(a,b){return J.cs(A.d(a,b.l("h<0>")),b)},
cs(a,b){a.fixed$length=Array
return a},
cW(a){a.fixed$length=Array
a.immutable$list=Array
return a},
e5(a,b){var t=u.s
return J.dM(t.a(a),t.a(b))},
M(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aB.prototype
return J.bb.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.aC.prototype
if(typeof a=="boolean")return J.b9.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
by(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
ff(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
fg(a){if(typeof a=="number")return J.ah.prototype
if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.ar.prototype
return a},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).v(a,b)},
dM(a,b){return J.fg(a).J(a,b)},
P(a){return J.M(a).gk(a)},
cK(a){return J.ff(a).ga_(a)},
co(a){return J.by(a).gq(a)},
dN(a){return J.M(a).gB(a)},
dO(a,b){return J.M(a).ak(a,b)},
b1(a){return J.M(a).i(a)},
b8:function b8(){},
b9:function b9(){},
aC:function aC(){},
p:function p(){},
a3:function a3(){},
bi:function bi(){},
ar:function ar(){},
S:function S(){},
h:function h(a){this.$ti=a},
bI:function bI(a){this.$ti=a},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ah:function ah(){},
aB:function aB(){},
bb:function bb(){},
a1:function a1(){}},B={}
var w=[A,J,B]
var $={}
A.ct.prototype={}
J.b8.prototype={
v(a,b){return a===b},
gk(a){return A.bj(a)},
i(a){return"Instance of '"+A.bV(a)+"'"},
ak(a,b){throw A.b(A.cZ(a,u.o.a(b)))},
gB(a){return A.a8(A.cB(this))}}
J.b9.prototype={
i(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.a8(u.y)},
$iy:1,
$iaw:1}
J.aC.prototype={
v(a,b){return null==b},
i(a){return"null"},
gk(a){return 0},
$iy:1}
J.p.prototype={}
J.a3.prototype={
gk(a){return 0},
i(a){return String(a)}}
J.bi.prototype={}
J.ar.prototype={}
J.S.prototype={
i(a){var t=a[$.cJ()]
if(t==null)return this.ap(a)
return"JavaScript function for "+J.b1(t)},
$iaf:1}
J.h.prototype={
m(a,b){A.Z(a).c.a(b)
if(!!a.fixed$length)A.ab(A.H("add"))
a.push(b)},
aF(a,b,c){var t,s,r,q,p
A.Z(a).l("aw(1)").a(b)
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(!A.f8(b.$1(q)))t.push(q)
if(a.length!==s)throw A.b(A.ax(a))}p=t.length
if(p===s)return
this.sq(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
I(a,b){A.Z(a).l("r<1>").a(b)
if(!!a.fixed$length)A.ab(A.H("addAll"))
this.au(a,b)
return},
au(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.ax(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.cr(a,"[","]")},
ga_(a){return new J.b3(a,a.length,A.Z(a).l("b3<1>"))},
gk(a){return A.bj(a)},
gq(a){return a.length},
sq(a,b){if(!!a.fixed$length)A.ab(A.H("set length"))
if(b>a.length)A.Z(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.bx(a,b))
return a[b]},
j(a,b,c){A.Z(a).c.a(c)
if(!!a.immutable$list)A.ab(A.H("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.bx(a,b))
a[b]=c},
$ir:1,
$ii:1}
J.bI.prototype={}
J.b3.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.aa(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa9(null)
return!1}s.sa9(r[t]);++s.c
return!0},
sa9(a){this.d=this.$ti.l("1?").a(a)}}
J.ah.prototype={
J(a,b){var t
A.eE(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gZ(b)
if(this.gZ(a)===t)return 0
if(this.gZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gZ(a){return a===0?1/a<0:a<0},
n(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.H(""+a+".toInt()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.H(""+a+".floor()"))},
aP(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
am(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bl(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.e(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.ab(A.H("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.e(q,1)
t=q[1]
if(3>=s)return A.e(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.a2("0",p)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
O(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
C(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ad(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.ad(a,b)},
ad(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.H("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
u(a,b){var t
if(a>0)t=this.aG(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aG(a,b){return b>31?0:a>>>b},
gB(a){return A.a8(u.H)},
$iq:1,
$im:1,
$iz:1}
J.aB.prototype={
gB(a){return A.a8(u.S)},
$iy:1,
$io:1}
J.bb.prototype={
gB(a){return A.a8(u.i)},
$iy:1}
J.a1.prototype={
p(a,b){return a+b},
an(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
P(a,b,c){return a.substring(b,A.ef(b,c,a.length))},
ao(a,b){return this.P(a,b,null)},
a2(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.G)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
J(a,b){var t
A.aY(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
i(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a8(u.N)},
gq(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.bx(a,b))
return a[b]},
$iy:1,
$iq:1,
$id0:1,
$iC:1}
A.aj.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bZ.prototype={}
A.bc.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.by(r),p=q.gq(r)
if(s.b!==p)throw A.b(A.ax(r))
t=s.c
if(t>=p){s.sa4(null)
return!1}s.sa4(q.aJ(r,t));++s.c
return!0},
sa4(a){this.d=this.$ti.l("1?").a(a)}}
A.R.prototype={}
A.ao.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.ao&&this.a===b.a},
$iap:1}
A.aQ.prototype={$r:"+(1,2)",$s:1}
A.at.prototype={
gaf(){return this.a},
gK(){return this.b},
$r:"+distance,elevation(1,2)",
$s:2}
A.az.prototype={}
A.ay.prototype={
i(a){return A.bK(this)},
$iT:1}
A.aA.prototype={
gq(a){return this.b.length},
X(a){return!1},
h(a,b){if(!this.X(b))return null
return this.b[this.a[b]]},
E(a,b){var t,s,r,q,p=this
p.$ti.l("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.ba.prototype={
gaL(){var t=this.a
return t},
gaO(){var t,s,r,q,p=this
if(p.c===1)return B.v
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.v
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.e(t,q)
r.push(t[q])}return J.cW(r)},
gaM(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.w
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.w
p=new A.a2(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.e(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.e(r,m)
p.j(0,new A.ao(n),r[m])}return new A.az(p,u.a)},
$icT:1}
A.bU.prototype={
$2(a,b){var t
A.aY(a)
t=this.a
t.b=t.b+"$"+a
B.a.m(this.b,a)
B.a.m(this.c,b);++t.a},
$S:1}
A.Q.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dC(s==null?"unknown":s)+"'"},
$iaf:1,
gaQ(){return this},
$C:"$1",
$R:1,
$D:null}
A.b6.prototype={$C:"$2",$R:2}
A.bp.prototype={}
A.bn.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dC(t)+"'"}}
A.ae.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ae))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dz(this.a)^A.bj(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bV(this.a)+"'")}}
A.c3.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bY.prototype={
i(a){return"RuntimeError: "+this.a}}
A.c2.prototype={
i(a){return"Assertion failed: "+A.a0(this.a)}}
A.ca.prototype={}
A.a2.prototype={
gq(a){return this.a},
X(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
h(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aK(b)},
aK(a){var t,s,r=this.d
if(r==null)return null
t=r[this.ag(a)]
s=this.ah(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r,q,p,o,n=this,m=A.L(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.a5(t==null?n.b=n.U():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a5(s==null?n.c=n.U():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.U()
q=n.ag(b)
p=r[q]
if(p==null)r[q]=[n.V(b,c)]
else{o=n.ah(p,b)
if(o>=0)p[o].b=c
else p.push(n.V(b,c))}}},
E(a,b){var t,s,r=this
A.L(r).l("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.ax(r))
t=t.c}},
a5(a,b,c){var t,s=A.L(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.V(b,c)
else t.b=c},
V(a,b){var t=this,s=A.L(t),r=new A.bJ(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ag(a){return J.P(a)&1073741823},
ah(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ac(a[s].a,b))return s
return-1},
i(a){return A.bK(this)},
U(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icX:1}
A.bJ.prototype={}
A.cg.prototype={
$1(a){return this.a(a)},
$S:2}
A.ch.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.ci.prototype={
$1(a){return this.a(A.aY(a))},
$S:4}
A.Y.prototype={
i(a){return this.ae(!1)},
ae(a){var t,s,r,q,p,o=this.aE(),n=this.ac(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.e(n,r)
p=n[r]
m=a?m+A.d2(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aE(){var t,s=this.$s
for(;$.c9.length<=s;)B.a.m($.c9,null)
t=$.c9[s]
if(t==null){t=this.aA()
B.a.j($.c9,s,t)}return t},
aA(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.d(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.j(l,r,s[t])}}return J.cW(A.cY(l,!1,u.K))}}
A.a7.prototype={
ac(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.a7&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gk(a){return A.e9(this.$s,this.a,this.b,B.k)}}
A.bg.prototype={}
A.al.prototype={
gq(a){return a.length},
$iai:1}
A.aG.prototype={
h(a,b){A.cd(b,a,a.length)
return a[b]},
j(a,b,c){A.cA(c)
A.cd(b,a,a.length)
a[b]=c},
$ir:1,
$ii:1}
A.aH.prototype={
j(a,b,c){A.aX(c)
A.cd(b,a,a.length)
a[b]=c},
$ir:1,
$ii:1}
A.be.prototype={
gB(a){return B.e_},
$iy:1,
$ibD:1}
A.bf.prototype={
gB(a){return B.e0},
h(a,b){A.cd(b,a,a.length)
return a[b]},
$iy:1,
$icp:1}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.B.prototype={
l(a){return A.aV(v.typeUniverse,this,a)},
a6(a){return A.dj(v.typeUniverse,this,a)}}
A.bq.prototype={}
A.cb.prototype={
i(a){return A.w(this.a,null)}}
A.c5.prototype={
i(a){return this.a}}
A.bu.prototype={}
A.aL.prototype={
ga_(a){return new A.br(this,this.az(),A.L(this).l("br<1>"))},
gq(a){return this.a},
W(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.aB(b)
return s}},
aB(a){var t=this.d
if(t==null)return!1
return this.aa(t[this.a8(a)],a)>=0},
m(a,b){var t,s,r=this
A.L(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.av(t==null?r.b=A.d9():t,b)}else{s=r.ar(b)
return s}},
ar(a){var t,s,r,q=this
A.L(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.d9()
s=q.a8(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.aa(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
az(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.aD(j.a,null,!1,u.z)
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){i[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){i[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;++k){i[q]=m[k];++q}}}return j.e=i},
av(a,b){A.L(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a8(a){return B.d.gk(a)&1073741823},
aa(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ac(a[s],b))return s
return-1}}
A.br.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.ax(q))
else if(r>=s.length){t.sa7(null)
return!1}else{t.sa7(s[r])
t.c=r+1
return!0}},
sa7(a){this.d=this.$ti.l("1?").a(a)}}
A.E.prototype={
ga_(a){return new A.bc(a,this.gq(a),A.b_(a).l("bc<E.E>"))},
aJ(a,b){return this.h(a,b)},
i(a){return A.cr(a,"[","]")}}
A.aE.prototype={
gq(a){return this.a},
i(a){return A.bK(this)},
$iT:1}
A.bL.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.n(a)
s.a=t+": "
s.a+=A.n(b)},
$S:5}
A.aW.prototype={}
A.ak.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.l("~(1,2)").a(b))},
gq(a){return this.a.a},
i(a){return A.bK(this.a)},
$iT:1}
A.aK.prototype={}
A.an.prototype={
i(a){return A.cr(this,"{","}")},
$ir:1}
A.aR.prototype={}
A.au.prototype={}
A.bN.prototype={
$2(a,b){var t,s,r
u.v.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a0(b)
s.a=", "},
$S:6}
A.c4.prototype={
i(a){return this.R()}}
A.bC.prototype={}
A.b4.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a0(t)
return"Assertion failed"}}
A.c_.prototype={}
A.ad.prototype={
gT(){return"Invalid argument"+(!this.a?"(s)":"")},
gS(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.n(q),o=t.gT()+r+p
if(!t.a)return o
return o+t.gS()+": "+A.a0(t.gY())},
gY(){return this.b}}
A.bk.prototype={
gY(){return A.eF(this.b)},
gT(){return"RangeError"},
gS(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.bF.prototype={
gY(){return A.aX(this.b)},
gT(){return"RangeError"},
gS(){if(A.aX(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bM.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aJ("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a0(o)
k.a=", "}l.d.E(0,new A.bN(k,j))
n=A.a0(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.c1.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c0.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bz.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a0(t)+"."}}
A.bT.prototype={
i(a){return"Out of Memory"}}
A.c6.prototype={
i(a){return"Exception: "+this.a}}
A.bE.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.P(g,0,75)+"..."
return i+"\n"+g}for(t=g.length,s=1,r=0,q=!1,p=0;p<h;++p){if(!(p<t))return A.e(g,p)
o=g.charCodeAt(p)
if(o===10){if(r!==p||!q)++s
r=p+1
q=!1}else if(o===13){++s
r=p+1
q=!0}}i=s>1?i+(" (at line "+s+", character "+(h-r+1)+")\n"):i+(" (at character "+(h+1)+")\n")
for(p=h;p<t;++p){o=g.charCodeAt(p)
if(o===10||o===13){t=p
break}}if(t-r>78)if(h-r<75){n=r+75
m=r
l=""
k="..."}else{if(t-h<75){m=t-75
n=t
k=""}else{m=h-36
n=h+36
k="..."}l="..."}else{n=t
m=r
l=""
k=""}return i+l+B.d.P(g,m,n)+k+"\n"+B.d.a2(" ",h-m+l.length)+"^\n"}}
A.aI.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
i(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.bj(this)},
i(a){return"Instance of '"+A.bV(this)+"'"},
ak(a,b){throw A.b(A.cZ(this,u.o.a(b)))},
gB(a){return A.fi(this)},
toString(){return this.i(this)}}
A.aJ.prototype={
gq(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bB.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.c7.prototype={
aN(){return Math.random()}}
A.a5.prototype={
i(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
v(a,b){if(b==null)return!1
return b instanceof A.a5&&this.a===b.a&&this.b===b.b},
gk(a){return A.d5(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.k.prototype={
R(){return"LevelOfDetail."+this.b}}
A.b7.prototype={}
A.A.prototype={
p(a,b){return new A.A(this.a+b.a,this.b+b.b)},
L(){var t=this.b,s=t/2-this.a/4
return new A.a5(t-s,s,u.O)},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.A&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
i(a){return""+B.c.n(this.a)+", "+B.c.n(this.b)}}
A.as.prototype={}
A.v.prototype={
J(a,b){var t,s
u.k.a(b)
t=this.a0()
s=b.a0()
if(t.gK()!==s.gK())return t.gK()>s.gK()?1:-1
return t.gaf()>s.gaf()?1:-1},
$iq:1}
A.b2.prototype={}
A.aq.prototype={
a1(){var t=this,s=t.b,r=t.d
r===$&&A.D()
return["Tile",t.a.b,s.a,s.b,t.c,t.e,A.d([r.a,r.b],u.V),t.r]},
a0(){var t=this.b.L()
return new A.at(-1*(t.a+t.b+this.e),this.c)},
N(){return this.b},
ai(){return this.r},
a3(a){var t=this
if(t.r===a)return
t.r=a
t.d=A.el(t)},
M(){return this.c}}
A.I.prototype={
R(){return"TileType."+this.b}}
A.a4.prototype={
a0(){var t=this.b.L()
return new A.at(-1*(t.a+t.b+1),this.c)},
N(){return this.b},
ai(){return this.f},
a3(a){this.f=a},
M(){return this.c},
a1(){var t=this,s=t.b,r=t.e
r===$&&A.D()
return["NaturalItem",t.a.b,s.a,s.b,t.c,A.d([r.a,r.b],u.V),t.f]}}
A.bh.prototype={
R(){return"NaturalItemPart."+this.b}}
A.bd.prototype={}
A.bo.prototype={
al(){var t=null
return A.d([new A.t(B.i,0,-0.2),new A.t(B.f,0,0),new A.t(B.z,0,t),new A.t(B.i,10,-0.2),new A.t(B.j,10,0.3),new A.t(B.f,10,t),new A.t(B.i,15,-0.2),new A.t(B.f,15,0.4),new A.t(B.j,15,t),new A.t(B.i,20,0.5),new A.t(B.f,20,0.6),new A.t(B.l,t,t)],u.d)}}
A.t.prototype={}
A.am.prototype={}
A.ck.prototype={
$1(a){var t,s,r,q,p=J.by(a),o=A.aX(p.h(a,0)),n=A.aX(p.h(a,1)),m=A.cA(p.h(a,2)),l=A.cA(p.h(a,3))
p=A.aX(p.h(a,4))
if(!(p>=0&&p<20))return A.e(B.t,p)
t=B.t[p]
s=new A.bW(new A.bo()).aH(o,n,B.c.n(m),B.c.n(l),t)
r=A.d([],u.l)
for(p=s.length,q=0;q<s.length;s.length===p||(0,A.aa)(s),++q)B.a.m(r,s[q].a1())
return r},
$S:7}
A.bW.prototype={
aH(a,b,c,d,e){var t,s,r,q,p,o,n=this,m=n.b
if(m===$){t=new A.bO(n.a)
t.a=A.G(2)
t.b=A.G(3)
t.c=A.G(4)
t.d=A.G(5)
t.e=A.G(6)
t.f=A.G(7)
t.r=A.G(8)
t.w=A.G(9)
t.x=A.G(10)
t.y=A.G(11)
t.z=A.G(12)
n.b!==$&&A.fv()
n.b=t
m=t}s=e.c
r=m.aI(a,b,c,d,s)
q=n.aD(c,d,r.a,r.b,s)
p=A.cY(q,!0,u.k)
A.dD(p,s)
if(e.d)B.a.I(p,n.aC(q))
A.dD(p,s)
s=A.Z(p)
o=s.l("aw(1)").a(new A.bX())
if(!!p.fixed$length)A.ab(A.H("removeWhere"))
B.a.aF(p,o,!0)
if(!!p.immutable$list)A.ab(A.H("sort"))
A.ej(p,J.eT(),s.c)
return p},
aD(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.d([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.e(d,o)
m=d[o]
for(l=m.length,k=a+o*e,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.e(n,i)
h=n[i]
if(h<=0){g=B.c.G(h/e)
if(!(i<l))return A.e(m,i)
B.a.m(t,A.d6(g*e,m[i],new A.a5(k,b+i*e,r),q.al(),e))}else for(g=b+i*e;h>0;){f=B.c.G(h/e)
if(!(i<l))return A.e(m,i)
B.a.m(t,A.d6(f*e,m[i],new A.a5(k,g,r),q.al(),e))
h-=e}}}return t},
aC(a){var t,s,r,q,p,o,n,m
u.t.a(a)
t=A.d([],u.r)
for(s=a.length,r=u.W,q=u.w,p=u.m,o=0;o<a.length;a.length===s||(0,A.aa)(a),++o){n=a[o]
m=A.e8(n.a,n.b,n.c,A.e6([B.j,A.d([new A.am(0.01)],r),B.f,A.d([new A.am(0.005)],r)],q,p))
if(m.length!==0)B.a.I(t,m)}return t}}
A.bX.prototype={
$1(a){return!u.k.a(a).ai()},
$S:8}
A.bO.prototype={
aI(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.ab(b3,b4),b2=b0.ab(b3,b4)
for(t=b1.length,s=b2.length,r=0;r<b3;++r)for(q=b5+r*b7,p=q*0.0004,o=q*0.0016,n=q*0.0064,m=q*0.0256,l=q*0.0000032000000000000003,k=q*0.000012800000000000001,j=q*0.000051200000000000004,i=q*0.00020480000000000002,h=0;h<b3;++h){g=b6+h*b7
f=b0.a
f===$&&A.D()
e=g*0.0004
d=0.366025403784439*(p+e)
c=p+d
b=e+d
a=f.t(c,b)
f=b0.b
f===$&&A.D()
e=g*0.0016
d=0.366025403784439*(o+e)
a0=o+d
a1=e+d
f=f.t(a0,a1)
e=b0.c
e===$&&A.D()
a2=g*0.0064
d=0.366025403784439*(n+a2)
a3=n+d
a4=a2+d
e=e.t(a3,a4)
a2=b0.d
a2===$&&A.D()
a5=g*0.0256
d=0.366025403784439*(m+a5)
a5=a2.t(m+d,a5+d)
a2=b0.e
a2===$&&A.D()
a6=g*0.0000032000000000000003
d=0.366025403784439*(l+a6)
a6=a2.t(l+d,a6+d)
a2=b0.f
a2===$&&A.D()
a7=g*0.000012800000000000001
d=0.366025403784439*(k+a7)
a7=a2.t(k+d,a7+d)
a2=b0.r
a2===$&&A.D()
a8=g*0.000051200000000000004
d=0.366025403784439*(j+a8)
a8=a2.t(j+d,a8+d)
a2=b0.w
a2===$&&A.D()
a9=g*0.00020480000000000002
d=0.366025403784439*(i+a9)
a9=a2.t(i+d,a9+d)
if(!(r<t))return A.e(b1,r)
B.a.j(b1[r],h,B.c.aP(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+1.5)/4-0.6)*120))
a9=b0.x
a9===$&&A.D()
a9=a9.t(c,b)
a8=b0.y
a8===$&&A.D()
a8=a8.t(a0,a1)
a7=b0.z
a7===$&&A.D()
a7=a7.t(a3,a4)
if(!(r<s))return A.e(b2,r)
B.a.j(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aQ(b1,b2)},
ab(a,b){var t,s,r,q,p=J.cU(a,u.u)
for(t=u.i,s=0;s<a;++s){r=J.cU(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.x.prototype={
p(a,b){var t=A.bG(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.x(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
v(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.x)t=b
else if(A.ce(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cq(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
J(a,b){return this.aw(b)},
aw(a){var t=A.bG(a),s=this.c,r=s>>>19,q=t.c
if(r!==q>>>19)return r===0?1:-1
if(s>q)return 1
else if(s<q)return-1
s=this.b
q=t.b
if(s>q)return 1
else if(s<q)return-1
s=this.a
q=t.a
if(s>q)return 1
else if(s<q)return-1
return 0},
gaj(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
n(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
i(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.b.u(q,22)&1)
s=p&4194303
o=0-o-(B.b.u(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.e3(10,q,p,o,r)},
$iq:1}
A.f.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bP.prototype={
aq(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.d_){A.ea()
$.d_=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.e(t,s)
t[s]=s}r=A.cq(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cS("6364136223846793005",10,!0)
m.toString
l=A.bG(m)
m=r.a
k=m&8191
j=r.b
i=m>>>13|(j&15)<<9
h=j>>>4&8191
m=r.c
g=j>>>17|(m&255)<<5
j=l.a
f=j&8191
e=l.b
d=j>>>13|(e&15)<<9
c=e>>>4&8191
j=l.c
b=e>>>17|(j&255)<<5
a=j>>>8&4095
a0=k*f
a1=i*f
a2=h*f
a3=g*f
a4=(m>>>8&4095)*f
if(d!==0){a1+=k*d
a2+=i*d
a3+=h*d
a4+=g*d}if(c!==0){a2+=k*c
a3+=i*c
a4+=h*c}if(b!==0){a3+=k*b
a4+=i*b}if(a!==0)a4+=k*a
a5=(a0&4194303)+((a1&511)<<13)
a6=(a0>>>22)+(a1>>>9)+((a2&262143)<<4)+((a3&31)<<17)+(a5>>>22)
m=A.cS("1442695040888963407",10,!0)
m.toString
r=new A.x(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).p(0,m)
m=s+1
a7=A.e1(r.p(0,31),m,3).n(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.e(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bQ.length))return A.e($.bQ,m)
B.a.j(p,s,$.bQ[m])
m=q[s]
if(!(m>=0&&m<$.bR.length))return A.e($.bR,m)
B.a.j(o,s,$.bR[m])
m=q[s]
if(!(m>=0&&m<$.bS.length))return A.e($.bS,m)
B.a.j(n,s,$.bS[m])
t[a7]=t[s]}},
t(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.G(a),i=B.c.G(b),h=a-j,g=b-i,f=B.c.n((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.e(B.r,p)
o=B.r[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.e(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.a6.prototype={}
A.bs.prototype={}
A.bt.prototype={};(function aliases(){var t=J.a3.prototype
t.ap=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1
t(J,"eT","e5",9)
s(A,"fd","dR",0)
s(A,"fe","dS",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.ct,J.b8,J.b3,A.bC,A.bZ,A.bc,A.R,A.ao,A.Y,A.ak,A.ay,A.ba,A.Q,A.ca,A.aE,A.bJ,A.B,A.bq,A.cb,A.an,A.br,A.E,A.aW,A.c4,A.bT,A.c6,A.bE,A.aI,A.aJ,A.c7,A.a5,A.b7,A.A,A.as,A.v,A.bd,A.t,A.am,A.bW,A.bO,A.x,A.f,A.c,A.a,A.bP,A.a6,A.bs,A.bt])
r(J.b8,[J.b9,J.aC,J.p,J.ah,J.a1])
r(J.p,[J.a3,J.h,A.bg,A.bB])
r(J.a3,[J.bi,J.ar,J.S])
s(J.bI,J.h)
r(J.ah,[J.aB,J.bb])
r(A.bC,[A.aj,A.c3,A.bY,A.b4,A.c5,A.c_,A.ad,A.bM,A.c1,A.c0,A.bz])
s(A.a7,A.Y)
r(A.a7,[A.aQ,A.at])
s(A.au,A.ak)
s(A.aK,A.au)
s(A.az,A.aK)
s(A.aA,A.ay)
r(A.Q,[A.b6,A.bp,A.cg,A.ci,A.ck,A.bX])
r(A.b6,[A.bU,A.ch,A.bL,A.bN])
r(A.bp,[A.bn,A.ae])
s(A.c2,A.b4)
s(A.a2,A.aE)
s(A.al,A.bg)
r(A.al,[A.aM,A.aO])
s(A.aN,A.aM)
s(A.aG,A.aN)
s(A.aP,A.aO)
s(A.aH,A.aP)
s(A.be,A.aG)
s(A.bf,A.aH)
s(A.bu,A.c5)
s(A.aR,A.an)
s(A.aL,A.aR)
r(A.ad,[A.bk,A.bF])
r(A.c4,[A.k,A.I,A.bh])
r(A.v,[A.b2,A.a4])
s(A.aq,A.b2)
s(A.bo,A.bd)
t(A.aM,A.E)
t(A.aN,A.R)
t(A.aO,A.E)
t(A.aP,A.R)
t(A.au,A.aW)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",z:"num",C:"String",aw:"bool",aI:"Null",i:"List"},mangledNames:{},types:["as(a4)","~(C,@)","@(@)","@(@,C)","@(C)","~(j?,j?)","~(ap,@)","i<i<@>?>(@)","aw(v)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aQ&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.at&&a.b(c.a)&&b.b(c.b)}}
A.eB(v.typeUniverse,JSON.parse('{"bi":"a3","ar":"a3","S":"a3","b9":{"aw":[],"y":[]},"aC":{"y":[]},"h":{"i":["1"],"r":["1"]},"bI":{"h":["1"],"i":["1"],"r":["1"]},"ah":{"m":[],"z":[],"q":["z"]},"aB":{"m":[],"o":[],"z":[],"q":["z"],"y":[]},"bb":{"m":[],"z":[],"q":["z"],"y":[]},"a1":{"C":[],"q":["C"],"d0":[],"y":[]},"ao":{"ap":[]},"aQ":{"a7":[],"Y":[]},"at":{"a7":[],"Y":[]},"az":{"aK":["1","2"],"au":["1","2"],"ak":["1","2"],"aW":["1","2"],"T":["1","2"]},"ay":{"T":["1","2"]},"aA":{"ay":["1","2"],"T":["1","2"]},"ba":{"cT":[]},"Q":{"af":[]},"b6":{"af":[]},"bp":{"af":[]},"bn":{"af":[]},"ae":{"af":[]},"a2":{"aE":["1","2"],"cX":["1","2"],"T":["1","2"]},"a7":{"Y":[]},"al":{"ai":["1"]},"aG":{"E":["m"],"ai":["m"],"i":["m"],"r":["m"],"R":["m"]},"aH":{"E":["o"],"ai":["o"],"i":["o"],"r":["o"],"R":["o"]},"be":{"E":["m"],"bD":[],"ai":["m"],"i":["m"],"r":["m"],"R":["m"],"y":[],"E.E":"m"},"bf":{"E":["o"],"cp":[],"ai":["o"],"i":["o"],"r":["o"],"R":["o"],"y":[],"E.E":"o"},"aL":{"an":["1"],"r":["1"]},"aE":{"T":["1","2"]},"ak":{"T":["1","2"]},"aK":{"au":["1","2"],"ak":["1","2"],"aW":["1","2"],"T":["1","2"]},"an":{"r":["1"]},"aR":{"an":["1"],"r":["1"]},"m":{"z":[],"q":["z"]},"o":{"z":[],"q":["z"]},"i":{"r":["1"]},"z":{"q":["z"]},"C":{"q":["C"],"d0":[]},"v":{"q":["v"]},"b2":{"v":[],"q":["v"]},"aq":{"v":[],"q":["v"]},"a4":{"v":[],"q":["v"]},"bo":{"bd":[]},"x":{"q":["j"]},"cp":{"i":["o"],"r":["o"]},"bD":{"i":["m"],"r":["m"]}}'))
A.eA(v.typeUniverse,JSON.parse('{"al":1,"aR":1}'))
var u=(function rtii(){var t=A.a9
return{s:t("q<@>"),a:t("az<ap,@>"),Z:t("af"),k:t("v"),q:t("f"),h:t("c"),U:t("a"),o:t("cT"),V:t("h<bD>"),f:t("h<f>"),Y:t("h<c>"),J:t("h<a>"),r:t("h<a4>"),W:t("h<am>"),G:t("h<j>"),c:t("h<C>"),Q:t("h<aq>"),d:t("h<t>"),n:t("h<m>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("aC"),g:t("S"),p:t("ai<@>"),B:t("a2<ap,@>"),I:t("i<i<m>>"),m:t("i<am>"),t:t("i<aq>"),u:t("i<m>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("aI"),K:t("j"),O:t("a5<m>"),L:t("fB"),F:t("+()"),N:t("C"),v:t("ap"),w:t("I"),R:t("y"),C:t("ar"),D:t("as"),y:t("aw"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("j*"),x:t("cR<aI>?"),X:t("j?"),H:t("z")}})();(function constants(){var t=hunkHelpers.makeConstList
B.ds=J.b8.prototype
B.a=J.h.prototype
B.b=J.aB.prototype
B.c=J.ah.prototype
B.d=J.a1.prototype
B.dz=J.S.prototype
B.dA=J.p.prototype
B.x=J.bi.prototype
B.m=J.ar.prototype
B.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.A=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.F=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.C=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.o=function(hooks) { return hooks; }

B.G=new A.bT()
B.k=new A.bZ()
B.H=new A.c7()
B.p=new A.ca()
B.I=new A.f(0,0)
B.a7=new A.c(0,0,0)
B.aW=new A.a(0,0,0,0)
B.q=new A.x(0,0,0)
B.dt=new A.A(0,2)
B.du=new A.A(2,1)
B.dv=new A.A(2,-1)
B.dw=new A.A(4,0)
B.dx=new A.A(-2,1)
B.dy=new A.A(-4,0)
B.a_=new A.f(0.130526192220052,0.99144486137381)
B.a2=new A.f(0.38268343236509,0.923879532511287)
B.P=new A.f(0.608761429008721,0.793353340291235)
B.a5=new A.f(0.793353340291235,0.608761429008721)
B.S=new A.f(0.923879532511287,0.38268343236509)
B.X=new A.f(0.99144486137381,0.130526192220051)
B.a1=new A.f(0.99144486137381,-0.130526192220051)
B.Z=new A.f(0.923879532511287,-0.38268343236509)
B.Q=new A.f(0.793353340291235,-0.60876142900872)
B.K=new A.f(0.608761429008721,-0.793353340291235)
B.N=new A.f(0.38268343236509,-0.923879532511287)
B.U=new A.f(0.130526192220052,-0.99144486137381)
B.a4=new A.f(-0.130526192220052,-0.99144486137381)
B.L=new A.f(-0.38268343236509,-0.923879532511287)
B.T=new A.f(-0.608761429008721,-0.793353340291235)
B.V=new A.f(-0.793353340291235,-0.608761429008721)
B.W=new A.f(-0.923879532511287,-0.38268343236509)
B.R=new A.f(-0.99144486137381,-0.130526192220052)
B.M=new A.f(-0.99144486137381,0.130526192220051)
B.J=new A.f(-0.923879532511287,0.38268343236509)
B.Y=new A.f(-0.793353340291235,0.608761429008721)
B.O=new A.f(-0.608761429008721,0.793353340291235)
B.a3=new A.f(-0.38268343236509,0.923879532511287)
B.a0=new A.f(-0.130526192220052,0.99144486137381)
B.dV=A.d(t([B.a_,B.a2,B.P,B.a5,B.S,B.X,B.a1,B.Z,B.Q,B.K,B.N,B.U,B.a4,B.L,B.T,B.V,B.W,B.R,B.M,B.J,B.Y,B.O,B.a3,B.a0]),u.f)
B.e5=new A.a6(1,0,-0.788675134594813,0.211324865405187)
B.e2=new A.a6(0,0,0,0)
B.e3=new A.a6(1,1,-0.577350269189626,-0.577350269189626)
B.e4=new A.a6(0,1,0.211324865405187,-0.788675134594813)
B.r=A.d(t([B.e5,B.e2,B.e3,B.e4]),A.a9("h<a6>"))
B.d_=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.cf=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.br=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.cc=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.ch=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.c4=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bK=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bZ=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.cx=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cU=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.c2=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.cy=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.cv=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.ci=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.c1=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cT=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.cd=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.c3=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.dm=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.cn=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.bE=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.dj=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.b1=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.db=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.bx=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aT=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bN=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.bD=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.bh=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.cg=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.d1=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aX=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.dc=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c8=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cO=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.cb=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.ck=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aZ=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.c5=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.cr=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.bv=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cF=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.dg=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c6=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cR=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d7=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bu=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.d3=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.bb=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bm=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.bj=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cJ=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bT=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cI=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b7=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.de=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b9=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aY=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.cp=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dr=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.df=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.cm=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cV=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b8=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.di=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cH=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.ca=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bW=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bA=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.ce=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cw=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.da=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.b_=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cB=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bU=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d9=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cC=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.cz=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cK=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cS=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bS=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aU=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.b4=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.bk=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bJ=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.bd=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bH=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.d0=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.cl=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bo=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c7=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.be=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cD=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.ba=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aV=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.cj=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cW=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cY=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bV=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.d5=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.b5=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bq=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.dq=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.bw=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bY=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cL=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.dk=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bt=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.cs=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.cu=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.dl=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.dh=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.by=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.bF=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.cA=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cP=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.c0=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.dn=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.d2=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bp=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.bC=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bO=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cE=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.bl=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.b0=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cQ=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bM=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bP=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d8=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bX=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d6=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bQ=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.dp=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.co=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.bi=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bB=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cX=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bL=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.d4=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cN=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.cq=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cG=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.b2=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cM=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.bc=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bn=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bG=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.ct=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bR=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.bg=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.dd=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.bz=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.c_=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.b3=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b6=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.bs=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cZ=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.bf=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bI=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c9=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dW=A.d(t([B.d_,B.cf,B.br,B.cc,B.ch,B.c4,B.bK,B.bZ,B.cx,B.cU,B.c2,B.cy,B.cv,B.ci,B.c1,B.cT,B.cd,B.c3,B.dm,B.cn,B.bE,B.dj,B.b1,B.db,B.bx,B.aT,B.bN,B.bD,B.bh,B.cg,B.d1,B.aX,B.dc,B.c8,B.cO,B.cb,B.ck,B.aZ,B.c5,B.cr,B.bv,B.cF,B.dg,B.c6,B.cR,B.d7,B.bu,B.d3,B.bb,B.bm,B.bj,B.cJ,B.bT,B.cI,B.b7,B.de,B.b9,B.aY,B.cp,B.dr,B.df,B.cm,B.cV,B.b8,B.di,B.cH,B.ca,B.bW,B.bA,B.ce,B.cw,B.da,B.b_,B.cB,B.bU,B.d9,B.cC,B.cz,B.cK,B.cS,B.bS,B.aU,B.b4,B.bk,B.bJ,B.bd,B.bH,B.d0,B.cl,B.bo,B.c7,B.be,B.cD,B.ba,B.aV,B.cj,B.cW,B.cY,B.bV,B.d5,B.b5,B.bq,B.dq,B.bw,B.bY,B.cL,B.dk,B.bt,B.cs,B.cu,B.dl,B.dh,B.by,B.bF,B.cA,B.cP,B.c0,B.dn,B.d2,B.bp,B.bC,B.bO,B.cE,B.bl,B.b0,B.cQ,B.bM,B.bP,B.d8,B.bX,B.d6,B.bQ,B.dp,B.co,B.bi,B.bB,B.cX,B.bL,B.d4,B.cN,B.cq,B.cG,B.b2,B.cM,B.bc,B.bn,B.bG,B.ct,B.bR,B.bg,B.dd,B.bz,B.c_,B.b3,B.b6,B.bs,B.cZ,B.bf,B.bI,B.c9]),u.J)
B.dG=new A.k(1,!0,"zoomlevel_19")
B.dK=new A.k(2,!1,"zoomlevel_18")
B.dO=new A.k(4,!1,"zoomlevel_17")
B.dU=new A.k(8,!1,"zoomlevel_16")
B.dF=new A.k(16,!1,"zoomlevel_15")
B.dM=new A.k(32,!1,"zoomlevel_14")
B.dR=new A.k(64,!1,"zoomlevel_13")
B.dC=new A.k(128,!1,"zoomlevel_12")
B.dI=new A.k(256,!1,"zoomlevel_11")
B.dP=new A.k(512,!1,"zoomlevel_10")
B.dB=new A.k(1024,!1,"zoomlevel_9")
B.dH=new A.k(2048,!1,"zoomlevel_8")
B.dN=new A.k(4096,!1,"zoomlevel_7")
B.dT=new A.k(8192,!1,"zoomlevel_6")
B.dE=new A.k(16384,!1,"zoomlevel_5")
B.dL=new A.k(32768,!1,"zoomlevel_4")
B.dS=new A.k(65536,!1,"zoomlevel_3")
B.dD=new A.k(131072,!1,"zoomlevel_2")
B.dJ=new A.k(262144,!1,"zoomlevel_1")
B.dQ=new A.k(524288,!1,"zoomlevel_0")
B.t=A.d(t([B.dG,B.dK,B.dO,B.dU,B.dF,B.dM,B.dR,B.dC,B.dI,B.dP,B.dB,B.dH,B.dN,B.dT,B.dE,B.dL,B.dS,B.dD,B.dJ,B.dQ]),A.a9("h<k>"))
B.u=A.d(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.a9("h<o>"))
B.am=new A.c(-2.22474487139,-2.22474487139,-1)
B.aF=new A.c(-2.22474487139,-2.22474487139,1)
B.af=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aL=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.at=new A.c(-2.22474487139,-1,-2.22474487139)
B.aE=new A.c(-2.22474487139,1,-2.22474487139)
B.ap=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aM=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.az=new A.c(-2.22474487139,-1,2.22474487139)
B.al=new A.c(-2.22474487139,1,2.22474487139)
B.ab=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a9=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.aG=new A.c(-2.22474487139,2.22474487139,-1)
B.ad=new A.c(-2.22474487139,2.22474487139,1)
B.aq=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.aC=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.ae=new A.c(-1,-2.22474487139,-2.22474487139)
B.aa=new A.c(1,-2.22474487139,-2.22474487139)
B.au=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.aD=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a8=new A.c(-1,-2.22474487139,2.22474487139)
B.ag=new A.c(1,-2.22474487139,2.22474487139)
B.a6=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ai=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aK=new A.c(-1,2.22474487139,-2.22474487139)
B.aH=new A.c(1,2.22474487139,-2.22474487139)
B.ax=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.an=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.as=new A.c(-1,2.22474487139,2.22474487139)
B.aR=new A.c(1,2.22474487139,2.22474487139)
B.aj=new A.c(0,3.0862664687972017,1.1721513422464978)
B.ar=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aO=new A.c(2.22474487139,-2.22474487139,-1)
B.aI=new A.c(2.22474487139,-2.22474487139,1)
B.ah=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.aw=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.ak=new A.c(2.22474487139,-1,-2.22474487139)
B.aJ=new A.c(2.22474487139,1,-2.22474487139)
B.aP=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.ac=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aN=new A.c(2.22474487139,-1,2.22474487139)
B.aA=new A.c(2.22474487139,1,2.22474487139)
B.ay=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aS=new A.c(3.0862664687972017,0,1.1721513422464978)
B.aB=new A.c(2.22474487139,2.22474487139,-1)
B.aQ=new A.c(2.22474487139,2.22474487139,1)
B.av=new A.c(3.0862664687972017,1.1721513422464978,0)
B.ao=new A.c(1.1721513422464978,3.0862664687972017,0)
B.dX=A.d(t([B.am,B.aF,B.af,B.aL,B.at,B.aE,B.ap,B.aM,B.az,B.al,B.ab,B.a9,B.aG,B.ad,B.aq,B.aC,B.ae,B.aa,B.au,B.aD,B.a8,B.ag,B.a6,B.ai,B.aK,B.aH,B.ax,B.an,B.as,B.aR,B.aj,B.ar,B.aO,B.aI,B.ah,B.aw,B.ak,B.aJ,B.aP,B.ac,B.aN,B.aA,B.ay,B.aS,B.aB,B.aQ,B.av,B.ao]),u.Y)
B.v=A.d(t([]),u.b)
B.dY={}
B.w=new A.aA(B.dY,[],A.a9("aA<ap,@>"))
B.e=new A.bh(A.fd(),"birchLeavesCube")
B.h=new A.bh(A.fe(),"birchTrunkCube")
B.dZ=new A.ao("call")
B.y=new A.I("ice")
B.j=new A.I("grass")
B.f=new A.I("deathGrass")
B.i=new A.I("rock")
B.l=new A.I("snow")
B.z=new A.I("sand")
B.e_=A.cI("bD")
B.e0=A.cI("cp")
B.e1=A.cI("j")})();(function staticFields(){$.c8=null
$.O=A.d([],u.G)
$.d1=null
$.cN=null
$.cM=null
$.dw=null
$.dt=null
$.dB=null
$.cf=null
$.cj=null
$.cG=null
$.c9=A.d([],A.a9("h<i<j>?>"))
$.bQ=A.d([],u.f)
$.bR=A.d([],u.Y)
$.bS=A.d([],u.J)
$.d_=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fy","cJ",()=>A.fh("_$dart_dartClosure"))
t($,"fL","cn",()=>A.dz(B.e1))
t($,"fM","dG",()=>A.aF(A.d([0,0,161,161],u.n)))
t($,"fN","dH",()=>A.aF(A.d([0,161,161,322],u.n)))
t($,"fQ","dJ",()=>A.aF(A.d([0,322,161,483],u.n)))
t($,"fS","dL",()=>A.aF(A.d([0,483,161,644],u.n)))
t($,"fO","dI",()=>A.aF(A.d([0,644,161,805],u.n)))
t($,"fR","dK",()=>A.aF(A.d([0,805,161,966],u.n)))
t($,"fz","dE",()=>A.aD(8,A.W(0,0,0,0),!1,A.a9("bs")))
t($,"fA","dF",()=>A.aD(16,A.da(0,0,0,0),!1,A.a9("bt")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.bg,Float32Array:A.be,Int16Array:A.bf,DOMException:A.bB})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.al.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fr
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
