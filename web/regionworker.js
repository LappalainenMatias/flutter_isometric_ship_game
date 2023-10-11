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
a[c]=function(){a[c]=function(){A.f7(b)}
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
if(a[b]!==t)A.f8(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cu(b)
return new t(c,this)}:function(){if(t===null)t=A.cu(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cu(a).prototype
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
a(hunkHelpers,v,w,$)}var A={ci:function ci(){},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cl(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cU(a,b,c){return A.cl(A.R(A.R(c,a),b))},
dl(a){var t,s
for(t=$.J.length,s=0;s<t;++s)if(a===$.J[s])return!0
return!1},
e3(a,b,c){A.be(a,0,J.cd(a)-1,b,c)},
be(a,b,c,d,e){if(c-b<=32)A.e2(a,b,c,d,e)
else A.e1(a,b,c,d,e)},
e2(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bq(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
e1(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.bq(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.a4(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.be(a2,a3,s-2,a5,a6)
A.be(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a4(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a4(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.be(a2,s,r,a5,a6)}else A.be(a2,s,r,a5,a6)},
b4:function b4(a){this.a=a},
bQ:function bQ(){},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
M:function M(){},
ag:function ag(a){this.a=a},
dr(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fs(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aW(a)
return t},
bb(a){var t,s=$.cQ
if(s==null)s=$.cQ=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bN(a){return A.dX(a)},
dX(a){var t,s,r,q
if(a instanceof A.j)return A.v(A.aU(a),null)
t=J.H(a)
if(t===B.dn||t===B.dq||u.C.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.aU(a),null)},
cR(a){if(a==null||typeof a=="number"||A.cr(a))return J.aW(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.L)return a.i(0)
if(a instanceof A.W)return a.a6(!0)
return"Instance of '"+A.bN(a)+"'"},
Q(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.a7(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bM(r,s,t))
return J.dC(a,new A.b2(B.dP,0,t,s,0))},
dY(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dW(a,b,c)},
dW(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cj(b,u.z),g=h.length,f=a.$R
if(g<f)return A.Q(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.H(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.Q(a,h,c)
if(g===f)return p.apply(a,h)
return A.Q(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.Q(a,h,c)
o=f+r.length
if(g>o)return A.Q(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cj(h,u.z)
B.b.a7(h,n)}return p.apply(a,h)}else{if(g>f)return A.Q(a,h,c)
if(h===b)h=A.cj(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.am)(m),++l){k=r[A.aS(m[l])]
if(B.m===k)return A.Q(a,h,c)
B.b.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.am)(m),++l){i=A.aS(m[l])
if(c.R(i)){++j
B.b.l(h,c.h(0,i))}else{k=r[i]
if(B.m===k)return A.Q(a,h,c)
B.b.l(h,k)}}if(j!==c.a)return A.Q(a,h,c)}return p.apply(a,h)}},
b(a,b){if(a==null)J.cd(a)
throw A.c(A.bp(a,b))},
bp(a,b){var t,s="index"
if(!A.c4(b))return new A.a5(!0,b,s,null)
t=J.cd(a)
if(b<0||b>=t)return A.dN(b,t,a,s)
return A.dZ(b,s)},
c(a){return A.dk(new Error(),a)},
dk(a,b){var t
if(b==null)b=new A.bR()
a.dartException=b
t=A.f9
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
f9(){return J.aW(this.dartException)},
an(a){throw A.c(a)},
dq(a,b){throw A.dk(b,a)},
am(a){throw A.c(A.b_(a))},
dm(a){if(a==null)return J.K(a)
if(typeof a=="object")return A.bb(a)
return J.K(a)},
dL(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bf().constructor.prototype):Object.create(new A.a6(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cF(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dH(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cF(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dF)}throw A.c("Error in functionType of tearoff")},
dI(a,b,c,d){var t=A.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cF(a,b,c,d){var t,s
if(c)return A.dK(a,b,d)
t=b.length
s=A.dI(t,d,a,b)
return s},
dJ(a,b,c,d){var t=A.cE,s=A.dG
switch(b?-1:a){case 0:throw A.c(new A.bP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dK(a,b,c){var t,s
if($.cC==null)$.cC=A.cB("interceptor")
if($.cD==null)$.cD=A.cB("receiver")
t=b.length
s=A.dJ(t,c,a,b)
return s},
cu(a){return A.dL(a)},
dF(a,b){return A.aP(v.typeUniverse,A.aU(a.a),b)},
cE(a){return a.a},
dG(a){return a.b},
cB(a){var t,s,r,q=new A.a6("receiver","interceptor"),p=J.ch(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.c(A.dD("Field name "+a+" not found."))},
f7(a){throw A.c(new A.bV(a))},
eW(a){return v.getIsolateTag(a)},
f4(a){var t,s,r,q,p,o=A.aS($.dj.$1(a)),n=$.c5[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c9[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eq($.dh.$2(a,o))
if(r!=null){n=$.c5[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c9[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cb(t)
$.c5[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c9[o]=t
return t}if(q==="-"){p=A.cb(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dn(a,t)
if(q==="*")throw A.c(A.cX(o))
if(v.leafTags[o]===true){p=A.cb(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dn(a,t)},
dn(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cx(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cb(a){return J.cx(a,!1,null,!!a.$iad)},
f6(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cb(t)
else return J.cx(t,c,null,null)},
f0(){if(!0===$.cw)return
$.cw=!0
A.f1()},
f1(){var t,s,r,q,p,o,n,m
$.c5=Object.create(null)
$.c9=Object.create(null)
A.f_()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dp.$1(p)
if(o!=null){n=A.f6(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f_(){var t,s,r,q,p,o,n=B.x()
n=A.al(B.y,A.al(B.z,A.al(B.l,A.al(B.l,A.al(B.A,A.al(B.B,A.al(B.C(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dj=new A.c6(q)
$.dh=new A.c7(p)
$.dp=new A.c8(o)},
al(a,b){return a(b)||b},
eR(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
ap:function ap(a,b){this.a=a
this.$ti=b},
ao:function ao(){},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(){},
aZ:function aZ(){},
bh:function bh(){},
bf:function bf(){},
a6:function a6(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a},
bP:function bP(a){this.a=a},
c0:function c0(){},
at:function at(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bB:function bB(a,b){this.a=a
this.b=b
this.c=null},
c6:function c6(a){this.a=a},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
W:function W(){},
a1:function a1(){},
eu(a){return a},
aw(a){return new Float32Array(A.eu(a))},
c3(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.bp(b,a))},
b9:function b9(){},
af:function af(){},
ax:function ax(){},
ay:function ay(){},
b7:function b7(){},
b8:function b8(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
aI:function aI(){},
cS(a,b){var t=b.c
return t==null?b.c=A.co(a,b.y,!0):t},
ck(a,b){var t=b.c
return t==null?b.c=A.aN(a,"cH",[b.y]):t},
cT(a){var t=a.x
if(t===6||t===7||t===8)return A.cT(a.y)
return t===12||t===13},
e0(a){return a.at},
a3(a){return A.bn(v.typeUniverse,a,!1)},
X(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.d7(a,s,!0)
case 7:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.co(a,s,!0)
case 8:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.d6(a,s,!0)
case 9:r=b.z
q=A.aT(a,r,c,a0)
if(q===r)return b
return A.aN(a,b.y,q)
case 10:p=b.y
o=A.X(a,p,c,a0)
n=b.z
m=A.aT(a,n,c,a0)
if(o===p&&m===n)return b
return A.cm(a,o,m)
case 12:l=b.y
k=A.X(a,l,c,a0)
j=b.z
i=A.eN(a,j,c,a0)
if(k===l&&i===j)return b
return A.d5(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aT(a,h,c,a0)
p=b.y
o=A.X(a,p,c,a0)
if(g===h&&o===p)return b
return A.cn(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.c(A.aY("Attempted to substitute unexpected RTI kind "+d))}},
aT(a,b,c,d){var t,s,r,q,p=b.length,o=A.c2(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.X(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eO(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c2(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.X(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eN(a,b,c,d){var t,s=b.a,r=A.aT(a,s,c,d),q=b.b,p=A.aT(a,q,c,d),o=b.c,n=A.eO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bi()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
di(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eZ(s)
t=a.$S()
return t}return null},
f2(a,b){var t
if(A.cT(b))if(a instanceof A.L){t=A.di(a)
if(t!=null)return t}return A.aU(a)},
aU(a){if(a instanceof A.j)return A.G(a)
if(Array.isArray(a))return A.ak(a)
return A.cq(J.H(a))},
ak(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
G(a){var t=a.$ti
return t!=null?t:A.cq(a)},
cq(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eB(a,t)},
eB(a,b){var t=a instanceof A.L?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.el(v.typeUniverse,t.name)
b.$ccache=s
return s},
eZ(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bn(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eX(a){return A.a2(A.G(a))},
cs(a){var t
if(a instanceof A.W)return A.eT(a.$r,a.a4())
t=a instanceof A.L?A.di(a):null
if(t!=null)return t
if(u.R.b(a))return J.dB(a).a
if(Array.isArray(a))return A.ak(a)
return A.aU(a)},
a2(a){var t=a.w
return t==null?a.w=A.db(a):t},
db(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c1(a)
t=A.bn(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.db(t):s},
eT(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.b(r,0)
t=A.aP(v.typeUniverse,A.cs(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.b(r,s)
t=A.d8(v.typeUniverse,t,A.cs(r[s]))}return A.aP(v.typeUniverse,t,a)},
cy(a){return A.a2(A.bn(v.typeUniverse,a,!1))},
eA(a){var t,s,r,q,p,o=this
if(o===u.K)return A.F(o,a,A.eH)
if(!A.I(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.F(o,a,A.eL)
t=o.x
if(t===7)return A.F(o,a,A.ey)
if(t===1)return A.F(o,a,A.df)
s=t===6?o.y:o
t=s.x
if(t===8)return A.F(o,a,A.eD)
if(s===u.S)r=A.c4
else if(s===u.i||s===u.H)r=A.eG
else if(s===u.N)r=A.eJ
else r=s===u.y?A.cr:null
if(r!=null)return A.F(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f3)){o.r="$i"+q
if(q==="i")return A.F(o,a,A.eF)
return A.F(o,a,A.eK)}}else if(t===11){p=A.eR(s.y,s.z)
return A.F(o,a,p==null?A.df:p)}return A.F(o,a,A.ew)},
F(a,b,c){a.b=c
return a.b(b)},
ez(a){var t,s=this,r=A.ev
if(!A.I(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.er
else if(s===u.K)r=A.ep
else{t=A.aV(s)
if(t)r=A.ex}s.a=r
return s.a(a)},
bo(a){var t,s=a.x
if(!A.I(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bo(a.y)))t=s===8&&A.bo(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ew(a){var t=this
if(a==null)return A.bo(t)
return A.l(v.typeUniverse,A.f2(a,t),null,t,null)},
ey(a){if(a==null)return!0
return this.y.b(a)},
eK(a){var t,s=this
if(a==null)return A.bo(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
eF(a){var t,s=this
if(a==null)return A.bo(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
ev(a){var t,s=this
if(a==null){t=A.aV(s)
if(t)return a}else if(s.b(a))return a
A.dc(a,s)},
ex(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dc(a,t)},
dc(a,b){throw A.c(A.eb(A.cY(a,A.v(b,null))))},
cY(a,b){return A.a7(a)+": type '"+A.v(A.cs(a),null)+"' is not a subtype of type '"+b+"'"},
eb(a){return new A.bm("TypeError: "+a)},
t(a,b){return new A.bm("TypeError: "+A.cY(a,b))},
eD(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.ck(v.typeUniverse,s).b(a)},
eH(a){return a!=null},
ep(a){if(a!=null)return a
throw A.c(A.t(a,"Object"))},
eL(a){return!0},
er(a){return a},
df(a){return!1},
cr(a){return!0===a||!1===a},
ff(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.t(a,"bool"))},
fh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.t(a,"bool"))},
fg(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.t(a,"bool?"))},
cp(a){if(typeof a=="number")return a
throw A.c(A.t(a,"double"))},
fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"double"))},
fi(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"double?"))},
c4(a){return typeof a=="number"&&Math.floor(a)===a},
aR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.t(a,"int"))},
fl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.t(a,"int"))},
fk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.t(a,"int?"))},
eG(a){return typeof a=="number"},
en(a){if(typeof a=="number")return a
throw A.c(A.t(a,"num"))},
fm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"num"))},
eo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.t(a,"num?"))},
eJ(a){return typeof a=="string"},
aS(a){if(typeof a=="string")return a
throw A.c(A.t(a,"String"))},
fn(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.t(a,"String"))},
eq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.t(a,"String?"))},
dg(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
eM(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dg(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dd(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.f([],u.W)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.l(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b(a4,k)
n=B.d.p(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.v(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.v(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.v(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.v(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.v(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
v(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.v(a.y,b)
return t}if(m===7){s=a.y
t=A.v(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.v(a.y,b)+">"
if(m===9){q=A.eP(a.y)
p=a.z
return p.length>0?q+("<"+A.dg(p,b)+">"):q}if(m===11)return A.eM(a,b)
if(m===12)return A.dd(a,b,null)
if(m===13)return A.dd(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
eP(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
em(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
el(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bn(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aO(a,5,"#")
r=A.c2(t)
for(q=0;q<t;++q)r[q]=s
p=A.aN(a,b,r)
o[b]=p
return p}else return n},
ek(a,b){return A.d9(a.tR,b)},
ej(a,b){return A.d9(a.eT,b)},
bn(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.d3(A.d1(a,null,b,c))
s.set(b,t)
return t},
aP(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.d3(A.d1(a,b,c,!0))
r.set(c,s)
return s},
d8(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cm(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
E(a,b){b.a=A.ez
b.b=A.eA
return b},
aO(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.z(null,null)
t.x=b
t.at=c
s=A.E(a,t)
a.eC.set(c,s)
return s},
d7(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eg(a,b,s,c)
a.eC.set(s,t)
return t},
eg(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.z(null,null)
r.x=6
r.y=b
r.at=c
return A.E(a,r)},
co(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ef(a,b,s,c)
a.eC.set(s,t)
return t},
ef(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.I(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aV(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aV(r.y))return r
else return A.cS(a,b)}}q=new A.z(null,null)
q.x=7
q.y=b
q.at=c
return A.E(a,q)},
d6(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ed(a,b,s,c)
a.eC.set(s,t)
return t},
ed(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aN(a,"cH",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.z(null,null)
r.x=8
r.y=b
r.at=c
return A.E(a,r)},
eh(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=14
t.y=b
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
aM(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
ec(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aN(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.z(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.E(a,s)
a.eC.set(q,r)
return r},
cm(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.E(a,p)
a.eC.set(r,o)
return o},
ei(a,b,c){var t,s,r="+"+(b+"("+A.aM(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
d5(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aM(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aM(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ec(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.z(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.E(a,q)
a.eC.set(s,p)
return p},
cn(a,b,c,d){var t,s=b.at+("<"+A.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ee(a,b,c,s,d)
a.eC.set(s,t)
return t},
ee(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c2(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.X(a,b,s,0)
n=A.aT(a,c,s,0)
return A.cn(a,o,n,c!==n)}}m=new A.z(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.E(a,m)},
d1(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d3(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.e6(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.d2(a,s,m,l,!1)
else if(r===46)s=A.d2(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.V(a.u,a.e,l.pop()))
break
case 94:l.push(A.eh(a.u,l.pop()))
break
case 35:l.push(A.aO(a.u,5,"#"))
break
case 64:l.push(A.aO(a.u,2,"@"))
break
case 126:l.push(A.aO(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.e8(a,l)
break
case 38:A.e7(a,l)
break
case 42:q=a.u
l.push(A.d7(q,A.V(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.co(q,A.V(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.d6(q,A.V(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.e5(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.d4(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.ea(a.u,a.e,p)
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
return A.V(a.u,a.e,n)},
e6(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d2(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.em(t,p.y)[q]
if(o==null)A.an('No "'+q+'" in "'+A.e0(p)+'"')
d.push(A.aP(t,p,o))}else d.push(q)
return n},
e8(a,b){var t,s=a.u,r=A.d0(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aN(s,q,r))
else{t=A.V(s,a.e,q)
switch(t.x){case 12:b.push(A.cn(s,t,r,a.n))
break
default:b.push(A.cm(s,t,r))
break}}},
e5(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.d0(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.V(n,a.e,m)
p=new A.bi()
p.a=r
p.b=t
p.c=s
b.push(A.d5(n,q,p))
return
case-4:b.push(A.ei(n,b.pop(),r))
return
default:throw A.c(A.aY("Unexpected state under `()`: "+A.n(m)))}},
e7(a,b){var t=b.pop()
if(0===t){b.push(A.aO(a.u,1,"0&"))
return}if(1===t){b.push(A.aO(a.u,4,"1&"))
return}throw A.c(A.aY("Unexpected extended operation "+A.n(t)))},
d0(a,b){var t=b.splice(a.p)
A.d4(a.u,a.e,t)
a.p=b.pop()
return t},
V(a,b,c){if(typeof c=="string")return A.aN(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e9(a,b,c)}else return c},
d4(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.V(a,b,c[t])},
ea(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.V(a,b,c[t])},
e9(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.c(A.aY("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.c(A.aY("Bad index "+c+" for "+b.i(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.I(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.I(b))return!1
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
if(q===6){t=A.cS(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.ck(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.ck(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.de(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.de(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eE(a,b,c,d,e)}if(p&&q===11)return A.eI(a,b,c,d,e)
return!1},
de(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eE(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aP(a,b,s[p])
return A.da(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.da(a,o,null,c,n,e)},
da(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eI(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aV(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.I(a))if(s!==7)if(!(s===6&&A.aV(a.y)))t=s===8&&A.aV(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f3(a){var t
if(!A.I(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
I(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
d9(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c2(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bi:function bi(){this.c=this.b=this.a=null},
c1:function c1(a){this.a=a},
bX:function bX(){},
bm:function bm(a){this.a=a},
dM(a){return new A.aE(a.n("aE<0>"))},
cZ(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bC(a){var t,s={}
if(A.dl(a))return"{...}"
t=new A.aB("")
try{B.b.l($.J,a)
t.a+="{"
s.a=!0
a.E(0,new A.bD(s,t))
t.a+="}"}finally{if(0>=$.J.length)return A.b($.J,-1)
$.J.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aE:function aE(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
B:function B(){},
av:function av(){},
bD:function bD(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
ae:function ae(){},
aD:function aD(){},
aA:function aA(){},
aL:function aL(){},
aj:function aj(){},
au(a,b,c){var t,s,r
if(a>4294967295)A.an(A.bd(a,0,4294967295,"length",null))
t=J.cL(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dT(a,b,c){var t,s,r=A.f([],c.n("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.am)(a),++s)B.b.l(r,c.a(a[s]))
return J.ch(r,c)},
cj(a,b){var t=A.dS(a,b)
return t},
dS(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.n("h<0>"))
t=A.f([],b.n("h<0>"))
for(s=J.cA(a);s.F();)B.b.l(t,s.gD())
return t},
e4(a,b,c){var t=J.cA(b)
if(!t.F())return a
if(c.length===0){do a+=A.n(t.gD())
while(t.F())}else{a+=A.n(t.gD())
for(;t.F();)a=a+c+A.n(t.gD())}return a},
cN(a,b){return new A.bE(a,b.gaA(),b.gaC(),b.gaB())},
a7(a){if(typeof a=="number"||A.cr(a)||a==null)return J.aW(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cR(a)},
aY(a){return new A.br(a)},
dD(a){return new A.a5(!1,null,null,a)},
dE(a,b,c){return new A.a5(!0,a,b,c)},
dZ(a,b){return new A.bc(null,null,!0,a,b,"Value not in range")},
bd(a,b,c,d,e){return new A.bc(b,c,!0,a,d,"Invalid value")},
e_(a,b,c){if(0>a||a>c)throw A.c(A.bd(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.bd(b,a,c,"end",null))
return b}return c},
dN(a,b,c,d){return new A.by(b,!0,a,d,"Index out of range")},
T(a){return new A.bT(a)},
cX(a){return new A.bS(a)},
b_(a){return new A.bt(a)},
cG(a,b,c){return new A.bx(a,b,c)},
cg(a,b,c){var t,s
if(A.dl(a))return b+"..."+c
t=new A.aB(b)
B.b.l($.J,a)
try{s=t
s.a=A.e4(s.a,a,", ")}finally{if(0>=$.J.length)return A.b($.J,-1)
$.J.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dU(a,b,c,d){var t
if(B.h===c)return A.cU(B.a.gk(a),J.K(b),$.cc())
if(B.h===d){t=B.a.gk(a)
b=J.K(b)
c=J.K(c)
return A.cl(A.R(A.R(A.R($.cc(),t),b),c))}t=B.a.gk(a)
b=J.K(b)
c=J.K(c)
d=J.K(d)
d=A.cl(A.R(A.R(A.R(A.R($.cc(),t),b),c),d))
return d},
bF:function bF(a,b){this.a=a
this.b=b},
bW:function bW(){},
bv:function bv(){},
br:function br(a){this.a=a},
bR:function bR(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
by:function by(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a){this.a=a},
bS:function bS(a){this.a=a},
bt:function bt(a){this.a=a},
bL:function bL(){},
bY:function bY(a){this.a=a},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(){},
j:function j(){},
aB:function aB(a){this.a=a},
bu:function bu(){},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
k:function k(a,b,c){this.c=a
this.e=b
this.b=c},
bs:function bs(){},
ab(a,b){return new A.aa(a*2-2*b,a+b)},
aa:function aa(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
N:function N(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.x=_.w=_.r=!0},
S:function S(a){this.b=a},
b6:function b6(){},
bg:function bg(){},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
f5(){self.jsregionworker=A.eQ(new A.ca(),u.e)},
ca:function ca(){},
bO:function bO(a){this.a=a
this.b=$},
bG:function bG(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
cI(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ag(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.c(A.cG("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eS(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.u(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.c(A.cG("Not radix digit",a,t))}if(s)return A.a9(0,0,0,q,p,o)
return new A.w(q&4194303,p&4194303,o&1048575)},
cf(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a9(0,0,0,q,p,o):new A.w(q,p,o)},
bz(a){if(a instanceof A.w)return a
else if(A.c4(a))return A.cf(a)
throw A.c(A.dE(a,"other","not an int, Int32 or Int64"))},
dQ(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.b(B.q,a)
r=B.q[a]
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
i=B.d.ah(B.a.ae(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.ae(h,a))+q+p+o},
a9(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.u(t,22)&1)
return new A.w(t&4194303,s&4194303,c-f-(B.a.u(s,22)&1)&1048575)},
dO(a,b,c){var t,s,r,q,p=A.bz(b)
if(p.gaa())throw A.c(A.T("Division by zero"))
if(a.gaa())return B.n
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a9(0,0,0,a.a,a.b,t)
if(q)p=A.a9(0,0,0,p.a,p.b,r)
return A.dP(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dP(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
t=B.c.m(k)
r=B.c.m(j)
p=B.c.m(i)
h=i*a4
g=Math.floor(h/4194304)
f=j*a4+i*a5+g
e=Math.floor(f/4194304)
d=a0-B.c.m(h-g*4194304)
c=a1-B.c.m(f-e*4194304)-(B.a.u(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.m(k*a4+j*a5+i*a6+e)-(B.a.u(c,22)&1)&1048575
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
t=t+a*(B.a.u(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a9(0,0,0,p,r,t)
return new A.w(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.w(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.n
else return A.a9(a4,a5,a6,o,n,m)
else return A.a9(0,0,0,o,n,m)},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(a,b){this.a=a
this.b=b},
d:function d(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D(a){var t=new A.bH(new Int16Array(2048),A.au(2048,B.E,u.q),A.au(2048,B.a3,u.h),A.au(2048,B.aS,u.U))
t.aj(a)
return t},
dV(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.U(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.U(l,k,j,1)
A.U(p,r,q,0)
A.U(s,o,q,0)
A.U(s,r,n,0)
A.U(s+(p^1),k,j,1)
A.U(l,r+(o^1),j,1)
A.U(l,k,q+(n^1),1)
B.b.j($.ds(),t,m)}for(t=0;t<16;++t)B.b.j($.dt(),t,A.d_(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.f([],u.f)
for(i=0;i<24;++i){h=B.dL[i]
l.push(new A.e(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.J(t,24)
if(!(k<l.length))return A.b(l,k)
B.b.l($.bI,l[k])}l=A.f([],u.Y)
for(i=0;i<48;++i){h=B.dN[i]
l.push(new A.d(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.J(t,48)
if(!(k<l.length))return A.b(l,k)
B.b.l($.bJ,l[k])}l=A.f([],u.J)
for(i=0;i<160;++i){h=B.dM[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.J(t,160)
if(!(k<l.length))return A.b(l,k)
B.b.l($.bK,l[k])}},
U(a,b,c,d){return new A.bk()},
d_(a,b,c,d){var t=new A.bl(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(){},
bl:function bl(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
f8(a){A.dq(new A.b4("Field '"+a+"' has been assigned during initialization."),new Error())},
C(){A.dq(new A.b4("Field '' has not been initialized."),new Error())},
et(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.es,a)
t[$.cz()]=a
a.$dart_jsFunction=t
return t},
es(a,b){u.j.a(b)
u.Z.a(a)
return A.dY(a,b,null)},
eQ(a,b){if(typeof a=="function")return a
else return b.a(A.et(a))},
cV(a,b,c,d,e){var t,s,r,q
for(t=0;t<12;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=c.a
q=c.b
q=new A.aC(s.a,new A.aa(r*2-2*q,r+q),B.c.G(a/e)*e,e)
q.f=new A.bs()
r=A.cW(q)
q.d=r
return q}}throw A.c(new A.bY("No tile type found for elevation: "+A.n(a)+", moisture: "+A.n(b)+". Fix the rules!"))},
cW(a1){var t,s,r,q,p,o,n,m,l=a1.c,k=a1.e,j=a1.r,i=a1.x,h=a1.w,g=a1.b.p(0,A.ab(l,l)),f=g.p(0,A.ab(k,k)),e=g.p(0,A.ab(0,k)),d=f.p(0,A.ab(0,k)),c=g.p(0,A.ab(k,0)),b=f.p(0,A.ab(k,0)),a=d.p(0,A.ab(k,0)),a0=j?12:0
if(i)a0+=12
if(h)a0+=12
t=new Float32Array(a0)
s=new Float32Array(a0)
r=A.eY(a1.a)
if(j){l=f.a
t[0]=l
k=f.b
t[1]=k
j=e.a
t[2]=j
q=e.b
t[3]=q
t[4]=g.a
t[5]=g.b
t[6]=l
t[7]=k
t[8]=j
t[9]=q
t[10]=d.a
t[11]=d.b
q=r.length
if(0>=q)return A.b(r,0)
s[0]=r[0]
if(1>=q)return A.b(r,1)
s[1]=r[1]
if(2>=q)return A.b(r,2)
s[2]=r[2]
if(3>=q)return A.b(r,3)
s[3]=r[3]
if(4>=q)return A.b(r,4)
s[4]=r[4]
if(5>=q)return A.b(r,5)
s[5]=r[5]
if(6>=q)return A.b(r,6)
s[6]=r[6]
if(7>=q)return A.b(r,7)
s[7]=r[7]
if(8>=q)return A.b(r,8)
s[8]=r[8]
if(9>=q)return A.b(r,9)
s[9]=r[9]
if(10>=q)return A.b(r,10)
s[10]=r[10]
if(11>=q)return A.b(r,11)
s[11]=r[11]
p=12
o=12}else{p=0
o=0}if(i){n=p+1
l=f.a
t[p]=l
p=n+1
k=f.b
t[n]=k
n=p+1
t[p]=d.a
p=n+1
t[n]=d.b
n=p+1
j=a.a
t[p]=j
p=n+1
i=a.b
t[n]=i
n=p+1
t[p]=l
p=n+1
t[n]=k
n=p+1
t[p]=j
p=n+1
t[n]=i
n=p+1
t[p]=b.a
p=n+1
t[n]=b.b
m=o+1
i=r.length
if(12>=i)return A.b(r,12)
s[o]=r[12]
o=m+1
if(13>=i)return A.b(r,13)
s[m]=r[13]
m=o+1
if(14>=i)return A.b(r,14)
s[o]=r[14]
o=m+1
if(15>=i)return A.b(r,15)
s[m]=r[15]
m=o+1
if(16>=i)return A.b(r,16)
s[o]=r[16]
o=m+1
if(17>=i)return A.b(r,17)
s[m]=r[17]
m=o+1
if(18>=i)return A.b(r,18)
s[o]=r[18]
o=m+1
if(19>=i)return A.b(r,19)
s[m]=r[19]
m=o+1
if(20>=i)return A.b(r,20)
s[o]=r[20]
o=m+1
if(21>=i)return A.b(r,21)
s[m]=r[21]
m=o+1
if(22>=i)return A.b(r,22)
s[o]=r[22]
o=m+1
if(23>=i)return A.b(r,23)
s[m]=r[23]}if(h){n=p+1
l=f.a
t[p]=l
p=n+1
k=f.b
t[n]=k
n=p+1
t[p]=b.a
p=n+1
t[n]=b.b
n=p+1
j=c.a
t[p]=j
p=n+1
i=c.b
t[n]=i
n=p+1
t[p]=l
p=n+1
t[n]=k
n=p+1
t[p]=j
p=n+1
t[n]=i
t[p]=g.a
t[p+1]=g.b
m=o+1
i=r.length
if(24>=i)return A.b(r,24)
s[o]=r[24]
o=m+1
if(25>=i)return A.b(r,25)
s[m]=r[25]
m=o+1
if(26>=i)return A.b(r,26)
s[o]=r[26]
o=m+1
if(27>=i)return A.b(r,27)
s[m]=r[27]
m=o+1
if(28>=i)return A.b(r,28)
s[o]=r[28]
o=m+1
if(29>=i)return A.b(r,29)
s[m]=r[29]
m=o+1
if(30>=i)return A.b(r,30)
s[o]=r[30]
o=m+1
if(31>=i)return A.b(r,31)
s[m]=r[31]
m=o+1
if(32>=i)return A.b(r,32)
s[o]=r[32]
o=m+1
if(33>=i)return A.b(r,33)
s[m]=r[33]
if(34>=i)return A.b(r,34)
s[o]=r[34]
if(35>=i)return A.b(r,35)
s[o+1]=r[35]}return new A.bU(t,s)},
fa(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=A.dM(u.N)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.am)(a),++s){q=a[s]
p=q.b.V()
o=B.c.m(q.c)
h.l(0,""+B.c.m(p.a)+","+B.c.m(p.b)+","+o)}for(s=0;s<a.length;a.length===r||(0,A.am)(a),++s){q=a[s]
p=q.b.V()
n=B.c.m(p.a)
m=B.c.m(p.b)
l=B.c.m(q.c)
t=""+n+","
k=""+l
j=""+m
i=h.P(0,""+(n-1)+","+j+","+k)
j=h.P(0,t+j+","+(l+1))
q.af(!i,!h.P(0,t+(m-1)+","+k),!j)}},
eY(a){switch(a){case B.dQ:return $.dw()
case B.i:return $.dv()
case B.e:return $.du()
case B.f:return $.dx()
case B.v:return $.dz()
case B.w:return $.dy()}},
eS(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cx(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cw==null){A.f0()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.c(A.cX("Return interceptor for "+A.n(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bZ
if(p==null)p=$.bZ=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f4(a)
if(q!=null)return q
if(typeof a=="function")return B.dp
t=Object.getPrototypeOf(a)
if(t==null)return B.u
if(t===Object.prototype)return B.u
if(typeof r=="function"){p=$.bZ
if(p==null)p=$.bZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
cK(a,b){if(a<0||a>4294967295)throw A.c(A.bd(a,0,4294967295,"length",null))
return J.cL(new Array(a),b)},
cL(a,b){return J.ch(A.f(a,b.n("h<0>")),b)},
ch(a,b){a.fixed$length=Array
return a},
cM(a){a.fixed$length=Array
a.immutable$list=Array
return a},
dR(a,b){var t=u.s
return J.dA(t.a(a),t.a(b))},
H(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ar.prototype
return J.b3.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.as.prototype
if(typeof a=="boolean")return J.b1.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
bq(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
eU(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
eV(a){if(typeof a=="number")return J.ac.prototype
if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.ai.prototype
return a},
a4(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).v(a,b)},
dA(a,b){return J.eV(a).I(a,b)},
K(a){return J.H(a).gk(a)},
cA(a){return J.eU(a).gU(a)},
cd(a){return J.bq(a).gq(a)},
dB(a){return J.H(a).gB(a)},
dC(a,b){return J.H(a).ac(a,b)},
aW(a){return J.H(a).i(a)},
b0:function b0(){},
b1:function b1(){},
as:function as(){},
p:function p(){},
Z:function Z(){},
ba:function ba(){},
ai:function ai(){},
O:function O(){},
h:function h(a){this.$ti=a},
bA:function bA(a){this.$ti=a},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ac:function ac(){},
ar:function ar(){},
b3:function b3(){},
Y:function Y(){}},B={}
var w=[A,J,B]
var $={}
A.ci.prototype={}
J.b0.prototype={
v(a,b){return a===b},
gk(a){return A.bb(a)},
i(a){return"Instance of '"+A.bN(a)+"'"},
ac(a,b){throw A.c(A.cN(a,u.o.a(b)))},
gB(a){return A.a2(A.cq(this))}}
J.b1.prototype={
i(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.a2(u.y)},
$ix:1,
$ict:1}
J.as.prototype={
v(a,b){return null==b},
i(a){return"null"},
gk(a){return 0},
$ix:1}
J.p.prototype={}
J.Z.prototype={
gk(a){return 0},
i(a){return String(a)}}
J.ba.prototype={}
J.ai.prototype={}
J.O.prototype={
i(a){var t=a[$.cz()]
if(t==null)return this.ai(a)
return"JavaScript function for "+J.aW(t)},
$ia8:1}
J.h.prototype={
l(a,b){A.ak(a).c.a(b)
if(!!a.fixed$length)A.an(A.T("add"))
a.push(b)},
a7(a,b){A.ak(a).n("q<1>").a(b)
if(!!a.fixed$length)A.an(A.T("addAll"))
this.al(a,b)
return},
al(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.c(A.b_(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.cg(a,"[","]")},
gU(a){return new J.aX(a,a.length,A.ak(a).n("aX<1>"))},
gk(a){return A.bb(a)},
gq(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.bp(a,b))
return a[b]},
j(a,b,c){A.ak(a).c.a(c)
if(!!a.immutable$list)A.an(A.T("indexed set"))
if(!(b>=0&&b<a.length))throw A.c(A.bp(a,b))
a[b]=c},
$iq:1,
$ii:1}
J.bA.prototype={}
J.aX.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.am(r)
throw A.c(r)}t=s.c
if(t>=q){s.sa0(null)
return!1}s.sa0(r[t]);++s.c
return!0},
sa0(a){this.d=this.$ti.n("1?").a(a)}}
J.ac.prototype={
I(a,b){var t
A.en(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gT(b)
if(this.gT(a)===t)return 0
if(this.gT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gT(a){return a===0?1/a<0:a<0},
m(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.c(A.T(""+a+".toInt()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.c(A.T(""+a+".floor()"))},
aD(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ae(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.c(A.bd(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.b(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.an(A.T("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.b(q,1)
t=q[1]
if(3>=s)return A.b(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.W("0",p)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
J(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
C(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.a5(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.a5(a,b)},
a5(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.c(A.T("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
u(a,b){var t
if(a>0)t=this.av(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
av(a,b){return b>31?0:a>>>b},
gB(a){return A.a2(u.H)},
$iu:1,
$im:1,
$iy:1}
J.ar.prototype={
gB(a){return A.a2(u.S)},
$ix:1,
$io:1}
J.b3.prototype={
gB(a){return A.a2(u.i)},
$ix:1}
J.Y.prototype={
p(a,b){return a+b},
ag(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.e_(b,c,a.length))},
ah(a,b){return this.K(a,b,null)},
W(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.D)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
I(a,b){var t
A.aS(b)
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
gB(a){return A.a2(u.N)},
gq(a){return a.length},
h(a,b){if(b>=a.length)throw A.c(A.bp(a,b))
return a[b]},
$ix:1,
$iu:1,
$icP:1,
$iA:1}
A.b4.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bQ.prototype={}
A.b5.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.bq(r),p=q.gq(r)
if(s.b!==p)throw A.c(A.b_(r))
t=s.c
if(t>=p){s.sX(null)
return!1}s.sX(q.h(r,t));++s.c
return!0},
sX(a){this.d=this.$ti.n("1?").a(a)}}
A.M.prototype={}
A.ag.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.ag&&this.a===b.a},
$iah:1}
A.aJ.prototype={$r:"+(1,2)",$s:1}
A.aK.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.ap.prototype={}
A.ao.prototype={
i(a){return A.bC(this)},
$iP:1}
A.aq.prototype={
gq(a){return this.b.length},
R(a){return!1},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
E(a,b){var t,s,r,q,p=this
p.$ti.n("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.b2.prototype={
gaA(){var t=this.a
return t},
gaC(){var t,s,r,q,p=this
if(p.c===1)return B.r
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.r
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.b(t,q)
r.push(t[q])}return J.cM(r)},
gaB(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.t
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.t
p=new A.at(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.b(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.b(r,m)
p.j(0,new A.ag(n),r[m])}return new A.ap(p,u.a)},
$icJ:1}
A.bM.prototype={
$2(a,b){var t
A.aS(a)
t=this.a
t.b=t.b+"$"+a
B.b.l(this.b,a)
B.b.l(this.c,b);++t.a},
$S:0}
A.L.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dr(s==null?"unknown":s)+"'"},
$ia8:1,
gaE(){return this},
$C:"$1",
$R:1,
$D:null}
A.aZ.prototype={$C:"$2",$R:2}
A.bh.prototype={}
A.bf.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dr(t)+"'"}}
A.a6.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dm(this.a)^A.bb(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bN(this.a)+"'")}}
A.bV.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bP.prototype={
i(a){return"RuntimeError: "+this.a}}
A.c0.prototype={}
A.at.prototype={
gq(a){return this.a},
R(a){var t=this.b
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
return r}else return this.az(b)},
az(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a8(a)]
s=this.a9(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r,q,p,o,n=this,m=A.G(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.Y(t==null?n.b=n.N():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.Y(s==null?n.c=n.N():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.N()
q=n.a8(b)
p=r[q]
if(p==null)r[q]=[n.O(b,c)]
else{o=n.a9(p,b)
if(o>=0)p[o].b=c
else p.push(n.O(b,c))}}},
E(a,b){var t,s,r=this
A.G(r).n("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.c(A.b_(r))
t=t.c}},
Y(a,b,c){var t,s=A.G(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.O(b,c)
else t.b=c},
O(a,b){var t=this,s=A.G(t),r=new A.bB(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a8(a){return J.K(a)&1073741823},
a9(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a4(a[s].a,b))return s
return-1},
i(a){return A.bC(this)},
N(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bB.prototype={}
A.c6.prototype={
$1(a){return this.a(a)},
$S:1}
A.c7.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.c8.prototype={
$1(a){return this.a(A.aS(a))},
$S:3}
A.W.prototype={
i(a){return this.a6(!1)},
a6(a){var t,s,r,q,p,o=this.au(),n=this.a4(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.b(n,r)
p=n[r]
m=a?m+A.cR(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
au(){var t,s=this.$s
for(;$.c_.length<=s;)B.b.l($.c_,null)
t=$.c_[s]
if(t==null){t=this.ap()
B.b.j($.c_,s,t)}return t},
ap(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.f(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.j(l,r,s[t])}}return J.cM(A.dT(l,!1,u.K))}}
A.a1.prototype={
a4(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.a1&&this.$s===b.$s&&J.a4(this.a,b.a)&&J.a4(this.b,b.b)},
gk(a){return A.dU(this.$s,this.a,this.b,B.h)}}
A.b9.prototype={}
A.af.prototype={
gq(a){return a.length},
$iad:1}
A.ax.prototype={
h(a,b){A.c3(b,a,a.length)
return a[b]},
j(a,b,c){A.cp(c)
A.c3(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.ay.prototype={
j(a,b,c){A.aR(c)
A.c3(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.b7.prototype={
gB(a){return B.dR},
$ix:1,
$ibw:1}
A.b8.prototype={
gB(a){return B.dS},
h(a,b){A.c3(b,a,a.length)
return a[b]},
$ix:1,
$ice:1}
A.aF.prototype={}
A.aG.prototype={}
A.aH.prototype={}
A.aI.prototype={}
A.z.prototype={
n(a){return A.aP(v.typeUniverse,this,a)},
aF(a){return A.d8(v.typeUniverse,this,a)}}
A.bi.prototype={}
A.c1.prototype={
i(a){return A.v(this.a,null)}}
A.bX.prototype={
i(a){return this.a}}
A.bm.prototype={}
A.aE.prototype={
gU(a){return new A.bj(this,this.ao(),A.G(this).n("bj<1>"))},
gq(a){return this.a},
P(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.aq(b)
return s}},
aq(a){var t=this.d
if(t==null)return!1
return this.a2(t[this.a_(a)],a)>=0},
l(a,b){var t,s,r=this
A.G(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.am(t==null?r.b=A.cZ():t,b)}else{s=r.ak(b)
return s}},
ak(a){var t,s,r,q=this
A.G(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.cZ()
s=q.a_(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a2(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
ao(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.au(j.a,null,u.z)
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
am(a,b){A.G(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a_(a){return B.d.gk(a)&1073741823},
a2(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a4(a[s],b))return s
return-1}}
A.bj.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.c(A.b_(q))
else if(r>=s.length){t.sZ(null)
return!1}else{t.sZ(s[r])
t.c=r+1
return!0}},
sZ(a){this.d=this.$ti.n("1?").a(a)}}
A.B.prototype={
gU(a){return new A.b5(a,this.gq(a),A.aU(a).n("b5<B.E>"))},
i(a){return A.cg(a,"[","]")}}
A.av.prototype={
gq(a){return this.a},
i(a){return A.bC(this)},
$iP:1}
A.bD.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.n(a)
s.a=t+": "
s.a+=A.n(b)},
$S:4}
A.aQ.prototype={}
A.ae.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.n("~(1,2)").a(b))},
gq(a){return this.a.a},
i(a){return A.bC(this.a)},
$iP:1}
A.aD.prototype={}
A.aA.prototype={
i(a){return A.cg(this,"{","}")},
$iq:1}
A.aL.prototype={}
A.aj.prototype={}
A.bF.prototype={
$2(a,b){var t,s,r
u.m.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a7(b)
s.a=", "},
$S:5}
A.bW.prototype={
i(a){return this.a1()}}
A.bv.prototype={}
A.br.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a7(t)
return"Assertion failed"}}
A.bR.prototype={}
A.a5.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gM()+r+p
if(!t.a)return o
return o+t.gL()+": "+A.a7(t.gS())},
gS(){return this.b}}
A.bc.prototype={
gS(){return A.eo(this.b)},
gM(){return"RangeError"},
gL(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.by.prototype={
gS(){return A.aR(this.b)},
gM(){return"RangeError"},
gL(){if(A.aR(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bE.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aB("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a7(o)
k.a=", "}l.d.E(0,new A.bF(k,j))
n=A.a7(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bT.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bS.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bt.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a7(t)+"."}}
A.bL.prototype={
i(a){return"Out of Memory"}}
A.bY.prototype={
i(a){return"Exception: "+this.a}}
A.bx.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.K(g,0,75)+"..."
return i+"\n"+g}for(t=g.length,s=1,r=0,q=!1,p=0;p<h;++p){if(!(p<t))return A.b(g,p)
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
k=""}return i+l+B.d.K(g,m,n)+k+"\n"+B.d.W(" ",h-m+l.length)+"^\n"}}
A.az.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
i(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.bb(this)},
i(a){return"Instance of '"+A.bN(this)+"'"},
ac(a,b){throw A.c(A.cN(this,u.o.a(b)))},
gB(a){return A.eX(this)},
toString(){return this.i(this)}}
A.aB.prototype={
gq(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bu.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.a_.prototype={
i(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
v(a,b){if(b==null)return!1
return b instanceof A.a_&&this.a===b.a&&this.b===b.b},
gk(a){return A.cU(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.k.prototype={
a1(){return"LevelOfDetail."+this.b}}
A.bs.prototype={}
A.aa.prototype={
p(a,b){return new A.aa(this.a+b.a,this.b+b.b)},
V(){var t=this.b,s=t/2-this.a/4
return new A.a_(t-s,s,u.O)},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aa&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
i(a){return""+B.c.m(this.a)+", "+B.c.m(this.b)}}
A.bU.prototype={}
A.N.prototype={
I(a,b){var t,s,r,q
u.k.a(b)
t=this.ab()
s=b.ab()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$iu:1}
A.aC.prototype={
ab(){var t=this.b.V()
return new A.aK(-1*(t.a+t.b+this.e),this.c)},
af(a,b,c){var t=this
if(a===t.r&&b===t.w&&c===t.x)return
t.r=a
t.x=c
t.w=b
t.d=A.cW(t)}}
A.S.prototype={
a1(){return"TileType."+this.b}}
A.b6.prototype={}
A.bg.prototype={
ad(){var t=null
return A.f([new A.r(B.f,0,-0.2),new A.r(B.e,0,0),new A.r(B.w,0,t),new A.r(B.f,15,-0.2),new A.r(B.e,15,0.4),new A.r(B.i,15,t),new A.r(B.f,30,-0.2),new A.r(B.e,30,0.4),new A.r(B.i,30,t),new A.r(B.f,50,0.1),new A.r(B.e,50,0.4),new A.r(B.v,t,t)],u.c)}}
A.r.prototype={}
A.ca.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k=new A.bg(),j=new A.bO(k),i=J.bq(a),h=A.aR(i.h(a,0)),g=A.aR(i.h(a,1)),f=A.cp(i.h(a,2)),e=A.cp(i.h(a,3))
i=A.aR(i.h(a,4))
if(!(i>=0&&i<20))return A.b(B.p,i)
t=B.p[i]
i=B.c.m(f)
s=B.c.m(e)
r=new A.bG(k)
r.a=A.D(2)
r.b=A.D(3)
r.c=A.D(4)
r.d=A.D(5)
r.e=A.D(6)
r.f=A.D(7)
r.r=A.D(8)
r.w=A.D(9)
r.x=A.D(10)
r.y=A.D(11)
r.z=A.D(12)
j.b=r
k=t.c
q=r.aw(h,g,i,s,k)
p=j.ar(i,s,q.a,q.b,k)
if(!!p.immutable$list)A.an(A.T("sort"))
A.e3(p,J.eC(),A.ak(p).c)
if(t.e)A.fa(p)
o=A.f([],u.l)
for(k=p.length,i=u.V,n=0;n<p.length;p.length===k||(0,A.am)(p),++n){m=p[n]
s=m.b
l=m.d
l===$&&A.C()
B.b.l(o,["Tile",m.a.b,s.a,s.b,m.c,m.e,A.f([l.a,l.b],i),m.r,m.x,m.w])}return o},
$S:6}
A.bO.prototype={
ar(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.f([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.b(d,o)
m=d[o]
for(l=m.length,k=a+o*e,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.b(n,i)
h=n[i]
if(h<=0){g=B.c.G(h/e)
if(!(i<l))return A.b(m,i)
B.b.l(t,A.cV(g*e,m[i],new A.a_(k,b+i*e,r),q.ad(),e))}else for(g=b+i*e;h>0;){f=B.c.G(h/e)
if(!(i<l))return A.b(m,i)
B.b.l(t,A.cV(f*e,m[i],new A.a_(k,g,r),q.ad(),e))
h-=e}}}return t}}
A.bG.prototype={
aw(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a3(b3,b4),b2=b0.a3(b3,b4)
for(t=b1.length,s=b2.length,r=0;r<b3;++r)for(q=b5+r*b7,p=q*0.0004,o=q*0.0016,n=q*0.0064,m=q*0.0256,l=q*0.0000032000000000000003,k=q*0.000012800000000000001,j=q*0.000051200000000000004,i=q*0.00020480000000000002,h=0;h<b3;++h){g=b6+h*b7
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
if(!(r<t))return A.b(b1,r)
B.b.j(b1[r],h,B.c.aD(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+2)/4-0.71)*100))
a9=b0.x
a9===$&&A.C()
a9=a9.t(c,b)
a8=b0.y
a8===$&&A.C()
a8=a8.t(a0,a1)
a7=b0.z
a7===$&&A.C()
a7=a7.t(a3,a4)
if(!(r<s))return A.b(b2,r)
B.b.j(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aJ(b1,b2)},
a3(a,b){var t,s,r,q,p=J.cK(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cK(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.w.prototype={
p(a,b){var t=A.bz(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.w(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
v(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.w)t=b
else if(A.c4(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cf(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
I(a,b){return this.an(b)},
an(a){var t=A.bz(a),s=this.c,r=s>>>19,q=t.c
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
gaa(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
m(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
i(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.a.u(q,22)&1)
s=p&4194303
o=0-o-(B.a.u(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.dQ(10,q,p,o,r)},
$iu:1}
A.e.prototype={}
A.d.prototype={}
A.a.prototype={}
A.bH.prototype={
aj(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cO){A.dV()
$.cO=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.b(t,s)
t[s]=s}r=A.cf(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cI("6364136223846793005",10,!0)
m.toString
l=A.bz(m)
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
m=A.cI("1442695040888963407",10,!0)
m.toString
r=new A.w(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).p(0,m)
m=s+1
a7=A.dO(r.p(0,31),m,3).m(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.b(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bI.length))return A.b($.bI,m)
B.b.j(p,s,$.bI[m])
m=q[s]
if(!(m>=0&&m<$.bJ.length))return A.b($.bJ,m)
B.b.j(o,s,$.bJ[m])
m=q[s]
if(!(m>=0&&m<$.bK.length))return A.b($.bK,m)
B.b.j(n,s,$.bK[m])
t[a7]=t[s]}},
t(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.G(a),i=B.c.G(b),h=a-j,g=b-i,f=B.c.m((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.b(B.o,p)
o=B.o[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.b(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.a0.prototype={}
A.bk.prototype={}
A.bl.prototype={};(function aliases(){var t=J.Z.prototype
t.ai=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eC","dR",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.ci,J.b0,J.aX,A.bv,A.bQ,A.b5,A.M,A.ag,A.W,A.ae,A.ao,A.b2,A.L,A.c0,A.av,A.bB,A.z,A.bi,A.c1,A.aA,A.bj,A.B,A.aQ,A.bW,A.bL,A.bY,A.bx,A.az,A.aB,A.a_,A.bs,A.aa,A.bU,A.N,A.b6,A.r,A.bO,A.bG,A.w,A.e,A.d,A.a,A.bH,A.a0,A.bk,A.bl])
r(J.b0,[J.b1,J.as,J.p,J.ac,J.Y])
r(J.p,[J.Z,J.h,A.b9,A.bu])
r(J.Z,[J.ba,J.ai,J.O])
s(J.bA,J.h)
r(J.ac,[J.ar,J.b3])
r(A.bv,[A.b4,A.bV,A.bP,A.bX,A.br,A.bR,A.a5,A.bE,A.bT,A.bS,A.bt])
s(A.a1,A.W)
r(A.a1,[A.aJ,A.aK])
s(A.aj,A.ae)
s(A.aD,A.aj)
s(A.ap,A.aD)
s(A.aq,A.ao)
r(A.L,[A.aZ,A.bh,A.c6,A.c8,A.ca])
r(A.aZ,[A.bM,A.c7,A.bD,A.bF])
r(A.bh,[A.bf,A.a6])
s(A.at,A.av)
s(A.af,A.b9)
r(A.af,[A.aF,A.aH])
s(A.aG,A.aF)
s(A.ax,A.aG)
s(A.aI,A.aH)
s(A.ay,A.aI)
s(A.b7,A.ax)
s(A.b8,A.ay)
s(A.bm,A.bX)
s(A.aL,A.aA)
s(A.aE,A.aL)
r(A.a5,[A.bc,A.by])
r(A.bW,[A.k,A.S])
s(A.aC,A.N)
s(A.bg,A.b6)
t(A.aF,A.B)
t(A.aG,A.M)
t(A.aH,A.B)
t(A.aI,A.M)
t(A.aj,A.aQ)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",y:"num",A:"String",ct:"bool",az:"Null",i:"List"},mangledNames:{},types:["~(A,@)","@(@)","@(@,A)","@(A)","~(j?,j?)","~(ah,@)","i<i<@>?>(@)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aJ&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aK&&a.b(c.a)&&b.b(c.b)}}
A.ek(v.typeUniverse,JSON.parse('{"ba":"Z","ai":"Z","O":"Z","b1":{"ct":[],"x":[]},"as":{"x":[]},"h":{"i":["1"],"q":["1"]},"bA":{"h":["1"],"i":["1"],"q":["1"]},"ac":{"m":[],"y":[],"u":["y"]},"ar":{"m":[],"o":[],"y":[],"u":["y"],"x":[]},"b3":{"m":[],"y":[],"u":["y"],"x":[]},"Y":{"A":[],"u":["A"],"cP":[],"x":[]},"ag":{"ah":[]},"aJ":{"a1":[],"W":[]},"aK":{"a1":[],"W":[]},"ap":{"aD":["1","2"],"aj":["1","2"],"ae":["1","2"],"aQ":["1","2"],"P":["1","2"]},"ao":{"P":["1","2"]},"aq":{"ao":["1","2"],"P":["1","2"]},"b2":{"cJ":[]},"L":{"a8":[]},"aZ":{"a8":[]},"bh":{"a8":[]},"bf":{"a8":[]},"a6":{"a8":[]},"at":{"av":["1","2"],"P":["1","2"]},"a1":{"W":[]},"af":{"ad":["1"]},"ax":{"B":["m"],"ad":["m"],"i":["m"],"q":["m"],"M":["m"]},"ay":{"B":["o"],"ad":["o"],"i":["o"],"q":["o"],"M":["o"]},"b7":{"B":["m"],"bw":[],"ad":["m"],"i":["m"],"q":["m"],"M":["m"],"x":[],"B.E":"m"},"b8":{"B":["o"],"ce":[],"ad":["o"],"i":["o"],"q":["o"],"M":["o"],"x":[],"B.E":"o"},"aE":{"q":["1"]},"av":{"P":["1","2"]},"ae":{"P":["1","2"]},"aD":{"aj":["1","2"],"ae":["1","2"],"aQ":["1","2"],"P":["1","2"]},"aA":{"q":["1"]},"aL":{"q":["1"]},"m":{"y":[],"u":["y"]},"o":{"y":[],"u":["y"]},"i":{"q":["1"]},"y":{"u":["y"]},"A":{"u":["A"],"cP":[]},"N":{"u":["N"]},"aC":{"N":[],"u":["N"]},"bg":{"b6":[]},"w":{"u":["j"]},"ce":{"i":["o"],"q":["o"]},"bw":{"i":["m"],"q":["m"]}}'))
A.ej(v.typeUniverse,JSON.parse('{"af":1,"aA":1,"aL":1}'))
var u=(function rtii(){var t=A.a3
return{s:t("u<@>"),a:t("ap<ah,@>"),Z:t("a8"),k:t("N"),q:t("e"),h:t("d"),U:t("a"),o:t("cJ"),V:t("h<bw>"),f:t("h<e>"),Y:t("h<d>"),J:t("h<a>"),G:t("h<j>"),W:t("h<A>"),Q:t("h<aC>"),c:t("h<r>"),n:t("h<m>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("as"),g:t("O"),p:t("ad<@>"),B:t("at<ah,@>"),I:t("i<i<m>>"),r:t("i<m>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("az"),K:t("j"),O:t("a_<m>"),L:t("fe"),F:t("+()"),N:t("A"),m:t("ah"),R:t("x"),C:t("ai"),y:t("ct"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("j*"),d:t("cH<az>?"),X:t("j?"),H:t("y")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dn=J.b0.prototype
B.b=J.h.prototype
B.a=J.ar.prototype
B.c=J.ac.prototype
B.d=J.Y.prototype
B.dp=J.O.prototype
B.dq=J.p.prototype
B.u=J.ba.prototype
B.j=J.ai.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.x=function() {
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
B.C=function(getTagFallback) {
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
B.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.z=function(hooks) {
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
B.B=function(hooks) {
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
B.A=function(hooks) {
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
B.l=function(hooks) { return hooks; }

B.D=new A.bL()
B.h=new A.bQ()
B.m=new A.c0()
B.E=new A.e(0,0)
B.a3=new A.d(0,0,0)
B.aS=new A.a(0,0,0,0)
B.n=new A.w(0,0,0)
B.W=new A.e(0.130526192220052,0.99144486137381)
B.Z=new A.e(0.38268343236509,0.923879532511287)
B.L=new A.e(0.608761429008721,0.793353340291235)
B.a1=new A.e(0.793353340291235,0.608761429008721)
B.O=new A.e(0.923879532511287,0.38268343236509)
B.T=new A.e(0.99144486137381,0.130526192220051)
B.Y=new A.e(0.99144486137381,-0.130526192220051)
B.V=new A.e(0.923879532511287,-0.38268343236509)
B.M=new A.e(0.793353340291235,-0.60876142900872)
B.G=new A.e(0.608761429008721,-0.793353340291235)
B.J=new A.e(0.38268343236509,-0.923879532511287)
B.Q=new A.e(0.130526192220052,-0.99144486137381)
B.a0=new A.e(-0.130526192220052,-0.99144486137381)
B.H=new A.e(-0.38268343236509,-0.923879532511287)
B.P=new A.e(-0.608761429008721,-0.793353340291235)
B.R=new A.e(-0.793353340291235,-0.608761429008721)
B.S=new A.e(-0.923879532511287,-0.38268343236509)
B.N=new A.e(-0.99144486137381,-0.130526192220052)
B.I=new A.e(-0.99144486137381,0.130526192220051)
B.F=new A.e(-0.923879532511287,0.38268343236509)
B.U=new A.e(-0.793353340291235,0.608761429008721)
B.K=new A.e(-0.608761429008721,0.793353340291235)
B.a_=new A.e(-0.38268343236509,0.923879532511287)
B.X=new A.e(-0.130526192220052,0.99144486137381)
B.dL=A.f(t([B.W,B.Z,B.L,B.a1,B.O,B.T,B.Y,B.V,B.M,B.G,B.J,B.Q,B.a0,B.H,B.P,B.R,B.S,B.N,B.I,B.F,B.U,B.K,B.a_,B.X]),u.f)
B.dX=new A.a0(1,0,-0.788675134594813,0.211324865405187)
B.dU=new A.a0(0,0,0,0)
B.dV=new A.a0(1,1,-0.577350269189626,-0.577350269189626)
B.dW=new A.a0(0,1,0.211324865405187,-0.788675134594813)
B.o=A.f(t([B.dX,B.dU,B.dV,B.dW]),A.a3("h<a0>"))
B.cW=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.cb=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.bn=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.c8=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.cd=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.c0=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bG=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bV=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.ct=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cQ=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.bZ=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.cu=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.cr=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.ce=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.bY=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cP=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.c9=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.c_=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.di=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.cj=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.bA=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.df=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.aY=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.d7=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.bt=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aP=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bJ=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.bz=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.bd=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.cc=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.cY=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aT=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.d8=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c4=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cK=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.c7=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.cg=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aV=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.c1=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.cn=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.br=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cB=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.dc=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c2=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cN=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d3=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bq=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.d_=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.b7=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bi=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.bf=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cF=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bP=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cE=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b3=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.da=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b5=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aU=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.cl=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dm=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.db=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.ci=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cR=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b4=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.de=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cD=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.c6=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bS=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bw=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.ca=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cs=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.d6=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.aW=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cx=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bQ=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d5=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cy=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.cv=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cG=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cO=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bO=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aQ=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.b0=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.bg=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bF=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.b9=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bD=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.cX=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.ch=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bk=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c3=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.ba=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cz=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.b6=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aR=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.cf=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cS=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cU=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bR=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.d1=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.b1=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bm=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.dl=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.bs=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bU=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cH=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.dg=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bp=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.co=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.cq=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.dh=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.dd=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.bu=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.bB=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.cw=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cL=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.bX=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.dj=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.cZ=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bl=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.by=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bK=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cA=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.bh=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.aX=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cM=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bI=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bL=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d4=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bT=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d2=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bM=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.dk=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.ck=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.be=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bx=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cT=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bH=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.d0=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cJ=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.cm=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cC=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.aZ=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cI=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.b8=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bj=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bC=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.cp=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bN=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.bc=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.d9=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.bv=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.bW=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.b_=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b2=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.bo=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cV=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.bb=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bE=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c5=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dM=A.f(t([B.cW,B.cb,B.bn,B.c8,B.cd,B.c0,B.bG,B.bV,B.ct,B.cQ,B.bZ,B.cu,B.cr,B.ce,B.bY,B.cP,B.c9,B.c_,B.di,B.cj,B.bA,B.df,B.aY,B.d7,B.bt,B.aP,B.bJ,B.bz,B.bd,B.cc,B.cY,B.aT,B.d8,B.c4,B.cK,B.c7,B.cg,B.aV,B.c1,B.cn,B.br,B.cB,B.dc,B.c2,B.cN,B.d3,B.bq,B.d_,B.b7,B.bi,B.bf,B.cF,B.bP,B.cE,B.b3,B.da,B.b5,B.aU,B.cl,B.dm,B.db,B.ci,B.cR,B.b4,B.de,B.cD,B.c6,B.bS,B.bw,B.ca,B.cs,B.d6,B.aW,B.cx,B.bQ,B.d5,B.cy,B.cv,B.cG,B.cO,B.bO,B.aQ,B.b0,B.bg,B.bF,B.b9,B.bD,B.cX,B.ch,B.bk,B.c3,B.ba,B.cz,B.b6,B.aR,B.cf,B.cS,B.cU,B.bR,B.d1,B.b1,B.bm,B.dl,B.bs,B.bU,B.cH,B.dg,B.bp,B.co,B.cq,B.dh,B.dd,B.bu,B.bB,B.cw,B.cL,B.bX,B.dj,B.cZ,B.bl,B.by,B.bK,B.cA,B.bh,B.aX,B.cM,B.bI,B.bL,B.d4,B.bT,B.d2,B.bM,B.dk,B.ck,B.be,B.bx,B.cT,B.bH,B.d0,B.cJ,B.cm,B.cC,B.aZ,B.cI,B.b8,B.bj,B.bC,B.cp,B.bN,B.bc,B.d9,B.bv,B.bW,B.b_,B.b2,B.bo,B.cV,B.bb,B.bE,B.c5]),u.J)
B.dw=new A.k(1,!0,"zoomlevel_19")
B.dA=new A.k(2,!1,"zoomlevel_18")
B.dE=new A.k(4,!1,"zoomlevel_17")
B.dK=new A.k(8,!1,"zoomlevel_16")
B.dv=new A.k(16,!1,"zoomlevel_15")
B.dC=new A.k(32,!1,"zoomlevel_14")
B.dH=new A.k(64,!1,"zoomlevel_13")
B.ds=new A.k(128,!1,"zoomlevel_12")
B.dy=new A.k(256,!1,"zoomlevel_11")
B.dF=new A.k(512,!1,"zoomlevel_10")
B.dr=new A.k(1024,!1,"zoomlevel_9")
B.dx=new A.k(2048,!1,"zoomlevel_8")
B.dD=new A.k(4096,!1,"zoomlevel_7")
B.dJ=new A.k(8192,!1,"zoomlevel_6")
B.du=new A.k(16384,!1,"zoomlevel_5")
B.dB=new A.k(32768,!1,"zoomlevel_4")
B.dI=new A.k(65536,!1,"zoomlevel_3")
B.dt=new A.k(131072,!1,"zoomlevel_2")
B.dz=new A.k(262144,!1,"zoomlevel_1")
B.dG=new A.k(524288,!1,"zoomlevel_0")
B.p=A.f(t([B.dw,B.dA,B.dE,B.dK,B.dv,B.dC,B.dH,B.ds,B.dy,B.dF,B.dr,B.dx,B.dD,B.dJ,B.du,B.dB,B.dI,B.dt,B.dz,B.dG]),A.a3("h<k>"))
B.q=A.f(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.a3("h<o>"))
B.ai=new A.d(-2.22474487139,-2.22474487139,-1)
B.aB=new A.d(-2.22474487139,-2.22474487139,1)
B.ab=new A.d(-3.0862664687972017,-1.1721513422464978,0)
B.aH=new A.d(-1.1721513422464978,-3.0862664687972017,0)
B.ap=new A.d(-2.22474487139,-1,-2.22474487139)
B.aA=new A.d(-2.22474487139,1,-2.22474487139)
B.al=new A.d(-1.1721513422464978,0,-3.0862664687972017)
B.aI=new A.d(-3.0862664687972017,0,-1.1721513422464978)
B.av=new A.d(-2.22474487139,-1,2.22474487139)
B.ah=new A.d(-2.22474487139,1,2.22474487139)
B.a7=new A.d(-3.0862664687972017,0,1.1721513422464978)
B.a5=new A.d(-1.1721513422464978,0,3.0862664687972017)
B.aC=new A.d(-2.22474487139,2.22474487139,-1)
B.a9=new A.d(-2.22474487139,2.22474487139,1)
B.am=new A.d(-1.1721513422464978,3.0862664687972017,0)
B.ay=new A.d(-3.0862664687972017,1.1721513422464978,0)
B.aa=new A.d(-1,-2.22474487139,-2.22474487139)
B.a6=new A.d(1,-2.22474487139,-2.22474487139)
B.aq=new A.d(0,-3.0862664687972017,-1.1721513422464978)
B.az=new A.d(0,-1.1721513422464978,-3.0862664687972017)
B.a4=new A.d(-1,-2.22474487139,2.22474487139)
B.ac=new A.d(1,-2.22474487139,2.22474487139)
B.a2=new A.d(0,-1.1721513422464978,3.0862664687972017)
B.ae=new A.d(0,-3.0862664687972017,1.1721513422464978)
B.aG=new A.d(-1,2.22474487139,-2.22474487139)
B.aD=new A.d(1,2.22474487139,-2.22474487139)
B.at=new A.d(0,1.1721513422464978,-3.0862664687972017)
B.aj=new A.d(0,3.0862664687972017,-1.1721513422464978)
B.ao=new A.d(-1,2.22474487139,2.22474487139)
B.aN=new A.d(1,2.22474487139,2.22474487139)
B.af=new A.d(0,3.0862664687972017,1.1721513422464978)
B.an=new A.d(0,1.1721513422464978,3.0862664687972017)
B.aK=new A.d(2.22474487139,-2.22474487139,-1)
B.aE=new A.d(2.22474487139,-2.22474487139,1)
B.ad=new A.d(1.1721513422464978,-3.0862664687972017,0)
B.as=new A.d(3.0862664687972017,-1.1721513422464978,0)
B.ag=new A.d(2.22474487139,-1,-2.22474487139)
B.aF=new A.d(2.22474487139,1,-2.22474487139)
B.aL=new A.d(3.0862664687972017,0,-1.1721513422464978)
B.a8=new A.d(1.1721513422464978,0,-3.0862664687972017)
B.aJ=new A.d(2.22474487139,-1,2.22474487139)
B.aw=new A.d(2.22474487139,1,2.22474487139)
B.au=new A.d(1.1721513422464978,0,3.0862664687972017)
B.aO=new A.d(3.0862664687972017,0,1.1721513422464978)
B.ax=new A.d(2.22474487139,2.22474487139,-1)
B.aM=new A.d(2.22474487139,2.22474487139,1)
B.ar=new A.d(3.0862664687972017,1.1721513422464978,0)
B.ak=new A.d(1.1721513422464978,3.0862664687972017,0)
B.dN=A.f(t([B.ai,B.aB,B.ab,B.aH,B.ap,B.aA,B.al,B.aI,B.av,B.ah,B.a7,B.a5,B.aC,B.a9,B.am,B.ay,B.aa,B.a6,B.aq,B.az,B.a4,B.ac,B.a2,B.ae,B.aG,B.aD,B.at,B.aj,B.ao,B.aN,B.af,B.an,B.aK,B.aE,B.ad,B.as,B.ag,B.aF,B.aL,B.a8,B.aJ,B.aw,B.au,B.aO,B.ax,B.aM,B.ar,B.ak]),u.Y)
B.r=A.f(t([]),u.b)
B.dO={}
B.t=new A.aq(B.dO,[],A.a3("aq<ah,@>"))
B.dP=new A.ag("call")
B.dQ=new A.S("ice")
B.i=new A.S("grass")
B.e=new A.S("deathGrass")
B.f=new A.S("rock")
B.v=new A.S("snow")
B.w=new A.S("sand")
B.dR=A.cy("bw")
B.dS=A.cy("ce")
B.dT=A.cy("j")})();(function staticFields(){$.bZ=null
$.J=A.f([],u.G)
$.cQ=null
$.cD=null
$.cC=null
$.dj=null
$.dh=null
$.dp=null
$.c5=null
$.c9=null
$.cw=null
$.c_=A.f([],A.a3("h<i<j>?>"))
$.bI=A.f([],u.f)
$.bJ=A.f([],u.Y)
$.bK=A.f([],u.J)
$.cO=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fb","cz",()=>A.eW("_$dart_dartClosure"))
t($,"fo","cc",()=>A.dm(B.dT))
t($,"fp","du",()=>A.aw(A.f([80,80,0,120,80,161,80,80,0,120,0,40,80,80,0,40,80,0,80,80,80,0,161,40,80,80,161,40,161,120,80,80,161,120,80,161],u.n)))
t($,"fq","dv",()=>A.aw(A.f([80,241,0,281,80,322,80,241,0,281,0,201,80,241,0,201,80,161,80,241,80,161,161,201,80,241,161,201,161,281,80,241,161,281,80,322],u.n)))
t($,"ft","dx",()=>A.aw(A.f([80,402,0,442,80,483,80,402,0,442,0,362,80,402,0,362,80,322,80,402,80,322,161,362,80,402,161,362,161,442,80,402,161,442,80,483],u.n)))
t($,"fv","dz",()=>A.aw(A.f([80,563,0,603,80,644,80,563,0,603,0,523,80,563,0,523,80,483,80,563,80,483,161,523,80,563,161,523,161,603,80,563,161,603,80,644],u.n)))
t($,"fr","dw",()=>A.aw(A.f([80,724,0,764,80,805,80,724,0,764,0,684,80,724,0,684,80,644,80,724,80,644,161,684,80,724,161,684,161,764,80,724,161,764,80,805],u.n)))
t($,"fu","dy",()=>A.aw(A.f([80,885,0,925,80,966,80,885,0,925,0,845,80,885,0,845,80,805,80,885,80,805,161,845,80,885,161,845,161,925,80,885,161,925,80,966],u.n)))
t($,"fc","ds",()=>A.au(8,A.U(0,0,0,0),A.a3("bk")))
t($,"fd","dt",()=>A.au(16,A.d_(0,0,0,0),A.a3("bl")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.b9,Float32Array:A.b7,Int16Array:A.b8,DOMException:A.bu})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.af.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.f5
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
