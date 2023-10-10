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
a[c]=function(){a[c]=function(){A.f9(b)}
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
if(a[b]!==t)A.fa(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cw(b)
return new t(c,this)}:function(){if(t===null)t=A.cw(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cw(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cj:function cj(){},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cm(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cY(a,b,c){return A.cm(A.R(A.R(c,a),b))},
dn(a){var t,s
for(t=$.J.length,s=0;s<t;++s)if(a===$.J[s])return!0
return!1},
e4(a,b,c){A.be(a,0,J.ce(a)-1,b,c)},
be(a,b,c,d,e){if(c-b<=32)A.e3(a,b,c,d,e)
else A.e2(a,b,c,d,e)},
e3(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bs(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.v()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
e2(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.bs(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
as:function as(a){this.a=a},
bS:function bS(){},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
L:function L(){},
ae:function ae(a){this.a=a},
ds(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fu(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aV(a)
return t},
bb(a){var t,s=$.cU
if(s==null)s=$.cU=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bP(a){return A.dY(a)},
dY(a){var t,s,r,q
if(a instanceof A.j)return A.v(A.aT(a),null)
t=J.H(a)
if(t===B.dn||t===B.dq||u.D.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.aT(a),null)},
cV(a){if(a==null||typeof a=="number"||A.ct(a))return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.K)return a.i(0)
if(a instanceof A.W)return a.a7(!0)
return"Instance of '"+A.bP(a)+"'"},
Q(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.a8(t,b)
r.b=""
if(c!=null&&c.a!==0)c.D(0,new A.bO(r,s,t))
return J.dD(a,new A.b2(B.dP,0,t,s,0))},
dZ(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dX(a,b,c)},
dX(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.ck(b,u.z),g=h.length,f=a.$R
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
if(h===b)h=A.ck(h,u.z)
B.b.a8(h,n)}return p.apply(a,h)}else{if(g>f)return A.Q(a,h,c)
if(h===b)h=A.ck(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.ak)(m),++l){k=r[A.aQ(m[l])]
if(B.m===k)return A.Q(a,h,c)
B.b.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.ak)(m),++l){i=A.aQ(m[l])
if(c.S(i)){++j
B.b.l(h,c.h(0,i))}else{k=r[i]
if(B.m===k)return A.Q(a,h,c)
B.b.l(h,k)}}if(j!==c.a)return A.Q(a,h,c)}return p.apply(a,h)}},
d(a,b){if(a==null)J.ce(a)
throw A.b(A.br(a,b))},
br(a,b){var t,s="index"
if(!A.c5(b))return new A.a5(!0,b,s,null)
t=J.ce(a)
if(b<0||b>=t)return A.dN(b,t,a,s)
return A.e_(b,s)},
b(a){return A.dm(new Error(),a)},
dm(a,b){var t
if(b==null)b=new A.bT()
a.dartException=b
t=A.fc
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fc(){return J.aV(this.dartException)},
al(a){throw A.b(a)},
cB(a,b){throw A.dm(b,a)},
ak(a){throw A.b(A.aZ(a))},
dp(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.bb(a)
return J.E(a)},
dM(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
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
if(r)q=A.cJ(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dI(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cJ(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dG)}throw A.b("Error in functionType of tearoff")},
dJ(a,b,c,d){var t=A.cI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cJ(a,b,c,d){var t,s
if(c)return A.dL(a,b,d)
t=b.length
s=A.dJ(t,d,a,b)
return s},
dK(a,b,c,d){var t=A.cI,s=A.dH
switch(b?-1:a){case 0:throw A.b(new A.bR("Intercepted function with no arguments."))
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
if($.cG==null)$.cG=A.cF("interceptor")
if($.cH==null)$.cH=A.cF("receiver")
t=b.length
s=A.dK(t,c,a,b)
return s},
cw(a){return A.dM(a)},
dG(a,b){return A.aN(v.typeUniverse,A.aT(a.a),b)},
cI(a){return a.a},
dH(a){return a.b},
cF(a){var t,s,r,q=new A.a6("receiver","interceptor"),p=J.ci(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dE("Field name "+a+" not found."))},
f9(a){throw A.b(new A.bW(a))},
eX(a){return v.getIsolateTag(a)},
f4(a){var t,s,r,q,p,o=A.aQ($.dl.$1(a)),n=$.c6[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ca[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.er($.dj.$2(a,o))
if(r!=null){n=$.c6[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ca[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cc(t)
$.c6[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ca[o]=t
return t}if(q==="-"){p=A.cc(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dq(a,t)
if(q==="*")throw A.b(A.d_(o))
if(v.leafTags[o]===true){p=A.cc(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dq(a,t)},
dq(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cA(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cc(a){return J.cA(a,!1,null,!!a.$iab)},
f6(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cc(t)
else return J.cA(t,c,null,null)},
f0(){if(!0===$.cz)return
$.cz=!0
A.f1()},
f1(){var t,s,r,q,p,o,n,m
$.c6=Object.create(null)
$.ca=Object.create(null)
A.f_()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dr.$1(p)
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
n=A.aj(B.y,A.aj(B.z,A.aj(B.l,A.aj(B.l,A.aj(B.A,A.aj(B.B,A.aj(B.C(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dl=new A.c7(q)
$.dj=new A.c8(p)
$.dr=new A.c9(o)},
aj(a,b){return a(b)||b},
eS(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.$ti=b},
am:function am(){},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(){},
aY:function aY(){},
bh:function bh(){},
bf:function bf(){},
a6:function a6(a,b){this.a=a
this.b=b},
bW:function bW(a){this.a=a},
bR:function bR(a){this.a=a},
c1:function c1(){},
ar:function ar(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bD:function bD(a,b){this.a=a
this.b=b
this.c=null},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
W:function W(){},
a1:function a1(){},
ev(a){return a},
au(a){return new Float32Array(A.ev(a))},
c4(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.br(b,a))},
b9:function b9(){},
ad:function ad(){},
av:function av(){},
aw:function aw(){},
b7:function b7(){},
b8:function b8(){},
aD:function aD(){},
aE:function aE(){},
aF:function aF(){},
aG:function aG(){},
cW(a,b){var t=b.c
return t==null?b.c=A.cq(a,b.y,!0):t},
cl(a,b){var t=b.c
return t==null?b.c=A.aL(a,"cL",[b.y]):t},
cX(a){var t=a.x
if(t===6||t===7||t===8)return A.cX(a.y)
return t===12||t===13},
e1(a){return a.at},
a3(a){return A.bp(v.typeUniverse,a,!1)},
X(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.d9(a,s,!0)
case 7:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.cq(a,s,!0)
case 8:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.d8(a,s,!0)
case 9:r=b.z
q=A.aS(a,r,c,a0)
if(q===r)return b
return A.aL(a,b.y,q)
case 10:p=b.y
o=A.X(a,p,c,a0)
n=b.z
m=A.aS(a,n,c,a0)
if(o===p&&m===n)return b
return A.co(a,o,m)
case 12:l=b.y
k=A.X(a,l,c,a0)
j=b.z
i=A.eO(a,j,c,a0)
if(k===l&&i===j)return b
return A.d7(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aS(a,h,c,a0)
p=b.y
o=A.X(a,p,c,a0)
if(g===h&&o===p)return b
return A.cp(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.aX("Attempted to substitute unexpected RTI kind "+d))}},
aS(a,b,c,d){var t,s,r,q,p=b.length,o=A.c3(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.X(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eP(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c3(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.X(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eO(a,b,c,d){var t,s=b.a,r=A.aS(a,s,c,d),q=b.b,p=A.aS(a,q,c,d),o=b.c,n=A.eP(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bj()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
dk(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eZ(s)
t=a.$S()
return t}return null},
f2(a,b){var t
if(A.cX(b))if(a instanceof A.K){t=A.dk(a)
if(t!=null)return t}return A.aT(a)},
aT(a){if(a instanceof A.j)return A.aR(a)
if(Array.isArray(a))return A.ai(a)
return A.cs(J.H(a))},
ai(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aR(a){var t=a.$ti
return t!=null?t:A.cs(a)},
cs(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eC(a,t)},
eC(a,b){var t=a instanceof A.K?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.em(v.typeUniverse,t.name)
b.$ccache=s
return s},
eZ(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bp(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
cy(a){return A.a2(A.aR(a))},
cu(a){var t
if(a instanceof A.W)return A.eU(a.$r,a.a5())
t=a instanceof A.K?A.dk(a):null
if(t!=null)return t
if(u.R.b(a))return J.dC(a).a
if(Array.isArray(a))return A.ai(a)
return A.aT(a)},
a2(a){var t=a.w
return t==null?a.w=A.dd(a):t},
dd(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c2(a)
t=A.bp(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dd(t):s},
eU(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.d(r,0)
t=A.aN(v.typeUniverse,A.cu(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.d(r,s)
t=A.da(v.typeUniverse,t,A.cu(r[s]))}return A.aN(v.typeUniverse,t,a)},
cC(a){return A.a2(A.bp(v.typeUniverse,a,!1))},
eB(a){var t,s,r,q,p,o=this
if(o===u.K)return A.G(o,a,A.eI)
if(!A.I(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.G(o,a,A.eM)
t=o.x
if(t===7)return A.G(o,a,A.ez)
if(t===1)return A.G(o,a,A.dh)
s=t===6?o.y:o
t=s.x
if(t===8)return A.G(o,a,A.eE)
if(s===u.S)r=A.c5
else if(s===u.i||s===u.H)r=A.eH
else if(s===u.N)r=A.eK
else r=s===u.y?A.ct:null
if(r!=null)return A.G(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f3)){o.r="$i"+q
if(q==="i")return A.G(o,a,A.eG)
return A.G(o,a,A.eL)}}else if(t===11){p=A.eS(s.y,s.z)
return A.G(o,a,p==null?A.dh:p)}return A.G(o,a,A.ex)},
G(a,b,c){a.b=c
return a.b(b)},
eA(a){var t,s=this,r=A.ew
if(!A.I(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.es
else if(s===u.K)r=A.eq
else{t=A.aU(s)
if(t)r=A.ey}s.a=r
return s.a(a)},
bq(a){var t,s=a.x
if(!A.I(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bq(a.y)))t=s===8&&A.bq(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ex(a){var t=this
if(a==null)return A.bq(t)
return A.l(v.typeUniverse,A.f2(a,t),null,t,null)},
ez(a){if(a==null)return!0
return this.y.b(a)},
eL(a){var t,s=this
if(a==null)return A.bq(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
eG(a){var t,s=this
if(a==null)return A.bq(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
ew(a){var t,s=this
if(a==null){t=A.aU(s)
if(t)return a}else if(s.b(a))return a
A.de(a,s)},
ey(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.de(a,t)},
de(a,b){throw A.b(A.ec(A.d0(a,A.v(b,null))))},
d0(a,b){return A.a7(a)+": type '"+A.v(A.cu(a),null)+"' is not a subtype of type '"+b+"'"},
ec(a){return new A.bo("TypeError: "+a)},
t(a,b){return new A.bo("TypeError: "+A.d0(a,b))},
eE(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cl(v.typeUniverse,s).b(a)},
eI(a){return a!=null},
eq(a){if(a!=null)return a
throw A.b(A.t(a,"Object"))},
eM(a){return!0},
es(a){return a},
dh(a){return!1},
ct(a){return!0===a||!1===a},
fh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.t(a,"bool"))},
fj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool"))},
fi(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.t(a,"bool?"))},
cr(a){if(typeof a=="number")return a
throw A.b(A.t(a,"double"))},
fl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double"))},
fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"double?"))},
c5(a){return typeof a=="number"&&Math.floor(a)===a},
aP(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.t(a,"int"))},
fn(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int"))},
fm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.t(a,"int?"))},
eH(a){return typeof a=="number"},
eo(a){if(typeof a=="number")return a
throw A.b(A.t(a,"num"))},
fo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num"))},
ep(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.t(a,"num?"))},
eK(a){return typeof a=="string"},
aQ(a){if(typeof a=="string")return a
throw A.b(A.t(a,"String"))},
fp(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String"))},
er(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.t(a,"String?"))},
di(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
eN(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.di(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
df(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.f([],u.W)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.l(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.d(a4,k)
n=B.d.G(n+m,a4[k])
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
if(m===9){q=A.eQ(a.y)
p=a.z
return p.length>0?q+("<"+A.di(p,b)+">"):q}if(m===11)return A.eN(a,b)
if(m===12)return A.df(a,b,null)
if(m===13)return A.df(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.d(b,o)
return b[o]}return"?"},
eQ(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
en(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
em(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bp(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aM(a,5,"#")
r=A.c3(t)
for(q=0;q<t;++q)r[q]=s
p=A.aL(a,b,r)
o[b]=p
return p}else return n},
el(a,b){return A.db(a.tR,b)},
ek(a,b){return A.db(a.eT,b)},
bp(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.d5(A.d3(a,null,b,c))
s.set(b,t)
return t},
aN(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.d5(A.d3(a,b,c,!0))
r.set(c,s)
return s},
da(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.co(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
F(a,b){b.a=A.eA
b.b=A.eB
return b},
aM(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.z(null,null)
t.x=b
t.at=c
s=A.F(a,t)
a.eC.set(c,s)
return s},
d9(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eh(a,b,s,c)
a.eC.set(s,t)
return t},
eh(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.z(null,null)
r.x=6
r.y=b
r.at=c
return A.F(a,r)},
cq(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eg(a,b,s,c)
a.eC.set(s,t)
return t},
eg(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.I(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aU(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aU(r.y))return r
else return A.cW(a,b)}}q=new A.z(null,null)
q.x=7
q.y=b
q.at=c
return A.F(a,q)},
d8(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ee(a,b,s,c)
a.eC.set(s,t)
return t},
ee(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aL(a,"cL",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.z(null,null)
r.x=8
r.y=b
r.at=c
return A.F(a,r)},
ei(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=14
t.y=b
t.at=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
aK(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
ed(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aL(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aK(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.z(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.F(a,s)
a.eC.set(q,r)
return r},
co(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aK(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.z(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.F(a,p)
a.eC.set(r,o)
return o},
ej(a,b,c){var t,s,r="+"+(b+"("+A.aK(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
d7(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aK(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aK(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ed(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.z(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.F(a,q)
a.eC.set(s,p)
return p},
cp(a,b,c,d){var t,s=b.at+("<"+A.aK(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ef(a,b,c,s,d)
a.eC.set(s,t)
return t},
ef(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c3(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.X(a,b,s,0)
n=A.aS(a,c,s,0)
return A.cp(a,o,n,c!==n)}}m=new A.z(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.F(a,m)},
d3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d5(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.e7(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.d4(a,s,m,l,!1)
else if(r===46)s=A.d4(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.V(a.u,a.e,l.pop()))
break
case 94:l.push(A.ei(a.u,l.pop()))
break
case 35:l.push(A.aM(a.u,5,"#"))
break
case 64:l.push(A.aM(a.u,2,"@"))
break
case 126:l.push(A.aM(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.e9(a,l)
break
case 38:A.e8(a,l)
break
case 42:q=a.u
l.push(A.d9(q,A.V(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cq(q,A.V(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.d8(q,A.V(q,a.e,l.pop()),a.n))
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
A.d6(a.u,a.e,p)
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
return A.V(a.u,a.e,n)},
e7(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d4(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.en(t,p.y)[q]
if(o==null)A.al('No "'+q+'" in "'+A.e1(p)+'"')
d.push(A.aN(t,p,o))}else d.push(q)
return n},
e9(a,b){var t,s=a.u,r=A.d2(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aL(s,q,r))
else{t=A.V(s,a.e,q)
switch(t.x){case 12:b.push(A.cp(s,t,r,a.n))
break
default:b.push(A.co(s,t,r))
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
t=s}r=A.d2(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.V(n,a.e,m)
p=new A.bj()
p.a=r
p.b=t
p.c=s
b.push(A.d7(n,q,p))
return
case-4:b.push(A.ej(n,b.pop(),r))
return
default:throw A.b(A.aX("Unexpected state under `()`: "+A.n(m)))}},
e8(a,b){var t=b.pop()
if(0===t){b.push(A.aM(a.u,1,"0&"))
return}if(1===t){b.push(A.aM(a.u,4,"1&"))
return}throw A.b(A.aX("Unexpected extended operation "+A.n(t)))},
d2(a,b){var t=b.splice(a.p)
A.d6(a.u,a.e,t)
a.p=b.pop()
return t},
V(a,b,c){if(typeof c=="string")return A.aL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ea(a,b,c)}else return c},
d6(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.V(a,b,c[t])},
eb(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.V(a,b,c[t])},
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
if(q===6){t=A.cW(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cl(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cl(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.dg(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dg(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eF(a,b,c,d,e)}if(p&&q===11)return A.eJ(a,b,c,d,e)
return!1},
dg(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eF(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aN(a,b,s[p])
return A.dc(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dc(a,o,null,c,n,e)},
dc(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eJ(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aU(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.I(a))if(s!==7)if(!(s===6&&A.aU(a.y)))t=s===8&&A.aU(a.y)
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
db(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c3(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bj:function bj(){this.c=this.b=this.a=null},
c2:function c2(a){this.a=a},
bY:function bY(){},
bo:function bo(a){this.a=a},
dS(a){return new A.aC(a.n("aC<0>"))},
cn(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bE(a){var t,s={}
if(A.dn(a))return"{...}"
t=new A.az("")
try{B.b.l($.J,a)
t.a+="{"
s.a=!0
a.D(0,new A.bF(s,t))
t.a+="}"}finally{if(0>=$.J.length)return A.d($.J,-1)
$.J.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aC:function aC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bm:function bm(a){this.a=a
this.b=null},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
B:function B(){},
at:function at(){},
bF:function bF(a,b){this.a=a
this.b=b},
aO:function aO(){},
ac:function ac(){},
aB:function aB(){},
ay:function ay(){},
aJ:function aJ(){},
ah:function ah(){},
b5(a,b,c){var t,s,r
if(a>4294967295)A.al(A.bd(a,0,4294967295,"length",null))
t=J.cP(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dU(a,b,c){var t,s,r=A.f([],c.n("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.ak)(a),++s)B.b.l(r,c.a(a[s]))
return J.ci(r,c)},
ck(a,b){var t=A.dT(a,b)
return t},
dT(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.n("h<0>"))
t=A.f([],b.n("h<0>"))
for(s=J.cE(a);s.E();)B.b.l(t,s.gC())
return t},
e5(a,b,c){var t=J.cE(b)
if(!t.E())return a
if(c.length===0){do a+=A.n(t.gC())
while(t.E())}else{a+=A.n(t.gC())
for(;t.E();)a=a+c+A.n(t.gC())}return a},
cR(a,b){return new A.bG(a,b.gaz(),b.gaB(),b.gaA())},
a7(a){if(typeof a=="number"||A.ct(a)||a==null)return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cV(a)},
aX(a){return new A.bt(a)},
dE(a){return new A.a5(!1,null,null,a)},
dF(a,b,c){return new A.a5(!0,a,b,c)},
e_(a,b){return new A.bc(null,null,!0,a,b,"Value not in range")},
bd(a,b,c,d,e){return new A.bc(b,c,!0,a,d,"Invalid value")},
e0(a,b,c){if(0>a||a>c)throw A.b(A.bd(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bd(b,a,c,"end",null))
return b}return c},
dN(a,b,c,d){return new A.bA(b,!0,a,d,"Index out of range")},
T(a){return new A.bV(a)},
d_(a){return new A.bU(a)},
aZ(a){return new A.bv(a)},
cK(a,b,c){return new A.bz(a,b,c)},
ch(a,b,c){var t,s
if(A.dn(a))return b+"..."+c
t=new A.az(b)
B.b.l($.J,a)
try{s=t
s.a=A.e5(s.a,a,", ")}finally{if(0>=$.J.length)return A.d($.J,-1)
$.J.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dV(a,b,c,d){var t
if(B.h===c)return A.cY(B.a.gk(a),J.E(b),$.cd())
if(B.h===d){t=B.a.gk(a)
b=J.E(b)
c=J.E(c)
return A.cm(A.R(A.R(A.R($.cd(),t),b),c))}t=B.a.gk(a)
b=J.E(b)
c=J.E(c)
d=J.E(d)
d=A.cm(A.R(A.R(A.R(A.R($.cd(),t),b),c),d))
return d},
bH:function bH(a,b){this.a=a
this.b=b},
bX:function bX(){},
bx:function bx(){},
bt:function bt(a){this.a=a},
bT:function bT(){},
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
bA:function bA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a){this.a=a},
bU:function bU(a){this.a=a},
bv:function bv(a){this.a=a},
bN:function bN(){},
bZ:function bZ(a){this.a=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(){},
j:function j(){},
az:function az(a){this.a=a},
bw:function bw(){},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
k:function k(a,b,c){this.c=a
this.e=b
this.b=c},
bu:function bu(){},
b0:function b0(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
M:function M(){},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=!0},
S:function S(a){this.b=a},
b6:function b6(){},
bg:function bg(){},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
f5(){self.jsregionworker=A.eR(new A.cb(),u.e)},
cb:function cb(){},
bQ:function bQ(a){this.a=a
this.b=$},
bI:function bI(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
f7(a){var t,s,r,q,p,o,n,m=A.dS(u.C)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.ak)(a),++s){q=a[s]
p=q.b.W()
m.l(0,new A.P(B.c.m(p.a),B.c.m(p.b),B.c.m(q.c)))}for(s=0;s<a.length;a.length===r||(0,A.ak)(a),++s){q=a[s]
p=q.b.W()
t=B.c.m(p.a)
o=B.c.m(p.b)
n=B.c.m(q.c)
if(!m.R(0,new A.P(t-1,o,n)))continue
if(!m.R(0,new A.P(t,o-1,n)))continue
if(!m.R(0,new A.P(t,o,n+1)))continue
q.r=!1}},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
cM(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ag(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cK("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eT(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.t(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cK("Not radix digit",a,t))}if(s)return A.a9(0,0,0,q,p,o)
return new A.w(q&4194303,p&4194303,o&1048575)},
cg(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a9(0,0,0,q,p,o):new A.w(q,p,o)},
bB(a){if(a instanceof A.w)return a
else if(A.c5(a))return A.cg(a)
throw A.b(A.dF(a,"other","not an int, Int32 or Int64"))},
dQ(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.d(B.q,a)
r=B.q[a]
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
i=B.d.ah(B.a.af(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.af(h,a))+q+p+o},
a9(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.t(t,22)&1)
return new A.w(t&4194303,s&4194303,c-f-(B.a.t(s,22)&1)&1048575)},
dO(a,b,c){var t,s,r,q,p=A.bB(b)
if(p.gab())throw A.b(A.T("Division by zero"))
if(a.gab())return B.n
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a9(0,0,0,a.a,a.b,t)
if(q)p=A.a9(0,0,0,p.a,p.b,r)
return A.dP(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dP(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
t=t+a*(B.a.t(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a9(0,0,0,p,r,t)
return new A.w(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.w(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.n
else return A.a9(a4,a5,a6,o,n,m)
else return A.a9(0,0,0,o,n,m)},
w:function w(a,b,c){this.a=a
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
D(a){var t=new A.bJ(new Int16Array(2048),A.b5(2048,B.E,u.q),A.b5(2048,B.a3,u.h),A.b5(2048,B.aS,u.U))
t.aj(a)
return t},
dW(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
B.b.j($.dt(),t,m)}for(t=0;t<16;++t)B.b.j($.du(),t,A.d1(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.f([],u.f)
for(i=0;i<24;++i){h=B.dL[i]
l.push(new A.e(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.J(t,24)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bK,l[k])}l=A.f([],u.Y)
for(i=0;i<48;++i){h=B.dN[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.J(t,48)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bL,l[k])}l=A.f([],u.J)
for(i=0;i<160;++i){h=B.dM[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.J(t,160)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bM,l[k])}},
U(a,b,c,d){return new A.bk()},
d1(a,b,c,d){var t=new A.bl(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bJ:function bJ(a,b,c,d){var _=this
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
f8(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
fa(a){A.cB(new A.as("Field '"+a+"' has been assigned during initialization."),new Error())},
C(){A.cB(new A.as("Field '' has not been initialized."),new Error())},
fb(){A.cB(new A.as("Field '' has been assigned during initialization."),new Error())},
eu(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.et,a)
t[$.cD()]=a
a.$dart_jsFunction=t
return t},
et(a,b){u.j.a(b)
u.Z.a(a)
return A.dZ(a,b,null)},
eR(a,b){if(typeof a=="function")return a
else return b.a(A.eu(a))},
cZ(a,b,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(t=0;t<12;++t){s=a1[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.F(a/a2)*a2
r=s.a
p=a0.a
o=a0.b
n=p*2-2*o
o=p+o
p=new A.aA(r,new A.b0(n,o),q,a2)
p.f=new A.bu()
m=A.eY(r)
r=n+(q*2-2*q)
o+=q+q
n=a2*2
l=2*a2
k=r+(n-l)
j=o+(a2+a2)
l=0-l
i=r+l
h=o+a2
l=k+l
g=j+a2
n-=0
f=r+n
e=k+n
n=l+n
d=g+a2
c=new Float32Array(36)
c[0]=k
c[1]=j
c[2]=i
c[3]=h
c[4]=r
c[5]=o
c[6]=k
c[7]=j
c[8]=i
c[9]=h
c[10]=l
c[11]=g
c[12]=k
c[13]=j
c[14]=l
c[15]=g
c[16]=n
c[17]=d
c[18]=k
c[19]=j
c[20]=n
c[21]=d
c[22]=e
c[23]=g
c[24]=k
c[25]=j
c[26]=e
c[27]=g
c[28]=f
c[29]=h
c[30]=k
c[31]=j
c[32]=f
c[33]=h
c[34]=r
c[35]=o
r=new A.bi(c,m)
p.d=u.E.a(r)
return p}}throw A.b(new A.bZ("No tile type found for elevation: "+A.n(a)+", moisture: "+A.n(b)+". Fix the rules!"))},
eY(a){switch(a){case B.dQ:return $.dx()
case B.i:return $.dw()
case B.e:return $.dv()
case B.f:return $.dy()
case B.v:return $.dA()
case B.w:return $.dz()}},
eT(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cA(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cx(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cz==null){A.f0()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.d_("Return interceptor for "+A.n(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c_
if(p==null)p=$.c_=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f4(a)
if(q!=null)return q
if(typeof a=="function")return B.dp
t=Object.getPrototypeOf(a)
if(t==null)return B.u
if(t===Object.prototype)return B.u
if(typeof r=="function"){p=$.c_
if(p==null)p=$.c_=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
cO(a,b){if(a<0||a>4294967295)throw A.b(A.bd(a,0,4294967295,"length",null))
return J.cP(new Array(a),b)},
cP(a,b){return J.ci(A.f(a,b.n("h<0>")),b)},
ci(a,b){a.fixed$length=Array
return a},
cQ(a){a.fixed$length=Array
a.immutable$list=Array
return a},
dR(a,b){var t=u.s
return J.dB(t.a(a),t.a(b))},
H(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ap.prototype
return J.b3.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.aq.prototype
if(typeof a=="boolean")return J.b1.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cx(a)},
bs(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cx(a)},
eV(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cx(a)},
eW(a){if(typeof a=="number")return J.aa.prototype
if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.ag.prototype
return a},
a4(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).u(a,b)},
dB(a,b){return J.eW(a).I(a,b)},
E(a){return J.H(a).gk(a)},
cE(a){return J.eV(a).gV(a)},
ce(a){return J.bs(a).gp(a)},
dC(a){return J.H(a).gA(a)},
dD(a,b){return J.H(a).ad(a,b)},
aV(a){return J.H(a).i(a)},
b_:function b_(){},
b1:function b1(){},
aq:function aq(){},
p:function p(){},
Z:function Z(){},
ba:function ba(){},
ag:function ag(){},
N:function N(){},
h:function h(a){this.$ti=a},
bC:function bC(a){this.$ti=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aa:function aa(){},
ap:function ap(){},
b3:function b3(){},
Y:function Y(){}},B={}
var w=[A,J,B]
var $={}
A.cj.prototype={}
J.b_.prototype={
u(a,b){return a===b},
gk(a){return A.bb(a)},
i(a){return"Instance of '"+A.bP(a)+"'"},
ad(a,b){throw A.b(A.cR(a,u.o.a(b)))},
gA(a){return A.a2(A.cs(this))}}
J.b1.prototype={
i(a){return String(a)},
gk(a){return a?519018:218159},
gA(a){return A.a2(u.y)},
$ix:1,
$icv:1}
J.aq.prototype={
u(a,b){return null==b},
i(a){return"null"},
gk(a){return 0},
$ix:1}
J.p.prototype={}
J.Z.prototype={
gk(a){return 0},
i(a){return String(a)}}
J.ba.prototype={}
J.ag.prototype={}
J.N.prototype={
i(a){var t=a[$.cD()]
if(t==null)return this.ai(a)
return"JavaScript function for "+J.aV(t)},
$ia8:1}
J.h.prototype={
l(a,b){A.ai(a).c.a(b)
if(!!a.fixed$length)A.al(A.T("add"))
a.push(b)},
a8(a,b){A.ai(a).n("q<1>").a(b)
if(!!a.fixed$length)A.al(A.T("addAll"))
this.al(a,b)
return},
al(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.aZ(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.ch(a,"[","]")},
gV(a){return new J.aW(a,a.length,A.ai(a).n("aW<1>"))},
gk(a){return A.bb(a)},
gp(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.br(a,b))
return a[b]},
j(a,b,c){A.ai(a).c.a(c)
if(!!a.immutable$list)A.al(A.T("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.br(a,b))
a[b]=c},
$iq:1,
$ii:1}
J.bC.prototype={}
J.aW.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.ak(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa1(null)
return!1}s.sa1(r[t]);++s.c
return!0},
sa1(a){this.d=this.$ti.n("1?").a(a)}}
J.aa.prototype={
I(a,b){var t
A.eo(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gU(b)
if(this.gU(a)===t)return 0
if(this.gU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gU(a){return a===0?1/a<0:a<0},
m(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.T(""+a+".toInt()"))},
F(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.T(""+a+".floor()"))},
aC(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
af(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bd(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.d(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.al(A.T("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.d(q,1)
t=q[1]
if(3>=s)return A.d(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.X("0",p)},
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
return this.a6(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.a6(a,b)},
a6(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.T("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
t(a,b){var t
if(a>0)t=this.ar(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ar(a,b){return b>31?0:a>>>b},
gA(a){return A.a2(u.H)},
$iu:1,
$im:1,
$iy:1}
J.ap.prototype={
gA(a){return A.a2(u.S)},
$ix:1,
$io:1}
J.b3.prototype={
gA(a){return A.a2(u.i)},
$ix:1}
J.Y.prototype={
G(a,b){return a+b},
ag(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.e0(b,c,a.length))},
ah(a,b){return this.K(a,b,null)},
X(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.D)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
I(a,b){var t
A.aQ(b)
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
gA(a){return A.a2(u.N)},
gp(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.br(a,b))
return a[b]},
$ix:1,
$iu:1,
$icT:1,
$iA:1}
A.as.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bS.prototype={}
A.b4.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t,s=this,r=s.a,q=J.bs(r),p=q.gp(r)
if(s.b!==p)throw A.b(A.aZ(r))
t=s.c
if(t>=p){s.sY(null)
return!1}s.sY(q.h(r,t));++s.c
return!0},
sY(a){this.d=this.$ti.n("1?").a(a)}}
A.L.prototype={}
A.ae.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
u(a,b){if(b==null)return!1
return b instanceof A.ae&&this.a===b.a},
$iaf:1}
A.aH.prototype={$r:"+(1,2)",$s:1}
A.aI.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.an.prototype={}
A.am.prototype={
i(a){return A.bE(this)},
$iO:1}
A.ao.prototype={
gp(a){return this.b.length},
S(a){return!1},
h(a,b){if(!this.S(b))return null
return this.b[this.a[b]]},
D(a,b){var t,s,r,q,p=this
p.$ti.n("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.b2.prototype={
gaz(){var t=this.a
return t},
gaB(){var t,s,r,q,p=this
if(p.c===1)return B.r
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.r
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.d(t,q)
r.push(t[q])}return J.cQ(r)},
gaA(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.t
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.t
p=new A.ar(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.d(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.d(r,m)
p.j(0,new A.ae(n),r[m])}return new A.an(p,u.a)},
$icN:1}
A.bO.prototype={
$2(a,b){var t
A.aQ(a)
t=this.a
t.b=t.b+"$"+a
B.b.l(this.b,a)
B.b.l(this.c,b);++t.a},
$S:0}
A.K.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ds(s==null?"unknown":s)+"'"},
$ia8:1,
gaD(){return this},
$C:"$1",
$R:1,
$D:null}
A.aY.prototype={$C:"$2",$R:2}
A.bh.prototype={}
A.bf.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ds(t)+"'"}}
A.a6.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dp(this.a)^A.bb(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bP(this.a)+"'")}}
A.bW.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bR.prototype={
i(a){return"RuntimeError: "+this.a}}
A.c1.prototype={}
A.ar.prototype={
gp(a){return this.a},
S(a){var t=this.b
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
return r}else return this.aw(b)},
aw(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a9(a)]
s=this.aa(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r,q,p,o,n=this,m=A.aR(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.Z(t==null?n.b=n.O():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.Z(s==null?n.c=n.O():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.O()
q=n.a9(b)
p=r[q]
if(p==null)r[q]=[n.P(b,c)]
else{o=n.aa(p,b)
if(o>=0)p[o].b=c
else p.push(n.P(b,c))}}},
D(a,b){var t,s,r=this
A.aR(r).n("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.aZ(r))
t=t.c}},
Z(a,b,c){var t,s=A.aR(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.P(b,c)
else t.b=c},
P(a,b){var t=this,s=A.aR(t),r=new A.bD(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a9(a){return J.E(a)&1073741823},
aa(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a4(a[s].a,b))return s
return-1},
i(a){return A.bE(this)},
O(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bD.prototype={}
A.c7.prototype={
$1(a){return this.a(a)},
$S:1}
A.c8.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.c9.prototype={
$1(a){return this.a(A.aQ(a))},
$S:3}
A.W.prototype={
i(a){return this.a7(!1)},
a7(a){var t,s,r,q,p,o=this.aq(),n=this.a5(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.d(n,r)
p=n[r]
m=a?m+A.cV(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aq(){var t,s=this.$s
for(;$.c0.length<=s;)B.b.l($.c0,null)
t=$.c0[s]
if(t==null){t=this.an()
B.b.j($.c0,s,t)}return t},
an(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.f(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.j(l,r,s[t])}}return J.cQ(A.dU(l,!1,u.K))}}
A.a1.prototype={
a5(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.a1&&this.$s===b.$s&&J.a4(this.a,b.a)&&J.a4(this.b,b.b)},
gk(a){return A.dV(this.$s,this.a,this.b,B.h)}}
A.b9.prototype={}
A.ad.prototype={
gp(a){return a.length},
$iab:1}
A.av.prototype={
h(a,b){A.c4(b,a,a.length)
return a[b]},
j(a,b,c){A.cr(c)
A.c4(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.aw.prototype={
j(a,b,c){A.aP(c)
A.c4(b,a,a.length)
a[b]=c},
$iq:1,
$ii:1}
A.b7.prototype={
gA(a){return B.dR},
$ix:1,
$iby:1}
A.b8.prototype={
gA(a){return B.dS},
h(a,b){A.c4(b,a,a.length)
return a[b]},
$ix:1,
$icf:1}
A.aD.prototype={}
A.aE.prototype={}
A.aF.prototype={}
A.aG.prototype={}
A.z.prototype={
n(a){return A.aN(v.typeUniverse,this,a)},
aE(a){return A.da(v.typeUniverse,this,a)}}
A.bj.prototype={}
A.c2.prototype={
i(a){return A.v(this.a,null)}}
A.bY.prototype={
i(a){return this.a}}
A.bo.prototype={}
A.aC.prototype={
gV(a){var t=this,s=new A.bn(t,t.r,t.$ti.n("bn<1>"))
s.c=t.e
return s},
gp(a){return this.a},
R(a,b){var t=this.ao(b)
return t},
ao(a){var t=this.d
if(t==null)return!1
return this.a3(t[a.gk(a)&1073741823],a)>=0},
l(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a_(t==null?r.b=A.cn():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a_(s==null?r.c=A.cn():s,b)}else return r.ak(b)},
ak(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cn()
s=J.E(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.L(a)]
else{if(q.a3(r,a)>=0)return!1
r.push(q.L(a))}return!0},
a_(a,b){this.$ti.c.a(b)
if(u.M.a(a[b])!=null)return!1
a[b]=this.L(b)
return!0},
L(a){var t=this,s=new A.bm(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
a3(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a4(a[s].a,b))return s
return-1}}
A.bm.prototype={}
A.bn.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.b(A.aZ(r))
else if(s==null){t.sa0(null)
return!1}else{t.sa0(t.$ti.n("1?").a(s.a))
t.c=s.b
return!0}},
sa0(a){this.d=this.$ti.n("1?").a(a)}}
A.B.prototype={
gV(a){return new A.b4(a,this.gp(a),A.aT(a).n("b4<B.E>"))},
i(a){return A.ch(a,"[","]")}}
A.at.prototype={
gp(a){return this.a},
i(a){return A.bE(this)},
$iO:1}
A.bF.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.n(a)
s.a=t+": "
s.a+=A.n(b)},
$S:4}
A.aO.prototype={}
A.ac.prototype={
h(a,b){return this.a.h(0,b)},
D(a,b){this.a.D(0,this.$ti.n("~(1,2)").a(b))},
gp(a){return this.a.a},
i(a){return A.bE(this.a)},
$iO:1}
A.aB.prototype={}
A.ay.prototype={
i(a){return A.ch(this,"{","}")},
$iq:1}
A.aJ.prototype={}
A.ah.prototype={}
A.bH.prototype={
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
A.bX.prototype={
i(a){return this.a2()}}
A.bx.prototype={}
A.bt.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a7(t)
return"Assertion failed"}}
A.bT.prototype={}
A.a5.prototype={
gN(){return"Invalid argument"+(!this.a?"(s)":"")},
gM(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gN()+r+p
if(!t.a)return o
return o+t.gM()+": "+A.a7(t.gT())},
gT(){return this.b}}
A.bc.prototype={
gT(){return A.ep(this.b)},
gN(){return"RangeError"},
gM(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.bA.prototype={
gT(){return A.aP(this.b)},
gN(){return"RangeError"},
gM(){if(A.aP(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bG.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.az("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a7(o)
k.a=", "}l.d.D(0,new A.bH(k,j))
n=A.a7(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bV.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bU.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bv.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a7(t)+"."}}
A.bN.prototype={
i(a){return"Out of Memory"}}
A.bZ.prototype={
i(a){return"Exception: "+this.a}}
A.bz.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.K(g,0,75)+"..."
return i+"\n"+g}for(t=g.length,s=1,r=0,q=!1,p=0;p<h;++p){if(!(p<t))return A.d(g,p)
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
k=""}return i+l+B.d.K(g,m,n)+k+"\n"+B.d.X(" ",h-m+l.length)+"^\n"}}
A.ax.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
i(a){return"null"}}
A.j.prototype={$ij:1,
u(a,b){return this===b},
gk(a){return A.bb(this)},
i(a){return"Instance of '"+A.bP(this)+"'"},
ad(a,b){throw A.b(A.cR(this,u.o.a(b)))},
gA(a){return A.cy(this)},
toString(){return this.i(this)}}
A.az.prototype={
gp(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bw.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.a_.prototype={
i(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
u(a,b){if(b==null)return!1
return b instanceof A.a_&&this.a===b.a&&this.b===b.b},
gk(a){return A.cY(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.k.prototype={
a2(){return"LevelOfDetail."+this.b}}
A.bu.prototype={}
A.b0.prototype={
W(){var t=this.b,s=t/2-this.a/4
return new A.a_(t-s,s,u.O)},
u(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b0&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
i(a){return""+B.c.m(this.a)+", "+B.c.m(this.b)}}
A.bi.prototype={}
A.M.prototype={
I(a,b){var t,s,r,q
u.k.a(b)
t=this.ac()
s=b.ac()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$iu:1}
A.aA.prototype={
ac(){var t=this.b.W()
return new A.aI(-1*(t.a+t.b+this.e),this.c)}}
A.S.prototype={
a2(){return"TileType."+this.b}}
A.b6.prototype={}
A.bg.prototype={
ae(){var t=null
return A.f([new A.r(B.f,0,-0.2),new A.r(B.e,0,0),new A.r(B.w,0,t),new A.r(B.f,15,-0.2),new A.r(B.e,15,0.4),new A.r(B.i,15,t),new A.r(B.f,30,-0.2),new A.r(B.e,30,0.4),new A.r(B.i,30,t),new A.r(B.f,50,0.1),new A.r(B.e,50,0.4),new A.r(B.v,t,t)],u.c)}}
A.r.prototype={}
A.cb.prototype={
$1(a){var t,s,r,q,p,o,n,m,l=J.bs(a),k=A.aP(l.h(a,0)),j=A.aP(l.h(a,1)),i=A.cr(l.h(a,2)),h=A.cr(l.h(a,3))
l=A.aP(l.h(a,4))
if(!(l>=0&&l<20))return A.d(B.p,l)
t=B.p[l]
s=new A.bQ(new A.bg()).au(k,j,B.c.m(i),B.c.m(h),t)
r=A.f([],u.l)
for(l=s.length,q=u.V,p=0;p<s.length;s.length===l||(0,A.ak)(s),++p){o=s[p]
n=o.b
m=o.d
m===$&&A.C()
B.b.l(r,["Tile",o.a.b,n.a,n.b,o.c,o.e,A.f([m.a,m.b],q),o.r])}return r},
$S:6}
A.bQ.prototype={
au(a,b,c,d,e){var t,s,r,q,p,o,n=this,m=n.b
if(m===$){t=new A.bI(n.a)
t.a=A.D(2)
t.b=A.D(3)
t.c=A.D(4)
t.d=A.D(5)
t.e=A.D(6)
t.f=A.D(7)
t.r=A.D(8)
t.w=A.D(9)
t.x=A.D(10)
t.y=A.D(11)
t.z=A.D(12)
n.b!==$&&A.fb()
n.b=t
m=t}s=e.c
r=m.av(a,b,c,d,s)
q=n.ap(c,d,r.a,r.b,s)
if(!!q.immutable$list)A.al(A.T("sort"))
A.e4(q,J.eD(),A.ai(q).c)
if(e.e){A.f7(q)
for(s=q.length,p=0,o=0;o<s;++o)if(!q[o].r)++p
A.f8("Occlusion culling done: "+p+" tiles hidden")}return q},
ap(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.f([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.d(d,o)
m=d[o]
for(l=m.length,k=a+o*e,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.d(n,i)
h=n[i]
if(h<=0){g=B.c.F(h/e)
if(!(i<l))return A.d(m,i)
B.b.l(t,A.cZ(g*e,m[i],new A.a_(k,b+i*e,r),q.ae(),e))}else for(g=b+i*e;h>0;){f=B.c.F(h/e)
if(!(i<l))return A.d(m,i)
B.b.l(t,A.cZ(f*e,m[i],new A.a_(k,g,r),q.ae(),e))
h-=e}}}return t}}
A.bI.prototype={
av(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a4(b3,b4),b2=b0.a4(b3,b4)
for(t=b1.length,s=b2.length,r=0;r<b3;++r)for(q=b5+r*b7,p=q*0.0004,o=q*0.0016,n=q*0.0064,m=q*0.0256,l=q*0.0000032000000000000003,k=q*0.000012800000000000001,j=q*0.000051200000000000004,i=q*0.00020480000000000002,h=0;h<b3;++h){g=b6+h*b7
f=b0.a
f===$&&A.C()
e=g*0.0004
d=0.366025403784439*(p+e)
c=p+d
b=e+d
a=f.q(c,b)
f=b0.b
f===$&&A.C()
e=g*0.0016
d=0.366025403784439*(o+e)
a0=o+d
a1=e+d
f=f.q(a0,a1)
e=b0.c
e===$&&A.C()
a2=g*0.0064
d=0.366025403784439*(n+a2)
a3=n+d
a4=a2+d
e=e.q(a3,a4)
a2=b0.d
a2===$&&A.C()
a5=g*0.0256
d=0.366025403784439*(m+a5)
a5=a2.q(m+d,a5+d)
a2=b0.e
a2===$&&A.C()
a6=g*0.0000032000000000000003
d=0.366025403784439*(l+a6)
a6=a2.q(l+d,a6+d)
a2=b0.f
a2===$&&A.C()
a7=g*0.000012800000000000001
d=0.366025403784439*(k+a7)
a7=a2.q(k+d,a7+d)
a2=b0.r
a2===$&&A.C()
a8=g*0.000051200000000000004
d=0.366025403784439*(j+a8)
a8=a2.q(j+d,a8+d)
a2=b0.w
a2===$&&A.C()
a9=g*0.00020480000000000002
d=0.366025403784439*(i+a9)
a9=a2.q(i+d,a9+d)
if(!(r<t))return A.d(b1,r)
B.b.j(b1[r],h,B.c.aC(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+2)/4-0.71)*100))
a9=b0.x
a9===$&&A.C()
a9=a9.q(c,b)
a8=b0.y
a8===$&&A.C()
a8=a8.q(a0,a1)
a7=b0.z
a7===$&&A.C()
a7=a7.q(a3,a4)
if(!(r<s))return A.d(b2,r)
B.b.j(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aH(b1,b2)},
a4(a,b){var t,s,r,q,p=J.cO(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cO(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.P.prototype={
u(a,b){var t,s=this
if(b==null)return!1
if(s!==b)t=b instanceof A.P&&A.cy(s)===A.cy(b)&&s.a===b.a&&s.b===b.b&&s.c===b.c
else t=!0
return t},
gk(a){return B.a.gk(this.a)^B.a.gk(this.b)^B.a.gk(this.c)}}
A.w.prototype={
G(a,b){var t=A.bB(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.w(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
u(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.w)t=b
else if(A.c5(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cg(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
I(a,b){return this.am(b)},
am(a){var t=A.bB(a),s=this.c,r=s>>>19,q=t.c
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
gab(){return this.c===0&&this.b===0&&this.a===0},
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
return A.dQ(10,q,p,o,r)},
$iu:1}
A.e.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bJ.prototype={
aj(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cS){A.dW()
$.cS=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.d(t,s)
t[s]=s}r=A.cg(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cM("6364136223846793005",10,!0)
m.toString
l=A.bB(m)
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
m=A.cM("1442695040888963407",10,!0)
m.toString
r=new A.w(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).G(0,m)
m=s+1
a7=A.dO(r.G(0,31),m,3).m(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.d(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bK.length))return A.d($.bK,m)
B.b.j(p,s,$.bK[m])
m=q[s]
if(!(m>=0&&m<$.bL.length))return A.d($.bL,m)
B.b.j(o,s,$.bL[m])
m=q[s]
if(!(m>=0&&m<$.bM.length))return A.d($.bM,m)
B.b.j(n,s,$.bM[m])
t[a7]=t[s]}},
q(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.F(a),i=B.c.F(b),h=a-j,g=b-i,f=B.c.m((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.d(B.o,p)
o=B.o[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.d(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.a0.prototype={}
A.bk.prototype={}
A.bl.prototype={};(function aliases(){var t=J.Z.prototype
t.ai=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eD","dR",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cj,J.b_,J.aW,A.bx,A.bS,A.b4,A.L,A.ae,A.W,A.ac,A.am,A.b2,A.K,A.c1,A.at,A.bD,A.z,A.bj,A.c2,A.ay,A.bm,A.bn,A.B,A.aO,A.bX,A.bN,A.bZ,A.bz,A.ax,A.az,A.a_,A.bu,A.b0,A.bi,A.M,A.b6,A.r,A.bQ,A.bI,A.P,A.w,A.e,A.c,A.a,A.bJ,A.a0,A.bk,A.bl])
r(J.b_,[J.b1,J.aq,J.p,J.aa,J.Y])
r(J.p,[J.Z,J.h,A.b9,A.bw])
r(J.Z,[J.ba,J.ag,J.N])
s(J.bC,J.h)
r(J.aa,[J.ap,J.b3])
r(A.bx,[A.as,A.bW,A.bR,A.bY,A.bt,A.bT,A.a5,A.bG,A.bV,A.bU,A.bv])
s(A.a1,A.W)
r(A.a1,[A.aH,A.aI])
s(A.ah,A.ac)
s(A.aB,A.ah)
s(A.an,A.aB)
s(A.ao,A.am)
r(A.K,[A.aY,A.bh,A.c7,A.c9,A.cb])
r(A.aY,[A.bO,A.c8,A.bF,A.bH])
r(A.bh,[A.bf,A.a6])
s(A.ar,A.at)
s(A.ad,A.b9)
r(A.ad,[A.aD,A.aF])
s(A.aE,A.aD)
s(A.av,A.aE)
s(A.aG,A.aF)
s(A.aw,A.aG)
s(A.b7,A.av)
s(A.b8,A.aw)
s(A.bo,A.bY)
s(A.aJ,A.ay)
s(A.aC,A.aJ)
r(A.a5,[A.bc,A.bA])
r(A.bX,[A.k,A.S])
s(A.aA,A.M)
s(A.bg,A.b6)
t(A.aD,A.B)
t(A.aE,A.L)
t(A.aF,A.B)
t(A.aG,A.L)
t(A.ah,A.aO)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",y:"num",A:"String",cv:"bool",ax:"Null",i:"List"},mangledNames:{},types:["~(A,@)","@(@)","@(@,A)","@(A)","~(j?,j?)","~(af,@)","i<i<@>?>(@)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aH&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aI&&a.b(c.a)&&b.b(c.b)}}
A.el(v.typeUniverse,JSON.parse('{"ba":"Z","ag":"Z","N":"Z","b1":{"cv":[],"x":[]},"aq":{"x":[]},"h":{"i":["1"],"q":["1"]},"bC":{"h":["1"],"i":["1"],"q":["1"]},"aa":{"m":[],"y":[],"u":["y"]},"ap":{"m":[],"o":[],"y":[],"u":["y"],"x":[]},"b3":{"m":[],"y":[],"u":["y"],"x":[]},"Y":{"A":[],"u":["A"],"cT":[],"x":[]},"ae":{"af":[]},"aH":{"a1":[],"W":[]},"aI":{"a1":[],"W":[]},"an":{"aB":["1","2"],"ah":["1","2"],"ac":["1","2"],"aO":["1","2"],"O":["1","2"]},"am":{"O":["1","2"]},"ao":{"am":["1","2"],"O":["1","2"]},"b2":{"cN":[]},"K":{"a8":[]},"aY":{"a8":[]},"bh":{"a8":[]},"bf":{"a8":[]},"a6":{"a8":[]},"ar":{"at":["1","2"],"O":["1","2"]},"a1":{"W":[]},"ad":{"ab":["1"]},"av":{"B":["m"],"ab":["m"],"i":["m"],"q":["m"],"L":["m"]},"aw":{"B":["o"],"ab":["o"],"i":["o"],"q":["o"],"L":["o"]},"b7":{"B":["m"],"by":[],"ab":["m"],"i":["m"],"q":["m"],"L":["m"],"x":[],"B.E":"m"},"b8":{"B":["o"],"cf":[],"ab":["o"],"i":["o"],"q":["o"],"L":["o"],"x":[],"B.E":"o"},"aC":{"q":["1"]},"at":{"O":["1","2"]},"ac":{"O":["1","2"]},"aB":{"ah":["1","2"],"ac":["1","2"],"aO":["1","2"],"O":["1","2"]},"ay":{"q":["1"]},"aJ":{"q":["1"]},"m":{"y":[],"u":["y"]},"o":{"y":[],"u":["y"]},"i":{"q":["1"]},"y":{"u":["y"]},"A":{"u":["A"],"cT":[]},"M":{"u":["M"]},"aA":{"M":[],"u":["M"]},"bg":{"b6":[]},"w":{"u":["j"]},"cf":{"i":["o"],"q":["o"]},"by":{"i":["m"],"q":["m"]}}'))
A.ek(v.typeUniverse,JSON.parse('{"ad":1,"ay":1,"aJ":1}'))
var u=(function rtii(){var t=A.a3
return{s:t("u<@>"),a:t("an<af,@>"),Z:t("a8"),k:t("M"),q:t("e"),h:t("c"),U:t("a"),o:t("cN"),V:t("h<by>"),f:t("h<e>"),Y:t("h<c>"),J:t("h<a>"),G:t("h<j>"),W:t("h<A>"),Q:t("h<aA>"),c:t("h<r>"),n:t("h<m>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("aq"),g:t("N"),p:t("ab<@>"),B:t("ar<af,@>"),I:t("i<i<m>>"),r:t("i<m>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("ax"),K:t("j"),C:t("P"),O:t("a_<m>"),L:t("fg"),F:t("+()"),N:t("A"),m:t("af"),R:t("x"),D:t("ag"),E:t("bi"),y:t("cv"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("j*"),d:t("cL<ax>?"),X:t("j?"),M:t("bm?"),H:t("y")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dn=J.b_.prototype
B.b=J.h.prototype
B.a=J.ap.prototype
B.c=J.aa.prototype
B.d=J.Y.prototype
B.dp=J.N.prototype
B.dq=J.p.prototype
B.u=J.ba.prototype
B.j=J.ag.prototype
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

B.D=new A.bN()
B.h=new A.bS()
B.m=new A.c1()
B.E=new A.e(0,0)
B.a3=new A.c(0,0,0)
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
B.ai=new A.c(-2.22474487139,-2.22474487139,-1)
B.aB=new A.c(-2.22474487139,-2.22474487139,1)
B.ab=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aH=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.ap=new A.c(-2.22474487139,-1,-2.22474487139)
B.aA=new A.c(-2.22474487139,1,-2.22474487139)
B.al=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aI=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.av=new A.c(-2.22474487139,-1,2.22474487139)
B.ah=new A.c(-2.22474487139,1,2.22474487139)
B.a7=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a5=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.aC=new A.c(-2.22474487139,2.22474487139,-1)
B.a9=new A.c(-2.22474487139,2.22474487139,1)
B.am=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.ay=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.aa=new A.c(-1,-2.22474487139,-2.22474487139)
B.a6=new A.c(1,-2.22474487139,-2.22474487139)
B.aq=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.az=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a4=new A.c(-1,-2.22474487139,2.22474487139)
B.ac=new A.c(1,-2.22474487139,2.22474487139)
B.a2=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ae=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aG=new A.c(-1,2.22474487139,-2.22474487139)
B.aD=new A.c(1,2.22474487139,-2.22474487139)
B.at=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.aj=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.ao=new A.c(-1,2.22474487139,2.22474487139)
B.aN=new A.c(1,2.22474487139,2.22474487139)
B.af=new A.c(0,3.0862664687972017,1.1721513422464978)
B.an=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aK=new A.c(2.22474487139,-2.22474487139,-1)
B.aE=new A.c(2.22474487139,-2.22474487139,1)
B.ad=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.as=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.ag=new A.c(2.22474487139,-1,-2.22474487139)
B.aF=new A.c(2.22474487139,1,-2.22474487139)
B.aL=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.a8=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aJ=new A.c(2.22474487139,-1,2.22474487139)
B.aw=new A.c(2.22474487139,1,2.22474487139)
B.au=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aO=new A.c(3.0862664687972017,0,1.1721513422464978)
B.ax=new A.c(2.22474487139,2.22474487139,-1)
B.aM=new A.c(2.22474487139,2.22474487139,1)
B.ar=new A.c(3.0862664687972017,1.1721513422464978,0)
B.ak=new A.c(1.1721513422464978,3.0862664687972017,0)
B.dN=A.f(t([B.ai,B.aB,B.ab,B.aH,B.ap,B.aA,B.al,B.aI,B.av,B.ah,B.a7,B.a5,B.aC,B.a9,B.am,B.ay,B.aa,B.a6,B.aq,B.az,B.a4,B.ac,B.a2,B.ae,B.aG,B.aD,B.at,B.aj,B.ao,B.aN,B.af,B.an,B.aK,B.aE,B.ad,B.as,B.ag,B.aF,B.aL,B.a8,B.aJ,B.aw,B.au,B.aO,B.ax,B.aM,B.ar,B.ak]),u.Y)
B.r=A.f(t([]),u.b)
B.dO={}
B.t=new A.ao(B.dO,[],A.a3("ao<af,@>"))
B.dP=new A.ae("call")
B.dQ=new A.S("ice")
B.i=new A.S("grass")
B.e=new A.S("deathGrass")
B.f=new A.S("rock")
B.v=new A.S("snow")
B.w=new A.S("sand")
B.dR=A.cC("by")
B.dS=A.cC("cf")
B.dT=A.cC("j")})();(function staticFields(){$.c_=null
$.J=A.f([],u.G)
$.cU=null
$.cH=null
$.cG=null
$.dl=null
$.dj=null
$.dr=null
$.c6=null
$.ca=null
$.cz=null
$.c0=A.f([],A.a3("h<i<j>?>"))
$.bK=A.f([],u.f)
$.bL=A.f([],u.Y)
$.bM=A.f([],u.J)
$.cS=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fd","cD",()=>A.eX("_$dart_dartClosure"))
t($,"fq","cd",()=>A.dp(B.dT))
t($,"fr","dv",()=>A.au(A.f([80,80,0,120,80,161,80,80,0,120,0,40,80,80,0,40,80,0,80,80,80,0,161,40,80,80,161,40,161,120,80,80,161,120,80,161],u.n)))
t($,"fs","dw",()=>A.au(A.f([80,241,0,281,80,322,80,241,0,281,0,201,80,241,0,201,80,161,80,241,80,161,161,201,80,241,161,201,161,281,80,241,161,281,80,322],u.n)))
t($,"fv","dy",()=>A.au(A.f([80,402,0,442,80,483,80,402,0,442,0,362,80,402,0,362,80,322,80,402,80,322,161,362,80,402,161,362,161,442,80,402,161,442,80,483],u.n)))
t($,"fx","dA",()=>A.au(A.f([80,563,0,603,80,644,80,563,0,603,0,523,80,563,0,523,80,483,80,563,80,483,161,523,80,563,161,523,161,603,80,563,161,603,80,644],u.n)))
t($,"ft","dx",()=>A.au(A.f([80,724,0,764,80,805,80,724,0,764,0,684,80,724,0,684,80,644,80,724,80,644,161,684,80,724,161,684,161,764,80,724,161,764,80,805],u.n)))
t($,"fw","dz",()=>A.au(A.f([80,885,0,925,80,966,80,885,0,925,0,845,80,885,0,845,80,805,80,885,80,805,161,845,80,885,161,845,161,925,80,885,161,925,80,966],u.n)))
t($,"fe","dt",()=>A.b5(8,A.U(0,0,0,0),A.a3("bk")))
t($,"ff","du",()=>A.b5(16,A.d1(0,0,0,0),A.a3("bl")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.b9,Float32Array:A.b7,Int16Array:A.b8,DOMException:A.bw})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"
A.av.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.aw.$nativeSuperclassTag="ArrayBufferView"})()
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
