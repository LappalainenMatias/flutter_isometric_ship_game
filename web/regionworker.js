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
a[c]=function(){a[c]=function(){A.fm(b)}
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
if(a[b]!==t)A.fn(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cA(b)
return new t(c,this)}:function(){if(t===null)t=A.cA(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cA(a).prototype
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
a(hunkHelpers,v,w,$)}var A={co:function co(){},
T(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cr(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d2(a,b,c){return A.cr(A.T(A.T(c,a),b))},
dv(a){var t,s
for(t=$.M.length,s=0;s<t;++s)if(a===$.M[s])return!0
return!1},
ee(a,b,c){A.bi(a,0,J.cj(a)-1,b,c)},
bi(a,b,c,d,e){if(c-b<=32)A.ed(a,b,c,d,e)
else A.ec(a,b,c,d,e)},
ed(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bv(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
ec(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.bv(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
a=t}e.i(a2,j,d)
e.i(a2,h,b)
e.i(a2,i,a0)
e.i(a2,g,e.h(a2,a3))
e.i(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.a7(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.h(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
r=n
s=m
break}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.h(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
s=m}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.i(a2,a3,e.h(a2,a1))
e.i(a2,a1,c)
a1=r+1
e.i(a2,a4,e.h(a2,a1))
e.i(a2,a1,a)
A.bi(a2,a3,s-2,a5,a6)
A.bi(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a7(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a7(a5.$2(e.h(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.h(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.i(a2,q,e.h(a2,s))
e.i(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.h(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.h(a2,r),c)<0){e.i(a2,q,e.h(a2,s))
m=s+1
e.i(a2,s,e.h(a2,r))
e.i(a2,r,p)
s=m}else{e.i(a2,q,e.h(a2,r))
e.i(a2,r,p)}r=n
break}}A.bi(a2,s,r,a5,a6)}else A.bi(a2,s,r,a5,a6)},
ay:function ay(a){this.a=a},
bV:function bV(){},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
P:function P(){},
aj:function aj(a){this.a=a},
dz(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fI(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aY(a)
return t},
bf(a){var t,s=$.cZ
if(s==null)s=$.cZ=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bS(a){return A.e7(a)},
e7(a){var t,s,r,q
if(a instanceof A.j)return A.u(A.aW(a),null)
t=J.K(a)
if(t===B.dr||t===B.dz||u.C.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.aW(a),null)},
d_(a){if(a==null||typeof a=="number"||A.cx(a))return J.aY(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.j(0)
if(a instanceof A.X)return a.ad(!0)
return"Instance of '"+A.bS(a)+"'"},
S(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.I(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bR(r,s,t))
return J.dK(a,new A.b6(B.dE,0,t,s,0))},
e8(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.e6(a,b,c)},
e6(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cp(b,u.z),g=h.length,f=a.$R
if(g<f)return A.S(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.K(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.S(a,h,c)
if(g===f)return p.apply(a,h)
return A.S(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.S(a,h,c)
o=f+r.length
if(g>o)return A.S(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cp(h,u.z)
B.b.I(h,n)}return p.apply(a,h)}else{if(g>f)return A.S(a,h,c)
if(h===b)h=A.cp(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.a6)(m),++l){k=r[A.aU(m[l])]
if(B.p===k)return A.S(a,h,c)
B.b.m(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.a6)(m),++l){i=A.aU(m[l])
if(c.V(i)){++j
B.b.m(h,c.h(0,i))}else{k=r[i]
if(B.p===k)return A.S(a,h,c)
B.b.m(h,k)}}if(j!==c.a)return A.S(a,h,c)}return p.apply(a,h)}},
f(a,b){if(a==null)J.cj(a)
throw A.b(A.bu(a,b))},
bu(a,b){var t,s="index"
if(!A.c9(b))return new A.a8(!0,b,s,null)
t=J.cj(a)
if(b<0||b>=t)return A.dX(b,t,a,s)
return A.e9(b,s)},
b(a){return A.du(new Error(),a)},
du(a,b){var t
if(b==null)b=new A.bW()
a.dartException=b
t=A.fp
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fp(){return J.aY(this.dartException)},
as(a){throw A.b(a)},
cE(a,b){throw A.du(b,a)},
a6(a){throw A.b(A.b3(a))},
dw(a){if(a==null)return J.N(a)
if(typeof a=="object")return A.bf(a)
return J.N(a)},
f5(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
dV(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bj().constructor.prototype):Object.create(new A.a9(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cM(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dR(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cM(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dP)}throw A.b("Error in functionType of tearoff")},
dS(a,b,c,d){var t=A.cL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cM(a,b,c,d){var t,s
if(c)return A.dU(a,b,d)
t=b.length
s=A.dS(t,d,a,b)
return s},
dT(a,b,c,d){var t=A.cL,s=A.dQ
switch(b?-1:a){case 0:throw A.b(new A.bU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dU(a,b,c){var t,s
if($.cJ==null)$.cJ=A.cI("interceptor")
if($.cK==null)$.cK=A.cI("receiver")
t=b.length
s=A.dT(t,c,a,b)
return s},
cA(a){return A.dV(a)},
dP(a,b){return A.aS(v.typeUniverse,A.aW(a.a),b)},
cL(a){return a.a},
dQ(a){return a.b},
cI(a){var t,s,r,q=new A.a9("receiver","interceptor"),p=J.cn(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dL("Field name "+a+" not found."))},
fm(a){throw A.b(new A.bZ(a))},
fa(a){return v.getIsolateTag(a)},
fj(a){var t,s,r,q,p,o=A.aU($.dt.$1(a)),n=$.cb[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cf[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eC($.dq.$2(a,o))
if(r!=null){n=$.cb[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cf[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.ch(t)
$.cb[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cf[o]=t
return t}if(q==="-"){p=A.ch(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dx(a,t)
if(q==="*")throw A.b(A.d4(o))
if(v.leafTags[o]===true){p=A.ch(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dx(a,t)},
dx(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ch(a){return J.cD(a,!1,null,!!a.$iaf)},
fl(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.ch(t)
else return J.cD(t,c,null,null)},
ff(){if(!0===$.cC)return
$.cC=!0
A.fg()},
fg(){var t,s,r,q,p,o,n,m
$.cb=Object.create(null)
$.cf=Object.create(null)
A.fe()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dy.$1(p)
if(o!=null){n=A.fl(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fe(){var t,s,r,q,p,o,n=B.z()
n=A.aq(B.A,A.aq(B.B,A.aq(B.o,A.aq(B.o,A.aq(B.C,A.aq(B.D,A.aq(B.E(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dt=new A.cc(q)
$.dq=new A.cd(p)
$.dy=new A.ce(o)},
aq(a,b){return a(b)||b},
f2(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aN:function aN(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.$ti=b},
at:function at(){},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
O:function O(){},
b1:function b1(){},
bl:function bl(){},
bj:function bj(){},
a9:function a9(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
bU:function bU(a){this.a=a},
c5:function c5(){},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bG:function bG(a,b){this.a=a
this.b=b
this.c=null},
cc:function cc(a){this.a=a},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
X:function X(){},
a4:function a4(){},
eG(a){return a},
aB(a){return new Float32Array(A.eG(a))},
c8(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bu(b,a))},
bc:function bc(){},
ah:function ah(){},
aC:function aC(){},
aD:function aD(){},
ba:function ba(){},
bb:function bb(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
aM:function aM(){},
d0(a,b){var t=b.c
return t==null?b.c=A.cu(a,b.y,!0):t},
cq(a,b){var t=b.c
return t==null?b.c=A.aQ(a,"cO",[b.y]):t},
d1(a){var t=a.x
if(t===6||t===7||t===8)return A.d1(a.y)
return t===12||t===13},
eb(a){return a.at},
ar(a){return A.br(v.typeUniverse,a,!1)},
Y(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Y(a,t,c,a0)
if(s===t)return b
return A.df(a,s,!0)
case 7:t=b.y
s=A.Y(a,t,c,a0)
if(s===t)return b
return A.cu(a,s,!0)
case 8:t=b.y
s=A.Y(a,t,c,a0)
if(s===t)return b
return A.de(a,s,!0)
case 9:r=b.z
q=A.aV(a,r,c,a0)
if(q===r)return b
return A.aQ(a,b.y,q)
case 10:p=b.y
o=A.Y(a,p,c,a0)
n=b.z
m=A.aV(a,n,c,a0)
if(o===p&&m===n)return b
return A.cs(a,o,m)
case 12:l=b.y
k=A.Y(a,l,c,a0)
j=b.z
i=A.eZ(a,j,c,a0)
if(k===l&&i===j)return b
return A.dd(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aV(a,h,c,a0)
p=b.y
o=A.Y(a,p,c,a0)
if(g===h&&o===p)return b
return A.ct(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.b0("Attempted to substitute unexpected RTI kind "+d))}},
aV(a,b,c,d){var t,s,r,q,p=b.length,o=A.c7(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Y(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
f_(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c7(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Y(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eZ(a,b,c,d){var t,s=b.a,r=A.aV(a,s,c,d),q=b.b,p=A.aV(a,q,c,d),o=b.c,n=A.f_(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bm()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
dr(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fd(s)
t=a.$S()
return t}return null},
fh(a,b){var t
if(A.d1(b))if(a instanceof A.O){t=A.dr(a)
if(t!=null)return t}return A.aW(a)},
aW(a){if(a instanceof A.j)return A.J(a)
if(Array.isArray(a))return A.ap(a)
return A.cw(J.K(a))},
ap(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
J(a){var t=a.$ti
return t!=null?t:A.cw(a)},
cw(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eN(a,t)},
eN(a,b){var t=a instanceof A.O?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ex(v.typeUniverse,t.name)
b.$ccache=s
return s},
fd(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.br(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fb(a){return A.a5(A.J(a))},
cy(a){var t
if(a instanceof A.X)return A.f4(a.$r,a.ab())
t=a instanceof A.O?A.dr(a):null
if(t!=null)return t
if(u.R.b(a))return J.dJ(a).a
if(Array.isArray(a))return A.ap(a)
return A.aW(a)},
a5(a){var t=a.w
return t==null?a.w=A.dj(a):t},
dj(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c6(a)
t=A.br(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dj(t):s},
f4(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.f(r,0)
t=A.aS(v.typeUniverse,A.cy(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.f(r,s)
t=A.dg(v.typeUniverse,t,A.cy(r[s]))}return A.aS(v.typeUniverse,t,a)},
cF(a){return A.a5(A.br(v.typeUniverse,a,!1))},
eM(a){var t,s,r,q,p,o=this
if(o===u.K)return A.I(o,a,A.eT)
if(!A.L(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.I(o,a,A.eX)
t=o.x
if(t===7)return A.I(o,a,A.eK)
if(t===1)return A.I(o,a,A.dn)
s=t===6?o.y:o
t=s.x
if(t===8)return A.I(o,a,A.eP)
if(s===u.S)r=A.c9
else if(s===u.i||s===u.H)r=A.eS
else if(s===u.N)r=A.eV
else r=s===u.y?A.cx:null
if(r!=null)return A.I(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.fi)){o.r="$i"+q
if(q==="i")return A.I(o,a,A.eR)
return A.I(o,a,A.eW)}}else if(t===11){p=A.f2(s.y,s.z)
return A.I(o,a,p==null?A.dn:p)}return A.I(o,a,A.eI)},
I(a,b,c){a.b=c
return a.b(b)},
eL(a){var t,s=this,r=A.eH
if(!A.L(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eD
else if(s===u.K)r=A.eB
else{t=A.aX(s)
if(t)r=A.eJ}s.a=r
return s.a(a)},
bt(a){var t,s=a.x
if(!A.L(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bt(a.y)))t=s===8&&A.bt(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eI(a){var t=this
if(a==null)return A.bt(t)
return A.k(v.typeUniverse,A.fh(a,t),null,t,null)},
eK(a){if(a==null)return!0
return this.y.b(a)},
eW(a){var t,s=this
if(a==null)return A.bt(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.K(a)[t]},
eR(a){var t,s=this
if(a==null)return A.bt(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.K(a)[t]},
eH(a){var t,s=this
if(a==null){t=A.aX(s)
if(t)return a}else if(s.b(a))return a
A.dk(a,s)},
eJ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dk(a,t)},
dk(a,b){throw A.b(A.en(A.d5(a,A.u(b,null))))},
d5(a,b){return A.ab(a)+": type '"+A.u(A.cy(a),null)+"' is not a subtype of type '"+b+"'"},
en(a){return new A.bq("TypeError: "+a)},
t(a,b){return new A.bq("TypeError: "+A.d5(a,b))},
eP(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cq(v.typeUniverse,s).b(a)},
eT(a){return a!=null},
eB(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
eX(a){return!0},
eD(a){return a},
dn(a){return!1},
cx(a){return!0===a||!1===a},
fv(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
fx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
fw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
cv(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
fz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
fy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
c9(a){return typeof a=="number"&&Math.floor(a)===a},
bs(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
fB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
fA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
eS(a){return typeof a=="number"},
ez(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
fC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
eA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
eV(a){return typeof a=="string"},
aU(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
fD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
eC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
dp(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
eY(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dp(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dl(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.c)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.m(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.f(a4,k)
n=B.d.p(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.u(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.u(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.u(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.u(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.u(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
u(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.u(a.y,b)
return t}if(m===7){s=a.y
t=A.u(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.u(a.y,b)+">"
if(m===9){q=A.f0(a.y)
p=a.z
return p.length>0?q+("<"+A.dp(p,b)+">"):q}if(m===11)return A.eY(a,b)
if(m===12)return A.dl(a,b,null)
if(m===13)return A.dl(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.f(b,o)
return b[o]}return"?"},
f0(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ey(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ex(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.br(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aR(a,5,"#")
r=A.c7(t)
for(q=0;q<t;++q)r[q]=s
p=A.aQ(a,b,r)
o[b]=p
return p}else return n},
ew(a,b){return A.dh(a.tR,b)},
ev(a,b){return A.dh(a.eT,b)},
br(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.db(A.d9(a,null,b,c))
s.set(b,t)
return t},
aS(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.db(A.d9(a,b,c,!0))
r.set(c,s)
return s},
dg(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cs(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
H(a,b){b.a=A.eL
b.b=A.eM
return b},
aR(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.A(null,null)
t.x=b
t.at=c
s=A.H(a,t)
a.eC.set(c,s)
return s},
df(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.es(a,b,s,c)
a.eC.set(s,t)
return t},
es(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.A(null,null)
r.x=6
r.y=b
r.at=c
return A.H(a,r)},
cu(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.er(a,b,s,c)
a.eC.set(s,t)
return t},
er(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.L(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aX(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aX(r.y))return r
else return A.d0(a,b)}}q=new A.A(null,null)
q.x=7
q.y=b
q.at=c
return A.H(a,q)},
de(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ep(a,b,s,c)
a.eC.set(s,t)
return t},
ep(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aQ(a,"cO",[b])
else if(b===u.P||b===u.T)return u.D}r=new A.A(null,null)
r.x=8
r.y=b
r.at=c
return A.H(a,r)},
et(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.A(null,null)
t.x=14
t.y=b
t.at=r
s=A.H(a,t)
a.eC.set(r,s)
return s},
aP(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eo(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aQ(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aP(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.A(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
cs(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aP(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.A(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.H(a,p)
a.eC.set(r,o)
return o},
eu(a,b,c){var t,s,r="+"+(b+"("+A.aP(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.A(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.H(a,t)
a.eC.set(r,s)
return s},
dd(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aP(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aP(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eo(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.A(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.H(a,q)
a.eC.set(s,p)
return p},
ct(a,b,c,d){var t,s=b.at+("<"+A.aP(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eq(a,b,c,s,d)
a.eC.set(s,t)
return t},
eq(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c7(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Y(a,b,s,0)
n=A.aV(a,c,s,0)
return A.ct(a,o,n,c!==n)}}m=new A.A(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.H(a,m)},
d9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
db(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ei(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.da(a,s,m,l,!1)
else if(r===46)s=A.da(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.W(a.u,a.e,l.pop()))
break
case 94:l.push(A.et(a.u,l.pop()))
break
case 35:l.push(A.aR(a.u,5,"#"))
break
case 64:l.push(A.aR(a.u,2,"@"))
break
case 126:l.push(A.aR(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.ek(a,l)
break
case 38:A.ej(a,l)
break
case 42:q=a.u
l.push(A.df(q,A.W(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cu(q,A.W(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.de(q,A.W(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.eh(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dc(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.em(a.u,a.e,p)
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
return A.W(a.u,a.e,n)},
ei(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
da(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.ey(t,p.y)[q]
if(o==null)A.as('No "'+q+'" in "'+A.eb(p)+'"')
d.push(A.aS(t,p,o))}else d.push(q)
return n},
ek(a,b){var t,s=a.u,r=A.d8(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aQ(s,q,r))
else{t=A.W(s,a.e,q)
switch(t.x){case 12:b.push(A.ct(s,t,r,a.n))
break
default:b.push(A.cs(s,t,r))
break}}},
eh(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.d8(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.W(n,a.e,m)
p=new A.bm()
p.a=r
p.b=t
p.c=s
b.push(A.dd(n,q,p))
return
case-4:b.push(A.eu(n,b.pop(),r))
return
default:throw A.b(A.b0("Unexpected state under `()`: "+A.m(m)))}},
ej(a,b){var t=b.pop()
if(0===t){b.push(A.aR(a.u,1,"0&"))
return}if(1===t){b.push(A.aR(a.u,4,"1&"))
return}throw A.b(A.b0("Unexpected extended operation "+A.m(t)))},
d8(a,b){var t=b.splice(a.p)
A.dc(a.u,a.e,t)
a.p=b.pop()
return t},
W(a,b,c){if(typeof c=="string")return A.aQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.el(a,b,c)}else return c},
dc(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.W(a,b,c[t])},
em(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.W(a,b,c[t])},
el(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.b0("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.b0("Bad index "+c+" for "+b.j(0)))},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.L(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.L(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.k(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.k(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.k(a,b.y,c,d,e)
if(s===6)return A.k(a,b.y,c,d,e)
return s!==7}if(s===6)return A.k(a,b.y,c,d,e)
if(q===6){t=A.d0(a,d)
return A.k(a,b,c,t,e)}if(s===8){if(!A.k(a,b.y,c,d,e))return!1
return A.k(a,A.cq(a,b),c,d,e)}if(s===7){t=A.k(a,u.P,c,d,e)
return t&&A.k(a,b.y,c,d,e)}if(q===8){if(A.k(a,b,c,d.y,e))return!0
return A.k(a,b,c,A.cq(a,d),e)}if(q===7){t=A.k(a,b,c,u.P,e)
return t||A.k(a,b,c,d.y,e)}if(r)return!1
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
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.dm(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dm(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eQ(a,b,c,d,e)}if(p&&q===11)return A.eU(a,b,c,d,e)
return!1},
dm(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.k(a2,a3.y,a4,a5.y,a6))return!1
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
if(!A.k(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.k(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.k(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.k(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eQ(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aS(a,b,s[p])
return A.di(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.di(a,o,null,c,n,e)},
di(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.k(a,s,d,r,f))return!1}return!0},
eU(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
aX(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.L(a))if(s!==7)if(!(s===6&&A.aX(a.y)))t=s===8&&A.aX(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fi(a){var t
if(!A.L(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
L(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dh(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c7(a){return a>0?new Array(a):v.typeUniverse.sEA},
A:function A(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bm:function bm(){this.c=this.b=this.a=null},
c6:function c6(a){this.a=a},
c0:function c0(){},
bq:function bq(a){this.a=a},
e1(a,b,c){return b.l("@<0>").a4(c).l("cU<1,2>").a(A.f5(a,new A.a_(b.l("@<0>").a4(c).l("a_<1,2>"))))},
dW(a){return new A.aI(a.l("aI<0>"))},
d6(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bH(a){var t,s={}
if(A.dv(a))return"{...}"
t=new A.aG("")
try{B.b.m($.M,a)
t.a+="{"
s.a=!0
a.E(0,new A.bI(s,t))
t.a+="}"}finally{if(0>=$.M.length)return A.f($.M,-1)
$.M.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aI:function aI(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
D:function D(){},
aA:function aA(){},
bI:function bI(a,b){this.a=a
this.b=b},
aT:function aT(){},
ag:function ag(){},
aH:function aH(){},
aF:function aF(){},
aO:function aO(){},
ao:function ao(){},
az(a,b,c){var t,s,r
if(a>4294967295)A.as(A.bh(a,0,4294967295,"length",null))
t=J.cS(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
cV(a,b,c){var t,s,r=A.d([],c.l("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.a6)(a),++s)B.b.m(r,c.a(a[s]))
if(b)return r
return J.cn(r,c)},
cp(a,b){var t=A.e2(a,b)
return t},
e2(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.l("h<0>"))
t=A.d([],b.l("h<0>"))
for(s=J.cH(a);s.F();)B.b.m(t,s.gD())
return t},
ef(a,b,c){var t=J.cH(b)
if(!t.F())return a
if(c.length===0){do a+=A.m(t.gD())
while(t.F())}else{a+=A.m(t.gD())
for(;t.F();)a=a+c+A.m(t.gD())}return a},
cW(a,b){return new A.bJ(a,b.gaF(),b.gaI(),b.gaG())},
ab(a){if(typeof a=="number"||A.cx(a)||a==null)return J.aY(a)
if(typeof a=="string")return JSON.stringify(a)
return A.d_(a)},
b0(a){return new A.bw(a)},
dL(a){return new A.a8(!1,null,null,a)},
dM(a,b,c){return new A.a8(!0,a,b,c)},
e9(a,b){return new A.bg(null,null,!0,a,b,"Value not in range")},
bh(a,b,c,d,e){return new A.bg(b,c,!0,a,d,"Invalid value")},
ea(a,b,c){if(0>a||a>c)throw A.b(A.bh(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bh(b,a,c,"end",null))
return b}return c},
dX(a,b,c,d){return new A.bC(b,!0,a,d,"Index out of range")},
U(a){return new A.bY(a)},
d4(a){return new A.bX(a)},
b3(a){return new A.bx(a)},
cN(a,b,c){return new A.bB(a,b,c)},
cm(a,b,c){var t,s
if(A.dv(a))return b+"..."+c
t=new A.aG(b)
B.b.m($.M,a)
try{s=t
s.a=A.ef(s.a,a,", ")}finally{if(0>=$.M.length)return A.f($.M,-1)
$.M.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
e4(a,b,c,d){var t
if(B.k===c)return A.d2(B.a.gk(a),J.N(b),$.ci())
if(B.k===d){t=B.a.gk(a)
b=J.N(b)
c=J.N(c)
return A.cr(A.T(A.T(A.T($.ci(),t),b),c))}t=B.a.gk(a)
b=J.N(b)
c=J.N(c)
d=J.N(d)
d=A.cr(A.T(A.T(A.T(A.T($.ci(),t),b),c),d))
return d},
bK:function bK(a,b){this.a=a
this.b=b},
c_:function c_(){},
bz:function bz(){},
bw:function bw(a){this.a=a},
bW:function bW(){},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bC:function bC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a){this.a=a},
bX:function bX(a){this.a=a},
bx:function bx(a){this.a=a},
bQ:function bQ(){},
c1:function c1(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(){},
j:function j(){},
aG:function aG(a){this.a=a},
by:function by(){},
c2:function c2(){},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(){},
bE(a,b){return new A.z(a*2-2*b,a+b)},
z:function z(a,b){this.a=a
this.b=b},
aa:function aa(a,b){this.a=a
this.b=b},
y:function y(){},
aZ:function aZ(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=!0},
G:function G(a){this.b=a},
E(a,b,c){var t=new A.a1(a,b,c)
t.f=u.u.a(a.c.$1(t))
t.e!==$&&A.fo()
t.e=new A.b2()
return t},
a1:function a1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=$
_.r=!0},
bd:function bd(a,b){this.c=a
this.b=b},
b9:function b9(){},
bk:function bk(){},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a){this.b=a},
bL:function bL(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
fk(){self.jsregionworker=A.f1(new A.cg(),u.e)},
cg:function cg(){},
bT:function bT(a){this.a=a
this.b=$},
cP(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ak(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cN("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.f3(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.u(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cN("Not radix digit",a,t))}if(s)return A.ad(0,0,0,q,p,o)
return new A.v(q&4194303,p&4194303,o&1048575)},
cl(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.ad(0,0,0,q,p,o):new A.v(q,p,o)},
bD(a){if(a instanceof A.v)return a
else if(A.c9(a))return A.cl(a)
throw A.b(A.dM(a,"other","not an int, Int32 or Int64"))},
e_(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.f(B.t,a)
r=B.t[a]
q=""
p=""
o=""
while(!0){if(!!(t===0&&s===0))break
n=B.a.C(t,r)
s+=t-n*r<<10>>>0
m=B.a.C(s,r)
d+=s-m*r<<10>>>0
l=B.a.C(d,r)
c+=d-l*r<<10>>>0
k=B.a.C(c,r)
b+=c-k*r<<10>>>0
j=B.a.C(b,r)
i=B.d.al(B.a.aj(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.aj(h,a))+q+p+o},
ad(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.u(t,22)&1)
return new A.v(t&4194303,s&4194303,c-f-(B.a.u(s,22)&1)&1048575)},
dY(a,b,c){var t,s,r,q,p=A.bD(b)
if(p.gag())throw A.b(A.U("Division by zero"))
if(a.gag())return B.q
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.ad(0,0,0,a.a,a.b,t)
if(q)p=A.ad(0,0,0,p.a,p.b,r)
return A.dZ(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dZ(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.a.C(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.a.C(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.a.C(q,a4)
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
c=a1-B.c.n(f-e*4194304)-(B.a.u(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.n(k*a4+j*a5+i*a6+e)-(B.a.u(c,22)&1)&1048575
while(!0){if(m<524288)if(m<=a6)if(m===a6)if(n<=a5)b=n===a5&&o>=a4
else b=!0
else b=!1
else b=!0
else b=!0
if(!b)break
a=(m&524288)===0?1:-1
q=o-a*a4
s=n-a*(a5+(B.a.u(q,22)&1))
o=q&4194303
n=s&4194303
m=m-a*(a6+(B.a.u(s,22)&1))&1048575
q=p+a
s=r+a*(B.a.u(q,22)&1)
p=q&4194303
r=s&4194303
t=t+a*(B.a.u(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.ad(0,0,0,p,r,t)
return new A.v(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.v(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.q
else return A.ad(a4,a5,a6,o,n,m)
else return A.ad(0,0,0,o,n,m)},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(a,b){this.a=a
this.b=b},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F(a){var t=new A.bM(new Int16Array(2048),A.az(2048,B.H,u.q),A.az(2048,B.a6,u.h),A.az(2048,B.aV,u.U))
t.an(a)
return t},
e5(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.V(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.V(l,k,j,1)
A.V(p,r,q,0)
A.V(s,o,q,0)
A.V(s,r,n,0)
A.V(s+(p^1),k,j,1)
A.V(l,r+(o^1),j,1)
A.V(l,k,q+(n^1),1)
B.b.i($.dA(),t,m)}for(t=0;t<16;++t)B.b.i($.dB(),t,A.d7(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.d([],u.f)
for(i=0;i<24;++i){h=B.dA[i]
l.push(new A.e(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.N(t,24)
if(!(k<l.length))return A.f(l,k)
B.b.m($.bN,l[k])}l=A.d([],u.Y)
for(i=0;i<48;++i){h=B.dC[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.N(t,48)
if(!(k<l.length))return A.f(l,k)
B.b.m($.bO,l[k])}l=A.d([],u.J)
for(i=0;i<160;++i){h=B.dB[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.N(t,160)
if(!(k<l.length))return A.f(l,k)
B.b.m($.bP,l[k])}},
V(a,b,c,d){return new A.bo()},
d7(a,b,c,d){var t=new A.bp(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(){},
bp:function bp(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
fn(a){A.cE(new A.ay("Field '"+a+"' has been assigned during initialization."),new Error())},
C(){A.cE(new A.ay("Field '' has not been initialized."),new Error())},
fo(){A.cE(new A.ay("Field '' has already been initialized."),new Error())},
eF(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eE,a)
t[$.cG()]=a
a.$dart_jsFunction=t
return t},
eE(a,b){u.j.a(b)
u.Z.a(a)
return A.e8(a,b,null)},
f1(a,b){if(typeof a=="function")return a
else return b.a(A.eF(a))},
d3(a,b,c,d){var t,s,r,q,p,o
for(t=0;t<12;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.G(a)
r=s.a
p=c.a
o=c.b
o=new A.z(p*2-2*o,p+o)
p=new A.al(r,o,q,1)
p.f=new A.b2()
r=A.ca(r,o,q,!0,1)
p.d=r
return p}}throw A.b(new A.c1("No tile type found for elevation: "+A.m(a)+", moisture: "+A.m(b)+". Fix the rules!"))},
e3(a,b,c,d){var t,s,r,q=d.h(0,a)
if(q!=null)for(t=0;t<1;++t){s=q[t]
if(B.G.aH()<s.b){r=c+1
A.ds(b,r)
return A.ds(b,r)}}return A.d([],u.r)},
dN(a){return A.ca(B.l,a.b,a.c,a.r,1)},
dO(a){return A.ca(B.x,a.b,a.c,a.r,1)},
eg(a){return A.ca(a.a,a.b,a.c,a.r,a.e)},
ca(a,b,c,d,e){var t=b.p(0,A.bE(c,c)).p(0,A.bE(e,e)).p(0,A.bE(0,e)),s=t.p(0,A.bE(e,0)),r=new Float32Array(4)
r[0]=-0.025*e
r[1]=0
r[2]=t.a
r[3]=s.b
return new A.aa(r,A.fc(a))},
ds(a,b){var t=b+3,s=b+4,r=b+5
return A.d([A.E(B.h,a,b+1),A.E(B.h,a,b+2),A.E(B.h,a,t),A.E(B.h,a,s),A.E(B.h,a,r),A.E(B.e,a.p(0,B.du),t),A.E(B.e,a.p(0,B.dv),t),A.E(B.e,a.p(0,B.dt),s),A.E(B.e,a.p(0,B.ds),s),A.E(B.e,a.p(0,B.dw),r),A.E(B.e,a.p(0,B.dx),r)],u.r)},
fq(a){var t,s,r,q,p,o,n,m,l,k,j,i=A.dW(u.N)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.a6)(a),++s){q=a[s]
p=q.M().K()
o=B.c.n(q.L())
i.m(0,""+B.c.n(p.a)+","+B.c.n(p.b)+","+o)}for(s=0;s<a.length;a.length===r||(0,A.a6)(a),++s){q=a[s]
p=q.M().K()
n=B.c.n(p.a)
m=B.c.n(p.b)
l=B.c.n(q.L())
t=""+n+","
k=""+l
j=""+m
q.a1(!(i.U(0,""+(n-1)+","+j+","+k)&&i.U(0,t+j+","+(l+1))&&i.U(0,t+(m-1)+","+k)))}},
fc(a){switch(a){case B.x:return $.dE()
case B.j:return $.dD()
case B.f:return $.dC()
case B.i:return $.dF()
case B.l:return $.dH()
case B.y:return $.dG()}},
f3(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cD(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cC==null){A.ff()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.d4("Return interceptor for "+A.m(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c3
if(p==null)p=$.c3=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fj(a)
if(q!=null)return q
if(typeof a=="function")return B.dy
t=Object.getPrototypeOf(a)
if(t==null)return B.w
if(t===Object.prototype)return B.w
if(typeof r=="function"){p=$.c3
if(p==null)p=$.c3=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
cR(a,b){if(a<0||a>4294967295)throw A.b(A.bh(a,0,4294967295,"length",null))
return J.cS(new Array(a),b)},
cS(a,b){return J.cn(A.d(a,b.l("h<0>")),b)},
cn(a,b){a.fixed$length=Array
return a},
cT(a){a.fixed$length=Array
a.immutable$list=Array
return a},
e0(a,b){var t=u.s
return J.dI(t.a(a),t.a(b))},
K(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aw.prototype
return J.b7.prototype}if(typeof a=="string")return J.Z.prototype
if(a==null)return J.ax.prototype
if(typeof a=="boolean")return J.b5.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cB(a)},
bv(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cB(a)},
f8(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cB(a)},
f9(a){if(typeof a=="number")return J.ae.prototype
if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.am.prototype
return a},
a7(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)},
dI(a,b){return J.f9(a).J(a,b)},
N(a){return J.K(a).gk(a)},
cH(a){return J.f8(a).gY(a)},
cj(a){return J.bv(a).gq(a)},
dJ(a){return J.K(a).gB(a)},
dK(a,b){return J.K(a).ah(a,b)},
aY(a){return J.K(a).j(a)},
b4:function b4(){},
b5:function b5(){},
ax:function ax(){},
o:function o(){},
a0:function a0(){},
be:function be(){},
am:function am(){},
Q:function Q(){},
h:function h(a){this.$ti=a},
bF:function bF(a){this.$ti=a},
b_:function b_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ae:function ae(){},
aw:function aw(){},
b7:function b7(){},
Z:function Z(){}},B={}
var w=[A,J,B]
var $={}
A.co.prototype={}
J.b4.prototype={
v(a,b){return a===b},
gk(a){return A.bf(a)},
j(a){return"Instance of '"+A.bS(a)+"'"},
ah(a,b){throw A.b(A.cW(a,u.o.a(b)))},
gB(a){return A.a5(A.cw(this))}}
J.b5.prototype={
j(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.a5(u.y)},
$iw:1,
$icz:1}
J.ax.prototype={
v(a,b){return null==b},
j(a){return"null"},
gk(a){return 0},
$iw:1}
J.o.prototype={}
J.a0.prototype={
gk(a){return 0},
j(a){return String(a)}}
J.be.prototype={}
J.am.prototype={}
J.Q.prototype={
j(a){var t=a[$.cG()]
if(t==null)return this.am(a)
return"JavaScript function for "+J.aY(t)},
$iac:1}
J.h.prototype={
m(a,b){A.ap(a).c.a(b)
if(!!a.fixed$length)A.as(A.U("add"))
a.push(b)},
I(a,b){A.ap(a).l("q<1>").a(b)
if(!!a.fixed$length)A.as(A.U("addAll"))
this.ap(a,b)
return},
ap(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.b3(a))
for(s=0;s<t;++s)a.push(b[s])},
j(a){return A.cm(a,"[","]")},
gY(a){return new J.b_(a,a.length,A.ap(a).l("b_<1>"))},
gk(a){return A.bf(a)},
gq(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.bu(a,b))
return a[b]},
i(a,b,c){A.ap(a).c.a(c)
if(!!a.immutable$list)A.as(A.U("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.bu(a,b))
a[b]=c},
$iq:1,
$ii:1}
J.bF.prototype={}
J.b_.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.a6(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa7(null)
return!1}s.sa7(r[t]);++s.c
return!0},
sa7(a){this.d=this.$ti.l("1?").a(a)}}
J.ae.prototype={
J(a,b){var t
A.ez(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gX(b)
if(this.gX(a)===t)return 0
if(this.gX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gX(a){return a===0?1/a<0:a<0},
n(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.U(""+a+".toInt()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.U(""+a+".floor()"))},
aJ(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aj(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bh(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.f(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.as(A.U("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.f(q,1)
t=q[1]
if(3>=s)return A.f(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.a0("0",p)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
N(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
C(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ac(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.ac(a,b)},
ac(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.U("Result of truncating division is "+A.m(t)+": "+A.m(a)+" ~/ "+b))},
u(a,b){var t
if(a>0)t=this.aC(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aC(a,b){return b>31?0:a>>>b},
gB(a){return A.a5(u.H)},
$ip:1,
$il:1,
$ix:1}
J.aw.prototype={
gB(a){return A.a5(u.S)},
$iw:1,
$in:1}
J.b7.prototype={
gB(a){return A.a5(u.i)},
$iw:1}
J.Z.prototype={
p(a,b){return a+b},
ak(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
O(a,b,c){return a.substring(b,A.ea(b,c,a.length))},
al(a,b){return this.O(a,b,null)},
a0(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.F)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
J(a,b){var t
A.aU(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
j(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a5(u.N)},
gq(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.bu(a,b))
return a[b]},
$iw:1,
$ip:1,
$icY:1,
$iB:1}
A.ay.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.bV.prototype={}
A.b8.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.bv(r),p=q.gq(r)
if(s.b!==p)throw A.b(A.b3(r))
t=s.c
if(t>=p){s.sa2(null)
return!1}s.sa2(q.h(r,t));++s.c
return!0},
sa2(a){this.d=this.$ti.l("1?").a(a)}}
A.P.prototype={}
A.aj.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.aj&&this.a===b.a},
$iak:1}
A.aN.prototype={$r:"+(1,2)",$s:1}
A.an.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.au.prototype={}
A.at.prototype={
j(a){return A.bH(this)},
$iR:1}
A.av.prototype={
gq(a){return this.b.length},
V(a){return!1},
h(a,b){if(!this.V(b))return null
return this.b[this.a[b]]},
E(a,b){var t,s,r,q,p=this
p.$ti.l("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.b6.prototype={
gaF(){var t=this.a
return t},
gaI(){var t,s,r,q,p=this
if(p.c===1)return B.u
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.u
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.f(t,q)
r.push(t[q])}return J.cT(r)},
gaG(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.v
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.v
p=new A.a_(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.f(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.f(r,m)
p.i(0,new A.aj(n),r[m])}return new A.au(p,u.a)},
$icQ:1}
A.bR.prototype={
$2(a,b){var t
A.aU(a)
t=this.a
t.b=t.b+"$"+a
B.b.m(this.b,a)
B.b.m(this.c,b);++t.a},
$S:1}
A.O.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dz(s==null?"unknown":s)+"'"},
$iac:1,
gaK(){return this},
$C:"$1",
$R:1,
$D:null}
A.b1.prototype={$C:"$2",$R:2}
A.bl.prototype={}
A.bj.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dz(t)+"'"}}
A.a9.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dw(this.a)^A.bf(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bS(this.a)+"'")}}
A.bZ.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bU.prototype={
j(a){return"RuntimeError: "+this.a}}
A.c5.prototype={}
A.a_.prototype={
gq(a){return this.a},
V(a){var t=this.b
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
return r}else return this.aE(b)},
aE(a){var t,s,r=this.d
if(r==null)return null
t=r[this.ae(a)]
s=this.af(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r,q,p,o,n=this,m=A.J(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.a3(t==null?n.b=n.S():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a3(s==null?n.c=n.S():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.S()
q=n.ae(b)
p=r[q]
if(p==null)r[q]=[n.T(b,c)]
else{o=n.af(p,b)
if(o>=0)p[o].b=c
else p.push(n.T(b,c))}}},
E(a,b){var t,s,r=this
A.J(r).l("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.b3(r))
t=t.c}},
a3(a,b,c){var t,s=A.J(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.T(b,c)
else t.b=c},
T(a,b){var t=this,s=A.J(t),r=new A.bG(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ae(a){return J.N(a)&1073741823},
af(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a7(a[s].a,b))return s
return-1},
j(a){return A.bH(this)},
S(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icU:1}
A.bG.prototype={}
A.cc.prototype={
$1(a){return this.a(a)},
$S:2}
A.cd.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.ce.prototype={
$1(a){return this.a(A.aU(a))},
$S:4}
A.X.prototype={
j(a){return this.ad(!1)},
ad(a){var t,s,r,q,p,o=this.aB(),n=this.ab(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.f(n,r)
p=n[r]
m=a?m+A.d_(p):m+A.m(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aB(){var t,s=this.$s
for(;$.c4.length<=s;)B.b.m($.c4,null)
t=$.c4[s]
if(t==null){t=this.av()
B.b.i($.c4,s,t)}return t},
av(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.d(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.i(l,r,s[t])}}return J.cT(A.cV(l,!1,u.K))}}
A.a4.prototype={
ab(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.a4&&this.$s===b.$s&&J.a7(this.a,b.a)&&J.a7(this.b,b.b)},
gk(a){return A.e4(this.$s,this.a,this.b,B.k)}}
A.bc.prototype={}
A.ah.prototype={
gq(a){return a.length},
$iaf:1}
A.aC.prototype={
h(a,b){A.c8(b,a,a.length)
return a[b]},
i(a,b,c){A.cv(c)
A.c8(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.aD.prototype={
i(a,b,c){A.bs(c)
A.c8(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.ba.prototype={
gB(a){return B.dF},
$iw:1,
$ibA:1}
A.bb.prototype={
gB(a){return B.dG},
h(a,b){A.c8(b,a,a.length)
return a[b]},
$iw:1,
$ick:1}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.aM.prototype={}
A.A.prototype={
l(a){return A.aS(v.typeUniverse,this,a)},
a4(a){return A.dg(v.typeUniverse,this,a)}}
A.bm.prototype={}
A.c6.prototype={
j(a){return A.u(this.a,null)}}
A.c0.prototype={
j(a){return this.a}}
A.bq.prototype={}
A.aI.prototype={
gY(a){return new A.bn(this,this.au(),A.J(this).l("bn<1>"))},
gq(a){return this.a},
U(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.aw(b)
return s}},
aw(a){var t=this.d
if(t==null)return!1
return this.a9(t[this.a6(a)],a)>=0},
m(a,b){var t,s,r=this
A.J(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.aq(t==null?r.b=A.d6():t,b)}else{s=r.ao(b)
return s}},
ao(a){var t,s,r,q=this
A.J(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.d6()
s=q.a6(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a9(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
au(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.az(j.a,null,u.z)
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
aq(a,b){A.J(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a6(a){return B.d.gk(a)&1073741823},
a9(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a7(a[s],b))return s
return-1}}
A.bn.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.b3(q))
else if(r>=s.length){t.sa5(null)
return!1}else{t.sa5(s[r])
t.c=r+1
return!0}},
sa5(a){this.d=this.$ti.l("1?").a(a)}}
A.D.prototype={
gY(a){return new A.b8(a,this.gq(a),A.aW(a).l("b8<D.E>"))},
j(a){return A.cm(a,"[","]")}}
A.aA.prototype={
gq(a){return this.a},
j(a){return A.bH(this)},
$iR:1}
A.bI.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.m(a)
s.a=t+": "
s.a+=A.m(b)},
$S:5}
A.aT.prototype={}
A.ag.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.l("~(1,2)").a(b))},
gq(a){return this.a.a},
j(a){return A.bH(this.a)},
$iR:1}
A.aH.prototype={}
A.aF.prototype={
j(a){return A.cm(this,"{","}")},
$iq:1}
A.aO.prototype={}
A.ao.prototype={}
A.bK.prototype={
$2(a,b){var t,s,r
u.w.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.ab(b)
s.a=", "},
$S:6}
A.c_.prototype={
j(a){return this.a8()}}
A.bz.prototype={}
A.bw.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ab(t)
return"Assertion failed"}}
A.bW.prototype={}
A.a8.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gR()+r+p
if(!t.a)return o
return o+t.gP()+": "+A.ab(t.gW())},
gW(){return this.b}}
A.bg.prototype={
gW(){return A.eA(this.b)},
gR(){return"RangeError"},
gP(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.bC.prototype={
gW(){return A.bs(this.b)},
gR(){return"RangeError"},
gP(){if(A.bs(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bJ.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aG("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.ab(o)
k.a=", "}l.d.E(0,new A.bK(k,j))
n=A.ab(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bY.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bX.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bx.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ab(t)+"."}}
A.bQ.prototype={
j(a){return"Out of Memory"}}
A.c1.prototype={
j(a){return"Exception: "+this.a}}
A.bB.prototype={
j(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.O(g,0,75)+"..."
return i+"\n"+g}for(t=g.length,s=1,r=0,q=!1,p=0;p<h;++p){if(!(p<t))return A.f(g,p)
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
k=""}return i+l+B.d.O(g,m,n)+k+"\n"+B.d.a0(" ",h-m+l.length)+"^\n"}}
A.aE.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
j(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.bf(this)},
j(a){return"Instance of '"+A.bS(this)+"'"},
ah(a,b){throw A.b(A.cW(this,u.o.a(b)))},
gB(a){return A.fb(this)},
toString(){return this.j(this)}}
A.aG.prototype={
gq(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.by.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.c2.prototype={
aH(){return Math.random()}}
A.a2.prototype={
j(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
v(a,b){if(b==null)return!1
return b instanceof A.a2&&this.a===b.a&&this.b===b.b},
gk(a){return A.d2(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.b2.prototype={}
A.z.prototype={
p(a,b){return new A.z(this.a+b.a,this.b+b.b)},
K(){var t=this.b,s=t/2-this.a/4
return new A.a2(t-s,s,u.O)},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.z&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
j(a){return""+B.c.n(this.a)+", "+B.c.n(this.b)}}
A.aa.prototype={}
A.y.prototype={
J(a,b){var t,s,r,q
u.k.a(b)
t=this.Z()
s=b.Z()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$ip:1}
A.aZ.prototype={}
A.al.prototype={
a_(){var t=this,s=t.b,r=t.d
r===$&&A.C()
return["Tile",t.a.b,s.a,s.b,t.c,t.e,A.d([r.a,r.b],u.V),t.r]},
Z(){var t=this.b.K()
return new A.an(-1*(t.a+t.b+this.e),this.c)},
M(){return this.b},
a1(a){var t=this
if(t.r===a)return
t.r=a
t.d=A.eg(t)},
L(){return this.c}}
A.G.prototype={
a8(){return"TileType."+this.b}}
A.a1.prototype={
Z(){var t=this.b.K()
return new A.an(-1*(t.a+t.b+1),this.c)},
M(){return this.b},
a1(a){this.r=a},
L(){return this.c},
a_(){var t=this,s=t.b,r=t.f
r===$&&A.C()
return["NaturalItem",t.a.b,s.a,s.b,t.c,A.d([r.a,r.b],u.V),t.r]}}
A.bd.prototype={
a8(){return"NaturalItemPart."+this.b}}
A.b9.prototype={}
A.bk.prototype={
ai(){var t=null
return A.d([new A.r(B.i,0,-0.2),new A.r(B.f,0,0),new A.r(B.y,0,t),new A.r(B.i,10,-0.2),new A.r(B.j,10,0.3),new A.r(B.f,10,t),new A.r(B.i,15,-0.2),new A.r(B.f,15,0.4),new A.r(B.j,15,t),new A.r(B.i,20,0.5),new A.r(B.f,20,0.6),new A.r(B.l,t,t)],u.d)}}
A.r.prototype={}
A.ai.prototype={}
A.bL.prototype={
aD(b3,b4,b5,b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.aa(b3,b4),b2=b0.aa(b3,b4)
for(t=b1.length,s=b2.length,r=0;r<b3;++r)for(q=b5+r,p=q*0.0004,o=q*0.0016,n=q*0.0064,m=q*0.0256,l=q*0.0000032000000000000003,k=q*0.000012800000000000001,j=q*0.000051200000000000004,i=q*0.00020480000000000002,h=0;h<b3;++h){g=b6+h
f=b0.a
f===$&&A.C()
e=g*0.0004
d=0.366025403784439*(p+e)
c=p+d
b=e+d
a=f.t(c,b)
f=b0.b
f===$&&A.C()
e=g*0.0016
d=0.366025403784439*(o+e)
a0=o+d
a1=e+d
f=f.t(a0,a1)
e=b0.c
e===$&&A.C()
a2=g*0.0064
d=0.366025403784439*(n+a2)
a3=n+d
a4=a2+d
e=e.t(a3,a4)
a2=b0.d
a2===$&&A.C()
a5=g*0.0256
d=0.366025403784439*(m+a5)
a5=a2.t(m+d,a5+d)
a2=b0.e
a2===$&&A.C()
a6=g*0.0000032000000000000003
d=0.366025403784439*(l+a6)
a6=a2.t(l+d,a6+d)
a2=b0.f
a2===$&&A.C()
a7=g*0.000012800000000000001
d=0.366025403784439*(k+a7)
a7=a2.t(k+d,a7+d)
a2=b0.r
a2===$&&A.C()
a8=g*0.000051200000000000004
d=0.366025403784439*(j+a8)
a8=a2.t(j+d,a8+d)
a2=b0.w
a2===$&&A.C()
a9=g*0.00020480000000000002
d=0.366025403784439*(i+a9)
a9=a2.t(i+d,a9+d)
if(!(r<t))return A.f(b1,r)
B.b.i(b1[r],h,B.c.aJ(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+1.5)/4-0.4)*120))
a9=b0.x
a9===$&&A.C()
a9=a9.t(c,b)
a8=b0.y
a8===$&&A.C()
a8=a8.t(a0,a1)
a7=b0.z
a7===$&&A.C()
a7=a7.t(a3,a4)
if(!(r<s))return A.f(b2,r)
B.b.i(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aN(b1,b2)},
aa(a,b){var t,s,r,q,p=J.cR(a,u.v)
for(t=u.i,s=0;s<a;++s){r=J.cR(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.cg.prototype={
$1(a){var t,s,r,q,p,o,n,m=new A.bk(),l=new A.bT(m),k=J.bv(a),j=A.bs(k.h(a,0)),i=A.bs(k.h(a,1)),h=A.cv(k.h(a,2)),g=A.cv(k.h(a,3))
k=B.c.n(h)
t=B.c.n(g)
s=new A.bL(m)
s.a=A.F(2)
s.b=A.F(3)
s.c=A.F(4)
s.d=A.F(5)
s.e=A.F(6)
s.f=A.F(7)
s.r=A.F(8)
s.w=A.F(9)
s.x=A.F(10)
s.y=A.F(11)
s.z=A.F(12)
l.b=s
r=s.aD(j,i,k,t)
q=l.aA(k,t,r.a,r.b)
p=A.cV(q,!0,u.k)
B.b.I(p,l.az(q))
A.fq(p)
if(!!p.immutable$list)A.as(A.U("sort"))
A.ee(p,J.eO(),A.ap(p).c)
o=A.d([],u.l)
for(m=p.length,n=0;n<p.length;p.length===m||(0,A.a6)(p),++n)B.b.m(o,p[n].a_())
return o},
$S:7}
A.bT.prototype={
aA(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.d([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.f(d,o)
m=d[o]
for(l=m.length,k=a+o,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.f(n,i)
h=n[i]
if(h<=0){g=B.c.G(h)
if(!(i<l))return A.f(m,i)
B.b.m(t,A.d3(g,m[i],new A.a2(k,b+i,r),q.ai()))}else for(f=b+i;h>0;){g=B.c.G(h)
if(!(i<l))return A.f(m,i)
B.b.m(t,A.d3(g,m[i],new A.a2(k,f,r),q.ai()));--h}}}return t},
az(a){var t,s,r,q,p,o,n,m
u.t.a(a)
t=A.d([],u.r)
for(s=a.length,r=u.W,q=u.x,p=u.m,o=0;o<a.length;a.length===s||(0,A.a6)(a),++o){n=a[o]
m=A.e3(n.a,n.b,n.c,A.e1([B.j,A.d([new A.ai(0.01)],r),B.f,A.d([new A.ai(0.005)],r)],q,p))
if(m.length!==0)B.b.I(t,m)}return t}}
A.v.prototype={
p(a,b){var t=A.bD(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.v(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
v(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.v)t=b
else if(A.c9(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cl(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
J(a,b){return this.ar(b)},
ar(a){var t=A.bD(a),s=this.c,r=s>>>19,q=t.c
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
gag(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
n(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
j(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.a.u(q,22)&1)
s=p&4194303
o=0-o-(B.a.u(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.e_(10,q,p,o,r)},
$ip:1}
A.e.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bM.prototype={
an(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cX){A.e5()
$.cX=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.f(t,s)
t[s]=s}r=A.cl(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cP("6364136223846793005",10,!0)
m.toString
l=A.bD(m)
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
m=A.cP("1442695040888963407",10,!0)
m.toString
r=new A.v(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).p(0,m)
m=s+1
a7=A.dY(r.p(0,31),m,3).n(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.f(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bN.length))return A.f($.bN,m)
B.b.i(p,s,$.bN[m])
m=q[s]
if(!(m>=0&&m<$.bO.length))return A.f($.bO,m)
B.b.i(o,s,$.bO[m])
m=q[s]
if(!(m>=0&&m<$.bP.length))return A.f($.bP,m)
B.b.i(n,s,$.bP[m])
t[a7]=t[s]}},
t(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.G(a),i=B.c.G(b),h=a-j,g=b-i,f=B.c.n((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.f(B.r,p)
o=B.r[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.f(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.a3.prototype={}
A.bo.prototype={}
A.bp.prototype={};(function aliases(){var t=J.a0.prototype
t.am=t.j})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1
t(J,"eO","e0",8)
s(A,"f6","dN",0)
s(A,"f7","dO",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.co,J.b4,J.b_,A.bz,A.bV,A.b8,A.P,A.aj,A.X,A.ag,A.at,A.b6,A.O,A.c5,A.aA,A.bG,A.A,A.bm,A.c6,A.aF,A.bn,A.D,A.aT,A.c_,A.bQ,A.c1,A.bB,A.aE,A.aG,A.c2,A.a2,A.b2,A.z,A.aa,A.y,A.b9,A.r,A.ai,A.bL,A.bT,A.v,A.e,A.c,A.a,A.bM,A.a3,A.bo,A.bp])
r(J.b4,[J.b5,J.ax,J.o,J.ae,J.Z])
r(J.o,[J.a0,J.h,A.bc,A.by])
r(J.a0,[J.be,J.am,J.Q])
s(J.bF,J.h)
r(J.ae,[J.aw,J.b7])
r(A.bz,[A.ay,A.bZ,A.bU,A.c0,A.bw,A.bW,A.a8,A.bJ,A.bY,A.bX,A.bx])
s(A.a4,A.X)
r(A.a4,[A.aN,A.an])
s(A.ao,A.ag)
s(A.aH,A.ao)
s(A.au,A.aH)
s(A.av,A.at)
r(A.O,[A.b1,A.bl,A.cc,A.ce,A.cg])
r(A.b1,[A.bR,A.cd,A.bI,A.bK])
r(A.bl,[A.bj,A.a9])
s(A.a_,A.aA)
s(A.ah,A.bc)
r(A.ah,[A.aJ,A.aL])
s(A.aK,A.aJ)
s(A.aC,A.aK)
s(A.aM,A.aL)
s(A.aD,A.aM)
s(A.ba,A.aC)
s(A.bb,A.aD)
s(A.bq,A.c0)
s(A.aO,A.aF)
s(A.aI,A.aO)
r(A.a8,[A.bg,A.bC])
r(A.y,[A.aZ,A.a1])
s(A.al,A.aZ)
r(A.c_,[A.G,A.bd])
s(A.bk,A.b9)
t(A.aJ,A.D)
t(A.aK,A.P)
t(A.aL,A.D)
t(A.aM,A.P)
t(A.ao,A.aT)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",l:"double",x:"num",B:"String",cz:"bool",aE:"Null",i:"List"},mangledNames:{},types:["aa(a1)","~(B,@)","@(@)","@(@,B)","@(B)","~(j?,j?)","~(ak,@)","i<i<@>?>(@)","n(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aN&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.an&&a.b(c.a)&&b.b(c.b)}}
A.ew(v.typeUniverse,JSON.parse('{"be":"a0","am":"a0","Q":"a0","b5":{"cz":[],"w":[]},"ax":{"w":[]},"h":{"i":["1"],"q":["1"]},"bF":{"h":["1"],"i":["1"],"q":["1"]},"ae":{"l":[],"x":[],"p":["x"]},"aw":{"l":[],"n":[],"x":[],"p":["x"],"w":[]},"b7":{"l":[],"x":[],"p":["x"],"w":[]},"Z":{"B":[],"p":["B"],"cY":[],"w":[]},"aj":{"ak":[]},"aN":{"a4":[],"X":[]},"an":{"a4":[],"X":[]},"au":{"aH":["1","2"],"ao":["1","2"],"ag":["1","2"],"aT":["1","2"],"R":["1","2"]},"at":{"R":["1","2"]},"av":{"at":["1","2"],"R":["1","2"]},"b6":{"cQ":[]},"O":{"ac":[]},"b1":{"ac":[]},"bl":{"ac":[]},"bj":{"ac":[]},"a9":{"ac":[]},"a_":{"aA":["1","2"],"cU":["1","2"],"R":["1","2"]},"a4":{"X":[]},"ah":{"af":["1"]},"aC":{"D":["l"],"af":["l"],"i":["l"],"q":["l"],"P":["l"]},"aD":{"D":["n"],"af":["n"],"i":["n"],"q":["n"],"P":["n"]},"ba":{"D":["l"],"bA":[],"af":["l"],"i":["l"],"q":["l"],"P":["l"],"w":[],"D.E":"l"},"bb":{"D":["n"],"ck":[],"af":["n"],"i":["n"],"q":["n"],"P":["n"],"w":[],"D.E":"n"},"aI":{"q":["1"]},"aA":{"R":["1","2"]},"ag":{"R":["1","2"]},"aH":{"ao":["1","2"],"ag":["1","2"],"aT":["1","2"],"R":["1","2"]},"aF":{"q":["1"]},"aO":{"q":["1"]},"l":{"x":[],"p":["x"]},"n":{"x":[],"p":["x"]},"i":{"q":["1"]},"x":{"p":["x"]},"B":{"p":["B"],"cY":[]},"y":{"p":["y"]},"aZ":{"y":[],"p":["y"]},"al":{"y":[],"p":["y"]},"a1":{"y":[],"p":["y"]},"bk":{"b9":[]},"v":{"p":["j"]},"ck":{"i":["n"],"q":["n"]},"bA":{"i":["l"],"q":["l"]}}'))
A.ev(v.typeUniverse,JSON.parse('{"ah":1,"aF":1,"aO":1}'))
var u=(function rtii(){var t=A.ar
return{s:t("p<@>"),a:t("au<ak,@>"),u:t("aa"),Z:t("ac"),k:t("y"),q:t("e"),h:t("c"),U:t("a"),o:t("cQ"),V:t("h<bA>"),f:t("h<e>"),Y:t("h<c>"),J:t("h<a>"),r:t("h<a1>"),W:t("h<ai>"),G:t("h<j>"),c:t("h<B>"),Q:t("h<al>"),d:t("h<r>"),n:t("h<l>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("ax"),g:t("Q"),p:t("af<@>"),B:t("a_<ak,@>"),I:t("i<i<l>>"),m:t("i<ai>"),t:t("i<al>"),v:t("i<l>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("aE"),K:t("j"),O:t("a2<l>"),L:t("fu"),F:t("+()"),N:t("B"),w:t("ak"),x:t("G"),R:t("w"),C:t("am"),y:t("cz"),i:t("l"),z:t("@"),S:t("n"),A:t("0&*"),_:t("j*"),D:t("cO<aE>?"),X:t("j?"),H:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dr=J.b4.prototype
B.b=J.h.prototype
B.a=J.aw.prototype
B.c=J.ae.prototype
B.d=J.Z.prototype
B.dy=J.Q.prototype
B.dz=J.o.prototype
B.w=J.be.prototype
B.m=J.am.prototype
B.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.z=function() {
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
B.E=function(getTagFallback) {
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
B.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.B=function(hooks) {
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
B.D=function(hooks) {
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
B.C=function(hooks) {
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

B.F=new A.bQ()
B.k=new A.bV()
B.G=new A.c2()
B.p=new A.c5()
B.H=new A.e(0,0)
B.a6=new A.c(0,0,0)
B.aV=new A.a(0,0,0,0)
B.q=new A.v(0,0,0)
B.ds=new A.z(0,2)
B.dt=new A.z(2,1)
B.du=new A.z(2,-1)
B.dv=new A.z(4,0)
B.dw=new A.z(-2,1)
B.dx=new A.z(-4,0)
B.Z=new A.e(0.130526192220052,0.99144486137381)
B.a1=new A.e(0.38268343236509,0.923879532511287)
B.O=new A.e(0.608761429008721,0.793353340291235)
B.a4=new A.e(0.793353340291235,0.608761429008721)
B.R=new A.e(0.923879532511287,0.38268343236509)
B.W=new A.e(0.99144486137381,0.130526192220051)
B.a0=new A.e(0.99144486137381,-0.130526192220051)
B.Y=new A.e(0.923879532511287,-0.38268343236509)
B.P=new A.e(0.793353340291235,-0.60876142900872)
B.J=new A.e(0.608761429008721,-0.793353340291235)
B.M=new A.e(0.38268343236509,-0.923879532511287)
B.T=new A.e(0.130526192220052,-0.99144486137381)
B.a3=new A.e(-0.130526192220052,-0.99144486137381)
B.K=new A.e(-0.38268343236509,-0.923879532511287)
B.S=new A.e(-0.608761429008721,-0.793353340291235)
B.U=new A.e(-0.793353340291235,-0.608761429008721)
B.V=new A.e(-0.923879532511287,-0.38268343236509)
B.Q=new A.e(-0.99144486137381,-0.130526192220052)
B.L=new A.e(-0.99144486137381,0.130526192220051)
B.I=new A.e(-0.923879532511287,0.38268343236509)
B.X=new A.e(-0.793353340291235,0.608761429008721)
B.N=new A.e(-0.608761429008721,0.793353340291235)
B.a2=new A.e(-0.38268343236509,0.923879532511287)
B.a_=new A.e(-0.130526192220052,0.99144486137381)
B.dA=A.d(t([B.Z,B.a1,B.O,B.a4,B.R,B.W,B.a0,B.Y,B.P,B.J,B.M,B.T,B.a3,B.K,B.S,B.U,B.V,B.Q,B.L,B.I,B.X,B.N,B.a2,B.a_]),u.f)
B.dL=new A.a3(1,0,-0.788675134594813,0.211324865405187)
B.dI=new A.a3(0,0,0,0)
B.dJ=new A.a3(1,1,-0.577350269189626,-0.577350269189626)
B.dK=new A.a3(0,1,0.211324865405187,-0.788675134594813)
B.r=A.d(t([B.dL,B.dI,B.dJ,B.dK]),A.ar("h<a3>"))
B.cZ=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.ce=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.bq=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.cb=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.cg=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.c3=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bJ=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bY=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.cw=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cT=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.c1=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.cx=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.cu=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.ch=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.c0=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cS=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.cc=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.c2=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.dl=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.cm=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.bD=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.di=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.b0=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.da=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.bw=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aS=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bM=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.bC=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.bg=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.cf=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.d0=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aW=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.db=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c7=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cN=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.ca=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.cj=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aY=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.c4=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.cq=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.bu=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cE=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.df=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c5=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cQ=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d6=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bt=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.d2=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.ba=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bl=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.bi=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cI=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bS=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cH=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b6=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.dd=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b8=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aX=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.co=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dq=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.de=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.cl=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cU=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b7=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.dh=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cG=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.c9=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bV=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bz=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.cd=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cv=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.d9=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.aZ=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cA=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bT=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d8=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cB=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.cy=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cJ=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cR=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bR=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aT=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.b3=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.bj=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bI=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.bc=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bG=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.d_=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.ck=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bn=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c6=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.bd=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cC=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.b9=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aU=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.ci=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cV=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cX=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bU=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.d4=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.b4=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bp=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.dp=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.bv=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bX=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cK=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.dj=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bs=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.cr=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.ct=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.dk=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.dg=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.bx=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.bE=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.cz=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cO=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.c_=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.dm=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.d1=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bo=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.bB=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bN=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cD=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.bk=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.b_=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cP=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bL=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bO=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d7=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bW=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d5=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bP=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.dn=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.cn=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.bh=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bA=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cW=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bK=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.d3=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cM=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.cp=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cF=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.b1=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cL=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.bb=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bm=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bF=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.cs=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bQ=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.bf=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.dc=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.by=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.bZ=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.b2=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b5=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.br=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cY=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.be=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bH=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c8=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dB=A.d(t([B.cZ,B.ce,B.bq,B.cb,B.cg,B.c3,B.bJ,B.bY,B.cw,B.cT,B.c1,B.cx,B.cu,B.ch,B.c0,B.cS,B.cc,B.c2,B.dl,B.cm,B.bD,B.di,B.b0,B.da,B.bw,B.aS,B.bM,B.bC,B.bg,B.cf,B.d0,B.aW,B.db,B.c7,B.cN,B.ca,B.cj,B.aY,B.c4,B.cq,B.bu,B.cE,B.df,B.c5,B.cQ,B.d6,B.bt,B.d2,B.ba,B.bl,B.bi,B.cI,B.bS,B.cH,B.b6,B.dd,B.b8,B.aX,B.co,B.dq,B.de,B.cl,B.cU,B.b7,B.dh,B.cG,B.c9,B.bV,B.bz,B.cd,B.cv,B.d9,B.aZ,B.cA,B.bT,B.d8,B.cB,B.cy,B.cJ,B.cR,B.bR,B.aT,B.b3,B.bj,B.bI,B.bc,B.bG,B.d_,B.ck,B.bn,B.c6,B.bd,B.cC,B.b9,B.aU,B.ci,B.cV,B.cX,B.bU,B.d4,B.b4,B.bp,B.dp,B.bv,B.bX,B.cK,B.dj,B.bs,B.cr,B.ct,B.dk,B.dg,B.bx,B.bE,B.cz,B.cO,B.c_,B.dm,B.d1,B.bo,B.bB,B.bN,B.cD,B.bk,B.b_,B.cP,B.bL,B.bO,B.d7,B.bW,B.d5,B.bP,B.dn,B.cn,B.bh,B.bA,B.cW,B.bK,B.d3,B.cM,B.cp,B.cF,B.b1,B.cL,B.bb,B.bm,B.bF,B.cs,B.bQ,B.bf,B.dc,B.by,B.bZ,B.b2,B.b5,B.br,B.cY,B.be,B.bH,B.c8]),u.J)
B.t=A.d(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.ar("h<n>"))
B.al=new A.c(-2.22474487139,-2.22474487139,-1)
B.aE=new A.c(-2.22474487139,-2.22474487139,1)
B.ae=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aK=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.as=new A.c(-2.22474487139,-1,-2.22474487139)
B.aD=new A.c(-2.22474487139,1,-2.22474487139)
B.ao=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aL=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.ay=new A.c(-2.22474487139,-1,2.22474487139)
B.ak=new A.c(-2.22474487139,1,2.22474487139)
B.aa=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a8=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.aF=new A.c(-2.22474487139,2.22474487139,-1)
B.ac=new A.c(-2.22474487139,2.22474487139,1)
B.ap=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.aB=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.ad=new A.c(-1,-2.22474487139,-2.22474487139)
B.a9=new A.c(1,-2.22474487139,-2.22474487139)
B.at=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.aC=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a7=new A.c(-1,-2.22474487139,2.22474487139)
B.af=new A.c(1,-2.22474487139,2.22474487139)
B.a5=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ah=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aJ=new A.c(-1,2.22474487139,-2.22474487139)
B.aG=new A.c(1,2.22474487139,-2.22474487139)
B.aw=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.am=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.ar=new A.c(-1,2.22474487139,2.22474487139)
B.aQ=new A.c(1,2.22474487139,2.22474487139)
B.ai=new A.c(0,3.0862664687972017,1.1721513422464978)
B.aq=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aN=new A.c(2.22474487139,-2.22474487139,-1)
B.aH=new A.c(2.22474487139,-2.22474487139,1)
B.ag=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.av=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.aj=new A.c(2.22474487139,-1,-2.22474487139)
B.aI=new A.c(2.22474487139,1,-2.22474487139)
B.aO=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.ab=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aM=new A.c(2.22474487139,-1,2.22474487139)
B.az=new A.c(2.22474487139,1,2.22474487139)
B.ax=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aR=new A.c(3.0862664687972017,0,1.1721513422464978)
B.aA=new A.c(2.22474487139,2.22474487139,-1)
B.aP=new A.c(2.22474487139,2.22474487139,1)
B.au=new A.c(3.0862664687972017,1.1721513422464978,0)
B.an=new A.c(1.1721513422464978,3.0862664687972017,0)
B.dC=A.d(t([B.al,B.aE,B.ae,B.aK,B.as,B.aD,B.ao,B.aL,B.ay,B.ak,B.aa,B.a8,B.aF,B.ac,B.ap,B.aB,B.ad,B.a9,B.at,B.aC,B.a7,B.af,B.a5,B.ah,B.aJ,B.aG,B.aw,B.am,B.ar,B.aQ,B.ai,B.aq,B.aN,B.aH,B.ag,B.av,B.aj,B.aI,B.aO,B.ab,B.aM,B.az,B.ax,B.aR,B.aA,B.aP,B.au,B.an]),u.Y)
B.u=A.d(t([]),u.b)
B.dD={}
B.v=new A.av(B.dD,[],A.ar("av<ak,@>"))
B.e=new A.bd(A.f6(),"birchLeavesCube")
B.h=new A.bd(A.f7(),"birchTrunkCube")
B.dE=new A.aj("call")
B.x=new A.G("ice")
B.j=new A.G("grass")
B.f=new A.G("deathGrass")
B.i=new A.G("rock")
B.l=new A.G("snow")
B.y=new A.G("sand")
B.dF=A.cF("bA")
B.dG=A.cF("ck")
B.dH=A.cF("j")})();(function staticFields(){$.c3=null
$.M=A.d([],u.G)
$.cZ=null
$.cK=null
$.cJ=null
$.dt=null
$.dq=null
$.dy=null
$.cb=null
$.cf=null
$.cC=null
$.c4=A.d([],A.ar("h<i<j>?>"))
$.bN=A.d([],u.f)
$.bO=A.d([],u.Y)
$.bP=A.d([],u.J)
$.cX=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fr","cG",()=>A.fa("_$dart_dartClosure"))
t($,"fE","ci",()=>A.dw(B.dH))
t($,"fF","dC",()=>A.aB(A.d([0,0,161,161],u.n)))
t($,"fG","dD",()=>A.aB(A.d([0,161,161,322],u.n)))
t($,"fJ","dF",()=>A.aB(A.d([0,322,161,483],u.n)))
t($,"fL","dH",()=>A.aB(A.d([0,483,161,644],u.n)))
t($,"fH","dE",()=>A.aB(A.d([0,644,161,805],u.n)))
t($,"fK","dG",()=>A.aB(A.d([0,805,161,966],u.n)))
t($,"fs","dA",()=>A.az(8,A.V(0,0,0,0),A.ar("bo")))
t($,"ft","dB",()=>A.az(16,A.d7(0,0,0,0),A.ar("bp")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.o,DOMError:J.o,ErrorEvent:J.o,Event:J.o,InputEvent:J.o,SubmitEvent:J.o,MediaError:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,GeolocationPositionError:J.o,SensorErrorEvent:J.o,SpeechRecognitionError:J.o,ArrayBufferView:A.bc,Float32Array:A.ba,Int16Array:A.bb,DOMException:A.by})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ah.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fk
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
