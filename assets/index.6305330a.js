(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="144",Xu=0,Lo=1,qu=2,uc=1,Yu=2,mr=3,ji=0,Le=1,Bn=2,Hn=0,Hi=1,Pa=2,Do=3,Ro=4,ju=5,Bi=100,Zu=101,Ku=102,Io=103,Fo=104,Qu=200,Ju=201,$u=202,th=203,hc=204,fc=205,eh=206,nh=207,ih=208,rh=209,sh=210,ah=0,oh=1,lh=2,La=3,ch=4,uh=5,hh=6,fh=7,dc=0,dh=1,ph=2,En=0,mh=1,gh=2,_h=3,xh=4,vh=5,pc=300,Zi=301,Ki=302,Da=303,Ra=304,Ls=306,Ia=1e3,tn=1001,Fa=1002,ge=1003,Oo=1004,zo=1005,ke=1006,yh=1007,Ds=1008,mi=1009,Mh=1010,bh=1011,mc=1012,Sh=1013,ai=1014,oi=1015,Ar=1016,wh=1017,Ah=1018,Wi=1020,Th=1021,Eh=1022,cn=1023,Ch=1024,Ph=1025,ui=1026,Qi=1027,Lh=1028,Dh=1029,Rh=1030,Ih=1031,Fh=1033,ks=33776,Vs=33777,Gs=33778,Hs=33779,No=35840,Uo=35841,Bo=35842,ko=35843,Oh=36196,Vo=37492,Go=37496,Ho=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,jo=37813,Zo=37814,Ko=37815,Qo=37816,Jo=37817,$o=37818,tl=37819,el=37820,nl=37821,il=36492,gi=3e3,Ht=3001,zh=3200,Nh=3201,Uh=0,Bh=1,bn="srgb",li="srgb-linear",Ws=7680,kh=519,rl=35044,sl="300 es",Oa=1035;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,al=180/Math.PI;function Or(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(oe[o&255]+oe[o>>8&255]+oe[o>>16&255]+oe[o>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[n&255]+oe[n>>8&255]+oe[n>>16&255]+oe[n>>24&255]).toLowerCase()}function Ce(o,t,e){return Math.max(t,Math.min(e,o))}function Vh(o,t){return(o%t+t)%t}function qs(o,t,e){return(1-e)*o+e*t}function ol(o){return(o&o-1)===0&&o!==0}function za(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function we(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],v=i[1],b=i[4],M=i[7],y=i[2],T=i[5],C=i[8];return r[0]=a*d+s*v+l*y,r[3]=a*p+s*b+l*T,r[6]=a*_+s*M+l*C,r[1]=c*d+u*v+h*y,r[4]=c*p+u*b+h*T,r[7]=c*_+u*M+h*C,r[2]=f*d+m*v+g*y,r[5]=f*p+m*b+g*T,r[8]=f*_+m*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=u*a-s*c,f=s*l-u*r,m=c*r-a*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*c-u*n)*d,t[2]=(s*n-i*a)*d,t[3]=f*d,t[4]=(u*e-i*l)*d,t[5]=(i*r-s*e)*d,t[6]=m*d,t[7]=(n*l-c*e)*d,t[8]=(a*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],s=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*s+n*u,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*s+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function gc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ys={[bn]:{[li]:hi},[li]:{[bn]:ps}},Ke={legacyMode:!0,get workingColorSpace(){return li},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Ys[t]&&Ys[t][e]!==void 0){const n=Ys[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},_c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},Qe={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function js(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Xr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=li){return this.r=t,this.g=e,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=li){if(t=Vh(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=js(a,r,t+1/3),this.g=js(a,r,t),this.b=js(a,r,t-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(t,e=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ke.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ke.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ke.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ke.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=bn){const n=_c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Ke.fromWorkingColorSpace(Xr(this,Qt),t),Ce(Qt.r*255,0,255)<<16^Ce(Qt.g*255,0,255)<<8^Ce(Qt.b*255,0,255)<<0}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=li){Ke.fromWorkingColorSpace(Xr(this,Qt),e);const n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=li){return Ke.fromWorkingColorSpace(Xr(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=bn){return Ke.fromWorkingColorSpace(Xr(this,Qt),t),t!==bn?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Qe),Qe.h+=t,Qe.s+=e,Qe.l+=n,this.setHSL(Qe.h,Qe.s,Qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qe),t.getHSL(Wr);const n=qs(Qe.h,Wr.h,e),i=qs(Qe.s,Wr.s,e),r=qs(Qe.l,Wr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=_c;let Si;class xc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Tr("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class vc{constructor(t=null){this.isSource=!0,this.uuid=Or(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Zs(i[a].image)):r.push(Zs(i[a]))}else r=Zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class je extends or{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=tn,i=tn,r=ke,a=Ds,s=cn,l=mi,c=1,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Or(),this.name="",this.source=new vc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=pc;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(m+1)/2,y=(_+1)/2,T=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return b>M&&b>y?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=x/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends or{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hh extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,v=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const y=Math.sqrt(b),T=Math.atan2(y,_*v);p=Math.sin(p*T)/y,s=Math.sin(s*T)/y}const M=s*v;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-s*m,t[e+2]=c*g+u*m+s*f-l*h,t[e+3]=u*g-s*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,h=l*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new z,ll=new zr;class Nr{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Qn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox),Qs.applyMatrix4(t.matrixWorld),this.union(Qs);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),qr.subVectors(this.max,hr),wi.subVectors(t.a,hr),Ai.subVectors(t.b,hr),Ti.subVectors(t.c,hr),Rn.subVectors(Ai,wi),In.subVectors(Ti,Ai),Jn.subVectors(wi,Ti);let e=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-Jn.z,Jn.y,Rn.z,0,-Rn.x,In.z,0,-In.x,Jn.z,0,-Jn.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-Jn.y,Jn.x,0];return!Js(e,wi,Ai,Ti,qr)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,wi,Ai,Ti,qr))?!1:(Yr.crossVectors(Rn,In),e=[Yr.x,Yr.y,Yr.z],Js(e,wi,Ai,Ti,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,Qs=new Nr,wi=new z,Ai=new z,Ti=new z,Rn=new z,In=new z,Jn=new z,hr=new z,qr=new z,Yr=new z,$n=new z;function Js(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){$n.fromArray(o,r);const s=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Wh=new Nr,cl=new z,jr=new z,$s=new z;class Rs{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add($s.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?jr.set(0,0,1).multiplyScalar(t.radius):jr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(cl.copy(t.center).add(jr)),this.expandByPoint(cl.copy(t.center).sub(jr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new z,ta=new z,Zr=new z,Fn=new z,ea=new z,Kr=new z,na=new z;class so{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.direction).multiplyScalar(e).add(this.origin),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ta.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),s=Fn.dot(this.direction),l=-Fn.dot(Zr),c=Fn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-s,f=a*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Zr).multiplyScalar(f).add(ta),m}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(s=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,r){ea.subVectors(e,t),Kr.subVectors(n,t),na.crossVectors(ea,Kr);let a=this.direction.dot(na),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=s*this.direction.dot(Kr.crossVectors(Fn,Kr));if(l<0)return null;const c=s*this.direction.dot(ea.cross(Fn));if(c<0||l+c>a)return null;const u=-s*Fn.dot(na);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-d*c,e[9]=-s*l,e[2]=d-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f+d*s,e[4]=g*s-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=d+f*s,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f-d*s,e[4]=-a*h,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=d-f*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+d,e[1]=l*h,e[5]=d*c+f,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+d,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=s*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),On.crossVectors(n,Ae),On.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),On.crossVectors(n,Ae)),On.normalize(),Qr.crossVectors(Ae,On),i[0]=On.x,i[4]=Qr.x,i[8]=Ae.x,i[1]=On.y,i[5]=Qr.y,i[9]=Ae.y,i[2]=On.z,i[6]=Qr.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],v=n[3],b=n[7],M=n[11],y=n[15],T=i[0],C=i[4],x=i[8],w=i[12],L=i[1],G=i[5],J=i[9],N=i[13],R=i[2],B=i[6],Y=i[10],j=i[14],k=i[3],F=i[7],U=i[11],$=i[15];return r[0]=a*T+s*L+l*R+c*k,r[4]=a*C+s*G+l*B+c*F,r[8]=a*x+s*J+l*Y+c*U,r[12]=a*w+s*N+l*j+c*$,r[1]=u*T+h*L+f*R+m*k,r[5]=u*C+h*G+f*B+m*F,r[9]=u*x+h*J+f*Y+m*U,r[13]=u*w+h*N+f*j+m*$,r[2]=g*T+d*L+p*R+_*k,r[6]=g*C+d*G+p*B+_*F,r[10]=g*x+d*J+p*Y+_*U,r[14]=g*w+d*N+p*j+_*$,r[3]=v*T+b*L+M*R+y*k,r[7]=v*C+b*G+M*B+y*F,r[11]=v*x+b*J+M*Y+y*U,r[15]=v*w+b*N+M*j+y*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+e*c*h-e*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-e*l*h+e*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],v=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,b=g*f*c-u*p*c-g*l*m+a*p*m+u*l*_-a*f*_,M=u*d*c-g*h*c+g*s*m-a*d*m-u*s*_+a*h*_,y=g*h*l-u*d*l-g*s*f+a*d*f+u*s*p-a*h*p,T=e*v+n*b+i*M+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=v*C,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,t[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,t[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,t[4]=b*C,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*C,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*_-e*l*_)*C,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*m+e*l*m)*C,t[8]=M*C,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*C,t[10]=(a*d*r-g*s*r+g*n*c-e*d*c-a*n*_+e*s*_)*C,t[11]=(u*s*r-a*h*r-u*n*c+e*h*c+a*n*m-e*s*m)*C,t[12]=y*C,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*C,t[14]=(g*s*i-a*d*i-g*n*l+e*d*l+a*n*p-e*s*p)*C,t[15]=(a*h*i-u*s*i+u*n*l-e*h*l-a*n*f+e*s*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,h=s+s,f=r*c,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,v=l*c,b=l*u,M=l*h,y=n.x,T=n.y,C=n.z;return i[0]=(1-(d+_))*y,i[1]=(m+M)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(f+_))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(g+b)*C,i[9]=(p-v)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),s=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/r,u=1/a,h=1/s;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new z,Je=new $t,Xh=new z(0,0,0),qh=new z(1,1,1),On=new z,Qr=new z,Ae=new z,ul=new $t,hl=new zr;class Ur{constructor(t=0,e=0,n=0,i=Ur.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ur.DefaultOrder="XYZ";Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const fl=new z,Ci=new zr,vn=new $t,Jr=new z,fr=new z,jh=new z,Zh=new zr,dl=new z(1,0,0),pl=new z(0,1,0),ml=new z(0,0,1),Kh={type:"added"},gl={type:"removed"};class xe extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DefaultUp.clone();const t=new z,e=new Ur,n=new zr,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new He}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DefaultMatrixWorldAutoUpdate,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(fr,Jr,this.up):vn.lookAt(Jr,fr,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(vn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(gl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DefaultUp=new z(0,1,0);xe.DefaultMatrixAutoUpdate=!0;xe.DefaultMatrixWorldAutoUpdate=!0;const $e=new z,yn=new z,ia=new z,Mn=new z,Pi=new z,Li=new z,_l=new z,ra=new z,sa=new z,aa=new z;class An{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),yn.subVectors(n,e),ia.subVectors(t,e);const a=$e.dot($e),s=$e.dot(yn),l=$e.dot(ia),c=yn.dot(yn),u=yn.dot(ia),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Mn),l.set(0,0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(s,Mn.z),l}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),yn.subVectors(t,e),$e.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),$e.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return An.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Pi.subVectors(i,n),Li.subVectors(r,n),ra.subVectors(t,n);const l=Pi.dot(ra),c=Li.dot(ra);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,i);const u=Pi.dot(sa),h=Li.dot(sa);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Pi,a);aa.subVectors(t,r);const m=Pi.dot(aa),g=Li.dot(aa);if(g>=0&&m<=g)return e.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(Li,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return _l.subVectors(r,i),s=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(_l,s);const _=1/(p+d+f);return a=d*_,s=f*_,e.copy(n).addScaledVector(Pi,a).addScaledVector(Li,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Qh=0;class Br extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Hi,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oo extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new z,$r=new Nt;class un{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=rl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Mc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class en extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jh=0;const ze=new $t,oa=new xe,Di=new z,Te=new Nr,dr=new Nr,ee=new z;class pn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?bc:Mc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];dr.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(Te.min,dr.min),Te.expandByPoint(ee),ee.addVectors(Te.max,dr.max),Te.expandByPoint(ee)):(Te.expandByPoint(dr.min),Te.expandByPoint(dr.max))}Te.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ee.fromBufferAttribute(s,c),l&&(Di.fromBufferAttribute(t,c),ee.add(Di)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new z,u[L]=new z;const h=new z,f=new z,m=new z,g=new Nt,d=new Nt,p=new Nt,_=new z,v=new z;function b(L,G,J){h.fromArray(i,L*3),f.fromArray(i,G*3),m.fromArray(i,J*3),g.fromArray(a,L*2),d.fromArray(a,G*2),p.fromArray(a,J*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);!isFinite(N)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),v.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(N),c[L].add(_),c[G].add(_),c[J].add(_),u[L].add(v),u[G].add(v),u[J].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,G=M.length;L<G;++L){const J=M[L],N=J.start,R=J.count;for(let B=N,Y=N+R;B<Y;B+=3)b(n[B+0],n[B+1],n[B+2])}const y=new z,T=new z,C=new z,x=new z;function w(L){C.fromArray(r,L*3),x.copy(C);const G=c[L];y.copy(G),y.sub(C.multiplyScalar(C.dot(G))).normalize(),T.crossVectors(x,G);const N=T.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=N}for(let L=0,G=M.length;L<G;++L){const J=M[L],N=J.start,R=J.count;for(let B=N,Y=N+R;B<Y;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,a=new z,s=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new $t,Ri=new so,la=new Rs,zn=new z,Nn=new z,Un=new z,ca=new z,ua=new z,ha=new z,ts=new z,es=new z,ns=new z,is=new Nt,rs=new Nt,ss=new Nt,fa=new z,as=new z;class We extends xe{constructor(t=new pn,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),t.ray.intersectsSphere(la)===!1)||(xl.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(xl),n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,T=M;y<T;y+=3){const C=s.getX(y),x=s.getX(y+1),w=s.getX(y+2);a=os(this,v,t,Ri,l,c,u,h,f,C,x,w),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const b=s.getX(_),M=s.getX(_+1),y=s.getX(_+2);a=os(this,i,t,Ri,l,c,u,h,f,b,M,y),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,T=M;y<T;y+=3){const C=y,x=y+1,w=y+2;a=os(this,v,t,Ri,l,c,u,h,f,C,x,w),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const b=_,M=_+1,y=_+2;a=os(this,i,t,Ri,l,c,u,h,f,b,M,y),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function $h(o,t,e,n,i,r,a,s){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side!==Bn,s),l===null)return null;as.copy(s),as.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:o}}function os(o,t,e,n,i,r,a,s,l,c,u,h){zn.fromBufferAttribute(i,c),Nn.fromBufferAttribute(i,u),Un.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){ts.set(0,0,0),es.set(0,0,0),ns.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(ca.fromBufferAttribute(_,c),ua.fromBufferAttribute(_,u),ha.fromBufferAttribute(_,h),a?(ts.addScaledVector(ca,p),es.addScaledVector(ua,p),ns.addScaledVector(ha,p)):(ts.addScaledVector(ca.sub(zn),p),es.addScaledVector(ua.sub(Nn),p),ns.addScaledVector(ha.sub(Un),p)))}zn.add(ts),Nn.add(es),Un.add(ns)}o.isSkinnedMesh&&(o.boneTransform(c,zn),o.boneTransform(u,Nn),o.boneTransform(h,Un));const m=$h(o,t,e,n,zn,Nn,Un,fa);if(m){s&&(is.fromBufferAttribute(s,c),rs.fromBufferAttribute(s,u),ss.fromBufferAttribute(s,h),m.uv=An.getUV(fa,zn,Nn,Un,is,rs,ss,new Nt)),l&&(is.fromBufferAttribute(l,c),rs.fromBufferAttribute(l,u),ss.fromBufferAttribute(l,h),m.uv2=An.getUV(fa,zn,Nn,Un,is,rs,ss,new Nt));const g={a:c,b:u,c:h,normal:new z,materialIndex:0};An.getNormal(zn,Nn,Un,g.normal),m.face=g}return m}class lr extends pn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(h,2));function g(d,p,_,v,b,M,y,T,C,x,w){const L=M/C,G=y/x,J=M/2,N=y/2,R=T/2,B=C+1,Y=x+1;let j=0,k=0;const F=new z;for(let U=0;U<Y;U++){const $=U*G-N;for(let K=0;K<B;K++){const Q=K*L-J;F[d]=Q*v,F[p]=$*b,F[_]=R,c.push(F.x,F.y,F.z),F[d]=0,F[p]=0,F[_]=T>0?1:-1,u.push(F.x,F.y,F.z),h.push(K/C),h.push(1-U/x),j+=1}}for(let U=0;U<x;U++)for(let $=0;$<C;$++){const K=f+$+B*U,Q=f+$+B*(U+1),rt=f+($+1)+B*(U+1),pt=f+($+1)+B*U;l.push(K,Q,pt),l.push(Q,rt,pt),k+=6}s.addGroup(m,k,w),m+=k,f+=j}}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function le(o){const t={};for(let e=0;e<o.length;e++){const n=Ji(o[e]);for(const i in n)t[i]=n[i]}return t}function tf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const ef={clone:Ji,merge:le};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends Sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=90,Fi=1;class sf extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ve(Ii,Fi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const r=new Ve(Ii,Fi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(-1,0,0)),this.add(r);const a=new Ve(Ii,Fi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new z(0,1,0)),this.add(a);const s=new Ve(Ii,Fi,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new z(0,-1,0)),this.add(s);const l=new Ve(Ii,Fi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new Ve(Ii,Fi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=En,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wc extends je{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class af extends _i{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new lr(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Hn});r.uniforms.tEquirect.value=e;const a=new We(i,r),s=e.minFilter;return e.minFilter===Ds&&(e.minFilter=ke),new sf(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const da=new z,of=new z,lf=new He;class ni{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=da.subVectors(n,e).cross(of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lf.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Rs,ls=new z;class Ac{constructor(t=new ni,e=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],v=n[14],b=n[15];return e[0].setComponents(s-i,h-l,d-f,b-p).normalize(),e[1].setComponents(s+i,h+l,d+f,b+p).normalize(),e[2].setComponents(s+r,h+c,d+m,b+_).normalize(),e[3].setComponents(s-r,h-c,d-m,b-_).normalize(),e[4].setComponents(s-a,h-u,d-g,b-v).normalize(),e[5].setComponents(s+a,h+u,d+g,b+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ls.x=i.normal.x>0?t.max.x:t.min.x,ls.y=i.normal.y>0?t.max.y:t.min.y,ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function cf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class lo extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=t/s,f=e/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const v=_*f-a;for(let b=0;b<c;b++){const M=b*h-r;g.push(M,-v,0),d.push(0,0,1),p.push(b/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<s;v++){const b=v+c*_,M=v+c*(_+1),y=v+1+c*(_+1),T=v+1+c*_;m.push(b,M,T),m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2))}static fromJSON(t){return new lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf="vec3 transformed = vec3( position );",_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,vf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,$f=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ad=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Md=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ep=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,np=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ip=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ap=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Pp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:uf,alphamap_pars_fragment:hf,alphatest_fragment:ff,alphatest_pars_fragment:df,aomap_fragment:pf,aomap_pars_fragment:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:xf,iridescence_fragment:vf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:wf,color_fragment:Af,color_pars_fragment:Tf,color_pars_vertex:Ef,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Rf,displacementmap_vertex:If,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,encodings_fragment:zf,encodings_pars_fragment:Nf,envmap_fragment:Uf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:Hf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_fragment:jf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Qf,lights_pars_begin:Jf,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:rd,lights_physical_pars_fragment:sd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ud,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphcolor_vertex:vd,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:bd,normal_fragment_begin:Sd,normal_fragment_maps:wd,normal_pars_fragment:Ad,normal_pars_vertex:Td,normal_vertex:Ed,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Rd,output_fragment:Id,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:zd,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:jd,specularmap_fragment:Zd,specularmap_pars_fragment:Kd,tonemapping_fragment:Qd,tonemapping_pars_fragment:Jd,transmission_fragment:$d,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,uv2_pars_fragment:rp,uv2_pars_vertex:sp,uv2_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,cube_vert:up,cube_frag:hp,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:bp,meshlambert_frag:Sp,meshmatcap_vert:wp,meshmatcap_frag:Ap,meshnormal_vert:Tp,meshnormal_frag:Ep,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Lp,meshphysical_frag:Dp,meshtoon_vert:Rp,meshtoon_frag:Ip,points_vert:Fp,points_frag:Op,shadow_vert:zp,shadow_frag:Np,sprite_vert:Up,sprite_frag:Bp},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new He},uv2Transform:{value:new He},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}}},on={basic:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:le([nt.points,nt.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:le([nt.common,nt.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:le([nt.sprite,nt.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},cube:{uniforms:le([nt.envmap,{opacity:{value:1}}]),vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:le([nt.common,nt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:le([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};on.physical={uniforms:le([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};function kp(o,t,e,n,i,r){const a=new Ut(0);let s=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=t.get(v));const b=o.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?g(a,s):v&&v.isColor&&(g(v,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ls)?(c===void 0&&(c=new We(new lr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ji(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new We(new lo(2,2),new fn({name:"BackgroundMaterial",uniforms:Ji(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:m}}function Vp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(R,B,Y,j,k){let F=!1;if(a){const U=d(j,Y,B);c!==U&&(c=U,m(c.object)),F=_(R,j,Y,k),F&&v(R,j,Y,k)}else{const U=B.wireframe===!0;(c.geometry!==j.id||c.program!==Y.id||c.wireframe!==U)&&(c.geometry=j.id,c.program=Y.id,c.wireframe=U,F=!0)}k!==null&&e.update(k,34963),(F||u)&&(u=!1,x(R,B,Y,j),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,B,Y){const j=Y.wireframe===!0;let k=s[R.id];k===void 0&&(k={},s[R.id]=k);let F=k[B.id];F===void 0&&(F={},k[B.id]=F);let U=F[j];return U===void 0&&(U=p(f()),F[j]=U),U}function p(R){const B=[],Y=[],j=[];for(let k=0;k<i;k++)B[k]=0,Y[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:j,object:R,attributes:{},index:null}}function _(R,B,Y,j){const k=c.attributes,F=B.attributes;let U=0;const $=Y.getAttributes();for(const K in $)if($[K].location>=0){const rt=k[K];let pt=F[K];if(pt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;U++}return c.attributesNum!==U||c.index!==j}function v(R,B,Y,j){const k={},F=B.attributes;let U=0;const $=Y.getAttributes();for(const K in $)if($[K].location>=0){let rt=F[K];rt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),k[K]=pt,U++}c.attributes=k,c.attributesNum=U,c.index=j}function b(){const R=c.newAttributes;for(let B=0,Y=R.length;B<Y;B++)R[B]=0}function M(R){y(R,0)}function y(R,B){const Y=c.newAttributes,j=c.enabledAttributes,k=c.attributeDivisors;Y[R]=1,j[R]===0&&(o.enableVertexAttribArray(R),j[R]=1),k[R]!==B&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),k[R]=B)}function T(){const R=c.newAttributes,B=c.enabledAttributes;for(let Y=0,j=B.length;Y<j;Y++)B[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),B[Y]=0)}function C(R,B,Y,j,k,F){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(R,B,Y,k,F):o.vertexAttribPointer(R,B,Y,j,k,F)}function x(R,B,Y,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();const k=j.attributes,F=Y.getAttributes(),U=B.defaultAttributeValues;for(const $ in F){const K=F[$];if(K.location>=0){let Q=k[$];if(Q===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const rt=Q.normalized,pt=Q.itemSize,Z=e.get(Q);if(Z===void 0)continue;const Rt=Z.buffer,gt=Z.type,xt=Z.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ct=Q.data,zt=ct.stride,St=Q.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<K.locationSize;mt++)y(K.location+mt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<K.locationSize;mt++)M(K.location+mt);o.bindBuffer(34962,Rt);for(let mt=0;mt<K.locationSize;mt++)C(K.location+mt,pt/K.locationSize,gt,rt,zt*xt,(St+pt/K.locationSize*mt)*xt)}else{if(Q.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)y(K.location+ct,Q.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ct=0;ct<K.locationSize;ct++)M(K.location+ct);o.bindBuffer(34962,Rt);for(let ct=0;ct<K.locationSize;ct++)C(K.location+ct,pt/K.locationSize,gt,rt,pt*xt,pt/K.locationSize*ct*xt)}}else if(U!==void 0){const rt=U[$];if(rt!==void 0)switch(rt.length){case 2:o.vertexAttrib2fv(K.location,rt);break;case 3:o.vertexAttrib3fv(K.location,rt);break;case 4:o.vertexAttrib4fv(K.location,rt);break;default:o.vertexAttrib1fv(K.location,rt)}}}}T()}function w(){J();for(const R in s){const B=s[R];for(const Y in B){const j=B[Y];for(const k in j)g(j[k].object),delete j[k];delete B[Y]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const Y in B){const j=B[Y];for(const k in j)g(j[k].object),delete j[k];delete B[Y]}delete s[R.id]}function G(R){for(const B in s){const Y=s[B];if(Y[R.id]===void 0)continue;const j=Y[R.id];for(const k in j)g(j[k].object),delete j[k];delete Y[R.id]}}function J(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:b,enableAttribute:M,disableUnusedAttributes:T}}function Gp(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function Hp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),v=o.getParameter(36349),b=f>0,M=a||t.has("OES_texture_float"),y=b&&M,T=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function Wp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ni,s=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,b=v*4;let M=_.clippingState||null;l.value=M,M=u(g,f,b,m);for(let y=0;y!==b;++y)M[y]=e[y];_.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,v=f.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let b=0,M=m;b!==d;++b,M+=4)a.copy(h[b]).applyMatrix4(v,s),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Xp(o){let t=new WeakMap;function e(a,s){return s===Da?a.mapping=Zi:s===Ra&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Da||s===Ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new af(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qp extends Sc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,vl=[.125,.215,.35,.446,.526,.582],si=20,pa=new qp,yl=new Ut;let ma=null;const ii=(1+Math.sqrt(5))/2,zi=1/ii,Ml=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ii,zi),new z(0,ii,-zi),new z(zi,0,ii),new z(-zi,0,ii),new z(ii,zi,0),new z(-ii,zi,0)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma),t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ar,format:cn,encoding:gi,depthBuffer:!1},i=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(r)),this._blurMaterial=jp(r,t,e)}return i}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const s=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yl),u.toneMapping=En,u.autoClear=!1;const m=new oo({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new We(new lr,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(yl),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):v===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const b=this._cubeSize;cs(i,v*b,_>2?b:0,b,b),u.setRenderTarget(i),d&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ml[(i-1)%Ml.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):si;p>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);const _=[];let v=0;for(let C=0;C<si;++C){const x=C/d,w=Math.exp(-x*x/2);_.push(w),C===0?v+=w:C<p&&(v+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],y=3*M*(i>b-ki?i-b+ki:0),T=4*(this._cubeSize-M);cs(e,y,T,3*M,2*M),l.setRenderTarget(e),l.render(h,pa)}}function Yp(o){const t=[],e=[],n=[];let i=o;const r=o-ki+1+vl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-ki?l=vl[a-o+ki-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,v=new Float32Array(d*g*m),b=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,x=T>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(w,d*g*T),b.set(f,p*g*T);const L=[T,T,T,T,T,T];M.set(L,_*g*T)}const y=new pn;y.setAttribute("position",new un(v,d)),y.setAttribute("uv",new un(b,p)),y.setAttribute("faceIndex",new un(M,_)),t.push(y),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(o,t,e){const n=new _i(o,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function jp(o,t,e){const n=new Float32Array(si),i=new z(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:co(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function wl(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Al(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function Zp(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Da||l===Ra,u=l===Zi||l===Ki;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new bl(o)),h=c?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new bl(o));const f=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qp(o,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let b=0,M=v.length;b<M;b+=3){const y=v[b+0],T=v[b+1],C=v[b+2];f.push(y,T,T,C,C,y)}}else{const v=g.array;d=g.version;for(let b=0,M=v.length/3-1;b<M;b+=3){const y=b+0,T=b+1,C=b+2;f.push(y,T,T,C,C,y)}}const p=new(gc(f)?bc:Mc)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Jp(o,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function $p(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tm(o,t){return o[0]-t[0]}function em(o,t){return Math.abs(t[1])-Math.abs(o[1])}function nm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ae,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Y=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;M===!0&&(L=1),y===!0&&(L=2),T===!0&&(L=3);let G=u.attributes.position.count*L,J=1;G>t.maxTextureSize&&(J=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const N=new Float32Array(G*J*4*p),R=new yc(N,G,J,p);R.type=oi,R.needsUpdate=!0;const B=L*4;for(let j=0;j<p;j++){const k=C[j],F=x[j],U=w[j],$=G*J*4*j;for(let K=0;K<k.count;K++){const Q=K*B;M===!0&&(a.fromBufferAttribute(k,K),N[$+Q+0]=a.x,N[$+Q+1]=a.y,N[$+Q+2]=a.z,N[$+Q+3]=0),y===!0&&(a.fromBufferAttribute(F,K),N[$+Q+4]=a.x,N[$+Q+5]=a.y,N[$+Q+6]=a.z,N[$+Q+7]=0),T===!0&&(a.fromBufferAttribute(U,K),N[$+Q+8]=a.x,N[$+Q+9]=a.y,N[$+Q+10]=a.z,N[$+Q+11]=U.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new Nt(G,J)},r.set(u,_),u.addEventListener("dispose",Y)}let v=0;for(let M=0;M<m.length;M++)v+=m[M];const b=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const T=p[y];T[0]=y,T[1]=m[y]}p.sort(em);for(let y=0;y<8;y++)y<d&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(tm);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const T=s[y],C=T[0],x=T[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[C]&&u.setAttribute("morphTarget"+y,_[C]),v&&u.getAttribute("morphNormal"+y)!==v[C]&&u.setAttribute("morphNormal"+y,v[C]),i[y]=x,b+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function im(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ec=new je,Cc=new yc,Pc=new Hh,Lc=new wc,Tl=[],El=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function cr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function pe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function me(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Is(o,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function rm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;o.uniform2fv(this.addr,t),me(e,t)}}function am(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;o.uniform3fv(this.addr,t),me(e,t)}}function om(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;o.uniform4fv(this.addr,t),me(e,t)}}function lm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ll.set(n),o.uniformMatrix2fv(this.addr,!1,Ll),me(e,n)}}function cm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Pl.set(n),o.uniformMatrix3fv(this.addr,!1,Pl),me(e,n)}}function um(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Cl.set(n),o.uniformMatrix4fv(this.addr,!1,Cl),me(e,n)}}function hm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function fm(o,t){const e=this.cache;pe(e,t)||(o.uniform2iv(this.addr,t),me(e,t))}function dm(o,t){const e=this.cache;pe(e,t)||(o.uniform3iv(this.addr,t),me(e,t))}function pm(o,t){const e=this.cache;pe(e,t)||(o.uniform4iv(this.addr,t),me(e,t))}function mm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function gm(o,t){const e=this.cache;pe(e,t)||(o.uniform2uiv(this.addr,t),me(e,t))}function _m(o,t){const e=this.cache;pe(e,t)||(o.uniform3uiv(this.addr,t),me(e,t))}function xm(o,t){const e=this.cache;pe(e,t)||(o.uniform4uiv(this.addr,t),me(e,t))}function vm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ec,i)}function ym(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pc,i)}function Mm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lc,i)}function bm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cc,i)}function Sm(o){switch(o){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return fm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return bm}}function wm(o,t){o.uniform1fv(this.addr,t)}function Am(o,t){const e=cr(t,this.size,2);o.uniform2fv(this.addr,e)}function Tm(o,t){const e=cr(t,this.size,3);o.uniform3fv(this.addr,e)}function Em(o,t){const e=cr(t,this.size,4);o.uniform4fv(this.addr,e)}function Cm(o,t){const e=cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Pm(o,t){const e=cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Lm(o,t){const e=cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Dm(o,t){o.uniform1iv(this.addr,t)}function Rm(o,t){o.uniform2iv(this.addr,t)}function Im(o,t){o.uniform3iv(this.addr,t)}function Fm(o,t){o.uniform4iv(this.addr,t)}function Om(o,t){o.uniform1uiv(this.addr,t)}function zm(o,t){o.uniform2uiv(this.addr,t)}function Nm(o,t){o.uniform3uiv(this.addr,t)}function Um(o,t){o.uniform4uiv(this.addr,t)}function Bm(o,t,e){const n=t.length,i=Is(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Ec,i[r])}function km(o,t,e){const n=t.length,i=Is(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Pc,i[r])}function Vm(o,t,e){const n=t.length,i=Is(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Lc,i[r])}function Gm(o,t,e){const n=t.length,i=Is(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Cc,i[r])}function Hm(o){switch(o){case 5126:return wm;case 35664:return Am;case 35665:return Tm;case 35666:return Em;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Rm;case 35668:case 35672:return Im;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return zm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Sm(e.type)}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Hm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Dl(o,t){o.seq.push(t),o.map[t.id]=t}function Ym(o,t,e){const n=o.name,i=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),a=ga.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Dl(e,c===void 0?new Wm(s,o,t):new Xm(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new qm(s),Dl(e,h)),e=h}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ym(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Rl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let jm=0;function Zm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Km(o){switch(o){case gi:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Il(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zm(o.getShaderSource(t),a)}else return i}function Qm(o,t){const e=Km(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Jm(o,t){let e;switch(t){case mh:e="Linear";break;case gh:e="Reinhard";break;case _h:e="OptimizedCineon";break;case xh:e="ACESFilmic";break;case vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $m(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function tg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function gr(o){return o!==""}function Fl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(o){return o.replace(ng,ig)}function ig(o,t){const e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Na(e)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(o){return o.replace(rg,sg)}function sg(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ag(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===mr&&(t="SHADOWMAP_TYPE_VSM"),t}function og(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function ug(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=ag(e),c=og(e),u=lg(e),h=cg(e),f=ug(e),m=e.isWebGL2?"":$m(e),g=tg(r),d=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(gr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(gr).join(`
`),_.length>0&&(_+=`
`)):(p=[Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),_=[m,Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?wt.tonemapping_pars_fragment:"",e.toneMapping!==En?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,Qm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=Na(a),a=Fl(a,e),a=Ol(a,e),s=Na(s),s=Fl(s,e),s=Ol(s,e),a=zl(a),s=zl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=v+p+a,M=v+_+s,y=Rl(i,35633,b),T=Rl(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,T),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(y).trim(),G=i.getShaderInfoLog(T).trim();let J=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){J=!1;const R=Il(i,y,"vertex"),B=Il(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(y),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new ms(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=eg(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=jm++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=T,this}let fg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}}function mg(o,t,e,n,i,r,a){const s=new ao,l=new dg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,G,J){const N=G.fog,R=J.geometry,B=x.isMeshStandardMaterial?G.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),j=!!Y&&Y.mapping===Ls?Y.image.height:null,k=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,U=F!==void 0?F.length:0;let $=0;R.morphAttributes.position!==void 0&&($=1),R.morphAttributes.normal!==void 0&&($=2),R.morphAttributes.color!==void 0&&($=3);let K,Q,rt,pt;if(k){const zt=on[k];K=zt.vertexShader,Q=zt.fragmentShader}else K=x.vertexShader,Q=x.fragmentShader,l.update(x),rt=l.getVertexShaderID(x),pt=l.getFragmentShaderID(x);const Z=o.getRenderTarget(),Rt=x.alphaTest>0,gt=x.clearcoat>0,xt=x.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:x.type,vertexShader:K,fragmentShader:Q,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:gi,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Bh,tangentSpaceNormalMap:x.normalMapType===Uh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ht,clearcoat:gt,clearcoatMap:gt&&!!x.clearcoatMap,clearcoatRoughnessMap:gt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:gt&&!!x.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!x.iridescenceMap,iridescenceThicknessMap:xt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Hi,alphaMap:!!x.alphaMap,alphaTest:Rt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:En,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Le,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),v(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function b(x){const w=g[x.type];let L;if(w){const G=on[w];L=ef.clone(G.uniforms)}else L=x.uniforms;return L}function M(x,w){let L;for(let G=0,J=c.length;G<J;G++){const N=c[G];if(N.cacheKey===w){L=N,++L.usedTimes;break}}return L===void 0&&(L=new hg(o,w,x,r),c.push(L)),L}function y(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:C}}function gg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _g(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ul(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Bl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||_g),n.length>1&&n.sort(f||Ul),i.length>1&&i.sort(f||Ul)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function xg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Bl,o.set(n,[a])):i>=r.length?(a=new Bl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function vg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ut};break;case"SpotLight":e={position:new z,direction:new z,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new z,halfWidth:new z,halfHeight:new z};break}return o[t.id]=e,e}}}function yg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Mg=0;function bg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Sg(o,t){const e=new vg,n=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new $t,s=new $t;function l(u,h){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,p=0,_=0,v=0,b=0,M=0,y=0,T=0,C=0,x=0;u.sort(bg);const w=h!==!0?Math.PI:1;for(let G=0,J=u.length;G<J;G++){const N=u[G],R=N.color,B=N.intensity,Y=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=R.r*B*w,m+=R.g*B*w,g+=R.b*B*w;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],B);else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const F=N.shadow,U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=N.shadow.matrix,M++}i.directional[d]=k,d++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(R).multiplyScalar(B*w),k.distance=Y,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[_]=k;const F=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,F.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[_]=F.matrix,N.castShadow){const U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=j,T++}_++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(R).multiplyScalar(B),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=k,v++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*w),k.distance=N.distance,k.decay=N.decay,N.castShadow){const F=N.shadow,U=n.get(N);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=N.shadow.matrix,y++}i.point[p]=k,p++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(B*w),k.groundColor.copy(N.groundColor).multiplyScalar(B*w),i.hemi[b]=k,b++}}v>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==v||L.hemiLength!==b||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==T||L.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=v,L.hemiLength=b,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=T,L.numSpotMaps=C,i.version=Mg++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const M=u[v];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),s.identity(),a.copy(M.matrixWorld),a.premultiply(_),s.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function kl(o,t){const e=new Sg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function wg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new kl(o,t),e.set(r,[l])):a>=s.length?(l=new kl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ag extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tg extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function Pg(o,t,e){let n=new Ac;const i=new Nt,r=new Nt,a=new ae,s=new Ag({depthPacking:Nh}),l=new Tg,c={},u=e.maxTextureSize,h={0:Le,1:ji,2:Bn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Eg,fragmentShader:Cg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new We(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc,this.render=function(M,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Hn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,J=M.length;G<J;G++){const N=M[G],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const j=this.type!==mr?{minFilter:ge,magFilter:ge}:{};R.map=new _i(i.x,i.y,j),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const Y=R.getViewportCount();for(let j=0;j<Y;j++){const k=R.getViewport(j);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(a),R.updateMatrices(N,j),n=R.getFrustum(),b(y,T,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===mr&&_(R,T),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,w)};function _(M,y){const T=t.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _i(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,T,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,T,m,d,null)}function v(M,y,T,C,x,w){let L=null;const G=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(G!==void 0?L=G:L=T.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const J=L.uuid,N=y.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let B=R[N];B===void 0&&(B=L.clone(),R[N]=B),L=B}return L.visible=y.visible,L.wireframe=y.wireframe,w===mr?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:h[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function b(M,y,T,C,x){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===mr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const G=t.update(M),J=M.material;if(Array.isArray(J)){const N=G.groups;for(let R=0,B=N.length;R<B;R++){const Y=N[R],j=J[Y.materialIndex];if(j&&j.visible){const k=v(M,j,C,T.near,T.far,x);o.renderBufferDirect(T,null,G,k,M,Y)}}}else if(J.visible){const N=v(M,J,C,T.near,T.far,x);o.renderBufferDirect(T,null,G,N,M,null)}}const L=M.children;for(let G=0,J=L.length;G<J;G++)b(L[G],y,T,C,x)}}function Lg(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const ot=new ae;let H=null;const at=new ae(0,0,0,0);return{setMask:function(it){H!==it&&!D&&(o.colorMask(it,it,it,it),H=it)},setLocked:function(it){D=it},setClear:function(it,Ct,te,qt,Ln){Ln===!0&&(it*=qt,Ct*=qt,te*=qt),ot.set(it,Ct,te,qt),at.equals(ot)===!1&&(o.clearColor(it,Ct,te,qt),at.copy(ot))},reset:function(){D=!1,H=null,at.set(-1,0,0,0)}}}function r(){let D=!1,ot=null,H=null,at=null;return{setTest:function(it){it?Rt(2929):gt(2929)},setMask:function(it){ot!==it&&!D&&(o.depthMask(it),ot=it)},setFunc:function(it){if(H!==it){if(it)switch(it){case ah:o.depthFunc(512);break;case oh:o.depthFunc(519);break;case lh:o.depthFunc(513);break;case La:o.depthFunc(515);break;case ch:o.depthFunc(514);break;case uh:o.depthFunc(518);break;case hh:o.depthFunc(516);break;case fh:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);H=it}},setLocked:function(it){D=it},setClear:function(it){at!==it&&(o.clearDepth(it),at=it)},reset:function(){D=!1,ot=null,H=null,at=null}}}function a(){let D=!1,ot=null,H=null,at=null,it=null,Ct=null,te=null,qt=null,Ln=null;return{setTest:function(Vt){D||(Vt?Rt(2960):gt(2960))},setMask:function(Vt){ot!==Vt&&!D&&(o.stencilMask(Vt),ot=Vt)},setFunc:function(Vt,gn,Fe){(H!==Vt||at!==gn||it!==Fe)&&(o.stencilFunc(Vt,gn,Fe),H=Vt,at=gn,it=Fe)},setOp:function(Vt,gn,Fe){(Ct!==Vt||te!==gn||qt!==Fe)&&(o.stencilOp(Vt,gn,Fe),Ct=Vt,te=gn,qt=Fe)},setLocked:function(Vt){D=Vt},setClear:function(Vt){Ln!==Vt&&(o.clearStencil(Vt),Ln=Vt)},reset:function(){D=!1,ot=null,H=null,at=null,it=null,Ct=null,te=null,qt=null,Ln=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,b=null,M=null,y=null,T=null,C=null,x=null,w=!1,L=null,G=null,J=null,N=null,R=null;const B=o.getParameter(35661);let Y=!1,j=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=j>=2);let F=null,U={};const $=o.getParameter(3088),K=o.getParameter(2978),Q=new ae().fromArray($),rt=new ae().fromArray(K);function pt(D,ot,H){const at=new Uint8Array(4),it=o.createTexture();o.bindTexture(D,it),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Ct=0;Ct<H;Ct++)o.texImage2D(ot+Ct,0,6408,1,1,0,6408,5121,at);return it}const Z={};Z[3553]=pt(3553,3553,1),Z[34067]=pt(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(2929),l.setFunc(La),fe(!1),rn(Lo),Rt(2884),ie(Hn);function Rt(D){f[D]!==!0&&(o.enable(D),f[D]=!0)}function gt(D){f[D]!==!1&&(o.disable(D),f[D]=!1)}function xt(D,ot){return m[D]!==ot?(o.bindFramebuffer(D,ot),m[D]=ot,n&&(D===36009&&(m[36160]=ot),D===36160&&(m[36009]=ot)),!0):!1}function ct(D,ot){let H=d,at=!1;if(D)if(H=g.get(ot),H===void 0&&(H=[],g.set(ot,H)),D.isWebGLMultipleRenderTargets){const it=D.texture;if(H.length!==it.length||H[0]!==36064){for(let Ct=0,te=it.length;Ct<te;Ct++)H[Ct]=36064+Ct;H.length=it.length,at=!0}}else H[0]!==36064&&(H[0]=36064,at=!0);else H[0]!==1029&&(H[0]=1029,at=!0);at&&(e.isWebGL2?o.drawBuffers(H):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function zt(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const St={[Bi]:32774,[Zu]:32778,[Ku]:32779};if(n)St[Io]=32775,St[Fo]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(St[Io]=D.MIN_EXT,St[Fo]=D.MAX_EXT)}const mt={[Qu]:0,[Ju]:1,[$u]:768,[hc]:770,[sh]:776,[ih]:774,[eh]:772,[th]:769,[fc]:771,[rh]:775,[nh]:773};function ie(D,ot,H,at,it,Ct,te,qt){if(D===Hn){_===!0&&(gt(3042),_=!1);return}if(_===!1&&(Rt(3042),_=!0),D!==ju){if(D!==v||qt!==w){if((b!==Bi||T!==Bi)&&(o.blendEquation(32774),b=Bi,T=Bi),qt)switch(D){case Hi:o.blendFuncSeparate(1,771,1,771);break;case Pa:o.blendFunc(1,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Ro:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Hi:o.blendFuncSeparate(770,771,1,771);break;case Pa:o.blendFunc(770,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Ro:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,y=null,C=null,x=null,v=D,w=qt}return}it=it||ot,Ct=Ct||H,te=te||at,(ot!==b||it!==T)&&(o.blendEquationSeparate(St[ot],St[it]),b=ot,T=it),(H!==M||at!==y||Ct!==C||te!==x)&&(o.blendFuncSeparate(mt[H],mt[at],mt[Ct],mt[te]),M=H,y=at,C=Ct,x=te),v=D,w=null}function be(D,ot){D.side===Bn?gt(2884):Rt(2884);let H=D.side===Le;ot&&(H=!H),fe(H),D.blending===Hi&&D.transparent===!1?ie(Hn):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const at=D.stencilWrite;c.setTest(at),at&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Rt(32926):gt(32926)}function fe(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function rn(D){D!==Xu?(Rt(2884),D!==G&&(D===Lo?o.cullFace(1029):D===qu?o.cullFace(1028):o.cullFace(1032))):gt(2884),G=D}function re(D){D!==J&&(Y&&o.lineWidth(D),J=D)}function It(D,ot,H){D?(Rt(32823),(N!==ot||R!==H)&&(o.polygonOffset(ot,H),N=ot,R=H)):gt(32823)}function mn(D){D?Rt(3089):gt(3089)}function sn(D){D===void 0&&(D=33984+B-1),F!==D&&(o.activeTexture(D),F=D)}function E(D,ot){F===null&&sn();let H=U[F];H===void 0&&(H={type:void 0,texture:void 0},U[F]=H),(H.type!==D||H.texture!==ot)&&(o.bindTexture(D,ot||Z[D]),H.type=D,H.texture=ot)}function S(){const D=U[F];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){Q.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function ut(D){rt.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function Mt(D,ot){let H=h.get(ot);H===void 0&&(H=new WeakMap,h.set(ot,H));let at=H.get(D);at===void 0&&(at=o.getUniformBlockIndex(ot,D.name),H.set(D,at))}function Pt(D,ot){const at=h.get(ot).get(D);u.get(D)!==at&&(o.uniformBlockBinding(ot,at,D.__bindingPointIndex),u.set(D,at))}function Xt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},F=null,U={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,b=null,M=null,y=null,T=null,C=null,x=null,w=!1,L=null,G=null,J=null,N=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),rt.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Rt,disable:gt,bindFramebuffer:xt,drawBuffers:ct,useProgram:zt,setBlending:ie,setMaterial:be,setFlipSided:fe,setCullFace:rn,setLineWidth:re,setPolygonOffset:It,setScissorTest:mn,activeTexture:sn,bindTexture:E,unbindTexture:S,compressedTexImage2D:X,texImage2D:ft,texImage3D:lt,updateUBOMapping:Mt,uniformBlockBinding:Pt,texStorage2D:vt,texStorage3D:V,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:st,scissor:ht,viewport:ut,reset:Xt}}function Dg(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,S){return _?new OffscreenCanvas(E,S):Tr("canvas")}function b(E,S,X,tt){let et=1;if((E.width>tt||E.height>tt)&&(et=tt/Math.max(E.width,E.height)),et<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const st=S?za:Math.floor,vt=st(et*E.width),V=st(et*E.height);d===void 0&&(d=v(vt,V));const ft=X?v(vt,V):d;return ft.width=vt,ft.height=V,ft.getContext("2d").drawImage(E,0,0,vt,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+V+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return ol(E.width)&&ol(E.height)}function y(E){return s?!1:E.wrapS!==tn||E.wrapT!==tn||E.minFilter!==ge&&E.minFilter!==ke}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==ge&&E.minFilter!==ke}function C(E){o.generateMipmap(E)}function x(E,S,X,tt,et=!1){if(s===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=S;return S===6403&&(X===5126&&(st=33326),X===5131&&(st=33325),X===5121&&(st=33321)),S===33319&&(X===5126&&(st=33328),X===5131&&(st=33327),X===5121&&(st=33323)),S===6408&&(X===5126&&(st=34836),X===5131&&(st=34842),X===5121&&(st=tt===Ht&&et===!1?35907:32856),X===32819&&(st=32854),X===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function w(E,S,X){return T(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==ge&&E.minFilter!==ke?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function L(E){return E===ge||E===Oo||E===zo?9728:9729}function G(E){const S=E.target;S.removeEventListener("dispose",G),N(S),S.isVideoTexture&&g.delete(S)}function J(E){const S=E.target;S.removeEventListener("dispose",J),B(S)}function N(E){const S=n.get(E);if(S.__webglInit===void 0)return;const X=E.source,tt=p.get(X);if(tt){const et=tt[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(E),Object.keys(tt).length===0&&p.delete(X)}n.remove(E)}function R(E){const S=n.get(E);o.deleteTexture(S.__webglTexture);const X=E.source,tt=p.get(X);delete tt[S.__cacheKey],a.memory.textures--}function B(E){const S=E.texture,X=n.get(E),tt=n.get(S);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(X.__webglFramebuffer[et]),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let et=0;et<X.__webglColorRenderbuffer.length;et++)X.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(X.__webglColorRenderbuffer[et]);X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,st=S.length;et<st;et++){const vt=n.get(S[et]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[et])}n.remove(S),n.remove(E)}let Y=0;function j(){Y=0}function k(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function F(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function U(E,S){const X=n.get(E);if(E.isVideoTexture&&mn(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(X,E,S);return}}e.activeTexture(33984+S),e.bindTexture(3553,X.__webglTexture)}function $(E,S){const X=n.get(E);if(E.version>0&&X.__version!==E.version){gt(X,E,S);return}e.activeTexture(33984+S),e.bindTexture(35866,X.__webglTexture)}function K(E,S){const X=n.get(E);if(E.version>0&&X.__version!==E.version){gt(X,E,S);return}e.activeTexture(33984+S),e.bindTexture(32879,X.__webglTexture)}function Q(E,S){const X=n.get(E);if(E.version>0&&X.__version!==E.version){xt(X,E,S);return}e.activeTexture(33984+S),e.bindTexture(34067,X.__webglTexture)}const rt={[Ia]:10497,[tn]:33071,[Fa]:33648},pt={[ge]:9728,[Oo]:9984,[zo]:9986,[ke]:9729,[yh]:9985,[Ds]:9987};function Z(E,S,X){if(X?(o.texParameteri(E,10242,rt[S.wrapS]),o.texParameteri(E,10243,rt[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,rt[S.wrapR]),o.texParameteri(E,10240,pt[S.magFilter]),o.texParameteri(E,10241,pt[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==tn||S.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(S.magFilter)),o.texParameteri(E,10241,L(S.minFilter)),S.minFilter!==ge&&S.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(S.type===oi&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Rt(E,S){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",G));const tt=S.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const st=F(S);if(st!==E.__cacheKey){et[st]===void 0&&(et[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,X=!0),et[st].usedTimes++;const vt=et[E.__cacheKey];vt!==void 0&&(et[E.__cacheKey].usedTimes--,vt.usedTimes===0&&R(S)),E.__cacheKey=st,E.__webglTexture=et[st].texture}return X}function gt(E,S,X){let tt=3553;S.isDataArrayTexture&&(tt=35866),S.isData3DTexture&&(tt=32879);const et=Rt(E,S),st=S.source;if(e.activeTexture(33984+X),e.bindTexture(tt,E.__webglTexture),st.version!==st.__currentVersion||et===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const vt=y(S)&&M(S.image)===!1;let V=b(S.image,vt,!1,u);V=sn(S,V);const ft=M(V)||s,lt=r.convert(S.format,S.encoding);let ht=r.convert(S.type),ut=x(S.internalFormat,lt,ht,S.encoding,S.isVideoTexture);Z(tt,S,ft);let Mt;const Pt=S.mipmaps,Xt=s&&S.isVideoTexture!==!0,D=st.__currentVersion===void 0||et===!0,ot=w(S,V,ft);if(S.isDepthTexture)ut=6402,s?S.type===oi?ut=36012:S.type===ai?ut=33190:S.type===Wi?ut=35056:ut=33189:S.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ui&&ut===6402&&S.type!==mc&&S.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ai,ht=r.convert(S.type)),S.format===Qi&&ut===6402&&(ut=34041,S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Wi,ht=r.convert(S.type))),D&&(Xt?e.texStorage2D(3553,1,ut,V.width,V.height):e.texImage2D(3553,0,ut,V.width,V.height,0,lt,ht,null));else if(S.isDataTexture)if(Pt.length>0&&ft){Xt&&D&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,at=Pt.length;H<at;H++)Mt=Pt[H],Xt?e.texSubImage2D(3553,H,0,0,Mt.width,Mt.height,lt,ht,Mt.data):e.texImage2D(3553,H,ut,Mt.width,Mt.height,0,lt,ht,Mt.data);S.generateMipmaps=!1}else Xt?(D&&e.texStorage2D(3553,ot,ut,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,lt,ht,V.data)):e.texImage2D(3553,0,ut,V.width,V.height,0,lt,ht,V.data);else if(S.isCompressedTexture){Xt&&D&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,at=Pt.length;H<at;H++)Mt=Pt[H],S.format!==cn?lt!==null?Xt?e.compressedTexSubImage2D(3553,H,0,0,Mt.width,Mt.height,lt,Mt.data):e.compressedTexImage2D(3553,H,ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(3553,H,0,0,Mt.width,Mt.height,lt,ht,Mt.data):e.texImage2D(3553,H,ut,Mt.width,Mt.height,0,lt,ht,Mt.data)}else if(S.isDataArrayTexture)Xt?(D&&e.texStorage3D(35866,ot,ut,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,lt,ht,V.data)):e.texImage3D(35866,0,ut,V.width,V.height,V.depth,0,lt,ht,V.data);else if(S.isData3DTexture)Xt?(D&&e.texStorage3D(32879,ot,ut,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,lt,ht,V.data)):e.texImage3D(32879,0,ut,V.width,V.height,V.depth,0,lt,ht,V.data);else if(S.isFramebufferTexture){if(D)if(Xt)e.texStorage2D(3553,ot,ut,V.width,V.height);else{let H=V.width,at=V.height;for(let it=0;it<ot;it++)e.texImage2D(3553,it,ut,H,at,0,lt,ht,null),H>>=1,at>>=1}}else if(Pt.length>0&&ft){Xt&&D&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,at=Pt.length;H<at;H++)Mt=Pt[H],Xt?e.texSubImage2D(3553,H,0,0,lt,ht,Mt):e.texImage2D(3553,H,ut,lt,ht,Mt);S.generateMipmaps=!1}else Xt?(D&&e.texStorage2D(3553,ot,ut,V.width,V.height),e.texSubImage2D(3553,0,0,0,lt,ht,V)):e.texImage2D(3553,0,ut,lt,ht,V);T(S,ft)&&C(tt),st.__currentVersion=st.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xt(E,S,X){if(S.image.length!==6)return;const tt=Rt(E,S),et=S.source;if(e.activeTexture(33984+X),e.bindTexture(34067,E.__webglTexture),et.version!==et.__currentVersion||tt===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const st=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,V=[];for(let H=0;H<6;H++)!st&&!vt?V[H]=b(S.image[H],!1,!0,c):V[H]=vt?S.image[H].image:S.image[H],V[H]=sn(S,V[H]);const ft=V[0],lt=M(ft)||s,ht=r.convert(S.format,S.encoding),ut=r.convert(S.type),Mt=x(S.internalFormat,ht,ut,S.encoding),Pt=s&&S.isVideoTexture!==!0,Xt=et.__currentVersion===void 0||tt===!0;let D=w(S,ft,lt);Z(34067,S,lt);let ot;if(st){Pt&&Xt&&e.texStorage2D(34067,D,Mt,ft.width,ft.height);for(let H=0;H<6;H++){ot=V[H].mipmaps;for(let at=0;at<ot.length;at++){const it=ot[at];S.format!==cn?ht!==null?Pt?e.compressedTexSubImage2D(34069+H,at,0,0,it.width,it.height,ht,it.data):e.compressedTexImage2D(34069+H,at,Mt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+H,at,0,0,it.width,it.height,ht,ut,it.data):e.texImage2D(34069+H,at,Mt,it.width,it.height,0,ht,ut,it.data)}}}else{ot=S.mipmaps,Pt&&Xt&&(ot.length>0&&D++,e.texStorage2D(34067,D,Mt,V[0].width,V[0].height));for(let H=0;H<6;H++)if(vt){Pt?e.texSubImage2D(34069+H,0,0,0,V[H].width,V[H].height,ht,ut,V[H].data):e.texImage2D(34069+H,0,Mt,V[H].width,V[H].height,0,ht,ut,V[H].data);for(let at=0;at<ot.length;at++){const Ct=ot[at].image[H].image;Pt?e.texSubImage2D(34069+H,at+1,0,0,Ct.width,Ct.height,ht,ut,Ct.data):e.texImage2D(34069+H,at+1,Mt,Ct.width,Ct.height,0,ht,ut,Ct.data)}}else{Pt?e.texSubImage2D(34069+H,0,0,0,ht,ut,V[H]):e.texImage2D(34069+H,0,Mt,ht,ut,V[H]);for(let at=0;at<ot.length;at++){const it=ot[at];Pt?e.texSubImage2D(34069+H,at+1,0,0,ht,ut,it.image[H]):e.texImage2D(34069+H,at+1,Mt,ht,ut,it.image[H])}}}T(S,lt)&&C(34067),et.__currentVersion=et.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ct(E,S,X,tt,et){const st=r.convert(X.format,X.encoding),vt=r.convert(X.type),V=x(X.internalFormat,st,vt,X.encoding);n.get(S).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,V,S.width,S.height,S.depth,0,st,vt,null):e.texImage2D(et,0,V,S.width,S.height,0,st,vt,null)),e.bindFramebuffer(36160,E),It(S)?f.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(X).__webglTexture,0,re(S)):o.framebufferTexture2D(36160,tt,et,n.get(X).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(E,S,X){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(X||It(S)){const et=S.depthTexture;et&&et.isDepthTexture&&(et.type===oi?tt=36012:et.type===ai&&(tt=33190));const st=re(S);It(S)?f.renderbufferStorageMultisampleEXT(36161,st,tt,S.width,S.height):o.renderbufferStorageMultisample(36161,st,tt,S.width,S.height)}else o.renderbufferStorage(36161,tt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const tt=re(S);X&&It(S)===!1?o.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):It(S)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0;et<tt.length;et++){const st=tt[et],vt=r.convert(st.format,st.encoding),V=r.convert(st.type),ft=x(st.internalFormat,vt,V,st.encoding),lt=re(S);X&&It(S)===!1?o.renderbufferStorageMultisample(36161,lt,ft,S.width,S.height):It(S)?f.renderbufferStorageMultisampleEXT(36161,lt,ft,S.width,S.height):o.renderbufferStorage(36161,ft,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function St(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,et=re(S);if(S.depthTexture.format===ui)It(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===Qi)It(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function mt(E){const S=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,E)}else if(X){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=o.createRenderbuffer(),zt(S.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),zt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ie(E,S,X){const tt=n.get(E);S!==void 0&&ct(tt.__webglFramebuffer,E,E.texture,36064,3553),X!==void 0&&mt(E)}function be(E){const S=E.texture,X=n.get(E),tt=n.get(S);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=S.version,a.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,vt=M(E)||s;if(et){X.__webglFramebuffer=[];for(let V=0;V<6;V++)X.__webglFramebuffer[V]=o.createFramebuffer()}else{if(X.__webglFramebuffer=o.createFramebuffer(),st)if(i.drawBuffers){const V=E.texture;for(let ft=0,lt=V.length;ft<lt;ft++){const ht=n.get(V[ft]);ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&It(E)===!1){const V=st?S:[S];X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let ft=0;ft<V.length;ft++){const lt=V[ft];X.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(36161,X.__webglColorRenderbuffer[ft]);const ht=r.convert(lt.format,lt.encoding),ut=r.convert(lt.type),Mt=x(lt.internalFormat,ht,ut,lt.encoding),Pt=re(E);o.renderbufferStorageMultisample(36161,Pt,Mt,E.width,E.height),o.framebufferRenderbuffer(36160,36064+ft,36161,X.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(X.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),Z(34067,S,vt);for(let V=0;V<6;V++)ct(X.__webglFramebuffer[V],E,S,36064,34069+V);T(S,vt)&&C(34067),e.unbindTexture()}else if(st){const V=E.texture;for(let ft=0,lt=V.length;ft<lt;ft++){const ht=V[ft],ut=n.get(ht);e.bindTexture(3553,ut.__webglTexture),Z(3553,ht,vt),ct(X.__webglFramebuffer,E,ht,36064+ft,3553),T(ht,vt)&&C(3553)}e.unbindTexture()}else{let V=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?V=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(V,tt.__webglTexture),Z(V,S,vt),ct(X.__webglFramebuffer,E,S,36064,V),T(S,vt)&&C(V),e.unbindTexture()}E.depthBuffer&&mt(E)}function fe(E){const S=M(E)||s,X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,et=X.length;tt<et;tt++){const st=X[tt];if(T(st,S)){const vt=E.isWebGLCubeRenderTarget?34067:3553,V=n.get(st).__webglTexture;e.bindTexture(vt,V),C(vt),e.unbindTexture()}}}function rn(E){if(s&&E.samples>0&&It(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],X=E.width,tt=E.height;let et=16384;const st=[],vt=E.stencilBuffer?33306:36096,V=n.get(E),ft=E.isWebGLMultipleRenderTargets===!0;if(ft)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,V.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,V.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,V.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){st.push(36064+lt),E.depthBuffer&&st.push(vt);const ht=V.__ignoreDepthValues!==void 0?V.__ignoreDepthValues:!1;if(ht===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),ft&&o.framebufferRenderbuffer(36008,36064,36161,V.__webglColorRenderbuffer[lt]),ht===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),ft){const ut=n.get(S[lt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,X,tt,0,0,X,tt,et,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ft)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,V.__webglColorRenderbuffer[lt]);const ht=n.get(S[lt]).__webglTexture;e.bindFramebuffer(36160,V.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,ht,0)}e.bindFramebuffer(36009,V.__webglMultisampledFramebuffer)}}function re(E){return Math.min(h,E.samples)}function It(E){const S=n.get(E);return s&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mn(E){const S=a.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function sn(E,S){const X=E.encoding,tt=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Oa||X!==gi&&(X===Ht?s===!1?t.has("EXT_sRGB")===!0&&tt===cn?(E.format=Oa,E.minFilter=ke,E.generateMipmaps=!1):S=xc.sRGBToLinear(S):(tt!==cn||et!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),S}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=ie,this.setupRenderTarget=be,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=It}function Rg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===mi)return 5121;if(r===wh)return 32819;if(r===Ah)return 32820;if(r===Mh)return 5120;if(r===bh)return 5122;if(r===mc)return 5123;if(r===Sh)return 5124;if(r===ai)return 5125;if(r===oi)return 5126;if(r===Ar)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Th)return 6406;if(r===cn)return 6408;if(r===Ch)return 6409;if(r===Ph)return 6410;if(r===ui)return 6402;if(r===Qi)return 34041;if(r===Lh)return 6403;if(r===Eh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Oa)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Dh)return 36244;if(r===Rh)return 33319;if(r===Ih)return 33320;if(r===Fh)return 36249;if(r===ks||r===Vs||r===Gs||r===Hs)if(a===Ht)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===Uo||r===Bo||r===ko)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===No)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vo||r===Go)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Vo)return a===Ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Go)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Wo||r===Xo||r===qo||r===Yo||r===jo||r===Zo||r===Ko||r===Qo||r===Jo||r===$o||r===tl||r===el||r===nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ho)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ko)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jo)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$o)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tl)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===el)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nl)return a===Ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===il)return a===Ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Wi?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Ig extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _r extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const v=new _r;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[d.jointName]=v,c.add(v)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Og extends je{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=ai),n===void 0&&u===Qi&&(n=Wi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1}}class zg extends or{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],v=[],b=new Ve;b.layers.enable(1),b.viewport=new ae;const M=new Ve;M.layers.enable(2),M.viewport=new ae;const y=[b,M],T=new Ig;T.layers.enable(1),T.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let U=_[F];return U===void 0&&(U=new _a,_[F]=U),U.getTargetRaySpace()},this.getControllerGrip=function(F){let U=_[F];return U===void 0&&(U=new _a,_[F]=U),U.getGripSpace()},this.getHand=function(F){let U=_[F];return U===void 0&&(U=new _a,_[F]=U),U.getHandSpace()};function w(F){const U=v.indexOf(F.inputSource);if(U===-1)return;const $=_[U];$!==void 0&&$.dispatchEvent({type:F.type,data:F.inputSource})}function L(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",G);for(let F=0;F<_.length;F++){const U=v[F];U!==null&&(v[F]=null,_[F].disconnect(U))}C=null,x=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",L),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),p=new _i(f.framebufferWidth,f.framebufferHeight,{format:cn,type:mi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,$=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Qi:ui,$=g.stencil?Wi:ai);const Q={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),p=new _i(h.textureWidth,h.textureHeight,{format:cn,type:mi,depthTexture:new Og(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const rt=t.properties.get(p);rt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(F){for(let U=0;U<F.removed.length;U++){const $=F.removed[U],K=v.indexOf($);K>=0&&(v[K]=null,_[K].dispatchEvent({type:"disconnected",data:$}))}for(let U=0;U<F.added.length;U++){const $=F.added[U];let K=v.indexOf($);if(K===-1){for(let rt=0;rt<_.length;rt++)if(rt>=v.length){v.push($),K=rt;break}else if(v[rt]===null){v[rt]=$,K=rt;break}if(K===-1)break}const Q=_[K];Q&&Q.dispatchEvent({type:"connected",data:$})}}const J=new z,N=new z;function R(F,U,$){J.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition($.matrixWorld);const K=J.distanceTo(N),Q=U.projectionMatrix.elements,rt=$.projectionMatrix.elements,pt=Q[14]/(Q[10]-1),Z=Q[14]/(Q[10]+1),Rt=(Q[9]+1)/Q[5],gt=(Q[9]-1)/Q[5],xt=(Q[8]-1)/Q[0],ct=(rt[8]+1)/rt[0],zt=pt*xt,St=pt*ct,mt=K/(-xt+ct),ie=mt*-xt;U.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ie),F.translateZ(mt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const be=pt+mt,fe=Z+mt,rn=zt-ie,re=St+(K-ie),It=Rt*Z/fe*be,mn=gt*Z/fe*be;F.projectionMatrix.makePerspective(rn,re,It,mn,be,fe)}function B(F,U){U===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(U.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;T.near=M.near=b.near=F.near,T.far=M.far=b.far=F.far,(C!==T.near||x!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,x=T.far);const U=F.parent,$=T.cameras;B(T,U);for(let Q=0;Q<$.length;Q++)B($[Q],U);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const K=F.children;for(let Q=0,rt=K.length;Q<rt;Q++)K[Q].updateMatrixWorld(!0);$.length===2?R(T,b,M):T.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let Y=null;function j(F,U){if(c=U.getViewerPose(l||a),m=U,c!==null){const $=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let K=!1;$.length!==T.cameras.length&&(T.cameras.length=0,K=!0);for(let Q=0;Q<$.length;Q++){const rt=$[Q];let pt=null;if(f!==null)pt=f.getViewport(rt);else{const Rt=u.getViewSubImage(h,rt);pt=Rt.viewport,Q===0&&(t.setRenderTargetTextures(p,Rt.colorTexture,h.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(p))}let Z=y[Q];Z===void 0&&(Z=new Ve,Z.layers.enable(Q),Z.viewport=new ae,y[Q]=Z),Z.matrix.fromArray(rt.transform.matrix),Z.projectionMatrix.fromArray(rt.projectionMatrix),Z.viewport.set(pt.x,pt.y,pt.width,pt.height),Q===0&&T.matrix.copy(Z.matrix),K===!0&&T.cameras.push(Z)}}for(let $=0;$<_.length;$++){const K=v[$],Q=_[$];K!==null&&Q!==void 0&&Q.update(K,U,l||a)}Y&&Y(F,U),m=null}const k=new Tc;k.setAnimationLoop(j),this.setAnimationLoop=function(F){Y=F},this.dispose=function(){}}}function Ng(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,b)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Le&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Le&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uv2Transform.value.copy(b.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Le&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Ug(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(v,b){const M=b.program;n.uniformBlockBinding(v,M)}function c(v,b){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",p));const y=b.program;n.updateUBOMapping(v,y);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const b=h();v.__bindingPointIndex=b;const M=o.createBuffer(),y=v.__size,T=v.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,M),M}function h(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=i[v.id],M=v.uniforms,y=v.__cache;o.bindBuffer(35345,b);for(let T=0,C=M.length;T<C;T++){const x=M[T];if(m(x,T,y)===!0){const w=x.value,L=x.__offset;typeof w=="number"?(x.__data[0]=w,o.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):w.toArray(x.__data),o.bufferSubData(35345,L,x.__data))}}o.bindBuffer(35345,null)}function m(v,b,M){const y=v.value;if(M[b]===void 0)return typeof y=="number"?M[b]=y:M[b]=y.clone(),!0;if(typeof y=="number"){if(M[b]!==y)return M[b]=y,!0}else{const T=M[b];if(T.equals(y)===!1)return T.copy(y),!0}return!1}function g(v){const b=v.uniforms;let M=0;const y=16;let T=0;for(let C=0,x=b.length;C<x;C++){const w=b[C],L=d(w);if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,C>0){T=M%y;const G=y-T;T!==0&&G-L.boundary<0&&(M+=y-T,w.__offset=M)}M+=L.storage}return T=M%y,T>0&&(M+=y-T),v.__size=M,v.__cache={},this}function d(v){const b=v.value,M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(v){const b=v.target;b.removeEventListener("dispose",p);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const v in i)o.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Bg(){const o=Tr("canvas");return o.style.display="block",o}function kg(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Bg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,v=0,b=null,M=-1,y=null;const T=new ae,C=new ae;let x=null,w=t.width,L=t.height,G=1,J=null,N=null;const R=new ae(0,0,w,L),B=new ae(0,0,w,L);let Y=!1;const j=new Ac;let k=!1,F=!1,U=null;const $=new $t,K=new Nt,Q=new z,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return b===null?G:1}let Z=e;function Rt(A,O){for(let W=0;W<A.length;W++){const I=A[W],q=t.getContext(I,O);if(q!==null)return q}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),Z===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),Z=Rt(O,A),Z===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,xt,ct,zt,St,mt,ie,be,fe,rn,re,It,mn,sn,E,S,X,tt,et,st,vt,V,ft,lt;function ht(){gt=new Kp(Z),xt=new Hp(Z,gt,o),gt.init(xt),V=new Rg(Z,gt,xt),ct=new Lg(Z,gt,xt),zt=new $p,St=new gg,mt=new Dg(Z,gt,ct,St,xt,V,zt),ie=new Xp(d),be=new Zp(d),fe=new cf(Z,xt),ft=new Vp(Z,gt,fe,xt),rn=new Qp(Z,fe,zt,ft),re=new im(Z,rn,fe,zt),et=new nm(Z,xt,mt),S=new Wp(St),It=new mg(d,ie,be,gt,xt,ft,S),mn=new Ng(d,St),sn=new xg,E=new wg(gt,xt),tt=new kp(d,ie,ct,re,u,a),X=new Pg(d,re,xt),lt=new Ug(Z,zt,xt,ct),st=new Gp(Z,gt,zt,xt),vt=new Jp(Z,gt,zt,xt),zt.programs=It.programs,d.capabilities=xt,d.extensions=gt,d.properties=St,d.renderLists=sn,d.shadowMap=X,d.state=ct,d.info=zt}ht();const ut=new zg(d,Z);this.xr=ut,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(w,L,!1))},this.getSize=function(A){return A.set(w,L)},this.setSize=function(A,O,W){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=A,L=O,t.width=Math.floor(A*G),t.height=Math.floor(O*G),W!==!1&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(w*G,L*G).floor()},this.setDrawingBufferSize=function(A,O,W){w=A,L=O,G=W,t.width=Math.floor(A*W),t.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,O,W,I){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,O,W,I),ct.viewport(T.copy(R).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,O,W,I){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,O,W,I),ct.scissor(C.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(A){ct.setScissorTest(Y=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,O=!0,W=!0){let I=0;A&&(I|=16384),O&&(I|=256),W&&(I|=1024),Z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),sn.dispose(),E.dispose(),St.dispose(),ie.dispose(),be.dispose(),re.dispose(),ft.dispose(),lt.dispose(),It.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ct),ut.removeEventListener("sessionend",te),U&&(U.dispose(),U=null),qt.stop()};function Mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=zt.autoReset,O=X.enabled,W=X.autoUpdate,I=X.needsUpdate,q=X.type;ht(),zt.autoReset=A,X.enabled=O,X.autoUpdate=W,X.needsUpdate=I,X.type=q}function Xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function D(A){const O=A.target;O.removeEventListener("dispose",D),ot(O)}function ot(A){H(A),St.remove(A)}function H(A){const O=St.get(A).programs;O!==void 0&&(O.forEach(function(W){It.releaseProgram(W)}),A.isShaderMaterial&&It.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,I,q,dt){O===null&&(O=rt);const _t=q.isMesh&&q.matrixWorld.determinant()<0,bt=Vu(A,O,W,I,q);ct.setMaterial(I,_t);let yt=W.index;const Dt=W.attributes.position;if(yt===null){if(Dt===void 0||Dt.count===0)return}else if(yt.count===0)return;let Tt=1;I.wireframe===!0&&(yt=rn.getWireframeAttribute(W),Tt=2),ft.setup(q,I,bt,W,yt);let Et,Gt=st;yt!==null&&(Et=fe.get(yt),Gt=vt,Gt.setIndex(Et));const Zn=yt!==null?yt.count:Dt.count,yi=W.drawRange.start*Tt,Mi=W.drawRange.count*Tt,an=dt!==null?dt.start*Tt:0,Lt=dt!==null?dt.count*Tt:1/0,bi=Math.max(yi,an),jt=Math.min(Zn,yi+Mi,an+Lt)-1,Oe=Math.max(0,jt-bi+1);if(Oe!==0){if(q.isMesh)I.wireframe===!0?(ct.setLineWidth(I.wireframeLinewidth*pt()),Gt.setMode(1)):Gt.setMode(4);else if(q.isLine){let Dn=I.linewidth;Dn===void 0&&(Dn=1),ct.setLineWidth(Dn*pt()),q.isLineSegments?Gt.setMode(1):q.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else q.isPoints?Gt.setMode(0):q.isSprite&&Gt.setMode(4);if(q.isInstancedMesh)Gt.renderInstances(bi,Oe,q.count);else if(W.isInstancedBufferGeometry){const Dn=Math.min(W.instanceCount,W._maxInstanceCount);Gt.renderInstances(bi,Oe,Dn)}else Gt.render(bi,Oe)}},this.compile=function(A,O){function W(I,q,dt){I.transparent===!0&&I.side===Bn?(I.side=Le,I.needsUpdate=!0,Gr(I,q,dt),I.side=ji,I.needsUpdate=!0,Gr(I,q,dt),I.side=Bn):Gr(I,q,dt)}f=E.get(A),f.init(),g.push(f),A.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(d.physicallyCorrectLights),A.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let dt=0;dt<q.length;dt++){const _t=q[dt];W(_t,A,I)}else W(q,A,I)}),g.pop(),f=null};let at=null;function it(A){at&&at(A)}function Ct(){qt.stop()}function te(){qt.start()}const qt=new Tc;qt.setAnimationLoop(it),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){at=A,ut.setAnimationLoop(A),A===null?qt.stop():qt.start()},ut.addEventListener("sessionstart",Ct),ut.addEventListener("sessionend",te),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,O,b),f=E.get(A,g.length),f.init(),g.push(f),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix($),F=this.localClippingEnabled,k=S.init(this.clippingPlanes,F,O),h=sn.get(A,m.length),h.init(),m.push(h),Ln(A,O,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(J,N),k===!0&&S.beginShadows();const W=f.state.shadowsArray;if(X.render(W,A,O),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,A),f.setupLights(d.physicallyCorrectLights),O.isArrayCamera){const I=O.cameras;for(let q=0,dt=I.length;q<dt;q++){const _t=I[q];Vt(h,A,_t,_t.viewport)}}else Vt(h,A,O);b!==null&&(mt.updateMultisampleRenderTarget(b),mt.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(d,A,O),ft.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ln(A,O,W,I){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){I&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const _t=re.update(A),bt=A.material;bt.visible&&h.push(A,_t,bt,W,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==zt.render.frame&&(A.skeleton.update(),A.skeleton.frame=zt.render.frame),!A.frustumCulled||j.intersectsObject(A))){I&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const _t=re.update(A),bt=A.material;if(Array.isArray(bt)){const yt=_t.groups;for(let Dt=0,Tt=yt.length;Dt<Tt;Dt++){const Et=yt[Dt],Gt=bt[Et.materialIndex];Gt&&Gt.visible&&h.push(A,_t,Gt,W,Q.z,Et)}}else bt.visible&&h.push(A,_t,bt,W,Q.z,null)}}const dt=A.children;for(let _t=0,bt=dt.length;_t<bt;_t++)Ln(dt[_t],O,W,I)}function Vt(A,O,W,I){const q=A.opaque,dt=A.transmissive,_t=A.transparent;f.setupLightsView(W),dt.length>0&&gn(q,O,W),I&&ct.viewport(T.copy(I)),q.length>0&&Fe(q,O,W),dt.length>0&&Fe(dt,O,W),_t.length>0&&Fe(_t,O,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function gn(A,O,W){const I=xt.isWebGL2;U===null&&(U=new _i(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?Ar:mi,minFilter:Ds,samples:I&&r===!0?4:0})),d.getDrawingBufferSize(K),I?U.setSize(K.x,K.y):U.setSize(za(K.x),za(K.y));const q=d.getRenderTarget();d.setRenderTarget(U),d.clear();const dt=d.toneMapping;d.toneMapping=En,Fe(A,O,W),d.toneMapping=dt,mt.updateMultisampleRenderTarget(U),mt.updateRenderTargetMipmap(U),d.setRenderTarget(q)}function Fe(A,O,W){const I=O.isScene===!0?O.overrideMaterial:null;for(let q=0,dt=A.length;q<dt;q++){const _t=A[q],bt=_t.object,yt=_t.geometry,Dt=I===null?_t.material:I,Tt=_t.group;bt.layers.test(W.layers)&&ku(bt,O,W,yt,Dt,Tt)}}function ku(A,O,W,I,q,dt){A.onBeforeRender(d,O,W,I,q,dt),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(d,O,W,I,A,dt),q.transparent===!0&&q.side===Bn?(q.side=Le,q.needsUpdate=!0,d.renderBufferDirect(W,O,I,q,A,dt),q.side=ji,q.needsUpdate=!0,d.renderBufferDirect(W,O,I,q,A,dt),q.side=Bn):d.renderBufferDirect(W,O,I,q,A,dt),A.onAfterRender(d,O,W,I,q,dt)}function Gr(A,O,W){O.isScene!==!0&&(O=rt);const I=St.get(A),q=f.state.lights,dt=f.state.shadowsArray,_t=q.state.version,bt=It.getParameters(A,q.state,dt,O,W),yt=It.getProgramCacheKey(bt);let Dt=I.programs;I.environment=A.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(A.isMeshStandardMaterial?be:ie).get(A.envMap||I.environment),Dt===void 0&&(A.addEventListener("dispose",D),Dt=new Map,I.programs=Dt);let Tt=Dt.get(yt);if(Tt!==void 0){if(I.currentProgram===Tt&&I.lightsStateVersion===_t)return Co(A,bt),Tt}else bt.uniforms=It.getUniforms(A),A.onBuild(W,bt,d),A.onBeforeCompile(bt,d),Tt=It.acquireProgram(bt,yt),Dt.set(yt,Tt),I.uniforms=bt.uniforms;const Et=I.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=S.uniform),Co(A,bt),I.needsLights=Hu(A),I.lightsStateVersion=_t,I.needsLights&&(Et.ambientLightColor.value=q.state.ambient,Et.lightProbe.value=q.state.probe,Et.directionalLights.value=q.state.directional,Et.directionalLightShadows.value=q.state.directionalShadow,Et.spotLights.value=q.state.spot,Et.spotLightShadows.value=q.state.spotShadow,Et.rectAreaLights.value=q.state.rectArea,Et.ltc_1.value=q.state.rectAreaLTC1,Et.ltc_2.value=q.state.rectAreaLTC2,Et.pointLights.value=q.state.point,Et.pointLightShadows.value=q.state.pointShadow,Et.hemisphereLights.value=q.state.hemi,Et.directionalShadowMap.value=q.state.directionalShadowMap,Et.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Et.spotShadowMap.value=q.state.spotShadowMap,Et.spotLightMatrix.value=q.state.spotLightMatrix,Et.spotLightMap.value=q.state.spotLightMap,Et.pointShadowMap.value=q.state.pointShadowMap,Et.pointShadowMatrix.value=q.state.pointShadowMatrix);const Gt=Tt.getUniforms(),Zn=ms.seqWithValue(Gt.seq,Et);return I.currentProgram=Tt,I.uniformsList=Zn,Tt}function Co(A,O){const W=St.get(A);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Vu(A,O,W,I,q){O.isScene!==!0&&(O=rt),mt.resetTextureUnits();const dt=O.fog,_t=I.isMeshStandardMaterial?O.environment:null,bt=b===null?d.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:gi,yt=(I.isMeshStandardMaterial?be:ie).get(I.envMap||_t),Dt=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Tt=!!I.normalMap&&!!W.attributes.tangent,Et=!!W.morphAttributes.position,Gt=!!W.morphAttributes.normal,Zn=!!W.morphAttributes.color,yi=I.toneMapped?d.toneMapping:En,Mi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,an=Mi!==void 0?Mi.length:0,Lt=St.get(I),bi=f.state.lights;if(k===!0&&(F===!0||A!==y)){const Se=A===y&&I.id===M;S.setState(I,A,Se)}let jt=!1;I.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==bi.state.version||Lt.outputEncoding!==bt||q.isInstancedMesh&&Lt.instancing===!1||!q.isInstancedMesh&&Lt.instancing===!0||q.isSkinnedMesh&&Lt.skinning===!1||!q.isSkinnedMesh&&Lt.skinning===!0||Lt.envMap!==yt||I.fog===!0&&Lt.fog!==dt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==S.numPlanes||Lt.numIntersection!==S.numIntersection)||Lt.vertexAlphas!==Dt||Lt.vertexTangents!==Tt||Lt.morphTargets!==Et||Lt.morphNormals!==Gt||Lt.morphColors!==Zn||Lt.toneMapping!==yi||xt.isWebGL2===!0&&Lt.morphTargetsCount!==an)&&(jt=!0):(jt=!0,Lt.__version=I.version);let Oe=Lt.currentProgram;jt===!0&&(Oe=Gr(I,O,q));let Dn=!1,ur=!1,Ns=!1;const de=Oe.getUniforms(),Kn=Lt.uniforms;if(ct.useProgram(Oe.program)&&(Dn=!0,ur=!0,Ns=!0),I.id!==M&&(M=I.id,ur=!0),Dn||y!==A){if(de.setValue(Z,"projectionMatrix",A.projectionMatrix),xt.logarithmicDepthBuffer&&de.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),y!==A&&(y=A,ur=!0,Ns=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Se=de.map.cameraPosition;Se!==void 0&&Se.setValue(Z,Q.setFromMatrixPosition(A.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&de.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&de.setValue(Z,"viewMatrix",A.matrixWorldInverse)}if(q.isSkinnedMesh){de.setOptional(Z,q,"bindMatrix"),de.setOptional(Z,q,"bindMatrixInverse");const Se=q.skeleton;Se&&(xt.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),de.setValue(Z,"boneTexture",Se.boneTexture,mt),de.setValue(Z,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=W.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&xt.isWebGL2===!0)&&et.update(q,W,I,Oe),(ur||Lt.receiveShadow!==q.receiveShadow)&&(Lt.receiveShadow=q.receiveShadow,de.setValue(Z,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Kn.envMap.value=yt,Kn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),ur&&(de.setValue(Z,"toneMappingExposure",d.toneMappingExposure),Lt.needsLights&&Gu(Kn,Ns),dt&&I.fog===!0&&mn.refreshFogUniforms(Kn,dt),mn.refreshMaterialUniforms(Kn,I,G,L,U),ms.upload(Z,Lt.uniformsList,Kn,mt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ms.upload(Z,Lt.uniformsList,Kn,mt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&de.setValue(Z,"center",q.center),de.setValue(Z,"modelViewMatrix",q.modelViewMatrix),de.setValue(Z,"normalMatrix",q.normalMatrix),de.setValue(Z,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Se=I.uniformsGroups;for(let Bs=0,Wu=Se.length;Bs<Wu;Bs++)if(xt.isWebGL2){const Po=Se[Bs];lt.update(Po,Oe),lt.bind(Po,Oe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oe}function Gu(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Hu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,O,W){St.get(A.texture).__webglTexture=O,St.get(A.depthTexture).__webglTexture=W;const I=St.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const W=St.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){b=A,_=O,v=W;let I=!0;if(A){const yt=St.get(A);yt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),I=!1):yt.__webglFramebuffer===void 0?mt.setupRenderTarget(A):yt.__hasExternalTextures&&mt.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture)}let q=null,dt=!1,_t=!1;if(A){const yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture)&&(_t=!0);const Dt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(q=Dt[O],dt=!0):xt.isWebGL2&&A.samples>0&&mt.useMultisampledRTT(A)===!1?q=St.get(A).__webglMultisampledFramebuffer:q=Dt,T.copy(A.viewport),C.copy(A.scissor),x=A.scissorTest}else T.copy(R).multiplyScalar(G).floor(),C.copy(B).multiplyScalar(G).floor(),x=Y;if(ct.bindFramebuffer(36160,q)&&xt.drawBuffers&&I&&ct.drawBuffers(A,q),ct.viewport(T),ct.scissor(C),ct.setScissorTest(x),dt){const yt=St.get(A.texture);Z.framebufferTexture2D(36160,36064,34069+O,yt.__webglTexture,W)}else if(_t){const yt=St.get(A.texture),Dt=O||0;Z.framebufferTextureLayer(36160,36064,yt.__webglTexture,W||0,Dt)}M=-1},this.readRenderTargetPixels=function(A,O,W,I,q,dt,_t){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){ct.bindFramebuffer(36160,bt);try{const yt=A.texture,Dt=yt.format,Tt=yt.type;if(Dt!==cn&&V.convert(Dt)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=Tt===Ar&&(gt.has("EXT_color_buffer_half_float")||xt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(Tt!==mi&&V.convert(Tt)!==Z.getParameter(35738)&&!(Tt===oi&&(xt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-I&&W>=0&&W<=A.height-q&&Z.readPixels(O,W,I,q,V.convert(Dt),V.convert(Tt),dt)}finally{const yt=b!==null?St.get(b).__webglFramebuffer:null;ct.bindFramebuffer(36160,yt)}}},this.copyFramebufferToTexture=function(A,O,W=0){const I=Math.pow(2,-W),q=Math.floor(O.image.width*I),dt=Math.floor(O.image.height*I);mt.setTexture2D(O,0),Z.copyTexSubImage2D(3553,W,0,0,A.x,A.y,q,dt),ct.unbindTexture()},this.copyTextureToTexture=function(A,O,W,I=0){const q=O.image.width,dt=O.image.height,_t=V.convert(W.format),bt=V.convert(W.type);mt.setTexture2D(W,0),Z.pixelStorei(37440,W.flipY),Z.pixelStorei(37441,W.premultiplyAlpha),Z.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?Z.texSubImage2D(3553,I,A.x,A.y,q,dt,_t,bt,O.image.data):O.isCompressedTexture?Z.compressedTexSubImage2D(3553,I,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,_t,O.mipmaps[0].data):Z.texSubImage2D(3553,I,A.x,A.y,_t,bt,O.image),I===0&&W.generateMipmaps&&Z.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W,I,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=A.max.x-A.min.x+1,_t=A.max.y-A.min.y+1,bt=A.max.z-A.min.z+1,yt=V.convert(I.format),Dt=V.convert(I.type);let Tt;if(I.isData3DTexture)mt.setTexture3D(I,0),Tt=32879;else if(I.isDataArrayTexture)mt.setTexture2DArray(I,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,I.flipY),Z.pixelStorei(37441,I.premultiplyAlpha),Z.pixelStorei(3317,I.unpackAlignment);const Et=Z.getParameter(3314),Gt=Z.getParameter(32878),Zn=Z.getParameter(3316),yi=Z.getParameter(3315),Mi=Z.getParameter(32877),an=W.isCompressedTexture?W.mipmaps[0]:W.image;Z.pixelStorei(3314,an.width),Z.pixelStorei(32878,an.height),Z.pixelStorei(3316,A.min.x),Z.pixelStorei(3315,A.min.y),Z.pixelStorei(32877,A.min.z),W.isDataTexture||W.isData3DTexture?Z.texSubImage3D(Tt,q,O.x,O.y,O.z,dt,_t,bt,yt,Dt,an.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Tt,q,O.x,O.y,O.z,dt,_t,bt,yt,an.data)):Z.texSubImage3D(Tt,q,O.x,O.y,O.z,dt,_t,bt,yt,Dt,an),Z.pixelStorei(3314,Et),Z.pixelStorei(32878,Gt),Z.pixelStorei(3316,Zn),Z.pixelStorei(3315,yi),Z.pixelStorei(32877,Mi),q===0&&I.generateMipmaps&&Z.generateMipmap(Tt),ct.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?mt.setTextureCube(A,0):A.isData3DTexture?mt.setTexture3D(A,0):A.isDataArrayTexture?mt.setTexture2DArray(A,0):mt.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){_=0,v=0,b=null,ct.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dc extends kg{}Dc.prototype.isWebGL1Renderer=!0;class Vg extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Rc extends Br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new $t,Ua=new so,us=new Rs,hs=new z;class Gg extends xe{constructor(t=new pn,e=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;Vl.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(Vl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,d=m;g<d;g++){const p=c.getX(g);hs.fromBufferAttribute(h,p),Gl(hs,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,d=m;g<d;g++)hs.fromBufferAttribute(h,g),Gl(hs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Gl(o,t,e,n,i,r,a){const s=Ua.distanceSqToPoint(o);if(s<e){const l=new z;Ua.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:a})}}class kr extends pn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new z,f=new z,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const v=[],b=_/n;let M=0;_==0&&a==0?M=.5/e:_==n&&l==Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const T=y/e;h.x=-t*Math.cos(i+T*r)*Math.sin(a+b*s),h.y=t*Math.cos(a+b*s),h.z=t*Math.sin(i+T*r)*Math.sin(a+b*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(T+M,1-b),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<e;v++){const b=u[_][v+1],M=u[_][v],y=u[_+1][v],T=u[_+1][v+1];(_!==0||a>0)&&m.push(b,M,T),(_!==n-1||l<Math.PI)&&m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2))}static fromJSON(t){return new kr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Hl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Hg{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Wg=new Hg;class Ic{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Xg extends Ic{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Hl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Tr("img");function l(){u(),Hl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class Fc extends Ic{constructor(t){super(t)}load(t,e,n,i){const r=new je,a=new Xg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class qg{constructor(t,e,n=0,i=1/0){this.ray=new so(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ba(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ba(t[i],this,n,e);return n.sort(Wl),n}}function Wl(o,t){return o.distance-t.distance}function Ba(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)Ba(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function Sn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Oc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var De={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},uo,ue,Kt,Xe=1e8,Ot=1/Xe,ka=Math.PI*2,Yg=ka/4,jg=0,zc=Math.sqrt,Zg=Math.cos,Kg=Math.sin,ne=function(t){return typeof t=="string"},Wt=function(t){return typeof t=="function"},Cn=function(t){return typeof t=="number"},ho=function(t){return typeof t>"u"},dn=function(t){return typeof t=="object"},ve=function(t){return t!==!1},Nc=function(){return typeof window<"u"},fs=function(t){return Wt(t)||ne(t)},Uc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},he=Array.isArray,Va=/(?:-?\.?\d|\.)+/gi,Bc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kc=/[+-]=-?[.\d]+/,Vc=/[^,'"\[\]\s]+/gi,Qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ue,Ga,fo,Re={},ys={},Gc,Hc=function(t){return(ys=xi(t,Re))&&Ie},po=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ms=function(t,e){return!e&&console.warn(t)},Wc=function(t,e){return t&&(Re[t]=e)&&ys&&(ys[t]=e)||Re},Er=function(){return 0},Jg={suppressEvents:!0,isStart:!0,kill:!1},gs={suppressEvents:!0,kill:!1},$g={suppressEvents:!0},mo={},Wn=[],Ha={},Xc,Ee={},va={},Xl=30,_s=[],go="",_o=function(t){var e=t[0],n,i;if(dn(e)||Wt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=_s.length;i--&&!_s[i].targetTest(e););n=_s[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new du(t[i],n)))||t.splice(i,1);return t},fi=function(t){return t._gsap||_o(qe(t))[0]._gsap},qc=function(t,e,n){return(n=t[e])&&Wt(n)?t[e]():ho(n)&&t.getAttribute&&t.getAttribute(e)||n},ye=function(t,e){return(t=t.split(",")).forEach(e)||t},Yt=function(t){return Math.round(t*1e5)/1e5||0},se=function(t){return Math.round(t*1e7)/1e7||0},Xi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},t_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},bs=function(){var t=Wn.length,e=Wn.slice(0),n,i;for(Ha={},Wn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yc=function(t,e,n,i){Wn.length&&!ue&&bs(),t.render(e,n,i||ue&&e<0&&(t._initted||t._startAt)),Wn.length&&!ue&&bs()},jc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vc).length<2?e:ne(t)?t.trim():t},Zc=function(t){return t},Ze=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},e_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},xi=function(t,e){for(var n in e)t[n]=e[n];return t},ql=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=dn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Ss=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},br=function(t){var e=t.parent||Bt,n=t.keyframes?e_(he(t.keyframes)):Ze;if(ve(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},n_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Kc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Fs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},di=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},i_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Wa=function(t,e,n,i){return t._startAt&&(ue?t._startAt.revert(gs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},r_=function o(t){return!t||t._ts&&o(t.parent)},Yl=function(t){return t._repeat?tr(t._tTime,t=t.duration()+t._rDelay)*t:0},tr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ws=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Os=function(t){return t._end=se(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ot)||0))},zs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Os(t),n._dirty||di(n,t)),t},Qc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ws(t.rawTime(),e),(!e._dur||Vr(0,e.totalDuration(),n)-e._tTime>Ot)&&e.render(n,!0)),di(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ot}},ln=function(t,e,n,i){return e.parent&&qn(e),e._start=se((Cn(n)?n:n||t!==Bt?Ne(t,n,e):t._time)+e._delay),e._end=se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Kc(t,e,"_first","_last",t._sort?"_start":0),Xa(e)||(t._recent=e),i||Qc(t,e),t._ts<0&&zs(t,t._tTime),t},Jc=function(t,e){return(Re.ScrollTrigger||po("scrollTrigger",e))&&Re.ScrollTrigger.create(e,t)},$c=function(t,e,n,i,r){if(vo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xc!==Pe.frame)return Wn.push(t),t._lazy=[r,i],1},s_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Xa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},a_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&s_(t)&&!(!t._initted&&Xa(t))||(t._ts<0||t._dp._ts<0)&&!Xa(t))?0:1,s=t._rDelay,l=0,c,u,h;if(s&&t._repeat&&(l=Vr(0,t._tDur,e),u=tr(l,s),t._yoyo&&u&1&&(a=1-a),u!==tr(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ue||i||t._zTime===Ot||!e&&t._zTime){if(!t._initted&&$c(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ot:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Wa(t,e,n,!0),t._onUpdate&&!n&&Ye(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ye(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&qn(t,1),!n&&!ue&&(Ye(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},o_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},er=function(t,e,n,i){var r=t._repeat,a=se(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:se(a*(r+1)+t._rDelay*r):a,s>0&&!i&&zs(t,t._tTime=t._tDur*s),t.parent&&Os(t),n||di(t.parent,t),t},jl=function(t){return t instanceof _e?di(t):er(t,t._dur)},l_={_start:0,endTime:Er,totalDuration:Er},Ne=function o(t,e,n){var i=t.labels,r=t._recent||l_,a=t.duration()>=Xe?r.endTime(!1):t._dur,s,l,c;return ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(he(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},Sr=function(t,e,n){var i=Cn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ve(l.vars.inherit)&&l.parent;a.immediateRender=ve(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Jt(e[0],a,e[r+1])},jn=function(t,e){return t||t===0?e(t):e},Vr=function(t,e,n){return n<t?t:n>e?e:n},ce=function(t,e){return!ne(t)||!(e=Qg.exec(t))?"":e[1]},c_=function(t,e,n){return jn(n,function(i){return Vr(t,e,i)})},qa=[].slice,tu=function(t,e){return t&&dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dn(t[0]))&&!t.nodeType&&t!==Ue},u_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ne(i)&&!e||tu(i,1)?(r=n).push.apply(r,qe(i)):n.push(i)})||n},qe=function(t,e,n){return Kt&&!e&&Kt.selector?Kt.selector(t):ne(t)&&!n&&(Ga||!nr())?qa.call((e||fo).querySelectorAll(t),0):he(t)?u_(t,n):tu(t)?qa.call(t,0):t?[t]:[]},Ya=function(t){return t=qe(t)[0]||Ms("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qe(e,n.querySelectorAll?n:n===t?Ms("Invalid scope")||fo.createElement("div"):t)}},eu=function(t){return t.sort(function(){return .5-Math.random()})},nu=function(t){if(Wt(t))return t;var e=dn(t)?t:{each:t},n=pi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,h=i;return ne(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=a[d],_,v,b,M,y,T,C,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Xe])[1],!w){for(C=-Xe;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,v=w===Xe?0:l?d*h/w-.5:i/w|0,C=0,x=Xe,T=0;T<d;T++)b=T%w-_,M=v-(T/w|0),p[T]=y=c?Math.abs(c==="y"?M:b):zc(b*b+M*M),y>C&&(C=y),y<x&&(x=y);i==="random"&&eu(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=ce(e.amount||e.each)||0,n=n&&d<0?uu(n):n}return d=(p[f]-p.min)/p.max||0,se(p.b+(n?n(d):d)*p.v)+p.u}},ja=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Cn(n)?0:ce(n))}},iu=function(t,e){var n=he(t),i,r;return!n&&dn(t)&&(i=n=t.radius||Xe,t.values?(t=qe(t.values),(r=!Cn(t[0]))&&(i*=i)):t=ja(t.increment)),jn(e,n?Wt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Xe,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-s,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,r||u===a||Cn(a)?u:u+ce(a)}:ja(t))},ru=function(t,e,n,i){return jn(he(t)?!e:n===!0?!!(n=0):!i,function(){return he(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},h_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},f_=function(t,e){return function(n){return t(parseFloat(n))+(e||ce(n))}},d_=function(t,e,n){return au(t,e,0,1,n)},su=function(t,e,n){return jn(n,function(i){return t[~~e(i)]})},p_=function o(t,e,n){var i=e-t;return he(t)?su(t,o(0,t.length),e):jn(n,function(r){return(i+(r-t)%i)%i+t})},m_=function o(t,e,n){var i=e-t,r=i*2;return he(t)?su(t,o(0,t.length-1),e):jn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Cr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Vc:Va),n+=t.substr(e,i-e)+ru(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},au=function(t,e,n,i,r){var a=e-t,s=i-n;return jn(r,function(l){return n+((l-t)/a*s||0)})},g_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ne(t),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(he(t)&&!he(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=xi(he(t)?[]:{},t));if(!u){for(l in e)xo.call(s,t,l,"get",e[l]);r=function(g){return bo(g,s)||(a?t.p:t)}}}return jn(n,r)},Zl=function(t,e,n){var i=t.labels,r=Xe,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Ye=function(t,e,n){var i=t.vars,r=i[e],a=Kt,s=t._ctx,l,c,u;if(!!r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Wn.length&&bs(),s&&(Kt=s),u=l?r.apply(c,l):r.call(c),Kt=a,u},xr=function(t){return qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ue),t.progress()<1&&Ye(t,"onInterrupt"),t},Gi,__=function(t){t=!t.name&&t.default||t;var e=t.name,n=Wt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Er,render:bo,add:xo,kill:I_,modifier:R_,rawVars:0},a={targetTest:0,get:0,getSetter:Mo,aliases:{},register:0};if(nr(),t!==i){if(Ee[e])return;Ze(i,Ze(Ss(t,r),a)),xi(i.prototype,xi(r,Ss(t,a))),Ee[i.prop=e]=i,t.targetTest&&(_s.push(i),mo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wc(e,i),t.register&&t.register(Ie,i,Me)},Ft=255,vr={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},ya=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ft+.5|0},ou=function(t,e,n){var i=t?Cn(t)?[t>>16,t>>8&Ft,t&Ft]:0:vr.black,r,a,s,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vr[t])i=vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ft,i&Ft,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ft,t&Ft]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Va),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ya(l+1/3,r,a),i[1]=ya(l,r,a),i[2]=ya(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Bc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Va)||vr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Ft,a=i[1]/Ft,s=i[2]/Ft,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lu=function(t){var e=[],n=[],i=-1;return t.split(Xn).forEach(function(r){var a=r.match(Vi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Kl=function(t,e,n){var i="",r=(t+i).match(Xn),a=e?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=ou(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lu(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Xn,"1").split(Vi),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Xn),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Xn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),x_=/hsl[a]?\(/,cu=function(t){var e=t.join(" "),n;if(Xn.lastIndex=0,Xn.test(e))return n=x_.test(e),t[1]=Kl(t[1],n),t[0]=Kl(t[0],n,lu(t[1])),!0},Pr,Pe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,m,g=function d(p){var _=o()-i,v=p===!0,b,M,y,T;if(_>t&&(n+=_-e),i+=_,y=i-n,b=y-a,(b>0||v)&&(T=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=b+(b>=r?4:r-b),M=1),v||(l=c(d)),M)for(m=0;m<s.length;m++)s[m](y,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Gc&&(!Ga&&Nc()&&(Ue=Ga=window,fo=Ue.document||{},Re.gsap=Ie,(Ue.gsapVersions||(Ue.gsapVersions=[])).push(Ie.version),Hc(ys||Ue.GreenSockGlobals||!Ue.gsap&&Ue||{}),u=Ue.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Pr=1,g(2))},sleep:function(){(u?Ue.cancelAnimationFrame:clearTimeout)(l),Pr=0,c=Er},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,v){var b=_?function(M,y,T,C){p(M,y,T,C),h.remove(b)}:p;return h.remove(p),s[v?"unshift":"push"](b),nr(),b},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),nr=function(){return!Pr&&Pe.wake()},At={},v_=/^[\d.\-M][\d.\-,\s]/,y_=/["']/g,M_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(y_,"").trim():+c,i=l.substr(s+1).trim();return e},b_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},S_=function(t){var e=(t+"").split("("),n=At[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[M_(e[1])]:b_(t).split(",").map(jc)):At._CE&&v_.test(t)?At._CE("",t):n},uu=function(t){return function(e){return 1-t(1-e)}},hu=function o(t,e){for(var n=t._first,i;n;)n instanceof _e?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},pi=function(t,e){return t&&(Wt(t)?t:At[t]||S_(t))||e},vi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return ye(t,function(s){At[s]=Re[s]=r,At[a=s.toLowerCase()]=n;for(var l in r)At[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=At[s+"."+l]=r[l]}),r},fu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ma=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/ka*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Kg((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:fu(s);return r=ka/r,l.config=function(c,u){return o(t,c,u)},l},ba=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:fu(n);return i.config=function(r){return o(t,r)},i};ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;vi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});At.Linear.easeNone=At.none=At.Linear.easeIn;vi("Elastic",Ma("in"),Ma("out"),Ma());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};vi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);vi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});vi("Circ",function(o){return-(zc(1-o*o)-1)});vi("Sine",function(o){return o===1?1:-Zg(o*Yg)+1});vi("Back",ba("in"),ba("out"),ba());At.SteppedEase=At.steps=Re.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Ot;return function(s){return((i*Vr(0,a,s)|0)+r)*n}}};$i.ease=At["quad.out"];ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return go+=o+","+o+"Params,"});var du=function(t,e){this.id=jg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qc,this.set=e?e.getSetter:Mo},ir=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,er(this,+e.duration,1,1),this.data=e.data,Kt&&(this._ctx=Kt,Kt.data.push(this)),Pr||Pe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(nr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zs(this,n),!r._dp||r.parent||Qc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?tr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ws(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(Vr(-this._delay,this._tDur,i),!0),Os(this),i_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ln(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ve(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ws(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=$g);var i=ue;return ue=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ue=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ne(this,n),ve(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ve(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ot)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Wt(n)?n:Zc,s=function(){var c=i.then;i.then=null,Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){xr(this)},o}();Ze(ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var _e=function(o){Oc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ve(n.sortChildren),Bt&&ln(n.parent||Bt,Sn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jc(Sn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Sr(0,arguments,this),this},e.from=function(i,r,a){return Sr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return Sr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,br(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Jt(i,r,Ne(this,a),1),this},e.call=function(i,r,a){return ln(this,Jt.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Jt(i,a,Ne(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,br(a).immediateRender=ve(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,br(s).immediateRender=ve(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:se(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,v,b,M,y,T,C;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,M=this._start,b=this._ts,_=!b,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=se(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),y=tr(this._tTime,p),!s&&this._tTime&&y!==d&&(y=d),T&&d&1&&(f=c-f,C=1),d!==y&&!this._lock){var x=T&&y&1,w=x===(T&&d&1);if(d<y&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:se(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ye(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=o_(this,se(s),se(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(Ye(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Ot);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||ue&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=L?-Ot:Ot);break}}m=g}}if(v&&!r&&(this.pause(),v.render(f>=s?0:-Ot)._zTime=f>=s?1:-1,this._ts))return this._start=M,Os(this),this.render(i,r,a);this._onUpdate&&!r&&Ye(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Ye(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Cn(r)||(r=Ne(this,r,i)),!(i instanceof ir)){if(he(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ne(i))return this.addLabel(i,r);if(Wt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?ln(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Xe);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Jt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ne(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(Fs(this,i),i===this._recent&&(this._recent=this._last),di(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=se(Pe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ne(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=Jt.delayedCall(0,r||Er,a);return s.data="isPause",this._hasPause=1,ln(this,s,Ne(this,i))},e.removePause=function(i){var r=this._first;for(i=Ne(this,i);r;)r._start===i&&r.data==="isPause"&&qn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)kn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=qe(i),l=this._first,c=Cn(r),u;l;)l instanceof Jt?t_(l._targets,s)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=Ne(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=Jt.to(a,Ze({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ot,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&er(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Ze({startAt:{time:Ne(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Zl(this,Ne(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Zl(this,Ne(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return di(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),di(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=Xe,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,ln(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;er(a,a===Bt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Bt._ts&&(Yc(Bt,ws(i,Bt)),Xc=Pe.frame),Pe.frame>=Xl){Xl+=De.autoSleep||120;var r=Bt._first;if((!r||!r._ts)&&De.autoSleep&&Pe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pe.sleep()}}},t}(ir);Ze(_e.prototype,{_lock:0,_hasPause:0,_forcing:0});var w_=function(t,e,n,i,r,a,s){var l=new Me(this._pt,t,e,0,1,vu,null,r),c=0,u=0,h,f,m,g,d,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Cr(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),f=n.match(xa)||[];h=xa.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Xi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(kc.test(i)||_)&&(l.e=0),this._pt=l,l},xo=function(t,e,n,i,r,a,s,l,c,u){Wt(i)&&(i=i(r||0,t,a));var h=t[e],f=n!=="get"?n:Wt(h)?c?t[e.indexOf("set")||!Wt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Wt(h)?c?P_:_u:yo,g;if(ne(i)&&(~i.indexOf("random(")&&(i=Cr(i)),i.charAt(1)==="="&&(g=Xi(f,i)+(ce(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Za)return!isNaN(f*i)&&i!==""?(g=new Me(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?D_:xu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&po(e,i),w_.call(this,t,e,f,i,m,l||De.stringFilter,c))},A_=function(t,e,n,i,r){if(Wt(t)&&(t=wr(t,r,e,n,i)),!dn(t)||t.style&&t.nodeType||he(t)||Uc(t))return ne(t)?wr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=wr(t[s],r,e,n,i);return a},pu=function(t,e,n,i,r,a){var s,l,c,u;if(Ee[t]&&(s=new Ee[t]).init(r,s.rawVars?e[t]:A_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Me(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Gi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},kn,Za,vo=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,v=t._targets,b=t.parent,M=b&&b.data==="nested"?b.vars.targets:v,y=t._overwrite==="auto"&&!uo,T=t.timeline,C,x,w,L,G,J,N,R,B,Y,j,k,F;if(T&&(!g||!r)&&(r="none"),t._ease=pi(r,$i.ease),t._yEase=m?uu(pi(m===!0?r:m,$i.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(R=v[0]?fi(v[0]).harness:0,k=R&&i[R.prop],C=Ss(i,mo),_&&(_._zTime<0&&_.progress(1),e<0&&f&&s&&!d?_.render(-1,!0):_.revert(f&&p?gs:Jg),_._lazy=0),a){if(qn(t._startAt=Jt.set(v,Ze({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!_&&ve(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue||!s&&!d)&&t._startAt.revert(gs),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!_){if(e&&(s=!1),w=Ze({overwrite:!1,data:"isFromStart",lazy:s&&!_&&ve(l),immediateRender:s,stagger:0,parent:b},C),k&&(w[R.prop]=k),qn(t._startAt=Jt.set(v,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue?t._startAt.revert(gs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Ot,Ot);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ve(l)||l&&!p,x=0;x<v.length;x++){if(G=v[x],N=G._gsap||_o(v)[x]._gsap,t._ptLookup[x]=Y={},Ha[N.id]&&Wn.length&&bs(),j=M===v?x:M.indexOf(G),R&&(B=new R).init(G,k||C,t,j,M)!==!1&&(t._pt=L=new Me(t._pt,G,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(U){Y[U]=L}),B.priority&&(J=1)),!R||k)for(w in C)Ee[w]&&(B=pu(w,C,t,j,G,M))?B.priority&&(J=1):Y[w]=L=xo.call(t,G,w,"get",C[w],j,M,0,i.stringFilter);t._op&&t._op[x]&&t.kill(G,t._op[x]),y&&t._pt&&(kn=t,Bt.killTweensOf(G,Y,t.globalTime(e)),F=!t.parent,kn=0),t._pt&&l&&(Ha[N.id]=1)}J&&yu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,g&&e<=0&&T.render(Xe,!0,!0)},T_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Za=1,t.vars[e]="+=0",vo(t,s),Za=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Yt(n)+ce(u.e)),u.b&&(u.b=c.s+ce(u.b))},E_=function(t,e){var n=t[0]?fi(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=xi({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},C_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(he(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},wr=function(t,e,n,i,r){return Wt(t)?t.call(e,n,i,r):ne(t)&&~t.indexOf("random(")?Cr(t):t},mu=go+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gu={};ye(mu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return gu[o]=1});var Jt=function(o){Oc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:br(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Bt,b=(he(n)||Uc(n)?Cn(n[0]):"length"in i)?[n]:qe(n),M,y,T,C,x,w,L,G;if(s._targets=b.length?_o(b):Ms("GSAP target "+n+" not found. https://greensock.com",!De.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||fs(c)||fs(u)){if(i=s.vars,M=s.timeline=new _e({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:b}),M.kill(),M.parent=M._dp=Sn(s),M._start=0,f||fs(c)||fs(u)){if(C=b.length,L=f&&nu(f),dn(f))for(x in f)~mu.indexOf(x)&&(G||(G={}),G[x]=f[x]);for(y=0;y<C;y++)T=Ss(i,gu),T.stagger=0,_&&(T.yoyoEase=_),G&&xi(T,G),w=b[y],T.duration=+wr(c,Sn(s),y,w,b),T.delay=(+wr(u,Sn(s),y,w,b)||0)-s._delay,!f&&C===1&&T.delay&&(s._delay=u=T.delay,s._start+=u,T.delay=0),M.to(w,T,L?L(y,w,b):0),M._ease=At.none;M.duration()?c=u=0:s.timeline=0}else if(g){br(Ze(M.vars.defaults,{ease:"none"})),M._ease=pi(g.ease||i.ease||"none");var J=0,N,R,B;if(he(g))g.forEach(function(Y){return M.to(b,Y,">")}),M.duration();else{T={};for(x in g)x==="ease"||x==="easeEach"||C_(x,g[x],T,g.easeEach);for(x in T)for(N=T[x].sort(function(Y,j){return Y.t-j.t}),J=0,y=0;y<N.length;y++)R=N[y],B={ease:R.e,duration:(R.t-(y?N[y-1].t:0))/100*c},B[x]=R.v,M.to(b,B,J),J+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return m===!0&&!uo&&(kn=Sn(s),Bt.killTweensOf(b),kn=0),ln(v,Sn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===se(v._time)&&ve(h)&&r_(Sn(s))&&v.data!=="nested")&&(s._tTime=-Ot,s.render(Math.max(0,-u)||0)),p&&Jc(Sn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ot&&!u?l:i<Ot?0:i,f,m,g,d,p,_,v,b,M;if(!c)a_(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,b=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=se(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,f=c-f),p=tr(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(b&&this._yEase&&hu(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(se(d*g),!0).invalidate()._lock=0))}if(!this._initted){if($c(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!s&&!r&&(Ye(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;b&&b.render(i<0?i:!f&&_?-Ot:b._dur*b._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Wa(this,i,r,a),Ye(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ye(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Wa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qn(this,1),!r&&!(u&&!s)&&(h||s||_)&&(Ye(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Pr||Pe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vo(this,l),c=this._ease(l/this._dur),T_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(zs(this,0),this.parent||Kc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||xr(this),this.parent&&a!==this.timeline.totalDuration()&&er(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?qe(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&n_(s,l))return r==="all"&&(this._pt=0),xr(this);for(h=this._op=this._op||[],r!=="all"&&(ne(r)&&(d={},ye(r,function(v){return d[v]=1}),r=d),r=E_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Fs(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&xr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Sr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return Sr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Bt.killTweensOf(i,r,a)},t}(ir);Ze(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ye("staggerTo,staggerFrom,staggerFromTo",function(o){Jt[o]=function(){var t=new _e,e=qa.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var yo=function(t,e,n){return t[e]=n},_u=function(t,e,n){return t[e](n)},P_=function(t,e,n,i){return t[e](i.fp,n)},L_=function(t,e,n){return t.setAttribute(e,n)},Mo=function(t,e){return Wt(t[e])?_u:ho(t[e])&&t.setAttribute?L_:yo},xu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},D_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},vu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},bo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},R_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},I_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Fs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},F_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},yu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Me=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||xu,this.d=l||this,this.set=c||yo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=F_,this.m=n,this.mt=r,this.tween=i},o}();ye(go+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return mo[o]=1});Re.TweenMax=Re.TweenLite=Jt;Re.TimelineLite=Re.TimelineMax=_e;Bt=new _e({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});De.stringFilter=cu;var rr=[],xs={},O_=[],Ql=0,Sa=function(t){return(xs[t]||O_).map(function(e){return e()})},Ka=function(){var t=Date.now(),e=[];t-Ql>2&&(Sa("matchMediaInit"),rr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Ue.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Sa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Ql=t,Sa("matchMedia"))},Mu=function(){function o(e,n){this.selector=n&&Ya(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var a=this,s=function(){var c=Kt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Ya(r)),Kt=a,h=i.apply(a,arguments),Wt(h)&&a._r.push(h),Kt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===Wt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Kt;Kt=null,n(this),Kt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ir)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=rr.indexOf(this);~s&&rr.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),z_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){dn(n)||(n={matches:n});var a=new Mu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ue.matchMedia(n[c]),l&&(rr.indexOf(a)<0&&rr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ka):l.addEventListener("change",Ka)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),As={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return __(i)})},timeline:function(t){return new _e(t)},getTweensOf:function(t,e){return Bt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ne(t)&&(t=qe(t)[0]);var r=fi(t||{}).get,a=n?Zc:jc;return n==="native"&&(n=""),t&&(e?a((Ee[e]&&Ee[e].get||r)(t,e,n,i)):function(s,l,c){return a((Ee[s]&&Ee[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=qe(t),t.length>1){var i=t.map(function(u){return Ie.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Ee[e],s=fi(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Gi._pt=0,h.init(t,n?u+n:u,Gi,0,[t]),h.render(1,h),Gi._pt&&bo(1,Gi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Ie.to(t,xi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Bt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pi(t.ease,$i.ease)),ql($i,t||{})},config:function(t){return ql(De,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ee[s]&&!Re[s]&&Ms(e+" effect requires "+s+" plugin.")}),va[e]=function(s,l,c){return n(qe(s),Ze(l||{},r),c)},a&&(_e.prototype[e]=function(s,l,c){return this.add(va[e](s,dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){At[t]=pi(e)},parseEase:function(t,e){return arguments.length?pi(t,e):At},getById:function(t){return Bt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _e(t),i,r;for(n.smoothChildTiming=ve(t.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&ln(n,i,i._start-i._delay),i=r;return ln(Bt,n,0),n},context:function(t,e){return t?new Mu(t,e):Kt},matchMedia:function(t){return new z_(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ka()},addEventListener:function(t,e){var n=xs[t]||(xs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=xs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:p_,wrapYoyo:m_,distribute:nu,random:ru,snap:iu,normalize:d_,getUnit:ce,clamp:c_,splitColor:ou,toArray:qe,selector:Ya,mapRange:au,pipe:h_,unitize:f_,interpolate:g_,shuffle:eu},install:Hc,effects:va,ticker:Pe,updateRoot:_e.updateRoot,plugins:Ee,globalTimeline:Bt,core:{PropTween:Me,globals:Wc,Tween:Jt,Timeline:_e,Animation:ir,getCache:fi,_removeLinkedListItem:Fs,reverting:function(){return ue},context:function(t){return t&&Kt&&(Kt.data.push(t),t._ctx=Kt),Kt},suppressOverwrites:function(t){return uo=t}}};ye("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return As[o]=Jt[o]});Pe.add(_e.updateRoot);Gi=As.to({},{duration:0});var N_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},U_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=N_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},wa=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ne(r)&&(l={},ye(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}U_(s,r)}}}},Ie=As.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wa("roundProps",ja),wa("modifiers"),wa("snap",iu))||As;Jt.version=_e.version=Ie.version="3.11.4";Gc=1;Nc()&&nr();At.Power0;At.Power1;At.Power2;At.Power3;At.Power4;At.Linear;At.Quad;At.Cubic;At.Quart;At.Quint;At.Strong;At.Elastic;At.Back;At.SteppedEase;At.Bounce;At.Sine;At.Expo;At.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jl,Vn,qi,So,ci,$l,wo,B_=function(){return typeof window<"u"},Pn={},ri=180/Math.PI,Yi=Math.PI/180,Ni=Math.atan2,tc=1e8,Ao=/([A-Z])/g,k_=/(left|right|width|margin|padding|x)/i,V_=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qa=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},G_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},H_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},W_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Su=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},X_=function(t,e,n){return t.style[e]=n},q_=function(t,e,n){return t.style.setProperty(e,n)},Y_=function(t,e,n){return t._gsap[e]=n},j_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Z_=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},K_=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},kt="transform",nn=kt+"Origin",Q_=function(t,e){var n=this,i=this.target,r=i.style;if(t in Pn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=wn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:wn(i,t)),this.props.indexOf(kt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=kt}(r||e)&&this.props.push(t,e,r[t])},wu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},J_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(Ao,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=wo(),r&&!r.isStart&&!n[kt]&&(wu(n),i.uncache=1)}},Au=function(t,e){var n={target:t,props:[],revert:J_,save:Q_};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Tu,Ja=function(t,e){var n=Vn.createElementNS?Vn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vn.createElement(t);return n.style?n:Vn.createElement(t)},hn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ao,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,sr(e)||e,1)||""},ec="O,Moz,ms,Ms,Webkit".split(","),sr=function(t,e,n){var i=e||ci,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ec[a]+t in r););return a<0?null:(a===3?"ms":a>=0?ec[a]:"")+t},$a=function(){B_()&&window.document&&(Jl=window,Vn=Jl.document,qi=Vn.documentElement,ci=Ja("div")||{style:{}},Ja("div"),kt=sr(kt),nn=kt+"Origin",ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tu=!!sr("perspective"),wo=Ie.core.reverting,So=1)},Aa=function o(t){var e=Ja("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(qi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qi.removeChild(e),this.style.cssText=r,a},nc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Eu=function(t){var e;try{e=t.getBBox()}catch{e=Aa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Aa||(e=Aa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+nc(t,["x","cx","x1"])||0,y:+nc(t,["y","cy","y1"])||0,width:0,height:0}:e},Cu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Eu(t))},Lr=function(t,e){if(e){var n=t.style;e in Pn&&e!==nn&&(e=kt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ao,"-$1").toLowerCase())):n.removeAttribute(e)}},Gn=function(t,e,n,i,r,a){var s=new Me(t._pt,e,n,0,1,a?Su:bu);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},ic={deg:1,rad:1,turn:1},$_={grid:1,flex:1},Yn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ci.style,l=k_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!r||ic[i]||ic[a]?r:(a!=="px"&&!f&&(r=o(t,e,n,"px")),_=t.getCTM&&Cu(t),(m||a==="%")&&(Pn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],Yt(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?a:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Vn||!d.appendChild)&&(d=Vn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Pe.time&&!p.uncache?Yt(r/p.width*h):((m||a==="%")&&!$_[hn(d,"display")]&&(s.position=hn(t,"position")),d===t&&(s.position="static"),d.appendChild(ci),g=ci[u],d.removeChild(ci),s.position="absolute",l&&m&&(p=fi(d),p.time=Pe.time,p.width=d[u]),Yt(f?g*r/h:g&&r?h/g*r:0))))},wn=function(t,e,n,i){var r;return So||$a(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pn[e]&&e!=="transform"?(r=Rr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Es(hn(t,nn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ts[e]&&Ts[e](t,e,n)||hn(t,e)||qc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Yn(t,e,r,n)+n:r},t0=function(t,e,n,i){if(!n||n==="none"){var r=sr(e,t,1),a=r&&hn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=hn(t,"borderTopColor"))}var s=new Me(this._pt,t.style,e,0,1,vu),l=0,c=0,u,h,f,m,g,d,p,_,v,b,M,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=hn(t,e)||i,t.style[e]=n),u=[n,i],cu(u),n=u[0],i=u[1],f=n.match(Vi)||[],y=i.match(Vi)||[],y.length){for(;h=Vi.exec(i);)p=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=Xi(m,p)+M),_=parseFloat(p),b=p.substr((_+"").length),l=Vi.lastIndex-b.length,b||(b=b||De.units[e]||M,l===i.length&&(i+=b,s.e+=b)),M!==b&&(m=Yn(t,e,d,b)||0),s._pt={_next:s._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?Su:bu;return kc.test(i)&&(s.e=0),this._pt=s,s},rc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=rc[n]||n,e[1]=rc[i]||i,e.join(" ")},n0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Pn[s]&&(l=1,s=s==="transformOrigin"?nn:kt),Lr(n,s);l&&(Lr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),Rr(n,1),a.uncache=1,wu(i)))}},Ts={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Me(t._pt,e,n,0,0,n0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Dr=[1,0,0,1,0,0],Pu={},Lu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sc=function(t){var e=hn(t,kt);return Lu(e)?Dr:e.substr(7).match(Bc).map(Yt)},To=function(t,e){var n=t._gsap||fi(t),i=t.style,r=sc(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Dr:r):(r===Dr&&!t.offsetParent&&t!==qi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,qi.appendChild(t)),r=sc(t),l?i.display=l:Lr(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):qi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},to=function(t,e,n,i,r,a){var s=t._gsap,l=r||To(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],v=l[5],b=e.split(" "),M=parseFloat(b[0])||0,y=parseFloat(b[1])||0,T,C,x,w;n?l!==Dr&&(C=m*p-g*d)&&(x=M*(p/C)+y*(-d/C)+(d*v-p*_)/C,w=M*(-g/C)+y*(m/C)-(m*v-g*_)/C,M=x,y=w):(T=Eu(t),M=T.x+(~b[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(b[1]||b[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&s.smooth?(_=M-c,v=y-u,s.xOffset=h+(_*m+v*d)-_,s.yOffset=f+(_*g+v*p)-v):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=y,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[nn]="0px 0px",a&&(Gn(a,s,"xOrigin",c,M),Gn(a,s,"yOrigin",u,y),Gn(a,s,"xOffset",h,s.xOffset),Gn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},Rr=function(t,e){var n=t._gsap||new du(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=hn(t,nn)||"0",u,h,f,m,g,d,p,_,v,b,M,y,T,C,x,w,L,G,J,N,R,B,Y,j,k,F,U,$,K,Q,rt,pt;return u=h=f=d=p=_=v=b=M=0,m=g=1,n.svg=!!(t.getCTM&&Cu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),C=To(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),to(t,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,T=n.yOrigin||0,C!==Dr&&(G=C[0],J=C[1],N=C[2],R=C[3],u=B=C[4],h=Y=C[5],C.length===6?(m=Math.sqrt(G*G+J*J),g=Math.sqrt(R*R+N*N),d=G||J?Ni(J,G)*ri:0,v=N||R?Ni(N,R)*ri+d:0,v&&(g*=Math.abs(Math.cos(v*Yi))),n.svg&&(u-=y-(y*G+T*N),h-=T-(y*J+T*R))):(pt=C[6],Q=C[7],U=C[8],$=C[9],K=C[10],rt=C[11],u=C[12],h=C[13],f=C[14],x=Ni(pt,K),p=x*ri,x&&(w=Math.cos(-x),L=Math.sin(-x),j=B*w+U*L,k=Y*w+$*L,F=pt*w+K*L,U=B*-L+U*w,$=Y*-L+$*w,K=pt*-L+K*w,rt=Q*-L+rt*w,B=j,Y=k,pt=F),x=Ni(-N,K),_=x*ri,x&&(w=Math.cos(-x),L=Math.sin(-x),j=G*w-U*L,k=J*w-$*L,F=N*w-K*L,rt=R*L+rt*w,G=j,J=k,N=F),x=Ni(J,G),d=x*ri,x&&(w=Math.cos(x),L=Math.sin(x),j=G*w+J*L,k=B*w+Y*L,J=J*w-G*L,Y=Y*w-B*L,G=j,B=k),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=Yt(Math.sqrt(G*G+J*J+N*N)),g=Yt(Math.sqrt(Y*Y+pt*pt)),x=Ni(B,Y),v=Math.abs(x)>2e-4?x*ri:0,M=rt?1/(rt<0?-rt:rt):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lu(hn(t,kt)),j&&t.setAttribute("transform",j))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Yt(m),n.scaleY=Yt(g),n.rotation=Yt(d)+s,n.rotationX=Yt(p)+s,n.rotationY=Yt(_)+s,n.skewX=v+s,n.skewY=b+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[nn]=Es(c)),n.xOffset=n.yOffset=0,n.force3D=De.force3D,n.renderTransform=n.svg?r0:Tu?Du:i0,n.uncache=0,n},Es=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ta=function(t,e,n){var i=ce(e);return Yt(parseFloat(e)+parseFloat(Yn(t,"x",n+"px",i)))+i},i0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Du(t,e)},ti="0deg",pr="0px",ei=") ",Du=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,b=n.zOrigin,M="",y=_==="auto"&&t&&t!==1||_===!0;if(b&&(h!==ti||u!==ti)){var T=parseFloat(u)*Yi,C=Math.sin(T),x=Math.cos(T),w;T=parseFloat(h)*Yi,w=Math.cos(T),a=Ta(v,a,C*w*-b),s=Ta(v,s,-Math.sin(T)*-b),l=Ta(v,l,x*w*-b+b)}p!==pr&&(M+="perspective("+p+ei),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==pr||s!==pr||l!==pr)&&(M+=l!==pr||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ei),c!==ti&&(M+="rotate("+c+ei),u!==ti&&(M+="rotateY("+u+ei),h!==ti&&(M+="rotateX("+h+ei),(f!==ti||m!==ti)&&(M+="skew("+f+", "+m+ei),(g!==1||d!==1)&&(M+="scale("+g+", "+d+ei),v.style[kt]=M||"translate(0, 0)"},r0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,b=parseFloat(a),M=parseFloat(s),y,T,C,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Yi,c*=Yi,y=Math.cos(l)*h,T=Math.sin(l)*h,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Yi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),y*=w,T*=w)),y=Yt(y),T=Yt(T),C=Yt(C),x=Yt(x)):(y=h,x=f,T=C=0),(b&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(b=Yn(m,"x",a,"px"),M=Yn(m,"y",s,"px")),(g||d||p||_)&&(b=Yt(b+g-(g*y+d*C)+p),M=Yt(M+d-(g*T+d*x)+_)),(i||r)&&(w=m.getBBox(),b=Yt(b+i/100*w.width),M=Yt(M+r/100*w.height)),w="matrix("+y+","+T+","+C+","+x+","+b+","+M+")",m.setAttribute("transform",w),v&&(m.style[kt]=w)},s0=function(t,e,n,i,r){var a=360,s=ne(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ri:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*tc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*tc)%a-~~(c/a)*a)),t._pt=f=new Me(t._pt,e,n,i,c,G_),f.e=u,f.u="deg",t._props.push(n),f},ac=function(t,e){for(var n in e)t[n]=e[n];return t},a0=function(t,e,n){var i=ac({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=e,s=Rr(n,1),Lr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=e,s=Rr(n,1),a[kt]=c);for(l in Pn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=ce(c),g=ce(u),h=m!==g?Yn(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Me(t._pt,s,l,h,f-h,Qa),t._pt.u=g||0,t._props.push(l));ac(s,i)};ye("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});Ts[t>1?"border"+o:o]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return wn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var Ru={name:"css",register:$a,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,v,b,M,y,T,C,x;So||$a(),this.styles=this.styles||Au(t),x=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Ee[d]&&pu(d,e,n,i,t,r)))){if(m=typeof u,g=Ts[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Cr(u)),g)g(this,t,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Xn.lastIndex=0,Xn.test(c)||(p=ce(c),_=ce(u)),_?p!==_&&(c=Yn(t,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,t,r):l[d],ne(c)&&~c.indexOf("random(")&&(c=Cr(c)),ce(c+"")||(c+=De.units[d]||ce(wn(t,d))||""),(c+"").charAt(1)==="="&&(c=wn(t,d))):c=wn(t,d),f=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),d in Tn&&(d==="autoAlpha"&&(f===1&&wn(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),Gn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Tn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),b=d in Pn,b){if(this.styles.save(d),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||Rr(t,e.parseTransform),T=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new Me(this._pt,s,kt,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new Me(this._pt,y,"scaleY",y.scaleY,(v?Xi(y.scaleY,v+h):h)-y.scaleY||0,Qa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(nn,0,s[nn]),u=e0(u),y.svg?to(t,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Gn(this,y,"zOrigin",y.zOrigin,_),Gn(this,s,d,Es(c),Es(u)));continue}else if(d==="svgOrigin"){to(t,u,1,T,0,this);continue}else if(d in Pu){s0(this,y,d,f,v?Xi(f,v+u):u);continue}else if(d==="smoothOrigin"){Gn(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){a0(this,u,t);continue}}else d in s||(d=sr(d)||d);if(b||(h||h===0)&&(f||f===0)&&!V_.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=ce(u)||(d in De.units?De.units[d]:p),p!==_&&(f=Yn(t,d,c,_)),this._pt=new Me(this._pt,b?y:s,d,f,(v?Xi(f,v+h):h)-f,!b&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?W_:Qa),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=H_);else if(d in s)t0.call(this,t,d,c,v?v+u:u);else if(d in t)this.add(t,d,c||t[d],v?v+u:u,i,r);else if(d!=="parseTransform"){po(d,u);continue}b||(d in s?x.push(d,0,s[d]):x.push(d,1,c||t[d])),a.push(d)}}C&&yu(this)},render:function(t,e){if(e.tween._time||!wo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:wn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Pn&&e!==nn&&(t._gsap.x||wn(t,"x"))?n&&$l===n?e==="scale"?j_:Y_:($l=n||{})&&(e==="scale"?Z_:K_):t.style&&!ho(t.style[e])?X_:~e.indexOf("-")?q_:Mo(t,e)},core:{_removeProperty:Lr,_getMatrix:To}};Ie.utils.checkPrefix=sr;Ie.core.getStyleSaver=Au;(function(o,t,e,n){var i=ye(o+","+t+","+e,function(r){Pn[r]=1});ye(t,function(r){De.units[r]="deg",Pu[r]=1}),Tn[i[13]]=o+","+t,ye(n,function(r){var a=r.split(":");Tn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){De.units[o]="px"});Ie.registerPlugin(Ru);var ar=Ie.registerPlugin(Ru)||Ie;ar.core.Tween;const Iu="varying vec2 vectorUV;varying vec3 vertexNormal;void main(){vectorUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);}",Fu="uniform sampler2D globeTexture;varying vec2 vectorUV;varying vec3 vertexNormal;void main(){float intensity=0.09-dot(vertexNormal,vec3(1,0.1,0.1));vec3 atmosphere=vec3(1,0.4,0)*pow(intensity,1.1);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vectorUV).xyz,1.0);}",o0="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1);}",l0="varying vec3 vertexNormal;void main(){float intensity=pow(0.8-dot(vertexNormal,vec3(0,0,1)),2.2);gl_FragColor=vec4(1,0.5,0.5,0.5)*intensity;}",Ea=document.getElementById("time-left"),oc=document.getElementById("leave"),c0=new Date("05/07/2023"),u0=new Date("05/16/2023"),Cs=1e3,yr=Cs*60,Mr=yr*60,Ui=Mr*24;let eo;function h0(){const o=new Date,t=u0-o,e=c0-o;if(t<=0){Ea.innerHTML="Ready?",clearInterval(eo);return}if(t<=Ui){Ea.innerHTML="Sending?",clearInterval(eo);return}if(e<=Ui){oc.innerHTML="Waiting for Profile.?",clearInterval(t);return}const n=Math.floor(t/Ui),i=Math.floor(t%Ui/Mr),r=Math.floor(t%Mr/yr),a=Math.floor(t%yr/Cs),s=Math.floor(e/Ui),l=Math.floor(e%Ui/Mr),c=Math.floor(e%Mr/yr),u=Math.floor(e%yr/Cs);Ea.innerHTML=`${n}: Day  H: ${i} M:${r} S:${a}`,oc.innerHTML=`${s}D: H: ${l} M:${c} S:${u}: Leaving soon World V1`}eo=setInterval(h0,Cs);const ds=document.getElementById("audio"),no=document.getElementById("play");let Ca=0;const f0=()=>{Ca===0?(Ca=1,ds.loop=!0,ds.play(),no.innerHTML="Sound On"):(Ca=0,ds.loop=!1,ds.pause(),no.innerHTML="Sound OFF")};no.addEventListener("click",f0);const Ir=new Vg,Fr=document.getElementById("container"),io=document.querySelector("#popup"),d0=document.querySelector("#population"),p0=document.querySelector("#populationValue"),m0=document.querySelector("#loc"),g0=document.querySelector("#info"),_0=document.querySelector("#flag"),lc=document.createElement("img"),x0=document.getElementById("capital"),vs=new Ve(75,Fr.offsetWidth/Fr.offsetHeight,.1,1e3),Ps=new Dc({antialias:!0,canvas:document.querySelector("canvas")});Ps.setSize(Fr.offsetWidth,Fr.offsetHeight);Ps.setPixelRatio(window.devicePixelRatio);const Ou=new We(new kr(5,50,50),new fn({vertexShader:Iu,fragmentShader:Fu,uniforms:{globeTexture:{value:new Fc().load("./img/world.jpeg")}}})),v0=new Fc().load("./img/moon.jpeg"),Eo=new We(new kr(1,50,50),new fn({vertexShader:Iu,fragmentShader:Fu,uniforms:{globeTexture:{value:v0}}})),zu=new We(new kr(5,50,50),new fn({vertexShader:o0,fragmentShader:l0,blending:Pa,side:Le}));zu.scale.set(1.1,1.1,1.1);Ir.add(zu);const Ge=new _r;Ge.add(Ou);Ge.add(Eo);Ir.add(Ge);const Nu=new pn,y0=new Rc({color:16777215}),Uu=[];for(let o=0;o<1e4;o++){const t=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3,n=-Math.random()*2e3;Uu.push(t,e,n)}Nu.setAttribute("position",new en(Uu,3));const M0=new Gg(Nu,y0);Ir.add(M0);Eo.position.x=29;function P({lat:o,lng:t,countries:e,populations:n,flags:i,where:r,infos:a,capital:s}){const l=new We(new lr(.13,.13,.8),new oo({color:"#4e9160",opacity:.5,transparent:!0})),c=o/180*Math.PI,u=t/180*Math.PI,h=5,f=h*Math.cos(c)*Math.sin(u),m=h*Math.sin(c),g=h*Math.cos(c)*Math.cos(u);l.position.x=f,l.position.y=m,l.position.z=g,l.lookAt(0,0,0),l.geometry.applyMatrix4(new $t().makeTranslation(0,0,-.4)),Ge.add(l),ar.to(l.scale,{z:.5,duration:1,yoyo:!0,repeat:-1,ease:"linear",delay:Math.random()}),l.countries=e,l.populations=n,l.flags=i,l.where=r,l.infos=a,l.capital=s}P({lat:23.6345,lng:-102.5528,countries:"Mexico",populations:"127.6 million",where:"North America",flags:"https://cdn.countryflags.com/thumbs/mexico/flag-800.png",infos:"Mexico, officially the United Mexican States, is a country in the southern portion of North America.",capital:"Mexico City"});P({lat:-14.235,lng:-51.9253,countries:"Brazil",populations:"211 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/brazil/flag-800.png",infos:"Brazil, officially the Federative Republic of Brazil.",capital:"Bras\xEDlia"});P({lat:20.5937,lng:78.9629,countries:"India",populations:"1.366 billion",where:"South Asia",flags:"https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",infos:"India, officially the Republic of India, is a country in South Asia.",capital:"New Delhi"});P({lat:35.8617,lng:104.1954,countries:"China",populations:"1.398 billion",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/china/flag-800.png",infos:"China, officially the People's Republic of China, is a country in East Asia.",capital:"Beijing"});P({lat:36.0902,lng:-95.7129,countries:"USA",populations:" 328.2 million",where:"North America",flags:"https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",infos:"The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii.",capital:"Washington, D.C."});P({lat:42.546245,lng:1.601554,countries:"Andorra",populations:"79,034",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/andorra/flag-800.png",infos:"Andorra is a tiny, independent principality situated between France and Spain in the Pyrenees mountains.",capital:"Andorra la Vella"});P({lat:23.424076,lng:53.847818,countries:"United Arab Emirates",populations:"9.365 million",where:"Middle East",flags:"https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png",infos:"The United Arab Emirates, or simply the Emirates, is a country in Western Asia.",capital:"Abu Dhabi"});P({lat:33.93911,lng:67.709953,countries:"Afghanistan",populations:"40.1 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/afghanistan/flag-800.png",infos:"Afghanistan, officially the Islamic Emirate of Afghanistan is a landlocked.",capital:"Kabul"});P({lat:17.060816,lng:-61.796428,countries:"Antigua and Barbuda",populations:" 93,219",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/antigua-and-barbuda/flag-800.png",infos:"Antigua and Barbuda is an independent Commonwealth country comprising its 2 namesake islands and several smaller ones.",capital:"Saint John's"});P({lat:51.165691,lng:10.451526,countries:"Germany",populations:" 83.2 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/germany/flag-800.png",infos:"Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.",capital:"Berlin"});P({lat:18.220554,lng:-63.068615,countries:"Anguilla",populations:" 15,094",where:"British Overseas Territories",flags:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",infos:"Anguilla, a British Overseas Territory in the Eastern Caribbean.",capital:"The Valley"});P({lat:41.153332,lng:20.168331,countries:"Albania",populations:" 2.812 million",where:"updating",flags:"https://cdn.countryflags.com/thumbs/albania/flag-800.png",infos:"Albania, on Southeastern Europe\u2019s Balkan Peninsula.",capital:"Tirana"});P({lat:40.069099,lng:45.038189,countries:"Armenia",populations:"2.791 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/armenia/flag-800.png",infos:"Armenia is a nation, and former Soviet republic.",capital:"Yerevan"});P({lat:12.226079,lng:-69.060087,countries:"Netherlands Antilles",populations:" 26,845",where:"",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HRAAAAkFBMVEX///8BKofcFx0AKocAKIYABX///f7ZAADiFQUAKosAI4UAJoYAAH4AG4IAGYIAEYAAFYHgAAAAAHkACn8AH4TX3OmutdGwsMvBxtvz9PiMk7wkMooeL4kpQJEfOY48T5iFirZmdKni5O5hZqC/vtTQ0d8zRpOlqchBSZSTmsBFVJlTWp11f7GXosXr7fW2vNVfxCvvAAADtElEQVR4nO2ZiXKbMBCGRbVxW4mrHDZg8IEPakLM+79dhR0nTtMkYG827sx+zDDOgrR/fstihYTAYfT9Wz++j5AyYsHK6WHl9LByelg5PaycHlZODyunh5XTw8rpYeX0sHJ6WDk9rJweVk4PK6eHldPDyulh5fSwcnr+X+Xi149+/ELLeIdD+LMvIVJGAUjIE0o/fz6h9fNnrIRCWj2OATfpYnz39yVnsYyG9/TBISxUpPSy0gH5Mua2Y1vKt9pcCK7nrm3byWgV2KE+hcGzbU+MAnOWN+u5VIv1ZJ2KzWQy2epjDKyqnbRCtJN15SLmQvYc/OQ4YaUr5xRU8/gYi3+rm/XcsrS760SWtf80qqVjHf6dREWoqZDHuQVBalQu7PMLzr2Jje6jYT0Re25FtShbsbHPQtJ8D0ksMh83E7Ln0msTuMtK8/t8CoOOHwI/iYOb9hymja/AblbqLDhrQqmdHWoiC91zUN2TJ9LnYdmNcIiG9UTtuXV8Ukr5UQyBqz0H3eOm1z1p3eOmT/UcZjN9UbPikmbnXOm5dBYP3gWee7vMeafXz/a8K7X9Ng266nxgs2Df+gOb/c0VnkuYTfNpKuaQF3qA51DkuhapaTuDN3r+ZM+lXsSxKafKuKxc6N0MnKqM96YCi+NMXWH6NeMcouxYBo7zIZ7rfHxstlMwJB2e58Y+e9kVWFUwbJ7QQTYyNVhj9/+i/sF1c0vUlYGicfs7dTg5y0MNHw1Nh+d5VwbuMpEEw4arDBKxqMSDe9Vj9SrPQW8aL1zuQxjkOUTlKvSyjYYv8xzy2iyLvfl24DjfzlzT7D7/wnEOh6Wlgv5OHU76UOu8NbN8Ta3Y8a/Ri10oWujrUHOY7+H1JQUX9ETsOVjN6xWn21xUUb4LuufOMg5fXbI3jXvTnkutlL1Oa0edr0OVcup0bSulUUc7pudSbrdFXYpsVsynp4kDpvNithNlXWy33T236blapY/7Ce3TXA1W+xhLl+rd1gPBHef+78NLxNHOe15mam+RPr2yu1XPjevHt3MvChlprzrlQYQ7qSPPLXpqHBfjF+8VpV2ZmCjUoJ6oPQ8rU7xu9tb57K2tfRs2oyrETYXrOUzHta/0eHleekfLB0f5q+RQGiJ6jrVV9rjz5plnP3j5i+055Zs/IzdH3ptD2p38gv1QLOj3oJH4f/f9WTk9rJweVk4PK6eHldPDyulh5fSwcnpYOT2snB5WTg8rp4eV08PK6WHl9LByelg5PaycHlZOD73yP8o2f1rcx/tlAAAAAElFTkSuQmCC",infos:"The Netherlands Antilles was a constituent country of the Kingdom of the Netherlands.",capital:"Willemstad"});P({lat:-11.202692,lng:17.873887,countries:"Angola",populations:" 34.5 million",where:"Central Africa",flags:"https://cdn.countryflags.com/thumbs/angola/flag-800.png",infos:"Angola is a Southern African nation.",capital:"Luanda"});P({lat:-75.250973,lng:-.071389,countries:"Antarctica",populations:" 1,000 to 5,000 (seasonal)",where:"Continent",flags:"https://static.wixstatic.com/media/bd9fe1_fdde93dc1e724cd380d587024cec239a~mv2.png/v1/fill/w_560,h_356,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1280px-Flag_of_the_Antarctic_Treaty_svg_.png",infos:"Antarctica, the southernmost continent",capital:"There is no capital"});P({lat:-38.416097,lng:-63.616672,countries:"Argentina",populations:" 45.81 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/argentina/flag-800.png",infos:"Argentina, officially the Argentine Republic.",capital:"Buenos Aires"});P({lat:-14.270972,lng:-170.132217,countries:"American Samoa",populations:"45,035",where:"US Territory",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACACAMAAADzok/sAAABiVBMVEUAAGb///+9ECFaNxn/wiF7PCCqUyPKQE3pr7WXDS5lCUIyBFSLDDPXcHpYB0XGMD8mA1nln6Z+CzjTYGtMBkoZAlzyz9M/BU9xCj3gj5fcgIlVNBjPUFxNLxW5ECI+JhHtv8TaeIKwDyY2IQ+ZmZnd3d1ILBRGBkylDir2uyCeDS1rCT/99/g5BVGRDDFfCETEKDguHA0lFwru7u778PGVSR+ysrLT09OmpqbwyMzVohyFQRvp6em/v79EIRLpsR735OZ+fn6bdhSrghZ8PRpSKBEXDgZrNBwoGAtJJBOHh4eFZRHQnhuFbSy/kRlbLRM3Gw5hYWEOCASuppCTcBN1Uhebfzd6cGuJgHxgQS9zYVdQQDZuPyWflI4/LR5dVlFCOTFubm5TMiNXV1c3NzcZGBdFOjE8Kx0qJiKeiVFhSg1APjyRgViviyxwY0KGcjyhmIBhOxOXjG52Yi4sIQZDMwl2Wg9TQAumlmuroIWDWxWHd06UfD69uKuQgFZsYUKBemZUTDg/NBXK79pNAAAMKUlEQVR4nOWdi3ub1hmHSwFta3bfsnaj9GwFsbJ5F2AChiSYQAIhYSTLWHbi2I7ttrHVuHbcWs7Nqbe/fB9IahNbki+6IKxf9MixbPPo/c75bgfEee+9+dX9Dz/6LO73EJeA/S/vg+J+H3Goxz6P/G+zzxv/RfZ54r//4V9/cpF9XvgHsYM+ifu9TVrD2D/+wx8X4n5/k9Qw9h8BOwaK+z1OSvf/9sEg9vd77HeV/7rsd5H/Jux3jv+G7HeK/95Q9n/1Y78z/LdkvxP8I7Annn9E9kTzD2P/04+vxZ5Y/nsf/P2TMbAnkv/27IqEYblE848y7tIqg2FrupJU/hHnvPyouKE8KLr5JPLf+8dPB7H/4mdXs0t56WHWWV8rOpla4vhHZAcpj9YfZWoZveikisJWkvhHZwetZZ1ixkm5tUyq5mQTM/5jYcew9INMzSVh4mdS2Vomc3H4Z5P/3s/Hwg7aKGaLWScFj1Qtm8ralZnnHx97NPjFTDGbcoqpYg0sIDDpmeYfJzuE/bVsBtjB7TOpEkx/RKGL3j9D/ONlB204GeB3UplSJlODZw7fvFj8zAr/L8fNDvSPUmQ2jHow8cliCui5LanP78WNfgX7f25OntvGcmuPUpDywkcpC+OfIjmKYfqMfsz8Y2fHsIWKbq+TqZSTzXSiXrYEgY+jEXUp9cXLPwF2CHmVHbJuw3iTYbqDwU/ViqmMTnGIXmXZmeGfCHsY8F2SrNNuFsYf0p0DUc+FAMDgiEM2eryApbeXYucH9k8Hsv/q1uyYtAVjH+LrKUCPPADq3RREPkqgGETvyWsPiqVLMeBOsIPym06ddFzEidmo1oG8n9EzqUwd2CmGQmCNVGonxvw/QXagX6+RDkI0jWiuVgpRwQR6WPNwTOj84AapTG310urPlPgnyt6hr9XKOMXQOC7CnIdWByZ+CtIeQyOGLutQ+u8UZBl+NyeroB/cYPLsv/31IPZ//mZ0diDachxXd22KZnCcKmeKUO2QEPtD10cIfF9E9Yyr14pIwWSWVeVcvqKq28oU+CfODsrvkI7uOiJFiQzHCaiMKFsoOVD61GmGEziB5uqZcPrvpGU2n8+lVTlsgpRtdrL802APOXQS6OsCzPxw9CHY2xSDC6WMI5QFiPxlnCkCfFGvKAWY9gtsFALTBRnLsxPjnxI7SHpC6mXdbYhQ4FG0IHJMmQJum7FpnKEFCm8Idq3k6rq+U99i5XQUAZUKu5Bj5d2J8N+fGnuobYcsQdbX66WSbnMMBzYQOFxkcBFHiKGg8uGgJurqgcpCCEwv5CAKyopaGDv/cPbfjZk9lP49HFkv4zgq44KAiyIlQOiDdADJT3DJct2pOQ5J1vQtNa/AyOdlFQLhePmnzx7qh8ElyRJ4Py2KjI1w8AOOQxQCO3C2rjNIYBixzsDskFk1na8UCizbiQQJZg+15UDRp+uuWwstoItMgy5zOM6EMwC+QEZEAlglCo44VXceAndlabdQYdlOK5Bg9kiVMk1BeyPChIdA4IiowTE4LeA21D1CGQpCmAx4hE/h4COAzYaqFCrS6Pwxs4OkTRhhzmYg8ttMnRQbNAwzuD6OGkKDZqDwZzqpkRN0d31LTXf1/VJQgtlDbeEUpDyhbAtl1yFdF+Ew/FyDoRoiFENQFAlMCA/0pK72O0CC2UEKR8HQAzQSwgCgl5iwBrJpioJeCGp/8H0RZwS3BKH/0tL37fhnhj3UWuTZMMEhy7sQCG0OpwRwADEKeVARiwyDdLJWr/Rb+wx1U/bPBrL/fsrsobai0MatlyG7iwJ0+vBdGUJB9DLSwSMEB3qBct+pHym57KFWAZNeldYAv94J8yAGcQ0BEj6CfFAjXbL+xeVlj++VXPZQ6U16U5YqUAW5YZzD6egR5noct0VojOx6o/55f8/vKLnsHeWwpQK7RdaiKS9A1re7+R4aoigTIrvvun9Pw9n//NEg9k8+jp89UkWGckZVv4QxL0PPZyOxAZ0PmAGnuWgqcOIXe2rl0onfrhLNDlJlSVbSiqqq7GO6M/CiiATBtkURGgG6IdDIphH+5YC/TzI7qLOIgeXUbfYBflFQEkJHKIZdAN335AfWhz857Fi4jgNPkoKprMoWUBebjtJgZIBytCYERdFeekAB8C77hwliB0kFeIKOVmVzefZJCMyIj/c+39XFjisgCIjQHggI+uI+a9+hrsn+774fHohZgN+jktJqZWl1FwwB3+Qh5wudOUDbHEPbFP3loByYVPZQgN/NbWn17QpvoQyVj1sXBISHD5GjCgOPkVR2ENT03bSWL7zr3UvRaggp0nSZZsrI3t0eeJDk8kusUunwqxfr25wYLQgi3KZwhqH3hhwlufM/r6j5fH5/GatcLvBU8ICSgCORRrRIfT7kKMmNf7JpelaLWGT7Zbb8HlmnIf5DBcyVvxpylOTmv6e873tV7az/T5ccyP1iuATKFYaNXWLrn5xPEAdfW8sDfizoUPaUyziHngzI/B0ltv5VCeJwY3FQb6eW3HYLp2zucXTWe7D68s+8DaSNc+W1H6wN/IXHJE60GFocPvhYIvtfSX5l8YR13C3pjqzFrhNIR9FLyptXhyvPNM+tlS993OWShvJHNpip9Q8pf9z0eSKS1zyGxC9ZhGl1Itwrwj+WsDPPCoy2ZZ1ACVAbtvQT6Ur+2bFB/rx54HXZuzJ88xveqFqmCQ8/IDTPPF/kT3nTMjzDhSJ4yMpfR9finxEbpJf3LfPbk7ZlRPCab5mB2Sa0qqZ58I+wCKPtaYFxap0Y3qlZXVnZ399/+vz58YsXy8sDPOHa/LNhgwV512YQc2pq7e7iVoMP+TVD03iL4K2XqApFwalHVN+ZKESA+i8A3Ii/a4NPB9pgGuc/JHaTCk9p2XsPVWUBUxjmpPXN4uJis9l+idNo86FfNdoa0eaoZ8+erUR6+fIljfpXQTfmnwUbyOv0k0ovsz3Bmc3O/zY5BkFDlD6vVpmXNdJZhdcWJCmdTkOjMCAS3oo/fhu85c3y1lI3yrGbqzDJpeca/2rH2SF3ohcl5ex4v/l6UB1wa/74bdBPC8uvfUILMHkNy7Py0X7T8qNgyW8M+IOR+GfOBmfQFPB+u3143jS74JpvNl+/WR7UA43MP0s2UIKqWbWsoMqbvm8B9pGaTw/v3MfCH6MNclFay5292G8e+IZhmm3f8vj24pWF37j5Y7CBdLx8oHkHrxd9zfMPmvvH32kmEUARwB9d+xhj5b/aBmO8/lFp+gQfBIaxqJ51J7li8prJLzaPr3+UsfOHmsb1r+lvILpVzZWW8fYSSF7JX1nyT55/CjZY9i2LsHwKt/wre9xY+Cdsg8DyuBWTwmmeeDOz/BO0QZPXaJxq4TRBvHr79UHXOcXGH9lg7J9/WTY8wg9P8VGEBakud9y0rIOn8gK2G57olq5vhanwj98GGwQNde4KRQW8v6EedpeEDMuyDsM6QPP385ikblwdGqbGP14bSIFheajF83y7qvFa++QEcStaZAS+ekK1DV4LjqvW09niH6MNpNe+j/BTgvAQQt0LfboGIPxTjmtZfrX54uqzVlPn79pg9M+/NjWvdQI5MDBPaY6jW1ANmSvtdrvl84ZnGUbr/Py709bqFYVwLPxjsUHaIjweRtyv8kTQOgkA2gpOuPCiN4771iAMz6+++OqqSBgb/+g2yD3fPzRMCxyeDq8AxukVww+CarvVagdatDxqNY+u8oBY+Ue3wZGnWYFvnVIcjjiK4p5Vg8DzTxiOCjTDar15tVsZ7gBx40ca4f4X0tkLRTnkCYvmLC9YabVMMIjFe77GE9Uw/bFLgy59nB3+UCPd/+Ts+dMj+b9fH1uab36LNhnEB6vHTcM7SktpbKgLxI39jka7B8zCFzKW666HNKvnYJXm/9irKqC4kS/p9jbIvXUhjNyILghTxnP+b9q6pQ1+yHX53UHXuyaCP9Ro9z+TrrsoEDfmUI3pHnCJ5Q81YRvEjXctTdAGcaNdW2O8528i+UNNwAZxI91YY7ZB3Di30jzf/7qneb7/eU/zfP/7nuZ5/4Oe5nn/i57mef+TnuZ5/5uu5nr/o67mef+rnuZ5/7Oe5nn/u57mef/DnuZ5/8ue5nn/057mef/bnuZ5/+Oe5nn/657mef/znsKPN/4feFe2r5geLcQAAAAASUVORK5CYII=",infos:"American Samoa is a U.S. territory covering 7 South Pacific islands and atolls.",capital:"Pago Pago"});P({lat:47.516231,lng:14.550072,countries:"Austria",populations:"8.956 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/austria/flag-800.png",infos:"Austria, formally the Republic of Austria, is a country in the southern part of Central Europe, lying in the Eastern Alps.",capital:"Vienna"});P({lat:-25.274398,lng:133.775136,countries:"Australia",populations:"25.69 million",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg",infos:"Australia, officially the Commonwealth of Australia.",capital:"Canberra"});P({lat:12.52111,lng:-69.968338,countries:"Aruba",populations:" 106,537",where:"Mid-south of the Caribbean Sea",flags:"https://cdn.countryflags.com/thumbs/aruba/flag-800.png",infos:"Aruba, officially the Country of Aruba.",capital:"Oranjestad"});P({lat:26.820553,lng:30.802498,countries:"Egypt",populations:" 109.3 million",where:"North Africa",flags:"https://cdn.countryflags.com/thumbs/egypt/flag-800.png",infos:"Egypt, a country linking northeast Africa with the Middle East.",capital:"Cairo"});P({lat:31.046051,lng:34.851612,countries:"Israel",populations:"9.364 million ",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/israel/flag-800.png",infos:"Israel, a Middle Eastern country on the Mediterranean Sea, is regarded by Jews, Christians and Muslims as the biblical Holy Land.",capital:"Jerusalem"});P({lat:40.143105,lng:47.576927,countries:"Azerbaijan",populations:" 10.14 million",where:"which span Asia and Europe.",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAteJQni/vM0D///8AvOv6ISr4JkE9pC7vLjzvKTjvMT7vLDruHC7uIDHuFiruECb+9PX70NL8293zb3f95ebxVmDyZm7ze4L+7/D0g4n2m6DzdXzyanL5xMf70dPtABT1k5nwQ07wSVT5vcH3o6jxXWbtAAj0iY/72NrxUlzvOUX5x8n3qKz4s7b3rbH84eMwX1lWAAADrklEQVR4nO3ba2+iQBSAYVf2wgzDoEJrdVuLtV1t7eX//7v1UhGtYt2z2TmbvM+HpklpQt4MMMDQagEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxFXyHQ+gaBVlsfGyfGJLG1oXfkNG35rHFp+yIfDPKHp9SZOPT+nKArn/Hjct6J3nW6wztvVI9BTfmMn75Fe4rSpYoD6skX+7KzH281Boc+Cb1vR6nJl971drNddefz+WxZtLhIQ+/dMVry+cFOuue87d2SHw8mUVR6pQewjnw2e6nFm+VZmmx6WZOmZdRV2k9FPuvntZGXZ3vnOmuy5zedV2AV+bKbbb2JMx83sOnjJNbYT0M+97ytV2aHK8XtvsYptIJ85nJb76c7tpW1T+tfVFUMn8+a7XRvcHqGklxqmgWGz+e2F91Xf3rzrKPpJBg8X3xX1Xv7xOwkuY4GB64toQTP5yZVvoemw9Ks/5hOotF6jMYaKobOZ21V76bp0DXDy+V00LrFhk+LQZr4i3sF/ULnM2WV77Hpmho/RL08M6a/nNyYJLscRT8VXENC5/O97ZmvecNRFBX92+5yy1/54r+K7B/tYpPA+VYH4/uEuflYTFazw2Jdevmjr+DYDZ0vyat84xOXXb/7QOtKw+ALnc8MNzk6p3LUSi9NNQy+0PnSatoyO3q7tmbNbf1J/tWtikcwgfO57qbHS9P9mk2cGXTrgy+aTWMXvmDofNUJ7bUhX+zym+ijbj8NPXcJnM8XmxbPx/PFD1cH4q1cB+7H6BMJnW+0aTHh3Hc+rrwizPtEkuuqB3cd57O+6sE97x9ws02+Hk9czsfzPpHa0+Y5T5vPx7sOkdqbtoI3bedzr1W/z7zn9bzn3WHT7SqDPqsMzsYaFxl3X7sXO7bCyuaqur3TkK+dba++R9f3vSSKTnkVFfmsrz2MOrS61LO6tMnu2ube7tpm58rFXE9lPSX5FvORaf1xSuf1er2y3vtx/yaK7pXWU5Ovnd7Noh2dXnc+euO7jk+Ks/7BN0Kd6f65UBE9+RYTwGxQ7McrSq/oHu0DTflWX1QOd76ofOSLyrPEfM8r9T99Tf4dAq0fEGh9gQD5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj6R30k1BoaZ0xT8AAAAAElFTkSuQmCC",infos:"Azerbaijan, the nation and former Soviet republic, is bounded by the Caspian Sea and Caucasus Mountains, which span Asia and Europe.",capital:"Baku"});P({lat:43.915886,lng:17.679076,countries:"Bosnia and Herzegovina",populations:" 3.271 million",where:"updating",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-22-scaled.jpg",infos:"Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe. ",capital:"Sarajevo"});P({lat:13.193887,lng:-59.543198,countries:"Barbados",populations:" 281,200 ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/barbados/flag-800.png",infos:"Barbados is an eastern Caribbean island and an independent British Commonwealth nation.",capital:"Bridgetown"});P({lat:23.684994,lng:90.356331,countries:"Bangladesh",populations:" 169.4 million",where:"The South Asia",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-scaled.jpg",infos:"Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways.",capital:"Dhaka"});P({lat:50.503887,lng:4.469936,countries:"Belgium",populations:" 11.59 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-scaled.jpg",infos:"Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO.",capital:"Brussels"});P({lat:12.238333,lng:-1.561593,countries:"Burkina Faso",populations:" 22.1 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",infos:"Burkina Faso is a landlocked country in West Africa with an area of 274,200 km\xB2.",capital:"Ouagadougou"});P({lat:42.733883,lng:25.48583,countries:"Bulgaria",populations:"6.878 million",where:"updating",flags:"https://cdn.countryflags.com/thumbs/bulgaria/flag-800.png",infos:"Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers, including the Danube.",capital:"Sofia"});P({lat:25.930414,lng:50.637772,countries:"Bahrain",populations:"1.463 million",where:"Middle East",flags:"https://cdn.countryflags.com/thumbs/bahrain/flag-800.png",infos:"Bahrain, officially the Kingdom of Bahrain, is an island country in Western Asia",capital:"Manama"});P({lat:-3.373056,lng:29.918886,countries:"Burundi",populations:"12.55 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/burundi-flag-png-large.png",infos:"Burundi, officially the Republic of Burundi, is a landlocked country in the Great Rift Valley at the junction between the African Great Lakes region and East Africa. ",capital:"Gitega"});P({lat:9.30769,lng:2.315834,countries:"Benin",populations:"13 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/benin/flag-800.png",infos:"Benin, a French-speaking West African nation.",capital:"Porto-Novo"});P({lat:32.321384,lng:-64.75737,countries:"Bermuda",populations:"63,867",where:"British Overseas Territories",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAABv1BMVEXIEC7///8BIWnHACfSXWTw0NLGAB/hmp7EAAwAAFvNDioAAF+5usqBF02uAAAAGma9ABvKAB6+pqcvjyLn6e/d5eTs8/J6fZ7DAAAAEmT0293TCSVktNHJy9fmo6XK0t3UZGxCTX/QAC84QnkAAEze4Of35ObMOUdrbJIAB2FyADp8AEfAeonnra9tPh7z9frJHjY1OnTK2djj2djEfoPOqaujABO+RVK/MkK4U1y7Ey3Ci43WwMDafoSYCCOtDCi+cHKUl6/XcHeqO0SQRWCTRVavLkTDNhXFZw26Oia9VR3NXQCONFGdXmhrlJV+f5bOhAChs3+KnnvIpQCzmgx4say9nTHDRgB5npZ2pMFNoLifnnWpeTZ1r7pTs9uHoo+Ks5+ulEike0uZwNOcsrPTuU++qElHfJHQuW7dypmpkS9jShvx696WhDyNq7m/SCKxp2SSeG62gwBcKgB+VUSAYSqwZjjHvF3V0L2dioewmWVlGwDP4s2UfgCFpVhurG2nyqWCfmKTw5JRoE92lQCITQiZXwBPkQBgXBtEZBXAfS6PMiJebSvJHkqMkgA4fyBHnXN7anOZaYc0hT5Hk34wrtetAAAErklEQVRYhe2X+1vTVhjHz1mwpMLoJbHLsPeSipc2uJSLKW1QUXdBhuAYq6PAWEqLRcHqrBsOxG3CYFY3/+CdJE2a5lJ8ntjuefbwffpDk/Oe93Pec96T8x4Q7oeieiNO10da9fTCbgcAwNENe3uaWlzOSAAmhjCqq58CdoTjXTI8EOtxvQfa1RMJwWC9mz10woFTClwbuTkaRYzAahd76EYIzXAztALG66sUsoeWvOE4FVamvQ43ol3OGDLFNJPUc9YW2sSjBNejXWZjtIlWvGKaaUcJ14xuSq7G+GyjDdkjenZq0M762Az5+AHQ4p6JSWGp3mMadEweV9iwC+2hnaoGLgfQYlJU1ymJwKho9I+ilDH1Xh5Qe9hMM1IjmoEwHo/LDKiixXfxuPyOoTX2jL3NBa2loi1lD91lrXOSwTlrgzCm99ZnLbcBjVnrvS1UuT/zWcrrsTVFx8l9RrMabGqY1Tx2ED3cN4L3sf8F2tc3OnaFS7dC49ZySAaOFhYt0OMcxmGOFNsCfcpaGTGNsIy1gaFKaaDJlIfL8mBsuAX6g+5rDXoCAxwHsIkW6E8aGrzKSEb9mcy1TL8enQhfy6D/Vwc1PfQz3kCz1zmeR29SLdCf1nXeGQvI4C6cQrxAQEUHlAYKx7phKOI8r3TSf8M1ay1GDXh3qwlXSh8FHKZwPIj8D2hOroGIBi42KmVUC/QoBwDP8+lj0FJ5q/WNKpCmUsE4MhluivZO3mDZm7c+/wJwX341kSbTU7cZCzQ6qhW/aEMpfnUFUtPogDg68dA2RYemv3ZTM3dm5+bm7n4z/y01tfCdedSGiOsBGcrCJsP6CE3Rvty97+/484sL+dxSPr+88sPSqjla9YdLwUSUCsSkGG5MDzKWRqn3Jq+13+9fml3O53J+WXnaHG22hJZXAP0Ume7rHxeXBKEgLK6t1dH+BdIKrUmuYy8+TQlnPDRFdLG0Lgj3C8XpNTnsXFEom6NRcjmGtFPd+s4l1sUyPG6sFOqbqyQIGxvCvbUHDwKrq/l1q80VpjAwFExMXrj4cZMuXkpIrrFw4pK+6cJkIhgMJhIZPVtEs2Pcw3mhsFHY9LLeLS+kH3HutCla6u3wnDbI4ZEdYx6HsdEjyTTqUQeoo7eSlcpjkn4UBdR4R87rKxg/g9JspbBRSSaTFRI+dfM42wG0L4WPzBSKQqGw8iQpiaGFhxw33oGo0yM/PWVgtVp4JsacTD6DND1/k/d1AD2eSpdokqFZZrxS2UI3BkiWf55Id2Ktz5BMkUZAGPL+8hiK9yeyBFmmE2uNaOVSqAxJGqLcIskqAwuoCm8/enl7G/qYYnVzvSx+PGm6+Lxc+nVnd2dv+8XptqKxnb3d3b29l7/9vhJAaIZhqn88f0VI2o+2FR09IIiXxD7PRW9tViEdCpT+jAL+UEIftpUMQBYxjv5yY9gT4lWBrL4malkPf/Y6eltrMxlE7xPEm7d/33iLYHdnV14TxMHg1O0ceuLbjQbRJMJM//OGUPXuHXqoZdu70jI7WyMMOuI6QBZ1qIMfdCJkWdFodl/l1pKdilihg2zygKgdHfKgs2CZHhV/JzrRiU50ov+l/gXL/uVnoRV5xQAAAABJRU5ErkJggg==",infos:"Bermuda is a British island territory in the North Atlantic Ocean.",capital:"Hamilton"});P({lat:4.535277,lng:114.727669,countries:"Brunei",populations:"445,373",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/brunei/flag-800.png",infos:"Brunei is a tiny nation on the island of Borneo, in 2 distinct sections surrounded by Malaysia and the South China Sea.",capital:"Bandar Seri Begawan"});P({lat:-16.290154,lng:-63.588653,countries:"Bolivia",populations:"12.08 million",where:"South America",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAB8CAMAAAAcn9HaAAABwlBMVEXVKx4AeTT54wDUIB++whwAdjX66AD/5wDtshD85QDSACD/5QD/6wD/7QD57ADRKh29lhvv1wr03QA7IyHu2iXm2HHy3Rnm2XjOzb/y4EPp2Ebm2n7czXnu2zTg1IDp2E7d2LHc04z14jTr3Fu9gS3zzQDJdxLh2qDIsljlvQC9SRa9NhjQTho2gBsScTEAkrjvowAScUIAmsYXptvCoFPbfhPooRHEJhwylrEfeSo+p9TjrBmyqgp7loePk206jaYeh4pfmaPZcBZ7pJkAquncjRDUXABseJ3NbxPblQ7MPRvPJwCCW2C0RSWdVSraaBmziB/exhLSnxPUtBSVoBjRyA92kRZRfhsxcyZadBRkhRkpWiOlqxWap3Gop5DEuY2oqYJbg1ezp2ZyZmoxCBopAAAAAACOiIpwZ127qz5oVjGEWkdOPUg0FhIjAC5gUTtlhDpMTx5VNi2lckXNnnTs4tpdUFA3MyA0UyXYh01YXh5JMhi1aEOznhFXcT1dTQiOeRCbqElAaUkzV3Bnf4dPfnwdd1wwagDHyc7VoTmCoACiZxOJIxlnQCB7KR46jlhmmHZ4gksAqPmalkm0yoWGQSXHRwd5AAAFBUlEQVR4nO2Z+1MaRxzA726D53Fwj0URTUxIDD7wRBDvAQhC5BJAAz4RjMWoMY1pbGNs0jZtkj6iUWyLbZr/t3vadPJbpzPLDczsZ3Zudu+G+X7uy+73joWiCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCoUUA7QnV2Z5QHe0JxTQDjv23y3JNidAUbw4ur1zocivrsCniTfH2llc/enetVrzNEG+GN3upugYvuhws31t3NSFGM7z5crns/iff7uXqGs/gzzh2b66LXfms5vP7vRzHef0b9+9vQlbGHaUJ3v1b2w92dh5+3tO/0Dv04uHO3vaj3T72vz/4/8DtzS089ux4LL6o+R49sTp7D778ahe3OFZvazGybm/P0/19z7ODr5+/2PN4vnn87W7feS2EOENh9e7qRgdO/m6/svzy+50n2x7Ps5fVtdWe83XZ3YUzFEZvtBB7fL2coIMfnlary6+Q9dR6vfx6YwBp9/p60DLFFwyjd99lCK9MugWR0g82y9U3O69+LK9VKz91+wa63btXILzchy8YJm/Y72W4q75rgqkKeefBRm3951/eTr89PHpX808OH19VTeGa7yrHePsxzXJc+fb6r9/gBm4GBp1mYHbj2JeJGlnUMoe+Y593wHQOBm4OcDeu+3FNFWzzBA4Njwg5Z9Cpyoy/doiUa7WZeCY6UfNzsorO54SR4SFsNQXf/GYTTjMIguoIL/ePG8bWomma2hbKeL/Mj6joiqkn8FVxfN4uCRSC1KiLl+vpaPQkbCqKYoZPjKxRl6FrlAoWgITvDQuftzuPvIEC2eVIJpNC2jrQlXx4K5qJrLNQAUEFzLuxRcPofQqCOaBCfgylOKyZhV9/+71gauFk1BjjYQ4MotaK3h2DYmHU8g6NZ2thTS3eo0NFVQvXsuMhHqqgUBAH8T3qMXrnRVEEJstHJqKTYa1KhyI0vaqFJ6MTEZ41gShS+Q5s0TDOExWpOTWej6BVKVVo5B2iHRXpJBqN8LzmRDelCtii4fMWFCBSoJOFkenkEe1whBx0o9GIhI6S0yjfnYASgdKS3qKoUyCB8m0Y6VgoFKIt70YsbRgo3wlA6ZTYkt5Oyso3ZGNGPE3T9FiyQZ81GnQ6bsRYaOWbcraid8e5d4J3TSVT0zR9VnveiCFtejqVnHJZ+UberbguL/KtwYCmRaPpMd/x8bvTPxwx9OzUtADUWjbf6L0beZcCWj6cSmbSyeQZPb8ZS2dmUuG8FihZ3i05v923rBKtaxYz2fh0xEG/PkrHszPnZ5xWcb/Vks9L5IYKimlZ3r6TjGeNcSMbT965bZ0wUTlBxb0V5zcXQBNBBLm8phXA7NxEJvVnKjMxNwsKmpbPWd9FQca3b4Xx92VH3onsRnUlqN8tFivv5/6ae79aLN7Vg4o+iu4IZ7qx7kO4B0uKXjLnl4rF4ml5URGUxfo86i/NmyVdKWF8G8S8f+IWpAXUkOqHRF0rCSWtHviARguSgBpObbzessQwkgyl4qnEyIopmIrslk6LEry4gDMUXm8GSmjtuRYWXBwEi8IigIxLRgNOliDTut4Mu3ReMjjroAZcAfXjgJOX8O5sYt6P/eRfKOTLfTLCvCFLse0Jdak9oRztCUW3J8TbXoi3vRBveyHe9kK87YV42wvxthfibS/E216It70Qb3sh3vZCvO2FeNsL8bYX4m0vxNteiLe9EG97aVfvvwFbwjIgw/8m+QAAAABJRU5ErkJggg==",infos:"Bolivia is a country in central South America, with a varied terrain spanning Andes Mountains, the Atacama Desert and Amazon Basin rainforest.",capital:"La Paz, Sucre"});P({lat:25.03428,lng:-77.39628,countries:"Bahamas",populations:"407,906 ",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-12-scaled.jpg",infos:"The Bahamas, officially the Commonwealth of The Bahamas, is an island country within the Lucayan Archipelago of the West Indies in the North Atlantic.",capital:"Nassau"});P({lat:27.514162,lng:90.433601,countries:"Bhutan",populations:"777,486 ",where:"South Asia",flags:"https://cdn.countryflags.com/thumbs/bhutan/flag-800.png",infos:"Bhutan, a Buddhist kingdom on the Himalayas\u2019 eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys.",capital:"Thimphu"});P({lat:-54.423199,lng:3.413194,countries:"Bouvet Island",populations:"A Nature Reserve",where:"2500 kilometres southwest of South Africa",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"Bouvet Island is an island in the southern part of the Atlantic Ocean",capital:"Oslo"});P({lat:-22.328474,lng:24.684866,countries:"Botswana",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:53.709807,lng:27.953389,countries:"Belarus",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:17.189877,lng:-88.49765,countries:"Belize",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-12.164165,lng:96.870956,countries:"Cocos [Keeling] Islands",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:56.130366,lng:-106.346771,countries:"Canada",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-4.038333,lng:21.758664,countries:"Congo [DRC]",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:6.611111,lng:20.939444,countries:"Central African Republic",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-.228021,lng:15.827659,countries:"Congo [Republic]",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:46.818188,lng:8.227512,countries:"Switzerland",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:7.539989,lng:-5.54708,countries:"C\xF4te d'Ivoire",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-21.236736,lng:-159.777671,countries:"Cook Islands",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-35.675147,lng:-71.542969,countries:"Chile",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:7.369722,lng:12.354722,countries:"Cameroon",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:4.570868,lng:-74.297333,countries:"Colombia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:9.748917,lng:-83.753428,countries:"Costa Rica",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:21.521757,lng:-77.781167,countries:"Cuba",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:16.002082,lng:-24.013197,countries:"Cape Verde",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-10.447525,lng:105.690449,countries:"Christmas Island",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:35.126413,lng:33.429859,countries:"Cyprus",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:49.817492,lng:15.472962,countries:"Czech Republic",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:11.825138,lng:42.590275,countries:"Djibouti",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:56.26392,lng:9.501785,countries:"Denmark",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:15.414999,lng:-61.370976,countries:"Dominica",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:18.735693,lng:-70.162651,countries:"	Dominican Republic",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:28.033886,lng:1.659626,countries:"Algeria",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-1.831239,lng:-78.183406,countries:"Ecuador",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:58.595272,lng:25.013607,countries:"Estonia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:24.215527,lng:-12.885834,countries:"Western Sahara",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:15.179384,lng:39.782334,countries:"Eritrea",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:40.463667,lng:-3.74922,countries:"Spain",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:9.145,lng:40.489673,countries:"Ethiopia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:61.92411,lng:25.748151,countries:"Finland",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-16.578193,lng:179.414413,countries:"Fiji",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-51.796253,lng:-59.523613,countries:"Falkland Islands [Islas Malvinas]",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:7.425554,lng:150.550812,countries:"Micronesia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:61.892635,lng:-6.911806,countries:"Faroe Islands",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:46.227638,lng:2.213749,countries:"France",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-.803689,lng:11.609444,countries:"Gabon",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:55.378051,lng:-3.435973,countries:"United Kingdom",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:12.262776,lng:-61.604171,countries:"Grenada",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:42.315407,lng:43.356892,countries:"Georgia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:3.933889,lng:-53.125782,countries:"French Guiana",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:49.465691,lng:-2.585278,countries:"Guernsey",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:7.946527,lng:-1.023194,countries:"Ghana",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:36.137741,lng:-5.345374,countries:"Gibraltar",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:71.706936,lng:-42.604303,countries:"Greenland",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:13.443182,lng:-15.310139,countries:"Gambia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:9.945587,lng:-9.696645,countries:"Guinea",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:16.995971,lng:-62.067641,countries:"Guadeloupe",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:1.650801,lng:10.267895,countries:"Equatorial Guinea",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:-20.348404,lng:57.552152,countries:"Mauritius",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/mauritius/flag-800.png",infos:"",capital:""});P({lat:3.202778,lng:73.22068,countries:"Maldives",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/maldives/flag-800.png",infos:"",capital:""});P({lat:-13.254308,lng:34.301525,countries:"Malawi",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/malawi/flag-800.png",infos:"",capital:""});P({lat:4.210484,lng:101.975766,countries:"Malaysia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/malaysia/flag-800.png",infos:"",capital:""});P({lat:-18.665695,lng:35.529562,countries:"Mozambique",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/mozambique/flag-800.png",infos:"",capital:""});P({lat:-22.95764,lng:18.49041,countries:"Namibia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/namibia/flag-800.png",infos:"",capital:""});P({lat:-20.904305,lng:165.618042,countries:"New Caledonia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/new-caledonia/flag-800.png",infos:"",capital:""});P({lat:17.607789,lng:8.081666,countries:"Niger",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/niger/flag-800.png",infos:"",capital:""});P({lat:-29.040835,lng:167.954712,countries:"Norfolk Island",populations:" ",where:"updating",flags:"https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",infos:"",capital:""});P({lat:9.081999,lng:8.675277,countries:"Nigeria",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/nigeria/flag-800.png",infos:"",capital:""});P({lat:12.865416,lng:-85.207229,countries:"Nicaragua",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/nicaragua/flag-800.png",infos:"",capital:""});P({lat:52.132633,lng:5.291266,countries:"Netherlands",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/netherlands/flag-800.png",infos:"",capital:""});P({lat:60.472024,lng:8.468946,countries:"Norway",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"",capital:""});P({lat:28.394857,lng:84.124008,countries:"Nepal",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/nepal/flag-800.png",infos:"",capital:""});P({lat:49.815273,lng:6.129583,countries:"Luxembourg",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/luxembourg/flag-800.png",infos:"",capital:""});P({lat:56.879635,lng:24.603189,countries:"Latvia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/latvia/flag-800.png",infos:"",capital:""});P({lat:26.3351,lng:17.228331,countries:"Libya",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/libya/flag-800.png",infos:"",capital:""});P({lat:31.791702,lng:-7.09262,countries:"Morocco",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/morocco/flag-800.png",infos:"",capital:""});P({lat:43.750298,lng:7.412841,countries:"Monaco",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/monaco/flag-800.png",infos:"",capital:""});P({lat:47.411631,lng:28.369885,countries:"Moldova",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/moldova/flag-800.png",infos:"",capital:""});P({lat:42.708678,lng:19.37439,countries:"Montenegro",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/montenegro/flag-800.png",infos:"",capital:""});P({lat:-18.766947,lng:46.869107,countries:"Madagascar",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/madagascar/flag-800.png",infos:"",capital:""});P({lat:7.131474,lng:171.184478,countries:"Marshall Islands",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/marshall-islands/flag-800.png",infos:"",capital:""});P({lat:41.608635,lng:21.745275,countries:"Macedonia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/north-macedonia/flag-800.png",infos:"",capital:""});P({lat:17.570692,lng:-3.996166,countries:"Mali",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/mali/flag-800.png",infos:"",capital:""});P({lat:-.522778,lng:166.931503,countries:"Nauru",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/nauru/flag-800.png",infos:"",capital:""});P({lat:-19.054445,lng:-169.867233,countries:"Niue",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/niue/flag-800.png",infos:"",capital:""});P({lat:-40.900557,lng:174.885971,countries:"New Zealand",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/new-zealand/flag-800.png",infos:"",capital:""});P({lat:21.512583,lng:55.923255,countries:"Oman",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/oman/flag-800.png",infos:"",capital:""});P({lat:8.537981,lng:-80.782127,countries:"Panama",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/panama/flag-800.png",infos:"",capital:""});P({lat:-9.189967,lng:-75.015152,countries:"Peru",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/peru/flag-800.png",infos:"",capital:""});P({lat:-17.679742,lng:-149.406843,countries:"French Polynesia",populations:" ",where:"updating",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAABIFBMVEXOESb////ODiXOESPxzM7/nBD/lwD/mgD/lAD/kAD/kgDUBSLIABHJABnNABf/sFkAJJQADI8AMZgAO5sAAI0HPpwAKJUAOJoAIJMhSaL/8ueiAAD//PiWUleum5y/AAkAGJH/7d3/1q+dRUbw8/j49fWMAAD/4cL/sGD//PD/ojihiYr/qU//y5qwAAD/nSKykpT/wo2BTU+SbG1bAADYzMx6YGBzUFCPnMfg29uAjL9zgblneLbh5fCcpsy/x9/W2Oiia2uBXFz/vXfItbWkKi6QMTaFDxuhfYLv0rjtwJnGwMmJQEacTVKUGB/UwruTJi20ABKjDxRxNzpwLDBOAABmHyDDoqKmQUKsu91AVaicjZdBXamhorpabbOtfXxuWeN9AAAG50lEQVR4nO2aaXfayBJAaeVpAwyysIQQMiCBLDYhY0LCYhCL4sBkH2eSweMw//9fvGqBs/jjo/zGntP3eJFFH9elTnV1SyiRYDAYDAaDwWAwGAwGg8FgMBj/argnSeLZkyTxnydJgjxJmPZ9XOCh/vdDaQ9b82q1+nLRt+yH+Pfo2pa9lLskOstkUp3WkBBP5ru2hR0FW9urC4KwdM9SCa58Tk90BVEQ6h6yOLK2LYk8LzmlciKRqtboGYEHhLplosZB1fZNsgTNpN3KgPYpnZCmTLUlmzS7mJEQte22vCQmaMuNWPsVVDbUCE12l3QloW3jxcLTtpsCn/RoumVCtblOBGfrUDRiYNpUvmmjBUPT9gQq2DRNca+d4M5qxA5EkRcc0oQXeTFpY0VD03biIhZ8shSTe+3UVZ/YHhgTPxm/2Eabl0jaDYs4cc+QbVMSdtpQ3sXXq0ZT8miJgHUWBiGJI2nXszD7ktCyhSypf9dOcJnTRrNOsoIgijTXy2QdJx6Oti8ITZM46/V6mfTN4Lt24ui0EZiO3HZ+W/uWHQi0ijBA0TbpfAvs4UV11RUls/sj20enZtcMxOybt+9KDk/nJY9SJijadVrWYt1934m6ogjF8JN2w8oKYvvDq07UFncLJkZEDG2Prui8sHzTSV2tedrvftImjsSL2Vb56NSP35zQbCCExNA2/SaIi037bae1FmjfLv2UbWiAQrf/qhjBgZhsOwgBUbQtizT8APZ9b4qpq6Enive1JZ+sPh3NYd4GjkXMJcJuEEHbl5ceLDft+vBjuuXY9n1twbf9PpT9MnDoxlaWEZoJgnZbhDnnW6bVKqeqDu/ZyV+1HU+2z8up1zDCbwsCL7Yfg7Yd0JkmSUuzlE69W4uy45FSmuPutD1HSFLtjybsAuNmEhzeAw/X3i3qsKx7oF1d04sbUnr/KX30jKPLDfElQaLaV2tpN5AXvUeg7e+1pVjb9ZaSbBG3X5oXi+kULO4BD1cPVNsT99bS4cV9sLa1DIIA2rEQZ/ud0/a9ZtwqXLf/99vfTxs+bALjbHt0yyIGQbN5eBPE6NuWaXuO37Vptm3f9+0fLw370NW7fiPWXnZ9xzNRLoYPz7bj2bZpASQuklqt5rpkuPu+g3yFKUnH7N/hweqHa8vJpCzLSSkZZ9s9712vot71Rb/3+fPworf4uuotelT7ymsGQjxSSj4C7f2MhAuEWNtdfB6S3vM+Of8jIsM/Loj7/Euc7StH2M9Jnn982mRx7ZLehUtKn/ug3SLuxYLste8aYPsRaPO/areiqBSV+r3hYnhBXrirfisqlXYN8E4bGvs/r92ECy7KXZHs5mD8TegNHpd+xdrSbuDj6NvdOiWbbdPFvdp6QXm5eLn7/XIR/34RT8l2dkf7MaySPwDtP2l++6teb0FPuK1FrxdB5uNsI0ZC0K7tfk63A9CmN9BKz4FWfEc+PqQ3XudHqY+b7WASj53VDg56uHY4AIuppqg3fx1xR3PS/3J9fRF9IbNwRnqr3vX1l4hERS51tdV1dQRjN9rkEWjXcvqtqqiqmv/2O8elr877w+HX1/NxRTHGb87m8Ff0tsMlyqs8jDH0m/zJ+OCYGLU9HY9G4/H4chu+yyS4VLlYLJY7H7ZjODk5S3eKxU6KS3DFb5eXl2MYOhofnmyUKTmZTncm/eKz3efKmR6ZbEaDGYk+cbsLhvRqN3QzRZDG0d5WFC0u8Nl5nNhE5my4ySuqro/IvMzRM+k/wymJp4CSDxFCYmiHOhStUVArath6X86ky9XhoJKnKJdk/imdSXdOv8GrBcOA8lY2CCFR+vYAKnYAjMbh8Px0HlkTrbBD25D+33Am3A+gAzEiYi03tWlBG+3b8qBwu9m35tnodn+2trm5Gc2QomFpbwp6LqcX4vpVdaiOAi2F8FJR83qeNuvwRsnnoG/jhEPSrhXUHJBXtMu8To+0vK5uwVgDcqpyC++KHmoGQs+mIGV7ls/BapLPUUld1xXDUGCeKsbx8fHJMaxFeuX4JAajjRDkzyVdaNabfV+ehNO7w3A0HoSH70N+BlG7Nr1VdVXXxpDRcFwwYAuynVlksqUrv1FA6SB34GmHJ3o+F1eJcXJiqHEt543jk0pc4FpO19D6CGq2Q9VQFKNiVCqGUTneU6l8PzxGqmvKgzxPUqvdP4zvoyDyANrTbaFwO40PJ5e3N9sRyubpV9C1QwPWlVzeuJ3VJmPYmUBjPNmii6NrT6Y5g3ZwVYM1RqPd3NCmuN2PPExtTwbjG02ByWhUtJsxzgb7Hg/0iFdtMouZoOd5B3sO8P/JU33G9Z9+Nvh/46k+v81gMBgMBoPBYDAYDAaDwWAw/tX8F3IMIzQStGI6AAAAAElFTkSuQmCC",infos:"",capital:""});P({lat:-6.314993,lng:143.95555,countries:"Papua New Guinea",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/papua-new-guinea/flag-800.png",infos:"",capital:""});P({lat:12.879721,lng:121.774017,countries:"Philippines",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/philippines/flag-800.png",infos:"",capital:""});P({lat:30.375321,lng:69.345116,countries:"Pakistan",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/pakistan/flag-800.png",infos:"",capital:""});P({lat:51.919438,lng:19.145136,countries:"Poland",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/poland/flag-800.png",infos:"",capital:""});P({lat:46.941936,lng:-56.27111,countries:"Saint Pierre and Miquelon",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/france/flag-800.png",infos:"",capital:""});P({lat:-24.703615,lng:-127.439308,countries:"Pitcairn Islands",populations:" ",where:"updating",flags:"https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",infos:"",capital:""});P({lat:18.220833,lng:-66.590149,countries:"Puerto Rico",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/puerto-rico/flag-800.png",infos:"",capital:""});P({lat:31.952162,lng:35.233154,countries:"Palestinian Territories",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/palestine/flag-800.png",infos:"",capital:""});P({lat:39.399872,lng:-8.224454,countries:"Portugal",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/portugal/flag-800.png",infos:"",capital:""});P({lat:7.51498,lng:134.58252,countries:"Palau",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/palau/flag-800.png",infos:"",capital:""});P({lat:-23.442503,lng:-58.443832,countries:"Paraguay",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/paraguay/flag-800.png",infos:"",capital:""});P({lat:25.354826,lng:51.183884,countries:"Qatar",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/qatar/flag-800.png",infos:"",capital:""});P({lat:-21.115141,lng:55.536384,countries:"R\xE9union",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/france/flag-800.png",infos:"",capital:""});P({lat:45.943161,lng:24.96676,countries:"Romania",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/romania/flag-800.png",infos:"",capital:""});P({lat:44.016521,lng:21.005859,countries:"Serbia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/serbia/flag-800.png",infos:"",capital:""});P({lat:61.52401,lng:105.318756,countries:"Russia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/russia/flag-800.png",infos:"",capital:""});P({lat:-1.940278,lng:29.873888,countries:"Rwanda",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/rwanda/flag-800.png",infos:"",capital:""});P({lat:23.885942,lng:45.079162,countries:"Saudi Arabia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/saudi-arabia/flag-800.png",infos:"",capital:""});P({lat:-9.64571,lng:160.156194,countries:"Solomon Islands",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/solomon-islands/flag-800.png",infos:"",capital:""});P({lat:-4.679574,lng:55.491977,countries:"Seychelles",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/seychelles/flag-800.png",infos:"",capital:""});P({lat:12.862807,lng:30.217636,countries:"Sudan",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/sudan/flag-800.png",infos:"",capital:""});P({lat:60.128161,lng:18.643501,countries:"Sweden",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/sweden/flag-800.png",infos:"",capital:""});P({lat:1.352083,lng:103.819836,countries:"Singapore",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/singapore/flag-800.png",infos:"",capital:""});P({lat:-24.143474,lng:-10.030696,countries:"Saint Helena",populations:" ",where:"updating",flags:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1KGNoQgLOkDJwOlybylUyc8bFF1xvdhGXQ&usqp=CAU",infos:"",capital:""});P({lat:46.151241,lng:14.995463,countries:"Slovenia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/slovenia/flag-800.png",infos:"",capital:""});P({lat:77.553604,lng:23.670272,countries:"Svalbard and Jan Mayen",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"",capital:""});P({lat:48.669026,lng:19.699024,countries:"Slovakia",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/slovakia/flag-800.png",infos:"",capital:""});P({lat:8.460555,lng:-11.779889,countries:"Sierra Leone",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/sierra-leone/flag-800.png",infos:"",capital:""});P({lat:43.94236,lng:12.457777,countries:"San Marino",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/san-marino/flag-800.png",infos:"",capital:""});P({lat:14.497401,lng:-14.452362,countries:"Senegal",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/somalia/flag-800.png",infos:"",capital:""});P({lat:5.152149,lng:46.199616,countries:"Somalia",populations:" ",where:"updating",flags:"",infos:"",capital:""});P({lat:3.919305,lng:-56.027783,countries:"Suriname",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/suriname/flag-800.png",infos:"",capital:""});P({lat:.18636,lng:6.613081,countries:"S\xE3o Tom\xE9 and Pr\xEDncipe",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/sao-tome-and-principe/flag-800.png",infos:"",capital:""});P({lat:13.794185,lng:-88.89653,countries:"El Salvador",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/el-salvador/flag-800.png",infos:"",capital:""});P({lat:34.802075,lng:38.996815,countries:"Syria",populations:"21.32 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/syria/flag-800.png",infos:"Syria, officially the Syrian Arab Republic, is a Western Asian country located in the Eastern Mediterranean and the Levant.",capital:""});P({lat:-26.522503,lng:31.465866,countries:"Swaziland",populations:"1.192 million ",where:"Southern Africa",flags:"https://cdn.countryflags.com/thumbs/swaziland/flag-800.png",infos:"Not Found",capital:""});P({lat:21.694025,lng:-71.797928,countries:"Turks and Caicos Islands",populations:"45,114",where:"British Overseas Territories",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAABL1BMVEUAKGj////OESbLAADNAB7XXWHy0NHMABP80RbkmpwAImUAAFoAC168vMoAHGPp6++ytst6fZoAE2D129z0zzujqb/qo6T+0QDGydX31VgAmUfK097/1hEAAFYAAFBGU4CFG0o/THzZZGk2RHcAAEre4OfSPEPcDRref4Py1W9rbY+YoLrRAAyCiaz33Ympr8GUaoP76rfv6dn4zyr24qLz58Lx1nseMGzoqqzWVlgzPHP46enXAAD4xyPfswzWpwracXPwtzj0o1n7yED4mabMnRC+jA7yrGHrmbP4rnW6fw6sbwz+r1T2o2+QSAibWAr+oJvkpcj4qIXkk6DwuFnQXCDopht9MgaLABs6AAvWuBEAAAeDADKqABp5AA5Hn0A7hEJaeT3EvSdmoDmPrzYtwhvWAAAD00lEQVRYhe2YCVPaQBTHTcCyEoQSSzeFVUS0RZFi8agVE5AKWqSItrXWHljh+3+Gvt1gzt06nSAzneE/o7OT7L7fvmOPMLOyIFHN55TojFOxeWkuIstyZE6aj7neRJWcJu3L4dDswuJMEIXAAoNreRdchAZwRnoum8OWAqH3wzbc6TkfbYKtIcHQmuUChWctOA8dVbImeJQlTQmEZtZCtrX7sPvRUSWfcc0zF4zsSZ4ddi86KppjQHjWmUAT7kYL5jcGmZYjTsuKA624i2uMYBPuSWTegc6b8xprqEGKpdUDjSXz3RNGSFhoaIWsOc0frNpDgqETDq2B6Wq1ajIkC02fVavms8Sao78UbDeTxLLQQgXbUmbFehkGdPiluMO7eCB0WCzZlLjDZiDyjBxAr6bokeIxnrhFERIrwuxHxB0OOeTkU56SPPYTsQqswgt/6eHfU9Ty+jO/1ssqBz3mda2mXmBdJwRhBCLEMGqE4BcpHjppa6OYYAYXCoV6YcGL3q/X69AubjhG+MNI0UcN/f2xTtFNo9mCP8RHx0dSF/OaCZ4NhcJzkqZZaM31IpNbVO8H+c0xrxuNk9MPBKFard0+a7eaNT7aFBxcI/srUD7Pwf6S4+Raytlwmb4UH12A1o8anY+n1G2jaZx1z+G/GA13BbdtOBZdVwXfzLIiOKDJUafROz0+AbebzfNutyUKuMfj8L1dzwXJNzuB59TrRueyd9G7JBBw/Ry8rgkCzi70Viptm75roaijD42POp3exTGgkY7a3TNiED5alEbOZdgHz/rZFE0Q5LoHK4xs681uixiCxeUuLtsR7ieACw4z5a9r8Lbx6TNpfrkiOvpq/A3tKC77ueDDx1UYhxyvi+t0M9ER2b6Wv+k6VDgy8HqRiwbwpuwvWorepGey93PPLrgV3h5ees32MYRuruXvNdQ6byMdvy7x9vCtH8vLy6myb7XEk+WtZaqtsnfTAngqlSqXy1t+g9HsGxNNrn6Gf11BvqHa8BtOVQCChUn1v4qPnkVVDkBl4rmiVkbo/u3v2z5hbVwRb2ZjVEzbZri7dL+fTt+x9rYWe3hgcMWTO8zt/oCi+8zpHe5xPX7FEszRNEOnWQgSE3Ga1jh1G+I9GKRZxPEOt74fQ7EMuDrsAxvQQwhAZkJOQ/nnK4gMBv00RQ8IquTH+Fn6gNTSLh4CluZ6iHdLE1lZIynFXXwzhBof3uDdYtCfPf6RXaogDBsZRpXSZMkQ8+zaHsZ4by07yWibisdTlb1KindzfHzF3hbfTmxVeRTlnElTTTXVVFNNNdX/pT/Zj5P17l4zfgAAAABJRU5ErkJggg==",infos:"Turks and Caicos is an archipelago of 40 low-lying coral islands in the Atlantic Ocean, a British Overseas Territory southeast of the Bahamas.",capital:""});P({lat:15.454166,lng:18.732207,countries:"Chad",populations:"17.18 million ",where:"Central Africa",flags:"https://cdn.countryflags.com/thumbs/chad/flag-800.png",infos:"Chad, officially the Republic of Chad, is a landlocked country at the crossroads of North and Central Africa.",capital:""});P({lat:-49.280366,lng:69.348557,countries:"French Southern Territories",populations:"150 to 300 people, depending on the season",where:"Oceania",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAllBMVEUAJlT////OESYAFUwAAD+an63MABHsrqzf3uIAAEQAIFEAAEIAI1IAADTU1tzNAB3bamvBxM0ACUgAHVAAADyjp7QYL1oAADEAD0oAGE3l5ukAADfHytFRWXXt7vHz9PZxd4wxO2A2Qma3vMbLAADaYmP2x8aBg5WKjp5DTW4AABVdZH6ssLwAACgmM1tLUnBmboYAAAoEaH1BAAADEUlEQVRoge2Y0ZaaMBCGSYGWhMjWEBQRAUNboLKrff+XayYJ6G71AsOe0wv+Cw7g4XP4MzMZdb4Yff3mu87cWuALfIEv8AW+wBf4Al/gC3yBL3B7vRj9+Az4d6Ofvz4BHo1qdrPD8aj52YusxLxHwtbsNMmCB8pDWzh10CMdiHXorH3Arj1rtuPw4D7c0vJYHUk3uK6Y5jyrdM941hrXmBqb7Pit4Km5MuzDc+VNSfDe1ZWCx5hJDQGz+vRE7C7zWuRhFn+EJ6D+TCFsxl5Rv2fpVHbb+xmqk/4msNV1MQsGryb6JEGln/jxY9A90bdcUfwbS2/gZ4VzK73E3US4Q3kvn+t0vsXxe3jNNS4l8iLn0133cpShSgW+q9R2ouGZFO4S8MUhR1Sgcj+Z7aSo8upIRR6WJR7haYixrKsNrGjaR+SAzpMjJ4cudbwGshn3utY1XFJT2REiDq/UYLrbXKbbQuARcIMIs4QDnILTSFUoWE+nLueteKaSzxvhPJ+jtyhBVyxLmZTYwFNIwAKh3rqdy5eGbIe2e9xqOJaH9WlMdhvJjETlditDD/5oN2poMK+RTEpuyd5doEx8fw1LqPcfqMnWh6/wmWXg5bXm9Wlxs1+oZH9aOLm7CQ2KbIxRKZ6tlbLrG+gbEThlMQmGsLMJL5TyxAi/cLgRcmlTaeN6J8TRBBfWhh2YRkXehOg2FnBCyLBm1DXwsU9RQuwnF0fzma/YuXdzbwb2mw6Ql9f0o3ZZeBVe6x7lNpLd63Mvty1PkDR2hS6ucndf6F5ISLxBJCa2wVNx7iq0PnYwIMUn1KYwgp1Fgnz5iSWdHs2kqMqFr2E1yUm3gMJ6zKV7aLdRqrNdG0445Hz/xK7/UaS7LuMgF76wmeHXK6vLrkamKs32wLNIBMEM8zmuw5i3eqrbVXos3PR7sq9tSn8Q9KadDnmFdKOizNyfTYRhgRqPWe+cdxRXUR6gIo/a+f+GkOZfVHa3c/zO+lcpJGUzxyx0D+6jHOWfBOdlte2Q/Zx1VxvhOjERc20TH0THw6L/T38B6i85QfUJUtQAAAAASUVORK5CYII=",infos:"The French Southern and Antarctic Lands is an Overseas Territory of France.",capital:"Saint Pierre, R\xE9union"});P({lat:8.619543,lng:.824782,countries:"Togo",populations:" ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/togo/flag-800.png",infos:"",capital:""});P({lat:15.870032,lng:100.992541,countries:"Thailand",populations:"71.6 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/thailand/flag-800.png",infos:"Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha",capital:""});P({lat:38.861034,lng:71.276093,countries:"Tajikistan",populations:"9.75 million",where:"Central Asia",flags:"https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-large.png",infos:"Tajikistan is a country in Central Asia surrounded by Afghanistan, China, Kyrgyzstan and Uzbekistan.",capital:""});P({lat:-8.967363,lng:-171.855881,countries:"Tokelau",populations:"1,411",where:"Territory",flags:"https://www.interflag.gr/1911-large_default/flag-of-tokelau.jpg",infos:"Tokelau is a remote group of atolls in the South Pacific Ocean, halfway between Hawaii and New Zealand, of which it's a territory.",capital:""});P({lat:-8.874217,lng:125.727539,countries:"Timor-Leste",populations:"1.321 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/east-timor/flag-800.png",infos:"Timor-Leste, or East Timor, a Southeast Asian nation occupying half the island of Timor, is ringed by coral reefs teeming with marine life.",capital:""});P({lat:38.969719,lng:59.556278,countries:"Turkmenistan",populations:"6.342 million",where:"Central Asia",flags:"https://cdn.countryflags.com/thumbs/turkmenistan/flag-800.png",infos:"Turkmenistan is a country in Central Asia bordered by the Caspian Sea and largely covered by the Karakum Desert.",capital:""});P({lat:33.886917,lng:9.537499,countries:"Tunisia",populations:"12.26 million",where:"North Africa",flags:"https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png",infos:"Tunisia, officially the Republic of Tunisia, is the northernmost country in Africa.",capital:""});P({lat:-21.178986,lng:-175.198242,countries:"Tonga",populations:"106,017 ",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/tonga/flag-800.png",infos:"Tonga is a Polynesian kingdom of more than 170 South Pacific islands, many uninhabited, most lined in white beaches and coral reefs and covered with tropical rainforest. ",capital:""});P({lat:38.963745,lng:35.243322,countries:"Turkey",populations:"84.78 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/turkey/flag-800.png",infos:"Turkey, officially the Republic of T\xFCrkiye, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe.",capital:""});P({lat:10.691803,lng:-61.222503,countries:"Trinidad and Tobago",populations:"1.526 million ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/trinidad-and-tobago/flag-800.png",infos:"Trinidad and Tobago is a dual-island Caribbean nation near Venezuela, with distinctive Creole traditions and cuisines.",capital:""});P({lat:-7.109535,lng:177.64933,countries:"Tuvalu",populations:"11,204",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/tuvalu/flag-800.png",infos:"Tuvalu, in the South Pacific, is an independent island nation within the British Commonwealth",capital:""});P({lat:23.69781,lng:120.960515,countries:"Taiwan",populations:"23.57 million",where:"East Asia",flags:"https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-large.png",infos:"Taiwan, officially the Republic of China, is a country in East Asia",capital:""});P({lat:-6.369028,lng:34.888822,countries:"Tanzania",populations:"63.59 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/tanzania/flag-800.png",infos:"Tanzania is an East African country known for its vast wilderness areas.",capital:""});P({lat:48.379433,lng:31.16558,countries:"Ukraine",populations:"43.79 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/ukraine/flag-800.png",infos:"Ukraine is a country in Eastern Europe.",capital:""});P({lat:1.373333,lng:32.290275,countries:"Uganda",populations:"45.85 million ",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/uganda/flag-800.png",infos:"Uganda is a landlocked country in East Africa whose diverse landscape encompasses the snow-capped Rwenzori Mountains and immense Lake Victoria.",capital:""});P({lat:-32.522779,lng:-55.765835,countries:"Uruguay",populations:"3.426 million",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",infos:"Uruguay is a South American country known for its verdant interior and beach-lined coast.",capital:""});P({lat:41.377491,lng:64.585262,countries:"Uzbekistan",populations:"34.92 million",where:"Central Asia",flags:"https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-large.png",infos:"Uzbekistan is a Central Asian nation and former Soviet republic.",capital:""});P({lat:41.902916,lng:12.453389,countries:"Vatican City",populations:"825",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/vatican-city-flag-png-large.png",infos:"Vatican City, a city-state surrounded by Rome, Italy, is the headquarters of the Roman Catholic Church.",capital:""});P({lat:12.984305,lng:-61.287228,countries:"Saint Vincent and the Grenadines",populations:"104,332 ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/saint-vincent-and-the-grenadines/flag-800.png",infos:"St. Vincent and the Grenadines is a southern Caribbean nation comprising a main island, St. Vincent, and a chain of smaller islands",capital:""});P({lat:6.42375,lng:-66.58973,countries:"Venezuela",populations:"28.2 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/venezuela/flag-800.png",infos:"Venezuela is a country on the northern coast of South America with diverse natural attractions. Along its Caribbean coast are tropical resort islands including Isla de Margarita and the Los Roques archipelago.",capital:""});P({lat:18.420695,lng:-64.639968,countries:"British Virgin Islands",populations:"31,122",where:"Territory",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAABd1BMVEUBIWn////IEC7HACfSXWTw0NLGAB/hmp4AYSkAAFsAGmbEAAwAAF+8vMrp6+8AEGN6fZv0293DAAAADWMAHmgtYjfGyNWamrXo6OiQkK/npKcAXRsAXClBSH//xyzK0t4AAFEuOXiZpZk1QHiBF01FTX/UY2wAAEze4Of46erNO0rVDSVKcE3bf4aymidrbZAAVgmqrsGSaIX/yhzRVVvdYmOyuK49aEEfXzAvWjFVTBx2eR9JTA1sSwkiWiFFUSImZyhlcyTQAACiKBNVfis8byrHinKaVyuYSQB2Rx+UOxs3XiWseR3ktimmhR/suaxaXSPHoyeViyfRn491MgBTaSWUkoOiah2WfiCDXSB7kn3Z09L/zr2gi3GPiGpic02rnYS0IACQXB1zcU+ZOQo+YRN8flF+ADZ2ZSEARgCBRB1rVB64kiFOQACJFQBdZZdrWgDYyafawIDQxLXRsV+WeC+wjkNjfmW7rIWnp6nImACQbgDftUhrF03pAAAFfklEQVRYhe2Y/VfaVhjHDVp6k0BAsAFMiApqayuUmA6wmZRM7TppwODYGGlt99KtL24UsKuif/yeG0ggkHTnDOgv6/ccj3m59/nc+7zce8Pc5iKB5Y+T1NywfH7iptfj8XhvEn6f7Q1FbrDEsmc+tLBIzk0imu7D2bhvGO6GpnzxFQDT9AJ0W50IvTxPhxZM+NDMndEwYwBbXSZDs9YUMHzDgjuhTbDlqMkcblij6ZBpLdmHj6MpMmm4OjQY50RkbDE+apFyQFNuY5wQvrFicztOODvallz2yEwF7h1OOHIITdqTy56Pk8N9I4FMDqGTvXFZrvZNB0xaup2EbKdDoQc3DAJjoeEqFDLH5F+7PegyGZoZ0h0wvbW11WMQFho/29rqPWPuDHdYnQhNuMtCu2oy9IK77nqw7ro3+CowEXreXZ6e3BvcWxozF7ArbMkhMz0TyAEdiZmK2LUxzp4qemktu91XLpe7hZXH4vndyHhwpoxOcOghJyNDX+8VECo8KipwfSs2jqbd5TXse90bfOOEfrh/oBzyQCs8/vYJQt8dHchF3hF9w10pnGjzqU+0GF1TMLr0NK2my0WE8pXHT/Lo+GlaS5cd0VOta8Phh6pQBU8jvnLyPfxTBKFackQHB7ofYQyDi6nUZmpxFL28mUotE0Tk/lCPUXMGepev8Uasf6gkMqjA1/CtE9qsQJKEJdwAL9Ah4LGshWb9vRcPQrRnmViBXc3sNGpsKZngILgKBBdxCYJhEtzRwwMFOce6Jzgv9MGbIZoG+xurQzvXqvlywYS7bF1UPMEd/1jVqvUiykWjBFPhfqqn09W6K9o43pq258E2nEBsRwXKcok5Mmc4RiNZENIlxDUIndCf5VAVYl10QcNWbdqFgjLtjhyQbKPDM3fctA00X5Kxv5/repSpnCJeKbnEeuDq/oz7Exo7Ftoaep1njtG4kCHHXjzTo1Hm+cuf8/KBC9qyR/fCaE7G4TAMB7RBY2OUo2wj1r8oVVkuPPsV0PrJ6W9KVVFk97p2CKHjJ8BoUqw6oIsQXO3V8xf5KBGNVriaJghnznVtT67Bc5cPH3vCOc0a8bLMvzjJNGCRqGyD66uyi8Mx2OsZDx1G38N78ujn3mDmm2NruIGGdbvw+ynX0Bm9kkFvHx24bR87f6yvr4viWM4EguLOOtaOOLpoAVw0tDNqro/eP1YULhEFNIfevlPkQ8V5NYO/pbBDpQT6zyifQ1n4DI296KNfa6razTIQ7I8Ix1p1Rk9VPfQhX1O1jE4AGt+W6y6xnjp6vwCFzPNvGIzWM293D5TPg25w+0q1VlPQGwLQhM4dvVOUonNxTR3dL2Q+CktKlOEVuNWcl5Spo1HBKOQMbFww7wRXODv7HA439uu8coj6aAj2n7uHNbjdnjV6jmS5/WO5hkqA1jGa+AvqGhUz2bnxM/tUFVhrJt5DUUNwecJAM+/TcFtvRILh2ZKbrbZ4+UrTSnAojHb0qN5p4Bp/1fBftGO+fzfw38lrHUE6j/hzeEVDH2Tu1t+v8SV/KbYkqR2cHTtwPysImC0mMkDsnUoh3z6yYkeCFxeRmbGpjnAGiCv1Msg2MlwfnMuKYrsLZE1tx6f4C4xNgZdSF9gfVOEiFmM/ZjA4fynGOmq5rgpaWWo3Z4YOQpK1u5ogvVcvIiy7zeWzK7GX51eqtNc9h0QTZ5fk4eQG2eyoUl1Ty93zVue01b5WJbWsSWorRjabs0xxigI82y5L4HThSjhTJem1KkhX1zpgqVl5e4AnY/p5V92TPghlGIC2J1x3ItP8he9TCgeCbOtauJK63a5wfZ6Nzc3S03YtBXzxYCTbaXWykWDTF57x6j0iKhA2Tm/hwGdy9Rd90Rf93/UPzVsFFJ7DftgAAAAASUVORK5CYII=",infos:"The British Virgin Islands, part of a volcanic archipelago in the Caribbean, is a British overseas territory. Comprising 4 main islands and many smaller ones, it's known for its reef-lined beaches and as a yachting destination",capital:""});P({lat:18.335765,lng:-64.896335,countries:"U.S. Virgin Islands",populations:"105,870",where:"Territory",flags:"https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",infos:"The U.S. Virgin Islands are a group of Caribbean islands and islets. A U.S. territory",capital:""});P({lat:14.058324,lng:108.277199,countries:"Vietnam",populations:"97.47 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/vietnam/flag-800.png",infos:"Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities.",capital:""});P({lat:-15.376706,lng:166.959158,countries:"Vanuatu",populations:"319,137",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/vanuatu-flag-jpg-xl.jpg",infos:"Vanuatu is a South Pacific Ocean nation made up of roughly 80 islands that stretch 1,300 kilometers.",capital:""});P({lat:-13.768752,lng:177.156097,countries:"	Wallis and Futuna",populations:" 15,289 ",where:"Territory",flags:"https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",infos:"Wallis and Futuna, officially the Territory of the Wallis and Futuna Islands, is a French island collectivity in the South Pacific, situated between Tuvalu to the northwest, Fiji to the southwest, Tonga to the southeast, Samoa to the east, and Tokelau to the northeast",capital:""});P({lat:-13.759029,lng:-172.104629,countries:"Samoa",populations:"218,764",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/samoa-flag-png-large.png",infos:"Samoa, officially the Independent State of Samoa and until 1997 known as Western Samoa, is a Polynesian island country consisting of two main islands; two smaller, inhabited islands; and several smaller, uninhabited islands, including the Aleipata Islands.",capital:""});P({lat:42.602636,lng:20.902977,countries:"Kosovo",populations:"1.873 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/kosovo-flag-png-large.png",infos:"Kosovo, officially the Republic of Kosovo, is a partially recognised state in Southeast Europe.",capital:""});P({lat:15.552727,lng:48.516388,countries:"Yemen",populations:"32.98 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/yemen-flag-png-large.png",infos:"Yemen, officially the Republic of Yemen, is a country in Western Asia.",capital:""});P({lat:-12.8275,lng:45.166244,countries:"Mayotte",populations:"270,372",where:"Departments of France",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAFVBMVEX///8AI5XtKTl1e7fzfYTtFisADJAUEbSdAAAAeElEQVR4nO3OOQEAIAwEsOP1L7kOGMqaKEhG3135sM/si7a2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tvZTAaLOXCyoPt13AAAAAElFTkSuQmCC",infos:"Mayotte is an archipelago in the Indian Ocean between Madagascar and the coast of Mozambique.",capital:""});P({lat:-30.559482,lng:22.937506,countries:"South Africa",populations:"59.39 million",where:"South Africa",flags:"https://cdn.countryflags.com/thumbs/south-africa/flag-800.png",infos:"South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game",capital:""});P({lat:-13.133897,lng:27.849332,countries:"Zambia",populations:"19.47 million",where:"Africa",flags:"https://cdn.countryflags.com/thumbs/zambia/flag-800.png",infos:"Zambia, in southern Africa, is a landlocked country of rugged terrain and diverse wildlife, with many parks and safari areas.",capital:""});P({lat:-19.015438,lng:29.154857,countries:"Zimbabwe",populations:"15.99 million",where:"Africa",flags:"https://www.countryflags.com/wp-content/uploads/zimbabwe-flag-png-large.png",infos:"Zimbabwe is a landlocked country in southern Africa known for its dramatic landscape and diverse wildlife, much of it within parks, reserves and safari areas.",capital:""});vs.position.z=25;Ou.rotation.y=-Math.PI/2;Ge.rotation.offset={x:0,y:0};const Be={x:void 0,y:void 0,down:!1,xPrev:void 0,yPrev:void 0},cc=new qg,Bu=()=>{requestAnimationFrame(Bu),Ps.render(Ir,vs),cc.setFromCamera(Be,vs);const o=cc.intersectObjects(Ge.children.filter(t=>t.geometry.type==="BoxGeometry"));Ge.children.forEach(t=>{t.material.opacity=.3}),ar.set(io,{display:"none"});for(let t=0;t<o.length;t++){const e=o[t].object;e.material.opacity=2,ar.set(io,{display:"block"}),d0.innerHTML=`Country ${e.countries}`,p0.innerHTML=`Population: ${e.populations}`,m0.innerHTML=`Location: ${e.where}`,lc.src=`${e.flags}`,_0.appendChild(lc),g0.innerHTML=`Description: ${e.infos}`,x0.innerHTML=`Capital city: ${e.capital}`}Ps.render(Ir,vs),Eo.rotation.y+=.05};Bu();Fr.addEventListener("mousedown",({clientX:o,clientY:t})=>{Be.down=!0,Be.xPrev=o,Be.yPrev=t});addEventListener("mousemove",o=>{if(o.preventDefault(),Be.x=(o.clientX-innerWidth/2)/(innerWidth/2)*2-1,Be.y=-(o.clientY/innerHeight)*2+1,ar.set(io,{x:o.clientX,y:o.clientY}),Be.down){const t=o.clientX-Be.xPrev,e=o.clientY-Be.yPrev;Be.xPrev=o.clientX,Be.yPrev=o.clientY,Ge.rotation.offset.x+=e*.005,Ge.rotation.offset.y+=t*.005,ar.to(Ge.rotation,{y:Ge.rotation.offset.y,x:Ge.rotation.offset.x,duration:2})}});addEventListener("mouseup",o=>{Be.down=!1});
