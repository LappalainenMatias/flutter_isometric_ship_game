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
a[c]=function(){a[c]=function(){A.f_(b)}
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
if(a[b]!==t)A.f0(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.co(b)
return new t(c,this)}:function(){if(t===null)t=A.co(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.co(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cc:function cc(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cf(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cP(a,b,c){return A.cf(A.Q(A.Q(c,a),b))},
de(a){var t,s
for(t=$.I.length,s=0;s<t;++s)if(a===$.I[s])return!0
return!1},
dW(a,b,c){A.b8(a,0,J.c8(a)-1,b,c)},
b8(a,b,c,d,e){if(c-b<=32)A.dV(a,b,c,d,e)
else A.dU(a,b,c,d,e)},
dV(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bk(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.v()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
dU(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.bk(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
a=t}e.i(a2,j,d)
e.i(a2,h,b)
e.i(a2,i,a0)
e.i(a2,g,e.h(a2,a3))
e.i(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.aj(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.b8(a2,a3,s-2,a5,a6)
A.b8(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.aj(a5.$2(e.h(a2,s),c),0);)++s
for(;J.aj(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.b8(a2,s,r,a5,a6)}else A.b8(a2,s,r,a5,a6)},
aY:function aY(a){this.a=a},
bM:function bM(){},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
L:function L(){},
ac:function ac(a){this.a=a},
dj(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fj(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
return t},
b5(a){var t,s=$.cL
if(s==null)s=$.cL=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bJ(a){return A.dP(a)},
dP(a){var t,s,r,q
if(a instanceof A.j)return A.u(A.aN(a),null)
t=J.G(a)
if(t===B.dn||t===B.dq||u.C.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.aN(a),null)},
cM(a){if(a==null||typeof a=="number"||A.cl(a))return J.aP(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.K)return a.j(0)
if(a instanceof A.V)return a.a0(!0)
return"Instance of '"+A.bJ(a)+"'"},
P(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.a1(t,b)
r.b=""
if(c!=null&&c.a!==0)c.C(0,new A.bI(r,s,t))
return J.dv(a,new A.aW(B.dP,0,t,s,0))},
dQ(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dO(a,b,c)},
dO(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cd(b,u.z),g=h.length,f=a.$R
if(g<f)return A.P(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.G(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.P(a,h,c)
if(g===f)return p.apply(a,h)
return A.P(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.P(a,h,c)
o=f+r.length
if(g>o)return A.P(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cd(h,u.z)
B.b.a1(h,n)}return p.apply(a,h)}else{if(g>f)return A.P(a,h,c)
if(h===b)h=A.cd(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.bl)(m),++l){k=r[A.aK(m[l])]
if(B.m===k)return A.P(a,h,c)
B.b.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.bl)(m),++l){i=A.aK(m[l])
if(c.P(i)){++j
B.b.l(h,c.h(0,i))}else{k=r[i]
if(B.m===k)return A.P(a,h,c)
B.b.l(h,k)}}if(j!==c.a)return A.P(a,h,c)}return p.apply(a,h)}},
d(a,b){if(a==null)J.c8(a)
throw A.c(A.bj(a,b))},
bj(a,b){var t,s="index"
if(!A.c_(b))return new A.a2(!0,b,s,null)
t=J.c8(a)
if(b<0||b>=t)return A.dF(b,t,a,s)
return A.dR(b,s)},
c(a){return A.dd(new Error(),a)},
dd(a,b){var t
if(b==null)b=new A.bN()
a.dartException=b
t=A.f1
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
f1(){return J.aP(this.dartException)},
ai(a){throw A.c(a)},
di(a,b){throw A.dd(b,a)},
bl(a){throw A.c(A.bp(a))},
df(a){if(a==null)return J.J(a)
if(typeof a=="object")return A.b5(a)
return J.J(a)},
dE(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b9().constructor.prototype):Object.create(new A.a3(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cz(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dA(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cz(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dy)}throw A.c("Error in functionType of tearoff")},
dB(a,b,c,d){var t=A.cy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cz(a,b,c,d){var t,s
if(c)return A.dD(a,b,d)
t=b.length
s=A.dB(t,d,a,b)
return s},
dC(a,b,c,d){var t=A.cy,s=A.dz
switch(b?-1:a){case 0:throw A.c(new A.bL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dD(a,b,c){var t,s
if($.cw==null)$.cw=A.cv("interceptor")
if($.cx==null)$.cx=A.cv("receiver")
t=b.length
s=A.dC(t,c,a,b)
return s},
co(a){return A.dE(a)},
dy(a,b){return A.aH(v.typeUniverse,A.aN(a.a),b)},
cy(a){return a.a},
dz(a){return a.b},
cv(a){var t,s,r,q=new A.a3("receiver","interceptor"),p=J.cb(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.c(A.dw("Field name "+a+" not found."))},
f_(a){throw A.c(new A.bQ(a))},
eO(a){return v.getIsolateTag(a)},
eX(a){var t,s,r,q,p,o=A.aK($.dc.$1(a)),n=$.c0[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c4[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.ei($.da.$2(a,o))
if(r!=null){n=$.c0[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c4[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c6(t)
$.c0[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c4[o]=t
return t}if(q==="-"){p=A.c6(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dg(a,t)
if(q==="*")throw A.c(A.cR(o))
if(v.leafTags[o]===true){p=A.c6(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dg(a,t)},
dg(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cr(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c6(a){return J.cr(a,!1,null,!!a.$ia8)},
eZ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c6(t)
else return J.cr(t,c,null,null)},
eT(){if(!0===$.cq)return
$.cq=!0
A.eU()},
eU(){var t,s,r,q,p,o,n,m
$.c0=Object.create(null)
$.c4=Object.create(null)
A.eS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dh.$1(p)
if(o!=null){n=A.eZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eS(){var t,s,r,q,p,o,n=B.x()
n=A.ah(B.y,A.ah(B.z,A.ah(B.l,A.ah(B.l,A.ah(B.A,A.ah(B.B,A.ah(B.C(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dc=new A.c1(q)
$.da=new A.c2(p)
$.dh=new A.c3(o)},
ah(a,b){return a(b)||b},
eJ(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aC:function aC(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
al:function al(a,b){this.a=a
this.$ti=b},
ak:function ak(){},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
aW:function aW(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(){},
aS:function aS(){},
bb:function bb(){},
b9:function b9(){},
a3:function a3(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a},
bL:function bL(a){this.a=a},
bW:function bW(){},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a,b){this.a=a
this.b=b
this.c=null},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
V:function V(){},
a_:function a_(){},
em(a){return a},
ar(a){return new Float32Array(A.em(a))},
bZ(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.bj(b,a))},
b3:function b3(){},
aa:function aa(){},
as:function as(){},
at:function at(){},
b1:function b1(){},
b2:function b2(){},
ay:function ay(){},
az:function az(){},
aA:function aA(){},
aB:function aB(){},
cN(a,b){var t=b.c
return t==null?b.c=A.ci(a,b.y,!0):t},
ce(a,b){var t=b.c
return t==null?b.c=A.aF(a,"cB",[b.y]):t},
cO(a){var t=a.x
if(t===6||t===7||t===8)return A.cO(a.y)
return t===12||t===13},
dT(a){return a.at},
a1(a){return A.bh(v.typeUniverse,a,!1)},
W(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.W(a,t,c,a0)
if(s===t)return b
return A.d0(a,s,!0)
case 7:t=b.y
s=A.W(a,t,c,a0)
if(s===t)return b
return A.ci(a,s,!0)
case 8:t=b.y
s=A.W(a,t,c,a0)
if(s===t)return b
return A.d_(a,s,!0)
case 9:r=b.z
q=A.aM(a,r,c,a0)
if(q===r)return b
return A.aF(a,b.y,q)
case 10:p=b.y
o=A.W(a,p,c,a0)
n=b.z
m=A.aM(a,n,c,a0)
if(o===p&&m===n)return b
return A.cg(a,o,m)
case 12:l=b.y
k=A.W(a,l,c,a0)
j=b.z
i=A.eF(a,j,c,a0)
if(k===l&&i===j)return b
return A.cZ(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aM(a,h,c,a0)
p=b.y
o=A.W(a,p,c,a0)
if(g===h&&o===p)return b
return A.ch(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.c(A.aR("Attempted to substitute unexpected RTI kind "+d))}},
aM(a,b,c,d){var t,s,r,q,p=b.length,o=A.bY(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.W(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eG(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bY(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.W(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eF(a,b,c,d){var t,s=b.a,r=A.aM(a,s,c,d),q=b.b,p=A.aM(a,q,c,d),o=b.c,n=A.eG(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bd()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
db(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eR(s)
t=a.$S()
return t}return null},
eV(a,b){var t
if(A.cO(b))if(a instanceof A.K){t=A.db(a)
if(t!=null)return t}return A.aN(a)},
aN(a){if(a instanceof A.j)return A.aL(a)
if(Array.isArray(a))return A.ag(a)
return A.ck(J.G(a))},
ag(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aL(a){var t=a.$ti
return t!=null?t:A.ck(a)},
ck(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.et(a,t)},
et(a,b){var t=a instanceof A.K?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ed(v.typeUniverse,t.name)
b.$ccache=s
return s},
eR(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bh(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eP(a){return A.a0(A.aL(a))},
cm(a){var t
if(a instanceof A.V)return A.eL(a.$r,a.Z())
t=a instanceof A.K?A.db(a):null
if(t!=null)return t
if(u.R.b(a))return J.du(a).a
if(Array.isArray(a))return A.ag(a)
return A.aN(a)},
a0(a){var t=a.w
return t==null?a.w=A.d4(a):t},
d4(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bX(a)
t=A.bh(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.d4(t):s},
eL(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.d(r,0)
t=A.aH(v.typeUniverse,A.cm(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.d(r,s)
t=A.d1(v.typeUniverse,t,A.cm(r[s]))}return A.aH(v.typeUniverse,t,a)},
cs(a){return A.a0(A.bh(v.typeUniverse,a,!1))},
es(a){var t,s,r,q,p,o=this
if(o===u.K)return A.F(o,a,A.ez)
if(!A.H(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.F(o,a,A.eD)
t=o.x
if(t===7)return A.F(o,a,A.eq)
if(t===1)return A.F(o,a,A.d8)
s=t===6?o.y:o
t=s.x
if(t===8)return A.F(o,a,A.ev)
if(s===u.S)r=A.c_
else if(s===u.i||s===u.H)r=A.ey
else if(s===u.N)r=A.eB
else r=s===u.y?A.cl:null
if(r!=null)return A.F(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eW)){o.r="$i"+q
if(q==="i")return A.F(o,a,A.ex)
return A.F(o,a,A.eC)}}else if(t===11){p=A.eJ(s.y,s.z)
return A.F(o,a,p==null?A.d8:p)}return A.F(o,a,A.eo)},
F(a,b,c){a.b=c
return a.b(b)},
er(a){var t,s=this,r=A.en
if(!A.H(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.ej
else if(s===u.K)r=A.eh
else{t=A.aO(s)
if(t)r=A.ep}s.a=r
return s.a(a)},
bi(a){var t,s=a.x
if(!A.H(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bi(a.y)))t=s===8&&A.bi(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eo(a){var t=this
if(a==null)return A.bi(t)
return A.l(v.typeUniverse,A.eV(a,t),null,t,null)},
eq(a){if(a==null)return!0
return this.y.b(a)},
eC(a){var t,s=this
if(a==null)return A.bi(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.G(a)[t]},
ex(a){var t,s=this
if(a==null)return A.bi(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.G(a)[t]},
en(a){var t,s=this
if(a==null){t=A.aO(s)
if(t)return a}else if(s.b(a))return a
A.d5(a,s)},
ep(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.d5(a,t)},
d5(a,b){throw A.c(A.e3(A.cS(a,A.u(b,null))))},
cS(a,b){return A.a4(a)+": type '"+A.u(A.cm(a),null)+"' is not a subtype of type '"+b+"'"},
e3(a){return new A.bg("TypeError: "+a)},
r(a,b){return new A.bg("TypeError: "+A.cS(a,b))},
ev(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.ce(v.typeUniverse,s).b(a)},
ez(a){return a!=null},
eh(a){if(a!=null)return a
throw A.c(A.r(a,"Object"))},
eD(a){return!0},
ej(a){return a},
d8(a){return!1},
cl(a){return!0===a||!1===a},
f6(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.r(a,"bool"))},
f8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.r(a,"bool"))},
f7(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.r(a,"bool?"))},
cj(a){if(typeof a=="number")return a
throw A.c(A.r(a,"double"))},
fa(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.r(a,"double"))},
f9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.r(a,"double?"))},
c_(a){return typeof a=="number"&&Math.floor(a)===a},
aJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.r(a,"int"))},
fc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.r(a,"int"))},
fb(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.r(a,"int?"))},
ey(a){return typeof a=="number"},
ef(a){if(typeof a=="number")return a
throw A.c(A.r(a,"num"))},
fd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.r(a,"num"))},
eg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.r(a,"num?"))},
eB(a){return typeof a=="string"},
aK(a){if(typeof a=="string")return a
throw A.c(A.r(a,"String"))},
fe(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.r(a,"String"))},
ei(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.r(a,"String?"))},
d9(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
eE(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d9(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d6(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
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
if(m===9){q=A.eH(a.y)
p=a.z
return p.length>0?q+("<"+A.d9(p,b)+">"):q}if(m===11)return A.eE(a,b)
if(m===12)return A.d6(a,b,null)
if(m===13)return A.d6(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.d(b,o)
return b[o]}return"?"},
eH(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ee(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ed(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bh(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aG(a,5,"#")
r=A.bY(t)
for(q=0;q<t;++q)r[q]=s
p=A.aF(a,b,r)
o[b]=p
return p}else return n},
ec(a,b){return A.d2(a.tR,b)},
eb(a,b){return A.d2(a.eT,b)},
bh(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cX(A.cV(a,null,b,c))
s.set(b,t)
return t},
aH(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cX(A.cV(a,b,c,!0))
r.set(c,s)
return s},
d1(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cg(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
E(a,b){b.a=A.er
b.b=A.es
return b},
aG(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.y(null,null)
t.x=b
t.at=c
s=A.E(a,t)
a.eC.set(c,s)
return s},
d0(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e8(a,b,s,c)
a.eC.set(s,t)
return t},
e8(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.H(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.y(null,null)
r.x=6
r.y=b
r.at=c
return A.E(a,r)},
ci(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e7(a,b,s,c)
a.eC.set(s,t)
return t},
e7(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.H(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aO(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aO(r.y))return r
else return A.cN(a,b)}}q=new A.y(null,null)
q.x=7
q.y=b
q.at=c
return A.E(a,q)},
d_(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e5(a,b,s,c)
a.eC.set(s,t)
return t},
e5(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.H(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aF(a,"cB",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.y(null,null)
r.x=8
r.y=b
r.at=c
return A.E(a,r)},
e9(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=14
t.y=b
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
aE(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e4(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aF(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aE(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.y(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.E(a,s)
a.eC.set(q,r)
return r},
cg(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aE(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.E(a,p)
a.eC.set(r,o)
return o},
ea(a,b,c){var t,s,r="+"+(b+"("+A.aE(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
cZ(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aE(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aE(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e4(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.y(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.E(a,q)
a.eC.set(s,p)
return p},
ch(a,b,c,d){var t,s=b.at+("<"+A.aE(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e6(a,b,c,s,d)
a.eC.set(s,t)
return t},
e6(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bY(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.W(a,b,s,0)
n=A.aM(a,c,s,0)
return A.ch(a,o,n,c!==n)}}m=new A.y(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.E(a,m)},
cV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cX(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dZ(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cW(a,s,m,l,!1)
else if(r===46)s=A.cW(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.U(a.u,a.e,l.pop()))
break
case 94:l.push(A.e9(a.u,l.pop()))
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
case 62:A.e0(a,l)
break
case 38:A.e_(a,l)
break
case 42:q=a.u
l.push(A.d0(q,A.U(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.ci(q,A.U(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.d_(q,A.U(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dY(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cY(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e2(a.u,a.e,p)
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
return A.U(a.u,a.e,n)},
dZ(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cW(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.ee(t,p.y)[q]
if(o==null)A.ai('No "'+q+'" in "'+A.dT(p)+'"')
d.push(A.aH(t,p,o))}else d.push(q)
return n},
e0(a,b){var t,s=a.u,r=A.cU(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aF(s,q,r))
else{t=A.U(s,a.e,q)
switch(t.x){case 12:b.push(A.ch(s,t,r,a.n))
break
default:b.push(A.cg(s,t,r))
break}}},
dY(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cU(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.U(n,a.e,m)
p=new A.bd()
p.a=r
p.b=t
p.c=s
b.push(A.cZ(n,q,p))
return
case-4:b.push(A.ea(n,b.pop(),r))
return
default:throw A.c(A.aR("Unexpected state under `()`: "+A.n(m)))}},
e_(a,b){var t=b.pop()
if(0===t){b.push(A.aG(a.u,1,"0&"))
return}if(1===t){b.push(A.aG(a.u,4,"1&"))
return}throw A.c(A.aR("Unexpected extended operation "+A.n(t)))},
cU(a,b){var t=b.splice(a.p)
A.cY(a.u,a.e,t)
a.p=b.pop()
return t},
U(a,b,c){if(typeof c=="string")return A.aF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e1(a,b,c)}else return c},
cY(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.U(a,b,c[t])},
e2(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.U(a,b,c[t])},
e1(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.c(A.aR("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.c(A.aR("Bad index "+c+" for "+b.j(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.H(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.H(b))return!1
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
if(q===6){t=A.cN(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.ce(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.ce(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.d7(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d7(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.ew(a,b,c,d,e)}if(p&&q===11)return A.eA(a,b,c,d,e)
return!1},
d7(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
ew(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aH(a,b,s[p])
return A.d3(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.d3(a,o,null,c,n,e)},
d3(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eA(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aO(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.H(a))if(s!==7)if(!(s===6&&A.aO(a.y)))t=s===8&&A.aO(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eW(a){var t
if(!A.H(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
H(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
d2(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bY(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bd:function bd(){this.c=this.b=this.a=null},
bX:function bX(a){this.a=a},
bS:function bS(){},
bg:function bg(a){this.a=a},
by(a){var t,s={}
if(A.de(a))return"{...}"
t=new A.av("")
try{B.b.l($.I,a)
t.a+="{"
s.a=!0
a.C(0,new A.bz(s,t))
t.a+="}"}finally{if(0>=$.I.length)return A.d($.I,-1)
$.I.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
B:function B(){},
aq:function aq(){},
bz:function bz(a,b){this.a=a
this.b=b},
aI:function aI(){},
a9:function a9(){},
ax:function ax(){},
af:function af(){},
b_(a,b,c){var t,s,r
if(a>4294967295)A.ai(A.b7(a,0,4294967295,"length",null))
t=J.cG(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dL(a,b,c){var t,s,r=A.f([],c.n("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.bl)(a),++s)B.b.l(r,c.a(a[s]))
return J.cb(r,c)},
cd(a,b){var t=A.dK(a,b)
return t},
dK(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.n("h<0>"))
t=A.f([],b.n("h<0>"))
for(s=J.cu(a);s.F();)B.b.l(t,s.gD())
return t},
dX(a,b,c){var t=J.cu(b)
if(!t.F())return a
if(c.length===0){do a+=A.n(t.gD())
while(t.F())}else{a+=A.n(t.gD())
for(;t.F();)a=a+c+A.n(t.gD())}return a},
cI(a,b){return new A.bA(a,b.gam(),b.gao(),b.gan())},
a4(a){if(typeof a=="number"||A.cl(a)||a==null)return J.aP(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cM(a)},
aR(a){return new A.bm(a)},
dw(a){return new A.a2(!1,null,null,a)},
dx(a,b,c){return new A.a2(!0,a,b,c)},
dR(a,b){return new A.b6(null,null,!0,a,b,"Value not in range")},
b7(a,b,c,d,e){return new A.b6(b,c,!0,a,d,"Invalid value")},
dS(a,b,c){if(0>a||a>c)throw A.c(A.b7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.b7(b,a,c,"end",null))
return b}return c},
dF(a,b,c,d){return new A.bu(b,!0,a,d,"Index out of range")},
S(a){return new A.bP(a)},
cR(a){return new A.bO(a)},
bp(a){return new A.bo(a)},
cA(a,b,c){return new A.bt(a,b,c)},
cE(a,b,c){var t,s
if(A.de(a))return b+"..."+c
t=new A.av(b)
B.b.l($.I,a)
try{s=t
s.a=A.dX(s.a,a,", ")}finally{if(0>=$.I.length)return A.d($.I,-1)
$.I.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dM(a,b,c,d){var t
if(B.h===c)return A.cP(B.a.gk(a),J.J(b),$.c7())
if(B.h===d){t=B.a.gk(a)
b=J.J(b)
c=J.J(c)
return A.cf(A.Q(A.Q(A.Q($.c7(),t),b),c))}t=B.a.gk(a)
b=J.J(b)
c=J.J(c)
d=J.J(d)
d=A.cf(A.Q(A.Q(A.Q(A.Q($.c7(),t),b),c),d))
return d},
bB:function bB(a,b){this.a=a
this.b=b},
bR:function bR(){},
br:function br(){},
bm:function bm(a){this.a=a},
bN:function bN(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bu:function bu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a){this.a=a},
bO:function bO(a){this.a=a},
bo:function bo(a){this.a=a},
bH:function bH(){},
bT:function bT(a){this.a=a},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(){},
j:function j(){},
av:function av(a){this.a=a},
bq:function bq(){},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
k:function k(a,b){this.c=a
this.b=b},
bn:function bn(){},
aU:function aU(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
M:function M(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$},
R:function R(a){this.b=a},
b0:function b0(){},
ba:function ba(){},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
eY(){self.jsregionworker=A.eI(new A.c5(),u.e)},
c5:function c5(){},
bK:function bK(a){this.a=a
this.b=$},
bC:function bC(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
cC(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.aa(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.c(A.cA("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eK(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.q(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.c(A.cA("Not radix digit",a,t))}if(s)return A.a6(0,0,0,q,p,o)
return new A.v(q&4194303,p&4194303,o&1048575)},
ca(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a6(0,0,0,q,p,o):new A.v(q,p,o)},
bv(a){if(a instanceof A.v)return a
else if(A.c_(a))return A.ca(a)
throw A.c(A.dx(a,"other","not an int, Int32 or Int64"))},
dI(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.d(B.p,a)
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
i=B.d.ab(B.a.a9(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.a9(h,a))+q+p+o},
a6(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.q(t,22)&1)
return new A.v(t&4194303,s&4194303,c-f-(B.a.q(s,22)&1)&1048575)},
dG(a,b,c){var t,s,r,q,p=A.bv(b)
if(p.ga4())throw A.c(A.S("Division by zero"))
if(a.ga4())return B.n
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a6(0,0,0,a.a,a.b,t)
if(q)p=A.a6(0,0,0,p.a,p.b,r)
return A.dH(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dH(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
c=a1-B.c.m(f-e*4194304)-(B.a.q(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.m(k*a4+j*a5+i*a6+e)-(B.a.q(c,22)&1)&1048575
while(!0){if(m<524288)if(m<=a6)if(m===a6)if(n<=a5)b=n===a5&&o>=a4
else b=!0
else b=!1
else b=!0
else b=!0
if(!b)break
a=(m&524288)===0?1:-1
q=o-a*a4
s=n-a*(a5+(B.a.q(q,22)&1))
o=q&4194303
n=s&4194303
m=m-a*(a6+(B.a.q(s,22)&1))&1048575
q=p+a
s=r+a*(B.a.q(q,22)&1)
p=q&4194303
r=s&4194303
t=t+a*(B.a.q(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a6(0,0,0,p,r,t)
return new A.v(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.v(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.n
else return A.a6(a4,a5,a6,o,n,m)
else return A.a6(0,0,0,o,n,m)},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(a,b){this.a=a
this.b=b},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D(a){var t=new A.bD(new Int16Array(2048),A.b_(2048,B.E,u.q),A.b_(2048,B.a3,u.h),A.b_(2048,B.aS,u.U))
t.ad(a)
return t},
dN(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.T(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.T(l,k,j,1)
A.T(p,r,q,0)
A.T(s,o,q,0)
A.T(s,r,n,0)
A.T(s+(p^1),k,j,1)
A.T(l,r+(o^1),j,1)
A.T(l,k,q+(n^1),1)
B.b.i($.dk(),t,m)}for(t=0;t<16;++t)B.b.i($.dl(),t,A.cT(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.f([],u.f)
for(i=0;i<24;++i){h=B.dL[i]
l.push(new A.e(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.J(t,24)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bE,l[k])}l=A.f([],u.Y)
for(i=0;i<48;++i){h=B.dN[i]
l.push(new A.b(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.J(t,48)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bF,l[k])}l=A.f([],u.J)
for(i=0;i<160;++i){h=B.dM[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.J(t,160)
if(!(k<l.length))return A.d(l,k)
B.b.l($.bG,l[k])}},
T(a,b,c,d){return new A.be()},
cT(a,b,c,d){var t=new A.bf(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(){},
bf:function bf(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
f0(a){A.di(new A.aY("Field '"+a+"' has been assigned during initialization."),new Error())},
C(){A.di(new A.aY("Field '' has not been initialized."),new Error())},
el(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.ek,a)
t[$.ct()]=a
a.$dart_jsFunction=t
return t},
ek(a,b){u.j.a(b)
u.Z.a(a)
return A.dQ(a,b,null)},
eI(a,b){if(typeof a=="function")return a
else return b.a(A.el(a))},
cQ(a,b,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(t=0;t<12;++t){s=a1[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.E(a/a2)*a2
r=s.a
p=a0.a
o=a0.b
n=p*2-2*o
o=p+o
p=new A.aw(r,new A.aU(n,o),q,a2)
p.f=new A.bn()
m=A.eQ(r)
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
r=new A.bc(c,m)
p.d=u.D.a(r)
return p}}throw A.c(new A.bT("No tile type found for elevation: "+A.n(a)+", moisture: "+A.n(b)+". Fix the rules!"))},
eQ(a){switch(a){case B.dQ:return $.dp()
case B.i:return $.dn()
case B.e:return $.dm()
case B.f:return $.dq()
case B.v:return $.ds()
case B.w:return $.dr()}},
eK(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cr(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cq==null){A.eT()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.c(A.cR("Return interceptor for "+A.n(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bU
if(p==null)p=$.bU=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eX(a)
if(q!=null)return q
if(typeof a=="function")return B.dp
t=Object.getPrototypeOf(a)
if(t==null)return B.u
if(t===Object.prototype)return B.u
if(typeof r=="function"){p=$.bU
if(p==null)p=$.bU=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
cF(a,b){if(a<0||a>4294967295)throw A.c(A.b7(a,0,4294967295,"length",null))
return J.cG(new Array(a),b)},
cG(a,b){return J.cb(A.f(a,b.n("h<0>")),b)},
cb(a,b){a.fixed$length=Array
return a},
cH(a){a.fixed$length=Array
a.immutable$list=Array
return a},
dJ(a,b){var t=u.s
return J.dt(t.a(a),t.a(b))},
G(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.aX.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.aV.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cp(a)},
bk(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cp(a)},
eM(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.j)return a
return J.cp(a)},
eN(a){if(typeof a=="number")return J.a7.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.ae.prototype
return a},
aj(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).u(a,b)},
dt(a,b){return J.eN(a).I(a,b)},
J(a){return J.G(a).gk(a)},
cu(a){return J.eM(a).ga5(a)},
c8(a){return J.bk(a).gt(a)},
du(a){return J.G(a).gA(a)},
dv(a,b){return J.G(a).a7(a,b)},
aP(a){return J.G(a).j(a)},
aT:function aT(){},
aV:function aV(){},
ao:function ao(){},
p:function p(){},
Y:function Y(){},
b4:function b4(){},
ae:function ae(){},
N:function N(){},
h:function h(a){this.$ti=a},
bw:function bw(a){this.$ti=a},
aQ:function aQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
an:function an(){},
aX:function aX(){},
X:function X(){}},B={}
var w=[A,J,B]
var $={}
A.cc.prototype={}
J.aT.prototype={
u(a,b){return a===b},
gk(a){return A.b5(a)},
j(a){return"Instance of '"+A.bJ(a)+"'"},
a7(a,b){throw A.c(A.cI(a,u.o.a(b)))},
gA(a){return A.a0(A.ck(this))}}
J.aV.prototype={
j(a){return String(a)},
gk(a){return a?519018:218159},
gA(a){return A.a0(u.y)},
$iw:1,
$icn:1}
J.ao.prototype={
u(a,b){return null==b},
j(a){return"null"},
gk(a){return 0},
$iw:1}
J.p.prototype={}
J.Y.prototype={
gk(a){return 0},
j(a){return String(a)}}
J.b4.prototype={}
J.ae.prototype={}
J.N.prototype={
j(a){var t=a[$.ct()]
if(t==null)return this.ac(a)
return"JavaScript function for "+J.aP(t)},
$ia5:1}
J.h.prototype={
l(a,b){A.ag(a).c.a(b)
if(!!a.fixed$length)A.ai(A.S("add"))
a.push(b)},
a1(a,b){A.ag(a).n("A<1>").a(b)
if(!!a.fixed$length)A.ai(A.S("addAll"))
this.ae(a,b)
return},
ae(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.c(A.bp(a))
for(s=0;s<t;++s)a.push(b[s])},
j(a){return A.cE(a,"[","]")},
ga5(a){return new J.aQ(a,a.length,A.ag(a).n("aQ<1>"))},
gk(a){return A.b5(a)},
gt(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.bj(a,b))
return a[b]},
i(a,b,c){A.ag(a).c.a(c)
if(!!a.immutable$list)A.ai(A.S("indexed set"))
if(!(b>=0&&b<a.length))throw A.c(A.bj(a,b))
a[b]=c},
$iA:1,
$ii:1}
J.bw.prototype={}
J.aQ.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bl(r)
throw A.c(r)}t=s.c
if(t>=q){s.sW(null)
return!1}s.sW(r[t]);++s.c
return!0},
sW(a){this.d=this.$ti.n("1?").a(a)}}
J.a7.prototype={
I(a,b){var t
A.ef(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gS(b)
if(this.gS(a)===t)return 0
if(this.gS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gS(a){return a===0?1/a<0:a<0},
m(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.c(A.S(""+a+".toInt()"))},
E(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.c(A.S(""+a+".floor()"))},
ap(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
a9(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.c(A.b7(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.d(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.ai(A.S("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.d(q,1)
t=q[1]
if(3>=s)return A.d(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.T("0",p)},
j(a){if(a===0&&1/a<0)return"-0.0"
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
return this.a_(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.a_(a,b)},
a_(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.c(A.S("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
q(a,b){var t
if(a>0)t=this.aj(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aj(a,b){return b>31?0:a>>>b},
gA(a){return A.a0(u.H)},
$it:1,
$im:1,
$ix:1}
J.an.prototype={
gA(a){return A.a0(u.S)},
$iw:1,
$io:1}
J.aX.prototype={
gA(a){return A.a0(u.i)},
$iw:1}
J.X.prototype={
G(a,b){return a+b},
aa(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.dS(b,c,a.length))},
ab(a,b){return this.K(a,b,null)},
T(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.D)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
I(a,b){var t
A.aK(b)
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
gA(a){return A.a0(u.N)},
gt(a){return a.length},
h(a,b){if(b>=a.length)throw A.c(A.bj(a,b))
return a[b]},
$iw:1,
$it:1,
$icK:1,
$iz:1}
A.aY.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.bM.prototype={}
A.aZ.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.bk(r),p=q.gt(r)
if(s.b!==p)throw A.c(A.bp(r))
t=s.c
if(t>=p){s.sU(null)
return!1}s.sU(q.h(r,t));++s.c
return!0},
sU(a){this.d=this.$ti.n("1?").a(a)}}
A.L.prototype={}
A.ac.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+this.a+'")'},
u(a,b){if(b==null)return!1
return b instanceof A.ac&&this.a===b.a},
$iad:1}
A.aC.prototype={$r:"+(1,2)",$s:1}
A.aD.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.al.prototype={}
A.ak.prototype={
j(a){return A.by(this)},
$iO:1}
A.am.prototype={
gt(a){return this.b.length},
P(a){return!1},
h(a,b){if(!this.P(b))return null
return this.b[this.a[b]]},
C(a,b){var t,s,r,q,p=this
p.$ti.n("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.aW.prototype={
gam(){var t=this.a
return t},
gao(){var t,s,r,q,p=this
if(p.c===1)return B.q
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.q
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.d(t,q)
r.push(t[q])}return J.cH(r)},
gan(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.t
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.t
p=new A.ap(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.d(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.d(r,m)
p.i(0,new A.ac(n),r[m])}return new A.al(p,u.a)},
$icD:1}
A.bI.prototype={
$2(a,b){var t
A.aK(a)
t=this.a
t.b=t.b+"$"+a
B.b.l(this.b,a)
B.b.l(this.c,b);++t.a},
$S:0}
A.K.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dj(s==null?"unknown":s)+"'"},
$ia5:1,
gaq(){return this},
$C:"$1",
$R:1,
$D:null}
A.aS.prototype={$C:"$2",$R:2}
A.bb.prototype={}
A.b9.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dj(t)+"'"}}
A.a3.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.df(this.a)^A.b5(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bJ(this.a)+"'")}}
A.bQ.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bL.prototype={
j(a){return"RuntimeError: "+this.a}}
A.bW.prototype={}
A.ap.prototype={
gt(a){return this.a},
P(a){var t=this.b
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
return r}else return this.al(b)},
al(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a2(a)]
s=this.a3(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r,q,p,o,n=this,m=A.aL(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.V(t==null?n.b=n.N():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.V(s==null?n.c=n.N():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.N()
q=n.a2(b)
p=r[q]
if(p==null)r[q]=[n.O(b,c)]
else{o=n.a3(p,b)
if(o>=0)p[o].b=c
else p.push(n.O(b,c))}}},
C(a,b){var t,s,r=this
A.aL(r).n("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.c(A.bp(r))
t=t.c}},
V(a,b,c){var t,s=A.aL(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.O(b,c)
else t.b=c},
O(a,b){var t=this,s=A.aL(t),r=new A.bx(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a2(a){return J.J(a)&1073741823},
a3(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aj(a[s].a,b))return s
return-1},
j(a){return A.by(this)},
N(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bx.prototype={}
A.c1.prototype={
$1(a){return this.a(a)},
$S:1}
A.c2.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.c3.prototype={
$1(a){return this.a(A.aK(a))},
$S:3}
A.V.prototype={
j(a){return this.a0(!1)},
a0(a){var t,s,r,q,p,o=this.ai(),n=this.Z(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.d(n,r)
p=n[r]
m=a?m+A.cM(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ai(){var t,s=this.$s
for(;$.bV.length<=s;)B.b.l($.bV,null)
t=$.bV[s]
if(t==null){t=this.ag()
B.b.i($.bV,s,t)}return t},
ag(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.f(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.i(l,r,s[t])}}return J.cH(A.dL(l,!1,u.K))}}
A.a_.prototype={
Z(){return[this.a,this.b]},
u(a,b){if(b==null)return!1
return b instanceof A.a_&&this.$s===b.$s&&J.aj(this.a,b.a)&&J.aj(this.b,b.b)},
gk(a){return A.dM(this.$s,this.a,this.b,B.h)}}
A.b3.prototype={}
A.aa.prototype={
gt(a){return a.length},
$ia8:1}
A.as.prototype={
h(a,b){A.bZ(b,a,a.length)
return a[b]},
i(a,b,c){A.cj(c)
A.bZ(b,a,a.length)
a[b]=c},
$iA:1,
$ii:1}
A.at.prototype={
i(a,b,c){A.aJ(c)
A.bZ(b,a,a.length)
a[b]=c},
$iA:1,
$ii:1}
A.b1.prototype={
gA(a){return B.dR},
$iw:1,
$ibs:1}
A.b2.prototype={
gA(a){return B.dS},
h(a,b){A.bZ(b,a,a.length)
return a[b]},
$iw:1,
$ic9:1}
A.ay.prototype={}
A.az.prototype={}
A.aA.prototype={}
A.aB.prototype={}
A.y.prototype={
n(a){return A.aH(v.typeUniverse,this,a)},
ar(a){return A.d1(v.typeUniverse,this,a)}}
A.bd.prototype={}
A.bX.prototype={
j(a){return A.u(this.a,null)}}
A.bS.prototype={
j(a){return this.a}}
A.bg.prototype={}
A.B.prototype={
ga5(a){return new A.aZ(a,this.gt(a),A.aN(a).n("aZ<B.E>"))},
j(a){return A.cE(a,"[","]")}}
A.aq.prototype={
gt(a){return this.a},
j(a){return A.by(this)},
$iO:1}
A.bz.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.n(a)
s.a=t+": "
s.a+=A.n(b)},
$S:4}
A.aI.prototype={}
A.a9.prototype={
h(a,b){return this.a.h(0,b)},
C(a,b){this.a.C(0,this.$ti.n("~(1,2)").a(b))},
gt(a){return this.a.a},
j(a){return A.by(this.a)},
$iO:1}
A.ax.prototype={}
A.af.prototype={}
A.bB.prototype={
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
A.bR.prototype={
j(a){return this.X()}}
A.br.prototype={}
A.bm.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a4(t)
return"Assertion failed"}}
A.bN.prototype={}
A.a2.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gM()+r+p
if(!t.a)return o
return o+t.gL()+": "+A.a4(t.gR())},
gR(){return this.b}}
A.b6.prototype={
gR(){return A.eg(this.b)},
gM(){return"RangeError"},
gL(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.bu.prototype={
gR(){return A.aJ(this.b)},
gM(){return"RangeError"},
gL(){if(A.aJ(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gt(a){return this.f}}
A.bA.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.av("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a4(o)
k.a=", "}l.d.C(0,new A.bB(k,j))
n=A.a4(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bP.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bO.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bo.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a4(t)+"."}}
A.bH.prototype={
j(a){return"Out of Memory"}}
A.bT.prototype={
j(a){return"Exception: "+this.a}}
A.bt.prototype={
j(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
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
k=""}return i+l+B.d.K(g,m,n)+k+"\n"+B.d.T(" ",h-m+l.length)+"^\n"}}
A.au.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
j(a){return"null"}}
A.j.prototype={$ij:1,
u(a,b){return this===b},
gk(a){return A.b5(this)},
j(a){return"Instance of '"+A.bJ(this)+"'"},
a7(a,b){throw A.c(A.cI(this,u.o.a(b)))},
gA(a){return A.eP(this)},
toString(){return this.j(this)}}
A.av.prototype={
gt(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bq.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.ab.prototype={
j(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
u(a,b){if(b==null)return!1
return b instanceof A.ab&&this.a===b.a&&this.b===b.b},
gk(a){return A.cP(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.k.prototype={
X(){return"LevelOfDetail."+this.b}}
A.bn.prototype={}
A.aU.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aU&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
j(a){return""+B.c.m(this.a)+", "+B.c.m(this.b)}}
A.bc.prototype={}
A.M.prototype={
I(a,b){var t,s,r,q
u.k.a(b)
t=this.a6()
s=b.a6()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$it:1}
A.aw.prototype={
a6(){var t=this.b,s=t.b,r=s/2-t.a/4
return new A.aD(-1*(s-r+r+this.e),this.c)}}
A.R.prototype={
X(){return"TileType."+this.b}}
A.b0.prototype={}
A.ba.prototype={
a8(){var t=null
return A.f([new A.q(B.f,0,-0.2),new A.q(B.e,0,0),new A.q(B.w,0,t),new A.q(B.f,15,-0.2),new A.q(B.e,15,0.4),new A.q(B.i,15,t),new A.q(B.f,30,-0.2),new A.q(B.e,30,0.4),new A.q(B.i,30,t),new A.q(B.f,50,0.1),new A.q(B.e,50,0.4),new A.q(B.v,t,t)],u.c)}}
A.q.prototype={}
A.c5.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k=new A.ba(),j=new A.bK(k),i=J.bk(a),h=A.aJ(i.h(a,0)),g=A.aJ(i.h(a,1)),f=A.cj(i.h(a,2)),e=A.cj(i.h(a,3))
i=A.aJ(i.h(a,4))
if(!(i>=0&&i<20))return A.d(B.r,i)
t=B.r[i]
i=B.c.m(f)
s=B.c.m(e)
r=new A.bC(k)
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
q=r.ak(h,g,i,s,k)
p=j.ah(i,s,q.a,q.b,k)
if(!!p.immutable$list)A.ai(A.S("sort"))
A.dW(p,J.eu(),A.ag(p).c)
o=A.f([],u.l)
for(k=p.length,i=u.V,n=0;n<p.length;p.length===k||(0,A.bl)(p),++n){m=p[n]
s=m.b
l=m.d
l===$&&A.C()
B.b.l(o,["Tile",m.a.b,s.a,s.b,m.c,m.e,A.f([l.a,l.b],i)])}return o},
$S:6}
A.bK.prototype={
ah(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.f([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.d(d,o)
m=d[o]
for(l=m.length,k=a+o*e,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.d(n,i)
h=n[i]
if(h<=0){g=B.c.E(h/e)
if(!(i<l))return A.d(m,i)
B.b.l(t,A.cQ(g*e,m[i],new A.ab(k,b+i*e,r),q.a8(),e))}else for(g=b+i*e;h>0;){f=B.c.E(h/e)
if(!(i<l))return A.d(m,i)
B.b.l(t,A.cQ(f*e,m[i],new A.ab(k,g,r),q.a8(),e))
h-=e}}}return t}}
A.bC.prototype={
ak(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.Y(b3,b4),b2=b0.Y(b3,b4)
for(t=b1.length,s=b2.length,r=0;r<b3;++r)for(q=b5+r*b7,p=q*0.0004,o=q*0.0016,n=q*0.0064,m=q*0.0256,l=q*0.0000032000000000000003,k=q*0.000012800000000000001,j=q*0.000051200000000000004,i=q*0.00020480000000000002,h=0;h<b3;++h){g=b6+h*b7
f=b0.a
f===$&&A.C()
e=g*0.0004
d=0.366025403784439*(p+e)
c=p+d
b=e+d
a=f.p(c,b)
f=b0.b
f===$&&A.C()
e=g*0.0016
d=0.366025403784439*(o+e)
a0=o+d
a1=e+d
f=f.p(a0,a1)
e=b0.c
e===$&&A.C()
a2=g*0.0064
d=0.366025403784439*(n+a2)
a3=n+d
a4=a2+d
e=e.p(a3,a4)
a2=b0.d
a2===$&&A.C()
a5=g*0.0256
d=0.366025403784439*(m+a5)
a5=a2.p(m+d,a5+d)
a2=b0.e
a2===$&&A.C()
a6=g*0.0000032000000000000003
d=0.366025403784439*(l+a6)
a6=a2.p(l+d,a6+d)
a2=b0.f
a2===$&&A.C()
a7=g*0.000012800000000000001
d=0.366025403784439*(k+a7)
a7=a2.p(k+d,a7+d)
a2=b0.r
a2===$&&A.C()
a8=g*0.000051200000000000004
d=0.366025403784439*(j+a8)
a8=a2.p(j+d,a8+d)
a2=b0.w
a2===$&&A.C()
a9=g*0.00020480000000000002
d=0.366025403784439*(i+a9)
a9=a2.p(i+d,a9+d)
if(!(r<t))return A.d(b1,r)
B.b.i(b1[r],h,B.c.ap(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+2)/4-0.71)*100))
a9=b0.x
a9===$&&A.C()
a9=a9.p(c,b)
a8=b0.y
a8===$&&A.C()
a8=a8.p(a0,a1)
a7=b0.z
a7===$&&A.C()
a7=a7.p(a3,a4)
if(!(r<s))return A.d(b2,r)
B.b.i(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aC(b1,b2)},
Y(a,b){var t,s,r,q,p=J.cF(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cF(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.v.prototype={
G(a,b){var t=A.bv(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.v(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
u(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.v)t=b
else if(A.c_(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.ca(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
I(a,b){return this.af(b)},
af(a){var t=A.bv(a),s=this.c,r=s>>>19,q=t.c
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
ga4(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
m(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
j(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.a.q(q,22)&1)
s=p&4194303
o=0-o-(B.a.q(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.dI(10,q,p,o,r)},
$it:1}
A.e.prototype={}
A.b.prototype={}
A.a.prototype={}
A.bD.prototype={
ad(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cJ){A.dN()
$.cJ=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.d(t,s)
t[s]=s}r=A.ca(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cC("6364136223846793005",10,!0)
m.toString
l=A.bv(m)
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
m=A.cC("1442695040888963407",10,!0)
m.toString
r=new A.v(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).G(0,m)
m=s+1
a7=A.dG(r.G(0,31),m,3).m(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.d(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bE.length))return A.d($.bE,m)
B.b.i(p,s,$.bE[m])
m=q[s]
if(!(m>=0&&m<$.bF.length))return A.d($.bF,m)
B.b.i(o,s,$.bF[m])
m=q[s]
if(!(m>=0&&m<$.bG.length))return A.d($.bG,m)
B.b.i(n,s,$.bG[m])
t[a7]=t[s]}},
p(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.E(a),i=B.c.E(b),h=a-j,g=b-i,f=B.c.m((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
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
A.Z.prototype={}
A.be.prototype={}
A.bf.prototype={};(function aliases(){var t=J.Y.prototype
t.ac=t.j})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eu","dJ",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cc,J.aT,J.aQ,A.br,A.bM,A.aZ,A.L,A.ac,A.V,A.a9,A.ak,A.aW,A.K,A.bW,A.aq,A.bx,A.y,A.bd,A.bX,A.B,A.aI,A.bR,A.bH,A.bT,A.bt,A.au,A.av,A.ab,A.bn,A.aU,A.bc,A.M,A.b0,A.q,A.bK,A.bC,A.v,A.e,A.b,A.a,A.bD,A.Z,A.be,A.bf])
r(J.aT,[J.aV,J.ao,J.p,J.a7,J.X])
r(J.p,[J.Y,J.h,A.b3,A.bq])
r(J.Y,[J.b4,J.ae,J.N])
s(J.bw,J.h)
r(J.a7,[J.an,J.aX])
r(A.br,[A.aY,A.bQ,A.bL,A.bS,A.bm,A.bN,A.a2,A.bA,A.bP,A.bO,A.bo])
s(A.a_,A.V)
r(A.a_,[A.aC,A.aD])
s(A.af,A.a9)
s(A.ax,A.af)
s(A.al,A.ax)
s(A.am,A.ak)
r(A.K,[A.aS,A.bb,A.c1,A.c3,A.c5])
r(A.aS,[A.bI,A.c2,A.bz,A.bB])
r(A.bb,[A.b9,A.a3])
s(A.ap,A.aq)
s(A.aa,A.b3)
r(A.aa,[A.ay,A.aA])
s(A.az,A.ay)
s(A.as,A.az)
s(A.aB,A.aA)
s(A.at,A.aB)
s(A.b1,A.as)
s(A.b2,A.at)
s(A.bg,A.bS)
r(A.a2,[A.b6,A.bu])
r(A.bR,[A.k,A.R])
s(A.aw,A.M)
s(A.ba,A.b0)
t(A.ay,A.B)
t(A.az,A.L)
t(A.aA,A.B)
t(A.aB,A.L)
t(A.af,A.aI)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",x:"num",z:"String",cn:"bool",au:"Null",i:"List"},mangledNames:{},types:["~(z,@)","@(@)","@(@,z)","@(z)","~(j?,j?)","~(ad,@)","i<i<@>?>(@)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aC&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aD&&a.b(c.a)&&b.b(c.b)}}
A.ec(v.typeUniverse,JSON.parse('{"b4":"Y","ae":"Y","N":"Y","aV":{"cn":[],"w":[]},"ao":{"w":[]},"h":{"i":["1"],"A":["1"]},"bw":{"h":["1"],"i":["1"],"A":["1"]},"a7":{"m":[],"x":[],"t":["x"]},"an":{"m":[],"o":[],"x":[],"t":["x"],"w":[]},"aX":{"m":[],"x":[],"t":["x"],"w":[]},"X":{"z":[],"t":["z"],"cK":[],"w":[]},"ac":{"ad":[]},"aC":{"a_":[],"V":[]},"aD":{"a_":[],"V":[]},"al":{"ax":["1","2"],"af":["1","2"],"a9":["1","2"],"aI":["1","2"],"O":["1","2"]},"ak":{"O":["1","2"]},"am":{"ak":["1","2"],"O":["1","2"]},"aW":{"cD":[]},"K":{"a5":[]},"aS":{"a5":[]},"bb":{"a5":[]},"b9":{"a5":[]},"a3":{"a5":[]},"ap":{"aq":["1","2"],"O":["1","2"]},"a_":{"V":[]},"aa":{"a8":["1"]},"as":{"B":["m"],"a8":["m"],"i":["m"],"A":["m"],"L":["m"]},"at":{"B":["o"],"a8":["o"],"i":["o"],"A":["o"],"L":["o"]},"b1":{"B":["m"],"bs":[],"a8":["m"],"i":["m"],"A":["m"],"L":["m"],"w":[],"B.E":"m"},"b2":{"B":["o"],"c9":[],"a8":["o"],"i":["o"],"A":["o"],"L":["o"],"w":[],"B.E":"o"},"aq":{"O":["1","2"]},"a9":{"O":["1","2"]},"ax":{"af":["1","2"],"a9":["1","2"],"aI":["1","2"],"O":["1","2"]},"m":{"x":[],"t":["x"]},"o":{"x":[],"t":["x"]},"i":{"A":["1"]},"x":{"t":["x"]},"z":{"t":["z"],"cK":[]},"M":{"t":["M"]},"aw":{"M":[],"t":["M"]},"ba":{"b0":[]},"v":{"t":["j"]},"c9":{"i":["o"],"A":["o"]},"bs":{"i":["m"],"A":["m"]}}'))
A.eb(v.typeUniverse,JSON.parse('{"aa":1}'))
var u=(function rtii(){var t=A.a1
return{s:t("t<@>"),a:t("al<ad,@>"),Z:t("a5"),k:t("M"),q:t("e"),h:t("b"),U:t("a"),o:t("cD"),V:t("h<bs>"),f:t("h<e>"),Y:t("h<b>"),J:t("h<a>"),G:t("h<j>"),W:t("h<z>"),Q:t("h<aw>"),c:t("h<q>"),n:t("h<m>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("ao"),g:t("N"),p:t("a8<@>"),B:t("ap<ad,@>"),I:t("i<i<m>>"),r:t("i<m>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("au"),K:t("j"),O:t("ab<m>"),L:t("f5"),F:t("+()"),N:t("z"),m:t("ad"),R:t("w"),C:t("ae"),D:t("bc"),y:t("cn"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("j*"),d:t("cB<au>?"),X:t("j?"),H:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dn=J.aT.prototype
B.b=J.h.prototype
B.a=J.an.prototype
B.c=J.a7.prototype
B.d=J.X.prototype
B.dp=J.N.prototype
B.dq=J.p.prototype
B.u=J.b4.prototype
B.j=J.ae.prototype
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

B.D=new A.bH()
B.h=new A.bM()
B.m=new A.bW()
B.E=new A.e(0,0)
B.a3=new A.b(0,0,0)
B.aS=new A.a(0,0,0,0)
B.n=new A.v(0,0,0)
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
B.dX=new A.Z(1,0,-0.788675134594813,0.211324865405187)
B.dU=new A.Z(0,0,0,0)
B.dV=new A.Z(1,1,-0.577350269189626,-0.577350269189626)
B.dW=new A.Z(0,1,0.211324865405187,-0.788675134594813)
B.o=A.f(t([B.dX,B.dU,B.dV,B.dW]),A.a1("h<Z>"))
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
B.p=A.f(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.a1("h<o>"))
B.ai=new A.b(-2.22474487139,-2.22474487139,-1)
B.aB=new A.b(-2.22474487139,-2.22474487139,1)
B.ab=new A.b(-3.0862664687972017,-1.1721513422464978,0)
B.aH=new A.b(-1.1721513422464978,-3.0862664687972017,0)
B.ap=new A.b(-2.22474487139,-1,-2.22474487139)
B.aA=new A.b(-2.22474487139,1,-2.22474487139)
B.al=new A.b(-1.1721513422464978,0,-3.0862664687972017)
B.aI=new A.b(-3.0862664687972017,0,-1.1721513422464978)
B.av=new A.b(-2.22474487139,-1,2.22474487139)
B.ah=new A.b(-2.22474487139,1,2.22474487139)
B.a7=new A.b(-3.0862664687972017,0,1.1721513422464978)
B.a5=new A.b(-1.1721513422464978,0,3.0862664687972017)
B.aC=new A.b(-2.22474487139,2.22474487139,-1)
B.a9=new A.b(-2.22474487139,2.22474487139,1)
B.am=new A.b(-1.1721513422464978,3.0862664687972017,0)
B.ay=new A.b(-3.0862664687972017,1.1721513422464978,0)
B.aa=new A.b(-1,-2.22474487139,-2.22474487139)
B.a6=new A.b(1,-2.22474487139,-2.22474487139)
B.aq=new A.b(0,-3.0862664687972017,-1.1721513422464978)
B.az=new A.b(0,-1.1721513422464978,-3.0862664687972017)
B.a4=new A.b(-1,-2.22474487139,2.22474487139)
B.ac=new A.b(1,-2.22474487139,2.22474487139)
B.a2=new A.b(0,-1.1721513422464978,3.0862664687972017)
B.ae=new A.b(0,-3.0862664687972017,1.1721513422464978)
B.aG=new A.b(-1,2.22474487139,-2.22474487139)
B.aD=new A.b(1,2.22474487139,-2.22474487139)
B.at=new A.b(0,1.1721513422464978,-3.0862664687972017)
B.aj=new A.b(0,3.0862664687972017,-1.1721513422464978)
B.ao=new A.b(-1,2.22474487139,2.22474487139)
B.aN=new A.b(1,2.22474487139,2.22474487139)
B.af=new A.b(0,3.0862664687972017,1.1721513422464978)
B.an=new A.b(0,1.1721513422464978,3.0862664687972017)
B.aK=new A.b(2.22474487139,-2.22474487139,-1)
B.aE=new A.b(2.22474487139,-2.22474487139,1)
B.ad=new A.b(1.1721513422464978,-3.0862664687972017,0)
B.as=new A.b(3.0862664687972017,-1.1721513422464978,0)
B.ag=new A.b(2.22474487139,-1,-2.22474487139)
B.aF=new A.b(2.22474487139,1,-2.22474487139)
B.aL=new A.b(3.0862664687972017,0,-1.1721513422464978)
B.a8=new A.b(1.1721513422464978,0,-3.0862664687972017)
B.aJ=new A.b(2.22474487139,-1,2.22474487139)
B.aw=new A.b(2.22474487139,1,2.22474487139)
B.au=new A.b(1.1721513422464978,0,3.0862664687972017)
B.aO=new A.b(3.0862664687972017,0,1.1721513422464978)
B.ax=new A.b(2.22474487139,2.22474487139,-1)
B.aM=new A.b(2.22474487139,2.22474487139,1)
B.ar=new A.b(3.0862664687972017,1.1721513422464978,0)
B.ak=new A.b(1.1721513422464978,3.0862664687972017,0)
B.dN=A.f(t([B.ai,B.aB,B.ab,B.aH,B.ap,B.aA,B.al,B.aI,B.av,B.ah,B.a7,B.a5,B.aC,B.a9,B.am,B.ay,B.aa,B.a6,B.aq,B.az,B.a4,B.ac,B.a2,B.ae,B.aG,B.aD,B.at,B.aj,B.ao,B.aN,B.af,B.an,B.aK,B.aE,B.ad,B.as,B.ag,B.aF,B.aL,B.a8,B.aJ,B.aw,B.au,B.aO,B.ax,B.aM,B.ar,B.ak]),u.Y)
B.q=A.f(t([]),u.b)
B.dw=new A.k(1,"zoomlevel_19")
B.dA=new A.k(2,"zoomlevel_18")
B.dE=new A.k(4,"zoomlevel_17")
B.dK=new A.k(8,"zoomlevel_16")
B.dv=new A.k(16,"zoomlevel_15")
B.dC=new A.k(32,"zoomlevel_14")
B.dH=new A.k(64,"zoomlevel_13")
B.ds=new A.k(128,"zoomlevel_12")
B.dy=new A.k(256,"zoomlevel_11")
B.dF=new A.k(512,"zoomlevel_10")
B.dr=new A.k(1024,"zoomlevel_9")
B.dx=new A.k(2048,"zoomlevel_8")
B.dD=new A.k(4096,"zoomlevel_7")
B.dJ=new A.k(8192,"zoomlevel_6")
B.du=new A.k(16384,"zoomlevel_5")
B.dB=new A.k(32768,"zoomlevel_4")
B.dI=new A.k(65536,"zoomlevel_3")
B.dt=new A.k(131072,"zoomlevel_2")
B.dz=new A.k(262144,"zoomlevel_1")
B.dG=new A.k(524288,"zoomlevel_0")
B.r=A.f(t([B.dw,B.dA,B.dE,B.dK,B.dv,B.dC,B.dH,B.ds,B.dy,B.dF,B.dr,B.dx,B.dD,B.dJ,B.du,B.dB,B.dI,B.dt,B.dz,B.dG]),A.a1("h<k>"))
B.dO={}
B.t=new A.am(B.dO,[],A.a1("am<ad,@>"))
B.dP=new A.ac("call")
B.dQ=new A.R("ice")
B.i=new A.R("grass")
B.e=new A.R("deathGrass")
B.f=new A.R("rock")
B.v=new A.R("snow")
B.w=new A.R("sand")
B.dR=A.cs("bs")
B.dS=A.cs("c9")
B.dT=A.cs("j")})();(function staticFields(){$.bU=null
$.I=A.f([],u.G)
$.cL=null
$.cx=null
$.cw=null
$.dc=null
$.da=null
$.dh=null
$.c0=null
$.c4=null
$.cq=null
$.bV=A.f([],A.a1("h<i<j>?>"))
$.bE=A.f([],u.f)
$.bF=A.f([],u.Y)
$.bG=A.f([],u.J)
$.cJ=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"f2","ct",()=>A.eO("_$dart_dartClosure"))
t($,"ff","c7",()=>A.df(B.dT))
t($,"fg","dm",()=>A.ar(A.f([80,80,0,120,80,161,80,80,0,120,0,40,80,80,0,40,80,0,80,80,80,0,161,40,80,80,161,40,161,120,80,80,161,120,80,161],u.n)))
t($,"fh","dn",()=>A.ar(A.f([80,241,0,281,80,322,80,241,0,281,0,201,80,241,0,201,80,161,80,241,80,161,161,201,80,241,161,201,161,281,80,241,161,281,80,322],u.n)))
t($,"fk","dq",()=>A.ar(A.f([80,402,0,442,80,483,80,402,0,442,0,362,80,402,0,362,80,322,80,402,80,322,161,362,80,402,161,362,161,442,80,402,161,442,80,483],u.n)))
t($,"fm","ds",()=>A.ar(A.f([80,563,0,603,80,644,80,563,0,603,0,523,80,563,0,523,80,483,80,563,80,483,161,523,80,563,161,523,161,603,80,563,161,603,80,644],u.n)))
t($,"fi","dp",()=>A.ar(A.f([80,724,0,764,80,805,80,724,0,764,0,684,80,724,0,684,80,644,80,724,80,644,161,684,80,724,161,684,161,764,80,724,161,764,80,805],u.n)))
t($,"fl","dr",()=>A.ar(A.f([80,885,0,925,80,966,80,885,0,925,0,845,80,885,0,845,80,805,80,885,80,805,161,845,80,885,161,845,161,925,80,885,161,925,80,966],u.n)))
t($,"f3","dk",()=>A.b_(8,A.T(0,0,0,0),A.a1("be")))
t($,"f4","dl",()=>A.b_(16,A.cT(0,0,0,0),A.a1("bf")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.b3,Float32Array:A.b1,Int16Array:A.b2,DOMException:A.bq})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.aa.$nativeSuperclassTag="ArrayBufferView"
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"
A.as.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.at.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eY
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
