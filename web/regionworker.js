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
a[c]=function(){a[c]=function(){A.eV(b)}
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
if(a[b]!==t)A.eW(b)
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
a(hunkHelpers,v,w,$)}var A={c5:function c5(){},
cA(a){return new A.aU("Field '"+a+"' has been assigned during initialization.")},
dD(a){return new A.aU("Field '"+a+"' has not been initialized.")},
cK(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ci(a){var t,s
for(t=$.y.length,s=0;s<t;++s)if(a===$.y[s])return!0
return!1},
bG(a,b,c,d,e){if(c-b<=32)A.cI(a,b,c,d,e)
else A.cH(a,b,c,d,e)},
cI(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.be(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
cH(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.b.H(a4-a3+1,6),j=a3+k,i=a4-k,h=B.b.H(a3+a4,2),g=h-k,f=h+k,e=J.be(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.bf(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.bG(a2,a3,s-2,a5,a6)
A.bG(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.bf(a5.$2(e.h(a2,s),c),0);)++s
for(;J.bf(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.bG(a2,s,r,a5,a6)}else A.bG(a2,s,r,a5,a6)},
aU:function aU(a){this.a=a},
al:function al(){},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
K:function K(){},
ac:function ac(a){this.a=a},
da(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fe(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
j(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aL(a)
return t},
b1(a){var t,s=$.cE
if(s==null)s=$.cE=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bC(a){return A.dJ(a)},
dJ(a){var t,s,r,q
if(a instanceof A.l)return A.t(A.aJ(a),null)
t=J.H(a)
if(t===B.dk||t===B.dm||u.C.b(a)){s=B.j(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.t(A.aJ(a),null)},
dL(a){if(typeof a=="number"||A.cd(a))return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.J)return a.i(0)
return"Instance of '"+A.bC(a)+"'"},
N(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.a1(t,b)
r.b=""
if(c!=null&&c.a!==0)c.E(0,new A.bB(r,s,t))
return J.dl(a,new A.aS(B.dy,0,t,s,0))},
dK(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dI(a,b,c)},
dI(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.c6(b,u.z),g=h.length,f=a.$R
if(g<f)return A.N(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.H(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.N(a,h,c)
if(g===f)return p.apply(a,h)
return A.N(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.N(a,h,c)
o=f+r.length
if(g>o)return A.N(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.c6(h,u.z)
B.a.a1(h,n)}return p.apply(a,h)}else{if(g>f)return A.N(a,h,c)
if(h===b)h=A.c6(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.c1)(m),++l){k=r[A.Z(m[l])]
if(B.l===k)return A.N(a,h,c)
B.a.k(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.c1)(m),++l){i=A.Z(m[l])
if(c.R(i)){++j
B.a.k(h,c.h(0,i))}else{k=r[i]
if(B.l===k)return A.N(a,h,c)
B.a.k(h,k)}}if(j!==c.a)return A.N(a,h,c)}return p.apply(a,h)}},
e(a,b){if(a==null)J.cm(a)
throw A.b(A.a1(a,b))},
a1(a,b){var t,s="index"
if(!A.bU(b))return new A.a2(!0,b,s,null)
t=J.cm(a)
if(b<0||b>=t)return A.dw(b,t,a,s)
return A.dM(b,s)},
b(a){var t,s
if(a==null)a=new A.bH()
t=new Error()
t.dartException=a
s=A.eY
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eY(){return J.aL(this.dartException)},
D(a){throw A.b(a)},
c1(a){throw A.b(A.aP(a))},
eT(a){if(a==null||typeof a!="object")return J.c2(a)
else return A.b1(a)},
dv(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b4().constructor.prototype):Object.create(new A.a3(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cr(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dr(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cr(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dr(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dp)}throw A.b("Error in functionType of tearoff")},
ds(a,b,c,d){var t=A.cq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cr(a,b,c,d){var t,s
if(c)return A.du(a,b,d)
t=b.length
s=A.ds(t,d,a,b)
return s},
dt(a,b,c,d){var t=A.cq,s=A.dq
switch(b?-1:a){case 0:throw A.b(new A.bF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
du(a,b,c){var t,s
if($.co==null)$.co=A.cn("interceptor")
if($.cp==null)$.cp=A.cn("receiver")
t=b.length
s=A.dt(t,c,a,b)
return s},
cf(a){return A.dv(a)},
dp(a,b){return A.bR(v.typeUniverse,A.aJ(a.a),b)},
cq(a){return a.a},
dq(a){return a.b},
cn(a){var t,s,r,q=new A.a3("receiver","interceptor"),p=J.cz(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dm("Field name "+a+" not found."))},
eV(a){throw A.b(new A.bK(a))},
eH(a){return v.getIsolateTag(a)},
dE(a,b,c){var t=new A.a9(a,b,c.m("a9<0>"))
t.c=a.e
return t},
eQ(a){var t,s,r,q,p,o=A.Z($.d6.$1(a)),n=$.bV[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bZ[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eb($.d4.$2(a,o))
if(r!=null){n=$.bV[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bZ[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c0(t)
$.bV[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bZ[o]=t
return t}if(q==="-"){p=A.c0(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.d7(a,t)
if(q==="*")throw A.b(A.cL(o))
if(v.leafTags[o]===true){p=A.c0(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.d7(a,t)},
d7(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cj(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c0(a){return J.cj(a,!1,null,!!a.$ia8)},
eS(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c0(t)
else return J.cj(t,c,null,null)},
eM(){if(!0===$.ch)return
$.ch=!0
A.eN()},
eN(){var t,s,r,q,p,o,n,m
$.bV=Object.create(null)
$.bZ=Object.create(null)
A.eL()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.d8.$1(p)
if(o!=null){n=A.eS(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eL(){var t,s,r,q,p,o,n=B.u()
n=A.ag(B.v,A.ag(B.w,A.ag(B.k,A.ag(B.k,A.ag(B.x,A.ag(B.y,A.ag(B.z(B.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d6=new A.bW(q)
$.d4=new A.bX(p)
$.d8=new A.bY(o)},
ag(a,b){return a(b)||b},
eD(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aj:function aj(a,b){this.a=a
this.$ti=b},
ai:function ai(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aS:function aS(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(){},
aO:function aO(){},
b6:function b6(){},
b4:function b4(){},
a3:function a3(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
bF:function bF(a){this.a=a},
bP:function bP(){},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bp:function bp(a,b){this.a=a
this.b=b
this.c=null},
bq:function bq(a,b){this.a=a
this.$ti=b},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
ef(a){return a},
aq(a){return new Float32Array(A.ef(a))},
bT(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.a1(b,a))},
b_:function b_(){},
ab:function ab(){},
ar:function ar(){},
as:function as(){},
aY:function aY(){},
aZ:function aZ(){},
az:function az(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
cF(a,b){var t=b.c
return t==null?b.c=A.ca(a,b.y,!0):t},
c7(a,b){var t=b.c
return t==null?b.c=A.aE(a,"ct",[b.y]):t},
cG(a){var t=a.x
if(t===6||t===7||t===8)return A.cG(a.y)
return t===12||t===13},
dO(a){return a.at},
S(a){return A.bc(v.typeUniverse,a,!1)},
R(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.R(a,t,c,a0)
if(s===t)return b
return A.cV(a,s,!0)
case 7:t=b.y
s=A.R(a,t,c,a0)
if(s===t)return b
return A.ca(a,s,!0)
case 8:t=b.y
s=A.R(a,t,c,a0)
if(s===t)return b
return A.cU(a,s,!0)
case 9:r=b.z
q=A.aI(a,r,c,a0)
if(q===r)return b
return A.aE(a,b.y,q)
case 10:p=b.y
o=A.R(a,p,c,a0)
n=b.z
m=A.aI(a,n,c,a0)
if(o===p&&m===n)return b
return A.c8(a,o,m)
case 12:l=b.y
k=A.R(a,l,c,a0)
j=b.z
i=A.ez(a,j,c,a0)
if(k===l&&i===j)return b
return A.cT(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aI(a,h,c,a0)
p=b.y
o=A.R(a,p,c,a0)
if(g===h&&o===p)return b
return A.c9(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.aN("Attempted to substitute unexpected RTI kind "+d))}},
aI(a,b,c,d){var t,s,r,q,p=b.length,o=A.bS(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.R(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eA(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bS(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.R(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
ez(a,b,c,d){var t,s=b.a,r=A.aI(a,s,c,d),q=b.b,p=A.aI(a,q,c,d),o=b.c,n=A.eA(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.b8()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
d5(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eK(s)
t=a.$S()
return t}return null},
eO(a,b){var t
if(A.cG(b))if(a instanceof A.J){t=A.d5(a)
if(t!=null)return t}return A.aJ(a)},
aJ(a){if(a instanceof A.l)return A.a_(a)
if(Array.isArray(a))return A.af(a)
return A.cc(J.H(a))},
af(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
a_(a){var t=a.$ti
return t!=null?t:A.cc(a)},
cc(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.em(a,t)},
em(a,b){var t=a instanceof A.J?a.__proto__.__proto__.constructor:b,s=A.e6(v.typeUniverse,t.name)
b.$ccache=s
return s},
eK(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bc(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eI(a){return A.a0(A.a_(a))},
ey(a){var t=a instanceof A.J?A.d5(a):null
if(t!=null)return t
if(u.R.b(a))return J.dk(a).a
if(Array.isArray(a))return A.af(a)
return A.aJ(a)},
a0(a){var t=a.w
return t==null?a.w=A.cY(a):t},
cY(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bQ(a)
t=A.bc(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.cY(t):s},
d9(a){return A.a0(A.bc(v.typeUniverse,a,!1))},
el(a){var t,s,r,q,p,o=this
if(o===u.K)return A.G(o,a,A.er)
if(!A.I(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.G(o,a,A.ev)
t=o.x
if(t===7)return A.G(o,a,A.ej)
if(t===1)return A.G(o,a,A.d2)
s=t===6?o.y:o
t=s.x
if(t===8)return A.G(o,a,A.en)
if(s===u.S)r=A.bU
else if(s===u.i||s===u.H)r=A.eq
else if(s===u.N)r=A.et
else r=s===u.y?A.cd:null
if(r!=null)return A.G(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eP)){o.r="$i"+q
if(q==="i")return A.G(o,a,A.ep)
return A.G(o,a,A.eu)}}else if(t===11){p=A.eD(s.y,s.z)
return A.G(o,a,p==null?A.d2:p)}return A.G(o,a,A.eh)},
G(a,b,c){a.b=c
return a.b(b)},
ek(a){var t,s=this,r=A.eg
if(!A.I(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.ec
else if(s===u.K)r=A.ea
else{t=A.aK(s)
if(t)r=A.ei}s.a=r
return s.a(a)},
bd(a){var t,s=a.x
if(!A.I(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bd(a.y)))t=s===8&&A.bd(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eh(a){var t=this
if(a==null)return A.bd(t)
return A.k(v.typeUniverse,A.eO(a,t),null,t,null)},
ej(a){if(a==null)return!0
return this.y.b(a)},
eu(a){var t,s=this
if(a==null)return A.bd(s)
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.H(a)[t]},
ep(a){var t,s=this
if(a==null)return A.bd(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.H(a)[t]},
eg(a){var t,s=this
if(a==null){t=A.aK(s)
if(t)return a}else if(s.b(a))return a
A.cZ(a,s)},
ei(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cZ(a,t)},
cZ(a,b){throw A.b(A.dW(A.cM(a,A.t(b,null))))},
cM(a,b){return A.a4(a)+": type '"+A.t(A.ey(a),null)+"' is not a subtype of type '"+b+"'"},
dW(a){return new A.bb("TypeError: "+a)},
q(a,b){return new A.bb("TypeError: "+A.cM(a,b))},
en(a){var t=this
return t.y.b(a)||A.c7(v.typeUniverse,t).b(a)},
er(a){return a!=null},
ea(a){if(a!=null)return a
throw A.b(A.q(a,"Object"))},
ev(a){return!0},
ec(a){return a},
d2(a){return!1},
cd(a){return!0===a||!1===a},
f2(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.q(a,"bool"))},
f4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.q(a,"bool"))},
f3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.q(a,"bool?"))},
cb(a){if(typeof a=="number")return a
throw A.b(A.q(a,"double"))},
f6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.q(a,"double"))},
f5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.q(a,"double?"))},
bU(a){return typeof a=="number"&&Math.floor(a)===a},
aH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.q(a,"int"))},
f8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.q(a,"int"))},
f7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.q(a,"int?"))},
eq(a){return typeof a=="number"},
e8(a){if(typeof a=="number")return a
throw A.b(A.q(a,"num"))},
f9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.q(a,"num"))},
e9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.q(a,"num?"))},
et(a){return typeof a=="string"},
Z(a){if(typeof a=="string")return a
throw A.b(A.q(a,"String"))},
fa(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.q(a,"String"))},
eb(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.q(a,"String?"))},
d3(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.t(a[r],b)
return t},
ex(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d3(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.t(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d_(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.e(a4,k)
n=B.d.G(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.t(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.t(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.t(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.t(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.t(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
t(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.t(a.y,b)
return t}if(m===7){s=a.y
t=A.t(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.t(a.y,b)+">"
if(m===9){q=A.eB(a.y)
p=a.z
return p.length>0?q+("<"+A.d3(p,b)+">"):q}if(m===11)return A.ex(a,b)
if(m===12)return A.d_(a,b,null)
if(m===13)return A.d_(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.e(b,o)
return b[o]}return"?"},
eB(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e7(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
e6(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bc(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aF(a,5,"#")
r=A.bS(t)
for(q=0;q<t;++q)r[q]=s
p=A.aE(a,b,r)
o[b]=p
return p}else return n},
e4(a,b){return A.cW(a.tR,b)},
e3(a,b){return A.cW(a.eT,b)},
bc(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cR(A.cP(a,null,b,c))
s.set(b,t)
return t},
bR(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cR(A.cP(a,b,c,!0))
r.set(c,s)
return s},
e5(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.c8(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
F(a,b){b.a=A.ek
b.b=A.el
return b},
aF(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.z(null,null)
t.x=b
t.at=c
s=A.F(a,t)
a.eC.set(c,s)
return s},
cV(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e0(a,b,s,c)
a.eC.set(s,t)
return t},
e0(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.z(null,null)
r.x=6
r.y=b
r.at=c
return A.F(a,r)},
ca(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e_(a,b,s,c)
a.eC.set(s,t)
return t},
e_(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.I(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aK(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aK(r.y))return r
else return A.cF(a,b)}}q=new A.z(null,null)
q.x=7
q.y=b
q.at=c
return A.F(a,q)},
cU(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.dY(a,b,s,c)
a.eC.set(s,t)
return t},
dY(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aE(a,"ct",[b])
else if(b===u.P||b===u.T)return u.w}r=new A.z(null,null)
r.x=8
r.y=b
r.at=c
return A.F(a,r)},
e1(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=14
t.y=b
t.at=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
aD(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
dX(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aE(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aD(c)+">"
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
c8(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aD(s)+">")
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
e2(a,b,c){var t,s,r="+"+(b+"("+A.aD(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.z(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.F(a,t)
a.eC.set(r,s)
return s},
cT(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aD(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aD(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.dX(j)+"}"}s=o+(h+")")
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
c9(a,b,c,d){var t,s=b.at+("<"+A.aD(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.dZ(a,b,c,s,d)
a.eC.set(s,t)
return t},
dZ(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bS(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.R(a,b,s,0)
n=A.aI(a,c,s,0)
return A.c9(a,o,n,c!==n)}}m=new A.z(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.F(a,m)},
cP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cR(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dR(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cQ(a,s,m,l,!1)
else if(r===46)s=A.cQ(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.Q(a.u,a.e,l.pop()))
break
case 94:l.push(A.e1(a.u,l.pop()))
break
case 35:l.push(A.aF(a.u,5,"#"))
break
case 64:l.push(A.aF(a.u,2,"@"))
break
case 126:l.push(A.aF(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dT(a,l)
break
case 38:A.dS(a,l)
break
case 42:q=a.u
l.push(A.cV(q,A.Q(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.ca(q,A.Q(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cU(q,A.Q(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dQ(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cS(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.dV(a.u,a.e,p)
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
return A.Q(a.u,a.e,n)},
dR(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cQ(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.e7(t,p.y)[q]
if(o==null)A.D('No "'+q+'" in "'+A.dO(p)+'"')
d.push(A.bR(t,p,o))}else d.push(q)
return n},
dT(a,b){var t,s=a.u,r=A.cO(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aE(s,q,r))
else{t=A.Q(s,a.e,q)
switch(t.x){case 12:b.push(A.c9(s,t,r,a.n))
break
default:b.push(A.c8(s,t,r))
break}}},
dQ(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cO(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.Q(n,a.e,m)
p=new A.b8()
p.a=r
p.b=t
p.c=s
b.push(A.cT(n,q,p))
return
case-4:b.push(A.e2(n,b.pop(),r))
return
default:throw A.b(A.aN("Unexpected state under `()`: "+A.j(m)))}},
dS(a,b){var t=b.pop()
if(0===t){b.push(A.aF(a.u,1,"0&"))
return}if(1===t){b.push(A.aF(a.u,4,"1&"))
return}throw A.b(A.aN("Unexpected extended operation "+A.j(t)))},
cO(a,b){var t=b.splice(a.p)
A.cS(a.u,a.e,t)
a.p=b.pop()
return t},
Q(a,b,c){if(typeof c=="string")return A.aE(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dU(a,b,c)}else return c},
cS(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.Q(a,b,c[t])},
dV(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.Q(a,b,c[t])},
dU(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.aN("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.aN("Bad index "+c+" for "+b.i(0)))},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
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
if(r)if(A.k(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.k(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.k(a,b.y,c,d,e)
if(s===6)return A.k(a,b.y,c,d,e)
return s!==7}if(s===6)return A.k(a,b.y,c,d,e)
if(q===6){t=A.cF(a,d)
return A.k(a,b,c,t,e)}if(s===8){if(!A.k(a,b.y,c,d,e))return!1
return A.k(a,A.c7(a,b),c,d,e)}if(s===7){t=A.k(a,u.P,c,d,e)
return t&&A.k(a,b.y,c,d,e)}if(q===8){if(A.k(a,b,c,d.y,e))return!0
return A.k(a,b,c,A.c7(a,d),e)}if(q===7){t=A.k(a,b,c,u.P,e)
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
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.d1(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d1(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eo(a,b,c,d,e)}if(p&&q===11)return A.es(a,b,c,d,e)
return!1},
d1(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eo(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bR(a,b,s[p])
return A.cX(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cX(a,o,null,c,n,e)},
cX(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.k(a,s,d,r,f))return!1}return!0},
es(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
aK(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.I(a))if(s!==7)if(!(s===6&&A.aK(a.y)))t=s===8&&A.aK(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eP(a){var t
if(!A.I(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
I(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cW(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bS(a){return a>0?new Array(a):v.typeUniverse.sEA},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b8:function b8(){this.c=this.b=this.a=null},
bQ:function bQ(a){this.a=a},
bM:function bM(){},
bb:function bb(a){this.a=a},
dF(a,b){return new A.U(a.m("@<0>").ae(b).m("U<1,2>"))},
br(a){var t,s={}
if(A.ci(a))return"{...}"
t=new A.aw("")
try{B.a.k($.y,a)
t.a+="{"
s.a=!0
a.E(0,new A.bs(s,t))
t.a+="}"}finally{if(0>=$.y.length)return A.e($.y,-1)
$.y.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
B:function B(){},
ap:function ap(){},
bs:function bs(a,b){this.a=a
this.b=b},
aG:function aG(){},
aa:function aa(){},
ay:function ay(){},
ae:function ae(){},
aW(a,b,c){var t,s,r
if(a>4294967295)A.D(A.b3(a,0,4294967295,"length",null))
t=J.cy(new Array(a),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
c6(a,b){var t=A.dG(a,b)
return t},
dG(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.m("h<0>"))
t=A.d([],b.m("h<0>"))
for(s=J.cl(a);s.q();)B.a.k(t,s.gv())
return t},
cJ(a,b,c){var t=J.cl(b)
if(!t.q())return a
if(c.length===0){do a+=A.j(t.gv())
while(t.q())}else{a+=A.j(t.gv())
for(;t.q();)a=a+c+A.j(t.gv())}return a},
cB(a,b){return new A.bt(a,b.gan(),b.gap(),b.gao())},
a4(a){if(typeof a=="number"||A.cd(a)||a==null)return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dL(a)},
aN(a){return new A.bg(a)},
dm(a){return new A.a2(!1,null,null,a)},
dn(a,b,c){return new A.a2(!0,a,b,c)},
dM(a,b){return new A.b2(null,null,!0,a,b,"Value not in range")},
b3(a,b,c,d,e){return new A.b2(b,c,!0,a,d,"Invalid value")},
dN(a,b,c){if(0>a||a>c)throw A.b(A.b3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b3(b,a,c,"end",null))
return b}return c},
dw(a,b,c,d){return new A.bm(b,!0,a,d,"Index out of range")},
O(a){return new A.bJ(a)},
cL(a){return new A.bI(a)},
aP(a){return new A.bh(a)},
cs(a,b,c){return new A.bl(a,b,c)},
dB(a,b,c){var t,s
if(A.ci(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.k($.y,a)
try{A.ew(a,t)}finally{if(0>=$.y.length)return A.e($.y,-1)
$.y.pop()}s=A.cJ(b,u.W.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cw(a,b,c){var t,s
if(A.ci(a))return b+"..."+c
t=new A.aw(b)
B.a.k($.y,a)
try{s=t
s.a=A.cJ(s.a,a,", ")}finally{if(0>=$.y.length)return A.e($.y,-1)
$.y.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ew(a,b){var t,s,r,q,p,o,n,m=a.gF(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.q())return
t=A.j(m.gv())
B.a.k(b,t)
l+=t.length+2;++k}if(!m.q()){if(k<=5)return
if(0>=b.length)return A.e(b,-1)
s=b.pop()
if(0>=b.length)return A.e(b,-1)
r=b.pop()}else{q=m.gv();++k
if(!m.q()){if(k<=4){B.a.k(b,A.j(q))
return}s=A.j(q)
if(0>=b.length)return A.e(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gv();++k
for(;m.q();q=p,p=o){o=m.gv();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.e(b,-1)
l-=b.pop().length+2;--k}B.a.k(b,"...")
return}}r=A.j(q)
s=A.j(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.k(b,n)
B.a.k(b,r)
B.a.k(b,s)},
bu:function bu(a,b){this.a=a
this.b=b},
bL:function bL(){},
bj:function bj(){},
bg:function bg(a){this.a=a},
bH:function bH(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bm:function bm(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a){this.a=a},
bI:function bI(a){this.a=a},
bh:function bh(a){this.a=a},
bA:function bA(){},
bN:function bN(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
at:function at(){},
l:function l(){},
aw:function aw(a){this.a=a},
bi:function bi(){},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
C:function C(a,b,c){this.c=a
this.a=b
this.b=c},
E:function E(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d},
X:function X(a,b){this.a=a
this.b=b},
aX:function aX(){},
b5:function b5(){},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
eR(){self.jsregionworker=A.eC(new A.c_(),u.u)},
c_:function c_(){},
bD:function bD(a){this.a=a
this.b=$},
bE:function bE(a){this.b=a},
bv:function bv(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
dA(a,b){return new A.am(a*2-2*b,a+b)},
am:function am(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
cu(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.a9(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cs("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eE(B.d.L(a,t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.b.t(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cs("Not radix digit",a,t))}if(s)return A.a6(0,0,0,q,p,o)
return new A.u(q&4194303,p&4194303,o&1048575)},
c4(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.b.H(a,17592186044416)
a-=s*17592186044416
r=B.b.H(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a6(0,0,0,q,p,o):new A.u(q,p,o)},
bn(a){if(a instanceof A.u)return a
else if(A.bU(a))return A.c4(a)
throw A.b(A.dn(a,"other","not an int, Int32 or Int64"))},
dz(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.e(B.o,a)
r=B.o[a]
q=""
p=""
o=""
while(!0){if(!!(t===0&&s===0))break
n=B.b.u(t,r)
s+=t-n*r<<10>>>0
m=B.b.u(s,r)
d+=s-m*r<<10>>>0
l=B.b.u(d,r)
c+=d-l*r<<10>>>0
k=B.b.u(c,r)
b+=c-k*r<<10>>>0
j=B.b.u(b,r)
i=B.d.aa(B.b.a8(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.b.a8(h,a))+q+p+o},
a6(a,b,c,d,e,f){var t=a-d,s=b-e-(B.b.t(t,22)&1)
return new A.u(t&4194303,s&4194303,c-f-(B.b.t(s,22)&1)&1048575)},
dx(a,b,c){var t,s,r,q,p=A.bn(b)
if(p.ga5())throw A.b(A.O("Division by zero"))
if(a.ga5())return B.m
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a6(0,0,0,a.a,a.b,t)
if(q)p=A.a6(0,0,0,p.a,p.b,r)
return A.dy(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dy(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.b.u(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.b.u(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.b.u(q,a4)
o=q-p*a4
n=0
m=0}else{l=Math.floor((a0+4194304*a1+17592186044416*a2)/(a4+4194304*a5+17592186044416*a6))
k=Math.floor(l/17592186044416)
l-=17592186044416*k
j=Math.floor(l/4194304)
i=l-4194304*j
t=B.c.p(k)
r=B.c.p(j)
p=B.c.p(i)
h=i*a4
g=Math.floor(h/4194304)
f=j*a4+i*a5+g
e=Math.floor(f/4194304)
d=a0-B.c.p(h-g*4194304)
c=a1-B.c.p(f-e*4194304)-(B.b.t(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.p(k*a4+j*a5+i*a6+e)-(B.b.t(c,22)&1)&1048575
while(!0){if(m<524288)if(m<=a6)if(m===a6)if(n<=a5)b=n===a5&&o>=a4
else b=!0
else b=!1
else b=!0
else b=!0
if(!b)break
a=(m&524288)===0?1:-1
q=o-a*a4
s=n-a*(a5+(B.b.t(q,22)&1))
o=q&4194303
n=s&4194303
m=m-a*(a6+(B.b.t(s,22)&1))&1048575
q=p+a
s=r+a*(B.b.t(q,22)&1)
p=q&4194303
r=s&4194303
t=t+a*(B.b.t(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a6(0,0,0,p,r,t)
return new A.u(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.u(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.m
else return A.a6(a4,a5,a6,o,n,m)
else return A.a6(0,0,0,o,n,m)},
u:function u(a,b,c){this.a=a
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
au(a){var t=new A.bw(new Int16Array(2048),A.aW(2048,B.B,u.q),A.aW(2048,B.a0,u.e),A.aW(2048,B.aP,u.V))
t.ac(a)
return t},
dH(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.P(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.P(l,k,j,1)
A.P(p,r,q,0)
A.P(s,o,q,0)
A.P(s,r,n,0)
A.P(s+(p^1),k,j,1)
A.P(l,r+(o^1),j,1)
A.P(l,k,q+(n^1),1)
k=$.db();(k&&B.a).j(k,t,m)}for(t=0;t<16;++t){l=$.dc();(l&&B.a).j(l,t,A.cN(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))}l=A.d([],u.f)
for(i=0;i<24;++i){h=B.du[i]
l.push(new A.f(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.b.J(t,24)
if(!(k<l.length))return A.e(l,k)
B.a.k($.bx,l[k])}l=A.d([],u.Y)
for(i=0;i<48;++i){h=B.dw[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.b.J(t,48)
if(!(k<l.length))return A.e(l,k)
B.a.k($.by,l[k])}l=A.d([],u.J)
for(i=0;i<160;++i){h=B.dv[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.b.J(t,160)
if(!(k<l.length))return A.e(l,k)
B.a.k($.bz,l[k])}},
P(a,b,c,d){return new A.b9()},
cN(a,b,c,d){var t=new A.ba(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(){},
ba:function ba(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
eW(a){return A.D(A.cA(a))},
ah(){return A.D(A.dD(""))},
eX(){return A.D(A.cA(""))},
ee(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.ed,a)
t[$.ck()]=a
a.$dart_jsFunction=t
return t},
ed(a,b){u.j.a(b)
u.Z.a(a)
return A.dK(a,b,null)},
eC(a,b){if(typeof a=="function")return a
else return b.a(A.ee(a))},
dP(a,b,c,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(t=0;t<10;++t){s=a0[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=s.a
q=c.a
p=c.b
o=q*2-2*p
p=q+p
q=new A.ax(r,new A.am(o,p),a,a1)
n=A.eJ(r)
r=o+(a*2-2*a)+0
p=p+(a+a)+0
o=r+0
m=p+2
l=0-2*a1
k=r+l
j=p+a1
l=o+l
i=m+a1
h=a1*2-0
g=r+h
f=o+h
h=l+h
e=i+a1
d=new Float32Array(36)
d[0]=o
d[1]=m
d[2]=k
d[3]=j
d[4]=r
d[5]=p
d[6]=o
d[7]=m
d[8]=k
d[9]=j
d[10]=l
d[11]=i
d[12]=o
d[13]=m
d[14]=l
d[15]=i
d[16]=h
d[17]=e
d[18]=o
d[19]=m
d[20]=h
d[21]=e
d[22]=f
d[23]=i
d[24]=o
d[25]=m
d[26]=f
d[27]=i
d[28]=g
d[29]=j
d[30]=o
d[31]=m
d[32]=g
d[33]=j
d[34]=r
d[35]=p
r=new A.b7(d,n)
q.d=u.D.a(r)
return q}}throw A.b(new A.bN("No tile type found for elevation: "+A.j(a)+", moisture: "+A.j(b)+". Fix the rules!"))},
eU(a){var t,s,r=A.d([],u.Q)
for(t=0;t<a.length;++t){s=a[t]
if(s.c>-5)B.a.k(r,s)}return r},
eJ(a){switch(a.a){case 0:return $.df()
case 1:return $.de()
case 2:return $.dd()
case 3:return $.dg()
case 4:return $.di()
case 5:return $.dh()}},
eE(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.ch==null){A.eM()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.cL("Return interceptor for "+A.j(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bO
if(p==null)p=$.bO=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eQ(a)
if(q!=null)return q
if(typeof a=="function")return B.dl
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.bO
if(p==null)p=$.bO=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
cx(a,b){if(a<0||a>4294967295)throw A.b(A.b3(a,0,4294967295,"length",null))
return J.cy(new Array(a),b)},
cy(a,b){return J.cz(A.d(a,b.m("h<0>")),b)},
cz(a,b){a.fixed$length=Array
return a},
dC(a,b){var t=u.U
return J.dj(t.a(a),t.a(b))},
H(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.aT.prototype}if(typeof a=="string")return J.T.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.aR.prototype
if(a.constructor==Array)return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.l)return a
return J.cg(a)},
be(a){if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(a.constructor==Array)return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.l)return a
return J.cg(a)},
eF(a){if(a==null)return a
if(a.constructor==Array)return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.l)return a
return J.cg(a)},
eG(a){if(typeof a=="number")return J.a7.prototype
if(typeof a=="string")return J.T.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.ad.prototype
return a},
bf(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).C(a,b)},
dj(a,b){return J.eG(a).I(a,b)},
c2(a){return J.H(a).gl(a)},
cl(a){return J.eF(a).gF(a)},
cm(a){return J.be(a).gn(a)},
dk(a){return J.H(a).gB(a)},
dl(a,b){return J.H(a).a7(a,b)},
aL(a){return J.H(a).i(a)},
aQ:function aQ(){},
aR:function aR(){},
ao:function ao(){},
p:function p(){},
V:function V(){},
b0:function b0(){},
ad:function ad(){},
L:function L(){},
h:function h(a){this.$ti=a},
bo:function bo(a){this.$ti=a},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
an:function an(){},
aT:function aT(){},
T:function T(){}},B={}
var w=[A,J,B]
var $={}
A.c5.prototype={}
J.aQ.prototype={
C(a,b){return a===b},
gl(a){return A.b1(a)},
i(a){return"Instance of '"+A.bC(a)+"'"},
a7(a,b){throw A.b(A.cB(a,u.o.a(b)))},
gB(a){return A.a0(A.cc(this))}}
J.aR.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gB(a){return A.a0(u.y)},
$iw:1,
$ice:1}
J.ao.prototype={
C(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$iw:1}
J.p.prototype={}
J.V.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.b0.prototype={}
J.ad.prototype={}
J.L.prototype={
i(a){var t=a[$.ck()]
if(t==null)return this.ab(a)
return"JavaScript function for "+J.aL(t)},
$ia5:1}
J.h.prototype={
k(a,b){A.af(a).c.a(b)
if(!!a.fixed$length)A.D(A.O("add"))
a.push(b)},
a1(a,b){A.af(a).m("n<1>").a(b)
if(!!a.fixed$length)A.D(A.O("addAll"))
this.ad(a,b)
return},
ad(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.aP(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.cw(a,"[","]")},
gF(a){return new J.aM(a,a.length,A.af(a).m("aM<1>"))},
gl(a){return A.b1(a)},
gn(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.a1(a,b))
return a[b]},
j(a,b,c){A.af(a).c.a(c)
if(!!a.immutable$list)A.D(A.O("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.a1(a,b))
a[b]=c},
$in:1,
$ii:1}
J.bo.prototype={}
J.aM.prototype={
gv(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.c1(r)
throw A.b(r)}t=s.c
if(t>=q){s.sY(null)
return!1}s.sY(r[t]);++s.c
return!0},
sY(a){this.d=this.$ti.m("1?").a(a)}}
J.a7.prototype={
I(a,b){var t
A.e8(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gT(b)
if(this.gT(a)===t)return 0
if(this.gT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gT(a){return a===0?1/a<0:a<0},
p(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.O(""+a+".toInt()"))},
a2(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.O(""+a+".floor()"))},
aq(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
a8(a,b){var t,s,r,q
if(b<2||b>36)throw A.b(A.b3(b,2,36,"radix",null))
t=a.toString(b)
if(B.d.ai(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)A.D(A.O("Unexpected toString result: "+t))
r=s.length
if(1>=r)return A.e(s,1)
t=s[1]
if(3>=r)return A.e(s,3)
q=+s[3]
r=s[2]
if(r!=null){t+=r
q-=r.length}return t+B.d.U("0",q)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var t,s,r,q,p=a|0
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
u(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.a0(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.a0(a,b)},
a0(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.O("Result of truncating division is "+A.j(t)+": "+A.j(a)+" ~/ "+b))},
t(a,b){var t
if(a>0)t=this.ah(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ah(a,b){return b>31?0:a>>>b},
gB(a){return A.a0(u.H)},
$ir:1,
$im:1,
$ix:1}
J.an.prototype={
gB(a){return A.a0(u.S)},
$iw:1,
$io:1}
J.aT.prototype={
gB(a){return A.a0(u.i)},
$iw:1}
J.T.prototype={
ai(a,b){if(b<0)throw A.b(A.a1(a,b))
if(b>=a.length)A.D(A.a1(a,b))
return a.charCodeAt(b)},
L(a,b){if(b>=a.length)throw A.b(A.a1(a,b))
return a.charCodeAt(b)},
G(a,b){return a+b},
a9(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.dN(b,c,a.length))},
aa(a,b){return this.K(a,b,null)},
U(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.A)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
I(a,b){var t
A.Z(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
i(a){return a},
gl(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a0(u.N)},
gn(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.a1(a,b))
return a[b]},
$iw:1,
$ir:1,
$icD:1,
$iA:1}
A.aU.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.al.prototype={}
A.aV.prototype={
gv(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=J.be(r),p=q.gn(r)
if(s.b!==p)throw A.b(A.aP(r))
t=s.c
if(t>=p){s.sV(null)
return!1}s.sV(q.h(r,t));++s.c
return!0},
sV(a){this.d=this.$ti.m("1?").a(a)}}
A.K.prototype={}
A.ac.prototype={
gl(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.c2(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+A.j(this.a)+'")'},
C(a,b){if(b==null)return!1
return b instanceof A.ac&&this.a==b.a},
$iW:1}
A.aj.prototype={}
A.ai.prototype={
i(a){return A.br(this)},
$iM:1}
A.ak.prototype={
gn(a){return this.a},
R(a){return!1},
h(a,b){if(!this.R(b))return null
return this.b[A.Z(b)]},
E(a,b){var t,s,r,q,p,o=this.$ti
o.m("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.Z(t[q])
b.$2(p,o.a(r[p]))}}}
A.aS.prototype={
gan(){var t=this.a
return t},
gap(){var t,s,r,q,p=this
if(p.c===1)return B.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.p
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.e(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gao(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.q
p=new A.U(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.e(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.e(r,m)
p.j(0,new A.ac(n),r[m])}return new A.aj(p,u.a)},
$icv:1}
A.bB.prototype={
$2(a,b){var t
A.Z(a)
t=this.a
t.b=t.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++t.a},
$S:0}
A.J.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.da(s==null?"unknown":s)+"'"},
$ia5:1,
gar(){return this},
$C:"$1",
$R:1,
$D:null}
A.aO.prototype={$C:"$2",$R:2}
A.b6.prototype={}
A.b4.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.da(t)+"'"}}
A.a3.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.eT(this.a)^A.b1(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bC(this.a)+"'")}}
A.bK.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bF.prototype={
i(a){return"RuntimeError: "+this.a}}
A.bP.prototype={}
A.U.prototype={
gn(a){return this.a},
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
return r}else return this.al(b)},
al(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a3(a)]
s=this.a4(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r=this,q=A.a_(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.X(t==null?r.b=r.O():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.X(s==null?r.c=r.O():s,b,c)}else r.am(b,c)},
am(a,b){var t,s,r,q,p=this,o=A.a_(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.O()
s=p.a3(a)
r=t[s]
if(r==null)t[s]=[p.P(a,b)]
else{q=p.a4(r,a)
if(q>=0)r[q].b=b
else r.push(p.P(a,b))}},
E(a,b){var t,s,r=this
A.a_(r).m("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.aP(r))
t=t.c}},
X(a,b,c){var t,s=A.a_(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.P(b,c)
else t.b=c},
P(a,b){var t=this,s=A.a_(t),r=new A.bp(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a3(a){return J.c2(a)&0x3fffffff},
a4(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bf(a[s].a,b))return s
return-1},
i(a){return A.br(this)},
O(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bp.prototype={}
A.bq.prototype={
gn(a){return this.a.a},
gF(a){var t=this.a,s=new A.a9(t,t.r,this.$ti.m("a9<1>"))
s.c=t.e
return s}}
A.a9.prototype={
gv(){return this.d},
q(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.b(A.aP(r))
t=s.c
if(t==null){s.sW(null)
return!1}else{s.sW(t.a)
s.c=t.c
return!0}},
sW(a){this.d=this.$ti.m("1?").a(a)}}
A.bW.prototype={
$1(a){return this.a(a)},
$S:1}
A.bX.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.bY.prototype={
$1(a){return this.a(A.Z(a))},
$S:3}
A.b_.prototype={}
A.ab.prototype={
gn(a){return a.length},
$ia8:1}
A.ar.prototype={
h(a,b){A.bT(b,a,a.length)
return a[b]},
j(a,b,c){A.cb(c)
A.bT(b,a,a.length)
a[b]=c},
$in:1,
$ii:1}
A.as.prototype={
j(a,b,c){A.aH(c)
A.bT(b,a,a.length)
a[b]=c},
$in:1,
$ii:1}
A.aY.prototype={
gB(a){return B.dB},
$iw:1,
$ibk:1}
A.aZ.prototype={
gB(a){return B.dC},
h(a,b){A.bT(b,a,a.length)
return a[b]},
$iw:1,
$ic3:1}
A.az.prototype={}
A.aA.prototype={}
A.aB.prototype={}
A.aC.prototype={}
A.z.prototype={
m(a){return A.bR(v.typeUniverse,this,a)},
ae(a){return A.e5(v.typeUniverse,this,a)}}
A.b8.prototype={}
A.bQ.prototype={
i(a){return A.t(this.a,null)}}
A.bM.prototype={
i(a){return this.a}}
A.bb.prototype={}
A.B.prototype={
gF(a){return new A.aV(a,this.gn(a),A.aJ(a).m("aV<B.E>"))},
i(a){return A.cw(a,"[","]")}}
A.ap.prototype={
gn(a){return this.a},
i(a){return A.br(this)},
$iM:1}
A.bs.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.j(a)
s.a=t+": "
s.a+=A.j(b)},
$S:4}
A.aG.prototype={}
A.aa.prototype={
h(a,b){return this.a.h(0,b)},
E(a,b){this.a.E(0,this.$ti.m("~(1,2)").a(b))},
gn(a){return this.a.a},
i(a){return A.br(this.a)},
$iM:1}
A.ay.prototype={}
A.ae.prototype={}
A.bu.prototype={
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
A.bL.prototype={
i(a){return this.Z()}}
A.bj.prototype={}
A.bg.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a4(t)
return"Assertion failed"}}
A.bH.prototype={}
A.a2.prototype={
gN(){return"Invalid argument"+(!this.a?"(s)":"")},
gM(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gN()+r+p
if(!t.a)return o
return o+t.gM()+": "+A.a4(t.gS())},
gS(){return this.b}}
A.b2.prototype={
gS(){return A.e9(this.b)},
gN(){return"RangeError"},
gM(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.j(r):""
else if(r==null)t=": Not greater than or equal to "+A.j(s)
else if(r>s)t=": Not in inclusive range "+A.j(s)+".."+A.j(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.j(s)
return t}}
A.bm.prototype={
gS(){return A.aH(this.b)},
gN(){return"RangeError"},
gM(){if(A.aH(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gn(a){return this.f}}
A.bt.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aw("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a4(o)
k.a=", "}l.d.E(0,new A.bu(k,j))
n=A.a4(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bJ.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bI.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bh.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a4(t)+"."}}
A.bA.prototype={
i(a){return"Out of Memory"}}
A.bN.prototype={
i(a){return"Exception: "+this.a}}
A.bl.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.K(g,0,75)+"..."
return i+"\n"+g}for(t=1,s=0,r=!1,q=0;q<h;++q){p=B.d.L(g,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}i=t>1?i+(" (at line "+t+", character "+(h-s+1)+")\n"):i+(" (at character "+(h+1)+")\n")
o=g.length
for(q=h;q<o;++q){p=B.d.L(g,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(h-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-h<75){m=o-75
n=o
k=""}else{m=h-36
n=h+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}return i+l+B.d.K(g,m,n)+k+"\n"+B.d.U(" ",h-m+l.length)+"^\n"}}
A.n.prototype={
gn(a){var t,s=this.gF(this)
for(t=0;s.q();)++t
return t},
i(a){return A.dB(this,"(",")")}}
A.at.prototype={
gl(a){return A.l.prototype.gl.call(this,this)},
i(a){return"null"}}
A.l.prototype={$il:1,
C(a,b){return this===b},
gl(a){return A.b1(this)},
i(a){return"Instance of '"+A.bC(this)+"'"},
a7(a,b){throw A.b(A.cB(this,u.o.a(b)))},
gB(a){return A.eI(this)},
toString(){return this.i(this)}}
A.aw.prototype={
gn(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bi.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.av.prototype={
i(a){return"Point("+A.j(this.a)+", "+A.j(this.b)+")"},
C(a,b){if(b==null)return!1
return b instanceof A.av&&this.a===b.a&&this.b===b.b},
gl(a){var t=B.c.gl(this.a),s=B.c.gl(this.b),r=A.cK(A.cK(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.C.prototype={
Z(){return"LevelOfDetail."+this.b}}
A.E.prototype={
I(a,b){u.k.a(b)
return this.a6()>b.a6()?1:-1},
$ir:1}
A.ax.prototype={
a6(){var t=this.b,s=t.b,r=s/2-t.a/4
return-1*(s-r+r+this.e)}}
A.X.prototype={
Z(){return"TileType."+this.b}}
A.aX.prototype={}
A.b5.prototype={}
A.v.prototype={}
A.c_.prototype={
$1(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=J.be(a1),c=A.aH(d.h(a1,0)),b=A.aH(d.h(a1,1)),a=A.cb(d.h(a1,2)),a0=A.cb(d.h(a1,3))
d=A.aH(d.h(a1,4))
if(!(d>=0&&d<6))return A.e(B.e,d)
t=B.e[d]
s=new A.bD(new A.b5()).aj(A.dA(a,a0),c,b,B.c.p(a),B.c.p(a0),t)
d=u.t
r=A.d([],d)
q=[]
for(p=s.b,o=A.dE(p,p.r,A.a_(p).c),n=u.c,m=u.h;o.q();){l=o.d
k=A.d([],m)
for(j=p.h(0,l),i=j.length,h=0;h<j.length;j.length===i||(0,A.c1)(j),++h){g=j[h]
f=g.b
e=g.d
e===$&&A.ah()
B.a.k(k,["Tile",g.a.b,f.a,f.b,g.c,g.e,A.d([e.a,e.b],n)])}q.push(l.a)
B.a.k(r,k)}return A.d([q,r],d)},
$S:6}
A.bD.prototype={
aj(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j=this,i=A.dF(u.r,u.l)
for(t=f.c,s=j.a,r=0;r<6;++r){q=B.e[r]
if(q.c<t)continue
p=j.b
if(p===$){o=new A.bv(s)
o.a=A.au(2)
o.b=A.au(3)
o.c=A.au(4)
o.d=A.au(5)
o.e=A.au(6)
o.f=A.au(7)
j.b!==$&&A.eX()
j.b=o
p=o}n=p.ak(b,c,d,e,q)
m=A.eU(j.ag(d,e,n[0],n[1],q))
if(!!m.immutable$list)A.D(A.O("sort"))
l=A.af(m).c
k=m.length-1
if(k-0<=32)A.cI(m,0,k,J.d0(),l)
else A.cH(m,0,k,J.d0(),l)
i.j(0,q,m)}return new A.bE(i)},
ag(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=A.d([],u.Q)
for(t=c.length,s=e.c,r=u.O,q=u.d,p=d.length,o=0;o<t;++o){n=c[o]
if(!(o<p))return A.e(d,o)
m=d[o]
for(l=n.length,k=m.length,j=a+o*s,i=0;i<c[0].length;++i){if(!(i<l))return A.e(n,i)
h=n[i]
if(!(i<k))return A.e(m,i)
B.a.k(f,A.dP(h,m[i],new A.av(j,b+i*s,r),A.d([new A.v(B.dA,0,g),new A.v(B.h,6,-0.2),new A.v(B.f,6,0.4),new A.v(B.t,6,g),new A.v(B.h,12,-0.2),new A.v(B.f,12,0.4),new A.v(B.t,12,g),new A.v(B.h,20,0.1),new A.v(B.f,20,0.4),new A.v(B.dz,g,g)],q),s))}}return f}}
A.bE.prototype={}
A.bv.prototype={
ak(a6,a7,a8,a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=b0.c,a2=B.b.u(a6,a1),a3=B.b.u(a7,a1),a4=a0.a_(a2,a3),a5=a0.a_(a2,a3)
for(t=a4.length,s=a5.length,r=0;r<a2;++r)for(q=a8+r*a1,p=q*0.001,o=q*0.01,n=q*0.1,m=q*0.006,l=q*0.016,k=q*0.048,j=0;j<a3;++j){i=a9+j*a1
h=a0.a
h===$&&A.ah()
g=i*0.001
f=0.366025403784439*(p+g)
g=h.D(p+f,g+f)
h=a0.b
h===$&&A.ah()
e=i*0.01
f=0.366025403784439*(o+e)
e=h.D(o+f,e+f)
h=a0.c
h===$&&A.ah()
d=i*0.1
f=0.366025403784439*(n+d)
d=h.D(n+f,d+f)
h=a0.d
h===$&&A.ah()
c=i*0.006
f=0.366025403784439*(m+c)
c=h.D(m+f,c+f)
h=a0.e
h===$&&A.ah()
b=i*0.016
f=0.366025403784439*(l+b)
b=h.D(l+f,b+f)
h=a0.f
h===$&&A.ah()
a=i*0.048
f=0.366025403784439*(k+a)
a=h.D(k+f,a+f)
if(!(r<t))return A.e(a4,r)
B.a.j(a4[r],j,B.c.aq((g+0.1*e+0.01*d+0)*30))
if(!(r<s))return A.e(a5,r)
B.a.j(a5[r],j,c+0.5*b+0.25*a)}return A.d([a4,a5],u.G)},
a_(a,b){var t,s,r,q,p=J.cx(a,u.v)
for(t=u.i,s=0;s<a;++s){r=J.cx(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.am.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.am&&b.a===this.a&&b.b===this.b},
gl(a){return B.c.gl(this.a)^B.c.gl(this.b)},
i(a){return""+B.c.p(this.a)+", "+B.c.p(this.b)}}
A.b7.prototype={}
A.u.prototype={
G(a,b){var t=A.bn(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.u(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
C(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.u)t=b
else if(A.bU(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.c4(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
I(a,b){return this.af(b)},
af(a){var t=A.bn(a),s=this.c,r=s>>>19,q=t.c
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
ga5(){return this.c===0&&this.b===0&&this.a===0},
gl(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
p(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
i(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.b.t(q,22)&1)
s=p&4194303
o=0-o-(B.b.t(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.dz(10,q,p,o,r)},
$ir:1}
A.f.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bw.prototype={
ac(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cC){A.dH()
$.cC=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.e(t,s)
t[s]=s}r=A.c4(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cu("6364136223846793005",10,!0)
m.toString
l=A.bn(m)
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
m=A.cu("1442695040888963407",10,!0)
m.toString
r=new A.u(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).G(0,m)
m=s+1
a7=A.dx(r.G(0,31),m,3).p(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.e(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bx.length))return A.e($.bx,m)
B.a.j(p,s,$.bx[m])
m=q[s]
if(!(m>=0&&m<$.by.length))return A.e($.by,m)
B.a.j(o,s,$.by[m])
m=q[s]
if(!(m>=0&&m<$.bz.length))return A.e($.bz,m)
B.a.j(n,s,$.bz[m])
t[a7]=t[s]}},
D(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.a2(a),i=B.c.a2(b),h=a-j,g=b-i,f=B.c.p((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.e(B.n,p)
o=B.n[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.e(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.Y.prototype={}
A.b9.prototype={}
A.ba.prototype={};(function aliases(){var t=J.V.prototype
t.ab=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"d0","dC",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.l,null)
r(A.l,[A.c5,J.aQ,J.aM,A.bj,A.n,A.aV,A.K,A.ac,A.aa,A.ai,A.aS,A.J,A.bP,A.ap,A.bp,A.a9,A.z,A.b8,A.bQ,A.B,A.aG,A.bL,A.bA,A.bN,A.bl,A.at,A.aw,A.av,A.E,A.aX,A.v,A.bD,A.bE,A.bv,A.am,A.b7,A.u,A.f,A.c,A.a,A.bw,A.Y,A.b9,A.ba])
r(J.aQ,[J.aR,J.ao,J.p,J.a7,J.T])
r(J.p,[J.V,J.h,A.b_,A.bi])
r(J.V,[J.b0,J.ad,J.L])
s(J.bo,J.h)
r(J.a7,[J.an,J.aT])
r(A.bj,[A.aU,A.bK,A.bF,A.bM,A.bg,A.bH,A.a2,A.bt,A.bJ,A.bI,A.bh])
s(A.al,A.n)
s(A.ae,A.aa)
s(A.ay,A.ae)
s(A.aj,A.ay)
s(A.ak,A.ai)
r(A.J,[A.aO,A.b6,A.bW,A.bY,A.c_])
r(A.aO,[A.bB,A.bX,A.bs,A.bu])
r(A.b6,[A.b4,A.a3])
s(A.U,A.ap)
s(A.bq,A.al)
s(A.ab,A.b_)
r(A.ab,[A.az,A.aB])
s(A.aA,A.az)
s(A.ar,A.aA)
s(A.aC,A.aB)
s(A.as,A.aC)
s(A.aY,A.ar)
s(A.aZ,A.as)
s(A.bb,A.bM)
r(A.a2,[A.b2,A.bm])
r(A.bL,[A.C,A.X])
s(A.ax,A.E)
s(A.b5,A.aX)
t(A.az,A.B)
t(A.aA,A.K)
t(A.aB,A.B)
t(A.aC,A.K)
t(A.ae,A.aG)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",m:"double",x:"num",A:"String",ce:"bool",at:"Null",i:"List"},mangledNames:{},types:["~(A,@)","@(@)","@(@,A)","@(A)","~(l?,l?)","~(W,@)","i<i<@>>(@)","o(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.e4(v.typeUniverse,JSON.parse('{"b0":"V","ad":"V","L":"V","aR":{"ce":[],"w":[]},"ao":{"w":[]},"h":{"i":["1"],"n":["1"]},"bo":{"h":["1"],"i":["1"],"n":["1"]},"a7":{"m":[],"x":[],"r":["x"]},"an":{"m":[],"o":[],"x":[],"r":["x"],"w":[]},"aT":{"m":[],"x":[],"r":["x"],"w":[]},"T":{"A":[],"r":["A"],"cD":[],"w":[]},"al":{"n":["1"]},"ac":{"W":[]},"aj":{"ay":["1","2"],"ae":["1","2"],"aa":["1","2"],"aG":["1","2"],"M":["1","2"]},"ai":{"M":["1","2"]},"ak":{"ai":["1","2"],"M":["1","2"]},"aS":{"cv":[]},"J":{"a5":[]},"aO":{"a5":[]},"b6":{"a5":[]},"b4":{"a5":[]},"a3":{"a5":[]},"U":{"ap":["1","2"],"M":["1","2"]},"bq":{"n":["1"]},"ab":{"a8":["1"]},"ar":{"B":["m"],"a8":["m"],"i":["m"],"n":["m"],"K":["m"]},"as":{"B":["o"],"a8":["o"],"i":["o"],"n":["o"],"K":["o"]},"aY":{"B":["m"],"bk":[],"a8":["m"],"i":["m"],"n":["m"],"K":["m"],"w":[],"B.E":"m"},"aZ":{"B":["o"],"c3":[],"a8":["o"],"i":["o"],"n":["o"],"K":["o"],"w":[],"B.E":"o"},"ap":{"M":["1","2"]},"aa":{"M":["1","2"]},"ay":{"ae":["1","2"],"aa":["1","2"],"aG":["1","2"],"M":["1","2"]},"m":{"x":[],"r":["x"]},"o":{"x":[],"r":["x"]},"i":{"n":["1"]},"x":{"r":["x"]},"A":{"r":["A"],"cD":[]},"E":{"r":["E"]},"ax":{"E":[],"r":["E"]},"b5":{"aX":[]},"u":{"r":["l"]},"c3":{"i":["o"],"n":["o"]},"bk":{"i":["m"],"n":["m"]}}'))
A.e3(v.typeUniverse,JSON.parse('{"al":1,"ab":1}'))
var u=(function rtii(){var t=A.S
return{U:t("r<@>"),a:t("aj<W,@>"),Z:t("a5"),k:t("E"),q:t("f"),e:t("c"),V:t("a"),o:t("cv"),W:t("n<@>"),c:t("h<bk>"),f:t("h<f>"),Y:t("h<c>"),J:t("h<a>"),G:t("h<i<i<m>>>"),t:t("h<i<@>>"),s:t("h<A>"),Q:t("h<ax>"),d:t("h<v>"),n:t("h<m>"),b:t("h<@>"),h:t("h<i<@>?>"),T:t("ao"),g:t("L"),p:t("a8<@>"),B:t("U<W,@>"),r:t("C"),l:t("i<E>"),u:t("i<i<@>>(@)"),v:t("i<m>"),j:t("i<@>"),P:t("at"),K:t("l"),O:t("av<m>"),L:t("f1"),N:t("A"),m:t("W"),R:t("w"),C:t("ad"),D:t("b7"),y:t("ce"),i:t("m"),z:t("@"),S:t("o"),A:t("0&*"),_:t("l*"),w:t("ct<at>?"),X:t("l?"),H:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dk=J.aQ.prototype
B.a=J.h.prototype
B.b=J.an.prototype
B.c=J.a7.prototype
B.d=J.T.prototype
B.dl=J.L.prototype
B.dm=J.p.prototype
B.r=J.b0.prototype
B.i=J.ad.prototype
B.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.u=function() {
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
B.z=function(getTagFallback) {
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
B.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.w=function(hooks) {
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
B.y=function(hooks) {
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
B.x=function(hooks) {
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
B.k=function(hooks) { return hooks; }

B.A=new A.bA()
B.l=new A.bP()
B.B=new A.f(0,0)
B.a0=new A.c(0,0,0)
B.aP=new A.a(0,0,0,0)
B.m=new A.u(0,0,0)
B.T=new A.f(0.130526192220052,0.99144486137381)
B.W=new A.f(0.38268343236509,0.923879532511287)
B.I=new A.f(0.608761429008721,0.793353340291235)
B.Z=new A.f(0.793353340291235,0.608761429008721)
B.L=new A.f(0.923879532511287,0.38268343236509)
B.Q=new A.f(0.99144486137381,0.130526192220051)
B.V=new A.f(0.99144486137381,-0.130526192220051)
B.S=new A.f(0.923879532511287,-0.38268343236509)
B.J=new A.f(0.793353340291235,-0.60876142900872)
B.D=new A.f(0.608761429008721,-0.793353340291235)
B.G=new A.f(0.38268343236509,-0.923879532511287)
B.N=new A.f(0.130526192220052,-0.99144486137381)
B.Y=new A.f(-0.130526192220052,-0.99144486137381)
B.E=new A.f(-0.38268343236509,-0.923879532511287)
B.M=new A.f(-0.608761429008721,-0.793353340291235)
B.O=new A.f(-0.793353340291235,-0.608761429008721)
B.P=new A.f(-0.923879532511287,-0.38268343236509)
B.K=new A.f(-0.99144486137381,-0.130526192220052)
B.F=new A.f(-0.99144486137381,0.130526192220051)
B.C=new A.f(-0.923879532511287,0.38268343236509)
B.R=new A.f(-0.793353340291235,0.608761429008721)
B.H=new A.f(-0.608761429008721,0.793353340291235)
B.X=new A.f(-0.38268343236509,0.923879532511287)
B.U=new A.f(-0.130526192220052,0.99144486137381)
B.du=A.d(t([B.T,B.W,B.I,B.Z,B.L,B.Q,B.V,B.S,B.J,B.D,B.G,B.N,B.Y,B.E,B.M,B.O,B.P,B.K,B.F,B.C,B.R,B.H,B.X,B.U]),u.f)
B.dG=new A.Y(1,0,-0.788675134594813,0.211324865405187)
B.dD=new A.Y(0,0,0,0)
B.dE=new A.Y(1,1,-0.577350269189626,-0.577350269189626)
B.dF=new A.Y(0,1,0.211324865405187,-0.788675134594813)
B.n=A.d(t([B.dG,B.dD,B.dE,B.dF]),A.S("h<Y>"))
B.cT=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.c8=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.bk=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.c5=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.ca=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.bY=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bD=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bS=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.cq=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cN=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.bW=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.cr=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.co=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.cb=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.bV=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cM=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.c6=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.bX=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.df=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.cg=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.bx=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.dc=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.aV=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.d4=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.bq=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aM=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bG=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.bw=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.ba=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.c9=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.cV=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aQ=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.d5=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c1=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cH=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.c4=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.cd=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aS=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.bZ=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.ck=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.bo=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cy=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.d9=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c_=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cK=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d0=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bn=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.cX=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.b4=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bf=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.bc=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cC=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bM=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cB=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b0=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.d7=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b2=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aR=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.ci=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dj=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.d8=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.cf=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cO=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b1=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.db=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cA=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.c3=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bP=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bt=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.c7=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cp=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.d3=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.aT=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cu=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bN=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d2=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cv=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.cs=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cD=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cL=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bL=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aN=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.aY=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.bd=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bC=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.b6=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bA=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.cU=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.ce=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bh=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c0=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.b7=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cw=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.b3=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aO=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.cc=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cP=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cR=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bO=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.cZ=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.aZ=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bj=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.di=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.bp=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bR=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cE=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.dd=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bm=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.cl=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.cn=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.de=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.da=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.br=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.by=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.ct=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cI=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.bU=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.dg=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.cW=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bi=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.bv=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bH=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cx=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.be=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.aU=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cJ=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bF=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bI=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d1=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bQ=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d_=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bJ=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.dh=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.ch=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.bb=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bu=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cQ=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bE=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.cY=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cG=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.cj=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cz=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.aW=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cF=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.b5=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bg=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bz=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.cm=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bK=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.b9=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.d6=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.bs=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.bT=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.aX=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b_=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.bl=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cS=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.b8=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bB=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c2=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dv=A.d(t([B.cT,B.c8,B.bk,B.c5,B.ca,B.bY,B.bD,B.bS,B.cq,B.cN,B.bW,B.cr,B.co,B.cb,B.bV,B.cM,B.c6,B.bX,B.df,B.cg,B.bx,B.dc,B.aV,B.d4,B.bq,B.aM,B.bG,B.bw,B.ba,B.c9,B.cV,B.aQ,B.d5,B.c1,B.cH,B.c4,B.cd,B.aS,B.bZ,B.ck,B.bo,B.cy,B.d9,B.c_,B.cK,B.d0,B.bn,B.cX,B.b4,B.bf,B.bc,B.cC,B.bM,B.cB,B.b0,B.d7,B.b2,B.aR,B.ci,B.dj,B.d8,B.cf,B.cO,B.b1,B.db,B.cA,B.c3,B.bP,B.bt,B.c7,B.cp,B.d3,B.aT,B.cu,B.bN,B.d2,B.cv,B.cs,B.cD,B.cL,B.bL,B.aN,B.aY,B.bd,B.bC,B.b6,B.bA,B.cU,B.ce,B.bh,B.c0,B.b7,B.cw,B.b3,B.aO,B.cc,B.cP,B.cR,B.bO,B.cZ,B.aZ,B.bj,B.di,B.bp,B.bR,B.cE,B.dd,B.bm,B.cl,B.cn,B.de,B.da,B.br,B.by,B.ct,B.cI,B.bU,B.dg,B.cW,B.bi,B.bv,B.bH,B.cx,B.be,B.aU,B.cJ,B.bF,B.bI,B.d1,B.bQ,B.d_,B.bJ,B.dh,B.ch,B.bb,B.bu,B.cQ,B.bE,B.cY,B.cG,B.cj,B.cz,B.aW,B.cF,B.b5,B.bg,B.bz,B.cm,B.bK,B.b9,B.d6,B.bs,B.bT,B.aX,B.b_,B.bl,B.cS,B.b8,B.bB,B.c2]),u.J)
B.o=A.d(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.S("h<o>"))
B.af=new A.c(-2.22474487139,-2.22474487139,-1)
B.ay=new A.c(-2.22474487139,-2.22474487139,1)
B.a8=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aE=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.am=new A.c(-2.22474487139,-1,-2.22474487139)
B.ax=new A.c(-2.22474487139,1,-2.22474487139)
B.ai=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aF=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.as=new A.c(-2.22474487139,-1,2.22474487139)
B.ae=new A.c(-2.22474487139,1,2.22474487139)
B.a4=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a2=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.az=new A.c(-2.22474487139,2.22474487139,-1)
B.a6=new A.c(-2.22474487139,2.22474487139,1)
B.aj=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.av=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.a7=new A.c(-1,-2.22474487139,-2.22474487139)
B.a3=new A.c(1,-2.22474487139,-2.22474487139)
B.an=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.aw=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a1=new A.c(-1,-2.22474487139,2.22474487139)
B.a9=new A.c(1,-2.22474487139,2.22474487139)
B.a_=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ab=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aD=new A.c(-1,2.22474487139,-2.22474487139)
B.aA=new A.c(1,2.22474487139,-2.22474487139)
B.aq=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.ag=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.al=new A.c(-1,2.22474487139,2.22474487139)
B.aK=new A.c(1,2.22474487139,2.22474487139)
B.ac=new A.c(0,3.0862664687972017,1.1721513422464978)
B.ak=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aH=new A.c(2.22474487139,-2.22474487139,-1)
B.aB=new A.c(2.22474487139,-2.22474487139,1)
B.aa=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.ap=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.ad=new A.c(2.22474487139,-1,-2.22474487139)
B.aC=new A.c(2.22474487139,1,-2.22474487139)
B.aI=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.a5=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aG=new A.c(2.22474487139,-1,2.22474487139)
B.at=new A.c(2.22474487139,1,2.22474487139)
B.ar=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aL=new A.c(3.0862664687972017,0,1.1721513422464978)
B.au=new A.c(2.22474487139,2.22474487139,-1)
B.aJ=new A.c(2.22474487139,2.22474487139,1)
B.ao=new A.c(3.0862664687972017,1.1721513422464978,0)
B.ah=new A.c(1.1721513422464978,3.0862664687972017,0)
B.dw=A.d(t([B.af,B.ay,B.a8,B.aE,B.am,B.ax,B.ai,B.aF,B.as,B.ae,B.a4,B.a2,B.az,B.a6,B.aj,B.av,B.a7,B.a3,B.an,B.aw,B.a1,B.a9,B.a_,B.ab,B.aD,B.aA,B.aq,B.ag,B.al,B.aK,B.ac,B.ak,B.aH,B.aB,B.aa,B.ap,B.ad,B.aC,B.aI,B.a5,B.aG,B.at,B.ar,B.aL,B.au,B.aJ,B.ao,B.ah]),u.Y)
B.p=A.d(t([]),u.b)
B.dp=new A.C(1,0,"lod1x1")
B.dq=new A.C(2,1,"lod2x2")
B.ds=new A.C(4,2,"lod4x4")
B.dt=new A.C(8,3,"lod8x8")
B.dn=new A.C(16,4,"lod16x16")
B.dr=new A.C(32,5,"lod32x32")
B.e=A.d(t([B.dp,B.dq,B.ds,B.dt,B.dn,B.dr]),A.S("h<C>"))
B.dx=A.d(t([]),A.S("h<W>"))
B.q=new A.ak(0,{},B.dx,A.S("ak<W,@>"))
B.dy=new A.ac("call")
B.t=new A.X(1,"grass")
B.f=new A.X(2,"deathGrass")
B.h=new A.X(3,"rock")
B.dz=new A.X(4,"snow")
B.dA=new A.X(5,"sand")
B.dB=A.d9("bk")
B.dC=A.d9("c3")})();(function staticFields(){$.bO=null
$.y=A.d([],A.S("h<l>"))
$.cE=null
$.cp=null
$.co=null
$.d6=null
$.d4=null
$.d8=null
$.bV=null
$.bZ=null
$.ch=null
$.bx=A.d([],u.f)
$.by=A.d([],u.Y)
$.bz=A.d([],u.J)
$.cC=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"eZ","ck",()=>A.eH("_$dart_dartClosure"))
t($,"fb","dd",()=>A.aq(A.d([80,80,0,120,80,161,80,80,0,120,0,40,80,80,0,40,80,0,80,80,80,0,161,40,80,80,161,40,161,120,80,80,161,120,80,161],u.n)))
t($,"fc","de",()=>A.aq(A.d([80,241,0,281,80,322,80,241,0,281,0,201,80,241,0,201,80,161,80,241,80,161,161,201,80,241,161,201,161,281,80,241,161,281,80,322],u.n)))
t($,"ff","dg",()=>A.aq(A.d([80,402,0,442,80,483,80,402,0,442,0,362,80,402,0,362,80,322,80,402,80,322,161,362,80,402,161,362,161,442,80,402,161,442,80,483],u.n)))
t($,"fh","di",()=>A.aq(A.d([80,563,0,603,80,644,80,563,0,603,0,523,80,563,0,523,80,483,80,563,80,483,161,523,80,563,161,523,161,603,80,563,161,603,80,644],u.n)))
t($,"fd","df",()=>A.aq(A.d([80,724,0,764,80,805,80,724,0,764,0,684,80,724,0,684,80,644,80,724,80,644,161,684,80,724,161,684,161,764,80,724,161,764,80,805],u.n)))
t($,"fg","dh",()=>A.aq(A.d([80,885,0,925,80,966,80,885,0,925,0,845,80,885,0,845,80,805,80,885,80,805,161,845,80,885,161,845,161,925,80,885,161,925,80,966],u.n)))
t($,"f_","db",()=>A.aW(8,A.P(0,0,0,0),A.S("b9")))
t($,"f0","dc",()=>A.aW(16,A.cN(0,0,0,0),A.S("ba")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.b_,Float32Array:A.aY,Int16Array:A.aZ,DOMException:A.bi})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.ar.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.as.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eR
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
