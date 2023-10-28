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
a[c]=function(){a[c]=function(){A.fo(b)}
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
if(a[b]!==t)A.fp(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cB(b)
return new t(c,this)}:function(){if(t===null)t=A.cB(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cB(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cp:function cp(){},
U(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cs(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d3(a,b,c){return A.cs(A.U(A.U(c,a),b))},
dw(a){var t,s
for(t=$.N.length,s=0;s<t;++s)if(a===$.N[s])return!0
return!1},
eg(a,b,c){A.bk(a,0,J.ck(a)-1,b,c)},
bk(a,b,c,d,e){if(c-b<=32)A.ef(a,b,c,d,e)
else A.ee(a,b,c,d,e)},
ef(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bw(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
ee(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.H(a3+a4,2),g=h-k,f=h+k,e=J.bw(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.a9(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.bk(a2,a3,s-2,a5,a6)
A.bk(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a9(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a9(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.bk(a2,s,r,a5,a6)}else A.bk(a2,s,r,a5,a6)},
az:function az(a){this.a=a},
bW:function bW(){},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(){},
al:function al(a){this.a=a},
dA(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fJ(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b_(a)
return t},
bh(a){var t,s=$.d_
if(s==null)s=$.d_=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bT(a){return A.e9(a)},
e9(a){var t,s,r,q
if(a instanceof A.j)return A.v(A.aY(a),null)
t=J.L(a)
if(t===B.ds||t===B.dA||u.C.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.v(A.aY(a),null)},
d0(a){if(a==null||typeof a=="number"||A.cy(a))return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.P)return a.j(0)
if(a instanceof A.Y)return a.ad(!0)
return"Instance of '"+A.bT(a)+"'"},
T(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.I(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bS(r,s,t))
return J.dM(a,new A.b8(B.dZ,0,t,s,0))},
ea(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.e8(a,b,c)},
e8(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cq(b,u.z),g=h.length,f=a.$R
if(g<f)return A.T(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.L(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.T(a,h,c)
if(g===f)return p.apply(a,h)
return A.T(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.T(a,h,c)
o=f+r.length
if(g>o)return A.T(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cq(h,u.z)
B.b.I(h,n)}return p.apply(a,h)}else{if(g>f)return A.T(a,h,c)
if(h===b)h=A.cq(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.a8)(m),++l){k=r[A.aW(m[l])]
if(B.p===k)return A.T(a,h,c)
B.b.m(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.a8)(m),++l){i=A.aW(m[l])
if(c.W(i)){++j
B.b.m(h,c.h(0,i))}else{k=r[i]
if(B.p===k)return A.T(a,h,c)
B.b.m(h,k)}}if(j!==c.a)return A.T(a,h,c)}return p.apply(a,h)}},
e(a,b){if(a==null)J.ck(a)
throw A.b(A.bv(a,b))},
bv(a,b){var t,s="index"
if(!A.ca(b))return new A.aa(!0,b,s,null)
t=J.ck(a)
if(b<0||b>=t)return A.dZ(b,t,a,s)
return A.eb(b,s)},
b(a){return A.dv(new Error(),a)},
dv(a,b){var t
if(b==null)b=new A.bX()
a.dartException=b
t=A.fr
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fr(){return J.b_(this.dartException)},
at(a){throw A.b(a)},
cF(a,b){throw A.dv(b,a)},
a8(a){throw A.b(A.b5(a))},
dx(a){if(a==null)return J.O(a)
if(typeof a=="object")return A.bh(a)
return J.O(a)},
f7(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
dX(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bl().constructor.prototype):Object.create(new A.ab(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cN(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dT(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cN(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dT(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dR)}throw A.b("Error in functionType of tearoff")},
dU(a,b,c,d){var t=A.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cN(a,b,c,d){var t,s
if(c)return A.dW(a,b,d)
t=b.length
s=A.dU(t,d,a,b)
return s},
dV(a,b,c,d){var t=A.cM,s=A.dS
switch(b?-1:a){case 0:throw A.b(new A.bV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dW(a,b,c){var t,s
if($.cK==null)$.cK=A.cJ("interceptor")
if($.cL==null)$.cL=A.cJ("receiver")
t=b.length
s=A.dV(t,c,a,b)
return s},
cB(a){return A.dX(a)},
dR(a,b){return A.aT(v.typeUniverse,A.aY(a.a),b)},
cM(a){return a.a},
dS(a){return a.b},
cJ(a){var t,s,r,q=new A.ab("receiver","interceptor"),p=J.co(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dN("Field name "+a+" not found."))},
fo(a){throw A.b(new A.c_(a))},
fc(a){return v.getIsolateTag(a)},
fl(a){var t,s,r,q,p,o=A.aW($.du.$1(a)),n=$.cc[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cg[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eE($.dr.$2(a,o))
if(r!=null){n=$.cc[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cg[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.ci(t)
$.cc[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cg[o]=t
return t}if(q==="-"){p=A.ci(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dy(a,t)
if(q==="*")throw A.b(A.d5(o))
if(v.leafTags[o]===true){p=A.ci(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dy(a,t)},
dy(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cE(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci(a){return J.cE(a,!1,null,!!a.$iah)},
fn(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.ci(t)
else return J.cE(t,c,null,null)},
fh(){if(!0===$.cD)return
$.cD=!0
A.fi()},
fi(){var t,s,r,q,p,o,n,m
$.cc=Object.create(null)
$.cg=Object.create(null)
A.fg()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dz.$1(p)
if(o!=null){n=A.fn(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fg(){var t,s,r,q,p,o,n=B.A()
n=A.as(B.B,A.as(B.C,A.as(B.o,A.as(B.o,A.as(B.D,A.as(B.E,A.as(B.F(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.du=new A.cd(q)
$.dr=new A.ce(p)
$.dz=new A.cf(o)},
as(a,b){return a(b)||b},
f4(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aO:function aO(a,b){this.a=a
this.b=b},
ap:function ap(a,b){this.a=a
this.b=b},
av:function av(a,b){this.a=a
this.$ti=b},
au:function au(){},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
P:function P(){},
b3:function b3(){},
bn:function bn(){},
bl:function bl(){},
ab:function ab(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a},
bV:function bV(a){this.a=a},
c6:function c6(){},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bH:function bH(a,b){this.a=a
this.b=b
this.c=null},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
Y:function Y(){},
a5:function a5(){},
eI(a){return a},
aC(a){return new Float32Array(A.eI(a))},
c9(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bv(b,a))},
be:function be(){},
aj:function aj(){},
aD:function aD(){},
aE:function aE(){},
bc:function bc(){},
bd:function bd(){},
aK:function aK(){},
aL:function aL(){},
aM:function aM(){},
aN:function aN(){},
d1(a,b){var t=b.c
return t==null?b.c=A.cv(a,b.y,!0):t},
cr(a,b){var t=b.c
return t==null?b.c=A.aR(a,"cP",[b.y]):t},
d2(a){var t=a.x
if(t===6||t===7||t===8)return A.d2(a.y)
return t===12||t===13},
ed(a){return a.at},
a7(a){return A.bt(v.typeUniverse,a,!1)},
Z(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.dg(a,s,!0)
case 7:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.cv(a,s,!0)
case 8:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.df(a,s,!0)
case 9:r=b.z
q=A.aX(a,r,c,a0)
if(q===r)return b
return A.aR(a,b.y,q)
case 10:p=b.y
o=A.Z(a,p,c,a0)
n=b.z
m=A.aX(a,n,c,a0)
if(o===p&&m===n)return b
return A.ct(a,o,m)
case 12:l=b.y
k=A.Z(a,l,c,a0)
j=b.z
i=A.f0(a,j,c,a0)
if(k===l&&i===j)return b
return A.de(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aX(a,h,c,a0)
p=b.y
o=A.Z(a,p,c,a0)
if(g===h&&o===p)return b
return A.cu(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.b2("Attempted to substitute unexpected RTI kind "+d))}},
aX(a,b,c,d){var t,s,r,q,p=b.length,o=A.c8(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Z(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
f1(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c8(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Z(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
f0(a,b,c,d){var t,s=b.a,r=A.aX(a,s,c,d),q=b.b,p=A.aX(a,q,c,d),o=b.c,n=A.f1(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bo()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
ds(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.ff(s)
t=a.$S()
return t}return null},
fj(a,b){var t
if(A.d2(b))if(a instanceof A.P){t=A.ds(a)
if(t!=null)return t}return A.aY(a)},
aY(a){if(a instanceof A.j)return A.K(a)
if(Array.isArray(a))return A.ar(a)
return A.cx(J.L(a))},
ar(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
K(a){var t=a.$ti
return t!=null?t:A.cx(a)},
cx(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eP(a,t)},
eP(a,b){var t=a instanceof A.P?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ez(v.typeUniverse,t.name)
b.$ccache=s
return s},
ff(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bt(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fd(a){return A.a6(A.K(a))},
cz(a){var t
if(a instanceof A.Y)return A.f6(a.$r,a.ab())
t=a instanceof A.P?A.ds(a):null
if(t!=null)return t
if(u.R.b(a))return J.dL(a).a
if(Array.isArray(a))return A.ar(a)
return A.aY(a)},
a6(a){var t=a.w
return t==null?a.w=A.dk(a):t},
dk(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c7(a)
t=A.bt(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dk(t):s},
f6(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.e(r,0)
t=A.aT(v.typeUniverse,A.cz(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.e(r,s)
t=A.dh(v.typeUniverse,t,A.cz(r[s]))}return A.aT(v.typeUniverse,t,a)},
cG(a){return A.a6(A.bt(v.typeUniverse,a,!1))},
eO(a){var t,s,r,q,p,o=this
if(o===u.K)return A.J(o,a,A.eV)
if(!A.M(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.J(o,a,A.eZ)
t=o.x
if(t===7)return A.J(o,a,A.eM)
if(t===1)return A.J(o,a,A.dp)
s=t===6?o.y:o
t=s.x
if(t===8)return A.J(o,a,A.eR)
if(s===u.S)r=A.ca
else if(s===u.i||s===u.H)r=A.eU
else if(s===u.N)r=A.eX
else r=s===u.y?A.cy:null
if(r!=null)return A.J(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.fk)){o.r="$i"+q
if(q==="i")return A.J(o,a,A.eT)
return A.J(o,a,A.eY)}}else if(t===11){p=A.f4(s.y,s.z)
return A.J(o,a,p==null?A.dp:p)}return A.J(o,a,A.eK)},
J(a,b,c){a.b=c
return a.b(b)},
eN(a){var t,s=this,r=A.eJ
if(!A.M(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eF
else if(s===u.K)r=A.eD
else{t=A.aZ(s)
if(t)r=A.eL}s.a=r
return s.a(a)},
bu(a){var t,s=a.x
if(!A.M(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bu(a.y)))t=s===8&&A.bu(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eK(a){var t=this
if(a==null)return A.bu(t)
return A.l(v.typeUniverse,A.fj(a,t),null,t,null)},
eM(a){if(a==null)return!0
return this.y.b(a)},
eY(a){var t,s=this
if(a==null)return A.bu(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.L(a)[t]},
eT(a){var t,s=this
if(a==null)return A.bu(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.L(a)[t]},
eJ(a){var t,s=this
if(a==null){t=A.aZ(s)
if(t)return a}else if(s.b(a))return a
A.dl(a,s)},
eL(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dl(a,t)},
dl(a,b){throw A.b(A.ep(A.d6(a,A.v(b,null))))},
d6(a,b){return A.ad(a)+": type '"+A.v(A.cz(a),null)+"' is not a subtype of type '"+b+"'"},
ep(a){return new A.bs("TypeError: "+a)},
u(a,b){return new A.bs("TypeError: "+A.d6(a,b))},
eR(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cr(v.typeUniverse,s).b(a)},
eV(a){return a!=null},
eD(a){if(a!=null)return a
throw A.b(A.u(a,"Object"))},
eZ(a){return!0},
eF(a){return a},
dp(a){return!1},
cy(a){return!0===a||!1===a},
fw(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.u(a,"bool"))},
fy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool"))},
fx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.u(a,"bool?"))},
cw(a){if(typeof a=="number")return a
throw A.b(A.u(a,"double"))},
fA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double"))},
fz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"double?"))},
ca(a){return typeof a=="number"&&Math.floor(a)===a},
aV(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.u(a,"int"))},
fC(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int"))},
fB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.u(a,"int?"))},
eU(a){return typeof a=="number"},
eB(a){if(typeof a=="number")return a
throw A.b(A.u(a,"num"))},
fD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num"))},
eC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.u(a,"num?"))},
eX(a){return typeof a=="string"},
aW(a){if(typeof a=="string")return a
throw A.b(A.u(a,"String"))},
fE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String"))},
eE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.u(a,"String?"))},
dq(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.v(a[r],b)
return t},
f_(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dq(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.v(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dm(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.c)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.m(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.e(a4,k)
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
if(m===9){q=A.f2(a.y)
p=a.z
return p.length>0?q+("<"+A.dq(p,b)+">"):q}if(m===11)return A.f_(a,b)
if(m===12)return A.dm(a,b,null)
if(m===13)return A.dm(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.e(b,o)
return b[o]}return"?"},
f2(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eA(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ez(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bt(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aS(a,5,"#")
r=A.c8(t)
for(q=0;q<t;++q)r[q]=s
p=A.aR(a,b,r)
o[b]=p
return p}else return n},
ey(a,b){return A.di(a.tR,b)},
ex(a,b){return A.di(a.eT,b)},
bt(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dc(A.da(a,null,b,c))
s.set(b,t)
return t},
aT(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dc(A.da(a,b,c,!0))
r.set(c,s)
return s},
dh(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.ct(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
I(a,b){b.a=A.eN
b.b=A.eO
return b},
aS(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.B(null,null)
t.x=b
t.at=c
s=A.I(a,t)
a.eC.set(c,s)
return s},
dg(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eu(a,b,s,c)
a.eC.set(s,t)
return t},
eu(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.M(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.B(null,null)
r.x=6
r.y=b
r.at=c
return A.I(a,r)},
cv(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.et(a,b,s,c)
a.eC.set(s,t)
return t},
et(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.M(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aZ(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aZ(r.y))return r
else return A.d1(a,b)}}q=new A.B(null,null)
q.x=7
q.y=b
q.at=c
return A.I(a,q)},
df(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.er(a,b,s,c)
a.eC.set(s,t)
return t},
er(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.M(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aR(a,"cP",[b])
else if(b===u.P||b===u.T)return u.D}r=new A.B(null,null)
r.x=8
r.y=b
r.at=c
return A.I(a,r)},
ev(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=14
t.y=b
t.at=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
aQ(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eq(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aR(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aQ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.B(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
ct(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aQ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.B(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.I(a,p)
a.eC.set(r,o)
return o},
ew(a,b,c){var t,s,r="+"+(b+"("+A.aQ(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
de(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aQ(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aQ(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eq(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.B(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.I(a,q)
a.eC.set(s,p)
return p},
cu(a,b,c,d){var t,s=b.at+("<"+A.aQ(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.es(a,b,c,s,d)
a.eC.set(s,t)
return t},
es(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c8(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Z(a,b,s,0)
n=A.aX(a,c,s,0)
return A.cu(a,o,n,c!==n)}}m=new A.B(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.I(a,m)},
da(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dc(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ek(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.db(a,s,m,l,!1)
else if(r===46)s=A.db(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.X(a.u,a.e,l.pop()))
break
case 94:l.push(A.ev(a.u,l.pop()))
break
case 35:l.push(A.aS(a.u,5,"#"))
break
case 64:l.push(A.aS(a.u,2,"@"))
break
case 126:l.push(A.aS(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.em(a,l)
break
case 38:A.el(a,l)
break
case 42:q=a.u
l.push(A.dg(q,A.X(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cv(q,A.X(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.df(q,A.X(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ej(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dd(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.eo(a.u,a.e,p)
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
ek(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
db(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eA(t,p.y)[q]
if(o==null)A.at('No "'+q+'" in "'+A.ed(p)+'"')
d.push(A.aT(t,p,o))}else d.push(q)
return n},
em(a,b){var t,s=a.u,r=A.d9(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aR(s,q,r))
else{t=A.X(s,a.e,q)
switch(t.x){case 12:b.push(A.cu(s,t,r,a.n))
break
default:b.push(A.ct(s,t,r))
break}}},
ej(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.d9(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.X(n,a.e,m)
p=new A.bo()
p.a=r
p.b=t
p.c=s
b.push(A.de(n,q,p))
return
case-4:b.push(A.ew(n,b.pop(),r))
return
default:throw A.b(A.b2("Unexpected state under `()`: "+A.n(m)))}},
el(a,b){var t=b.pop()
if(0===t){b.push(A.aS(a.u,1,"0&"))
return}if(1===t){b.push(A.aS(a.u,4,"1&"))
return}throw A.b(A.b2("Unexpected extended operation "+A.n(t)))},
d9(a,b){var t=b.splice(a.p)
A.dd(a.u,a.e,t)
a.p=b.pop()
return t},
X(a,b,c){if(typeof c=="string")return A.aR(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.en(a,b,c)}else return c},
dd(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.X(a,b,c[t])},
eo(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.X(a,b,c[t])},
en(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.b2("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.b2("Bad index "+c+" for "+b.j(0)))},
l(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.M(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.M(b))return!1
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
if(q===6){t=A.d1(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cr(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cr(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.dn(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dn(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eS(a,b,c,d,e)}if(p&&q===11)return A.eW(a,b,c,d,e)
return!1},
dn(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eS(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aT(a,b,s[p])
return A.dj(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dj(a,o,null,c,n,e)},
dj(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eW(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aZ(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.M(a))if(s!==7)if(!(s===6&&A.aZ(a.y)))t=s===8&&A.aZ(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fk(a){var t
if(!A.M(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
M(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
di(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c8(a){return a>0?new Array(a):v.typeUniverse.sEA},
B:function B(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bo:function bo(){this.c=this.b=this.a=null},
c7:function c7(a){this.a=a},
c1:function c1(){},
bs:function bs(a){this.a=a},
e3(a,b,c){return b.l("@<0>").a5(c).l("cV<1,2>").a(A.f7(a,new A.a0(b.l("@<0>").a5(c).l("a0<1,2>"))))},
dY(a){return new A.aJ(a.l("aJ<0>"))},
d7(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bI(a){var t,s={}
if(A.dw(a))return"{...}"
t=new A.aH("")
try{B.b.m($.N,a)
t.a+="{"
s.a=!0
a.E(0,new A.bJ(s,t))
t.a+="}"}finally{if(0>=$.N.length)return A.e($.N,-1)
$.N.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aJ:function aJ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
E:function E(){},
aB:function aB(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
aU:function aU(){},
ai:function ai(){},
aI:function aI(){},
aG:function aG(){},
aP:function aP(){},
aq:function aq(){},
aA(a,b,c){var t,s,r
if(a>4294967295)A.at(A.bj(a,0,4294967295,"length",null))
t=J.cT(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
cW(a,b,c){var t,s,r=A.d([],c.l("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.a8)(a),++s)B.b.m(r,c.a(a[s]))
if(b)return r
return J.co(r,c)},
cq(a,b){var t=A.e4(a,b)
return t},
e4(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.l("h<0>"))
t=A.d([],b.l("h<0>"))
for(s=J.cI(a);s.F();)B.b.m(t,s.gD())
return t},
eh(a,b,c){var t=J.cI(b)
if(!t.F())return a
if(c.length===0){do a+=A.n(t.gD())
while(t.F())}else{a+=A.n(t.gD())
for(;t.F();)a=a+c+A.n(t.gD())}return a},
cX(a,b){return new A.bK(a,b.gaF(),b.gaI(),b.gaG())},
ad(a){if(typeof a=="number"||A.cy(a)||a==null)return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.d0(a)},
b2(a){return new A.bx(a)},
dN(a){return new A.aa(!1,null,null,a)},
dO(a,b,c){return new A.aa(!0,a,b,c)},
eb(a,b){return new A.bi(null,null,!0,a,b,"Value not in range")},
bj(a,b,c,d,e){return new A.bi(b,c,!0,a,d,"Invalid value")},
ec(a,b,c){if(0>a||a>c)throw A.b(A.bj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bj(b,a,c,"end",null))
return b}return c},
dZ(a,b,c,d){return new A.bD(b,!0,a,d,"Index out of range")},
V(a){return new A.bZ(a)},
d5(a){return new A.bY(a)},
b5(a){return new A.by(a)},
cO(a,b,c){return new A.bC(a,b,c)},
cn(a,b,c){var t,s
if(A.dw(a))return b+"..."+c
t=new A.aH(b)
B.b.m($.N,a)
try{s=t
s.a=A.eh(s.a,a,", ")}finally{if(0>=$.N.length)return A.e($.N,-1)
$.N.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
e6(a,b,c,d){var t
if(B.k===c)return A.d3(B.a.gk(a),J.O(b),$.cj())
if(B.k===d){t=B.a.gk(a)
b=J.O(b)
c=J.O(c)
return A.cs(A.U(A.U(A.U($.cj(),t),b),c))}t=B.a.gk(a)
b=J.O(b)
c=J.O(c)
d=J.O(d)
d=A.cs(A.U(A.U(A.U(A.U($.cj(),t),b),c),d))
return d},
bL:function bL(a,b){this.a=a
this.b=b},
c0:function c0(){},
bA:function bA(){},
bx:function bx(a){this.a=a},
bX:function bX(){},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bD:function bD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a){this.a=a},
bY:function bY(a){this.a=a},
by:function by(a){this.a=a},
bR:function bR(){},
c2:function c2(a){this.a=a},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(){},
j:function j(){},
aH:function aH(a){this.a=a},
bz:function bz(){},
c3:function c3(){},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
k:function k(a,b,c){this.c=a
this.d=b
this.b=c},
b4:function b4(){},
bF(a,b){return new A.A(a*2-2*b,a+b)},
A:function A(a,b){this.a=a
this.b=b},
ac:function ac(a,b){this.a=a
this.b=b},
z:function z(){},
b0:function b0(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=!0},
H:function H(a){this.b=a},
F(a,b,c){var t=new A.a2(a,b,c)
t.e=u.u.a(a.c.$1(t))
t.d!==$&&A.fq()
t.d=new A.b4()
return t},
a2:function a2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=!0},
bf:function bf(a,b){this.c=a
this.b=b},
bb:function bb(){},
bm:function bm(){},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a){this.b=a},
fm(){self.jsregionworker=A.f3(new A.ch(),u.e)},
ch:function ch(){},
bU:function bU(a){this.a=a
this.b=$},
bM:function bM(a){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.Q=a},
cQ(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ak(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cO("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.f5(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.u(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cO("Not radix digit",a,t))}if(s)return A.af(0,0,0,q,p,o)
return new A.w(q&4194303,p&4194303,o&1048575)},
cm(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.H(a,17592186044416)
a-=s*17592186044416
r=B.a.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.af(0,0,0,q,p,o):new A.w(q,p,o)},
bE(a){if(a instanceof A.w)return a
else if(A.ca(a))return A.cm(a)
throw A.b(A.dO(a,"other","not an int, Int32 or Int64"))},
e1(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
af(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.u(t,22)&1)
return new A.w(t&4194303,s&4194303,c-f-(B.a.u(s,22)&1)&1048575)},
e_(a,b,c){var t,s,r,q,p=A.bE(b)
if(p.gag())throw A.b(A.V("Division by zero"))
if(a.gag())return B.q
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.af(0,0,0,a.a,a.b,t)
if(q)p=A.af(0,0,0,p.a,p.b,r)
return A.e0(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
e0(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
t=t+a*(B.a.u(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.af(0,0,0,p,r,t)
return new A.w(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.w(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.q
else return A.af(a4,a5,a6,o,n,m)
else return A.af(0,0,0,o,n,m)},
w:function w(a,b,c){this.a=a
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
G(a){var t=new A.bN(new Int16Array(2048),A.aA(2048,B.I,u.q),A.aA(2048,B.a7,u.h),A.aA(2048,B.aW,u.U))
t.an(a)
return t},
e7(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
B.b.i($.dC(),t,m)}for(t=0;t<16;++t)B.b.i($.dD(),t,A.d8(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.d([],u.f)
for(i=0;i<24;++i){h=B.dV[i]
l.push(new A.f(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.N(t,24)
if(!(k<l.length))return A.e(l,k)
B.b.m($.bO,l[k])}l=A.d([],u.Y)
for(i=0;i<48;++i){h=B.dX[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.N(t,48)
if(!(k<l.length))return A.e(l,k)
B.b.m($.bP,l[k])}l=A.d([],u.J)
for(i=0;i<160;++i){h=B.dW[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.N(t,160)
if(!(k<l.length))return A.e(l,k)
B.b.m($.bQ,l[k])}},
W(a,b,c,d){return new A.bq()},
d8(a,b,c,d){var t=new A.br(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(){},
br:function br(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
fp(a){A.cF(new A.az("Field '"+a+"' has been assigned during initialization."),new Error())},
D(){A.cF(new A.az("Field '' has not been initialized."),new Error())},
fq(){A.cF(new A.az("Field '' has already been initialized."),new Error())},
eH(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eG,a)
t[$.cH()]=a
a.$dart_jsFunction=t
return t},
eG(a,b){u.j.a(b)
u.Z.a(a)
return A.ea(a,b,null)},
f3(a,b){if(typeof a=="function")return a
else return b.a(A.eH(a))},
d4(a,b,c,d,e){var t,s,r,q,p,o
for(t=0;t<12;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.G(a/e)*e
r=s.a
p=c.a
o=c.b
o=new A.A(p*2-2*o,p+o)
p=new A.an(r,o,q,e)
p.f=new A.b4()
r=A.cb(r,o,q,!0,e)
p.d=r
return p}}throw A.b(new A.c2("No tile type found for elevation: "+A.n(a)+", moisture: "+A.n(b)+". Fix the rules!"))},
e5(a,b,c,d){var t,s,r,q=d.h(0,a)
if(q!=null)for(t=0;t<1;++t){s=q[t]
if(B.H.aH()<s.b){r=c+1
A.dt(b,r)
return A.dt(b,r)}}return A.d([],u.r)},
dP(a){return A.cb(B.l,a.b,a.c,a.f,1)},
dQ(a){return A.cb(B.y,a.b,a.c,a.f,1)},
ei(a){return A.cb(a.a,a.b,a.c,a.r,a.e)},
cb(a,b,c,d,e){var t=b.p(0,A.bF(c,c)).p(0,A.bF(e,e)).p(0,A.bF(0,e)),s=t.p(0,A.bF(e,0)),r=new Float32Array(4)
r[0]=-0.025*e
r[1]=0
r[2]=t.a
r[3]=s.b
return new A.ac(r,A.fe(a))},
dt(a,b){var t=b+3,s=b+4,r=b+5
return A.d([A.F(B.h,a,b+1),A.F(B.h,a,b+2),A.F(B.h,a,t),A.F(B.h,a,s),A.F(B.h,a,r),A.F(B.e,a.p(0,B.dv),t),A.F(B.e,a.p(0,B.dw),t),A.F(B.e,a.p(0,B.du),s),A.F(B.e,a.p(0,B.dt),s),A.F(B.e,a.p(0,B.dx),r),A.F(B.e,a.p(0,B.dy),r)],u.r)},
dB(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=A.dY(u.N)
for(t=a.length,s=0;r=a.length,s<r;a.length===t||(0,A.a8)(a),++s){q=a[s]
p=q.M().K()
o=B.c.n(q.L())
i.m(0,""+B.c.n(p.a)+","+B.c.n(p.b)+","+o)}for(s=0;s<a.length;a.length===r||(0,A.a8)(a),++s){q=a[s]
p=q.M().K()
n=B.c.n(p.a)
m=B.c.n(p.b)
l=B.c.n(q.L())
t=""+n+","
k=""+l
j=""+m
q.a2(!(i.V(0,""+(n-b)+","+j+","+k)&&i.V(0,t+j+","+(l+b))&&i.V(0,t+(m-b)+","+k)))}},
fe(a){switch(a){case B.y:return $.dG()
case B.j:return $.dF()
case B.f:return $.dE()
case B.i:return $.dH()
case B.l:return $.dJ()
case B.z:return $.dI()}},
f5(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cE(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cD==null){A.fh()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.d5("Return interceptor for "+A.n(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c4
if(p==null)p=$.c4=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fl(a)
if(q!=null)return q
if(typeof a=="function")return B.dz
t=Object.getPrototypeOf(a)
if(t==null)return B.x
if(t===Object.prototype)return B.x
if(typeof r=="function"){p=$.c4
if(p==null)p=$.c4=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
cS(a,b){if(a<0||a>4294967295)throw A.b(A.bj(a,0,4294967295,"length",null))
return J.cT(new Array(a),b)},
cT(a,b){return J.co(A.d(a,b.l("h<0>")),b)},
co(a,b){a.fixed$length=Array
return a},
cU(a){a.fixed$length=Array
a.immutable$list=Array
return a},
e2(a,b){var t=u.s
return J.dK(t.a(a),t.a(b))},
L(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ax.prototype
return J.b9.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.ay.prototype
if(typeof a=="boolean")return J.b7.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.j)return a
return J.cC(a)},
bw(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.j)return a
return J.cC(a)},
fa(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof A.j)return a
return J.cC(a)},
fb(a){if(typeof a=="number")return J.ag.prototype
if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.ao.prototype
return a},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).v(a,b)},
dK(a,b){return J.fb(a).J(a,b)},
O(a){return J.L(a).gk(a)},
cI(a){return J.fa(a).gZ(a)},
ck(a){return J.bw(a).gq(a)},
dL(a){return J.L(a).gB(a)},
dM(a,b){return J.L(a).ah(a,b)},
b_(a){return J.L(a).j(a)},
b6:function b6(){},
b7:function b7(){},
ay:function ay(){},
p:function p(){},
a1:function a1(){},
bg:function bg(){},
ao:function ao(){},
R:function R(){},
h:function h(a){this.$ti=a},
bG:function bG(a){this.$ti=a},
b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ag:function ag(){},
ax:function ax(){},
b9:function b9(){},
a_:function a_(){}},B={}
var w=[A,J,B]
var $={}
A.cp.prototype={}
J.b6.prototype={
v(a,b){return a===b},
gk(a){return A.bh(a)},
j(a){return"Instance of '"+A.bT(a)+"'"},
ah(a,b){throw A.b(A.cX(a,u.o.a(b)))},
gB(a){return A.a6(A.cx(this))}}
J.b7.prototype={
j(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.a6(u.y)},
$ix:1,
$icA:1}
J.ay.prototype={
v(a,b){return null==b},
j(a){return"null"},
gk(a){return 0},
$ix:1}
J.p.prototype={}
J.a1.prototype={
gk(a){return 0},
j(a){return String(a)}}
J.bg.prototype={}
J.ao.prototype={}
J.R.prototype={
j(a){var t=a[$.cH()]
if(t==null)return this.am(a)
return"JavaScript function for "+J.b_(t)},
$iae:1}
J.h.prototype={
m(a,b){A.ar(a).c.a(b)
if(!!a.fixed$length)A.at(A.V("add"))
a.push(b)},
I(a,b){A.ar(a).l("r<1>").a(b)
if(!!a.fixed$length)A.at(A.V("addAll"))
this.ap(a,b)
return},
ap(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.b5(a))
for(s=0;s<t;++s)a.push(b[s])},
j(a){return A.cn(a,"[","]")},
gZ(a){return new J.b1(a,a.length,A.ar(a).l("b1<1>"))},
gk(a){return A.bh(a)},
gq(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.bv(a,b))
return a[b]},
i(a,b,c){A.ar(a).c.a(c)
if(!!a.immutable$list)A.at(A.V("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.bv(a,b))
a[b]=c},
$ir:1,
$ii:1}
J.bG.prototype={}
J.b1.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.a8(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa8(null)
return!1}s.sa8(r[t]);++s.c
return!0},
sa8(a){this.d=this.$ti.l("1?").a(a)}}
J.ag.prototype={
J(a,b){var t
A.eB(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gY(b)
if(this.gY(a)===t)return 0
if(this.gY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gY(a){return a===0?1/a<0:a<0},
n(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.V(""+a+".toInt()"))},
G(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.V(""+a+".floor()"))},
aJ(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aj(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bj(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.e(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.at(A.V("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.e(q,1)
t=q[1]
if(3>=s)return A.e(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.a1("0",p)},
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
throw A.b(A.V("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
u(a,b){var t
if(a>0)t=this.aC(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aC(a,b){return b>31?0:a>>>b},
gB(a){return A.a6(u.H)},
$iq:1,
$im:1,
$iy:1}
J.ax.prototype={
gB(a){return A.a6(u.S)},
$ix:1,
$io:1}
J.b9.prototype={
gB(a){return A.a6(u.i)},
$ix:1}
J.a_.prototype={
p(a,b){return a+b},
ak(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
O(a,b,c){return a.substring(b,A.ec(b,c,a.length))},
al(a,b){return this.O(a,b,null)},
a1(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.G)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
J(a,b){var t
A.aW(b)
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
gB(a){return A.a6(u.N)},
gq(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.bv(a,b))
return a[b]},
$ix:1,
$iq:1,
$icZ:1,
$iC:1}
A.az.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.bW.prototype={}
A.ba.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t,s=this,r=s.a,q=J.bw(r),p=q.gq(r)
if(s.b!==p)throw A.b(A.b5(r))
t=s.c
if(t>=p){s.sa3(null)
return!1}s.sa3(q.h(r,t));++s.c
return!0},
sa3(a){this.d=this.$ti.l("1?").a(a)}}
A.Q.prototype={}
A.al.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.al&&this.a===b.a},
$iam:1}
A.aO.prototype={$r:"+(1,2)",$s:1}
A.ap.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.av.prototype={}
A.au.prototype={
j(a){return A.bI(this)},
$iS:1}
A.aw.prototype={
gq(a){return this.b.length},
W(a){return!1},
h(a,b){if(!this.W(b))return null
return this.b[this.a[b]]},
E(a,b){var t,s,r,q,p=this
p.$ti.l("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.b8.prototype={
gaF(){var t=this.a
return t},
gaI(){var t,s,r,q,p=this
if(p.c===1)return B.v
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.v
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.e(t,q)
r.push(t[q])}return J.cU(r)},
gaG(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.w
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.w
p=new A.a0(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.e(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.e(r,m)
p.i(0,new A.al(n),r[m])}return new A.av(p,u.a)},
$icR:1}
A.bS.prototype={
$2(a,b){var t
A.aW(a)
t=this.a
t.b=t.b+"$"+a
B.b.m(this.b,a)
B.b.m(this.c,b);++t.a},
$S:1}
A.P.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dA(s==null?"unknown":s)+"'"},
$iae:1,
gaK(){return this},
$C:"$1",
$R:1,
$D:null}
A.b3.prototype={$C:"$2",$R:2}
A.bn.prototype={}
A.bl.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dA(t)+"'"}}
A.ab.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ab))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dx(this.a)^A.bh(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bT(this.a)+"'")}}
A.c_.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bV.prototype={
j(a){return"RuntimeError: "+this.a}}
A.c6.prototype={}
A.a0.prototype={
gq(a){return this.a},
W(a){var t=this.b
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
i(a,b,c){var t,s,r,q,p,o,n=this,m=A.K(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.a4(t==null?n.b=n.T():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a4(s==null?n.c=n.T():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.T()
q=n.ae(b)
p=r[q]
if(p==null)r[q]=[n.U(b,c)]
else{o=n.af(p,b)
if(o>=0)p[o].b=c
else p.push(n.U(b,c))}}},
E(a,b){var t,s,r=this
A.K(r).l("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.b5(r))
t=t.c}},
a4(a,b,c){var t,s=A.K(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.U(b,c)
else t.b=c},
U(a,b){var t=this,s=A.K(t),r=new A.bH(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ae(a){return J.O(a)&1073741823},
af(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a9(a[s].a,b))return s
return-1},
j(a){return A.bI(this)},
T(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icV:1}
A.bH.prototype={}
A.cd.prototype={
$1(a){return this.a(a)},
$S:2}
A.ce.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.cf.prototype={
$1(a){return this.a(A.aW(a))},
$S:4}
A.Y.prototype={
j(a){return this.ad(!1)},
ad(a){var t,s,r,q,p,o=this.aB(),n=this.ab(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.e(n,r)
p=n[r]
m=a?m+A.d0(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aB(){var t,s=this.$s
for(;$.c5.length<=s;)B.b.m($.c5,null)
t=$.c5[s]
if(t==null){t=this.av()
B.b.i($.c5,s,t)}return t},
av(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.d(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.i(l,r,s[t])}}return J.cU(A.cW(l,!1,u.K))}}
A.a5.prototype={
ab(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.a5&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gk(a){return A.e6(this.$s,this.a,this.b,B.k)}}
A.be.prototype={}
A.aj.prototype={
gq(a){return a.length},
$iah:1}
A.aD.prototype={
h(a,b){A.c9(b,a,a.length)
return a[b]},
i(a,b,c){A.cw(c)
A.c9(b,a,a.length)
a[b]=c},
$ir:1,
$ii:1}
A.aE.prototype={
i(a,b,c){A.aV(c)
A.c9(b,a,a.length)
a[b]=c},
$ir:1,
$ii:1}
A.bc.prototype={
gB(a){return B.e_},
$ix:1,
$ibB:1}
A.bd.prototype={
gB(a){return B.e0},
h(a,b){A.c9(b,a,a.length)
return a[b]},
$ix:1,
$icl:1}
A.aK.prototype={}
A.aL.prototype={}
A.aM.prototype={}
A.aN.prototype={}
A.B.prototype={
l(a){return A.aT(v.typeUniverse,this,a)},
a5(a){return A.dh(v.typeUniverse,this,a)}}
A.bo.prototype={}
A.c7.prototype={
j(a){return A.v(this.a,null)}}
A.c1.prototype={
j(a){return this.a}}
A.bs.prototype={}
A.aJ.prototype={
gZ(a){return new A.bp(this,this.au(),A.K(this).l("bp<1>"))},
gq(a){return this.a},
V(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.aw(b)
return s}},
aw(a){var t=this.d
if(t==null)return!1
return this.a9(t[this.a7(a)],a)>=0},
m(a,b){var t,s,r=this
A.K(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.aq(t==null?r.b=A.d7():t,b)}else{s=r.ao(b)
return s}},
ao(a){var t,s,r,q=this
A.K(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.d7()
s=q.a7(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a9(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
au(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.aA(j.a,null,u.z)
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
aq(a,b){A.K(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a7(a){return B.d.gk(a)&1073741823},
a9(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a9(a[s],b))return s
return-1}}
A.bp.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
F(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.b5(q))
else if(r>=s.length){t.sa6(null)
return!1}else{t.sa6(s[r])
t.c=r+1
return!0}},
sa6(a){this.d=this.$ti.l("1?").a(a)}}
A.E.prototype={
gZ(a){return new A.ba(a,this.gq(a),A.aY(a).l("ba<E.E>"))},
j(a){return A.cn(a,"[","]")}}
A.aB.prototype={
gq(a){return this.a},
j(a){return A.bI(this)},
$iS:1}
A.bJ.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.n(a)
s.a=t+": "
s.a+=A.n(b)},
$S:5}
A.aU.prototype={}
A.ai.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.l("~(1,2)").a(b))},
gq(a){return this.a.a},
j(a){return A.bI(this.a)},
$iS:1}
A.aI.prototype={}
A.aG.prototype={
j(a){return A.cn(this,"{","}")},
$ir:1}
A.aP.prototype={}
A.aq.prototype={}
A.bL.prototype={
$2(a,b){var t,s,r
u.w.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.ad(b)
s.a=", "},
$S:6}
A.c0.prototype={
j(a){return this.P()}}
A.bA.prototype={}
A.bx.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ad(t)
return"Assertion failed"}}
A.bX.prototype={}
A.aa.prototype={
gS(){return"Invalid argument"+(!this.a?"(s)":"")},
gR(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gS()+r+p
if(!t.a)return o
return o+t.gR()+": "+A.ad(t.gX())},
gX(){return this.b}}
A.bi.prototype={
gX(){return A.eC(this.b)},
gS(){return"RangeError"},
gR(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.bD.prototype={
gX(){return A.aV(this.b)},
gS(){return"RangeError"},
gR(){if(A.aV(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bK.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aH("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.ad(o)
k.a=", "}l.d.E(0,new A.bL(k,j))
n=A.ad(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bZ.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bY.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.by.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ad(t)+"."}}
A.bR.prototype={
j(a){return"Out of Memory"}}
A.c2.prototype={
j(a){return"Exception: "+this.a}}
A.bC.prototype={
j(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.O(g,0,75)+"..."
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
k=""}return i+l+B.d.O(g,m,n)+k+"\n"+B.d.a1(" ",h-m+l.length)+"^\n"}}
A.aF.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
j(a){return"null"}}
A.j.prototype={$ij:1,
v(a,b){return this===b},
gk(a){return A.bh(this)},
j(a){return"Instance of '"+A.bT(this)+"'"},
ah(a,b){throw A.b(A.cX(this,u.o.a(b)))},
gB(a){return A.fd(this)},
toString(){return this.j(this)}}
A.aH.prototype={
gq(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bz.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.c3.prototype={
aH(){return Math.random()}}
A.a3.prototype={
j(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
v(a,b){if(b==null)return!1
return b instanceof A.a3&&this.a===b.a&&this.b===b.b},
gk(a){return A.d3(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.k.prototype={
P(){return"LevelOfDetail."+this.b}}
A.b4.prototype={}
A.A.prototype={
p(a,b){return new A.A(this.a+b.a,this.b+b.b)},
K(){var t=this.b,s=t/2-this.a/4
return new A.a3(t-s,s,u.O)},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.A&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
j(a){return""+B.c.n(this.a)+", "+B.c.n(this.b)}}
A.ac.prototype={}
A.z.prototype={
J(a,b){var t,s,r,q
u.k.a(b)
t=this.a_()
s=b.a_()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$iq:1}
A.b0.prototype={}
A.an.prototype={
a0(){var t=this,s=t.b,r=t.d
r===$&&A.D()
return["Tile",t.a.b,s.a,s.b,t.c,t.e,A.d([r.a,r.b],u.V),t.r]},
a_(){var t=this.b.K()
return new A.ap(-1*(t.a+t.b+this.e),this.c)},
M(){return this.b},
a2(a){var t=this
if(t.r===a)return
t.r=a
t.d=A.ei(t)},
L(){return this.c}}
A.H.prototype={
P(){return"TileType."+this.b}}
A.a2.prototype={
a_(){var t=this.b.K()
return new A.ap(-1*(t.a+t.b+1),this.c)},
M(){return this.b},
a2(a){this.f=a},
L(){return this.c},
a0(){var t=this,s=t.b,r=t.e
r===$&&A.D()
return["NaturalItem",t.a.b,s.a,s.b,t.c,A.d([r.a,r.b],u.V),t.f]}}
A.bf.prototype={
P(){return"NaturalItemPart."+this.b}}
A.bb.prototype={}
A.bm.prototype={
ai(){var t=null
return A.d([new A.t(B.i,0,-0.2),new A.t(B.f,0,0),new A.t(B.z,0,t),new A.t(B.i,10,-0.2),new A.t(B.j,10,0.3),new A.t(B.f,10,t),new A.t(B.i,15,-0.2),new A.t(B.f,15,0.4),new A.t(B.j,15,t),new A.t(B.i,20,0.5),new A.t(B.f,20,0.6),new A.t(B.l,t,t)],u.d)}}
A.t.prototype={}
A.ak.prototype={}
A.ch.prototype={
$1(a){var t,s,r,q,p,o,n,m,l=new A.bm(),k=new A.bU(l),j=J.bw(a),i=A.aV(j.h(a,0)),h=A.aV(j.h(a,1)),g=A.cw(j.h(a,2)),f=A.cw(j.h(a,3))
j=A.aV(j.h(a,4))
if(!(j>=0&&j<20))return A.e(B.t,j)
t=B.t[j]
j=B.c.n(g)
s=B.c.n(f)
r=new A.bM(l)
r.a=A.G(2)
r.b=A.G(3)
r.c=A.G(4)
r.d=A.G(5)
r.e=A.G(6)
r.f=A.G(7)
r.r=A.G(8)
r.w=A.G(9)
r.x=A.G(10)
r.y=A.G(11)
r.z=A.G(12)
k.b=r
l=t.c
q=r.aD(i,h,j,s,l)
p=k.aA(j,s,q.a,q.b,l)
o=A.cW(p,!0,u.k)
A.dB(o,l)
if(t.d)B.b.I(o,k.az(p))
A.dB(o,l)
if(!!o.immutable$list)A.at(A.V("sort"))
A.eg(o,J.eQ(),A.ar(o).c)
n=A.d([],u.l)
for(l=o.length,m=0;m<o.length;o.length===l||(0,A.a8)(o),++m)B.b.m(n,o[m].a0())
return n},
$S:7}
A.bU.prototype={
aA(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.I.a(c)
t=A.d([],u.Q)
for(s=c.length,r=u.O,q=this.a,p=d.length,o=0;o<s;++o){n=c[o]
if(!(o<p))return A.e(d,o)
m=d[o]
for(l=m.length,k=a+o*e,j=n.length,i=0;i<c[0].length;++i){if(!(i<j))return A.e(n,i)
h=n[i]
if(h<=0){g=B.c.G(h/e)
if(!(i<l))return A.e(m,i)
B.b.m(t,A.d4(g*e,m[i],new A.a3(k,b+i*e,r),q.ai(),e))}else for(g=b+i*e;h>0;){f=B.c.G(h/e)
if(!(i<l))return A.e(m,i)
B.b.m(t,A.d4(f*e,m[i],new A.a3(k,g,r),q.ai(),e))
h-=e}}}return t},
az(a){var t,s,r,q,p,o,n,m
u.t.a(a)
t=A.d([],u.r)
for(s=a.length,r=u.W,q=u.x,p=u.m,o=0;o<a.length;a.length===s||(0,A.a8)(a),++o){n=a[o]
m=A.e5(n.a,n.b,n.c,A.e3([B.j,A.d([new A.ak(0.01)],r),B.f,A.d([new A.ak(0.005)],r)],q,p))
if(m.length!==0)B.b.I(t,m)}return t}}
A.bM.prototype={
aD(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.aa(b3,b4),b2=b0.aa(b3,b4)
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
B.b.i(b1[r],h,B.c.aJ(((a+0.5*f+0.25*e+0.125*a5+0.25*a6+0.125*a7+0.0625*a8+0.03125*a9+1.5)/4-0.4)*120))
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
B.b.i(b2[r],h,(a9+0.5*a8+0.25*a7)/1.75)}return new A.aO(b1,b2)},
aa(a,b){var t,s,r,q,p=J.cS(a,u.v)
for(t=u.i,s=0;s<a;++s){r=J.cS(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.w.prototype={
p(a,b){var t=A.bE(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.w(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
v(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.w)t=b
else if(A.ca(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cm(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
J(a,b){return this.ar(b)},
ar(a){var t=A.bE(a),s=this.c,r=s>>>19,q=t.c
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
return A.e1(10,q,p,o,r)},
$iq:1}
A.f.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bN.prototype={
an(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cY){A.e7()
$.cY=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.e(t,s)
t[s]=s}r=A.cm(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cQ("6364136223846793005",10,!0)
m.toString
l=A.bE(m)
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
m=A.cQ("1442695040888963407",10,!0)
m.toString
r=new A.w(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).p(0,m)
m=s+1
a7=A.e_(r.p(0,31),m,3).n(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.e(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bO.length))return A.e($.bO,m)
B.b.i(p,s,$.bO[m])
m=q[s]
if(!(m>=0&&m<$.bP.length))return A.e($.bP,m)
B.b.i(o,s,$.bP[m])
m=q[s]
if(!(m>=0&&m<$.bQ.length))return A.e($.bQ,m)
B.b.i(n,s,$.bQ[m])
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
A.a4.prototype={}
A.bq.prototype={}
A.br.prototype={};(function aliases(){var t=J.a1.prototype
t.am=t.j})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1
t(J,"eQ","e2",8)
s(A,"f8","dP",0)
s(A,"f9","dQ",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cp,J.b6,J.b1,A.bA,A.bW,A.ba,A.Q,A.al,A.Y,A.ai,A.au,A.b8,A.P,A.c6,A.aB,A.bH,A.B,A.bo,A.c7,A.aG,A.bp,A.E,A.aU,A.c0,A.bR,A.c2,A.bC,A.aF,A.aH,A.c3,A.a3,A.b4,A.A,A.ac,A.z,A.bb,A.t,A.ak,A.bU,A.bM,A.w,A.f,A.c,A.a,A.bN,A.a4,A.bq,A.br])
r(J.b6,[J.b7,J.ay,J.p,J.ag,J.a_])
r(J.p,[J.a1,J.h,A.be,A.bz])
r(J.a1,[J.bg,J.ao,J.R])
s(J.bG,J.h)
r(J.ag,[J.ax,J.b9])
r(A.bA,[A.az,A.c_,A.bV,A.c1,A.bx,A.bX,A.aa,A.bK,A.bZ,A.bY,A.by])
s(A.a5,A.Y)
r(A.a5,[A.aO,A.ap])
s(A.aq,A.ai)
s(A.aI,A.aq)
s(A.av,A.aI)
s(A.aw,A.au)
r(A.P,[A.b3,A.bn,A.cd,A.cf,A.ch])
r(A.b3,[A.bS,A.ce,A.bJ,A.bL])
r(A.bn,[A.bl,A.ab])
s(A.a0,A.aB)
s(A.aj,A.be)
r(A.aj,[A.aK,A.aM])
s(A.aL,A.aK)
s(A.aD,A.aL)
s(A.aN,A.aM)
s(A.aE,A.aN)
s(A.bc,A.aD)
s(A.bd,A.aE)
s(A.bs,A.c1)
s(A.aP,A.aG)
s(A.aJ,A.aP)
r(A.aa,[A.bi,A.bD])
r(A.c0,[A.k,A.H,A.bf])
r(A.z,[A.b0,A.a2])
s(A.an,A.b0)
s(A.bm,A.bb)
t(A.aK,A.E)
t(A.aL,A.Q)
t(A.aM,A.E)
t(A.aN,A.Q)
t(A.aq,A.aU)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",y:"num",C:"String",cA:"bool",aF:"Null",i:"List"},mangledNames:{},types:["ac(a2)","~(C,@)","@(@)","@(@,C)","@(C)","~(j?,j?)","~(am,@)","i<i<@>?>(@)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aO&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.ap&&a.b(c.a)&&b.b(c.b)}}
A.ey(v.typeUniverse,JSON.parse('{"bg":"a1","ao":"a1","R":"a1","b7":{"cA":[],"x":[]},"ay":{"x":[]},"h":{"i":["1"],"r":["1"]},"bG":{"h":["1"],"i":["1"],"r":["1"]},"ag":{"m":[],"y":[],"q":["y"]},"ax":{"m":[],"o":[],"y":[],"q":["y"],"x":[]},"b9":{"m":[],"y":[],"q":["y"],"x":[]},"a_":{"C":[],"q":["C"],"cZ":[],"x":[]},"al":{"am":[]},"aO":{"a5":[],"Y":[]},"ap":{"a5":[],"Y":[]},"av":{"aI":["1","2"],"aq":["1","2"],"ai":["1","2"],"aU":["1","2"],"S":["1","2"]},"au":{"S":["1","2"]},"aw":{"au":["1","2"],"S":["1","2"]},"b8":{"cR":[]},"P":{"ae":[]},"b3":{"ae":[]},"bn":{"ae":[]},"bl":{"ae":[]},"ab":{"ae":[]},"a0":{"aB":["1","2"],"cV":["1","2"],"S":["1","2"]},"a5":{"Y":[]},"aj":{"ah":["1"]},"aD":{"E":["m"],"ah":["m"],"i":["m"],"r":["m"],"Q":["m"]},"aE":{"E":["o"],"ah":["o"],"i":["o"],"r":["o"],"Q":["o"]},"bc":{"E":["m"],"bB":[],"ah":["m"],"i":["m"],"r":["m"],"Q":["m"],"x":[],"E.E":"m"},"bd":{"E":["o"],"cl":[],"ah":["o"],"i":["o"],"r":["o"],"Q":["o"],"x":[],"E.E":"o"},"aJ":{"r":["1"]},"aB":{"S":["1","2"]},"ai":{"S":["1","2"]},"aI":{"aq":["1","2"],"ai":["1","2"],"aU":["1","2"],"S":["1","2"]},"aG":{"r":["1"]},"aP":{"r":["1"]},"m":{"y":[],"q":["y"]},"o":{"y":[],"q":["y"]},"i":{"r":["1"]},"y":{"q":["y"]},"C":{"q":["C"],"cZ":[]},"z":{"q":["z"]},"b0":{"z":[],"q":["z"]},"an":{"z":[],"q":["z"]},"a2":{"z":[],"q":["z"]},"bm":{"bb":[]},"w":{"q":["j"]},"cl":{"i":["o"],"r":["o"]},"bB":{"i":["m"],"r":["m"]}}'))
A.ex(v.typeUniverse,JSON.parse('{"aj":1,"aG":1,"aP":1}'))
var u=(function rtii(){var t=A.a7
return{s:t("q<@>"),a:t("av<am,@>"),u:t("ac"),Z:t("ae"),k:t("z"),q:t("f"),h:t("c"),U:t("a"),o:t("cR"),V:t("h<bB>"),f:t("h<f>"),Y:t("h<c>"),J:t("h<a>"),r:t("h<a2>"),W:t("h<ak>"),G:t("h<j>"),c:t("h<C>"),Q:t("h<an>"),d:t("h<t>"),n:t("h<m>"),b:t("h<@>"),l:t("h<i<@>?>"),T:t("ay"),g:t("R"),p:t("ah<@>"),B:t("a0<am,@>"),I:t("i<i<m>>"),m:t("i<ak>"),t:t("i<an>"),v:t("i<m>"),j:t("i<@>"),e:t("i<i<@>?>(@)"),P:t("aF"),K:t("j"),O:t("a3<m>"),L:t("fv"),F:t("+()"),N:t("C"),w:t("am"),x:t("H"),R:t("x"),C:t("ao"),y:t("cA"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("j*"),D:t("cP<aF>?"),X:t("j?"),H:t("y")}})();(function constants(){var t=hunkHelpers.makeConstList
B.ds=J.b6.prototype
B.b=J.h.prototype
B.a=J.ax.prototype
B.c=J.ag.prototype
B.d=J.a_.prototype
B.dz=J.R.prototype
B.dA=J.p.prototype
B.x=J.bg.prototype
B.m=J.ao.prototype
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

B.G=new A.bR()
B.k=new A.bW()
B.H=new A.c3()
B.p=new A.c6()
B.I=new A.f(0,0)
B.a7=new A.c(0,0,0)
B.aW=new A.a(0,0,0,0)
B.q=new A.w(0,0,0)
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
B.e5=new A.a4(1,0,-0.788675134594813,0.211324865405187)
B.e2=new A.a4(0,0,0,0)
B.e3=new A.a4(1,1,-0.577350269189626,-0.577350269189626)
B.e4=new A.a4(0,1,0.211324865405187,-0.788675134594813)
B.r=A.d(t([B.e5,B.e2,B.e3,B.e4]),A.a7("h<a4>"))
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
B.t=A.d(t([B.dG,B.dK,B.dO,B.dU,B.dF,B.dM,B.dR,B.dC,B.dI,B.dP,B.dB,B.dH,B.dN,B.dT,B.dE,B.dL,B.dS,B.dD,B.dJ,B.dQ]),A.a7("h<k>"))
B.u=A.d(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.a7("h<o>"))
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
B.w=new A.aw(B.dY,[],A.a7("aw<am,@>"))
B.e=new A.bf(A.f8(),"birchLeavesCube")
B.h=new A.bf(A.f9(),"birchTrunkCube")
B.dZ=new A.al("call")
B.y=new A.H("ice")
B.j=new A.H("grass")
B.f=new A.H("deathGrass")
B.i=new A.H("rock")
B.l=new A.H("snow")
B.z=new A.H("sand")
B.e_=A.cG("bB")
B.e0=A.cG("cl")
B.e1=A.cG("j")})();(function staticFields(){$.c4=null
$.N=A.d([],u.G)
$.d_=null
$.cL=null
$.cK=null
$.du=null
$.dr=null
$.dz=null
$.cc=null
$.cg=null
$.cD=null
$.c5=A.d([],A.a7("h<i<j>?>"))
$.bO=A.d([],u.f)
$.bP=A.d([],u.Y)
$.bQ=A.d([],u.J)
$.cY=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fs","cH",()=>A.fc("_$dart_dartClosure"))
t($,"fF","cj",()=>A.dx(B.e1))
t($,"fG","dE",()=>A.aC(A.d([0,0,161,161],u.n)))
t($,"fH","dF",()=>A.aC(A.d([0,161,161,322],u.n)))
t($,"fK","dH",()=>A.aC(A.d([0,322,161,483],u.n)))
t($,"fM","dJ",()=>A.aC(A.d([0,483,161,644],u.n)))
t($,"fI","dG",()=>A.aC(A.d([0,644,161,805],u.n)))
t($,"fL","dI",()=>A.aC(A.d([0,805,161,966],u.n)))
t($,"ft","dC",()=>A.aA(8,A.W(0,0,0,0),A.a7("bq")))
t($,"fu","dD",()=>A.aA(16,A.d8(0,0,0,0),A.a7("br")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.be,Float32Array:A.bc,Int16Array:A.bd,DOMException:A.bz})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fm
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
