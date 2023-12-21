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
a(hunkHelpers,v,w,$)}var A={cl:function cl(){},
Q(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
co(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cX(a,b,c){return A.co(A.Q(A.Q(c,a),b))},
dm(a){var t,s
for(t=$.J.length,s=0;s<t;++s)if(a===$.J[s])return!0
return!1},
e_(a,b,c){A.bd(a,0,J.cg(a)-1,b,c)},
bd(a,b,c,d,e){if(c-b<=32)A.dZ(a,b,c,d,e)
else A.dY(a,b,c,d,e)},
dZ(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bs(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.u()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
dY(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.a.G(a4-a3+1,6),j=a3+k,i=a4-k,h=B.a.G(a3+a4,2),g=h-k,f=h+k,e=J.bs(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.u()
if(a1>0){t=a0
a0=a
a=t}e.j(a2,j,d)
e.j(a2,h,b)
e.j(a2,i,a0)
e.j(a2,g,e.h(a2,a3))
e.j(a2,f,e.h(a2,a4))
s=a3+1
r=a4-1
if(J.a3(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.bd(a2,a3,s-2,a5,a6)
A.bd(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a3(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a3(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.bd(a2,s,r,a5,a6)}else A.bd(a2,s,r,a5,a6)},
b4:function b4(a){this.a=a},
bQ:function bQ(){},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
M:function M(){},
ae:function ae(a){this.a=a},
ds(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fn(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aV(a)
return t},
ba(a){var t,s=$.cT
if(s==null)s=$.cT=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bO(a){return A.dS(a)},
dS(a){var t,s,r,q
if(a instanceof A.i)return A.t(A.aS(a),null)
t=J.H(a)
if(t===B.dl||t===B.dn||u.C.b(a)){s=B.j(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.t(A.aS(a),null)},
cU(a){if(a==null||typeof a=="number"||A.cu(a))return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.L)return a.i(0)
if(a instanceof A.U)return a.a6(!0)
return"Instance of '"+A.bO(a)+"'"},
P(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.b.a7(t,b)
r.b=""
if(c!=null&&c.a!==0)c.D(0,new A.bN(r,s,t))
return J.dx(a,new A.b2(B.dw,0,t,s,0))},
dT(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.dR(a,b,c)},
dR(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.cm(b,!0,u.z),g=h.length,f=a.$R
if(g<f)return A.P(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.H(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.P(a,h,c)
if(g===f)return p.apply(a,h)
return A.P(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.P(a,h,c)
o=f+r.length
if(g>o)return A.P(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.cm(h,!0,u.z)
B.b.a7(h,n)}return p.apply(a,h)}else{if(g>f)return A.P(a,h,c)
if(h===b)h=A.cm(h,!0,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.aU)(m),++l){k=r[A.aQ(m[l])]
if(B.l===k)return A.P(a,h,c)
B.b.l(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.aU)(m),++l){i=A.aQ(m[l])
if(c.R(i)){++j
B.b.l(h,c.h(0,i))}else{k=r[i]
if(B.l===k)return A.P(a,h,c)
B.b.l(h,k)}}if(j!==c.a)return A.P(a,h,c)}return p.apply(a,h)}},
e(a,b){if(a==null)J.cg(a)
throw A.b(A.br(a,b))},
br(a,b){var t,s="index"
if(!A.c6(b))return new A.a4(!0,b,s,null)
t=J.cg(a)
if(b<0||b>=t)return A.dI(b,t,a,s)
return A.dV(b,s)},
b(a){return A.dl(new Error(),a)},
dl(a,b){var t
if(b==null)b=new A.bS()
a.dartException=b
t=A.f8
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
f8(){return J.aV(this.dartException)},
a1(a){throw A.b(a)},
dr(a,b){throw A.dl(b,a)},
aU(a){throw A.b(A.al(a))},
dn(a){if(a==null)return J.K(a)
if(typeof a=="object")return A.ba(a)
return J.K(a)},
dG(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.be().constructor.prototype):Object.create(new A.a5(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cH(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dC(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cH(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dA)}throw A.b("Error in functionType of tearoff")},
dD(a,b,c,d){var t=A.cG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cH(a,b,c,d){var t,s
if(c)return A.dF(a,b,d)
t=b.length
s=A.dD(t,d,a,b)
return s},
dE(a,b,c,d){var t=A.cG,s=A.dB
switch(b?-1:a){case 0:throw A.b(new A.bP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dF(a,b,c){var t,s
if($.cE==null)$.cE=A.cD("interceptor")
if($.cF==null)$.cF=A.cD("receiver")
t=b.length
s=A.dE(t,c,a,b)
return s},
cw(a){return A.dG(a)},
dA(a,b){return A.aO(v.typeUniverse,A.aS(a.a),b)},
cG(a){return a.a},
dB(a){return a.b},
cD(a){var t,s,r,q=new A.a5("receiver","interceptor"),p=J.ck(Object.getOwnPropertyNames(q),u.O)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dy("Field name "+a+" not found."))},
eP(a){if(a==null)A.eO("boolean expression must not be null")
return a},
eO(a){throw A.b(new A.bV(a))},
f6(a){throw A.b(new A.bW(a))},
eV(a){return v.getIsolateTag(a)},
f2(a){var t,s,r,q,p,o=A.aQ($.dk.$1(a)),n=$.c7[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cb[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.en($.di.$2(a,o))
if(r!=null){n=$.c7[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cb[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cd(t)
$.c7[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cb[o]=t
return t}if(q==="-"){p=A.cd(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dp(a,t)
if(q==="*")throw A.b(A.cY(o))
if(v.leafTags[o]===true){p=A.cd(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dp(a,t)},
dp(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cz(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cd(a){return J.cz(a,!1,null,!!a.$ia9)},
f4(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cd(t)
else return J.cz(t,c,null,null)},
eZ(){if(!0===$.cy)return
$.cy=!0
A.f_()},
f_(){var t,s,r,q,p,o,n,m
$.c7=Object.create(null)
$.cb=Object.create(null)
A.eY()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dq.$1(p)
if(o!=null){n=A.f4(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eY(){var t,s,r,q,p,o,n=B.u()
n=A.ai(B.v,A.ai(B.w,A.ai(B.k,A.ai(B.k,A.ai(B.x,A.ai(B.y,A.ai(B.z(B.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dk=new A.c8(q)
$.di=new A.c9(p)
$.dq=new A.ca(o)},
ai(a,b){return a(b)||b},
eQ(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aI:function aI(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
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
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(){},
aZ:function aZ(){},
bh:function bh(){},
be:function be(){},
a5:function a5(a,b){this.a=a
this.b=b},
bW:function bW(a){this.a=a},
bP:function bP(a){this.a=a},
bV:function bV(a){this.a=a},
c2:function c2(){},
ar:function ar(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bC:function bC(a,b){this.a=a
this.b=b
this.c=null},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
U:function U(){},
a_:function a_(){},
er(a){return a},
c5(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.br(b,a))},
b8:function b8(){},
ab:function ab(){},
au:function au(){},
av:function av(){},
b6:function b6(){},
b7:function b7(){},
aE:function aE(){},
aF:function aF(){},
aG:function aG(){},
aH:function aH(){},
cV(a,b){var t=b.c
return t==null?b.c=A.cr(a,b.y,!0):t},
cn(a,b){var t=b.c
return t==null?b.c=A.aM(a,"cJ",[b.y]):t},
cW(a){var t=a.x
if(t===6||t===7||t===8)return A.cW(a.y)
return t===12||t===13},
dX(a){return a.at},
ak(a){return A.bo(v.typeUniverse,a,!1)},
V(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.d8(a,s,!0)
case 7:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.cr(a,s,!0)
case 8:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.d7(a,s,!0)
case 9:r=b.z
q=A.aR(a,r,c,a0)
if(q===r)return b
return A.aM(a,b.y,q)
case 10:p=b.y
o=A.V(a,p,c,a0)
n=b.z
m=A.aR(a,n,c,a0)
if(o===p&&m===n)return b
return A.cp(a,o,m)
case 12:l=b.y
k=A.V(a,l,c,a0)
j=b.z
i=A.eK(a,j,c,a0)
if(k===l&&i===j)return b
return A.d6(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aR(a,h,c,a0)
p=b.y
o=A.V(a,p,c,a0)
if(g===h&&o===p)return b
return A.cq(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.aY("Attempted to substitute unexpected RTI kind "+d))}},
aR(a,b,c,d){var t,s,r,q,p=b.length,o=A.c4(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.V(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eL(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.c4(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.V(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eK(a,b,c,d){var t,s=b.a,r=A.aR(a,s,c,d),q=b.b,p=A.aR(a,q,c,d),o=b.c,n=A.eL(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bj()
t.a=r
t.b=p
t.c=n
return t},
j(a,b){a[v.arrayRti]=b
return a},
dj(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eX(s)
t=a.$S()
return t}return null},
f0(a,b){var t
if(A.cW(b))if(a instanceof A.L){t=A.dj(a)
if(t!=null)return t}return A.aS(a)},
aS(a){if(a instanceof A.i)return A.G(a)
if(Array.isArray(a))return A.E(a)
return A.ct(J.H(a))},
E(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
G(a){var t=a.$ti
return t!=null?t:A.ct(a)},
ct(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ey(a,t)},
ey(a,b){var t=a instanceof A.L?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ei(v.typeUniverse,t.name)
b.$ccache=s
return s},
eX(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bo(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eW(a){return A.a0(A.G(a))},
cv(a){var t
if(a instanceof A.U)return A.eS(a.$r,a.a4())
t=a instanceof A.L?A.dj(a):null
if(t!=null)return t
if(u.t.b(a))return J.dw(a).a
if(Array.isArray(a))return A.E(a)
return A.aS(a)},
a0(a){var t=a.w
return t==null?a.w=A.dc(a):t},
dc(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.c3(a)
t=A.bo(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dc(t):s},
eS(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.e(r,0)
t=A.aO(v.typeUniverse,A.cv(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.e(r,s)
t=A.d9(v.typeUniverse,t,A.cv(r[s]))}return A.aO(v.typeUniverse,t,a)},
cA(a){return A.a0(A.bo(v.typeUniverse,a,!1))},
ex(a){var t,s,r,q,p,o=this
if(o===u.K)return A.F(o,a,A.eE)
if(!A.I(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.F(o,a,A.eI)
t=o.x
if(t===7)return A.F(o,a,A.ev)
if(t===1)return A.F(o,a,A.dg)
s=t===6?o.y:o
t=s.x
if(t===8)return A.F(o,a,A.eA)
if(s===u.S)r=A.c6
else if(s===u.i||s===u.H)r=A.eD
else if(s===u.N)r=A.eG
else r=s===u.y?A.cu:null
if(r!=null)return A.F(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f1)){o.r="$i"+q
if(q==="h")return A.F(o,a,A.eC)
return A.F(o,a,A.eH)}}else if(t===11){p=A.eQ(s.y,s.z)
return A.F(o,a,p==null?A.dg:p)}return A.F(o,a,A.et)},
F(a,b,c){a.b=c
return a.b(b)},
ew(a){var t,s=this,r=A.es
if(!A.I(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eo
else if(s===u.K)r=A.em
else{t=A.aT(s)
if(t)r=A.eu}s.a=r
return s.a(a)},
bq(a){var t,s=a.x
if(!A.I(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bq(a.y)))t=s===8&&A.bq(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
et(a){var t=this
if(a==null)return A.bq(t)
return A.k(v.typeUniverse,A.f0(a,t),null,t,null)},
ev(a){if(a==null)return!0
return this.y.b(a)},
eH(a){var t,s=this
if(a==null)return A.bq(s)
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.H(a)[t]},
eC(a){var t,s=this
if(a==null)return A.bq(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.H(a)[t]},
es(a){var t,s=this
if(a==null){t=A.aT(s)
if(t)return a}else if(s.b(a))return a
A.dd(a,s)},
eu(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dd(a,t)},
dd(a,b){throw A.b(A.e8(A.cZ(a,A.t(b,null))))},
cZ(a,b){return A.W(a)+": type '"+A.t(A.cv(a),null)+"' is not a subtype of type '"+b+"'"},
e8(a){return new A.bn("TypeError: "+a)},
r(a,b){return new A.bn("TypeError: "+A.cZ(a,b))},
eA(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cn(v.typeUniverse,s).b(a)},
eE(a){return a!=null},
em(a){if(a!=null)return a
throw A.b(A.r(a,"Object"))},
eI(a){return!0},
eo(a){return a},
dg(a){return!1},
cu(a){return!0===a||!1===a},
fd(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.r(a,"bool"))},
ff(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool"))},
fe(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool?"))},
cs(a){if(typeof a=="number")return a
throw A.b(A.r(a,"double"))},
fh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double"))},
fg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double?"))},
c6(a){return typeof a=="number"&&Math.floor(a)===a},
bp(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.r(a,"int"))},
fj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int"))},
fi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int?"))},
eD(a){return typeof a=="number"},
ek(a){if(typeof a=="number")return a
throw A.b(A.r(a,"num"))},
fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num"))},
el(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num?"))},
eG(a){return typeof a=="string"},
aQ(a){if(typeof a=="string")return a
throw A.b(A.r(a,"String"))},
fl(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String"))},
en(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String?"))},
dh(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.t(a[r],b)
return t},
eJ(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dh(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.t(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
de(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.j([],u.c)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.b.l(a4,"T"+(r+q))
for(p=u.O,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.e(a4,k)
n=B.d.F(n+m,a4[k])
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
if(m===9){q=A.eM(a.y)
p=a.z
return p.length>0?q+("<"+A.dh(p,b)+">"):q}if(m===11)return A.eJ(a,b)
if(m===12)return A.de(a,b,null)
if(m===13)return A.de(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.e(b,o)
return b[o]}return"?"},
eM(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ej(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ei(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bo(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aN(a,5,"#")
r=A.c4(t)
for(q=0;q<t;++q)r[q]=s
p=A.aM(a,b,r)
o[b]=p
return p}else return n},
eh(a,b){return A.da(a.tR,b)},
eg(a,b){return A.da(a.eT,b)},
bo(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.d4(A.d2(a,null,b,c))
s.set(b,t)
return t},
aO(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.d4(A.d2(a,b,c,!0))
r.set(c,s)
return s},
d9(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cp(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
D(a,b){b.a=A.ew
b.b=A.ex
return b},
aN(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.y(null,null)
t.x=b
t.at=c
s=A.D(a,t)
a.eC.set(c,s)
return s},
d8(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.ed(a,b,s,c)
a.eC.set(s,t)
return t},
ed(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.y(null,null)
r.x=6
r.y=b
r.at=c
return A.D(a,r)},
cr(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ec(a,b,s,c)
a.eC.set(s,t)
return t},
ec(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.I(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aT(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aT(r.y))return r
else return A.cV(a,b)}}q=new A.y(null,null)
q.x=7
q.y=b
q.at=c
return A.D(a,q)},
d7(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ea(a,b,s,c)
a.eC.set(s,t)
return t},
ea(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.I(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aM(a,"cJ",[b])
else if(b===u.P||b===u.T)return u.u}r=new A.y(null,null)
r.x=8
r.y=b
r.at=c
return A.D(a,r)},
ee(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=14
t.y=b
t.at=r
s=A.D(a,t)
a.eC.set(r,s)
return s},
aL(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e9(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aM(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aL(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.y(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.D(a,s)
a.eC.set(q,r)
return r},
cp(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aL(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.D(a,p)
a.eC.set(r,o)
return o},
ef(a,b,c){var t,s,r="+"+(b+"("+A.aL(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.D(a,t)
a.eC.set(r,s)
return s},
d6(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aL(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aL(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e9(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.y(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.D(a,q)
a.eC.set(s,p)
return p},
cq(a,b,c,d){var t,s=b.at+("<"+A.aL(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eb(a,b,c,s,d)
a.eC.set(s,t)
return t},
eb(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.c4(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.V(a,b,s,0)
n=A.aR(a,c,s,0)
return A.cq(a,o,n,c!==n)}}m=new A.y(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.D(a,m)},
d2(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d4(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.e3(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.d3(a,s,m,l,!1)
else if(r===46)s=A.d3(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.T(a.u,a.e,l.pop()))
break
case 94:l.push(A.ee(a.u,l.pop()))
break
case 35:l.push(A.aN(a.u,5,"#"))
break
case 64:l.push(A.aN(a.u,2,"@"))
break
case 126:l.push(A.aN(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.e5(a,l)
break
case 38:A.e4(a,l)
break
case 42:q=a.u
l.push(A.d8(q,A.T(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cr(q,A.T(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.d7(q,A.T(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.e2(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.d5(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.e7(a.u,a.e,p)
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
return A.T(a.u,a.e,n)},
e3(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d3(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.ej(t,p.y)[q]
if(o==null)A.a1('No "'+q+'" in "'+A.dX(p)+'"')
d.push(A.aO(t,p,o))}else d.push(q)
return n},
e5(a,b){var t,s=a.u,r=A.d1(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aM(s,q,r))
else{t=A.T(s,a.e,q)
switch(t.x){case 12:b.push(A.cq(s,t,r,a.n))
break
default:b.push(A.cp(s,t,r))
break}}},
e2(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.d1(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.T(n,a.e,m)
p=new A.bj()
p.a=r
p.b=t
p.c=s
b.push(A.d6(n,q,p))
return
case-4:b.push(A.ef(n,b.pop(),r))
return
default:throw A.b(A.aY("Unexpected state under `()`: "+A.l(m)))}},
e4(a,b){var t=b.pop()
if(0===t){b.push(A.aN(a.u,1,"0&"))
return}if(1===t){b.push(A.aN(a.u,4,"1&"))
return}throw A.b(A.aY("Unexpected extended operation "+A.l(t)))},
d1(a,b){var t=b.splice(a.p)
A.d5(a.u,a.e,t)
a.p=b.pop()
return t},
T(a,b,c){if(typeof c=="string")return A.aM(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e6(a,b,c)}else return c},
d5(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.T(a,b,c[t])},
e7(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.T(a,b,c[t])},
e6(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.aY("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.aY("Bad index "+c+" for "+b.i(0)))},
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
if(q===6){t=A.cV(a,d)
return A.k(a,b,c,t,e)}if(s===8){if(!A.k(a,b.y,c,d,e))return!1
return A.k(a,A.cn(a,b),c,d,e)}if(s===7){t=A.k(a,u.P,c,d,e)
return t&&A.k(a,b.y,c,d,e)}if(q===8){if(A.k(a,b,c,d.y,e))return!0
return A.k(a,b,c,A.cn(a,d),e)}if(q===7){t=A.k(a,b,c,u.P,e)
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
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.df(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.df(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eB(a,b,c,d,e)}if(p&&q===11)return A.eF(a,b,c,d,e)
return!1},
df(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eB(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aO(a,b,s[p])
return A.db(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.db(a,o,null,c,n,e)},
db(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.k(a,s,d,r,f))return!1}return!0},
eF(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
aT(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.I(a))if(s!==7)if(!(s===6&&A.aT(a.y)))t=s===8&&A.aT(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f1(a){var t
if(!A.I(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
I(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.O},
da(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
c4(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bj:function bj(){this.c=this.b=this.a=null},
c3:function c3(a){this.a=a},
bY:function bY(){},
bn:function bn(a){this.a=a},
dH(a){return new A.aD(a.m("aD<0>"))},
d_(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bD(a){var t,s={}
if(A.dm(a))return"{...}"
t=new A.aA("")
try{B.b.l($.J,a)
t.a+="{"
s.a=!0
a.D(0,new A.bE(s,t))
t.a+="}"}finally{if(0>=$.J.length)return A.e($.J,-1)
$.J.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aD:function aD(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
A:function A(){},
at:function at(){},
bE:function bE(a,b){this.a=a
this.b=b},
aP:function aP(){},
aa:function aa(){},
aC:function aC(){},
ad:function ad(){},
aK:function aK(){},
ah:function ah(){},
as(a,b,c,d){var t,s=J.dM(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
cP(a,b,c){var t,s,r=A.j([],c.m("f<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aU)(a),++s)B.b.l(r,c.a(a[s]))
if(b)return r
return J.ck(r,c)},
cm(a,b,c){var t=A.dO(a,c)
return t},
dO(a,b){var t,s
if(Array.isArray(a))return A.j(a.slice(0),b.m("f<0>"))
t=A.j([],b.m("f<0>"))
for(s=J.cC(a);s.E();)B.b.l(t,s.gC())
return t},
e0(a,b,c){var t=J.cC(b)
if(!t.E())return a
if(c.length===0){do a+=A.l(t.gC())
while(t.E())}else{a+=A.l(t.gC())
for(;t.E();)a=a+c+A.l(t.gC())}return a},
cQ(a,b){return new A.bF(a,b.gaB(),b.gaE(),b.gaC())},
W(a){if(typeof a=="number"||A.cu(a)||a==null)return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cU(a)},
aY(a){return new A.aX(a)},
dy(a){return new A.a4(!1,null,null,a)},
dz(a,b,c){return new A.a4(!0,a,b,c)},
dU(a){var t=null
return new A.ay(t,t,!1,t,t,a)},
dV(a,b){return new A.ay(null,null,!0,a,b,"Value not in range")},
bb(a,b,c,d,e){return new A.ay(b,c,!0,a,d,"Invalid value")},
dW(a,b,c){if(0>a||a>c)throw A.b(A.bb(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.bb(b,a,c,"end",null))
return b}return c},
dI(a,b,c,d){return new A.bz(b,!0,a,d,"Index out of range")},
C(a){return new A.bU(a)},
cY(a){return new A.bT(a)},
al(a){return new A.bu(a)},
cI(a,b,c){return new A.by(a,b,c)},
cj(a,b,c){var t,s
if(A.dm(a))return b+"..."+c
t=new A.aA(b)
B.b.l($.J,a)
try{s=t
s.a=A.e0(s.a,a,", ")}finally{if(0>=$.J.length)return A.e($.J,-1)
$.J.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dP(a,b,c,d){var t
if(B.f===c)return A.cX(B.a.gk(a),J.K(b),$.cf())
if(B.f===d){t=B.a.gk(a)
b=J.K(b)
c=J.K(c)
return A.co(A.Q(A.Q(A.Q($.cf(),t),b),c))}t=B.a.gk(a)
b=J.K(b)
c=J.K(c)
d=J.K(d)
d=A.co(A.Q(A.Q(A.Q(A.Q($.cf(),t),b),c),d))
return d},
bG:function bG(a,b){this.a=a
this.b=b},
bX:function bX(){},
bw:function bw(){},
aX:function aX(a){this.a=a},
bS:function bS(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d,e,f){var _=this
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
bZ:function bZ(a){this.a=a},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(){},
i:function i(){},
aA:function aA(a){this.a=a},
bv:function bv(){},
c_:function c_(){},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a,b){this.a=$
this.b=a
this.c=b},
b0:function b0(a,b){this.a=a
this.b=b},
B:function B(){},
bf:function bf(){},
bc:function bc(a,b){this.a=a
this.b=b},
R:function R(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=e},
aB:function aB(a,b){this.c=a
this.b=b},
bi:function bi(){},
bg:function bg(){},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
f5(a){var t,s,r,q,p,o=A.dH(u.N)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.aU)(a),++s){r=a[s]
q=r.b.V()
p=B.c.n(r.c)
o.l(0,""+B.c.n(q.a)+","+B.c.n(q.b)+","+p)}t=A.E(a).m("aj(1)").a(new A.ce(o))
if(!!a.fixed$length)A.a1(A.C("removeWhere"))
B.b.au(a,t,!0)},
ce:function ce(a){this.a=a},
f3(){self.jsregionworker=A.eN(new A.cc(),u.e)},
cc:function cc(){},
bR:function bR(a){this.a=a
this.b=$},
az:function az(a,b){this.d=a
this.b=b},
cK(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ae(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cI("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.eR(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.a.q(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cI("Not radix digit",a,t))}if(s)return A.a7(0,0,0,q,p,o)
return new A.u(q&4194303,p&4194303,o&1048575)},
ci(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.a.G(a,17592186044416)
a-=s*17592186044416
r=B.a.G(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.a7(0,0,0,q,p,o):new A.u(q,p,o)},
bA(a){if(a instanceof A.u)return a
else if(A.c6(a))return A.ci(a)
throw A.b(A.dz(a,"other","not an int, Int32 or Int64"))},
dL(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
n=B.a.A(t,r)
s+=t-n*r<<10>>>0
m=B.a.A(s,r)
d+=s-m*r<<10>>>0
l=B.a.A(d,r)
c+=d-l*r<<10>>>0
k=B.a.A(c,r)
b+=c-k*r<<10>>>0
j=B.a.A(b,r)
i=B.d.af(B.a.ad(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.a.ad(h,a))+q+p+o},
a7(a,b,c,d,e,f){var t=a-d,s=b-e-(B.a.q(t,22)&1)
return new A.u(t&4194303,s&4194303,c-f-(B.a.q(s,22)&1)&1048575)},
dJ(a,b,c){var t,s,r,q,p=A.bA(b)
if(p.gaa())throw A.b(A.C("Division by zero"))
if(a.gaa())return B.m
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.a7(0,0,0,a.a,a.b,t)
if(q)p=A.a7(0,0,0,p.a,p.b,r)
return A.dK(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dK(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.a.A(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.a.A(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.a.A(q,a4)
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
c=a1-B.c.n(f-e*4194304)-(B.a.q(d,22)&1)
o=d&4194303
n=c&4194303
m=a2-B.c.n(k*a4+j*a5+i*a6+e)-(B.a.q(c,22)&1)&1048575
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
t=t+a*(B.a.q(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.a7(0,0,0,p,r,t)
return new A.u(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.u(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.m
else return A.a7(a4,a5,a6,o,n,m)
else return A.a7(0,0,0,o,n,m)},
u:function u(a,b,c){this.a=a
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
ax(a){var t=new A.bI(new Int16Array(2048),A.as(2048,B.C,!1,u.q),A.as(2048,B.a1,!1,u.h),A.as(2048,B.aQ,!1,u.U))
t.ah(a)
return t},
dQ(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.S(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.S(l,k,j,1)
A.S(p,r,q,0)
A.S(s,o,q,0)
A.S(s,r,n,0)
A.S(s+(p^1),k,j,1)
A.S(l,r+(o^1),j,1)
A.S(l,k,q+(n^1),1)
B.b.j($.dt(),t,m)}for(t=0;t<16;++t)B.b.j($.du(),t,A.d0(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.j([],u.f)
for(i=0;i<24;++i){h=B.dp[i]
l.push(new A.d(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.a.J(t,24)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bJ,l[k])}l=A.j([],u.Y)
for(i=0;i<48;++i){h=B.dr[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.a.J(t,48)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bK,l[k])}l=A.j([],u.J)
for(i=0;i<160;++i){h=B.dq[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.a.J(t,160)
if(!(k<l.length))return A.e(l,k)
B.b.l($.bL,l[k])}},
S(a,b,c,d){return new A.bl()},
d0(a,b,c,d){var t=new A.bm(),s=(a+b+c+d)*0.309016994374947
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
bl:function bl(){},
bm:function bm(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
f7(a){A.dr(new A.b4("Field '"+a+"' has been assigned during initialization."),new Error())},
a2(){A.dr(new A.b4("Field '' has not been initialized."),new Error())},
eq(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.ep,a)
t[$.cB()]=a
a.$dart_jsFunction=t
return t},
ep(a,b){u.j.a(b)
u.Z.a(a)
return A.dT(a,b,null)},
eN(a,b){if(typeof a=="function")return a
else return b.a(A.eq(a))},
e1(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<10;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.I(a)
r=s.a
p=c.a
o=c.b
n=p*2-2*o
o=p+o
p=new A.b0(n,o)
m=new A.R(r,p,q,1,B.B.aD(1e9))
l=new A.bt(1,q)
l.sai(u.X.a(p.V()))
l.a===$&&A.a2()
m.f=l
r=r.c.d
k=new Float32Array(A.er(A.j([32*r,0,32*(r+1)-0,32],u.n)))
j=Math.cos(0)*0.12656738281
i=Math.sin(0)*0.12656738281
r=i*16
h=new Float32Array(4)
h[0]=j
h[1]=i
h[2]=n-(q*2-2*q)+0+-j*16+r
h[3]=o-(q+q)+2-r-j*16
r=new A.bc(h,k)
m.d=u.R.a(r)
return m}}throw A.b(new A.bZ("No tile type found for elevation: "+A.l(a)+", moisture: "+A.l(b)+". Fix the rules!"))},
eR(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cz(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cx(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cy==null){A.eZ()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.cY("Return interceptor for "+A.l(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c0
if(p==null)p=$.c0=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f2(a)
if(q!=null)return q
if(typeof a=="function")return B.dm
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.c0
if(p==null)p=$.c0=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
dM(a,b){if(a<0||a>4294967295)throw A.b(A.bb(a,0,4294967295,"length",null))
return J.cN(new Array(a),b)},
cM(a,b){if(a<0||a>4294967295)throw A.b(A.bb(a,0,4294967295,"length",null))
return J.cN(new Array(a),b)},
cN(a,b){return J.ck(A.j(a,b.m("f<0>")),b)},
ck(a,b){a.fixed$length=Array
return a},
cO(a){a.fixed$length=Array
a.immutable$list=Array
return a},
dN(a,b){var t=u.s
return J.dv(t.a(a),t.a(b))},
H(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ap.prototype
return J.b3.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.aq.prototype
if(typeof a=="boolean")return J.b1.prototype
if(Array.isArray(a))return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.i)return a
return J.cx(a)},
bs(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(Array.isArray(a))return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.i)return a
return J.cx(a)},
eT(a){if(a==null)return a
if(Array.isArray(a))return J.f.prototype
if(typeof a!="object"){if(typeof a=="function")return J.N.prototype
return a}if(a instanceof A.i)return a
return J.cx(a)},
eU(a){if(typeof a=="number")return J.a8.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.ag.prototype
return a},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).t(a,b)},
dv(a,b){return J.eU(a).H(a,b)},
K(a){return J.H(a).gk(a)},
cC(a){return J.eT(a).gU(a)},
cg(a){return J.bs(a).gp(a)},
dw(a){return J.H(a).gv(a)},
dx(a,b){return J.H(a).ac(a,b)},
aV(a){return J.H(a).i(a)},
b_:function b_(){},
b1:function b1(){},
aq:function aq(){},
o:function o(){},
Y:function Y(){},
b9:function b9(){},
ag:function ag(){},
N:function N(){},
f:function f(a){this.$ti=a},
bB:function bB(a){this.$ti=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(){},
ap:function ap(){},
b3:function b3(){},
X:function X(){}},B={}
var w=[A,J,B]
var $={}
A.cl.prototype={}
J.b_.prototype={
t(a,b){return a===b},
gk(a){return A.ba(a)},
i(a){return"Instance of '"+A.bO(a)+"'"},
ac(a,b){throw A.b(A.cQ(a,u.o.a(b)))},
gv(a){return A.a0(A.ct(this))}}
J.b1.prototype={
i(a){return String(a)},
gk(a){return a?519018:218159},
gv(a){return A.a0(u.y)},
$iw:1,
$iaj:1}
J.aq.prototype={
t(a,b){return null==b},
i(a){return"null"},
gk(a){return 0},
$iw:1}
J.o.prototype={}
J.Y.prototype={
gk(a){return 0},
i(a){return String(a)}}
J.b9.prototype={}
J.ag.prototype={}
J.N.prototype={
i(a){var t=a[$.cB()]
if(t==null)return this.ag(a)
return"JavaScript function for "+J.aV(t)},
$ia6:1}
J.f.prototype={
l(a,b){A.E(a).c.a(b)
if(!!a.fixed$length)A.a1(A.C("add"))
a.push(b)},
au(a,b,c){var t,s,r,q,p
A.E(a).m("aj(1)").a(b)
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(!A.eP(b.$1(q)))t.push(q)
if(a.length!==s)throw A.b(A.al(a))}p=t.length
if(p===s)return
this.sp(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
a7(a,b){A.E(a).m("q<1>").a(b)
if(!!a.fixed$length)A.a1(A.C("addAll"))
this.ak(a,b)
return},
ak(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.al(a))
for(s=0;s<t;++s)a.push(b[s])},
i(a){return A.cj(a,"[","]")},
gU(a){return new J.aW(a,a.length,A.E(a).m("aW<1>"))},
gk(a){return A.ba(a)},
gp(a){return a.length},
sp(a,b){if(!!a.fixed$length)A.a1(A.C("set length"))
if(b>a.length)A.E(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.br(a,b))
return a[b]},
j(a,b,c){A.E(a).c.a(c)
if(!!a.immutable$list)A.a1(A.C("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.br(a,b))
a[b]=c},
$iq:1,
$ih:1}
J.bB.prototype={}
J.aW.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.aU(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa0(null)
return!1}s.sa0(r[t]);++s.c
return!0},
sa0(a){this.d=this.$ti.m("1?").a(a)}}
J.a8.prototype={
H(a,b){var t
A.ek(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gT(b)
if(this.gT(a)===t)return 0
if(this.gT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gT(a){return a===0?1/a<0:a<0},
n(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.C(""+a+".toInt()"))},
I(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.C(""+a+".floor()"))},
aF(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ad(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.bb(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.e(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.a1(A.C("Unexpected toString result: "+t))
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
A(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.a5(a,b)},
G(a,b){return(a|0)===a?a/b|0:this.a5(a,b)},
a5(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.C("Result of truncating division is "+A.l(t)+": "+A.l(a)+" ~/ "+b))},
q(a,b){var t
if(a>0)t=this.av(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
av(a,b){return b>31?0:a>>>b},
gv(a){return A.a0(u.H)},
$ip:1,
$im:1,
$ix:1}
J.ap.prototype={
gv(a){return A.a0(u.S)},
$iw:1,
$in:1}
J.b3.prototype={
gv(a){return A.a0(u.i)},
$iw:1}
J.X.prototype={
F(a,b){return a+b},
ae(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
K(a,b,c){return a.substring(b,A.dW(b,c,a.length))},
af(a,b){return this.K(a,b,null)},
W(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.A)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
H(a,b){var t
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
gv(a){return A.a0(u.N)},
gp(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.br(a,b))
return a[b]},
$iw:1,
$ip:1,
$icS:1,
$iz:1}
A.b4.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bQ.prototype={}
A.b5.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t,s=this,r=s.a,q=J.bs(r),p=q.gp(r)
if(s.b!==p)throw A.b(A.al(r))
t=s.c
if(t>=p){s.sX(null)
return!1}s.sX(q.az(r,t));++s.c
return!0},
sX(a){this.d=this.$ti.m("1?").a(a)}}
A.M.prototype={}
A.ae.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gk(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
t(a,b){if(b==null)return!1
return b instanceof A.ae&&this.a===b.a},
$iaf:1}
A.aI.prototype={$r:"+(1,2)",$s:1}
A.aJ.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.an.prototype={}
A.am.prototype={
i(a){return A.bD(this)},
$iO:1}
A.ao.prototype={
gp(a){return this.b.length},
R(a){return!1},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
D(a,b){var t,s,r,q,p=this
p.$ti.m("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.b2.prototype={
gaB(){var t=this.a
return t},
gaE(){var t,s,r,q,p=this
if(p.c===1)return B.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.p
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.e(t,q)
r.push(t[q])}return J.cO(r)},
gaC(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.q
p=new A.ar(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.e(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.e(r,m)
p.j(0,new A.ae(n),r[m])}return new A.an(p,u.a)},
$icL:1}
A.bN.prototype={
$2(a,b){var t
A.aQ(a)
t=this.a
t.b=t.b+"$"+a
B.b.l(this.b,a)
B.b.l(this.c,b);++t.a},
$S:0}
A.L.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ds(s==null?"unknown":s)+"'"},
$ia6:1,
gaG(){return this},
$C:"$1",
$R:1,
$D:null}
A.aZ.prototype={$C:"$2",$R:2}
A.bh.prototype={}
A.be.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ds(t)+"'"}}
A.a5.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a5))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dn(this.a)^A.ba(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bO(this.a)+"'")}}
A.bW.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bP.prototype={
i(a){return"RuntimeError: "+this.a}}
A.bV.prototype={
i(a){return"Assertion failed: "+A.W(this.a)}}
A.c2.prototype={}
A.ar.prototype={
gp(a){return this.a},
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
return r}else return this.aA(b)},
aA(a){var t,s,r=this.d
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
D(a,b){var t,s,r=this
A.G(r).m("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.al(r))
t=t.c}},
Y(a,b,c){var t,s=A.G(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.O(b,c)
else t.b=c},
O(a,b){var t=this,s=A.G(t),r=new A.bC(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
a8(a){return J.K(a)&1073741823},
a9(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a3(a[s].a,b))return s
return-1},
i(a){return A.bD(this)},
N(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bC.prototype={}
A.c8.prototype={
$1(a){return this.a(a)},
$S:1}
A.c9.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.ca.prototype={
$1(a){return this.a(A.aQ(a))},
$S:3}
A.U.prototype={
i(a){return this.a6(!1)},
a6(a){var t,s,r,q,p,o=this.ar(),n=this.a4(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.e(n,r)
p=n[r]
m=a?m+A.cU(p):m+A.l(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ar(){var t,s=this.$s
for(;$.c1.length<=s;)B.b.l($.c1,null)
t=$.c1[s]
if(t==null){t=this.ao()
B.b.j($.c1,s,t)}return t},
ao(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.j(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.b.j(l,r,s[t])}}return J.cO(A.cP(l,!1,u.K))}}
A.a_.prototype={
a4(){return[this.a,this.b]},
t(a,b){if(b==null)return!1
return b instanceof A.a_&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gk(a){return A.dP(this.$s,this.a,this.b,B.f)}}
A.b8.prototype={}
A.ab.prototype={
gp(a){return a.length},
$ia9:1}
A.au.prototype={
h(a,b){A.c5(b,a,a.length)
return a[b]},
j(a,b,c){A.cs(c)
A.c5(b,a,a.length)
a[b]=c},
$iq:1,
$ih:1}
A.av.prototype={
j(a,b,c){A.bp(c)
A.c5(b,a,a.length)
a[b]=c},
$iq:1,
$ih:1}
A.b6.prototype={
gv(a){return B.dx},
$iw:1,
$ibx:1}
A.b7.prototype={
gv(a){return B.dy},
h(a,b){A.c5(b,a,a.length)
return a[b]},
$iw:1,
$ich:1}
A.aE.prototype={}
A.aF.prototype={}
A.aG.prototype={}
A.aH.prototype={}
A.y.prototype={
m(a){return A.aO(v.typeUniverse,this,a)},
aH(a){return A.d9(v.typeUniverse,this,a)}}
A.bj.prototype={}
A.c3.prototype={
i(a){return A.t(this.a,null)}}
A.bY.prototype={
i(a){return this.a}}
A.bn.prototype={}
A.aD.prototype={
gU(a){return new A.bk(this,this.an(),A.G(this).m("bk<1>"))},
gp(a){return this.a},
P(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.ap(b)
return s}},
ap(a){var t=this.d
if(t==null)return!1
return this.a2(t[this.a_(a)],a)>=0},
l(a,b){var t,s,r=this
A.G(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.al(t==null?r.b=A.d_():t,b)}else{s=r.aj(b)
return s}},
aj(a){var t,s,r,q=this
A.G(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.d_()
s=q.a_(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a2(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
an(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.as(j.a,null,!1,u.z)
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
al(a,b){A.G(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a_(a){return B.d.gk(a)&1073741823},
a2(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a3(a[s],b))return s
return-1}}
A.bk.prototype={
gC(){var t=this.d
return t==null?this.$ti.c.a(t):t},
E(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.al(q))
else if(r>=s.length){t.sZ(null)
return!1}else{t.sZ(s[r])
t.c=r+1
return!0}},
sZ(a){this.d=this.$ti.m("1?").a(a)}}
A.A.prototype={
gU(a){return new A.b5(a,this.gp(a),A.aS(a).m("b5<A.E>"))},
az(a,b){return this.h(a,b)},
i(a){return A.cj(a,"[","]")}}
A.at.prototype={
gp(a){return this.a},
i(a){return A.bD(this)},
$iO:1}
A.bE.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.l(a)
s.a=t+": "
s.a+=A.l(b)},
$S:4}
A.aP.prototype={}
A.aa.prototype={
h(a,b){return this.a.h(0,b)},
D(a,b){this.a.D(0,this.$ti.m("~(1,2)").a(b))},
gp(a){return this.a.a},
i(a){return A.bD(this.a)},
$iO:1}
A.aC.prototype={}
A.ad.prototype={
i(a){return A.cj(this,"{","}")},
$iq:1}
A.aK.prototype={}
A.ah.prototype={}
A.bG.prototype={
$2(a,b){var t,s,r
u.m.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.W(b)
s.a=", "},
$S:5}
A.bX.prototype={
i(a){return this.a1()}}
A.bw.prototype={}
A.aX.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.W(t)
return"Assertion failed"}}
A.bS.prototype={}
A.a4.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.l(q),o=t.gM()+r+p
if(!t.a)return o
return o+t.gL()+": "+A.W(t.gS())},
gS(){return this.b}}
A.ay.prototype={
gS(){return A.el(this.b)},
gM(){return"RangeError"},
gL(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.bz.prototype={
gS(){return A.bp(this.b)},
gM(){return"RangeError"},
gL(){if(A.bp(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.bF.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aA("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.W(o)
k.a=", "}l.d.D(0,new A.bG(k,j))
n=A.W(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bU.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bT.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bu.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.W(t)+"."}}
A.bM.prototype={
i(a){return"Out of Memory"}}
A.bZ.prototype={
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
A.aw.prototype={
gk(a){return A.i.prototype.gk.call(this,this)},
i(a){return"null"}}
A.i.prototype={$ii:1,
t(a,b){return this===b},
gk(a){return A.ba(this)},
i(a){return"Instance of '"+A.bO(this)+"'"},
ac(a,b){throw A.b(A.cQ(this,u.o.a(b)))},
gv(a){return A.eW(this)},
toString(){return this.i(this)}}
A.aA.prototype={
gp(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bv.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.c_.prototype={
aD(a){if(a<=0||a>4294967296)throw A.b(A.dU("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.ac.prototype={
i(a){return"Point("+A.l(this.a)+", "+A.l(this.b)+")"},
t(a,b){if(b==null)return!1
return b instanceof A.ac&&this.a===b.a&&this.b===b.b},
gk(a){return A.cX(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.bt.prototype={
sai(a){this.a=u.X.a(a)}}
A.b0.prototype={
V(){var t=this.b,s=t/2-this.a/4
return new A.ac(t-s,s,u.X)},
t(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b0&&b.a===this.a&&b.b===this.b},
gk(a){return B.c.gk(this.a)^B.c.gk(this.b)},
i(a){return A.l(this.a)+", "+A.l(this.b)}}
A.B.prototype={
H(a,b){var t,s,r,q
u.k.a(b)
t=this.ab()
s=b.ab()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$ip:1}
A.bf.prototype={}
A.bc.prototype={}
A.R.prototype={
ab(){return new A.aJ(this.b.b,this.c)}}
A.aB.prototype={
a1(){return"TileType."+this.b}}
A.bi.prototype={}
A.bg.prototype={}
A.v.prototype={}
A.bH.prototype={
aw(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a3(a4,a5),a2=a0.a3(a4,a5),a3=Math.min(20,Math.abs(-20))
for(t=a1.length,s=a2.length,r=0;r<a4;++r){q=a6+r
for(p=q*0.005,o=q*0.02,n=q*0.08,m=0;m<a4;++m){l=a7+m
k=a0.a
k===$&&A.a2()
j=l*0.005
i=0.366025403784439*(p+j)
h=p+i
g=j+i
f=k.B(h,g)
k=a0.b
k===$&&A.a2()
j=l*0.02
i=0.366025403784439*(o+j)
e=o+i
d=j+i
k=k.B(e,d)
j=a0.c
j===$&&A.a2()
c=l*0.08
i=0.366025403784439*(n+c)
b=n+i
a=c+i
f=(Math.pow((f+0.5*k+0.25*j.B(b,a))/1.75,1)-0.4)*a3
if(f<-20)f=-20
else if(f>20)f=20
if(!(r<t))return A.e(a1,r)
B.b.j(a1[r],m,B.c.aF(f))
k=a0.d
k===$&&A.a2()
k=k.B(h,g)
j=a0.e
j===$&&A.a2()
j=j.B(e,d)
c=a0.f
c===$&&A.a2()
c=c.B(b,a)
if(!(r<s))return A.e(a2,r)
B.b.j(a2[r],m,(k+0.5*j+0.25*c)/1.75)}}return new A.aI(a1,a2)},
a3(a,b){var t,s,r,q,p=J.cM(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.cM(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.ce.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.W.a(a)
t=a.b.V()
s=B.c.n(t.a)
r=B.c.n(t.b)
q=B.c.n(a.c)
p=""+s+","
o=""+q
n=""+r
m=this.a
return m.P(0,""+(s+1)+","+n+","+o)&&m.P(0,p+n+","+(q+1))&&m.P(0,p+(r+1)+","+o)},
$S:6}
A.cc.prototype={
$1(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.bg(),f=new A.bR(g),e=J.bs(a0),d=A.bp(e.h(a0,0)),c=A.bp(e.h(a0,1)),b=A.cs(e.h(a0,2)),a=A.cs(e.h(a0,3))
e=B.c.n(b)
t=B.c.n(a)
s=new A.bH(g)
s.a=A.ax(2)
s.b=A.ax(3)
s.c=A.ax(4)
s.d=A.ax(12)
s.e=A.ax(13)
s.f=A.ax(14)
f.b=s
r=s.aw(d,c,e,t)
q=f.aq(e,t,r.a,r.b)
A.f5(q)
p=A.cP(q,!0,u.W)
if(!!p.immutable$list)A.a1(A.C("sort"))
A.e_(p,J.ez(),A.E(p).c)
o=A.j([],u.l)
for(g=p.length,e=u.V,n=0;n<p.length;p.length===g||(0,A.aU)(p),++n){m=p[n]
t=m.a
l=m.b
k=m.c
j=m.e
i=m.r
h=m.d
h===$&&A.a2()
B.b.l(o,["Tile",t.b,l.a,l.b,k,j,i,A.j([h.a,h.b],e)])}return o},
$S:7}
A.bR.prototype={
aq(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=u.I
g.a(c)
g.a(d)
t=A.j([],u.Q)
for(g=c.length,s=u.X,r=u.d,q=d.length,p=0;p<g;++p){o=c[p]
if(!(p<q))return A.e(d,p)
n=d[p]
for(m=o.length,l=n.length,k=a+p,j=0;j<c[0].length;++j){if(!(j<m))return A.e(o,j)
i=B.c.I(o[j])
if(!(j<l))return A.e(n,j)
B.b.l(t,A.e1(i,n[j],new A.ac(k,b+j,s),A.j([new A.v(B.e,0,-0.2),new A.v(B.h,0,h),new A.v(B.e,2,-0.2),new A.v(B.h,2,h),new A.v(B.e,6,-0.1),new A.v(B.h,6,0),new A.v(B.t,6,h),new A.v(B.e,15,0),new A.v(B.t,15,0.4),new A.v(B.e,h,h)],r)))}}return t}}
A.az.prototype={
a1(){return"SpriteSheetItem."+this.b}}
A.u.prototype={
F(a,b){var t=A.bA(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.u(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
t(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.u)t=b
else if(A.c6(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.ci(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
H(a,b){return this.am(b)},
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
gaa(){return this.c===0&&this.b===0&&this.a===0},
gk(a){var t=this.b
return(((t&1023)<<22|this.a)^(this.c<<12|t>>>10&4095))>>>0},
n(a){var t=this.a,s=this.b,r=this.c
if((r&524288)!==0)return-(1+(~t&4194303)+4194304*(~s&4194303)+17592186044416*(~r&1048575))
else return t+4194304*s+17592186044416*r},
i(a){var t,s,r,q=this.a,p=this.b,o=this.c
if((o&524288)!==0){q=0-q
t=q&4194303
p=0-p-(B.a.q(q,22)&1)
s=p&4194303
o=0-o-(B.a.q(p,22)&1)&1048575
p=s
q=t
r="-"}else r=""
return A.dL(10,q,p,o,r)},
$ip:1}
A.d.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bI.prototype={
ah(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.cR){A.dQ()
$.cR=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.e(t,s)
t[s]=s}r=A.ci(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cK("6364136223846793005",10,!0)
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
m=A.cK("1442695040888963407",10,!0)
m.toString
r=new A.u(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).F(0,m)
m=s+1
a7=A.dJ(r.F(0,31),m,3).n(0)
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
B(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.I(a),i=B.c.I(b),h=a-j,g=b-i,f=B.c.n((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
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
A.Z.prototype={}
A.bl.prototype={}
A.bm.prototype={};(function aliases(){var t=J.Y.prototype
t.ag=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"ez","dN",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.i,null)
r(A.i,[A.cl,J.b_,J.aW,A.bw,A.bQ,A.b5,A.M,A.ae,A.U,A.aa,A.am,A.b2,A.L,A.c2,A.at,A.bC,A.y,A.bj,A.c3,A.ad,A.bk,A.A,A.aP,A.bX,A.bM,A.bZ,A.by,A.aw,A.aA,A.c_,A.ac,A.bt,A.b0,A.B,A.bc,A.bi,A.v,A.bH,A.bR,A.u,A.d,A.c,A.a,A.bI,A.Z,A.bl,A.bm])
r(J.b_,[J.b1,J.aq,J.o,J.a8,J.X])
r(J.o,[J.Y,J.f,A.b8,A.bv])
r(J.Y,[J.b9,J.ag,J.N])
s(J.bB,J.f)
r(J.a8,[J.ap,J.b3])
r(A.bw,[A.b4,A.bW,A.bP,A.aX,A.bY,A.bS,A.a4,A.bF,A.bU,A.bT,A.bu])
s(A.a_,A.U)
r(A.a_,[A.aI,A.aJ])
s(A.ah,A.aa)
s(A.aC,A.ah)
s(A.an,A.aC)
s(A.ao,A.am)
r(A.L,[A.aZ,A.bh,A.c8,A.ca,A.ce,A.cc])
r(A.aZ,[A.bN,A.c9,A.bE,A.bG])
r(A.bh,[A.be,A.a5])
s(A.bV,A.aX)
s(A.ar,A.at)
s(A.ab,A.b8)
r(A.ab,[A.aE,A.aG])
s(A.aF,A.aE)
s(A.au,A.aF)
s(A.aH,A.aG)
s(A.av,A.aH)
s(A.b6,A.au)
s(A.b7,A.av)
s(A.bn,A.bY)
s(A.aK,A.ad)
s(A.aD,A.aK)
r(A.a4,[A.ay,A.bz])
s(A.bf,A.B)
s(A.R,A.bf)
r(A.bX,[A.aB,A.az])
s(A.bg,A.bi)
t(A.aE,A.A)
t(A.aF,A.M)
t(A.aG,A.A)
t(A.aH,A.M)
t(A.ah,A.aP)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",m:"double",x:"num",z:"String",aj:"bool",aw:"Null",h:"List"},mangledNames:{},types:["~(z,@)","@(@)","@(@,z)","@(z)","~(i?,i?)","~(af,@)","aj(R)","h<h<@>?>(@)","n(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aI&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aJ&&a.b(c.a)&&b.b(c.b)}}
A.eh(v.typeUniverse,JSON.parse('{"b9":"Y","ag":"Y","N":"Y","b1":{"aj":[],"w":[]},"aq":{"w":[]},"f":{"h":["1"],"q":["1"]},"bB":{"f":["1"],"h":["1"],"q":["1"]},"a8":{"m":[],"x":[],"p":["x"]},"ap":{"m":[],"n":[],"x":[],"p":["x"],"w":[]},"b3":{"m":[],"x":[],"p":["x"],"w":[]},"X":{"z":[],"p":["z"],"cS":[],"w":[]},"ae":{"af":[]},"aI":{"a_":[],"U":[]},"aJ":{"a_":[],"U":[]},"an":{"aC":["1","2"],"ah":["1","2"],"aa":["1","2"],"aP":["1","2"],"O":["1","2"]},"am":{"O":["1","2"]},"ao":{"am":["1","2"],"O":["1","2"]},"b2":{"cL":[]},"L":{"a6":[]},"aZ":{"a6":[]},"bh":{"a6":[]},"be":{"a6":[]},"a5":{"a6":[]},"ar":{"at":["1","2"],"O":["1","2"]},"a_":{"U":[]},"ab":{"a9":["1"]},"au":{"A":["m"],"a9":["m"],"h":["m"],"q":["m"],"M":["m"]},"av":{"A":["n"],"a9":["n"],"h":["n"],"q":["n"],"M":["n"]},"b6":{"A":["m"],"bx":[],"a9":["m"],"h":["m"],"q":["m"],"M":["m"],"w":[],"A.E":"m"},"b7":{"A":["n"],"ch":[],"a9":["n"],"h":["n"],"q":["n"],"M":["n"],"w":[],"A.E":"n"},"aD":{"ad":["1"],"q":["1"]},"at":{"O":["1","2"]},"aa":{"O":["1","2"]},"aC":{"ah":["1","2"],"aa":["1","2"],"aP":["1","2"],"O":["1","2"]},"ad":{"q":["1"]},"aK":{"ad":["1"],"q":["1"]},"m":{"x":[],"p":["x"]},"n":{"x":[],"p":["x"]},"h":{"q":["1"]},"x":{"p":["x"]},"z":{"p":["z"],"cS":[]},"B":{"p":["B"]},"bf":{"B":[],"p":["B"]},"R":{"B":[],"p":["B"]},"bg":{"bi":[]},"u":{"p":["i"]},"ch":{"h":["n"],"q":["n"]},"bx":{"h":["m"],"q":["m"]}}'))
A.eg(v.typeUniverse,JSON.parse('{"ab":1,"aK":1}'))
var u=(function rtii(){var t=A.ak
return{s:t("p<@>"),a:t("an<af,@>"),Z:t("a6"),k:t("B"),q:t("d"),h:t("c"),U:t("a"),o:t("cL"),V:t("f<bx>"),f:t("f<d>"),Y:t("f<c>"),J:t("f<a>"),G:t("f<i>"),c:t("f<z>"),Q:t("f<R>"),d:t("f<v>"),n:t("f<m>"),b:t("f<@>"),l:t("f<h<@>?>"),T:t("aq"),g:t("N"),p:t("a9<@>"),B:t("ar<af,@>"),I:t("h<h<m>>"),r:t("h<m>"),j:t("h<@>"),e:t("h<h<@>?>(@)"),P:t("aw"),K:t("i"),X:t("ac<m>"),L:t("fc"),F:t("+()"),R:t("bc"),N:t("z"),m:t("af"),W:t("R"),t:t("w"),C:t("ag"),y:t("aj"),i:t("m"),z:t("@"),S:t("n"),A:t("0&*"),_:t("i*"),u:t("cJ<aw>?"),O:t("i?"),H:t("x")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dl=J.b_.prototype
B.b=J.f.prototype
B.a=J.ap.prototype
B.c=J.a8.prototype
B.d=J.X.prototype
B.dm=J.N.prototype
B.dn=J.o.prototype
B.r=J.b9.prototype
B.i=J.ag.prototype
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

B.A=new A.bM()
B.f=new A.bQ()
B.B=new A.c_()
B.l=new A.c2()
B.C=new A.d(0,0)
B.a1=new A.c(0,0,0)
B.aQ=new A.a(0,0,0,0)
B.m=new A.u(0,0,0)
B.U=new A.d(0.130526192220052,0.99144486137381)
B.X=new A.d(0.38268343236509,0.923879532511287)
B.J=new A.d(0.608761429008721,0.793353340291235)
B.a_=new A.d(0.793353340291235,0.608761429008721)
B.M=new A.d(0.923879532511287,0.38268343236509)
B.R=new A.d(0.99144486137381,0.130526192220051)
B.W=new A.d(0.99144486137381,-0.130526192220051)
B.T=new A.d(0.923879532511287,-0.38268343236509)
B.K=new A.d(0.793353340291235,-0.60876142900872)
B.E=new A.d(0.608761429008721,-0.793353340291235)
B.H=new A.d(0.38268343236509,-0.923879532511287)
B.O=new A.d(0.130526192220052,-0.99144486137381)
B.Z=new A.d(-0.130526192220052,-0.99144486137381)
B.F=new A.d(-0.38268343236509,-0.923879532511287)
B.N=new A.d(-0.608761429008721,-0.793353340291235)
B.P=new A.d(-0.793353340291235,-0.608761429008721)
B.Q=new A.d(-0.923879532511287,-0.38268343236509)
B.L=new A.d(-0.99144486137381,-0.130526192220052)
B.G=new A.d(-0.99144486137381,0.130526192220051)
B.D=new A.d(-0.923879532511287,0.38268343236509)
B.S=new A.d(-0.793353340291235,0.608761429008721)
B.I=new A.d(-0.608761429008721,0.793353340291235)
B.Y=new A.d(-0.38268343236509,0.923879532511287)
B.V=new A.d(-0.130526192220052,0.99144486137381)
B.dp=A.j(t([B.U,B.X,B.J,B.a_,B.M,B.R,B.W,B.T,B.K,B.E,B.H,B.O,B.Z,B.F,B.N,B.P,B.Q,B.L,B.G,B.D,B.S,B.I,B.Y,B.V]),u.f)
B.dD=new A.Z(1,0,-0.788675134594813,0.211324865405187)
B.dA=new A.Z(0,0,0,0)
B.dB=new A.Z(1,1,-0.577350269189626,-0.577350269189626)
B.dC=new A.Z(0,1,0.211324865405187,-0.788675134594813)
B.n=A.j(t([B.dD,B.dA,B.dB,B.dC]),A.ak("f<Z>"))
B.cU=new A.a(-0.753341017856078,-0.37968289875261624,-0.37968289875261624,-0.37968289875261624)
B.c9=new A.a(-0.7821684431180708,-0.4321472685365301,-0.4321472685365301,0.12128480194602098)
B.bl=new A.a(-0.7821684431180708,-0.4321472685365301,0.12128480194602098,-0.4321472685365301)
B.c6=new A.a(-0.7821684431180708,0.12128480194602098,-0.4321472685365301,-0.4321472685365301)
B.cb=new A.a(-0.8586508742123365,-0.508629699630796,0.044802370851755174,0.044802370851755174)
B.bZ=new A.a(-0.8586508742123365,0.044802370851755174,-0.508629699630796,0.044802370851755174)
B.bE=new A.a(-0.8586508742123365,0.044802370851755174,0.044802370851755174,-0.508629699630796)
B.bT=new A.a(-0.9982828964265062,-0.03381941603233842,-0.03381941603233842,-0.03381941603233842)
B.cr=new A.a(-0.37968289875261624,-0.753341017856078,-0.37968289875261624,-0.37968289875261624)
B.cO=new A.a(-0.4321472685365301,-0.7821684431180708,-0.4321472685365301,0.12128480194602098)
B.bX=new A.a(-0.4321472685365301,-0.7821684431180708,0.12128480194602098,-0.4321472685365301)
B.cs=new A.a(0.12128480194602098,-0.7821684431180708,-0.4321472685365301,-0.4321472685365301)
B.cp=new A.a(-0.508629699630796,-0.8586508742123365,0.044802370851755174,0.044802370851755174)
B.cc=new A.a(0.044802370851755174,-0.8586508742123365,-0.508629699630796,0.044802370851755174)
B.bW=new A.a(0.044802370851755174,-0.8586508742123365,0.044802370851755174,-0.508629699630796)
B.cN=new A.a(-0.03381941603233842,-0.9982828964265062,-0.03381941603233842,-0.03381941603233842)
B.c7=new A.a(-0.37968289875261624,-0.37968289875261624,-0.753341017856078,-0.37968289875261624)
B.bY=new A.a(-0.4321472685365301,-0.4321472685365301,-0.7821684431180708,0.12128480194602098)
B.dg=new A.a(-0.4321472685365301,0.12128480194602098,-0.7821684431180708,-0.4321472685365301)
B.ch=new A.a(0.12128480194602098,-0.4321472685365301,-0.7821684431180708,-0.4321472685365301)
B.by=new A.a(-0.508629699630796,0.044802370851755174,-0.8586508742123365,0.044802370851755174)
B.dd=new A.a(0.044802370851755174,-0.508629699630796,-0.8586508742123365,0.044802370851755174)
B.aW=new A.a(0.044802370851755174,0.044802370851755174,-0.8586508742123365,-0.508629699630796)
B.d5=new A.a(-0.03381941603233842,-0.03381941603233842,-0.9982828964265062,-0.03381941603233842)
B.br=new A.a(-0.37968289875261624,-0.37968289875261624,-0.37968289875261624,-0.753341017856078)
B.aN=new A.a(-0.4321472685365301,-0.4321472685365301,0.12128480194602098,-0.7821684431180708)
B.bH=new A.a(-0.4321472685365301,0.12128480194602098,-0.4321472685365301,-0.7821684431180708)
B.bx=new A.a(0.12128480194602098,-0.4321472685365301,-0.4321472685365301,-0.7821684431180708)
B.bb=new A.a(-0.508629699630796,0.044802370851755174,0.044802370851755174,-0.8586508742123365)
B.ca=new A.a(0.044802370851755174,-0.508629699630796,0.044802370851755174,-0.8586508742123365)
B.cW=new A.a(0.044802370851755174,0.044802370851755174,-0.508629699630796,-0.8586508742123365)
B.aR=new A.a(-0.03381941603233842,-0.03381941603233842,-0.03381941603233842,-0.9982828964265062)
B.d6=new A.a(-0.6740059517812944,-0.3239847771997537,-0.3239847771997537,0.5794684678643381)
B.c2=new A.a(-0.7504883828755602,-0.4004672082940195,0.15296486218853164,0.5029860367700724)
B.cI=new A.a(-0.7504883828755602,0.15296486218853164,-0.4004672082940195,0.5029860367700724)
B.c5=new A.a(-0.8828161875373585,0.08164729285680945,0.08164729285680945,0.4553054119602712)
B.ce=new A.a(-0.4553054119602712,-0.08164729285680945,-0.08164729285680945,0.8828161875373585)
B.aT=new A.a(-0.5029860367700724,-0.15296486218853164,0.4004672082940195,0.7504883828755602)
B.c_=new A.a(-0.5029860367700724,0.4004672082940195,-0.15296486218853164,0.7504883828755602)
B.cl=new A.a(-0.5794684678643381,0.3239847771997537,0.3239847771997537,0.6740059517812944)
B.bp=new A.a(-0.3239847771997537,-0.6740059517812944,-0.3239847771997537,0.5794684678643381)
B.cz=new A.a(-0.4004672082940195,-0.7504883828755602,0.15296486218853164,0.5029860367700724)
B.da=new A.a(0.15296486218853164,-0.7504883828755602,-0.4004672082940195,0.5029860367700724)
B.c0=new A.a(0.08164729285680945,-0.8828161875373585,0.08164729285680945,0.4553054119602712)
B.cL=new A.a(-0.08164729285680945,-0.4553054119602712,-0.08164729285680945,0.8828161875373585)
B.d1=new A.a(-0.15296486218853164,-0.5029860367700724,0.4004672082940195,0.7504883828755602)
B.bo=new A.a(0.4004672082940195,-0.5029860367700724,-0.15296486218853164,0.7504883828755602)
B.cY=new A.a(0.3239847771997537,-0.5794684678643381,0.3239847771997537,0.6740059517812944)
B.b5=new A.a(-0.3239847771997537,-0.3239847771997537,-0.6740059517812944,0.5794684678643381)
B.bg=new A.a(-0.4004672082940195,0.15296486218853164,-0.7504883828755602,0.5029860367700724)
B.bd=new A.a(0.15296486218853164,-0.4004672082940195,-0.7504883828755602,0.5029860367700724)
B.cD=new A.a(0.08164729285680945,0.08164729285680945,-0.8828161875373585,0.4553054119602712)
B.bN=new A.a(-0.08164729285680945,-0.08164729285680945,-0.4553054119602712,0.8828161875373585)
B.cC=new A.a(-0.15296486218853164,0.4004672082940195,-0.5029860367700724,0.7504883828755602)
B.b1=new A.a(0.4004672082940195,-0.15296486218853164,-0.5029860367700724,0.7504883828755602)
B.d8=new A.a(0.3239847771997537,0.3239847771997537,-0.5794684678643381,0.6740059517812944)
B.b3=new A.a(-0.6740059517812944,-0.3239847771997537,0.5794684678643381,-0.3239847771997537)
B.aS=new A.a(-0.7504883828755602,-0.4004672082940195,0.5029860367700724,0.15296486218853164)
B.cj=new A.a(-0.7504883828755602,0.15296486218853164,0.5029860367700724,-0.4004672082940195)
B.dk=new A.a(-0.8828161875373585,0.08164729285680945,0.4553054119602712,0.08164729285680945)
B.d9=new A.a(-0.4553054119602712,-0.08164729285680945,0.8828161875373585,-0.08164729285680945)
B.cg=new A.a(-0.5029860367700724,-0.15296486218853164,0.7504883828755602,0.4004672082940195)
B.cP=new A.a(-0.5029860367700724,0.4004672082940195,0.7504883828755602,-0.15296486218853164)
B.b2=new A.a(-0.5794684678643381,0.3239847771997537,0.6740059517812944,0.3239847771997537)
B.dc=new A.a(-0.3239847771997537,-0.6740059517812944,0.5794684678643381,-0.3239847771997537)
B.cB=new A.a(-0.4004672082940195,-0.7504883828755602,0.5029860367700724,0.15296486218853164)
B.c4=new A.a(0.15296486218853164,-0.7504883828755602,0.5029860367700724,-0.4004672082940195)
B.bQ=new A.a(0.08164729285680945,-0.8828161875373585,0.4553054119602712,0.08164729285680945)
B.bu=new A.a(-0.08164729285680945,-0.4553054119602712,0.8828161875373585,-0.08164729285680945)
B.c8=new A.a(-0.15296486218853164,-0.5029860367700724,0.7504883828755602,0.4004672082940195)
B.cq=new A.a(0.4004672082940195,-0.5029860367700724,0.7504883828755602,-0.15296486218853164)
B.d4=new A.a(0.3239847771997537,-0.5794684678643381,0.6740059517812944,0.3239847771997537)
B.aU=new A.a(-0.3239847771997537,-0.3239847771997537,0.5794684678643381,-0.6740059517812944)
B.cv=new A.a(-0.4004672082940195,0.15296486218853164,0.5029860367700724,-0.7504883828755602)
B.bO=new A.a(0.15296486218853164,-0.4004672082940195,0.5029860367700724,-0.7504883828755602)
B.d3=new A.a(0.08164729285680945,0.08164729285680945,0.4553054119602712,-0.8828161875373585)
B.cw=new A.a(-0.08164729285680945,-0.08164729285680945,0.8828161875373585,-0.4553054119602712)
B.ct=new A.a(-0.15296486218853164,0.4004672082940195,0.7504883828755602,-0.5029860367700724)
B.cE=new A.a(0.4004672082940195,-0.15296486218853164,0.7504883828755602,-0.5029860367700724)
B.cM=new A.a(0.3239847771997537,0.3239847771997537,0.6740059517812944,-0.5794684678643381)
B.bM=new A.a(-0.6740059517812944,0.5794684678643381,-0.3239847771997537,-0.3239847771997537)
B.aO=new A.a(-0.7504883828755602,0.5029860367700724,-0.4004672082940195,0.15296486218853164)
B.aZ=new A.a(-0.7504883828755602,0.5029860367700724,0.15296486218853164,-0.4004672082940195)
B.be=new A.a(-0.8828161875373585,0.4553054119602712,0.08164729285680945,0.08164729285680945)
B.bD=new A.a(-0.4553054119602712,0.8828161875373585,-0.08164729285680945,-0.08164729285680945)
B.b7=new A.a(-0.5029860367700724,0.7504883828755602,-0.15296486218853164,0.4004672082940195)
B.bB=new A.a(-0.5029860367700724,0.7504883828755602,0.4004672082940195,-0.15296486218853164)
B.cV=new A.a(-0.5794684678643381,0.6740059517812944,0.3239847771997537,0.3239847771997537)
B.cf=new A.a(-0.3239847771997537,0.5794684678643381,-0.6740059517812944,-0.3239847771997537)
B.bi=new A.a(-0.4004672082940195,0.5029860367700724,-0.7504883828755602,0.15296486218853164)
B.c1=new A.a(0.15296486218853164,0.5029860367700724,-0.7504883828755602,-0.4004672082940195)
B.b8=new A.a(0.08164729285680945,0.4553054119602712,-0.8828161875373585,0.08164729285680945)
B.cx=new A.a(-0.08164729285680945,0.8828161875373585,-0.4553054119602712,-0.08164729285680945)
B.b4=new A.a(-0.15296486218853164,0.7504883828755602,-0.5029860367700724,0.4004672082940195)
B.aP=new A.a(0.4004672082940195,0.7504883828755602,-0.5029860367700724,-0.15296486218853164)
B.cd=new A.a(0.3239847771997537,0.6740059517812944,-0.5794684678643381,0.3239847771997537)
B.cQ=new A.a(-0.3239847771997537,0.5794684678643381,-0.3239847771997537,-0.6740059517812944)
B.cS=new A.a(-0.4004672082940195,0.5029860367700724,0.15296486218853164,-0.7504883828755602)
B.bP=new A.a(0.15296486218853164,0.5029860367700724,-0.4004672082940195,-0.7504883828755602)
B.d_=new A.a(0.08164729285680945,0.4553054119602712,0.08164729285680945,-0.8828161875373585)
B.b_=new A.a(-0.08164729285680945,0.8828161875373585,-0.08164729285680945,-0.4553054119602712)
B.bk=new A.a(-0.15296486218853164,0.7504883828755602,0.4004672082940195,-0.5029860367700724)
B.dj=new A.a(0.4004672082940195,0.7504883828755602,-0.15296486218853164,-0.5029860367700724)
B.bq=new A.a(0.3239847771997537,0.6740059517812944,0.3239847771997537,-0.5794684678643381)
B.bS=new A.a(0.5794684678643381,-0.6740059517812944,-0.3239847771997537,-0.3239847771997537)
B.cF=new A.a(0.5029860367700724,-0.7504883828755602,-0.4004672082940195,0.15296486218853164)
B.de=new A.a(0.5029860367700724,-0.7504883828755602,0.15296486218853164,-0.4004672082940195)
B.bn=new A.a(0.4553054119602712,-0.8828161875373585,0.08164729285680945,0.08164729285680945)
B.cm=new A.a(0.8828161875373585,-0.4553054119602712,-0.08164729285680945,-0.08164729285680945)
B.co=new A.a(0.7504883828755602,-0.5029860367700724,-0.15296486218853164,0.4004672082940195)
B.df=new A.a(0.7504883828755602,-0.5029860367700724,0.4004672082940195,-0.15296486218853164)
B.db=new A.a(0.6740059517812944,-0.5794684678643381,0.3239847771997537,0.3239847771997537)
B.bs=new A.a(0.5794684678643381,-0.3239847771997537,-0.6740059517812944,-0.3239847771997537)
B.bz=new A.a(0.5029860367700724,-0.4004672082940195,-0.7504883828755602,0.15296486218853164)
B.cu=new A.a(0.5029860367700724,0.15296486218853164,-0.7504883828755602,-0.4004672082940195)
B.cJ=new A.a(0.4553054119602712,0.08164729285680945,-0.8828161875373585,0.08164729285680945)
B.bV=new A.a(0.8828161875373585,-0.08164729285680945,-0.4553054119602712,-0.08164729285680945)
B.dh=new A.a(0.7504883828755602,-0.15296486218853164,-0.5029860367700724,0.4004672082940195)
B.cX=new A.a(0.7504883828755602,0.4004672082940195,-0.5029860367700724,-0.15296486218853164)
B.bj=new A.a(0.6740059517812944,0.3239847771997537,-0.5794684678643381,0.3239847771997537)
B.bw=new A.a(0.5794684678643381,-0.3239847771997537,-0.3239847771997537,-0.6740059517812944)
B.bI=new A.a(0.5029860367700724,-0.4004672082940195,0.15296486218853164,-0.7504883828755602)
B.cy=new A.a(0.5029860367700724,0.15296486218853164,-0.4004672082940195,-0.7504883828755602)
B.bf=new A.a(0.4553054119602712,0.08164729285680945,0.08164729285680945,-0.8828161875373585)
B.aV=new A.a(0.8828161875373585,-0.08164729285680945,-0.08164729285680945,-0.4553054119602712)
B.cK=new A.a(0.7504883828755602,-0.15296486218853164,0.4004672082940195,-0.5029860367700724)
B.bG=new A.a(0.7504883828755602,0.4004672082940195,-0.15296486218853164,-0.5029860367700724)
B.bJ=new A.a(0.6740059517812944,0.3239847771997537,0.3239847771997537,-0.5794684678643381)
B.d2=new A.a(0.03381941603233842,0.03381941603233842,0.03381941603233842,0.9982828964265062)
B.bR=new A.a(-0.044802370851755174,-0.044802370851755174,0.508629699630796,0.8586508742123365)
B.d0=new A.a(-0.044802370851755174,0.508629699630796,-0.044802370851755174,0.8586508742123365)
B.bK=new A.a(-0.12128480194602098,0.4321472685365301,0.4321472685365301,0.7821684431180708)
B.di=new A.a(0.508629699630796,-0.044802370851755174,-0.044802370851755174,0.8586508742123365)
B.ci=new A.a(0.4321472685365301,-0.12128480194602098,0.4321472685365301,0.7821684431180708)
B.bc=new A.a(0.4321472685365301,0.4321472685365301,-0.12128480194602098,0.7821684431180708)
B.bv=new A.a(0.37968289875261624,0.37968289875261624,0.37968289875261624,0.753341017856078)
B.cR=new A.a(0.03381941603233842,0.03381941603233842,0.9982828964265062,0.03381941603233842)
B.bF=new A.a(-0.044802370851755174,0.044802370851755174,0.8586508742123365,0.508629699630796)
B.cZ=new A.a(-0.044802370851755174,0.508629699630796,0.8586508742123365,-0.044802370851755174)
B.cH=new A.a(-0.12128480194602098,0.4321472685365301,0.7821684431180708,0.4321472685365301)
B.ck=new A.a(0.508629699630796,-0.044802370851755174,0.8586508742123365,-0.044802370851755174)
B.cA=new A.a(0.4321472685365301,-0.12128480194602098,0.7821684431180708,0.4321472685365301)
B.aX=new A.a(0.4321472685365301,0.4321472685365301,0.7821684431180708,-0.12128480194602098)
B.cG=new A.a(0.37968289875261624,0.37968289875261624,0.753341017856078,0.37968289875261624)
B.b6=new A.a(0.03381941603233842,0.9982828964265062,0.03381941603233842,0.03381941603233842)
B.bh=new A.a(-0.044802370851755174,0.8586508742123365,-0.044802370851755174,0.508629699630796)
B.bA=new A.a(-0.044802370851755174,0.8586508742123365,0.508629699630796,-0.044802370851755174)
B.cn=new A.a(-0.12128480194602098,0.7821684431180708,0.4321472685365301,0.4321472685365301)
B.bL=new A.a(0.508629699630796,0.8586508742123365,-0.044802370851755174,-0.044802370851755174)
B.ba=new A.a(0.4321472685365301,0.7821684431180708,-0.12128480194602098,0.4321472685365301)
B.d7=new A.a(0.4321472685365301,0.7821684431180708,0.4321472685365301,-0.12128480194602098)
B.bt=new A.a(0.37968289875261624,0.753341017856078,0.37968289875261624,0.37968289875261624)
B.bU=new A.a(0.9982828964265062,0.03381941603233842,0.03381941603233842,0.03381941603233842)
B.aY=new A.a(0.8586508742123365,-0.044802370851755174,-0.044802370851755174,0.508629699630796)
B.b0=new A.a(0.8586508742123365,-0.044802370851755174,0.508629699630796,-0.044802370851755174)
B.bm=new A.a(0.7821684431180708,-0.12128480194602098,0.4321472685365301,0.4321472685365301)
B.cT=new A.a(0.8586508742123365,0.508629699630796,-0.044802370851755174,-0.044802370851755174)
B.b9=new A.a(0.7821684431180708,0.4321472685365301,-0.12128480194602098,0.4321472685365301)
B.bC=new A.a(0.7821684431180708,0.4321472685365301,0.4321472685365301,-0.12128480194602098)
B.c3=new A.a(0.753341017856078,0.37968289875261624,0.37968289875261624,0.37968289875261624)
B.dq=A.j(t([B.cU,B.c9,B.bl,B.c6,B.cb,B.bZ,B.bE,B.bT,B.cr,B.cO,B.bX,B.cs,B.cp,B.cc,B.bW,B.cN,B.c7,B.bY,B.dg,B.ch,B.by,B.dd,B.aW,B.d5,B.br,B.aN,B.bH,B.bx,B.bb,B.ca,B.cW,B.aR,B.d6,B.c2,B.cI,B.c5,B.ce,B.aT,B.c_,B.cl,B.bp,B.cz,B.da,B.c0,B.cL,B.d1,B.bo,B.cY,B.b5,B.bg,B.bd,B.cD,B.bN,B.cC,B.b1,B.d8,B.b3,B.aS,B.cj,B.dk,B.d9,B.cg,B.cP,B.b2,B.dc,B.cB,B.c4,B.bQ,B.bu,B.c8,B.cq,B.d4,B.aU,B.cv,B.bO,B.d3,B.cw,B.ct,B.cE,B.cM,B.bM,B.aO,B.aZ,B.be,B.bD,B.b7,B.bB,B.cV,B.cf,B.bi,B.c1,B.b8,B.cx,B.b4,B.aP,B.cd,B.cQ,B.cS,B.bP,B.d_,B.b_,B.bk,B.dj,B.bq,B.bS,B.cF,B.de,B.bn,B.cm,B.co,B.df,B.db,B.bs,B.bz,B.cu,B.cJ,B.bV,B.dh,B.cX,B.bj,B.bw,B.bI,B.cy,B.bf,B.aV,B.cK,B.bG,B.bJ,B.d2,B.bR,B.d0,B.bK,B.di,B.ci,B.bc,B.bv,B.cR,B.bF,B.cZ,B.cH,B.ck,B.cA,B.aX,B.cG,B.b6,B.bh,B.bA,B.cn,B.bL,B.ba,B.d7,B.bt,B.bU,B.aY,B.b0,B.bm,B.cT,B.b9,B.bC,B.c3]),u.J)
B.o=A.j(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),A.ak("f<n>"))
B.ag=new A.c(-2.22474487139,-2.22474487139,-1)
B.az=new A.c(-2.22474487139,-2.22474487139,1)
B.a9=new A.c(-3.0862664687972017,-1.1721513422464978,0)
B.aF=new A.c(-1.1721513422464978,-3.0862664687972017,0)
B.an=new A.c(-2.22474487139,-1,-2.22474487139)
B.ay=new A.c(-2.22474487139,1,-2.22474487139)
B.aj=new A.c(-1.1721513422464978,0,-3.0862664687972017)
B.aG=new A.c(-3.0862664687972017,0,-1.1721513422464978)
B.at=new A.c(-2.22474487139,-1,2.22474487139)
B.af=new A.c(-2.22474487139,1,2.22474487139)
B.a5=new A.c(-3.0862664687972017,0,1.1721513422464978)
B.a3=new A.c(-1.1721513422464978,0,3.0862664687972017)
B.aA=new A.c(-2.22474487139,2.22474487139,-1)
B.a7=new A.c(-2.22474487139,2.22474487139,1)
B.ak=new A.c(-1.1721513422464978,3.0862664687972017,0)
B.aw=new A.c(-3.0862664687972017,1.1721513422464978,0)
B.a8=new A.c(-1,-2.22474487139,-2.22474487139)
B.a4=new A.c(1,-2.22474487139,-2.22474487139)
B.ao=new A.c(0,-3.0862664687972017,-1.1721513422464978)
B.ax=new A.c(0,-1.1721513422464978,-3.0862664687972017)
B.a2=new A.c(-1,-2.22474487139,2.22474487139)
B.aa=new A.c(1,-2.22474487139,2.22474487139)
B.a0=new A.c(0,-1.1721513422464978,3.0862664687972017)
B.ac=new A.c(0,-3.0862664687972017,1.1721513422464978)
B.aE=new A.c(-1,2.22474487139,-2.22474487139)
B.aB=new A.c(1,2.22474487139,-2.22474487139)
B.ar=new A.c(0,1.1721513422464978,-3.0862664687972017)
B.ah=new A.c(0,3.0862664687972017,-1.1721513422464978)
B.am=new A.c(-1,2.22474487139,2.22474487139)
B.aL=new A.c(1,2.22474487139,2.22474487139)
B.ad=new A.c(0,3.0862664687972017,1.1721513422464978)
B.al=new A.c(0,1.1721513422464978,3.0862664687972017)
B.aI=new A.c(2.22474487139,-2.22474487139,-1)
B.aC=new A.c(2.22474487139,-2.22474487139,1)
B.ab=new A.c(1.1721513422464978,-3.0862664687972017,0)
B.aq=new A.c(3.0862664687972017,-1.1721513422464978,0)
B.ae=new A.c(2.22474487139,-1,-2.22474487139)
B.aD=new A.c(2.22474487139,1,-2.22474487139)
B.aJ=new A.c(3.0862664687972017,0,-1.1721513422464978)
B.a6=new A.c(1.1721513422464978,0,-3.0862664687972017)
B.aH=new A.c(2.22474487139,-1,2.22474487139)
B.au=new A.c(2.22474487139,1,2.22474487139)
B.as=new A.c(1.1721513422464978,0,3.0862664687972017)
B.aM=new A.c(3.0862664687972017,0,1.1721513422464978)
B.av=new A.c(2.22474487139,2.22474487139,-1)
B.aK=new A.c(2.22474487139,2.22474487139,1)
B.ap=new A.c(3.0862664687972017,1.1721513422464978,0)
B.ai=new A.c(1.1721513422464978,3.0862664687972017,0)
B.dr=A.j(t([B.ag,B.az,B.a9,B.aF,B.an,B.ay,B.aj,B.aG,B.at,B.af,B.a5,B.a3,B.aA,B.a7,B.ak,B.aw,B.a8,B.a4,B.ao,B.ax,B.a2,B.aa,B.a0,B.ac,B.aE,B.aB,B.ar,B.ah,B.am,B.aL,B.ad,B.al,B.aI,B.aC,B.ab,B.aq,B.ae,B.aD,B.aJ,B.a6,B.aH,B.au,B.as,B.aM,B.av,B.aK,B.ap,B.ai]),u.Y)
B.p=A.j(t([]),u.b)
B.ds={}
B.q=new A.ao(B.ds,[],A.ak("ao<af,@>"))
B.dw=new A.ae("call")
B.dt=new A.az(19,"tileGrass")
B.t=new A.aB(B.dt,"grass")
B.du=new A.az(20,"tileRock")
B.e=new A.aB(B.du,"rock")
B.dv=new A.az(21,"tileSand")
B.h=new A.aB(B.dv,"sand")
B.dx=A.cA("bx")
B.dy=A.cA("ch")
B.dz=A.cA("i")})();(function staticFields(){$.c0=null
$.J=A.j([],u.G)
$.cT=null
$.cF=null
$.cE=null
$.dk=null
$.di=null
$.dq=null
$.c7=null
$.cb=null
$.cy=null
$.c1=A.j([],A.ak("f<h<i>?>"))
$.bJ=A.j([],u.f)
$.bK=A.j([],u.Y)
$.bL=A.j([],u.J)
$.cR=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"f9","cB",()=>A.eV("_$dart_dartClosure"))
t($,"fm","cf",()=>A.dn(B.dz))
t($,"fa","dt",()=>A.as(8,A.S(0,0,0,0),!1,A.ak("bl")))
t($,"fb","du",()=>A.as(16,A.d0(0,0,0,0),!1,A.ak("bm")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.o,DOMError:J.o,ErrorEvent:J.o,Event:J.o,InputEvent:J.o,SubmitEvent:J.o,MediaError:J.o,NavigatorUserMediaError:J.o,OverconstrainedError:J.o,PositionError:J.o,GeolocationPositionError:J.o,SensorErrorEvent:J.o,SpeechRecognitionError:J.o,ArrayBufferView:A.b8,Float32Array:A.b6,Int16Array:A.b7,DOMException:A.bv})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"
A.aF.$nativeSuperclassTag="ArrayBufferView"
A.au.$nativeSuperclassTag="ArrayBufferView"
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.aH.$nativeSuperclassTag="ArrayBufferView"
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
var t=A.f3
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
