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
a[c]=function(){a[c]=function(){A.fm(b)}
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
if(a[b]!==t)A.fn(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cD(b)
return new t(c,this)}:function(){if(t===null)t=A.cD(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cD(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cu:function cu(){},
S(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d7(a,b,c){return A.cw(A.S(A.S(c,a),b))},
cH(a){var t,s
for(t=$.z.length,s=0;s<t;++s)if(a===$.z[s])return!0
return!1},
ee(a,b,c){A.bk(a,0,J.b0(a)-1,b,c)},
bk(a,b,c,d,e){if(c-b<=32)A.ed(a,b,c,d,e)
else A.ec(a,b,c,d,e)},
ed(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.an(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
ec(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=B.b.K(a4-a3+1,6),j=a3+k,i=a4-k,h=B.b.K(a3+a4,2),g=h-k,f=h+k,e=J.an(a2),d=e.h(a2,j),c=e.h(a2,g),b=e.h(a2,h),a=e.h(a2,f),a0=e.h(a2,i),a1=a5.$2(d,c)
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
if(J.a8(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.h(a2,q)
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
A.bk(a2,a3,s-2,a5,a6)
A.bk(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a8(a5.$2(e.h(a2,s),c),0);)++s
for(;J.a8(a5.$2(e.h(a2,r),a),0);)--r
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
break}}A.bk(a2,s,r,a5,a6)}else A.bk(a2,s,r,a5,a6)},
bc:function bc(a){this.a=a},
bX:function bX(){},
au:function au(){},
G:function G(){},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(){},
ai:function ai(a){this.a=a},
dD(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
fg(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
i(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b1(a)
return t},
bi(a){var t,s=$.d2
if(s==null)s=$.d2=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bV(a){return A.e5(a)},
e5(a){var t,s,r,q
if(a instanceof A.l)return A.t(A.ao(a),null)
t=J.K(a)
if(t===B.dl||t===B.dn||u.C.b(a)){s=B.j(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.t(A.ao(a),null)},
d3(a){if(a==null||typeof a=="number"||A.cB(a))return J.b1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.N)return a.i(0)
if(a instanceof A.W)return a.a8(!0)
return"Instance of '"+A.bV(a)+"'"},
R(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
B.a.a9(t,b)
r.b=""
if(c!=null&&c.a!==0)c.F(0,new A.bU(r,s,t))
return J.dL(a,new A.ba(B.dw,0,t,s,0))},
e6(a,b,c){var t,s,r
if(Array.isArray(b))t=c==null||c.a===0
else t=!1
if(t){s=b.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(b[0])}else if(s===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(s===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(s===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(s===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,b)}return A.e4(a,b,c)},
e4(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=Array.isArray(b)?b:A.bd(b,!0,u.z),g=h.length,f=a.$R
if(g<f)return A.R(a,h,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.K(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return A.R(a,h,c)
if(g===f)return p.apply(a,h)
return A.R(a,h,c)}if(Array.isArray(r)){if(c!=null&&c.a!==0)return A.R(a,h,c)
o=f+r.length
if(g>o)return A.R(a,h,null)
if(g<o){n=r.slice(g-f)
if(h===b)h=A.bd(h,!0,u.z)
B.a.a9(h,n)}return p.apply(a,h)}else{if(g>f)return A.R(a,h,c)
if(h===b)h=A.bd(h,!0,u.z)
m=Object.keys(r)
if(c==null)for(s=m.length,l=0;l<m.length;m.length===s||(0,A.ap)(m),++l){k=r[A.aX(m[l])]
if(B.l===k)return A.R(a,h,c)
B.a.k(h,k)}else{for(s=m.length,j=0,l=0;l<m.length;m.length===s||(0,A.ap)(m),++l){i=A.aX(m[l])
if(c.U(i)){++j
B.a.k(h,c.h(0,i))}else{k=r[i]
if(B.l===k)return A.R(a,h,c)
B.a.k(h,k)}}if(j!==c.a)return A.R(a,h,c)}return p.apply(a,h)}},
d(a,b){if(a==null)J.b0(a)
throw A.b(A.by(a,b))},
by(a,b){var t,s="index"
if(!A.cg(b))return new A.a9(!0,b,s,null)
t=J.b0(a)
if(b<0||b>=t)return A.cT(b,t,a,s)
return A.e8(b,s)},
b(a){return A.dy(new Error(),a)},
dy(a,b){var t
if(b==null)b=new A.c0()
a.dartException=b
t=A.fo
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
fo(){return J.b1(this.dartException)},
a6(a){throw A.b(a)},
dC(a,b){throw A.dy(b,a)},
ap(a){throw A.b(A.aq(a))},
dz(a){if(a==null)return J.M(a)
if(typeof a=="object")return A.bi(a)
return J.M(a)},
dU(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bl().constructor.prototype):Object.create(new A.aa(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cQ(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dQ(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cQ(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dO)}throw A.b("Error in functionType of tearoff")},
dR(a,b,c,d){var t=A.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cQ(a,b,c,d){var t,s
if(c)return A.dT(a,b,d)
t=b.length
s=A.dR(t,d,a,b)
return s},
dS(a,b,c,d){var t=A.cP,s=A.dP
switch(b?-1:a){case 0:throw A.b(new A.bW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dT(a,b,c){var t,s
if($.cN==null)$.cN=A.cM("interceptor")
if($.cO==null)$.cO=A.cM("receiver")
t=b.length
s=A.dS(t,c,a,b)
return s},
cD(a){return A.dU(a)},
dO(a,b){return A.aV(v.typeUniverse,A.ao(a.a),b)},
cP(a){return a.a},
dP(a){return a.b},
cM(a){var t,s,r,q=new A.aa("receiver","interceptor"),p=J.ct(Object.getOwnPropertyNames(q),u.O)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.b(A.dM("Field name "+a+" not found."))},
f2(a){if(a==null)A.f1("boolean expression must not be null")
return a},
f1(a){throw A.b(new A.c3(a))},
fm(a){throw A.b(new A.c4(a))},
f9(a){return v.getIsolateTag(a)},
fi(a){var t,s,r,q,p,o=A.aX($.dx.$1(a)),n=$.ch[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cl[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eA($.dv.$2(a,o))
if(r!=null){n=$.ch[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cl[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cn(t)
$.ch[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cl[o]=t
return t}if(q==="-"){p=A.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dA(a,t)
if(q==="*")throw A.b(A.d9(o))
if(v.leafTags[o]===true){p=A.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dA(a,t)},
dA(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cI(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn(a){return J.cI(a,!1,null,!!a.$iad)},
fk(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cn(t)
else return J.cI(t,c,null,null)},
fd(){if(!0===$.cG)return
$.cG=!0
A.fe()},
fe(){var t,s,r,q,p,o,n,m
$.ch=Object.create(null)
$.cl=Object.create(null)
A.fc()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dB.$1(p)
if(o!=null){n=A.fk(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fc(){var t,s,r,q,p,o,n=B.u()
n=A.al(B.v,A.al(B.w,A.al(B.k,A.al(B.k,A.al(B.x,A.al(B.y,A.al(B.z(B.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dx=new A.ci(q)
$.dv=new A.cj(p)
$.dB=new A.ck(o)},
al(a,b){return a(b)||b},
f3(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
aP:function aP(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
as:function as(a,b){this.a=a
this.$ti=b},
ar:function ar(){},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
N:function N(){},
b5:function b5(){},
bo:function bo(){},
bl:function bl(){},
aa:function aa(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
bW:function bW(a){this.a=a},
c3:function c3(a){this.a=a},
cb:function cb(){},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a,b){this.a=a
this.b=b
this.c=null},
ci:function ci(a){this.a=a},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
W:function W(){},
a4:function a4(){},
eE(a){return a},
cf(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.by(b,a))},
bg:function bg(){},
ag:function ag(){},
aA:function aA(){},
aB:function aB(){},
be:function be(){},
bf:function bf(){},
aL:function aL(){},
aM:function aM(){},
aN:function aN(){},
aO:function aO(){},
d4(a,b){var t=b.c
return t==null?b.c=A.cz(a,b.y,!0):t},
cv(a,b){var t=b.c
return t==null?b.c=A.aT(a,"cS",[b.y]):t},
d5(a){var t=a.x
if(t===6||t===7||t===8)return A.d5(a.y)
return t===12||t===13},
eb(a){return a.at},
aZ(a){return A.bv(v.typeUniverse,a,!1)},
X(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.dk(a,s,!0)
case 7:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.cz(a,s,!0)
case 8:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.dj(a,s,!0)
case 9:r=b.z
q=A.aY(a,r,c,a0)
if(q===r)return b
return A.aT(a,b.y,q)
case 10:p=b.y
o=A.X(a,p,c,a0)
n=b.z
m=A.aY(a,n,c,a0)
if(o===p&&m===n)return b
return A.cx(a,o,m)
case 12:l=b.y
k=A.X(a,l,c,a0)
j=b.z
i=A.eY(a,j,c,a0)
if(k===l&&i===j)return b
return A.di(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aY(a,h,c,a0)
p=b.y
o=A.X(a,p,c,a0)
if(g===h&&o===p)return b
return A.cy(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.b(A.b4("Attempted to substitute unexpected RTI kind "+d))}},
aY(a,b,c,d){var t,s,r,q,p=b.length,o=A.cd(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.X(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eZ(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cd(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.X(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eY(a,b,c,d){var t,s=b.a,r=A.aY(a,s,c,d),q=b.b,p=A.aY(a,q,c,d),o=b.c,n=A.eZ(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bq()
t.a=r
t.b=p
t.c=n
return t},
j(a,b){a[v.arrayRti]=b
return a},
dw(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fb(s)
t=a.$S()
return t}return null},
ff(a,b){var t
if(A.d5(b))if(a instanceof A.N){t=A.dw(a)
if(t!=null)return t}return A.ao(a)},
ao(a){if(a instanceof A.l)return A.F(a)
if(Array.isArray(a))return A.C(a)
return A.cA(J.K(a))},
C(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
F(a){var t=a.$ti
return t!=null?t:A.cA(a)},
cA(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eL(a,t)},
eL(a,b){var t=a instanceof A.N?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ev(v.typeUniverse,t.name)
b.$ccache=s
return s},
fb(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bv(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fa(a){return A.a5(A.F(a))},
cC(a){var t
if(a instanceof A.W)return A.f5(a.$r,a.a6())
t=a instanceof A.N?A.dw(a):null
if(t!=null)return t
if(u.w.b(a))return J.dJ(a).a
if(Array.isArray(a))return A.C(a)
return A.ao(a)},
a5(a){var t=a.w
return t==null?a.w=A.dp(a):t},
dp(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.cc(a)
t=A.bv(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.dp(t):s},
f5(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.d(r,0)
t=A.aV(v.typeUniverse,A.cC(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.d(r,s)
t=A.dl(v.typeUniverse,t,A.cC(r[s]))}return A.aV(v.typeUniverse,t,a)},
cJ(a){return A.a5(A.bv(v.typeUniverse,a,!1))},
eK(a){var t,s,r,q,p,o=this
if(o===u.K)return A.J(o,a,A.eR)
if(!A.L(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.J(o,a,A.eV)
t=o.x
if(t===7)return A.J(o,a,A.eI)
if(t===1)return A.J(o,a,A.dt)
s=t===6?o.y:o
t=s.x
if(t===8)return A.J(o,a,A.eN)
if(s===u.S)r=A.cg
else if(s===u.i||s===u.n)r=A.eQ
else if(s===u.N)r=A.eT
else r=s===u.y?A.cB:null
if(r!=null)return A.J(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.fh)){o.r="$i"+q
if(q==="f")return A.J(o,a,A.eP)
return A.J(o,a,A.eU)}}else if(t===11){p=A.f3(s.y,s.z)
return A.J(o,a,p==null?A.dt:p)}return A.J(o,a,A.eG)},
J(a,b,c){a.b=c
return a.b(b)},
eJ(a){var t,s=this,r=A.eF
if(!A.L(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eB
else if(s===u.K)r=A.ez
else{t=A.b_(s)
if(t)r=A.eH}s.a=r
return s.a(a)},
bx(a){var t,s=a.x
if(!A.L(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bx(a.y)))t=s===8&&A.bx(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eG(a){var t=this
if(a==null)return A.bx(t)
return A.o(v.typeUniverse,A.ff(a,t),null,t,null)},
eI(a){if(a==null)return!0
return this.y.b(a)},
eU(a){var t,s=this
if(a==null)return A.bx(s)
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.K(a)[t]},
eP(a){var t,s=this
if(a==null)return A.bx(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.K(a)[t]},
eF(a){var t,s=this
if(a==null){t=A.b_(s)
if(t)return a}else if(s.b(a))return a
A.dq(a,s)},
eH(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dq(a,t)},
dq(a,b){throw A.b(A.el(A.da(a,A.t(b,null))))},
da(a,b){return A.Y(a)+": type '"+A.t(A.cC(a),null)+"' is not a subtype of type '"+b+"'"},
el(a){return new A.bu("TypeError: "+a)},
r(a,b){return new A.bu("TypeError: "+A.da(a,b))},
eN(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.cv(v.typeUniverse,s).b(a)},
eR(a){return a!=null},
ez(a){if(a!=null)return a
throw A.b(A.r(a,"Object"))},
eV(a){return!0},
eB(a){return a},
dt(a){return!1},
cB(a){return!0===a||!1===a},
ft(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.r(a,"bool"))},
fv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool"))},
fu(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.r(a,"bool?"))},
ce(a){if(typeof a=="number")return a
throw A.b(A.r(a,"double"))},
fx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double"))},
fw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"double?"))},
cg(a){return typeof a=="number"&&Math.floor(a)===a},
bw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.r(a,"int"))},
fz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int"))},
fy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.r(a,"int?"))},
eQ(a){return typeof a=="number"},
ex(a){if(typeof a=="number")return a
throw A.b(A.r(a,"num"))},
fA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num"))},
ey(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.r(a,"num?"))},
eT(a){return typeof a=="string"},
aX(a){if(typeof a=="string")return a
throw A.b(A.r(a,"String"))},
fB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String"))},
eA(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.r(a,"String?"))},
du(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.t(a[r],b)
return t},
eX(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.du(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.t(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dr(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.j([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=u.O,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.d(a4,k)
n=B.d.I(n+m,a4[k])
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
if(m===9){q=A.f_(a.y)
p=a.z
return p.length>0?q+("<"+A.du(p,b)+">"):q}if(m===11)return A.eX(a,b)
if(m===12)return A.dr(a,b,null)
if(m===13)return A.dr(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.d(b,o)
return b[o]}return"?"},
f_(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ew(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ev(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bv(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aU(a,5,"#")
r=A.cd(t)
for(q=0;q<t;++q)r[q]=s
p=A.aT(a,b,r)
o[b]=p
return p}else return n},
eu(a,b){return A.dm(a.tR,b)},
et(a,b){return A.dm(a.eT,b)},
bv(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dg(A.de(a,null,b,c))
s.set(b,t)
return t},
aV(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dg(A.de(a,b,c,!0))
r.set(c,s)
return s},
dl(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cx(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
I(a,b){b.a=A.eJ
b.b=A.eK
return b},
aU(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.A(null,null)
t.x=b
t.at=c
s=A.I(a,t)
a.eC.set(c,s)
return s},
dk(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eq(a,b,s,c)
a.eC.set(s,t)
return t},
eq(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.A(null,null)
r.x=6
r.y=b
r.at=c
return A.I(a,r)},
cz(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ep(a,b,s,c)
a.eC.set(s,t)
return t},
ep(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.L(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.b_(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.b_(r.y))return r
else return A.d4(a,b)}}q=new A.A(null,null)
q.x=7
q.y=b
q.at=c
return A.I(a,q)},
dj(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.en(a,b,s,c)
a.eC.set(s,t)
return t},
en(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aT(a,"cS",[b])
else if(b===u.P||b===u.T)return u.x}r=new A.A(null,null)
r.x=8
r.y=b
r.at=c
return A.I(a,r)},
er(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.A(null,null)
t.x=14
t.y=b
t.at=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
aS(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
em(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aT(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aS(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.A(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.I(a,s)
a.eC.set(q,r)
return r},
cx(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aS(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.A(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.I(a,p)
a.eC.set(r,o)
return o},
es(a,b,c){var t,s,r="+"+(b+"("+A.aS(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.A(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.I(a,t)
a.eC.set(r,s)
return s},
di(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aS(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aS(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.em(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.A(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.I(a,q)
a.eC.set(s,p)
return p},
cy(a,b,c,d){var t,s=b.at+("<"+A.aS(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eo(a,b,c,s,d)
a.eC.set(s,t)
return t},
eo(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cd(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.X(a,b,s,0)
n=A.aY(a,c,s,0)
return A.cy(a,o,n,c!==n)}}m=new A.A(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.I(a,m)},
de(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dg(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.eg(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.df(a,s,m,l,!1)
else if(r===46)s=A.df(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.V(a.u,a.e,l.pop()))
break
case 94:l.push(A.er(a.u,l.pop()))
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
case 62:A.ei(a,l)
break
case 38:A.eh(a,l)
break
case 42:q=a.u
l.push(A.dk(q,A.V(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.cz(q,A.V(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.dj(q,A.V(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ef(a,l)
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
A.ek(a.u,a.e,p)
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
return A.V(a.u,a.e,n)},
eg(a,b,c,d){var t,s,r=b-48
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
o=A.ew(t,p.y)[q]
if(o==null)A.a6('No "'+q+'" in "'+A.eb(p)+'"')
d.push(A.aV(t,p,o))}else d.push(q)
return n},
ei(a,b){var t,s=a.u,r=A.dd(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aT(s,q,r))
else{t=A.V(s,a.e,q)
switch(t.x){case 12:b.push(A.cy(s,t,r,a.n))
break
default:b.push(A.cx(s,t,r))
break}}},
ef(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
q=A.V(n,a.e,m)
p=new A.bq()
p.a=r
p.b=t
p.c=s
b.push(A.di(n,q,p))
return
case-4:b.push(A.es(n,b.pop(),r))
return
default:throw A.b(A.b4("Unexpected state under `()`: "+A.i(m)))}},
eh(a,b){var t=b.pop()
if(0===t){b.push(A.aU(a.u,1,"0&"))
return}if(1===t){b.push(A.aU(a.u,4,"1&"))
return}throw A.b(A.b4("Unexpected extended operation "+A.i(t)))},
dd(a,b){var t=b.splice(a.p)
A.dh(a.u,a.e,t)
a.p=b.pop()
return t},
V(a,b,c){if(typeof c=="string")return A.aT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ej(a,b,c)}else return c},
dh(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.V(a,b,c[t])},
ek(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.V(a,b,c[t])},
ej(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.b(A.b4("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.b(A.b4("Bad index "+c+" for "+b.i(0)))},
o(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.L(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.L(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.o(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.o(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.o(a,b.y,c,d,e)
if(s===6)return A.o(a,b.y,c,d,e)
return s!==7}if(s===6)return A.o(a,b.y,c,d,e)
if(q===6){t=A.d4(a,d)
return A.o(a,b,c,t,e)}if(s===8){if(!A.o(a,b.y,c,d,e))return!1
return A.o(a,A.cv(a,b),c,d,e)}if(s===7){t=A.o(a,u.P,c,d,e)
return t&&A.o(a,b.y,c,d,e)}if(q===8){if(A.o(a,b,c,d.y,e))return!0
return A.o(a,b,c,A.cv(a,d),e)}if(q===7){t=A.o(a,b,c,u.P,e)
return t||A.o(a,b,c,d.y,e)}if(r)return!1
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
if(!A.o(a,k,c,j,e)||!A.o(a,j,e,k,c))return!1}return A.ds(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.ds(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eO(a,b,c,d,e)}if(p&&q===11)return A.eS(a,b,c,d,e)
return!1},
ds(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.o(a2,a3.y,a4,a5.y,a6))return!1
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
if(!A.o(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.o(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.o(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.o(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eO(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aV(a,b,s[p])
return A.dn(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dn(a,o,null,c,n,e)},
dn(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.o(a,s,d,r,f))return!1}return!0},
eS(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.o(a,s[t],c,r[t],e))return!1
return!0},
b_(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.L(a))if(s!==7)if(!(s===6&&A.b_(a.y)))t=s===8&&A.b_(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fh(a){var t
if(!A.L(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
L(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.O},
dm(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cd(a){return a>0?new Array(a):v.typeUniverse.sEA},
A:function A(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bq:function bq(){this.c=this.b=this.a=null},
cc:function cc(a){this.a=a},
c6:function c6(){},
bu:function bu(a){this.a=a},
dV(a){return new A.aK(a.l("aK<0>"))},
db(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
bK(a){var t,s={}
if(A.cH(a))return"{...}"
t=new A.aH("")
try{B.a.k($.z,a)
t.a+="{"
s.a=!0
a.F(0,new A.bL(s,t))
t.a+="}"}finally{if(0>=$.z.length)return A.d($.z,-1)
$.z.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aK:function aK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
v:function v(){},
az:function az(){},
bL:function bL(a,b){this.a=a
this.b=b},
aW:function aW(){},
af:function af(){},
aJ:function aJ(){},
ah:function ah(){},
aR:function aR(){},
ak:function ak(){},
ay(a,b,c,d){var t,s=J.e_(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
cZ(a,b,c){var t,s,r=A.j([],c.l("h<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.ap)(a),++s)B.a.k(r,c.a(a[s]))
if(b)return r
return J.ct(r,c)},
bd(a,b,c){var t=A.e1(a,c)
return t},
e1(a,b){var t,s
if(Array.isArray(a))return A.j(a.slice(0),b.l("h<0>"))
t=A.j([],b.l("h<0>"))
for(s=J.cL(a);s.q();)B.a.k(t,s.gu())
return t},
d6(a,b,c){var t=J.cL(b)
if(!t.q())return a
if(c.length===0){do a+=A.i(t.gu())
while(t.q())}else{a+=A.i(t.gu())
for(;t.q();)a=a+c+A.i(t.gu())}return a},
d_(a,b){return new A.bM(a,b.gaE(),b.gaH(),b.gaF())},
Y(a){if(typeof a=="number"||A.cB(a)||a==null)return J.b1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.d3(a)},
b4(a){return new A.b3(a)},
dM(a){return new A.a9(!1,null,null,a)},
dN(a,b,c){return new A.a9(!0,a,b,c)},
e7(a){var t=null
return new A.aE(t,t,!1,t,t,a)},
e8(a,b){return new A.aE(null,null,!0,a,b,"Value not in range")},
aF(a,b,c,d,e){return new A.aE(b,c,!0,a,d,"Invalid value")},
ea(a,b,c){if(0>a||a>c)throw A.b(A.aF(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aF(b,a,c,"end",null))
return b}return c},
e9(a,b){if(a<0)throw A.b(A.aF(a,0,null,b,null))
return a},
cT(a,b,c,d){return new A.bG(b,!0,a,d,"Index out of range")},
E(a){return new A.c2(a)},
d9(a){return new A.c1(a)},
aq(a){return new A.bB(a)},
cR(a,b,c){return new A.bF(a,b,c)},
dZ(a,b,c){var t,s
if(A.cH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.j([],u.s)
B.a.k($.z,a)
try{A.eW(a,t)}finally{if(0>=$.z.length)return A.d($.z,-1)
$.z.pop()}s=A.d6(b,u.d.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cs(a,b,c){var t,s
if(A.cH(a))return b+"..."+c
t=new A.aH(b)
B.a.k($.z,a)
try{s=t
s.a=A.d6(s.a,a,", ")}finally{if(0>=$.z.length)return A.d($.z,-1)
$.z.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eW(a,b){var t,s,r,q,p,o,n,m=a.gD(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.q())return
t=A.i(m.gu())
B.a.k(b,t)
l+=t.length+2;++k}if(!m.q()){if(k<=5)return
if(0>=b.length)return A.d(b,-1)
s=b.pop()
if(0>=b.length)return A.d(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.q()){if(k<=4){B.a.k(b,A.i(q))
return}s=A.i(q)
if(0>=b.length)return A.d(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.q();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.d(b,-1)
l-=b.pop().length+2;--k}B.a.k(b,"...")
return}}r=A.i(q)
s=A.i(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.k(b,n)
B.a.k(b,r)
B.a.k(b,s)},
e2(a,b,c,d){var t
if(B.f===c)return A.d7(B.b.gm(a),J.M(b),$.cp())
if(B.f===d){t=B.b.gm(a)
b=J.M(b)
c=J.M(c)
return A.cw(A.S(A.S(A.S($.cp(),t),b),c))}t=B.b.gm(a)
b=J.M(b)
c=J.M(c)
d=J.M(d)
d=A.cw(A.S(A.S(A.S(A.S($.cp(),t),b),c),d))
return d},
bN:function bN(a,b){this.a=a
this.b=b},
c5:function c5(){},
bD:function bD(){},
b3:function b3(a){this.a=a},
c0:function c0(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aE:function aE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bG:function bG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a){this.a=a},
c1:function c1(a){this.a=a},
bB:function bB(a){this.a=a},
bT:function bT(){},
c7:function c7(a){this.a=a},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
aC:function aC(){},
l:function l(){},
aH:function aH(a){this.a=a},
bC:function bC(){},
c8:function c8(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bA:function bA(a,b){this.a=$
this.b=a
this.c=b},
b8:function b8(a,b){this.a=a
this.b=b},
D:function D(){},
bm:function bm(){},
bj:function bj(a,b){this.a=a
this.b=b},
T:function T(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=$
_.r=e},
aI:function aI(a,b){this.c=a
this.b=b},
bO:function bO(a){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$
_.r=a},
fl(a){var t,s,r,q,p,o=A.dV(u.N)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.ap)(a),++s){r=a[s]
q=r.b.X()
p=B.c.p(r.c)
o.k(0,""+B.c.p(q.a)+","+B.c.p(q.b)+","+p)}t=A.C(a).l("am(1)").a(new A.co(o))
if(!!a.fixed$length)A.a6(A.E("removeWhere"))
B.a.aA(a,t,!0)},
co:function co(a){this.a=a},
fj(){self.jsregionworker=A.f0(new A.cm(),u.e)},
cm:function cm(){},
f6(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.j([],u.a),a0=a1.length
if(0>=a0)return A.d(a1,0)
t=J.b0(a1[0])
for(s=t-1,r=a0-1,q=u.t,p=0;p<a0;p=j){if(!(p<a1.length))return A.d(a1,p)
o=a1[p]
for(n=J.an(o),m=p<r,l=p>0,k=p-1,j=p+1,i=0;i<t;++i){h=A.j([],q)
if(l){if(!(k>=0&&k<a1.length))return A.d(a1,k)
B.a.k(h,J.bz(a1[k],i))}if(m){if(!(j<a1.length))return A.d(a1,j)
B.a.k(h,J.bz(a1[j],i))}if(i>0){if(!(p<a1.length))return A.d(a1,p)
B.a.k(h,J.bz(a1[p],i-1))}if(i<s){if(!(p<a1.length))return A.d(a1,p)
B.a.k(h,J.bz(a1[p],i+1))}g=n.h(o,i)
for(f=h.length,e=g,d=0;d<f;++d){c=h[d]
if(c<e)e=c}for(b=e+1;b<g;++b)B.a.k(a,new A.b6(p,i,b))}}return a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(){},
bn:function bn(){},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a
this.b=$},
c_:function c_(){},
bZ:function bZ(){},
aG:function aG(a,b){this.d=a
this.b=b},
cU(a,b,c){var t,s,r,q,p,o,n,m,l
if(B.d.ai(a,"-")){t=1
s=!0}else{t=0
s=!1}r=a.length
if(t>=r)throw A.b(A.cR("No digits",a,t))
for(q=0,p=0,o=0;t<r;++t,p=l,q=m){n=A.f4(a.charCodeAt(t))
if(n<b){q=q*b+n
m=q&4194303
p=p*b+B.b.t(q,22)
l=p&4194303
o=o*b+(p>>>22)&1048575}else throw A.b(A.cR("Not radix digit",a,t))}if(s)return A.ac(0,0,0,q,p,o)
return new A.u(q&4194303,p&4194303,o&1048575)},
cr(a){var t,s,r,q,p,o
if(a<0){a=-a
t=!0}else t=!1
s=B.b.K(a,17592186044416)
a-=s*17592186044416
r=B.b.K(a,4194304)
q=a-r*4194304&4194303
p=r&4194303
o=s&1048575
return t?A.ac(0,0,0,q,p,o):new A.u(q,p,o)},
bH(a){if(a instanceof A.u)return a
else if(A.cg(a))return A.cr(a)
throw A.b(A.dN(a,"other","not an int, Int32 or Int64"))},
dY(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===0&&c===0&&d===0)return"0"
t=(d<<4|c>>>18)>>>0
s=c>>>8&1023
d=(c<<2|b>>>20)&1023
c=b>>>10&1023
b&=1023
if(!(a<37))return A.d(B.o,a)
r=B.o[a]
q=""
p=""
o=""
while(!0){if(!!(t===0&&s===0))break
n=B.b.C(t,r)
s+=t-n*r<<10>>>0
m=B.b.C(s,r)
d+=s-m*r<<10>>>0
l=B.b.C(d,r)
c+=d-l*r<<10>>>0
k=B.b.C(c,r)
b+=c-k*r<<10>>>0
j=B.b.C(b,r)
i=B.d.aj(B.b.ah(r+(b-j*r),a),1)
o=p
p=q
q=i
s=m
t=n
d=l
c=k
b=j}h=(d<<20>>>0)+(c<<10>>>0)+b
return e+(h===0?"":B.b.ah(h,a))+q+p+o},
ac(a,b,c,d,e,f){var t=a-d,s=b-e-(B.b.t(t,22)&1)
return new A.u(t&4194303,s&4194303,c-f-(B.b.t(s,22)&1)&1048575)},
dW(a,b,c){var t,s,r,q,p=A.bH(b)
if(p.gac())throw A.b(A.E("Division by zero"))
if(a.gac())return B.m
t=a.c
s=(t&524288)!==0
r=p.c
q=(r&524288)!==0
if(s)a=A.ac(0,0,0,a.a,a.b,t)
if(q)p=A.ac(0,0,0,p.a,p.b,r)
return A.dX(a.a,a.b,a.c,s,p.a,p.b,p.c,q,c)},
dX(a0,a1,a2,a3,a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a6===0&&a5===0&&a4<256){t=B.b.C(a2,a4)
s=a1+(a2-t*a4<<22>>>0)
r=B.b.C(s,a4)
q=a0+(s-r*a4<<22>>>0)
p=B.b.C(q,a4)
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
t=t+a*(B.b.t(s,22)&1)&1048575}}if(a8===1){if(a3!==a7)return A.ac(0,0,0,p,r,t)
return new A.u(p&4194303,r&4194303,t&1048575)}if(!a3)return new A.u(o&4194303,n&4194303,m&1048575)
if(a8===3)if(o===0&&n===0&&m===0)return B.m
else return A.ac(a4,a5,a6,o,n,m)
else return A.ac(0,0,0,o,n,m)},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(a,b){this.a=a
this.b=b},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
a:function a(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD(a){var t=new A.bP(new Int16Array(2048),A.ay(2048,B.C,!1,u.q),A.ay(2048,B.a1,!1,u.h),A.ay(2048,B.aQ,!1,u.V))
t.al(a)
return t},
e3(){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<8;++t){s=t>>>0&1
r=t>>>1&1
q=t>>>2&1
p=s^1
o=r^1
n=q^1
m=A.U(s,r,q,0)
l=s+p
k=r+o
j=q+n
A.U(l,k,j,1)
A.U(p,r,q,0)
A.U(s,o,q,0)
A.U(s,r,n,0)
A.U(s+(p^1),k,j,1)
A.U(l,r+(o^1),j,1)
A.U(l,k,q+(n^1),1)
B.a.j($.dE(),t,m)}for(t=0;t<16;++t)B.a.j($.dF(),t,A.dc(t>>>0&1,t>>>1&1,t>>>2&1,t>>>3&1))
l=A.j([],u.f)
for(i=0;i<24;++i){h=B.dp[i]
l.push(new A.e(h.a/0.01001634121365712,h.b/0.01001634121365712))}for(t=0;t<2048;++t){k=B.b.M(t,24)
if(!(k<l.length))return A.d(l,k)
B.a.k($.bQ,l[k])}l=A.j([],u.Y)
for(i=0;i<48;++i){h=B.dr[i]
l.push(new A.c(h.a/0.030485933181293584,h.b/0.030485933181293584,h.c/0.030485933181293584))}for(t=0;t<2048;++t){k=B.b.M(t,48)
if(!(k<l.length))return A.d(l,k)
B.a.k($.bR,l[k])}l=A.j([],u.J)
for(i=0;i<160;++i){h=B.dq[i]
l.push(new A.a(h.a/0.009202377986303158,h.b/0.009202377986303158,h.c/0.009202377986303158,h.d/0.009202377986303158))}for(t=0;t<2048;++t){k=B.b.M(t,160)
if(!(k<l.length))return A.d(l,k)
B.a.k($.bS,l[k])}},
U(a,b,c,d){return new A.bs()},
dc(a,b,c,d){var t=new A.bt(),s=(a+b+c+d)*0.309016994374947
t.e=-a-s
t.f=-b-s
t.r=-c-s
t.w=-d-s
t.as=(0.8-a-b-c-d)*0.309016994374947
return t},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(){},
bt:function bt(){var _=this
_.as=_.w=_.r=_.f=_.e=$},
fn(a){A.dC(new A.bc("Field '"+a+"' has been assigned during initialization."),new Error())},
a7(){A.dC(new A.bc("Field '' has not been initialized."),new Error())},
eD(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.eC,a)
t[$.cK()]=a
a.$dart_jsFunction=t
return t},
eC(a,b){u.j.a(b)
u.Z.a(a)
return A.e6(a,b,null)},
f0(a,b){if(typeof a=="function")return a
else return b.a(A.eD(a))},
d8(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=0;t<10;++t){s=d[t]
r=s.b
if(r==null||a<r){r=s.c
r=r==null||b<r}else r=!1
if(r){q=B.c.H(a)
r=s.a
p=c.a
o=c.b
n=p*2-2*o
o=p+o
p=new A.b8(n,o)
m=new A.T(r,p,q,1,B.B.aG(1e9))
l=new A.bA(1,q)
l.sam(u.X.a(p.X()))
l.a===$&&A.a7()
m.f=l
r=r.c.d
k=new Float32Array(A.eE(A.j([32*r,0,32*(r+1)-0,32],u.u)))
j=Math.cos(0)*0.12656738281
i=Math.sin(0)*0.12656738281
r=i*16
h=new Float32Array(4)
h[0]=j
h[1]=i
h[2]=n-(q*2-2*q)+0+-j*16+r
h[3]=o-(q+q)+2-r-j*16
r=new A.bj(h,k)
m.d=u.R.a(r)
return m}}throw A.b(new A.c7("No tile type found for elevation: "+A.i(a)+", moisture: "+A.i(b)+". Fix the rules!"))},
f4(a){var t,s=a^48
if(s<10)return s
t=(a|32)-97
if(t>=0)return t+10
else return 255}},J={
cI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cG==null){A.fd()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.d9("Return interceptor for "+A.i(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c9
if(p==null)p=$.c9=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fi(a)
if(q!=null)return q
if(typeof a=="function")return B.dm
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.c9
if(p==null)p=$.c9=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
e_(a,b){if(a<0||a>4294967295)throw A.b(A.aF(a,0,4294967295,"length",null))
return J.cX(new Array(a),b)},
cW(a,b){if(a<0||a>4294967295)throw A.b(A.aF(a,0,4294967295,"length",null))
return J.cX(new Array(a),b)},
cX(a,b){return J.ct(A.j(a,b.l("h<0>")),b)},
ct(a,b){a.fixed$length=Array
return a},
cY(a){a.fixed$length=Array
a.immutable$list=Array
return a},
e0(a,b){var t=u.U
return J.dG(t.a(a),t.a(b))},
K(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.av.prototype
return J.bb.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.aw.prototype
if(typeof a=="boolean")return J.b9.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.l)return a
return J.cF(a)},
an(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.l)return a
return J.cF(a)},
cE(a){if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
return a}if(a instanceof A.l)return a
return J.cF(a)},
f7(a){if(typeof a=="number")return J.Z.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.a2.prototype
return a},
f8(a){if(typeof a=="number")return J.Z.prototype
if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.a2.prototype
return a},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)},
bz(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.fg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).h(a,b)},
dG(a,b){return J.f8(a).L(a,b)},
dH(a,b){return J.cE(a).G(a,b)},
dI(a){return J.f7(a).H(a)},
M(a){return J.K(a).gm(a)},
cL(a){return J.cE(a).gD(a)},
b0(a){return J.an(a).gn(a)},
dJ(a){return J.K(a).gB(a)},
dK(a,b,c){return J.cE(a).ad(a,b,c)},
dL(a,b){return J.K(a).af(a,b)},
b1(a){return J.K(a).i(a)},
b7:function b7(){},
b9:function b9(){},
aw:function aw(){},
p:function p(){},
a0:function a0(){},
bh:function bh(){},
a2:function a2(){},
P:function P(){},
h:function h(a){this.$ti=a},
bI:function bI(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Z:function Z(){},
av:function av(){},
bb:function bb(){},
a_:function a_(){}},B={}
var w=[A,J,B]
var $={}
A.cu.prototype={}
J.b7.prototype={
v(a,b){return a===b},
gm(a){return A.bi(a)},
i(a){return"Instance of '"+A.bV(a)+"'"},
af(a,b){throw A.b(A.d_(a,u.o.a(b)))},
gB(a){return A.a5(A.cA(this))}}
J.b9.prototype={
i(a){return String(a)},
gm(a){return a?519018:218159},
gB(a){return A.a5(u.y)},
$ix:1,
$iam:1}
J.aw.prototype={
v(a,b){return null==b},
i(a){return"null"},
gm(a){return 0},
$ix:1}
J.p.prototype={}
J.a0.prototype={
gm(a){return 0},
i(a){return String(a)}}
J.bh.prototype={}
J.a2.prototype={}
J.P.prototype={
i(a){var t=a[$.cK()]
if(t==null)return this.ak(a)
return"JavaScript function for "+J.b1(t)},
$iab:1}
J.h.prototype={
k(a,b){A.C(a).c.a(b)
if(!!a.fixed$length)A.a6(A.E("add"))
a.push(b)},
aA(a,b,c){var t,s,r,q,p
A.C(a).l("am(1)").a(b)
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(!A.f2(b.$1(q)))t.push(q)
if(a.length!==s)throw A.b(A.aq(a))}p=t.length
if(p===s)return
this.sn(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
a9(a,b){A.C(a).l("n<1>").a(b)
if(!!a.fixed$length)A.a6(A.E("addAll"))
this.ao(a,b)
return},
ao(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.b(A.aq(a))
for(s=0;s<t;++s)a.push(b[s])},
ad(a,b,c){var t=A.C(a)
return new A.H(a,t.J(c).l("1(2)").a(b),t.l("@<1>").J(c).l("H<1,2>"))},
G(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
i(a){return A.cs(a,"[","]")},
gD(a){return new J.b2(a,a.length,A.C(a).l("b2<1>"))},
gm(a){return A.bi(a)},
gn(a){return a.length},
sn(a,b){if(!!a.fixed$length)A.a6(A.E("set length"))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.by(a,b))
return a[b]},
j(a,b,c){A.C(a).c.a(c)
if(!!a.immutable$list)A.a6(A.E("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.by(a,b))
a[b]=c},
$in:1,
$if:1}
J.bI.prototype={}
J.b2.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.ap(r)
throw A.b(r)}t=s.c
if(t>=q){s.sa2(null)
return!1}s.sa2(r[t]);++s.c
return!0},
sa2(a){this.d=this.$ti.l("1?").a(a)}}
J.Z.prototype={
L(a,b){var t
A.ex(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gW(b)
if(this.gW(a)===t)return 0
if(this.gW(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gW(a){return a===0?1/a<0:a<0},
p(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.b(A.E(""+a+".toInt()"))},
H(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.b(A.E(""+a+".floor()"))},
aI(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ah(a,b){var t,s,r,q,p
if(b<2||b>36)throw A.b(A.aF(b,2,36,"radix",null))
t=a.toString(b)
s=t.length
r=s-1
if(!(r>=0))return A.d(t,r)
if(t.charCodeAt(r)!==41)return t
q=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(q==null)A.a6(A.E("Unexpected toString result: "+t))
s=q.length
if(1>=s)return A.d(q,1)
t=q[1]
if(3>=s)return A.d(q,3)
p=+q[3]
s=q[2]
if(s!=null){t+=s
p-=s.length}return t+B.d.Y("0",p)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
M(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
C(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.a7(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.a7(a,b)},
a7(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.b(A.E("Result of truncating division is "+A.i(t)+": "+A.i(a)+" ~/ "+b))},
t(a,b){var t
if(a>0)t=this.aB(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aB(a,b){return b>31?0:a>>>b},
gB(a){return A.a5(u.n)},
$iq:1,
$ik:1,
$iy:1}
J.av.prototype={
gB(a){return A.a5(u.S)},
$ix:1,
$im:1}
J.bb.prototype={
gB(a){return A.a5(u.i)},
$ix:1}
J.a_.prototype={
I(a,b){return a+b},
ai(a,b){var t=a.length,s=b.length
if(s>t)return!1
return b===a.substring(0,s)},
N(a,b,c){return a.substring(b,A.ea(b,c,a.length))},
aj(a,b){return this.N(a,b,null)},
Y(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.A)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
L(a,b){var t
A.aX(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
i(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gB(a){return A.a5(u.N)},
gn(a){return a.length},
h(a,b){if(b>=a.length)throw A.b(A.by(a,b))
return a[b]},
$ix:1,
$iq:1,
$id1:1,
$iB:1}
A.bc.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.bX.prototype={}
A.au.prototype={}
A.G.prototype={
gD(a){var t=this
return new A.ae(t,t.gn(t),A.F(t).l("ae<G.E>"))}}
A.ae.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t,s=this,r=s.a,q=J.an(r),p=q.gn(r)
if(s.b!==p)throw A.b(A.aq(r))
t=s.c
if(t>=p){s.sZ(null)
return!1}s.sZ(q.G(r,t));++s.c
return!0},
sZ(a){this.d=this.$ti.l("1?").a(a)}}
A.H.prototype={
gn(a){return J.b0(this.a)},
G(a,b){return this.b.$1(J.dH(this.a,b))}}
A.O.prototype={}
A.ai.prototype={
gm(a){var t=this._hashCode
if(t!=null)return t
t=664597*B.d.gm(this.a)&536870911
this._hashCode=t
return t},
i(a){return'Symbol("'+this.a+'")'},
v(a,b){if(b==null)return!1
return b instanceof A.ai&&this.a===b.a},
$iaj:1}
A.aP.prototype={$r:"+(1,2)",$s:1}
A.aQ.prototype={$r:"+distance,elevation(1,2)",$s:2}
A.as.prototype={}
A.ar.prototype={
i(a){return A.bK(this)},
$iQ:1}
A.at.prototype={
gn(a){return this.b.length},
U(a){return!1},
h(a,b){if(!this.U(b))return null
return this.b[this.a[b]]},
F(a,b){var t,s,r,q,p=this
p.$ti.l("~(1,2)").a(b)
t=p.$keys
if(t==null){t=Object.keys(p.a)
p.$keys=t}t=t
s=p.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.ba.prototype={
gaE(){var t=this.a
return t},
gaH(){var t,s,r,q,p=this
if(p.c===1)return B.p
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return B.p
r=[]
for(q=0;q<s;++q){if(!(q<t.length))return A.d(t,q)
r.push(t[q])}return J.cY(r)},
gaF(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return B.q
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return B.q
p=new A.ax(u.B)
for(o=0;o<s;++o){if(!(o<t.length))return A.d(t,o)
n=t[o]
m=q+o
if(!(m>=0&&m<r.length))return A.d(r,m)
p.j(0,new A.ai(n),r[m])}return new A.as(p,u.c)},
$icV:1}
A.bU.prototype={
$2(a,b){var t
A.aX(a)
t=this.a
t.b=t.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++t.a},
$S:0}
A.N.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dD(s==null?"unknown":s)+"'"},
$iab:1,
gaJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.b5.prototype={$C:"$2",$R:2}
A.bo.prototype={}
A.bl.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dD(t)+"'"}}
A.aa.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aa))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.dz(this.a)^A.bi(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bV(this.a)+"'")}}
A.c4.prototype={
i(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bW.prototype={
i(a){return"RuntimeError: "+this.a}}
A.c3.prototype={
i(a){return"Assertion failed: "+A.Y(this.a)}}
A.cb.prototype={}
A.ax.prototype={
gn(a){return this.a},
U(a){var t=this.b
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
return r}else return this.aD(b)},
aD(a){var t,s,r=this.d
if(r==null)return null
t=r[this.aa(a)]
s=this.ab(t,a)
if(s<0)return null
return t[s].b},
j(a,b,c){var t,s,r,q,p,o,n=this,m=A.F(n)
m.c.a(b)
m.z[1].a(c)
if(typeof b=="string"){t=n.b
n.a_(t==null?n.b=n.R():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.a_(s==null?n.c=n.R():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.R()
q=n.aa(b)
p=r[q]
if(p==null)r[q]=[n.S(b,c)]
else{o=n.ab(p,b)
if(o>=0)p[o].b=c
else p.push(n.S(b,c))}}},
F(a,b){var t,s,r=this
A.F(r).l("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.aq(r))
t=t.c}},
a_(a,b,c){var t,s=A.F(this)
s.c.a(b)
s.z[1].a(c)
t=a[b]
if(t==null)a[b]=this.S(b,c)
else t.b=c},
S(a,b){var t=this,s=A.F(t),r=new A.bJ(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
aa(a){return J.M(a)&1073741823},
ab(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a8(a[s].a,b))return s
return-1},
i(a){return A.bK(this)},
R(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.bJ.prototype={}
A.ci.prototype={
$1(a){return this.a(a)},
$S:1}
A.cj.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.ck.prototype={
$1(a){return this.a(A.aX(a))},
$S:3}
A.W.prototype={
i(a){return this.a8(!1)},
a8(a){var t,s,r,q,p,o=this.az(),n=this.a6(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.d(n,r)
p=n[r]
m=a?m+A.d3(p):m+A.i(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
az(){var t,s=this.$s
for(;$.ca.length<=s;)B.a.k($.ca,null)
t=$.ca[s]
if(t==null){t=this.au()
B.a.j($.ca,s,t)}return t},
au(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.j(new Array(m),u.G)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.j(l,r,s[t])}}return J.cY(A.cZ(l,!1,u.K))}}
A.a4.prototype={
a6(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.a4&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gm(a){return A.e2(this.$s,this.a,this.b,B.f)}}
A.bg.prototype={}
A.ag.prototype={
gn(a){return a.length},
$iad:1}
A.aA.prototype={
h(a,b){A.cf(b,a,a.length)
return a[b]},
j(a,b,c){A.ce(c)
A.cf(b,a,a.length)
a[b]=c},
$in:1,
$if:1}
A.aB.prototype={
j(a,b,c){A.bw(c)
A.cf(b,a,a.length)
a[b]=c},
$in:1,
$if:1}
A.be.prototype={
gB(a){return B.dx},
$ix:1,
$ibE:1}
A.bf.prototype={
gB(a){return B.dy},
h(a,b){A.cf(b,a,a.length)
return a[b]},
$ix:1,
$icq:1}
A.aL.prototype={}
A.aM.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.A.prototype={
l(a){return A.aV(v.typeUniverse,this,a)},
J(a){return A.dl(v.typeUniverse,this,a)}}
A.bq.prototype={}
A.cc.prototype={
i(a){return A.t(this.a,null)}}
A.c6.prototype={
i(a){return this.a}}
A.bu.prototype={}
A.aK.prototype={
gD(a){return new A.br(this,this.ar(),A.F(this).l("br<1>"))},
gn(a){return this.a},
T(a,b){var t,s
if(b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else{s=this.av(b)
return s}},
av(a){var t=this.d
if(t==null)return!1
return this.a4(t[this.a1(a)],a)>=0},
k(a,b){var t,s,r=this
A.F(r).c.a(b)
if(b!=="__proto__"){t=r.b
return r.ap(t==null?r.b=A.db():t,b)}else{s=r.an(b)
return s}},
an(a){var t,s,r,q=this
A.F(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.db()
s=q.a1(a)
r=t[s]
if(r==null)t[s]=[a]
else{if(q.a4(r,a)>=0)return!1
r.push(a)}++q.a
q.e=null
return!0},
ar(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.ay(j.a,null,!1,u.z)
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
ap(a,b){A.F(this).c.a(b)
if(a[b]!=null)return!1
a[b]=0;++this.a
this.e=null
return!0},
a1(a){return B.d.gm(a)&1073741823},
a4(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a8(a[s],b))return s
return-1}}
A.br.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
q(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.b(A.aq(q))
else if(r>=s.length){t.sa0(null)
return!1}else{t.sa0(s[r])
t.c=r+1
return!0}},
sa0(a){this.d=this.$ti.l("1?").a(a)}}
A.v.prototype={
gD(a){return new A.ae(a,this.gn(a),A.ao(a).l("ae<v.E>"))},
G(a,b){return this.h(a,b)},
ad(a,b,c){var t=A.ao(a)
return new A.H(a,t.J(c).l("1(v.E)").a(b),t.l("@<v.E>").J(c).l("H<1,2>"))},
i(a){return A.cs(a,"[","]")}}
A.az.prototype={
gn(a){return this.a},
i(a){return A.bK(this)},
$iQ:1}
A.bL.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.i(a)
s.a=t+": "
s.a+=A.i(b)},
$S:4}
A.aW.prototype={}
A.af.prototype={
h(a,b){return this.a.h(0,b)},
F(a,b){this.a.F(0,this.$ti.l("~(1,2)").a(b))},
gn(a){return this.a.a},
i(a){return A.bK(this.a)},
$iQ:1}
A.aJ.prototype={}
A.ah.prototype={
i(a){return A.cs(this,"{","}")},
$in:1}
A.aR.prototype={}
A.ak.prototype={}
A.bN.prototype={
$2(a,b){var t,s,r
u.v.a(a)
t=this.b
s=this.a
r=t.a+=s.a
r+=a.a
t.a=r
t.a=r+": "
t.a+=A.Y(b)
s.a=", "},
$S:5}
A.c5.prototype={
i(a){return this.a3()}}
A.bD.prototype={}
A.b3.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.Y(t)
return"Assertion failed"}}
A.c0.prototype={}
A.a9.prototype={
gP(){return"Invalid argument"+(!this.a?"(s)":"")},
gO(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.i(q),o=t.gP()+r+p
if(!t.a)return o
return o+t.gO()+": "+A.Y(t.gV())},
gV(){return this.b}}
A.aE.prototype={
gV(){return A.ey(this.b)},
gP(){return"RangeError"},
gO(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.i(r):""
else if(r==null)t=": Not greater than or equal to "+A.i(s)
else if(r>s)t=": Not in inclusive range "+A.i(s)+".."+A.i(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.i(s)
return t}}
A.bG.prototype={
gV(){return A.bw(this.b)},
gP(){return"RangeError"},
gO(){if(A.bw(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gn(a){return this.f}}
A.bM.prototype={
i(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new A.aH("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=A.Y(o)
k.a=", "}l.d.F(0,new A.bN(k,j))
n=A.Y(l.a)
m=j.i(0)
return"NoSuchMethodError: method not found: '"+l.b.a+"'\nReceiver: "+n+"\nArguments: ["+m+"]"}}
A.c2.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c1.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bB.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.Y(t)+"."}}
A.bT.prototype={
i(a){return"Out of Memory"}}
A.c7.prototype={
i(a){return"Exception: "+this.a}}
A.bF.prototype={
i(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=""!==j?"FormatException: "+j:"FormatException",h=this.c,g=this.b,f=h>g.length
if(f)h=null
if(h==null){if(g.length>78)g=B.d.N(g,0,75)+"..."
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
k=""}return i+l+B.d.N(g,m,n)+k+"\n"+B.d.Y(" ",h-m+l.length)+"^\n"}}
A.n.prototype={
gn(a){var t,s=this.gD(this)
for(t=0;s.q();)++t
return t},
G(a,b){var t,s
A.e9(b,"index")
t=this.gD(this)
for(s=b;t.q();){if(s===0)return t.gu();--s}throw A.b(A.cT(b,b-s,this,"index"))},
i(a){return A.dZ(this,"(",")")}}
A.aC.prototype={
gm(a){return A.l.prototype.gm.call(this,this)},
i(a){return"null"}}
A.l.prototype={$il:1,
v(a,b){return this===b},
gm(a){return A.bi(this)},
i(a){return"Instance of '"+A.bV(this)+"'"},
af(a,b){throw A.b(A.d_(this,u.o.a(b)))},
gB(a){return A.fa(this)},
toString(){return this.i(this)}}
A.aH.prototype={
gn(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bC.prototype={
i(a){var t=String(a)
t.toString
return t}}
A.c8.prototype={
aG(a){if(a<=0||a>4294967296)throw A.b(A.e7("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.a1.prototype={
i(a){return"Point("+A.i(this.a)+", "+A.i(this.b)+")"},
v(a,b){if(b==null)return!1
return b instanceof A.a1&&this.a===b.a&&this.b===b.b},
gm(a){return A.d7(B.c.gm(this.a),B.c.gm(this.b),0)}}
A.bA.prototype={
sam(a){this.a=u.X.a(a)}}
A.b8.prototype={
X(){var t=this.b,s=t/2-this.a/4
return new A.a1(t-s,s,u.X)},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b8&&b.a===this.a&&b.b===this.b},
gm(a){return B.c.gm(this.a)^B.c.gm(this.b)},
i(a){return A.i(this.a)+", "+A.i(this.b)}}
A.D.prototype={
L(a,b){var t,s,r,q
u.k.a(b)
t=this.ae()
s=b.ae()
r=t.b
q=s.b
if(r!==q)return r>q?1:-1
return t.a>s.a?1:-1},
$iq:1}
A.bm.prototype={}
A.bj.prototype={}
A.T.prototype={
ae(){return new A.aQ(this.b.b,this.c)}}
A.aI.prototype={
a3(){return"TileType."+this.b}}
A.bO.prototype={
aC(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.a5(a4,a5),a2=a0.a5(a4,a5),a3=Math.min(15,Math.abs(-15))
for(t=a1.length,s=a2.length,r=0;r<a4;++r){q=a6+r
for(p=q*0.0045,o=q*0.018,n=q*0.072,m=0;m<a4;++m){l=a7+m
k=a0.a
k===$&&A.a7()
j=l*0.0045
i=0.366025403784439*(p+j)
h=p+i
g=j+i
f=k.E(h,g)
k=a0.b
k===$&&A.a7()
j=l*0.018
i=0.366025403784439*(o+j)
e=o+i
d=j+i
k=k.E(e,d)
j=a0.c
j===$&&A.a7()
c=l*0.072
i=0.366025403784439*(n+c)
b=n+i
a=c+i
f=(Math.pow((f+0.5*k+0.25*j.E(b,a))/1.75,1)-0.25)*a3
if(f<-15)f=-15
else if(f>15)f=15
if(!(r<t))return A.d(a1,r)
B.a.j(a1[r],m,B.c.aI(f))
k=a0.d
k===$&&A.a7()
k=k.E(h,g)
j=a0.e
j===$&&A.a7()
j=j.E(e,d)
c=a0.f
c===$&&A.a7()
c=c.E(b,a)
if(!(r<s))return A.d(a2,r)
B.a.j(a2[r],m,(k+0.5*j+0.25*c)/1.75)}}return new A.aP(a1,a2)},
a5(a,b){var t,s,r,q,p=J.cW(a,u.H)
for(t=u.i,s=0;s<a;++s){r=J.cW(b,t)
for(q=0;q<b;++q)r[q]=0
p[s]=r}return p}}
A.co.prototype={
$1(a){var t,s,r,q,p,o,n,m
u.W.a(a)
t=a.b.X()
s=B.c.p(t.a)
r=B.c.p(t.b)
q=B.c.p(a.c)
p=""+s+","
o=""+q
n=""+r
m=this.a
return m.T(0,""+(s+1)+","+n+","+o)&&m.T(0,p+n+","+(q+1))&&m.T(0,p+(r+1)+","+o)},
$S:6}
A.cm.prototype={
$1(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.bn(),f=new A.bY(g),e=J.an(a0),d=A.bw(e.h(a0,0)),c=A.bw(e.h(a0,1)),b=A.ce(e.h(a0,2)),a=A.ce(e.h(a0,3))
e=B.c.p(b)
t=B.c.p(a)
s=new A.bO(g)
s.a=A.aD(2)
s.b=A.aD(3)
s.c=A.aD(4)
s.d=A.aD(12)
s.e=A.aD(13)
s.f=A.aD(14)
f.b=s
r=s.aC(d,c,e,t)
q=f.aw(e,t,r.a,r.b)
A.fl(q)
p=A.cZ(q,!0,u.W)
if(!!p.immutable$list)A.a6(A.E("sort"))
A.ee(p,J.eM(),A.C(p).c)
o=A.j([],u.r)
for(g=p.length,e=u.l,n=0;n<p.length;p.length===g||(0,A.ap)(p),++n){m=p[n]
t=m.a
l=m.b
k=m.c
j=m.e
i=m.r
h=m.d
h===$&&A.a7()
B.a.k(o,["Tile",t.b,l.a,l.b,k,j,i,A.j([h.a,h.b],e)])}return o},
$S:7}
A.b6.prototype={
i(a){return"Coord3D{x: "+this.a+", y: "+this.b+", z: "+this.c+"}"}}
A.bp.prototype={}
A.bn.prototype={
ag(){var t=null
return A.j([new A.w(B.e,0,-0.2),new A.w(B.h,0,t),new A.w(B.e,2,-0.2),new A.w(B.h,2,t),new A.w(B.e,6,-0.1),new A.w(B.h,6,0),new A.w(B.t,6,t),new A.w(B.e,15,0),new A.w(B.t,15,0.4),new A.w(B.e,t,t)],u.m)}}
A.w.prototype={}
A.bY.prototype={
aw(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.I
e.a(c)
e.a(d)
t=A.j([],u.Q)
for(e=c.length,s=u.X,r=this.a,q=d.length,p=0;p<e;++p){o=c[p]
if(!(p<q))return A.d(d,p)
n=d[p]
for(m=o.length,l=n.length,k=a+p,j=0;j<c[0].length;++j){if(!(j<m))return A.d(o,j)
i=J.dI(o[j])
if(!(j<l))return A.d(n,j)
B.a.k(t,A.d8(i,n[j],new A.a1(k,b+j,s),r.ag()))}}e=A.C(c)
m=e.l("H<1,f<m>>")
h=A.f6(A.bd(new A.H(c,e.l("f<m>(1)").a(new A.c_()),m),!0,m.l("G.E")))
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.ap)(h),++g){f=h[g]
p=f.a
j=f.b
if(!(p<q))return A.d(d,p)
m=d[p]
if(!(j<m.length))return A.d(m,j)
B.a.k(t,A.d8(f.c,m[j],new A.a1(a+p,b+j,s),r.ag()))}return t}}
A.c_.prototype={
$1(a){var t=J.dK(u.H.a(a),new A.bZ(),u.S)
return A.bd(t,!0,t.$ti.l("G.E"))},
$S:8}
A.bZ.prototype={
$1(a){return B.c.H(A.ce(a))},
$S:9}
A.aG.prototype={
a3(){return"SpriteSheetItem."+this.b}}
A.u.prototype={
I(a,b){var t=A.bH(b),s=this.a+t.a,r=this.b+t.b+(s>>>22)
return new A.u(s&4194303,r&4194303,this.c+t.c+(r>>>22)&1048575)},
v(a,b){var t,s=this
if(b==null)return!1
if(b instanceof A.u)t=b
else if(A.cg(b)){if(s.c===0&&s.b===0)return s.a===b
if((b&4194303)===b)return!1
t=A.cr(b)}else t=null
if(t!=null)return s.a===t.a&&s.b===t.b&&s.c===t.c
return!1},
L(a,b){return this.aq(b)},
aq(a){var t=A.bH(a),s=this.c,r=s>>>19,q=t.c
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
gac(){return this.c===0&&this.b===0&&this.a===0},
gm(a){var t=this.b
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
return A.dY(10,q,p,o,r)},
$iq:1}
A.e.prototype={}
A.c.prototype={}
A.a.prototype={}
A.bP.prototype={
al(a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(!$.d0){A.e3()
$.d0=!0}t=new Int16Array(2048)
for(s=0;s<2048;++s){if(!(s<2048))return A.d(t,s)
t[s]=s}r=A.cr(a9)
for(q=a8.a,p=a8.b,o=a8.c,n=a8.d,s=2047;s>=0;--s){m=A.cU("6364136223846793005",10,!0)
m.toString
l=A.bH(m)
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
m=A.cU("1442695040888963407",10,!0)
m.toString
r=new A.u(a5&4194303,a6&4194303,(a2>>>18)+(a3>>>5)+((a4&4095)<<8)+(a6>>>22)&1048575).I(0,m)
m=s+1
a7=A.dW(r.I(0,31),m,3).p(0)
if(a7<0)a7+=m
if(!(a7>=0&&a7<2048))return A.d(t,a7)
q[s]=t[a7]
m=q[s]
if(!(m>=0&&m<$.bQ.length))return A.d($.bQ,m)
B.a.j(p,s,$.bQ[m])
m=q[s]
if(!(m>=0&&m<$.bR.length))return A.d($.bR,m)
B.a.j(o,s,$.bR[m])
m=q[s]
if(!(m>=0&&m<$.bS.length))return A.d($.bS,m)
B.a.j(n,s,$.bS[m])
t[a7]=t[s]}},
E(a,b){var t,s,r,q,p,o,n,m,l,k,j=B.c.H(a),i=B.c.H(b),h=a-j,g=b-i,f=B.c.p((g-h)/2+1),e=(h+g)*-0.211324865405187,d=h+e,c=g+e
for(t=this.b,s=this.a,r=0,q=0;q<3;++q){p=f+q
if(!(p>=0&&p<4))return A.d(B.n,p)
o=B.n[p]
n=d+o.c
m=c+o.d
l=0.5-n*n-m*m
if(l<=0)continue
p=(s[j+o.a&2047]^i+o.b&2047)>>>0
if(!(p<2048))return A.d(t,p)
k=t[p]
l*=l
r+=l*l*(k.a*n+k.b*m)}return r}}
A.a3.prototype={}
A.bs.prototype={}
A.bt.prototype={};(function aliases(){var t=J.a0.prototype
t.ak=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"eM","e0",10)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.l,null)
r(A.l,[A.cu,J.b7,J.b2,A.bD,A.bX,A.n,A.ae,A.O,A.ai,A.W,A.af,A.ar,A.ba,A.N,A.cb,A.az,A.bJ,A.A,A.bq,A.cc,A.ah,A.br,A.v,A.aW,A.c5,A.bT,A.c7,A.bF,A.aC,A.aH,A.c8,A.a1,A.bA,A.b8,A.D,A.bj,A.bO,A.b6,A.bp,A.w,A.bY,A.u,A.e,A.c,A.a,A.bP,A.a3,A.bs,A.bt])
r(J.b7,[J.b9,J.aw,J.p,J.Z,J.a_])
r(J.p,[J.a0,J.h,A.bg,A.bC])
r(J.a0,[J.bh,J.a2,J.P])
s(J.bI,J.h)
r(J.Z,[J.av,J.bb])
r(A.bD,[A.bc,A.c4,A.bW,A.b3,A.c6,A.c0,A.a9,A.bM,A.c2,A.c1,A.bB])
s(A.au,A.n)
s(A.G,A.au)
s(A.H,A.G)
s(A.a4,A.W)
r(A.a4,[A.aP,A.aQ])
s(A.ak,A.af)
s(A.aJ,A.ak)
s(A.as,A.aJ)
s(A.at,A.ar)
r(A.N,[A.b5,A.bo,A.ci,A.ck,A.co,A.cm,A.c_,A.bZ])
r(A.b5,[A.bU,A.cj,A.bL,A.bN])
r(A.bo,[A.bl,A.aa])
s(A.c3,A.b3)
s(A.ax,A.az)
s(A.ag,A.bg)
r(A.ag,[A.aL,A.aN])
s(A.aM,A.aL)
s(A.aA,A.aM)
s(A.aO,A.aN)
s(A.aB,A.aO)
s(A.be,A.aA)
s(A.bf,A.aB)
s(A.bu,A.c6)
s(A.aR,A.ah)
s(A.aK,A.aR)
r(A.a9,[A.aE,A.bG])
s(A.bm,A.D)
s(A.T,A.bm)
r(A.c5,[A.aI,A.aG])
s(A.bn,A.bp)
t(A.aL,A.v)
t(A.aM,A.O)
t(A.aN,A.v)
t(A.aO,A.O)
t(A.ak,A.aW)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",k:"double",y:"num",B:"String",am:"bool",aC:"Null",f:"List"},mangledNames:{},types:["~(B,@)","@(@)","@(@,B)","@(B)","~(l?,l?)","~(aj,@)","am(T)","f<f<@>?>(@)","f<m>(f<k>)","m(k)","m(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aP&&a.b(c.a)&&b.b(c.b),"2;distance,elevation":(a,b)=>c=>c instanceof A.aQ&&a.b(c.a)&&b.b(c.b)}}
A.eu(v.typeUniverse,JSON.parse('{"bh":"a0","a2":"a0","P":"a0","b9":{"am":[],"x":[]},"aw":{"x":[]},"h":{"f":["1"],"n":["1"]},"bI":{"h":["1"],"f":["1"],"n":["1"]},"Z":{"k":[],"y":[],"q":["y"]},"av":{"k":[],"m":[],"y":[],"q":["y"],"x":[]},"bb":{"k":[],"y":[],"q":["y"],"x":[]},"a_":{"B":[],"q":["B"],"d1":[],"x":[]},"au":{"n":["1"]},"G":{"n":["1"]},"H":{"G":["2"],"n":["2"],"G.E":"2"},"ai":{"aj":[]},"aP":{"a4":[],"W":[]},"aQ":{"a4":[],"W":[]},"as":{"aJ":["1","2"],"ak":["1","2"],"af":["1","2"],"aW":["1","2"],"Q":["1","2"]},"ar":{"Q":["1","2"]},"at":{"ar":["1","2"],"Q":["1","2"]},"ba":{"cV":[]},"N":{"ab":[]},"b5":{"ab":[]},"bo":{"ab":[]},"bl":{"ab":[]},"aa":{"ab":[]},"ax":{"az":["1","2"],"Q":["1","2"]},"a4":{"W":[]},"ag":{"ad":["1"]},"aA":{"v":["k"],"ad":["k"],"f":["k"],"n":["k"],"O":["k"]},"aB":{"v":["m"],"ad":["m"],"f":["m"],"n":["m"],"O":["m"]},"be":{"v":["k"],"bE":[],"ad":["k"],"f":["k"],"n":["k"],"O":["k"],"x":[],"v.E":"k"},"bf":{"v":["m"],"cq":[],"ad":["m"],"f":["m"],"n":["m"],"O":["m"],"x":[],"v.E":"m"},"aK":{"ah":["1"],"n":["1"]},"az":{"Q":["1","2"]},"af":{"Q":["1","2"]},"aJ":{"ak":["1","2"],"af":["1","2"],"aW":["1","2"],"Q":["1","2"]},"ah":{"n":["1"]},"aR":{"ah":["1"],"n":["1"]},"k":{"y":[],"q":["y"]},"m":{"y":[],"q":["y"]},"f":{"n":["1"]},"y":{"q":["y"]},"B":{"q":["B"],"d1":[]},"D":{"q":["D"]},"bm":{"D":[],"q":["D"]},"T":{"D":[],"q":["D"]},"bn":{"bp":[]},"u":{"q":["l"]},"cq":{"f":["m"],"n":["m"]},"bE":{"f":["k"],"n":["k"]}}'))
A.et(v.typeUniverse,JSON.parse('{"au":1,"ag":1,"aR":1}'))
var u=(function rtii(){var t=A.aZ
return{U:t("q<@>"),c:t("as<aj,@>"),Z:t("ab"),k:t("D"),q:t("e"),h:t("c"),V:t("a"),o:t("cV"),d:t("n<@>"),a:t("h<b6>"),l:t("h<bE>"),f:t("h<e>"),Y:t("h<c>"),J:t("h<a>"),G:t("h<l>"),s:t("h<B>"),Q:t("h<T>"),m:t("h<w>"),u:t("h<k>"),b:t("h<@>"),t:t("h<m>"),r:t("h<f<@>?>"),T:t("aw"),g:t("P"),p:t("ad<@>"),B:t("ax<aj,@>"),I:t("f<f<k>>"),H:t("f<k>"),j:t("f<@>"),e:t("f<f<@>?>(@)"),P:t("aC"),K:t("l"),X:t("a1<k>"),L:t("fs"),F:t("+()"),R:t("bj"),N:t("B"),v:t("aj"),W:t("T"),w:t("x"),C:t("a2"),y:t("am"),i:t("k"),z:t("@"),S:t("m"),A:t("0&*"),_:t("l*"),x:t("cS<aC>?"),O:t("l?"),n:t("y")}})();(function constants(){var t=hunkHelpers.makeConstList
B.dl=J.b7.prototype
B.a=J.h.prototype
B.b=J.av.prototype
B.c=J.Z.prototype
B.d=J.a_.prototype
B.dm=J.P.prototype
B.dn=J.p.prototype
B.r=J.bh.prototype
B.i=J.a2.prototype
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

B.A=new A.bT()
B.f=new A.bX()
B.B=new A.c8()
B.l=new A.cb()
B.C=new A.e(0,0)
B.a1=new A.c(0,0,0)
B.aQ=new A.a(0,0,0,0)
B.m=new A.u(0,0,0)
B.U=new A.e(0.130526192220052,0.99144486137381)
B.X=new A.e(0.38268343236509,0.923879532511287)
B.J=new A.e(0.608761429008721,0.793353340291235)
B.a_=new A.e(0.793353340291235,0.608761429008721)
B.M=new A.e(0.923879532511287,0.38268343236509)
B.R=new A.e(0.99144486137381,0.130526192220051)
B.W=new A.e(0.99144486137381,-0.130526192220051)
B.T=new A.e(0.923879532511287,-0.38268343236509)
B.K=new A.e(0.793353340291235,-0.60876142900872)
B.E=new A.e(0.608761429008721,-0.793353340291235)
B.H=new A.e(0.38268343236509,-0.923879532511287)
B.O=new A.e(0.130526192220052,-0.99144486137381)
B.Z=new A.e(-0.130526192220052,-0.99144486137381)
B.F=new A.e(-0.38268343236509,-0.923879532511287)
B.N=new A.e(-0.608761429008721,-0.793353340291235)
B.P=new A.e(-0.793353340291235,-0.608761429008721)
B.Q=new A.e(-0.923879532511287,-0.38268343236509)
B.L=new A.e(-0.99144486137381,-0.130526192220052)
B.G=new A.e(-0.99144486137381,0.130526192220051)
B.D=new A.e(-0.923879532511287,0.38268343236509)
B.S=new A.e(-0.793353340291235,0.608761429008721)
B.I=new A.e(-0.608761429008721,0.793353340291235)
B.Y=new A.e(-0.38268343236509,0.923879532511287)
B.V=new A.e(-0.130526192220052,0.99144486137381)
B.dp=A.j(t([B.U,B.X,B.J,B.a_,B.M,B.R,B.W,B.T,B.K,B.E,B.H,B.O,B.Z,B.F,B.N,B.P,B.Q,B.L,B.G,B.D,B.S,B.I,B.Y,B.V]),u.f)
B.dD=new A.a3(1,0,-0.788675134594813,0.211324865405187)
B.dA=new A.a3(0,0,0,0)
B.dB=new A.a3(1,1,-0.577350269189626,-0.577350269189626)
B.dC=new A.a3(0,1,0.211324865405187,-0.788675134594813)
B.n=A.j(t([B.dD,B.dA,B.dB,B.dC]),A.aZ("h<a3>"))
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
B.o=A.j(t([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),u.t)
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
B.q=new A.at(B.ds,[],A.aZ("at<aj,@>"))
B.dw=new A.ai("call")
B.dt=new A.aG(19,"tileGrass")
B.t=new A.aI(B.dt,"grass")
B.du=new A.aG(20,"tileRock")
B.e=new A.aI(B.du,"rock")
B.dv=new A.aG(21,"tileSand")
B.h=new A.aI(B.dv,"sand")
B.dx=A.cJ("bE")
B.dy=A.cJ("cq")
B.dz=A.cJ("l")})();(function staticFields(){$.c9=null
$.z=A.j([],u.G)
$.d2=null
$.cO=null
$.cN=null
$.dx=null
$.dv=null
$.dB=null
$.ch=null
$.cl=null
$.cG=null
$.ca=A.j([],A.aZ("h<f<l>?>"))
$.bQ=A.j([],u.f)
$.bR=A.j([],u.Y)
$.bS=A.j([],u.J)
$.d0=!1})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fp","cK",()=>A.f9("_$dart_dartClosure"))
t($,"fC","cp",()=>A.dz(B.dz))
t($,"fq","dE",()=>A.ay(8,A.U(0,0,0,0),!1,A.aZ("bs")))
t($,"fr","dF",()=>A.ay(16,A.dc(0,0,0,0),!1,A.aZ("bt")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.p,DOMError:J.p,ErrorEvent:J.p,Event:J.p,InputEvent:J.p,SubmitEvent:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,SensorErrorEvent:J.p,SpeechRecognitionError:J.p,ArrayBufferView:A.bg,Float32Array:A.be,Int16Array:A.bf,DOMException:A.bC})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,DOMException:true})
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.aB.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fj
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=regionworker.js.map
