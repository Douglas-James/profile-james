(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="144",Du=0,xo=1,Ru=2,Zl=1,Iu=2,ur=3,Xi=0,Le=1,Nn=2,kn=0,ki=1,Sa=2,vo=3,Mo=4,Fu=5,Ni=100,Ou=101,Nu=102,yo=103,So=104,zu=200,Uu=201,Bu=202,ku=203,$l=204,Kl=205,Gu=206,Vu=207,Wu=208,Hu=209,Xu=210,qu=0,Yu=1,ju=2,ba=3,Zu=4,$u=5,Ku=6,Ju=7,Jl=0,Qu=1,th=2,bn=0,eh=1,nh=2,ih=3,rh=4,sh=5,Ql=300,qi=301,Yi=302,wa=303,Ta=304,bs=306,Ea=1e3,$e=1001,Aa=1002,me=1003,bo=1004,wo=1005,Ue=1006,ah=1007,ws=1008,fi=1009,oh=1010,lh=1011,tc=1012,ch=1013,ii=1014,ri=1015,yr=1016,uh=1017,hh=1018,Gi=1020,fh=1021,dh=1022,an=1023,ph=1024,mh=1025,oi=1026,ji=1027,gh=1028,_h=1029,xh=1030,vh=1031,Mh=1033,Fs=33776,Os=33777,Ns=33778,zs=33779,To=35840,Eo=35841,Ao=35842,Co=35843,yh=36196,Lo=37492,Po=37496,Do=37808,Ro=37809,Io=37810,Fo=37811,Oo=37812,No=37813,zo=37814,Uo=37815,Bo=37816,ko=37817,Go=37818,Vo=37819,Wo=37820,Ho=37821,Xo=36492,di=3e3,Vt=3001,Sh=3200,bh=3201,wh=0,Th=1,xn="srgb",si="srgb-linear",Us=7680,Eh=519,qo=35044,Yo="300 es",Ca=1035;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,jo=180/Math.PI;function Lr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[o&255]+ae[o>>8&255]+ae[o>>16&255]+ae[o>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function Ae(o,t,e){return Math.max(t,Math.min(e,o))}function Ah(o,t){return(o%t+t)%t}function ks(o,t,e){return(1-e)*o+e*t}function Zo(o){return(o&o-1)===0&&o!==0}function La(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Br(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function be(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],v=i[1],S=i[4],y=i[7],M=i[2],E=i[5],C=i[8];return r[0]=a*d+s*v+l*M,r[3]=a*p+s*S+l*E,r[6]=a*_+s*y+l*C,r[1]=c*d+u*v+h*M,r[4]=c*p+u*S+h*E,r[7]=c*_+u*y+h*C,r[2]=f*d+m*v+g*M,r[5]=f*p+m*S+g*E,r[8]=f*_+m*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=u*a-s*c,f=s*l-u*r,m=c*r-a*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*c-u*n)*d,t[2]=(s*n-i*a)*d,t[3]=f*d,t[4]=(u*e-i*l)*d,t[5]=(i*r-s*e)*d,t[6]=m*d,t[7]=(n*l-c*e)*d,t[8]=(a*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],s=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*s+n*u,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*s+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function ec(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Sr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function li(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Gs={[xn]:{[si]:li},[si]:{[xn]:cs}},qe={legacyMode:!0,get workingColorSpace(){return si},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Gs[t]&&Gs[t][e]!==void 0){const n=Gs[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={r:0,g:0,b:0},Ye={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Vs(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Gr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=si){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=si){if(t=Ah(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vs(a,r,t+1/3),this.g=Vs(a,r,t),this.b=Vs(a,r,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qe.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qe.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qe.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=xn){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return qe.fromWorkingColorSpace(Gr(this,$t),t),Ae($t.r*255,0,255)<<16^Ae($t.g*255,0,255)<<8^Ae($t.b*255,0,255)<<0}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=si){qe.fromWorkingColorSpace(Gr(this,$t),e);const n=$t.r,i=$t.g,r=$t.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=si){return qe.fromWorkingColorSpace(Gr(this,$t),e),t.r=$t.r,t.g=$t.g,t.b=$t.b,t}getStyle(t=xn){return qe.fromWorkingColorSpace(Gr(this,$t),t),t!==xn?`color(${t} ${$t.r} ${$t.g} ${$t.b})`:`rgb(${$t.r*255|0},${$t.g*255|0},${$t.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ye),Ye.h+=t,Ye.s+=e,Ye.l+=n,this.setHSL(Ye.h,Ye.s,Ye.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ye),t.getHSL(kr);const n=ks(Ye.h,kr.h,e),i=ks(Ye.s,kr.s,e),r=ks(Ye.l,kr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}zt.NAMES=nc;let Mi;class ic{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=Sr("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class rc{constructor(t=null){this.isSource=!0,this.uuid=Lr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Ws(i[a].image)):r.push(Ws(i[a]))}else r=Ws(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ws(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ic.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;class He extends ir{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=$e,i=$e,r=Ue,a=ws,s=an,l=fi,c=1,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Lr(),this.name="",this.source=new rc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ql;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(m+1)/2,M=(_+1)/2,E=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return S>y&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=C/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=x/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends ir{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ue,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,v=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),E=Math.atan2(M,_*v);p=Math.sin(p*E)/M,s=Math.sin(s*E)/M}const y=s*v;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,h=h*p+d*y,p===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-s*m,t[e+2]=c*g+u*m+s*f-l*h,t[e+3]=u*g-s*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,h=l*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new O,$o=new Pr;class Dr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)jn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox),Xs.applyMatrix4(t.matrixWorld),this.union(Xs);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Vr.subVectors(this.max,ar),yi.subVectors(t.a,ar),Si.subVectors(t.b,ar),bi.subVectors(t.c,ar),Ln.subVectors(Si,yi),Pn.subVectors(bi,Si),Zn.subVectors(yi,bi);let e=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!qs(e,yi,Si,bi,Vr)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,yi,Si,bi,Vr))?!1:(Wr.crossVectors(Ln,Pn),e=[Wr.x,Wr.y,Wr.z],qs(e,yi,Si,bi,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,Xs=new Dr,yi=new O,Si=new O,bi=new O,Ln=new O,Pn=new O,Zn=new O,ar=new O,Vr=new O,Wr=new O,$n=new O;function qs(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){$n.fromArray(o,r);const s=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Ph=new Dr,Ko=new O,Hr=new O,Ys=new O;class Ts{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ph.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Ys.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Hr.set(0,0,1).multiplyScalar(t.radius):Hr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ko.copy(t.center).add(Hr)),this.expandByPoint(Ko.copy(t.center).sub(Hr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new O,js=new O,Xr=new O,Dn=new O,Zs=new O,qr=new O,$s=new O;class ac{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.direction).multiplyScalar(e).add(this.origin),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){js.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(js);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),s=Dn.dot(this.direction),l=-Dn.dot(Xr),c=Dn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-s,f=a*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Xr).multiplyScalar(f).add(js),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(s=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,r){Zs.subVectors(e,t),qr.subVectors(n,t),$s.crossVectors(Zs,qr);let a=this.direction.dot($s),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=s*this.direction.dot(qr.crossVectors(Dn,qr));if(l<0)return null;const c=s*this.direction.dot(Zs.cross(Dn));if(c<0||l+c>a)return null;const u=-s*Dn.dot($s);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-d*c,e[9]=-s*l,e[2]=d-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f+d*s,e[4]=g*s-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=d+f*s,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f-d*s,e[4]=-a*h,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=d-f*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+d,e[1]=l*h,e[5]=d*c+f,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+d,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=s*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Rh)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),Rn.crossVectors(n,we),Rn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),Rn.crossVectors(n,we)),Rn.normalize(),Yr.crossVectors(we,Rn),i[0]=Rn.x,i[4]=Yr.x,i[8]=we.x,i[1]=Rn.y,i[5]=Yr.y,i[9]=we.y,i[2]=Rn.z,i[6]=Yr.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],v=n[3],S=n[7],y=n[11],M=n[15],E=i[0],C=i[4],x=i[8],w=i[12],L=i[1],G=i[5],K=i[9],N=i[13],D=i[2],U=i[6],q=i[10],Y=i[14],B=i[3],I=i[7],z=i[11],J=i[15];return r[0]=a*E+s*L+l*D+c*B,r[4]=a*C+s*G+l*U+c*I,r[8]=a*x+s*K+l*q+c*z,r[12]=a*w+s*N+l*Y+c*J,r[1]=u*E+h*L+f*D+m*B,r[5]=u*C+h*G+f*U+m*I,r[9]=u*x+h*K+f*q+m*z,r[13]=u*w+h*N+f*Y+m*J,r[2]=g*E+d*L+p*D+_*B,r[6]=g*C+d*G+p*U+_*I,r[10]=g*x+d*K+p*q+_*z,r[14]=g*w+d*N+p*Y+_*J,r[3]=v*E+S*L+y*D+M*B,r[7]=v*C+S*G+y*U+M*I,r[11]=v*x+S*K+y*q+M*z,r[15]=v*w+S*N+y*Y+M*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+e*c*h-e*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-e*l*h+e*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],v=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,S=g*f*c-u*p*c-g*l*m+a*p*m+u*l*_-a*f*_,y=u*d*c-g*h*c+g*s*m-a*d*m-u*s*_+a*h*_,M=g*h*l-u*d*l-g*s*f+a*d*f+u*s*p-a*h*p,E=e*v+n*S+i*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=v*C,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,t[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,t[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,t[4]=S*C,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*C,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*_-e*l*_)*C,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*m+e*l*m)*C,t[8]=y*C,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*C,t[10]=(a*d*r-g*s*r+g*n*c-e*d*c-a*n*_+e*s*_)*C,t[11]=(u*s*r-a*h*r-u*n*c+e*h*c+a*n*m-e*s*m)*C,t[12]=M*C,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*C,t[14]=(g*s*i-a*d*i-g*n*l+e*d*l+a*n*p-e*s*p)*C,t[15]=(a*h*i-u*s*i+u*n*l-e*h*l-a*n*f+e*s*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,h=s+s,f=r*c,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,v=l*c,S=l*u,y=l*h,M=n.x,E=n.y,C=n.z;return i[0]=(1-(d+_))*M,i[1]=(m+y)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(m-y)*E,i[5]=(1-(f+_))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+S)*C,i[9]=(p-v)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),s=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const c=1/r,u=1/a,h=1/s;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new O,je=new te,Dh=new O(0,0,0),Rh=new O(1,1,1),Rn=new O,Yr=new O,we=new O,Jo=new te,Qo=new Pr;class Rr{constructor(t=0,e=0,n=0,i=Rr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Rr.DefaultOrder="XYZ";Rr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const tl=new O,Ti=new Pr,mn=new te,jr=new O,or=new O,Fh=new O,Oh=new Pr,el=new O(1,0,0),nl=new O(0,1,0),il=new O(0,0,1),Nh={type:"added"},rl={type:"removed"};class _e extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();const t=new O,e=new Rr,n=new Pr,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new ke}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_e.DefaultMatrixWorldAutoUpdate,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(or,jr,this.up):mn.lookAt(jr,or,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(mn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(rl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DefaultUp=new O(0,1,0);_e.DefaultMatrixAutoUpdate=!0;_e.DefaultMatrixWorldAutoUpdate=!0;const Ze=new O,gn=new O,Ks=new O,_n=new O,Ei=new O,Ai=new O,sl=new O,Js=new O,Qs=new O,ta=new O;class yn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),gn.subVectors(n,e),Ks.subVectors(t,e);const a=Ze.dot(Ze),s=Ze.dot(gn),l=Ze.dot(Ks),c=gn.dot(gn),u=gn.dot(Ks),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,_n),l.set(0,0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(s,_n.z),l}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),gn.subVectors(t,e),Ze.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ze.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return yn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Ei.subVectors(i,n),Ai.subVectors(r,n),Js.subVectors(t,n);const l=Ei.dot(Js),c=Ai.dot(Js);if(l<=0&&c<=0)return e.copy(n);Qs.subVectors(t,i);const u=Ei.dot(Qs),h=Ai.dot(Qs);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ei,a);ta.subVectors(t,r);const m=Ei.dot(ta),g=Ai.dot(ta);if(g>=0&&m<=g)return e.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(Ai,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return sl.subVectors(r,i),s=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(sl,s);const _=1/(p+d+f);return a=d*_,s=f*_,e.copy(n).addScaledVector(Ei,a).addScaledVector(Ai,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let zh=0;class Ir extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=ki,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Za extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jt=new O,Zr=new Nt;class on{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=qo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Br(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Br(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Br(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Je extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uh=0;const Oe=new te,ea=new _e,Ci=new O,Te=new Dr,lr=new Dr,Qt=new O;class un extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?cc:lc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];lr.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(Te.min,lr.min),Te.expandByPoint(Qt),Qt.addVectors(Te.max,lr.max),Te.expandByPoint(Qt)):(Te.expandByPoint(lr.min),Te.expandByPoint(lr.max))}Te.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Qt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Qt));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Qt.fromBufferAttribute(s,c),l&&(Ci.fromBufferAttribute(t,c),Qt.add(Ci)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new O,u[L]=new O;const h=new O,f=new O,m=new O,g=new Nt,d=new Nt,p=new Nt,_=new O,v=new O;function S(L,G,K){h.fromArray(i,L*3),f.fromArray(i,G*3),m.fromArray(i,K*3),g.fromArray(a,L*2),d.fromArray(a,G*2),p.fromArray(a,K*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);!isFinite(N)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),v.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(N),c[L].add(_),c[G].add(_),c[K].add(_),u[L].add(v),u[G].add(v),u[K].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,G=y.length;L<G;++L){const K=y[L],N=K.start,D=K.count;for(let U=N,q=N+D;U<q;U+=3)S(n[U+0],n[U+1],n[U+2])}const M=new O,E=new O,C=new O,x=new O;function w(L){C.fromArray(r,L*3),x.copy(C);const G=c[L];M.copy(G),M.sub(C.multiplyScalar(C.dot(G))).normalize(),E.crossVectors(x,G);const N=E.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=N}for(let L=0,G=y.length;L<G;++L){const K=y[L],N=K.start,D=K.count;for(let U=N,q=N+D;U<q;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,a=new O,s=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qt.fromBufferAttribute(t,e),Qt.normalize(),t.setXYZ(e,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new te,Li=new ac,na=new Ts,In=new O,Fn=new O,On=new O,ia=new O,ra=new O,sa=new O,$r=new O,Kr=new O,Jr=new O,Qr=new Nt,ts=new Nt,es=new Nt,aa=new O,ns=new O;class Ke extends _e{constructor(t=new un,e=new Za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),t.ray.intersectsSphere(na)===!1)||(al.copy(r).invert(),Li.copy(t.ray).applyMatrix4(al),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,E=y;M<E;M+=3){const C=s.getX(M),x=s.getX(M+1),w=s.getX(M+2);a=is(this,v,t,Li,l,c,u,h,f,C,x,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const S=s.getX(_),y=s.getX(_+1),M=s.getX(_+2);a=is(this,i,t,Li,l,c,u,h,f,S,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],v=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,E=y;M<E;M+=3){const C=M,x=M+1,w=M+2;a=is(this,v,t,Li,l,c,u,h,f,C,x,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){const S=_,y=_+1,M=_+2;a=is(this,i,t,Li,l,c,u,h,f,S,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function Bh(o,t,e,n,i,r,a,s){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side!==Nn,s),l===null)return null;ns.copy(s),ns.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(ns);return c<e.near||c>e.far?null:{distance:c,point:ns.clone(),object:o}}function is(o,t,e,n,i,r,a,s,l,c,u,h){In.fromBufferAttribute(i,c),Fn.fromBufferAttribute(i,u),On.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){$r.set(0,0,0),Kr.set(0,0,0),Jr.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(ia.fromBufferAttribute(_,c),ra.fromBufferAttribute(_,u),sa.fromBufferAttribute(_,h),a?($r.addScaledVector(ia,p),Kr.addScaledVector(ra,p),Jr.addScaledVector(sa,p)):($r.addScaledVector(ia.sub(In),p),Kr.addScaledVector(ra.sub(Fn),p),Jr.addScaledVector(sa.sub(On),p)))}In.add($r),Fn.add(Kr),On.add(Jr)}o.isSkinnedMesh&&(o.boneTransform(c,In),o.boneTransform(u,Fn),o.boneTransform(h,On));const m=Bh(o,t,e,n,In,Fn,On,aa);if(m){s&&(Qr.fromBufferAttribute(s,c),ts.fromBufferAttribute(s,u),es.fromBufferAttribute(s,h),m.uv=yn.getUV(aa,In,Fn,On,Qr,ts,es,new Nt)),l&&(Qr.fromBufferAttribute(l,c),ts.fromBufferAttribute(l,u),es.fromBufferAttribute(l,h),m.uv2=yn.getUV(aa,In,Fn,On,Qr,ts,es,new Nt));const g={a:c,b:u,c:h,normal:new O,materialIndex:0};yn.getNormal(In,Fn,On,g.normal),m.face=g}return m}class Fr extends un{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(d,p,_,v,S,y,M,E,C,x,w){const L=y/C,G=M/x,K=y/2,N=M/2,D=E/2,U=C+1,q=x+1;let Y=0,B=0;const I=new O;for(let z=0;z<q;z++){const J=z*G-N;for(let Z=0;Z<U;Z++){const $=Z*L-K;I[d]=$*v,I[p]=J*S,I[_]=D,c.push(I.x,I.y,I.z),I[d]=0,I[p]=0,I[_]=E>0?1:-1,u.push(I.x,I.y,I.z),h.push(Z/C),h.push(1-z/x),Y+=1}}for(let z=0;z<x;z++)for(let J=0;J<C;J++){const Z=f+J+U*z,$=f+J+U*(z+1),it=f+(J+1)+U*(z+1),dt=f+(J+1)+U*z;l.push(Z,$,dt),l.push($,it,dt),B+=6}s.addGroup(m,B,w),m+=B,f+=Y}}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function oe(o){const t={};for(let e=0;e<o.length;e++){const n=Zi(o[e]);for(const i in n)t[i]=n[i]}return t}function kh(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const Gh={clone:Zi,merge:oe};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends uc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=90,Di=1;class Hh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Be(Pi,Di,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const r=new Be(Pi,Di,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(-1,0,0)),this.add(r);const a=new Be(Pi,Di,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new O(0,1,0)),this.add(a);const s=new Be(Pi,Di,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new O(0,-1,0)),this.add(s);const l=new Be(Pi,Di,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new Be(Pi,Di,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=bn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class hc extends He{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xh extends pi{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fr(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:kn});r.uniforms.tEquirect.value=e;const a=new Ke(i,r),s=e.minFilter;return e.minFilter===ws&&(e.minFilter=Ue),new Hh(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const oa=new O,qh=new O,Yh=new ke;class Qn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oa.subVectors(n,e).cross(qh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yh.getNormalMatrix(t),i=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ts,rs=new O;class fc{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],v=n[14],S=n[15];return e[0].setComponents(s-i,h-l,d-f,S-p).normalize(),e[1].setComponents(s+i,h+l,d+f,S+p).normalize(),e[2].setComponents(s+r,h+c,d+m,S+_).normalize(),e[3].setComponents(s-r,h-c,d-m,S-_).normalize(),e[4].setComponents(s-a,h-u,d-g,S-v).normalize(),e[5].setComponents(s+a,h+u,d+g,S+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(rs.x=i.normal.x>0?t.max.x:t.min.x,rs.y=i.normal.y>0?t.max.y:t.min.y,rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function jh(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class $a extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=t/s,f=e/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const v=_*f-a;for(let S=0;S<c;S++){const y=S*h-r;g.push(y,-v,0),d.push(0,0,1),p.push(S/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<s;v++){const S=v+c*_,y=v+c*(_+1),M=v+1+c*(_+1),E=v+1+c*_;m.push(S,y,E),m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}static fromJSON(t){return new $a(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef="vec3 transformed = vec3( position );",nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
}`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Uf=`uniform bool receiveShadow;
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
#endif`,Bf=`#if defined( USE_ENVMAP )
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Hf=`PhysicalMaterial material;
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
#endif`,Xf=`struct PhysicalMaterial {
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
}`,qf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
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
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
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
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ud=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Wd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,qd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#include <envmap_common_pars_fragment>
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
}`,Jd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
}`,tp=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rp=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define LAMBERT
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
}`,up=`#define MATCAP
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
}`,hp=`#define MATCAP
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
}`,fp=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,pp=`#define PHONG
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
}`,mp=`#define PHONG
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
}`,gp=`#define STANDARD
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
}`,_p=`#define STANDARD
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
}`,xp=`#define TOON
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
}`,vp=`#define TOON
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
}`,Mp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,wp=`uniform float rotation;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,bt={alphamap_fragment:Zh,alphamap_pars_fragment:$h,alphatest_fragment:Kh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:ff,color_pars_vertex:df,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:yf,encodings_fragment:Sf,encodings_pars_fragment:bf,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Ef,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Lf,fog_pars_vertex:Pf,fog_fragment:Df,fog_pars_fragment:Rf,gradientmap_pars_fragment:If,lightmap_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:zf,lights_pars_begin:Uf,lights_toon_fragment:kf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:jf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Jf,map_fragment:Qf,map_pars_fragment:td,map_particle_fragment:ed,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:rd,morphcolor_vertex:sd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:hd,normal_pars_vertex:fd,normal_vertex:dd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,output_fragment:vd,packing:Md,premultiplied_alpha_fragment:yd,project_vertex:Sd,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Cd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Pd,skinbase_vertex:Dd,skinning_pars_vertex:Rd,skinning_vertex:Id,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Nd,tonemapping_fragment:zd,tonemapping_pars_fragment:Ud,transmission_fragment:Bd,transmission_pars_fragment:kd,uv_pars_fragment:Gd,uv_pars_vertex:Vd,uv_vertex:Wd,uv2_pars_fragment:Hd,uv2_pars_vertex:Xd,uv2_vertex:qd,worldpos_vertex:Yd,background_vert:jd,background_frag:Zd,cube_vert:$d,cube_frag:Kd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:tp,distanceRGBA_frag:ep,equirect_vert:np,equirect_frag:ip,linedashed_vert:rp,linedashed_frag:sp,meshbasic_vert:ap,meshbasic_frag:op,meshlambert_vert:lp,meshlambert_frag:cp,meshmatcap_vert:up,meshmatcap_frag:hp,meshnormal_vert:fp,meshnormal_frag:dp,meshphong_vert:pp,meshphong_frag:mp,meshphysical_vert:gp,meshphysical_frag:_p,meshtoon_vert:xp,meshtoon_frag:vp,points_vert:Mp,points_frag:yp,shadow_vert:Sp,shadow_frag:bp,sprite_vert:wp,sprite_frag:Tp},et={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ke},uv2Transform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}}},rn={basic:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:oe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:oe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:oe([et.points,et.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:oe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:oe([et.common,et.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:oe([et.sprite,et.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},cube:{uniforms:oe([et.envmap,{opacity:{value:1}}]),vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:oe([et.common,et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:oe([et.lights,et.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};rn.physical={uniforms:oe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};function Ep(o,t,e,n,i,r){const a=new zt(0);let s=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=t.get(v));const S=o.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?g(a,s):v&&v.isColor&&(g(v,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bs)?(c===void 0&&(c=new Ke(new Fr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Zi(rn.cube.uniforms),vertexShader:rn.cube.vertexShader,fragmentShader:rn.cube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ke(new $a(2,2),new wn({name:"BackgroundMaterial",uniforms:Zi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:m}}function Ap(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(D,U,q,Y,B){let I=!1;if(a){const z=d(Y,q,U);c!==z&&(c=z,m(c.object)),I=_(D,Y,q,B),I&&v(D,Y,q,B)}else{const z=U.wireframe===!0;(c.geometry!==Y.id||c.program!==q.id||c.wireframe!==z)&&(c.geometry=Y.id,c.program=q.id,c.wireframe=z,I=!0)}B!==null&&e.update(B,34963),(I||u)&&(u=!1,x(D,U,q,Y),B!==null&&o.bindBuffer(34963,e.get(B).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,U,q){const Y=q.wireframe===!0;let B=s[D.id];B===void 0&&(B={},s[D.id]=B);let I=B[U.id];I===void 0&&(I={},B[U.id]=I);let z=I[Y];return z===void 0&&(z=p(f()),I[Y]=z),z}function p(D){const U=[],q=[],Y=[];for(let B=0;B<i;B++)U[B]=0,q[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function _(D,U,q,Y){const B=c.attributes,I=U.attributes;let z=0;const J=q.getAttributes();for(const Z in J)if(J[Z].location>=0){const it=B[Z];let dt=I[Z];if(dt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(dt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(dt=D.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;z++}return c.attributesNum!==z||c.index!==Y}function v(D,U,q,Y){const B={},I=U.attributes;let z=0;const J=q.getAttributes();for(const Z in J)if(J[Z].location>=0){let it=I[Z];it===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),B[Z]=dt,z++}c.attributes=B,c.attributesNum=z,c.index=Y}function S(){const D=c.newAttributes;for(let U=0,q=D.length;U<q;U++)D[U]=0}function y(D){M(D,0)}function M(D,U){const q=c.newAttributes,Y=c.enabledAttributes,B=c.attributeDivisors;q[D]=1,Y[D]===0&&(o.enableVertexAttribArray(D),Y[D]=1),B[D]!==U&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),B[D]=U)}function E(){const D=c.newAttributes,U=c.enabledAttributes;for(let q=0,Y=U.length;q<Y;q++)U[q]!==D[q]&&(o.disableVertexAttribArray(q),U[q]=0)}function C(D,U,q,Y,B,I){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(D,U,q,B,I):o.vertexAttribPointer(D,U,q,Y,B,I)}function x(D,U,q,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const B=Y.attributes,I=q.getAttributes(),z=U.defaultAttributeValues;for(const J in I){const Z=I[J];if(Z.location>=0){let $=B[J];if($===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const it=$.normalized,dt=$.itemSize,j=e.get($);if(j===void 0)continue;const Dt=j.buffer,mt=j.type,_t=j.bytesPerElement;if($.isInterleavedBufferAttribute){const lt=$.data,Ot=lt.stride,St=$.offset;if(lt.isInstancedInterleavedBuffer){for(let pt=0;pt<Z.locationSize;pt++)M(Z.location+pt,lt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let pt=0;pt<Z.locationSize;pt++)y(Z.location+pt);o.bindBuffer(34962,Dt);for(let pt=0;pt<Z.locationSize;pt++)C(Z.location+pt,dt/Z.locationSize,mt,it,Ot*_t,(St+dt/Z.locationSize*pt)*_t)}else{if($.isInstancedBufferAttribute){for(let lt=0;lt<Z.locationSize;lt++)M(Z.location+lt,$.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let lt=0;lt<Z.locationSize;lt++)y(Z.location+lt);o.bindBuffer(34962,Dt);for(let lt=0;lt<Z.locationSize;lt++)C(Z.location+lt,dt/Z.locationSize,mt,it,dt*_t,dt/Z.locationSize*lt*_t)}}else if(z!==void 0){const it=z[J];if(it!==void 0)switch(it.length){case 2:o.vertexAttrib2fv(Z.location,it);break;case 3:o.vertexAttrib3fv(Z.location,it);break;case 4:o.vertexAttrib4fv(Z.location,it);break;default:o.vertexAttrib1fv(Z.location,it)}}}}E()}function w(){K();for(const D in s){const U=s[D];for(const q in U){const Y=U[q];for(const B in Y)g(Y[B].object),delete Y[B];delete U[q]}delete s[D]}}function L(D){if(s[D.id]===void 0)return;const U=s[D.id];for(const q in U){const Y=U[q];for(const B in Y)g(Y[B].object),delete Y[B];delete U[q]}delete s[D.id]}function G(D){for(const U in s){const q=s[U];if(q[D.id]===void 0)continue;const Y=q[D.id];for(const B in Y)g(Y[B].object),delete Y[B];delete q[D.id]}}function K(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:S,enableAttribute:y,disableUnusedAttributes:E}}function Cp(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function Lp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),v=o.getParameter(36349),S=f>0,y=a||t.has("OES_texture_float"),M=S&&y,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function Pp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Qn,s=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,S=v*4;let y=_.clippingState||null;l.value=y,y=u(g,f,S,m);for(let M=0;M!==S;++M)y[M]=e[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,v=f.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,y=m;S!==d;++S,y+=4)a.copy(h[S]).applyMatrix4(v,s),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Dp(o){let t=new WeakMap;function e(a,s){return s===wa?a.mapping=qi:s===Ta&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===wa||s===Ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xh(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rp extends uc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,ol=[.125,.215,.35,.446,.526,.582],ni=20,la=new Rp,ll=new zt;let ca=null;const ti=(1+Math.sqrt(5))/2,Ii=1/ti,cl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ti,Ii),new O(0,ti,-Ii),new O(Ii,0,ti),new O(-Ii,0,ti),new O(ti,Ii,0),new O(-ti,Ii,0)];class ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca),t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:yr,format:an,encoding:di,depthBuffer:!1},i=hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(r)),this._blurMaterial=Fp(r,t,e)}return i}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,i){const s=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ll),u.toneMapping=bn,u.autoClear=!1;const m=new Za({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Ke(new Fr,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(ll),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):v===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const S=this._cubeSize;ss(i,v*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=cl[(i-1)%cl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ke(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const _=[];let v=0;for(let C=0;C<ni;++C){const x=C/d,w=Math.exp(-x*x/2);_.push(w),C===0?v+=w:C<p&&(v+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[i],M=3*y*(i>S-zi?i-S+zi:0),E=4*(this._cubeSize-y);ss(e,M,E,3*y,2*y),l.setRenderTarget(e),l.render(h,la)}}function Ip(o){const t=[],e=[],n=[];let i=o;const r=o-zi+1+ol.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-zi?l=ol[a-o+zi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,v=new Float32Array(d*g*m),S=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,x=E>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(w,d*g*E),S.set(f,p*g*E);const L=[E,E,E,E,E,E];y.set(L,_*g*E)}const M=new un;M.setAttribute("position",new on(v,d)),M.setAttribute("uv",new on(S,p)),M.setAttribute("faceIndex",new on(y,_)),t.push(M),i>zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hl(o,t,e){const n=new pi(o,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Fp(o,t,e){const n=new Float32Array(ni),i=new O(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fl(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function dl(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function Op(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===wa||l===Ta,u=l===qi||l===Yi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new ul(o)),h=c?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new ul(o));const f=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Np(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zp(o,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let S=0,y=v.length;S<y;S+=3){const M=v[S+0],E=v[S+1],C=v[S+2];f.push(M,E,E,C,C,M)}}else{const v=g.array;d=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const M=S+0,E=S+1,C=S+2;f.push(M,E,E,C,C,M)}}const p=new(ec(f)?cc:lc)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Up(o,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Bp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kp(o,t){return o[0]-t[0]}function Gp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Vp(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new se,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let q=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var g=q;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;y===!0&&(L=1),M===!0&&(L=2),E===!0&&(L=3);let G=u.attributes.position.count*L,K=1;G>t.maxTextureSize&&(K=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const N=new Float32Array(G*K*4*p),D=new sc(N,G,K,p);D.type=ri,D.needsUpdate=!0;const U=L*4;for(let Y=0;Y<p;Y++){const B=C[Y],I=x[Y],z=w[Y],J=G*K*4*Y;for(let Z=0;Z<B.count;Z++){const $=Z*U;y===!0&&(a.fromBufferAttribute(B,Z),N[J+$+0]=a.x,N[J+$+1]=a.y,N[J+$+2]=a.z,N[J+$+3]=0),M===!0&&(a.fromBufferAttribute(I,Z),N[J+$+4]=a.x,N[J+$+5]=a.y,N[J+$+6]=a.z,N[J+$+7]=0),E===!0&&(a.fromBufferAttribute(z,Z),N[J+$+8]=a.x,N[J+$+9]=a.y,N[J+$+10]=a.z,N[J+$+11]=z.itemSize===4?a.w:1)}}_={count:p,texture:D,size:new Nt(G,K)},r.set(u,_),u.addEventListener("dispose",q)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];const S=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<d;M++){const E=p[M];E[0]=M,E[1]=m[M]}p.sort(Gp);for(let M=0;M<8;M++)M<d&&p[M][1]?(s[M][0]=p[M][0],s[M][1]=p[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(kp);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const E=s[M],C=E[0],x=E[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[C]&&u.setAttribute("morphTarget"+M,_[C]),v&&u.getAttribute("morphNormal"+M)!==v[C]&&u.setAttribute("morphNormal"+M,v[C]),i[M]=x,S+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),v&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Wp(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const pc=new He,mc=new sc,gc=new Lh,_c=new hc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),xl=new Float32Array(4);function rr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=pl[i];if(r===void 0&&(r=new Float32Array(i),pl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function de(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function pe(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Es(o,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Hp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Xp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;o.uniform2fv(this.addr,t),pe(e,t)}}function qp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;o.uniform3fv(this.addr,t),pe(e,t)}}function Yp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;o.uniform4fv(this.addr,t),pe(e,t)}}function jp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;xl.set(n),o.uniformMatrix2fv(this.addr,!1,xl),pe(e,n)}}function Zp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;_l.set(n),o.uniformMatrix3fv(this.addr,!1,_l),pe(e,n)}}function $p(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(de(e,n))return;gl.set(n),o.uniformMatrix4fv(this.addr,!1,gl),pe(e,n)}}function Kp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Jp(o,t){const e=this.cache;de(e,t)||(o.uniform2iv(this.addr,t),pe(e,t))}function Qp(o,t){const e=this.cache;de(e,t)||(o.uniform3iv(this.addr,t),pe(e,t))}function tm(o,t){const e=this.cache;de(e,t)||(o.uniform4iv(this.addr,t),pe(e,t))}function em(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function nm(o,t){const e=this.cache;de(e,t)||(o.uniform2uiv(this.addr,t),pe(e,t))}function im(o,t){const e=this.cache;de(e,t)||(o.uniform3uiv(this.addr,t),pe(e,t))}function rm(o,t){const e=this.cache;de(e,t)||(o.uniform4uiv(this.addr,t),pe(e,t))}function sm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||pc,i)}function am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gc,i)}function om(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_c,i)}function lm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function cm(o){switch(o){case 5126:return Hp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return jp;case 35675:return Zp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return Jp;case 35668:case 35672:return Qp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}function um(o,t){o.uniform1fv(this.addr,t)}function hm(o,t){const e=rr(t,this.size,2);o.uniform2fv(this.addr,e)}function fm(o,t){const e=rr(t,this.size,3);o.uniform3fv(this.addr,e)}function dm(o,t){const e=rr(t,this.size,4);o.uniform4fv(this.addr,e)}function pm(o,t){const e=rr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function mm(o,t){const e=rr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function gm(o,t){const e=rr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function _m(o,t){o.uniform1iv(this.addr,t)}function xm(o,t){o.uniform2iv(this.addr,t)}function vm(o,t){o.uniform3iv(this.addr,t)}function Mm(o,t){o.uniform4iv(this.addr,t)}function ym(o,t){o.uniform1uiv(this.addr,t)}function Sm(o,t){o.uniform2uiv(this.addr,t)}function bm(o,t){o.uniform3uiv(this.addr,t)}function wm(o,t){o.uniform4uiv(this.addr,t)}function Tm(o,t,e){const n=t.length,i=Es(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||pc,i[r])}function Em(o,t,e){const n=t.length,i=Es(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||gc,i[r])}function Am(o,t,e){const n=t.length,i=Es(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||_c,i[r])}function Cm(o,t,e){const n=t.length,i=Es(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||mc,i[r])}function Lm(o){switch(o){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return Mm;case 5125:return ym;case 36294:return Sm;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}class Pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=cm(e.type)}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Lm(e.type)}}class Rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function vl(o,t){o.seq.push(t),o.map[t.id]=t}function Im(o,t,e){const n=o.name,i=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),a=ua.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){vl(e,c===void 0?new Pm(s,o,t):new Dm(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new Rm(s),vl(e,h)),e=h}}}class us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Im(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ml(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Fm=0;function Om(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Nm(o){switch(o){case di:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function yl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Om(o.getShaderSource(t),a)}else return i}function zm(o,t){const e=Nm(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Um(o,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="OptimizedCineon";break;case rh:e="ACESFilmic";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Bm(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function km(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function hr(o){return o!==""}function Sl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(o){return o.replace(Vm,Wm)}function Wm(o,t){const e=bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Pa(e)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(o){return o.replace(Hm,Xm)}function Xm(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Zm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case th:t="ENVMAP_BLENDING_ADD";break}return t}function $m(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Km(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=qm(e),c=Ym(e),u=jm(e),h=Zm(e),f=$m(e),m=e.isWebGL2?"":Bm(e),g=km(r),d=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(hr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(hr).join(`
`),_.length>0&&(_+=`
`)):(p=[Tl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),_=[m,Tl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?bt.tonemapping_pars_fragment:"",e.toneMapping!==bn?Um("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.encodings_pars_fragment,zm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Pa(a),a=Sl(a,e),a=bl(a,e),s=Pa(s),s=Sl(s,e),s=bl(s,e),a=wl(a),s=wl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+p+a,y=v+_+s,M=Ml(i,35633,S),E=Ml(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,E),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(M).trim(),G=i.getShaderInfoLog(E).trim();let K=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){K=!1;const D=yl(i,M,"vertex"),U=yl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+D+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:K,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new us(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Gm(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Fm++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Jm++,this.code=t,this.usedTimes=0}}function eg(o,t,e,n,i,r,a){const s=new oc,l=new Qm,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,G,K){const N=G.fog,D=K.geometry,U=x.isMeshStandardMaterial?G.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||U),Y=!!q&&q.mapping===bs?q.image.height:null,B=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const I=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=I!==void 0?I.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let Z,$,it,dt;if(B){const Ot=rn[B];Z=Ot.vertexShader,$=Ot.fragmentShader}else Z=x.vertexShader,$=x.fragmentShader,l.update(x),it=l.getVertexShaderID(x),dt=l.getFragmentShaderID(x);const j=o.getRenderTarget(),Dt=x.alphaTest>0,mt=x.clearcoat>0,_t=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:Z,fragmentShader:$,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?o.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:di,map:!!x.map,matcap:!!x.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Th,tangentSpaceNormalMap:x.normalMapType===wh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Vt,clearcoat:mt,clearcoatMap:mt&&!!x.clearcoatMap,clearcoatRoughnessMap:mt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!x.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!x.iridescenceMap,iridescenceThicknessMap:_t&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ki,alphaMap:!!x.alphaMap,alphaTest:Dt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:bn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Le,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),v(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function S(x){const w=g[x.type];let L;if(w){const G=rn[w];L=Gh.clone(G.uniforms)}else L=x.uniforms;return L}function y(x,w){let L;for(let G=0,K=c.length;G<K;G++){const N=c[G];if(N.cacheKey===w){L=N,++L.usedTimes;break}}return L===void 0&&(L=new Km(o,w,x,r),c.push(L)),L}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:C}}function ng(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ig(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function El(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Al(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||ig),n.length>1&&n.sort(f||El),i.length>1&&i.sort(f||El)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function rg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Al,o.set(n,[a])):i>=r.length?(a=new Al,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function sg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new zt};break;case"SpotLight":e={position:new O,direction:new O,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new O,halfWidth:new O,halfHeight:new O};break}return o[t.id]=e,e}}}function ag(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let og=0;function lg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function cg(o,t){const e=new sg,n=ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new te,s=new te;function l(u,h){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,p=0,_=0,v=0,S=0,y=0,M=0,E=0,C=0,x=0;u.sort(lg);const w=h!==!0?Math.PI:1;for(let G=0,K=u.length;G<K;G++){const N=u[G],D=N.color,U=N.intensity,q=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=D.r*U*w,m+=D.g*U*w,g+=D.b*U*w;else if(N.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],U);else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const I=N.shadow,z=n.get(N);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=N.shadow.matrix,y++}i.directional[d]=B,d++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(D).multiplyScalar(U*w),B.distance=q,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[_]=B;const I=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,I.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[_]=I.matrix,N.castShadow){const z=n.get(N);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Y,E++}_++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=B,v++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity*w),B.distance=N.distance,B.decay=N.decay,N.castShadow){const I=N.shadow,z=n.get(N);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,z.shadowCameraNear=I.camera.near,z.shadowCameraFar=I.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=N.shadow.matrix,M++}i.point[p]=B,p++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar(U*w),B.groundColor.copy(N.groundColor).multiplyScalar(U*w),i.hemi[S]=B,S++}}v>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==v||L.hemiLength!==S||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==E||L.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=v,L.hemiLength=S,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=E,L.numSpotMaps=C,i.version=og++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const y=u[v];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),s.identity(),a.copy(y.matrixWorld),a.premultiply(_),s.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),d++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Cl(o,t){const e=new cg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function ug(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new Cl(o,t),e.set(r,[l])):a>=s.length?(l=new Cl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class hg extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fg extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(o,t,e){let n=new fc;const i=new Nt,r=new Nt,a=new se,s=new hg({depthPacking:bh}),l=new fg,c={},u=e.maxTextureSize,h={0:Le,1:Xi,2:Nn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ke(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl,this.render=function(y,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(kn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,K=y.length;G<K;G++){const N=y[G],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,D.mapSize.y=r.y)),D.map===null){const Y=this.type!==ur?{minFilter:me,magFilter:me}:{};D.map=new pi(i.x,i.y,Y),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const q=D.getViewportCount();for(let Y=0;Y<q;Y++){const B=D.getViewport(Y);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),L.viewport(a),D.updateMatrices(N,Y),n=D.getFrustum(),S(M,E,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===ur&&_(D,E),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,w)};function _(y,M){const E=t.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new pi(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,E,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,E,m,d,null)}function v(y,M,E,C,x,w){let L=null;const G=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?L=G:L=E.isPointLight===!0?l:s,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const K=L.uuid,N=M.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let U=D[N];U===void 0&&(U=L.clone(),D[N]=U),L=U}return L.visible=M.visible,L.wireframe=M.wireframe,w===ur?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:h[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function S(y,M,E,C,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===ur)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const G=t.update(y),K=y.material;if(Array.isArray(K)){const N=G.groups;for(let D=0,U=N.length;D<U;D++){const q=N[D],Y=K[q.materialIndex];if(Y&&Y.visible){const B=v(y,Y,C,E.near,E.far,x);o.renderBufferDirect(E,null,G,B,y,q)}}}else if(K.visible){const N=v(y,K,C,E.near,E.far,x);o.renderBufferDirect(E,null,G,N,y,null)}}const L=y.children;for(let G=0,K=L.length;G<K;G++)S(L[G],M,E,C,x)}}function gg(o,t,e){const n=e.isWebGL2;function i(){let P=!1;const at=new se;let V=null;const st=new se(0,0,0,0);return{setMask:function(nt){V!==nt&&!P&&(o.colorMask(nt,nt,nt,nt),V=nt)},setLocked:function(nt){P=nt},setClear:function(nt,At,Jt,Xt,An){An===!0&&(nt*=Xt,At*=Xt,Jt*=Xt),at.set(nt,At,Jt,Xt),st.equals(at)===!1&&(o.clearColor(nt,At,Jt,Xt),st.copy(at))},reset:function(){P=!1,V=null,st.set(-1,0,0,0)}}}function r(){let P=!1,at=null,V=null,st=null;return{setTest:function(nt){nt?Dt(2929):mt(2929)},setMask:function(nt){at!==nt&&!P&&(o.depthMask(nt),at=nt)},setFunc:function(nt){if(V!==nt){if(nt)switch(nt){case qu:o.depthFunc(512);break;case Yu:o.depthFunc(519);break;case ju:o.depthFunc(513);break;case ba:o.depthFunc(515);break;case Zu:o.depthFunc(514);break;case $u:o.depthFunc(518);break;case Ku:o.depthFunc(516);break;case Ju:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);V=nt}},setLocked:function(nt){P=nt},setClear:function(nt){st!==nt&&(o.clearDepth(nt),st=nt)},reset:function(){P=!1,at=null,V=null,st=null}}}function a(){let P=!1,at=null,V=null,st=null,nt=null,At=null,Jt=null,Xt=null,An=null;return{setTest:function(kt){P||(kt?Dt(2960):mt(2960))},setMask:function(kt){at!==kt&&!P&&(o.stencilMask(kt),at=kt)},setFunc:function(kt,fn,Ie){(V!==kt||st!==fn||nt!==Ie)&&(o.stencilFunc(kt,fn,Ie),V=kt,st=fn,nt=Ie)},setOp:function(kt,fn,Ie){(At!==kt||Jt!==fn||Xt!==Ie)&&(o.stencilOp(kt,fn,Ie),At=kt,Jt=fn,Xt=Ie)},setLocked:function(kt){P=kt},setClear:function(kt){An!==kt&&(o.clearStencil(kt),An=kt)},reset:function(){P=!1,at=null,V=null,st=null,nt=null,At=null,Jt=null,Xt=null,An=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,S=null,y=null,M=null,E=null,C=null,x=null,w=!1,L=null,G=null,K=null,N=null,D=null;const U=o.getParameter(35661);let q=!1,Y=0;const B=o.getParameter(7938);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=Y>=2);let I=null,z={};const J=o.getParameter(3088),Z=o.getParameter(2978),$=new se().fromArray(J),it=new se().fromArray(Z);function dt(P,at,V){const st=new Uint8Array(4),nt=o.createTexture();o.bindTexture(P,nt),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let At=0;At<V;At++)o.texImage2D(at+At,0,6408,1,1,0,6408,5121,st);return nt}const j={};j[3553]=dt(3553,3553,1),j[34067]=dt(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(2929),l.setFunc(ba),he(!1),tn(xo),Dt(2884),ne(kn);function Dt(P){f[P]!==!0&&(o.enable(P),f[P]=!0)}function mt(P){f[P]!==!1&&(o.disable(P),f[P]=!1)}function _t(P,at){return m[P]!==at?(o.bindFramebuffer(P,at),m[P]=at,n&&(P===36009&&(m[36160]=at),P===36160&&(m[36009]=at)),!0):!1}function lt(P,at){let V=d,st=!1;if(P)if(V=g.get(at),V===void 0&&(V=[],g.set(at,V)),P.isWebGLMultipleRenderTargets){const nt=P.texture;if(V.length!==nt.length||V[0]!==36064){for(let At=0,Jt=nt.length;At<Jt;At++)V[At]=36064+At;V.length=nt.length,st=!0}}else V[0]!==36064&&(V[0]=36064,st=!0);else V[0]!==1029&&(V[0]=1029,st=!0);st&&(e.isWebGL2?o.drawBuffers(V):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Ot(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const St={[Ni]:32774,[Ou]:32778,[Nu]:32779};if(n)St[yo]=32775,St[So]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[yo]=P.MIN_EXT,St[So]=P.MAX_EXT)}const pt={[zu]:0,[Uu]:1,[Bu]:768,[$l]:770,[Xu]:776,[Wu]:774,[Gu]:772,[ku]:769,[Kl]:771,[Hu]:775,[Vu]:773};function ne(P,at,V,st,nt,At,Jt,Xt){if(P===kn){_===!0&&(mt(3042),_=!1);return}if(_===!1&&(Dt(3042),_=!0),P!==Fu){if(P!==v||Xt!==w){if((S!==Ni||E!==Ni)&&(o.blendEquation(32774),S=Ni,E=Ni),Xt)switch(P){case ki:o.blendFuncSeparate(1,771,1,771);break;case Sa:o.blendFunc(1,1);break;case vo:o.blendFuncSeparate(0,769,0,1);break;case Mo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:o.blendFuncSeparate(770,771,1,771);break;case Sa:o.blendFunc(770,1);break;case vo:o.blendFuncSeparate(0,769,0,1);break;case Mo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,M=null,C=null,x=null,v=P,w=Xt}return}nt=nt||at,At=At||V,Jt=Jt||st,(at!==S||nt!==E)&&(o.blendEquationSeparate(St[at],St[nt]),S=at,E=nt),(V!==y||st!==M||At!==C||Jt!==x)&&(o.blendFuncSeparate(pt[V],pt[st],pt[At],pt[Jt]),y=V,M=st,C=At,x=Jt),v=P,w=null}function ye(P,at){P.side===Nn?mt(2884):Dt(2884);let V=P.side===Le;at&&(V=!V),he(V),P.blending===ki&&P.transparent===!1?ne(kn):ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const st=P.stencilWrite;c.setTest(st),st&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Dt(32926):mt(32926)}function he(P){L!==P&&(P?o.frontFace(2304):o.frontFace(2305),L=P)}function tn(P){P!==Du?(Dt(2884),P!==G&&(P===xo?o.cullFace(1029):P===Ru?o.cullFace(1028):o.cullFace(1032))):mt(2884),G=P}function ie(P){P!==K&&(q&&o.lineWidth(P),K=P)}function Rt(P,at,V){P?(Dt(32823),(N!==at||D!==V)&&(o.polygonOffset(at,V),N=at,D=V)):mt(32823)}function hn(P){P?Dt(3089):mt(3089)}function en(P){P===void 0&&(P=33984+U-1),I!==P&&(o.activeTexture(P),I=P)}function A(P,at){I===null&&en();let V=z[I];V===void 0&&(V={type:void 0,texture:void 0},z[I]=V),(V.type!==P||V.texture!==at)&&(o.bindTexture(P,at||j[P]),V.type=P,V.texture=at)}function b(){const P=z[I];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(P){$.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function ct(P){it.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),it.copy(P))}function Mt(P,at){let V=h.get(at);V===void 0&&(V=new WeakMap,h.set(at,V));let st=V.get(P);st===void 0&&(st=o.getUniformBlockIndex(at,P.name),V.set(P,st))}function Ct(P,at){const st=h.get(at).get(P);u.get(P)!==st&&(o.uniformBlockBinding(at,st,P.__bindingPointIndex),u.set(P,st))}function Ht(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},I=null,z={},m={},g=new WeakMap,d=[],p=null,_=!1,v=null,S=null,y=null,M=null,E=null,C=null,x=null,w=!1,L=null,G=null,K=null,N=null,D=null,$.set(0,0,o.canvas.width,o.canvas.height),it.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Dt,disable:mt,bindFramebuffer:_t,drawBuffers:lt,useProgram:Ot,setBlending:ne,setMaterial:ye,setFlipSided:he,setCullFace:tn,setLineWidth:ie,setPolygonOffset:Rt,setScissorTest:hn,activeTexture:en,bindTexture:A,unbindTexture:b,compressedTexImage2D:H,texImage2D:ht,texImage3D:ot,updateUBOMapping:Mt,uniformBlockBinding:Ct,texStorage2D:xt,texStorage3D:k,texSubImage2D:Q,texSubImage3D:tt,compressedTexSubImage2D:rt,scissor:ut,viewport:ct,reset:Ht}}function _g(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,b){return _?new OffscreenCanvas(A,b):Sr("canvas")}function S(A,b,H,Q){let tt=1;if((A.width>Q||A.height>Q)&&(tt=Q/Math.max(A.width,A.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=b?La:Math.floor,xt=rt(tt*A.width),k=rt(tt*A.height);d===void 0&&(d=v(xt,k));const ht=H?v(xt,k):d;return ht.width=xt,ht.height=k,ht.getContext("2d").drawImage(A,0,0,xt,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xt+"x"+k+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Zo(A.width)&&Zo(A.height)}function M(A){return s?!1:A.wrapS!==$e||A.wrapT!==$e||A.minFilter!==me&&A.minFilter!==Ue}function E(A,b){return A.generateMipmaps&&b&&A.minFilter!==me&&A.minFilter!==Ue}function C(A){o.generateMipmap(A)}function x(A,b,H,Q,tt=!1){if(s===!1)return b;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=b;return b===6403&&(H===5126&&(rt=33326),H===5131&&(rt=33325),H===5121&&(rt=33321)),b===33319&&(H===5126&&(rt=33328),H===5131&&(rt=33327),H===5121&&(rt=33323)),b===6408&&(H===5126&&(rt=34836),H===5131&&(rt=34842),H===5121&&(rt=Q===Vt&&tt===!1?35907:32856),H===32819&&(rt=32854),H===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function w(A,b,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==me&&A.minFilter!==Ue?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function L(A){return A===me||A===bo||A===wo?9728:9729}function G(A){const b=A.target;b.removeEventListener("dispose",G),N(b),b.isVideoTexture&&g.delete(b)}function K(A){const b=A.target;b.removeEventListener("dispose",K),U(b)}function N(A){const b=n.get(A);if(b.__webglInit===void 0)return;const H=A.source,Q=p.get(H);if(Q){const tt=Q[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(A),Object.keys(Q).length===0&&p.delete(H)}n.remove(A)}function D(A){const b=n.get(A);o.deleteTexture(b.__webglTexture);const H=A.source,Q=p.get(H);delete Q[b.__cacheKey],a.memory.textures--}function U(A){const b=A.texture,H=n.get(A),Q=n.get(b);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)o.deleteFramebuffer(H.__webglFramebuffer[tt]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[tt]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let tt=0;tt<H.__webglColorRenderbuffer.length;tt++)H.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[tt]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,rt=b.length;tt<rt;tt++){const xt=n.get(b[tt]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(b[tt])}n.remove(b),n.remove(A)}let q=0;function Y(){q=0}function B(){const A=q;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),q+=1,A}function I(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function z(A,b){const H=n.get(A);if(A.isVideoTexture&&hn(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,A,b);return}}e.activeTexture(33984+b),e.bindTexture(3553,H.__webglTexture)}function J(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){mt(H,A,b);return}e.activeTexture(33984+b),e.bindTexture(35866,H.__webglTexture)}function Z(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){mt(H,A,b);return}e.activeTexture(33984+b),e.bindTexture(32879,H.__webglTexture)}function $(A,b){const H=n.get(A);if(A.version>0&&H.__version!==A.version){_t(H,A,b);return}e.activeTexture(33984+b),e.bindTexture(34067,H.__webglTexture)}const it={[Ea]:10497,[$e]:33071,[Aa]:33648},dt={[me]:9728,[bo]:9984,[wo]:9986,[Ue]:9729,[ah]:9985,[ws]:9987};function j(A,b,H){if(H?(o.texParameteri(A,10242,it[b.wrapS]),o.texParameteri(A,10243,it[b.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,it[b.wrapR]),o.texParameteri(A,10240,dt[b.magFilter]),o.texParameteri(A,10241,dt[b.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(b.wrapS!==$e||b.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,L(b.magFilter)),o.texParameteri(A,10241,L(b.minFilter)),b.minFilter!==me&&b.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(b.type===ri&&t.has("OES_texture_float_linear")===!1||s===!1&&b.type===yr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Dt(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",G));const Q=b.source;let tt=p.get(Q);tt===void 0&&(tt={},p.set(Q,tt));const rt=I(b);if(rt!==A.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[rt].usedTimes++;const xt=tt[A.__cacheKey];xt!==void 0&&(tt[A.__cacheKey].usedTimes--,xt.usedTimes===0&&D(b)),A.__cacheKey=rt,A.__webglTexture=tt[rt].texture}return H}function mt(A,b,H){let Q=3553;b.isDataArrayTexture&&(Q=35866),b.isData3DTexture&&(Q=32879);const tt=Dt(A,b),rt=b.source;if(e.activeTexture(33984+H),e.bindTexture(Q,A.__webglTexture),rt.version!==rt.__currentVersion||tt===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const xt=M(b)&&y(b.image)===!1;let k=S(b.image,xt,!1,u);k=en(b,k);const ht=y(k)||s,ot=r.convert(b.format,b.encoding);let ut=r.convert(b.type),ct=x(b.internalFormat,ot,ut,b.encoding,b.isVideoTexture);j(Q,b,ht);let Mt;const Ct=b.mipmaps,Ht=s&&b.isVideoTexture!==!0,P=rt.__currentVersion===void 0||tt===!0,at=w(b,k,ht);if(b.isDepthTexture)ct=6402,s?b.type===ri?ct=36012:b.type===ii?ct=33190:b.type===Gi?ct=35056:ct=33189:b.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===oi&&ct===6402&&b.type!==tc&&b.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ii,ut=r.convert(b.type)),b.format===ji&&ct===6402&&(ct=34041,b.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Gi,ut=r.convert(b.type))),P&&(Ht?e.texStorage2D(3553,1,ct,k.width,k.height):e.texImage2D(3553,0,ct,k.width,k.height,0,ot,ut,null));else if(b.isDataTexture)if(Ct.length>0&&ht){Ht&&P&&e.texStorage2D(3553,at,ct,Ct[0].width,Ct[0].height);for(let V=0,st=Ct.length;V<st;V++)Mt=Ct[V],Ht?e.texSubImage2D(3553,V,0,0,Mt.width,Mt.height,ot,ut,Mt.data):e.texImage2D(3553,V,ct,Mt.width,Mt.height,0,ot,ut,Mt.data);b.generateMipmaps=!1}else Ht?(P&&e.texStorage2D(3553,at,ct,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,ot,ut,k.data)):e.texImage2D(3553,0,ct,k.width,k.height,0,ot,ut,k.data);else if(b.isCompressedTexture){Ht&&P&&e.texStorage2D(3553,at,ct,Ct[0].width,Ct[0].height);for(let V=0,st=Ct.length;V<st;V++)Mt=Ct[V],b.format!==an?ot!==null?Ht?e.compressedTexSubImage2D(3553,V,0,0,Mt.width,Mt.height,ot,Mt.data):e.compressedTexImage2D(3553,V,ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(3553,V,0,0,Mt.width,Mt.height,ot,ut,Mt.data):e.texImage2D(3553,V,ct,Mt.width,Mt.height,0,ot,ut,Mt.data)}else if(b.isDataArrayTexture)Ht?(P&&e.texStorage3D(35866,at,ct,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,ot,ut,k.data)):e.texImage3D(35866,0,ct,k.width,k.height,k.depth,0,ot,ut,k.data);else if(b.isData3DTexture)Ht?(P&&e.texStorage3D(32879,at,ct,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,ot,ut,k.data)):e.texImage3D(32879,0,ct,k.width,k.height,k.depth,0,ot,ut,k.data);else if(b.isFramebufferTexture){if(P)if(Ht)e.texStorage2D(3553,at,ct,k.width,k.height);else{let V=k.width,st=k.height;for(let nt=0;nt<at;nt++)e.texImage2D(3553,nt,ct,V,st,0,ot,ut,null),V>>=1,st>>=1}}else if(Ct.length>0&&ht){Ht&&P&&e.texStorage2D(3553,at,ct,Ct[0].width,Ct[0].height);for(let V=0,st=Ct.length;V<st;V++)Mt=Ct[V],Ht?e.texSubImage2D(3553,V,0,0,ot,ut,Mt):e.texImage2D(3553,V,ct,ot,ut,Mt);b.generateMipmaps=!1}else Ht?(P&&e.texStorage2D(3553,at,ct,k.width,k.height),e.texSubImage2D(3553,0,0,0,ot,ut,k)):e.texImage2D(3553,0,ct,ot,ut,k);E(b,ht)&&C(Q),rt.__currentVersion=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,H){if(b.image.length!==6)return;const Q=Dt(A,b),tt=b.source;if(e.activeTexture(33984+H),e.bindTexture(34067,A.__webglTexture),tt.version!==tt.__currentVersion||Q===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const rt=b.isCompressedTexture||b.image[0].isCompressedTexture,xt=b.image[0]&&b.image[0].isDataTexture,k=[];for(let V=0;V<6;V++)!rt&&!xt?k[V]=S(b.image[V],!1,!0,c):k[V]=xt?b.image[V].image:b.image[V],k[V]=en(b,k[V]);const ht=k[0],ot=y(ht)||s,ut=r.convert(b.format,b.encoding),ct=r.convert(b.type),Mt=x(b.internalFormat,ut,ct,b.encoding),Ct=s&&b.isVideoTexture!==!0,Ht=tt.__currentVersion===void 0||Q===!0;let P=w(b,ht,ot);j(34067,b,ot);let at;if(rt){Ct&&Ht&&e.texStorage2D(34067,P,Mt,ht.width,ht.height);for(let V=0;V<6;V++){at=k[V].mipmaps;for(let st=0;st<at.length;st++){const nt=at[st];b.format!==an?ut!==null?Ct?e.compressedTexSubImage2D(34069+V,st,0,0,nt.width,nt.height,ut,nt.data):e.compressedTexImage2D(34069+V,st,Mt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(34069+V,st,0,0,nt.width,nt.height,ut,ct,nt.data):e.texImage2D(34069+V,st,Mt,nt.width,nt.height,0,ut,ct,nt.data)}}}else{at=b.mipmaps,Ct&&Ht&&(at.length>0&&P++,e.texStorage2D(34067,P,Mt,k[0].width,k[0].height));for(let V=0;V<6;V++)if(xt){Ct?e.texSubImage2D(34069+V,0,0,0,k[V].width,k[V].height,ut,ct,k[V].data):e.texImage2D(34069+V,0,Mt,k[V].width,k[V].height,0,ut,ct,k[V].data);for(let st=0;st<at.length;st++){const At=at[st].image[V].image;Ct?e.texSubImage2D(34069+V,st+1,0,0,At.width,At.height,ut,ct,At.data):e.texImage2D(34069+V,st+1,Mt,At.width,At.height,0,ut,ct,At.data)}}else{Ct?e.texSubImage2D(34069+V,0,0,0,ut,ct,k[V]):e.texImage2D(34069+V,0,Mt,ut,ct,k[V]);for(let st=0;st<at.length;st++){const nt=at[st];Ct?e.texSubImage2D(34069+V,st+1,0,0,ut,ct,nt.image[V]):e.texImage2D(34069+V,st+1,Mt,ut,ct,nt.image[V])}}}E(b,ot)&&C(34067),tt.__currentVersion=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,H,Q,tt){const rt=r.convert(H.format,H.encoding),xt=r.convert(H.type),k=x(H.internalFormat,rt,xt,H.encoding);n.get(b).__hasExternalTextures||(tt===32879||tt===35866?e.texImage3D(tt,0,k,b.width,b.height,b.depth,0,rt,xt,null):e.texImage2D(tt,0,k,b.width,b.height,0,rt,xt,null)),e.bindFramebuffer(36160,A),Rt(b)?f.framebufferTexture2DMultisampleEXT(36160,Q,tt,n.get(H).__webglTexture,0,ie(b)):o.framebufferTexture2D(36160,Q,tt,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(A,b,H){if(o.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(H||Rt(b)){const tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ri?Q=36012:tt.type===ii&&(Q=33190));const rt=ie(b);Rt(b)?f.renderbufferStorageMultisampleEXT(36161,rt,Q,b.width,b.height):o.renderbufferStorageMultisample(36161,rt,Q,b.width,b.height)}else o.renderbufferStorage(36161,Q,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const Q=ie(b);H&&Rt(b)===!1?o.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):Rt(b)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<Q.length;tt++){const rt=Q[tt],xt=r.convert(rt.format,rt.encoding),k=r.convert(rt.type),ht=x(rt.internalFormat,xt,k,rt.encoding),ot=ie(b);H&&Rt(b)===!1?o.renderbufferStorageMultisample(36161,ot,ht,b.width,b.height):Rt(b)?f.renderbufferStorageMultisampleEXT(36161,ot,ht,b.width,b.height):o.renderbufferStorage(36161,ht,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function St(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,tt=ie(b);if(b.depthTexture.format===oi)Rt(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,tt):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===ji)Rt(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,tt):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function pt(A){const b=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,A)}else if(H){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),Ot(b.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ot(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ne(A,b,H){const Q=n.get(A);b!==void 0&&lt(Q.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&pt(A)}function ye(A){const b=A.texture,H=n.get(A),Q=n.get(b);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,a.memory.textures++);const tt=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,xt=y(A)||s;if(tt){H.__webglFramebuffer=[];for(let k=0;k<6;k++)H.__webglFramebuffer[k]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),rt)if(i.drawBuffers){const k=A.texture;for(let ht=0,ot=k.length;ht<ot;ht++){const ut=n.get(k[ht]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Rt(A)===!1){const k=rt?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let ht=0;ht<k.length;ht++){const ot=k[ht];H.__webglColorRenderbuffer[ht]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[ht]);const ut=r.convert(ot.format,ot.encoding),ct=r.convert(ot.type),Mt=x(ot.internalFormat,ut,ct,ot.encoding),Ct=ie(A);o.renderbufferStorageMultisample(36161,Ct,Mt,A.width,A.height),o.framebufferRenderbuffer(36160,36064+ht,36161,H.__webglColorRenderbuffer[ht])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(tt){e.bindTexture(34067,Q.__webglTexture),j(34067,b,xt);for(let k=0;k<6;k++)lt(H.__webglFramebuffer[k],A,b,36064,34069+k);E(b,xt)&&C(34067),e.unbindTexture()}else if(rt){const k=A.texture;for(let ht=0,ot=k.length;ht<ot;ht++){const ut=k[ht],ct=n.get(ut);e.bindTexture(3553,ct.__webglTexture),j(3553,ut,xt),lt(H.__webglFramebuffer,A,ut,36064+ht,3553),E(ut,xt)&&C(3553)}e.unbindTexture()}else{let k=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?k=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(k,Q.__webglTexture),j(k,b,xt),lt(H.__webglFramebuffer,A,b,36064,k),E(b,xt)&&C(k),e.unbindTexture()}A.depthBuffer&&pt(A)}function he(A){const b=y(A)||s,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,tt=H.length;Q<tt;Q++){const rt=H[Q];if(E(rt,b)){const xt=A.isWebGLCubeRenderTarget?34067:3553,k=n.get(rt).__webglTexture;e.bindTexture(xt,k),C(xt),e.unbindTexture()}}}function tn(A){if(s&&A.samples>0&&Rt(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Q=A.height;let tt=16384;const rt=[],xt=A.stencilBuffer?33306:36096,k=n.get(A),ht=A.isWebGLMultipleRenderTargets===!0;if(ht)for(let ot=0;ot<b.length;ot++)e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ot,36161,null),e.bindFramebuffer(36160,k.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ot,3553,null,0);e.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,k.__webglFramebuffer);for(let ot=0;ot<b.length;ot++){rt.push(36064+ot),A.depthBuffer&&rt.push(xt);const ut=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(ut===!1&&(A.depthBuffer&&(tt|=256),A.stencilBuffer&&(tt|=1024)),ht&&o.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[ot]),ut===!0&&(o.invalidateFramebuffer(36008,[xt]),o.invalidateFramebuffer(36009,[xt])),ht){const ct=n.get(b[ot]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ct,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,tt,9728),m&&o.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ht)for(let ot=0;ot<b.length;ot++){e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ot,36161,k.__webglColorRenderbuffer[ot]);const ut=n.get(b[ot]).__webglTexture;e.bindFramebuffer(36160,k.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ot,3553,ut,0)}e.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ie(A){return Math.min(h,A.samples)}function Rt(A){const b=n.get(A);return s&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function hn(A){const b=a.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function en(A,b){const H=A.encoding,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ca||H!==di&&(H===Vt?s===!1?t.has("EXT_sRGB")===!0&&Q===an?(A.format=Ca,A.minFilter=Ue,A.generateMipmaps=!1):b=ic.sRGBToLinear(b):(Q!==an||tt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ne,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Rt}function xg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===fi)return 5121;if(r===uh)return 32819;if(r===hh)return 32820;if(r===oh)return 5120;if(r===lh)return 5122;if(r===tc)return 5123;if(r===ch)return 5124;if(r===ii)return 5125;if(r===ri)return 5126;if(r===yr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===fh)return 6406;if(r===an)return 6408;if(r===ph)return 6409;if(r===mh)return 6410;if(r===oi)return 6402;if(r===ji)return 34041;if(r===gh)return 6403;if(r===dh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ca)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===_h)return 36244;if(r===xh)return 33319;if(r===vh)return 33320;if(r===Mh)return 36249;if(r===Fs||r===Os||r===Ns||r===zs)if(a===Vt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===To||r===Eo||r===Ao||r===Co)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lo||r===Po)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Lo)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Po)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Do||r===Ro||r===Io||r===Fo||r===Oo||r===No||r===zo||r===Uo||r===Bo||r===ko||r===Go||r===Vo||r===Wo||r===Ho)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Do)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ro)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Io)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===No)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ko)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Go)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wo)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ho)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Xo)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Gi?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class vg extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fr extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const v=new fr;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[d.jointName]=v,c.add(v)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class yg extends He{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=ii),n===void 0&&u===ji&&(n=Gi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:me,this.minFilter=l!==void 0?l:me,this.flipY=!1,this.generateMipmaps=!1}}class Sg extends ir{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],v=[],S=new Be;S.layers.enable(1),S.viewport=new se;const y=new Be;y.layers.enable(2),y.viewport=new se;const M=[S,y],E=new vg;E.layers.enable(1),E.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let z=_[I];return z===void 0&&(z=new ha,_[I]=z),z.getTargetRaySpace()},this.getControllerGrip=function(I){let z=_[I];return z===void 0&&(z=new ha,_[I]=z),z.getGripSpace()},this.getHand=function(I){let z=_[I];return z===void 0&&(z=new ha,_[I]=z),z.getHandSpace()};function w(I){const z=v.indexOf(I.inputSource);if(z===-1)return;const J=_[z];J!==void 0&&J.dispatchEvent({type:I.type,data:I.inputSource})}function L(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",G);for(let I=0;I<_.length;I++){const z=v[I];z!==null&&(v[I]=null,_[I].disconnect(z))}C=null,x=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",L),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,z),i.updateRenderState({baseLayer:f}),p=new pi(f.framebufferWidth,f.framebufferHeight,{format:an,type:fi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,J=null,Z=null;g.depth&&(Z=g.stencil?35056:33190,z=g.stencil?ji:oi,J=g.stencil?Gi:ii);const $={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer($),i.updateRenderState({layers:[h]}),p=new pi(h.textureWidth,h.textureHeight,{format:an,type:fi,depthTexture:new yg(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const it=t.properties.get(p);it.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(I){for(let z=0;z<I.removed.length;z++){const J=I.removed[z],Z=v.indexOf(J);Z>=0&&(v[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:J}))}for(let z=0;z<I.added.length;z++){const J=I.added[z];let Z=v.indexOf(J);if(Z===-1){for(let it=0;it<_.length;it++)if(it>=v.length){v.push(J),Z=it;break}else if(v[it]===null){v[it]=J,Z=it;break}if(Z===-1)break}const $=_[Z];$&&$.dispatchEvent({type:"connected",data:J})}}const K=new O,N=new O;function D(I,z,J){K.setFromMatrixPosition(z.matrixWorld),N.setFromMatrixPosition(J.matrixWorld);const Z=K.distanceTo(N),$=z.projectionMatrix.elements,it=J.projectionMatrix.elements,dt=$[14]/($[10]-1),j=$[14]/($[10]+1),Dt=($[9]+1)/$[5],mt=($[9]-1)/$[5],_t=($[8]-1)/$[0],lt=(it[8]+1)/it[0],Ot=dt*_t,St=dt*lt,pt=Z/(-_t+lt),ne=pt*-_t;z.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ne),I.translateZ(pt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ye=dt+pt,he=j+pt,tn=Ot-ne,ie=St+(Z-ne),Rt=Dt*j/he*ye,hn=mt*j/he*ye;I.projectionMatrix.makePerspective(tn,ie,Rt,hn,ye,he)}function U(I,z){z===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(z.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;E.near=y.near=S.near=I.near,E.far=y.far=S.far=I.far,(C!==E.near||x!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,x=E.far);const z=I.parent,J=E.cameras;U(E,z);for(let $=0;$<J.length;$++)U(J[$],z);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),I.matrix.copy(E.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const Z=I.children;for(let $=0,it=Z.length;$<it;$++)Z[$].updateMatrixWorld(!0);J.length===2?D(E,S,y):E.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){h!==null&&(h.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let q=null;function Y(I,z){if(c=z.getViewerPose(l||a),m=z,c!==null){const J=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Z=!1;J.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let $=0;$<J.length;$++){const it=J[$];let dt=null;if(f!==null)dt=f.getViewport(it);else{const Dt=u.getViewSubImage(h,it);dt=Dt.viewport,$===0&&(t.setRenderTargetTextures(p,Dt.colorTexture,h.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(p))}let j=M[$];j===void 0&&(j=new Be,j.layers.enable($),j.viewport=new se,M[$]=j),j.matrix.fromArray(it.transform.matrix),j.projectionMatrix.fromArray(it.projectionMatrix),j.viewport.set(dt.x,dt.y,dt.width,dt.height),$===0&&E.matrix.copy(j.matrix),Z===!0&&E.cameras.push(j)}}for(let J=0;J<_.length;J++){const Z=v[J],$=_[J];Z!==null&&$!==void 0&&$.update(Z,z,l||a)}q&&q(I,z),m=null}const B=new dc;B.setAnimationLoop(Y),this.setAnimationLoop=function(I){q=I},this.dispose=function(){}}}function bg(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Le&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Le&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Le&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function wg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function c(v,S){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(v,M);const E=t.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){const S=h();v.__bindingPointIndex=S;const y=o.createBuffer(),M=v.__size,E=v.usage;return o.bindBuffer(35345,y),o.bufferData(35345,M,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,y),y}function h(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const S=i[v.id],y=v.uniforms,M=v.__cache;o.bindBuffer(35345,S);for(let E=0,C=y.length;E<C;E++){const x=y[E];if(m(x,E,M)===!0){const w=x.value,L=x.__offset;typeof w=="number"?(x.__data[0]=w,o.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):w.toArray(x.__data),o.bufferSubData(35345,L,x.__data))}}o.bindBuffer(35345,null)}function m(v,S,y){const M=v.value;if(y[S]===void 0)return typeof M=="number"?y[S]=M:y[S]=M.clone(),!0;if(typeof M=="number"){if(y[S]!==M)return y[S]=M,!0}else{const E=y[S];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(v){const S=v.uniforms;let y=0;const M=16;let E=0;for(let C=0,x=S.length;C<x;C++){const w=S[C],L=d(w);if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,C>0){E=y%M;const G=M-E;E!==0&&G-L.boundary<0&&(y+=M-E,w.__offset=y)}y+=L.storage}return E=y%M,E>0&&(y+=M-E),v.__size=y,v.__cache={},this}function d(v){const S=v.value,y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(v){const S=v.target;S.removeEventListener("dispose",p);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(const v in i)o.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Tg(){const o=Sr("canvas");return o.style.display="block",o}function Eg(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Tg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=bn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,v=0,S=null,y=-1,M=null;const E=new se,C=new se;let x=null,w=t.width,L=t.height,G=1,K=null,N=null;const D=new se(0,0,w,L),U=new se(0,0,w,L);let q=!1;const Y=new fc;let B=!1,I=!1,z=null;const J=new te,Z=new Nt,$=new O,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return S===null?G:1}let j=e;function Dt(T,F){for(let W=0;W<T.length;W++){const R=T[W],X=t.getContext(R,F);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),j===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),j=Dt(F,T),j===null)throw Dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,_t,lt,Ot,St,pt,ne,ye,he,tn,ie,Rt,hn,en,A,b,H,Q,tt,rt,xt,k,ht,ot;function ut(){mt=new Np(j),_t=new Lp(j,mt,o),mt.init(_t),k=new xg(j,mt,_t),lt=new gg(j,mt,_t),Ot=new Bp,St=new ng,pt=new _g(j,mt,lt,St,_t,k,Ot),ne=new Dp(d),ye=new Op(d),he=new jh(j,_t),ht=new Ap(j,mt,he,_t),tn=new zp(j,he,Ot,ht),ie=new Wp(j,tn,he,Ot),tt=new Vp(j,_t,pt),b=new Pp(St),Rt=new eg(d,ne,ye,mt,_t,ht,b),hn=new bg(d,St),en=new rg,A=new ug(mt,_t),Q=new Ep(d,ne,lt,ie,u,a),H=new mg(d,ie,_t),ot=new wg(j,Ot,_t,lt),rt=new Cp(j,mt,Ot,_t),xt=new Up(j,mt,Ot,_t),Ot.programs=Rt.programs,d.capabilities=_t,d.extensions=mt,d.properties=St,d.renderLists=en,d.shadowMap=H,d.state=lt,d.info=Ot}ut();const ct=new Sg(d,j);this.xr=ct,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,F,W){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=F,t.width=Math.floor(T*G),t.height=Math.floor(F*G),W!==!1&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*G,L*G).floor()},this.setDrawingBufferSize=function(T,F,W){w=T,L=F,G=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,W,R){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,W,R),lt.viewport(E.copy(D).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,F,W,R){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,F,W,R),lt.scissor(C.copy(U).multiplyScalar(G).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){lt.setScissorTest(q=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,F=!0,W=!0){let R=0;T&&(R|=16384),F&&(R|=256),W&&(R|=1024),j.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),en.dispose(),A.dispose(),St.dispose(),ne.dispose(),ye.dispose(),ie.dispose(),ht.dispose(),ot.dispose(),Rt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",At),ct.removeEventListener("sessionend",Jt),z&&(z.dispose(),z=null),Xt.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ot.autoReset,F=H.enabled,W=H.autoUpdate,R=H.needsUpdate,X=H.type;ut(),Ot.autoReset=T,H.enabled=F,H.autoUpdate=W,H.needsUpdate=R,H.type=X}function Ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function P(T){const F=T.target;F.removeEventListener("dispose",P),at(F)}function at(T){V(T),St.remove(T)}function V(T){const F=St.get(T).programs;F!==void 0&&(F.forEach(function(W){Rt.releaseProgram(W)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,R,X,ft){F===null&&(F=it);const gt=X.isMesh&&X.matrixWorld.determinant()<0,yt=Au(T,F,W,R,X);lt.setMaterial(R,gt);let vt=W.index;const Pt=W.attributes.position;if(vt===null){if(Pt===void 0||Pt.count===0)return}else if(vt.count===0)return;let Tt=1;R.wireframe===!0&&(vt=tn.getWireframeAttribute(W),Tt=2),ht.setup(X,R,yt,W,vt);let Et,Gt=rt;vt!==null&&(Et=he.get(vt),Gt=xt,Gt.setIndex(Et));const qn=vt!==null?vt.count:Pt.count,_i=W.drawRange.start*Tt,xi=W.drawRange.count*Tt,nn=ft!==null?ft.start*Tt:0,Lt=ft!==null?ft.count*Tt:1/0,vi=Math.max(_i,nn),Yt=Math.min(qn,_i+xi,nn+Lt)-1,Fe=Math.max(0,Yt-vi+1);if(Fe!==0){if(X.isMesh)R.wireframe===!0?(lt.setLineWidth(R.wireframeLinewidth*dt()),Gt.setMode(1)):Gt.setMode(4);else if(X.isLine){let Cn=R.linewidth;Cn===void 0&&(Cn=1),lt.setLineWidth(Cn*dt()),X.isLineSegments?Gt.setMode(1):X.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else X.isPoints?Gt.setMode(0):X.isSprite&&Gt.setMode(4);if(X.isInstancedMesh)Gt.renderInstances(vi,Fe,X.count);else if(W.isInstancedBufferGeometry){const Cn=Math.min(W.instanceCount,W._maxInstanceCount);Gt.renderInstances(vi,Fe,Cn)}else Gt.render(vi,Fe)}},this.compile=function(T,F){function W(R,X,ft){R.transparent===!0&&R.side===Nn?(R.side=Le,R.needsUpdate=!0,Ur(R,X,ft),R.side=Xi,R.needsUpdate=!0,Ur(R,X,ft),R.side=Nn):Ur(R,X,ft)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(d.physicallyCorrectLights),T.traverse(function(R){const X=R.material;if(X)if(Array.isArray(X))for(let ft=0;ft<X.length;ft++){const gt=X[ft];W(gt,T,R)}else W(X,T,R)}),g.pop(),f=null};let st=null;function nt(T){st&&st(T)}function At(){Xt.stop()}function Jt(){Xt.start()}const Xt=new dc;Xt.setAnimationLoop(nt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(T){st=T,ct.setAnimationLoop(T),T===null?Xt.stop():Xt.start()},ct.addEventListener("sessionstart",At),ct.addEventListener("sessionend",Jt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(F),F=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,F,S),f=A.get(T,g.length),f.init(),g.push(f),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(J),I=this.localClippingEnabled,B=b.init(this.clippingPlanes,I,F),h=en.get(T,m.length),h.init(),m.push(h),An(T,F,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(K,N),B===!0&&b.beginShadows();const W=f.state.shadowsArray;if(H.render(W,T,F),B===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,T),f.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const R=F.cameras;for(let X=0,ft=R.length;X<ft;X++){const gt=R[X];kt(h,T,gt,gt.viewport)}}else kt(h,T,F);S!==null&&(pt.updateMultisampleRenderTarget(S),pt.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(d,T,F),ht.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function An(T,F,W,R){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){R&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const gt=ie.update(T),yt=T.material;yt.visible&&h.push(T,gt,yt,W,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ot.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ot.render.frame),!T.frustumCulled||Y.intersectsObject(T))){R&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const gt=ie.update(T),yt=T.material;if(Array.isArray(yt)){const vt=gt.groups;for(let Pt=0,Tt=vt.length;Pt<Tt;Pt++){const Et=vt[Pt],Gt=yt[Et.materialIndex];Gt&&Gt.visible&&h.push(T,gt,Gt,W,$.z,Et)}}else yt.visible&&h.push(T,gt,yt,W,$.z,null)}}const ft=T.children;for(let gt=0,yt=ft.length;gt<yt;gt++)An(ft[gt],F,W,R)}function kt(T,F,W,R){const X=T.opaque,ft=T.transmissive,gt=T.transparent;f.setupLightsView(W),ft.length>0&&fn(X,F,W),R&&lt.viewport(E.copy(R)),X.length>0&&Ie(X,F,W),ft.length>0&&Ie(ft,F,W),gt.length>0&&Ie(gt,F,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function fn(T,F,W){const R=_t.isWebGL2;z===null&&(z=new pi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?yr:fi,minFilter:ws,samples:R&&r===!0?4:0})),d.getDrawingBufferSize(Z),R?z.setSize(Z.x,Z.y):z.setSize(La(Z.x),La(Z.y));const X=d.getRenderTarget();d.setRenderTarget(z),d.clear();const ft=d.toneMapping;d.toneMapping=bn,Ie(T,F,W),d.toneMapping=ft,pt.updateMultisampleRenderTarget(z),pt.updateRenderTargetMipmap(z),d.setRenderTarget(X)}function Ie(T,F,W){const R=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ft=T.length;X<ft;X++){const gt=T[X],yt=gt.object,vt=gt.geometry,Pt=R===null?gt.material:R,Tt=gt.group;yt.layers.test(W.layers)&&Eu(yt,F,W,vt,Pt,Tt)}}function Eu(T,F,W,R,X,ft){T.onBeforeRender(d,F,W,R,X,ft),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(d,F,W,R,T,ft),X.transparent===!0&&X.side===Nn?(X.side=Le,X.needsUpdate=!0,d.renderBufferDirect(W,F,R,X,T,ft),X.side=Xi,X.needsUpdate=!0,d.renderBufferDirect(W,F,R,X,T,ft),X.side=Nn):d.renderBufferDirect(W,F,R,X,T,ft),T.onAfterRender(d,F,W,R,X,ft)}function Ur(T,F,W){F.isScene!==!0&&(F=it);const R=St.get(T),X=f.state.lights,ft=f.state.shadowsArray,gt=X.state.version,yt=Rt.getParameters(T,X.state,ft,F,W),vt=Rt.getProgramCacheKey(yt);let Pt=R.programs;R.environment=T.isMeshStandardMaterial?F.environment:null,R.fog=F.fog,R.envMap=(T.isMeshStandardMaterial?ye:ne).get(T.envMap||R.environment),Pt===void 0&&(T.addEventListener("dispose",P),Pt=new Map,R.programs=Pt);let Tt=Pt.get(vt);if(Tt!==void 0){if(R.currentProgram===Tt&&R.lightsStateVersion===gt)return go(T,yt),Tt}else yt.uniforms=Rt.getUniforms(T),T.onBuild(W,yt,d),T.onBeforeCompile(yt,d),Tt=Rt.acquireProgram(yt,vt),Pt.set(vt,Tt),R.uniforms=yt.uniforms;const Et=R.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=b.uniform),go(T,yt),R.needsLights=Lu(T),R.lightsStateVersion=gt,R.needsLights&&(Et.ambientLightColor.value=X.state.ambient,Et.lightProbe.value=X.state.probe,Et.directionalLights.value=X.state.directional,Et.directionalLightShadows.value=X.state.directionalShadow,Et.spotLights.value=X.state.spot,Et.spotLightShadows.value=X.state.spotShadow,Et.rectAreaLights.value=X.state.rectArea,Et.ltc_1.value=X.state.rectAreaLTC1,Et.ltc_2.value=X.state.rectAreaLTC2,Et.pointLights.value=X.state.point,Et.pointLightShadows.value=X.state.pointShadow,Et.hemisphereLights.value=X.state.hemi,Et.directionalShadowMap.value=X.state.directionalShadowMap,Et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Et.spotShadowMap.value=X.state.spotShadowMap,Et.spotLightMatrix.value=X.state.spotLightMatrix,Et.spotLightMap.value=X.state.spotLightMap,Et.pointShadowMap.value=X.state.pointShadowMap,Et.pointShadowMatrix.value=X.state.pointShadowMatrix);const Gt=Tt.getUniforms(),qn=us.seqWithValue(Gt.seq,Et);return R.currentProgram=Tt,R.uniformsList=qn,Tt}function go(T,F){const W=St.get(T);W.outputEncoding=F.outputEncoding,W.instancing=F.instancing,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Au(T,F,W,R,X){F.isScene!==!0&&(F=it),pt.resetTextureUnits();const ft=F.fog,gt=R.isMeshStandardMaterial?F.environment:null,yt=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:di,vt=(R.isMeshStandardMaterial?ye:ne).get(R.envMap||gt),Pt=R.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Tt=!!R.normalMap&&!!W.attributes.tangent,Et=!!W.morphAttributes.position,Gt=!!W.morphAttributes.normal,qn=!!W.morphAttributes.color,_i=R.toneMapped?d.toneMapping:bn,xi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nn=xi!==void 0?xi.length:0,Lt=St.get(R),vi=f.state.lights;if(B===!0&&(I===!0||T!==M)){const Se=T===M&&R.id===y;b.setState(R,T,Se)}let Yt=!1;R.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==vi.state.version||Lt.outputEncoding!==yt||X.isInstancedMesh&&Lt.instancing===!1||!X.isInstancedMesh&&Lt.instancing===!0||X.isSkinnedMesh&&Lt.skinning===!1||!X.isSkinnedMesh&&Lt.skinning===!0||Lt.envMap!==vt||R.fog===!0&&Lt.fog!==ft||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==b.numPlanes||Lt.numIntersection!==b.numIntersection)||Lt.vertexAlphas!==Pt||Lt.vertexTangents!==Tt||Lt.morphTargets!==Et||Lt.morphNormals!==Gt||Lt.morphColors!==qn||Lt.toneMapping!==_i||_t.isWebGL2===!0&&Lt.morphTargetsCount!==nn)&&(Yt=!0):(Yt=!0,Lt.__version=R.version);let Fe=Lt.currentProgram;Yt===!0&&(Fe=Ur(R,F,X));let Cn=!1,sr=!1,Ds=!1;const fe=Fe.getUniforms(),Yn=Lt.uniforms;if(lt.useProgram(Fe.program)&&(Cn=!0,sr=!0,Ds=!0),R.id!==y&&(y=R.id,sr=!0),Cn||M!==T){if(fe.setValue(j,"projectionMatrix",T.projectionMatrix),_t.logarithmicDepthBuffer&&fe.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,sr=!0,Ds=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const Se=fe.map.cameraPosition;Se!==void 0&&Se.setValue(j,$.setFromMatrixPosition(T.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&fe.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||X.isSkinnedMesh)&&fe.setValue(j,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){fe.setOptional(j,X,"bindMatrix"),fe.setOptional(j,X,"bindMatrixInverse");const Se=X.skeleton;Se&&(_t.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),fe.setValue(j,"boneTexture",Se.boneTexture,pt),fe.setValue(j,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=W.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&_t.isWebGL2===!0)&&tt.update(X,W,R,Fe),(sr||Lt.receiveShadow!==X.receiveShadow)&&(Lt.receiveShadow=X.receiveShadow,fe.setValue(j,"receiveShadow",X.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Yn.envMap.value=vt,Yn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),sr&&(fe.setValue(j,"toneMappingExposure",d.toneMappingExposure),Lt.needsLights&&Cu(Yn,Ds),ft&&R.fog===!0&&hn.refreshFogUniforms(Yn,ft),hn.refreshMaterialUniforms(Yn,R,G,L,z),us.upload(j,Lt.uniformsList,Yn,pt)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(us.upload(j,Lt.uniformsList,Yn,pt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&fe.setValue(j,"center",X.center),fe.setValue(j,"modelViewMatrix",X.modelViewMatrix),fe.setValue(j,"normalMatrix",X.normalMatrix),fe.setValue(j,"modelMatrix",X.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Se=R.uniformsGroups;for(let Is=0,Pu=Se.length;Is<Pu;Is++)if(_t.isWebGL2){const _o=Se[Is];ot.update(_o,Fe),ot.bind(_o,Fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fe}function Cu(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Lu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,F,W){St.get(T.texture).__webglTexture=F,St.get(T.depthTexture).__webglTexture=W;const R=St.get(T);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=W===void 0,R.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const W=St.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){S=T,_=F,v=W;let R=!0;if(T){const vt=St.get(T);vt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),R=!1):vt.__webglFramebuffer===void 0?pt.setupRenderTarget(T):vt.__hasExternalTextures&&pt.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture)}let X=null,ft=!1,gt=!1;if(T){const vt=T.texture;(vt.isData3DTexture||vt.isDataArrayTexture)&&(gt=!0);const Pt=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Pt[F],ft=!0):_t.isWebGL2&&T.samples>0&&pt.useMultisampledRTT(T)===!1?X=St.get(T).__webglMultisampledFramebuffer:X=Pt,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(D).multiplyScalar(G).floor(),C.copy(U).multiplyScalar(G).floor(),x=q;if(lt.bindFramebuffer(36160,X)&&_t.drawBuffers&&R&&lt.drawBuffers(T,X),lt.viewport(E),lt.scissor(C),lt.setScissorTest(x),ft){const vt=St.get(T.texture);j.framebufferTexture2D(36160,36064,34069+F,vt.__webglTexture,W)}else if(gt){const vt=St.get(T.texture),Pt=F||0;j.framebufferTextureLayer(36160,36064,vt.__webglTexture,W||0,Pt)}y=-1},this.readRenderTargetPixels=function(T,F,W,R,X,ft,gt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt){lt.bindFramebuffer(36160,yt);try{const vt=T.texture,Pt=vt.format,Tt=vt.type;if(Pt!==an&&k.convert(Pt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=Tt===yr&&(mt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Tt!==fi&&k.convert(Tt)!==j.getParameter(35738)&&!(Tt===ri&&(_t.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-R&&W>=0&&W<=T.height-X&&j.readPixels(F,W,R,X,k.convert(Pt),k.convert(Tt),ft)}finally{const vt=S!==null?St.get(S).__webglFramebuffer:null;lt.bindFramebuffer(36160,vt)}}},this.copyFramebufferToTexture=function(T,F,W=0){const R=Math.pow(2,-W),X=Math.floor(F.image.width*R),ft=Math.floor(F.image.height*R);pt.setTexture2D(F,0),j.copyTexSubImage2D(3553,W,0,0,T.x,T.y,X,ft),lt.unbindTexture()},this.copyTextureToTexture=function(T,F,W,R=0){const X=F.image.width,ft=F.image.height,gt=k.convert(W.format),yt=k.convert(W.type);pt.setTexture2D(W,0),j.pixelStorei(37440,W.flipY),j.pixelStorei(37441,W.premultiplyAlpha),j.pixelStorei(3317,W.unpackAlignment),F.isDataTexture?j.texSubImage2D(3553,R,T.x,T.y,X,ft,gt,yt,F.image.data):F.isCompressedTexture?j.compressedTexSubImage2D(3553,R,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,gt,F.mipmaps[0].data):j.texSubImage2D(3553,R,T.x,T.y,gt,yt,F.image),R===0&&W.generateMipmaps&&j.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W,R,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=T.max.x-T.min.x+1,gt=T.max.y-T.min.y+1,yt=T.max.z-T.min.z+1,vt=k.convert(R.format),Pt=k.convert(R.type);let Tt;if(R.isData3DTexture)pt.setTexture3D(R,0),Tt=32879;else if(R.isDataArrayTexture)pt.setTexture2DArray(R,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,R.flipY),j.pixelStorei(37441,R.premultiplyAlpha),j.pixelStorei(3317,R.unpackAlignment);const Et=j.getParameter(3314),Gt=j.getParameter(32878),qn=j.getParameter(3316),_i=j.getParameter(3315),xi=j.getParameter(32877),nn=W.isCompressedTexture?W.mipmaps[0]:W.image;j.pixelStorei(3314,nn.width),j.pixelStorei(32878,nn.height),j.pixelStorei(3316,T.min.x),j.pixelStorei(3315,T.min.y),j.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?j.texSubImage3D(Tt,X,F.x,F.y,F.z,ft,gt,yt,vt,Pt,nn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Tt,X,F.x,F.y,F.z,ft,gt,yt,vt,nn.data)):j.texSubImage3D(Tt,X,F.x,F.y,F.z,ft,gt,yt,vt,Pt,nn),j.pixelStorei(3314,Et),j.pixelStorei(32878,Gt),j.pixelStorei(3316,qn),j.pixelStorei(3315,_i),j.pixelStorei(32877,xi),X===0&&R.generateMipmaps&&j.generateMipmap(Tt),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?pt.setTextureCube(T,0):T.isData3DTexture?pt.setTexture3D(T,0):T.isDataArrayTexture?pt.setTexture2DArray(T,0):pt.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){_=0,v=0,S=null,lt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xc extends Eg{}xc.prototype.isWebGL1Renderer=!0;class Ag extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class vc extends Ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ll=new te,Da=new ac,as=new Ts,os=new O;class Cg extends _e{constructor(t=new un,e=new vc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=r,t.ray.intersectsSphere(as)===!1)return;Ll.copy(i).invert(),Da.copy(t.ray).applyMatrix4(Ll);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,d=m;g<d;g++){const p=c.getX(g);os.fromBufferAttribute(h,p),Pl(os,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,d=m;g<d;g++)os.fromBufferAttribute(h,g),Pl(os,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Pl(o,t,e,n,i,r,a){const s=Da.distanceSqToPoint(o);if(s<e){const l=new O;Da.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:a})}}class Or extends un{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const v=[],S=_/n;let y=0;_==0&&a==0?y=.5/e:_==n&&l==Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const E=M/e;h.x=-t*Math.cos(i+E*r)*Math.sin(a+S*s),h.y=t*Math.cos(a+S*s),h.z=t*Math.sin(i+E*r)*Math.sin(a+S*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(E+y,1-S),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<e;v++){const S=u[_][v+1],y=u[_][v],M=u[_+1][v],E=u[_+1][v+1];(_!==0||a>0)&&m.push(S,y,E),(_!==n-1||l<Math.PI)&&m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}static fromJSON(t){return new Or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Dl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Lg{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Pg=new Lg;class Mc{constructor(t){this.manager=t!==void 0?t:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Dg extends Mc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Dl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Sr("img");function l(){u(),Dl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class Rg extends Mc{constructor(t){super(t)}load(t,e,n,i){const r=new He,a=new Dg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);function vn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function yc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},Ja,ce,Zt,Ge=1e8,Ft=1/Ge,Ra=Math.PI*2,Ig=Ra/4,Fg=0,Sc=Math.sqrt,Og=Math.cos,Ng=Math.sin,ee=function(t){return typeof t=="string"},Wt=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},Qa=function(t){return typeof t>"u"},cn=function(t){return typeof t=="object"},xe=function(t){return t!==!1},bc=function(){return typeof window<"u"},ls=function(t){return Wt(t)||ee(t)},wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ue=Array.isArray,Ia=/(?:-?\.?\d|\.)+/gi,Tc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ec=/[+-]=-?[.\d]+/,Ac=/[^,'"\[\]\s]+/gi,zg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,ze,Fa,to,De={},ps={},Cc,Lc=function(t){return(ps=mi(t,De))&&Re},eo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ms=function(t,e){return!e&&console.warn(t)},Pc=function(t,e){return t&&(De[t]=e)&&ps&&(ps[t]=e)||De},br=function(){return 0},Ug={suppressEvents:!0,isStart:!0,kill:!1},hs={suppressEvents:!0,kill:!1},Bg={suppressEvents:!0},no={},Gn=[],Oa={},Dc,Ee={},da={},Rl=30,fs=[],io="",ro=function(t){var e=t[0],n,i;if(cn(e)||Wt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fs.length;i--&&!fs[i].targetTest(e););n=fs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Qc(t[i],n)))||t.splice(i,1);return t},ci=function(t){return t._gsap||ro(Ve(t))[0]._gsap},Rc=function(t,e,n){return(n=t[e])&&Wt(n)?t[e]():Qa(n)&&t.getAttribute&&t.getAttribute(e)||n},ve=function(t,e){return(t=t.split(",")).forEach(e)||t},qt=function(t){return Math.round(t*1e5)/1e5||0},re=function(t){return Math.round(t*1e7)/1e7||0},Vi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gs=function(){var t=Gn.length,e=Gn.slice(0),n,i;for(Oa={},Gn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ic=function(t,e,n,i){Gn.length&&!ce&&gs(),t.render(e,n,i||ce&&e<0&&(t._initted||t._startAt)),Gn.length&&!ce&&gs()},Fc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ac).length<2?e:ee(t)?t.trim():t},Oc=function(t){return t},Xe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Gg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},mi=function(t,e){for(var n in e)t[n]=e[n];return t},Il=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=cn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},_s=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},_r=function(t){var e=t.parent||Ut,n=t.keyframes?Gg(ue(t.keyframes)):Xe;if(xe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},As=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Wn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ui=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Wg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Na=function(t,e,n,i){return t._startAt&&(ce?t._startAt.revert(hs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Hg=function o(t){return!t||t._ts&&o(t.parent)},Fl=function(t){return t._repeat?Ki(t._tTime,t=t.duration()+t._rDelay)*t:0},Ki=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},xs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Cs=function(t){return t._end=re(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ft)||0))},Ls=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Cs(t),n._dirty||ui(n,t)),t},zc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=xs(t.rawTime(),e),(!e._dur||Nr(0,e.totalDuration(),n)-e._tTime>Ft)&&e.render(n,!0)),ui(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ft}},sn=function(t,e,n,i){return e.parent&&Wn(e),e._start=re((Tn(n)?n:n||t!==Ut?Ne(t,n,e):t._time)+e._delay),e._end=re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nc(t,e,"_first","_last",t._sort?"_start":0),za(e)||(t._recent=e),i||zc(t,e),t._ts<0&&Ls(t,t._tTime),t},Uc=function(t,e){return(De.ScrollTrigger||eo("scrollTrigger",e))&&De.ScrollTrigger.create(e,t)},Bc=function(t,e,n,i,r){if(ao(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dc!==Ce.frame)return Gn.push(t),t._lazy=[r,i],1},Xg=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},za=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qg=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Xg(t)&&!(!t._initted&&za(t))||(t._ts<0||t._dp._ts<0)&&!za(t))?0:1,s=t._rDelay,l=0,c,u,h;if(s&&t._repeat&&(l=Nr(0,t._tDur,e),u=Ki(l,s),t._yoyo&&u&1&&(a=1-a),u!==Ki(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ce||i||t._zTime===Ft||!e&&t._zTime){if(!t._initted&&Bc(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ft:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Na(t,e,n,!0),t._onUpdate&&!n&&We(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&We(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Wn(t,1),!n&&!ce&&(We(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ji=function(t,e,n,i){var r=t._repeat,a=re(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:re(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Ls(t,t._tTime=t._tDur*s),t.parent&&Cs(t),n||ui(t.parent,t),t},Ol=function(t){return t instanceof ge?ui(t):Ji(t,t._dur)},jg={_start:0,endTime:br,totalDuration:br},Ne=function o(t,e,n){var i=t.labels,r=t._recent||jg,a=t.duration()>=Ge?r.endTime(!1):t._dur,s,l,c;return ee(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(ue(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},xr=function(t,e,n){var i=Tn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=xe(l.vars.inherit)&&l.parent;a.immediateRender=xe(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Kt(e[0],a,e[r+1])},Xn=function(t,e){return t||t===0?e(t):e},Nr=function(t,e,n){return n<t?t:n>e?e:n},le=function(t,e){return!ee(t)||!(e=zg.exec(t))?"":e[1]},Zg=function(t,e,n){return Xn(n,function(i){return Nr(t,e,i)})},Ua=[].slice,kc=function(t,e){return t&&cn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&cn(t[0]))&&!t.nodeType&&t!==ze},$g=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ee(i)&&!e||kc(i,1)?(r=n).push.apply(r,Ve(i)):n.push(i)})||n},Ve=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):ee(t)&&!n&&(Fa||!Qi())?Ua.call((e||to).querySelectorAll(t),0):ue(t)?$g(t,n):kc(t)?Ua.call(t,0):t?[t]:[]},Ba=function(t){return t=Ve(t)[0]||ms("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ve(e,n.querySelectorAll?n:n===t?ms("Invalid scope")||to.createElement("div"):t)}},Gc=function(t){return t.sort(function(){return .5-Math.random()})},Vc=function(t){if(Wt(t))return t;var e=cn(t)?t:{each:t},n=hi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,h=i;return ee(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=a[d],_,v,S,y,M,E,C,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ge])[1],!w){for(C=-Ge;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,v=w===Ge?0:l?d*h/w-.5:i/w|0,C=0,x=Ge,E=0;E<d;E++)S=E%w-_,y=v-(E/w|0),p[E]=M=c?Math.abs(c==="y"?y:S):Sc(S*S+y*y),M>C&&(C=M),M<x&&(x=M);i==="random"&&Gc(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=le(e.amount||e.each)||0,n=n&&d<0?$c(n):n}return d=(p[f]-p.min)/p.max||0,re(p.b+(n?n(d):d)*p.v)+p.u}},ka=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Tn(n)?0:le(n))}},Wc=function(t,e){var n=ue(t),i,r;return!n&&cn(t)&&(i=n=t.radius||Ge,t.values?(t=Ve(t.values),(r=!Tn(t[0]))&&(i*=i)):t=ka(t.increment)),Xn(e,n?Wt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ge,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-s,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,r||u===a||Tn(a)?u:u+le(a)}:ka(t))},Hc=function(t,e,n,i){return Xn(ue(t)?!e:n===!0?!!(n=0):!i,function(){return ue(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Jg=function(t,e){return function(n){return t(parseFloat(n))+(e||le(n))}},Qg=function(t,e,n){return qc(t,e,0,1,n)},Xc=function(t,e,n){return Xn(n,function(i){return t[~~e(i)]})},t_=function o(t,e,n){var i=e-t;return ue(t)?Xc(t,o(0,t.length),e):Xn(n,function(r){return(i+(r-t)%i)%i+t})},e_=function o(t,e,n){var i=e-t,r=i*2;return ue(t)?Xc(t,o(0,t.length-1),e):Xn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},wr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Ac:Ia),n+=t.substr(e,i-e)+Hc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},qc=function(t,e,n,i,r){var a=e-t,s=i-n;return Xn(r,function(l){return n+((l-t)/a*s||0)})},n_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ee(t),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ue(t)&&!ue(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=mi(ue(t)?[]:{},t));if(!u){for(l in e)so.call(s,t,l,"get",e[l]);r=function(g){return co(g,s)||(a?t.p:t)}}}return Xn(n,r)},Nl=function(t,e,n){var i=t.labels,r=Ge,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},We=function(t,e,n){var i=t.vars,r=i[e],a=Zt,s=t._ctx,l,c,u;if(!!r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gn.length&&gs(),s&&(Zt=s),u=l?r.apply(c,l):r.call(c),Zt=a,u},dr=function(t){return Wn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ce),t.progress()<1&&We(t,"onInterrupt"),t},Bi,i_=function(t){t=!t.name&&t.default||t;var e=t.name,n=Wt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:br,render:co,add:so,kill:v_,modifier:x_,rawVars:0},a={targetTest:0,get:0,getSetter:lo,aliases:{},register:0};if(Qi(),t!==i){if(Ee[e])return;Xe(i,Xe(_s(t,r),a)),mi(i.prototype,mi(r,_s(t,a))),Ee[i.prop=e]=i,t.targetTest&&(fs.push(i),no[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Pc(e,i),t.register&&t.register(Re,i,Me)},It=255,pr={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},pa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*It+.5|0},Yc=function(t,e,n){var i=t?Tn(t)?[t>>16,t>>8&It,t&It]:0:pr.black,r,a,s,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pr[t])i=pr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&It,t&It]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ia),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=pa(l+1/3,r,a),i[1]=pa(l,r,a),i[2]=pa(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Tc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ia)||pr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/It,a=i[1]/It,s=i[2]/It,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jc=function(t){var e=[],n=[],i=-1;return t.split(Vn).forEach(function(r){var a=r.match(Ui)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zl=function(t,e,n){var i="",r=(t+i).match(Vn),a=e?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=Yc(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=jc(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Vn,"1").split(Ui),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Vn),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Vn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),r_=/hsl[a]?\(/,Zc=function(t){var e=t.join(" "),n;if(Vn.lastIndex=0,Vn.test(e))return n=r_.test(e),t[1]=zl(t[1],n),t[0]=zl(t[0],n,jc(t[1])),!0},Tr,Ce=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,m,g=function d(p){var _=o()-i,v=p===!0,S,y,M,E;if(_>t&&(n+=_-e),i+=_,M=i-n,S=M-a,(S>0||v)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=S+(S>=r?4:r-S),y=1),v||(l=c(d)),y)for(m=0;m<s.length;m++)s[m](M,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Cc&&(!Fa&&bc()&&(ze=Fa=window,to=ze.document||{},De.gsap=Re,(ze.gsapVersions||(ze.gsapVersions=[])).push(Re.version),Lc(ps||ze.GreenSockGlobals||!ze.gsap&&ze||{}),u=ze.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Tr=1,g(2))},sleep:function(){(u?ze.cancelAnimationFrame:clearTimeout)(l),Tr=0,c=br},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,v){var S=_?function(y,M,E,C){p(y,M,E,C),h.remove(S)}:p;return h.remove(p),s[v?"unshift":"push"](S),Qi(),S},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),Qi=function(){return!Tr&&Ce.wake()},wt={},s_=/^[\d.\-M][\d.\-,\s]/,a_=/["']/g,o_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(a_,"").trim():+c,i=l.substr(s+1).trim();return e},l_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},c_=function(t){var e=(t+"").split("("),n=wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[o_(e[1])]:l_(t).split(",").map(Fc)):wt._CE&&s_.test(t)?wt._CE("",t):n},$c=function(t){return function(e){return 1-t(1-e)}},Kc=function o(t,e){for(var n=t._first,i;n;)n instanceof ge?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},hi=function(t,e){return t&&(Wt(t)?t:wt[t]||c_(t))||e},gi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return ve(t,function(s){wt[s]=De[s]=r,wt[a=s.toLowerCase()]=n;for(var l in r)wt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=wt[s+"."+l]=r[l]}),r},Jc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ma=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ra*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ng((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:Jc(s);return r=Ra/r,l.config=function(c,u){return o(t,c,u)},l},ga=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Jc(n);return i.config=function(r){return o(t,r)},i};ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;gi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});wt.Linear.easeNone=wt.none=wt.Linear.easeIn;gi("Elastic",ma("in"),ma("out"),ma());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};gi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);gi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});gi("Circ",function(o){return-(Sc(1-o*o)-1)});gi("Sine",function(o){return o===1?1:-Og(o*Ig)+1});gi("Back",ga("in"),ga("out"),ga());wt.SteppedEase=wt.steps=De.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Ft;return function(s){return((i*Nr(0,a,s)|0)+r)*n}}};$i.ease=wt["quad.out"];ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return io+=o+","+o+"Params,"});var Qc=function(t,e){this.id=Fg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rc,this.set=e?e.getSetter:lo},tr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ji(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Tr||Ce.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ji(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ls(this,n),!r._dp||r.parent||zc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ic(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ki(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ft?0:this._rts,this.totalTime(Nr(-this._delay,this._tDur,i),!0),Cs(this),Wg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&sn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Bg);var i=ce;return ce=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ce=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ol(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ol(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ne(this,n),xe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ft:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ft)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Wt(n)?n:Oc,s=function(){var c=i.then;i.then=null,Wt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){dr(this)},o}();Xe(tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var ge=function(o){yc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xe(n.sortChildren),Ut&&sn(n.parent||Ut,vn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Uc(vn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return xr(0,arguments,this),this},e.from=function(i,r,a){return xr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return xr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,_r(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Kt(i,r,Ne(this,a),1),this},e.call=function(i,r,a){return sn(this,Kt.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,Ne(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,_r(a).immediateRender=xe(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,_r(s).immediateRender=xe(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:re(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,v,S,y,M,E,C;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,y=this._start,S=this._ts,_=!S,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=re(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),M=Ki(this._tTime,p),!s&&this._tTime&&M!==d&&(M=d),E&&d&1&&(f=c-f,C=1),d!==M&&!this._lock){var x=E&&M&1,w=x===(E&&d&1);if(d<M&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:re(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&We(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Kc(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Yg(this,re(s),re(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(We(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Ft);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||ce&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=L?-Ft:Ft);break}}m=g}}if(v&&!r&&(this.pause(),v.render(f>=s?0:-Ft)._zTime=f>=s?1:-1,this._ts))return this._start=y,Cs(this),this.render(i,r,a);this._onUpdate&&!r&&We(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(We(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Tn(r)||(r=Ne(this,r,i)),!(i instanceof tr)){if(ue(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ee(i))return this.addLabel(i,r);if(Wt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?sn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ge);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Kt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ee(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(As(this,i),i===this._recent&&(this._recent=this._last),ui(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=re(Ce.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ne(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=Kt.delayedCall(0,r||br,a);return s.data="isPause",this._hasPause=1,sn(this,s,Ne(this,i))},e.removePause=function(i){var r=this._first;for(i=Ne(this,i);r;)r._start===i&&r.data==="isPause"&&Wn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)zn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Ve(i),l=this._first,c=Tn(r),u;l;)l instanceof Kt?kg(l._targets,s)&&(c?(!zn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=Ne(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=Kt.to(a,Xe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ft,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ji(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Xe({startAt:{time:Ne(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nl(this,Ne(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nl(this,Ne(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ft)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ui(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ui(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=Ge,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,sn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Ji(a,a===Ut&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ut._ts&&(Ic(Ut,xs(i,Ut)),Dc=Ce.frame),Ce.frame>=Rl){Rl+=Pe.autoSleep||120;var r=Ut._first;if((!r||!r._ts)&&Pe.autoSleep&&Ce._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ce.sleep()}}},t}(tr);Xe(ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var u_=function(t,e,n,i,r,a,s){var l=new Me(this._pt,t,e,0,1,su,null,r),c=0,u=0,h,f,m,g,d,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=wr(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),f=n.match(fa)||[];h=fa.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Vi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=fa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Ec.test(i)||_)&&(l.e=0),this._pt=l,l},so=function(t,e,n,i,r,a,s,l,c,u){Wt(i)&&(i=i(r||0,t,a));var h=t[e],f=n!=="get"?n:Wt(h)?c?t[e.indexOf("set")||!Wt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Wt(h)?c?m_:iu:oo,g;if(ee(i)&&(~i.indexOf("random(")&&(i=wr(i)),i.charAt(1)==="="&&(g=Vi(f,i)+(le(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ga)return!isNaN(f*i)&&i!==""?(g=new Me(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?__:ru,0,m),c&&(g.fp=c),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&eo(e,i),u_.call(this,t,e,f,i,m,l||Pe.stringFilter,c))},h_=function(t,e,n,i,r){if(Wt(t)&&(t=vr(t,r,e,n,i)),!cn(t)||t.style&&t.nodeType||ue(t)||wc(t))return ee(t)?vr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=vr(t[s],r,e,n,i);return a},tu=function(t,e,n,i,r,a){var s,l,c,u;if(Ee[t]&&(s=new Ee[t]).init(r,s.rawVars?e[t]:h_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Me(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Bi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},zn,Ga,ao=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,v=t._targets,S=t.parent,y=S&&S.data==="nested"?S.vars.targets:v,M=t._overwrite==="auto"&&!Ja,E=t.timeline,C,x,w,L,G,K,N,D,U,q,Y,B,I;if(E&&(!g||!r)&&(r="none"),t._ease=hi(r,$i.ease),t._yEase=m?$c(hi(m===!0?r:m,$i.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(D=v[0]?ci(v[0]).harness:0,B=D&&i[D.prop],C=_s(i,no),_&&(_._zTime<0&&_.progress(1),e<0&&f&&s&&!d?_.render(-1,!0):_.revert(f&&p?hs:Ug),_._lazy=0),a){if(Wn(t._startAt=Kt.set(v,Xe({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!_&&xe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ce||!s&&!d)&&t._startAt.revert(hs),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!_){if(e&&(s=!1),w=Xe({overwrite:!1,data:"isFromStart",lazy:s&&!_&&xe(l),immediateRender:s,stagger:0,parent:S},C),B&&(w[D.prop]=B),Wn(t._startAt=Kt.set(v,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ce?t._startAt.revert(hs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Ft,Ft);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&xe(l)||l&&!p,x=0;x<v.length;x++){if(G=v[x],N=G._gsap||ro(v)[x]._gsap,t._ptLookup[x]=q={},Oa[N.id]&&Gn.length&&gs(),Y=y===v?x:y.indexOf(G),D&&(U=new D).init(G,B||C,t,Y,y)!==!1&&(t._pt=L=new Me(t._pt,G,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){q[z]=L}),U.priority&&(K=1)),!D||B)for(w in C)Ee[w]&&(U=tu(w,C,t,Y,G,y))?U.priority&&(K=1):q[w]=L=so.call(t,G,w,"get",C[w],Y,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(G,t._op[x]),M&&t._pt&&(zn=t,Ut.killTweensOf(G,q,t.globalTime(e)),I=!t.parent,zn=0),t._pt&&l&&(Oa[N.id]=1)}K&&au(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!I,g&&e<=0&&E.render(Ge,!0,!0)},f_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Ga=1,t.vars[e]="+=0",ao(t,s),Ga=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=qt(n)+le(u.e)),u.b&&(u.b=c.s+le(u.b))},d_=function(t,e){var n=t[0]?ci(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=mi({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},p_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(ue(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},vr=function(t,e,n,i,r){return Wt(t)?t.call(e,n,i,r):ee(t)&&~t.indexOf("random(")?wr(t):t},eu=io+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nu={};ve(eu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return nu[o]=1});var Kt=function(o){yc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:_r(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Ut,S=(ue(n)||wc(n)?Tn(n[0]):"length"in i)?[n]:Ve(n),y,M,E,C,x,w,L,G;if(s._targets=S.length?ro(S):ms("GSAP target "+n+" not found. https://greensock.com",!Pe.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||ls(c)||ls(u)){if(i=s.vars,y=s.timeline=new ge({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:S}),y.kill(),y.parent=y._dp=vn(s),y._start=0,f||ls(c)||ls(u)){if(C=S.length,L=f&&Vc(f),cn(f))for(x in f)~eu.indexOf(x)&&(G||(G={}),G[x]=f[x]);for(M=0;M<C;M++)E=_s(i,nu),E.stagger=0,_&&(E.yoyoEase=_),G&&mi(E,G),w=S[M],E.duration=+vr(c,vn(s),M,w,S),E.delay=(+vr(u,vn(s),M,w,S)||0)-s._delay,!f&&C===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),y.to(w,E,L?L(M,w,S):0),y._ease=wt.none;y.duration()?c=u=0:s.timeline=0}else if(g){_r(Xe(y.vars.defaults,{ease:"none"})),y._ease=hi(g.ease||i.ease||"none");var K=0,N,D,U;if(ue(g))g.forEach(function(q){return y.to(S,q,">")}),y.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||p_(x,g[x],E,g.easeEach);for(x in E)for(N=E[x].sort(function(q,Y){return q.t-Y.t}),K=0,M=0;M<N.length;M++)D=N[M],U={ease:D.e,duration:(D.t-(M?N[M-1].t:0))/100*c},U[x]=D.v,y.to(S,U,K),K+=U.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||s.duration(c=y.duration())}else s.timeline=0;return m===!0&&!Ja&&(zn=vn(s),Ut.killTweensOf(S),zn=0),sn(v,vn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===re(v._time)&&xe(h)&&Hg(vn(s))&&v.data!=="nested")&&(s._tTime=-Ft,s.render(Math.max(0,-u)||0)),p&&Uc(vn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ft&&!u?l:i<Ft?0:i,f,m,g,d,p,_,v,S,y;if(!c)qg(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=re(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),p=Ki(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(S&&this._yEase&&Kc(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(re(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Bc(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!s&&!r&&(We(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;S&&S.render(i<0?i:!f&&_?-Ft:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Na(this,i,r,a),We(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&We(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Na(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Wn(this,1),!r&&!(u&&!s)&&(h||s||_)&&(We(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Tr||Ce.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ao(this,l),c=this._ease(l/this._dur),f_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Ls(this,0),this.parent||Nc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?dr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zn&&zn.vars.overwrite!==!0)._first||dr(this),this.parent&&a!==this.timeline.totalDuration()&&Ji(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Ve(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&Vg(s,l))return r==="all"&&(this._pt=0),dr(this);for(h=this._op=this._op||[],r!=="all"&&(ee(r)&&(d={},ve(r,function(v){return d[v]=1}),r=d),r=d_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&As(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&dr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return xr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return xr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ut.killTweensOf(i,r,a)},t}(tr);Xe(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ve("staggerTo,staggerFrom,staggerFromTo",function(o){Kt[o]=function(){var t=new ge,e=Ua.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var oo=function(t,e,n){return t[e]=n},iu=function(t,e,n){return t[e](n)},m_=function(t,e,n,i){return t[e](i.fp,n)},g_=function(t,e,n){return t.setAttribute(e,n)},lo=function(t,e){return Wt(t[e])?iu:Qa(t[e])&&t.setAttribute?g_:oo},ru=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},__=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},su=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},co=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},x_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},v_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?As(this,e,"_pt"):e.dep||(n=1),e=i;return!n},M_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},au=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Me=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||ru,this.d=l||this,this.set=c||oo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=M_,this.m=n,this.mt=r,this.tween=i},o}();ve(io+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return no[o]=1});De.TweenMax=De.TweenLite=Kt;De.TimelineLite=De.TimelineMax=ge;Ut=new ge({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pe.stringFilter=Zc;var er=[],ds={},y_=[],Ul=0,_a=function(t){return(ds[t]||y_).map(function(e){return e()})},Va=function(){var t=Date.now(),e=[];t-Ul>2&&(_a("matchMediaInit"),er.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=ze.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),_a("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Ul=t,_a("matchMedia"))},ou=function(){function o(e,n){this.selector=n&&Ba(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var a=this,s=function(){var c=Zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Ba(r)),Zt=a,h=i.apply(a,arguments),Wt(h)&&a._r.push(h),Zt=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===Wt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof tr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=er.indexOf(this);~s&&er.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),S_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){cn(n)||(n={matches:n});var a=new ou(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ze.matchMedia(n[c]),l&&(er.indexOf(a)<0&&er.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Va):l.addEventListener("change",Va)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),vs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return i_(i)})},timeline:function(t){return new ge(t)},getTweensOf:function(t,e){return Ut.getTweensOf(t,e)},getProperty:function(t,e,n,i){ee(t)&&(t=Ve(t)[0]);var r=ci(t||{}).get,a=n?Oc:Fc;return n==="native"&&(n=""),t&&(e?a((Ee[e]&&Ee[e].get||r)(t,e,n,i)):function(s,l,c){return a((Ee[s]&&Ee[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=Ve(t),t.length>1){var i=t.map(function(u){return Re.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Ee[e],s=ci(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Bi._pt=0,h.init(t,n?u+n:u,Bi,0,[t]),h.render(1,h),Bi._pt&&co(1,Bi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Re.to(t,mi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Ut.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hi(t.ease,$i.ease)),Il($i,t||{})},config:function(t){return Il(Pe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ee[s]&&!De[s]&&ms(e+" effect requires "+s+" plugin.")}),da[e]=function(s,l,c){return n(Ve(s),Xe(l||{},r),c)},a&&(ge.prototype[e]=function(s,l,c){return this.add(da[e](s,cn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){wt[t]=hi(e)},parseEase:function(t,e){return arguments.length?hi(t,e):wt},getById:function(t){return Ut.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ge(t),i,r;for(n.smoothChildTiming=xe(t.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&sn(n,i,i._start-i._delay),i=r;return sn(Ut,n,0),n},context:function(t,e){return t?new ou(t,e):Zt},matchMedia:function(t){return new S_(t)},matchMediaRefresh:function(){return er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Va()},addEventListener:function(t,e){var n=ds[t]||(ds[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ds[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:t_,wrapYoyo:e_,distribute:Vc,random:Hc,snap:Wc,normalize:Qg,getUnit:le,clamp:Zg,splitColor:Yc,toArray:Ve,selector:Ba,mapRange:qc,pipe:Kg,unitize:Jg,interpolate:n_,shuffle:Gc},install:Lc,effects:da,ticker:Ce,updateRoot:ge.updateRoot,plugins:Ee,globalTimeline:Ut,core:{PropTween:Me,globals:Pc,Tween:Kt,Timeline:ge,Animation:tr,getCache:ci,_removeLinkedListItem:As,reverting:function(){return ce},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return Ja=t}}};ve("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return vs[o]=Kt[o]});Ce.add(ge.updateRoot);Bi=vs.to({},{duration:0});var b_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},w_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=b_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},xa=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ee(r)&&(l={},ve(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}w_(s,r)}}}},Re=vs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},xa("roundProps",ka),xa("modifiers"),xa("snap",Wc))||vs;Kt.version=ge.version=Re.version="3.11.4";Cc=1;bc()&&Qi();wt.Power0;wt.Power1;wt.Power2;wt.Power3;wt.Power4;wt.Linear;wt.Quad;wt.Cubic;wt.Quart;wt.Quint;wt.Strong;wt.Elastic;wt.Back;wt.SteppedEase;wt.Bounce;wt.Sine;wt.Expo;wt.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bl,Un,Wi,uo,ai,kl,ho,T_=function(){return typeof window<"u"},En={},ei=180/Math.PI,Hi=Math.PI/180,Fi=Math.atan2,Gl=1e8,fo=/([A-Z])/g,E_=/(left|right|width|margin|padding|x)/i,A_=/[\s,\(]\S/,Sn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wa=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},C_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},L_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},P_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},D_=function(t,e,n){return t.style[e]=n},R_=function(t,e,n){return t.style.setProperty(e,n)},I_=function(t,e,n){return t._gsap[e]=n},F_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},O_=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},N_=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Bt="transform",Qe=Bt+"Origin",z_=function(t,e){var n=this,i=this.target,r=i.style;if(t in En){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Sn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Mn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Mn(i,t)),this.props.indexOf(Bt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qe,e,"")),t=Bt}(r||e)&&this.props.push(t,e,r[t])},uu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},U_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(fo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ho(),r&&!r.isStart&&!n[Bt]&&(uu(n),i.uncache=1)}},hu=function(t,e){var n={target:t,props:[],revert:U_,save:z_};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},fu,Ha=function(t,e){var n=Un.createElementNS?Un.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Un.createElement(t);return n.style?n:Un.createElement(t)},ln=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(fo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,nr(e)||e,1)||""},Vl="O,Moz,ms,Ms,Webkit".split(","),nr=function(t,e,n){var i=e||ai,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vl[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Vl[a]:"")+t},Xa=function(){T_()&&window.document&&(Bl=window,Un=Bl.document,Wi=Un.documentElement,ai=Ha("div")||{style:{}},Ha("div"),Bt=nr(Bt),Qe=Bt+"Origin",ai.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fu=!!nr("perspective"),ho=Re.core.reverting,uo=1)},va=function o(t){var e=Ha("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Wi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Wi.removeChild(e),this.style.cssText=r,a},Wl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},du=function(t){var e;try{e=t.getBBox()}catch{e=va.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===va||(e=va.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Wl(t,["x","cx","x1"])||0,y:+Wl(t,["y","cy","y1"])||0,width:0,height:0}:e},pu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&du(t))},Er=function(t,e){if(e){var n=t.style;e in En&&e!==Qe&&(e=Bt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(fo,"-$1").toLowerCase())):n.removeAttribute(e)}},Bn=function(t,e,n,i,r,a){var s=new Me(t._pt,e,n,0,1,a?cu:lu);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},Hl={deg:1,rad:1,turn:1},B_={grid:1,flex:1},Hn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ai.style,l=E_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Hl[i]||Hl[a]?r:(a!=="px"&&!f&&(r=o(t,e,n,"px")),_=t.getCTM&&pu(t),(m||a==="%")&&(En[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],qt(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?a:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Un||!d.appendChild)&&(d=Un.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Ce.time&&!p.uncache?qt(r/p.width*h):((m||a==="%")&&!B_[ln(d,"display")]&&(s.position=ln(t,"position")),d===t&&(s.position="static"),d.appendChild(ai),g=ai[u],d.removeChild(ai),s.position="absolute",l&&m&&(p=ci(d),p.time=Ce.time,p.width=d[u]),qt(f?g*r/h:g&&r?h/g*r:0))))},Mn=function(t,e,n,i){var r;return uo||Xa(),e in Sn&&e!=="transform"&&(e=Sn[e],~e.indexOf(",")&&(e=e.split(",")[0])),En[e]&&e!=="transform"?(r=Cr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ys(ln(t,Qe))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ms[e]&&Ms[e](t,e,n)||ln(t,e)||Rc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Hn(t,e,r,n)+n:r},k_=function(t,e,n,i){if(!n||n==="none"){var r=nr(e,t,1),a=r&&ln(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=ln(t,"borderTopColor"))}var s=new Me(this._pt,t.style,e,0,1,su),l=0,c=0,u,h,f,m,g,d,p,_,v,S,y,M;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=ln(t,e)||i,t.style[e]=n),u=[n,i],Zc(u),n=u[0],i=u[1],f=n.match(Ui)||[],M=i.match(Ui)||[],M.length){for(;h=Ui.exec(i);)p=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=Vi(m,p)+y),_=parseFloat(p),S=p.substr((_+"").length),l=Ui.lastIndex-S.length,S||(S=S||Pe.units[e]||y,l===i.length&&(i+=S,s.e+=S)),y!==S&&(m=Hn(t,e,d,S)||0),s._pt={_next:s._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?cu:lu;return Ec.test(i)&&(s.e=0),this._pt=s,s},Xl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xl[n]||n,e[1]=Xl[i]||i,e.join(" ")},V_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],En[s]&&(l=1,s=s==="transformOrigin"?Qe:Bt),Er(n,s);l&&(Er(n,Bt),a&&(a.svg&&n.removeAttribute("transform"),Cr(n,1),a.uncache=1,uu(i)))}},Ms={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Me(t._pt,e,n,0,0,V_);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Ar=[1,0,0,1,0,0],mu={},gu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ql=function(t){var e=ln(t,Bt);return gu(e)?Ar:e.substr(7).match(Tc).map(qt)},po=function(t,e){var n=t._gsap||ci(t),i=t.style,r=ql(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ar:r):(r===Ar&&!t.offsetParent&&t!==Wi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,Wi.appendChild(t)),r=ql(t),l?i.display=l:Er(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):Wi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},qa=function(t,e,n,i,r,a){var s=t._gsap,l=r||po(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],v=l[5],S=e.split(" "),y=parseFloat(S[0])||0,M=parseFloat(S[1])||0,E,C,x,w;n?l!==Ar&&(C=m*p-g*d)&&(x=y*(p/C)+M*(-d/C)+(d*v-p*_)/C,w=y*(-g/C)+M*(m/C)-(m*v-g*_)/C,y=x,M=w):(E=du(t),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(S[1]||S[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&s.smooth?(_=y-c,v=M-u,s.xOffset=h+(_*m+v*d)-_,s.yOffset=f+(_*g+v*p)-v):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=M,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[Qe]="0px 0px",a&&(Bn(a,s,"xOrigin",c,y),Bn(a,s,"yOrigin",u,M),Bn(a,s,"xOffset",h,s.xOffset),Bn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},Cr=function(t,e){var n=t._gsap||new Qc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=ln(t,Qe)||"0",u,h,f,m,g,d,p,_,v,S,y,M,E,C,x,w,L,G,K,N,D,U,q,Y,B,I,z,J,Z,$,it,dt;return u=h=f=d=p=_=v=S=y=0,m=g=1,n.svg=!!(t.getCTM&&pu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),C=po(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),qa(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,E=n.yOrigin||0,C!==Ar&&(G=C[0],K=C[1],N=C[2],D=C[3],u=U=C[4],h=q=C[5],C.length===6?(m=Math.sqrt(G*G+K*K),g=Math.sqrt(D*D+N*N),d=G||K?Fi(K,G)*ei:0,v=N||D?Fi(N,D)*ei+d:0,v&&(g*=Math.abs(Math.cos(v*Hi))),n.svg&&(u-=M-(M*G+E*N),h-=E-(M*K+E*D))):(dt=C[6],$=C[7],z=C[8],J=C[9],Z=C[10],it=C[11],u=C[12],h=C[13],f=C[14],x=Fi(dt,Z),p=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),Y=U*w+z*L,B=q*w+J*L,I=dt*w+Z*L,z=U*-L+z*w,J=q*-L+J*w,Z=dt*-L+Z*w,it=$*-L+it*w,U=Y,q=B,dt=I),x=Fi(-N,Z),_=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),Y=G*w-z*L,B=K*w-J*L,I=N*w-Z*L,it=D*L+it*w,G=Y,K=B,N=I),x=Fi(K,G),d=x*ei,x&&(w=Math.cos(x),L=Math.sin(x),Y=G*w+K*L,B=U*w+q*L,K=K*w-G*L,q=q*w-U*L,G=Y,U=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=qt(Math.sqrt(G*G+K*K+N*N)),g=qt(Math.sqrt(q*q+dt*dt)),x=Fi(U,q),v=Math.abs(x)>2e-4?x*ei:0,y=it?1/(it<0?-it:it):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gu(ln(t,Bt)),Y&&t.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=qt(m),n.scaleY=qt(g),n.rotation=qt(d)+s,n.rotationX=qt(p)+s,n.rotationY=qt(_)+s,n.skewX=v+s,n.skewY=S+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Qe]=ys(c)),n.xOffset=n.yOffset=0,n.force3D=Pe.force3D,n.renderTransform=n.svg?H_:fu?_u:W_,n.uncache=0,n},ys=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ma=function(t,e,n){var i=le(e);return qt(parseFloat(e)+parseFloat(Hn(t,"x",n+"px",i)))+i},W_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_u(t,e)},Kn="0deg",cr="0px",Jn=") ",_u=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,S=n.zOrigin,y="",M=_==="auto"&&t&&t!==1||_===!0;if(S&&(h!==Kn||u!==Kn)){var E=parseFloat(u)*Hi,C=Math.sin(E),x=Math.cos(E),w;E=parseFloat(h)*Hi,w=Math.cos(E),a=Ma(v,a,C*w*-S),s=Ma(v,s,-Math.sin(E)*-S),l=Ma(v,l,x*w*-S+S)}p!==cr&&(y+="perspective("+p+Jn),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||a!==cr||s!==cr||l!==cr)&&(y+=l!==cr||M?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Jn),c!==Kn&&(y+="rotate("+c+Jn),u!==Kn&&(y+="rotateY("+u+Jn),h!==Kn&&(y+="rotateX("+h+Jn),(f!==Kn||m!==Kn)&&(y+="skew("+f+", "+m+Jn),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Jn),v.style[Bt]=y||"translate(0, 0)"},H_=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,S=parseFloat(a),y=parseFloat(s),M,E,C,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Hi,c*=Hi,M=Math.cos(l)*h,E=Math.sin(l)*h,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Hi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=qt(M),E=qt(E),C=qt(C),x=qt(x)):(M=h,x=f,E=C=0),(S&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(S=Hn(m,"x",a,"px"),y=Hn(m,"y",s,"px")),(g||d||p||_)&&(S=qt(S+g-(g*M+d*C)+p),y=qt(y+d-(g*E+d*x)+_)),(i||r)&&(w=m.getBBox(),S=qt(S+i/100*w.width),y=qt(y+r/100*w.height)),w="matrix("+M+","+E+","+C+","+x+","+S+","+y+")",m.setAttribute("transform",w),v&&(m.style[Bt]=w)},X_=function(t,e,n,i,r){var a=360,s=ee(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ei:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gl)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gl)%a-~~(c/a)*a)),t._pt=f=new Me(t._pt,e,n,i,c,C_),f.e=u,f.u="deg",t._props.push(n),f},Yl=function(t,e){for(var n in e)t[n]=e[n];return t},q_=function(t,e,n){var i=Yl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Bt]=e,s=Cr(n,1),Er(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],a[Bt]=e,s=Cr(n,1),a[Bt]=c);for(l in En)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=le(c),g=le(u),h=m!==g?Hn(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Me(t._pt,s,l,h,f-h,Wa),t._pt.u=g||0,t._props.push(l));Yl(s,i)};ve("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});Ms[t>1?"border"+o:o]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Mn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var xu={name:"css",register:Xa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,v,S,y,M,E,C,x;uo||Xa(),this.styles=this.styles||hu(t),x=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Ee[d]&&tu(d,e,n,i,t,r)))){if(m=typeof u,g=Ms[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=wr(u)),g)g(this,t,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Vn.lastIndex=0,Vn.test(c)||(p=le(c),_=le(u)),_?p!==_&&(c=Hn(t,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,t,r):l[d],ee(c)&&~c.indexOf("random(")&&(c=wr(c)),le(c+"")||(c+=Pe.units[d]||le(Mn(t,d))||""),(c+"").charAt(1)==="="&&(c=Mn(t,d))):c=Mn(t,d),f=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),d in Sn&&(d==="autoAlpha"&&(f===1&&Mn(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),Bn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Sn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in En,S){if(this.styles.save(d),y||(M=t._gsap,M.renderTransform&&!e.parseTransform||Cr(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new Me(this._pt,s,Bt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Me(this._pt,M,"scaleY",M.scaleY,(v?Vi(M.scaleY,v+h):h)-M.scaleY||0,Wa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Qe,0,s[Qe]),u=G_(u),M.svg?qa(t,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Bn(this,M,"zOrigin",M.zOrigin,_),Bn(this,s,d,ys(c),ys(u)));continue}else if(d==="svgOrigin"){qa(t,u,1,E,0,this);continue}else if(d in mu){X_(this,M,d,f,v?Vi(f,v+u):u);continue}else if(d==="smoothOrigin"){Bn(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){q_(this,u,t);continue}}else d in s||(d=nr(d)||d);if(S||(h||h===0)&&(f||f===0)&&!A_.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=le(u)||(d in Pe.units?Pe.units[d]:p),p!==_&&(f=Hn(t,d,c,_)),this._pt=new Me(this._pt,S?M:s,d,f,(v?Vi(f,v+h):h)-f,!S&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?P_:Wa),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=L_);else if(d in s)k_.call(this,t,d,c,v?v+u:u);else if(d in t)this.add(t,d,c||t[d],v?v+u:u,i,r);else if(d!=="parseTransform"){eo(d,u);continue}S||(d in s?x.push(d,0,s[d]):x.push(d,1,c||t[d])),a.push(d)}}C&&au(this)},render:function(t,e){if(e.tween._time||!ho())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mn,aliases:Sn,getSetter:function(t,e,n){var i=Sn[e];return i&&i.indexOf(",")<0&&(e=i),e in En&&e!==Qe&&(t._gsap.x||Mn(t,"x"))?n&&kl===n?e==="scale"?F_:I_:(kl=n||{})&&(e==="scale"?O_:N_):t.style&&!Qa(t.style[e])?D_:~e.indexOf("-")?R_:lo(t,e)},core:{_removeProperty:Er,_getMatrix:po}};Re.utils.checkPrefix=nr;Re.core.getStyleSaver=hu;(function(o,t,e,n){var i=ve(o+","+t+","+e,function(r){En[r]=1});ve(t,function(r){Pe.units[r]="deg",mu[r]=1}),Sn[i[13]]=o+","+t,ve(n,function(r){var a=r.split(":");Sn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Pe.units[o]="px"});Re.registerPlugin(xu);var vu=Re.registerPlugin(xu)||Re;vu.core.Tween;const Y_="varying vec2 vectorUV;varying vec3 vertexNormal;void main(){vectorUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);}",j_="uniform sampler2D globeTexture;varying vec2 vectorUV;varying vec3 vertexNormal;void main(){float intensity=0.2-dot(vertexNormal,vec3(0.1,0.1,9));vec3 atmosphere=vec3(1,0,0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vectorUV).xyz,1.0);}",Z_="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1);}",$_="varying vec3 vertexNormal;void main(){float intensity=pow(0.9-dot(vertexNormal,vec3(0,0,1)),2.0);gl_FragColor=vec4(0,0.6,0.6,1)*intensity;}",zr=new Ag,Mu=new Be(75,innerWidth/innerHeight,.1,1e3),Ps=new xc({antialias:!0});Ps.setSize(innerWidth,innerHeight);Ps.setPixelRatio(window.devicePixelRatio);document.body.appendChild(Ps.domElement);const K_=new Rg().load("world.jpeg"),yu=new Ke(new Or(5,50,50),new wn({vertexShader:Y_,fragmentShader:j_,uniforms:{globeTexture:{value:K_}}}));zr.add(yu);const Su=new Ke(new Or(5,50,50),new wn({vertexShader:Z_,fragmentShader:$_,blending:Sa,side:Le}));Su.scale.set(1.1,1.1,1.1);zr.add(Su);const mo=new fr;mo.add(yu);zr.add(mo);const bu=new un,J_=new vc({color:16777215}),wu=[];for(let o=0;o<1e4;o++){const t=(Math.random()-.5)*5e3,e=(Math.random()-.5)*2e3,n=-Math.random()*3e3;wu.push(t,e,n)}bu.setAttribute("position",new Je(wu,3));const Q_=new Cg(bu,J_);zr.add(Q_);const t0=new Ke(new Or(1,20,20),new Za({color:"#fff"}));t0.position.z=6;Mu.position.z=20;const Mr={x:void 0,y:void 0},Tu=()=>{requestAnimationFrame(Tu),Ps.render(zr,Mu),vu.to(mo.rotation,{x:-Mr.y*.3,y:Mr.x*.5,duration:2})};Tu();addEventListener("mousemove",()=>{Mr.x=event.clientX/innerWidth*2-1,Mr.y=event.clientY/innerHeight*2+1,console.log(Mr)});const ya=document.getElementById("time-left"),jl=document.getElementById("leave"),e0=new Date("05/07/2023"),n0=new Date("05/16/2023"),Ss=1e3,mr=Ss*60,gr=mr*60,Oi=gr*24;let Ya;function i0(){const o=new Date,t=n0-o,e=e0-o;if(t<=0){ya.innerHTML="Ready?",clearInterval(Ya);return}if(t<=Oi){ya.innerHTML="Sending?",clearInterval(Ya);return}if(e<=Oi){jl.innerHTML="Waiting for Profile.?",clearInterval(t);return}const n=Math.floor(t/Oi),i=Math.floor(t%Oi/gr),r=Math.floor(t%gr/mr),a=Math.floor(t%mr/Ss),s=Math.floor(e/Oi),l=Math.floor(e%Oi/gr),c=Math.floor(e%gr/mr),u=Math.floor(e%mr/Ss);ya.innerHTML=`${n}: Day  H: ${i} M:${r} S:${a}`,jl.innerHTML=`${s}D: H: ${l} M:${c} S:${u}: Leaving soon World BETA1`}Ya=setInterval(i0,Ss);
