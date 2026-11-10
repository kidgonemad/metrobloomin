import{readPerfDebugFlags as Tl,createPerfGuard as Ma,LOW_POWER_MAX_BLOBS as Ki,LOW_POWER_PIXEL_RATIO as Di}from"./DpNYxtmW.js";const sa="172",Al=0,Sa=1,wl=2,Io=1,Rl=2,pn=3,In=0,It=1,mn=2,Pn=0,xi=1,ya=2,Ea=3,ba=4,Cl=5,Wn=100,Pl=101,Ll=102,Dl=103,Il=104,Fl=200,Ul=201,Nl=202,Bl=203,_s=204,vs=205,Ol=206,zl=207,Hl=208,Vl=209,kl=210,Gl=211,Wl=212,Xl=213,Yl=214,xs=0,Ms=1,Ss=2,yi=3,ys=4,Es=5,bs=6,Ts=7,Fo=0,ql=1,Zl=2,Ln=0,Kl=1,$l=2,jl=3,Jl=4,Ql=5,ec=6,tc=7,Uo=300,Ei=301,bi=302,As=303,ws=304,Lr=306,Rs=1e3,Ot=1001,Cs=1002,Ct=1003,nc=1004,$i=1005,Tt=1006,Nr=1007,Yn=1008,vn=1009,No=1010,Bo=1011,Vi=1012,aa=1013,Zn=1014,tn=1015,Gi=1016,oa=1017,la=1018,Ti=1020,Oo=35902,zo=1021,Ho=1022,Xt=1023,Vo=1024,ko=1025,Mi=1026,Ai=1027,Go=1028,ca=1029,Wo=1030,ua=1031,fa=1033,Sr=33776,yr=33777,Er=33778,br=33779,Ps=35840,Ls=35841,Ds=35842,Is=35843,Fs=36196,Us=37492,Ns=37496,Bs=37808,Os=37809,zs=37810,Hs=37811,Vs=37812,ks=37813,Gs=37814,Ws=37815,Xs=37816,Ys=37817,qs=37818,Zs=37819,Ks=37820,$s=37821,Tr=36492,js=36494,Js=36495,Xo=36283,Qs=36284,ea=36285,ta=36286,ic=3200,rc=3201,sc=0,ac=1,Jt="",Wt="srgb",Kn="srgb-linear",Rr="linear",ot="srgb",ti=7680,Ta=519,oc=512,lc=513,cc=514,Yo=515,uc=516,fc=517,hc=518,dc=519,Aa=35044,wa="300 es",gn=2e3,Cr=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,na=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function pc(n,e){return(n%e+e)%e}function Or(n,e,t){return(1-t)*n+t*e}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],M=r[0],p=r[3],f=r[6],R=r[1],A=r[4],E=r[7],I=r[2],T=r[5],b=r[8];return s[0]=a*M+o*R+l*I,s[3]=a*p+o*A+l*T,s[6]=a*f+o*E+l*b,s[1]=c*M+u*R+h*I,s[4]=c*p+u*A+h*T,s[7]=c*f+u*E+h*b,s[2]=d*M+m*R+g*I,s[5]=d*p+m*A+g*T,s[8]=d*f+m*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new We;function qo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mc(){const n=Pr("canvas");return n.style.display="block",n}const Ra={};function _i(n){n in Ra||(Ra[n]=!0,console.warn(n))}function gc(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function _c(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vc(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ca=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xc(){const n={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jt?Rr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kn]:{primaries:e,whitePoint:i,transfer:Rr,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Je=xc();function _n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ni;class Mc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Pr("canvas")),ni.width=e.width,ni.height=e.height;const i=ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sc=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hr(r[a].image)):s.push(Hr(r[a]))}else s=Hr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yc=0;class St extends Ri{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=Ot,r=Ot,s=Tt,a=Yn,o=Xt,l=vn,c=St.DEFAULT_ANISOTROPY,u=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Wi(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Uo;St.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,I=(f+1)/2,T=(u+d)/4,b=(h+M)/4,F=(g+p)/4;return A>E&&A>I?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=b/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=F/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=b/s,r=F/s),this.set(i,r,s,t),this}let R=Math.sqrt((p-g)*(p-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-g)/R,this.y=(h-M)/R,this.z=(d-u)/R,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ec extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new St(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ko extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bc extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==d||c!==m||u!==g){let p=1-o;const f=l*d+c*m+u*g+h*M,R=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const I=Math.sqrt(A),T=Math.atan2(I,f*R);p=Math.sin(p*T)/I,o=Math.sin(o*T)/I}const E=o*R;if(l=l*p+d*E,c=c*p+m*E,u=u*p+g*E,h=h*p+M*E,p===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new G,La=new Xi;class Yi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ji.copy(i.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),Ji.subVectors(this.max,Fi),ii.subVectors(e.a,Fi),ri.subVectors(e.b,Fi),si.subVectors(e.c,Fi),En.subVectors(ri,ii),bn.subVectors(si,ri),Nn.subVectors(ii,si);let t=[0,-En.z,En.y,0,-bn.z,bn.y,0,-Nn.z,Nn.y,En.z,0,-En.x,bn.z,0,-bn.x,Nn.z,0,-Nn.x,-En.y,En.x,0,-bn.y,bn.x,0,-Nn.y,Nn.x,0];return!kr(t,ii,ri,si,Ji)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,ii,ri,si,Ji))?!1:(Qi.crossVectors(En,bn),t=[Qi.x,Qi.y,Qi.z],kr(t,ii,ri,si,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new G,new G,new G,new G,new G,new G,new G,new G],Zt=new G,ji=new Yi,ii=new G,ri=new G,si=new G,En=new G,bn=new G,Nn=new G,Fi=new G,Ji=new G,Qi=new G,Bn=new G;function kr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Bn.fromArray(n,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=i.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Tc=new Yi,Ui=new G,Gr=new G;class ha{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ui,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(Gr)),this.expandByPoint(Ui.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new G,Wr=new G,er=new G,Tn=new G,Xr=new G,tr=new G,Yr=new G;class Ac{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wr.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Wr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=Tn.dot(this.direction),l=-Tn.dot(er),c=Tn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const M=1/u;h*=M,d*=M,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wr).addScaledVector(er,d),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){Xr.subVectors(t,e),tr.subVectors(i,e),Yr.crossVectors(Xr,tr);let a=this.direction.dot(Yr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(tr.crossVectors(Tn,tr));if(l<0)return null;const c=o*this.direction.dot(Xr.cross(Tn));if(c<0||l+c>a)return null;const u=-o*Tn.dot(Yr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,a,o,l,c,u,h,d,m,g,M,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,m,g,M,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,m,g,M,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,M=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,M=c*h;t[0]=d+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,M=c*h;t[0]=d-M*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,M=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=M-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-M*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wc,e,Rc)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),An.crossVectors(i,Ut),An.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),An.crossVectors(i,Ut)),An.normalize(),nr.crossVectors(Ut,An),r[0]=An.x,r[4]=nr.x,r[8]=Ut.x,r[1]=An.y,r[5]=nr.y,r[9]=Ut.y,r[2]=An.z,r[6]=nr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],M=i[6],p=i[10],f=i[14],R=i[3],A=i[7],E=i[11],I=i[15],T=r[0],b=r[4],F=r[8],S=r[12],x=r[1],L=r[5],X=r[9],B=r[13],W=r[2],ne=r[6],K=r[10],se=r[14],Y=r[3],ce=r[7],xe=r[11],Pe=r[15];return s[0]=a*T+o*x+l*W+c*Y,s[4]=a*b+o*L+l*ne+c*ce,s[8]=a*F+o*X+l*K+c*xe,s[12]=a*S+o*B+l*se+c*Pe,s[1]=u*T+h*x+d*W+m*Y,s[5]=u*b+h*L+d*ne+m*ce,s[9]=u*F+h*X+d*K+m*xe,s[13]=u*S+h*B+d*se+m*Pe,s[2]=g*T+M*x+p*W+f*Y,s[6]=g*b+M*L+p*ne+f*ce,s[10]=g*F+M*X+p*K+f*xe,s[14]=g*S+M*B+p*se+f*Pe,s[3]=R*T+A*x+E*W+I*Y,s[7]=R*b+A*L+E*ne+I*ce,s[11]=R*F+A*X+E*K+I*xe,s[15]=R*S+A*B+E*se+I*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],M=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+M*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],M=e[13],p=e[14],f=e[15],R=h*p*c-M*d*c+M*l*m-o*p*m-h*l*f+o*d*f,A=g*d*c-u*p*c-g*l*m+a*p*m+u*l*f-a*d*f,E=u*M*c-g*h*c+g*o*m-a*M*m-u*o*f+a*h*f,I=g*h*l-u*M*l-g*o*d+a*M*d+u*o*p-a*h*p,T=t*R+i*A+r*E+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=R*b,e[1]=(M*d*s-h*p*s-M*r*m+i*p*m+h*r*f-i*d*f)*b,e[2]=(o*p*s-M*l*s+M*r*c-i*p*c-o*r*f+i*l*f)*b,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*b,e[4]=A*b,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*f+t*d*f)*b,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*b,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*b,e[8]=E*b,e[9]=(g*h*s-u*M*s-g*i*m+t*M*m+u*i*f-t*h*f)*b,e[10]=(a*M*s-g*o*s+g*i*c-t*M*c-a*i*f+t*o*f)*b,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*b,e[12]=I*b,e[13]=(u*M*r-g*h*r+g*i*d-t*M*d-u*i*p+t*h*p)*b,e[14]=(g*o*r-a*M*r-g*i*l+t*M*l+a*i*p-t*o*p)*b,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,M=a*u,p=a*h,f=o*h,R=l*c,A=l*u,E=l*h,I=i.x,T=i.y,b=i.z;return r[0]=(1-(M+f))*I,r[1]=(m+E)*I,r[2]=(g-A)*I,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(d+f))*T,r[6]=(p+R)*T,r[7]=0,r[8]=(g+A)*b,r[9]=(p-R)*b,r[10]=(1-(d+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/a,h=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===gn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Cr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,m=(i+r)*u;let g,M;if(o===gn)g=(a+s)*h,M=-2*h;else if(o===Cr)g=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ai=new G,Kt=new gt,wc=new G(0,0,0),Rc=new G(1,1,1),An=new G,nr=new G,Ut=new G,Da=new gt,Ia=new Xi;class xn{constructor(e=0,t=0,i=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cc=0;const Fa=new G,oi=new Xi,fn=new gt,ir=new G,Ni=new G,Pc=new G,Lc=new Xi,Ua=new G(1,0,0),Na=new G(0,1,0),Ba=new G(0,0,1),Oa={type:"added"},Dc={type:"removed"},li={type:"childadded",child:null},qr={type:"childremoved",child:null};class zt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new G,t=new xn,i=new Xi,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Na,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Na,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Ni,ir,this.up):fn.lookAt(ir,Ni,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(fn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oa),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),qr.child=e,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oa),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Lc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new G(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new G,hn=new G,Zr=new G,dn=new G,ci=new G,ui=new G,za=new G,Kr=new G,$r=new G,jr=new G,Jr=new dt,Qr=new dt,es=new dt;class Qt{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$t.subVectors(r,t),hn.subVectors(i,t),Zr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(hn),l=$t.dot(Zr),c=hn.dot(hn),u=hn.dot(Zr),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Jr.setScalar(0),Qr.setScalar(0),es.setScalar(0),Jr.fromBufferAttribute(e,t),Qr.fromBufferAttribute(e,i),es.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jr,s.x),a.addScaledVector(Qr,s.y),a.addScaledVector(es,s.z),a}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),hn.subVectors(e,t),$t.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,i),ui.subVectors(s,i),Kr.subVectors(e,i);const l=ci.dot(Kr),c=ui.dot(Kr);if(l<=0&&c<=0)return t.copy(i);$r.subVectors(e,r);const u=ci.dot($r),h=ui.dot($r);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ci,a);jr.subVectors(e,s);const m=ci.dot(jr),g=ui.dot(jr);if(g>=0&&m<=g)return t.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ui,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return za.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(za,o);const f=1/(p+M+d);return a=M*f,o=d*f,t.copy(i).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ts(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=pc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ts(a,s,e+1/3),this.g=ts(a,s,e),this.b=ts(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=jo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Je.fromWorkingColorSpace(bt.copy(this),e),Math.round(Ze(bt.r*255,0,255))*65536+Math.round(Ze(bt.g*255,0,255))*256+Math.round(Ze(bt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Wt){Je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(rr);const i=Or(wn.h,rr.h,t),r=Or(wn.s,rr.s,t),s=Or(wn.l,rr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new tt;tt.NAMES=jo;let Ic=0;class Dr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=xi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_s&&(i.blendSrc=this.blendSrc),this.blendDst!==vs&&(i.blendDst=this.blendDst),this.blendEquation!==Wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jo extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new G,sr=new st;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Aa,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class Qo extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class el extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qn extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fc=0;const Gt=new gt,ns=new zt,fi=new G,Nt=new Yi,Bi=new Yi,xt=new G;class jn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?el:Qo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Nt.min,Bi.min),Nt.expandByPoint(xt),xt.addVectors(Nt.max,Bi.max),Nt.expandByPoint(xt)):(Nt.expandByPoint(Bi.min),Nt.expandByPoint(Bi.max))}Nt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),xt.add(fi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new G,l[F]=new G;const c=new G,u=new G,h=new G,d=new st,m=new st,g=new st,M=new G,p=new G;function f(F,S,x){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,F),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[F].add(M),o[S].add(M),o[x].add(M),l[F].add(p),l[S].add(p),l[x].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,S=R.length;F<S;++F){const x=R[F],L=x.start,X=x.count;for(let B=L,W=L+X;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new G,E=new G,I=new G,T=new G;function b(F){I.fromBufferAttribute(r,F),T.copy(I);const S=o[F];A.copy(S),A.sub(I.multiplyScalar(I.dot(S))).normalize(),E.crossVectors(T,S);const L=E.dot(l[F])<0?-1:1;a.setXYZW(F,A.x,A.y,A.z,L)}for(let F=0,S=R.length;F<S;++F){const x=R[F],L=x.start,X=x.count;for(let B=L,W=L+X;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new gt,On=new Ac,ar=new ha,Va=new G,or=new G,lr=new G,cr=new G,is=new G,ur=new G,ka=new G,fr=new G;class nn extends zt{constructor(e=new jn,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(is.fromBufferAttribute(h,e),a?ur.addScaledVector(is,u):ur.addScaledVector(is.sub(t),u))}t.add(ur)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(ar.containsPoint(On.origin)===!1&&(On.intersectSphere(ar,Va)===null||On.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(Ha.copy(s).invert(),On.copy(e.ray).applyMatrix4(Ha),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],f=a[p.materialIndex],R=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=R,I=A;E<I;E+=3){const T=o.getX(E),b=o.getX(E+1),F=o.getX(E+2);r=hr(this,f,e,i,c,u,h,T,b,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const R=o.getX(p),A=o.getX(p+1),E=o.getX(p+2);r=hr(this,a,e,i,c,u,h,R,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const p=d[g],f=a[p.materialIndex],R=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=R,I=A;E<I;E+=3){const T=E,b=E+1,F=E+2;r=hr(this,f,e,i,c,u,h,T,b,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const R=p,A=p+1,E=p+2;r=hr(this,a,e,i,c,u,h,R,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Uc(n,e,t,i,r,s,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===In,o),l===null)return null;fr.copy(o),fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:n}}function hr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,or),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);const u=Uc(n,e,t,i,or,lr,cr,ka);if(u){const h=new G;Qt.getBarycoord(ka,or,lr,cr,h),r&&(u.uv=Qt.getInterpolatedAttribute(r,o,l,c,h,new st)),s&&(u.uv1=Qt.getInterpolatedAttribute(s,o,l,c,h,new st)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Qt.getNormal(or,lr,cr,d.normal),u.face=d,u.barycoord=h}return u}class qi extends jn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(h,2));function g(M,p,f,R,A,E,I,T,b,F,S){const x=E/b,L=I/F,X=E/2,B=I/2,W=T/2,ne=b+1,K=F+1;let se=0,Y=0;const ce=new G;for(let xe=0;xe<K;xe++){const Pe=xe*L-B;for(let Oe=0;Oe<ne;Oe++){const Qe=Oe*x-X;ce[M]=Qe*R,ce[p]=Pe*A,ce[f]=W,c.push(ce.x,ce.y,ce.z),ce[M]=0,ce[p]=0,ce[f]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Oe/b),h.push(1-xe/F),se+=1}}for(let xe=0;xe<F;xe++)for(let Pe=0;Pe<b;Pe++){const Oe=d+Pe+ne*xe,Qe=d+Pe+ne*(xe+1),$=d+(Pe+1)+ne*(xe+1),le=d+(Pe+1)+ne*xe;l.push(Oe,Qe,le),l.push(Qe,$,le),Y+=6}o.addGroup(m,Y,S),m+=Y,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=wi(n[t]);for(const r in i)e[r]=i[r]}return e}function Nc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Bc={clone:wi,merge:wt};var Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Nc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nl extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new G,Ga=new st,Wa=new st;class jt extends nl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Ga,Wa),t.subVectors(Wa,Ga)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,di=1;class Hc extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(hi,di,e,t);r.layers=this.layers,this.add(r);const s=new jt(hi,di,e,t);s.layers=this.layers,this.add(s);const a=new jt(hi,di,e,t);a.layers=this.layers,this.add(a);const o=new jt(hi,di,e,t);o.layers=this.layers,this.add(o);const l=new jt(hi,di,e,t);l.layers=this.layers,this.add(l);const c=new jt(hi,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class il extends St{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vc extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new il(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Pn});s.uniforms.tEquirect.value=t;const a=new nn(r,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Tt),new Hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class kc extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xa extends St{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ct,u=Ct,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new G,Gc=new G,Wc=new We;class kn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rs.subVectors(i,t).cross(Gc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wc.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new ha,dr=new G;class rl{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],M=r[10],p=r[11],f=r[12],R=r[13],A=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-f).normalize(),i[1].setComponents(l+s,d+c,p+m,E+f).normalize(),i[2].setComponents(l+a,d+u,p+g,E+R).normalize(),i[3].setComponents(l-a,d-u,p-g,E-R).normalize(),i[4].setComponents(l-o,d-h,p-M,E-A).normalize(),t===gn)i[5].setComponents(l+o,d+h,p+M,E+A).normalize();else if(t===Cr)i[5].setComponents(o,h,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(dr.x=r.normal.x>0?e.max.x:e.min.x,dr.y=r.normal.y>0?e.max.y:e.min.y,dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Xc extends St{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Tt,this.magFilter=s!==void 0?s:Tt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Yc extends St{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends St{constructor(e,t,i,r,s,a,o,l,c,u=Mi){if(u!==Mi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mi&&(i=Zn),i===void 0&&u===Ai&&(i=Ti),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zi extends jn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],M=[],p=[];for(let f=0;f<u;f++){const R=f*d-a;for(let A=0;A<c;A++){const E=A*h-s;g.push(E,-R,0),M.push(0,0,1),p.push(A/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const A=R+c*f,E=R+c*(f+1),I=R+1+c*(f+1),T=R+1+c*f;m.push(A,E,T),m.push(E,I,T)}this.setIndex(m),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(M,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class qc extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zc extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class al extends nl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kc extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ya(n,e,t,i){const r=$c(i);switch(t){case zo:return n*e;case Vo:return n*e;case ko:return n*e*2;case Go:return n*e/r.components*r.byteLength;case ca:return n*e/r.components*r.byteLength;case Wo:return n*e*2/r.components*r.byteLength;case ua:return n*e*2/r.components*r.byteLength;case Ho:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case fa:return n*e*4/r.components*r.byteLength;case Sr:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Er:case br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ls:case Is:return Math.max(n,16)*Math.max(e,8)/4;case Ps:case Ds:return Math.max(n,8)*Math.max(e,8)/2;case Fs:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ks:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ks:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $s:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tr:case js:case Js:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xo:case Qs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $c(n){switch(n){case vn:case No:return{byteLength:1,components:1};case Vi:case Bo:case Gi:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case Zn:case aa:case tn:return{byteLength:4,components:1};case Oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);function ol(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jc(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],M=h[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const M=h[m];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$u=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ju=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ah=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ch=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ph=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_h=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ph=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:eu,alphamap_pars_fragment:tu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:ru,aomap_pars_fragment:su,batching_pars_vertex:au,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:fu,bumpmap_pars_fragment:hu,clipping_planes_fragment:du,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:vu,color_pars_vertex:xu,color_vertex:Mu,common:Su,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:bu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:wu,colorspace_fragment:Ru,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Fu,fog_vertex:Uu,fog_pars_vertex:Nu,fog_fragment:Bu,fog_pars_fragment:Ou,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:ku,lights_pars_begin:Gu,lights_toon_fragment:Xu,lights_toon_pars_fragment:Yu,lights_phong_fragment:qu,lights_phong_pars_fragment:Zu,lights_physical_fragment:Ku,lights_physical_pars_fragment:$u,lights_fragment_begin:ju,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:rf,map_fragment:sf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:uf,morphinstance_vertex:ff,morphcolor_vertex:hf,morphnormal_vertex:df,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:vf,normal_pars_vertex:xf,normal_vertex:Mf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Tf,opaque_fragment:Af,packing:wf,premultiplied_alpha_fragment:Rf,project_vertex:Cf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Uf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Bf,skinbase_vertex:Of,skinning_pars_vertex:zf,skinning_vertex:Hf,skinnormal_vertex:Vf,specularmap_fragment:kf,specularmap_pars_fragment:Gf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:qf,uv_pars_fragment:Zf,uv_pars_vertex:Kf,uv_vertex:$f,worldpos_vertex:jf,background_vert:Jf,background_frag:Qf,backgroundCube_vert:eh,backgroundCube_frag:th,cube_vert:nh,cube_frag:ih,depth_vert:rh,depth_frag:sh,distanceRGBA_vert:ah,distanceRGBA_frag:oh,equirect_vert:lh,equirect_frag:ch,linedashed_vert:uh,linedashed_frag:fh,meshbasic_vert:hh,meshbasic_frag:dh,meshlambert_vert:ph,meshlambert_frag:mh,meshmatcap_vert:gh,meshmatcap_frag:_h,meshnormal_vert:vh,meshnormal_frag:xh,meshphong_vert:Mh,meshphong_frag:Sh,meshphysical_vert:yh,meshphysical_frag:Eh,meshtoon_vert:bh,meshtoon_frag:Th,points_vert:Ah,points_frag:wh,shadow_vert:Rh,shadow_frag:Ch,sprite_vert:Ph,sprite_frag:Lh},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},en={basic:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wt([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wt([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};en.physical={uniforms:wt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const mr={r:0,b:0,g:0},Hn=new xn,Dh=new gt;function Ih(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function M(A){let E=!1;const I=g(A);I===null?f(o,l):I&&I.isColor&&(f(I,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,E){const I=g(E);I&&(I.isCubeTexture||I.mapping===Lr)?(u===void 0&&(u=new nn(new qi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:wi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hn.copy(E.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dh.makeRotationFromEuler(Hn)),u.material.toneMapped=Je.getTransfer(I.colorSpace)!==ot,(h!==I||d!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new nn(new Zi(2,2),new Mn({name:"BackgroundMaterial",uniforms:wi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Je.getTransfer(I.colorSpace)!==ot,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,E){A.getRGB(mr,tl(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,E,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:M,addToRenderList:p,dispose:R}}function Fh(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,L,X,B,W){let ne=!1;const K=h(B,X,L);s!==K&&(s=K,c(s.object)),ne=m(x,B,X,W),ne&&g(x,B,X,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,E(x,L,X,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,L,X){const B=X.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let ne=W[L.id];ne===void 0&&(ne={},W[L.id]=ne);let K=ne[B];return K===void 0&&(K=d(l()),ne[B]=K),K}function d(x){const L=[],X=[],B=[];for(let W=0;W<t;W++)L[W]=0,X[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,L,X,B){const W=s.attributes,ne=L.attributes;let K=0;const se=X.getAttributes();for(const Y in se)if(se[Y].location>=0){const xe=W[Y];let Pe=ne[Y];if(Pe===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Pe=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Pe=x.instanceColor)),xe===void 0||xe.attribute!==Pe||Pe&&xe.data!==Pe.data)return!0;K++}return s.attributesNum!==K||s.index!==B}function g(x,L,X,B){const W={},ne=L.attributes;let K=0;const se=X.getAttributes();for(const Y in se)if(se[Y].location>=0){let xe=ne[Y];xe===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor));const Pe={};Pe.attribute=xe,xe&&xe.data&&(Pe.data=xe.data),W[Y]=Pe,K++}s.attributes=W,s.attributesNum=K,s.index=B}function M(){const x=s.newAttributes;for(let L=0,X=x.length;L<X;L++)x[L]=0}function p(x){f(x,0)}function f(x,L){const X=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;X[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),W[x]!==L&&(n.vertexAttribDivisor(x,L),W[x]=L)}function R(){const x=s.newAttributes,L=s.enabledAttributes;for(let X=0,B=L.length;X<B;X++)L[X]!==x[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function A(x,L,X,B,W,ne,K){K===!0?n.vertexAttribIPointer(x,L,X,W,ne):n.vertexAttribPointer(x,L,X,B,W,ne)}function E(x,L,X,B){M();const W=B.attributes,ne=X.getAttributes(),K=L.defaultAttributeValues;for(const se in ne){const Y=ne[se];if(Y.location>=0){let ce=W[se];if(ce===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const xe=ce.normalized,Pe=ce.itemSize,Oe=e.get(ce);if(Oe===void 0)continue;const Qe=Oe.buffer,$=Oe.type,le=Oe.bytesPerElement,Me=$===n.INT||$===n.UNSIGNED_INT||ce.gpuType===aa;if(ce.isInterleavedBufferAttribute){const ue=ce.data,Le=ue.stride,De=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)f(Y.location+ke,ue.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<Y.locationSize;ke++)p(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ke=0;ke<Y.locationSize;ke++)A(Y.location+ke,Pe/Y.locationSize,$,xe,Le*le,(De+Pe/Y.locationSize*ke)*le,Me)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)f(Y.location+ue,ce.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<Y.locationSize;ue++)p(Y.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ue=0;ue<Y.locationSize;ue++)A(Y.location+ue,Pe/Y.locationSize,$,xe,Pe*le,Pe/Y.locationSize*ue*le,Me)}}else if(K!==void 0){const xe=K[se];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(Y.location,xe);break;case 3:n.vertexAttrib3fv(Y.location,xe);break;case 4:n.vertexAttrib4fv(Y.location,xe);break;default:n.vertexAttrib1fv(Y.location,xe)}}}}R()}function I(){F();for(const x in i){const L=i[x];for(const X in L){const B=L[X];for(const W in B)u(B[W].object),delete B[W];delete L[X]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const X in L){const B=L[X];for(const W in B)u(B[W].object),delete B[W];delete L[X]}delete i[x.id]}function b(x){for(const L in i){const X=i[L];if(X[x.id]===void 0)continue;const B=X[x.id];for(const W in B)u(B[W].object),delete B[W];delete X[x.id]}}function F(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:p,disableUnusedAttributes:R}}function Uh(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*d[M];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nh(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Xt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const F=b===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==vn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==tn&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:I,maxSamples:T}}function Bh(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new kn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const R=s?0:i,A=R*4;let E=f.clippingState||null;l.value=E,E=u(g,d,A,m);for(let I=0;I!==A;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,g){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const f=m+M*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,E=m;A!==M;++A,E+=4)a.copy(h[A]).applyMatrix4(R,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Oh(n){let e=new WeakMap;function t(a,o){return o===As?a.mapping=Ei:o===ws&&(a.mapping=bi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===As||o===ws)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vc(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vi=4,qa=[.125,.215,.35,.446,.526,.582],Xn=20,ss=new al,Za=new tt;let as=null,os=0,ls=0,cs=!1;const Gn=(1+Math.sqrt(5))/2,pi=1/Gn,Ka=[new G(-Gn,pi,0),new G(Gn,pi,0),new G(-pi,0,Gn),new G(pi,0,Gn),new G(0,Gn,-pi),new G(0,Gn,pi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class $a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,os,ls),this._renderer.xr.enabled=cs,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Gi,format:Xt,colorSpace:Kn,depthBuffer:!1},r=ja(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(s)),this._blurMaterial=Hh(s,e,t)}return r}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,ss)}_sceneToCubeUV(e,t,i,r){const o=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Za),u.toneMapping=Ln,u.autoClear=!1;const m=new Jo({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new nn(new qi,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Za),M=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):R===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const A=this._cubeSize;gr(r,R*A,f>2?A:0,A,A),u.setRenderTarget(r),M&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ss)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ka[(r-s-1)%Ka.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),M=s/g,p=isFinite(s)?1+Math.floor(u*M):Xn;p>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const f=[];let R=0;for(let b=0;b<Xn;++b){const F=b/M,S=Math.exp(-F*F/2);f.push(S),b===0?R+=S:b<p&&(R+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/R;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;const E=this._sizeLods[r],I=3*E*(r>A-vi?r-A+vi:0),T=4*(this._cubeSize-E);gr(t,I,T,3*E,2*E),l.setRenderTarget(t),l.render(h,ss)}}function zh(n){const e=[],t=[],i=[];let r=n;const s=n-vi+1+qa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vi?l=qa[a-n+vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,M=3,p=2,f=1,R=new Float32Array(M*g*m),A=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,F=T>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];R.set(S,M*g*T),A.set(d,p*g*T);const x=[T,T,T,T,T,T];E.set(x,f*g*T)}const I=new jn;I.setAttribute("position",new sn(R,M)),I.setAttribute("uv",new sn(A,p)),I.setAttribute("faceIndex",new sn(E,f)),e.push(I),r>vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ja(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Hh(n,e,t){const i=new Float32Array(Xn),r=new G(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ja(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qa(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vh(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===As||l===ws,u=l===Ei||l===bi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $a(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new $a(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function kh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_i("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gh(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,g=h.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let A=0,E=R.length;A<E;A+=3){const I=R[A+0],T=R[A+1],b=R[A+2];d.push(I,T,T,b,b,I)}}else if(g!==void 0){const R=g.array;M=g.version;for(let A=0,E=R.length/3-1;A<E;A+=3){const I=A+0,T=A+1,b=A+2;d.push(I,T,T,b,b,I)}}else return;const p=new(qo(d)?el:Qo)(d,1);p.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Wh(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function h(d,m,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,g);let f=0;for(let R=0;R<g;R++)f+=m[R]*M[R];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yh(n,e,t){const i=new WeakMap,r=new dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let E=o.attributes.position.count*A,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*I*4*h),b=new Ko(T,E,I,h);b.type=tn,b.needsUpdate=!0;const F=A*4;for(let x=0;x<h;x++){const L=p[x],X=f[x],B=R[x],W=E*I*4*x;for(let ne=0;ne<L.count;ne++){const K=ne*F;m===!0&&(r.fromBufferAttribute(L,ne),T[W+K+0]=r.x,T[W+K+1]=r.y,T[W+K+2]=r.z,T[W+K+3]=0),g===!0&&(r.fromBufferAttribute(X,ne),T[W+K+4]=r.x,T[W+K+5]=r.y,T[W+K+6]=r.z,T[W+K+7]=0),M===!0&&(r.fromBufferAttribute(B,ne),T[W+K+8]=r.x,T[W+K+9]=r.y,T[W+K+10]=r.z,T[W+K+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new st(E,I)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function qh(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ll=new St,eo=new sl(1,1),cl=new Ko,ul=new bc,fl=new il,to=[],no=[],io=new Float32Array(16),ro=new Float32Array(9),so=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=to[r];if(s===void 0&&(s=new Float32Array(r),to[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=no[e];t===void 0&&(t=new Int32Array(e),no[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function $h(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function jh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Jh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;so.set(i),n.uniformMatrix2fv(this.addr,!1,so),vt(t,i)}}function Qh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;ro.set(i),n.uniformMatrix3fv(this.addr,!1,ro),vt(t,i)}}function ed(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;io.set(i),n.uniformMatrix4fv(this.addr,!1,io),vt(t,i)}}function td(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function id(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function rd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function sd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ad(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function od(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function ld(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function cd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eo.compareFunction=Yo,s=eo):s=ll,t.setTexture2D(e||s,r)}function ud(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ul,r)}function fd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fl,r)}function hd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cl,r)}function dd(n){switch(n){case 5126:return Zh;case 35664:return Kh;case 35665:return $h;case 35666:return jh;case 35674:return Jh;case 35675:return Qh;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return id;case 35669:case 35673:return rd;case 5125:return sd;case 36294:return ad;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return ud;case 35680:case 36300:case 36308:case 36293:return fd;case 36289:case 36303:case 36311:case 36292:return hd}}function pd(n,e){n.uniform1fv(this.addr,e)}function md(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function gd(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function _d(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function vd(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xd(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Md(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sd(n,e){n.uniform1iv(this.addr,e)}function yd(n,e){n.uniform2iv(this.addr,e)}function Ed(n,e){n.uniform3iv(this.addr,e)}function bd(n,e){n.uniform4iv(this.addr,e)}function Td(n,e){n.uniform1uiv(this.addr,e)}function Ad(n,e){n.uniform2uiv(this.addr,e)}function wd(n,e){n.uniform3uiv(this.addr,e)}function Rd(n,e){n.uniform4uiv(this.addr,e)}function Cd(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ll,s[a])}function Pd(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ul,s[a])}function Ld(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fl,s[a])}function Dd(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cl,s[a])}function Id(n){switch(n){case 5126:return pd;case 35664:return md;case 35665:return gd;case 35666:return _d;case 35674:return vd;case 35675:return xd;case 35676:return Md;case 5124:case 35670:return Sd;case 35667:case 35671:return yd;case 35668:case 35672:return Ed;case 35669:case 35673:return bd;case 5125:return Td;case 36294:return Ad;case 36295:return wd;case 36296:return Rd;case 35678:case 36198:case 36298:case 36306:case 35682:return Cd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Dd}}class Fd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dd(t.type)}}class Ud{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Id(t.type)}}class Nd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const us=/(\w+)(\])?(\[|\.)?/g;function ao(n,e){n.seq.push(e),n.map[e.id]=e}function Bd(n,e,t){const i=n.name,r=i.length;for(us.lastIndex=0;;){const s=us.exec(i),a=us.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ao(t,c===void 0?new Fd(o,n,e):new Ud(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Nd(o),ao(t,h)),t=h}}}class Ar{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Bd(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function oo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Od=37297;let zd=0;function Hd(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const lo=new We;function Vd(n){Je._getMatrix(lo,Je.workingColorSpace,n);const e=`mat3( ${lo.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Rr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function co(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hd(n.getShaderSource(e),a)}else return r}function kd(n,e){const t=Vd(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gd(n,e){let t;switch(e){case Kl:t="Linear";break;case $l:t="Reinhard";break;case jl:t="Cineon";break;case Jl:t="ACESFilmic";break;case ec:t="AgX";break;case tc:t="Neutral";break;case Ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new G;function Wd(){Je.getLuminanceCoefficients(_r);const n=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xd(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Yd(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qd(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zi(n){return n!==""}function uo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(Zd,$d)}const Kd=new Map;function $d(n,e){let t=Xe[e];if(t===void 0){const i=Kd.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(n){return n.replace(jd,Jd)}function Jd(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function po(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qd(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case bi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===bi&&(e="ENVMAP_MODE_REFRACTION"),e}function np(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function ip(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qd(t),c=ep(t),u=tp(t),h=np(t),d=ip(t),m=Xd(t),g=Yd(s),M=r.createProgram();let p,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),f.length>0&&(f+=`
`)):(p=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),f=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,kd("linearToOutputTexel",t.outputColorSpace),Wd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=ia(a),a=uo(a,t),a=fo(a,t),o=ia(o),o=uo(o,t),o=fo(o,t),a=ho(a),o=ho(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=R+p+a,E=R+f+o,I=oo(r,r.VERTEX_SHADER,A),T=oo(r,r.FRAGMENT_SHADER,E);r.attachShader(M,I),r.attachShader(M,T),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(L){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(M).trim(),B=r.getShaderInfoLog(I).trim(),W=r.getShaderInfoLog(T).trim();let ne=!0,K=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,I,T);else{const se=co(r,I,"vertex"),Y=co(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+se+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||W==="")&&(K=!1);K&&(L.diagnostics={runnable:ne,programLog:X,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:f}})}r.deleteShader(I),r.deleteShader(T),F=new Ar(r,M),S=qd(r,M)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Od)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zd++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=T,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new op(e),t.set(e,i)),i}}class op{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function lp(n,e,t,i,r,s,a){const o=new $o,l=new ap,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,L,X,B){const W=X.fog,ne=B.geometry,K=S.isMeshStandardMaterial?X.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),Y=se&&se.mapping===Lr?se.image.height:null,ce=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pe=xe!==void 0?xe.length:0;let Oe=0;ne.morphAttributes.position!==void 0&&(Oe=1),ne.morphAttributes.normal!==void 0&&(Oe=2),ne.morphAttributes.color!==void 0&&(Oe=3);let Qe,$,le,Me;if(ce){const $e=en[ce];Qe=$e.vertexShader,$=$e.fragmentShader}else Qe=S.vertexShader,$=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const ue=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,at=!!S.map,_e=!!S.matcap,lt=!!se,P=!!S.aoMap,C=!!S.lightMap,w=!!S.bumpMap,j=!!S.normalMap,H=!!S.displacementMap,Ae=!!S.emissiveMap,fe=!!S.metalnessMap,y=!!S.roughnessMap,_=S.anisotropy>0,O=S.clearcoat>0,Q=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,Ce=S.transmission>0,he=_&&!!S.anisotropyMap,Se=O&&!!S.clearcoatMap,Ke=O&&!!S.clearcoatNormalMap,oe=O&&!!S.clearcoatRoughnessMap,ye=te&&!!S.iridescenceMap,Ue=te&&!!S.iridescenceThicknessMap,Be=J&&!!S.sheenColorMap,Ee=J&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Ge=!!S.specularColorMap,rt=!!S.specularIntensityMap,D=Ce&&!!S.transmissionMap,de=Ce&&!!S.thicknessMap,q=!!S.gradientMap,ee=!!S.alphaMap,ge=S.alphaTest>0,pe=!!S.alphaHash,ze=!!S.extensions;let ct=Ln;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ct=n.toneMapping);const ht={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:$,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Kn,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:_e,envMap:lt,envMapMode:lt&&se.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:C,bumpMap:w,normalMap:j,displacementMap:d&&H,emissiveMap:Ae,normalMapObjectSpace:j&&S.normalMapType===ac,normalMapTangentSpace:j&&S.normalMapType===sc,metalnessMap:fe,roughnessMap:y,anisotropy:_,anisotropyMap:he,clearcoat:O,clearcoatMap:Se,clearcoatNormalMap:Ke,clearcoatRoughnessMap:oe,dispersion:Q,iridescence:te,iridescenceMap:ye,iridescenceThicknessMap:Ue,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Ee,specularMap:Ye,specularColorMap:Ge,specularIntensityMap:rt,transmission:Ce,transmissionMap:D,thicknessMap:de,gradientMap:q,opaque:S.transparent===!1&&S.blending===xi&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:pe,combine:S.combine,mapUv:at&&M(S.map.channel),aoMapUv:P&&M(S.aoMap.channel),lightMapUv:C&&M(S.lightMap.channel),bumpMapUv:w&&M(S.bumpMap.channel),normalMapUv:j&&M(S.normalMap.channel),displacementMapUv:H&&M(S.displacementMap.channel),emissiveMapUv:Ae&&M(S.emissiveMap.channel),metalnessMapUv:fe&&M(S.metalnessMap.channel),roughnessMapUv:y&&M(S.roughnessMap.channel),anisotropyMapUv:he&&M(S.anisotropyMap.channel),clearcoatMapUv:Se&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&M(S.sheenRoughnessMap.channel),specularMapUv:Ye&&M(S.specularMap.channel),specularColorMapUv:Ge&&M(S.specularColorMap.channel),specularIntensityMapUv:rt&&M(S.specularIntensityMap.channel),transmissionMapUv:D&&M(S.transmissionMap.channel),thicknessMapUv:de&&M(S.thicknessMap.channel),alphaMapUv:ee&&M(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(j||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(at||ee),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)x.push(L),x.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(R(x,S),A(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function R(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function A(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const x=g[S.type];let L;if(x){const X=en[x];L=Bc.clone(X.uniforms)}else L=S.uniforms;return L}function I(S,x){let L;for(let X=0,B=u.length;X<B;X++){const W=u[X];if(W.cacheKey===x){L=W,++L.usedTimes;break}}return L===void 0&&(L=new rp(n,x,S,s),u.push(L)),L}function T(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:F}}function cp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function up(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function go(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,m,g,M,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:M,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=p),e++,f}function o(h,d,m,g,M,p){const f=a(h,d,m,g,M,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,g,M,p){const f=a(h,d,m,g,M,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||up),i.length>1&&i.sort(d||mo),r.length>1&&r.sort(d||mo)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function fp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new go,n.set(i,[a])):r>=s.length?(a=new go,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new tt};break;case"SpotLight":t={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function dp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pp=0;function mp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gp(n){const e=new hp,t=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new gt,a=new gt;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,R=0,A=0,E=0,I=0,T=0,b=0;c.sort(mp);for(let S=0,x=c.length;S<x;S++){const L=c[S],X=L.color,B=L.intensity,W=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=X.r*B,h+=X.g*B,d+=X.b*B;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],B);b++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=L.shadow.matrix,R++}i.directional[m]=K,m++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(X).multiplyScalar(B),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[M]=K;const se=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,se.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[M]=se.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.spotShadow[M]=Y,i.spotShadowMap[M]=ne,E++}M++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(X).multiplyScalar(B),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=K,p++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const se=L.shadow,Y=t.get(L);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=L.shadow.matrix,A++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(B),K.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[f]=K,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==R||F.numPointShadows!==A||F.numSpotShadows!==E||F.numSpotMaps!==I||F.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,F.directionalLength=m,F.pointLength=g,F.spotLength=M,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=R,F.numPointShadows=A,F.numSpotShadows=E,F.numSpotMaps=I,F.numLightProbes=b,i.version=pp++)}function l(c,u){let h=0,d=0,m=0,g=0,M=0;const p=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const A=c[f];if(A.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(A.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:i}}function _o(n){const e=new gp(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _p(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _o(n),e.set(r,[o])):s>=a.length?(o=new _o(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mp(n,e,t){let i=new rl;const r=new st,s=new st,a=new dt,o=new qc({depthPacking:rc}),l=new Zc,c={},u=t.maxTextureSize,h={[In]:It,[It]:In,[mn]:mn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:vp,fragmentShader:xp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new nn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(T,b,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Pn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=f!==pn&&this.type===pn,W=f===pn&&this.type!==pn;for(let ne=0,K=T.length;ne<K;ne++){const se=T[ne],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ce=Y.getFrameExtents();if(r.multiply(ce),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,Y.mapSize.y=s.y)),Y.map===null||B===!0||W===!0){const Pe=this.type!==pn?{minFilter:Ct,magFilter:Ct}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $n(r.x,r.y,Pe),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const xe=Y.getViewportCount();for(let Pe=0;Pe<xe;Pe++){const Oe=Y.getViewport(Pe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),X.viewport(a),Y.updateMatrices(se,Pe),i=Y.getFrustum(),E(b,F,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===pn&&R(Y,F),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,x,L)};function R(T,b){const F=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,F,d,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,F,m,M,null)}function A(T,b,F,S){let x=null;const L=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)x=L;else if(x=F.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const X=x.uuid,B=b.uuid;let W=c[X];W===void 0&&(W={},c[X]=W);let ne=W[B];ne===void 0&&(ne=x.clone(),W[B]=ne,b.addEventListener("dispose",I)),x=ne}if(x.visible=b.visible,x.wireframe=b.wireframe,S===pn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=n.properties.get(x);X.light=F}return x}function E(T,b,F,S,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===pn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const B=e.update(T),W=T.material;if(Array.isArray(W)){const ne=B.groups;for(let K=0,se=ne.length;K<se;K++){const Y=ne[K],ce=W[Y.materialIndex];if(ce&&ce.visible){const xe=A(T,ce,S,x);T.onBeforeShadow(n,T,b,F,B,xe,Y),n.renderBufferDirect(F,null,B,xe,T,Y),T.onAfterShadow(n,T,b,F,B,xe,Y)}}}else if(W.visible){const ne=A(T,W,S,x);T.onBeforeShadow(n,T,b,F,B,ne,null),n.renderBufferDirect(F,null,B,ne,T,null),T.onAfterShadow(n,T,b,F,B,ne,null)}}const X=T.children;for(let B=0,W=X.length;B<W;B++)E(X[B],b,F,S,x)}function I(T){T.target.removeEventListener("dispose",I);for(const F in c){const S=c[F],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Sp={[xs]:Ms,[Ss]:bs,[ys]:Ts,[yi]:Es,[Ms]:xs,[bs]:Ss,[Ts]:ys,[Es]:yi};function yp(n,e){function t(){let D=!1;const de=new dt;let q=null;const ee=new dt(0,0,0,0);return{setMask:function(ge){q!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,pe,ze,ct,ht){ht===!0&&(ge*=ct,pe*=ct,ze*=ct),de.set(ge,pe,ze,ct),ee.equals(de)===!1&&(n.clearColor(ge,pe,ze,ct),ee.copy(de))},reset:function(){D=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let D=!1,de=!1,q=null,ee=null,ge=null;return{setReversed:function(pe){if(de!==pe){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ct=ge;ge=null,this.setClear(ct)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ue(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(pe){q!==pe&&!D&&(n.depthMask(pe),q=pe)},setFunc:function(pe){if(de&&(pe=Sp[pe]),ee!==pe){switch(pe){case xs:n.depthFunc(n.NEVER);break;case Ms:n.depthFunc(n.ALWAYS);break;case Ss:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case ys:n.depthFunc(n.EQUAL);break;case Es:n.depthFunc(n.GEQUAL);break;case bs:n.depthFunc(n.GREATER);break;case Ts:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){D=!1,q=null,ee=null,ge=null,de=!1}}}function r(){let D=!1,de=null,q=null,ee=null,ge=null,pe=null,ze=null,ct=null,ht=null;return{setTest:function($e){D||($e?ue(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function($e){de!==$e&&!D&&(n.stencilMask($e),de=$e)},setFunc:function($e,yt,Ht){(q!==$e||ee!==yt||ge!==Ht)&&(n.stencilFunc($e,yt,Ht),q=$e,ee=yt,ge=Ht)},setOp:function($e,yt,Ht){(pe!==$e||ze!==yt||ct!==Ht)&&(n.stencilOp($e,yt,Ht),pe=$e,ze=yt,ct=Ht)},setLocked:function($e){D=$e},setClear:function($e){ht!==$e&&(n.clearStencil($e),ht=$e)},reset:function(){D=!1,de=null,q=null,ee=null,ge=null,pe=null,ze=null,ct=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,R=null,A=null,E=null,I=null,T=null,b=new tt(0,0,0),F=0,S=!1,x=null,L=null,X=null,B=null,W=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=se>=2);let ce=null,xe={};const Pe=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Qe=new dt().fromArray(Pe),$=new dt().fromArray(Oe);function le(D,de,q,ee){const ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(D,pe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<q;ze++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(de+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}const Me={};Me[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),a.setFunc(yi),w(!1),j(Sa),ue(n.CULL_FACE),P(Pn);function ue(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Le(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function De(D,de){return h[D]!==de?(n.bindFramebuffer(D,de),h[D]=de,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ke(D,de){let q=m,ee=!1;if(D){q=d.get(de),q===void 0&&(q=[],d.set(de,q));const ge=D.textures;if(q.length!==ge.length||q[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)q[pe]=n.COLOR_ATTACHMENT0+pe;q.length=ge.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function at(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const _e={[Wn]:n.FUNC_ADD,[Pl]:n.FUNC_SUBTRACT,[Ll]:n.FUNC_REVERSE_SUBTRACT};_e[Dl]=n.MIN,_e[Il]=n.MAX;const lt={[Fl]:n.ZERO,[Ul]:n.ONE,[Nl]:n.SRC_COLOR,[_s]:n.SRC_ALPHA,[kl]:n.SRC_ALPHA_SATURATE,[Hl]:n.DST_COLOR,[Ol]:n.DST_ALPHA,[Bl]:n.ONE_MINUS_SRC_COLOR,[vs]:n.ONE_MINUS_SRC_ALPHA,[Vl]:n.ONE_MINUS_DST_COLOR,[zl]:n.ONE_MINUS_DST_ALPHA,[Gl]:n.CONSTANT_COLOR,[Wl]:n.ONE_MINUS_CONSTANT_COLOR,[Xl]:n.CONSTANT_ALPHA,[Yl]:n.ONE_MINUS_CONSTANT_ALPHA};function P(D,de,q,ee,ge,pe,ze,ct,ht,$e){if(D===Pn){M===!0&&(Le(n.BLEND),M=!1);return}if(M===!1&&(ue(n.BLEND),M=!0),D!==Cl){if(D!==p||$e!==S){if((f!==Wn||E!==Wn)&&(n.blendEquation(n.FUNC_ADD),f=Wn,E=Wn),$e)switch(D){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFunc(n.ONE,n.ONE);break;case Ea:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ea:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}R=null,A=null,I=null,T=null,b.set(0,0,0),F=0,p=D,S=$e}return}ge=ge||de,pe=pe||q,ze=ze||ee,(de!==f||ge!==E)&&(n.blendEquationSeparate(_e[de],_e[ge]),f=de,E=ge),(q!==R||ee!==A||pe!==I||ze!==T)&&(n.blendFuncSeparate(lt[q],lt[ee],lt[pe],lt[ze]),R=q,A=ee,I=pe,T=ze),(ct.equals(b)===!1||ht!==F)&&(n.blendColor(ct.r,ct.g,ct.b,ht),b.copy(ct),F=ht),p=D,S=!1}function C(D,de){D.side===mn?Le(n.CULL_FACE):ue(n.CULL_FACE);let q=D.side===It;de&&(q=!q),w(q),D.blending===xi&&D.transparent===!1?P(Pn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ee=D.stencilWrite;o.setTest(ee),ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function w(D){x!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),x=D)}function j(D){D!==Al?(ue(n.CULL_FACE),D!==L&&(D===Sa?n.cullFace(n.BACK):D===wl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),L=D}function H(D){D!==X&&(K&&n.lineWidth(D),X=D)}function Ae(D,de,q){D?(ue(n.POLYGON_OFFSET_FILL),(B!==de||W!==q)&&(n.polygonOffset(de,q),B=de,W=q)):Le(n.POLYGON_OFFSET_FILL)}function fe(D){D?ue(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function y(D){D===void 0&&(D=n.TEXTURE0+ne-1),ce!==D&&(n.activeTexture(D),ce=D)}function _(D,de,q){q===void 0&&(ce===null?q=n.TEXTURE0+ne-1:q=ce);let ee=xe[q];ee===void 0&&(ee={type:void 0,texture:void 0},xe[q]=ee),(ee.type!==D||ee.texture!==de)&&(ce!==q&&(n.activeTexture(q),ce=q),n.bindTexture(D,de||Me[D]),ee.type=D,ee.texture=de)}function O(){const D=xe[ce];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(D){Qe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Qe.copy(D))}function Ee(D){$.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Ye(D,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let ee=q.get(D);ee===void 0&&(ee=n.getUniformBlockIndex(de,D.name),q.set(D,ee))}function Ge(D,de){const ee=c.get(de).get(D);l.get(de)!==ee&&(n.uniformBlockBinding(de,ee,D.__bindingPointIndex),l.set(de,ee))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,xe={},h={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,R=null,A=null,E=null,I=null,T=null,b=new tt(0,0,0),F=0,S=!1,x=null,L=null,X=null,B=null,W=null,Qe.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Le,bindFramebuffer:De,drawBuffers:ke,useProgram:at,setBlending:P,setMaterial:C,setFlipSided:w,setCullFace:j,setLineWidth:H,setPolygonOffset:Ae,setScissorTest:fe,activeTexture:y,bindTexture:_,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ye,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:Se,scissor:Be,viewport:Ee,reset:rt}}function Ep(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):Pr("canvas")}function M(y,_,O){let Q=1;const te=fe(y);if((te.width>O||te.height>O)&&(Q=O/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const J=Math.floor(Q*te.width),Ce=Math.floor(Q*te.height);h===void 0&&(h=g(J,Ce));const he=_?g(J,Ce):h;return he.width=J,he.height=Ce,he.getContext("2d").drawImage(y,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ce+")."),he}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),y;return y}function p(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,_,O,Q,te=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===n.RED&&(O===n.FLOAT&&(J=n.R32F),O===n.HALF_FLOAT&&(J=n.R16F),O===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.R8UI),O===n.UNSIGNED_SHORT&&(J=n.R16UI),O===n.UNSIGNED_INT&&(J=n.R32UI),O===n.BYTE&&(J=n.R8I),O===n.SHORT&&(J=n.R16I),O===n.INT&&(J=n.R32I)),_===n.RG&&(O===n.FLOAT&&(J=n.RG32F),O===n.HALF_FLOAT&&(J=n.RG16F),O===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RG8UI),O===n.UNSIGNED_SHORT&&(J=n.RG16UI),O===n.UNSIGNED_INT&&(J=n.RG32UI),O===n.BYTE&&(J=n.RG8I),O===n.SHORT&&(J=n.RG16I),O===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGB8UI),O===n.UNSIGNED_SHORT&&(J=n.RGB16UI),O===n.UNSIGNED_INT&&(J=n.RGB32UI),O===n.BYTE&&(J=n.RGB8I),O===n.SHORT&&(J=n.RGB16I),O===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),O===n.UNSIGNED_INT&&(J=n.RGBA32UI),O===n.BYTE&&(J=n.RGBA8I),O===n.SHORT&&(J=n.RGBA16I),O===n.INT&&(J=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),_===n.RGBA){const Ce=te?Rr:Je.getTransfer(Q);O===n.FLOAT&&(J=n.RGBA32F),O===n.HALF_FLOAT&&(J=n.RGBA16F),O===n.UNSIGNED_BYTE&&(J=Ce===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(y,_){let O;return y?_===null||_===Zn||_===Ti?O=n.DEPTH24_STENCIL8:_===tn?O=n.DEPTH32F_STENCIL8:_===Vi&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zn||_===Ti?O=n.DEPTH_COMPONENT24:_===tn?O=n.DEPTH_COMPONENT32F:_===Vi&&(O=n.DEPTH_COMPONENT16),O}function I(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ct&&y.minFilter!==Tt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function T(y){const _=y.target;_.removeEventListener("dispose",T),F(_),_.isVideoTexture&&u.delete(_)}function b(y){const _=y.target;_.removeEventListener("dispose",b),x(_)}function F(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,Q=d.get(O);if(Q){const te=Q[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(y),Object.keys(Q).length===0&&d.delete(O)}i.remove(y)}function S(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const O=y.source,Q=d.get(O);delete Q[_.__cacheKey],a.memory.textures--}function x(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let te=0;te<_.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=y.textures;for(let Q=0,te=O.length;Q<te;Q++){const J=i.get(O[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(O[Q])}i.remove(y)}let L=0;function X(){L=0}function B(){const y=L;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function W(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function ne(y,_){const O=i.get(y);if(y.isVideoTexture&&H(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,y,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function K(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){$(O,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function se(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){$(O,y,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function Y(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){le(O,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const ce={[Rs]:n.REPEAT,[Ot]:n.CLAMP_TO_EDGE,[Cs]:n.MIRRORED_REPEAT},xe={[Ct]:n.NEAREST,[nc]:n.NEAREST_MIPMAP_NEAREST,[$i]:n.NEAREST_MIPMAP_LINEAR,[Tt]:n.LINEAR,[Nr]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},Pe={[oc]:n.NEVER,[dc]:n.ALWAYS,[lc]:n.LESS,[Yo]:n.LEQUAL,[cc]:n.EQUAL,[hc]:n.GEQUAL,[uc]:n.GREATER,[fc]:n.NOTEQUAL};function Oe(y,_){if(_.type===tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tt||_.magFilter===Nr||_.magFilter===$i||_.magFilter===Yn||_.minFilter===Tt||_.minFilter===Nr||_.minFilter===$i||_.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ce[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,xe[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==$i&&_.minFilter!==Yn||_.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",T));const Q=_.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const J=W(_);if(J!==y.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[J].usedTimes++;const Ce=te[y.__cacheKey];Ce!==void 0&&(te[y.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(_)),y.__cacheKey=J,y.__webglTexture=te[J].texture}return O}function $(y,_,O){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Qe(y,_),J=_.source;t.bindTexture(Q,y.__webglTexture,n.TEXTURE0+O);const Ce=i.get(J);if(J.version!==Ce.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const he=Je.getPrimaries(Je.workingColorSpace),Se=_.colorSpace===Jt?null:Je.getPrimaries(_.colorSpace),Ke=_.colorSpace===Jt||he===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=M(_.image,!1,r.maxTextureSize);oe=Ae(_,oe);const ye=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type);let Be=A(_.internalFormat,ye,Ue,_.colorSpace,_.isVideoTexture);Oe(Q,_);let Ee;const Ye=_.mipmaps,Ge=_.isVideoTexture!==!0,rt=Ce.__version===void 0||te===!0,D=J.dataReady,de=I(_,oe);if(_.isDepthTexture)Be=E(_.format===Ai,_.type),rt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ye,Ue,null));else if(_.isDataTexture)if(Ye.length>0){Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,de,Be,Ye[0].width,Ye[0].height);for(let q=0,ee=Ye.length;q<ee;q++)Ee=Ye[q],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,q,Be,Ee.width,Ee.height,0,ye,Ue,Ee.data);_.generateMipmaps=!1}else Ge?(rt&&t.texStorage2D(n.TEXTURE_2D,de,Be,oe.width,oe.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,Ue,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,ye,Ue,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Be,Ye[0].width,Ye[0].height,oe.depth);for(let q=0,ee=Ye.length;q<ee;q++)if(Ee=Ye[q],_.format!==Xt)if(ye!==null)if(Ge){if(D)if(_.layerUpdates.size>0){const ge=Ya(Ee.width,Ee.height,_.format,_.type);for(const pe of _.layerUpdates){const ze=Ee.data.subarray(pe*ge/Ee.data.BYTES_PER_ELEMENT,(pe+1)*ge/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,pe,Ee.width,Ee.height,1,ye,ze)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,oe.depth,ye,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Be,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,oe.depth,ye,Ue,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Be,Ee.width,Ee.height,oe.depth,0,ye,Ue,Ee.data)}else{Ge&&rt&&t.texStorage2D(n.TEXTURE_2D,de,Be,Ye[0].width,Ye[0].height);for(let q=0,ee=Ye.length;q<ee;q++)Ee=Ye[q],_.format!==Xt?ye!==null?Ge?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,q,Be,Ee.width,Ee.height,0,ye,Ue,Ee.data)}else if(_.isDataArrayTexture)if(Ge){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Be,oe.width,oe.height,oe.depth),D)if(_.layerUpdates.size>0){const q=Ya(oe.width,oe.height,_.format,_.type);for(const ee of _.layerUpdates){const ge=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,ye,Ue,ge)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ue,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,ye,Ue,oe.data);else if(_.isData3DTexture)Ge?(rt&&t.texStorage3D(n.TEXTURE_3D,de,Be,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,ye,Ue,oe.data);else if(_.isFramebufferTexture){if(rt)if(Ge)t.texStorage2D(n.TEXTURE_2D,de,Be,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let ge=0;ge<de;ge++)t.texImage2D(n.TEXTURE_2D,ge,Be,q,ee,0,ye,Ue,null),q>>=1,ee>>=1}}else if(Ye.length>0){if(Ge&&rt){const q=fe(Ye[0]);t.texStorage2D(n.TEXTURE_2D,de,Be,q.width,q.height)}for(let q=0,ee=Ye.length;q<ee;q++)Ee=Ye[q],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye,Ue,Ee):t.texImage2D(n.TEXTURE_2D,q,Be,ye,Ue,Ee);_.generateMipmaps=!1}else if(Ge){if(rt){const q=fe(oe);t.texStorage2D(n.TEXTURE_2D,de,Be,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ue,oe)}else t.texImage2D(n.TEXTURE_2D,0,Be,ye,Ue,oe);p(_)&&f(Q),Ce.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function le(y,_,O){if(_.image.length!==6)return;const Q=Qe(y,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const J=i.get(te);if(te.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const Ce=Je.getPrimaries(Je.workingColorSpace),he=_.colorSpace===Jt?null:Je.getPrimaries(_.colorSpace),Se=_.colorSpace===Jt||Ce===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ke=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ke&&!oe?ye[ee]=M(_.image[ee],!0,r.maxCubemapSize):ye[ee]=oe?_.image[ee].image:_.image[ee],ye[ee]=Ae(_,ye[ee]);const Ue=ye[0],Be=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type),Ye=A(_.internalFormat,Be,Ee,_.colorSpace),Ge=_.isVideoTexture!==!0,rt=J.__version===void 0||Q===!0,D=te.dataReady;let de=I(_,Ue);Oe(n.TEXTURE_CUBE_MAP,_);let q;if(Ke){Ge&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ye,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){q=ye[ee].mipmaps;for(let ge=0;ge<q.length;ge++){const pe=q[ge];_.format!==Xt?Be!==null?Ge?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Be,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Be,Ee,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ye,pe.width,pe.height,0,Be,Ee,pe.data)}}}else{if(q=_.mipmaps,Ge&&rt){q.length>0&&de++;const ee=fe(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Be,Ee,ye[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ye[ee].width,ye[ee].height,0,Be,Ee,ye[ee].data);for(let ge=0;ge<q.length;ge++){const ze=q[ge].image[ee].image;Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,ze.width,ze.height,Be,Ee,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ye,ze.width,ze.height,0,Be,Ee,ze.data)}}else{Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Be,Ee,ye[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Be,Ee,ye[ee]);for(let ge=0;ge<q.length;ge++){const pe=q[ge];Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Be,Ee,pe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ye,Be,Ee,pe.image[ee])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),J.__version=te.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Me(y,_,O,Q,te,J){const Ce=s.convert(O.format,O.colorSpace),he=s.convert(O.type),Se=A(O.internalFormat,Ce,he,O.colorSpace),Ke=i.get(_),oe=i.get(O);if(oe.__renderTarget=_,!Ke.__hasExternalTextures){const ye=Math.max(1,_.width>>J),Ue=Math.max(1,_.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Se,ye,Ue,_.depth,0,Ce,he,null):t.texImage2D(te,J,Se,ye,Ue,0,Ce,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),j(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,oe.__webglTexture,0,w(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(y,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const Q=_.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=E(_.stencilBuffer,te),Ce=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=w(_);j(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,J,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,y)}else{const Q=_.textures;for(let te=0;te<Q.length;te++){const J=Q[te],Ce=s.convert(J.format,J.colorSpace),he=s.convert(J.type),Se=A(J.internalFormat,Ce,he,J.colorSpace),Ke=w(_);O&&j(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Se,_.width,_.height):j(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const te=Q.__webglTexture,J=w(_);if(_.depthTexture.format===Mi)j(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===Ai)j(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function De(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Le(_.__webglFramebuffer,y)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=n.createRenderbuffer(),ue(_.__webglDepthbuffer[Q],y,!1);else{const te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ue(_.__webglDepthbuffer,y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(y,_,O){const Q=i.get(y);_!==void 0&&Me(Q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&De(y)}function at(y){const _=y.texture,O=i.get(y),Q=i.get(_);y.addEventListener("dispose",b);const te=y.textures,J=y.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,a.memory.textures++),J){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Se=0;Se<_.mipmaps.length;Se++)O.__webglFramebuffer[he][Se]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let he=0,Se=te.length;he<Se;he++){const Ke=i.get(te[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&j(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Se=te[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Ke=s.convert(Se.format,Se.colorSpace),oe=s.convert(Se.type),ye=A(Se.internalFormat,Ke,oe,Se.colorSpace,y.isXRRenderTarget===!0),Ue=w(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Me(O.__webglFramebuffer[he][Se],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else Me(O.__webglFramebuffer[he],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,Se=te.length;he<Se;he++){const Ke=te[he],oe=i.get(Ke);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Oe(n.TEXTURE_2D,Ke),Me(O.__webglFramebuffer,y,Ke,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),p(Ke)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(he=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),Oe(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)Me(O.__webglFramebuffer[Se],y,_,n.COLOR_ATTACHMENT0,he,Se);else Me(O.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,he,0);p(_)&&f(he),t.unbindTexture()}y.depthBuffer&&De(y)}function _e(y){const _=y.textures;for(let O=0,Q=_.length;O<Q;O++){const te=_[O];if(p(te)){const J=R(y),Ce=i.get(te).__webglTexture;t.bindTexture(J,Ce),f(J),t.unbindTexture()}}}const lt=[],P=[];function C(y){if(y.samples>0){if(j(y)===!1){const _=y.textures,O=y.width,Q=y.height;let te=n.COLOR_BUFFER_BIT;const J=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(y),he=_.length>1;if(he)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const Ke=i.get(_[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,te,n.NEAREST),l===!0&&(lt.length=0,P.length=0,lt.push(n.COLOR_ATTACHMENT0+Se),y.depthBuffer&&y.resolveDepthBuffer===!1&&(lt.push(J),P.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const Ke=i.get(_[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(y){return Math.min(r.maxSamples,y.samples)}function j(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function H(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Ae(y,_){const O=y.colorSpace,Q=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==Kn&&O!==Jt&&(Je.getTransfer(O)===ot?(Q!==Xt||te!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function fe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=ke,this.setupRenderTarget=at,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=j}function bp(n,e){function t(i,r=Jt){let s;const a=Je.getTransfer(r);if(i===vn)return n.UNSIGNED_BYTE;if(i===oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===la)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===No)return n.BYTE;if(i===Bo)return n.SHORT;if(i===Vi)return n.UNSIGNED_SHORT;if(i===aa)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===Gi)return n.HALF_FLOAT;if(i===zo)return n.ALPHA;if(i===Ho)return n.RGB;if(i===Xt)return n.RGBA;if(i===Vo)return n.LUMINANCE;if(i===ko)return n.LUMINANCE_ALPHA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Go)return n.RED;if(i===ca)return n.RED_INTEGER;if(i===Wo)return n.RG;if(i===ua)return n.RG_INTEGER;if(i===fa)return n.RGBA_INTEGER;if(i===Sr||i===yr||i===Er||i===br)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ps||i===Ls||i===Ds||i===Is)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ps)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ls)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ds)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Is)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fs||i===Us||i===Ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fs||i===Us)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ns)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bs||i===Os||i===zs||i===Hs||i===Vs||i===ks||i===Gs||i===Ws||i===Xs||i===Ys||i===qs||i===Zs||i===Ks||i===$s)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Os)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ks)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ws)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ys)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zs)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ks)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$s)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tr||i===js||i===Js)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tr)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xo||i===Qs||i===ea||i===ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ti?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Tp={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mn({vertexShader:Ap,fragmentShader:wp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cp extends Ri{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const M=new Rp,p=t.getContextAttributes();let f=null,R=null;const A=[],E=[],I=new st;let T=null;const b=new jt;b.viewport=new dt;const F=new jt;F.viewport=new dt;const S=[b,F],x=new Kc;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=A[$];return le===void 0&&(le=new fs,A[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=A[$];return le===void 0&&(le=new fs,A[$]=le),le.getGripSpace()},this.getHand=function($){let le=A[$];return le===void 0&&(le=new fs,A[$]=le),le.getHandSpace()};function B($){const le=E.indexOf($.inputSource);if(le===-1)return;const Me=A[le];Me!==void 0&&(Me.update($.inputSource,$.frame,c||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let $=0;$<A.length;$++){const le=E[$];le!==null&&(E[$]=null,A[$].disconnect(le))}L=null,X=null,M.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,R=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Me=null,ue=null,Le=null;p.depth&&(Le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=p.stencil?Ai:Mi,ue=p.stencil?Ti:Zn);const De={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new $n(d.textureWidth,d.textureHeight,{format:Xt,type:vn,depthTexture:new sl(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new $n(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ne($){for(let le=0;le<$.removed.length;le++){const Me=$.removed[le],ue=E.indexOf(Me);ue>=0&&(E[ue]=null,A[ue].disconnect(Me))}for(let le=0;le<$.added.length;le++){const Me=$.added[le];let ue=E.indexOf(Me);if(ue===-1){for(let De=0;De<A.length;De++)if(De>=E.length){E.push(Me),ue=De;break}else if(E[De]===null){E[De]=Me,ue=De;break}if(ue===-1)break}const Le=A[ue];Le&&Le.connect(Me)}}const K=new G,se=new G;function Y($,le,Me){K.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const ue=K.distanceTo(se),Le=le.projectionMatrix.elements,De=Me.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),at=Le[14]/(Le[10]+1),_e=(Le[9]+1)/Le[5],lt=(Le[9]-1)/Le[5],P=(Le[8]-1)/Le[0],C=(De[8]+1)/De[0],w=ke*P,j=ke*C,H=ue/(-P+C),Ae=H*-P;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(H),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const fe=ke+H,y=at+H,_=w-Ae,O=j+(ue-Ae),Q=_e*at/y*fe,te=lt*at/y*fe;$.projectionMatrix.makePerspective(_,O,Q,te,fe,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let le=$.near,Me=$.far;M.texture!==null&&(M.depthNear>0&&(le=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),x.near=F.near=b.near=le,x.far=F.far=b.far=Me,(L!==x.near||X!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,X=x.far),b.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,x.layers.mask=b.layers.mask|F.layers.mask;const ue=$.parent,Le=x.cameras;ce(x,ue);for(let De=0;De<Le.length;De++)ce(Le[De],ue);Le.length===2?Y(x,b,F):x.projectionMatrix.copy(b.projectionMatrix),xe($,x,ue)};function xe($,le,Me){Me===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=na*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Pe=null;function Oe($,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let ue=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let De=0;De<Me.length;De++){const ke=Me[De];let at=null;if(m!==null)at=m.getViewport(ke);else{const lt=h.getViewSubImage(d,ke);at=lt.viewport,De===0&&(e.setRenderTargetTextures(R,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(R))}let _e=S[De];_e===void 0&&(_e=new jt,_e.layers.enable(De),_e.viewport=new dt,S[De]=_e),_e.matrix.fromArray(ke.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ke.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(at.x,at.y,at.width,at.height),De===0&&(x.matrix.copy(_e.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(_e)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const De=h.getDepthInformation(Me[0]);De&&De.isValid&&De.texture&&M.init(e,De,r.renderState)}}for(let Me=0;Me<A.length;Me++){const ue=E[Me],Le=A[Me];ue!==null&&Le!==void 0&&Le.update(ue,le,c||a)}Pe&&Pe($,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Qe=new ol;Qe.setAnimationLoop(Oe),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}}const Vn=new xn,Pp=new gt;function Lp(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,tl(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,R,A,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),M(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,R,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===It&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===It&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const R=e.get(f),A=R.envMap,E=R.envMapRotation;A&&(p.envMap.value=A,Vn.copy(E),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Vn)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=A*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,R){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const R=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dp(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const E=A.program;i.uniformBlockBinding(R,E)}function c(R,A){let E=r[R.id];E===void 0&&(g(R),E=u(R),r[R.id]=E,R.addEventListener("dispose",p));const I=A.program;i.updateUBOMapping(R,I);const T=e.render.frame;s[R.id]!==T&&(d(R),s[R.id]=T)}function u(R){const A=h();R.__bindingPointIndex=A;const E=n.createBuffer(),I=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=r[R.id],E=R.uniforms,I=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,b=E.length;T<b;T++){const F=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,x=F.length;S<x;S++){const L=F[S];if(m(L,T,S,I)===!0){const X=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let ne=0;ne<B.length;ne++){const K=B[ne],se=M(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,X+W,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,W),W+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,A,E,I){const T=R.value,b=A+"_"+E;if(I[b]===void 0)return typeof T=="number"||typeof T=="boolean"?I[b]=T:I[b]=T.clone(),!0;{const F=I[b];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return I[b]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(R){const A=R.uniforms;let E=0;const I=16;for(let b=0,F=A.length;b<F;b++){const S=Array.isArray(A[b])?A[b]:[A[b]];for(let x=0,L=S.length;x<L;x++){const X=S[x],B=Array.isArray(X.value)?X.value:[X.value];for(let W=0,ne=B.length;W<ne;W++){const K=B[W],se=M(K),Y=E%I,ce=Y%se.boundary,xe=Y+ce;E+=ce,xe!==0&&I-xe<se.storage&&(E+=I-xe),X.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=se.storage}}}const T=E%I;return T>0&&(E+=I-T),R.__size=E,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function p(R){const A=R.target;A.removeEventListener("dispose",p);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function f(){for(const R in r)n.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Ip{constructor(e={}){const{canvas:t=mc(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,f=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Ln,this.toneMappingExposure=1;const E=this;let I=!1,T=0,b=0,F=null,S=-1,x=null;const L=new dt,X=new dt;let B=null;const W=new tt(0);let ne=0,K=t.width,se=t.height,Y=1,ce=null,xe=null;const Pe=new dt(0,0,K,se),Oe=new dt(0,0,K,se);let Qe=!1;const $=new rl;let le=!1,Me=!1;this.transmissionResolutionScale=1;const ue=new gt,Le=new gt,De=new G,ke=new dt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function lt(){return F===null?Y:1}let P=i;function C(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){const U="webgl2";if(P=C(U,v),P===null)throw C(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let w,j,H,Ae,fe,y,_,O,Q,te,J,Ce,he,Se,Ke,oe,ye,Ue,Be,Ee,Ye,Ge,rt,D;function de(){w=new kh(P),w.init(),Ge=new bp(P,w),j=new Nh(P,w,e,Ge),H=new yp(P,w),j.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),Ae=new Xh(P),fe=new cp,y=new Ep(P,w,H,fe,j,Ge,Ae),_=new Oh(E),O=new Vh(E),Q=new jc(P),rt=new Fh(P,Q),te=new Gh(P,Q,Ae,rt),J=new qh(P,te,Q,Ae),Be=new Yh(P,j,y),oe=new Bh(fe),Ce=new lp(E,_,O,w,j,rt,oe),he=new Lp(E,fe),Se=new fp,Ke=new _p(w),Ue=new Ih(E,_,O,H,J,m,l),ye=new Mp(E,J,j),D=new Dp(P,Ae,j,H),Ee=new Uh(P,w,Ae),Ye=new Wh(P,w,Ae),Ae.programs=Ce.programs,E.capabilities=j,E.extensions=w,E.properties=fe,E.renderLists=Se,E.shadowMap=ye,E.state=H,E.info=Ae}de();const q=new Cp(E,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=w.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=w.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(K,se,!1))},this.getSize=function(v){return v.set(K,se)},this.setSize=function(v,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,se=U,t.width=Math.floor(v*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(K*Y,se*Y).floor()},this.setDrawingBufferSize=function(v,U,V){K=v,se=U,Y=V,t.width=Math.floor(v*V),t.height=Math.floor(U*V),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(Pe)},this.setViewport=function(v,U,V,k){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,U,V,k),H.viewport(L.copy(Pe).multiplyScalar(Y).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,U,V,k){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,U,V,k),H.scissor(X.copy(Oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(v){H.setScissorTest(Qe=v)},this.setOpaqueSort=function(v){ce=v},this.setTransparentSort=function(v){xe=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(v=!0,U=!0,V=!0){let k=0;if(v){let N=!1;if(F!==null){const ae=F.texture.format;N=ae===fa||ae===ua||ae===ca}if(N){const ae=F.texture.type,ve=ae===vn||ae===Zn||ae===Vi||ae===Ti||ae===oa||ae===la,Te=Ue.getClearColor(),Re=Ue.getClearAlpha(),He=Te.r,Ve=Te.g,Fe=Te.b;ve?(g[0]=He,g[1]=Ve,g[2]=Fe,g[3]=Re,P.clearBufferuiv(P.COLOR,0,g)):(M[0]=He,M[1]=Ve,M[2]=Fe,M[3]=Re,P.clearBufferiv(P.COLOR,0,M))}else k|=P.COLOR_BUFFER_BIT}U&&(k|=P.DEPTH_BUFFER_BIT),V&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ue.dispose(),Se.dispose(),Ke.dispose(),fe.dispose(),_.dispose(),O.dispose(),J.dispose(),rt.dispose(),D.dispose(),Ce.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jn),q.removeEventListener("sessionend",Pi),an.stop()};function ee(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=Ae.autoReset,U=ye.enabled,V=ye.autoUpdate,k=ye.needsUpdate,N=ye.type;de(),Ae.autoReset=v,ye.enabled=U,ye.autoUpdate=V,ye.needsUpdate=k,ye.type=N}function pe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ze(v){const U=v.target;U.removeEventListener("dispose",ze),ct(U)}function ct(v){ht(v),fe.remove(v)}function ht(v){const U=fe.get(v).programs;U!==void 0&&(U.forEach(function(V){Ce.releaseProgram(V)}),v.isShaderMaterial&&Ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,V,k,N,ae){U===null&&(U=at);const ve=N.isMesh&&N.matrixWorld.determinant()<0,Te=Yt(v,U,V,k,N);H.setMaterial(k,ve);let Re=V.index,He=1;if(k.wireframe===!0){if(Re=te.getWireframeAttribute(V),Re===void 0)return;He=2}const Ve=V.drawRange,Fe=V.attributes.position;let je=Ve.start*He,nt=(Ve.start+Ve.count)*He;ae!==null&&(je=Math.max(je,ae.start*He),nt=Math.min(nt,(ae.start+ae.count)*He)),Re!==null?(je=Math.max(je,0),nt=Math.min(nt,Re.count)):Fe!=null&&(je=Math.max(je,0),nt=Math.min(nt,Fe.count));const pt=nt-je;if(pt<0||pt===1/0)return;rt.setup(N,k,Te,V,Re);let ft,et=Ee;if(Re!==null&&(ft=Q.get(Re),et=Ye,et.setIndex(ft)),N.isMesh)k.wireframe===!0?(H.setLineWidth(k.wireframeLinewidth*lt()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(N.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),H.setLineWidth(Ne*lt()),N.isLineSegments?et.setMode(P.LINES):N.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else N.isPoints?et.setMode(P.POINTS):N.isSprite&&et.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(w.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ne=N._multiDrawStarts,Mt=N._multiDrawCounts,it=N._multiDrawCount,qt=Re?Q.get(Re).bytesPerElement:1,ei=fe.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<it;Ft++)ei.setValue(P,"_gl_DrawID",Ft),et.render(Ne[Ft]/qt,Mt[Ft])}else if(N.isInstancedMesh)et.renderInstances(je,pt,N.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mt=Math.min(V.instanceCount,Ne);et.renderInstances(je,pt,Mt)}else et.render(je,pt)};function $e(v,U,V){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=It,v.needsUpdate=!0,Ie(v,U,V),v.side=In,v.needsUpdate=!0,Ie(v,U,V),v.side=mn):Ie(v,U,V)}this.compile=function(v,U,V=null){V===null&&(V=v),f=Ke.get(V),f.init(U),A.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==V&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const Te=ae[ve];$e(Te,V,N),k.add(Te)}else $e(ae,V,N),k.add(ae)}),A.pop(),f=null,k},this.compileAsync=function(v,U,V=null){const k=this.compile(v,U,V);return new Promise(N=>{function ae(){if(k.forEach(function(ve){fe.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){N(v);return}setTimeout(ae,10)}w.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let yt=null;function Ht(v){yt&&yt(v)}function Jn(){an.stop()}function Pi(){an.start()}const an=new ol;an.setAnimationLoop(Ht),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(v){yt=v,q.setAnimationLoop(v),v===null?an.stop():an.start()},q.addEventListener("sessionstart",Jn),q.addEventListener("sessionend",Pi),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,U,F),f=Ke.get(v,A.length),f.init(U),A.push(f),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,le=oe.init(this.clippingPlanes,Me),p=Se.get(v,R.length),p.init(),R.push(p),q.enabled===!0&&q.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&Fn(ae,U,-1/0,E.sortObjects)}Fn(v,U,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(ce,xe),_e=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,_e&&Ue.addToRenderList(p,v),this.info.render.frame++,le===!0&&oe.beginShadows();const V=f.state.shadowsArray;ye.render(V,v,U),le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const ae=U.cameras;if(N.length>0)for(let ve=0,Te=ae.length;ve<Te;ve++){const Re=ae[ve];ie(k,N,v,Re)}_e&&Ue.render(v);for(let ve=0,Te=ae.length;ve<Te;ve++){const Re=ae[ve];Z(p,v,Re,Re.viewport)}}else N.length>0&&ie(k,N,v,U),_e&&Ue.render(v),Z(p,v,U);F!==null&&b===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(E,v,U),rt.resetDefaultState(),S=-1,x=null,A.pop(),A.length>0?(f=A[A.length-1],le===!0&&oe.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Fn(v,U,V,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$.intersectsSprite(v)){k&&ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);const ve=J.update(v),Te=v.material;Te.visible&&p.push(v,ve,Te,V,ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$.intersectsObject(v))){const ve=J.update(v),Te=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ke.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ke.copy(ve.boundingSphere.center)),ke.applyMatrix4(v.matrixWorld).applyMatrix4(Le)),Array.isArray(Te)){const Re=ve.groups;for(let He=0,Ve=Re.length;He<Ve;He++){const Fe=Re[He],je=Te[Fe.materialIndex];je&&je.visible&&p.push(v,ve,je,V,ke.z,Fe)}}else Te.visible&&p.push(v,ve,Te,V,ke.z,null)}}const ae=v.children;for(let ve=0,Te=ae.length;ve<Te;ve++)Fn(ae[ve],U,V,k)}function Z(v,U,V,k){const N=v.opaque,ae=v.transmissive,ve=v.transparent;f.setupLightsView(V),le===!0&&oe.setGlobalState(E.clippingPlanes,V),k&&H.viewport(L.copy(k)),N.length>0&&we(N,U,V),ae.length>0&&we(ae,U,V),ve.length>0&&we(ve,U,V),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ie(v,U,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new $n(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")||w.has("EXT_color_buffer_float")?Gi:vn,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=f.state.transmissionRenderTarget[k.id],ve=k.viewport||L;ae.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);const Te=E.getRenderTarget();E.setRenderTarget(ae),E.getClearColor(W),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),_e&&Ue.render(V);const Re=E.toneMapping;E.toneMapping=Ln;const He=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),le===!0&&oe.setGlobalState(E.clippingPlanes,k),we(v,V,k),y.updateMultisampleRenderTarget(ae),y.updateRenderTargetMipmap(ae),w.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Fe=0,je=U.length;Fe<je;Fe++){const nt=U[Fe],pt=nt.object,ft=nt.geometry,et=nt.material,Ne=nt.group;if(et.side===mn&&pt.layers.test(k.layers)){const Mt=et.side;et.side=It,et.needsUpdate=!0,re(pt,V,k,ft,et,Ne),et.side=Mt,et.needsUpdate=!0,Ve=!0}}Ve===!0&&(y.updateMultisampleRenderTarget(ae),y.updateRenderTargetMipmap(ae))}E.setRenderTarget(Te),E.setClearColor(W,ne),He!==void 0&&(k.viewport=He),E.toneMapping=Re}function we(v,U,V){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ae=v.length;N<ae;N++){const ve=v[N],Te=ve.object,Re=ve.geometry,He=k===null?ve.material:k,Ve=ve.group;Te.layers.test(V.layers)&&re(Te,U,V,Re,He,Ve)}}function re(v,U,V,k,N,ae){v.onBeforeRender(E,U,V,k,N,ae),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(E,U,V,k,v,ae),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=It,N.needsUpdate=!0,E.renderBufferDirect(V,U,k,N,v,ae),N.side=In,N.needsUpdate=!0,E.renderBufferDirect(V,U,k,N,v,ae),N.side=mn):E.renderBufferDirect(V,U,k,N,v,ae),v.onAfterRender(E,U,V,k,N,ae)}function Ie(v,U,V){U.isScene!==!0&&(U=at);const k=fe.get(v),N=f.state.lights,ae=f.state.shadowsArray,ve=N.state.version,Te=Ce.getParameters(v,N.state,ae,U,V),Re=Ce.getProgramCacheKey(Te);let He=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?O:_).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,He===void 0&&(v.addEventListener("dispose",ze),He=new Map,k.programs=He);let Ve=He.get(Re);if(Ve!==void 0){if(k.currentProgram===Ve&&k.lightsStateVersion===ve)return qe(v,Te),Ve}else Te.uniforms=Ce.getUniforms(v),v.onBeforeCompile(Te,E),Ve=Ce.acquireProgram(Te,Re),He.set(Re,Ve),k.uniforms=Te.uniforms;const Fe=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),qe(v,Te),k.needsLights=Pt(v),k.lightsStateVersion=ve,k.needsLights&&(Fe.ambientLightColor.value=N.state.ambient,Fe.lightProbe.value=N.state.probe,Fe.directionalLights.value=N.state.directional,Fe.directionalLightShadows.value=N.state.directionalShadow,Fe.spotLights.value=N.state.spot,Fe.spotLightShadows.value=N.state.spotShadow,Fe.rectAreaLights.value=N.state.rectArea,Fe.ltc_1.value=N.state.rectAreaLTC1,Fe.ltc_2.value=N.state.rectAreaLTC2,Fe.pointLights.value=N.state.point,Fe.pointLightShadows.value=N.state.pointShadow,Fe.hemisphereLights.value=N.state.hemi,Fe.directionalShadowMap.value=N.state.directionalShadowMap,Fe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Fe.spotShadowMap.value=N.state.spotShadowMap,Fe.spotLightMatrix.value=N.state.spotLightMatrix,Fe.spotLightMap.value=N.state.spotLightMap,Fe.pointShadowMap.value=N.state.pointShadowMap,Fe.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ve,k.uniformsList=null,Ve}function be(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Ar.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function qe(v,U){const V=fe.get(v);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Yt(v,U,V,k,N){U.isScene!==!0&&(U=at),y.resetTextureUnits();const ae=U.fog,ve=k.isMeshStandardMaterial?U.environment:null,Te=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kn,Re=(k.isMeshStandardMaterial?O:_).get(k.envMap||ve),He=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color;let pt=Ln;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(pt=E.toneMapping);const ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=ft!==void 0?ft.length:0,Ne=fe.get(k),Mt=f.state.lights;if(le===!0&&(Me===!0||v!==x)){const At=v===x&&k.id===S;oe.setState(k,v,At)}let it=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Mt.state.version||Ne.outputColorSpace!==Te||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isBatchedMesh&&Ne.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ne.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ne.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ne.instancingMorph===!1&&N.morphTexture!==null||Ne.envMap!==Re||k.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==He||Ne.vertexTangents!==Ve||Ne.morphTargets!==Fe||Ne.morphNormals!==je||Ne.morphColors!==nt||Ne.toneMapping!==pt||Ne.morphTargetsCount!==et)&&(it=!0):(it=!0,Ne.__version=k.version);let qt=Ne.currentProgram;it===!0&&(qt=Ie(k,U,N));let ei=!1,Ft=!1,Li=!1;const ut=qt.getUniforms(),Vt=Ne.uniforms;if(H.useProgram(qt.program)&&(ei=!0,Ft=!0,Li=!0),k.id!==S&&(S=k.id,Ft=!0),ei||x!==v){H.buffers.depth.getReversed()?(ue.copy(v.projectionMatrix),_c(ue),vc(ue),ut.setValue(P,"projectionMatrix",ue)):ut.setValue(P,"projectionMatrix",v.projectionMatrix),ut.setValue(P,"viewMatrix",v.matrixWorldInverse);const Lt=ut.map.cameraPosition;Lt!==void 0&&Lt.setValue(P,De.setFromMatrixPosition(v.matrixWorld)),j.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Ft=!0,Li=!0)}if(N.isSkinnedMesh){ut.setOptional(P,N,"bindMatrix"),ut.setOptional(P,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ut.setValue(P,"boneTexture",At.boneTexture,y))}N.isBatchedMesh&&(ut.setOptional(P,N,"batchingTexture"),ut.setValue(P,"batchingTexture",N._matricesTexture,y),ut.setOptional(P,N,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",N._indirectTexture,y),ut.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",N._colorsTexture,y));const kt=V.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&Be.update(N,V,qt),(Ft||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,ut.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vt.envMap.value=Re,Vt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Vt.envMapIntensity.value=U.environmentIntensity),Ft&&(ut.setValue(P,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&yn(Vt,Li),ae&&k.fog===!0&&he.refreshFogUniforms(Vt,ae),he.refreshMaterialUniforms(Vt,k,Y,se,f.state.transmissionRenderTarget[v.id]),Ar.upload(P,be(Ne),Vt,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ar.upload(P,be(Ne),Vt,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(P,"center",N.center),ut.setValue(P,"modelViewMatrix",N.modelViewMatrix),ut.setValue(P,"normalMatrix",N.normalMatrix),ut.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const At=k.uniformsGroups;for(let Lt=0,Ur=At.length;Lt<Ur;Lt++){const Un=At[Lt];D.update(Un,qt),D.bind(Un,qt)}}return qt}function yn(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Pt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,U,V){fe.get(v.texture).__webglTexture=U,fe.get(v.depthTexture).__webglTexture=V;const k=fe.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){const V=fe.get(v);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Qn=P.createFramebuffer();this.setRenderTarget=function(v,U=0,V=0){F=v,T=U,b=V;let k=!0,N=null,ae=!1,ve=!1;if(v){const Re=fe.get(v);if(Re.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(Re.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(Re.__hasExternalTextures)y.rebindTextures(v,fe.get(v.texture).__webglTexture,fe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Fe=v.depthTexture;if(Re.__boundDepthTexture!==Fe){if(Fe!==null&&fe.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const He=v.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ve=!0);const Ve=fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][V]:N=Ve[U],ae=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?N=fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[V]:N=Ve,L.copy(v.viewport),X.copy(v.scissor),B=v.scissorTest}else L.copy(Pe).multiplyScalar(Y).floor(),X.copy(Oe).multiplyScalar(Y).floor(),B=Qe;if(V!==0&&(N=Qn),H.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&H.drawBuffers(v,N),H.viewport(L),H.scissor(X),H.setScissorTest(B),ae){const Re=fe.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,V)}else if(ve){const Re=fe.get(v.texture),He=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,V,He)}else if(v!==null&&V!==0){const Re=fe.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(v,U,V,k,N,ae,ve){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){H.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Re=v.texture,He=Re.format,Ve=Re.type;if(!j.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&V>=0&&V<=v.height-N&&P.readPixels(U,V,k,N,Ge.convert(He),Ge.convert(Ve),ae)}finally{const Re=F!==null?fe.get(F).__webglFramebuffer:null;H.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,U,V,k,N,ae,ve){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){const Re=v.texture,He=Re.format,Ve=Re.type;if(!j.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-k&&V>=0&&V<=v.height-N){H.bindFramebuffer(P.FRAMEBUFFER,Te);const Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(U,V,k,N,Ge.convert(He),Ge.convert(Ve),0);const je=F!==null?fe.get(F).__webglFramebuffer:null;H.bindFramebuffer(P.FRAMEBUFFER,je);const nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gc(P,nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Fe),P.deleteSync(nt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,V=0){v.isTexture!==!0&&(_i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-V),N=Math.floor(v.image.width*k),ae=Math.floor(v.image.height*k),ve=U!==null?U.x:0,Te=U!==null?U.y:0;y.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ve,Te,N,ae),H.unbindTexture()};const on=P.createFramebuffer(),ln=P.createFramebuffer();this.copyTextureToTexture=function(v,U,V=null,k=null,N=0,ae=null){v.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],U=arguments[2],ae=arguments[3]||0,V=null),ae===null&&(N!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=N,N=0):ae=0);let ve,Te,Re,He,Ve,Fe,je,nt,pt;const ft=v.isCompressedTexture?v.mipmaps[ae]:v.image;if(V!==null)ve=V.max.x-V.min.x,Te=V.max.y-V.min.y,Re=V.isBox3?V.max.z-V.min.z:1,He=V.min.x,Ve=V.min.y,Fe=V.isBox3?V.min.z:0;else{const kt=Math.pow(2,-N);ve=Math.floor(ft.width*kt),Te=Math.floor(ft.height*kt),v.isDataArrayTexture?Re=ft.depth:v.isData3DTexture?Re=Math.floor(ft.depth*kt):Re=1,He=0,Ve=0,Fe=0}k!==null?(je=k.x,nt=k.y,pt=k.z):(je=0,nt=0,pt=0);const et=Ge.convert(U.format),Ne=Ge.convert(U.type);let Mt;U.isData3DTexture?(y.setTexture3D(U,0),Mt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),Mt=P.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),Mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ei=P.getParameter(P.UNPACK_SKIP_PIXELS),Ft=P.getParameter(P.UNPACK_SKIP_ROWS),Li=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,He),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);const ut=v.isDataArrayTexture||v.isData3DTexture,Vt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const kt=fe.get(v),At=fe.get(U),Lt=fe.get(kt.__renderTarget),Ur=fe.get(At.__renderTarget);H.bindFramebuffer(P.READ_FRAMEBUFFER,Lt.__webglFramebuffer),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let Un=0;Un<Re;Un++)ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(v).__webglTexture,N,Fe+Un),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,ae,pt+Un)),P.blitFramebuffer(He,Ve,ve,Te,je,nt,ve,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);H.bindFramebuffer(P.READ_FRAMEBUFFER,null),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||fe.has(v)){const kt=fe.get(v),At=fe.get(U);H.bindFramebuffer(P.READ_FRAMEBUFFER,on),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,ln);for(let Lt=0;Lt<Re;Lt++)ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,N,Fe+Lt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,N),Vt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,ae,pt+Lt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,ae),N!==0?P.blitFramebuffer(He,Ve,ve,Te,je,nt,ve,Te,P.COLOR_BUFFER_BIT,P.NEAREST):Vt?P.copyTexSubImage3D(Mt,ae,je,nt,pt+Lt,He,Ve,ve,Te):P.copyTexSubImage2D(Mt,ae,je,nt,He,Ve,ve,Te);H.bindFramebuffer(P.READ_FRAMEBUFFER,null),H.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Vt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(Mt,ae,je,nt,pt,ve,Te,Re,et,Ne,ft.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,ae,je,nt,pt,ve,Te,Re,et,ft.data):P.texSubImage3D(Mt,ae,je,nt,pt,ve,Te,Re,et,Ne,ft):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,je,nt,ve,Te,et,Ne,ft.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,je,nt,ft.width,ft.height,et,ft.data):P.texSubImage2D(P.TEXTURE_2D,ae,je,nt,ve,Te,et,Ne,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ei),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Li),ae===0&&U.generateMipmaps&&P.generateMipmap(Mt),H.unbindTexture()},this.copyTextureToTexture3D=function(v,U,V=null,k=null,N=0){return v.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,v=arguments[2],U=arguments[3],N=arguments[4]||0),_i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,V,k,N)},this.initRenderTarget=function(v){fe.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),H.unbindTexture()},this.resetState=function(){T=0,b=0,F=null,H.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const hl=Math.sqrt(3),Fp=.5*(hl-1),Oi=(3-hl)/6,vo=n=>Math.floor(n)|0,xo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Up(n=Math.random){const e=Np(n),t=new Float64Array(e).map(r=>xo[r%12*2]),i=new Float64Array(e).map(r=>xo[r%12*2+1]);return function(s,a){let o=0,l=0,c=0;const u=(s+a)*Fp,h=vo(s+u),d=vo(a+u),m=(h+d)*Oi,g=h-m,M=d-m,p=s-g,f=a-M;let R,A;p>f?(R=1,A=0):(R=0,A=1);const E=p-R+Oi,I=f-A+Oi,T=p-1+2*Oi,b=f-1+2*Oi,F=h&255,S=d&255;let x=.5-p*p-f*f;if(x>=0){const B=F+e[S],W=t[B],ne=i[B];x*=x,o=x*x*(W*p+ne*f)}let L=.5-E*E-I*I;if(L>=0){const B=F+R+e[S+A],W=t[B],ne=i[B];L*=L,l=L*L*(W*E+ne*I)}let X=.5-T*T-b*b;if(X>=0){const B=F+1+e[S+1],W=t[B],ne=i[B];X*=X,c=X*X*(W*T+ne*b)}return 70*(o+l+c)}}function Np(n){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}const Hi=24,Bp=900,pa=.85,z={noiseStrength:55,noiseSpeed:.12,anchorStiffness:1.4,cohesion:.6,linkStiffness:2.2,overlapTarget:.35,repulsion:3,damping:.92,maxSpeed:70,displaceAmount:.5,crossOverlapTarget:1,crossRepulsion:2,contactOverlap:.72,contactSeparationRamp:3.5,contactSeparationBias:85,breathAmount:.08,breathSpeed:.16,driftSpeedMin:2,driftSpeedMax:22,driftSecondsMin:3,driftSecondsMax:10,restSecondsMin:6,restSecondsMax:18,restChance:.48,easeSeconds:4.2,nudgeSpeed:30,nudgeSeconds:2.5,nudgeIntervalMin:12,nudgeIntervalMax:32,edgeBuffer:10,edgeGrip:.22,threshold:5,edgeSoftness:0,falloff:1.2,uvSharpness:3,interfaceWidth:1,videoStretch:!1,videoFitPadding:1.12,blobColor:"#bababa",meniscusWidth:2,meniscusEdgeFade:6,meniscusColor:"#e8efe9",flowMaster:0,flowScale:110,flowStrength:28,flowSpeed:.04,flowMixSeconds:5,flowEdgeFade:0,transitionSeconds:.62,transitionEasing:"easeInOutCubic",focusSettleSeconds:.42,exitSeconds:2,returnSeconds:.85,returnDelaySeconds:.12,returnMotionBlendSeconds:.4,focusPadding:0,focusVertInset:64,focusPlayerHeight:52,focusLayoutScale:1.7,focusZoomBoost:1,focusMotionSurvival:.42,focusAspectSlack:1,focusAnchorStiffness:2.8,focusCohesion:1.6,exitMargin:200,scrollRange:1400,scrollTextHeight:280,scrollSmoothSeconds:.16,breakerWidth:65,breakerRepulsion:0,breakerOverlap:1.12,breakerSplit:280,breakerPush:.48,breakerCut:1.28,breakerFadeSeconds:.35,breakerHealSeconds:.85,breakerMaxSpeedScale:2.4,playButtonFadeSeconds:.45,videoCrossfadeSeconds:.55,exitVideoFadeOutSeconds:.2,exitVideoFadeInSeconds:.2,selectBlinkOutSeconds:.1,selectBlinkInSeconds:.4,videoFadeInSeconds:.85,selectedVideoFitScale:1,useFullTransform:!1,blobs:[]},Op=12,Mo={smoothstep:n=>n*n*(3-2*n),easeInOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,linear:n=>n};function ma(n){const e=Mo[z.transitionEasing]||Mo.easeInOutCubic;return Math.max(0,Math.min(1,e(n)))}function dl(n,e,t,i){let r=0;for(const s of t){const a=Math.hypot(n-s.x,e-s.y)/Math.max(s.radius,1),o=Math.max(0,1-a*a);o>0&&(r+=Math.pow(o,i)*o*Op)}return r}function zp(n,e,t,i){const r=n.blobs[e];return r?dl(t,i,r.circles,z.falloff)>z.threshold:!1}function So(n,e,t,i){if(zp(n,e,t,i))return!0;if(n.paramTargetIndex<0||n.selectedIndex!==e)return!1;const r=n.blobs[e];if(!r)return!1;const s=r.videoFrameCenterX,a=r.videoFrameCenterY,o=r.videoFrameHalfW,l=r.videoFrameHalfH;if(Math.abs(t-s)<=o&&Math.abs(i-a)<=l)return!0;const c=Math.max(r.params?.maxRadius??0,1)*.2;return t>=r.minX-c&&t<=r.maxX+c&&i>=r.minY-c&&i<=r.maxY+c}function Hp(n,e,t){const i=z.falloff,r=z.threshold;let s=-1,a=r;for(let o=0;o<n.blobs.length&&!(n.activeBlobLimit!=null&&o>=n.activeBlobLimit);o++){const l=dl(e,t,n.blobs[o].circles,i);l>a&&(a=l,s=o)}return s}const Vp=1.35,kp=11/16,rn=(n,e,t)=>n+(e-n)*t;function ga(){return typeof window<"u"&&window.matchMedia("(max-width: 768px)").matches}function _a(n,e,t){let i=e/Math.max(t,1);ga()&&(i=Math.min(i,kp));const r=Math.max(n.params.minRadius,n.params.maxRadius),s=r*Vp*z.focusLayoutScale,a=s*Math.sqrt(i),o=s/Math.sqrt(i),l=z.selectedVideoFitScale,c=a*l,u=o*l,h=r*pa,d=Math.max(c-h,a*.45),m=Math.max(u-h,o*.45);return{videoHalfW:c,videoHalfH:u,layoutRx:d,layoutRy:m}}function Dn(n){for(const e of n.circles)e.localX=e.x-n.centerX,e.localY=e.y-n.centerY,e.anchorX=e.x,e.anchorY=e.y}function Sn(n){return{centerX:n.centerX,centerY:n.centerY,circles:n.circles.map(e=>({localX:e.x-n.centerX,localY:e.y-n.centerY}))}}function Gp(n,e,t){const{layoutRx:i,layoutRy:r}=_a(n,e,t),s=Math.max(n.clusterRx,1e-6),a=Math.max(n.clusterRy,1e-6);return n.relaxLayoutAt(n.circles.map(o=>{const l=(o.restLocalX??o.localX)/s,c=(o.restLocalY??o.localY)/a;return{localX:l*i,localY:c*r}}),i,r,ml)}function Wp(n,e,t,i,r){Dn(n);const s=Sn(n);ki(n,t),n.seat();const{videoHalfW:a,videoHalfH:o}=_a(n,i,r),l=Math.max(e.layoutScale||1,1e-6),c=(z.edgeBuffer+z.focusPadding)/l,u=z.focusPlayerHeight/l,h=z.focusVertInset/l,d=Math.max(e.halfW-c,1),m=Math.max(e.halfH-c-u*.5-h,1);let g=Math.min(d/a,m/o);return g*=z.focusZoomBoost,ga()&&(g*=1.2),ki(n,s),n.seat(),Math.max(g,1)}function Xp(n,e){const t=n.blobs[e];t&&(Dn(t),n.focusRest=Sn(t),n.focusMorphFrom=Sn(t),n.focusTarget=null,n.focusZoomFrom=1,n.focusZoomTo=1,n.focusZoom=1,n.focusVideoReady=!1,n.focusLinksReady=!1)}function Yp(n,e){n.paramTransitioning&&(Dn(e),n.focusMorphFrom=Sn(e),n.focusZoomFrom=n.focusZoom)}function qp(n,e,t,i){if(n.paramTargetIndex!==e&&n.selectedIndex!==e)return;const r=n.blobs[e];if(!r||!t||!i)return;const s=ga(),a=n.focusMobilePortrait!==s,o=!n.paramTransitioning&&n.focusVideoReady&&n.paramTargetIndex===e&&n.selectedIndex===e;if(o&&!a){n.focusVideoW=t,n.focusVideoH=i;return}const l=n.focusVideoW||0,c=n.focusVideoH||0;if(n.focusVideoReady&&l===t&&c===i&&n.paramTargetIndex===e&&!a)return;const u=Gp(r,t,i),h={centerX:0,centerY:0,circles:u};(l!==t||c!==i||!n.focusVideoReady||a||n.focusTarget?.circles?.length!==u.length)&&Yp(n,r),n.focusTarget=h,n.focusVideoW=t,n.focusVideoH=i,n.focusMobilePortrait=s,n.focusZoomTo=Wp(r,n.view,h,t,i),n.focusVideoReady=!0;const m=_a(r,t,i);if(r.focusVideoHalfW=m.videoHalfW,r.focusVideoHalfH=m.videoHalfH,r.focusLayoutRx=m.layoutRx,r.focusLayoutRy=m.layoutRy,o&&a){ki(r,h),r.seat(),n.focusZoom=n.focusZoomTo,n.focusZoomFrom=n.focusZoomTo,n.focusRest=Sn(r),n.focusMorphFrom=n.focusRest;return}if(n.paramTransitioning&&n.paramTargetIndex===e){const g=n.focusMorphFrom||n.focusRest;g&&(ki(r,g),r.seat())}}function ki(n,e){n.centerX=e.centerX,n.centerY=e.centerY;const t=Math.min(n.circles.length,e.circles.length);for(let i=0;i<t;i++)n.circles[i].localX=e.circles[i].localX,n.circles[i].localY=e.circles[i].localY}function ra(n,e,t,i){if(!e?.circles||!t?.circles)return;const r=rn(e.centerX,t.centerX,i),s=rn(e.centerY,t.centerY,i);n.centerX=r,n.centerY=s;const a=Math.min(n.circles.length,e.circles.length,t.circles.length);for(let o=0;o<a;o++){const l=e.circles[o].localX+e.centerX,c=e.circles[o].localY+e.centerY,u=t.circles[o].localX+t.centerX,h=t.circles[o].localY+t.centerY;n.circles[o].localX=rn(l,u,i)-r,n.circles[o].localY=rn(c,h,i)-s}n.seat(),n.measureRestFrame()}function Zp(n,e){if(!n.paramTransitioning)return;const t=n.paramTargetIndex;if(t>=0&&!n.focusVideoReady){const s=n.blobs[t],a=n.focusMorphFrom||n.focusRest;s&&a&&(ki(s,a),s.seat());return}n.paramT+=e/Math.max(z.transitionSeconds,.05);const i=n.paramT>=1;i&&(n.paramT=1);const r=ma(n.paramT);if(t>=0&&n.focusRest&&n.focusTarget){const s=n.blobs[t];if(s){const a=n.focusMorphFrom||n.focusRest;ra(s,a,n.focusTarget,r),n.focusZoom=rn(n.focusZoomFrom,n.focusZoomTo,r),r>=.85&&!n.focusLinksReady&&(s.buildLinks(3),n.focusLinksReady=!0)}}else if(t<0&&n.focusRest){const s=n.blobs[n.selectedIndex];if(!s)return;const a=n.focusActive?.pose??Sn(s),o=n.focusActive?.zoom??n.focusZoom;ra(s,a,n.focusRest,r),n.focusZoom=rn(o,n.focusZoomFrom,r),i&&(n.focusZoom=1,n.focusActive=null)}if(i&&t>=0){const s=n.blobs[t];s&&(Dn(s),n.focusActive={pose:Sn(s),zoom:n.focusZoomTo},n.focusMorphFrom=null,pl(n,t))}}function pl(n,e){if(e<0)return;const t=n.blobs[e];t&&(n.focusSettling=!0,n.focusSettleT=0,n.focusSettleIndex=e,Dn(t),n.focusLinksReady||t.buildLinks(3))}function Kp(n,e){n.focusSettling&&(n.focusSettleT+=e/Math.max(z.focusSettleSeconds,.05),n.focusSettleT>=1&&(n.focusSettleT=1,n.focusSettling=!1,n.focusSettleIndex=-1))}function hs(n){return n.focusSettling?ma(n.focusSettleT):1}function vr(n,e){return n.focusSettling&&n.focusSettleIndex===e}function ds(n,e){return n.paramTransitioning?n.paramTargetIndex===e||n.paramTargetIndex<0&&n.selectedIndex===e:!1}function Cn(n,e){return n.selectedIndex===e&&n.paramTargetIndex>=0&&!n.paramTransitioning}function $p(n,e=1){const t=n.focusLayoutRx,i=n.focusLayoutRy;if(!t||!i||e<=0)return;const r=1+z.focusAspectSlack;for(const s of n.circles){const a=s.x-n.centerX,o=s.y-n.centerY,l=Math.hypot(a/t,o/i);if(l<=r)continue;const c=1+(l-r)*.55,u=n.centerX+a/c,h=n.centerY+o/c;s.x=rn(s.x,u,e),s.y=rn(s.y,h,e),s.vx*=1-e*.18,s.vy*=1-e*.18}}function jp(n,e=1,t=!0){const i=n.focusVideoHalfW,r=n.focusVideoHalfH;if(!(!i||!r||e<=0))for(const s of n.circles){const a=s.radius*pa,o=Math.max(i-a,0),l=Math.max(r-a,0),c=s.x-n.centerX,u=s.y-n.centerY,h=Math.max(-o,Math.min(o,c)),d=t?Math.max(-l,Math.min(l,u)):u;h===c&&d===u||(s.x=rn(s.x,n.centerX+h,e),s.y=rn(s.y,n.centerY+d,e),s.vx*=1-e*.25,t&&(s.vy*=1-e*.25))}}function Jp(n,e,t){return n.focusVideoHalfW>0&&n.focusVideoHalfH>0&&(e.selectedIndex===t||e.paramTargetIndex===t||e.focusSettling&&e.focusSettleIndex===t)?{centerX:n.centerX,centerY:n.centerY,halfW:n.focusVideoHalfW,halfH:n.focusVideoHalfH,contain:0}:null}function yo(n){n.focusRest=null,n.focusMorphFrom=null,n.focusTarget=null,n.focusActive=null,n.focusZoom=1,n.focusZoomFrom=1,n.focusZoomTo=1,n.focusVideoReady=!1,n.focusVideoW=0,n.focusVideoH=0,n.focusMobilePortrait=!1,n.focusSettling=!1,n.focusSettleT=0,n.focusSettleIndex=-1,n.focusLinksReady=!1;for(const e of n.blobs)e.focusLayoutRx=0,e.focusLayoutRy=0,e.focusVideoHalfW=0,e.focusVideoHalfH=0}const ml=.62,Qp=2.8;function gl(n){return{overlapTarget:z.overlapTarget,repulsion:z.repulsion,blobs:z.blobs.map(e=>({minRadius:e.minRadius,maxRadius:e.maxRadius}))}}function em(n,e){return{overlapTarget:n.overlapTarget,repulsion:n.repulsion,blobs:n.blobs.map(t=>({...t}))}}function tm(n,e,t,i){for(let r=0;r<i.length;r++){const s=z.blobs[r],a=n.blobs[r],o=e.blobs[r];if(!a||!o)continue;s.minRadius=a.minRadius,s.maxRadius=a.maxRadius;const l=i[r];l?.resolveRadii(),l?.measureRestFrame()}}function _l(n){return gl(n.blobs)}function nm(n,e){return e<0?n.restSnapshot||_l(n):(n.restSnapshot||(n.restSnapshot=gl(n.blobs)),em(n.restSnapshot))}function im(n,e){if(!n.paramTransitioning)return;const t=n.paramT;Zp(n,e);const i=n.paramTargetIndex,r=ma(n.paramT);tm(n.paramFrom,n.paramTo,r,n.blobs),n.paramT>=1&&(n.paramTransitioning=!1,n.selectedIndex=n.paramTargetIndex,i<0&&t<1&&(n.restSnapshot=null))}const rm=4;function sm(n){return n*n*n}function am(n){const e=1-n;return 1-e*e*e}function xr(n,e,t){return n+(e-n)*t}function om(n){return{centerX:n.centerX,centerY:n.centerY,homeFx:n.homeFx,homeFy:n.homeFy,freeRef:n.freeRef?{x:n.freeRef.x,y:n.freeRef.y}:null,velX:n.velX,velY:n.velY,velFromX:n.velFromX,velFromY:n.velFromY,velToX:n.velToX,velToY:n.velToY,phaseTime:n.phaseTime,phaseDur:n.phaseDur,easeDur:n.easeDur,nudgeIn:n.nudgeIn,circles:n.circles.map(e=>({x:e.x,y:e.y,vx:e.vx,vy:e.vy,fx:e.fx,fy:e.fy,radius:e.radius}))}}function lm(n,e){n.homeFx=e.homeFx,n.homeFy=e.homeFy,n.freeRef=e.freeRef?{x:e.freeRef.x,y:e.freeRef.y}:n.freeRef,n.velX=0,n.velY=0,n.velFromX=0,n.velFromY=0,n.velToX=0,n.velToY=0,n.phaseTime=0,n.phaseDur=Math.max(e.phaseDur||2,1.5),n.easeDur=1.2,n.nudgeIn=.35,n.exitMotionBlend=0;for(const t of n.circles)t.anchorX=t.localX+n.centerX,t.anchorY=t.localY+n.centerY,t.vx=0,t.vy=0,t.fx=0,t.fy=0;n.updateCentroid(),n.updateBounds()}function cm(n,e,t){const i=e-n.centerX,r=t-n.centerY;if(!(i===0&&r===0)){n.centerX=e,n.centerY=t;for(const s of n.circles)s.x+=i,s.y+=r,s.anchorX+=i,s.anchorY+=r,s.vx=0,s.vy=0,s.fx=0,s.fy=0;n.updateCentroid(),n.updateBounds()}}function um(n){const e=1+z.breathAmount;let t=0,i=0,r=0,s=0;for(const a of n.circles){const o=Math.max(a.radius,a.baseRadius)*e,l=a.x-n.centerX,c=a.y-n.centerY;t=Math.min(t,l-o),i=Math.max(i,l+o),r=Math.min(r,c-o),s=Math.max(s,c+o)}return{minX:t,maxX:i,minY:r,maxY:s}}function va(n,e,t){const i=t.halfW-n,r=t.halfW+n,s=t.halfH-e,a=t.halfH+e,o=[{d:Math.abs(i),dir:{x:1,y:0}},{d:Math.abs(r),dir:{x:-1,y:0}},{d:Math.abs(s),dir:{x:0,y:1}},{d:Math.abs(a),dir:{x:0,y:-1}}];let l=o[0];for(let c=1;c<o.length;c++)o[c].d<l.d&&(l=o[c]);return l.dir}function vl(n,e,t){const i=n.centerX-e.centerX,r=n.centerY-e.centerY,s=Math.hypot(i,r);return s<rm?va(n.centerX,n.centerY,t):{x:i/s,y:r/s}}function xl(n,e,t){const i=um(n);let r=e.x,s=e.y;const a=n.centerX,o=n.centerY,l=Math.max(t.halfW||0,1),c=Math.max(t.halfH||0,1),u=z.exitMargin/Math.max(t.layoutScale||1,1e-6),h=Math.max(i.maxX-i.minX,i.maxY-i.minY,1),d=(g,M)=>{let p=1/0;return g>1e-6?p=Math.min(p,(l+u-i.minX-a)/g):g<-1e-6&&(p=Math.min(p,(-l-u-i.maxX-a)/g)),M>1e-6?p=Math.min(p,(c+u-i.minY-o)/M):M<-1e-6&&(p=Math.min(p,(-c-u-i.maxY-o)/M)),p};let m=d(r,s);if(!Number.isFinite(m)){const g=va(a,o,t);r=g.x,s=g.y,m=d(r,s)}if(!Number.isFinite(m)||m<0){const g=Math.max(u,h*.25);return{x:a+r*g,y:o+s*g}}return{x:a+r*m,y:o+s*m}}function mi(n,e){return!!n.exitSlots[e]?.active&&n.exitPhase!=="idle"}function fm(n){n.motionSnapshots=n.blobs.map(om)}function Ml(n){return{centerX:n.centerX,centerY:n.centerY,circles:n.circles.map(e=>({x:e.x,y:e.y}))}}function Eo(n,e,t,i,r,s){const a=xr(e.centerX,t,s),o=xr(e.centerY,i,s);n.centerX=a,n.centerY=o;const l=Math.min(n.circles.length,e.circles.length,r.length);for(let c=0;c<l;c++){const u=n.circles[c];u.x=xr(e.circles[c].x,r[c].x,s),u.y=xr(e.circles[c].y,r[c].y,s),u.anchorX=u.localX+n.centerX,u.anchorY=u.localY+n.centerY,u.vx=0,u.vy=0,u.fx=0,u.fy=0}n.updateCentroid(),n.updateBounds()}function hm(n,e){n.motionSnapshots||fm(n);const t=n.blobs[e];if(t){n.exitPhase="exiting",n.exitT=0,n.returnWaitT=0;for(let i=0;i<n.blobs.length;i++){if(i===e){n.exitSlots[i]&&(n.exitSlots[i].active=!1);continue}const r=n.blobs[i],s=vl(r,t,n.view),a=xl(r,s,n.view);n.exitSlots[i]={active:!0,from:Ml(r),toX:a.x,toY:a.y}}}}function dm(n){if(n.exitPhase!=="away"&&n.exitPhase!=="waiting")return;const e=n.paramTargetIndex>=0?n.paramTargetIndex:n.selectedIndex,t=e>=0?n.blobs[e]:null;for(let i=0;i<n.blobs.length;i++){const r=n.exitSlots[i];if(!r?.active)continue;const s=n.blobs[i],a=t?vl(s,t,n.view):va(s.centerX,s.centerY,n.view),o=xl(s,a,n.view);r.toX=o.x,r.toY=o.y,cm(s,o.x,o.y)}}function pm(n){if(!n.exitSlots.some(t=>t?.active)){Sl(n);return}n.exitPhase="waiting",n.returnWaitT=0}function mm(n){n.exitPhase="returning",n.exitT=0;for(let e=0;e<n.blobs.length;e++){const t=n.exitSlots[e];t?.active&&(t.from=Ml(n.blobs[e]))}}function Sl(n){for(let e=0;e<n.blobs.length;e++){const t=n.exitSlots[e],i=n.motionSnapshots?.[e];t?.active&&i&&lm(n.blobs[e],i),n.exitSlots[e]=null}n.motionSnapshots=null,n.exitPhase="idle",n.exitT=0,n.returnWaitT=0,n.restSnapshot=null}function gm(n,e){if(n.exitPhase==="idle")return;if(n.exitPhase==="waiting"){n.returnWaitT+=e,n.returnWaitT>=Math.max(z.returnDelaySeconds,0)&&mm(n);return}if(n.exitPhase==="away")return;const t=n.exitPhase==="exiting",i=Math.max(t?z.exitSeconds:z.returnSeconds,.05);n.exitT+=e/i;const r=n.exitT>=1;r&&(n.exitT=1);const s=t?sm(n.exitT):am(n.exitT);for(let a=0;a<n.blobs.length;a++){const o=n.exitSlots[a];if(!o?.active||!o.from)continue;const l=n.blobs[a];if(t)Eo(l,o.from,o.toX,o.toY,o.from.circles.map(c=>({x:c.x+(o.toX-o.from.centerX),y:c.y+(o.toY-o.from.centerY)})),s);else{const c=n.motionSnapshots[a];Eo(l,o.from,c.centerX,c.centerY,c.circles,s)}}if(r){if(t){n.exitPhase="away";return}Sl(n)}}const Fr=(n,e,t)=>n<e?e:n>t?t:n,xa=n=>Fr(n,0,1);function _m(n,e){const t=1/Math.max(z.scrollSmoothSeconds,.05),i=xa(n.scrollTarget);n.scrollProgress+=(i-n.scrollProgress)*Math.min(1,t*e),Math.abs(n.scrollProgress-i)<1e-4&&(n.scrollProgress=i)}function bo(n,e){if(!Cn(n,n.selectedIndex))return;const t=Math.max(z.scrollRange,1);n.scrollCss=Fr((n.scrollCss||0)+e,0,t),n.scrollTarget=n.scrollCss/t}function yl(n){n.scrollTarget=0,n.scrollProgress=0,n.scrollCss=0}function vm(n,e,t){n.infoBoxCssW=Math.max(e,0),n.infoBoxCssH=Math.max(t,0)}function To(n){const e=n.breaker,t=n.blobs[n.selectedIndex];if(!e||!t||e.active<.01)return 0;const r=(t.focusLayoutRy||t.halfH||1)+(e.halfH||e.radius||1);return r<1?0:xa(1-Math.abs(e.y-t.centerY)/r)}function xm(n){const e=Math.max(n.focusZoom||1,1),t=Math.max(n.view.layoutScale||1,1e-6),i=n.view.halfW/e,r=n.infoBoxCssH>1?n.infoBoxCssH:z.scrollTextHeight,s=Fr(z.breakerWidth,1,100)/100,a=Math.max(i*s,12),o=Math.max(r/(2*t*e),12);return{halfW:a,halfH:o}}function Mm(n,e){const t=Cn(n,n.selectedIndex),i=t?1:0,r=1/Math.max(z.breakerFadeSeconds,.05);if(n.breakerOpacity+=(i-n.breakerOpacity)*Math.min(1,r*e),Math.abs(n.breakerOpacity-i)<.001&&(n.breakerOpacity=i),!t&&n.breakerOpacity<.01){yl(n),n.breaker.active=0;return}const s=n.blobs[n.selectedIndex]||null,a=Math.max(n.focusZoom||1,1),o=n.view.halfH/a,{halfW:l,halfH:c}=xm(n),u=-o-c*1.25,h=o+c*1.25,d=u+(h-u)*n.scrollProgress;n.breaker.x=s?s.centerX:0,n.breaker.y=d,n.breaker.halfW=l,n.breaker.halfH=c,n.breaker.radius=c,n.breaker.active=n.breakerOpacity}function Sm(n,e){const t=e.focusTarget;if(t?.circles)for(let i=0;i<n.circles.length;i++){const r=t.circles[i];if(!r)continue;const s=n.circles[i];s.localX=r.localX,s.localY=r.localY,s.anchorX=r.localX+n.centerX,s.anchorY=r.localY+n.centerY}}function ym(n,e,t){const i=Math.max(t.halfW||t.radius||1,1),r=Math.max(t.halfH||t.radius||1,1),s=e.x-n.x,a=e.y-n.y,o=s*s+a*a,l=(u,h)=>{const d=(u-t.x)/i,m=(h-t.y)/r;return d*d+m*m<1.08};if(o<1e-6)return l(n.x,n.y);const c=Fr(((t.x-n.x)*s+(t.y-n.y)*a)/o,0,1);return l(n.x+s*c,n.y+a*c)}function El(n,e){const t=Math.max((e.halfW||e.radius||1)+n.radius,1),i=Math.max((e.halfH||e.radius||1)+n.radius,1);let r=n.x-e.x,s=n.y-e.y;Math.abs(r)<1e-4&&Math.abs(s)<1e-4&&(r=n.x>=e.x?1:-1,s=0);const a=r/t,o=s/i,l=Math.hypot(a,o)||1e-4;let c=r/(t*t)/l,u=s/(i*i)/l;const h=Math.hypot(c,u)||1;return c/=h,u/=h,{e:l,ux:c,uy:u,dx:r,dy:s}}function Em(n){const e=n.breaker;if(!e||e.active<.01||!Cn(n,n.selectedIndex))return;const t=n.blobs[n.selectedIndex];if(!t)return;const i=z.breakerRepulsion*e.active,r=z.breakerSplit*e.active;if(i<=0&&r<=0)return;const s=Math.max(e.halfH||e.radius||1,1);for(const a of t.circles){const{e:o,ux:l,uy:c}=El(a,e),u=a.x>=e.x?1:-1,h=xa(1-Math.abs(a.y-e.y)/Math.max(s+a.radius,1));if(o<z.breakerOverlap){const d=i*(z.breakerOverlap-o)*Math.min(Math.max(s,40),180);a.fx+=l*d+u*r*h,a.fy+=c*d*.22}else h>.15&&r>0&&(a.fx+=u*r*h*.35)}}function bm(n){const e=n.breaker;if(!e||e.active<.01||!Cn(n,n.selectedIndex))return;const t=n.blobs[n.selectedIndex];if(!t)return;const i=z.breakerPush*e.active;if(i<=0)return;const r=Math.max(e.halfH||e.radius||1,1);for(const s of t.circles){const{e:a,ux:o,uy:l}=El(s,e);if(a>=z.breakerOverlap)continue;let c=o,u=l*.18;Math.abs(s.x-e.x)<Math.max(8,s.radius*.25)&&(c=s.x>=e.x?1:-1,u=0);const h=Math.hypot(c,u)||1;c/=h,u/=h;const d=(z.breakerOverlap-a)*i*Math.min(Math.max(r,40),180);s.x+=c*d,s.y+=u*d;const m=s.vx*c+s.vy*u;m<0&&(s.vx-=m*c,s.vy-=m*u)}}const Mr=1/60,Tm=.25,Am=Math.PI*(3-Math.sqrt(5)),Ao=1.35,wo=[[-.74,.08],[-.08,-.34],[.34,.34],[.82,-.1]],ps=.5,bl=pa;function wr(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}const Bt=(n,e,t)=>n<e?e:n>t?t:n;function gi(n,e){return n.activeBlobLimit!=null&&e>=n.activeBlobLimit}const ms=n=>n*n*(3-2*n),Rt=(n,e,t)=>n+(e-n)*t;class wm{constructor(e,t,i,r,s,a){this.blobIndex=e,this.index=t,this.localX=i,this.localY=r,this.anchorX=i,this.anchorY=r,this.x=i,this.y=r,this.vx=0,this.vy=0,this.radiusT=s,this.baseRadius=0,this.radius=0,this.seed=a,this.angle=0,this.scale=1}}class Rm{constructor(e,t){this.index=e,this.seed=t,this.rng=wr(t),this.noise2D=Up(wr(t^2654435769)),this.aspect=Rt(1,1.45,this.rng()),this.circles=[],this.links=[],this.centerX=0,this.centerY=0,this.homeFx=0,this.homeFy=0,this.velX=0,this.velY=0,this.velFromX=0,this.velFromY=0,this.velToX=0,this.velToY=0,this.phaseTime=0,this.phaseDur=Rt(2,14,this.rng()),this.easeDur=Rt(3,6,this.rng()),this.nudgeIn=Rt(1,6,this.rng()),this.exitMotionBlend=null,this.halfW=1,this.halfH=1,this.fitHalfW=1,this.fitHalfH=1,this.restCenterX=0,this.restCenterY=0,this.focusLayoutRx=0,this.focusLayoutRy=0,this.focusVideoHalfW=0,this.focusVideoHalfH=0,this.minX=0,this.minY=0,this.maxX=0,this.maxY=0,this.centroidX=0,this.centroidY=0}get params(){return z.blobs[this.index]}get videoPinned(){return z.displaceAmount<.01}get videoFocusFramed(){return this.videoPinned&&this.focusVideoHalfW>0&&this.focusVideoHalfH>0}get videoFrameCenterX(){return this.focusVideoHalfW>0?this.centerX:this.centerX+this.restCenterX}get videoFrameCenterY(){return this.focusVideoHalfH>0?this.centerY:this.centerY+this.restCenterY}get videoFrameHalfW(){return this.focusVideoHalfW>0?this.focusVideoHalfW:this.fitHalfW}get videoFrameHalfH(){return this.focusVideoHalfH>0?this.focusVideoHalfH:this.fitHalfH}build(){const e=this.params,t=wr(this.seed),i=Bt(Math.round(e.circleCount),1,Hi),r=Math.max(e.minRadius,e.maxRadius);this.clusterRx=r*Ao*this.aspect,this.clusterRy=r*Ao/this.aspect;const s=Bt(Math.round(i/5),2,wo.length),a=wo.slice(0,s).map(([o,l])=>({x:o*this.clusterRx+(t()-.5)*this.clusterRx*.1,y:l*this.clusterRy+(t()-.5)*this.clusterRy*.1,owner:-1,ownerDist:1/0}));this.circles=[];for(let o=0;o<i;o++){const l=(o+.5)/i,c=Math.sqrt(l),u=o*Am;let h=Math.cos(u)*c*this.clusterRx+(t()-.5)*this.clusterRx*.22,d=Math.sin(u)*c*this.clusterRy+(t()-.5)*this.clusterRy*.22,m=0,g=1/0;for(let f=0;f<a.length;f++){const R=Math.hypot(h-a[f].x,d-a[f].y);R<g&&(g=R,m=f)}h+=(a[m].x-h)*ps,d+=(a[m].y-d)*ps;const M=g*(1-ps),p=Bt(1-M/(this.clusterRy*.95)+(t()-.5)*.25,.02,1);this.circles.push(new wm(this.index,o,h,d,p,t()*1e3)),M<a[m].ownerDist&&(a[m].ownerDist=M,a[m].owner=o)}for(const o of a)o.owner>=0&&(this.circles[o.owner].radiusT=1);this.resolveRadii(),this.relaxAnchors(50,t),this.buildLinks(3),this.measureRestFrame();for(const o of this.circles)o.restLocalX=o.localX,o.restLocalY=o.localY,o.x=o.anchorX=o.localX+this.centerX,o.y=o.anchorY=o.localY+this.centerY,o.vx=o.vy=0}resolveRadii(){const e=this.params,t=Math.min(e.minRadius,e.maxRadius),i=Math.max(e.minRadius,e.maxRadius);for(const r of this.circles)r.baseRadius=t+(i-t)*r.radiusT,r.radius===0&&(r.radius=r.baseRadius)}relaxLayoutAt(e,t,i,r){const s=this.clusterRx,a=this.clusterRy,o=this.circles.map(c=>({localX:c.localX,localY:c.localY}));this.clusterRx=t,this.clusterRy=i;for(let c=0;c<this.circles.length;c++)this.circles[c].localX=e[c].localX,this.circles[c].localY=e[c].localY;this.resolveRadii(),this.relaxAnchors(48,()=>.5,r);const l=this.circles.map(c=>({localX:c.localX,localY:c.localY}));for(let c=0;c<this.circles.length;c++)this.circles[c].localX=o[c].localX,this.circles[c].localY=o[c].localY;return this.clusterRx=s,this.clusterRy=a,this.seat(),l}relaxAnchors(e,t,i=z.overlapTarget){const r=i,s=this.circles.length;for(let a=0;a<e;a++){for(let o=0;o<s;o++){const l=this.circles[o];for(let c=o+1;c<s;c++){const u=this.circles[c];let h=u.localX-l.localX,d=u.localY-l.localY,m=Math.hypot(h,d);if(m<1e-4){const R=t()*Math.PI*2;h=Math.cos(R),d=Math.sin(R),m=1e-4}const g=(l.baseRadius+u.baseRadius)*r;if(m>=g)continue;const M=(g-m)*.5,p=h/m*M,f=d/m*M;l.localX-=p,l.localY-=f,u.localX+=p,u.localY+=f}}for(const o of this.circles){const l=Math.hypot(o.localX/this.clusterRx,o.localY/this.clusterRy);if(l>1){const c=1+(l-1)*.5;o.localX/=c,o.localY/=c}}}}buildLinks(e){this.links=[];const t=new Set,i=this.circles.length;for(let r=0;r<i;r++){const s=this.circles[r],a=[];for(let o=0;o<i;o++){if(o===r)continue;const l=this.circles[o];a.push({j:o,d:Math.hypot(l.localX-s.localX,l.localY-s.localY)})}a.sort((o,l)=>o.d-l.d);for(let o=0;o<Math.min(e,a.length);o++){const{j:l,d:c}=a[o],u=r<l?`${r}:${l}`:`${l}:${r}`;t.has(u)||(t.add(u),this.links.push({a:r,b:l,restLength:c}))}}}measureRestFrame(){let e=1/0,t=-1/0,i=1/0,r=-1/0,s=0,a=0;for(const l of this.circles){const c=l.baseRadius*bl;e=Math.min(e,l.localX-c),t=Math.max(t,l.localX+c),i=Math.min(i,l.localY-c),r=Math.max(r,l.localY+c),s=Math.max(s,Math.abs(l.localX)+c),a=Math.max(a,Math.abs(l.localY)+c)}Number.isFinite(e)||(e=t=i=r=0),this.restCenterX=(e+t)*.5,this.restCenterY=(i+r)*.5,this.halfW=s||1,this.halfH=a||1;const o=z.videoFitPadding;this.fitHalfW=Math.max((t-e)*.5,1)*o,this.fitHalfH=Math.max((r-i)*.5,1)*o}seat(){for(const e of this.circles)e.x=e.anchorX=e.localX+this.centerX,e.y=e.anchorY=e.localY+this.centerY,e.vx=e.vy=0,e.fx=0,e.fy=0;this.updateCentroid(),this.updateBounds()}placeAt(e,t,i){const r=this.freeSpace(e);this.homeFx=Bt(t,-1,1),this.homeFy=Bt(i,-1,1),this.centerX=this.homeFx*r.x,this.centerY=this.homeFy*r.y,this.freeRef=r}randomNudge(){const e=this.rng()*Math.PI*2;this.nudge(Math.cos(e),Math.sin(e),z.nudgeSpeed,z.nudgeSeconds)}freeSpace(e){const t=e.edgeBuffer!=null?e.edgeBuffer:z.edgeBuffer/Math.max(e.layoutScale||1,1e-6);return{x:Math.max(0,e.halfW-this.halfW-t),y:Math.max(0,e.halfH-this.halfH-t)}}reposition(e){const t=this.freeSpace(e),i=this.freeRef||t,r=i.x>0?this.centerX/i.x:this.homeFx,s=i.y>0?this.centerY/i.y:this.homeFy;this.centerX=Bt(r,-1,1)*t.x,this.centerY=Bt(s,-1,1)*t.y,this.freeRef=t}bounceAxis(e,t,i){return e>i?{pos:i,vel:-Math.abs(t)*.85}:e<-i?{pos:-i,vel:Math.abs(t)*.85}:{pos:e,vel:t}}nextPhase(e){const t=this.rng;if(this.velFromX=this.velX,this.velFromY=this.velY,this.phaseTime=0,this.easeDur=Rt(z.easeSeconds*.7,z.easeSeconds*1.6,t()),t()<z.restChance){this.velToX=0,this.velToY=0,this.phaseDur=Rt(z.restSecondsMin,z.restSecondsMax,t());return}const i=t()*Math.PI*2;let r=Math.cos(i),s=Math.sin(i);const a=this.freeSpace(e),o=a.x>0?Bt(Math.abs(this.centerX)/a.x,0,1):0,l=a.y>0?Bt(Math.abs(this.centerY)/a.y,0,1):0,c=ms(Bt((o-.7)/.3,0,1)),u=ms(Bt((l-.7)/.3,0,1));r=Rt(r,-Math.sign(this.centerX||1),c),s=Rt(s,-Math.sign(this.centerY||1),u);const h=Math.hypot(r,s)||1,d=Rt(z.driftSpeedMin,z.driftSpeedMax,Math.pow(t(),2.6));this.velToX=r/h*d,this.velToY=s/h*d,this.phaseDur=Rt(z.driftSecondsMin,z.driftSecondsMax,t())}nudge(e,t,i,r){const s=Math.hypot(e,t)||1;this.velFromX=this.velX,this.velFromY=this.velY,this.velToX=e/s*i,this.velToY=t/s*i,this.phaseTime=0,this.easeDur=1.2,this.phaseDur=r}updateDrift(e,t,i,r=1){this.nudgeIn-=e,this.nudgeIn<=0&&(this.randomNudge(),this.nudgeIn=Rt(z.nudgeIntervalMin,z.nudgeIntervalMax,this.rng())),this.phaseTime+=e;const s=ms(Bt(this.phaseTime/this.easeDur,0,1));this.velX=Rt(this.velFromX,this.velToX,s),this.velY=Rt(this.velFromY,this.velToY,s);const a=this.freeSpace(t);this.centerX+=this.velX*e*r,this.centerY+=this.velY*e*r;let o=this.bounceAxis(this.centerX,this.velX,a.x),l=this.bounceAxis(this.centerY,this.velY,a.y);this.centerX=o.pos,this.centerY=l.pos,o.vel!==this.velX&&(this.velX=o.vel,this.velFromX=o.vel,this.velToX=o.vel),l.vel!==this.velY&&(this.velY=l.vel,this.velFromY=l.vel,this.velToY=l.vel),this.phaseTime>=this.phaseDur&&this.nextPhase(t)}updateCentroid(){let e=0,t=0;for(const r of this.circles)e+=r.x,t+=r.y;const i=this.circles.length||1;this.centroidX=e/i,this.centroidY=t/i}updateBounds(){let e=1/0,t=1/0,i=-1/0,r=-1/0;for(const s of this.circles)e=Math.min(e,s.x-s.radius),t=Math.min(t,s.y-s.radius),i=Math.max(i,s.x+s.radius),r=Math.max(r,s.y+s.radius);this.minX=e,this.minY=t,this.maxX=i,this.maxY=r}}class Cm{constructor(){this.time=0,this.accumulator=0,this.view={halfW:800,halfH:450,layoutScale:1,edgeBuffer:z.edgeBuffer},this.blobs=[],this.allCircles=[],this.scattered=!1,this.pairStride=1,this.pairMix=new Float32Array(1),this.contactDuration=new Float32Array(1),this.debugPairFx=new Float32Array(1),this.debugPairFy=new Float32Array(1),this.selectedIndex=-1,this.paramTransitioning=!1,this.paramT=0,this.paramTargetIndex=-1,this.paramFrom=null,this.paramTo=null,this.restSnapshot=null,this.motionSnapshots=null,this.exitSlots=[],this.exitPhase="idle",this.exitT=0,this.returnWaitT=0,this.onSelectionChange=null,this.activeBlobLimit=null,this.focusZoom=1,this.focusZoomFrom=1,this.focusZoomTo=1,this.focusRest=null,this.focusMorphFrom=null,this.focusTarget=null,this.focusActive=null,this.focusVideoReady=!1,this.focusVideoW=0,this.focusVideoH=0,this.focusMobilePortrait=!1,this.focusSettling=!1,this.focusSettleT=0,this.focusSettleIndex=-1,this.focusLinksReady=!1,this.scrollTarget=0,this.scrollProgress=0,this.scrollCss=0,this.breakerOpacity=0,this.infoBoxCssW=0,this.infoBoxCssH=0,this.breaker={x:0,y:0,radius:1,halfW:1,halfH:1,active:0},this.focusRestContain=1,this.build()}get selectionSettled(){return this.selectedIndex>=0&&!this.paramTransitioning&&!this.focusSettling}pairIndex(e,t){return e*this.pairStride+t}build(){this.blobs=[];for(let t=0;t<z.blobs.length;t++){const i=new Rm(t,4096+t*40503);i.build(),this.blobs.push(i)}this.pairStride=Math.max(1,this.blobs.length);const e=this.pairStride*this.pairStride;this.pairMix=new Float32Array(e),this.contactDuration=new Float32Array(e),this.debugPairFx=new Float32Array(e),this.debugPairFy=new Float32Array(e),this.scattered=!1,this.motionSnapshots=null,this.exitSlots=[],this.exitPhase="idle",this.exitT=0,this.returnWaitT=0,this.collectCircles()}scatterBlobs(e){const t=[];for(const i of this.blobs){let r=!1,s=0,a=0,o=-1/0;for(let l=0;l<80;l++){const c=(e()*2-1)*.95,u=(e()*2-1)*.95;i.placeAt(this.view,c,u);let h=1/0;for(const d of t){const m=d.centerX-i.centerX,g=d.centerY-i.centerY,M=Math.max(1,i.halfW+d.halfW),p=Math.max(1,i.halfH+d.halfH);h=Math.min(h,Math.hypot(m/M,g/p))}if(t.length===0||h>=1.15){r=!0;break}h>o&&(o=h,s=c,a=u)}r||i.placeAt(this.view,s,a),t.push(i)}}rebuildBlob(e){const t=this.blobs[e];t&&(t.build(),t.reposition(this.view),t.seat(),this.collectCircles())}collectCircles(){this.allCircles=[];for(const e of this.blobs)this.allCircles.push(...e.circles)}setFocus(e){if(e===-1){if(this.paramTargetIndex<0&&this.paramTransitioning||this.exitPhase==="waiting"||this.exitPhase==="returning"||this.selectedIndex<0&&!this.paramTransitioning&&this.exitPhase==="idle")return;this.beginParamTransition(-1);return}e<0||e>=this.blobs.length||e===this.selectedIndex&&this.paramTargetIndex===e||this.beginParamTransition(e)}beginParamTransition(e){const t=this.selectedIndex;if(e>=0&&t>=0&&t!==e&&this.focusRest){const i=this.blobs[t];if(i){const r=this.focusActive?.pose??Sn(i);ra(i,r,this.focusRest,1)}yo(this)}if(this.paramFrom=_l(this),this.paramTo=nm(this,e),this.paramTargetIndex=e,this.paramT=0,this.paramTransitioning=!0,yl(this),this.focusRestContain=e>=0?1:0,e>=0){const i=this.blobs[e];i.resolveRadii(),i.measureRestFrame(),this.selectedIndex=e,Xp(this,e),(this.exitPhase==="returning"||this.exitPhase==="waiting")&&(this.exitPhase="exiting"),hm(this,e),e!==t&&this.onSelectionChange?.(e,t)}else if(t>=0||this.exitPhase==="exiting"){if(t>=0){const i=this.blobs[t];i&&(Dn(i),this.focusActive={pose:Sn(i),zoom:this.focusZoom}),this.focusZoomFrom=1}this.exitPhase==="exiting"&&(this.exitPhase="away"),this.onSelectionChange?.(-1,t)}}setFocusVideoAspect(e,t,i){qp(this,e,t,i)}updateSelection(e){const t=this.paramTransitioning,i=t&&this.paramTargetIndex<0?this.selectedIndex:-1;im(this,e),Kp(this,e),t&&!this.paramTransitioning&&this.paramTargetIndex<0&&(yo(this),i>=0&&pl(this,i),pm(this)),gm(this,e)}setViewport(e,t,i=1){if(this.view.halfW=e,this.view.halfH=t,this.view.layoutScale=i,this.view.edgeBuffer=z.edgeBuffer/Math.max(i,1e-6),this.scattered){for(const r of this.blobs)mi(this,r.index)||r.reposition(this.view);dm(this)}else{const r=wr(Math.random()*4294967295>>>0);this.scatterBlobs(r);for(const s of this.blobs)s.seat();this.scattered=!0}}advance(e){this.accumulator+=Math.min(e,Tm);let t=0;for(;this.accumulator>=Mr&&t<8;)this.step(Mr),this.accumulator-=Mr,t++;t===8&&(this.accumulator=0)}warmup(e){for(let t=0;t<e;t++)this.step(Mr)}step(e){this.time+=e;const t=this.time;this.updateSelection(e),this.view.edgeBuffer=z.edgeBuffer/Math.max(this.view.layoutScale||1,1e-6),_m(this,e),Mm(this,e);for(const r of this.blobs){if(gi(this,r.index))continue;if(r.resolveRadii(),mi(this,r.index)){const a=r.noise2D;for(const o of r.circles){const l=a(t*z.breathSpeed+o.seed*3,0);o.radius=o.baseRadius*(1+z.breathAmount*l)}r.updateCentroid();continue}if(r.exitMotionBlend!=null&&r.exitMotionBlend<1){const a=Math.max(z.returnMotionBlendSeconds,.05);r.exitMotionBlend=Math.min(1,r.exitMotionBlend+e/a),r.exitMotionBlend>=1&&(r.exitMotionBlend=null)}if(ds(this,r.index)){r.updateCentroid();continue}if(Cn(this,r.index)||vr(this,r.index)&&this.selectedIndex===r.index&&this.paramTargetIndex>=0){r.centerX=0,r.centerY=0,r.updateCentroid();continue}const s=r.exitMotionBlend==null?1:r.exitMotionBlend;r.updateDrift(e,this.view,this.blobs,s),r.updateCentroid()}this.applyInternalForces(t,e),Em(this),this.applyInterBlobForces(e),this.integrate(e),bm(this);const i=To(this);for(const r of this.blobs){if(gi(this,r.index))continue;const s=vr(this,r.index),a=hs(this),o=this.selectedIndex===r.index&&this.paramTargetIndex>=0;if(Cn(this,r.index)||s&&o){r.centerX=0,r.centerY=0,Sm(r,this);const l=a*(1-Bt(this.scrollProgress/.12,0,1))*(1-i*.85);if(l<this.focusRestContain)this.focusRestContain=l;else{const u=Math.max(z.breakerHealSeconds,.05),h=Math.min(1,e/u);this.focusRestContain+=(l-this.focusRestContain)*h}const c=this.focusRestContain;$p(r,c),c>.01&&jp(r,c,!1)}else s&&Dn(r);r.updateBounds()}this.updatePairMix(e)}updatePairMix(e){const t=this.activeBlobLimit==null?this.blobs.length:Math.min(this.blobs.length,this.activeBlobLimit),i=1/Math.max(z.flowMixSeconds,.05),r=z.contactOverlap+.15;for(let s=0;s<t;s++)for(let a=s+1;a<t;a++){const o=this.blobs[s],l=this.blobs[a],c=l.centerX-o.centerX,u=l.centerY-o.centerY,h=Math.max(1,o.halfW+l.halfW),d=Math.max(1,o.halfH+l.halfH),g=Math.hypot(c/h,u/d)<r?1:0,M=this.pairIndex(s,a),p=this.pairMix[M],f=p+(g-p)*Math.min(1,i*e);this.pairMix[M]=f,this.pairMix[this.pairIndex(a,s)]=f}}applyInternalForces(e,t){for(const i of this.blobs){if(gi(this,i.index)||mi(this,i.index))continue;const r=i.circles,s=r.length,a=vr(this,i.index),o=hs(this),l=this.selectedIndex===i.index&&this.paramTargetIndex>=0,c=Cn(this,i.index)||a||this.selectedIndex===i.index&&this.selectionSettled,u=c&&l&&this.breaker&&this.breaker.active>.01,h=u?To(this):0,d=(c?z.focusMotionSurvival*(a?o:1):1)*(i.exitMotionBlend==null?1:i.exitMotionBlend),m=i.exitMotionBlend==null?1:i.exitMotionBlend,g=c?ml:z.overlapTarget,M=(c?Qp:z.repulsion)*(a?o:1)*m,p=(c?z.anchorStiffness*z.focusAnchorStiffness:z.anchorStiffness)*(1-h*.4),f=(c?z.cohesion*z.focusCohesion:z.cohesion)*(1-h*.92)*m,R=z.linkStiffness*(a?o:1)*(1-h*.55)*m;if(ds(this,i.index)){const I=i.noise2D;for(let T=0;T<s;T++){const b=r[T];b.anchorX=b.localX+i.centerX,b.anchorY=b.localY+i.centerY,b.x=b.anchorX,b.y=b.anchorY,b.vx=0,b.vy=0,b.fx=0,b.fy=0;const F=I(e*z.breathSpeed+b.seed*3,0);b.radius=b.baseRadius*(1+z.breathAmount*d*F)}continue}const A=i.noise2D;for(let I=0;I<s;I++){const T=r[I];T.anchorX=T.localX+i.centerX,T.anchorY=T.localY+i.centerY,T.fx=0,T.fy=0;const b=e*z.noiseSpeed;T.fx+=z.noiseStrength*d*A(b+T.seed,0),T.fy+=z.noiseStrength*d*A(0,b+T.seed+100),T.fx+=-p*(T.x-T.anchorX),T.fy+=-p*(T.y-T.anchorY),T.fx+=f*d*(i.centroidX-T.x),T.fy+=f*d*(i.centroidY-T.y);const F=A(e*z.breathSpeed+T.seed*3,0);T.radius=T.baseRadius*(1+z.breathAmount*d*F),T.angle=0,T.scale=1}const E=u?this.breaker:null;for(const I of i.links){const T=r[I.a],b=r[I.b];if(!T||!b||E&&h>.04&&ym(T,b,E))continue;const F=b.x-T.x,S=b.y-T.y,x=Math.hypot(F,S)||1e-4,L=R*(x-I.restLength),X=F/x,B=S/x;T.fx+=L*X,T.fy+=L*B,b.fx-=L*X,b.fy-=L*B}for(let I=0;I<s;I++){const T=r[I];for(let b=I+1;b<s;b++){const F=r[b];Ro(T,F,g,M)}}}}applyInterBlobForces(e){this.debugPairFx.fill(0),this.debugPairFy.fill(0);const t=this.blobs,i=z.contactOverlap+.15;for(let r=0;r<t.length;r++)if(!gi(this,r))for(let s=r+1;s<t.length;s++){if(gi(this,s))continue;const a=t[r],o=t[s];if(mi(this,r)||mi(this,s))continue;const l=this.pairIndex(r,s),c=a.exitMotionBlend==null?1:a.exitMotionBlend,u=o.exitMotionBlend==null?1:o.exitMotionBlend,h=Math.min(c,u);if(h<.001)continue;const d=o.centerX-a.centerX,m=o.centerY-a.centerY,g=Math.max(1,a.halfW+o.halfW),M=Math.max(1,a.halfH+o.halfH),f=Math.hypot(d/g,m/M)<i;f?this.contactDuration[l]+=e:this.contactDuration[l]=0;let R=0,A=0;const E=(a.halfW+o.halfW)*1.35,I=(a.halfH+o.halfH)*1.35;if(Math.abs(d)<=E&&Math.abs(m)<=I)for(const b of a.circles)for(const F of o.circles){const S=b.fx,x=b.fy;Ro(b,F,z.crossOverlapTarget,z.crossRepulsion*h),R+=b.fx-S,A+=b.fy-x}if(f&&z.contactSeparationBias>0){const b=Math.min(1,this.contactDuration[l]/Math.max(z.contactSeparationRamp,.05)),F=z.contactSeparationBias*b*h,S=Math.hypot(d,m)||1e-4,x=d/S,L=m/S,X=-F*x,B=-F*L;for(const W of a.circles)W.fx+=X,W.fy+=B;for(const W of o.circles)W.fx-=X,W.fy-=B;R+=X*a.circles.length,A+=B*a.circles.length}const T=1/Math.max(a.circles.length,1);this.debugPairFx[l]=R*T,this.debugPairFy[l]=A*T,this.debugPairFx[this.pairIndex(s,r)]=-R*T,this.debugPairFy[this.pairIndex(s,r)]=-A*T}}integrate(e){const t=this.view;for(const i of this.blobs){if(gi(this,i.index)||mi(this,i.index)||ds(this,i.index))continue;const r=Cn(this,i.index),s=r&&this.scrollProgress>.02?z.maxSpeed*z.breakerMaxSpeedScale:z.maxSpeed;for(const a of i.circles){a.vx=(a.vx+a.fx*e)*z.damping,a.vy=(a.vy+a.fy*e)*z.damping;const o=Math.hypot(a.vx,a.vy);if(o>s){const l=s/o;a.vx*=l,a.vy*=l}a.x+=a.vx*e,a.y+=a.vy*e,Pm(a,t,r)}if(vr(this,i.index)){const o=1-hs(this);if(o>.001)for(const l of i.circles){const c=l.localX+i.centerX,u=l.localY+i.centerY;l.x=Rt(l.x,c,o*.6),l.y=Rt(l.y,u,o*.6),l.vx*=1-o*.35,l.vy*=1-o*.35}Dn(i)}}}}function Ro(n,e,t,i){if(i<=0)return;const r=e.x-n.x,s=e.y-n.y,a=(n.radius+e.radius)*t;if(Math.abs(r)>a||Math.abs(s)>a)return;const o=Math.hypot(r,s)||1e-4;if(o>=a)return;const l=i*(a-o),c=r/o,u=s/o;n.fx-=l*c,n.fy-=l*u,e.fx+=l*c,e.fy+=l*u}function Pm(n,e,t=!1){const i=z.edgeGrip,r=e.edgeBuffer!=null?e.edgeBuffer:z.edgeBuffer/Math.max(e.layoutScale||1,1e-6),s=n.radius*bl,a=e.halfW-r-s,o=e.halfH-r-s;n.x>a?(n.x+=(a-n.x)*i,n.vx>0&&(n.vx=0)):n.x<-a&&(n.x+=(-a-n.x)*i,n.vx<0&&(n.vx=0)),!t&&(n.y>o?(n.y+=(o-n.y)*i,n.vy>0&&(n.vy=0)):n.y<-o&&(n.y+=(-o-n.y)*i,n.vy<0&&(n.vy=0)))}const Lm=`// Fullscreen quad. PlaneGeometry(2, 2) already spans clip space under the
// orthographic camera set up in main.js, so this is a straight pass-through
// that only forwards the UVs used to reconstruct pixel space in the fragment.

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Dm=`// Liquid-metal metaballs with a per-circle video mat.
//
// ONE field. Every circle in the scene contributes to the same scalar field
// regardless of which blob it belongs to, so circles from different blobs merge
// with exactly the same soft necks as circles inside one blob. What a blob owns
// is a video and a frame of reference, not a shape and not a pass.
//
// Silhouette and material are decoupled. The silhouette is ALWAYS cut from the
// clean, unmodified metaball field — nothing may perturb it. Inside the shape,
// each fragment picks a single video (winner-takes-all). Where the boundary
// falls is steered by a slow curl-noise flow that displaces the sample point
// used for material contributions only, folding contacts into large tongues as
// two blobs stay pressed together. UV blending only ever happens between
// circles of the *same* blob.
//
// MAX_BLOBS is patched at runtime to the live blob count. Previews live in one
// atlas (WebGL cannot dynamically index sampler arrays). Circles live in
// textures so uniform limits do not cap how many blobs can exist.
//
// Written against GLSL ES 1.0 constraints (constant loop bounds, indices built
// only from loop counters) so it compiles on WebGL1 and under three's WebGL2
// compatibility prelude. Screen-space AA of the interface needs derivatives;
// ShaderMaterial is created with \`extensions: { derivatives: true }\` so three
// injects the OES_standard_derivatives enable in the right place.

precision highp float;

#define MAX_BLOBS 4
#define MAX_PER_BLOB 24

// Kernel gain. The polynomial kernel below is 0 at the rim, so without a gain
// the default threshold of 0.55 would cut an isolated circle at only ~0.42 of
// its radius — circles would render far smaller than uRadius says and would
// never reach each other. The gain rescales the field so that at the default
// falloff/threshold the iso-contour sits at ~0.85 * radius. That puts the
// silhouette, the radius sliders and overlapTarget in the same units, which is
// what makes neighbouring circles actually fuse.
#define KERNEL_GAIN 12.0

varying vec2 vUv;

uniform vec2  uResolution;   // canvas size in CSS pixels
uniform float uTime;
uniform float uLayoutScale;  // CSS px per layout unit — keeps flow in world space
uniform float uFocusZoom;    // 1 = normal; >1 zooms toward canvas centre

// --- videos: one atlas of previews + one selected full-res video ------------
uniform sampler2D uVideoAtlas;
uniform sampler2D uVideoFull;
uniform float uAtlasCols;
uniform float uAtlasRows;
uniform int   uFullIndex;               // blob using uVideoFull, or -1
uniform vec2  uVideoRes[MAX_BLOBS];     // native pixel size of preview video
uniform vec2  uVideoResFull[MAX_BLOBS]; // native pixel size of full video
uniform float uHasVideo[MAX_BLOBS];     // 0 when preview failed to load
uniform float uHasVideoFull[MAX_BLOBS]; // 0 when full video not ready
uniform float uVideoBlend[MAX_BLOBS];   // 0 = preview, 1 = full
uniform int   uBlobCount;
uniform int   uCounts[MAX_BLOBS];       // active circles in each group
uniform vec2  uBlobCenter[MAX_BLOBS];   // live centre of the group's frame, px
uniform vec2  uBlobFit[MAX_BLOBS];      // half-extents of its video frame, px
uniform vec2  uBoundsMin[MAX_BLOBS];    // live AABB, for per-pixel group culling
uniform vec2  uBoundsMax[MAX_BLOBS];
uniform float uDisplace[MAX_BLOBS];     // 0 = video pinned to the blob, 1 = dragged
uniform float uVideoContain[MAX_BLOBS]; // 1 = letterbox (like object-fit: contain)
uniform float uVideoOpacity[MAX_BLOBS];
// Progressive mix amount per ordered pair (i*MAX_BLOBS+j). Symmetric, [0,1].
uniform float uPairMix[MAX_BLOBS * MAX_BLOBS];

// --- per circle, packed into textures so blob count is not a uniform cap ----
uniform sampler2D uCircleTex;     // xy = current centre, zw = rest centre
uniform sampler2D uCircleMetaTex; // x = radius, y = angle, z = scale

// --- global -----------------------------------------------------------------
uniform float uThreshold;      // metaball cut, ~0.55
uniform float uEdgeSoftness;   // smoothstep width around the threshold
uniform float uFalloff;        // kernel sharpness -> how eagerly circles merge
uniform float uUvSharpness;    // within one blob: 1 = soft smear, high = hard seams
uniform float uInterfaceWidth; // px of AA across a video/video boundary (0 = hard)
uniform bool  uVideoStretch;   // false = cover-fit (crop), true = stretch to the box
uniform bool  uUseFullTransform;
uniform vec3  uBlobColor;

// Meniscus: a thin rim drawn where two blob contributions are equal.
uniform float uMeniscus;         // 0 = off, 1 = on (also scales brightness)
uniform float uMeniscusWidth;    // rim half-width in pixels
uniform float uMeniscusEdgeFade; // px inside the silhouette before the rim is full
uniform vec3  uMeniscusColor;

// Curl-noise flow — displaces the material sample only.
uniform float uFlowMaster;
uniform float uFlowScale;      // feature size, layout px
uniform float uFlowStrength;   // displacement amplitude, layout px
uniform float uFlowSpeed;      // evolution rate (keep tiny)
uniform float uFlowEdgeFade;   // px inside silhouette before flow is full

uniform float uShowOutlines;

// Kinematic breaker ellipse — punches through the selected blob on scroll.
uniform vec3  uBreaker;      // xy = centre CSS px
uniform vec2  uBreakerSize;  // half extents CSS px (x = width, y = height)
uniform float uBreakerOn;    // 0..1 active
uniform float uBreakerCut;   // field subtraction gain

/**
 * Map a point in a blob's own frame (origin at its centre, pixels) to UVs of
 * that blob's video.
 *
 * \`cover\` preserves the video's aspect and crops the overflow; \`stretch\` maps
 * the frame edge to edge. The result is clamped rather than wrapped — a torn
 * slice that reaches past the frame must stretch its edge pixel, not tile the
 * video back in.
 */
vec2 fitUV(vec2 local, vec2 halfBox, vec2 videoRes, float contain) {
  vec2 box = max(halfBox * 2.0, vec2(1.0));
  vec2 fitted;

  if (uVideoStretch) {
    fitted = box;
  } else {
    float boxAspect = box.x / box.y;
    float vidAspect = videoRes.x / max(videoRes.y, 1.0);
    if (contain > 0.5) {
      // object-fit: contain — show the full frame, letterbox if needed
      fitted = boxAspect > vidAspect
        ? vec2(box.y * vidAspect, box.y)
        : vec2(box.x, box.x / vidAspect);
    } else {
      // object-fit: cover — fill the box, crop overflow
      fitted = boxAspect > vidAspect
        ? vec2(box.x, box.x / vidAspect)
        : vec2(box.y * vidAspect, box.y);
    }
  }

  return clamp(local / fitted + 0.5, 0.0, 1.0);
}

/** Half-extents of the fitted video rect in local space (contain or cover). */
vec2 fittedVideoHalf(vec2 halfBox, vec2 videoRes, float contain) {
  vec2 box = max(halfBox * 2.0, vec2(1.0));
  if (uVideoStretch) return halfBox;

  float boxAspect = box.x / box.y;
  float vidAspect = videoRes.x / max(videoRes.y, 1.0);
  vec2 fitted;
  if (contain > 0.5) {
    fitted = boxAspect > vidAspect
      ? vec2(box.y * vidAspect, box.y)
      : vec2(box.x, box.x / vidAspect);
  } else {
    fitted = boxAspect > vidAspect
      ? vec2(box.x, box.x / vidAspect)
      : vec2(box.y * vidAspect, box.y);
  }
  return fitted * 0.5;
}

vec2 atlasUV(vec2 uv, int b) {
  float cols = max(uAtlasCols, 1.0);
  float rows = max(uAtlasRows, 1.0);
  float col = mod(float(b), cols);
  float row = floor(float(b) / cols);
  vec2 cell = vec2(col, rows - 1.0 - row);
  return (cell + clamp(uv, 0.001, 0.999)) / vec2(cols, rows);
}

vec2 circleTexel(int b, int j) {
  return vec2(
    (float(j) + 0.5) / float(MAX_PER_BLOB),
    (float(b) + 0.5) / float(MAX_BLOBS)
  );
}

/** 1 inside the valid video frame, 0 outside — kills clamp streaks at edges. */
float videoFrameMask(vec2 local, vec2 halfBox, vec2 videoRes, float contain) {
  if (contain < 0.5) return 1.0;
  vec2 fitHalf = fittedVideoHalf(halfBox, videoRes, contain);
  vec2 edge = abs(local) - fitHalf;
  float outside = max(edge.x, edge.y);
  return 1.0 - smoothstep(0.0, 1.5, outside);
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

/** Smooth value noise in [-1, 1]. Low frequency only — never used as speckles. */
float hash21(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;
}

/**
 * Divergence-free 2D curl of a scalar potential. Evaluated in stable layout
 * (world) space so resize and blob drift do not shift the swirl. One strong
 * octave plus a much weaker second for a little asymmetry — never fine enough
 * to look granular.
 */
vec2 curlFlow(vec2 worldP) {
  float scale = max(uFlowScale, 1.0);
  float t = uTime * uFlowSpeed;
  // Slow advection of the potential only — not tied to blob positions.
  vec2 q = worldP / scale + vec2(t * 0.31, -t * 0.23);

  // Finite differences of the potential → curl = (dφ/dy, -dφ/dx).
  float e = 0.35;
  float nL = valueNoise(q + vec2(-e, 0.0));
  float nR = valueNoise(q + vec2( e, 0.0));
  float nD = valueNoise(q + vec2(0.0, -e));
  float nU = valueNoise(q + vec2(0.0,  e));
  vec2 c1 = vec2(nU - nD, nL - nR) / (2.0 * e);

  // Second octave, ~half the frequency contribution, much weaker amplitude.
  vec2 q2 = q * 1.7 + vec2(12.3, -8.1);
  float mL = valueNoise(q2 + vec2(-e, 0.0));
  float mR = valueNoise(q2 + vec2( e, 0.0));
  float mD = valueNoise(q2 + vec2(0.0, -e));
  float mU = valueNoise(q2 + vec2(0.0,  e));
  vec2 c2 = vec2(mU - mD, mL - mR) / (2.0 * e);

  return c1 + c2 * 0.25;
}

float metaballWeight(vec2 d, float radius) {
  float q = length(d) / max(radius, 1.0);
  float k = max(0.0, 1.0 - q * q);
  return pow(k, uFalloff) * k * KERNEL_GAIN;
}

void main() {
  // Pixel space with the origin at the canvas centre — the same space the CPU
  // simulation works in (after layoutScale), so circle uniforms compare directly.
  vec2 p = (vUv - 0.5) * uResolution;
  float focusZoom = max(uFocusZoom, 1.0);
  if (focusZoom > 1.0001) {
    p /= focusZoom;
  }

  // Layout (world) space: invariant under canvas resize.
  float layoutScale = max(uLayoutScale, 1e-4);
  vec2 worldP = p / layoutScale;

  float field = 0.0;               // clean shared field — silhouette ONLY
  float blobField[MAX_BLOBS];      // material scores (may be flow-displaced)
  vec2  blobUv[MAX_BLOBS];
  vec2  blobUvFull[MAX_BLOBS];
  float blobFrameMask[MAX_BLOBS];
  float mixAmt[MAX_BLOBS];         // how strongly each blob is currently mixing

  for (int b = 0; b < MAX_BLOBS; b++) {
    blobField[b] = 0.0;
    blobUv[b] = vec2(0.5);
    blobUvFull[b] = vec2(0.5);
    blobFrameMask[b] = 1.0;
    mixAmt[b] = 0.0;
  }

  // Max pair-mix for each blob (progressive contact with anyone).
  for (int b = 0; b < MAX_BLOBS; b++) {
    if (b >= uBlobCount) break;
    float m = 0.0;
    for (int o = 0; o < MAX_BLOBS; o++) {
      if (o >= uBlobCount || o == b) continue;
      m = max(m, uPairMix[b * MAX_BLOBS + o]);
    }
    mixAmt[b] = m;
  }

  // ---- pass 1: clean silhouette + UVs at the real fragment ----------------
  for (int b = 0; b < MAX_BLOBS; b++) {
    if (b >= uBlobCount) break;

    vec2 mn = uBoundsMin[b];
    vec2 mx = uBoundsMax[b];
    if (p.x < mn.x || p.x > mx.x || p.y < mn.y || p.y > mx.y) continue;

    vec2  uvSum = vec2(0.0);
    vec2  uvFullSum = vec2(0.0);
    float uvWeight = 0.0;
    float groupField = 0.0;

    for (int j = 0; j < MAX_PER_BLOB; j++) {
      if (j >= uCounts[b]) break;
      vec2 cUv = circleTexel(b, j);
      vec4 circle = texture2D(uCircleTex, cUv);
      vec2 pos = circle.xy;
      vec2 anchor = circle.zw;
      vec4 meta = texture2D(uCircleMetaTex, cUv);
      float radius = max(meta.x, 1.0);

      float w = metaballWeight(p - pos, radius);
      groupField += w;

      vec2 src;
      if (uUseFullTransform) {
        vec2 local = p - pos;
        src = anchor + (rot(-meta.y) * local) / max(meta.z, 0.01);
      } else {
        src = p - (pos - anchor);
      }
      src = mix(p, src, uDisplace[b]);
      vec2 localFrame = src - uBlobCenter[b];
      vec2 uvI = fitUV(
        localFrame,
        uBlobFit[b],
        uVideoRes[b],
        uVideoContain[b]
      );
      vec2 uvFullI = fitUV(
        localFrame,
        uBlobFit[b],
        uVideoResFull[b],
        uVideoContain[b]
      );

      float bw = pow(max(w, 1e-6), uUvSharpness);
      uvSum += uvI * bw;
      uvFullSum += uvFullI * bw;
      uvWeight += bw;
    }

    field += groupField;
    // Default material score = clean contribution; overwritten below if flowing.
    blobField[b] = groupField;
    if (uvWeight > 0.0) {
      blobUv[b] = uvSum / uvWeight;
      blobUvFull[b] = uvFullSum / uvWeight;
    }
    blobFrameMask[b] = videoFrameMask(
      p - uBlobCenter[b],
      uBlobFit[b],
      uVideoRes[b],
      uVideoContain[b]
    );
  }

  // Breaker: subtract an invisible ellipse from the shared field so the
  // selected blob splits around the rising info text.
  float breakerW = 0.0;
  if (uBreakerOn > 0.001 && uBreakerSize.y > 0.5) {
    vec2 d = p - uBreaker.xy;
    float ry = max(uBreakerSize.y, 1.0);
    float rx = max(uBreakerSize.x, 1.0);
    vec2 scaled = vec2(d.x * ry / rx, d.y);
    breakerW = metaballWeight(scaled, ry);
    field = max(field - breakerW * max(uBreakerCut, 0.0), 0.0);
  }

  // Silhouette from the clean field. Hard constraint: never modified below.
  float mask = smoothstep(uThreshold - uEdgeSoftness, uThreshold + uEdgeSoftness, field);

  float edgePx = (field - uThreshold) / max(fwidth(field), 1e-5);
  float interior = smoothstep(0.0, max(uFlowEdgeFade, 1e-3), edgePx);

  // ---- pass 2: material scores at curl-displaced positions ----------------
  // Only runs when some contact is mixing and the master is up. Displacement
  // is in layout units, converted to CSS px for the circle comparison.
  float master = uFlowMaster * interior;
  if (master > 1e-4 && uFlowStrength > 1e-4) {
    vec2 flowWorld = curlFlow(worldP) * uFlowStrength * master;
    vec2 flowPx = flowWorld * layoutScale;

    float cullPad = length(flowPx) + 4.0;

    for (int b = 0; b < MAX_BLOBS; b++) {
      if (b >= uBlobCount) break;
      float mb = mixAmt[b];
      if (mb < 1e-4) continue; // not in a mixing contact — keep clean score

      vec2 pMat = p + flowPx * mb;

      vec2 mn = uBoundsMin[b] - cullPad;
      vec2 mx = uBoundsMax[b] + cullPad;
      if (pMat.x < mn.x || pMat.x > mx.x || pMat.y < mn.y || pMat.y > mx.y) {
        blobField[b] = 0.0;
        continue;
      }

      float groupMaterial = 0.0;
      for (int j = 0; j < MAX_PER_BLOB; j++) {
        if (j >= uCounts[b]) break;
        vec2 cUv = circleTexel(b, j);
        vec4 circle = texture2D(uCircleTex, cUv);
        groupMaterial += metaballWeight(pMat - circle.xy, max(texture2D(uCircleMetaTex, cUv).x, 1.0));
      }
      blobField[b] = groupMaterial;
    }
  }

  // --- material: sample each blob with its own UVs -------------------------
  vec3 blobColor[MAX_BLOBS];

  for (int b = 0; b < MAX_BLOBS; b++) {
    if (b >= uBlobCount) break;
    vec3 vidP = texture2D(uVideoAtlas, atlasUV(blobUv[b], b)).rgb;
    vec3 vidF = texture2D(uVideoFull, blobUvFull[b]).rgb;
    float blend = b == uFullIndex ? clamp(uVideoBlend[b], 0.0, 1.0) : 0.0;
    vec3 vid = mix(vidP, vidF, blend);
    float hasVid = mix(uHasVideo[b], uHasVideoFull[b], blend);
    float vidMix = uVideoOpacity[b] * hasVid * blobFrameMask[b];
    blobColor[b] = mix(uBlobColor, vid, vidMix);
  }

  // --- partition: strongest score wins (hard boundary, ~1px AA) ------------
  float top1 = 0.0;
  float top2 = 0.0;
  int i1 = 0;
  int i2 = 0;
  bool hasSecond = false;

  for (int b = 0; b < MAX_BLOBS; b++) {
    if (b >= uBlobCount) break;
    float f = blobField[b];
    if (f > top1) {
      top2 = top1;
      i2 = i1;
      if (top2 > 1e-4) hasSecond = true;
      top1 = f;
      i1 = b;
    } else if (f > top2) {
      top2 = f;
      i2 = b;
      if (f > 1e-4) hasSecond = true;
    }
  }

  vec3 color1 = blobColor[0];
  vec3 color2 = blobColor[0];
  for (int b = 0; b < MAX_BLOBS; b++) {
    if (b == i1) color1 = blobColor[b];
    if (b == i2) color2 = blobColor[b];
  }

  // Meniscus and AA follow the flow-displaced boundary.
  float delta = top1 - top2;
  float px = max(fwidth(delta), 1e-5);
  float halfW = max(uInterfaceWidth, 0.0) * 0.5 * px;
  float win = 1.0;
  if (hasSecond) {
    win = halfW > 1e-6
      ? smoothstep(-halfW, halfW, delta)
      : 1.0;
  }

  vec3 color = mix(color2, color1, win);

  if (uMeniscus > 0.001 && hasSecond) {
    float distPx = abs(delta) / px;
    float rim = 1.0 - smoothstep(0.0, max(uMeniscusWidth, 1e-3), distPx);
    float meniscusEdge = smoothstep(0.0, max(uMeniscusEdgeFade, 1e-3), edgePx);
    color = mix(color, uMeniscusColor, rim * meniscusEdge * uMeniscus * mask);
  }

  // Contain-fit: clip silhouette on X only. Clipping Y flattened the blob
  // into a hard line at the video-frame (≈ canvas) top/bottom.
  if (top1 > 1e-4 && uVideoContain[i1] > 0.5) {
    vec2 local = p - uBlobCenter[i1];
    vec2 fitHalf = fittedVideoHalf(uBlobFit[i1], uVideoRes[i1], 1.0);
    float outsideX = abs(local.x) - fitHalf.x;
    mask *= 1.0 - smoothstep(0.0, 1.5, outsideX);
  }


  // --- debug: raw circle rings over the composite --------------------------
  if (uShowOutlines > 0.5) {
    for (int b = 0; b < MAX_BLOBS; b++) {
      if (b >= uBlobCount) break;

      vec3 tint = vec3(
        float(b) == 0.0 || float(b) == 3.0 ? 1.0 : 0.1,
        float(b) == 1.0 || float(b) == 3.0 ? 1.0 : 0.2,
        float(b) == 2.0 ? 1.0 : 0.6
      );

      for (int j = 0; j < MAX_PER_BLOB; j++) {
        if (j >= uCounts[b]) break;
        vec2 cUv = circleTexel(b, j);
        vec4 circle = texture2D(uCircleTex, cUv);
        float radius = texture2D(uCircleMetaTex, cUv).x;

        float ring = 1.0 - smoothstep(0.8, 1.8, abs(length(p - circle.xy) - radius));
        color = mix(color, tint, ring);
        mask = max(mask, ring);

        float dot_ = 1.0 - smoothstep(0.8, 1.8, abs(length(p - circle.zw) - 4.0));
        color = mix(color, vec3(0.2, 1.0, 0.4), dot_);
        mask = max(mask, dot_);
      }
    }
  }

  gl_FragColor = vec4(color, mask);
}
`;function Im(n){const e=String(n||"").toLowerCase();return e==="player.vimeo.com"||e.endsWith(".vimeo.com")||e.endsWith(".vimeocdn.com")||e.endsWith(".akamaized.net")}function Fm(n){if(!n||typeof n!="string"||n.startsWith("/api/media-proxy")||n.startsWith("/")||n.startsWith("blob:")||n.startsWith("data:"))return n;try{const e=typeof window<"u"?window.location.href:"http://localhost",t=new URL(n,e);if(typeof window<"u"&&t.origin===window.location.origin||t.hostname.endsWith("cdn.sanity.io"))return n;if(Im(t.hostname))return`/api/media-proxy?url=${encodeURIComponent(t.toString())}`}catch{}return n}const Co="position:fixed;top:0;left:0;width:2px;height:2px;opacity:0;pointer-events:none;z-index:-1",Po=8192,gs=1280,Lo=720;function Um(){if(typeof navigator>"u")return!1;const n=navigator.userAgent,e=/iP(ad|hone|od)/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,t=/Safari/.test(n)&&!/Chrome|Chromium|Edg|Firefox|OPR/.test(n);return e||t}function Nm(n,e,t){const i=[];let r=-1;const s=Um(),a=Math.max(1,z.blobs.length),o=Math.max(1,Math.ceil(Math.sqrt(a))),l=Math.max(1,Math.ceil(a/o)),c=Math.min(1,Po/(o*gs),Po/(l*Lo)),u=Math.max(1,Math.round(gs*c)),h=Math.max(1,Math.round(Lo*c)),d=document.createElement("canvas");d.width=o*u,d.height=l*h;const m=d.getContext("2d",{alpha:!1,desynchronized:!0});m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.fillStyle="#b2b2b2",m.fillRect(0,0,d.width,d.height);const g=new Yc(d);g.minFilter=Tt,g.magFilter=Tt,g.wrapS=Ot,g.wrapT=Ot,g.generateMipmaps=!1,g.colorSpace=Jt,g.flipY=!0;function M(C=!0,w=!1){const j=document.createElement("video");j.playsInline=!0,j.preload="auto",C&&(j.crossOrigin="anonymous"),j.style.cssText=Co,n.appendChild(j);let H=null;return w&&(H=new Xc(j),H.minFilter=Tt,H.magFilter=Tt,H.wrapS=Ot,H.wrapT=Ot,H.generateMipmaps=!1,H.colorSpace=Jt),{el:j,texture:H,ready:!1,listeners:[]}}function p(C,w,j){C.el.addEventListener(w,j),C.listeners.push(()=>C.el.removeEventListener(w,j))}function f(C,w,j){w>0&&j>0&&(t.previewRes[C*2]=w,t.previewRes[C*2+1]=j)}function R(C,w){w.ready=!0,w.drawn=!1,C<t.hasPreview.length&&(t.hasPreview[C]=1)}function A(C,w){w.ready=!1,w.drawn=!1,C<t.hasPreview.length&&(t.hasPreview[C]=0)}function E(C){if(!C||!/cdn\.sanity\.io\/images\//.test(C))return C;const w=C.includes("?")?"&":"?";return`${C}${w}w=${gs}&fit=max&auto=format`}function I(C,w){const j=document.createElement("img");j.decoding="async",j.crossOrigin="anonymous",j.style.cssText=Co,n.appendChild(j);const H={kind:"image",live:!1,el:j,ready:!1,drawn:!1,listeners:[]},Ae=()=>{f(C,j.naturalWidth,j.naturalHeight),R(C,H)},fe=()=>A(C,H);p(H,"load",Ae),p(H,"error",fe),j.src=E(w),j.complete&&j.naturalWidth>0&&Ae(),i[C]={preview:H,full:null,fullReady:!1,fullTextureReady:!1},C<t.hasPreview.length&&(t.hasPreview[C]=0,t.hasFull[C]=0)}function T(C,w){const j=M(!0,!1),H={kind:"video",live:!1,el:j.el,ready:!1,drawn:!1,listeners:j.listeners};H.el.src=w.includes("#")?w:`${w}#t=0.001`,H.el.muted=!0,H.el.loop=!1,H.el.playsInline=!0;const Ae=()=>{f(C,H.el.videoWidth,H.el.videoHeight)},fe=()=>{const y=H.el;y.videoWidth>0&&(Ae(),y.pause(),R(C,H))};p(H,"loadedmetadata",Ae),p(H,"loadeddata",fe),p(H,"seeked",fe),p(H,"error",()=>A(C,H)),H.el.readyState>=1&&Ae(),H.el.readyState>=2&&fe(),i[C]={preview:H,full:null,fullReady:!1,fullTextureReady:!1},C<t.hasPreview.length&&(t.hasPreview[C]=H.ready?1:0,t.hasFull[C]=0)}function b(C,w){const j=M(!0,!1),H={kind:"video",live:!0,el:j.el,ready:!1,drawn:!1,listeners:j.listeners};H.el.src=w,H.el.muted=!0,H.el.loop=!0,H.el.playsInline=!0;const Ae=()=>{f(C,H.el.videoWidth,H.el.videoHeight)},fe=()=>{R(C,H),H.el.play().catch(()=>{})};p(H,"loadedmetadata",Ae),p(H,"loadeddata",fe),p(H,"error",()=>A(C,H)),H.el.readyState>=1&&Ae(),H.el.readyState>=2&&fe(),i[C]={preview:H,full:null,fullReady:!1,fullTextureReady:!1},C<t.hasPreview.length&&(t.hasPreview[C]=H.ready?1:0,t.hasFull[C]=0)}function F(C){const w=z.blobs[C];w&&(s?w.thumbnail?I(C,w.thumbnail):w.video?T(C,w.video):w.videoFull&&T(C,w.videoFull):w.video?b(C,w.video):w.thumbnail?I(C,w.thumbnail):w.videoFull&&T(C,w.videoFull))}function S(){for(let C=0;C<z.blobs.length;C++)F(C)}S();function x(C){const j=i[C]?.full;j?.ready&&(r=C,C<t.hasFull.length&&(t.hasFull[C]=1),j.el.videoWidth&&j.el.videoHeight&&(t.fullRes[C*2]=j.el.videoWidth,t.fullRes[C*2+1]=j.el.videoHeight))}function L(C,w={}){const j=w.timeoutMs??45e3;return new Promise((H,Ae)=>{if(C.readyState>=2&&C.videoWidth>0){H();return}let fe=!1;const y=Se=>()=>{fe||(fe=!0,he(),Se())},_=y(()=>H()),O=y(()=>Ae(new Error("video error"))),Q=y(()=>Ae(new Error(`video load timeout (${j}ms)`))),te=()=>{C.readyState>=2&&C.videoWidth>0&&_()},J=window.setInterval(te,100),Ce=window.setTimeout(Q,j),he=()=>{window.clearInterval(J),window.clearTimeout(Ce),C.removeEventListener("loadeddata",te),C.removeEventListener("canplay",te),C.removeEventListener("canplaythrough",te),C.removeEventListener("error",O)};C.addEventListener("loadeddata",te),C.addEventListener("canplay",te),C.addEventListener("canplaythrough",te),C.addEventListener("error",O)})}function X(C){if(!C||!(C.videoWidth>0))return!1;try{const w=document.createElement("canvas");w.width=2,w.height=2;const j=w.getContext("2d");return j?(j.drawImage(C,0,0,2,2),j.getImageData(0,0,1,1),!0):!1}catch{return!1}}const B=new Map,W=new Set;function ne(C,w){const j=i[C],H=M(!0,!0);j.full=H,j.fullTextureReady=!1,j.fullReady=!1;const Ae=Fm(w)||w;return H.el.crossOrigin="anonymous",H.el.preload="auto",H.el.loop=!1,H.el.muted=!0,H.el.src=Ae,L(H.el).then(()=>{if(i[C]?.full!==H)throw new Error("full video replaced during load");H.el.pause(),H.ready=!0,j.fullReady=!0;const fe=X(H.el);return j.fullTextureReady=fe,H.el.videoWidth&&H.el.videoHeight&&(t.fullRes[C*2]=H.el.videoWidth,t.fullRes[C*2+1]=H.el.videoHeight),fe?x(C):console.warn("[video] full file plays but is not WebGL-safe (CORS). Blob stays on preview.",Ae),H.el})}function K(C){const w=i[C];if(!w)return Promise.reject(new Error("invalid index"));if(w.full?.ready)return Promise.resolve(w.full.el);const j=B.get(C);if(j)return j;const H=z.blobs[C]?.videoFull;if(!H)return Promise.reject(new Error("no full video url"));const Ae=ne(C,H).catch(fe=>{if(fe instanceof Error&&/replaced during load/i.test(fe.message))throw fe;if(i[C]?.full){const y=i[C].full;for(const _ of y.listeners)_();y.listeners.length=0,y.el.removeAttribute("src");try{y.el.load()}catch{}y.texture?.dispose(),y.el.remove(),i[C].full=null,i[C].fullReady=!1,i[C].fullTextureReady=!1}if(!W.has(C))throw fe;return console.warn("[video] full load retry",H,fe),ne(C,H)}).finally(()=>{B.delete(C)});return B.set(C,Ae),Ae}function se(C){const w=i[C];if(!w?.full){W.delete(C);return}const j=w.full;j.el.pause(),j.el.muted=!0;try{j.el.currentTime=.01}catch{}for(const H of j.listeners)H();j.listeners.length=0,j.el.removeAttribute("src"),j.el.load(),j.texture?.dispose(),j.el.remove(),w.full=null,w.fullReady=!1,w.fullTextureReady=!1,W.delete(C),C<t.hasFull.length&&(t.hasFull[C]=0),r===C&&(r=-1)}function Y(C){if(C<0)return;const w=i[C]?.full;if(w?.el){w.el.pause(),w.el.muted=!0;try{w.el.currentTime=.01}catch{}}}async function ce(C){W.add(C);try{return{video:await K(C),index:C}}finally{W.delete(C)}}function xe(C){C<0||(Y(C),Oe(C))}function Pe(C){C<0||(se(C),Oe(C))}function Oe(C){const w=i[C]?.preview;!w?.live||w.kind!=="video"||w.el.play().catch(()=>{})}function Qe(C){const w=i[C];return w?w.fullReady?w.full.el:w.preview.live&&w.preview.kind==="video"?w.preview.el:null:null}function $(C){const w=i[C]?.preview;return!w||w.kind!=="video"?null:w.el}function le(C){return{w:t.fullRes[C*2],h:t.fullRes[C*2+1]}}function Me(C){if(!C?.ready||!C.live&&C.drawn)return!1;if(C.kind==="image"){const j=C.el;return j.complete&&j.naturalWidth>0}const w=C.el;return C.live&&w.paused?!1:w.readyState>=2&&w.videoWidth>0}function ue(){if(!m)return;let C=!1;for(let w=0;w<i.length;w++){const j=i[w];if(!j||!Me(j.preview))continue;const H=w%o,Ae=Math.floor(w/o);m.drawImage(j.preview.el,H*u,Ae*h,u,h),j.preview.live||(j.preview.drawn=!0),C=!0}C&&(g.needsUpdate=!0)}let Le="";function De(C,w){if(s)return;const j=`${C}:${w?1:0}`;if(j!==Le){Le=j;for(let H=0;H<i.length;H++){const Ae=i[H]?.preview;if(!Ae?.live||Ae.kind!=="video")continue;const fe=Ae.el;C<0||H===C&&w?fe.play().catch(()=>{}):fe.pause()}}}function ke(C){const w=i[C];w&&w.full?.ready&&w.full.el.readyState>=2&&w.full.texture&&(w.full.texture.needsUpdate=!0)}function at(){for(const C of i)C?.preview.kind==="video"&&C.preview.el.pause()}function _e(C){for(let w=Math.max(0,C);w<i.length;w++){se(w);const j=i[w]?.preview;if(!j||j.kind!=="video")continue;const H=j.el;H.pause();try{H.removeAttribute("src"),H.load()}catch{}j.live=!1}Le=""}function lt(){if(!s)for(const C of i)C?.preview.live&&C.preview.kind==="video"&&C.preview.el.play().catch(()=>{})}function P(){for(let C=0;C<i.length;C++){se(C);const w=i[C];if(w){w.preview.kind==="video"?(w.preview.el.pause(),w.preview.el.removeAttribute("src"),w.preview.el.load()):w.preview.el.removeAttribute("src");for(const j of w.preview.listeners)j();w.preview.el.remove()}}i.length=0,g.dispose()}return{select:ce,deselect:xe,finalizeDeselect:Pe,getActiveVideo:Qe,getPreviewVideo:$,getFullRes:le,updateAtlas:ue,tickTexture:ke,pausePreviews:at,playPreviews:lt,syncPreviewPlayback:De,cullFrom:_e,slowGpu:s,atlasTexture:g,atlasCols:o,atlasRows:l,getFullTexture:()=>{const C=r>=0?i[r]:null;return C?.fullTextureReady&&C.full?.texture?C.full.texture:e},getFullIndex:()=>(r>=0?i[r]:null)?.fullTextureReady?r:-1,isFullReady:C=>i[C]?.fullReady??!1,isFullTextureReady:C=>i[C]?.fullTextureReady??!1,isFullLoading:C=>W.has(C),destroy:P}}function Bm(n,e,t,i,r,s=1){const a=t.getBoundingClientRect(),o=Math.max(s,1),l=n-a.left-a.width/2,c=-(e-a.top-a.height/2);return r.x=l/(i*o),r.y=c/(i*o),r}function Om({sim:n,canvas:e,getLayoutScale:t,getFocusZoom:i,hitTest:r,onFocusChange:s,onHoverChange:a,onSelectedBlobClick:o}){const l={x:0,y:0};let c=0,u=0,h=!1,d=-1;const m=T=>{T!==d&&(d=T,a?.(T))},g=()=>{if(n.selectedIndex>=0&&!n.selectionSettled){e.style.cursor="default",m(-1);return}if(n.selectedIndex>=0&&n.paramTargetIndex>=0&&So(n,n.selectedIndex,l.x,l.y)){e.style.cursor="pointer",m(-1);return}if(n.selectedIndex>=0||n.paramTargetIndex>=0){e.style.cursor="default",m(-1);return}const T=r(l.x,l.y);e.style.cursor=T>=0?"pointer":"default",m(T)},M=(T,b)=>Bm(T,b,e,t(),l,i?.()??1),p=T=>{M(T.clientX,T.clientY),g()},f=()=>{e.style.cursor="default",m(-1)},R=T=>{h=!0,c=T.clientX,u=T.clientY},A=T=>{if(!h||(h=!1,Math.hypot(T.clientX-c,T.clientY-u)>12))return;M(T.clientX,T.clientY);const b=r(l.x,l.y),F=n.selectedIndex>=0?n.selectedIndex:n.paramTargetIndex>=0?n.paramTargetIndex:-1;if(F>=0){if(So(n,F,l.x,l.y)){o?.();return}b>=0&&b!==F?(n.setFocus(b),s?.(b)):(n.setFocus(-1),s?.(-1))}else b>=0&&(n.setFocus(b),s?.(b))},E=()=>{h=!1},I=T=>{T.key==="Escape"&&(n.selectedIndex<0&&!n.paramTransitioning&&n.exitPhase==="idle"||(n.setFocus(-1),s?.(-1)))};return e.addEventListener("pointermove",p),e.addEventListener("pointerleave",f),e.addEventListener("pointerdown",R),e.addEventListener("pointerup",A),e.addEventListener("pointercancel",E),window.addEventListener("keydown",I),{destroy(){e.removeEventListener("pointermove",p),e.removeEventListener("pointerleave",f),e.removeEventListener("pointerdown",R),e.removeEventListener("pointerup",A),e.removeEventListener("pointercancel",E),window.removeEventListener("keydown",I),e.style.cursor="default"}}}const Do={circleCount:22,minRadius:60,maxRadius:130,videoOpacity:1},zm=8,Hm=.9;function Vm(n){const e=Math.max(n,1);return Hm*Math.sqrt(zm/e)}function km(n,e={}){console.log("[projects] applyProjectsToParams input",{count:n.length,projects:n});let t=n.filter(a=>!!a.vimeoLink);t.length<n.length&&console.warn("[projects] some projects skipped (missing vimeoLink)",{total:n.length,eligible:t.length,skipped:n.filter(a=>!a.vimeoLink)});const i=e.maxBlobs;typeof i=="number"&&i>0&&t.length>i&&(console.warn("[projects] limiting blobs for performance",{from:t.length,to:i}),t=t.slice(0,i));const r=Vm(t.length),s=e.lowPower?{...Do,circleCount:14}:Do;return z.blobs=t.map(a=>({...s,minRadius:s.minRadius*r,maxRadius:s.maxRadius*r,thumbnail:a.thumbnailUrl||null,video:a.previewUrl||null,videoFull:a.vimeoLink,projectId:a._id,title:a.title,slug:a.slug,date:a.date,location:a.location||"",category:a.category||"",info:a.info||[],credits:a.credits||[],upcoming:a.upcoming||[]})),console.log("[projects] PARAMS.blobs",{count:z.blobs.length,sizeScale:r,minRadius:z.blobs[0]?.minRadius,maxRadius:z.blobs[0]?.maxRadius,blobs:z.blobs}),z.blobs.length}Je.enabled=!1;function Wm(n,e,t={}){let i=!1,r=0,s=!1,a=!1,o=-1,l=1,c=0;const u=!!t.lowPower,{simLag:h}=Tl();let d=u?Di:2,m=null,g=null;const M=[];function p(Z,ie,we,re){Z.addEventListener(ie,we,re),M.push(()=>Z.removeEventListener(ie,we,re))}const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches,R=240,A=new Ip({canvas:n,alpha:!0,antialias:!1,powerPreference:"high-performance"});A.setClearColor(0,0),A.outputColorSpace=Kn;const E=new kc;E.background=new tt(16119285);const I=new al(-1,1,1,-1,0,1),T=new Xa(new Uint8Array([255,255,255,255]),1,1);if(T.needsUpdate=!0,t.projects?.length){const Z=km(t.projects,{maxBlobs:t.maxBlobs,lowPower:u});console.log("[blob] applied CMS projects to blobs",{count:Z,lowPower:u})}else console.log("[blob] no CMS projects — using default PARAMS.blobs",z.blobs);const b=Math.max(1,z.blobs.length),F=Dm.replace(/#define MAX_BLOBS \d+/,`#define MAX_BLOBS ${b}`);function S(Z,ie){const we=new Float32Array(Z*ie*4),re=new Xa(we,Z,ie,Xt,tn);return re.minFilter=Ct,re.magFilter=Ct,re.wrapS=Ot,re.wrapT=Ot,re.generateMipmaps=!1,re.flipY=!1,re.colorSpace=Jt,re.needsUpdate=!0,{data:we,tex:re}}const x=S(Hi,b),L=S(Hi,b),X=new Float32Array(b*2),B=new Float32Array(b*2).fill(1),W=new Float32Array(b*2),ne=new Float32Array(b*2),K=new Float32Array(b).fill(1),se=new Float32Array(b),Y=new Float32Array(b),ce=new Float32Array(b),xe=new Float32Array(b),Pe=new Float32Array(b),Oe=new Float32Array(b*2).fill(1),Qe=new Float32Array(b*2).fill(1),$=new Float32Array(b),le=new Float32Array(b),Me=new Float32Array(b).fill(1),ue=new Float32Array(b).fill(1),Le=new Set,De=new Float32Array(b).fill(-1),ke=new Set,at=new Int32Array(b),_e={uResolution:{value:new st(1,1)},uTime:{value:0},uVideoAtlas:{value:T},uVideoFull:{value:T},uAtlasCols:{value:1},uAtlasRows:{value:1},uFullIndex:{value:-1},uVideoRes:{value:Oe},uVideoResFull:{value:Qe},uHasVideo:{value:xe},uHasVideoFull:{value:Pe},uVideoBlend:{value:$},uBlobCount:{value:0},uCounts:{value:at},uBlobCenter:{value:X},uBlobFit:{value:B},uBoundsMin:{value:W},uBoundsMax:{value:ne},uDisplace:{value:K},uVideoContain:{value:se},uVideoOpacity:{value:Y},uCircleTex:{value:x.tex},uCircleMetaTex:{value:L.tex},uThreshold:{value:z.threshold},uEdgeSoftness:{value:z.edgeSoftness},uFalloff:{value:z.falloff},uUvSharpness:{value:z.uvSharpness},uInterfaceWidth:{value:z.interfaceWidth},uVideoStretch:{value:z.videoStretch},uUseFullTransform:{value:z.useFullTransform},uBlobColor:{value:new tt(z.blobColor)},uMeniscus:{value:0},uMeniscusWidth:{value:z.meniscusWidth},uMeniscusEdgeFade:{value:z.meniscusEdgeFade},uMeniscusColor:{value:new tt(z.meniscusColor)},uLayoutScale:{value:1},uPairMix:{value:new Float32Array(b*b)},uFlowMaster:{value:z.flowMaster},uFlowScale:{value:z.flowScale},uFlowStrength:{value:z.flowStrength},uFlowSpeed:{value:z.flowSpeed},uFlowEdgeFade:{value:z.flowEdgeFade},uShowOutlines:{value:0},uFocusZoom:{value:1},uBreaker:{value:new G(0,0,0)},uBreakerSize:{value:new st(0,0)},uBreakerOn:{value:0},uBreakerCut:{value:1.28}},lt=new Zi(2,2),P=new Mn({vertexShader:Lm,fragmentShader:F,uniforms:_e,transparent:!0,depthTest:!1,depthWrite:!1,extensions:{derivatives:!0}});E.add(new nn(lt,P));const C=Nm(e,T,{previewRes:Oe,fullRes:Qe,hasPreview:xe,hasFull:Pe});_e.uVideoAtlas.value=C.atlasTexture,_e.uAtlasCols.value=C.atlasCols,_e.uAtlasRows.value=C.atlasRows;const w=new Cm;u&&typeof t.maxBlobs=="number"&&t.maxBlobs>0&&(w.activeBlobLimit=Math.min(t.maxBlobs,w.blobs.length));async function j(Z,ie){if(ie>=0&&(le[ie]=0,ke.add(ie),C.deselect(ie),Z<0&&(ue[ie]=0,Le.add(ie))),a=!1,c=0,Z<0){Ae();return}o=Z,Me[Z]=1,ue[Z]=1,De[Z]=0;const we=Oe[Z*2],re=Oe[Z*2+1];we>0&&re>0&&w.setFocusVideoAspect(Z,we,re),Ae();try{if(await C.select(Z),o===Z&&w.selectedIndex===Z){const{w:Ie,h:be}=C.getFullRes(Z);Ie>0&&be>0&&w.setFocusVideoAspect(Z,Ie,be),le[Z]=C.isFullTextureReady(Z)?1:0,Ae()}}catch(Ie){console.warn("[blob] full video failed to load",z.blobs[Z]?.videoFull,Ie),Ae()}}w.onSelectionChange=j;function H(Z,ie,we,re){const Ie=Math.max(re||1,1);return{x:we.width/2+Z*l*Ie,y:we.height/2-ie*l*Ie}}function Ae(){const Z=w.paramTargetIndex>=0?w.selectedIndex:-1,ie=Z>=0?w.blobs[Z]:null,we=e.getBoundingClientRect(),Ie=Z>=0&&!w.paramTransitioning&&!w.focusSettling&&w.paramTargetIndex>=0&&ie&&C.isFullReady(Z)&&!a&&(w.scrollProgress||0)<.05;let be={visible:!1,x:0,y:0,opacity:0};if(Ie){const yn=Math.max(w.focusZoom||1,1),Pt=H(ie.videoFrameCenterX,ie.videoFrameCenterY,we,yn);be={visible:c>.01,x:Pt.x,y:Pt.y,opacity:c}}const qe=Z>=0&&(C.isFullLoading(Z)||o===Z&&!C.isFullReady(Z));let Yt={visible:!1,x:0,y:0};if(qe&&ie){const yn=Math.max(w.focusZoom||1,1),Pt=H(ie.videoFrameCenterX,ie.videoFrameCenterY,we,yn);Yt={visible:!0,x:Pt.x,y:Pt.y}}t.onSelectionState?.({selectedIndex:Z,fullVideoReady:Z>=0&&C.isFullReady(Z),fullVideoLoading:qe,fullVideo:Z>=0?C.getActiveVideo(Z):null,playing:a,playButton:be,loadingDots:Yt,info:fe(Z,we)})}function fe(Z,ie){const we={visible:!1,x:ie.width/2,y:ie.height,opacity:0,title:"",date:null,location:"",category:"",blocks:[],credits:[],upcoming:[]};if(Z<0)return we;const re=z.blobs[Z],Ie=w.breaker,be=Math.max(w.focusZoom||1,1),qe=Ie?.active||0,Yt=H(Ie?.x||0,Ie?.y||0,ie,be);return{visible:qe>.01,x:Yt.x,y:Yt.y,opacity:qe,title:re?.title||"",date:re?.date||null,location:re?.location||"",category:re?.category||"",blocks:Array.isArray(re?.info)?re.info:[],credits:Array.isArray(re?.credits)?re.credits:[],upcoming:Array.isArray(re?.upcoming)?re.upcoming:[]}}function y(Z){const ie=Math.max(z.videoCrossfadeSeconds,.05),we=Z/ie;for(let re=0;re<b;re++){const Ie=$[re],be=le[re];if(Math.abs(Ie-be)<.002)$[re]=be;else{const qe=Math.sign(be-Ie)*Math.min(we,Math.abs(be-Ie));$[re]=Ie+qe}ke.has(re)&&le[re]===0&&$[re]<=.002&&(ke.delete(re),C.finalizeDeselect(re))}}function _(Z){const ie=Math.max(z.exitVideoFadeOutSeconds,.05),we=Math.max(z.exitVideoFadeInSeconds,.05);for(let re=0;re<b;re++){Le.has(re)?(ue[re]=0,!w.paramTransitioning&&!w.focusSettling&&w.paramTargetIndex<0&&Me[re]<=.002&&(Le.delete(re),ue[re]=1)):ue[re]=1;const Ie=ue[re],be=Me[re];if(Math.abs(be-Ie)<.002){Me[re]=Ie;continue}const qe=Z/(Ie<be?ie:we);Me[re]=be+Math.sign(Ie-be)*Math.min(qe,Math.abs(Ie-be))}}function O(Z){const ie=De[Z];if(ie<0)return 1;const we=Math.max(z.selectBlinkOutSeconds,0),re=Math.max(z.selectBlinkInSeconds,.05);if(ie<we){const be=ie/we;return 1-be*be*(3-2*be)}const Ie=Math.min(1,(ie-we)/re);return Ie*Ie*(3-2*Ie)}function Q(Z){const ie=Math.max(z.selectBlinkOutSeconds,.01),we=Math.max(z.selectBlinkInSeconds,.05),re=ie+we;for(let Ie=0;Ie<b;Ie++)De[Ie]<0||(De[Ie]+=Z,De[Ie]>=re&&(De[Ie]=-1))}function te(Z){const ie=Math.max(z.videoFadeInSeconds,.05),we=Z/ie;for(let re=0;re<b;re++){const Ie=z.blobs[re];if(!Ie||xe[re]<.5){ce[re]=0,Y[re]=0;continue}ce[re]<1&&(ce[re]=Math.min(1,ce[re]+we));const be=ce[re]*ce[re]*(3-2*ce[re]);Y[re]=Ie.videoOpacity*be*Me[re]*O(re)}}function J(Z){const ie=w.paramTargetIndex>=0?w.selectedIndex:-1,re=ie>=0&&!w.paramTransitioning&&!w.focusSettling&&w.paramTargetIndex>=0&&C.isFullReady(ie)&&!a&&(w.scrollProgress||0)<.05,Ie=Math.max(z.playButtonFadeSeconds,.05),be=Z/Ie;re?c=Math.min(1,c+be):c=0}function Ce(){const Z=w.paramTargetIndex>=0?w.selectedIndex:-1;return Z<0?!1:!w.paramTransitioning&&!w.focusSettling&&w.paramTargetIndex>=0&&C.isFullReady(Z)}function he(){if(!Ce())return;const Z=w.selectedIndex,ie=C.getActiveVideo(Z);ie&&(ie.paused?(ie.muted=!1,ie.play().then(()=>{a=!0,Ae()}).catch(()=>{})):(ie.pause(),a=!1,Ae()))}const Se=Om({sim:w,canvas:n,getLayoutScale:()=>l,getFocusZoom:()=>Math.max(w.focusZoom||1,1),hitTest:(Z,ie)=>Hp(w,Z,ie),onSelectedBlobClick:he});M.push(()=>Se.destroy()),p(window,"wheel",Z=>{s||w.paramTargetIndex<0||w.selectedIndex<0||w.paramTransitioning||w.focusSettling||Z.target?.closest?.(".lil-gui")||(Z.preventDefault(),bo(w,Z.deltaY))},{passive:!1});let oe=0,ye=!1;const Ue=Z=>{Z.touches[0]&&(ye=!0,oe=Z.touches[0].clientY)},Be=Z=>{if(!ye||!Z.touches[0]||s||w.paramTargetIndex<0||w.selectedIndex<0||w.paramTransitioning||w.focusSettling)return;const ie=Z.touches[0].clientY,we=oe-ie;oe=ie,!(Math.abs(we)<.5)&&(Z.preventDefault(),bo(w,we))},Ee=()=>{ye=!1};p(window,"touchstart",Ue,{passive:!0}),p(window,"touchmove",Be,{passive:!1}),p(window,"touchend",Ee,{passive:!0}),p(window,"touchcancel",Ee,{passive:!0});function Ye(Z,ie){if(Z<=0||ie<=0)return;A.setPixelRatio(Math.min(window.devicePixelRatio||1,d)),A.setSize(Z,ie,!1),_e.uResolution.value.set(Z,ie),l=Math.min(Z,ie)/Bp,w.setViewport(Z/2/l,ie/2/l,l),g?.resize(Z,ie);const we=w.paramTargetIndex>=0?w.paramTargetIndex:w.selectedIndex;we>=0&&w.focusVideoW>0&&w.focusVideoH>0&&w.setFocusVideoAspect(we,w.focusVideoW,w.focusVideoH)}const Ge=new ResizeObserver(Z=>{const ie=Z[0];if(!ie)return;const{width:we,height:re}=ie.contentRect;Ye(we,re)});Ge.observe(e),M.push(()=>Ge.disconnect());const rt=e.getBoundingClientRect();Ye(rt.width,rt.height);function D(){C.playPreviews()}function de(){C.pausePreviews()}f?de():D();function q(){const Z=w.blobs,ie=w.activeBlobLimit==null?Z.length:Math.min(Z.length,w.activeBlobLimit);for(let be=0;be<ie;be++){const qe=Z[be];z.blobs[be];const Yt=qe.circles,yn=Math.min(Yt.length,Hi);for(let Qn=0;Qn<yn;Qn++){const on=Yt[Qn],ln=(be*Hi+Qn)*4;x.data[ln]=on.x*l,x.data[ln+1]=on.y*l,x.data[ln+2]=on.anchorX*l,x.data[ln+3]=on.anchorY*l,L.data[ln]=on.radius*l,L.data[ln+1]=on.angle,L.data[ln+2]=on.scale}at[be]=yn;const Pt=Jp(qe,w,be);Pt?(X[be*2]=Pt.centerX*l,X[be*2+1]=Pt.centerY*l,B[be*2]=Pt.halfW*l,B[be*2+1]=Pt.halfH*l,se[be]=Pt.contain):(X[be*2]=qe.videoFrameCenterX*l,X[be*2+1]=qe.videoFrameCenterY*l,B[be*2]=qe.videoFrameHalfW*l,B[be*2+1]=qe.videoFrameHalfH*l,se[be]=0),W[be*2]=qe.minX*l,W[be*2+1]=qe.minY*l,ne[be*2]=qe.maxX*l,ne[be*2+1]=qe.maxY*l,K[be]=z.displaceAmount}_e.uBlobCount.value=ie,x.tex.needsUpdate=!0,L.tex.needsUpdate=!0,_e.uThreshold.value=z.threshold,_e.uEdgeSoftness.value=z.edgeSoftness,_e.uFalloff.value=z.falloff,_e.uUvSharpness.value=z.uvSharpness,_e.uInterfaceWidth.value=z.interfaceWidth,_e.uVideoStretch.value=z.videoStretch,_e.uUseFullTransform.value=z.useFullTransform,_e.uShowOutlines.value=0,_e.uBlobColor.value.set(z.blobColor),_e.uMeniscus.value=0,_e.uMeniscusWidth.value=z.meniscusWidth,_e.uMeniscusEdgeFade.value=z.meniscusEdgeFade,_e.uMeniscusColor.value.set(z.meniscusColor),_e.uLayoutScale.value=l;const we=_e.uPairMix.value;for(let be=0;be<ie;be++)for(let qe=0;qe<ie;qe++)we[be*b+qe]=w.pairMix[w.pairIndex(be,qe)]||0;_e.uVideoFull.value=C.getFullTexture(),_e.uFullIndex.value=C.getFullIndex(),_e.uFlowMaster.value=z.flowMaster,_e.uFlowScale.value=z.flowScale,_e.uFlowStrength.value=z.flowStrength,_e.uFlowSpeed.value=z.flowSpeed,_e.uFlowEdgeFade.value=z.flowEdgeFade,_e.uFocusZoom.value=Math.max(w.focusZoom||1,1);const re=w.breaker,Ie=re?.active||0;_e.uBreakerOn.value=Ie,_e.uBreakerCut.value=z.breakerCut,Ie>.001?(_e.uBreaker.value.set(re.x*l,re.y*l,0),_e.uBreakerSize.value.set((re.halfW||re.radius||0)*l,(re.halfH||re.radius||0)*l)):(_e.uBreaker.value.set(0,0,0),_e.uBreakerSize.value.set(0,0))}let ee=!0,ge=!0,pe=performance.now(),ze=u,ct=!1,ht=!1,$e=null;const yt=Ma({simulateLag:h,onDegrade:Z=>{if(!(i||u)){if(d>Di){d=Di,ze=!0;const{width:ie,height:we}=e.getBoundingClientRect();Ye(ie,we),console.warn("[blob] low FPS — capping pixel ratio",Z),ht=!0,$e=Ma({simulateLag:h,warmUpMs:h?400:1500,badSamplesNeeded:h?1:2,onDegrade:re=>{i||u||(Fn(Ki),t.onPerfDegrade?.(re))}});return}Fn(Ki),t.onPerfDegrade?.(Z)}}});u&&yt.disable(),f&&w.warmup(R);function Ht(Z){if(i)return;if(r=requestAnimationFrame(Ht),!ee||!ge){pe=Z;return}if(s){pe=Z;const re=w.selectedIndex;re>=0&&C.tickTexture(re);return}const ie=Math.min((Z-pe)/1e3,.25);pe=Z,!f&&!s&&(w.advance(ie),_e.uTime.value=w.time);const we=w.selectedIndex;if(C.syncPreviewPlayback(we,we>=0&&!C.isFullTextureReady(we)),C.updateAtlas(Z),we>=0&&C.tickTexture(we),we>=0&&w.paramTargetIndex===we&&C.isFullTextureReady(we)&&(le[we]=1),y(ie),_(ie),Q(ie),te(ie),J(ie),q(),g?.draw(w,l),Ae(),ze&&(ct=!ct,!ct)){ht?$e?.tick(Z):yt.tick(Z);return}s||A.render(E,I),ht?$e?.tick(Z):yt.tick(Z)}function Jn(){ee&&ge&&!i?(pe=performance.now(),f||D(),r||(r=requestAnimationFrame(Ht))):de()}p(document,"visibilitychange",()=>{ee=document.visibilityState==="visible",Jn()});const Pi=new IntersectionObserver(Z=>{ge=Z.some(ie=>ie.isIntersecting),Jn()},{threshold:0});Pi.observe(n),M.push(()=>Pi.disconnect()),Jn();function an(){if(!i){i=!0,cancelAnimationFrame(r),r=0,m?.destroy(),m=null,g?.destroy(),g=null;for(const Z of M)Z();de(),C.destroy(),P.dispose(),lt.dispose(),x.tex.dispose(),L.tex.dispose(),T.dispose(),A.dispose()}}return{destroy:an,playSelectedVideo(){if(!Ce())return;const Z=w.selectedIndex,ie=Z>=0?C.getActiveVideo(Z):null;!ie||!ie.paused||(ie.muted=!1,ie.play().then(()=>{a=!0,Ae()}).catch(()=>{}))},toggleSelectedVideo:he,setFullscreenActive(Z){s=Z;const ie=w.selectedIndex;if(ie>=0&&Z){const we=C.getActiveVideo(ie);we&&!we.paused&&(we.pause(),a=!1)}t.onFullscreenChange?.(Z),Ae()},setPlaying(Z){a=Z,Ae()},setInfoBox(Z,ie){vm(w,Z,ie)},clearSelection(){w.paramTargetIndex<0&&w.selectedIndex<0||(w.setFocus(-1),Ae())},adaptToLowPower(Z=Ki){return Fn(Z)}};function Fn(Z=Ki){if(i)return!1;const ie=Math.max(1,Math.min(Z,w.blobs.length));if(w.activeBlobLimit!=null&&w.activeBlobLimit<=ie&&d<=Di)return!1;(w.selectedIndex>=ie||w.paramTargetIndex>=ie)&&w.setFocus(-1),w.activeBlobLimit=ie,d=Di,ze=!0,ht=!1,$e=null,yt.disable(),C.cullFrom(ie);for(let Ie=ie;Ie<w.blobs.length;Ie++){const be=w.blobs[Ie];be.centerX=5e3+Ie*500,be.centerY=5e3;for(const qe of be.circles)qe.vx=0,qe.vy=0,qe.fx=0,qe.fy=0,qe.x=be.centerX,qe.y=be.centerY;be.updateCentroid(),be.updateBounds()}const{width:we,height:re}=e.getBoundingClientRect();return Ye(we,re),Ae(),console.warn("[blob] adapted to low power (in-place)",{maxBlobs:ie}),!0}}export{Wm as createBlobEngine};
