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
a[c]=function(){a[c]=function(){A.fB(b)}
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
if(a[b]!==t)A.fC(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cJ(b)
return new t(c,this)}:function(){if(t===null)t=A.cJ(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cJ(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cw:function cw(){},
e8(a){return new A.az("Field '"+a+"' has not been initialized.")},
d9(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cM(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
e5(){return new A.br("No element")},
ek(a,b,c){A.bq(a,0,J.cr(a)-1,b,c)},
bq(a,b,c,d,e){if(c-b<=32)A.ej(a,b,c,d,e)
else A.ei(a,b,c,d,e)},
ej(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.bG(a);t<=c;++t){r=s.i(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.i(a,q-1),r)
if(typeof p!=="number")return p.v()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.i(a,o))
q=o}s.j(a,q,r)}},
ei(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.c.a_(a4-a3+1,6),j=a3+k,i=a4-k,h=B.c.a_(a3+a4,2),g=h-k,f=h+k,e=J.bG(a2),d=e.i(a2,j),c=e.i(a2,g),b=e.i(a2,h),a=e.i(a2,f),a0=e.i(a2,i),a1=a5.$2(d,c)
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
e.j(a2,g,e.i(a2,a3))
e.j(a2,f,e.i(a2,a4))
s=a3+1
r=a4-1
if(J.b_(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.i(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.i(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
r=n
s=m
break}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.i(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.i(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.i(a2,r),c)<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.j(a2,a3,e.i(a2,a1))
e.j(a2,a1,c)
a1=r+1
e.j(a2,a4,e.i(a2,a1))
e.j(a2,a1,a)
A.bq(a2,a3,s-2,a5,a6)
A.bq(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.b_(a5.$2(e.i(a2,s),c),0);)++s
for(;J.b_(a5.$2(e.i(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.i(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.i(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.i(a2,r),c)<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)}r=n
break}}A.bq(a2,s,r,a5,a6)}else A.bq(a2,s,r,a5,a6)},
az:function az(a){this.a=a},
au:function au(){},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
P:function P(){},
ai:function ai(a){this.a=a},
dG(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
h4(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.E.b(a)},
d(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b0(a)
return t},
af(a){var t,s=$.d5
if(s==null)s=$.d5=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
ed(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.b(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
c2(a){return A.eb(a)},
eb(a){var t,s,r,q
if(a instanceof A.j)return A.x(A.aX(a),null)
t=J.L(a)
if(t===B.T||t===B.V||u.M.b(a)){s=B.r(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.x(A.aX(a),null)},
ee(a){if(typeof a=="number"||A.cH(a))return J.b0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.h(0)
return"Instance of '"+A.c2(a)+"'"},
p(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.c.am(t,10)|55296)>>>0,t&1023|56320)}throw A.a(A.bo(a,0,1114111,null,null))},
S(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.A(t,b)
r.b=""
if(c!=null&&c.a!==0)c.C(0,new A.c1(r,s,t))
return J.dW(a,new A.bc(B.Y,0,t,s,0))},
ec(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.ea(a,b,c)},
ea(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.bU(b,u.z),g=h.length,f=a.$R
if(g<f)return A.S(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.L(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.S(a,h,c)
if(g===f)return p.apply(a,h)
return A.S(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.S(a,h,c)
o=f+r.length
if(g>o)return A.S(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.bU(h,u.z)
B.a.A(h,n)}return p.apply(a,h)}else{if(g>f)return A.S(a,h,c)
if(h===b)h=A.bU(h,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.bH)(m),++l){k=r[A.F(m[l])]
if(B.u===k)return A.S(a,h,c)
B.a.k(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.bH)(m),++l){i=A.F(m[l])
if(c.a1(i)){++j
B.a.k(h,c.i(0,i))}else{k=r[i]
if(B.u===k)return A.S(a,h,c)
B.a.k(h,k)}}if(j!==c.a)return A.S(a,h,c)}return p.apply(a,h)}},
b(a,b){if(a==null)J.cr(a)
throw A.a(A.a7(a,b))},
a7(a,b){var t,s="index"
if(!A.ds(b))return new A.N(!0,b,s,null)
t=J.cr(a)
if(b<0||b>=t)return A.e4(b,t,a,s)
return A.ef(b,s)},
fh(a){return new A.N(!0,a,null,null)},
a(a){var t,s
if(a==null)a=new A.aJ()
t=new Error()
t.dartException=a
s=A.fD
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fD(){return J.b0(this.dartException)},
W(a){throw A.a(a)},
bH(a){throw A.a(A.aq(a))},
H(a){var t,s,r,q,p,o
a=A.fz(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.c([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.c5(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
c6(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
da(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cx(a,b){var t=b==null,s=t?null:b.method
return new A.be(a,s,t?null:b.receiver)},
fE(a){if(a==null)return new A.c_(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a8(a,a.dartException)
return A.ff(a)},
a8(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ff(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.am(s,16)&8191)===10)switch(r){case 438:return A.a8(a,A.cx(A.d(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.d(t)
return A.a8(a,new A.aF(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.dK()
o=$.dL()
n=$.dM()
m=$.dN()
l=$.dQ()
k=$.dR()
j=$.dP()
$.dO()
i=$.dT()
h=$.dS()
g=p.u(t)
if(g!=null)return A.a8(a,A.cx(A.F(t),g))
else{g=o.u(t)
if(g!=null){g.method="call"
return A.a8(a,A.cx(A.F(t),g))}else{g=n.u(t)
if(g==null){g=m.u(t)
if(g==null){g=l.u(t)
if(g==null){g=k.u(t)
if(g==null){g=j.u(t)
if(g==null){g=m.u(t)
if(g==null){g=i.u(t)
if(g==null){g=h.u(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.F(t)
return A.a8(a,new A.aF(t,g==null?f:g.method))}}}return A.a8(a,new A.bw(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aI()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a8(a,new A.N(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aI()
return a},
fy(a){if(a==null||typeof a!="object")return J.bI(a)
else return A.af(a)},
fk(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
e3(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bs().constructor.prototype):Object.create(new A.a9(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cW(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.e_(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cW(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
e_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dY)}throw A.a("Error in functionType of tearoff")},
e0(a,b,c,d){var t=A.cV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cW(a,b,c,d){var t,s
if(c)return A.e2(a,b,d)
t=b.length
s=A.e0(t,d,a,b)
return s},
e1(a,b,c,d){var t=A.cV,s=A.dZ
switch(b?-1:a){case 0:throw A.a(new A.bp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
e2(a,b,c){var t,s
if($.cT==null)$.cT=A.cS("interceptor")
if($.cU==null)$.cU=A.cS("receiver")
t=b.length
s=A.e1(t,c,a,b)
return s},
cJ(a){return A.e3(a)},
dY(a,b){return A.cg(v.typeUniverse,A.aX(a.a),b)},
cV(a){return a.a},
dZ(a){return a.b},
cS(a){var t,s,r,q=new A.a9("receiver","interceptor"),p=J.d0(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.a(A.dX("Field name "+a+" not found."))},
fB(a){throw A.a(new A.by(a))},
fm(a){return v.getIsolateTag(a)},
cy(a,b,c){var t=new A.bg(a,b,c.l("bg<0>"))
t.c=a.e
return t},
fv(a){var t,s,r,q,p,o=A.F($.dz.$1(a)),n=$.ck[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.co[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eL($.dv.$2(a,o))
if(r!=null){n=$.ck[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.co[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cq(t)
$.ck[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.co[o]=t
return t}if(q==="-"){p=A.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dC(a,t)
if(q==="*")throw A.a(A.db(o))
if(v.leafTags[o]===true){p=A.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dC(a,t)},
dC(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq(a){return J.cN(a,!1,null,!!a.$iac)},
fx(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cq(t)
else return J.cN(t,c,null,null)},
fr(){if(!0===$.cL)return
$.cL=!0
A.fs()},
fs(){var t,s,r,q,p,o,n,m
$.ck=Object.create(null)
$.co=Object.create(null)
A.fq()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dD.$1(p)
if(o!=null){n=A.fx(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fq(){var t,s,r,q,p,o,n=B.y()
n=A.ap(B.z,A.ap(B.A,A.ap(B.t,A.ap(B.t,A.ap(B.B,A.ap(B.C,A.ap(B.D(B.r),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dz=new A.cl(q)
$.dv=new A.cm(p)
$.dD=new A.cn(o)},
ap(a,b){return a(b)||b},
fj(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fz(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
as:function as(a,b){this.a=a
this.$ti=b},
ar:function ar(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bc:function bc(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aF:function aF(a,b){this.a=a
this.b=b},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a},
c_:function c_(a){this.a=a},
O:function O(){},
b5:function b5(){},
bu:function bu(){},
bs:function bs(){},
a9:function a9(a,b){this.a=a
this.b=b},
by:function by(a){this.a=a},
bp:function bp(a){this.a=a},
ce:function ce(){},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bQ:function bQ(a,b){this.a=a
this.b=b
this.c=null},
bR:function bR(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
cj(a){return a},
ci(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.a7(b,a))},
bl:function bl(){},
ae:function ae(){},
aB:function aB(){},
aC:function aC(){},
bj:function bj(){},
bk:function bk(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
d6(a,b){var t=b.c
return t==null?b.c=A.cE(a,b.y,!0):t},
cA(a,b){var t=b.c
return t==null?b.c=A.aT(a,"cX",[b.y]):t},
d7(a){var t=a.x
if(t===6||t===7||t===8)return A.d7(a.y)
return t===12||t===13},
eh(a){return a.at},
bF(a){return A.bC(v.typeUniverse,a,!1)},
V(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.dk(a,s,!0)
case 7:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.cE(a,s,!0)
case 8:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.dj(a,s,!0)
case 9:r=b.z
q=A.aW(a,r,c,a0)
if(q===r)return b
return A.aT(a,b.y,q)
case 10:p=b.y
o=A.V(a,p,c,a0)
n=b.z
m=A.aW(a,n,c,a0)
if(o===p&&m===n)return b
return A.cC(a,o,m)
case 12:l=b.y
k=A.V(a,l,c,a0)
j=b.z
i=A.fc(a,j,c,a0)
if(k===l&&i===j)return b
return A.di(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aW(a,h,c,a0)
p=b.y
o=A.V(a,p,c,a0)
if(g===h&&o===p)return b
return A.cD(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.b4("Attempted to substitute unexpected RTI kind "+d))}},
aW(a,b,c,d){var t,s,r,q,p=b.length,o=A.ch(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.V(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fd(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.ch(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.V(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fc(a,b,c,d){var t,s=b.a,r=A.aW(a,s,c,d),q=b.b,p=A.aW(a,q,c,d),o=b.c,n=A.fd(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bA()
t.a=r
t.b=p
t.c=n
return t},
c(a,b){a[v.arrayRti]=b
return a},
dx(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fp(s)
t=a.$S()
return t}return null},
ft(a,b){var t
if(A.d7(b))if(a instanceof A.O){t=A.dx(a)
if(t!=null)return t}return A.aX(a)},
aX(a){if(a instanceof A.j)return A.a5(a)
if(Array.isArray(a))return A.an(a)
return A.cG(J.L(a))},
an(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
a5(a){var t=a.$ti
return t!=null?t:A.cG(a)},
cG(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eY(a,t)},
eY(a,b){var t=a instanceof A.O?a.__proto__.__proto__.constructor:b,s=A.eG(v.typeUniverse,t.name)
b.$ccache=s
return s},
fp(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bC(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fo(a){return A.a6(A.a5(a))},
fb(a){var t=a instanceof A.O?A.dx(a):null
if(t!=null)return t
if(u.R.b(a))return J.dV(a).a
if(Array.isArray(a))return A.an(a)
return A.aX(a)},
a6(a){var t=a.w
return t==null?a.w=A.dn(a):t},
dn(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.cf(a)
t=A.bC(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dn(t):s},
dF(a){return A.a6(A.bC(v.typeUniverse,a,!1))},
eX(a){var t,s,r,q,p,o=this
if(o===u.K)return A.K(o,a,A.f3)
if(!A.M(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.K(o,a,A.f7)
t=o.x
if(t===7)return A.K(o,a,A.eV)
if(t===1)return A.K(o,a,A.dt)
s=t===6?o.y:o
t=s.x
if(t===8)return A.K(o,a,A.f_)
if(s===u.S)r=A.ds
else if(s===u.i||s===u.q)r=A.f2
else if(s===u.N)r=A.f5
else r=s===u.y?A.cH:null
if(r!=null)return A.K(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.fu)){o.r="$i"+q
if(q==="k")return A.K(o,a,A.f1)
return A.K(o,a,A.f6)}}else if(t===11){p=A.fj(s.y,s.z)
return A.K(o,a,p==null?A.dt:p)}return A.K(o,a,A.eT)},
K(a,b,c){a.b=c
return a.b(b)},
eW(a){var t,s=this,r=A.eS
if(!A.M(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eM
else if(s===u.K)r=A.eK
else{t=A.aY(s)
if(t)r=A.eU}s.a=r
return s.a(a)},
bD(a){var t,s=a.x
if(!A.M(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bD(a.y)))t=s===8&&A.bD(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eT(a){var t=this
if(a==null)return A.bD(t)
return A.l(v.typeUniverse,A.ft(a,t),null,t,null)},
eV(a){if(a==null)return!0
return this.y.b(a)},
f6(a){var t,s=this
if(a==null)return A.bD(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.L(a)[t]},
f1(a){var t,s=this
if(a==null)return A.bD(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.L(a)[t]},
eS(a){var t,s=this
if(a==null){t=A.aY(s)
if(t)return a}else if(s.b(a))return a
A.dp(a,s)},
eU(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dp(a,t)},
dp(a,b){throw A.a(A.ev(A.dc(a,A.x(b,null))))},
dc(a,b){return A.X(a)+": type '"+A.x(A.fb(a),null)+"' is not a subtype of type '"+b+"'"},
ev(a){return new A.aR("TypeError: "+a)},
v(a,b){return new A.aR("TypeError: "+A.dc(a,b))},
f_(a){var t=this
return t.y.b(a)||A.cA(v.typeUniverse,t).b(a)},
f3(a){return a!=null},
eK(a){if(a!=null)return a
throw A.a(A.v(a,"Object"))},
f7(a){return!0},
eM(a){return a},
dt(a){return!1},
cH(a){return!0===a||!1===a},
fV(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.v(a,"bool"))},
fX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.v(a,"bool"))},
fW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.v(a,"bool?"))},
cF(a){if(typeof a=="number")return a
throw A.a(A.v(a,"double"))},
fZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.v(a,"double"))},
fY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.v(a,"double?"))},
ds(a){return typeof a=="number"&&Math.floor(a)===a},
ao(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.v(a,"int"))},
h0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.v(a,"int"))},
h_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.v(a,"int?"))},
f2(a){return typeof a=="number"},
eI(a){if(typeof a=="number")return a
throw A.a(A.v(a,"num"))},
h1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.v(a,"num"))},
eJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.v(a,"num?"))},
f5(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.a(A.v(a,"String"))},
h2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.v(a,"String"))},
eL(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.v(a,"String?"))},
du(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.x(a[r],b)
return t},
fa(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.du(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.x(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dq(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.c([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b(a4,k)
n=B.d.q(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.x(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.x(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.x(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.x(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.x(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
x(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.x(a.y,b)
return t}if(m===7){s=a.y
t=A.x(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.x(a.y,b)+">"
if(m===9){q=A.fe(a.y)
p=a.z
return p.length>0?q+("<"+A.du(p,b)+">"):q}if(m===11)return A.fa(a,b)
if(m===12)return A.dq(a,b,null)
if(m===13)return A.dq(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b(b,o)
return b[o]}return"?"},
fe(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eH(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eG(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bC(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aU(a,5,"#")
r=A.ch(t)
for(q=0;q<t;++q)r[q]=s
p=A.aT(a,b,r)
o[b]=p
return p}else return n},
eE(a,b){return A.dl(a.tR,b)},
eD(a,b){return A.dl(a.eT,b)},
bC(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dg(A.de(a,null,b,c))
s.set(b,t)
return t},
cg(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dg(A.de(a,b,c,!0))
r.set(c,s)
return s},
eF(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cC(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
J(a,b){b.a=A.eW
b.b=A.eX
return b},
aU(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.B(null,null)
t.x=b
t.at=c
s=A.J(a,t)
a.eC.set(c,s)
return s},
dk(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eA(a,b,s,c)
a.eC.set(s,t)
return t},
eA(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.M(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.B(null,null)
r.x=6
r.y=b
r.at=c
return A.J(a,r)},
cE(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ez(a,b,s,c)
a.eC.set(s,t)
return t},
ez(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.M(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aY(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aY(r.y))return r
else return A.d6(a,b)}}q=new A.B(null,null)
q.x=7
q.y=b
q.at=c
return A.J(a,q)},
dj(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ex(a,b,s,c)
a.eC.set(s,t)
return t},
ex(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.M(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aT(a,"cX",[b])
else if(b===u.P||b===u.T)return u.m}r=new A.B(null,null)
r.x=8
r.y=b
r.at=c
return A.J(a,r)},
eB(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=14
t.y=b
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
aS(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
ew(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aT(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aS(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.B(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.J(a,s)
a.eC.set(q,r)
return r},
cC(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aS(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.B(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.J(a,p)
a.eC.set(r,o)
return o},
eC(a,b,c){var t,s,r="+"+(b+"("+A.aS(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.B(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
di(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aS(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aS(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ew(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.B(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.J(a,q)
a.eC.set(s,p)
return p},
cD(a,b,c,d){var t,s=b.at+("<"+A.aS(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ey(a,b,c,s,d)
a.eC.set(s,t)
return t},
ey(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.ch(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.V(a,b,s,0)
n=A.aW(a,c,s,0)
return A.cD(a,o,n,c!==n)}}m=new A.B(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.J(a,m)},
de(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dg(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.eq(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.df(a,s,m,l,!1)
else if(r===46)s=A.df(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.U(a.u,a.e,l.pop()))
break
case 94:l.push(A.eB(a.u,l.pop()))
break
case 35:l.push(A.aU(a.u,5,"#"))
break
case 64:l.push(A.aU(a.u,2,"@"))
break
case 126:l.push(A.aU(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.es(a,l)
break
case 38:A.er(a,l)
break
case 42:q=a.u
l.push(A.dk(q,A.U(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cE(q,A.U(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dj(q,A.U(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ep(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dh(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.eu(a.u,a.e,p)
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
eq(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
df(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eH(t,p.y)[q]
if(o==null)A.W('No "'+q+'" in "'+A.eh(p)+'"')
d.push(A.cg(t,p,o))}else d.push(q)
return n},
es(a,b){var t,s=a.u,r=A.dd(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aT(s,q,r))
else{t=A.U(s,a.e,q)
switch(t.x){case 12:b.push(A.cD(s,t,r,a.n))
break
default:b.push(A.cC(s,t,r))
break}}},
ep(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.dd(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.U(n,a.e,m)
p=new A.bA()
p.a=r
p.b=t
p.c=s
b.push(A.di(n,q,p))
return
case-4:b.push(A.eC(n,b.pop(),r))
return
default:throw A.a(A.b4("Unexpected state under `()`: "+A.d(m)))}},
er(a,b){var t=b.pop()
if(0===t){b.push(A.aU(a.u,1,"0&"))
return}if(1===t){b.push(A.aU(a.u,4,"1&"))
return}throw A.a(A.b4("Unexpected extended operation "+A.d(t)))},
dd(a,b){var t=b.splice(a.p)
A.dh(a.u,a.e,t)
a.p=b.pop()
return t},
U(a,b,c){if(typeof c=="string")return A.aT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.et(a,b,c)}else return c},
dh(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.U(a,b,c[t])},
eu(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.U(a,b,c[t])},
et(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.b4("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.b4("Bad index "+c+" for "+b.h(0)))},
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
if(q===6){t=A.d6(a,d)
return A.l(a,b,c,t,e)}if(s===8){if(!A.l(a,b.y,c,d,e))return!1
return A.l(a,A.cA(a,b),c,d,e)}if(s===7){t=A.l(a,u.P,c,d,e)
return t&&A.l(a,b.y,c,d,e)}if(q===8){if(A.l(a,b,c,d.y,e))return!0
return A.l(a,b,c,A.cA(a,d),e)}if(q===7){t=A.l(a,b,c,u.P,e)
return t||A.l(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.J)return!0
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
if(!A.l(a,k,c,j,e)||!A.l(a,j,e,k,c))return!1}return A.dr(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dr(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.f0(a,b,c,d,e)}if(p&&q===11)return A.f4(a,b,c,d,e)
return!1},
dr(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
f0(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.cg(a,b,s[p])
return A.dm(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dm(a,o,null,c,n,e)},
dm(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.l(a,s,d,r,f))return!1}return!0},
f4(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e))return!1
return!0},
aY(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.M(a))if(s!==7)if(!(s===6&&A.aY(a.y)))t=s===8&&A.aY(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fu(a){var t
if(!A.M(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
M(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dl(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ch(a){return a>0?new Array(a):v.typeUniverse.sEA},
B:function B(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bA:function bA(){this.c=this.b=this.a=null},
cf:function cf(a){this.a=a},
bz:function bz(){},
aR:function aR(a){this.a=a},
bS(a,b,c){return b.l("@<0>").ad(c).l("d2<1,2>").a(A.fk(a,new A.a0(b.l("@<0>").ad(c).l("a0<1,2>"))))},
d3(a){return new A.aL(a.l("aL<0>"))},
cB(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
eo(a,b,c){var t=new A.al(a,b,c.l("al<0>"))
t.c=a.e
return t},
bV(a){var t,s={}
if(A.cM(a))return"{...}"
t=new A.a2("")
try{B.a.k($.A,a)
t.a+="{"
s.a=!0
a.C(0,new A.bW(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bB:function bB(a){this.a=a
this.b=null},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
D:function D(){},
aA:function aA(){},
bW:function bW(a,b){this.a=a
this.b=b},
aV:function aV(){},
ad:function ad(){},
aK:function aK(){},
ag:function ag(){},
aQ:function aQ(){},
am:function am(){},
d1(a,b,c){return new A.ay(a,b)},
eR(a){return a.aX()},
em(a,b){return new A.cb(a,[],A.fi())},
en(a,b,c){var t,s=new A.a2(""),r=A.em(s,b)
r.P(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
b6:function b6(){},
b8:function b8(){},
ay:function ay(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
bO:function bO(){},
bP:function bP(a){this.b=a},
cc:function cc(){},
cd:function cd(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c){this.c=a
this.a=b
this.b=c},
dB(a){var t=A.ed(a,null)
if(t!=null)return t
throw A.a(new A.bM(a))},
bT(a,b,c,d){var t,s
if(c)t=A.c(new Array(a),d.l("e<0>"))
else{if(a>4294967295)A.W(A.bo(a,0,4294967295,"length",null))
t=J.d_(new Array(a),d)}if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
bU(a,b){var t=A.e9(a,b)
return t},
e9(a,b){var t,s
if(Array.isArray(a))return A.c(a.slice(0),b.l("e<0>"))
t=A.c([],b.l("e<0>"))
for(s=J.cR(a);s.p();)B.a.k(t,s.gE())
return t},
d8(a,b,c){var t=J.cR(b)
if(!t.p())return a
if(c.length===0){do a+=A.d(t.gE())
while(t.p())}else{a+=A.d(t.gE())
for(;t.p();)a=a+c+A.d(t.gE())}return a},
d4(a,b){return new A.bm(a,b.gaQ(),b.gaS(),b.gaR())},
X(a){if(typeof a=="number"||A.cH(a)||a==null)return J.b0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ee(a)},
b4(a){return new A.b3(a)},
dX(a){return new A.N(!1,null,null,a)},
ef(a,b){return new A.aH(null,null,!0,a,b,"Value not in range")},
bo(a,b,c,d,e){return new A.aH(b,c,!0,a,d,"Invalid value")},
eg(a,b,c){if(0>a||a>c)throw A.a(A.bo(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.bo(b,a,c,"end",null))
return b}return c},
e4(a,b,c,d){return new A.b9(b,!0,a,d,"Index out of range")},
ak(a){return new A.bx(a)},
db(a){return new A.bv(a)},
aq(a){return new A.b7(a)},
cs(a){return new A.c8(a)},
e6(a,b,c){var t,s
if(A.cM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.c([],u.s)
B.a.k($.A,a)
try{A.f8(a,t)}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}s=A.d8(b,u.W.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cv(a,b,c){var t,s
if(A.cM(a))return b+"..."+c
t=new A.a2(b)
B.a.k($.A,a)
try{s=t
s.a=A.d8(s.a,a,", ")}finally{if(0>=$.A.length)return A.b($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
f8(a,b){var t,s,r,q,p,o,n,m=a.a,l=A.cy(m,m.r,a.$ti.c),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
t=A.d(l.d)
B.a.k(b,t)
k+=t.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
s=b.pop()
if(0>=b.length)return A.b(b,-1)
r=b.pop()}else{q=l.d;++j
if(!l.p()){if(j<=4){B.a.k(b,A.d(q))
return}s=A.d(q)
if(0>=b.length)return A.b(b,-1)
r=b.pop()
k+=s.length+2}else{p=l.d;++j
for(;l.p();q=p,p=o){o=l.d;++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}r=A.d(q)
s=A.d(p)
k+=s.length+r.length+4}}if(j>b.length+2){k+=5
n="..."}else n=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(n==null){k+=5
n="..."}}if(n!=null)B.a.k(b,n)
B.a.k(b,r)
B.a.k(b,s)},
bY:function bY(a,b){this.a=a
this.b=b},
c7:function c7(){},
f:function f(){},
b3:function b3(a){this.a=a},
aJ:function aJ(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b9:function b9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a){this.a=a},
bv:function bv(a){this.a=a},
br:function br(a){this.a=a},
b7:function b7(a){this.a=a},
aI:function aI(){},
c8:function c8(a){this.a=a},
bM:function bM(a){this.a=a},
i:function i(){},
aE:function aE(){},
j:function j(){},
a2:function a2(a){this.a=a},
bK:function bK(){},
c9:function c9(){},
n:function n(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
bt:function bt(){},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(a,b){this.a=a
this.b=b},
w:function w(){},
T:function T(){},
b1:function b1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=d},
fn(a,b,c,d){var t,s,r,q=d.i(0,a)
if(q!=null)for(t=0;t<1;++t){s=q[t]
if(B.f.M()<s.b){r=new A.aD(s.a,b,c,new A.I(A.c([],u.n),A.c([],u.t)))
r.e=u.p.a(A.cz(b,c))
r.d=new A.bJ()
return r}}return null},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d},
bX:function bX(a){this.b=a},
fw(){self.jsregionworker=A.fg(new A.cp(),u.u)},
cp:function cp(){},
c3:function c3(a){this.a=a},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bJ:function bJ(){},
o:function o(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z(a,b){return new A.Y(a*2-2*b,a+b)},
Y:function Y(a,b){this.a=a
this.b=b},
bZ:function bZ(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
I:function I(a,b){this.a=a
this.b=b},
av(a,b){var t=b.q(0,$.dJ().T(0,b.a+b.b)),s=Math.floor(t.a),r=Math.floor(t.b),q=new A.u(s,r),p=q.q(0,$.cQ().T(0,s+r)),o=t.I(0,q)
return new A.bL(a,q,b.I(0,p),o)},
r(a,b){return new A.u(a,b)},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
u:function u(a,b){this.a=a
this.b=b},
aG(a){var t,s,r,q,p=u.S,o=A.bT(256,0,!1,p),n=A.bT(256,0,!1,p)
for(t=0;t<256;++t)B.a.j(n,t,t)
s=A.dB("6364136223846793005")
r=A.dB("1442695040888963407")
a=B.c.a7(B.c.a7(B.c.a7(a*s+r,64)*s+r,64)*s+r,64)
for(t=255;t>=0;--t){a=((a*s+r&-1)>>>0)-0
q=B.c.az(a+31,t+1)
if(!(q<256))return A.b(n,q)
B.a.j(o,t,n[q])
n[q]=n[t]}return new A.c0(o)},
c0:function c0(a){this.a=a},
fC(a){return A.W(new A.az("Field '"+a+"' has been assigned during initialization."))},
aZ(){return A.W(A.e8(""))},
eQ(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eN,a)
t[$.cP()]=a
a.$dart_jsFunction=t
return t},
eN(a,b){u.j.a(b)
u.Z.a(a)
return A.ec(a,b,null)},
fg(a,b){if(typeof a=="function")return a
else return b.a(A.eQ(a))},
dA(a,b,c,d){var t,s,r
for(t=0;t<4;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){r=new A.ah(s.a,c,a,new A.I(A.c([],u.n),A.c([],u.t)))
r.d=A.dE(r)
return r}}throw A.a(A.cs("No tile type found for elevation: "+A.d(a)+", moisture: "+A.d(b)+". Fix the rules."))},
dE(a){var t,s=a.c
if(s>0){t=a.a
return A.bE(a.b,0,t.c,t.d,t.e,s,B.h,1)}t=a.a
return A.bE(a.b,s,t.c,t.d,t.e,1,B.h,1)},
dw(a){var t,s=a.c
if(s>0){t=a.a
return A.bE(a.b,0,t.c,t.d,t.e,s,B.h,a.d)}t=a.a
return A.bE(a.b,s,t.c,t.d,t.e,1,B.h,a.d)},
cz(a,b){var t,s
u.O.a(a)
t=B.f.M()/2+0.25
s=B.f.M()
return A.bE(a,b+1,B.E,B.R,B.P,0.8*t,A.Z(s/10,B.f.M()/10),t)},
bE(a5,a6,a7,a8,a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a6<0){t=0.2+Math.abs((a6-0.2)/5)
if(t>1){a7=B.e
a8=B.e
a9=B.e}else{a7=A.cO(a7,B.e,t)
a8=A.cO(a8,B.e,t)
a9=A.cO(a9,B.e,t)}}s=A.Z(a5.a+a6,a5.b+a6).q(0,b1)
r=s.q(0,A.Z(b0,b0))
q=s.q(0,A.Z(0,b2))
p=r.q(0,A.Z(0,b2))
o=s.q(0,A.Z(b2,0))
n=r.q(0,A.Z(b2,0))
m=p.q(0,A.Z(b2,0))
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
a2=A.c([l,k,j,i,h,g,j,i,h,g,f,e,j,i,f,e,d,c,j,i,d,c,b,a,j,i,b,a,a0,a1,j,i,a0,a1,l,k],u.n)
a3=A.bT(18,0,!0,u.S)
for(a4=0;a4<6;++a4){B.a.j(a3,a4,a8.ga8())
B.a.j(a3,a4+6,a7.ga8())
B.a.j(a3,a4+12,a9.ga8())}return new A.I(a2,a3)},
cO(a,b,c){var t=a.a/255,s=a.b/255,r=a.c/255,q=a.d/255
return new A.o(B.b.N((t+(b.a/255-t)*c)*255),B.b.N((s+(b.b/255-s)*c)*255),B.b.N((r+(b.c/255-r)*c)*255),B.b.N((q+(b.d/255-q)*c)*255))},
fA(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(0>=a3)return A.b(a4,0)
t=a4[0]
if(0>=t.length)return A.b(t,0)
s=t[0].b
for(r=0;r<a3;++r,s=p){t=a4[r]
q=t.length
if(0>=q)return A.b(t,0)
p=t[0].b
for(o=s.b,n=p.a,m=0;m<q;++m){l=t[m].b
if(l.a<n)throw A.a(A.cs("Tiles are not sorted by x coordinate"))
if(l.b<o)throw A.a(A.cs("Tiles are not sorted by y coordinate"))}}k=A.d3(u.H)
j=A.c([],u.Q)
for(a3=u.D,t=u.n,q=u.t,r=0;r<a4.length;r=i){i=r+1
m=0
while(!0){if(!(r<a4.length))return A.b(a4,r)
if(!(m<a4[r].length))break
c$0:{h=new A.n(m,r,a3)
g=m+1
f=new A.n(g,i,a3)
if(k.a0(0,h))break c$0
if(!(r<a4.length))return A.b(a4,r)
o=a4[r]
if(!(m<o.length))return A.b(o,m)
e=o[m]
d=e.a
c=e.c
for(;!0;){if(A.eP(k,c,d,a4,h,f)){o=f.$ti
o.a(B.l)
n=B.l.a
l=o.c
b=l.a(f.a+n)
a=B.l.b
a0=l.a(f.b+a)}else break
a1=A.eO(k,c,d,a4,h,new A.n(b,a0,o))
if(a1){o.a(B.k)
f=new A.n(l.a(b+B.k.a),l.a(a0+B.k.b),o)}else{f=new A.n(l.a(b-n),l.a(a0-a),o)
break}}a2=f.a-h.a
if(a2>1){o=new A.b1(d,e.b,c,a2,new A.I(A.c([],t),A.c([],q)))
o.e=A.dw(o)
B.a.k(j,o)}else B.a.k(j,e)
k.A(0,A.f9(h,f))}m=g}}return j},
f9(a,b){var t,s,r,q,p,o=u.H,n=A.d3(o)
for(t=a.a,s=b.a,r=a.b,q=b.b;t<s;++t)for(p=r;p<q;++p)n.k(0,new A.n(t,p,o))
return n},
eP(a,b,c,d,e,f){var t,s=f.a,r=e.b,q=new A.n(s,r,u.D),p=f.b
for(;r<p;++r){if(s>=B.a.gan(d).length||r>=d.length)return!1
if(a.a0(0,q))return!1
if(!(r>=0&&r<d.length))return A.b(d,r)
t=d[r]
if(s>>>0!==s||s>=t.length)return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0},
eO(a,b,c,d,e,f){var t,s=e.a,r=f.b,q=new A.n(s,r,u.D),p=f.a
for(;s<p;++s){if(s>=B.a.gan(d).length||r>=d.length)return!1
if(a.a0(0,q))return!1
if(r>>>0!==r||r>=d.length)return A.b(d,r)
t=d[r]
if(!(s>=0&&s<t.length))return A.b(t,s)
t=t[s]
if(t.a!==c||t.c!==b)return!1}return!0}},J={
cN(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cK(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cL==null){A.fr()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.a(A.db("Return interceptor for "+A.d(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.ca
if(p==null)p=$.ca=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fv(a)
if(q!=null)return q
if(typeof a=="function")return B.U
t=Object.getPrototypeOf(a)
if(t==null)return B.x
if(t===Object.prototype)return B.x
if(typeof r=="function"){p=$.ca
if(p==null)p=$.ca=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
cZ(a,b){if(a<0||a>4294967295)throw A.a(A.bo(a,0,4294967295,"length",null))
return J.d_(new Array(a),b)},
d_(a,b){return J.d0(A.c(a,b.l("e<0>")),b)},
d0(a,b){a.fixed$length=Array
return a},
e7(a,b){var t=u.V
return J.dU(t.a(a),t.a(b))},
L(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aw.prototype
return J.bd.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.ax.prototype
if(typeof a=="boolean")return J.bb.prototype
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cK(a)},
bG(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cK(a)},
dy(a){if(a==null)return a
if(a.constructor==Array)return J.e.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.cK(a)},
fl(a){if(typeof a=="number")return J.ab.prototype
if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.aj.prototype
return a},
b_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).D(a,b)},
dU(a,b){return J.fl(a).K(a,b)},
bI(a){return J.L(a).gm(a)},
cR(a){return J.dy(a).ga6(a)},
cr(a){return J.bG(a).gn(a)},
dV(a){return J.L(a).gB(a)},
dW(a,b){return J.L(a).au(a,b)},
b0(a){return J.L(a).h(a)},
ba:function ba(){},
bb:function bb(){},
ax:function ax(){},
q:function q(){},
a1:function a1(){},
bn:function bn(){},
aj:function aj(){},
Q:function Q(){},
e:function e(a){this.$ti=a},
bN:function bN(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
aw:function aw(){},
bd:function bd(){},
a_:function a_(){}},B={}
var w=[A,J,B]
var $={}
A.cw.prototype={}
J.ba.prototype={
D(a,b){return a===b},
gm(a){return A.af(a)},
h(a){return"Instance of '"+A.c2(a)+"'"},
au(a,b){throw A.a(A.d4(a,u.o.a(b)))},
gB(a){return A.a6(A.cG(this))}}
J.bb.prototype={
h(a){return String(a)},
gm(a){return a?519018:218159},
gB(a){return A.a6(u.y)},
$iz:1,
$icI:1}
J.ax.prototype={
D(a,b){return null==b},
h(a){return"null"},
gm(a){return 0},
$iz:1}
J.q.prototype={}
J.a1.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.bn.prototype={}
J.aj.prototype={}
J.Q.prototype={
h(a){var t=a[$.cP()]
if(t==null)return this.aB(a)
return"JavaScript function for "+J.b0(t)},
$iaa:1}
J.e.prototype={
k(a,b){A.an(a).c.a(b)
if(!!a.fixed$length)A.W(A.ak("add"))
a.push(b)},
A(a,b){A.an(a).l("i<1>").a(b)
if(!!a.fixed$length)A.W(A.ak("addAll"))
this.aD(a,b)
return},
aD(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.a(A.aq(a))
for(s=0;s<t;++s)a.push(b[s])},
gan(a){if(a.length>0)return a[0]
throw A.a(A.e5())},
gaq(a){return a.length!==0},
h(a){return A.cv(a,"[","]")},
ga6(a){return new J.b2(a,a.length,A.an(a).l("b2<1>"))},
gm(a){return A.af(a)},
gn(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.a(A.a7(a,b))
return a[b]},
j(a,b,c){A.an(a).c.a(c)
if(!!a.immutable$list)A.W(A.ak("indexed set"))
if(!(b>=0&&b<a.length))throw A.a(A.a7(a,b))
a[b]=c},
$ii:1,
$ik:1}
J.bN.prototype={}
J.b2.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
p(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.bH(r)
throw A.a(r)}t=s.c
if(t>=q){s.sah(null)
return!1}s.sah(r[t]);++s.c
return!0},
sah(a){this.d=this.$ti.l("1?").a(a)}}
J.ab.prototype={
K(a,b){var t
A.eI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.ga5(b)
if(this.ga5(a)===t)return 0
if(this.ga5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga5(a){return a===0?1/a<0:a<0},
O(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.a(A.ak(""+a+".toInt()"))},
N(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.ak(""+a+".round()"))},
aT(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
az(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a_(a,b){return(a|0)===a?a/b|0:this.aJ(a,b)},
aJ(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.a(A.ak("Result of truncating division is "+A.d(t)+": "+A.d(a)+" ~/ "+b))},
aA(a,b){if(b<0)throw A.a(A.fh(b))
return b>31?0:a<<b>>>0},
am(a,b){var t
if(a>0)t=this.aI(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aI(a,b){return b>31?0:a>>>b},
gB(a){return A.a6(u.q)},
$it:1,
$ih:1,
$iy:1}
J.aw.prototype={
a7(a,b){var t=this.aA(1,b-1)
return((a&t-1)>>>0)-((a&t)>>>0)},
gB(a){return A.a6(u.S)},
$iz:1,
$im:1}
J.bd.prototype={
gB(a){return A.a6(u.i)},
$iz:1}
J.a_.prototype={
aK(a,b){if(b<0)throw A.a(A.a7(a,b))
if(b>=a.length)A.W(A.a7(a,b))
return a.charCodeAt(b)},
ae(a,b){if(b>=a.length)throw A.a(A.a7(a,b))
return a.charCodeAt(b)},
q(a,b){return a+b},
J(a,b,c){return a.substring(b,A.eg(b,c,a.length))},
K(a,b){var t
A.F(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
h(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a6(u.N)},
gn(a){return a.length},
i(a,b){if(b>=a.length)throw A.a(A.a7(a,b))
return a[b]},
$iz:1,
$it:1,
$iC:1}
A.az.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.au.prototype={}
A.bh.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
p(){var t,s=this,r=s.a,q=J.bG(r),p=q.gn(r)
if(s.b!==p)throw A.a(A.aq(r))
t=s.c
if(t>=p){s.saa(null)
return!1}s.saa(q.i(r,t));++s.c
return!0},
saa(a){this.d=this.$ti.l("1?").a(a)}}
A.P.prototype={}
A.ai.prototype={
gm(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bI(this.a)&536870911
this._hashCode=t
return t},
h(a){return'Symbol("'+A.d(this.a)+'")'},
D(a,b){if(b==null)return!1
return b instanceof A.ai&&this.a==b.a},
$ia3:1}
A.as.prototype={}
A.ar.prototype={
gL(a){return this.gn(this)===0},
h(a){return A.bV(this)},
$iG:1}
A.at.prototype={
gn(a){return this.a},
a1(a){return!1},
i(a,b){if(!this.a1(b))return null
return this.b[A.F(b)]},
C(a,b){var t,s,r,q,p,o=this.$ti
o.l("~(1,2)").a(b)
t=this.c
for(s=t.length,r=this.b,o=o.z[1],q=0;q<s;++q){p=A.F(t[q])
b.$2(p,o.a(r[p]))}}}
A.bc.prototype={
gaQ(){var t=this.a
return t},
gaS(){var t,s,r,q,p=this
if(p.c===1)return B.v
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.v
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.b(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gaR(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.w
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.w
p=new A.a0(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.b(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.b(r,m)
p.j(0,new A.ai(n),r[m])}return new A.as(p,u.Y)},
$icY:1}
A.c1.prototype={
$2(a,b){var t
A.F(a)
t=this.a
t.b=t.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++t.a},
$S:2}
A.c5.prototype={
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
A.aF.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.be.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bw.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.c_.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.O.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dG(s==null?"unknown":s)+"'"},
$iaa:1,
gaW(){return this},
$C:"$1",
$R:1,
$D:null}
A.b5.prototype={$C:"$2",$R:2}
A.bu.prototype={}
A.bs.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dG(t)+"'"}}
A.a9.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.fy(this.a)^A.af(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c2(this.a)+"'")}}
A.by.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bp.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ce.prototype={}
A.a0.prototype={
gn(a){return this.a},
gL(a){return this.a===0},
a1(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
i(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.aO(b)},
aO(a){var t,s,r=this.d
if(r==null)return null
t=r[this.ao(a)]
s=this.ap(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r=this,q=A.a5(r)
q.c.a(b)
q.z[1].a(c)
if(typeof b=="string"){t=r.b
r.ac(t==null?r.b=r.Y():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.ac(s==null?r.c=r.Y():s,b,c)}else r.aP(b,c)},
aP(a,b){var t,s,r,q,p=this,o=A.a5(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=p.Y()
s=p.ao(a)
r=t[s]
if(r==null)t[s]=[p.Z(a,b)]
else{q=p.ap(r,a)
if(q>=0)r[q].b=b
else r.push(p.Z(a,b))}},
C(a,b){var t,s,r=this
A.a5(r).l("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.a(A.aq(r))
t=t.c}},
ac(a,b,c){var t,s=A.a5(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.Z(b,c)
else t.b=c},
Z(a,b){var t=this,s=A.a5(t),r=new A.bQ(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
ao(a){return J.bI(a)&0x3fffffff},
ap(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].a,b))return s
return-1},
h(a){return A.bV(this)},
Y(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$id2:1}
A.bQ.prototype={}
A.bR.prototype={
gn(a){return this.a.a}}
A.bg.prototype={
p(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.a(A.aq(r))
t=s.c
if(t==null){s.sab(null)
return!1}else{s.sab(t.a)
s.c=t.c
return!0}},
sab(a){this.d=this.$ti.l("1?").a(a)}}
A.cl.prototype={
$1(a){return this.a(a)},
$S:0}
A.cm.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.cn.prototype={
$1(a){return this.a(A.F(a))},
$S:4}
A.bl.prototype={}
A.ae.prototype={
gn(a){return a.length},
$iac:1}
A.aB.prototype={
i(a,b){A.ci(b,a,a.length)
return a[b]},
j(a,b,c){A.cF(c)
A.ci(b,a,a.length)
a[b]=c},
$ii:1,
$ik:1}
A.aC.prototype={
j(a,b,c){A.ao(c)
A.ci(b,a,a.length)
a[b]=c},
$ii:1,
$ik:1}
A.bj.prototype={
gB(a){return B.Z},
$iz:1,
$ict:1}
A.bk.prototype={
gB(a){return B.a_},
i(a,b){A.ci(b,a,a.length)
return a[b]},
$iz:1,
$icu:1}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.B.prototype={
l(a){return A.cg(v.typeUniverse,this,a)},
ad(a){return A.eF(v.typeUniverse,this,a)}}
A.bA.prototype={}
A.cf.prototype={
h(a){return A.x(this.a,null)}}
A.bz.prototype={
h(a){return this.a}}
A.aR.prototype={}
A.aL.prototype={
ga6(a){var t=this,s=new A.al(t,t.r,t.$ti.l("al<1>"))
s.c=t.e
return s},
gn(a){return this.a},
a0(a,b){var t=this.aE(b)
return t},
aE(a){var t=this.d
if(t==null)return!1
return this.aj(t[a.gm(a)&1073741823],a)>=0},
k(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.af(t==null?r.b=A.cB():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.af(s==null?r.c=A.cB():s,b)}else return r.aC(b)},
aC(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cB()
s=J.bI(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.V(a)]
else{if(q.aj(r,a)>=0)return!1
r.push(q.V(a))}return!0},
af(a,b){this.$ti.c.a(b)
if(u.w.a(a[b])!=null)return!1
a[b]=this.V(b)
return!0},
V(a){var t=this,s=new A.bB(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
aj(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].a,b))return s
return-1}}
A.bB.prototype={}
A.al.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
p(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.a(A.aq(r))
else if(s==null){t.sag(null)
return!1}else{t.sag(t.$ti.l("1?").a(s.a))
t.c=s.b
return!0}},
sag(a){this.d=this.$ti.l("1?").a(a)}}
A.D.prototype={
ga6(a){return new A.bh(a,this.gn(a),A.aX(a).l("bh<D.E>"))},
gaq(a){return this.gn(a)!==0},
h(a){return A.cv(a,"[","]")}}
A.aA.prototype={
C(a,b){var t,s,r,q=this,p=A.a5(q)
p.l("~(1,2)").a(b)
for(t=A.cy(q,q.r,p.c),p=p.z[1];t.p();){s=t.d
r=q.i(0,s)
b.$2(s,r==null?p.a(r):r)}},
gn(a){return this.a},
gL(a){return this.a===0},
h(a){return A.bV(this)},
$iG:1}
A.bW.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.d(a)
s.a=t+": "
s.a+=A.d(b)},
$S:1}
A.aV.prototype={}
A.ad.prototype={
i(a,b){return this.a.i(0,b)},
C(a,b){this.a.C(0,this.$ti.l("~(1,2)").a(b))},
gL(a){return this.a.a===0},
gn(a){return this.a.a},
h(a){return A.bV(this.a)},
$iG:1}
A.aK.prototype={}
A.ag.prototype={
A(a,b){var t,s,r
this.$ti.l("i<1>").a(b)
for(t=A.eo(b,b.r,b.$ti.c),s=t.$ti.c;t.p();){r=t.d
this.k(0,r==null?s.a(r):r)}},
h(a){return A.cv(this,"{","}")},
$ii:1}
A.aQ.prototype={}
A.am.prototype={}
A.b6.prototype={}
A.b8.prototype={}
A.ay.prototype={
h(a){var t=A.X(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
A.bf.prototype={
h(a){return"Cyclic error in JSON stringify"}}
A.bO.prototype={
a3(a,b){var t=A.en(a,this.gaN().b,null)
return t},
gaN(){return B.W}}
A.bP.prototype={}
A.cc.prototype={
aw(a){var t,s,r,q,p,o,n=a.length
for(t=this.c,s=0,r=0;r<n;++r){q=B.d.ae(a,r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<n&&(B.d.ae(a,o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(B.d.aK(a,p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)t.a+=B.d.J(a,s,r)
s=r+1
t.a+=A.p(92)
t.a+=A.p(117)
t.a+=A.p(100)
p=q>>>8&15
t.a+=A.p(p<10?48+p:87+p)
p=q>>>4&15
t.a+=A.p(p<10?48+p:87+p)
p=q&15
t.a+=A.p(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)t.a+=B.d.J(a,s,r)
s=r+1
t.a+=A.p(92)
switch(q){case 8:t.a+=A.p(98)
break
case 9:t.a+=A.p(116)
break
case 10:t.a+=A.p(110)
break
case 12:t.a+=A.p(102)
break
case 13:t.a+=A.p(114)
break
default:t.a+=A.p(117)
t.a+=A.p(48)
t.a+=A.p(48)
p=q>>>4&15
t.a+=A.p(p<10?48+p:87+p)
p=q&15
t.a+=A.p(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=B.d.J(a,s,r)
s=r+1
t.a+=A.p(92)
t.a+=A.p(q)}}if(s===0)t.a+=a
else if(s<n)t.a+=B.d.J(a,s,n)},
U(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw A.a(new A.bf(a,null))}B.a.k(t,a)},
P(a){var t,s,r,q,p=this
if(p.av(a))return
p.U(a)
try{t=p.b.$1(a)
if(!p.av(t)){r=A.d1(a,null,p.gal())
throw A.a(r)}r=p.a
if(0>=r.length)return A.b(r,-1)
r.pop()}catch(q){s=A.fE(q)
r=A.d1(a,s,p.gal())
throw A.a(r)}},
av(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=B.b.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.aw(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.U(a)
r.aU(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return!0}else if(u.I.b(a)){r.U(a)
s=r.aV(a)
t=r.a
if(0>=t.length)return A.b(t,-1)
t.pop()
return s}else return!1},
aU(a){var t,s,r=this.c
r.a+="["
t=J.dy(a)
if(t.gaq(a)){this.P(t.i(a,0))
for(s=1;s<t.gn(a);++s){r.a+=","
this.P(t.i(a,s))}}r.a+="]"},
aV(a){var t,s,r,q,p,o,n=this,m={}
if(a.gL(a)){n.c.a+="{}"
return!0}t=a.gn(a)*2
s=A.bT(t,null,!1,u.X)
r=m.a=0
m.b=!0
a.C(0,new A.cd(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.aw(A.F(s[r]))
q.a+='":'
o=r+1
if(!(o<t))return A.b(s,o)
n.P(s[o])}q.a+="}"
return!0}}
A.cd.prototype={
$2(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
B.a.j(t,s.a++,a)
B.a.j(t,s.a++,b)},
$S:1}
A.cb.prototype={
gal(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
A.bY.prototype={
$2(a,b){var t,s,r
u.h.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.X(b)
s.a=", "},
$S:5}
A.c7.prototype={
h(a){return this.ai()}}
A.f.prototype={}
A.b3.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.X(t)
return"Assertion failed"}}
A.aJ.prototype={}
A.N.prototype={
gX(){return"Invalid argument"+(!this.a?"(s)":"")},
gW(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gX()+r+p
if(!t.a)return o
return o+t.gW()+": "+A.X(t.ga4())},
ga4(){return this.b}}
A.aH.prototype={
ga4(){return A.eJ(this.b)},
gX(){return"RangeError"},
gW(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.d(r):""
else if(r==null)t=": Not greater than or equal to "+A.d(s)
else if(r>s)t=": Not in inclusive range "+A.d(s)+".."+A.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.d(s)
return t}}
A.b9.prototype={
ga4(){return A.ao(this.b)},
gX(){return"RangeError"},
gW(){if(A.ao(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gn(a){return this.f}}
A.bm.prototype={
h(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.a2("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.X(o)
k.a=", "}l.d.C(0,new A.bY(k,j))
n=A.X(l.a)
m=j.h(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.bx.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bv.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.br.prototype={
h(a){return"Bad state: "+this.a}}
A.b7.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.X(t)+"."}}
A.aI.prototype={
h(a){return"Stack Overflow"},
$if:1}
A.c8.prototype={
h(a){return"Exception: "+this.a}}
A.bM.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.i.prototype={
gn(a){var t,s=this.a,r=A.cy(s,s.r,this.$ti.c)
for(t=0;r.p();)++t
return t},
h(a){return A.e6(this,"(",")")}}
A.aE.prototype={
gm(a){return A.j.prototype.gm.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
D(a,b){return this===b},
gm(a){return A.af(this)},
h(a){return"Instance of '"+A.c2(this)+"'"},
au(a,b){throw A.a(A.d4(this,u.o.a(b)))},
gB(a){return A.fo(this)},
toString(){return this.h(this)}}
A.a2.prototype={
gn(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$iel:1}
A.bK.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.c9.prototype={
M(){return Math.random()}}
A.n.prototype={
h(a){return"Point("+A.d(this.a)+", "+A.d(this.b)+")"},
D(a,b){if(b==null)return!1
return b instanceof A.n&&this.a===b.a&&this.b===b.b},
gm(a){var t=B.b.gm(this.a),s=B.b.gm(this.b),r=A.d9(A.d9(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.bi.prototype={}
A.bt.prototype={}
A.E.prototype={}
A.R.prototype={}
A.w.prototype={
K(a,b){u.k.a(b)
if(this.G()!==b.G())return this.G()>b.G()?-1:1
else return B.c.K(A.af(b),A.af(b))},
$it:1}
A.T.prototype={
G(){return this.R().a+this.R().b+this.a9()},
ar(){return this.S()<0}}
A.b1.prototype={
H(){var t=this.e
return t.a.length===0&&t.b.length===0?this.e=A.dw(this):t},
S(){return this.c},
R(){return this.b},
a9(){return this.d},
a2(){var t=this,s=t.b
return B.j.a3(A.bS(["gameObjectType","AreaTile","type",t.a.b,"coordinate",A.d(s.a)+","+A.d(s.b),"elevation",t.c,"width",t.d],u.N,u.K),null)}}
A.ah.prototype={
H(){var t=this.d
return t.a.length===0&&t.b.length===0?this.d=A.dE(this):t},
S(){return this.c},
R(){return this.b},
a9(){return 1},
a2(){var t=this.b
return B.j.a3(A.bS(["gameObjectType","SingleTile","type",this.a.b,"coordinate",A.d(t.a)+","+A.d(t.b),"elevation",this.c],u.N,u.K),null)}}
A.a4.prototype={
ai(){return"TileType."+this.b}}
A.aD.prototype={
H(){var t=this,s=t.e
return s.a.length===0&&s.b.length===0?t.e=u.p.a(A.cz(t.b,t.c)):s},
G(){var t=this.b
return t.a+t.b+1},
ar(){return this.c<0},
a2(){var t=this.b
return B.j.a3(A.bS(["gameObjectType","NaturalItem","type",this.a.b,"coordinate",A.d(t.a)+","+A.d(t.b),"elevation",this.c],u.N,u.K),null)}}
A.bX.prototype={
ai(){return"NaturalItemType."+this.b}}
A.cp.prototype={
$1(a){var t,s,r=J.bG(a),q=new A.c3(new A.bt()).aM(new A.Y(A.cF(r.i(a,0)),A.cF(r.i(a,1))),A.ao(r.i(a,2)),A.ao(r.i(a,3)),A.ao(r.i(a,4)),A.ao(r.i(a,5))),p=A.c([],u.s)
for(r=q.r,t=r.length,s=0;s<r.length;r.length===t||(0,A.bH)(r),++s)B.a.k(p,r[s].a2())
r=q.a
return A.c([r.a,r.b,q.b,q.c,q.d,q.e,q.f,p],u.f)},
$S:6}
A.c3.prototype={
aM(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h=new A.bZ(this.a)
h.a=A.aG(2)
h.b=A.aG(3)
h.c=A.aG(4)
h.d=A.aG(5)
h.e=A.aG(6)
h.f=A.aG(7)
t=h.aL(b,c,d,e)
s=this.aG(b,c,d,e,t[0],t[1])
r=this.aF(b,c,d,e,t[0],t[1])
q=A.bU(s,u.k)
B.a.A(q,r)
if(!!q.immutable$list)A.W(A.ak("sort"))
A.ek(q,J.eZ(),A.an(q).c)
p=u.n
o=A.c([],p)
n=u.t
m=A.c([],n)
p=A.c([],p)
n=A.c([],n)
for(l=q.length,k=0;k<q.length;q.length===l||(0,A.bH)(q),++k){j=q[k]
if(j.ar()){i=j.H()
B.a.A(o,i.a)
B.a.A(m,i.b)}else{i=j.H()
B.a.A(p,i.a)
B.a.A(n,i.b)}}return new A.c4(a,B.c.a_(p.length+o.length,2),new Float32Array(A.cj(p)),new Int32Array(A.cj(n)),new Float32Array(A.cj(o)),new Int32Array(A.cj(m)),q)},
aG(a,b,c,d,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.c([],u.F)
for(t=u.O,s=u.U,r=a0.length,q=a1.length,p=u.r,o=0;o<a;++o){if(!(o<r))return A.b(a0,o)
n=a0[o]
if(!(o<q))return A.b(a1,o)
m=a1[o]
l=A.c([],p)
for(k=n.length,j=m.length,i=c+o,h=0;h<b;++h){if(!(h<k))return A.b(n,h)
g=n[h]
if(!(h<j))return A.b(m,h)
B.a.k(l,A.dA(g,m[h],new A.n(i,d+h,t),A.c([new A.E(B.m,0,f),new A.E(B.o,0.2,0.3),new A.E(B.n,f,0.3),new A.E(B.p,f,f)],s)))}B.a.k(e,l)}return this.aH(A.fA(e))},
aH(a){var t,s
u.e.a(a)
t=A.c([],u.Q)
for(s=0;s<a.length;++s)if(a[s].S()>-5){if(!(s<a.length))return A.b(a,s)
B.a.k(t,a[s])}return t},
aF(a,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=A.c([],u.a)
for(t=u.O,s=u.U,r=u.c,q=u.l,p=u.d,o=a3.length,n=a4.length,m=0;m<a;++m){if(!(m<o))return A.b(a3,m)
l=a3[m]
if(!(m<n))return A.b(a4,m)
k=a4[m]
for(j=a1+m,i=l.length,h=k.length,g=0;g<a0;++g){f=new A.n(j,a2+g,t)
if(!(g<i))return A.b(l,g)
e=l[g]
if(!(g<h))return A.b(k,g)
d=A.fn(A.dA(e,k[g],f,A.c([new A.E(B.m,0,c),new A.E(B.o,0.2,0.3),new A.E(B.n,c,0.3),new A.E(B.p,c,c)],s)).a,f,l[g],A.bS([B.m,A.c([new A.R(B.i,0.03)],r),B.o,A.c([new A.R(B.i,0.05)],r),B.n,A.c([new A.R(B.i,0.08)],r),B.p,A.c([new A.R(B.i,0.02)],r)],q,p))
if(d!=null)B.a.k(b,d)}}return b}}
A.c4.prototype={}
A.bJ.prototype={}
A.o.prototype={
ga8(){var t=this
return(t.a<<24|t.b<<16|t.c<<8|t.d)>>>0}}
A.Y.prototype={
q(a,b){return new A.Y(this.a+b.a,this.b+b.b)},
D(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.Y&&b.a===this.a&&b.b===this.b},
gm(a){return B.b.gm(this.a)^B.b.gm(this.b)},
h(a){return""+B.b.O(this.a)+", "+B.b.O(this.b)}}
A.bZ.prototype={
aL(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.ak(a,b),c=e.ak(a,b)
for(t=d.length,s=c.length,r=0;r<a;++r){if(!(r<t))return A.b(d,r)
q=d[r]
if(!(r<s))return A.b(c,r)
p=c[r]
for(o=a0+r,n=o*0.001,m=o*0.01,l=o*0.1,k=0;k<b;++k){j=a1+k
i=e.a
i===$&&A.aZ()
i=A.av(i.a,new A.u(n,j*0.001)).F()
h=e.b
h===$&&A.aZ()
h=A.av(h.a,new A.u(m,j*0.01)).F()
g=e.c
g===$&&A.aZ()
f=i+0.1*h+0.01*A.av(g.a,new A.u(l,j*0.1)).F()
if(f>0.2)f*=1.5
i=e.d
i===$&&A.aZ()
i=A.av(i.a,new A.u(o*0.006,j*0.006)).F()
h=e.e
h===$&&A.aZ()
h=A.av(h.a,new A.u(o*0.016,j*0.016)).F()
g=e.f
g===$&&A.aZ()
g=A.av(g.a,new A.u(o*0.048,j*0.048)).F()
B.a.j(q,k,B.b.aT((f+0)*60))
B.a.j(p,k,i+0.5*h+0.25*g)}}return A.c([d,c],u.G)},
ak(a,b){var t,s,r,q,p=J.cZ(a,u.v)
for(t=u.i,s=0;s<a;++s){r=J.cZ(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.I.prototype={}
A.bL.prototype={
t(a){var t,s,r,q,p,o,n,m,l,k=this,j=$.dH()
if(!(a<8))return A.b(j,a)
t=j[a]
s=k.c.I(0,t).I(0,$.cQ().T(0,t.a+t.b))
j=s.a
r=s.b
q=2-j*j-r*r
if(q>0){p=q*q
o=k.e
n=k.b.q(0,t)
m=u.L.a(k.a)
n=m[m[B.b.O(n.a)&255]+B.b.O(n.b)&255]
l=$.dI()[n>>>1&7]
k.e=o+p*p*(l.a*j+l.b*r)}},
F(){var t,s,r,q,p=this
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
A.u.prototype={
q(a,b){return new A.u(this.a+b.a,this.b+b.b)},
I(a,b){return new A.u(this.a-b.a,this.b-b.b)},
T(a,b){return new A.u(this.a*b,this.b*b)},
h(a){return A.d(this.a)+", "+A.d(this.b)}}
A.c0.prototype={};(function aliases(){var t=J.a1.prototype
t.aB=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1
t(J,"eZ","e7",7)
s(A,"fi","eR",0)
t(A,"h3","cz",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cw,J.ba,J.b2,A.f,A.i,A.bh,A.P,A.ai,A.ad,A.ar,A.bc,A.O,A.c5,A.c_,A.ce,A.aA,A.bQ,A.bg,A.B,A.bA,A.cf,A.ag,A.bB,A.al,A.D,A.aV,A.b6,A.b8,A.cc,A.c7,A.aI,A.c8,A.bM,A.aE,A.a2,A.c9,A.n,A.bi,A.E,A.R,A.w,A.c3,A.c4,A.bJ,A.o,A.Y,A.bZ,A.I,A.bL,A.u,A.c0])
r(J.ba,[J.bb,J.ax,J.q,J.ab,J.a_])
r(J.q,[J.a1,J.e,A.bl,A.bK])
r(J.a1,[J.bn,J.aj,J.Q])
s(J.bN,J.e)
r(J.ab,[J.aw,J.bd])
r(A.f,[A.az,A.aJ,A.be,A.bw,A.by,A.bp,A.bz,A.ay,A.b3,A.N,A.bm,A.bx,A.bv,A.br,A.b7])
s(A.au,A.i)
s(A.am,A.ad)
s(A.aK,A.am)
s(A.as,A.aK)
s(A.at,A.ar)
r(A.O,[A.b5,A.bu,A.cl,A.cn,A.cp])
r(A.b5,[A.c1,A.cm,A.bW,A.cd,A.bY])
s(A.aF,A.aJ)
r(A.bu,[A.bs,A.a9])
s(A.a0,A.aA)
s(A.bR,A.au)
s(A.ae,A.bl)
r(A.ae,[A.aM,A.aO])
s(A.aN,A.aM)
s(A.aB,A.aN)
s(A.aP,A.aO)
s(A.aC,A.aP)
s(A.bj,A.aB)
s(A.bk,A.aC)
s(A.aR,A.bz)
s(A.aQ,A.ag)
s(A.aL,A.aQ)
s(A.bf,A.ay)
s(A.bO,A.b6)
s(A.bP,A.b8)
s(A.cb,A.cc)
r(A.N,[A.aH,A.b9])
s(A.bt,A.bi)
r(A.w,[A.T,A.aD])
r(A.T,[A.b1,A.ah])
r(A.c7,[A.a4,A.bX])
t(A.aM,A.D)
t(A.aN,A.P)
t(A.aO,A.D)
t(A.aP,A.P)
t(A.am,A.aV)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",h:"double",y:"num",C:"String",cI:"bool",aE:"Null",k:"List"},mangledNames:{},types:["@(@)","~(j?,j?)","~(C,@)","@(@,C)","@(C)","~(a3,@)","k<j>(@)","m(@,@)","I(n<h>,h)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eE(v.typeUniverse,JSON.parse('{"bn":"a1","aj":"a1","Q":"a1","bb":{"cI":[],"z":[]},"ax":{"z":[]},"e":{"k":["1"],"i":["1"]},"bN":{"e":["1"],"k":["1"],"i":["1"]},"ab":{"h":[],"y":[],"t":["y"]},"aw":{"h":[],"m":[],"y":[],"t":["y"],"z":[]},"bd":{"h":[],"y":[],"t":["y"],"z":[]},"a_":{"C":[],"t":["C"],"z":[]},"az":{"f":[]},"au":{"i":["1"]},"ai":{"a3":[]},"as":{"aK":["1","2"],"am":["1","2"],"ad":["1","2"],"aV":["1","2"],"G":["1","2"]},"ar":{"G":["1","2"]},"at":{"ar":["1","2"],"G":["1","2"]},"bc":{"cY":[]},"aF":{"f":[]},"be":{"f":[]},"bw":{"f":[]},"O":{"aa":[]},"b5":{"aa":[]},"bu":{"aa":[]},"bs":{"aa":[]},"a9":{"aa":[]},"by":{"f":[]},"bp":{"f":[]},"a0":{"aA":["1","2"],"d2":["1","2"],"G":["1","2"]},"bR":{"i":["1"]},"ae":{"ac":["1"]},"aB":{"D":["h"],"ac":["h"],"k":["h"],"i":["h"],"P":["h"]},"aC":{"D":["m"],"ac":["m"],"k":["m"],"i":["m"],"P":["m"]},"bj":{"D":["h"],"ct":[],"ac":["h"],"k":["h"],"i":["h"],"P":["h"],"z":[],"D.E":"h"},"bk":{"D":["m"],"cu":[],"ac":["m"],"k":["m"],"i":["m"],"P":["m"],"z":[],"D.E":"m"},"bz":{"f":[]},"aR":{"f":[]},"aL":{"ag":["1"],"i":["1"]},"aA":{"G":["1","2"]},"ad":{"G":["1","2"]},"aK":{"am":["1","2"],"ad":["1","2"],"aV":["1","2"],"G":["1","2"]},"ag":{"i":["1"]},"aQ":{"ag":["1"],"i":["1"]},"ay":{"f":[]},"bf":{"f":[]},"h":{"y":[],"t":["y"]},"m":{"y":[],"t":["y"]},"k":{"i":["1"]},"y":{"t":["y"]},"C":{"t":["C"]},"b3":{"f":[]},"aJ":{"f":[]},"N":{"f":[]},"aH":{"f":[]},"b9":{"f":[]},"bm":{"f":[]},"bx":{"f":[]},"bv":{"f":[]},"br":{"f":[]},"b7":{"f":[]},"aI":{"f":[]},"a2":{"el":[]},"bt":{"bi":[]},"w":{"t":["w"]},"T":{"w":[],"t":["w"]},"ah":{"T":[],"w":[],"t":["w"]},"b1":{"T":[],"w":[],"t":["w"]},"aD":{"w":[],"t":["w"]},"cu":{"k":["m"],"i":["m"]},"ct":{"k":["h"],"i":["h"]}}'))
A.eD(v.typeUniverse,JSON.parse('{"au":1,"ae":1,"aQ":1,"b6":2,"b8":2}'))
var u=(function rtii(){var t=A.bF
return{V:t("t<@>"),Y:t("as<a3,@>"),C:t("f"),Z:t("aa"),k:t("w"),o:t("cY"),W:t("i<@>"),G:t("e<k<k<h>>>"),F:t("e<k<ah>>"),a:t("e<aD>"),c:t("e<R>"),f:t("e<j>"),r:t("e<ah>"),s:t("e<C>"),Q:t("e<T>"),U:t("e<E>"),n:t("e<h>"),b:t("e<@>"),t:t("e<m>"),T:t("ax"),g:t("Q"),E:t("ac<@>"),B:t("a0<a3,@>"),d:t("k<R>"),u:t("k<j>(@)"),e:t("k<T>"),v:t("k<h>"),j:t("k<@>"),L:t("k<m>"),I:t("G<@,@>"),P:t("aE"),K:t("j"),O:t("n<h>"),D:t("n<m>"),H:t("n<y>"),J:t("fK"),N:t("C"),h:t("a3"),l:t("a4"),R:t("z"),M:t("aj"),p:t("I"),y:t("cI"),i:t("h"),z:t("@"),S:t("m"),A:t("0&*"),_:t("j*"),m:t("cX<aE>?"),X:t("j?"),w:t("bB?"),q:t("y")}})();(function constants(){var t=hunkHelpers.makeConstList
B.T=J.ba.prototype
B.a=J.e.prototype
B.c=J.aw.prototype
B.b=J.ab.prototype
B.d=J.a_.prototype
B.U=J.Q.prototype
B.V=J.q.prototype
B.x=J.bn.prototype
B.q=J.aj.prototype
B.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.y=function() {
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
B.D=function(getTagFallback) {
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
B.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.A=function(hooks) {
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
B.C=function(hooks) {
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
B.B=function(hooks) {
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

B.j=new A.bO()
B.f=new A.c9()
B.u=new A.ce()
B.E=new A.o(255,107,129,124)
B.e=new A.o(255,1,46,143)
B.P=new A.o(255,83,105,100)
B.R=new A.o(255,91,112,107)
B.h=new A.Y(0,0)
B.W=new A.bP(null)
B.v=A.c(t([]),u.b)
B.X=A.c(t([]),A.bF("e<a3>"))
B.w=new A.at(0,{},B.X,A.bF("at<a3,@>"))
B.i=new A.bX("rock")
B.k=new A.n(0,1,u.D)
B.l=new A.n(1,0,u.D)
B.Y=new A.ai("call")
B.M=new A.o(255,173,162,115)
B.K=new A.o(255,159,148,103)
B.I=new A.o(255,148,138,95)
B.m=new A.a4(B.M,B.K,B.I,"lakeFloorBare")
B.F=new A.o(255,110,110,121)
B.Q=new A.o(255,90,90,101)
B.O=new A.o(255,70,70,81)
B.n=new A.a4(B.F,B.Q,B.O,"svalbardMountain")
B.H=new A.o(255,135,143,102)
B.G=new A.o(255,115,123,82)
B.S=new A.o(255,95,103,62)
B.o=new A.a4(B.H,B.G,B.S,"svalbardGrass")
B.N=new A.o(255,191,200,202)
B.L=new A.o(255,171,180,182)
B.J=new A.o(255,151,160,162)
B.p=new A.a4(B.N,B.L,B.J,"svalbardIce")
B.Z=A.dF("ct")
B.a_=A.dF("cu")})();(function staticFields(){$.ca=null
$.A=A.c([],u.f)
$.d5=null
$.cU=null
$.cT=null
$.dz=null
$.dv=null
$.dD=null
$.ck=null
$.co=null
$.cL=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"fF","cP",()=>A.fm("_$dart_dartClosure"))
t($,"fL","dK",()=>A.H(A.c6({
toString:function(){return"$receiver$"}})))
t($,"fM","dL",()=>A.H(A.c6({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"fN","dM",()=>A.H(A.c6(null)))
t($,"fO","dN",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fR","dQ",()=>A.H(A.c6(void 0)))
t($,"fS","dR",()=>A.H(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"fQ","dP",()=>A.H(A.da(null)))
t($,"fP","dO",()=>A.H(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"fU","dT",()=>A.H(A.da(void 0)))
t($,"fT","dS",()=>A.H(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"fH","dI",()=>A.c([A.r(5,2),A.r(2,5),A.r(-5,2),A.r(-2,5),A.r(5,-2),A.r(2,-5),A.r(-5,-2),A.r(-2,-5)],A.bF("e<u>")))
s($,"fG","dH",()=>A.c([A.r(1,0),A.r(0,1),A.r(1,-1),A.r(-1,1),A.r(1,1),A.r(0,0),A.r(2,0),A.r(0,2)],A.bF("e<u>")))
t($,"fJ","dJ",()=>A.r(-0.211324865405187,-0.211324865405187))
t($,"fI","cQ",()=>A.r(0.366025403784439,0.366025403784439))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.q,DOMError:J.q,ErrorEvent:J.q,Event:J.q,InputEvent:J.q,SubmitEvent:J.q,MediaError:J.q,NavigatorUserMediaError:J.q,OverconstrainedError:J.q,PositionError:J.q,GeolocationPositionError:J.q,SensorErrorEvent:J.q,SpeechRecognitionError:J.q,ArrayBufferView:A.bl,Float32Array:A.bj,Int32Array:A.bk,DOMException:A.bK})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int32Array:true,DOMException:true})
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aC.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fw
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
