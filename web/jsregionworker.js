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
a[c]=function(){a[c]=function(){A.f6(b)}
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
if(a[b]!==t)A.f7(b)
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
dG(a){return new A.b2("Field '"+a+"' has not been initialized.")},
cQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cr(a){var t,s
for(t=$.B.length,s=0;s<t;++s)if(a===$.B[s])return!0
return!1},
dD(){return new A.bL("No element")},
dU(a,b,c){A.b9(a,0,J.c7(a)-1,b,c)},
b9(a,b,c,d,e){if(c-b<=32)A.dT(a,b,c,d,e)
else A.dS(a,b,c,d,e)},
dT(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.aP(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.i(a,q,s.h(a,o))
q=o}s.i(a,q,r)}},
dS(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.d.U(a4-a3+1,6),j=a3+k,i=a4-k,h=B.d.U(a3+a4,2),g=h-k,f=h+k,e=J.aP(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.aS(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.b9(a2,a3,s-2,a5,a6)
A.b9(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.aS(a5.$2(e.h(a2,s),c),0);)++s
for(;J.aS(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.b9(a2,s,r,a5,a6)}else A.b9(a2,s,r,a5,a6)},
b2:function b2(a){this.a=a},
ap:function ap(){},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
C:function C(){},
ae:function ae(a){this.a=a},
dB(){throw A.a(A.H("Cannot modify unmodifiable Map"))},
di(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fo(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.E.b(a)},
i(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aU(a)
return t},
b8(a){var t,s=$.cK
if(s==null)s=$.cK=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
dM(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.b(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bH(a){return A.dK(a)},
dK(a){var t,s,r,q
if(a instanceof A.k)return A.w(A.M(a),null)
t=J.L(a)
if(t===B.ac||t===B.af||u.C.b(a)){s=B.r(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.w(A.M(a),null)},
dN(a){if(typeof a=="number"||A.cm(a))return J.aU(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.j(0)
return"Instance of '"+A.bH(a)+"'"},
Q(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.n(t,b)
r.b=""
if(c!=null&&c.a!==0)c.B(0,new A.bG(r,s,t))
return J.dr(a,new A.b0(B.ah,0,t,s,0))},
dL(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dJ(a,b,c)},
dJ(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.by(b,u.z),g=h.length,f=a.$R
if(g<f)return A.Q(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.L(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.Q(a,h,c)
if(g===f)return p.apply(a,h)
return A.Q(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.Q(a,h,c)
o=f+r.length
if(g>o)return A.Q(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.by(h,u.z)
B.a.n(h,n)}return p.apply(a,h)}else{if(g>f)return A.Q(a,h,c)
if(h===b)h=A.by(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.bk)(m),++l){k=r[A.a0(m[l])]
if(B.u===k)return A.Q(a,h,c)
B.a.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.bk)(m),++l){i=A.a0(m[l])
if(c.X(i)){++j
B.a.l(h,c.h(0,i))}else{k=r[i]
if(B.u===k)return A.Q(a,h,c)
B.a.l(h,k)}}if(j!==c.a)return A.Q(a,h,c)}return p.apply(a,h)}},
b(a,b){if(a==null)J.c7(a)
throw A.a(A.bj(a,b))},
bj(a,b){var t,s="index"
if(!A.d6(b))return new A.a3(!0,b,s,null)
t=J.c7(a)
if(b<0||b>=t)return A.dC(b,t,a,s)
return A.dP(b,s)},
eM(a){return new A.a3(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.bM()
t=new Error()
t.dartException=a
s=A.f8
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
f8(){return J.aU(this.dartException)},
a2(a){throw A.a(a)},
bk(a){throw A.a(A.al(a))},
f4(a){if(a==null||typeof a!="object")return J.bm(a)
else return A.b8(a)},
eR(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
dA(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ba().constructor.prototype):Object.create(new A.a4(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cB(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dw(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cB(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dw(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.du)}throw A.a("Error in functionType of tearoff")},
dx(a,b,c,d){var t=A.cA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cB(a,b,c,d){var t,s
if(c)return A.dz(a,b,d)
t=b.length
s=A.dx(t,d,a,b)
return s},
dy(a,b,c,d){var t=A.cA,s=A.dv
switch(b?-1:a){case 0:throw A.a(new A.bK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dz(a,b,c){var t,s
if($.cy==null)$.cy=A.cx("interceptor")
if($.cz==null)$.cz=A.cx("receiver")
t=b.length
s=A.dy(t,c,a,b)
return s},
co(a){return A.dA(a)},
du(a,b){return A.bX(v.typeUniverse,A.M(a.a),b)},
cA(a){return a.a},
dv(a){return a.b},
cx(a){var t,s,r,q=new A.a4("receiver","interceptor"),p=J.cG(Object.getOwnPropertyNames(q),u.O)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.ds("Field name "+a+" not found."))},
f6(a){throw A.a(new A.bP(a))},
eT(a){return v.getIsolateTag(a)},
cd(a,b,c){var t=new A.a9(a,b,c.k("a9<0>"))
t.c=a.e
return t},
f1(a){var t,s,r,q,p,o=A.a0($.dc.$1(a)),n=$.c0[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c4[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eh($.d9.$2(a,o))
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
return p.i}if(q==="+")return A.df(a,t)
if(q==="*")throw A.a(A.cR(o))
if(v.leafTags[o]===true){p=A.c6(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.df(a,t)},
df(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cs(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c6(a){return J.cs(a,!1,null,!!a.$ia8)},
f3(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c6(t)
else return J.cs(t,c,null,null)},
eY(){if(!0===$.cq)return
$.cq=!0
A.eZ()},
eZ(){var t,s,r,q,p,o,n,m
$.c0=Object.create(null)
$.c4=Object.create(null)
A.eX()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dg.$1(p)
if(o!=null){n=A.f3(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eX(){var t,s,r,q,p,o,n=B.A()
n=A.aj(B.B,A.aj(B.C,A.aj(B.t,A.aj(B.t,A.aj(B.D,A.aj(B.E,A.aj(B.F(B.r),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dc=new A.c1(q)
$.d9=new A.c2(p)
$.dg=new A.c3(o)},
aj(a,b){return a(b)||b},
eN(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
an:function an(a,b){this.a=a
this.$ti=b},
am:function am(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
O:function O(){},
aY:function aY(){},
bb:function bb(){},
ba:function ba(){},
a4:function a4(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a},
bK:function bK(a){this.a=a},
bV:function bV(){},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bv:function bv(a){this.a=a},
bw:function bw(a,b){this.a=a
this.b=b
this.c=null},
bx:function bx(a,b){this.a=a
this.$ti=b},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
c_(a){return a},
bZ(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.bj(b,a))},
b6:function b6(){},
ab:function ab(){},
au:function au(){},
av:function av(){},
b4:function b4(){},
b5:function b5(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
aI:function aI(){},
cM(a,b){var t=b.c
return t==null?b.c=A.cj(a,b.y,!0):t},
cf(a,b){var t=b.c
return t==null?b.c=A.aL(a,"cC",[b.y]):t},
cN(a){var t=a.x
if(t===6||t===7||t===8)return A.cN(a.y)
return t===12||t===13},
dR(a){return a.at},
U(a){return A.bh(v.typeUniverse,a,!1)},
T(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.d_(a,s,!0)
case 7:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.cj(a,s,!0)
case 8:t=b.y
s=A.T(a,t,c,a0)
if(s===t)return b
return A.cZ(a,s,!0)
case 9:r=b.z
q=A.aO(a,r,c,a0)
if(q===r)return b
return A.aL(a,b.y,q)
case 10:p=b.y
o=A.T(a,p,c,a0)
n=b.z
m=A.aO(a,n,c,a0)
if(o===p&&m===n)return b
return A.ch(a,o,m)
case 12:l=b.y
k=A.T(a,l,c,a0)
j=b.z
i=A.eI(a,j,c,a0)
if(k===l&&i===j)return b
return A.cY(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aO(a,h,c,a0)
p=b.y
o=A.T(a,p,c,a0)
if(g===h&&o===p)return b
return A.ci(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.aX("Attempted to substitute unexpected RTI kind "+d))}},
aO(a,b,c,d){var t,s,r,q,p=b.length,o=A.bY(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.T(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eJ(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bY(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.T(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eI(a,b,c,d){var t,s=b.a,r=A.aO(a,s,c,d),q=b.b,p=A.aO(a,q,c,d),o=b.c,n=A.eJ(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bd()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
da(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eW(s)
t=a.$S()
return t}return null},
f_(a,b){var t
if(A.cN(b))if(a instanceof A.O){t=A.da(a)
if(t!=null)return t}return A.M(a)},
M(a){if(a instanceof A.k)return A.v(a)
if(Array.isArray(a))return A.ah(a)
return A.cl(J.L(a))},
ah(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
v(a){var t=a.$ti
return t!=null?t:A.cl(a)},
cl(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.et(a,t)},
et(a,b){var t=a instanceof A.O?a.__proto__.__proto__.constructor:b,s=A.ec(v.typeUniverse,t.name)
b.$ccache=s
return s},
eW(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bh(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eV(a){return A.a1(A.v(a))},
eH(a){var t=a instanceof A.O?A.da(a):null
if(t!=null)return t
if(u.R.b(a))return J.dq(a).a
if(Array.isArray(a))return A.ah(a)
return A.M(a)},
a1(a){var t=a.w
return t==null?a.w=A.d2(a):t},
d2(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bW(a)
t=A.bh(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.d2(t):s},
dh(a){return A.a1(A.bh(v.typeUniverse,a,!1))},
es(a){var t,s,r,q,p,o=this
if(o===u.K)return A.K(o,a,A.ez)
if(!A.N(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.K(o,a,A.eD)
t=o.x
if(t===7)return A.K(o,a,A.eq)
if(t===1)return A.K(o,a,A.d7)
s=t===6?o.y:o
t=s.x
if(t===8)return A.K(o,a,A.ev)
if(s===u.S)r=A.d6
else if(s===u.i||s===u.p)r=A.ey
else if(s===u.N)r=A.eB
else r=s===u.y?A.cm:null
if(r!=null)return A.K(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f0)){o.r="$i"+q
if(q==="j")return A.K(o,a,A.ex)
return A.K(o,a,A.eC)}}else if(t===11){p=A.eN(s.y,s.z)
return A.K(o,a,p==null?A.d7:p)}return A.K(o,a,A.eo)},
K(a,b,c){a.b=c
return a.b(b)},
er(a){var t,s=this,r=A.en
if(!A.N(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.ei
else if(s===u.K)r=A.eg
else{t=A.aQ(s)
if(t)r=A.ep}s.a=r
return s.a(a)},
bi(a){var t,s=a.x
if(!A.N(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bi(a.y)))t=s===8&&A.bi(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eo(a){var t=this
if(a==null)return A.bi(t)
return A.l(v.typeUniverse,A.f_(a,t),null,t,null)},
eq(a){if(a==null)return!0
return this.y.b(a)},
eC(a){var t,s=this
if(a==null)return A.bi(s)
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.L(a)[t]},
ex(a){var t,s=this
if(a==null)return A.bi(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.k)return!!a[t]
return!!J.L(a)[t]},
en(a){var t,s=this
if(a==null){t=A.aQ(s)
if(t)return a}else if(s.b(a))return a
A.d3(a,s)},
ep(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.d3(a,t)},
d3(a,b){throw A.a(A.e1(A.cS(a,A.w(b,null))))},
cS(a,b){return A.a5(a)+": type '"+A.w(A.eH(a),null)+"' is not a subtype of type '"+b+"'"},
e1(a){return new A.bg("TypeError: "+a)},
t(a,b){return new A.bg("TypeError: "+A.cS(a,b))},
ev(a){var t=this
return t.y.b(a)||A.cf(v.typeUniverse,t).b(a)},
ez(a){return a!=null},
eg(a){if(a!=null)return a
throw A.a(A.t(a,"Object"))},
eD(a){return!0},
ei(a){return a},
d7(a){return!1},
cm(a){return!0===a||!1===a},
ff(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.t(a,"bool"))},
fh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.t(a,"bool"))},
fg(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.t(a,"bool?"))},
ck(a){if(typeof a=="number")return a
throw A.a(A.t(a,"double"))},
fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.t(a,"double"))},
fi(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.t(a,"double?"))},
d6(a){return typeof a=="number"&&Math.floor(a)===a},
ai(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.t(a,"int"))},
fl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.t(a,"int"))},
fk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.t(a,"int?"))},
ey(a){return typeof a=="number"},
ee(a){if(typeof a=="number")return a
throw A.a(A.t(a,"num"))},
fm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.t(a,"num"))},
ef(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.t(a,"num?"))},
eB(a){return typeof a=="string"},
a0(a){if(typeof a=="string")return a
throw A.a(A.t(a,"String"))},
fn(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.t(a,"String"))},
eh(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.t(a,"String?"))},
d8(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.w(a[r],b)
return t},
eG(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d8(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.w(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d4(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=u.O,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b(a4,k)
n=B.ad.t(n+m,a4[k])
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
if(m===9){q=A.eK(a.y)
p=a.z
return p.length>0?q+("<"+A.d8(p,b)+">"):q}if(m===11)return A.eG(a,b)
if(m===12)return A.d4(a,b,null)
if(m===13)return A.d4(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
eK(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ed(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ec(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bh(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aM(a,5,"#")
r=A.bY(t)
for(q=0;q<t;++q)r[q]=s
p=A.aL(a,b,r)
o[b]=p
return p}else return n},
ea(a,b){return A.d0(a.tR,b)},
e9(a,b){return A.d0(a.eT,b)},
bh(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cW(A.cU(a,null,b,c))
s.set(b,t)
return t},
bX(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cW(A.cU(a,b,c,!0))
r.set(c,s)
return s},
eb(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.ch(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
J(a,b){b.a=A.er
b.b=A.es
return b},
aM(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.D(null,null)
t.x=b
t.at=c
s=A.J(a,t)
a.eC.set(c,s)
return s},
d_(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e6(a,b,s,c)
a.eC.set(s,t)
return t},
e6(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.N(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.D(null,null)
r.x=6
r.y=b
r.at=c
return A.J(a,r)},
cj(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e5(a,b,s,c)
a.eC.set(s,t)
return t},
e5(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.N(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aQ(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aQ(r.y))return r
else return A.cM(a,b)}}q=new A.D(null,null)
q.x=7
q.y=b
q.at=c
return A.J(a,q)},
cZ(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e3(a,b,s,c)
a.eC.set(s,t)
return t},
e3(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.N(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aL(a,"cC",[b])
else if(b===u.P||b===u.T)return u.d}r=new A.D(null,null)
r.x=8
r.y=b
r.at=c
return A.J(a,r)},
e7(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=14
t.y=b
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
aK(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e2(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aL(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aK(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.D(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.J(a,s)
a.eC.set(q,r)
return r},
ch(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aK(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.D(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.J(a,p)
a.eC.set(r,o)
return o},
e8(a,b,c){var t,s,r="+"+(b+"("+A.aK(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
cY(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aK(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aK(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e2(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.D(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.J(a,q)
a.eC.set(s,p)
return p},
ci(a,b,c,d){var t,s=b.at+("<"+A.aK(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e4(a,b,c,s,d)
a.eC.set(s,t)
return t},
e4(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bY(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.T(a,b,s,0)
n=A.aO(a,c,s,0)
return A.ci(a,o,n,c!==n)}}m=new A.D(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.J(a,m)},
cU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cW(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dX(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cV(a,s,m,l,!1)
else if(r===46)s=A.cV(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.S(a.u,a.e,l.pop()))
break
case 94:l.push(A.e7(a.u,l.pop()))
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
case 62:A.dZ(a,l)
break
case 38:A.dY(a,l)
break
case 42:q=a.u
l.push(A.d_(q,A.S(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cj(q,A.S(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cZ(q,A.S(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dW(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cX(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e0(a.u,a.e,p)
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
dX(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cV(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.ed(t,p.y)[q]
if(o==null)A.a2('No "'+q+'" in "'+A.dR(p)+'"')
d.push(A.bX(t,p,o))}else d.push(q)
return n},
dZ(a,b){var t,s=a.u,r=A.cT(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aL(s,q,r))
else{t=A.S(s,a.e,q)
switch(t.x){case 12:b.push(A.ci(s,t,r,a.n))
break
default:b.push(A.ch(s,t,r))
break}}},
dW(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cT(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.S(n,a.e,m)
p=new A.bd()
p.a=r
p.b=t
p.c=s
b.push(A.cY(n,q,p))
return
case-4:b.push(A.e8(n,b.pop(),r))
return
default:throw A.a(A.aX("Unexpected state under `()`: "+A.i(m)))}},
dY(a,b){var t=b.pop()
if(0===t){b.push(A.aM(a.u,1,"0&"))
return}if(1===t){b.push(A.aM(a.u,4,"1&"))
return}throw A.a(A.aX("Unexpected extended operation "+A.i(t)))},
cT(a,b){var t=b.splice(a.p)
A.cX(a.u,a.e,t)
a.p=b.pop()
return t},
S(a,b,c){if(typeof c=="string")return A.aL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e_(a,b,c)}else return c},
cX(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.S(a,b,c[t])},
e0(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.S(a,b,c[t])},
e_(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.aX("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.aX("Bad index "+c+" for "+b.j(0)))},
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
if(q===6){t=A.cM(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cf(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cf(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.d5(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d5(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.ew(a,b,c,d,e)}if(p&&q===11)return A.eA(a,b,c,d,e)
return!1},
d5(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
for(p=0;p<r;++p)q[p]=A.bX(a,b,s[p])
return A.d1(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.d1(a,o,null,c,n,e)},
d1(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
eA(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aQ(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.N(a))if(s!==7)if(!(s===6&&A.aQ(a.y)))t=s===8&&A.aQ(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f0(a){var t
if(!A.N(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
N(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.O},
d0(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bY(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bd:function bd(){this.c=this.b=this.a=null},
bW:function bW(a){this.a=a},
bR:function bR(){},
bg:function bg(a){this.a=a},
dH(a,b,c){return b.k("@<0>").a6(c).k("cH<1,2>").a(A.eR(a,new A.Y(b.k("@<0>").a6(c).k("Y<1,2>"))))},
cI(a){return new A.aE(a.k("aE<0>"))},
cg(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bA(a){var t,s={}
if(A.cr(a))return"{...}"
t=new A.aC("")
try{B.a.l($.B,a)
t.a+="{"
s.a=!0
a.B(0,new A.bB(s,t))
t.a+="}"}finally{if(0>=$.B.length)return A.b($.B,-1)
$.B.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
be:function be(a){this.a=a
this.b=null},
bf:function bf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
y:function y(){},
at:function at(){},
bz:function bz(a){this.a=a},
bB:function bB(a,b){this.a=a
this.b=b},
aN:function aN(){},
aa:function aa(){},
aD:function aD(){},
ac:function ac(){},
aJ:function aJ(){},
ag:function ag(){},
de(a){var t=A.dM(a,null)
if(t!=null)return t
throw A.a(new A.bs(a))},
ce(a,b,c,d){var t,s
if(c)t=A.d(new Array(a),d.k("f<0>"))
else{if(a>4294967295)A.a2(A.cL(a,0,4294967295,"length",null))
t=J.cF(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
by(a,b){var t=A.dI(a,b)
return t},
dI(a,b){var t,s
if(Array.isArray(a))return A.d(a.slice(0),b.k("f<0>"))
t=A.d([],b.k("f<0>"))
for(s=J.aT(a);s.q();)B.a.l(t,s.gv())
return t},
cP(a,b,c){var t=J.aT(b)
if(!t.q())return a
if(c.length===0){do a+=A.i(t.gv())
while(t.q())}else{a+=A.i(t.gv())
for(;t.q();)a=a+c+A.i(t.gv())}return a},
cJ(a,b){return new A.bC(a,b.gaB(),b.gaD(),b.gaC())},
a5(a){if(typeof a=="number"||A.cm(a)||a==null)return J.aU(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dN(a)},
aX(a){return new A.bn(a)},
ds(a){return new A.a3(!1,null,null,a)},
dO(a){var t=null
return new A.aB(t,t,!1,t,t,a)},
dP(a,b){return new A.aB(null,null,!0,a,b,"Value not in range")},
cL(a,b,c,d,e){return new A.aB(b,c,!0,a,d,"Invalid value")},
dC(a,b,c,d){return new A.bt(b,!0,a,d,"Index out of range")},
H(a){return new A.bO(a)},
cR(a){return new A.bN(a)},
al(a){return new A.bo(a)},
c8(a){return new A.bS(a)},
dE(a,b,c){var t,s
if(A.cr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.l($.B,a)
try{A.eE(a,t)}finally{if(0>=$.B.length)return A.b($.B,-1)
$.B.pop()}s=A.cP(b,u.V.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cb(a,b,c){var t,s
if(A.cr(a))return b+"..."+c
t=new A.aC(b)
B.a.l($.B,a)
try{s=t
s.a=A.cP(s.a,a,", ")}finally{if(0>=$.B.length)return A.b($.B,-1)
$.B.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eE(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.cd(m,m.r,a.$ti.c),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
t=A.i(l.d)
B.a.l(b,t)
k+=t.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
s=b.pop()
if(0>=b.length)return A.b(b,-1)
r=b.pop()}else{q=l.d;++j
if(!l.q()){if(j<=4){B.a.l(b,A.i(q))
return}s=A.i(q)
if(0>=b.length)return A.b(b,-1)
r=b.pop()
k+=s.length+2}else{p=l.d;++j
for(;l.q();q=p,p=o){o=l.d;++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}r=A.i(q)
s=A.i(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)B.a.l(b,n)
B.a.l(b,r)
B.a.l(b,s)},
bD:function bD(a,b){this.a=a
this.b=b},
bQ:function bQ(){},
bq:function bq(){},
bn:function bn(a){this.a=a},
bM:function bM(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bt:function bt(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a){this.a=a},
bN:function bN(a){this.a=a},
bL:function bL(a){this.a=a},
bo:function bo(a){this.a=a},
bS:function bS(a){this.a=a},
bs:function bs(a){this.a=a},
e:function e(){},
az:function az(){},
k:function k(){},
aC:function aC(a){this.a=a},
bp:function bp(){},
bT:function bT(){},
n:function n(a,b,c){this.a=a
this.b=b
this.$ti=c},
u:function u(){},
R:function R(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
F(a,b,c){return new A.bc(a,b,c)},
dd(a,b,c){var t,s,r,q
for(t=$.dn(),s=0;s<13;++s){r=t[s]
q=r.b
if(q==null||a<q){q=r.c
q=q==null||b<q}else q=!1
if(q)return new A.ad(r.a,c,a)}throw A.a(A.c8("No tile type found for elevation: "+A.i(a)+", moisture: "+A.i(b)+". Fix the rules."))},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
G(a,b){return new A.ax(a,b)},
eU(a,b,c){var t,s,r,q=$.dm().h(0,a)
if(q!=null)for(t=q.length,s=0;s<q.length;q.length===t||(0,A.bk)(q),++s){r=q[s]
if(B.c.C()<r.b)return new A.aw(r.a,b,c)}return null},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b){this.c=a
this.b=b},
ax:function ax(a,b){this.a=a
this.b=b},
f2(){self.jsregionworker=A.eL(new A.c5(),u.r)},
c5:function c5(){},
bI:function bI(a){this.a=a},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c:function c(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W(a,b){return new A.V(a*2-2*b,a+b)},
V:function V(a,b){this.a=a
this.b=b},
bE:function bE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aq(a,b){var t=b.t(0,$.dl().N(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.r(s,r),p=q.t(0,$.cv().N(0,s+r)),o=t.G(0,q)
return new A.br(a,q,b.G(0,p),o)},
p(a,b){return new A.r(a,b)},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
r:function r(a,b){this.a=a
this.b=b},
aA(a){var t,s,r,q,p=u.S,o=A.ce(256,0,!1,p),n=A.ce(256,0,!1,p)
for(t=0;t<256;++t)B.a.i(n,t,t)
s=A.de("6364136223846793005")
r=A.de("1442695040888963407")
a=B.d.a0(B.d.a0(B.d.a0(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.d.aj(a+31,t+1)
if(!(q<256))return A.b(n,q)
B.a.i(o,t,n[q])
n[q]=n[t]}return new A.bF(o)},
bF:function bF(a){this.a=a},
f7(a){return A.a2(new A.b2("Field '"+a+"' has been assigned during initialization."))},
aR(){return A.a2(A.dG(""))},
em(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.ej,a)
t[$.cu()]=a
a.$dart_jsFunction=t
return t},
ej(a,b){u.j.a(b)
u.Z.a(a)
return A.dL(a,b,null)},
eL(a,b){if(typeof a=="function")return a
else return b.a(A.em(a))},
dt(a,b){var t,s,r
u.X.a(a)
if(B.c.ah(100)<95){t=A.cw(a,b)
s=A.ak(a,b+2,B.X,B.L,B.a8,3.5*(B.c.C()+0.5),B.f,1.25)
if(0>=t.length)return A.b(t,0)
r=t[0]
if(0>=s.length)return A.b(s,0)
J.bl(r,s[0])
if(1>=t.length)return A.b(t,1)
r=t[1]
if(1>=s.length)return A.b(s,1)
J.bl(r,s[1])
return t}else return A.cw(a,b)},
cw(a,b){return A.ak(a,b+1.25,B.a2,B.a0,B.Z,2*(B.c.C()+0.5),B.f,0.3)},
dQ(a,b){var t,s
u.X.a(a)
t=B.c.C()/2+0.25
s=B.c.C()
return A.ak(a,b+1,B.I,B.a9,B.a7,0.8*t,A.W(s/10,B.c.C()/10),t)},
dV(a,b){var t,s,r
u.X.a(a)
if(B.c.ah(100)<95){t=A.cO(a,b)
s=B.c.C()
r=A.ak(a,b+2,B.U,B.ab,B.a4,3.5*(B.c.C()+0.5),B.f,s/5+1)
if(0>=t.length)return A.b(t,0)
s=t[0]
if(0>=r.length)return A.b(r,0)
J.bl(s,r[0])
if(1>=t.length)return A.b(t,1)
s=t[1]
if(1>=r.length)return A.b(r,1)
J.bl(s,r[1])
return t}else return A.cO(a,b)},
cO(a,b){return A.ak(a,b+1.25,B.P,B.M,B.H,2*(B.c.C()+0.5),B.f,0.25)},
ak(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.e
a8=B.e
a9=B.e}else{a7=A.ct(a7,B.e,t)
a8=A.ct(a8,B.e,t)
a9=A.ct(a9,B.e,t)}}s=A.W(a5.a+a6,a5.b+a6).t(0,b1)
r=s.t(0,A.W(b0,b0))
q=s.t(0,A.W(0,b2))
p=r.t(0,A.W(0,b2))
o=s.t(0,A.W(b2,0))
n=r.t(0,A.W(b2,0))
m=p.t(0,A.W(b2,0))
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
a2=A.d([l,k,j,i,h,g,j,i,h,g,f,e,j,i,f,e,d,c,j,i,d,c,b,a,j,i,b,a,a0,a1,j,i,a0,a1,l,k],u.n)
a3=A.ce(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.i(a3,a4,a8.ga1())
B.a.i(a3,a4+6,a7.ga1())
B.a.i(a3,a4+12,a9.ga1())}return[a2,a3]},
ct(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.c(B.b.I((t+(b.a/255-t)*c)*255),B.b.I((s+(b.b/255-s)*c)*255),B.b.I((r+(b.c/255-r)*c)*255),B.b.I((q+(b.d/255-q)*c)*255))},
f5(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a2.length
if(0>=a1)return A.b(a2,0)
t=a2[0]
if(0>=t.length)return A.b(t,0)
s=t[0].b
for(r=0;r<a1;++r,s=p){t=a2[r]
q=t.length
if(0>=q)return A.b(t,0)
p=t[0].b
for(o=s.b,n=p.a,m=0;m<q;++m){l=t[m].b
if(l.a<n)throw A.a(A.c8("Tiles are not sorted by x coordinate"))
if(l.b<o)throw A.a(A.c8("Tiles are not sorted by y coordinate"))}}k=A.cI(u.H)
j=A.d([],u.Q)
for(a1=u.D,r=0;r<a2.length;r=i){i=r+1
m=0
while(!0){if(!(r<a2.length))return A.b(a2,r)
if(!(m<a2[r].length))break
c$0:{h=new A.n(m,r,a1)
g=m+1
f=new A.n(g,i,a1)
if(k.W(0,h))break c$0
if(!(r<a2.length))return A.b(a2,r)
t=a2[r]
if(!(m<t.length))return A.b(t,m)
e=t[m]
d=e.a
c=e.c
for(;!0;){if(A.el(k,c,d,a2,h,f)){t=f.$ti
t.a(B.n)
q=B.n.a
o=t.c
n=o.a(f.a+q)
l=B.n.b
b=o.a(f.b+l)}else break
a=A.ek(k,c,d,a2,h,new A.n(n,b,t))
if(a){t.a(B.m)
f=new A.n(o.a(n+B.m.a),o.a(b+B.m.b),t)}else{f=new A.n(o.a(n-q),o.a(b-l),t)
break}}a0=f.a-h.a
if(a0>1)B.a.l(j,new A.aV(d,e.b,c,a0))
else B.a.l(j,e)
k.n(0,A.eF(h,f))}m=g}}return j},
eF(a,b){var t,s,r,q,p,o=u.H,n=A.cI(o)
for(t=a.a,s=b.a,r=a.b,q=b.b;t<s;++t)for(p=r;p<q;++p)n.l(0,new A.n(t,p,o))
return n},
el(a,b,c,d,e,f){var t,s=f.a,r=e.b,q=new A.n(s,r,u.D),p=f.b
for(;r<p;++r){if(s>=B.a.gad(d).length||r>=d.length)return!1
if(a.W(0,q))return!1
if(!(r>=0&&r<d.length))return A.b(d,r)
t=d[r]
if(s>>>0!==s||s>=t.length)return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0},
ek(a,b,c,d,e,f){var t,s=e.a,r=f.b,q=new A.n(s,r,u.D),p=f.a
for(;s<p;++s){if(s>=B.a.gad(d).length||r>=d.length)return!1
if(a.W(0,q))return!1
if(r>>>0!==r||r>=d.length)return A.b(d,r)
t=d[r]
if(!(s>=0&&s<t.length))return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0}},J={
cs(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cq==null){A.eY()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.a(A.cR("Return interceptor for "+A.i(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bU
if(p==null)p=$.bU=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f1(a)
if(q!=null)return q
if(typeof a=="function")return B.ae
t=Object.getPrototypeOf(a)
if(t==null)return B.x
if(t===Object.prototype)return B.x
if(typeof r=="function"){p=$.bU
if(p==null)p=$.bU=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
cE(a,b){if(a<0||a>4294967295)throw A.a(A.cL(a,0,4294967295,"length",null))
return J.cF(new Array(a),b)},
cF(a,b){return J.cG(A.d(a,b.k("f<0>")),b)},
cG(a,b){a.fixed$length=Array
return a},
dF(a,b){var t=u.U
return J.dp(t.a(a),t.a(b))},
L(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ar.prototype
return J.b1.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.as.prototype
if(typeof a=="boolean")return J.b_.prototype
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.k)return a
return J.cp(a)},
aP(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.k)return a
return J.cp(a)},
db(a){if(a==null)return a
if(a.constructor==Array)return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.k)return a
return J.cp(a)},
eS(a){if(typeof a=="number")return J.a7.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.af.prototype
return a},
aS(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).E(a,b)},
bl(a,b){return J.db(a).n(a,b)},
dp(a,b){return J.eS(a).V(a,b)},
bm(a){return J.L(a).gm(a)},
aT(a){return J.db(a).gH(a)},
c7(a){return J.aP(a).gp(a)},
dq(a){return J.L(a).gD(a)},
dr(a,b){return J.L(a).ai(a,b)},
aU(a){return J.L(a).j(a)},
aZ:function aZ(){},
b_:function b_(){},
as:function as(){},
o:function o(){},
Z:function Z(){},
b7:function b7(){},
af:function af(){},
P:function P(){},
f:function f(a){this.$ti=a},
bu:function bu(a){this.$ti=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
ar:function ar(){},
b1:function b1(){},
X:function X(){}},B={}
var w=[A,J,B]
var $={}
A.cc.prototype={}
J.aZ.prototype={
E(a,b){return a===b},
gm(a){return A.b8(a)},
j(a){return"Instance of '"+A.bH(a)+"'"},
ai(a,b){throw A.a(A.cJ(a,u.o.a(b)))},
gD(a){return A.a1(A.cl(this))}}
J.b_.prototype={
j(a){return String(a)},
gm(a){return a?519018:218159},
gD(a){return A.a1(u.y)},
$iA:1,
$icn:1}
J.as.prototype={
E(a,b){return null==b},
j(a){return"null"},
gm(a){return 0},
$iA:1}
J.o.prototype={}
J.Z.prototype={
gm(a){return 0},
j(a){return String(a)}}
J.b7.prototype={}
J.af.prototype={}
J.P.prototype={
j(a){var t=a[$.cu()]
if(t==null)return this.al(a)
return"JavaScript function for "+J.aU(t)},
$ia6:1}
J.f.prototype={
l(a,b){A.ah(a).c.a(b)
if(!!a.fixed$length)A.a2(A.H("add"))
a.push(b)},
n(a,b){var t
A.ah(a).k("e<1>").a(b)
if(!!a.fixed$length)A.a2(A.H("addAll"))
if(Array.isArray(b)){this.an(a,b)
return}for(t=J.aT(b);t.q();)a.push(t.gv())},
an(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.al(a))
for(s=0;s<t;++s)a.push(b[s])},
gad(a){if(a.length>0)return a[0]
throw A.a(A.dD())},
j(a){return A.cb(a,"[","]")},
gH(a){return new J.aW(a,a.length,A.ah(a).k("aW<1>"))},
gm(a){return A.b8(a)},
gp(a){return a.length},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.bj(a,b))
return a[b]},
i(a,b,c){A.ah(a).c.a(c)
if(!!a.immutable$list)A.a2(A.H("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.bj(a,b))
a[b]=c},
$ie:1,
$ij:1}
J.bu.prototype={}
J.aW.prototype={
gv(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bk(r)
throw A.a(r)}t=s.c
if(t>=q){s.sa9(null)
return!1}s.sa9(r[t]);++s.c
return!0},
sa9(a){this.d=this.$ti.k("1?").a(a)}}
J.a7.prototype={
V(a,b){var t
A.ee(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gZ(b)
if(this.gZ(a)===t)return 0
if(this.gZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gZ(a){return a===0?1/a<0:a<0},
J(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.H(""+a+".toInt()"))},
I(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.H(""+a+".round()"))},
aE(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aj(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
U(a,b){return(a|0)===a?a/b|0:this.au(a,b)},
au(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.a(A.H("Result of truncating division is "+A.i(t)+": "+A.i(a)+" ~/ "+b))},
ak(a,b){if(b<0)throw A.a(A.eM(b))
return b>31?0:a<<b>>>0},
gD(a){return A.a1(u.p)},
$iq:1,
$ih:1,
$ix:1}
J.ar.prototype={
a0(a,b){var t=this.ak(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gD(a){return A.a1(u.S)},
$iA:1,
$im:1}
J.b1.prototype={
gD(a){return A.a1(u.i)},
$iA:1}
J.X.prototype={
t(a,b){return a+b},
V(a,b){var t
A.a0(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
j(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gD(a){return A.a1(u.N)},
gp(a){return a.length},
h(a,b){if(b>=a.length)throw A.a(A.bj(a,b))
return a[b]},
$iA:1,
$iq:1,
$iE:1}
A.b2.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.ap.prototype={}
A.b3.prototype={
gv(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=J.aP(r),p=q.gp(r)
if(s.b!==p)throw A.a(A.al(r))
t=s.c
if(t>=p){s.sa3(null)
return!1}s.sa3(q.h(r,t));++s.c
return!0},
sa3(a){this.d=this.$ti.k("1?").a(a)}}
A.C.prototype={
sp(a,b){throw A.a(A.H("Cannot change the length of a fixed-length list"))},
l(a,b){A.M(a).k("C.E").a(b)
throw A.a(A.H("Cannot add to a fixed-length list"))},
n(a,b){A.M(a).k("e<C.E>").a(b)
throw A.a(A.H("Cannot add to a fixed-length list"))}}
A.ae.prototype={
gm(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bm(this.a)&536870911
this._hashCode=t
return t},
j(a){return'Symbol("'+A.i(this.a)+'")'},
E(a,b){if(b==null)return!1
return b instanceof A.ae&&this.a==b.a},
$ia_:1}
A.an.prototype={}
A.am.prototype={
j(a){return A.bA(this)},
n(a,b){A.v(this).k("z<1,2>").a(b)
A.dB()},
$iz:1}
A.ao.prototype={
gp(a){return this.a},
X(a){return!1},
h(a,b){if(!this.X(b))return null
return this.b[A.a0(b)]},
B(a,b){var t,s,r,q,p,o=this.$ti
o.k("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.a0(t[q])
b.$2(p,o.a(r[p]))}}}
A.b0.prototype={
gaB(){var t=this.a
return t},
gaD(){var t,s,r,q,p=this
if(p.c===1)return B.v
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.v
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.b(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gaC(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.w
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.w
p=new A.Y(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.b(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.b(r,m)
p.i(0,new A.ae(n),r[m])}return new A.an(p,u.a)},
$icD:1}
A.bG.prototype={
$2(a,b){var t
A.a0(a)
t=this.a
t.b=t.b+"$"+a
B.a.l(this.b,a)
B.a.l(this.c,b);++t.a},
$S:1}
A.O.prototype={
j(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.di(s==null?"unknown":s)+"'"},
$ia6:1,
gaF(){return this},
$C:"$1",
$R:1,
$D:null}
A.aY.prototype={$C:"$2",$R:2}
A.bb.prototype={}
A.ba.prototype={
j(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.di(t)+"'"}}
A.a4.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.f4(this.a)^A.b8(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bH(this.a)+"'")}}
A.bP.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bK.prototype={
j(a){return"RuntimeError: "+this.a}}
A.bV.prototype={}
A.Y.prototype={
gp(a){return this.a},
X(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
n(a,b){A.v(this).k("z<1,2>").a(b).B(0,new A.bv(this))},
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
t=r[this.ae(a)]
s=this.af(t,a)
if(s<0)return null
return t[s].b},
i(a,b,c){var t,s,r=this,q=A.v(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.a5(t==null?r.b=r.S():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a5(s==null?r.c=r.S():s,b,c)}else r.aA(b,c)},
aA(a,b){var t,s,r,q,p=this,o=A.v(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.S()
s=p.ae(a)
r=t[s]
if(r==null)t[s]=[p.T(a,b)]
else{q=p.af(r,a)
if(q>=0)r[q].b=b
else r.push(p.T(a,b))}},
B(a,b){var t,s,r=this
A.v(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.al(r))
t=t.c}},
a5(a,b,c){var t,s=A.v(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.T(b,c)
else t.b=c},
T(a,b){var t=this,s=A.v(t),r=new A.bw(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ae(a){return J.bm(a)&0x3fffffff},
af(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aS(a[s].a,b))return s
return-1},
j(a){return A.bA(this)},
S(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icH:1}
A.bv.prototype={
$2(a,b){var t=this.a,s=A.v(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.v(this.a).k("~(1,2)")}}
A.bw.prototype={}
A.bx.prototype={
gp(a){return this.a.a},
gH(a){var t=this.a,s=new A.a9(t,t.r,this.$ti.k("a9<1>"))
s.c=t.e
return s}}
A.a9.prototype={
gv(){return this.d},
q(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.al(r))
t=s.c
if(t==null){s.sa4(null)
return!1}else{s.sa4(t.a)
s.c=t.c
return!0}},
sa4(a){this.d=this.$ti.k("1?").a(a)}}
A.c1.prototype={
$1(a){return this.a(a)},
$S:2}
A.c2.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.c3.prototype={
$1(a){return this.a(A.a0(a))},
$S:4}
A.b6.prototype={}
A.ab.prototype={
gp(a){return a.length},
$ia8:1}
A.au.prototype={
h(a,b){A.bZ(b,a,a.length)
return a[b]},
i(a,b,c){A.ck(c)
A.bZ(b,a,a.length)
a[b]=c},
$ie:1,
$ij:1}
A.av.prototype={
i(a,b,c){A.ai(c)
A.bZ(b,a,a.length)
a[b]=c},
$ie:1,
$ij:1}
A.b4.prototype={
gD(a){return B.ai},
$iA:1,
$ic9:1}
A.b5.prototype={
gD(a){return B.aj},
h(a,b){A.bZ(b,a,a.length)
return a[b]},
$iA:1,
$ica:1}
A.aF.prototype={}
A.aG.prototype={}
A.aH.prototype={}
A.aI.prototype={}
A.D.prototype={
k(a){return A.bX(v.typeUniverse,this,a)},
a6(a){return A.eb(v.typeUniverse,this,a)}}
A.bd.prototype={}
A.bW.prototype={
j(a){return A.w(this.a,null)}}
A.bR.prototype={
j(a){return this.a}}
A.bg.prototype={}
A.aE.prototype={
gH(a){var t=this,s=new A.bf(t,t.r,t.$ti.k("bf<1>"))
s.c=t.e
return s},
gp(a){return this.a},
W(a,b){var t=this.ao(b)
return t},
ao(a){var t=this.d
if(t==null)return!1
return this.ab(t[a.gm(a)&1073741823],a)>=0},
l(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a7(t==null?r.b=A.cg():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a7(s==null?r.c=A.cg():s,b)}else return r.am(b)},
am(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cg()
s=J.bm(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.O(a)]
else{if(q.ab(r,a)>=0)return!1
r.push(q.O(a))}return!0},
a7(a,b){this.$ti.c.a(b)
if(u.M.a(a[b])!=null)return!1
a[b]=this.O(b)
return!0},
O(a){var t=this,s=new A.be(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
ab(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aS(a[s].a,b))return s
return-1}}
A.be.prototype={}
A.bf.prototype={
gv(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.a(A.al(r))
else if(s==null){t.sa8(null)
return!1}else{t.sa8(t.$ti.k("1?").a(s.a))
t.c=s.b
return!0}},
sa8(a){this.d=this.$ti.k("1?").a(a)}}
A.y.prototype={
gH(a){return new A.b3(a,this.gp(a),A.M(a).k("b3<y.E>"))},
l(a,b){var t
A.M(a).k("y.E").a(b)
t=this.gp(a)
this.sp(a,t+1)
this.i(a,t,b)},
n(a,b){var t,s
A.M(a).k("e<y.E>").a(b)
t=this.gp(a)
for(s=J.aT(b);s.q();){this.l(a,s.gv());++t}},
j(a){return A.cb(a,"[","]")}}
A.at.prototype={
B(a,b){var t,s,r,q=this,p=A.v(q)
p.k("~(1,2)").a(b)
for(t=A.cd(q,q.r,p.c),p=p.z[1];t.q();){s=t.d
r=q.h(0,s)
b.$2(s,r==null?p.a(r):r)}},
n(a,b){A.v(this).k("z<1,2>").a(b).B(0,new A.bz(this))},
gp(a){return this.a},
j(a){return A.bA(this)},
$iz:1}
A.bz.prototype={
$2(a,b){var t=this.a,s=A.v(t)
t.i(0,s.c.a(a),s.z[1].a(b))},
$S(){return A.v(this.a).k("~(1,2)")}}
A.bB.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.i(a)
s.a=t+": "
s.a+=A.i(b)},
$S:5}
A.aN.prototype={
n(a,b){this.$ti.k("z<1,2>").a(b)
throw A.a(A.H("Cannot modify unmodifiable map"))}}
A.aa.prototype={
h(a,b){return this.a.h(0,b)},
n(a,b){this.a.n(0,this.$ti.k("z<1,2>").a(b))},
B(a,b){this.a.B(0,this.$ti.k("~(1,2)").a(b))},
gp(a){return this.a.a},
j(a){return A.bA(this.a)},
$iz:1}
A.aD.prototype={}
A.ac.prototype={
n(a,b){var t
for(t=J.aT(this.$ti.k("e<1>").a(b));t.q();)this.l(0,t.gv())},
j(a){return A.cb(this,"{","}")},
$ie:1}
A.aJ.prototype={}
A.ag.prototype={}
A.bD.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.a5(b)
s.a=", "},
$S:6}
A.bQ.prototype={
j(a){return this.aa()}}
A.bq.prototype={}
A.bn.prototype={
j(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a5(t)
return"Assertion failed"}}
A.bM.prototype={}
A.a3.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
j(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gR()+r+p
if(!t.a)return o
return o+t.gP()+": "+A.a5(t.gY())},
gY(){return this.b}}
A.aB.prototype={
gY(){return A.ef(this.b)},
gR(){return"RangeError"},
gP(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.i(r):""
else if(r==null)t=": Not greater than or equal to "+A.i(s)
else if(r>s)t=": Not in inclusive range "+A.i(s)+".."+A.i(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.i(s)
return t}}
A.bt.prototype={
gY(){return A.ai(this.b)},
gR(){return"RangeError"},
gP(){if(A.ai(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bC.prototype={
j(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aC("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.a5(o)
k.a=", "}l.d.B(0,new A.bD(k,j))
n=A.a5(l.a)
m=j.j(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bO.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.bN.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.bL.prototype={
j(a){return"Bad state: "+this.a}}
A.bo.prototype={
j(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.a5(t)+"."}}
A.bS.prototype={
j(a){return"Exception: "+this.a}}
A.bs.prototype={
j(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.e.prototype={
gp(a){var t,s=this.a,r=A.cd(s,s.r,this.$ti.c)
for(t=0;r.q();)++t
return t},
j(a){return A.dE(this,"(",")")}}
A.az.prototype={
gm(a){return A.k.prototype.gm.call(this,this)},
j(a){return"null"}}
A.k.prototype={$ik:1,
E(a,b){return this===b},
gm(a){return A.b8(this)},
j(a){return"Instance of '"+A.bH(this)+"'"},
ai(a,b){throw A.a(A.cJ(this,u.o.a(b)))},
gD(a){return A.eV(this)},
toString(){return this.j(this)}}
A.aC.prototype={
gp(a){return this.a.length},
j(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bp.prototype={
j(a){var t=String(a)
t.toString
return t}}
A.bT.prototype={
ah(a){if(a<=0||a>4294967296)throw A.a(A.dO("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
C(){return Math.random()}}
A.n.prototype={
j(a){return"Point("+A.i(this.a)+", "+A.i(this.b)+")"},
E(a,b){if(b==null)return!1
return b instanceof A.n&&this.a===b.a&&this.b===b.b},
gm(a){var t=B.b.gm(this.a),s=B.b.gm(this.b),r=A.cQ(A.cQ(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.u.prototype={
V(a,b){u.k.a(b)
if(this.a_()>b.a_())return-1
return 1},
$iq:1}
A.R.prototype={
a_(){return this.K().a+this.K().b+this.a2()},
ag(){return this.L()<0}}
A.aV.prototype={
M(){var t=this,s=t.a
return A.ak(t.b,t.c,s.c,s.d,s.e,1,B.f,t.d)},
L(){return this.c},
K(){return this.b},
a2(){return this.d}}
A.ad.prototype={
M(){var t=this.a
return A.ak(this.b,this.c,t.c,t.d,t.e,1,B.f,1)},
L(){return this.c},
K(){return this.b},
a2(){return 1}}
A.bc.prototype={}
A.I.prototype={
aa(){return"TileType."+this.b}}
A.aw.prototype={
M(){return this.a.c.$2(this.b,this.c)},
a_(){var t=this.b
return t.a+t.b},
ag(){return this.c<0}}
A.ay.prototype={
aa(){return"NaturalItemType."+this.b}}
A.ax.prototype={}
A.c5.prototype={
$1(a){var t,s,r=new A.bE()
r.a=A.aA(2)
r.b=A.aA(3)
r.c=A.aA(4)
r.d=A.aA(5)
r.e=A.aA(6)
r.f=A.aA(7)
t=J.aP(a)
s=new A.bI(r).aw(new A.V(A.ck(t.h(a,0)),A.ck(t.h(a,1))),A.ai(t.h(a,2)),A.ai(t.h(a,3)),A.ai(t.h(a,4)),A.ai(t.h(a,5)))
t=s.a
return A.d([t.a,t.b,s.b,s.c,s.d,s.e,s.f],u.f)},
$S:7}
A.bI.prototype={
aw(a,b,c,d,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a.av(b,c,d,a0),g=this.aq(b,c,d,a0,h[0],h[1]),f=this.ap(b,c,d,a0,h[0],h[1]),e=A.by(g,u.k)
B.a.n(e,f)
if(!!e.immutable$list)A.a2(A.H("sort"))
A.dU(e,J.eu(),A.ah(e).c)
t=u.n
s=A.d([],t)
r=u.t
q=A.d([],r)
p=A.d([],t)
o=A.d([],r)
for(t=e.length,r=u.l,n=u.Y,m=u.j,l=0;l<e.length;e.length===t||(0,A.bk)(e),++l){k=e[l]
j=m.a(k.M())
i=J.aP(j)
if(k.ag()){B.a.n(p,r.a(i.h(j,0)))
B.a.n(o,n.a(i.h(j,1)))}else{B.a.n(s,r.a(i.h(j,0)))
B.a.n(q,n.a(i.h(j,1)))}}return new A.bJ(a,B.d.U(s.length+p.length,2),new Float32Array(A.c_(s)),new Int32Array(A.c_(q)),new Float32Array(A.c_(p)),new Int32Array(A.c_(o)))},
aq(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],u.F)
for(t=u.X,s=e.length,r=f.length,q=u.q,p=0;p<a;++p){if(!(p<s))return A.b(e,p)
o=e[p]
if(!(p<r))return A.b(f,p)
n=f[p]
m=A.d([],q)
for(l=o.length,k=n.length,j=c+p,i=0;i<b;++i){if(!(i<l))return A.b(o,i)
h=o[i]
if(!(i<k))return A.b(n,i)
B.a.l(m,A.dd(h,n[i],new A.n(j,d+i,t)))}B.a.l(g,m)}return this.ar(A.f5(g))},
ar(a){var t,s
u.c.a(a)
t=A.d([],u.Q)
for(s=0;s<a.length;++s)if(a[s].L()>-5){if(!(s<a.length))return A.b(a,s)
B.a.l(t,a[s])}return t},
ap(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],u.W)
for(t=u.X,s=e.length,r=f.length,q=0;q<a;++q){if(!(q<s))return A.b(e,q)
p=e[q]
if(!(q<r))return A.b(f,q)
o=f[q]
for(n=c+q,m=p.length,l=o.length,k=0;k<b;++k){j=new A.n(n,d+k,t)
if(!(k<m))return A.b(p,k)
i=p[k]
if(!(k<l))return A.b(o,k)
h=A.eU(A.dd(i,o[k],j).a,j,p[k])
if(h!=null)B.a.l(g,h)}}return g}}
A.bJ.prototype={}
A.c.prototype={
ga1(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.V.prototype={
t(a,b){return new A.V(this.a+b.a,this.b+b.b)},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.V&&b.a===this.a&&b.b===this.b},
gm(a){return B.b.gm(this.a)^B.b.gm(this.b)},
j(a){return""+B.b.J(this.a)+", "+B.b.J(this.b)}}
A.bE.prototype={
av(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.ac(a1,a2),a0=b.ac(a1,a2)
for(t=a.length,s=a0.length,r=0;r<a1;++r){if(!(r<t))return A.b(a,r)
q=a[r]
if(!(r<s))return A.b(a0,r)
p=a0[r]
for(o=a3+r,n=o*0.006,m=o*0.016,l=o*0.048,k=0;k<a2;++k){j=a4+k
i=b.a
i===$&&A.aR()
h=j*0.006
i=A.aq(i.a,new A.r(n,h)).F()
g=b.b
g===$&&A.aR()
f=j*0.016
g=A.aq(g.a,new A.r(m,f)).F()
e=b.c
e===$&&A.aR()
d=j*0.048
e=A.aq(e.a,new A.r(l,d)).F()
c=b.d
c===$&&A.aR()
h=A.aq(c.a,new A.r(n,h)).F()
c=b.e
c===$&&A.aR()
f=A.aq(c.a,new A.r(m,f)).F()
c=b.f
c===$&&A.aR()
d=A.aq(c.a,new A.r(l,d)).F()
B.a.i(q,k,B.b.aE((i+0.5*g+0.25*e-0.3)*15))
B.a.i(p,k,h+0.5*f+0.25*d)}}return A.d([a,a0],u.G)},
ac(a,b){var t,s,r,q,p=J.cE(a,u.u)
for(t=u.i,s=0;s<a;++s){r=J.cE(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.br.prototype={
u(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.dj()
if(!(a<8))return A.b(j,a)
t=j[a]
s=k.c.G(0,t).G(0,$.cv().N(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.t(0,t)
m=u.L.a(k.a)
n=m[m[B.b.J(n.a)&255]+B.b.J(n.b)&255]
l=$.dk()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
F(){var t,s,r,q,p=this
p.u(0)
p.u(1)
t=p.d
s=t.a
t=t.b
r=s+t
if(r<=1){q=1-r
if(q>s||q>t)if(s>t)p.u(2)
else p.u(3)
else p.u(4)
p.u(5)}else{q=2-r
if(q<s||q<t)if(s>t)p.u(6)
else p.u(7)
else p.u(5)
p.u(4)}return p.e/47}}
A.r.prototype={
t(a,b){return new A.r(this.a+b.a,this.b+b.b)},
G(a,b){return new A.r(this.a-b.a,this.b-b.b)},
N(a,b){return new A.r(this.a*b,this.b*b)},
j(a){return A.i(this.a)+", "+A.i(this.b)}}
A.bF.prototype={};(function aliases(){var t=J.Z.prototype
t.al=t.j})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eu","dF",8)
t(A,"eO","dt",0)
t(A,"eP","dQ",0)
t(A,"eQ","dV",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.cc,J.aZ,J.aW,A.bq,A.e,A.b3,A.C,A.ae,A.aa,A.am,A.b0,A.O,A.bV,A.at,A.bw,A.a9,A.D,A.bd,A.bW,A.ac,A.be,A.bf,A.y,A.aN,A.bQ,A.bS,A.bs,A.az,A.aC,A.bT,A.n,A.u,A.bc,A.ax,A.bI,A.bJ,A.c,A.V,A.bE,A.br,A.r,A.bF])
r(J.aZ,[J.b_,J.as,J.o,J.a7,J.X])
r(J.o,[J.Z,J.f,A.b6,A.bp])
r(J.Z,[J.b7,J.af,J.P])
s(J.bu,J.f)
r(J.a7,[J.ar,J.b1])
r(A.bq,[A.b2,A.bP,A.bK,A.bR,A.bn,A.bM,A.a3,A.bC,A.bO,A.bN,A.bL,A.bo])
s(A.ap,A.e)
s(A.ag,A.aa)
s(A.aD,A.ag)
s(A.an,A.aD)
s(A.ao,A.am)
r(A.O,[A.aY,A.bb,A.c1,A.c3,A.c5])
r(A.aY,[A.bG,A.bv,A.c2,A.bz,A.bB,A.bD])
r(A.bb,[A.ba,A.a4])
s(A.Y,A.at)
s(A.bx,A.ap)
s(A.ab,A.b6)
r(A.ab,[A.aF,A.aH])
s(A.aG,A.aF)
s(A.au,A.aG)
s(A.aI,A.aH)
s(A.av,A.aI)
s(A.b4,A.au)
s(A.b5,A.av)
s(A.bg,A.bR)
s(A.aJ,A.ac)
s(A.aE,A.aJ)
r(A.a3,[A.aB,A.bt])
r(A.u,[A.R,A.aw])
r(A.R,[A.aV,A.ad])
r(A.bQ,[A.I,A.ay])
t(A.aF,A.y)
t(A.aG,A.C)
t(A.aH,A.y)
t(A.aI,A.C)
t(A.ag,A.aN)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",h:"double",x:"num",E:"String",cn:"bool",az:"Null",j:"List"},mangledNames:{},types:["j<@>(n<h>,h)","~(E,@)","@(@)","@(@,E)","@(E)","~(k?,k?)","~(a_,@)","j<k>(@)","m(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ea(v.typeUniverse,JSON.parse('{"b7":"Z","af":"Z","P":"Z","b_":{"cn":[],"A":[]},"as":{"A":[]},"f":{"j":["1"],"e":["1"]},"bu":{"f":["1"],"j":["1"],"e":["1"]},"a7":{"h":[],"x":[],"q":["x"]},"ar":{"h":[],"m":[],"x":[],"q":["x"],"A":[]},"b1":{"h":[],"x":[],"q":["x"],"A":[]},"X":{"E":[],"q":["E"],"A":[]},"ap":{"e":["1"]},"ae":{"a_":[]},"an":{"aD":["1","2"],"ag":["1","2"],"aa":["1","2"],"aN":["1","2"],"z":["1","2"]},"am":{"z":["1","2"]},"ao":{"am":["1","2"],"z":["1","2"]},"b0":{"cD":[]},"O":{"a6":[]},"aY":{"a6":[]},"bb":{"a6":[]},"ba":{"a6":[]},"a4":{"a6":[]},"Y":{"at":["1","2"],"cH":["1","2"],"z":["1","2"]},"bx":{"e":["1"]},"ab":{"a8":["1"]},"au":{"y":["h"],"a8":["h"],"j":["h"],"e":["h"],"C":["h"]},"av":{"y":["m"],"a8":["m"],"j":["m"],"e":["m"],"C":["m"]},"b4":{"y":["h"],"c9":[],"a8":["h"],"j":["h"],"e":["h"],"C":["h"],"A":[],"y.E":"h","C.E":"h"},"b5":{"y":["m"],"ca":[],"a8":["m"],"j":["m"],"e":["m"],"C":["m"],"A":[],"y.E":"m","C.E":"m"},"aE":{"ac":["1"],"e":["1"]},"at":{"z":["1","2"]},"aa":{"z":["1","2"]},"aD":{"ag":["1","2"],"aa":["1","2"],"aN":["1","2"],"z":["1","2"]},"ac":{"e":["1"]},"aJ":{"ac":["1"],"e":["1"]},"h":{"x":[],"q":["x"]},"m":{"x":[],"q":["x"]},"j":{"e":["1"]},"x":{"q":["x"]},"E":{"q":["E"]},"u":{"q":["u"]},"R":{"u":[],"q":["u"]},"ad":{"R":[],"u":[],"q":["u"]},"aV":{"R":[],"u":[],"q":["u"]},"aw":{"u":[],"q":["u"]},"ca":{"j":["m"],"e":["m"]},"c9":{"j":["h"],"e":["h"]}}'))
A.e9(v.typeUniverse,JSON.parse('{"ap":1,"ab":1,"aJ":1}'))
var u=(function rtii(){var t=A.U
return{U:t("q<@>"),a:t("an<a_,@>"),Z:t("a6"),k:t("u"),o:t("cD"),l:t("e<h>"),V:t("e<@>"),Y:t("e<m>"),G:t("f<j<j<h>>>"),F:t("f<j<ad>>"),W:t("f<aw>"),f:t("f<k>"),q:t("f<ad>"),s:t("f<E>"),Q:t("f<R>"),n:t("f<h>"),b:t("f<@>"),t:t("f<m>"),T:t("as"),g:t("P"),E:t("a8<@>"),B:t("Y<a_,@>"),r:t("j<k>(@)"),c:t("j<R>"),u:t("j<h>"),j:t("j<@>"),L:t("j<m>"),P:t("az"),K:t("k"),X:t("n<h>"),D:t("n<m>"),H:t("n<x>"),I:t("fe"),N:t("E"),h:t("a_"),R:t("A"),C:t("af"),y:t("cn"),i:t("h"),z:t("@"),S:t("m"),A:t("0&*"),_:t("k*"),d:t("cC<az>?"),O:t("k?"),M:t("be?"),p:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.ac=J.aZ.prototype
B.a=J.f.prototype
B.d=J.ar.prototype
B.b=J.a7.prototype
B.ad=J.X.prototype
B.ae=J.P.prototype
B.af=J.o.prototype
B.x=J.b7.prototype
B.q=J.af.prototype
B.r=function getTagFallback(o) {
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
B.t=function(hooks) { return hooks; }

B.c=new A.bT()
B.u=new A.bV()
B.H=new A.c(255,101,46,4)
B.I=new A.c(255,107,129,124)
B.L=new A.c(255,10,152,44)
B.M=new A.c(255,119,53,5)
B.P=new A.c(255,126,56,5)
B.U=new A.c(255,14,145,45)
B.X=new A.c(255,15,169,52)
B.Z=new A.c(255,164,152,147)
B.a0=new A.c(255,183,173,167)
B.a2=new A.c(255,197,187,181)
B.e=new A.c(255,1,46,143)
B.a4=new A.c(255,6,101,28)
B.a7=new A.c(255,83,105,100)
B.a8=new A.c(255,8,133,38)
B.a9=new A.c(255,91,112,107)
B.ab=new A.c(255,9,122,36)
B.f=new A.V(0,0)
B.v=A.d(t([]),u.b)
B.ag=A.d(t([]),A.U("f<a_>"))
B.w=new A.ao(0,{},B.ag,A.U("ao<a_,@>"))
B.k=new A.ay(A.eO(),"birch")
B.h=new A.ay(A.eP(),"rock")
B.l=new A.ay(A.eQ(),"spruce")
B.m=new A.n(0,1,u.D)
B.n=new A.n(1,0,u.D)
B.ah=new A.ae("call")
B.V=new A.c(255,150,157,102)
B.R=new A.c(255,138,145,92)
B.N=new A.c(255,121,128,80)
B.y=new A.I(B.V,B.R,B.N,"lakeFloorVegetation")
B.K=new A.c(255,109,150,86)
B.aa=new A.c(255,92,129,72)
B.a6=new A.c(255,79,112,60)
B.o=new A.I(B.K,B.aa,B.a6,"grass")
B.a_=new A.c(255,173,162,115)
B.W=new A.c(255,159,148,103)
B.T=new A.c(255,148,138,95)
B.z=new A.I(B.a_,B.W,B.T,"lakeFloorBare")
B.S=new A.c(255,139,162,127)
B.O=new A.c(255,125,148,113)
B.J=new A.c(255,109,129,98)
B.i=new A.I(B.S,B.O,B.J,"bare")
B.a1=new A.c(255,194,178,128)
B.Y=new A.c(255,161,146,100)
B.Q=new A.c(255,138,124,82)
B.p=new A.I(B.a1,B.Y,B.Q,"sand")
B.G=new A.c(255,100,164,93)
B.a5=new A.c(255,75,140,76)
B.a3=new A.c(255,59,117,60)
B.j=new A.I(B.G,B.a5,B.a3,"taiga")
B.ai=A.dh("c9")
B.aj=A.dh("ca")})();(function staticFields(){$.bU=null
$.B=A.d([],u.f)
$.cK=null
$.cz=null
$.cy=null
$.dc=null
$.d9=null
$.dg=null
$.c0=null
$.c4=null
$.cq=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"f9","cu",()=>A.eT("_$dart_dartClosure"))
s($,"fq","dn",()=>{var r=null
return A.d([A.F(B.z,0,-0.2),A.F(B.y,0,0.2),A.F(B.p,0,r),A.F(B.i,2,-0.2),A.F(B.p,2,0.35),A.F(B.o,2,r),A.F(B.i,4,-0.2),A.F(B.j,4,-0.1),A.F(B.o,4,0),A.F(B.j,4,r),A.F(B.i,10,-0.2),A.F(B.j,10,r),A.F(B.i,r,r)],A.U("f<bc>"))})
s($,"fp","dm",()=>{var r=A.U("f<ax>")
return A.dH([B.j,A.d([A.G(B.k,0.02),A.G(B.h,0.03),A.G(B.l,0.09)],r),B.o,A.d([A.G(B.h,0.02),A.G(B.l,0.02),A.G(B.k,0.04)],r),B.i,A.d([A.G(B.k,0.02),A.G(B.l,0.03),A.G(B.h,0.05)],r),B.p,A.d([A.G(B.h,0.1)],r),B.y,A.d([A.G(B.h,0.03)],r),B.z,A.d([A.G(B.h,0.05)],r)],A.U("I"),A.U("j<ax>"))})
s($,"fb","dk",()=>A.d([A.p(5,2),A.p(2,5),A.p(-5,2),A.p(-2,5),A.p(5,-2),A.p(2,-5),A.p(-5,-2),A.p(-2,-5)],A.U("f<r>")))
s($,"fa","dj",()=>A.d([A.p(1,0),A.p(0,1),A.p(1,-1),A.p(-1,1),A.p(1,1),A.p(0,0),A.p(2,0),A.p(0,2)],A.U("f<r>")))
t($,"fd","dl",()=>A.p(-0.211324865405187,-0.211324865405187))
t($,"fc","cv",()=>A.p(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.o,DOMError:J.o,ErrorEvent:J.o,Event:J.o,InputEvent:J.o,SubmitEvent:J.o,MediaError:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,GeolocationPositionError:J.o,SensorErrorEvent:J.o,SpeechRecognitionError:J.o,ArrayBufferView:A.b6,Float32Array:A.b4,Int32Array:A.b5,DOMException:A.bp})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,DOMException:true})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.au.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.av.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.f2
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=jsregionworker.js.map
