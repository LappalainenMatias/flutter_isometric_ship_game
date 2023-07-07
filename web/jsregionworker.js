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
a[c]=function(){a[c]=function(){A.eT(b)}
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
if(a[b]!==t)A.eU(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cf(b)
return new t(c,this)}:function(){if(t===null)t=A.cf(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cf(a).prototype
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
a(hunkHelpers,v,w,$)}var A={c2:function c2(){},
dx(a){return new A.aW("Field '"+a+"' has not been initialized.")},
cK(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ci(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
dL(a,b,c){A.b2(a,0,J.bZ(a)-1,b,c)},
b2(a,b,c,d,e){if(c-b<=32)A.dK(a,b,c,d,e)
else A.dJ(a,b,c,d,e)},
dK(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.aK(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
dJ(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.d.P(a4-a3+1,6),j=a3+k,i=a4-k,h=B.d.P(a3+a4,2),g=h-k,f=h+k,e=J.aK(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.bc(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.b2(a2,a3,s-2,a5,a6)
A.b2(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.bc(a5.$2(e.h(a2,s),c),0);)++s
for(;J.bc(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.b2(a2,s,r,a5,a6)}else A.b2(a2,s,r,a5,a6)},
aW:function aW(a){this.a=a},
ak:function ak(){},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
B:function B(){},
aa:function aa(a){this.a=a},
dt(){throw A.b(A.E("Cannot modify unmodifiable Map"))},
db(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fb(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aM(a)
return t},
b1(a){var t,s=$.cE
if(s==null)s=$.cE=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
dD(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.a(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bx(a){return A.dB(a)},
dB(a){var t,s,r,q
if(a instanceof A.k)return A.v(A.N(a),null)
t=J.M(a)
if(t===B.an||t===B.aq||u.C.b(a)){s=B.A(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.N(a),null)},
dE(a){if(typeof a=="number"||A.cd(a))return J.aM(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.P)return a.j(0)
return"Instance of '"+A.bx(a)+"'"},
R(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.q(t,b)
r.b=""
if(c!=null&&c.a!==0)c.B(0,new A.bw(r,s,t))
return J.di(a,new A.aU(B.at,0,t,s,0))},
dC(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dA(a,b,c)},
dA(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.c5(b,u.z),g=h.length,f=a.$R
if(g<f)return A.R(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.M(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.R(a,h,c)
if(g===f)return p.apply(a,h)
return A.R(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.R(a,h,c)
o=f+r.length
if(g>o)return A.R(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.c5(h,u.z)
B.a.q(h,n)}return p.apply(a,h)}else{if(g>f)return A.R(a,h,c)
if(h===b)h=A.c5(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.bb)(m),++l){k=r[A.ad(m[l])]
if(B.C===k)return A.R(a,h,c)
B.a.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.bb)(m),++l){i=A.ad(m[l])
if(c.R(i)){++j
B.a.l(h,c.h(0,i))}else{k=r[i]
if(B.C===k)return A.R(a,h,c)
B.a.l(h,k)}}if(j!==c.a)return A.R(a,h,c)}return p.apply(a,h)}},
a(a,b){if(a==null)J.bZ(a)
throw A.b(A.ba(a,b))},
ba(a,b){var t,s="index"
if(!A.d0(b))return new A.a0(!0,b,s,null)
t=J.bZ(a)
if(b<0||b>=t)return A.dv(b,t,a,s)
return A.dG(b,s)},
ey(a){return new A.a0(!0,a,null,null)},
b(a){var t,s
if(a==null)a=new A.bC()
t=new Error()
t.dartException=a
s=A.eV
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eV(){return J.aM(this.dartException)},
a_(a){throw A.b(a)},
bb(a){throw A.b(A.aR(a))},
eQ(a){if(a==null||typeof a!="object")return J.bY(a)
else return A.b1(a)},
eB(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
ds(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b3().constructor.prototype):Object.create(new A.a1(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cs(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dn(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cs(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dn(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dl)}throw A.b("Error in functionType of tearoff")},
dp(a,b,c,d){var t=A.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cs(a,b,c,d){var t,s
if(c)return A.dr(a,b,d)
t=b.length
s=A.dp(t,d,a,b)
return s},
dq(a,b,c,d){var t=A.cr,s=A.dm
switch(b?-1:a){case 0:throw A.b(new A.bB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dr(a,b,c){var t,s
if($.cp==null)$.cp=A.co("interceptor")
if($.cq==null)$.cq=A.co("receiver")
t=b.length
s=A.dq(t,c,a,b)
return s},
cf(a){return A.ds(a)},
dl(a,b){return A.bN(v.typeUniverse,A.N(a.a),b)},
cr(a){return a.a},
dm(a){return a.b},
co(a){var t,s,r,q=new A.a1("receiver","interceptor"),p=J.cB(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dj("Field name "+a+" not found."))},
eT(a){throw A.b(new A.bF(a))},
eD(a){return v.getIsolateTag(a)},
c3(a,b,c){var t=new A.a7(a,b,c.k("a7<0>"))
t.c=a.e
return t},
eN(a){var t,s,r,q,p,o=A.ad($.d6.$1(a)),n=$.bR[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bV[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.e7($.d3.$2(a,o))
if(r!=null){n=$.bR[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bV[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bX(t)
$.bR[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bV[o]=t
return t}if(q==="-"){p=A.bX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.d8(a,t)
if(q==="*")throw A.b(A.cL(o))
if(v.leafTags[o]===true){p=A.bX(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.d8(a,t)},
d8(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cj(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX(a){return J.cj(a,!1,null,!!a.$ia6)},
eP(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bX(t)
else return J.cj(t,c,null,null)},
eJ(){if(!0===$.ch)return
$.ch=!0
A.eK()},
eK(){var t,s,r,q,p,o,n,m
$.bR=Object.create(null)
$.bV=Object.create(null)
A.eI()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.d9.$1(p)
if(o!=null){n=A.eP(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eI(){var t,s,r,q,p,o,n=B.L()
n=A.ae(B.M,A.ae(B.N,A.ae(B.B,A.ae(B.B,A.ae(B.O,A.ae(B.P,A.ae(B.Q(B.A),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d6=new A.bS(q)
$.d3=new A.bT(p)
$.d9=new A.bU(o)},
ae(a,b){return a(b)||b},
eA(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
ai:function ai(a,b){this.a=a
this.$ti=b},
ah:function ah(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aU:function aU(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
P:function P(){},
aP:function aP(){},
b4:function b4(){},
b3:function b3(){},
a1:function a1(a,b){this.a=a
this.b=b},
bF:function bF(a){this.a=a},
bB:function bB(a){this.a=a},
bL:function bL(){},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bm:function bm(a){this.a=a},
bn:function bn(a,b){this.a=a
this.b=b
this.c=null},
bo:function bo(a,b){this.a=a
this.$ti=b},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bS:function bS(a){this.a=a},
bT:function bT(a){this.a=a},
bU:function bU(a){this.a=a},
bQ(a){return a},
bP(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.ba(b,a))},
b_:function b_(){},
a9:function a9(){},
aq:function aq(){},
ar:function ar(){},
aY:function aY(){},
aZ:function aZ(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
aD:function aD(){},
cG(a,b){var t=b.c
return t==null?b.c=A.ca(a,b.y,!0):t},
c6(a,b){var t=b.c
return t==null?b.c=A.aF(a,"cw",[b.y]):t},
cH(a){var t=a.x
if(t===6||t===7||t===8)return A.cH(a.y)
return t===12||t===13},
dI(a){return a.at},
U(a){return A.b8(v.typeUniverse,a,!1)},
T(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.cU(a,s,!0)
case 7:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.ca(a,s,!0)
case 8:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.cT(a,s,!0)
case 9:r=b.z
q=A.aJ(a,r,c,a0)
if(q===r)return b
return A.aF(a,b.y,q)
case 10:p=b.y
o=A.T(a,p,c,a0)
n=b.z
m=A.aJ(a,n,c,a0)
if(o===p&&m===n)return b
return A.c8(a,o,m)
case 12:l=b.y
k=A.T(a,l,c,a0)
j=b.z
i=A.eu(a,j,c,a0)
if(k===l&&i===j)return b
return A.cS(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aJ(a,h,c,a0)
p=b.y
o=A.T(a,p,c,a0)
if(g===h&&o===p)return b
return A.c9(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.aO("Attempted to substitute unexpected RTI kind "+d))}},
aJ(a,b,c,d){var t,s,r,q,p=b.length,o=A.bO(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.T(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
ev(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bO(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.T(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eu(a,b,c,d){var t,s=b.a,r=A.aJ(a,s,c,d),q=b.b,p=A.aJ(a,q,c,d),o=b.c,n=A.ev(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.b6()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
d4(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eH(s)
t=a.$S()
return t}return null},
eL(a,b){var t
if(A.cH(b))if(a instanceof A.P){t=A.d4(a)
if(t!=null)return t}return A.N(a)},
N(a){if(a instanceof A.k)return A.u(a)
if(Array.isArray(a))return A.aI(a)
return A.cc(J.M(a))},
aI(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
u(a){var t=a.$ti
return t!=null?t:A.cc(a)},
cc(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eh(a,t)},
eh(a,b){var t=a instanceof A.P?a.__proto__.__proto__.constructor:b,s=A.e3(v.typeUniverse,t.name)
b.$ccache=s
return s},
eH(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.b8(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eF(a){return A.Z(A.u(a))},
et(a){var t=a instanceof A.P?A.d4(a):null
if(t!=null)return t
if(u.R.b(a))return J.dh(a).a
if(Array.isArray(a))return A.aI(a)
return A.N(a)},
Z(a){var t=a.w
return t==null?a.w=A.cX(a):t},
cX(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bM(a)
t=A.b8(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.cX(t):s},
da(a){return A.Z(A.b8(v.typeUniverse,a,!1))},
eg(a){var t,s,r,q,p,o=this
if(o===u.K)return A.L(o,a,A.em)
if(!A.O(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.L(o,a,A.eq)
t=o.x
if(t===7)return A.L(o,a,A.ee)
if(t===1)return A.L(o,a,A.d1)
s=t===6?o.y:o
t=s.x
if(t===8)return A.L(o,a,A.ei)
if(s===u.S)r=A.d0
else if(s===u.i||s===u.H)r=A.el
else if(s===u.N)r=A.eo
else r=s===u.y?A.cd:null
if(r!=null)return A.L(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eM)){o.r="$i"+q
if(q==="j")return A.L(o,a,A.ek)
return A.L(o,a,A.ep)}}else if(t===11){p=A.eA(s.y,s.z)
return A.L(o,a,p==null?A.d1:p)}return A.L(o,a,A.ec)},
L(a,b,c){a.b=c
return a.b(b)},
ef(a){var t,s=this,r=A.eb
if(!A.O(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.e8
else if(s===u.K)r=A.e6
else{t=A.aL(s)
if(t)r=A.ed}s.a=r
return s.a(a)},
b9(a){var t,s=a.x
if(!A.O(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.b9(a.y)))t=s===8&&A.b9(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ec(a){var t=this
if(a==null)return A.b9(t)
return A.l(v.typeUniverse,A.eL(a,t),null,t,null)},
ee(a){if(a==null)return!0
return this.y.b(a)},
ep(a){var t,s=this
if(a==null)return A.b9(s)
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.M(a)[t]},
ek(a){var t,s=this
if(a==null)return A.b9(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.M(a)[t]},
eb(a){var t,s=this
if(a==null){t=A.aL(s)
if(t)return a}else if(s.b(a))return a
A.cY(a,s)},
ed(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cY(a,t)},
cY(a,b){throw A.b(A.dT(A.cM(a,A.v(b,null))))},
cM(a,b){return A.a2(a)+": type '"+A.v(A.et(a),null)+"' is not a subtype of type '"+b+"'"},
dT(a){return new A.b7("TypeError: "+a)},
r(a,b){return new A.b7("TypeError: "+A.cM(a,b))},
ei(a){var t=this
return t.y.b(a)||A.c6(v.typeUniverse,t).b(a)},
em(a){return a!=null},
e6(a){if(a!=null)return a
throw A.b(A.r(a,"Object"))},
eq(a){return!0},
e8(a){return a},
d1(a){return!1},
cd(a){return!0===a||!1===a},
f1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.r(a,"bool"))},
f3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool"))},
f2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool?"))},
cb(a){if(typeof a=="number")return a
throw A.b(A.r(a,"double"))},
f5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double"))},
f4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double?"))},
d0(a){return typeof a=="number"&&Math.floor(a)===a},
ac(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.r(a,"int"))},
f7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int"))},
f6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int?"))},
el(a){return typeof a=="number"},
f8(a){if(typeof a=="number")return a
throw A.b(A.r(a,"num"))},
f9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num"))},
e5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num?"))},
eo(a){return typeof a=="string"},
ad(a){if(typeof a=="string")return a
throw A.b(A.r(a,"String"))},
fa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String"))},
e7(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String?"))},
d2(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
es(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d2(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cZ(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.f([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.a(a4,k)
n=B.ao.m(n+m,a4[k])
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
if(m===9){q=A.ew(a.y)
p=a.z
return p.length>0?q+("<"+A.d2(p,b)+">"):q}if(m===11)return A.es(a,b)
if(m===12)return A.cZ(a,b,null)
if(m===13)return A.cZ(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
ew(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e4(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
e3(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.b8(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aG(a,5,"#")
r=A.bO(t)
for(q=0;q<t;++q)r[q]=s
p=A.aF(a,b,r)
o[b]=p
return p}else return n},
e1(a,b){return A.cV(a.tR,b)},
e0(a,b){return A.cV(a.eT,b)},
b8(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cQ(A.cO(a,null,b,c))
s.set(b,t)
return t},
bN(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cQ(A.cO(a,b,c,!0))
r.set(c,s)
return s},
e2(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.c8(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
K(a,b){b.a=A.ef
b.b=A.eg
return b},
aG(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.C(null,null)
t.x=b
t.at=c
s=A.K(a,t)
a.eC.set(c,s)
return s},
cU(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.dY(a,b,s,c)
a.eC.set(s,t)
return t},
dY(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.O(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.C(null,null)
r.x=6
r.y=b
r.at=c
return A.K(a,r)},
ca(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.dX(a,b,s,c)
a.eC.set(s,t)
return t},
dX(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.O(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aL(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aL(r.y))return r
else return A.cG(a,b)}}q=new A.C(null,null)
q.x=7
q.y=b
q.at=c
return A.K(a,q)},
cT(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.dV(a,b,s,c)
a.eC.set(s,t)
return t},
dV(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.O(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aF(a,"cw",[b])
else if(b===u.P||b===u.T)return u.V}r=new A.C(null,null)
r.x=8
r.y=b
r.at=c
return A.K(a,r)},
dZ(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.C(null,null)
t.x=14
t.y=b
t.at=r
s=A.K(a,t)
a.eC.set(r,s)
return s},
aE(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
dU(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aF(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aE(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.C(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.K(a,s)
a.eC.set(q,r)
return r},
c8(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aE(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.C(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.K(a,p)
a.eC.set(r,o)
return o},
e_(a,b,c){var t,s,r="+"+(b+"("+A.aE(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.C(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.K(a,t)
a.eC.set(r,s)
return s},
cS(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aE(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aE(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.dU(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.C(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.K(a,q)
a.eC.set(s,p)
return p},
c9(a,b,c,d){var t,s=b.at+("<"+A.aE(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.dW(a,b,c,s,d)
a.eC.set(s,t)
return t},
dW(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bO(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.T(a,b,s,0)
n=A.aJ(a,c,s,0)
return A.c9(a,o,n,c!==n)}}m=new A.C(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.K(a,m)},
cO(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cQ(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dO(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cP(a,s,m,l,!1)
else if(r===46)s=A.cP(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.S(a.u,a.e,l.pop()))
break
case 94:l.push(A.dZ(a.u,l.pop()))
break
case 35:l.push(A.aG(a.u,5,"#"))
break
case 64:l.push(A.aG(a.u,2,"@"))
break
case 126:l.push(A.aG(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dQ(a,l)
break
case 38:A.dP(a,l)
break
case 42:q=a.u
l.push(A.cU(q,A.S(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.ca(q,A.S(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cT(q,A.S(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dN(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cR(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.dS(a.u,a.e,p)
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
dO(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cP(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.e4(t,p.y)[q]
if(o==null)A.a_('No "'+q+'" in "'+A.dI(p)+'"')
d.push(A.bN(t,p,o))}else d.push(q)
return n},
dQ(a,b){var t,s=a.u,r=A.cN(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aF(s,q,r))
else{t=A.S(s,a.e,q)
switch(t.x){case 12:b.push(A.c9(s,t,r,a.n))
break
default:b.push(A.c8(s,t,r))
break}}},
dN(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cN(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.S(n,a.e,m)
p=new A.b6()
p.a=r
p.b=t
p.c=s
b.push(A.cS(n,q,p))
return
case-4:b.push(A.e_(n,b.pop(),r))
return
default:throw A.b(A.aO("Unexpected state under `()`: "+A.d(m)))}},
dP(a,b){var t=b.pop()
if(0===t){b.push(A.aG(a.u,1,"0&"))
return}if(1===t){b.push(A.aG(a.u,4,"1&"))
return}throw A.b(A.aO("Unexpected extended operation "+A.d(t)))},
cN(a,b){var t=b.splice(a.p)
A.cR(a.u,a.e,t)
a.p=b.pop()
return t},
S(a,b,c){if(typeof c=="string")return A.aF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dR(a,b,c)}else return c},
cR(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.S(a,b,c[t])},
dS(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.S(a,b,c[t])},
dR(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.aO("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.aO("Bad index "+c+" for "+b.j(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.O(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.O(b))return!1
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
if(q===6){t=A.cG(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.c6(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.c6(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
return t||A.l(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.I)return!0
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.d_(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d_(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.ej(a,b,c,d,e)}if(p&&q===11)return A.en(a,b,c,d,e)
return!1},
d_(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
ej(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bN(a,b,s[p])
return A.cW(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cW(a,o,null,c,n,e)},
cW(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
en(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aL(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.O(a))if(s!==7)if(!(s===6&&A.aL(a.y)))t=s===8&&A.aL(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eM(a){var t
if(!A.O(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
O(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cV(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bO(a){return a>0?new Array(a):v.typeUniverse.sEA},
C:function C(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b6:function b6(){this.c=this.b=this.a=null},
bM:function bM(a){this.a=a},
bH:function bH(){},
b7:function b7(a){this.a=a},
dy(a,b,c){return b.k("@<0>").Z(c).k("cC<1,2>").a(A.eB(a,new A.V(b.k("@<0>").Z(c).k("V<1,2>"))))},
bq(a){var t,s={}
if(A.ci(a))return"{...}"
t=new A.ax("")
try{B.a.l($.A,a)
t.a+="{"
s.a=!0
a.B(0,new A.br(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.a($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
w:function w(){},
ap:function ap(){},
bp:function bp(a){this.a=a},
br:function br(a,b){this.a=a
this.b=b},
aH:function aH(){},
a8:function a8(){},
az:function az(){},
ab:function ab(){},
d7(a){var t=A.dD(a,null)
if(t!=null)return t
throw A.b(new A.bj(a))},
c4(a,b,c,d){var t,s
if(c)t=A.f(new Array(a),d.k("e<0>"))
else{if(a>4294967295)A.a_(A.cF(a,0,4294967295,"length",null))
t=J.cA(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
c5(a,b){var t=A.dz(a,b)
return t},
dz(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.k("e<0>"))
t=A.f([],b.k("e<0>"))
for(s=J.bd(a);s.u();)B.a.l(t,s.gD())
return t},
cJ(a,b,c){var t=J.bd(b)
if(!t.u())return a
if(c.length===0){do a+=A.d(t.gD())
while(t.u())}else{a+=A.d(t.gD())
for(;t.u();)a=a+c+A.d(t.gD())}return a},
cD(a,b){return new A.bs(a,b.gaf(),b.gah(),b.gag())},
a2(a){if(typeof a=="number"||A.cd(a)||a==null)return J.aM(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dE(a)},
aO(a){return new A.be(a)},
dj(a){return new A.a0(!1,null,null,a)},
dF(a){var t=null
return new A.aw(t,t,!1,t,t,a)},
dG(a,b){return new A.aw(null,null,!0,a,b,"Value not in range")},
cF(a,b,c,d,e){return new A.aw(b,c,!0,a,d,"Invalid value")},
dv(a,b,c,d){return new A.bk(b,!0,a,d,"Index out of range")},
E(a){return new A.bE(a)},
cL(a){return new A.bD(a)},
aR(a){return new A.bf(a)},
dw(a,b,c){var t,s
if(A.ci(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.f([],u.s)
B.a.l($.A,a)
try{A.er(a,t)}finally{if(0>=$.A.length)return A.a($.A,-1)
$.A.pop()}s=A.cJ(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cy(a,b,c){var t,s
if(A.ci(a))return b+"..."+c
t=new A.ax(b)
B.a.l($.A,a)
try{s=t
s.a=A.cJ(s.a,a,", ")}finally{if(0>=$.A.length)return A.a($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
er(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.c3(m,m.r,a.$ti.c),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
t=A.d(l.d)
B.a.l(b,t)
k+=t.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=l.d;++j
if(!l.u()){if(j<=4){B.a.l(b,A.d(q))
return}s=A.d(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
k+=s.length+2}else{p=l.d;++j
for(;l.u();q=p,p=o){o=l.d;++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}r=A.d(q)
s=A.d(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)B.a.l(b,n)
B.a.l(b,r)
B.a.l(b,s)},
bt:function bt(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
bG:function bG(){},
bh:function bh(){},
be:function be(a){this.a=a},
bC:function bC(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bk:function bk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(a){this.a=a},
bD:function bD(a){this.a=a},
bf:function bf(a){this.a=a},
bI:function bI(a){this.a=a},
bj:function bj(a){this.a=a},
i:function i(){},
at:function at(){},
k:function k(){},
ax:function ax(a){this.a=a},
bg:function bg(){},
bJ:function bJ(){},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO(){self.jsregionworker=A.ex(new A.bW(),u.q)},
bW:function bW(){},
by:function by(a){this.a=a},
bz:function bz(){},
bA:function bA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(a,b){this.c=a
this.b=b},
y:function y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D(a,b,c){return new A.b5(a,b,c)},
t(a,b){return new A.as(a,b)},
eG(a,b,c){var t,s,r,q
for(t=$.dg(),s=0;s<13;++s){r=t[s]
q=r.b
if(q==null||a<q){q=r.c
q=q==null||b<q}else q=!1
if(q){t=r.a
return new A.y(t,c,A.eE(t),a)}}throw A.b(new A.bI("No tile type found for elevation: "+A.d(a)+", moisture: "+A.d(b)+". Fix the rules."))},
eE(a){var t,s,r,q=$.df().h(0,a)
if(q!=null)for(t=q.length,s=0;s<q.length;q.length===t||(0,A.bb)(q),++s){r=q[s]
if(B.b.t()<r.b)return r.a}return B.as},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b){this.a=a
this.b=b},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
c:function c(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H(a,b){return new A.G(a*2-2*b,a+b)},
G:function G(a,b){this.a=a
this.b=b},
bu:function bu(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
al(a,b){var t=b.m(0,$.de().K(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.q(s,r),p=q.m(0,$.cm().K(0,s+r)),o=t.H(0,q)
return new A.bi(a,q,b.H(0,p),o)},
p(a,b){return new A.q(a,b)},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
q:function q(a,b){this.a=a
this.b=b},
au(a){var t,s,r,q,p=u.S,o=A.c4(256,0,!1,p),n=A.c4(256,0,!1,p)
for(t=0;t<256;++t)B.a.i(n,t,t)
s=A.d7("6364136223846793005")
r=A.d7("1442695040888963407")
a=B.d.U(B.d.U(B.d.U(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.d.a5(a+31,t+1)
if(!(q<256))return A.a(n,q)
B.a.i(o,t,n[q])
n[q]=n[t]}return new A.bv(o)},
bv:function bv(a){this.a=a},
eU(a){return A.a_(new A.aW("Field '"+a+"' has been assigned during initialization."))},
ag(){return A.a_(A.dx(""))},
ea(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.e9,a)
t[$.cl()]=a
a.$dart_jsFunction=t
return t},
e9(a,b){u.j.a(b)
u.Z.a(a)
return A.dC(a,b,null)},
ex(a,b){if(typeof a=="function")return a
else return b.a(A.ea(a))},
dk(a){var t,s,r=B.b.t()
$.c_=A.H(r/2,B.b.t()/2)
if(B.b.G(100)<95){t=A.cn(a)
s=A.F(a.b,a.d+2,B.a7,B.W,B.aj,3.5*(B.b.t()+0.5),$.c_,1.25)
if(0>=t.length)return A.a(t,0)
r=t[0]
if(0>=s.length)return A.a(s,0)
J.n(r,s[0])
if(1>=t.length)return A.a(t,1)
r=t[1]
if(1>=s.length)return A.a(s,1)
J.n(r,s[1])
return t}else return A.cn(a)},
cn(a){return A.F(a.b,a.d+1.25,B.ad,B.ab,B.a9,2*(B.b.t()+0.5),$.c_,0.3)},
du(a){var t,s,r,q,p,o=B.b.t()
$.a3=A.H(o/3,B.b.t()/3)
if(B.b.G(10)<5){t=B.b.G(10)
s=A.ct(a,B.q,B.p,B.o)
r=A.cu(a,B.q,B.p,B.o)
q=A.cv(a,B.q,B.p,B.o)
o=t<4
if(o){if(0>=s.length)return A.a(s,0)
p=s[0]
if(0>=r.length)return A.a(r,0)
J.n(p,r[0])}if(o){if(1>=s.length)return A.a(s,1)
o=s[1]
if(1>=r.length)return A.a(r,1)
J.n(o,r[1])}o=t<7
if(o){if(0>=s.length)return A.a(s,0)
p=s[0]
if(0>=q.length)return A.a(q,0)
J.n(p,q[0])}if(o){if(1>=s.length)return A.a(s,1)
o=s[1]
if(1>=q.length)return A.a(q,1)
J.n(o,q[1])}return s}else{t=B.b.G(10)
s=A.ct(a,B.n,B.m,B.l)
r=A.cu(a,B.n,B.m,B.l)
q=A.cv(a,B.n,B.m,B.l)
o=t<4
if(o){if(0>=s.length)return A.a(s,0)
p=s[0]
if(0>=r.length)return A.a(r,0)
J.n(p,r[0])}if(o){if(1>=s.length)return A.a(s,1)
o=s[1]
if(1>=r.length)return A.a(r,1)
J.n(o,r[1])}o=t<7
if(o){if(0>=s.length)return A.a(s,0)
p=s[0]
if(0>=q.length)return A.a(q,0)
J.n(p,q[0])}if(o){if(1>=s.length)return A.a(s,1)
o=s[1]
if(1>=q.length)return A.a(q,1)
J.n(o,q[1])}return s}},
cv(a,b,c,d){var t=a.b,s=a.d,r=A.F(t,s+1,B.k,B.t,B.r,0.4,$.a3.m(0,B.F),0.05),q=A.F(t,s+1.2,b,c,d,0.1,$.a3.m(0,B.F),0.2)
if(0>=r.length)return A.a(r,0)
s=r[0]
if(0>=q.length)return A.a(q,0)
J.n(s,q[0])
if(1>=r.length)return A.a(r,1)
s=r[1]
if(1>=q.length)return A.a(q,1)
J.n(s,q[1])
return r},
ct(a,b,c,d){var t=a.b,s=a.d,r=A.F(t,s+1,B.k,B.t,B.r,0.4,$.a3.m(0,B.D),0.05),q=A.F(t,s+1.2,b,c,d,0.1,$.a3.m(0,B.D),0.15)
if(0>=r.length)return A.a(r,0)
s=r[0]
if(0>=q.length)return A.a(q,0)
J.n(s,q[0])
if(1>=r.length)return A.a(r,1)
s=r[1]
if(1>=q.length)return A.a(q,1)
J.n(s,q[1])
return r},
cu(a,b,c,d){var t=a.b,s=a.d,r=A.F(t,s+1,B.k,B.t,B.r,0.4,$.a3.m(0,B.E),0.05),q=A.F(t,s+1.2,b,c,d,0.1,$.a3.m(0,B.E),0.2)
if(0>=r.length)return A.a(r,0)
s=r[0]
if(0>=q.length)return A.a(q,0)
J.n(s,q[0])
if(1>=r.length)return A.a(r,1)
s=r[1]
if(1>=q.length)return A.a(q,1)
J.n(s,q[1])
return r},
dH(a){var t=B.b.t()/2+0.25,s=B.b.t()
return A.F(a.b,a.d+1,B.T,B.ak,B.ai,0.8*t,A.H(s/10,B.b.t()/10),t)},
dM(a){var t,s,r=B.b.t()
$.c7=A.H(r/2,B.b.t()/2)
if(B.b.G(100)<95){t=A.cI(a)
r=B.b.t()
s=A.F(a.b,a.d+2,B.a4,B.am,B.af,3.5*(B.b.t()+0.5),$.c7,r/5+1)
if(0>=t.length)return A.a(t,0)
r=t[0]
if(0>=s.length)return A.a(s,0)
J.n(r,s[0])
if(1>=t.length)return A.a(t,1)
r=t[1]
if(1>=s.length)return A.a(s,1)
J.n(r,s[1])
return t}else return A.cI(a)},
cI(a){return A.F(a.b,a.d+1.25,B.a_,B.X,B.S,2*(B.b.t()+0.5),$.c7,0.25)},
F(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.25+Math.abs((a6-0.25)/5)
if(t>1){a7=B.e
a8=B.e
a9=B.e}else{a7=A.ck(a7,B.e,t)
a8=A.ck(a8,B.e,t)
a9=A.ck(a9,B.e,t)}}s=A.H(a5.a+a6,a5.b+a6).m(0,b1)
r=s.m(0,A.H(b0,b0))
q=s.m(0,A.H(0,b2))
p=r.m(0,A.H(0,b2))
o=s.m(0,A.H(b2,0))
n=r.m(0,A.H(b2,0))
m=p.m(0,A.H(b2,0))
l=s.a
k=s.b
j=r.a
i=r.b
h=q.a
g=q.b
f=p.a
e=p.b
d=m.a
c=m.b
b=n.a
a=n.b
a0=o.a
a1=o.b
a2=A.f([l,k,j,i,h,g,j,i,h,g,f,e,j,i,f,e,d,c,j,i,d,c,b,a,j,i,b,a,a0,a1,j,i,a0,a1,l,k],u.n)
a3=A.c4(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.i(a3,a4,a8.gV())
B.a.i(a3,a4+6,a7.gV())
B.a.i(a3,a4+12,a9.gV())}return[a2,a3]},
ck(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.c(B.c.I((t+(b.a/255-t)*c)*255),B.c.I((s+(b.b/255-s)*c)*255),B.c.I((r+(b.c/255-r)*c)*255),B.c.I((q+(b.d/255-q)*c)*255))}},J={
cj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.ch==null){A.eJ()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.cL("Return interceptor for "+A.d(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bK
if(p==null)p=$.bK=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eN(a)
if(q!=null)return q
if(typeof a=="function")return B.ap
t=Object.getPrototypeOf(a)
if(t==null)return B.I
if(t===Object.prototype)return B.I
if(typeof r=="function"){p=$.bK
if(p==null)p=$.bK=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.z,enumerable:false,writable:true,configurable:true})
return B.z}return B.z},
cz(a,b){if(a<0||a>4294967295)throw A.b(A.cF(a,0,4294967295,"length",null))
return J.cA(new Array(a),b)},
cA(a,b){return J.cB(A.f(a,b.k("e<0>")),b)},
cB(a,b){a.fixed$length=Array
return a},
M(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.am.prototype
return J.aV.prototype}if(typeof a=="string")return J.a5.prototype
if(a==null)return J.an.prototype
if(typeof a=="boolean")return J.aT.prototype
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.k)return a
return J.cg(a)},
aK(a){if(typeof a=="string")return J.a5.prototype
if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.k)return a
return J.cg(a)},
d5(a){if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.k)return a
return J.cg(a)},
bc(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).E(a,b)},
n(a,b){return J.d5(a).q(a,b)},
bY(a){return J.M(a).gn(a)},
bd(a){return J.d5(a).gT(a)},
bZ(a){return J.aK(a).gp(a)},
dh(a){return J.M(a).gC(a)},
di(a,b){return J.M(a).a4(a,b)},
aM(a){return J.M(a).j(a)},
aS:function aS(){},
aT:function aT(){},
an:function an(){},
o:function o(){},
W:function W(){},
b0:function b0(){},
ay:function ay(){},
Q:function Q(){},
e:function e(a){this.$ti=a},
bl:function bl(a){this.$ti=a},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
am:function am(){},
aV:function aV(){},
a5:function a5(){}},B={}
var w=[A,J,B]
var $={}
A.c2.prototype={}
J.aS.prototype={
E(a,b){return a===b},
gn(a){return A.b1(a)},
j(a){return"Instance of '"+A.bx(a)+"'"},
a4(a,b){throw A.b(A.cD(a,u.o.a(b)))},
gC(a){return A.Z(A.cc(this))}}
J.aT.prototype={
j(a){return String(a)},
gn(a){return a?519018:218159},
gC(a){return A.Z(u.y)},
$iz:1,
$ice:1}
J.an.prototype={
E(a,b){return null==b},
j(a){return"null"},
gn(a){return 0},
$iz:1}
J.o.prototype={}
J.W.prototype={
gn(a){return 0},
j(a){return String(a)}}
J.b0.prototype={}
J.ay.prototype={}
J.Q.prototype={
j(a){var t=a[$.cl()]
if(t==null)return this.a7(a)
return"JavaScript function for "+J.aM(t)},
$ia4:1}
J.e.prototype={
l(a,b){A.aI(a).c.a(b)
if(!!a.fixed$length)A.a_(A.E("add"))
a.push(b)},
q(a,b){var t
A.aI(a).k("i<1>").a(b)
if(!!a.fixed$length)A.a_(A.E("addAll"))
if(Array.isArray(b)){this.a8(a,b)
return}for(t=J.bd(b);t.u();)a.push(t.gD())},
a8(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.aR(a))
for(s=0;s<t;++s)a.push(b[s])},
j(a){return A.cy(a,"[","]")},
gT(a){return new J.aN(a,a.length,A.aI(a).k("aN<1>"))},
gn(a){return A.b1(a)},
gp(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.ba(a,b))
return a[b]},
i(a,b,c){A.aI(a).c.a(c)
if(!!a.immutable$list)A.a_(A.E("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.ba(a,b))
a[b]=c},
$ii:1,
$ij:1}
J.bl.prototype={}
J.aN.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
u(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bb(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa_(null)
return!1}s.sa_(r[t]);++s.c
return!0},
sa_(a){this.d=this.$ti.k("1?").a(a)}}
J.ao.prototype={
J(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.E(""+a+".toInt()"))},
I(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.E(""+a+".round()"))},
ai(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a5(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
P(a,b){return(a|0)===a?a/b|0:this.a9(a,b)},
a9(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.E("Result of truncating division is "+A.d(t)+": "+A.d(a)+" ~/ "+b))},
a6(a,b){if(b<0)throw A.b(A.ey(b))
return b>31?0:a<<b>>>0},
gC(a){return A.Z(u.H)},
$ih:1,
$iaf:1}
J.am.prototype={
U(a,b){var t=this.a6(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gC(a){return A.Z(u.S)},
$iz:1,
$im:1}
J.aV.prototype={
gC(a){return A.Z(u.i)},
$iz:1}
J.a5.prototype={
m(a,b){return a+b},
j(a){return a},
gn(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gC(a){return A.Z(u.N)},
gp(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.ba(a,b))
return a[b]},
$iz:1,
$iI:1}
A.aW.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.ak.prototype={}
A.aX.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
u(){var t,s=this,r=s.a,q=J.aK(r),p=q.gp(r)
if(s.b!==p)throw A.b(A.aR(r))
t=s.c
if(t>=p){s.sW(null)
return!1}s.sW(q.h(r,t));++s.c
return!0},
sW(a){this.d=this.$ti.k("1?").a(a)}}
A.B.prototype={
sp(a,b){throw A.b(A.E("Cannot change the length of a fixed-length list"))},
l(a,b){A.N(a).k("B.E").a(b)
throw A.b(A.E("Cannot add to a fixed-length list"))},
q(a,b){A.N(a).k("i<B.E>").a(b)
throw A.b(A.E("Cannot add to a fixed-length list"))}}
A.aa.prototype={
gn(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bY(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+A.d(this.a)+'")'},
E(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a==b.a},
$iY:1}
A.ai.prototype={}
A.ah.prototype={
j(a){return A.bq(this)},
q(a,b){A.u(this).k("x<1,2>").a(b)
A.dt()},
$ix:1}
A.aj.prototype={
gp(a){return this.a},
R(a){return!1},
h(a,b){if(!this.R(b))return null
return this.b[A.ad(b)]},
B(a,b){var t,s,r,q,p,o=this.$ti
o.k("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.ad(t[q])
b.$2(p,o.a(r[p]))}}}
A.aU.prototype={
gaf(){var t=this.a
return t},
gah(){var t,s,r,q,p=this
if(p.c===1)return B.G
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.G
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.a(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gag(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.H
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.H
p=new A.V(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.a(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.a(r,m)
p.i(0,new A.aa(n),r[m])}return new A.ai(p,u.a)},
$icx:1}
A.bw.prototype={
$2(a,b){var t
A.ad(a)
t=this.a
t.b=t.b+"$"+a
B.a.l(this.b,a)
B.a.l(this.c,b);++t.a},
$S:1}
A.P.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.db(s==null?"unknown":s)+"'"},
$ia4:1,
gaj(){return this},
$C:"$1",
$R:1,
$D:null}
A.aP.prototype={$C:"$2",$R:2}
A.b4.prototype={}
A.b3.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.db(t)+"'"}}
A.a1.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.eQ(this.a)^A.b1(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bx(this.a)+"'")}}
A.bF.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bB.prototype={
j(a){return"RuntimeError: "+this.a}}
A.bL.prototype={}
A.V.prototype={
gp(a){return this.a},
R(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
q(a,b){A.u(this).k("x<1,2>").a(b).B(0,new A.bm(this))},
h(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.ad(b)},
ad(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a2(a)]
s=this.a3(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r=this,q=A.u(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.Y(t==null?r.b=r.N():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.Y(s==null?r.c=r.N():s,b,c)}else r.ae(b,c)},
ae(a,b){var t,s,r,q,p=this,o=A.u(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.N()
s=p.a2(a)
r=t[s]
if(r==null)t[s]=[p.O(a,b)]
else{q=p.a3(r,a)
if(q>=0)r[q].b=b
else r.push(p.O(a,b))}},
B(a,b){var t,s,r=this
A.u(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.aR(r))
t=t.c}},
Y(a,b,c){var t,s=A.u(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.O(b,c)
else t.b=c},
O(a,b){var t=this,s=A.u(t),r=new A.bn(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a2(a){return J.bY(a)&0x3fffffff},
a3(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bc(a[s].a,b))return s
return-1},
j(a){return A.bq(this)},
N(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icC:1}
A.bm.prototype={
$2(a,b){var t=this.a,s=A.u(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.u(this.a).k("~(1,2)")}}
A.bn.prototype={}
A.bo.prototype={
gp(a){return this.a.a},
gT(a){var t=this.a,s=new A.a7(t,t.r,this.$ti.k("a7<1>"))
s.c=t.e
return s}}
A.a7.prototype={
gD(){return this.d},
u(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.b(A.aR(r))
t=s.c
if(t==null){s.sX(null)
return!1}else{s.sX(t.a)
s.c=t.c
return!0}},
sX(a){this.d=this.$ti.k("1?").a(a)}}
A.bS.prototype={
$1(a){return this.a(a)},
$S:2}
A.bT.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.bU.prototype={
$1(a){return this.a(A.ad(a))},
$S:4}
A.b_.prototype={}
A.a9.prototype={
gp(a){return a.length},
$ia6:1}
A.aq.prototype={
h(a,b){A.bP(b,a,a.length)
return a[b]},
i(a,b,c){A.cb(c)
A.bP(b,a,a.length)
a[b]=c},
$ii:1,
$ij:1}
A.ar.prototype={
i(a,b,c){A.ac(c)
A.bP(b,a,a.length)
a[b]=c},
$ii:1,
$ij:1}
A.aY.prototype={
gC(a){return B.au},
$iz:1,
$ic0:1}
A.aZ.prototype={
gC(a){return B.av},
h(a,b){A.bP(b,a,a.length)
return a[b]},
$iz:1,
$ic1:1}
A.aA.prototype={}
A.aB.prototype={}
A.aC.prototype={}
A.aD.prototype={}
A.C.prototype={
k(a){return A.bN(v.typeUniverse,this,a)},
Z(a){return A.e2(v.typeUniverse,this,a)}}
A.b6.prototype={}
A.bM.prototype={
j(a){return A.v(this.a,null)}}
A.bH.prototype={
j(a){return this.a}}
A.b7.prototype={}
A.w.prototype={
gT(a){return new A.aX(a,this.gp(a),A.N(a).k("aX<w.E>"))},
l(a,b){var t
A.N(a).k("w.E").a(b)
t=this.gp(a)
this.sp(a,t+1)
this.i(a,t,b)},
q(a,b){var t,s
A.N(a).k("i<w.E>").a(b)
t=this.gp(a)
for(s=J.bd(b);s.u();){this.l(a,s.gD());++t}},
j(a){return A.cy(a,"[","]")}}
A.ap.prototype={
B(a,b){var t,s,r,q=this,p=A.u(q)
p.k("~(1,2)").a(b)
for(t=A.c3(q,q.r,p.c),p=p.z[1];t.u();){s=t.d
r=q.h(0,s)
b.$2(s,r==null?p.a(r):r)}},
q(a,b){A.u(this).k("x<1,2>").a(b).B(0,new A.bp(this))},
gp(a){return this.a},
j(a){return A.bq(this)},
$ix:1}
A.bp.prototype={
$2(a,b){var t=this.a,s=A.u(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.u(this.a).k("~(1,2)")}}
A.br.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.d(a)
s.a=t+": "
s.a+=A.d(b)},
$S:5}
A.aH.prototype={
q(a,b){this.$ti.k("x<1,2>").a(b)
throw A.b(A.E("Cannot modify unmodifiable map"))}}
A.a8.prototype={
h(a,b){return this.a.h(0,b)},
q(a,b){this.a.q(0,this.$ti.k("x<1,2>").a(b))},
B(a,b){this.a.B(0,this.$ti.k("~(1,2)").a(b))},
gp(a){return this.a.a},
j(a){return A.bq(this.a)},
$ix:1}
A.az.prototype={}
A.ab.prototype={}
A.bt.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a2(b)
s.a=", "},
$S:6}
A.aQ.prototype={}
A.bG.prototype={
j(a){return this.a0()}}
A.bh.prototype={}
A.be.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a2(t)
return"Assertion failed"}}
A.bC.prototype={}
A.a0.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gM()+r+p
if(!t.a)return o
return o+t.gL()+": "+A.a2(t.gS())},
gS(){return this.b}}
A.aw.prototype={
gS(){return A.e5(this.b)},
gM(){return"RangeError"},
gL(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.d(r):""
else if(r==null)t=": Not greater than or equal to "+A.d(s)
else if(r>s)t=": Not in inclusive range "+A.d(s)+".."+A.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.d(s)
return t}}
A.bk.prototype={
gS(){return A.ac(this.b)},
gM(){return"RangeError"},
gL(){if(A.ac(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bs.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.ax("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a2(o)
k.a=", "}l.d.B(0,new A.bt(k,j))
n=A.a2(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bE.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bD.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bf.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a2(t)+"."}}
A.bI.prototype={
j(a){return"Exception: "+this.a}}
A.bj.prototype={
j(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.i.prototype={
gp(a){var t,s=this.a,r=A.c3(s,s.r,this.$ti.c)
for(t=0;r.u();)++t
return t},
j(a){return A.dw(this,"(",")")}}
A.at.prototype={
gn(a){return A.k.prototype.gn.call(this,this)},
j(a){return"null"}}
A.k.prototype={$ik:1,
E(a,b){return this===b},
gn(a){return A.b1(this)},
j(a){return"Instance of '"+A.bx(this)+"'"},
a4(a,b){throw A.b(A.cD(this,u.o.a(b)))},
gC(a){return A.eF(this)},
toString(){return this.j(this)}}
A.ax.prototype={
gp(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bg.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.bJ.prototype={
G(a){if(a<=0||a>4294967296)throw A.b(A.dF("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
t(){return Math.random()}}
A.av.prototype={
j(a){return"Point("+A.d(this.a)+", "+A.d(this.b)+")"},
E(a,b){if(b==null)return!1
return b instanceof A.av&&this.a===b.a&&this.b===b.b},
gn(a){var t=B.c.gn(this.a),s=B.c.gn(this.b),r=A.cK(A.cK(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.bW.prototype={
$1(a){var t,s,r=new A.bu()
r.a=A.au(2)
r.b=A.au(3)
r.c=A.au(4)
r.d=A.au(5)
r.e=A.au(6)
r.f=A.au(7)
t=J.aK(a)
s=new A.by(r).ac(new A.G(A.cb(t.h(a,0)),A.cb(t.h(a,1))),A.ac(t.h(a,2)),A.ac(t.h(a,3)),A.ac(t.h(a,4)),A.ac(t.h(a,5)))
t=s.a
return A.f([t.a,t.b,s.b,s.c,s.d,s.e,s.f],u.f)},
$S:7}
A.by.prototype={
ac(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this.a.ab(a5,a6,a7,a8),a1=a0[0],a2=a0[1],a3=A.f([],u.Q)
for(t=u.O,s=a1.length,r=a2.length,q=0;q<a5;++q){if(!(q<s))return A.a(a1,q)
p=a1[q]
if(!(q<r))return A.a(a2,q)
o=a2[q]
for(n=p.length,m=o.length,l=a7+q,k=0;k<a6;++k){if(!(k<n))return A.a(p,k)
j=p[k]
if(!(k<m))return A.a(o,k)
B.a.l(a3,A.eG(j,o[k],new A.av(l,a8+k,t)))}}t=u.J.a(new A.bz())
if(!!a3.immutable$list)A.a_(A.E("sort"))
A.dL(a3,t,u.W)
t=u.n
i=A.f([],t)
s=u.t
h=A.f([],s)
g=A.f([],t)
f=A.f([],s)
for(t=a3.length,s=u.l,r=u.Y,e=0;e<a3.length;a3.length===t||(0,A.bb)(a3),++e){d=a3[e]
n=d.d
if(n<-5)continue
m=d.a
c=A.F(d.b,n,m.c,m.d,m.e,1,B.i,1)
m=d.c
m===$&&A.ag()
b=m.c
if(b!=null){a=b.$1(d)
if(0>=c.length)return A.a(c,0)
m=J.aK(a)
J.n(c[0],m.h(a,0))
if(1>=c.length)return A.a(c,1)
J.n(c[1],m.h(a,1))}m=c.length
if(n<0){if(0>=m)return A.a(c,0)
B.a.q(g,s.a(c[0]))
if(1>=c.length)return A.a(c,1)
B.a.q(f,r.a(c[1]))}else{if(0>=m)return A.a(c,0)
B.a.q(i,s.a(c[0]))
if(1>=c.length)return A.a(c,1)
B.a.q(h,r.a(c[1]))}}return new A.bA(a4,B.d.P(i.length+g.length,2),new Float32Array(A.bQ(i)),new Int32Array(A.bQ(h)),new Float32Array(A.bQ(g)),new Int32Array(A.bQ(f)))}}
A.bz.prototype={
$2(a,b){var t=u.W
return t.a(a).aa(0,t.a(b))},
$S:8}
A.bA.prototype={}
A.X.prototype={
a0(){return"NaturalItem."+this.b}}
A.y.prototype={
aa(a,b){var t=this.b,s=u.W.a(b).b
if(t.a+t.b>s.a+s.b)return-1
return 1}}
A.b5.prototype={}
A.as.prototype={}
A.J.prototype={
a0(){return"TileType."+this.b}}
A.c.prototype={
gV(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.G.prototype={
m(a,b){return new A.G(this.a+b.a,this.b+b.b)},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.G&&b.a===this.a&&b.b===this.b},
gn(a){return B.c.gn(this.a)^B.c.gn(this.b)},
j(a){return""+B.c.J(this.a)+", "+B.c.J(this.b)}}
A.bu.prototype={
ab(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a1(a1,a2),a0=b.a1(a1,a2)
for(t=a.length,s=a0.length,r=0;r<a1;++r){if(!(r<t))return A.a(a,r)
q=a[r]
if(!(r<s))return A.a(a0,r)
p=a0[r]
for(o=a3+r,n=o*0.006,m=o*0.016,l=o*0.048,k=0;k<a2;++k){j=a4+k
i=b.a
i===$&&A.ag()
h=j*0.006
i=A.al(i.a,new A.q(n,h)).F()
g=b.b
g===$&&A.ag()
f=j*0.016
g=A.al(g.a,new A.q(m,f)).F()
e=b.c
e===$&&A.ag()
d=j*0.048
e=A.al(e.a,new A.q(l,d)).F()
c=b.d
c===$&&A.ag()
h=A.al(c.a,new A.q(n,h)).F()
c=b.e
c===$&&A.ag()
f=A.al(c.a,new A.q(m,f)).F()
c=b.f
c===$&&A.ag()
d=A.al(c.a,new A.q(l,d)).F()
B.a.i(q,k,B.c.ai((i+0.5*g+0.25*e-0.35)*20))
B.a.i(p,k,h+0.5*f+0.25*d)}}return A.f([a,a0],u.G)},
a1(a,b){var t,s,r,q,p=J.cz(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cz(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.bi.prototype={
v(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.dc()
if(!(a<8))return A.a(j,a)
t=j[a]
s=k.c.H(0,t).H(0,$.cm().K(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.m(0,t)
m=u.L.a(k.a)
n=m[m[B.c.J(n.a)&255]+B.c.J(n.b)&255]
l=$.dd()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
F(){var t,s,r,q,p=this
p.v(0)
p.v(1)
t=p.d
s=t.a
t=t.b
r=s+t
if(r<=1){q=1-r
if(q>s||q>t)if(s>t)p.v(2)
else p.v(3)
else p.v(4)
p.v(5)}else{q=2-r
if(q<s||q<t)if(s>t)p.v(6)
else p.v(7)
else p.v(5)
p.v(4)}return p.e/47}}
A.q.prototype={
m(a,b){return new A.q(this.a+b.a,this.b+b.b)},
H(a,b){return new A.q(this.a-b.a,this.b-b.b)},
K(a,b){return new A.q(this.a*b,this.b*b)},
j(a){return A.d(this.a)+", "+A.d(this.b)}}
A.bv.prototype={};(function aliases(){var t=J.W.prototype
t.a7=t.j})();(function installTearOffs(){var t=hunkHelpers._static_1
t(A,"ez","dk",0)
t(A,"eC","du",0)
t(A,"eR","dH",0)
t(A,"eS","dM",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.c2,J.aS,J.aN,A.bh,A.i,A.aX,A.B,A.aa,A.a8,A.ah,A.aU,A.P,A.bL,A.ap,A.bn,A.a7,A.C,A.b6,A.bM,A.w,A.aH,A.aQ,A.bG,A.bI,A.bj,A.at,A.ax,A.bJ,A.av,A.by,A.bA,A.b5,A.as,A.c,A.G,A.bu,A.bi,A.q,A.bv])
r(J.aS,[J.aT,J.an,J.o,J.ao,J.a5])
r(J.o,[J.W,J.e,A.b_,A.bg])
r(J.W,[J.b0,J.ay,J.Q])
s(J.bl,J.e)
r(J.ao,[J.am,J.aV])
r(A.bh,[A.aW,A.bF,A.bB,A.bH,A.be,A.bC,A.a0,A.bs,A.bE,A.bD,A.bf])
s(A.ak,A.i)
s(A.ab,A.a8)
s(A.az,A.ab)
s(A.ai,A.az)
s(A.aj,A.ah)
r(A.P,[A.aP,A.b4,A.bS,A.bU,A.bW])
r(A.aP,[A.bw,A.bm,A.bT,A.bp,A.br,A.bt,A.bz])
r(A.b4,[A.b3,A.a1])
s(A.V,A.ap)
s(A.bo,A.ak)
s(A.a9,A.b_)
r(A.a9,[A.aA,A.aC])
s(A.aB,A.aA)
s(A.aq,A.aB)
s(A.aD,A.aC)
s(A.ar,A.aD)
s(A.aY,A.aq)
s(A.aZ,A.ar)
s(A.b7,A.bH)
r(A.a0,[A.aw,A.bk])
r(A.bG,[A.X,A.J])
s(A.y,A.aQ)
t(A.aA,A.w)
t(A.aB,A.B)
t(A.aC,A.w)
t(A.aD,A.B)
t(A.ab,A.aH)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",h:"double",af:"num",I:"String",ce:"bool",at:"Null",j:"List"},mangledNames:{},types:["j<@>(y)","~(I,@)","@(@)","@(@,I)","@(I)","~(k?,k?)","~(Y,@)","j<k>(@)","m(y,y)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.e1(v.typeUniverse,JSON.parse('{"b0":"W","ay":"W","Q":"W","aT":{"ce":[],"z":[]},"an":{"z":[]},"e":{"j":["1"],"i":["1"]},"bl":{"e":["1"],"j":["1"],"i":["1"]},"ao":{"h":[],"af":[]},"am":{"h":[],"m":[],"af":[],"z":[]},"aV":{"h":[],"af":[],"z":[]},"a5":{"I":[],"z":[]},"ak":{"i":["1"]},"aa":{"Y":[]},"ai":{"az":["1","2"],"ab":["1","2"],"a8":["1","2"],"aH":["1","2"],"x":["1","2"]},"ah":{"x":["1","2"]},"aj":{"ah":["1","2"],"x":["1","2"]},"aU":{"cx":[]},"P":{"a4":[]},"aP":{"a4":[]},"b4":{"a4":[]},"b3":{"a4":[]},"a1":{"a4":[]},"V":{"ap":["1","2"],"cC":["1","2"],"x":["1","2"]},"bo":{"i":["1"]},"a9":{"a6":["1"]},"aq":{"w":["h"],"a6":["h"],"j":["h"],"i":["h"],"B":["h"]},"ar":{"w":["m"],"a6":["m"],"j":["m"],"i":["m"],"B":["m"]},"aY":{"w":["h"],"c0":[],"a6":["h"],"j":["h"],"i":["h"],"B":["h"],"z":[],"w.E":"h","B.E":"h"},"aZ":{"w":["m"],"c1":[],"a6":["m"],"j":["m"],"i":["m"],"B":["m"],"z":[],"w.E":"m","B.E":"m"},"ap":{"x":["1","2"]},"a8":{"x":["1","2"]},"az":{"ab":["1","2"],"a8":["1","2"],"aH":["1","2"],"x":["1","2"]},"h":{"af":[]},"m":{"af":[]},"j":{"i":["1"]},"c1":{"j":["m"],"i":["m"]},"c0":{"j":["h"],"i":["h"]}}'))
A.e0(v.typeUniverse,JSON.parse('{"ak":1,"a9":1,"aQ":1}'))
var u=(function rtii(){var t=A.U
return{a:t("ai<Y,@>"),Z:t("a4"),o:t("cx"),l:t("i<h>"),U:t("i<@>"),Y:t("i<m>"),G:t("e<j<j<h>>>"),f:t("e<k>"),s:t("e<I>"),Q:t("e<y>"),n:t("e<h>"),b:t("e<@>"),t:t("e<m>"),T:t("an"),g:t("Q"),p:t("a6<@>"),B:t("V<Y,@>"),q:t("j<k>(@)"),r:t("j<h>"),j:t("j<@>"),L:t("j<m>"),P:t("at"),K:t("k"),O:t("av<h>"),I:t("f0"),N:t("I"),h:t("Y"),W:t("y"),R:t("z"),C:t("ay"),y:t("ce"),i:t("h"),z:t("@"),S:t("m"),A:t("0&*"),_:t("k*"),V:t("cw<at>?"),X:t("k?"),J:t("m(y,y)?"),H:t("af")}})();(function constants(){var t=hunkHelpers.makeConstList
B.an=J.aS.prototype
B.a=J.e.prototype
B.d=J.am.prototype
B.c=J.ao.prototype
B.ao=J.a5.prototype
B.ap=J.Q.prototype
B.aq=J.o.prototype
B.I=J.b0.prototype
B.z=J.ay.prototype
B.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.L=function() {
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
B.Q=function(getTagFallback) {
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
B.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.N=function(hooks) {
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
B.P=function(hooks) {
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
B.O=function(hooks) {
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
B.B=function(hooks) { return hooks; }

B.b=new A.bJ()
B.C=new A.bL()
B.S=new A.c(255,101,46,4)
B.T=new A.c(255,107,129,124)
B.k=new A.c(255,10,150,43)
B.W=new A.c(255,10,152,44)
B.X=new A.c(255,119,53,5)
B.a_=new A.c(255,126,56,5)
B.l=new A.c(255,129,63,129)
B.m=new A.c(255,141,69,141)
B.a4=new A.c(255,14,145,45)
B.n=new A.c(255,150,76,150)
B.a7=new A.c(255,15,169,52)
B.a9=new A.c(255,164,152,147)
B.ab=new A.c(255,183,173,167)
B.ad=new A.c(255,197,187,181)
B.o=new A.c(255,199,178,92)
B.e=new A.c(255,1,46,143)
B.p=new A.c(255,213,192,102)
B.q=new A.c(255,225,203,112)
B.r=new A.c(255,5,112,30)
B.af=new A.c(255,6,101,28)
B.t=new A.c(255,7,131,37)
B.ai=new A.c(255,83,105,100)
B.aj=new A.c(255,8,133,38)
B.ak=new A.c(255,91,112,107)
B.am=new A.c(255,9,122,36)
B.i=new A.G(0,0)
B.D=new A.G(0,0.6)
B.E=new A.G(0.4,0.2)
B.F=new A.G(-0.4,0.2)
B.G=A.f(t([]),u.b)
B.ar=A.f(t([]),A.U("e<Y>"))
B.H=new A.aj(0,{},B.ar,A.U("aj<Y,@>"))
B.as=new A.X(null,"empty")
B.u=new A.X(A.ez(),"birch")
B.v=new A.X(A.eC(),"flower")
B.f=new A.X(A.eR(),"rock")
B.w=new A.X(A.eS(),"spruce")
B.at=new A.aa("call")
B.a5=new A.c(255,150,157,102)
B.a1=new A.c(255,138,145,92)
B.Y=new A.c(255,121,128,80)
B.J=new A.J(B.a5,B.a1,B.Y,"lakeFloorVegetation")
B.V=new A.c(255,109,150,86)
B.al=new A.c(255,92,129,72)
B.ah=new A.c(255,79,112,60)
B.x=new A.J(B.V,B.al,B.ah,"grass")
B.aa=new A.c(255,173,162,115)
B.a6=new A.c(255,159,148,103)
B.a3=new A.c(255,148,138,95)
B.K=new A.J(B.aa,B.a6,B.a3,"lakeFloorBare")
B.a2=new A.c(255,139,162,127)
B.Z=new A.c(255,125,148,113)
B.U=new A.c(255,109,129,98)
B.h=new A.J(B.a2,B.Z,B.U,"bare")
B.ac=new A.c(255,194,178,128)
B.a8=new A.c(255,161,146,100)
B.a0=new A.c(255,138,124,82)
B.y=new A.J(B.ac,B.a8,B.a0,"sand")
B.R=new A.c(255,100,164,93)
B.ag=new A.c(255,75,140,76)
B.ae=new A.c(255,59,117,60)
B.j=new A.J(B.R,B.ag,B.ae,"taiga")
B.au=A.da("c0")
B.av=A.da("c1")})();(function staticFields(){$.bK=null
$.A=A.f([],u.f)
$.cE=null
$.cq=null
$.cp=null
$.d6=null
$.d3=null
$.d9=null
$.bR=null
$.bV=null
$.ch=null
$.c_=B.i
$.a3=B.i
$.c7=B.i})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"eW","cl",()=>A.eD("_$dart_dartClosure"))
s($,"fd","dg",()=>{var r=null
return A.f([A.D(B.K,0,-0.2),A.D(B.J,0,0.2),A.D(B.y,0,r),A.D(B.h,2,-0.2),A.D(B.y,2,0.35),A.D(B.x,2,r),A.D(B.h,4,-0.2),A.D(B.j,4,-0.1),A.D(B.x,4,0),A.D(B.j,4,r),A.D(B.h,10,-0.2),A.D(B.j,10,r),A.D(B.h,r,r)],A.U("e<b5>"))})
s($,"fc","df",()=>{var r=A.U("e<as>")
return A.dy([B.j,A.f([A.t(B.u,0.02),A.t(B.v,0.02),A.t(B.f,0.03),A.t(B.w,0.1)],r),B.x,A.f([A.t(B.f,0.02),A.t(B.w,0.02),A.t(B.v,0.02),A.t(B.u,0.04)],r),B.h,A.f([A.t(B.u,0.02),A.t(B.v,0.02),A.t(B.w,0.03),A.t(B.f,0.06)],r),B.y,A.f([A.t(B.f,0.1)],r),B.J,A.f([A.t(B.f,0.04)],r),B.K,A.f([A.t(B.f,0.06)],r)],A.U("J"),A.U("j<as>"))})
s($,"eY","dd",()=>A.f([A.p(5,2),A.p(2,5),A.p(-5,2),A.p(-2,5),A.p(5,-2),A.p(2,-5),A.p(-5,-2),A.p(-2,-5)],A.U("e<q>")))
s($,"eX","dc",()=>A.f([A.p(1,0),A.p(0,1),A.p(1,-1),A.p(-1,1),A.p(1,1),A.p(0,0),A.p(2,0),A.p(0,2)],A.U("e<q>")))
t($,"f_","de",()=>A.p(-0.211324865405187,-0.211324865405187))
t($,"eZ","cm",()=>A.p(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.o,DOMError:J.o,ErrorEvent:J.o,Event:J.o,InputEvent:J.o,SubmitEvent:J.o,MediaError:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,GeolocationPositionError:J.o,SensorErrorEvent:J.o,SpeechRecognitionError:J.o,ArrayBufferView:A.b_,Float32Array:A.aY,Int32Array:A.aZ,DOMException:A.bg})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,DOMException:true})
A.a9.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.aq.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.ar.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eO
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=jsregionworker.js.map
