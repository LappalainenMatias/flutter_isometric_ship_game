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
return a?function(c){if(t===null)t=A.ck(b)
return new t(c,this)}:function(){if(t===null)t=A.ck(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.ck(a).prototype
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
a(hunkHelpers,v,w,$)}var A={c8:function c8(){},
dH(a){return new A.ar("Field '"+a+"' has not been initialized.")},
cM(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cm(a){var t,s
for(t=$.v.length,s=0;s<t;++s)if(a===$.v[s])return!0
return!1},
dF(){return new A.ba("No element")},
ar:function ar(a){this.a=a},
al:function al(){},
aa:function aa(a){this.a=a},
de(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
c(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aM(a)
return t},
b7(a){var t,s=$.cH
if(s==null)s=$.cH=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
dO(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.b(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bJ(a){return A.dM(a)},
dM(a){var t,s,r,q
if(a instanceof A.j)return A.u(A.bo(a),null)
t=J.I(a)
if(t===B.T||t===B.W||u.m.b(a)){s=B.m(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.u(A.bo(a),null)},
dP(a){if(typeof a=="number"||A.ci(a))return J.aM(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.L)return a.h(0)
return"Instance of '"+A.bJ(a)+"'"},
l(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.e.ad(t,10)|55296)>>>0,t&1023|56320)}throw A.a(A.b8(a,0,1114111,null,null))},
O(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.E(t,b)
r.b=""
if(c!=null&&c.a!==0)c.v(0,new A.bI(r,s,t))
return J.dv(a,new A.b_(B.a2,0,t,s,0))},
dN(a,b,c){var t,s,r=c==null||c.a===0
if(r){t=b.length
if(t===0){if(!!a.$0)return a.$0()}else if(t===1){if(!!a.$1)return a.$1(b[0])}else if(t===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(t===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(t===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(t===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
s=a[""+"$"+t]
if(s!=null)return s.apply(a,b)}return A.dL(a,b,c)},
dL(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=b.length,f=a.$R
if(g<f)return A.O(a,b,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.I(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.O(a,b,c)
if(g===f)return p.apply(a,b)
return A.O(a,b,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.O(a,b,c)
o=f+r.length
if(g>o)return A.O(a,b,null)
if(g<o){n=r.slice(g-f)
m=A.cb(b,u.z)
B.a.E(m,n)}else m=b
return p.apply(a,m)}else{if(g>f)return A.O(a,b,c)
m=A.cb(b,u.z)
l=Object.keys(r)
if(c==null)for(s=l.length,k=0;k<l.length;l.length===s||(0,A.c6)(l),++k){j=r[A.y(l[k])]
if(B.o===j)return A.O(a,m,c)
B.a.i(m,j)}else{for(s=l.length,i=0,k=0;k<l.length;l.length===s||(0,A.c6)(l),++k){h=A.y(l[k])
if(c.H(h)){++i
B.a.i(m,c.m(0,h))}else{j=r[h]
if(B.o===j)return A.O(a,m,c)
B.a.i(m,j)}}if(i!==c.a)return A.O(a,m,c)}return p.apply(a,m)}},
b(a,b){if(a==null)J.cr(a)
throw A.a(A.af(a,b))},
af(a,b){var t,s="index"
if(!A.d4(b))return new A.K(!0,b,s,null)
t=J.cr(a)
if(b<0||b>=t)return new A.aX(t,!0,b,s,"Index out of range")
return A.dQ(b,s)},
eP(a){return new A.K(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.az()
t=new Error()
t.dartException=a
s=A.fb
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fb(){return J.aM(this.dartException)},
a3(a){throw A.a(a)},
c6(a){throw A.a(A.aU(a))},
E(a){var t,s,r,q,p,o
a=A.f6(a.replace(String({}),"$receiver$"))
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
c9(a,b){var t=b==null,s=t?null:b.method
return new A.b1(a,s,t?null:b.receiver)},
fc(a){if(a==null)return new A.bG(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.eN(a)},
a2(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eN(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.e.ad(s,16)&8191)===10)switch(r){case 438:return A.a2(a,A.c9(A.c(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.c(t)
return A.a2(a,new A.av(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.di()
o=$.dj()
n=$.dk()
m=$.dl()
l=$.dp()
k=$.dq()
j=$.dn()
$.dm()
i=$.ds()
h=$.dr()
g=p.u(t)
if(g!=null)return A.a2(a,A.c9(A.y(t),g))
else{g=o.u(t)
if(g!=null){g.method="call"
return A.a2(a,A.c9(A.y(t),g))}else{g=n.u(t)
if(g==null){g=m.u(t)
if(g==null){g=l.u(t)
if(g==null){g=k.u(t)
if(g==null){g=j.u(t)
if(g==null){g=m.u(t)
if(g==null){g=i.u(t)
if(g==null){g=h.u(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.y(t)
return A.a2(a,new A.av(t,g==null?f:g.method))}}}return A.a2(a,new A.bf(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.ay()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a2(a,new A.K(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.ay()
return a},
f5(a){if(a==null||typeof a!="object")return J.bp(a)
else return A.b7(a)},
eS(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
dE(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
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
q=a}t.$S=A.dA(a0,i,h)
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
dA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dy)}throw A.a("Error in functionType of tearoff")},
dB(a,b,c,d){var t=A.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cw(a,b,c,d){var t,s
if(c)return A.dD(a,b,d)
t=b.length
s=A.dB(t,d,a,b)
return s},
dC(a,b,c,d){var t=A.cv,s=A.dz
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
dD(a,b,c){var t,s
if($.ct==null)$.ct=A.cs("interceptor")
if($.cu==null)$.cu=A.cs("receiver")
t=b.length
s=A.dC(t,c,a,b)
return s},
ck(a){return A.dE(a)},
dy(a,b){return A.bY(v.typeUniverse,A.bo(a.a),b)},
cv(a){return a.a},
dz(a){return a.b},
cs(a){var t,s,r,q=new A.a4("receiver","interceptor"),p=J.cC(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.dx("Field name "+a+" not found."))},
f9(a){throw A.a(new A.bi(a))},
eU(a){return v.getIsolateTag(a)},
ca(a,b,c){var t=new A.b3(a,b,c.j("b3<0>"))
t.c=a.e
return t},
f2(a){var t,s,r,q,p,o=A.y($.da.$1(a)),n=$.c_[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c3[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.ej($.d7.$2(a,o))
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
return p.i}if(q==="+")return A.dc(a,t)
if(q==="*")throw A.a(A.cO(o))
if(v.leafTags[o]===true){p=A.c5(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dc(a,t)},
dc(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c5(a){return J.cn(a,!1,null,!!a.$ifi)},
f4(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c5(t)
else return J.cn(t,c,null,null)},
eZ(){if(!0===$.cl)return
$.cl=!0
A.f_()},
f_(){var t,s,r,q,p,o,n,m
$.c_=Object.create(null)
$.c3=Object.create(null)
A.eY()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dd.$1(p)
if(o!=null){n=A.f4(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eY(){var t,s,r,q,p,o,n=B.x()
n=A.ad(B.y,A.ad(B.z,A.ad(B.n,A.ad(B.n,A.ad(B.A,A.ad(B.B,A.ad(B.C(B.m),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.da=new A.c0(q)
$.d7=new A.c1(p)
$.dd=new A.c2(o)},
ad(a,b){return a(b)||b},
eR(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
f6(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
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
L:function L(){},
aR:function aR(){},
bd:function bd(){},
bb:function bb(){},
a4:function a4(a,b){this.a=a
this.b=b},
bi:function bi(a){this.a=a},
b9:function b9(a){this.a=a},
bV:function bV(){},
B:function B(a){var _=this
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
return t==null?b.c=A.cg(a,b.y,!0):t},
cc(a,b){var t=b.c
return t==null?b.c=A.aF(a,"cx",[b.y]):t},
cK(a){var t=a.x
if(t===6||t===7||t===8)return A.cK(a.y)
return t===12||t===13},
dS(a){return a.at},
ag(a){return A.bX(v.typeUniverse,a,!1)},
Q(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cX(a,s,!0)
case 7:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cg(a,s,!0)
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
return A.ce(a,o,m)
case 12:l=b.y
k=A.Q(a,l,c,a0)
j=b.z
i=A.eK(a,j,c,a0)
if(k===l&&i===j)return b
return A.cV(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aJ(a,h,c,a0)
p=b.y
o=A.Q(a,p,c,a0)
if(g===h&&o===p)return b
return A.cf(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.aQ("Attempted to substitute unexpected RTI kind "+d))}},
aJ(a,b,c,d){var t,s,r,q,p=b.length,o=A.bZ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Q(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eL(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bZ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Q(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eK(a,b,c,d){var t,s=b.a,r=A.aJ(a,s,c,d),q=b.b,p=A.aJ(a,q,c,d),o=b.c,n=A.eL(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bk()
t.a=r
t.b=p
t.c=n
return t},
d(a,b){a[v.arrayRti]=b
return a},
d8(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eX(s)
t=a.$S()
return t}return null},
f0(a,b){var t
if(A.cK(b))if(a instanceof A.L){t=A.d8(a)
if(t!=null)return t}return A.bo(a)},
bo(a){if(a instanceof A.j)return A.a0(a)
if(Array.isArray(a))return A.aI(a)
return A.ch(J.I(a))},
aI(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
a0(a){var t=a.$ti
return t!=null?t:A.ch(a)},
ch(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.ew(a,t)},
ew(a,b){var t=a instanceof A.L?a.__proto__.__proto__.constructor:b,s=A.ef(v.typeUniverse,t.name)
b.$ccache=s
return s},
eX(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bX(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eW(a){return A.ae(A.a0(a))},
eJ(a){var t=a instanceof A.L?A.d8(a):null
if(t!=null)return t
if(u.R.b(a))return J.du(a).a
if(Array.isArray(a))return A.aI(a)
return A.bo(a)},
ae(a){var t=a.w
return t==null?a.w=A.d0(a):t},
d0(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bW(a)
t=A.bX(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.d0(t):s},
ev(a){var t,s,r,q,p,o=this
if(o===u.K)return A.H(o,a,A.eB)
if(!A.J(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.H(o,a,A.eF)
t=o.x
if(t===7)return A.H(o,a,A.et)
if(t===1)return A.H(o,a,A.d5)
s=t===6?o.y:o
t=s.x
if(t===8)return A.H(o,a,A.ex)
if(s===u.S)r=A.d4
else if(s===u.i||s===u.p)r=A.eA
else if(s===u.N)r=A.eD
else r=s===u.y?A.ci:null
if(r!=null)return A.H(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.f1)){o.r="$i"+q
if(q==="h")return A.H(o,a,A.ez)
return A.H(o,a,A.eE)}}else if(t===11){p=A.eR(s.y,s.z)
return A.H(o,a,p==null?A.d5:p)}return A.H(o,a,A.er)},
H(a,b,c){a.b=c
return a.b(b)},
eu(a){var t,s=this,r=A.eq
if(!A.J(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.ek
else if(s===u.K)r=A.ei
else{t=A.aK(s)
if(t)r=A.es}s.a=r
return s.a(a)},
bn(a){var t,s=a.x
if(!A.J(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bn(a.y)))t=s===8&&A.bn(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
er(a){var t=this
if(a==null)return A.bn(t)
return A.i(v.typeUniverse,A.f0(a,t),null,t,null)},
et(a){if(a==null)return!0
return this.y.b(a)},
eE(a){var t,s=this
if(a==null)return A.bn(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.I(a)[t]},
ez(a){var t,s=this
if(a==null)return A.bn(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.I(a)[t]},
eq(a){var t,s=this
if(a==null){t=A.aK(s)
if(t)return a}else if(s.b(a))return a
A.d1(a,s)},
es(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.d1(a,t)},
d1(a,b){throw A.a(A.e4(A.cP(a,A.u(b,null))))},
cP(a,b){return A.R(a)+": type '"+A.u(A.eJ(a),null)+"' is not a subtype of type '"+b+"'"},
e4(a){return new A.aD("TypeError: "+a)},
r(a,b){return new A.aD("TypeError: "+A.cP(a,b))},
ex(a){var t=this
return t.y.b(a)||A.cc(v.typeUniverse,t).b(a)},
eB(a){return a!=null},
ei(a){if(a!=null)return a
throw A.a(A.r(a,"Object"))},
eF(a){return!0},
ek(a){return a},
d5(a){return!1},
ci(a){return!0===a||!1===a},
fu(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.r(a,"bool"))},
fw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool"))},
fv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.r(a,"bool?"))},
d_(a){if(typeof a=="number")return a
throw A.a(A.r(a,"double"))},
fy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double"))},
fx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"double?"))},
d4(a){return typeof a=="number"&&Math.floor(a)===a},
bm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.r(a,"int"))},
fA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int"))},
fz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.r(a,"int?"))},
eA(a){return typeof a=="number"},
fB(a){if(typeof a=="number")return a
throw A.a(A.r(a,"num"))},
fC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num"))},
eh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.r(a,"num?"))},
eD(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.a(A.r(a,"String"))},
fD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String"))},
ej(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.r(a,"String?"))},
d6(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
eI(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.d6(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.u(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d2(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.d([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.i(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b(a4,k)
n=B.c.l(n+m,a4[k])
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
if(m===9){q=A.eM(a.y)
p=a.z
return p.length>0?q+("<"+A.d6(p,b)+">"):q}if(m===11)return A.eI(a,b)
if(m===12)return A.d2(a,b,null)
if(m===13)return A.d2(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
eM(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eg(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ef(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bX(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aG(a,5,"#")
r=A.bZ(t)
for(q=0;q<t;++q)r[q]=s
p=A.aF(a,b,r)
o[b]=p
return p}else return n},
ed(a,b){return A.cY(a.tR,b)},
ec(a,b){return A.cY(a.eT,b)},
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
ee(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.ce(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
G(a,b){b.a=A.eu
b.b=A.ev
return b},
aG(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.w(null,null)
t.x=b
t.at=c
s=A.G(a,t)
a.eC.set(c,s)
return s},
cX(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.e9(a,b,s,c)
a.eC.set(s,t)
return t},
e9(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.J(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.w(null,null)
r.x=6
r.y=b
r.at=c
return A.G(a,r)},
cg(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.e8(a,b,s,c)
a.eC.set(s,t)
return t},
e8(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.J(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aK(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aK(r.y))return r
else return A.cJ(a,b)}}q=new A.w(null,null)
q.x=7
q.y=b
q.at=c
return A.G(a,q)},
cW(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.e6(a,b,s,c)
a.eC.set(s,t)
return t},
e6(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.J(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aF(a,"cx",[b])
else if(b===u.P||b===u.T)return u.w}r=new A.w(null,null)
r.x=8
r.y=b
r.at=c
return A.G(a,r)},
ea(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.x=14
t.y=b
t.at=r
s=A.G(a,t)
a.eC.set(r,s)
return s},
aE(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
e5(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aF(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aE(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.w(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
ce(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aE(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
eb(a,b,c){var t,s,r="+"+(b+"("+A.aE(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.G(a,t)
a.eC.set(r,s)
return s},
cV(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aE(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aE(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.e5(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.w(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.G(a,q)
a.eC.set(s,p)
return p},
cf(a,b,c,d){var t,s=b.at+("<"+A.aE(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.e7(a,b,c,s,d)
a.eC.set(s,t)
return t},
e7(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bZ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Q(a,b,s,0)
n=A.aJ(a,c,s,0)
return A.cf(a,o,n,c!==n)}}m=new A.w(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.G(a,m)},
cR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cT(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.e_(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cS(a,s,m,l,!1)
else if(r===46)s=A.cS(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.P(a.u,a.e,l.pop()))
break
case 94:l.push(A.ea(a.u,l.pop()))
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
case 62:A.e1(a,l)
break
case 38:A.e0(a,l)
break
case 42:q=a.u
l.push(A.cX(q,A.P(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cg(q,A.P(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cW(q,A.P(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dZ(a,l)
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
A.e3(a.u,a.e,p)
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
return A.P(a.u,a.e,n)},
e_(a,b,c,d){var t,s,r=b-48
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
o=A.eg(t,p.y)[q]
if(o==null)A.a3('No "'+q+'" in "'+A.dS(p)+'"')
d.push(A.bY(t,p,o))}else d.push(q)
return n},
e1(a,b){var t,s=a.u,r=A.cQ(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aF(s,q,r))
else{t=A.P(s,a.e,q)
switch(t.x){case 12:b.push(A.cf(s,t,r,a.n))
break
default:b.push(A.ce(s,t,r))
break}}},
dZ(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
q=A.P(n,a.e,m)
p=new A.bk()
p.a=r
p.b=t
p.c=s
b.push(A.cV(n,q,p))
return
case-4:b.push(A.eb(n,b.pop(),r))
return
default:throw A.a(A.aQ("Unexpected state under `()`: "+A.c(m)))}},
e0(a,b){var t=b.pop()
if(0===t){b.push(A.aG(a.u,1,"0&"))
return}if(1===t){b.push(A.aG(a.u,4,"1&"))
return}throw A.a(A.aQ("Unexpected extended operation "+A.c(t)))},
cQ(a,b){var t=b.splice(a.p)
A.cU(a.u,a.e,t)
a.p=b.pop()
return t},
P(a,b,c){if(typeof c=="string")return A.aF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.e2(a,b,c)}else return c},
cU(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.P(a,b,c[t])},
e3(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.P(a,b,c[t])},
e2(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.aQ("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.aQ("Bad index "+c+" for "+b.h(0)))},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.J(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.J(b))return!1
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
return A.i(a,A.cc(a,b),c,d,e)}if(s===7){t=A.i(a,u.P,c,d,e)
return t&&A.i(a,b.y,c,d,e)}if(q===8){if(A.i(a,b,c,d.y,e))return!0
return A.i(a,b,c,A.cc(a,d),e)}if(q===7){t=A.i(a,b,c,u.P,e)
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
if(!A.i(a,k,c,j,e)||!A.i(a,j,e,k,c))return!1}return A.d3(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.d3(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.ey(a,b,c,d,e)}if(p&&q===11)return A.eC(a,b,c,d,e)
return!1},
d3(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
ey(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
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
eC(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
aK(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.J(a))if(s!==7)if(!(s===6&&A.aK(a.y)))t=s===8&&A.aK(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f1(a){var t
if(!A.J(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
J(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cY(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bk:function bk(){this.c=this.b=this.a=null},
bW:function bW(a){this.a=a},
bj:function bj(){},
aD:function aD(a){this.a=a},
bz(a,b,c){return b.j("@<0>").N(c).j("cE<1,2>").a(A.eS(a,new A.B(b.j("@<0>").N(c).j("B<1,2>"))))},
dI(a,b){return new A.B(a.j("@<0>").N(b).j("B<1,2>"))},
cF(a){return new A.aB(a.j("aB<0>"))},
cd(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
dY(a,b,c){var t=new A.ab(a,b,c.j("ab<0>"))
t.c=a.e
return t},
bB(a){var t,s={}
if(A.cm(a))return"{...}"
t=new A.V("")
try{B.a.i($.v,a)
t.a+="{"
s.a=!0
a.v(0,new A.bC(s,t))
t.a+="}"}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bl:function bl(a){this.a=a
this.b=null},
ab:function ab(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
as:function as(){},
bC:function bC(a,b){this.a=a
this.b=b},
aH:function aH(){},
a8:function a8(){},
aA:function aA(){},
a9:function a9(){},
aC:function aC(){},
ac:function ac(){},
cD(a,b,c){return new A.aq(a,b)},
ep(a){return a.aL()},
dW(a,b){return new A.bS(a,[],A.eQ())},
dX(a,b,c){var t,s=new A.V(""),r=A.dW(s,b)
r.L(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
aS:function aS(){},
aV:function aV(){},
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
db(a){var t=A.dO(a,null)
if(t!=null)return t
throw A.a(new A.bt(a))},
bA(a,b,c,d){var t,s
if(c)t=A.d(new Array(a),d.j("e<0>"))
else{if(a>4294967295)A.a3(A.b8(a,0,4294967295,"length",null))
t=J.cB(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
cb(a,b){var t=A.dJ(a,b)
return t},
dJ(a,b){var t=A.d(a.slice(0),b.j("e<0>"))
return t},
cL(a,b,c){var t=J.dt(b)
if(!t.q())return a
if(c.length===0){do a+=A.c(t.gI())
while(t.q())}else{a+=A.c(t.gI())
for(;t.q();)a=a+c+A.c(t.gI())}return a},
cG(a,b){return new A.b5(a,b.gaD(),b.gaG(),b.gaE())},
R(a){if(typeof a=="number"||A.ci(a)||a==null)return J.aM(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dP(a)},
aQ(a){return new A.aP(a)},
dx(a){return new A.K(!1,null,null,a)},
dQ(a,b){return new A.ax(null,null,!0,a,b,"Value not in range")},
b8(a,b,c,d,e){return new A.ax(b,c,!0,a,d,"Invalid value")},
dR(a,b,c){if(0>a||a>c)throw A.a(A.b8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b8(b,a,c,"end",null))
return b}return c},
bh(a){return new A.bg(a)},
cO(a){return new A.be(a)},
aU(a){return new A.aT(a)},
dG(a,b,c){var t,s
if(A.cm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.d([],u.s)
B.a.i($.v,a)
try{A.eG(a,t)}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}s=A.cL(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cz(a,b,c){var t,s
if(A.cm(a))return b+"..."+c
t=new A.V(b)
B.a.i($.v,a)
try{s=t
s.a=A.cL(s.a,a,", ")}finally{if(0>=$.v.length)return A.b($.v,-1)
$.v.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eG(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.ca(m,m.r,a.$ti.c),k=0,j=0
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
aP:function aP(a){this.a=a},
az:function az(){},
K:function K(a,b,c,d){var _=this
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
aT:function aT(a){this.a=a},
ay:function ay(){},
bP:function bP(a){this.a=a},
bt:function bt(a){this.a=a},
p:function p(){},
au:function au(){},
j:function j(){},
V:function V(a){this.a=a},
br:function br(){},
bQ:function bQ(){},
n:function n(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(a,b,c){this.c=a
this.d=b
this.b=c},
bq:function bq(){},
z:function z(){},
X:function X(){},
aN:function aN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d},
bD:function bD(a){this.b=a},
b4:function b4(){},
bc:function bc(){},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
N:function N(a,b){this.a=a
this.b=b},
f3(){self.jsregionworker=A.eO(new A.c4(),u.G)},
c4:function c4(){},
bK:function bK(a){this.a=a},
bL:function bL(a){this.b=a},
bF:function bF(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
k:function k(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S(a,b){return new A.A(a*2-2*b,a+b)},
A:function A(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.b=b},
am(a,b){var t=b.l(0,$.dh().M(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.q(s,r),p=q.l(0,$.cp().M(0,s+r)),o=t.F(0,q)
return new A.bs(a,q,b.F(0,p),o)},
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
for(t=0;t<256;++t)B.a.n(n,t,t)
s=A.db("6364136223846793005")
r=A.db("1442695040888963407")
a=B.e.a1(B.e.a1(B.e.a1(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.e.aj(a+31,t+1)
if(!(q<256))return A.b(n,q)
B.a.n(o,t,n[q])
n[q]=n[t]}return new A.bH(o)},
bH:function bH(a){this.a=a},
fa(a){return A.a3(new A.ar("Field '"+a+"' has been assigned during initialization."))},
aL(){return A.a3(A.dH(""))},
eo(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.el,a)
t[$.co()]=a
a.$dart_jsFunction=t
return t},
el(a,b){u.j.a(b)
u.Z.a(a)
return A.dN(a,b,null)},
eO(a,b){if(typeof a=="function")return a
else return b.a(A.eo(a))},
dT(a,b,c,d){var t,s,r,q
for(t=0;t<4;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=c.a
q=c.b
q=new A.U(s.a,new A.A(r*2-2*q,r+q),a,new A.F(A.d([],u.n),A.d([],u.t)))
q.d=A.dU(q)
return q}}throw A.a(new A.bP("No tile type found for elevation: "+A.c(a)+", moisture: "+A.c(b)+". Fix the rules!"))},
dK(a,b,c,d){var t,s,r,q,p=d.m(0,a)
if(p!=null)for(t=0;t<1;++t){s=p[t]
if(B.D.aF()<s.b){r=c+1
q=new A.at(s.a,b,r,new A.F(A.d([],u.n),A.d([],u.t)))
q.e=u.v.a(A.cI(b,r))
q.d=new A.bq()
return q}}return null},
cI(a,b){return A.aW(a,b,B.J,B.H,B.E,0.35,0.6)},
dU(a){var t,s=a.c
if(s>0){t=a.a
return A.aW(a.b,0,t.c,t.d,t.e,s,1)}t=a.a
return A.aW(a.b,s,t.c,t.d,t.e,1,1)},
dw(a){var t,s=a.c
if(s>0){t=a.a
return A.aW(a.b,0,t.c,t.d,t.e,s,a.d)}t=a.a
return A.aW(a.b,s,t.c,t.d,t.e,1,a.d)},
aW(a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.d
a8=B.d
a9=B.d}else{a7=A.c7(a7,B.d,t)
a8=A.c7(a8,B.d,t)
a9=A.c7(a9,B.d,t)}}s=a5.l(0,A.S(a6,a6)).l(0,B.U)
r=s.l(0,A.S(b0,b0))
q=s.l(0,A.S(0,b1))
p=r.l(0,A.S(0,b1))
o=s.l(0,A.S(b1,0))
n=r.l(0,A.S(b1,0))
m=p.l(0,A.S(b1,0))
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
for(a4=0;a4<6;++a4){B.a.n(a3,a4,a8.ga2())
B.a.n(a3,a4+6,a7.ga2())
B.a.n(a3,a4+12,a9.ga2())}return new A.F(a2,a3)},
c7(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.k(B.b.K((t+(b.a/255-t)*c)*255),B.b.K((s+(b.b/255-s)*c)*255),B.b.K((r+(b.c/255-r)*c)*255),B.b.K((q+(b.d/255-q)*c)*255))},
f8(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.cF(u.H),a1=A.d([],u.Q)
for(t=u.D,s=u.n,r=u.t,q=0;q<a2.length;q=p){p=q+1
o=0
while(!0){if(!(q<a2.length))return A.b(a2,q)
if(!(o<a2[q].length))break
c$0:{n=new A.n(o,q,t)
m=o+1
l=new A.n(m,p,t)
if(a0.W(0,n))break c$0
if(!(q<a2.length))return A.b(a2,q)
k=a2[q]
if(!(o<k.length))return A.b(k,o)
j=k[o]
i=j.a
h=j.c
for(;!0;){if(A.en(a0,h,i,a2,n,l)){k=l.$ti
k.a(B.k)
g=B.k.a
f=k.c
e=f.a(l.a+g)
d=B.k.b
c=f.a(l.b+d)}else break
b=A.em(a0,h,i,a2,n,new A.n(e,c,k))
if(b){k.a(B.j)
l=new A.n(f.a(e+B.j.a),f.a(c+B.j.b),k)}else{l=new A.n(f.a(e-g),f.a(c-d),k)
break}}a=l.a-n.a
if(a>1){k=new A.aN(i,j.b,h,a,new A.F(A.d([],s),A.d([],r)))
k.e=A.dw(k)
B.a.i(a1,k)}else B.a.i(a1,j)
a0.E(0,A.eH(n,l))}o=m}}return a1},
eH(a,b){var t,s,r,q,p,o=u.H,n=A.cF(o)
for(t=a.a,s=b.a,r=a.b,q=b.b;t<s;++t)for(p=r;p<q;++p)n.i(0,new A.n(t,p,o))
return n},
en(a,b,c,d,e,f){var t,s=f.a,r=e.b,q=new A.n(s,r,u.D),p=f.b
for(;r<p;++r){if(s>=B.a.gae(d).length||r>=d.length)return!1
if(a.W(0,q))return!1
if(!(r>=0&&r<d.length))return A.b(d,r)
t=d[r]
if(s>>>0!==s||s>=t.length)return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0},
em(a,b,c,d,e,f){var t,s=e.a,r=f.b,q=new A.n(s,r,u.D),p=f.a
for(;s<p;++s){if(s>=B.a.gae(d).length||r>=d.length)return!1
if(a.W(0,q))return!1
if(r>>>0!==r||r>=d.length)return A.b(d,r)
t=d[r]
if(!(s>=0&&s<t.length))return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0},
f7(a){var t,s=A.d([],u.Q)
for(t=0;t<a.length;++t)if(a[t].a3()>-5){if(!(t<a.length))return A.b(a,t)
B.a.i(s,a[t])}return s}},J={
cn(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eV(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cl==null){A.eZ()
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
q=A.f2(a)
if(q!=null)return q
if(typeof a=="function")return B.V
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.bR
if(p==null)p=$.bR=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
cA(a,b){if(a<0||a>4294967295)throw A.a(A.b8(a,0,4294967295,"length",null))
return J.cB(new Array(a),b)},
cB(a,b){return J.cC(A.d(a,b.j("e<0>")),b)},
cC(a,b){a.fixed$length=Array
return a},
I(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.b0.prototype}if(typeof a=="string")return J.a6.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.aZ.prototype
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a7.prototype
return a}if(a instanceof A.j)return a
return J.eV(a)},
eT(a){if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(!(a instanceof A.j))return J.a_.prototype
return a},
d9(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(!(a instanceof A.j))return J.a_.prototype
return a},
cq(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).A(a,b)},
bp(a){return J.I(a).gk(a)},
dt(a){return J.eT(a).gaf(a)},
cr(a){return J.d9(a).gp(a)},
du(a){return J.I(a).gB(a)},
dv(a,b){return J.I(a).ag(a,b)},
aM(a){return J.I(a).h(a)},
aY:function aY(){},
aZ:function aZ(){},
ao:function ao(){},
m:function m(){},
T:function T(){},
b6:function b6(){},
a_:function a_(){},
a7:function a7(){},
e:function e(a){this.$ti=a},
bu:function bu(a){this.$ti=a},
aO:function aO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(){},
an:function an(){},
b0:function b0(){},
a6:function a6(){}},B={}
var w=[A,J,B]
var $={}
A.c8.prototype={}
J.aY.prototype={
A(a,b){return a===b},
gk(a){return A.b7(a)},
h(a){return"Instance of '"+A.bJ(a)+"'"},
ag(a,b){throw A.a(A.cG(a,u.o.a(b)))},
gB(a){return A.ae(A.ch(this))}}
J.aZ.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.ae(u.y)},
$iD:1,
$icj:1}
J.ao.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$iD:1}
J.m.prototype={}
J.T.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.b6.prototype={}
J.a_.prototype={}
J.a7.prototype={
h(a){var t=a[$.co()]
if(t==null)return this.al(a)
return"JavaScript function for "+J.aM(t)},
$ia5:1}
J.e.prototype={
i(a,b){A.aI(a).c.a(b)
if(!!a.fixed$length)A.a3(A.bh("add"))
a.push(b)},
E(a,b){A.aI(a).j("p<1>").a(b)
if(!!a.fixed$length)A.a3(A.bh("addAll"))
this.an(a,b)
return},
an(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.aU(a))
for(s=0;s<t;++s)a.push(b[s])},
gae(a){if(a.length>0)return a[0]
throw A.a(A.dF())},
h(a){return A.cz(a,"[","]")},
gaf(a){return new J.aO(a,a.length,A.aI(a).j("aO<1>"))},
gk(a){return A.b7(a)},
gp(a){return a.length},
m(a,b){if(!(b>=0&&b<a.length))throw A.a(A.af(a,b))
return a[b]},
n(a,b,c){A.aI(a).c.a(c)
if(!!a.immutable$list)A.a3(A.bh("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.af(a,b))
a[b]=c},
$ip:1,
$ih:1}
J.bu.prototype={}
J.aO.prototype={
gI(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.c6(r)
throw A.a(r)}t=s.c
if(t>=q){s.sa9(null)
return!1}s.sa9(r[t]);++s.c
return!0},
sa9(a){this.d=this.$ti.j("1?").a(a)}}
J.ap.prototype={
D(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.bh(""+a+".toInt()"))},
K(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.bh(""+a+".round()"))},
aH(a){if(a<0)return-Math.round(-a)
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
ak(a,b){if(b<0)throw A.a(A.eP(b))
return b>31?0:a<<b>>>0},
ad(a,b){var t
if(a>0)t=this.ar(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ar(a,b){return b>31?0:a>>>b},
gB(a){return A.ae(u.p)},
$ix:1,
$ia1:1}
J.an.prototype={
a1(a,b){var t=this.ak(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gB(a){return A.ae(u.S)},
$iD:1,
$iah:1}
J.b0.prototype={
gB(a){return A.ae(u.i)},
$iD:1}
J.a6.prototype={
au(a,b){if(b<0)throw A.a(A.af(a,b))
if(b>=a.length)A.a3(A.af(a,b))
return a.charCodeAt(b)},
a6(a,b){if(b>=a.length)throw A.a(A.af(a,b))
return a.charCodeAt(b)},
l(a,b){return a+b},
G(a,b,c){return a.substring(b,A.dR(b,c,a.length))},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.ae(u.N)},
gp(a){return a.length},
m(a,b){if(b>=a.length)throw A.a(A.af(a,b))
return a[b]},
$iD:1,
$it:1}
A.ar.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.al.prototype={}
A.aa.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bp(this.a)&536870911
this._hashCode=t
return t},
h(a){return'Symbol("'+A.c(this.a)+'")'},
A(a,b){if(b==null)return!1
return b instanceof A.aa&&this.a==b.a},
$iW:1}
A.aj.prototype={}
A.ai.prototype={
gJ(a){return this.gp(this)===0},
h(a){return A.bB(this)},
$iC:1}
A.ak.prototype={
gp(a){return this.a},
H(a){return!1},
m(a,b){if(!this.H(b))return null
return this.b[A.y(b)]},
v(a,b){var t,s,r,q,p,o=this.$ti
o.j("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.y(t[q])
b.$2(p,o.a(r[p]))}}}
A.b_.prototype={
gaD(){var t=this.a
return t},
gaG(){var t,s,r,q,p=this
if(p.c===1)return B.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.p
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.b(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gaE(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.q
p=new A.B(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.b(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.b(r,m)
p.n(0,new A.aa(n),r[m])}return new A.aj(p,u.Y)},
$icy:1}
A.bI.prototype={
$2(a,b){var t
A.y(a)
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
A.L.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.de(s==null?"unknown":s)+"'"},
$ia5:1,
gaK(){return this},
$C:"$1",
$R:1,
$D:null}
A.aR.prototype={$C:"$2",$R:2}
A.bd.prototype={}
A.bb.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.de(t)+"'"}}
A.a4.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.f5(this.a)^A.b7(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bJ(this.a)+"'")}}
A.bi.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b9.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bV.prototype={}
A.B.prototype={
gp(a){return this.a},
gJ(a){return this.a===0},
H(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else{s=this.aA(a)
return s}},
aA(a){var t=this.d
if(t==null)return!1
return this.a_(t[this.Z(a)],a)>=0},
m(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aB(b)},
aB(a){var t,s,r=this.d
if(r==null)return null
t=r[this.Z(a)]
s=this.a_(t,a)
if(s<0)return null
return t[s].b},
n(a,b,c){var t,s,r=this,q=A.a0(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.a5(t==null?r.b=r.U():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.a5(s==null?r.c=r.U():s,b,c)}else r.aC(b,c)},
aC(a,b){var t,s,r,q,p=this,o=A.a0(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.U()
s=p.Z(a)
r=t[s]
if(r==null)t[s]=[p.V(a,b)]
else{q=p.a_(r,a)
if(q>=0)r[q].b=b
else r.push(p.V(a,b))}},
v(a,b){var t,s,r=this
A.a0(r).j("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.aU(r))
t=t.c}},
a5(a,b,c){var t,s=A.a0(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.V(b,c)
else t.b=c},
V(a,b){var t=this,s=A.a0(t),r=new A.bx(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
Z(a){return J.bp(a)&0x3fffffff},
a_(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cq(a[s].a,b))return s
return-1},
h(a){return A.bB(this)},
U(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icE:1}
A.bx.prototype={}
A.by.prototype={
gp(a){return this.a.a}}
A.b3.prototype={
q(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.aU(r))
t=s.c
if(t==null){s.sa4(null)
return!1}else{s.sa4(t.a)
s.c=t.c
return!0}},
sa4(a){this.d=this.$ti.j("1?").a(a)}}
A.c0.prototype={
$1(a){return this.a(a)},
$S:0}
A.c1.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.c2.prototype={
$1(a){return this.a(A.y(a))},
$S:4}
A.w.prototype={
j(a){return A.bY(v.typeUniverse,this,a)},
N(a){return A.ee(v.typeUniverse,this,a)}}
A.bk.prototype={}
A.bW.prototype={
h(a){return A.u(this.a,null)}}
A.bj.prototype={
h(a){return this.a}}
A.aD.prototype={}
A.aB.prototype={
gaf(a){var t=this,s=new A.ab(t,t.r,t.$ti.j("ab<1>"))
s.c=t.e
return s},
gp(a){return this.a},
W(a,b){var t=this.ao(b)
return t},
ao(a){var t=this.d
if(t==null)return!1
return this.aa(t[a.gk(a)&1073741823],a)>=0},
i(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a7(t==null?r.b=A.cd():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a7(s==null?r.c=A.cd():s,b)}else return r.am(b)},
am(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cd()
s=J.bp(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.P(a)]
else{if(q.aa(r,a)>=0)return!1
r.push(q.P(a))}return!0},
a7(a,b){this.$ti.c.a(b)
if(u.x.a(a[b])!=null)return!1
a[b]=this.P(b)
return!0},
P(a){var t=this,s=new A.bl(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
aa(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cq(a[s].a,b))return s
return-1}}
A.bl.prototype={}
A.ab.prototype={
gI(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.a(A.aU(r))
else if(s==null){t.sa8(null)
return!1}else{t.sa8(t.$ti.j("1?").a(s.a))
t.c=s.b
return!0}},
sa8(a){this.d=this.$ti.j("1?").a(a)}}
A.as.prototype={
v(a,b){var t,s,r,q=this,p=A.a0(q)
p.j("~(1,2)").a(b)
for(t=A.ca(q,q.r,p.c),p=p.z[1];t.q();){s=t.d
r=q.m(0,s)
b.$2(s,r==null?p.a(r):r)}},
gp(a){return this.a},
gJ(a){return this.a===0},
h(a){return A.bB(this)},
$iC:1}
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
A.a8.prototype={
m(a,b){return this.a.m(0,b)},
v(a,b){this.a.v(0,this.$ti.j("~(1,2)").a(b))},
gJ(a){return this.a.a===0},
gp(a){return this.a.a},
h(a){return A.bB(this.a)},
$iC:1}
A.aA.prototype={}
A.a9.prototype={
E(a,b){var t,s,r
this.$ti.j("p<1>").a(b)
for(t=A.dY(b,b.r,b.$ti.c),s=t.$ti.c;t.q();){r=t.d
this.i(0,r==null?s.a(r):r)}},
h(a){return A.cz(this,"{","}")},
$ip:1}
A.aC.prototype={}
A.ac.prototype={}
A.aS.prototype={}
A.aV.prototype={}
A.aq.prototype={
h(a){var t=A.R(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.b2.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.bv.prototype={
Y(a,b){var t=A.dX(a,this.gaz().b,null)
return t},
gaz(){return B.X}}
A.bw.prototype={}
A.bT.prototype={
ai(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=B.c.a6(a,r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(B.c.a6(a,o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(B.c.au(a,p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.c.G(a,s,r)
s=r+1
t.a+=A.l(92)
t.a+=A.l(117)
t.a+=A.l(100)
p=q>>>8&15
t.a+=A.l(p<10?48+p:87+p)
p=q>>>4&15
t.a+=A.l(p<10?48+p:87+p)
p=q&15
t.a+=A.l(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)t.a+=B.c.G(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)t.a+=B.c.G(a,s,r)
s=r+1
t.a+=A.l(92)
t.a+=A.l(q)}}if(s===0)t.a+=a
else if(s<n)t.a+=B.c.G(a,s,n)},
O(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.a(new A.b2(a,null))}B.a.i(t,a)},
L(a){var t,s,r,q,p=this
if(p.ah(a))return
p.O(a)
try{t=p.b.$1(a)
if(!p.ah(t)){r=A.cD(a,null,p.gac())
throw A.a(r)}r=p.a
if(0>=r.length)return A.b(r,-1)
r.pop()}catch(q){s=A.fc(q)
r=A.cD(a,s,p.gac())
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
return!0}else if(u.j.b(a)){r.O(a)
r.aI(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return!0}else if(u.J.b(a)){r.O(a)
s=r.aJ(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return s}else return!1},
aI(a){var t,s,r=this.c
r.a+="["
t=a.length
if(t!==0){if(0>=t)return A.b(a,0)
this.L(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.L(a[s])}}r.a+="]"},
aJ(a){var t,s,r,q,p,o,n=this,m={}
if(a.gJ(a)){n.c.a+="{}"
return!0}t=a.gp(a)*2
s=A.bA(t,null,!1,u.X)
r=m.a=0
m.b=!0
a.v(0,new A.bU(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ai(A.y(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.b(s,o)
n.L(s[o])}q.a+="}"
return!0}}
A.bU.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.n(t,s.a++,a)
B.a.n(t,s.a++,b)},
$S:1}
A.bS.prototype={
gac(){var t=this.c.a
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
h(a){return this.R()}}
A.f.prototype={}
A.aP.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.R(t)
return"Assertion failed"}}
A.az.prototype={}
A.K.prototype={
gT(){return"Invalid argument"+(!this.a?"(s)":"")},
gS(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gT()+r+p
if(!t.a)return o
return o+t.gS()+": "+A.R(t.ga0())},
ga0(){return this.b}}
A.ax.prototype={
ga0(){return A.eh(this.b)},
gT(){return"RangeError"},
gS(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.c(r):""
else if(r==null)t=": Not greater than or equal to "+A.c(s)
else if(r>s)t=": Not in inclusive range "+A.c(s)+".."+A.c(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.c(s)
return t}}
A.aX.prototype={
ga0(){return A.bm(this.b)},
gT(){return"RangeError"},
gS(){if(A.bm(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.b5.prototype={
h(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.V("")
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
A.aT.prototype={
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
gp(a){var t,s=this.a,r=A.ca(s,s.r,this.$ti.c)
for(t=0;r.q();)++t
return t},
h(a){return A.dG(this,"(",")")}}
A.au.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
A(a,b){return this===b},
gk(a){return A.b7(this)},
h(a){return"Instance of '"+A.bJ(this)+"'"},
ag(a,b){throw A.a(A.cG(this,u.o.a(b)))},
gB(a){return A.eW(this)},
toString(){return this.h(this)}}
A.V.prototype={
gp(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$idV:1}
A.br.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.bQ.prototype={
aF(){return Math.random()}}
A.n.prototype={
h(a){return"Point("+A.c(this.a)+", "+A.c(this.b)+")"},
A(a,b){if(b==null)return!1
return b instanceof A.n&&this.a===b.a&&this.b===b.b},
gk(a){var t=B.b.gk(this.a),s=B.b.gk(this.b),r=A.cM(A.cM(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.M.prototype={
R(){return"LevelOfDetail."+this.b}}
A.bq.prototype={}
A.z.prototype={}
A.X.prototype={}
A.aN.prototype={
a3(){return this.c},
X(){var t=this,s=t.b
return B.i.Y(A.bz(["gameObjectType","AreaTile","type",t.a.b,"isoCoordinate",A.c(s.a)+","+A.c(s.b),"elevation",t.c,"width",t.d],u.N,u.K),null)}}
A.U.prototype={
a3(){return this.c},
X(){var t=this.b
return B.i.Y(A.bz(["gameObjectType","SingleTile","type",this.a.b,"isoCoordinate",A.c(t.a)+","+A.c(t.b),"elevation",this.c],u.N,u.K),null)}}
A.Z.prototype={
R(){return"TileType."+this.b}}
A.at.prototype={
X(){var t=this.b
return B.i.Y(A.bz(["gameObjectType","NaturalItem","type",this.a.b,"isoCoordinate",A.c(t.a)+","+A.c(t.b),"elevation",this.c],u.N,u.K),null)}}
A.bD.prototype={
R(){return"NaturalItemType."+this.b}}
A.b4.prototype={}
A.bc.prototype={}
A.Y.prototype={}
A.N.prototype={}
A.c4.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k=J.d9(a),j=A.bm(k.m(a,0)),i=A.bm(k.m(a,1)),h=A.d_(k.m(a,2)),g=A.d_(k.m(a,3))
k=A.bm(k.m(a,4))
if(!(k>=0&&k<4))return A.b(B.f,k)
t=B.f[k]
s=new A.bK(new A.bc()).aw(A.S(h,g),j,i,B.b.D(h),B.b.D(g),t)
r=A.d([],u.E)
for(k=s.b,q=u.s,p=0;p<4;++p){t=B.f[p]
o=A.d([],q)
if(k.H(t))for(n=k.m(0,t),m=n.length,l=0;l<n.length;n.length===m||(0,A.c6)(n),++l)B.a.i(o,n[l].X())
B.a.i(r,o)}return A.d([r],u.e)},
$S:6}
A.bK.prototype={
aw(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k=A.dI(u.r,u.a)
for(t=this.a,s=u.k,r=f.c,q=0;q<4;++q){p=B.f[q]
if(p.c<r)continue
o=new A.bF(t)
o.a=A.aw(2)
o.b=A.aw(3)
o.c=A.aw(4)
o.d=A.aw(5)
o.e=A.aw(6)
o.f=A.aw(7)
n=o.av(b,c,d,e,p)
m=this.aq(b,c,d,e,n[0],n[1])
l=A.cb(A.f7(A.f8(m)),s)
if(p.d)B.a.E(l,this.ap(m))
k.n(0,p,l)}return new A.bL(k)},
aq(a,b,c,d,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.d([],u.F)
for(t=u.d,s=u.W,r=a0.length,q=a1.length,p=u.q,o=0;o<a;++o){if(!(o<r))return A.b(a0,o)
n=a0[o]
if(!(o<q))return A.b(a1,o)
m=a1[o]
l=A.d([],p)
for(k=n.length,j=m.length,i=c+o,h=0;h<b;++h){if(!(h<k))return A.b(n,h)
g=n[h]
if(!(h<j))return A.b(m,h)
B.a.i(l,A.dT(g,m[h],new A.n(i,d+h,t),A.d([new A.Y(B.t,0,f),new A.Y(B.v,0.2,0.3),new A.Y(B.u,f,0.3),new A.Y(B.w,f,f)],s)))}B.a.i(e,l)}return e},
ap(a){var t,s,r,q,p,o,n,m
u.I.a(a)
t=A.d([],u.V)
for(s=u.O,r=u.l,q=u.c,p=0;p<a.length;++p){o=0
while(!0){n=a.length
if(0>=n)return A.b(a,0)
if(!(o<a[0].length))break
if(!(p<n))return A.b(a,p)
n=a[p]
if(!(o<n.length))return A.b(n,o)
n=n[o]
m=A.dK(n.a,n.b,n.c,A.bz([B.t,A.d([new A.N(B.h,0.03)],s),B.v,A.d([new A.N(B.h,0.05)],s),B.u,A.d([new A.N(B.h,0.08)],s),B.w,A.d([new A.N(B.h,0.02)],s)],r,q))
if(m!=null)B.a.i(t,m);++o}}return t}}
A.bL.prototype={}
A.bF.prototype={
av(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.ab(a1,a2),a=c.ab(a1,a2),a0=a5.c
for(t=b.length,s=a.length,r=0;r<a1;r+=a0)for(q=a3+r,p=q*0.001,o=q*0.01,n=q*0.1,m=0;m<a2;m+=a0){l=a4+m
k=c.a
k===$&&A.aL()
k=A.am(k.a,new A.q(p,l*0.001)).C()
j=c.b
j===$&&A.aL()
j=A.am(j.a,new A.q(o,l*0.01)).C()
i=c.c
i===$&&A.aL()
h=k+0.1*j+0.01*A.am(i.a,new A.q(n,l*0.1)).C()
if(h>0.2)h*=1.5
k=c.d
k===$&&A.aL()
k=A.am(k.a,new A.q(q*0.006,l*0.006)).C()
j=c.e
j===$&&A.aL()
j=A.am(j.a,new A.q(q*0.016,l*0.016)).C()
i=c.f
i===$&&A.aL()
g=k+0.5*j+0.25*A.am(i.a,new A.q(q*0.048,l*0.048)).C()
for(k=(h+0)*100,f=0;f<a0;++f)for(j=r+f,i=j<a1,e=0;e<a0;++e)if(i&&m+e<a2){if(!(j<t))return A.b(b,j)
d=m+e
B.a.n(b[j],d,B.b.aH(k))
if(!(j<s))return A.b(a,j)
B.a.n(a[j],d,g)}}return A.d([b,a],u.f)},
ab(a,b){var t,s,r,q,p=J.cA(a,u.u)
for(t=u.i,s=0;s<a;++s){r=J.cA(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.k.prototype={
ga2(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.A.prototype={
l(a,b){return new A.A(this.a+b.a,this.b+b.b)},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.A&&b.a===this.a&&b.b===this.b},
gk(a){return B.b.gk(this.a)^B.b.gk(this.b)},
h(a){return""+B.b.D(this.a)+", "+B.b.D(this.b)}}
A.F.prototype={}
A.bs.prototype={
t(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.df()
if(!(a<8))return A.b(j,a)
t=j[a]
s=k.c.F(0,t).F(0,$.cp().M(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.l(0,t)
m=u.L.a(k.a)
n=m[m[B.b.D(n.a)&255]+B.b.D(n.b)&255]
l=$.dg()[n>>>1&7]
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
l(a,b){return new A.q(this.a+b.a,this.b+b.b)},
F(a,b){return new A.q(this.a-b.a,this.b-b.b)},
M(a,b){return new A.q(this.a*b,this.b*b)},
h(a){return A.c(this.a)+", "+A.c(this.b)}}
A.bH.prototype={};(function aliases(){var t=J.T.prototype
t.al=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_2
t(A,"eQ","ep",0)
s(A,"fE","cI",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.c8,J.aY,J.aO,A.f,A.p,A.aa,A.a8,A.ai,A.b_,A.L,A.bM,A.bG,A.bV,A.as,A.bx,A.b3,A.w,A.bk,A.bW,A.a9,A.bl,A.ab,A.aH,A.aS,A.aV,A.bT,A.bO,A.ay,A.bP,A.bt,A.au,A.V,A.bQ,A.n,A.bq,A.z,A.b4,A.Y,A.N,A.bK,A.bL,A.bF,A.k,A.A,A.F,A.bs,A.q,A.bH])
r(J.aY,[J.aZ,J.ao,J.m,J.ap,J.a6])
r(J.m,[J.T,J.e,A.br])
r(J.T,[J.b6,J.a_,J.a7])
s(J.bu,J.e)
r(J.ap,[J.an,J.b0])
r(A.f,[A.ar,A.az,A.b1,A.bf,A.bi,A.b9,A.bj,A.aq,A.aP,A.K,A.b5,A.bg,A.be,A.ba,A.aT])
s(A.al,A.p)
s(A.ac,A.a8)
s(A.aA,A.ac)
s(A.aj,A.aA)
s(A.ak,A.ai)
r(A.L,[A.aR,A.bd,A.c0,A.c2,A.c4])
r(A.aR,[A.bI,A.c1,A.bC,A.bU,A.bE])
s(A.av,A.az)
r(A.bd,[A.bb,A.a4])
s(A.B,A.as)
s(A.by,A.al)
s(A.aD,A.bj)
s(A.aC,A.a9)
s(A.aB,A.aC)
s(A.b2,A.aq)
s(A.bv,A.aS)
s(A.bw,A.aV)
s(A.bS,A.bT)
r(A.K,[A.ax,A.aX])
r(A.bO,[A.M,A.Z,A.bD])
r(A.z,[A.X,A.at])
r(A.X,[A.aN,A.U])
s(A.bc,A.b4)
t(A.ac,A.aH)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ah:"int",x:"double",a1:"num",t:"String",cj:"bool",au:"Null",h:"List"},mangledNames:{},types:["@(@)","~(j?,j?)","~(t,@)","@(@,t)","@(t)","~(W,@)","h<h<h<t>>>(@)","F(A,x)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ed(v.typeUniverse,JSON.parse('{"b6":"T","a_":"T","a7":"T","aZ":{"cj":[],"D":[]},"ao":{"D":[]},"e":{"h":["1"],"p":["1"]},"bu":{"e":["1"],"h":["1"],"p":["1"]},"ap":{"x":[],"a1":[]},"an":{"x":[],"ah":[],"a1":[],"D":[]},"b0":{"x":[],"a1":[],"D":[]},"a6":{"t":[],"D":[]},"ar":{"f":[]},"al":{"p":["1"]},"aa":{"W":[]},"aj":{"aA":["1","2"],"ac":["1","2"],"a8":["1","2"],"aH":["1","2"],"C":["1","2"]},"ai":{"C":["1","2"]},"ak":{"ai":["1","2"],"C":["1","2"]},"b_":{"cy":[]},"av":{"f":[]},"b1":{"f":[]},"bf":{"f":[]},"L":{"a5":[]},"aR":{"a5":[]},"bd":{"a5":[]},"bb":{"a5":[]},"a4":{"a5":[]},"bi":{"f":[]},"b9":{"f":[]},"B":{"as":["1","2"],"cE":["1","2"],"C":["1","2"]},"by":{"p":["1"]},"bj":{"f":[]},"aD":{"f":[]},"aB":{"a9":["1"],"p":["1"]},"as":{"C":["1","2"]},"a8":{"C":["1","2"]},"aA":{"ac":["1","2"],"a8":["1","2"],"aH":["1","2"],"C":["1","2"]},"a9":{"p":["1"]},"aC":{"a9":["1"],"p":["1"]},"aq":{"f":[]},"b2":{"f":[]},"x":{"a1":[]},"ah":{"a1":[]},"h":{"p":["1"]},"aP":{"f":[]},"az":{"f":[]},"K":{"f":[]},"ax":{"f":[]},"aX":{"f":[]},"b5":{"f":[]},"bg":{"f":[]},"be":{"f":[]},"ba":{"f":[]},"aT":{"f":[]},"ay":{"f":[]},"V":{"dV":[]},"X":{"z":[]},"U":{"X":[],"z":[]},"aN":{"X":[],"z":[]},"at":{"z":[]},"bc":{"b4":[]}}'))
A.ec(v.typeUniverse,JSON.parse('{"al":1,"aC":1,"aS":2,"aV":2}'))
var u=(function rtii(){var t=A.ag
return{Y:t("aj<W,@>"),C:t("f"),Z:t("a5"),k:t("z"),o:t("cy"),U:t("p<@>"),e:t("e<h<h<t>>>"),f:t("e<h<h<x>>>"),F:t("e<h<U>>"),E:t("e<h<t>>"),V:t("e<at>"),O:t("e<N>"),q:t("e<U>"),s:t("e<t>"),Q:t("e<X>"),W:t("e<Y>"),n:t("e<x>"),b:t("e<@>"),t:t("e<ah>"),T:t("ao"),g:t("a7"),B:t("B<W,@>"),r:t("M"),a:t("h<z>"),G:t("h<h<h<t>>>(@)"),I:t("h<h<U>>"),c:t("h<N>"),u:t("h<x>"),j:t("h<@>"),L:t("h<ah>"),J:t("C<@,@>"),P:t("au"),K:t("j"),d:t("n<x>"),D:t("n<ah>"),H:t("n<a1>"),M:t("fj"),N:t("t"),h:t("W"),l:t("Z"),R:t("D"),m:t("a_"),v:t("F"),y:t("cj"),i:t("x"),z:t("@"),S:t("ah"),A:t("0&*"),_:t("j*"),w:t("cx<au>?"),X:t("j?"),x:t("bl?"),p:t("a1")}})();(function constants(){var t=hunkHelpers.makeConstList
B.T=J.aY.prototype
B.a=J.e.prototype
B.e=J.an.prototype
B.b=J.ap.prototype
B.c=J.a6.prototype
B.V=J.a7.prototype
B.W=J.m.prototype
B.r=J.b6.prototype
B.l=J.a_.prototype
B.m=function getTagFallback(o) {
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
B.n=function(hooks) { return hooks; }

B.i=new A.bv()
B.D=new A.bQ()
B.o=new A.bV()
B.E=new A.k(255,100,96,80)
B.H=new A.k(255,120,116,100)
B.J=new A.k(255,140,136,120)
B.d=new A.k(255,1,46,143)
B.U=new A.A(0,0)
B.X=new A.bw(null)
B.Y=new A.M(1,!0,"maximum")
B.Z=new A.M(2,!1,"mid")
B.a_=new A.M(4,!1,"low")
B.a0=new A.M(8,!1,"minimal")
B.f=A.d(t([B.Y,B.Z,B.a_,B.a0]),A.ag("e<M>"))
B.p=A.d(t([]),u.b)
B.a1=A.d(t([]),A.ag("e<W>"))
B.q=new A.ak(0,{},B.a1,A.ag("ak<W,@>"))
B.h=new A.bD("rock")
B.j=new A.n(0,1,u.D)
B.k=new A.n(1,0,u.D)
B.a2=new A.aa("call")
B.O=new A.k(255,173,162,115)
B.M=new A.k(255,159,148,103)
B.K=new A.k(255,148,138,95)
B.t=new A.Z(B.O,B.M,B.K,"lakeFloorBare")
B.F=new A.k(255,110,110,121)
B.R=new A.k(255,90,90,101)
B.Q=new A.k(255,70,70,81)
B.u=new A.Z(B.F,B.R,B.Q,"svalbardMountain")
B.I=new A.k(255,135,143,102)
B.G=new A.k(255,115,123,82)
B.S=new A.k(255,95,103,62)
B.v=new A.Z(B.I,B.G,B.S,"svalbardGrass")
B.P=new A.k(255,191,200,202)
B.N=new A.k(255,171,180,182)
B.L=new A.k(255,151,160,162)
B.w=new A.Z(B.P,B.N,B.L,"svalbardIce")})();(function staticFields(){$.bR=null
$.v=A.d([],A.ag("e<j>"))
$.cH=null
$.cu=null
$.ct=null
$.da=null
$.d7=null
$.dd=null
$.c_=null
$.c3=null
$.cl=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"fd","co",()=>A.eU("_$dart_dartClosure"))
t($,"fk","di",()=>A.E(A.bN({
toString:function(){return"$receiver$"}})))
t($,"fl","dj",()=>A.E(A.bN({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"fm","dk",()=>A.E(A.bN(null)))
t($,"fn","dl",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fq","dp",()=>A.E(A.bN(void 0)))
t($,"fr","dq",()=>A.E(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fp","dn",()=>A.E(A.cN(null)))
t($,"fo","dm",()=>A.E(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"ft","ds",()=>A.E(A.cN(void 0)))
t($,"fs","dr",()=>A.E(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ff","dg",()=>A.d([A.o(5,2),A.o(2,5),A.o(-5,2),A.o(-2,5),A.o(5,-2),A.o(2,-5),A.o(-5,-2),A.o(-2,-5)],A.ag("e<q>")))
s($,"fe","df",()=>A.d([A.o(1,0),A.o(0,1),A.o(1,-1),A.o(-1,1),A.o(1,1),A.o(0,0),A.o(2,0),A.o(0,2)],A.ag("e<q>")))
t($,"fh","dh",()=>A.o(-0.211324865405187,-0.211324865405187))
t($,"fg","cp",()=>A.o(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
var t=A.f3
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
