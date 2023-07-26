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
return a?function(c){if(t===null)t=A.cj(b)
return new t(c,this)}:function(){if(t===null)t=A.cj(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cj(a).prototype
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
a(hunkHelpers,v,w,$)}var A={c7:function c7(){},
dF(a){return new A.ar("Field '"+a+"' has not been initialized.")},
cM(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cl(a){var t,s
for(t=$.u.length,s=0;s<t;++s)if(a===$.u[s])return!0
return!1},
dD(){return new A.ba("No element")},
ar:function ar(a){this.a=a},
al:function al(){},
ab:function ab(a){this.a=a},
dd(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
c(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aN(a)
return t},
b7(a){var t,s=$.cH
if(s==null)s=$.cH=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
dK(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.b(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bJ(a){return A.dI(a)},
dI(a){var t,s,r,q
if(a instanceof A.h)return A.t(A.bo(a),null)
t=J.G(a)
if(t===B.T||t===B.W||u.E.b(a)){s=B.l(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.t(A.bo(a),null)},
dL(a){if(typeof a=="number"||A.ch(a))return J.aN(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.J)return a.h(0)
return"Instance of '"+A.bJ(a)+"'"},
l(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.e.ab(t,10)|55296)>>>0,t&1023|56320)}throw A.a(A.b8(a,0,1114111,null,null))},
M(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.D(t,b)
r.b=""
if(c!=null&&c.a!==0)c.v(0,new A.bI(r,s,t))
return J.du(a,new A.b_(B.a2,0,t,s,0))},
dJ(a,b,c){var t,s,r=c==null||c.a===0
if(r){t=b.length
if(t===0){if(!!a.$0)return a.$0()}else if(t===1){if(!!a.$1)return a.$1(b[0])}else if(t===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(t===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(t===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(t===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
s=a[""+"$"+t]
if(s!=null)return s.apply(a,b)}return A.dH(a,b,c)},
dH(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=b.length,f=a.$R
if(g<f)return A.M(a,b,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.G(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.M(a,b,c)
if(g===f)return p.apply(a,b)
return A.M(a,b,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.M(a,b,c)
o=f+r.length
if(g>o)return A.M(a,b,null)
if(g<o){n=r.slice(g-f)
m=A.ca(b,u.z)
B.a.D(m,n)}else m=b
return p.apply(a,m)}else{if(g>f)return A.M(a,b,c)
m=A.ca(b,u.z)
l=Object.keys(r)
if(c==null)for(s=l.length,k=0;k<l.length;l.length===s||(0,A.c6)(l),++k){j=r[A.x(l[k])]
if(B.n===j)return A.M(a,m,c)
B.a.i(m,j)}else{for(s=l.length,i=0,k=0;k<l.length;l.length===s||(0,A.c6)(l),++k){h=A.x(l[k])
if(c.V(h)){++i
B.a.i(m,c.l(0,h))}else{j=r[h]
if(B.n===j)return A.M(a,m,c)
B.a.i(m,j)}}if(i!==c.a)return A.M(a,m,c)}return p.apply(a,m)}},
b(a,b){if(a==null)J.cr(a)
throw A.a(A.ag(a,b))},
ag(a,b){var t,s="index"
if(!A.d3(b))return new A.I(!0,b,s,null)
t=J.cr(a)
if(b<0||b>=t)return new A.aX(t,!0,b,s,"Index out of range")
return A.dM(b,s)},
eK(a){return new A.I(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.az()
t=new Error()
t.dartException=a
s=A.f8
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
f8(){return J.aN(this.dartException)},
a3(a){throw A.a(a)},
c6(a){throw A.a(A.aV(a))},
C(a){var t,s,r,q,p,o
a=A.f3(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.d([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.bM(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
bN(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cN(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
c8(a,b){var t=b==null,s=t?null:b.method
return new A.b1(a,s,t?null:b.receiver)},
f9(a){if(a==null)return new A.bG(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.eH(a)},
a2(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eH(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.e.ab(s,16)&8191)===10)switch(r){case 438:return A.a2(a,A.c8(A.c(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.c(t)
return A.a2(a,new A.av(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.dh()
o=$.di()
n=$.dj()
m=$.dk()
l=$.dn()
k=$.dp()
j=$.dm()
$.dl()
i=$.dr()
h=$.dq()
g=p.u(t)
if(g!=null)return A.a2(a,A.c8(A.x(t),g))
else{g=o.u(t)
if(g!=null){g.method="call"
return A.a2(a,A.c8(A.x(t),g))}else{g=n.u(t)
if(g==null){g=m.u(t)
if(g==null){g=l.u(t)
if(g==null){g=k.u(t)
if(g==null){g=j.u(t)
if(g==null){g=m.u(t)
if(g==null){g=i.u(t)
if(g==null){g=h.u(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.x(t)
return A.a2(a,new A.av(t,g==null?f:g.method))}}}return A.a2(a,new A.bf(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.ay()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a2(a,new A.I(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.ay()
return a},
f2(a){if(a==null||typeof a!="object")return J.bp(a)
else return A.b7(a)},
eN(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
dC(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bb().constructor.prototype):Object.create(new A.a4(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cw(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dy(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cw(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dy(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dw)}throw A.a("Error in functionType of tearoff")},
dz(a,b,c,d){var t=A.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cw(a,b,c,d){var t,s
if(c)return A.dB(a,b,d)
t=b.length
s=A.dz(t,d,a,b)
return s},
dA(a,b,c,d){var t=A.cv,s=A.dx
switch(b?-1:a){case 0:throw A.a(new A.b9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dB(a,b,c){var t,s
if($.ct==null)$.ct=A.cs("interceptor")
if($.cu==null)$.cu=A.cs("receiver")
t=b.length
s=A.dA(t,c,a,b)
return s},
cj(a){return A.dC(a)},
dw(a,b){return A.bY(v.typeUniverse,A.bo(a.a),b)},
cv(a){return a.a},
dx(a){return a.b},
cs(a){var t,s,r,q=new A.a4("receiver","interceptor"),p=J.cC(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.dv("Field name "+a+" not found."))},
f6(a){throw A.a(new A.bi(a))},
eP(a){return v.getIsolateTag(a)},
c9(a,b,c){var t=new A.b3(a,b,c.j("b3<0>"))
t.c=a.e
return t},
f_(a){var t,s,r,q,p,o=A.x($.d9.$1(a)),n=$.c_[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c3[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.ed($.d6.$2(a,o))
if(r!=null){n=$.c_[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c3[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c5(t)
$.c_[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c3[o]=t
return t}if(q==="-"){p=A.c5(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.db(a,t)
if(q==="*")throw A.a(A.cO(o))
if(v.leafTags[o]===true){p=A.c5(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.db(a,t)},
db(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cm(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c5(a){return J.cm(a,!1,null,!!a.$iff)},
f1(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c5(t)
else return J.cm(t,c,null,null)},
eW(){if(!0===$.ck)return
$.ck=!0
A.eX()},
eX(){var t,s,r,q,p,o,n,m
$.c_=Object.create(null)
$.c3=Object.create(null)
A.eV()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dc.$1(p)
if(o!=null){n=A.f1(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eV(){var t,s,r,q,p,o,n=B.x()
n=A.ae(B.y,A.ae(B.z,A.ae(B.m,A.ae(B.m,A.ae(B.A,A.ae(B.B,A.ae(B.C(B.l),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d9=new A.c0(q)
$.d6=new A.c1(p)
$.dc=new A.c2(o)},
ae(a,b){return a(b)||b},
eM(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
f3(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aj:function aj(a,b){this.a=a
this.$ti=b},
ai:function ai(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b_:function b_(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
av:function av(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a},
bG:function bG(a){this.a=a},
J:function J(){},
aS:function aS(){},
bd:function bd(){},
bb:function bb(){},
a4:function a4(a,b){this.a=a
this.b=b},
bi:function bi(a){this.a=a},
b9:function b9(a){this.a=a},
bV:function bV(){},
S:function S(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a,b){this.a=a
this.b=b
this.c=null},
by:function by(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
c0:function c0(a){this.a=a},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
cJ(a,b){var t=b.c
return t==null?b.c=A.cf(a,b.y,!0):t},
cb(a,b){var t=b.c
return t==null?b.c=A.aF(a,"cx",[b.y]):t},
cK(a){var t=a.x
if(t===6||t===7||t===8)return A.cK(a.y)
return t===12||t===13},
dO(a){return a.at},
aK(a){return A.bX(v.typeUniverse,a,!1)},
Q(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cX(a,s,!0)
case 7:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cf(a,s,!0)
case 8:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cW(a,s,!0)
case 9:r=b.z
q=A.aJ(a,r,c,a0)
if(q===r)return b
return A.aF(a,b.y,q)
case 10:p=b.y
o=A.Q(a,p,c,a0)
n=b.z
m=A.aJ(a,n,c,a0)
if(o===p&&m===n)return b
return A.cd(a,o,m)
case 12:l=b.y
k=A.Q(a,l,c,a0)
j=b.z
i=A.eE(a,j,c,a0)
if(k===l&&i===j)return b
return A.cV(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aJ(a,h,c,a0)
p=b.y
o=A.Q(a,p,c,a0)
if(g===h&&o===p)return b
return A.ce(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.aR("Attempted to substitute unexpected RTI kind "+d))}},
aJ(a,b,c,d){var t,s,r,q,p=b.length,o=A.bZ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Q(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eF(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bZ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Q(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eE(a,b,c,d){var t,s=b.a,r=A.aJ(a,s,c,d),q=b.b,p=A.aJ(a,q,c,d),o=b.c,n=A.eF(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bk()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
d7(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eU(s)
t=a.$S()
return t}return null},
eY(a,b){var t
if(A.cK(b))if(a instanceof A.J){t=A.d7(a)
if(t!=null)return t}return A.bo(a)},
bo(a){if(a instanceof A.h)return A.a0(a)
if(Array.isArray(a))return A.aI(a)
return A.cg(J.G(a))},
aI(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
a0(a){var t=a.$ti
return t!=null?t:A.cg(a)},
cg(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eq(a,t)},
eq(a,b){var t=a instanceof A.J?a.__proto__.__proto__.constructor:b,s=A.e9(v.typeUniverse,t.name)
b.$ccache=s
return s},
eU(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bX(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eS(a){return A.af(A.a0(a))},
eD(a){var t=a instanceof A.J?A.d7(a):null
if(t!=null)return t
if(u.R.b(a))return J.dt(a).a
if(Array.isArray(a))return A.aI(a)
return A.bo(a)},
af(a){var t=a.w
return t==null?a.w=A.d_(a):t},
d_(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bW(a)
t=A.bX(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.d_(t):s},
ep(a){var t,s,r,q,p,o=this
if(o===u.K)return A.F(o,a,A.ev)
if(!A.H(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.F(o,a,A.ez)
t=o.x
if(t===7)return A.F(o,a,A.en)
if(t===1)return A.F(o,a,A.d4)
s=t===6?o.y:o
t=s.x
if(t===8)return A.F(o,a,A.er)
if(s===u.S)r=A.d3
else if(s===u.i||s===u.p)r=A.eu
else if(s===u.N)r=A.ex
else r=s===u.y?A.ch:null
if(r!=null)return A.F(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eZ)){o.r="$i"+q
if(q==="n")return A.F(o,a,A.et)
return A.F(o,a,A.ey)}}else if(t===11){p=A.eM(s.y,s.z)
return A.F(o,a,p==null?A.d4:p)}return A.F(o,a,A.el)},
F(a,b,c){a.b=c
return a.b(b)},
eo(a){var t,s=this,r=A.ek
if(!A.H(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.ee
else if(s===u.K)r=A.ec
else{t=A.aL(s)
if(t)r=A.em}s.a=r
return s.a(a)},
bm(a){var t,s=a.x
if(!A.H(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bm(a.y)))t=s===8&&A.bm(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
el(a){var t=this
if(a==null)return A.bm(t)
return A.i(v.typeUniverse,A.eY(a,t),null,t,null)},
en(a){if(a==null)return!0
return this.y.b(a)},
ey(a){var t,s=this
if(a==null)return A.bm(s)
t=s.r
if(a instanceof A.h)return!!a[t]
return!!J.G(a)[t]},
et(a){var t,s=this
if(a==null)return A.bm(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.h)return!!a[t]
return!!J.G(a)[t]},
ek(a){var t,s=this
if(a==null){t=A.aL(s)
if(t)return a}else if(s.b(a))return a
A.d0(a,s)},
em(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.d0(a,t)},
d0(a,b){throw A.a(A.dZ(A.cP(a,A.t(b,null))))},
cP(a,b){return A.R(a)+": type '"+A.t(A.eD(a),null)+"' is not a subtype of type '"+b+"'"},
dZ(a){return new A.aD("TypeError: "+a)},
r(a,b){return new A.aD("TypeError: "+A.cP(a,b))},
er(a){var t=this
return t.y.b(a)||A.cb(v.typeUniverse,t).b(a)},
ev(a){return a!=null},
ec(a){if(a!=null)return a
throw A.a(A.r(a,"Object"))},
ez(a){return!0},
ee(a){return a},
d4(a){return!1},
ch(a){return!0===a||!1===a},
fr(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.r(a,"bool"))},
ft(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool"))},
fs(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool?"))},
fu(a){if(typeof a=="number")return a
throw A.a(A.r(a,"double"))},
fw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double"))},
fv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double?"))},
d3(a){return typeof a=="number"&&Math.floor(a)===a},
P(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.r(a,"int"))},
fy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int"))},
fx(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int?"))},
eu(a){return typeof a=="number"},
fz(a){if(typeof a=="number")return a
throw A.a(A.r(a,"num"))},
fA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num"))},
eb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num?"))},
ex(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.a(A.r(a,"String"))},
fB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String"))},
ed(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String?"))},
d5(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.t(a[r],b)
return t},
eC(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d5(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.t(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d1(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.i(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b(a4,k)
n=B.c.m(n+m,a4[k])
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
if(m===9){q=A.eG(a.y)
p=a.z
return p.length>0?q+("<"+A.d5(p,b)+">"):q}if(m===11)return A.eC(a,b)
if(m===12)return A.d1(a,b,null)
if(m===13)return A.d1(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
eG(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ea(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
e9(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bX(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aG(a,5,"#")
r=A.bZ(t)
for(q=0;q<t;++q)r[q]=s
p=A.aF(a,b,r)
o[b]=p
return p}else return n},
e7(a,b){return A.cY(a.tR,b)},
e6(a,b){return A.cY(a.eT,b)},
bX(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cT(A.cR(a,null,b,c))
s.set(b,t)
return t},
bY(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cT(A.cR(a,b,c,!0))
r.set(c,s)
return s},
e8(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cd(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
E(a,b){b.a=A.eo
b.b=A.ep
return b},
aG(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.v(null,null)
t.x=b
t.at=c
s=A.E(a,t)
a.eC.set(c,s)
return s},
cX(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e3(a,b,s,c)
a.eC.set(s,t)
return t},
e3(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.H(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.v(null,null)
r.x=6
r.y=b
r.at=c
return A.E(a,r)},
cf(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e2(a,b,s,c)
a.eC.set(s,t)
return t},
e2(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.H(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aL(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aL(r.y))return r
else return A.cJ(a,b)}}q=new A.v(null,null)
q.x=7
q.y=b
q.at=c
return A.E(a,q)},
cW(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e0(a,b,s,c)
a.eC.set(s,t)
return t},
e0(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.H(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aF(a,"cx",[b])
else if(b===u.P||b===u.T)return u.m}r=new A.v(null,null)
r.x=8
r.y=b
r.at=c
return A.E(a,r)},
e4(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.v(null,null)
t.x=14
t.y=b
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
aE(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e_(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aF(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aE(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.v(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.E(a,s)
a.eC.set(q,r)
return r},
cd(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aE(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.v(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.E(a,p)
a.eC.set(r,o)
return o},
e5(a,b,c){var t,s,r="+"+(b+"("+A.aE(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.v(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.E(a,t)
a.eC.set(r,s)
return s},
cV(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aE(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aE(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e_(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.v(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.E(a,q)
a.eC.set(s,p)
return p},
ce(a,b,c,d){var t,s=b.at+("<"+A.aE(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e1(a,b,c,s,d)
a.eC.set(s,t)
return t},
e1(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bZ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Q(a,b,s,0)
n=A.aJ(a,c,s,0)
return A.ce(a,o,n,c!==n)}}m=new A.v(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.E(a,m)},
cR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cT(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dU(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cS(a,s,m,l,!1)
else if(r===46)s=A.cS(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.O(a.u,a.e,l.pop()))
break
case 94:l.push(A.e4(a.u,l.pop()))
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
case 62:A.dW(a,l)
break
case 38:A.dV(a,l)
break
case 42:q=a.u
l.push(A.cX(q,A.O(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cf(q,A.O(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cW(q,A.O(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dT(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cU(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.dY(a.u,a.e,p)
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
return A.O(a.u,a.e,n)},
dU(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cS(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.ea(t,p.y)[q]
if(o==null)A.a3('No "'+q+'" in "'+A.dO(p)+'"')
d.push(A.bY(t,p,o))}else d.push(q)
return n},
dW(a,b){var t,s=a.u,r=A.cQ(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aF(s,q,r))
else{t=A.O(s,a.e,q)
switch(t.x){case 12:b.push(A.ce(s,t,r,a.n))
break
default:b.push(A.cd(s,t,r))
break}}},
dT(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cQ(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.O(n,a.e,m)
p=new A.bk()
p.a=r
p.b=t
p.c=s
b.push(A.cV(n,q,p))
return
case-4:b.push(A.e5(n,b.pop(),r))
return
default:throw A.a(A.aR("Unexpected state under `()`: "+A.c(m)))}},
dV(a,b){var t=b.pop()
if(0===t){b.push(A.aG(a.u,1,"0&"))
return}if(1===t){b.push(A.aG(a.u,4,"1&"))
return}throw A.a(A.aR("Unexpected extended operation "+A.c(t)))},
cQ(a,b){var t=b.splice(a.p)
A.cU(a.u,a.e,t)
a.p=b.pop()
return t},
O(a,b,c){if(typeof c=="string")return A.aF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dX(a,b,c)}else return c},
cU(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.O(a,b,c[t])},
dY(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.O(a,b,c[t])},
dX(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.aR("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.aR("Bad index "+c+" for "+b.h(0)))},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
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
if(r)if(A.i(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.i(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.i(a,b.y,c,d,e)
if(s===6)return A.i(a,b.y,c,d,e)
return s!==7}if(s===6)return A.i(a,b.y,c,d,e)
if(q===6){t=A.cJ(a,d)
return A.i(a,b,c,t,e)}if(s===8){if(!A.i(a,b.y,c,d,e))return!1
return A.i(a,A.cb(a,b),c,d,e)}if(s===7){t=A.i(a,u.P,c,d,e)
return t&&A.i(a,b.y,c,d,e)}if(q===8){if(A.i(a,b,c,d.y,e))return!0
return A.i(a,b,c,A.cb(a,d),e)}if(q===7){t=A.i(a,b,c,u.P,e)
return t||A.i(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.M)return!0
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
if(!A.i(a,k,c,j,e)||!A.i(a,j,e,k,c))return!1}return A.d2(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d2(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.es(a,b,c,d,e)}if(p&&q===11)return A.ew(a,b,c,d,e)
return!1},
d2(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.y,a4,a5.y,a6))return!1
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
if(!A.i(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.i(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
es(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bY(a,b,s[p])
return A.cZ(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cZ(a,o,null,c,n,e)},
cZ(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.i(a,s,d,r,f))return!1}return!0},
ew(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
aL(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.H(a))if(s!==7)if(!(s===6&&A.aL(a.y)))t=s===8&&A.aL(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eZ(a){var t
if(!A.H(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
H(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cY(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
v:function v(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bk:function bk(){this.c=this.b=this.a=null},
bW:function bW(a){this.a=a},
bj:function bj(){},
aD:function aD(a){this.a=a},
bz(a,b,c){return b.j("@<0>").a3(c).j("cE<1,2>").a(A.eN(a,new A.S(b.j("@<0>").a3(c).j("S<1,2>"))))},
cF(a){return new A.aB(a.j("aB<0>"))},
cc(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dS(a,b,c){var t=new A.ac(a,b,c.j("ac<0>"))
t.c=a.e
return t},
bB(a){var t,s={}
if(A.cl(a))return"{...}"
t=new A.W("")
try{B.a.i($.u,a)
t.a+="{"
s.a=!0
a.v(0,new A.bC(s,t))
t.a+="}"}finally{if(0>=$.u.length)return A.b($.u,-1)
$.u.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bl:function bl(a){this.a=a
this.b=null},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
as:function as(){},
bC:function bC(a,b){this.a=a
this.b=b},
aH:function aH(){},
a9:function a9(){},
aA:function aA(){},
aa:function aa(){},
aC:function aC(){},
ad:function ad(){},
cD(a,b,c){return new A.aq(a,b)},
ej(a){return a.aK()},
dQ(a,b){return new A.bS(a,[],A.eL())},
dR(a,b,c){var t,s=new A.W(""),r=A.dQ(s,b)
r.K(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
aT:function aT(){},
aW:function aW(){},
aq:function aq(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
bv:function bv(){},
bw:function bw(a){this.b=a},
bT:function bT(){},
bU:function bU(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.c=a
this.a=b
this.b=c},
da(a){var t=A.dK(a,null)
if(t!=null)return t
throw A.a(new A.bt(a))},
bA(a,b,c,d){var t,s
if(c)t=A.d(new Array(a),d.j("e<0>"))
else{if(a>4294967295)A.a3(A.b8(a,0,4294967295,"length",null))
t=J.cB(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
ca(a,b){var t=A.dG(a,b)
return t},
dG(a,b){var t=A.d(a.slice(0),b.j("e<0>"))
return t},
cL(a,b,c){var t=J.ds(b)
if(!t.q())return a
if(c.length===0){do a+=A.c(t.gG())
while(t.q())}else{a+=A.c(t.gG())
for(;t.q();)a=a+c+A.c(t.gG())}return a},
cG(a,b){return new A.b5(a,b.gaC(),b.gaF(),b.gaD())},
R(a){if(typeof a=="number"||A.ch(a)||a==null)return J.aN(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dL(a)},
aR(a){return new A.aQ(a)},
dv(a){return new A.I(!1,null,null,a)},
dM(a,b){return new A.ax(null,null,!0,a,b,"Value not in range")},
b8(a,b,c,d,e){return new A.ax(b,c,!0,a,d,"Invalid value")},
dN(a,b,c){if(0>a||a>c)throw A.a(A.b8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b8(b,a,c,"end",null))
return b}return c},
bh(a){return new A.bg(a)},
cO(a){return new A.be(a)},
aV(a){return new A.aU(a)},
dE(a,b,c){var t,s
if(A.cl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.i($.u,a)
try{A.eA(a,t)}finally{if(0>=$.u.length)return A.b($.u,-1)
$.u.pop()}s=A.cL(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cz(a,b,c){var t,s
if(A.cl(a))return b+"..."+c
t=new A.W(b)
B.a.i($.u,a)
try{s=t
s.a=A.cL(s.a,a,", ")}finally{if(0>=$.u.length)return A.b($.u,-1)
$.u.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eA(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.c9(m,m.r,a.$ti.c),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
t=A.c(l.d)
B.a.i(b,t)
k+=t.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
s=b.pop()
if(0>=b.length)return A.b(b,-1)
r=b.pop()}else{q=l.d;++j
if(!l.q()){if(j<=4){B.a.i(b,A.c(q))
return}s=A.c(q)
if(0>=b.length)return A.b(b,-1)
r=b.pop()
k+=s.length+2}else{p=l.d;++j
for(;l.q();q=p,p=o){o=l.d;++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.i(b,"...")
return}}r=A.c(q)
s=A.c(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)B.a.i(b,n)
B.a.i(b,r)
B.a.i(b,s)},
bE:function bE(a,b){this.a=a
this.b=b},
bO:function bO(){},
f:function f(){},
aQ:function aQ(a){this.a=a},
az:function az(){},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aX:function aX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a){this.a=a},
be:function be(a){this.a=a},
ba:function ba(a){this.a=a},
aU:function aU(a){this.a=a},
ay:function ay(){},
bP:function bP(a){this.a=a},
bt:function bt(a){this.a=a},
p:function p(){},
au:function au(){},
h:function h(){},
W:function W(a){this.a=a},
br:function br(){},
bQ:function bQ(){},
k:function k(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.c=a
this.d=b
this.b=c},
b4:function b4(){},
bc:function bc(){},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(a,b){this.a=a
this.b=b},
K:function K(){},
N:function N(){},
aO:function aO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
eR(a,b,c,d){var t,s,r,q,p=d.l(0,a)
if(p!=null)for(t=0;t<1;++t){s=p[t]
if(B.D.aE()<s.b){r=c+1
q=new A.at(s.a,b,r,new A.D(A.d([],u.n),A.d([],u.t)))
q.e=u.l.a(A.cI(b,r))
q.d=new A.bq()
return q}}return null},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d},
bD:function bD(a){this.b=a},
f0(){self.jsregionworker=A.eI(new A.c4(),u.r)},
c4:function c4(){},
bK:function bK(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
bq:function bq(){},
j:function j(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6(a,b){return new A.y(a*2-2*b,a+b)},
y:function y(a,b){this.a=a
this.b=b},
bF:function bF(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
D:function D(a,b){this.a=a
this.b=b},
am(a,b){var t=b.m(0,$.dg().L(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.q(s,r),p=q.m(0,$.cp().L(0,s+r)),o=t.E(0,q)
return new A.bs(a,q,b.E(0,p),o)},
o(a,b){return new A.q(a,b)},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
q:function q(a,b){this.a=a
this.b=b},
aw(a){var t,s,r,q,p=u.S,o=A.bA(256,0,!1,p),n=A.bA(256,0,!1,p)
for(t=0;t<256;++t)B.a.p(n,t,t)
s=A.da("6364136223846793005")
r=A.da("1442695040888963407")
a=B.e.Z(B.e.Z(B.e.Z(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.e.aj(a+31,t+1)
if(!(q<256))return A.b(n,q)
B.a.p(o,t,n[q])
n[q]=n[t]}return new A.bH(o)},
bH:function bH(a){this.a=a},
f7(a){return A.a3(new A.ar("Field '"+a+"' has been assigned during initialization."))},
aM(){return A.a3(A.dF(""))},
ei(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.ef,a)
t[$.co()]=a
a.$dart_jsFunction=t
return t},
ef(a,b){u.j.a(b)
u.Z.a(a)
return A.dJ(a,b,null)},
eI(a,b){if(typeof a=="function")return a
else return b.a(A.ei(a))},
eT(a,b,c,d){var t,s,r,q
for(t=0;t<4;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=c.a
q=c.b
q=new A.V(s.a,new A.y(r*2-2*q,r+q),a,new A.D(A.d([],u.n),A.d([],u.t)))
q.d=A.f5(q)
return q}}throw A.a(new A.bP("No tile type found for elevation: "+A.c(a)+", moisture: "+A.c(b)+". Fix the rules!"))},
f5(a){var t,s=a.c
if(s>0){t=a.a
return A.bn(a.b,0,t.c,t.d,t.e,s,1)}t=a.a
return A.bn(a.b,s,t.c,t.d,t.e,1,1)},
eJ(a){var t,s=a.c
if(s>0){t=a.a
return A.bn(a.b,0,t.c,t.d,t.e,s,a.d)}t=a.a
return A.bn(a.b,s,t.c,t.d,t.e,1,a.d)},
cI(a,b){return A.bn(a,b,B.J,B.H,B.E,0.35,0.6)},
bn(a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.d
a8=B.d
a9=B.d}else{a7=A.cn(a7,B.d,t)
a8=A.cn(a8,B.d,t)
a9=A.cn(a9,B.d,t)}}s=a5.m(0,A.a6(a6,a6)).m(0,B.U)
r=s.m(0,A.a6(b0,b0))
q=s.m(0,A.a6(0,b1))
p=r.m(0,A.a6(0,b1))
o=s.m(0,A.a6(b1,0))
n=r.m(0,A.a6(b1,0))
m=p.m(0,A.a6(b1,0))
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
a3=A.bA(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.p(a3,a4,a8.ga_())
B.a.p(a3,a4+6,a7.ga_())
B.a.p(a3,a4+12,a9.ga_())}return new A.D(a2,a3)},
cn(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.j(B.b.I((t+(b.a/255-t)*c)*255),B.b.I((s+(b.b/255-s)*c)*255),B.b.I((r+(b.c/255-r)*c)*255),B.b.I((q+(b.d/255-q)*c)*255))},
f4(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.cF(u.H),a1=A.d([],u.Q)
for(t=u.D,s=u.n,r=u.t,q=0;q<a2.length;q=p){p=q+1
o=0
while(!0){if(!(q<a2.length))return A.b(a2,q)
if(!(o<a2[q].length))break
c$0:{n=new A.k(o,q,t)
m=o+1
l=new A.k(m,p,t)
if(a0.U(0,n))break c$0
if(!(q<a2.length))return A.b(a2,q)
k=a2[q]
if(!(o<k.length))return A.b(k,o)
j=k[o]
i=j.a
h=j.c
for(;!0;){if(A.eh(a0,h,i,a2,n,l)){k=l.$ti
k.a(B.j)
g=B.j.a
f=k.c
e=f.a(l.a+g)
d=B.j.b
c=f.a(l.b+d)}else break
b=A.eg(a0,h,i,a2,n,new A.k(e,c,k))
if(b){k.a(B.i)
l=new A.k(f.a(e+B.i.a),f.a(c+B.i.b),k)}else{l=new A.k(f.a(e-g),f.a(c-d),k)
break}}a=l.a-n.a
if(a>1){k=new A.aO(i,j.b,h,a,new A.D(A.d([],s),A.d([],r)))
k.e=A.eJ(k)
B.a.i(a1,k)}else B.a.i(a1,j)
a0.D(0,A.eB(n,l))}o=m}}return a1},
eB(a,b){var t,s,r,q,p,o=u.H,n=A.cF(o)
for(t=a.a,s=b.a,r=a.b,q=b.b;t<s;++t)for(p=r;p<q;++p)n.i(0,new A.k(t,p,o))
return n},
eh(a,b,c,d,e,f){var t,s=f.a,r=e.b,q=new A.k(s,r,u.D),p=f.b
for(;r<p;++r){if(s>=B.a.gac(d).length||r>=d.length)return!1
if(a.U(0,q))return!1
if(!(r>=0&&r<d.length))return A.b(d,r)
t=d[r]
if(s>>>0!==s||s>=t.length)return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0},
eg(a,b,c,d,e,f){var t,s=e.a,r=f.b,q=new A.k(s,r,u.D),p=f.a
for(;s<p;++s){if(s>=B.a.gac(d).length||r>=d.length)return!1
if(a.U(0,q))return!1
if(r>>>0!==r||r>=d.length)return A.b(d,r)
t=d[r]
if(!(s>=0&&s<t.length))return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0}},J={
cm(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eQ(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.ck==null){A.eW()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.a(A.cO("Return interceptor for "+A.c(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bR
if(p==null)p=$.bR=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.f_(a)
if(q!=null)return q
if(typeof a=="function")return B.V
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.bR
if(p==null)p=$.bR=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
cA(a,b){if(a<0||a>4294967295)throw A.a(A.b8(a,0,4294967295,"length",null))
return J.cB(new Array(a),b)},
cB(a,b){return J.cC(A.d(a,b.j("e<0>")),b)},
cC(a,b){a.fixed$length=Array
return a},
G(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.b0.prototype}if(typeof a=="string")return J.a7.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.aZ.prototype
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a8.prototype
return a}if(a instanceof A.h)return a
return J.eQ(a)},
eO(a){if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(!(a instanceof A.h))return J.a_.prototype
return a},
d8(a){if(typeof a=="string")return J.a7.prototype
if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(!(a instanceof A.h))return J.a_.prototype
return a},
cq(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).A(a,b)},
bp(a){return J.G(a).gk(a)},
ds(a){return J.eO(a).gaf(a)},
cr(a){return J.d8(a).gn(a)},
dt(a){return J.G(a).gB(a)},
du(a,b){return J.G(a).ag(a,b)},
aN(a){return J.G(a).h(a)},
aY:function aY(){},
aZ:function aZ(){},
ao:function ao(){},
m:function m(){},
T:function T(){},
b6:function b6(){},
a_:function a_(){},
a8:function a8(){},
e:function e(a){this.$ti=a},
bu:function bu(a){this.$ti=a},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(){},
an:function an(){},
b0:function b0(){},
a7:function a7(){}},B={}
var w=[A,J,B]
var $={}
A.c7.prototype={}
J.aY.prototype={
A(a,b){return a===b},
gk(a){return A.b7(a)},
h(a){return"Instance of '"+A.bJ(a)+"'"},
ag(a,b){throw A.a(A.cG(a,u.o.a(b)))},
gB(a){return A.af(A.cg(this))}}
J.aZ.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.af(u.y)},
$iB:1,
$ici:1}
J.ao.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$iB:1}
J.m.prototype={}
J.T.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.b6.prototype={}
J.a_.prototype={}
J.a8.prototype={
h(a){var t=a[$.co()]
if(t==null)return this.al(a)
return"JavaScript function for "+J.aN(t)},
$ia5:1}
J.e.prototype={
i(a,b){A.aI(a).c.a(b)
if(!!a.fixed$length)A.a3(A.bh("add"))
a.push(b)},
D(a,b){A.aI(a).j("p<1>").a(b)
if(!!a.fixed$length)A.a3(A.bh("addAll"))
this.an(a,b)
return},
an(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.aV(a))
for(s=0;s<t;++s)a.push(b[s])},
gac(a){if(a.length>0)return a[0]
throw A.a(A.dD())},
h(a){return A.cz(a,"[","]")},
gaf(a){return new J.aP(a,a.length,A.aI(a).j("aP<1>"))},
gk(a){return A.b7(a)},
gn(a){return a.length},
l(a,b){if(!(b>=0&&b<a.length))throw A.a(A.ag(a,b))
return a[b]},
p(a,b,c){A.aI(a).c.a(c)
if(!!a.immutable$list)A.a3(A.bh("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.ag(a,b))
a[b]=c},
$ip:1,
$in:1}
J.bu.prototype={}
J.aP.prototype={
gG(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.c6(r)
throw A.a(r)}t=s.c
if(t>=q){s.sa7(null)
return!1}s.sa7(r[t]);++s.c
return!0},
sa7(a){this.d=this.$ti.j("1?").a(a)}}
J.ap.prototype={
J(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.bh(""+a+".toInt()"))},
I(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.bh(""+a+".round()"))},
aG(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
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
ak(a,b){if(b<0)throw A.a(A.eK(b))
return b>31?0:a<<b>>>0},
ab(a,b){var t
if(a>0)t=this.au(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
au(a,b){return b>31?0:a>>>b},
gB(a){return A.af(u.p)},
$iw:1,
$ia1:1}
J.an.prototype={
Z(a,b){var t=this.ak(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gB(a){return A.af(u.S)},
$iB:1,
$iah:1}
J.b0.prototype={
gB(a){return A.af(u.i)},
$iB:1}
J.a7.prototype={
av(a,b){if(b<0)throw A.a(A.ag(a,b))
if(b>=a.length)A.a3(A.ag(a,b))
return a.charCodeAt(b)},
a4(a,b){if(b>=a.length)throw A.a(A.ag(a,b))
return a.charCodeAt(b)},
m(a,b){return a+b},
F(a,b,c){return a.substring(b,A.dN(b,c,a.length))},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.af(u.N)},
gn(a){return a.length},
l(a,b){if(b>=a.length)throw A.a(A.ag(a,b))
return a[b]},
$iB:1,
$iA:1}
A.ar.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.al.prototype={}
A.ab.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bp(this.a)&536870911
this._hashCode=t
return t},
h(a){return'Symbol("'+A.c(this.a)+'")'},
A(a,b){if(b==null)return!1
return b instanceof A.ab&&this.a==b.a},
$iX:1}
A.aj.prototype={}
A.ai.prototype={
gH(a){return this.gn(this)===0},
h(a){return A.bB(this)},
$iz:1}
A.ak.prototype={
gn(a){return this.a},
V(a){return!1},
l(a,b){if(!this.V(b))return null
return this.b[A.x(b)]},
v(a,b){var t,s,r,q,p,o=this.$ti
o.j("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.x(t[q])
b.$2(p,o.a(r[p]))}}}
A.b_.prototype={
gaC(){var t=this.a
return t},
gaF(){var t,s,r,q,p=this
if(p.c===1)return B.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.p
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.b(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gaD(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.q
p=new A.S(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.b(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.b(r,m)
p.p(0,new A.ab(n),r[m])}return new A.aj(p,u.Y)},
$icy:1}
A.bI.prototype={
$2(a,b){var t
A.x(a)
t=this.a
t.b=t.b+"$"+a
B.a.i(this.b,a)
B.a.i(this.c,b);++t.a},
$S:2}
A.bM.prototype={
u(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.av.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.b1.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bf.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.bG.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.J.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dd(s==null?"unknown":s)+"'"},
$ia5:1,
gaJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.aS.prototype={$C:"$2",$R:2}
A.bd.prototype={}
A.bb.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dd(t)+"'"}}
A.a4.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.f2(this.a)^A.b7(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bJ(this.a)+"'")}}
A.bi.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b9.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bV.prototype={}
A.S.prototype={
gn(a){return this.a},
gH(a){return this.a===0},
V(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
l(a,b){var t,s,r,q,p=null
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
t=r[this.ad(a)]
s=this.ae(t,a)
if(s<0)return null
return t[s].b},
p(a,b,c){var t,s,r=this,q=A.a0(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.a2(t==null?r.b=r.S():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a2(s==null?r.c=r.S():s,b,c)}else r.aB(b,c)},
aB(a,b){var t,s,r,q,p=this,o=A.a0(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.S()
s=p.ad(a)
r=t[s]
if(r==null)t[s]=[p.T(a,b)]
else{q=p.ae(r,a)
if(q>=0)r[q].b=b
else r.push(p.T(a,b))}},
v(a,b){var t,s,r=this
A.a0(r).j("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.aV(r))
t=t.c}},
a2(a,b,c){var t,s=A.a0(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.T(b,c)
else t.b=c},
T(a,b){var t=this,s=A.a0(t),r=new A.bx(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ad(a){return J.bp(a)&0x3fffffff},
ae(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cq(a[s].a,b))return s
return-1},
h(a){return A.bB(this)},
S(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icE:1}
A.bx.prototype={}
A.by.prototype={
gn(a){return this.a.a}}
A.b3.prototype={
q(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.aV(r))
t=s.c
if(t==null){s.sa1(null)
return!1}else{s.sa1(t.a)
s.c=t.c
return!0}},
sa1(a){this.d=this.$ti.j("1?").a(a)}}
A.c0.prototype={
$1(a){return this.a(a)},
$S:0}
A.c1.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.c2.prototype={
$1(a){return this.a(A.x(a))},
$S:4}
A.v.prototype={
j(a){return A.bY(v.typeUniverse,this,a)},
a3(a){return A.e8(v.typeUniverse,this,a)}}
A.bk.prototype={}
A.bW.prototype={
h(a){return A.t(this.a,null)}}
A.bj.prototype={
h(a){return this.a}}
A.aD.prototype={}
A.aB.prototype={
gaf(a){var t=this,s=new A.ac(t,t.r,t.$ti.j("ac<1>"))
s.c=t.e
return s},
gn(a){return this.a},
U(a,b){var t=this.ao(b)
return t},
ao(a){var t=this.d
if(t==null)return!1
return this.a8(t[a.gk(a)&1073741823],a)>=0},
i(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a5(t==null?r.b=A.cc():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a5(s==null?r.c=A.cc():s,b)}else return r.am(b)},
am(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cc()
s=J.bp(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.N(a)]
else{if(q.a8(r,a)>=0)return!1
r.push(q.N(a))}return!0},
a5(a,b){this.$ti.c.a(b)
if(u.v.a(a[b])!=null)return!1
a[b]=this.N(b)
return!0},
N(a){var t=this,s=new A.bl(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
a8(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cq(a[s].a,b))return s
return-1}}
A.bl.prototype={}
A.ac.prototype={
gG(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.a(A.aV(r))
else if(s==null){t.sa6(null)
return!1}else{t.sa6(t.$ti.j("1?").a(s.a))
t.c=s.b
return!0}},
sa6(a){this.d=this.$ti.j("1?").a(a)}}
A.as.prototype={
v(a,b){var t,s,r,q=this,p=A.a0(q)
p.j("~(1,2)").a(b)
for(t=A.c9(q,q.r,p.c),p=p.z[1];t.q();){s=t.d
r=q.l(0,s)
b.$2(s,r==null?p.a(r):r)}},
gn(a){return this.a},
gH(a){return this.a===0},
h(a){return A.bB(this)},
$iz:1}
A.bC.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.c(a)
s.a=t+": "
s.a+=A.c(b)},
$S:1}
A.aH.prototype={}
A.a9.prototype={
l(a,b){return this.a.l(0,b)},
v(a,b){this.a.v(0,this.$ti.j("~(1,2)").a(b))},
gH(a){return this.a.a===0},
gn(a){return this.a.a},
h(a){return A.bB(this.a)},
$iz:1}
A.aA.prototype={}
A.aa.prototype={
D(a,b){var t,s,r
this.$ti.j("p<1>").a(b)
for(t=A.dS(b,b.r,b.$ti.c),s=t.$ti.c;t.q();){r=t.d
this.i(0,r==null?s.a(r):r)}},
h(a){return A.cz(this,"{","}")},
$ip:1}
A.aC.prototype={}
A.ad.prototype={}
A.aT.prototype={}
A.aW.prototype={}
A.aq.prototype={
h(a){var t=A.R(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.b2.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.bv.prototype={
X(a,b){var t=A.dR(a,this.gaz().b,null)
return t},
gaz(){return B.X}}
A.bw.prototype={}
A.bT.prototype={
ai(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=B.c.a4(a,r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(B.c.a4(a,o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(B.c.av(a,p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.c.F(a,s,r)
s=r+1
t.a+=A.l(92)
t.a+=A.l(117)
t.a+=A.l(100)
p=q>>>8&15
t.a+=A.l(p<10?48+p:87+p)
p=q>>>4&15
t.a+=A.l(p<10?48+p:87+p)
p=q&15
t.a+=A.l(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)t.a+=B.c.F(a,s,r)
s=r+1
t.a+=A.l(92)
switch(q){case 8:t.a+=A.l(98)
break
case 9:t.a+=A.l(116)
break
case 10:t.a+=A.l(110)
break
case 12:t.a+=A.l(102)
break
case 13:t.a+=A.l(114)
break
default:t.a+=A.l(117)
t.a+=A.l(48)
t.a+=A.l(48)
p=q>>>4&15
t.a+=A.l(p<10?48+p:87+p)
p=q&15
t.a+=A.l(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=B.c.F(a,s,r)
s=r+1
t.a+=A.l(92)
t.a+=A.l(q)}}if(s===0)t.a+=a
else if(s<n)t.a+=B.c.F(a,s,n)},
M(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.a(new A.b2(a,null))}B.a.i(t,a)},
K(a){var t,s,r,q,p=this
if(p.ah(a))return
p.M(a)
try{t=p.b.$1(a)
if(!p.ah(t)){r=A.cD(a,null,p.gaa())
throw A.a(r)}r=p.a
if(0>=r.length)return A.b(r,-1)
r.pop()}catch(q){s=A.f9(q)
r=A.cD(a,s,p.gaa())
throw A.a(r)}},
ah(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.b.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.ai(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.M(a)
r.aH(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return!0}else if(u.J.b(a)){r.M(a)
s=r.aI(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return s}else return!1},
aH(a){var t,s,r=this.c
r.a+="["
t=a.length
if(t!==0){if(0>=t)return A.b(a,0)
this.K(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.K(a[s])}}r.a+="]"},
aI(a){var t,s,r,q,p,o,n=this,m={}
if(a.gH(a)){n.c.a+="{}"
return!0}t=a.gn(a)*2
s=A.bA(t,null,!1,u.X)
r=m.a=0
m.b=!0
a.v(0,new A.bU(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ai(A.x(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.b(s,o)
n.K(s[o])}q.a+="}"
return!0}}
A.bU.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.p(t,s.a++,a)
B.a.p(t,s.a++,b)},
$S:1}
A.bS.prototype={
gaa(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.bE.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.R(b)
s.a=", "},
$S:5}
A.bO.prototype={
h(a){return this.O()}}
A.f.prototype={}
A.aQ.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.R(t)
return"Assertion failed"}}
A.az.prototype={}
A.I.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gR()+r+p
if(!t.a)return o
return o+t.gP()+": "+A.R(t.gY())},
gY(){return this.b}}
A.ax.prototype={
gY(){return A.eb(this.b)},
gR(){return"RangeError"},
gP(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.c(r):""
else if(r==null)t=": Not greater than or equal to "+A.c(s)
else if(r>s)t=": Not in inclusive range "+A.c(s)+".."+A.c(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.c(s)
return t}}
A.aX.prototype={
gY(){return A.P(this.b)},
gR(){return"RangeError"},
gP(){if(A.P(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gn(a){return this.f}}
A.b5.prototype={
h(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.W("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.R(o)
k.a=", "}l.d.v(0,new A.bE(k,j))
n=A.R(l.a)
m=j.h(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bg.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.be.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ba.prototype={
h(a){return"Bad state: "+this.a}}
A.aU.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.R(t)+"."}}
A.ay.prototype={
h(a){return"Stack Overflow"},
$if:1}
A.bP.prototype={
h(a){return"Exception: "+this.a}}
A.bt.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.p.prototype={
gn(a){var t,s=this.a,r=A.c9(s,s.r,this.$ti.c)
for(t=0;r.q();)++t
return t},
h(a){return A.dE(this,"(",")")}}
A.au.prototype={
gk(a){return A.h.prototype.gk.call(this,this)},
h(a){return"null"}}
A.h.prototype={$ih:1,
A(a,b){return this===b},
gk(a){return A.b7(this)},
h(a){return"Instance of '"+A.bJ(this)+"'"},
ag(a,b){throw A.a(A.cG(this,u.o.a(b)))},
gB(a){return A.eS(this)},
toString(){return this.h(this)}}
A.W.prototype={
gn(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$idP:1}
A.br.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.bQ.prototype={
aE(){return Math.random()}}
A.k.prototype={
h(a){return"Point("+A.c(this.a)+", "+A.c(this.b)+")"},
A(a,b){if(b==null)return!1
return b instanceof A.k&&this.a===b.a&&this.b===b.b},
gk(a){var t=B.b.gk(this.a),s=B.b.gk(this.b),r=A.cM(A.cM(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.U.prototype={
O(){return"LevelOfDetail."+this.b}}
A.b4.prototype={}
A.bc.prototype={}
A.Y.prototype={}
A.L.prototype={}
A.K.prototype={}
A.N.prototype={}
A.aO.prototype={
a0(){return this.c},
W(){var t=this,s=t.b
return B.h.X(A.bz(["gameObjectType","AreaTile","type",t.a.b,"isoCoordinate",A.c(s.a)+","+A.c(s.b),"elevation",t.c,"width",t.d],u.N,u.K),null)}}
A.V.prototype={
a0(){return this.c},
W(){var t=this.b
return B.h.X(A.bz(["gameObjectType","SingleTile","type",this.a.b,"isoCoordinate",A.c(t.a)+","+A.c(t.b),"elevation",this.c],u.N,u.K),null)}}
A.Z.prototype={
O(){return"TileType."+this.b}}
A.at.prototype={
W(){var t=this.b
return B.h.X(A.bz(["gameObjectType","NaturalItem","type",this.a.b,"isoCoordinate",A.c(t.a)+","+A.c(t.b),"elevation",this.c],u.N,u.K),null)}}
A.bD.prototype={
O(){return"NaturalItemType."+this.b}}
A.c4.prototype={
$1(a){var t,s,r,q,p,o,n,m,l=new A.bc(),k=new A.bK(l),j=J.d8(a),i=A.P(j.l(a,0)),h=A.P(j.l(a,1)),g=A.P(j.l(a,2)),f=A.P(j.l(a,3)),e=A.P(j.l(a,4)),d=A.P(j.l(a,5))
j=A.P(j.l(a,6))
if(!(j>=0&&j<4))return A.b(B.o,j)
t=B.o[j]
j=u.H
j=j.a(new A.k(i,h,j))
s=new A.bF(l)
s.a=A.aw(2)
s.b=A.aw(3)
s.c=A.aw(4)
s.d=A.aw(5)
s.e=A.aw(6)
s.f=A.aw(7)
r=s.aw(g,f,e,d,t)
q=k.aq(g,f,e,d,r[0],r[1])
p=k.ap(q)
l=A.ca(k.ar(A.f4(q)),u.k)
if(t.d)B.a.D(l,p)
o=A.d([],u.s)
for(n=l.length,m=0;m<l.length;l.length===n||(0,A.c6)(l),++m)B.a.i(o,l[m].W())
l=new A.bL(j,l).a
return A.d([l.a,l.b,o],u.f)},
$S:6}
A.bK.prototype={
aq(a,b,c,d,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.d([],u.F)
for(t=u.d,s=u.W,r=a0.length,q=a1.length,p=u.q,o=0;o<a;++o){if(!(o<r))return A.b(a0,o)
n=a0[o]
if(!(o<q))return A.b(a1,o)
m=a1[o]
l=A.d([],p)
for(k=n.length,j=m.length,i=c+o,h=0;h<b;++h){if(!(h<k))return A.b(n,h)
g=n[h]
if(!(h<j))return A.b(m,h)
B.a.i(l,A.eT(g,m[h],new A.k(i,d+h,t),A.d([new A.Y(B.t,0,f),new A.Y(B.v,0.2,0.3),new A.Y(B.u,f,0.3),new A.Y(B.w,f,f)],s)))}B.a.i(e,l)}return e},
ar(a){var t,s
u.c.a(a)
t=A.d([],u.Q)
for(s=0;s<a.length;++s)if(a[s].a0()>-5){if(!(s<a.length))return A.b(a,s)
B.a.i(t,a[s])}return t},
ap(a){var t,s,r,q,p,o,n,m
u.I.a(a)
t=A.d([],u.V)
for(s=u.O,r=u.e,q=u.a,p=0;p<a.length;++p){o=0
while(!0){n=a.length
if(0>=n)return A.b(a,0)
if(!(o<a[0].length))break
if(!(p<n))return A.b(a,p)
n=a[p]
if(!(o<n.length))return A.b(n,o)
n=n[o]
m=A.eR(n.a,n.b,n.c,A.bz([B.t,A.d([new A.L(B.f,0.03)],s),B.v,A.d([new A.L(B.f,0.05)],s),B.u,A.d([new A.L(B.f,0.08)],s),B.w,A.d([new A.L(B.f,0.02)],s)],r,q))
if(m!=null)B.a.i(t,m);++o}}return t}}
A.bL.prototype={}
A.bq.prototype={}
A.j.prototype={
ga_(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.y.prototype={
m(a,b){return new A.y(this.a+b.a,this.b+b.b)},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.y&&b.a===this.a&&b.b===this.b},
gk(a){return B.b.gk(this.a)^B.b.gk(this.b)},
h(a){return""+B.b.J(this.a)+", "+B.b.J(this.b)}}
A.bF.prototype={
aw(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a9(a1,a2),a=c.a9(a1,a2),a0=a5.c
for(t=b.length,s=a.length,r=0;r<a1;r+=a0)for(q=a3+r,p=q*0.001,o=q*0.01,n=q*0.1,m=0;m<a2;m+=a0){l=a4+m
k=c.a
k===$&&A.aM()
k=A.am(k.a,new A.q(p,l*0.001)).C()
j=c.b
j===$&&A.aM()
j=A.am(j.a,new A.q(o,l*0.01)).C()
i=c.c
i===$&&A.aM()
h=k+0.1*j+0.01*A.am(i.a,new A.q(n,l*0.1)).C()
if(h>0.2)h*=1.5
k=c.d
k===$&&A.aM()
k=A.am(k.a,new A.q(q*0.006,l*0.006)).C()
j=c.e
j===$&&A.aM()
j=A.am(j.a,new A.q(q*0.016,l*0.016)).C()
i=c.f
i===$&&A.aM()
g=k+0.5*j+0.25*A.am(i.a,new A.q(q*0.048,l*0.048)).C()
for(k=(h+0)*100,f=0;f<a0;++f)for(j=r+f,i=j<a1,e=0;e<a0;++e)if(i&&m+e<a2){if(!(j<t))return A.b(b,j)
d=m+e
B.a.p(b[j],d,B.b.aG(k))
if(!(j<s))return A.b(a,j)
B.a.p(a[j],d,g)}}return A.d([b,a],u.G)},
a9(a,b){var t,s,r,q,p=J.cA(a,u.u)
for(t=u.i,s=0;s<a;++s){r=J.cA(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.D.prototype={}
A.bs.prototype={
t(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.de()
if(!(a<8))return A.b(j,a)
t=j[a]
s=k.c.E(0,t).E(0,$.cp().L(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.m(0,t)
m=u.L.a(k.a)
n=m[m[B.b.J(n.a)&255]+B.b.J(n.b)&255]
l=$.df()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
C(){var t,s,r,q,p=this
p.t(0)
p.t(1)
t=p.d
s=t.a
t=t.b
r=s+t
if(r<=1){q=1-r
if(q>s||q>t)if(s>t)p.t(2)
else p.t(3)
else p.t(4)
p.t(5)}else{q=2-r
if(q<s||q<t)if(s>t)p.t(6)
else p.t(7)
else p.t(5)
p.t(4)}return p.e/47}}
A.q.prototype={
m(a,b){return new A.q(this.a+b.a,this.b+b.b)},
E(a,b){return new A.q(this.a-b.a,this.b-b.b)},
L(a,b){return new A.q(this.a*b,this.b*b)},
h(a){return A.c(this.a)+", "+A.c(this.b)}}
A.bH.prototype={};(function aliases(){var t=J.T.prototype
t.al=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_2
t(A,"eL","ej",0)
s(A,"fC","cI",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.h,null)
r(A.h,[A.c7,J.aY,J.aP,A.f,A.p,A.ab,A.a9,A.ai,A.b_,A.J,A.bM,A.bG,A.bV,A.as,A.bx,A.b3,A.v,A.bk,A.bW,A.aa,A.bl,A.ac,A.aH,A.aT,A.aW,A.bT,A.bO,A.ay,A.bP,A.bt,A.au,A.W,A.bQ,A.k,A.b4,A.Y,A.L,A.K,A.bK,A.bL,A.bq,A.j,A.y,A.bF,A.D,A.bs,A.q,A.bH])
r(J.aY,[J.aZ,J.ao,J.m,J.ap,J.a7])
r(J.m,[J.T,J.e,A.br])
r(J.T,[J.b6,J.a_,J.a8])
s(J.bu,J.e)
r(J.ap,[J.an,J.b0])
r(A.f,[A.ar,A.az,A.b1,A.bf,A.bi,A.b9,A.bj,A.aq,A.aQ,A.I,A.b5,A.bg,A.be,A.ba,A.aU])
s(A.al,A.p)
s(A.ad,A.a9)
s(A.aA,A.ad)
s(A.aj,A.aA)
s(A.ak,A.ai)
r(A.J,[A.aS,A.bd,A.c0,A.c2,A.c4])
r(A.aS,[A.bI,A.c1,A.bC,A.bU,A.bE])
s(A.av,A.az)
r(A.bd,[A.bb,A.a4])
s(A.S,A.as)
s(A.by,A.al)
s(A.aD,A.bj)
s(A.aC,A.aa)
s(A.aB,A.aC)
s(A.b2,A.aq)
s(A.bv,A.aT)
s(A.bw,A.aW)
s(A.bS,A.bT)
r(A.I,[A.ax,A.aX])
r(A.bO,[A.U,A.Z,A.bD])
s(A.bc,A.b4)
r(A.K,[A.N,A.at])
r(A.N,[A.aO,A.V])
t(A.ad,A.aH)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ah:"int",w:"double",a1:"num",A:"String",ci:"bool",au:"Null",n:"List"},mangledNames:{},types:["@(@)","~(h?,h?)","~(A,@)","@(@,A)","@(A)","~(X,@)","n<h>(@)","D(y,w)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.e7(v.typeUniverse,JSON.parse('{"b6":"T","a_":"T","a8":"T","aZ":{"ci":[],"B":[]},"ao":{"B":[]},"e":{"n":["1"],"p":["1"]},"bu":{"e":["1"],"n":["1"],"p":["1"]},"ap":{"w":[],"a1":[]},"an":{"w":[],"ah":[],"a1":[],"B":[]},"b0":{"w":[],"a1":[],"B":[]},"a7":{"A":[],"B":[]},"ar":{"f":[]},"al":{"p":["1"]},"ab":{"X":[]},"aj":{"aA":["1","2"],"ad":["1","2"],"a9":["1","2"],"aH":["1","2"],"z":["1","2"]},"ai":{"z":["1","2"]},"ak":{"ai":["1","2"],"z":["1","2"]},"b_":{"cy":[]},"av":{"f":[]},"b1":{"f":[]},"bf":{"f":[]},"J":{"a5":[]},"aS":{"a5":[]},"bd":{"a5":[]},"bb":{"a5":[]},"a4":{"a5":[]},"bi":{"f":[]},"b9":{"f":[]},"S":{"as":["1","2"],"cE":["1","2"],"z":["1","2"]},"by":{"p":["1"]},"bj":{"f":[]},"aD":{"f":[]},"aB":{"aa":["1"],"p":["1"]},"as":{"z":["1","2"]},"a9":{"z":["1","2"]},"aA":{"ad":["1","2"],"a9":["1","2"],"aH":["1","2"],"z":["1","2"]},"aa":{"p":["1"]},"aC":{"aa":["1"],"p":["1"]},"aq":{"f":[]},"b2":{"f":[]},"w":{"a1":[]},"ah":{"a1":[]},"n":{"p":["1"]},"aQ":{"f":[]},"az":{"f":[]},"I":{"f":[]},"ax":{"f":[]},"aX":{"f":[]},"b5":{"f":[]},"bg":{"f":[]},"be":{"f":[]},"ba":{"f":[]},"aU":{"f":[]},"ay":{"f":[]},"W":{"dP":[]},"bc":{"b4":[]},"N":{"K":[]},"V":{"N":[],"K":[]},"aO":{"N":[],"K":[]},"at":{"K":[]}}'))
A.e6(v.typeUniverse,JSON.parse('{"al":1,"aC":1,"aT":2,"aW":2}'))
var u=(function rtii(){var t=A.aK
return{Y:t("aj<X,@>"),C:t("f"),Z:t("a5"),k:t("K"),o:t("cy"),U:t("p<@>"),G:t("e<n<n<w>>>"),F:t("e<n<V>>"),V:t("e<at>"),O:t("e<L>"),f:t("e<h>"),q:t("e<V>"),s:t("e<A>"),Q:t("e<N>"),W:t("e<Y>"),n:t("e<w>"),b:t("e<@>"),t:t("e<ah>"),T:t("ao"),g:t("a8"),B:t("S<X,@>"),I:t("n<n<V>>"),a:t("n<L>"),r:t("n<h>(@)"),c:t("n<N>"),u:t("n<w>"),j:t("n<@>"),L:t("n<ah>"),J:t("z<@,@>"),P:t("au"),K:t("h"),d:t("k<w>"),D:t("k<ah>"),H:t("k<a1>"),M:t("fg"),N:t("A"),h:t("X"),e:t("Z"),R:t("B"),E:t("a_"),l:t("D"),y:t("ci"),i:t("w"),z:t("@"),S:t("ah"),A:t("0&*"),_:t("h*"),m:t("cx<au>?"),X:t("h?"),v:t("bl?"),p:t("a1")}})();(function constants(){var t=hunkHelpers.makeConstList
B.T=J.aY.prototype
B.a=J.e.prototype
B.e=J.an.prototype
B.b=J.ap.prototype
B.c=J.a7.prototype
B.V=J.a8.prototype
B.W=J.m.prototype
B.r=J.b6.prototype
B.k=J.a_.prototype
B.l=function getTagFallback(o) {
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
B.m=function(hooks) { return hooks; }

B.h=new A.bv()
B.D=new A.bQ()
B.n=new A.bV()
B.E=new A.j(255,100,96,80)
B.H=new A.j(255,120,116,100)
B.J=new A.j(255,140,136,120)
B.d=new A.j(255,1,46,143)
B.U=new A.y(0,0)
B.X=new A.bw(null)
B.Y=new A.U(1,!0,"maximum")
B.Z=new A.U(2,!1,"mid")
B.a_=new A.U(4,!1,"low")
B.a0=new A.U(8,!1,"minimal")
B.o=A.d(t([B.Y,B.Z,B.a_,B.a0]),A.aK("e<U>"))
B.p=A.d(t([]),u.b)
B.a1=A.d(t([]),A.aK("e<X>"))
B.q=new A.ak(0,{},B.a1,A.aK("ak<X,@>"))
B.f=new A.bD("rock")
B.i=new A.k(0,1,u.D)
B.j=new A.k(1,0,u.D)
B.a2=new A.ab("call")
B.O=new A.j(255,173,162,115)
B.M=new A.j(255,159,148,103)
B.K=new A.j(255,148,138,95)
B.t=new A.Z(B.O,B.M,B.K,"lakeFloorBare")
B.F=new A.j(255,110,110,121)
B.R=new A.j(255,90,90,101)
B.Q=new A.j(255,70,70,81)
B.u=new A.Z(B.F,B.R,B.Q,"svalbardMountain")
B.I=new A.j(255,135,143,102)
B.G=new A.j(255,115,123,82)
B.S=new A.j(255,95,103,62)
B.v=new A.Z(B.I,B.G,B.S,"svalbardGrass")
B.P=new A.j(255,191,200,202)
B.N=new A.j(255,171,180,182)
B.L=new A.j(255,151,160,162)
B.w=new A.Z(B.P,B.N,B.L,"svalbardIce")})();(function staticFields(){$.bR=null
$.u=A.d([],u.f)
$.cH=null
$.cu=null
$.ct=null
$.d9=null
$.d6=null
$.dc=null
$.c_=null
$.c3=null
$.ck=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"fa","co",()=>A.eP("_$dart_dartClosure"))
t($,"fh","dh",()=>A.C(A.bN({
toString:function(){return"$receiver$"}})))
t($,"fi","di",()=>A.C(A.bN({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"fj","dj",()=>A.C(A.bN(null)))
t($,"fk","dk",()=>A.C(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fn","dn",()=>A.C(A.bN(void 0)))
t($,"fo","dp",()=>A.C(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fm","dm",()=>A.C(A.cN(null)))
t($,"fl","dl",()=>A.C(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"fq","dr",()=>A.C(A.cN(void 0)))
t($,"fp","dq",()=>A.C(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"fc","df",()=>A.d([A.o(5,2),A.o(2,5),A.o(-5,2),A.o(-2,5),A.o(5,-2),A.o(2,-5),A.o(-5,-2),A.o(-2,-5)],A.aK("e<q>")))
s($,"fb","de",()=>A.d([A.o(1,0),A.o(0,1),A.o(1,-1),A.o(-1,1),A.o(1,1),A.o(0,0),A.o(2,0),A.o(0,2)],A.aK("e<q>")))
t($,"fe","dg",()=>A.o(-0.211324865405187,-0.211324865405187))
t($,"fd","cp",()=>A.o(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.m,DOMError:J.m,ErrorEvent:J.m,Event:J.m,InputEvent:J.m,SubmitEvent:J.m,MediaError:J.m,NavigatorUserMediaError:J.m,OverconstrainedError:J.m,PositionError:J.m,GeolocationPositionError:J.m,SensorErrorEvent:J.m,SpeechRecognitionError:J.m,DOMException:A.br})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,DOMException:true})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.f0
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
