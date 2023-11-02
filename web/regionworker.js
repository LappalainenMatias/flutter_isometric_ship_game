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
a[c]=function(){a[c]=function(){A.f8(b)}
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
if(a[b]!==t)A.f9(b)
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
O(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cl(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cV(a,b,c){return A.cl(A.O(A.O(c,a),b))},
dm(a){var t,s
for(t=$.H.length,s=0;s<t;++s)if(a===$.H[s])return!0
return!1},
e3(a,b,c){A.be(a,0,J.cd(a)-1,b,c)},
be(a,b,c,d,e){if(c-b<=32)A.e2(a,b,c,d,e)
else A.e1(a,b,c,d,e)},
e2(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.br(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.v()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
e1(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.br(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.v()
if(a1>0){t=a0
a0=a
a=t}e.j(a2,j,d)
e.j(a2,h,b)
e.j(a2,i,a0)
e.j(a2,g,e.h(a2,a3))
e.j(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.a1(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
if(s<j&&r>i){for(;J.a1(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a1(a5.$2(e.h(a2,r),a),0);)--r
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
bR:function bR(){},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
K:function K(){},
ad:function ad(a){this.a=a},
ds(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ft(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aV(a)
return t},
bb(a){var t,s=$.cR
if(s==null)s=$.cR=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bO(a){return A.dX(a)},
dX(a){var t,s,r,q
if(a instanceof A.j)return A.u(A.aT(a),null)
t=J.F(a)
if(t===B.dm||t===B.dp||u.C.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.aT(a),null)},
cS(a){if(a==null||typeof a=="number"||A.cr(a))return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.J)return a.i(0)
if(a instanceof A.T)return a.a5(!0)
return"Instance of '"+A.bO(a)+"'"},
N(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.a6(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bN(r,s,t))
return J.dD(a,new A.b2(B.du,0,t,s,0))},
dY(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dW(a,b,c)},
dW(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cj(b,u.z),g=h.length,f=a.$R
if(g<f)return A.N(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.F(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.N(a,h,c)
if(g===f)return p.apply(a,h)
return A.N(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.N(a,h,c)
o=f+r.length
if(g>o)return A.N(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cj(h,u.z)
B.b.a6(h,n)}return p.apply(a,h)}else{if(g>f)return A.N(a,h,c)
if(h===b)h=A.cj(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.ak)(m),++l){k=r[A.aR(m[l])]
if(B.m===k)return A.N(a,h,c)
B.b.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.ak)(m),++l){i=A.aR(m[l])
if(c.R(i)){++j
B.b.l(h,c.h(0,i))}else{k=r[i]
if(B.m===k)return A.N(a,h,c)
B.b.l(h,k)}}if(j!==c.a)return A.N(a,h,c)}return p.apply(a,h)}},
e(a,b){if(a==null)J.cd(a)
throw A.b(A.bq(a,b))},
bq(a,b){var t,s="index"
if(!A.c4(b))return new A.a2(!0,b,s,null)
t=J.cd(a)
if(b<0||b>=t)return A.dO(b,t,a,s)
return A.dZ(b,s)},
b(a){return A.dl(new Error(),a)},
dl(a,b){var t
if(b==null)b=new A.bS()
a.dartException=b
t=A.fa
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fa(){return J.aV(this.dartException)},
al(a){throw A.b(a)},
dr(a,b){throw A.dl(b,a)},
ak(a){throw A.b(A.aZ(a))},
dn(a){if(a==null)return J.I(a)
if(typeof a=="object")return A.bb(a)
return J.I(a)},
dM(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bf().constructor.prototype):Object.create(new A.a3(null,null).constructor.prototype)
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
q=a}t.$S=A.dI(a0,i,h)
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
dI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dG)}throw A.b("Error in functionType of tearoff")},
dJ(a,b,c,d){var t=A.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cF(a,b,c,d){var t,s
if(c)return A.dL(a,b,d)
t=b.length
s=A.dJ(t,d,a,b)
return s},
dK(a,b,c,d){var t=A.cE,s=A.dH
switch(b?-1:a){case 0:throw A.b(new A.bQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dL(a,b,c){var t,s
if($.cC==null)$.cC=A.cB("interceptor")
if($.cD==null)$.cD=A.cB("receiver")
t=b.length
s=A.dK(t,c,a,b)
return s},
cu(a){return A.dM(a)},
dG(a,b){return A.aP(v.typeUniverse,A.aT(a.a),b)},
cE(a){return a.a},
dH(a){return a.b},
cB(a){var t,s,r,q=new A.a3("receiver","interceptor"),p=J.ch(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dE("Field name "+a+" not found."))},
f8(a){throw A.b(new A.bV(a))},
eY(a){return v.getIsolateTag(a)},
f5(a){var t,s,r,q,p,o=A.aR($.dj.$1(a)),n=$.c5[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c9[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.er($.dh.$2(a,o))
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
return p.i}if(q==="+")return A.dp(a,t)
if(q==="*")throw A.b(A.cX(o))
if(v.leafTags[o]===true){p=A.cb(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dp(a,t)},
dp(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cx(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cb(a){return J.cx(a,!1,null,!!a.$ia9)},
f7(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cb(t)
else return J.cx(t,c,null,null)},
f1(){if(!0===$.cw)return
$.cw=!0
A.f2()},
f2(){var t,s,r,q,p,o,n,m
$.c5=Object.create(null)
$.c9=Object.create(null)
A.f0()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dq.$1(p)
if(o!=null){n=A.f7(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f0(){var t,s,r,q,p,o,n=B.w()
n=A.ai(B.x,A.ai(B.y,A.ai(B.l,A.ai(B.l,A.ai(B.z,A.ai(B.A,A.ai(B.B(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dj=new A.c6(q)
$.dh=new A.c7(p)
$.dq=new A.c8(o)},
ai(a,b){return a(b)||b},
eT(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
an:function an(){},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(){},
aY:function aY(){},
bh:function bh(){},
bf:function bf(){},
a3:function a3(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a},
bQ:function bQ(a){this.a=a},
c0:function c0(){},
as:function as(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bC:function bC(a,b){this.a=a
this.b=b
this.c=null},
c6:function c6(a){this.a=a},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
T:function T(){},
a_:function a_(){},
ev(a){return a},
av(a){return new Float32Array(A.ev(a))},
c3(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bq(b,a))},
b9:function b9(){},
ab:function ab(){},
aw:function aw(){},
ax:function ax(){},
b7:function b7(){},
b8:function b8(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
aI:function aI(){},
cT(a,b){var t=b.c
return t==null?b.c=A.co(a,b.y,!0):t},
ck(a,b){var t=b.c
return t==null?b.c=A.aN(a,"cH",[b.y]):t},
cU(a){var t=a.x
if(t===6||t===7||t===8)return A.cU(a.y)
return t===12||t===13},
e0(a){return a.at},
aj(a){return A.bn(v.typeUniverse,a,!1)},
U(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.U(a,t,c,a0)
if(s===t)return b
return A.d7(a,s,!0)
case 7:t=b.y
s=A.U(a,t,c,a0)
if(s===t)return b
return A.co(a,s,!0)
case 8:t=b.y
s=A.U(a,t,c,a0)
if(s===t)return b
return A.d6(a,s,!0)
case 9:r=b.z
q=A.aS(a,r,c,a0)
if(q===r)return b
return A.aN(a,b.y,q)
case 10:p=b.y
o=A.U(a,p,c,a0)
n=b.z
m=A.aS(a,n,c,a0)
if(o===p&&m===n)return b
return A.cm(a,o,m)
case 12:l=b.y
k=A.U(a,l,c,a0)
j=b.z
i=A.eO(a,j,c,a0)
if(k===l&&i===j)return b
return A.d5(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aS(a,h,c,a0)
p=b.y
o=A.U(a,p,c,a0)
if(g===h&&o===p)return b
return A.cn(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.aX("Attempted to substitute unexpected RTI kind "+d))}},
aS(a,b,c,d){var t,s,r,q,p=b.length,o=A.c2(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.U(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eP(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c2(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.U(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eO(a,b,c,d){var t,s=b.a,r=A.aS(a,s,c,d),q=b.b,p=A.aS(a,q,c,d),o=b.c,n=A.eP(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bi()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
di(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.f_(s)
t=a.$S()
return t}return null},
f3(a,b){var t
if(A.cU(b))if(a instanceof A.J){t=A.di(a)
if(t!=null)return t}return A.aT(a)},
aT(a){if(a instanceof A.j)return A.E(a)
if(Array.isArray(a))return A.ah(a)
return A.cq(J.F(a))},
ah(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
E(a){var t=a.$ti
return t!=null?t:A.cq(a)},
cq(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eC(a,t)},
eC(a,b){var t=a instanceof A.J?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.em(v.typeUniverse,t.name)
b.$ccache=s
return s},
f_(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bn(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eZ(a){return A.a0(A.E(a))},
cs(a){var t
if(a instanceof A.T)return A.eV(a.$r,a.a3())
t=a instanceof A.J?A.di(a):null
if(t!=null)return t
if(u.R.b(a))return J.dC(a).a
if(Array.isArray(a))return A.ah(a)
return A.aT(a)},
a0(a){var t=a.w
return t==null?a.w=A.db(a):t},
db(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c1(a)
t=A.bn(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.db(t):s},
eV(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.e(r,0)
t=A.aP(v.typeUniverse,A.cs(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.e(r,s)
t=A.d8(v.typeUniverse,t,A.cs(r[s]))}return A.aP(v.typeUniverse,t,a)},
cy(a){return A.a0(A.bn(v.typeUniverse,a,!1))},
eB(a){var t,s,r,q,p,o=this
if(o===u.K)return A.D(o,a,A.eI)
if(!A.G(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.D(o,a,A.eM)
t=o.x
if(t===7)return A.D(o,a,A.ez)
if(t===1)return A.D(o,a,A.df)
s=t===6?o.y:o
t=s.x
if(t===8)return A.D(o,a,A.eE)
if(s===u.S)r=A.c4
else if(s===u.i||s===u.H)r=A.eH
else if(s===u.N)r=A.eK
else r=s===u.y?A.cr:null
if(r!=null)return A.D(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f4)){o.r="$i"+q
if(q==="i")return A.D(o,a,A.eG)
return A.D(o,a,A.eL)}}else if(t===11){p=A.eT(s.y,s.z)
return A.D(o,a,p==null?A.df:p)}return A.D(o,a,A.ex)},
D(a,b,c){a.b=c
return a.b(b)},
eA(a){var t,s=this,r=A.ew
if(!A.G(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.es
else if(s===u.K)r=A.eq
else{t=A.aU(s)
if(t)r=A.ey}s.a=r
return s.a(a)},
bp(a){var t,s=a.x
if(!A.G(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bp(a.y)))t=s===8&&A.bp(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ex(a){var t=this
if(a==null)return A.bp(t)
return A.k(v.typeUniverse,A.f3(a,t),null,t,null)},
ez(a){if(a==null)return!0
return this.y.b(a)},
eL(a){var t,s=this
if(a==null)return A.bp(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.F(a)[t]},
eG(a){var t,s=this
if(a==null)return A.bp(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.F(a)[t]},
ew(a){var t,s=this
if(a==null){t=A.aU(s)
if(t)return a}else if(s.b(a))return a
A.dc(a,s)},
ey(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dc(a,t)},
dc(a,b){throw A.b(A.ec(A.cY(a,A.u(b,null))))},
cY(a,b){return A.a4(a)+": type '"+A.u(A.cs(a),null)+"' is not a subtype of type '"+b+"'"},
ec(a){return new A.bm("TypeError: "+a)},
t(a,b){return new A.bm("TypeError: "+A.cY(a,b))},
eE(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.ck(v.typeUniverse,s).b(a)},
eI(a){return a!=null},
eq(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
eM(a){return!0},
es(a){return a},
df(a){return!1},
cr(a){return!0===a||!1===a},
fg(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
fi(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
fh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
cp(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
c4(a){return typeof a=="number"&&Math.floor(a)===a},
bo(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
fm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
fl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
eH(a){return typeof a=="number"},
eo(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
fn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
ep(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
eK(a){return typeof a=="string"},
aR(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
fo(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
er(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
dg(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
eN(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dg(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dd(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.f([],u.W)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.l(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.e(a4,k)
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
if(m===9){q=A.eQ(a.y)
p=a.z
return p.length>0?q+("<"+A.dg(p,b)+">"):q}if(m===11)return A.eN(a,b)
if(m===12)return A.dd(a,b,null)
if(m===13)return A.dd(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.e(b,o)
return b[o]}return"?"},
eQ(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
en(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
em(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bn(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aO(a,5,"#")
r=A.c2(t)
for(q=0;q<t;++q)r[q]=s
p=A.aN(a,b,r)
o[b]=p
return p}else return n},
el(a,b){return A.d9(a.tR,b)},
ek(a,b){return A.d9(a.eT,b)},
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
C(a,b){b.a=A.eA
b.b=A.eB
return b},
aO(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.y(null,null)
t.x=b
t.at=c
s=A.C(a,t)
a.eC.set(c,s)
return s},
d7(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eh(a,b,s,c)
a.eC.set(s,t)
return t},
eh(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.G(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.y(null,null)
r.x=6
r.y=b
r.at=c
return A.C(a,r)},
co(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eg(a,b,s,c)
a.eC.set(s,t)
return t},
eg(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.G(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aU(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aU(r.y))return r
else return A.cT(a,b)}}q=new A.y(null,null)
q.x=7
q.y=b
q.at=c
return A.C(a,q)},
d6(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ee(a,b,s,c)
a.eC.set(s,t)
return t},
ee(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.G(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aN(a,"cH",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.y(null,null)
r.x=8
r.y=b
r.at=c
return A.C(a,r)},
ei(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=14
t.y=b
t.at=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
aM(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
ed(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aN(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.y(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.C(a,s)
a.eC.set(q,r)
return r},
cm(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.C(a,p)
a.eC.set(r,o)
return o},
ej(a,b,c){var t,s,r="+"+(b+"("+A.aM(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
d5(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aM(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aM(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ed(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.y(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.C(a,q)
a.eC.set(s,p)
return p},
cn(a,b,c,d){var t,s=b.at+("<"+A.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ef(a,b,c,s,d)
a.eC.set(s,t)
return t},
ef(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c2(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.U(a,b,s,0)
n=A.aS(a,c,s,0)
return A.cn(a,o,n,c!==n)}}m=new A.y(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.C(a,m)},
d1(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d3(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.e7(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.d2(a,s,m,l,!1)
else if(r===46)s=A.d2(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.S(a.u,a.e,l.pop()))
break
case 94:l.push(A.ei(a.u,l.pop()))
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
case 62:A.e9(a,l)
break
case 38:A.e8(a,l)
break
case 42:q=a.u
l.push(A.d7(q,A.S(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.co(q,A.S(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.d6(q,A.S(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.e6(a,l)
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
A.eb(a.u,a.e,p)
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
return A.S(a.u,a.e,n)},
e7(a,b,c,d){var t,s,r=b-48
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
o=A.en(t,p.y)[q]
if(o==null)A.al('No "'+q+'" in "'+A.e0(p)+'"')
d.push(A.aP(t,p,o))}else d.push(q)
return n},
e9(a,b){var t,s=a.u,r=A.d0(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aN(s,q,r))
else{t=A.S(s,a.e,q)
switch(t.x){case 12:b.push(A.cn(s,t,r,a.n))
break
default:b.push(A.cm(s,t,r))
break}}},
e6(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
q=A.S(n,a.e,m)
p=new A.bi()
p.a=r
p.b=t
p.c=s
b.push(A.d5(n,q,p))
return
case-4:b.push(A.ej(n,b.pop(),r))
return
default:throw A.b(A.aX("Unexpected state under `()`: "+A.m(m)))}},
e8(a,b){var t=b.pop()
if(0===t){b.push(A.aO(a.u,1,"0&"))
return}if(1===t){b.push(A.aO(a.u,4,"1&"))
return}throw A.b(A.aX("Unexpected extended operation "+A.m(t)))},
d0(a,b){var t=b.splice(a.p)
A.d4(a.u,a.e,t)
a.p=b.pop()
return t},
S(a,b,c){if(typeof c=="string")return A.aN(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ea(a,b,c)}else return c},
d4(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.S(a,b,c[t])},
eb(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.S(a,b,c[t])},
ea(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.aX("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.aX("Bad index "+c+" for "+b.i(0)))},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.G(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.G(b))return!1
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
if(q===6){t=A.cT(a,d)
return A.k(a,b,c,t,e)}if(s===8){if(!A.k(a,b.y,c,d,e))return!1
return A.k(a,A.ck(a,b),c,d,e)}if(s===7){t=A.k(a,u.P,c,d,e)
return t&&A.k(a,b.y,c,d,e)}if(q===8){if(A.k(a,b,c,d.y,e))return!0
return A.k(a,b,c,A.ck(a,d),e)}if(q===7){t=A.k(a,b,c,u.P,e)
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
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.de(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.de(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eF(a,b,c,d,e)}if(p&&q===11)return A.eJ(a,b,c,d,e)
return!1},
de(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eF(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
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
if(!A.k(a,s,d,r,f))return!1}return!0},
eJ(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
aU(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.G(a))if(s!==7)if(!(s===6&&A.aU(a.y)))t=s===8&&A.aU(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f4(a){var t
if(!A.G(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
G(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
d9(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c2(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bi:function bi(){this.c=this.b=this.a=null},
c1:function c1(a){this.a=a},
bX:function bX(){},
bm:function bm(a){this.a=a},
dN(a){return new A.aE(a.n("aE<0>"))},
cZ(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bD(a){var t,s={}
if(A.dm(a))return"{...}"
t=new A.aB("")
try{B.b.l($.H,a)
t.a+="{"
s.a=!0
a.E(0,new A.bE(s,t))
t.a+="}"}finally{if(0>=$.H.length)return A.e($.H,-1)
$.H.pop()}s=t.a
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
A:function A(){},
au:function au(){},
bE:function bE(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
aa:function aa(){},
aD:function aD(){},
aA:function aA(){},
aL:function aL(){},
ag:function ag(){},
at(a,b,c){var t,s,r
if(a>4294967295)A.al(A.bd(a,0,4294967295,"length",null))
t=J.cL(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
cN(a,b,c){var t,s,r=A.f([],c.n("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.ak)(a),++s)B.b.l(r,c.a(a[s]))
if(b)return r
return J.ch(r,c)},
cj(a,b){var t=A.dT(a,b)
return t},
dT(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.n("h<0>"))
t=A.f([],b.n("h<0>"))
for(s=J.cA(a);s.F();)B.b.l(t,s.gD())
return t},
e4(a,b,c){var t=J.cA(b)
if(!t.F())return a
if(c.length===0){do a+=A.m(t.gD())
while(t.F())}else{a+=A.m(t.gD())
for(;t.F();)a=a+c+A.m(t.gD())}return a},
cO(a,b){return new A.bF(a,b.gaA(),b.gaC(),b.gaB())},
a4(a){if(typeof a=="number"||A.cr(a)||a==null)return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cS(a)},
aX(a){return new A.bs(a)},
dE(a){return new A.a2(!1,null,null,a)},
dF(a,b,c){return new A.a2(!0,a,b,c)},
dZ(a,b){return new A.bc(null,null,!0,a,b,"Value not in range")},
bd(a,b,c,d,e){return new A.bc(b,c,!0,a,d,"Invalid value")},
e_(a,b,c){if(0>a||a>c)throw A.b(A.bd(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bd(b,a,c,"end",null))
return b}return c},
dO(a,b,c,d){return new A.bz(b,!0,a,d,"Index out of range")},
Q(a){return new A.bU(a)},
cX(a){return new A.bT(a)},
aZ(a){return new A.bu(a)},
cG(a,b,c){return new A.by(a,b,c)},
cg(a,b,c){var t,s
if(A.dm(a))return b+"..."+c
t=new A.aB(b)
B.b.l($.H,a)
try{s=t
s.a=A.e4(s.a,a,", ")}finally{if(0>=$.H.length)return A.e($.H,-1)
$.H.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dU(a,b,c,d){var t
if(B.h===c)return A.cV(B.a.gk(a),J.I(b),$.cc())
if(B.h===d){t=B.a.gk(a)
b=J.I(b)
c=J.I(c)
return A.cl(A.O(A.O(A.O($.cc(),t),b),c))}t=B.a.gk(a)
b=J.I(b)
c=J.I(c)
d=J.I(d)
d=A.cl(A.O(A.O(A.O(A.O($.cc(),t),b),c),d))
return d},
bG:function bG(a,b){this.a=a
this.b=b},
bW:function bW(){},
bw:function bw(){},
bs:function bs(a){this.a=a},
bS:function bS(){},
a2:function a2(a,b,c,d){var _=this
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
bz:function bz(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a){this.a=a},
bT:function bT(a){this.a=a},
bu:function bu(a){this.a=a},
bM:function bM(){},
bY:function bY(a){this.a=a},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(){},
j:function j(){},
aB:function aB(a){this.a=a},
bv:function bv(){},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(){},
V(a,b){return new A.a7(a*2-2*b,a+b)},
a7:function a7(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
B:function B(){},
ac:function ac(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=!0},
P:function P(a){this.b=a},
b6:function b6(){},
bg:function bg(){},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
f6(){self.jsregionworker=A.eR(new A.ca(),u.e)},
ca:function ca(){},
bP:function bP(a){this.a=a
this.b=$},
cI(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.af(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cG("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eU(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.t(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cG("Not radix digit",a,t))}if(s)return A.a6(0,0,0,q,p,o)
return new A.v(q&4194303,p&4194303,o&1048575)},
cf(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a6(0,0,0,q,p,o):new A.v(q,p,o)},
bA(a){if(a instanceof A.v)return a
else if(A.c4(a))return A.cf(a)
throw A.b(A.dF(a,"other","not an int, Int32 or Int64"))},
dR(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.e(B.p,a)
r=B.p[a]
q=""
p=""
o=""
while(!0){if(!!(t===0&&s===0))break
n=B.a.B(t,r)
s+=t-n*r<<10>>>0
m=B.a.B(s,r)
d+=s-m*r<<10>>>0
l=B.a.B(d,r)
c+=d-l*r<<10>>>0
k=B.a.B(c,r)
b+=c-k*r<<10>>>0
j=B.a.B(b,r)
i=B.d.ag(B.a.ad(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.ad(h,a))+q+p+o},
a6(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.t(t,22)&1)
return new A.v(t&4194303,s&4194303,c-f-(B.a.t(s,22)&1)&1048575)},
dP(a,b,c){var t,s,r,q,p=A.bA(b)
if(p.ga9())throw A.b(A.Q("Division by zero"))
if(a.ga9())return B.n
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a6(0,0,0,a.a,a.b,t)
if(q)p=A.a6(0,0,0,p.a,p.b,r)
return A.dQ(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dQ(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.a.B(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.a.B(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.a.B(q,a4)
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
c=a1-B.c.m(f-e*4194304)-(B.a.t(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.m(k*a4+j*a5+i*a6+e)-(B.a.t(c,22)&1)&1048575
while(!0){if(m<524288)if(m<=a6)if(m===a6)if(n<=a5)b=n===a5&&o>=a4
else b=!0
else b=!1
else b=!0
else b=!0
if(!b)break
a=(m&524288)===0?1:-1
q=o-a*a4
s=n-a*(a5+(B.a.t(q,22)&1))
o=q&4194303
n=s&4194303
m=m-a*(a6+(B.a.t(s,22)&1))&1048575
q=p+a
s=r+a*(B.a.t(q,22)&1)
p=q&4194303
r=s&4194303
t=t+a*(B.a.t(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a6(0,0,0,p,r,t)
return new A.v(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.v(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.n
else return A.a6(a4,a5,a6,o,n,m)
else return A.a6(0,0,0,o,n,m)},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(a,b){this.a=a
this.b=b},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az(a){var t=new A.bI(new Int16Array(2048),A.at(2048,B.D,u.q),A.at(2048,B.a2,u.h),A.at(2048,B.aR,u.U))
t.ai(a)
return t},
dV(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.R(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.R(l,k,j,1)
A.R(p,r,q,0)
A.R(s,o,q,0)
A.R(s,r,n,0)
A.R(s+(p^1),k,j,1)
A.R(l,r+(o^1),j,1)
A.R(l,k,q+(n^1),1)
B.b.j($.dt(),t,m)}for(t=0;t<16;++t)B.b.j($.du(),t,A.d_(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.f([],u.f)
for(i=0;i<24;++i){h=B.dq[i]
l.push(new A.d(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.J(t,24)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bJ,l[k])}l=A.f([],u.Y)
for(i=0;i<48;++i){h=B.ds[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.J(t,48)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bK,l[k])}l=A.f([],u.J)
for(i=0;i<160;++i){h=B.dr[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.J(t,160)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bL,l[k])}},
R(a,b,c,d){return new A.bk()},
d_(a,b,c,d){var t=new A.bl(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(){},
bl:function bl(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
f9(a){A.dr(new A.b4("Field '"+a+"' has been assigned during initialization."),new Error())},
am(){A.dr(new A.b4("Field '' has not been initialized."),new Error())},
eu(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.et,a)
t[$.cz()]=a
a.$dart_jsFunction=t
return t},
et(a,b){u.j.a(b)
u.Z.a(a)
return A.dY(a,b,null)},
eR(a,b){if(typeof a=="function")return a
else return b.a(A.eu(a))},
cW(a,b,c,d){var t,s,r,q,p,o
for(t=0;t<12;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.G(a)
r=s.a
p=c.a
o=c.b
o=new A.a7(p*2-2*o,p+o)
p=new A.aC(r,o,q,1)
p.f=new A.bt()
r=A.eS(r,o,q,1)
p.d=r
return p}}throw A.b(new A.bY("No tile type found for elevation: "+A.m(a)+", moisture: "+A.m(b)+". Fix the rules!"))},
e5(a){var t=a.c,s=a.e,r=a.b.p(0,A.V(t,t)).p(0,A.V(s,s)).p(0,A.V(0,s)),q=r.p(0,A.V(s,0)),p=new Float32Array(4)
p[0]=-0.025*s
p[1]=0
p[2]=r.a
p[3]=q.b
return new A.b_(p,A.dk(a.a))},
eS(a,b,c,d){var t=b.p(0,A.V(c,c)).p(0,A.V(d,d)).p(0,A.V(0,d)),s=t.p(0,A.V(d,0)),r=new Float32Array(4)
r[0]=-0.025*d
r[1]=0
r[2]=t.a
r[3]=s.b
return new A.b_(r,A.dk(a))},
fb(a){var t,s,r,q,p,o,n,m,l,k,j,i=A.dN(u.N)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.ak)(a),++s){q=a[s]
p=q.b.V()
o=B.c.m(q.c)
i.l(0,""+B.c.m(p.a)+","+B.c.m(p.b)+","+o)}for(s=0;s<a.length;a.length===r||(0,A.ak)(a),++s){q=a[s]
p=q.b.V()
n=B.c.m(p.a)
m=B.c.m(p.b)
l=B.c.m(q.c)
t=""+n+","
k=""+l
j=""+m
q.ae(!(i.P(0,""+(n-1)+","+j+","+k)&&i.P(0,t+j+","+(l+1))&&i.P(0,t+(m-1)+","+k)))}},
dk(a){switch(a){case B.dv:return $.dx()
case B.i:return $.dw()
case B.e:return $.dv()
case B.f:return $.dy()
case B.u:return $.dA()
case B.v:return $.dz()}},
eU(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cx(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cw==null){A.f1()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.cX("Return interceptor for "+A.m(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bZ
if(p==null)p=$.bZ=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f5(a)
if(q!=null)return q
if(typeof a=="function")return B.dn
t=Object.getPrototypeOf(a)
if(t==null)return B.t
if(t===Object.prototype)return B.t
if(typeof r=="function"){p=$.bZ
if(p==null)p=$.bZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
cK(a,b){if(a<0||a>4294967295)throw A.b(A.bd(a,0,4294967295,"length",null))
return J.cL(new Array(a),b)},
cL(a,b){return J.ch(A.f(a,b.n("h<0>")),b)},
ch(a,b){a.fixed$length=Array
return a},
cM(a){a.fixed$length=Array
a.immutable$list=Array
return a},
dS(a,b){var t=u.s
return J.dB(t.a(a),t.a(b))},
F(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aq.prototype
return J.b3.prototype}if(typeof a=="string")return J.W.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.b1.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
br(a){if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
eW(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.j)return a
return J.cv(a)},
eX(a){if(typeof a=="number")return J.a8.prototype
if(typeof a=="string")return J.W.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.af.prototype
return a},
a1(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).u(a,b)},
dB(a,b){return J.eX(a).I(a,b)},
I(a){return J.F(a).gk(a)},
cA(a){return J.eW(a).gU(a)},
cd(a){return J.br(a).gq(a)},
dC(a){return J.F(a).gA(a)},
dD(a,b){return J.F(a).ab(a,b)},
aV(a){return J.F(a).i(a)},
b0:function b0(){},
b1:function b1(){},
ar:function ar(){},
o:function o(){},
X:function X(){},
ba:function ba(){},
af:function af(){},
L:function L(){},
h:function h(a){this.$ti=a},
bB:function bB(a){this.$ti=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(){},
aq:function aq(){},
b3:function b3(){},
W:function W(){}},B={}
var w=[A,J,B]
var $={}
A.ci.prototype={}
J.b0.prototype={
u(a,b){return a===b},
gk(a){return A.bb(a)},
i(a){return"Instance of '"+A.bO(a)+"'"},
ab(a,b){throw A.b(A.cO(a,u.o.a(b)))},
gA(a){return A.a0(A.cq(this))}}
J.b1.prototype={
i(a){return String(a)},
gk(a){return a?519018:218159},
gA(a){return A.a0(u.y)},
$iw:1,
$ict:1}
J.ar.prototype={
u(a,b){return null==b},
i(a){return"null"},
gk(a){return 0},
$iw:1}
J.o.prototype={}
J.X.prototype={
gk(a){return 0},
i(a){return String(a)}}
J.ba.prototype={}
J.af.prototype={}
J.L.prototype={
i(a){var t=a[$.cz()]
if(t==null)return this.ah(a)
return"JavaScript function for "+J.aV(t)},
$ia5:1}
J.h.prototype={
l(a,b){A.ah(a).c.a(b)
if(!!a.fixed$length)A.al(A.Q("add"))
a.push(b)},
a6(a,b){A.ah(a).n("q<1>").a(b)
if(!!a.fixed$length)A.al(A.Q("addAll"))
this.ak(a,b)
return},
ak(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.aZ(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.cg(a,"[","]")},
gU(a){return new J.aW(a,a.length,A.ah(a).n("aW<1>"))},
gk(a){return A.bb(a)},
gq(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.bq(a,b))
return a[b]},
j(a,b,c){A.ah(a).c.a(c)
if(!!a.immutable$list)A.al(A.Q("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.bq(a,b))
a[b]=c},
$iq:1,
$ii:1}
J.bB.prototype={}
J.aW.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.ak(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa0(null)
return!1}s.sa0(r[t]);++s.c
return!0},
sa0(a){this.d=this.$ti.n("1?").a(a)}}
J.a8.prototype={
I(a,b){var t
A.eo(b)
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
return t+0}throw A.b(A.Q(""+a+".toInt()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.Q(""+a+".floor()"))},
aD(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ad(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bd(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.e(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.al(A.Q("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.e(q,1)
t=q[1]
if(3>=s)return A.e(q,3)
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
B(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.a4(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.a4(a,b)},
a4(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.Q("Result of truncating division is "+A.m(t)+": "+A.m(a)+" ~/ "+b))},
t(a,b){var t
if(a>0)t=this.av(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
av(a,b){return b>31?0:a>>>b},
gA(a){return A.a0(u.H)},
$ip:1,
$il:1,
$ix:1}
J.aq.prototype={
gA(a){return A.a0(u.S)},
$iw:1,
$in:1}
J.b3.prototype={
gA(a){return A.a0(u.i)},
$iw:1}
J.W.prototype={
p(a,b){return a+b},
af(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.e_(b,c,a.length))},
ag(a,b){return this.K(a,b,null)},
W(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.C)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
I(a,b){var t
A.aR(b)
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
gA(a){return A.a0(u.N)},
gq(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.bq(a,b))
return a[b]},
$iw:1,
$ip:1,
$icQ:1,
$iz:1}
A.b4.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bR.prototype={}
A.b5.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.br(r),p=q.gq(r)
if(s.b!==p)throw A.b(A.aZ(r))
t=s.c
if(t>=p){s.sX(null)
return!1}s.sX(q.h(r,t));++s.c
return!0},
sX(a){this.d=this.$ti.n("1?").a(a)}}
A.K.prototype={}
A.ad.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
u(a,b){if(b==null)return!1
return b instanceof A.ad&&this.a===b.a},
$iae:1}
A.aJ.prototype={$r:"+(1,2)",$s:1}
A.aK.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.ao.prototype={}
A.an.prototype={
i(a){return A.bD(this)},
$iM:1}
A.ap.prototype={
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
if(p.c===1)return B.q
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.q
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.e(t,q)
r.push(t[q])}return J.cM(r)},
gaB(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.r
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.r
p=new A.as(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.e(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.e(r,m)
p.j(0,new A.ad(n),r[m])}return new A.ao(p,u.a)},
$icJ:1}
A.bN.prototype={
$2(a,b){var t
A.aR(a)
t=this.a
t.b=t.b+"$"+a
B.b.l(this.b,a)
B.b.l(this.c,b);++t.a},
$S:0}
A.J.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ds(s==null?"unknown":s)+"'"},
$ia5:1,
gaE(){return this},
$C:"$1",
$R:1,
$D:null}
A.aY.prototype={$C:"$2",$R:2}
A.bh.prototype={}
A.bf.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ds(t)+"'"}}
A.a3.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dn(this.a)^A.bb(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bO(this.a)+"'")}}
A.bV.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bQ.prototype={
i(a){return"RuntimeError: "+this.a}}
A.c0.prototype={}
A.as.prototype={
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
t=r[this.a7(a)]
s=this.a8(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r,q,p,o,n=this,m=A.E(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.Y(t==null?n.b=n.N():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.Y(s==null?n.c=n.N():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.N()
q=n.a7(b)
p=r[q]
if(p==null)r[q]=[n.O(b,c)]
else{o=n.a8(p,b)
if(o>=0)p[o].b=c
else p.push(n.O(b,c))}}},
E(a,b){var t,s,r=this
A.E(r).n("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.aZ(r))
t=t.c}},
Y(a,b,c){var t,s=A.E(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.O(b,c)
else t.b=c},
O(a,b){var t=this,s=A.E(t),r=new A.bC(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a7(a){return J.I(a)&1073741823},
a8(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a1(a[s].a,b))return s
return-1},
i(a){return A.bD(this)},
N(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bC.prototype={}
A.c6.prototype={
$1(a){return this.a(a)},
$S:1}
A.c7.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.c8.prototype={
$1(a){return this.a(A.aR(a))},
$S:3}
A.T.prototype={
i(a){return this.a5(!1)},
a5(a){var t,s,r,q,p,o=this.au(),n=this.a3(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.e(n,r)
p=n[r]
m=a?m+A.cS(p):m+A.m(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
au(){var t,s=this.$s
for(;$.c_.length<=s;)B.b.l($.c_,null)
t=$.c_[s]
if(t==null){t=this.ao()
B.b.j($.c_,s,t)}return t},
ao(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.f(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.j(l,r,s[t])}}return J.cM(A.cN(l,!1,u.K))}}
A.a_.prototype={
a3(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.a_&&this.$s===b.$s&&J.a1(this.a,b.a)&&J.a1(this.b,b.b)},
gk(a){return A.dU(this.$s,this.a,this.b,B.h)}}
A.b9.prototype={}
A.ab.prototype={
gq(a){return a.length},
$ia9:1}
A.aw.prototype={
h(a,b){A.c3(b,a,a.length)
return a[b]},
j(a,b,c){A.cp(c)
A.c3(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.ax.prototype={
j(a,b,c){A.bo(c)
A.c3(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.b7.prototype={
gA(a){return B.dw},
$iw:1,
$ibx:1}
A.b8.prototype={
gA(a){return B.dx},
h(a,b){A.c3(b,a,a.length)
return a[b]},
$iw:1,
$ice:1}
A.aF.prototype={}
A.aG.prototype={}
A.aH.prototype={}
A.aI.prototype={}
A.y.prototype={
n(a){return A.aP(v.typeUniverse,this,a)},
aF(a){return A.d8(v.typeUniverse,this,a)}}
A.bi.prototype={}
A.c1.prototype={
i(a){return A.u(this.a,null)}}
A.bX.prototype={
i(a){return this.a}}
A.bm.prototype={}
A.aE.prototype={
gU(a){return new A.bj(this,this.an(),A.E(this).n("bj<1>"))},
gq(a){return this.a},
P(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.ap(b)
return s}},
ap(a){var t=this.d
if(t==null)return!1
return this.a1(t[this.a_(a)],a)>=0},
l(a,b){var t,s,r=this
A.E(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.al(t==null?r.b=A.cZ():t,b)}else{s=r.aj(b)
return s}},
aj(a){var t,s,r,q=this
A.E(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.cZ()
s=q.a_(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a1(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
an(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.at(j.a,null,u.z)
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
al(a,b){A.E(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a_(a){return B.d.gk(a)&1073741823},
a1(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a1(a[s],b))return s
return-1}}
A.bj.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.aZ(q))
else if(r>=s.length){t.sZ(null)
return!1}else{t.sZ(s[r])
t.c=r+1
return!0}},
sZ(a){this.d=this.$ti.n("1?").a(a)}}
A.A.prototype={
gU(a){return new A.b5(a,this.gq(a),A.aT(a).n("b5<A.E>"))},
i(a){return A.cg(a,"[","]")}}
A.au.prototype={
gq(a){return this.a},
i(a){return A.bD(this)},
$iM:1}
A.bE.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.m(a)
s.a=t+": "
s.a+=A.m(b)},
$S:4}
A.aQ.prototype={}
A.aa.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.n("~(1,2)").a(b))},
gq(a){return this.a.a},
i(a){return A.bD(this.a)},
$iM:1}
A.aD.prototype={}
A.aA.prototype={
i(a){return A.cg(this,"{","}")},
$iq:1}
A.aL.prototype={}
A.ag.prototype={}
A.bG.prototype={
$2(a,b){var t,s,r
u.m.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a4(b)
s.a=", "},
$S:5}
A.bW.prototype={
i(a){return this.ar()}}
A.bw.prototype={}
A.bs.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a4(t)
return"Assertion failed"}}
A.bS.prototype={}
A.a2.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gM()+r+p
if(!t.a)return o
return o+t.gL()+": "+A.a4(t.gS())},
gS(){return this.b}}
A.bc.prototype={
gS(){return A.ep(this.b)},
gM(){return"RangeError"},
gL(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.bz.prototype={
gS(){return A.bo(this.b)},
gM(){return"RangeError"},
gL(){if(A.bo(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bF.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aB("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a4(o)
k.a=", "}l.d.E(0,new A.bG(k,j))
n=A.a4(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bU.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bT.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bu.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a4(t)+"."}}
A.bM.prototype={
i(a){return"Out of Memory"}}
A.bY.prototype={
i(a){return"Exception: "+this.a}}
A.by.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.K(g,0,75)+"..."
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
k=""}return i+l+B.d.K(g,m,n)+k+"\n"+B.d.W(" ",h-m+l.length)+"^\n"}}
A.ay.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
i(a){return"null"}}
A.j.prototype={$ij:1,
u(a,b){return this===b},
gk(a){return A.bb(this)},
i(a){return"Instance of '"+A.bO(this)+"'"},
ab(a,b){throw A.b(A.cO(this,u.o.a(b)))},
gA(a){return A.eZ(this)},
toString(){return this.i(this)}}
A.aB.prototype={
gq(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bv.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.Y.prototype={
i(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
u(a,b){if(b==null)return!1
return b instanceof A.Y&&this.a===b.a&&this.b===b.b},
gk(a){return A.cV(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.bt.prototype={}
A.a7.prototype={
p(a,b){return new A.a7(this.a+b.a,this.b+b.b)},
V(){var t=this.b,s=t/2-this.a/4
return new A.Y(t-s,s,u.O)},
u(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a7&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
i(a){return""+B.c.m(this.a)+", "+B.c.m(this.b)}}
A.b_.prototype={}
A.B.prototype={
I(a,b){var t,s,r,q
u.k.a(b)
t=this.aa()
s=b.aa()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$ip:1}
A.ac.prototype={}
A.aC.prototype={
aa(){var t=this.b.V()
return new A.aK(-1*(t.a+t.b+this.e),this.c)},
ae(a){var t=this
if(t.r===a)return
t.r=a
t.d=A.e5(t)}}
A.P.prototype={
ar(){return"TileType."+this.b}}
A.b6.prototype={}
A.bg.prototype={
ac(){var t=null
return A.f([new A.r(B.f,0,-0.2),new A.r(B.e,0,0),new A.r(B.v,0,t),new A.r(B.f,10,-0.2),new A.r(B.i,10,0.3),new A.r(B.e,10,t),new A.r(B.f,15,-0.2),new A.r(B.e,15,0.4),new A.r(B.i,15,t),new A.r(B.f,20,0.5),new A.r(B.e,20,0.6),new A.r(B.u,t,t)],u.c)}}
A.r.prototype={}
A.bH.prototype={
aw(a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a2(a3,a4),a2=a0.a2(a3,a4)
for(t=a1.length,s=a2.length,r=0;r<a3;++r){q=a5+r
for(p=q*0.002,o=q*0.008,n=q*0.032,m=0;m<a3;++m){l=a6+m
k=a0.a
k===$&&A.am()
j=l*0.002
i=0.366025403784439*(p+j)
h=p+i
g=j+i
f=k.C(h,g)
k=a0.b
k===$&&A.am()
j=l*0.008
i=0.366025403784439*(o+j)
e=o+i
d=j+i
k=k.C(e,d)
j=a0.c
j===$&&A.am()
c=l*0.032
i=0.366025403784439*(n+c)
b=n+i
a=c+i
j=j.C(b,a)
if(!(r<t))return A.e(a1,r)
B.b.j(a1[r],m,B.c.aD(((f+0.5*k+0.25*j)/1.75-0.6)*30))
j=a0.d
j===$&&A.am()
j=j.C(h,g)
k=a0.e
k===$&&A.am()
k=k.C(e,d)
c=a0.f
c===$&&A.am()
c=c.C(b,a)
if(!(r<s))return A.e(a2,r)
B.b.j(a2[r],m,(j+0.5*k+0.25*c)/1.75)}}return new A.aJ(a1,a2)},
a2(a,b){var t,s,r,q,p=J.cK(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cK(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.ca.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i=new A.bg(),h=new A.bP(i),g=J.br(a),f=A.bo(g.h(a,0)),e=A.bo(g.h(a,1)),d=A.cp(g.h(a,2)),c=A.cp(g.h(a,3))
g=B.c.m(d)
t=B.c.m(c)
s=new A.bH(i)
s.a=A.az(2)
s.b=A.az(3)
s.c=A.az(4)
s.d=A.az(12)
s.e=A.az(13)
s.f=A.az(14)
h.b=s
r=s.aw(f,e,g,t)
q=A.cN(h.aq(g,t,r.a,r.b),!0,u.t)
A.fb(q)
if(!!q.immutable$list)A.al(A.Q("sort"))
A.e3(q,J.eD(),A.ah(q).c)
p=A.f([],u.l)
for(i=q.length,g=u.V,o=0;o<q.length;q.length===i||(0,A.ak)(q),++o){n=q[o]
t=n.a
m=n.b
l=n.c
k=n.e
j=n.d
j===$&&A.am()
B.b.l(p,["Tile",t.b,m.a,m.b,l,k,A.f([j.a,j.b],g),n.r])}return p},
$S:6}
A.bP.prototype={
aq(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.f([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.e(d,o)
m=d[o]
for(l=m.length,k=a+o,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.e(n,i)
h=n[i]
if(h<=0){g=B.c.G(h)
if(!(i<l))return A.e(m,i)
B.b.l(t,A.cW(g,m[i],new A.Y(k,b+i,r),q.ac()))}else for(f=b+i;h>0;){g=B.c.G(h)
if(!(i<l))return A.e(m,i)
B.b.l(t,A.cW(g,m[i],new A.Y(k,f,r),q.ac()));--h}}}return t}}
A.v.prototype={
p(a,b){var t=A.bA(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.v(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
u(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.v)t=b
else if(A.c4(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cf(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
I(a,b){return this.am(b)},
am(a){var t=A.bA(a),s=this.c,r=s>>>19,q=t.c
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
ga9(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
m(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
i(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.a.t(q,22)&1)
s=p&4194303
o=0-o-(B.a.t(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.dR(10,q,p,o,r)},
$ip:1}
A.d.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bI.prototype={
ai(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cP){A.dV()
$.cP=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.e(t,s)
t[s]=s}r=A.cf(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cI("6364136223846793005",10,!0)
m.toString
l=A.bA(m)
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
r=new A.v(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).p(0,m)
m=s+1
a7=A.dP(r.p(0,31),m,3).m(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.e(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bJ.length))return A.e($.bJ,m)
B.b.j(p,s,$.bJ[m])
m=q[s]
if(!(m>=0&&m<$.bK.length))return A.e($.bK,m)
B.b.j(o,s,$.bK[m])
m=q[s]
if(!(m>=0&&m<$.bL.length))return A.e($.bL,m)
B.b.j(n,s,$.bL[m])
t[a7]=t[s]}},
C(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.G(a),i=B.c.G(b),h=a-j,g=b-i,f=B.c.m((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.e(B.o,p)
o=B.o[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.e(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.Z.prototype={}
A.bk.prototype={}
A.bl.prototype={};(function aliases(){var t=J.X.prototype
t.ah=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eD","dS",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.ci,J.b0,J.aW,A.bw,A.bR,A.b5,A.K,A.ad,A.T,A.aa,A.an,A.b2,A.J,A.c0,A.au,A.bC,A.y,A.bi,A.c1,A.aA,A.bj,A.A,A.aQ,A.bW,A.bM,A.bY,A.by,A.ay,A.aB,A.Y,A.bt,A.a7,A.b_,A.B,A.b6,A.r,A.bH,A.bP,A.v,A.d,A.c,A.a,A.bI,A.Z,A.bk,A.bl])
r(J.b0,[J.b1,J.ar,J.o,J.a8,J.W])
r(J.o,[J.X,J.h,A.b9,A.bv])
r(J.X,[J.ba,J.af,J.L])
s(J.bB,J.h)
r(J.a8,[J.aq,J.b3])
r(A.bw,[A.b4,A.bV,A.bQ,A.bX,A.bs,A.bS,A.a2,A.bF,A.bU,A.bT,A.bu])
s(A.a_,A.T)
r(A.a_,[A.aJ,A.aK])
s(A.ag,A.aa)
s(A.aD,A.ag)
s(A.ao,A.aD)
s(A.ap,A.an)
r(A.J,[A.aY,A.bh,A.c6,A.c8,A.ca])
r(A.aY,[A.bN,A.c7,A.bE,A.bG])
r(A.bh,[A.bf,A.a3])
s(A.as,A.au)
s(A.ab,A.b9)
r(A.ab,[A.aF,A.aH])
s(A.aG,A.aF)
s(A.aw,A.aG)
s(A.aI,A.aH)
s(A.ax,A.aI)
s(A.b7,A.aw)
s(A.b8,A.ax)
s(A.bm,A.bX)
s(A.aL,A.aA)
s(A.aE,A.aL)
r(A.a2,[A.bc,A.bz])
s(A.ac,A.B)
s(A.aC,A.ac)
s(A.P,A.bW)
s(A.bg,A.b6)
t(A.aF,A.A)
t(A.aG,A.K)
t(A.aH,A.A)
t(A.aI,A.K)
t(A.ag,A.aQ)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",l:"double",x:"num",z:"String",ct:"bool",ay:"Null",i:"List"},mangledNames:{},types:["~(z,@)","@(@)","@(@,z)","@(z)","~(j?,j?)","~(ae,@)","i<i<@>?>(@)","n(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aJ&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aK&&a.b(c.a)&&b.b(c.b)}}
A.el(v.typeUniverse,JSON.parse('{"ba":"X","af":"X","L":"X","b1":{"ct":[],"w":[]},"ar":{"w":[]},"h":{"i":["1"],"q":["1"]},"bB":{"h":["1"],"i":["1"],"q":["1"]},"a8":{"l":[],"x":[],"p":["x"]},"aq":{"l":[],"n":[],"x":[],"p":["x"],"w":[]},"b3":{"l":[],"x":[],"p":["x"],"w":[]},"W":{"z":[],"p":["z"],"cQ":[],"w":[]},"ad":{"ae":[]},"aJ":{"a_":[],"T":[]},"aK":{"a_":[],"T":[]},"ao":{"aD":["1","2"],"ag":["1","2"],"aa":["1","2"],"aQ":["1","2"],"M":["1","2"]},"an":{"M":["1","2"]},"ap":{"an":["1","2"],"M":["1","2"]},"b2":{"cJ":[]},"J":{"a5":[]},"aY":{"a5":[]},"bh":{"a5":[]},"bf":{"a5":[]},"a3":{"a5":[]},"as":{"au":["1","2"],"M":["1","2"]},"a_":{"T":[]},"ab":{"a9":["1"]},"aw":{"A":["l"],"a9":["l"],"i":["l"],"q":["l"],"K":["l"]},"ax":{"A":["n"],"a9":["n"],"i":["n"],"q":["n"],"K":["n"]},"b7":{"A":["l"],"bx":[],"a9":["l"],"i":["l"],"q":["l"],"K":["l"],"w":[],"A.E":"l"},"b8":{"A":["n"],"ce":[],"a9":["n"],"i":["n"],"q":["n"],"K":["n"],"w":[],"A.E":"n"},"aE":{"q":["1"]},"au":{"M":["1","2"]},"aa":{"M":["1","2"]},"aD":{"ag":["1","2"],"aa":["1","2"],"aQ":["1","2"],"M":["1","2"]},"aA":{"q":["1"]},"aL":{"q":["1"]},"l":{"x":[],"p":["x"]},"n":{"x":[],"p":["x"]},"i":{"q":["1"]},"x":{"p":["x"]},"z":{"p":["z"],"cQ":[]},"B":{"p":["B"]},"ac":{"B":[],"p":["B"]},"aC":{"ac":[],"B":[],"p":["B"]},"bg":{"b6":[]},"v":{"p":["j"]},"ce":{"i":["n"],"q":["n"]},"bx":{"i":["l"],"q":["l"]}}'))
A.ek(v.typeUniverse,JSON.parse('{"ab":1,"aA":1,"aL":1}'))
var u=(function rtii(){var t=A.aj
return{s:t("p<@>"),a:t("ao<ae,@>"),Z:t("a5"),k:t("B"),q:t("d"),h:t("c"),U:t("a"),o:t("cJ"),V:t("h<bx>"),f:t("h<d>"),Y:t("h<c>"),J:t("h<a>"),G:t("h<j>"),W:t("h<z>"),Q:t("h<aC>"),c:t("h<r>"),n:t("h<l>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("ar"),g:t("L"),p:t("a9<@>"),B:t("as<ae,@>"),I:t("i<i<l>>"),r:t("i<l>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("ay"),K:t("j"),O:t("Y<l>"),L:t("ff"),F:t("+()"),t:t("ac"),N:t("z"),m:t("ae"),R:t("w"),C:t("af"),y:t("ct"),i:t("l"),z:t("@"),S:t("n"),A:t("0&*"),_:t("j*"),d:t("cH<ay>?"),X:t("j?"),H:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dm=J.b0.prototype
B.b=J.h.prototype
B.a=J.aq.prototype
B.c=J.a8.prototype
B.d=J.W.prototype
B.dn=J.L.prototype
B.dp=J.o.prototype
B.t=J.ba.prototype
B.j=J.af.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.w=function() {
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
B.B=function(getTagFallback) {
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
B.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.y=function(hooks) {
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
B.A=function(hooks) {
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
B.z=function(hooks) {
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

B.C=new A.bM()
B.h=new A.bR()
B.m=new A.c0()
B.D=new A.d(0,0)
B.a2=new A.c(0,0,0)
B.aR=new A.a(0,0,0,0)
B.n=new A.v(0,0,0)
B.V=new A.d(0.130526192220052,0.99144486137381)
B.Y=new A.d(0.38268343236509,0.923879532511287)
B.K=new A.d(0.608761429008721,0.793353340291235)
B.a0=new A.d(0.793353340291235,0.608761429008721)
B.N=new A.d(0.923879532511287,0.38268343236509)
B.S=new A.d(0.99144486137381,0.130526192220051)
B.X=new A.d(0.99144486137381,-0.130526192220051)
B.U=new A.d(0.923879532511287,-0.38268343236509)
B.L=new A.d(0.793353340291235,-0.60876142900872)
B.F=new A.d(0.608761429008721,-0.793353340291235)
B.I=new A.d(0.38268343236509,-0.923879532511287)
B.P=new A.d(0.130526192220052,-0.99144486137381)
B.a_=new A.d(-0.130526192220052,-0.99144486137381)
B.G=new A.d(-0.38268343236509,-0.923879532511287)
B.O=new A.d(-0.608761429008721,-0.793353340291235)
B.Q=new A.d(-0.793353340291235,-0.608761429008721)
B.R=new A.d(-0.923879532511287,-0.38268343236509)
B.M=new A.d(-0.99144486137381,-0.130526192220052)
B.H=new A.d(-0.99144486137381,0.130526192220051)
B.E=new A.d(-0.923879532511287,0.38268343236509)
B.T=new A.d(-0.793353340291235,0.608761429008721)
B.J=new A.d(-0.608761429008721,0.793353340291235)
B.Z=new A.d(-0.38268343236509,0.923879532511287)
B.W=new A.d(-0.130526192220052,0.99144486137381)
B.dq=A.f(t([B.V,B.Y,B.K,B.a0,B.N,B.S,B.X,B.U,B.L,B.F,B.I,B.P,B.a_,B.G,B.O,B.Q,B.R,B.M,B.H,B.E,B.T,B.J,B.Z,B.W]),u.f)
B.dC=new A.Z(1,0,-0.788675134594813,0.211324865405187)
B.dz=new A.Z(0,0,0,0)
B.dA=new A.Z(1,1,-0.577350269189626,-0.577350269189626)
B.dB=new A.Z(0,1,0.211324865405187,-0.788675134594813)
B.o=A.f(t([B.dC,B.dz,B.dA,B.dB]),A.aj("h<Z>"))
B.cV=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.ca=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.bm=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.c7=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.cc=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.c_=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bF=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bU=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.cs=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cP=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.bY=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.ct=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.cq=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.cd=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.bX=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cO=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.c8=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.bZ=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.dh=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.ci=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.bz=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.de=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.aX=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.d6=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.bs=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aO=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bI=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.by=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.bc=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.cb=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.cX=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aS=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.d7=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c3=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cJ=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.c6=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.cf=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aU=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.c0=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.cm=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.bq=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cA=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.db=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c1=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cM=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d2=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bp=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.cZ=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.b6=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bh=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.be=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cE=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bO=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cD=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b2=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.d9=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b4=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aT=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.ck=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dl=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.da=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.ch=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cQ=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b3=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.dd=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cC=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.c5=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bR=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bv=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.c9=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cr=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.d5=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.aV=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cw=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bP=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d4=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cx=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.cu=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cF=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cN=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bN=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aP=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.b_=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.bf=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bE=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.b8=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bC=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.cW=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.cg=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bj=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c2=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.b9=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cy=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.b5=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aQ=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.ce=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cR=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cT=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bQ=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.d0=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.b0=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bl=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.dk=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.br=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bT=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cG=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.df=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bo=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.cn=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.cp=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.dg=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.dc=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.bt=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.bA=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.cv=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cK=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.bW=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.di=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.cY=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bk=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.bx=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bJ=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cz=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.bg=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.aW=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cL=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bH=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bK=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d3=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bS=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d1=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bL=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.dj=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.cj=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.bd=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bw=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cS=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bG=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.d_=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cI=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.cl=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cB=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.aY=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cH=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.b7=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bi=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bB=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.co=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bM=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.bb=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.d8=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.bu=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.bV=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.aZ=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b1=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.bn=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cU=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.ba=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bD=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c4=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dr=A.f(t([B.cV,B.ca,B.bm,B.c7,B.cc,B.c_,B.bF,B.bU,B.cs,B.cP,B.bY,B.ct,B.cq,B.cd,B.bX,B.cO,B.c8,B.bZ,B.dh,B.ci,B.bz,B.de,B.aX,B.d6,B.bs,B.aO,B.bI,B.by,B.bc,B.cb,B.cX,B.aS,B.d7,B.c3,B.cJ,B.c6,B.cf,B.aU,B.c0,B.cm,B.bq,B.cA,B.db,B.c1,B.cM,B.d2,B.bp,B.cZ,B.b6,B.bh,B.be,B.cE,B.bO,B.cD,B.b2,B.d9,B.b4,B.aT,B.ck,B.dl,B.da,B.ch,B.cQ,B.b3,B.dd,B.cC,B.c5,B.bR,B.bv,B.c9,B.cr,B.d5,B.aV,B.cw,B.bP,B.d4,B.cx,B.cu,B.cF,B.cN,B.bN,B.aP,B.b_,B.bf,B.bE,B.b8,B.bC,B.cW,B.cg,B.bj,B.c2,B.b9,B.cy,B.b5,B.aQ,B.ce,B.cR,B.cT,B.bQ,B.d0,B.b0,B.bl,B.dk,B.br,B.bT,B.cG,B.df,B.bo,B.cn,B.cp,B.dg,B.dc,B.bt,B.bA,B.cv,B.cK,B.bW,B.di,B.cY,B.bk,B.bx,B.bJ,B.cz,B.bg,B.aW,B.cL,B.bH,B.bK,B.d3,B.bS,B.d1,B.bL,B.dj,B.cj,B.bd,B.bw,B.cS,B.bG,B.d_,B.cI,B.cl,B.cB,B.aY,B.cH,B.b7,B.bi,B.bB,B.co,B.bM,B.bb,B.d8,B.bu,B.bV,B.aZ,B.b1,B.bn,B.cU,B.ba,B.bD,B.c4]),u.J)
B.p=A.f(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.aj("h<n>"))
B.ah=new A.c(-2.22474487139,-2.22474487139,-1)
B.aA=new A.c(-2.22474487139,-2.22474487139,1)
B.aa=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aG=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.ao=new A.c(-2.22474487139,-1,-2.22474487139)
B.az=new A.c(-2.22474487139,1,-2.22474487139)
B.ak=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aH=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.au=new A.c(-2.22474487139,-1,2.22474487139)
B.ag=new A.c(-2.22474487139,1,2.22474487139)
B.a6=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a4=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.aB=new A.c(-2.22474487139,2.22474487139,-1)
B.a8=new A.c(-2.22474487139,2.22474487139,1)
B.al=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.ax=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.a9=new A.c(-1,-2.22474487139,-2.22474487139)
B.a5=new A.c(1,-2.22474487139,-2.22474487139)
B.ap=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.ay=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a3=new A.c(-1,-2.22474487139,2.22474487139)
B.ab=new A.c(1,-2.22474487139,2.22474487139)
B.a1=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ad=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aF=new A.c(-1,2.22474487139,-2.22474487139)
B.aC=new A.c(1,2.22474487139,-2.22474487139)
B.as=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.ai=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.an=new A.c(-1,2.22474487139,2.22474487139)
B.aM=new A.c(1,2.22474487139,2.22474487139)
B.ae=new A.c(0,3.0862664687972017,1.1721513422464978)
B.am=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aJ=new A.c(2.22474487139,-2.22474487139,-1)
B.aD=new A.c(2.22474487139,-2.22474487139,1)
B.ac=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.ar=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.af=new A.c(2.22474487139,-1,-2.22474487139)
B.aE=new A.c(2.22474487139,1,-2.22474487139)
B.aK=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.a7=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aI=new A.c(2.22474487139,-1,2.22474487139)
B.av=new A.c(2.22474487139,1,2.22474487139)
B.at=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aN=new A.c(3.0862664687972017,0,1.1721513422464978)
B.aw=new A.c(2.22474487139,2.22474487139,-1)
B.aL=new A.c(2.22474487139,2.22474487139,1)
B.aq=new A.c(3.0862664687972017,1.1721513422464978,0)
B.aj=new A.c(1.1721513422464978,3.0862664687972017,0)
B.ds=A.f(t([B.ah,B.aA,B.aa,B.aG,B.ao,B.az,B.ak,B.aH,B.au,B.ag,B.a6,B.a4,B.aB,B.a8,B.al,B.ax,B.a9,B.a5,B.ap,B.ay,B.a3,B.ab,B.a1,B.ad,B.aF,B.aC,B.as,B.ai,B.an,B.aM,B.ae,B.am,B.aJ,B.aD,B.ac,B.ar,B.af,B.aE,B.aK,B.a7,B.aI,B.av,B.at,B.aN,B.aw,B.aL,B.aq,B.aj]),u.Y)
B.q=A.f(t([]),u.b)
B.dt={}
B.r=new A.ap(B.dt,[],A.aj("ap<ae,@>"))
B.du=new A.ad("call")
B.dv=new A.P("ice")
B.i=new A.P("grass")
B.e=new A.P("deathGrass")
B.f=new A.P("rock")
B.u=new A.P("snow")
B.v=new A.P("sand")
B.dw=A.cy("bx")
B.dx=A.cy("ce")
B.dy=A.cy("j")})();(function staticFields(){$.bZ=null
$.H=A.f([],u.G)
$.cR=null
$.cD=null
$.cC=null
$.dj=null
$.dh=null
$.dq=null
$.c5=null
$.c9=null
$.cw=null
$.c_=A.f([],A.aj("h<i<j>?>"))
$.bJ=A.f([],u.f)
$.bK=A.f([],u.Y)
$.bL=A.f([],u.J)
$.cP=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fc","cz",()=>A.eY("_$dart_dartClosure"))
t($,"fp","cc",()=>A.dn(B.dy))
t($,"fq","dv",()=>A.av(A.f([0,0,161,161],u.n)))
t($,"fr","dw",()=>A.av(A.f([0,161,161,322],u.n)))
t($,"fu","dy",()=>A.av(A.f([0,322,161,483],u.n)))
t($,"fw","dA",()=>A.av(A.f([0,483,161,644],u.n)))
t($,"fs","dx",()=>A.av(A.f([0,644,161,805],u.n)))
t($,"fv","dz",()=>A.av(A.f([0,805,161,966],u.n)))
t($,"fd","dt",()=>A.at(8,A.R(0,0,0,0),A.aj("bk")))
t($,"fe","du",()=>A.at(16,A.d_(0,0,0,0),A.aj("bl")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.o,DOMError:J.o,ErrorEvent:J.o,Event:J.o,InputEvent:J.o,SubmitEvent:J.o,MediaError:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,GeolocationPositionError:J.o,SensorErrorEvent:J.o,SpeechRecognitionError:J.o,ArrayBufferView:A.b9,Float32Array:A.b7,Int16Array:A.b8,DOMException:A.bv})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.aw.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.ax.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.f6
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
