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
a[c]=function(){a[c]=function(){A.eK(b)}
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
if(a[b]!==t)A.eL(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.c3(b)
return new t(c,this)}:function(){if(t===null)t=A.c3(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.c3(a).prototype
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
a(hunkHelpers,v,w,$)}var A={bU:function bU(){},
dm(a){return new A.aj("Field '"+a+"' has not been initialized.")},
ct(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
c5(a){var t,s
for(t=$.t.length,s=0;s<t;++s)if(a===$.t[s])return!0
return!1},
aj:function aj(a){this.a=a},
ac:function ac(){},
a0:function a0(a){this.a=a},
cW(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
b(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aF(a)
return t},
aY(a){var t,s=$.cp
if(s==null)s=$.cp=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
du(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.c(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
bu(a){return A.ds(a)},
ds(a){var t,s,r,q
if(a instanceof A.j)return A.r(A.bc(a),null)
t=J.F(a)
if(t===B.I||t===B.L||u.D.b(a)){s=B.i(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.r(A.bc(a),null)},
dv(a){if(typeof a=="number"||A.c1(a))return J.aF(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.I)return a.h(0)
return"Instance of '"+A.bu(a)+"'"},
k(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.c.a4(t,10)|55296)>>>0,t&1023|56320)}throw A.a(A.aZ(a,0,1114111,null,null))},
J(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.a5(t,b)
r.b=""
if(c!=null&&c.a!==0)c.v(0,new A.bt(r,s,t))
return J.db(a,new A.aQ(B.U,0,t,s,0))},
dt(a,b,c){var t,s,r=c==null||c.a===0
if(r){t=b.length
if(t===0){if(!!a.$0)return a.$0()}else if(t===1){if(!!a.$1)return a.$1(b[0])}else if(t===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(t===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(t===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(t===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
s=a[""+"$"+t]
if(s!=null)return s.apply(a,b)}return A.dr(a,b,c)},
dr(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=b.length,f=a.$R
if(g<f)return A.J(a,b,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.F(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.J(a,b,c)
if(g===f)return p.apply(a,b)
return A.J(a,b,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.J(a,b,c)
o=f+r.length
if(g>o)return A.J(a,b,null)
if(g<o){n=r.slice(g-f)
m=A.cn(b,u.z)
B.a.a5(m,n)}else m=b
return p.apply(a,m)}else{if(g>f)return A.J(a,b,c)
m=A.cn(b,u.z)
l=Object.keys(r)
if(c==null)for(s=l.length,k=0;k<l.length;l.length===s||(0,A.bR)(l),++k){j=r[A.x(l[k])]
if(B.k===j)return A.J(a,m,c)
B.a.i(m,j)}else{for(s=l.length,i=0,k=0;k<l.length;l.length===s||(0,A.bR)(l),++k){h=A.x(l[k])
if(c.G(h)){++i
B.a.i(m,c.m(0,h))}else{j=r[h]
if(B.k===j)return A.J(a,m,c)
B.a.i(m,j)}}if(i!==c.a)return A.J(a,m,c)}return p.apply(a,m)}},
c(a,b){if(a==null)J.c9(a)
throw A.a(A.a6(a,b))},
a6(a,b){var t,s="index"
if(!A.cM(b))return new A.H(!0,b,s,null)
t=J.c9(a)
if(b<0||b>=t)return new A.aN(t,!0,b,s,"Index out of range")
return A.dw(b,s)},
er(a){return new A.H(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.as()
t=new Error()
t.dartException=a
s=A.eM
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eM(){return J.aF(this.dartException)},
V(a){throw A.a(a)},
bR(a){throw A.a(A.bd(a))},
B(a){var t,s,r,q,p,o
a=A.eI(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.i([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.bx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
by(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cu(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
bV(a,b){var t=b==null,s=t?null:b.method
return new A.aS(a,s,t?null:b.receiver)},
eN(a){if(a==null)return new A.br(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.ep(a)},
U(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ep(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.a4(s,16)&8191)===10)switch(r){case 438:return A.U(a,A.bV(A.b(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.b(t)
return A.U(a,new A.am(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.d_()
o=$.d0()
n=$.d1()
m=$.d2()
l=$.d5()
k=$.d6()
j=$.d4()
$.d3()
i=$.d8()
h=$.d7()
g=p.t(t)
if(g!=null)return A.U(a,A.bV(A.x(t),g))
else{g=o.t(t)
if(g!=null){g.method="call"
return A.U(a,A.bV(A.x(t),g))}else{g=n.t(t)
if(g==null){g=m.t(t)
if(g==null){g=l.t(t)
if(g==null){g=k.t(t)
if(g==null){g=j.t(t)
if(g==null){g=m.t(t)
if(g==null){g=i.t(t)
if(g==null){g=h.t(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.x(t)
return A.U(a,new A.am(t,g==null?f:g.method))}}}return A.U(a,new A.b4(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aq()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.U(a,new A.H(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aq()
return a},
eH(a){if(a==null||typeof a!="object")return J.bS(a)
else return A.aY(a)},
eu(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
dj(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b0().constructor.prototype):Object.create(new A.W(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.ce(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.df(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.ce(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
df(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dd)}throw A.a("Error in functionType of tearoff")},
dg(a,b,c,d){var t=A.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ce(a,b,c,d){var t,s
if(c)return A.di(a,b,d)
t=b.length
s=A.dg(t,d,a,b)
return s},
dh(a,b,c,d){var t=A.cd,s=A.de
switch(b?-1:a){case 0:throw A.a(new A.b_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
di(a,b,c){var t,s
if($.cb==null)$.cb=A.ca("interceptor")
if($.cc==null)$.cc=A.ca("receiver")
t=b.length
s=A.dh(t,c,a,b)
return s},
c3(a){return A.dj(a)},
dd(a,b){return A.bI(v.typeUniverse,A.bc(a.a),b)},
cd(a){return a.a},
de(a){return a.b},
ca(a){var t,s,r,q=new A.W("receiver","interceptor"),p=J.ck(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.dc("Field name "+a+" not found."))},
eK(a){throw A.a(new A.b7(a))},
ev(a){return v.getIsolateTag(a)},
bW(a,b,c){var t=new A.aU(a,b,c.j("aU<0>"))
t.c=a.e
return t},
eE(a){var t,s,r,q,p,o=A.x($.cS.$1(a)),n=$.bK[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bO[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.dZ($.cP.$2(a,o))
if(r!=null){n=$.bK[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bO[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bQ(t)
$.bK[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bO[o]=t
return t}if(q==="-"){p=A.bQ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.cU(a,t)
if(q==="*")throw A.a(A.cv(o))
if(v.leafTags[o]===true){p=A.bQ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.cU(a,t)},
cU(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.c6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bQ(a){return J.c6(a,!1,null,!!a.$ieT)},
eG(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bQ(t)
else return J.c6(t,c,null,null)},
eA(){if(!0===$.c4)return
$.c4=!0
A.eB()},
eB(){var t,s,r,q,p,o,n,m
$.bK=Object.create(null)
$.bO=Object.create(null)
A.ez()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cV.$1(p)
if(o!=null){n=A.eG(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ez(){var t,s,r,q,p,o,n=B.o()
n=A.a4(B.p,A.a4(B.q,A.a4(B.j,A.a4(B.j,A.a4(B.r,A.a4(B.t,A.a4(B.u(B.i),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cS=new A.bL(q)
$.cP=new A.bM(p)
$.cV=new A.bN(o)},
a4(a,b){return a(b)||b},
et(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
eI(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aa:function aa(a,b){this.a=a
this.$ti=b},
a9:function a9(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aQ:function aQ(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
am:function am(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a},
br:function br(a){this.a=a},
I:function I(){},
aJ:function aJ(){},
b2:function b2(){},
b0:function b0(){},
W:function W(a,b){this.a=a
this.b=b},
b7:function b7(a){this.a=a},
b_:function b_(a){this.a=a},
bF:function bF(){},
y:function y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bk:function bk(a,b){this.a=a
this.b=b
this.c=null},
bl:function bl(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bL:function bL(a){this.a=a},
bM:function bM(a){this.a=a},
bN:function bN(a){this.a=a},
cq(a,b){var t=b.c
return t==null?b.c=A.c_(a,b.y,!0):t},
bX(a,b){var t=b.c
return t==null?b.c=A.ax(a,"cg",[b.y]):t},
cr(a){var t=a.x
if(t===6||t===7||t===8)return A.cr(a.y)
return t===12||t===13},
dy(a){return a.at},
a7(a){return A.bH(v.typeUniverse,a,!1)},
L(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.L(a,t,c,a0)
if(s===t)return b
return A.cE(a,s,!0)
case 7:t=b.y
s=A.L(a,t,c,a0)
if(s===t)return b
return A.c_(a,s,!0)
case 8:t=b.y
s=A.L(a,t,c,a0)
if(s===t)return b
return A.cD(a,s,!0)
case 9:r=b.z
q=A.aB(a,r,c,a0)
if(q===r)return b
return A.ax(a,b.y,q)
case 10:p=b.y
o=A.L(a,p,c,a0)
n=b.z
m=A.aB(a,n,c,a0)
if(o===p&&m===n)return b
return A.bY(a,o,m)
case 12:l=b.y
k=A.L(a,l,c,a0)
j=b.z
i=A.em(a,j,c,a0)
if(k===l&&i===j)return b
return A.cC(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aB(a,h,c,a0)
p=b.y
o=A.L(a,p,c,a0)
if(g===h&&o===p)return b
return A.bZ(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.aI("Attempted to substitute unexpected RTI kind "+d))}},
aB(a,b,c,d){var t,s,r,q,p=b.length,o=A.bJ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.L(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
en(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bJ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.L(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
em(a,b,c,d){var t,s=b.a,r=A.aB(a,s,c,d),q=b.b,p=A.aB(a,q,c,d),o=b.c,n=A.en(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.b9()
t.a=r
t.b=p
t.c=n
return t},
i(a,b){a[v.arrayRti]=b
return a},
cQ(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.ey(s)
t=a.$S()
return t}return null},
eC(a,b){var t
if(A.cr(b))if(a instanceof A.I){t=A.cQ(a)
if(t!=null)return t}return A.bc(a)},
bc(a){if(a instanceof A.j)return A.T(a)
if(Array.isArray(a))return A.aA(a)
return A.c0(J.F(a))},
aA(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
T(a){var t=a.$ti
return t!=null?t:A.c0(a)},
c0(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.e9(a,t)},
e9(a,b){var t=a instanceof A.I?a.__proto__.__proto__.constructor:b,s=A.dV(v.typeUniverse,t.name)
b.$ccache=s
return s},
ey(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bH(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ex(a){return A.a5(A.T(a))},
el(a){var t=a instanceof A.I?A.cQ(a):null
if(t!=null)return t
if(u.R.b(a))return J.da(a).a
if(Array.isArray(a))return A.aA(a)
return A.bc(a)},
a5(a){var t=a.w
return t==null?a.w=A.cI(a):t},
cI(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.bG(a)
t=A.bH(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.cI(t):s},
e8(a){var t,s,r,q,p,o=this
if(o===u.K)return A.D(o,a,A.ee)
if(!A.G(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.D(o,a,A.ei)
t=o.x
if(t===7)return A.D(o,a,A.e6)
if(t===1)return A.D(o,a,A.cN)
s=t===6?o.y:o
t=s.x
if(t===8)return A.D(o,a,A.ea)
if(s===u.S)r=A.cM
else if(s===u.i||s===u.H)r=A.ed
else if(s===u.N)r=A.eg
else r=s===u.y?A.c1:null
if(r!=null)return A.D(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.eD)){o.r="$i"+q
if(q==="h")return A.D(o,a,A.ec)
return A.D(o,a,A.eh)}}else if(t===11){p=A.et(s.y,s.z)
return A.D(o,a,p==null?A.cN:p)}return A.D(o,a,A.e4)},
D(a,b,c){a.b=c
return a.b(b)},
e7(a){var t,s=this,r=A.e3
if(!A.G(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.e_
else if(s===u.K)r=A.dY
else{t=A.aD(s)
if(t)r=A.e5}s.a=r
return s.a(a)},
bb(a){var t,s=a.x
if(!A.G(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bb(a.y)))t=s===8&&A.bb(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
e4(a){var t=this
if(a==null)return A.bb(t)
return A.f(v.typeUniverse,A.eC(a,t),null,t,null)},
e6(a){if(a==null)return!0
return this.y.b(a)},
eh(a){var t,s=this
if(a==null)return A.bb(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.F(a)[t]},
ec(a){var t,s=this
if(a==null)return A.bb(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.F(a)[t]},
e3(a){var t,s=this
if(a==null){t=A.aD(s)
if(t)return a}else if(s.b(a))return a
A.cJ(a,s)},
e5(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cJ(a,t)},
cJ(a,b){throw A.a(A.dK(A.cw(a,A.r(b,null))))},
cw(a,b){return A.M(a)+": type '"+A.r(A.el(a),null)+"' is not a subtype of type '"+b+"'"},
dK(a){return new A.av("TypeError: "+a)},
p(a,b){return new A.av("TypeError: "+A.cw(a,b))},
ea(a){var t=this
return t.y.b(a)||A.bX(v.typeUniverse,t).b(a)},
ee(a){return a!=null},
dY(a){if(a!=null)return a
throw A.a(A.p(a,"Object"))},
ei(a){return!0},
e_(a){return a},
cN(a){return!1},
c1(a){return!0===a||!1===a},
f4(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.p(a,"bool"))},
f6(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.p(a,"bool"))},
f5(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.p(a,"bool?"))},
cH(a){if(typeof a=="number")return a
throw A.a(A.p(a,"double"))},
f8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.p(a,"double"))},
f7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.p(a,"double?"))},
cM(a){return typeof a=="number"&&Math.floor(a)===a},
ba(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.p(a,"int"))},
fa(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.p(a,"int"))},
f9(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.p(a,"int?"))},
ed(a){return typeof a=="number"},
fb(a){if(typeof a=="number")return a
throw A.a(A.p(a,"num"))},
fc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.p(a,"num"))},
dX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.p(a,"num?"))},
eg(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.a(A.p(a,"String"))},
fd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.p(a,"String"))},
dZ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.p(a,"String?"))},
cO(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.r(a[r],b)
return t},
ek(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.cO(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.r(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cK(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.i([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.i(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.c(a4,k)
n=B.d.l(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.r(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.r(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.r(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.r(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.r(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
r(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.r(a.y,b)
return t}if(m===7){s=a.y
t=A.r(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.r(a.y,b)+">"
if(m===9){q=A.eo(a.y)
p=a.z
return p.length>0?q+("<"+A.cO(p,b)+">"):q}if(m===11)return A.ek(a,b)
if(m===12)return A.cK(a,b,null)
if(m===13)return A.cK(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.c(b,o)
return b[o]}return"?"},
eo(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dW(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
dV(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bH(a,b,!1)
else if(typeof n=="number"){t=n
s=A.ay(a,5,"#")
r=A.bJ(t)
for(q=0;q<t;++q)r[q]=s
p=A.ax(a,b,r)
o[b]=p
return p}else return n},
dT(a,b){return A.cF(a.tR,b)},
dS(a,b){return A.cF(a.eT,b)},
bH(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cA(A.cy(a,null,b,c))
s.set(b,t)
return t},
bI(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cA(A.cy(a,b,c,!0))
r.set(c,s)
return s},
dU(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.bY(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
C(a,b){b.a=A.e7
b.b=A.e8
return b},
ay(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.u(null,null)
t.x=b
t.at=c
s=A.C(a,t)
a.eC.set(c,s)
return s},
cE(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.dP(a,b,s,c)
a.eC.set(s,t)
return t},
dP(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.G(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.u(null,null)
r.x=6
r.y=b
r.at=c
return A.C(a,r)},
c_(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.dO(a,b,s,c)
a.eC.set(s,t)
return t},
dO(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.G(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aD(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aD(r.y))return r
else return A.cq(a,b)}}q=new A.u(null,null)
q.x=7
q.y=b
q.at=c
return A.C(a,q)},
cD(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.dM(a,b,s,c)
a.eC.set(s,t)
return t},
dM(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.G(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.ax(a,"cg",[b])
else if(b===u.P||b===u.T)return u.a}r=new A.u(null,null)
r.x=8
r.y=b
r.at=c
return A.C(a,r)},
dQ(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.u(null,null)
t.x=14
t.y=b
t.at=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
aw(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
dL(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
ax(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aw(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.u(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.C(a,s)
a.eC.set(q,r)
return r},
bY(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aw(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.u(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.C(a,p)
a.eC.set(r,o)
return o},
dR(a,b,c){var t,s,r="+"+(b+"("+A.aw(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.u(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
cC(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aw(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aw(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.dL(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.u(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.C(a,q)
a.eC.set(s,p)
return p},
bZ(a,b,c,d){var t,s=b.at+("<"+A.aw(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.dN(a,b,c,s,d)
a.eC.set(s,t)
return t},
dN(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bJ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.L(a,b,s,0)
n=A.aB(a,c,s,0)
return A.bZ(a,o,n,c!==n)}}m=new A.u(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.C(a,m)},
cy(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cA(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.dF(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cz(a,s,m,l,!1)
else if(r===46)s=A.cz(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.K(a.u,a.e,l.pop()))
break
case 94:l.push(A.dQ(a.u,l.pop()))
break
case 35:l.push(A.ay(a.u,5,"#"))
break
case 64:l.push(A.ay(a.u,2,"@"))
break
case 126:l.push(A.ay(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.dH(a,l)
break
case 38:A.dG(a,l)
break
case 42:q=a.u
l.push(A.cE(q,A.K(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.c_(q,A.K(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cD(q,A.K(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.dE(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cB(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.dJ(a.u,a.e,p)
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
return A.K(a.u,a.e,n)},
dF(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cz(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.dW(t,p.y)[q]
if(o==null)A.V('No "'+q+'" in "'+A.dy(p)+'"')
d.push(A.bI(t,p,o))}else d.push(q)
return n},
dH(a,b){var t,s=a.u,r=A.cx(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ax(s,q,r))
else{t=A.K(s,a.e,q)
switch(t.x){case 12:b.push(A.bZ(s,t,r,a.n))
break
default:b.push(A.bY(s,t,r))
break}}},
dE(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.cx(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.K(n,a.e,m)
p=new A.b9()
p.a=r
p.b=t
p.c=s
b.push(A.cC(n,q,p))
return
case-4:b.push(A.dR(n,b.pop(),r))
return
default:throw A.a(A.aI("Unexpected state under `()`: "+A.b(m)))}},
dG(a,b){var t=b.pop()
if(0===t){b.push(A.ay(a.u,1,"0&"))
return}if(1===t){b.push(A.ay(a.u,4,"1&"))
return}throw A.a(A.aI("Unexpected extended operation "+A.b(t)))},
cx(a,b){var t=b.splice(a.p)
A.cB(a.u,a.e,t)
a.p=b.pop()
return t},
K(a,b,c){if(typeof c=="string")return A.ax(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dI(a,b,c)}else return c},
cB(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.K(a,b,c[t])},
dJ(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.K(a,b,c[t])},
dI(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.aI("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.aI("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
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
if(r)if(A.f(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.f(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.f(a,b.y,c,d,e)
if(s===6)return A.f(a,b.y,c,d,e)
return s!==7}if(s===6)return A.f(a,b.y,c,d,e)
if(q===6){t=A.cq(a,d)
return A.f(a,b,c,t,e)}if(s===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.bX(a,b),c,d,e)}if(s===7){t=A.f(a,u.P,c,d,e)
return t&&A.f(a,b.y,c,d,e)}if(q===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.bX(a,d),e)}if(q===7){t=A.f(a,b,c,u.P,e)
return t||A.f(a,b,c,d.y,e)}if(r)return!1
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
if(!A.f(a,k,c,j,e)||!A.f(a,j,e,k,c))return!1}return A.cL(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.cL(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eb(a,b,c,d,e)}if(p&&q===11)return A.ef(a,b,c,d,e)
return!1},
cL(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.f(a2,a3.y,a4,a5.y,a6))return!1
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
if(!A.f(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.f(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.f(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.f(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eb(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bI(a,b,s[p])
return A.cG(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cG(a,o,null,c,n,e)},
cG(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.f(a,s,d,r,f))return!1}return!0},
ef(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.f(a,s[t],c,r[t],e))return!1
return!0},
aD(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.G(a))if(s!==7)if(!(s===6&&A.aD(a.y)))t=s===8&&A.aD(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eD(a){var t
if(!A.G(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
G(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cF(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b9:function b9(){this.c=this.b=this.a=null},
bG:function bG(a){this.a=a},
b8:function b8(){},
av:function av(a){this.a=a},
dp(a,b,c){return b.j("@<0>").L(c).j("cm<1,2>").a(A.eu(a,new A.y(b.j("@<0>").L(c).j("y<1,2>"))))},
dn(a,b){return new A.y(a.j("@<0>").L(b).j("y<1,2>"))},
bn(a){var t,s={}
if(A.c5(a))return"{...}"
t=new A.Q("")
try{B.a.i($.t,a)
t.a+="{"
s.a=!0
a.v(0,new A.bo(s,t))
t.a+="}"}finally{if(0>=$.t.length)return A.c($.t,-1)
$.t.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
ak:function ak(){},
bo:function bo(a,b){this.a=a
this.b=b},
az:function az(){},
a_:function a_(){},
at:function at(){},
a3:function a3(){},
cl(a,b,c){return new A.ai(a,b)},
e2(a){return a.az()},
dC(a,b){return new A.bC(a,[],A.es())},
dD(a,b,c){var t,s=new A.Q(""),r=A.dC(s,b)
r.J(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
aK:function aK(){},
aM:function aM(){},
ai:function ai(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
bi:function bi(){},
bj:function bj(a){this.b=a},
bD:function bD(){},
bE:function bE(a,b){this.a=a
this.b=b},
bC:function bC(a,b,c){this.c=a
this.a=b
this.b=c},
cT(a){var t=A.du(a,null)
if(t!=null)return t
throw A.a(new A.bg(a))},
bm(a,b,c,d){var t,s
if(c)t=A.i(new Array(a),d.j("e<0>"))
else{if(a>4294967295)A.V(A.aZ(a,0,4294967295,"length",null))
t=J.cj(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
cn(a,b){var t=A.dq(a,b)
return t},
dq(a,b){var t=A.i(a.slice(0),b.j("e<0>"))
return t},
cs(a,b,c){var t,s=A.aA(b),r=new J.aG(b,b.length,s.j("aG<1>"))
if(!r.u())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.b(t==null?s.a(t):t)}while(r.u())}else{t=r.d
a+=A.b(t==null?s.c.a(t):t)
for(s=s.c;r.u();){t=r.d
a=a+c+A.b(t==null?s.a(t):t)}}return a},
co(a,b){return new A.aW(a,b.gao(),b.gaq(),b.gap())},
M(a){if(typeof a=="number"||A.c1(a)||a==null)return J.aF(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dv(a)},
aI(a){return new A.aH(a)},
dc(a){return new A.H(!1,null,null,a)},
dw(a,b){return new A.ap(null,null,!0,a,b,"Value not in range")},
aZ(a,b,c,d,e){return new A.ap(b,c,!0,a,d,"Invalid value")},
dx(a,b,c){if(0>a||a>c)throw A.a(A.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.aZ(b,a,c,"end",null))
return b}return c},
au(a){return new A.b5(a)},
cv(a){return new A.b3(a)},
bd(a){return new A.aL(a)},
dl(a,b,c){var t,s
if(A.c5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.i([],u.s)
B.a.i($.t,a)
try{A.ej(a,t)}finally{if(0>=$.t.length)return A.c($.t,-1)
$.t.pop()}s=A.cs(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dk(a,b,c){var t,s
if(A.c5(a))return b+"..."+c
t=new A.Q(b)
B.a.i($.t,a)
try{s=t
s.a=A.cs(s.a,a,", ")}finally{if(0>=$.t.length)return A.c($.t,-1)
$.t.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ej(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.bW(m,m.r,a.$ti.c),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
t=A.b(l.d)
B.a.i(b,t)
k+=t.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
s=b.pop()
if(0>=b.length)return A.c(b,-1)
r=b.pop()}else{q=l.d;++j
if(!l.u()){if(j<=4){B.a.i(b,A.b(q))
return}s=A.b(q)
if(0>=b.length)return A.c(b,-1)
r=b.pop()
k+=s.length+2}else{p=l.d;++j
for(;l.u();q=p,p=o){o=l.d;++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.i(b,"...")
return}}r=A.b(q)
s=A.b(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)B.a.i(b,n)
B.a.i(b,r)
B.a.i(b,s)},
bp:function bp(a,b){this.a=a
this.b=b},
bz:function bz(){},
d:function d(){},
aH:function aH(a){this.a=a},
as:function as(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aN:function aN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a){this.a=a},
b3:function b3(a){this.a=a},
aL:function aL(a){this.a=a},
aq:function aq(){},
bA:function bA(a){this.a=a},
bg:function bg(a){this.a=a},
v:function v(){},
al:function al(){},
j:function j(){},
Q:function Q(a){this.a=a},
be:function be(){},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(a,b){this.c=a
this.b=b},
ae:function ae(){},
ar:function ar(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a1:function a1(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
aV:function aV(){},
b1:function b1(){},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
eF(){self.jsregionworker=A.eq(new A.bP(),u.p)},
bP:function bP(){},
bv:function bv(a){this.a=a},
bw:function bw(a){this.b=a},
bq:function bq(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
n:function n(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O(a,b){return new A.N(a*2-2*b,a+b)},
N:function N(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
ad(a,b){var t=b.l(0,$.cZ().K(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.o(s,r),p=q.l(0,$.c8().K(0,s+r)),o=t.E(0,q)
return new A.bf(a,q,b.E(0,p),o)},
m(a,b){return new A.o(a,b)},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
o:function o(a,b){this.a=a
this.b=b},
an(a){var t,s,r,q,p=u.S,o=A.bm(256,0,!1,p),n=A.bm(256,0,!1,p)
for(t=0;t<256;++t)B.a.n(n,t,t)
s=A.cT("6364136223846793005")
r=A.cT("1442695040888963407")
a=B.c.V(B.c.V(B.c.V(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.c.a9(a+31,t+1)
if(!(q<256))return A.c(n,q)
B.a.n(o,t,n[q])
n[q]=n[t]}return new A.bs(o)},
bs:function bs(a){this.a=a},
eL(a){return A.V(new A.aj("Field '"+a+"' has been assigned during initialization."))},
aE(){return A.V(A.dm(""))},
e1(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.e0,a)
t[$.c7()]=a
a.$dart_jsFunction=t
return t},
e0(a,b){u.j.a(b)
u.Z.a(a)
return A.dt(a,b,null)},
eq(a,b){if(typeof a=="function")return a
else return b.a(A.e1(a))},
dA(a,b,c,d,e){var t,s,r,q
for(t=0;t<4;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=c.a
q=c.b
q=new A.ar(s.a,new A.N(r*2-2*q,r+q),a,new A.b6(A.i([],u.n),A.i([],u.t)),e)
q.d=A.dB(q)
return q}}throw A.a(new A.bA("No tile type found for elevation: "+A.b(a)+", moisture: "+A.b(b)+". Fix the rules!"))},
dB(a){var t,s=a.c
if(s>0){t=a.a
return A.cf(a.b,0,t.c,t.d,t.e,s,a.e)}t=a.a
return A.cf(a.b,s,t.c,t.d,t.e,1,a.e)},
cf(a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.e
a8=B.e
a9=B.e}else{a7=A.bT(a7,B.e,t)
a8=A.bT(a8,B.e,t)
a9=A.bT(a9,B.e,t)}}s=a5.l(0,A.O(a6,a6)).l(0,B.J)
r=s.l(0,A.O(b0,b0))
q=s.l(0,A.O(0,b1))
p=r.l(0,A.O(0,b1))
o=s.l(0,A.O(b1,0))
n=r.l(0,A.O(b1,0))
m=p.l(0,A.O(b1,0))
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
a2=A.i([l,k,j,i,h,g,j,i,h,g,f,e,j,i,f,e,d,c,j,i,d,c,b,a,j,i,b,a,a0,a1,j,i,a0,a1,l,k],u.n)
a3=A.bm(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.n(a3,a4,a8.gW())
B.a.n(a3,a4+6,a7.gW())
B.a.n(a3,a4+12,a9.gW())}return new A.b6(a2,a3)},
bT(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.n(B.b.I((t+(b.a/255-t)*c)*255),B.b.I((s+(b.b/255-s)*c)*255),B.b.I((r+(b.c/255-r)*c)*255),B.b.I((q+(b.d/255-q)*c)*255))},
eJ(a){var t,s,r=A.i([],u.Q)
for(t=0;t<a.length;++t){s=a[t]
if(s.c>-5)B.a.i(r,s)}return r}},J={
c6(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ew(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.c4==null){A.eA()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.a(A.cv("Return interceptor for "+A.b(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bB
if(p==null)p=$.bB=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eE(a)
if(q!=null)return q
if(typeof a=="function")return B.K
t=Object.getPrototypeOf(a)
if(t==null)return B.n
if(t===Object.prototype)return B.n
if(typeof r=="function"){p=$.bB
if(p==null)p=$.bB=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
ci(a,b){if(a<0||a>4294967295)throw A.a(A.aZ(a,0,4294967295,"length",null))
return J.cj(new Array(a),b)},
cj(a,b){return J.ck(A.i(a,b.j("e<0>")),b)},
ck(a,b){a.fixed$length=Array
return a},
F(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.af.prototype
return J.aR.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.ag.prototype
if(typeof a=="boolean")return J.aP.prototype
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof A.j)return a
return J.ew(a)},
cR(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(!(a instanceof A.j))return J.a2.prototype
return a},
d9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).A(a,b)},
bS(a){return J.F(a).gk(a)},
c9(a){return J.cR(a).gp(a)},
da(a){return J.F(a).gB(a)},
db(a,b){return J.F(a).a6(a,b)},
aF(a){return J.F(a).h(a)},
aO:function aO(){},
aP:function aP(){},
ag:function ag(){},
l:function l(){},
P:function P(){},
aX:function aX(){},
a2:function a2(){},
Z:function Z(){},
e:function e(a){this.$ti=a},
bh:function bh(a){this.$ti=a},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ah:function ah(){},
af:function af(){},
aR:function aR(){},
Y:function Y(){}},B={}
var w=[A,J,B]
var $={}
A.bU.prototype={}
J.aO.prototype={
A(a,b){return a===b},
gk(a){return A.aY(a)},
h(a){return"Instance of '"+A.bu(a)+"'"},
a6(a,b){throw A.a(A.co(a,u.o.a(b)))},
gB(a){return A.a5(A.c0(this))}}
J.aP.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
gB(a){return A.a5(u.y)},
$iA:1,
$ic2:1}
J.ag.prototype={
A(a,b){return null==b},
h(a){return"null"},
gk(a){return 0},
$iA:1}
J.l.prototype={}
J.P.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.aX.prototype={}
J.a2.prototype={}
J.Z.prototype={
h(a){var t=a[$.c7()]
if(t==null)return this.ab(a)
return"JavaScript function for "+J.aF(t)},
$iX:1}
J.e.prototype={
i(a,b){A.aA(a).c.a(b)
if(!!a.fixed$length)A.V(A.au("add"))
a.push(b)},
a5(a,b){A.aA(a).j("v<1>").a(b)
if(!!a.fixed$length)A.V(A.au("addAll"))
this.ac(a,b)
return},
ac(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.bd(a))
for(s=0;s<t;++s)a.push(b[s])},
h(a){return A.dk(a,"[","]")},
gk(a){return A.aY(a)},
gp(a){return a.length},
m(a,b){if(!(b>=0&&b<a.length))throw A.a(A.a6(a,b))
return a[b]},
n(a,b,c){A.aA(a).c.a(c)
if(!!a.immutable$list)A.V(A.au("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.a6(a,b))
a[b]=c},
$iv:1,
$ih:1}
J.bh.prototype={}
J.aG.prototype={
u(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bR(r)
throw A.a(r)}t=s.c
if(t>=q){s.sa0(null)
return!1}s.sa0(r[t]);++s.c
return!0},
sa0(a){this.d=this.$ti.j("1?").a(a)}}
J.ah.prototype={
D(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.au(""+a+".toInt()"))},
I(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.au(""+a+".round()"))},
ar(a){if(a<0)return-Math.round(-a)
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
a9(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
X(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.af(a,b)},
af(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.a(A.au("Result of truncating division is "+A.b(t)+": "+A.b(a)+" ~/ "+b))},
aa(a,b){if(b<0)throw A.a(A.er(b))
return b>31?0:a<<b>>>0},
a4(a,b){var t
if(a>0)t=this.ae(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ae(a,b){return b>31?0:a>>>b},
gB(a){return A.a5(u.H)},
$iE:1,
$ia8:1}
J.af.prototype={
V(a,b){var t=this.aa(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gB(a){return A.a5(u.S)},
$iA:1,
$iaC:1}
J.aR.prototype={
gB(a){return A.a5(u.i)},
$iA:1}
J.Y.prototype={
ag(a,b){if(b<0)throw A.a(A.a6(a,b))
if(b>=a.length)A.V(A.a6(a,b))
return a.charCodeAt(b)},
a_(a,b){if(b>=a.length)throw A.a(A.a6(a,b))
return a.charCodeAt(b)},
l(a,b){return a+b},
F(a,b,c){return a.substring(b,A.dx(b,c,a.length))},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a5(u.N)},
gp(a){return a.length},
m(a,b){if(b>=a.length)throw A.a(A.a6(a,b))
return a[b]},
$iA:1,
$iq:1}
A.aj.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ac.prototype={}
A.a0.prototype={
gk(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bS(this.a)&536870911
this._hashCode=t
return t},
h(a){return'Symbol("'+A.b(this.a)+'")'},
A(a,b){if(b==null)return!1
return b instanceof A.a0&&this.a==b.a},
$iR:1}
A.aa.prototype={}
A.a9.prototype={
gH(a){return this.gp(this)===0},
h(a){return A.bn(this)},
$iz:1}
A.ab.prototype={
gp(a){return this.a},
G(a){return!1},
m(a,b){if(!this.G(b))return null
return this.b[A.x(b)]},
v(a,b){var t,s,r,q,p,o=this.$ti
o.j("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.x(t[q])
b.$2(p,o.a(r[p]))}}}
A.aQ.prototype={
gao(){var t=this.a
return t},
gaq(){var t,s,r,q,p=this
if(p.c===1)return B.l
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.l
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.c(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gap(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.m
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.m
p=new A.y(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.c(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.c(r,m)
p.n(0,new A.a0(n),r[m])}return new A.aa(p,u.Y)},
$ich:1}
A.bt.prototype={
$2(a,b){var t
A.x(a)
t=this.a
t.b=t.b+"$"+a
B.a.i(this.b,a)
B.a.i(this.c,b);++t.a},
$S:2}
A.bx.prototype={
t(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.am.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.aS.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.b4.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.br.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.I.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.cW(s==null?"unknown":s)+"'"},
$iX:1,
gaw(){return this},
$C:"$1",
$R:1,
$D:null}
A.aJ.prototype={$C:"$2",$R:2}
A.b2.prototype={}
A.b0.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.cW(t)+"'"}}
A.W.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.W))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.eH(this.a)^A.aY(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bu(this.a)+"'")}}
A.b7.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b_.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bF.prototype={}
A.y.prototype={
gp(a){return this.a},
gH(a){return this.a===0},
G(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else{s=this.al(a)
return s}},
al(a){var t=this.d
if(t==null)return!1
return this.T(t[this.S(a)],a)>=0},
m(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.am(b)},
am(a){var t,s,r=this.d
if(r==null)return null
t=r[this.S(a)]
s=this.T(t,a)
if(s<0)return null
return t[s].b},
n(a,b,c){var t,s,r=this,q=A.T(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.Z(t==null?r.b=r.P():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.Z(s==null?r.c=r.P():s,b,c)}else r.an(b,c)},
an(a,b){var t,s,r,q,p=this,o=A.T(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.P()
s=p.S(a)
r=t[s]
if(r==null)t[s]=[p.R(a,b)]
else{q=p.T(r,a)
if(q>=0)r[q].b=b
else r.push(p.R(a,b))}},
v(a,b){var t,s,r=this
A.T(r).j("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.bd(r))
t=t.c}},
Z(a,b,c){var t,s=A.T(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.R(b,c)
else t.b=c},
R(a,b){var t=this,s=A.T(t),r=new A.bk(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
S(a){return J.bS(a)&0x3fffffff},
T(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.d9(a[s].a,b))return s
return-1},
h(a){return A.bn(this)},
P(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icm:1}
A.bk.prototype={}
A.bl.prototype={
gp(a){return this.a.a}}
A.aU.prototype={
u(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.bd(r))
t=s.c
if(t==null){s.sY(null)
return!1}else{s.sY(t.a)
s.c=t.c
return!0}},
sY(a){this.d=this.$ti.j("1?").a(a)}}
A.bL.prototype={
$1(a){return this.a(a)},
$S:0}
A.bM.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.bN.prototype={
$1(a){return this.a(A.x(a))},
$S:4}
A.u.prototype={
j(a){return A.bI(v.typeUniverse,this,a)},
L(a){return A.dU(v.typeUniverse,this,a)}}
A.b9.prototype={}
A.bG.prototype={
h(a){return A.r(this.a,null)}}
A.b8.prototype={
h(a){return this.a}}
A.av.prototype={}
A.ak.prototype={
v(a,b){var t,s,r,q=this,p=A.T(q)
p.j("~(1,2)").a(b)
for(t=A.bW(q,q.r,p.c),p=p.z[1];t.u();){s=t.d
r=q.m(0,s)
b.$2(s,r==null?p.a(r):r)}},
gp(a){return this.a},
gH(a){return this.a===0},
h(a){return A.bn(this)},
$iz:1}
A.bo.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.b(a)
s.a=t+": "
s.a+=A.b(b)},
$S:1}
A.az.prototype={}
A.a_.prototype={
m(a,b){return this.a.m(0,b)},
v(a,b){this.a.v(0,this.$ti.j("~(1,2)").a(b))},
gH(a){return this.a.a===0},
gp(a){return this.a.a},
h(a){return A.bn(this.a)},
$iz:1}
A.at.prototype={}
A.a3.prototype={}
A.aK.prototype={}
A.aM.prototype={}
A.ai.prototype={
h(a){var t=A.M(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.aT.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.bi.prototype={
aj(a,b){var t=A.dD(a,this.gak().b,null)
return t},
gak(){return B.M}}
A.bj.prototype={}
A.bD.prototype={
a8(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=B.d.a_(a,r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(B.d.a_(a,o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(B.d.ag(a,p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.d.F(a,s,r)
s=r+1
t.a+=A.k(92)
t.a+=A.k(117)
t.a+=A.k(100)
p=q>>>8&15
t.a+=A.k(p<10?48+p:87+p)
p=q>>>4&15
t.a+=A.k(p<10?48+p:87+p)
p=q&15
t.a+=A.k(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)t.a+=B.d.F(a,s,r)
s=r+1
t.a+=A.k(92)
switch(q){case 8:t.a+=A.k(98)
break
case 9:t.a+=A.k(116)
break
case 10:t.a+=A.k(110)
break
case 12:t.a+=A.k(102)
break
case 13:t.a+=A.k(114)
break
default:t.a+=A.k(117)
t.a+=A.k(48)
t.a+=A.k(48)
p=q>>>4&15
t.a+=A.k(p<10?48+p:87+p)
p=q&15
t.a+=A.k(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=B.d.F(a,s,r)
s=r+1
t.a+=A.k(92)
t.a+=A.k(q)}}if(s===0)t.a+=a
else if(s<n)t.a+=B.d.F(a,s,n)},
M(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.a(new A.aT(a,null))}B.a.i(t,a)},
J(a){var t,s,r,q,p=this
if(p.a7(a))return
p.M(a)
try{t=p.b.$1(a)
if(!p.a7(t)){r=A.cl(a,null,p.ga3())
throw A.a(r)}r=p.a
if(0>=r.length)return A.c(r,-1)
r.pop()}catch(q){s=A.eN(q)
r=A.cl(a,s,p.ga3())
throw A.a(r)}},
a7(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.b.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.a8(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.M(a)
r.au(a)
t=r.a
if(0>=t.length)return A.c(t,-1)
t.pop()
return!0}else if(u.G.b(a)){r.M(a)
s=r.av(a)
t=r.a
if(0>=t.length)return A.c(t,-1)
t.pop()
return s}else return!1},
au(a){var t,s,r=this.c
r.a+="["
t=a.length
if(t!==0){if(0>=t)return A.c(a,0)
this.J(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.J(a[s])}}r.a+="]"},
av(a){var t,s,r,q,p,o,n=this,m={}
if(a.gH(a)){n.c.a+="{}"
return!0}t=a.gp(a)*2
s=A.bm(t,null,!1,u.X)
r=m.a=0
m.b=!0
a.v(0,new A.bE(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.a8(A.x(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.c(s,o)
n.J(s[o])}q.a+="}"
return!0}}
A.bE.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.n(t,s.a++,a)
B.a.n(t,s.a++,b)},
$S:1}
A.bC.prototype={
ga3(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.bp.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.M(b)
s.a=", "},
$S:5}
A.bz.prototype={
h(a){return this.a1()}}
A.d.prototype={}
A.aH.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.M(t)
return"Assertion failed"}}
A.as.prototype={}
A.H.prototype={
gO(){return"Invalid argument"+(!this.a?"(s)":"")},
gN(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gO()+r+p
if(!t.a)return o
return o+t.gN()+": "+A.M(t.gU())},
gU(){return this.b}}
A.ap.prototype={
gU(){return A.dX(this.b)},
gO(){return"RangeError"},
gN(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.b(r):""
else if(r==null)t=": Not greater than or equal to "+A.b(s)
else if(r>s)t=": Not in inclusive range "+A.b(s)+".."+A.b(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.b(s)
return t}}
A.aN.prototype={
gU(){return A.ba(this.b)},
gO(){return"RangeError"},
gN(){if(A.ba(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gp(a){return this.f}}
A.aW.prototype={
h(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.Q("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.M(o)
k.a=", "}l.d.v(0,new A.bp(k,j))
n=A.M(l.a)
m=j.h(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.b5.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b3.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aL.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.M(t)+"."}}
A.aq.prototype={
h(a){return"Stack Overflow"},
$id:1}
A.bA.prototype={
h(a){return"Exception: "+this.a}}
A.bg.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.v.prototype={
gp(a){var t,s=this.a,r=A.bW(s,s.r,this.$ti.c)
for(t=0;r.u();)++t
return t},
h(a){return A.dl(this,"(",")")}}
A.al.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
A(a,b){return this===b},
gk(a){return A.aY(this)},
h(a){return"Instance of '"+A.bu(this)+"'"},
a6(a,b){throw A.a(A.co(this,u.o.a(b)))},
gB(a){return A.ex(this)},
toString(){return this.h(this)}}
A.Q.prototype={
gp(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$idz:1}
A.be.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.ao.prototype={
h(a){return"Point("+A.b(this.a)+", "+A.b(this.b)+")"},
A(a,b){if(b==null)return!1
return b instanceof A.ao&&this.a===b.a&&this.b===b.b},
gk(a){var t=B.b.gk(this.a),s=B.b.gk(this.b),r=A.ct(A.ct(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.w.prototype={
a1(){return"LevelOfDetail."+this.b}}
A.ae.prototype={}
A.ar.prototype={}
A.a1.prototype={
a1(){return"TileType."+this.b}}
A.aV.prototype={}
A.b1.prototype={}
A.S.prototype={}
A.bP.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=J.cR(a),f=A.ba(g.m(a,0)),e=A.ba(g.m(a,1)),d=A.cH(g.m(a,2)),c=A.cH(g.m(a,3))
g=A.ba(g.m(a,4))
if(!(g>=0&&g<6))return A.c(B.f,g)
t=B.f[g]
s=new A.bv(new A.b1()).ah(A.O(d,c),f,e,B.b.D(d),B.b.D(c),t)
r=A.i([],u.E)
for(g=s.b,q=u.s,p=u.N,o=u.K,n=0;n<6;++n){t=B.f[n]
m=A.i([],q)
if(g.G(t))for(l=g.m(0,t),k=l.length,j=0;j<l.length;l.length===k||(0,A.bR)(l),++j){i=l[j]
h=i.b
B.a.i(m,B.v.aj(A.dp(["gameObjectType","Tile","type",i.a.b,"isoCoordinate",A.b(h.a)+","+A.b(h.b),"elevation",i.c,"width",i.e],p,o),null))}B.a.i(r,m)}return A.i([r],u.e)},
$S:6}
A.bv.prototype={
ah(a,b,c,d,e,f){var t,s,r,q,p,o=new A.bq(this.a)
o.a=A.an(2)
o.b=A.an(3)
o.c=A.an(4)
o.d=A.an(5)
o.e=A.an(6)
o.f=A.an(7)
t=A.dn(u.q,u.W)
for(s=f.c,r=0;r<6;++r){q=B.f[r]
if(q.c<s)continue
p=o.ai(b,c,d,e,q)
t.n(0,q,A.eJ(this.ad(d,e,p[0],p[1],q)))}return new A.bw(t)},
ad(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=A.i([],u.Q)
for(t=c.length,s=e.c,r=u.O,q=u.V,p=d.length,o=0;o<t;++o){n=c[o]
if(!(o<p))return A.c(d,o)
m=d[o]
for(l=n.length,k=m.length,j=a+o*s,i=0;i<c[0].length;++i){if(!(i<l))return A.c(n,i)
h=n[i]
if(!(i<k))return A.c(m,i)
B.a.i(f,A.dA(h,m[i],new A.ao(j,b+i*s,r),A.i([new A.S(B.V,0,g),new A.S(B.X,0.2,0.3),new A.S(B.W,g,0.3),new A.S(B.Y,g,g)],q),s))}}return f}}
A.bw.prototype={}
A.bq.prototype={
ai(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=a8.c,a0=B.c.X(a4,a),a1=B.c.X(a5,a),a2=b.a2(a0,a1),a3=b.a2(a0,a1)
for(t=a2.length,s=a3.length,r=0;r<a0;++r)for(q=a6+r*a,p=q*0.001,o=q*0.01,n=q*0.1,m=q*0.006,l=q*0.016,k=q*0.048,j=0;j<a1;++j){i=a7+j*a
h=b.a
h===$&&A.aE()
h=A.ad(h.a,new A.o(p,i*0.001)).C()
g=b.b
g===$&&A.aE()
g=A.ad(g.a,new A.o(o,i*0.01)).C()
f=b.c
f===$&&A.aE()
f=A.ad(f.a,new A.o(n,i*0.1)).C()
e=b.d
e===$&&A.aE()
e=A.ad(e.a,new A.o(m,i*0.006)).C()
d=b.e
d===$&&A.aE()
d=A.ad(d.a,new A.o(l,i*0.016)).C()
c=b.f
c===$&&A.aE()
c=A.ad(c.a,new A.o(k,i*0.048)).C()
if(!(r<t))return A.c(a2,r)
B.a.n(a2[r],j,B.b.ar((h+0.1*g+0.01*f+0)*100))
if(!(r<s))return A.c(a3,r)
B.a.n(a3[r],j,e+0.5*d+0.25*c)}return A.i([a2,a3],u.f)},
a2(a,b){var t,s,r,q,p=J.ci(a,u.r)
for(t=u.i,s=0;s<a;++s){r=J.ci(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.n.prototype={
gW(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.N.prototype={
l(a,b){return new A.N(this.a+b.a,this.b+b.b)},
A(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.N&&b.a===this.a&&b.b===this.b},
gk(a){return B.b.gk(this.a)^B.b.gk(this.b)},
h(a){return""+B.b.D(this.a)+", "+B.b.D(this.b)}}
A.b6.prototype={}
A.bf.prototype={
q(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.cX()
if(!(a<8))return A.c(j,a)
t=j[a]
s=k.c.E(0,t).E(0,$.c8().K(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.l(0,t)
m=u.L.a(k.a)
n=m[m[B.b.D(n.a)&255]+B.b.D(n.b)&255]
l=$.cY()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
C(){var t,s,r,q,p=this
p.q(0)
p.q(1)
t=p.d
s=t.a
t=t.b
r=s+t
if(r<=1){q=1-r
if(q>s||q>t)if(s>t)p.q(2)
else p.q(3)
else p.q(4)
p.q(5)}else{q=2-r
if(q<s||q<t)if(s>t)p.q(6)
else p.q(7)
else p.q(5)
p.q(4)}return p.e/47}}
A.o.prototype={
l(a,b){return new A.o(this.a+b.a,this.b+b.b)},
E(a,b){return new A.o(this.a-b.a,this.b-b.b)},
K(a,b){return new A.o(this.a*b,this.b*b)},
h(a){return A.b(this.a)+", "+A.b(this.b)}}
A.bs.prototype={};(function aliases(){var t=J.P.prototype
t.ab=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1
t(A,"es","e2",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.bU,J.aO,J.aG,A.d,A.v,A.a0,A.a_,A.a9,A.aQ,A.I,A.bx,A.br,A.bF,A.ak,A.bk,A.aU,A.u,A.b9,A.bG,A.az,A.aK,A.aM,A.bD,A.bz,A.aq,A.bA,A.bg,A.al,A.Q,A.ao,A.ae,A.aV,A.S,A.bv,A.bw,A.bq,A.n,A.N,A.b6,A.bf,A.o,A.bs])
r(J.aO,[J.aP,J.ag,J.l,J.ah,J.Y])
r(J.l,[J.P,J.e,A.be])
r(J.P,[J.aX,J.a2,J.Z])
s(J.bh,J.e)
r(J.ah,[J.af,J.aR])
r(A.d,[A.aj,A.as,A.aS,A.b4,A.b7,A.b_,A.b8,A.ai,A.aH,A.H,A.aW,A.b5,A.b3,A.aL])
s(A.ac,A.v)
s(A.a3,A.a_)
s(A.at,A.a3)
s(A.aa,A.at)
s(A.ab,A.a9)
r(A.I,[A.aJ,A.b2,A.bL,A.bN,A.bP])
r(A.aJ,[A.bt,A.bM,A.bo,A.bE,A.bp])
s(A.am,A.as)
r(A.b2,[A.b0,A.W])
s(A.y,A.ak)
s(A.bl,A.ac)
s(A.av,A.b8)
s(A.aT,A.ai)
s(A.bi,A.aK)
s(A.bj,A.aM)
s(A.bC,A.bD)
r(A.H,[A.ap,A.aN])
r(A.bz,[A.w,A.a1])
s(A.ar,A.ae)
s(A.b1,A.aV)
t(A.a3,A.az)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aC:"int",E:"double",a8:"num",q:"String",c2:"bool",al:"Null",h:"List"},mangledNames:{},types:["@(@)","~(j?,j?)","~(q,@)","@(@,q)","@(q)","~(R,@)","h<h<h<q>>>(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dT(v.typeUniverse,JSON.parse('{"aX":"P","a2":"P","Z":"P","aP":{"c2":[],"A":[]},"ag":{"A":[]},"e":{"h":["1"],"v":["1"]},"bh":{"e":["1"],"h":["1"],"v":["1"]},"ah":{"E":[],"a8":[]},"af":{"E":[],"aC":[],"a8":[],"A":[]},"aR":{"E":[],"a8":[],"A":[]},"Y":{"q":[],"A":[]},"aj":{"d":[]},"ac":{"v":["1"]},"a0":{"R":[]},"aa":{"at":["1","2"],"a3":["1","2"],"a_":["1","2"],"az":["1","2"],"z":["1","2"]},"a9":{"z":["1","2"]},"ab":{"a9":["1","2"],"z":["1","2"]},"aQ":{"ch":[]},"am":{"d":[]},"aS":{"d":[]},"b4":{"d":[]},"I":{"X":[]},"aJ":{"X":[]},"b2":{"X":[]},"b0":{"X":[]},"W":{"X":[]},"b7":{"d":[]},"b_":{"d":[]},"y":{"ak":["1","2"],"cm":["1","2"],"z":["1","2"]},"bl":{"v":["1"]},"b8":{"d":[]},"av":{"d":[]},"ak":{"z":["1","2"]},"a_":{"z":["1","2"]},"at":{"a3":["1","2"],"a_":["1","2"],"az":["1","2"],"z":["1","2"]},"ai":{"d":[]},"aT":{"d":[]},"E":{"a8":[]},"aC":{"a8":[]},"h":{"v":["1"]},"aH":{"d":[]},"as":{"d":[]},"H":{"d":[]},"ap":{"d":[]},"aN":{"d":[]},"aW":{"d":[]},"b5":{"d":[]},"b3":{"d":[]},"aL":{"d":[]},"aq":{"d":[]},"Q":{"dz":[]},"ar":{"ae":[]},"b1":{"aV":[]}}'))
A.dS(v.typeUniverse,JSON.parse('{"ac":1,"aK":2,"aM":2}'))
var u=(function rtii(){var t=A.a7
return{Y:t("aa<R,@>"),C:t("d"),Z:t("X"),o:t("ch"),U:t("v<@>"),e:t("e<h<h<q>>>"),f:t("e<h<h<E>>>"),E:t("e<h<q>>"),s:t("e<q>"),Q:t("e<ar>"),V:t("e<S>"),n:t("e<E>"),b:t("e<@>"),t:t("e<aC>"),T:t("ag"),g:t("Z"),B:t("y<R,@>"),q:t("w"),W:t("h<ae>"),p:t("h<h<h<q>>>(@)"),r:t("h<E>"),j:t("h<@>"),L:t("h<aC>"),G:t("z<@,@>"),P:t("al"),K:t("j"),O:t("ao<E>"),I:t("eU"),N:t("q"),h:t("R"),R:t("A"),D:t("a2"),y:t("c2"),i:t("E"),z:t("@"),S:t("aC"),A:t("0&*"),_:t("j*"),a:t("cg<al>?"),X:t("j?"),H:t("a8")}})();(function constants(){var t=hunkHelpers.makeConstList
B.I=J.aO.prototype
B.a=J.e.prototype
B.c=J.af.prototype
B.b=J.ah.prototype
B.d=J.Y.prototype
B.K=J.Z.prototype
B.L=J.l.prototype
B.n=J.aX.prototype
B.h=J.a2.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.o=function() {
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
B.u=function(getTagFallback) {
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
B.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.q=function(hooks) {
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
B.t=function(hooks) {
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
B.r=function(hooks) {
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
B.j=function(hooks) { return hooks; }

B.v=new A.bi()
B.k=new A.bF()
B.e=new A.n(255,1,46,143)
B.J=new A.N(0,0)
B.M=new A.bj(null)
B.l=A.i(t([]),u.b)
B.O=new A.w(1,"lod1x1")
B.P=new A.w(2,"lod2x2")
B.R=new A.w(4,"lod4x4")
B.S=new A.w(8,"lod8x8")
B.N=new A.w(16,"lod16x16")
B.Q=new A.w(32,"lod32x32")
B.f=A.i(t([B.O,B.P,B.R,B.S,B.N,B.Q]),A.a7("e<w>"))
B.T=A.i(t([]),A.a7("e<R>"))
B.m=new A.ab(0,{},B.T,A.a7("ab<R,@>"))
B.U=new A.a0("call")
B.D=new A.n(255,173,162,115)
B.B=new A.n(255,159,148,103)
B.z=new A.n(255,148,138,95)
B.V=new A.a1(B.D,B.B,B.z,"lakeFloorBare")
B.w=new A.n(255,110,110,121)
B.G=new A.n(255,90,90,101)
B.F=new A.n(255,70,70,81)
B.W=new A.a1(B.w,B.G,B.F,"svalbardMountain")
B.y=new A.n(255,135,143,102)
B.x=new A.n(255,115,123,82)
B.H=new A.n(255,95,103,62)
B.X=new A.a1(B.y,B.x,B.H,"svalbardGrass")
B.E=new A.n(255,191,200,202)
B.C=new A.n(255,171,180,182)
B.A=new A.n(255,151,160,162)
B.Y=new A.a1(B.E,B.C,B.A,"svalbardIce")})();(function staticFields(){$.bB=null
$.t=A.i([],A.a7("e<j>"))
$.cp=null
$.cc=null
$.cb=null
$.cS=null
$.cP=null
$.cV=null
$.bK=null
$.bO=null
$.c4=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"eO","c7",()=>A.ev("_$dart_dartClosure"))
t($,"eV","d_",()=>A.B(A.by({
toString:function(){return"$receiver$"}})))
t($,"eW","d0",()=>A.B(A.by({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"eX","d1",()=>A.B(A.by(null)))
t($,"eY","d2",()=>A.B(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"f0","d5",()=>A.B(A.by(void 0)))
t($,"f1","d6",()=>A.B(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"f_","d4",()=>A.B(A.cu(null)))
t($,"eZ","d3",()=>A.B(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"f3","d8",()=>A.B(A.cu(void 0)))
t($,"f2","d7",()=>A.B(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"eQ","cY",()=>A.i([A.m(5,2),A.m(2,5),A.m(-5,2),A.m(-2,5),A.m(5,-2),A.m(2,-5),A.m(-5,-2),A.m(-2,-5)],A.a7("e<o>")))
s($,"eP","cX",()=>A.i([A.m(1,0),A.m(0,1),A.m(1,-1),A.m(-1,1),A.m(1,1),A.m(0,0),A.m(2,0),A.m(0,2)],A.a7("e<o>")))
t($,"eS","cZ",()=>A.m(-0.211324865405187,-0.211324865405187))
t($,"eR","c8",()=>A.m(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.l,DOMError:J.l,ErrorEvent:J.l,Event:J.l,InputEvent:J.l,SubmitEvent:J.l,MediaError:J.l,NavigatorUserMediaError:J.l,OverconstrainedError:J.l,PositionError:J.l,GeolocationPositionError:J.l,SensorErrorEvent:J.l,SpeechRecognitionError:J.l,DOMException:A.be})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,DOMException:true})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eF
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
